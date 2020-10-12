function makeDisplay(dim) {
    const sketchDisplay = document.querySelector('#mainDisplay');
    sketchDisplay.style.grid
    let c = 0;
    let i = 0;
    for (i; i < dim; i++) {
        for (c; c < dim; c++) {
            const box = document.createElement('div');
            box.classList.add('box');

            box.style.gridColumnStart = `${i + 1}`;
            box.style.gridColumnEnd = `${i + 2}`;
            box.style.gridRowStart = `${c + 1}`;
            box.style.gridRowEnd = `${c + 2}`;
            box.addEventListener('mouseover', function () {
                box.classList.add('boxFilled')
            })
            sketchDisplay.appendChild(box);
        }
        c = 0;
    }
}

const resetButton = document.getElementById("resetButton");
resetButton.onclick = function () {
    document.getElementById("mainDisplay").innerHTML = "";
    let newdim = prompt("How many squares per side? (Max 100)", "16");
    if (newdim != NaN && newdim>0 && newdim<=100) {
        let root = document.documentElement;
        root.style.setProperty('--dim', newdim);
        makeDisplay(newdim)}
};

let dim = 16;
makeDisplay(dim);
