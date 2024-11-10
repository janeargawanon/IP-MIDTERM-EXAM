const wrapper = document.querySelector(".wrapper");
const signupHeader = document.querySelector(".form_signup header");
const loginHeader = document.querySelector(".form.login header");
const signupForm = document.getElementById("signupform"); 
const loginForm = document.getElementById("loginForm");

loginHeader.addEventListener("click", () => {
  wrapper.classList.add("active");
});

signupHeader.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("emailadd").value;
  const password = document.getElementById("password").value;
  const verifypassword = document.getElementById("verifypassword").value;

  clearErrors();

  let valid = true;

  if (firstname.trim() === "") {
    showError("First name is required");
    valid = false;
  }
  if (lastname.trim() === "") {
    showError("Last name is required");
    valid = false;
  }
  if (!validateEmail(email)) {
    showError("Please enter a valid email");
    valid = false;
  }
  if (password.length < 8) {
    showError("Password must be at least 8 characters");
    valid = false;
  }
  if (password !== verifypassword) {
    showError("Passwords do not match");
    valid = false;
  }

  if (valid) {
    const userData = { firstname, lastname, email, password };
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Registration successful!");

    signupForm.reset();
  }

//   console.log(signupform);
});


loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("emailaddress").value;
  const password = document.getElementById("pass").value;

  const storedUserData = JSON.parse(localStorage.getItem("userData"));

  if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
    alert("Login successful!");
    console.log("Redirecting to index.html...");
    window.location.href = "homepage.html";  // Ensure the path is correct
  } else {
    alert("Incorrect email or password. Please try again.");
  }
});

function showError(message) {
  const errorDiv = document.createElement("div");
  errorDiv.textContent = message;
  errorDiv.style.color = "red";
  errorDiv.style.marginTop = "10px";
  errorDiv.classList.add("error-message");
  signupForm.appendChild(errorDiv);
}

function clearErrors() {
  const errorDivs = signupForm.querySelectorAll(".error-message");
  errorDivs.forEach((div) => div.remove());
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
