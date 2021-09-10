let colors = ["#00aefd", "#ffa400", "#07a787", "#ff7870", "black", "pink", "yellow", "#e74c3c", "#2979ff", "#f000"]
let buttonRandom = document.querySelector('body > div > button')
buttonRandom.addEventListener("click", function (el) {
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = randomColor
});






  