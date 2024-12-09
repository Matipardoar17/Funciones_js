
const cambioColor = document.querySelectorAll('.cuadro')

cambioColor.forEach(function(div) {
div.addEventListener('click', () =>{
  div.style.backgroundColor = 'black'
})
})

let nuevoColor = ''
function presionarTecla(event) {
  const key = event.key
  if (key === 'a') {
    nuevoColor = 'pink'
  }else if (key === 's') {
    nuevoColor = 'grey'
  }else if (key === 'd') {
    nuevoColor = 'lightblue'
  }

  document.getElementById("key").style.backgroundColor = nuevoColor
}
window.addEventListener('keydown', presionarTecla)



const crearDiv = (color) => {
const nuevoDiv = document.createElement('div') 
nuevoDiv.style.height = '200px'
nuevoDiv.style.width = '200px'
nuevoDiv.style.marginBottom = '50px'
nuevoDiv.style.marginTop = '50px'
nuevoDiv.style.backgroundColor = color;

document.body.appendChild(nuevoDiv);
}
document.addEventListener('keydown', function (event) {
  if (event.key === 'q') {
  crearDiv('purple')
  } else if (event.key === 'w') {
  crearDiv('grey')
  } else if (event.key === 'e') {
  crearDiv('brown')
  }
  })