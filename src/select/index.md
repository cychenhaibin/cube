---
title: Select 选择器
description: 当选项过多时，使用下拉菜单展示并选择内容。
demo:
  cols: 2
---

## 代码演示

<code src="./demos/demo1.tsx" description="适用广泛的基础单选。">基本使用</code>
<code src="./demos/demo3.tsx" description="选择器不可用状态。">禁用状态</code>
<code src="./demos/demo6.tsx" description="包含清空按钮，可将选择器清空为初始状态。">可清空单选</code>
<code src="./demos/demo2.tsx" description="适用性较广的基础多选，用 Tag 展示已选项。">多选</code>
<code src="./demos/demo4.tsx" description="备选项进行分组展示。">分组</code>
<code src="./demos/demo5.tsx" description="可以利用搜索功能快速查找选项。">可搜索</code>
<code src="./demos/demo7.tsx" description="从服务器搜索数据，输入关键字进行查找。">远程搜索</code>
<code src="./demos/demo8.tsx" description="可以自定义备选项的渲染内容。">自定义选项</code>

## API

### Select Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中的值 | `string \| number \| (string \| number)[]` | - |
| defaultValue | 默认选中的值 | `string \| number \| (string \| number)[]` | - |
| options | 选项数组 | `SelectOptions` | `[]` |
| onChange | 选中值发生变化时触发 | `(value: string \| number \| (string \| number)[]) => void` | - |
| onSearch | 搜索值变化时触发 | `(value: string) => void` | - |
| onLoad | 远程加载完成时触发 | `() => void` | - |
| onClear | 清空选择时触发 | `() => void` | - |
| placeholder | 选择框默认文字 | `string` | 请选择 |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |
| multiple | 是否多选 | `boolean` | `false` |
| filterable | 是否可搜索 | `boolean` | `false` |
| clearable | 是否可清空 | `boolean` | `false` |
| remoteMethod | 远程搜索方法 | `(query: string) => Promise<SelectOptions>` | - |
| renderTag | 自定义标签渲染函数 | `(option: SelectOption) => React.ReactNode` | - |
| optionRenderer | 自定义选项渲染函数 | `(option: SelectOption) => React.ReactNode` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| locale | 语言包配置 | `{ placeholder?: string; noData?: string; loading?: string; }` | - |

### SelectOption

| 参数     | 说明           | 类型               | 默认值  |
| -------- | -------------- | ------------------ | ------- |
| value    | 选项的值       | `string \| number` | -       |
| label    | 选项的标签     | `React.ReactNode`  | -       |
| disabled | 是否禁用该选项 | `boolean`          | `false` |

### SelectGroup

| 参数     | 说明           | 类型             | 默认值  |
| -------- | -------------- | ---------------- | ------- |
| label    | 分组的标签     | `string`         | -       |
| options  | 分组的选项     | `SelectOption[]` | -       |
| disabled | 是否禁用该分组 | `boolean`        | `false` |
