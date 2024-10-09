const text = "Flutter Developer"; // The text to type out
let index = 0; // To track the current character
let isDeleting = false; // To toggle between typing and deleting
const typingText = document.getElementById("typing-text");

function typeWriter() {
  // If not deleting, type the text
  if (!isDeleting && index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 150); // Speed for typing

    // If deleting, remove characters one by one
  } else if (isDeleting && index > 0) {
    typingText.innerHTML = text.substring(0, index - 1);
    index--;
    setTimeout(typeWriter, 100); // Speed for deleting

    // If text is fully typed and then deleted, toggle phases
  } else {
    isDeleting = !isDeleting; // Switch between typing and deleting
    setTimeout(typeWriter, 1000); // Delay before starting typing again
  }
}

// Start the typing effect on page load
window.onload = function () {
  typeWriter();
};
