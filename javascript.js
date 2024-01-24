let container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.classList.toggle('row');
    for (let i = 0; i < 16; i++) {
        let div = document.createElement('div');
        div.classList.toggle('square');
        div.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = 'black';
        });
        row.appendChild(div);
    }
    container.appendChild(row);
}

let button = document.querySelector('button');

function newGrid() {
    let number = prompt('Please enter the number of squares that you would like per side. Max: 100', '1');
    if (number <= 100) {
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        for (let i = 0; i < number; i++) {
            let row = document.createElement('div');
            row.classList.toggle('row');
            for (let i = 0; i < number; i++) {
                let div = document.createElement('div');
                div.classList.toggle('square');
                div.addEventListener('mouseenter', (e) => {
                    e.target.style.backgroundColor = 'black';
                });
                row.appendChild(div);
            }
            container.appendChild(row);
        }
    }
    else if (number > 100) {
        return newGrid();
    }    
}

button.addEventListener('click', newGrid);







