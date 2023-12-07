import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as OpenIcon } from "../asset/toggleOpen.svg";
import { ReactComponent as CloseIcon } from "../asset/toggleClose.svg";

const menuList = [
  {
    title: "회원관리",
    options: [
      {
        subTitle: "회원목록",
      },
      {
        subTitle: "회원등록",
      },
    ],
  },
  {
    title: "상품관리",
    options: [
      {
        subTitle: "상품목록",
      },
      {
        subTitle: "상품등록",
      },
    ],
  },
];

const SideMenuLayout = () => {
  //회원관리
  const [isToggle, setIsToggle] = useState([false, false]);

  const onIsToggleChange = (index) => {
    setIsToggle((prev) => {
      const updatedState = [...prev];
      updatedState[index] = !prev[index];
      return updatedState;
    });
  };

  return (
    <S.Wrapper>
      <S.SideNavWrapper>
        {menuList.map((menu, index) => {
          return (
            <S.ToggleSlide>
              <S.ToggleIcon>
                {isToggle[index] ? (
                  <OpenIcon
                    onClick={() => {
                      onIsToggleChange(index);
                    }}
                  />
                ) : (
                  <CloseIcon
                    onClick={() => {
                      onIsToggleChange(index);
                    }}
                  />
                )}
              </S.ToggleIcon>

              <S.Menu>
                <S.Text>{menu.title}</S.Text>
                {isToggle[index] &&
                  menu.options.map((option) => {
                    return <S.SubMenu>- {option.subTitle}</S.SubMenu>;
                  })}
              </S.Menu>
            </S.ToggleSlide>
          );
        })}
      </S.SideNavWrapper>
      <Outlet />
    </S.Wrapper>
  );
};

export default SideMenuLayout;

const Wrapper = styled.div`
  display: flex;
`;

const SideNavWrapper = styled.div`
  width: 250px;
  height: 100vh;
  background-color: skyblue;
  position: fixed;
`;

const ToggleSlide = styled.div`
  width: 200px;
  height: 250px;
  background-color: #fff;
  margin: 20px;
  padding: 40px;
  font-size: x-large;
  display: flex;
`;

const ToggleIcon = styled.div`
  display: flex;
  justify-content: start;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubMenu = styled.div`
  /* width: 150px;
  height: 150px; */
  /* color: gray; */
  font-size: 14px;
  cursor: pointer;
`;

const S = {
  Wrapper,
  SideNavWrapper,
  ToggleSlide,
  ToggleIcon,
  Text,
  Menu,
  SubMenu,
};
