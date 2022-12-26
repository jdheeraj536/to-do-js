const addItem = () =>{
    const addItem =document.getElementById("plus");
    // console.log(addItem);
    addItem.innerHTML =`
    <div class="pop">
            <p class="addNew">Add New List</p>
            <label for="name"></label>
            <input type="text" id="name" value="" /> 
            <button onclick="addTask()">Add </button>
            <button onclick="closeWin()">close</button>
       
    </div>`
 
}

const taskList = [];
const addTask = () => {
    const name = document.getElementById("name").value;
    console.log(name);
    const tempObj = {
        id: Date.now(),
        taskName: name,
    }
    taskList.push(tempObj);
    console.log(taskList);
    addTaskOnScreen();
    
}

const addTaskOnScreen = () => {
    const element = document.createElement("div");
    element.setAttribute("class", "child");
    const exstingElement = document.getElementById("parent");
    exstingElement.appendChild(element);
    element.innerText = taskList[taskList.length - 1].taskName;
   
}

