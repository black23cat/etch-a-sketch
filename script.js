const container = document.querySelector('.container');
const btnContainer = document.querySelector('.button-container');
const gridContainer = document.querySelector('.grid-container');
const colorPicker = document.querySelector('input')
const changeGridSize = document.createElement('button');
changeGridSize.textContent = 'Change grid size'
changeGridSize.type = 'button';
changeGridSize.setAttribute('id', 'changeGrid')
btnContainer.appendChild(changeGridSize);

createGrid();
defaultColor();
container.addEventListener('click', (event)=>{
  let target = event.target;

  switch(target.id){
    case 'changeGrid':
        gridContainer.innerHTML ='';
        let gridSize = prompt('Enter grid size, Max grid 64x64', '32');
        while(gridSize > 64){
          alert('Pick a number < 64');
          gridSize = prompt('Enter grid size, MAX 64x64', '32'); 
        }
        createGrid(gridSize);
        defaultColor();
    break;
    case 'colorPicker':
        defaultColor();
    break;
    
  }
});

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
