import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDIm_8hM0QUxkIsU8qtnfgzrleWBqiWxR0",
  authDomain: "icloudstore-rvutd.firebaseapp.com",
  projectId: "icloudstore-rvutd",
  storageBucket: "icloudstore-rvutd.appspot.com",
  messagingSenderId: "204802296682",
  appId: "1:204802296682:web:0f501f61dfc14699b7b313",
  measurementId: "G-V6B67RM16S"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
