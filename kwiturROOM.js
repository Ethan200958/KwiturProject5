  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyADlM4Vd6VjuvuUKEKqmbkOIhRtfuv3UVA",
    authDomain: "chatappproject2-7d702.firebaseapp.com",
    databaseURL: "https://chatappproject2-7d702.firebaseio.com",
    projectId: "chatappproject2-7d702",
    storageBucket: "chatappproject2-7d702.appspot.com",
    messagingSenderId: "626341959807",
    appId: "1:626341959807:web:616fa666086f6b4e0a074a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("username", username);
document.getElementById("username").innerHTML = "Welcome "+username+"!";


function addRoom() {
  var room = document.getElementById("roomName").value;
  firebase.database().ref("/").child(room).update({
    purpose: "room name"
  });
  localStorage.setItem("roomName", room);
  window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(snapshot) {childKey = 
childSnapshot.key;
//code start
var RoomNames = childKey;
roomRow = "<div class='room_name' id='room_name' onclick='redirectRooms(this.id)'>#"+RoomNames+"</div><hr>";
document.getElementById("output").innerHTML += roomRow;
//code end
})})}
getData();

function redirectRooms(name) {
  localStorage.setItem("room_name", name);
  window.location = "kwitur_page.html";
}

function logout() {
  localStorage.removeItem("room_name");
  localStorage.removeItem("username");
  window.location = "index.html";
}