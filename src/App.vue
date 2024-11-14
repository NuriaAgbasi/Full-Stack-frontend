<template>
  <div class="container">
    <nav class="navbar navbar-light bg-light">
      <h1 class="navbar-brand">Vue.js Lesson Shop</h1>
      <div class="cart">
        <button @click="toggleCart" class="btn btn-secondary" :disabled="isCartEmpty">
          {{ showCart ? 'Back to Lessons' : 'Shopping Cart' }} ({{ cart.length }})
        </button>
      </div>
    </nav>

    <SortOptions v-if="!showCart" @sort-lessons="handleSort" />

    <div v-if="!showCart">
      <!-- Search Bar -->
      <div class="mb-3">
        <label for="search" class="form-label">Search Lessons</label>
        <input 
          type="text" 
          id="search" 
          v-model="searchQuery" 
          class="form-control" 
          placeholder="Search by subject or description"
        />
      </div>

      <h2>Lessons</h2>
      <div class="row">
        <LessonCard
          v-for="(lesson, index) in filteredAndSortedLessons"
          :key="index"
          :lesson="lesson"
          :addToCart="() => addToCart(lesson)"
        />
      </div>
    </div>

    <div v-else>
      <h2>Shopping Cart</h2>
      <div v-if="cart.length === 0">Your cart is empty.</div>
      <ul v-else>
        <li v-for="(lesson, index) in cart" :key="index">
          {{ lesson.subject }} - ${{ lesson.price }}
          <button @click="removeFromCart(index)" class="btn btn-danger btn-sm">Remove</button>
        </li>
      </ul>

      <form @submit.prevent="checkout">
        <div class="mb-3">
          <label for="name" class="form-label">Name:</label>
          <input 
            type="text" 
            id="name" 
            v-model="name" 
            class="form-control" 
            required 
            @input="validateForm"
          />
          <small v-if="nameError" class="text-danger">{{ nameError }}</small>
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">Phone:</label>
          <input 
            type="text" 
            id="phone" 
            v-model="phone" 
            class="form-control" 
            required 
            @input="validateForm"
          />
          <small v-if="phoneError" class="text-danger">{{ phoneError }}</small>
        </div>

        <button
          type="submit"
          class="btn btn-success"
          :disabled="!isFormValid"
        >
          Checkout
        </button>
      </form>

      <div v-if="message" class="mt-3 alert alert-success">{{ message }}</div>
    </div>
  </div>
</template>

<script>
import LessonCard from './components/LessonCard.vue';
import SortOptions from './components/SortOptions.vue';

export default {
  components: {
    LessonCard,
    SortOptions,
  },
  data() {
    return {
      lessons: [],  // Empty array to store lessons fetched from the backend
      cart: [],
      showCart: false,
      name: '',
      phone: '',
      message: '',
      nameError: null,
      phoneError: null,
      selectedSort: 'subject', // default sort attribute
      selectedOrder: 'asc', // default sort order
      searchQuery: '', // Search query for filtering lessons
    };
  },
  computed: {
    // Filter lessons 
    filteredAndSortedLessons() {
  return this.lessons
    .filter(lesson => {
      const searchString = this.searchQuery.toLowerCase();
      // Check if 'subject', 'price' contains the search query
      return (
        (lesson.subject && lesson.subject.toLowerCase().includes(searchString)) ||
        (lesson.location && lesson.location.toLowerCase().includes(searchString)) ||
        (lesson.price && lesson.price.toString().includes(searchString))  // Add price check here
      );
    })
    .sort((a, b) => {
      let result;
      if (typeof a[this.selectedSort] === 'string') {
        result = a[this.selectedSort].localeCompare(b[this.selectedSort]);
      } else {
        result = a[this.selectedSort] - b[this.selectedSort];
      }
      return this.selectedOrder === 'asc' ? result : -result;
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
      const lessonInCart = this.cart.find(item => item.id === lesson.id);
      if (lessonInCart) return;  // Don't add the same lesson again
      if (lesson.spaces > 0) {
        this.cart.push({ ...lesson });
        lesson.spaces--;
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

        // Submit the order to the backend
        fetch('http://localhost:8000/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderData),
        })
        .then(response => response.json())
        .then(orderResponse => {
          this.message = 'Order has been submitted!';
          console.log('Order Created:', orderResponse);

          // Update spaces for each lesson after successful order submission
          this.cart.forEach(lesson => {
            fetch(`http://localhost:8000/lessons/${lesson.id}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ spaces: lesson.spaces - 1 }),
            })
            .then(response => response.json())
            .then(updateResponse => console.log(`Updated lesson spaces for ${lesson.subject}:`, updateResponse))
            .catch(error => console.error('Error updating lesson:', error));
          });

          // Clear cart and reset form
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
    this.fetchLessons();  // Fetch lessons when the component is created
  },
};
</script>
