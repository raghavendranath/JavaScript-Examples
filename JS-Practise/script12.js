var batwing = {
status : "Ready", //property and we are intializing it. To separate members we use , operator
rescueBatman: function() {
document.write("Locating his transponser... initiating launch..");
}
}

//to reference a value or method of object. . is the member accessible operator.
/* if(batwing.status === "Ready") {
batwing.rescueBatman();
}*/

var utilities = {

printAllMembers: function(targetObject) {
for ( i  in targetObject) {
 document.write("<br />" + targetObject[i]);
}
}
}

//utilities.printAllMembers(batwing);
/*
var i_am_empty= { }
utilities.printAllMembers(i_am_emtpy);
*/

var planet= {
id: 34,
name: "Imtempesta Nox",
faction: {
 factionId: 2,
 name: "Nex",
notification: function(){
document.write("Nex alliance ... unite!");
}

},
cities: [ 
{ locationId: 15 , name: "Gladius"},
{locationId: 16 , name: "Chalybs"},
{locationId: 17, name: "Ensis "}
]

};
//planet.faction.notification();

//document.write(planet.cities[1].name);
/*
document.write("<br />" + planet.name);
planet.name="Vultus ";
document.write("<br />" + planet.name);



var z = planet;
document.write(z.name);

if (typeof planet.defense === "undefined"){
planet.defense = "Ion Canon";
}

document.write(planet.defense);


for(member in planet)
{
document.write("<br />" + member + "==>" + planet[member]);

}
*/

//new operator. it  creates an instance to find out object type or one of the built-in object has a constructor function

function car(make, model, year) {
this.make = make;
this.model = model;
this.year = year;
}
//its a constructor
var myCar = new car("Eagle" , "Talon TSi", 1993);

var myOtherCar = new car("Dodge" , "Darton", 1979);

alert(myCar.model);
alert(myOtherCar.model);
//We use object literals when we use javascript libraries.  JQuery tools - media player called flowplayer. check this