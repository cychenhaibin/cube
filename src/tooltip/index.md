---
title: Tooltip 文字提示
description: 简单的文字提示气泡框。
demo:
  cols: 2
---

## 何时使用

鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 `title` 提示，提供一个 `按钮/文字/操作` 的文案解释。

## 代码演示

<code src="./demos/demo1.tsx">基本使用</code>
<code src="./demos/demo2.tsx">位置</code>
<code src="./demos/demo3.tsx">触发方式</code>

## API

| 参数      | 说明       | 类型                                   | 默认值  |
| --------- | ---------- | -------------------------------------- | ------- |
| title     | 提示文字   | `ReactNode`                            | -       |
| placement | 气泡框位置 | `top` \| `bottom` \| `left` \| `right` | `top`   |
| trigger   | 触发行为   | `hover` \| `click` \| `focus`          | `hover` |
| className | 自定义类名 | `string`                               | -       |
| style     | 自定义样式 | `CSSProperties`                        | -       |

## 注意事项

1. Tooltip 组件支持四种位置：上、下、左、右
2. 支持三种触发方式：hover、click、focus
3. 提示框内容支持 ReactNode，可以自定义样式
4. 提示框会自动计算位置，避免超出可视区域
5. 提示框有平滑的动画效果
6. 支持自定义样式和类名
7. 支持无障碍访问
