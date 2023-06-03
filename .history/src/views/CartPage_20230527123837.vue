<template>
  <div>
    <h1>Shopping Cart</h1>
    <div class="product" v-for="product in this.$store.state.cartItems" :key="product.id">
      <div class="cart-item">
        <img :src="product.image">
        <div class="item-details">
          <div class="name">{{ product.name }}</div>
          <div class="quantity">Quantity: {{ product.quantity }}</div>
        </div>
        <div class="price">Price: {{ Number(product.cost*product.quantity) }}</div>
      </div>
    </div>
    <!-- <div>total: {{ this.$store.state }}</div> -->

    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="this.$store.state.lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
    />
    
    <button @click="submit">Pay Now</button>
    <button @click="submit2">Now</button>
  </div>
</template>
<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeCheckout,
  },
  data(){
    this.publishableKey = "pk_test_51MnZJNDJLO7TSIIw6RvBDH0DwG47DMxzU8wgGUqgqPIC0tz3xXwpQo85OLnLY4LVy8fdZq37YoP2JndTjlf7mKv500ZO5Dv7Df"
    return{
      loading:true,
      lineItems:[
        {
          price:"price_1MnZL7DJLO7TSIIwI06a83Rb",
          quantity:1
        }
      ],
      successURL:"http://localhost:8080/success",
      cancelURL:"http://localhost:8080/error"
    }
  },
  methods:{
    submit(){
      this.$refs.checkoutRef.redirectToCheckout();
    },
    submit2(){
      this.loading=false;
    }
  },

};
</script>
<style>
.cart {
  padding: 20px;
}
.product {
  margin: auto; 
}
.price {
  margin-left: auto;
  padding-top:50px ;
}

.cart-item {
  display: flex;
  margin-bottom: 10px;
  margin-right: 10px;
}

.cart-item img {
  width: 20%;
  height: 20%;
  margin-right: 10px;
}

.item-details {
  display: flex;
  flex-direction: column;
}

.item-details .name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.item-details .quantity {
  margin-bottom: 10px;
}

.item-details .price {
  margin-bottom: 10px;
}

.divider {
  border-bottom: 1px solid #1b0404;
  margin: 20px 0;
}
</style>
