document.addEventListener("DOMContentLoaded", () => {

  let form = document.getElementById("create-task-form")

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    const theTask = document.getElementById("new-task-description").value
    const nickname = document.getElementById("nickname").value
    const dueDate = document.getElementById("due-date").value
    console.log("Task Added!");
    
    let list = document.getElementById("list")
    list.innerHTML += `<li><h5> Task: ${theTask} </h5> by ${nickname} due on ${dueDate}.  <button id="toa"> X </button></li>`
  
    const toa = document.getElementById("toa")
    toa.addEventListener("click", (event) => {
      event.target.parentNode.remove()
    })
  
  })
});
