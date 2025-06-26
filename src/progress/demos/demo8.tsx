import { Progress } from 'cube';
import React from 'react';
const Circle_Status = () => {
  return (
    <div
      style={{
        width: '100%',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 0.5fr)',
      }}
    >
      <Progress percent={30} type="circle" status="active" />
      <Progress percent={30} type="circle" status="exception" />
      <Progress percent={30} type="circle" status="success" />
    </div>
  );
};

export default Circle_Status;