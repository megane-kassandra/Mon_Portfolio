const titre=document.getElementById("title");

titre.textContent = "Welcome";

const Cards = document.querySelectorAll(".project-card");
console.log(Cards);

const titles = []; 

// Cards.forEach((card) => 
for (let i = 0; i < Cards.length; i++) {
    Cards[i].style.border = "2px solid #ccc";
    titles.push(Cards[i].textContent);
}
console.table(titles);

function isAdult(age) {
    if(age<18){
    console.log("You are a teenager.");
} else if(age===18){
    console.log("You become an adult.");
} else if(age>18){
    console.log("You are an adult.");
}
return;
}

isAdult(18);