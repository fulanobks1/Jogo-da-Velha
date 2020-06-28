// Verificar se o documento ja foi carregado
document.addEventListener('DOMContentLoaded', () => {

   let squares = document.querySelectorAll(".square");

   squares.forEach(square => {
      square.addEventListener("click", handleClick)
   })

});

function handleClick(event) {
   let squere = event.target;
   let position = squere.id;

   if (handleMove(position)) {
      setTimeout(() => {
         alert("O Jogo Acabou o Vencedor foi: " + ganhador)
      }, 20);
   };
   updateSquare(position)
}

function updateSquare(position) {
   let square = document.getElementById(position.toString());
   let symbol = board[position];
   square.innerHTML = `<div class='${symbol}'></div>`
}

function handleGame() {
   const modal = document.getElementById("modal")
   button.addEventListener('click', () => {
      if (document.getElementById("play1").value == '' ||
         document.getElementById("play2").value == '') {
         return alert("Preencha os nomes de batalha")
      }
      modal.classList.toggle("hide")
   })
}

handleGame()
