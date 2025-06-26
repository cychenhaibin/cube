import React from 'react';
import { Input } from 'cube';

export default () => {
  return (
    <div className="ice-input-demo">
      <Input style={{ width: '300px' }} prefix="￥" suffix="RMB" placeholder="请输入金额" />
      <Input style={{ width: '300px' }} prefix="🔍" placeholder="搜索" />
      <Input style={{ width: '300px' }} suffix=".com" placeholder="请输入网址" />
    </div>
  );
};