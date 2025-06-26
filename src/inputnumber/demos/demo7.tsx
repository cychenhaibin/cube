import React from 'react';
import { InputNumber } from 'cube';

export default () => (
  <div style={{ width: '100%', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
    {/* 限制最小值为 0，最大值为 10 */}
    <InputNumber min={0} max={10} defaultValue={5} />

    {/* 限制最小值为 -10，最大值为 10 */}
    <InputNumber min={-10} max={10} defaultValue={0} />

    {/* 限制最小值为 0，最大值为 100，步长为 10 */}
    <InputNumber min={0} max={100} step={10} defaultValue={50} />
  </div>
);