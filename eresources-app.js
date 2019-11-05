window.onload=changeLinks;

var briefcitActions = document.querySelectorAll("div.briefcitActions");

function changeLinks(){
briefcitActions.forEach(m => m.style.display = "none");
$( "a[href^='https://ezproxy.pratt.edu']" ).parent().css( "display", "block" );
$( "a[href^='http://ezproxy.pratt.edu']" ).parent().css( "display", "block" );
$( "a[href^='https://pratt.kanopystreaming.com']" ).parent().css( "display", "block" );
$( "a[href^='http://pratt.kanopystreaming.com']" ).parent().css( "display", "block" );
}
