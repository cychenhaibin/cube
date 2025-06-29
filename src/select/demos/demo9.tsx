import React, { useState } from 'react';
import { Select } from 'cube';

const options = [
  { value: 'apple', label: '苹果' },
  { value: 'banana', label: '香蕉' },
  { value: 'orange', label: '橙子' },
  { value: 'watermelon', label: '西瓜' },
  { value: 'grape', label: '葡萄' },
];

export default () => {
  const [value, setValue] = useState<(string | number)[]>([]);
  return (
    <div>
      <div style={{ marginBottom: 8 }}>多选 + 可搜索 + 悬浮展开</div>
      <Select
        style={{ width: 260 }}
        options={options}
        placeholder="请选择水果"
        multiple
        filterable
        trigger="hover"
        value={value}
        onChange={val => setValue(Array.isArray(val) ? val : [])}
      />
      <div style={{ marginTop: 12, color: '#888' }}>
        当前选中：{Array.isArray(value) && value.length > 0 ? value.join('，') : '无'}
      </div>
    </div>
  );
} 