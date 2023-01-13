/*
 * @Author: aFei
 * @Date: 2022-11-17 12:17:06
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-01-13 17:42:07
*/
<template>
  <div class="vue-diy-rightmenu-plus" @contextmenu.prevent="showMenu">
    <!-- 默认内容插槽 -->
    <slot></slot>
    <div class="menu-content" :style="popStyle" v-if="pop">
      <!-- 普通按钮形式 -->
      <template v-if="list.length > 0">
        <div class="menu-list">
          <div class="item" @click="menuClick(item[nameSet.value])" v-for="(item, index) in list" :key="index">
            <template v-if="item[nameSet.customIcon] || item[nameSet.icon]">
              <component :is="item[nameSet.customIcon]" v-if="item[nameSet.customIcon]" />
              <el-icon v-else-if="item[nameSet.icon].split('/')[0] === 'el'">
                <component :is="item[nameSet.icon].split('/')[1]" />
              </el-icon>
              <i :class="[
                'icon iconfont',
                'icon-' + item[nameSet.icon].split('/')[1],
              ]" v-else-if="item[nameSet.icon].split('/')[0] === 'iconfont'" />
              <i :class="item[nameSet.icon].split('/')[0]" v-else>{{
                item[nameSet.icon].split("/")[1]
              }}</i>
            </template>
            {{ item[nameSet.label] }}
          </div>
        </div>
      </template>
      <!-- 按钮组形式 -->
      <template v-else>
        <div class="menu-group-list" v-for="(item, index) in groupList" :key="index">
          <p class="item-title">{{ item[nameSet.name] }}</p>
          <div class="item" @click="menuClick(one[nameSet.value])" v-for="(one, oneIndex) in item[nameSet.data]"
            :key="oneIndex">
            <template v-if="one[nameSet.customIcon] || one[nameSet.icon]">
              <component :is="one[nameSet.customIcon]" v-if="one[nameSet.customIcon]" />
              <el-icon v-else-if="one[nameSet.icon].split('/')[0] === 'el'">
                <component :is="one[nameSet.icon].split('/')[1]" />
              </el-icon>
              <i :class="[
                'icon iconfont',
                'icon-' + one[nameSet.icon].split('/')[1],
              ]" v-else-if="one[nameSet.icon].split('/')[0] === 'iconfont'" />
              <i :class="one[nameSet.icon].split('/')[0]" v-else>{{
                one[nameSet.icon].split("/")[1]
              }}</i>
            </template>
            {{ one[nameSet.label] }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup>
import { onBeforeUnmount, watch, ref } from "vue";
const emit = defineEmits(["menuClick", "popShow", "popClose"]);
const props = defineProps({
  // 按钮组数据
  groupList: {
    type: Array,
    default: () => {
      return [];
    },
  },
  // 按钮数据
  list: {
    type: Array,
    default: () => {
      return [
        {
          label: "编辑",
          value: "编辑value",
          icon: "el/Apple",
        },
        {
          label: "删除",
          value: "删除value",
        },
      ];
    },
  },
  // 按钮键值配置
  props: {
    type: Object,
    default: () => {
      return {};
    },
  },
  // 点击按钮后是否隐藏弹窗
  hideOnClick: {
    type: Boolean,
    default: true,
  }
});
const pop = ref(false);
const popStyle = ref({
  left: "9999px",
  top: "9999px",
});
const nameSet = ref({
  name: props.props.name || "name",
  data: props.props.data || "data",
  label: props.props.label || "label",
  value: props.props.value || "value",
  customIcon: props.props.customIcon || "customIcon",
  icon: props.props.icon || "icon"
});
// 查找最近的一个符合条件的元素
const closest = (ele, selector) => {
  let matchesSelector =
    ele.matches ||
    ele.webkitMatchesSelector ||
    ele.mozMatchesSelector ||
    ele.msMatchesSelector;
  while (ele) {
    if (matchesSelector.call(ele, selector)) {
      break;
    }
    ele = ele.parentElement;
  }
  return ele;
};
// 右键事件
const showMenu = () => {
  console.log(event, 1111);
  if (closest(event.target, ".menu-content") === null) {
    console.log("未点击在弹窗上");
    popStyle.value.left = event.clientX + "px";
    popStyle.value.top = event.clientY + "px";
    pop.value = true;
    emit("popShow");
  } else {
    console.log("点击在弹窗上");
  }
};
// 隐藏弹窗
const hidePop = () => {
  console.log("触发检测函数");
  if (
    props.hideOnClick ||
    closest(event.target, ".menu-content") === null
  ) {
    pop.value = false;
    emit("popClose");
  }
};
// 监听弹窗出现
watch(pop, () => {
  if (pop.value) {
    document.body.addEventListener("click", hidePop);
  } else {
    document.body.removeEventListener("click", hidePop);
  }
});
onBeforeUnmount(() => {
  document.body.removeEventListener("click", hidePop);
});
// 按钮点击事件
const menuClick = (value) => {
  console.log(value);
  emit("menuClick", value);
};
console.log(props.list);
</script>
<style lang="scss">
@use "style/index.scss" as *;
</style>