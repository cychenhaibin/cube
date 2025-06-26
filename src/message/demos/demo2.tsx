import React from 'react';
import { message } from 'cube';

export default () => {
  return (
    <div className="cube-demo-container">
      <button
        onClick={() => message.success('Success')}
        className="cube-demo-button cube-demo-success"
      >
        Success
      </button>
      <button
        onClick={() => message.error('Error')}
        className="cube-demo-button cube-demo-error"
      >
        Error
      </button>
      <button
        onClick={() => message.warning('Warning')}
        className="cube-demo-button cube-demo-warning"
      >
        Warning
      </button>
      <button
        onClick={() => message.info('Info')}
        className="cube-demo-button cube-demo-info"
      >
        Info
      </button>
    </div>
  );
};