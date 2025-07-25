import React from 'react';
import { Button, Dropdown } from 'cube';

const items = [
  {
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      { key: '1-1', label: '1st menu item' },
      { key: '1-2', label: '2nd menu item' },
    ],
  },
  {
    key: '2',
    label: 'sub menu',
    children: [
      { key: '2-1', label: '3rd menu item' },
      { key: '2-2', label: '4th menu item' },
    ],
  },
  {
    key: '3',
    label: 'disabled sub menu',
    disabled: true,
    children: [
      { key: '3-1', label: '5th menu item' },
      { key: '3-2', label: '6th menu item' },
    ],
  },
];

export default () => (
  <Dropdown overlay={items} trigger="click" >
    <Button>Cascading menu</Button>
  </Dropdown>
);
