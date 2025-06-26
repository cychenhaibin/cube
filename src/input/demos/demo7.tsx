import React from 'react';
import { Input } from 'cube';

export default () => {
  return (
    <div className="ice-input-demo">
      <Input style={{ width: '300px' }} type="email" placeholder="请输入邮箱" />
    </div>
  );
};