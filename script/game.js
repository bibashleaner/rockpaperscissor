//Generating computer choise

function getComputerChoise(){
    let array = ['rock', 'paper', 'scissor'];
    let choose = math.floor(math.random(array) * array.length);
    return choose;
}

function getHumanchoise(){

}

//Image occurance interval

// var randomNumber = 0;
// let time = setInterval(function(){
//     const image = document.getElementById('image');

//     var pic = [
//         'paper.png',
//         'rock.png',
//         'scissor.png'
//     ]  
    
//     if(randomNumber>2){
//         return randomNumber=0;
//     }

//     image.src = pic[randomNumber];
//     randomNumber++;

// },300);~