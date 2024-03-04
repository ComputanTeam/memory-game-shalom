var username = prompt("Please enter your username:");



if (username !== null && username !== "") {
  document.getElementById("username").innerHTML = username;
} else {
  alert("You did not enter a username.");
}