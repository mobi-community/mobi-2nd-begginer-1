import { faker } from '@faker-js/faker';
import shortId from 'shortid';

const randomPhoneNumber = () => {
    return `010-${Math.floor(Math.random() * 9999) + 1000}-${Math.floor(Math.random() * 9999) + 1000}`;
};

const blindPhoneNumber = () => {
    const blindPhoneNum = randomPhoneNumber().split('-');
    //[010,1234,1234] 쪼개기
    blindPhoneNum[1] = '****';
    //[010,****,1234] 가리기
    return blindPhoneNum.join('-');
    //010-****-1234 붙이기
};

export const MockUsersData = (count) =>
    Array(count)
        .fill()
        .map(() => ({
            id: shortId.generate(),
            nickName: faker.person.firstName(),
            birth: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
            phoneNumber: blindPhoneNumber(),
            createdAt: faker.date.between('2023-01-01T00:00:00.000Z', '2023-01-31T00:00:00.000Z'),
        }));
