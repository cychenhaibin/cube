# 🚀 快速开始


本文将帮助你快速上手 cube。

## 📦 安装

使用 npm 或 yarn 安装 cube：

```bash

# 使用 npm

npm install cube

# 使用 yarn

yarn add cube

```

## 🛠 使用

在项目中引入需要的组件：

[//]: # ()
[//]: # (```tsx)

[//]: # (import { Button, Message } from 'cube';)

[//]: # (```)

[//]: # ()
[//]: # (## 📝 示例)

[//]: # ()
[//]: # (以下是一个简单的示例，展示如何使用 Button 和 Message 组件：)

[//]: # ()
[//]: # (```tsx)

[//]: # (import React from 'react';)

[//]: # (import { Button, message } from 'cube';)

[//]: # ()
[//]: # (const App = &#40;&#41; => {)

[//]: # (  return &#40;)

[//]: # (    <div>)

[//]: # (      <Button type="highlight" onClick={&#40;&#41; => message.success&#40;'操作成功！'&#41;}>)

[//]: # (        点击我)

[//]: # (      </Button>)

[//]: # (    </div>)

[//]: # (  &#41;;)

[//]: # (};)

[//]: # ()
[//]: # (export default App;)

[//]: # (```)

[//]: # ()
[//]: # (## 📦 按需加载)

[//]: # ()
[//]: # (cube 支持按需加载，你可以只引入需要的组件：)

[//]: # ()
[//]: # (```tsx)

[//]: # (import Button from 'cube/es/button';)

[//]: # (import Message from 'cube/es/message';)

[//]: # (```)

[//]: # ()
[//]: # (## 🎨 主题定制)

[//]: # ()
[//]: # (cube 支持主题定制，你可以通过修改主题变量来自定义组件样式：)

[//]: # ()
[//]: # (```less)

[//]: # (@primary-color: #1890ff;)

[//]: # (@success-color: #52c41a;)

[//]: # (@warning-color: #faad14;)

[//]: # (@error-color: #ff4d4f;)

[//]: # (```)

[//]: # ()
[//]: # (## 🌐 浏览器支持)

[//]: # ()
[//]: # (- 现代浏览器)

[//]: # (- IE 11（需要 polyfills）)

[//]: # ()
[//]: # (## ⚠️ 注意事项)

[//]: # ()
[//]: # (- 确保你的项目已经安装了 React 16.8.0 或更高版本)

[//]: # (- 使用 TypeScript 时，建议使用 3.8.0 或更高版本)

[//]: # (- 如果使用按需加载，需要配置 babel-plugin-import)
