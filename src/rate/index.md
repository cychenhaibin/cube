---
title: Rate 评分
description: 评分组件，支持多种自定义配置。
demo:
  cols: 2
---

## 代码演示

<code src="./demos/demo1.tsx" description="最简单的用法。用户可以通过点击星星进行评分。">基本使用</code>
<code src="./demos/demo3.tsx" description="评分默认被分为三个等级，不同分数段显示不同的颜色。">自定义颜色分级</code>
<code src="./demos/demo6.tsx" description="用辅助文字直接表达对应分数的评价。">辅助文字</code>
<code src="./demos/demo2.tsx" description="支持重置评分。">可清除</code>
<code src="./demos/demo4.tsx" description="支持更精确的评分。">半星模式</code>
<code src="./demos/demo5.tsx" description="提供多种图标选择。">不同图标</code>
<code src="./demos/demo7.tsx" description="结合多个特性的综合示例。">综合示例</code>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前值 | `number` | - |
| defaultValue | 默认值 | `number` | 0 |
| max | 最大分值 | `number` | 5 |
| allowHalf | 是否允许半选 | `boolean` | `false` |
| allowClear | 是否允许清除 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |
| texts | 辅助文字数组 | `string[]` | `[]` |
| showText | 是否显示辅助文字 | `boolean` | `false` |
| icon | 图标类型 | `'star' \| 'heart' \| 'like'` | `'star'` |
| colors | 三个等级对应的颜色数组 | `string[]` | `['#F7BA2A', '#F7BA2A', '#F7BA2A']` |
| lowThreshold | 低分和中等分数的界限值 | `number` | 2 |
| highThreshold | 高分和中等分数的界限值 | `number` | 4 |
| onChange | 评分改变时的回调 | `(value: number) => void` | - |

### 主题定制

组件提供了以下 CSS 变量，可用于自定义主题：

```css
:root {
  --ice-rate-font-size: 20px;
  --ice-rate-icon-color: #E8E8E8;
  --ice-rate-active-color: #F7BA2A;
  --ice-rate-text-color: #909399;
  --ice-rate-text-font-size: 14px;
}
```

## 注意事项

1. `value` 和 `defaultValue` 的取值范围是 0 到 `max`。
2. 当同时指定 `value` 和 `defaultValue` 时，`value` 的优先级更高。
3. `colors` 数组必须包含三个元素，分别对应低分、中等分和高分的颜色。
4. 使用 `allowHalf` 时，`value` 和 `defaultValue` 可以是小数，但只支持 .5 的倍数。
