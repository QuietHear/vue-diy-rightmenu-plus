import { ref as S, watch as M, onBeforeUnmount as L, resolveComponent as B, openBlock as n, createElementBlock as o, withModifiers as V, renderSlot as D, normalizeStyle as O, Fragment as v, renderList as _, createBlock as y, withCtx as C, resolveDynamicComponent as g, normalizeClass as k, toDisplayString as p, createCommentVNode as h, createTextVNode as w, createElementVNode as z } from "vue";
const A = (l, i) => {
  const s = l.__vccOpts || l;
  for (const [e, f] of i)
    s[e] = f;
  return s;
}, N = {
  name: "vueDiyRightmenuPlus",
  emits: ["menuClick", "popShow", "popClose"],
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
          icon: "el/Apple"
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
  setup(l, { attrs: i, slots: s, emit: e, expose: f }) {
    const r = S(!1), m = S({
      left: "9999px",
      top: "9999px"
    }), t = S({
      name: l.props.name || "name",
      data: l.props.data || "data",
      label: l.props.label || "label",
      value: l.props.value || "value",
      icon: l.props.icon || "icon"
    }), u = (a, x) => {
      let E = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector;
      for (; a && !E.call(a, x); )
        a = a.parentElement;
      return a;
    }, c = () => {
      u(event.target, ".menu-content") === null && (m.value.left = event.clientX + "px", m.value.top = event.clientY + "px", r.value = !0, e("popShow"));
    }, d = () => {
      (l.hideOnClick || u(event.target, ".menu-content") === null) && (r.value = !1, e("popClose"));
    };
    return M(r, () => {
      r.value ? document.body.addEventListener("click", d) : document.body.removeEventListener("click", d);
    }), L(() => {
      document.body.removeEventListener("click", d);
    }), {
      pop: r,
      popStyle: m,
      nameSet: t,
      showMenu: c,
      menuClick: (a) => {
        e("menuClick", a);
      }
    };
  }
}, P = {
  key: 0,
  class: "menu-list"
}, R = ["onClick"], j = { class: "item-title" }, F = ["onClick"];
function T(l, i, s, e, f, r) {
  const m = B("el-icon");
  return n(), o("div", {
    class: "vue-diy-rightmenu-plus",
    onContextmenu: i[0] || (i[0] = V((...t) => e.showMenu && e.showMenu(...t), ["prevent"]))
  }, [
    D(l.$slots, "default"),
    e.pop ? (n(), o("div", {
      key: 0,
      class: "menu-content",
      style: O(e.popStyle)
    }, [
      s.list.length > 0 ? (n(), o("div", P, [
        (n(!0), o(v, null, _(s.list, (t, u) => (n(), o("div", {
          class: "item",
          onClick: (c) => e.menuClick(t[e.nameSet.value]),
          key: u
        }, [
          t[e.nameSet.icon] ? (n(), o(v, { key: 0 }, [
            t[e.nameSet.icon].split("/")[0] === "el" ? (n(), y(m, { key: 0 }, {
              default: C(() => [
                (n(), y(g(t[e.nameSet.icon].split("/")[1])))
              ]),
              _: 2
            }, 1024)) : t[e.nameSet.icon].split("/")[0] === "iconfont" ? (n(), o("i", {
              key: 1,
              class: k([
                "icon iconfont",
                "icon-" + t[e.nameSet.icon].split("/")[1]
              ])
            }, null, 2)) : (n(), o("i", {
              key: 2,
              class: k(t[e.nameSet.icon].split("/")[0])
            }, p(t[e.nameSet.icon].split("/")[1]), 3))
          ], 64)) : h("", !0),
          w(" " + p(t[e.nameSet.label]), 1)
        ], 8, R))), 128))
      ])) : (n(!0), o(v, { key: 1 }, _(s.groupList, (t, u) => (n(), o("div", {
        class: "menu-group-list",
        key: u
      }, [
        z("p", j, p(t[e.nameSet.name]), 1),
        (n(!0), o(v, null, _(t[e.nameSet.data], (c, d) => (n(), o("div", {
          class: "item",
          onClick: (b) => e.menuClick(c[e.nameSet.value]),
          key: d
        }, [
          c[e.nameSet.icon] ? (n(), o(v, { key: 0 }, [
            c[e.nameSet.icon].split("/")[0] === "el" ? (n(), y(m, { key: 0 }, {
              default: C(() => [
                (n(), y(g(c[e.nameSet.icon].split("/")[1])))
              ]),
              _: 2
            }, 1024)) : c[e.nameSet.icon].split("/")[0] === "iconfont" ? (n(), o("i", {
              key: 1,
              class: k([
                "icon iconfont",
                "icon-" + c[e.nameSet.icon].split("/")[1]
              ])
            }, null, 2)) : (n(), o("i", {
              key: 2,
              class: k(c[e.nameSet.icon].split("/")[0])
            }, p(c[e.nameSet.icon].split("/")[1]), 3))
          ], 64)) : h("", !0),
          w(" " + p(c[e.nameSet.label]), 1)
        ], 8, F))), 128))
      ]))), 128))
    ], 4)) : h("", !0)
  ], 32);
}
const U = /* @__PURE__ */ A(N, [["render", T]]), X = [U], Y = {
  install(l) {
    X.forEach((i) => {
      l.component(i.name, i);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Y);
export {
  Y as default
};
