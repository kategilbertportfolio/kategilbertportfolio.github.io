/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function burger() {
  var links = document.getElementById("links");
  var content = document.getElementById("content");
  if (links.style.display === "block") {
    links.style.display = "none";
	content.style.display = "block";
	document.body.style.background = "linear-gradient(0deg, #d5ecee 50%, #d0bcce 50%)";
	document.body.style.backgroundColor = "#d5ecee";
	document.body.style.backgroundRepeat = "no-repeat";
	var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log( page );
	if (page === "contact.html"){
		document.body.style.background = "linear-gradient(0deg, #eeca7c 50%, #d0bcce 50%)";
		document.body.style.backgroundColor = "#eeca7c";
		document.body.style.backgroundRepeat = "no-repeat";
	}
	
  } else {
    links.style.display = "block";
	content.style.display = "none";
	document.body.style.background = "#d0bcce";
  }
}