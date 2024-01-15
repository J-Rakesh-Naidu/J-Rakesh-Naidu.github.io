
/*for success message*/
document
  .getElementById("swiftie-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    var successMessage = document.getElementById("success-message");
    successMessage.style.display = "block"; // Display the success message
    setTimeout(function () {
      successMessage.style.display = "none"; // Hide the success message after 3 seconds
      document.getElementById("swiftie-form").reset(); // Reset the form fields
    }, 3000);
    // You can perform additional form submission handling here if needed
  });
