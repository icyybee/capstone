import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAnGMrGL7CZSZgjuKGiX4Jqkti2bIa1hng",
    authDomain: "capstone-f77cc.firebaseapp.com",
    projectId: "capstone-f77cc",
    storageBucket: "capstone-f77cc.appspot.com",
    messagingSenderId: "978185900741",
    appId: "1:978185900741:web:f7515e442883ff3eda96ac"
};
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {  //if the usersnapshot doesn't exist
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }

    return userDocRef;
};