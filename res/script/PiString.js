var i = 0;
var txt = "3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535...";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById(pi).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();