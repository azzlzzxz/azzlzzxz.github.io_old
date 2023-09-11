# PNPM

[pnpm 官网](https://pnpm.io/zh/)

## pnpm 介绍

pnpm - performant npm，在 2017 年正式发布，定义为快速的，节省磁盘空间的包管理工具，开创了一套新的依赖管理机制，成为了包管理的后起之秀。

## 节省磁盘空间

使用 npm 时，依赖每次被不同的项目使用，都会重复安装一次。 而在使用 pnpm 时，依赖会被存储在内容可寻址的存储中，所以：

1. 如果你用到了某依赖项的不同版本，只会将不同版本间有差异的文件添加到仓库。 例如，如果某个包有 100 个文件，而它的新版本只改变了其中 1 个文件。那么 pnpm update 时只会向存储中心额外添加 1 个新文件，而不会因为仅仅一个文件的改变复制整新版本包的内容。
2. 所有文件都会存储在硬盘上的某一位置。 当软件包被被安装时，包里的文件会硬链接到这一位置，而不会占用额外的磁盘空间。 这允许你跨项目地共享同一版本的依赖。

因此，您在磁盘上节省了大量空间，这与项目和依赖项的数量成正比，并且安装速度要快得多！

![pnpm_one](../../.vuepress/public/images/pnpm_one.jpg)