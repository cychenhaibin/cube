import { Progress } from 'cube';
import React from 'react';
const Line_StrokeLinecap = () => {
  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <Progress percent={30} strokeLinecap="butt" />
      <Progress percent={30} strokeLinecap="round" />
    </div>
  );
};

export default Line_StrokeLinecap;