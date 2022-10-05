var i = 0;
var txt = "3.1415926535897932384626433832795028841971693993751058209749445923078...";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("pi").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();




function formChanged() {
  var USname = document.getElementsByName("username")[0].value;
  localStorage.setItem("Username1", USname);
}

if (localStorage.getItem("Username1") != "") {
  localStorage.setItem("Username1", "pi-this user")
}


document.getElementById("demo").innerHTML = localStorage.getItem("Username1");

