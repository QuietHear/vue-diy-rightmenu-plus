import { ref as _, watch as B, onBeforeUnmount as M, resolveComponent as V, openBlock as l, createElementBlock as o, withModifiers as z, renderSlot as A, normalizeStyle as D, Fragment as p, renderList as C, createBlock as u, resolveDynamicComponent as m, withCtx as S, normalizeClass as y, toDisplayString as v, createCommentVNode as g, createTextVNode as I, createElementVNode as N } from "vue";
const O = ["onContextmenu"], $ = {
  key: 0,
  class: "menu-list"
}, P = ["onClick"], j = { class: "item-title" }, F = ["onClick"], R = {
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
  emits: ["menuClick", "popShow", "popClose"],
  setup(a, { emit: i }) {
    const s = a, r = _(!1), k = _({
      left: "9999px",
      top: "9999px"
    }), e = _({
      name: s.props.name || "name",
      data: s.props.data || "data",
      label: s.props.label || "label",
      value: s.props.value || "value",
      customIcon: s.props.customIcon || "customIcon",
      icon: s.props.icon || "icon"
    }), w = (n, x) => {
      let d = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector;
      for (; n && !d.call(n, x); )
        n = n.parentElement;
      return n;
    }, E = () => {
      w(event.target, ".menu-content") === null && (k.value.left = event.clientX + "px", k.value.top = event.clientY + "px", r.value = !0, i("popShow"));
    }, f = () => {
      (s.hideOnClick || w(event.target, ".menu-content") === null) && (r.value = !1, i("popClose"));
    };
    B(r, () => {
      r.value ? document.body.addEventListener("click", f) : document.body.removeEventListener("click", f);
    }), M(() => {
      document.body.removeEventListener("click", f);
    });
    const b = (n) => {
      i("menuClick", n);
    };
    return (n, x) => {
      const d = V("el-icon");
      return l(), o("div", {
        class: "vue-diy-rightmenu-plus",
        onContextmenu: z(E, ["prevent"])
      }, [
        A(n.$slots, "default"),
        r.value ? (l(), o("div", {
          key: 0,
          class: "menu-content",
          style: D(k.value)
        }, [
          a.list.length > 0 ? (l(), o("div", $, [
            (l(!0), o(p, null, C(a.list, (t, h) => (l(), o("div", {
              class: "item",
              onClick: (c) => b(t[e.value.value]),
              key: h
            }, [
              t[e.value.customIcon] || t[e.value.icon] ? (l(), o(p, { key: 0 }, [
                t[e.value.customIcon] ? (l(), u(m(t[e.value.customIcon]), { key: 0 })) : t[e.value.icon].split("/")[0] === "el" ? (l(), u(d, { key: 1 }, {
                  default: S(() => [
                    (l(), u(m(t[e.value.icon].split("/")[1])))
                  ]),
                  _: 2
                }, 1024)) : t[e.value.icon].split("/")[0] === "iconfont" ? (l(), o("i", {
                  key: 2,
                  class: y([
                    "icon iconfont",
                    "icon-" + t[e.value.icon].split("/")[1]
                  ])
                }, null, 2)) : (l(), o("i", {
                  key: 3,
                  class: y(t[e.value.icon].split("/")[0])
                }, v(t[e.value.icon].split("/")[1]), 3))
              ], 64)) : g("", !0),
              I(" " + v(t[e.value.label]), 1)
            ], 8, P))), 128))
          ])) : (l(!0), o(p, { key: 1 }, C(a.groupList, (t, h) => (l(), o("div", {
            class: "menu-group-list",
            key: h
          }, [
            N("p", j, v(t[e.value.name]), 1),
            (l(!0), o(p, null, C(t[e.value.data], (c, L) => (l(), o("div", {
              class: "item",
              onClick: (X) => b(c[e.value.value]),
              key: L
            }, [
              c[e.value.customIcon] || c[e.value.icon] ? (l(), o(p, { key: 0 }, [
                c[e.value.customIcon] ? (l(), u(m(c[e.value.customIcon]), { key: 0 })) : c[e.value.icon].split("/")[0] === "el" ? (l(), u(d, { key: 1 }, {
                  default: S(() => [
                    (l(), u(m(c[e.value.icon].split("/")[1])))
                  ]),
                  _: 2
                }, 1024)) : c[e.value.icon].split("/")[0] === "iconfont" ? (l(), o("i", {
                  key: 2,
                  class: y([
                    "icon iconfont",
                    "icon-" + c[e.value.icon].split("/")[1]
                  ])
                }, null, 2)) : (l(), o("i", {
                  key: 3,
                  class: y(c[e.value.icon].split("/")[0])
                }, v(c[e.value.icon].split("/")[1]), 3))
              ], 64)) : g("", !0),
              I(" " + v(c[e.value.label]), 1)
            ], 8, F))), 128))
          ]))), 128))
        ], 4)) : g("", !0)
      ], 40, O);
    };
  }
}, T = [R], U = {
  install(a) {
    T.forEach((i) => {
      a.component("vueDiyRightmenuPlus", i);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(U);
export {
  U as default
};
