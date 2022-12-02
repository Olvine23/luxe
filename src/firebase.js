// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword, 
    sendPasswordResetEmail,
    createUserWithEmailAndPassword,
    signOut

} from "firebase/auth"

import {
    getFireStore,
    query,
    getDocs,
    collection,
    where,
    
    addDoc,

} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnA6BJRUnMGM-CaYjGsvt2ppFB2TH17eY",
  authDomain: "ollylife.firebaseapp.com",
  projectId: "ollylife",
  storageBucket: "ollylife.appspot.com",
  messagingSenderId: "657964989592",
  appId: "1:657964989592:web:90e50739194f8b125124ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

//google authentication

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try{
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q =  query(collection(db, "users") , where("uid", "==" ,user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0){
            await addDoc(collection(db, "users"), {
                uid:user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email
            })
        }

    }
    catch(err){
        console.error(err)
        alert(err.message)
    }
}

const logInWithEmailAndPassword = async(email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password);
    }
    catch(err){
        console.error(err);
        alert(err.massage)
    }
}

const registerWithEmailAndPassword = async (name, email, password)
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid:user.uid,
            name,
            authProvider: "local",
            email
        })
    } catch (err){
        console.error(err)
        alert(err.message)
    }

    const sendPasswordReset = async (email) => {
        try {
          await sendPasswordResetEmail(auth, email);
          alert("Password reset link sent!");
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      };
      const logout = () => {
        signOut(auth);
      };

      export {
        auth,
        db,
        signInWithGoogle,
        logInWithEmailAndPassword,
        registerWithEmailAndPassword,
        sendPasswordReset,
        logout,
      };