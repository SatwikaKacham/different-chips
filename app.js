//chip component part


let chipOutput=document.querySelector(".chip-output");
let chipInputValue =document.querySelector(".chip-input-value");
let chipEnterBtn =document.querySelector(".chip-enter-btn");
let listarr=[];

let inputTakerAndAppendingItem=()=>{
    console.log("yes");
   let  chipInputValueFinal=chipInputValue.value;
   if(chipInputValueFinal!=='')
   {
   chipInputValue.value='';
    listarr.push(chipInputValueFinal);
    outputList();
   }
}


let outputList=()=>{
    chipOutput.innerHTML=``;
    listarr.map((item,index)=>{
       
        chipOutput.innerHTML+=   `<div class="chip-container">   
        <div class="chip-text"> ${item}
      <span class="chip-crossbutton"  onclick = "deleteItem(${index})"><i class="fas fa-times"></i></span>
        </div>      
         </div>`
    });
}


let deleteItem=(index)=>{
listarr.splice(index,1);
outputList();
}
chipEnterBtn.addEventListener("click",inputTakerAndAppendingItem);

// end  chip component

// badge part


let hide=0;
let hideBadge =document.querySelector(".right-badge");
let hideFunction =()=>{
    if(hide==1)
    {
        hideBadge.style.display="block";  
        hide=0;
    }
    else{
    hide=1;
    hideBadge.style.display="none";
    }
}


// end badge component

// Header
let headerComponent3=document.querySelector('.header-component3')
let headerAndContentContainer3=document.querySelector(".header-andcontent-container3");
let headerTitle3=document.querySelector('.header-title3');
let shortMaker=()=>{
    if(headerAndContentContainer3.scrollTop>=2)
    {
    headerTitle3.style.display="none";
    headerComponent3.classList.add("header-component2");
    }
    else{
        headerTitle3.style.display="block";
        headerComponent3.classList.remove("header-component2");
    }
    console.log(headerAndContentContainer3.scrollTop);
}

headerAndContentContainer3.addEventListener("scroll",shortMaker);

  //done header

  //drawer component


  let drawerListItem =document.querySelectorAll(".drawer-list-item");
console.log("yes");
  drawerListItem.forEach((item)=>{
      item.onclick=()=>{

          item.classList.toggle("select");}});



//hide drawer
let drawerToggleButton  =document.querySelector(".drawer-toggle-button");
let drawerContainerPlus =document.querySelector(".drawer-container-plus");
console.log( drawerToggleButton );
drawerToggleButton.onclick=()=>{
    drawerContainerPlus.classList.toggle("hide-drawer");

}



//drawer component done

// snackbar component
let snackbarBaselineButton  =document.querySelector(".snackbar-baseline-button");
let snackbarStackedButton  =document.querySelector(".snackbar-stacked-button");
let snackbarBaseline =document.querySelector(".snackbar-baseline");
let snackbarStacked  =document.querySelector(".snackbar-stacked");
let snackbarCrossButtonBaseline  =document.querySelector(".snackbar-baseline i");
let snackbarCrossButtonStacked  =document.querySelector(".snackbar-stacked i");

snackbarBaselineButton.onclick=()=>{
    snackbarBaseline.style.display="flex"
}

snackbarCrossButtonBaseline.onclick=()=>{
    snackbarBaseline.style.display="none"
}

snackbarStackedButton.onclick=()=>{
    snackbarStacked.style.display="flex"
}

snackbarCrossButtonStacked .onclick=()=>{
    snackbarStacked.style.display="none"
}

