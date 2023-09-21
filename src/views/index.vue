/*
 * @Author: aFei
 * @Date: 2023-09-20 13:38:58
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-09-21 10:47:49
*/
<template>
  <div class="demo">
    <vueDiyRightmenuPlus @menuClick="menuClick">
      <p style="background: purple;color: #fff;">触发区域1</p>
    </vueDiyRightmenuPlus>
    <p>间隔</p>
    <vueDiyRightmenuPlus :list="btnList" @menuClick="menuClick">
      <p style="background: purple;color: #fff;">触发区域2</p>
    </vueDiyRightmenuPlus>
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