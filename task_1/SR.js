
window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'ar';
recognition.interimResults = true;

startButton = document.querySelector('button');        

startButton.addEventListener('click', function () {
    try {
        recognition.start();
    } catch (error) {
        console.log("It`s recording now") // if click while it`s working
    }
});

recognition.onstart = function () {
    startButton.style.backgroundColor = '#8ad1c0'; 
    startButton.innerHTML = 'talk';
};

recognition.onspeechend = function () {
    startButton.style.backgroundColor = '#808080';
    startButton.innerHTML = 'start';
    recognition.stop();
};

recognition.onresult = function (event) {            
    const speechToText = event.results[0][0].transcript;
    document.querySelector('p').innerHTML = speechToText;
};   
