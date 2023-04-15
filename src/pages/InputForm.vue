<template>
    <div class="w-full">
        <HeaderComponent title="入力フォーム" class="h-2/5 mb-10 font-bold text-2xl md:text-4xl bg-amber-200"/>
        <div class="flex flex-col justify-between h-3/5">
            <div class="space-y-4">
                <h2 class="text-lg font-medium">ウイスキーの名前を入力してください</h2>
                <input type="text" class="w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <h2 class="text-lg font-medium">次も飲みたいですか</h2>
                <div class="flex space-x-4 justify-center">
                    <svg-icon class="w-6 h-6 text-blue-500" type="mdi" :path="like"></svg-icon>
                    <svg-icon class="w-6 h-6 text-red-500" type="mdi" :path="dislike"></svg-icon>
                </div>
                <div class="mb-4">
                    <button class="inline-flex items-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <router-link to="/history">登録する</router-link>
                    </button>
                </div>
            </div>
        </div>
        <FooterComponent class="absolute w-full bottom-0 justify-center bg-amber-200"/>
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiThumbUp } from '@mdi/js';
import { mdiThumbDown } from '@mdi/js';
import HeaderComponent from '../components/Header.vue'
import FooterComponent from '../components/Footer.vue'

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
            dislike: mdiThumbDown
        }
    }
}
</script>

<style scoped>

</style>