import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "AIzaSyB2sVNM5kVtJhVltGz3KgK1W-Lc-Vi_CUo",
  authDomain: "corona-chatbot-api.firebaseapp.com",
  databaseURL: "https://corona-chatbot-api.firebaseio.com",
  projectId: "corona-chatbot-api",
  storageBucket: "corona-chatbot-api.appspot.com",
  messagingSenderId: "288385432728",
  appId: "1:288385432728:web:56a5dea67fb063a38ba4ed",
  measurementId: "G-TC80YT1J6M"
}

firebase.initializeApp(config)
