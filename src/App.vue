<template>
  <div class="container">
    <nav class="navbar navbar-light">
      <h1 class="navbar-brand header">Vue.js Lesson Shop</h1>
      <CartButton class="showcart":isCartEmpty="isCartEmpty" @toggleCart="toggleCart" :cartLength="cart.length" :showCart="showCart"/>
    </nav>

    <SortOptions v-if="!showCart" @sort-lessons="handleSort" />
    <div>
      <input
        v-model="searchTerm"
        class="form-control"
        type="text"
        placeholder="Search Lessons"
      />
    </div>
    
    <div v-if="!showCart">
      <h2>Lessons</h2>
      <div class="row">
        <LessonCard
          v-for="(lesson, index) in filteredLessons"
          :key="index"
          :lesson="lesson"
          :addToCart="() => addToCart(lesson)"
        />
      </div>
    </div>

    <Cart v-else :cart="cart" @removeFromCart="removeFromCart" @checkout="checkout" :isFormValid="isFormValid" :nameError="nameError" :phoneError="phoneError" :message="message" />
  </div>
</template>

<script>
import LessonCard from './components/LessonCard.vue';
import SortOptions from './components/SortOptions.vue';
import CartButton from './components/CartButton.vue';
import Cart from './components/Cart.vue';

export default {
  components: {
    LessonCard,
    SortOptions,
    CartButton,
    Cart,
  },
  data() {
    return {
      lessons: [],
      cart: [],
      showCart: false,
      name: '',
      phone: '',
      message: '',
      nameError: null,
      phoneError: null,
      selectedSort: 'subject',
      selectedOrder: 'asc',
      searchTerm: '',
    };
  },
  computed: {
    sortedLessons() {
      return [...this.lessons].sort((a, b) => {
        let result;
        if (typeof a[this.selectedSort] === 'string') {
          result = a[this.selectedSort].localeCompare(b[this.selectedSort]);
        } else {
          result = a[this.selectedSort] - b[this.selectedSort];
        }
        return this.selectedOrder === 'asc' ? result : -result;
      });
    },
    filteredLessons() {
      return this.sortedLessons.filter(lesson => {
        return lesson.subject.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
               lesson.price.toString().includes(this.searchTerm);
      });
    },
    isFormValid() {
      return this.nameError === null && this.phoneError === null && this.name !== '' && this.phone !== '';
    },
    isCartEmpty() {
      return this.cart.length === 0;
    },
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
    },
    handleSort({ attribute, order }) {
      this.selectedSort = attribute;
      this.selectedOrder = order;
    },
    addToCart(lesson) {
      if (lesson.spaces > 0) {
        lesson.spaces--;
        this.cart.push(lesson);
      }
    },
    removeFromCart(index) {
      const removedLesson = this.cart[index];
      this.cart.splice(index, 1);
      const lessonInLessons = this.lessons.find(lesson => lesson.subject === removedLesson.subject);
      if (lessonInLessons) {
        lessonInLessons.spaces++;
      }
    },
    validateForm() {
      const nameRegex = /^[A-Za-z ]+$/;
      if (!nameRegex.test(this.name)) {
        this.nameError = 'Name must contain letters only';
      } else {
        this.nameError = null;
      }

      const phoneRegex = /^[0-9]+$/;
      if (!phoneRegex.test(this.phone)) {
        this.phoneError = 'Phone must contain numbers only';
      } else {
        this.phoneError = null;
      }
    },
    checkout() {
      if (this.isFormValid) {
        const orderData = {
          name: this.name,
          phoneNumber: this.phone,
          lessonIds: this.cart.map(lesson => lesson.id),
          numberOfSpaces: this.cart.length,
        };

        fetch('http://localhost:8000/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderData),
        })
        .then(response => response.json())
        .then(orderResponse => {
          this.message = 'Order has been submitted!';
          this.cart = [];
          this.name = '';
          this.phone = '';
        })
        .catch(error => {
          console.error('Error submitting order:', error);
          this.message = 'There was an error submitting your order.';
        });
      }
    },
    fetchLessons() {
      fetch('http://localhost:8000/lessons')
        .then(response => response.json())
        .then(data => { this.lessons = data; })
        .catch(error => console.error('Error fetching lessons:', error));
    },
  },
  created() {
    this.fetchLessons();
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
}
.card {
  margin: 10px;
}
.mb-3 {
  margin-bottom: 1rem;
}
.alert {
  margin-top: 20px;
}
.text-danger {
  font-size: 0.85rem;
}
</style>
