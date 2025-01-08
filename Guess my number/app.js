let checkBtn = document.getElementById('check');
let randomNum = Math.ceil(Math.random() * 20);
let userInput = document.getElementById('input');
let text = document.getElementById('text');
let scoreHtml = document.getElementById('score');
let highScoreHtml = document.getElementById('highScore');
let selection = document.getElementById('selection');
let againBtn = document.getElementById('again');
let levelHtml = document.getElementById('level');

let score = 20;
let highScore = 0;
let level = 1;
let maxLevel = 5;
let selectionCount = 5;


console.log(randomNum)
function resetLevel() {
    selectionCount = 6 - level; 
    randomNum = Math.ceil(Math.random() * 20);
    selection.innerHTML = selectionCount;
    userInput.value = '';
    checkBtn.disabled = false;
    console.log(randomNum)
}

function resetGame() {
    level = 1;
    score = 20;
    levelHtml.innerHTML = `Level ${level}`;
    scoreHtml.innerHTML = score;
    highScoreHtml.innerHTML = highScore;
    resetLevel();
    text.innerHTML = `Guess the number!`;
}

checkBtn.addEventListener('click', function () {
    if (userInput.value.length > 2) {
        userInput.value = userInput.value.slice(0, 2);
    }

    if (userInput.value > 20 || userInput.value < 1) {
        text.innerHTML = `Guess the number between 1 to 20`;
        return;
    }

    if (userInput.value == randomNum) {
        text.innerHTML = `You guessed it right! Ready for Level ${level + 1}`;
        if (level < maxLevel) {
            level++;
            levelHtml.innerHTML = `Level ${level}`;
            resetLevel();
        } else {
            highScore += score;
            highScoreHtml.innerHTML = highScore;
            text.innerHTML = `Congratulations! You completed all levels!`;
            checkBtn.disabled = true;
        }
    } else {
        score--;
        scoreHtml.innerHTML = score;
        text.innerHTML = userInput.value > randomNum ? `Your guess is too high` : `Your guess is too low`;

        selectionCount--;
        selection.innerHTML = selectionCount;

        if (selectionCount == 0) {
            if (score > 0) {
                text.innerHTML = `Level failed! Try again.`;
                resetLevel();
            } else {
                text.innerHTML = `Game Over! You lost Reset game`;
                checkBtn.disabled = true;
            }
        }

        if (score == 0) {
            text.innerHTML = `Game Over! You lost Reset game`;
            checkBtn.disabled = true;
        }
    }
});

againBtn.addEventListener('click', function () {
    resetGame();
});
