import { faker } from '@faker-js/faker';
import shortId from 'shortid';

export const MockUsersData = (count) =>
    Array(count)
        .fill()
        .map(() => ({
            id: shortId.generate(),
            nickName: faker.person.firstName(),
            birth: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
            phoneNumber: faker.phone.number(),
            createdAt: faker.date.between('2023-01-01T00:00:00.000Z', '2023-01-31T00:00:00.000Z'),
        }));

// 랜덤 핸드폰 번호 ㄴ