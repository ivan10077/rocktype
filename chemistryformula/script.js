const sentences = [
    "Work in Progress...",
];

function getRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

function startTyping() {
    const referenceText = document.getElementById('reference-text');
    const typingText = document.getElementById('typing-text');
    referenceText.innerText = getRandomSentence();
    typingText.value = '';
    typingText.focus();
}

document.getElementById('generate-btn').addEventListener('click', startTyping);

document.getElementById('typing-text').addEventListener('input', function() {
    const referenceText = document.getElementById('reference-text').innerText;
    const userInput = this.value;
    const wpmElement = document.getElementById('wpm');
    
    const timeElapsed = (Date.now() - startTime) / 60000; 
    const wordCount = userInput.split(/\s+/).length;
    const wpm = Math.round(wordCount / timeElapsed);
    wpmElement.innerText = `WPM: ${wpm}`;
    
    let referenceTextStyle = referenceText.split('').map((char, index) => {
        if (index < userInput.length) {
            return userInput[index] === char ? char : `<span style="color: red;">${char}</span>`;
        }
        return `<span style="opacity: 0.5;">${char}</span>`;
    }).join('');
    
    document.getElementById('reference-text').innerHTML = referenceTextStyle;
});

let startTime;
document.getElementById('typing-text').addEventListener('focus', function() {
    if (!startTime) {
        startTime = Date.now();
    }
});
