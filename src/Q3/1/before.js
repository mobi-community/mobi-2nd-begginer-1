// (1) 가독성이 좋지 않을 때 - 대규모 컴포넌트를 더 작고 관리하기 쉬운 컴포넌트로 분리합니다.

import { MockData } from "./mock/data";

// 가독성이 떨어지는 대규모 컴포넌트
const LargeComponent = () => {
  return (
    
    <div>
    {/* 유저 정보 */}
    <div>
      <div>{MockData.UserID}</div>
      <div>{MockData.UserNick}</div>
      <div>
      {MockData.User_Profile}
      </div>
    </div>
    {/* 게시글 정보 */}
      <div>게시글 내용
      {MockData.Content.Img}
        <h1>{MockData.Content.Title}</h1>
        <p>{MockData.Content.Content}</p>
      </div>
    {/* 리뷰 정보 */}  
        <div>
            <div>{MockData.Review.User}</div>
            <div> {MockData.Review.Content}</div>
            <div> {MockData.Review.Stars}</div>
        </div>
    </div>
    
  );
}

export default LargeComponent;

