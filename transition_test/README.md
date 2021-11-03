# transition test

react navigation を個人的に勉強しているディレクトリ

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

## navigation 層

react navigation を用いて画面繊維を含めた全体の設計を構築するのが責務
screens を組み合わせて一つの navigation を構築する

## screens 層

一枚の画面を構築する
できれば native base に依存していない状態が理想

## components 層

共通化できるコンポーネントが関数単位でまとめられている
native base に依存している状態

## constants 層

定数
