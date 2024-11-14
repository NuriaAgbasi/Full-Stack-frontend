<template>
    <div class="cart">
      <button @click="toggleCart" class="btn button" :disabled="isCartEmpty">
        {{ showCart ? 'Back to Lessons' : 'Shopping Cart' }} ({{ cartLength }})
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isCartEmpty: Boolean,
      cartLength: Number,
      showCart: Boolean
    },
    methods: {
      toggleCart() {
        this.$emit('toggleCart');
      }
    }
  };
  </script>
  <style scoped>
  .button{
    background-color: rgb(207, 162, 175);
  }
</style>
  
  