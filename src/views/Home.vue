<!--
 * @LastEditors: 赵兴
 * @LastEditTime: 2021-01-27 17:18:12
-->
<template>
  <Welcome v-if="showWelcome" />
  <div v-else>
    <h1 class="animate__animated animate__bounce  animate__delay-2s">An animated element</h1>
    <h1 class="animate__animated animate__bounce">An animated element</h1>
    <h1 class="animate__animated animate__bounce">An animated element</h1>
    <h1 class="animate__animated animate__bounce">An animated element</h1>
    <h1 class="animate__animated animate__bounce">An animated element</h1>
    <h1 class="animate__animated animate__bounce">An animated element</h1>
    <h1 class="animate__animated animate__bounce">An animated element</h1>
    <h1 class="animate__animated animate__bounce">An animated element</h1>
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
    // 判断是否首次加载
    const showWelcome = ref(false);
    onMounted(() => {
      // 根据是否存在会话缓存判断
      let isFalst = sessionStorage.getItem('isFalst');
      typeof isFalst === 'object'
        ? ((showWelcome.value = true), //更改状态
          sessionStorage.setItem('isFalst', 'not'), //存入缓存
          setTimeout(() => {
            //设置定时器结束欢迎动画
            showWelcome.value = false;
          }, 7500))
        : (showWelcome.value = false);
    });
    return {
      showWelcome,
    };
  },
});
</script>

<style scoped>
</style>