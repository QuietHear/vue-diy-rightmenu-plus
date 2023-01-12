/*
 * @Author: aFei
 * @Date: 2022-11-17 12:17:06
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-01-12 16:46:28
*/
import vueDiyRightmenuPlus from "./index.vue";
const arr = [vueDiyRightmenuPlus];
const comment = {
  install(Vue) {
    arr.forEach(item => {
      Vue.component('vueDiyRightmenuPlus', item);
    })
  },
};
// 注入script方式vue中
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(comment);
}
// 导出为全量
export default comment;