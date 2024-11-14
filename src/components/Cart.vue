<template>
  <div>
    <h2>Shopping Cart</h2>
    <div v-if="cart.length === 0">Your cart is empty.</div>
    <ul v-else>
      <li v-for="(lesson, index) in cart" :key="index">
        {{ lesson.subject }} - ${{ lesson.price }}
        <button @click="removeFromCart(index)" class="btn btn-danger btn-sm">Remove</button>
      </li>
    </ul>

    <form @submit.prevent="checkout">
      <!-- Form fields for name and phone with validation messages -->
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
</template>

<script>
export default {
  props: {
    cart: Array,
    isFormValid: Boolean,
    nameError: String,
    phoneError: String,
    message: String
  },
  methods: {
    removeFromCart(index) {
      this.$emit('removeFromCart', index);
    },
    checkout() {
      this.$emit('checkout');
    }
  }
};
</script>
