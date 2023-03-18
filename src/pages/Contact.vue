<template>
  <div class="container">
    <HeaderComponet title="お問い合わせ" class="header"/>
    <main class="body">Body</main>
    <FooterComponet class="footer"/>
  </div>
</template>

<script>
import FooterComponet from '../components/Footer.vue'
import HeaderComponet from '../components/Header.vue'

export default {
  components: {FooterComponet,HeaderComponet},
  name: 'Terms_of_service'
}
</script>

<style>
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .header {
    height: 10%;
    background-color: #ddd;
  }
  
  .body {
    height: 80%;
    background-color: #eee;
  }
  
  .footer {
    height: 10%;
    background-color: #ddd;
  }
</style>