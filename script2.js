let isMouseDown ;

document.addEventListener("mousedown", () => isMouseDown = true);
document.addEventListener("mouseup", () => isMouseDown = false);


let squaresNumber=101;

const mother= document.createElement("div")
bod.appendChild(mother)
mother.id="mum"

const resetbtn= document.createElement("button");
resetbtn.addEventListener("click", resetChange);
resetbtn.textContent="Grid Size";
bod.appendChild(resetbtn);

let sum=0;

function initialSquares(numb){
 for(i=0;i<(numb*numb);i++ ){
  const content2 = document.createElement("div");
  mother.appendChild(content2);
  //content2.textContent="div"
  content2.classList.add("divisions");
  content2.style.width="60px"

    function random(number) {
  return Math.floor(Math.random() * (number + 1));
}


 
  let opacity=sum;
  
 function chanceColor(){
  opacity+=0.1;
  content2.style.backgroundColor=`rgb(${random(255)} ${random(255)} ${random(255)}/ ${opacity})`;
  
 }
    content2.addEventListener("mousedown", chanceColor);

        content2.addEventListener("mouseover", () => {
      if (isMouseDown) {chanceColor()};
      
    });






 
 }
 
}
 let content= initialSquares(16) 
  

 



 


function resetChange(){
  document.body.innerHTML = '';
    

    let squaresNumber=101;
    let isMouseDown = false;

document.addEventListener("mousedown", () => isMouseDown = true);
document.addEventListener("mouseup", () => isMouseDown = false);

const mother= document.createElement("div")
bod.appendChild(mother)
mother.id= "mum"

const resetbtn= document.createElement("button");
resetbtn.addEventListener("click", resetChange);
resetbtn.textContent="Grid size";
bod.appendChild(resetbtn);

let sum=0;

function initialSquares(numb){
 for(i=0;i<(numb*numb);i++ ){
  const content2 = document.createElement("div");
  mum.appendChild(content2);
  //content2.textContent="div"
  content2.classList.add("divisions");
  content2.style.width="960"/squaresNumber+"px";

    function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
 

  let opacity=sum;
  
 function chanceColor(){
  opacity+=0.1;
  content2.style.backgroundColor=`rgb(${random(255)} ${random(255)} ${random(255)}/ ${opacity})`;
  
 }
    content2.addEventListener("mousedown", chanceColor);

        content2.addEventListener("mouseover", () => {
      if (isMouseDown) {chanceColor()};
      
    });
 }
}


     while(squaresNumber>100||squaresNumber<1){
     squaresNumber = prompt("Please enter the number of side squares, up to a maximum of one hundred(do not input negative or non-integer numbers)")
     initialSquares(squaresNumber)
      if (squaresNumber === null) {
      location.reload()
      break;
      }
    }
     }



