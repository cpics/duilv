module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        // 这里填入你的项目需要的个性化配置，比如：
        //
        // @fixable 一个缩进必须用四个空格替代
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true,
            },
        ],
        'no-tabs': 'off',
        // @fixable html 的结束标签必须符合规定
        // @off 有的标签不必严格符合规定，如 <br> 或 <br/> 都应该是合法的
        'vue/no-parsing-error': [
            2,
            {
                'x-invalid-end-tag': false,
                'invalid-first-character-of-tag-name': false,
            },
        ],
        'vue/html-end-tags': 'off',
        // 计算属性禁止包含异步方法
        'vue/no-async-in-computed-properties': 'error',
        // 禁止出现难以理解的 v-if 和 v-for
        'vue/no-confusing-v-for-v-if': 'off',
        // 禁止出现重复的属性
        'vue/no-duplicate-attributes': 'error',
        // 禁止在计算属性中对属性修改
        // @off 太严格了
        'vue/no-side-effects-in-computed-properties': 'off',
        // 禁止在 <textarea> 中出现 {{message}}
        'vue/no-textarea-mustache': 'error',
        // 组件的属性必须为一定的顺序
        'vue/order-in-components': 'off',
        // <component> 必须有 v-bind:is
        'vue/require-component-is': 'error',
        // prop 必须有类型限制
        // @off 没必要限制
        'vue/require-prop-types': 'off',
        // v-for 指令的元素必须有 v-bind:key
        'vue/require-v-for-key': 'warn',
        //
        //
        // 风格问题
        //
        // @fixable 限制自定义组件的属性风格
        // @off 没必要限制
        'vue/attribute-hyphenation': 'off',
        // html 属性值必须用双引号括起来
        'vue/html-quotes': 'error',
        // @fixable 没有内容时，组件必须自闭和
        // @off 没必要限制
        'vue/html-self-closing': 'off',
        // 限制每行允许的最多属性数量
        // @off 没必要限制
        'vue/max-attributes-per-line': 'off',
        // @fixable 限制组件的 name 属性的值的风格
        // @off 没必要限制
        'vue/name-property-casing': 'off',
        // @fixable 禁止出现连续空格
        'vue/no-multi-spaces': 'error',
        // @fixable 限制 v-bind 的风格
        // @off 没必要限制
        'vue/v-bind-style': 'off',
        // @fixable 限制 v-on 的风格
        // @off 没必要限制
        'vue/v-on-style': 'off',
        //
        //
        //
        //
        //
        //
        //
        //
        // 最佳实践
        // 这些规则通过一些最佳实践帮助你避免问题
        //
        // setter 必须有对应的 getter，getter 可以没有对应的 setter
        'accessor-pairs': [
            'error',
            {
                setWithoutGet: true,
                getWithoutSet: false,
            },
        ],
        // 数组的方法除了 forEach 之外，回调函数必须有返回值
        'array-callback-return': 'error',
        // 将 var 定义的变量视为块作用域，禁止在块外使用
        'block-scoped-var': 'error',
        // 在类的非静态方法中，必须存在对 this 的引用
        // @off 太严格了
        'class-methods-use-this': 'off',
        // 禁止函数的循环复杂度超过 20，https://en.wikipedia.org/wiki/Cyclomatic_complexity
        complexity: [
            'off',
            {
                max: 20,
            },
        ],
        // 禁止函数在不同分支返回不同类型的值
        // @off 太严格了
        'consistent-return': 'off',
        // @fixable if 后面必须要有 {，除非是单行 if
        curly: ['error', 'multi-line', 'consistent'],
        // switch 语句必须有 default
        // @off 太严格了
        'default-case': 'off',
        // @fixable 链式调用的时候，点号必须放在第二行开头处，禁止放在第一行结尾处
        'dot-location': ['error', 'property'],
        // @fixable 禁止出现 foo['bar']，必须写成 foo.bar
        // @off 当需要写一系列属性的时候，可以更统一
        'dot-notation': 'off',
        // @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
        eqeqeq: [
            'off',
            'always',
            {
                null: 'ignore',
            },
        ],
        // for in 内部必须有 hasOwnProperty
        'guard-for-in': 'warn',
        // 禁止使用 alert
        // @off alert 很常用
        'no-alert': 'off',
        // 禁止使用 caller 或 callee
        'no-caller': 'error',
        // switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
        'no-case-declarations': 'error',
        // 禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/
        // @off 有代码高亮的话，在阅读这种代码时，也完全不会产生歧义或理解上的困难
        'no-div-regex': 'off',
        // @fixable 禁止在 else 内使用 return，必须改为提前结束
        // @off else 中使用 return 可以使代码结构更清晰
        'no-else-return': 'off',
        // 不允许有空函数，除非是将一个空函数设置为某个项的默认值
        'no-empty-function': [
            'warn',
            {
                allow: ['functions', 'arrowFunctions'],
            },
        ],
        // 禁止解构中出现空 {} 或 []
        'no-empty-pattern': 'error',
        // 禁止使用 foo == null 或 foo != null，必须使用 foo === null 或 foo !== null
        // @off foo == null 用于判断 foo 不是 undefined 并且不是 null，比较常用，故允许此写法
        'no-eq-null': 'off',
        // 禁止使用 eval
        'no-eval': 'off',
        // 禁止修改原生对象
        'no-extend-native': 'error',
        // @fixable 禁止出现没必要的 bind
        'no-extra-bind': 'error',
        // @fixable 禁止出现没必要的 label
        'no-extra-label': 'error',
        // switch 的 case 内必须有 break, return 或 throw
        'no-fallthrough': 'error',
        // @fixable 表示小数时，禁止省略 0，比如 .5
        'no-floating-decimal': 'error',
        // 禁止对全局变量赋值
        'no-global-assign': 'error',
        // @fixable 禁止使用 !! ~ 等难以理解的运算符
        // 仅允许使用 !!
        'no-implicit-coercion': [
            'error',
            {
                allow: ['!!'],
            },
        ],
        // 禁止在全局作用域下定义变量或申明函数
        'no-implicit-globals': 'error',
        // 禁止在 setTimeout 或 setInterval 中传入字符串，如 setTimeout('alert("Hi!")', 100);
        'no-implied-eval': 'error',
        // 禁止在类之外的地方使用 this
        // @off this 的使用很灵活，事件回调中可以表示当前元素，函数也可以先用 this，等以后被调用的时候再 call
        'no-invalid-this': 'off',
        // 禁止使用 __iterator__
        'no-iterator': 'error',
        // 禁止使用 label
        'no-labels': 'error',
        // 禁止使用没必要的 {} 作为代码块
        'no-lone-blocks': 'error',
        // 禁止在循环内的函数中出现循环体条件语句中定义的变量，比如：
        // for (var i = 0; i < 10; i++) {
        //     (function () { return i })();
        // }
        'no-loop-func': 'error',
        // 禁止使用 magic numbers
        // @off 太严格了
        'no-magic-numbers': 'off',
        // @fixable 禁止出现连续的多个空格，除非是注释前，或对齐对象的属性、变量定义、import 等
        'no-multi-spaces': [
            'error',
            {
                ignoreEOLComments: true,
                exceptions: {
                    Property: true,
                    BinaryExpression: false,
                    VariableDeclarator: true,
                    ImportDeclaration: true,
                },
            },
        ],
        // 禁止使用 \ 来换行字符串
        'no-multi-str': 'error',
        // 禁止直接 new 一个类而不赋值
        'no-new': 'off',
        // 禁止使用 new Function，比如 let x = new Function("a", "b", "return a + b");
        'no-new-func': 'error',
        // 禁止使用 new 来生成 String, Number 或 Boolean
        'no-new-wrappers': 'error',
        // 禁止使用 0 开头的数字表示八进制数
        'no-octal': 'error',
        // 禁止使用八进制的转义符
        'no-octal-escape': 'error',
        // 禁止对函数的参数重新赋值
        'no-param-reassign': 'warn',
        // 禁止使用 __proto__
        'no-proto': 'error',
        // 禁止重复定义变量
        'no-redeclare': 'error',
        // 禁止使用指定的对象属性
        // @off 它用于限制某个具体的 api 不能使用
        'no-restricted-properties': 'off',
        // 禁止在 return 语句里赋值
        'no-return-assign': ['error', 'always'],
        // 禁止在 return 语句里使用 await
        'no-return-await': 'off',
        // 禁止出现 location.href = 'javascript:void(0)';
        'no-script-url': 'error',
        // 禁止将自己赋值给自己
        'no-self-assign': 'error',
        // 禁止将自己与自己比较
        'no-self-compare': 'error',
        // 禁止使用逗号操作符
        'no-sequences': 'error',
        // 禁止 throw 字面量，必须 throw 一个 Error 对象
        'no-throw-literal': 'error',
        // 循环内必须对循环条件的变量有修改
        'no-unmodified-loop-condition': 'error',
        // 禁止无用的表达式
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true,
            },
        ],
        // @fixable 禁止出现没用的 label
        'no-unused-labels': 'error',
        // 禁止出现没必要的 call 或 apply
        'no-useless-call': 'error',
        // 禁止出现没必要的字符串连接
        'no-useless-concat': 'error',
        // 禁止出现没必要的转义
        // @off 转义可以使代码更易懂
        'no-useless-escape': 'off',
        // @fixable 禁止没必要的 return
        // @off 没必要限制 return
        'no-useless-return': 'off',
        // 禁止使用 void
        'no-void': 'error',
        // 禁止注释中出现 TODO 和 FIXME
        // @off TODO 很常用
        'no-warning-comments': 'off',
        // 禁止使用 with
        'no-with': 'error',
        // Promise 的 reject 中必须传入 Error 对象，而不是字面量
        'prefer-promise-reject-errors': 'error',
        // parseInt 必须传入第二个参数
        radix: 'off',
        // async 函数中必须存在 await 语句
        // @off async function 中没有 await 的写法很常见，比如 koa 的示例中就有这种用法
        'require-await': 'off',
        // var 必须在作用域的最前面
        // @off var 不在最前面也是很常见的用法
        'vars-on-top': 'off',
        // @fixable 立即执行的函数必须符合如下格式 (function () { alert('Hello') })()
        'wrap-iife': [
            'error',
            'inside',
            {
                functionPrototypeMethods: true,
            },
        ],
        // @fixable 必须使用 if (foo === 5) 而不是 if (5 === foo)
        yoda: [
            'error',
            'never',
            {
                onlyEquality: true,
            },
        ],
        'no-undefined': 'off',
        'one-var': 'off',
        'no-unused-vars': 'warn',
        'no-useless-constructor': 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
