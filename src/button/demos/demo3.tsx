import React from 'react';
import { Button, Icon } from 'cube';

export default () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Button icon={<Icon name="search" size={14} />}>搜索</Button>
      <Button icon={<Icon name="icon_bin" size={14} />}>添加</Button>
    </div>
  );
};