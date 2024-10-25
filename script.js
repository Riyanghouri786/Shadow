const gallery = document.querySelector(".gallery");
const notification = document.getElementById("notification");

// Define 50+ unique and beautiful box-shadow effects
const boxShadows = [
  "2px 2px 5px rgba(0, 0, 0, 0.2), -2px -2px 5px rgba(0, 0, 0, 0.1)",
  "0 1px 5px rgba(0, 0, 0, 0.25), 0 0 10px rgba(0, 0, 0, 0.1)",
  "3px 3px 10px rgba(0, 0, 0, 0.2), -3px -3px 10px rgba(0, 0, 0, 0.15)",
  "0 4px 10px rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.1)",
  "1px 1px 5px rgba(0, 0, 0, 0.4), -1px -1px 5px rgba(0, 0, 0, 0.2)",
  "0 8px 15px rgba(0, 0, 0, 0.25), 0 4px 10px rgba(0, 0, 0, 0.1)",
  "4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(0, 0, 0, 0.1)",
  "0 10px 20px rgba(0, 0, 0, 0.3), 0 5px 10px rgba(0, 0, 0, 0.2)",
  "2px 2px 15px rgba(0, 0, 0, 0.15), -2px -2px 10px rgba(0, 0, 0, 0.2)",
  "5px 5px 20px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(0, 0, 0, 0.1)",
  "3px 3px 12px rgba(0, 0, 0, 0.4), -3px -3px 6px rgba(0, 0, 0, 0.2)",
  "0 6px 12px rgba(0, 0, 0, 0.25), 0 3px 8px rgba(0, 0, 0, 0.1)",
  "1px 1px 10px rgba(0, 0, 0, 0.3), -1px -1px 10px rgba(0, 0, 0, 0.2)",
  "4px 4px 10px rgba(0, 0, 0, 0.2), -4px -4px 15px rgba(0, 0, 0, 0.15)",
  "0 10px 5px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.2)",
  "8px 8px 20px rgba(0, 0, 0, 0.3), -8px -8px 10px rgba(0, 0, 0, 0.1)",
  "0 2px 8px rgba(0, 0, 0, 0.25), 0 0 5px rgba(0, 0, 0, 0.2)",
  "5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 5px rgba(0, 0, 0, 0.15)",
  "0 4px 20px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.15)",
  "2px 2px 5px rgba(0, 0, 0, 0.3), -2px -2px 5px rgba(0, 0, 0, 0.1)",
  "10px 10px 30px rgba(0, 0, 0, 0.25), -10px -10px 15px rgba(0, 0, 0, 0.1)",
  "6px 6px 20px rgba(0, 0, 0, 0.2), -6px -6px 10px rgba(0, 0, 0, 0.1)",
  "12px 12px 25px rgba(0, 0, 0, 0.3), -12px -12px 10px rgba(0, 0, 0, 0.1)",
  "0 0 10px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 0, 0, 0.1)",
  "5px 10px 15px rgba(0, 0, 0, 0.35), -5px -10px 5px rgba(0, 0, 0, 0.2)",
  "0 3px 6px rgba(0, 0, 0, 0.25), 0 1px 4px rgba(0, 0, 0, 0.1)",
  "4px 4px 16px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(0, 0, 0, 0.1)",
  "7px 7px 10px rgba(0, 0, 0, 0.3), -7px -7px 5px rgba(0, 0, 0, 0.15)",
  "0 10px 5px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.1)",
  "5px 5px 25px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(0, 0, 0, 0.2)",
  "8px 8px 12px rgba(34, 193, 195, 0.3), -8px -8px 10px rgba(253, 187, 45, 0.25)",
  "15px 5px 20px rgba(255, 87, 34, 0.4), -5px -5px 10px rgba(255, 255, 255, 0.15)",
  "5px 10px 15px rgba(124, 252, 0, 0.3), -5px -5px 10px rgba(255, 255, 255, 0.1)",
  "10px 10px 25px rgba(70, 130, 180, 0.35), -10px -10px 15px rgba(200, 200, 200, 0.2)",
  "0 5px 20px rgba(255, 99, 71, 0.3), 0 10px 15px rgba(255, 255, 255, 0.2)",
  "12px 8px 30px rgba(138, 43, 226, 0.25), -8px -8px 15px rgba(255, 240, 245, 0.2)",
  "8px 8px 10px rgba(255, 140, 0, 0.4), -8px -8px 8px rgba(250, 235, 215, 0.2)",
  "5px 15px 15px rgba(147, 112, 219, 0.3), -5px -5px 10px rgba(255, 255, 255, 0.1)",
  "10px 15px 25px rgba(50, 205, 50, 0.35), -10px -10px 10px rgba(245, 245, 245, 0.15)",
  "0 8px 30px rgba(255, 20, 147, 0.3), 0 10px 20px rgba(0, 0, 0, 0.2)",
  "8px 10px 20px rgba(255, 99, 71, 0.4), -8px -10px 15px rgba(255, 255, 255, 0.25)",
  "10px 5px 15px rgba(0, 255, 127, 0.25), -10px -5px 15px rgba(255, 228, 181, 0.15)",
  "15px 15px 30px rgba(255, 105, 180, 0.3), -15px -15px 20px rgba(255, 240, 245, 0.2)",
  "3px 10px 15px rgba(255, 218, 185, 0.35), -3px -3px 10px rgba(34, 139, 34, 0.2)",
  "5px 15px 25px rgba(30, 144, 255, 0.25), -5px -5px 15px rgba(255, 255, 255, 0.1)",
  "10px 10px 30px rgba(186, 85, 211, 0.3), -10px -10px 15px rgba(255, 228, 225, 0.2)",
  "12px 5px 20px rgba(255, 160, 122, 0.3), -8px -8px 10px rgba(0, 0, 0, 0.15)",
  "5px 10px 10px rgba(0, 191, 255, 0.4), -5px -5px 8px rgba(245, 245, 245, 0.2)",
  "15px 10px 20px rgba(139, 0, 139, 0.3), -10px -10px 15px rgba(255, 255, 255, 0.1)",
  "8px 12px 18px rgba(255, 69, 0, 0.35), -8px -12px 12px rgba(255, 222, 173, 0.2)",
  "5px 10px 15px rgba(0, 0, 0, 0.3), 5px 5px 20px rgba(0, 0, 0, 0.1)",
  "12px 8px 20px rgba(255, 0, 150, 0.25), -8px -8px 15px rgba(255, 200, 200, 0.3)",
  "8px 10px 30px rgba(0, 150, 255, 0.35), -8px -10px 20px rgba(255, 255, 255, 0.2)",
  "5px 15px 15px rgba(255, 165, 0, 0.4), -5px -15px 10px rgba(255, 215, 100, 0.25)",
  "10px 10px 25px rgba(0, 255, 127, 0.3), 0px 5px 15px rgba(200, 100, 255, 0.15)",
  "15px 15px 35px rgba(0, 0, 255, 0.2), -15px -15px 20px rgba(255, 255, 255, 0.25)",
  "0 8px 15px rgba(128, 0, 128, 0.3), 0 4px 10px rgba(255, 255, 255, 0.2)",
  "5px 5px 30px rgba(255, 69, 0, 0.25), -5px -5px 15px rgba(100, 100, 100, 0.15)",
  "10px 10px 20px rgba(0, 191, 255, 0.3), 0 10px 15px rgba(255, 255, 255, 0.2)",
  "3px 3px 8px rgba(173, 216, 230, 0.4), -3px -3px 8px rgba(0, 0, 0, 0.15)",
  "0px 12px 24px rgba(255, 105, 180, 0.3), 0px 6px 12px rgba(255, 182, 193, 0.2)",
  "2px 2px 8px rgba(0, 0, 0, 0.3), -2px -2px 8px rgba(0, 0, 0, 0.2)",
  "0 10px 20px rgba(50, 50, 50, 0.3), 0 5px 10px rgba(100, 100, 100, 0.1)",
  "3px 3px 10px rgba(255, 0, 100, 0.25), -3px -3px 10px rgba(255, 200, 200, 0.25)",
  "0 8px 15px rgba(34, 193, 195, 0.25), 0 6px 10px rgba(253, 187, 45, 0.3)",
  "10px 10px 20px rgba(0, 0, 255, 0.2), -5px -5px 15px rgba(255, 255, 255, 0.3)",
  "0 5px 20px rgba(150, 50, 50, 0.2), 0 5px 10px rgba(0, 0, 0, 0.2)",
  "3px 3px 15px rgba(200, 50, 100, 0.3), -3px -3px 10px rgba(255, 255, 255, 0.3)",
  "15px 10px 25px rgba(255, 127, 80, 0.2), 0 15px 30px rgba(0, 0, 0, 0.2)",
  "10px 10px 25px rgba(50, 50, 50, 0.3), 0px 15px 30px rgba(200, 200, 255, 0.2)",
  "8px 5px 20px rgba(100, 100, 255, 0.25), -8px -5px 10px rgba(255, 255, 255, 0.15)",
  "5px 5px 15px rgba(0, 255, 127, 0.25), -5px -5px 15px rgba(255, 100, 50, 0.2)",
  "0px 5px 20px rgba(255, 50, 0, 0.3), 0px 10px 15px rgba(0, 0, 255, 0.1)",
  "10px 5px 20px rgba(100, 150, 200, 0.25), -10px -5px 10px rgba(200, 200, 255, 0.2)",
  "5px 10px 20px rgba(0, 0, 0, 0.3), -5px -10px 20px rgba(255, 255, 255, 0.2)",
  "0px 15px 30px rgba(100, 100, 100, 0.25), 0 10px 15px rgba(0, 0, 255, 0.2)",
  "8px 10px 15px rgba(50, 100, 150, 0.25), -8px -10px 10px rgba(200, 200, 200, 0.2)",
  "5px 5px 10px rgba(255, 0, 127, 0.3), -5px -5px 10px rgba(100, 50, 200, 0.2)",
  "8px 5px 10px rgba(255, 100, 50, 0.25), -8px -5px 15px rgba(0, 100, 255, 0.15)",
  "15px 10px 30px rgba(50, 50, 50, 0.25), -15px -10px 10px rgba(100, 100, 100, 0.1)",
  "0 10px 20px rgba(255, 200, 0, 0.3), 0 5px 10px rgba(0, 0, 100, 0.15)",
  "8px 8px 10px rgba(0, 150, 200, 0.25), -8px -8px 10px rgba(0, 200, 255, 0.15)",
  "0 5px 15px rgba(200, 100, 150, 0.3), 0 5px 10px rgba(0, 150, 255, 0.1)",
  "10px 10px 20px rgba(100, 100, 255, 0.3), -10px -10px 10px rgba(255, 100, 100, 0.1)",
  "0 15px 25px rgba(100, 100, 100, 0.2), 0 5px 10px rgba(255, 255, 255, 0.15)",
  "5px 10px 20px rgba(150, 0, 200, 0.2), -5px -10px 10px rgba(255, 200, 100, 0.25)",
  "10px 5px 10px rgba(0, 0, 255, 0.2), -10px -5px 10px rgba(100, 100, 255, 0.15)",
  "5px 15px 25px rgba(255, 150, 150, 0.2), -5px -15px 10px rgba(0, 0, 0, 0.15)",
  "0 5px 15px rgba(255, 45, 85, 0.25), 0 10px 10px rgba(0, 0, 0, 0.1)",
  "0 5px 25px rgba(255, 100, 100, 0.2), 0 5px 10px rgba(50, 50, 50, 0.2)",
  "10px 10px 20px rgba(50, 50, 100, 0.25), -10px -10px 10px rgba(255, 255, 255, 0.15)",
  "0px 5px 20px rgba(200, 100, 100, 0.3), 0px 5px 15px rgba(0, 0, 0, 0.1)",
  "10px 10px 25px rgba(50, 50, 50, 0.3), 0 15px 30px rgba(100, 100, 100, 0.1)",
  "5px 5px 10px rgba(50, 50, 50, 0.3), -5px -5px 10px rgba(255, 255, 255, 0.2)",
  "5px 5px 15px rgba(100, 100, 100, 0.2), -5px -5px 15px rgba(255, 255, 255, 0.1)",
  "10px 10px 30px rgba(50, 50, 50, 0.3), -10px -10px 15px rgba(255, 255, 255, 0.15)",
  "0px 10px 25px rgba(200, 100, 0, 0.3), 0 10px 15px rgba(255, 255, 255, 0.2)",
  "15px 10px 20px rgba(50, 50, 50, 0.2), -15px -10px 15px rgba(100, 100, 100, 0.2)",
  "0 5px 10px rgba(255, 100, 100, 0.25), 0 10px 15px rgba(0, 0, 0, 0.15)",
  "0 5px 15px rgba(0, 100, 100, 0.3), 0 10px 10px rgba(200, 100, 50, 0.2)",
  "5px 5px 10px rgba(255, 255, 0, 0.2), -5px -5px 10px rgba(255, 100, 100, 0.2)",
  "15px 15px 25px rgba(100, 100, 100, 0.25), -15px -15px 15px rgba(200, 200, 200, 0.2)",
  "10px 10px 30px rgba(100, 100, 100, 0.25), -10px -10px 20px rgba(200, 200, 200, 0.2)",
];

// Add more if needed

// Extend with more styles as needed.

// Function to show notification
function showNotification(text) {
  notification.innerText = text;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 2000);
}

// Function to copy box-shadow style to clipboard
function copyToClipboard(shadow) {
  const cssText = `box-shadow: ${shadow};`; // Format the copied text
  navigator.clipboard
    .writeText(cssText)
    .then(() => showNotification("Copied: " + cssText))
    .catch((err) => console.error("Could not copy text: ", err));
}

// Generate a div for each box-shadow style
boxShadows.forEach((shadow, index) => {
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.boxShadow = shadow;
  box.innerHTML = `<p>Shadow ${index + 1}</p>`;
  box.addEventListener("click", () => copyToClipboard(shadow)); // Copy on click
  gallery.appendChild(box);
});
