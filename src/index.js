document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault()
    createToDo(document.getElementById("new-task-description").value)
  })
});

function createToDo(todo){
  let p = document.createElement("p");
  let btn = document.createElement("button")
  btn.addEventListener("click", takeOut)
  btn.textContent = "del"
  p.textContent = `${todo}`
  p.appendChild(btn)
  document.querySelector("#list").appendChild(p)
}
function takeOut(){
  let element = document. getElementById("list");
   element. parentNode. removeChild(element);
}
