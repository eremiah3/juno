document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Send data to Formspree
    fetch("https://formspree.io/f/mayglzpj", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      // Open a new tab with the welcome page
      window.open("welcome.html", "_blank");
    });
  });
  