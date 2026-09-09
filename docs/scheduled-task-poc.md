# ChatGPT Scheduled Task → GitHub 写入 PoC

## 结论（2026-09-09）

当前不能把“ChatGPT Scheduled Task 直接写入 GitHub”作为可运行链路：OpenAI 官方文档说明，ChatGPT 的 GitHub app 只提供读取、分析与搜索能力；创建、编辑和推送代码需要 Codex。Scheduled Tasks 可以使用受支持的 connected apps，但不会越过 app 本身的权限边界。

因此，本项目不会创建四个正式内容任务，也不会把一个明知无法完成写入的测试任务误标为成功。

## 已准备的边界测试

若后续 ChatGPT 为 Scheduled Tasks 提供 GitHub 写能力，可在 ChatGPT 的 Scheduled 页面创建一个一次性测试任务，使用 `prompts/chatgpt-scheduled-task-poc.md`，并安排在创建后的最近可用时间运行。

验收条件必须同时满足：

- Mac 关机，ChatGPT Desktop 不运行。
- 无人工审批、复制或粘贴。
- 仓库出现 `content/research/YYYY/MM/YYYY-MM-DD-cloud-poc.md`。
- Commit 作者和时间可核验。
- GitHub Actions 自动构建并部署 Pages。
- 飞书收到成功通知，包含网页地址和 Markdown 地址。

任一条件不满足都记为 PoC 失败，不进入正式任务阶段。

## 当前可选的全云端替代路线

1. GitHub Actions 定时触发 + OpenAI API：完全云端，但会产生 API 用量，与“不用 API”目标冲突。
2. Codex 云端任务：能够改仓库，但属于 Codex 工作流，不是 ChatGPT Scheduled Tasks。
3. 人工复制 ChatGPT 任务结果到 GitHub：不依赖 API，但不是无人值守。

在用户选择替代路线前，本项目保持静态站点与部署链路就绪，不擅自引入额外费用或不同产品。

