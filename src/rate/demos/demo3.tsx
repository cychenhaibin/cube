import React, { useState } from 'react';
import { Rate } from 'cube';

export default () => {
  const [value, setValue] = useState(0);
  const texts = ['极差', '失望', '一般', '满意', '惊喜'];
  
  return (
    <div>
      <Rate 
        value={value}
        onChange={setValue}
        showText 
        texts={texts}
      />
      <div style={{ marginTop: 8 }}>
        您的评价：{value ? texts[value - 1] : '未评分'}
      </div>
    </div>
  );
};