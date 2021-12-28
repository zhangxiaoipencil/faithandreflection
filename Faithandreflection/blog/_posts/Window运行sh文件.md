---
title: 解决Window无法运行shell script的问题
tags: 软件
date: 2021-12-28
author: BertKing
location: Beijing
---

[Shell脚本](https://zh.wikipedia.org/wiki/%E5%A4%96%E5%A3%B3%E8%84%9A%E6%9C%AC) 在 Windows电脑无法执行。

解决方法如下：
1. 可以安装 [cygwin](https://www.cygwin.com/)。
   > Cygwin是一个在windows平台上运行的类UNIX模拟环境
2. 安装 [Git](https://git-scm.com/downloads)

---
参考自:[how-to-run-sh-on-windows-command-prompt](https://stackoverflow.com/questions/26522789/how-to-run-sh-on-windows-command-prompt#)


为了能在[Visual Code](https://code.visualstudio.com/docs/editor/integrated-terminal)软件中直接使用**Git Bash终端**,所以将Git Bash终端设置为Visual Code的默认终端。

PS： 如需切换终端:
![切换终端](https://code.visualstudio.com/assets/docs/editor/integrated-terminal/terminal-dropdown.png)
