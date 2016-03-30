console.log("Bing Bong");

var i = 0;


window.addEventListener('hashchange', navigated, false);

function navigated(){
  console.log(window.location);
  i++;
  document.querySelector('#main').innerHTML = window.location.hash.split("#")[1];
}
