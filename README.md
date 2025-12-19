# Vite Sample Project for Replit

![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A5%2020.19.0-5FA04E?logo=nodedotjs&labelColor=white)
![Vite](https://img.shields.io/badge/Vite-v7.3.0-%23646CFF?logo=vite&labelColor=white)
![replit](https://img.shields.io/badge/replit%20support-%23F26207?logo=replit&labelColor=white)
![MIT](https://img.shields.io/badge/License-MIT-red.svg?labelColor=white&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzIxIiB3aWR0aD0iMzIxIj4KPGcgc3Ryb2tlLXdpZHRoPSIzNSIgc3Ryb2tlPSIjQTMxRjM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCA3NykiPgo8cGF0aCBkPSJtMTcuNSwwdjE2Nm01Ny0xNjZ2MTEzbTU3LTExM3YxNjZtNTctMTY2djMzbTU4LDIwdjExMyIvPgo8cGF0aCBkPSJtMTg4LjUsNTN2MTEzIiBzdHJva2U9IiM4QThCOEMiLz4KPHBhdGggZD0ibTIyOSwxNi41aDkyIiBzdHJva2Utd2lkdGg9IjMzIi8+CjwvZz4KPC9zdmc+Cg==)

## About

這是一個使用 Vite 建立的前端範例專案

在本地開發時，使用 Vite 預設設定（使用 `localhost:5173` 預覽）；在 Replit 部署 / 預覽，則是套用 Replit 需要的 server / HMR 設定


## 預覽

### 本地預覽

這是有分正式/測試環境的範例專案

如果是正式環境則

```shell
$ npm run dev:production
```
如果是測試環境則

```bash
$ npm run dev:development
```

### Replit

Replit 目前僅寫了預覽測試環境的 script：

```bash
$ npm run dev:replit
```

## 編譯成 HTML + CSS + JS

如果是正式環境則

```shell
$ npm run build:production
```
如果是測試環境則

```bash
$ npm run build:development
```
