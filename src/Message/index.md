# Message 消息提示

全局展示操作反馈信息，支持多种类型和自定义配置。

## 何时使用

- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。
- 支持自定义显示时长和关闭回调。

## 代码演示

### 基本用法

```tsx
import React from 'react';
import { message } from 'cube';
import './index.less';

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
    </div>
  );
};
```

### 不同类型

```tsx
import React from 'react';
import { message } from 'cube';
import './index.less';

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
```

### 自定义时长

```tsx
import React from 'react';
import { message } from 'cube';
import './index.less';

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
```

### 带回调的消息

```tsx
import React from 'react';
import { message } from 'cube';
import './index.less';

export default () => {
  return (
    <button
      onClick={() =>
        message.success('Message 将在 3 秒后消失', 3000, () => {
          console.log('消息已关闭');
        })
      }
      className="cube-demo-button cube-demo-success"
    >
      显示带回调的 Message
    </button>
  );
};
```

## API

### Message

| 参数     | 说明                     | 类型                                        | 默认值 |
| -------- | ------------------------ | ------------------------------------------- | ------ |
| type     | 消息类型                 | `success` \| `warning` \| `error` \| `info` | `info` |
| content  | 提示内容                 | `ReactNode`                                 | -      |
| duration | 自动关闭的延时，单位毫秒 | `number`                                    | 3000   |
| onClose  | 关闭时触发的回调函数     | `() => void`                                | -      |

### message 方法

组件提供了一些静态方法，使用方式和参数如下：

- `message.success(content, duration, onClose)`
- `message.error(content, duration, onClose)`
- `message.warning(content, duration, onClose)`
- `message.info(content, duration, onClose)`

参数说明：

- `content`: 提示内容
- `duration`: 自动关闭的延时，单位毫秒，默认 3000
- `onClose`: 关闭时触发的回调函数
