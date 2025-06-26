import React from 'react';
import { Select } from 'cube';

const options = [
  {
    label: '热门城市',
    options: [
      { value: 'Shanghai', label: '上海' },
      { value: 'Beijing', label: '北京' },
    ],
  },
  {
    label: '城市名',
    options: [
      { value: 'Chengdu', label: '成都' },
      { value: 'Shenzhen', label: '深圳' },
      { value: 'Guangzhou', label: '广州' },
      { value: 'Dalian', label: '大连' },
    ],
  },
];

export default () => (
  <Select
    style={{ width: '50%' }}
    options={options}
    placeholder="请选择"
    onChange={(value) => console.log('selected value:', value)}
  />
);