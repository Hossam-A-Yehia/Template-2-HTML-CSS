let stats = document.querySelector(".stats")
let spans = document.querySelectorAll(".stats .box #count")
let started = false

console.log(!started)
function startCount (num) {
    let goal = num.dataset.count
    console.log(goal)
    let counter = setInterval((e) => {
        num.textContent++
        if (num.textContent == goal) {
            clearInterval(counter)
        }
    }, 1000 / goal)
}


window.onscroll = function () {
    if (window.scrollY >= stats.offsetTop - 150) {
        if (!started) {
            spans.forEach ((num) => startCount(num))
        }
        started = true
    }
}