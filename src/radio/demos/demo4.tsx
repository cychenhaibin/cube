import React from 'react';
import { Radio } from 'cube';

export default () => {
  return (
    <>
      <Radio disabled>disabled</Radio>
      <Radio.Group disabled defaultValue="1">
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </Radio.Group>
    </>
  );
};