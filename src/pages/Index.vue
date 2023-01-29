<template>
    <div id="app">
    <!-- <img src="../assets/Wallpaper_Splatoon3_2022_2_1242_2688.jpg"> -->
        <div class="wrap-title">
          <div class="Title">
            <h2>Title</h2>
          </div>
        </div>
        
        <div class="wrap-box1">
          <div class="box1">
          </div>
        </div>

        <div 
            v-bind:class="{'alert' : !isopen,'alert-open' : isopen}"
          >
          <div class="box2">
            <button class="next-button" v-show="!show" v-on:click="show = !show; isopen = !isopen"><h3>はじめてみる</h3></button>
          </div>
          
          <transition name="login">
            <div class="surface" v-if="show">
                <p>testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</p>
                <br>
                <p>testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</p>
                <div class="login">
                  <button class="login-button"><router-link class="link" to="/menu"><h3>ログインする</h3></router-link></button>
                  <br>
                  <a v-on:click="show=!show;isopen = !isopen">キャンセル</a>
                </div>
            </div>
          </transition>
        </div>

        <div class="form">
          <div class="wrap">
            <li class="form1">
                <router-link to="/policy">プライバシーポリシー</router-link>
            </li>
            <li class="form2">
                <router-link to="/Terms_of_service">利用規約</router-link>
            </li>
            <li class="form3">
                <router-link to="/contact">お問い合わせ</router-link>
            </li>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      show: false,
      isopen: false
    }
  }
}
</script>

<style>
img {
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
}

.Title {
  position: absolute;
  width: 322px;
  height: 100px;
  margin: auto;
  left: 0px;
  right: 0px;

  font-family: 'Abel';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  text-align: center;

  color: #000000;
}

.box1 {
  position: relative;
  width: 322px;
  height: 236px;
  margin: auto;
  background: #F2DF9A;
  border: 2px solid #F2DF9A;
  border-radius: 64px;
}

.box2 {
  position: absolute;
  width: 100%;
  height: 127px;
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

.next-button h3 {
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

.form {
  font-family: 'Abel';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  width: 100%;
  height: 150px;
  position: absolute;
  top: calc(100vh - 150px);

  color: #000000;
}

.form1 {
  position: absolute;
  width: 40%;
  height: 25px;
  margin-top: 12.5px;
  margin-bottom: 25px;
  text-decoration-line: underline;
}

.form2 {
  position: absolute;
  width: 40%;
  height: 25px;
  margin-top: 62.5px;
  margin-bottom: 25px;
  text-decoration-line: underline;
}

.form3 {
  position: absolute;
  width: 40%;
  height: 25px;
  margin-top: 112.5px;
  margin-bottom: 12.5px;
  text-decoration-line: underline;
}

.wrap {
  width: 40%;
  height: 150px;
  margin: auto;
  right: 0px;
  left: 0px;
}

.form li {
  list-style: none;
}

body {
  margin: 0;
}

.link {
  text-decoration: none;
}

.login-enter-active, .login-leave-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.login-enter, .login-leave-to {
  transform: translateY(100vh) translateY(0px);
}

.alert {
  /*--- style ---*/
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 200px;
  top: calc(100vh - 350px);
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

.wrap-title {
  position: relative;
  width: 100%;
  height: 100px;
  top: calc(100vh - 890px);
}

.wrap-box1 {
  position: relative;
  width: 100%;
  height: 240px;
  top: calc(100vh - 790px)  
}
</style>