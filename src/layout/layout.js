// [5] **토글 슬라이드가 가능한 사이드 메뉴 만들기**

// - **회원관리**
//     - 회원목록 (위에서 구현한 회원 목록 표가 나와야함)
//     - 회원등록 (빈화면, 구분만 가능하도록 “회원등록” 글씨만 정중앙에 노출)
// - **상품관리**
//     - 상품목록 (빈화면)
//     - 상품등록 (빈화면)

// **단, 모든 토글은 뒤로가기가 지원해야하며, 새로고침 및 뒤로가기 시 열어두었던 
// 토글은 닫혀서 안됩니다.**

// **(1)** 회원관리(열림) → 회원목록 → 회원등록 → 뒤로기기 → **회원관리가 열린상태로 회원목록**

// **(2)** 회원관리(열림) → 회원목록 → 상품등록(열림) → 상품목록 → 뒤로가기 → 
//      **회원관리, 상품관리가 모두 열려있어야 함**



import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Layout = () => {

  const [isUserManage, setIsUserManage] = useState(false)
  const [isProdManage, setIsProdManage] = useState(false)
 
  const navigate = useNavigate();

  return (
    <>
      <ToggleRapper>
        <SlideToggleWrpper>
        <SlideToggle onClick={()=>setIsUserManage((prev)=>!prev)}>회원관리
        </SlideToggle>
        {isUserManage && <ToggleItemRapper><ToggleItem onClick={()=>navigate("/member-list")}>회원목록</ToggleItem><ToggleItem onClick={()=>navigate("/member-register")}>회원등록</ToggleItem></ToggleItemRapper>
        }
        </SlideToggleWrpper>
        <SlideToggleWrpper>
        <SlideToggle onClick={()=>setIsProdManage((prev)=>!prev)}>상품관리
        
        </SlideToggle>
        {isProdManage && <ToggleItemRapper> <ToggleItem onClick={()=>navigate("/product-list")}>상품관리</ToggleItem><ToggleItem onClick={()=>navigate("/product-register")}>상품등록</ToggleItem></ToggleItemRapper>}
        </SlideToggleWrpper>
      </ToggleRapper>
      <Outlet />
    </>
  );
};

export default Layout;

const ToggleRapper = styled.div`
  display: flex;
  justify-content: center;

`
const SlideToggleWrpper = styled.div`

`

const SlideToggle = styled.div`
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer
`

const ToggleItem = styled.div`
  cursor:pointer
`

const ToggleItemRapper = styled.div`
position:absolute;
top:50px;
`