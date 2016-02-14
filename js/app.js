
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

// When a new game starts, a secret number between 1 and 100 should be generated that the user will have to guess. You should write a named function that takes care of this. You should try to start a new game without refreshing or reloading the page.
//The user should get feedback about each guess – if it was too low, too high, or just right. This means that you'll need to write a named function that takes a user guess and determines which feedback to provide.

//ToDo
// 1. I generate a number between 1-100
// 2. user guesses the number and submits it. 
// 3. I take the submitions and compare it to the generated result
// 4. Decide hot or cold or is the number. prompt to guess again

// generate a number from 1-100 randomized. 

// $("#guessButton").click(function(){
//  var guessValue = $(this).closest("form").find("input[name='userGuess']").val();//this is now global variable

//  function generateInt() {
//     var myNum = Math.floor(Math.random() * 100) + 1
//     return myNum
//     console.log(myNum)
//   }; generateInt();  


//   function compareValues(a, b) { 
//     var compare = Math.abs(a - b);
//     console.log("hi"); 
//   };
//   compareValues(guessValue, generateInt());

// }); 

function generateInt() {
  var myNum = Math.floor(Math.random() * 100) + 1;
  console.log(myNum);
  return myNum;
}; 

$("#guessButton").click(function() {
  var guessValue = $("#userGuess").val();
  return false;
  console.log(guessValue);
  function compareValues(a, b) {
    var compare = Math.abs(a - b);
    // return compare
    console.log(compare);
  }
  compareValues(guessValue, generateInt());
});




// compareValues(guessValue, generateInt());
//HOW DO I COMPARE THE TWO VALUES?


//RESTART GAME/New Game
//remove the guess on refresh possibly using the .remove() command
//remove the feedback from the page
//generate a new number
//guess input clears 
//count number goes to 0

