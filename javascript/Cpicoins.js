function addcoins() { 
  var coins = localStorage.getItem("pi-coins");
  alert(coins)

  coins++;
  coins.textContent = number.toString();
  localStorage.setItem("pi-coins", coins.textContent);
}
