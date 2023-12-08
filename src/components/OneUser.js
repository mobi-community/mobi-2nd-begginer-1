const OneUser = ({ user }) => {
  const { id, name, birthDate, phoneNumber, lastLoginDate } = user;

  const modifiedNumber = phoneNumber.replace(/-(\d{4})-/, "-****-");

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{birthDate}</td>
      <td>{modifiedNumber}</td>
      <td>{lastLoginDate}</td>
    </tr>
  );
};

export default OneUser;
