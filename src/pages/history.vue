<template>
  <div class="w-full">
    <HeaderComponet title="履歴" class="h-2/5 mb-10 font-bold text-2xl md:text-4xl bg-amber-200"/>
    <table v-if="items.length">
      <thead>
        <tr>
          <th>名前</th>
          <th>飲んだ日付</th>
          <th>評価</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.drankAt }}</td>
          <td>{{ item.evaluate }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>データがありません</p>
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