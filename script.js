
//=================THE BEGGINING OF THE GAME=========================

// function theGame() {


// // =====Introducing and rules=====
// // let name = prompt("Hello... hmm... what is your name?",  "Sam") || "Brave Hobbit";

// // let tutorialConfirmation = confirm(`Hello, ${name}!  This is a Battleship. Objective of the game is to destroy the enemy ship.\r\n\r\nDo you want to read tutorial?\r\n\r\nPress OK to read\r\nPress CANCEL to skip tutorial`);

// // if (tutorialConfirmation == true) {
// // alert(`Tutorial (1/3)\r\nThere is the simple ten-squares line instead of an original Battleship grid. Imagine a river instead of a sea ;)`);
// // alert(`Tutorial (2/3)\r\nEnemy ship has three blocks, so make three accurate shots.`);
// // alert(`Tutorial (3/3)\r\nRemember that every input means a guess(shot). Good luck!`);
// // }
// // ===============================




// //===Creating of fields and the ship===
// function getRandomIntInclusive(min, max) {
// 	min = Math.ceil(min);
// 	max = Math.ceil(max);
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// let position = getRandomIntInclusive(1, 8);
// if (position <= 0 || position >= 9){
// 	console.error(`Warning! Position is ${position}`);
// }


// let field = ["Oh, hi Mark! ;) ", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]; //This is what the field actually is 

// 	let fieldPlayer = field.slice();	// this field is what player sees in alerts
// 	fieldPlayer[0] = "Field:";			// this field is what player sees in alerts

// let partOfShip1 = position;
// let partOfShip2 = position+1;  
// let partOfShip3 = position+2;

// field[partOfShip1] = "0";
// field[partOfShip2] = "0";
// field[partOfShip3] = "0";

// console.log(`Position is ${position}, the ship is in ${partOfShip1}, ${partOfShip2} and ${partOfShip3} blocks`);
// console.log(`Field is (${field})`);
// console.log(`Player's field is (${fieldPlayer})`);






// =====================================




// ====================The Game============================


//-----=======AUTOMATIC VERSION=======-------------
// let guesses = 0;

// let hits = 0;


// //the first version of this function
// /*function firstShot () {

// 	alert(`So, to the game! You need to enter an integer from 1 to 10 to make a shot!\r\nIf you dare and brave enough to enter a floating point - you need to know that it will floor to integer (9.7 will 9)`);

// 	alert(`There is your field:\r\n\r\n=${fieldPlayer}=\r\n\r\nLegend:\r\n"-" is for unknown block\r\n"x" is for the block that has fired upon\r\n"S" is for the block with the part of the ship that has fired upon\r\nBlocks are numbered from 1 to 10 from left to right`);

// 	let shot = +prompt(`Come on, make your first shot and good luck!`, 1); 

// 	let shotFloor = Math.floor(shot);

// 	let shotCheck = Number(shotFloor);

// 	guesses += 1;

// 	return shotCheck;
// }*/



// //new version of this function
// function firstShot () {

// 	alert(`So, to the game! You need to enter an integer from 1 to 10 to make a shot!\r\nIf you dare and brave enough to enter a floating point - you need to know that it will floor to integer (9.7 will 9)`);

// 	alert(`There is your field:\r\n\r\n=${fieldPlayer}=\r\n\r\nLegend:\r\n"-" is for unknown block\r\n"x" is for the block that has fired upon\r\n"S" is for the block with the part of the ship that has fired upon\r\nBlocks are numbered from 1 to 10 from left to right`);


// 	let preshot = prompt(`Come on, make your first shot and good luck!`, 1)
  
// 	//alert("Preshot is " + preshot);
  
// 	if (preshot == null) {

// 	return preshot;

// 	} else {

// 	let shot = +preshot; 

// 	let shotFloor = Math.floor(shot);

// 	let shotCheck = Number(shotFloor);

// 	guesses += 1;

// 	return shotCheck;
//   }
// }






// //the first version of this function
// /*function anotherShot () {

// 	let shot = +prompt(`Try once more, you know the rules ;)`, 1);

// 	let shotFloor = Math.floor(shot);

// 	let shotCheck = Number(shotFloor);

// 	guesses += 1;

// 	return shotCheck;
// }*/


// //new version of this function
// function anotherShot () {

// 	let preshot = prompt(`Try once more, you know the rules ;)`, 1);

// 	if (preshot == null) {

// 	return preshot;

// 	}else{

// 	let shot = +preshot; 

// 	let shotFloor = Math.floor(shot);

// 	let shotCheck = Number(shotFloor);

// 	guesses += 1;

// 	return shotCheck;
// 	}
// }








// //------------------------------------------WITHOUT THIS GUY IT WOULDN'T WORK!-----------------------
// let shotCheck = firstShot();
// //---------------------------------------------------------------------------------------------------
// for (; hits < 3; ) {

// if(shotCheck == null){
// 	break;
// 	}

// if(isNaN(shotCheck) == true){
// 	alert(`You chose the wrong path, ${name}! Try to use numbers instead`);
// 	//alert(`number of guesses is ${guesses}`);

// } else if (shotCheck < 1 || shotCheck > 10) {
// 	alert(`You know nothing, ${name}! Try to use numbers in a given range instead`);
// 	//alert(`number of guesses is ${guesses}`);

// }else{

// 		if(field[shotCheck] == "x" || field[shotCheck] == "S"){ //!!!!!!!!!!
// 			alert(`Whoops! Already been, so there is your field below:\r\n\r\n=${fieldPlayer}=`);
// 			// alert(field);
// 			//alert(fieldPlayer);
// 			//alert(`number of guesses is ${guesses}`);
// 			shotCheck = anotherShot();
// 			continue;

// 		} else {

// 		// 	alert("Nice shot!");
// 		// }



// 		if (shotCheck == partOfShip1){
// 			//alert("Hit!");
// 			field[partOfShip1] = "S"; 
// 			fieldPlayer[shotCheck] = "S";
// 			// alert(field);
// 			//alert(fieldPlayer);
// 			++hits;
// 			//alert(`number of hits is ${hits}`);
// 			alert(`=======\r\n==Hit!==\r\n=======\r\n\r\nTotal number of hits is ${hits} and there is your field below:\r\n=${fieldPlayer}=`);



// 		} else if (shotCheck == partOfShip2){
// 			//alert("Hit!");						
// 			field[partOfShip2] = "S"; //!!!!!!!!!!!
// 			fieldPlayer[shotCheck] = "S"; //!!!!!!!!!!!
// 			// alert(field);
// 			//alert(fieldPlayer);
// 			++hits;  
// 			// alert(`number of hits is ${hits}`);
// 			alert(`=======\r\n==Hit!==\r\n=======\r\n\r\nTotal number of hits is ${hits} and there is your field below:\r\n=${fieldPlayer}=`);


// 		} else if (shotCheck == partOfShip3){
// 			//alert("Hit!");	
// 			field[partOfShip3] = "S"; //!!!!!!!!!!!
// 			fieldPlayer[shotCheck] = "S"; //!!!!!!!!!!!
// 			// alert(field);
// 			//alert(fieldPlayer);
// 			++hits; 
// 			// alert(`number of hits is ${hits}`); 		
// 			alert(`=======\r\n==Hit!==\r\n=======\r\n\r\nTotal number of hits is ${hits} and there is your field below:\r\n=${fieldPlayer}=`);


// 		} else {
// 				field[shotCheck] = "x";
// 				fieldPlayer[shotCheck] = "x";
// 				// alert(field);
// 				//alert(fieldPlayer);

// 				alert(`Nice shot! By the way, there is your field below:\r\n\r\n=${fieldPlayer}=`);
// 				}
// 			}


// 	//alert(`number of guesses is ${guesses}`);

// 		}

// if (hits == 3) {
// 	break; 
// 	}

// shotCheck = anotherShot();
// }
//---------------=======================-------------
//===================================================





//=====================Statistics====================
// let accuracy = (hits/guesses*100).toFixed(2);

// if (hits == 0){
// 	alert(`You have clicked 'Cancel'... After all this time?... \r\n\r\nTotals shots:  ${guesses}\r\nAccuracy: 0%`);
// }else if (hits < 3) {
// 	alert(`It's a thousand pities! Enemy ship is still floating, and you are leaving...\r\n\r\nTotals shots:  ${guesses}\r\nAccuracy: ${accuracy}%\r\n\r\nI don't know why you say "Goodbye", \r\nI say "Hello, hello, hello"...`);
// }else if (hits == 3){
// alert(`Congratulations, ${name}! \r\nEnemy ship is fish food now!\r\n\r\nTotals shots:  ${guesses}\r\nAccuracy: ${accuracy}%\r\n\r\nSo have a good day, and in case I don't see ya:\r\n good afternoon, good evening, and good night!`);
// } else {
// 	alert("GAME OVER");
// }



// alert(`total guesses ${guesses}`);
// alert(`total hits ${hits}`);
// alert(`there is the player's field (${fieldPlayer})`);
// alert(`there is the field (${field})`);  

//===================================================




//====================="Play again" section====================

// let playAgain = confirm("Do you want to play again, sweetheart?");
// return playAgain;
// }

//=================THE END OF THE GAME=========================

//the game wouldn't work if line below is commented!

// for(; theGame() != false;){}


//=============================================================




//------------USER INTERACTION---------------------------------

//---------------------------------------------------------------------PLAYER'S INTERACTION------------------------------------------------------------


// function theGame() {


// =====Introducing and rules=====
// let name = prompt("Hello... hmm... what is your name?",  "Sam") || "Brave Hobbit";

// let tutorialConfirmation = confirm(`Hello, ${name}!  This is a Battleship. Objective of the game is to destroy the enemy ship.\r\n\r\nDo you want to read tutorial?\r\n\r\nPress OK to read\r\nPress CANCEL to skip tutorial`);

// if (tutorialConfirmation == true) {
// alert(`Tutorial (1/3)\r\nThere is the simple ten-squares line instead of an original Battleship grid. Imagine a river instead of a sea ;)`);
// alert(`Tutorial (2/3)\r\nEnemy ship has three blocks, so make three accurate shots.`);
// alert(`Tutorial (3/3)\r\nRemember that every input means a guess(shot). Good luck!`);
// }
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







let newField = field.slice(); // this is the new field for player interaction
newField[0] = "Rohan:";


let fielTarCheck1 = false;
let fielTarCheck2 = false;
let fielTarCheck3 = false;
let fielTarCheck4 = false;
let fielTarCheck5 = false;
let fielTarCheck6 = false;
let fielTarCheck7 = false;
let fielTarCheck8 = false;
let fielTarCheck9 = false;
let fielTarCheck10 = false;

switch (position) {
	case 1:
		fielTarCheck1 = true;
		fielTarCheck2 = true;
		fielTarCheck3 = true;
		break;	
	case 2:
		fielTarCheck2 = true;
		fielTarCheck3 = true;
		fielTarCheck4 = true;
		break;	
	case 3:
		fielTarCheck3 = true;
		fielTarCheck4 = true;
		fielTarCheck5 = true;
		break;	
	case 4:
		fielTarCheck4 = true;
		fielTarCheck5 = true;
		fielTarCheck6 = true;
		break;	
	case 5:
		fielTarCheck5 = true;
		fielTarCheck6 = true;
		fielTarCheck7 = true;
		break;
	case 6:
		fielTarCheck6 = true;
		fielTarCheck7 = true;
		fielTarCheck8 = true;
		break;	
	case 7:
		fielTarCheck7 = true;
		fielTarCheck8 = true;
		fielTarCheck9 = true;
		break;	
	case 8:
		fielTarCheck8 = true;
		fielTarCheck9 = true;
		fielTarCheck10 = true;
		break;	
	default:
		alert("Whoops!");

}

// alert(fielTarCheck1);
// alert(fielTarCheck2);
// alert(fielTarCheck3);
// alert(fielTarCheck4);
// alert(fielTarCheck5);
// alert(fielTarCheck6);
// alert(fielTarCheck7);
// alert(fielTarCheck8);
// alert(fielTarCheck9);
// alert(fielTarCheck10);


let tarWitShip1 = document.getElementById("tar" + partOfShip1);
// tarWitShip1.innerHTML = "hey ho";

let tarWitShip2 = document.getElementById("tar" + partOfShip2);
// tarWitShip2.innerHTML = "hey ho";

let tarWitShip3 = document.getElementById("tar" + partOfShip3);
// tarWitShip3.innerHTML = "hey ho";

newField[partOfShip1] = "0";
newField[partOfShip2] = "0";
newField[partOfShip3] = "0";
console.log(`newField is (${newField})`);
//------------------------------------------------------




//----------PLAYER'S INTERACTION VERSION-----------

let guesses = 0;

let hits = 0;

let totalGuesses = 0;

let totalHits = 0;

let games = 0;

let victories = 0;

// (hits/guesses*100).toFixed(2);

let statGuesses = document.getElementById("statGuesses"); //Guesses:
let statHits = document.getElementById("statHits"); //Hits:
let statAccuracy = document.getElementById("statAccuracy"); //Accuracy:
let statTotalGuesses = document.getElementById("statTotalGuesses");  //Total guesses:
let statTotalHits = document.getElementById("statTotalHits");  //Total hits:
let statTotalAccuracy = document.getElementById("statTotalAccuracy");  //Total accuracy:
let statTotalGames = document.getElementById("statTotalGames");  //Total games:
let statTotalVictories = document.getElementById("statTotalVictories");  //Total victories:
let statWinPercentage = document.getElementById("statWinPercentage");//Win percentage:

//-------1-------
let fiel1 = document.getElementById("fiel1");
// let tar1 = document.getElementById("tar1");
fiel1.onclick = function() {
	if (fielTarCheck1 == true) {
		if (newField[1] == 0) {
			newField[1] = "S";
			// alert("hit");
			fiel1.style.background = "#57d68c"; //green
			// alert("shotTrue");
			guesses += 1;
			
			statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;


			hits += 1;
			statHits.innerHTML = "Hits: " + hits;
			statTotalHits.innerHTML = "Total hits: " + hits;

			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
			statTotalAccuracy.innerHTML = "Total accuracy: " + (hits/guesses*100).toFixed(2); 


			if (hits == 3){
			games += 1;
			victories += 1;	
			statTotalGames.innerHTML = 	"Total games: " + games;			
			statTotalVictories.innerHTML = "Total victories: " + victories;
			statWinPercentage.innerHTML = "Win percentage: " + (victories/games*100).toFixed(2);
				alert("victory");


				// let mainQuest = confirm("Do you want to play again, sweetheart?");
				// if (mainQuest == true){

				// 	guesses = 0;
				// 	hits = 0;

				// 	position = getRandomIntInclusive(1, 8);
				// 	if (position <= 0 || position >= 9){
				// 		console.error(`Warning! Position is ${position}`);
				// 	}

					
				// 	}


				}							
		}else if (newField[1] == "S") {
			guesses += 1;
			statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
			statTotalAccuracy.innerHTML = "Total accuracy: " + (hits/guesses*100).toFixed(2); 

			alert("Already been");

		}

		// tar1.style.background = "#57d68c"; //green
		// fiel1.style.background = "#57d68c"; //green
		// alert("shotTrue");
		// guesses += 1;
		// hits += 1;
		// 	if (hits == 3){
		// 		alert("victory");
		// 	}
	} else if (fielTarCheck1 == false) {
		if (newField[1] == "x"){
		guesses += 1;
		statGuesses.innerHTML = "Guesses: " + guesses;
		statTotalGuesses.innerHTML = "Total guesses: " + guesses;
		statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " + (hits/guesses*100).toFixed(2); 			
			alert("whoops!");
		} else if (newField[1] == "-") {
		newField[1] = "x";	
		

		// tar1.style.background = "#cc6155"; //red
		fiel1.style.background = "#cc6155"; //red
		// alert("shotFalse");
		guesses += 1;
		statGuesses.innerHTML = "Guesses: " + guesses;
		statTotalGuesses.innerHTML = "Total guesses: " + guesses;
		statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " + (hits/guesses*100).toFixed(2); 


		}
	}
}



//-------2-------
let fiel2 = document.getElementById("fiel2");
// let tar2 = document.getElementById("tar2");
fiel2.onclick = function() {
	if (fielTarCheck2 == true) {
		if (newField[2] == 0) {
			newField[2] = "S";
			// alert("hit");
			fiel2.style.background = "#57d68c"; //green
			// alert("shotTrue");
			guesses += 1;
			statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			hits += 1;
			statHits.innerHTML = "Hits: " + hits;
			statTotalHits.innerHTML = "Total hits: " + hits;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " + (hits/guesses*100).toFixed(2); 

			if (hits == 3){
				games += 1;
			victories += 1;	
			statTotalGames.innerHTML = 	"Total games: " + games;			
			statTotalVictories.innerHTML = "Total victories: " + victories;
			statWinPercentage.innerHTML = "Win percentage: " + (victories/games*100).toFixed(2);
				alert("victory");
				}							
		}else if (newField[2] == "S") {
			guesses += 1;
			statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " + (hits/guesses*100).toFixed(2); 

			alert("Already been");

		}		


		// tar2.style.background = "#57d68c";
		// fiel2.style.background = "#57d68c"; //green
		// alert("shotTrue");
		// guesses += 1;
		// hits += 1;
		// 	if (hits == 3){
		// 		alert("victory");
		// 	}
	} else if (fielTarCheck2 == false) {
		if (newField[2] == "x"){
		guesses += 1;
		statGuesses.innerHTML = "Guesses: " + guesses;
		statTotalGuesses.innerHTML = "Total guesses: " + guesses;
		statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " + (hits/guesses*100).toFixed(2); 			
			alert("whoops!");
		} else if (newField[2] == "-") {
		newField[2] = "x";


		// tar2.style.background = "#cc6155";
		fiel2.style.background = "#cc6155"; //red
		// alert("shotFalse");
		guesses += 1;
		statGuesses.innerHTML = "Guesses: " + guesses;
		statTotalGuesses.innerHTML = "Total guesses: " + guesses;
		statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " + (hits/guesses*100).toFixed(2); 
		}
	}
}

//-------3-------
let fiel3 = document.getElementById("fiel3");
// let tar3 = document.getElementById("tar3");
fiel3.onclick = function() {
	if (fielTarCheck3 == true) {
		if (newField[3] == 0) {
			newField[3] = "S";
			// alert("hit");
			fiel3.style.background = "#57d68c"; //green
			// alert("shotTrue");
			guesses += 1;
			statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			hits += 1;
			statHits.innerHTML = "Hits: " + hits;
			statTotalHits.innerHTML = "Total hits: " + hits;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " + (hits/guesses*100).toFixed(2); 

			if (hits == 3){
				games += 1;
			victories += 1;	
			statTotalGames.innerHTML = 	"Total games: " + games;			
			statTotalVictories.innerHTML = "Total victories: " + victories;
			statWinPercentage.innerHTML = "Win percentage: " + (victories/games*100).toFixed(2);
				alert("victory");
				}							
		}else if (newField[3] == "S") {
			guesses += 1;
			statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " + (hits/guesses*100).toFixed(2); 

			alert("Already been");

		}		



		// // tar3.style.background = "#57d68c";
		// fiel3.style.background = "#57d68c"; //green
		// alert("shotTrue");
		// guesses += 1;
		// hits += 1;
		// 	if (hits == 3){
		// 		alert("victory");
		// 	}		
	} else if (fielTarCheck3 == false) {
		if (newField[3] == "x"){
		guesses += 1;
		statGuesses.innerHTML = "Guesses: " + guesses;
		statTotalGuesses.innerHTML = "Total guesses: " + guesses;
		statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " + (hits/guesses*100).toFixed(2); 			
			alert("whoops!");
		} else if (newField[3] == "-") {
		newField[3] = "x";

		// tar3.style.background = "#cc6155";
		fiel3.style.background = "#cc6155"; //red
		// alert("shotFalse");
		guesses += 1;
		statGuesses.innerHTML = "Guesses: " + guesses;
		statTotalGuesses.innerHTML = "Total guesses: " + guesses;
		statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " + (hits/guesses*100).toFixed(2); 
		}
	}
}

//-------4-------
let fiel4 = document.getElementById("fiel4");
// let tar4 = document.getElementById("tar4");
fiel4.onclick = function() {
	if (fielTarCheck4 == true) {
		if (newField[4] == 0) {
			newField[4] = "S";
			// alert("hit");
			fiel4.style.background = "#57d68c"; //green
			// alert("shotTrue");
			guesses += 1;
			statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			hits += 1;
			statHits.innerHTML = "Hits: " + hits;
			statTotalHits.innerHTML = "Total hits: " + hits;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " + (hits/guesses*100).toFixed(2); 

			if (hits == 3){
				games += 1;
			victories += 1;	
			statTotalGames.innerHTML = 	"Total games: " + games;			
			statTotalVictories.innerHTML = "Total victories: " + victories;
			statWinPercentage.innerHTML = "Win percentage: " + (victories/games*100).toFixed(2);
				alert("victory");
				}							
		}else if (newField[4] == "S") {
			guesses += 1;
			statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " + (hits/guesses*100).toFixed(2); 

			alert("Already been");

		}			




		// // tar4.style.background = "#57d68c";
		// fiel4.style.background = "#57d68c"; // green
		// alert("shotTrue");
		// guesses += 1;
		// hits += 1;
		// 	if (hits == 3){
		// 		alert("victory");
		// 	}
	} else if (fielTarCheck4 == false) {
		if (newField[4] == "x"){
		guesses += 1;
		statGuesses.innerHTML = "Guesses: " + guesses;
		statTotalGuesses.innerHTML = "Total guesses: " + guesses;
		statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " + (hits/guesses*100).toFixed(2); 			
			alert("whoops!");
		} else if (newField[4] == "-") {
		newField[4] = "x";

		// tar4.style.background = "#cc6155";
		fiel4.style.background = "#cc6155"; // red
		// alert("shotFalse");
		guesses += 1;
		statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " +(hits/guesses*100).toFixed(2); 
		}
	}
}

//-------5-------
let fiel5 = document.getElementById("fiel5");
// let tar5 = document.getElementById("tar5");
fiel5.onclick = function() {
	if (fielTarCheck5 == true) {
		if (newField[5] == 0) {
			newField[5] = "S";
			// alert("hit");
			fiel5.style.background = "#57d68c"; //green
			// alert("shotTrue");
			guesses += 1;
			statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			hits += 1;
			statHits.innerHTML = "Hits: " + hits;
			statTotalHits.innerHTML = "Total hits: " + hits;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " +(hits/guesses*100).toFixed(2); 

			if (hits == 3){
				games += 1;
			victories += 1;	
			statTotalGames.innerHTML = 	"Total games: " + games;			
			statTotalVictories.innerHTML = "Total victories: " + victories;
			statWinPercentage.innerHTML = "Win percentage: " + (victories/games*100).toFixed(2);
				alert("victory");
				}							
		}else if (newField[5] == "S") {
			guesses += 1;
			statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " +(hits/guesses*100).toFixed(2); 

			alert("Already been");

		}			




		// // tar5.style.background = "#57d68c";
		// fiel5.style.background = "#57d68c"; // green
		// alert("shotTrue");
		// guesses += 1;
		// hits += 1;
		// 	if (hits == 3){
		// 		alert("victory");
		// 	}
	} else if (fielTarCheck5 == false) {

		if (newField[5] == "x"){
		guesses += 1;
		statGuesses.innerHTML = "Guesses: " + guesses;
		statTotalGuesses.innerHTML = "Total guesses: " + guesses;
		statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " + (hits/guesses*100).toFixed(2); 			
			alert("whoops!");
		} else if (newField[5] == "-") {
		newField[5] = "x";


		// tar5.style.background = "#cc6155";
		fiel5.style.background = "#cc6155"; // red
		// alert("shotFalse");
		guesses += 1;
		statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " +(hits/guesses*100).toFixed(2); 
		}
	}
}


//-------6-------
let fiel6 = document.getElementById("fiel6");
// let tar6 = document.getElementById("tar6");
fiel6.onclick = function() {
	if (fielTarCheck6 == true) {
		if (newField[6] == 0) {
			newField[6] = "S";
			// alert("hit");
			fiel6.style.background = "#57d68c"; //green
			// alert("shotTrue");
			guesses += 1;
			statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			hits += 1;
			statHits.innerHTML = "Hits: " + hits;
			statTotalHits.innerHTML = "Total hits: " + hits;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " +(hits/guesses*100).toFixed(2); 

			if (hits == 3){
				games += 1;
			victories += 1;	
			statTotalGames.innerHTML = 	"Total games: " + games;			
			statTotalVictories.innerHTML = "Total victories: " + victories;
			statWinPercentage.innerHTML = "Win percentage: " + (victories/games*100).toFixed(2);
				alert("victory");
				}							
		}else if (newField[6] == "S") {
			guesses += 1;
			statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " +(hits/guesses*100).toFixed(2); 

			alert("Already been");

		}			




		// // tar6.style.background = "#57d68c";
		// fiel6.style.background = "#57d68c"; // green
		// alert("shotTrue");
		// guesses += 1;
		// hits += 1;
		// 	if (hits == 3){
		// 		alert("victory");
		// 	}
	} else if (fielTarCheck6 == false) {
		if (newField[6] == "x"){
		guesses += 1;
		statGuesses.innerHTML = "Guesses: " + guesses;
		statTotalGuesses.innerHTML = "Total guesses: " + guesses;
		statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " + (hits/guesses*100).toFixed(2); 			
			alert("whoops!");
		} else if (newField[6] == "-") {
		newField[6] = "x";


		// tar6.style.background = "#cc6155";
		fiel6.style.background = "#cc6155"; // red
		// alert("shotFalse");
		guesses += 1;
		statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " +(hits/guesses*100).toFixed(2); 
		}
	}
}


//-------7-------
let fiel7 = document.getElementById("fiel7");
// let tar7 = document.getElementById("tar7");
fiel7.onclick = function() {
	if (fielTarCheck7 == true) {
		if (newField[7] == 0) {
			newField[7] = "S";
			// alert("hit");
			fiel7.style.background = "#57d68c"; //green
			// alert("shotTrue");
			guesses += 1;
			statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			hits += 1;
			statHits.innerHTML = "Hits: " + hits;
			statTotalHits.innerHTML = "Total hits: " + hits;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " +(hits/guesses*100).toFixed(2); 

			if (hits == 3){
				games += 1;
			victories += 1;	
			statTotalGames.innerHTML = 	"Total games: " + games;			
			statTotalVictories.innerHTML = "Total victories: " + victories;
			statWinPercentage.innerHTML = "Win percentage: " + (victories/games*100).toFixed(2);
				alert("victory");
				}							
		}else if (newField[7] == "S") {
			guesses += 1;
			statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " +(hits/guesses*100).toFixed(2); 

			alert("Already been");

		}			




		// // tar7.style.background = "#57d68c";
		// fiel7.style.background = "#57d68c"; // green
		// alert("shotTrue");
		// guesses += 1;
		// hits += 1;
		// 	if (hits == 3){
		// 		alert("victory");
		// 	}
	} else if (fielTarCheck7 == false) {
		if (newField[7] == "x"){
		guesses += 1;
		statGuesses.innerHTML = "Guesses: " + guesses;
		statTotalGuesses.innerHTML = "Total guesses: " + guesses;
		statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " + (hits/guesses*100).toFixed(2); 			
			alert("whoops!");
		} else if (newField[7] == "-") {
		newField[7] = "x";


		// tar7.style.background = "#cc6155";
		fiel7.style.background = "#cc6155"; // red
		// alert("shotFalse");
		guesses += 1;
		statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " +(hits/guesses*100).toFixed(2); 
		}
	}
}

//-------8-------
let fiel8 = document.getElementById("fiel8");
// let tar8 = document.getElementById("tar8");
fiel8.onclick = function() {
	if (fielTarCheck8 == true) {
		if (newField[8] == 0) {
			newField[8] = "S";
			// alert("hit");
			fiel8.style.background = "#57d68c"; //green
			// alert("shotTrue");
			guesses += 1;
			statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			hits += 1;
			statHits.innerHTML = "Hits: " + hits;
			statTotalHits.innerHTML = "Total hits: " + hits;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " +(hits/guesses*100).toFixed(2); 

			if (hits == 3){
				games += 1;
			victories += 1;	
			statTotalGames.innerHTML = 	"Total games: " + games;			
			statTotalVictories.innerHTML = "Total victories: " + victories;
			statWinPercentage.innerHTML = "Win percentage: " + (victories/games*100).toFixed(2);
				alert("victory");
				}							
		}else if (newField[8] == "S") {
			guesses += 1;
			statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " +(hits/guesses*100).toFixed(2); 

			alert("Already been");

		}	




		// // tar8.style.background = "#57d68c";
		// fiel8.style.background = "#57d68c"; // green
		// alert("shotTrue");
		// guesses += 1;
		// hits += 1;
		// 	if (hits == 3){
		// 		alert("victory");
		// 	}
	} else if (fielTarCheck8 == false) {
		if (newField[8] == "x"){
		guesses += 1;
		statGuesses.innerHTML = "Guesses: " + guesses;
		statTotalGuesses.innerHTML = "Total guesses: " + guesses;
		statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " + (hits/guesses*100).toFixed(2); 			
			alert("whoops!");
		} else if (newField[8] == "-") {
		newField[8] = "x";


		// tar8.style.background = "#cc6155";
		fiel8.style.background = "#cc6155"; // red
		// alert("shotFalse");
		guesses += 1;
		statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " +(hits/guesses*100).toFixed(2); 
		}
	}
}



//-------9-------
let fiel9 = document.getElementById("fiel9");
// let tar9 = document.getElementById("tar9");
fiel9.onclick = function() {
	if (fielTarCheck9 == true) {
		if (newField[9] == 0) {
			newField[9] = "S";
			// alert("hit");
			fiel9.style.background = "#57d68c"; //green
			// alert("shotTrue");
			guesses += 1;
			statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			hits += 1;
			statHits.innerHTML = "Hits: " + hits;
			statTotalHits.innerHTML = "Total hits: " + hits;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " +(hits/guesses*100).toFixed(2); 

			if (hits == 3){
				games += 1;
			victories += 1;	
			statTotalGames.innerHTML = 	"Total games: " + games;			
			statTotalVictories.innerHTML = "Total victories: " + victories;
				statWinPercentage.innerHTML = "Win percentage: " + (victories/games*100).toFixed(2);
				alert("victory");
				}							
		}else if (newField[9] == "S") {
			guesses += 1;
			statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " +(hits/guesses*100).toFixed(2); 

			alert("Already been");

		}			




		// // tar9.style.background = "#57d68c";
		// fiel9.style.background = "#57d68c"; // green
		// alert("shotTrue");
		// guesses += 1;
		// hits += 1;
		// 	if (hits == 3){
		// 		alert("victory");
		// 	}
	} else if (fielTarCheck9 == false) {
		if (newField[9] == "x"){
		guesses += 1;
		statGuesses.innerHTML = "Guesses: " + guesses;
		statTotalGuesses.innerHTML = "Total guesses: " + guesses;
		statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " + (hits/guesses*100).toFixed(2); 			
			alert("whoops!");
		} else if (newField[9] == "-") {
		newField[9] = "x";


		// tar9.style.background = "#cc6155";
		fiel9.style.background = "#cc6155"; // red
		// alert("shotFalse");
		guesses += 1;
		statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " +(hits/guesses*100).toFixed(2); 
		}
	}
}


//-------10-------
let fiel10 = document.getElementById("fiel10");
// let tar10 = document.getElementById("tar10");
fiel10.onclick = function() {
	if (fielTarCheck10 == true) {
		if (newField[10] == 0) {
			newField[10] = "S";
			// alert("hit");
			fiel10.style.background = "#57d68c"; //green
			// alert("shotTrue");
			guesses += 1;
			statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			hits += 1;
			statHits.innerHTML = "Hits: " + hits;
			statTotalHits.innerHTML = "Total hits: " + hits;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " +(hits/guesses*100).toFixed(2); 

			if (hits == 3){
				games += 1;
			victories += 1;	
			statTotalGames.innerHTML = 	"Total games: " + games;			
			statTotalVictories.innerHTML = "Total victories: " + victories;
			statWinPercentage.innerHTML = "Win percentage: " + (victories/games*100).toFixed(2);
				alert("victory");
				}							
		}else if (newField[10] == "S") {
			guesses += 1;
			statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " +(hits/guesses*100).toFixed(2); 

			alert("Already been");

		}			



		// // tar10.style.background = "#57d68c";
		// fiel10.style.background = "#57d68c"; // green
		// alert("shotTrue");
		// guesses += 1;
		// hits += 1;
		// 	if (hits == 3){
		// 		alert("victory");
		// 	}
	} else if (fielTarCheck10 == false) {
		if (newField[10] == "x"){
		guesses += 1;
		statGuesses.innerHTML = "Guesses: " + guesses;
		statTotalGuesses.innerHTML = "Total guesses: " + guesses;
		statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " + (hits/guesses*100).toFixed(2); 			
			alert("whoops!");
		} else if (newField[10] == "-") {
		newField[10] = "x";


		// tar10.style.background = "#cc6155";
		fiel10.style.background = "#cc6155"; // red
		// alert("shotFalse");
		guesses += 1;
		statGuesses.innerHTML = "Guesses: " + guesses;
			statTotalGuesses.innerHTML = "Total guesses: " + guesses;
			statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
		statTotalAccuracy.innerHTML = "Total accuracy: " +(hits/guesses*100).toFixed(2); 
		}
	}
}
// alert(hits);
// if (hits == 3) {
// 	alert("Victory");
// 	// break; 
// 	}

//-------------------------------------------------




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
	// setTimeout(() => tutbut.innerHTML = "Hide tutorial", 500);
	tutbut.innerHTML = "Hide tutorial";
	} else {
				// alert(tut.className);
		tut.removeAttribute("class");
		tut.setAttribute("class", "hide");
		setTimeout(() => tutbut.innerHTML = "Read tutorial", 800);
		tutbut.innerHTML = "Read tutorial";
		// setTimeout(() => tut.style.visibility = "hidden", 1000);
	}
};


let startbut = document.getElementById("startButton");
let fieldSection = document.getElementById("field");

startbut.onclick = function(){
	if (fieldSection.className == "hide"){
		fieldSection.style.visibility = "visible";
		fieldSection.removeAttribute("class");
		fieldSection.setAttribute("class", "show");
		startbut.innerHTML = "End game";
	} else {
		fieldSection.removeAttribute("class");
		fieldSection.setAttribute("class", "hide");
		startbut.innerHTML = "Start";
		// setTimeout(() => fieldSection.style.visibility = "hidden", 2000);
	}
}



	// if ((tut.style.visibility != 'hidden') == true) {
	// 	tut.style.visibility = 'hidden'
	// } else {
	// // alert(tut.style.visibility);
	// // alert(tut.visibility);
	// tut.style.visibility = 'visible'; 
	// }


//--------------STATISTICS-----------------
let accuracy = (hits/guesses*100).toFixed(2);


//----==---==--
// function firstShot () {

// }

//1. show stats during the game (guesses, hits, games, victories, accuracy  during all the games until cleared)
//2. check doubles on red fields
//3. ask "do you want to play again" when victory
//4. add "lives" (3 attempts of shot)
//5. when 3 attempts is over - ask "do you want to play again"
//6. when press "end game" game is fading out and button of confirmation appears ("i sure want to end this game" / "let's continue"). When press conirm - game is closing to a starting position
//7. add button "clear stats" that summon the confirmation button ("clear and start new game" / "cancel") than clears stats to zero and starts new game
//8. color scheme changing