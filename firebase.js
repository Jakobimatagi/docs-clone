import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCpkK9CEr04zvzcr5qGMNXm7Tfa8DlsZpg",
    authDomain: "docs-clone-b9821.firebaseapp.com",
    projectId: "docs-clone-b9821",
    storageBucket: "docs-clone-b9821.appspot.com",
    messagingSenderId: "101255934309",
    appId: "1:101255934309:web:9dacebc5fbf43e0627b18c"
  };



  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()


  const db = app.firestore();


  export { db };