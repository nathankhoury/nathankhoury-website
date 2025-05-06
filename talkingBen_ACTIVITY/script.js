function reply(id) {
    // update ben text
    switch (id) {
        case 0:
            return "yes";
        case 1:
            return "no";
        case 2:
            return "ben";
        case 3:
            return "ugh";
        case 4:
            return "ho ho ho";
        default:
            return "ERROR null id";
    }
}

// yield ben's response
function response() {
    // get response text box (text output is temporary, gif+audio response is end goal)
    var output = document.getElementById('benResponse');
    // get the random response ID number
    var responseID;
    if (document.getElementById('forceYesNo').checked) {
        // yes/no reply
        responseID = Math.floor(Math.random() * 2);
    } else {
        // open reply
        responseID = Math.floor(Math.random() * 5);
    }
    var responseText = reply(responseID);
    output.innerText = "Ben says: " + responseText;
}

// read user input out loud
function tts() {
    // get user input from doc
    var input = "Hey Ben, I was wondering..." + document.getElementById('userPrompt').value;
    // init temp output for user
    var tmpOut = document.getElementById('tempOutput');
    // initialize tts api
    var speech = new SpeechSynthesisUtterance(input);
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    // read input out
    window.speechSynthesis.speak(speech);
    // ben response
    response();
    // temp output for user (wip message)
    tmpOut.innerText = "Sorry thats all I have to offer right now, thanks for coming here though :)";
}
