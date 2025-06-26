import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>可拖拽对话框</Button>
      <Dialog
        visible={visible}
        title="可拖拽对话框"
        draggable
        onClose={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        <p>点击标题栏并拖动可以移动对话框</p>
      </Dialog>
    </div>
  );
};