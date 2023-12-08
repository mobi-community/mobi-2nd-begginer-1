import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ReactComponent as OpenIcon } from "../asset/toggleOpen.svg";
import { ReactComponent as CloseIcon } from "../asset/toggleClose.svg";
import { MENU_LIST } from "../constant/MenuList";
import { flexCenter } from "../style/common";

const SideMenuLayout = () => {
  const navigate = useNavigate();

  //사이드 메뉴 상태
  const [isToggle, setIsToggle] = useState(
    localStorage.getItem("toggleState")
      ? JSON.parse(localStorage.getItem("toggleState")) //로컬 스토리지에 toggleState라는 데이터가 저장되 있을때
      : [false, false] //없을때 (첫 렌더링)
  );

  //로컬스토리지에 데이터가 있다면 처음투터 isToggle을 바꿔야 => useState
  useEffect(() => {
    localStorage.setItem("toggleState", JSON.stringify(isToggle));
  }, [isToggle]);

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
        {MENU_LIST.map((menu, index) => {
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
                <S.Wrapper>
                  {menu.icon}
                  <S.Text>{menu.title}</S.Text>
                </S.Wrapper>
                {isToggle[index] &&
                  menu.options.map((option) => {
                    return (
                      <S.SubMenu
                        onClick={() => {
                          navigate(option.url);
                        }}
                      >
                        · {option.subTitle}
                      </S.SubMenu>
                    );
                  })}
              </S.Menu>
            </S.ToggleSlide>
          );
        })}
      </S.SideNavWrapper>
      <S.OutletWrapper>
        <Outlet />
      </S.OutletWrapper>
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
  border: 1px solid black;
  position: fixed;
  ${flexCenter}
  flex-direction: column;
`;

const OutletWrapper = styled.div`
  margin-left: 250px;
  width: calc(100% - 250px);
`;

const ToggleSlide = styled.div`
  width: 200px;
  height: 250px;
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
  font-size: 20px;
  font-weight: 400;
  margin-left: 10px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubMenu = styled.div`
  font-size: 18px;
  cursor: pointer;
`;

const S = {
  Wrapper,
  SideNavWrapper,
  ToggleSlide,
  ToggleIcon,
  Text,
  OutletWrapper,
  Menu,
  SubMenu,
};
