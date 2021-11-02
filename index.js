$(document).ready(function(){
 
  $('#loading_wrap').delay(1000).fadeOut(300,function(){
    $(".main").delay(2000).fadeIn(300);
    setTimeout(function(){
      $('#loading_wrap').remove()
    } ,100);
});
});
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getAnalytics } from "firebase/analytics";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
 apiKey: "AIzaSyDjjhmWhFzCOr3BR8zbISGDlAyZmBo2-LE",
 authDomain: "roysamson-portfolio.firebaseapp.com",
 projectId: "roysamson-portfolio",
 storageBucket: "roysamson-portfolio.appspot.com",
 messagingSenderId: "209945479746",
 appId: "1:209945479746:web:8faa36a60aec1e0764bbdb",
 measurementId: "G-0WGZECVJ9S"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);