# .TripEasy 前端專案說明

## 專案操作

### 將專案從github複製到本地端

1. `git clone`：將專案複製到本地端中
2. `npm install`：安裝node_modules套件

### vite相關指令

- `npm run dev`：本地端專案運行
- `control/ctrl + C`：終止專案運行，使用`npm run dev`運行專案後如果想要停止請透過這個指令
- `npm run build`：將專案生成出一個 `dist`資料夾，此資料夾可以透過 live server運行

## git 團隊操作/分支管理

### 分支說明

- main（主分支）：穩定版程式碼，不能直接開發，所有更改需透過 Pull Request（PR）。
- dev（開發分支）：從 main 分出來，作為開發時的基礎分支，大家的功能開發都從這裡開始。
- feature/xxx（功能分支）：每個人負責的功能，都要從 dev 分支開一個新的功能分支來開發。

### 組員開發時的流程

#### 1. 同步最新的 `dev` 分支

```
git checkout dev      # 切換到dev分支
git pull origin dev   # 將dev的進度抓下來
```

#### 2. 開新的功能分支

```
git checkout -b feature/xxx dev
```

> `xxx`為功能名稱，請組員自行取名

#### 3. 編輯程式並提交

```
git add .
git commit -m "完成某功能"
```

#### 4. 推送到遠端

```
git push origin feature/xxx
```

> `xxx`為功能名稱，請推送到步驟 2 時所建立的分支
> 如果當前進度未完成，就不用做步驟 5 了

#### 5. 發送 Pull Request (PR)

- 當組員確定目前分支的功能編輯完成後請到 GitHub 開 PR，請求合併 feature/xxx 到 dev
- 確定要更新 GitHub Page 時再去 GitHub 開 PR，請求合併 dev 到 main

> 如果成員擔心發生衝突且無法解決可使用PR的方式
> 如果不擔心可以自行處理衝突，可直接`git merge`

### 組員隔天繼續編輯的流程

#### 1. 確保本地的 feature/xxx 是最新的

```
git checkout feature/xxx  # 切換到自己的功能分支
git fetch origin          # 取得遠端最新的變更
git pull origin feature/xxx  # 更新本地 feature/xxx
```

#### 2. 繼續開發

在 feature/xxx 上繼續寫程式，然後正常提交

```
git add .
git commit -m "xxx"
```

#### 3. 推送到遠端

```
git push origin feature/xxx
```

#### 4. 發送 Pull Request (PR)

- 當組員確定目前分支的功能編輯完成後請到 GitHub 開 PR，請求合併 feature/xxx 到 dev
- 確定要更新 GitHub Page 時再去 GitHub 開 PR，請求合併 dev 到 main

> 如果成員擔心發生衝突且無法解決可使用PR的方式
> 如果不擔心可以自行處理衝突，可直接`git merge`

### 其他指令

```
git status   #確認自己當前的分支
```
