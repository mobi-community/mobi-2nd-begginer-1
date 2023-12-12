// (4) 재사용되는 컴포넌트일 때 - 여러 곳에서 사용될 수 있는 범용 컴포넌트를 만듭니다.

import React from 'react';

const UnRecycleComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
        <div>
        <label>Username</label>
        <input type={type} value={username} onChange={(e)=> setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type={type} value={password} onChange={(e)=> setPassword(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UnRecycleComponent;