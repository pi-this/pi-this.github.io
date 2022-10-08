localStorage.setItem("pi-coins", 0);
function addcoins() { 
  var coins = localStorage.getItem("pi-coins");
  coins = coins + 1
  localStorage.setItem("pi-coins", coins);
  alert(coins)
}
