//object creation
var person = new Object();
person.name = "Suranya";
person.designation = "Student";
person.phno = 9999999999;

//another way of creating an object
var person  = {};
person['name'] = "Suranya";
person['designation'] = "Student";
person['phno'] = 9999999999;

var person = {name: "Suranya", phno : 999999999};



//another way
function person(){
	this.name = "Suranya";
	this.age = 20;
}
var person = new person();

var Animal = {
	type: "Invertibretes";
	displayType: function(){
	}
}
var horse = Object.create(Animal);
// i can change the type 
horse.type = "vertibreatres";



