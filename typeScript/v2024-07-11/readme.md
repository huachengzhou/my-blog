# 第一次学习


+ 第一次执行

```cmd
D:\nodejsProject\my-blog\typeScript\v2024-07-11>npx tsc hello_01.ts

D:\nodejsProject\my-blog\typeScript\v2024-07-11>node hello_01.js
hello

```


+ 官网执行

```cmd
// 安装TypeScript全局命令
npm install -g typescript

// 创建新项目文件夹
mkdir my-new-project
cd my-new-project

// 初始化npm并创建package.json
npm init -y

// 安装TypeScript作为开发依赖
npm install --save-dev typescript

// 生成tsconfig.json配置文件
npx tsc --init

// 创建一个简单的TypeScript文件
echo 'console.log("Hello, TypeScript!");' > hello.ts

// 编译并运行
npx tsc hello.ts
node hello.js
```