import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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



