<template>
  <div class="product-container">
    <div class="product-image">
      <img src="../../../public/images/sozai/104977.jpg" alt="商品画像">
    </div>
    <div class="product-details">
      <h1 class="product-name">{{ this.$store.state.products[0].name }}</h1>
      <p class="product-price">価格: ¥1,000</p>
      <p class="product-description">商品説明 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet dolor quis venenatis dictum.</p>
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
      margin: auto;
    }

    /* 商品詳細 */
    .product-details {
      overflow: hidden; /* オーバーフローを隠す */
      text-align: center;
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

    /* カートに入れるボタン */
    .add-to-cart {
      background-color: blue;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 18px;
      cursor: pointer;
    }

    .add-to-cart:hover {
      background-color: darkblue;
    }
    .product-container {
      border: 1px solid #ccc;
      padding: 20px;
      margin: 20px;
      display: inline-block;
    }
.container {
  display: flex;
  width: 100%;
  /* margin: 0; */

}
.discription {
  width: 50%;
}
.name {
  justify-content: center;
  text-align: center;
}
</style>