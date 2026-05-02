# 个人简历网站（Vite + React + Tailwind + Framer Motion）

## 1. 启动项目
```bash
npm install
npm run dev
```

## 2. 已实现模块
- 顶部导航：`Home / Work / Gallery / Contact`
- 电影感深色背景：暗色网格 + 红蓝紫渐变光斑 + 颗粒质感
- 首页 CTA：`Explore Work`
- 作品区：6 个项目卡片（按三大类归档）
- 联系区：邮箱 / 微信 / 社媒入口
- Framer Motion 动效：入场、悬停、过渡（克制丝滑）
- 响应式布局：手机与电脑自适应

## 3. 你常改的文件
- 页面结构与内容：`src/App.jsx`
- 视觉样式（背景/字体/卡片）：`src/index.css`
- Tailwind 主题色：`tailwind.config.js`

## 4. 你需要替换的内容
1. 在 `src/App.jsx` 中修改：
   - 个人介绍文案
   - 6 个作品标题与简介
   - 联系方式（邮箱/微信/社媒链接）
2. 头像与校徽默认路径：
   - `assets/images/profile-photo.jpg`
   - `assets/images/school-emblem.png`

## 5. 构建产物
```bash
npm run build
```
构建结果输出到 `dist/`。
