/*$(document).ready(function() {
//startup code goes here.
alert("This Works!");
});
*/
//JQuery is a function and in bracket is the selectors. jQuery(document) -> This returns a jQuery object. 
//we can use $ instead of jQuery().

/*$(function() {
alert("this works!");
});

$('.importantText') //class
$('#myFirstParagraph')//css selector
$('p').fadeOut();s//para
//these are different CSS selectors we are passing in. Whenever we do it, it returns a object of JQuery.
//dynamically adding new html code on the fly.
jQuery('<div id="badge"><img src="badge.gif" alt="Badge earned for achivement "> </div> ');
$.myCustomMethod=function() {alert('hi');};
$.listBox= { //creating object inside the name space.
show:function(){},
hide:function(){},
position:function() {},
 initiate:fucntion() {}
};
*/
/*
$(function() {
alert("this works!");
});

jQuery('#myFirstParagraph').fadeOut(500).fadeIn(500); //every method returns a jQuery object.

*/

$(function() {

//$("#title").text("Yay, I can now get at the H1 immediately!");
//$("#first").html("<h2> Great quotes </h2>");
//append and prepend work INSIDE the given selection
$("#first").prepend("<h2>Great quotes</h2>");
$("#first").append("<h3>...for you to ponder</h3>");

//before, after, insertBefore, insertAfter work OUTSIDE
//the given selection.

//$("#myAnchor").attr("href","http://channel9.msdn.com");
$("#title").addClass("standout");
});

