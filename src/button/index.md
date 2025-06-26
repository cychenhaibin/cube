---
title: Button 按钮
description: 按钮用于开始一个即时操作。
demo:
  cols: 2
---

## 何时使用

- 当需要用户点击触发某个操作时。
- 当需要突出显示某个操作时。

## 代码演示

<code src="./demos/demo1.tsx" description="基本使用方法">基本使用</code>
<code src="./demos/demo3.tsx" description="图标为icon">带图标的按钮</code>
<code src="./demos/demo2.tsx" description="不同类型的按钮">不同类型</code>
<code src="./demos/demo4.tsx" description="可以自定义小、中、大">按钮尺寸</code>


## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | `highlight` \| `default` \| `primary` \| `danger` \| `ghost` \| `link` \| `text` | `default` |
| size | 按钮尺寸 | `large` \| `default` \| `small` | `default` |
| disabled | 按钮是否禁用 | `boolean` | `false` |
| icon | 设置按钮的图标 | `ReactNode` | - |
| text | 按钮文本 | `string` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `object` | - |
| withBg | 是否显示背景色 | `boolean` | `false` |
| onClick | 点击按钮时的回调函数 | `(event: MouseEvent) => void` | - |
