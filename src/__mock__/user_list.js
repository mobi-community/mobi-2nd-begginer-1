export const UserList = (count) => {
  function generateRandomDate(from, to) {
    return new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
  }

  return Array(count)
    .fill()
    .map(() => ({
      id: Math.floor(Math.random() * 100000),
      name: "da",
      birthday: generateRandomDate(new Date(2023, 0, 1), new Date()),
      number: "a",
      createdAt: "a",
    }));
};
