import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

const firebaseConfig = {
  apiKey: "AIzaSyA2QNfHbVEo4FnFBcB1qS3ygAovDuN5mz8",
  authDomain: "pet-shop-13.firebaseapp.com",
  databaseURL: "https://pet-shop-13.firebaseio.com",
  projectId: "pet-shop-13",
  storageBucket: "pet-shop-13.appspot.com",
  messagingSenderId: "437787055833",
  appId: "1:437787055833:web:34eee05ca05e63601c10c8",
};

firebase.initializeApp(firebaseConfig);
window.firebase=firebase;

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});

// app = new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
