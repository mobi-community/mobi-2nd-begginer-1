// (4) 재사용되는 컴포넌트일 때 - 여러 곳에서 사용될 수 있는 범용 컴포넌트를 만듭니다.

import React from 'react';

const RecycleComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <CustomInput 
        label="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
      />
      <CustomInput 
        label="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        type="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RecycleComponent;