console.log("hello");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");
let winner = document.getElementById("Winner")
let turn= document.getElementById("turn");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

function Turn(){
  if(turnO){
    turn.innerText ="0"
  }
  else{
    turn.innerText ="x"
  }
}
// console.log(boxes);
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      count = count +1;
          if(turnO){
            Turn();
            box.innerText ="X";
            turnO = false;
          }
          else{
            Turn();
            box.innerText = "O";
            turnO = true;
          }
          box.disabled = true;
          checkwinner();
          // console.log(count)
    }
    )
})
 
let win = true;

// winner
 function winnner(pos1){
   win = false;
  for(let  set of boxes){
    set.disabled = true;
  }
  console.log("winner you");
  winner.innerText=`Winner is ${pos1}`;
  // winner.innerText=`Winner is`;
  console.log("winner tow")
  turn.innerText = "";
}

// match draw
function draw(){
  console.log("draw")
  if(win){   
    console.log("matchdraw")
    winner.innerText="Match draw";
    turn.innerText="";
  }
}

const reset = ()=>{
  winner.innerText="";
  count =0;
  console.log("reset");
  for(let  set of boxes){
    set.innerText = "";
    set.disabled = false;
  }
  win =true;
  // winner.innerText="";
}

const checkwinner  = ()=>{
    for(let pattern of winPatterns){
        // console.log(pattern);
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
         if(pos1 !="" && pos2 != "" && pos3!=""){
          
            if(pos1 ===pos2 && pos2===pos3){
                console.log(pos1+"h");
                winnner(pos1);
            }
            if (count==9){  
             draw();
             }
         }
    }

}

resetBtn.addEventListener("click",(reset));
