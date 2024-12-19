---
title: 数据下载
author: Luo Yan
date: 2019-04-28
category: post
layout: post
---

### 准备KML数据

[KML文件是一种用于存储地理空间数据的文件格式，它并不是数据库。KML代表Keyhole Markup Language，由Google的Keyhole公司开发，用于在地理信息系统（GIS）和地图应用程序中存储和传输地理数据。][1]

生成KML的方法通常有两种：

1. 下载Google Earth，绘制几何图形（本教程特指多边形Polygon），导出为`.kmz`或`.kml`格式
2. 在任意地图产品中绘制多边形并导出多边形的坐标，利用python脚本生成KML文件，可参考[此链接][2]。

> ##### 注意
>
> 使用Google Earth需要开启VPN。
> 
{: .block-warning }


### 下载S1 SLC数据

ASF运营着 NASA 的 SAR 数据档案，为支持 NASA ESDIS 项目的研究人员提供服务。
本教程采用的Sentinel-1 SLC数据下载地址：
[https://search.asf.alaska.edu/#/](https://search.asf.alaska.edu/#/)

1. 登录/注册ASF账号
![20241219191634.png](/assets/ASF/20241219191634.png)
2. 上传kml，点击Search按钮搜索数据，初步确定数据的Path和Frame
![20241219191949.png](/assets/ASF/20241219191949.png)
![20241219191949.png](/assets/ASF/20241219191949.png)

3. 点击Filters，选择File Type为L1 Single Look Complex(SLC)，输入起止日期，升降轨，Path Start和Frame Start，再次搜索数据
4. 点击Queue按钮，将所有符合搜索条件的数据加入购物车中
5. 点击Downloads，在弹出窗口的右下角点击Data Download选择Download Python Script(.py)下载python脚本
6. 在终端中输入python xxxx.py以运行脚本，输入ASF账号和密码，开始下载，下载完成后无需解压


### 下载DEM文件

### 下载轨道校正文件


You can introduce this jekyll theme into your own site by either

- [Fork][5] this repository and add your markdown posts to the `_posts` folder, then
  push to your own Github repository.
- Use as a remote theme in your [`_config.yml`][6](just like what we do for this
  site itself),

```yaml
# Configurations
title:            Jekyll Gitbook
longtitle:        Jekyll Gitbook

remote_theme:     sighingnow/jekyll-gitbook
```

> ##### TIP
>
> No need to push generated HTML bundle.
{: .block-tip }

[1]: https://zh.wikipedia.org/wiki/KML
[2]: https://blog.csdn.net/weixin_43955546/article/details/123486605
[3]: https://pages.github.com/themes
[4]: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll
[5]: https://github.com/sighingnow/jekyll-gitbook/fork
[6]: https://github.com/sighingnow/jekyll-gitbook/blob/master/_config.yml
