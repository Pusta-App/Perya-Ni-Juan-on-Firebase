// CHECK WHETHER THE USER IS SIGNED IN OR NOT.
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log("User is signed in.");
        var test = document.getElementById("phurl");
        if(test != null) {
            document.getElementById("phurl").src = user.photoURL ? user.photoURL : "Photo Not Found!";
            document.getElementById("uname").innerHTML = user.displayName ? user.displayName : "Username Not Found!";
            document.getElementById("userid").innerHTML = user.uid;
            document.getElementById("eaddress").innerHTML = user.email;
            document.getElementById("anonymous").innerHTML = user.isAnonymous ? "YES" : "NO";
            document.getElementById("verified").innerHTML = user.emailVerified ? "YES" : "NO";
            document.getElementById("provider").innerHTML = user.providerData ? JSON.stringify(user.providerData) : "NO DATA FOUND";
        }
    } else {
        //document.location.href="./index.html";
    }
});

// HERE WE HAVE A LOGOUT MECHANISM.
const logout = document.getElementById('logout');
    if( logout != null) {
        logout.addEventListener("click", (e) => {
            e.preventDefault();

            firebase.auth().signOut().then(function() {
                document.location.href="./index.html";
            }).catch(function(error) {
                console.log("Signout Error: " + error );
            });
        });
    }

// HERE IS AN EXAMPLE OF REGISTRATION OF USER.
const signupForm = document.getElementById('signupForm');
    if( signupForm != null) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();

            var uname = document.getElementById("uname").value;
            var pword = document.getElementById("pword").value;

            firebase.auth().createUserWithEmailAndPassword(uname, pword).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode + ': ' + errorMessage);
                if(error == null) {
                    document.location.href="./profile.html";
                }
            });

            

            console.log("Submitted Signup! UN:" + uname + " PW:" + pword );
        });
    }

// HERE IS THE FORGOT OR RESET PASSWORD FORM
const signinForm = document.getElementById('signinForm');
    if( signinForm != null) {
        signinForm.addEventListener("submit", (e) => {
            e.preventDefault();
    
            var uname = document.getElementById("uname").value;
            var pword = document.getElementById("pword").value;
    
            firebase.auth().signInWithEmailAndPassword(uname, pword).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode + ': ' + errorMessage);
                if(error == null) {
                    document.location.href="./profile.html";
                }
            });
    
            console.log("Submitted SignIn! UN:" + uname + " PW:" + pword );
        });
    }
    
// HERE WE MAKE A RESET OR FORGOT PASSWORD PAGE.
const forgotForm = document.getElementById('forgotForm');
    if( forgotForm != null) {
        forgotForm.addEventListener("submit", (e) => {
            e.preventDefault();
    
            var email = document.getElementById("email").value;

            firebase.auth().sendPasswordResetEmail(email).then(function() {
                // Email sent.
                console.log("Email Sent!");
              }).catch(function(error) {
                // An error happened.
                console.log("Error Password Reset: " + error);
            });

            //var user = firebase.auth().currentUser;
            // user.sendEmailVerification().then(function() {
            //     // Email sent.
            // }).catch(function(error) {
            //     // An error happened.
            // });

            // user.updatePassword(newPassword).then(function() {
            //     // Update successful.
            // }).catch(function(error) {
            //     // An error happened.
            // });
    
        });
    }
    
// HERE WE TRY TO AUTHENTICATE WITH FACEBOOK
const signfb = document.getElementById('signfb');
    if( signfb != null) {
        signfb.addEventListener("click", (e) => {
            e.preventDefault();
    
              var provider = new firebase.auth.FacebookAuthProvider();
              provider.setCustomParameters({
                'display': 'popup'
              });

              firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
                document.location.href="./profile.html";
              }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
              });
        });
    }

// HERE WE TRY TO AUTHENTICATE WITH GOOGLE
const signgg = document.getElementById('signgg');
    if( signgg != null) {
        signgg.addEventListener("click", (e) => {
            e.preventDefault();
    
            var provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
              }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
              });

              firebase.auth().signInWithRedirect(provider);
        });
    } 











        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log( JSON.stringify(user) );
                //     var user = firebase.auth().currentUser;

                // user.updateProfile({
                //   displayName: "Jane Q. User",
                //   photoURL: "https://example.com/jane-q-user/profile.jpg"
                // }).then(function() {
                //   // Update successful.
                // }).catch(function(error) {
                //   // An error happened.
                // });

                // var user = firebase.auth().currentUser;

                // firebase.auth().sendPasswordResetEmail(user.email).then(function() {
                //     // Email sent.
                //   }).catch(function(error) {
                //     // An error happened.
                //   });


                // user.updateProfile({
                //     displayName: "Caezar De Castro II",
                //     photoURL: "https://localhost/photo.jpg"
                //   }).then(function() {
                //     // Update successful.
                //   }).catch(function(error) {
                //     // An error happened.
                //   });

            } else {
            // No user is signed in.
            }
        });
