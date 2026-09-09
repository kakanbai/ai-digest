# AI Brief Hub

一个由 Markdown 驱动的私人 AI 情报中心。Eleventy 负责生成静态页面，Pagefind 负责构建全文搜索索引，GitHub Actions 负责发布到 GitHub Pages 并通过飞书通知结果。

## 本地预览

```bash
npm install
npm run build
npm run serve
```

## 内容约定

自动化内容只能创建或更新 `content/**` 下的 Markdown，不得修改站点模板、工作流或依赖。推荐路径：

```text
content/ai/YYYY/MM/YYYY-MM-DD.md
content/market/YYYY/MM/YYYY-MM-DD.md
content/github/YYYY/MM/YYYY-MM-DD.md
content/research/YYYY/MM/YYYY-MM-DD.md
content/weekly/YYYY/YYYY-MM-DD.md
```

Front Matter 示例：

```yaml
---
layout: layouts/digest.njk
title: "AI Coding Daily｜2026-09-09"
date: 2026-09-09
type: ai
task: ai-coding-daily
tags: [Claude-Code, Codex, MCP]
summary: "今日 AI Coding Agent 重要动态"
permalink: /ai/2026/09/09/
---
```

## GitHub 设置

1. 新建公开或私有仓库并推送本项目。
2. 在仓库 `Settings → Pages → Build and deployment` 中选择 **GitHub Actions**。
3. 在 `Settings → Secrets and variables → Actions` 新建 Secret：`FEISHU_WEBHOOK_URL`。
4. 不要把飞书 Webhook 写入文件、Issue、日志或任务提示词。

推送到 `main` 后，工作流会构建 Eleventy、生成 Pagefind 索引、部署 Pages，并在成功或失败时发送飞书通知。

## PoC 状态

ChatGPT 的 GitHub 连接器当前为只读，不能创建或推送文件。因此“ChatGPT Scheduled Task 直接写 Markdown 到 GitHub”尚不具备官方支持，详见 `docs/scheduled-task-poc.md`。在该边界改变或有正式云端写入通道前，不创建四个正式任务。

