const todoList = [];



function displayTodo() { // to display on page
    let todoListHtml = ''
    todoList.forEach(function(todoObject,index){
        const {name,date} = todoObject;
        if (!name && !date) {
        let html =''
       } else {
        let html = `
        <div>${name}</div>
        <div>${date}</div>
        <button class="delete-button" onclick="
                todoList.splice(${index},1);
                displayTodo();
        ">Delete</button>
        `;
    
        todoListHtml += html;
    }

    });

    /*
    for (let i = 0; i < todoList.length; i++) {  
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const date = todoObject.date;
        const {name,date} = todoObject;
       if (!name && !date) {
        let html =''
       } else {
        let html = `
        <div>${name}</div>
        <div>${date}</div>
        <button class="delete-button" onclick="
                todoList.splice(${i},1);
                displayTodo();
        ">Delete</button>
        `
    
        todoListHtml += html;
       }
            
        }*/
        document.querySelector('.display-todo').innerHTML = todoListHtml;
    }
    
    
// this function will run first after that displayTodo() will run.
function addtodo(){ // to add to list

//name (getting the todo from input)
    const inputElement = document.querySelector('.todo-input');
    const name = inputElement.value;
//date (getting the date from input)
    const dateinputElement = document.querySelector('.date-input');
    const date = dateinputElement.value;


    todoList.push({
       // name : name,
        //date : date
        name,
        date
    });
    // empting the inputs after aading 
    inputElement.value = '';
    dateinputElement.value = '';
    displayTodo();
}    
