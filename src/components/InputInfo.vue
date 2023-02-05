<template>
        <div 
            v-bind:class="{'InputInfo' : !isopen,'InputInfo-open' : isopen}"
        >
          <button class="record-button" v-on:click="show = !show; isopen = !isopen"><h3>記録する</h3></button>
          
          <transition name="record">
            <div class="surface" v-if="show">
                <div class="whisck-name">
                  <label>ウイスキーの名前</label>
                  <input type="text" v-show="show"/>
                </div>

                <div class="caution">
                  <p>ログインをすると<router-link to="/Terms_of_service">利用規約</router-link>および<router-link to="/policy">プライバシーポリシー</router-link>に同意したものとみなす。</p>
                </div>
                <div class="record">
                  <button class="record-info-button"><router-link class="link" to="/menu"><h3>記録する</h3></router-link></button>
                  <br>
                  <a v-on:click="show=!show;isopen = !isopen">キャンセル</a>
                </div>
            </div>
          </transition>
        </div>
</template>

<script>
export default {
  name: "RecordForm",
  data () {
    return {
      show: false,
      isopen: false
    }
  }
}
</script>

<style>
.InputInfo {
  /*--- style ---*/
  position: fixed;
  top: 0;
  width: 100%;
  height:100%;
  /*--- end ---*/
  
  /*--- layout ---*/
  display: flex;
  justify-content: center;
  align-items: center;
  /*--- end ---*/
  
}

.InputInfo-open {
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 1;
}

.surface {
    /*--- style ---*/
    background-color: #FFFFFF;
    color: white;
    height: 50%;
    width: 100%;
    max-width: 600px;
    box-shadow: 
      0px 11px 15px -7px rgba(0, 0, 0, 0.2),
      0px 24px 38px 3px rgba(0, 0, 0, 0.14),
      0px 9px 46px 8px rgba(0, 0, 0, 0.12);
    border-radius: 64px 64px 0px 0px;
    position: relative;
    overflow-y: auto;
    top: calc(100vh - 50%);
    word-wrap: break-word;
    /*--- end --- */
  }

  .surface .alert-body {
    /*--- style ---*/
    color: rgba(12, 12, 12, 0.7);
    background: #FFFFFF;
    font-size: 1rem;
    font-weight: 400;

    line-height: 1.5;
    padding: 0 24px 24px;

    
    /*--- end ---*/
  }

.record {
    position: absolute;
    width: 100%;
    height: 25%;
    top: calc(100% - 30%);
}

.InputInfo-open .record-info-button {
    position: absolute;
    width: 40%;
    height: 7.5%;
    border-radius: 64px;
    background: #F2DF9A;
    padding: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
}

.record > a {
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  bottom: 0px;
}

.record h3 {
    margin-top: 5px;
    margin-bottom: 5px;
}

.whisck-name {
  position: absolute;
  width: 100%;
  height: 20%;
}

.whisck-name label {
  color: #000000;
}

.whisck-name > input {
  position: absolute;
  height: 25%;
  width: 60%;
  top: 50%;
  left: 0px;
  right: 0px;
  margin: auto;
}

.caution {
  color: #000000;
  position: absolute;
  width: 100%;
  height: 20%;
  top: 45%;
}

.caution p {
  width: 80%;
  word-wrap: break-word;
  margin: auto;
}

.record .link_guest {
  position: absolute;
  bottom: 24px;
  text-decoration: none;
}

.record-button {
  position: absolute;
  width: 40%;
  height: calc(100vh * 0.1 * 0.5);

  border-radius: 64px;
  background: #F2DF9A;
  padding: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  top: calc(100vh - 72%);
}

.record-enter-active, .record-leave-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.record-enter, .record-leave-to {
  transform: translateY(100vh) translateY(0px);
}

.record-button h3 {
  position: absolute;
  width: 127px;
  height: 37px;
  left: 0px;
  right: 0px;
  top: 0px;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>