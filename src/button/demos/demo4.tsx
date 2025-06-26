import React from 'react';
import { Button } from 'cube';

export default () => {
  return (
    <>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Button size="large">大按钮</Button>
        <Button>默认按钮</Button>
        <Button size="small">小按钮</Button>
      </div>
    </>
  );
};