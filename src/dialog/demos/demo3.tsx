import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>自定义头部</Button>
      <Dialog
        visible={visible}
        title={<div style={{ color: '#1890ff' }}>自定义标题样式</div>}
        onClose={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        <p>对话框内容</p>
      </Dialog>
    </div>
  );
};