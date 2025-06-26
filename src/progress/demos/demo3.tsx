import { Progress } from 'cube';
import React from 'react';
const Line_Status = () => {
  return (
    <div
      style={{
        width: '100%',
        margin: '0 auto',
        display: 'grid',
        gap: '16px',
      }}
    >
      <Progress percent={30} status="active" />
      <Progress percent={30} status="exception" />
      <Progress percent={30} status="success" />
    </div>
  );
};

export default Line_Status;