<template>
  <header>
    <div>
      <h3>ecsite</h3>
    </div>
    <nav>
      <router-link to="/home">products</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </header>
  <router-view :transition="false" />
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
header {
  background-color: #2e2e2e;
  justify-content: space-around;
  /* 横並び */
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  z-index: 5;
  height: 80px;
  top: 0;
}
header h3 {
  color: #42b983;
}
</style>
