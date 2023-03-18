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
        <div  class="login-form-pc">
           <LoginFormPc />
        </div>

        <div class="formpc">
          <div class="wrap-pc">
            <li class="form1-pc">
                <router-link to="/policy">プライバシーポリシー</router-link>
            </li>
            <li class="form2-pc">
                <router-link to="/Terms_of_service">利用規約</router-link>
            </li>
            <li class="form3-pc">
                <router-link to="/contact">お問い合わせ</router-link>
            </li>
          </div>
        </div>
    </div>
</template>

<script>
import LoginFormPc from"../components/LoginForm_pc.vue"
export default {
  components: {LoginFormPc},
  name: 'MainPage_pc',
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
  height: 10%;
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

.formpc {
  font-family: 'Abel';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 10%;
  position: absolute;
  top: calc(100vh - 10%);

  color: #000000;
}

.wrap-pc {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 800px;
}

li {
  flex: 1;
  margin: 0 10px;
  text-align: center;
  list-style: none;
}

body {
  margin: 0;
}

.link {
  text-decoration: none;
}

.wrap-title {
  position: relative;
  width: 100%;
  height: 10%;
  top: 0;
}

.wrap-box1 {
  position: relative;
  width: 100%;
  height: 40%;
  top: 0;
}

.login-form-pc {
  left: 0;
  top: 0;
  width: 100%;
  height: 40%;
  top: calc(100vh - 50%);
}
</style>