<template>
  <div class="w-full">
    <HeaderComponet title="履歴" class="h-2/5 mb-10 font-bold text-2xl md:text-4xl bg-amber-200"/>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4" v-if="items.length">
      <div v-for="(item, index) in items" :key="index">
        <img :src="item.image" alt="item.title" class="w-full">
        <div class="p-4">
          <h3 class="font-bold text-xl">{{ item.title }}</h3>
          <p class="mt-2">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <p v-else>データがありません</p>
    <FooterComponet class="flex w-full bottom-0 justify-center bg-amber-200" v-if="items.length"/>
    <FooterComponet class="absolute w-full bottom-0 justify-center bg-amber-200" v-else/>
  </div>
</template>

<script>
import FooterComponet from '../components/Footer.vue'
import HeaderComponet from '../components/Header.vue'
import axios from 'axios'

const BaseURL = "http://localhost:8080";

export default {
  components: {FooterComponet,HeaderComponet},
  name: 'HistoryPage',
  computed: {
    uid() {
      return this.$store.state.uid;
    }
  },
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      // サーバからJSONデータを取得する例
      const res = await axios.post(BaseURL + '/get',{
        "uid": String(this.uid)
      });
      const data = JSON.stringify(res.data);
      const json = JSON.parse(data);
      this.items = json.result;
      console.log(json.result);
    }
  }
}
</script>