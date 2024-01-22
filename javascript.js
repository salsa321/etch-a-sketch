let container = document.querySelector('#container');
let row1 = document.querySelector('#row1');
let row2 = document.querySelector('#row2');
let row3 = document.querySelector('#row3');
let row4 = document.querySelector('#row4');
let row5 = document.querySelector('#row5');
let row6 = document.querySelector('#row6');
let row7 = document.querySelector('#row7');
let row8 = document.querySelector('#row8');
let row9 = document.querySelector('#row9');
let row10 = document.querySelector('#row10');
let row11 = document.querySelector('#row11');
let row12 = document.querySelector('#row12');
let row13 = document.querySelector('#row13');
let row14 = document.querySelector('#row14');
let row15 = document.querySelector('#row15');
let row16 = document.querySelector('#row16');

for (let i = 0; i < 256; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.toggle('squares');
    newDiv.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = 'black';
    });
    if(i < 16) {
        row1.appendChild(newDiv);
    }
    else if (i >= 16 && i < 32) {
        row2.appendChild(newDiv);
    }
    else if (i >= 32 && i < 48) {
        row3.appendChild(newDiv);
    }
    else if (i >= 48 && i < 64) {
        row4.appendChild(newDiv);
    }
    else if (i >= 64 && i < 80) {
        row5.appendChild(newDiv);
    }
    else if (i >= 80 && i < 96) {
        row6.appendChild(newDiv);
    }
    else if (i >= 96 && i < 112) {
        row7.appendChild(newDiv);
    }
    else if (i >= 112 && i < 128) {
        row8.appendChild(newDiv);
    }
    else if (i >= 128 && i < 144) {
        row9.appendChild(newDiv);
    }
    else if (i >= 144 && i < 160) {
        row10.appendChild(newDiv);
    }
    else if (i >= 160 && i < 176) {
        row11.appendChild(newDiv);
    }
    else if (i >= 176 && i < 192) {
        row12.appendChild(newDiv);
    }
    else if (i >= 192 && i < 208) {
        row13.appendChild(newDiv);
    }
    else if (i >= 208 && i < 224) {
        row14.appendChild(newDiv);
    }
    else if (i >= 224 && i < 240) {
        row15.appendChild(newDiv);
    }
    else if (i >= 240) {
        row16.appendChild(newDiv);
    }
}