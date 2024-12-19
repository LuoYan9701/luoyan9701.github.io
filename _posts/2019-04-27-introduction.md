---
title: Sentinel-1理论介绍
author: Luo Yan
date: 2019-04-27
category: InSARDoc
layout: post
---

[哨兵1号sentinel-1 由两颗极轨卫星A星和B星组成。两颗卫星搭载的传感器为合成孔径雷达（SAR），属于主动微波遥感卫星。传感器搭载C波段。][1]

### 哨兵1号的条带扫描模式

<img src="https://www.qgis.pt/wp-content/uploads/2017/02/7_modos_aquisicao_sentinel-1.jpg" alt="7_modos_aquisicao_sentinel-1.jpg">

[图片来源][2]

1. 带状图（Strip Map Mode, SM） `80 km 条带，5 x 5 m 空间分辨率` – 标准 SAR 带状图成像模式，其中地面带状图通过连续的脉冲序列照射，而天线波束指向固定的方位角和仰角。SM模式仅用于小岛屿，在紧急情况管理等特殊事件时使用；

2. 干涉宽条带（Interferometric Wide Swath Mode, IW）`250 km 条带，5×20 m 空间分辨率` – 使用渐进扫描 SAR 地形观测 （TOPSAR） 成像技术在三个条带中采集数据。在 IW 模式下，脉冲串在各个通道之间同步，以确保干涉仪对的对准。 <b>IW是Sentinel-1在陆地上的主要工作模式<b>；

3. 超宽条带（Extra Wide Swath Mode, EW） `400 km 条带，25 x 100 m 空间分辨率` – 使用 TOPSAR 成像技术在五个条带中采集数据。 EW 模式提供非常大的条带覆盖范围，但会牺牲空间分辨率。EW模式主要用于沿海监测，包括海运监测、溢油监测和海冰监测；

4. 波浪（Wave Mode, WV） `20 km x 20 km，5 x 20 m 空间分辨率` – 数据在称为“小插图”的小型带状地图场景中采集，这些场景沿轨道以 100 km 的固定间隔分布。通过交替获取晕影，以近距离入射角采集一个晕影，同时以远距离入射角采集下一个晕影。 WV 是 Sentinel-1 在海洋上的运行模式。

### 哨兵1号的数据产品

<img src="https://www.qgis.pt/wp-content/uploads/2020/04/8_niveis_processamento_sentinel_1.png" alt="8_niveis_processamento_sentinel_1.png">

[图片来源][2]

1. Raw Level-0 ：原始数据（用于特定用途）；

2. <b>SLC（Single Look Complex） Level-1 ：处理过的单视复数数据，包含振幅和相位的复数图像（发布仅限于特定相关区域）<b>；

3. GRD （Ground Range Detected） Level-1 ：经过多视处理、采用WGS84 椭球投影至地距的聚焦数据；

4. OCN （Ocean）Level-2 ：用于反演海洋地球物理参数的海洋数据。

### SAR的极化方式

+ 在SAR遥感中，极化是指微波信号传播时电磁波的振动方向。分为水平极化（HH）、垂直极化（VV）、水平-垂直极化（HV）和垂直-水平极化（VH），它们分别表示微波信号在水平和垂直方向上的振动。

+ 单极化系统具有单一发射通道和单一接收通道，其获得的极化信息为HH或VV，早期合成孔径雷达都是单极化模式的，如美国海洋卫星系列SEASAT、欧洲遥感卫星ERS-1、加拿大卫星Radarsat-1等。

+ 双极化系统具有单一发射通道和双接收通道，有三种不同的模式，获得的极化信息分别为HH/VV或HH/HV或VV/VH。

+ 全极化系统具有双发射通道和双接收通道，获得的极化信息为全极化信息HH/HV/VH/HH。

### Sentinel-1 SLC数据的命名规则

<img src="https://www.qgis.pt/wp-content/uploads/2020/04/9_nome_imagens_sentinel_1.jpg" alt="9_nome_imagens_sentinel_1.jpg">

[图片来源][2]

<!-- $MMM-BB-TTTR-LFPP-YYYYMMDDTHHMMSS-YYYYMMDDTHHMMSS-OOOOOO-DDDDDD-CCCC.SAFE$ -->
```markdown
> SLC文件格式如下：
> MMM-BB-TTTR-LFPP-YYYYMMDDTHHMMSS-YYYYMMDDTHHMMSS-OOOOOO-DDDDDD-CCCC.ZIP
> 如：S1A_IW_SLC__1SDV_20180122T114112_20180122T114138_020267_022997_3DAD.ZIP
> 
> MMM：表示数据来源于A卫星或B卫星，有S1A和S1B两个选择。
> BB：条带扫描模式，有IW、EW、WV 3种选择。
> TTT: 表示产品的类型，有SLC、GRD、OCN 3种产品选择。
{R: 为分辨率类别。F表示Full resolution,H表示High resolution，M表示Medium resolution。(仅用于GRD) }
> L：数据处理等级，为1级或2级。
> F: 产品类可以是Standard (S)或Annotation (A)。Annotation产品只在PDGS内部使用，不分发。
> PP：极化方式有 SH（single HH polarization）,SV（single VV polarization）,
>               DH（dual HH+HV polarization）,DV（dual VV+VH polarization）
> YYYYMMDDTHHMMSS: 数据采集开始/结束时间。
> OOOOOO：产品开始时的绝对轨道号，轨道号范围：000001-999999。
> DDDDDD: 任务数据获取标识符,范围:000001-FFFFFF.
> CCCC: 产品唯一标识符,是使用CRC-CCITT在清单文件上计算CRC-16生成的十六进制字符串
> 
```

### TOPS模式下的SAR数据结构
brust swath frame path
此节待完善

[1]: https://blog.csdn.net/mihou_qust/article/details/113827870
[2]: https://www.qgis.pt/processamento-de-dados-de-radar-sentinel-1-com-o-qgis/
[3]: https://sentiwiki.copernicus.eu/web/s1-products