const button = document.getElementById('myButton');

button.addEventListener('mouseenter', function() {
  this.style.transform = 'scale(1.1)'; // Increase button size on hover
});

button.addEventListener('mouseleave', function() {
  this.style.transform = 'scale(1)'; // Reset button size on mouse leave
});
