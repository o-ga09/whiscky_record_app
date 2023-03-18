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
        <div  class="login-form">
           <LoginForm />
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
import LoginForm from"../components/LoginForm.vue"
export default {
  components: {LoginForm},
  name: 'MainPage_sp',
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
  height: 25%;
  position: absolute;
  top: calc(100vh - 25%);

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
  height: 100%;
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

.login-form {
  left: 0;
  top: 0;
  width: 100%;
  height: 25%;
  top: calc(100vh - 50%);
}
</style>