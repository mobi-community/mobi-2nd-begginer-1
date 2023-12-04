import { useSearchParams } from "react-router-dom";
import OneUser from "./OneUser";

const UserTable = ({ userList }) => {
  //useSearchParams
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page");
  const currentFirstPage = (currentPage - 1) * 20;
  const currentPageCount = currentPage * 20;

  const userListData = userList.slice(currentFirstPage, currentPageCount);
  //1페이지 => slice(0,20)
  //2페이지 => slice(20,40) => 인덱스 : 20 ~ 39(20개)

  return (
    <table>
      {userListData.map((user) => {
        return <OneUser key={user.id} user={user} />;
      })}
    </table>
  );
};

export default UserTable;
