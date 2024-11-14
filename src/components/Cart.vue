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
  data() {
    return {
      name: '',
      phone: '',
      nameError: '',
      phoneError: '',
      isFormValid: false
    };
  },
  methods: {
    validateForm() {
      this.nameError = this.name ? '' : 'Name is required';
      this.phoneError = this.phone ? '' : 'Phone is required';
      this.isFormValid = this.name && this.phone && !this.nameError && !this.phoneError;
    },
    checkout() {
      if (this.isFormValid) {
        this.$emit('checkout');
      } else {
        this.validateForm();
      }
    },
    removeFromCart(index) {
      this.$emit('removeFromCart', index);
    }
  },
  watch: {
    name: 'validateForm',
    phone: 'validateForm',
    cart(newCart) {
      console.log('Cart items:', newCart);
    },
  }
};
</script>
