import Content from "./component/content";
import User from "./component/user";
import Review from "./component/review";

// 분리된 컴포넌트
  const ImprovedComponent = () => {
    return (
      <div>
        <User />
        <Content />
        <Review />
        {/* 기타 컴포넌트... */}
      </div>
    );
  }

  export default ImprovedComponent;