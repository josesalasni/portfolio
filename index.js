//Siema carousel 

const mySiema = new Siema({
  selector: '.siema',
  duration: 1000,
  loop: true,
  easing: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
});


document.querySelector('.prev').addEventListener('click', function  (e) {
  e.preventDefault();
  mySiema.prev();
});

document.querySelector('.next').addEventListener('click', function (e) {
  e.preventDefault();
  mySiema.next();
}); 




function setHeightCover () {
  document.getElementById("cover").style.height = window.innerHeight + "px" ;
}
//First time
setHeightCover();


// Attaching the event listener function to window's resize event
window.addEventListener("resize", setHeightCover);


zenscroll.setup(null, 0);

/* Sections click */

document.getElementById("projectsclick").onclick = function(e) {
  e.preventDefault();
  //var offset = 00 // pixels for the clouds :)
  //var duration = 800 // milliseconds
  var project = document.getElementById("projects");
  //zenscroll.center( project, duration, offset );
  zenscroll.intoView(project);
}


document.getElementById("techsclick").onclick = function(e) {
  e.preventDefault();
  var offset = 00 // pixels for the clouds :)
  var duration = 800 // milliseconds
  var tech = document.getElementById("tech");
  //zenscroll.center( tech, duration, offset );
  zenscroll.intoView(tech);
}


document.getElementById("aboutclick").onclick = function(e) {
  e.preventDefault();
  var offset = 370 // pixels for the clouds :)
  var duration = 800 // milliseconds
  var about = document.getElementById("about-me");
  //zenscroll.center( about, duration, offset );
  zenscroll.intoView(about);
}

document.getElementById("home-scroll-down").onclick = function(e) {
  e.preventDefault();
  
  var about = document.getElementById("about-me");
  //zenscroll.center( about, duration, offset );
  zenscroll.intoView(about);
}



/* Devices Animation */


document.getElementById("btn-send-mail").onclick = function (e) {
  e.preventDefault();

  var name = document.getElementById("name-input").value;
  var email = document.getElementById("email-input").value;

  var message = document.getElementById("body-msg").value;
  
  window.location.href = 'mailto:josesalasni@gmail.com?subject=The subject - ' + name + ' (' + email + ')' + '&body=' + message;

}