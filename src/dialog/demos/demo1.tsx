import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>打开对话框</Button>
      <Dialog
        visible={visible}
        title="基础对话框"
        onClose={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        <p>这是一个基础对话框</p>
      </Dialog>
    </div>
  );
};