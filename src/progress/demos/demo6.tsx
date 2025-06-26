import { Progress } from 'cube';
import React from 'react';
const Circle_Base = () => {
  return (
    <div
      style={{
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Progress percent={30} type="circle" />
    </div>
  );
};

export default Circle_Base;