  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getDatabase,ref,set,push,onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyADzkizD8SnzmU56Oyxjqjm0hL18OgORvE",
    authDomain: "todo-app-d59ab.firebaseapp.com",
    databaseURL: "https://todo-app-d59ab-default-rtdb.firebaseio.com",
    projectId: "todo-app-d59ab",
    storageBucket: "todo-app-d59ab.appspot.com",
    messagingSenderId: "326880489654",
    appId: "1:326880489654:web:223904693c838db125f617",
    measurementId: "G-0FZDZZV9VY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase();

     var city = document.getElementById("city")
    //  console.log(city)
     var course = document.getElementById("course")
     var fullname = document.getElementById("fullname")
     var fathername = document.getElementById("fathername")
     var email = document.getElementById("email")
     var phone = document.getElementById("phone")
     var cnic = document.getElementById("cnic")
     var fathercnic = document.getElementById("fathercnic")
     var dob = document.getElementById("dob")
     var gender = document.getElementById("gender")
     var address = document.getElementById("address")
     var last = document.getElementById("last")
     var laptop = document.getElementById("laptop")

    //  console.log(city)

  window.handleSubmit = function(e){
    // console.log(e)
    e.preventDefault();

    var studentData = {
      id: push(ref(database,'StudentData/')).key,
      City:city.value,
Course:course.value,
FullName:fullname.value,
FatherName:fathername.value,
Email:email.value,
phone:phone.value,
CNIC:cnic.value,
FatherCnic:fathercnic.value,
DateOFBirth:dob.value,
Gender:gender.value,
Address:address.value,
LastQualification:last.value,
DoYouHaveLaptop:laptop.value
    }

    set(ref(database,`StudentData/${studentData.id}`),studentData)

  }

  window.handleGetValue = function(){
    const starCountRef = ref(database, 'StudentData')
    onValue(starCountRef,function(data){
      console.log(data.val())
    })
  }
  handleGetValue()

 