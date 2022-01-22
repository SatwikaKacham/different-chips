let crossButton=document.querySelectorAll(".chip-crossbutton");
let outPut=document.querySelector(".output");
let inputValue =document.querySelector(".input-value");
let enterBtn =document.querySelector(".enter-btn");
let listarr=[];

let inputTakerAndAppendingItem=()=>{
    console.log("yes");
   let  inputValueFinal=inputValue.value;
   if(inputValueFinal!=='')
   {
   inputValue.value='';
    listarr.push(inputValueFinal);
    outputList();
   }
}


let outputList=()=>{
    outPut.innerHTML=``;
    listarr.map((item,index)=>{
       
        outPut.innerHTML+=   `<div class="chip-container" onclick="select(${index})">   
        <div class="chip-text"> ${item}
      <span class="chip-crossbutton"  onclick = "deleteItem(${index})"><i class="fas fa-times"></i></span>
        </div>      
         </div>`
    });
}

let select =(index) =>{
    let chipContainer =document.querySelectorAll(".chip-container");
    // listarr[index].style.backgroundColor="pink";
    
    chipContainer[index].style.opacity = "100%";

 console.log(chipContainer);
}

let deleteItem=(index)=>{
listarr.splice(index,1);
outputList();
}
enterBtn.addEventListener("click",inputTakerAndAppendingItem);