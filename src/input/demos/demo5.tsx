import React from 'react';
import { Input } from 'cube';

export default () => {
  return (
    <div className="ice-input-demo">
      <Input style={{ width: '300px' }} type="password" placeholder="请输入密码" />
    </div>
  );
};