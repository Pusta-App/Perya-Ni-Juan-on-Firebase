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


function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

setInterval(function(){ 
    confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 }
    }); 
}, 3000);


var duration = 5 * 1000;
var animationEnd = Date.now() + duration;
var skew = 1;

(function frame() {
  var timeLeft = animationEnd - Date.now();
  var ticks = Math.max(200, 500 * (timeLeft / duration));
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    gravity: 0.5,
    origin: {
      x: Math.random(),
      // since particles fall down, skew start toward the top
      y: (Math.random() * skew) - 0.2
    },
    colors: ['#9CBF09'],
    shapes: ['circle']
  });

  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
}());


var end = Date.now() + Number.MAX_VALUE;

// go Buckeyes!
var colors = ['#2A8BE8', '#F8CE37'];

(function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 70,
    origin: { x: 0 },
    colors: colors
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 70,
    origin: { x: 1 },
    colors: colors
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());