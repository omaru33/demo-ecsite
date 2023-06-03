<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#!">Start Bootstrap</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                  <li class="nav-item"><a class="nav-link active" aria-current="page" @click="goToPage('/')">Home</a></li>
                  <li class="nav-item"><a class="nav-link" href='/'>About</a></li>
                  <!-- <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a class="dropdown-item" href="#!">All Products</a></li>
                          <li><hr class="dropdown-divider" /></li>
                          <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                          <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                      </ul>
                  </li> -->
              </ul>
              <form class="d-flex">
                  <button @click="showCart=true" class="btn btn-outline-dark" type="button">
                      <i class="bi-cart-fill me-1"></i>
                      Cart
                      <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                  </button>
              </form>
          </div>
      </div>
  </nav>
  <router-view />
  <div  v-if="showCart" class="cartPage">
    <cart-page class="cartPage"></cart-page>
  </div>
</template>

<style>
body {
  background-color: #a3f5d0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #324d69; */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #3c5977;
  transition: 0.2s;
}
nav :hover {
  color: #61b38e;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.nav-item {
  cursor: pointer;
}
button {
  cursor: pointer;
}
.cartPage {
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: #42b983;

}
/* header {
  background-color: #2e2e2e;
  justify-content: space-around;
  /* 横並び */
  /* display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  z-index: 5;
  height: 80px;
  top: 0;
}
header h3 {
  color: #42b983;
} */ 
</style>
<script>
import CartPage from './views/CartPage.vue';
export default {
  components: {
    "cart-page":CartPage,
  },
  data(){
    return{
      showCart:false
    }
  },
  methods: {
    // goToPage() {
    //   this.$router.push({name:"Cart"});
    // },
    // goToHome() {
    //   this.$router.push({name:"home"});
    // }
    goToPage(path) {
      this.$router.push(path);
    }

  }
}
</script>