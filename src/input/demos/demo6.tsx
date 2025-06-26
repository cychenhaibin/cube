import React from 'react';
import { Input } from 'cube';

export default () => {
  return (
    <div className="ice-input-demo">
      <Input style={{ width: '300px' }} type="number" placeholder="请输入数字" />
    </div>
  );
};