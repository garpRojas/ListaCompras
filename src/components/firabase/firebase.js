import app from "firebase/app";

const config = {
  apiKey: "AIzaSyBIkpga3cA24c78gXfvJQIWE5_YbP9bf_o",
  authDomain: "casa-concasa.firebaseapp.com",
  databaseURL: "https://casa-concasa.firebaseio.com",
  projectId: "casa-concasa",
  storageBucket: "casa-concasa.appspot.com",
  messagingSenderId: "956063965841",
  appId: "1:956063965841:web:7d534425b05aa1b4945530",
  measurementId: "G-X6M42BT8ZT"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
export default Firebase;
