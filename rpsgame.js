let rock = () => {
  let arrayOfElements = ['paper', 'scissors'];
  let randomItems = Math.floor(Math.random() * arrayOfElements.length);
  if(randomItems === arrayOfElements.indexOf('paper')) {
    document.getElementById('setWinnerOrLoser').innerHTML ='Computer wins!';
  } else if(randomItems === arrayOfElements.indexOf('scissors')) {
    document.getElementById('setWinnerOrLoser').innerHTML ='You win!';
  }
}

let paper = () => {
  let arrayOfElements = ['rock', 'scissors'];
  let randomItems = Math.floor(Math.random() * arrayOfElements.length);
  if(randomItems === arrayOfElements.indexOf('rock')) {
    document.getElementById('setWinnerOrLoser').innerHTML ='You win!';
  } else if(randomItems === arrayOfElements.indexOf('scissors')) {
    document.getElementById('setWinnerOrLoser').innerHTML ='Computer wins!';
  }
}

let scissors = () => {
  let arrayOfElements = ['rock', 'paper'];
  let randomItems = Math.floor(Math.random() * arrayOfElements.length);
  if(randomItems === arrayOfElements.indexOf('rock')) {
    document.getElementById('setWinnerOrLoser').innerHTML ='Computer wins!';
  } else if(randomItems === arrayOfElements.indexOf('paper')) {
    document.getElementById('setWinnerOrLoser').innerHTML ='You win!';
  }
}