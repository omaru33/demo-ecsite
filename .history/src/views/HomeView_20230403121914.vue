<template>
  <!-- Navigation-->

  <!-- Header-->
  <header class="bg-dark py-5">
      <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
              <h1 class="display-4 fw-bolder">Shop in style</h1>
              <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          </div>
      </div>
  </header>
  <!-- Section-->
  <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <div class="col mb-5">
                  <div class="card h-100">
                      <!-- Product image-->
                      <img class="card-img-top" src="../../public/images/sozai/dress.jpg" alt="..." />
                      <!-- Product details-->
                      <div class="card-body p-4">
                          <div class="text-center">
                              <!-- Product name-->
                              <h5 class="fw-bolder">Fancy Product</h5>
                              <!-- Product price-->
                              $40.00 - $80.00
                          </div>
                      </div>
                      <!-- Product actions-->

                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <router-link to="/dress">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                        </router-link>
                    </div>
                      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" @click="addToCart(this.$store.state.products[0])" >Add to cart</a></div>
                      </div>
                  </div>
              </div>
              <div class="col mb-5">
                  <div class="card h-100">
                      <!-- Sale badge-->
                      <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                      <!-- Product image-->
                      <img class="card-img-top" src="../../public/images/sozai/bshirt.jpg" alt="..." />
                      <!-- Product details-->
                      <div class="card-body p-4">
                          <div class="text-center">
                              <!-- Product name-->
                              <h5 class="fw-bolder">Special Item</h5>
                              <!-- Product reviews-->
                              <div class="d-flex justify-content-center small text-warning mb-2">
                                  <div class="bi-star-fill"></div>
                                  <div class="bi-star-fill"></div>
                                  <div class="bi-star-fill"></div>
                                  <div class="bi-star-fill"></div>
                                  <div class="bi-star-fill"></div>
                              </div>
                              <!-- Product price-->
                              <span class="text-muted text-decoration-line-through">$20.00</span>
                              $18.00
                          </div>
                      </div>
                      <!-- Product actions-->
                      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <router-link to="/bshirt">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                        </router-link>
                      </div>
                      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" >
                          <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" @click="addToCart(this.$store.state.products[1])">Add to cart</a></div>
                      </div>
                  </div>
              </div>
              <div class="col mb-5">
                  <div class="card h-100">
                      <!-- Sale badge-->
                      <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                      <!-- Product image-->
                      <img class="card-img-top" src="../../public\images\blue-mountain.jpg" alt="..." />
                      <!-- Product details-->
                      <div class="card-body p-4">
                          <div class="text-center">
                              <!-- Product name-->
                              <h5 class="fw-bolder">Sale Item</h5>
                              <!-- Product price-->
                              <span class="text-muted text-decoration-line-through">$50.00</span>
                              $25.00
                          </div>
                      </div>
                      <!-- Product actions-->
                      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <router-link to="/wshirt">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                        </router-link>
                    </div>
                      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" >
                          <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" @click="addToCart(this.$store.state.products[2])">Add to cart</a></div>
                      </div>
                  </div>
              </div>
              <div class="col mb-5">
                  <div class="card h-100">
                      <!-- Product image-->
                      <img class="card-img-top" src="../../public/images/sozai/pants.jpg" alt="..." />
                      <!-- Product details-->
                      <div class="card-body p-4">
                          <div class="text-center">
                              <!-- Product name-->
                              <h5 class="fw-bolder">Popular Item</h5>
                              <!-- Product reviews-->
                              <div class="d-flex justify-content-center small text-warning mb-2">
                                  <div class="bi-star-fill"></div>
                                  <div class="bi-star-fill"></div>
                                  <div class="bi-star-fill"></div>
                                  <div class="bi-star-fill"></div>
                                  <div class="bi-star-fill"></div>
                              </div>
                              <!-- Product price-->
                              $40.00
                          </div>
                      </div>
                      <!-- Product actions-->
                      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <router-link to="/dress">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                        </router-link>
                    </div>
                      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                      </div>
                  </div>
              </div>
              <div class="col mb-5">
                  <div class="card h-100">
                      <!-- Sale badge-->
                      <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                      <!-- Product image-->
                      <img class="card-img-top" src="../../public/images/sozai/parker.jpg" alt="..." />
                      <!-- Product details-->
                      <div class="card-body p-4">
                          <div class="text-center">
                              <!-- Product name-->
                              <h5 class="fw-bolder">Sale Item</h5>
                              <!-- Product price-->
                              <span class="text-muted text-decoration-line-through">$50.00</span>
                              $25.00
                          </div>
                      </div>
                      <!-- Product actions-->
                      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                      </div>
                  </div>
              </div>
              <div class="col mb-5">
                  <div class="card h-100">
                      <!-- Product image-->
                      <img class="card-img-top" src="../../public/images/sozai/onepiece.jpg" alt="..." />
                      <!-- Product details-->
                      <div class="card-body p-4">
                          <div class="text-center">
                              <!-- Product name-->
                              <h5 class="fw-bolder">Fancy Product</h5>
                              <!-- Product price-->
                              $120.00 - $280.00
                          </div>
                      </div>
                      <!-- Product actions-->
                      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                      </div>
                  </div>
              </div>
              
          </div>
      </div>
  </section>
  <div style="display:flex;">
        <div class="lbutton" @click="scr(-50); onButtonClick();" >
            <div class="centered">
                <font-awesome-icon :icon="['fas', 'chevron-left']" :style="['font-size: 2em']"/>
            </div>
        </div>
        <div class="box">
          <div style="background:#ff6347;"><img src="public/img/buki/houki/screenshot.1605900245.jpg"></div>
          <div style="background:#008080;"><img src="public/img/buki/houki/screenshot.1605900245.jpg"></div>
          <div style="background:#4169e1;"><img src="public/img/buki/houki/screenshot.1605900245.jpg"></div>
        </div>
        <div class="rbutton" @click="scr(50); onButtonClick();" >
            <div class="centered">
                <font-awesome-icon :icon="['fas', 'chevron-right']" :style="['font-size: 2em']"/>
            </div>
        </div>
  </div>


  <div class="pagination">
    <span
        v-for="(index) in pageCount"
        :key="index"
        :class="['pagination-item', index === activePage ? 'active' : '']">
    </span>
   </div>



  <router-link to="/Success">aaaaa</router-link>
  <!-- Footer-->
  <footer class="py-5 bg-dark">
      <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
  </footer>
  <!-- Bootstrap core JS-->

</template>
<style scoped>
  @import '../../public/styles.css';
  .box {
  display: flex;
  width: 100%;
  margin: 0 auto;
  height: 500px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  position: relative;
  scrollbar-width: none;
  /* justify-content: center; */
  /* place-items: center; */
  /* align-items: center; */
}
      .box::-webkit-scrollbar {
        display: none; /* Webkitブラウザーで表示されるスクロールバーを非表示にする */
      }
 
.box div {
  width: 100%;
  margin: 5px;
  flex-shrink: 0;
}
.rbutton {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.lbutton {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagination {
  display: flex;
  justify-content: center;
}

.pagination-item {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: #ccc;
}

.pagination-item.active {
  background-color: #333;
}
</style>
<script>

export default {
  data() {
    return {
      pageCount: 3,
      activePage: 1,
      isButtonDisabled: false,
      isTimerRunning: false
    }
  },
  methods: {
    scr(d) {
        if(!this.isButtonDisabled){
            const box=document.querySelector(".box");
            const width = box.scrollWidth - box.clientWidth;
            const scroll=(d/100)*width;
            if(d<0 &&this.activePage>1){
                this.activePage--
            }else if(d>0 && this.activePage<this.pageCount){
                this.activePage++
            }
            box.scrollLeft+=scroll;
            console.log(this.$store.state.item)
        }else{
            return;
        }
      },
      onButtonClick() {
        if (this.isButtonDisabled || this.isTimerRunning) {
          return;
        }
        this.isButtonDisabled = true;
        this.isTimerRunning = true;
    
        setTimeout(() => {
          this.isButtonDisabled = false;
          this.isTimerRunning = false;
        }, 600);
        },
        addToCart(product) {
            this.$store.dispatch('addProductToCart',product);
        }  
    }
      // ボタンを無効化する
}
</script>

