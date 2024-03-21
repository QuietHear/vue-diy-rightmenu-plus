# 自定义右键菜单（vue3版）
***vue3版本*** | [**vue2版本**](https://github.com/QuietHear/vue-diy-rightmenu '右键新窗口浏览')

## 预览
	clone项目后npm run preview即可

## 安装
	npm i vue-diy-rightmenu-plus

## 使用
	import vueDiyRightmenuPlus from "vue-diy-rightmenu-plus";
	import "vue-diy-rightmenu-plus/index.css";
	
	app.use(vueDiyRightmenuPlus);


## 0. 可改动样式变量
* `--menu-height`：30px;-->按钮的高度

* `--menu-width`：80px;-->按钮的宽度

* `--menu-title-height`：28px;-->按钮组标题的高度


## 1. 参数
* `groupList`：按钮组数据-->Array;非必传;默认*[]*
>
	// 示例
	[
		{
			name:'a',
			data:[
				{label:'编辑',value:'编辑value',icon:{type:'el',icon:'Apple'}}
			]
		}
	]
>

* `list`：按钮数据，优先级高于groupList-->Array;非必传;默认如下
>
	// 默认
	[
        {
          label: "编辑",
          value: "编辑value",
          icon: { icon: '√' }
		  // attrs的值会v-bind到对应dom上
		  // type的值，有以下四种情况：
		  // custom，此时为自定义组件,icon为组件名（！！！未内置，确保当前页面或全局已引入）
		  // el，此时为el-icon,icon为图标组件名（！！！未内置，确保当前页面或全局已引入）
		  // iconfont，此时为iconfont，icon为图标去掉icon-后部分（！！！未内置，确保当前页面或全局已引入）
		  // 其他，此时为本地自定义图标，type为class，icon为内容
        },
        {
          label: "删除",
          value: "删除value"
        },
	]
>

* `props`：按钮键值配置-->Object;非必传;默认*{}*
>
	// 配置项说明
	name:'name' // 按钮组标题
	data:'data' // 按钮组数据
	label:'label' // 按钮的内容
	value:'value' // 点击按钮的返回值
	icon:'icon' // 点击按钮图标
>

* `hideOnClick`：点击按钮后是否隐藏弹窗-->Boolean;非必传;默认*true*

* `@menuClick`：弹窗按钮被点击后触发返回事件-->第一个参数返回按钮的value值

* `@popShow`：弹窗打开触发返回事件

* `@popClose`：弹窗关闭触发返回事件


## 2. 插槽
* `默认插槽`：替换触发事件区域


## 更多vue3组件
***自定义右键菜单*** | [**可拖拽菜单**](https://github.com/QuietHear/vue-drag-menu-plus '右键新窗口浏览') | [**echarts组件**](https://github.com/QuietHear/vue-echarts-block-plus '右键新窗口浏览') | [**基于el-menu的菜单组件**](https://github.com/QuietHear/vue-ele-nav-plus '右键新窗口浏览') | [**面包屑组件**](https://github.com/QuietHear/vue-permission-breads-plus '右键新窗口浏览') | [**滑动拼图**](https://github.com/QuietHear/vue-puzzle-slider-plus '右键新窗口浏览') | [**工作日历**](https://github.com/QuietHear/vue-shop-calendar-plus '右键新窗口浏览') | [**多页签组件**](https://github.com/QuietHear/vue-tabs-plus '右键新窗口浏览') | [**wangEditor**](https://github.com/QuietHear/vue-wangEditor-block-plus '右键新窗口浏览') | [**年密度组件**](https://github.com/QuietHear/vue-year-density-plus '右键新窗口浏览')