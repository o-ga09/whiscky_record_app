<template>
    <div class="w-full">
        <HeaderComponent title="入力フォーム" class="h-2/5 mb-10 font-bold text-2xl md:text-4xl bg-amber-200"/>
        <div class="flex flex-col justify-between h-3/5">
            <div class="space-y-4">
                <h2 class="text-lg font-medium">ウイスキーの名前を入力してください</h2>
                <input v-model="inputValue" type="text" class="w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <h2 class="text-lg font-medium">次も飲みたいですか</h2>
                <div class="flex space-x-4 justify-center">
                    <button @click="good"> <svg-icon class="w-6 h-6 text-blue-500" type="mdi" :path="like"></svg-icon></button>
                    <button @click="bad"><svg-icon class="w-6 h-6 text-red-500" type="mdi" :path="dislike"></svg-icon></button>
                </div>

                <div class="flex space-x-4 justify-center">
                    <div class="">
                        <button @click="submitForm" class="inline-flex items-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            登録する
                        </button>
                    </div>

                    <label
                    for="picture"
                    >
                    <input
                        class="hidden"  
                        ref="fileInput" 
                        id="picture" 
                        type="file" 
                        accept="image/*" 
                        capture="environment" 
                        @change="UploadImage">
                        <svg-icon class="h-11 w-11 text-green-500" type="mdi" :path="camera"></svg-icon>
                    </label>
                </div>
            </div>
        </div>
        <FooterComponent class="absolute w-full bottom-0 justify-center bg-amber-200"/>
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import Swal from 'sweetalert2';
import { mdiThumbUp } from '@mdi/js';
import { mdiThumbDown } from '@mdi/js';
import { mdiCamera } from '@mdi/js';
import HeaderComponent from '../components/Header.vue'
import FooterComponent from '../components/Footer.vue'
import axios from 'axios';

const BaseURL = "http://localhost:8080"

export default {
    name: 'InputForm',
    components: {
        SvgIcon,
        HeaderComponent,
        FooterComponent
    },
    computed: {
      img_url() {
        return this.$store.state.img_url
      }
    },
    data() {
        return{
            like: mdiThumbUp,
            dislike: mdiThumbDown,
            camera: mdiCamera,
            evaluate: 0,
            inputValue: ''
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
        async submitForm() {
            console.log(this.inputValue);
            console.log(this.evaluate);
            console.log(this.img_url);
            console.log(sessionStorage.getItem("uid"));
            const res = await axios.post(BaseURL + '/record',{
                "uid": sessionStorage.getItem("uid"),
                "name": this.inputValue,
                "evaluate": this.evaluate,
                // "imageURL": this.img_url
            });
            const data = JSON.stringify(res.data);
            const json = JSON.parse(data);

            if(res.status === 200){
                Swal.fire({
                    title: 'Good',
                    text: json.status,
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            } else {
                Swal.fire({
                    title: '登録失敗',
                    text: json.status,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }
        },
        UploadImage(event) {
            this.$root.$emit('UploadImage',event);
        }
    }
}
</script>

<style scoped>

</style>