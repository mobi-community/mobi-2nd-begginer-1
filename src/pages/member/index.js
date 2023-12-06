import styled from "styled-components";
import MemberList from "./member_list";
import RegisterMember from "./register_member";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageMembers = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const navigate = useNavigate();

  const tabs = [
    { name: "회원목록", content: <MemberList /> },
    { name: "회원등록", content: <RegisterMember /> },
  ];

  const selectedTab = (index) => {
    setCurrentTab(index);
    console.log(index);
    // if (index === 1) {
    //   navigate("/manage?register-member");
    // }
  };

  return (
    <Wrapper>
      <Tabs>
        {tabs.map((tab, index) => (
          <li className={index === currentTab ? "tab focused" : "tab"} onClick={() => selectedTab(index)} key={index}>
            {tab.name}
          </li>
        ))}
      </Tabs>
      <Contents>{tabs[currentTab].content}</Contents>
    </Wrapper>
  );
};

export default ManageMembers;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #555;
`;
const Tabs = styled.ul`
  font-weight: bold;
  flex-wrap: wrap;
  cursor: pointer;
  list-style: none;
  display: flex;
  flex-direction: row;

  .tab {
    margin: 0 10px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #555;

    .focused {
      background-color: navy;
      color: white;
    }
  }
`;
const Contents = styled.div``;
