---
title: Message 消息提示
description: 全局展示操作反馈信息，支持多种类型和自定义配置。
demo:
  cols: 2
---

## 何时使用

- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。
- 支持自定义显示时长和关闭回调。

## 代码演示

<code src="./demos/demo1.tsx">基本使用</code>
<code src="./demos/demo2.tsx">不同类型</code>
<code src="./demos/demo3.tsx">自定义时长</code>
<code src="./demos/demo4.tsx">带回调的消息</code>

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
