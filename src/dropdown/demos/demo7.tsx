import React from 'react';
import { Button, Dropdown } from 'cube';

const items = [
  { label: '点击我不会关闭菜单', key: '1', closeOnClick: false },
  { label: '点击我也不会关闭菜单', key: '2', closeOnClick: false },
  { label: '点击我会关闭菜单', key: '3', closeOnClick: true },
];

export default () => (
  <Dropdown overlay={items} trigger="click">
    <Button>菜单项点击关闭</Button>
  </Dropdown>
);
