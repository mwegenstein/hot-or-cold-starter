
$(document).ready(function(){

  var generatedNum = generateInt(); //running this once vs. being in the click function when it ran on every click

	/*--- Display information modal box ---*/
	$(".what").click(function(){
  	$(".overlay").fadeIn(1000);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

    //initiate the hot/cold game
    var count = 0;
  
  $("#guessButton").click(function(event) {
    event.preventDefault();
    
    count++;
    $("#count").html(+count);
    
    var guessValue = $("#userGuess").val();

    function validateNum (guessNum) {
      console.log(typeof guessNum); 
      if (isNaN(guessNum) || guessNum < 1 || guessNum > 100) {
        alert("That is not a valid number choice. Please pick a number between 1 and 100")
      } else {
        return guessNum;
      }
    }
    

    var listItem ="<li>" + guessValue + "</li>";
    $("#guessList").append(listItem);
    // return false;
    console.log(guessValue);
    validateNum(guessValue);

    var compareTotal = compareValues(guessValue, generatedNum);
    // console.log(compareTotal);
    var guessResult = calculateHotCold(compareTotal);
    // console.log(guessResult);
    append(guessResult);
  });

  //count the number of guesses
  
    // $("#guessButton").click(function() {
      


  //Start new game on click
  $('.new').click(function() {
      location.reload();
      console.log("new game!")
  });

});

//check guess number

 

//generate number
  function generateInt() {
    var myNum = Math.floor(Math.random() * 100) + 1;
    console.log(myNum);
    return myNum;
  }

  function compareValues(a, b) {
    var compare = Math.abs(a - b);
    return compare
  }

  //decide if hot/cold 
  function calculateHotCold(difference){
    if (difference >= 40) {
      return "Ice Ice cold baby! Guess again" ;
    } else if (difference >= 30 && difference < 40) {
      return "cold! Guess again";
    } else if (difference >= 20 && difference < 30) {
      return "warm Guess again";
    } else if (difference >= 10 && difference < 20) {
      return "warmer Guess again";
    } else if (difference > 0 && difference < 10) {
      return "hot hot hot Guess again";
    } else {
      return "Nailed it! nice!";
    }
  }

  //show hot/cold result to the user
  function append(value) {
    console.log('calling append', value)
    $('#feedback').text(value);
  }




// When a new game starts, a secret number between 1 and 100 should be generated that the user will have to guess. You should write a named function that takes care of this. You should try to start a new game without refreshing or reloading the page.
//The user should get feedback about each guess – if it was too low, too high, or just right. This means that you'll need to write a named function that takes a user guess and determines which feedback to provide.

//ToDo
// 1. I generate a number between 1-100 CHECK
// 2. user guesses the number and submits it. CHECK
// 3. I take the submitions and compare it to the generated result CHECK
// 4. Decide hot or cold or is the number. CHECK
// 5. Keep the same number running until user starts new game CHECK
// 6. The game should track how many guess the user has made. Feedback about this should appear in // span#count (which defaults to 0, when the page loads). CHECK
// 7. The game should also supply users with a list of the numbers they have guessed so far. The CSS for this game is set up in such a way that you can simply add each guessed number as an <li> to ul#guessList. CHECK
// You'll need to ensure that users provide valid inputs. Note that the guess text input field has the HTML 5 required flag set, so you won't have to worry about blank guesses being submitted (if the user submits a blank guess, they'll be prompted to supply an input). However, you will need to write code that ensures that the user has supplied a numeric input between 1 and 100. CHECK

