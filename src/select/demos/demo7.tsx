import React from 'react';
import { Select } from 'cube';

const remoteMethod = (query: string): Promise<{ value: string; label: string }[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const options = [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' },
        { value: '3', label: '选项3' },
      ].filter((option) => option.label.toLowerCase().includes(query.toLowerCase()));
      resolve(options);
    }, 200);
  });
};

export default () => (
  <Select
    style={{ width: '50%' }}
    options={[]}
    filterable
    remoteMethod={remoteMethod}
    placeholder="请输入关键词"
    onChange={(value) => console.log('selected value:', value)}
  />
);