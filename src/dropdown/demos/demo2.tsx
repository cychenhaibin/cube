import React from 'react';
import { Button, Dropdown, Icon } from 'cube';

const items = [
  { label: '菜单项一', key: '1' },
  { label: '菜单项二', key: '2' },
  { label: '菜单项三', key: '3' },
];

export default () => (
  <Dropdown overlay={items} trigger="hover">
    <a onClick={e => e.preventDefault()} style={{ display: 'flex', alignItems: 'center' }}>
        Hover me <Icon name="double_screen" size={16} />
    </a>
  </Dropdown>
); 