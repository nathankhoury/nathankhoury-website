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
            return "hohoho";
        default:
            return "hangup";
    }
}

function replyGif(id) {
    // show appropriate ben reaction gif
    var reactionGif;
    switch (id) {
        case 0:
            reactionGif = document.getElementById('benYes');
            reactionGif.style.display = "flex";
            break;
        case 1:
            reactionGif = document.getElementById('benNo');
            reactionGif.style.display = "flex";
            break;
        case 2:
            reactionGif = document.getElementById('benBen');
            reactionGif.style.display = "flex";
            break;
        case 3:
            reactionGif = document.getElementById('benUgh');
            reactionGif.style.display = "flex";
            break;
        case 4:
            reactionGif = document.getElementById('benHoHoHo');
            reactionGif.style.display = "flex";
            break;
        default:
            reactionGif = document.getElementById('benPhone');
            reactionGif.style.display = "flex";
            break;
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
    var responseAudio = document.getElementById(responseText);

    output.innerText = "Ben says: " + responseText;
    responseAudio.play();
    replyGif(responseID);
}

function clearReplyText() {
    var reply = document.getElementById('benResponse');
    reply.innerText = "";
}

function clearGifs() {
    var currGif;
    // clear initial gif
    currGif = document.getElementById('benPhone');
    currGif.style.display = "none";

    // clear output gifs
    currGif = document.getElementById('benYes');
    currGif.style.display = "none";
    currGif = document.getElementById('benNo');
    currGif.style.display = "none";
    currGif = document.getElementById('benBen');
    currGif.style.display = "none";
    currGif = document.getElementById('benUgh');
    currGif.style.display = "none";
    currGif = document.getElementById('benHoHoHo');
    currGif.style.display = "none";
}

// read user input out loud
function tts() {
    clearGifs();
    clearReplyText();
    // get user input from doc
    var input = "Hey Ben, " + document.getElementById('userPrompt').value;
    // initialize tts api
    var speech = new SpeechSynthesisUtterance(input);
    speech.volume = 1;
    speech.rate = 1.5;
    speech.pitch = 1;
    // read input out
    window.speechSynthesis.speak(speech);
    speech.onend = function() {
        response();
    }
}

function answerAudio() {
    var sound = document.getElementById('answer');
    sound.play();
}
