import React from 'react';
import { Button, Dropdown } from 'cube';

const getItems = () => [
  { label: '动态菜单1', key: '1' },
  { label: '动态菜单2', key: '2' },
];

export default () => (
  <Dropdown overlay={getItems()} trigger="click">
    <Button>overlay为函数</Button>
  </Dropdown>
);
