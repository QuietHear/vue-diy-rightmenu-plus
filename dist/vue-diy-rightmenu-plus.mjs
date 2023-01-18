import { ref as _, watch as M, onBeforeUnmount as V, resolveComponent as z, openBlock as n, createElementBlock as t, withModifiers as D, renderSlot as N, normalizeStyle as O, Fragment as v, renderList as C, createBlock as u, resolveDynamicComponent as y, withCtx as S, normalizeClass as m, toDisplayString as p, createCommentVNode as g, createTextVNode as E, createElementVNode as $ } from "vue";
const A = ["onContextmenu"], P = {
  key: 0,
  class: "menu-list"
}, j = ["onClick"], F = { class: "item-title" }, R = ["onClick"], T = {
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
  setup(a, { emit: s }) {
    const i = a, r = _(!1), k = _({
      left: "9999px",
      top: "9999px"
    }), e = _({
      name: i.props.name || "name",
      data: i.props.data || "data",
      label: i.props.label || "label",
      value: i.props.value || "value",
      icon: i.props.icon || "icon"
    }), w = (c, x) => {
      let d = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector;
      for (; c && !d.call(c, x); )
        c = c.parentElement;
      return c;
    }, L = () => {
      w(event.target, ".menu-content") === null && (k.value.left = event.clientX + "px", k.value.top = event.clientY + "px", r.value = !0, s("popShow"));
    }, f = () => {
      (i.hideOnClick || w(event.target, ".menu-content") === null) && (r.value = !1, s("popClose"));
    };
    M(r, () => {
      r.value ? document.body.addEventListener("click", f) : document.body.removeEventListener("click", f);
    }), V(() => {
      document.body.removeEventListener("click", f);
    });
    const b = (c) => {
      s("menuClick", c);
    };
    return (c, x) => {
      const d = z("el-icon");
      return n(), t("div", {
        class: "vue-diy-rightmenu-plus",
        onContextmenu: D(L, ["prevent"])
      }, [
        N(c.$slots, "default"),
        r.value ? (n(), t("div", {
          key: 0,
          class: "menu-content",
          style: O(k.value)
        }, [
          a.list.length > 0 ? (n(), t("div", P, [
            (n(!0), t(v, null, C(a.list, (o, h) => (n(), t("div", {
              class: "item",
              onClick: (l) => b(o[e.value.value]),
              key: h
            }, [
              o[e.value.icon] && (o[e.value.icon].icon || o[e.value.icon].type) ? (n(), t(v, { key: 0 }, [
                o[e.value.icon].type === "custom" ? (n(), u(y(o[e.value.icon].icon), { key: 0 })) : o[e.value.icon].type === "el" ? (n(), u(d, { key: 1 }, {
                  default: S(() => [
                    (n(), u(y(o[e.value.icon].icon)))
                  ]),
                  _: 2
                }, 1024)) : o[e.value.icon].type === "iconfont" ? (n(), t("i", {
                  key: 2,
                  class: m(["icon iconfont", "icon-" + o[e.value.icon].icon])
                }, null, 2)) : (n(), t("i", {
                  key: 3,
                  class: m(o[e.value.icon].type)
                }, p(o[e.value.icon].icon), 3))
              ], 64)) : g("", !0),
              E(" " + p(o[e.value.label]), 1)
            ], 8, j))), 128))
          ])) : (n(!0), t(v, { key: 1 }, C(a.groupList, (o, h) => (n(), t("div", {
            class: "menu-group-list",
            key: h
          }, [
            $("p", F, p(o[e.value.name]), 1),
            (n(!0), t(v, null, C(o[e.value.data], (l, B) => (n(), t("div", {
              class: "item",
              onClick: (Y) => b(l[e.value.value]),
              key: B
            }, [
              l[e.value.icon] && (l[e.value.icon].icon || l[e.value.icon].type) ? (n(), t(v, { key: 0 }, [
                l[e.value.icon].type === "custom" ? (n(), u(y(l[e.value.icon].icon), { key: 0 })) : l[e.value.icon].type === "el" ? (n(), u(d, { key: 1 }, {
                  default: S(() => [
                    (n(), u(y(l[e.value.icon].icon)))
                  ]),
                  _: 2
                }, 1024)) : l[e.value.icon].type === "iconfont" ? (n(), t("i", {
                  key: 2,
                  class: m(["icon iconfont", "icon-" + l[e.value.icon].icon])
                }, null, 2)) : (n(), t("i", {
                  key: 3,
                  class: m(l[e.value.icon].type)
                }, p(l[e.value.icon].icon), 3))
              ], 64)) : g("", !0),
              E(" " + p(l[e.value.label]), 1)
            ], 8, R))), 128))
          ]))), 128))
        ], 4)) : g("", !0)
      ], 40, A);
    };
  }
}, U = [T], X = {
  install(a) {
    U.forEach((s) => {
      a.component("vueDiyRightmenuPlus", s);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(X);
export {
  X as default
};
