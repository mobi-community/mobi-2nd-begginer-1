## [ Admin Toggle Page ]

##### 2023.12.02 ~ 2023.12.08

##### 요구 사항 : react, css library, react-router-dom 구현을 위한 기본적인 라이브러리 외 그 어떠한 라이브러리도 사용할 수 없습니다

#### 01. 유저 목록 동적으로 생성하기

[ 조건 체크리스트 ]
고유번호, 이름, 생년월일, 연락처, 마지막 로그인으로 이루어진 200명의 user 목록을 동적으로 생성할 것 ✅
연락처는 “010-0000-000” 생년월일은 “YYYY-MM-DD”형태로 파싱될 것 ✅

#### 02. 회원 목록 테이블 만들기

[ 조건 체크리스트 ]

- 표 형태로 구독이 가능한 회원 목록 보이기 ✅
- 데이터에는 마지막 로그인, 생년월일, 연락처, 이름, 고유번호가 모두 노출 ✅
- 전화번호의 중간 자리는 모두 \*\*\*\*로 처리 ✅

#### 03. 페이지 네이션 만들기

[ 조건 체크리스트 ]

- 하나의 페이지당 총 20개의 유저 목록 ✅
- 5개 단위의 페이지 네이션으로 보여져야 하며 마지막 페이지는 [10]✅
- 페이지 호 뒤로가기 지원 ✅
- 선택된 페이지 포커스 여부 ✅

[ 부족하거나 아쉬웠던 점 ]
props 전달이 너무 많아 가독성이 안좋음
뒤로가기 적용 x

useParams, useSearchParams 훅을 사용하여 뒤로가기를 구현하려고 하였으나 실패
나중에 기능별로 DI 하려고 기능 우선으로 코드를 짜다보니 재사용이 불가능하고 props 전달이 너무 많아지는 문제 발생
뒤늦게 patch 하기엔 로직끼리 연관이 있어 여기 저기서 문제 발생하여 2번 시도했으나 실패

[ 앞으로의 포부 ]
처음부터 폴더 구조에 유의하며 진행할 것

#### 04. 필터링 옵션 만들기

[ 조건 체크리스트 ]

- 20개씩 보기, 50개씩 보기 ✅
- 이름 순, 마지막 로그인 순, 생년월일 순으로 정렬하기
- 오름차순 내림차순 정렬하기
- 모든 필터링 뒤로가기 지원

페이지네이션 재사용 가능하게 변경했더니 filter 쪽에서 다량의 에러가 발생해 코드 원상복구..
정렬 방법(회원번호, 이름, 로그인, 생일)별로 버튼을 만들어 click 시마다 isAscend의 상태를 변경해주는 형식으로 만들어
기능 구현에 성공했으나 추후 자료를 보고 select-option 형식으로 변경하니 필터링이 안 됨
한 턴 늦게 기능이 동작하다가 계속 고치다보니 현재는 안 됨..
원인이 페이지네이션의 많은 상태인 것 같아 계속 페이지네이션의 수정만 반복하다가 기한 만료

#### 05. 토글 슬라이드가 가능한 사이드 메뉴 만들기

[ 조건 체크리스트 ]

- **회원관리**
  - 회원목록 (위에서 구현한 회원 목록 표가 나와야함) ✅
  - 회원등록 (빈화면, 구분만 가능하도록 “회원등록” 글씨만 정중앙에 노출) ✅
- **상품관리**
  - 상품목록 (빈화면) ✅
  - 상품등록 (빈화면) ✅
- 모든 토글은 뒤로가기가 지원해야하며, 새로고침 및 뒤로가기 시 열어두었던 토글은 닫혀서 안 됨

[ 부족하거나 아쉬웠던 점 ]
뒤로가기 안 되고 새로고침 시 토글 닫힘

#### 06. 컴포넌트 구조 나누기에 대하여 생각해보기

1. 가독성이 좋지 않을 때
2. 관심사 분리를 해야할 때
3. 상태를 최적화 해야할 때
4. 재사용이 되는 컴포넌트일 때

사례를 만들어 컴포넌트 구조에 대해 생각해보는 부분은 따로 폴더를 만들어 넣었고 "/todoList" 경로로 추가되어 있습니다.
아래는 admin-toogle-page에서 컴포넌트 구조에 대해 생각해 본 부분들입니다 :

[사례 01]
특정 배열을 map 돌리는 부분이 들어가 있다면 가독성이 좋지 않을 수 있습니다. 이럴 때에는 map 부분을 따로 분리시키는 방법을 고려해볼 수 있는데 이와 마찬가지로 특정 코드가 반복된다면
이를 압축시킬 수 있는지 한 번 고민해보게 됩니다.

- before
- after

[사례 02]
todoList에서 props 드릴링 및 부모가 알 필요가 없는 상태를 context를 톧해 관리 했습니다.

<div>
  <img width="1098" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/127207625/65575f34-f68d-4918-9a6f-12a3f904bb22"> 
</div>

페이지네이션과 필터 등 다양한 기능을 하는 코드들이 한 파일 안에 적혀 있어 가독성이 좋지 않습니다. 한 페이지에는 한 가지의 기능만을 분리하는 것이 읽기에도 유지보수를 하기에도 용이하므로
관심사에 따라 분리를 해주는 것이 좋습니다.

- before
<div>
  <img width="1098" alt="2-01" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/134191817/b393e033-af95-4415-9d8d-167e13c53e38">
  <img width="1098" alt="2-02" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/134191817/31087e9d-2498-456c-a22b-e434c69f47ba">
  <img width="683" alt="2-03" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/134191817/065884b8-35cc-4e33-b57d-6ec41d6afb26">
</div>

- after -
<p align="center">
<img width="629" alt="2-04" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/134191817/4803edec-29b6-4894-ac95-e2661e12e2c6">
</p>

[사례 03]
ref를 사용하기 이전에 state를 정의하고 onChange 함수를 사용하여 ContentBox의 값을 업데이트 하는 방식으로 코드를 작성하였지만, 이렇게 코드를 작성할 경우 ContentBox의 값이 변경될 떄 마다 상태가
변경되고 리렌더 되는 문제가 발생하여 ref를 사용하여 상태를 최적화 시켰습니다.

<div>
  <img width="1098" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/127207625/4ffb3fd5-22a8-4e3c-bc64-e45dfee7bd24">
</div>

상태의 최적화가 제대로 이뤄지지 않아 props의 전달이 너무 많아진 사례입니다. 상태명에 '페이지'가 들어간 것들은 전부 페이지네이션과 관련된 상태들로 부모와 filter 파일에선 굳이 알 필요가 없습니다.
아래 코드를 보면 userListPerPage를 map 돌리는 과정에서 필요한 상태들이 페이지네이션으로 들어가지 못하고 상위 폴더로 나와 있습니다.
이 부분을 user_table.js로 분리하게 되면 부모로부터 자식이 과도한 props의 전달 받는 것을 줄일 수 있습니다.

- before
<div>
  <img width="631" alt="03-00" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/134191817/78ea0f8e-a012-49ef-9df5-411d48f8f1d6">
  <img width="631" alt="03-1" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/134191817/23bbc647-e07f-42ff-97e2-6309baf9b0da">
</div>

- after
<div>
  <img width="631" alt="03-after" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/134191817/fc6b0b7a-1116-40ab-89b6-e1e6453e2c64">
  <img width="629" alt="2-04" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/134191817/4803edec-29b6-4894-ac95-e2661e12e2c6">
</div>

[사례 04]
재사용이 되는 컴포넌트라면 상태도 전역으로 관리하는 것처럼 컴포넌트도 전역으로 사용할 수 있도록 컴포넌트화하는 것이 좋습니다.
최상위 폴더에 분리시켜 import하는 것이 전체적인 코드의 길이도 줄어들어 가독성이 좋아질 뿐 아니라 유지 보수에도 용이합니다.

아래와 같이 userList는 여러 파일에서 재사용이 됩니다. 아래 코드가 모든 파일마다 들어가 있다면 코드의 길이도 너무 길어지고
아래의 코드가 각각 페이지네이션과 필터 파일에 들어간다면 정작 어떤 코드가 페이지네이션/필터의 기능을 하는 코드인지 이해하기 어려워집니다.
따라서 임의의 user 배열을 생성하는 함수와 그 함수를 호출해 userList를 만들어내는 코드들을 전역으로 관리할 수 있도록 최상위 폴더 components에 분리시켰습니다.

- after
<p align="center">
<img width="1193" alt="04-1" src="https://github.com/mobi-community/mobi-2th-begginer-1/assets/134191817/cb7beed4-5ab6-41b0-a20d-9a58bdb6f3ad">
</p>
