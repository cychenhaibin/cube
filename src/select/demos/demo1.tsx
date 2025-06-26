import React from 'react';
import { Select } from 'cube';

const options = [
  { value: '1', label: '选项1' },
  { value: '2', label: '选项2' },
  { value: '3', label: '选项3' },
];

export default () => (
  <Select
    style={{ width: '50%' }}
    options={options}
    placeholder="请选择"
    onChange={(value) => console.log('selected value:', value)}
  />
);