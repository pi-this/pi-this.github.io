localStorage.setItem("pi-coins", 0);
function addcoins() {
  var coins = localStorage.getItem("pi-coins");
  localStorage.setItem("pi-coins", coins+1);
}
