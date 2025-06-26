import { Progress } from 'cube';
import React from 'react';
const Line_Base = () => {
  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <Progress percent={30} />
    </div>
  );
};

export default Line_Base;