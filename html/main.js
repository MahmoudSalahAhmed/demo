let classes = document.getElementsByClassName("circle")
classes[0].addEventListener("click",(event)=>{
    classes[1].className = classes[0].className
})


let addNewBtn = document.getElementById("add-new")
let addNewList = document.getElementById("list-to-add")
let element = 
    `
        <div class="card px-2 py-2">
            <div class="d-flex">
                <img src="assets/img/person.jpg" class="rect-48 circle">
                <div class="ms-2">
                    <p class="font-14 c-112 f-bold mb-1">Mahmoud Salah</p>
                    <p class="font-12 c-g70 f-bold">01095544899</p>
                </div>
            </div>
        </div>
    `

addNewBtn.addEventListener("click",()=>{
    let newElement =  document.createElement("firstElement")
    newElement.className = "col-3"
    newElement.innerHTML = element
    addNewList.prepend(newElement)

    const obj = {id:2,name:"ahmed"}
    obj.id = 4
    obj.name = "hdshjusdhuj"
    console.log(obj);
})