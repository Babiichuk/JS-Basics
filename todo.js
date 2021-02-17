// Task 2
let todos = [];

function addTodo(array, userId, id, title, completed) {
  let CreateObj = function (userId, id, title, completed) {
    this.userid = userId;
    this.id = id;
    this.title = title;
    this.completed = completed;
  };
  let obj = new CreateObj(userId, id, title, completed);
  array.push(obj);
}

function setTodoState(array, idValue, completedStatus) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === idValue) {
      array[i].completed = completedStatus;
    }
  }
}

function deleteTodo(array, idValue) {
  let index = array.findIndex((n) => n.id === idValue);
  array.splice(index, 1);
}

let todoId = 0;
let todoContId = 0;
function addTodoBlock() {
  // let todoTitle=prompt('Input title please');
  // let ourUser=prompt('What is your name?');
  function addDiv() {
    let container = document.getElementById("todos");
    let addDiv = document.createElement("div");

    addDiv.classList.add("todo");
    addDiv.id = todoId;
    container.append(addDiv);
  }
  addDiv();

  function addTodoContainerDiv() {
    // let s=1;
    function contDiv1() {
      let todoContainer = document.getElementById(`${todoId}`);
      let todoContainerDiv = document.createElement("div");
      todoContainerDiv.classList.add("todo-container");
      todoContainerDiv.id = `todocont${todoContId}`;
      todoContainer.append(todoContainerDiv);
    }
    todoContId = todoContId + 1;
    contDiv1();

    function contDivP() {
      let title = document.getElementById(`todocont${todoContId}`);
      let titleValue = document.createElement("p");
      titleValue.classList.add("title");
      title.append(titleValue);
    }
    contDivP();

    let titleText = document.getElementById(`todocont${todoContId}`).firstChild;
    titleText.append(`Todo`);

    function contDiv2() {
      let todoContainer = document.getElementById(`${todoId}`);
      let todoContainerDiv = document.createElement("div");
      todoContainerDiv.classList.add("todo-container");
      todoContainerDiv.id = `todocont${todoContId + 1}`;
      todoContainer.append(todoContainerDiv);
    }
    contDiv2();

    function contDivSpan() {
      let icon = document.getElementById(`todocont${todoContId}`);
      let iconValue = document.createElement("span");
      iconValue.classList.add("delete-icon");
      icon.append(iconValue);
    }

    function contDivSpanState() {
      let icon = document.getElementById(`todocont${todoContId}`);
      let iconValue = document.createElement("span");
      iconValue.classList.add("state-icon");
      icon.append(iconValue);
    }
    function contDivSpanUserId() {
      let icon = document.getElementById(`todocont${todoContId}`);
      let iconValue = document.createElement("span");
      iconValue.classList.add("user-id");
      icon.append(iconValue);
    }
    contDivSpan();
    todoContId = todoContId + 1;

    contDivSpanUserId();
    contDivSpanState();
  }
  addTodoContainerDiv();

  todoId += 1;
  let userText = document.getElementById(`todocont${todoContId}`).firstChild;
  userText.append(`User`);
  console.log(todoId);
}

let addTodoButton = document.getElementById("addbutton");
addTodoButton.onclick = function () {
  addTodoBlock();
};

let delBut = document.getElementsByClassName("delete-icon");
delBut.onclick = function () {
  console.log("click");
};
console.log(delBut);

// 7 часов уже пишу этот код немогу больше ) надо больше времени сдаю пока как есть
