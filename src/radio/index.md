---
title: Radio 单选框
description: 单选框组件，用于在多个选项中选择一个。
demo:
  cols: 2
---

## 何时使用

- 用于在多个互斥选项中选择一个
- 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多

## 代码演示

<code src="./demos/demo1.tsx" description="最简单的用法。">基本使用</code>
<code src="./demos/demo3.tsx" description="垂直排列的单选框组。">垂直布局</code>
<code src="./demos/demo6.tsx" description="单选框有三种尺寸：大、默认、小。可以通过 `size` 属性来设置。">不同尺寸</code>
<code src="./demos/demo2.tsx" description="一组互斥的 Radio 配合使用。">单选框组</code>
<code src="./demos/demo4.tsx" description="单选框的禁用状态。">禁用状态</code>
<code src="./demos/demo5.tsx" description="单选框的只读状态。">只读状态</code>
<code src="./demos/demo7.tsx" description="通过 `options` 属性来设置选项数组。">选项数组</code>

## API

### Radio

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 指定当前是否选中 | `boolean` | - |
| defaultChecked | 初始是否选中 | `boolean` | false |
| disabled | 禁用 Radio | `boolean` | false |
| readOnly | 只读 Radio | `boolean` | false |
| value | 根据 value 进行比较，判断是否选中 | `string` \| `number` | - |
| size | 单选框大小 | `small` \| `default` \| `large` | default |
| onChange | 变化时回调函数 | `(value: string \| number) => void` | - |

### Radio.Group

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认选中的值 | `string` \| `number` | - |
| disabled | 禁用所有单选框 | `boolean` | false |
| readOnly | 只读所有单选框 | `boolean` | false |
| name | RadioGroup 下所有 input 的 name 属性 | `string` | - |
| options | 指定可选项 | `Array<{ label: string; value: string \| number; disabled?: boolean }>` | - |
| size | 单选框大小 | `small` \| `default` \| `large` | default |
| value | 用于设置当前选中的值 | `string` \| `number` | - |
| onChange | 选项变化时的回调函数 | `(value: string \| number) => void` | - |
| direction | 排列方向 | `horizontal` \| `vertical` | `horizontal` |

## 注意事项

1. `Radio` 组件支持受控和非受控两种模式
2. `RadioGroup` 中的 `Radio` 会自动继承 `RadioGroup` 的 `disabled`、`readOnly` 和 `size` 属性
3. 当使用 `options` 属性时，`RadioGroup` 会自动渲染选项，不需要手动添加 `Radio` 子组件
4. 垂直布局时，`RadioGroup` 会自动调整间距，确保选项之间有合适的间隔
