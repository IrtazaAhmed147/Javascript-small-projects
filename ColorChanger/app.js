const colors = ["red", "blue", "green", "yellow", "black", 'purple', 'orange'];
const heading = document.querySelector('#heading')

function changeColor() {
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
    heading.innerHTML = document.body.style.backgroundColor
}
