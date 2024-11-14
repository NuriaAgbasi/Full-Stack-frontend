<template>
    <div class="sort-options">
      <div class="form-group">
        <label for="sort-attribute">Sort By:</label>
        <select id="sort-attribute" v-model="selectedAttribute" class="form-control" @change="emitSortChange">
          <option value="subject">Subject</option>
          <option value="location">Location</option>
          <option value="price">Price</option>
          <option value="spaces">Spaces</option>
        </select>
      </div>
      <div class="form-group">
        <label for="sort-order">Order:</label>
        <select id="sort-order" v-model="selectedOrder" class="form-control" @change="emitSortChange">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedAttribute: 'subject', 
        selectedOrder: 'asc',
      };
    },
    methods: {
      emitSortChange() {
        this.$emit('sort-lessons', {
          attribute: this.selectedAttribute,
          order: this.selectedOrder,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .sort-options {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .form-group {
    width: 48%;
  }
  </style>
  