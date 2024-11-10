const sendButton = document.querySelector('.send-button');
const emailInput = document.getElementById('email');
const codeInput = document.getElementById('emailadd');
const verifyButton = document.querySelector('.button');

let generatedOTP = null;

function sendOTP() {
  if (emailInput.value.trim() === "") {
    alert("Please enter your email.");
    return;
  }

  generatedOTP = Math.floor(100000 + Math.random() * 900000);
  // console.log("Generated OTP:", generatedOTP);
  // alert("An OTP has been sent to your email.");
  alert(generatedOTP);
}

function verifyOTP(event) {
    event.preventDefault();
  
    if (codeInput.value.trim() === generatedOTP.toString()) {
      alert("OTP verified successfully!");
      window.location.href = "changepass.html";
    } else {
      alert("Invalid OTP. Please try again.");
    }
  }
  

sendButton.addEventListener('click', sendOTP);
verifyButton.addEventListener('click', verifyOTP);
