const userChoice = prompt("choose rock, paper , Schere : ");
if (userChoice) {
   console.log(`You have choosed :${userChoice}`);
} else { 
    console.log("you cheated!");
}
const arrRandom = ["rock","paper","Schere"]; 
let randomChoice = Math.floor(Math.random()*3);
const computerChoice = arrRandom[randomChoice];
console.log(`Computer chooses : ${computerChoice}`);
if (userChoice === computerChoice){
    console.log("The resualt was equal");

} else if (userChoice === "rock") {
    if ( computerChoice === "Schere") {
        console.log("user has won ");

    }else {
        console.log("Computer has won");
    }
}
 else if(userChoice === "Schere") {
      if (computerChoice === "paper"){
        console.log("user has won");
          
      }else {
        console.log("Computer has won");
      }
    }
  else if (userChoice === "paper") {
     if (computerChoice === "rock" ) {
        console.log("user has won");
     
     }else {
        console.log("computer has won");
     }

    }

    

