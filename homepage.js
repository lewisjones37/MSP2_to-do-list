const textEl = document.getElementById('text')
const text = '2DAY 2MORROW 2DO!'
let idx = 1
let speed = 180

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {

        idx = 1

    }

    setTimeout(writeText, speed)
}