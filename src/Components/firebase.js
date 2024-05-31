import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDDk_L1s_Zvv-o6r7teu_VE4X99GNXEa9Y",
    authDomain: "clone-2024-c4d3d.firebaseapp.com",
    projectId: "clone-2024-c4d3d",
    storageBucket: "clone-2024-c4d3d.appspot.com",
    messagingSenderId: "428741482513",
    appId: "1:428741482513:web:21ad246c96680cc5c239b0",
    measurementId: "G-N23Y2NE2Y5"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// export {db, auth}