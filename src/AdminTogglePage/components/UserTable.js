import { userData } from "../../data/user";
import OneUser from "./OneUser";

const UserTable = () => {
  const userList = userData(200);

  return (
    <table>
      {userList.map((user) => {
        return <OneUser key={user.id} user={user} />;
      })}
    </table>
  );
};

export default UserTable;
