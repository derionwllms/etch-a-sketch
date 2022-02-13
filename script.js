let gridSize = 16;

const container = document.getElementById('container');
const clearBtn = document.getElementById('clear');
const boxes = document.getElementsByClassName('box');

container.style.display = "grid";
container.style.width = "95vw";
container.style.height = "95vh";
container.style.border = "solid #000000";

container.onmouseover = function(event){
    let target = event.target;
    if (target.className != 'box') return;
    highlight(target);
}

clearBtn.addEventListener('click', clearBoard);

function createBoard(size){
    for (let rows = 0; rows < gridSize; rows++){
        for (let columns = 0; columns < gridSize; columns++){
            const div = document.createElement('div');
            div.style.border = "solid #EFEFEF";
            div.style.borderWidth = "1px";
            div.classList.add('box');
            container.appendChild(div);
        }
    }
    container.style.gridTemplateColumns = `repeat( ${gridSize}, ${100/gridSize}%)`;
    container.style.gridTemplateRows = `repeat( ${gridSize}, ${100/gridSize}%)`;
}

function deleteBoard(){
    while(boxes.length >0){
        boxes[0].parentNode.removeChild(boxes[0]);
    }
}

function clear(e){
    if(!(e.classList.contains("hovered"))) return;
    e.classList.remove("hovered");
}

function clearBoard(){
    Array.from(boxes).forEach(clear);
    gridSize = prompt("how many boxes do you want on each side?");
    deleteBoard();
    createBoard(gridSize);
}

function highlight(div){
    if(div){
        div.classList.remove('hovered');
    }
    div.classList.add('hovered');
}

createBoard(16);