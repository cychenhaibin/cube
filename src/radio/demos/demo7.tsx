import React from 'react';
import { Radio } from 'cube';

export default () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3', disabled: true },
  ];

  return <Radio.Group options={options} defaultValue="1" />;
};