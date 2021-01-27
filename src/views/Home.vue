<!--
 * @LastEditors: 赵兴
 * @LastEditTime: 2021-01-27 13:54:34
-->
<template>
  <h1>this is Home page</h1>
  <h1>this is Home page</h1>
  <h1>this is Home page</h1>
  <h1>this is Home page</h1>
  <h1>this is Home page</h1>
  <h1>this is Home page</h1>
  <h1>this is Home page</h1>
  <h1>this is Home page</h1>
  <h1>this is Home page</h1>
  <h1>this is Home page</h1>
  <h1>this is Home page</h1>
  <h1>this is Home page</h1>
  <h1>this is Home page</h1>
  <Welcome />
</template>

<script lang="ts">
import Welcome from '../components/welcome/welcome.vue';
// 常用的Composition API:defineComponent,ref,reactive,toRef,toRefs
// defineComponent 函数目的是定义一个组件 内部可以传入一个配置对象
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: { Welcome },
});
</script>

<style scoped>
</style>