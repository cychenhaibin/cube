import React from 'react';
import { InputNumber } from 'cube';

export default () => {
  return <InputNumber defaultValue={0} onChange={(value) => console.log(value)} />;
};