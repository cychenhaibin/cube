import React, { useState } from 'react';
import { Rate } from 'cube';

export default () => {
  const [value, setValue] = useState(0);
  
  return (
    <div>
      <Rate 
        value={value}
        onChange={setValue}
        colors={['#F56C6C', '#E6A23C', '#67C23A']}
        lowThreshold={2}
        highThreshold={4}
      />
      <div style={{ marginTop: 8 }}>
        {value <= 2 && <span style={{ color: '#F56C6C' }}>较差 ({value} 分)</span>}
        {value > 2 && value <= 4 && <span style={{ color: '#E6A23C' }}>一般 ({value} 分)</span>}
        {value > 4 && <span style={{ color: '#67C23A' }}>优秀 ({value} 分)</span>}
      </div>
    </div>
  );
};