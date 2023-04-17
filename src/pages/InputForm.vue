<template>
    <div class="w-full">
        <HeaderComponent title="入力フォーム" class="h-2/5 mb-10 font-bold text-2xl md:text-4xl bg-amber-200"/>
        <div class="flex flex-col justify-between h-3/5">
            <div class="space-y-4">
                <h2 class="text-lg font-medium">ウイスキーの名前を入力してください</h2>
                <input type="text" class="w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <h2 class="text-lg font-medium">次も飲みたいですか</h2>
                <div class="flex space-x-4 justify-center">
                    <button @click="good"> <svg-icon class="w-6 h-6 text-blue-500" type="mdi" :path="like"></svg-icon></button>
                    <button @click="bad"><svg-icon class="w-6 h-6 text-red-500" type="mdi" :path="dislike"></svg-icon></button>
                </div>
                <div class="mb-4">
                    <button @click="send" class="inline-flex items-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        登録する
                    </button>
                </div>
            </div>
        </div>
        <FooterComponent class="absolute w-full bottom-0 justify-center bg-amber-200"/>
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import Swal from 'sweetalert2';
import axios from 'axios';
import { mdiThumbUp } from '@mdi/js';
import { mdiThumbDown } from '@mdi/js';
import HeaderComponent from '../components/Header.vue'
import FooterComponent from '../components/Footer.vue'

const URL = "http://localhost:8080/api"
const TOKEN = "hoge" //TODO: index.vueからgoogleログインで取得したuser.uidをもらうように実装する

export default {
    name: 'InputForm',
    components: {
        SvgIcon,
        HeaderComponent,
        FooterComponent
    },
    data() {
        return{
            like: mdiThumbUp,
            dislike: mdiThumbDown,
            evaluate: 0,
            whicky_name* ""
        }
    },
    methods: {
        good() {
            this.evaluate = 1
            Swal.fire({
                title: 'Good',
                text: 'You clicked good button!',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        },
        bad() {
            this.evaluate = 0
            Swal.fire({
                title: 'Bad',
                text: 'You clicked bad button!',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        },
        send() {
            if (this.whicky_name === "" || this.evaluate === 0) {
                 Swal.fire({
                    title: 'Warning',
                    text: '入力されていない項目があります。',
                    icon: 'warning',
                    confirmButtonText: 'OK'
                })
                return
            }
            axios.post(URL,{name: this.whicky_name, evaluate: this.evaluate},{headers: {"Content-Type": "application/json", "Authorization": 'Bearer' + TOKEN}})
                  .then(() => {
                    //TODO: status: 200の場合の処理を実装する
                    
                  })
                  .catch(err => {
                    //TODO: status: 200以外の場合の処理を実装する
                    
                  });
        }
    }
}
</script>

<style scoped>

</style>
