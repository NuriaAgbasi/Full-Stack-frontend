<template>
  <div class="card">
    <div class="card-body text-center">
      <i :class="lesson.icon" style="font-size: 40px;"></i>
      <h5 class="card-title">{{ lesson.subject }}</h5>
      <p class="card-text">Location: {{ lesson.location }}</p>
      <p class="card-text">Price: ${{ lesson.price }}</p>
      <p class="card-text">Available Spaces: {{ lesson.spaces }}</p>
      <button
        @click="addToCart"
        :disabled="lesson.spaces === 0"
        class="btn btn-primary"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lesson: Object,
    addToCart: Function,
  },
}
</script>

<style scoped>
.card {
  margin: 10px;
}
</style>
