let checkBtn = document.getElementById('check')
let randomNum = Math.ceil(Math.random() * 20)
let userInput = document.getElementById('input')
let text = document.getElementById('text')
let scoreHtml = document.getElementById('score')
let highScoreHtml = document.getElementById('highScore')
let selection = document.getElementById('selection')
let againBtn = document.getElementById('again')
let levelHtml = document.getElementById('level')
let score = 20
let highScore = 0
let selectionCount = 5
let level = 1

console.log(randomNum)



checkBtn.addEventListener('click', function(){
    console.log(randomNum)
    if (userInput.value.length > 2) {
        userInput.value = userInput.value.slice(0, 2)
        
    } 
    if (userInput.value > 20) {
        text.innerHTML = `Guess the number between 1 to 20`
        return
    } 
    if (userInput.value == randomNum) {
        text.innerHTML = `you Guessed Right`
        checkBtn.disabled = true
        if (score > highScore) {
            highScore =  score
            highScoreHtml.innerHTML = highScore
        }
        if (score >= 15) {
            level++
            checkBtn.disabled = false
            levelHtml.innerHTML = `Level ${level}`
            text.innerHTML = `ready for level ${level}`
            randomNum = Math.ceil(Math.random() * 20)  
            
                selection.innerHTML = selectionCount


            
        }
    } else if (userInput.value > randomNum) {
        score--
        text.innerHTML = `your suggestion is high`
        scoreHtml.innerHTML = score
        if (level == 2) {
            selectionCount--
            selection.innerHTML = selectionCount
        } 
        if (selectionCount == 0) {

            randomNum = Math.ceil(Math.random() * 20)  
            selectionCount = 5
            selection.innerText = selectionCount
            score = 20
            scoreHtml.innerHTML = score
        }

    } else if (userInput.value < randomNum) {
        score--
        text.innerHTML = `your suggestion is low`
        scoreHtml.innerHTML = score
        if (level == 2) {
            selectionCount--
            selection.innerHTML = selectionCount
        }
        
        if (selectionCount == 0) {

            randomNum = Math.ceil(Math.random() * 20)  
            selectionCount = 5
            selection.innerText = selectionCount
            score = 20
            scoreHtml.innerHTML = score

        }

    }
})
function level2() {

}
againBtn.addEventListener('click', function(){
    score = 20
    scoreHtml.innerHTML = score
    randomNum = Math.ceil(Math.random() * 20)  
    console.log(randomNum)
    userInput.value = ''
    checkBtn.disabled = false
})