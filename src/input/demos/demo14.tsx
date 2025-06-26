import React from 'react';
import { Input } from 'cube';

export default () => {
  return (
    <div className="ice-input-demo">
      {/* 通过 style 设置固定宽度 */}
      <Input style={{ width: '300px' }} placeholder="固定宽度 300px" />
      
      {/* 通过 style 设置百分比宽度 */}
      <div style={{ width: '50%' }}>
        <Input placeholder="父容器宽度 50%" />
      </div>
      
      {/* 通过 className 设置宽度 */}
      <Input className="custom-width" placeholder="自定义类名设置宽度" />
    </div>
  );
};