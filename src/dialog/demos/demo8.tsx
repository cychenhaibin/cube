import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);
  
  const handleOk = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setVisible(false);
    } catch (error) {
      console.error('操作失败:', error);
    }
  };

  return (
    <div>
      <Button onClick={() => setVisible(true)}>异步关闭</Button>
      <Dialog
        visible={visible}
        title="异步关闭"
        onClose={() => setVisible(false)}
        onOk={handleOk}
      >
        <p>点击确定按钮后等待 2 秒自动关闭</p>
      </Dialog>
    </div>
  );
};