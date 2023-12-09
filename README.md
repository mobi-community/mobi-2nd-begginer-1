## Mobi beginner 1st week - Pair2(Rin, Daniel)

2023.12.02 ~ 2023.12.08

## 최종 구현 화면

<img width="1436" alt="스크린샷 2023-12-09 오후 12 40 54" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/6b017965-5e2d-41fe-b0a0-7c8f74143651">

## 일일 진행 상황

### 12/2

페어 시간을 정하고 일주일 계획을 세웠습니다.

### 12/3

컴포넌트를 분리를 해야 하는 이유를 생각해 보았습니다. 컴포넌트 분리에 관한 글을 찾아보고 서로 공유하는 시간을 가졌습니다.(Q3) <br/> 링크는 docs에 links.docs 에 정리하였습니다.
<br/> 회원 테이블을 `<table/>` 를 사용하여 만들었습니다. <br/>

### 12/4

컴포넌트 분리 방법에 대한 사례를 다시 점검하고 수정하였습니다(Q3)<br/>
페이지네이션을 구현하였습니다.

### 12/5

페이지네이션을 일부 수정하였습니다. 필터링 기능을 만들었습니다
필터링은 뒤로가기가 지원되게 하기 위해서 쿼리스트링을 사용하였습니다.

### 12/6

필터링 기능 구현을 완료하였습니다.<br/>
쿼리 스트링을 사용하여 필터, 페이지가 바뀔 때마다 url이 변경되도록 하여 뒤로가기 기능이 잘 지원되도록 하였습니다.

https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/292d2566-1b4b-45b0-b9f4-6dec9d27e4b9

### 12/7

토글 사이드 메뉴 구현을 시작하였습니다.<br/>
페이지네이션의 필요없는 state인 currentGroup을 page를 통해 구현함으로서 삭제하는 리팩토링을 하였습니다.

### 12/8

토글 사이드 메뉴 구현 중 로컬 스토리지에 값이 이상하게 담기는 오류를 수정하였습니다.
토글 사이드 메뉴의 css를 수정하여 최종 마무리를 하였습니다.

## 기능 문서

### [1] 유저 목록 동적으로 생성하기

유저 데이터를 동적으로 생성하였습니다. 다음과 같이 랜덤 날짜를 만드는 함수, 랜덤 핸드폰 번호를 만드는 함수를 만들었습니다. count를 인자로 받아 해당 개수만큼 목데이터를 만들어주는 userData 함수를 만들어 주었습니다.
대부분의 함수를 순수함수로 만들었더니 재사용하기가 용이하다는 장점이 있었습니다.

<img width="593" alt="스크린샷 2023-12-09 오후 1 30 28" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/21df7c39-f50b-4477-8ee8-09db7885ac3b">

### [2] 회원 목록 테이블 만들기

`<table/>` 태그를 사용하여 전체적인 테이블의 모습과 가장 위에 있는 인덱스 제목들을 달아주었습니다. 밑에 유저 목록은 `OneUser`라는 컴포넌트를 만들어 map을 사용해
한 사람씩 데이터를 렌더링하였습니다

![스크린샷 2023-12-09 오후 6 09 04](https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/5014f0b9-0401-4f81-89e9-0f2bbe8435ca)

### [3] 페이지 네이션 만들기

현재 페이지 상태를 나타내는 useState정의합니다.
뒤로 가기가 지원되어야 하기 때문에 useSearchhParam을 이용해서 searchParam에 page 값을 currentPage 값으로 할당합니다.

<img width="400" alt="스크린샷 2023-12-09 오후 1 01 02" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/134574485/79aaa4f8-9b27-4a9f-9186-49fd620b8283">

<img width="400" alt="스크린샷 2023-12-09 오후 1 01 02" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/134574485/d9953f5b-a5c8-4c9c-aae8-7ef03dd9e3a6">

페이지 네이션 버튼을 생성합니다. 요구 사항이 5개단위로 보여야 하기 때문에 pagesPerGroup값은 5로 설정했습니다

<img width="600" alt="스크린샷 2023-12-09 오후 1 01 02" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/134574485/941ce9cc-bc92-4eab-88cb-6f0d11ed473a">

### [4] 필터링 옵션 만들기

사용자가 옵션을 선택할 수 있게 `<select/>`와 `<option/>`태그를 사용하였습니다.
필터링 기능 역시 뒤로 가기가 지원되어야 하기 떄문에 useSearchParam을 활용하여 쿼리 스트링을 <option/>태그의 value값으로 정의합니다.

<img width="500" alt="스크린샷 2023-12-09 오후 1 01 02" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/134574485/2f8ec36d-b462-42b9-ae83-a65bf09d4dfb">

한 페이지에 보여줄 유저 목록 수 선택하기 20개/50개
한 페이지에서 보여줄 유저 목록수는 perPage 현재 페이지는 currentPage 값이고 perPage값 만큼 유저 목록을 보여주기위해 전체 유저가 담긴 배열을 slice하여 화면에 보여줍니다

<img width="500" alt="스크린샷 2023-12-09 오후 1 01 02" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/134574485/69a82309-81f7-41f8-86bb-9383dd84073a">

<img width="500" alt="스크린샷 2023-12-09 오후 1 01 02" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/134574485/f1ccfa80-ebaf-4244-abc9-1e4b9230e19c">

이름 순으로 정렬하기
배열의 sort 함수를 사용하여 userData의 name key 값으로 비교 했습니다.

<img width="500" alt="스크린샷 2023-12-09 오후 1 01 02" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/134574485/27bb0bfa-475d-4f3c-b0a8-b050c17f36b7">

마지막 로그인 순으로 정렬하기
배열의 sort 함수를 사용하여 userData의 name lastLoginDate 값으로 비교 했습니다.

<img width="500" alt="스크린샷 2023-12-09 오후 1 01 02" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/134574485/8a051a6a-398d-4e72-be09-96ed09d6baad">

생년월일 순으로 정렬하기
배열의 sort 함수를 사용하여 userData의 name birthDate 값으로 비교 했습니다.

<img width="500" alt="스크린샷 2023-12-09 오후 1 01 02" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/134574485/70340948-bf9e-4fd2-8893-df41e137bb00">

오름차순 내림차순 정렬하기
SortByName(), sortByLastLoginDate(), sortByBirthDate() 함수의 if조건문의 조건식으로 orderBy === "ascend"를 활용해서 sort함수의 비교 값 순서만 바꿔서 구현했습니다.

### [5] 토글 슬라이드가 가능한 사이드 메뉴 만들기

다음과 같이 뒤로가기, 새로고침을 사용해도 토글의 열림 / 닫힘 상태가 유지될 수 있도록 localstoarge를 사용하였습니다
<img width="817" alt="스크린샷 2023-12-09 오후 1 01 02" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/4c54f708-cc25-4c31-bcfc-86c3260de5f6">

## 📝 리팩토링

강사님의 예시 코드를 참고하여 메뉴 리스트, select 등 반복되는 로직을 map을 통해 리팩토링 하였습니다.
기존의 하드 코딩 되어 있던 코드들이 map을 통해 깔끔하고 코드가 짧아진 것을 볼 수 있었습니다.

  <img width="585" alt="스크린샷 2023-12-09 오후 12 49 39" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/31ce7a79-73a2-4ac7-8759-93040b6a4366">

  <img width="478" alt="스크린샷 2023-12-09 오후 1 02 35" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/5b91bf5e-3232-4b8d-93ba-b8983d1f4620">

또한 기존에 파일 안에서 하드 코딩 되어 흩어져 있던 데이터를 constants 안에 파일로 만들어 배열 형태로 관리함으로써, 데이터의 CRUD가 용이해지고 가독성이 좋아진 것을 확인할 수 있었습니다.

 <img width="402" alt="스크린샷 2023-12-09 오후 12 51 28" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/526dce98-801e-4bbf-a9dd-7498a1b87d09">

 <img width="312" alt="스크린샷 2023-12-09 오후 1 07 05" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/b874d99c-6703-4439-a31a-e56275ab06b2">

</div>

## 📝 에러 핸들링

문제는 localstorage에 담긴 toggle데이터(토글이 열렸는지 닫혔는지 여부)를 가져올 때 JSON값을 그대로 가져와서 생긴 문제였습니다.
저희는 2개의 toggle의 열고 닫힘 여부를 [boolean, boolean] 형태로 관리하고 있었는데, 이를 JSON.parse() 를 사용해서 JS의
배열 형태로 다시 변환해주어야 했습니다.

<img width="477" alt="스크린샷 2023-12-09 오후 12 43 36" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/13c5c9d9-e49a-4ed1-9217-420215fc0b78">

요구사항외에도 뒤로가기시 특정 페이지가 열리면 해당 토클이 닫혀 있었던 경우 열리도록 코드를 수정하였습니다.
useEffect를 사용하여 relativeURL 바뀔 때마다 현재 url과 각 페이지에 맵핑된 url이 일치하는 지를 확인하고,
일치한다면 해당 toggle을 열도록 (isToggle : true)로 수정하였습니다.

<img width="598" alt="스크린샷 2023-12-09 오후 1 00 56" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/a4403c6d-a271-40d5-b361-625f093c93c0">

<img width="547" alt="스크린샷 2023-12-09 오후 1 00 47" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/6e793447-19c3-488a-945c-8cc15eba00bc">

https://github.com/mobi-community/mobi-2th-begginer-1/assets/125418818/8a786d0c-82ca-4f93-97d4-f55f109b32a7
