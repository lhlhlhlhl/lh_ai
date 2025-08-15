# 秋招面试

## JS
- Object.assign() 方法
- 深浅拷贝
- = JS 内存相关 对于简单数据类型是拷贝，对于复杂数据类型是引用式赋值
    - 栈内存
    - 堆内存
- 拷贝（简单数据类型 复印了一份）和引用式赋值（不是真正意义上地把对象拷贝了一份，只是拷贝了对象的引用）

- 响应式底层
    - Object.defineProperty()
    - Proxy

## Git（开源的分布式的版本控制软件，管理文件吧不同版本和分支）
开发中如何使用git

- 安装开发环境
    - node
    - git 环境 开源分布式的版本管理软件
    - 公司会发放一个git 账号，私有项目

- 入职 git clone 公司代码
- git config --global user.name ""
    git config --global user.email "" 在开发环境中设置git的全局配置
- 入职 git clone 公司代码
    - 主分支 main/master
        所有人都在用的，线上分支，不能轻易更改
    - 新开一个分支(大家分头干活，没有任何问题时，再合并)(主分支当前的代码在新分支上都有，但是不影响主分支)
        在自己的工作任务分支上干活
        git checkout -b xxx 
- 常用命令
    - git pull origin main 每天上班前的动作
    - git status 当前git 状态
    - git log --oneline 查看提交记录
    - git add . 提交到暂存区
    - git commit -m '' 提交到仓库
    - git push origin main 提交到远程仓库
    - git checkout xxx 切换分支




