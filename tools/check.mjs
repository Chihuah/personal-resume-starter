import fs from 'node:fs';
import path from 'node:path';

const FAIL = (msg) => { console.error('❌', msg); process.exitCode = 1; };
const PASS = (msg) => console.log('✅', msg);

const htmlPath = path.join(process.cwd(), 'index.html');
const cssPath  = path.join(process.cwd(), 'styles.css');

if (!fs.existsSync(htmlPath)) FAIL('缺少 index.html');
else PASS('找到 index.html');

if (!fs.existsSync(cssPath)) FAIL('缺少 styles.css');
else PASS('找到 styles.css');

const html = fs.readFileSync(htmlPath, 'utf8');
const css  = fs.readFileSync(cssPath, 'utf8');

// 1) 基本區塊存在
const requiredIds = ['about','skills','experience','projects','contact'];
requiredIds.forEach(id => {
  if (!html.includes(`id="${id}"`)) FAIL(`缺少必要區塊 #${id}`);
});

// 2) 語義化元素（至少一個）
if (!/(<header|<main|<section|<article|<footer|<nav)/i.test(html)) {
  FAIL('缺少語義化 HTML 標籤');
} else PASS('語義化 HTML 存在');

// 3) 響應式必要 meta
if (!/<meta[^>]+name=["']viewport["']/i.test(html)) FAIL('缺少 viewport meta');
else PASS('viewport meta OK');

// 4) 卡片/網格（作品集）
if (!/class=["'][^"']*cards[^"']*["']/.test(html)) FAIL('作品集卡片區(.cards)缺失或未使用');
else PASS('作品集卡片區存在');

// 5) 平滑捲動（CSS 或 JS）
if (!/scroll-behavior:\s*smooth/i.test(css) && !/scrollIntoView\(\s*{?\s*behavior:\s*["']smooth["']/i.test(html)) {
  FAIL('未偵測到平滑捲動設定');
} else PASS('平滑捲動 OK');

// 6) 深色模式（加分不列為失敗，但給提示）
if (!/data-theme=/.test(html) && !/data-theme/.test(css)) {
  console.log('ℹ️ 深色模式未偵測到（不扣分，加分項）');
} else PASS('偵測到深色模式配置');

// 7) 列印樣式（加分）
if (!/@media\s+print/i.test(css)) {
  console.log('ℹ️ 未偵測到列印樣式（不扣分，加分項）');
} else PASS('偵測到列印樣式');

console.log('檢核完成。若上方有 ❌，請修正後重新推送。');
