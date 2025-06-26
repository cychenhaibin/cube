---
title: Progress 进度条
description: 展示操作的当前进度。
demo:
  cols: 2
---

## 何时使用

- 在操作需要较长时间才能完成时，显示操作的当前进度
- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时
- 当需要显示一个过程完成的百分比时
- 在文件上传、表单提交等场景下，展示上传/提交进度
- 在数据加载、处理等场景下，展示加载/处理进度

## 代码演示

<code src="./demos/demo1.tsx" description="line 型进度条最基本使用。">基本使用</code>
<code src="./demos/demo2.tsx" description="适合在狭窄地区使用">小型进度条</code>
<code src="./demos/demo3.tsx" description="进度条可以设置不同状态">进度条状态</code>
<code src="./demos/demo4.tsx" description="圆形，方形可选。默认圆形。">进度条边缘形状</code>
<code src="./demos/demo5.tsx" description="steps 仅当`type==='line'`生效。">进度条步骤</code>
<code src="./demos/demo6.tsx" description="circle 型进度条在`rc-progress`库基础上封装。">circle 型进度条</code>

## API 说明

### 通用

|    参数     |                       类型                       |      说明      |   默认值    |
| :---------: | :----------------------------------------------: | :------------: | :---------: |
|    type     |                `line` \| `circle`                |   进度条类型   |   `line`    |
|   percent   |                     `number`                     |   进度条数值   |      0      |
|   format    |       `(percent?:number)=>React.ReactNode`       | 格式化进度数字 | `undefined` |
|    size     |               `default` \| `small`               |  进度条的大小  |  `default`  |
| strokeWidth |                     `number`                     |  进度条的宽度  |      6      |
|  showInfo   |                    `boolean`                     | 是否显示进度值 |   `true`    |
|   status    | `normal` \| `exception` \| `active` \| `success` | 当前进度的状态 |  `normal`   |

### line 型组件

|     参数      |             类型              |       说明       |   默认值    |
| :-----------: | :---------------------------: | :--------------: | :---------: |
| strokeLinecap | `butt` \| `square` \| `round` |  进度条边缘形状  |   `butt`    |
|  trailColor   |           `string`            |  进度条尾部颜色  | `undefined` |
|     steps     |           `number`            | 步骤进度条的步数 | `undefined` |
