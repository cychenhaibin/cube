---
title: Input 输入框
description: 通过鼠标或键盘输入内容，是最基础的表单域的包装。
demo:
  cols: 2
---

## 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 代码演示

<code src="./demos/demo1.tsx" description="最简单的用法，展示了一个基本的输入框。">基本使用</code>
<code src="./demos/demo4.tsx" description="带有搜索按钮的输入框，点击搜索按钮会触发 `onSearch` 回调。">搜索框</code>
<code src="./demos/demo3.tsx" description="在输入框上添加前缀或后缀图标，可以用于展示输入框的用途或单位。">前置/后置标签</code>
<code src="./demos/demo2.tsx" description="输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。">不同大小</code>
<code src="./demos/demo5.tsx" description="密码框，可以切换密码的显示和隐藏。">密码框</code>
<code src="./demos/demo6.tsx" description="数字输入框，只允许输入数字，可以设置最大值和最小值。">数字输入框</code>
<code src="./demos/demo7.tsx" description="邮箱输入框，会自动验证输入内容是否符合邮箱格式。">邮箱输入框</code>
<code src="./demos/demo8.tsx" description="网址输入框，会自动验证输入内容是否符合 URL 格式。">网址输入框</code>
<code src="./demos/demo9.tsx" description="电话输入框，会自动过滤非数字字符，保持纯数字格式。">电话输入框</code>
<code src="./demos/demo10.tsx" description="禁用状态的输入框，不可输入，显示为灰色。">禁用状态</code>
<code src="./demos/demo11.tsx" description="只读状态的输入框，不可输入，但可以复制内容。">只读状态</code>
<code src="./demos/demo12.tsx" description="带清除按钮的输入框，点击清除按钮可以清空输入内容。">带清除按钮</code>
<code src="./demos/demo13.tsx" description="自动聚焦的输入框，页面加载完成后自动获得焦点。">自动聚焦</code>
<code src="./demos/demo14.tsx" description="Input 组件支持通过 `style` 或 `className` 自定义宽度。">自定义宽度</code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 声明 input 类型 | `text` \| `password` \| `number` \| `email` \| `tel` \| `url` \| `search` | `text` |
| value | 输入框内容 | `string` | - |
| defaultValue | 输入框默认内容 | `string` | - |
| placeholder | 输入框提示文本 | `string` | - |
| disabled | 是否禁用状态 | `boolean` | `false` |
| readOnly | 是否只读状态 | `boolean` | `false` |
| maxLength | 最大长度 | `number` | - |
| minLength | 最小长度 | `number` | - |
| prefix | 带有前缀图标的 input | `React.ReactNode` | - |
| suffix | 带有后缀图标的 input | `React.ReactNode` | - |
| allowClear | 可以点击清除图标删除内容 | `boolean` | `false` |
| size | 输入框大小 | `'small' \| 'default' \| 'large'` | `'default'` |
| className | 输入框类名 | `string` | - |
| style | 输入框样式 | `React.CSSProperties` | - |
| autoFocus | 自动获取焦点 | `boolean` | `false` |
| onChange | 输入框内容变化时的回调 | `(value: string) => void` | - |
| onFocus | 输入框获得焦点时的回调 | `(e: React.FocusEvent<HTMLInputElement>) => void` | - |
| onBlur | 输入框失去焦点时的回调 | `(e: React.FocusEvent<HTMLInputElement>) => void` | - |
| onPressEnter | 按下回车的回调 | `(e: React.KeyboardEvent<HTMLInputElement>) => void` | - |
| onSearch | 点击搜索按钮的回调 | `(value: string) => void` | - |
