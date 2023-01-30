<template>
  <div>
    <div>
      <h1>Routing Test Page</h1>
      <div class="button">
          <RecordForm />
        <div class="wrap-button">
          <button class="photo"><label for="picture">写真を撮る</label><input id="picture" type="file" accept="image/*" capture="environment"></button>
          <button class="history"><router-link class="link" to="/history"><h3>履歴を見る</h3></router-link></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecordForm from '../components/InputInfo.vue'
export default {
  name: 'HistoryPage',
  components: {RecordForm}
}
</script>

<style>
.wrap-recordinfo {
    position: absolute;
    width: 40%;
    height: 20%;
    border-radius: 64px;
    background: #F2DF9A;
    padding: 0px;
    top: 0;
}

.wrap-recordinfo h3 {
    left: 89px;
    top: 287px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.photo {
    position: absolute;
    width: 40%;
    height: 20%;
    border-radius: 64px;
    background: #F2DF9A;
    padding: 0px;
    top: 40%;
}

.photo h3 {
    left: 89px;
    top: 359px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.history {
    position: absolute;
    width: 40%;
    height: 20%;
    border-radius: 64px;
    background: #F2DF9A;
    padding: 0px;
    bottom: 0;
}

.history h3 {
    left: 89px;
    top: 431px;
    margin-top: 5px;
    margin-bottom: 5px;
}

label {
  color: #0000EE;
  font-size: 120%;
  font-weight: bold;
}

input {
  display: none;
}

a {
  color: #0000EE
}

.button {
  position: absolute;
  width: 100%;
  height: 50%;
  top: calc(100vh - 75%);
}

.wrap-button {
  width: 40%;
  height: 100%;
  margin: auto;
  left: 0px;
  right: 0px;
}
</style>