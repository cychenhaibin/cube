import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>自定义页脚</Button>
      <Dialog
        visible={visible}
        title="自定义页脚"
        footer={
          <div>
            <button onClick={() => setVisible(false)}>Control</button>
            <button 
              style={{ marginLeft: 8, background: '#1890ff', color: '#fff' }}
              onClick={() => setVisible(false)}
            >
              Confirm
            </button>
          </div>
        }
        onClose={() => setVisible(false)}
      >
        <p>自定义页脚内容</p>
      </Dialog>
    </div>
  );
};