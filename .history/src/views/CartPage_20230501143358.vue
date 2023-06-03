<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div>
    <h1>Shopping Cart</h1>
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in this.$store.state.lineItems" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.cost }}</td>
          <td>{{ product.quantity }}</td>
          <!-- <td>{{ product.quantity * product.product.cost }}</td> -->
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">Total:</td>
          <td>{{ cartTotal }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
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
</template>
<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
// const StripeCheckout = () => import('@vue-stripe/vue-stripe').then(module => module.StripeCheckout);
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
  computed: {
    cartProducts() {
      return this.$store.getters.cartProducts
    },
    cartTotal() {
      return this.$store.getters.cartTotal
    }
  }
};
</script>
<style scoped>
/* body {
  position: relative;
  z-index: 100;
  top: 10px;
} */
</style>