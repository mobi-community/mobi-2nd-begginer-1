// 고유번호, 이름, 생년월일, 연락처, 마지막 로그인으로 이루어진 200명의 user 목록을 동적으로 생성할 것,
// 연락처는 반드시 “010-0000-000”으로 이루어져야하며 생년월일을 “YYYY-MM-DD”형태로 파싱되어야 합니다.

// 랜덤 이름 생성
const generateRandomName = (num) => {
  const characters = "강성장진중일조충현감찬이순신";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

let randomName = generateRandomName(3);
console.log(randomName);

// 랜덤으로 날짜를 생성해주는 로직 생년월일
const getRandomData = (start, end) => {
  const startDate = start.getTime();
  const endDate = end.getTime();

  return new Date(startDate + Math.random() * (endDate - startDate));
};
const randomDate = getRandomData(new Date(1990, 1, 1), new Date());
const year = randomDate.getFullYear();
const month = randomDate.getMonth() + 1;
const day = randomDate.getDay() + 1;
const birthday = `${year}-${month}-${day}`;

// 마지막 로그인
const loginRandomDate = getRandomData(new Date(2020, 1, 1), new Date());
const loginYear = loginRandomDate.getFullYear();
const loginMonth = loginRandomDate.getMonth() + 1;
const loginDay = loginRandomDate.getDay() + 1;
const lastLogin = `${loginYear}-${loginMonth}-${loginDay}`;

// 핸드폰 번호
const generatePhoneNumber = (num) => {
  const characters = "0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

let randomiddleNumber = generatePhoneNumber(4);
let randomEndNumber = generatePhoneNumber(4);
//console.log(`010-${randomiddleNumber}-${randomEndNumber}`);
const ph = `010-${randomiddleNumber}-${randomEndNumber}`;

export const userList = Array(200)
  .fill()
  .map((_, i) => ({
    id: i + 1,
    name: randomName,
    birth: birthday,
    phone: ph,
    lastestlogin: lastLogin,
  }));
