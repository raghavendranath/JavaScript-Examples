$(function() {
//alert('hi');
//$('#first').addClass('highlight');
//By element/ tag
//$('p').addClass('highlight');
//by class.
//$('.chosen').addClass('highlight');

//Combination.
//$('#first, .chosen').addClass('highlight');

//Contains
//$('li:contains("Three")').addClass('highlight');

//even and odd

$('li:even').addClass('highlight');
//next,previous.

//$('li:contains("Three")').next().addClass('highlight');

//$('li:contains("Three")').prev().addClass('highlight');
//siblings,parent

//$('li:contains("Three")').parent().addClass('highlight');

//individual children

// $('li:nth-child(1)').addClass('highlight');

//attribute.

//$('p[name="mySecondPara"]').addClass('highlight');

//$('p[name!="mySecondPara"]').addClass('highlight');

//$('p').not('[name]').addClass('highlight'); //it gives all paragraph items without a name  attribute.

//$(':header').addClass('highlight'); //for all headers like h1,h2...h6.

//$('p:empty').text('You seemed lonely so I gave you some text');



});