
//=================THE BEGGINING OF THE GAME=========================

function theGame() {


// =====Introducing and rules=====
let name = prompt("Hello... hmm... what is your name?",  "Sam") || "Brave Hobbit";

let tutorialConfirmation = confirm(`Hello, ${name}!  This is a Battleship. Objective of the game is to destroy the enemy ship.\r\n\r\nDo you want to read tutorial?\r\n\r\nPress OK to read\r\nPress CANCEL to skip tutorial`);

if (tutorialConfirmation == true) {
alert(`Tutorial (1/3)\r\nThere is the simple ten-squares line instead of an original Battleship grid. Imagine a river instead of a sea ;)`);
alert(`Tutorial (2/3)\r\nEnemy ship has three blocks, so make three accurate shots.`);
alert(`Tutorial (3/3)\r\nRemember that every input means a guess(shot). Good luck!`);
}
// ===============================




//===Creating of fields and the ship===
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.ceil(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


let position = getRandomIntInclusive(1, 8);
if (position <= 0 || position >= 9){
	console.error(`Warning! Position is ${position}`);
}


let field = ["Oh, hi Mark! ;) ", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]; //This is what the field actually is 

	let fieldPlayer = field.slice();	// this field is what player sees in alerts
	fieldPlayer[0] = "Field:";			// this field is what player sees in alerts



let partOfShip1 = position;
let partOfShip2 = position+1;  
let partOfShip3 = position+2;


field[partOfShip1] = "0";
field[partOfShip2] = "0";
field[partOfShip3] = "0";

console.log(`Position is ${position}, the ship is in ${partOfShip1}, ${partOfShip2} and ${partOfShip3} blocks`);
console.log(`Field is (${field})`);
console.log(`Player's field is (${fieldPlayer})`);

// =====================================




// ====================The Game============================
let guesses = 0;

let hits = 0;


//the first version of this function
/*function firstShot () {

	alert(`So, to the game! You need to enter an integer from 1 to 10 to make a shot!\r\nIf you dare and brave enough to enter a floating point - you need to know that it will floor to integer (9.7 will 9)`);

	alert(`There is your field:\r\n\r\n=${fieldPlayer}=\r\n\r\nLegend:\r\n"-" is for unknown block\r\n"x" is for the block that has fired upon\r\n"S" is for the block with the part of the ship that has fired upon\r\nBlocks are numbered from 1 to 10 from left to right`);

	let shot = +prompt(`Come on, make your first shot and good luck!`, 1); 

	let shotFloor = Math.floor(shot);

	let shotCheck = Number(shotFloor);

	guesses += 1;

	return shotCheck;
}*/



//new version of this function
function firstShot () {

	alert(`So, to the game! You need to enter an integer from 1 to 10 to make a shot!\r\nIf you dare and brave enough to enter a floating point - you need to know that it will floor to integer (9.7 will 9)`);

	alert(`There is your field:\r\n\r\n=${fieldPlayer}=\r\n\r\nLegend:\r\n"-" is for unknown block\r\n"x" is for the block that has fired upon\r\n"S" is for the block with the part of the ship that has fired upon\r\nBlocks are numbered from 1 to 10 from left to right`);


	let preshot = prompt(`Come on, make your first shot and good luck!`, 1)
  
	//alert("Preshot is " + preshot);
  
	if (preshot == null) {

	return preshot;

	} else {

	let shot = +preshot; 

	let shotFloor = Math.floor(shot);

	let shotCheck = Number(shotFloor);

	guesses += 1;

	return shotCheck;
  }
}





//the first version of this function
/*function anotherShot () {

	let shot = +prompt(`Try once more, you know the rules ;)`, 1);

	let shotFloor = Math.floor(shot);

	let shotCheck = Number(shotFloor);

	guesses += 1;

	return shotCheck;
}*/


//new version of this function
function anotherShot () {

	let preshot = prompt(`Try once more, you know the rules ;)`, 1);

	if (preshot == null) {

	return preshot;

	}else{

	let shot = +preshot; 

	let shotFloor = Math.floor(shot);

	let shotCheck = Number(shotFloor);

	guesses += 1;

	return shotCheck;
	}
}









let shotCheck = firstShot();

for (; hits < 3; ) {

if(shotCheck == null){
	break;
	}

if(isNaN(shotCheck) == true){
	alert(`You chose the wrong path, ${name}! Try to use numbers instead`);
	//alert(`number of guesses is ${guesses}`);

} else if (shotCheck < 1 || shotCheck > 10) {
	alert(`You know nothing, ${name}! Try to use numbers in a given range instead`);
	//alert(`number of guesses is ${guesses}`);

}else{

		if(field[shotCheck] == "x" || field[shotCheck] == "S"){ //!!!!!!!!!!
			alert(`Whoops! Already been, so there is your field below:\r\n\r\n=${fieldPlayer}=`);
			// alert(field);
			//alert(fieldPlayer);
			//alert(`number of guesses is ${guesses}`);
			shotCheck = anotherShot();
			continue;

		} else {

		// 	alert("Nice shot!");
		// }



		if (shotCheck == partOfShip1){
			//alert("Hit!");
			field[partOfShip1] = "S"; 
			fieldPlayer[shotCheck] = "S";
			// alert(field);
			//alert(fieldPlayer);
			++hits;
			//alert(`number of hits is ${hits}`);
			alert(`=======\r\n==Hit!==\r\n=======\r\n\r\nTotal number of hits is ${hits} and there is your field below:\r\n=${fieldPlayer}=`);



		} else if (shotCheck == partOfShip2){
			//alert("Hit!");						
			field[partOfShip2] = "S"; //!!!!!!!!!!!
			fieldPlayer[shotCheck] = "S"; //!!!!!!!!!!!
			// alert(field);
			//alert(fieldPlayer);
			++hits;  
			// alert(`number of hits is ${hits}`);
			alert(`=======\r\n==Hit!==\r\n=======\r\n\r\nTotal number of hits is ${hits} and there is your field below:\r\n=${fieldPlayer}=`);


		} else if (shotCheck == partOfShip3){
			//alert("Hit!");	
			field[partOfShip3] = "S"; //!!!!!!!!!!!
			fieldPlayer[shotCheck] = "S"; //!!!!!!!!!!!
			// alert(field);
			//alert(fieldPlayer);
			++hits; 
			// alert(`number of hits is ${hits}`); 		
			alert(`=======\r\n==Hit!==\r\n=======\r\n\r\nTotal number of hits is ${hits} and there is your field below:\r\n=${fieldPlayer}=`);


		} else {
				field[shotCheck] = "x";
				fieldPlayer[shotCheck] = "x";
				// alert(field);
				//alert(fieldPlayer);

				alert(`Nice shot! By the way, there is your field below:\r\n\r\n=${fieldPlayer}=`);
				}
			}


	//alert(`number of guesses is ${guesses}`);

		}

if (hits == 3) {
	break; 
	}

shotCheck = anotherShot();
}
//===================================================





//=====================Statistics====================
let accuracy = (hits/guesses*100).toFixed(2);

if (hits == 0){
	alert(`You have clicked 'Cancel'... After all this time?... \r\n\r\nTotals shots:  ${guesses}\r\nAccuracy: 0%`);
}else if (hits < 3) {
	alert(`It's a thousand pities! Enemy ship is still floating, and you are leaving...\r\n\r\nTotals shots:  ${guesses}\r\nAccuracy: ${accuracy}%\r\n\r\nI don't know why you say "Goodbye", \r\nI say "Hello, hello, hello"...`);
}else if (hits == 3){
alert(`Congratulations, ${name}! \r\nEnemy ship is fish food now!\r\n\r\nTotals shots:  ${guesses}\r\nAccuracy: ${accuracy}%\r\n\r\nSo have a good day, and in case I don't see ya:\r\n good afternoon, good evening, and good night!`);
} else {
	alert("GAME OVER");
}
// alert(`total guesses ${guesses}`);
// alert(`total hits ${hits}`);
// alert(`there is the player's field (${fieldPlayer})`);
// alert(`there is the field (${field})`);  

//===================================================




//====================="Play again" section====================

let playAgain = confirm("Do you want to play again, sweetheart?");
return playAgain;
}

//=================THE END OF THE GAME=========================

//the game wouldn't work if line below is commented!

// for(; theGame() != false;){}


//=============================================================




//------------USER INTERACTION---------------------------------

let tutbut = document.getElementById("readTutorialButton");
let tut = document.getElementById("tutorial");


// x.onclick = function(){
// 	if ((tut.style.visibility != 'hidden') == true) {
// 		tut.style.visibility = 'hidden'
// 	} else {
// 	// alert(tut.style.visibility);
// 	// alert(tut.visibility);
// 	tut.style.visibility = 'visible'; 
// 	}
// };

tutbut.onclick = function(){
	if (tut.className == "hide"){
		// alert(tut.className);
	tut.style.visibility = "visible";
	tut.removeAttribute("class");
	tut.setAttribute("class", "show");
	} else {
				// alert(tut.className);
		tut.removeAttribute("class");
		tut.setAttribute("class", "hide");
		setTimeout(() => tut.style.visibility = "hidden", 1000);
	}
};


let startbut = document.getElementById("startButton");
let field = document.getElementById("field");

startbut.onclick = function(){
	if (field.className == "hide"){
		field.style.visibility = "visible";
		field.removeAttribute("class");
		field.setAttribute("class", "show");
	} else {
		field.removeAttribute("class");
		field.setAttribute("class", "hide");
		setTimeout(() => field.style.visibility = "hidden", 1000);
	}
}



	// if ((tut.style.visibility != 'hidden') == true) {
	// 	tut.style.visibility = 'hidden'
	// } else {
	// // alert(tut.style.visibility);
	// // alert(tut.visibility);
	// tut.style.visibility = 'visible'; 
	// }
