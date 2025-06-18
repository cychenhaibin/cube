# 📔 更新日志

## 最新版本

### 新增

- Progress 组件 ([@cychenhaibin](https://cychenhaibin.github.com), 2025-05-18)

  - 支持 line 和 circle 两种类型
  - 支持不同状态：normal、active、exception、success
  - 支持自定义颜色和大小
  - 支持步骤进度条

- Radio 组件 ([@cychenhaibin](https://cychenhaibin.github.com), 2025-05-26)

  - 支持单选和单选组
  - 支持自定义样式和大小
  - 支持禁用状态
  - 支持自定义图标
  - 支持事件回调
  - 支持受控和非受控模式

- Checkbox 组件 ([@cychenhaibin](https://cychenhaibin.github.com), 2025-05-26)
  - 支持基础复选框功能
  - 支持禁用状态
  - 支持只读状态
  - 支持默认选中状态
  - 支持自定义大小（small、default、large）
  - 支持复选框组（Checkbox.Group）
  - 支持垂直布局
  - 支持自定义选项配置

### 变更

- 优化项目目录结构 ([@cychenhaibin](https://cychenhaibin.github.com), 2025-04-20)
- Button 组件 ([@cychenhaibin](https://cychenhaibin.github.com), 2025-05-26)

  - 新增 withBg 属性，支持自定义背景色显示
  - 优化按钮悬停效果
  - 更新组件文档和示例

- Checkbox 组件样式优化 ([@cychenhaibin](https://cychenhaibin.github.com), 2025-05-26)
  - 优化选中状态的视觉样式，使用白色对勾
  - 优化只读状态的样式，未选中时显示为禁用样式，选中时显示为蓝色样式
  - 优化交互反馈效果

### 修复

- 修复目录结构问题 ([@cychenhaibin](https://cychenhaibin.github.com), 2025-04-20)
- 修复 Checkbox 组件 defaultChecked 属性不生效的问题 ([@cychenhaibin](https://cychenhaibin.github.com), 2025-05-26)
- 修复 Checkbox 组件测试用例中的断言函数缺失问题 ([@cychenhaibin](https://cychenhaibin.github.com), 2025-05-26)

## 历史版本

### v0.1.0 (2025-05-17)

#### 新增

- 基础组件库框架搭建 ([@cychenhaibin](https://cychenhaibin.github.com), 2025-04-19)

  - 基于 React 和 TypeScript 开发
  - 使用 dumi 构建文档站点
  - 集成 Jest 和 React Testing Library 进行单元测试
  - 支持按需加载和 Tree Shaking
  - 提供完整的 TypeScript 类型定义

- Button 组件 ([@cychenhaibin](https://cychenhaibin.github.com), 2025-04-19)

  - 支持多种类型：primary、default、dashed、text、link
  - 支持多种尺寸：large、default、small
  - 支持禁用状态和加载状态
  - 支持图标按钮和按钮组
  - 支持自定义样式和类名
  - 支持事件回调

- Message 组件 ([@cychenhaibin](https://cychenhaibin.github.com), 2025-04-19)

  - 支持多种消息类型：success、error、warning、info
  - 支持自定义显示时间和位置
  - 支持手动关闭和自动关闭
  - 支持自定义图标和内容
  - 支持全局配置和单例模式
  - 支持 Promise 风格的 API

- Tooltip 组件 ([@cychenhaibin](https://cychenhaibin.github.com), 2025-04-20)

  - 支持多种触发方式：hover、click、focus
  - 支持自定义位置：top、right、bottom、left
  - 支持自定义主题和样式
  - 支持箭头指示器
  - 支持延迟显示和隐藏
  - 支持自定义内容渲染

- InputTag 组件 ([@cychenhaibin](https://cychenhaibin.github.com), 2025-04-20)

  - 支持标签输入和删除
  - 支持自定义验证规则
  - 支持最大标签数量限制
  - 支持自定义标签样式
  - 支持键盘操作
  - 支持复制粘贴功能

- Rate 组件 ([@cychenhaibin](https://cychenhaibin.github.com), 2025-05-01)

  - 支持自定义评分
  - 支持半星评分
  - 支持自定义字符
  - 支持只读模式
  - 支持自定义颜色和大小
  - 支持清除评分

- Dialog 组件 ([@cychenhaibin](https://cychenhaibin.github.com), 2025-05-01)

  - 支持自定义标题和内容
  - 支持多种按钮配置
  - 支持自定义宽度和位置
  - 支持遮罩层配置
  - 支持动画效果
  - 支持 Promise 风格的 API

- Icon 组件 ([@cychenhaibin](https://cychenhaibin.github.com), 2025-05-17)

  - 支持多种图标
  - 支持自定义大小和颜色
  - 支持旋转动画
  - 支持双色图标
  - 支持自定义类名
  - 支持事件回调

- 项目部署配置 ([@cychenhaibin](https://cychenhaibin.github.com), 2025-05-17)

  - 配置 GitHub Pages 自动部署
  - 配置 npm 包发布流程
  - 配置 CI/CD 流程
  - 配置版本管理
  - 配置文档站点构建

- 单元测试框架 ([@cychenhaibin](https://cychenhaibin.github.com), 2025-05-17)
  - 集成 Jest 测试框架
  - 集成 React Testing Library
  - 配置测试覆盖率报告
  - 编写组件测试用例
  - 配置测试环境
