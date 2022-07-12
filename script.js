console.log("Tic Tac Toe")
let audioTurn=new Audio("ting1.mp3")
let turn = "X"
let isgameover=false;
document.body.style.backgroundImage = "url('confetti-40.gif')";
document.body.style.backgroundRepeat="no-repeat";
document.body.style.backgroundSize="0%";

//Function to change the turn
const changeTurn =()=>{
    return turn ==="X"?"0":"X"
}

//Function to check for a win
const checkWin = ()=>{
    let boxtext= document.getElementsByClassName('boxtext');
    let wins= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText+" Won"
            document.body.style.backgroundSize="100%";
            isgameover = true
            reset.addEventListener()
        }

    })

}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext =element.querySelector('.boxtext');
        element.addEventListener('click',()=>{
            if(boxtext.innerText ===''){
                boxtext.innerText= turn;
                turn= changeTurn();
                audioTurn.play();
                checkWin();
                if(!isgameover){      
                    document.getElementsByClassName("info")[0].innerText="Turn For "+ turn;
                }
            }
        })
})

//add listener to reset button
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
          element.innerText= "";
        });
        turn="X";
        isgameover= false
        document.getElementsByClassName("info")[0].innerText="Turn For "+ turn;
    })