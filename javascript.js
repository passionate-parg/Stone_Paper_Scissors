user_score=0
comp_score=0

const user_option=document.querySelectorAll(".choice");
console.log(user_option);

user_score_1=document.querySelector("#u_score")
comp_score_1=document.querySelector("#c_score")

let text=document.querySelector(".play");

function comp_choice(){
    const c_option=["stone","paper","scissors"];
    const randIndx=Math.floor(Math.random()*3);
    const computer_choice=c_option[randIndx];
    return computer_choice;
}

function play_game(user_choice){
    let val1=comp_choice();

    if(user_choice===val1){
        text.innerText="Game is draw";
        text.style.backgroundColor="blue";
        text.style.color="white";
    }else if ((user_choice==="stone" && val1==="scissors")||
              (user_choice==="scissors" && val1==="paper")||
              (user_choice==="paper" && val1==="stone")){
                text.innerText=`You win ${user_choice} beats ${val1}`;
                text.style.backgroundColor="green";
                text.style.color="white";
                user_score++;
                user_score_1.innerText=user_score;
    }else if ((val1==="stone" && user_choice==="scissors")||
    (val1==="scissors" && user_choice==="paper")||
    (val1==="paper" && user_choice==="stone")){
        text.innerText=`You lose ${val1} beats ${user_choice}`;
        text.style.backgroundColor="red";
        text.style.color="white";
        comp_score++;
        comp_score_1.innerText=comp_score;
        
    }
}

user_option.forEach(
    function print_1(val){
        val.addEventListener("click", function a(){
            const user_choice=val.getAttribute("id");
            play_game(user_choice);
        })
    }
)


