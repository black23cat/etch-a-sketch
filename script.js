const container = document.querySelector('.container');
const btnContainer = document.querySelector('.button-container');
const gridContainer = document.querySelector('.grid-container');
const colorPicker = document.querySelector('input')

function defaultColor(){
  const gridDivs = document.querySelectorAll('.grid-container div');
  gridDivs.forEach((element)=>{
      element.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = `${colorPicker.value}`;
    });
  })
}

function createGrid(gridSize=16){
  for(let i = 0; i < gridSize; i++){
    for(let j = 0; j < gridSize; j++){
      const div = document.createElement('div');
      div.style.width = `${(600/gridSize)}px`;
      div.style.height = `${(400/gridSize)}px`;
      div.classList.add('grid');
      gridContainer.appendChild(div);
    }
  }
}

createGrid();
defaultColor();