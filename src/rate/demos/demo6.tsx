import React, { useState } from 'react';
import { Rate } from 'cube';

export default () => {
  const [values, setValues] = useState({
    star: 0,
    heart: 0,
    like: 0
  });
  
  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Rate 
          icon="star" 
          value={values.star} 
          onChange={(val) => setValues(prev => ({ ...prev, star: val }))}
        />
        <span style={{ marginLeft: 8 }}>星星评分：{values.star} 分</span>
      </div>
      <div style={{ marginBottom: 16 }}>
        <Rate 
          icon="heart" 
          value={values.heart} 
          onChange={(val) => setValues(prev => ({ ...prev, heart: val }))}
        />
        <span style={{ marginLeft: 8 }}>心形评分：{values.heart} 分</span>
      </div>
    </div>
  );
};