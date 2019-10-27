<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {}
};
</script>

<style>
:root {
  --color-primary: #ff5e57;
  --color-primary-light: #ffafac;
  --color-primary-dark: #ff3f34;

  --color-success: #20bf6b;

  --color-grey-light-1: #f8f8f8;
  --color-grey-light-2: #f4f2f2;
  --color-grey-light-3: #f0eeee;
  --color-grey-light-4: #ccc;

  --color-grey-dark-1: #333;
  --color-grey-dark-2: #777;
  --color-grey-dark-3: #999;

  --shadow-light-1: 0 1rem 2rem rgba(0, 0, 0, 0.05);
  --shadow-dark-1: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  --shadow-dark-2: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  --shadow-dark-3: 10 20rem 60rem 10rem rgba(0, 0, 0);
}

* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-grey-dark-1);
}
</style>
