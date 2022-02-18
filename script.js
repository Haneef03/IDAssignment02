/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function checkOut() {
    window.open("checkOutPageMain.html", '_blank').focus();
  }
  
  /* Link to variants*/
  function exploreBudget() {
    window.location.href="budgetBuild.html";
  }
  function exploreLudicrous() {
    window.location.href="ludicrousBuild.html";
  }
  
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-170px";
  }
}

function Prize1() {
  return "You won a 10% off coupon! CODE10:"+ Math.floor(Math.random() * 1000)+Math.floor(Math.random() * 1000)+Math.floor(Math.random() * 1000)
}

function Prize2() {
  return "You won a 20% off coupon! CODE20:"+ Math.floor(Math.random() * 1000)+Math.floor(Math.random() * 1000)+Math.floor(Math.random() * 1000)
}

function Prize3() {
  return "You won a 30% off coupon! CODE30:"+ Math.floor(Math.random() * 1000)+Math.floor(Math.random() * 1000)+Math.floor(Math.random() * 1000)
}

function hidediv(){
  document.getElementById('h1').style.visibility = "hidden";
}
setTimeout(hidediv(), 5000)

function luckyDraw() {
  
  randNum = Math.floor(Math.random() * 1000)
  if (randNum >=0 && randNum <= 500) {
    document.querySelector('h1').innerHTML =  Prize1() /*10% voucher*/
    setTimeout(function() {
      document.querySelector('h1').innerHTML = ""}, 10000);
  } 
  else if (randNum >500 && randNum <= 800) {
    document.querySelector('h1').innerHTML = Prize2() /*20% voucher*/
    setTimeout(function() {
      document.querySelector('h1').innerHTML = ""}, 10000);
  }
  else if (randNum >800 && randNum <= 1000) {
    document.querySelector('h1').innerHTML = Prize3() /*30% voucher*/
    setTimeout(function() {
      document.querySelector('h1').innerHTML = ""}, 10000);
  }
}



