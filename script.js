const container = document.querySelector('.container');
const btnContainer = document.querySelector('.button-container');
const gridContainer = document.querySelector('.grid-container');
const colorPicker = document.querySelector('input');
const para = document.querySelector('.gridStatus');
const gridOnOff = document.createElement('button');
gridOnOff.textContent = 'Grid ON/OFF'
gridOnOff.type = 'button';
gridOnOff.setAttribute('id', 'gridOnOff')
btnContainer.appendChild(gridOnOff);

const changeGridSize = document.createElement('button');
changeGridSize.textContent = 'Grid size'
changeGridSize.type = 'button';
changeGridSize.setAttribute('id', 'changeGrid')
btnContainer.appendChild(changeGridSize);

const eraser = document.createElement('button');
eraser.textContent = 'Eraser'
eraser.type = 'button';
eraser.setAttribute('id', 'eraser')
btnContainer.appendChild(eraser);

const randomColor = document.createElement('button');
randomColor.textContent = 'Random Color'
randomColor.type = 'button';
randomColor.setAttribute('id', 'randomColor')
btnContainer.appendChild(randomColor);

const clear = document.createElement('button');
clear.textContent = 'Clear'
clear.type = 'button';
clear.setAttribute('id', 'clear')
btnContainer.appendChild(clear);

createGrid();
rgbPicker();

gridOnOff.addEventListener('click', ()=>{
  const gridDivs = document.querySelectorAll('.grid-container div');
  gridDivs.forEach((element)=>{
    element.classList.toggle('grid');
  })
  if(!gridDivs[1].classList.contains('grid')){
    para.textContent= 'Grid OFF';
  }else{
    para.textContent= 'Grid ON';
  }
});
    
container.addEventListener('click', (event)=>{  
  const gridDivs = document.querySelectorAll('.grid-container div');
  let target = event.target;

  switch(target.id){
    case 'changeGrid':
        gridContainer.innerHTML ='';
        let gridSize = prompt('Enter grid size, Max grid 64x64', '32');
        while(gridSize > 64 || gridSize == '' || gridSize == 0){
          alert('Pick a number < 64');
          gridSize = prompt('Enter grid size, MAX 64x64', '32'); 
        }
        createGrid(gridSize);
        rgbPicker();
    break;
    case 'eraser':
        gridDivs.forEach((element)=>{
          element.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = 'rgb(255, 255, 255)';
          });
        });
    break;
    case 'randomColor':
        gridDivs.forEach((element)=>{
          element.addEventListener('mouseover', function(e) {
            const r = Math.floor(Math.random() * 255 + 1);
            const g = Math.floor(Math.random() * 255 + 1);
            const b = Math.floor(Math.random() * 255 + 1);
            e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
          });
        });
    break;
    case 'clear':
        gridDivs.forEach((element)=>{
          element.style.backgroundColor = 'white';
        });
    break;
    case 'favcolor':
        rgbPicker()
    break;
  }
});

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

function rgbPicker(){
  const gridDivs = document.querySelectorAll('.grid-container div');
  gridDivs.forEach((element)=>{
      element.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = `${colorPicker.value}`;
    });
  })
}