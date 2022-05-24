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