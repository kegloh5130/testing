
const TheList = document.getElementById("TheList")
const addbutton = document.getElementById("addtask")





function createtask(){
    let YourTask = document.getElementById('YourTask');
    let listitem = document.createElement('li');
    listitem.className = 'look';
    listitem.innerText = YourTask.value;
    YourTask.value = " ";
    TheList.appendChild(listitem);
    let remove = document.createElement('span')
    remove.innerHTML = 'X';
    remove.className = 'rem';
    listitem.appendChild(remove)
}
addbutton.addEventListener('click', createtask)

TheList.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }     
    
})

TheList.addEventListener("click", function(f){
    if(f.target.tagName === "LI"){
        f.target.style.textDecoration = "line-through";
    }
})

