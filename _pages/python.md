---
title: Python安装
author: Luo Yan
date: 2022-02-06
category: InSARDoc
layout: post
---

本教程使用的是Conda + Python 3.10.12版本

1. 打开终端，检查conda是否正确运行
```C
conda list
```

2. 创建一个名为`myenv`的虚拟环境，并指定python版本为`3.10.12`
```C
conda create -n myenv python=3.10.12
```

3. 激活环境
```C
conda activate myenv
```


4. 检查python版本
```C
python --version
```