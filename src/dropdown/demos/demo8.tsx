import React from 'react';
import { Button, Dropdown } from 'cube';

const items = [
  { label: '自定义样式1', key: '1' },
  { label: '自定义样式2', key: '2' },
];

export default () => (
  <Dropdown
    overlay={items}
    overlayClassName="my-dropdown"
    overlayStyle={{ color: 'red', minWidth: 200 }}
    trigger="click"
  >
    <Button>自定义样式</Button>
  </Dropdown>
); 