<template>
  <div class="card w-64 bg-pink-50 shadow-lg rounded-lg overflow-hidden relative">
    <div class="absolute top-2 right-2 text-pink-300">
      <span class="text-xl">🌸</span>
    </div>
    
    <div class="card-body text-center p-6">
      <img 
        :src="getImageUrl(lesson.image)" 
        alt="Lesson Image" 
        class="card-img-top rounded-full mb-4 border-4 border-pink-200"
        style="height: 150px; width: 150px; object-fit: cover;"
      >
      <h5 class="card-title text-xl font-semibold text-gray-800">{{ lesson.subject }}</h5>
      <p class="card-text text-gray-600 mt-2">Location: {{ lesson.location }}</p>
      <p class="card-text text-gray-600">Price: ${{ lesson.price }}</p>
      <p class="card-text text-gray-600 mb-4">Available Spaces: {{ lesson.spaces }}</p>
      

      <button
        @click="addToCart"
        :disabled="lesson.spaces === 0"
        :class="[
          'btn btn-primary',
          lesson.spaces === 0 ? 'bg-pink-200 cursor-not-allowed' : 'bg-pink-300 hover:bg-pink-400'
        ]"
      >
        Add to Cart
      </button>


      <p v-if="lesson.spaces === 0" class="text-red-500 mt-2 text-sm">
        Oh no, stock is finished! 😞
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lesson: Object,
    addToCart: Function,
  },
  methods: {
    getImageUrl(imagePath) {
      return `http://localhost:8000${imagePath}`;
    }
  }
}
</script>

<style scoped>
.card {
  background-color: #fef2f2; 
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.card-body {
  background-color: #ffffff;
  border-radius: 1rem;
}
.card-img-top {
  border-radius: 50%; 
  border: 4px solid #f8c5d0; 
  transition: transform 0.3s ease;
}
.card-img-top:hover {
  transform: scale(1.05); 
}
.btn-primary {
  background-color: #ec4899; 
  border-radius: 9999px;
  transition: background-color 0.3s;
}
.btn-primary:hover {
  background-color: #db2777; 
}
button:disabled {
  background-color: #f3b7e1;
  border: 4px solid #eaa2b1; 
  cursor: not-allowed;
}
</style>
