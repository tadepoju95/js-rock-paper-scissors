let rock = () => {
  let arrayOfElements = ['paper', 'scissors', 'rock'];
  let randomItems = Math.floor(Math.random() * arrayOfElements.length);
  if(randomItems === arrayOfElements.indexOf('paper')) {
    document.getElementById('setWinnerOrLoser').innerHTML ='Computer wins!!!';
    document.getElementById('getComputerInput').innerHTML = 'Computer played paper';
  } else if(randomItems === arrayOfElements.indexOf('scissors')) {
    document.getElementById('setWinnerOrLoser').innerHTML ='You win!!!';
    document.getElementById('getComputerInput').innerHTML = 'Computer played scissors';
  } else if(randomItems === arrayOfElements.indexOf('rock')) {
    document.getElementById('setWinnerOrLoser').innerHTML ="It's a tie!!!";
    document.getElementById('getComputerInput').innerHTML = 'Computer played rock';
  }
}


let paper = () => {
  let arrayOfElements = ['rock', 'scissors', 'paper'];
  let randomItems = Math.floor(Math.random() * arrayOfElements.length);
  if(randomItems === arrayOfElements.indexOf('rock')) {
    document.getElementById('setWinnerOrLoser').innerHTML ='You win!';
    document.getElementById('getComputerInput').innerHTML = 'Computer played rock';
  } else if(randomItems === arrayOfElements.indexOf('scissors')) {
    document.getElementById('setWinnerOrLoser').innerHTML ='Computer wins!';
    document.getElementById('getComputerInput').innerHTML = 'Computer played scissors';
  } else if(randomItems === arrayOfElements.indexOf('paper')) {
    document.getElementById('setWinnerOrLoser').innerHTML ="It's a tie!!!";
    document.getElementById('getComputerInput').innerHTML = 'Computer played paper';
  }
}

let scissors = () => {
  let arrayOfElements = ['rock', 'paper', 'scissors'];
  let randomItems = Math.floor(Math.random() * arrayOfElements.length);
  if(randomItems === arrayOfElements.indexOf('rock')) {
    document.getElementById('setWinnerOrLoser').innerHTML ='Computer wins!';
    document.getElementById('getComputerInput').innerHTML = 'Computer played rock';
  } else if(randomItems === arrayOfElements.indexOf('paper')) {
    document.getElementById('setWinnerOrLoser').innerHTML ='You win!';
    document.getElementById('getComputerInput').innerHTML = 'Computer played paper';
  } else if(randomItems === arrayOfElements.indexOf('scissors')) {
    document.getElementById('setWinnerOrLoser').innerHTML ="It's a tie!!!";
    document.getElementById('getComputerInput').innerHTML = 'Computer played scissors';
  }
}