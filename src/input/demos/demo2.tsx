import React from 'react';
import { Input } from 'cube';

export default () => {
  return (
    <div className="ice-input-demo">
      <Input style={{ width: '300px' }} size="small" placeholder="小尺寸" />
      <Input style={{ width: '300px' }} placeholder="默认尺寸" />
      <Input style={{ width: '300px' }} size="large" placeholder="大尺寸" />
    </div>
  );
};