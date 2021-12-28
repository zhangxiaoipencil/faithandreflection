---
title: 常用的Markdown语法
tags: 软件
date: 2021-12-28
author: BertKing
location: Beijing
---

**每次创建.md文件时，最好将--- ---中间的内容写了，它的作用在网页端可以看出来**

---


## 一. Markdown
[Markdown的基本信息](https://markdown.com.cn/intro.html)


## 二.Markdwon的基本语法
1.[中文教程](https://markdown.com.cn/basic-syntax/)


2.[英文教程](https://www.markdownguide.org/basic-syntax/)

### 2.1 添加图片可能会出现的问题
图片可能是网络图片，也可以本地图片，两者有些许差别。

##### 2.2.1 网络图片
可以直接预览
![随便写](https://img2.baidu.com/it/u=56967242,1923558450&fm=26&fmt=auto)

##### 2.2.2 本地图片
**特别注意:本项目的图片要放在blog/.vuepress/public/image里面**。

这个不能预览，但是可以通过**npm run dev**看到效果。
![柯南照片](/image/kenan.webp)

##### 2.2.3 调节图片大小

<img src = "https://img2.baidu.com/it/u=142567227,1547710256&fm=26&fmt=auto" width = 30%>

3.[Markdown Enhance 使Markdown更富有表现形式](https://vuepress-theme-hope.github.io/md-enhance/zh/guide/align/#)
> PS: 这个特性在预览是看不出效果的。

可能会用到的示例：


这个 ==可能== 有用 ,如果没有生效，很可能是因为 ==没有加空格==

 ::: info 自定义标题
信息容器
:::

::: tip 自定义标题
提示容器
:::

::: warning 自定义标题
警告容器
:::

::: danger 自定义标题
危险容器
:::

::: details 自定义标题
详情容器
:::

## 三. 可能出错的点


![可能出错](/image/error1.png)


## 四.正常流程

#### 4.1 本地预览网页效果
>Ctrl + C 是终止进程的 (也可以新建一个终端)

![本地预览](/image/operation_1.png)

#### 4.2 运行脚本发布网页
> .deploy.sh

![运行脚本start](/image/operation_2.png)

![运行脚本end](/image/operation_3.png)

#### 4.3 查看发布进度(非必须)

此过程非必须。一般等待５分钟刷新[网页](https://faithandreflection.top/)即可。
![等待发布](/image/operation_4.png)


![发布成功](/image/operation_5.png)

#### 4.5 存储到远端(非必须)

相当于把该项目存储到Github，不需要带U盘啦
![存储到远端](/image/save_cloud.png)