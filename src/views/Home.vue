<!--
 * @LastEditors: 赵兴
 * @LastEditTime: 2021-01-27 16:29:15
-->
<template>
  <Welcome v-if="showWelcome" />
  <div v-else>
    <h1> this is my home page </h1>
    <h1> this is my home page </h1>
    <h1> this is my home page </h1>
    <h1> this is my home page </h1>
    <h1> this is my home page </h1>
    <h1> this is my home page </h1>
    <h1> this is my home page </h1>
    <h1> this is my home page </h1>
    <h1> this is my home page </h1>
    <h1> this is my home page </h1>
    <h1> this is my home page </h1>
    <h1> this is my home page </h1>
    <h1> this is my home page </h1>
    <h1> this is my home page </h1>
    <h1> this is my home page </h1>
    <h1> this is my home page </h1>
    <h1> this is my home page </h1>
    <h1> this is my home page </h1>
    <h1> this is my home page </h1>
    <Footer />
  </div>
</template>

<script lang="ts">
import Welcome from '../components/welcome/welcome.vue';
import Footer from '../components/Footer/Footer.vue';

// 常用的Composition API:defineComponent,ref,reactive,toRef,toRefs
// defineComponent 函数目的是定义一个组件 内部可以传入一个配置对象
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'Home',
  components: { Welcome, Footer },
  setup() {
    // 首次加载
    const showWelcome = ref(false);
    onMounted(() => {
      let isFalst = sessionStorage.getItem('isFalst');
      console.log('typeof isFalst :>> ', typeof isFalst);
      typeof isFalst === 'object'
        ? (showWelcome.value = true)
        : (showWelcome.value = false);
      sessionStorage.setItem('isFalst', 'not');
      console.log(showWelcome.value);
      if (showWelcome.value) {
        setTimeout(() => {
          showWelcome.value = false;
          console.log(showWelcome.value);
        }, 7500);
      }
    });
    return {
      showWelcome,
    };
  },
});
</script>

<style scoped>
</style>