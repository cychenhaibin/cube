import React, { useState } from 'react';
import { Rate } from 'cube';

export default () => {
  const [value, setValue] = useState(0);
  
  return (
    <div>
      <Rate value={value} onChange={setValue} />
      <div style={{ marginTop: 8 }}>
        当前评分：{value} 分
      </div>
    </div>
  );
};