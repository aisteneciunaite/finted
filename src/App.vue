<template>
  <div id="app">
    <navbar-main />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/todo-list">To do list</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<script>
import NavbarMain from "@/components/partials/NavbarMain.vue";
export default {
  components: {
    NavbarMain
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // background-color: rgb(235, 237, 238);
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
</style>
