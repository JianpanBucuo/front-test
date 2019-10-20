npm install --save-dev jest

babel7 jest 24+

babel6 jest 23+

修改package.json 修改命令， 他会去找 .test.js 结尾的文件


单元测试  模块测试 
 
集成测试  多个模块测试


jest默认配置
npx jest --init



命令 
"test":"jest",
"coverage":"jest --coverage"


支持 import 语句
jest 和 babel进行结合

@babel/core@7.4.5
@babel/preset-env@7.4.5
.babelrc

{
    "presets": [
        ["@babel/preset-env",{
            "target":"current"
        }]
    ]
}
jest内部集成了一个 babel-jest插件
运行npm run jest 时，
babel-jest会检测当前环境是否安装了 babel
如果安装了 babel， babel-jest插件就会去取 babelrc里的配置
运行测试之前 会将es6代码转化成当前环境可以运行代码 之后在进行单元测试