import firebase from 'firebase';
//? Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRcNwTNx9TSSwXleB0MLsiRE3dktq_Oss",
  authDomain: "rn-instagram-clone-somon-das.firebaseapp.com",
  projectId: "rn-instagram-clone-somon-das",
  storageBucket: "rn-instagram-clone-somon-das.appspot.com",
  messagingSenderId: "697919155644",
  appId: "1:697919155644:web:9cf61b6f0a04ea3210cfb9"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

export default firebase;