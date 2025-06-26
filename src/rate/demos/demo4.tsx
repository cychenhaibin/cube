import React, { useState } from 'react';
import { Rate } from 'cube';

export default () => {
  const [value, setValue] = useState(0);
  
  return (
    <div>
      <Rate 
        value={value}
        onChange={setValue}
        allowClear
      />
      <div style={{ marginTop: 8 }}>
        当前评分：{value || '未评分'} {value ? '分' : ''}
        {value > 0 && <span style={{ marginLeft: 8, fontSize: 12, color: '#999' }}>(点击相同分数可清除)</span>}
      </div>
    </div>
  );
};