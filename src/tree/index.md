---
title: Tree 树形控件
description: 树形控件用于展示层级结构的数据。
demo:
  cols: 3
---

## 何时使用

- 当需要展示层级结构的数据时，如文件夹、组织架构等。
- 当需要选择、展开/收起、拖拽等交互操作时。
- 当数据量较大，需要懒加载时。

## 代码演示

<code src="./demos/demo1.tsx">基本使用</code>
<code src="./demos/demo2.tsx">可选择</code>
<code src="./demos/demo3.tsx">可勾选</code>
<code src="./demos/demo4.tsx">懒加载</code>
<code src="./demos/demo5.tsx">禁用复选框</code>
<code src="./demos/demo6.tsx">默认展开和选中</code>
<code src="./demos/demo7.tsx">节点过滤</code>
<code src="./demos/demo8.tsx">手风琴模式</code>
<code src="./demos/demo9.tsx">可拖拽节点</code>

## API

### Tree

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 树形数据 | `TreeNode[]` | - |
| defaultExpandedKeys | 默认展开的节点 | `string[]` | [] |
| defaultSelectedKeys | 默认选中的节点 | `string[]` | [] |
| defaultCheckedKeys | 默认勾选的节点 | `string[]` | [] |
| expandedKeys | 受控的展开节点 | `string[]` | - |
| selectedKeys | 受控的选中节点 | `string[]` | - |
| checkedKeys | 受控的勾选节点 | `string[]` | - |
| checkable | 是否显示复选框 | `boolean` | false |
| selectable | 是否可选中 | `boolean` | true |
| multiple | 是否允许多选 | `boolean` | false |
| accordion | 是否只允许同时展开一个节点 | `boolean` | false |
| draggable | 是否允许拖拽 | `boolean` | false |
| showLine | 是否显示连接线 | `boolean` | false |
| loadData | 异步加载数据 | `(node: TreeNode) => Promise<void>` | - |
| onExpand | 展开节点时的回调 | `(expandedKeys: string[], info: { node: TreeNode; expanded: boolean }) => void` | - |
| onSelect | 选中节点时的回调 | `(selectedKeys: string[], info: { node: TreeNode; selected: boolean }) => void` | - |
| onCheck | 勾选节点时的回调 | `(checkedKeys: string[], info: { node: TreeNode; checked: boolean }) => void` | - |
| onDragStart | 开始拖拽时的回调 | `(node: TreeNode) => void` | - |
| onDragEnd | 结束拖拽时的回调 | `(node: TreeNode) => void` | - |
| onDrop | 放置节点时的回调 | `(info: { dragNode: TreeNode; dropNode: TreeNode; dropPosition: number }) => void` | - |
| filterValue | 过滤值 | `string` | - |
| className | 额外的 CSS 类名 | `string` | - |
| style | 额外的样式 | `React.CSSProperties` | - |

### TreeNode

| 参数       | 说明           | 类型              | 默认值 |
| ---------- | -------------- | ----------------- | ------ |
| key        | 唯一标识       | `string`          | -      |
| title      | 节点标题       | `React.ReactNode` | -      |
| children   | 子节点         | `TreeNode[]`      | -      |
| isLeaf     | 是否为叶子节点 | `boolean`         | -      |
| disabled   | 是否禁用       | `boolean`         | false  |
| checkable  | 是否显示复选框 | `boolean`         | true   |
| selectable | 是否可选中     | `boolean`         | true   |
| expanded   | 是否展开       | `boolean`         | false  |
| selected   | 是否选中       | `boolean`         | false  |
| checked    | 是否勾选       | `boolean`         | false  |
| loading    | 是否加载中     | `boolean`         | false  |
