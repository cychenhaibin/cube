import React from 'react';
import { Checkbox } from 'cube';

export default () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  return <Checkbox.Group options={options} />;
};
