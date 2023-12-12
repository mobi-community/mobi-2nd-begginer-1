// 분리된 컴포넌트

import ButtonComponent from "./components/buttoncomponent";
import DisplayComponent from "./components/displaycomponent";
import { useState } from "react";


  const SeparatedComponent = () => {

    const [isModal, setIsModal] = useState(false)

    const onClickShowModal = ()=>{
        setIsModal((prev)=> !prev)
    }

    return (
      <div>
        <ButtonComponent onClick={()=>onClickShowModal}/>
        {isModal && <DisplayComponent />}
      </div>
    );
  }

  export default SeparatedComponent;