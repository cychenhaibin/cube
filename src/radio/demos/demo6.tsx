import React from 'react';
import { Radio } from 'cube';

export default () => {
  return (
    <div>
      <div>
        <Radio.Group size="small" defaultValue="1">
          <Radio value="1">Option 1</Radio>
          <Radio value="2">Option 2</Radio>
        </Radio.Group>
      </div>
      <div style={{ marginTop: 16 }}>
        <Radio.Group defaultValue="1">
          <Radio value="1">Option 1</Radio>
          <Radio value="2">Option 2</Radio>
        </Radio.Group>
      </div>
      <div style={{ marginTop: 16 }}>
        <Radio.Group size="large" defaultValue="1">
          <Radio value="1">Option 1</Radio>
          <Radio value="2">Option 2</Radio>
        </Radio.Group>
      </div>
    </div>
  );
};