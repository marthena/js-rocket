// Explanations

// Variables

var favColor = 'red';
var myFavColors = ['blue','red','green'];
var numOfFavColors = 3;
var hasGotFavColors = true;
var richObject = {
	firstName: 'Marthe',
	lastName: 'Naess',
	favColors: ['blue', 'red', 'green'],
	yearsAlive: 26,
	isFemale: true
};

// Functions

var whatIsMyFavColor = function () {
	return 'blue';
}

var doSomething = function () {
	console.log("Do Something!!");
}

var area = function(width, height) {
	return width*height;
}

var fullname = function(firstName, lastName) {
	return firstName + ' ' + lastName;
}

// If/Else

var num1 = 10;
var num2 = 100;

if (num1 < num2) {
	alert('True!!!')
};

var name1 = 'Marthe';
var name2 = 'Nora';

if (name1 == 'Marthe') {
	alert('True 1!!!')
} else if (name2 == 'Marthe') {
	alert('True 2!!!')
} else {
	alert('False!!!')
	};

