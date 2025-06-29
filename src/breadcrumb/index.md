---
title: Breadcrumb 面包屑
description: 用于显示当前页面在系统层级结构中的位置，并能切换到上一级页面。
demo:
  cols: 2
---


<code src="./demos/demo1.tsx" description="最简单的用法。">基本使用</code>
<code src="./demos/demo3.tsx" description="图标放在文字前面。">带图标的面包屑</code>
<code src="./demos/demo2.tsx" description="带有路由参数的。">带有参数的面包屑</code>
<code src="./demos/demo4.tsx" description="使用 `separator='>'` 可以自定义分隔符。">自定义分隔符</code>
<code src="./demos/demo5.tsx" description="面包屑支持下拉菜单。">带下拉菜单的面包屑</code>
<code src="./demos/demo6.tsx" description="自定义单独的分隔符。">独立的分隔符</code>

## API

### Breadcrumb Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 面包屑数据项数组 | `BreadcrumbItem[]` | - |
| separator | 分隔符 | `ReactNode` | `'/'` |
| customSeparators | 自定义每个分隔符 | `ReactNode[]` | - |

### BreadcrumbItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 显示的内容 | `ReactNode` | - |
| icon | 图标 | `ReactNode` | - |
| href | 跳转链接 | `string` | - |
| menu | 下拉菜单项 | `{ label: ReactNode; href?: string }[]` | - |
| params | 额外参数 | `Record<string, any>` | - |
