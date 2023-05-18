import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    img_url: "",
    uid: ""
  },
  mutations: {
    setImgUrl(state,img) {
      state.img_url = img;
    },
    setUid(state,uid) {
      state.uid = uid;
    }
  }
})