<template>
  <div class="product-container">
    <div class="product-image-section">
      <img class="product-image" :src=this.product.image alt="商品画像">
    </div>
    <div class="product-details-section">
      <div class="product-name">
        <h1>{{ product.name }}</h1>
      </div>
      <div class="product-price">
        <p>{{ this.product.cost }}</p>
      </div>
      <div class="product-quantity">
        <label for="quantity-select">数量:</label>
        <select v-model="this.$store.state.selectedQuantity" id="quantity-select">
          <option v-for="i in 10" :key=i :value="Number(i)">{{i}}</option>
        </select>
      </div>
      <div class="add-to-cart-section">
        <button class="btn btn-outline-dark" @click="addToCart(this.product)">カートに追加</button>
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
.product-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-color: #f5f5f5;
}

.product-image-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.product-image {
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.product-details-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding: 20px;
  margin-left: 40px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-name {
  text-align: center;
  margin-bottom: 20px;
}

.product-price {
  font-size: 24px;
  font-weight: bold;
  color: #ff6700;
}

.product-quantity {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.product-quantity label {
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
}

.product-quantity select {
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.add-to-cart-section {
  margin-top: 20px;
}

.add-to-cart-section button {
  padding: 10px 30px;
  font-size: 18px;
  font-weight: bold;
  border: 1px;
}
</style>