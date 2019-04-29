// Your Javascript goes here
var button = document.getElementById("ourbutton");

button.onclick = ourButtonClick;

function ourButtonClick() {
  alert("You Are Awesome!");
  document.getElementById("ourbutton").innerHTML = "Hell, yeah lets do it again!";
}