<!--
 * @LastEditors: 赵兴
 * @LastEditTime: 2021-01-25 15:11:36
-->
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script lang="ts">
// 常用的Composition API:defineComponent,ref,reactive,toRef,toRefs
// defineComponent 函数目的是定义一个组件 内部可以传入一个配置对象
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'navbar',
});
</script>

<style scoped>
</style>