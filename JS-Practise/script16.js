$(function() {
$('#success').hide();
$('#startover').addClass('hoverOut');
var score =0;
$('#bobhead').click(function(){
//alert("got here");  for checking whether it is wired or not.
 score++;
$('#score').text(score);
//$('#success').show('fast');
$('#success').show('slow').fadeOut(2000);
});

$("#startover").hover(function () {
    score = 0;
    $('#score').text(score);
   $('#startover').addClass('hoverIn').removeClass('hoverOut');
}, function() {
$('#startover').removeClass('hoverIn').addClass('hoverOut');


});

});