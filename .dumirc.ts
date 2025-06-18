import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  favicons: ['https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png'],
  themeConfig: {
    name: 'cube',
    logo: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
    nav: [
      {
        title: '指南',
        link: '/guide',
      },
      {
        title: '组件',
        link: '/components/button',
      },
      {
        title: '更新日志',
        link: '/changelog',
      },
      {
        title: '贡献指南',
        link: '/contributing',
      },
    ],
    sidebar: {
      '/components': [
        {
          title: 'Basic 基础组件',
          children: [
            { title: 'Button 按钮', link: '/components/button' },
            { title: 'Icon 图标', link: '/components/icon' },
          ],
        },
        {
          title: 'Feedback 反馈组件',
          children: [
            { title: 'Message 全局提示', link: '/components/message' },
            { title: 'Dialog 对话框', link: '/components/dialog' },
            { title: 'Tooltip 文字提示', link: '/components/tooltip' },
          ],
        },
        {
          title: 'Form 表单组件',
          children: [
            { title: 'Input 输入框', link: '/components/input' },
            { title: 'Checkbox 多选框', link: '/components/checkbox' },
            { title: 'Radio 单选框', link: '/components/radio' },
            { title: 'Select 选择器', link: '/components/select' },
            { title: 'InputTag 标签输入', link: '/components/inputtag' },
            { title: 'InputNumber 数字输入', link: '/components/inputnumber' },
            { title: 'Rate 评分', link: '/components/rate' },
          ],
        },
        {
          title: 'Data 数据展示',
          children: [
            { title: 'Progress 进度条', link: '/components/progress' },
            { title: 'Tree 树形控件', link: '/components/tree' },
          ],
        },
      ],
    },
  },
});
