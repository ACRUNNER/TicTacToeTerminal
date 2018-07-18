var prompt = require('prompt');
var inquirer = require('inquirer');

let turn = 'Player 1';
let board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];


prompt.start();

let checkWin = ()=>{
  var letter;
  if(turn === 'Player 1'){
    letter = 'X';
  } else {
    letter = 'O';
  }
  if(board[0][0] ===letter && board[0][1] === letter && board[0][2] === letter){
    return true;
  }
  if(board[1][0] ===letter && board[1][1] === letter && board[1][2] === letter){
    return true;
  }
  if(board[2][0] ===letter && board[2][1] === letter && board[2][2] === letter){
    return true;
  }
  if(board[0][0] ===letter && board[1][0] === letter && board[2][0] === letter){
    return true;
  }
  if(board[0][1] ===letter && board[1][1] === letter && board[2][1] === letter){
    return true;
  }
  if(board[0][2] ===letter && board[1][2] === letter && board[2][2] === letter){
    return true;
  }
  if(board[0][0] ===letter && board[1][1] === letter && board[2][2] === letter){
    return true;
  }
  if(board[2][0] ===letter && board[1][1] === letter && board[0][2] === letter){
    return true;
  }
  return false;
};
let checkDraw = ()=>{
  for(var i = 0; i < 3; i++){
    for(var n = 0; n <  3; n++){
      if(board[i][n] === ' '){
        return false;
      }
    }
  }
  return true;
};

let showBoard = ()=>{
  console.log(board[0][0]+'|'+board[0][1]+'|'+board[0][2]);
  console.log('- - -');
  console.log(board[1][0]+'|'+board[1][1]+'|'+board[1][2]);
  console.log('- - -');
  console.log(board[2][0]+'|'+board[2][1]+'|'+board[2][2]);
};

let howToPlay = ()=>{
  console.log('How to enter moves: \n\n');
  console.log('1|2|3');
  console.log('- - -');
  console.log('4|5|6');
  console.log('- - -');
  console.log('7|8|9\n');
};

let playGame = ()=> {
  console.log('Your move '+ turn);
  prompt.get(['move'], (err, results) => {
    let move = parseInt(results.move);
    console.log('Your move is: ' + move);
    if(board[Math.floor((move-1)/3)][(move-1)%3] === 'X' || board[Math.floor((move-1)/3)][(move-1)%3] === 'O'){
      console.log('That position is filled in! Try again.');
      playGame();
    } else {
      if(turn === 'Player 1'){
        board[Math.floor((move-1)/3)][(move-1)%3] = 'X';
      } else {
        board[Math.floor((move-1)/3)][(move-1)%3] = 'O';
      }

      if(checkWin()){
        console.log('Congrats '+ turn + '!!! You won!!');
      } else if(checkDraw()){
        console.log('Its a draw. Nobody wins.');
      } else {
        showBoard();
        if(turn === 'Player 1'){
          turn = 'Player 2';
        } else {
          turn = 'Player 1';
        }
        playGame();
      }
    }
  });
};

howToPlay();
playGame();