# Just-do-list
[Just-do-list로 이동](https://doridori-samsam.github.io/Just-do-list/)

<br>

## ✨Introduction
메모장 만들기에서 더 나아가 'Just do it'을 모토로 한 투두리스트.
내가 해야 할 일들을 추가하고, 완료된 일들은 체크 혹은 삭제할 수 있습니다.
화면 상단에서 현재 날짜를 확인할 수 있습니다.

<br>

## 사용된 언어
`HTML/CSS` `Sass(SCSS)`  `JavaScript`

<br>

## 📌주요 기능 및 속성
- 입력한 텍스트 리스트 추가/체크/삭제
- media query를 이용한 반응형 레이아웃
- flex 속성을 이용한 레이아웃 구현
- JavaScript를 사용하여 화면 상단 현재날짜 구현
- JavaScript를 이용하여 class 제어
- localStorage로 사용자의 리스트 저장
- addEventListener('transitioned') 메소드를 이용하여 리스트 삭제시 애니메이션 구현

<br>

## 🛠개선해야 할 점
- [ ] 리스트에 체크가 되었을 때 localStorage에 저장되는 기능을 구현하지 못했다. String만 저장되는 localStorage 특성상, *'.completed'* 클래스와 그에 따른 CSS 속성을 어떻게 배열에 담을지가 관건.

<br>

## 💭회고
작은 프로젝트이지만, 처음으로 localStorage 기능을 구현해 보았다. 이 때문에 많은 착오도 겪고, 코드를 짜면서도 localStorage가 어떻게 동작하는지 100% 이해하지 못해 힘들었지만 localStorage 공부에 많은 도움이 되었다. 더불어 자바스크립트를 이용하여 class 제어하면서 스타일 속성을 주는 것에 많이 익숙해졌고, EventListener 사용도 이전보다는 능숙해졌다. 
<br>
아쉬운 점이 있다면 DOM 사용으로 코드가 길어진 것인데, 향후 코드 리팩토링으로 가독성을 높일 예정이다. 
<br>
또 처음으로 써본 속성이 있는데, 바로 *word-break: break-word;*이다. 각각의 리스트 박스 안에서 한글 혹은 영단어로 이루어져 있을 때와 단어가 아닌 알파벳으로 텍스트가 쓰여져 있을 때 텍스트 전체의 레이아웃이 달랐는데, 이 속성으로 해결하였다.
