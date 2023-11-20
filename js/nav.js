document.addEventListener('DOMContentLoaded', function() {
    // Get button and navigation list elements
    const toggleBtn = document.getElementById('toggleBtn');
    const List = document.querySelector('.horizontal__list');
  
    // Toggle the display of the navigation list on button click
    toggleBtn.addEventListener('click', function() {
      if (List.style.display === 'none') {
        List.style.display = 'block';
      } else {
        List.style.display = 'none';
      }
    });
  });
  