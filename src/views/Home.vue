<!--
 * @LastEditors: 赵兴
 * @LastEditTime: 2021-01-26 16:19:57
-->
<template>
  <h1>this is Home page</h1>
</template>

<script lang="ts">
// 常用的Composition API:defineComponent,ref,reactive,toRef,toRefs
// defineComponent 函数目的是定义一个组件 内部可以传入一个配置对象
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>

<style scoped>
</style>