async function add_todo(){

                //Get the input field
                const inputField = document.getElementById("taskInput")

                // Get the name of the new task from the input field
                const title = inputField.value.trim();

                //Get warning paragraph
                const warning = document.getElementById("warning")
                
                //Check if task enter is not empty
                if(title === ""){
                    warning.textContent = "Please enter task!" //Add warning
                    return; //Stop the function so that task doesn't get added 
                } else {
                    warning.textContent = "" // clear warning if input is ok
                }


           await fetch("http://127.0.0.1:8000/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              title: title,
              is_done: false  
            })
           })
 document.getElementById("taskInput").value = "";
 get_todos(); //refresh the todo list
}

async function get_todos(){
    const response = await fetch ("http://127.0.0.1:8000/todos")
    const todos = await response.json()

    //Get the List of tasks
                const todoList = document.getElementById("todoList");
                todoList.innerHTML=""

       todos.forEach(todo => {
         const li = document.createElement("li");
                li.textContent = todo.title + (todo.is_done ? "✅" : "❌");
                 //Make the task clickable to be marked as completed
                li.addEventListener("click", function () { todo.is_done = True
                })

                
                //Create the remove button
                removeBtn = document.createElement("button")
                removeBtn.textContent = "Remove"
                removeBtn.style.marginLeft = "10px";
                removeBtn.style.cursor = "pointer";

                //delete functionality of the delete button
                removeBtn.addEventListener("click", function (event){
                    event.stopPropagation(); //stops the click from triggering the task's click event
                    li.remove(); // delete the task
                })

                 //Add the delete button to the task
                li.appendChild(removeBtn);

                //Append the new task to the List of tasks
                todoList.appendChild(li)
       });
    }

    window.addEventListener("DOMContentLoaded", get_todos())