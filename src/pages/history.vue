<template>
  <div class="w-full">
    <HeaderComponet title="履歴" class="h-2/5 mb-10 font-bold text-2xl md:text-4xl bg-amber-200"/>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-4/5 right-0 left-0 m-auto" v-if="items.length">
      <div v-for="(item, index) in items" :key="index" class="border border-gray-500 shadow p-4 rounded-md">
        <img v-if="item.imageUrl" :src="item.imageUrl" alt="item.title" class="w-28 h-28 right-0 left-0 m-auto">
        <img v-else :src="defaultImg" alt="item.title" class="w-28 h-28 right-0 left-0 m-auto">
        <div class="p-4">
          <h3 class="font-bold text-xl">{{ item.name }}</h3>
          <div class="flex items-center justify-center mt-5">
            <label class="mr-10">味</label>
            <p v-if="item.taste">{{item.taste}}</p>
            <p v-else>-</p>
          </div>
          <div class="flex items-center justify-center mt-5">
            <label class="mr-10">香り</label>
            <p v-if="item.smell">{{item.smell}}</p>
            <p v-else>-</p>
          </div>
        </div>
      </div>
    </div>
    <p v-else>データがありません</p>
    <FooterComponet class="flex w-full bottom-0 justify-center bg-amber-200" v-if="items.length >= 5"/>
    <FooterComponet class="absolute w-full bottom-0 justify-center bg-amber-200"/>
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
      items: [],
      defaultImg: require('@/assets/whisky_glass.png')
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
    }
  }
}
</script>