

/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


// Bootsrtap Menu Customize With js
jQuery(function ($) {
    // Dropdown Menu Slide Toggle
    $('.navbar .dropdown').hover(function () {
        $(this).children(".dropdown-menu").fadeToggle(350);
    });

    // Dropdown navigation Parent links clickable
    $('.navbar .dropdown > a').click(function () {
        location.href = this.href;
    });
});


$(window).on('load', function () {

    // Equalize Heights of Divs service_item
    var SImaxHeight = 0;
    $('.service_item').each(function () {
        if ($(this).height() > SImaxHeight ) {
            SImaxHeight = $(this).height();
        }
    });
    $('.service_item').height(SImaxHeight);
    
    // Equalize Heights of Divs feature_item
    var FImaxHeight = 0;
    $('.feature_item').each(function () {
        if ($(this).height() > FImaxHeight ) {
            FImaxHeight = $(this).height();
        }
    });
    $('.feature_item').height(FImaxHeight);
    
    // Equalize Heights of Divs product_module
    var PMmaxHeight = 0;
    $('.product_module').each(function () {
        if ($(this).height() > PMmaxHeight ) {
            PMmaxHeight = $(this).height();
        }
    });
    $('.product_module').height(PMmaxHeight);
    
    // Equalize Heights of Divs pricingTable
    var PImaxHeight = 0;
    $('.pricingTable').each(function () {
        if ($(this).height() > PImaxHeight ) {
            PImaxHeight = $(this).height();
        }
    });
    $('.pricingTable').height(PImaxHeight);
    
    // Equalize Heights of Divs blog_card
    var BCmaxHeight = 0;
    $('.blog_card').each(function () {
        if ($(this).height() > BCmaxHeight ) {
            BCmaxHeight = $(this).height();
        }
    });
    $('.blog_card').height(BCmaxHeight);
    
    // Equalize Heights of Divs careerBoxItem
    var CBImaxHeight = 0;
    $('.careerBoxItem').each(function () {
        if ($(this).height() > CBImaxHeight ) {
            CBImaxHeight = $(this).height();
        }
    });
    $('.careerBoxItem').height(CBImaxHeight);
    
    // Equalize Heights of Divs certification_post_item
    var CPImaxHeight = 0;
    $('.certification_post_item').each(function () {
        if ($(this).height() > CPImaxHeight ) {
            CPImaxHeight = $(this).height();
        }
    });
    $('.certification_post_item').height(CPImaxHeight);
    
});

$(document).on('ready', function () {
     // Back To Top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn('slow');
        } else {
            $(".back-to-top").fadeOut('slow');
        }
    });
    $(".back-to-top").click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
    });

    // Add smooth scrolling to all links
    $(".navbar-nav a , .footer_nav a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            // event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    
    // testimonial-slider
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[650,1],
        pagination: true,
        autoPlay:true
    });
    
    // for clients
    $(".common #clients_slide").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
    $(".quarter_third #clients_slide").owlCarousel({
        items:3,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
    $("#clients_slide").owlCarousel({
        items:5,
        itemsDesktop:[1000,5],
        itemsDesktopSmall:[979,4],
        itemsTablet:[768,3],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});

