// Iniciar minhas variaveis
let board = ['', '', '', '', '', '', '', '', '', ];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;
let ganhador = "";

const button = document.querySelector('.form button')

let winState = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6],
]

// fazer a função para colocar os simbolos dentro do board
function handleMove(position) {
   const input1 = document.getElementById("play1")
   const input2 = document.getElementById("play2")
   let play1 = input1.value
   let play2 = input2.value

   if (gameOver) {
      return
   }

   if (board[position] == '') {
      board[position] = symbols[playerTime]

      // isso quer esta perguntando 'essa foi uma jogada vencedora?'
      gameOver = isWin();

      if (!gameOver) {

         // playerTime = (playerTime == 0) ? 1 : 0

         if (playerTime == 0) {
            playerTime = 1
            ganhador = play2;
         } else {
            playerTime = 0
            ganhador = play1;
         }
      }
   }

   return gameOver;

}

function isWin() {

   for (win of winState) {
      let seq = win
      let pos1 = seq[0]
      let pos2 = seq[1]
      let pos3 = seq[2]

      if (board[pos1] == board[pos2] &&
         board[pos1] == board[pos3] &&
         board[pos1] != '') {

         return true;
      }
   }

   return false
}
