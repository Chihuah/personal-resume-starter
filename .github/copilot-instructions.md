# Copilot Instructions

- 使用語義化 HTML：`<header> <main> <section> <article> <footer> <nav>`
- 確保響應式：必備 `<meta name="viewport" content="width=device-width, initial-scale=1">`
- CSS 優先：Flex/Grid 佈局；避免濫用絕對定位
- 無障礙：提供替代文字 `alt`、按鈕 `aria-label`
- 效能：圖片壓縮/懶加載、避免大型阻塞 JS
- 可維護：組件化命名、適度註解、避免過度巢狀

## 提示範例
- 「建立一個個人簡歷網頁，包含 header、關於我、技能、經歷、作品集、聯絡方式」
- 「技能區塊用 CSS Grid 排列標籤，加入 hover 效果」
- 「新增深色模式切換（以 data-theme 切換變數）」
- 「加上印刷樣式（@media print），只輸出主要文字內容」
