const textEl = document.getElementById('text');
const text = 'Emilys todos';
const buttons = document.querySelectorAll('.ripple');
let idx = 1;
let speed = 250;

writeText();

function writeText() {
    textEl.innerText = text.slice(0, idx);

    idx++;

    if(idx > text.length) {

        idx = 1;

    }

    setTimeout(writeText, speed);
}

/*-action for ripple effect on buttons*/
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    });
});