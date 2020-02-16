let userScore = 0;
let computerScore = 0;
const userScore_div = document.getElementById("first");
const computerScore_div = document.getElementById("second");
const scoreBoard = document.querySelector(".userComp");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const getComputerChoice = () =>{
    const computerChioces = ["r","p","s"];
    const randomNumber = Math.floor(Math.random()*3);
    return computerChioces[randomNumber];
};
const convert = (letter) =>{
  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  else return "Sciccors";

}
const win = (userChoice , computerChoice) => {
    userScore ++;
    userScore_div.innerHTML = userScore;
    computerScore_div.innerHTML = computerScore;
    result_div.innerHTML = convert(userChoice) +" " +"beats" + " " + convert(computerChoice) + " " +"You win";
};
const lose = (userChoice,computerChoice)=>{
    computerScore ++;
    userScore_div.innerHTML = userScore;
    computerScore_div.innerHTML = computerScore;
    result_div.innerHTML = convert(userChoice) + " " + "lost" + " " + convert(computerChoice) +" " +"You lost";

};
const draw = (userChoice,computerChoice)=>{
    
    result_div.innerHTML = convert(userChoice) + " " + "and" + " " + convert(computerChoice) + " " + "its a draw";

};
 

const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch( userChoice + computerChoice){
       case "pr":
       case "rs":
       case "sp":
        win(userChoice,computerChoice);
        break;
       case "rp":
       case "sr":
       case "ps":
        lose(userChoice,computerChoice);
        break;
       case "pp":
       case "rr":
       case "ss":
        draw(userChoice,computerChoice);
        break;

   };
};


const main = () =>{
rock_div.addEventListener('click',() =>{
    game("r");
});
paper_div.addEventListener('click',() =>{
    game("p");
});
scissors_div.addEventListener('click',() =>{
    game("s");
});
};

main();
