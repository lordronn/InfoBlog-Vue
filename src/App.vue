<template>
  <div class="app">
     
    <div class="nav">
      <router-link  :to="{ path: $store.state.route.from.fullPath }" class="arrow"> &#8656; </router-link> 
      <router-link to="/">News</router-link> 
      <router-link to="/authors">Authors</router-link> 
    </div>
    <img alt="Vue logo" src="../src/assets/logo.png">
    <router-view/>
  </div>
</template>

<style lang="scss">

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {color: black;}



.nav a{
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
  margin: 0 5px;
  
}

a.router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
}
</style>
