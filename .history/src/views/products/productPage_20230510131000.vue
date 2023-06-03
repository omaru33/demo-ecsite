<template>

  <div class="product-container">
      <img class="product-image" :src=this.product.image alt="商品画像">
      <div class="product-details">
        <div class="product-name">
          <h1>{{ product.name }}</h1>
        </div>
        <p class="product-description">{{this.product.description}}</p>
        <p class="product-price">{{ this.product.cost }}</p>
    <div>
      <select v-model="this.$store.state.selectedQuantity">
        <option v-for="i in 10" :key=i :value="Number(i)">{{i}}</option>
      </select>
    </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
           <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" @click="addToCart(this.product)" >Add to cart</a></div>
        </div>
      </div>
  </div>
  </template>
  
  <script>
  export default {
    props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    product() {
      return this.$store.state.products.find(product => product.id === this.id);
    }
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addProductToCart',product);
    }  
  }
  };
  </script>
  
  <style>
  .product-image {
    flex: 1;
    width: 500px;
    height: 500px;
  }
  
  .product-details {
    flex: 1;
    width: 40%;
    text-align: center;
  }
  
  .product-name {
    font-size: 24px;
    font-weight: bold;
    margin-top: 10px;
    line-height: 40px;
    margin-bottom: 10px;
  }
  
  .product-price {
    font-size: 18px;
    color: green;
    margin-bottom: 10px;
  }
  
  .product-description {
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .product-container {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px;
    display: flex;
    width: 60%;
    justify-content: center;
   align-items: center;
  }
  </style>