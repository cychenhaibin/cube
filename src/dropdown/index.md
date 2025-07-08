---
title: Dropdown 下拉菜单
description: 用于点击、悬浮或右键触发的下拉菜单，支持多级菜单、分组、受控/非受控等多种场景。
demo:
  cols: 2
---

## 组件简介

Dropdown 下拉菜单用于为页面元素提供额外的操作选项，常用于按钮、图标、文本等的扩展操作。支持点击、悬浮、右键等多种触发方式，菜单内容可自定义，支持多级菜单、分组、禁用等丰富功能。

## 代码演示

### 基础用法

<code src="./demos/demo1.tsx" description="点击触发">基本使用</code>
<code src="./demos/demo2.tsx" description="悬浮触发">悬浮触发</code>
<code src="./demos/demo3.tsx" description="右键触发">右键触发</code>
<code src="./demos/demo4.tsx" description="多触发方式（点击+悬浮）">多触发方式</code>
<code src="./demos/demo5.tsx" description="受控模式（visible/onVisibleChange）">受控模式</code>
<code src="./demos/demo6.tsx" description="禁用状态">禁用状态</code>
<code src="./demos/demo7.tsx" description="菜单项点击关闭">菜单项点击关闭</code>
<code src="./demos/demo8.tsx" description="自定义 overlayClassName/overlayStyle">自定义样式</code>
<code src="./demos/demo9.tsx" description="overlay 为函数">动态菜单内容</code>
<code src="./demos/demo10.tsx" description="placement 位置切换">弹出位置切换</code>
<code src="./demos/demo11.tsx" description="多级菜单">多级菜单</code>

## API

| 属性              | 说明                       | 类型                                      | 默认值         |
|-------------------|----------------------------|-------------------------------------------|----------------|
| overlay           | 菜单内容（节点、函数或菜单项数组，支持多级/分组） | `ReactNode \| () => ReactNode \| DropdownMenuItem[]` | -              |
| children          | 触发元素                   | `ReactNode`                               | -              |
| trigger           | 触发方式                   | `click` \| `hover` \| `contextMenu` \| `Array` | `hover`         |
| placement         | 菜单弹出位置               | `bottomLeft` \| `bottomRight` \| `topLeft` \| `topRight` | `bottomLeft`   |
| disabled          | 是否禁用                   | `boolean`                                   | `false`          |
| visible           | 菜单显隐（受控）           | `boolean`                                   | -              |
| onVisibleChange   | 显隐变化回调               | `(visible: boolean) => void`                | -              |
| overlayClassName  | 菜单自定义 class           | `string`                                    | -              |
| overlayStyle      | 菜单自定义样式             | `React.CSSProperties`                       | -              |
| className         | 外层自定义 class           | `string`                                    | -              |
| style             | 外层自定义样式             | `React.CSSProperties`                       | -              |
| onClick           | 菜单项点击回调             | `(info: { key: string }) => void`           | -              |

### DropdownMenuItem

当 `overlay` 为数组时，支持如下结构：

```ts
interface DropdownMenuItem {
  label: ReactNode; // 菜单项内容
  key: string; // 唯一标识
  type?: 'group'; // 分组类型
  closeOnClick?: boolean; // 点击后是否关闭菜单，默认 true
  onClick?: (key: string) => void; // 菜单项点击回调
  className?: string; // 自定义 class
  style?: CSSProperties; // 自定义样式
  disabled?: boolean; // 是否禁用
  children?: DropdownMenuItem[]; // 子菜单
}
```

## 事件说明

- **onClick**：菜单项点击时触发，参数为 `{ key: string }`，可用于区分点击了哪个菜单项。
- **onVisibleChange**：菜单显隐变化时触发，参数为 `visible: boolean`。

## 样式定制

- **overlayClassName/overlayStyle**：用于自定义菜单弹出层的 class 和样式。
- **className/style**：用于自定义外层容器的 class 和样式。

## 常见问题

- **受控与非受控模式**：若传入 `visible` 属性，则菜单显隐由外部控制，需配合 `onVisibleChange` 使用；否则为非受控模式，内部自动管理显隐。
- **菜单关闭逻辑**：点击菜单项（`closeOnClick !== false`）或点击菜单外部，菜单会自动关闭。