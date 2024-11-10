
const flags = [
    { country: 'Thailand', img: "imgFlags/Flag-Thailand.webp" },
    { country: 'That not country', img: "imgFlags/mukrock.png"},
    { country: 'Laos', img: "imgFlags/lao.png"},
    { country: 'Vietnam', img: "imgFlags/Vietnam.png"},
    { country: 'Malaysia', img: "imgFlags/Malaysia.png"},
    { country: 'Austria', img: "imgFlags/Austria.png"},
    { country: 'United States', img: "imgFlags/United States.png"},
    { country: 'United Kingdom', img: "imgFlags/United_kingdom_(3-5).png"},
    { country: 'france', img: "imgFlags/france.png"},
    { country: 'germany', img: "imgFlags/germany.png"},
    { country: 'Hungary', img: "imgFlags/Flag_of_Hungary.svg.png"},
    { country: 'japan', img: "imgFlags/japan.png"},
    { country: 'taiwan', img: "imgFlags/taiwan.png"},
    { country: 'kazakhstan', img: "imgFlags/kazakhstan.png"},
    { country: 'singapore', img: "imgFlags/singapore.png"},
    { country: 'cambodia', img: "imgFlags/cambodia.png"},
    { country: 'korea', img: "imgFlags/korea.png"},
    { country: 'australia', img: "imgFlags/australia.png"},
    { country: 'brazil', img: "imgFlags/brazil.png"},
    { country: 'netherlands', img: "imgFlags/netherlands.png"},
    { country: 'norway', img: "imgFlags/norway.png"},
    { country: 'sweden', img: "imgFlags/sweden.png"},
    { country: 'morocco', img: "imgFlags/morocco.png"},
    { country: 'italy', img: "imgFlags/italy.png"},
    { country: 'new zealand', img: "imgFlags/new zealand.png"},
    { country: 'poland', img: "imgFlags/poland.png"},
    { country: 'indonesia', img: "imgFlags/indonesia.png"},
    { country: 'mexico', img: "imgFlags/mexico.png"},
    { country: 'spain', img: "imgFlags/spain.png"},
    { country: 'russia', img: "imgFlags/russia.png"},
    { country: 'czech republic', img: "imgFlags/czech republic.png"},
    { country: 'slovakia', img: "imgFlags/slovakia.png"},
    { country: 'bosnia', img: "imgFlags/bosnia.png"},
    { country: 'egypt', img: "imgFlags/egypt.png"}

];

let currentFlagIndex = 0;
let score = 0;
let maxRound = 10;
let rotation = 0;


function loadFlag(){
    if (currentFlagIndex < maxRound){
        const currentFlagIndex = Math.floor(Math.random() * flags.length);
        const flag = flags[currentFlagIndex];
        document.getElementById('flagImage').src = flag.img;
        createChoices(flag.country);
        Score()
        currentFlag()
        mainMenu()
       
    } else {
        Endgame();
        
    }
}

function createChoices(correctAnswer){
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';

    let answer = [correctAnswer];
    while (answer.length < 4) {
        const randomCountry = flags[Math.floor(Math.random() * flags.length)].country;
        if (!answer.includes(randomCountry)) {
            answer.push(randomCountry);
            
        }
    }

    answer = answer.sort(() => Math.random() - 0.5);

    answer.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = () => checkGuess(answer, correctAnswer, button);
        choicesContainer.appendChild(button);
    });
}

function checkGuess(userGuess, correctAnswer, button){
    const resultElement = document.getElementById('result');
    if (userGuess === correctAnswer) {
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
        resultElement.style.borderLeft = "8px solid green"
        button.style.backgroundColor = "green";
        score++;
        currentFlagIndex++;
       
    } else {
        resultElement.textContent = `Wrong! correct is ${correctAnswer}`;
        resultElement.style.color = "red";
        resultElement.style.borderLeft = "8px solid red"
        button.style.backgroundColor = "red";
        currentFlagIndex++;
       
    }

    textNPC(userGuess, correctAnswer);
    setTimeout(loadFlag, 500);
}

function Endgame(){
  
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';

    const resetButton = document.getElementById('restartbutton')
    resetButton.style.display = 'block';
  
}

function resetGame(){
    score = 0;
    currentFlagIndex = 0;

    const resetButton = document.getElementById('restartbutton');
    resetButton.style.display = 'none';
    loadFlag();
}

function textNPC(userGuess, correctAnswer){
    const TextElement = document.getElementById('textnpc');
    const resultElement = document.getElementById('result');
    if (resultElement.textContent === "Correct!") {
        TextElement.textContent = "เก่งเหมือนกันนะเนี่ย"
    } else {
        TextElement.textContent = "แค่ธงยังตอบไม่ถูก"
    }
}

function Score(){
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Score: ${score}`;    

}

function currentFlag(){
    const FlagCurrent = document.getElementById('currentFlag');
    FlagCurrent.textContent = `currentFlag: ${currentFlagIndex}`;
}
function mainMenu(){
    const Main = document.getElementById('Main-menu');
    Main.textContent = `max round: ${maxRound}`;
}


function rotateimg(){
    rotation += 180;
    const image = document.getElementById('flagImage');
    image.style.filter = 'blur(15px)';
    document.getElementById("flagImage").style.transform = `rotate(${rotation}deg)`;
}
function norotateimg(){
    rotation = 0;
    const image = document.getElementById('flagImage');
    image.style.filter = 'blur(0px)';
    document.getElementById("flagImage").style.transform = `rotate(${rotation}deg)`;
}


loadFlag();