<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light header">
      <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#!">Start Bootstrap</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                  <li class="nav-item"><a class="nav-link active" aria-current="page" @click="goToPage('/')">Home</a></li>
                  <li class="nav-item"><a class="nav-link" href='/'>About</a></li>
              </ul>
              <form class="d-flex">
                  <button @click="showCart=!showCart" class="btn btn-outline-dark" type="button">
                      <i class="bi-cart-fill me-1"></i>
                      Cart
                      <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                  </button>
              </form>
          </div>
      </div>
  </nav>
  <router-view />
  <transition name="fade">
    <div  v-show="showCart" class="cartContainer">
      <div class="cartContent">
        <cart-page></cart-page>
      </div>
    </div>
  </transition>
  <router-link to="/about">aaaa</router-link>
</template>

<style>
body {
  background-color: #a3f5d0;
  margin: 0;
}
.header {
  z-index: 2;
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
.cartContainer {
  position: fixed;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  transition: opacity 0.3s ease;
  

}
.cartContent {
  position: absolute;
  align-items: center;
  /* justify-content: center; */
  background-color: #fff;
  top: 100px;
  width: 90%;
  height: 90%;
  padding: 20px;
  margin: auto;
  margin-left: 5%;
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  max-width: 90%;
  max-height: 90%;
  z-index: 3;
  transition: opacity 0.3s ease;
  /* overflow: auto; */
}
.fade-enter-active,
.fade-leave-active,
.fade-show {
  transition: all 0.3s ease-out;
}

.fade-enter,
.fade-leave-to {
  /* opacity: 0; */
  opacity: 0;
  animation: popout 0.4s ease-out;
}
.animate {
    animation: popup 0.4s ease-out;
}
@keyframes popup {
    0% {
        transform: translateY(100px) scale(1);
    }

    70% {
        transform: translateY(0) scale(1.1);
    }
    100% {
        transform: scale(1);
    }
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
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.36, 0.07, 0.19, 0.97);
}
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