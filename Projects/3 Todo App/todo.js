let todoList = [ //array: todoList- it is an 'array of objects', here we are putting default values to array(optional)- you can comment them
  {
    item: 'Buy Milk',
    dueDate: '4/10/2023'
  },
  {
    item: 'Go to College',
    dueDate: '4/10/2023'
  }
];

displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value; //to take value <input/>
  let todoDate = dateElement.value;
  // console.log(todoItem); //just to see the value in the console
  // console.log(todoDate);
  
  todoList.push({item: todoItem, dueDate: todoDate}); //pushing object to array
  inputElement.value = ''; //after pushing to array, clear the value
  dateElement.value = ''; //after pushing to array, clear the value
  displayItems();
}


function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = ''; 
  for (let i = 0; i < todoList.length; i++) {
    let {item, dueDate} = todoList[i]; //or we can write: let item = todoList[i].item; let dueDate = todoList[i].dueDate
    /**
     * below: using span as it is not a block element
     * 
     * also below: <button class='btn-delete' onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>`;
     * here, onclick="todoList.splice(${i}, 1) , here it will remove 1 element from index i
     * also displayItems() is called to reflect the changes after delete, if you not write it will be deleted from array but it will not be seen on the webpage at the same time, it will be seen deleted from the web page after we add item to todolist where displayItems() will be called, you can see by removing displayItems()- how it is workings
     */
    newHtml += `
      <span>${item}</span> 
      <span>${dueDate}</span>
      <button class='btn-delete' onclick="todoList.splice(${i}, 1); ;">Delete</button>`;
  }
  /**
  * above if you write: 
    <button class='btn-delete' onclick="todoList.splice(i, 1); displayItems();">Delete</button>`;
  * the use of 'i' within the onclick attribute is problematic due to JavaScript's scoping rules. The 'i' in todoList.splice(i, 1) is not recognized as the loop index inside the onclick attribute. It is treated as a literal string, not a variable from the loop.
  */
  containerElement.innerHTML = newHtml;
}