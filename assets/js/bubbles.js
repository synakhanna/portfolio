document.addEventListener("DOMContentLoaded", function() {
  // Function to create bubbles (if not already defined)
  function createBubble() {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.left = Math.random() * 100 + 'vw';
      bubble.style.animationDuration = Math.random() * 5 + 10 + 's'; // Slower bubbles
      
      // Set random size for the bubble
      const size = Math.random() * 60 + 20; // Size between 20px and 60px
      bubble.style.width = size + 'px';
      bubble.style.height = size + 'px';
      
      // Add click event listener to pop the bubble
      bubble.addEventListener('click', function() {
          popBubble(bubble);
      });

      bubble.addEventListener('touchstart', function() {
        popBubble(bubble);
       });
      
      document.querySelector('.bubble-section').appendChild(bubble);
  }

  // Function to pop bubble
  function popBubble(bubble) {
      bubble.remove(); // Removes the bubble from the DOM
  }

  // Example of generating bubbles
  setInterval(createBubble, 300); // Adjust as necessary
});
