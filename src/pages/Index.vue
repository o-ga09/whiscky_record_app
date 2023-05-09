<template>
    <div id="app">
    <!-- <img src="../assets/Wallpaper_Splatoon3_2022_2_1242_2688.jpg"> -->
        <div class=" w-full h-1/6 ">
          <div class="absolute w-1/2 h-1/6 left-0 right-0 m-auto text-2xl font-sans not-italic font-normal text-center text-black">
            <h2>ウイスキー記録アプリ</h2>
          </div>
        </div>
        
        <div class="relative w-full h-2/5 top-0">
          <div class="relative w-60 h-40 sm:w-80 sm:h-60 m-auto bg-yellow-200 border-amber-200 rounded-full">
          </div>
        </div>
        
        <div class="absolute w-3/4 sm:w-1/4 grid gap-10 grid-cols-1 grid-rows-2 left-0 right-0 m-auto">
          <button name="submit"
                  @click="SighIn"
                  class="items-center rounded-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                  type="submit">
              Googleアカウントで初めてみる
          </button>

          <button name="submit"
          @click="WithOutSighIn"
                  class="items-center rounded-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                  type="submit">
              登録せずに使ってみる
          </button>
        </div>

        <div class="absolute grid gap-5 grid-cols-1 grid-rows-3 bottom-5 md:bottom-20 left-0 right-0 m-auto">
            <li class="list-none underline">
                <router-link to="/policy">プライバシーポリシー</router-link>
            </li>
            <li class="list-none underline">
                <router-link to="/Terms_of_service">利用規約</router-link>
            </li>
            <li class="list-none underline">
                <router-link to="/contact">お問い合わせ</router-link>
            </li>
        </div>
    </div>
</template>

<script>
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import Swal from 'sweetalert2';
import 'firebase/storage'
import axios from 'axios';


const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BACKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const BaseURL = "http://localhost:8080"

export default {
  name: 'MainPage',
  computed: {
    uid() {
      return this.$store.state.uid
    }
  },
  data () {
    return {
      show: false,
      isopen: false
    }
  },
  mounted() {
    this.$root.$on('SignOut', () => {
      this.SignOut()
    })
  },
  methods: {
    async SighIn() {
      try {
        await signInWithPopup(auth, provider);
        const token = await auth.currentUser.getIdToken(true);
        const created_at = new Date(auth.currentUser.metadata.creationTime);
        const now = new Date();

        if (created_at < now) {
          const res = await axios.post(BaseURL + '/login', { "token": btoa(token) });
          const data = JSON.stringify(res.data);
          const json = JSON.parse(data);
          console.log("login");
          this.uid = json.user_id;
        } else {
          const res = await axios.post(BaseURL + '/register', { "token": btoa(token) });
          const data = JSON.stringify(res.data);
          const json = JSON.parse(data);
          console.log("register");
          this.uid = json.user_id;
        }

        this.Success();
        this.$router.push('/menu');
      } catch (error) {
        console.log(error);
      }
    },
    WithOutSighIn(){
      this.$router.push('/menu');
    },
    SignOut() {
      signOut(auth)
        .then(() => {
          this.uid = 0;
          this.Success();
          this.$router.push('/');
        })
        .catch((error) => {
          console.log(error);
      });
    },
    Success() {
        this.evaluate = 1
        Swal.fire({
            title: 'Success',
            text: 'You Signed out',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    }
  },
};
</script>

<style scoped>
img {
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
}

body {
  margin: 0;
}
</style>