# 方寸 · 魔方实验室

零依赖的 Canvas 3D 魔方游戏，完全离线可用。

## 开始

下载仓库到本地后，双击 `cube/dist/方寸魔方.html`，或双击 `cube/index.html`，即可在浏览器中开始游戏，无需安装环境或启动服务器。

## 项目结构

```text
README.md            项目介绍
cube/                游戏源码与构建产物
  index.html         页面入口
  style.css          界面样式
  engine.js          魔方状态模型
  app.js             渲染、交互与计时
  build.js           离线单文件构建脚本
  test.js            状态模型测试
  test-app.js        界面逻辑测试
  dist/方寸魔方.html  可直接打开的离线单文件
```

## 操作

- 拖动色块：跟手转层，超过 45° 松开吸附，否则回弹。
- 拖动空白：旋转视角；滚轮：缩放；双击空白：重置视角。
- 触屏：单指转层或旋转；双指缩放与移动旋转视角。
- U D L R F B：六面；M E S：中层；Shift：反转。
- 面按钮：点按正转，长按超过 450ms 或右键反转。
- Ctrl+Z：撤销；Ctrl+Y / Ctrl+Shift+Z：重做。macOS 可用 Command。
- 随机打乱：24 步，随后首次转动开始计时；复原完成自动停表。
- 复原：立即恢复初始状态并清空计时、步数与历史。
- 速度滑块：向左更快，向右更慢。

## 开发

`cube/engine.js` 管理整数坐标和色块法向量，`cube/app.js` 负责投影、拾取、手势和界面。
不依赖 CDN、框架或网络字体，无需安装依赖。

开发和构建需要 Node.js。在仓库根目录运行：

```shell
node cube/test.js
node cube/test-app.js
node cube/build.js
```

前两条命令检验状态模型和界面逻辑，第三条命令生成 `cube/dist/方寸魔方.html`。

复原按钮是重置功能，不是自动求解器。计时与历史仅保存在当前页面中。
