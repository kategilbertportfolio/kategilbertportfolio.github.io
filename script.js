/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function burger() {
  var x = document.getElementById("links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}