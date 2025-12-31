/* Student Name: Ceyni Adan Ahmed
   ID Number: C5240036
   Email: ceyni.adan83@gmail.com
   Project: JavaScript Chapters 7, 8, 9 & Mini Game
*/

// ==========================================
// CHAPTER 7: OBJECTS (LITERALS, CONSTRUCTORS, JSON)
// ==========================================

// 1. Object Literal
const student = {
    username: "Ceyni",
    age: 20,
    city: "muqdish",
    study: "Multimedia",
    info() {
        return `${this.username} lives in ${this.city} and studies ${this.study}`;
    }
};

// 2. Constructor Function
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
const myBook = new Book("JS Mastery", "Ali Ahmed", 2024);

// 3. JSON Handling
const jsonString = JSON.stringify(student); // Object to JSON string
const parsedObject = JSON.parse(jsonString); // JSON string back to Object


// ==========================================
// CHAPTER 8: DOM MANIPULATION (SELECTION & STYLE)
// ==========================================

// Selecting elements
const mainTitle = document.getElementById("home");
const allButtons = document.querySelectorAll(".game-btn");

// Modifying Style and Content via DOM
if (mainTitle) {
    mainTitle.style.color = "#d14780";
    mainTitle.innerHTML = "<h1>Welcome, Ceyni Adan</h1>";
}


// ==========================================
// CHAPTER 9: EVENTS (10 EXAMPLES)
// ==========================================

// 1. Click Event
document.getElementById("btn1")?.addEventListener("click", () => {
    alert("Button 1 Clicked!");
});

// 2. Double Click
document.getElementById("btn2")?.addEventListener("dblclick", () => {
    alert("Button Double Clicked!");
});

// 3. Mouse Over & Out (Hover)
const box = document.getElementById("box");
if (box) {
    box.addEventListener("mouseover", function() {
        this.style.background = "blue";
    });
    box.addEventListener("mouseout", function() {
        this.style.background = "gray";
    });
}

// 4. Keydown (Keyboard)
document.getElementById("key")?.addEventListener("keydown", (e) => {
    console.log("Keyboard Activity: " + e.key);
});

// 5 & 6. Focus & Blur
const inputField = document.getElementById("focus_blur");
if (inputField) {
    inputField.addEventListener("focus", function() { this.style.background = "yellow"; });
    inputField.addEventListener("blur", function() { this.style.background = "white"; });
}

// 7. Form Submit
document.getElementById("form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
});

// 8. Change Event
document.getElementById("select")?.addEventListener("change", function() {
    alert("Selection changed to: " + this.value);
});

// 9. Window Resize
window.addEventListener("resize", () => {
    console.log("Window Resized");
});

// 10. Event Delegation
document.getElementById("list")?.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        alert("You clicked on: " + e.target.textContent);
    }
});


// ==========================================
// MINI GAME: ROCK, PAPER, SCISSORS
// ==========================================
let userScore = 0;
let compScore = 0;

function playGame(userChoice) {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const compChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (userChoice === compChoice) {
        result = "IT'S A TIE!";
    } else if (
        (userChoice === 'Rock' && compChoice === 'Scissors') ||
        (userChoice === 'Paper' && compChoice === 'Rock') ||
        (userChoice === 'Scissors' && compChoice === 'Paper')
    ) {
        result = "YOU WIN!";
        userScore++;
    } else {
        result = "COMPUTER WINS!";
        compScore++;
    }

    // Displaying result in DOM
    const resDiv = document.getElementById('game-result');
    const scoreDiv = document.getElementById('score-display');
    
    if (resDiv) resDiv.innerHTML = `You: ${userChoice} vs Comp: ${compChoice} <br> ${result}`;
    if (scoreDiv) scoreDiv.innerText = `Ceyni: ${userScore} | Comp: ${compScore}`;
}