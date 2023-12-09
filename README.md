## Mobi beginner 1st week
2023.12.02 ~ 2023.12.08

### 12/2 
페어 시간을 정하고 일주일 계획을 세웠습니다.

### 12/3
컴포넌트를 분리를 해야 하는 이유를 생각해 보았습니다 (Q3)
유저 데이터를 동적으로 생성하였습니다. 회원 테이블을 <table/> 를 사용하여 만들었습니다. 

### 12/4 
페이지네이션을 구현하였습니다. 
컴포넌트 분리 방법에 대한 사례를 다시 점검하고 수정하였습니다(Q3)

### 12/5 
페이지네이션을 일부 수정하였습니다. 필터링 기능을 만들었습니다
필터링은 뒤로가기가 지원되게 하기 위해서 쿼리스트링을 사용하였습니다.

### 12/6 
필터링 기능 구현을 완료하였습니다.

### 12/7 
토글 사이드 메뉴 구현을 시작하였습니다.
페이지네이션의 필요없는 state인 currentGroup을 page를 통해 구현함으로서 삭제하는 리팩토링을 하였습니다. 
     
   ## 📝 리팩토링
  
  강사님의 예시 코드를 참고하여 메뉴 리스트, select 등 반복되는 로직을 map을 통해 리팩토링 하였습니다.
  기존의 하드 코딩 되어 있던 코드들이 map을 통해 깔끔하고 코드가 짧아진 것을 볼 수 있었습니다.
  
  <img width="585" alt="스크린샷 2023-12-09 오후 12 49 39" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/31ce7a79-73a2-4ac7-8759-93040b6a4366">

  또한 기존에 파일 안에서 하드 코딩 되어 흩어져 있던 데이터를 constants 안에 파일로 만들어 배열 형태로 관리함으로써, 데이터의 CRUD가 용이해지고 가독성이 좋아진 것을 확인할 수 있었습니다.
  
  <img width="402" alt="스크린샷 2023-12-09 오후 12 51 28" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/526dce98-801e-4bbf-a9dd-7498a1b87d09">

12/8 토글 사이드 메뉴 구현 중 로컬 스토리지에 값이 이상하게 담기는 오류를 수정하였습니다.
    토글 사이드 메뉴의 css를 수정하여 최종 마무리를 하였습니다. 

   
  ## 📝 에러 핸들링
    
  문제는 localstorage에 담긴 toggle데이터(토글이 열렸는지 닫혔는지 여부)를 가져올 때 JSON값을 그대로 가져와서 생긴 문제였습니다. 
  저희는 2개의 toggle의 열고 닫힘 여부를 [boolean, boolean] 형태로 관리하고 있었는데, 이를 JSON.parse() 를 사용해서 JS의 
  배열 형태로 다시 변환해주어야 했습니다.

<img width="477" alt="스크린샷 2023-12-09 오후 12 43 36" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/13c5c9d9-e49a-4ed1-9217-420215fc0b78">
    



## 구현 화면

<img width="1436" alt="스크린샷 2023-12-09 오후 12 40 54" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/6b017965-5e2d-41fe-b0a0-7c8f74143651">

쿼리 스트링을 사용하여 필터, 페이지가 바뀔 때마다 url이 변경되도록 하여 뒤로가기 기능이 잘 지원되도록 하였습니다.

https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/292d2566-1b4b-45b0-b9f4-6dec9d27e4b9

<img width="547" alt="스크린샷 2023-12-09 오후 1 00 47" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/6e793447-19c3-488a-945c-8cc15eba00bc">

<img width="598" alt="스크린샷 2023-12-09 오후 1 00 56" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/a4403c6d-a271-40d5-b361-625f093c93c0">

<img width="817" alt="스크린샷 2023-12-09 오후 1 01 02" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/4c54f708-cc25-4c31-bcfc-86c3260de5f6">

<img width="478" alt="스크린샷 2023-12-09 오후 1 02 35" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/5b91bf5e-3232-4b8d-93ba-b8983d1f4620">


https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/8a786d0c-82ca-4f93-97d4-f55f109b32a7


