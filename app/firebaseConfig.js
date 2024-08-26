import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBl9egigM7lnrtJYgHlQ49ptZaBzpbgi9g",
  authDomain: "pixoram-fd932.firebaseapp.com",
  projectId: "pixoram-fd932",
  storageBucket: "pixoram-fd932.appspot.com",
  messagingSenderId: "922491041535",
  appId: "1:922491041535:web:bd6775e2077cf1b7ed7eca",
  measurementId: "G-YRE54B6G7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}