<template>
    <div class="w-full">
      <HeaderComponet title="メニュー" class="h-2/5 mb-10 font-bold text-2xl md:text-4xl bg-amber-200"/>
      <main class="h-auto w-4/5 md:w-1/2 left-0 right-0 m-auto">
        <div class="top-1/2 w-1/2 grid gap-10 grid-cols-1 grid-rows-3 left-0 right-0 m-auto">
            <button name="submit"
                    class="rounded-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                    type="submit">
                <router-link to="/form">記録する</router-link>
            </button>

            <label 
              class="rounded-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
              for="picture"
            >
              <input
                class="hidden"  
                ref="fileInput" 
                id="picture" 
                type="file" 
                accept="image/*" 
                capture="environment" 
                @change="uploadImage">
                写真を撮る
            </label>

            <button name="submit"
                    class="rounded-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                    type="submit">
                <router-link to="/history">履歴を見る</router-link>
            </button>
        </div>

        <button name="submit"
                @click="SignOut"
                class="rounded-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                type="submit">
            ログアウト
        </button>
      </main>
      <FooterComponet class="absolute w-full bottom-0 justify-center bg-amber-200"/>
    </div>
</template>

<script>
import FooterComponet from '../components/Footer.vue'
import HeaderComponet from '../components/Header.vue'
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BACKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default {
  components: {FooterComponet,HeaderComponet},
  name: 'MenuPage',
  data() {
    return {
      img_url: ""
    }
  },
  methods: {
    selectFile() {
      this.$refs.fileInput.click();
    },
    SignOut() {
      this.$root.$emit('SignOut');
    },
    uploadImage(event) {
      const file = event.target.files[0]
      this.img_url = URL.createObjectURL(file);
      const storageRef = ref(storage,"files/"+file.name);
      uploadBytes(storageRef,file).then((snapshot) => {
        console.log("successfully uploaded",snapshot);
      });
    }
  }
}
</script>