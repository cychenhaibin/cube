import React from 'react';
import { Button, Dropdown } from 'cube';

const items = [
  { label: '菜单项一', key: '1' },
  { label: '菜单项二', key: '2' },
  { label: '菜单项三', key: '3' },
];

export default () => (
  <Dropdown overlay={items} trigger="contextMenu">
    <Button>右键触发</Button>
  </Dropdown>
); 