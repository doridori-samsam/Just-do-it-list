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

//add 버튼 클릭 이벤트
addButton.addEventListener('click', ()=> {
  event.preventDefault();
  const newList = document.createElement('li');
  newList.innerText = 'hey';
  newList.classList.add('todo-item');

  //check toggle
  const checkBox = document.createElement('button');
  checkBox.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  checkBox.classList.add('check-btn');
  newList.appendChild(checkBox);

  //delete button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  trashButton.classList.add('remove-btn');
  newList.appendChild(trashButton);

  //append to ul list
  addedList.appendChild(newList);
});
