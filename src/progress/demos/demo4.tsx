import { Progress } from 'cube';
import React from 'react';
const Circle_StrokeLinecap = () => {
  return (
    <div
      style={{
        width: '100%',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
      }}
    >
      <Progress percent={30} type="circle" strokeLinecap="butt" />
      <Progress percent={50} type="circle" strokeLinecap="round" />
    </div>
  );
};

export default Circle_StrokeLinecap;