//generate random numbers
let firstNumber = parseInt(Math.random()*10);
let secondNumber = parseInt(Math.random()*10);

//get the total
let total = firstNumber + secondNumber;

//display numbers on the canvas
let primary = $('#primary-number').text();
primary = firstNumber
$('#primary-number').text(primary);





let secondary = $('#secondary-number').text();
secondary = secondNumber
$('#secondary-number').text(secondary);


//get guess from user
let button = $('#btn')

button.addEventListener('click', function(){

let guess = $('#guess').value;
    guess = Number(guess);
//check answer
if (guess === total){
    alert('Correct');
    window.location.reload()
} else {
    alert('Sorry. Incorrect. The correct answer was ' + total + '.')
    window.location.reload()

}
    });