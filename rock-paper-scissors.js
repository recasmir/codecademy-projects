//ROCK, PAPER, SCISSORS

const getUserChoice = userChoice =>{
  userChoice = userChoice.toLowerCase();
  if(userChoice == 'bomb'){
      return userChoice;
    }
  if(userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scisoors'){
    return userChoice;
  }else{
    console.log('insert your choice');
  }
};

function getComputerChoice(){
  let computerChoice = Math.floor(Math.random()*3);
  switch(computerChoice){
    case 0 :
    return 'rock';
    case 1 :
    return 'paper';
    case 2 :
    return 'scissors';
  }
};

function determineWinner(userChoice,computerChoice){
  if(userChoice == 'bomb'){
    return 'BOMB - The user won!'
  };
  if(userChoice == computerChoice){
    return 'the game was tie';
  }
  if(userChoice == 'rock'){
    if(computerChoice == 'paper'){
      return 'The computer won!';
    }else{
      return 'The user won!';
    }
  }
    if(userChoice == 'paper'){
      if(computerChoice == 'scissors'){
        return 'The user won!'
      }else if(computerChoice == 'rock'){
        return 'The computer won!';
      }
    }
    if(userChoice == 'scissors'){
      if(computerChoice == 'rock'){
        return 'The computer won!';
      }else if(computerChoice == 'paper'){
        return 'The user won!';
      }
    }

}

function playGame(){
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log('You threw: '+ userChoice);
  console.log('The computer threw: '+computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
} ;
playGame();
  