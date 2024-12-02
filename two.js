// script.js
const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;

// Function to show the current slide
function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlideIndex);
    });
}

// Next Slide
function nextSlide() {
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        updateSlides();
    }
}

// Previous Slide
function prevSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateSlides();
    }
}

// Reset Slider
function restartSlider() {
    currentSlideIndex = 0;
    updateSlides();
}

// Show Info Modal
function showInfoModal(title, content) {
    document.getElementById('info-title').textContent = title;
    document.getElementById('info-content').textContent = content;
    document.getElementById('info-modal').style.display = 'block';
}

// Close Modal
//function closeModal() {
//    document.getElementById('info-modal').style.display = 'none';
//}

// Initialize the first slide
updateSlides();




   // function showInfoModal(title, content) {
   //     document.getElementById('info-title').textContent = title;
   //     document.getElementById('info-content').textContent = content;
   //     document.getElementById('info-modal').style.display = 'block';
   // }

    function closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }

    function submitForm() {
        const form = document.getElementById('calculator-form');
        const formData = new FormData(form);

        fetch("{% url 'calculate_water_footprint' %}", {
            method: 'POST',
            headers: {
                'X-CSRFToken': formData.get('csrfmiddlewaretoken'),
            },
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    document.getElementById('result-content').innerHTML = `
                        <p><strong>Green Water Footprint:</strong> ${data.green_wf} liters per quintal</p>
                        <p><strong>Blue Water Footprint:</strong> ${data.blue_wf} liters per quintal</p>
                        <p><strong>Grey Water Footprint:</strong> ${data.grey_wf} liters per quintal</p>
                        <p><strong>Total Water Footprint:</strong> ${data.total_wf} liters per quintal</p>
                    `;
                    document.getElementById('result-modal').style.display = 'block';
                }
            });
    }
