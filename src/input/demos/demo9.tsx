import React from 'react';
import { Input } from 'cube';

export default () => {
  return (
    <div className="ice-input-demo">
      <Input style={{ width: '300px' }} type="tel" placeholder="请输入电话号码" />
    </div>
  );
};