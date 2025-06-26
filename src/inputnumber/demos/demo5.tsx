import React from 'react';
import { InputNumber } from 'cube';

export default () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
      }}
    >
      <InputNumber size="small" defaultValue={0} />
      <InputNumber size="middle" defaultValue={0} />
      <InputNumber size="large" defaultValue={0} />
    </div>
  );
};