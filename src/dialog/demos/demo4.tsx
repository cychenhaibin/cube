import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible1(true)}>打开第一层对话框</Button>
      <Dialog
        visible={visible1}
        title="第一层对话框"
        onClose={() => setVisible1(false)}
        onOk={() => setVisible1(false)}
      >
        <div>
          <p>点击下面的按钮打开第二层对话框</p>
          <Button onClick={() => setVisible2(true)}>打开第二层</Button>
          <Dialog
            visible={visible2}
            title="第二层对话框"
            onClose={() => setVisible2(false)}
            onOk={() => setVisible2(false)}
          >
            <p>这是第二层对话框的内容</p>
          </Dialog>
        </div>
      </Dialog>
    </div>
  );
};