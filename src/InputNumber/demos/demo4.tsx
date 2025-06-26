import React from 'react';
import { InputNumber } from 'cube';

export default () => {
  return <InputNumber defaultValue={0.23} step={0.1} precision={2} />;
};