let classes = document.getElementsByClassName("circle")
classes[0].addEventListener("click",(event)=>{
    classes[1].className = classes[0].className
})