import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ReactComponent as OpenIcon } from "../asset/toggleOpen.svg";
import { ReactComponent as CloseIcon } from "../asset/toggleClose.svg";
import { MENU_LIST } from "../constant/MenuList";
import { flexCenter } from "../style/common";

const SideMenuLayout = () => {
  const navigate = useNavigate();
  const currentURL = window.location.href;
  const baseURL = "http://localhost:3000";
  //현재 url에서 baseURL과 파라미터를 제외한 주소만 가져오기
  const relativeURL = currentURL.replace(baseURL, "").split("?")[0];

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

  //토글이 닫혀있어도 해당 페이지가 화면에 보여지면 토글 오픈하는 useEffect
  useEffect(() => {
    MENU_LIST.forEach((menu, index) => {
      if (relativeURL.includes(menu.baseURL)) {
        setIsToggle((prev) => {
          const updatedState = [...prev];
          updatedState[index] = true;
          return updatedState;
        });
      }
    });
  }, [relativeURL]);

  return (
    <S.Wrapper>
      <S.SideNavWrapper>
        {MENU_LIST.map((menu, index) => {
          return (
            <S.ToggleSlide>
              <S.Menu>
                <S.Title
                  onClick={() => {
                    onIsToggleChange(index);
                  }}
                  open={isToggle[index]}
                >
                  {menu.icon}
                  <S.Text>{menu.title}</S.Text>
                  {isToggle[index] ? <OpenIcon /> : <CloseIcon />}
                </S.Title>
                <S.SubMenuWrapper>
                  {isToggle[index] &&
                    menu.options.map((option) => {
                      return (
                        <S.SubMenu
                          onClick={() => {
                            navigate(option.url);
                          }}
                          currentPage={relativeURL === option.url}
                        >
                          {option.subTitle}
                        </S.SubMenu>
                      );
                    })}
                </S.SubMenuWrapper>
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

const Title = styled.div`
  display: flex;
  background-color: ${({ open, theme }) =>
    open ? theme.COLORS.dark_grey : "transparent"};
  border-radius: 25px;
  height: 30px;
  width: 150px;
  ${flexCenter}
`;

const SideNavWrapper = styled.div`
  width: 250px;
  height: 100vh;
  border: 1px solid black;
  position: fixed;
  ${flexCenter}
  flex-direction: column;
  background-color: black;
  color: white;
`;

const OutletWrapper = styled.div`
  margin-left: 250px;
  width: calc(100% - 250px);
`;

const ToggleSlide = styled.div`
  width: 200px;
  height: 150px;
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
  margin: 0 10px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubMenu = styled.div`
  font-size: 18px;
  cursor: pointer;
  border-bottom: 1px solid
    ${({ currentPage }) => (currentPage ? "white" : "transparent")};
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.light_grey};
    transform: scale(1.1);
  }
`;

const SubMenuWrapper = styled.div`
  ${flexCenter};
  flex-direction: column;
  margin-top: 10px;
  gap: 10px;
`;

const S = {
  Wrapper,
  Title,
  SideNavWrapper,
  ToggleSlide,
  ToggleIcon,
  Text,
  OutletWrapper,
  Menu,
  SubMenu,
  SubMenuWrapper,
};
