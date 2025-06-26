---
title: Dialog 对话框
description: 模态对话框。
demo:
  cols: 3
---

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Dialog` 在当前页面正中打开一个浮层，承载相应的操作。

## 代码演示

<code src="./demos/demo1.tsx" description="最简单的对话框。">基本使用</code>
<code src="./demos/demo2.tsx" description="可以在对话框内放置任何内容。">自定义内容</code>
<code src="./demos/demo3.tsx" description="可以自定义标题内容。">自定义头部</code>
<code src="./demos/demo4.tsx" description="支持多层对话框嵌套。">嵌套对话框</code>
<code src="./demos/demo5.tsx" description="设置 `centered` 可以让对话框垂直居中。">居中对话框</code>
<code src="./demos/demo6.tsx" description="设置 `draggable` 可以拖拽对话框。">可拖拽对话框</code>
<code src="./demos/demo7.tsx" description="设置 `fullscreen` 可以全屏显示对话框。">全屏对话框</code>
<code src="./demos/demo8.tsx" description="在关闭前执行异步操作。">异步关闭</code>
<code src="./demos/demo9.tsx" description="自定义页脚按钮。">自定义页脚</code>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 对话框是否可见 | `boolean` | `false` |
| title | 标题 | `ReactNode` | - |
| width | 宽度 | `string \| number` | `520` |
| top | 距离顶部的位置 | `string \| number` | `15vh` |
| centered | 是否垂直居中 | `boolean` | `false` |
| closable | 是否显示关闭按钮 | `boolean` | `true` |
| mask | 是否显示遮罩层 | `boolean` | `true` |
| maskClosable | 点击遮罩层是否可以关闭 | `boolean` | `true` |
| keyboard | 是否支持键盘 esc 关闭 | `boolean` | `true` |
| destroyOnClose | 关闭时是否销毁子元素 | `boolean` | `false` |
| fullscreen | 是否全屏显示 | `boolean` | `false` |
| draggable | 是否可拖拽 | `boolean` | `false` |
| footer | 底部内容 | `ReactNode` | 默认的确定取消按钮 |
| afterClose | 完全关闭后的回调 | `() => void` | - |
| onClose | 点击关闭按钮的回调 | `() => void` | - |
| onOk | 点击确定按钮的回调 | `() => void` | - |
| className | 对话框的类名 | `string` | - |
| style | 对话框的样式 | `CSSProperties` | - |

## 注意事项

1. `Dialog` 默认会挂载在 `body` 上，如果你需要修改挂载点，可以使用 `ReactDOM.createPortal`。
2. 使用 `draggable` 属性时，对话框的位置会根据拖拽位置改变，此时 `centered` 属性可能不会生效。
3. 当设置 `destroyOnClose` 时，关闭后会销毁子元素，再次打开时会重新渲染。
4. 多层嵌套的对话框建议最多不超过三层，以免影响用户体验。

## 设计思路

1. 遮罩层使用固定定位，覆盖整个视口
2. 对话框本身也使用固定定位，默认距离顶部 15vh
3. 可以通过 `centered` 属性使对话框垂直居中
4. 拖拽功能通过监听鼠标事件实现
5. 动画效果使用 CSS 动画实现
6. 支持自定义内容、头部和底部，保持灵活性
7. 提供多种配置项，满足不同场景需求

## 最佳实践

以下是一些常见的使用场景示例：

### 基础用法示例

```jsx
import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>打开对话框</Button>
      <Dialog
        visible={visible}
        title="标题"
        onClose={() => setVisible(false)}
        onOk={() => {
          // 处理确认逻辑
          setVisible(false);
        }}
      >
        对话框内容
      </Dialog>
    </div>
  );
};
```

### 异步关闭示例

```jsx
import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOk = async () => {
    setLoading(true);
    try {
      await saveData(); // 模拟异步操作
      setVisible(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={() => setVisible(true)}>异步关闭示例</Button>
      <Dialog
        visible={visible}
        title="异步关闭"
        onClose={() => setVisible(false)}
        onOk={handleOk}
      >
        表单内容
      </Dialog>
    </div>
  );
};
```

### 自定义底部按钮示例

```jsx
import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>自定义底部按钮</Button>
      <Dialog
        visible={visible}
        title="自定义底部"
        footer={
          <div>
            <button onClick={() => setVisible(false)}>返回</button>
            <button 
              style={{ marginLeft: 8, background: '#1890ff', color: '#fff' }}
              onClick={() => setVisible(false)}
            >
              提交
            </button>
          </div>
        }
        onClose={() => setVisible(false)}
      >
        对话框内容
      </Dialog>
    </div>
  );
};
```

