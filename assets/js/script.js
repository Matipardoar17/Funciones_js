function pintar(color){
  ele.style.backgroundColor = color
  }
  const ele = document.getElementById("ele1")
  ele.style.backgroundColor = 'green'
  ele.addEventListener("click", function(){
    pintar("yellow")
  });

 