import { resolveComponent as V, openBlock as n, createBlock as r, resolveDynamicComponent as x, normalizeProps as S, mergeProps as p, withCtx as P, createElementBlock as i, toDisplayString as v, ref as f, watch as $, onBeforeUnmount as z, withModifiers as D, renderSlot as N, unref as t, normalizeStyle as A, Fragment as h, renderList as O, createCommentVNode as j, createTextVNode as E, createElementVNode as _ } from "vue";
const L = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(e) {
    return (d, m) => {
      const s = V("el-icon");
      return e.iconObj.type === "custom" ? (n(), r(x(e.iconObj.icon), S(p({ key: 0 }, e.iconObj.attrs)), null, 16)) : e.iconObj.type === "el" ? (n(), r(s, S(p({ key: 1 }, e.iconObj.attrs)), {
        default: P(() => [
          (n(), r(x(e.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : e.iconObj.type === "iconfont" ? (n(), i("i", p({
        key: 2,
        class: ["icon iconfont", "icon-" + e.iconObj.icon]
      }, e.iconObj.attrs), null, 16)) : (n(), i("i", p({
        key: 3,
        class: e.iconObj.type
      }, e.iconObj.attrs), v(e.iconObj.icon), 17));
    };
  }
};
const q = {
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
  setup(e, { emit: d }) {
    const m = d, s = e, u = f(!1), y = f({
      left: "9999px",
      top: "9999px"
    }), o = f({
      name: s.props.name || "name",
      data: s.props.data || "data",
      label: s.props.label || "label",
      value: s.props.value || "value",
      icon: s.props.icon || "icon"
    }), g = (c, w) => {
      let l = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector;
      for (; c && !l.call(c, w); )
        c = c.parentElement;
      return c;
    }, B = () => {
      g(event.target, ".menu-content") === null && (document.body.click(), y.value.left = event.clientX + "px", y.value.top = event.clientY + "px", u.value = !0, m("popShow"));
    }, b = () => {
      (s.hideOnClick || g(event.target, ".menu-content") === null) && (u.value = !1, m("popClose"));
    };
    $(u, () => {
      u.value ? document.body.addEventListener("click", b) : document.body.removeEventListener("click", b);
    }), z(() => {
      document.body.removeEventListener("click", b);
    });
    const C = (c) => {
      m("menuClick", c);
    };
    return (c, w) => (n(), i("div", {
      class: "vue-diy-rightmenu-plus",
      onContextmenu: D(B, ["prevent"])
    }, [
      N(c.$slots, "default"),
      t(u) ? (n(), i("div", {
        key: 0,
        class: "menu-content",
        style: A(t(y))
      }, [
        e.list.length > 0 ? (n(), i("div", q, [
          (n(!0), i(h, null, O(e.list, (l, k) => (n(), i("div", {
            class: "item",
            onClick: (a) => C(l[t(o).value]),
            key: k
          }, [
            l[t(o).icon] && (l[t(o).icon].icon || l[t(o).icon].type) ? (n(), r(L, {
              key: 0,
              iconObj: l[t(o).icon]
            }, null, 8, ["iconObj"])) : j("", !0),
            E(" " + v(l[t(o).label]), 1)
          ], 8, F))), 128))
        ])) : (n(!0), i(h, { key: 1 }, O(e.groupList, (l, k) => (n(), i("div", {
          class: "menu-group-list",
          key: k
        }, [
          _("p", R, v(l[t(o).name]), 1),
          (n(!0), i(h, null, O(l[t(o).data], (a, M) => (n(), i("div", {
            class: "item",
            onClick: (G) => C(a[t(o).value]),
            key: M
          }, [
            a[t(o).icon] && (a[t(o).icon].icon || a[t(o).icon].type) ? (n(), r(L, {
              key: 0,
              iconObj: a[t(o).icon]
            }, null, 8, ["iconObj"])) : j("", !0),
            E(" " + v(a[t(o).label]), 1)
          ], 8, T))), 128))
        ]))), 128))
      ], 4)) : j("", !0)
    ], 32));
  }
}, X = [U], Y = {
  install(e) {
    X.forEach((d) => {
      e.component("vueDiyRightmenuPlus", d);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Y);
export {
  Y as default
};
