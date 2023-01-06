---
title: '使用Projj组织你的仓库目录'
date: '2021-07-06'
description: 'Projj —— A tool to organize your repo'
---

### 简介

Projj 是一个让你的仓库管理更加简洁方便的一个工具。

平时，如果我们想把远程的代码仓库 clone 到本地，我们需要在本地创建一个文件夹，然后再去执行`git clone remote-url`。但是一旦使用了 Projj，一切都会让我们的组织目录和 clone 仓库变得更加简单和高效。

### 安装

使用 yarn 进行全局安装

```shell
yarn global add projj
```

### 用法

**初始化**

```
projj init
```

命令行会交互式让你设置 Base directory，也就是你要将代码放在哪里。

我这里设置的是`~/Code`，默认是`~/projj`。

当然你也可以在`~/projj/config.json`文件中去修改 Base directory。

**修改配置文件**

我的配置文件如下：

```json
{
  "base": ["/Users/aspirin/Code"],
  "hooks": {
    "postadd": "git_config_user"
  },
  "postadd": {
    "github.com": {
      "name": "aspirin",
      "email": "mhb7724@qq.com"
    },
    "gitlab.fuyoukache.com": {
      "name": "haibo",
      "email": "mihaibo2335@foryou56.com"
    }
  }
}
```

因为我会有 GitHub 外部账号和 Gitlab 公司内部账号，通过这样的配置，通过 Projj 下载下来的代码会自动帮我存到对应的目录下面。

**下载代码**

我们通过执行`projj add <remote-url>`来代替之前的`git clone <remote-url>`的操作。

下载完成后，我们下载下来的代码仓库的本地相对路径会被自动复制到粘贴板上。

![projj1](/images/projj1.png)

**本地仓库目录结构**

我们通过 tree 命令来看一下我们本地`~/Code`下的仓库目录结构。

如果没有装 tree 的同学可以通过 homebrew 进行安装。

执行`tree -L 2`

![projj2](/images/projj2.png)

清晰明了。

### 参考

[https://github.com/popomore/projj](https://github.com/popomore/projj)

[https://www.bilibili.com/video/BV1Bt411q7VV](https://www.bilibili.com/video/BV1Bt411q7VV)
