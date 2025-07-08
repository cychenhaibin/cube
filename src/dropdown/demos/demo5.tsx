import React, { useState } from 'react';
import { Button, Dropdown } from 'cube';

const items = [
  { label: '菜单项一', key: '1' },
  { label: '菜单项二', key: '2' },
  { label: '菜单项三', key: '3' },
];

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(v => !v)}>{visible ? '关闭' : '打开'}菜单</Button>
      <Dropdown overlay={items} visible={visible} onVisibleChange={setVisible}>
        <Button>受控模式</Button>
      </Dropdown>
    </>
  );
}; 