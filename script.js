let gridSize = 16;

const container = document.getElementById('container');

container.style.display = "grid";
container.style.gridTemplateColumns = `repeat( ${gridSize}, 1fr)`;
container.style.gridTemplateRows = `repeat( ${gridSize}, ${85/gridSize}vh)`;

let num =1;

for (let rows = 0; rows < gridSize; rows++){
    for (let columns = 0; columns < gridSize; columns++){
        const div = document.createElement('div');
        div.style.border = "solid #000000";
        div.classList.add('box')
        //div.textContent = num;
        num++;
        container.appendChild(div);
    }
}

let hoveredBox;

container.onmouseover = function(event){
    let target = event.target;
    if (target.className != 'box') return;
    highlight(target);
}

function highlight(div){
    selectedDiv = div;
    if(selectedDiv){
        div.classList.remove('hovered');
    }
    div.classList.add('hovered');
}
