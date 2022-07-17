#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git add -A
git commit -m 'message'

# 如果发布到 https://<azzlzzxz>.github.io
git push -f git@github.com:<azzlzzxz>/<azzlzzxz>.github.io.git master

cd -
