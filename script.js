//const div = document.createElement('div');

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let clearButton = document.getElementById("clear");
output.innerHTML = `Choose your grid size`;


const container = document.getElementById('grid-container');

//sets the shadowbox style
function removeActiveStyle(buttons) {
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
}

//clear button 
function eraseAllColor(){
    let gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach( gridItem => {
        gridItem.style.backgroundColor = '#ffffff'
    });
}

function makeGrid(gridNumber){
    
    let gridArea = gridNumber * gridNumber
    container.style.setProperty("--grid-rows",gridNumber);
    container.style.setProperty("--grid-cols",gridNumber);
    //makes the grid and appends the grid items to it
    for(c = 0; c < (gridArea); c++){
        let cell = document.createElement("div");
        cell.classList.add("grid-item")
        //cell.classList.add("grid-item")
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

function generateColor(name, colors){
    const gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach((item) => {
        if (name === 'rainbow') {
          const randomColors = colors[Math.floor(
            Math.random() * colors.length)];
          item.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = randomColors;
          });
        } else if (name === 'black' || name === 'white') {
          item.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = colors;
          });
        } 
    });
}

//checks if the buttons were clicked and adds corresponding colors if they were chosen 
function chooseColor(){
    const colorButtons = document.querySelectorAll('.square');
    colorButtons.forEach((button) =>{
        button.addEventListener('click', () =>{
            removeActiveStyle(colorButtons);
            if (button.classList.contains('rainbow')){
                colorButtons[0].classList.add('active');
                generateColor('rainbow', ['#BF6A6D', '#A45256', '#EC6760', '#F88C5D', '#FDCF6D']);
            } else if (button.classList.contains('black')){
                colorButtons[1].classList.add('active');
                generateColor('black', ['#000000']);
            } else if (button.classList.contains('white')) {
                colorButtons[2].classList.add('active');
                generateColor('white', '#FFFFFF');
            }
        })
    })

}

//default grid size on load
makeGrid(5);
chooseColor();
//event listeners 
slider.addEventListener('mouseup', pixelSize);
clearButton.addEventListener('click', eraseAllColor);
 
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