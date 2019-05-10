<template>
  <div id="app">
    <ol>
        <li>以 _ 或 $ 开头的属性 不会 被 Vue 实例代理，因为它们可能和 Vue 内置的属性、API 方法冲突。你可以使用例如 vm.$data._property 的方式访问这些属性</li>
        <li>在选项中包含自定义属性且不需要响应的数据可以考虑直接定义xxx:yyy，通过this.$options.xxx获取</li>
        <li>
          在单文件组件里，scoped 的样式不会应用在 v-html 内部，因为那部分 HTML 没有被 Vue 的模板编译器处理。
          如果你希望针对 v-html 的内容设置带作用域的 CSS，你可以替换为 CSS Modules 或用一个额外的全局 style 元素手动设置类似 BEM 的作用域策略。
        </li>
        <li>模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。你不应该在模板表达式中试图访问用户定义的全局变量。</li>
        <li>数据处理考虑定义filter，而非函数引用</li>
      </ol>
  </div>
</template>

<script>
export default {
  name: 'NoteBook',
  custom:'自定义属性更好一些',
   
}
</script>
 
