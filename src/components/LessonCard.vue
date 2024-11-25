<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div class="card bg-pink-50 shadow-lg rounded-lg overflow-hidden relative mb-4">
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
    const baseUrl = 'http://localhost:8000';  // Replace with the URL where your server is running
    return `${baseUrl}${imagePath}`;
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

/* Grid Layout for Cards */
.grid {
  display: grid;
  gap: 1.5rem;
}
.grid-cols-1 {
  grid-template-columns: repeat(1, 1fr);
}
.sm\\:grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}
.md\\:grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

/* Optional styling for card spacing */
.card {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
</style>
