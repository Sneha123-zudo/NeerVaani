window.onload = function() {
  // Add the 'active' class to all timeline items for the fade-in animation
  document.querySelectorAll('.timeline-item').forEach((item, index) => {
      setTimeout(() => {
          item.style.opacity = '1';
      }, index * 500); // Delay each event by 500ms
  });
};
