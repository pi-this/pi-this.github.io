function usernameChanged() {
    var Myname = document.getElementsByName("username")[0].value;
    localStorage.setItem("username", Myname);
  }
  
  function subtitleChanged() {
    var Mytitle = document.getElementsByName("subtitle")[0].value;
    localStorage.setItem("subtitle", Mytitle);
  }
  
  function descriptionChanged() {
    var description = document.getElementsByName("description")[0].value;
    localStorage.setItem("description", description);
  }
  
  
  function removeAll(){
      if (localStorage.getItem("username")){
          if (confirm(localStorage.getItem("username")+", are you sure you want to delete all saved data? This action will terminate all data, including pi-coins and other collected items.")) {
            localStorage.removeItem("description"); localStorage.removeItem("coinButton"); localStorage.removeItem("coins"); localStorage.removeItem("username"); localStorage.removeItem("subtitle"); localStorage.removeItem("TimeGO"); localStorage.removeItem("LastTime");
              alert("The data has been completely erased.");
              reload();
          } 
      }
      else {
          if (confirm("Are you sure you want to delete all saved data? This action will terminate all data, including pi-coins and other collected items.")) {
            localStorage.removeItem("description"); localStorage.removeItem("coinButton"); localStorage.removeItem("coins"); localStorage.removeItem("username"); localStorage.removeItem("subtitle"); localStorage.removeItem("TimeGO"); localStorage.removeItem("LastTime");
              alert("The data has been completely erased.");
              reload();
          } 
      }
  
  
      
      
      
  }
  
  
  function reload(){
      window.location.reload();
  }
  
  
  
  
  
  
  
  
  
  var addSecNum = -1;
  
  if (localStorage.getItem("LastTime")){
      document.getElementById('addcoin').disabled = true;
  }
  else{
      var LastTime = new Date().getSeconds()+addSecNum;
      if (LastTime < 0) {
          LastTime = 59;
      }
      localStorage.setItem("LastTime",LastTime);
  }
  
  if (localStorage.getItem("TimeGO")){
      document.getElementById('addcoin').disabled = true;
  }
  else{
      var TimeGO = true;
      localStorage.setItem("TimeGO",TimeGO);
  }
  var enableDisable = function () {
  if ((localStorage.getItem("TimeGO") == true)){
  document.getElementById('addcoin').disabled = true;
  }
  currentHour = new Date().getSeconds();
  console.log(currentHour, localStorage.getItem("LastTime"));
  
  var coinT = localStorage.getItem("LastTime");
  document.getElementById('coinTimeTo').innerText = coinT;
  document.getElementById('coinTimeNow').innerText = currentHour;
  if (currentHour == localStorage.getItem("LastTime")) {
  document.getElementById('addcoin').disabled = false;
  localStorage.setItem("TimeGO",false);
  } else {
  if (localStorage.getItem("TimeGO") == true){
      document.getElementById('addcoin').disabled = true;
  }
  
  }
  
  };
  
  setInterval(enableDisable, 1000); // Run the function every minute
  enableDisable(); // Run the function on page load
  
  
  
  
  
  
  
  
  
  
  
    
  
  
  var variable = 0;
      function incrementVariable() {
        setInterval(function() {
          variable++;
          console.log(variable);
        }, 60000);
      }
  
  incrementVariable();
  
  function addcoin() {
  if (localStorage.getItem('coins')){
  
          document.getElementById('addcoin').disabled = true;
          localStorage.setItem("LastTime",new Date().getSeconds()+addSecNum);
          localStorage.setItem("TimeGO",true);
          localStorage.setItem('coins', parseInt(localStorage.getItem('coins')) + 1);
          document.getElementById("pi-coins").innerHTML = localStorage.getItem("coins");
          localStorage.setItem("coinButton", 'false');
          document.getElementById("addcoin").disabled = true;
      }
  else {
      localStorage.setItem("coinButton", 'false');
      document.getElementById("addcoin").disabled = true;
      localStorage.setItem('coins', 1);
      document.getElementById("pi-coins").innerHTML = localStorage.getItem("coins");
      }
  
  
  }
  
  
  if(localStorage.getItem("username")){
      document.getElementById("name").innerHTML = localStorage.getItem("username");
      document.getElementById("nameOnPage").innerHTML = localStorage.getItem("username");
  }
  if(localStorage.getItem("subtitle")){
      document.getElementById("title").innerHTML = localStorage.getItem("subtitle");
  }

  if(localStorage.getItem("description")){
      document.getElementById("description").innerHTML = localStorage.getItem("description");
  }
  
  if(localStorage.getItem("coins")){
      document.getElementById("pi-coins").innerHTML = localStorage.getItem("coins");
  }
  