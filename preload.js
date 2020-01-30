const BYLINES = [
    "it's a bird! it's a plane! no, it's a",
    "dogs are good. but you know what's better?",
    "kick back, relax, and read a nice", 
    "hey look, it's a ",
    "take a break. take a",
    "you've got mail! it's a",
];

const DESC = [ 

]

function getRandomMessage(arr) {
    let message = arr[Math.floor(Math.random() * arr.length)];
    return message;
}

window.onload = () => {
    document.getElementById('resume-desc').innerHTML = getRandomMessage(BYLINES);
}