#!/usr/bin/env sh
###
 # @Author: xinxu
 # @Date: 2022-07-16 11:04:58
 # @LastEditors: xinxu
 # @LastEditTime: 2022-07-16 11:06:39
 # @FilePath: /azzlzzxz.github.io/deploy.sh
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
dpnpm run ocs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'message'

# 如果发布到 https://<azzlzzxz>.github.io
git push -f git@github.com:<azzlzzxz>/<azzlzzxz>.github.io.git master

cd ../ && rm -rf dist
