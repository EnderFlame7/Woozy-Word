let wordBank = ["About", "Alert", "Argue", "Beach", "Above", "Alike", "Arise", "Began", "Abuse", "Alive", "Array", "Begin", "Actor", "Allow", "Aside", "Begun", "Acute", "Alone", "Asset", "Being", "Admit", "Along", "Audio", "Below", "Adopt", "Alter", "Audit", "Bench", "Adult", "Among", "Avoid", "Billy", "After", "Anger", "Award", "Birth", "Again", "Angle", "Aware", "Black", "Agent", "Angry", "Badly", "Blame", "Agree", "Apart", "Baker", "Blind", "Ahead", "Apple", "Bases", "Block", "Alarm", "Apply", "Basic", "Blood", "Album", "Arena", "Basis", "Board", "Boost", "Buyer", "China", "Cover", "Booth", "Cable", "Chose", "Craft", "Bound", "Calif", "Civil", "Crash", "Brain", "Carry", "Claim", "Cream", "Brand", "Catch", "Class", "Crime", "Bread", "Cause", "Clean", "Cross", "Break", "Chain", "Clear", "Crowd", "Breed", "Chair", "Click", "Crown", "Brief", "Chart", "Clock", "Curve", "Bring", "Chase", "Close", "Cycle", "Broad", "Cheap", "Coach", "Daily", "Broke", "Check", "Coast", "Dance", "Brown", "Chest", "Could", "Dated", "Build", "Chief", "Count", "Dealt", "Built", "Child", "Court", "Death", "Debut", "Entry", "Forth", "Group", "Delay", "Equal", "Forty", "Grown", "Depth", "Error", "Forum", "Guard", "Doing", "Event", "Found", "Guess", "Doubt", "Every", "Frame", "Guest", "Dozen", "Exact", "Frank", "Guide", "Draft", "Exist", "Fraud", "Happy", "Drama", "Extra", "Fresh", "Harry", "Drawn", "Faith", "Front", "Heart", "Dream", "False", "Fruit", "Heavy", "Dress", "Fault", "Fully", "Hence", "Drill", "Fiber", "Funny", "Night", "Drink", "Field", "Giant", "Horse", "Drive", "Fifth", "Given", "Hotel", "Drove", "Fifty", "Glass", "House", "Dying", "Fight", "Globe", "Human", "Eager", "Final", "Going", "Ideal", "Early", "First", "Grace", "Image", "Earth", "Fixed", "Grade", "Index", "Eight", "Flash", "Grand", "Inner", "Elite", "Fleet", "Grant", "Input", "Empty", "Floor", "Grass", "Issue", "Enemy", "Fluid", "Great", "Irony", "Enjoy", "Focus", "Green", "Juice", "Enter", "Force", "Gross", "Joint", "Judge", "Metal", "Media", "Newly", "Known", "Local", "Might", "Noise", "Label", "Logic", "Minor", "North", "Large", "Loose", "Minus", "Noted", "Laser", "Lower", "Mixed", "Novel", "Later", "Lucky", "Model", "Nurse", "Laugh", "Lunch", "Money", "Occur", "Layer", "Lying", "Month", "Ocean", "Learn", "Magic", "Moral", "Offer", "Lease", "Major", "Motor", "Often", "Least", "Maker", "Mount", "Order", "Leave", "March", "Mouse", "Other", "Legal", "Music", "Mouth", "Ought", "Level", "Match", "Movie", "Paint", "Light", "Mayor", "Needs", "Paper", "Limit", "Meant", "Never", "Party", "Peace", "Power", "Radio", "Round", "Panel", "Press", "Raise", "Route", "Phase", "Price", "Range", "Royal", "Phone", "Pride", "Rapid", "Rural", "Photo", "Prime", "Ratio", "Scale", "Piece", "Print", "Reach", "Scene", "Pilot", "Prior", "Ready", "Scope", "Pitch", "Prize", "Refer", "Score", "Place", "Proof", "Right", "Sense", "Plain", "Proud", "Rival", "Serve", "Plane", "Prove", "River", "Seven", "Plant", "Queen", "Quick", "Shall", "Plate", "Sixth", "Stand", "Shape", "Point", "Quiet", "Roman", "Share", "Pound", "Quite", "Rough", "Sharp", "Sheet", "Spare", "Style", "Times", "Shelf", "Speak", "Sugar", "Tired", "Shell", "Speed", "Suite", "Title", "Shift", "Spend", "Super", "Today", "Shirt", "Spent", "Sweet", "Topic", "Shock", "Split", "Table", "Total", "Shoot", "Spoke", "Taken", "Touch", "Short", "Sport", "Taste", "Tough", "Shown", "Staff", "Taxes", "Tower", "Sight", "Stage", "Teach", "Track", "Since", "Stake", "Teeth", "Trade", "Sixty", "Start", "Texas", "Treat", "Sized", "State", "Thank", "Trend", "Skill", "Steam", "Theft", "Trial", "Sleep", "Steel", "Their", "Tried", "Slide", "Stick", "Theme", "Tries", "Small", "Still", "There", "Truck", "Smart", "Stock", "These", "Truly", "Smile", "Stone", "Thick", "Trust", "Smith", "Stood", "Thing", "Truth", "Smoke", "Store", "Think", "Twice", "Solid", "Storm", "Third", "Under", "Solve", "Story", "Those", "Undue", "Sorry", "Strip", "Three", "Union", "Sound", "Stuck", "Threw", "Unity", "South", "Study", "Throw", "Until", "Space", "Stuff", "Tight", "Upper", "Upset", "Whole", "Waste", "Wound", "Urban", "Whose", "Watch", "Write", "Usage", "Woman", "Water", "Wrong", "Usual", "Train", "Wheel", "Wrote", "Valid", "World", "Where", "Yield", "Value", "Worry", "Which", "Young", "Video", "Worse", "While", "Youth", "Virus", "Worst", "White", "Worth", "Visit", "Would", "Vital", "Voice", "Clove", "Queer"]

let gameEnded = false;
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let answer = [];
let word = [];
let firstGuess = secondGuess = thirdGuess = fourthGuess = fifthGuess = sixthGuess = 0;
let currentRow = 1;

window.addEventListener("DOMContentLoaded", domLoaded);

window.addEventListener("keydown", function (e) {

    let buttonPressed = `${e.key}`;

    if (word.length < 5 && letters.indexOf(buttonPressed) !== -1) {
    
        word.push(buttonPressed.toUpperCase());
        updateGrid();
        
    } else if (buttonPressed === "Enter") {
    
        enter();
        
    } else if (buttonPressed === "Backspace") {
    
        back();
    }

},false);

function domLoaded() {

    const keyboard = getKeyboardButtons();
    
    pickRandomWord();
    
    document.getElementById("enterButton").addEventListener("click", function () { enter(); });
    document.getElementById("backButton").addEventListener("click", function () { back(); });
    document.getElementById("newGameButton").addEventListener("click", function () { newGame(); });

    for (let button of keyboard) {
 
        button.addEventListener("click", function () { letterClicked(button); });
    }
}

function newGame() {

    if (gameEnded === true) {
    
        const keyboard = getKeyboardButtons();
        const grid = getGridCells();
        
        for (let button of keyboard) {
    
            button.style.backgroundColor = "";
        }
    
        for (let cell of grid) {
    
            if (cell.style.backgroundColor !== "white") {
            
                cell.style.backgroundColor = "white";
                cell.innerHTML = "";
            }
        }
        
        pickRandomWord();
        
        console.log(answer[0] + answer[1] + answer[2] + answer[3] + answer[4]);
        
        document.getElementById("gamePrompt").innerHTML = "Enter a word...";
        gameEnded = false;
        word = [];
        currentRow = 1;
    }
}

function getKeyboardButtons() {

    return document.querySelectorAll("#letters1 > button, #letters2 > button, #letters3 > button");
}

function getGridCells() {

    return document.querySelectorAll("#grid > div");
}

function letterClicked(button) {

    if (word.length < 5) {
    
        word.push(button.innerHTML);
        updateGrid();
    }
}

function updateGrid() {

    let row = document.getElementsByClassName("r" + currentRow);
    
    for (i = 0; i < word.length; i++) {
    
        row[i].innerHTML = word[i];
    }
}

function updateButton(letter, color) {

    const keyboard = getKeyboardButtons();
    
    for (let button of keyboard) {
    
        if (button.innerHTML === letter && button.style.backgroundColor !== "rgb(87, 191, 61)") {
    
            button.style.backgroundColor = color;   
        }
    }
}

function checkForWin() {

    let row = document.getElementsByClassName("r" + currentRow);
    let correct = true;
    
    for (i = 0; i < row.length; i++) {
    
        if (row[i].style.backgroundColor !== "rgb(87, 191, 61)") {
        
            correct = false;
            break;
        }
    }
    
    return correct;
}

function enter() {

    document.getElementById("newGameButton").blur();

    if (word.length === 5 && gameEnded === false /*&& checkForValidWord() === true*/) {
        
        let row = document.getElementsByClassName("r" + currentRow);
        let color = "";
        
        for (i = 0; i < word.length; i++) {
        
            if (word[i] === answer[i]) {
            
                color = "rgb(87, 191, 61)";
                row[i].style.backgroundColor = "rgb(87, 191, 61)";
                
            } else if (word[i] === answer[0] || word[i] === answer[1] || word[i] === answer[2] || word[i] === answer[3] || word[i] === answer[4]) {
            
                color = "rgb(222, 201, 47)";
                row[i].style.backgroundColor = "rgb(222, 201, 47)";
                
            } else {
            
                color = "rgb(128, 128, 128)";
                row[i].style.backgroundColor = "rgb(128, 128, 128)";
            }
            
            updateButton(word[i], color);
        }
        
        if (checkForWin() === true) {
            
            //updateDistribution();
            document.getElementById("gamePrompt").innerHTML = "Good job, son!";
            gameEnded = true;
        
        } else if (currentRow === 6) {
            
            //updateDistribution();
            document.getElementById("gamePrompt").innerHTML = "You are a disappointment, son.";
            gameEnded = true;
            
        } else {
        
            document.getElementById("gamePrompt").innerHTML = "Interesting choice...";
            word = [];
            currentRow++;
        }
        
    } else if (word.length < 5 && gameEnded === false) {
    
        document.getElementById("gamePrompt").innerHTML = "Your word ain't long enough, partner!";
        
    }/* else if (checkForValidWord() === false) {
    
        document.getElementById("gamePrompt").innerHTML = "Word not found in word bank!";
    }*/
}

/*function updateDistribution() {

    let bars = document.querySelectorAll("div[id~=\"bar\"]");
    
    for (let bar of bars) {
    
        if (bar) {
        
        }
    }
    
    if (currentRow === 1) {
        firstGuess++;
    } else if (currentRow === 2) {
        secondGuess++;
    } else if (currentRow === 3) {
        thirdGuess++;
    } else if (currentRow === 4) {
        fourthGuess++;
    } else if (currentRow === 5) {
        fifthGuess++;
    } else {
        sixthGuess++;
    }
    
    
    
    bar.style.width = "375px";
}*/

/*function checkForValidWord() {

    let wordToCheck = word[0].toUpperCase() + word[1].toLowerCase() + word[2].toLowerCase() + word[3].toLowerCase() + word[4].toLowerCase();
    let found = false;
    
    for (i = 0; i < wordBank.length; i++) {
    
        if (wordToCheck === wordBank[i]) {
            
            found = true;
            break;
        }
    }
    
    return found;
}*/

function back() {

    if (word.length > 0 && gameEnded === false) {
    
        let row = document.getElementsByClassName("r" + currentRow);
        row[word.length - 1].innerHTML = "";
        word.splice(word.length - 1, 1);
    }
}

function pickRandomWord() {

    let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    
    console.log(randomWord.toUpperCase());
    
    answer = randomWord.split('');
    
    for (i = 0; i < answer.length; i++) {
    
        answer[i] = answer[i].toUpperCase();
    }
}