//Generating computer choise

function getComputerChoise(){
    let array = ['rock', 'paper', 'scissor'];
    let choise = math.floor(math.random(array) * array.length);
    console.log(choise);
}
