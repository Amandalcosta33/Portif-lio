$('.sidenav').sidenav();

$('.carousel.carousel-slider').carousel({
    indicators : true,
    fullWidth : true
});

autoplay();

function autoplay(){
    $('.carousel.carousel-slider').carousel('next');
    setTimeout(autoplay, 5000);
}

$('.modal').modal();