<template>
  <div class="product-container">
    <div class="product-image">
      <!-- <img :src=this.$store.state.products[0].image alt="商品画像"> -->
      <img src="../../../public\images\sozai/dress.jpg" alt="商品画像">
    </div>
    <div class="product-details">
      <h1 class="product-name">{{ this.$store.state.products[0].name }}</h1>
      <p class="product-description">{{this.$store.state.products[0].description}}</p>
      <p class="product-price">{{ this.$store.state.products[0].cost }}</p>
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
         <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" @click="addToCart(this.$store.state.products[0])" >Add to cart</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .product-image {
      float: left;
      margin-right: 20px;

    }


    .product-details {
      overflow: hidden;
      text-align: center;
      /* margin-top: 300px; */
    }

    .product-name {
      font-size: 24px;
      font-weight: bold;
      margin-top: 0;
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
      display: inline-block;
    }

</style>