<template>
            <div class="loginformpc">
                <div class="userid-pc">
                  <label>ユーザーID</label>
                  <input type="text"/>
                </div>
                <div class="password-pc">
                  <label>パスワード</label>
                  <input type="password"/>
                </div>
                <div class="caution-pc">
                  <p>ログインをすると<router-link to="/Terms_of_service">利用規約</router-link>および<router-link to="/policy">プライバシーポリシー</router-link>に同意したものとみなす。</p>
                  <p>新規登録ユーザー/既登録ユーザー関わらずID/パスワードを入力ください</p>
                </div>
                <div class="login-pc">
                  <button class="login-button"><router-link class="link" to="/menu"><h3>ログインする</h3></router-link></button>
                  <router-link class="link_guest" to="/menu">ゲストとしてログインする</router-link>
                </div>
            </div>
</template>

<script>
export default {
  name: "LoginFormPc"
}
</script>

<style>
.loginformpc {
    /*--- style ---*/
    background-color: #FFFFFF;
    color: white;
    height: 100%;
    width: 100%;
    max-width: 600px;
    position: relative;
    top: 0;
    word-wrap: break-word;
    margin: auto;
    /*--- end --- */
  }

.login-pc {
    position: absolute;
    width: 100%;
    height: 25%;
    top: 75%;
}

.login-button {
    position: absolute;
    width: 219px;
    height: 51px;
    background: #F2DF9A;
    padding: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
    top: 0px;
}

.login-pc > a {
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  bottom: 0px;
}

.login-pc h3 {
    margin-top: 5px;
    margin-bottom: 5px;
}

.userid-pc {
  position: absolute;
  width: 100%;
  height: 25%;
}

.password-pc {
  position: absolute;
  width: 100%;
  height: 25%;
  top: 25%;
}

.userid-pc label,
.password-pc label {
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

.caution-pc {
  color: #000000;
  position: absolute;
  width: 100%;
  height: 25%;
  top: 50%;
}

.caution-pc p {
  width: 100%;
  word-wrap: break-word;
  margin: auto;
}

.login-pc .link_guest {
  position: absolute;
  bottom: 0;
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
</style>