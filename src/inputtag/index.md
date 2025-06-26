---
title: InputTag 标签输入框
description: 标签输入框组件，支持输入标签、删除标签和拖拽排序。
demo:
  cols: 2
---

## 何时使用

- 需要输入多个标签时
- 需要展示多个标签时
- 需要管理标签的增删时
- 需要对标签进行排序时

## 代码演示

<code src="./demos/demo1.tsx">基本使用</code>
<code src="./demos/demo2.tsx">拖拽排序</code>
<code src="./demos/demo3.tsx">禁用状态</code>
<code src="./demos/demo4.tsx">只读状态</code>
<code src="./demos/demo5.tsx">限制标签数量</code>
<code src="./demos/demo6.tsx">限制输入长度</code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 标签值 | `string[]` | - |
| defaultValue | 默认标签值 | `string[]` | `[]` |
| placeholder | 输入框占位文本 | `string` | 请输入 |
| disabled | 是否禁用 | `boolean` | `false` |
| readOnly | 是否只读 | `boolean` | `false` |
| maxLength | 输入框最大字符数 | `number` | - |
| maxTags | 最大标签数量 | `number` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| onChange | 标签值变化时的回调 | `(value: string[]) => void` | - |
| onFocus | 输入框获得焦点时的回调 | `(e: FocusEvent) => void` | - |
| onBlur | 输入框失去焦点时的回调 | `(e: FocusEvent) => void` | - |
| onPressEnter | 按下回车键时的回调 | `(e: KeyboardEvent) => void` | - |

## 注意事项

1. 按回车键添加标签
2. 按退格键删除最后一个标签
3. 点击标签上的关闭按钮删除对应标签
4. 支持拖拽排序（在非禁用和只读状态下）
5. 支持键盘操作
6. 支持禁用和只读状态
7. 支持限制标签数量和输入长度
8. 支持自定义样式
9. 支持无障碍访问 
