import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDAOTyeWQftIXcDmH_1Dyjfv5XsVugAbXU",
    authDomain: "netflix-clone-428bf.firebaseapp.com",
    projectId: "netflix-clone-428bf",
    storageBucket: "netflix-clone-428bf.appspot.com",
    messagingSenderId: "625096734274",
    appId: "1:625096734274:web:f5d6b35bf5b94a7d4f1fdb"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;