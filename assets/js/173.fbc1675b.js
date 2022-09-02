(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{675:function(e,t,s){"use strict";s.r(t);var a=s(21),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"初始化项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目"}},[e._v("#")]),e._v(" 初始化项目")]),e._v(" "),s("h2",{attrs:{id:"创建代码仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建代码仓库"}},[e._v("#")]),e._v(" 创建代码仓库")]),e._v(" "),s("p",[e._v("接下来，我们开始初始化项目，首先我们先去 GitHub 上创建一个 repo，填好 repo 名称，以及写一下 README，对项目先做个简单的描述。")]),e._v(" "),s("p",[e._v("通常我们初始化一个项目，需要配置一大堆东西，比如 "),s("code",[e._v("package.json")]),e._v("、"),s("code",[e._v(".editorconfig")]),e._v("、"),s("code",[e._v(".gitignore")]),e._v(" 等；还包括一些构建工具如 "),s("code",[e._v("rollup")]),e._v("、"),s("code",[e._v("webpack")]),e._v(" 以及它们的配置。")]),e._v(" "),s("p",[e._v("当我们使用 TypeScript 去写一个项目的时候，还需要配置 TypeScript 的编译配置文件 "),s("code",[e._v("tsconfig.json")]),e._v(" 以及\n"),s("code",[e._v("tslint.json")]),e._v(" 文件。")]),e._v(" "),s("p",[e._v("这些茫茫多的配置往往会让一个想从零开始写项目的同学望而却步，如果有一个脚手架工具帮我们生成好这些初始化文件该多好。好在确实有这样的工具，接下来我们的主角 "),s("code",[e._v("TypeScript library starter")]),e._v(" 隆重登场。")]),e._v(" "),s("h2",{attrs:{id:"typescript-library-starter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript-library-starter"}},[e._v("#")]),e._v(" TypeScript library starter")]),e._v(" "),s("p",[e._v("它是一个开源的 TypeScript 开发基础库的脚手架工具，可以帮助我们快速初始化一个 TypeScript 项目，我们可以去它的"),s("a",{attrs:{href:"https://github.com/alexjoverm/typescript-library-starter",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网地址"),s("OutboundLink")],1),e._v("学习和使用它。")]),e._v(" "),s("h3",{attrs:{id:"使用方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[e._v("#")]),e._v(" 使用方式")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/alexjoverm/typescript-library-starter.git ts-axios\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ts-axios\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("先通过 "),s("code",[e._v("git clone")]),e._v(" 把项目代码拉下来到我们的 "),s("code",[e._v("ts-axios")]),e._v(" 目录，然后运行 "),s("code",[e._v("npm install")]),e._v(" 安装依赖，并且给项目命名，我们仍然使用 "),s("code",[e._v("ts-axios")]),e._v("。")]),e._v(" "),s("p",[e._v("安装好依赖后，我们先来预览一下这个项目的目录结构。")]),e._v(" "),s("h3",{attrs:{id:"目录文件介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录文件介绍"}},[e._v("#")]),e._v(" 目录文件介绍")]),e._v(" "),s("p",[s("code",[e._v("TypeScript library starter")]),e._v(" 生成的目录结构如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("├── CONTRIBUTING.md\n├── LICENSE\n├── README.md\n├── code-of-conduct.md\n├── node_modules\n├── package-lock.json\n├── package.json\n├── rollup.config.ts // rollup 配置文件\n├── src // 源码目录\n├── test // 测试目录\n├── tools // 发布到 GitHup pages 以及 发布到 npm 的一些配置脚本工具\n├── tsconfig.json // TypeScript 编译配置文件\n└── tslint.json // TypeScript lint 文件\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])]),s("h3",{attrs:{id:"优秀工具集成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优秀工具集成"}},[e._v("#")]),e._v(" 优秀工具集成")]),e._v(" "),s("p",[e._v("使用 "),s("code",[e._v("TypeScript library starter")]),e._v(" 创建的项目集成了很多优秀的开源工具：")]),e._v(" "),s("ul",[s("li",[e._v("使用 "),s("a",{attrs:{href:"https://rollupjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RollupJS"),s("OutboundLink")],1),e._v(" 帮助我们打包。")]),e._v(" "),s("li",[e._v("使用 "),s("a",{attrs:{href:"https://github.com/prettier/prettier",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prettier"),s("OutboundLink")],1),e._v(" 和 "),s("a",{attrs:{href:"https://palantir.github.io/tslint/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TSLint"),s("OutboundLink")],1),e._v(" 帮助我们格式化代码以及保证代码风格一致性。")]),e._v(" "),s("li",[e._v("使用 "),s("a",{attrs:{href:"https://typedoc.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TypeDoc"),s("OutboundLink")],1),e._v(" 帮助我们自动生成文档并部署到 GitHub pages。")]),e._v(" "),s("li",[e._v("使用 "),s("a",{attrs:{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jest"),s("OutboundLink")],1),e._v("帮助我们做单元测试。")]),e._v(" "),s("li",[e._v("使用 "),s("a",{attrs:{href:"https://github.com/commitizen/cz-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("Commitizen"),s("OutboundLink")],1),e._v("帮助我们生成规范化的提交注释。")]),e._v(" "),s("li",[e._v("使用 "),s("a",{attrs:{href:"https://github.com/semantic-release/semantic-release",target:"_blank",rel:"noopener noreferrer"}},[e._v("Semantic release"),s("OutboundLink")],1),e._v("帮助我们管理版本和发布。")]),e._v(" "),s("li",[e._v("使用 "),s("a",{attrs:{href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"}},[e._v("husky"),s("OutboundLink")],1),e._v("帮助我们更简单地使用 git hooks。")]),e._v(" "),s("li",[e._v("使用 "),s("a",{attrs:{href:"https://github.com/conventional-changelog/conventional-changelog",target:"_blank",rel:"noopener noreferrer"}},[e._v("Conventional changelog"),s("OutboundLink")],1),e._v("帮助我们通过代码提交信息自动生成 change log。")])]),e._v(" "),s("p",[e._v("这里我们列举了很多工具，感兴趣的同学们可以点开他们的链接对这些工具做进一步学习。")]),e._v(" "),s("h3",{attrs:{id:"npm-scripts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-scripts"}},[e._v("#")]),e._v(" Npm Scripts")]),e._v(" "),s("p",[s("code",[e._v("TypeScript library starter")]),e._v(" 同样在 "),s("code",[e._v("package.json")]),e._v(" 中帮我们配置了一些 "),s("code",[e._v("npm scripts")]),e._v("，接下来我们先列举一下我们开发中常用的 "),s("code",[e._v("npm scripts")]),e._v("，剩余的我们在之后学习中遇到的时候再来介绍。")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("npm run lint")]),e._v(": 使用 TSLint 工具检查 "),s("code",[e._v("src")]),e._v(" 和 "),s("code",[e._v("test")]),e._v(" 目录下 TypeScript 代码的可读性、可维护性和功能性错误。")]),e._v(" "),s("li",[s("code",[e._v("npm start")]),e._v(": 观察者模式运行 "),s("code",[e._v("rollup")]),e._v(" 工具打包代码。")]),e._v(" "),s("li",[s("code",[e._v("npm test")]),e._v(": 运行 "),s("code",[e._v("jest")]),e._v(" 工具跑单元测试。")]),e._v(" "),s("li",[s("code",[e._v("npm run commit")]),e._v(": 运行 "),s("code",[e._v("commitizen")]),e._v(" 工具提交格式化的 "),s("code",[e._v("git commit")]),e._v(" 注释。")]),e._v(" "),s("li",[s("code",[e._v("npm run build")]),e._v(": 运行 "),s("code",[e._v("rollup")]),e._v(" 编译打包 TypeScript 代码，并运行 "),s("code",[e._v("typedoc")]),e._v(" 工具生成文档。")])]),e._v(" "),s("h2",{attrs:{id:"关联远程分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关联远程分支"}},[e._v("#")]),e._v(" 关联远程分支")]),e._v(" "),s("p",[e._v("代码已经初始化好，接下来我们要把当前代码仓库关联我们的远程仓库，首先在命令行中运行命令查看远程分支：")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote -v\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("这里我们不会得到任何输出，因为我们还没有关联远程分支，我们先去 GitHub 上找到我们仓库的地址，在命令行运行：")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" origin 仓库地址\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("关联后，远程库的名字就是 "),s("code",[e._v("origin")]),e._v("，这是 "),s("code",[e._v("Git")]),e._v(" 默认的叫法，也可以改成别的，但是 "),s("code",[e._v("origin")]),e._v(" 这个名字一看就知道是远程库。")]),e._v(" "),s("p",[e._v("接着你就可以继续运行 "),s("code",[e._v("git remote -v")]),e._v(" 查看关联结果了。")]),e._v(" "),s("h3",{attrs:{id:"拉取代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取代码"}},[e._v("#")]),e._v(" 拉取代码")]),e._v(" "),s("p",[e._v("运行如下命令从远程仓库拉取 master 分支代码并合并：")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull origin master\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("这个时候会报错：")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("error: The following untracked working tree files would be overwritten by merge:\n\tREADME.md\nPlease move or remove them before you merge.\nAborting\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("因为我们在使用 "),s("code",[e._v("typescript library starter")]),e._v(" 初始化代码的时候也创建了 "),s("code",[e._v("README.md")]),e._v("，和远程仓库的 "),s("code",[e._v("README.md")]),e._v(" 冲突了。我们把 "),s("code",[e._v("README.md")]),e._v(" 文件删除，再次运行：")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull origin master\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("这次代码就拉取成功了，并且在本地也创建了一个 "),s("code",[e._v("master")]),e._v(" 分支。")]),e._v(" "),s("h3",{attrs:{id:"提交代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交代码"}},[e._v("#")]),e._v(" 提交代码")]),e._v(" "),s("p",[e._v("最后我们来提交代码，首先运行：")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("把提交的代码从工作区添加到暂存区，然后运行 "),s("code",[e._v("npm run commit")]),e._v(" 这个 "),s("code",[e._v("npm")]),e._v(" 脚本来提交代码，运行后它会依次询问你几个问题，比如你这次修改的范围包括哪些、提交的描述、是否有 break change、影响了哪些 issue 等等。")]),e._v(" "),s("p",[e._v("填写完毕，工具会帮我们运行 "),s("code",[e._v("git commit")]),e._v(" 并且自动把我们提交的信息合成一条提交注释。接着运行命令把代码推送到远程 git 仓库中：")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push origin master\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("接着我们去 GitHub 仓库中就可以看到刚才这条提交记录了。")]),e._v(" "),s("p",[e._v("至此，我们项目已经初始化完毕，接下来我们就开始编写源码实现 axios 了。")])])}),[],!1,null,null,null);t.default=r.exports}}]);