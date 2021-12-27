//Matéo
var elem = document.getElementById('para');

function changeColor(newColor) {
    elem.style.color = newColor;
  }
  const contents = document.getElementsByClassName();
  const firstContent = contents[0];

  function randomColor(){
     var val1 = Math.floor(Math.random() * 255);
     var val2 = Math.floor(Math.random() * 255);
     var val3 = Math.floor(Math.random() * 255);
     elem.style.color = 'rgb('+val1 + "," +val2+","+val3+")";
    
  }