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


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
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
        $('html, body').animate({scrollTop: 0}, 200, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

// we are opening soon
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    var tooltip = new bootstrap.Tooltip(tooltipTriggerEl)

    // Add mouseleave event listener to hide the tooltip
    tooltipTriggerEl.addEventListener('mouseleave', function() {
                tooltip.hide();
              });
              return tooltip;
  })
});

// Theme Section

$(document).ready(function() {
    // Handle the image click event
    $('img').on('click', function() {
        // Get the ID of the clicked image
        var imgId = $(this).attr('id');
        
        // Remove any existing class from the body
        $('div').removeClass('blue grey');
        
        // Set the background color based on the clicked image's ID
        if (imgId === 'cool') {
            $('div').addClass('blue');
        } else if (imgId === 'neutral') {
            $('div').addClass('grey');
        }
        // If the image ID is 'warm', the background remains unchanged (no class added)
    });
});


