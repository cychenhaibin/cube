import React from 'react';
import { message } from 'cube';

export default () => {
  return (
    <div className="cube-demo-container">
      <button
        onClick={() => message.success('Message 将在 5 秒后消失', 5000)}
        className="cube-demo-button cube-demo-success"
      >
        显示 5 秒的 Message
      </button>
      <button
        onClick={() => message.success('Message 将在 10 秒后消失', 10000)}
        className="cube-demo-button cube-demo-success"
      >
        显示 10 秒的 Message
      </button>
    </div>
  );
};