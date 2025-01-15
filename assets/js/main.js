$('.toggle').click(function()
{
    $('.collapse-menu').toggleClass('show');
});

$('.pricing-slider').owlCarousel({
    loop:true,
    nav:false,
    center: true,
    autoplay: true,
    margin:0,
    autoPlaySpeed: 300,
    startPosition: 1,
    endPosition: 6,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});

$('.testimonial-slider').owlCarousel({
    loop:true,
    nav:false,
    center: true,
    autoplay: true,
    autoPlaySpeed: 300,
    startPosition: 1,
    endPosition: 6,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});

