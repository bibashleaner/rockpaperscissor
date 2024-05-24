let computerScore = 0;
    playerScore = 0;
    round  = 0;

//Generating computer choise

function getComputerChoise(){
    let array = ['rock', 'paper', 'scissor']
    let choose = Math.floor(Math.random() * array.length);
    return array[choose];
}

// determing the winner

function playRound(computerChoise, humanChoise, result){
    console.log(computerChoise);
    const rsltDive = document.querySelector('.result');
   if(computerChoise === humanChoise){
    round++;
    // alert("It's a tie.");
   }
   else if((computerChoise === 'rock' && humanChoise === 'paper') || (computerChoise === 'paper' && humanChoise === 'scissor') || (computerChoise === 'scissor' && humanChoise === 'rock')){
    if(round==5){
        restart();
    }
    playerScore++;
    round++;
   }
   else if((computerChoise === 'rock' && humanChoise === 'scissor') || (computerChoise === 'paper' || humanChoise === 'rock') || (computerChoise === 'scissor' && humanChoise === 'paper')){
    if(round==5){
        restart();
        
    } 
    computerScore++;
    round++;
   }
}

// Function to change and show the scores

function determineScore(){
    const fselect = document.querySelector('.fscore');
    const lselect = document.querySelector('.lscore'); 

    fselect.innerHTML ="PLAYER SCORE: " + playerScore;
    lselect.innerHTML ="COMPUTER SCORE: " + computerScore;
}

// Displaying the winner

function selectionWinner(result){
    const resultDiv = document.querySelector('.result');
    if((round  == 5) && (computerScore > playerScore)){
        resultDiv.innerText = 'YOU LOSE !';
    }
    else if((round == 5) && (computerScore < playerScore)){
        resultDiv.innerText = 'YOU WON !';
    }
    else{
        resultDiv.innerText = '';
    }
}

// To reset the game

function restart(){
        computerScore = 0;
        playerScore = 0;
        round = 0; 
        // rsltDive.innerText = '';
}

// handle button click

function handleButtonClick(humanChoise){
    const getChoise = getComputerChoise();
    playRound(getChoise, humanChoise);
    determineScore();
    selectionWinner();
}


// Time interval to swap the image

var randomNumber = 0;
let time = setInterval(function(){
    const image = document.getElementById('image');

    var pic = [
        '/pictures/paper.png',
        '/pictures/rock.png',
        '/pictures/scissor.png'
    ]  
    
    if(randomNumber>2){
        return randomNumber=0;
    }

    image.src = pic[randomNumber];
    randomNumber++;

},300)