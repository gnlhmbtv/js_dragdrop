// let box=document.querySelector(".box");
// let dragArea=document.querySelector(".drag-area");

// let id;
// id=document.getElementById("drag").getAttribute("id");

// box.ondragstart=()=>{
//     id=document.getElementById("drag").getAttribute("id");
//     // console.log("drag start");
// }
// box.ondragend=()=>{
//     console.log("drag end");
// }
// box.ondrag=()=>{
//     console.log("on drag");
// }

// dragArea.ondragenter=()=>{
//     console.log("drag element enter");
// }
// dragArea.ondragleave=()=>{
//     console.log("drag element leave");
// }
// dragArea.ondragover=(e)=>{
//     e.preventDefault();
//     console.log("drag element drop over");
// }
// dragArea.ondrop=function(e){
//     let dragElement=document.getElementById(id);
//     
//     dragArea.appendChild(dragElement);


// }

// (function dragDrop(){

//     let coordX;
//     let coordY;

//     const dragEl=document.querySelector(".box");
//     const dragZone=document.querySelector(".drag-area");

//     dragZone.addEventListener('dragenter',(e)=>{
        
//     });
//     dragZone.addEventListener('dragleave',(e)=>{
        
//     });
//     dragZone.addEventListener('dragover',(e)=>{
//         e.preventDefault();
//     });
//     dragZone.addEventListener('drop',(e)=>{
//         dragEl.style.position='absolute';
//         dragEl.style.top=(e.pageY-coordY)+'px';
//         dragEl.style.left=(e.pageX-coordX)+'px';
//     });

//     dragEl.addEventListener('dragstart',(e)=>{
//         e.dataTransfer.setData('text/html','dragstart');
//         coordX=e.offsetX;
//         coordY=e.offsetY;
//     });
// })();











// function allowDrop(ev) {
//     ev.preventDefault();
//   }
  
//   function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
//   }
  
//   function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//   }









// let icon=document.getElementById("icon");
// let input=document.getElementById("input");
// let table=document.getElementById("table");
// let tableBody=table.lastElementChild;


// icon.onclick=function(){
//     input.click();
// }


// input.onchange=function(e){
//     for (const item of e.target.files) {
//        var reader= new FileReader();
//        reader.onloadend=function(e){
//          //console.log(e.target.result);
//          let tr=document.createElement("tr");
//          let tdImage=document.createElement("td");
//          let image=document.createElement("img");
//          image.setAttribute("src",e.target.result)
//          image.style.height="240px";
//          image.style.width="300px"
//          tdImage.append(image);
//          let tdImageName=document.createElement("td");
//          tdImageName.innerText=item.name;
//          let tdSize=document.createElement("td")
//          tdSize.innerText=item.size;
//          let icon1=document.createElement("i");

//          icon1.setAttribute("class","fas fa-trash-alt")
//          tr.append(tdImage,tdImageName,tdSize,icon1);
//          tableBody.append(tr);

//         icon1.onclick=function(){
//           tr.remove();
//         }
         
//        }
        
//        reader.readAsDataURL(item);
//     }
// }












const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart); 
  
});

droppableElements.forEach(elem => {
  elem.addEventListener("dragenter", dragEnter); 
  elem.addEventListener("dragover", dragOver); 
  elem.addEventListener("dragleave", dragLeave); 
  elem.addEventListener("drop", drop); 
});



function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id); 
}



function dragEnter(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover");
  }
}

function dragOver(event) {
  if(!event.target.classList.contains("dropped")) {
    event.preventDefault(); 
  }
}

function dragLeave(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.remove("droppable-hover");
  }
}

function drop(event) {
  event.preventDefault(); 
  event.target.classList.remove("droppable-hover");
  const draggableElementData = event.dataTransfer.getData("text"); 
  const droppableElementData = event.target.getAttribute("data-draggable-id");
  const isCorrectMatching = draggableElementData === droppableElementData;
  if(isCorrectMatching) {
    const draggableElement = document.getElementById(draggableElementData);
    event.target.classList.add("dropped");
   
    event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
    draggableElement.classList.add("dragged");
    draggableElement.setAttribute("draggable", "false");
    event.target.insertAdjacentHTML("afterbegin", `<i class="fas fa-${draggableElementData}"></i>`);
  }
}