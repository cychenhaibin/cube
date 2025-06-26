import React from 'react';
import { message } from 'cube';

export default () => {
  return (
    <button
      onClick={() => {
        message.success('Message 将在 3 秒后消失', 3000);
        setTimeout(() => {
          console.log('消息已关闭');
        }, 3000);
      }}
      className="cube-demo-button cube-demo-success"
    >
      显示带回调的 Message
    </button>
  );
};