//현재 날짜 데이터
const today = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
const todayMonth = monthNames[today.getMonth()];
const todayDate = today.getDate();
const weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const todayWeek = weekNames[today.getDay()];

//현재 날짜 출력
const showToday = document.querySelector('.today');
showToday.textContent = `${todayMonth} ${todayDate} ${todayWeek}`

//메모 추가 기능 selector
const todoInput = document.querySelector('.write-todo');
const addButton = document.querySelector('#add-list');
const addedList = document.querySelector('.todo-list');

//localStorage function 실행 이벤트
document.addEventListener('DOMContentLoaded', getTodos);

//add(추가) 버튼 클릭 이벤트
addButton.addEventListener('click', function submit(){
  event.preventDefault();
  if(todoInput.value == ''){
    alert('해야 할 일이 없군요! 푹 쉬는건 어떨까요? :)');
  } else{
    const newList = document.createElement('li');
    newList.innerText = todoInput.value;
    newList.classList.add('todo-item');
    
    //로컬 스토리지에 리스트 추가
    saveLocalTodos(todoInput.value);

  //버튼 wrapper
  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('btn-wrapper');
  newList.appendChild(btnWrapper);

  //체크버튼
  const checkBox = document.createElement('button');
  checkBox.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  checkBox.classList.add('check-btn');
  btnWrapper.appendChild(checkBox);

  //삭제버튼
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  trashButton.classList.add('remove-btn');
  btnWrapper.appendChild(trashButton);

  //append to ul list
  addedList.appendChild(newList);
  
  //add버튼으로 리스트 추가 후 입력창 초기화
  todoInput.value ='';
  
  //삭제버튼 - 삭제 기능
  trashButton.addEventListener('click', ()=>{
  trashButton.parentElement.parentElement.remove();
  removeLocalTodos(todo);
   })
   
   //체크버튼 - 체크 기능
   checkBox.addEventListener('click', ()=>{
   checkBox.parentElement.parentElement.classList.toggle('completed');
   })
  
  
  }
});


//local storage 기능
function saveLocalTodos(todo){
  //CHECK--HEY do I already have lists in there?
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function(todo){
    const newList = document.createElement('li');
    newList.innerText = todo;
    newList.classList.add('todo-item');
    
  //버튼 wrapper
  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('btn-wrapper');
  newList.appendChild(btnWrapper);

  //체크버튼
  const checkBox = document.createElement('button');
  checkBox.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  checkBox.classList.add('check-btn');
  btnWrapper.appendChild(checkBox);

  //삭제버튼
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  trashButton.classList.add('remove-btn');
  btnWrapper.appendChild(trashButton);

  //append to ul list
  addedList.appendChild(newList);

  //삭제버튼 - 삭제 기능
  trashButton.addEventListener('click', ()=>{
    trashButton.parentElement.parentElement.remove();
    removeLocalTodos(todo);
     })
     
     //체크버튼 - 체크 기능
     checkBox.addEventListener('click', ()=>{
     checkBox.parentElement.parentElement.classList.toggle('completed');
     })
    
 })
}

//localStorage에서 리스트 삭제
function removeLocalTodos(todo){
   //CHECK--HEY do I already have lists in there?
   let todos;
   if(localStorage.getItem('todos') === null){
     todos = [];
   } else {
     todos = JSON.parse(localStorage.getItem('todos'));
   }
   const todoIndex = todos.children[0].innerText;
   todos.splice(todos.indexOf(todoIndex), 1);
   localStorage.setItem('todos', JSON.stringify(todos));
}

 
