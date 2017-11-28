var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesseslist = [];
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

document.onkeyup = function(event) {

	var userGuess = event.key ;

	var computerChoice = letters[Math.floor(Math.random() * letters.length)];
	console.log(computerChoice + userGuess);

		if (userGuess === computerChoice) {
			wins++;
			console.log("wins = " + wins);
		} 
		else {
			guesseslist.push(userGuess);
			console.log("guesses so far = " + guesseslist);
			guessesLeft--;
			console.log("guesses Left = " + guessesLeft);
		};

		if (guessesLeft === 0) {
			losses++;
			console.log("losses = " + losses);
		} ;


		if ((guessesLeft===0) || (userGuess === computerChoice)) {
    		guessesLeft = 9;
    		guesseslist = []; 
		} ; 

		function checkIfAlreadyguess(key) {
			if (guesseslist.indexof(key) > -1) {
				alert = "Already guessed" + key;
				}
		}

	document.getElementById("wins").innerHTML = "Wins: " + wins ;
    document.getElementById("losses").innerHTML = "Losses: " + losses ;
   	document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft ;
   	document.getElementById("guesseslist").innerHTML = "Your Guesses so Far: " + guesseslist.join(', ') ;
}