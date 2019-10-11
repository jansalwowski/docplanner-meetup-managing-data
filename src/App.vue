<template>
  <div id="app">
    <div class="text-center">
      <nav id="nav">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/inconsistent">Inconsistent</router-link>
        |
        <router-link to="/normalized">Normalized</router-link>
        |
        <router-link to="/vuex-normalized">Normalized with Vuex</router-link>
      </nav>
    </div>
    <div class="container">
      <div class="col-sm-8 col-sm-offset-2">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .margin-top-2 {
    margin-top: 20px;
  }
</style>
