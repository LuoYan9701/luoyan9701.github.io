---
title: QGis安装
author: Luo Yan
date: 2022-02-09
category: InSARDoc
layout: post
---

### QGIS简介
本教程使用的是Ubuntu22.04.1LTS版本
在Ubuntu等Linux系统中，可以对空间信息加以可视化的遥感、GIS软件很少，比如ArcGIS下属的ArcMap就没有对应的Linux版本（虽然有ArcGIS Server，但是其没有办法对空间数据加以可视化）。但是，对于Ubuntu等桌面系统，我们还是可以使用开源的QGIS软件来加以可视化的GIS操作的。本文就介绍在Ubuntu操作系统中，配置QGIS软件的方法。

[官方网站](https://qgis.org/resources/installation-guide/#debian-ubuntu)
[参考文档](https://blog.csdn.net/zhebushibiaoshifu/article/details/134002632)


### QGIS安装
1. 安装依赖包
```C
sudo apt install gnupg software-properties-common
```

2. 下载并保存QGIS的密钥
```C
sudo wget -O /etc/apt/keyrings/qgis-archive-keyring.gpg https://download.qgis.org/downloads/qgis-archive-keyring.gpg
```

3. 查看当前操作系统的codename
```C
lsb_release -cs
```

4. 将以下内容加到`/etc/apt/sources.list.d/qgis.sources`文件的末尾
```C
Types: deb deb-src
URIs: https://qgis.org/debian
Suites: 第三步中的codename
Architectures: amd64
Components: main
Signed-By: /etc/apt/keyrings/qgis-archive-keyring.gpg
```

5. 更新存储库信息，以激活新添加的QGIS信息
```C
sudo apt update
```

6. 安装QGIS
```C
sudo apt install qgis qgis-plugin-grass qgis-server
```
其中qgis-server是可选项