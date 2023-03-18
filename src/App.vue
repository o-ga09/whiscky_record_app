<template>
    <router-view />
</template>

<script>
export default {
  name: 'App',
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  methods: {
    handleResize() {
      const isDesktop = window.innerWidth >= 768 // ブレークポイントを768pxとする
      if (isDesktop) {
        this.$router.push({ name: 'MainPage_pc' })
      } else {
        this.$router.push({ name: 'MainPage_sp' })
      }
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
