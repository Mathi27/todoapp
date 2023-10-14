document.addEventListener("DOMContentLoaded",function(){
    
   const taskInput = document.getElementById("task");
   const addBtn = document.getElementById("add");
   const taskList = document.getElementById("tasklist");

   addBtn.addEventListener("click",addTask);

   function createTaskElement(text){
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
       <p id="inside-text">${text}</p>
       <button class="delete">Delete</button>
       <button class="complete">Complete</button>
       <button class="update">Update</button>
    `;
    return taskItem;
   }
// Add Task

function addTask(){
   const taskText =  taskInput.value.trim();

   if(taskText !==""){
    const taskItem = createTaskElement(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = "";
   }
}

function updateTask(taskItem){
   const taskText =  prompt("Update Task :",taskItem.querySelector("#inside-text").textContent);
   if(taskText !==null && taskText.trim() !==""){
    taskItem.querySelector("#inside-text").textContent = taskText;
   }
}

function deleteTask(taskItem){
    taskList.removeChild(taskItem);
}

function toggleComplete(taskItem){
    taskItem.classList.toggle("completed");
}

taskList.addEventListener("click",function(event){
     const target= event.target;

     if(target.classList.contains("delete")){
        deleteTask(target.parentElement);
     }else if(target.classList.contains("complete")){
        toggleComplete(target.parentElement);
     }
     else if(target.classList.contains("update")){
        console.log("------- update working ------")
       updateTask(target.parentElement);
     }
});

});