<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <navbar> </navbar>
    <router-view />
  </div>
</template>

<script>
import navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default {
  name: "App",
  components: {
    navbar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
