// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        'indent': 'off', //强制一致的缩进风格
        'no-nested-ternary': 2, //不允许使用嵌套的三目运算符
        'no-unneeded-ternary': 'off', //当存在更简单的选择时不允许三元运算符
        'no-dupe-keys': 2, //对象中不允许出现重复的键
        'no-cond-assign': 2, //条件语句的条件中不允许出现赋值运算符
        'no-const-assign': 2, //禁止修改const声明的变量
        'no-redeclare': 2, //禁止变量重新声明
        'no-self-assign': 2, //禁止自我分配
        'no-useless-escape': 2, // 禁止不必要的转义使用（无用的转义）
        'no-undef': 'off', //禁止未声明的变量
        'no-extend-native': 'off', //禁止扩展本地对象
        'generator-star-spacing': 'off', //生成器函数*的前后空格
        'padded-blocks': 'off', //要求或不允许块内的填充
        'eqeqeq': 'off', //要求===和！==
        'no-tabs': 'off',
        'comma-dangle': 'off',
        'space-before-function-paren': 'off',
        'spaced-comment': 'off', //注释号‘//’后面须有空格
        'semi': [0, 'always'], // 在语句结尾需要分号
        'quotes': [1, 'single'], // 尽可能地使用单引号
        'no-trailing-spaces': [1, { 'ignoreComments': true }], // 不允许在行尾添加尾随空格
        'curly': 2, // 当一个块只包含一条语句时,不允许忽略花括号
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off' //禁止使用debugger
    }
}