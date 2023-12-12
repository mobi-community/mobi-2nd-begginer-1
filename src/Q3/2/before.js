// (2) 관심사를 분리해야할 때 - 서로 다른 기능을 하는 부분을 별도의 컴포넌트로 분리합니다.
// 관심사가 혼합된 컴포넌트
import { useState } from "react";

const MixedComponent = () => {

    const [isModal, setIsModal] = useState(false)

    const onClickShowModal = ()=>{
        setIsModal((prev)=> !prev)
    }

  return (
    <div>{/*상태를 변화시키는 버튼과 데이터의 내용이 혼합되어 있어 가독성이 좋지 않다 */}
      <button onClick={()=>onClickShowModal}>클릭</button>
      {isModal && <p>데이터 표시</p>}      
    </div>
  );
}

export default MixedComponent;