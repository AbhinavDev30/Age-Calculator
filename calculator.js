function ageCalculator() {
  var userinput = document.getElementById("dob").value;
  var username = document.getElementById("name").value;

  if (!userinput) {
    alert("**Choose a date please!");
    return false;
  }
  //alert(userinput); //2002-12-10
  var dob = new Date(userinput);
  // alert(dob);
  var now = new Date();

  // Calculate the difference in milliseconds
  var diffInMilliseconds = now - dob.getTime();
  // alert(diffInMilliseconds);
  //682437183291;

  // Calculate the age in years
  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // Average year length including leap years

  //alert(millisecondsPerYear);
  //31557600000

  // alert(millisecondsPerYear); //Tue Dec 10 2002 05:30:00 GMT+0530 (India Standard Time)
  const age = Math.floor(diffInMilliseconds / millisecondsPerYear);

  // alert(age);

  // Display the calculated age
  document.getElementById(
    "msg"
  ).innerHTML = `${username}, your age is: ${age} years.`;
}

// Ensure that the DOM is fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
  const reset = document.getElementById("reset");

  reset.addEventListener("click", () => {
    var msg = document.getElementById("msg");
    msg.innerHTML = " ";
  });
});
