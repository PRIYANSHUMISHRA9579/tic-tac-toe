let boxes=document.querySelectorAll(".btn");
let resetBtn=document.querySelector("#reset-game");

let newgame=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");

let msg=document.querySelector("#msg");




let turnO=true;//turn of which player

let winningPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
       // box.innerText="AIIMS DELHI";

       if(turnO)
       {
        box.innerText="O";
        
       }
       else{
        box.innerText="X";

       }
       turnO=!turnO;
       box.disabled=true;
       checkWinner();
    }
        
    )

    

});

const checkWinner=()=>{
    for(pattern of winningPattern)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        
        if((pos1!=""&&pos2!=""&&pos3!="") && (pos1==pos2 && pos2==pos3))
        {
            console.log("Winner"," ",pos1);
            showWinner(pos1);
        }
       
    }
        

    

}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();

}

const disabledBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
newgame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);