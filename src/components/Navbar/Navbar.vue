<!--
 * @LastEditors: 赵兴
 * @LastEditTime: 2021-01-26 16:02:10
-->
<template>
  <nav class="navbar navbar-expand-lg navbar-mainbg">
    <a
      class="navbar-brand navbar-logo"
      href="https://github.com/mosaicmask"
    >mosiac</a>
    <button
      class="navbar-toggler navbar-btn"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="hamb-top"></span>
      <span class="hamb-middle"></span>
      <span class="hamb-bottom"></span>
    </button>
    <div
      class="collapse navbar-collapse"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav ml-auto">
        <div class="hori-selector">
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <li class="nav-item router-link-active">
          <router-link
            to="/"
            class="nav-link"
          > <i class="bi bi-house"></i>Home</router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/photography"
            class="nav-link"
          ><i class="bi bi-camera"></i>Photography</router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/myNotes"
            class="nav-link"
          ><i class="bi bi-pencil"></i>My notes</router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/myDemo"
            class="nav-link"
          ><i class="bi bi-battery-charging"></i>My demo</router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/aboutMe"
            class="nav-link"
          ><i class="bi bi-emoji-sunglasses"></i>About me</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import '../../assets/js/navbar.js';
// 常用的Composition API:defineComponent,ref,reactive,toRef,toRefs
// defineComponent 函数目的是定义一个组件 内部可以传入一个配置对象
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'navbar',
});
</script>

<style scoped src="./css/out/navbar.css">
</style>