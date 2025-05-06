function tts() {
    // get user input from doc
    var input = document.getElementById('userPrompt').value;
    // init temp output for user
    var tmpOut = document.getElementById('tempOutput');
    // initialize tts api
    var speech = new SpeechSynthesisUtterance(input);
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.voice = 
    // read input out
    window.speechSynthesis.speak(speech);
    // temp output for user (wip message)
    tmpOut.innerText = "Sorry thats all I have to offer right now, thanks for coming here though :)";
}