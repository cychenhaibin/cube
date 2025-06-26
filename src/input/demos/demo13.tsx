import React from 'react';
import { Input } from 'cube';

export default () => {
  return (
    <div className="ice-input-demo">
      <Input style={{ width: '300px' }} autoFocus placeholder="自动聚焦" />
    </div>
  );
};