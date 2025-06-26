import React from 'react';
import { Tooltip, Button, Input } from 'cube';

export default () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
      }}
    >
      <Tooltip title="鼠标移入显示" trigger="hover">
        <Button>hover</Button>
      </Tooltip>
      <Tooltip title="点击显示" trigger="click">
        <Button>click</Button>
      </Tooltip>
      <Tooltip title="获得焦点显示" trigger="focus">
        <Input placeholder="focus" />
      </Tooltip>
    </div>
  );
};