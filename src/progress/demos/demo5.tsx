import { Progress } from 'cube';
import React from 'react';
const Line_Step = () => {
  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <div>
        <Progress percent={30} steps={4} status="success" />
      </div>
      <div>
        <Progress percent={30} steps={6} />
      </div>
    </div>
  );
};

export default Line_Step;