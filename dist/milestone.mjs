(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.cdx-milestone{margin:0;position:relative;display:grid;grid-template-columns:minmax(280px,1fr) minmax(220px,320px);gap:8px 12px;align-items:start;border:1px solid var(--milestone-border, #bae6fd);background:var(--milestone-bg, #f0f9ff);border-radius:10px;padding:10px 12px 12px;--milestone-accent: #0284c7;--milestone-text: #0f172a;--milestone-muted: #475569;--milestone-focus-ring: rgba(2, 132, 199, .25);--milestone-chip-bg: #e0f2fe;--milestone-chip-border: #7dd3fc}.cdx-milestone--warning{--milestone-accent: #d946ef;--milestone-bg: #fdf4ff;--milestone-border: #f5d0fe}.cdx-milestone--danger{--milestone-accent: #ef4444;--milestone-bg: #fef2f2;--milestone-border: #fee2e2}.cdx-milestone--critical{--milestone-accent: #ef4444;--milestone-bg: #fef2f2;--milestone-border: #fee2e2;animation:cdx-milestone-flash 1.5s infinite}@keyframes cdx-milestone-flash{0%,to{background:var(--milestone-bg);border-color:var(--milestone-border)}50%{background:#fee2e2;border-color:#ef4444;box-shadow:0 0 8px #ef444433}}.cdx-milestone:before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;border-radius:10px 0 0 10px;background:var(--milestone-accent)}.cdx-milestone__item{display:flex;align-items:baseline;gap:8px;min-width:0}.cdx-milestone__label{display:inline-flex;align-items:center;gap:6px;color:var(--milestone-muted);font-size:12px;line-height:1.4;white-space:nowrap;flex:0 0 auto;-webkit-user-select:none;user-select:none}.cdx-milestone__label-icon{width:14px;height:14px;display:inline-flex;align-items:center;justify-content:center;color:var(--milestone-accent)}.cdx-milestone__value{position:relative;flex:1 1 auto;min-width:60px;min-height:22px;padding:0 2px 2px;border:none!important;border-bottom:1px solid rgba(2,132,199,.35)!important;border-radius:0!important;background:transparent!important;box-shadow:none!important;outline:none;line-height:1.5;color:var(--milestone-text)}.cdx-milestone__value--invalid{border-bottom-color:#ef4444!important;color:#ef4444!important}.cdx-milestone__value[contentEditable=true][data-placeholder]:before{position:absolute;left:2px;bottom:2px;content:attr(data-placeholder);color:#475569b3;opacity:0;pointer-events:none}.cdx-milestone__value[contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-milestone__value[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-milestone__value[contentEditable=true]:focus{border-bottom-color:var(--milestone-accent)!important;box-shadow:0 2px #0284c72e}.cdx-milestone__chip-btn{flex:0 0 auto;border:1px solid var(--milestone-chip-border);background:var(--milestone-chip-bg);color:#075985;border-radius:999px;padding:2px 8px;font-size:12px;line-height:1.4;cursor:pointer;-webkit-user-select:none;user-select:none}.cdx-milestone__chip-btn:hover{background:#bae6fd;border-color:#38bdf8}.cdx-milestone__chip-btn.is-active{background:#bae6fd;border-color:#0284c7;color:#0369a1;box-shadow:inset 0 2px 4px #0000000d}.cdx-milestone__chip-btn:focus-visible{outline:none;box-shadow:0 0 0 3px var(--milestone-focus-ring)}.cdx-milestone__chooser{position:absolute;left:12px;right:12px;top:85px;z-index:1000;background:#ffffff;border:1px solid #cbd5e1;box-shadow:0 10px 25px -5px #0000001a,0 8px 10px -6px #0000001a;border-radius:8px;padding:10px 10px 8px;max-height:min(420px,50vh);overflow-y:auto;overflow-x:hidden;display:none;scrollbar-width:thin;scrollbar-color:#cbd5e1 transparent}.cdx-milestone.is-active{z-index:100}.cdx-milestone__chooser::-webkit-scrollbar{width:5px}.cdx-milestone__chooser::-webkit-scrollbar-track{background:transparent}.cdx-milestone__chooser::-webkit-scrollbar-thumb{background-color:#cbd5e1;border-radius:10px}.cdx-milestone__chooser.is-open{display:block}.cdx-milestone__chooser[data-mode=project] .cdx-milestone__chooser-input,.cdx-milestone__chooser[data-mode=project] .cdx-milestone__chooser-close,.cdx-milestone__chooser[data-mode=people] .cdx-milestone__chooser-input,.cdx-milestone__chooser[data-mode=people] .cdx-milestone__chooser-footer{display:none}.cdx-milestone__chooser[data-mode=project] .cdx-milestone__chooser-list,.cdx-milestone__chooser[data-mode=people] .cdx-milestone__chooser-list{display:flex;flex-wrap:wrap;gap:6px 8px}.cdx-milestone__chooser[data-mode=project] .cdx-milestone__chooser-item,.cdx-milestone__chooser[data-mode=people] .cdx-milestone__chooser-item{width:fit-content;max-width:100%;display:inline-flex;align-items:center;white-space:nowrap;overflow:visible;text-overflow:unset}.cdx-milestone__chooser-header{display:flex;gap:8px;align-items:center;margin-bottom:8px}.cdx-milestone__chooser-title{font-size:12px;font-weight:700;color:#0f172a;-webkit-user-select:none;user-select:none}.cdx-milestone__chooser-spacer{flex:1}.cdx-milestone__chooser-input{flex:1;min-width:140px;font-size:13px;padding:6px 8px;border-radius:6px;border:1px solid #d3d9e2}.cdx-milestone__chooser-close{border:1px solid #e2e8f0;background:#f8fafc;color:#334155;border-radius:8px;padding:4px 10px;font-size:12px;cursor:pointer}.cdx-milestone__chooser-list{display:grid;grid-template-columns:repeat(4,minmax(160px,1fr));gap:6px 8px}.cdx-milestone__chooser-item{border:1px solid #e2e8f0;background:#ffffff;border-radius:8px;padding:6px 8px;cursor:pointer;font-size:13px;line-height:1.4;color:#0f172a;-webkit-user-select:none;user-select:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cdx-milestone__chooser-item:hover{background:#f1f5f9}.cdx-milestone__chooser-item.is-selected{border-color:#38bdf8;background:#e0f2fe}.cdx-milestone__chooser-footer{display:flex;justify-content:flex-end;gap:8px;margin-top:10px}.cdx-milestone__btn{font-size:12px;line-height:1.4;padding:6px 12px;border-radius:8px;border:1px solid #d3d9e2;background:#ffffff;cursor:pointer}.cdx-milestone__btn.primary{border-color:#38bdf8;background:#0284c7;color:#fff}.cdx-milestone__hint{grid-column:1 / -1;color:#64748b;font-size:12px;line-height:1.4;-webkit-user-select:none;user-select:none}@media (max-width: 1100px){.cdx-milestone{grid-template-columns:minmax(260px,1fr) minmax(220px,300px)}}@media (max-width: 820px){.cdx-milestone{grid-template-columns:1fr}.cdx-milestone__chooser-list{grid-template-columns:repeat(2,minmax(160px,1fr))}}@media (max-width: 560px){.cdx-milestone,.cdx-milestone__chooser-list{grid-template-columns:1fr}}')),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
const He = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>', le = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M11.8197 6.04369C11.8924 5.8925 12.1076 5.8925 12.1803 6.04369L13.9776 9.78496C14.0068 9.84564 14.0645 9.88759 14.1312 9.89657L18.2448 10.4498C18.411 10.4722 18.4776 10.6769 18.3562 10.7927L15.3535 13.6582C15.3048 13.7047 15.2827 13.7726 15.2948 13.8388L16.0398 17.922C16.0699 18.087 15.8957 18.2136 15.7481 18.1339L12 16.1124L8.25192 18.1339C8.10429 18.2136 7.93012 18.087 7.96022 17.922L8.7052 13.8388C8.71728 13.7726 8.69523 13.7047 8.64652 13.6582L5.64378 10.7927C5.52244 10.6769 5.58896 10.4722 5.7552 10.4498L9.86876 9.89657C9.93549 9.88759 9.99322 9.84564 10.0224 9.78496L11.8197 6.04369Z"/></svg>', Re = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>', We = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M12 10C12.7145 10 13.239 9.56559 13.5392 9.11536C13.844 8.65814 14 8.0841 14 7.5C14 6.9159 13.844 6.34186 13.5392 5.88464C13.239 5.43441 12.7145 5 12 5C11.2855 5 10.761 5.43441 10.4608 5.88464C10.156 6.34186 10 6.9159 10 7.5C10 8.0841 10.156 8.65814 10.4608 9.11536C10.761 9.56559 11.2855 10 12 10Z"/><ellipse cx="12" cy="16" stroke="currentColor" stroke-width="2" rx="3" ry="5" transform="rotate(-90 12 16)"/></svg>';
var _ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ue(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function i() {
      return this instanceof i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(i) {
    var s = Object.getOwnPropertyDescriptor(e, i);
    Object.defineProperty(n, i, s.get ? s : {
      enumerable: !0,
      get: function() {
        return e[i];
      }
    });
  }), n;
}
var c = {}, T = {}, w = {};
Object.defineProperty(w, "__esModule", { value: !0 });
w.allInputsSelector = qe;
function qe() {
  var e = ["text", "password", "email", "number", "search", "tel", "url"];
  return "[contenteditable=true], textarea, input:not([type]), " + e.map(function(t) {
    return 'input[type="'.concat(t, '"]');
  }).join(", ");
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.allInputsSelector = void 0;
  var t = w;
  Object.defineProperty(e, "allInputsSelector", { enumerable: !0, get: function() {
    return t.allInputsSelector;
  } });
})(T);
var h = {}, M = {};
Object.defineProperty(M, "__esModule", { value: !0 });
M.isNativeInput = Ve;
function Ve(e) {
  var t = [
    "INPUT",
    "TEXTAREA"
  ];
  return e && e.tagName ? t.includes(e.tagName) : !1;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isNativeInput = void 0;
  var t = M;
  Object.defineProperty(e, "isNativeInput", { enumerable: !0, get: function() {
    return t.isNativeInput;
  } });
})(h);
var ce = {}, k = {};
Object.defineProperty(k, "__esModule", { value: !0 });
k.append = ze;
function ze(e, t) {
  Array.isArray(t) ? t.forEach(function(n) {
    e.appendChild(n);
  }) : e.appendChild(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.append = void 0;
  var t = k;
  Object.defineProperty(e, "append", { enumerable: !0, get: function() {
    return t.append;
  } });
})(ce);
var S = {}, I = {};
Object.defineProperty(I, "__esModule", { value: !0 });
I.blockElements = Ye;
function Ye() {
  return [
    "address",
    "article",
    "aside",
    "blockquote",
    "canvas",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "noscript",
    "ol",
    "output",
    "p",
    "pre",
    "ruby",
    "section",
    "table",
    "tbody",
    "thead",
    "tr",
    "tfoot",
    "ul",
    "video"
  ];
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.blockElements = void 0;
  var t = I;
  Object.defineProperty(e, "blockElements", { enumerable: !0, get: function() {
    return t.blockElements;
  } });
})(S);
var ue = {}, N = {};
Object.defineProperty(N, "__esModule", { value: !0 });
N.calculateBaseline = Ke;
function Ke(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.fontSize), i = parseFloat(t.lineHeight) || n * 1.2, s = parseFloat(t.paddingTop), r = parseFloat(t.borderTopWidth), o = parseFloat(t.marginTop), l = n * 0.8, u = (i - n) / 2, a = o + r + s + u + l;
  return a;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.calculateBaseline = void 0;
  var t = N;
  Object.defineProperty(e, "calculateBaseline", { enumerable: !0, get: function() {
    return t.calculateBaseline;
  } });
})(ue);
var de = {}, B = {}, $ = {}, A = {};
Object.defineProperty(A, "__esModule", { value: !0 });
A.isContentEditable = Ge;
function Ge(e) {
  return e.contentEditable === "true";
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isContentEditable = void 0;
  var t = A;
  Object.defineProperty(e, "isContentEditable", { enumerable: !0, get: function() {
    return t.isContentEditable;
  } });
})($);
Object.defineProperty(B, "__esModule", { value: !0 });
B.canSetCaret = Ze;
var Qe = h, Xe = $;
function Ze(e) {
  var t = !0;
  if ((0, Qe.isNativeInput)(e))
    switch (e.type) {
      case "file":
      case "checkbox":
      case "radio":
      case "hidden":
      case "submit":
      case "button":
      case "image":
      case "reset":
        t = !1;
        break;
    }
  else
    t = (0, Xe.isContentEditable)(e);
  return t;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.canSetCaret = void 0;
  var t = B;
  Object.defineProperty(e, "canSetCaret", { enumerable: !0, get: function() {
    return t.canSetCaret;
  } });
})(de);
var E = {}, D = {};
function Je(e, t, n) {
  const i = n.value !== void 0 ? "value" : "get", s = n[i], r = `#${t}Cache`;
  if (n[i] = function(...o) {
    return this[r] === void 0 && (this[r] = s.apply(this, o)), this[r];
  }, i === "get" && n.set) {
    const o = n.set;
    n.set = function(l) {
      delete e[r], o.apply(this, l);
    };
  }
  return n;
}
function pe() {
  const e = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, t = Object.keys(e).find((n) => window.navigator.appVersion.toLowerCase().indexOf(n) !== -1);
  return t !== void 0 && (e[t] = !0), e;
}
function F(e) {
  return e != null && e !== "" && (typeof e != "object" || Object.keys(e).length > 0);
}
function xe(e) {
  return !F(e);
}
const et = () => typeof window < "u" && window.navigator !== null && F(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function tt(e) {
  const t = pe();
  return e = e.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, "+"), t.mac ? e = e.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : e = e.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), e;
}
function nt(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function it(e) {
  const t = document.createElement("div");
  t.style.position = "absolute", t.style.left = "-999px", t.style.bottom = "-999px", t.innerHTML = e, document.body.appendChild(t);
  const n = window.getSelection(), i = document.createRange();
  if (i.selectNode(t), n === null)
    throw new Error("Cannot copy text to clipboard");
  n.removeAllRanges(), n.addRange(i), document.execCommand("copy"), document.body.removeChild(t);
}
function rt(e, t, n) {
  let i;
  return (...s) => {
    const r = this, o = () => {
      i = void 0, n !== !0 && e.apply(r, s);
    }, l = n === !0 && i !== void 0;
    window.clearTimeout(i), i = window.setTimeout(o, t), l && e.apply(r, s);
  };
}
function f(e) {
  return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function st(e) {
  return f(e) === "boolean";
}
function fe(e) {
  return f(e) === "function" || f(e) === "asyncfunction";
}
function ot(e) {
  return fe(e) && /^\s*class\s+/.test(e.toString());
}
function lt(e) {
  return f(e) === "number";
}
function b(e) {
  return f(e) === "object";
}
function at(e) {
  return Promise.resolve(e) === e;
}
function ct(e) {
  return f(e) === "string";
}
function ut(e) {
  return f(e) === "undefined";
}
function j(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (b(e) && b(n))
    for (const i in n)
      b(n[i]) ? (e[i] === void 0 && Object.assign(e, { [i]: {} }), j(e[i], n[i])) : Object.assign(e, { [i]: n[i] });
  return j(e, ...t);
}
function dt(e, t, n) {
  const i = `«${t}» is deprecated and will be removed in the next major release. Please use the «${n}» instead.`;
  e && console.warn(i);
}
function pt(e) {
  try {
    return new URL(e).href;
  } catch {
  }
  return e.substring(0, 2) === "//" ? window.location.protocol + e : window.location.origin + e;
}
function ft(e) {
  return e > 47 && e < 58 || e === 32 || e === 13 || e === 229 || e > 64 && e < 91 || e > 95 && e < 112 || e > 185 && e < 193 || e > 218 && e < 223;
}
const ht = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191
}, mt = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
class vt {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   * @param operation - promise should be added to queue
   */
  add(t) {
    return new Promise((n, i) => {
      this.completed = this.completed.then(t).then(n).catch(i);
    });
  }
}
function gt(e, t, n = void 0) {
  let i, s, r, o = null, l = 0;
  n || (n = {});
  const u = function() {
    l = n.leading === !1 ? 0 : Date.now(), o = null, r = e.apply(i, s), o === null && (i = s = null);
  };
  return function() {
    const a = Date.now();
    !l && n.leading === !1 && (l = a);
    const d = t - (a - l);
    return i = this, s = arguments, d <= 0 || d > t ? (o && (clearTimeout(o), o = null), l = a, r = e.apply(i, s), o === null && (i = s = null)) : !o && n.trailing !== !1 && (o = setTimeout(u, d)), r;
  };
}
const yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PromiseQueue: vt,
  beautifyShortcut: tt,
  cacheable: Je,
  capitalize: nt,
  copyTextToClipboard: it,
  debounce: rt,
  deepMerge: j,
  deprecationAssert: dt,
  getUserOS: pe,
  getValidUrl: pt,
  isBoolean: st,
  isClass: ot,
  isEmpty: xe,
  isFunction: fe,
  isIosDevice: et,
  isNumber: lt,
  isObject: b,
  isPrintableKey: ft,
  isPromise: at,
  isString: ct,
  isUndefined: ut,
  keyCodes: ht,
  mouseButtons: mt,
  notEmpty: F,
  throttle: gt,
  typeOf: f
}, Symbol.toStringTag, { value: "Module" })), H = /* @__PURE__ */ Ue(yt);
Object.defineProperty(D, "__esModule", { value: !0 });
D.containsOnlyInlineElements = Et;
var bt = H, _t = S;
function Et(e) {
  var t;
  (0, bt.isString)(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
  var n = function(i) {
    return !(0, _t.blockElements)().includes(i.tagName.toLowerCase()) && Array.from(i.children).every(n);
  };
  return Array.from(t.children).every(n);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.containsOnlyInlineElements = void 0;
  var t = D;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return t.containsOnlyInlineElements;
  } });
})(E);
var he = {}, R = {}, P = {}, W = {};
Object.defineProperty(W, "__esModule", { value: !0 });
W.make = Pt;
function Pt(e, t, n) {
  var i;
  t === void 0 && (t = null), n === void 0 && (n = {});
  var s = document.createElement(e);
  if (Array.isArray(t)) {
    var r = t.filter(function(l) {
      return l !== void 0;
    });
    (i = s.classList).add.apply(i, r);
  } else
    t !== null && s.classList.add(t);
  for (var o in n)
    Object.prototype.hasOwnProperty.call(n, o) && (s[o] = n[o]);
  return s;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.make = void 0;
  var t = W;
  Object.defineProperty(e, "make", { enumerable: !0, get: function() {
    return t.make;
  } });
})(P);
Object.defineProperty(R, "__esModule", { value: !0 });
R.fragmentToString = Ot;
var Lt = P;
function Ot(e) {
  var t = (0, Lt.make)("div");
  return t.appendChild(e), t.innerHTML;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.fragmentToString = void 0;
  var t = R;
  Object.defineProperty(e, "fragmentToString", { enumerable: !0, get: function() {
    return t.fragmentToString;
  } });
})(he);
var me = {}, U = {};
Object.defineProperty(U, "__esModule", { value: !0 });
U.getContentLength = jt;
var Ct = h;
function jt(e) {
  var t, n;
  return (0, Ct.isNativeInput)(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : (n = (t = e.textContent) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getContentLength = void 0;
  var t = U;
  Object.defineProperty(e, "getContentLength", { enumerable: !0, get: function() {
    return t.getContentLength;
  } });
})(me);
var q = {}, V = {}, ae = _ && _.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var i = 0, s = t.length, r; i < s; i++)
      (r || !(i in t)) && (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
  return e.concat(r || Array.prototype.slice.call(t));
};
Object.defineProperty(V, "__esModule", { value: !0 });
V.getDeepestBlockElements = ve;
var Tt = E;
function ve(e) {
  return (0, Tt.containsOnlyInlineElements)(e) ? [e] : Array.from(e.children).reduce(function(t, n) {
    return ae(ae([], t, !0), ve(n), !0);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getDeepestBlockElements = void 0;
  var t = V;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return t.getDeepestBlockElements;
  } });
})(q);
var ge = {}, z = {}, L = {}, Y = {};
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.isLineBreakTag = wt;
function wt(e) {
  return [
    "BR",
    "WBR"
  ].includes(e.tagName);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isLineBreakTag = void 0;
  var t = Y;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: !0, get: function() {
    return t.isLineBreakTag;
  } });
})(L);
var O = {}, K = {};
Object.defineProperty(K, "__esModule", { value: !0 });
K.isSingleTag = Mt;
function Mt(e) {
  return [
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR"
  ].includes(e.tagName);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isSingleTag = void 0;
  var t = K;
  Object.defineProperty(e, "isSingleTag", { enumerable: !0, get: function() {
    return t.isSingleTag;
  } });
})(O);
Object.defineProperty(z, "__esModule", { value: !0 });
z.getDeepestNode = ye;
var kt = h, St = L, It = O;
function ye(e, t) {
  t === void 0 && (t = !1);
  var n = t ? "lastChild" : "firstChild", i = t ? "previousSibling" : "nextSibling";
  if (e.nodeType === Node.ELEMENT_NODE && e[n]) {
    var s = e[n];
    if ((0, It.isSingleTag)(s) && !(0, kt.isNativeInput)(s) && !(0, St.isLineBreakTag)(s))
      if (s[i])
        s = s[i];
      else if (s.parentNode !== null && s.parentNode[i])
        s = s.parentNode[i];
      else
        return s.parentNode;
    return ye(s, t);
  }
  return e;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getDeepestNode = void 0;
  var t = z;
  Object.defineProperty(e, "getDeepestNode", { enumerable: !0, get: function() {
    return t.getDeepestNode;
  } });
})(ge);
var be = {}, G = {}, g = _ && _.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var i = 0, s = t.length, r; i < s; i++)
      (r || !(i in t)) && (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
  return e.concat(r || Array.prototype.slice.call(t));
};
Object.defineProperty(G, "__esModule", { value: !0 });
G.findAllInputs = Dt;
var Nt = E, Bt = q, $t = T, At = h;
function Dt(e) {
  return Array.from(e.querySelectorAll((0, $t.allInputsSelector)())).reduce(function(t, n) {
    return (0, At.isNativeInput)(n) || (0, Nt.containsOnlyInlineElements)(n) ? g(g([], t, !0), [n], !1) : g(g([], t, !0), (0, Bt.getDeepestBlockElements)(n), !0);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.findAllInputs = void 0;
  var t = G;
  Object.defineProperty(e, "findAllInputs", { enumerable: !0, get: function() {
    return t.findAllInputs;
  } });
})(be);
var _e = {}, Q = {};
Object.defineProperty(Q, "__esModule", { value: !0 });
Q.isCollapsedWhitespaces = Ft;
function Ft(e) {
  return !/[^\t\n\r ]/.test(e);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isCollapsedWhitespaces = void 0;
  var t = Q;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return t.isCollapsedWhitespaces;
  } });
})(_e);
var X = {}, Z = {};
Object.defineProperty(Z, "__esModule", { value: !0 });
Z.isElement = Rt;
var Ht = H;
function Rt(e) {
  return (0, Ht.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.ELEMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isElement = void 0;
  var t = Z;
  Object.defineProperty(e, "isElement", { enumerable: !0, get: function() {
    return t.isElement;
  } });
})(X);
var Ee = {}, J = {}, x = {}, ee = {};
Object.defineProperty(ee, "__esModule", { value: !0 });
ee.isLeaf = Wt;
function Wt(e) {
  return e === null ? !1 : e.childNodes.length === 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isLeaf = void 0;
  var t = ee;
  Object.defineProperty(e, "isLeaf", { enumerable: !0, get: function() {
    return t.isLeaf;
  } });
})(x);
var te = {}, ne = {};
Object.defineProperty(ne, "__esModule", { value: !0 });
ne.isNodeEmpty = Yt;
var Ut = L, qt = X, Vt = h, zt = O;
function Yt(e, t) {
  var n = "";
  return (0, zt.isSingleTag)(e) && !(0, Ut.isLineBreakTag)(e) ? !1 : ((0, qt.isElement)(e) && (0, Vt.isNativeInput)(e) ? n = e.value : e.textContent !== null && (n = e.textContent.replace("​", "")), t !== void 0 && (n = n.replace(new RegExp(t, "g"), "")), n.trim().length === 0);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isNodeEmpty = void 0;
  var t = ne;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: !0, get: function() {
    return t.isNodeEmpty;
  } });
})(te);
Object.defineProperty(J, "__esModule", { value: !0 });
J.isEmpty = Qt;
var Kt = x, Gt = te;
function Qt(e, t) {
  e.normalize();
  for (var n = [e]; n.length > 0; ) {
    var i = n.shift();
    if (i) {
      if (e = i, (0, Kt.isLeaf)(e) && !(0, Gt.isNodeEmpty)(e, t))
        return !1;
      n.push.apply(n, Array.from(e.childNodes));
    }
  }
  return !0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isEmpty = void 0;
  var t = J;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return t.isEmpty;
  } });
})(Ee);
var Pe = {}, ie = {};
Object.defineProperty(ie, "__esModule", { value: !0 });
ie.isFragment = Zt;
var Xt = H;
function Zt(e) {
  return (0, Xt.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isFragment = void 0;
  var t = ie;
  Object.defineProperty(e, "isFragment", { enumerable: !0, get: function() {
    return t.isFragment;
  } });
})(Pe);
var Le = {}, re = {};
Object.defineProperty(re, "__esModule", { value: !0 });
re.isHTMLString = xt;
var Jt = P;
function xt(e) {
  var t = (0, Jt.make)("div");
  return t.innerHTML = e, t.childElementCount > 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isHTMLString = void 0;
  var t = re;
  Object.defineProperty(e, "isHTMLString", { enumerable: !0, get: function() {
    return t.isHTMLString;
  } });
})(Le);
var Oe = {}, se = {};
Object.defineProperty(se, "__esModule", { value: !0 });
se.offset = en;
function en(e) {
  var t = e.getBoundingClientRect(), n = window.pageXOffset || document.documentElement.scrollLeft, i = window.pageYOffset || document.documentElement.scrollTop, s = t.top + i, r = t.left + n;
  return {
    top: s,
    left: r,
    bottom: s + t.height,
    right: r + t.width
  };
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.offset = void 0;
  var t = se;
  Object.defineProperty(e, "offset", { enumerable: !0, get: function() {
    return t.offset;
  } });
})(Oe);
var Ce = {}, oe = {};
Object.defineProperty(oe, "__esModule", { value: !0 });
oe.prepend = tn;
function tn(e, t) {
  Array.isArray(t) ? (t = t.reverse(), t.forEach(function(n) {
    return e.prepend(n);
  })) : e.prepend(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.prepend = void 0;
  var t = oe;
  Object.defineProperty(e, "prepend", { enumerable: !0, get: function() {
    return t.prepend;
  } });
})(Ce);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.prepend = e.offset = e.make = e.isLineBreakTag = e.isSingleTag = e.isNodeEmpty = e.isLeaf = e.isHTMLString = e.isFragment = e.isEmpty = e.isElement = e.isContentEditable = e.isCollapsedWhitespaces = e.findAllInputs = e.isNativeInput = e.allInputsSelector = e.getDeepestNode = e.getDeepestBlockElements = e.getContentLength = e.fragmentToString = e.containsOnlyInlineElements = e.canSetCaret = e.calculateBaseline = e.blockElements = e.append = void 0;
  var t = T;
  Object.defineProperty(e, "allInputsSelector", { enumerable: !0, get: function() {
    return t.allInputsSelector;
  } });
  var n = h;
  Object.defineProperty(e, "isNativeInput", { enumerable: !0, get: function() {
    return n.isNativeInput;
  } });
  var i = ce;
  Object.defineProperty(e, "append", { enumerable: !0, get: function() {
    return i.append;
  } });
  var s = S;
  Object.defineProperty(e, "blockElements", { enumerable: !0, get: function() {
    return s.blockElements;
  } });
  var r = ue;
  Object.defineProperty(e, "calculateBaseline", { enumerable: !0, get: function() {
    return r.calculateBaseline;
  } });
  var o = de;
  Object.defineProperty(e, "canSetCaret", { enumerable: !0, get: function() {
    return o.canSetCaret;
  } });
  var l = E;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return l.containsOnlyInlineElements;
  } });
  var u = he;
  Object.defineProperty(e, "fragmentToString", { enumerable: !0, get: function() {
    return u.fragmentToString;
  } });
  var a = me;
  Object.defineProperty(e, "getContentLength", { enumerable: !0, get: function() {
    return a.getContentLength;
  } });
  var d = q;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return d.getDeepestBlockElements;
  } });
  var p = ge;
  Object.defineProperty(e, "getDeepestNode", { enumerable: !0, get: function() {
    return p.getDeepestNode;
  } });
  var m = be;
  Object.defineProperty(e, "findAllInputs", { enumerable: !0, get: function() {
    return m.findAllInputs;
  } });
  var je = _e;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return je.isCollapsedWhitespaces;
  } });
  var Te = $;
  Object.defineProperty(e, "isContentEditable", { enumerable: !0, get: function() {
    return Te.isContentEditable;
  } });
  var we = X;
  Object.defineProperty(e, "isElement", { enumerable: !0, get: function() {
    return we.isElement;
  } });
  var Me = Ee;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return Me.isEmpty;
  } });
  var ke = Pe;
  Object.defineProperty(e, "isFragment", { enumerable: !0, get: function() {
    return ke.isFragment;
  } });
  var Se = Le;
  Object.defineProperty(e, "isHTMLString", { enumerable: !0, get: function() {
    return Se.isHTMLString;
  } });
  var Ie = x;
  Object.defineProperty(e, "isLeaf", { enumerable: !0, get: function() {
    return Ie.isLeaf;
  } });
  var Ne = te;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: !0, get: function() {
    return Ne.isNodeEmpty;
  } });
  var Be = L;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: !0, get: function() {
    return Be.isLineBreakTag;
  } });
  var $e = O;
  Object.defineProperty(e, "isSingleTag", { enumerable: !0, get: function() {
    return $e.isSingleTag;
  } });
  var Ae = P;
  Object.defineProperty(e, "make", { enumerable: !0, get: function() {
    return Ae.make;
  } });
  var De = Oe;
  Object.defineProperty(e, "offset", { enumerable: !0, get: function() {
    return De.offset;
  } });
  var Fe = Ce;
  Object.defineProperty(e, "prepend", { enumerable: !0, get: function() {
    return Fe.prepend;
  } });
})(c);
function C(e) {
  const n = (typeof e == "string" ? e : "").replace(/\r\n/g, `
`);
  return n ? n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>") : "";
}
function v(e) {
  const t = e && typeof e.innerText == "string" ? e.innerText : "";
  return String(t || "").replace(/\u00A0/g, " ").trim();
}
function y(e) {
  const t = (e || "").trim();
  if (!t)
    return !0;
  const n = t.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!n)
    return !1;
  const i = parseInt(n[1], 10), s = parseInt(n[2], 10), r = parseInt(n[3], 10);
  if (s < 1 || s > 12)
    return !1;
  const o = new Date(i, s - 1, r);
  return o.getFullYear() === i && o.getMonth() === s - 1 && o.getDate() === r;
}
function nn(e) {
  const t = (e || "").trim();
  if (!t)
    return "";
  const n = t.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!n)
    return t;
  const [, i, s, r] = n;
  return `${i}-${s}-${r}`;
}
function rn(e) {
  const t = (e || "").trim();
  if (!t)
    return "";
  const n = t.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (n) {
    const [, i, s, r] = n;
    return `${i}-${s}-${r}`;
  }
  return "";
}
class sn {
  constructor({ data: t, config: n, api: i, readOnly: s, block: r }) {
    this.css = {
      wrapper: "cdx-milestone",
      item: "cdx-milestone__item",
      label: "cdx-milestone__label",
      labelIcon: "cdx-milestone__label-icon",
      value: "cdx-milestone__value",
      valueInvalid: "cdx-milestone__value--invalid",
      chipBtn: "cdx-milestone__chip-btn",
      chooser: "cdx-milestone__chooser",
      chooserHeader: "cdx-milestone__chooser-header",
      chooserTitle: "cdx-milestone__chooser-title",
      chooserSpacer: "cdx-milestone__chooser-spacer",
      chooserInput: "cdx-milestone__chooser-input",
      chooserClose: "cdx-milestone__chooser-close",
      chooserList: "cdx-milestone__chooser-list",
      chooserItem: "cdx-milestone__chooser-item",
      chooserFooter: "cdx-milestone__chooser-footer",
      btn: "cdx-milestone__btn",
      btnPrimary: "primary",
      hint: "cdx-milestone__hint"
    }, this.fieldEls = /* @__PURE__ */ new Map(), this.chooserMode = null, this.selectedPeople = /* @__PURE__ */ new Set(), this.selectedProject = null, this.lastChooserQueryTs = 0, this.peopleCache = null, this.peopleLoading = !1, this.api = i, this.readOnly = s, this.block = r, this.config = n || {};
    const o = (l) => typeof l == "string" ? l : "";
    this.data = {
      content: o(t && t.content),
      time: o(t && t.time),
      people: o(t && t.people),
      projectName: o(t && t.projectName)
    };
  }
  /**
   * Editor.js 只读模式支持声明：
   * - Editor.js 在切换 readOnly 时会校验“所有已连接工具”是否支持只读
   * - 若未声明，将导致 `To enable read-only mode... Tools milestone don't support read-only mode.`
   */
  static get isReadOnlySupported() {
    return !0;
  }
  static get toolbox() {
    return {
      title: "Milestone",
      icon: le
    };
  }
  static get sanitize() {
    return {
      content: { br: !0 },
      time: { br: !0 },
      people: { br: !0 },
      projectName: { br: !0 }
    };
  }
  render() {
    const t = c.make("div", [this.css.wrapper]);
    this.wrapper = t;
    const n = (r, o) => {
      const l = c.make("div", [this.css.label]), u = c.make("span", [this.css.labelIcon]);
      return u.innerHTML = o, l.appendChild(u), l.appendChild(document.createTextNode(r)), l;
    }, i = (r, o) => {
      const l = c.make("div", [this.css.value]);
      l.dataset.field = r, l.contentEditable = (!this.readOnly).toString(), l.setAttribute("data-placeholder", o), l.innerHTML = this.data[r] || "";
      const u = () => {
        if (r === "time") {
          const a = v(l);
          y(a) ? l.classList.remove(this.css.valueInvalid) : l.classList.add(this.css.valueInvalid), this.updateUrgency();
        }
      };
      return this.readOnly || (l.addEventListener("input", () => {
        this.data[r] = l.innerHTML, u();
      }), l.addEventListener("blur", () => {
        const a = v(l);
        this.data[r] = C(a), l.innerHTML = this.data[r] || "", u();
      })), u(), this.fieldEls.set(r, l), l;
    }, s = {
      content: this.api.i18n.t(this.config.contentPlaceholder || "节点内容"),
      time: this.api.i18n.t(this.config.timePlaceholder || "YYYY-MM-DD"),
      people: this.api.i18n.t(this.config.peoplePlaceholder || "相关人员"),
      projectName: this.api.i18n.t(this.config.projectNamePlaceholder || "项目名称")
    };
    {
      const r = c.make("div", [this.css.item]);
      r.appendChild(n(this.api.i18n.t("内容"), Re)), r.appendChild(i("content", s.content)), t.appendChild(r);
    }
    {
      const r = c.make("div", [this.css.item]);
      r.appendChild(n(this.api.i18n.t("时间"), He));
      const o = i("time", s.time);
      if (r.appendChild(o), !this.readOnly) {
        const l = c.make("div", [], {
          style: "position: relative; display: inline-flex; align-items: center; isolation: isolate;"
        }), u = c.make("button", [this.css.chipBtn], { type: "button" });
        u.textContent = this.api.i18n.t("选择");
        const a = document.createElement("input");
        a.type = "date", a.style.position = "absolute", a.style.top = "0", a.style.left = "0", a.style.width = "100%", a.style.height = "100%", a.style.opacity = "0", a.style.cursor = "pointer", a.style.zIndex = "2", a.setAttribute("aria-label", this.api.i18n.t("选择日期")), this.timePickerInput = a;
        const d = () => {
          try {
            const p = v(o), m = rn(p);
            m && (a.value = m);
          } catch {
          }
        };
        u.addEventListener("click", (p) => {
          p.preventDefault(), p.stopPropagation(), d();
          try {
            typeof a.showPicker == "function" ? a.showPicker() : a.click();
          } catch (m) {
            console.error("Failed to show picker:", m);
          }
        }), a.addEventListener("mousedown", d), a.addEventListener("touchstart", d), a.addEventListener("change", () => {
          const p = nn(a.value);
          p && this.setFieldFromText("time", p), a.value = "";
        }), l.appendChild(u), l.appendChild(a), r.appendChild(l);
      }
      t.appendChild(r);
    }
    {
      const r = c.make("div", [this.css.item]);
      if (r.appendChild(n(this.api.i18n.t("人员"), We)), r.appendChild(i("people", s.people)), !this.readOnly) {
        const o = c.make("button", [this.css.chipBtn], {
          type: "button"
        });
        this.peopleBtn = o, o.textContent = this.api.i18n.t("选择"), o.addEventListener("click", () => this.openPeopleChooser()), r.appendChild(o);
      }
      t.appendChild(r);
    }
    {
      const r = c.make("div", [this.css.item]);
      if (r.appendChild(n(this.api.i18n.t("项目"), le)), r.appendChild(i("projectName", s.projectName)), !this.readOnly) {
        const o = c.make("button", [this.css.chipBtn], {
          type: "button"
        });
        this.projectBtn = o, o.textContent = this.api.i18n.t("选择"), o.addEventListener("click", () => this.openProjectChooser()), r.appendChild(o);
      }
      t.appendChild(r);
    }
    if (!this.readOnly) {
      t.appendChild(this.buildChooser());
      const r = c.make("div", [this.css.hint]);
      r.textContent = this.api.i18n.t("提示：人员可多选；项目名称来自历史 milestone 块的全局查询。"), this.chooserHintEl = r, t.appendChild(r);
    }
    return t;
  }
  save() {
    const t = (n) => {
      const i = this.fieldEls.get(n);
      if (!i)
        return this.data[n] || "";
      const s = v(i);
      return C(s);
    };
    return {
      content: t("content"),
      time: t("time"),
      people: t("people"),
      projectName: t("projectName")
    };
  }
  validate(t) {
    if (!t || typeof t != "object")
      return !1;
    const n = (t.time || "").replace(/<[^>]+>/g, "").trim();
    return !(n && !y(n));
  }
  buildChooser() {
    const t = c.make("div", [this.css.chooser]);
    this.chooserEl = t;
    const n = c.make("div", [this.css.chooserHeader]), i = c.make("div", [this.css.chooserTitle]);
    i.textContent = this.api.i18n.t("选择"), this.chooserTitleEl = i;
    const s = c.make("input", [this.css.chooserInput], {
      type: "text",
      placeholder: this.api.i18n.t("搜索…")
    });
    this.chooserInputEl = s, s.addEventListener("input", () => {
      this.chooserMode === "people" ? this.renderPeopleList(this.getPeopleCache(), s.value) : this.chooserMode === "project" && this.queryAndRenderProjects(s.value);
    });
    const r = c.make("div", [this.css.chooserSpacer]);
    n.appendChild(i), n.appendChild(r), n.appendChild(s), t.appendChild(n);
    const o = c.make("div", [this.css.chooserList]);
    this.chooserListEl = o, t.appendChild(o);
    const l = c.make("div", [this.css.chooserFooter]);
    return this.chooserFooterEl = l, t.appendChild(l), t;
  }
  openChooser(t) {
    if (!(!this.chooserEl || !this.chooserInputEl || !this.chooserListEl || !this.chooserTitleEl || !this.chooserFooterEl)) {
      if (this.chooserMode === t) {
        this.closeChooser();
        return;
      }
      this.chooserMode = t, this.chooserEl.dataset.mode = t, this.chooserEl.classList.add("is-open"), this.updateBtnStates(), this.chooserInputEl.value = "", t === "people" || t === "project" || this.chooserInputEl.focus(), this.chooserHintEl && (this.chooserHintEl.style.display = t === "people" ? "" : "none"), t === "people" ? (this.chooserTitleEl.textContent = this.api.i18n.t("选择相关人员"), this.selectedPeople = this.parsePeopleToSet(this.save().people), this.selectedProject = null, this.renderPeopleFooter(), this.ensurePeopleLoaded()) : (this.chooserTitleEl.textContent = this.api.i18n.t("选择项目名称"), this.selectedProject = this.getTextFieldValue("projectName"), this.selectedPeople.clear(), this.renderProjectFooter(), this.queryAndRenderProjects(""));
    }
  }
  closeChooser() {
    if (this.chooserEl) {
      this.chooserEl.classList.remove("is-open");
      try {
        delete this.chooserEl.dataset.mode;
      } catch {
      }
      this.chooserMode = null, this.updateBtnStates();
    }
  }
  /**
   * 根据日期差值更新组件整体颜色状态
   */
  updateUrgency() {
    if (!this.wrapper)
      return;
    this.wrapper.classList.remove("cdx-milestone--warning", "cdx-milestone--danger", "cdx-milestone--critical");
    const t = this.fieldEls.get("time"), n = t ? v(t) : "";
    if (!n || !y(n))
      return;
    const i = n.split("-"), s = new Date(parseInt(i[0], 10), parseInt(i[1], 10) - 1, parseInt(i[2], 10)), r = /* @__PURE__ */ new Date();
    r.setHours(0, 0, 0, 0);
    const o = s.getTime() - r.getTime(), l = Math.ceil(o / (1e3 * 60 * 60 * 24));
    l <= 3 ? this.wrapper.classList.add("cdx-milestone--critical") : l <= 7 ? this.wrapper.classList.add("cdx-milestone--danger") : l <= 14 && this.wrapper.classList.add("cdx-milestone--warning");
  }
  updateBtnStates() {
    var t, n;
    this.chooserMode ? (t = this.wrapper) == null || t.classList.add("is-active") : (n = this.wrapper) == null || n.classList.remove("is-active"), this.peopleBtn && (this.chooserMode === "people" ? this.peopleBtn.classList.add("is-active") : this.peopleBtn.classList.remove("is-active")), this.projectBtn && (this.chooserMode === "project" ? this.projectBtn.classList.add("is-active") : this.projectBtn.classList.remove("is-active"));
  }
  openPeopleChooser() {
    this.openChooser("people");
  }
  openProjectChooser() {
    this.openChooser("project");
  }
  getTextFieldValue(t) {
    const n = this.fieldEls.get(t);
    return n ? v(n) : "";
  }
  setFieldFromText(t, n) {
    const i = this.fieldEls.get(t), s = C(n);
    this.data[t] = s, i && (i.innerHTML = s, t === "time" && (y(n) ? i.classList.remove(this.css.valueInvalid) : i.classList.add(this.css.valueInvalid), this.updateUrgency()));
  }
  getPeopleCache() {
    return Array.isArray(this.peopleCache) ? this.peopleCache : [];
  }
  async ensurePeopleLoaded() {
    if (this.peopleCache) {
      this.renderPeopleList(this.peopleCache, this.chooserInputEl ? this.chooserInputEl.value : "");
      return;
    }
    if (!this.peopleLoading) {
      this.peopleLoading = !0;
      try {
        if (!this.config.listPeople) {
          this.peopleCache = [], this.renderPeopleList([], "");
          return;
        }
        const t = await this.config.listPeople(), n = t && Array.isArray(t.users) ? t.users : [];
        this.peopleCache = n.filter((i) => i && typeof i.label == "string").map((i) => ({ id: Number(i.id), label: String(i.label).trim() })).filter((i) => Number.isFinite(i.id) && i.label.length > 0), this.renderPeopleList(this.peopleCache, this.chooserInputEl ? this.chooserInputEl.value : "");
      } catch {
        this.peopleCache = [], this.renderPeopleList([], "");
      } finally {
        this.peopleLoading = !1;
      }
    }
  }
  renderPeopleFooter() {
    this.chooserFooterEl && (this.chooserFooterEl.innerHTML = "");
  }
  renderPeopleList(t, n) {
    if (!this.chooserListEl)
      return;
    const i = (n || "").trim().toLowerCase(), s = t.filter((r) => i ? (r.label || "").toLowerCase().includes(i) : !0);
    if (this.chooserListEl.innerHTML = "", s.length === 0) {
      const r = c.make("div", [this.css.hint]);
      r.textContent = this.api.i18n.t("无可选人员"), this.chooserListEl.appendChild(r);
      return;
    }
    s.forEach((r) => {
      const o = c.make("div", [this.css.chooserItem]);
      o.textContent = r.label, this.selectedPeople.has(r.label) && o.classList.add("is-selected"), o.addEventListener("click", () => {
        this.selectedPeople.has(r.label) ? (this.selectedPeople.delete(r.label), o.classList.remove("is-selected")) : (this.selectedPeople.add(r.label), o.classList.add("is-selected"));
        const l = Array.from(this.selectedPeople.values()).filter(Boolean);
        this.setFieldFromText("people", l.join("、"));
      }), this.chooserListEl.appendChild(o);
    });
  }
  parsePeopleToSet(t) {
    const s = (t || "").replace(/<br\s*\/?>/gi, `
`).replace(/&nbsp;/gi, " ").replace(/<[^>]+>/g, "").split(/[,\n、;；]+/g).map((r) => r.trim()).filter(Boolean);
    return new Set(s);
  }
  // ---- Project ----
  renderProjectFooter() {
    this.chooserFooterEl && (this.chooserFooterEl.innerHTML = "");
  }
  async queryAndRenderProjects(t) {
    if (!this.chooserListEl)
      return;
    if (!this.config.queryBlocks) {
      this.chooserListEl.innerHTML = "";
      const s = c.make("div", [this.css.hint]);
      s.textContent = this.api.i18n.t("未配置项目查询接口"), this.chooserListEl.appendChild(s);
      return;
    }
    const n = Date.now();
    this.lastChooserQueryTs = n;
    const i = (t || "").trim();
    try {
      const s = await this.config.queryBlocks({
        type: "milestone",
        field: "projectName",
        q: i,
        limit: 200
      });
      if (this.lastChooserQueryTs !== n)
        return;
      const r = s && Array.isArray(s.items) ? s.items : [], o = [], l = /* @__PURE__ */ new Set();
      r.forEach((u) => {
        const d = (u && u.data && typeof u.data.projectName == "string" ? u.data.projectName : "").replace(/<br\s*\/?>/gi, `
`).replace(/&nbsp;/gi, " ").replace(/<[^>]+>/g, "").trim();
        d && (l.has(d) || (l.add(d), o.push(d)));
      }), this.renderProjectList(o, i);
    } catch {
      if (this.lastChooserQueryTs !== n)
        return;
      this.renderProjectList([], i);
    }
  }
  renderProjectList(t, n) {
    if (!this.chooserListEl)
      return;
    const i = (n || "").trim().toLowerCase(), s = t.filter((r) => i ? r.toLowerCase().includes(i) : !0);
    if (this.chooserListEl.innerHTML = "", s.length === 0) {
      const r = c.make("div", [this.css.hint]);
      r.textContent = this.api.i18n.t("无可选项目名称"), this.chooserListEl.appendChild(r);
      return;
    }
    s.forEach((r) => {
      const o = c.make("div", [this.css.chooserItem]);
      o.textContent = r, this.selectedProject && this.selectedProject === r && o.classList.add("is-selected"), o.addEventListener("click", () => {
        this.setFieldFromText("projectName", r), this.closeChooser();
      }), this.chooserListEl.appendChild(o);
    });
  }
}
export {
  sn as default
};
