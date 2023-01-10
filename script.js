//const div = document.createElement('div');

const container = document.getElementById('grid-container');


function makeGrid(rows, cols){
    container.style.setProperty("--grid-rows",rows);
    container.style.setProperty("--grid-cols",cols);
    for(c = 0; c < (rows * cols); c++){
        let cell = document.createElement("div");
        cell.innerHTML = (c + 1);
        container.appendChild(cell).className = "grid-item";
    }
}

makeGrid(16,16);
 
/* function newGrid(num){
    container.style.setProperty('--grid-rows',num);
    container.style.setProperty('--grid-cols',num);
    for(let rows = 0; rows < num; rows++){
        for(let columns = 0; columns < num; columns++){
            let cell = document.createElement("div");
            cell.innerHTML = (columns + 1);
            container.appendChild(cell).className = "grid-item";
        }
    }
}
newGrid(16) */