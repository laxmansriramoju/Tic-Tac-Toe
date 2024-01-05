let boxes=document.querySelectorAll(".box");
let winnerMsg=document.querySelector(".winner-msg");
let newGame=document.querySelector(".new-game");
let player1=true;
let count=0;
let winningPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
function checkWinner(){
    for(pattern of winningPatterns){
        let val1=boxes[pattern[0]].textContent;
        let val2=boxes[pattern[1]].textContent;
        let val3=boxes[pattern[2]].textContent;
        if(val1=='O' && val2=='O' && val3=='O'){
            winnerMsg.textContent="PLAYER 1 WON";
            winnerMsg.style.color="red";
            for(let box of boxes){
                box.disabled=true;
            }
        }
        if(val1=='X' && val2=='X' && val3=='X'){
            winnerMsg.textContent="PLAYER 2 WON";
            winnerMsg.style.color="green";
            for(let box of boxes){
                box.disabled=true;
            }
        }
    }
}
for(let box of boxes){
    box.addEventListener('click',()=>{
        if(player1){
            box.textContent='O';
            player1=false;
            box.style.color="red";
        }else{
            box.textContent='X';
            player1=true;
            box.style.color="green";
        }
        box.disabled=true;
        count+=1;
        checkWinner()
        if(count===9 && winnerMsg.textContent==""){
            winnerMsg.textContent="DRAW";
            winnerMsg.style.color="black";
        }
    })
};
newGame.addEventListener("click",()=>{
    player1=true;
    for(let box of boxes){
        box.textContent="";
        winnerMsg.textContent="";
        count=0;
        for(let box of boxes){
            box.disabled=false;
            box.style.backgroundColor="#7bc7fa"
        }
    }
})
