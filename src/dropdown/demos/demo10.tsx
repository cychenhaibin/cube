import React, { useState } from 'react';
import { Button, Dropdown } from 'cube';

const items = [
  { label: '菜单项一', key: '1' },
  { label: '菜单项二', key: '2' },
  { label: '菜单项三', key: '3' },
];

const placements = [
  'bottomLeft',
  'bottomRight',
  'topLeft',
  'topRight',
] as const;

export default () => {
  const [placement, setPlacement] = useState<'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'>('bottomLeft');
  return (
    <>
      <div style={{ marginBottom: 8 }}>
        {placements.map(p => (
          <Button key={p} style={{ marginRight: 8 }} onClick={() => setPlacement(p)}>{p}</Button>
        ))}
      </div>
      <Dropdown overlay={items} trigger="click" placement={placement}>
        <Button>切换位置</Button>
      </Dropdown>
    </>
  );
}; 