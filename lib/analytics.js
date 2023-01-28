import firebase from 'firebase/app'
import 'firebase/analytics'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAQz3qOswirZrgrPFIlk_e4aluX37IulNY",
    authDomain: "chatty-cloud.firebaseapp.com",
    projectId: "chatty-cloud",
    storageBucket: "chatty-cloud.appspot.com",
    messagingSenderId: "804452310835",
    appId: "1:804452310835:web:539ef280f949e948dce846",
    measurementId: "G-ZF20SV5S6F"
  })
}

export const analytics = firebase.analytics();
