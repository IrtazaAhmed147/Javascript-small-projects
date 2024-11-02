let counter = document.getElementById('counter')
let count = 0;

function increment() {
    count++
    counter.innerHTML = count

}
function decrement() {
    count--
    counter.innerHTML = count

}
function reset() {
    if (count !== 0) {
        count = 0
        counter.innerHTML = count
    }

}