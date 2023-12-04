import Pagination from "./components/Pagination";
import UserTable from "./components/UserTable";
import { userData } from "../data/user";

const AdminTogglePage = () => {
  const userList = userData(200);

  return (
    <>
      <UserTable userList={userList} />
      <Pagination userList={userList} />
    </>
  );
};

export default AdminTogglePage;
