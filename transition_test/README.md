# transition test

react navigationを個人的に勉強しているディレクトリ
- drawer
- tab
- stack

# ディレクトリ構成

```
.
├── App.tsx
├── app.json
├── assets
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash.png
├── babel.config.js
├── components
│   ├── buttons.tsx
│   └── fugafuga.tsx
├── constants
│   └── color.ts
├── navigation
│   ├── index.tsx
│   ├── mypage.tsx
│   ├── notifications.tsx
│   └── top.tsx
├── package-lock.json
├── package.json
├── screens
│   ├── mypage
│   ├── notifications
│   └── top
└── tsconfig.json
```
依存関係は
navigation
↓
screens
↓
components

## navigation層
react navigationを用いて画面繊維を含めた全体の設計を構築するのが責務
screensを組み合わせて一つのnavigationを構築する

## screens層
一枚の画面を構築する
できればnative baseに依存していない状態が理想

## components層
共通化できるコンポーネントが関数単位でまとめられている
native baseに依存している状態

## constants層
定数
