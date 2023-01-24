<template>
    <div id="app">
    <img src="../assets/Wallpaper_Splatoon3_2022_2_1242_2688.jpg">
        <div class="Title">
            <h2>Title</h2>
        </div>
        <div class="box1">
        
        </div>

        <div 
            class="alert" 
          >
          <button class="box2" v-on:click="show = !show"><h3>はじめてみる</h3></button>
          <transition name="login">
            <div class="surface" v-if="show">
              <div class="alert-body">
                <p>testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</p>
                <br>
                <p>testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</p>
                <button class="login"><router-link class="link" to="/menu"><h3>ログインする</h3></router-link></button>
              </div>
            </div>
          </transition>
        </div>

        <div class="form">
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
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      show: false
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
  height: 37px;
  left: 34px;
  top: 174px;

  font-family: 'Abel';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  text-align: center;

  color: #000000;
}

.box1 {
  position: absolute;
  width: 322px;
  height: 236px;
  left: 34px;
  top: 266px;
  background: #F2DF9A;
  border: 2px solid #F2DF9A;
  border-radius: 64px;
}

.box2 {
  position: absolute;
  width: 127px;
  height: 37px;
  left: 133px;
  top: 599px;
  border-radius: 64px;
  background: #94F192;
  padding: 0px;
}

.box2 h3 {
  left: 133px;
  top: 599px;
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

  color: #000000;
}

.form .form1 {
  position: absolute;
  width: 153px;
  height: 23px;
  left: 118px;
  top: 671px;
  text-decoration-line: underline;
}

.form .form2 {
  position: absolute;
  width: 153px;
  height: 23px;
  left: 118px;
  top: 705px;
  text-decoration-line: underline;
}

.form .form3 {
  position: absolute;
  width: 153px;
  height: 23px;
  left: 118px;
  top: 742px;
  text-decoration-line: underline;
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
  height: calc(100vh + 20px);
  /*--- end ---*/
  
  /*--- layout ---*/
  display: flex;
  justify-content: center;
  align-items: center;
  /*--- end ---*/
  
}

.surface {
    /*--- style ---*/
    background-color: #424242;
    color: white;
    max-height: calc(100% - 96px);
    width: 80%;
    max-width: 600px;
    box-shadow: 
      0px 11px 15px -7px rgba(0, 0, 0, 0.2),
      0px 24px 38px 3px rgba(0, 0, 0, 0.14),
      0px 9px 46px 8px rgba(0, 0, 0, 0.12);
    border-radius: 64px;
    position: relative;
    overflow-y: auto;
    /*--- end --- */
    
    /*--- layout ---*/
    display: flex;
    flex-direction: column;
    /*--- end ---*/
  }

  .surface .alert-body {
    /*--- style ---*/
    color: rgba(12, 12, 12, 0.7);
    background: #FFFFFF;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.00938em;
    line-height: 1.5;
    padding: 0 24px 24px;
    overflow-y: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
    /*--- end ---*/
  }

.login {
    width: 219px;
    height: 51px;
    border-radius: 64px;
    background: #F2DF9A;
    padding: 0px;
}

.login h3 {
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>