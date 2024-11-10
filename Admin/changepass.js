document.getElementById('changePasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    let storedUserData = JSON.parse(localStorage.getItem("userData"));
  
    if (newPassword === confirmPassword) {
      storedUserData.password = newPassword;
  
      localStorage.setItem("userData", JSON.stringify(storedUserData));
  
      alert("Password successfully changed!");
  
      window.location.href = "index.html";
    } else {
      alert("Passwords do not match. Please try again.");
    }
  });
  