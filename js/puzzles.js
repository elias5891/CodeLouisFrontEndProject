var first_tens;
var first_ones;
var second_tens;
var second_ones;
var answer;
var submittedAnswer;

//Grabs a random number 0-9.

function RNG(maxvalue) {
  return Math.floor(Math.random()*10);
}

// Converts numeric_values (from the RNG function) into symbols to display.
function find_symbol(numeric_value) {
	switch(numeric_value) {
		case 0:
			return ": )";
			break;
		case 1:
			return "= (";		
			break;
		case 2:
			return "( :";
			break;
		case 3:
			return ") =";
			break;
		case 4:
			return ": (";
			break;
		case 5:
			return ") :";
			break;
		case 6:
			return "= )";
			break;
		case 7:
			return "( =";
			break;
		case 8:
			return ": |";
			break;
		case 9:
			return "| :";
			break;
		default:
			break;
	}
}

//Initializes the puzzle upon pressing, generating the numbers to add, and the display to show.  Also shows the instructions for the module, and sets up the containers for the correct answer to display.

function startEmojiMath() {
  first_tens = RNG(10);	
  first_ones = RNG(10);
  second_tens = RNG(10);	
  second_ones = RNG(10);
  var outputMsg = document.getElementById("emoji_puzzle");
  var symbol_one = find_symbol(first_tens);
  var symbol_two = find_symbol(first_ones);
  var symbol_three = find_symbol(second_tens);
  var symbol_four = find_symbol(second_ones);  
  answer = (10 * ( first_tens + second_tens) + first_ones + second_ones);
  outputMsg.innerHTML = "Query:  <br><br>" + symbol_one + " " + symbol_two + " + " + symbol_three + " " + symbol_four;
  var outputMsg3 = document.getElementById("moduleInstructions");
  outputMsg3.innerHTML = " Use the following guide to convert emojis to numbers:<br><table><tr><th>Character</th><th>Number</th></tr>                        <tr><td>:)       </td><td>0     </td></tr>                        <tr><td>=(       </td><td>1     </td></tr>                        <tr><td>(:       </td><td>2     </td></tr>                        <tr><td>)=       </td><td>3     </td></tr>                        <tr><td>:(       </td><td>4     </td></tr>                        <tr><td>):       </td><td>5     </td></tr>                        <tr><td>=)       </td><td>6     </td></tr>                        <tr><td>(=       </td><td>7     </td></tr>                        <tr><td>:|       </td><td>8     </td></tr>                        <tr><td>|:       </td><td>9     </td></tr>                    </tbody></table>"; 
	var outputMsg2 = document.getElementById("correctness");
	outputMsg2.innerHTML = "";
}



//Checks the results of the automated calculation vs what has been typed into the input box.

function checkEmojiMath() {
	console.log("Entered function");
	var outputMsg2 = document.getElementById("correctness");
	submittedAnswer = document.getElementById("emoji_answer").value;
	if (answer == submittedAnswer) {
		outputMsg2.innerHTML = "Your answer is correct!";
	} else {
		outputMsg2.innerHTML = "Your answer (" + submittedAnswer + ") is incorrect.  " + first_tens + first_ones + "+" + second_tens + second_ones + " = " + answer;
	}
	
}