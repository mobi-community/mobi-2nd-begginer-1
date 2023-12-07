const OneUser = ({ user }) => {
  const { id, name, birthDate, phoneNumber, lastLoginDate } = user;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{birthDate}</td>
      <td>{phoneNumber}</td>
      <td>{lastLoginDate}</td>
    </tr>
  );
};

export default OneUser;
