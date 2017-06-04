
$( document ).ready(function() {
    //Materialize Button
    $('.button-collapse').sideNav({
          menuWidth: 300, // Default is 240
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );

    //Jump to div Animation
    $("#btn-aboutme").click(function() {
        $('html, body').animate({
            scrollTop: $(".aboutme").offset().top
        }, 1300);
    });

    $("#btn-skills").click(function() {
        $('html, body').animate({
            scrollTop: $(".skills").offset().top
        }, 1300);
    });

    $("#btn-education").click(function() {
        $('html, body').animate({
            scrollTop: $(".school").offset().top
        }, 1300);
    });

    $("#btn-hobbies").click(function() {
        $('html, body').animate({
            scrollTop: $(".hobbies").offset().top
        }, 1300);
    });

    $("#btn-projects").click(function() {
        $('html, body').animate({
            scrollTop: $(".projects").offset().top
        }, 1300);
    });


    //Circle Stats animation
    $("#test-circle").circliful({
        foregroundColor : "white",
        backgroundColor : "transparent",
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 15,
        percent: 54,
        fontColor : "white"
    });

    $("#test-circle1").circliful({
        foregroundColor : "white",
        backgroundColor : "transparent",
        animationStep: 4,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 15,
        percent: 60,
        fontColor : "white"
    });

    $("#test-circle2").circliful({
        foregroundColor : "white",
        backgroundColor : "transparent",
        animationStep: 4,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 15,
        percent: 70,
        fontColor : "white"
    });

    $("#test-circle3").circliful({
        foregroundColor : "white",
        backgroundColor : "transparent",
        animationStep: 4,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 15,
        percent: 50,
        fontColor : "white"
    });

    $("#test-circle4").circliful({
        foregroundColor : "white",
        backgroundColor : "transparent",
        animationStep: 4,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 15,
        percent: 60,
        fontColor : "white"
    });

    $("#test-circle5").circliful({
        foregroundColor : "white",
        backgroundColor : "transparent",
        animationStep: 4,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 15,
        percent: 60,
        fontColor : "white"
    });

    $('.carousel.carousel-slider').carousel({fullWidth: true, indicators: true});

    autoplay()
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }

    $('.modal').modal();

    $('#project1').on('Click', function() {
        alert("hola");
    });

});
