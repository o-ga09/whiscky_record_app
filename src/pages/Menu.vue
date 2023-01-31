<template>
  <div>
    <div>
      <h1>Routing Test Page</h1>
      <div class="button-RecordForm">
        <RecordForm />
      </div>
      <div class="button-photo">
        <button class="photo"><label for="picture">写真を撮る</label><input id="picture" type="file" accept="image/*" capture="environment"></button>
      </div>

      <div class="button-history">   
        <button class="history"><router-link class="link" to="/history"><h3>履歴を見る</h3></router-link></button>
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
    height: 50%;
    border-radius: 64px;
    background: #F2DF9A;
    padding: 0px;
    top: 40%;
    left: 0px;
    right: 0px;
    margin: auto;
}

.photo h3 {
    left: 89px;
    top: 359px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.photo > input {
  display: none;
}

.history {
    position: absolute;
    width: 40%;
    height: 50%;
    border-radius: 64px;
    background: #F2DF9A;
    padding: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
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

a {
  color: #0000EE
}

.button-photo {
  position: absolute;
  width: 100%;
  height: 15%;
  top: calc(100vh - 65%);
}

.button-history {
  position: absolute;
  width: 100%;
  height: 15%;
  top: calc(100vh - 50%);
}

.wrap-button {
  width: 40%;
  height: 100%;
  margin: auto;
  left: 0px;
  right: 0px;
}

.button-RecordForm {
  left: 0;
  width: 100%;
  height: 15%;
  top: calc(100vh - 80%);
}
</style>