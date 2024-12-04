
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


const userIconsContainer = document.querySelector('.user-icons');
        const fixedUser = document.querySelector('.fixed-user');

        function addUser() {
            const newUser = document.createElement('div');
            newUser.classList.add('user-icon');
            newUser.innerHTML = `<img src="images/person.png" alt="User Icon">`;
            userIconsContainer.appendChild(newUser);

            // Remove "Just Me" text if there's more than one user
            if (userIconsContainer.children.length > 1) {
                fixedUser.classList.remove('fixed-user');
            }
        }

        function removeUser() {
            // Get all user icons except the fixed one
            const icons = document.querySelectorAll('.user-icon:not(.fixed-user)');
            if (icons.length > 0) {
                const lastIcon = icons[icons.length - 1];
                userIconsContainer.removeChild(lastIcon);
            }

            // Add "Just Me" text back if only the fixed user remains
            if (userIconsContainer.children.length === 1) {
                fixedUser.classList.add('fixed-user');
            }
        }





 // Part 1: Adjust Number
 function adjustNumber(change) {
    const numberDisplay = document.getElementById('number-display');
    let currentValue = parseInt(numberDisplay.textContent);

    // Prevent negative numbers
    const newValue = Math.max(0, currentValue + change);
    numberDisplay.textContent = newValue;
}

// Part 2: Adjust Time Interval
const intervals = ['Day', 'Week', 'Month'];
function adjustInterval(change) {
    const intervalDisplay = document.getElementById('interval-display');
    const currentInterval = intervalDisplay.textContent;
    const currentIndex = intervals.indexOf(currentInterval);

    // Calculate new index and prevent going out of bounds
    const newIndex = Math.min(Math.max(0, currentIndex + change), intervals.length - 1);
    intervalDisplay.textContent = intervals[newIndex];
}


