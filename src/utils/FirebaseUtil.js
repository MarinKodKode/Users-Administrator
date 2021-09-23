import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,  } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import {collection , getDocs , getFirestore} from "firebase/firestore";

export function firebaseConfig(){
    const config = {
        apiKey: "AIzaSyC384IH14JjNmszNJVqBYqWzJvWSVtAmk8",
        authDomain: "cms-users-react.firebaseapp.com",
        projectId: "cms-users-react",
        storageBucket: "cms-users-react.appspot.com",
        messagingSenderId: "62247704891",
        appId: "1:62247704891:web:8cfb1ad6be00e7969cff1e",
        measurementId: "G-0B5TF8S0DD"
    };

        const app = initializeApp(config);
        const analytics = getAnalytics(app);
}

export function firebaseRegisterUser(email, password){
    createUserWithEmailAndPassword(getAuth(), email, password)
    .then(getUserCredentials => {
        //getUserCredentials.user.
    })
}

export async function firebaseLogin(email, password){
    const auth = getAuth();
    try{
        let credenciales = await signInWithEmailAndPassword(auth, email, password); 
        //credenciales.user;
    }catch(e){
        return false;
    }  
    return true;
}

export async function firebaseListCostumers(colection){
   let listado = [];
   let consult = collection(getFirestore(), colection);
   let response = await getDocs(consult);

   response.forEach(documento => {
        
    let objeto  = documento.data();
    objeto.id = documento.id;
    listado.push(objeto);

   });

   return listado;
}


