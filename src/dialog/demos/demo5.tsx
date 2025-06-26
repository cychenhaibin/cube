import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>垂直居中</Button>
      <Dialog
        visible={visible}
        title="垂直居中的对话框"
        centered
        onClose={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        <p>这是一个垂直居中的对话框</p>
      </Dialog>
    </div>
  );
};