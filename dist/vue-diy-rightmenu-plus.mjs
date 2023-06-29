import { resolveComponent as M, openBlock as t, createBlock as d, resolveDynamicComponent as w, normalizeProps as x, mergeProps as m, withCtx as V, createElementBlock as i, toDisplayString as p, ref as k, watch as P, onBeforeUnmount as _, withModifiers as $, renderSlot as z, unref as n, normalizeStyle as D, Fragment as f, renderList as h, createCommentVNode as O, createTextVNode as S, createElementVNode as N } from "vue";
const E = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(e) {
    return (r, s) => {
      const a = M("el-icon");
      return e.iconObj.type === "custom" ? (t(), d(w(e.iconObj.icon), x(m({ key: 0 }, e.iconObj.attrs)), null, 16)) : e.iconObj.type === "el" ? (t(), d(a, x(m({ key: 1 }, e.iconObj.attrs)), {
        default: V(() => [
          (t(), d(w(e.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : e.iconObj.type === "iconfont" ? (t(), i("i", m({
        key: 2,
        class: ["icon iconfont", "icon-" + e.iconObj.icon]
      }, e.iconObj.attrs), null, 16)) : (t(), i("i", m({
        key: 3,
        class: e.iconObj.type
      }, e.iconObj.attrs), p(e.iconObj.icon), 17));
    };
  }
};
const A = ["onContextmenu"], q = {
  key: 0,
  class: "menu-list"
}, F = ["onClick"], R = { class: "item-title" }, T = ["onClick"], U = {
  __name: "index",
  props: {
    // 按钮组数据
    groupList: {
      type: Array,
      default: () => []
    },
    // 按钮数据
    list: {
      type: Array,
      default: () => [
        {
          label: "编辑",
          value: "编辑value",
          icon: { icon: "√" }
        },
        {
          label: "删除",
          value: "删除value"
        }
      ]
    },
    // 按钮键值配置
    props: {
      type: Object,
      default: () => ({})
    },
    // 点击按钮后是否隐藏弹窗
    hideOnClick: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["menuClick", "popShow", "popClose"],
  setup(e, { emit: r }) {
    const s = e, a = k(!1), v = k({
      left: "9999px",
      top: "9999px"
    }), o = k({
      name: s.props.name || "name",
      data: s.props.data || "data",
      label: s.props.label || "label",
      value: s.props.value || "value",
      icon: s.props.icon || "icon"
    }), j = (c, C) => {
      let l = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector;
      for (; c && !l.call(c, C); )
        c = c.parentElement;
      return c;
    }, L = () => {
      j(event.target, ".menu-content") === null && (v.value.left = event.clientX + "px", v.value.top = event.clientY + "px", a.value = !0, r("popShow"));
    }, y = () => {
      (s.hideOnClick || j(event.target, ".menu-content") === null) && (a.value = !1, r("popClose"));
    };
    P(a, () => {
      a.value ? document.body.addEventListener("click", y) : document.body.removeEventListener("click", y);
    }), _(() => {
      document.body.removeEventListener("click", y);
    });
    const g = (c) => {
      r("menuClick", c);
    };
    return (c, C) => (t(), i("div", {
      class: "vue-diy-rightmenu-plus",
      onContextmenu: $(L, ["prevent"])
    }, [
      z(c.$slots, "default"),
      n(a) ? (t(), i("div", {
        key: 0,
        class: "menu-content",
        style: D(n(v))
      }, [
        e.list.length > 0 ? (t(), i("div", q, [
          (t(!0), i(f, null, h(e.list, (l, b) => (t(), i("div", {
            class: "item",
            onClick: (u) => g(l[n(o).value]),
            key: b
          }, [
            l[n(o).icon] && (l[n(o).icon].icon || l[n(o).icon].type) ? (t(), d(E, {
              key: 0,
              iconObj: l[n(o).icon]
            }, null, 8, ["iconObj"])) : O("", !0),
            S(" " + p(l[n(o).label]), 1)
          ], 8, F))), 128))
        ])) : (t(!0), i(f, { key: 1 }, h(e.groupList, (l, b) => (t(), i("div", {
          class: "menu-group-list",
          key: b
        }, [
          N("p", R, p(l[n(o).name]), 1),
          (t(!0), i(f, null, h(l[n(o).data], (u, B) => (t(), i("div", {
            class: "item",
            onClick: (G) => g(u[n(o).value]),
            key: B
          }, [
            u[n(o).icon] && (u[n(o).icon].icon || u[n(o).icon].type) ? (t(), d(E, {
              key: 0,
              iconObj: u[n(o).icon]
            }, null, 8, ["iconObj"])) : O("", !0),
            S(" " + p(u[n(o).label]), 1)
          ], 8, T))), 128))
        ]))), 128))
      ], 4)) : O("", !0)
    ], 40, A));
  }
}, X = [U], Y = {
  install(e) {
    X.forEach((r) => {
      e.component("vueDiyRightmenuPlus", r);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Y);
export {
  Y as default
};
