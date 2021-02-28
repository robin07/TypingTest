const arrWord = ['Please take your dog, Cali, out for a walk – he really needs some exercise!',
    'What a beautiful day it is on the beach, here in beautiful and sunny Hawaii.',
    'I have three things to do today: wash my car, call my mother, and feed my dog.']



const msg = document.getElementById('randomMsg');
const text = document.getElementById('words');
const btn = document.getElementById('btn');

let startTime, endTime;
const playgame = () => {
    let index = Math.floor(Math.random() * arrWord.length);
    msg.innerText = arrWord[index];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = 'Done';
}

const endGame = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    //  console.log(totalTime);

    let textWrite = text.value;
    let count = wordCount(textWrite);

    let wpm = Math.floor((count / totalTime) * 60);
    let finalMsg = "Your speed is " + wpm + " per minute";
    finalMsg += compareWords(msg.innerText, textWrite);
    msg.innerText = finalMsg;
}

const wordCount = (str) => {
    let countBegin = str.split(" ").length;
    //   console.log(countBegin);
    return countBegin;
}

const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function (item, index) {
        if (item == words2[index]) {
            cnt++;
        }
    })

    let errorWords = (words1.length - cnt);
    return (cnt + "correct out of " + words.length + "and error are " + errorWords)
}


btn.addEventListener('click', function () {
    if (this.innerText == 'Start') {
        text.disabled = false;
        playgame();
    } else if (this.innerText == 'Done') {
        text.disabled = true;
        btn.innerText = 'Start';
        endGame();
    }
});