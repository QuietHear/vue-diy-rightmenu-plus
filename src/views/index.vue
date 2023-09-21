/*
 * @Author: aFei
 * @Date: 2023-09-20 13:38:58
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-09-21 13:18:39
*/
<template>
  <div class="demo">
    <vue-diy-rightmenu-plus @menuClick="menuClick">
      <p style="background: purple;color: #fff;">触发区域1</p>
    </vue-diy-rightmenu-plus>
    <p>间隔</p>
    <vue-diy-rightmenu-plus :list="btnList" @menuClick="menuClick">
      <p style="background: purple;color: #fff;">触发区域2</p>
    </vue-diy-rightmenu-plus>
  </div>
</template>
<script setup>
import vueDiyRightmenuPlus from "~/lib/index.vue";
const btnList = ref([
  {
    label: '测试1',
    value: '测试1',
    icon: {
      type: 'el',
      icon: 'Apple'
    }
  },
  {
    label: '测试2',
    value: '测试2'
  }
]);
const menuClick = (val) => {
  console.log(val, 'val');
};
</script>