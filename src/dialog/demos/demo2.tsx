import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>自定义内容</Button>
      <Dialog
        visible={visible}
        title="自定义内容"
        onClose={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        <div style={{ textAlign: 'center' }}>
          <h3>这是一个自定义内容</h3>
          <p>可以放置任何内容</p>
          <img src="https://placekitten.com/300/200" alt="示例图片" />
        </div>
      </Dialog>
    </div>
  );
};