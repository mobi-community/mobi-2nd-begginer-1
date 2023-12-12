// 범용 입력 필드 컴포넌트
const CustomInput = ({ label, value, onChange, type = "text" }) => {
    return (
      <div>
        {label && <label>{label}</label>}
        <input type={type} value={value} onChange={onChange} />
      </div>
    );
  }

  export default CustomInput;