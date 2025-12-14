let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.js-reset-button');
let msgContainer = document.querySelector('.message-container');
let msg = document.querySelector('.message');

let turnO = true;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

resetBtn.addEventListener('click', resetGame);

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(turnO){
            box.innerText = 'O';
            box.classList.add('O-color');
            turnO = false;
        }else{
            box.classList.remove('O-color');
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

function resetGame(){
    enableButtons();
    turnO = true;
    msg.classList.add('hide');
}

function showWinner(winner){
    msg.innerHTML = `Winner is ${winner}`;
    msg.classList.remove('hide');
    disableButtons();
}

function disableButtons(){
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

function enableButtons(){
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerHTML = '';
    });
}

function checkWinner(){
    winPatterns.forEach((patterns) => {
        let pos1 = boxes[patterns[0]].innerText;
        let pos2 = boxes[patterns[1]].innerText;
        let pos3 = boxes[patterns[2]].innerText;

        if(pos1 != '' && pos2 != '' && pos3 != ''){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    });
}