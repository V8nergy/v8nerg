const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-BIWrjp-q.js",
      "assets/index--bJKV5X3.css",
      "assets/services-DfFiQN0o.js",
      "assets/services-C-FEuchN.css",
      "assets/about-CNNFP8Qw.js",
      "assets/about-AD9nD0N8.css",
      "assets/_id_-6nlkcNrG.js",
      "assets/PortableText.vue_vue_type_style_index_0_lang-BJ9Hkc-x.js",
      "assets/PortableText-CPQx0T9B.css",
      "assets/_id_-Che2wL-A.js",
      "assets/_id_-B3Wm6mMA.css",
      "assets/default-CNXKqEVd.js",
      "assets/TheFooter.vue_vue_type_script_setup_true_lang-Dpq8eWdb.js",
      "assets/default-b3FW77aQ.css",
      "assets/home-ScchTqaA.js",
      "assets/projectlayout-D_FopD8K.js",
      "assets/projectlayout-B2KWObux.css",
    ])
) => i.map((i) => d[i]);
var sg = Object.defineProperty;
var cc = (e) => {
  throw TypeError(e);
};
var og = (e, t, n) =>
  t in e
    ? sg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var ie = (e, t, n) => og(e, typeof t != "symbol" ? t + "" : t, n),
  uc = (e, t, n) => t.has(e) || cc("Cannot " + n);
var B = (e, t, n) => (
    uc(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  ve = (e, t, n) =>
    t.has(e)
      ? cc("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  me = (e, t, n, r) => (
    uc(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  );
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
})();
var fc = /^(GTM|G)-[0-9A-Z]+$/;
function xi(e) {
  if (typeof e != "string" || !fc.test(e)) {
    let t = String(e)
        .toUpperCase()
        .replace(/.*-|[^0-9A-Z]/g, ""),
      n = t.length === 0 ? "" : ` Did you mean 'GTM-${t}' or 'G-${t}'?`;
    throw new Error(`'${e}' is not a valid GTM-ID (${fc}).${n}`);
  }
}
function es(e, t = "dataLayer") {
  return e[t] || (e[t] = []), e[t];
}
function Er(e, t) {
  let n = document,
    r = n.createElement("script"),
    s = (c) => {
      var u;
      (u = t.onReady) == null || u.call(t, { id: e, script: r }),
        r.removeEventListener("load", s);
    };
  r.addEventListener("load", s);
  let o = t.dataLayerName ?? "dataLayer";
  if (
    (es(window, o).push({ event: "gtm.js", "gtm.start": new Date().getTime() }),
    !e)
  )
    return r;
  (r.async = !t.defer),
    (r.defer = !!(t.defer || t.compatibility)),
    t.nonce && r.setAttribute("nonce", t.nonce),
    t.scriptType && (r.type = t.scriptType);
  let i = new URLSearchParams({
      id: e,
      ...(t.dataLayerName ? { l: t.dataLayerName } : {}),
      ...(t.queryParams ?? {}),
    }),
    a = t.source ?? "https://www.googletagmanager.com/gtm.js";
  r.src = `${a}?${i}`;
  let l = t.parentElement ?? n.body;
  if (typeof (l == null ? void 0 : l.appendChild) != "function")
    throw new Error("parentElement must be a DOM element");
  return l.appendChild(r), r;
}
function ig(e = "https://www.googletagmanager.com/gtm.js") {
  return Array.from(document.getElementsByTagName("script")).some((t) =>
    t.src.includes(e)
  );
}
var ag = class {
  constructor(t) {
    ie(this, "id");
    ie(this, "options");
    ie(this, "scriptElements", []);
    ie(this, "isInBrowserContext", () => typeof window < "u");
    if (Array.isArray(t.id))
      for (let n of t.id) xi(typeof n == "string" ? n : n.id);
    else xi(t.id);
    (this.id = t.id),
      (this.options = {
        enabled: !0,
        debug: !1,
        loadScript: !0,
        defer: !1,
        compatibility: !1,
        dataLayerName: "dataLayer",
        ...t,
      }),
      delete this.options.id;
  }
  enabled() {
    return this.options.enabled ?? !0;
  }
  enable(t = !0, n) {
    if (
      ((this.options.enabled = t),
      this.isInBrowserContext() && t && !ig(n) && this.options.loadScript)
    )
      if (Array.isArray(this.id))
        this.id.forEach((r) => {
          let s;
          typeof r == "string"
            ? (s = Er(r, { ...this.options }))
            : (s = Er(r.id, { ...this.options, queryParams: r.queryParams })),
            this.scriptElements.push(s);
        });
      else {
        let r = Er(this.id, { ...this.options });
        this.scriptElements.push(r);
      }
  }
  debugEnabled() {
    return this.options.debug ?? !1;
  }
  debug(t) {
    this.options.debug = t;
  }
  dataLayer() {
    return this.isInBrowserContext() && this.options.enabled
      ? es(window, this.options.dataLayerName)
      : !1;
  }
  trackView(t, n, r = {}) {
    let s = this.isInBrowserContext() && (this.options.enabled ?? !1);
    this.options.debug &&
      console.log(
        `[GTM-Support${s ? "" : "(disabled)"}]: Dispatching TrackView`,
        { screenName: t, path: n }
      ),
      s &&
        es(window, this.options.dataLayerName).push({
          ...r,
          event: this.options.trackViewEventProperty ?? "content-view",
          "content-name": n,
          "content-view-name": t,
        });
  }
  trackEvent({
    event: t,
    category: n = null,
    action: r = null,
    label: s = null,
    value: o = null,
    noninteraction: i = !1,
    ...a
  } = {}) {
    let l = this.isInBrowserContext() && (this.options.enabled ?? !1);
    this.options.debug &&
      console.log(`[GTM-Support${l ? "" : "(disabled)"}]: Dispatching event`, {
        event: t,
        category: n,
        action: r,
        label: s,
        value: o,
        ...a,
      }),
      l &&
        es(window, this.options.dataLayerName).push({
          event: t ?? "interaction",
          target: n,
          action: r,
          "target-properties": s,
          value: o,
          "interaction-type": i,
          ...a,
        });
  }
  push(t) {
    let n = this.isInBrowserContext() && (this.options.enabled ?? !1);
    this.options.debug &&
      console.log(
        `[GTM-Support${n ? "" : "(disabled)"}]: Dispatching event`,
        t
      ),
      n && es(window, this.options.dataLayerName).push(t);
  }
};
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Qa(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ie = {},
  Sr = [],
  Wt = () => {},
  lg = () => !1,
  qs = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Za = (e) => e.startsWith("onUpdate:"),
  ot = Object.assign,
  el = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  cg = Object.prototype.hasOwnProperty,
  Se = (e, t) => cg.call(e, t),
  oe = Array.isArray,
  Cr = (e) => Ks(e) === "[object Map]",
  ri = (e) => Ks(e) === "[object Set]",
  dc = (e) => Ks(e) === "[object Date]",
  ae = (e) => typeof e == "function",
  He = (e) => typeof e == "string",
  Nt = (e) => typeof e == "symbol",
  Ae = (e) => e !== null && typeof e == "object",
  Qf = (e) => (Ae(e) || ae(e)) && ae(e.then) && ae(e.catch),
  Zf = Object.prototype.toString,
  Ks = (e) => Zf.call(e),
  ug = (e) => Ks(e).slice(8, -1),
  ed = (e) => Ks(e) === "[object Object]",
  tl = (e) =>
    He(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Tr = Qa(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  si = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  fg = /-(\w)/g,
  xt = si((e) => e.replace(fg, (t, n) => (n ? n.toUpperCase() : ""))),
  dg = /\B([A-Z])/g,
  ur = si((e) => e.replace(dg, "-$1").toLowerCase()),
  oi = si((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  ki = si((e) => (e ? `on${oi(e)}` : "")),
  Rn = (e, t) => !Object.is(e, t),
  _o = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  td = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n,
    });
  },
  Ao = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  hg = (e) => {
    const t = He(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let hc;
const ii = () =>
  hc ||
  (hc =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function ai(e) {
  if (oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = He(r) ? yg(r) : ai(r);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else if (He(e) || Ae(e)) return e;
}
const pg = /;(?![^(]*\))/g,
  mg = /:([^]+)/,
  gg = /\/\*[^]*?\*\//g;
function yg(e) {
  const t = {};
  return (
    e
      .replace(gg, "")
      .split(pg)
      .forEach((n) => {
        if (n) {
          const r = n.split(mg);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function fn(e) {
  let t = "";
  if (He(e)) t = e;
  else if (oe(e))
    for (let n = 0; n < e.length; n++) {
      const r = fn(e[n]);
      r && (t += r + " ");
    }
  else if (Ae(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function vg(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !He(t) && (e.class = fn(t)), n && (e.style = ai(n)), e;
}
const bg =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  _g = Qa(bg);
function nd(e) {
  return !!e || e === "";
}
function wg(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++) n = li(e[r], t[r]);
  return n;
}
function li(e, t) {
  if (e === t) return !0;
  let n = dc(e),
    r = dc(t);
  if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
  if (((n = Nt(e)), (r = Nt(t)), n || r)) return e === t;
  if (((n = oe(e)), (r = oe(t)), n || r)) return n && r ? wg(e, t) : !1;
  if (((n = Ae(e)), (r = Ae(t)), n || r)) {
    if (!n || !r) return !1;
    const s = Object.keys(e).length,
      o = Object.keys(t).length;
    if (s !== o) return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i),
        l = t.hasOwnProperty(i);
      if ((a && !l) || (!a && l) || !li(e[i], t[i])) return !1;
    }
  }
  return String(e) === String(t);
}
function Eg(e, t) {
  return e.findIndex((n) => li(n, t));
}
const rd = (e) => !!(e && e.__v_isRef === !0),
  At = (e) =>
    He(e)
      ? e
      : e == null
      ? ""
      : oe(e) || (Ae(e) && (e.toString === Zf || !ae(e.toString)))
      ? rd(e)
        ? At(e.value)
        : JSON.stringify(e, sd, 2)
      : String(e),
  sd = (e, t) =>
    rd(t)
      ? sd(e, t.value)
      : Cr(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, s], o) => ((n[Pi(r, o) + " =>"] = s), n),
            {}
          ),
        }
      : ri(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => Pi(n)) }
      : Nt(t)
      ? Pi(t)
      : Ae(t) && !oe(t) && !ed(t)
      ? String(t)
      : t,
  Pi = (e, t = "") => {
    var n;
    return Nt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let dt;
class od {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = dt),
      !t && dt && (this.index = (dt.scopes || (dt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = dt;
      try {
        return (dt = this), t();
      } finally {
        dt = n;
      }
    }
  }
  on() {
    dt = this;
  }
  off() {
    dt = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function nl(e) {
  return new od(e);
}
function rl() {
  return dt;
}
function id(e, t = !1) {
  dt && dt.cleanups.push(e);
}
let ke;
const Ri = new WeakSet();
class ad {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      dt && dt.active && dt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Ri.has(this) && (Ri.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || cd(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), pc(this), ud(this);
    const t = ke,
      n = Lt;
    (ke = this), (Lt = !0);
    try {
      return this.fn();
    } finally {
      fd(this), (ke = t), (Lt = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) il(t);
      (this.deps = this.depsTail = void 0),
        pc(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? Ri.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    ca(this) && this.run();
  }
  get dirty() {
    return ca(this);
  }
}
let ld = 0,
  rs,
  ss;
function cd(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = ss), (ss = e);
    return;
  }
  (e.next = rs), (rs = e);
}
function sl() {
  ld++;
}
function ol() {
  if (--ld > 0) return;
  if (ss) {
    let t = ss;
    for (ss = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; rs; ) {
    let t = rs;
    for (rs = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ud(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function fd(e) {
  let t,
    n = e.depsTail,
    r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), il(r), Sg(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = s);
  }
  (e.deps = t), (e.depsTail = n);
}
function ca(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (dd(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function dd(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === ms)
  )
    return;
  e.globalVersion = ms;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !ca(e))) {
    e.flags &= -3;
    return;
  }
  const n = ke,
    r = Lt;
  (ke = e), (Lt = !0);
  try {
    ud(e);
    const s = e.fn(e._value);
    (t.version === 0 || Rn(s, e._value)) && ((e._value = s), t.version++);
  } catch (s) {
    throw (t.version++, s);
  } finally {
    (ke = n), (Lt = r), fd(e), (e.flags &= -3);
  }
}
function il(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (
    (r && ((r.nextSub = s), (e.prevSub = void 0)),
    s && ((s.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) il(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Sg(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let Lt = !0;
const hd = [];
function Fn() {
  hd.push(Lt), (Lt = !1);
}
function Hn() {
  const e = hd.pop();
  Lt = e === void 0 ? !0 : e;
}
function pc(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = ke;
    ke = void 0;
    try {
      t();
    } finally {
      ke = n;
    }
  }
}
let ms = 0;
class Cg {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class ci {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(t) {
    if (!ke || !Lt || ke === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ke)
      (n = this.activeLink = new Cg(ke, this)),
        ke.deps
          ? ((n.prevDep = ke.depsTail),
            (ke.depsTail.nextDep = n),
            (ke.depsTail = n))
          : (ke.deps = ke.depsTail = n),
        pd(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep;
      (r.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = r),
        (n.prevDep = ke.depsTail),
        (n.nextDep = void 0),
        (ke.depsTail.nextDep = n),
        (ke.depsTail = n),
        ke.deps === n && (ke.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, ms++, this.notify(t);
  }
  notify(t) {
    sl();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ol();
    }
  }
}
function pd(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) pd(r);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const Io = new WeakMap(),
  nr = Symbol(""),
  ua = Symbol(""),
  gs = Symbol("");
function it(e, t, n) {
  if (Lt && ke) {
    let r = Io.get(e);
    r || Io.set(e, (r = new Map()));
    let s = r.get(n);
    s || (r.set(n, (s = new ci())), (s.map = r), (s.key = n)), s.track();
  }
}
function rn(e, t, n, r, s, o) {
  const i = Io.get(e);
  if (!i) {
    ms++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if ((sl(), t === "clear")) i.forEach(a);
  else {
    const l = oe(e),
      c = l && tl(n);
    if (l && n === "length") {
      const u = Number(r);
      i.forEach((f, h) => {
        (h === "length" || h === gs || (!Nt(h) && h >= u)) && a(f);
      });
    } else
      switch (
        ((n !== void 0 || i.has(void 0)) && a(i.get(n)), c && a(i.get(gs)), t)
      ) {
        case "add":
          l ? c && a(i.get("length")) : (a(i.get(nr)), Cr(e) && a(i.get(ua)));
          break;
        case "delete":
          l || (a(i.get(nr)), Cr(e) && a(i.get(ua)));
          break;
        case "set":
          Cr(e) && a(i.get(nr));
          break;
      }
  }
  ol();
}
function Tg(e, t) {
  const n = Io.get(e);
  return n && n.get(t);
}
function hr(e) {
  const t = be(e);
  return t === e ? t : (it(t, "iterate", gs), It(e) ? t : t.map(at));
}
function ui(e) {
  return it((e = be(e)), "iterate", gs), e;
}
const Og = {
  __proto__: null,
  [Symbol.iterator]() {
    return Li(this, Symbol.iterator, at);
  },
  concat(...e) {
    return hr(this).concat(...e.map((t) => (oe(t) ? hr(t) : t)));
  },
  entries() {
    return Li(this, "entries", (e) => ((e[1] = at(e[1])), e));
  },
  every(e, t) {
    return zt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return zt(this, "filter", e, t, (n) => n.map(at), arguments);
  },
  find(e, t) {
    return zt(this, "find", e, t, at, arguments);
  },
  findIndex(e, t) {
    return zt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return zt(this, "findLast", e, t, at, arguments);
  },
  findLastIndex(e, t) {
    return zt(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return zt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ni(this, "includes", e);
  },
  indexOf(...e) {
    return Ni(this, "indexOf", e);
  },
  join(e) {
    return hr(this).join(e);
  },
  lastIndexOf(...e) {
    return Ni(this, "lastIndexOf", e);
  },
  map(e, t) {
    return zt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Yr(this, "pop");
  },
  push(...e) {
    return Yr(this, "push", e);
  },
  reduce(e, ...t) {
    return mc(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return mc(this, "reduceRight", e, t);
  },
  shift() {
    return Yr(this, "shift");
  },
  some(e, t) {
    return zt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Yr(this, "splice", e);
  },
  toReversed() {
    return hr(this).toReversed();
  },
  toSorted(e) {
    return hr(this).toSorted(e);
  },
  toSpliced(...e) {
    return hr(this).toSpliced(...e);
  },
  unshift(...e) {
    return Yr(this, "unshift", e);
  },
  values() {
    return Li(this, "values", at);
  },
};
function Li(e, t, n) {
  const r = ui(e),
    s = r[t]();
  return (
    r !== e &&
      !It(e) &&
      ((s._next = s.next),
      (s.next = () => {
        const o = s._next();
        return o.value && (o.value = n(o.value)), o;
      })),
    s
  );
}
const Ag = Array.prototype;
function zt(e, t, n, r, s, o) {
  const i = ui(e),
    a = i !== e && !It(e),
    l = i[t];
  if (l !== Ag[t]) {
    const f = l.apply(e, o);
    return a ? at(f) : f;
  }
  let c = n;
  i !== e &&
    (a
      ? (c = function (f, h) {
          return n.call(this, at(f), h, e);
        })
      : n.length > 2 &&
        (c = function (f, h) {
          return n.call(this, f, h, e);
        }));
  const u = l.call(i, c, r);
  return a && s ? s(u) : u;
}
function mc(e, t, n, r) {
  const s = ui(e);
  let o = n;
  return (
    s !== e &&
      (It(e)
        ? n.length > 3 &&
          (o = function (i, a, l) {
            return n.call(this, i, a, l, e);
          })
        : (o = function (i, a, l) {
            return n.call(this, i, at(a), l, e);
          })),
    s[t](o, ...r)
  );
}
function Ni(e, t, n) {
  const r = be(e);
  it(r, "iterate", gs);
  const s = r[t](...n);
  return (s === -1 || s === !1) && cl(n[0])
    ? ((n[0] = be(n[0])), r[t](...n))
    : s;
}
function Yr(e, t, n = []) {
  Fn(), sl();
  const r = be(e)[t].apply(e, n);
  return ol(), Hn(), r;
}
const Ig = Qa("__proto__,__v_isRef,__isVue"),
  md = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Nt)
  );
function xg(e) {
  Nt(e) || (e = String(e));
  const t = be(this);
  return it(t, "has", e), t.hasOwnProperty(e);
}
class gd {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly,
      o = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw")
      return r === (s ? (o ? Fg : _d) : o ? bd : vd).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const i = oe(t);
    if (!s) {
      let l;
      if (i && (l = Og[n])) return l;
      if (n === "hasOwnProperty") return xg;
    }
    const a = Reflect.get(t, n, Ne(t) ? t : r);
    return (Nt(n) ? md.has(n) : Ig(n)) || (s || it(t, "get", n), o)
      ? a
      : Ne(a)
      ? i && tl(n)
        ? a
        : a.value
      : Ae(a)
      ? s
        ? Gs(a)
        : fr(a)
      : a;
  }
}
class yd extends gd {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const l = lr(o);
      if (
        (!It(r) && !lr(r) && ((o = be(o)), (r = be(r))),
        !oe(t) && Ne(o) && !Ne(r))
      )
        return l ? !1 : ((o.value = r), !0);
    }
    const i = oe(t) && tl(n) ? Number(n) < t.length : Se(t, n),
      a = Reflect.set(t, n, r, Ne(t) ? t : s);
    return (
      t === be(s) && (i ? Rn(r, o) && rn(t, "set", n, r) : rn(t, "add", n, r)),
      a
    );
  }
  deleteProperty(t, n) {
    const r = Se(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && rn(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Nt(n) || !md.has(n)) && it(t, "has", n), r;
  }
  ownKeys(t) {
    return it(t, "iterate", oe(t) ? "length" : nr), Reflect.ownKeys(t);
  }
}
class kg extends gd {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Pg = new yd(),
  Rg = new kg(),
  Lg = new yd(!0);
const fa = (e) => e,
  so = (e) => Reflect.getPrototypeOf(e);
function Ng(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = be(s),
      i = Cr(o),
      a = e === "entries" || (e === Symbol.iterator && i),
      l = e === "keys" && i,
      c = s[e](...r),
      u = n ? fa : t ? da : at;
    return (
      !t && it(o, "iterate", l ? ua : nr),
      {
        next() {
          const { value: f, done: h } = c.next();
          return h
            ? { value: f, done: h }
            : { value: a ? [u(f[0]), u(f[1])] : u(f), done: h };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function oo(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Dg(e, t) {
  const n = {
    get(s) {
      const o = this.__v_raw,
        i = be(o),
        a = be(s);
      e || (Rn(s, a) && it(i, "get", s), it(i, "get", a));
      const { has: l } = so(i),
        c = t ? fa : e ? da : at;
      if (l.call(i, s)) return c(o.get(s));
      if (l.call(i, a)) return c(o.get(a));
      o !== i && o.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && it(be(s), "iterate", nr), Reflect.get(s, "size", s);
    },
    has(s) {
      const o = this.__v_raw,
        i = be(o),
        a = be(s);
      return (
        e || (Rn(s, a) && it(i, "has", s), it(i, "has", a)),
        s === a ? o.has(s) : o.has(s) || o.has(a)
      );
    },
    forEach(s, o) {
      const i = this,
        a = i.__v_raw,
        l = be(a),
        c = t ? fa : e ? da : at;
      return (
        !e && it(l, "iterate", nr),
        a.forEach((u, f) => s.call(o, c(u), c(f), i))
      );
    },
  };
  return (
    ot(
      n,
      e
        ? {
            add: oo("add"),
            set: oo("set"),
            delete: oo("delete"),
            clear: oo("clear"),
          }
        : {
            add(s) {
              !t && !It(s) && !lr(s) && (s = be(s));
              const o = be(this);
              return (
                so(o).has.call(o, s) || (o.add(s), rn(o, "add", s, s)), this
              );
            },
            set(s, o) {
              !t && !It(o) && !lr(o) && (o = be(o));
              const i = be(this),
                { has: a, get: l } = so(i);
              let c = a.call(i, s);
              c || ((s = be(s)), (c = a.call(i, s)));
              const u = l.call(i, s);
              return (
                i.set(s, o),
                c ? Rn(o, u) && rn(i, "set", s, o) : rn(i, "add", s, o),
                this
              );
            },
            delete(s) {
              const o = be(this),
                { has: i, get: a } = so(o);
              let l = i.call(o, s);
              l || ((s = be(s)), (l = i.call(o, s))), a && a.call(o, s);
              const c = o.delete(s);
              return l && rn(o, "delete", s, void 0), c;
            },
            clear() {
              const s = be(this),
                o = s.size !== 0,
                i = s.clear();
              return o && rn(s, "clear", void 0, void 0), i;
            },
          }
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      n[s] = Ng(s, e, t);
    }),
    n
  );
}
function al(e, t) {
  const n = Dg(e, t);
  return (r, s, o) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? r
      : Reflect.get(Se(n, s) && s in r ? n : r, s, o);
}
const Mg = { get: al(!1, !1) },
  $g = { get: al(!1, !0) },
  jg = { get: al(!0, !1) };
const vd = new WeakMap(),
  bd = new WeakMap(),
  _d = new WeakMap(),
  Fg = new WeakMap();
function Hg(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ug(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Hg(ug(e));
}
function fr(e) {
  return lr(e) ? e : ll(e, !1, Pg, Mg, vd);
}
function wd(e) {
  return ll(e, !1, Lg, $g, bd);
}
function Gs(e) {
  return ll(e, !0, Rg, jg, _d);
}
function ll(e, t, n, r, s) {
  if (!Ae(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = s.get(e);
  if (o) return o;
  const i = Ug(e);
  if (i === 0) return e;
  const a = new Proxy(e, i === 2 ? r : n);
  return s.set(e, a), a;
}
function cn(e) {
  return lr(e) ? cn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function lr(e) {
  return !!(e && e.__v_isReadonly);
}
function It(e) {
  return !!(e && e.__v_isShallow);
}
function cl(e) {
  return e ? !!e.__v_raw : !1;
}
function be(e) {
  const t = e && e.__v_raw;
  return t ? be(t) : e;
}
function un(e) {
  return (
    !Se(e, "__v_skip") && Object.isExtensible(e) && td(e, "__v_skip", !0), e
  );
}
const at = (e) => (Ae(e) ? fr(e) : e),
  da = (e) => (Ae(e) ? Gs(e) : e);
function Ne(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function re(e) {
  return Ed(e, !1);
}
function ul(e) {
  return Ed(e, !0);
}
function Ed(e, t) {
  return Ne(e) ? e : new Vg(e, t);
}
class Vg {
  constructor(t, n) {
    (this.dep = new ci()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : be(t)),
      (this._value = n ? t : at(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      r = this.__v_isShallow || It(t) || lr(t);
    (t = r ? t : be(t)),
      Rn(t, n) &&
        ((this._rawValue = t),
        (this._value = r ? t : at(t)),
        this.dep.trigger());
  }
}
function Q(e) {
  return Ne(e) ? e.value : e;
}
const Bg = {
  get: (e, t, n) => (t === "__v_raw" ? e : Q(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const s = e[t];
    return Ne(s) && !Ne(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function Sd(e) {
  return cn(e) ? e : new Proxy(e, Bg);
}
class Wg {
  constructor(t) {
    (this.__v_isRef = !0), (this._value = void 0);
    const n = (this.dep = new ci()),
      { get: r, set: s } = t(n.track.bind(n), n.trigger.bind(n));
    (this._get = r), (this._set = s);
  }
  get value() {
    return (this._value = this._get());
  }
  set value(t) {
    this._set(t);
  }
}
function qg(e) {
  return new Wg(e);
}
function Kg(e) {
  const t = oe(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Cd(e, n);
  return t;
}
class Gg {
  constructor(t, n, r) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0),
      (this._value = void 0);
  }
  get value() {
    const t = this._object[this._key];
    return (this._value = t === void 0 ? this._defaultValue : t);
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Tg(be(this._object), this._key);
  }
}
class zg {
  constructor(t) {
    (this._getter = t),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !0),
      (this._value = void 0);
  }
  get value() {
    return (this._value = this._getter());
  }
}
function fl(e, t, n) {
  return Ne(e)
    ? e
    : ae(e)
    ? new zg(e)
    : Ae(e) && arguments.length > 1
    ? Cd(e, t, n)
    : re(e);
}
function Cd(e, t, n) {
  const r = e[t];
  return Ne(r) ? r : new Gg(e, t, n);
}
class Yg {
  constructor(t, n, r) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new ci(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = ms - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = r);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && ke !== this))
      return cd(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return dd(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Jg(e, t, n = !1) {
  let r, s;
  return ae(e) ? (r = e) : ((r = e.get), (s = e.set)), new Yg(r, s, n);
}
const io = {},
  xo = new WeakMap();
let Yn;
function Xg(e, t = !1, n = Yn) {
  if (n) {
    let r = xo.get(n);
    r || xo.set(n, (r = [])), r.push(e);
  }
}
function Qg(e, t, n = Ie) {
  const {
      immediate: r,
      deep: s,
      once: o,
      scheduler: i,
      augmentJob: a,
      call: l,
    } = n,
    c = (g) => (s ? g : It(g) || s === !1 || s === 0 ? sn(g, 1) : sn(g));
  let u,
    f,
    h,
    d,
    p = !1,
    m = !1;
  if (
    (Ne(e)
      ? ((f = () => e.value), (p = It(e)))
      : cn(e)
      ? ((f = () => c(e)), (p = !0))
      : oe(e)
      ? ((m = !0),
        (p = e.some((g) => cn(g) || It(g))),
        (f = () =>
          e.map((g) => {
            if (Ne(g)) return g.value;
            if (cn(g)) return c(g);
            if (ae(g)) return l ? l(g, 2) : g();
          })))
      : ae(e)
      ? t
        ? (f = l ? () => l(e, 2) : e)
        : (f = () => {
            if (h) {
              Fn();
              try {
                h();
              } finally {
                Hn();
              }
            }
            const g = Yn;
            Yn = u;
            try {
              return l ? l(e, 3, [d]) : e(d);
            } finally {
              Yn = g;
            }
          })
      : (f = Wt),
    t && s)
  ) {
    const g = f,
      A = s === !0 ? 1 / 0 : s;
    f = () => sn(g(), A);
  }
  const S = rl(),
    b = () => {
      u.stop(), S && S.active && el(S.effects, u);
    };
  if (o && t) {
    const g = t;
    t = (...A) => {
      g(...A), b();
    };
  }
  let C = m ? new Array(e.length).fill(io) : io;
  const y = (g) => {
    if (!(!(u.flags & 1) || (!u.dirty && !g)))
      if (t) {
        const A = u.run();
        if (s || p || (m ? A.some((L, P) => Rn(L, C[P])) : Rn(A, C))) {
          h && h();
          const L = Yn;
          Yn = u;
          try {
            const P = [A, C === io ? void 0 : m && C[0] === io ? [] : C, d];
            l ? l(t, 3, P) : t(...P), (C = A);
          } finally {
            Yn = L;
          }
        }
      } else u.run();
  };
  return (
    a && a(y),
    (u = new ad(f)),
    (u.scheduler = i ? () => i(y, !1) : y),
    (d = (g) => Xg(g, !1, u)),
    (h = u.onStop =
      () => {
        const g = xo.get(u);
        if (g) {
          if (l) l(g, 4);
          else for (const A of g) A();
          xo.delete(u);
        }
      }),
    t ? (r ? y(!0) : (C = u.run())) : i ? i(y.bind(null, !0), !0) : u.run(),
    (b.pause = u.pause.bind(u)),
    (b.resume = u.resume.bind(u)),
    (b.stop = b),
    b
  );
}
function sn(e, t = 1 / 0, n) {
  if (t <= 0 || !Ae(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, Ne(e))) sn(e.value, t, n);
  else if (oe(e)) for (let r = 0; r < e.length; r++) sn(e[r], t, n);
  else if (ri(e) || Cr(e))
    e.forEach((r) => {
      sn(r, t, n);
    });
  else if (ed(e)) {
    for (const r in e) sn(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && sn(e[r], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function zs(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    fi(s, t, n);
  }
}
function Dt(e, t, n, r) {
  if (ae(e)) {
    const s = zs(e, t, n, r);
    return (
      s &&
        Qf(s) &&
        s.catch((o) => {
          fi(o, t, n);
        }),
      s
    );
  }
  if (oe(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++) s.push(Dt(e[o], t, n, r));
    return s;
  }
}
function fi(e, t, n, r = !0) {
  const s = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: i } =
      (t && t.appContext.config) || Ie;
  if (t) {
    let a = t.parent;
    const l = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let f = 0; f < u.length; f++) if (u[f](e, l, c) === !1) return;
      }
      a = a.parent;
    }
    if (o) {
      Fn(), zs(o, null, 10, [e, l, c]), Hn();
      return;
    }
  }
  Zg(e, n, s, r, i);
}
function Zg(e, t, n, r = !0, s = !1) {
  if (s) throw e;
  console.error(e);
}
const ht = [];
let Ut = -1;
const Or = [];
let wn = null,
  yr = 0;
const Td = Promise.resolve();
let ko = null;
function Un(e) {
  const t = ko || Td;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ey(e) {
  let t = Ut + 1,
    n = ht.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = ht[r],
      o = ys(s);
    o < e || (o === e && s.flags & 2) ? (t = r + 1) : (n = r);
  }
  return t;
}
function dl(e) {
  if (!(e.flags & 1)) {
    const t = ys(e),
      n = ht[ht.length - 1];
    !n || (!(e.flags & 2) && t >= ys(n)) ? ht.push(e) : ht.splice(ey(t), 0, e),
      (e.flags |= 1),
      Od();
  }
}
function Od() {
  ko || (ko = Td.then(Ad));
}
function ty(e) {
  oe(e)
    ? Or.push(...e)
    : wn && e.id === -1
    ? wn.splice(yr + 1, 0, e)
    : e.flags & 1 || (Or.push(e), (e.flags |= 1)),
    Od();
}
function gc(e, t, n = Ut + 1) {
  for (; n < ht.length; n++) {
    const r = ht[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      ht.splice(n, 1),
        n--,
        r.flags & 4 && (r.flags &= -2),
        r(),
        r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Po(e) {
  if (Or.length) {
    const t = [...new Set(Or)].sort((n, r) => ys(n) - ys(r));
    if (((Or.length = 0), wn)) {
      wn.push(...t);
      return;
    }
    for (wn = t, yr = 0; yr < wn.length; yr++) {
      const n = wn[yr];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (wn = null), (yr = 0);
  }
}
const ys = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function Ad(e) {
  try {
    for (Ut = 0; Ut < ht.length; Ut++) {
      const t = ht[Ut];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        zs(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ut < ht.length; Ut++) {
      const t = ht[Ut];
      t && (t.flags &= -2);
    }
    (Ut = -1),
      (ht.length = 0),
      Po(),
      (ko = null),
      (ht.length || Or.length) && Ad();
  }
}
let Je = null,
  Id = null;
function Ro(e) {
  const t = Je;
  return (Je = e), (Id = (e && e.type.__scopeId) || null), t;
}
function bt(e, t = Je, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && Ic(-1);
    const o = Ro(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Ro(o), r._d && Ic(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function pr(e, t) {
  if (Je === null) return e;
  const n = gi(Je),
    r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, a, l = Ie] = t[s];
    o &&
      (ae(o) && (o = { mounted: o, updated: o }),
      o.deep && sn(i),
      r.push({
        dir: o,
        instance: n,
        value: i,
        oldValue: void 0,
        arg: a,
        modifiers: l,
      }));
  }
  return e;
}
function Vt(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    o && (a.oldValue = o[i].value);
    let l = a.dir[r];
    l && (Fn(), Dt(l, n, 8, [e.el, a, e, t]), Hn());
  }
}
const ny = Symbol("_vte"),
  xd = (e) => e.__isTeleport,
  En = Symbol("_leaveCb"),
  ao = Symbol("_enterCb");
function ry() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    kt(() => {
      e.isMounted = !0;
    }),
    Br(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const St = [Function, Array],
  kd = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: St,
    onEnter: St,
    onAfterEnter: St,
    onEnterCancelled: St,
    onBeforeLeave: St,
    onLeave: St,
    onAfterLeave: St,
    onLeaveCancelled: St,
    onBeforeAppear: St,
    onAppear: St,
    onAfterAppear: St,
    onAppearCancelled: St,
  },
  Pd = (e) => {
    const t = e.subTree;
    return t.component ? Pd(t.component) : t;
  },
  sy = {
    name: "BaseTransition",
    props: kd,
    setup(e, { slots: t }) {
      const n = Vn(),
        r = ry();
      return () => {
        const s = t.default && Nd(t.default(), !0);
        if (!s || !s.length) return;
        const o = Rd(s),
          i = be(e),
          { mode: a } = i;
        if (r.isLeaving) return Di(o);
        const l = yc(o);
        if (!l) return Di(o);
        let c = ha(l, i, r, n, (f) => (c = f));
        l.type !== nt && vs(l, c);
        let u = n.subTree && yc(n.subTree);
        if (u && u.type !== nt && !Xn(l, u) && Pd(n).type !== nt) {
          let f = ha(u, i, r, n);
          if ((vs(u, f), a === "out-in" && l.type !== nt))
            return (
              (r.isLeaving = !0),
              (f.afterLeave = () => {
                (r.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete f.afterLeave,
                  (u = void 0);
              }),
              Di(o)
            );
          a === "in-out" && l.type !== nt
            ? (f.delayLeave = (h, d, p) => {
                const m = Ld(r, u);
                (m[String(u.key)] = u),
                  (h[En] = () => {
                    d(), (h[En] = void 0), delete c.delayedLeave, (u = void 0);
                  }),
                  (c.delayedLeave = () => {
                    p(), delete c.delayedLeave, (u = void 0);
                  });
              })
            : (u = void 0);
        } else u && (u = void 0);
        return o;
      };
    },
  };
function Rd(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== nt) {
        t = n;
        break;
      }
  }
  return t;
}
const oy = sy;
function Ld(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function ha(e, t, n, r, s) {
  const {
      appear: o,
      mode: i,
      persisted: a = !1,
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: u,
      onEnterCancelled: f,
      onBeforeLeave: h,
      onLeave: d,
      onAfterLeave: p,
      onLeaveCancelled: m,
      onBeforeAppear: S,
      onAppear: b,
      onAfterAppear: C,
      onAppearCancelled: y,
    } = t,
    g = String(e.key),
    A = Ld(n, e),
    L = (N, E) => {
      N && Dt(N, r, 9, E);
    },
    P = (N, E) => {
      const x = E[1];
      L(N, E),
        oe(N) ? N.every((O) => O.length <= 1) && x() : N.length <= 1 && x();
    },
    V = {
      mode: i,
      persisted: a,
      beforeEnter(N) {
        let E = l;
        if (!n.isMounted)
          if (o) E = S || l;
          else return;
        N[En] && N[En](!0);
        const x = A[g];
        x && Xn(e, x) && x.el[En] && x.el[En](), L(E, [N]);
      },
      enter(N) {
        let E = c,
          x = u,
          O = f;
        if (!n.isMounted)
          if (o) (E = b || c), (x = C || u), (O = y || f);
          else return;
        let R = !1;
        const Z = (N[ao] = (G) => {
          R ||
            ((R = !0),
            G ? L(O, [N]) : L(x, [N]),
            V.delayedLeave && V.delayedLeave(),
            (N[ao] = void 0));
        });
        E ? P(E, [N, Z]) : Z();
      },
      leave(N, E) {
        const x = String(e.key);
        if ((N[ao] && N[ao](!0), n.isUnmounting)) return E();
        L(h, [N]);
        let O = !1;
        const R = (N[En] = (Z) => {
          O ||
            ((O = !0),
            E(),
            Z ? L(m, [N]) : L(p, [N]),
            (N[En] = void 0),
            A[x] === e && delete A[x]);
        });
        (A[x] = e), d ? P(d, [N, R]) : R();
      },
      clone(N) {
        const E = ha(N, t, n, r, s);
        return s && s(E), E;
      },
    };
  return V;
}
function Di(e) {
  if (di(e)) return (e = $n(e)), (e.children = null), e;
}
function yc(e) {
  if (!di(e)) return xd(e.type) && e.children ? Rd(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && ae(n.default)) return n.default();
  }
}
function vs(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), vs(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Nd(e, t = !1, n) {
  let r = [],
    s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === Ue
      ? (i.patchFlag & 128 && s++, (r = r.concat(Nd(i.children, t, a))))
      : (t || i.type !== nt) && r.push(a != null ? $n(i, { key: a }) : i);
  }
  if (s > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */ function Me(e, t) {
  return ae(e) ? ot({ name: e.name }, t, { setup: e }) : e;
}
function Dd(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function bs(e, t, n, r, s = !1) {
  if (oe(e)) {
    e.forEach((p, m) => bs(p, t && (oe(t) ? t[m] : t), n, r, s));
    return;
  }
  if (rr(r) && !s) {
    r.shapeFlag & 512 &&
      r.type.__asyncResolved &&
      r.component.subTree.component &&
      bs(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? gi(r.component) : r.el,
    i = s ? null : o,
    { i: a, r: l } = e,
    c = t && t.r,
    u = a.refs === Ie ? (a.refs = {}) : a.refs,
    f = a.setupState,
    h = be(f),
    d = f === Ie ? () => !1 : (p) => Se(h, p);
  if (
    (c != null &&
      c !== l &&
      (He(c)
        ? ((u[c] = null), d(c) && (f[c] = null))
        : Ne(c) && (c.value = null)),
    ae(l))
  )
    zs(l, a, 12, [i, u]);
  else {
    const p = He(l),
      m = Ne(l);
    if (p || m) {
      const S = () => {
        if (e.f) {
          const b = p ? (d(l) ? f[l] : u[l]) : l.value;
          s
            ? oe(b) && el(b, o)
            : oe(b)
            ? b.includes(o) || b.push(o)
            : p
            ? ((u[l] = [o]), d(l) && (f[l] = u[l]))
            : ((l.value = [o]), e.k && (u[e.k] = l.value));
        } else
          p
            ? ((u[l] = i), d(l) && (f[l] = i))
            : m && ((l.value = i), e.k && (u[e.k] = i));
      };
      i ? ((S.id = -1), vt(S, n)) : S();
    }
  }
}
let vc = !1;
const mr = () => {
    vc ||
      (console.error("Hydration completed but contains mismatches."),
      (vc = !0));
  },
  iy = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject",
  ay = (e) => e.namespaceURI.includes("MathML"),
  lo = (e) => {
    if (e.nodeType === 1) {
      if (iy(e)) return "svg";
      if (ay(e)) return "mathml";
    }
  },
  co = (e) => e.nodeType === 8;
function ly(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: r,
        createText: s,
        nextSibling: o,
        parentNode: i,
        remove: a,
        insert: l,
        createComment: c,
      },
    } = e,
    u = (y, g) => {
      if (!g.hasChildNodes()) {
        n(null, y, g), Po(), (g._vnode = y);
        return;
      }
      f(g.firstChild, y, null, null, null), Po(), (g._vnode = y);
    },
    f = (y, g, A, L, P, V = !1) => {
      V = V || !!g.dynamicChildren;
      const N = co(y) && y.data === "[",
        E = () => m(y, g, A, L, P, N),
        { type: x, ref: O, shapeFlag: R, patchFlag: Z } = g;
      let G = y.nodeType;
      (g.el = y), Z === -2 && ((V = !1), (g.dynamicChildren = null));
      let q = null;
      switch (x) {
        case Nn:
          G !== 3
            ? g.children === ""
              ? (l((g.el = s("")), i(y), y), (q = y))
              : (q = E())
            : (y.data !== g.children && (mr(), (y.data = g.children)),
              (q = o(y)));
          break;
        case nt:
          C(y)
            ? ((q = o(y)), b((g.el = y.content.firstChild), y, A))
            : G !== 8 || N
            ? (q = E())
            : (q = o(y));
          break;
        case wo:
          if ((N && ((y = o(y)), (G = y.nodeType)), G === 1 || G === 3)) {
            q = y;
            const ee = !g.children.length;
            for (let X = 0; X < g.staticCount; X++)
              ee && (g.children += q.nodeType === 1 ? q.outerHTML : q.data),
                X === g.staticCount - 1 && (g.anchor = q),
                (q = o(q));
            return N ? o(q) : q;
          } else E();
          break;
        case Ue:
          N ? (q = p(y, g, A, L, P, V)) : (q = E());
          break;
        default:
          if (R & 1)
            (G !== 1 || g.type.toLowerCase() !== y.tagName.toLowerCase()) &&
            !C(y)
              ? (q = E())
              : (q = h(y, g, A, L, P, V));
          else if (R & 6) {
            g.slotScopeIds = P;
            const ee = i(y);
            if (
              (N
                ? (q = S(y))
                : co(y) && y.data === "teleport start"
                ? (q = S(y, y.data, "teleport end"))
                : (q = o(y)),
              t(g, ee, null, A, L, lo(ee), V),
              rr(g) && !g.type.__asyncResolved)
            ) {
              let X;
              N
                ? ((X = ce(Ue)),
                  (X.anchor = q ? q.previousSibling : ee.lastChild))
                : (X = y.nodeType === 3 ? Bt("") : ce("div")),
                (X.el = y),
                (g.component.subTree = X);
            }
          } else
            R & 64
              ? G !== 8
                ? (q = E())
                : (q = g.type.hydrate(y, g, A, L, P, V, e, d))
              : R & 128 &&
                (q = g.type.hydrate(y, g, A, L, lo(i(y)), P, V, e, f));
      }
      return O != null && bs(O, null, L, g), q;
    },
    h = (y, g, A, L, P, V) => {
      V = V || !!g.dynamicChildren;
      const {
          type: N,
          props: E,
          patchFlag: x,
          shapeFlag: O,
          dirs: R,
          transition: Z,
        } = g,
        G = N === "input" || N === "option";
      if (G || x !== -1) {
        R && Vt(g, null, A, "created");
        let q = !1;
        if (C(y)) {
          q = nh(null, Z) && A && A.vnode.props && A.vnode.props.appear;
          const X = y.content.firstChild;
          q && Z.beforeEnter(X), b(X, y, A), (g.el = y = X);
        }
        if (O & 16 && !(E && (E.innerHTML || E.textContent))) {
          let X = d(y.firstChild, g, y, A, L, P, V);
          for (; X; ) {
            uo(y, 1) || mr();
            const le = X;
            (X = X.nextSibling), a(le);
          }
        } else if (O & 8) {
          let X = g.children;
          X[0] ===
            `
` &&
            (y.tagName === "PRE" || y.tagName === "TEXTAREA") &&
            (X = X.slice(1)),
            y.textContent !== X &&
              (uo(y, 0) || mr(), (y.textContent = g.children));
        }
        if (E) {
          if (G || !V || x & 48) {
            const X = y.tagName.includes("-");
            for (const le in E)
              ((G && (le.endsWith("value") || le === "indeterminate")) ||
                (qs(le) && !Tr(le)) ||
                le[0] === "." ||
                X) &&
                r(y, le, null, E[le], void 0, A);
          } else if (E.onClick) r(y, "onClick", null, E.onClick, void 0, A);
          else if (x & 4 && cn(E.style)) for (const X in E.style) E.style[X];
        }
        let ee;
        (ee = E && E.onVnodeBeforeMount) && Ct(ee, A, g),
          R && Vt(g, null, A, "beforeMount"),
          ((ee = E && E.onVnodeMounted) || R || q) &&
            ch(() => {
              ee && Ct(ee, A, g),
                q && Z.enter(y),
                R && Vt(g, null, A, "mounted");
            }, L);
      }
      return y.nextSibling;
    },
    d = (y, g, A, L, P, V, N) => {
      N = N || !!g.dynamicChildren;
      const E = g.children,
        x = E.length;
      for (let O = 0; O < x; O++) {
        const R = N ? E[O] : (E[O] = Tt(E[O])),
          Z = R.type === Nn;
        y
          ? (Z &&
              !N &&
              O + 1 < x &&
              Tt(E[O + 1]).type === Nn &&
              (l(s(y.data.slice(R.children.length)), A, o(y)),
              (y.data = R.children)),
            (y = f(y, R, L, P, V, N)))
          : Z && !R.children
          ? l((R.el = s("")), A)
          : (uo(A, 1) || mr(), n(null, R, A, null, L, P, lo(A), V));
      }
      return y;
    },
    p = (y, g, A, L, P, V) => {
      const { slotScopeIds: N } = g;
      N && (P = P ? P.concat(N) : N);
      const E = i(y),
        x = d(o(y), g, E, A, L, P, V);
      return x && co(x) && x.data === "]"
        ? o((g.anchor = x))
        : (mr(), l((g.anchor = c("]")), E, x), x);
    },
    m = (y, g, A, L, P, V) => {
      if ((uo(y.parentElement, 1) || mr(), (g.el = null), V)) {
        const x = S(y);
        for (;;) {
          const O = o(y);
          if (O && O !== x) a(O);
          else break;
        }
      }
      const N = o(y),
        E = i(y);
      return (
        a(y),
        n(null, g, E, N, A, L, lo(E), P),
        A && ((A.vnode.el = g.el), ah(A, g.el)),
        N
      );
    },
    S = (y, g = "[", A = "]") => {
      let L = 0;
      for (; y; )
        if (((y = o(y)), y && co(y) && (y.data === g && L++, y.data === A))) {
          if (L === 0) return o(y);
          L--;
        }
      return y;
    },
    b = (y, g, A) => {
      const L = g.parentNode;
      L && L.replaceChild(y, g);
      let P = A;
      for (; P; )
        P.vnode.el === g && (P.vnode.el = P.subTree.el = y), (P = P.parent);
    },
    C = (y) => y.nodeType === 1 && y.tagName === "TEMPLATE";
  return [u, f];
}
const bc = "data-allow-mismatch",
  cy = { 0: "text", 1: "children", 2: "class", 3: "style", 4: "attribute" };
function uo(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(bc); ) e = e.parentElement;
  const n = e && e.getAttribute(bc);
  if (n == null) return !1;
  if (n === "") return !0;
  {
    const r = n.split(",");
    return t === 0 && r.includes("children")
      ? !0
      : n.split(",").includes(cy[t]);
  }
}
ii().requestIdleCallback;
ii().cancelIdleCallback;
const rr = (e) => !!e.type.__asyncLoader,
  di = (e) => e.type.__isKeepAlive;
function Md(e, t) {
  jd(e, "a", t);
}
function $d(e, t) {
  jd(e, "da", t);
}
function jd(e, t, n = rt) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((hi(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      di(s.parent.vnode) && uy(r, t, n, s), (s = s.parent);
  }
}
function uy(e, t, n, r) {
  const s = hi(t, e, r, !0);
  hl(() => {
    el(r[t], s);
  }, n);
}
function hi(e, t, n = rt, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          Fn();
          const a = Js(n),
            l = Dt(t, n, e, i);
          return a(), Hn(), l;
        });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const mn =
    (e) =>
    (t, n = rt) => {
      (!Es || e === "sp") && hi(e, (...r) => t(...r), n);
    },
  fy = mn("bm"),
  kt = mn("m"),
  dy = mn("bu"),
  hy = mn("u"),
  Br = mn("bum"),
  hl = mn("um"),
  py = mn("sp"),
  my = mn("rtg"),
  gy = mn("rtc");
function yy(e, t = rt) {
  hi("ec", e, t);
}
const Fd = "components";
function Ys(e, t) {
  return Ud(Fd, e, !0, t) || e;
}
const Hd = Symbol.for("v-ndc");
function BI(e) {
  return He(e) ? Ud(Fd, e, !1) || e : e || Hd;
}
function Ud(e, t, n = !0, r = !1) {
  const s = Je || rt;
  if (s) {
    const o = s.type;
    {
      const a = Zy(o, !1);
      if (a && (a === t || a === xt(t) || a === oi(xt(t)))) return o;
    }
    const i = _c(s[e] || o[e], t) || _c(s.appContext[e], t);
    return !i && r ? o : i;
  }
}
function _c(e, t) {
  return e && (e[t] || e[xt(t)] || e[oi(xt(t))]);
}
function pi(e, t, n, r) {
  let s;
  const o = n,
    i = oe(e);
  if (i || He(e)) {
    const a = i && cn(e);
    let l = !1;
    a && ((l = !It(e)), (e = ui(e))), (s = new Array(e.length));
    for (let c = 0, u = e.length; c < u; c++)
      s[c] = t(l ? at(e[c]) : e[c], c, void 0, o);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let a = 0; a < e; a++) s[a] = t(a + 1, a, void 0, o);
  } else if (Ae(e))
    if (e[Symbol.iterator]) s = Array.from(e, (a, l) => t(a, l, void 0, o));
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const u = a[l];
        s[l] = t(e[u], u, l, o);
      }
    }
  else s = [];
  return s;
}
function pl(e, t, n = {}, r, s) {
  if (Je.ce || (Je.parent && rr(Je.parent) && Je.parent.ce))
    return ue(), No(Ue, null, [ce("slot", n, r)], 64);
  let o = e[t];
  o && o._c && (o._d = !1), ue();
  const i = o && Vd(o(n)),
    a = n.key || (i && i.key),
    l = No(
      Ue,
      { key: (a && !Nt(a) ? a : `_${t}`) + "" },
      i || [],
      i && e._ === 1 ? 64 : -2
    );
  return o && o._c && (o._d = !0), l;
}
function Vd(e) {
  return e.some((t) =>
    ws(t) ? !(t.type === nt || (t.type === Ue && !Vd(t.children))) : !0
  )
    ? e
    : null;
}
const pa = (e) => (e ? (hh(e) ? gi(e) : pa(e.parent)) : null),
  os = ot(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => pa(e.parent),
    $root: (e) => pa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Wd(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        dl(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Un.bind(e.proxy)),
    $watch: (e) => jy.bind(e),
  }),
  Mi = (e, t) => e !== Ie && !e.__isScriptSetup && Se(e, t),
  vy = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: o,
        accessCache: i,
        type: a,
        appContext: l,
      } = e;
      let c;
      if (t[0] !== "$") {
        const d = i[t];
        if (d !== void 0)
          switch (d) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (Mi(r, t)) return (i[t] = 1), r[t];
          if (s !== Ie && Se(s, t)) return (i[t] = 2), s[t];
          if ((c = e.propsOptions[0]) && Se(c, t)) return (i[t] = 3), o[t];
          if (n !== Ie && Se(n, t)) return (i[t] = 4), n[t];
          ma && (i[t] = 0);
        }
      }
      const u = os[t];
      let f, h;
      if (u) return t === "$attrs" && it(e.attrs, "get", ""), u(e);
      if ((f = a.__cssModules) && (f = f[t])) return f;
      if (n !== Ie && Se(n, t)) return (i[t] = 4), n[t];
      if (((h = l.config.globalProperties), Se(h, t))) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e;
      return Mi(s, t)
        ? ((s[t] = n), !0)
        : r !== Ie && Se(r, t)
        ? ((r[t] = n), !0)
        : Se(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: o,
        },
      },
      i
    ) {
      let a;
      return (
        !!n[i] ||
        (e !== Ie && Se(e, i)) ||
        Mi(t, i) ||
        ((a = o[0]) && Se(a, i)) ||
        Se(r, i) ||
        Se(os, i) ||
        Se(s.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Se(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function wc(e) {
  return oe(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let ma = !0;
function by(e) {
  const t = Wd(e),
    n = e.proxy,
    r = e.ctx;
  (ma = !1), t.beforeCreate && Ec(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: o,
    methods: i,
    watch: a,
    provide: l,
    inject: c,
    created: u,
    beforeMount: f,
    mounted: h,
    beforeUpdate: d,
    updated: p,
    activated: m,
    deactivated: S,
    beforeDestroy: b,
    beforeUnmount: C,
    destroyed: y,
    unmounted: g,
    render: A,
    renderTracked: L,
    renderTriggered: P,
    errorCaptured: V,
    serverPrefetch: N,
    expose: E,
    inheritAttrs: x,
    components: O,
    directives: R,
    filters: Z,
  } = t;
  if ((c && _y(c, r, null), i))
    for (const ee in i) {
      const X = i[ee];
      ae(X) && (r[ee] = X.bind(n));
    }
  if (s) {
    const ee = s.call(n, n);
    Ae(ee) && (e.data = fr(ee));
  }
  if (((ma = !0), o))
    for (const ee in o) {
      const X = o[ee],
        le = ae(X) ? X.bind(n, n) : ae(X.get) ? X.get.bind(n, n) : Wt,
        Re = !ae(X) && ae(X.set) ? X.set.bind(n) : Wt,
        $e = ye({ get: le, set: Re });
      Object.defineProperty(r, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => $e.value,
        set: (xe) => ($e.value = xe),
      });
    }
  if (a) for (const ee in a) Bd(a[ee], r, n, ee);
  if (l) {
    const ee = ae(l) ? l.call(n) : l;
    Reflect.ownKeys(ee).forEach((X) => {
      Ln(X, ee[X]);
    });
  }
  u && Ec(u, e, "c");
  function q(ee, X) {
    oe(X) ? X.forEach((le) => ee(le.bind(n))) : X && ee(X.bind(n));
  }
  if (
    (q(fy, f),
    q(kt, h),
    q(dy, d),
    q(hy, p),
    q(Md, m),
    q($d, S),
    q(yy, V),
    q(gy, L),
    q(my, P),
    q(Br, C),
    q(hl, g),
    q(py, N),
    oe(E))
  )
    if (E.length) {
      const ee = e.exposed || (e.exposed = {});
      E.forEach((X) => {
        Object.defineProperty(ee, X, {
          get: () => n[X],
          set: (le) => (n[X] = le),
        });
      });
    } else e.exposed || (e.exposed = {});
  A && e.render === Wt && (e.render = A),
    x != null && (e.inheritAttrs = x),
    O && (e.components = O),
    R && (e.directives = R),
    N && Dd(e);
}
function _y(e, t, n = Wt) {
  oe(e) && (e = ga(e));
  for (const r in e) {
    const s = e[r];
    let o;
    Ae(s)
      ? "default" in s
        ? (o = ze(s.from || r, s.default, !0))
        : (o = ze(s.from || r))
      : (o = ze(s)),
      Ne(o)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[r] = o);
  }
}
function Ec(e, t, n) {
  Dt(oe(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Bd(e, t, n, r) {
  let s = r.includes(".") ? oh(n, r) : () => n[r];
  if (He(e)) {
    const o = t[e];
    ae(o) && Pe(s, o);
  } else if (ae(e)) Pe(s, e.bind(n));
  else if (Ae(e))
    if (oe(e)) e.forEach((o) => Bd(o, t, n, r));
    else {
      const o = ae(e.handler) ? e.handler.bind(n) : t[e.handler];
      ae(o) && Pe(s, o, e);
    }
}
function Wd(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    a = o.get(t);
  let l;
  return (
    a
      ? (l = a)
      : !s.length && !n && !r
      ? (l = t)
      : ((l = {}), s.length && s.forEach((c) => Lo(l, c, i, !0)), Lo(l, t, i)),
    Ae(t) && o.set(t, l),
    l
  );
}
function Lo(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && Lo(e, o, n, !0), s && s.forEach((i) => Lo(e, i, n, !0));
  for (const i in t)
    if (!(r && i === "expose")) {
      const a = wy[i] || (n && n[i]);
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const wy = {
  data: Sc,
  props: Cc,
  emits: Cc,
  methods: ts,
  computed: ts,
  beforeCreate: ut,
  created: ut,
  beforeMount: ut,
  mounted: ut,
  beforeUpdate: ut,
  updated: ut,
  beforeDestroy: ut,
  beforeUnmount: ut,
  destroyed: ut,
  unmounted: ut,
  activated: ut,
  deactivated: ut,
  errorCaptured: ut,
  serverPrefetch: ut,
  components: ts,
  directives: ts,
  watch: Sy,
  provide: Sc,
  inject: Ey,
};
function Sc(e, t) {
  return t
    ? e
      ? function () {
          return ot(
            ae(e) ? e.call(this, this) : e,
            ae(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Ey(e, t) {
  return ts(ga(e), ga(t));
}
function ga(e) {
  if (oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ut(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ts(e, t) {
  return e ? ot(Object.create(null), e, t) : t;
}
function Cc(e, t) {
  return e
    ? oe(e) && oe(t)
      ? [...new Set([...e, ...t])]
      : ot(Object.create(null), wc(e), wc(t ?? {}))
    : t;
}
function Sy(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ot(Object.create(null), e);
  for (const r in t) n[r] = ut(e[r], t[r]);
  return n;
}
function qd() {
  return {
    app: null,
    config: {
      isNativeTag: lg,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Cy = 0;
function Ty(e, t) {
  return function (r, s = null) {
    ae(r) || (r = ot({}, r)), s != null && !Ae(s) && (s = null);
    const o = qd(),
      i = new WeakSet(),
      a = [];
    let l = !1;
    const c = (o.app = {
      _uid: Cy++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: mh,
      get config() {
        return o.config;
      },
      set config(u) {},
      use(u, ...f) {
        return (
          i.has(u) ||
            (u && ae(u.install)
              ? (i.add(u), u.install(c, ...f))
              : ae(u) && (i.add(u), u(c, ...f))),
          c
        );
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), c;
      },
      component(u, f) {
        return f ? ((o.components[u] = f), c) : o.components[u];
      },
      directive(u, f) {
        return f ? ((o.directives[u] = f), c) : o.directives[u];
      },
      mount(u, f, h) {
        if (!l) {
          const d = c._ceVNode || ce(r, s);
          return (
            (d.appContext = o),
            h === !0 ? (h = "svg") : h === !1 && (h = void 0),
            f && t ? t(d, u) : e(d, u, h),
            (l = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            gi(d.component)
          );
        }
      },
      onUnmount(u) {
        a.push(u);
      },
      unmount() {
        l &&
          (Dt(a, c._instance, 16),
          e(null, c._container),
          delete c._container.__vue_app__);
      },
      provide(u, f) {
        return (o.provides[u] = f), c;
      },
      runWithContext(u) {
        const f = sr;
        sr = c;
        try {
          return u();
        } finally {
          sr = f;
        }
      },
    });
    return c;
  };
}
let sr = null;
function Ln(e, t) {
  if (rt) {
    let n = rt.provides;
    const r = rt.parent && rt.parent.provides;
    r === n && (n = rt.provides = Object.create(r)), (n[e] = t);
  }
}
function ze(e, t, n = !1) {
  const r = rt || Je;
  if (r || sr) {
    const s = sr
      ? sr._context.provides
      : r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && ae(t) ? t.call(r && r.proxy) : t;
  }
}
function Oy() {
  return !!(rt || Je || sr);
}
const Kd = {},
  Gd = () => Object.create(Kd),
  zd = (e) => Object.getPrototypeOf(e) === Kd;
function Ay(e, t, n, r = !1) {
  const s = {},
    o = Gd();
  (e.propsDefaults = Object.create(null)), Yd(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? (e.props = r ? s : wd(s)) : e.type.props ? (e.props = s) : (e.props = o),
    (e.attrs = o);
}
function Iy(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    a = be(s),
    [l] = e.propsOptions;
  let c = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let h = u[f];
        if (mi(e.emitsOptions, h)) continue;
        const d = t[h];
        if (l)
          if (Se(o, h)) d !== o[h] && ((o[h] = d), (c = !0));
          else {
            const p = xt(h);
            s[p] = ya(l, a, p, d, e, !1);
          }
        else d !== o[h] && ((o[h] = d), (c = !0));
      }
    }
  } else {
    Yd(e, t, s, o) && (c = !0);
    let u;
    for (const f in a)
      (!t || (!Se(t, f) && ((u = ur(f)) === f || !Se(t, u)))) &&
        (l
          ? n &&
            (n[f] !== void 0 || n[u] !== void 0) &&
            (s[f] = ya(l, a, f, void 0, e, !0))
          : delete s[f]);
    if (o !== a)
      for (const f in o) (!t || !Se(t, f)) && (delete o[f], (c = !0));
  }
  c && rn(e.attrs, "set", "");
}
function Yd(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1,
    a;
  if (t)
    for (let l in t) {
      if (Tr(l)) continue;
      const c = t[l];
      let u;
      s && Se(s, (u = xt(l)))
        ? !o || !o.includes(u)
          ? (n[u] = c)
          : ((a || (a = {}))[u] = c)
        : mi(e.emitsOptions, l) ||
          ((!(l in r) || c !== r[l]) && ((r[l] = c), (i = !0)));
    }
  if (o) {
    const l = be(n),
      c = a || Ie;
    for (let u = 0; u < o.length; u++) {
      const f = o[u];
      n[f] = ya(s, l, f, c[f], e, !Se(c, f));
    }
  }
  return i;
}
function ya(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const a = Se(i, "default");
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && ae(l)) {
        const { propsDefaults: c } = s;
        if (n in c) r = c[n];
        else {
          const u = Js(s);
          (r = c[n] = l.call(null, t)), u();
        }
      } else r = l;
      s.ce && s.ce._setProp(n, r);
    }
    i[0] &&
      (o && !a ? (r = !1) : i[1] && (r === "" || r === ur(n)) && (r = !0));
  }
  return r;
}
const xy = new WeakMap();
function Jd(e, t, n = !1) {
  const r = n ? xy : t.propsCache,
    s = r.get(e);
  if (s) return s;
  const o = e.props,
    i = {},
    a = [];
  let l = !1;
  if (!ae(e)) {
    const u = (f) => {
      l = !0;
      const [h, d] = Jd(f, t, !0);
      ot(i, h), d && a.push(...d);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!o && !l) return Ae(e) && r.set(e, Sr), Sr;
  if (oe(o))
    for (let u = 0; u < o.length; u++) {
      const f = xt(o[u]);
      Tc(f) && (i[f] = Ie);
    }
  else if (o)
    for (const u in o) {
      const f = xt(u);
      if (Tc(f)) {
        const h = o[u],
          d = (i[f] = oe(h) || ae(h) ? { type: h } : ot({}, h)),
          p = d.type;
        let m = !1,
          S = !0;
        if (oe(p))
          for (let b = 0; b < p.length; ++b) {
            const C = p[b],
              y = ae(C) && C.name;
            if (y === "Boolean") {
              m = !0;
              break;
            } else y === "String" && (S = !1);
          }
        else m = ae(p) && p.name === "Boolean";
        (d[0] = m), (d[1] = S), (m || Se(d, "default")) && a.push(f);
      }
    }
  const c = [i, a];
  return Ae(e) && r.set(e, c), c;
}
function Tc(e) {
  return e[0] !== "$" && !Tr(e);
}
const Xd = (e) => e[0] === "_" || e === "$stable",
  ml = (e) => (oe(e) ? e.map(Tt) : [Tt(e)]),
  ky = (e, t, n) => {
    if (t._n) return t;
    const r = bt((...s) => ml(t(...s)), n);
    return (r._c = !1), r;
  },
  Qd = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (Xd(s)) continue;
      const o = e[s];
      if (ae(o)) t[s] = ky(s, o, r);
      else if (o != null) {
        const i = ml(o);
        t[s] = () => i;
      }
    }
  },
  Zd = (e, t) => {
    const n = ml(t);
    e.slots.default = () => n;
  },
  eh = (e, t, n) => {
    for (const r in t) (n || r !== "_") && (e[r] = t[r]);
  },
  Py = (e, t, n) => {
    const r = (e.slots = Gd());
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (eh(r, t, n), n && td(r, "_", s, !0)) : Qd(t, r);
    } else t && Zd(e, t);
  },
  Ry = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let o = !0,
      i = Ie;
    if (r.shapeFlag & 32) {
      const a = t._;
      a
        ? n && a === 1
          ? (o = !1)
          : eh(s, t, n)
        : ((o = !t.$stable), Qd(t, s)),
        (i = t);
    } else t && (Zd(e, t), (i = { default: 1 }));
    if (o) for (const a in s) !Xd(a) && i[a] == null && delete s[a];
  },
  vt = ch;
function Ly(e) {
  return th(e);
}
function Ny(e) {
  return th(e, ly);
}
function th(e, t) {
  const n = ii();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: o,
      createElement: i,
      createText: a,
      createComment: l,
      setText: c,
      setElementText: u,
      parentNode: f,
      nextSibling: h,
      setScopeId: d = Wt,
      insertStaticContent: p,
    } = e,
    m = (
      _,
      T,
      D,
      W = null,
      F = null,
      v = null,
      w = void 0,
      k = null,
      $ = !!T.dynamicChildren
    ) => {
      if (_ === T) return;
      _ && !Xn(_, T) && ((W = H(_)), xe(_, F, v, !0), (_ = null)),
        T.patchFlag === -2 && (($ = !1), (T.dynamicChildren = null));
      const { type: U, ref: K, shapeFlag: I } = T;
      switch (U) {
        case Nn:
          S(_, T, D, W);
          break;
        case nt:
          b(_, T, D, W);
          break;
        case wo:
          _ == null && C(T, D, W, w);
          break;
        case Ue:
          O(_, T, D, W, F, v, w, k, $);
          break;
        default:
          I & 1
            ? A(_, T, D, W, F, v, w, k, $)
            : I & 6
            ? R(_, T, D, W, F, v, w, k, $)
            : (I & 64 || I & 128) && U.process(_, T, D, W, F, v, w, k, $, ne);
      }
      K != null && F && bs(K, _ && _.ref, v, T || _, !T);
    },
    S = (_, T, D, W) => {
      if (_ == null) r((T.el = a(T.children)), D, W);
      else {
        const F = (T.el = _.el);
        T.children !== _.children && c(F, T.children);
      }
    },
    b = (_, T, D, W) => {
      _ == null ? r((T.el = l(T.children || "")), D, W) : (T.el = _.el);
    },
    C = (_, T, D, W) => {
      [_.el, _.anchor] = p(_.children, T, D, W, _.el, _.anchor);
    },
    y = ({ el: _, anchor: T }, D, W) => {
      let F;
      for (; _ && _ !== T; ) (F = h(_)), r(_, D, W), (_ = F);
      r(T, D, W);
    },
    g = ({ el: _, anchor: T }) => {
      let D;
      for (; _ && _ !== T; ) (D = h(_)), s(_), (_ = D);
      s(T);
    },
    A = (_, T, D, W, F, v, w, k, $) => {
      T.type === "svg" ? (w = "svg") : T.type === "math" && (w = "mathml"),
        _ == null ? L(T, D, W, F, v, w, k, $) : N(_, T, F, v, w, k, $);
    },
    L = (_, T, D, W, F, v, w, k) => {
      let $, U;
      const { props: K, shapeFlag: I, transition: M, dirs: J } = _;
      if (
        (($ = _.el = i(_.type, v, K && K.is, K)),
        I & 8
          ? u($, _.children)
          : I & 16 && V(_.children, $, null, W, F, $i(_, v), w, k),
        J && Vt(_, null, W, "created"),
        P($, _, _.scopeId, w, W),
        K)
      ) {
        for (const he in K)
          he !== "value" && !Tr(he) && o($, he, null, K[he], v, W);
        "value" in K && o($, "value", null, K.value, v),
          (U = K.onVnodeBeforeMount) && Ct(U, W, _);
      }
      J && Vt(_, null, W, "beforeMount");
      const se = nh(F, M);
      se && M.beforeEnter($),
        r($, T, D),
        ((U = K && K.onVnodeMounted) || se || J) &&
          vt(() => {
            U && Ct(U, W, _), se && M.enter($), J && Vt(_, null, W, "mounted");
          }, F);
    },
    P = (_, T, D, W, F) => {
      if ((D && d(_, D), W)) for (let v = 0; v < W.length; v++) d(_, W[v]);
      if (F) {
        let v = F.subTree;
        if (
          T === v ||
          (lh(v.type) && (v.ssContent === T || v.ssFallback === T))
        ) {
          const w = F.vnode;
          P(_, w, w.scopeId, w.slotScopeIds, F.parent);
        }
      }
    },
    V = (_, T, D, W, F, v, w, k, $ = 0) => {
      for (let U = $; U < _.length; U++) {
        const K = (_[U] = k ? Sn(_[U]) : Tt(_[U]));
        m(null, K, T, D, W, F, v, w, k);
      }
    },
    N = (_, T, D, W, F, v, w) => {
      const k = (T.el = _.el);
      let { patchFlag: $, dynamicChildren: U, dirs: K } = T;
      $ |= _.patchFlag & 16;
      const I = _.props || Ie,
        M = T.props || Ie;
      let J;
      if (
        (D && Kn(D, !1),
        (J = M.onVnodeBeforeUpdate) && Ct(J, D, T, _),
        K && Vt(T, _, D, "beforeUpdate"),
        D && Kn(D, !0),
        ((I.innerHTML && M.innerHTML == null) ||
          (I.textContent && M.textContent == null)) &&
          u(k, ""),
        U
          ? E(_.dynamicChildren, U, k, D, W, $i(T, F), v)
          : w || X(_, T, k, null, D, W, $i(T, F), v, !1),
        $ > 0)
      ) {
        if ($ & 16) x(k, I, M, D, F);
        else if (
          ($ & 2 && I.class !== M.class && o(k, "class", null, M.class, F),
          $ & 4 && o(k, "style", I.style, M.style, F),
          $ & 8)
        ) {
          const se = T.dynamicProps;
          for (let he = 0; he < se.length; he++) {
            const pe = se[he],
              qe = I[pe],
              et = M[pe];
            (et !== qe || pe === "value") && o(k, pe, qe, et, F, D);
          }
        }
        $ & 1 && _.children !== T.children && u(k, T.children);
      } else !w && U == null && x(k, I, M, D, F);
      ((J = M.onVnodeUpdated) || K) &&
        vt(() => {
          J && Ct(J, D, T, _), K && Vt(T, _, D, "updated");
        }, W);
    },
    E = (_, T, D, W, F, v, w) => {
      for (let k = 0; k < T.length; k++) {
        const $ = _[k],
          U = T[k],
          K =
            $.el && ($.type === Ue || !Xn($, U) || $.shapeFlag & 70)
              ? f($.el)
              : D;
        m($, U, K, null, W, F, v, w, !0);
      }
    },
    x = (_, T, D, W, F) => {
      if (T !== D) {
        if (T !== Ie)
          for (const v in T) !Tr(v) && !(v in D) && o(_, v, T[v], null, F, W);
        for (const v in D) {
          if (Tr(v)) continue;
          const w = D[v],
            k = T[v];
          w !== k && v !== "value" && o(_, v, k, w, F, W);
        }
        "value" in D && o(_, "value", T.value, D.value, F);
      }
    },
    O = (_, T, D, W, F, v, w, k, $) => {
      const U = (T.el = _ ? _.el : a("")),
        K = (T.anchor = _ ? _.anchor : a(""));
      let { patchFlag: I, dynamicChildren: M, slotScopeIds: J } = T;
      J && (k = k ? k.concat(J) : J),
        _ == null
          ? (r(U, D, W), r(K, D, W), V(T.children || [], D, K, F, v, w, k, $))
          : I > 0 && I & 64 && M && _.dynamicChildren
          ? (E(_.dynamicChildren, M, D, F, v, w, k),
            (T.key != null || (F && T === F.subTree)) && rh(_, T, !0))
          : X(_, T, D, K, F, v, w, k, $);
    },
    R = (_, T, D, W, F, v, w, k, $) => {
      (T.slotScopeIds = k),
        _ == null
          ? T.shapeFlag & 512
            ? F.ctx.activate(T, D, W, w, $)
            : Z(T, D, W, F, v, w, $)
          : G(_, T, $);
    },
    Z = (_, T, D, W, F, v, w) => {
      const k = (_.component = zy(_, W, F));
      if ((di(_) && (k.ctx.renderer = ne), Yy(k, !1, w), k.asyncDep)) {
        if ((F && F.registerDep(k, q, w), !_.el)) {
          const $ = (k.subTree = ce(nt));
          b(null, $, T, D);
        }
      } else q(k, _, T, D, F, v, w);
    },
    G = (_, T, D) => {
      const W = (T.component = _.component);
      if (By(_, T, D))
        if (W.asyncDep && !W.asyncResolved) {
          ee(W, T, D);
          return;
        } else (W.next = T), W.update();
      else (T.el = _.el), (W.vnode = T);
    },
    q = (_, T, D, W, F, v, w) => {
      const k = () => {
        if (_.isMounted) {
          let { next: I, bu: M, u: J, parent: se, vnode: he } = _;
          {
            const gt = sh(_);
            if (gt) {
              I && ((I.el = he.el), ee(_, I, w)),
                gt.asyncDep.then(() => {
                  _.isUnmounted || k();
                });
              return;
            }
          }
          let pe = I,
            qe;
          Kn(_, !1),
            I ? ((I.el = he.el), ee(_, I, w)) : (I = he),
            M && _o(M),
            (qe = I.props && I.props.onVnodeBeforeUpdate) && Ct(qe, se, I, he),
            Kn(_, !0);
          const et = ji(_),
            Et = _.subTree;
          (_.subTree = et),
            m(Et, et, f(Et.el), H(Et), _, F, v),
            (I.el = et.el),
            pe === null && ah(_, et.el),
            J && vt(J, F),
            (qe = I.props && I.props.onVnodeUpdated) &&
              vt(() => Ct(qe, se, I, he), F);
        } else {
          let I;
          const { el: M, props: J } = T,
            { bm: se, m: he, parent: pe, root: qe, type: et } = _,
            Et = rr(T);
          if (
            (Kn(_, !1),
            se && _o(se),
            !Et && (I = J && J.onVnodeBeforeMount) && Ct(I, pe, T),
            Kn(_, !0),
            M && Te)
          ) {
            const gt = () => {
              (_.subTree = ji(_)), Te(M, _.subTree, _, F, null);
            };
            Et && et.__asyncHydrate ? et.__asyncHydrate(M, _, gt) : gt();
          } else {
            qe.ce && qe.ce._injectChildStyle(et);
            const gt = (_.subTree = ji(_));
            m(null, gt, D, W, _, F, v), (T.el = gt.el);
          }
          if ((he && vt(he, F), !Et && (I = J && J.onVnodeMounted))) {
            const gt = T;
            vt(() => Ct(I, pe, gt), F);
          }
          (T.shapeFlag & 256 ||
            (pe && rr(pe.vnode) && pe.vnode.shapeFlag & 256)) &&
            _.a &&
            vt(_.a, F),
            (_.isMounted = !0),
            (T = D = W = null);
        }
      };
      _.scope.on();
      const $ = (_.effect = new ad(k));
      _.scope.off();
      const U = (_.update = $.run.bind($)),
        K = (_.job = $.runIfDirty.bind($));
      (K.i = _), (K.id = _.uid), ($.scheduler = () => dl(K)), Kn(_, !0), U();
    },
    ee = (_, T, D) => {
      T.component = _;
      const W = _.vnode.props;
      (_.vnode = T),
        (_.next = null),
        Iy(_, T.props, W, D),
        Ry(_, T.children, D),
        Fn(),
        gc(_),
        Hn();
    },
    X = (_, T, D, W, F, v, w, k, $ = !1) => {
      const U = _ && _.children,
        K = _ ? _.shapeFlag : 0,
        I = T.children,
        { patchFlag: M, shapeFlag: J } = T;
      if (M > 0) {
        if (M & 128) {
          Re(U, I, D, W, F, v, w, k, $);
          return;
        } else if (M & 256) {
          le(U, I, D, W, F, v, w, k, $);
          return;
        }
      }
      J & 8
        ? (K & 16 && Ze(U, F, v), I !== U && u(D, I))
        : K & 16
        ? J & 16
          ? Re(U, I, D, W, F, v, w, k, $)
          : Ze(U, F, v, !0)
        : (K & 8 && u(D, ""), J & 16 && V(I, D, W, F, v, w, k, $));
    },
    le = (_, T, D, W, F, v, w, k, $) => {
      (_ = _ || Sr), (T = T || Sr);
      const U = _.length,
        K = T.length,
        I = Math.min(U, K);
      let M;
      for (M = 0; M < I; M++) {
        const J = (T[M] = $ ? Sn(T[M]) : Tt(T[M]));
        m(_[M], J, D, null, F, v, w, k, $);
      }
      U > K ? Ze(_, F, v, !0, !1, I) : V(T, D, W, F, v, w, k, $, I);
    },
    Re = (_, T, D, W, F, v, w, k, $) => {
      let U = 0;
      const K = T.length;
      let I = _.length - 1,
        M = K - 1;
      for (; U <= I && U <= M; ) {
        const J = _[U],
          se = (T[U] = $ ? Sn(T[U]) : Tt(T[U]));
        if (Xn(J, se)) m(J, se, D, null, F, v, w, k, $);
        else break;
        U++;
      }
      for (; U <= I && U <= M; ) {
        const J = _[I],
          se = (T[M] = $ ? Sn(T[M]) : Tt(T[M]));
        if (Xn(J, se)) m(J, se, D, null, F, v, w, k, $);
        else break;
        I--, M--;
      }
      if (U > I) {
        if (U <= M) {
          const J = M + 1,
            se = J < K ? T[J].el : W;
          for (; U <= M; )
            m(null, (T[U] = $ ? Sn(T[U]) : Tt(T[U])), D, se, F, v, w, k, $),
              U++;
        }
      } else if (U > M) for (; U <= I; ) xe(_[U], F, v, !0), U++;
      else {
        const J = U,
          se = U,
          he = new Map();
        for (U = se; U <= M; U++) {
          const yt = (T[U] = $ ? Sn(T[U]) : Tt(T[U]));
          yt.key != null && he.set(yt.key, U);
        }
        let pe,
          qe = 0;
        const et = M - se + 1;
        let Et = !1,
          gt = 0;
        const zr = new Array(et);
        for (U = 0; U < et; U++) zr[U] = 0;
        for (U = J; U <= I; U++) {
          const yt = _[U];
          if (qe >= et) {
            xe(yt, F, v, !0);
            continue;
          }
          let Ft;
          if (yt.key != null) Ft = he.get(yt.key);
          else
            for (pe = se; pe <= M; pe++)
              if (zr[pe - se] === 0 && Xn(yt, T[pe])) {
                Ft = pe;
                break;
              }
          Ft === void 0
            ? xe(yt, F, v, !0)
            : ((zr[Ft - se] = U + 1),
              Ft >= gt ? (gt = Ft) : (Et = !0),
              m(yt, T[Ft], D, null, F, v, w, k, $),
              qe++);
        }
        const ac = Et ? Dy(zr) : Sr;
        for (pe = ac.length - 1, U = et - 1; U >= 0; U--) {
          const yt = se + U,
            Ft = T[yt],
            lc = yt + 1 < K ? T[yt + 1].el : W;
          zr[U] === 0
            ? m(null, Ft, D, lc, F, v, w, k, $)
            : Et && (pe < 0 || U !== ac[pe] ? $e(Ft, D, lc, 2) : pe--);
        }
      }
    },
    $e = (_, T, D, W, F = null) => {
      const { el: v, type: w, transition: k, children: $, shapeFlag: U } = _;
      if (U & 6) {
        $e(_.component.subTree, T, D, W);
        return;
      }
      if (U & 128) {
        _.suspense.move(T, D, W);
        return;
      }
      if (U & 64) {
        w.move(_, T, D, ne);
        return;
      }
      if (w === Ue) {
        r(v, T, D);
        for (let I = 0; I < $.length; I++) $e($[I], T, D, W);
        r(_.anchor, T, D);
        return;
      }
      if (w === wo) {
        y(_, T, D);
        return;
      }
      if (W !== 2 && U & 1 && k)
        if (W === 0) k.beforeEnter(v), r(v, T, D), vt(() => k.enter(v), F);
        else {
          const { leave: I, delayLeave: M, afterLeave: J } = k,
            se = () => r(v, T, D),
            he = () => {
              I(v, () => {
                se(), J && J();
              });
            };
          M ? M(v, se, he) : he();
        }
      else r(v, T, D);
    },
    xe = (_, T, D, W = !1, F = !1) => {
      const {
        type: v,
        props: w,
        ref: k,
        children: $,
        dynamicChildren: U,
        shapeFlag: K,
        patchFlag: I,
        dirs: M,
        cacheIndex: J,
      } = _;
      if (
        (I === -2 && (F = !1),
        k != null && bs(k, null, D, _, !0),
        J != null && (T.renderCache[J] = void 0),
        K & 256)
      ) {
        T.ctx.deactivate(_);
        return;
      }
      const se = K & 1 && M,
        he = !rr(_);
      let pe;
      if ((he && (pe = w && w.onVnodeBeforeUnmount) && Ct(pe, T, _), K & 6))
        wt(_.component, D, W);
      else {
        if (K & 128) {
          _.suspense.unmount(D, W);
          return;
        }
        se && Vt(_, null, T, "beforeUnmount"),
          K & 64
            ? _.type.remove(_, T, D, ne, W)
            : U && !U.hasOnce && (v !== Ue || (I > 0 && I & 64))
            ? Ze(U, T, D, !1, !0)
            : ((v === Ue && I & 384) || (!F && K & 16)) && Ze($, T, D),
          W && Be(_);
      }
      ((he && (pe = w && w.onVnodeUnmounted)) || se) &&
        vt(() => {
          pe && Ct(pe, T, _), se && Vt(_, null, T, "unmounted");
        }, D);
    },
    Be = (_) => {
      const { type: T, el: D, anchor: W, transition: F } = _;
      if (T === Ue) {
        Qe(D, W);
        return;
      }
      if (T === wo) {
        g(_);
        return;
      }
      const v = () => {
        s(D), F && !F.persisted && F.afterLeave && F.afterLeave();
      };
      if (_.shapeFlag & 1 && F && !F.persisted) {
        const { leave: w, delayLeave: k } = F,
          $ = () => w(D, v);
        k ? k(_.el, v, $) : $();
      } else v();
    },
    Qe = (_, T) => {
      let D;
      for (; _ !== T; ) (D = h(_)), s(_), (_ = D);
      s(T);
    },
    wt = (_, T, D) => {
      const { bum: W, scope: F, job: v, subTree: w, um: k, m: $, a: U } = _;
      Oc($),
        Oc(U),
        W && _o(W),
        F.stop(),
        v && ((v.flags |= 8), xe(w, _, T, D)),
        k && vt(k, T),
        vt(() => {
          _.isUnmounted = !0;
        }, T),
        T &&
          T.pendingBranch &&
          !T.isUnmounted &&
          _.asyncDep &&
          !_.asyncResolved &&
          _.suspenseId === T.pendingId &&
          (T.deps--, T.deps === 0 && T.resolve());
    },
    Ze = (_, T, D, W = !1, F = !1, v = 0) => {
      for (let w = v; w < _.length; w++) xe(_[w], T, D, W, F);
    },
    H = (_) => {
      if (_.shapeFlag & 6) return H(_.component.subTree);
      if (_.shapeFlag & 128) return _.suspense.next();
      const T = h(_.anchor || _.el),
        D = T && T[ny];
      return D ? h(D) : T;
    };
  let z = !1;
  const Y = (_, T, D) => {
      _ == null
        ? T._vnode && xe(T._vnode, null, null, !0)
        : m(T._vnode || null, _, T, null, null, null, D),
        (T._vnode = _),
        z || ((z = !0), gc(), Po(), (z = !1));
    },
    ne = {
      p: m,
      um: xe,
      m: $e,
      r: Be,
      mt: Z,
      mc: V,
      pc: X,
      pbc: E,
      n: H,
      o: e,
    };
  let de, Te;
  return (
    t && ([de, Te] = t(ne)), { render: Y, hydrate: de, createApp: Ty(Y, de) }
  );
}
function $i({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function Kn({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function nh(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function rh(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (oe(r) && oe(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let a = s[o];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = s[o] = Sn(s[o])), (a.el = i.el)),
        !n && a.patchFlag !== -2 && rh(i, a)),
        a.type === Nn && (a.el = i.el);
    }
}
function Dy(e) {
  const t = e.slice(),
    n = [0];
  let r, s, o, i, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const c = e[r];
    if (c !== 0) {
      if (((s = n[n.length - 1]), e[s] < c)) {
        (t[r] = s), n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (a = (o + i) >> 1), e[n[a]] < c ? (o = a + 1) : (i = a);
      c < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
function sh(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : sh(t);
}
function Oc(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const My = Symbol.for("v-scx"),
  $y = () => ze(My);
function gl(e, t) {
  return yl(e, null, t);
}
function Pe(e, t, n) {
  return yl(e, t, n);
}
function yl(e, t, n = Ie) {
  const { immediate: r, deep: s, flush: o, once: i } = n,
    a = ot({}, n),
    l = (t && r) || (!t && o !== "post");
  let c;
  if (Es) {
    if (o === "sync") {
      const d = $y();
      c = d.__watcherHandles || (d.__watcherHandles = []);
    } else if (!l) {
      const d = () => {};
      return (d.stop = Wt), (d.resume = Wt), (d.pause = Wt), d;
    }
  }
  const u = rt;
  a.call = (d, p, m) => Dt(d, u, p, m);
  let f = !1;
  o === "post"
    ? (a.scheduler = (d) => {
        vt(d, u && u.suspense);
      })
    : o !== "sync" &&
      ((f = !0),
      (a.scheduler = (d, p) => {
        p ? d() : dl(d);
      })),
    (a.augmentJob = (d) => {
      t && (d.flags |= 4),
        f && ((d.flags |= 2), u && ((d.id = u.uid), (d.i = u)));
    });
  const h = Qg(e, t, a);
  return Es && (c ? c.push(h) : l && h()), h;
}
function jy(e, t, n) {
  const r = this.proxy,
    s = He(e) ? (e.includes(".") ? oh(r, e) : () => r[e]) : e.bind(r, r);
  let o;
  ae(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = Js(this),
    a = yl(s, o.bind(r), n);
  return i(), a;
}
function oh(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
const Fy = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${xt(t)}Modifiers`] || e[`${ur(t)}Modifiers`];
function Hy(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Ie;
  let s = n;
  const o = t.startsWith("update:"),
    i = o && Fy(r, t.slice(7));
  i &&
    (i.trim && (s = n.map((u) => (He(u) ? u.trim() : u))),
    i.number && (s = n.map(Ao)));
  let a,
    l = r[(a = ki(t))] || r[(a = ki(xt(t)))];
  !l && o && (l = r[(a = ki(ur(t)))]), l && Dt(l, e, 6, s);
  const c = r[a + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), Dt(c, e, 6, s);
  }
}
function ih(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {},
    a = !1;
  if (!ae(e)) {
    const l = (c) => {
      const u = ih(c, t, !0);
      u && ((a = !0), ot(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !o && !a
    ? (Ae(e) && r.set(e, null), null)
    : (oe(o) ? o.forEach((l) => (i[l] = null)) : ot(i, o),
      Ae(e) && r.set(e, i),
      i);
}
function mi(e, t) {
  return !e || !qs(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Se(e, t[0].toLowerCase() + t.slice(1)) || Se(e, ur(t)) || Se(e, t));
}
function ji(e) {
  const {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: s,
      propsOptions: [o],
      slots: i,
      attrs: a,
      emit: l,
      render: c,
      renderCache: u,
      props: f,
      data: h,
      setupState: d,
      ctx: p,
      inheritAttrs: m,
    } = e,
    S = Ro(e);
  let b, C;
  try {
    if (n.shapeFlag & 4) {
      const g = s || r,
        A = g;
      (b = Tt(c.call(A, g, u, f, d, h, p))), (C = a);
    } else {
      const g = t;
      (b = Tt(
        g.length > 1 ? g(f, { attrs: a, slots: i, emit: l }) : g(f, null)
      )),
        (C = t.props ? a : Uy(a));
    }
  } catch (g) {
    (is.length = 0), fi(g, e, 1), (b = ce(nt));
  }
  let y = b;
  if (C && m !== !1) {
    const g = Object.keys(C),
      { shapeFlag: A } = y;
    g.length &&
      A & 7 &&
      (o && g.some(Za) && (C = Vy(C, o)), (y = $n(y, C, !1, !0)));
  }
  return (
    n.dirs &&
      ((y = $n(y, null, !1, !0)),
      (y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs)),
    n.transition && vs(y, n.transition),
    (b = y),
    Ro(S),
    b
  );
}
const Uy = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || qs(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Vy = (e, t) => {
    const n = {};
    for (const r in e) (!Za(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function By(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: i, children: a, patchFlag: l } = t,
    c = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? Ac(r, i, c) : !!i;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        if (i[h] !== r[h] && !mi(c, h)) return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable)
      ? !0
      : r === i
      ? !1
      : r
      ? i
        ? Ac(r, i, c)
        : !0
      : !!i;
  return !1;
}
function Ac(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !mi(n, o)) return !0;
  }
  return !1;
}
function ah({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const lh = (e) => e.__isSuspense;
function ch(e, t) {
  t && t.pendingBranch
    ? oe(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : ty(e);
}
const Ue = Symbol.for("v-fgt"),
  Nn = Symbol.for("v-txt"),
  nt = Symbol.for("v-cmt"),
  wo = Symbol.for("v-stc"),
  is = [];
let _t = null;
function ue(e = !1) {
  is.push((_t = e ? null : []));
}
function Wy() {
  is.pop(), (_t = is[is.length - 1] || null);
}
let _s = 1;
function Ic(e, t = !1) {
  (_s += e), e < 0 && _t && t && (_t.hasOnce = !0);
}
function uh(e) {
  return (
    (e.dynamicChildren = _s > 0 ? _t || Sr : null),
    Wy(),
    _s > 0 && _t && _t.push(e),
    e
  );
}
function fe(e, t, n, r, s, o) {
  return uh(j(e, t, n, r, s, o, !0));
}
function No(e, t, n, r, s) {
  return uh(ce(e, t, n, r, s, !0));
}
function ws(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Xn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const fh = ({ key: e }) => e ?? null,
  Eo = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? He(e) || Ne(e) || ae(e)
        ? { i: Je, r: e, k: t, f: !!n }
        : e
      : null
  );
function j(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  o = e === Ue ? 0 : 1,
  i = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fh(t),
    ref: t && Eo(t),
    scopeId: Id,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Je,
  };
  return (
    a
      ? (vl(l, n), o & 128 && e.normalize(l))
      : n && (l.shapeFlag |= He(n) ? 8 : 16),
    _s > 0 &&
      !i &&
      _t &&
      (l.patchFlag > 0 || o & 6) &&
      l.patchFlag !== 32 &&
      _t.push(l),
    l
  );
}
const ce = qy;
function qy(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === Hd) && (e = nt), ws(e))) {
    const a = $n(e, t, !0);
    return (
      n && vl(a, n),
      _s > 0 &&
        !o &&
        _t &&
        (a.shapeFlag & 6 ? (_t[_t.indexOf(e)] = a) : _t.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((ev(e) && (e = e.__vccOpts), t)) {
    t = dh(t);
    let { class: a, style: l } = t;
    a && !He(a) && (t.class = fn(a)),
      Ae(l) && (cl(l) && !oe(l) && (l = ot({}, l)), (t.style = ai(l)));
  }
  const i = He(e) ? 1 : lh(e) ? 128 : xd(e) ? 64 : Ae(e) ? 4 : ae(e) ? 2 : 0;
  return j(e, t, n, r, s, i, o, !0);
}
function dh(e) {
  return e ? (cl(e) || zd(e) ? ot({}, e) : e) : null;
}
function $n(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: a, transition: l } = e,
    c = t ? bl(s || {}, t) : s,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: c,
      key: c && fh(c),
      ref:
        t && t.ref
          ? n && o
            ? oe(o)
              ? o.concat(Eo(t))
              : [o, Eo(t)]
            : Eo(t)
          : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Ue ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && $n(e.ssContent),
      ssFallback: e.ssFallback && $n(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return l && r && vs(u, l.clone(u)), u;
}
function Bt(e = " ", t = 0) {
  return ce(Nn, null, e, t);
}
function lt(e = "", t = !1) {
  return t ? (ue(), No(nt, null, e)) : ce(nt, null, e);
}
function Tt(e) {
  return e == null || typeof e == "boolean"
    ? ce(nt)
    : oe(e)
    ? ce(Ue, null, e.slice())
    : ws(e)
    ? Sn(e)
    : ce(Nn, null, String(e));
}
function Sn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : $n(e);
}
function vl(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (oe(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), vl(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !zd(t)
        ? (t._ctx = Je)
        : s === 3 &&
          Je &&
          (Je.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    ae(t)
      ? ((t = { default: t, _ctx: Je }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Bt(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function bl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = fn([t.class, r.class]));
      else if (s === "style") t.style = ai([t.style, r.style]);
      else if (qs(s)) {
        const o = t[s],
          i = r[s];
        i &&
          o !== i &&
          !(oe(o) && o.includes(i)) &&
          (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function Ct(e, t, n, r = null) {
  Dt(e, t, 7, [n, r]);
}
const Ky = qd();
let Gy = 0;
function zy(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Ky,
    o = {
      uid: Gy++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new od(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Jd(r, s),
      emitsOptions: ih(r, s),
      emit: null,
      emitted: null,
      propsDefaults: Ie,
      inheritAttrs: r.inheritAttrs,
      ctx: Ie,
      data: Ie,
      props: Ie,
      attrs: Ie,
      slots: Ie,
      refs: Ie,
      setupState: Ie,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Hy.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let rt = null;
const Vn = () => rt || Je;
let Do, va;
{
  const e = ii(),
    t = (n, r) => {
      let s;
      return (
        (s = e[n]) || (s = e[n] = []),
        s.push(r),
        (o) => {
          s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
        }
      );
    };
  (Do = t("__VUE_INSTANCE_SETTERS__", (n) => (rt = n))),
    (va = t("__VUE_SSR_SETTERS__", (n) => (Es = n)));
}
const Js = (e) => {
    const t = rt;
    return (
      Do(e),
      e.scope.on(),
      () => {
        e.scope.off(), Do(t);
      }
    );
  },
  xc = () => {
    rt && rt.scope.off(), Do(null);
  };
function hh(e) {
  return e.vnode.shapeFlag & 4;
}
let Es = !1;
function Yy(e, t = !1, n = !1) {
  t && va(t);
  const { props: r, children: s } = e.vnode,
    o = hh(e);
  Ay(e, r, o, t), Py(e, s, n);
  const i = o ? Jy(e, t) : void 0;
  return t && va(!1), i;
}
function Jy(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, vy));
  const { setup: r } = n;
  if (r) {
    Fn();
    const s = (e.setupContext = r.length > 1 ? Qy(e) : null),
      o = Js(e),
      i = zs(r, e, 0, [e.props, s]),
      a = Qf(i);
    if ((Hn(), o(), (a || e.sp) && !rr(e) && Dd(e), a)) {
      if ((i.then(xc, xc), t))
        return i
          .then((l) => {
            kc(e, l);
          })
          .catch((l) => {
            fi(l, e, 0);
          });
      e.asyncDep = i;
    } else kc(e, i);
  } else ph(e);
}
function kc(e, t, n) {
  ae(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Ae(t) && (e.setupState = Sd(t)),
    ph(e);
}
function ph(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Wt);
  {
    const s = Js(e);
    Fn();
    try {
      by(e);
    } finally {
      Hn(), s();
    }
  }
}
const Xy = {
  get(e, t) {
    return it(e, "get", ""), e[t];
  },
};
function Qy(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Xy),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function gi(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Sd(un(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in os) return os[n](e);
          },
          has(t, n) {
            return n in t || n in os;
          },
        }))
    : e.proxy;
}
function Zy(e, t = !0) {
  return ae(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function ev(e) {
  return ae(e) && "__vccOpts" in e;
}
const ye = (e, t) => Jg(e, t, Es);
function Xs(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? Ae(t) && !oe(t)
      ? ws(t)
        ? ce(e, null, [t])
        : ce(e, t)
      : ce(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && ws(n) && (n = [n]),
      ce(e, t, n));
}
const mh = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let ba;
const Pc = typeof window < "u" && window.trustedTypes;
if (Pc)
  try {
    ba = Pc.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const gh = ba ? (e) => ba.createHTML(e) : (e) => e,
  tv = "http://www.w3.org/2000/svg",
  nv = "http://www.w3.org/1998/Math/MathML",
  Qt = typeof document < "u" ? document : null,
  Rc = Qt && Qt.createElement("template"),
  rv = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s =
        t === "svg"
          ? Qt.createElementNS(tv, e)
          : t === "mathml"
          ? Qt.createElementNS(nv, e)
          : n
          ? Qt.createElement(e, { is: n })
          : Qt.createElement(e);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      );
    },
    createText: (e) => Qt.createTextNode(e),
    createComment: (e) => Qt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Qt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === o || !(s = s.nextSibling));
        );
      else {
        Rc.innerHTML = gh(
          r === "svg"
            ? `<svg>${e}</svg>`
            : r === "mathml"
            ? `<math>${e}</math>`
            : e
        );
        const a = Rc.content;
        if (r === "svg" || r === "mathml") {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        t.insertBefore(a, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  yn = "transition",
  Jr = "animation",
  Ss = Symbol("_vtc"),
  yh = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  sv = ot({}, kd, yh),
  ov = (e) => ((e.displayName = "Transition"), (e.props = sv), e),
  vh = ov((e, { slots: t }) => Xs(oy, iv(e), t)),
  Gn = (e, t = []) => {
    oe(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Lc = (e) => (e ? (oe(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function iv(e) {
  const t = {};
  for (const O in e) O in yh || (t[O] = e[O]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: r,
      duration: s,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: l = o,
      appearActiveClass: c = i,
      appearToClass: u = a,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: h = `${n}-leave-active`,
      leaveToClass: d = `${n}-leave-to`,
    } = e,
    p = av(s),
    m = p && p[0],
    S = p && p[1],
    {
      onBeforeEnter: b,
      onEnter: C,
      onEnterCancelled: y,
      onLeave: g,
      onLeaveCancelled: A,
      onBeforeAppear: L = b,
      onAppear: P = C,
      onAppearCancelled: V = y,
    } = t,
    N = (O, R, Z, G) => {
      (O._enterCancelled = G), zn(O, R ? u : a), zn(O, R ? c : i), Z && Z();
    },
    E = (O, R) => {
      (O._isLeaving = !1), zn(O, f), zn(O, d), zn(O, h), R && R();
    },
    x = (O) => (R, Z) => {
      const G = O ? P : C,
        q = () => N(R, O, Z);
      Gn(G, [R, q]),
        Nc(() => {
          zn(R, O ? l : o), Yt(R, O ? u : a), Lc(G) || Dc(R, r, m, q);
        });
    };
  return ot(t, {
    onBeforeEnter(O) {
      Gn(b, [O]), Yt(O, o), Yt(O, i);
    },
    onBeforeAppear(O) {
      Gn(L, [O]), Yt(O, l), Yt(O, c);
    },
    onEnter: x(!1),
    onAppear: x(!0),
    onLeave(O, R) {
      O._isLeaving = !0;
      const Z = () => E(O, R);
      Yt(O, f),
        O._enterCancelled ? (Yt(O, h), jc()) : (jc(), Yt(O, h)),
        Nc(() => {
          O._isLeaving && (zn(O, f), Yt(O, d), Lc(g) || Dc(O, r, S, Z));
        }),
        Gn(g, [O, Z]);
    },
    onEnterCancelled(O) {
      N(O, !1, void 0, !0), Gn(y, [O]);
    },
    onAppearCancelled(O) {
      N(O, !0, void 0, !0), Gn(V, [O]);
    },
    onLeaveCancelled(O) {
      E(O), Gn(A, [O]);
    },
  });
}
function av(e) {
  if (e == null) return null;
  if (Ae(e)) return [Fi(e.enter), Fi(e.leave)];
  {
    const t = Fi(e);
    return [t, t];
  }
}
function Fi(e) {
  return hg(e);
}
function Yt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Ss] || (e[Ss] = new Set())).add(t);
}
function zn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Ss];
  n && (n.delete(t), n.size || (e[Ss] = void 0));
}
function Nc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let lv = 0;
function Dc(e, t, n, r) {
  const s = (e._endId = ++lv),
    o = () => {
      s === e._endId && r();
    };
  if (n != null) return setTimeout(o, n);
  const { type: i, timeout: a, propCount: l } = cv(e, t);
  if (!i) return r();
  const c = i + "end";
  let u = 0;
  const f = () => {
      e.removeEventListener(c, h), o();
    },
    h = (d) => {
      d.target === e && ++u >= l && f();
    };
  setTimeout(() => {
    u < l && f();
  }, a + 1),
    e.addEventListener(c, h);
}
function cv(e, t) {
  const n = window.getComputedStyle(e),
    r = (p) => (n[p] || "").split(", "),
    s = r(`${yn}Delay`),
    o = r(`${yn}Duration`),
    i = Mc(s, o),
    a = r(`${Jr}Delay`),
    l = r(`${Jr}Duration`),
    c = Mc(a, l);
  let u = null,
    f = 0,
    h = 0;
  t === yn
    ? i > 0 && ((u = yn), (f = i), (h = o.length))
    : t === Jr
    ? c > 0 && ((u = Jr), (f = c), (h = l.length))
    : ((f = Math.max(i, c)),
      (u = f > 0 ? (i > c ? yn : Jr) : null),
      (h = u ? (u === yn ? o.length : l.length) : 0));
  const d =
    u === yn && /\b(transform|all)(,|$)/.test(r(`${yn}Property`).toString());
  return { type: u, timeout: f, propCount: h, hasTransform: d };
}
function Mc(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => $c(n) + $c(e[r])));
}
function $c(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function jc() {
  return document.body.offsetHeight;
}
function uv(e, t, n) {
  const r = e[Ss];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const Fc = Symbol("_vod"),
  fv = Symbol("_vsh"),
  dv = Symbol(""),
  hv = /(^|;)\s*display\s*:/;
function pv(e, t, n) {
  const r = e.style,
    s = He(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (He(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && So(r, a, "");
        }
      else for (const i in t) n[i] == null && So(r, i, "");
    for (const i in n) i === "display" && (o = !0), So(r, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = r[dv];
      i && (n += ";" + i), (r.cssText = n), (o = hv.test(n));
    }
  } else t && e.removeAttribute("style");
  Fc in e && ((e[Fc] = o ? r.display : ""), e[fv] && (r.display = "none"));
}
const Hc = /\s*!important$/;
function So(e, t, n) {
  if (oe(n)) n.forEach((r) => So(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = mv(e, t);
    Hc.test(n)
      ? e.setProperty(ur(r), n.replace(Hc, ""), "important")
      : (e[r] = n);
  }
}
const Uc = ["Webkit", "Moz", "ms"],
  Hi = {};
function mv(e, t) {
  const n = Hi[t];
  if (n) return n;
  let r = xt(t);
  if (r !== "filter" && r in e) return (Hi[t] = r);
  r = oi(r);
  for (let s = 0; s < Uc.length; s++) {
    const o = Uc[s] + r;
    if (o in e) return (Hi[t] = o);
  }
  return t;
}
const Vc = "http://www.w3.org/1999/xlink";
function Bc(e, t, n, r, s, o = _g(t)) {
  r && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(Vc, t.slice(6, t.length))
      : e.setAttributeNS(Vc, t, n)
    : n == null || (o && !nd(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, o ? "" : Nt(n) ? String(n) : n);
}
function Wc(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? gh(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value,
      l = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    (a !== l || !("_value" in e)) && (e.value = l),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (n = nd(n))
      : n == null && a === "string"
      ? ((n = ""), (i = !0))
      : a === "number" && ((n = 0), (i = !0));
  }
  try {
    e[t] = n;
  } catch {}
  i && e.removeAttribute(s || t);
}
function Qn(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function gv(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const qc = Symbol("_vei");
function yv(e, t, n, r, s = null) {
  const o = e[qc] || (e[qc] = {}),
    i = o[t];
  if (r && i) i.value = r;
  else {
    const [a, l] = vv(t);
    if (r) {
      const c = (o[t] = wv(r, s));
      Qn(e, a, c, l);
    } else i && (gv(e, a, i, l), (o[t] = void 0));
  }
}
const Kc = /(?:Once|Passive|Capture)$/;
function vv(e) {
  let t;
  if (Kc.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(Kc)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : ur(e.slice(2)), t];
}
let Ui = 0;
const bv = Promise.resolve(),
  _v = () => Ui || (bv.then(() => (Ui = 0)), (Ui = Date.now()));
function wv(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Dt(Ev(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = _v()), n;
}
function Ev(e, t) {
  if (oe(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const Gc = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Sv = (e, t, n, r, s, o) => {
    const i = s === "svg";
    t === "class"
      ? uv(e, r, i)
      : t === "style"
      ? pv(e, n, r)
      : qs(t)
      ? Za(t) || yv(e, t, n, r, o)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Cv(e, t, r, i)
        )
      ? (Wc(e, t, r),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          Bc(e, t, r, i, o, t !== "value"))
      : e._isVueCE && (/[A-Z]/.test(t) || !He(r))
      ? Wc(e, xt(t), r, o, t)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        Bc(e, t, r, i));
  };
function Cv(e, t, n, r) {
  if (r)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Gc(t) && ae(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Gc(t) && He(n) ? !1 : t in e;
}
const Mo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return oe(t) ? (n) => _o(t, n) : t;
};
function Tv(e) {
  e.target.composing = !0;
}
function zc(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const Ar = Symbol("_assign"),
  Xr = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e[Ar] = Mo(s);
      const o = r || (s.props && s.props.type === "number");
      Qn(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let a = e.value;
        n && (a = a.trim()), o && (a = Ao(a)), e[Ar](a);
      }),
        n &&
          Qn(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (Qn(e, "compositionstart", Tv),
          Qn(e, "compositionend", zc),
          Qn(e, "change", zc));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: o } },
      i
    ) {
      if (((e[Ar] = Mo(i)), e.composing)) return;
      const a =
          (o || e.type === "number") && !/^0\d/.test(e.value)
            ? Ao(e.value)
            : e.value,
        l = t ?? "";
      a !== l &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          ((r && t === n) || (s && e.value.trim() === l))) ||
          (e.value = l));
    },
  },
  Ov = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, r) {
      const s = ri(t);
      Qn(e, "change", () => {
        const o = Array.prototype.filter
          .call(e.options, (i) => i.selected)
          .map((i) => (n ? Ao($o(i)) : $o(i)));
        e[Ar](e.multiple ? (s ? new Set(o) : o) : o[0]),
          (e._assigning = !0),
          Un(() => {
            e._assigning = !1;
          });
      }),
        (e[Ar] = Mo(r));
    },
    mounted(e, { value: t }) {
      Yc(e, t);
    },
    beforeUpdate(e, t, n) {
      e[Ar] = Mo(n);
    },
    updated(e, { value: t }) {
      e._assigning || Yc(e, t);
    },
  };
function Yc(e, t) {
  const n = e.multiple,
    r = oe(t);
  if (!(n && !r && !ri(t))) {
    for (let s = 0, o = e.options.length; s < o; s++) {
      const i = e.options[s],
        a = $o(i);
      if (n)
        if (r) {
          const l = typeof a;
          l === "string" || l === "number"
            ? (i.selected = t.some((c) => String(c) === String(a)))
            : (i.selected = Eg(t, a) > -1);
        } else i.selected = t.has(a);
      else if (li($o(i), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function $o(e) {
  return "_value" in e ? e._value : e.value;
}
const Av = ["ctrl", "shift", "alt", "meta"],
  Iv = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => Av.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  as = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      r = t.join(".");
    return (
      n[r] ||
      (n[r] = (s, ...o) => {
        for (let i = 0; i < t.length; i++) {
          const a = Iv[t[i]];
          if (a && a(s, t)) return;
        }
        return e(s, ...o);
      })
    );
  },
  bh = ot({ patchProp: Sv }, rv);
let ls,
  Jc = !1;
function xv() {
  return ls || (ls = Ly(bh));
}
function kv() {
  return (ls = Jc ? ls : Ny(bh)), (Jc = !0), ls;
}
const Pv = (...e) => {
    const t = xv().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const s = wh(r);
        if (!s) return;
        const o = t._component;
        !ae(o) && !o.render && !o.template && (o.template = s.innerHTML),
          s.nodeType === 1 && (s.textContent = "");
        const i = n(s, !1, _h(s));
        return (
          s instanceof Element &&
            (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
          i
        );
      }),
      t
    );
  },
  Rv = (...e) => {
    const t = kv().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const s = wh(r);
        if (s) return n(s, !0, _h(s));
      }),
      t
    );
  };
function _h(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function wh(e) {
  return He(e) ? document.querySelector(e) : e;
}
var tt;
function Lv(e, t = { id: "" }) {
  (t = { trackOnNextTick: !1, ...t }),
    (tt = new ag(t)),
    (e.config.globalProperties.$gtm = tt),
    tt.isInBrowserContext() &&
      (t.vueRouter &&
        Nv(
          e,
          t.vueRouter,
          t.ignoredViews,
          t.trackOnNextTick,
          t.vueRouterAdditionalEventData
        ),
      tt.options.enabled &&
        tt.options.loadScript &&
        (Array.isArray(t.id)
          ? t.id.forEach((n) => {
              if (typeof n == "string") Er(n, t);
              else {
                let r = { ...t };
                n.queryParams != null &&
                  (r.queryParams = { ...r.queryParams, ...n.queryParams }),
                  Er(n.id, r);
              }
            })
          : Er(t.id, t))),
    e.provide("gtm", t);
}
function Nv(e, t, n = [], r, s = () => ({})) {
  function o(i, a) {
    return i instanceof Error ? !!(i.type & a) : !1;
  }
  t.afterEach(async (i, a, l) => {
    var h, d, p;
    if (
      typeof i.name != "string" ||
      (Array.isArray(n) && n.includes(i.name)) ||
      (typeof n == "function" && n(i, a))
    )
      return;
    let c =
      i.meta && typeof i.meta.gtm == "string" && i.meta.gtm
        ? i.meta.gtm
        : i.name;
    o(l, 4)
      ? tt != null &&
        tt.debugEnabled() &&
        console.log(`[VueGtm]: '${c}' not tracked due to navigation aborted`)
      : o(l, 8) &&
        tt != null &&
        tt.debugEnabled() &&
        console.log(`[VueGtm]: '${c}' not tracked due to navigation cancelled`);
    let u = {
        ...(await s(i, a)),
        ...((h = i.meta) == null ? void 0 : h.gtmAdditionalEventData),
      },
      f =
        ((p = (d = t.options) == null ? void 0 : d.history) == null
          ? void 0
          : p.base) ?? "";
    f.endsWith("/") || (f += "/"),
      (f += i.fullPath.startsWith("/") ? i.fullPath.substring(1) : i.fullPath),
      r
        ? Un(() => {
            tt == null || tt.trackView(c, f, u);
          })
        : tt == null || tt.trackView(c, f, u);
  });
}
function Dv(e) {
  return { install: (t) => Lv(t, e) };
}
function Mv() {
  var e, t, n, r, s;
  return (
    ((s =
      (r =
        (n =
          (t = (e = Vn()) == null ? void 0 : e.appContext) == null
            ? void 0
            : t.app) == null
          ? void 0
          : n.config) == null
        ? void 0
        : r.globalProperties) == null
      ? void 0
      : s.$gtm) ?? tt
  );
}
const $v = ({ app: e, router: t, isClient: n }) => {
    n &&
      e.use(
        Dv({
          id: "GTM-PZ5CBR5",
          defer: !0,
          compatibility: !1,
          nonce: "2726c7f26c",
          enabled: !0,
          debug: !1,
          loadScript: !0,
          vueRouter: t,
          trackOnNextTick: !1,
        })
      );
  },
  jv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, install: $v },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Fv = "modulepreload",
  Hv = function (e) {
    return "/" + e;
  },
  Xc = {},
  _e = function (t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"),
        a =
          (i == null ? void 0 : i.nonce) ||
          (i == null ? void 0 : i.getAttribute("nonce"));
      s = Promise.allSettled(
        n.map((l) => {
          if (((l = Hv(l)), l in Xc)) return;
          Xc[l] = !0;
          const c = l.endsWith(".css"),
            u = c ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${l}"]${u}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = c ? "stylesheet" : Fv),
            c || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = l),
            a && f.setAttribute("nonce", a),
            document.head.appendChild(f),
            c)
          )
            return new Promise((h, d) => {
              f.addEventListener("load", h),
                f.addEventListener("error", () =>
                  d(new Error(`Unable to preload CSS for ${l}`))
                );
            });
        })
      );
    }
    function o(i) {
      const a = new Event("vite:preloadError", { cancelable: !0 });
      if (((a.payload = i), window.dispatchEvent(a), !a.defaultPrevented))
        throw i;
    }
    return s.then((i) => {
      for (const a of i || []) a.status === "rejected" && o(a.reason);
      return t().catch(o);
    });
  };
/*!
 * shared v10.0.6
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */ const jo = typeof window < "u",
  Bn = (e, t = !1) => (t ? Symbol.for(e) : Symbol(e)),
  Uv = (e, t, n) => Vv({ l: e, k: t, s: n }),
  Vv = (e) =>
    JSON.stringify(e)
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029")
      .replace(/\u0027/g, "\\u0027"),
  Ge = (e) => typeof e == "number" && isFinite(e),
  Bv = (e) => wl(e) === "[object Date]",
  Fo = (e) => wl(e) === "[object RegExp]",
  yi = (e) => ge(e) && Object.keys(e).length === 0,
  st = Object.assign,
  Wv = Object.create,
  Oe = (e = null) => Wv(e);
let Qc;
const _l = () =>
  Qc ||
  (Qc =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : Oe());
function Zc(e) {
  return e
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
const qv = Object.prototype.hasOwnProperty;
function Rt(e, t) {
  return qv.call(e, t);
}
const Xe = Array.isArray,
  je = (e) => typeof e == "function",
  te = (e) => typeof e == "string",
  Fe = (e) => typeof e == "boolean",
  we = (e) => e !== null && typeof e == "object",
  Kv = (e) => we(e) && je(e.then) && je(e.catch),
  Eh = Object.prototype.toString,
  wl = (e) => Eh.call(e),
  ge = (e) => wl(e) === "[object Object]",
  Gv = (e) =>
    e == null
      ? ""
      : Xe(e) || (ge(e) && e.toString === Eh)
      ? JSON.stringify(e, null, 2)
      : String(e);
function El(e, t = "") {
  return e.reduce((n, r, s) => (s === 0 ? n + r : n + t + r), "");
}
function zv(e, t) {
  typeof console < "u" &&
    (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const fo = (e) => !we(e) || Xe(e);
function Co(e, t) {
  if (fo(e) || fo(t)) throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: s } = n.pop();
    Object.keys(r).forEach((o) => {
      o !== "__proto__" &&
        (we(r[o]) && !we(s[o]) && (s[o] = Array.isArray(r[o]) ? [] : Oe()),
        fo(s[o]) || fo(r[o])
          ? (s[o] = r[o])
          : n.push({ src: r[o], des: s[o] }));
    });
  }
}
/*!
 * message-compiler v10.0.6
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */ function Yv(e, t, n) {
  return { line: e, column: t, offset: n };
}
function _a(e, t, n) {
  return { start: e, end: t };
}
const Ce = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
  },
  Jv = 17;
function vi(e, t, n = {}) {
  const { domain: r, messages: s, args: o } = n,
    i = e,
    a = new SyntaxError(String(i));
  return (a.code = e), t && (a.location = t), (a.domain = r), a;
}
function Xv(e) {
  throw e;
}
const Jt = " ",
  Qv = "\r",
  ft = `
`,
  Zv = "\u2028",
  eb = "\u2029";
function tb(e) {
  const t = e;
  let n = 0,
    r = 1,
    s = 1,
    o = 0;
  const i = (P) => t[P] === Qv && t[P + 1] === ft,
    a = (P) => t[P] === ft,
    l = (P) => t[P] === eb,
    c = (P) => t[P] === Zv,
    u = (P) => i(P) || a(P) || l(P) || c(P),
    f = () => n,
    h = () => r,
    d = () => s,
    p = () => o,
    m = (P) => (i(P) || l(P) || c(P) ? ft : t[P]),
    S = () => m(n),
    b = () => m(n + o);
  function C() {
    return (o = 0), u(n) && (r++, (s = 0)), i(n) && n++, n++, s++, t[n];
  }
  function y() {
    return i(n + o) && o++, o++, t[n + o];
  }
  function g() {
    (n = 0), (r = 1), (s = 1), (o = 0);
  }
  function A(P = 0) {
    o = P;
  }
  function L() {
    const P = n + o;
    for (; P !== n; ) C();
    o = 0;
  }
  return {
    index: f,
    line: h,
    column: d,
    peekOffset: p,
    charAt: m,
    currentChar: S,
    currentPeek: b,
    next: C,
    peek: y,
    reset: g,
    resetPeek: A,
    skipToPeek: L,
  };
}
const vn = void 0,
  nb = ".",
  eu = "'",
  rb = "tokenizer";
function sb(e, t = {}) {
  const n = t.location !== !1,
    r = tb(e),
    s = () => r.index(),
    o = () => Yv(r.line(), r.column(), r.index()),
    i = o(),
    a = s(),
    l = {
      currentType: 13,
      offset: a,
      startLoc: i,
      endLoc: i,
      lastType: 13,
      lastOffset: a,
      lastStartLoc: i,
      lastEndLoc: i,
      braceNest: 0,
      inLinked: !1,
      text: "",
    },
    c = () => l,
    { onError: u } = t;
  function f(v, w, k, ...$) {
    const U = c();
    if (((w.column += k), (w.offset += k), u)) {
      const K = n ? _a(U.startLoc, w) : null,
        I = vi(v, K, { domain: rb, args: $ });
      u(I);
    }
  }
  function h(v, w, k) {
    (v.endLoc = o()), (v.currentType = w);
    const $ = { type: w };
    return (
      n && ($.loc = _a(v.startLoc, v.endLoc)), k != null && ($.value = k), $
    );
  }
  const d = (v) => h(v, 13);
  function p(v, w) {
    return v.currentChar() === w
      ? (v.next(), w)
      : (f(Ce.EXPECTED_TOKEN, o(), 0, w), "");
  }
  function m(v) {
    let w = "";
    for (; v.currentPeek() === Jt || v.currentPeek() === ft; )
      (w += v.currentPeek()), v.peek();
    return w;
  }
  function S(v) {
    const w = m(v);
    return v.skipToPeek(), w;
  }
  function b(v) {
    if (v === vn) return !1;
    const w = v.charCodeAt(0);
    return (w >= 97 && w <= 122) || (w >= 65 && w <= 90) || w === 95;
  }
  function C(v) {
    if (v === vn) return !1;
    const w = v.charCodeAt(0);
    return w >= 48 && w <= 57;
  }
  function y(v, w) {
    const { currentType: k } = w;
    if (k !== 2) return !1;
    m(v);
    const $ = b(v.currentPeek());
    return v.resetPeek(), $;
  }
  function g(v, w) {
    const { currentType: k } = w;
    if (k !== 2) return !1;
    m(v);
    const $ = v.currentPeek() === "-" ? v.peek() : v.currentPeek(),
      U = C($);
    return v.resetPeek(), U;
  }
  function A(v, w) {
    const { currentType: k } = w;
    if (k !== 2) return !1;
    m(v);
    const $ = v.currentPeek() === eu;
    return v.resetPeek(), $;
  }
  function L(v, w) {
    const { currentType: k } = w;
    if (k !== 7) return !1;
    m(v);
    const $ = v.currentPeek() === ".";
    return v.resetPeek(), $;
  }
  function P(v, w) {
    const { currentType: k } = w;
    if (k !== 8) return !1;
    m(v);
    const $ = b(v.currentPeek());
    return v.resetPeek(), $;
  }
  function V(v, w) {
    const { currentType: k } = w;
    if (!(k === 7 || k === 11)) return !1;
    m(v);
    const $ = v.currentPeek() === ":";
    return v.resetPeek(), $;
  }
  function N(v, w) {
    const { currentType: k } = w;
    if (k !== 9) return !1;
    const $ = () => {
        const K = v.currentPeek();
        return K === "{"
          ? b(v.peek())
          : K === "@" || K === "|" || K === ":" || K === "." || K === Jt || !K
          ? !1
          : K === ft
          ? (v.peek(), $())
          : x(v, !1);
      },
      U = $();
    return v.resetPeek(), U;
  }
  function E(v) {
    m(v);
    const w = v.currentPeek() === "|";
    return v.resetPeek(), w;
  }
  function x(v, w = !0) {
    const k = (U = !1, K = "") => {
        const I = v.currentPeek();
        return I === "{" || I === "@" || !I
          ? U
          : I === "|"
          ? !(K === Jt || K === ft)
          : I === Jt
          ? (v.peek(), k(!0, Jt))
          : I === ft
          ? (v.peek(), k(!0, ft))
          : !0;
      },
      $ = k();
    return w && v.resetPeek(), $;
  }
  function O(v, w) {
    const k = v.currentChar();
    return k === vn ? vn : w(k) ? (v.next(), k) : null;
  }
  function R(v) {
    const w = v.charCodeAt(0);
    return (
      (w >= 97 && w <= 122) ||
      (w >= 65 && w <= 90) ||
      (w >= 48 && w <= 57) ||
      w === 95 ||
      w === 36
    );
  }
  function Z(v) {
    return O(v, R);
  }
  function G(v) {
    const w = v.charCodeAt(0);
    return (
      (w >= 97 && w <= 122) ||
      (w >= 65 && w <= 90) ||
      (w >= 48 && w <= 57) ||
      w === 95 ||
      w === 36 ||
      w === 45
    );
  }
  function q(v) {
    return O(v, G);
  }
  function ee(v) {
    const w = v.charCodeAt(0);
    return w >= 48 && w <= 57;
  }
  function X(v) {
    return O(v, ee);
  }
  function le(v) {
    const w = v.charCodeAt(0);
    return (
      (w >= 48 && w <= 57) || (w >= 65 && w <= 70) || (w >= 97 && w <= 102)
    );
  }
  function Re(v) {
    return O(v, le);
  }
  function $e(v) {
    let w = "",
      k = "";
    for (; (w = X(v)); ) k += w;
    return k;
  }
  function xe(v) {
    let w = "";
    for (;;) {
      const k = v.currentChar();
      if (k === "{" || k === "}" || k === "@" || k === "|" || !k) break;
      if (k === Jt || k === ft)
        if (x(v)) (w += k), v.next();
        else {
          if (E(v)) break;
          (w += k), v.next();
        }
      else (w += k), v.next();
    }
    return w;
  }
  function Be(v) {
    S(v);
    let w = "",
      k = "";
    for (; (w = q(v)); ) k += w;
    return (
      v.currentChar() === vn && f(Ce.UNTERMINATED_CLOSING_BRACE, o(), 0), k
    );
  }
  function Qe(v) {
    S(v);
    let w = "";
    return (
      v.currentChar() === "-" ? (v.next(), (w += `-${$e(v)}`)) : (w += $e(v)),
      v.currentChar() === vn && f(Ce.UNTERMINATED_CLOSING_BRACE, o(), 0),
      w
    );
  }
  function wt(v) {
    return v !== eu && v !== ft;
  }
  function Ze(v) {
    S(v), p(v, "'");
    let w = "",
      k = "";
    for (; (w = O(v, wt)); ) w === "\\" ? (k += H(v)) : (k += w);
    const $ = v.currentChar();
    return $ === ft || $ === vn
      ? (f(Ce.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0),
        $ === ft && (v.next(), p(v, "'")),
        k)
      : (p(v, "'"), k);
  }
  function H(v) {
    const w = v.currentChar();
    switch (w) {
      case "\\":
      case "'":
        return v.next(), `\\${w}`;
      case "u":
        return z(v, w, 4);
      case "U":
        return z(v, w, 6);
      default:
        return f(Ce.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, w), "";
    }
  }
  function z(v, w, k) {
    p(v, w);
    let $ = "";
    for (let U = 0; U < k; U++) {
      const K = Re(v);
      if (!K) {
        f(
          Ce.INVALID_UNICODE_ESCAPE_SEQUENCE,
          o(),
          0,
          `\\${w}${$}${v.currentChar()}`
        );
        break;
      }
      $ += K;
    }
    return `\\${w}${$}`;
  }
  function Y(v) {
    return v !== "{" && v !== "}" && v !== Jt && v !== ft;
  }
  function ne(v) {
    S(v);
    let w = "",
      k = "";
    for (; (w = O(v, Y)); ) k += w;
    return k;
  }
  function de(v) {
    let w = "",
      k = "";
    for (; (w = Z(v)); ) k += w;
    return k;
  }
  function Te(v) {
    const w = (k) => {
      const $ = v.currentChar();
      return $ === "{" ||
        $ === "@" ||
        $ === "|" ||
        $ === "(" ||
        $ === ")" ||
        !$ ||
        $ === Jt
        ? k
        : ((k += $), v.next(), w(k));
    };
    return w("");
  }
  function _(v) {
    S(v);
    const w = p(v, "|");
    return S(v), w;
  }
  function T(v, w) {
    let k = null;
    switch (v.currentChar()) {
      case "{":
        return (
          w.braceNest >= 1 && f(Ce.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0),
          v.next(),
          (k = h(w, 2, "{")),
          S(v),
          w.braceNest++,
          k
        );
      case "}":
        return (
          w.braceNest > 0 &&
            w.currentType === 2 &&
            f(Ce.EMPTY_PLACEHOLDER, o(), 0),
          v.next(),
          (k = h(w, 3, "}")),
          w.braceNest--,
          w.braceNest > 0 && S(v),
          w.inLinked && w.braceNest === 0 && (w.inLinked = !1),
          k
        );
      case "@":
        return (
          w.braceNest > 0 && f(Ce.UNTERMINATED_CLOSING_BRACE, o(), 0),
          (k = D(v, w) || d(w)),
          (w.braceNest = 0),
          k
        );
      default: {
        let U = !0,
          K = !0,
          I = !0;
        if (E(v))
          return (
            w.braceNest > 0 && f(Ce.UNTERMINATED_CLOSING_BRACE, o(), 0),
            (k = h(w, 1, _(v))),
            (w.braceNest = 0),
            (w.inLinked = !1),
            k
          );
        if (
          w.braceNest > 0 &&
          (w.currentType === 4 || w.currentType === 5 || w.currentType === 6)
        )
          return (
            f(Ce.UNTERMINATED_CLOSING_BRACE, o(), 0), (w.braceNest = 0), W(v, w)
          );
        if ((U = y(v, w))) return (k = h(w, 4, Be(v))), S(v), k;
        if ((K = g(v, w))) return (k = h(w, 5, Qe(v))), S(v), k;
        if ((I = A(v, w))) return (k = h(w, 6, Ze(v))), S(v), k;
        if (!U && !K && !I)
          return (
            (k = h(w, 12, ne(v))),
            f(Ce.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, k.value),
            S(v),
            k
          );
        break;
      }
    }
    return k;
  }
  function D(v, w) {
    const { currentType: k } = w;
    let $ = null;
    const U = v.currentChar();
    switch (
      ((k === 7 || k === 8 || k === 11 || k === 9) &&
        (U === ft || U === Jt) &&
        f(Ce.INVALID_LINKED_FORMAT, o(), 0),
      U)
    ) {
      case "@":
        return v.next(), ($ = h(w, 7, "@")), (w.inLinked = !0), $;
      case ".":
        return S(v), v.next(), h(w, 8, ".");
      case ":":
        return S(v), v.next(), h(w, 9, ":");
      default:
        return E(v)
          ? (($ = h(w, 1, _(v))), (w.braceNest = 0), (w.inLinked = !1), $)
          : L(v, w) || V(v, w)
          ? (S(v), D(v, w))
          : P(v, w)
          ? (S(v), h(w, 11, de(v)))
          : N(v, w)
          ? (S(v), U === "{" ? T(v, w) || $ : h(w, 10, Te(v)))
          : (k === 7 && f(Ce.INVALID_LINKED_FORMAT, o(), 0),
            (w.braceNest = 0),
            (w.inLinked = !1),
            W(v, w));
    }
  }
  function W(v, w) {
    let k = { type: 13 };
    if (w.braceNest > 0) return T(v, w) || d(w);
    if (w.inLinked) return D(v, w) || d(w);
    switch (v.currentChar()) {
      case "{":
        return T(v, w) || d(w);
      case "}":
        return f(Ce.UNBALANCED_CLOSING_BRACE, o(), 0), v.next(), h(w, 3, "}");
      case "@":
        return D(v, w) || d(w);
      default: {
        if (E(v))
          return (k = h(w, 1, _(v))), (w.braceNest = 0), (w.inLinked = !1), k;
        if (x(v)) return h(w, 0, xe(v));
        break;
      }
    }
    return k;
  }
  function F() {
    const { currentType: v, offset: w, startLoc: k, endLoc: $ } = l;
    return (
      (l.lastType = v),
      (l.lastOffset = w),
      (l.lastStartLoc = k),
      (l.lastEndLoc = $),
      (l.offset = s()),
      (l.startLoc = o()),
      r.currentChar() === vn ? h(l, 13) : W(r, l)
    );
  }
  return { nextToken: F, currentOffset: s, currentPosition: o, context: c };
}
const ob = "parser",
  ib = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function ab(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�";
    }
  }
}
function lb(e = {}) {
  const t = e.location !== !1,
    { onError: n } = e;
  function r(b, C, y, g, ...A) {
    const L = b.currentPosition();
    if (((L.offset += g), (L.column += g), n)) {
      const P = t ? _a(y, L) : null,
        V = vi(C, P, { domain: ob, args: A });
      n(V);
    }
  }
  function s(b, C, y) {
    const g = { type: b };
    return t && ((g.start = C), (g.end = C), (g.loc = { start: y, end: y })), g;
  }
  function o(b, C, y, g) {
    t && ((b.end = C), b.loc && (b.loc.end = y));
  }
  function i(b, C) {
    const y = b.context(),
      g = s(3, y.offset, y.startLoc);
    return (g.value = C), o(g, b.currentOffset(), b.currentPosition()), g;
  }
  function a(b, C) {
    const y = b.context(),
      { lastOffset: g, lastStartLoc: A } = y,
      L = s(5, g, A);
    return (
      (L.index = parseInt(C, 10)),
      b.nextToken(),
      o(L, b.currentOffset(), b.currentPosition()),
      L
    );
  }
  function l(b, C) {
    const y = b.context(),
      { lastOffset: g, lastStartLoc: A } = y,
      L = s(4, g, A);
    return (
      (L.key = C),
      b.nextToken(),
      o(L, b.currentOffset(), b.currentPosition()),
      L
    );
  }
  function c(b, C) {
    const y = b.context(),
      { lastOffset: g, lastStartLoc: A } = y,
      L = s(9, g, A);
    return (
      (L.value = C.replace(ib, ab)),
      b.nextToken(),
      o(L, b.currentOffset(), b.currentPosition()),
      L
    );
  }
  function u(b) {
    const C = b.nextToken(),
      y = b.context(),
      { lastOffset: g, lastStartLoc: A } = y,
      L = s(8, g, A);
    return C.type !== 11
      ? (r(b, Ce.UNEXPECTED_EMPTY_LINKED_MODIFIER, y.lastStartLoc, 0),
        (L.value = ""),
        o(L, g, A),
        { nextConsumeToken: C, node: L })
      : (C.value == null &&
          r(b, Ce.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ht(C)),
        (L.value = C.value || ""),
        o(L, b.currentOffset(), b.currentPosition()),
        { node: L });
  }
  function f(b, C) {
    const y = b.context(),
      g = s(7, y.offset, y.startLoc);
    return (g.value = C), o(g, b.currentOffset(), b.currentPosition()), g;
  }
  function h(b) {
    const C = b.context(),
      y = s(6, C.offset, C.startLoc);
    let g = b.nextToken();
    if (g.type === 8) {
      const A = u(b);
      (y.modifier = A.node), (g = A.nextConsumeToken || b.nextToken());
    }
    switch (
      (g.type !== 9 &&
        r(b, Ce.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ht(g)),
      (g = b.nextToken()),
      g.type === 2 && (g = b.nextToken()),
      g.type)
    ) {
      case 10:
        g.value == null &&
          r(b, Ce.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ht(g)),
          (y.key = f(b, g.value || ""));
        break;
      case 4:
        g.value == null &&
          r(b, Ce.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ht(g)),
          (y.key = l(b, g.value || ""));
        break;
      case 5:
        g.value == null &&
          r(b, Ce.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ht(g)),
          (y.key = a(b, g.value || ""));
        break;
      case 6:
        g.value == null &&
          r(b, Ce.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ht(g)),
          (y.key = c(b, g.value || ""));
        break;
      default: {
        r(b, Ce.UNEXPECTED_EMPTY_LINKED_KEY, C.lastStartLoc, 0);
        const A = b.context(),
          L = s(7, A.offset, A.startLoc);
        return (
          (L.value = ""),
          o(L, A.offset, A.startLoc),
          (y.key = L),
          o(y, A.offset, A.startLoc),
          { nextConsumeToken: g, node: y }
        );
      }
    }
    return o(y, b.currentOffset(), b.currentPosition()), { node: y };
  }
  function d(b) {
    const C = b.context(),
      y = C.currentType === 1 ? b.currentOffset() : C.offset,
      g = C.currentType === 1 ? C.endLoc : C.startLoc,
      A = s(2, y, g);
    A.items = [];
    let L = null;
    do {
      const N = L || b.nextToken();
      switch (((L = null), N.type)) {
        case 0:
          N.value == null &&
            r(b, Ce.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ht(N)),
            A.items.push(i(b, N.value || ""));
          break;
        case 5:
          N.value == null &&
            r(b, Ce.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ht(N)),
            A.items.push(a(b, N.value || ""));
          break;
        case 4:
          N.value == null &&
            r(b, Ce.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ht(N)),
            A.items.push(l(b, N.value || ""));
          break;
        case 6:
          N.value == null &&
            r(b, Ce.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ht(N)),
            A.items.push(c(b, N.value || ""));
          break;
        case 7: {
          const E = h(b);
          A.items.push(E.node), (L = E.nextConsumeToken || null);
          break;
        }
      }
    } while (C.currentType !== 13 && C.currentType !== 1);
    const P = C.currentType === 1 ? C.lastOffset : b.currentOffset(),
      V = C.currentType === 1 ? C.lastEndLoc : b.currentPosition();
    return o(A, P, V), A;
  }
  function p(b, C, y, g) {
    const A = b.context();
    let L = g.items.length === 0;
    const P = s(1, C, y);
    (P.cases = []), P.cases.push(g);
    do {
      const V = d(b);
      L || (L = V.items.length === 0), P.cases.push(V);
    } while (A.currentType !== 13);
    return (
      L && r(b, Ce.MUST_HAVE_MESSAGES_IN_PLURAL, y, 0),
      o(P, b.currentOffset(), b.currentPosition()),
      P
    );
  }
  function m(b) {
    const C = b.context(),
      { offset: y, startLoc: g } = C,
      A = d(b);
    return C.currentType === 13 ? A : p(b, y, g, A);
  }
  function S(b) {
    const C = sb(b, st({}, e)),
      y = C.context(),
      g = s(0, y.offset, y.startLoc);
    return (
      t && g.loc && (g.loc.source = b),
      (g.body = m(C)),
      e.onCacheKey && (g.cacheKey = e.onCacheKey(b)),
      y.currentType !== 13 &&
        r(
          C,
          Ce.UNEXPECTED_LEXICAL_ANALYSIS,
          y.lastStartLoc,
          0,
          b[y.offset] || ""
        ),
      o(g, C.currentOffset(), C.currentPosition()),
      g
    );
  }
  return { parse: S };
}
function Ht(e) {
  if (e.type === 13) return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function cb(e, t = {}) {
  const n = { ast: e, helpers: new Set() };
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) };
}
function tu(e, t) {
  for (let n = 0; n < e.length; n++) Sl(e[n], t);
}
function Sl(e, t) {
  switch (e.type) {
    case 1:
      tu(e.cases, t), t.helper("plural");
      break;
    case 2:
      tu(e.items, t);
      break;
    case 6: {
      Sl(e.key, t), t.helper("linked"), t.helper("type");
      break;
    }
    case 5:
      t.helper("interpolate"), t.helper("list");
      break;
    case 4:
      t.helper("interpolate"), t.helper("named");
      break;
  }
}
function ub(e, t = {}) {
  const n = cb(e);
  n.helper("normalize"), e.body && Sl(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function fb(e) {
  const t = e.body;
  return t.type === 2 ? nu(t) : t.cases.forEach((n) => nu(n)), e;
}
function nu(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && ((e.static = t.value), delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null) break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = El(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function vr(e) {
  switch (((e.t = e.type), e.type)) {
    case 0: {
      const t = e;
      vr(t.body), (t.b = t.body), delete t.body;
      break;
    }
    case 1: {
      const t = e,
        n = t.cases;
      for (let r = 0; r < n.length; r++) vr(n[r]);
      (t.c = n), delete t.cases;
      break;
    }
    case 2: {
      const t = e,
        n = t.items;
      for (let r = 0; r < n.length; r++) vr(n[r]);
      (t.i = n),
        delete t.items,
        t.static && ((t.s = t.static), delete t.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && ((t.v = t.value), delete t.value);
      break;
    }
    case 6: {
      const t = e;
      vr(t.key),
        (t.k = t.key),
        delete t.key,
        t.modifier && (vr(t.modifier), (t.m = t.modifier), delete t.modifier);
      break;
    }
    case 5: {
      const t = e;
      (t.i = t.index), delete t.index;
      break;
    }
    case 4: {
      const t = e;
      (t.k = t.key), delete t.key;
      break;
    }
  }
  delete e.type;
}
function db(e, t) {
  const { filename: n, breakLineCode: r, needIndent: s } = t,
    o = t.location !== !1,
    i = {
      filename: n,
      code: "",
      column: 1,
      line: 1,
      offset: 0,
      map: void 0,
      breakLineCode: r,
      needIndent: s,
      indentLevel: 0,
    };
  o && e.loc && (i.source = e.loc.source);
  const a = () => i;
  function l(m, S) {
    i.code += m;
  }
  function c(m, S = !0) {
    const b = S ? r : "";
    l(s ? b + "  ".repeat(m) : b);
  }
  function u(m = !0) {
    const S = ++i.indentLevel;
    m && c(S);
  }
  function f(m = !0) {
    const S = --i.indentLevel;
    m && c(S);
  }
  function h() {
    c(i.indentLevel);
  }
  return {
    context: a,
    push: l,
    indent: u,
    deindent: f,
    newline: h,
    helper: (m) => `_${m}`,
    needIndent: () => i.needIndent,
  };
}
function hb(e, t) {
  const { helper: n } = e;
  e.push(`${n("linked")}(`),
    Mr(e, t.key),
    t.modifier
      ? (e.push(", "), Mr(e, t.modifier), e.push(", _type"))
      : e.push(", undefined, _type"),
    e.push(")");
}
function pb(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n("normalize")}([`), e.indent(r());
  const s = t.items.length;
  for (let o = 0; o < s && (Mr(e, t.items[o]), o !== s - 1); o++) e.push(", ");
  e.deindent(r()), e.push("])");
}
function mb(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n("plural")}([`), e.indent(r());
    const s = t.cases.length;
    for (let o = 0; o < s && (Mr(e, t.cases[o]), o !== s - 1); o++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function gb(e, t) {
  t.body ? Mr(e, t.body) : e.push("null");
}
function Mr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      gb(e, t);
      break;
    case 1:
      mb(e, t);
      break;
    case 2:
      pb(e, t);
      break;
    case 6:
      hb(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
  }
}
const yb = (e, t = {}) => {
  const n = te(t.mode) ? t.mode : "normal",
    r = te(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s =
      t.breakLineCode != null
        ? t.breakLineCode
        : n === "arrow"
        ? ";"
        : `
`,
    o = t.needIndent ? t.needIndent : n !== "arrow",
    i = e.helpers || [],
    a = db(e, { filename: r, breakLineCode: s, needIndent: o });
  a.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    a.indent(o),
    i.length > 0 &&
      (a.push(
        `const { ${El(
          i.map((u) => `${u}: _${u}`),
          ", "
        )} } = ctx`
      ),
      a.newline()),
    a.push("return "),
    Mr(a, e),
    a.deindent(o),
    a.push("}"),
    delete e.helpers;
  const { code: l, map: c } = a.context();
  return { ast: e, code: l, map: c ? c.toJSON() : void 0 };
};
function vb(e, t = {}) {
  const n = st({}, t),
    r = !!n.jit,
    s = !!n.minify,
    o = n.optimize == null ? !0 : n.optimize,
    a = lb(n).parse(e);
  return r
    ? (o && fb(a), s && vr(a), { ast: a, code: "" })
    : (ub(a, n), yb(a, n));
}
/*!
 * core-base v10.0.6
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */ function bb() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" &&
    (_l().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
function Vi(e) {
  return (n) => _b(n, e);
}
function _b(e, t) {
  const n = Eb(t);
  if (n == null) throw Cs(0);
  if (Cl(n) === 1) {
    const o = Cb(n);
    return e.plural(o.reduce((i, a) => [...i, ru(e, a)], []));
  } else return ru(e, n);
}
const wb = ["b", "body"];
function Eb(e) {
  return Wn(e, wb);
}
const Sb = ["c", "cases"];
function Cb(e) {
  return Wn(e, Sb, []);
}
function ru(e, t) {
  const n = Ob(t);
  if (n != null) return e.type === "text" ? n : e.normalize([n]);
  {
    const r = Ib(t).reduce((s, o) => [...s, wa(e, o)], []);
    return e.normalize(r);
  }
}
const Tb = ["s", "static"];
function Ob(e) {
  return Wn(e, Tb);
}
const Ab = ["i", "items"];
function Ib(e) {
  return Wn(e, Ab, []);
}
function wa(e, t) {
  const n = Cl(t);
  switch (n) {
    case 3:
      return ho(t, n);
    case 9:
      return ho(t, n);
    case 4: {
      const r = t;
      if (Rt(r, "k") && r.k) return e.interpolate(e.named(r.k));
      if (Rt(r, "key") && r.key) return e.interpolate(e.named(r.key));
      throw Cs(n);
    }
    case 5: {
      const r = t;
      if (Rt(r, "i") && Ge(r.i)) return e.interpolate(e.list(r.i));
      if (Rt(r, "index") && Ge(r.index)) return e.interpolate(e.list(r.index));
      throw Cs(n);
    }
    case 6: {
      const r = t,
        s = Rb(r),
        o = Nb(r);
      return e.linked(wa(e, o), s ? wa(e, s) : void 0, e.type);
    }
    case 7:
      return ho(t, n);
    case 8:
      return ho(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const xb = ["t", "type"];
function Cl(e) {
  return Wn(e, xb);
}
const kb = ["v", "value"];
function ho(e, t) {
  const n = Wn(e, kb);
  if (n) return n;
  throw Cs(t);
}
const Pb = ["m", "modifier"];
function Rb(e) {
  return Wn(e, Pb);
}
const Lb = ["k", "key"];
function Nb(e) {
  const t = Wn(e, Lb);
  if (t) return t;
  throw Cs(6);
}
function Wn(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (Rt(e, s) && e[s] != null) return e[s];
  }
  return n;
}
function Cs(e) {
  return new Error(`unhandled node type: ${e}`);
}
const Db = (e) => e;
let po = Oe();
function $r(e) {
  return we(e) && Cl(e) === 0 && (Rt(e, "b") || Rt(e, "body"));
}
function Mb(e, t = {}) {
  let n = !1;
  const r = t.onError || Xv;
  return (
    (t.onError = (s) => {
      (n = !0), r(s);
    }),
    { ...vb(e, t), detectError: n }
  );
}
function $b(e, t) {
  if (te(e)) {
    Fe(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || Db)(e),
      s = po[r];
    if (s) return s;
    const { ast: o, detectError: i } = Mb(e, { ...t, location: !1, jit: !0 }),
      a = Vi(o);
    return i ? a : (po[r] = a);
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = po[n];
      return r || (po[n] = Vi(e));
    } else return Vi(e);
  }
}
let Ts = null;
function jb(e) {
  Ts = e;
}
function Fb(e, t, n) {
  Ts &&
    Ts.emit("i18n:init", {
      timestamp: Date.now(),
      i18n: e,
      version: t,
      meta: n,
    });
}
const Hb = Ub("function:translate");
function Ub(e) {
  return (t) => Ts && Ts.emit(e, t);
}
const on = {
    INVALID_ARGUMENT: Jv,
    INVALID_DATE_ARGUMENT: 18,
    INVALID_ISO_DATE_ARGUMENT: 19,
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
    NOT_SUPPORT_LOCALE_TYPE: 23,
  },
  Vb = 24;
function an(e) {
  return vi(e, null, void 0);
}
function Tl(e, t) {
  return t.locale != null ? su(t.locale) : su(e.locale);
}
let Bi;
function su(e) {
  if (te(e)) return e;
  if (je(e)) {
    if (e.resolvedOnce && Bi != null) return Bi;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Kv(t)) throw an(on.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return (Bi = t);
    } else throw an(on.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else throw an(on.NOT_SUPPORT_LOCALE_TYPE);
}
function Bb(e, t, n) {
  return [
    ...new Set([
      n,
      ...(Xe(t) ? t : we(t) ? Object.keys(t) : te(t) ? [t] : [n]),
    ]),
  ];
}
function Sh(e, t, n) {
  const r = te(n) ? n : Ho,
    s = e;
  s.__localeChainCache || (s.__localeChainCache = new Map());
  let o = s.__localeChainCache.get(r);
  if (!o) {
    o = [];
    let i = [n];
    for (; Xe(i); ) i = ou(o, i, t);
    const a = Xe(t) || !ge(t) ? t : t.default ? t.default : null;
    (i = te(a) ? [a] : a),
      Xe(i) && ou(o, i, !1),
      s.__localeChainCache.set(r, o);
  }
  return o;
}
function ou(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && Fe(r); s++) {
    const o = t[s];
    te(o) && (r = Wb(e, t[s], n));
  }
  return r;
}
function Wb(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const o = s.join("-");
    (r = qb(e, o, n)), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function qb(e, t, n) {
  let r = !1;
  if (!e.includes(t) && ((r = !0), t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (Xe(n) || ge(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const qn = [];
qn[0] = { w: [0], i: [3, 0], "[": [4], o: [7] };
qn[1] = { w: [1], ".": [2], "[": [4], o: [7] };
qn[2] = { w: [2], i: [3, 0], 0: [3, 0] };
qn[3] = {
  i: [3, 0],
  0: [3, 0],
  w: [1, 1],
  ".": [2, 1],
  "[": [4, 1],
  o: [7, 1],
};
qn[4] = { "'": [5, 0], '"': [6, 0], "[": [4, 2], "]": [1, 3], o: 8, l: [4, 0] };
qn[5] = { "'": [4, 0], o: 8, l: [5, 0] };
qn[6] = { '"': [4, 0], o: 8, l: [6, 0] };
const Kb = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Gb(e) {
  return Kb.test(e);
}
function zb(e) {
  const t = e.charCodeAt(0),
    n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Yb(e) {
  if (e == null) return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function Jb(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e))
    ? !1
    : Gb(t)
    ? zb(t)
    : "*" + t;
}
function Xb(e) {
  const t = [];
  let n = -1,
    r = 0,
    s = 0,
    o,
    i,
    a,
    l,
    c,
    u,
    f;
  const h = [];
  (h[0] = () => {
    i === void 0 ? (i = a) : (i += a);
  }),
    (h[1] = () => {
      i !== void 0 && (t.push(i), (i = void 0));
    }),
    (h[2] = () => {
      h[0](), s++;
    }),
    (h[3] = () => {
      if (s > 0) s--, (r = 4), h[0]();
      else {
        if (((s = 0), i === void 0 || ((i = Jb(i)), i === !1))) return !1;
        h[1]();
      }
    });
  function d() {
    const p = e[n + 1];
    if ((r === 5 && p === "'") || (r === 6 && p === '"'))
      return n++, (a = "\\" + p), h[0](), !0;
  }
  for (; r !== null; )
    if ((n++, (o = e[n]), !(o === "\\" && d()))) {
      if (
        ((l = Yb(o)),
        (f = qn[r]),
        (c = f[l] || f.l || 8),
        c === 8 ||
          ((r = c[0]),
          c[1] !== void 0 && ((u = h[c[1]]), u && ((a = o), u() === !1))))
      )
        return;
      if (r === 7) return t;
    }
}
const iu = new Map();
function Qb(e, t) {
  return we(e) ? e[t] : null;
}
function Zb(e, t) {
  if (!we(e)) return null;
  let n = iu.get(t);
  if ((n || ((n = Xb(t)), n && iu.set(t, n)), !n)) return null;
  const r = n.length;
  let s = e,
    o = 0;
  for (; o < r; ) {
    const i = s[n[o]];
    if (i === void 0 || je(s)) return null;
    (s = i), o++;
  }
  return s;
}
const e_ = "10.0.6",
  bi = -1,
  Ho = "en-US",
  au = "",
  lu = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function t_() {
  return {
    upper: (e, t) =>
      t === "text" && te(e)
        ? e.toUpperCase()
        : t === "vnode" && we(e) && "__v_isVNode" in e
        ? e.children.toUpperCase()
        : e,
    lower: (e, t) =>
      t === "text" && te(e)
        ? e.toLowerCase()
        : t === "vnode" && we(e) && "__v_isVNode" in e
        ? e.children.toLowerCase()
        : e,
    capitalize: (e, t) =>
      t === "text" && te(e)
        ? lu(e)
        : t === "vnode" && we(e) && "__v_isVNode" in e
        ? lu(e.children)
        : e,
  };
}
let Ch;
function n_(e) {
  Ch = e;
}
let Th;
function r_(e) {
  Th = e;
}
let Oh;
function s_(e) {
  Oh = e;
}
let Ah = null;
const o_ = (e) => {
    Ah = e;
  },
  i_ = () => Ah;
let Ih = null;
const cu = (e) => {
    Ih = e;
  },
  a_ = () => Ih;
let uu = 0;
function l_(e = {}) {
  const t = je(e.onWarn) ? e.onWarn : zv,
    n = te(e.version) ? e.version : e_,
    r = te(e.locale) || je(e.locale) ? e.locale : Ho,
    s = je(r) ? Ho : r,
    o =
      Xe(e.fallbackLocale) ||
      ge(e.fallbackLocale) ||
      te(e.fallbackLocale) ||
      e.fallbackLocale === !1
        ? e.fallbackLocale
        : s,
    i = ge(e.messages) ? e.messages : Wi(s),
    a = ge(e.datetimeFormats) ? e.datetimeFormats : Wi(s),
    l = ge(e.numberFormats) ? e.numberFormats : Wi(s),
    c = st(Oe(), e.modifiers, t_()),
    u = e.pluralRules || Oe(),
    f = je(e.missing) ? e.missing : null,
    h = Fe(e.missingWarn) || Fo(e.missingWarn) ? e.missingWarn : !0,
    d = Fe(e.fallbackWarn) || Fo(e.fallbackWarn) ? e.fallbackWarn : !0,
    p = !!e.fallbackFormat,
    m = !!e.unresolving,
    S = je(e.postTranslation) ? e.postTranslation : null,
    b = ge(e.processor) ? e.processor : null,
    C = Fe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    y = !!e.escapeParameter,
    g = je(e.messageCompiler) ? e.messageCompiler : Ch,
    A = je(e.messageResolver) ? e.messageResolver : Th || Qb,
    L = je(e.localeFallbacker) ? e.localeFallbacker : Oh || Bb,
    P = we(e.fallbackContext) ? e.fallbackContext : void 0,
    V = e,
    N = we(V.__datetimeFormatters) ? V.__datetimeFormatters : new Map(),
    E = we(V.__numberFormatters) ? V.__numberFormatters : new Map(),
    x = we(V.__meta) ? V.__meta : {};
  uu++;
  const O = {
    version: n,
    cid: uu,
    locale: r,
    fallbackLocale: o,
    messages: i,
    modifiers: c,
    pluralRules: u,
    missing: f,
    missingWarn: h,
    fallbackWarn: d,
    fallbackFormat: p,
    unresolving: m,
    postTranslation: S,
    processor: b,
    warnHtmlMessage: C,
    escapeParameter: y,
    messageCompiler: g,
    messageResolver: A,
    localeFallbacker: L,
    fallbackContext: P,
    onWarn: t,
    __meta: x,
  };
  return (
    (O.datetimeFormats = a),
    (O.numberFormats = l),
    (O.__datetimeFormatters = N),
    (O.__numberFormatters = E),
    __INTLIFY_PROD_DEVTOOLS__ && Fb(O, n, x),
    O
  );
}
const Wi = (e) => ({ [e]: Oe() });
function Ol(e, t, n, r, s) {
  const { missing: o, onWarn: i } = e;
  if (o !== null) {
    const a = o(e, n, t, s);
    return te(a) ? a : t;
  } else return t;
}
function Qr(e, t, n) {
  const r = e;
  (r.__localeChainCache = new Map()), e.localeFallbacker(e, n, t);
}
function c_(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function u_(e, t) {
  const n = t.indexOf(e);
  if (n === -1) return !1;
  for (let r = n + 1; r < t.length; r++) if (c_(e, t[r])) return !0;
  return !1;
}
function fu(e, ...t) {
  const {
      datetimeFormats: n,
      unresolving: r,
      fallbackLocale: s,
      onWarn: o,
      localeFallbacker: i,
    } = e,
    { __datetimeFormatters: a } = e,
    [l, c, u, f] = Ea(...t),
    h = Fe(u.missingWarn) ? u.missingWarn : e.missingWarn;
  Fe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const d = !!u.part,
    p = Tl(e, u),
    m = i(e, s, p);
  if (!te(l) || l === "") return new Intl.DateTimeFormat(p, f).format(c);
  let S = {},
    b,
    C = null;
  const y = "datetime format";
  for (
    let L = 0;
    L < m.length && ((b = m[L]), (S = n[b] || {}), (C = S[l]), !ge(C));
    L++
  )
    Ol(e, l, b, h, y);
  if (!ge(C) || !te(b)) return r ? bi : l;
  let g = `${b}__${l}`;
  yi(f) || (g = `${g}__${JSON.stringify(f)}`);
  let A = a.get(g);
  return (
    A || ((A = new Intl.DateTimeFormat(b, st({}, C, f))), a.set(g, A)),
    d ? A.formatToParts(c) : A.format(c)
  );
}
const xh = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits",
];
function Ea(...e) {
  const [t, n, r, s] = e,
    o = Oe();
  let i = Oe(),
    a;
  if (te(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l) throw an(on.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3]
      ? l[3].trim().startsWith("T")
        ? `${l[1].trim()}${l[3].trim()}`
        : `${l[1].trim()}T${l[3].trim()}`
      : l[1].trim();
    a = new Date(c);
    try {
      a.toISOString();
    } catch {
      throw an(on.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Bv(t)) {
    if (isNaN(t.getTime())) throw an(on.INVALID_DATE_ARGUMENT);
    a = t;
  } else if (Ge(t)) a = t;
  else throw an(on.INVALID_ARGUMENT);
  return (
    te(n)
      ? (o.key = n)
      : ge(n) &&
        Object.keys(n).forEach((l) => {
          xh.includes(l) ? (i[l] = n[l]) : (o[l] = n[l]);
        }),
    te(r) ? (o.locale = r) : ge(r) && (i = r),
    ge(s) && (i = s),
    [o.key || "", a, o, i]
  );
}
function du(e, t, n) {
  const r = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    r.__datetimeFormatters.has(o) && r.__datetimeFormatters.delete(o);
  }
}
function hu(e, ...t) {
  const {
      numberFormats: n,
      unresolving: r,
      fallbackLocale: s,
      onWarn: o,
      localeFallbacker: i,
    } = e,
    { __numberFormatters: a } = e,
    [l, c, u, f] = Sa(...t),
    h = Fe(u.missingWarn) ? u.missingWarn : e.missingWarn;
  Fe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const d = !!u.part,
    p = Tl(e, u),
    m = i(e, s, p);
  if (!te(l) || l === "") return new Intl.NumberFormat(p, f).format(c);
  let S = {},
    b,
    C = null;
  const y = "number format";
  for (
    let L = 0;
    L < m.length && ((b = m[L]), (S = n[b] || {}), (C = S[l]), !ge(C));
    L++
  )
    Ol(e, l, b, h, y);
  if (!ge(C) || !te(b)) return r ? bi : l;
  let g = `${b}__${l}`;
  yi(f) || (g = `${g}__${JSON.stringify(f)}`);
  let A = a.get(g);
  return (
    A || ((A = new Intl.NumberFormat(b, st({}, C, f))), a.set(g, A)),
    d ? A.formatToParts(c) : A.format(c)
  );
}
const kh = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay",
];
function Sa(...e) {
  const [t, n, r, s] = e,
    o = Oe();
  let i = Oe();
  if (!Ge(t)) throw an(on.INVALID_ARGUMENT);
  const a = t;
  return (
    te(n)
      ? (o.key = n)
      : ge(n) &&
        Object.keys(n).forEach((l) => {
          kh.includes(l) ? (i[l] = n[l]) : (o[l] = n[l]);
        }),
    te(r) ? (o.locale = r) : ge(r) && (i = r),
    ge(s) && (i = s),
    [o.key || "", a, o, i]
  );
}
function pu(e, t, n) {
  const r = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    r.__numberFormatters.has(o) && r.__numberFormatters.delete(o);
  }
}
const f_ = (e) => e,
  d_ = (e) => "",
  h_ = "text",
  p_ = (e) => (e.length === 0 ? "" : El(e)),
  m_ = Gv;
function mu(e, t) {
  return (
    (e = Math.abs(e)),
    t === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
  );
}
function g_(e) {
  const t = Ge(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ge(e.named.count) || Ge(e.named.n))
    ? Ge(e.named.count)
      ? e.named.count
      : Ge(e.named.n)
      ? e.named.n
      : t
    : t;
}
function y_(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function v_(e = {}) {
  const t = e.locale,
    n = g_(e),
    r =
      we(e.pluralRules) && te(t) && je(e.pluralRules[t])
        ? e.pluralRules[t]
        : mu,
    s = we(e.pluralRules) && te(t) && je(e.pluralRules[t]) ? mu : void 0,
    o = (b) => b[r(n, b.length, s)],
    i = e.list || [],
    a = (b) => i[b],
    l = e.named || Oe();
  Ge(e.pluralIndex) && y_(n, l);
  const c = (b) => l[b];
  function u(b, C) {
    const y = je(e.messages)
      ? e.messages(b, !!C)
      : we(e.messages)
      ? e.messages[b]
      : !1;
    return y || (e.parent ? e.parent.message(b) : d_);
  }
  const f = (b) => (e.modifiers ? e.modifiers[b] : f_),
    h =
      ge(e.processor) && je(e.processor.normalize) ? e.processor.normalize : p_,
    d =
      ge(e.processor) && je(e.processor.interpolate)
        ? e.processor.interpolate
        : m_,
    p = ge(e.processor) && te(e.processor.type) ? e.processor.type : h_,
    S = {
      list: a,
      named: c,
      plural: o,
      linked: (b, ...C) => {
        const [y, g] = C;
        let A = "text",
          L = "";
        C.length === 1
          ? we(y)
            ? ((L = y.modifier || L), (A = y.type || A))
            : te(y) && (L = y || L)
          : C.length === 2 && (te(y) && (L = y || L), te(g) && (A = g || A));
        const P = u(b, !0)(S),
          V = A === "vnode" && Xe(P) && L ? P[0] : P;
        return L ? f(L)(V, A) : V;
      },
      message: u,
      type: p,
      interpolate: d,
      normalize: h,
      values: st(Oe(), i, l),
    };
  return S;
}
const gu = () => "",
  Ot = (e) => je(e);
function yu(e, ...t) {
  const {
      fallbackFormat: n,
      postTranslation: r,
      unresolving: s,
      messageCompiler: o,
      fallbackLocale: i,
      messages: a,
    } = e,
    [l, c] = Ca(...t),
    u = Fe(c.missingWarn) ? c.missingWarn : e.missingWarn,
    f = Fe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn,
    h = Fe(c.escapeParameter) ? c.escapeParameter : e.escapeParameter,
    d = !!c.resolvedMessage,
    p =
      te(c.default) || Fe(c.default)
        ? Fe(c.default)
          ? o
            ? l
            : () => l
          : c.default
        : n
        ? o
          ? l
          : () => l
        : null,
    m = n || (p != null && (te(p) || je(p))),
    S = Tl(e, c);
  h && b_(c);
  let [b, C, y] = d ? [l, S, a[S] || Oe()] : Ph(e, l, S, i, f, u),
    g = b,
    A = l;
  if (
    (!d && !(te(g) || $r(g) || Ot(g)) && m && ((g = p), (A = g)),
    !d && (!(te(g) || $r(g) || Ot(g)) || !te(C)))
  )
    return s ? bi : l;
  let L = !1;
  const P = () => {
      L = !0;
    },
    V = Ot(g) ? g : Rh(e, l, C, g, A, P);
  if (L) return g;
  const N = E_(e, C, y, c),
    E = v_(N),
    x = __(e, V, E),
    O = r ? r(x, l) : x;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const R = {
      timestamp: Date.now(),
      key: te(l) ? l : Ot(g) ? g.key : "",
      locale: C || (Ot(g) ? g.locale : ""),
      format: te(g) ? g : Ot(g) ? g.source : "",
      message: O,
    };
    (R.meta = st({}, e.__meta, i_() || {})), Hb(R);
  }
  return O;
}
function b_(e) {
  Xe(e.list)
    ? (e.list = e.list.map((t) => (te(t) ? Zc(t) : t)))
    : we(e.named) &&
      Object.keys(e.named).forEach((t) => {
        te(e.named[t]) && (e.named[t] = Zc(e.named[t]));
      });
}
function Ph(e, t, n, r, s, o) {
  const { messages: i, onWarn: a, messageResolver: l, localeFallbacker: c } = e,
    u = c(e, r, n);
  let f = Oe(),
    h,
    d = null;
  const p = "translate";
  for (
    let m = 0;
    m < u.length &&
    ((h = u[m]),
    (f = i[h] || Oe()),
    (d = l(f, t)) === null && (d = f[t]),
    !(te(d) || $r(d) || Ot(d)));
    m++
  )
    if (!u_(h, u)) {
      const S = Ol(e, t, h, o, p);
      S !== t && (d = S);
    }
  return [d, h, f];
}
function Rh(e, t, n, r, s, o) {
  const { messageCompiler: i, warnHtmlMessage: a } = e;
  if (Ot(r)) {
    const c = r;
    return (c.locale = c.locale || n), (c.key = c.key || t), c;
  }
  if (i == null) {
    const c = () => r;
    return (c.locale = n), (c.key = t), c;
  }
  const l = i(r, w_(e, n, s, r, a, o));
  return (l.locale = n), (l.key = t), (l.source = r), l;
}
function __(e, t, n) {
  return t(n);
}
function Ca(...e) {
  const [t, n, r] = e,
    s = Oe();
  if (!te(t) && !Ge(t) && !Ot(t) && !$r(t)) throw an(on.INVALID_ARGUMENT);
  const o = Ge(t) ? String(t) : (Ot(t), t);
  return (
    Ge(n)
      ? (s.plural = n)
      : te(n)
      ? (s.default = n)
      : ge(n) && !yi(n)
      ? (s.named = n)
      : Xe(n) && (s.list = n),
    Ge(r) ? (s.plural = r) : te(r) ? (s.default = r) : ge(r) && st(s, r),
    [o, s]
  );
}
function w_(e, t, n, r, s, o) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (i) => {
      throw (o && o(i), i);
    },
    onCacheKey: (i) => Uv(t, n, i),
  };
}
function E_(e, t, n, r) {
  const {
      modifiers: s,
      pluralRules: o,
      messageResolver: i,
      fallbackLocale: a,
      fallbackWarn: l,
      missingWarn: c,
      fallbackContext: u,
    } = e,
    h = {
      locale: t,
      modifiers: s,
      pluralRules: o,
      messages: (d, p) => {
        let m = i(n, d);
        if (m == null && (u || p)) {
          const [, , S] = Ph(u || e, d, t, a, l, c);
          m = i(S, d);
        }
        if (te(m) || $r(m)) {
          let S = !1;
          const C = Rh(e, d, t, m, d, () => {
            S = !0;
          });
          return S ? gu : C;
        } else return Ot(m) ? m : gu;
      },
    };
  return (
    e.processor && (h.processor = e.processor),
    r.list && (h.list = r.list),
    r.named && (h.named = r.named),
    Ge(r.plural) && (h.pluralIndex = r.plural),
    h
  );
}
bb();
/*!
 * vue-i18n v10.0.6
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */ const S_ = "10.0.6";
function C_() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" &&
    (_l().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Pt = {
  UNEXPECTED_RETURN_TYPE: Vb,
  INVALID_ARGUMENT: 25,
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  UNEXPECTED_ERROR: 32,
};
function Mt(e, ...t) {
  return vi(e, null, void 0);
}
const Ta = Bn("__translateVNode"),
  Oa = Bn("__datetimeParts"),
  Aa = Bn("__numberParts"),
  T_ = Bn("__setPluralRules"),
  O_ = Bn("__injectWithOption"),
  Ia = Bn("__dispose");
function Os(e) {
  if (!we(e)) return e;
  for (const t in e)
    if (Rt(e, t))
      if (!t.includes(".")) we(e[t]) && Os(e[t]);
      else {
        const n = t.split("."),
          r = n.length - 1;
        let s = e,
          o = !1;
        for (let i = 0; i < r; i++) {
          if (n[i] === "__proto__") throw new Error(`unsafe key: ${n[i]}`);
          if ((n[i] in s || (s[n[i]] = Oe()), !we(s[n[i]]))) {
            o = !0;
            break;
          }
          s = s[n[i]];
        }
        o || ((s[n[r]] = e[t]), delete e[t]), we(s[n[r]]) && Os(s[n[r]]);
      }
  return e;
}
function Lh(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: o } = t,
    i = ge(n) ? n : Xe(r) ? Oe() : { [e]: Oe() };
  if (
    (Xe(r) &&
      r.forEach((a) => {
        if ("locale" in a && "resource" in a) {
          const { locale: l, resource: c } = a;
          l ? ((i[l] = i[l] || Oe()), Co(c, i[l])) : Co(c, i);
        } else te(a) && Co(JSON.parse(a), i);
      }),
    s == null && o)
  )
    for (const a in i) Rt(i, a) && Os(i[a]);
  return i;
}
function Nh(e) {
  return e.type;
}
function A_(e, t, n) {
  let r = we(t.messages) ? t.messages : Oe();
  "__i18nGlobal" in n &&
    (r = Lh(e.locale.value, { messages: r, __i18n: n.__i18nGlobal }));
  const s = Object.keys(r);
  s.length &&
    s.forEach((o) => {
      e.mergeLocaleMessage(o, r[o]);
    });
  {
    if (we(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length &&
        o.forEach((i) => {
          e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
        });
    }
    if (we(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length &&
        o.forEach((i) => {
          e.mergeNumberFormat(i, t.numberFormats[i]);
        });
    }
  }
}
function vu(e) {
  return ce(Nn, null, e, 0);
}
const bu = "__INTLIFY_META__",
  _u = () => [],
  I_ = () => !1;
let wu = 0;
function Eu(e) {
  return (t, n, r, s) => e(n, r, Vn() || void 0, s);
}
const x_ = () => {
  const e = Vn();
  let t = null;
  return e && (t = Nh(e)[bu]) ? { [bu]: t } : null;
};
function Dh(e = {}) {
  const { __root: t, __injectWithOption: n } = e,
    r = t === void 0,
    s = e.flatJson,
    o = jo ? re : ul;
  let i = Fe(e.inheritLocale) ? e.inheritLocale : !0;
  const a = o(t && i ? t.locale.value : te(e.locale) ? e.locale : Ho),
    l = o(
      t && i
        ? t.fallbackLocale.value
        : te(e.fallbackLocale) ||
          Xe(e.fallbackLocale) ||
          ge(e.fallbackLocale) ||
          e.fallbackLocale === !1
        ? e.fallbackLocale
        : a.value
    ),
    c = o(Lh(a.value, e)),
    u = o(ge(e.datetimeFormats) ? e.datetimeFormats : { [a.value]: {} }),
    f = o(ge(e.numberFormats) ? e.numberFormats : { [a.value]: {} });
  let h = t
      ? t.missingWarn
      : Fe(e.missingWarn) || Fo(e.missingWarn)
      ? e.missingWarn
      : !0,
    d = t
      ? t.fallbackWarn
      : Fe(e.fallbackWarn) || Fo(e.fallbackWarn)
      ? e.fallbackWarn
      : !0,
    p = t ? t.fallbackRoot : Fe(e.fallbackRoot) ? e.fallbackRoot : !0,
    m = !!e.fallbackFormat,
    S = je(e.missing) ? e.missing : null,
    b = je(e.missing) ? Eu(e.missing) : null,
    C = je(e.postTranslation) ? e.postTranslation : null,
    y = t ? t.warnHtmlMessage : Fe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    g = !!e.escapeParameter;
  const A = t ? t.modifiers : ge(e.modifiers) ? e.modifiers : {};
  let L = e.pluralRules || (t && t.pluralRules),
    P;
  (P = (() => {
    r && cu(null);
    const I = {
      version: S_,
      locale: a.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: A,
      pluralRules: L,
      missing: b === null ? void 0 : b,
      missingWarn: h,
      fallbackWarn: d,
      fallbackFormat: m,
      unresolving: !0,
      postTranslation: C === null ? void 0 : C,
      warnHtmlMessage: y,
      escapeParameter: g,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" },
    };
    (I.datetimeFormats = u.value),
      (I.numberFormats = f.value),
      (I.__datetimeFormatters = ge(P) ? P.__datetimeFormatters : void 0),
      (I.__numberFormatters = ge(P) ? P.__numberFormatters : void 0);
    const M = l_(I);
    return r && cu(M), M;
  })()),
    Qr(P, a.value, l.value);
  function N() {
    return [a.value, l.value, c.value, u.value, f.value];
  }
  const E = ye({
      get: () => a.value,
      set: (I) => {
        (a.value = I), (P.locale = a.value);
      },
    }),
    x = ye({
      get: () => l.value,
      set: (I) => {
        (l.value = I), (P.fallbackLocale = l.value), Qr(P, a.value, I);
      },
    }),
    O = ye(() => c.value),
    R = ye(() => u.value),
    Z = ye(() => f.value);
  function G() {
    return je(C) ? C : null;
  }
  function q(I) {
    (C = I), (P.postTranslation = I);
  }
  function ee() {
    return S;
  }
  function X(I) {
    I !== null && (b = Eu(I)), (S = I), (P.missing = b);
  }
  const le = (I, M, J, se, he, pe) => {
    N();
    let qe;
    try {
      __INTLIFY_PROD_DEVTOOLS__,
        r || (P.fallbackContext = t ? a_() : void 0),
        (qe = I(P));
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, r || (P.fallbackContext = void 0);
    }
    if (
      (J !== "translate exists" && Ge(qe) && qe === bi) ||
      (J === "translate exists" && !qe)
    ) {
      const [et, Et] = M();
      return t && p ? se(t) : he(et);
    } else {
      if (pe(qe)) return qe;
      throw Mt(Pt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Re(...I) {
    return le(
      (M) => Reflect.apply(yu, null, [M, ...I]),
      () => Ca(...I),
      "translate",
      (M) => Reflect.apply(M.t, M, [...I]),
      (M) => M,
      (M) => te(M)
    );
  }
  function $e(...I) {
    const [M, J, se] = I;
    if (se && !we(se)) throw Mt(Pt.INVALID_ARGUMENT);
    return Re(M, J, st({ resolvedMessage: !0 }, se || {}));
  }
  function xe(...I) {
    return le(
      (M) => Reflect.apply(fu, null, [M, ...I]),
      () => Ea(...I),
      "datetime format",
      (M) => Reflect.apply(M.d, M, [...I]),
      () => au,
      (M) => te(M)
    );
  }
  function Be(...I) {
    return le(
      (M) => Reflect.apply(hu, null, [M, ...I]),
      () => Sa(...I),
      "number format",
      (M) => Reflect.apply(M.n, M, [...I]),
      () => au,
      (M) => te(M)
    );
  }
  function Qe(I) {
    return I.map((M) => (te(M) || Ge(M) || Fe(M) ? vu(String(M)) : M));
  }
  const Ze = { normalize: Qe, interpolate: (I) => I, type: "vnode" };
  function H(...I) {
    return le(
      (M) => {
        let J;
        const se = M;
        try {
          (se.processor = Ze), (J = Reflect.apply(yu, null, [se, ...I]));
        } finally {
          se.processor = null;
        }
        return J;
      },
      () => Ca(...I),
      "translate",
      (M) => M[Ta](...I),
      (M) => [vu(M)],
      (M) => Xe(M)
    );
  }
  function z(...I) {
    return le(
      (M) => Reflect.apply(hu, null, [M, ...I]),
      () => Sa(...I),
      "number format",
      (M) => M[Aa](...I),
      _u,
      (M) => te(M) || Xe(M)
    );
  }
  function Y(...I) {
    return le(
      (M) => Reflect.apply(fu, null, [M, ...I]),
      () => Ea(...I),
      "datetime format",
      (M) => M[Oa](...I),
      _u,
      (M) => te(M) || Xe(M)
    );
  }
  function ne(I) {
    (L = I), (P.pluralRules = L);
  }
  function de(I, M) {
    return le(
      () => {
        if (!I) return !1;
        const J = te(M) ? M : a.value,
          se = T(J),
          he = P.messageResolver(se, I);
        return $r(he) || Ot(he) || te(he);
      },
      () => [I],
      "translate exists",
      (J) => Reflect.apply(J.te, J, [I, M]),
      I_,
      (J) => Fe(J)
    );
  }
  function Te(I) {
    let M = null;
    const J = Sh(P, l.value, a.value);
    for (let se = 0; se < J.length; se++) {
      const he = c.value[J[se]] || {},
        pe = P.messageResolver(he, I);
      if (pe != null) {
        M = pe;
        break;
      }
    }
    return M;
  }
  function _(I) {
    const M = Te(I);
    return M ?? (t ? t.tm(I) || {} : {});
  }
  function T(I) {
    return c.value[I] || {};
  }
  function D(I, M) {
    if (s) {
      const J = { [I]: M };
      for (const se in J) Rt(J, se) && Os(J[se]);
      M = J[I];
    }
    (c.value[I] = M), (P.messages = c.value);
  }
  function W(I, M) {
    c.value[I] = c.value[I] || {};
    const J = { [I]: M };
    if (s) for (const se in J) Rt(J, se) && Os(J[se]);
    (M = J[I]), Co(M, c.value[I]), (P.messages = c.value);
  }
  function F(I) {
    return u.value[I] || {};
  }
  function v(I, M) {
    (u.value[I] = M), (P.datetimeFormats = u.value), du(P, I, M);
  }
  function w(I, M) {
    (u.value[I] = st(u.value[I] || {}, M)),
      (P.datetimeFormats = u.value),
      du(P, I, M);
  }
  function k(I) {
    return f.value[I] || {};
  }
  function $(I, M) {
    (f.value[I] = M), (P.numberFormats = f.value), pu(P, I, M);
  }
  function U(I, M) {
    (f.value[I] = st(f.value[I] || {}, M)),
      (P.numberFormats = f.value),
      pu(P, I, M);
  }
  wu++,
    t &&
      jo &&
      (Pe(t.locale, (I) => {
        i && ((a.value = I), (P.locale = I), Qr(P, a.value, l.value));
      }),
      Pe(t.fallbackLocale, (I) => {
        i && ((l.value = I), (P.fallbackLocale = I), Qr(P, a.value, l.value));
      }));
  const K = {
    id: wu,
    locale: E,
    fallbackLocale: x,
    get inheritLocale() {
      return i;
    },
    set inheritLocale(I) {
      (i = I),
        I &&
          t &&
          ((a.value = t.locale.value),
          (l.value = t.fallbackLocale.value),
          Qr(P, a.value, l.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: O,
    get modifiers() {
      return A;
    },
    get pluralRules() {
      return L || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return h;
    },
    set missingWarn(I) {
      (h = I), (P.missingWarn = h);
    },
    get fallbackWarn() {
      return d;
    },
    set fallbackWarn(I) {
      (d = I), (P.fallbackWarn = d);
    },
    get fallbackRoot() {
      return p;
    },
    set fallbackRoot(I) {
      p = I;
    },
    get fallbackFormat() {
      return m;
    },
    set fallbackFormat(I) {
      (m = I), (P.fallbackFormat = m);
    },
    get warnHtmlMessage() {
      return y;
    },
    set warnHtmlMessage(I) {
      (y = I), (P.warnHtmlMessage = I);
    },
    get escapeParameter() {
      return g;
    },
    set escapeParameter(I) {
      (g = I), (P.escapeParameter = I);
    },
    t: Re,
    getLocaleMessage: T,
    setLocaleMessage: D,
    mergeLocaleMessage: W,
    getPostTranslationHandler: G,
    setPostTranslationHandler: q,
    getMissingHandler: ee,
    setMissingHandler: X,
    [T_]: ne,
  };
  return (
    (K.datetimeFormats = R),
    (K.numberFormats = Z),
    (K.rt = $e),
    (K.te = de),
    (K.tm = _),
    (K.d = xe),
    (K.n = Be),
    (K.getDateTimeFormat = F),
    (K.setDateTimeFormat = v),
    (K.mergeDateTimeFormat = w),
    (K.getNumberFormat = k),
    (K.setNumberFormat = $),
    (K.mergeNumberFormat = U),
    (K[O_] = n),
    (K[Ta] = H),
    (K[Oa] = Y),
    (K[Aa] = z),
    K
  );
}
const Al = {
  tag: { type: [String, Object] },
  locale: { type: String },
  scope: {
    type: String,
    validator: (e) => e === "parent" || e === "global",
    default: "parent",
  },
  i18n: { type: Object },
};
function k_({ slots: e }, t) {
  return t.length === 1 && t[0] === "default"
    ? (e.default ? e.default() : []).reduce(
        (r, s) => [...r, ...(s.type === Ue ? s.children : [s])],
        []
      )
    : t.reduce((n, r) => {
        const s = e[r];
        return s && (n[r] = s()), n;
      }, Oe());
}
function Mh() {
  return Ue;
}
const P_ = Me({
    name: "i18n-t",
    props: st(
      {
        keypath: { type: String, required: !0 },
        plural: {
          type: [Number, String],
          validator: (e) => Ge(e) || !isNaN(e),
        },
      },
      Al
    ),
    setup(e, t) {
      const { slots: n, attrs: r } = t,
        s = e.i18n || Qs({ useScope: e.scope, __useComponent: !0 });
      return () => {
        const o = Object.keys(n).filter((f) => f !== "_"),
          i = Oe();
        e.locale && (i.locale = e.locale),
          e.plural !== void 0 &&
            (i.plural = te(e.plural) ? +e.plural : e.plural);
        const a = k_(t, o),
          l = s[Ta](e.keypath, a, i),
          c = st(Oe(), r),
          u = te(e.tag) || we(e.tag) ? e.tag : Mh();
        return Xs(u, c, l);
      };
    },
  }),
  Su = P_;
function R_(e) {
  return Xe(e) && !te(e[0]);
}
function $h(e, t, n, r) {
  const { slots: s, attrs: o } = t;
  return () => {
    const i = { part: !0 };
    let a = Oe();
    e.locale && (i.locale = e.locale),
      te(e.format)
        ? (i.key = e.format)
        : we(e.format) &&
          (te(e.format.key) && (i.key = e.format.key),
          (a = Object.keys(e.format).reduce(
            (h, d) => (n.includes(d) ? st(Oe(), h, { [d]: e.format[d] }) : h),
            Oe()
          )));
    const l = r(e.value, i, a);
    let c = [i.key];
    Xe(l)
      ? (c = l.map((h, d) => {
          const p = s[h.type],
            m = p ? p({ [h.type]: h.value, index: d, parts: l }) : [h.value];
          return R_(m) && (m[0].key = `${h.type}-${d}`), m;
        }))
      : te(l) && (c = [l]);
    const u = st(Oe(), o),
      f = te(e.tag) || we(e.tag) ? e.tag : Mh();
    return Xs(f, u, c);
  };
}
const L_ = Me({
    name: "i18n-n",
    props: st(
      {
        value: { type: Number, required: !0 },
        format: { type: [String, Object] },
      },
      Al
    ),
    setup(e, t) {
      const n = e.i18n || Qs({ useScope: e.scope, __useComponent: !0 });
      return $h(e, t, kh, (...r) => n[Aa](...r));
    },
  }),
  Cu = L_,
  N_ = Me({
    name: "i18n-d",
    props: st(
      {
        value: { type: [Number, Date], required: !0 },
        format: { type: [String, Object] },
      },
      Al
    ),
    setup(e, t) {
      const n = e.i18n || Qs({ useScope: e.scope, __useComponent: !0 });
      return $h(e, t, xh, (...r) => n[Oa](...r));
    },
  }),
  Tu = N_;
function D_(e, t) {
  const n = e;
  if (e.mode === "composition") return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function M_(e) {
  const t = (i) => {
    const { instance: a, value: l } = i;
    if (!a || !a.$) throw Mt(Pt.UNEXPECTED_ERROR);
    const c = D_(e, a.$),
      u = Ou(l);
    return [Reflect.apply(c.t, c, [...Au(u)]), c];
  };
  return {
    created: (i, a) => {
      const [l, c] = t(a);
      jo &&
        e.global === c &&
        (i.__i18nWatcher = Pe(c.locale, () => {
          a.instance && a.instance.$forceUpdate();
        })),
        (i.__composer = c),
        (i.textContent = l);
    },
    unmounted: (i) => {
      jo &&
        i.__i18nWatcher &&
        (i.__i18nWatcher(), (i.__i18nWatcher = void 0), delete i.__i18nWatcher),
        i.__composer && ((i.__composer = void 0), delete i.__composer);
    },
    beforeUpdate: (i, { value: a }) => {
      if (i.__composer) {
        const l = i.__composer,
          c = Ou(a);
        i.textContent = Reflect.apply(l.t, l, [...Au(c)]);
      }
    },
    getSSRProps: (i) => {
      const [a] = t(i);
      return { textContent: a };
    },
  };
}
function Ou(e) {
  if (te(e)) return { path: e };
  if (ge(e)) {
    if (!("path" in e)) throw Mt(Pt.REQUIRED_VALUE, "path");
    return e;
  } else throw Mt(Pt.INVALID_VALUE);
}
function Au(e) {
  const { path: t, locale: n, args: r, choice: s, plural: o } = e,
    i = {},
    a = r || {};
  return (
    te(n) && (i.locale = n),
    Ge(s) && (i.plural = s),
    Ge(o) && (i.plural = o),
    [t, a, i]
  );
}
function $_(e, t, ...n) {
  const r = ge(n[0]) ? n[0] : {};
  (Fe(r.globalInstall) ? r.globalInstall : !0) &&
    ([Su.name, "I18nT"].forEach((o) => e.component(o, Su)),
    [Cu.name, "I18nN"].forEach((o) => e.component(o, Cu)),
    [Tu.name, "I18nD"].forEach((o) => e.component(o, Tu))),
    e.directive("t", M_(t));
}
const j_ = Bn("global-vue-i18n");
function F_(e = {}, t) {
  const n = Fe(e.globalInjection) ? e.globalInjection : !0,
    r = new Map(),
    [s, o] = H_(e),
    i = Bn("");
  function a(f) {
    return r.get(f) || null;
  }
  function l(f, h) {
    r.set(f, h);
  }
  function c(f) {
    r.delete(f);
  }
  const u = {
    get mode() {
      return "composition";
    },
    async install(f, ...h) {
      if (
        ((f.__VUE_I18N_SYMBOL__ = i),
        f.provide(f.__VUE_I18N_SYMBOL__, u),
        ge(h[0]))
      ) {
        const m = h[0];
        (u.__composerExtend = m.__composerExtend),
          (u.__vueI18nExtend = m.__vueI18nExtend);
      }
      let d = null;
      n && (d = z_(f, u.global)), $_(f, u, ...h);
      const p = f.unmount;
      f.unmount = () => {
        d && d(), u.dispose(), p();
      };
    },
    get global() {
      return o;
    },
    dispose() {
      s.stop();
    },
    __instances: r,
    __getInstance: a,
    __setInstance: l,
    __deleteInstance: c,
  };
  return u;
}
function Qs(e = {}) {
  const t = Vn();
  if (t == null) throw Mt(Pt.MUST_BE_CALL_SETUP_TOP);
  if (
    !t.isCE &&
    t.appContext.app != null &&
    !t.appContext.app.__VUE_I18N_SYMBOL__
  )
    throw Mt(Pt.NOT_INSTALLED);
  const n = U_(t),
    r = B_(n),
    s = Nh(t),
    o = V_(e, s);
  if (o === "global") return A_(r, e, s), r;
  if (o === "parent") {
    let l = W_(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const i = n;
  let a = i.__getInstance(t);
  if (a == null) {
    const l = st({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n),
      r && (l.__root = r),
      (a = Dh(l)),
      i.__composerExtend && (a[Ia] = i.__composerExtend(a)),
      K_(i, t, a),
      i.__setInstance(t, a);
  }
  return a;
}
function H_(e, t, n) {
  const r = nl(),
    s = r.run(() => Dh(e));
  if (s == null) throw Mt(Pt.UNEXPECTED_ERROR);
  return [r, s];
}
function U_(e) {
  const t = ze(e.isCE ? j_ : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Mt(e.isCE ? Pt.NOT_INSTALLED_WITH_PROVIDE : Pt.UNEXPECTED_ERROR);
  return t;
}
function V_(e, t) {
  return yi(e)
    ? "__i18n" in t
      ? "local"
      : "global"
    : e.useScope
    ? e.useScope
    : "local";
}
function B_(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function W_(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let o = q_(t, n);
  for (; o != null; ) {
    const i = e;
    if (
      (e.mode === "composition" && (r = i.__getInstance(o)),
      r != null || s === o)
    )
      break;
    o = o.parent;
  }
  return r;
}
function q_(e, t = !1) {
  return e == null ? null : (t && e.vnode.ctx) || e.parent;
}
function K_(e, t, n) {
  kt(() => {}, t),
    hl(() => {
      const r = n;
      e.__deleteInstance(t);
      const s = r[Ia];
      s && (s(), delete r[Ia]);
    }, t);
}
const G_ = ["locale", "fallbackLocale", "availableLocales"],
  Iu = ["t", "rt", "d", "n", "tm", "te"];
function z_(e, t) {
  const n = Object.create(null);
  return (
    G_.forEach((s) => {
      const o = Object.getOwnPropertyDescriptor(t, s);
      if (!o) throw Mt(Pt.UNEXPECTED_ERROR);
      const i = Ne(o.value)
        ? {
            get() {
              return o.value.value;
            },
            set(a) {
              o.value.value = a;
            },
          }
        : {
            get() {
              return o.get && o.get();
            },
          };
      Object.defineProperty(n, s, i);
    }),
    (e.config.globalProperties.$i18n = n),
    Iu.forEach((s) => {
      const o = Object.getOwnPropertyDescriptor(t, s);
      if (!o || !o.value) throw Mt(Pt.UNEXPECTED_ERROR);
      Object.defineProperty(e.config.globalProperties, `$${s}`, o);
    }),
    () => {
      delete e.config.globalProperties.$i18n,
        Iu.forEach((s) => {
          delete e.config.globalProperties[`$${s}`];
        });
    }
  );
}
C_();
n_($b);
r_(Zb);
s_(Sh);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = _l();
  (e.__INTLIFY__ = !0), jb(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const Uo = F_({ locale: "", messages: {} }),
  jh = Object.fromEntries(
    Object.entries(
      Object.assign({
        "../../locales/ar.yml": () => _e(() => import("./ar-HvujSz0t.js"), []),
        "../../locales/de.yml": () => _e(() => import("./de-tIfILiOM.js"), []),
        "../../locales/en.yml": () => _e(() => import("./en-uqoOIB2y.js"), []),
        "../../locales/es.yml": () => _e(() => import("./es-DCBmW4A7.js"), []),
        "../../locales/fr.yml": () => _e(() => import("./fr-C-cySWgT.js"), []),
        "../../locales/id.yml": () => _e(() => import("./id-Cdl9masJ.js"), []),
        "../../locales/it.yml": () => _e(() => import("./it-CZF_x55d.js"), []),
        "../../locales/ja.yml": () => _e(() => import("./ja-bk9vkbha.js"), []),
        "../../locales/ka.yml": () => _e(() => import("./ka-DrXH8DM7.js"), []),
        "../../locales/ko.yml": () => _e(() => import("./ko-D1Wq3H7u.js"), []),
        "../../locales/pl.yml": () => _e(() => import("./pl-x_vaV0QH.js"), []),
        "../../locales/pt-BR.yml": () =>
          _e(() => import("./pt-BR-CJ3Aq30r.js"), []),
        "../../locales/ru.yml": () => _e(() => import("./ru-BQt2BLfU.js"), []),
        "../../locales/tr.yml": () => _e(() => import("./tr-CMH1HB1g.js"), []),
        "../../locales/uk.yml": () => _e(() => import("./uk-PdFIL57p.js"), []),
        "../../locales/vi.yml": () => _e(() => import("./vi-BsN4yQMQ.js"), []),
        "../../locales/zh-CN.yml": () =>
          _e(() => import("./zh-CN-CME5MBO5.js"), []),
      })
    ).map(([e, t]) => {
      var n;
      return [(n = e.match(/([\w-]*)\.yml$/)) == null ? void 0 : n[1], t];
    })
  ),
  Y_ = Object.keys(jh),
  xu = [];
function qi(e) {
  var t;
  return (
    (Uo.global.locale.value = e),
    typeof document < "u" &&
      ((t = document.querySelector("html")) == null ||
        t.setAttribute("lang", e)),
    e
  );
}
async function Fh(e) {
  if (Uo.global.locale.value === e || xu.includes(e)) return qi(e);
  const t = await jh[e]();
  return Uo.global.setLocaleMessage(e, t.default), xu.push(e), qi(e);
}
const J_ = ({ app: e }) => {
    e.use(Uo), Fh("en");
  },
  X_ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        availableLocales: Y_,
        install: J_,
        loadLanguageAsync: Fh,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
var Hh =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Uh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Vh = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */ (function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(Hh, function () {
    var n = {};
    n.version = "0.2.0";
    var r = (n.settings = {
      minimum: 0.08,
      easing: "ease",
      positionUsing: "",
      speed: 200,
      trickle: !0,
      trickleRate: 0.02,
      trickleSpeed: 800,
      showSpinner: !0,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template:
        '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
    });
    (n.configure = function (p) {
      var m, S;
      for (m in p)
        (S = p[m]), S !== void 0 && p.hasOwnProperty(m) && (r[m] = S);
      return this;
    }),
      (n.status = null),
      (n.set = function (p) {
        var m = n.isStarted();
        (p = s(p, r.minimum, 1)), (n.status = p === 1 ? null : p);
        var S = n.render(!m),
          b = S.querySelector(r.barSelector),
          C = r.speed,
          y = r.easing;
        return (
          S.offsetWidth,
          a(function (g) {
            r.positionUsing === "" && (r.positionUsing = n.getPositioningCSS()),
              l(b, i(p, C, y)),
              p === 1
                ? (l(S, { transition: "none", opacity: 1 }),
                  S.offsetWidth,
                  setTimeout(function () {
                    l(S, { transition: "all " + C + "ms linear", opacity: 0 }),
                      setTimeout(function () {
                        n.remove(), g();
                      }, C);
                  }, C))
                : setTimeout(g, C);
          }),
          this
        );
      }),
      (n.isStarted = function () {
        return typeof n.status == "number";
      }),
      (n.start = function () {
        n.status || n.set(0);
        var p = function () {
          setTimeout(function () {
            n.status && (n.trickle(), p());
          }, r.trickleSpeed);
        };
        return r.trickle && p(), this;
      }),
      (n.done = function (p) {
        return !p && !n.status ? this : n.inc(0.3 + 0.5 * Math.random()).set(1);
      }),
      (n.inc = function (p) {
        var m = n.status;
        return m
          ? (typeof p != "number" &&
              (p = (1 - m) * s(Math.random() * m, 0.1, 0.95)),
            (m = s(m + p, 0, 0.994)),
            n.set(m))
          : n.start();
      }),
      (n.trickle = function () {
        return n.inc(Math.random() * r.trickleRate);
      }),
      (function () {
        var p = 0,
          m = 0;
        n.promise = function (S) {
          return !S || S.state() === "resolved"
            ? this
            : (m === 0 && n.start(),
              p++,
              m++,
              S.always(function () {
                m--, m === 0 ? ((p = 0), n.done()) : n.set((p - m) / p);
              }),
              this);
        };
      })(),
      (n.render = function (p) {
        if (n.isRendered()) return document.getElementById("nprogress");
        u(document.documentElement, "nprogress-busy");
        var m = document.createElement("div");
        (m.id = "nprogress"), (m.innerHTML = r.template);
        var S = m.querySelector(r.barSelector),
          b = p ? "-100" : o(n.status || 0),
          C = document.querySelector(r.parent),
          y;
        return (
          l(S, {
            transition: "all 0 linear",
            transform: "translate3d(" + b + "%,0,0)",
          }),
          r.showSpinner ||
            ((y = m.querySelector(r.spinnerSelector)), y && d(y)),
          C != document.body && u(C, "nprogress-custom-parent"),
          C.appendChild(m),
          m
        );
      }),
      (n.remove = function () {
        f(document.documentElement, "nprogress-busy"),
          f(document.querySelector(r.parent), "nprogress-custom-parent");
        var p = document.getElementById("nprogress");
        p && d(p);
      }),
      (n.isRendered = function () {
        return !!document.getElementById("nprogress");
      }),
      (n.getPositioningCSS = function () {
        var p = document.body.style,
          m =
            "WebkitTransform" in p
              ? "Webkit"
              : "MozTransform" in p
              ? "Moz"
              : "msTransform" in p
              ? "ms"
              : "OTransform" in p
              ? "O"
              : "";
        return m + "Perspective" in p
          ? "translate3d"
          : m + "Transform" in p
          ? "translate"
          : "margin";
      });
    function s(p, m, S) {
      return p < m ? m : p > S ? S : p;
    }
    function o(p) {
      return (-1 + p) * 100;
    }
    function i(p, m, S) {
      var b;
      return (
        r.positionUsing === "translate3d"
          ? (b = { transform: "translate3d(" + o(p) + "%,0,0)" })
          : r.positionUsing === "translate"
          ? (b = { transform: "translate(" + o(p) + "%,0)" })
          : (b = { "margin-left": o(p) + "%" }),
        (b.transition = "all " + m + "ms " + S),
        b
      );
    }
    var a = (function () {
        var p = [];
        function m() {
          var S = p.shift();
          S && S(m);
        }
        return function (S) {
          p.push(S), p.length == 1 && m();
        };
      })(),
      l = (function () {
        var p = ["Webkit", "O", "Moz", "ms"],
          m = {};
        function S(g) {
          return g
            .replace(/^-ms-/, "ms-")
            .replace(/-([\da-z])/gi, function (A, L) {
              return L.toUpperCase();
            });
        }
        function b(g) {
          var A = document.body.style;
          if (g in A) return g;
          for (
            var L = p.length, P = g.charAt(0).toUpperCase() + g.slice(1), V;
            L--;
          )
            if (((V = p[L] + P), V in A)) return V;
          return g;
        }
        function C(g) {
          return (g = S(g)), m[g] || (m[g] = b(g));
        }
        function y(g, A, L) {
          (A = C(A)), (g.style[A] = L);
        }
        return function (g, A) {
          var L = arguments,
            P,
            V;
          if (L.length == 2)
            for (P in A)
              (V = A[P]), V !== void 0 && A.hasOwnProperty(P) && y(g, P, V);
          else y(g, L[1], L[2]);
        };
      })();
    function c(p, m) {
      var S = typeof p == "string" ? p : h(p);
      return S.indexOf(" " + m + " ") >= 0;
    }
    function u(p, m) {
      var S = h(p),
        b = S + m;
      c(S, m) || (p.className = b.substring(1));
    }
    function f(p, m) {
      var S = h(p),
        b;
      c(p, m) &&
        ((b = S.replace(" " + m + " ", " ")),
        (p.className = b.substring(1, b.length - 1)));
    }
    function h(p) {
      return (" " + (p.className || "") + " ").replace(/\s+/gi, " ");
    }
    function d(p) {
      p && p.parentNode && p.parentNode.removeChild(p);
    }
    return n;
  });
})(Vh);
var Q_ = Vh.exports;
const ku = Uh(Q_),
  Z_ = ({ isClient: e, router: t }) => {
    e &&
      (t.beforeEach((n, r) => {
        n.path !== r.path && ku.start();
      }),
      t.afterEach(() => {
        ku.done();
      }));
  },
  e0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, install: Z_ },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ let Bh;
const _i = (e) => (Bh = e),
  Wh = Symbol();
function xa(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var cs;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(cs || (cs = {}));
function t0() {
  const e = nl(!0),
    t = e.run(() => re({}));
  let n = [],
    r = [];
  const s = un({
    install(o) {
      _i(s),
        (s._a = o),
        o.provide(Wh, s),
        (o.config.globalProperties.$pinia = s),
        r.forEach((i) => n.push(i)),
        (r = []);
    },
    use(o) {
      return this._a ? n.push(o) : r.push(o), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return s;
}
const qh = () => {};
function Pu(e, t, n, r = qh) {
  e.push(t);
  const s = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), r());
  };
  return !n && rl() && id(s), s;
}
function gr(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const n0 = (e) => e(),
  Ru = Symbol(),
  Ki = Symbol();
function ka(e, t) {
  e instanceof Map && t instanceof Map
    ? t.forEach((n, r) => e.set(r, n))
    : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const r = t[n],
      s = e[n];
    xa(s) && xa(r) && e.hasOwnProperty(n) && !Ne(r) && !cn(r)
      ? (e[n] = ka(s, r))
      : (e[n] = r);
  }
  return e;
}
const r0 = Symbol();
function s0(e) {
  return !xa(e) || !e.hasOwnProperty(r0);
}
const { assign: _n } = Object;
function o0(e) {
  return !!(Ne(e) && e.effect);
}
function i0(e, t, n, r) {
  const { state: s, actions: o, getters: i } = t,
    a = n.state.value[e];
  let l;
  function c() {
    a || (n.state.value[e] = s ? s() : {});
    const u = Kg(n.state.value[e]);
    return _n(
      u,
      o,
      Object.keys(i || {}).reduce(
        (f, h) => (
          (f[h] = un(
            ye(() => {
              _i(n);
              const d = n._s.get(e);
              return i[h].call(d, d);
            })
          )),
          f
        ),
        {}
      )
    );
  }
  return (l = Kh(e, c, t, n, r, !0)), l;
}
function Kh(e, t, n = {}, r, s, o) {
  let i;
  const a = _n({ actions: {} }, n),
    l = { deep: !0 };
  let c,
    u,
    f = [],
    h = [],
    d;
  const p = r.state.value[e];
  !o && !p && (r.state.value[e] = {}), re({});
  let m;
  function S(V) {
    let N;
    (c = u = !1),
      typeof V == "function"
        ? (V(r.state.value[e]),
          (N = { type: cs.patchFunction, storeId: e, events: d }))
        : (ka(r.state.value[e], V),
          (N = { type: cs.patchObject, payload: V, storeId: e, events: d }));
    const E = (m = Symbol());
    Un().then(() => {
      m === E && (c = !0);
    }),
      (u = !0),
      gr(f, N, r.state.value[e]);
  }
  const b = o
    ? function () {
        const { state: N } = n,
          E = N ? N() : {};
        this.$patch((x) => {
          _n(x, E);
        });
      }
    : qh;
  function C() {
    i.stop(), (f = []), (h = []), r._s.delete(e);
  }
  const y = (V, N = "") => {
      if (Ru in V) return (V[Ki] = N), V;
      const E = function () {
        _i(r);
        const x = Array.from(arguments),
          O = [],
          R = [];
        function Z(ee) {
          O.push(ee);
        }
        function G(ee) {
          R.push(ee);
        }
        gr(h, { args: x, name: E[Ki], store: A, after: Z, onError: G });
        let q;
        try {
          q = V.apply(this && this.$id === e ? this : A, x);
        } catch (ee) {
          throw (gr(R, ee), ee);
        }
        return q instanceof Promise
          ? q
              .then((ee) => (gr(O, ee), ee))
              .catch((ee) => (gr(R, ee), Promise.reject(ee)))
          : (gr(O, q), q);
      };
      return (E[Ru] = !0), (E[Ki] = N), E;
    },
    g = {
      _p: r,
      $id: e,
      $onAction: Pu.bind(null, h),
      $patch: S,
      $reset: b,
      $subscribe(V, N = {}) {
        const E = Pu(f, V, N.detached, () => x()),
          x = i.run(() =>
            Pe(
              () => r.state.value[e],
              (O) => {
                (N.flush === "sync" ? u : c) &&
                  V({ storeId: e, type: cs.direct, events: d }, O);
              },
              _n({}, l, N)
            )
          );
        return E;
      },
      $dispose: C,
    },
    A = fr(g);
  r._s.set(e, A);
  const P = ((r._a && r._a.runWithContext) || n0)(() =>
    r._e.run(() => (i = nl()).run(() => t({ action: y })))
  );
  for (const V in P) {
    const N = P[V];
    if ((Ne(N) && !o0(N)) || cn(N))
      o ||
        (p && s0(N) && (Ne(N) ? (N.value = p[V]) : ka(N, p[V])),
        (r.state.value[e][V] = N));
    else if (typeof N == "function") {
      const E = y(N, V);
      (P[V] = E), (a.actions[V] = N);
    }
  }
  return (
    _n(A, P),
    _n(be(A), P),
    Object.defineProperty(A, "$state", {
      get: () => r.state.value[e],
      set: (V) => {
        S((N) => {
          _n(N, V);
        });
      },
    }),
    r._p.forEach((V) => {
      _n(
        A,
        i.run(() => V({ store: A, app: r._a, pinia: r, options: a }))
      );
    }),
    p && o && n.hydrate && n.hydrate(A.$state, p),
    (c = !0),
    (u = !0),
    A
  );
}
/*! #__NO_SIDE_EFFECTS__ */ function a0(e, t, n) {
  let r, s;
  const o = typeof t == "function";
  (r = e), (s = o ? n : t);
  function i(a, l) {
    const c = Oy();
    return (
      (a = a || (c ? ze(Wh, null) : null)),
      a && _i(a),
      (a = Bh),
      a._s.has(r) || (o ? Kh(r, t, s, a) : i0(r, s, a)),
      a._s.get(r)
    );
  }
  return (i.$id = r), i;
}
const l0 = ({ isClient: e, initialState: t, app: n }) => {
    const r = t0();
    n.use(r), e ? (r.state.value = t.pinia || {}) : (t.pinia = r.state.value);
  },
  c0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, install: l0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  u0 = ({ isClient: e, router: t }) => {
    e &&
      t
        .isReady()
        .then(async () => {
          const { registerSW: n } = await _e(async () => {
            const { registerSW: r } = await import(
              "./virtual_pwa-register-DDLiR-X1.js"
            );
            return { registerSW: r };
          }, []);
          n({ immediate: !0 });
        })
        .catch(() => {});
  },
  f0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, install: u0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Lu = "/logo_notext.svg";
(function () {
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(
        document.createTextNode(
          ".mapdiv[data-v-d05fc6bc]{width:100%;height:100%}.custom-control-wrapper[data-v-d099a3a6]{display:none}.mapdiv .custom-control-wrapper[data-v-d099a3a6]{display:inline-block}.info-window-wrapper[data-v-cbe1707b]{display:none}.mapdiv .info-window-wrapper[data-v-cbe1707b]{display:inline-block}.custom-marker-wrapper[data-v-2d2d343a]{display:none}.mapdiv .custom-marker-wrapper[data-v-2d2d343a]{display:inline-block}"
        )
      ),
        document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
var d0 = Object.defineProperty,
  h0 = (e, t, n) =>
    t in e
      ? d0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Nu = (e, t, n) => (h0(e, typeof t != "symbol" ? t + "" : t, n), n);
const Il = Symbol("map"),
  xl = Symbol("api"),
  Gh = Symbol("marker"),
  p0 = Symbol("markerCluster"),
  wi = Symbol("CustomMarker"),
  m0 = Symbol("mapTilesLoaded"),
  zh = [
    "click",
    "dblclick",
    "drag",
    "dragend",
    "dragstart",
    "mousedown",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "rightclick",
  ];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.
Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function g0(
  e,
  t,
  n,
  r
) {
  function s(o) {
    return o instanceof n
      ? o
      : new n(function (i) {
          i(o);
        });
  }
  return new (n || (n = Promise))(function (o, i) {
    function a(u) {
      try {
        c(r.next(u));
      } catch (f) {
        i(f);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (f) {
        i(f);
      }
    }
    function c(u) {
      u.done ? o(u.value) : s(u.value).then(a, l);
    }
    c((r = r.apply(e, [])).next());
  });
}
var y0 = function e(t, n) {
  if (t === n) return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor) return !1;
    var r, s, o;
    if (Array.isArray(t)) {
      if (((r = t.length), r != n.length)) return !1;
      for (s = r; s-- !== 0; ) if (!e(t[s], n[s])) return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === n.toString();
    if (((o = Object.keys(t)), (r = o.length), r !== Object.keys(n).length))
      return !1;
    for (s = r; s-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, o[s])) return !1;
    for (s = r; s-- !== 0; ) {
      var i = o[s];
      if (!e(t[i], n[i])) return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
};
const Du = "__googleMapsScriptId";
var wr;
(function (e) {
  (e[(e.INITIALIZED = 0)] = "INITIALIZED"),
    (e[(e.LOADING = 1)] = "LOADING"),
    (e[(e.SUCCESS = 2)] = "SUCCESS"),
    (e[(e.FAILURE = 3)] = "FAILURE");
})(wr || (wr = {}));
let v0 = class br {
  constructor({
    apiKey: t,
    authReferrerPolicy: n,
    channel: r,
    client: s,
    id: o = Du,
    language: i,
    libraries: a = [],
    mapIds: l,
    nonce: c,
    region: u,
    retries: f = 3,
    url: h = "https://maps.googleapis.com/maps/api/js",
    version: d,
  }) {
    if (
      ((this.callbacks = []),
      (this.done = !1),
      (this.loading = !1),
      (this.errors = []),
      (this.apiKey = t),
      (this.authReferrerPolicy = n),
      (this.channel = r),
      (this.client = s),
      (this.id = o || Du),
      (this.language = i),
      (this.libraries = a),
      (this.mapIds = l),
      (this.nonce = c),
      (this.region = u),
      (this.retries = f),
      (this.url = h),
      (this.version = d),
      br.instance)
    ) {
      if (!y0(this.options, br.instance.options))
        throw new Error(
          `Loader must not be called again with different options. ${JSON.stringify(
            this.options
          )} !== ${JSON.stringify(br.instance.options)}`
        );
      return br.instance;
    }
    br.instance = this;
  }
  get options() {
    return {
      version: this.version,
      apiKey: this.apiKey,
      channel: this.channel,
      client: this.client,
      id: this.id,
      libraries: this.libraries,
      language: this.language,
      region: this.region,
      mapIds: this.mapIds,
      nonce: this.nonce,
      url: this.url,
      authReferrerPolicy: this.authReferrerPolicy,
    };
  }
  get status() {
    return this.errors.length
      ? wr.FAILURE
      : this.done
      ? wr.SUCCESS
      : this.loading
      ? wr.LOADING
      : wr.INITIALIZED;
  }
  get failed() {
    return this.done && !this.loading && this.errors.length >= this.retries + 1;
  }
  createUrl() {
    let t = this.url;
    return (
      (t += "?callback=__googleMapsCallback"),
      this.apiKey && (t += `&key=${this.apiKey}`),
      this.channel && (t += `&channel=${this.channel}`),
      this.client && (t += `&client=${this.client}`),
      this.libraries.length > 0 &&
        (t += `&libraries=${this.libraries.join(",")}`),
      this.language && (t += `&language=${this.language}`),
      this.region && (t += `&region=${this.region}`),
      this.version && (t += `&v=${this.version}`),
      this.mapIds && (t += `&map_ids=${this.mapIds.join(",")}`),
      this.authReferrerPolicy &&
        (t += `&auth_referrer_policy=${this.authReferrerPolicy}`),
      t
    );
  }
  deleteScript() {
    const t = document.getElementById(this.id);
    t && t.remove();
  }
  load() {
    return this.loadPromise();
  }
  loadPromise() {
    return new Promise((t, n) => {
      this.loadCallback((r) => {
        r ? n(r.error) : t(window.google);
      });
    });
  }
  importLibrary(t) {
    return this.execute(), google.maps.importLibrary(t);
  }
  loadCallback(t) {
    this.callbacks.push(t), this.execute();
  }
  setScript() {
    var t, n;
    if (document.getElementById(this.id)) {
      this.callback();
      return;
    }
    const r = {
      key: this.apiKey,
      channel: this.channel,
      client: this.client,
      libraries: this.libraries.length && this.libraries,
      v: this.version,
      mapIds: this.mapIds,
      language: this.language,
      region: this.region,
      authReferrerPolicy: this.authReferrerPolicy,
    };
    Object.keys(r).forEach((o) => !r[o] && delete r[o]),
      (!(
        (n =
          (t = window == null ? void 0 : window.google) === null || t === void 0
            ? void 0
            : t.maps) === null || n === void 0
      ) &&
        n.importLibrary) ||
        ((o) => {
          let i,
            a,
            l,
            c = "The Google Maps JavaScript API",
            u = "google",
            f = "importLibrary",
            h = "__ib__",
            d = document,
            p = window;
          p = p[u] || (p[u] = {});
          const m = p.maps || (p.maps = {}),
            S = new Set(),
            b = new URLSearchParams(),
            C = () =>
              i ||
              (i = new Promise((y, g) =>
                g0(this, void 0, void 0, function* () {
                  var A;
                  yield (a = d.createElement("script")),
                    (a.id = this.id),
                    b.set("libraries", [...S] + "");
                  for (l in o)
                    b.set(
                      l.replace(/[A-Z]/g, (L) => "_" + L[0].toLowerCase()),
                      o[l]
                    );
                  b.set("callback", u + ".maps." + h),
                    (a.src = this.url + "?" + b),
                    (m[h] = y),
                    (a.onerror = () => (i = g(Error(c + " could not load.")))),
                    (a.nonce =
                      this.nonce ||
                      ((A = d.querySelector("script[nonce]")) === null ||
                      A === void 0
                        ? void 0
                        : A.nonce) ||
                      ""),
                    d.head.append(a);
                })
              ));
          m[f]
            ? console.warn(c + " only loads once. Ignoring:", o)
            : (m[f] = (y, ...g) => S.add(y) && C().then(() => m[f](y, ...g)));
        })(r);
    const s = this.libraries.map((o) => this.importLibrary(o));
    s.length || s.push(this.importLibrary("core")),
      Promise.all(s).then(
        () => this.callback(),
        (o) => {
          const i = new ErrorEvent("error", { error: o });
          this.loadErrorCallback(i);
        }
      );
  }
  reset() {
    this.deleteScript(),
      (this.done = !1),
      (this.loading = !1),
      (this.errors = []),
      (this.onerrorEvent = null);
  }
  resetIfRetryingFailed() {
    this.failed && this.reset();
  }
  loadErrorCallback(t) {
    if ((this.errors.push(t), this.errors.length <= this.retries)) {
      const n = this.errors.length * Math.pow(2, this.errors.length);
      console.error(`Failed to load Google Maps script, retrying in ${n} ms.`),
        setTimeout(() => {
          this.deleteScript(), this.setScript();
        }, n);
    } else (this.onerrorEvent = t), this.callback();
  }
  callback() {
    (this.done = !0),
      (this.loading = !1),
      this.callbacks.forEach((t) => {
        t(this.onerrorEvent);
      }),
      (this.callbacks = []);
  }
  execute() {
    if ((this.resetIfRetryingFailed(), this.done)) this.callback();
    else {
      if (window.google && window.google.maps && window.google.maps.version) {
        console.warn(
          "Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."
        ),
          this.callback();
        return;
      }
      this.loading || ((this.loading = !0), this.setScript());
    }
  }
};
function b0(e) {
  return class extends e.OverlayView {
    constructor(t) {
      super(), Nu(this, "element"), Nu(this, "opts");
      const { element: n, ...r } = t;
      (this.element = n),
        (this.opts = r),
        this.opts.map && this.setMap(this.opts.map);
    }
    getPosition() {
      return this.opts.position
        ? this.opts.position instanceof e.LatLng
          ? this.opts.position
          : new e.LatLng(this.opts.position)
        : null;
    }
    getVisible() {
      if (!this.element) return !1;
      const t = this.element;
      return (
        t.style.display !== "none" &&
        t.style.visibility !== "hidden" &&
        (t.style.opacity === "" || Number(t.style.opacity) > 0.01)
      );
    }
    onAdd() {
      if (!this.element) return;
      const t = this.getPanes();
      t && t.overlayMouseTarget.appendChild(this.element);
    }
    draw() {
      if (!this.element) return;
      const t = this.getProjection(),
        n = t == null ? void 0 : t.fromLatLngToDivPixel(this.getPosition());
      if (n) {
        this.element.style.position = "absolute";
        let r, s;
        switch (this.opts.anchorPoint) {
          case "TOP_CENTER":
            (r = "-50%"), (s = "-100%");
            break;
          case "BOTTOM_CENTER":
            (r = "-50%"), (s = "0");
            break;
          case "LEFT_CENTER":
            (r = "-100%"), (s = "-50%");
            break;
          case "RIGHT_CENTER":
            (r = "0"), (s = "-50%");
            break;
          case "TOP_LEFT":
            (r = "-100%"), (s = "-100%");
            break;
          case "TOP_RIGHT":
            (r = "0"), (s = "-100%");
            break;
          case "BOTTOM_LEFT":
            (r = "-100%"), (s = "0");
            break;
          case "BOTTOM_RIGHT":
            (r = "0"), (s = "0");
            break;
          default:
            (r = "-50%"), (s = "-50%");
        }
        const o = n.x + (this.opts.offsetX || 0) + "px",
          i = n.y + (this.opts.offsetY || 0) + "px";
        (this.element.style.transform = `translateX(${r}) translateX(${o}) translateY(${s}) translateY(${i})`),
          this.opts.zIndex &&
            (this.element.style.zIndex = this.opts.zIndex.toString());
      }
    }
    onRemove() {
      this.element && this.element.remove();
    }
    setOptions(t) {
      const { element: n, ...r } = t;
      (this.element = n), (this.opts = r), this.draw();
    }
  };
}
let Mu;
const $u = [
    "bounds_changed",
    "center_changed",
    "click",
    "contextmenu",
    "dblclick",
    "drag",
    "dragend",
    "dragstart",
    "heading_changed",
    "idle",
    "isfractionalzoomenabled_changed",
    "mapcapabilities_changed",
    "maptypeid_changed",
    "mousemove",
    "mouseout",
    "mouseover",
    "projection_changed",
    "renderingtype_changed",
    "rightclick",
    "tilesloaded",
    "tilt_changed",
    "zoom_changed",
  ],
  _0 = Me({
    props: {
      apiPromise: { type: Promise },
      apiKey: { type: String, default: "" },
      version: { type: String, default: "weekly" },
      libraries: { type: Array, default: () => ["places", "marker"] },
      region: { type: String, required: !1 },
      language: { type: String, required: !1 },
      backgroundColor: { type: String, required: !1 },
      center: { type: Object, default: () => ({ lat: 0, lng: 0 }) },
      clickableIcons: { type: Boolean, required: !1, default: void 0 },
      controlSize: { type: Number, required: !1 },
      disableDefaultUi: { type: Boolean, required: !1, default: void 0 },
      disableDoubleClickZoom: { type: Boolean, required: !1, default: void 0 },
      draggable: { type: Boolean, required: !1, default: void 0 },
      draggableCursor: { type: String, required: !1 },
      draggingCursor: { type: String, required: !1 },
      fullscreenControl: { type: Boolean, required: !1, default: void 0 },
      fullscreenControlPosition: { type: String, required: !1 },
      gestureHandling: { type: String, required: !1 },
      heading: { type: Number, required: !1 },
      isFractionalZoomEnabled: { type: Boolean, required: !1, default: void 0 },
      keyboardShortcuts: { type: Boolean, required: !1, default: void 0 },
      mapTypeControl: { type: Boolean, required: !1, default: void 0 },
      mapTypeControlOptions: { type: Object, required: !1 },
      mapTypeId: { type: [Number, String], required: !1 },
      mapId: { type: String, required: !1 },
      maxZoom: { type: Number, required: !1 },
      minZoom: { type: Number, required: !1 },
      noClear: { type: Boolean, required: !1, default: void 0 },
      panControl: { type: Boolean, required: !1, default: void 0 },
      panControlPosition: { type: String, required: !1 },
      restriction: { type: Object, required: !1 },
      rotateControl: { type: Boolean, required: !1, default: void 0 },
      rotateControlPosition: { type: String, required: !1 },
      scaleControl: { type: Boolean, required: !1, default: void 0 },
      scaleControlStyle: { type: Number, required: !1 },
      scrollwheel: { type: Boolean, required: !1, default: void 0 },
      streetView: { type: Object, required: !1 },
      streetViewControl: { type: Boolean, required: !1, default: void 0 },
      streetViewControlPosition: { type: String, required: !1 },
      styles: { type: Array, required: !1 },
      tilt: { type: Number, required: !1 },
      zoom: { type: Number, required: !1 },
      zoomControl: { type: Boolean, required: !1, default: void 0 },
      zoomControlPosition: { type: String, required: !1 },
      nonce: { type: String, default: "" },
    },
    emits: $u,
    setup(e, { emit: t }) {
      const n = re(),
        r = re(!1),
        s = re(),
        o = re(),
        i = re(!1);
      Ln(Il, s), Ln(xl, o), Ln(m0, i);
      const a = () => {
          const f = { ...e };
          Object.keys(f).forEach((p) => {
            f[p] === void 0 && delete f[p];
          });
          const h = (p) => {
              var m;
              return p
                ? {
                    position:
                      (m = o.value) == null ? void 0 : m.ControlPosition[p],
                  }
                : {};
            },
            d = {
              scaleControlOptions: e.scaleControlStyle
                ? { style: e.scaleControlStyle }
                : {},
              panControlOptions: h(e.panControlPosition),
              zoomControlOptions: h(e.zoomControlPosition),
              rotateControlOptions: h(e.rotateControlPosition),
              streetViewControlOptions: h(e.streetViewControlPosition),
              fullscreenControlOptions: h(e.fullscreenControlPosition),
              disableDefaultUI: e.disableDefaultUi,
            };
          return { ...f, ...d };
        },
        l = Pe(
          [o, s],
          ([f, h]) => {
            const d = f,
              p = h;
            d &&
              p &&
              (d.event.addListenerOnce(p, "tilesloaded", () => {
                i.value = !0;
              }),
              setTimeout(l, 0));
          },
          { immediate: !0 }
        ),
        c = () => {
          try {
            const {
              apiKey: f,
              region: h,
              version: d,
              language: p,
              libraries: m,
              nonce: S,
            } = e;
            Mu = new v0({
              apiKey: f,
              region: h,
              version: d,
              language: p,
              libraries: m,
              nonce: S,
            });
          } catch (f) {
            console.error(f);
          }
        },
        u = (f) => {
          (o.value = un(f.maps)), (s.value = un(new f.maps.Map(n.value, a())));
          const h = b0(o.value);
          (o.value[wi] = h),
            $u.forEach((p) => {
              var m;
              (m = s.value) == null || m.addListener(p, (S) => t(p, S));
            }),
            (r.value = !0);
          const d = Object.keys(e)
            .filter(
              (p) =>
                ![
                  "apiPromise",
                  "apiKey",
                  "version",
                  "libraries",
                  "region",
                  "language",
                  "center",
                  "zoom",
                  "nonce",
                ].includes(p)
            )
            .map((p) => fl(e, p));
          Pe([() => e.center, () => e.zoom, ...d], ([p, m], [S, b]) => {
            var C, y, g;
            const { center: A, zoom: L, ...P } = a();
            (C = s.value) == null || C.setOptions(P),
              m !== void 0 &&
                m !== b &&
                ((y = s.value) == null || y.setZoom(m));
            const V = !S || p.lng !== S.lng || p.lat !== S.lat;
            p && V && ((g = s.value) == null || g.panTo(p));
          });
        };
      return (
        kt(() => {
          e.apiPromise && e.apiPromise instanceof Promise
            ? e.apiPromise.then(u)
            : (c(), Mu.load().then(u));
        }),
        Br(() => {
          var f;
          (i.value = !1),
            s.value &&
              ((f = o.value) == null ||
                f.event.clearInstanceListeners(s.value));
        }),
        { mapRef: n, ready: r, map: s, api: o, mapTilesLoaded: i }
      );
    },
  }),
  kl = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n;
  },
  w0 = { ref: "mapRef", class: "mapdiv" };
function E0(e, t, n, r, s, o) {
  return (
    ue(),
    fe("div", null, [
      j("div", w0, null, 512),
      pl(
        e.$slots,
        "default",
        vg(
          dh({
            ready: e.ready,
            map: e.map,
            api: e.api,
            mapTilesLoaded: e.mapTilesLoaded,
          })
        ),
        void 0
      ),
    ])
  );
}
const S0 = kl(_0, [
  ["render", E0],
  ["__scopeId", "data-v-d05fc6bc"],
]);
function C0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var T0 = function e(t, n) {
  if (t === n) return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor) return !1;
    var r, s, o;
    if (Array.isArray(t)) {
      if (((r = t.length), r != n.length)) return !1;
      for (s = r; s-- !== 0; ) if (!e(t[s], n[s])) return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === n.toString();
    if (((o = Object.keys(t)), (r = o.length), r !== Object.keys(n).length))
      return !1;
    for (s = r; s-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, o[s])) return !1;
    for (s = r; s-- !== 0; ) {
      var i = o[s];
      if (!e(t[i], n[i])) return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
};
const Yh = C0(T0),
  O0 = (e) => e === "Marker",
  A0 = (e) => e === wi,
  Jh = (e, t, n, r) => {
    const s = re(),
      o = ze(Il, re()),
      i = ze(xl, re()),
      a = ze(p0, re()),
      l = ye(
        () =>
          !!(
            a.value &&
            i.value &&
            (s.value instanceof i.value.Marker ||
              s.value instanceof i.value[wi])
          )
      );
    return (
      Pe(
        [o, n],
        (c, [u, f]) => {
          var h, d, p;
          const m = !Yh(n.value, f) || o.value !== u;
          !o.value ||
            !i.value ||
            !m ||
            (s.value
              ? (s.value.setOptions(n.value),
                l.value &&
                  ((h = a.value) == null || h.removeMarker(s.value),
                  (d = a.value) == null || d.addMarker(s.value)))
              : (O0(e)
                  ? (s.value = un(new i.value[e](n.value)))
                  : A0(e)
                  ? (s.value = un(new i.value[e](n.value)))
                  : (s.value = un(
                      new i.value[e]({ ...n.value, map: o.value })
                    )),
                l.value
                  ? (p = a.value) == null || p.addMarker(s.value)
                  : s.value.setMap(o.value),
                t.forEach((S) => {
                  var b;
                  (b = s.value) == null || b.addListener(S, (C) => r(S, C));
                })));
        },
        { immediate: !0 }
      ),
      Br(() => {
        var c, u;
        s.value &&
          ((c = i.value) == null || c.event.clearInstanceListeners(s.value),
          l.value
            ? (u = a.value) == null || u.removeMarker(s.value)
            : s.value.setMap(null));
      }),
      s
    );
  },
  ju = [
    "animation_changed",
    "click",
    "dblclick",
    "rightclick",
    "dragstart",
    "dragend",
    "drag",
    "mouseover",
    "mousedown",
    "mouseout",
    "mouseup",
    "draggable_changed",
    "clickable_changed",
    "contextmenu",
    "cursor_changed",
    "flat_changed",
    "rightclick",
    "zindex_changed",
    "icon_changed",
    "position_changed",
    "shape_changed",
    "title_changed",
    "visible_changed",
  ],
  I0 = Me({
    name: "Marker",
    props: { options: { type: Object, required: !0 } },
    emits: ju,
    setup(e, { emit: t, expose: n, slots: r }) {
      const s = fl(e, "options"),
        o = Jh("Marker", ju, s, t);
      return (
        Ln(Gh, o),
        n({ marker: o }),
        () => {
          var i;
          return (i = r.default) == null ? void 0 : i.call(r);
        }
      );
    },
  });
zh.concat(["bounds_changed"]);
zh.concat(["center_changed", "radius_changed"]);
const Fu = [
    "closeclick",
    "content_changed",
    "domready",
    "position_changed",
    "visible",
    "zindex_changed",
  ],
  x0 = Me({
    inheritAttrs: !1,
    props: {
      options: { type: Object, default: () => ({}) },
      modelValue: { type: Boolean },
    },
    emits: [...Fu, "update:modelValue"],
    setup(e, { slots: t, emit: n, expose: r }) {
      const s = re(),
        o = re(),
        i = ze(Il, re()),
        a = ze(xl, re()),
        l = ze(Gh, re());
      let c,
        u = e.modelValue;
      const f = ye(() => {
          var m;
          return (m = t.default) == null
            ? void 0
            : m.call(t).some((S) => S.type !== nt);
        }),
        h = (m) => {
          (u = m), n("update:modelValue", m);
        },
        d = (m) => {
          s.value &&
            (s.value.open({ map: i.value, anchor: l.value, ...m }), h(!0));
        },
        p = () => {
          s.value && (s.value.close(), h(!1));
        };
      return (
        kt(() => {
          Pe(
            [i, () => e.options],
            ([m, S], [b, C]) => {
              var y;
              const g = !Yh(S, C) || i.value !== b;
              i.value &&
                a.value &&
                g &&
                (s.value
                  ? (s.value.setOptions({
                      ...S,
                      content: f.value ? o.value : S.content,
                    }),
                    l.value || d())
                  : ((s.value = un(
                      new a.value.InfoWindow({
                        ...S,
                        content: f.value ? o.value : S.content,
                      })
                    )),
                    l.value &&
                      (c = l.value.addListener("click", () => {
                        d();
                      })),
                    (!l.value || u) && d(),
                    Fu.forEach((A) => {
                      var L;
                      (L = s.value) == null || L.addListener(A, (P) => n(A, P));
                    }),
                    (y = s.value) == null ||
                      y.addListener("closeclick", () => h(!1))));
            },
            { immediate: !0 }
          ),
            Pe(
              () => e.modelValue,
              (m) => {
                m !== u && (m ? d() : p());
              }
            );
        }),
        Br(() => {
          var m;
          c && c.remove(),
            s.value &&
              ((m = a.value) == null || m.event.clearInstanceListeners(s.value),
              p());
        }),
        r({ infoWindow: s, open: d, close: p }),
        {
          infoWindow: s,
          infoWindowRef: o,
          hasSlotContent: f,
          open: d,
          close: p,
        }
      );
    },
  }),
  k0 = { key: 0, class: "info-window-wrapper" };
function P0(e, t, n, r, s, o) {
  return e.hasSlotContent
    ? (ue(),
      fe("div", k0, [
        j(
          "div",
          bl({ ref: "infoWindowRef" }, e.$attrs),
          [pl(e.$slots, "default", {}, void 0)],
          16
        ),
      ]))
    : lt("", !0);
}
const R0 = kl(x0, [
  ["render", P0],
  ["__scopeId", "data-v-cbe1707b"],
]);
var Pa;
(function (e) {
  (e.CLUSTERING_BEGIN = "clusteringbegin"),
    (e.CLUSTERING_END = "clusteringend"),
    (e.CLUSTER_CLICK = "click");
})(Pa || (Pa = {}));
Object.values(Pa);
const L0 = Me({
    inheritAttrs: !1,
    props: { options: { type: Object, required: !0 } },
    setup(e, { slots: t, emit: n, expose: r }) {
      const s = re(),
        o = ye(() => {
          var l;
          return (l = t.default) == null
            ? void 0
            : l.call(t).some((c) => c.type !== nt);
        }),
        i = ye(() => ({ ...e.options, element: s.value })),
        a = Jh(wi, [], i, n);
      return (
        r({ customMarker: a }),
        { customMarkerRef: s, customMarker: a, hasSlotContent: o }
      );
    },
  }),
  N0 = { key: 0, class: "custom-marker-wrapper" };
function D0(e, t, n, r, s, o) {
  return e.hasSlotContent
    ? (ue(),
      fe("div", N0, [
        j(
          "div",
          bl(
            {
              ref: "customMarkerRef",
              style: { cursor: e.$attrs.onClick ? "pointer" : void 0 },
            },
            e.$attrs
          ),
          [pl(e.$slots, "default", {}, void 0)],
          16
        ),
      ]))
    : lt("", !0);
}
const M0 = kl(L0, [
    ["render", D0],
    ["__scopeId", "data-v-2d2d343a"],
  ]),
  $0 = Me({
    __name: "TheMap",
    setup(e) {
      const t = { lat: 25.097210689756004, lng: 55.173608467692944 };
      return (n, r) => (
        ue(),
        fe("div", null, [
          ce(
            Q(S0),
            {
              "api-key": "AIzaSyDxWbJ0-fd9sfUgsstA9K1olTCXaPe7HW8",
              center: t,
              zoom: 13,
              class: "h-full w-full",
            },
            {
              default: bt(() => [
                ce(
                  Q(I0),
                  { options: { position: t } },
                  {
                    default: bt(() => [
                      ce(Q(R0), null, {
                        default: bt(
                          () =>
                            r[0] ||
                            (r[0] = [
                              j(
                                "div",
                                { id: "contet" },
                                [
                                  j("div", { id: "siteNotice" }),
                                  j("h1", {
                                    id: "firstHeading",
                                    "text-xs": "",
                                    italic: "",
                                    class: "firstHeading",
                                  }),
                                  j("div", { id: "bodyContent" }, [
                                    j("p"),
                                    j("img", {
                                      src: Lu,
                                      width: "34",
                                      height: "34",
                                      style: { "margin-top": "8px" },
                                    }),
                                  ]),
                                ],
                                -1
                              ),
                            ])
                        ),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  },
                  8,
                  ["options"]
                ),
                ce(
                  Q(M0),
                  { options: { position: t, anchorPoint: "BOTTOM_CENTER" } },
                  {
                    default: bt(
                      () =>
                        r[1] ||
                        (r[1] = [
                          j(
                            "div",
                            {
                              style: { "text-align": "center" },
                              relative: "",
                              "h-15": "",
                              "w-15": "",
                              flex: "",
                              "items-center": "",
                              "justify-center": "",
                              "border-2": "",
                              "border-gray-500": "",
                              "rounded-full": "",
                              "bg-white": "",
                              p3: "",
                              "drop-shadow-md": "",
                            },
                            [
                              j("img", {
                                src: Lu,
                                width: "10",
                                height: "10",
                                "z-5": "",
                                "h-full": "",
                                "w-auto": "",
                                "bg-white": "",
                              }),
                              j("div", {
                                class: "m-auto -z-1",
                                absolute: "",
                                "bottom-0": "",
                                "h-4": "",
                                "w-4": "",
                                "translate-y-2": "",
                                "rotate-35": "",
                                "skew-y-17": "",
                                "border-b-2": "",
                                "border-r-2": "",
                                "border-gray-400": "",
                                "bg-white": "",
                              }),
                            ],
                            -1
                          ),
                        ])
                    ),
                    _: 1,
                  },
                  8,
                  ["options"]
                ),
              ]),
              _: 1,
            }
          ),
        ])
      );
    },
  }),
  j0 = () => {};
var Hu = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Xh = function (e) {
    const t = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      let s = e.charCodeAt(r);
      s < 128
        ? (t[n++] = s)
        : s < 2048
        ? ((t[n++] = (s >> 6) | 192), (t[n++] = (s & 63) | 128))
        : (s & 64512) === 55296 &&
          r + 1 < e.length &&
          (e.charCodeAt(r + 1) & 64512) === 56320
        ? ((s = 65536 + ((s & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
          (t[n++] = (s >> 18) | 240),
          (t[n++] = ((s >> 12) & 63) | 128),
          (t[n++] = ((s >> 6) & 63) | 128),
          (t[n++] = (s & 63) | 128))
        : ((t[n++] = (s >> 12) | 224),
          (t[n++] = ((s >> 6) & 63) | 128),
          (t[n++] = (s & 63) | 128));
    }
    return t;
  },
  F0 = function (e) {
    const t = [];
    let n = 0,
      r = 0;
    for (; n < e.length; ) {
      const s = e[n++];
      if (s < 128) t[r++] = String.fromCharCode(s);
      else if (s > 191 && s < 224) {
        const o = e[n++];
        t[r++] = String.fromCharCode(((s & 31) << 6) | (o & 63));
      } else if (s > 239 && s < 365) {
        const o = e[n++],
          i = e[n++],
          a = e[n++],
          l =
            (((s & 7) << 18) | ((o & 63) << 12) | ((i & 63) << 6) | (a & 63)) -
            65536;
        (t[r++] = String.fromCharCode(55296 + (l >> 10))),
          (t[r++] = String.fromCharCode(56320 + (l & 1023)));
      } else {
        const o = e[n++],
          i = e[n++];
        t[r++] = String.fromCharCode(
          ((s & 15) << 12) | ((o & 63) << 6) | (i & 63)
        );
      }
    }
    return t.join("");
  },
  Qh = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(e, t) {
      if (!Array.isArray(e))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let s = 0; s < e.length; s += 3) {
        const o = e[s],
          i = s + 1 < e.length,
          a = i ? e[s + 1] : 0,
          l = s + 2 < e.length,
          c = l ? e[s + 2] : 0,
          u = o >> 2,
          f = ((o & 3) << 4) | (a >> 4);
        let h = ((a & 15) << 2) | (c >> 6),
          d = c & 63;
        l || ((d = 64), i || (h = 64)), r.push(n[u], n[f], n[h], n[d]);
      }
      return r.join("");
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray(Xh(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : F0(this.decodeStringToByteArray(e, t));
    },
    decodeStringToByteArray(e, t) {
      this.init_();
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let s = 0; s < e.length; ) {
        const o = n[e.charAt(s++)],
          a = s < e.length ? n[e.charAt(s)] : 0;
        ++s;
        const c = s < e.length ? n[e.charAt(s)] : 64;
        ++s;
        const f = s < e.length ? n[e.charAt(s)] : 64;
        if ((++s, o == null || a == null || c == null || f == null))
          throw new H0();
        const h = (o << 2) | (a >> 4);
        if ((r.push(h), c !== 64)) {
          const d = ((a << 4) & 240) | (c >> 2);
          if ((r.push(d), f !== 64)) {
            const p = ((c << 6) & 192) | f;
            r.push(p);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] =
              this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
      }
    },
  };
class H0 extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const U0 = function (e) {
    const t = Xh(e);
    return Qh.encodeByteArray(t, !0);
  },
  Zh = function (e) {
    return U0(e).replace(/\./g, "");
  },
  V0 = function (e) {
    try {
      return Qh.decodeString(e, !0);
    } catch (t) {
      console.error("base64Decode failed: ", t);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function B0() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const W0 = () => B0().__FIREBASE_DEFAULTS__,
  q0 = () => {
    if (typeof process > "u" || typeof Hu > "u") return;
    const e = Hu.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  K0 = () => {
    if (typeof document > "u") return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = e && V0(e[1]);
    return t && JSON.parse(t);
  },
  ep = () => {
    try {
      return j0() || W0() || q0() || K0();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  G0 = (e) => {
    var t, n;
    return (n =
      (t = ep()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[e];
  },
  z0 = (e) => {
    const t = G0(e);
    if (!t) return;
    const n = t.lastIndexOf(":");
    if (n <= 0 || n + 1 === t.length)
      throw new Error(`Invalid host ${t} with no separate hostname and port!`);
    const r = parseInt(t.substring(n + 1), 10);
    return t[0] === "[" ? [t.substring(1, n - 1), r] : [t.substring(0, n), r];
  },
  tp = () => {
    var e;
    return (e = ep()) === null || e === void 0 ? void 0 : e.config;
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Y0 {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, n) => {
        (this.resolve = t), (this.reject = n);
      }));
  }
  wrapCallback(t) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof t == "function" &&
          (this.promise.catch(() => {}), t.length === 1 ? t(n) : t(n, r));
    };
  }
}
function J0() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function X0() {
  return new Promise((e, t) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        s = self.indexedDB.open(r);
      (s.onsuccess = () => {
        s.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
      }),
        (s.onupgradeneeded = () => {
          n = !1;
        }),
        (s.onerror = () => {
          var o;
          t(
            ((o = s.error) === null || o === void 0 ? void 0 : o.message) || ""
          );
        });
    } catch (n) {
      t(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Q0 = "FirebaseError";
class Wr extends Error {
  constructor(t, n, r) {
    super(n),
      (this.code = t),
      (this.customData = r),
      (this.name = Q0),
      Object.setPrototypeOf(this, Wr.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, np.prototype.create);
  }
}
class np {
  constructor(t, n, r) {
    (this.service = t), (this.serviceName = n), (this.errors = r);
  }
  create(t, ...n) {
    const r = n[0] || {},
      s = `${this.service}/${t}`,
      o = this.errors[t],
      i = o ? Z0(o, r) : "Error",
      a = `${this.serviceName}: ${i} (${s}).`;
    return new Wr(s, a, r);
  }
}
function Z0(e, t) {
  return e.replace(ew, (n, r) => {
    const s = t[r];
    return s != null ? String(s) : `<${r}?>`;
  });
}
const ew = /\{\$([^}]+)}/g;
function Ra(e, t) {
  if (e === t) return !0;
  const n = Object.keys(e),
    r = Object.keys(t);
  for (const s of n) {
    if (!r.includes(s)) return !1;
    const o = e[s],
      i = t[s];
    if (Uu(o) && Uu(i)) {
      if (!Ra(o, i)) return !1;
    } else if (o !== i) return !1;
  }
  for (const s of r) if (!n.includes(s)) return !1;
  return !0;
}
function Uu(e) {
  return e !== null && typeof e == "object";
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Pl(e) {
  return e && e._delegate ? e._delegate : e;
}
class As {
  constructor(t, n, r) {
    (this.name = t),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Jn = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tw {
  constructor(t, n) {
    (this.name = t),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const n = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(n)) {
      const r = new Y0();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: n });
          s && r.resolve(s);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(t) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        t == null ? void 0 : t.identifier
      ),
      s =
        (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (o) {
        if (s) return null;
        throw o;
      }
    else {
      if (s) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (rw(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: Jn });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const s = this.normalizeInstanceIdentifier(n);
        try {
          const o = this.getOrInitializeService({ instanceIdentifier: s });
          r.resolve(o);
        } catch {}
      }
    }
  }
  clearInstance(t = Jn) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...t.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = Jn) {
    return this.instances.has(t);
  }
  getOptions(t = Jn) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: n = {} } = t,
      r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const s = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [o, i] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(o);
      r === a && i.resolve(s);
    }
    return s;
  }
  onInit(t, n) {
    var r;
    const s = this.normalizeInstanceIdentifier(n),
      o =
        (r = this.onInitCallbacks.get(s)) !== null && r !== void 0
          ? r
          : new Set();
    o.add(t), this.onInitCallbacks.set(s, o);
    const i = this.instances.get(s);
    return (
      i && t(i, s),
      () => {
        o.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const s of r)
        try {
          s(t, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let r = this.instances.get(t);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: nw(t),
        options: n,
      })),
      this.instances.set(t, r),
      this.instancesOptions.set(t, n),
      this.invokeOnInitCallbacks(r, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(t = Jn) {
    return this.component ? (this.component.multipleInstances ? t : Jn) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function nw(e) {
  return e === Jn ? void 0 : e;
}
function rw(e) {
  return e.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sw {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const n = this.getProvider(t.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`
      );
    n.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const n = new tw(t, this);
    return this.providers.set(t, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Le;
(function (e) {
  (e[(e.DEBUG = 0)] = "DEBUG"),
    (e[(e.VERBOSE = 1)] = "VERBOSE"),
    (e[(e.INFO = 2)] = "INFO"),
    (e[(e.WARN = 3)] = "WARN"),
    (e[(e.ERROR = 4)] = "ERROR"),
    (e[(e.SILENT = 5)] = "SILENT");
})(Le || (Le = {}));
const ow = {
    debug: Le.DEBUG,
    verbose: Le.VERBOSE,
    info: Le.INFO,
    warn: Le.WARN,
    error: Le.ERROR,
    silent: Le.SILENT,
  },
  iw = Le.INFO,
  aw = {
    [Le.DEBUG]: "log",
    [Le.VERBOSE]: "log",
    [Le.INFO]: "info",
    [Le.WARN]: "warn",
    [Le.ERROR]: "error",
  },
  lw = (e, t, ...n) => {
    if (t < e.logLevel) return;
    const r = new Date().toISOString(),
      s = aw[t];
    if (s) console[s](`[${r}]  ${e.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      );
  };
class cw {
  constructor(t) {
    (this.name = t),
      (this._logLevel = iw),
      (this._logHandler = lw),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in Le))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? ow[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, Le.DEBUG, ...t),
      this._logHandler(this, Le.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, Le.VERBOSE, ...t),
      this._logHandler(this, Le.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, Le.INFO, ...t),
      this._logHandler(this, Le.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, Le.WARN, ...t),
      this._logHandler(this, Le.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, Le.ERROR, ...t),
      this._logHandler(this, Le.ERROR, ...t);
  }
}
const uw = (e, t) => t.some((n) => e instanceof n);
let Vu, Bu;
function fw() {
  return (
    Vu ||
    (Vu = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function dw() {
  return (
    Bu ||
    (Bu = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const rp = new WeakMap(),
  La = new WeakMap(),
  sp = new WeakMap(),
  Gi = new WeakMap(),
  Rl = new WeakMap();
function hw(e) {
  const t = new Promise((n, r) => {
    const s = () => {
        e.removeEventListener("success", o), e.removeEventListener("error", i);
      },
      o = () => {
        n(Dn(e.result)), s();
      },
      i = () => {
        r(e.error), s();
      };
    e.addEventListener("success", o), e.addEventListener("error", i);
  });
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && rp.set(n, e);
      })
      .catch(() => {}),
    Rl.set(t, e),
    t
  );
}
function pw(e) {
  if (La.has(e)) return;
  const t = new Promise((n, r) => {
    const s = () => {
        e.removeEventListener("complete", o),
          e.removeEventListener("error", i),
          e.removeEventListener("abort", i);
      },
      o = () => {
        n(), s();
      },
      i = () => {
        r(e.error || new DOMException("AbortError", "AbortError")), s();
      };
    e.addEventListener("complete", o),
      e.addEventListener("error", i),
      e.addEventListener("abort", i);
  });
  La.set(e, t);
}
let Na = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === "done") return La.get(e);
      if (t === "objectStoreNames") return e.objectStoreNames || sp.get(e);
      if (t === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return Dn(e[t]);
  },
  set(e, t, n) {
    return (e[t] = n), !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in e;
  },
};
function mw(e) {
  Na = e(Na);
}
function gw(e) {
  return e === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...n) {
        const r = e.call(zi(this), t, ...n);
        return sp.set(r, t.sort ? t.sort() : [t]), Dn(r);
      }
    : dw().includes(e)
    ? function (...t) {
        return e.apply(zi(this), t), Dn(rp.get(this));
      }
    : function (...t) {
        return Dn(e.apply(zi(this), t));
      };
}
function yw(e) {
  return typeof e == "function"
    ? gw(e)
    : (e instanceof IDBTransaction && pw(e),
      uw(e, fw()) ? new Proxy(e, Na) : e);
}
function Dn(e) {
  if (e instanceof IDBRequest) return hw(e);
  if (Gi.has(e)) return Gi.get(e);
  const t = yw(e);
  return t !== e && (Gi.set(e, t), Rl.set(t, e)), t;
}
const zi = (e) => Rl.get(e);
function vw(e, t, { blocked: n, upgrade: r, blocking: s, terminated: o } = {}) {
  const i = indexedDB.open(e, t),
    a = Dn(i);
  return (
    r &&
      i.addEventListener("upgradeneeded", (l) => {
        r(Dn(i.result), l.oldVersion, l.newVersion, Dn(i.transaction), l);
      }),
    n && i.addEventListener("blocked", (l) => n(l.oldVersion, l.newVersion, l)),
    a
      .then((l) => {
        o && l.addEventListener("close", () => o()),
          s &&
            l.addEventListener("versionchange", (c) =>
              s(c.oldVersion, c.newVersion, c)
            );
      })
      .catch(() => {}),
    a
  );
}
const bw = ["get", "getKey", "getAll", "getAllKeys", "count"],
  _w = ["put", "add", "delete", "clear"],
  Yi = new Map();
function Wu(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
  if (Yi.get(t)) return Yi.get(t);
  const n = t.replace(/FromIndex$/, ""),
    r = t !== n,
    s = _w.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(s || bw.includes(n))
  )
    return;
  const o = async function (i, ...a) {
    const l = this.transaction(i, s ? "readwrite" : "readonly");
    let c = l.store;
    return (
      r && (c = c.index(a.shift())),
      (await Promise.all([c[n](...a), s && l.done]))[0]
    );
  };
  return Yi.set(t, o), o;
}
mw((e) => ({
  ...e,
  get: (t, n, r) => Wu(t, n) || e.get(t, n, r),
  has: (t, n) => !!Wu(t, n) || e.has(t, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ww {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (Ew(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function Ew(e) {
  const t = e.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const Da = "@firebase/app",
  qu = "0.11.2";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dn = new cw("@firebase/app"),
  Sw = "@firebase/app-compat",
  Cw = "@firebase/analytics-compat",
  Tw = "@firebase/analytics",
  Ow = "@firebase/app-check-compat",
  Aw = "@firebase/app-check",
  Iw = "@firebase/auth",
  xw = "@firebase/auth-compat",
  kw = "@firebase/database",
  Pw = "@firebase/data-connect",
  Rw = "@firebase/database-compat",
  Lw = "@firebase/functions",
  Nw = "@firebase/functions-compat",
  Dw = "@firebase/installations",
  Mw = "@firebase/installations-compat",
  $w = "@firebase/messaging",
  jw = "@firebase/messaging-compat",
  Fw = "@firebase/performance",
  Hw = "@firebase/performance-compat",
  Uw = "@firebase/remote-config",
  Vw = "@firebase/remote-config-compat",
  Bw = "@firebase/storage",
  Ww = "@firebase/storage-compat",
  qw = "@firebase/firestore",
  Kw = "@firebase/vertexai",
  Gw = "@firebase/firestore-compat",
  zw = "firebase";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ma = "[DEFAULT]",
  Yw = {
    [Da]: "fire-core",
    [Sw]: "fire-core-compat",
    [Tw]: "fire-analytics",
    [Cw]: "fire-analytics-compat",
    [Aw]: "fire-app-check",
    [Ow]: "fire-app-check-compat",
    [Iw]: "fire-auth",
    [xw]: "fire-auth-compat",
    [kw]: "fire-rtdb",
    [Pw]: "fire-data-connect",
    [Rw]: "fire-rtdb-compat",
    [Lw]: "fire-fn",
    [Nw]: "fire-fn-compat",
    [Dw]: "fire-iid",
    [Mw]: "fire-iid-compat",
    [$w]: "fire-fcm",
    [jw]: "fire-fcm-compat",
    [Fw]: "fire-perf",
    [Hw]: "fire-perf-compat",
    [Uw]: "fire-rc",
    [Vw]: "fire-rc-compat",
    [Bw]: "fire-gcs",
    [Ww]: "fire-gcs-compat",
    [qw]: "fire-fst",
    [Gw]: "fire-fst-compat",
    [Kw]: "fire-vertex",
    "fire-js": "fire-js",
    [zw]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Vo = new Map(),
  Jw = new Map(),
  $a = new Map();
function Ku(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    dn.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n
    );
  }
}
function Bo(e) {
  const t = e.name;
  if ($a.has(t))
    return (
      dn.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  $a.set(t, e);
  for (const n of Vo.values()) Ku(n, e);
  for (const n of Jw.values()) Ku(n, e);
  return !0;
}
function Xw(e, t) {
  const n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), e.container.getProvider(t);
}
function Qw(e) {
  return e == null ? !1 : e.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Zw = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  },
  Mn = new np("app", "Firebase", Zw);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eE {
  constructor(t, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new As("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw Mn.create("app-deleted", { appName: this._name });
  }
}
function op(e, t = {}) {
  let n = e;
  typeof t != "object" && (t = { name: t });
  const r = Object.assign({ name: Ma, automaticDataCollectionEnabled: !1 }, t),
    s = r.name;
  if (typeof s != "string" || !s)
    throw Mn.create("bad-app-name", { appName: String(s) });
  if ((n || (n = tp()), !n)) throw Mn.create("no-options");
  const o = Vo.get(s);
  if (o) {
    if (Ra(n, o.options) && Ra(r, o.config)) return o;
    throw Mn.create("duplicate-app", { appName: s });
  }
  const i = new sw(s);
  for (const l of $a.values()) i.addComponent(l);
  const a = new eE(n, r, i);
  return Vo.set(s, a), a;
}
function tE(e = Ma) {
  const t = Vo.get(e);
  if (!t && e === Ma && tp()) return op();
  if (!t) throw Mn.create("no-app", { appName: e });
  return t;
}
function Ir(e, t, n) {
  var r;
  let s = (r = Yw[e]) !== null && r !== void 0 ? r : e;
  n && (s += `-${n}`);
  const o = s.match(/\s|\//),
    i = t.match(/\s|\//);
  if (o || i) {
    const a = [`Unable to register library "${s}" with version "${t}":`];
    o &&
      a.push(
        `library name "${s}" contains illegal characters (whitespace or "/")`
      ),
      o && i && a.push("and"),
      i &&
        a.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      dn.warn(a.join(" "));
    return;
  }
  Bo(new As(`${s}-version`, () => ({ library: s, version: t }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nE = "firebase-heartbeat-database",
  rE = 1,
  Is = "firebase-heartbeat-store";
let Ji = null;
function ip() {
  return (
    Ji ||
      (Ji = vw(nE, rE, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              try {
                e.createObjectStore(Is);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((e) => {
        throw Mn.create("idb-open", { originalErrorMessage: e.message });
      })),
    Ji
  );
}
async function sE(e) {
  try {
    const n = (await ip()).transaction(Is),
      r = await n.objectStore(Is).get(ap(e));
    return await n.done, r;
  } catch (t) {
    if (t instanceof Wr) dn.warn(t.message);
    else {
      const n = Mn.create("idb-get", {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      dn.warn(n.message);
    }
  }
}
async function Gu(e, t) {
  try {
    const r = (await ip()).transaction(Is, "readwrite");
    await r.objectStore(Is).put(t, ap(e)), await r.done;
  } catch (n) {
    if (n instanceof Wr) dn.warn(n.message);
    else {
      const r = Mn.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      dn.warn(r.message);
    }
  }
}
function ap(e) {
  return `${e.name}!${e.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const oE = 1024,
  iE = 30;
class aE {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new cE(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var t, n;
    try {
      const s = this.container
          .getProvider("platform-logger")
          .getImmediate()
          .getPlatformInfoString(),
        o = zu();
      if (
        (((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null &&
          ((this._heartbeatsCache = await this._heartbeatsCachePromise),
          ((n = this._heartbeatsCache) === null || n === void 0
            ? void 0
            : n.heartbeats) == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === o ||
        this._heartbeatsCache.heartbeats.some((i) => i.date === o)
      )
        return;
      if (
        (this._heartbeatsCache.heartbeats.push({ date: o, agent: s }),
        this._heartbeatsCache.heartbeats.length > iE)
      ) {
        const i = uE(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(i, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (r) {
      dn.warn(r);
    }
  }
  async getHeartbeatsHeader() {
    var t;
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        ((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return "";
      const n = zu(),
        { heartbeatsToSend: r, unsentEntries: s } = lE(
          this._heartbeatsCache.heartbeats
        ),
        o = Zh(JSON.stringify({ version: 2, heartbeats: r }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = n),
        s.length > 0
          ? ((this._heartbeatsCache.heartbeats = s),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        o
      );
    } catch (n) {
      return dn.warn(n), "";
    }
  }
}
function zu() {
  return new Date().toISOString().substring(0, 10);
}
function lE(e, t = oE) {
  const n = [];
  let r = e.slice();
  for (const s of e) {
    const o = n.find((i) => i.agent === s.agent);
    if (o) {
      if ((o.dates.push(s.date), Yu(n) > t)) {
        o.dates.pop();
        break;
      }
    } else if ((n.push({ agent: s.agent, dates: [s.date] }), Yu(n) > t)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class cE {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return J0()
      ? X0()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await sE(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return Gu(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : s.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return Gu(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : s.lastSentHeartbeatDate,
        heartbeats: [...s.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function Yu(e) {
  return Zh(JSON.stringify({ version: 2, heartbeats: e })).length;
}
function uE(e) {
  if (e.length === 0) return -1;
  let t = 0,
    n = e[0].date;
  for (let r = 1; r < e.length; r++)
    e[r].date < n && ((n = e[r].date), (t = r));
  return t;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function fE(e) {
  Bo(new As("platform-logger", (t) => new ww(t), "PRIVATE")),
    Bo(new As("heartbeat", (t) => new aE(t), "PRIVATE")),
    Ir(Da, qu, e),
    Ir(Da, qu, "esm2017"),
    Ir("fire-js", "");
}
fE("");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dE = "type.googleapis.com/google.protobuf.Int64Value",
  hE = "type.googleapis.com/google.protobuf.UInt64Value";
function lp(e, t) {
  const n = {};
  for (const r in e) e.hasOwnProperty(r) && (n[r] = t(e[r]));
  return n;
}
function Wo(e) {
  if (e == null) return null;
  if (
    (e instanceof Number && (e = e.valueOf()),
    (typeof e == "number" && isFinite(e)) ||
      e === !0 ||
      e === !1 ||
      Object.prototype.toString.call(e) === "[object String]")
  )
    return e;
  if (e instanceof Date) return e.toISOString();
  if (Array.isArray(e)) return e.map((t) => Wo(t));
  if (typeof e == "function" || typeof e == "object")
    return lp(e, (t) => Wo(t));
  throw new Error("Data cannot be encoded in JSON: " + e);
}
function jr(e) {
  if (e == null) return e;
  if (e["@type"])
    switch (e["@type"]) {
      case dE:
      case hE: {
        const t = Number(e.value);
        if (isNaN(t)) throw new Error("Data cannot be decoded from JSON: " + e);
        return t;
      }
      default:
        throw new Error("Data cannot be decoded from JSON: " + e);
    }
  return Array.isArray(e)
    ? e.map((t) => jr(t))
    : typeof e == "function" || typeof e == "object"
    ? lp(e, (t) => jr(t))
    : e;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ll = "functions";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ju = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss",
};
class mt extends Wr {
  constructor(t, n, r) {
    super(`${Ll}/${t}`, n || ""),
      (this.details = r),
      Object.setPrototypeOf(this, mt.prototype);
  }
}
function pE(e) {
  if (e >= 200 && e < 300) return "ok";
  switch (e) {
    case 0:
      return "internal";
    case 400:
      return "invalid-argument";
    case 401:
      return "unauthenticated";
    case 403:
      return "permission-denied";
    case 404:
      return "not-found";
    case 409:
      return "aborted";
    case 429:
      return "resource-exhausted";
    case 499:
      return "cancelled";
    case 500:
      return "internal";
    case 501:
      return "unimplemented";
    case 503:
      return "unavailable";
    case 504:
      return "deadline-exceeded";
  }
  return "unknown";
}
function qo(e, t) {
  let n = pE(e),
    r = n,
    s;
  try {
    const o = t && t.error;
    if (o) {
      const i = o.status;
      if (typeof i == "string") {
        if (!Ju[i]) return new mt("internal", "internal");
        (n = Ju[i]), (r = i);
      }
      const a = o.message;
      typeof a == "string" && (r = a),
        (s = o.details),
        s !== void 0 && (s = jr(s));
    }
  } catch {}
  return n === "ok" ? null : new mt(n, r, s);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mE {
  constructor(t, n, r, s) {
    (this.app = t),
      (this.auth = null),
      (this.messaging = null),
      (this.appCheck = null),
      (this.serverAppAppCheckToken = null),
      Qw(t) &&
        t.settings.appCheckToken &&
        (this.serverAppAppCheckToken = t.settings.appCheckToken),
      (this.auth = n.getImmediate({ optional: !0 })),
      (this.messaging = r.getImmediate({ optional: !0 })),
      this.auth ||
        n.get().then(
          (o) => (this.auth = o),
          () => {}
        ),
      this.messaging ||
        r.get().then(
          (o) => (this.messaging = o),
          () => {}
        ),
      this.appCheck ||
        s == null ||
        s.get().then(
          (o) => (this.appCheck = o),
          () => {}
        );
  }
  async getAuthToken() {
    if (this.auth)
      try {
        const t = await this.auth.getToken();
        return t == null ? void 0 : t.accessToken;
      } catch {
        return;
      }
  }
  async getMessagingToken() {
    if (
      !(
        !this.messaging ||
        !("Notification" in self) ||
        Notification.permission !== "granted"
      )
    )
      try {
        return await this.messaging.getToken();
      } catch {
        return;
      }
  }
  async getAppCheckToken(t) {
    if (this.serverAppAppCheckToken) return this.serverAppAppCheckToken;
    if (this.appCheck) {
      const n = t
        ? await this.appCheck.getLimitedUseToken()
        : await this.appCheck.getToken();
      return n.error ? null : n.token;
    }
    return null;
  }
  async getContext(t) {
    const n = await this.getAuthToken(),
      r = await this.getMessagingToken(),
      s = await this.getAppCheckToken(t);
    return { authToken: n, messagingToken: r, appCheckToken: s };
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ja = "us-central1",
  gE = /^data: (.*?)(?:\n|$)/;
function yE(e) {
  let t = null;
  return {
    promise: new Promise((n, r) => {
      t = setTimeout(() => {
        r(new mt("deadline-exceeded", "deadline-exceeded"));
      }, e);
    }),
    cancel: () => {
      t && clearTimeout(t);
    },
  };
}
class vE {
  constructor(t, n, r, s, o = ja, i = (...a) => fetch(...a)) {
    (this.app = t),
      (this.fetchImpl = i),
      (this.emulatorOrigin = null),
      (this.contextProvider = new mE(t, n, r, s)),
      (this.cancelAllRequests = new Promise((a) => {
        this.deleteService = () => Promise.resolve(a());
      }));
    try {
      const a = new URL(o);
      (this.customDomain = a.origin + (a.pathname === "/" ? "" : a.pathname)),
        (this.region = ja);
    } catch {
      (this.customDomain = null), (this.region = o);
    }
  }
  _delete() {
    return this.deleteService();
  }
  _url(t) {
    const n = this.app.options.projectId;
    return this.emulatorOrigin !== null
      ? `${this.emulatorOrigin}/${n}/${this.region}/${t}`
      : this.customDomain !== null
      ? `${this.customDomain}/${t}`
      : `https://${this.region}-${n}.cloudfunctions.net/${t}`;
  }
}
function bE(e, t, n) {
  e.emulatorOrigin = `http://${t}:${n}`;
}
function _E(e, t, n) {
  const r = (s) => EE(e, t, s, {});
  return (r.stream = (s, o) => CE(e, t, s, o)), r;
}
async function wE(e, t, n, r) {
  n["Content-Type"] = "application/json";
  let s;
  try {
    s = await r(e, { method: "POST", body: JSON.stringify(t), headers: n });
  } catch {
    return { status: 0, json: null };
  }
  let o = null;
  try {
    o = await s.json();
  } catch {}
  return { status: s.status, json: o };
}
async function cp(e, t) {
  const n = {},
    r = await e.contextProvider.getContext(t.limitedUseAppCheckTokens);
  return (
    r.authToken && (n.Authorization = "Bearer " + r.authToken),
    r.messagingToken && (n["Firebase-Instance-ID-Token"] = r.messagingToken),
    r.appCheckToken !== null && (n["X-Firebase-AppCheck"] = r.appCheckToken),
    n
  );
}
function EE(e, t, n, r) {
  const s = e._url(t);
  return SE(e, s, n, r);
}
async function SE(e, t, n, r) {
  n = Wo(n);
  const s = { data: n },
    o = await cp(e, r),
    i = r.timeout || 7e4,
    a = yE(i),
    l = await Promise.race([
      wE(t, s, o, e.fetchImpl),
      a.promise,
      e.cancelAllRequests,
    ]);
  if ((a.cancel(), !l))
    throw new mt("cancelled", "Firebase Functions instance was deleted.");
  const c = qo(l.status, l.json);
  if (c) throw c;
  if (!l.json) throw new mt("internal", "Response is not valid JSON object.");
  let u = l.json.data;
  if ((typeof u > "u" && (u = l.json.result), typeof u > "u"))
    throw new mt("internal", "Response is missing data field.");
  return { data: jr(u) };
}
function CE(e, t, n, r) {
  const s = e._url(t);
  return TE(e, s, n, r || {});
}
async function TE(e, t, n, r) {
  var s;
  n = Wo(n);
  const o = { data: n },
    i = await cp(e, r);
  (i["Content-Type"] = "application/json"), (i.Accept = "text/event-stream");
  let a;
  try {
    a = await e.fetchImpl(t, {
      method: "POST",
      body: JSON.stringify(o),
      headers: i,
      signal: r == null ? void 0 : r.signal,
    });
  } catch (d) {
    if (d instanceof Error && d.name === "AbortError") {
      const m = new mt("cancelled", "Request was cancelled.");
      return {
        data: Promise.reject(m),
        stream: {
          [Symbol.asyncIterator]() {
            return {
              next() {
                return Promise.reject(m);
              },
            };
          },
        },
      };
    }
    const p = qo(0, null);
    return {
      data: Promise.reject(p),
      stream: {
        [Symbol.asyncIterator]() {
          return {
            next() {
              return Promise.reject(p);
            },
          };
        },
      },
    };
  }
  let l, c;
  const u = new Promise((d, p) => {
    (l = d), (c = p);
  });
  (s = r == null ? void 0 : r.signal) === null ||
    s === void 0 ||
    s.addEventListener("abort", () => {
      const d = new mt("cancelled", "Request was cancelled.");
      c(d);
    });
  const f = a.body.getReader(),
    h = OE(f, l, c, r == null ? void 0 : r.signal);
  return {
    stream: {
      [Symbol.asyncIterator]() {
        const d = h.getReader();
        return {
          async next() {
            const { value: p, done: m } = await d.read();
            return { value: p, done: m };
          },
          async return() {
            return await d.cancel(), { done: !0, value: void 0 };
          },
        };
      },
    },
    data: u,
  };
}
function OE(e, t, n, r) {
  const s = (i, a) => {
      const l = i.match(gE);
      if (!l) return;
      const c = l[1];
      try {
        const u = JSON.parse(c);
        if ("result" in u) {
          t(jr(u.result));
          return;
        }
        if ("message" in u) {
          a.enqueue(jr(u.message));
          return;
        }
        if ("error" in u) {
          const f = qo(0, u);
          a.error(f), n(f);
          return;
        }
      } catch (u) {
        if (u instanceof mt) {
          a.error(u), n(u);
          return;
        }
      }
    },
    o = new TextDecoder();
  return new ReadableStream({
    start(i) {
      let a = "";
      return l();
      async function l() {
        if (r != null && r.aborted) {
          const c = new mt("cancelled", "Request was cancelled");
          return i.error(c), n(c), Promise.resolve();
        }
        try {
          const { value: c, done: u } = await e.read();
          if (u) {
            a.trim() && s(a.trim(), i), i.close();
            return;
          }
          if (r != null && r.aborted) {
            const h = new mt("cancelled", "Request was cancelled");
            i.error(h), n(h), await e.cancel();
            return;
          }
          a += o.decode(c, { stream: !0 });
          const f = a.split(`
`);
          a = f.pop() || "";
          for (const h of f) h.trim() && s(h.trim(), i);
          return l();
        } catch (c) {
          const u = c instanceof mt ? c : qo(0, null);
          i.error(u), n(u);
        }
      }
    },
    cancel() {
      return e.cancel();
    },
  });
}
const Xu = "@firebase/functions",
  Qu = "0.12.3";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const AE = "auth-internal",
  IE = "app-check-internal",
  xE = "messaging-internal";
function kE(e) {
  const t = (n, { instanceIdentifier: r }) => {
    const s = n.getProvider("app").getImmediate(),
      o = n.getProvider(AE),
      i = n.getProvider(xE),
      a = n.getProvider(IE);
    return new vE(s, o, i, a, r);
  };
  Bo(new As(Ll, t, "PUBLIC").setMultipleInstances(!0)),
    Ir(Xu, Qu, e),
    Ir(Xu, Qu, "esm2017");
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function PE(e = tE(), t = ja) {
  const r = Xw(Pl(e), Ll).getImmediate({ identifier: t }),
    s = z0("functions");
  return s && RE(r, ...s), r;
}
function RE(e, t, n) {
  bE(Pl(e), t, n);
}
function LE(e, t, n) {
  return _E(Pl(e), t);
}
kE();
var NE = "firebase",
  DE = "11.4.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Ir(NE, DE, "app");
const ME = {
    apiKey: "AIzaSyDxWbJ0-fd9sfUgsstA9K1olTCXaPe7HW8",
    authDomain: "cmpm-384118.firebaseapp.com",
    projectId: "cmpm-384118",
    storageBucket: "cmpm-384118.appspot.com",
    messagingSenderId: "520945705205",
    appId: "1:520945705205:web:b5f70cf0fea63bac5825bc",
  },
  $E = op(ME),
  jE = PE($E);
function Ei(e) {
  return rl() ? (id(e), !0) : !1;
}
function cr(e) {
  return typeof e == "function" ? e() : Q(e);
}
const FE = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const HE = (e) => e != null,
  UE = Object.prototype.toString,
  VE = (e) => UE.call(e) === "[object Object]",
  us = () => {};
function BE(e, t) {
  function n(...r) {
    return new Promise((s, o) => {
      Promise.resolve(
        e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })
      )
        .then(s)
        .catch(o);
    });
  }
  return n;
}
const up = (e) => e();
function WE(e = up) {
  const t = re(!0);
  function n() {
    t.value = !1;
  }
  function r() {
    t.value = !0;
  }
  const s = (...o) => {
    t.value && e(...o);
  };
  return { isActive: Gs(t), pause: n, resume: r, eventFilter: s };
}
function qE(e) {
  return Vn();
}
function KE(...e) {
  if (e.length !== 1) return fl(...e);
  const t = e[0];
  return typeof t == "function" ? Gs(qg(() => ({ get: t, set: us }))) : re(t);
}
function GE(e, t, n = {}) {
  const { eventFilter: r = up, ...s } = n;
  return Pe(e, BE(r, t), s);
}
function zE(e, t, n = {}) {
  const { eventFilter: r, ...s } = n,
    { eventFilter: o, pause: i, resume: a, isActive: l } = WE(r);
  return {
    stop: GE(e, t, { ...s, eventFilter: o }),
    pause: i,
    resume: a,
    isActive: l,
  };
}
function Nl(e, t = !0, n) {
  qE() ? kt(e, n) : t ? e() : Un(e);
}
function YE(e = !1, t = {}) {
  const { truthyValue: n = !0, falsyValue: r = !1 } = t,
    s = Ne(e),
    o = re(e);
  function i(a) {
    if (arguments.length) return (o.value = a), o.value;
    {
      const l = cr(n);
      return (o.value = o.value === l ? cr(r) : l), o.value;
    }
  }
  return s ? i : [o, i];
}
const qt = FE ? window : void 0;
function fs(e) {
  var t;
  const n = cr(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Ko(...e) {
  let t, n, r, s;
  if (
    (typeof e[0] == "string" || Array.isArray(e[0])
      ? (([n, r, s] = e), (t = qt))
      : ([t, n, r, s] = e),
    !t)
  )
    return us;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const o = [],
    i = () => {
      o.forEach((u) => u()), (o.length = 0);
    },
    a = (u, f, h, d) => (
      u.addEventListener(f, h, d), () => u.removeEventListener(f, h, d)
    ),
    l = Pe(
      () => [fs(t), cr(s)],
      ([u, f]) => {
        if ((i(), !u)) return;
        const h = VE(f) ? { ...f } : f;
        o.push(...n.flatMap((d) => r.map((p) => a(u, d, p, h))));
      },
      { immediate: !0, flush: "post" }
    ),
    c = () => {
      l(), i();
    };
  return Ei(c), c;
}
function JE() {
  const e = re(!1),
    t = Vn();
  return (
    t &&
      kt(() => {
        e.value = !0;
      }, t),
    e
  );
}
function fp(e) {
  const t = JE();
  return ye(() => (t.value, !!e()));
}
function XE(e, t = {}) {
  const { immediate: n = !0, fpsLimit: r = void 0, window: s = qt } = t,
    o = re(!1),
    i = r ? 1e3 / r : null;
  let a = 0,
    l = null;
  function c(h) {
    if (!o.value || !s) return;
    a || (a = h);
    const d = h - a;
    if (i && d < i) {
      l = s.requestAnimationFrame(c);
      return;
    }
    (a = h), e({ delta: d, timestamp: h }), (l = s.requestAnimationFrame(c));
  }
  function u() {
    !o.value &&
      s &&
      ((o.value = !0), (a = 0), (l = s.requestAnimationFrame(c)));
  }
  function f() {
    (o.value = !1), l != null && s && (s.cancelAnimationFrame(l), (l = null));
  }
  return n && u(), Ei(f), { isActive: Gs(o), pause: f, resume: u };
}
function dp(e, t = {}) {
  const { window: n = qt } = t,
    r = fp(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let s;
  const o = re(!1),
    i = (c) => {
      o.value = c.matches;
    },
    a = () => {
      s &&
        ("removeEventListener" in s
          ? s.removeEventListener("change", i)
          : s.removeListener(i));
    },
    l = gl(() => {
      r.value &&
        (a(),
        (s = n.matchMedia(cr(e))),
        "addEventListener" in s
          ? s.addEventListener("change", i)
          : s.addListener(i),
        (o.value = s.matches));
    });
  return (
    Ei(() => {
      l(), a(), (s = void 0);
    }),
    o
  );
}
const mo =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  go = "__vueuse_ssr_handlers__",
  QE = ZE();
function ZE() {
  return go in mo || (mo[go] = mo[go] || {}), mo[go];
}
function hp(e, t) {
  return QE[e] || t;
}
function Dl(e) {
  return dp("(prefers-color-scheme: dark)", e);
}
function eS(e) {
  return e == null
    ? "any"
    : e instanceof Set
    ? "set"
    : e instanceof Map
    ? "map"
    : e instanceof Date
    ? "date"
    : typeof e == "boolean"
    ? "boolean"
    : typeof e == "string"
    ? "string"
    : typeof e == "object"
    ? "object"
    : Number.isNaN(e)
    ? "any"
    : "number";
}
const tS = {
    boolean: { read: (e) => e === "true", write: (e) => String(e) },
    object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
    number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
    any: { read: (e) => e, write: (e) => String(e) },
    string: { read: (e) => e, write: (e) => String(e) },
    map: {
      read: (e) => new Map(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e.entries())),
    },
    set: {
      read: (e) => new Set(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e)),
    },
    date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
  },
  Zu = "vueuse-storage";
function nS(e, t, n, r = {}) {
  var s;
  const {
      flush: o = "pre",
      deep: i = !0,
      listenToStorageChanges: a = !0,
      writeDefaults: l = !0,
      mergeDefaults: c = !1,
      shallow: u,
      window: f = qt,
      eventFilter: h,
      onError: d = (E) => {
        console.error(E);
      },
      initOnMounted: p,
    } = r,
    m = (u ? ul : re)(typeof t == "function" ? t() : t);
  if (!n)
    try {
      n = hp("getDefaultStorage", () => {
        var E;
        return (E = qt) == null ? void 0 : E.localStorage;
      })();
    } catch (E) {
      d(E);
    }
  if (!n) return m;
  const S = cr(t),
    b = eS(S),
    C = (s = r.serializer) != null ? s : tS[b],
    { pause: y, resume: g } = zE(m, () => L(m.value), {
      flush: o,
      deep: i,
      eventFilter: h,
    });
  f &&
    a &&
    Nl(() => {
      n instanceof Storage ? Ko(f, "storage", V) : Ko(f, Zu, N), p && V();
    }),
    p || V();
  function A(E, x) {
    if (f) {
      const O = { key: e, oldValue: E, newValue: x, storageArea: n };
      f.dispatchEvent(
        n instanceof Storage
          ? new StorageEvent("storage", O)
          : new CustomEvent(Zu, { detail: O })
      );
    }
  }
  function L(E) {
    try {
      const x = n.getItem(e);
      if (E == null) A(x, null), n.removeItem(e);
      else {
        const O = C.write(E);
        x !== O && (n.setItem(e, O), A(x, O));
      }
    } catch (x) {
      d(x);
    }
  }
  function P(E) {
    const x = E ? E.newValue : n.getItem(e);
    if (x == null) return l && S != null && n.setItem(e, C.write(S)), S;
    if (!E && c) {
      const O = C.read(x);
      return typeof c == "function"
        ? c(O, S)
        : b === "object" && !Array.isArray(O)
        ? { ...S, ...O }
        : O;
    } else return typeof x != "string" ? x : C.read(x);
  }
  function V(E) {
    if (!(E && E.storageArea !== n)) {
      if (E && E.key == null) {
        m.value = S;
        return;
      }
      if (!(E && E.key !== e)) {
        y();
        try {
          (E == null ? void 0 : E.newValue) !== C.write(m.value) &&
            (m.value = P(E));
        } catch (x) {
          d(x);
        } finally {
          E ? Un(g) : g();
        }
      }
    }
  }
  function N(E) {
    V(E.detail);
  }
  return m;
}
const rS =
  "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function sS(e = {}) {
  const {
      selector: t = "html",
      attribute: n = "class",
      initialValue: r = "auto",
      window: s = qt,
      storage: o,
      storageKey: i = "vueuse-color-scheme",
      listenToStorageChanges: a = !0,
      storageRef: l,
      emitAuto: c,
      disableTransition: u = !0,
    } = e,
    f = { auto: "", light: "light", dark: "dark", ...(e.modes || {}) },
    h = Dl({ window: s }),
    d = ye(() => (h.value ? "dark" : "light")),
    p =
      l ||
      (i == null
        ? KE(r)
        : nS(i, r, o, { window: s, listenToStorageChanges: a })),
    m = ye(() => (p.value === "auto" ? d.value : p.value)),
    S = hp("updateHTMLAttrs", (g, A, L) => {
      const P =
        typeof g == "string"
          ? s == null
            ? void 0
            : s.document.querySelector(g)
          : fs(g);
      if (!P) return;
      const V = new Set(),
        N = new Set();
      let E = null;
      if (A === "class") {
        const O = L.split(/\s/g);
        Object.values(f)
          .flatMap((R) => (R || "").split(/\s/g))
          .filter(Boolean)
          .forEach((R) => {
            O.includes(R) ? V.add(R) : N.add(R);
          });
      } else E = { key: A, value: L };
      if (V.size === 0 && N.size === 0 && E === null) return;
      let x;
      u &&
        ((x = s.document.createElement("style")),
        x.appendChild(document.createTextNode(rS)),
        s.document.head.appendChild(x));
      for (const O of V) P.classList.add(O);
      for (const O of N) P.classList.remove(O);
      E && P.setAttribute(E.key, E.value),
        u && (s.getComputedStyle(x).opacity, document.head.removeChild(x));
    });
  function b(g) {
    var A;
    S(t, n, (A = f[g]) != null ? A : g);
  }
  function C(g) {
    e.onChanged ? e.onChanged(g, b) : b(g);
  }
  Pe(m, C, { flush: "post", immediate: !0 }), Nl(() => C(m.value));
  const y = ye({
    get() {
      return c ? p.value : m.value;
    },
    set(g) {
      p.value = g;
    },
  });
  try {
    return Object.assign(y, { store: p, system: d, state: m });
  } catch {
    return y;
  }
}
function pp(e = {}) {
  const { valueDark: t = "dark", valueLight: n = "", window: r = qt } = e,
    s = sS({
      ...e,
      onChanged: (a, l) => {
        var c;
        e.onChanged
          ? (c = e.onChanged) == null || c.call(e, a === "dark", l, a)
          : l(a);
      },
      modes: { dark: t, light: n },
    }),
    o = ye(() =>
      s.system ? s.system.value : Dl({ window: r }).value ? "dark" : "light"
    );
  return ye({
    get() {
      return s.value === "dark";
    },
    set(a) {
      const l = a ? "dark" : "light";
      o.value === l ? (s.value = "auto") : (s.value = l);
    },
  });
}
function mp(e, t, n = {}) {
  const {
      root: r,
      rootMargin: s = "0px",
      threshold: o = 0,
      window: i = qt,
      immediate: a = !0,
    } = n,
    l = fp(() => i && "IntersectionObserver" in i),
    c = ye(() => {
      const p = cr(e);
      return (Array.isArray(p) ? p : [p]).map(fs).filter(HE);
    });
  let u = us;
  const f = re(a),
    h = l.value
      ? Pe(
          () => [c.value, fs(r), f.value],
          ([p, m]) => {
            if ((u(), !f.value || !p.length)) return;
            const S = new IntersectionObserver(t, {
              root: fs(m),
              rootMargin: s,
              threshold: o,
            });
            p.forEach((b) => b && S.observe(b)),
              (u = () => {
                S.disconnect(), (u = us);
              });
          },
          { immediate: a, flush: "post" }
        )
      : us,
    d = () => {
      u(), h(), (f.value = !1);
    };
  return (
    Ei(d),
    {
      isSupported: l,
      isActive: f,
      pause() {
        u(), (f.value = !1);
      },
      resume() {
        f.value = !0;
      },
      stop: d,
    }
  );
}
function Ml(e, t = {}) {
  const { window: n = qt, scrollTarget: r, threshold: s = 0 } = t,
    o = re(!1);
  return (
    mp(
      e,
      (i) => {
        let a = o.value,
          l = 0;
        for (const c of i)
          c.time >= l && ((l = c.time), (a = c.isIntersecting));
        o.value = a;
      },
      { root: r, window: n, threshold: s }
    ),
    o
  );
}
function Fa(e = {}) {
  const {
      window: t = qt,
      initialWidth: n = Number.POSITIVE_INFINITY,
      initialHeight: r = Number.POSITIVE_INFINITY,
      listenOrientation: s = !0,
      includeScrollbar: o = !0,
      type: i = "inner",
    } = e,
    a = re(n),
    l = re(r),
    c = () => {
      t &&
        (i === "outer"
          ? ((a.value = t.outerWidth), (l.value = t.outerHeight))
          : o
          ? ((a.value = t.innerWidth), (l.value = t.innerHeight))
          : ((a.value = t.document.documentElement.clientWidth),
            (l.value = t.document.documentElement.clientHeight)));
    };
  if ((c(), Nl(c), Ko("resize", c, { passive: !0 }), s)) {
    const u = dp("(orientation: portrait)");
    Pe(u, () => c());
  }
  return { width: a, height: l };
}
const oS = {
    "w-full": "",
    flex: "",
    "flex-wrap": "",
    "justify-between": "",
    "md:flex-nowrap": "",
  },
  iS = { class: "flex flex-col", "items-start": "" },
  aS = { class: "flex flex-col", "items-start": "" },
  lS = { class: "flex flex-col", "items-start": "" },
  cS = { class: "flex flex-col", "items-start": "" },
  uS = { class: "flex flex-col", mb4: "", "items-start": "" },
  fS = { class: "flex flex-col", mb4: "", "items-start": "" },
  dS = {
    key: 1,
    "w-full": "",
    flex: "",
    "items-center": "",
    "justify-start": "",
  },
  hS = {
    key: 2,
    "w-full": "",
    flex: "",
    "animate-fade-in": "",
    "items-center": "",
    "justify-start": "",
  },
  pS = { "max-w-200": "", "w-full": "", "md:mt0": "" },
  mS = { pt6: "", "space-y-2": "" },
  gS = { flex: "", "items-center": "" },
  yS = Me({
    __name: "Form",
    setup(e) {
      const t = Mv(),
        n = fr({
          name: "",
          company: "",
          email: "",
          telephone: "",
          enquiry: "",
          subject: "",
          message: "",
        }),
        r = re(!1),
        s = LE(jE, "sendEmail"),
        o = re(!1),
        i = re(!1);
      async function a() {
        try {
          (i.value = !0),
            (
              await s({
                name: n.name,
                company: n.company,
                email: n.email,
                telephone: n.telephone,
                enquiry: n.enquiry,
                subject: "A form submission from the website.",
                message: n.message,
              })
            ).data.success
              ? (t == null ||
                  t.trackEvent({ event: "formSubmission", formId: "testForm" }),
                (r.value = !0),
                (i.value = !1),
                (o.value = !1))
              : (i.value = !1),
            (o.value = !0);
        } catch {
          (i.value = !1), (o.value = !0);
        }
      }
      const l = re(null),
        c = Ml(l),
        u = re(!1);
      Pe(c, (h) => {
        h && (u.value = !0);
      });
      function f(h) {
        t == null || t.trackEvent({ event: h, EventId: "EventPush" });
      }
      return (h, d) => {
        const p = $0;
        return (
          ue(),
          fe("div", oS, [
            !Q(r) && !Q(i)
              ? (ue(),
                fe(
                  "form",
                  {
                    key: 0,
                    class: "lg:max-w-180",
                    "w-full": "",
                    flex: "",
                    "flex-col": "",
                    "gap-2": "",
                    pb10: "",
                    "lg:flex-row": "",
                    "lg:flex-wrap": "",
                    "space-y-2": "",
                    "lg:pb3": "",
                    "md:pr20": "",
                    "lg:space-y-0": "",
                    onSubmit: as(a, ["prevent"]),
                  },
                  [
                    j("div", iS, [
                      d[7] || (d[7] = j("label", { for: "name" }, "Name", -1)),
                      pr(
                        j(
                          "input",
                          {
                            id: "name",
                            "onUpdate:modelValue":
                              d[0] || (d[0] = (m) => (Q(n).name = m)),
                            required: "",
                            type: "text",
                            name: "name",
                          },
                          null,
                          512
                        ),
                        [[Xr, Q(n).name]]
                      ),
                    ]),
                    j("div", aS, [
                      d[8] ||
                        (d[8] = j("label", { for: "company" }, "Company", -1)),
                      pr(
                        j(
                          "input",
                          {
                            id: "company",
                            "onUpdate:modelValue":
                              d[1] || (d[1] = (m) => (Q(n).company = m)),
                            required: "",
                            type: "text",
                            name: "company",
                          },
                          null,
                          512
                        ),
                        [[Xr, Q(n).company]]
                      ),
                    ]),
                    j("div", lS, [
                      d[9] ||
                        (d[9] = j(
                          "label",
                          { for: "email" },
                          "Business Email Address",
                          -1
                        )),
                      pr(
                        j(
                          "input",
                          {
                            id: "email",
                            "onUpdate:modelValue":
                              d[2] || (d[2] = (m) => (Q(n).email = m)),
                            required: "",
                            type: "email",
                            name: "email",
                          },
                          null,
                          512
                        ),
                        [[Xr, Q(n).email]]
                      ),
                    ]),
                    j("div", cS, [
                      d[10] ||
                        (d[10] = j(
                          "label",
                          { for: "telephone" },
                          "Telephone",
                          -1
                        )),
                      pr(
                        j(
                          "input",
                          {
                            id: "email",
                            "onUpdate:modelValue":
                              d[3] || (d[3] = (m) => (Q(n).telephone = m)),
                            required: "",
                            type: "tel",
                            name: "telephone",
                          },
                          null,
                          512
                        ),
                        [[Xr, Q(n).telephone]]
                      ),
                    ]),
                    j("div", uS, [
                      d[12] ||
                        (d[12] = j(
                          "label",
                          { for: "enquiry" },
                          "What does your enquiry relate to",
                          -1
                        )),
                      pr(
                        j(
                          "select",
                          {
                            id: "enquiry",
                            "onUpdate:modelValue":
                              d[4] || (d[4] = (m) => (Q(n).enquiry = m)),
                            required: "",
                            "border-1": "",
                            name: "enquiry",
                          },
                          d[11] ||
                            (d[11] = [
                              j(
                                "option",
                                {
                                  value: `New
                Project Consultation`,
                                },
                                " New Project Consultation ",
                                -1
                              ),
                              j(
                                "option",
                                { value: "PR Media" },
                                " PR Media ",
                                -1
                              ),
                            ]),
                          512
                        ),
                        [[Ov, Q(n).enquiry]]
                      ),
                    ]),
                    j("div", fS, [
                      d[13] ||
                        (d[13] = j(
                          "label",
                          { for: "message" },
                          "Please provide any supporting information in relation to your enquiry here.",
                          -1
                        )),
                      pr(
                        j(
                          "textarea",
                          {
                            id: "message",
                            "onUpdate:modelValue":
                              d[5] || (d[5] = (m) => (Q(n).message = m)),
                            required: "",
                            "w-full": "",
                            name: "message",
                            rows: "5",
                          },
                          null,
                          512
                        ),
                        [[Xr, Q(n).message]]
                      ),
                    ]),
                    d[14] ||
                      (d[14] = j(
                        "p",
                        { "w-full": "", "text-sm": "", "text-gray-500": "" },
                        " * We are not currently hiring for any positions ",
                        -1
                      )),
                    d[15] ||
                      (d[15] = j(
                        "div",
                        {
                          class: "flex flex-col !flex-grow-0",
                          "items-start": "",
                          "self-start": "",
                          btn: "",
                          "dark:bg-light-500": "",
                          "dark:text-dark": "",
                        },
                        [j("button", { type: "submit" }, " Send ")],
                        -1
                      )),
                  ],
                  32
                ))
              : lt("", !0),
            Q(i)
              ? (ue(),
                fe(
                  "div",
                  dS,
                  d[16] ||
                    (d[16] = [
                      j(
                        "div",
                        {
                          "i-carbon-renew": "",
                          "animate-fade-in": "",
                          "animate-spin": "",
                          "animate-reverse": "",
                          "text-5xl": "",
                          "text-blue": "",
                        },
                        null,
                        -1
                      ),
                    ])
                ))
              : lt("", !0),
            Q(r)
              ? (ue(),
                fe(
                  "div",
                  hS,
                  d[17] ||
                    (d[17] = [
                      j(
                        "div",
                        {
                          "i-carbon-checkmark-filled": "",
                          "text-5xl": "",
                          "text-green-500": "",
                        },
                        null,
                        -1
                      ),
                      j(
                        "p",
                        { p4: "", "text-xl": "" },
                        " Thank you for contacting us, we will be in touch shortly. ",
                        -1
                      ),
                    ])
                ))
              : lt("", !0),
            j("div", pS, [
              ce(p, { class: "mt2 h-95 max-h-125 max-w-200 w-full md:mt0" }),
              j("div", mS, [
                d[20] ||
                  (d[20] = j(
                    "div",
                    { flex: "", "items-center": "" },
                    [
                      j("div", { "i-carbon-location": "", mr2: "" }),
                      j("div", null, [
                        Bt(
                          " Thuraya Communications Tower, Level 11, Office 1101 "
                        ),
                        j("br"),
                        Bt("Barsha Heights, "),
                        j("br"),
                        Bt("Dubai, UAE, PO Box 79998 "),
                      ]),
                    ],
                    -1
                  )),
                j("div", gS, [
                  d[18] ||
                    (d[18] = j(
                      "div",
                      { "i-carbon-phone": "", mr2: "" },
                      null,
                      -1
                    )),
                  d[19] || (d[19] = Bt()),
                  j(
                    "a",
                    {
                      class: "!no-underline",
                      href: "tel:+971 52 687 7554",
                      onClick:
                        d[6] ||
                        (d[6] = as((m) => f("phone_contact"), ["prevent"])),
                    },
                    " +971 52 687 7554 "
                  ),
                ]),
              ]),
            ]),
          ])
        );
      };
    },
  }),
  Zs = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n;
  },
  vS = Zs(yS, [["__scopeId", "data-v-245b826c"]]),
  bS = {
    key: 0,
    "max-w-full": "",
    "w-full": "",
    px7: "",
    "py-8": "",
    "text-left": "",
    prose: "",
    "lg:px-25": "",
    class: "!mt-0",
  },
  _S = Me({
    __name: "ContactForm",
    setup(e) {
      const t = re(null),
        n = Ml(t),
        r = re(!1);
      return (
        Pe(n, (s) => {
          s && (r.value = !0);
        }),
        (s, o) => {
          const i = vS;
          return (
            ue(),
            fe(
              "div",
              { ref_key: "target", ref: t },
              [
                Q(r)
                  ? (ue(),
                    fe("div", bS, [
                      o[0] ||
                        (o[0] = j(
                          "div",
                          {
                            flex: "",
                            "flex-col": "",
                            "items-start": "",
                            "self-start": "",
                            pb10: "",
                            pt15: "",
                            "text-left": "",
                            "text-4xl": "",
                          },
                          [
                            j(
                              "h5",
                              { "flex-inline": "", "font-normal": "" },
                              " Contact Us "
                            ),
                            j("div", {
                              mt5: "",
                              "h0.5": "",
                              "w-30": "",
                              "self-start": "",
                              "bg-cmbrown": "",
                            }),
                          ],
                          -1
                        )),
                      ce(i),
                    ]))
                  : lt("", !0),
              ],
              512
            )
          );
        }
      );
    },
  }),
  wS = {
    "border-b-0.5": "",
    "bg-light-100": "",
    py10: "",
    "dark:bg-bluegray-700": "",
  },
  ES = {
    my5: "",
    "w-full": "",
    flex: "",
    "snap-x": "",
    "snap-mandatory": "",
    "gap-10": "",
    "overflow-x-scroll": "",
    px7: "",
    pb15: "",
    "lg:grid": "",
    "lg:grid-cols-3": "",
    "lg:items-start": "",
    "lg:overflow-x-hidden": "",
    "lg:px25": "",
  },
  SS = { py5: "", "text-left": "" },
  CS = {
    "min-h-42": "",
    py3: "",
    "text-warmgray-500": "",
    "font-normal": "",
    "leading-6": "",
    "dark:text-warmgray-200": "",
  },
  TS = { mt2: "", "border-t-1": "", pt4: "" },
  OS = { "font-bold": "" },
  AS = Me({
    __name: "TheTestimonials",
    setup(e) {
      const t = [
        {
          name: "John Nickson",
          position: "Monsoon Accessorize LLC",
          text: "The advice and support provided by CM Project Management during the lifespan of our projects was immense and ensured the successful completion of our retail stores in multiple Emirates. We have no hesitation to highly recommend them as a prospective Project Managers for any retail store in the UAE.",
        },
        {
          name: "Senior Project Manager",
          position: "AWR Properties",
          text: "Working with CM Project Management has been an absolute pleasure. Though we faced extreme tight deadlines, their supervision and assistance played a major role in facilitating our work and finishing within the desired timeframe. They were very supportive and available all around the clock, any time any day, even for matters outside their scope of business. We hired CM Project Management and we knew the deadlines were tight, however their expertise proved we made the right decision and we were very content with the outcome and moved within the timeframe initially agreed.",
        },
        {
          name: "Marcus Robinson",
          position: "SOHO Luxury Restaurants",
          text: "CM Project Management were at our side every step of the way from our first interaction through to handover of our projects. They provided constant, meticulous advice and support throughout the project lifecycle and we couldn’t be happier with the service provided.",
        },
      ];
      return (n, r) => (
        ue(),
        fe("div", wS, [
          r[2] ||
            (r[2] = j(
              "div",
              {
                flex: "",
                "flex-col": "",
                "items-start": "",
                "self-start": "",
                px7: "",
                pb10: "",
                pt20: "",
                "text-left": "",
                "text-4xl": "",
                "lg:px25": "",
              },
              [
                j("h5", { "flex-inline": "" }, " Testimonials "),
                j("div", {
                  mt5: "",
                  "h0.5": "",
                  "w-30": "",
                  "self-start": "",
                  "bg-cmbrown": "",
                }),
              ],
              -1
            )),
          j("div", ES, [
            (ue(),
            fe(
              Ue,
              null,
              pi(t, (s, o) =>
                j(
                  "div",
                  {
                    key: o,
                    class: "shrink-0 grow basis-full hover:opacity-100",
                    "snap-center": "",
                    "snap-always": "",
                    "border-1": "",
                    "bg-white": "",
                    px10: "",
                    "text-dark": "",
                    "shadow-lg": "",
                    "dark:border-dark": "",
                    "dark:bg-dark": "",
                    "dark:text-light": "",
                  },
                  [
                    j("div", SS, [
                      j("p", CS, [
                        r[0] ||
                          (r[0] = j(
                            "span",
                            {
                              flex: "",
                              "flex-inline": "",
                              "translate-y-3": "",
                              "items-center": "",
                              "justify-center": "",
                              pr3: "",
                              "text-4xl": "",
                              "text-cmbrown": "",
                              "leading-1": "",
                              italic: "",
                            },
                            '" ',
                            -1
                          )),
                        Bt(
                          " " +
                            At(
                              s.text.length >= 300
                                ? `${s.text.slice(0, 299)}...`
                                : s.text
                            ) +
                            " ",
                          1
                        ),
                        r[1] ||
                          (r[1] = j(
                            "span",
                            {
                              flex: "",
                              "flex-inline": "",
                              "translate-y-3": "",
                              "items-center": "",
                              "justify-center": "",
                              pr3: "",
                              "text-4xl": "",
                              "text-cmbrown": "",
                              "leading-1": "",
                              italic: "",
                            },
                            '" ',
                            -1
                          )),
                      ]),
                      j("div", TS, [
                        j("p", OS, At(s.name), 1),
                        j("p", null, At(s.position), 1),
                      ]),
                    ]),
                  ]
                )
              ),
              64
            )),
          ]),
        ])
      );
    },
  }),
  IS = Zs(AS, [["__scopeId", "data-v-55e5eb6d"]]);
function xS(e) {
  const t = new Date(e),
    n = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    r = t.getDate(),
    s = t.getMonth(),
    o = t.getFullYear(),
    i = kS(r);
  return `${n[s]} ${r}${i}, ${o}`;
}
function kS(e) {
  const t = e % 10,
    n = e % 100;
  return t === 1 && n !== 11
    ? "st"
    : t === 2 && n !== 12
    ? "nd"
    : t === 3 && n !== 13
    ? "rd"
    : "th";
}
const PS = { key: 0, relative: "", "animate-fade-in": "" },
  RS = {
    class:
      "h-full w-full flex flex-wrap items-stretch justify-start px5 md:flex-nowrap",
  },
  LS = {
    flex: "",
    "flex-col": "",
    "items-start": "",
    "justify-start": "",
    pr10: "",
  },
  NS = { py1: "", "text-left": "", "text-3xl": "" },
  DS = { "text-left": "", "text-lg": "", ordinal: "" },
  MS = { key: 0, mb5: "", pt5: "", "text-left": "" },
  $S = { key: 1, flex: "", "space-x-2": "" },
  Xi = 300,
  jS = Me({
    __name: "TheInsight2",
    props: { blog: null, full: { type: Boolean }, index: null },
    setup(e) {
      const t = ye(() => {
        if (
          !e.blog ||
          !e.blog.content ||
          !e.blog.content[0] ||
          !e.blog.content[0].children
        )
          return "";
        const r = e.blog.content[0].children;
        let s = r[0].text,
          o = 1;
        for (; s.length < Xi && o < r.length; ) (s += ` ${r[o].text}`), o++;
        if (s.length >= Xi) {
          const i = s.indexOf(".", Xi);
          i !== -1 && (s = s.slice(0, i + 1));
        }
        return s;
      });
      Pe(e.blog);
      const n = ye(() =>
        !e.blog ||
        !e.blog.content ||
        !e.blog.content[0] ||
        !e.blog.content[0].children
          ? ""
          : xS(e.blog.date)
      );
      return (r, s) => {
        const o = Ys("Router-Link");
        return e.blog
          ? (ue(),
            fe("div", PS, [
              j("div", RS, [
                j("div", null, [
                  j("div", LS, [
                    j("h3", NS, At(e.blog.title), 1),
                    j("h4", DS, At(Q(n)), 1),
                    e.full ? (ue(), fe("p", MS, At(Q(t)), 1)) : lt("", !0),
                    e.full
                      ? (ue(),
                        fe("div", $S, [
                          ce(
                            o,
                            { "bg-cmblue": "", btn: "", to: "/insights" },
                            {
                              default: bt(
                                () =>
                                  s[0] || (s[0] = [Bt(" Read More Insights ")])
                              ),
                              _: 1,
                            }
                          ),
                        ]))
                      : lt("", !0),
                  ]),
                ]),
              ]),
            ]))
          : lt("", !0);
      };
    },
  }),
  gp = !(typeof navigator > "u") && navigator.product === "ReactNative",
  yp = { timeout: gp ? 6e4 : 12e4 },
  FS = function (e) {
    const t = { ...yp, ...(typeof e == "string" ? { url: e } : e) };
    if (((t.timeout = vp(t.timeout)), t.query)) {
      const { url: n, searchParams: r } = (function (s) {
        const o = s.indexOf("?");
        if (o === -1) return { url: s, searchParams: new URLSearchParams() };
        const i = s.slice(0, o),
          a = s.slice(o + 1);
        if (!gp) return { url: i, searchParams: new URLSearchParams(a) };
        if (typeof decodeURIComponent != "function")
          throw new Error(
            "Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined"
          );
        const l = new URLSearchParams();
        for (const c of a.split("&")) {
          const [u, f] = c.split("=");
          u && l.append(ef(u), ef(f || ""));
        }
        return { url: i, searchParams: l };
      })(t.url);
      for (const [s, o] of Object.entries(t.query)) {
        if (o !== void 0)
          if (Array.isArray(o)) for (const a of o) r.append(s, a);
          else r.append(s, o);
        const i = r.toString();
        i && (t.url = `${n}?${i}`);
      }
    }
    return (
      (t.method =
        t.body && !t.method ? "POST" : (t.method || "GET").toUpperCase()),
      t
    );
  };
function ef(e) {
  return decodeURIComponent(e.replace(/\+/g, " "));
}
function vp(e) {
  if (e === !1 || e === 0) return !1;
  if (e.connect || e.socket) return e;
  const t = Number(e);
  return isNaN(t) ? vp(yp.timeout) : { connect: t, socket: t };
}
const HS = /^https?:\/\//i,
  US = function (e) {
    if (!HS.test(e.url)) throw new Error(`"${e.url}" is not a valid URL`);
  };
function bp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
const VS = ["request", "response", "progress", "error", "abort"],
  tf = [
    "processOptions",
    "validateOptions",
    "interceptRequest",
    "finalizeOptions",
    "onRequest",
    "onResponse",
    "onError",
    "onReturn",
    "onHeaders",
  ];
function _p(e, t) {
  const n = [],
    r = tf.reduce((o, i) => ((o[i] = o[i] || []), o), {
      processOptions: [FS],
      validateOptions: [US],
    });
  function s(o) {
    const i = VS.reduce(
        (d, p) => (
          (d[p] = (function () {
            const m = Object.create(null);
            let S = 0;
            return {
              publish: function (b) {
                for (const C in m) m[C](b);
              },
              subscribe: function (b) {
                const C = S++;
                return (
                  (m[C] = b),
                  function () {
                    delete m[C];
                  }
                );
              },
            };
          })()),
          d
        ),
        {}
      ),
      a = ((d) =>
        function (p, m, ...S) {
          const b = p === "onError";
          let C = m;
          for (
            let y = 0;
            y < d[p].length && ((C = (0, d[p][y])(C, ...S)), !b || C);
            y++
          );
          return C;
        })(r),
      l = a("processOptions", o);
    a("validateOptions", l);
    const c = { options: l, channels: i, applyMiddleware: a };
    let u;
    const f = i.request.subscribe((d) => {
      u = t(d, (p, m) =>
        ((S, b, C) => {
          let y = S,
            g = b;
          if (!y)
            try {
              g = a("onResponse", b, C);
            } catch (A) {
              (g = null), (y = A);
            }
          (y = y && a("onError", y, C)),
            y ? i.error.publish(y) : g && i.response.publish(g);
        })(p, m, d)
      );
    });
    i.abort.subscribe(() => {
      f(), u && u.abort();
    });
    const h = a("onReturn", i, c);
    return h === i && i.request.publish(c), h;
  }
  return (
    (s.use = function (o) {
      if (!o)
        throw new Error(
          "Tried to add middleware that resolved to falsey value"
        );
      if (typeof o == "function")
        throw new Error(
          "Tried to add middleware that was a function. It probably expects you to pass options to it."
        );
      if (o.onReturn && r.onReturn.length > 0)
        throw new Error(
          "Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event"
        );
      return (
        tf.forEach((i) => {
          o[i] && r[i].push(o[i]);
        }),
        n.push(o),
        s
      );
    }),
    (s.clone = () => _p(n, t)),
    e.forEach(s.use),
    s
  );
}
var nf,
  rf,
  BS = bp(
    (function () {
      if (rf) return nf;
      rf = 1;
      var e = function (t) {
        return t.replace(/^\s+|\s+$/g, "");
      };
      return (nf = function (t) {
        if (!t) return {};
        for (
          var n = {},
            r = e(t).split(`
`),
            s = 0;
          s < r.length;
          s++
        ) {
          var o = r[s],
            i = o.indexOf(":"),
            a = e(o.slice(0, i)).toLowerCase(),
            l = e(o.slice(i + 1));
          typeof n[a] > "u"
            ? (n[a] = l)
            : ((c = n[a]),
              Object.prototype.toString.call(c) === "[object Array]"
                ? n[a].push(l)
                : (n[a] = [n[a], l]));
        }
        var c;
        return n;
      });
    })()
  ),
  Rs,
  Ls,
  Pr,
  Ns,
  Zt,
  Ds,
  Ms,
  Xf;
let Ha =
  ((Xf = class {
    constructor() {
      ie(this, "onabort");
      ie(this, "onerror");
      ie(this, "onreadystatechange");
      ie(this, "ontimeout");
      ie(this, "readyState", 0);
      ie(this, "response");
      ie(this, "responseText", "");
      ie(this, "responseType", "");
      ie(this, "status");
      ie(this, "statusText");
      ie(this, "withCredentials");
      ve(this, Rs);
      ve(this, Ls);
      ve(this, Pr);
      ve(this, Ns, {});
      ve(this, Zt);
      ve(this, Ds, {});
      ve(this, Ms);
    }
    open(t, n, r) {
      var s;
      me(this, Rs, t),
        me(this, Ls, n),
        me(this, Pr, ""),
        (this.readyState = 1),
        (s = this.onreadystatechange) == null || s.call(this),
        me(this, Zt, void 0);
    }
    abort() {
      B(this, Zt) && B(this, Zt).abort();
    }
    getAllResponseHeaders() {
      return B(this, Pr);
    }
    setRequestHeader(t, n) {
      B(this, Ns)[t] = n;
    }
    setInit(t, n = !0) {
      me(this, Ds, t), me(this, Ms, n);
    }
    send(t) {
      const n = this.responseType !== "arraybuffer",
        r = {
          ...B(this, Ds),
          method: B(this, Rs),
          headers: B(this, Ns),
          body: t,
        };
      typeof AbortController == "function" &&
        B(this, Ms) &&
        (me(this, Zt, new AbortController()),
        typeof EventTarget < "u" &&
          B(this, Zt).signal instanceof EventTarget &&
          (r.signal = B(this, Zt).signal)),
        typeof document < "u" &&
          (r.credentials = this.withCredentials ? "include" : "omit"),
        fetch(B(this, Ls), r)
          .then((s) => {
            var o;
            return (
              s.headers.forEach((i, a) => {
                me(
                  this,
                  Pr,
                  B(this, Pr) +
                    `${a}: ${i}\r
`
                );
              }),
              (this.status = s.status),
              (this.statusText = s.statusText),
              (this.readyState = 3),
              (o = this.onreadystatechange) == null || o.call(this),
              n ? s.text() : s.arrayBuffer()
            );
          })
          .then((s) => {
            var o;
            typeof s == "string"
              ? (this.responseText = s)
              : (this.response = s),
              (this.readyState = 4),
              (o = this.onreadystatechange) == null || o.call(this);
          })
          .catch((s) => {
            var o, i;
            s.name !== "AbortError"
              ? (o = this.onerror) == null || o.call(this, s)
              : (i = this.onabort) == null || i.call(this);
          });
    }
  }),
  (Rs = new WeakMap()),
  (Ls = new WeakMap()),
  (Pr = new WeakMap()),
  (Ns = new WeakMap()),
  (Zt = new WeakMap()),
  (Ds = new WeakMap()),
  (Ms = new WeakMap()),
  Xf);
const Ua = typeof XMLHttpRequest == "function" ? "xhr" : "fetch",
  WS = Ua === "xhr" ? XMLHttpRequest : Ha,
  qS = (e, t) => {
    const n = e.options,
      r = e.applyMiddleware("finalizeOptions", n),
      s = {},
      o = e.applyMiddleware("interceptRequest", void 0, {
        adapter: Ua,
        context: e,
      });
    if (o) {
      const m = setTimeout(t, 0, null, o);
      return { abort: () => clearTimeout(m) };
    }
    let i = new WS();
    i instanceof Ha &&
      typeof r.fetch == "object" &&
      i.setInit(r.fetch, r.useAbortSignal ?? !0);
    const a = r.headers,
      l = r.timeout;
    let c = !1,
      u = !1,
      f = !1;
    if (
      ((i.onerror = (m) => {
        p(
          i instanceof Ha
            ? m instanceof Error
              ? m
              : new Error(
                  `Request error while attempting to reach is ${r.url}`,
                  { cause: m }
                )
            : new Error(
                `Request error while attempting to reach is ${r.url}${
                  m.lengthComputable
                    ? `(${m.loaded} of ${m.total} bytes transferred)`
                    : ""
                }`
              )
        );
      }),
      (i.ontimeout = (m) => {
        p(
          new Error(
            `Request timeout while attempting to reach ${r.url}${
              m.lengthComputable
                ? `(${m.loaded} of ${m.total} bytes transferred)`
                : ""
            }`
          )
        );
      }),
      (i.onabort = () => {
        d(!0), (c = !0);
      }),
      (i.onreadystatechange = () => {
        l &&
          (d(), (s.socket = setTimeout(() => h("ESOCKETTIMEDOUT"), l.socket))),
          !c &&
            i.readyState === 4 &&
            i.status !== 0 &&
            (function () {
              if (!(c || u || f)) {
                if (i.status === 0)
                  return void p(new Error("Unknown XHR error"));
                d(),
                  (u = !0),
                  t(null, {
                    body:
                      i.response ||
                      (i.responseType === "" || i.responseType === "text"
                        ? i.responseText
                        : ""),
                    url: r.url,
                    method: r.method,
                    headers: BS(i.getAllResponseHeaders()),
                    statusCode: i.status,
                    statusMessage: i.statusText,
                  });
              }
            })();
      }),
      i.open(r.method, r.url, !0),
      (i.withCredentials = !!r.withCredentials),
      a && i.setRequestHeader)
    )
      for (const m in a) a.hasOwnProperty(m) && i.setRequestHeader(m, a[m]);
    return (
      r.rawBody && (i.responseType = "arraybuffer"),
      e.applyMiddleware("onRequest", {
        options: r,
        adapter: Ua,
        request: i,
        context: e,
      }),
      i.send(r.body || null),
      l && (s.connect = setTimeout(() => h("ETIMEDOUT"), l.connect)),
      {
        abort: function () {
          (c = !0), i && i.abort();
        },
      }
    );
    function h(m) {
      (f = !0), i.abort();
      const S = new Error(
        m === "ESOCKETTIMEDOUT"
          ? `Socket timed out on request to ${r.url}`
          : `Connection timed out on request to ${r.url}`
      );
      (S.code = m), e.channels.error.publish(S);
    }
    function d(m) {
      (m || c || (i.readyState >= 2 && s.connect)) && clearTimeout(s.connect),
        s.socket && clearTimeout(s.socket);
    }
    function p(m) {
      if (u) return;
      d(!0), (u = !0), (i = null);
      const S =
        m || new Error(`Network error while attempting to reach ${r.url}`);
      (S.isNetworkError = !0), (S.request = r), t(S);
    }
  },
  KS = (e = [], t = qS) => _p(e, t);
var GS = {},
  sf,
  of,
  af,
  lf,
  cf,
  Qi = { exports: {} };
cf ||
  ((cf = 1),
  (function (e, t) {
    (t.formatArgs = function (r) {
      if (
        ((r[0] =
          (this.useColors ? "%c" : "") +
          this.namespace +
          (this.useColors ? " %c" : " ") +
          r[0] +
          (this.useColors ? "%c " : " ") +
          "+" +
          e.exports.humanize(this.diff)),
        !this.useColors)
      )
        return;
      const s = "color: " + this.color;
      r.splice(1, 0, s, "color: inherit");
      let o = 0,
        i = 0;
      r[0].replace(/%[a-zA-Z%]/g, (a) => {
        a !== "%%" && (o++, a === "%c" && (i = o));
      }),
        r.splice(i, 0, s);
    }),
      (t.save = function (r) {
        try {
          r ? t.storage.setItem("debug", r) : t.storage.removeItem("debug");
        } catch {}
      }),
      (t.load = function () {
        let r;
        try {
          r = t.storage.getItem("debug");
        } catch {}
        return (
          !r && typeof process < "u" && "env" in process && (r = GS.DEBUG), r
        );
      }),
      (t.useColors = function () {
        if (
          typeof window < "u" &&
          window.process &&
          (window.process.type === "renderer" || window.process.__nwjs)
        )
          return !0;
        if (
          typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
        )
          return !1;
        let r;
        return (
          (typeof document < "u" &&
            document.documentElement &&
            document.documentElement.style &&
            document.documentElement.style.WebkitAppearance) ||
          (typeof window < "u" &&
            window.console &&
            (window.console.firebug ||
              (window.console.exception && window.console.table))) ||
          (typeof navigator < "u" &&
            navigator.userAgent &&
            (r = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) &&
            parseInt(r[1], 10) >= 31) ||
          (typeof navigator < "u" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        );
      }),
      (t.storage = (function () {
        try {
          return localStorage;
        } catch {}
      })()),
      (t.destroy = (() => {
        let r = !1;
        return () => {
          r ||
            ((r = !0),
            console.warn(
              "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
            ));
        };
      })()),
      (t.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33",
      ]),
      (t.log = console.debug || console.log || (() => {})),
      (e.exports = (
        lf
          ? af
          : ((lf = 1),
            (af = function (r) {
              function s(a) {
                let l,
                  c,
                  u,
                  f = null;
                function h(...d) {
                  if (!h.enabled) return;
                  const p = h,
                    m = Number(new Date()),
                    S = m - (l || m);
                  (p.diff = S),
                    (p.prev = l),
                    (p.curr = m),
                    (l = m),
                    (d[0] = s.coerce(d[0])),
                    typeof d[0] != "string" && d.unshift("%O");
                  let b = 0;
                  (d[0] = d[0].replace(/%([a-zA-Z%])/g, (C, y) => {
                    if (C === "%%") return "%";
                    b++;
                    const g = s.formatters[y];
                    if (typeof g == "function") {
                      const A = d[b];
                      (C = g.call(p, A)), d.splice(b, 1), b--;
                    }
                    return C;
                  })),
                    s.formatArgs.call(p, d),
                    (p.log || s.log).apply(p, d);
                }
                return (
                  (h.namespace = a),
                  (h.useColors = s.useColors()),
                  (h.color = s.selectColor(a)),
                  (h.extend = o),
                  (h.destroy = s.destroy),
                  Object.defineProperty(h, "enabled", {
                    enumerable: !0,
                    configurable: !1,
                    get: () =>
                      f !== null
                        ? f
                        : (c !== s.namespaces &&
                            ((c = s.namespaces), (u = s.enabled(a))),
                          u),
                    set: (d) => {
                      f = d;
                    },
                  }),
                  typeof s.init == "function" && s.init(h),
                  h
                );
              }
              function o(a, l) {
                const c = s(this.namespace + (typeof l > "u" ? ":" : l) + a);
                return (c.log = this.log), c;
              }
              function i(a, l) {
                let c = 0,
                  u = 0,
                  f = -1,
                  h = 0;
                for (; c < a.length; )
                  if (u < l.length && (l[u] === a[c] || l[u] === "*"))
                    l[u] === "*" ? ((f = u), (h = c), u++) : (c++, u++);
                  else {
                    if (f === -1) return !1;
                    (u = f + 1), h++, (c = h);
                  }
                for (; u < l.length && l[u] === "*"; ) u++;
                return u === l.length;
              }
              return (
                (s.debug = s),
                (s.default = s),
                (s.coerce = function (a) {
                  return a instanceof Error ? a.stack || a.message : a;
                }),
                (s.disable = function () {
                  const a = [...s.names, ...s.skips.map((l) => "-" + l)].join(
                    ","
                  );
                  return s.enable(""), a;
                }),
                (s.enable = function (a) {
                  s.save(a), (s.namespaces = a), (s.names = []), (s.skips = []);
                  const l = (typeof a == "string" ? a : "")
                    .trim()
                    .replace(" ", ",")
                    .split(",")
                    .filter(Boolean);
                  for (const c of l)
                    c[0] === "-" ? s.skips.push(c.slice(1)) : s.names.push(c);
                }),
                (s.enabled = function (a) {
                  for (const l of s.skips) if (i(a, l)) return !1;
                  for (const l of s.names) if (i(a, l)) return !0;
                  return !1;
                }),
                (s.humanize = (function () {
                  if (of) return sf;
                  of = 1;
                  var a = 1e3,
                    l = 60 * a,
                    c = 60 * l,
                    u = 24 * c,
                    f = 7 * u;
                  function h(d, p, m, S) {
                    var b = p >= 1.5 * m;
                    return Math.round(d / m) + " " + S + (b ? "s" : "");
                  }
                  return (sf = function (d, p) {
                    p = p || {};
                    var m,
                      S,
                      b = typeof d;
                    if (b === "string" && d.length > 0)
                      return (function (C) {
                        if (!((C = String(C)).length > 100)) {
                          var y =
                            /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                              C
                            );
                          if (y) {
                            var g = parseFloat(y[1]);
                            switch ((y[2] || "ms").toLowerCase()) {
                              case "years":
                              case "year":
                              case "yrs":
                              case "yr":
                              case "y":
                                return 315576e5 * g;
                              case "weeks":
                              case "week":
                              case "w":
                                return g * f;
                              case "days":
                              case "day":
                              case "d":
                                return g * u;
                              case "hours":
                              case "hour":
                              case "hrs":
                              case "hr":
                              case "h":
                                return g * c;
                              case "minutes":
                              case "minute":
                              case "mins":
                              case "min":
                              case "m":
                                return g * l;
                              case "seconds":
                              case "second":
                              case "secs":
                              case "sec":
                              case "s":
                                return g * a;
                              case "milliseconds":
                              case "millisecond":
                              case "msecs":
                              case "msec":
                              case "ms":
                                return g;
                              default:
                                return;
                            }
                          }
                        }
                      })(d);
                    if (b === "number" && isFinite(d))
                      return p.long
                        ? ((m = d),
                          (S = Math.abs(m)) >= u
                            ? h(m, S, u, "day")
                            : S >= c
                            ? h(m, S, c, "hour")
                            : S >= l
                            ? h(m, S, l, "minute")
                            : S >= a
                            ? h(m, S, a, "second")
                            : m + " ms")
                        : (function (C) {
                            var y = Math.abs(C);
                            return y >= u
                              ? Math.round(C / u) + "d"
                              : y >= c
                              ? Math.round(C / c) + "h"
                              : y >= l
                              ? Math.round(C / l) + "m"
                              : y >= a
                              ? Math.round(C / a) + "s"
                              : C + "ms";
                          })(d);
                    throw new Error(
                      "val is not a non-empty string or a valid number. val=" +
                        JSON.stringify(d)
                    );
                  });
                })()),
                (s.destroy = function () {
                  console.warn(
                    "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
                  );
                }),
                Object.keys(r).forEach((a) => {
                  s[a] = r[a];
                }),
                (s.names = []),
                (s.skips = []),
                (s.formatters = {}),
                (s.selectColor = function (a) {
                  let l = 0;
                  for (let c = 0; c < a.length; c++)
                    (l = (l << 5) - l + a.charCodeAt(c)), (l |= 0);
                  return s.colors[Math.abs(l) % s.colors.length];
                }),
                s.enable(s.load()),
                s
              );
            }))
      )(t));
    const { formatters: n } = e.exports;
    n.j = function (r) {
      try {
        return JSON.stringify(r);
      } catch (s) {
        return "[UnexpectedJSONParseError]: " + s.message;
      }
    };
  })(Qi, Qi.exports)),
  Qi.exports;
const zS = typeof Buffer > "u" ? () => !1 : (e) => Buffer.isBuffer(e);
function uf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function YS(e) {
  if (uf(e) === !1) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(uf(n) === !1 || n.hasOwnProperty("isPrototypeOf") === !1);
}
const JS = ["boolean", "string", "number"];
function XS() {
  return {
    processOptions: (e) => {
      const t = e.body;
      return !t ||
        typeof t.pipe == "function" ||
        zS(t) ||
        (JS.indexOf(typeof t) === -1 && !Array.isArray(t) && !YS(t))
        ? e
        : Object.assign({}, e, {
            body: JSON.stringify(e.body),
            headers: Object.assign({}, e.headers, {
              "Content-Type": "application/json",
            }),
          });
    },
  };
}
function QS(e) {
  return {
    onResponse: (n) => {
      const r = n.headers["content-type"] || "",
        s = (e && e.force) || r.indexOf("application/json") !== -1;
      return n.body && r && s ? Object.assign({}, n, { body: t(n.body) }) : n;
    },
    processOptions: (n) =>
      Object.assign({}, n, {
        headers: Object.assign({ Accept: "application/json" }, n.headers),
      }),
  };
  function t(n) {
    try {
      return JSON.parse(n);
    } catch (r) {
      throw (
        ((r.message = `Failed to parsed response body as JSON: ${r.message}`),
        r)
      );
    }
  }
}
let ns = {};
typeof globalThis < "u"
  ? (ns = globalThis)
  : typeof window < "u"
  ? (ns = window)
  : typeof global < "u"
  ? (ns = global)
  : typeof self < "u" && (ns = self);
var ZS = ns;
function eC(e = {}) {
  const t = e.implementation || ZS.Observable;
  if (!t)
    throw new Error(
      "`Observable` is not available in global scope, and no implementation was passed"
    );
  return {
    onReturn: (n, r) =>
      new t(
        (s) => (
          n.error.subscribe((o) => s.error(o)),
          n.progress.subscribe((o) =>
            s.next(Object.assign({ type: "progress" }, o))
          ),
          n.response.subscribe((o) => {
            s.next(Object.assign({ type: "response" }, o)), s.complete();
          }),
          n.request.publish(r),
          () => n.abort.publish()
        )
      ),
  };
}
function tC() {
  return {
    onRequest: (e) => {
      if (e.adapter !== "xhr") return;
      const t = e.request,
        n = e.context;
      function r(s) {
        return (o) => {
          const i = o.lengthComputable ? (o.loaded / o.total) * 100 : -1;
          n.channels.progress.publish({
            stage: s,
            percent: i,
            total: o.total,
            loaded: o.loaded,
            lengthComputable: o.lengthComputable,
          });
        };
      }
      "upload" in t &&
        "onprogress" in t.upload &&
        (t.upload.onprogress = r("upload")),
        "onprogress" in t && (t.onprogress = r("download"));
    },
  };
}
var wp = (e, t, n) =>
  (n.method === "GET" || n.method === "HEAD") && (e.isNetworkError || !1);
function nC(e) {
  return 100 * Math.pow(2, e) + 100 * Math.random();
}
const $l = (e = {}) =>
  ((t) => {
    const n = t.maxRetries || 5,
      r = t.retryDelay || nC,
      s = t.shouldRetry;
    return {
      onError: (o, i) => {
        const a = i.options,
          l = a.maxRetries || n,
          c = a.retryDelay || r,
          u = a.shouldRetry || s,
          f = a.attemptNumber || 0;
        if (
          ((h = a.body) !== null &&
            typeof h == "object" &&
            typeof h.pipe == "function") ||
          !u(o, f, a) ||
          f >= l
        )
          return o;
        var h;
        const d = Object.assign({}, i, {
          options: Object.assign({}, a, { attemptNumber: f + 1 }),
        });
        return setTimeout(() => i.channels.request.publish(d), c(f)), null;
      },
    };
  })({ shouldRetry: wp, ...e });
$l.shouldRetry = wp;
var Va = function (e, t) {
  return (
    (Va =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (n, r) {
          n.__proto__ = r;
        }) ||
      function (n, r) {
        for (var s in r)
          Object.prototype.hasOwnProperty.call(r, s) && (n[s] = r[s]);
      }),
    Va(e, t)
  );
};
function gn(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Class extends value " + String(t) + " is not a constructor or null"
    );
  Va(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
function rC(e, t, n, r) {
  function s(o) {
    return o instanceof n
      ? o
      : new n(function (i) {
          i(o);
        });
  }
  return new (n || (n = Promise))(function (o, i) {
    function a(u) {
      try {
        c(r.next(u));
      } catch (f) {
        i(f);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (f) {
        i(f);
      }
    }
    function c(u) {
      u.done ? o(u.value) : s(u.value).then(a, l);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function Ep(e, t) {
  var n = {
      label: 0,
      sent: function () {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    },
    r,
    s,
    o,
    i = Object.create(
      (typeof Iterator == "function" ? Iterator : Object).prototype
    );
  return (
    (i.next = a(0)),
    (i.throw = a(1)),
    (i.return = a(2)),
    typeof Symbol == "function" &&
      (i[Symbol.iterator] = function () {
        return this;
      }),
    i
  );
  function a(c) {
    return function (u) {
      return l([c, u]);
    };
  }
  function l(c) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; i && ((i = 0), c[0] && (n = 0)), n; )
      try {
        if (
          ((r = 1),
          s &&
            (o =
              c[0] & 2
                ? s.return
                : c[0]
                ? s.throw || ((o = s.return) && o.call(s), 0)
                : s.next) &&
            !(o = o.call(s, c[1])).done)
        )
          return o;
        switch (((s = 0), o && (c = [c[0] & 2, o.value]), c[0])) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, (s = c[1]), (c = [0]);
            continue;
          case 7:
            (c = n.ops.pop()), n.trys.pop();
            continue;
          default:
            if (
              ((o = n.trys),
              !(o = o.length > 0 && o[o.length - 1]) &&
                (c[0] === 6 || c[0] === 2))
            ) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!o || (c[1] > o[0] && c[1] < o[3]))) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < o[1]) {
              (n.label = o[1]), (o = c);
              break;
            }
            if (o && n.label < o[2]) {
              (n.label = o[2]), n.ops.push(c);
              break;
            }
            o[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = t.call(e, n);
      } catch (u) {
        (c = [6, u]), (s = 0);
      } finally {
        r = o = 0;
      }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Fr(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function hn(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e),
    s,
    o = [],
    i;
  try {
    for (; (t === void 0 || t-- > 0) && !(s = r.next()).done; ) o.push(s.value);
  } catch (a) {
    i = { error: a };
  } finally {
    try {
      s && !s.done && (n = r.return) && n.call(r);
    } finally {
      if (i) throw i.error;
    }
  }
  return o;
}
function pn(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, s = t.length, o; r < s; r++)
      (o || !(r in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function xr(e) {
  return this instanceof xr ? ((this.v = e), this) : new xr(e);
}
function sC(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []),
    s,
    o = [];
  return (
    (s = Object.create(
      (typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype
    )),
    a("next"),
    a("throw"),
    a("return", i),
    (s[Symbol.asyncIterator] = function () {
      return this;
    }),
    s
  );
  function i(d) {
    return function (p) {
      return Promise.resolve(p).then(d, f);
    };
  }
  function a(d, p) {
    r[d] &&
      ((s[d] = function (m) {
        return new Promise(function (S, b) {
          o.push([d, m, S, b]) > 1 || l(d, m);
        });
      }),
      p && (s[d] = p(s[d])));
  }
  function l(d, p) {
    try {
      c(r[d](p));
    } catch (m) {
      h(o[0][3], m);
    }
  }
  function c(d) {
    d.value instanceof xr
      ? Promise.resolve(d.value.v).then(u, f)
      : h(o[0][2], d);
  }
  function u(d) {
    l("next", d);
  }
  function f(d) {
    l("throw", d);
  }
  function h(d, p) {
    d(p), o.shift(), o.length && l(o[0][0], o[0][1]);
  }
}
function oC(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof Fr == "function" ? Fr(e) : e[Symbol.iterator]()),
      (n = {}),
      r("next"),
      r("throw"),
      r("return"),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function r(o) {
    n[o] =
      e[o] &&
      function (i) {
        return new Promise(function (a, l) {
          (i = e[o](i)), s(a, l, i.done, i.value);
        });
      };
  }
  function s(o, i, a, l) {
    Promise.resolve(l).then(function (c) {
      o({ value: c, done: a });
    }, i);
  }
}
function De(e) {
  return typeof e == "function";
}
function jl(e) {
  var t = function (r) {
      Error.call(r), (r.stack = new Error().stack);
    },
    n = e(t);
  return (
    (n.prototype = Object.create(Error.prototype)),
    (n.prototype.constructor = n),
    n
  );
}
var Zi = jl(function (e) {
  return function (n) {
    e(this),
      (this.message = n
        ? n.length +
          ` errors occurred during unsubscription:
` +
          n.map(function (r, s) {
            return s + 1 + ") " + r.toString();
          }).join(`
  `)
        : ""),
      (this.name = "UnsubscriptionError"),
      (this.errors = n);
  };
});
function Go(e, t) {
  if (e) {
    var n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var eo = (function () {
    function e(t) {
      (this.initialTeardown = t),
        (this.closed = !1),
        (this._parentage = null),
        (this._finalizers = null);
    }
    return (
      (e.prototype.unsubscribe = function () {
        var t, n, r, s, o;
        if (!this.closed) {
          this.closed = !0;
          var i = this._parentage;
          if (i)
            if (((this._parentage = null), Array.isArray(i)))
              try {
                for (var a = Fr(i), l = a.next(); !l.done; l = a.next()) {
                  var c = l.value;
                  c.remove(this);
                }
              } catch (m) {
                t = { error: m };
              } finally {
                try {
                  l && !l.done && (n = a.return) && n.call(a);
                } finally {
                  if (t) throw t.error;
                }
              }
            else i.remove(this);
          var u = this.initialTeardown;
          if (De(u))
            try {
              u();
            } catch (m) {
              o = m instanceof Zi ? m.errors : [m];
            }
          var f = this._finalizers;
          if (f) {
            this._finalizers = null;
            try {
              for (var h = Fr(f), d = h.next(); !d.done; d = h.next()) {
                var p = d.value;
                try {
                  ff(p);
                } catch (m) {
                  (o = o ?? []),
                    m instanceof Zi
                      ? (o = pn(pn([], hn(o)), hn(m.errors)))
                      : o.push(m);
                }
              }
            } catch (m) {
              r = { error: m };
            } finally {
              try {
                d && !d.done && (s = h.return) && s.call(h);
              } finally {
                if (r) throw r.error;
              }
            }
          }
          if (o) throw new Zi(o);
        }
      }),
      (e.prototype.add = function (t) {
        var n;
        if (t && t !== this)
          if (this.closed) ff(t);
          else {
            if (t instanceof e) {
              if (t.closed || t._hasParent(this)) return;
              t._addParent(this);
            }
            (this._finalizers =
              (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
          }
      }),
      (e.prototype._hasParent = function (t) {
        var n = this._parentage;
        return n === t || (Array.isArray(n) && n.includes(t));
      }),
      (e.prototype._addParent = function (t) {
        var n = this._parentage;
        this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
      }),
      (e.prototype._removeParent = function (t) {
        var n = this._parentage;
        n === t ? (this._parentage = null) : Array.isArray(n) && Go(n, t);
      }),
      (e.prototype.remove = function (t) {
        var n = this._finalizers;
        n && Go(n, t), t instanceof e && t._removeParent(this);
      }),
      (e.EMPTY = (function () {
        var t = new e();
        return (t.closed = !0), t;
      })()),
      e
    );
  })(),
  Sp = eo.EMPTY;
function Cp(e) {
  return (
    e instanceof eo ||
    (e && "closed" in e && De(e.remove) && De(e.add) && De(e.unsubscribe))
  );
}
function ff(e) {
  De(e) ? e() : e.unsubscribe();
}
var iC = { Promise: void 0 },
  aC = {
    setTimeout: function (e, t) {
      for (var n = [], r = 2; r < arguments.length; r++)
        n[r - 2] = arguments[r];
      return setTimeout.apply(void 0, pn([e, t], hn(n)));
    },
    clearTimeout: function (e) {
      return clearTimeout(e);
    },
    delegate: void 0,
  };
function Tp(e) {
  aC.setTimeout(function () {
    throw e;
  });
}
function df() {}
function To(e) {
  e();
}
var Fl = (function (e) {
    gn(t, e);
    function t(n) {
      var r = e.call(this) || this;
      return (
        (r.isStopped = !1),
        n ? ((r.destination = n), Cp(n) && n.add(r)) : (r.destination = uC),
        r
      );
    }
    return (
      (t.create = function (n, r, s) {
        return new xs(n, r, s);
      }),
      (t.prototype.next = function (n) {
        this.isStopped || this._next(n);
      }),
      (t.prototype.error = function (n) {
        this.isStopped || ((this.isStopped = !0), this._error(n));
      }),
      (t.prototype.complete = function () {
        this.isStopped || ((this.isStopped = !0), this._complete());
      }),
      (t.prototype.unsubscribe = function () {
        this.closed ||
          ((this.isStopped = !0),
          e.prototype.unsubscribe.call(this),
          (this.destination = null));
      }),
      (t.prototype._next = function (n) {
        this.destination.next(n);
      }),
      (t.prototype._error = function (n) {
        try {
          this.destination.error(n);
        } finally {
          this.unsubscribe();
        }
      }),
      (t.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      }),
      t
    );
  })(eo),
  lC = (function () {
    function e(t) {
      this.partialObserver = t;
    }
    return (
      (e.prototype.next = function (t) {
        var n = this.partialObserver;
        if (n.next)
          try {
            n.next(t);
          } catch (r) {
            yo(r);
          }
      }),
      (e.prototype.error = function (t) {
        var n = this.partialObserver;
        if (n.error)
          try {
            n.error(t);
          } catch (r) {
            yo(r);
          }
        else yo(t);
      }),
      (e.prototype.complete = function () {
        var t = this.partialObserver;
        if (t.complete)
          try {
            t.complete();
          } catch (n) {
            yo(n);
          }
      }),
      e
    );
  })(),
  xs = (function (e) {
    gn(t, e);
    function t(n, r, s) {
      var o = e.call(this) || this,
        i;
      return (
        De(n) || !n
          ? (i = {
              next: n ?? void 0,
              error: r ?? void 0,
              complete: s ?? void 0,
            })
          : (i = n),
        (o.destination = new lC(i)),
        o
      );
    }
    return t;
  })(Fl);
function yo(e) {
  Tp(e);
}
function cC(e) {
  throw e;
}
var uC = { closed: !0, next: df, error: cC, complete: df },
  Hl = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })();
function Si(e) {
  return e;
}
function fC() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return Op(e);
}
function Op(e) {
  return e.length === 0
    ? Si
    : e.length === 1
    ? e[0]
    : function (n) {
        return e.reduce(function (r, s) {
          return s(r);
        }, n);
      };
}
var Ve = (function () {
  function e(t) {
    t && (this._subscribe = t);
  }
  return (
    (e.prototype.lift = function (t) {
      var n = new e();
      return (n.source = this), (n.operator = t), n;
    }),
    (e.prototype.subscribe = function (t, n, r) {
      var s = this,
        o = hC(t) ? t : new xs(t, n, r);
      return (
        To(function () {
          var i = s,
            a = i.operator,
            l = i.source;
          o.add(a ? a.call(o, l) : l ? s._subscribe(o) : s._trySubscribe(o));
        }),
        o
      );
    }),
    (e.prototype._trySubscribe = function (t) {
      try {
        return this._subscribe(t);
      } catch (n) {
        t.error(n);
      }
    }),
    (e.prototype.forEach = function (t, n) {
      var r = this;
      return (
        (n = hf(n)),
        new n(function (s, o) {
          var i = new xs({
            next: function (a) {
              try {
                t(a);
              } catch (l) {
                o(l), i.unsubscribe();
              }
            },
            error: o,
            complete: s,
          });
          r.subscribe(i);
        })
      );
    }),
    (e.prototype._subscribe = function (t) {
      var n;
      return (n = this.source) === null || n === void 0
        ? void 0
        : n.subscribe(t);
    }),
    (e.prototype[Hl] = function () {
      return this;
    }),
    (e.prototype.pipe = function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      return Op(t)(this);
    }),
    (e.prototype.toPromise = function (t) {
      var n = this;
      return (
        (t = hf(t)),
        new t(function (r, s) {
          var o;
          n.subscribe(
            function (i) {
              return (o = i);
            },
            function (i) {
              return s(i);
            },
            function () {
              return r(o);
            }
          );
        })
      );
    }),
    (e.create = function (t) {
      return new e(t);
    }),
    e
  );
})();
function hf(e) {
  var t;
  return (t = e ?? iC.Promise) !== null && t !== void 0 ? t : Promise;
}
function dC(e) {
  return e && De(e.next) && De(e.error) && De(e.complete);
}
function hC(e) {
  return (e && e instanceof Fl) || (dC(e) && Cp(e));
}
function pC(e) {
  return De(e == null ? void 0 : e.lift);
}
function Kt(e) {
  return function (t) {
    if (pC(t))
      return t.lift(function (n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function jn(e, t, n, r, s) {
  return new mC(e, t, n, r, s);
}
var mC = (function (e) {
    gn(t, e);
    function t(n, r, s, o, i, a) {
      var l = e.call(this, n) || this;
      return (
        (l.onFinalize = i),
        (l.shouldUnsubscribe = a),
        (l._next = r
          ? function (c) {
              try {
                r(c);
              } catch (u) {
                n.error(u);
              }
            }
          : e.prototype._next),
        (l._error = o
          ? function (c) {
              try {
                o(c);
              } catch (u) {
                n.error(u);
              } finally {
                this.unsubscribe();
              }
            }
          : e.prototype._error),
        (l._complete = s
          ? function () {
              try {
                s();
              } catch (c) {
                n.error(c);
              } finally {
                this.unsubscribe();
              }
            }
          : e.prototype._complete),
        l
      );
    }
    return (
      (t.prototype.unsubscribe = function () {
        var n;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var r = this.closed;
          e.prototype.unsubscribe.call(this),
            !r &&
              ((n = this.onFinalize) === null || n === void 0 || n.call(this));
        }
      }),
      t
    );
  })(Fl),
  gC = jl(function (e) {
    return function () {
      e(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    };
  }),
  Ul = (function (e) {
    gn(t, e);
    function t() {
      var n = e.call(this) || this;
      return (
        (n.closed = !1),
        (n.currentObservers = null),
        (n.observers = []),
        (n.isStopped = !1),
        (n.hasError = !1),
        (n.thrownError = null),
        n
      );
    }
    return (
      (t.prototype.lift = function (n) {
        var r = new pf(this, this);
        return (r.operator = n), r;
      }),
      (t.prototype._throwIfClosed = function () {
        if (this.closed) throw new gC();
      }),
      (t.prototype.next = function (n) {
        var r = this;
        To(function () {
          var s, o;
          if ((r._throwIfClosed(), !r.isStopped)) {
            r.currentObservers ||
              (r.currentObservers = Array.from(r.observers));
            try {
              for (
                var i = Fr(r.currentObservers), a = i.next();
                !a.done;
                a = i.next()
              ) {
                var l = a.value;
                l.next(n);
              }
            } catch (c) {
              s = { error: c };
            } finally {
              try {
                a && !a.done && (o = i.return) && o.call(i);
              } finally {
                if (s) throw s.error;
              }
            }
          }
        });
      }),
      (t.prototype.error = function (n) {
        var r = this;
        To(function () {
          if ((r._throwIfClosed(), !r.isStopped)) {
            (r.hasError = r.isStopped = !0), (r.thrownError = n);
            for (var s = r.observers; s.length; ) s.shift().error(n);
          }
        });
      }),
      (t.prototype.complete = function () {
        var n = this;
        To(function () {
          if ((n._throwIfClosed(), !n.isStopped)) {
            n.isStopped = !0;
            for (var r = n.observers; r.length; ) r.shift().complete();
          }
        });
      }),
      (t.prototype.unsubscribe = function () {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }),
      Object.defineProperty(t.prototype, "observed", {
        get: function () {
          var n;
          return (
            ((n = this.observers) === null || n === void 0
              ? void 0
              : n.length) > 0
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype._trySubscribe = function (n) {
        return this._throwIfClosed(), e.prototype._trySubscribe.call(this, n);
      }),
      (t.prototype._subscribe = function (n) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(n),
          this._innerSubscribe(n)
        );
      }),
      (t.prototype._innerSubscribe = function (n) {
        var r = this,
          s = this,
          o = s.hasError,
          i = s.isStopped,
          a = s.observers;
        return o || i
          ? Sp
          : ((this.currentObservers = null),
            a.push(n),
            new eo(function () {
              (r.currentObservers = null), Go(a, n);
            }));
      }),
      (t.prototype._checkFinalizedStatuses = function (n) {
        var r = this,
          s = r.hasError,
          o = r.thrownError,
          i = r.isStopped;
        s ? n.error(o) : i && n.complete();
      }),
      (t.prototype.asObservable = function () {
        var n = new Ve();
        return (n.source = this), n;
      }),
      (t.create = function (n, r) {
        return new pf(n, r);
      }),
      t
    );
  })(Ve),
  pf = (function (e) {
    gn(t, e);
    function t(n, r) {
      var s = e.call(this) || this;
      return (s.destination = n), (s.source = r), s;
    }
    return (
      (t.prototype.next = function (n) {
        var r, s;
        (s =
          (r = this.destination) === null || r === void 0 ? void 0 : r.next) ===
          null ||
          s === void 0 ||
          s.call(r, n);
      }),
      (t.prototype.error = function (n) {
        var r, s;
        (s =
          (r = this.destination) === null || r === void 0
            ? void 0
            : r.error) === null ||
          s === void 0 ||
          s.call(r, n);
      }),
      (t.prototype.complete = function () {
        var n, r;
        (r =
          (n = this.destination) === null || n === void 0
            ? void 0
            : n.complete) === null ||
          r === void 0 ||
          r.call(n);
      }),
      (t.prototype._subscribe = function (n) {
        var r, s;
        return (s =
          (r = this.source) === null || r === void 0
            ? void 0
            : r.subscribe(n)) !== null && s !== void 0
          ? s
          : Sp;
      }),
      t
    );
  })(Ul),
  Vl = {
    now: function () {
      return (Vl.delegate || Date).now();
    },
    delegate: void 0,
  },
  yC = (function (e) {
    gn(t, e);
    function t(n, r, s) {
      n === void 0 && (n = 1 / 0),
        r === void 0 && (r = 1 / 0),
        s === void 0 && (s = Vl);
      var o = e.call(this) || this;
      return (
        (o._bufferSize = n),
        (o._windowTime = r),
        (o._timestampProvider = s),
        (o._buffer = []),
        (o._infiniteTimeWindow = !0),
        (o._infiniteTimeWindow = r === 1 / 0),
        (o._bufferSize = Math.max(1, n)),
        (o._windowTime = Math.max(1, r)),
        o
      );
    }
    return (
      (t.prototype.next = function (n) {
        var r = this,
          s = r.isStopped,
          o = r._buffer,
          i = r._infiniteTimeWindow,
          a = r._timestampProvider,
          l = r._windowTime;
        s || (o.push(n), !i && o.push(a.now() + l)),
          this._trimBuffer(),
          e.prototype.next.call(this, n);
      }),
      (t.prototype._subscribe = function (n) {
        this._throwIfClosed(), this._trimBuffer();
        for (
          var r = this._innerSubscribe(n),
            s = this,
            o = s._infiniteTimeWindow,
            i = s._buffer,
            a = i.slice(),
            l = 0;
          l < a.length && !n.closed;
          l += o ? 1 : 2
        )
          n.next(a[l]);
        return this._checkFinalizedStatuses(n), r;
      }),
      (t.prototype._trimBuffer = function () {
        var n = this,
          r = n._bufferSize,
          s = n._timestampProvider,
          o = n._buffer,
          i = n._infiniteTimeWindow,
          a = (i ? 1 : 2) * r;
        if ((r < 1 / 0 && a < o.length && o.splice(0, o.length - a), !i)) {
          for (var l = s.now(), c = 0, u = 1; u < o.length && o[u] <= l; u += 2)
            c = u;
          c && o.splice(0, c + 1);
        }
      }),
      t
    );
  })(Ul),
  vC = (function (e) {
    gn(t, e);
    function t(n, r) {
      return e.call(this) || this;
    }
    return (
      (t.prototype.schedule = function (n, r) {
        return this;
      }),
      t
    );
  })(eo),
  mf = {
    setInterval: function (e, t) {
      for (var n = [], r = 2; r < arguments.length; r++)
        n[r - 2] = arguments[r];
      return setInterval.apply(void 0, pn([e, t], hn(n)));
    },
    clearInterval: function (e) {
      return clearInterval(e);
    },
    delegate: void 0,
  },
  bC = (function (e) {
    gn(t, e);
    function t(n, r) {
      var s = e.call(this, n, r) || this;
      return (s.scheduler = n), (s.work = r), (s.pending = !1), s;
    }
    return (
      (t.prototype.schedule = function (n, r) {
        var s;
        if ((r === void 0 && (r = 0), this.closed)) return this;
        this.state = n;
        var o = this.id,
          i = this.scheduler;
        return (
          o != null && (this.id = this.recycleAsyncId(i, o, r)),
          (this.pending = !0),
          (this.delay = r),
          (this.id =
            (s = this.id) !== null && s !== void 0
              ? s
              : this.requestAsyncId(i, this.id, r)),
          this
        );
      }),
      (t.prototype.requestAsyncId = function (n, r, s) {
        return (
          s === void 0 && (s = 0), mf.setInterval(n.flush.bind(n, this), s)
        );
      }),
      (t.prototype.recycleAsyncId = function (n, r, s) {
        if (
          (s === void 0 && (s = 0),
          s != null && this.delay === s && this.pending === !1)
        )
          return r;
        r != null && mf.clearInterval(r);
      }),
      (t.prototype.execute = function (n, r) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = !1;
        var s = this._execute(n, r);
        if (s) return s;
        this.pending === !1 &&
          this.id != null &&
          (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
      }),
      (t.prototype._execute = function (n, r) {
        var s = !1,
          o;
        try {
          this.work(n);
        } catch (i) {
          (s = !0), (o = i || new Error("Scheduled action threw falsy error"));
        }
        if (s) return this.unsubscribe(), o;
      }),
      (t.prototype.unsubscribe = function () {
        if (!this.closed) {
          var n = this,
            r = n.id,
            s = n.scheduler,
            o = s.actions;
          (this.work = this.state = this.scheduler = null),
            (this.pending = !1),
            Go(o, this),
            r != null && (this.id = this.recycleAsyncId(s, r, null)),
            (this.delay = null),
            e.prototype.unsubscribe.call(this);
        }
      }),
      t
    );
  })(vC),
  gf = (function () {
    function e(t, n) {
      n === void 0 && (n = e.now),
        (this.schedulerActionCtor = t),
        (this.now = n);
    }
    return (
      (e.prototype.schedule = function (t, n, r) {
        return (
          n === void 0 && (n = 0),
          new this.schedulerActionCtor(this, t).schedule(r, n)
        );
      }),
      (e.now = Vl.now),
      e
    );
  })(),
  _C = (function (e) {
    gn(t, e);
    function t(n, r) {
      r === void 0 && (r = gf.now);
      var s = e.call(this, n, r) || this;
      return (s.actions = []), (s._active = !1), s;
    }
    return (
      (t.prototype.flush = function (n) {
        var r = this.actions;
        if (this._active) {
          r.push(n);
          return;
        }
        var s;
        this._active = !0;
        do if ((s = n.execute(n.state, n.delay))) break;
        while ((n = r.shift()));
        if (((this._active = !1), s)) {
          for (; (n = r.shift()); ) n.unsubscribe();
          throw s;
        }
      }),
      t
    );
  })(gf),
  wC = new _C(bC),
  EC = wC,
  Ap = new Ve(function (e) {
    return e.complete();
  });
function SC(e) {
  return e && De(e.schedule);
}
function Bl(e) {
  return e[e.length - 1];
}
function CC(e) {
  return De(Bl(e)) ? e.pop() : void 0;
}
function Wl(e) {
  return SC(Bl(e)) ? e.pop() : void 0;
}
function TC(e, t) {
  return typeof Bl(e) == "number" ? e.pop() : t;
}
var Ip = function (e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
function xp(e) {
  return De(e == null ? void 0 : e.then);
}
function kp(e) {
  return De(e[Hl]);
}
function Pp(e) {
  return (
    Symbol.asyncIterator && De(e == null ? void 0 : e[Symbol.asyncIterator])
  );
}
function Rp(e) {
  return new TypeError(
    "You provided " +
      (e !== null && typeof e == "object"
        ? "an invalid object"
        : "'" + e + "'") +
      " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."
  );
}
function OC() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var Lp = OC();
function Np(e) {
  return De(e == null ? void 0 : e[Lp]);
}
function Dp(e) {
  return sC(this, arguments, function () {
    var n, r, s, o;
    return Ep(this, function (i) {
      switch (i.label) {
        case 0:
          (n = e.getReader()), (i.label = 1);
        case 1:
          i.trys.push([1, , 9, 10]), (i.label = 2);
        case 2:
          return [4, xr(n.read())];
        case 3:
          return (
            (r = i.sent()),
            (s = r.value),
            (o = r.done),
            o ? [4, xr(void 0)] : [3, 5]
          );
        case 4:
          return [2, i.sent()];
        case 5:
          return [4, xr(s)];
        case 6:
          return [4, i.sent()];
        case 7:
          return i.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return n.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function Mp(e) {
  return De(e == null ? void 0 : e.getReader);
}
function Gt(e) {
  if (e instanceof Ve) return e;
  if (e != null) {
    if (kp(e)) return AC(e);
    if (Ip(e)) return IC(e);
    if (xp(e)) return xC(e);
    if (Pp(e)) return $p(e);
    if (Np(e)) return kC(e);
    if (Mp(e)) return PC(e);
  }
  throw Rp(e);
}
function AC(e) {
  return new Ve(function (t) {
    var n = e[Hl]();
    if (De(n.subscribe)) return n.subscribe(t);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable"
    );
  });
}
function IC(e) {
  return new Ve(function (t) {
    for (var n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
    t.complete();
  });
}
function xC(e) {
  return new Ve(function (t) {
    e.then(
      function (n) {
        t.closed || (t.next(n), t.complete());
      },
      function (n) {
        return t.error(n);
      }
    ).then(null, Tp);
  });
}
function kC(e) {
  return new Ve(function (t) {
    var n, r;
    try {
      for (var s = Fr(e), o = s.next(); !o.done; o = s.next()) {
        var i = o.value;
        if ((t.next(i), t.closed)) return;
      }
    } catch (a) {
      n = { error: a };
    } finally {
      try {
        o && !o.done && (r = s.return) && r.call(s);
      } finally {
        if (n) throw n.error;
      }
    }
    t.complete();
  });
}
function $p(e) {
  return new Ve(function (t) {
    RC(e, t).catch(function (n) {
      return t.error(n);
    });
  });
}
function PC(e) {
  return $p(Dp(e));
}
function RC(e, t) {
  var n, r, s, o;
  return rC(this, void 0, void 0, function () {
    var i, a;
    return Ep(this, function (l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), (n = oC(e)), (l.label = 1);
        case 1:
          return [4, n.next()];
        case 2:
          if (((r = l.sent()), !!r.done)) return [3, 4];
          if (((i = r.value), t.next(i), t.closed)) return [2];
          l.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return (a = l.sent()), (s = { error: a }), [3, 11];
        case 6:
          return (
            l.trys.push([6, , 9, 10]),
            r && !r.done && (o = n.return) ? [4, o.call(n)] : [3, 8]
          );
        case 7:
          l.sent(), (l.label = 8);
        case 8:
          return [3, 10];
        case 9:
          if (s) throw s.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return t.complete(), [2];
      }
    });
  });
}
function or(e, t, n, r, s) {
  r === void 0 && (r = 0), s === void 0 && (s = !1);
  var o = t.schedule(function () {
    n(), s ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if ((e.add(o), !s)) return o;
}
function jp(e, t) {
  return (
    t === void 0 && (t = 0),
    Kt(function (n, r) {
      n.subscribe(
        jn(
          r,
          function (s) {
            return or(
              r,
              e,
              function () {
                return r.next(s);
              },
              t
            );
          },
          function () {
            return or(
              r,
              e,
              function () {
                return r.complete();
              },
              t
            );
          },
          function (s) {
            return or(
              r,
              e,
              function () {
                return r.error(s);
              },
              t
            );
          }
        )
      );
    })
  );
}
function Fp(e, t) {
  return (
    t === void 0 && (t = 0),
    Kt(function (n, r) {
      r.add(
        e.schedule(function () {
          return n.subscribe(r);
        }, t)
      );
    })
  );
}
function LC(e, t) {
  return Gt(e).pipe(Fp(t), jp(t));
}
function NC(e, t) {
  return Gt(e).pipe(Fp(t), jp(t));
}
function DC(e, t) {
  return new Ve(function (n) {
    var r = 0;
    return t.schedule(function () {
      r === e.length
        ? n.complete()
        : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function MC(e, t) {
  return new Ve(function (n) {
    var r;
    return (
      or(n, t, function () {
        (r = e[Lp]()),
          or(
            n,
            t,
            function () {
              var s, o, i;
              try {
                (s = r.next()), (o = s.value), (i = s.done);
              } catch (a) {
                n.error(a);
                return;
              }
              i ? n.complete() : n.next(o);
            },
            0,
            !0
          );
      }),
      function () {
        return De(r == null ? void 0 : r.return) && r.return();
      }
    );
  });
}
function Hp(e, t) {
  if (!e) throw new Error("Iterable cannot be null");
  return new Ve(function (n) {
    or(n, t, function () {
      var r = e[Symbol.asyncIterator]();
      or(
        n,
        t,
        function () {
          r.next().then(function (s) {
            s.done ? n.complete() : n.next(s.value);
          });
        },
        0,
        !0
      );
    });
  });
}
function $C(e, t) {
  return Hp(Dp(e), t);
}
function jC(e, t) {
  if (e != null) {
    if (kp(e)) return LC(e, t);
    if (Ip(e)) return DC(e, t);
    if (xp(e)) return NC(e, t);
    if (Pp(e)) return Hp(e, t);
    if (Np(e)) return MC(e, t);
    if (Mp(e)) return $C(e, t);
  }
  throw Rp(e);
}
function to(e, t) {
  return t ? jC(e, t) : Gt(e);
}
function Ci() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = Wl(e);
  return to(e, n);
}
function Up(e, t) {
  var n = De(e)
      ? e
      : function () {
          return e;
        },
    r = function (s) {
      return s.error(n());
    };
  return new Ve(r);
}
function FC(e) {
  return !!e && (e instanceof Ve || (De(e.lift) && De(e.subscribe)));
}
var HC = jl(function (e) {
  return function () {
    e(this),
      (this.name = "EmptyError"),
      (this.message = "no elements in sequence");
  };
});
function Ye(e, t) {
  return new Promise(function (n, r) {
    var s = !1,
      o;
    e.subscribe({
      next: function (i) {
        (o = i), (s = !0);
      },
      error: r,
      complete: function () {
        s ? n(o) : r(new HC());
      },
    });
  });
}
function UC(e) {
  return e instanceof Date && !isNaN(e);
}
function pt(e, t) {
  return Kt(function (n, r) {
    var s = 0;
    n.subscribe(
      jn(r, function (o) {
        r.next(e.call(t, o, s++));
      })
    );
  });
}
var VC = Array.isArray;
function BC(e, t) {
  return VC(t) ? e.apply(void 0, pn([], hn(t))) : e(t);
}
function WC(e) {
  return pt(function (t) {
    return BC(e, t);
  });
}
function qC(e, t, n) {
  return (
    n === void 0 && (n = Si),
    function (r) {
      yf(t, function () {
        for (
          var s = e.length,
            o = new Array(s),
            i = s,
            a = s,
            l = function (u) {
              yf(
                t,
                function () {
                  var f = to(e[u], t),
                    h = !1;
                  f.subscribe(
                    jn(
                      r,
                      function (d) {
                        (o[u] = d),
                          h || ((h = !0), a--),
                          a || r.next(n(o.slice()));
                      },
                      function () {
                        --i || r.complete();
                      }
                    )
                  );
                },
                r
              );
            },
            c = 0;
          c < s;
          c++
        )
          l(c);
      });
    }
  );
}
function yf(e, t, n) {
  t();
}
function KC(e, t, n, r, s, o, i, a) {
  var l = [],
    c = 0,
    u = 0,
    f = !1,
    h = function () {
      f && !l.length && !c && t.complete();
    },
    d = function (m) {
      return c < r ? p(m) : l.push(m);
    },
    p = function (m) {
      c++;
      var S = !1;
      Gt(n(m, u++)).subscribe(
        jn(
          t,
          function (b) {
            t.next(b);
          },
          function () {
            S = !0;
          },
          void 0,
          function () {
            if (S)
              try {
                c--;
                for (
                  var b = function () {
                    var C = l.shift();
                    i || p(C);
                  };
                  l.length && c < r;
                )
                  b();
                h();
              } catch (C) {
                t.error(C);
              }
          }
        )
      );
    };
  return (
    e.subscribe(
      jn(t, d, function () {
        (f = !0), h();
      })
    ),
    function () {}
  );
}
function no(e, t, n) {
  return (
    n === void 0 && (n = 1 / 0),
    De(t)
      ? no(function (r, s) {
          return pt(function (o, i) {
            return t(r, o, s, i);
          })(Gt(e(r, s)));
        }, n)
      : (typeof t == "number" && (n = t),
        Kt(function (r, s) {
          return KC(r, s, e, n);
        }))
  );
}
function Vp(e) {
  return e === void 0 && (e = 1 / 0), no(Si, e);
}
function GC() {
  return Vp(1);
}
function Bp() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return GC()(to(e, Wl(e)));
}
function Wp(e) {
  return new Ve(function (t) {
    Gt(e()).subscribe(t);
  });
}
function zC(e, t, n) {
  return (
    n === void 0 && (n = EC),
    new Ve(function (r) {
      var s = UC(e) ? 1e3 - n.now() : e;
      s < 0 && (s = 0);
      var o = 0;
      return n.schedule(function () {
        r.closed || (r.next(o++), r.complete());
      }, s);
    })
  );
}
function YC() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = Wl(e),
    r = TC(e, 1 / 0),
    s = e;
  return s.length ? (s.length === 1 ? Gt(s[0]) : Vp(r)(to(s, n))) : Ap;
}
var JC = Array.isArray;
function XC(e) {
  return e.length === 1 && JC(e[0]) ? e[0] : e;
}
function qr(e, t) {
  return Kt(function (n, r) {
    var s = 0;
    n.subscribe(
      jn(r, function (o) {
        return e.call(t, o, s++) && r.next(o);
      })
    );
  });
}
function ql(e) {
  return Kt(function (t, n) {
    var r = null,
      s = !1,
      o;
    (r = t.subscribe(
      jn(n, void 0, void 0, function (i) {
        (o = Gt(e(i, ql(e)(t)))),
          r ? (r.unsubscribe(), (r = null), o.subscribe(n)) : (s = !0);
      })
    )),
      s && (r.unsubscribe(), (r = null), o.subscribe(n));
  });
}
function qp() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = CC(e);
  return n
    ? fC(qp.apply(void 0, pn([], hn(e))), WC(n))
    : Kt(function (r, s) {
        qC(pn([r], hn(XC(e))))(s);
      });
}
function QC() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return qp.apply(void 0, pn([], hn(e)));
}
function Kp(e) {
  return Kt(function (t, n) {
    try {
      t.subscribe(n);
    } finally {
      n.add(e);
    }
  });
}
function Gp(e) {
  e === void 0 && (e = {});
  var t = e.connector,
    n =
      t === void 0
        ? function () {
            return new Ul();
          }
        : t,
    r = e.resetOnError,
    s = r === void 0 ? !0 : r,
    o = e.resetOnComplete,
    i = o === void 0 ? !0 : o,
    a = e.resetOnRefCountZero,
    l = a === void 0 ? !0 : a;
  return function (c) {
    var u,
      f,
      h,
      d = 0,
      p = !1,
      m = !1,
      S = function () {
        f == null || f.unsubscribe(), (f = void 0);
      },
      b = function () {
        S(), (u = h = void 0), (p = m = !1);
      },
      C = function () {
        var y = u;
        b(), y == null || y.unsubscribe();
      };
    return Kt(function (y, g) {
      d++, !m && !p && S();
      var A = (h = h ?? n());
      g.add(function () {
        d--, d === 0 && !m && !p && (f = ea(C, l));
      }),
        A.subscribe(g),
        !u &&
          d > 0 &&
          ((u = new xs({
            next: function (L) {
              return A.next(L);
            },
            error: function (L) {
              (m = !0), S(), (f = ea(b, s, L)), A.error(L);
            },
            complete: function () {
              (p = !0), S(), (f = ea(b, i)), A.complete();
            },
          })),
          Gt(y).subscribe(u));
    })(c);
  };
}
function ea(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  if (t === !0) {
    e();
    return;
  }
  if (t !== !1) {
    var s = new xs({
      next: function () {
        s.unsubscribe(), e();
      },
    });
    return Gt(t.apply(void 0, pn([], hn(n)))).subscribe(s);
  }
}
function ZC(e, t, n) {
  var r,
    s = !1;
  return (
    (r = e),
    Gp({
      connector: function () {
        return new yC(r, t, n);
      },
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: s,
    })
  );
}
function eT(e, t, n) {
  var r = De(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r
    ? Kt(function (s, o) {
        var i;
        (i = r.subscribe) === null || i === void 0 || i.call(r);
        var a = !0;
        s.subscribe(
          jn(
            o,
            function (l) {
              var c;
              (c = r.next) === null || c === void 0 || c.call(r, l), o.next(l);
            },
            function () {
              var l;
              (a = !1),
                (l = r.complete) === null || l === void 0 || l.call(r),
                o.complete();
            },
            function (l) {
              var c;
              (a = !1),
                (c = r.error) === null || c === void 0 || c.call(r, l),
                o.error(l);
            },
            function () {
              var l, c;
              a && ((l = r.unsubscribe) === null || l === void 0 || l.call(r)),
                (c = r.finalize) === null || c === void 0 || c.call(r);
            }
          )
        );
      })
    : Si;
}
var zp = {
    0: 8203,
    1: 8204,
    2: 8205,
    3: 8290,
    4: 8291,
    5: 8288,
    6: 65279,
    7: 8289,
    8: 119155,
    9: 119156,
    a: 119157,
    b: 119158,
    c: 119159,
    d: 119160,
    e: 119161,
    f: 119162,
  },
  Kl = { 0: 8203, 1: 8204, 2: 8205, 3: 65279 },
  tT = new Array(4).fill(String.fromCodePoint(Kl[0])).join("");
function nT(e) {
  let t = JSON.stringify(e);
  return `${tT}${Array.from(t)
    .map((n) => {
      let r = n.charCodeAt(0);
      if (r > 255)
        throw new Error(
          `Only ASCII edit info can be encoded. Error attempting to encode ${t} on character ${n} (${r})`
        );
      return Array.from(r.toString(4).padStart(4, "0"))
        .map((s) => String.fromCodePoint(Kl[s]))
        .join("");
    })
    .join("")}`;
}
function rT(e) {
  return !Number.isNaN(Number(e)) ||
    (/[a-z]/i.test(e) &&
      !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(e))
    ? !1
    : !!Date.parse(e);
}
function sT(e) {
  try {
    new URL(e, e.startsWith("/") ? "https://acme.com" : void 0);
  } catch {
    return !1;
  }
  return !0;
}
function qI(e, t, n = "auto") {
  return n === !0 || (n === "auto" && (rT(e) || sT(e))) ? e : `${e}${nT(t)}`;
}
Object.fromEntries(Object.entries(Kl).map((e) => e.reverse()));
Object.fromEntries(Object.entries(zp).map((e) => e.reverse()));
var oT = `${Object.values(zp)
    .map((e) => `\\u{${e.toString(16)}}`)
    .join("")}`,
  vf = new RegExp(`[${oT}]{4,}`, "gu");
function iT(e) {
  var t;
  return {
    cleaned: e.replace(vf, ""),
    encoded: ((t = e.match(vf)) == null ? void 0 : t[0]) || "",
  };
}
function aT(e) {
  return e && JSON.parse(iT(JSON.stringify(e)).cleaned);
}
function lT(e) {
  return aT(e);
}
class cT extends Error {
  constructor(n) {
    const r = Yp(n);
    super(r.message);
    ie(this, "response");
    ie(this, "statusCode", 400);
    ie(this, "responseBody");
    ie(this, "details");
    Object.assign(this, r);
  }
}
class uT extends Error {
  constructor(n) {
    const r = Yp(n);
    super(r.message);
    ie(this, "response");
    ie(this, "statusCode", 500);
    ie(this, "responseBody");
    ie(this, "details");
    Object.assign(this, r);
  }
}
function Yp(e) {
  const t = e.body,
    n = {
      response: e,
      statusCode: e.statusCode,
      responseBody: pT(t, e),
      message: "",
      details: void 0,
    };
  if (t.error && t.message) return (n.message = `${t.error} - ${t.message}`), n;
  if (fT(t) || dT(t)) {
    const r = t.error.items || [],
      s = r
        .slice(0, 5)
        .map((i) => {
          var a;
          return (a = i.error) == null ? void 0 : a.description;
        })
        .filter(Boolean);
    let o = s.length
      ? `:
- ${s.join(`
- `)}`
      : "";
    return (
      r.length > 5 &&
        (o += `
...and ${r.length - 5} more`),
      (n.message = `${t.error.description}${o}`),
      (n.details = t.error),
      n
    );
  }
  return t.error && t.error.description
    ? ((n.message = t.error.description), (n.details = t.error), n)
    : ((n.message = t.error || t.message || hT(e)), n);
}
function fT(e) {
  return (
    zo(e) &&
    zo(e.error) &&
    e.error.type === "mutationError" &&
    typeof e.error.description == "string"
  );
}
function dT(e) {
  return (
    zo(e) &&
    zo(e.error) &&
    e.error.type === "actionError" &&
    typeof e.error.description == "string"
  );
}
function zo(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function hT(e) {
  const t = e.statusMessage ? ` ${e.statusMessage}` : "";
  return `${e.method}-request to ${e.url} resulted in HTTP ${e.statusCode}${t}`;
}
function pT(e, t) {
  return (t.headers["content-type"] || "")
    .toLowerCase()
    .indexOf("application/json") !== -1
    ? JSON.stringify(e, null, 2)
    : e;
}
class mT extends Error {
  constructor({ projectId: n }) {
    super("CorsOriginError");
    ie(this, "projectId");
    ie(this, "addOriginUrl");
    (this.name = "CorsOriginError"), (this.projectId = n);
    const r = new URL(`https://sanity.io/manage/project/${n}/api`);
    if (typeof location < "u") {
      const { origin: s } = location;
      r.searchParams.set("cors", "add"),
        r.searchParams.set("origin", s),
        (this.addOriginUrl = r),
        (this.message = `The current origin is not allowed to connect to the Live Content API. Add it here: ${r}`);
    } else
      this.message = `The current origin is not allowed to connect to the Live Content API. Change your configuration here: ${r}`;
  }
}
const gT = {
  onResponse: (e) => {
    if (e.statusCode >= 500) throw new uT(e);
    if (e.statusCode >= 400) throw new cT(e);
    return e;
  },
};
function yT() {
  const e = {};
  return {
    onResponse: (t) => {
      const n = t.headers["x-sanity-warning"],
        r = Array.isArray(n) ? n : [n];
      for (const s of r) !s || e[s] || ((e[s] = !0), console.warn(s));
      return t;
    },
  };
}
function bf(e) {
  return KS([
    $l({ shouldRetry: vT }),
    ...e,
    yT(),
    XS(),
    QS(),
    tC(),
    gT,
    eC({ implementation: Ve }),
  ]);
}
function vT(e, t, n) {
  if (n.maxRetries === 0) return !1;
  const r = n.method === "GET" || n.method === "HEAD",
    s = (n.uri || n.url).startsWith("/data/query"),
    o =
      e.response &&
      (e.response.statusCode === 429 ||
        e.response.statusCode === 502 ||
        e.response.statusCode === 503);
  return (r || s) && o ? !0 : $l.shouldRetry(e, t, n);
}
const bT = "https://www.sanity.io/help/";
function Gl(e) {
  return bT + e;
}
const _f = ["image", "file"],
  wf = ["before", "after", "replace"],
  Jp = (e) => {
    if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(e))
      throw new Error(
        "Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters"
      );
  },
  _T = (e) => {
    if (!/^[-a-z0-9]+$/i.test(e))
      throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
  },
  wT = (e) => {
    if (_f.indexOf(e) === -1)
      throw new Error(
        `Invalid asset type: ${e}. Must be one of ${_f.join(", ")}`
      );
  },
  ds = (e, t) => {
    if (t === null || typeof t != "object" || Array.isArray(t))
      throw new Error(`${e}() takes an object of properties`);
  },
  Xp = (e, t) => {
    if (
      typeof t != "string" ||
      !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(t) ||
      t.includes("..")
    )
      throw new Error(`${e}(): "${t}" is not a valid document ID`);
  },
  Yo = (e, t) => {
    if (!t._id)
      throw new Error(
        `${e}() requires that the document contains an ID ("_id" property)`
      );
    Xp(e, t._id);
  },
  ET = (e, t, n) => {
    const r = "insert(at, selector, items)";
    if (wf.indexOf(e) === -1) {
      const s = wf.map((o) => `"${o}"`).join(", ");
      throw new Error(`${r} takes an "at"-argument which is one of: ${s}`);
    }
    if (typeof t != "string")
      throw new Error(
        `${r} takes a "selector"-argument which must be a string`
      );
    if (!Array.isArray(n))
      throw new Error(`${r} takes an "items"-argument which must be an array`);
  },
  Qp = (e) => {
    if (!e.dataset)
      throw new Error("`dataset` must be provided to perform queries");
    return e.dataset || "";
  },
  Zp = (e) => {
    if (typeof e != "string" || !/^[a-z0-9._-]{1,75}$/i.test(e))
      throw new Error(
        "Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long."
      );
    return e;
  };
function ST(e) {
  let t = !1,
    n;
  return (...r) => (t || ((n = e(...r)), (t = !0)), n);
}
const Kr = (e) => ST((...t) => console.warn(e.join(" "), ...t)),
  CT = Kr([
    "Because you set `withCredentials` to true, we will override your `useCdn`",
    "setting to be false since (cookie-based) credentials are never set on the CDN",
  ]),
  TT = Kr([
    "Since you haven't set a value for `useCdn`, we will deliver content using our",
    "global, edge-cached API-CDN. If you wish to have content delivered faster, set",
    "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API.",
  ]),
  OT = Kr([
    "The Sanity client is configured with the `perspective` set to `drafts` or `previewDrafts`, which doesn't support the API-CDN.",
    "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning.",
  ]),
  AT = Kr([
    "The `previewDrafts` perspective has been renamed to  `drafts` and will be removed in a future API version",
  ]),
  IT = Kr([
    "You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",
    `See ${Gl(
      "js-client-browser-token"
    )} for more information and how to hide this warning.`,
  ]),
  xT = Kr([
    "Using the Sanity client without specifying an API version is deprecated.",
    `See ${Gl("js-client-api-version")}`,
  ]),
  kT = "apicdn.sanity.io",
  hs = {
    apiHost: "https://api.sanity.io",
    apiVersion: "1",
    useProjectHostname: !0,
    stega: { enabled: !1 },
  },
  PT = ["localhost", "127.0.0.1", "0.0.0.0"],
  RT = (e) => PT.indexOf(e) !== -1;
function LT(e) {
  if (e === "1" || e === "X") return;
  const t = new Date(e);
  if (!(/^\d{4}-\d{2}-\d{2}$/.test(e) && t instanceof Date && t.getTime() > 0))
    throw new Error(
      "Invalid API version string, expected `1` or date in format `YYYY-MM-DD`"
    );
}
const NT = /^[a-z0-9_]+$/i;
function em(e) {
  if (Array.isArray(e) && e.includes("raw"))
    throw new TypeError(
      'Invalid API perspective value: "raw". The raw-perspective can not be combined with other perspectives'
    );
  const t = (Array.isArray(e) ? e : [e]).filter(
    (n) => typeof n != "string" || !NT.test(n)
  );
  if (t.length > 0) {
    const n = t.map((r) => JSON.stringify(r));
    throw new TypeError(
      `Invalid API perspective value${t.length === 1 ? "" : "s"}: ${n.join(
        ", "
      )}, expected \`published\`, \`drafts\`, \`raw\` or a release identifier string`
    );
  }
}
const tm = (e, t) => {
  const n = {
    ...t,
    ...e,
    stega: {
      ...(typeof t.stega == "boolean"
        ? { enabled: t.stega }
        : t.stega || hs.stega),
      ...(typeof e.stega == "boolean" ? { enabled: e.stega } : e.stega || {}),
    },
  };
  n.apiVersion || xT();
  const r = { ...hs, ...n },
    s = r.useProjectHostname;
  if (typeof Promise > "u") {
    const f = Gl("js-client-promise-polyfill");
    throw new Error(
      `No native Promise-implementation found, polyfill needed - see ${f}`
    );
  }
  if (s && !r.projectId)
    throw new Error("Configuration must contain `projectId`");
  if ((typeof r.perspective < "u" && em(r.perspective), "encodeSourceMap" in r))
    throw new Error(
      "It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?"
    );
  if ("encodeSourceMapAtPath" in r)
    throw new Error(
      "It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?"
    );
  if (typeof r.stega.enabled != "boolean")
    throw new Error(
      `stega.enabled must be a boolean, received ${r.stega.enabled}`
    );
  if (r.stega.enabled && r.stega.studioUrl === void 0)
    throw new Error(
      "stega.studioUrl must be defined when stega.enabled is true"
    );
  if (
    r.stega.enabled &&
    typeof r.stega.studioUrl != "string" &&
    typeof r.stega.studioUrl != "function"
  )
    throw new Error(
      `stega.studioUrl must be a string or a function, received ${r.stega.studioUrl}`
    );
  const o = typeof window < "u" && window.location && window.location.hostname,
    i = o && RT(window.location.hostname);
  o && i && r.token && r.ignoreBrowserTokenWarning !== !0
    ? IT()
    : typeof r.useCdn > "u" && TT(),
    s && _T(r.projectId),
    r.dataset && Jp(r.dataset),
    "requestTagPrefix" in r &&
      (r.requestTagPrefix = r.requestTagPrefix
        ? Zp(r.requestTagPrefix).replace(/\.+$/, "")
        : void 0),
    (r.apiVersion = `${r.apiVersion}`.replace(/^v/, "")),
    (r.isDefaultApi = r.apiHost === hs.apiHost),
    r.useCdn === !0 && r.withCredentials && CT(),
    (r.useCdn = r.useCdn !== !1 && !r.withCredentials),
    LT(r.apiVersion);
  const a = r.apiHost.split("://", 2),
    l = a[0],
    c = a[1],
    u = r.isDefaultApi ? kT : c;
  return (
    r.useProjectHostname
      ? ((r.url = `${l}://${r.projectId}.${c}/v${r.apiVersion}`),
        (r.cdnUrl = `${l}://${r.projectId}.${u}/v${r.apiVersion}`))
      : ((r.url = `${r.apiHost}/v${r.apiVersion}`), (r.cdnUrl = r.url)),
    r
  );
};
class nm extends Error {
  constructor() {
    super(...arguments);
    ie(this, "name", "ConnectionFailedError");
  }
}
class DT extends Error {
  constructor(n, r, s = {}) {
    super(n, s);
    ie(this, "name", "DisconnectError");
    ie(this, "reason");
    this.reason = r;
  }
}
class MT extends Error {
  constructor(n, r) {
    super(n);
    ie(this, "name", "ChannelError");
    ie(this, "data");
    this.data = r;
  }
}
class $T extends Error {
  constructor(n, r, s = {}) {
    super(n, s);
    ie(this, "name", "MessageError");
    ie(this, "data");
    this.data = r;
  }
}
class Ef extends Error {
  constructor() {
    super(...arguments);
    ie(this, "name", "MessageParseError");
  }
}
const jT = ["channelError", "disconnect"];
function rm(e, t) {
  return Wp(() => {
    const n = e();
    return FC(n) ? n : Ci(n);
  }).pipe(no((n) => FT(n, t)));
}
function FT(e, t) {
  return new Ve((n) => {
    const r = t.includes("open"),
      s = t.includes("reconnect");
    function o(c) {
      if ("data" in c) {
        const [u, f] = Sf(c);
        n.error(
          u
            ? new Ef("Unable to parse EventSource error message", { cause: f })
            : new $T((f == null ? void 0 : f.data).message, f)
        );
        return;
      }
      e.readyState === e.CLOSED
        ? n.error(new nm("EventSource connection failed"))
        : s && n.next({ type: "reconnect" });
    }
    function i() {
      n.next({ type: "open" });
    }
    function a(c) {
      var h;
      const [u, f] = Sf(c);
      if (u) {
        n.error(new Ef("Unable to parse EventSource message", { cause: u }));
        return;
      }
      if (c.type === "channelError") {
        n.error(new MT(HT(f == null ? void 0 : f.data), f.data));
        return;
      }
      if (c.type === "disconnect") {
        n.error(
          new DT(
            `Server disconnected client: ${
              ((h = f.data) == null ? void 0 : h.reason) || "unknown error"
            }`
          )
        );
        return;
      }
      n.next({
        type: c.type,
        id: c.lastEventId,
        ...(f.data ? { data: f.data } : {}),
      });
    }
    e.addEventListener("error", o), r && e.addEventListener("open", i);
    const l = [...new Set([...jT, ...t])].filter(
      (c) => c !== "error" && c !== "open" && c !== "reconnect"
    );
    return (
      l.forEach((c) => e.addEventListener(c, a)),
      () => {
        e.removeEventListener("error", o),
          r && e.removeEventListener("open", i),
          l.forEach((c) => e.removeEventListener(c, a)),
          e.close();
      }
    );
  });
}
function Sf(e) {
  try {
    const t = typeof e.data == "string" && JSON.parse(e.data);
    return [
      null,
      { type: e.type, id: e.lastEventId, ...(UT(t) ? {} : { data: t }) },
    ];
  } catch (t) {
    return [t, null];
  }
}
function HT(e) {
  return e.error
    ? e.error.description
      ? e.error.description
      : typeof e.error == "string"
      ? e.error
      : JSON.stringify(e.error, null, 2)
    : e.message || "Unknown listener error";
}
function UT(e) {
  for (const t in e) return !1;
  return !0;
}
function sm(e) {
  if (typeof e == "string") return { id: e };
  if (Array.isArray(e)) return { query: "*[_id in $ids]", params: { ids: e } };
  if (
    typeof e == "object" &&
    e !== null &&
    "query" in e &&
    typeof e.query == "string"
  )
    return "params" in e && typeof e.params == "object" && e.params !== null
      ? { query: e.query, params: e.params }
      : { query: e.query };
  const t = [
    "* Document ID (<docId>)",
    "* Array of document IDs",
    "* Object containing `query`",
  ].join(`
`);
  throw new Error(`Unknown selection - must be one of:
${t}`);
}
class om {
  constructor(t, n = {}) {
    ie(this, "selection");
    ie(this, "operations");
    (this.selection = t), (this.operations = n);
  }
  set(t) {
    return this._assign("set", t);
  }
  setIfMissing(t) {
    return this._assign("setIfMissing", t);
  }
  diffMatchPatch(t) {
    return ds("diffMatchPatch", t), this._assign("diffMatchPatch", t);
  }
  unset(t) {
    if (!Array.isArray(t))
      throw new Error(
        "unset(attrs) takes an array of attributes to unset, non-array given"
      );
    return (
      (this.operations = Object.assign({}, this.operations, { unset: t })), this
    );
  }
  inc(t) {
    return this._assign("inc", t);
  }
  dec(t) {
    return this._assign("dec", t);
  }
  insert(t, n, r) {
    return ET(t, n, r), this._assign("insert", { [t]: n, items: r });
  }
  append(t, n) {
    return this.insert("after", `${t}[-1]`, n);
  }
  prepend(t, n) {
    return this.insert("before", `${t}[0]`, n);
  }
  splice(t, n, r, s) {
    const o = typeof r > "u" || r === -1,
      i = n < 0 ? n - 1 : n,
      a = o ? -1 : Math.max(0, n + r),
      l = i < 0 && a >= 0 ? "" : a,
      c = `${t}[${i}:${l}]`;
    return this.insert("replace", c, s || []);
  }
  ifRevisionId(t) {
    return (this.operations.ifRevisionID = t), this;
  }
  serialize() {
    return { ...sm(this.selection), ...this.operations };
  }
  toJSON() {
    return this.serialize();
  }
  reset() {
    return (this.operations = {}), this;
  }
  _assign(t, n, r = !0) {
    return (
      ds(t, n),
      (this.operations = Object.assign({}, this.operations, {
        [t]: Object.assign({}, (r && this.operations[t]) || {}, n),
      })),
      this
    );
  }
  _set(t, n) {
    return this._assign(t, n, !1);
  }
}
var Zn;
const rc = class rc extends om {
  constructor(n, r, s) {
    super(n, r);
    ve(this, Zn);
    me(this, Zn, s);
  }
  clone() {
    return new rc(this.selection, { ...this.operations }, B(this, Zn));
  }
  commit(n) {
    if (!B(this, Zn))
      throw new Error(
        "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
      );
    const r = typeof this.selection == "string",
      s = Object.assign({ returnFirst: r, returnDocuments: !0 }, n);
    return B(this, Zn).mutate({ patch: this.serialize() }, s);
  }
};
Zn = new WeakMap();
let ir = rc;
var er;
const sc = class sc extends om {
  constructor(n, r, s) {
    super(n, r);
    ve(this, er);
    me(this, er, s);
  }
  clone() {
    return new sc(this.selection, { ...this.operations }, B(this, er));
  }
  commit(n) {
    if (!B(this, er))
      throw new Error(
        "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
      );
    const r = typeof this.selection == "string",
      s = Object.assign({ returnFirst: r, returnDocuments: !0 }, n);
    return B(this, er).mutate({ patch: this.serialize() }, s);
  }
};
er = new WeakMap();
let Pn = sc;
const im = { returnDocuments: !1 };
class am {
  constructor(t = [], n) {
    ie(this, "operations");
    ie(this, "trxId");
    (this.operations = t), (this.trxId = n);
  }
  create(t) {
    return ds("create", t), this._add({ create: t });
  }
  createIfNotExists(t) {
    const n = "createIfNotExists";
    return ds(n, t), Yo(n, t), this._add({ [n]: t });
  }
  createOrReplace(t) {
    const n = "createOrReplace";
    return ds(n, t), Yo(n, t), this._add({ [n]: t });
  }
  delete(t) {
    return Xp("delete", t), this._add({ delete: { id: t } });
  }
  transactionId(t) {
    return t ? ((this.trxId = t), this) : this.trxId;
  }
  serialize() {
    return [...this.operations];
  }
  toJSON() {
    return this.serialize();
  }
  reset() {
    return (this.operations = []), this;
  }
  _add(t) {
    return this.operations.push(t), this;
  }
}
var en;
const oc = class oc extends am {
  constructor(n, r, s) {
    super(n, s);
    ve(this, en);
    me(this, en, r);
  }
  clone() {
    return new oc([...this.operations], B(this, en), this.trxId);
  }
  commit(n) {
    if (!B(this, en))
      throw new Error(
        "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
      );
    return B(this, en).mutate(
      this.serialize(),
      Object.assign({ transactionId: this.trxId }, im, n || {})
    );
  }
  patch(n, r) {
    const s = typeof r == "function",
      o = typeof n != "string" && n instanceof Pn,
      i = typeof n == "object" && ("query" in n || "id" in n);
    if (o) return this._add({ patch: n.serialize() });
    if (s) {
      const a = r(new Pn(n, {}, B(this, en)));
      if (!(a instanceof Pn))
        throw new Error("function passed to `patch()` must return the patch");
      return this._add({ patch: a.serialize() });
    }
    if (i) {
      const a = new Pn(n, r || {}, B(this, en));
      return this._add({ patch: a.serialize() });
    }
    return this._add({ patch: { id: n, ...r } });
  }
};
en = new WeakMap();
let Jo = oc;
var On;
const ic = class ic extends am {
  constructor(n, r, s) {
    super(n, s);
    ve(this, On);
    me(this, On, r);
  }
  clone() {
    return new ic([...this.operations], B(this, On), this.trxId);
  }
  commit(n) {
    if (!B(this, On))
      throw new Error(
        "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
      );
    return B(this, On).mutate(
      this.serialize(),
      Object.assign({ transactionId: this.trxId }, im, n || {})
    );
  }
  patch(n, r) {
    const s = typeof r == "function";
    if (typeof n != "string" && n instanceof ir)
      return this._add({ patch: n.serialize() });
    if (s) {
      const o = r(new ir(n, {}, B(this, On)));
      if (!(o instanceof ir))
        throw new Error("function passed to `patch()` must return the patch");
      return this._add({ patch: o.serialize() });
    }
    return this._add({ patch: { id: n, ...r } });
  }
};
On = new WeakMap();
let Xo = ic;
const VT = "X-Sanity-Project-ID";
function BT(e, t = {}) {
  const n = {},
    r = t.token || e.token;
  r && (n.Authorization = `Bearer ${r}`),
    !t.useGlobalApi &&
      !e.useProjectHostname &&
      e.projectId &&
      (n[VT] = e.projectId);
  const s = !!(typeof t.withCredentials > "u"
      ? e.token || e.withCredentials
      : t.withCredentials),
    o = typeof t.timeout > "u" ? e.timeout : t.timeout;
  return Object.assign({}, t, {
    headers: Object.assign({}, n, t.headers || {}),
    timeout: typeof o > "u" ? 5 * 60 * 1e3 : o,
    proxy: t.proxy || e.proxy,
    json: !0,
    withCredentials: s,
    fetch:
      typeof t.fetch == "object" && typeof e.fetch == "object"
        ? { ...e.fetch, ...t.fetch }
        : t.fetch || e.fetch,
  });
}
const lm = ({ query: e, params: t = {}, options: n = {} }) => {
    const r = new URLSearchParams(),
      { tag: s, includeMutations: o, returnQuery: i, ...a } = n;
    s && r.append("tag", s), r.append("query", e);
    for (const [l, c] of Object.entries(t))
      r.append(`$${l}`, JSON.stringify(c));
    for (const [l, c] of Object.entries(a)) c && r.append(l, `${c}`);
    return (
      i === !1 && r.append("returnQuery", "false"),
      o === !1 && r.append("includeMutations", "false"),
      `?${r}`
    );
  },
  WT = (e, t) => (e === !1 ? void 0 : typeof e > "u" ? t : e),
  qT = (e = {}) => ({
    dryRun: e.dryRun,
    returnIds: !0,
    returnDocuments: WT(e.returnDocuments, !0),
    visibility: e.visibility || "sync",
    autoGenerateArrayKeys: e.autoGenerateArrayKeys,
    skipCrossDatasetReferenceValidation: e.skipCrossDatasetReferenceValidation,
  }),
  zl = (e) => e.type === "response",
  KT = (e) => e.body,
  GT = (e, t) => e.reduce((n, r) => ((n[t(r)] = r), n), Object.create(null)),
  zT = 11264;
function cm(e, t, n, r, s = {}, o = {}) {
  const i =
      "stega" in o
        ? {
            ...(n || {}),
            ...(typeof o.stega == "boolean"
              ? { enabled: o.stega }
              : o.stega || {}),
          }
        : n,
    a = i.enabled ? lT(s) : s,
    l = o.filterResponse === !1 ? (p) => p : (p) => p.result,
    {
      cache: c,
      next: u,
      ...f
    } = {
      useAbortSignal: typeof o.signal < "u",
      resultSourceMap: i.enabled ? "withKeyArraySelector" : o.resultSourceMap,
      ...o,
      returnQuery: o.filterResponse === !1 && o.returnQuery !== !1,
    },
    h =
      typeof c < "u" || typeof u < "u"
        ? { ...f, fetch: { cache: c, next: u } }
        : f,
    d = Gr(e, t, "query", { query: r, params: a }, h);
  return i.enabled
    ? d.pipe(
        QC(
          to(
            _e(() => import("./stegaEncodeSourceMap-DHsGvI-I.js"), [])
              .then(function (p) {
                return p.stegaEncodeSourceMap$1;
              })
              .then(({ stegaEncodeSourceMap: p }) => p)
          )
        ),
        pt(([p, m]) => {
          const S = m(p.result, p.resultSourceMap, i);
          return l({ ...p, result: S });
        })
      )
    : d.pipe(pt(l));
}
function um(e, t, n, r = {}) {
  const s = { uri: dr(e, "doc", n), json: !0, tag: r.tag, signal: r.signal };
  return ro(e, t, s).pipe(
    qr(zl),
    pt((o) => o.body.documents && o.body.documents[0])
  );
}
function fm(e, t, n, r = {}) {
  const s = {
    uri: dr(e, "doc", n.join(",")),
    json: !0,
    tag: r.tag,
    signal: r.signal,
  };
  return ro(e, t, s).pipe(
    qr(zl),
    pt((o) => {
      const i = GT(o.body.documents || [], (a) => a._id);
      return n.map((a) => i[a] || null);
    })
  );
}
function dm(e, t, n, r) {
  return Yo("createIfNotExists", n), Ti(e, t, n, "createIfNotExists", r);
}
function hm(e, t, n, r) {
  return Yo("createOrReplace", n), Ti(e, t, n, "createOrReplace", r);
}
function pm(e, t, n, r) {
  return Gr(e, t, "mutate", { mutations: [{ delete: sm(n) }] }, r);
}
function mm(e, t, n, r) {
  let s;
  n instanceof Pn || n instanceof ir
    ? (s = { patch: n.serialize() })
    : n instanceof Jo || n instanceof Xo
    ? (s = n.serialize())
    : (s = n);
  const o = Array.isArray(s) ? s : [s],
    i = (r && r.transactionId) || void 0;
  return Gr(e, t, "mutate", { mutations: o, transactionId: i }, r);
}
function gm(e, t, n, r) {
  const s = Array.isArray(n) ? n : [n],
    o = (r && r.transactionId) || void 0,
    i = (r && r.skipCrossDatasetReferenceValidation) || void 0,
    a = (r && r.dryRun) || void 0;
  return Gr(
    e,
    t,
    "actions",
    {
      actions: s,
      transactionId: o,
      skipCrossDatasetReferenceValidation: i,
      dryRun: a,
    },
    r
  );
}
function Gr(e, t, n, r, s = {}) {
  const o = n === "mutate",
    i = n === "actions",
    a = n === "query",
    l = o || i ? "" : lm(r),
    c = !o && !i && l.length < zT,
    u = c ? l : "",
    f = s.returnFirst,
    {
      timeout: h,
      token: d,
      tag: p,
      headers: m,
      returnQuery: S,
      lastLiveEventId: b,
      cacheMode: C,
    } = s,
    y = dr(e, n, u),
    g = {
      method: c ? "GET" : "POST",
      uri: y,
      json: !0,
      body: c ? void 0 : r,
      query: o && qT(s),
      timeout: h,
      headers: m,
      token: d,
      tag: p,
      returnQuery: S,
      perspective: s.perspective,
      resultSourceMap: s.resultSourceMap,
      lastLiveEventId: Array.isArray(b) ? b[0] : b,
      cacheMode: C,
      canUseCdn: a,
      signal: s.signal,
      fetch: s.fetch,
      useAbortSignal: s.useAbortSignal,
      useCdn: s.useCdn,
    };
  return ro(e, t, g).pipe(
    qr(zl),
    pt(KT),
    pt((A) => {
      if (!o) return A;
      const L = A.results || [];
      if (s.returnDocuments)
        return f ? L[0] && L[0].document : L.map((N) => N.document);
      const P = f ? "documentId" : "documentIds",
        V = f ? L[0] && L[0].id : L.map((N) => N.id);
      return { transactionId: A.transactionId, results: L, [P]: V };
    })
  );
}
function Ti(e, t, n, r, s = {}) {
  const o = { [r]: n },
    i = Object.assign({ returnFirst: !0, returnDocuments: !0 }, s);
  return Gr(e, t, "mutate", { mutations: [o] }, i);
}
function ro(e, t, n) {
  const r = n.url || n.uri,
    s = e.config(),
    o =
      typeof n.canUseCdn > "u"
        ? ["GET", "HEAD"].indexOf(n.method || "GET") >= 0 &&
          r.indexOf("/data/") === 0
        : n.canUseCdn;
  let i = (n.useCdn ?? s.useCdn) && o;
  const a =
    n.tag && s.requestTagPrefix
      ? [s.requestTagPrefix, n.tag].join(".")
      : n.tag || s.requestTagPrefix;
  if (
    (a && n.tag !== null && (n.query = { tag: Zp(a), ...n.query }),
    ["GET", "HEAD", "POST"].indexOf(n.method || "GET") >= 0 &&
      r.indexOf("/data/query/") === 0)
  ) {
    const u = n.resultSourceMap ?? s.resultSourceMap;
    u !== void 0 && u !== !1 && (n.query = { resultSourceMap: u, ...n.query });
    const f = n.perspective || s.perspective;
    typeof f < "u" &&
      (f === "previewDrafts" && AT(),
      em(f),
      (n.query = {
        perspective: Array.isArray(f) ? f.join(",") : f,
        ...n.query,
      }),
      ((Array.isArray(f) && f.length > 0) ||
        f === "previewDrafts" ||
        f === "drafts") &&
        i &&
        ((i = !1), OT())),
      n.lastLiveEventId &&
        (n.query = { ...n.query, lastLiveEventId: n.lastLiveEventId }),
      n.returnQuery === !1 && (n.query = { returnQuery: "false", ...n.query }),
      i &&
        n.cacheMode == "noStale" &&
        (n.query = { cacheMode: "noStale", ...n.query });
  }
  const l = BT(s, Object.assign({}, n, { url: Yl(e, r, i) })),
    c = new Ve((u) => t(l, s.requester).subscribe(u));
  return n.signal ? c.pipe(YT(n.signal)) : c;
}
function $t(e, t, n) {
  return ro(e, t, n).pipe(
    qr((r) => r.type === "response"),
    pt((r) => r.body)
  );
}
function dr(e, t, n) {
  const r = e.config(),
    s = Qp(r),
    o = `/${t}/${s}`;
  return `/data${n ? `${o}/${n}` : o}`.replace(/\/($|\?)/, "$1");
}
function Yl(e, t, n = !1) {
  const { url: r, cdnUrl: s } = e.config();
  return `${n ? s : r}/${t.replace(/^\//, "")}`;
}
function YT(e) {
  return (t) =>
    new Ve((n) => {
      const r = () => n.error(XT(e));
      if (e && e.aborted) {
        r();
        return;
      }
      const s = t.subscribe(n);
      return (
        e.addEventListener("abort", r),
        () => {
          e.removeEventListener("abort", r), s.unsubscribe();
        }
      );
    });
}
const JT = !!globalThis.DOMException;
function XT(e) {
  if (JT)
    return new DOMException(
      (e == null ? void 0 : e.reason) ?? "The operation was aborted.",
      "AbortError"
    );
  const t = new Error(
    (e == null ? void 0 : e.reason) ?? "The operation was aborted."
  );
  return (t.name = "AbortError"), t;
}
var $s, js;
class QT {
  constructor(t, n) {
    ve(this, $s);
    ve(this, js);
    me(this, $s, t), me(this, js, n);
  }
  upload(t, n, r) {
    return ym(B(this, $s), B(this, js), t, n, r);
  }
}
($s = new WeakMap()), (js = new WeakMap());
var Fs, Hs;
class ZT {
  constructor(t, n) {
    ve(this, Fs);
    ve(this, Hs);
    me(this, Fs, t), me(this, Hs, n);
  }
  upload(t, n, r) {
    const s = ym(B(this, Fs), B(this, Hs), t, n, r);
    return Ye(
      s.pipe(
        qr((o) => o.type === "response"),
        pt((o) => o.body.document)
      )
    );
  }
}
(Fs = new WeakMap()), (Hs = new WeakMap());
function ym(e, t, n, r, s = {}) {
  wT(n);
  let o = s.extract || void 0;
  o && !o.length && (o = ["none"]);
  const i = Qp(e.config()),
    a = n === "image" ? "images" : "files",
    l = e1(s, r),
    {
      tag: c,
      label: u,
      title: f,
      description: h,
      creditLine: d,
      filename: p,
      source: m,
    } = l,
    S = {
      label: u,
      title: f,
      description: h,
      filename: p,
      meta: o,
      creditLine: d,
    };
  return (
    m && ((S.sourceId = m.id), (S.sourceName = m.name), (S.sourceUrl = m.url)),
    ro(e, t, {
      tag: c,
      method: "POST",
      timeout: l.timeout || 0,
      uri: `/assets/${a}/${i}`,
      headers: l.contentType ? { "Content-Type": l.contentType } : {},
      query: S,
      body: r,
    })
  );
}
function e1(e, t) {
  return typeof File > "u" || !(t instanceof File)
    ? e
    : Object.assign(
        {
          filename: e.preserveFilename === !1 ? void 0 : t.name,
          contentType: t.type,
        },
        e
      );
}
var t1 = (e, t) =>
  Object.keys(t)
    .concat(Object.keys(e))
    .reduce((n, r) => ((n[r] = typeof e[r] > "u" ? t[r] : e[r]), n), {});
const n1 = (e, t) =>
    t.reduce((n, r) => (typeof e[r] > "u" || (n[r] = e[r]), n), {}),
  vm = Wp(() =>
    _e(() => import("./browser-BelpG_93.js").then((e) => e.b), [])
  ).pipe(
    pt(({ default: e }) => e),
    ZC(1)
  );
function bm() {
  return function (e) {
    return e.pipe(
      ql((t, n) =>
        t instanceof nm
          ? Bp(Ci({ type: "reconnect" }), zC(1e3).pipe(no(() => n)))
          : Up(() => t)
      )
    );
  };
}
const r1 = 14800,
  s1 = [
    "includePreviousRevision",
    "includeResult",
    "includeMutations",
    "includeAllVersions",
    "visibility",
    "effectFormat",
    "tag",
  ],
  o1 = { includeResult: !0 };
function _m(e, t, n = {}) {
  const {
      url: r,
      token: s,
      withCredentials: o,
      requestTagPrefix: i,
    } = this.config(),
    a = n.tag && i ? [i, n.tag].join(".") : n.tag,
    l = { ...t1(n, o1), tag: a },
    c = n1(l, s1),
    u = lm({ query: e, params: t, options: { tag: a, ...c } }),
    f = `${r}${dr(this, "listen", u)}`;
  if (f.length > r1) return Up(() => new Error("Query too large for listener"));
  const h = l.events ? l.events : ["mutation"],
    d = {};
  return (
    (s || o) && (d.withCredentials = !0),
    s && (d.headers = { Authorization: `Bearer ${s}` }),
    rm(
      () =>
        (typeof EventSource > "u" || d.headers ? vm : Ci(EventSource)).pipe(
          pt((p) => new p(f, d))
        ),
      h
    ).pipe(
      bm(),
      qr((p) => h.includes(p.type)),
      pt((p) => ({ type: p.type, ...("data" in p ? p.data : {}) }))
    )
  );
}
function i1(e, t) {
  return a1(typeof e == "function" ? { predicate: e, ...t } : e);
}
function a1(e) {
  return (t) => {
    let n,
      r = !1;
    const { predicate: s, ...o } = e,
      i = t.pipe(
        eT((l) => {
          e.predicate(l) && ((r = !0), (n = l));
        }),
        Kp(() => {
          (r = !1), (n = void 0);
        }),
        Gp(o)
      ),
      a = new Ve((l) => {
        r && l.next(n), l.complete();
      });
    return YC(i, a);
  };
}
const Cf = "2021-03-25";
var tr;
class wm {
  constructor(t) {
    ve(this, tr);
    me(this, tr, t);
  }
  events({ includeDrafts: t = !1, tag: n } = {}) {
    const {
        projectId: r,
        apiVersion: s,
        token: o,
        withCredentials: i,
        requestTagPrefix: a,
      } = B(this, tr).config(),
      l = s.replace(/^v/, "");
    if (l !== "X" && l < Cf)
      throw new Error(
        `The live events API requires API version ${Cf} or later. The current API version is ${l}. Please update your API version to use this feature.`
      );
    if (t && !o && !i)
      throw new Error(
        "The live events API requires a token or withCredentials when 'includeDrafts: true'. Please update your client configuration. The token should have the lowest possible access role."
      );
    const c = dr(B(this, tr), "live/events"),
      u = new URL(B(this, tr).getUrl(c, !1)),
      f = n && a ? [a, n].join(".") : n;
    f && u.searchParams.set("tag", f),
      t && u.searchParams.set("includeDrafts", "true");
    const h = {};
    t && o && (h.headers = { Authorization: `Bearer ${o}` }),
      t && i && (h.withCredentials = !0);
    const d = `${u.href}::${JSON.stringify(h)}`,
      p = ta.get(d);
    if (p) return p;
    const m = rm(
        () =>
          (typeof EventSource > "u" || h.headers ? vm : Ci(EventSource)).pipe(
            pt((C) => new C(u.href, h))
          ),
        ["message", "restart", "welcome", "reconnect"]
      ).pipe(
        bm(),
        pt((C) => {
          if (C.type === "message") {
            const { data: y, ...g } = C;
            return { ...g, tags: y.tags };
          }
          return C;
        })
      ),
      S = l1(u, {
        method: "OPTIONS",
        mode: "cors",
        credentials: h.withCredentials ? "include" : "omit",
        headers: h.headers,
      }).pipe(
        no(() => Ap),
        ql(() => {
          throw new mT({ projectId: r });
        })
      ),
      b = Bp(S, m).pipe(
        Kp(() => ta.delete(d)),
        i1({ predicate: (C) => C.type === "welcome" })
      );
    return ta.set(d, b), b;
  }
}
tr = new WeakMap();
function l1(e, t) {
  return new Ve((n) => {
    const r = new AbortController(),
      s = r.signal;
    return (
      fetch(e, { ...t, signal: r.signal }).then(
        (o) => {
          n.next(o), n.complete();
        },
        (o) => {
          s.aborted || n.error(o);
        }
      ),
      () => r.abort()
    );
  });
}
const ta = new Map();
var An, In;
class c1 {
  constructor(t, n) {
    ve(this, An);
    ve(this, In);
    me(this, An, t), me(this, In, n);
  }
  create(t, n) {
    return kr(B(this, An), B(this, In), "PUT", t, n);
  }
  edit(t, n) {
    return kr(B(this, An), B(this, In), "PATCH", t, n);
  }
  delete(t) {
    return kr(B(this, An), B(this, In), "DELETE", t);
  }
  list() {
    return $t(B(this, An), B(this, In), { uri: "/datasets", tag: null });
  }
}
(An = new WeakMap()), (In = new WeakMap());
var xn, kn;
class u1 {
  constructor(t, n) {
    ve(this, xn);
    ve(this, kn);
    me(this, xn, t), me(this, kn, n);
  }
  create(t, n) {
    return Ye(kr(B(this, xn), B(this, kn), "PUT", t, n));
  }
  edit(t, n) {
    return Ye(kr(B(this, xn), B(this, kn), "PATCH", t, n));
  }
  delete(t) {
    return Ye(kr(B(this, xn), B(this, kn), "DELETE", t));
  }
  list() {
    return Ye($t(B(this, xn), B(this, kn), { uri: "/datasets", tag: null }));
  }
}
(xn = new WeakMap()), (kn = new WeakMap());
function kr(e, t, n, r, s) {
  return (
    Jp(r), $t(e, t, { method: n, uri: `/datasets/${r}`, body: s, tag: null })
  );
}
var Rr, Lr;
class f1 {
  constructor(t, n) {
    ve(this, Rr);
    ve(this, Lr);
    me(this, Rr, t), me(this, Lr, n);
  }
  list(t) {
    const n =
      (t == null ? void 0 : t.includeMembers) === !1
        ? "/projects?includeMembers=false"
        : "/projects";
    return $t(B(this, Rr), B(this, Lr), { uri: n });
  }
  getById(t) {
    return $t(B(this, Rr), B(this, Lr), { uri: `/projects/${t}` });
  }
}
(Rr = new WeakMap()), (Lr = new WeakMap());
var Nr, Dr;
class d1 {
  constructor(t, n) {
    ve(this, Nr);
    ve(this, Dr);
    me(this, Nr, t), me(this, Dr, n);
  }
  list(t) {
    const n =
      (t == null ? void 0 : t.includeMembers) === !1
        ? "/projects?includeMembers=false"
        : "/projects";
    return Ye($t(B(this, Nr), B(this, Dr), { uri: n }));
  }
  getById(t) {
    return Ye($t(B(this, Nr), B(this, Dr), { uri: `/projects/${t}` }));
  }
}
(Nr = new WeakMap()), (Dr = new WeakMap());
var Us, Vs;
class h1 {
  constructor(t, n) {
    ve(this, Us);
    ve(this, Vs);
    me(this, Us, t), me(this, Vs, n);
  }
  getById(t) {
    return $t(B(this, Us), B(this, Vs), { uri: `/users/${t}` });
  }
}
(Us = new WeakMap()), (Vs = new WeakMap());
var Bs, Ws;
class p1 {
  constructor(t, n) {
    ve(this, Bs);
    ve(this, Ws);
    me(this, Bs, t), me(this, Ws, n);
  }
  getById(t) {
    return Ye($t(B(this, Bs), B(this, Ws), { uri: `/users/${t}` }));
  }
}
(Bs = new WeakMap()), (Ws = new WeakMap());
var tn, Ke;
const ti = class ti {
  constructor(t, n = hs) {
    ie(this, "assets");
    ie(this, "datasets");
    ie(this, "live");
    ie(this, "projects");
    ie(this, "users");
    ve(this, tn);
    ve(this, Ke);
    ie(this, "listen", _m);
    this.config(n),
      me(this, Ke, t),
      (this.assets = new QT(this, B(this, Ke))),
      (this.datasets = new c1(this, B(this, Ke))),
      (this.live = new wm(this)),
      (this.projects = new f1(this, B(this, Ke))),
      (this.users = new h1(this, B(this, Ke)));
  }
  clone() {
    return new ti(B(this, Ke), this.config());
  }
  config(t) {
    if (t === void 0) return { ...B(this, tn) };
    if (B(this, tn) && B(this, tn).allowReconfigure === !1)
      throw new Error(
        "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
      );
    return me(this, tn, tm(t, B(this, tn) || {})), this;
  }
  withConfig(t) {
    const n = this.config();
    return new ti(B(this, Ke), {
      ...n,
      ...t,
      stega: {
        ...(n.stega || {}),
        ...(typeof (t == null ? void 0 : t.stega) == "boolean"
          ? { enabled: t.stega }
          : (t == null ? void 0 : t.stega) || {}),
      },
    });
  }
  fetch(t, n, r) {
    return cm(this, B(this, Ke), B(this, tn).stega, t, n, r);
  }
  getDocument(t, n) {
    return um(this, B(this, Ke), t, n);
  }
  getDocuments(t, n) {
    return fm(this, B(this, Ke), t, n);
  }
  create(t, n) {
    return Ti(this, B(this, Ke), t, "create", n);
  }
  createIfNotExists(t, n) {
    return dm(this, B(this, Ke), t, n);
  }
  createOrReplace(t, n) {
    return hm(this, B(this, Ke), t, n);
  }
  delete(t, n) {
    return pm(this, B(this, Ke), t, n);
  }
  mutate(t, n) {
    return mm(this, B(this, Ke), t, n);
  }
  patch(t, n) {
    return new ir(t, n, this);
  }
  transaction(t) {
    return new Xo(t, this);
  }
  action(t, n) {
    return gm(this, B(this, Ke), t, n);
  }
  request(t) {
    return $t(this, B(this, Ke), t);
  }
  getUrl(t, n) {
    return Yl(this, t, n);
  }
  getDataUrl(t, n) {
    return dr(this, t, n);
  }
};
(tn = new WeakMap()), (Ke = new WeakMap());
let Ba = ti;
var nn, We;
const ni = class ni {
  constructor(t, n = hs) {
    ie(this, "assets");
    ie(this, "datasets");
    ie(this, "live");
    ie(this, "projects");
    ie(this, "users");
    ie(this, "observable");
    ve(this, nn);
    ve(this, We);
    ie(this, "listen", _m);
    this.config(n),
      me(this, We, t),
      (this.assets = new ZT(this, B(this, We))),
      (this.datasets = new u1(this, B(this, We))),
      (this.live = new wm(this)),
      (this.projects = new d1(this, B(this, We))),
      (this.users = new p1(this, B(this, We))),
      (this.observable = new Ba(t, n));
  }
  clone() {
    return new ni(B(this, We), this.config());
  }
  config(t) {
    if (t === void 0) return { ...B(this, nn) };
    if (B(this, nn) && B(this, nn).allowReconfigure === !1)
      throw new Error(
        "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
      );
    return (
      this.observable && this.observable.config(t),
      me(this, nn, tm(t, B(this, nn) || {})),
      this
    );
  }
  withConfig(t) {
    const n = this.config();
    return new ni(B(this, We), {
      ...n,
      ...t,
      stega: {
        ...(n.stega || {}),
        ...(typeof (t == null ? void 0 : t.stega) == "boolean"
          ? { enabled: t.stega }
          : (t == null ? void 0 : t.stega) || {}),
      },
    });
  }
  fetch(t, n, r) {
    return Ye(cm(this, B(this, We), B(this, nn).stega, t, n, r));
  }
  getDocument(t, n) {
    return Ye(um(this, B(this, We), t, n));
  }
  getDocuments(t, n) {
    return Ye(fm(this, B(this, We), t, n));
  }
  create(t, n) {
    return Ye(Ti(this, B(this, We), t, "create", n));
  }
  createIfNotExists(t, n) {
    return Ye(dm(this, B(this, We), t, n));
  }
  createOrReplace(t, n) {
    return Ye(hm(this, B(this, We), t, n));
  }
  delete(t, n) {
    return Ye(pm(this, B(this, We), t, n));
  }
  mutate(t, n) {
    return Ye(mm(this, B(this, We), t, n));
  }
  patch(t, n) {
    return new Pn(t, n, this);
  }
  transaction(t) {
    return new Jo(t, this);
  }
  action(t, n) {
    return Ye(gm(this, B(this, We), t, n));
  }
  request(t) {
    return Ye($t(this, B(this, We), t));
  }
  dataRequest(t, n, r) {
    return Ye(Gr(this, B(this, We), t, n, r));
  }
  getUrl(t, n) {
    return Yl(this, t, n);
  }
  getDataUrl(t, n) {
    return dr(this, t, n);
  }
};
(nn = new WeakMap()), (We = new WeakMap());
let Wa = ni;
function m1(e, t) {
  return {
    requester: bf(e),
    createClient: (n) => {
      const r = bf(e);
      return new t(
        (s, o) =>
          (o || r)({
            maxRedirects: 0,
            maxRetries: n.maxRetries,
            retryDelay: n.retryDelay,
            ...s,
          }),
        n
      );
    },
  };
}
var g1 = [];
const y1 = m1(g1, Wa),
  Jl = y1.createClient;
var Em = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(Hh, function () {
    function n() {
      return (
        (n =
          Object.assign ||
          function (E) {
            for (var x = 1; x < arguments.length; x++) {
              var O = arguments[x];
              for (var R in O)
                Object.prototype.hasOwnProperty.call(O, R) && (E[R] = O[R]);
            }
            return E;
          }),
        n.apply(this, arguments)
      );
    }
    function r(E, x) {
      if (E) {
        if (typeof E == "string") return s(E, x);
        var O = Object.prototype.toString.call(E).slice(8, -1);
        if (
          (O === "Object" && E.constructor && (O = E.constructor.name),
          O === "Map" || O === "Set")
        )
          return Array.from(E);
        if (
          O === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)
        )
          return s(E, x);
      }
    }
    function s(E, x) {
      (x == null || x > E.length) && (x = E.length);
      for (var O = 0, R = new Array(x); O < x; O++) R[O] = E[O];
      return R;
    }
    function o(E) {
      var x = 0;
      if (typeof Symbol > "u" || E[Symbol.iterator] == null) {
        if (Array.isArray(E) || (E = r(E)))
          return function () {
            return x >= E.length ? { done: !0 } : { done: !1, value: E[x++] };
          };
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      return (x = E[Symbol.iterator]()), x.next.bind(x);
    }
    var i = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
    function a(E) {
      var x = E.split("-"),
        O = x[1],
        R = x[2],
        Z = x[3];
      if (!O || !R || !Z)
        throw new Error(
          "Malformed asset _ref '" + E + `'. Expected an id like "` + i + '".'
        );
      var G = R.split("x"),
        q = G[0],
        ee = G[1],
        X = +q,
        le = +ee,
        Re = isFinite(X) && isFinite(le);
      if (!Re)
        throw new Error(
          "Malformed asset _ref '" + E + `'. Expected an id like "` + i + '".'
        );
      return { id: O, width: X, height: le, format: Z };
    }
    var l = function (x) {
        var O = x;
        return O ? typeof O._ref == "string" : !1;
      },
      c = function (x) {
        var O = x;
        return O ? typeof O._id == "string" : !1;
      },
      u = function (x) {
        var O = x;
        return O && O.asset ? typeof O.asset.url == "string" : !1;
      };
    function f(E) {
      if (!E) return null;
      var x;
      if (typeof E == "string" && h(E)) x = { asset: { _ref: d(E) } };
      else if (typeof E == "string") x = { asset: { _ref: E } };
      else if (l(E)) x = { asset: E };
      else if (c(E)) x = { asset: { _ref: E._id || "" } };
      else if (u(E)) x = { asset: { _ref: d(E.asset.url) } };
      else if (typeof E.asset == "object") x = E;
      else return null;
      var O = E;
      return (
        O.crop && (x.crop = O.crop), O.hotspot && (x.hotspot = O.hotspot), p(x)
      );
    }
    function h(E) {
      return /^https?:\/\//.test("" + E);
    }
    function d(E) {
      var x = E.split("/").slice(-1);
      return ("image-" + x[0]).replace(/\.([a-z]+)$/, "-$1");
    }
    function p(E) {
      if (E.crop && E.hotspot) return E;
      var x = n({}, E);
      return (
        x.crop || (x.crop = { left: 0, top: 0, bottom: 0, right: 0 }),
        x.hotspot || (x.hotspot = { x: 0.5, y: 0.5, height: 1, width: 1 }),
        x
      );
    }
    var m = [
      ["width", "w"],
      ["height", "h"],
      ["format", "fm"],
      ["download", "dl"],
      ["blur", "blur"],
      ["sharpen", "sharp"],
      ["invert", "invert"],
      ["orientation", "or"],
      ["minHeight", "min-h"],
      ["maxHeight", "max-h"],
      ["minWidth", "min-w"],
      ["maxWidth", "max-w"],
      ["quality", "q"],
      ["fit", "fit"],
      ["crop", "crop"],
      ["saturation", "sat"],
      ["auto", "auto"],
      ["dpr", "dpr"],
      ["pad", "pad"],
    ];
    function S(E) {
      var x = n({}, E || {}),
        O = x.source;
      delete x.source;
      var R = f(O);
      if (!R) return null;
      var Z = R.asset._ref || R.asset._id || "",
        G = a(Z),
        q = Math.round(R.crop.left * G.width),
        ee = Math.round(R.crop.top * G.height),
        X = {
          left: q,
          top: ee,
          width: Math.round(G.width - R.crop.right * G.width - q),
          height: Math.round(G.height - R.crop.bottom * G.height - ee),
        },
        le = (R.hotspot.height * G.height) / 2,
        Re = (R.hotspot.width * G.width) / 2,
        $e = R.hotspot.x * G.width,
        xe = R.hotspot.y * G.height,
        Be = { left: $e - Re, top: xe - le, right: $e + Re, bottom: xe + le };
      return (
        x.rect ||
          x.focalPoint ||
          x.ignoreImageParams ||
          x.crop ||
          (x = n(n({}, x), C({ crop: X, hotspot: Be }, x))),
        b(n(n({}, x), {}, { asset: G }))
      );
    }
    function b(E) {
      var x = E.baseUrl || "https://cdn.sanity.io",
        O =
          E.asset.id +
          "-" +
          E.asset.width +
          "x" +
          E.asset.height +
          "." +
          E.asset.format,
        R = x + "/images/" + E.projectId + "/" + E.dataset + "/" + O,
        Z = [];
      if (E.rect) {
        var G = E.rect,
          q = G.left,
          ee = G.top,
          X = G.width,
          le = G.height,
          Re =
            q !== 0 || ee !== 0 || le !== E.asset.height || X !== E.asset.width;
        Re && Z.push("rect=" + q + "," + ee + "," + X + "," + le);
      }
      E.bg && Z.push("bg=" + E.bg),
        E.focalPoint &&
          (Z.push("fp-x=" + E.focalPoint.x), Z.push("fp-y=" + E.focalPoint.y));
      var $e = [E.flipHorizontal && "h", E.flipVertical && "v"]
        .filter(Boolean)
        .join("");
      return (
        $e && Z.push("flip=" + $e),
        m.forEach(function (xe) {
          var Be = xe[0],
            Qe = xe[1];
          typeof E[Be] < "u"
            ? Z.push(Qe + "=" + encodeURIComponent(E[Be]))
            : typeof E[Qe] < "u" &&
              Z.push(Qe + "=" + encodeURIComponent(E[Qe]));
        }),
        Z.length === 0 ? R : R + "?" + Z.join("&")
      );
    }
    function C(E, x) {
      var O,
        R = x.width,
        Z = x.height;
      if (!(R && Z)) return { width: R, height: Z, rect: E.crop };
      var G = E.crop,
        q = E.hotspot,
        ee = R / Z,
        X = G.width / G.height;
      if (X > ee) {
        var le = G.height,
          Re = le * ee,
          $e = G.top,
          xe = (q.right - q.left) / 2 + q.left,
          Be = xe - Re / 2;
        Be < G.left
          ? (Be = G.left)
          : Be + Re > G.left + G.width && (Be = G.left + G.width - Re),
          (O = {
            left: Math.round(Be),
            top: Math.round($e),
            width: Math.round(Re),
            height: Math.round(le),
          });
      } else {
        var Qe = G.width,
          wt = Qe / ee,
          Ze = G.left,
          H = (q.bottom - q.top) / 2 + q.top,
          z = H - wt / 2;
        z < G.top
          ? (z = G.top)
          : z + wt > G.top + G.height && (z = G.top + G.height - wt),
          (O = {
            left: Math.max(0, Math.floor(Ze)),
            top: Math.max(0, Math.floor(z)),
            width: Math.round(Qe),
            height: Math.round(wt),
          });
      }
      return { width: R, height: Z, rect: O };
    }
    var y = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
      g = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
      A = ["format"];
    function L(E) {
      return E ? typeof E.clientConfig == "object" : !1;
    }
    function P(E) {
      for (var x = m, O = o(x), R; !(R = O()).done; ) {
        var Z = R.value,
          G = Z[0],
          q = Z[1];
        if (E === G || E === q) return G;
      }
      return E;
    }
    function V(E) {
      var x = E;
      if (L(x)) {
        var O = x.clientConfig,
          R = O.apiHost,
          Z = O.projectId,
          G = O.dataset,
          q = R || "https://api.sanity.io";
        return new N(null, {
          baseUrl: q.replace(/^https:\/\/api\./, "https://cdn."),
          projectId: Z,
          dataset: G,
        });
      }
      return new N(null, E);
    }
    var N = (function () {
      function E(O, R) {
        this.options = O ? n(n({}, O.options || {}), R || {}) : n({}, R || {});
      }
      var x = E.prototype;
      return (
        (x.withOptions = function (R) {
          var Z = R.baseUrl || this.options.baseUrl,
            G = { baseUrl: Z };
          for (var q in R)
            if (R.hasOwnProperty(q)) {
              var ee = P(q);
              G[ee] = R[q];
            }
          return new E(this, n({ baseUrl: Z }, G));
        }),
        (x.image = function (R) {
          return this.withOptions({ source: R });
        }),
        (x.dataset = function (R) {
          return this.withOptions({ dataset: R });
        }),
        (x.projectId = function (R) {
          return this.withOptions({ projectId: R });
        }),
        (x.bg = function (R) {
          return this.withOptions({ bg: R });
        }),
        (x.dpr = function (R) {
          return this.withOptions({ dpr: R });
        }),
        (x.width = function (R) {
          return this.withOptions({ width: R });
        }),
        (x.height = function (R) {
          return this.withOptions({ height: R });
        }),
        (x.focalPoint = function (R, Z) {
          return this.withOptions({ focalPoint: { x: R, y: Z } });
        }),
        (x.maxWidth = function (R) {
          return this.withOptions({ maxWidth: R });
        }),
        (x.minWidth = function (R) {
          return this.withOptions({ minWidth: R });
        }),
        (x.maxHeight = function (R) {
          return this.withOptions({ maxHeight: R });
        }),
        (x.minHeight = function (R) {
          return this.withOptions({ minHeight: R });
        }),
        (x.size = function (R, Z) {
          return this.withOptions({ width: R, height: Z });
        }),
        (x.blur = function (R) {
          return this.withOptions({ blur: R });
        }),
        (x.sharpen = function (R) {
          return this.withOptions({ sharpen: R });
        }),
        (x.rect = function (R, Z, G, q) {
          return this.withOptions({
            rect: { left: R, top: Z, width: G, height: q },
          });
        }),
        (x.format = function (R) {
          return this.withOptions({ format: R });
        }),
        (x.invert = function (R) {
          return this.withOptions({ invert: R });
        }),
        (x.orientation = function (R) {
          return this.withOptions({ orientation: R });
        }),
        (x.quality = function (R) {
          return this.withOptions({ quality: R });
        }),
        (x.forceDownload = function (R) {
          return this.withOptions({ download: R });
        }),
        (x.flipHorizontal = function () {
          return this.withOptions({ flipHorizontal: !0 });
        }),
        (x.flipVertical = function () {
          return this.withOptions({ flipVertical: !0 });
        }),
        (x.ignoreImageParams = function () {
          return this.withOptions({ ignoreImageParams: !0 });
        }),
        (x.fit = function (R) {
          if (y.indexOf(R) === -1)
            throw new Error('Invalid fit mode "' + R + '"');
          return this.withOptions({ fit: R });
        }),
        (x.crop = function (R) {
          if (g.indexOf(R) === -1)
            throw new Error('Invalid crop mode "' + R + '"');
          return this.withOptions({ crop: R });
        }),
        (x.saturation = function (R) {
          return this.withOptions({ saturation: R });
        }),
        (x.auto = function (R) {
          if (A.indexOf(R) === -1)
            throw new Error('Invalid auto mode "' + R + '"');
          return this.withOptions({ auto: R });
        }),
        (x.pad = function (R) {
          return this.withOptions({ pad: R });
        }),
        (x.url = function () {
          return S(this.options);
        }),
        (x.toString = function () {
          return this.url();
        }),
        E
      );
    })();
    return V;
  });
})(Em);
var v1 = Em.exports;
const Sm = Uh(v1),
  b1 = "c3mbhp0h",
  _1 = "production",
  w1 = { projectId: b1, dataset: _1, useCdn: !0, apiVersion: "2022-01-12" },
  E1 = Jl(w1),
  vo = re({});
function Cm() {
  async function e(t, n = {}, r, s = !1) {
    if (!r) throw new Error("You must provide a cacheKey");
    if (!s && vo.value[r]) return vo.value[r];
    const o = await E1.fetch(t, n);
    return (vo.value[r] = o), o;
  }
  return { cache: vo, fetch: e };
}
const S1 = {
    projectId: "c3mbhp0h",
    dataset: "production",
    useCdn: !0,
    apiVersion: "2022-01-12",
  },
  C1 = Jl(S1),
  T1 = Sm(C1.config());
function Xl(e) {
  return T1.image(e);
}
const { fetch: Oi } = Cm();
async function KI() {
  try {
    return (
      await Oi(
        `*[_type == "blogPost"]{
      title,
      date,
      content,
      image, 
      slug
    }| order(date desc)`,
        {},
        "blogs",
        !0
      )
    ).map((r) => ({ ...r, image: Xl(r.image) }));
  } catch (e) {
    return console.error(e), [];
  }
}
async function GI(e, t = !1) {
  try {
    const n = `*[_type == "blogPost" && slug.current == "${e}"] {
      title,
      date,
      content,
      image, 
      slug
    }[0]`,
      r = await Oi(n, {}, "blog", t);
    return { ...r, image: Xl(r.image) };
  } catch (n) {
    console.error(n);
  }
}
async function zI() {
  try {
    return (
      await Oi(
        `*[_type == "blogPost"]{
      title, 
      slug
    }`,
        {},
        "blogs"
      )
    ).map((r) => ({ ...r }));
  } catch (e) {
    return console.error(e), [];
  }
}
async function O1() {
  try {
    return (
      await Oi(
        `*[_type == "blogPost"]{
      title,
      date,
      content,
      image, 
      slug
    }| order(date desc)[0...3]`,
        {},
        "blogs",
        !0
      )
    ).map((r) => ({ ...r, image: Xl(r.image) }));
  } catch (e) {
    return console.error(e), [];
  }
}
const A1 = {
    style: { "background-image": "url('/headerimg.webp')" },
    "bg-fit": "",
    relative: "",
    mt1: "",
    flex: "",
    "flex-wrap": "",
    "justify-start": "",
    "bg-cover": "",
    "bg-fixed": "",
    "bg-bottom": "",
    "md:p10": "",
    "lg:px25": "",
    "md:py20": "",
  },
  I1 = {
    "h-full": "",
    px2: "",
    "py-15": "",
    "outline-offset-5": "",
    "md:px-10": "",
    "md:outline": "",
    class:
      "bg-warmgray-200/70 px4 outline-warmgray-200/70 backdrop-blur-lg dark:bg-warmgray-800/80 dark:outline-warmgray-800/50",
  },
  x1 = { flex: "" },
  k1 = Me({
    __name: "HomeInsights",
    setup(e) {
      const t = re([]);
      async function n() {
        const r = await O1();
        t.value = r;
      }
      return (
        kt(n),
        (r, s) => {
          const o = jS;
          return (
            ue(),
            fe("div", A1, [
              j("div", I1, [
                s[0] ||
                  (s[0] = j(
                    "h2",
                    {
                      pb5: "",
                      pl5: "",
                      "text-left": "",
                      "text-4xl": "",
                      "text-warmgray-600": "",
                      "dark:text-warmgray-300": "",
                    },
                    " Featured Insight ",
                    -1
                  )),
                j("div", x1, [
                  ce(o, { "max-w-200": "", blog: Q(t)[0], full: !0 }, null, 8, [
                    "blog",
                  ]),
                ]),
              ]),
            ])
          );
        }
      );
    },
  }),
  P1 = ["src", "alt", "width", "height"],
  R1 = Me({
    __name: "LazyImage",
    props: {
      src: null,
      alt: null,
      width: null,
      height: null,
      cover: { type: Boolean },
    },
    setup(e) {
      const t = e,
        { src: n, alt: r, width: s, height: o } = t,
        i = re(null),
        a = re(!1),
        l = re(null),
        c = Ml(i, {}),
        u = re(!1);
      function f() {
        u.value = !0;
      }
      function h() {}
      return (
        kt(() => {
          c.value || (a.value = !1);
        }),
        Pe(c, (d) => {
          d && (a.value = !0);
        }),
        (d, p) => (
          ue(),
          fe(
            "div",
            { ref_key: "imgRef", ref: i, "h-full": "", "w-full": "" },
            [
              a.value
                ? (ue(),
                  fe(
                    "img",
                    {
                      key: 0,
                      ref_key: "trIm",
                      ref: l,
                      src: Q(n),
                      alt: Q(r),
                      class: fn([
                        e.cover ? "object-fit object-cover" : "",
                        u.value ? "opacity-100" : "opacity-0",
                      ]),
                      width: Q(s),
                      height: Q(o),
                      "h-full": "",
                      "max-h-full": "",
                      "max-w-full": "",
                      onLoad: f,
                      "w-full": "",
                      onError: h,
                      "transition-opacity": "",
                      "transition-duration-500": "",
                    },
                    null,
                    42,
                    P1
                  ))
                : lt("", !0),
            ],
            512
          )
        )
      );
    },
  }),
  L1 = { "h-full": "", "w-full": "" },
  N1 = ["src", "alt", "width", "height"],
  D1 = Me({
    __name: "LazyIntersect",
    props: {
      src: null,
      alt: null,
      width: null,
      height: null,
      cover: { type: Boolean },
      container: null,
    },
    setup(e) {
      const t = re(null),
        n = re(!1),
        r = re(!1);
      return (
        mp(
          e.container,
          ([{ isIntersecting: s }]) => {
            n.value = s;
          },
          { root: t }
        ),
        Pe(n, () => {
          n.value && (r.value = !0);
        }),
        (s, o) => (
          ue(),
          fe("div", L1, [
            r.value
              ? (ue(),
                fe(
                  "img",
                  {
                    key: 0,
                    src: e.src,
                    alt: e.alt,
                    class: fn(e.cover ? "object-fit object-cover" : ""),
                    width: e.width,
                    height: e.height,
                    "h-full": "",
                    "max-h-full": "",
                    "max-w-full": "",
                    "w-full": "",
                    "animate-fade-in": "",
                  },
                  null,
                  10,
                  N1
                ))
              : lt("", !0),
          ])
        )
      );
    },
  }),
  M1 = {
    projectId: "c3mbhp0h",
    dataset: "production",
    useCdn: !0,
    apiVersion: "2022-01-12",
  },
  $1 = Jl(M1),
  j1 = Sm($1.config());
function ks(e) {
  return j1.image(e);
}
const { fetch: Ql } = Cm();
async function YI(e) {
  try {
    const t = `*[_type == "project" && slug.current == "${e}"] {
      title,
    name,
      location,
      size,
      scope,
      timeline,
      sector,
      image,
      content,
      "smallimages":image,
      slug
    }[0]`,
      n = await Ql(t, {}, "project", !0);
    return {
      ...n,
      image: n.image.map((s) => ks(s.asset)),
      smallimages: n.image.map((s) => ks(s.asset).width(250)),
    };
  } catch (t) {
    console.error(t);
  }
}
async function JI() {
  try {
    return (
      await Ql(
        `*[_type == "project"] | order(order asc){
      title,
            name,
      location,
      size,
      scope,
      timeline,
      sector,
      "previewImage":image[0],
      content,
      slug
    }`,
        {},
        "projects"
      )
    ).map((r) => ({ ...r, previewImage: ks(r.previewImage.asset) }));
  } catch (e) {
    return console.error(e), [];
  }
}
async function F1() {
  try {
    return (
      await Ql(
        `*[_type == "project"] | order(order asc){
      title,
      "previewImage":image[1],
      "secondImage":image[0],
      content,
      slug
    }`,
        {},
        "homeprojects"
      )
    ).map((r) => ({
      ...r,
      previewImage: ks(r.previewImage.asset).width(700),
      secondImage: ks(r.secondImage.asset),
    }));
  } catch (e) {
    return console.error(e), [];
  }
}
const H1 = { relative: "" },
  U1 = ["onClick", "onMouseover"],
  V1 = { absolute: "", "left-0": "", "top-0": "", "h-full": "", "w-full": "" },
  B1 = {
    relative: "",
    "z-5": "",
    class:
      "h-full w-screen flex shrink-0 items-end justify-end from-white/95 to-white/95 bg-gradient-to-tr text-white opacity-0 transition md:max-w-120 md:shrink dark:from-dark/80 dark:to-dark/80 hover:opacity-100",
    px10: "",
  },
  W1 = {
    "h-full": "",
    "w-full": "",
    flex: "",
    "flex-col": "",
    "items-center": "",
    "justify-center": "",
  },
  q1 = {
    "w-screen": "",
    px5: "",
    "text-center": "",
    "text-4xl": "",
    "text-dark": "",
    "font-bold": "",
    "tracking-tight": "",
    "md:w-auto": "",
    "dark:text-light": "",
  },
  K1 = {
    class: "xl:w-1/2",
    relative: "",
    flex: "",
    "flex-col": "",
    "items-center": "",
    "justify-center": "",
    "text-left": "",
  },
  G1 = {
    "flex-col": "",
    "items-center": "",
    "justify-center": "",
    px7: "",
    py5: "",
    "md:px25": "",
    "md:py15": "",
  },
  z1 = {
    "max-w-200": "",
    py1: "",
    "text-left": "",
    "text-4xl": "",
    "md:text-5xl": "",
  },
  Y1 = {
    "max-w-130": "",
    pt5: "",
    "text-left": "",
    "leading-relaxed": "",
    "tracking-wide": "",
  },
  J1 = { key: 0, class: "md:w-1/2", hidden: "", "h-full": "", "xl:flex": "" },
  na = 200,
  X1 = Me({
    __name: "HomeProject",
    setup(e) {
      const t = re([]);
      async function n() {
        const N = await F1();
        t.value = [...N, ...N, ...N];
      }
      kt(n);
      const r = re(0),
        s = ye(() => {
          const N = t.value[r.value].content;
          let E = N[0].children[0].text,
            x = 1;
          for (; E.length < na && x < N.length; )
            (E += ` ${N[x].children[0].text}`), x++;
          if (E.length >= na) {
            const O = E.indexOf(".", na);
            O !== -1 && (E = E.slice(0, O + 1));
          }
          return E;
        }),
        o = re(null),
        i = fr({
          currentScrollX: 0,
          isAutoScrolling: !1,
          scrollDirection: 1,
          autoScrollTimeout: null,
        }),
        { width: a } = Fa();
      function l() {
        if (a.value > 700 && !i.isAutoScrolling) return;
        let N = a.value;
        a.value > 700 && (N = 480);
        const E = N,
          x = i.currentScrollX,
          O = Math.round(x / E);
        return Math.min(O, t.value.length - 1);
      }
      function c() {
        o.value &&
          ((i.currentScrollX = o.value.scrollLeft),
          (i.isAutoScrolling || a.value < 700) && (r.value = l()));
      }
      Ko(o, "scroll", c);
      let u = 0;
      const f = re();
      function h(N) {
        if (o.value && i.isAutoScrolling && ((u += N), u >= 1)) {
          const E = Math.floor(u);
          o.value.scrollBy({ left: E, behavior: "auto" }), (u -= E);
        }
      }
      const d = re(!1),
        p = re(!1),
        { pause: m, resume: S } = XE(
          (N) => {
            if (N.delta > 1e3) return;
            const O = (100 * N.delta) / 1e3;
            h(O);
          },
          { immediate: !1 }
        );
      function b(N) {
        i.autoScrollTimeout !== null && clearTimeout(i.autoScrollTimeout),
          (i.autoScrollTimeout = setTimeout(() => {
            (d.value = !1), (i.isAutoScrolling = !0), (p.value = !1), S();
          }, N));
      }
      function C() {
        d.value || ((i.isAutoScrolling = !0), S());
      }
      function y(N) {
        i.autoScrollTimeout !== null &&
          !d.value &&
          (clearTimeout(i.autoScrollTimeout), (i.autoScrollTimeout = null)),
          (i.isAutoScrolling = !1),
          m(),
          N && b(N);
      }
      const { width: g } = Fa();
      function A() {
        (i.isAutoScrolling = !1),
          o.value &&
            o.value.scrollBy({ left: -g.value / 2, behavior: "smooth" }),
          y(2e3);
      }
      function L() {
        (i.isAutoScrolling = !1),
          o.value &&
            o.value.scrollBy({ left: g.value / 2, behavior: "smooth" }),
          y(2e3);
      }
      function P(N) {
        r.value = N;
      }
      function V(N) {
        (d.value = !0), y(1e4), (p.value = !0), (r.value = N);
      }
      return (
        Pe(a, () => {
          a.value < 700 ? y() : C();
        }),
        kt(() => {
          a.value < 700 || b(2e3);
        }),
        (N, E) => {
          const x = D1,
            O = Ys("Router-Link"),
            R = R1;
          return (
            ue(),
            fe(
              "div",
              { onMouseleave: E[1] || (E[1] = (Z) => C()) },
              [
                j("div", H1, [
                  j(
                    "button",
                    {
                      hidden: "",
                      "h-full": "",
                      "w-20": "",
                      "md:flex": "",
                      class:
                        "left-arrow absolute left-0 top-0 z-20 items-center justify-start rounded-md px-2 py-1 text-5xl text-white text-shadow",
                      onClick: as(A, ["prevent"]),
                    },
                    E[2] ||
                      (E[2] = [
                        j("div", { "i-carbon-chevron-left": "" }, null, -1),
                      ])
                  ),
                  j(
                    "button",
                    {
                      hidden: "",
                      "h-full": "",
                      "w-20": "",
                      "md:flex": "",
                      class:
                        "left-arrow absolute right-0 top-0 z-20 items-center justify-end rounded-md px-2 py-1 text-5xl text-white text-shadow",
                      onClick: as(L, ["prevent"]),
                    },
                    E[3] ||
                      (E[3] = [
                        j("div", { "i-carbon-chevron-right": "" }, null, -1),
                      ])
                  ),
                  j(
                    "div",
                    {
                      ref_key: "scrollContainer",
                      ref: o,
                      class: fn(["no-scrollbar", (Q(i).isAutoScrolling, "")]),
                      mt1: "",
                      "w-full": "",
                      flex: "",
                      "snap-x": "",
                      "snap-mandatory": "",
                      "gap-1": "",
                      "overflow-x-scroll": "",
                      "md:snap-none": "",
                    },
                    [
                      (ue(!0),
                      fe(
                        Ue,
                        null,
                        pi(
                          Q(t),
                          (Z, G) => (
                            ue(),
                            fe(
                              "div",
                              {
                                key: G,
                                ref_for: !0,
                                ref_key: "projHover",
                                ref: f,
                                relative: "",
                                "h-80": "",
                                flex: "",
                                "cursor-pointer": "",
                                "snap-center": "",
                                "snap-always": "",
                                "items-start": "",
                                "justify-center": "",
                                transition: "",
                                onClick: as((q) => V(G), ["prevent"]),
                                onMouseover: (q) => P(G),
                                onMouseenter: E[0] || (E[0] = (q) => y(4e3)),
                              },
                              [
                                j("div", V1, [
                                  ce(
                                    x,
                                    {
                                      cover: !0,
                                      src: Z.previewImage,
                                      container: Q(o),
                                    },
                                    null,
                                    8,
                                    ["src", "container"]
                                  ),
                                ]),
                                j("div", B1, [
                                  j("div", W1, [j("h3", q1, At(Z.title), 1)]),
                                ]),
                              ],
                              40,
                              U1
                            )
                          )
                        ),
                        128
                      )),
                    ],
                    2
                  ),
                ]),
                ce(
                  vh,
                  { name: "slide-fade", mode: "out-in" },
                  {
                    default: bt(() => [
                      Q(t)[Q(r)]
                        ? (ue(),
                          fe(
                            "div",
                            {
                              key: Q(r),
                              relative: "",
                              mt1: "",
                              "w-full": "",
                              flex: "",
                              "items-center": "",
                              "justify-center": "",
                              "md:h-150": "",
                            },
                            [
                              j("div", K1, [
                                j("div", G1, [
                                  E[6] ||
                                    (E[6] = j(
                                      "h2",
                                      {
                                        pb5: "",
                                        "text-2xl": "",
                                        "text-warmgray-600": "",
                                        "md:text-4xl": "",
                                        "dark:text-warmgray-300": "",
                                      },
                                      " Project Highlight ",
                                      -1
                                    )),
                                  j("h3", z1, At(Q(t)[Q(r)].title), 1),
                                  j("p", Y1, At(Q(s)), 1),
                                  ce(
                                    O,
                                    {
                                      "text-decoration-none": "",
                                      mt8: "",
                                      "border-1": "",
                                      "border-cmbrown": "",
                                      "bg-white": "",
                                      "text-dark": "",
                                      transition: "",
                                      "delay-50": "",
                                      btn: "",
                                      "dark:bg-cmblue": "",
                                      "hover:bg-cmbrown": "",
                                      "dark:text-light": "",
                                      "hover:text-light": "",
                                      to: `/projects/${
                                        Q(t)[Q(r)].slug.current
                                      }`,
                                    },
                                    {
                                      default: bt(
                                        () =>
                                          E[4] ||
                                          (E[4] = [Bt(" View Project ")])
                                      ),
                                      _: 1,
                                    },
                                    8,
                                    ["to"]
                                  ),
                                  ce(
                                    O,
                                    {
                                      "text-decoration-none": "",
                                      ml1: "",
                                      mt8: "",
                                      "border-1": "",
                                      "border-cmbrown": "",
                                      "text-light": "",
                                      transition: "",
                                      "delay-50": "",
                                      btn: "",
                                      "dark:bg-cmbrown": "",
                                      "hover:bg-white": "",
                                      "hover:text-dark": "",
                                      "dark:hover:bg-cmblue": "",
                                      "dark:hover:text-light": "",
                                      to: "/projects",
                                    },
                                    {
                                      default: bt(
                                        () =>
                                          E[5] ||
                                          (E[5] = [Bt(" All Projects ")])
                                      ),
                                      _: 1,
                                    }
                                  ),
                                ]),
                              ]),
                              Q(t)[Q(r)].secondImage
                                ? (ue(),
                                  fe("div", J1, [
                                    ce(
                                      R,
                                      {
                                        cover: !0,
                                        "h-full": "",
                                        "w-full": "",
                                        "object-cover": "",
                                        src: Q(t)[Q(r)].secondImage,
                                      },
                                      null,
                                      8,
                                      ["src"]
                                    ),
                                  ]))
                                : lt("", !0),
                            ]
                          ))
                        : lt("", !0),
                    ]),
                    _: 1,
                  }
                ),
              ],
              32
            )
          );
        }
      );
    },
  }),
  Q1 = Zs(X1, [["__scopeId", "data-v-27b1540b"]]),
  Tm = pp(),
  Om = YE(Tm),
  Z1 = Dl(),
  eO = "/logowhite.svg";
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const _r = typeof document < "u";
function Am(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function tO(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && Am(e.default))
  );
}
const Ee = Object.assign;
function ra(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = jt(s) ? s.map(e) : e(s);
  }
  return n;
}
const ps = () => {},
  jt = Array.isArray,
  Im = /#/g,
  nO = /&/g,
  rO = /\//g,
  sO = /=/g,
  oO = /\?/g,
  xm = /\+/g,
  iO = /%5B/g,
  aO = /%5D/g,
  km = /%5E/g,
  lO = /%60/g,
  Pm = /%7B/g,
  cO = /%7C/g,
  Rm = /%7D/g,
  uO = /%20/g;
function Zl(e) {
  return encodeURI("" + e)
    .replace(cO, "|")
    .replace(iO, "[")
    .replace(aO, "]");
}
function fO(e) {
  return Zl(e).replace(Pm, "{").replace(Rm, "}").replace(km, "^");
}
function qa(e) {
  return Zl(e)
    .replace(xm, "%2B")
    .replace(uO, "+")
    .replace(Im, "%23")
    .replace(nO, "%26")
    .replace(lO, "`")
    .replace(Pm, "{")
    .replace(Rm, "}")
    .replace(km, "^");
}
function dO(e) {
  return qa(e).replace(sO, "%3D");
}
function hO(e) {
  return Zl(e).replace(Im, "%23").replace(oO, "%3F");
}
function pO(e) {
  return e == null ? "" : hO(e).replace(rO, "%2F");
}
function Ps(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const mO = /\/$/,
  gO = (e) => e.replace(mO, "");
function sa(e, t, n = "/") {
  let r,
    s = {},
    o = "",
    i = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 &&
      ((r = t.slice(0, l)),
      (o = t.slice(l + 1, a > -1 ? a : t.length)),
      (s = e(o))),
    a > -1 && ((r = r || t.slice(0, a)), (i = t.slice(a, t.length))),
    (r = _O(r ?? t, n)),
    { fullPath: r + (o && "?") + o + i, path: r, query: s, hash: Ps(i) }
  );
}
function yO(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Tf(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function vO(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    Hr(t.matched[r], n.matched[s]) &&
    Lm(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Hr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Lm(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!bO(e[n], t[n])) return !1;
  return !0;
}
function bO(e, t) {
  return jt(e) ? Of(e, t) : jt(t) ? Of(t, e) : e === t;
}
function Of(e, t) {
  return jt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function _O(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/"),
    s = r[r.length - 1];
  (s === ".." || s === ".") && r.push("");
  let o = n.length - 1,
    i,
    a;
  for (i = 0; i < r.length; i++)
    if (((a = r[i]), a !== "."))
      if (a === "..") o > 1 && o--;
      else break;
  return n.slice(0, o).join("/") + "/" + r.slice(i).join("/");
}
const bn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var Ur;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Ur || (Ur = {}));
var ar;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(ar || (ar = {}));
const oa = "";
function Nm(e) {
  if (!e)
    if (_r) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), gO(e);
}
const wO = /^[^#]+#/;
function Dm(e, t) {
  return e.replace(wO, "#") + t;
}
function EO(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const Ai = () => ({ left: window.scrollX, top: window.scrollY });
function SO(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      s =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!s) return;
    t = EO(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function Af(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Ka = new Map();
function CO(e, t) {
  Ka.set(e, t);
}
function TO(e) {
  const t = Ka.get(e);
  return Ka.delete(e), t;
}
let OO = () => location.protocol + "//" + location.host;
function Mm(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf("#");
  if (o > -1) {
    let a = s.includes(e.slice(o)) ? e.slice(o).length : 1,
      l = s.slice(a);
    return l[0] !== "/" && (l = "/" + l), Tf(l, "");
  }
  return Tf(n, e) + r + s;
}
function AO(e, t, n, r) {
  let s = [],
    o = [],
    i = null;
  const a = ({ state: h }) => {
    const d = Mm(e, location),
      p = n.value,
      m = t.value;
    let S = 0;
    if (h) {
      if (((n.value = d), (t.value = h), i && i === p)) {
        i = null;
        return;
      }
      S = m ? h.position - m.position : 0;
    } else r(d);
    s.forEach((b) => {
      b(n.value, p, {
        delta: S,
        type: Ur.pop,
        direction: S ? (S > 0 ? ar.forward : ar.back) : ar.unknown,
      });
    });
  };
  function l() {
    i = n.value;
  }
  function c(h) {
    s.push(h);
    const d = () => {
      const p = s.indexOf(h);
      p > -1 && s.splice(p, 1);
    };
    return o.push(d), d;
  }
  function u() {
    const { history: h } = window;
    h.state && h.replaceState(Ee({}, h.state, { scroll: Ai() }), "");
  }
  function f() {
    for (const h of o) h();
    (o = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("beforeunload", u);
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", u, { passive: !0 }),
    { pauseListeners: l, listen: c, destroy: f }
  );
}
function If(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? Ai() : null,
  };
}
function IO(e) {
  const { history: t, location: n } = window,
    r = { value: Mm(e, n) },
    s = { value: t.state };
  s.value ||
    o(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function o(l, c, u) {
    const f = e.indexOf("#"),
      h =
        f > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l
          : OO() + e + l;
    try {
      t[u ? "replaceState" : "pushState"](c, "", h), (s.value = c);
    } catch (d) {
      console.error(d), n[u ? "replace" : "assign"](h);
    }
  }
  function i(l, c) {
    const u = Ee({}, t.state, If(s.value.back, l, s.value.forward, !0), c, {
      position: s.value.position,
    });
    o(l, u, !0), (r.value = l);
  }
  function a(l, c) {
    const u = Ee({}, s.value, t.state, { forward: l, scroll: Ai() });
    o(u.current, u, !0);
    const f = Ee({}, If(r.value, l, null), { position: u.position + 1 }, c);
    o(l, f, !1), (r.value = l);
  }
  return { location: r, state: s, push: a, replace: i };
}
function xO(e) {
  e = Nm(e);
  const t = IO(e),
    n = AO(e, t.state, t.location, t.replace);
  function r(o, i = !0) {
    i || n.pauseListeners(), history.go(o);
  }
  const s = Ee(
    { location: "", base: e, go: r, createHref: Dm.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  );
}
function kO(e = "") {
  let t = [],
    n = [oa],
    r = 0;
  e = Nm(e);
  function s(a) {
    r++, r !== n.length && n.splice(r), n.push(a);
  }
  function o(a, l, { direction: c, delta: u }) {
    const f = { direction: c, delta: u, type: Ur.pop };
    for (const h of t) h(a, l, f);
  }
  const i = {
    location: oa,
    state: {},
    base: e,
    createHref: Dm.bind(null, e),
    replace(a) {
      n.splice(r--, 1), s(a);
    },
    push(a, l) {
      s(a);
    },
    listen(a) {
      return (
        t.push(a),
        () => {
          const l = t.indexOf(a);
          l > -1 && t.splice(l, 1);
        }
      );
    },
    destroy() {
      (t = []), (n = [oa]), (r = 0);
    },
    go(a, l = !0) {
      const c = this.location,
        u = a < 0 ? ar.back : ar.forward;
      (r = Math.max(0, Math.min(r + a, n.length - 1))),
        l && o(this.location, c, { direction: u, delta: a });
    },
  };
  return (
    Object.defineProperty(i, "location", { enumerable: !0, get: () => n[r] }), i
  );
}
function PO(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function $m(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const jm = Symbol("");
var xf;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(xf || (xf = {}));
function Vr(e, t) {
  return Ee(new Error(), { type: e, [jm]: !0 }, t);
}
function Xt(e, t) {
  return e instanceof Error && jm in e && (t == null || !!(e.type & t));
}
const kf = "[^/]+?",
  RO = { sensitive: !1, strict: !1, start: !0, end: !0 },
  LO = /[.+*?^${}()[\]/\\]/g;
function NO(e, t) {
  const n = Ee({}, RO, t),
    r = [];
  let s = n.start ? "^" : "";
  const o = [];
  for (const c of e) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (s += "/");
    for (let f = 0; f < c.length; f++) {
      const h = c[f];
      let d = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0)
        f || (s += "/"), (s += h.value.replace(LO, "\\$&")), (d += 40);
      else if (h.type === 1) {
        const { value: p, repeatable: m, optional: S, regexp: b } = h;
        o.push({ name: p, repeatable: m, optional: S });
        const C = b || kf;
        if (C !== kf) {
          d += 10;
          try {
            new RegExp(`(${C})`);
          } catch (g) {
            throw new Error(
              `Invalid custom RegExp for param "${p}" (${C}): ` + g.message
            );
          }
        }
        let y = m ? `((?:${C})(?:/(?:${C}))*)` : `(${C})`;
        f || (y = S && c.length < 2 ? `(?:/${y})` : "/" + y),
          S && (y += "?"),
          (s += y),
          (d += 20),
          S && (d += -8),
          m && (d += -20),
          C === ".*" && (d += -50);
      }
      u.push(d);
    }
    r.push(u);
  }
  if (n.strict && n.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"),
    n.end ? (s += "$") : n.strict && !s.endsWith("/") && (s += "(?:/|$)");
  const i = new RegExp(s, n.sensitive ? "" : "i");
  function a(c) {
    const u = c.match(i),
      f = {};
    if (!u) return null;
    for (let h = 1; h < u.length; h++) {
      const d = u[h] || "",
        p = o[h - 1];
      f[p.name] = d && p.repeatable ? d.split("/") : d;
    }
    return f;
  }
  function l(c) {
    let u = "",
      f = !1;
    for (const h of e) {
      (!f || !u.endsWith("/")) && (u += "/"), (f = !1);
      for (const d of h)
        if (d.type === 0) u += d.value;
        else if (d.type === 1) {
          const { value: p, repeatable: m, optional: S } = d,
            b = p in c ? c[p] : "";
          if (jt(b) && !m)
            throw new Error(
              `Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`
            );
          const C = jt(b) ? b.join("/") : b;
          if (!C)
            if (S)
              h.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${p}"`);
          u += C;
        }
    }
    return u || "/";
  }
  return { re: i, score: r, keys: o, parse: a, stringify: l };
}
function DO(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 80
      ? 1
      : -1
    : 0;
}
function Fm(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length; ) {
    const o = DO(r[n], s[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (Pf(r)) return 1;
    if (Pf(s)) return -1;
  }
  return s.length - r.length;
}
function Pf(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const MO = { type: 0, value: "" },
  $O = /[a-zA-Z0-9_]/;
function jO(e) {
  if (!e) return [[]];
  if (e === "/") return [[MO]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(d) {
    throw new Error(`ERR (${n})/"${c}": ${d}`);
  }
  let n = 0,
    r = n;
  const s = [];
  let o;
  function i() {
    o && s.push(o), (o = []);
  }
  let a = 0,
    l,
    c = "",
    u = "";
  function f() {
    c &&
      (n === 0
        ? o.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (l === "*" || l === "+") &&
            t(
              `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?",
          }))
        : t("Invalid state to consume buffer"),
      (c = ""));
  }
  function h() {
    c += l;
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (c && f(), i()) : l === ":" ? (f(), (n = 1)) : h();
        break;
      case 4:
        h(), (n = r);
        break;
      case 1:
        l === "("
          ? (n = 2)
          : $O.test(l)
          ? h()
          : (f(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + l)
            : (n = 3)
          : (u += l);
        break;
      case 3:
        f(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--, (u = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), i(), s;
}
function FO(e, t, n) {
  const r = NO(jO(e.path), n),
    s = Ee(r, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function HO(e, t) {
  const n = [],
    r = new Map();
  t = Df({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(f) {
    return r.get(f);
  }
  function o(f, h, d) {
    const p = !d,
      m = Lf(f);
    m.aliasOf = d && d.record;
    const S = Df(t, f),
      b = [m];
    if ("alias" in f) {
      const g = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const A of g)
        b.push(
          Lf(
            Ee({}, m, {
              components: d ? d.record.components : m.components,
              path: A,
              aliasOf: d ? d.record : m,
            })
          )
        );
    }
    let C, y;
    for (const g of b) {
      const { path: A } = g;
      if (h && A[0] !== "/") {
        const L = h.record.path,
          P = L[L.length - 1] === "/" ? "" : "/";
        g.path = h.record.path + (A && P + A);
      }
      if (
        ((C = FO(g, h, S)),
        d
          ? d.alias.push(C)
          : ((y = y || C),
            y !== C && y.alias.push(C),
            p && f.name && !Nf(C) && i(f.name)),
        Hm(C) && l(C),
        m.children)
      ) {
        const L = m.children;
        for (let P = 0; P < L.length; P++) o(L[P], C, d && d.children[P]);
      }
      d = d || C;
    }
    return y
      ? () => {
          i(y);
        }
      : ps;
  }
  function i(f) {
    if ($m(f)) {
      const h = r.get(f);
      h &&
        (r.delete(f),
        n.splice(n.indexOf(h), 1),
        h.children.forEach(i),
        h.alias.forEach(i));
    } else {
      const h = n.indexOf(f);
      h > -1 &&
        (n.splice(h, 1),
        f.record.name && r.delete(f.record.name),
        f.children.forEach(i),
        f.alias.forEach(i));
    }
  }
  function a() {
    return n;
  }
  function l(f) {
    const h = BO(f, n);
    n.splice(h, 0, f), f.record.name && !Nf(f) && r.set(f.record.name, f);
  }
  function c(f, h) {
    let d,
      p = {},
      m,
      S;
    if ("name" in f && f.name) {
      if (((d = r.get(f.name)), !d)) throw Vr(1, { location: f });
      (S = d.record.name),
        (p = Ee(
          Rf(
            h.params,
            d.keys
              .filter((y) => !y.optional)
              .concat(d.parent ? d.parent.keys.filter((y) => y.optional) : [])
              .map((y) => y.name)
          ),
          f.params &&
            Rf(
              f.params,
              d.keys.map((y) => y.name)
            )
        )),
        (m = d.stringify(p));
    } else if (f.path != null)
      (m = f.path),
        (d = n.find((y) => y.re.test(m))),
        d && ((p = d.parse(m)), (S = d.record.name));
    else {
      if (((d = h.name ? r.get(h.name) : n.find((y) => y.re.test(h.path))), !d))
        throw Vr(1, { location: f, currentLocation: h });
      (S = d.record.name),
        (p = Ee({}, h.params, f.params)),
        (m = d.stringify(p));
    }
    const b = [];
    let C = d;
    for (; C; ) b.unshift(C.record), (C = C.parent);
    return { name: S, path: m, params: p, matched: b, meta: VO(b) };
  }
  e.forEach((f) => o(f));
  function u() {
    (n.length = 0), r.clear();
  }
  return {
    addRoute: o,
    resolve: c,
    removeRoute: i,
    clearRoutes: u,
    getRoutes: a,
    getRecordMatcher: s,
  };
}
function Rf(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Lf(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: UO(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function UO(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function Nf(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function VO(e) {
  return e.reduce((t, n) => Ee(t, n.meta), {});
}
function Df(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function BO(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r; ) {
    const o = (n + r) >> 1;
    Fm(e, t[o]) < 0 ? (r = o) : (n = o + 1);
  }
  const s = WO(e);
  return s && (r = t.lastIndexOf(s, r - 1)), r;
}
function WO(e) {
  let t = e;
  for (; (t = t.parent); ) if (Hm(t) && Fm(e, t) === 0) return t;
}
function Hm({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function qO(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < r.length; ++s) {
    const o = r[s].replace(xm, " "),
      i = o.indexOf("="),
      a = Ps(i < 0 ? o : o.slice(0, i)),
      l = i < 0 ? null : Ps(o.slice(i + 1));
    if (a in t) {
      let c = t[a];
      jt(c) || (c = t[a] = [c]), c.push(l);
    } else t[a] = l;
  }
  return t;
}
function Mf(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = dO(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (jt(r) ? r.map((o) => o && qa(o)) : [r && qa(r)]).forEach((o) => {
      o !== void 0 &&
        ((t += (t.length ? "&" : "") + n), o != null && (t += "=" + o));
    });
  }
  return t;
}
function KO(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = jt(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
        ? r
        : "" + r);
  }
  return t;
}
const GO = Symbol(""),
  $f = Symbol(""),
  Ii = Symbol(""),
  ec = Symbol(""),
  Ga = Symbol("");
function Zr() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function Cn(e, t, n, r, s, o = (i) => i()) {
  const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((a, l) => {
      const c = (h) => {
          h === !1
            ? l(Vr(4, { from: n, to: t }))
            : h instanceof Error
            ? l(h)
            : PO(h)
            ? l(Vr(2, { from: t, to: h }))
            : (i &&
                r.enterCallbacks[s] === i &&
                typeof h == "function" &&
                i.push(h),
              a());
        },
        u = o(() => e.call(r && r.instances[s], t, n, c));
      let f = Promise.resolve(u);
      e.length < 3 && (f = f.then(c)), f.catch((h) => l(h));
    });
}
function ia(e, t, n, r, s = (o) => o()) {
  const o = [];
  for (const i of e)
    for (const a in i.components) {
      let l = i.components[a];
      if (!(t !== "beforeRouteEnter" && !i.instances[a]))
        if (Am(l)) {
          const u = (l.__vccOpts || l)[t];
          u && o.push(Cn(u, n, r, i, a, s));
        } else {
          let c = l();
          o.push(() =>
            c.then((u) => {
              if (!u)
                throw new Error(
                  `Couldn't resolve component "${a}" at "${i.path}"`
                );
              const f = tO(u) ? u.default : u;
              (i.mods[a] = u), (i.components[a] = f);
              const d = (f.__vccOpts || f)[t];
              return d && Cn(d, n, r, i, a, s)();
            })
          );
        }
    }
  return o;
}
function jf(e) {
  const t = ze(Ii),
    n = ze(ec),
    r = ye(() => {
      const l = Q(e.to);
      return t.resolve(l);
    }),
    s = ye(() => {
      const { matched: l } = r.value,
        { length: c } = l,
        u = l[c - 1],
        f = n.matched;
      if (!u || !f.length) return -1;
      const h = f.findIndex(Hr.bind(null, u));
      if (h > -1) return h;
      const d = Ff(l[c - 2]);
      return c > 1 && Ff(u) === d && f[f.length - 1].path !== d
        ? f.findIndex(Hr.bind(null, l[c - 2]))
        : h;
    }),
    o = ye(() => s.value > -1 && QO(n.params, r.value.params)),
    i = ye(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        Lm(n.params, r.value.params)
    );
  function a(l = {}) {
    if (XO(l)) {
      const c = t[Q(e.replace) ? "replace" : "push"](Q(e.to)).catch(ps);
      return (
        e.viewTransition &&
          typeof document < "u" &&
          "startViewTransition" in document &&
          document.startViewTransition(() => c),
        c
      );
    }
    return Promise.resolve();
  }
  return {
    route: r,
    href: ye(() => r.value.href),
    isActive: o,
    isExactActive: i,
    navigate: a,
  };
}
function zO(e) {
  return e.length === 1 ? e[0] : e;
}
const YO = Me({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: jf,
    setup(e, { slots: t }) {
      const n = fr(jf(e)),
        { options: r } = ze(Ii),
        s = ye(() => ({
          [Hf(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Hf(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const o = t.default && zO(t.default(n));
        return e.custom
          ? o
          : Xs(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              o
            );
      };
    },
  }),
  JO = YO;
function XO(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function QO(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == "string") {
      if (r !== s) return !1;
    } else if (!jt(s) || s.length !== r.length || r.some((o, i) => o !== s[i]))
      return !1;
  }
  return !0;
}
function Ff(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Hf = (e, t, n) => e ?? t ?? n,
  ZO = Me({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = ze(Ga),
        s = ye(() => e.route || r.value),
        o = ze($f, 0),
        i = ye(() => {
          let c = Q(o);
          const { matched: u } = s.value;
          let f;
          for (; (f = u[c]) && !f.components; ) c++;
          return c;
        }),
        a = ye(() => s.value.matched[i.value]);
      Ln(
        $f,
        ye(() => i.value + 1)
      ),
        Ln(GO, a),
        Ln(Ga, s);
      const l = re();
      return (
        Pe(
          () => [l.value, a.value, e.name],
          ([c, u, f], [h, d, p]) => {
            u &&
              ((u.instances[f] = c),
              d &&
                d !== u &&
                c &&
                c === h &&
                (u.leaveGuards.size || (u.leaveGuards = d.leaveGuards),
                u.updateGuards.size || (u.updateGuards = d.updateGuards))),
              c &&
                u &&
                (!d || !Hr(u, d) || !h) &&
                (u.enterCallbacks[f] || []).forEach((m) => m(c));
          },
          { flush: "post" }
        ),
        () => {
          const c = s.value,
            u = e.name,
            f = a.value,
            h = f && f.components[u];
          if (!h) return Uf(n.default, { Component: h, route: c });
          const d = f.props[u],
            p = d
              ? d === !0
                ? c.params
                : typeof d == "function"
                ? d(c)
                : d
              : null,
            S = Xs(
              h,
              Ee({}, p, t, {
                onVnodeUnmounted: (b) => {
                  b.component.isUnmounted && (f.instances[u] = null);
                },
                ref: l,
              })
            );
          return Uf(n.default, { Component: S, route: c }) || S;
        }
      );
    },
  });
function Uf(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const eA = ZO;
function tA(e) {
  const t = HO(e.routes, e),
    n = e.parseQuery || qO,
    r = e.stringifyQuery || Mf,
    s = e.history,
    o = Zr(),
    i = Zr(),
    a = Zr(),
    l = ul(bn);
  let c = bn;
  _r &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = ra.bind(null, (H) => "" + H),
    f = ra.bind(null, pO),
    h = ra.bind(null, Ps);
  function d(H, z) {
    let Y, ne;
    return (
      $m(H) ? ((Y = t.getRecordMatcher(H)), (ne = z)) : (ne = H),
      t.addRoute(ne, Y)
    );
  }
  function p(H) {
    const z = t.getRecordMatcher(H);
    z && t.removeRoute(z);
  }
  function m() {
    return t.getRoutes().map((H) => H.record);
  }
  function S(H) {
    return !!t.getRecordMatcher(H);
  }
  function b(H, z) {
    if (((z = Ee({}, z || l.value)), typeof H == "string")) {
      const T = sa(n, H, z.path),
        D = t.resolve({ path: T.path }, z),
        W = s.createHref(T.fullPath);
      return Ee(T, D, {
        params: h(D.params),
        hash: Ps(T.hash),
        redirectedFrom: void 0,
        href: W,
      });
    }
    let Y;
    if (H.path != null) Y = Ee({}, H, { path: sa(n, H.path, z.path).path });
    else {
      const T = Ee({}, H.params);
      for (const D in T) T[D] == null && delete T[D];
      (Y = Ee({}, H, { params: f(T) })), (z.params = f(z.params));
    }
    const ne = t.resolve(Y, z),
      de = H.hash || "";
    ne.params = u(h(ne.params));
    const Te = yO(r, Ee({}, H, { hash: fO(de), path: ne.path })),
      _ = s.createHref(Te);
    return Ee(
      { fullPath: Te, hash: de, query: r === Mf ? KO(H.query) : H.query || {} },
      ne,
      { redirectedFrom: void 0, href: _ }
    );
  }
  function C(H) {
    return typeof H == "string" ? sa(n, H, l.value.path) : Ee({}, H);
  }
  function y(H, z) {
    if (c !== H) return Vr(8, { from: z, to: H });
  }
  function g(H) {
    return P(H);
  }
  function A(H) {
    return g(Ee(C(H), { replace: !0 }));
  }
  function L(H) {
    const z = H.matched[H.matched.length - 1];
    if (z && z.redirect) {
      const { redirect: Y } = z;
      let ne = typeof Y == "function" ? Y(H) : Y;
      return (
        typeof ne == "string" &&
          ((ne =
            ne.includes("?") || ne.includes("#") ? (ne = C(ne)) : { path: ne }),
          (ne.params = {})),
        Ee(
          {
            query: H.query,
            hash: H.hash,
            params: ne.path != null ? {} : H.params,
          },
          ne
        )
      );
    }
  }
  function P(H, z) {
    const Y = (c = b(H)),
      ne = l.value,
      de = H.state,
      Te = H.force,
      _ = H.replace === !0,
      T = L(Y);
    if (T)
      return P(
        Ee(C(T), {
          state: typeof T == "object" ? Ee({}, de, T.state) : de,
          force: Te,
          replace: _,
        }),
        z || Y
      );
    const D = Y;
    D.redirectedFrom = z;
    let W;
    return (
      !Te &&
        vO(r, ne, Y) &&
        ((W = Vr(16, { to: D, from: ne })), $e(ne, ne, !0, !1)),
      (W ? Promise.resolve(W) : E(D, ne))
        .catch((F) => (Xt(F) ? (Xt(F, 2) ? F : Re(F)) : X(F, D, ne)))
        .then((F) => {
          if (F) {
            if (Xt(F, 2))
              return P(
                Ee({ replace: _ }, C(F.to), {
                  state: typeof F.to == "object" ? Ee({}, de, F.to.state) : de,
                  force: Te,
                }),
                z || D
              );
          } else F = O(D, ne, !0, _, de);
          return x(D, ne, F), F;
        })
    );
  }
  function V(H, z) {
    const Y = y(H, z);
    return Y ? Promise.reject(Y) : Promise.resolve();
  }
  function N(H) {
    const z = Qe.values().next().value;
    return z && typeof z.runWithContext == "function"
      ? z.runWithContext(H)
      : H();
  }
  function E(H, z) {
    let Y;
    const [ne, de, Te] = nA(H, z);
    Y = ia(ne.reverse(), "beforeRouteLeave", H, z);
    for (const T of ne)
      T.leaveGuards.forEach((D) => {
        Y.push(Cn(D, H, z));
      });
    const _ = V.bind(null, H, z);
    return (
      Y.push(_),
      Ze(Y)
        .then(() => {
          Y = [];
          for (const T of o.list()) Y.push(Cn(T, H, z));
          return Y.push(_), Ze(Y);
        })
        .then(() => {
          Y = ia(de, "beforeRouteUpdate", H, z);
          for (const T of de)
            T.updateGuards.forEach((D) => {
              Y.push(Cn(D, H, z));
            });
          return Y.push(_), Ze(Y);
        })
        .then(() => {
          Y = [];
          for (const T of Te)
            if (T.beforeEnter)
              if (jt(T.beforeEnter))
                for (const D of T.beforeEnter) Y.push(Cn(D, H, z));
              else Y.push(Cn(T.beforeEnter, H, z));
          return Y.push(_), Ze(Y);
        })
        .then(
          () => (
            H.matched.forEach((T) => (T.enterCallbacks = {})),
            (Y = ia(Te, "beforeRouteEnter", H, z, N)),
            Y.push(_),
            Ze(Y)
          )
        )
        .then(() => {
          Y = [];
          for (const T of i.list()) Y.push(Cn(T, H, z));
          return Y.push(_), Ze(Y);
        })
        .catch((T) => (Xt(T, 8) ? T : Promise.reject(T)))
    );
  }
  function x(H, z, Y) {
    a.list().forEach((ne) => N(() => ne(H, z, Y)));
  }
  function O(H, z, Y, ne, de) {
    const Te = y(H, z);
    if (Te) return Te;
    const _ = z === bn,
      T = _r ? history.state : {};
    Y &&
      (ne || _
        ? s.replace(H.fullPath, Ee({ scroll: _ && T && T.scroll }, de))
        : s.push(H.fullPath, de)),
      (l.value = H),
      $e(H, z, Y, _),
      Re();
  }
  let R;
  function Z() {
    R ||
      (R = s.listen((H, z, Y) => {
        if (!wt.listening) return;
        const ne = b(H),
          de = L(ne);
        if (de) {
          P(Ee(de, { replace: !0, force: !0 }), ne).catch(ps);
          return;
        }
        c = ne;
        const Te = l.value;
        _r && CO(Af(Te.fullPath, Y.delta), Ai()),
          E(ne, Te)
            .catch((_) =>
              Xt(_, 12)
                ? _
                : Xt(_, 2)
                ? (P(Ee(C(_.to), { force: !0 }), ne)
                    .then((T) => {
                      Xt(T, 20) &&
                        !Y.delta &&
                        Y.type === Ur.pop &&
                        s.go(-1, !1);
                    })
                    .catch(ps),
                  Promise.reject())
                : (Y.delta && s.go(-Y.delta, !1), X(_, ne, Te))
            )
            .then((_) => {
              (_ = _ || O(ne, Te, !1)),
                _ &&
                  (Y.delta && !Xt(_, 8)
                    ? s.go(-Y.delta, !1)
                    : Y.type === Ur.pop && Xt(_, 20) && s.go(-1, !1)),
                x(ne, Te, _);
            })
            .catch(ps);
      }));
  }
  let G = Zr(),
    q = Zr(),
    ee;
  function X(H, z, Y) {
    Re(H);
    const ne = q.list();
    return (
      ne.length ? ne.forEach((de) => de(H, z, Y)) : console.error(H),
      Promise.reject(H)
    );
  }
  function le() {
    return ee && l.value !== bn
      ? Promise.resolve()
      : new Promise((H, z) => {
          G.add([H, z]);
        });
  }
  function Re(H) {
    return (
      ee ||
        ((ee = !H),
        Z(),
        G.list().forEach(([z, Y]) => (H ? Y(H) : z())),
        G.reset()),
      H
    );
  }
  function $e(H, z, Y, ne) {
    const { scrollBehavior: de } = e;
    if (!_r || !de) return Promise.resolve();
    const Te =
      (!Y && TO(Af(H.fullPath, 0))) ||
      ((ne || !Y) && history.state && history.state.scroll) ||
      null;
    return Un()
      .then(() => de(H, z, Te))
      .then((_) => _ && SO(_))
      .catch((_) => X(_, H, z));
  }
  const xe = (H) => s.go(H);
  let Be;
  const Qe = new Set(),
    wt = {
      currentRoute: l,
      listening: !0,
      addRoute: d,
      removeRoute: p,
      clearRoutes: t.clearRoutes,
      hasRoute: S,
      getRoutes: m,
      resolve: b,
      options: e,
      push: g,
      replace: A,
      go: xe,
      back: () => xe(-1),
      forward: () => xe(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: q.add,
      isReady: le,
      install(H) {
        const z = this;
        H.component("RouterLink", JO),
          H.component("RouterView", eA),
          (H.config.globalProperties.$router = z),
          Object.defineProperty(H.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Q(l),
          }),
          _r &&
            !Be &&
            l.value === bn &&
            ((Be = !0), g(s.location).catch((de) => {}));
        const Y = {};
        for (const de in bn)
          Object.defineProperty(Y, de, {
            get: () => l.value[de],
            enumerable: !0,
          });
        H.provide(Ii, z), H.provide(ec, wd(Y)), H.provide(Ga, l);
        const ne = H.unmount;
        Qe.add(H),
          (H.unmount = function () {
            Qe.delete(H),
              Qe.size < 1 &&
                ((c = bn),
                R && R(),
                (R = null),
                (l.value = bn),
                (Be = !1),
                (ee = !1)),
              ne();
          });
      },
    };
  function Ze(H) {
    return H.reduce((z, Y) => z.then(() => N(Y)), Promise.resolve());
  }
  return wt;
}
function nA(e, t) {
  const n = [],
    r = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const a = t.matched[i];
    a && (e.matched.find((c) => Hr(c, a)) ? r.push(a) : n.push(a));
    const l = e.matched[i];
    l && (t.matched.find((c) => Hr(c, l)) || s.push(l));
  }
  return [n, r, s];
}
function XI() {
  return ze(Ii);
}
function rA(e) {
  return ze(ec);
}
const sA = { "z-99": "", "xl:hidden": "" },
  oA = { key: 0, class: "mobile-menu" },
  iA = { class: "menu-items", flex: "", "flex-col": "", "items-center": "" },
  aA = { "text-3xl": "" },
  lA = { flex: "", "text-2xl": "", "space-x-5": "" },
  cA = ["title"],
  uA = Me({
    __name: "MobileNav",
    setup(e) {
      const t = rA(),
        n = [
          { path: "/about", name: "about" },
          { path: "/services", name: "services" },
          { path: "/projects", name: "projects" },
          { path: "/insights", name: "insights" },
          { path: "/connect", name: "connect" },
        ];
      function r(i) {
        return n[i].path === t.path;
      }
      const s = re(!1);
      Pe(t, () => {
        s.value = !1;
      });
      const { t: o } = Qs();
      return (i, a) => {
        const l = Ys("Router-Link");
        return (
          ue(),
          fe("div", sA, [
            j(
              "button",
              {
                class: "mobile-menu-button",
                onClick: a[0] || (a[0] = (c) => (s.value = !Q(s))),
              },
              [
                j(
                  "span",
                  {
                    class: fn([
                      "icon",
                      [
                        { open: Q(s) },
                        { "before:bg-light after:bg-light bg-light": Q(s) },
                      ],
                    ]),
                    "after:bg-dark": "",
                    "before:bg-dark": "",
                    "dark:after:bg-white": "",
                    "dark:before:bg-white": "",
                  },
                  null,
                  2
                ),
              ]
            ),
            ce(
              vh,
              { name: "slide" },
              {
                default: bt(() => [
                  Q(s)
                    ? (ue(),
                      fe("div", oA, [
                        j("nav", null, [
                          j("ul", iA, [
                            j("li", null, [
                              ce(
                                l,
                                { to: "/" },
                                {
                                  default: bt(
                                    () =>
                                      a[2] ||
                                      (a[2] = [
                                        j(
                                          "img",
                                          {
                                            src: eO,
                                            "h-50": "",
                                            "w-50": "",
                                            pb6: "",
                                          },
                                          null,
                                          -1
                                        ),
                                      ])
                                  ),
                                  _: 1,
                                }
                              ),
                            ]),
                            (ue(),
                            fe(
                              Ue,
                              null,
                              pi(n, (c, u) =>
                                j(
                                  "li",
                                  {
                                    key: c.name,
                                    "border-b-4": "",
                                    class: fn(
                                      r(u)
                                        ? "border-b-cmbrown"
                                        : "border-b-transparent"
                                    ),
                                  },
                                  [
                                    ce(
                                      l,
                                      { to: c.path },
                                      {
                                        default: bt(() => [
                                          j("h4", aA, At(c.name), 1),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["to"]
                                    ),
                                  ],
                                  2
                                )
                              ),
                              64
                            )),
                            j("li", null, [
                              j("div", lA, [
                                a[4] ||
                                  (a[4] = j(
                                    "a",
                                    {
                                      href: "https://www.linkedin.com/company/cm-project-management/",
                                      target: "_blank",
                                      "i-carbon-logo-linkedin": "",
                                      p4: "",
                                    },
                                    null,
                                    -1
                                  )),
                                a[5] ||
                                  (a[5] = j(
                                    "a",
                                    {
                                      href: "https://www.instagram.com/cmpm_uae/",
                                      target: "_blank",
                                      "i-carbon-logo-instagram": "",
                                      p4: "",
                                    },
                                    null,
                                    -1
                                  )),
                                j(
                                  "button",
                                  {
                                    class: "text-light icon-btn !outline-none",
                                    title: Q(o)("button.toggle_dark"),
                                    onClick:
                                      a[1] ||
                                      (a[1] = (c) =>
                                        ("toggleDark" in i
                                          ? i.toggleDark
                                          : Q(Om))()),
                                  },
                                  a[3] ||
                                    (a[3] = [
                                      j(
                                        "div",
                                        { i: "carbon-sun dark:carbon-moon" },
                                        null,
                                        -1
                                      ),
                                    ]),
                                  8,
                                  cA
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]))
                    : lt("", !0),
                ]),
                _: 1,
              }
            ),
          ])
        );
      };
    },
  }),
  fA = Zs(uA, [["__scopeId", "data-v-f1531362"]]),
  dA = "/RICS.png",
  hA = {
    relative: "",
    "w-full": "",
    flex: "",
    "justify-end": "",
    "bg-white": "",
    "dark:bg-cmblue": "",
  },
  pA = {
    "animate-fade-in": "",
    class:
      "absolute left-0 top-0 z-9 m-auto w-full flex flex-col items-center justify-between px-5 lg:static lg:h-screen lg:min-h-150 lg:w-1/2",
  },
  mA = {
    class: "left-0 w-full justify-evenly pt8 text-2xl space-x-7 xl:text-2xl",
    hidden: "",
    "flex-wrap": "",
    "animate-fade-in": "",
    px2: "",
    "text-dark": "",
    lowercase: "",
    "lg:flex": "",
    "dark:text-light": "",
  },
  gA = { "transition-opacity": "", "hover:opacity-70": "" },
  yA = {
    "h-screen": "",
    flex: "",
    "flex-col": "",
    "items-center": "",
    "justify-center": "",
    "lg:max-w-80": "",
  },
  vA = ["src", "width", "height"],
  bA = {
    flex: "",
    "justify-center": "",
    pt5: "",
    "text-xl": "",
    "space-x-4": "",
  },
  _A = ["title"],
  wA = ["src", "width", "height"],
  EA = ["src", "width", "height"],
  SA = Me({
    __name: "TheHeader",
    setup(e) {
      const { height: t, width: n } = Fa(),
        r = pp(),
        { t: s } = Qs(),
        o = [
          { path: "/about", name: "about" },
          { path: "/services", name: "services" },
          { path: "/projects", name: "projects" },
          { path: "/insights", name: "insights" },
          { path: "/connect", name: "connect" },
        ];
      return (i, a) => {
        const l = Ys("Router-Link");
        return (
          ue(),
          fe("div", hA, [
            j("div", pA, [
              j("nav", mA, [
                (ue(),
                fe(
                  Ue,
                  null,
                  pi(o, (c, u) =>
                    ce(
                      l,
                      { key: u, p2: "", to: c.path },
                      { default: bt(() => [j("h4", gA, At(c.name), 1)]), _: 2 },
                      1032,
                      ["to"]
                    )
                  ),
                  64
                )),
              ]),
              j("div", yA, [
                j(
                  "img",
                  {
                    src: Q(r) ? "/logowhite.svg" : "/logo.svg",
                    width: Q(n) / 2,
                    height: Q(t),
                    "z-7": "",
                  },
                  null,
                  8,
                  vA
                ),
                j("div", bA, [
                  a[2] ||
                    (a[2] = j(
                      "a",
                      {
                        href: "https://www.linkedin.com/company/cm-project-management/",
                        target: "_blank",
                        "i-carbon-logo-linkedin": "",
                      },
                      null,
                      -1
                    )),
                  a[3] ||
                    (a[3] = j(
                      "a",
                      {
                        href: "https://www.instagram.com/cmpm_uae/",
                        target: "_blank",
                        "i-carbon-logo-instagram": "",
                      },
                      null,
                      -1
                    )),
                  j(
                    "button",
                    {
                      class: "icon-btn !outline-none",
                      title: Q(s)("button.toggle_dark"),
                      onClick:
                        a[0] ||
                        (a[0] = (c) =>
                          ("toggleDark" in i ? i.toggleDark : Q(Om))()),
                    },
                    a[1] ||
                      (a[1] = [
                        j(
                          "div",
                          { i: "carbon-sun dark:carbon-moon" },
                          null,
                          -1
                        ),
                      ]),
                    8,
                    _A
                  ),
                ]),
              ]),
              a[4] || (a[4] = j("div", { "w-full": "" }, null, -1)),
            ]),
            a[5] ||
              (a[5] = j(
                "div",
                {
                  class:
                    "bg-white/80 dark:bg-cmblue/80 lg:bg-white/10 lg:dark:bg-cmblue/40",
                  absolute: "",
                  "left-0": "",
                  "top-0": "",
                  "z-5": "",
                  "h-full": "",
                  "w-full": "",
                  flex: "",
                  "animate-fade-in": "",
                  "items-end": "",
                  "justify-center": "",
                  "lg:min-h-150": "",
                  "lg:items-start": "",
                  "lg:justify-end": "",
                },
                [
                  j("img", {
                    "max-w-50": "",
                    "p-r-6": "",
                    grayscale: "",
                    "lg:p-r-0": "",
                    "dark:brightness-300": "",
                    src: dA,
                  }),
                ],
                -1
              )),
            Q(n) < 768
              ? (ue(),
                fe(
                  "img",
                  {
                    key: 0,
                    "object-fit": "",
                    "object-cover": "",
                    "object-center": "",
                    class:
                      "h-screen max-h-screen w-screen lg:min-h-150 lg:w-1/2",
                    src: Q(r)
                      ? "/header4_small.webp"
                      : "/headerimg2_small.webp",
                    width: Q(r) ? "305" : "322",
                    height: Q(r) ? "457" : "572",
                  },
                  null,
                  8,
                  wA
                ))
              : (ue(),
                fe(
                  "img",
                  {
                    key: 1,
                    "object-fit": "",
                    "object-cover": "",
                    "object-center": "",
                    class:
                      "h-screen max-h-screen w-screen lg:min-h-150 lg:w-1/2",
                    src: Q(r) ? "/header4.webp" : "/headerimg2.webp",
                    width: Q(r) ? "1104" : "1008",
                    height: Q(r) ? "1655" : "1794",
                  },
                  null,
                  8,
                  EA
                )),
          ])
        );
      };
    },
  }),
  CA = { class: "" },
  TA = { class: "relative flex flex-col" },
  OA = { class: "" },
  Um = Me({
    name: "IndexPage",
    __name: "index",
    setup(e) {
      return (t, n) => {
        const r = SA,
          s = fA,
          o = Q1,
          i = k1,
          a = IS,
          l = _S;
        return (
          ue(),
          fe("div", CA, [
            j("header", TA, [ce(r), ce(s, { class: "!flex !lg:hidden" })]),
            j("main", OA, [ce(o), ce(i), ce(a), ce(l)]),
          ])
        );
      };
    },
  }),
  Vf = {};
typeof Vf == "function" && Vf(Um);
const AA = Zs(Um, [["__scopeId", "data-v-9c66bda1"]]),
  IA = () => _e(() => import("./index-BIWrjp-q.js"), __vite__mapDeps([0, 1])),
  xA = () => _e(() => import("./index-DDlJCxAb.js"), []),
  kA = () =>
    _e(() => import("./services-DfFiQN0o.js"), __vite__mapDeps([2, 3])),
  PA = () => _e(() => import("./connect-9vymPZLj.js"), []),
  RA = () => _e(() => import("./about-CNNFP8Qw.js"), __vite__mapDeps([4, 5])),
  LA = () => _e(() => import("./_...all_-CLRtuJiW.js"), []),
  NA = () => _e(() => import("./_id_-6nlkcNrG.js"), __vite__mapDeps([6, 7, 8])),
  DA = () =>
    _e(() => import("./_id_-Che2wL-A.js"), __vite__mapDeps([9, 7, 8, 10])),
  MA = [
    {
      name: "projects",
      path: "/projects",
      component: IA,
      props: !0,
      meta: { layout: "default" },
    },
    { name: "insights", path: "/insights", component: xA, props: !0 },
    { name: "services", path: "/services", component: kA, props: !0 },
    {
      name: "index",
      path: "/",
      component: AA,
      props: !0,
      meta: { layout: "home" },
    },
    { name: "connect", path: "/connect", component: PA, props: !0 },
    { name: "about", path: "/about", component: RA, props: !0 },
    {
      name: "all",
      path: "/:all(.*)*",
      component: LA,
      props: !0,
      meta: { layout: 404 },
    },
    { name: "insights-id", path: "/insights/:id", component: NA, props: !0 },
    {
      name: "projects-id",
      path: "/projects/:id",
      component: DA,
      props: !0,
      meta: { layout: "default" },
    },
  ],
  $A = (e) => {
    const t = {};
    Object.entries(
      Object.assign({
        "/src/layouts/404.vue": () => _e(() => import("./404-BquHQhSa.js"), []),
        "/src/layouts/default.vue": () =>
          _e(
            () => import("./default-CNXKqEVd.js"),
            __vite__mapDeps([11, 12, 13])
          ),
        "/src/layouts/home.vue": () =>
          _e(() => import("./home-ScchTqaA.js"), __vite__mapDeps([14, 12])),
        "/src/layouts/projectlayout.vue": () =>
          _e(
            () => import("./projectlayout-D_FopD8K.js"),
            __vite__mapDeps([15, 12, 16])
          ),
      })
    ).forEach(([s, o]) => {
      let i = s.replace("/src/layouts/", "").replace(".vue", "");
      t[i] = o;
    });
    function r(s, o = !0) {
      return s.map((i) => {
        var a, l, c, u, f, h;
        if (
          (((a = i.children) == null ? void 0 : a.length) > 0 &&
            (i.children = r(i.children, !1)),
          o)
        ) {
          if (
            !i.component &&
            ((l = i.children) == null
              ? void 0
              : l.find((p) => {
                  var m;
                  return (
                    (p.path === "" || p.path === "/") &&
                    ((m = p.meta) == null ? void 0 : m.isLayout)
                  );
                }))
          )
            return i;
          if (((c = i.meta) == null ? void 0 : c.layout) !== !1)
            return {
              path: i.path,
              component:
                t[((u = i.meta) == null ? void 0 : u.layout) || "default"],
              children: i.path === "/" ? [i] : [{ ...i, path: "" }],
              meta: { isLayout: !0 },
            };
        }
        return (f = i.meta) != null && f.layout
          ? {
              path: i.path,
              component: t[(h = i.meta) == null ? void 0 : h.layout],
              children: [{ ...i, path: "" }],
              meta: { isLayout: !0 },
            }
          : i;
      });
    }
    return r(e);
  };
function Vm(e, t) {
  const n = [],
    r = t.resolveKeyData || ((o) => o.key),
    s = t.resolveValueData || ((o) => o.value);
  for (const [o, i] of Object.entries(e))
    n.push(
      ...(Array.isArray(i) ? i : [i])
        .map((a) => {
          const l = { key: o, value: a },
            c = s(l);
          return typeof c == "object"
            ? Vm(c, t)
            : Array.isArray(c)
            ? c
            : {
                [typeof t.key == "function" ? t.key(l) : t.key]: r(l),
                [typeof t.value == "function" ? t.value(l) : t.value]: c,
              };
        })
        .flat()
    );
  return n;
}
function Bm(e, t) {
  return Object.entries(e)
    .map(([n, r]) => {
      if ((typeof r == "object" && (r = Bm(r, t)), t.resolve)) {
        const s = t.resolve({ key: n, value: r });
        if (typeof s < "u") return s;
      }
      return (
        typeof r == "number" && (r = r.toString()),
        typeof r == "string" &&
          t.wrapValue &&
          ((r = r.replace(new RegExp(t.wrapValue, "g"), `\\${t.wrapValue}`)),
          (r = `${t.wrapValue}${r}${t.wrapValue}`)),
        `${n}${t.keyValueSeparator || ""}${r}`
      );
    })
    .join(t.entrySeparator || "");
}
const jA = new Set(["title", "titleTemplate", "script", "style", "noscript"]),
  Oo = new Set(["base", "meta", "link", "style", "script", "noscript"]),
  FA = new Set([
    "title",
    "titleTemplate",
    "templateParams",
    "base",
    "htmlAttrs",
    "bodyAttrs",
    "meta",
    "link",
    "style",
    "script",
    "noscript",
  ]),
  HA = new Set([
    "base",
    "title",
    "titleTemplate",
    "bodyAttrs",
    "htmlAttrs",
    "templateParams",
  ]),
  Wm = new Set([
    "tagPosition",
    "tagPriority",
    "tagDuplicateStrategy",
    "children",
    "innerHTML",
    "textContent",
    "processTemplateParams",
  ]),
  UA = typeof window < "u";
function Qo(e) {
  let t = 9;
  for (let n = 0; n < e.length; ) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
  return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase();
}
function za(e) {
  if (e._h) return e._h;
  if (e._d) return Qo(e._d);
  let t = `${e.tag}:${e.textContent || e.innerHTML || ""}:`;
  for (const n in e.props) t += `${n}:${String(e.props[n])},`;
  return Qo(t);
}
const ct = (e) => ({ keyValue: e, metaKey: "property" }),
  aa = (e) => ({ keyValue: e }),
  tc = {
    appleItunesApp: {
      unpack: {
        entrySeparator: ", ",
        resolve({ key: e, value: t }) {
          return `${ln(e)}=${t}`;
        },
      },
    },
    articleExpirationTime: ct("article:expiration_time"),
    articleModifiedTime: ct("article:modified_time"),
    articlePublishedTime: ct("article:published_time"),
    bookReleaseDate: ct("book:release_date"),
    charset: { metaKey: "charset" },
    contentSecurityPolicy: {
      unpack: {
        entrySeparator: "; ",
        resolve({ key: e, value: t }) {
          return `${ln(e)} ${t}`;
        },
      },
      metaKey: "http-equiv",
    },
    contentType: { metaKey: "http-equiv" },
    defaultStyle: { metaKey: "http-equiv" },
    fbAppId: ct("fb:app_id"),
    msapplicationConfig: aa("msapplication-Config"),
    msapplicationTileColor: aa("msapplication-TileColor"),
    msapplicationTileImage: aa("msapplication-TileImage"),
    ogAudioSecureUrl: ct("og:audio:secure_url"),
    ogAudioUrl: ct("og:audio"),
    ogImageSecureUrl: ct("og:image:secure_url"),
    ogImageUrl: ct("og:image"),
    ogSiteName: ct("og:site_name"),
    ogVideoSecureUrl: ct("og:video:secure_url"),
    ogVideoUrl: ct("og:video"),
    profileFirstName: ct("profile:first_name"),
    profileLastName: ct("profile:last_name"),
    profileUsername: ct("profile:username"),
    refresh: {
      metaKey: "http-equiv",
      unpack: {
        entrySeparator: ";",
        resolve({ key: e, value: t }) {
          if (e === "seconds") return `${t}`;
        },
      },
    },
    robots: {
      unpack: {
        entrySeparator: ", ",
        resolve({ key: e, value: t }) {
          return typeof t == "boolean" ? `${ln(e)}` : `${ln(e)}:${t}`;
        },
      },
    },
    xUaCompatible: { metaKey: "http-equiv" },
  },
  qm = new Set(["og", "book", "article", "profile"]);
function Km(e) {
  var r;
  const t = ln(e),
    n = t.indexOf(":");
  return qm.has(t.substring(0, n))
    ? "property"
    : ((r = tc[e]) == null ? void 0 : r.metaKey) || "name";
}
function VA(e) {
  var t;
  return ((t = tc[e]) == null ? void 0 : t.keyValue) || ln(e);
}
function ln(e) {
  const t = e.replace(/([A-Z])/g, "-$1").toLowerCase(),
    n = t.indexOf("-"),
    r = t.substring(0, n);
  return r === "twitter" || qm.has(r)
    ? e.replace(/([A-Z])/g, ":$1").toLowerCase()
    : t;
}
function Ya(e) {
  if (Array.isArray(e)) return e.map((n) => Ya(n));
  if (typeof e != "object" || Array.isArray(e)) return e;
  const t = {};
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && (t[ln(n)] = Ya(e[n]));
  return t;
}
function BA(e, t) {
  const n = tc[t];
  return t === "refresh"
    ? `${e.seconds};url=${e.url}`
    : Bm(Ya(e), {
        keyValueSeparator: "=",
        entrySeparator: ", ",
        resolve({ value: r, key: s }) {
          if (r === null) return "";
          if (typeof r == "boolean") return `${s}`;
        },
        ...(n == null ? void 0 : n.unpack),
      });
}
const Gm = new Set(["og:image", "og:video", "og:audio", "twitter:image"]);
function zm(e) {
  const t = {};
  for (const n in e) {
    if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
    const r = e[n];
    String(r) !== "false" && n && (t[n] = r);
  }
  return t;
}
function Bf(e, t) {
  const n = zm(t),
    r = ln(e),
    s = Km(r);
  if (Gm.has(r)) {
    const o = {};
    for (const i in n)
      Object.prototype.hasOwnProperty.call(n, i) &&
        (o[`${e}${i === "url" ? "" : `${i[0].toUpperCase()}${i.slice(1)}`}`] =
          n[i]);
    return nc(o).sort((i, a) => {
      var l, c;
      return (
        (((l = i[s]) == null ? void 0 : l.length) || 0) -
        (((c = a[s]) == null ? void 0 : c.length) || 0)
      );
    });
  }
  return [{ [s]: r, ...n }];
}
function nc(e) {
  const t = [],
    n = {};
  for (const s in e) {
    if (!Object.prototype.hasOwnProperty.call(e, s)) continue;
    const o = e[s];
    if (!Array.isArray(o)) {
      if (typeof o == "object" && o) {
        if (Gm.has(ln(s))) {
          t.push(...Bf(s, o));
          continue;
        }
        n[s] = zm(o);
      } else n[s] = o;
      continue;
    }
    for (const i of o)
      t.push(...(typeof i == "string" ? nc({ [s]: i }) : Bf(s, i)));
  }
  const r = Vm(n, {
    key({ key: s }) {
      return Km(s);
    },
    value({ key: s }) {
      return s === "charset" ? "charset" : "content";
    },
    resolveKeyData({ key: s }) {
      return VA(s);
    },
    resolveValueData({ value: s, key: o }) {
      return s === null
        ? "_null"
        : typeof s == "object"
        ? BA(s, o)
        : typeof s == "number"
        ? s.toString()
        : s;
    },
  });
  return [...t, ...r].map(
    (s) => (s.content === "_null" && (s.content = null), s)
  );
}
function WA(e, t) {
  return e instanceof Promise ? e.then(t) : t(e);
}
function Ja(e, t, n, r) {
  const s =
    r ||
    Jm(
      typeof t == "object" && typeof t != "function" && !(t instanceof Promise)
        ? { ...t }
        : {
            [e === "script" || e === "noscript" || e === "style"
              ? "innerHTML"
              : "textContent"]: t,
          },
      e === "templateParams" || e === "titleTemplate"
    );
  if (s instanceof Promise) return s.then((i) => Ja(e, t, n, i));
  const o = { tag: e, props: s };
  for (const i of Wm) {
    const a = o.props[i] !== void 0 ? o.props[i] : n[i];
    a !== void 0 &&
      ((!(i === "innerHTML" || i === "textContent" || i === "children") ||
        jA.has(o.tag)) &&
        (o[i === "children" ? "innerHTML" : i] = a),
      delete o.props[i]);
  }
  return (
    o.props.body && ((o.tagPosition = "bodyClose"), delete o.props.body),
    o.tag === "script" &&
      typeof o.innerHTML == "object" &&
      ((o.innerHTML = JSON.stringify(o.innerHTML)),
      (o.props.type = o.props.type || "application/json")),
    Array.isArray(o.props.content)
      ? o.props.content.map((i) => ({
          ...o,
          props: { ...o.props, content: i },
        }))
      : o
  );
}
function qA(e, t) {
  var r;
  const n = e === "class" ? " " : ";";
  return (
    t &&
      typeof t == "object" &&
      !Array.isArray(t) &&
      (t = Object.entries(t)
        .filter(([, s]) => s)
        .map(([s, o]) => (e === "style" ? `${s}:${o}` : s))),
    (r = String(Array.isArray(t) ? t.join(n) : t)) == null
      ? void 0
      : r
          .split(n)
          .filter((s) => !!s.trim())
          .join(n)
  );
}
function Ym(e, t, n, r) {
  for (let s = r; s < n.length; s += 1) {
    const o = n[s];
    if (o === "class" || o === "style") {
      e[o] = qA(o, e[o]);
      continue;
    }
    if (e[o] instanceof Promise)
      return e[o].then((i) => ((e[o] = i), Ym(e, t, n, s)));
    if (!t && !Wm.has(o)) {
      const i = String(e[o]),
        a = o.startsWith("data-");
      i === "true" || i === ""
        ? (e[o] = a ? "true" : !0)
        : e[o] || (a && i === "false" ? (e[o] = "false") : delete e[o]);
    }
  }
}
function Jm(e, t = !1) {
  const n = Ym(e, t, Object.keys(e), 0);
  return n instanceof Promise ? n.then(() => e) : e;
}
const KA = 10;
function Xm(e, t, n) {
  for (let r = n; r < t.length; r += 1) {
    const s = t[r];
    if (s instanceof Promise) return s.then((o) => ((t[r] = o), Xm(e, t, r)));
    Array.isArray(s) ? e.push(...s) : e.push(s);
  }
}
function GA(e) {
  const t = [],
    n = e.resolvedInput;
  for (const s in n) {
    if (!Object.prototype.hasOwnProperty.call(n, s)) continue;
    const o = n[s];
    if (!(o === void 0 || !FA.has(s))) {
      if (Array.isArray(o)) {
        for (const i of o) t.push(Ja(s, i, e));
        continue;
      }
      t.push(Ja(s, o, e));
    }
  }
  if (t.length === 0) return [];
  const r = [];
  return WA(Xm(r, t, 0), () =>
    r.map(
      (s, o) => (
        (s._e = e._i), e.mode && (s._m = e.mode), (s._p = (e._i << KA) + o), s
      )
    )
  );
}
const Wf = new Set([
    "onload",
    "onerror",
    "onabort",
    "onprogress",
    "onloadstart",
  ]),
  qf = { base: -10, title: 10 },
  Kf = { critical: -80, high: -10, low: 20 };
function Zo(e) {
  const t = e.tagPriority;
  if (typeof t == "number") return t;
  let n = 100;
  return (
    e.tag === "meta"
      ? e.props["http-equiv"] === "content-security-policy"
        ? (n = -30)
        : e.props.charset
        ? (n = -20)
        : e.props.name === "viewport" && (n = -15)
      : e.tag === "link" && e.props.rel === "preconnect"
      ? (n = 20)
      : e.tag in qf && (n = qf[e.tag]),
    t && t in Kf ? n + Kf[t] : n
  );
}
const zA = [
    { prefix: "before:", offset: -1 },
    { prefix: "after:", offset: 1 },
  ],
  YA = ["name", "property", "http-equiv"];
function Qm(e) {
  const { props: t, tag: n } = e;
  if (HA.has(n)) return n;
  if (n === "link" && t.rel === "canonical") return "canonical";
  if (t.charset) return "charset";
  if (t.id) return `${n}:id:${t.id}`;
  for (const r of YA) if (t[r] !== void 0) return `${n}:${r}:${t[r]}`;
  return !1;
}
const Tn = "%separator";
function JA(e, t, n = !1) {
  var s;
  let r;
  if (t === "s" || t === "pageTitle") r = e.pageTitle;
  else if (t.includes(".")) {
    const o = t.indexOf(".");
    r = (s = e[t.substring(0, o)]) == null ? void 0 : s[t.substring(o + 1)];
  } else r = e[t];
  if (r !== void 0) return n ? (r || "").replace(/"/g, '\\"') : r || "";
}
const XA = new RegExp(`${Tn}(?:\\s*${Tn})*`, "g");
function bo(e, t, n, r = !1) {
  if (typeof e != "string" || !e.includes("%")) return e;
  let s = e;
  try {
    s = decodeURI(e);
  } catch {}
  const o = s.match(/%\w+(?:\.\w+)?/g);
  if (!o) return e;
  const i = e.includes(Tn);
  return (
    (e = e
      .replace(/%\w+(?:\.\w+)?/g, (a) => {
        if (a === Tn || !o.includes(a)) return a;
        const l = JA(t, a.slice(1), r);
        return l !== void 0 ? l : a;
      })
      .trim()),
    i &&
      (e.endsWith(Tn) && (e = e.slice(0, -Tn.length)),
      e.startsWith(Tn) && (e = e.slice(Tn.length)),
      (e = e.replace(XA, n).trim())),
    e
  );
}
function Gf(e, t) {
  return e == null ? t || null : typeof e == "function" ? e(t) : e;
}
async function QA(e, t = {}) {
  const n = t.document || e.resolvedOptions.document;
  if (!n || !e.dirty) return;
  const r = { shouldRender: !0, tags: [] };
  if ((await e.hooks.callHook("dom:beforeRender", r), !!r.shouldRender))
    return (
      e._domUpdatePromise ||
        (e._domUpdatePromise = new Promise(async (s) => {
          var f;
          const o = (await e.resolveTags()).map((h) => ({
            tag: h,
            id: Oo.has(h.tag) ? za(h) : h.tag,
            shouldRender: !0,
          }));
          let i = e._dom;
          if (!i) {
            i = { elMap: { htmlAttrs: n.documentElement, bodyAttrs: n.body } };
            const h = new Set();
            for (const d of ["body", "head"]) {
              const p = (f = n[d]) == null ? void 0 : f.children;
              for (const m of p) {
                const S = m.tagName.toLowerCase();
                if (!Oo.has(S)) continue;
                const b = {
                    tag: S,
                    props: await Jm(
                      m
                        .getAttributeNames()
                        .reduce(
                          (A, L) => ({ ...A, [L]: m.getAttribute(L) }),
                          {}
                        )
                    ),
                    innerHTML: m.innerHTML,
                  },
                  C = Qm(b);
                let y = C,
                  g = 1;
                for (; y && h.has(y); ) y = `${C}:${g++}`;
                y && ((b._d = y), h.add(y)),
                  (i.elMap[m.getAttribute("data-hid") || za(b)] = m);
              }
            }
          }
          (i.pendingSideEffects = { ...i.sideEffects }), (i.sideEffects = {});
          function a(h, d, p) {
            const m = `${h}:${d}`;
            (i.sideEffects[m] = p), delete i.pendingSideEffects[m];
          }
          function l({ id: h, $el: d, tag: p }) {
            const m = p.tag.endsWith("Attrs");
            if (
              ((i.elMap[h] = d),
              m ||
                (p.textContent &&
                  p.textContent !== d.textContent &&
                  (d.textContent = p.textContent),
                p.innerHTML &&
                  p.innerHTML !== d.innerHTML &&
                  (d.innerHTML = p.innerHTML),
                a(h, "el", () => {
                  var S;
                  (S = i.elMap[h]) == null || S.remove(), delete i.elMap[h];
                })),
              p._eventHandlers)
            )
              for (const S in p._eventHandlers)
                Object.prototype.hasOwnProperty.call(p._eventHandlers, S) &&
                  d.getAttribute(`data-${S}`) !== "" &&
                  ((p.tag === "bodyAttrs" ? n.defaultView : d).addEventListener(
                    S.substring(2),
                    p._eventHandlers[S].bind(d)
                  ),
                  d.setAttribute(`data-${S}`, ""));
            for (const S in p.props) {
              if (!Object.prototype.hasOwnProperty.call(p.props, S)) continue;
              const b = p.props[S],
                C = `attr:${S}`;
              if (S === "class") {
                if (!b) continue;
                for (const y of b.split(" "))
                  m && a(h, `${C}:${y}`, () => d.classList.remove(y)),
                    !d.classList.contains(y) && d.classList.add(y);
              } else if (S === "style") {
                if (!b) continue;
                for (const y of b.split(";")) {
                  const g = y.indexOf(":"),
                    A = y.substring(0, g).trim(),
                    L = y.substring(g + 1).trim();
                  a(h, `${C}:${A}`, () => {
                    d.style.removeProperty(A);
                  }),
                    d.style.setProperty(A, L);
                }
              } else
                d.getAttribute(S) !== b &&
                  d.setAttribute(S, b === !0 ? "" : String(b)),
                  m && a(h, C, () => d.removeAttribute(S));
            }
          }
          const c = [],
            u = { bodyClose: void 0, bodyOpen: void 0, head: void 0 };
          for (const h of o) {
            const { tag: d, shouldRender: p, id: m } = h;
            if (p) {
              if (d.tag === "title") {
                n.title = d.textContent;
                continue;
              }
              (h.$el = h.$el || i.elMap[m]),
                h.$el ? l(h) : Oo.has(d.tag) && c.push(h);
            }
          }
          for (const h of c) {
            const d = h.tag.tagPosition || "head";
            (h.$el = n.createElement(h.tag.tag)),
              l(h),
              (u[d] = u[d] || n.createDocumentFragment()),
              u[d].appendChild(h.$el);
          }
          for (const h of o) await e.hooks.callHook("dom:renderTag", h, n, a);
          u.head && n.head.appendChild(u.head),
            u.bodyOpen && n.body.insertBefore(u.bodyOpen, n.body.firstChild),
            u.bodyClose && n.body.appendChild(u.bodyClose);
          for (const h in i.pendingSideEffects) i.pendingSideEffects[h]();
          (e._dom = i),
            await e.hooks.callHook("dom:rendered", { renders: o }),
            s();
        }).finally(() => {
          (e._domUpdatePromise = void 0), (e.dirty = !1);
        })),
      e._domUpdatePromise
    );
}
function ZA(e, t = {}) {
  const n = t.delayFn || ((r) => setTimeout(r, 10));
  return (e._domDebouncedUpdatePromise =
    e._domDebouncedUpdatePromise ||
    new Promise((r) =>
      n(() =>
        QA(e, t).then(() => {
          delete e._domDebouncedUpdatePromise, r();
        })
      )
    ));
}
function eI(e) {
  return (t) => {
    var r, s;
    const n =
      ((s =
        (r = t.resolvedOptions.document) == null
          ? void 0
          : r.head.querySelector('script[id="unhead:payload"]')) == null
        ? void 0
        : s.innerHTML) || !1;
    return (
      n && t.push(JSON.parse(n)),
      {
        mode: "client",
        hooks: {
          "entries:updated": (o) => {
            ZA(o, e);
          },
        },
      }
    );
  };
}
function Xa(e, t = {}, n) {
  for (const r in e) {
    const s = e[r],
      o = n ? `${n}:${r}` : r;
    typeof s == "object" && s !== null
      ? Xa(s, t, o)
      : typeof s == "function" && (t[o] = s);
  }
  return t;
}
const tI = { run: (e) => e() },
  nI = () => tI,
  Zm = typeof console.createTask < "u" ? console.createTask : nI;
function rI(e, t) {
  const n = t.shift(),
    r = Zm(n);
  return e.reduce(
    (s, o) => s.then(() => r.run(() => o(...t))),
    Promise.resolve()
  );
}
function sI(e, t) {
  const n = t.shift(),
    r = Zm(n);
  return Promise.all(e.map((s) => r.run(() => s(...t))));
}
function la(e, t) {
  for (const n of [...e]) n(t);
}
class oI {
  constructor() {
    (this._hooks = {}),
      (this._before = void 0),
      (this._after = void 0),
      (this._deprecatedMessages = void 0),
      (this._deprecatedHooks = {}),
      (this.hook = this.hook.bind(this)),
      (this.callHook = this.callHook.bind(this)),
      (this.callHookWith = this.callHookWith.bind(this));
  }
  hook(t, n, r = {}) {
    if (!t || typeof n != "function") return () => {};
    const s = t;
    let o;
    for (; this._deprecatedHooks[t]; )
      (o = this._deprecatedHooks[t]), (t = o.to);
    if (o && !r.allowDeprecated) {
      let i = o.message;
      i ||
        (i =
          `${s} hook has been deprecated` +
          (o.to ? `, please use ${o.to}` : "")),
        this._deprecatedMessages || (this._deprecatedMessages = new Set()),
        this._deprecatedMessages.has(i) ||
          (console.warn(i), this._deprecatedMessages.add(i));
    }
    if (!n.name)
      try {
        Object.defineProperty(n, "name", {
          get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
          configurable: !0,
        });
      } catch {}
    return (
      (this._hooks[t] = this._hooks[t] || []),
      this._hooks[t].push(n),
      () => {
        n && (this.removeHook(t, n), (n = void 0));
      }
    );
  }
  hookOnce(t, n) {
    let r,
      s = (...o) => (
        typeof r == "function" && r(), (r = void 0), (s = void 0), n(...o)
      );
    return (r = this.hook(t, s)), r;
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const r = this._hooks[t].indexOf(n);
      r !== -1 && this._hooks[t].splice(r, 1),
        this._hooks[t].length === 0 && delete this._hooks[t];
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == "string" ? { to: n } : n;
    const r = this._hooks[t] || [];
    delete this._hooks[t];
    for (const s of r) this.hook(t, s);
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const n in t) this.deprecateHook(n, t[n]);
  }
  addHooks(t) {
    const n = Xa(t),
      r = Object.keys(n).map((s) => this.hook(s, n[s]));
    return () => {
      for (const s of r.splice(0, r.length)) s();
    };
  }
  removeHooks(t) {
    const n = Xa(t);
    for (const r in n) this.removeHook(r, n[r]);
  }
  removeAllHooks() {
    for (const t in this._hooks) delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(rI, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(sI, t, ...n);
  }
  callHookWith(t, n, ...r) {
    const s =
      this._before || this._after ? { name: n, args: r, context: {} } : void 0;
    this._before && la(this._before, s);
    const o = t(n in this._hooks ? [...this._hooks[n]] : [], r);
    return o instanceof Promise
      ? o.finally(() => {
          this._after && s && la(this._after, s);
        })
      : (this._after && s && la(this._after, s), o);
  }
  beforeEach(t) {
    return (
      (this._before = this._before || []),
      this._before.push(t),
      () => {
        if (this._before !== void 0) {
          const n = this._before.indexOf(t);
          n !== -1 && this._before.splice(n, 1);
        }
      }
    );
  }
  afterEach(t) {
    return (
      (this._after = this._after || []),
      this._after.push(t),
      () => {
        if (this._after !== void 0) {
          const n = this._after.indexOf(t);
          n !== -1 && this._after.splice(n, 1);
        }
      }
    );
  }
}
function iI() {
  return new oI();
}
const aI = new Set(["templateParams", "htmlAttrs", "bodyAttrs"]),
  lI = {
    hooks: {
      "tag:normalise": ({ tag: e }) => {
        e.props.hid && ((e.key = e.props.hid), delete e.props.hid),
          e.props.vmid && ((e.key = e.props.vmid), delete e.props.vmid),
          e.props.key && ((e.key = e.props.key), delete e.props.key);
        const t = Qm(e);
        t &&
          !t.startsWith("meta:og:") &&
          !t.startsWith("meta:twitter:") &&
          delete e.key;
        const n = t || (e.key ? `${e.tag}:${e.key}` : !1);
        n && (e._d = n);
      },
      "tags:resolve": (e) => {
        const t = Object.create(null);
        for (const r of e.tags) {
          const s = (r.key ? `${r.tag}:${r.key}` : r._d) || za(r),
            o = t[s];
          if (o) {
            let a = r == null ? void 0 : r.tagDuplicateStrategy;
            if ((!a && aI.has(r.tag) && (a = "merge"), a === "merge")) {
              const l = o.props;
              l.style &&
                r.props.style &&
                (l.style[l.style.length - 1] !== ";" && (l.style += ";"),
                (r.props.style = `${l.style} ${r.props.style}`)),
                l.class && r.props.class
                  ? (r.props.class = `${l.class} ${r.props.class}`)
                  : l.class && (r.props.class = l.class),
                (t[s].props = { ...l, ...r.props });
              continue;
            } else if (r._e === o._e) {
              (o._duped = o._duped || []),
                (r._d = `${o._d}:${o._duped.length + 1}`),
                o._duped.push(r);
              continue;
            } else if (Zo(r) > Zo(o)) continue;
          }
          if (
            !(
              r.innerHTML ||
              r.textContent ||
              Object.keys(r.props).length !== 0
            ) &&
            Oo.has(r.tag)
          ) {
            delete t[s];
            continue;
          }
          t[s] = r;
        }
        const n = [];
        for (const r in t) {
          const s = t[r],
            o = s._duped;
          n.push(s), o && (delete s._duped, n.push(...o));
        }
        (e.tags = n),
          (e.tags = e.tags.filter(
            (r) =>
              !(
                r.tag === "meta" &&
                (r.props.name || r.props.property) &&
                !r.props.content
              )
          ));
      },
    },
  },
  cI = new Set(["script", "link", "bodyAttrs"]),
  uI = (e) => ({
    hooks: {
      "tags:resolve": (t) => {
        for (const n of t.tags) {
          if (!cI.has(n.tag)) continue;
          const r = n.props;
          for (const s in r) {
            if (
              s[0] !== "o" ||
              s[1] !== "n" ||
              !Object.prototype.hasOwnProperty.call(r, s)
            )
              continue;
            const o = r[s];
            typeof o == "function" &&
              (e.ssr && Wf.has(s)
                ? (r[s] = `this.dataset.${s}fired = true`)
                : delete r[s],
              (n._eventHandlers = n._eventHandlers || {}),
              (n._eventHandlers[s] = o));
          }
          e.ssr &&
            n._eventHandlers &&
            (n.props.src || n.props.href) &&
            (n.key = n.key || Qo(n.props.src || n.props.href));
        }
      },
      "dom:renderTag": ({ $el: t, tag: n }) => {
        var s, o;
        const r = t == null ? void 0 : t.dataset;
        if (r)
          for (const i in r) {
            if (!i.endsWith("fired")) continue;
            const a = i.slice(0, -5);
            Wf.has(a) &&
              ((o = (s = n._eventHandlers) == null ? void 0 : s[a]) == null ||
                o.call(t, new Event(a.substring(2))));
          }
      },
    },
  }),
  fI = new Set(["link", "style", "script", "noscript"]),
  dI = {
    hooks: {
      "tag:normalise": ({ tag: e }) => {
        e.key && fI.has(e.tag) && (e.props["data-hid"] = e._h = Qo(e.key));
      },
    },
  },
  hI = {
    mode: "server",
    hooks: {
      "tags:beforeResolve": (e) => {
        const t = {};
        let n = !1;
        for (const r of e.tags)
          r._m !== "server" ||
            (r.tag !== "titleTemplate" &&
              r.tag !== "templateParams" &&
              r.tag !== "title") ||
            ((t[r.tag] =
              r.tag === "title" || r.tag === "titleTemplate"
                ? r.textContent
                : r.props),
            (n = !0));
        n &&
          e.tags.push({
            tag: "script",
            innerHTML: JSON.stringify(t),
            props: { id: "unhead:payload", type: "application/json" },
          });
      },
    },
  },
  pI = {
    hooks: {
      "tags:resolve": (e) => {
        var t;
        for (const n of e.tags)
          if (typeof n.tagPriority == "string")
            for (const { prefix: r, offset: s } of zA) {
              if (!n.tagPriority.startsWith(r)) continue;
              const o = n.tagPriority.substring(r.length),
                i =
                  (t = e.tags.find((a) => a._d === o)) == null ? void 0 : t._p;
              if (i !== void 0) {
                n._p = i + s;
                break;
              }
            }
        e.tags.sort((n, r) => {
          const s = Zo(n),
            o = Zo(r);
          return s < o ? -1 : s > o ? 1 : n._p - r._p;
        });
      },
    },
  },
  mI = { meta: "content", link: "href", htmlAttrs: "lang" },
  gI = ["innerHTML", "textContent"],
  yI = (e) => ({
    hooks: {
      "tags:resolve": (t) => {
        var i;
        const { tags: n } = t;
        let r;
        for (let a = 0; a < n.length; a += 1)
          n[a].tag === "templateParams" &&
            ((r = t.tags.splice(a, 1)[0].props), (a -= 1));
        const s = r || {},
          o = s.separator || "|";
        delete s.separator,
          (s.pageTitle = bo(
            s.pageTitle ||
              ((i = n.find((a) => a.tag === "title")) == null
                ? void 0
                : i.textContent) ||
              "",
            s,
            o
          ));
        for (const a of n) {
          if (a.processTemplateParams === !1) continue;
          const l = mI[a.tag];
          if (l && typeof a.props[l] == "string")
            a.props[l] = bo(a.props[l], s, o);
          else if (
            a.processTemplateParams ||
            a.tag === "titleTemplate" ||
            a.tag === "title"
          )
            for (const c of gI)
              typeof a[c] == "string" &&
                (a[c] = bo(
                  a[c],
                  s,
                  o,
                  a.tag === "script" && a.props.type.endsWith("json")
                ));
        }
        (e._templateParams = s), (e._separator = o);
      },
      "tags:afterResolve": ({ tags: t }) => {
        let n;
        for (let r = 0; r < t.length; r += 1) {
          const s = t[r];
          s.tag === "title" && s.processTemplateParams !== !1 && (n = s);
        }
        n != null &&
          n.textContent &&
          (n.textContent = bo(n.textContent, e._templateParams, e._separator));
      },
    },
  }),
  vI = {
    hooks: {
      "tags:resolve": (e) => {
        const { tags: t } = e;
        let n, r;
        for (let s = 0; s < t.length; s += 1) {
          const o = t[s];
          o.tag === "title" ? (n = o) : o.tag === "titleTemplate" && (r = o);
        }
        if (r && n) {
          const s = Gf(r.textContent, n.textContent);
          s !== null
            ? (n.textContent = s || n.textContent)
            : e.tags.splice(e.tags.indexOf(n), 1);
        } else if (r) {
          const s = Gf(r.textContent);
          s !== null && ((r.textContent = s), (r.tag = "title"), (r = void 0));
        }
        r && e.tags.splice(e.tags.indexOf(r), 1);
      },
    },
  },
  bI = {
    hooks: {
      "tags:afterResolve": (e) => {
        for (const t of e.tags)
          typeof t.innerHTML == "string" &&
            (t.innerHTML &&
            (t.props.type === "application/ld+json" ||
              t.props.type === "application/json")
              ? (t.innerHTML = t.innerHTML.replace(/</g, "\\u003C"))
              : (t.innerHTML = t.innerHTML.replace(
                  new RegExp(`</${t.tag}`, "g"),
                  `<\\/${t.tag}`
                )));
      },
    },
  };
let eg;
function _I(e = {}) {
  const t = wI(e);
  return t.use(eI()), (eg = t);
}
function zf(e, t) {
  return !e || (e === "server" && t) || (e === "client" && !t);
}
function wI(e = {}) {
  const t = iI();
  t.addHooks(e.hooks || {}),
    (e.document = e.document || (UA ? document : void 0));
  const n = !e.document,
    r = () => {
      (a.dirty = !0), t.callHook("entries:updated", a);
    };
  let s = 0,
    o = [];
  const i = [],
    a = {
      plugins: i,
      dirty: !1,
      resolvedOptions: e,
      hooks: t,
      headEntries() {
        return o;
      },
      use(l) {
        const c = typeof l == "function" ? l(a) : l;
        (!c.key || !i.some((u) => u.key === c.key)) &&
          (i.push(c), zf(c.mode, n) && t.addHooks(c.hooks || {}));
      },
      push(l, c) {
        c == null || delete c.head;
        const u = { _i: s++, input: l, ...c };
        return (
          zf(u.mode, n) && (o.push(u), r()),
          {
            dispose() {
              (o = o.filter((f) => f._i !== u._i)), r();
            },
            patch(f) {
              for (const h of o) h._i === u._i && (h.input = u.input = f);
              r();
            },
          }
        );
      },
      async resolveTags() {
        const l = { tags: [], entries: [...o] };
        await t.callHook("entries:resolve", l);
        for (const c of l.entries) {
          const u = c.resolvedInput || c.input;
          if (
            ((c.resolvedInput = await (c.transform ? c.transform(u) : u)),
            c.resolvedInput)
          )
            for (const f of await GA(c)) {
              const h = {
                tag: f,
                entry: c,
                resolvedOptions: a.resolvedOptions,
              };
              await t.callHook("tag:normalise", h), l.tags.push(h.tag);
            }
        }
        return (
          await t.callHook("tags:beforeResolve", l),
          await t.callHook("tags:resolve", l),
          await t.callHook("tags:afterResolve", l),
          l.tags
        );
      },
      ssr: n,
    };
  return (
    [
      lI,
      hI,
      uI,
      dI,
      pI,
      yI,
      vI,
      bI,
      ...((e == null ? void 0 : e.plugins) || []),
    ].forEach((l) => a.use(l)),
    a.hooks.callHook("init", a),
    a
  );
}
function EI() {
  return eg;
}
const SI = mh[0] === "3";
function CI(e) {
  return typeof e == "function" ? e() : Q(e);
}
function ei(e) {
  if (e instanceof Promise || e instanceof Date || e instanceof RegExp)
    return e;
  const t = CI(e);
  if (!e || !t) return t;
  if (Array.isArray(t)) return t.map((n) => ei(n));
  if (typeof t == "object") {
    const n = {};
    for (const r in t)
      if (Object.prototype.hasOwnProperty.call(t, r)) {
        if (r === "titleTemplate" || (r[0] === "o" && r[1] === "n")) {
          n[r] = Q(t[r]);
          continue;
        }
        n[r] = ei(t[r]);
      }
    return n;
  }
  return t;
}
const TI = {
    hooks: {
      "entries:resolve": (e) => {
        for (const t of e.entries) t.resolvedInput = ei(t.input);
      },
    },
  },
  tg = "usehead";
function OI(e) {
  return {
    install(n) {
      SI &&
        ((n.config.globalProperties.$unhead = e),
        (n.config.globalProperties.$head = e),
        n.provide(tg, e));
    },
  }.install;
}
function AI(e = {}) {
  e.domDelayFn = e.domDelayFn || ((n) => Un(() => setTimeout(() => n(), 0)));
  const t = _I(e);
  return t.use(TI), (t.install = OI(t)), t;
}
const Yf =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Jf = "__unhead_injection_handler__";
function II() {
  return Jf in Yf ? Yf[Jf]() : ze(tg) || EI();
}
function ng(e, t = {}) {
  const n = t.head || II();
  if (n) return n.ssr ? n.push(e, t) : xI(n, e, t);
}
function xI(e, t, n = {}) {
  const r = re(!1),
    s = re({});
  gl(() => {
    s.value = r.value ? {} : ei(t);
  });
  const o = e.push(s.value, n);
  return (
    Pe(s, (a) => {
      o.patch(a);
    }),
    Vn() &&
      (Br(() => {
        o.dispose();
      }),
      $d(() => {
        r.value = !0;
      }),
      Md(() => {
        r.value = !1;
      })),
    o
  );
}
function kI(e, t) {
  const { title: n, titleTemplate: r, ...s } = e;
  return ng(
    { title: n, titleTemplate: r, _flatMeta: s },
    {
      ...t,
      transform(o) {
        const i = nc({ ...o._flatMeta });
        return delete o._flatMeta, { ...o, meta: i };
      },
    }
  );
}
function PI(e) {
  return document.readyState === "loading"
    ? new Promise((t) => {
        document.addEventListener("DOMContentLoaded", () => t(e));
      })
    : Promise.resolve(e);
}
const RI = Me({
  setup(e, { slots: t }) {
    const n = re(!1);
    return (
      kt(() => (n.value = !0)),
      () =>
        n.value
          ? t.default && t.default({})
          : t.placeholder && t.placeholder({})
    );
  },
});
function LI(e) {
  try {
    return JSON.parse(e || "{}");
  } catch (t) {
    return console.error("[SSG] On state deserialization -", t, e), {};
  }
}
function NI(e, t, n, r = {}) {
  const {
      transformState: s,
      registerComponents: o = !0,
      useHead: i = !0,
      rootContainer: a = "#app",
    } = r,
    l = typeof window < "u";
  async function c(u = !1, f) {
    const h = u ? Pv(e) : Rv(e);
    let d;
    i && ((d = AI()), h.use(d));
    const p = tA({ history: u ? xO(t.base) : kO(t.base), ...t }),
      { routes: m } = t;
    o && h.component("ClientOnly", RI);
    const S = [],
      y = {
        app: h,
        head: d,
        isClient: l,
        router: p,
        routes: m,
        onSSRAppRendered: u ? () => {} : (P) => S.push(P),
        triggerOnSSRAppRendered: () => Promise.all(S.map((P) => P())),
        initialState: {},
        transformState: s,
        routePath: f,
      };
    u &&
      (await PI(),
      (y.initialState =
        (s == null ? void 0 : s(window.__INITIAL_STATE__ || {})) ||
        LI(window.__INITIAL_STATE__))),
      await (n == null ? void 0 : n(y)),
      h.use(p);
    let g,
      A = !0;
    if (
      (p.beforeEach((P, V, N) => {
        (A || (g && g === P.path)) &&
          ((A = !1), (g = P.path), (P.meta.state = y.initialState)),
          N();
      }),
      !u)
    ) {
      const P = y.routePath ?? "/";
      p.push(P),
        await p.isReady(),
        (y.initialState = p.currentRoute.value.meta.state || {});
    }
    const L = y.initialState;
    return { ...y, initialState: L };
  }
  return (
    l &&
      (async () => {
        const { app: u, router: f } = await c(!0);
        await f.isReady(), u.mount(a, !0);
      })(),
    c
  );
}
const rg = a0("cookieConsent", () => {
    const e = re(localStorage.getItem("cookieConsentAnalytics") === "true");
    gl(() => {
      e.value = localStorage.getItem("cookieConsentAnalytics") === "true";
    });
    const t = ye(() => e.value);
    function n() {
      (e.value = !0), localStorage.setItem("cookieConsentAnalytics", "true");
    }
    function r() {
      return localStorage.getItem("cookieConsentAnalytics") === "true";
    }
    return {
      consentGiven: e,
      giveConsent: n,
      getConsent: r,
      isConsentGiven: t,
    };
  }),
  DI = {
    key: 0,
    class:
      "fixed bottom-0 left-0 z-50 w-full flex items-center justify-evenly bg-white p-4 shadow-md drop-shadow dark:bg-gray-800",
  },
  MI = { class: "flex", "gap-2": "" },
  $I = Me({
    __name: "CookieBanner",
    setup(e) {
      const t = rg();
      function n() {
        t.giveConsent();
      }
      return (r, s) =>
        Q(t).consentGiven
          ? lt("", !0)
          : (ue(),
            fe("div", DI, [
              s[1] ||
                (s[1] = j(
                  "div",
                  { class: "text-gray-700 dark:text-gray-300" },
                  [
                    j(
                      "p",
                      null,
                      " We use cookies to improve your browsing experience and analyze site traffic. By using this site, you consent to our use of cookies. "
                    ),
                  ],
                  -1
                )),
              j("div", MI, [
                j(
                  "button",
                  {
                    class:
                      "rounded bg-blue-500 px-4 py-2 text-white font-bold hover:bg-blue-700",
                    onClick: s[0] || (s[0] = (o) => n()),
                  },
                  " Accept "
                ),
              ]),
            ]));
    },
  }),
  jI = Me({
    __name: "App",
    setup(e) {
      ng({
        title: "CM Project Management",
        meta: [
          {
            name: "description",
            content: "Construction Project Management based in Dubai ",
          },
          {
            name: "theme-color",
            content: ye(() => (Tm.value ? "#121d29" : "#ab705a")),
          },
        ],
        link: [
          {
            rel: "icon",
            type: "image/svg+xml",
            href: ye(() =>
              Z1.value ? "/logo_notext.svg" : "/logo_notext_dark.svg"
            ),
          },
        ],
      }),
        kI({
          title: "CM Project Management",
          description:
            "We are a Construction Project Management Firm based in Dubai.",
          ogDescription:
            "We are a Construction Project Management Firm based in Dubai.",
          ogTitle: "CM Project Management",
        });
      const t = rg();
      return (n, r) => {
        const s = Ys("RouterView"),
          o = $I;
        return (
          ue(),
          fe(
            Ue,
            null,
            [ce(s), Q(t).getConsent() ? lt("", !0) : (ue(), No(o, { key: 0 }))],
            64
          )
        );
      };
    },
  }),
  FI = $A(MA);
function HI(e, t, n) {
  return e.hash
    ? { el: e.hash, top: 100, behavior: "smooth" }
    : n
    ? new Promise((r) => {
        setTimeout(() => {
          r(n);
        }, 500);
      })
    : new Promise((r) => {
        setTimeout(() => {
          r({ top: 0, behaviour: "smooth" });
        }, 500);
      });
}
NI(jI, { routes: FI, scrollBehavior: HI, base: "/" }, (e) => {
  Object.values(
    Object.assign({
      "./modules/gtag.ts": jv,
      "./modules/i18n.ts": X_,
      "./modules/nprogress.ts": e0,
      "./modules/pinia.ts": c0,
      "./modules/pwa.ts": f0,
    })
  ).forEach((t) => {
    var n;
    return (n = t.install) == null ? void 0 : n.call(t, e);
  });
});
export {
  Bt as A,
  vS as B,
  dA as C,
  Qs as D,
  rA as E,
  Ue as F,
  GI as G,
  zI as H,
  R1 as I,
  YI as J,
  Uh as K,
  Hh as L,
  Xs as M,
  XI as N,
  fA as O,
  Tm as P,
  Om as Q,
  BI as R,
  qI as S,
  vh as T,
  _e as _,
  pi as a,
  No as b,
  fe as c,
  Me as d,
  j as e,
  kI as f,
  re as g,
  kt as h,
  ce as i,
  as as j,
  fn as k,
  Q as l,
  JI as m,
  ai as n,
  ue as o,
  Zs as p,
  Vf as q,
  Ys as r,
  ye as s,
  At as t,
  ng as u,
  Pe as v,
  bt as w,
  xS as x,
  lt as y,
  KI as z,
};
