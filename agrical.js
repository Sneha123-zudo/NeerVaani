$(document).ready(function () {
    const $slider = $('.slider-container');

    // Initialize Slick Slider
    $slider.slick({
        dots: true,          // Enable pagination dots
        infinite: false,     // Stop looping
        speed: 600,          // Smooth transition speed
        slidesToShow: 1,     // Show one slide at a time
        slidesToScroll: 1,   // Scroll one slide at a time
        arrows: false,       // Hide default arrows
        draggable: false     // Disable swipe to prioritize button navigation
    });

    // Handle "Next" button
    $(document).on('click', '.next-slide', function () {
        $slider.slick('slickNext');
    });

    // Handle "Previous" button
    $(document).on('click', '.prev-slide', function () {
        $slider.slick('slickPrev');
    });
});