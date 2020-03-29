const contactus = document.getElementById("contactForm");
if(contactus != null) {
    contactus.addEventListener("click", (event) => {
        event.preventDefault();

        var name = $("input#name").val();
        var email = $("input#email").val();
        var phone = $("input#phone").val();
        var message = $("textarea#message").val();

        // Fail message
        
        console.log(name+email+phone+message);

        // Get a reference to the database service
        var database = firebase.database();

        database.ref('contacts/' + new Date().toString()).set({
            username: name,
            email: email,
            phone : phone,
            message : message
          });
    });
}


const welcome_element = document.getElementById('welcome_message');
    welcome_element.innerText = 'loading...';
bc_firebase_remoteConfig(2000, {"welcome_message": "Caezar"}, (res, obj) => {
    if(res) {
        const val = obj.getValue('welcome_message');
        welcome_element.innerText = val._value + ' (' + val._source + ')';
    }
});