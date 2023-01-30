<template>
        <div 
            v-bind:class="{'alert' : !isopen,'alert-open' : isopen}"
        >
          <div class="box2">
            <button class="next-button" v-show="!show" v-on:click="show = !show; isopen = !isopen"><h3>はじめてみる</h3></button>
          </div>
          
          <transition name="login">
            <div class="surface" v-if="show">
                <div class="userid">
                  <label>ユーザーID</label>
                  <input type="text"  v-show="show"/>
                </div>
                <div class="password">
                  <label>パスワード</label>
                  <input type="password" v-show="show"/>
                </div>
                <div class="caution">
                  <p>ログインをすると<router-link to="/Terms_of_service">利用規約</router-link>および<router-link to="/policy">プライバシーポリシー</router-link>に同意したものとみなす。</p>
                </div>
                <div class="login">
                  <button class="login-button"><router-link class="link" to="/menu"><h3>ログインする</h3></router-link></button>
                  <br>
                  <router-link class="link_guest" to="/menu">ゲストとしてログインする</router-link>
                  <a v-on:click="show=!show;isopen = !isopen">キャンセル</a>
                </div>
            </div>
          </transition>
        </div>
</template>

<script>
export default {
  name: "LoginForm",
  data () {
    return {
      show: false,
      isopen: false
    }
  }
}
</script>

<style>
.alert {
  /*--- style ---*/
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 25%;
  top: calc(100vh - 50%);
  /*--- end ---*/
  
  /*--- layout ---*/
  display: flex;
  justify-content: center;
  align-items: center;
  /*--- end ---*/
  
}

.alert-open {
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

.login {
    position: absolute;
    width: 100%;
    height: 25%;
    top: calc(100% - 30%);
}

.login-button {
    position: absolute;
    width: 219px;
    height: 51px;
    border-radius: 64px;
    background: #F2DF9A;
    padding: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
    top: 0px;
}

.login > a {
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  bottom: 0px;
}

.login h3 {
    margin-top: 5px;
    margin-bottom: 5px;
}

.userid {
  position: absolute;
  width: 100%;
  height: 20%;
}

.password {
  position: absolute;
  width: 100%;
  height: 20%;
  top: 20%;
}

.userid label,
.password label {
  color: #000000;
}

input {
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

.login .link_guest {
  position: absolute;
  bottom: 24px;
  text-decoration: none;
}

.next-button {
  position: absolute;
  width: 127px;
  height: 37px;
  top: 50%;
  left: 0px;
  right: 0px;
  margin: auto;

  border-radius: 64px;
  background: #94F192;
  padding: 0px;
}

.login-enter-active, .login-leave-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.login-enter, .login-leave-to {
  transform: translateY(100vh) translateY(0px);
}
</style>