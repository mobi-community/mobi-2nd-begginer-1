import { ReactComponent as UserIcon } from "../asset/user.svg";
import { ReactComponent as ItemIcon } from "../asset/item.svg";

//토글 사이드바 리스트
export const MENU_LIST = [
  {
    title: "회원관리",
    baseURL: "user",
    icon: <UserIcon />,
    options: [
      {
        subTitle: "회원목록",
        url: "/user/list",
      },
      {
        subTitle: "회원등록",
        url: "/user/register",
      },
    ],
  },
  {
    title: "상품관리",
    baseURL: "item",
    icon: <ItemIcon />,
    options: [
      {
        subTitle: "상품목록",
        url: "/item/list",
      },
      {
        subTitle: "상품등록",
        url: "/item/register",
      },
    ],
  },
];
