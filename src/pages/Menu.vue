<template>
  <div>
    <div>
      <h1>Routing Test Page</h1>
      <button class="record"><router-link class="link" to="/record"><h3>記録する</h3></router-link></button>
      <button class="photo"><router-link class="link" to="/photo"><h3>写真を撮る</h3></router-link></button>
      <button class="history"><router-link class="link" to="/history"><h3>履歴を見る</h3></router-link></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryPage'
}
</script>

<style>
.record {
    position: absolute;
    width: 219px;
    height: 51px;
    left: 89px;
    top: 287px;
    border-radius: 64px;
    background: #F2DF9A;
    padding: 0px;
}

.record h3 {
    left: 89px;
    top: 287px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.photo {
    position: absolute;
    width: 219px;
    height: 51px;
    left: 89px;
    top: 359px;
    border-radius: 64px;
    background: #F2DF9A;
    padding: 0px;
}

.photo h3 {
    left: 89px;
    top: 359px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.history {
    position: absolute;
    width: 219px;
    height: 51px;
    left: 89px;
    top: 431px;
    border-radius: 64px;
    background: #F2DF9A;
    padding: 0px;
}

.history h3 {
    left: 89px;
    top: 431px;
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>