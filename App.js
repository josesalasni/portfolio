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

 
function AboutMe () {
    document.getElementById('about-me').scrollIntoView({
        behavior: 'smooth'
    });
}

function Projects () {
    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth'
    });
}

function Technologies (){
    document.getElementById('tech').scrollIntoView({
        behavior: 'smooth'
    });
}
