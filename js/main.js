(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    
})(jQuery);



const projctImages = [{
    id: "project1",
    images: [
        "img/robot1.jpg",
        "img/robot2.png",
        "img/robot3.png",
    ]
},
{
    id: "project2",
    images: [
        "img/side_stand.png",
        "img/project-3.jpg",
        "img/project-4.jpg",
    ]
},
{
    id: "project3",
    images: [
        "img/side_stand.png",
        "img/side_stand2.png",
        "img/side_stand3.png",
    ]
},
{
    id: "project4",
    images: [
        "img/project-3.jpg",
        "img/project-4.jpg",
        "img/project-6.jpg",
    ]
},
{
    id: "project5",
    images: [
        "img/stand1.png",
        "img/stand3.png",
        "img/stand4.png",
    ]
},
{
    id: "project6",
    images: [
        "img/pokemon1.jpg",
        "img/picachu.jpg",
        "img/pokeball.jpg",
        "img/starmie.jpg",
        "img/magnamite.jpg"
    ]
},
{
    id: "project7",
    images: [
        "img/rim.png",
        "img/project-7.png",
        "img/project-7(2).png"
    ]
},
{
    id: "project8",
    images: [
        "img/project-1.png",
        "img/Bpl 2.png",
    ]
},
{
    id: "project9",
    images: [
        "img/drone-1.png",
        "img/drone-2.png",
        "img/drone-3.png"
    ]
}

]

const AllPortfoliobtn = document.querySelectorAll(".portfolio-btn a");
const mainDiv = document.querySelector(".information");
const Overlay = document.querySelector(".infoverlay");
const CrossIcon = document.querySelector(".infoverlay .fa-times");
const next = document.querySelector(".infoverlay .fa-angle-right");
const prev = document.querySelector(".infoverlay .fa-angle-left");
var img = document.getElementById("popupImage");

for(let i=0; i < AllPortfoliobtn.length; i++){
    AllPortfoliobtn[i].addEventListener('click', (event) => {
        mainDiv.style.display = "block";       
        const fileterImages = projctImages.filter((e)=> e.id == AllPortfoliobtn[i].id)
        let j = 0;
        img.src = fileterImages[0].images[j];
        next.addEventListener('click', () => {
            if(j > fileterImages[0].images.length - 2){
                j = 2;
                img.src = fileterImages[0].images[j];
            }
            else {
                j++;
                img.src = fileterImages[0].images[j];
            }
            
        })

        prev.addEventListener('click', () => {
            if(j <= 0){
                j = 0;
                img.src = fileterImages[0].images[j];
            }
            else {
                j--;
                img.src = fileterImages[0].images[j];
            }
            
        })
    })
}

Overlay.addEventListener('click', (e) => {
    if(e.target == Overlay){
        mainDiv.style.display = "none";
    }
})
CrossIcon.addEventListener('click', () => {
    mainDiv.style.display = "none";
})


//When click any navItem will collapse the dropdown menu

var navbarIcon = document.querySelector(".navbar-collapse");
var allNavItem = document.querySelectorAll(".navbar-nav a");
allNavItem.forEach((e) => {
    e.addEventListener('click', () => {
        navbarIcon.classList.remove("show");
    })  
})





