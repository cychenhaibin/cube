import React from 'react';
import { InputNumber } from 'cube';

export default () => {
  return (
    <div style={{ width: '100%', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <InputNumber prefix="$" defaultValue={0} />
      <InputNumber suffix="%" defaultValue={0} />
    </div>
  );
};