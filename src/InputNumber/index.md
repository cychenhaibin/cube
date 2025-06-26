---
title: InputNumber 数字输入框
description: 通过鼠标或键盘，输入范围内的数值。
demo:
  cols: 2
---

## 何时使用

- 当需要获取标准数值时。
- 当需要精确控制数值精度时。
- 当需要限制输入范围时。

## 代码演示

<code src="./demos/demo1.tsx">基本使用</code>
<code src="./demos/demo2.tsx">禁用状态</code>
<code src="./demos/demo3.tsx">步进器</code>
<code src="./demos/demo4.tsx">精度</code>
<code src="./demos/demo6.tsx">按钮带前缀和后缀位置</code>
<code src="./demos/demo5.tsx">不同尺寸</code>
<code src="./demos/demo7.tsx" description="通过 `min` 和 `max` 属性可以限制输入值的范围。当达到限制时，对应的加减按钮会被禁用。">最大值最小值</code>


## API

| 参数           | 说明       | 类型                            | 默认值   |
| -------------- | ---------- | ------------------------------- | -------- |
| value          | 当前值     | number \| null                  | -        |
| defaultValue   | 默认值     | number \| null                  | -        |
| onChange       | 变化回调   | (value: number \| null) => void | -        |
| disabled       | 是否禁用   | boolean                         | false    |
| step           | 步长       | number                          | 1        |
| precision      | 精度       | number                          | 0        |
| min            | 最小值     | number                          | 0        |
| max            | 最大值     | number                          | Infinity |
| size           | 输入框尺寸 | 'small' \| 'middle' \| 'large'  | 'middle' |
| buttonPosition | 按钮位置   | 'left' \| 'right'               | 'right'  |
| prefix         | 前缀       | ReactNode                       | -        |
| suffix         | 后缀       | ReactNode                       | -        |
| className      | 自定义类名 | string                          | -        |
| style          | 自定义样式 | CSSProperties                   | -        |

## 注意事项

1. 当 `precision` 大于 0 时，输入值会自动格式化为指定精度。
2. 当输入值超出 `min` 和 `max` 范围时，会自动限制在范围内。
3. 禁用状态下，输入框和按钮都无法操作。
4. 按钮位置可以设置在左侧或右侧，默认为右侧。
5. 支持键盘输入和按钮点击两种方式修改数值。
