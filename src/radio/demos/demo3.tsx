import React from 'react';
import { Radio } from 'cube';

export default () => {
  return (
    <Radio.Group defaultValue="1" direction="vertical">
      <Radio value="1">Option 1</Radio>
      <Radio value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
    </Radio.Group>
  );
};