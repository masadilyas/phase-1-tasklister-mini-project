document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

function addList(){
  const form = document.getElementById('create-task-form')
  form.addEventListener('submit', newList)}

function newList(e){
  const li = document.createElement('li')
 
const theList = document.getElementById('tasks')
theList.appendChild(li)
li.textContent = e.target['new-task-description'].value
e.preventDefault()
} 
addList()