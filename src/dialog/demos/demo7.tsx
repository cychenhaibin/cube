import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>全屏对话框</Button>
      <Dialog
        visible={visible}
        title="全屏对话框"
        fullscreen
        onClose={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        <p>这是一个全屏对话框</p>
      </Dialog>
    </div>
  );
};