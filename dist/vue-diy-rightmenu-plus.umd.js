(function(e,r){typeof exports=="object"&&typeof module<"u"?module.exports=r(require("vue")):typeof define=="function"&&define.amd?define(["vue"],r):(e=typeof globalThis<"u"?globalThis:e||self,e.vueDiyRightmenuPlus=r(e.Vue))})(this,function(e){"use strict";const r={__name:"icon",props:{iconObj:{type:Object,requured:!0}},setup(n){return(s,m)=>{const l=e.resolveComponent("el-icon");return n.iconObj.type==="custom"?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(n.iconObj.icon),e.normalizeProps(e.mergeProps({key:0},n.iconObj.attrs)),null,16)):n.iconObj.type==="el"?(e.openBlock(),e.createBlock(l,e.normalizeProps(e.mergeProps({key:1},n.iconObj.attrs)),{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(n.iconObj.icon)))]),_:1},16)):n.iconObj.type==="iconfont"?(e.openBlock(),e.createElementBlock("i",e.mergeProps({key:2,class:["icon iconfont","icon-"+n.iconObj.icon]},n.iconObj.attrs),null,16)):(e.openBlock(),e.createElementBlock("i",e.mergeProps({key:3,class:n.iconObj.type},n.iconObj.attrs),e.toDisplayString(n.iconObj.icon),17))}}},w="",b={key:0,class:"menu-list"},h=["onClick"],g={class:"item-title"},O=["onClick"],j=[{__name:"index",props:{groupList:{type:Array,default:()=>[]},list:{type:Array,default:()=>[{label:"编辑",value:"编辑value",icon:{icon:"√"}},{label:"删除",value:"删除value"}]},props:{type:Object,default:()=>({})},hideOnClick:{type:Boolean,default:!0}},emits:["menuClick","popShow","popClose"],setup(n,{emit:s}){const m=s,l=n,a=e.ref(!1),p=e.ref({left:"9999px",top:"9999px"}),t=e.ref({name:l.props.name||"name",data:l.props.data||"data",label:l.props.label||"label",value:l.props.value||"value",icon:l.props.icon||"icon"}),y=(o,B)=>{let c=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector;for(;o&&!c.call(o,B);)o=o.parentElement;return o},C=()=>{y(event.target,".menu-content")===null&&(document.body.click(),p.value.left=event.clientX+"px",p.value.top=event.clientY+"px",a.value=!0,m("popShow"))},d=()=>{(l.hideOnClick||y(event.target,".menu-content")===null)&&(a.value=!1,m("popClose"))};e.watch(a,()=>{a.value?document.body.addEventListener("click",d):document.body.removeEventListener("click",d)}),e.onBeforeUnmount(()=>{document.body.removeEventListener("click",d)});const u=o=>{m("menuClick",o)};return(o,B)=>(e.openBlock(),e.createElementBlock("div",{class:"vue-diy-rightmenu-plus",onContextmenu:e.withModifiers(C,["prevent"])},[e.renderSlot(o.$slots,"default"),e.unref(a)?(e.openBlock(),e.createElementBlock("div",{key:0,class:"menu-content",style:e.normalizeStyle(e.unref(p))},[n.list.length>0?(e.openBlock(),e.createElementBlock("div",b,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n.list,(c,k)=>(e.openBlock(),e.createElementBlock("div",{class:"item",onClick:i=>u(c[e.unref(t).value]),key:k},[c[e.unref(t).icon]&&(c[e.unref(t).icon].icon||c[e.unref(t).icon].type)?(e.openBlock(),e.createBlock(r,{key:0,iconObj:c[e.unref(t).icon]},null,8,["iconObj"])):e.createCommentVNode("",!0),e.createTextVNode(" "+e.toDisplayString(c[e.unref(t).label]),1)],8,h))),128))])):(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:1},e.renderList(n.groupList,(c,k)=>(e.openBlock(),e.createElementBlock("div",{class:"menu-group-list",key:k},[e.createElementVNode("p",g,e.toDisplayString(c[e.unref(t).name]),1),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(c[e.unref(t).data],(i,E)=>(e.openBlock(),e.createElementBlock("div",{class:"item",onClick:S=>u(i[e.unref(t).value]),key:E},[i[e.unref(t).icon]&&(i[e.unref(t).icon].icon||i[e.unref(t).icon].type)?(e.openBlock(),e.createBlock(r,{key:0,iconObj:i[e.unref(t).icon]},null,8,["iconObj"])):e.createCommentVNode("",!0),e.createTextVNode(" "+e.toDisplayString(i[e.unref(t).label]),1)],8,O))),128))]))),128))],4)):e.createCommentVNode("",!0)],32))}}],f={install(n){j.forEach(s=>{n.component("vueDiyRightmenuPlus",s)})}};return typeof window<"u"&&window.Vue&&window.Vue.use(f),f});
