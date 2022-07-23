let input = document.querySelector(".input");
let Add = document.querySelector(".submit");
let Boxes = document.querySelectorAll(".box");
let drag = null;

Add.addEventListener("click",function(){
  if(input.value != ""){
        let div =document.createElement("div");
        div.innerText=input.value;
        div.className="element";
        div.setAttribute("draggable","true")
        Boxes[0].appendChild(div);
        input.value = "";
  }
  dragItem()
})

function dragItem(){
    let elements =document.querySelectorAll(".element");

    elements.forEach((ele)=>{
       ele.addEventListener("dragstart",function(){
           drag=ele;
           this.style.opacity=".5"
       })

       ele.addEventListener("dragend",function(){
        this.style.opacity="1";
        drag =null;
    })

    Boxes.forEach((box)=>{
      box.addEventListener("dragover",function(e){
          e.preventDefault();
          this.style.background="gray"
      })
       
      box.addEventListener("dragleave",function(){
        this.style.background="#fff"
    })

    box.addEventListener("drop",function(){
        this.appendChild(drag);
        this.style.background="#fff"
    })
 

    })

    })
}