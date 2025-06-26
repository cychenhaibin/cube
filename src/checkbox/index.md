---
title: Checkbox 复选框
demo:
  cols: 2
---

## 代码演示

<code src="./demos/demo1.tsx">基本使用</code>
<code src="./demos/demo2.tsx">受控组件</code>
<code src="./demos/demo3.tsx">禁用状态</code>
<code src="./demos/demo4.tsx">只读状态</code>
<code src="./demos/demo5.tsx">不同尺寸</code>
<code src="./demos/demo6.tsx">复选框组</code>
<code src="./demos/demo7.tsx">垂直排列</code>
<code src="./demos/demo8.tsx">使用 options</code>

## API

### Checkbox

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 指定当前是否选中 | `boolean` | - |
| defaultChecked | 初始是否选中 | `boolean` | - |
| disabled | 是否禁用 | `boolean` | false |
| readOnly | 是否只读 | `boolean` | false |
| value | 复选框的值 | `string` \| `number` | - |
| onChange | 变化时回调函数 | `(checked: boolean, value?: string \| number) => void` | - |
| size | 尺寸 | `small` \| `default` \| `large` | default |

### Checkbox.Group

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 指定选中的选项 | `(string \| number)[]` | - |
| defaultValue | 默认选中的选项 | `(string \| number)[]` | - |
| options | 指定可选项 | `{ label: string; value: string \| number; disabled?: boolean }[]` | - |
| disabled | 是否禁用 | `boolean` | false |
| readOnly | 是否只读 | `boolean` | false |
| direction | 排列方向 | `horizontal` \| `vertical` | horizontal |
| onChange | 变化时回调函数 | `(values: (string \| number)[]) => void` | - |
| size | 尺寸 | `small` \| `default` \| `large` | default |
