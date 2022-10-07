function addcoins() {
  var coins = localStorage.getItem("pi-coins");

  number++;
  coins.textContent = number.toString();
  localStorage.setItem("pi-coins", coins.textContent);
}
