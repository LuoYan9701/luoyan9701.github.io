---
title: GAMMA安装
author: Luo Yan
date: 2022-02-07
category: InSARDoc
layout: post
---

主要参考了
/GAMMA_SOFTWARE-20181208/DISP/html/DISP_documentation.html#Linux installation instructions (binary distribution)

1. 更新系统
```C
sudo apt update
sudo apt upgrade
```

2. 解压安装包<br>
选择要解压缩Gamma软件的目录。建议的位置是/home或/usr/local：
```C
export GAMMA=/usr/local
```
或者
```C
export GAMMA=$HOME
```
将下载的文件复制到$GAMMA_HOME目录：
```C
cp GAMMA_SOFTWARE-yyyymmdd.linux.tar.gz $GAMMA
cd $GAMMA_HOME
```
使用gunzip和tar打开:
```C
gunzip -c GAMMA_SOFTWARE-yyyymmdd.linux.tar.gz > GAMMA_SOFTWARE-yyyymmdd.linux.tar
tar -xvf GAMMA_SOFTWARE-yyyymmdd.linux.tar
```

3. 设置环境变量<br>
打开`/home/.bashrc`文件，在末尾加上以下内容。
```C
export GAMMA_HOME=/usr/local/GAMMA_SOFTWARE-yyyymmdd
#export GAMMA_HOME=$HOME/GAMMA_SOFTWARE-yyyymmdd
export ISP_HOME=$GAMMA_HOME/ISP
export DIFF_HOME=$GAMMA_HOME/DIFF
export DISP_HOME=$GAMMA_HOME/DISP
export LAT_HOME=$GAMMA_HOME/LAT
export IPTA_HOME=$GAMMA_HOME/IPTA
export GEO_HOME=$GAMMA_HOME/GEO
export PATH=$PATH:.:$MSP_HOME/bin:$ISP_HOME/bin:$DIFF_HOME/bin:$LAT_HOME/bin:$IPTA_HOME/bin:$GEO_HOME/bin:\
$DISP_HOME/bin:$MSP_HOME/scripts:$ISP_HOME/scripts:$DIFF_HOME/scripts:$LAT_HOME/scripts:$IPTA_HOME/scripts:\
$GEO_HOME/scripts:$DISP_HOME/scripts
export OS=linux64
export PYTHONPATH=.:$GAMMA_HOME:$PYTHONPATH
export HDF5_DISABLE_VERSION_CHECK=1
export GNUTERM=wx
export GAMMA_RASTER="TIFF"
export GNUTERM=qt
```
保存并关闭.bashrc文件，在终端中输入以下命令激活
```C
source ~/.bashrc
```
4. 安装FFTW3库<br>
Gamma软件运行需要此FFT例程库，并且必须安装在系统上。这些库有两种形式，一种是浮点数（4字节，32位），另一种是双浮点数（64位）。Gamma软件使用适用于32位浮点数（单）的版本。
```C
sudo apt install libfftw3-3 libfftw3-dev libfftw3-single3
```

5. 安装 Gnuplot and GIMP
```C
sudo apt install gnuplot gnuplot-data gimp gnome-icon-theme
```
可用以下命令测试安装是否成功：
```C
gnuplot
plot sin(x)
```

6. 安装GDAL库
```C
sudo apt install gdal-bin libgdal-dev
```

7. 安装HDF5库（可选）
```C
sudo apt install libhdf5-dev libhdf5-103
```

8. 安装LAPACK and BLAS库（可选）
```C
sudo apt install libblas-dev libblas3 liblapack-dev liblapack3 liblapack-doc
```

9. 测试是否安装成功
```C
disras
```

10. 安装tcsh, perl
```C
sudo apt install tcsh perl
```

11. 激活已安装了python 3.10.12 的conda环境，在环境中安装numpy，matplotlib，scipy，shapely和packaging
```C
pip install numpy matplotlib scipy shapely packaging
```
