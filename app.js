var userScore = 0
var compScore = 0
const userScore_span = document.querySelector(".user-score")
const compScore_span = document.querySelector(".comp-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")
const paper_div = document.querySelector(".p")
const rock_div = document.querySelector(".r")
const scissor_div = document.querySelector(".s")

function game(userChoice){
    const computerChoic = computerChoice();

function convert(letter){
    if(letter === "r") return "ROCK";
    if(letter === "p") return "PAPER";
    else return "SCISSOR";
}

function win(user,computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    const smalluserword = "(user)".fontsize(3).sub();
    const compuserword = "(comp)".fontsize(3).sub();
    result_p.innerHTML = `${convert(user)}${smalluserword} BEATS ${convert(computer)}${compuserword}`
    document.querySelector(`.${user}`).classList.add('green-glow')
    setTimeout(() => document.querySelector(`.${user}`).classList.remove('green-glow') , 300);

    
}
    

function lose(user,computer){
    compScore++;
    compScore_span.innerHTML = compScore;
    console.log(user)
    console.log(computer)
    const smalluserword = "(user)".fontsize(3).sub();
    const compuserword = "(comp)".fontsize(3).sub();
    result_p.innerHTML = `${convert(computer)}${compuserword} BEATS ${convert(user)}${smalluserword}`
    document.querySelector(`.${user}`).classList.add('red-glow')
    setTimeout(() => document.querySelector(`.${user}`).classList.remove('red-glow') , 300);

}

function draw(user,computer){
    console.log("ITS A TIE")
    result_p.innerHTML = "IT'S A DRAW!"
    document.querySelector(`.${user}`).classList.add('gray-glow')
    setTimeout(() => document.querySelector(`.${user}`).classList.remove('gray-glow') , 300);
}
    
    switch(userChoice + computerChoic){
        case "rs":
        case "sp":
        case "pr":
           
            win(userChoice,computerChoic);
            break;
        case "sr":
        case "ps":
        case "rp":
            
            lose(userChoice,computerChoic);
            break;
        case "ss":
        case "pp":
        case "rr":
            
            draw(userChoice,computerChoic);
            break;

    }
}


function computerChoice(){
    const choices = ['r','p','s'];
    const randomChoices = Math.floor(Math.random()*3)
    return  choices[randomChoices]
}



function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissor_div.addEventListener('click', function(){
        game("s");
    })
}

main()
