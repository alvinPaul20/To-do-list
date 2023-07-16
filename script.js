//Create close node for every to do list

nodeList = document.getElementsByTagName("li");

for (let i = 0 ;i < nodeList.length; i++){
let span = document.createElement("span");
let text = document.createTextNode("x");
span.className = 'close';
span.appendChild(text);
nodeList[i].appendChild(span);
}
let close = document.getElementsByClassName('close');
for(let i = 0 ;i < close.length; i++){

    close[i].onclick = function(){
      this.parentElement.style.display="none";
    }
}
//toggle line through of list items

let list = document.querySelector("ul").addEventListener('click',function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
  }
})
// Adding new list

function newElement(){
let li = document.createElement("li");
let value = document.getElementById("search").value;
let t = document.createTextNode(value);
li.appendChild(t);
if(value === ""){
  alert("You must write something!");
}else{
  document.getElementById("ul").appendChild(li);
}
document.getElementById("search").value ="";
for (let i = 0 ;i < nodeList.length; i++){
  let span = document.createElement("span");
  let text = document.createTextNode("x");
  span.className = 'close';
  span.appendChild(text);
  nodeList[i].appendChild(span);
  }
  let close = document.getElementsByClassName('close');
  for(let i = 0 ;i < close.length; i++){
  
      close[i].onclick = function(){
        this.parentElement.style.display="none";
      }
  }
}
function deleteList(){
 document.getElementById('ul').innerHTML = "";
}
