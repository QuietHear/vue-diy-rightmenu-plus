import { ref as h, watch as M, onBeforeUnmount as V, resolveComponent as z, openBlock as t, createElementBlock as l, withModifiers as A, renderSlot as D, normalizeStyle as N, Fragment as r, renderList as _, createBlock as d, withCtx as x, resolveDynamicComponent as S, normalizeClass as m, toDisplayString as p, createCommentVNode as C, createTextVNode as E, createElementVNode as O } from "vue";
const $ = ["onContextmenu"], P = {
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
    const s = a, u = h(!1), y = h({
      left: "9999px",
      top: "9999px"
    }), e = h({
      name: s.props.name || "name",
      data: s.props.data || "data",
      label: s.props.label || "label",
      value: s.props.value || "value",
      icon: s.props.icon || "icon"
    }), g = (n, b) => {
      let v = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector;
      for (; n && !v.call(n, b); )
        n = n.parentElement;
      return n;
    }, L = () => {
      g(event.target, ".menu-content") === null && (y.value.left = event.clientX + "px", y.value.top = event.clientY + "px", u.value = !0, i("popShow"));
    }, k = () => {
      (s.hideOnClick || g(event.target, ".menu-content") === null) && (u.value = !1, i("popClose"));
    };
    M(u, () => {
      u.value ? document.body.addEventListener("click", k) : document.body.removeEventListener("click", k);
    }), V(() => {
      document.body.removeEventListener("click", k);
    });
    const w = (n) => {
      i("menuClick", n);
    };
    return (n, b) => {
      const v = z("el-icon");
      return t(), l("div", {
        class: "vue-diy-rightmenu-plus",
        onContextmenu: A(L, ["prevent"])
      }, [
        D(n.$slots, "default"),
        u.value ? (t(), l("div", {
          key: 0,
          class: "menu-content",
          style: N(y.value)
        }, [
          a.list.length > 0 ? (t(), l("div", P, [
            (t(!0), l(r, null, _(a.list, (o, f) => (t(), l("div", {
              class: "item",
              onClick: (c) => w(o[e.value.value]),
              key: f
            }, [
              o[e.value.icon] ? (t(), l(r, { key: 0 }, [
                o[e.value.icon].split("/")[0] === "el" ? (t(), d(v, { key: 0 }, {
                  default: x(() => [
                    (t(), d(S(o[e.value.icon].split("/")[1])))
                  ]),
                  _: 2
                }, 1024)) : o[e.value.icon].split("/")[0] === "iconfont" ? (t(), l("i", {
                  key: 1,
                  class: m([
                    "icon iconfont",
                    "icon-" + o[e.value.icon].split("/")[1]
                  ])
                }, null, 2)) : (t(), l("i", {
                  key: 2,
                  class: m(o[e.value.icon].split("/")[0])
                }, p(o[e.value.icon].split("/")[1]), 3))
              ], 64)) : C("", !0),
              E(" " + p(o[e.value.label]), 1)
            ], 8, j))), 128))
          ])) : (t(!0), l(r, { key: 1 }, _(a.groupList, (o, f) => (t(), l("div", {
            class: "menu-group-list",
            key: f
          }, [
            O("p", F, p(o[e.value.name]), 1),
            (t(!0), l(r, null, _(o[e.value.data], (c, B) => (t(), l("div", {
              class: "item",
              onClick: (Y) => w(c[e.value.value]),
              key: B
            }, [
              c[e.value.icon] ? (t(), l(r, { key: 0 }, [
                c[e.value.icon].split("/")[0] === "el" ? (t(), d(v, { key: 0 }, {
                  default: x(() => [
                    (t(), d(S(c[e.value.icon].split("/")[1])))
                  ]),
                  _: 2
                }, 1024)) : c[e.value.icon].split("/")[0] === "iconfont" ? (t(), l("i", {
                  key: 1,
                  class: m([
                    "icon iconfont",
                    "icon-" + c[e.value.icon].split("/")[1]
                  ])
                }, null, 2)) : (t(), l("i", {
                  key: 2,
                  class: m(c[e.value.icon].split("/")[0])
                }, p(c[e.value.icon].split("/")[1]), 3))
              ], 64)) : C("", !0),
              E(" " + p(c[e.value.label]), 1)
            ], 8, R))), 128))
          ]))), 128))
        ], 4)) : C("", !0)
      ], 40, $);
    };
  }
}, U = [T], X = {
  install(a) {
    U.forEach((i) => {
      a.component("vueDiyRightmenuPlus", i);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(X);
export {
  X as default
};
