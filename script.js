
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

function beginningOfGame(){
 // alert("NOfiel1 is" + document.getElementById("NOfiel1"));
 // alert("fiel 1 is" + document.getElementById("fiel1"));
 // alert(document.getElementById("fiel1") == null);
	 // alert(victoryChecker);
	
	if (victoryChecker == false){
		// alert("imhere");
	 games += 1;
	 statTotalGames.innerHTML = "Total games: " + games;
		} else {
			victoryChecker = false;
		}

 if(document.getElementById("NOfiel1") != null){
	document.getElementById("NOfiel1").id = "fiel1";
	}

 // alert("NOfiel1 is" + document.getElementById("NOfiel1"));
 // alert("fiel1 is" + document.getElementById("fiel1"));

 if(document.getElementById("NOfiel2") != null){	
	document.getElementById("NOfiel2").id = "fiel2";
	}

 if(document.getElementById("NOfiel3") != null){	
	document.getElementById("NOfiel3").id = "fiel3";
	}

 if(document.getElementById("NOfiel4") != null){	
	document.getElementById("NOfiel4").id = "fiel4";
	}

 if(document.getElementById("NOfiel5") != null){	
	document.getElementById("NOfiel5").id = "fiel5";
	}

 if(document.getElementById("NOfiel6") != null){	
	document.getElementById("NOfiel6").id = "fiel6";
	}

 if(document.getElementById("NOfiel7") != null){	
	document.getElementById("NOfiel7").id = "fiel7";
	}

 if(document.getElementById("NOfiel8") != null){	
	document.getElementById("NOfiel8").id = "fiel8";
	}

 if(document.getElementById("NOfiel9") != null){	
	document.getElementById("NOfiel9").id = "fiel9";
	}

 if(document.getElementById("NOfiel10") != null){	
	document.getElementById("NOfiel10").id = "fiel10";
	}





	setTimeout(() => fiel1.innerHTML = "1", 500);
	setTimeout(() => fiel2.innerHTML = "2", 550);
	setTimeout(() => fiel3.innerHTML = "3", 600);
	setTimeout(() => fiel4.innerHTML = "4", 650);
	setTimeout(() => fiel5.innerHTML = "5", 700);
	setTimeout(() => fiel6.innerHTML = "6", 750);
	setTimeout(() => fiel7.innerHTML = "7", 800);
	setTimeout(() => fiel8.innerHTML = "8", 850);
	setTimeout(() => fiel9.innerHTML = "9", 900);
	setTimeout(() => fiel10.innerHTML = "10", 950);
	guesses = 0;
	hits = 0;
	statGuesses.innerHTML = "Guesses: " + guesses;
	statHits.innerHTML = "Hits: " + hits;
	statAccuracy.innerHTML = "Accuracy: 0.00 ";	
	setTimeout(() => document.getElementById("fiel1").style.background = "#cc6155", 500);
	setTimeout(() => document.getElementById("fiel2").style.background = "#cc6155", 550);
	setTimeout(() => document.getElementById("fiel3").style.background = "#cc6155", 600);
	setTimeout(() => document.getElementById("fiel4").style.background = "#cc6155", 650);
	setTimeout(() => document.getElementById("fiel5").style.background = "#cc6155", 700);
	setTimeout(() => document.getElementById("fiel6").style.background = "#cc6155", 750);
	setTimeout(() => document.getElementById("fiel7").style.background = "#cc6155", 800);
	setTimeout(() => document.getElementById("fiel8").style.background = "#cc6155", 850);
	setTimeout(() => document.getElementById("fiel9").style.background = "#cc6155", 900);
	setTimeout(() => document.getElementById("fiel10").style.background = "#cc6155", 950);


	setTimeout(() => document.getElementById("fiel1").style.background = "#e9ecee", 1000);
	setTimeout(() => document.getElementById("fiel2").style.background = "#e9ecee", 1050);
	setTimeout(() => document.getElementById("fiel3").style.background = "#e9ecee", 1100);
	setTimeout(() => document.getElementById("fiel4").style.background = "#e9ecee", 1150);
	setTimeout(() => document.getElementById("fiel5").style.background = "#e9ecee", 1200);
	setTimeout(() => document.getElementById("fiel6").style.background = "#e9ecee", 1250);
	setTimeout(() => document.getElementById("fiel7").style.background = "#e9ecee", 1300);
	setTimeout(() => document.getElementById("fiel8").style.background = "#e9ecee", 1350);
	setTimeout(() => document.getElementById("fiel9").style.background = "#e9ecee", 1400);
	setTimeout(() => document.getElementById("fiel10").style.background = "#e9ecee", 1450);


	//=======BELOW IS FIELD CREATING====================

	let position = getRandomIntInclusive(1, 8);
	if (position <= 0 || position >= 9){
		console.error(`Warning! Position is ${position}`);
	}

	field = ["Oh, hi Mark! ;) ", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]; //This is what the field actually is 

	fieldPlayer = field.slice();	// this field is what player sees in alerts
	fieldPlayer[0] = "Field:";			// this field is what player sees in alerts

	partOfShip1 = position;
	partOfShip2 = position+1;  
	partOfShip3 = position+2;

	field[partOfShip1] = "0";
	field[partOfShip2] = "0";
	field[partOfShip3] = "0";

	console.log(`Position is ${position}, the ship is in ${partOfShip1}, ${partOfShip2} and ${partOfShip3} blocks`);
	console.log(`Field is (${field})`);
	console.log(`Player's field is (${fieldPlayer})`);

	newField = field.slice(); // this is the new field for player interaction
	newField[0] = "Rohan:";

	fielTarCheck1 = false;
	fielTarCheck2 = false;
	fielTarCheck3 = false;
	fielTarCheck4 = false;
	fielTarCheck5 = false;
	fielTarCheck6 = false;
	fielTarCheck7 = false;
	fielTarCheck8 = false;
	fielTarCheck9 = false;
	fielTarCheck10 = false;

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

	tarWitShip1 = document.getElementById("tar" + partOfShip1);
	// tarWitShip1.innerHTML = "hey ho";

	tarWitShip2 = document.getElementById("tar" + partOfShip2);
	// tarWitShip2.innerHTML = "hey ho";

	tarWitShip3 = document.getElementById("tar" + partOfShip3);
	// tarWitShip3.innerHTML = "hey ho";

	newField[partOfShip1] = "0";
	newField[partOfShip2] = "0";
	newField[partOfShip3] = "0";
	console.log(`newField is (${newField})`);

	//=======ABOVE IS FIELD CREATING====================
}



//----------PLAYER'S INTERACTION VERSION-----------

let guesses = 0;

let hits = 0;

let totalGuesses = 0;

let totalHits = 0;

let games = 0;

let victories = 0;

let percentage = 0;

let victoryChecker = false;

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

function blockBehaviorOnClick(fiel, fielTarCheck, newF) {
		if (fielTarCheck == true) {
			if (newField[newF] == 0) {
				newField[newF] = "S";
				// alert("hit");
				fiel.style.background = "#57d68c"; //green
				// alert("shotTrue");
				guesses += 1;
				totalGuesses += 1;
				
				statGuesses.innerHTML = "Guesses: " + guesses;
				statTotalGuesses.innerHTML = "Total guesses: " + totalGuesses;


				hits += 1;
				totalHits += 1;
				statHits.innerHTML = "Hits: " + hits;
				statTotalHits.innerHTML = "Total hits: " + totalHits;

				statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
				statTotalAccuracy.innerHTML = "Total accuracy: " + (totalHits/totalGuesses*100).toFixed(2); 


					if (hits == 3){
						victoryChecker = true;
						games += 1;
						victories += 1;	
						statTotalGames.innerHTML = 	"Total games: " + games;			
						statTotalVictories.innerHTML = "Total victories: " + victories;
						statWinPercentage.innerHTML = "Win percentage: " + (victories/games*100).toFixed(2);


						// alert("victory");


					// setTimeout(() => tutbut.innerHTML = "Hide tutorial", 500);
						// setTimeout(() => fiel1.innerHTML = "", 500);
						// setTimeout(() => fiel2.innerHTML = "V", 631);
						// setTimeout(() => fiel3.innerHTML = "I", 762);
						// setTimeout(() => fiel4.innerHTML = "C", 893);
						// setTimeout(() => fiel5.innerHTML = "T", 1024);
						// setTimeout(() => fiel6.innerHTML = "O", 1155);
						// setTimeout(() => fiel7.innerHTML = "R", 1286);
						// setTimeout(() => fiel8.innerHTML = "Y", 1417);
						// setTimeout(() => fiel9.innerHTML = "!", 1548);
						// setTimeout(() => fiel10.innerHTML = "", 1679);

						setTimeout(() => fiel1.innerHTML = "", 500);
						setTimeout(() => fiel2.innerHTML = "V", 600);
						setTimeout(() => fiel3.innerHTML = "I", 700);
						setTimeout(() => fiel4.innerHTML = "C", 800);
						setTimeout(() => fiel5.innerHTML = "T", 900);
						setTimeout(() => fiel6.innerHTML = "O", 1000);
						setTimeout(() => fiel7.innerHTML = "R", 1100);
						setTimeout(() => fiel8.innerHTML = "Y", 1200);
						setTimeout(() => fiel9.innerHTML = "!", 1300);
						setTimeout(() => fiel10.innerHTML = "", 1400);

						setTimeout(() => document.getElementById("fiel1").style.background = "#57d68c", 500);
						setTimeout(() => document.getElementById("fiel2").style.background = "#57d68c", 600);
						setTimeout(() => document.getElementById("fiel3").style.background = "#57d68c", 700);
						setTimeout(() => document.getElementById("fiel4").style.background = "#57d68c", 800);
						setTimeout(() => document.getElementById("fiel5").style.background = "#57d68c", 900);
						setTimeout(() => document.getElementById("fiel6").style.background = "#57d68c", 1000);
						setTimeout(() => document.getElementById("fiel7").style.background = "#57d68c", 1100);
						setTimeout(() => document.getElementById("fiel8").style.background = "#57d68c", 1200);
						setTimeout(() => document.getElementById("fiel9").style.background = "#57d68c", 1300);
						setTimeout(() => document.getElementById("fiel10").style.background = "#57d68c", 1400);

						setTimeout(() => document.getElementById("fiel1").style.background = "#e9ecee", 1500);
						setTimeout(() => document.getElementById("fiel2").style.background = "#e9ecee", 1600);
						setTimeout(() => document.getElementById("fiel3").style.background = "#e9ecee", 1700);
						setTimeout(() => document.getElementById("fiel4").style.background = "#e9ecee", 1800);
						setTimeout(() => document.getElementById("fiel5").style.background = "#e9ecee", 1900);
						setTimeout(() => document.getElementById("fiel6").style.background = "#e9ecee", 2000);
						setTimeout(() => document.getElementById("fiel7").style.background = "#e9ecee", 2100);
						setTimeout(() => document.getElementById("fiel8").style.background = "#e9ecee", 2200);
						setTimeout(() => document.getElementById("fiel9").style.background = "#e9ecee", 2300);
						setTimeout(() => document.getElementById("fiel10").style.background = "#e9ecee", 2400);

						setTimeout(() => document.getElementById("fiel1").id = "NOfiel1", 2500);
						setTimeout(() => document.getElementById("fiel2").id = "NOfiel2", 2500);
						setTimeout(() => document.getElementById("fiel3").id = "NOfiel3", 2500);
						setTimeout(() => document.getElementById("fiel4").id = "NOfiel4", 2500);
						setTimeout(() => document.getElementById("fiel5").id = "NOfiel5", 2500);
						setTimeout(() => document.getElementById("fiel6").id = "NOfiel6", 2500);
						setTimeout(() => document.getElementById("fiel7").id = "NOfiel7", 2500);
						setTimeout(() => document.getElementById("fiel8").id = "NOfiel8", 2500);
						setTimeout(() => document.getElementById("fiel9").id = "NOfiel9", 2500);
						setTimeout(() => document.getElementById("fiel10").id = "NOfiel10", 2500);

						// fiel2.removeAttribute("class");
						// fiel2.setAttribute("class", "aft");	
						// let mainQuest = confirm("Do you want to play again, sweetheart?");
						// 	if (mainQuest == true){
						// 		beginningOfGame();
						// 				}
								}		

			} else if (newField[newF] == "S") {
				guesses += 1;
				totalGuesses += 1;
				statGuesses.innerHTML = "Guesses: " + guesses;
				statTotalGuesses.innerHTML = "Total guesses: " + totalGuesses;
				statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
				statTotalAccuracy.innerHTML = "Total accuracy: " + (totalHits/totalGuesses*100).toFixed(2); 
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
		} else if (fielTarCheck == false) {
			if (newField[newF] == "x"){
				guesses += 1;
				totalGuesses += 1;
				statGuesses.innerHTML = "Guesses: " + guesses;
				statTotalGuesses.innerHTML = "Total guesses: " + totalGuesses;
				statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
				statTotalAccuracy.innerHTML = "Total accuracy: " + (totalHits/totalGuesses*100).toFixed(2); 			
				alert("whoops!");
			} else if (newField[newF] == "-") {
				newField[newF] = "x";	
				// tar1.style.background = "#cc6155"; //red
				fiel.style.background = "#cc6155"; //red
				// alert("shotFalse");
				guesses += 1;
				totalGuesses += 1;		
				statGuesses.innerHTML = "Guesses: " + guesses;
				statTotalGuesses.innerHTML = "Total guesses: " + totalGuesses;
				statAccuracy.innerHTML = "Accuracy: " + (hits/guesses*100).toFixed(2);
				statTotalAccuracy.innerHTML = "Total accuracy: " + (totalHits/totalGuesses*100).toFixed(2);  
			}
		}
}

//==testing==
fiel1.addEventListener('click', function(){
	blockBehaviorOnClick(fiel1, fielTarCheck1, 1)
});

fiel2.addEventListener('click', function(){
	blockBehaviorOnClick(fiel2, fielTarCheck2, 2)
});

fiel3.addEventListener('click', function(){
	blockBehaviorOnClick(fiel3, fielTarCheck3, 3)
});

fiel4.addEventListener('click', function(){
	blockBehaviorOnClick(fiel4, fielTarCheck4, 4)
});

fiel5.addEventListener('click', function(){
	blockBehaviorOnClick(fiel5, fielTarCheck5, 5)
});

fiel6.addEventListener('click', function(){
	blockBehaviorOnClick(fiel6, fielTarCheck6, 6)
});

fiel7.addEventListener('click', function(){
	blockBehaviorOnClick(fiel7, fielTarCheck7, 7)
});

fiel8.addEventListener('click', function(){
	blockBehaviorOnClick(fiel8, fielTarCheck8, 8)
});

fiel9.addEventListener('click', function(){
	blockBehaviorOnClick(fiel9, fielTarCheck9, 9)
});

fiel10.addEventListener('click', function(){
	blockBehaviorOnClick(fiel10, fielTarCheck10, 10)
});
//===========






let tutbut = document.getElementById("readTutorialButton");
let tut = document.getElementById("tutorial");



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

let statsSection = document.getElementById("stats");

let startNewGame = document.getElementById("startNewGame");

startbut.onclick = function(){
	if (fieldSection.className == "hide"){
		fieldSection.style.visibility = "visible";
		fieldSection.removeAttribute("class");
		fieldSection.setAttribute("class", "show");
		startbut.innerHTML = "End game";
		
		statsSection.style.visibility = "visible";
		statsSection.removeAttribute("class");
		statsSection.setAttribute("class", "show");

		// startNewGame.style.display = "block";
		startNewGame.style.width = "3rem";
		startNewGame.style.height = "1rem";
		startNewGame.style.borderRadius = "0.1rem";
		startNewGame.style.margin = "0.1rem";
		startNewGame.style.fontSize = "0.5rem";
		startNewGame.removeAttribute("class");
		startNewGame.setAttribute("class", "show");

	} else {
		fieldSection.removeAttribute("class");
		fieldSection.setAttribute("class", "hide");
		startbut.innerHTML = "Start";

		statsSection.removeAttribute("class");
		statsSection.setAttribute("class", "hide");

		// startNewGame.style.display = "none";
		startNewGame.style.width = "";
		startNewGame.style.height = "";
		startNewGame.style.borderRadius = "";
		startNewGame.style.margin = "";
		startNewGame.style.fontSize = "";
		startNewGame.removeAttribute("class");
		startNewGame.setAttribute("class", "hide");		

		// setTimeout(() => fieldSection.style.visibility = "hidden", 2000);
	}
};


startNewGame.onclick = function() {
	// games += 1;
	// statTotalGames.innerHTML = 	"Total games: " + games;			
	// statTotalVictories.innerHTML = "Total victories: " + victories;
	percentage = (victories/games*100).toFixed(2);
	if (percentage == NaN || percentage == "NaN") {
		statWinPercentage.innerHTML = "Win percentage: 0.00"
	} else {
	statWinPercentage.innerHTML = "Win percentage: " + (victories/games*100).toFixed(2);
	}
	beginningOfGame();

}
	// if ((tut.style.visibility != 'hidden') == true) {
	// 	tut.style.visibility = 'hidden'
	// } else {
	// // alert(tut.style.visibility);
	// // alert(tut.visibility);
	// tut.style.visibility = 'visible'; 
	// }


//--------------STATISTICS-----------------
// let accuracy = (hits/guesses*100).toFixed(2);


//----==---==--
// function firstShot () {

// }

// 1. show stats during the game (guesses, hits, games, victories, accuracy  during all the games until cleared)
// 2. check doubles on red fields
// 3. ask "do you want to play again" when victory
// 4. add "lives" (3 attempts of shot)
// 5. when 3 attempts is over - ask "do you want to play again"
// 6. when press "end game" game is fading out and button of confirmation appears ("i sure want to end this game" / "let's continue"). When press conirm - game is closing to a starting position
// 7. add button "clear stats" that summon the confirmation button ("clear and start new game" / "cancel") than clears stats to zero and starts new game
// 8. color scheme changing