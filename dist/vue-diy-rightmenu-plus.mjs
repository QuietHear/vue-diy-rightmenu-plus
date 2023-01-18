import { ref as g, watch as V, onBeforeUnmount as P, resolveComponent as z, openBlock as n, createElementBlock as l, withModifiers as D, renderSlot as N, normalizeStyle as O, Fragment as p, renderList as C, createBlock as s, resolveDynamicComponent as m, normalizeProps as k, mergeProps as a, withCtx as E, toDisplayString as d, createCommentVNode as w, createTextVNode as L, createElementVNode as $ } from "vue";
const A = ["onContextmenu"], j = {
  key: 0,
  class: "menu-list"
}, F = ["onClick"], R = { class: "item-title" }, T = ["onClick"], U = {
  __name: "index",
  props: {
    groupList: {
      type: Array,
      default: () => []
    },
    list: {
      type: Array,
      default: () => [
        {
          label: "\u7F16\u8F91",
          value: "\u7F16\u8F91value",
          icon: { icon: "\u221A" }
        },
        {
          label: "\u5220\u9664",
          value: "\u5220\u9664value"
        }
      ]
    },
    props: {
      type: Object,
      default: () => ({})
    },
    hideOnClick: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["menuClick", "popShow", "popClose"],
  setup(u, { emit: r }) {
    const i = u, v = g(!1), f = g({
      left: "9999px",
      top: "9999px"
    }), e = g({
      name: i.props.name || "name",
      data: i.props.data || "data",
      label: i.props.label || "label",
      value: i.props.value || "value",
      icon: i.props.icon || "icon"
    }), b = (c, S) => {
      let y = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector;
      for (; c && !y.call(c, S); )
        c = c.parentElement;
      return c;
    }, B = () => {
      b(event.target, ".menu-content") === null && (f.value.left = event.clientX + "px", f.value.top = event.clientY + "px", v.value = !0, r("popShow"));
    }, h = () => {
      (i.hideOnClick || b(event.target, ".menu-content") === null) && (v.value = !1, r("popClose"));
    };
    V(v, () => {
      v.value ? document.body.addEventListener("click", h) : document.body.removeEventListener("click", h);
    }), P(() => {
      document.body.removeEventListener("click", h);
    });
    const x = (c) => {
      r("menuClick", c);
    };
    return (c, S) => {
      const y = z("el-icon");
      return n(), l("div", {
        class: "vue-diy-rightmenu-plus",
        onContextmenu: D(B, ["prevent"])
      }, [
        N(c.$slots, "default"),
        v.value ? (n(), l("div", {
          key: 0,
          class: "menu-content",
          style: O(f.value)
        }, [
          u.list.length > 0 ? (n(), l("div", j, [
            (n(!0), l(p, null, C(u.list, (o, _) => (n(), l("div", {
              class: "item",
              onClick: (t) => x(o[e.value.value]),
              key: _
            }, [
              o[e.value.icon] && (o[e.value.icon].icon || o[e.value.icon].type) ? (n(), l(p, { key: 0 }, [
                o[e.value.icon].type === "custom" ? (n(), s(m(o[e.value.icon].icon), k(a({ key: 0 }, o[e.value.icon].attrs)), null, 16)) : o[e.value.icon].type === "el" ? (n(), s(y, k(a({ key: 1 }, o[e.value.icon].attrs)), {
                  default: E(() => [
                    (n(), s(m(o[e.value.icon].icon)))
                  ]),
                  _: 2
                }, 1040)) : o[e.value.icon].type === "iconfont" ? (n(), l("i", a({
                  key: 2,
                  class: ["icon iconfont", "icon-" + o[e.value.icon].icon]
                }, o[e.value.icon].attrs), null, 16)) : (n(), l("i", a({
                  key: 3,
                  class: o[e.value.icon].type
                }, o[e.value.icon].attrs), d(o[e.value.icon].icon), 17))
              ], 64)) : w("", !0),
              L(" " + d(o[e.value.label]), 1)
            ], 8, F))), 128))
          ])) : (n(!0), l(p, { key: 1 }, C(u.groupList, (o, _) => (n(), l("div", {
            class: "menu-group-list",
            key: _
          }, [
            $("p", R, d(o[e.value.name]), 1),
            (n(!0), l(p, null, C(o[e.value.data], (t, M) => (n(), l("div", {
              class: "item",
              onClick: (q) => x(t[e.value.value]),
              key: M
            }, [
              t[e.value.icon] && (t[e.value.icon].icon || t[e.value.icon].type) ? (n(), l(p, { key: 0 }, [
                t[e.value.icon].type === "custom" ? (n(), s(m(t[e.value.icon].icon), k(a({ key: 0 }, t[e.value.icon].attrs)), null, 16)) : t[e.value.icon].type === "el" ? (n(), s(y, k(a({ key: 1 }, t[e.value.icon].attrs)), {
                  default: E(() => [
                    (n(), s(m(t[e.value.icon].icon)))
                  ]),
                  _: 2
                }, 1040)) : t[e.value.icon].type === "iconfont" ? (n(), l("i", a({
                  key: 2,
                  class: ["icon iconfont", "icon-" + t[e.value.icon].icon]
                }, t[e.value.icon].attrs), null, 16)) : (n(), l("i", a({
                  key: 3,
                  class: t[e.value.icon].type
                }, t[e.value.icon].attrs), d(t[e.value.icon].icon), 17))
              ], 64)) : w("", !0),
              L(" " + d(t[e.value.label]), 1)
            ], 8, T))), 128))
          ]))), 128))
        ], 4)) : w("", !0)
      ], 40, A);
    };
  }
}, X = [U], Y = {
  install(u) {
    X.forEach((r) => {
      u.component("vueDiyRightmenuPlus", r);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Y);
export {
  Y as default
};
