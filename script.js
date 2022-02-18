/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  /* Link to variants*/
  function exploreBudget() {
    window.location.href="budgetBuild.html";
  }
  function exploreLudicrous() {
    window.location.href="ludicrousBuild.html";
  }
  
  function checkOut() {
    window.open("checkOutPageMain.html", '_blank').focus();
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
  return "CODE10:"+ Math.floor(Math.random() * 1000)+Math.floor(Math.random() * 1000)+Math.floor(Math.random() * 1000)
}

function Prize2() {
  return "CODE20:"+ Math.floor(Math.random() * 1000)+Math.floor(Math.random() * 1000)+Math.floor(Math.random() * 1000)
}

function Prize3() {
  return "CODE30:"+ Math.floor(Math.random() * 1000)+Math.floor(Math.random() * 1000)+Math.floor(Math.random() * 1000)
}

function hidediv(){
  document.getElementById('h1').style.visibility = "hidden";
}
setTimeout(hidediv(), 5000)

function luckyDraw() {
  randNum = Math.floor(Math.random() * 1000)
  if (randNum >=0 && randNum <= 500) {
    document.querySelector('h1').innerHTML =  Prize1() /*10% voucher*/
  } 
  else if (randNum >500 && randNum <= 800) {
    document.querySelector('h1').innerHTML = Prize2() /*20% voucher*/
  }
  else if (randNum >800 && randNum <= 1000) {
    document.querySelector('h1').innerHTML = Prize3() /*30% voucher*/
  }
}

var animation = bodymovin.loadanimatiion({
  container: document.getElementById('anim'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets2.lottiefiles.com/packages/lf20_reqivhma.json'
})