const container = document.querySelector('.container');
const btnContainer = document.querySelector('.button-container');
const gridContainer = document.querySelector('.grid-container');

for(let i = 0; i < 16; i++){
  for(let j = 0; j < 16; j++){
    const div = document.createElement('div');
    div.style.width = `${(600/16)}px`;
    div.style.height = `${(400/16)}px`;
    div.classList.add('grid');
    gridContainer.appendChild(div);
  }
}

const gridDivs = document.querySelectorAll('.grid-container div');
gridDivs.forEach((element)=>{
    element.addEventListener('mouseover', function(e) {
      e.target.style.backgroundColor = 'limegreen';
    });
})
