<template>
  <div v-if="isLoading">
    <router-link to="/"></router-link>
  </div>
  <div v-else>
    <router-link to="/home"></router-link>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
      this.$router.push('/home')
    }, 2000);
  },
}
</script>

<style>
@charset "UTF-8";
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/* Reset e Root*/
* {
    margin: 0;
    padding: 0;
    color: white;
    list-style: 0;
    text-decoration: 0;
    box-sizing: border-box;
    font-family: var(--primary-font);
}

:root {
    --backgroud-color: #13111b;
    --primary-color: #ff79c6;
    --secondary-color: #191622;
    --terciary-color: #292730;
    --quaternary-color: #F43EA7;
    --primary-font: 'Rubik', sans-serif;
}

html {
    min-height: 100vh;
    background-color: var(--backgroud-color);
}
</style>
