import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyBiU_NX4IQ2CPIcLM6ITEexxvZ7oUVSnGM",
    authDomain: "chat-102a2.firebaseapp.com",
    databaseURL: "https://chat-102a2.firebaseio.com",
    projectId: "chat-102a2",
    storageBucket: "chat-102a2.appspot.com",
    messagingSenderId: "281717881557",
    appId: "1:281717881557:web:9930d48734814cf64f005c",
    measurementId: "G-P1YXSZ6NQP",
  };

  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
