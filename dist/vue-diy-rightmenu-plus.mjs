import { ref as C, watch as P, onBeforeUnmount as z, resolveComponent as D, openBlock as o, createElementBlock as l, withModifiers as N, renderSlot as O, unref as e, normalizeStyle as $, Fragment as y, renderList as w, createBlock as u, resolveDynamicComponent as k, normalizeProps as f, mergeProps as s, withCtx as L, toDisplayString as v, createCommentVNode as b, createTextVNode as B, createElementVNode as A } from "vue";
const j = ["onContextmenu"], F = {
  key: 0,
  class: "menu-list"
}, R = ["onClick"], T = { class: "item-title" }, U = ["onClick"], X = {
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
  setup(a, { emit: p }) {
    const r = a, d = C(!1), h = C({
      left: "9999px",
      top: "9999px"
    }), n = C({
      name: r.props.name || "name",
      data: r.props.data || "data",
      label: r.props.label || "label",
      value: r.props.value || "value",
      icon: r.props.icon || "icon"
    }), x = (i, E) => {
      let m = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector;
      for (; i && !m.call(i, E); )
        i = i.parentElement;
      return i;
    }, M = () => {
      x(event.target, ".menu-content") === null && (h.value.left = event.clientX + "px", h.value.top = event.clientY + "px", d.value = !0, p("popShow"));
    }, _ = () => {
      (r.hideOnClick || x(event.target, ".menu-content") === null) && (d.value = !1, p("popClose"));
    };
    P(d, () => {
      d.value ? document.body.addEventListener("click", _) : document.body.removeEventListener("click", _);
    }), z(() => {
      document.body.removeEventListener("click", _);
    });
    const S = (i) => {
      p("menuClick", i);
    };
    return (i, E) => {
      const m = D("el-icon");
      return o(), l("div", {
        class: "vue-diy-rightmenu-plus",
        onContextmenu: N(M, ["prevent"])
      }, [
        O(i.$slots, "default"),
        e(d) ? (o(), l("div", {
          key: 0,
          class: "menu-content",
          style: $(e(h))
        }, [
          a.list.length > 0 ? (o(), l("div", F, [
            (o(!0), l(y, null, w(a.list, (t, g) => (o(), l("div", {
              class: "item",
              onClick: (c) => S(t[e(n).value]),
              key: g
            }, [
              t[e(n).icon] && (t[e(n).icon].icon || t[e(n).icon].type) ? (o(), l(y, { key: 0 }, [
                t[e(n).icon].type === "custom" ? (o(), u(k(t[e(n).icon].icon), f(s({ key: 0 }, t[e(n).icon].attrs)), null, 16)) : t[e(n).icon].type === "el" ? (o(), u(m, f(s({ key: 1 }, t[e(n).icon].attrs)), {
                  default: L(() => [
                    (o(), u(k(t[e(n).icon].icon)))
                  ]),
                  _: 2
                }, 1040)) : t[e(n).icon].type === "iconfont" ? (o(), l("i", s({
                  key: 2,
                  class: ["icon iconfont", "icon-" + t[e(n).icon].icon]
                }, t[e(n).icon].attrs), null, 16)) : (o(), l("i", s({
                  key: 3,
                  class: t[e(n).icon].type
                }, t[e(n).icon].attrs), v(t[e(n).icon].icon), 17))
              ], 64)) : b("", !0),
              B(" " + v(t[e(n).label]), 1)
            ], 8, R))), 128))
          ])) : (o(!0), l(y, { key: 1 }, w(a.groupList, (t, g) => (o(), l("div", {
            class: "menu-group-list",
            key: g
          }, [
            A("p", T, v(t[e(n).name]), 1),
            (o(!0), l(y, null, w(t[e(n).data], (c, V) => (o(), l("div", {
              class: "item",
              onClick: (G) => S(c[e(n).value]),
              key: V
            }, [
              c[e(n).icon] && (c[e(n).icon].icon || c[e(n).icon].type) ? (o(), l(y, { key: 0 }, [
                c[e(n).icon].type === "custom" ? (o(), u(k(c[e(n).icon].icon), f(s({ key: 0 }, c[e(n).icon].attrs)), null, 16)) : c[e(n).icon].type === "el" ? (o(), u(m, f(s({ key: 1 }, c[e(n).icon].attrs)), {
                  default: L(() => [
                    (o(), u(k(c[e(n).icon].icon)))
                  ]),
                  _: 2
                }, 1040)) : c[e(n).icon].type === "iconfont" ? (o(), l("i", s({
                  key: 2,
                  class: ["icon iconfont", "icon-" + c[e(n).icon].icon]
                }, c[e(n).icon].attrs), null, 16)) : (o(), l("i", s({
                  key: 3,
                  class: c[e(n).icon].type
                }, c[e(n).icon].attrs), v(c[e(n).icon].icon), 17))
              ], 64)) : b("", !0),
              B(" " + v(c[e(n).label]), 1)
            ], 8, U))), 128))
          ]))), 128))
        ], 4)) : b("", !0)
      ], 40, j);
    };
  }
}, Y = [X], q = {
  install(a) {
    Y.forEach((p) => {
      a.component("vueDiyRightmenuPlus", p);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(q);
export {
  q as default
};
