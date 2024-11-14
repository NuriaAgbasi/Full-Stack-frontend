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
    <button @click="checkout" class="btn btn-success">Checkout</button>
  </div>
</template>

<script>
export default {
  props: {
    cart: Array,
    removeFromCart: Function,
    checkout: Function,
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
