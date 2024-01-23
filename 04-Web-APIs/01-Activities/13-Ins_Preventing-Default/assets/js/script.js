var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  event.preventDefault();
  // console.log(event);
  var response =
    "Thank you for your submission " +
    nameInput.value +
    "! We will reach out to you at " +
    emailInput.value +
    ".";
  submissionResponseEl.textContent = response;
}

// Add listener to submit element (intrinsic call)
submitEl.addEventListener("click", showResponse);

// submitEl.addEventListener("click", function (differentParam) {
//   showResponse(differentParam); //extrinsic call
// });

// submitEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   // blah blah blah (whatever else)
// });
