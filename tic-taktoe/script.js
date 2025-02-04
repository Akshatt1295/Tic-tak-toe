let boxes =document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; 

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const resetGame = () => {
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        if (turnO) {
            box.innerText ="O";
            turnO = false;
        }
        else{
            box.innerText ="X";
            turnO = true; 
        }
        box.disabled = true;
        checkwinner();
        nowinner();
    })    
})


const disableboxes = () =>{
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableboxes = () =>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner =(winner) =>{
    msg.innerText =`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}
const checkwinner= () =>{
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
    
}
// const nowinner = ()=>{
//     for (let box of boxes) {
//         if (box.innerText = "") {
//             break;
//         }
//         msg.innerText =`DRAW`;
//         msgContainer.classList.remove("hide");
//     }
// }

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);