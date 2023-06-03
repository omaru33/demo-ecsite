<template>
  <div class="container">
    <div class="image"><img src="../../../public/images/sozai/104977.jpg"></div>
    <div class="discription">
      <span :v-bind="this.$store.state.products[0].name"></span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container {
  display: flex;
}
</style>