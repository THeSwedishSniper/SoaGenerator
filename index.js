const messages = [
    "Zero them",
    "Bubble",
    "Sneak attack them",
    "Ask TSS for advice",
    "Talk shit in RC",

]


const messageDisplay = document.getElementById("messageDisplay");
const generateButton = document.getElementById("generateButton");

function random(){
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageDisplay.textContent = randomMessage;
}

generateButton.addEventListener("click", random);
