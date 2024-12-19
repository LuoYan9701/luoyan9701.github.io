---
title: Conda安装
author: Luo Yan
date: 2022-02-05
category: InSARDoc
layout: post
---

+ conda 分为 anaconda 和 miniconda，anaconda 是一个包含了许多常用库的集合版本，miniconda 是精简版本（只包含conda、pip、zlib、python 以及它们所需的包）。
+ [参考文档1](https://blog.csdn.net/qq_39071254/article/details/138255755)
+ [参考文档2](https://docs.anaconda.com/miniconda/install/#quick-command-line-install)

+ 在Ubuntu系统上快速安装Miniconda的步骤相对简单，下面是具体的步骤：

1. 下载Miniconda安装脚本：
访问Miniconda的[官方网站下载页](https://repo.anaconda.com/miniconda/)，选择适用于Linux的安装脚本。根据您的系统架构（例如，64位），选择正确的版本。

2. 打开终端，新建文件夹：
```C
mkdir -p ~/miniconda3
cd ~/miniconda3
```

3. 使用`wget`或`curl`下载安装脚本：
在终端中，使用以下命令之一来下载Miniconda安装脚本。假设选择的是Python3 64位的Miniconda版本，命令如下：
```C
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
```
或者
```C
curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
```

4. 使脚本可执行：
通过运行以下命令，赋予下载的脚本执行权限：
```C
chmod +x Miniconda3-latest-Linux-x86_64.sh
```

5. 运行安装脚本：
执行以下命令开始安装过程：
```C
./Miniconda3-latest-Linux-x86_64.sh
```
按照屏幕上的指示完成安装。这包括阅读许可协议、选择安装位置以及选择是否将Conda初始化到您的shell中。

6. 重新加载终端或启动新的shell实例：
为了使安装生效，您可能需要关闭并重新打开终端窗口，或者可以执行：
```C
source ~/.bashrc
```
或者
```C
source ~/miniconda3/bin/activate
```

7. 初始化conda
要在所有可用的shell上初始化conda，请运行以下命令
```C
conda init --all
```

8. 验证安装：
安装完成后，可以通过以下命令验证Miniconda是否正确安装：
```C
conda list
```

9. 添加镜像源
```C
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/bioconda/
conda config --add channels https://mirrors.bfsu.edu.cn/anaconda/cloud/bioconda/
conda config --add channels https://mirrors.bfsu.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.bfsu.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.bfsu.edu.cn/anaconda/pkgs/main/
```

目前国内提供conda镜像的大学[参考文档](https://blog.csdn.net/ViatorSun/article/details/118578818):
+ 清华大学: [https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/](https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/)
+ 北京外国语大学: [https://mirrors.bfsu.edu.cn/help/anaconda/](https://mirrors.bfsu.edu.cn/help/anaconda/)
+ 南京邮电大学: [https://mirrors.njupt.edu.cn/](https://mirrors.njupt.edu.cn/)
+ 南京大学: [http://mirrors.nju.edu.cn/](http://mirrors.nju.edu.cn/)
+ 重庆邮电大学: [http://mirror.cqupt.edu.cn/](http://mirror.cqupt.edu.cn/)
+ 上海交通大学: [https://mirror.sjtu.edu.cn/](https://mirror.sjtu.edu.cn/)
+ 哈尔滨工业大学: [http://mirrors.hit.edu.cn/#/home](http://mirrors.hit.edu.cn/#/home)
+ (目测哈工大的镜像同步的是最勤最新的)
