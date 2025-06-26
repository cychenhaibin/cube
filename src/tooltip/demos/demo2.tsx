import React from 'react';
import { Tooltip, Button } from 'cube';

export default () => {
  return (
    <div style={{ width: '100%', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <Tooltip title="上边提示" placement="top">
        <Button>上边</Button>
      </Tooltip>
      <Tooltip title="下边提示" placement="bottom">
        <Button>下边</Button>
      </Tooltip>
      <Tooltip title="左边提示" placement="left">
        <Button>左边</Button>
      </Tooltip>
      <Tooltip title="右边提示" placement="right">
        <Button>右边</Button>
      </Tooltip>
    </div>
  );
};