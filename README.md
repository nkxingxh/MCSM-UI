<img src="https://public-link.oss-cn-shenzhen.aliyuncs.com/mcsm_picture/logo.png" alt="MCSManager 图标.png" width="500px" />

<br />

[![Status](https://img.shields.io/badge/npm-v6.14.15-blue.svg)](https://www.npmjs.com/)
[![Status](https://img.shields.io/badge/node-v14.17.6-blue.svg)](https://nodejs.org/en/download/)
[![Status](https://img.shields.io/badge/License-AGPL-red.svg)](https://github.com/Suwings/MCSManager)

[官方网站](http://mcsmanager.com/) | [使用文档](https://docs.mcsmanager.com/) | [团队主页](https://github.com/MCSManager) | [面板端项目](https://github.com/MCSManager/MCSManager) | [网页前端项目](https://github.com/MCSManager/UI) | [守护进程项目](https://github.com/MCSManager/Daemon)

**Web UI project for MCSManager.**
**适用于 MCSManager 的 Web UI 项目。**

Please go to the main warehouse of the project / 项目主仓库请前往：
[https://github.com/MCSManager/MCSManager](https://github.com/MCSManager/MCSManager)

<br />

## Introduction to mcsmanager / MCSManager 简介

**Distributed, stable and reliable, out of the box, high scalability, and support the control panel of minecraft and a few other games.**
**分布式，稳定可靠，开箱即用，高扩展性，支持 Minecraft 和其他少数游戏的控制面板。**

MCSManager panel (MCSM panel for short) is an all Chinese, lightweight, out of the box, multi instance and Docker supported Minecraft server management panel.
MCSManager 面板（简称：MCSM 面板）是一款全中文，轻量级，开箱即用，多实例和支持 Docker 的 Minecraft 服务端管理面板。

This software has a certain popularity in Minecraft and other game communities. It can help you centrally manage multiple physical servers, dynamically create game servers on any host, and provide a safe and reliable multi-user permission system, which can easily help you manage multiple servers.
此软件在 Minecraft 和其他游戏社区内中已有一定的流行程度，它可以帮助你集中管理多个物理服务器，动态在任何主机上创建游戏服务端，并且提供安全可靠的多用户权限系统，可以很轻松的帮助你管理多个服务器。

<br />

## Build development environment / 搭建开发环境

```bash
git clone https://github.com/MCSManager/MCSManager-UI.git
cd MCSManager-UI
npm install
npm run serve
# visit http://localhost:8080/ You can preview the interface
# 访问 http://localhost:8080/ 即可预览界面
```

> 需要面板端项目同时运行以提供后端接口能力，默认所有请求转发到 23333 端口。

<br />

## Problem report / 问题报告

Any problems found are welcome to feedback and must be repaired in time.
欢迎发现的任何问题进行反馈，必当及时修复。

If you find serious security vulnerabilities and it is inconvenient to publish them publicly, please send an email to: Suwings@outlook.com , after the security problem is fixed, the name of the vulnerability discoverer will be attached to the code.
若发现严重安全漏洞又不便公开发布，请发送邮件至: Suwings@outlook.com，安全问题修复后将在代码中附加漏洞发现者姓名。

<br />

## Contribution / 贡献

If you find any problems during use, you can submit issue or fork and submit pull request after modification.
如果你在使用过程中发现任何问题，可以提交 Issue 或自行 Fork 修改后提交 Pull Request。

The code needs to maintain the existing format, and redundant code shall not be formatted
代码需要保持现有格式，不得格式化多余代码，具体可[参考这里](https://github.com/MCSManager/MCSManager/issues/544)。

<br />

## Copyright constraints / 版权约束

此开源项目使用 [AGPL 协议](LICENSE) 作为开源协议，未经过官方闭源开发授权，您如果对代码有任何修改，则必须要公开您修改后的源代码，具体约束如下。

**Permissions / 准许**

- 对软件源代码进行修改，复制，分发。
- 利用软件进行商业使用，赚取利润。

**Must / 必须**

- 公开提供您修改后的完整源代码。
- 在代码文件、界面中保留版权声明。

**Prohibit / 禁止**

- 禁止售卖此软件，申请专利，著作权等。

> 更多授权与版权约束详情，请前往官方网站界面了解更多。

<br />
