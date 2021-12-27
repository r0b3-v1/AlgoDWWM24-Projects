//Rémy 
var inputedA = document.createElement("INPUT");
inputedA.setAttribute("type","text");
inputedA.setAttribute("placeholder","Rentrer un chiffre");

var select = document.createElement("SELECT");
var optionPlus = document.createElement("OPTION");
optionPlus.setAttribute("option","+");
optionPlus.innerHTML = "+";
var optionMoins= document.createElement("OPTION");
optionMoins.setAttribute("option","-");
optionMoins.innerHTML = "-";
var optionMultiplier= document.createElement("OPTION");
optionMultiplier.setAttribute("option","*");
optionMultiplier.innerHTML = "*";
var optionDiviser= document.createElement("OPTION");
optionDiviser.innerHTML = "/";
optionDiviser.setAttribute("option","/");

select.appendChild(optionPlus);
select.appendChild(optionMoins);
select.appendChild(optionMultiplier);
select.appendChild(optionDiviser);

var inputedB = document.createElement("INPUT");
inputedB.setAttribute("type","text");
inputedB.setAttribute("placeholder","Rentrer un chiffre");

var button = document.createElement("BUTTON");
button.setAttribute("type","button");
button.setAttribute("id","btn");
button.innerHTML="Result";
button.onclick = function(e){calculate(getInputValue());};


var pResult = document.createElement("P");
pResult.setAttribute("id","result");

var bToAppend = document.getElementById('corps');

bToAppend.appendChild(inputedA);
bToAppend.appendChild(select);
bToAppend.appendChild(inputedB);
bToAppend.appendChild(button);
bToAppend.appendChild(document.createElement("br"));
bToAppend.appendChild(pResult);

function getInputValue(){
  var inputValA = inputedA.value;
  var inputValB = inputedB.value;
  var inputOp = select.value;
  console.log("getInputValue\nA : " + inputValA + "\nop : " + inputOp + "\nB : " + inputValB);
  return {'A':inputValA,'B':inputValB,'op':inputOp};
}


function calculate(values){
  console.log("calculate\nA : " + values.A + "\nop : " + values.op + "\nB : " + values.B);
  var n1 = parseInt(values.A);
  var n2 = parseInt(values.B);
  // var op = document.getElementById("op").value;
  var result;
  switch (values.op){
    case '+':
      result = n1+n2;
      break
      case '*':
      result = n1*n2;
      break
      case '/':
      result = n1/n2;
      break
      case '-':
      result = n1-n2;
      break
  }
  console.log('result : ' +result);
  document.getElementById("result").innerHTML = result;
  return result;
}