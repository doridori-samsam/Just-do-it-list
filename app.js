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
const showToday = document.querySelector(".today");
showToday.textContent = `${todayMonth} ${todayDate} ${todayWeek}`

//메모 추가 기능 selector
const todoInput = document.querySelector('.write-todo');
const addButton = document.querySelector('#add-list');
const addedList = document.querySelector('.todo-list');

//add(추가) 버튼 클릭 이벤트
addButton.addEventListener('click', ()=> {
  event.preventDefault();
  const newList = document.createElement('li');
  newList.innerText = todoInput.value;
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
});
