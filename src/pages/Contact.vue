<template>
  <div class="w-full h-full">
    <HeaderComponet title="お問い合わせ" class="h-min mb-10 font-bold text-2xl md:text-4xl bg-amber-200"/>
    <main class="w-full h-5/6">
      <iframe class="w-full h-full justify-center" src="https://docs.google.com/forms/d/e/1FAIpQLSeoplc7ZxIqN7oJmlxuqgbubM9FRILVNtIIfRw40Oolucl8uw/viewform?embedded=true">読み込んでいます…</iframe>
    </main>
    <FooterComponet class="absolute w-full bottom-0 justify-center bg-amber-200"/>
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