import React from 'react';
import { Select } from 'cube';

const options = [
  { value: '1', label: '选项1' },
  { value: '2', label: '选项2', disabled: true },
  { value: '3', label: '选项3' },
];

export default () => (
  <>
    <Select style={{ width: '50%' }} options={options} disabled placeholder="禁用状态" />
    <br />
    <br />
    <Select style={{ width: '50%' }} options={options} placeholder="选项2被禁用" />
  </>
);