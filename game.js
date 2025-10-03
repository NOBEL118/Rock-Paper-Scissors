const choice = document.querySelectorAll(".choice");
const user  = document.querySelector("#user");
const comp = document.querySelector("#comp");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");  
const board = document.getElementById("alert");

let users_score = 0;
let comp_score = 0;

choice.forEach((choose) => {
    choose.addEventListener("click", (e) => {

        choice.forEach(c => c.style.border = "");

        let ai = Math.floor(Math.random() * 3) + 1;  // 1=rock, 2=paper, 3=scissors
        let you = choose.id;

        if ((ai === 1 && you === "scissors") || (ai === 2 && you === "rock") || (ai === 3 && you === "paper")) {
            // Computer wins
            comp_score += 1;
            comp.textContent = comp_score;
            board.textContent = "Computer Wins!";
            choose.style.border = "3px solid red";  

        } else if ((you === "rock" && ai === 3) || (you === "paper" && ai === 1) || (you === "scissors" && ai === 2)) {
            // User wins
            users_score += 1;
            user.textContent = users_score;
            board.textContent = "You Win!";
            choose.style.border = "3px solid green";   

        } else {
            // Draw
            board.textContent = "Draw ;)";
            choose.style.border = "3px solid yellow"; 
    
        }
    });

});
