import React from 'react';
import { Button, Dropdown } from 'cube';

const items = [
  { label: '菜单项一', key: '1' },
  { label: '菜单项二', key: '2', disabled: true }, // 只禁用此项
  { label: '菜单项三', key: '3' },
];

export default () => (
  <Dropdown overlay={items}>
    <Button>禁用状态</Button>
  </Dropdown>
); 