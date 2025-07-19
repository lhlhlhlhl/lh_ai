# JSX 考点
- 何为JSX?
    JS in XML(HTML是XML的一种形式)
    在JS中可以写HTML
    react 推崇的JavaScript 语法扩展（语法糖），运行在JavaScript
    代码中嵌入HTML结构（function return JSX 组件），
    常用于React组件的定义，使得UI结构更加清晰和易于维护
    React 的一大优点特性
- JSX 可以直接运行吗？
    不能直接运行
    必须通过babel转义
    编译成js
- .styl -> stylus 编译 -> .css
<ul>
    <li key={todo.id}>{title}</li>
    <li key={todo.id}>{title}</li>
    ...
</ul>
- JSX -> React.createElement(tag,props,children)(react框架内置的) ->
   doucument.createElement('ul')
   doucument.createElement('li')

   JSX是怎么样变成React.createElement的？理解组件的执行过程