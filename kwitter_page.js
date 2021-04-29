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

    room_name = localStorage.getItem("room_name");
    username = localStorage.getItem("username");

    function send() {
          message = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
            name: username,
            message: message,
            likes: 0
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
        named = message_data['name'];
        message = message_data['message'];
        likes = message_data['message'];
        username_shown = "<h4> "+named +"<img class='user_tick' src='greenTick.jpg'><h4>";
        messaging = "<h4 class='message_h4'>"+ message + "</h4>";
        like_button =  "<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='updateLike(this.id)'>";
        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ likes +"</span></button><hr>";
        row_output = username_shown + messaging + like_button + span_with_tag;
        document.getElementById("output").innerHTML += row;
//End code
      }});});}
getData();

function updateLike(message_id) {
  button_id = message_id;
  like_amount = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;

  firebase.database().ref(room_name).child(message_id).update({
    like: updated_likes
  });
}


function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }