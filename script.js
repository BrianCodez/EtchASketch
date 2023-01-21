//const div = document.createElement('div');

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = `Choose your grid size`;


const container = document.getElementById('grid-container');




function makeGrid(gridNumber){
    
    let gridArea = gridNumber * gridNumber
    container.style.setProperty("--grid-rows",gridNumber);
    container.style.setProperty("--grid-cols",gridNumber);
    //makes the grid and appends the grid items to it
    for(c = 0; c < (gridArea); c++){
        let cell = document.createElement("div");
        cell.classList.add("grid-item")
        cell.onmouseover = function(){
            cell.innerHTML = (c + 1);
            return;
            }
        cell.classList.add("grid-item")
        container.appendChild(cell)
    }
}



function pixelSize (){
    let gridPixels = container.querySelectorAll('div');
    //displays the current pixel size under the slider
    slider.oninput = function() {
        output.innerHTML = `Grid size ${this.value} x ${this.value}`;
      }
    gridPixels.forEach(gridPixel => gridPixel.remove());
    makeGrid(slider.value);
}


makeGrid(5);

//event listeners 
slider.addEventListener('mouseup', pixelSize);
 
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