  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDNwYkktmxKGmQE8lulB1LUqPM98fRb_DU",
    authDomain: "badminton360-66f04.firebaseapp.com",
    projectId: "badminton360-66f04",
    storageBucket: "badminton360-66f04.firebasestorage.app",
    messagingSenderId: "239430176855",
    appId: "1:239430176855:web:763dc72b770a5131215312",
    measurementId: "G-W4W0TBD0XG"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);



const submit = document.getElementById('sign-up-submit');
submit.addEventListener("click", function (event) {
  event.preventDefault()
    
  //inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (!email || !password || (confirmPassword === '' && document.getElementById('sign-up-submit').classList.contains('hidden') === false)) {
    alert("Please fill in all fields.");
    return false; // Prevent form submission
  }

  if (password !== confirmPassword) {
    alert("Passwords are different. Please make sure both passwords match.");
    return
  } else {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Account created...!");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
  }
})