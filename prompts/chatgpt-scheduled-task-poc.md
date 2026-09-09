# AI Brief Hub 云端写入边界测试

这是一个一次性 PoC，不是正式日报任务。

目标仓库：`kakanbai/ai-digest`

请确定 Asia/Shanghai 当前日期，并尝试在以下路径创建一个全新的 Markdown 文件：

`content/research/YYYY/MM/YYYY-MM-DD-cloud-poc.md`

文件内容必须为：

```markdown
---
layout: layouts/digest.njk
title: "ChatGPT Cloud Write PoC｜YYYY-MM-DD"
date: YYYY-MM-DD
type: research
task: cloud-write-poc
tags: [PoC, ChatGPT, Scheduled-Task]
summary: "验证 ChatGPT Scheduled Task 是否能在无人值守时写入 GitHub。"
permalink: /research/YYYY/MM/YYYY-MM-DD-cloud-poc/
---

# ChatGPT Cloud Write PoC

本文件由 ChatGPT Scheduled Task 在云端生成，用于验证无人值守 GitHub 写入。
```

限制：

- 只允许创建上述单一文件。
- 禁止修改任何历史文件、模板、工作流或依赖。
- 若目标文件已存在，不覆盖，报告 `ALREADY_EXISTS`。
- 只有 GitHub 中能看到真实 commit 才报告 `WRITE_SUCCEEDED`。
- 如果当前 GitHub app 没有写权限，明确报告 `WRITE_UNSUPPORTED`；不要只在聊天里输出文件后声称成功。

最终只输出状态、目标路径、commit URL（如有）和失败原因（如有）。

