<template>
  <div class="w-full">
    <HeaderComponet title="履歴" class="h-2/5 mb-10 font-bold text-2xl md:text-4xl bg-amber-200"/>
    <table v-if="items.length">
      <thead>
        <tr>
          <th>名前</th>
          <th>年齢</th>
          <th>メールアドレス</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.email }}</td>
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
export default {
  components: {FooterComponet,HeaderComponet},
  name: 'HistoryPage',
  data() {
    return {
      items: []
    }
  },
  mounted() {
  // サーバからJSONデータを取得する例
  fetch('/api/data')
    .then(response => response.json())
    .then(data => {
      this.items = data;
    });
  }
}
</script>