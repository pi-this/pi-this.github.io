localStorage.setItem("pi-coins", 0);
function addcoins() {
  var coins = localStorage.getItem("pi-coins");
  var coins += 5
  localStorage.setItem("pi-coins", coins);
}
