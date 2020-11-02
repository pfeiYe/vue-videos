<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view  :key="new Date().getTime()"/>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  created () {
    if (localStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(localStorage.getItem('store'))))
    }
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  },
  destroyed () {
    sessionStorage.clear()
    localStorage.clear()
  },
  methods: {
  }
}
</script>

<style>
/* * {touch-action: pan-y;} */
body,html {
  height: 100vh;
  /* background: url("../static/login_bg.png") repeat-x; */
  background: #e0dddd;
  background-size: cover;
}
#app {
  height: 100vh;
  background: #e0dddd;
  background-size: cover;
}
</style>
