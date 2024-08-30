const sentences = [
    "Newton's laws of motion describe the relationship between a body and the forces acting on it.",
    "The unit of force is the Newton, which is equivalent to a kilogram meter per second squared.",
    "The acceleration due to gravity on Earth is approximately 9.8 meters per second squared.",
    "The speed of light in a vacuum is approximately 3 x 10^8 meters per second.",
    "Kinetic energy depends on the mass of the object",
    "Pressure is the force applied per unit area, measured in pascals.",
    "Ohm's Law relates voltage, current, and resistance in an electrical circuit, given by V = IR.",
    "Dimensional analysis involves expressing physical quantities in terms of fundamental dimensions like length, mass, and time.",
    "Significant figures in a measurement represent the precision of the measurement, with trailing zeros only counted if they are after a decimal point.",
    "The least count of an instrument is the smallest division it can measure accurately.",
    "Uniform velocity means an object covers equal distances in equal intervals of time.",
    "Acceleration is the rate of change of velocity with time and can be positive, negative, or zero.",
    "The equation of motion v=u+at relates initial velocity, final velocity, acceleration, and time.",
    "Displacement is the vector quantity that represents the change in position of an object.",
    "The average velocity for uniform acceleration is given by u+v/2, where u is the initial velocity and v is the final velocity.",
    "Free fall is the motion of an object under the influence of gravity.",
    "In projectile motion, the horizontal and vertical motions are independent of each other.",
    "Using dimensional analysis we can find out the equation of the physical quantity in terms of other physical quantity.",
    "When the change in velocity is increasing it is called positive acceleration.",
    "When the change in velocity is decreasing it is called negative acceleration",
    "The dimensions of every type of energy is [M L^2 T^-2].",
    "Units which are assumed and cannot be derived are called fundamental units.",
    "If something is Unit less it is also Dimension less.",
    "Refractive index is dimension less and thus unit less.",
    "The principle of homogeneity states that the dimensions of all terms on both sides of a dimensional equation must be the same.",
    "All non-zero digits are significant.",
    "All zeroes that are between non-zero digits are significant.",
    "When an objects position does not change over time, it is in state of rest.",
    "Motion in a straight line is called Rectilinear motion.",
    "The movement of an object along a circular path is called Circular motion.",
    "The motion of an object around a fixed axis in a circular path is called Rotational motion",
    "Oscillatory motion is the repeated back and forth motion of an object around a fixed point, also called the equilibrium point.",
    "A frame of reference is a coordinate system that helps study the motion of objects.",
    "The time of flight for a projectile is the total time it remains in the air.",
    "In uniform circular motion, the centripetal force acts toward the center of the circle, keeping the object in its circular path.",
    "The range of a projectile launched at an angle θ is maximized when θ is 45 degrees.",
    "The force transmitted through a rope, string or wire when pulled by forces acting from opposite sides is called Tension force.",
    "Tension remains same if the string is same, that is only for massless string.",
    "Free body diagram showcases all the forces acting on a body and not by it.",
    "Vector whose magnitude is zero is defined as null vector.",
    "An object that is in flight after being thrown is called projectile.",
    "The motion of projectile consists of 2 components of motion simultaneously that is along horizontal direction and along vertical direction with constant acceleration.",
    "Uniform circular motion is the motion of an object moving in a circle at a constant speed.",
    "Centripetal acceleration is the acceleration of an object moving in a circular path, with an acceleration vector that points towards the center of the circle.",
    "The push or pull of an object results in change in direction, speed and dimension.",
    "Newton's first law of motion states that an object at rest remains at rest or in uniform motion until and unless any external force is applied.",
    "According to Aristotle, external force is always required to keep an object in motion.",
    "According to Galileo, external force is always required to keep an object in motion, only if resistive force is present.",
    "If the net external force of an object is zero, then its acceleration will be equal to zero.",
    "Newton's third law of motion states that every action has an equal and opposite reaction.",
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
