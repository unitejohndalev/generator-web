
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database'

export default function StartFirebase() {
 const firebaseConfig = {
   apiKey: "AIzaSyBySVOmJdt9CF5zRYIr7z9hFYFEvyh84HI",
   authDomain: "reactjs-projects-170de.firebaseapp.com",
   databaseURL: "https://reactjs-projects-170de-default-rtdb.firebaseio.com",
   projectId: "reactjs-projects-170de",
   storageBucket: "reactjs-projects-170de.appspot.com",
   messagingSenderId: "417776199739",
   appId: "1:417776199739:web:053828c19837136a30541e",
   measurementId: "G-9KL5N78T4N",
 };

 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 return getDatabase(app)
}
 


