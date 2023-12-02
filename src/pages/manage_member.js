import { UserList } from "../__mock__/user_list";

const ManageMember = () => {
  const user = UserList(200);
  console.log(user);
  return <>회원 관리 페이지</>;
};

export default ManageMember;
