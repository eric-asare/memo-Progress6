// client connects to the server
let socket = io();

//confirm that the client is connected
socket.on('connect', () => {
    console.log('connected to the server');
    // now that client has connected to server, emit name and room information
    let data = {
        'name': sessionStorage.getItem('name'),
        'room': sessionStorage.getItem('room')
    }
    socket.emit('userData', data);
})


// limiting number of people in room to 2
socket.on('maxUsersReached', () => {
    alert('This room is full. Please go back and try to join another room');

    document.getElementById("game-form").innerHTML = ""

})

// receive game data from server
socket.on('gameBegins', (gameData) => {
    gameData = gameData.roomName;

    let gameWindow = document.getElementById('game-box-msgs');

    for (let i = 0; i < gameData.length; i++) {
        console.log(gameData[i]);

        let word = document.createElement('p');
        word.innerText = gameData[i];
        gameWindow.appendChild(word);
    }

    // side the start button
    document.getElementById('start-button').style.visibility = 'hidden';

    // timeSeconds needed for each level to be included in gameData 
    let timeSecond = 5;
    let timeH = document.getElementById("game-timer");

    displayTime(timeSecond);

    let countDown = setInterval(() => {
        timeSecond--;
        displayTime(timeSecond);
        if (timeSecond == 0 || timeSecond < 1) {
            endCount();
            clearInterval(countDown);
        }
    }, 1000);

    // Timer Function

    function displayTime(second) {
        let min = Math.floor(second / 60);
        let sec = Math.floor(second % 60);
        timeH.innerHTML = `
${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
`;
    }

    function endCount() {
        timeH.innerHTML = "Time Out: Enter Words You Remember Below";

        gameWindow.innerHTML = " ";

        // Show Words Input and Send Button
        let msgInput = document.getElementById('word-input');
        msgInput.style.visibility = 'visible';


        let sendButton = document.getElementById('send-button');
        sendButton.style.visibility = 'visible';

        document.getElementById('info').innerHTML = "💡 Enter below as much words as you can recall";
    }

})

// get progress data and show on game window
socket.on('currentScore', (progressData) => {
    // console.log(progressData);

    let userName = "<span style='color: " + progressData.nameColor + ";'>" + progressData.name + "</span>"
    let separator = "<span style='color: " + 'black' + ";'>" + ": " + "</span>"
    let word = "<span style='color: " + progressData.color + ";'>" + progressData.data + "</span>"

    let spans = [userName, separator, word];

    let texthtml = spans.join(" ");

    let paragraph = document.createElement('p');

    paragraph.innerHTML = texthtml;

    let gameWindow = document.getElementById('game-box-msgs');

    gameWindow.appendChild(paragraph);

    gameWindow.scrollTop = gameWindow.scrollHeight;


    // add data to window screen and score to total score
    let gameScore = document.getElementById('game-score');
    gameScore.innerHTML = progressData.score;



})

//receive old messages
socket.on('pastMessages', (data) => {
    console.log(data);
})

socket.on('userTyping', () => {
    console.log("user Typing");
})


//2) get the input from the user, on click event we get the information (c)

window.addEventListener('load', () => {
    init();

    let userName = document.getElementById('user-name');
    userName.innerHTML = "Name:" + sessionStorage.getItem('name');

    let gameLevel = document.getElementById('game-header-msg')
    gameLevel.innerHTML = "Level: " + sessionStorage.getItem('room').toUpperCase();



    let gameForm = document.getElementById('game-form');

    // Hide Words Input and Send Button
    let msgInput = document.getElementById('word-input');
    msgInput.style.visibility = 'hidden';


    let sendButton = document.getElementById('send-button');
    sendButton.style.visibility = 'hidden';

    // listen for start button and emit data
    let startButton = document.getElementById('start-button');
    startButton.addEventListener('click', () => {
        socket.emit('gameStart');
    })


    // send words that you remember

    gameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let name = sessionStorage.getItem('name');
        let word = document.getElementById('word-input').value;
        // console.log(name, word);

        //emit the information to the server
        wordObject = {
            'name': name,
            'word': word
        }

        console.log(wordObject);
        socket.emit('wordInput', wordObject);
    })

    //code to see if any user is typing
    let messageInput = document.getElementById('word-input');
    messageInput.onkeypress = () => {
        console.log('typing')
        socket.emit('userTyping');
    }

})



class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}



function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}