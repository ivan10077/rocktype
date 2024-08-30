const sentences = [
    "The chemical formula for water is H2O.",
    "1 mole = 6.023 x 10^23 particles",
    "The law of conservation of mass states that mass is neither created nor destroyed.",
    "The pH scale measures the acidity or basicity of a solution, with 7 being neutral.",
    "A covalent bond involves the sharing of electron pairs between atoms.",
    "An exothermic reaction releases energy in the form of heat to the surroundings.",
    "The empirical formula represents the simplest whole-number ratio of atoms in a compound.",
    "Anything that occupies space and has mass is called matter.",
    "The molecular formula shows the actual number of each type of atom in a molecule.",
    "Avogadro proposed that equal volumes of all gases at the same temperature and pressure should contain equal number of molecules.",
    "Law of multiple proportions states that if two elements can combine to form more than one compound, the masses of one element that combine with a fixed mass of the other element, are in the ratio of small whole numbers.",
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
