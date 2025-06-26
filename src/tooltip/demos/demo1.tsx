import React from 'react';
import { Tooltip, Button } from 'cube';

export default () => {
  return (
    <Tooltip title="提示文字">
      <Button>鼠标移入显示提示</Button>
    </Tooltip>
  );
};