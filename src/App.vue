<template>
   <div class="container mt-4">
    <nav class="navbar navbar-expand-lg navbar-light bg-gradient mb-4 p-3 shadow">
      <a class="navbar-brand text-white" href="#">Vue.js Lesson Shop</a>
      <button
        class="btn btn-outline-light ml-auto button"
        @click="toggleCart"
        :disabled="isCartEmpty"
      >
        {{ showCart ? 'Back to Lessons' : 'Shopping Cart' }} ({{ cart.length }})
      </button>
    </nav>

    <div v-if="!showCart">
      <button @click="showCart = false" class="btn btn-secondary mt-3">
        Back to Products
      </button>

      <SortOptions v-if="!showCart" @sort-lessons="handleSort" />

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
          class="col-md-4 mb-4"
        />
      </div>
    </div>

    <div v-else>
      <h2>Shopping Cart</h2>
      <div v-if="cart.length === 0" class="alert alert-info">Your cart is empty.</div>
      <ul class="list-group">
        <li
        v-for="(lesson, index) in cart"
        :key="index"
        class="list-group-item d-flex justify-content-between align-items-center cart-item"
      >
        <div class="cart-item-details">
          <p class="cart-item-subject">{{ lesson.subject }}</p>
          <div class="cart-item-quantity-price">
            <span class="cart-item-quantity">Quantity: {{ lesson.quantity }}</span>
            <span class="cart-item-price">Price: ${{ lesson.price }}</span>
          </div>
        </div>
        <button @click="removeFromCart(index)" class="btn btn-danger btn-sm remove-btn">
          Remove
        </button>
        </li>
      </ul>

      <!-- Checkout Form -->
      <form @submit.prevent="checkout" class="mt-4">
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

      <!-- Success Message -->
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
      searchQuery: '',
    };
  },
  computed: {
    filteredAndSortedLessons() {
      return this.lessons
        .filter(lesson => {
          const searchString = this.searchQuery.toLowerCase();
          return (
            (lesson.subject && lesson.subject.toLowerCase().includes(searchString)) ||
            (lesson.location && lesson.location.toLowerCase().includes(searchString)) ||
            (lesson.price && lesson.price.toString().includes(searchString))
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
      if (lessonInCart) {
        if (lesson.spaces > 0) {
          lessonInCart.quantity++;
          lesson.spaces--;
        }
      } else if (lesson.spaces > 0) {
        this.cart.push({ ...lesson, quantity: 1 });
        lesson.spaces--;
      }
    },
    removeFromCart(index) {
      const removedLesson = this.cart[index];
      if (removedLesson.quantity > 1) {
        removedLesson.quantity--;
        const lessonInLessons = this.lessons.find(lesson => lesson.id === removedLesson.id);
        if (lessonInLessons) {
          lessonInLessons.spaces++;
        }
      } else {
        this.cart.splice(index, 1);
        const lessonInLessons = this.lessons.find(lesson => lesson.id === removedLesson.id);
        if (lessonInLessons) {
          lessonInLessons.spaces++;
        }
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
          items: this.cart.map(lesson => ({
            id: lesson.id,
            subject: lesson.subject,
            price: lesson.price,
            quantity: lesson.quantity,
          })),
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
