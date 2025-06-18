# cube

[![NPM version](https://img.shields.io/npm/v/cube.svg?style=flat)](https://npmjs.org/package/cube)
[![NPM downloads](http://img.shields.io/npm/dm/cube.svg?style=flat)](https://npmjs.org/package/cube)

---

## 简介 | Introduction

**cube** 是一个基于 React 的高质量组件库，支持 TypeScript，内置丰富的基础组件和业务组件，适合中后台及通用场景开发。
This is a high-quality React component library with TypeScript support, providing rich basic and business components for enterprise and general web applications.

---

## ✨ 特性 | Features

- 丰富的基础组件（按钮、输入框、选择器、弹窗、提示等）
- TypeScript 类型支持
- 单元测试覆盖
- 主题定制
- dumi 文档系统，支持本地预览和构建
- 现代化开发流程（Eslint、Stylelint、Prettier、Husky、Lint-staged）

- Rich basic components (Button, Input, Select, Dialog, Tooltip, etc.)
- TypeScript support
- Unit test coverage
- Theme customization
- dumi documentation system, local preview and build
- Modern development workflow (Eslint, Stylelint, Prettier, Husky, Lint-staged)

---

## 📦 安装 | Installation

```bash
npm install cube
# or
yarn add cube
```

---

## 🔨 快速上手 | Quick Start

```tsx
import React from 'react';
import { Button, Input, Select, Message } from 'cube';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
];

export default () => (
  <>
    <Button type="primary">Primary Button</Button>
    <Input placeholder="Please input" />
    <Select options={options} placeholder="Please select" />
    <Button onClick={() => Message.info('Hello!')}>Show Message</Button>
  </>
);
```

---

## 🧩 主要组件 | Main Components

- Button 按钮 | Button
- Input 输入框 | Input
- Select 选择器 | Select (multi-select, search, group, remote)
- Checkbox 多选框 | Checkbox
- Radio 单选框 | Radio
- Dialog 对话框 | Dialog
- Tooltip 气泡提示 | Tooltip
- Progress 进度条 | Progress
- Message 全局提示 | Message
- Icon 图标 | Icon
- InputTag 标签输入 | InputTag
- Tree 树形控件 | Tree
- InputNumber 数字输入框 | InputNumber
- 以及更多... | And more...

详细用法和 API 见 [在线文档](./docs/index.md) 或运行本地文档预览。
For detailed usage and API, see [docs](./docs/index.md) or run local doc preview.

---

## 🧪 单元测试 | Unit Test

本项目使用 Jest + @testing-library/react 进行单元测试。
Unit tests are powered by Jest and @testing-library/react.

```bash
npm test
```

---

## 🛠️ 本地开发 | Local Development

```bash
# 安装依赖 | Install dependencies
npm install

# 启动文档预览（推荐开发方式）| Start doc preview (recommended)
npm start

# 构建组件库 | Build library
npm run build

# 构建文档 | Build docs
npm run docs:build

# 预览生产文档 | Preview production docs
npm run docs:preview

# 代码检查 | Lint code
npm run lint
```

---

## 📁 目录结构 | Directory Structure

```
src/
  Button/         按钮 | Button
  Input/          输入框 | Input
  Select/         选择器 | Select
  Checkbox/       多选框 | Checkbox
  Radio/          单选框 | Radio
  Dialog/         对话框 | Dialog
  Tooltip/        气泡提示 | Tooltip
  Progress/       进度条 | Progress
  Message/        全局提示 | Message
  Icon/           图标 | Icon
  InputTag/       标签输入 | InputTag
  Tree/           树形控件 | Tree
  InputNumber/    数字输入框 | InputNumber
  ...
docs/             文档与示例 | Docs & Examples
```

---

## 📄 License

MIT

---

如需详细组件用法、API 说明、二次开发指南，请参考 `docs/` 目录或运行 `npm start` 查看本地文档。
For more details, API reference, and advanced usage, please check the `docs/` folder or run `npm start` for local documentation.
