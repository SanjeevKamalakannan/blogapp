  // Your web app's Firebase configuration
  var firebaseConfig = {
        apiKey: "AIzaSyCfI4pJvsi9Yu8JKUqHSFh-1bvhqg25vnw",
        authDomain: "myproject-bbade.firebaseapp.com",
        databaseURL: "https://myproject-bbade-default-rtdb.firebaseio.com",
        projectId: "myproject-bbade",
        storageBucket: "myproject-bbade.appspot.com",
        messagingSenderId: "923993510153",
        appId: "1:923993510153:web:86ec4b317dee2aa13803d8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
    function signUp(){

        var name= document.getElementById("name");
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        console.log(name.value);
        firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((res) => {
        const user = firebase.auth().currentUser;

        
        if (user != null) {
            user.updateProfile({
                displayName: name.value
            }).then(() => {
              
                window.location = 'blog.html';
            }).catch((error) => {
              console.log(error);
            });
        } else {
          alert("Some error has occured");
        }
    
      }
      ).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
        
}

function signIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then((res) => {
       
        window.location = 'blog.html';
       
      }
      ).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        
      });
    }

  function googleSignIn(){
    base_provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(base_provider).then(function(result){
      console.log(result);
      alert("Success..Signed in with google");
      window.location = 'blog.html';
    }).catch(function(err){
      console.log(err);
      alert("Failed");

    });
  }