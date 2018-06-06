/* Lecture: variables
var name = 'Katy';
console.log(name);
var lastName = 'McHugh';
console.log(lastName);
var age = 26;
console.log(age);
var fullAge = true
console.log(fullAge);*/

// Lecture: variables 2
/*var name = 'Katy';
var age = 26;
console.log(name+age);

var job, isMarried;

console.log(job);

job = 'developer';
isMarried = false;
console.log(name+ ' is a ' +age+ 'year old ' +job+'. Is she married? '+isMarried+'.');
age = 'twenty-six';
job = 'astronaut';
console.log(name+ ' is a ' +age+ 'year old ' +job+'. Is she married? '+isMarried+'.');
var lastName =prompt('What is the last name?');
console.log(lastName);

alert(name+ ' is a ' +age+ 'year old ' +job+'. Is she married? '+isMarried+'.');*/

//Lecture:operators
/*
var now = 2018;
var birthYear = now - 26;

birthYear = now - 26 * 2
//2018-52
//1966

console.log(birthYear);

var ageJohn = 26;
var ageMark = 30;




ageJohn = ageMark = (2 + 5) * 4 - 6; 

ageJohn++;
ageMark*=2;
console.log (ageMark);
console.log(ageJohn);
*/

//Lecture:if/else statements

/*var name = 'Katy';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes'){
    console.log(name + ' is married');
}else {
    console.log(name + ' will hopefully marry soon');
}

isMarried = false;
if (isMarried){
    console.log('YES!');
}else{
    console.log('NO');
}
if (23=='23'){
    console.log('Something to print...')
}*/
/*
var age = 20;
if (age <20) {
    console.log('John is a teenager');
}else if (age >= 20 && age < 30){
    console.log('John is a young man');
}else {
    console.log('John is a man');

}  var job='teacher';

job = prompt('What does John do?');
switch (job) {
    case 'teacher':
    console.log('John teaches kids.');
    break;
    case 'driver':
    console.log('John drives a cab in Lisbon.');
    break;
    case 'cop':
    console.log('John fights crime');
    break;
    default:
    console.log('John does something else');

}*/
/*
var ageJohn = 26;
var heightJohn = 163;
var ageSteve = 22;
var heightSteve = 163;

var scoreJohn = ageJohn + (heightJohn*5);

var scoreSteve = ageSteve + (heightSteve*5);

if (scoreJohn > scoreSteve) {
    console.log('John is the winner!') + (scoreJohn);
}else if (scoreSteve > scoreJohn)
    console.log('Steve is the winner! He scored:')
    console.log(scoreSteve)
*/
/*
var ageJohn = 28;
var heightJohn = 163;
var ageSteve = 26;
var heightSteve = 163;
//var ageTom = 28;
//var heightTom = 201

var scoreJohn = heightJohn + (ageJohn*5);
var scoreSteve = heightSteve + (ageSteve*5);
//var scoreTom = ageTom + (heightTom*5);

//console.log(scoreJohn, scoreSteve, scoreTom);

if (scoreJohn > scoreSteve) {
    console.log('John is the winner! with ' + scoreJohn + ' points!');
}else if (scoreSteve > scoreJohn){
console.log('Steve is the winner! with ' + scoreSteve + ' points!');
}else if (scoreJohn === scoreSteve){
    console.log('There is a draw!');
}
*/

//Lecture: Functions
function calculateAge(yearOfBirth){
    var age = 2018 - yearOfBirth;
    return age;
}
var ageJohn = calculateAge(1991);
var ageMike = calculateAge(1980);
var ageMary = calculateAge(1940);
 
function yearsUntilRetirement(name, year) {
var age= calculateAge(year)
var retirement = 65 - age;

if(retirement >= 0){
    console.log(name + ' retires in ' + retirement + ' years.');
}else{
    console.log(name + ' is already retired');
}
}

yearsUntilRetirement('John',1991);
yearsUntilRetirement('Mike',1980);
yearsUntilRetirement('Mary',1940);
