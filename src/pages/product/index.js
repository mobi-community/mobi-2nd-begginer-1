import styled from "styled-components";

import { useState } from "react";
import ProductList from "./product_list";
import RegisterProduct from "./register_product";
import { useNavigate } from "react-router-dom";

const ManageProducts = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const navigate = useNavigate();

  const tabs = [
    { name: "물품목록", content: <ProductList /> },
    { name: "물품등록", content: <RegisterProduct /> },
  ];

  const selectedTab = (index) => {
    setCurrentTab(index);
    // console.log(index);
    // if (index !== 1) {
    //   navigate("/");
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

export default ManageProducts;

const Wrapper = styled.div`
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
