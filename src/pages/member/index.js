import styled from "styled-components";
import MemberList from "./member_list";
import RegisterMember from "./register_member";
import { useState } from "react";

const ManageMembers = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const tabs = [
    { name: "회원목록", content: <MemberList /> },
    { name: "회원등록", content: <RegisterMember /> },
  ];

  const selectedTab = (index) => {
    setCurrentTab(index);
  };

  return (
    <Wrapper>
      <Tabs>
        {tabs.map((tab, index) => (
          <li
            className={index === currentTab ? "tab focused" : "tab"}
            onClick={() => selectedTab(index)}
            key={index}
          >
            {tab.name}
          </li>
        ))}
      </Tabs>
      <Contents>{tabs[currentTab].content}</Contents>
    </Wrapper>
  );
};

export default ManageMembers;

const Wrapper = styled.div``;
const Tabs = styled.ul`
  color: navy;
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
    border: 1px solid black;

    .focused {
      background-color: navy;
      color: white;
    }
  }
`;
const Contents = styled.div``;
