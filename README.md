# 自定义右键菜单（vue3版）
***vue3版本*** | [**vue2版本**](https://github.com/QuietHear/vue-diy-rightmenu '浏览')


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

* `list`：按钮数据，优先级高于groupList-->Array;非必传;默认*[{label:'编辑',value:'编辑value',icon:'el/Apple'},{label:'删除',value:'删除value'}]*

* `props`：按钮键值配置-->Object;非必传;默认*{}*
>
	// 配置项说明
	name:'name' // 按钮组标题
	data:'data' // 按钮组数据
	label:'label' // 按钮的内容
	value:'value' // 点击按钮的返回值
	icon:'icon' // 点击按钮图标
	//
	// 按钮名分为前后两部分，用/分隔，有以下三种情况
	// el/xxx，此时为el-icon,xxx为图标组件名
	// iconfont/xxx，此时为iconfont，xxx为图标去掉icon-后部分
	// xx/xx，此时为本地自定义图标，前半部分为class，后半部分为内容
>

* `hideOnClick`：点击按钮后是否隐藏弹窗-->Boolean;非必传;默认*true*

* `@menuClick`：弹窗按钮被点击后触发返回事件-->第一个参数返回按钮的value值

* `@popShow`：弹窗打开触发返回事件

* `@popClose`：弹窗关闭触发返回事件


## 2. 插槽
* `默认插槽`：替换触发事件区域
