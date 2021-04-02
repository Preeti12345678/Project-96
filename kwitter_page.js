var firebaseConfig = {
    apiKey: "AIzaSyBlrfQflWVERJ6FiygmN86ImxV0v0KkhPU",
    authDomain: "kwitter-2d701.firebaseapp.com",
    databaseURL: "https://kwitter-2d701-default-rtdb.firebaseio.com",
    projectId: "kwitter-2d701",
    storageBucket: "kwitter-2d701.appspot.com",
    messagingSenderId: "268592771083",
    appId: "1:268592771083:web:6a430136bce3fdcdda570e",
    measurementId: "G-QXBMTLHG5L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("user_name");
 room_name=localStorage.getItem("room_name");
 function send(){
     message=document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
         name: user_name,
         message: message,
         Likes: 0
     });
 }