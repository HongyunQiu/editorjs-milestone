(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.cdx-milestone{margin:0;position:relative;display:grid;grid-template-columns:minmax(280px,1fr) minmax(220px,320px);gap:8px 12px;align-items:start;border:1px solid var(--milestone-border, #bae6fd);background:var(--milestone-bg, #f0f9ff);border-radius:10px;padding:10px 12px 12px;--milestone-accent: #0284c7;--milestone-text: #0f172a;--milestone-muted: #475569;--milestone-focus-ring: rgba(2, 132, 199, .25);--milestone-chip-bg: #e0f2fe;--milestone-chip-border: #7dd3fc}.cdx-milestone--warning{--milestone-accent: #d946ef;--milestone-bg: #fdf4ff;--milestone-border: #f5d0fe}.cdx-milestone--danger{--milestone-accent: #ef4444;--milestone-bg: #fef2f2;--milestone-border: #fee2e2}.cdx-milestone--critical{--milestone-accent: #ef4444;--milestone-bg: #fef2f2;--milestone-border: #fee2e2;animation:cdx-milestone-flash 1.5s infinite}.cdx-milestone--completed{--milestone-accent: #10b981;--milestone-bg: #f0fdf4;--milestone-border: #dcfce7;animation:none!important}@keyframes cdx-milestone-flash{0%,to{background:var(--milestone-bg);border-color:var(--milestone-border)}50%{background:#fee2e2;border-color:#ef4444;box-shadow:0 0 8px #ef444433}}.cdx-milestone:before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;border-radius:10px 0 0 10px;background:var(--milestone-accent)}.cdx-milestone__item{display:flex;align-items:baseline;gap:8px;min-width:0}.cdx-milestone__label{display:inline-flex;align-items:center;gap:6px;color:var(--milestone-muted);font-size:12px;line-height:1.4;white-space:nowrap;flex:0 0 auto;-webkit-user-select:none;user-select:none}.cdx-milestone__label-icon{width:14px;height:14px;display:inline-flex;align-items:center;justify-content:center;color:var(--milestone-accent)}.cdx-milestone__dates{display:flex;flex-direction:column;gap:6px;flex:1 1 auto;min-width:0}.cdx-milestone__date-row{display:flex;align-items:baseline;gap:8px;min-width:0}.cdx-milestone__sub-label{flex:0 0 auto;color:var(--milestone-muted);font-size:12px;line-height:1.4;white-space:nowrap;-webkit-user-select:none;user-select:none}.cdx-milestone__value{position:relative;flex:1 1 auto;min-width:60px;min-height:22px;padding:0 2px 2px;border:none!important;border-bottom:1px solid rgba(2,132,199,.35)!important;border-radius:0!important;background:transparent!important;box-shadow:none!important;outline:none;line-height:1.5;color:var(--milestone-text)}.cdx-milestone__value--people{flex:1 1 auto;min-width:160px}.cdx-milestone__value--project{flex:0 1 140px;min-width:110px}.cdx-milestone__value--invalid,.cdx-milestone__value--inconsistent{border-bottom-color:#ef4444!important;color:#ef4444!important}.cdx-milestone__value[contentEditable=true][data-placeholder]:before{position:absolute;left:2px;bottom:2px;content:attr(data-placeholder);color:#475569b3;opacity:0;pointer-events:none}.cdx-milestone__value[contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-milestone__value[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-milestone__value[contentEditable=true]:focus{border-bottom-color:var(--milestone-accent)!important;box-shadow:0 2px #0284c72e}.cdx-milestone__chip-btn{flex:0 0 auto;border:1px solid var(--milestone-chip-border);background:var(--milestone-chip-bg);color:#075985;border-radius:999px;padding:2px 8px;font-size:12px;line-height:1.4;cursor:pointer;-webkit-user-select:none;user-select:none}.cdx-milestone__chip-btn:hover{background:#bae6fd;border-color:#38bdf8}.cdx-milestone__chip-btn.is-active{background:#bae6fd;border-color:#0284c7;color:#0369a1;box-shadow:inset 0 2px 4px #0000000d}.cdx-milestone__chip-btn:focus-visible{outline:none;box-shadow:0 0 0 3px var(--milestone-focus-ring)}.cdx-milestone__chip-btn:disabled{opacity:.55;cursor:not-allowed}.cdx-milestone__chooser{position:absolute;left:12px;right:12px;top:85px;z-index:1000;background:#ffffff;border:1px solid #cbd5e1;box-shadow:0 10px 25px -5px #0000001a,0 8px 10px -6px #0000001a;border-radius:8px;padding:10px 10px 8px;max-height:min(420px,50vh);overflow-y:auto;overflow-x:hidden;display:none;scrollbar-width:thin;scrollbar-color:#cbd5e1 transparent}.cdx-milestone.is-active{z-index:100}.cdx-milestone__chooser::-webkit-scrollbar{width:5px}.cdx-milestone__chooser::-webkit-scrollbar-track{background:transparent}.cdx-milestone__chooser::-webkit-scrollbar-thumb{background-color:#cbd5e1;border-radius:10px}.cdx-milestone__chooser.is-open{display:block}.cdx-milestone__chooser[data-mode=project] .cdx-milestone__chooser-input,.cdx-milestone__chooser[data-mode=project] .cdx-milestone__chooser-close,.cdx-milestone__chooser[data-mode=people] .cdx-milestone__chooser-input,.cdx-milestone__chooser[data-mode=people] .cdx-milestone__chooser-footer,.cdx-milestone__chooser[data-mode=confirmers] .cdx-milestone__chooser-input,.cdx-milestone__chooser[data-mode=confirmers] .cdx-milestone__chooser-footer{display:none}.cdx-milestone__chooser[data-mode=project] .cdx-milestone__chooser-list,.cdx-milestone__chooser[data-mode=people] .cdx-milestone__chooser-list,.cdx-milestone__chooser[data-mode=confirmers] .cdx-milestone__chooser-list{display:flex;flex-wrap:wrap;gap:6px 8px}.cdx-milestone__chooser[data-mode=project] .cdx-milestone__chooser-item,.cdx-milestone__chooser[data-mode=people] .cdx-milestone__chooser-item,.cdx-milestone__chooser[data-mode=confirmers] .cdx-milestone__chooser-item{width:fit-content;max-width:100%;display:inline-flex;align-items:center;white-space:nowrap;overflow:visible;text-overflow:unset}.cdx-milestone__chooser-header{display:flex;gap:8px;align-items:center;margin-bottom:8px}.cdx-milestone__chooser-title{font-size:12px;font-weight:700;color:#0f172a;-webkit-user-select:none;user-select:none}.cdx-milestone__chooser-spacer{flex:1}.cdx-milestone__chooser-input{flex:1;min-width:140px;font-size:13px;padding:6px 8px;border-radius:6px;border:1px solid #d3d9e2}.cdx-milestone__chooser-close{border:1px solid #e2e8f0;background:#f8fafc;color:#334155;border-radius:8px;padding:4px 10px;font-size:12px;cursor:pointer}.cdx-milestone__chooser-list{display:grid;grid-template-columns:repeat(4,minmax(160px,1fr));gap:6px 8px}.cdx-milestone__chooser-item{border:1px solid #e2e8f0;background:#ffffff;border-radius:8px;padding:6px 8px;cursor:pointer;font-size:13px;line-height:1.4;color:#0f172a;-webkit-user-select:none;user-select:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cdx-milestone__chooser-item:hover{background:#f1f5f9}.cdx-milestone__chooser-item.is-selected{border-color:#38bdf8;background:#e0f2fe}.cdx-milestone__chooser-footer{display:flex;justify-content:flex-end;gap:8px;margin-top:10px}.cdx-milestone__btn{font-size:12px;line-height:1.4;padding:6px 12px;border-radius:8px;border:1px solid #d3d9e2;background:#ffffff;cursor:pointer}.cdx-milestone__btn.primary{border-color:#38bdf8;background:#0284c7;color:#fff}.cdx-milestone__hint{grid-column:1 / -1;color:#64748b;font-size:12px;line-height:1.4;-webkit-user-select:none;user-select:none;display:flex;align-items:center;justify-content:space-between}.cdx-milestone__meta-left{display:inline-flex;align-items:center;gap:12px;min-width:0;flex-wrap:wrap}.cdx-milestone__meta-tip{color:#64748b;white-space:nowrap}.cdx-milestone__meta-group{display:inline-flex;align-items:center;gap:6px;min-width:0}.cdx-milestone__meta-label{color:#64748b;white-space:nowrap}.cdx-milestone__meta-value{color:var(--milestone-text);max-width:260px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cdx-milestone__meta-value.is-empty{color:#64748bbf}.cdx-milestone__completed-toggle{display:inline-flex;align-items:center;gap:4px;cursor:pointer;color:var(--milestone-muted);font-weight:500}.cdx-milestone__completed-toggle input{cursor:pointer;margin:0;width:14px;height:14px}.cdx-milestone__completed-toggle input:disabled{cursor:not-allowed}@media (max-width: 1100px){.cdx-milestone{grid-template-columns:minmax(260px,1fr) minmax(220px,300px)}}@media (max-width: 820px){.cdx-milestone{grid-template-columns:1fr}.cdx-milestone__chooser-list{grid-template-columns:repeat(2,minmax(160px,1fr))}}@media (max-width: 560px){.cdx-milestone,.cdx-milestone__chooser-list{grid-template-columns:1fr}}')),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
const me = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>', ge = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M11.8197 6.04369C11.8924 5.8925 12.1076 5.8925 12.1803 6.04369L13.9776 9.78496C14.0068 9.84564 14.0645 9.88759 14.1312 9.89657L18.2448 10.4498C18.411 10.4722 18.4776 10.6769 18.3562 10.7927L15.3535 13.6582C15.3048 13.7047 15.2827 13.7726 15.2948 13.8388L16.0398 17.922C16.0699 18.087 15.8957 18.2136 15.7481 18.1339L12 16.1124L8.25192 18.1339C8.10429 18.2136 7.93012 18.087 7.96022 17.922L8.7052 13.8388C8.71728 13.7726 8.69523 13.7047 8.64652 13.6582L5.64378 10.7927C5.52244 10.6769 5.58896 10.4722 5.7552 10.4498L9.86876 9.89657C9.93549 9.88759 9.99322 9.84564 10.0224 9.78496L11.8197 6.04369Z"/></svg>', Ve = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>', Ue = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M12 10C12.7145 10 13.239 9.56559 13.5392 9.11536C13.844 8.65814 14 8.0841 14 7.5C14 6.9159 13.844 6.34186 13.5392 5.88464C13.239 5.43441 12.7145 5 12 5C11.2855 5 10.761 5.43441 10.4608 5.88464C10.156 6.34186 10 6.9159 10 7.5C10 8.0841 10.156 8.65814 10.4608 9.11536C10.761 9.56559 11.2855 10 12 10Z"/><ellipse cx="12" cy="16" stroke="currentColor" stroke-width="2" rx="3" ry="5" transform="rotate(-90 12 16)"/></svg>';
var w = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xe(e) {
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
    var r = Object.getOwnPropertyDescriptor(e, i);
    Object.defineProperty(n, i, r.get ? r : {
      enumerable: !0,
      get: function() {
        return e[i];
      }
    });
  }), n;
}
var d = {}, A = {}, $ = {};
Object.defineProperty($, "__esModule", { value: !0 });
$.allInputsSelector = We;
function We() {
  var e = ["text", "password", "email", "number", "search", "tel", "url"];
  return "[contenteditable=true], textarea, input:not([type]), " + e.map(function(t) {
    return 'input[type="'.concat(t, '"]');
  }).join(", ");
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.allInputsSelector = void 0;
  var t = $;
  Object.defineProperty(e, "allInputsSelector", { enumerable: !0, get: function() {
    return t.allInputsSelector;
  } });
})(A);
var _ = {}, F = {};
Object.defineProperty(F, "__esModule", { value: !0 });
F.isNativeInput = qe;
function qe(e) {
  var t = [
    "INPUT",
    "TEXTAREA"
  ];
  return e && e.tagName ? t.includes(e.tagName) : !1;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isNativeInput = void 0;
  var t = F;
  Object.defineProperty(e, "isNativeInput", { enumerable: !0, get: function() {
    return t.isNativeInput;
  } });
})(_);
var ye = {}, D = {};
Object.defineProperty(D, "__esModule", { value: !0 });
D.append = Ye;
function Ye(e, t) {
  Array.isArray(t) ? t.forEach(function(n) {
    e.appendChild(n);
  }) : e.appendChild(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.append = void 0;
  var t = D;
  Object.defineProperty(e, "append", { enumerable: !0, get: function() {
    return t.append;
  } });
})(ye);
var H = {}, R = {};
Object.defineProperty(R, "__esModule", { value: !0 });
R.blockElements = ze;
function ze() {
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
  var t = R;
  Object.defineProperty(e, "blockElements", { enumerable: !0, get: function() {
    return t.blockElements;
  } });
})(H);
var _e = {}, V = {};
Object.defineProperty(V, "__esModule", { value: !0 });
V.calculateBaseline = Ge;
function Ge(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.fontSize), i = parseFloat(t.lineHeight) || n * 1.2, r = parseFloat(t.paddingTop), o = parseFloat(t.borderTopWidth), s = parseFloat(t.marginTop), l = n * 0.8, u = (i - n) / 2, a = s + o + r + u + l;
  return a;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.calculateBaseline = void 0;
  var t = V;
  Object.defineProperty(e, "calculateBaseline", { enumerable: !0, get: function() {
    return t.calculateBaseline;
  } });
})(_e);
var Ce = {}, U = {}, x = {}, W = {};
Object.defineProperty(W, "__esModule", { value: !0 });
W.isContentEditable = Ke;
function Ke(e) {
  return e.contentEditable === "true";
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isContentEditable = void 0;
  var t = W;
  Object.defineProperty(e, "isContentEditable", { enumerable: !0, get: function() {
    return t.isContentEditable;
  } });
})(x);
Object.defineProperty(U, "__esModule", { value: !0 });
U.canSetCaret = Ze;
var Qe = _, Xe = x;
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
  var t = U;
  Object.defineProperty(e, "canSetCaret", { enumerable: !0, get: function() {
    return t.canSetCaret;
  } });
})(Ce);
var k = {}, q = {};
function Je(e, t, n) {
  const i = n.value !== void 0 ? "value" : "get", r = n[i], o = `#${t}Cache`;
  if (n[i] = function(...s) {
    return this[o] === void 0 && (this[o] = r.apply(this, s)), this[o];
  }, i === "get" && n.set) {
    const s = n.set;
    n.set = function(l) {
      delete e[o], s.apply(this, l);
    };
  }
  return n;
}
function Ee() {
  const e = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, t = Object.keys(e).find((n) => window.navigator.appVersion.toLowerCase().indexOf(n) !== -1);
  return t !== void 0 && (e[t] = !0), e;
}
function Y(e) {
  return e != null && e !== "" && (typeof e != "object" || Object.keys(e).length > 0);
}
function et(e) {
  return !Y(e);
}
const tt = () => typeof window < "u" && window.navigator !== null && Y(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function nt(e) {
  const t = Ee();
  return e = e.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, "+"), t.mac ? e = e.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : e = e.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), e;
}
function it(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function rt(e) {
  const t = document.createElement("div");
  t.style.position = "absolute", t.style.left = "-999px", t.style.bottom = "-999px", t.innerHTML = e, document.body.appendChild(t);
  const n = window.getSelection(), i = document.createRange();
  if (i.selectNode(t), n === null)
    throw new Error("Cannot copy text to clipboard");
  n.removeAllRanges(), n.addRange(i), document.execCommand("copy"), document.body.removeChild(t);
}
function st(e, t, n) {
  let i;
  return (...r) => {
    const o = this, s = () => {
      i = void 0, n !== !0 && e.apply(o, r);
    }, l = n === !0 && i !== void 0;
    window.clearTimeout(i), i = window.setTimeout(s, t), l && e.apply(o, r);
  };
}
function b(e) {
  return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function ot(e) {
  return b(e) === "boolean";
}
function Le(e) {
  return b(e) === "function" || b(e) === "asyncfunction";
}
function at(e) {
  return Le(e) && /^\s*class\s+/.test(e.toString());
}
function lt(e) {
  return b(e) === "number";
}
function O(e) {
  return b(e) === "object";
}
function ct(e) {
  return Promise.resolve(e) === e;
}
function ut(e) {
  return b(e) === "string";
}
function dt(e) {
  return b(e) === "undefined";
}
function B(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (O(e) && O(n))
    for (const i in n)
      O(n[i]) ? (e[i] === void 0 && Object.assign(e, { [i]: {} }), B(e[i], n[i])) : Object.assign(e, { [i]: n[i] });
  return B(e, ...t);
}
function pt(e, t, n) {
  const i = `«${t}» is deprecated and will be removed in the next major release. Please use the «${n}» instead.`;
  e && console.warn(i);
}
function ht(e) {
  try {
    return new URL(e).href;
  } catch {
  }
  return e.substring(0, 2) === "//" ? window.location.protocol + e : window.location.origin + e;
}
function ft(e) {
  return e > 47 && e < 58 || e === 32 || e === 13 || e === 229 || e > 64 && e < 91 || e > 95 && e < 112 || e > 185 && e < 193 || e > 218 && e < 223;
}
const mt = {
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
}, gt = {
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
function bt(e, t, n = void 0) {
  let i, r, o, s = null, l = 0;
  n || (n = {});
  const u = function() {
    l = n.leading === !1 ? 0 : Date.now(), s = null, o = e.apply(i, r), s === null && (i = r = null);
  };
  return function() {
    const a = Date.now();
    !l && n.leading === !1 && (l = a);
    const c = t - (a - l);
    return i = this, r = arguments, c <= 0 || c > t ? (s && (clearTimeout(s), s = null), l = a, o = e.apply(i, r), s === null && (i = r = null)) : !s && n.trailing !== !1 && (s = setTimeout(u, c)), o;
  };
}
const yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PromiseQueue: vt,
  beautifyShortcut: nt,
  cacheable: Je,
  capitalize: it,
  copyTextToClipboard: rt,
  debounce: st,
  deepMerge: B,
  deprecationAssert: pt,
  getUserOS: Ee,
  getValidUrl: ht,
  isBoolean: ot,
  isClass: at,
  isEmpty: et,
  isFunction: Le,
  isIosDevice: tt,
  isNumber: lt,
  isObject: O,
  isPrintableKey: ft,
  isPromise: ct,
  isString: ut,
  isUndefined: dt,
  keyCodes: mt,
  mouseButtons: gt,
  notEmpty: Y,
  throttle: bt,
  typeOf: b
}, Symbol.toStringTag, { value: "Module" })), z = /* @__PURE__ */ xe(yt);
Object.defineProperty(q, "__esModule", { value: !0 });
q.containsOnlyInlineElements = Et;
var _t = z, Ct = H;
function Et(e) {
  var t;
  (0, _t.isString)(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
  var n = function(i) {
    return !(0, Ct.blockElements)().includes(i.tagName.toLowerCase()) && Array.from(i.children).every(n);
  };
  return Array.from(t.children).every(n);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.containsOnlyInlineElements = void 0;
  var t = q;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return t.containsOnlyInlineElements;
  } });
})(k);
var Pe = {}, G = {}, M = {}, K = {};
Object.defineProperty(K, "__esModule", { value: !0 });
K.make = Lt;
function Lt(e, t, n) {
  var i;
  t === void 0 && (t = null), n === void 0 && (n = {});
  var r = document.createElement(e);
  if (Array.isArray(t)) {
    var o = t.filter(function(l) {
      return l !== void 0;
    });
    (i = r.classList).add.apply(i, o);
  } else
    t !== null && r.classList.add(t);
  for (var s in n)
    Object.prototype.hasOwnProperty.call(n, s) && (r[s] = n[s]);
  return r;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.make = void 0;
  var t = K;
  Object.defineProperty(e, "make", { enumerable: !0, get: function() {
    return t.make;
  } });
})(M);
Object.defineProperty(G, "__esModule", { value: !0 });
G.fragmentToString = Tt;
var Pt = M;
function Tt(e) {
  var t = (0, Pt.make)("div");
  return t.appendChild(e), t.innerHTML;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.fragmentToString = void 0;
  var t = G;
  Object.defineProperty(e, "fragmentToString", { enumerable: !0, get: function() {
    return t.fragmentToString;
  } });
})(Pe);
var Te = {}, Q = {};
Object.defineProperty(Q, "__esModule", { value: !0 });
Q.getContentLength = Ot;
var jt = _;
function Ot(e) {
  var t, n;
  return (0, jt.isNativeInput)(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : (n = (t = e.textContent) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getContentLength = void 0;
  var t = Q;
  Object.defineProperty(e, "getContentLength", { enumerable: !0, get: function() {
    return t.getContentLength;
  } });
})(Te);
var X = {}, Z = {}, ve = w && w.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var i = 0, r = t.length, o; i < r; i++)
      (o || !(i in t)) && (o || (o = Array.prototype.slice.call(t, 0, i)), o[i] = t[i]);
  return e.concat(o || Array.prototype.slice.call(t));
};
Object.defineProperty(Z, "__esModule", { value: !0 });
Z.getDeepestBlockElements = je;
var wt = k;
function je(e) {
  return (0, wt.containsOnlyInlineElements)(e) ? [e] : Array.from(e.children).reduce(function(t, n) {
    return ve(ve([], t, !0), je(n), !0);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getDeepestBlockElements = void 0;
  var t = Z;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return t.getDeepestBlockElements;
  } });
})(X);
var Oe = {}, J = {}, I = {}, ee = {};
Object.defineProperty(ee, "__esModule", { value: !0 });
ee.isLineBreakTag = kt;
function kt(e) {
  return [
    "BR",
    "WBR"
  ].includes(e.tagName);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isLineBreakTag = void 0;
  var t = ee;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: !0, get: function() {
    return t.isLineBreakTag;
  } });
})(I);
var S = {}, te = {};
Object.defineProperty(te, "__esModule", { value: !0 });
te.isSingleTag = Mt;
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
  var t = te;
  Object.defineProperty(e, "isSingleTag", { enumerable: !0, get: function() {
    return t.isSingleTag;
  } });
})(S);
Object.defineProperty(J, "__esModule", { value: !0 });
J.getDeepestNode = we;
var It = _, St = I, Nt = S;
function we(e, t) {
  t === void 0 && (t = !1);
  var n = t ? "lastChild" : "firstChild", i = t ? "previousSibling" : "nextSibling";
  if (e.nodeType === Node.ELEMENT_NODE && e[n]) {
    var r = e[n];
    if ((0, Nt.isSingleTag)(r) && !(0, It.isNativeInput)(r) && !(0, St.isLineBreakTag)(r))
      if (r[i])
        r = r[i];
      else if (r.parentNode !== null && r.parentNode[i])
        r = r.parentNode[i];
      else
        return r.parentNode;
    return we(r, t);
  }
  return e;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getDeepestNode = void 0;
  var t = J;
  Object.defineProperty(e, "getDeepestNode", { enumerable: !0, get: function() {
    return t.getDeepestNode;
  } });
})(Oe);
var ke = {}, ne = {}, j = w && w.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var i = 0, r = t.length, o; i < r; i++)
      (o || !(i in t)) && (o || (o = Array.prototype.slice.call(t, 0, i)), o[i] = t[i]);
  return e.concat(o || Array.prototype.slice.call(t));
};
Object.defineProperty(ne, "__esModule", { value: !0 });
ne.findAllInputs = Dt;
var Bt = k, At = X, $t = A, Ft = _;
function Dt(e) {
  return Array.from(e.querySelectorAll((0, $t.allInputsSelector)())).reduce(function(t, n) {
    return (0, Ft.isNativeInput)(n) || (0, Bt.containsOnlyInlineElements)(n) ? j(j([], t, !0), [n], !1) : j(j([], t, !0), (0, At.getDeepestBlockElements)(n), !0);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.findAllInputs = void 0;
  var t = ne;
  Object.defineProperty(e, "findAllInputs", { enumerable: !0, get: function() {
    return t.findAllInputs;
  } });
})(ke);
var Me = {}, ie = {};
Object.defineProperty(ie, "__esModule", { value: !0 });
ie.isCollapsedWhitespaces = Ht;
function Ht(e) {
  return !/[^\t\n\r ]/.test(e);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isCollapsedWhitespaces = void 0;
  var t = ie;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return t.isCollapsedWhitespaces;
  } });
})(Me);
var re = {}, se = {};
Object.defineProperty(se, "__esModule", { value: !0 });
se.isElement = Vt;
var Rt = z;
function Vt(e) {
  return (0, Rt.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.ELEMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isElement = void 0;
  var t = se;
  Object.defineProperty(e, "isElement", { enumerable: !0, get: function() {
    return t.isElement;
  } });
})(re);
var Ie = {}, oe = {}, ae = {}, le = {};
Object.defineProperty(le, "__esModule", { value: !0 });
le.isLeaf = Ut;
function Ut(e) {
  return e === null ? !1 : e.childNodes.length === 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isLeaf = void 0;
  var t = le;
  Object.defineProperty(e, "isLeaf", { enumerable: !0, get: function() {
    return t.isLeaf;
  } });
})(ae);
var ce = {}, ue = {};
Object.defineProperty(ue, "__esModule", { value: !0 });
ue.isNodeEmpty = zt;
var xt = I, Wt = re, qt = _, Yt = S;
function zt(e, t) {
  var n = "";
  return (0, Yt.isSingleTag)(e) && !(0, xt.isLineBreakTag)(e) ? !1 : ((0, Wt.isElement)(e) && (0, qt.isNativeInput)(e) ? n = e.value : e.textContent !== null && (n = e.textContent.replace("​", "")), t !== void 0 && (n = n.replace(new RegExp(t, "g"), "")), n.trim().length === 0);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isNodeEmpty = void 0;
  var t = ue;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: !0, get: function() {
    return t.isNodeEmpty;
  } });
})(ce);
Object.defineProperty(oe, "__esModule", { value: !0 });
oe.isEmpty = Qt;
var Gt = ae, Kt = ce;
function Qt(e, t) {
  e.normalize();
  for (var n = [e]; n.length > 0; ) {
    var i = n.shift();
    if (i) {
      if (e = i, (0, Gt.isLeaf)(e) && !(0, Kt.isNodeEmpty)(e, t))
        return !1;
      n.push.apply(n, Array.from(e.childNodes));
    }
  }
  return !0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isEmpty = void 0;
  var t = oe;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return t.isEmpty;
  } });
})(Ie);
var Se = {}, de = {};
Object.defineProperty(de, "__esModule", { value: !0 });
de.isFragment = Zt;
var Xt = z;
function Zt(e) {
  return (0, Xt.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isFragment = void 0;
  var t = de;
  Object.defineProperty(e, "isFragment", { enumerable: !0, get: function() {
    return t.isFragment;
  } });
})(Se);
var Ne = {}, pe = {};
Object.defineProperty(pe, "__esModule", { value: !0 });
pe.isHTMLString = en;
var Jt = M;
function en(e) {
  var t = (0, Jt.make)("div");
  return t.innerHTML = e, t.childElementCount > 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isHTMLString = void 0;
  var t = pe;
  Object.defineProperty(e, "isHTMLString", { enumerable: !0, get: function() {
    return t.isHTMLString;
  } });
})(Ne);
var Be = {}, he = {};
Object.defineProperty(he, "__esModule", { value: !0 });
he.offset = tn;
function tn(e) {
  var t = e.getBoundingClientRect(), n = window.pageXOffset || document.documentElement.scrollLeft, i = window.pageYOffset || document.documentElement.scrollTop, r = t.top + i, o = t.left + n;
  return {
    top: r,
    left: o,
    bottom: r + t.height,
    right: o + t.width
  };
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.offset = void 0;
  var t = he;
  Object.defineProperty(e, "offset", { enumerable: !0, get: function() {
    return t.offset;
  } });
})(Be);
var Ae = {}, fe = {};
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.prepend = nn;
function nn(e, t) {
  Array.isArray(t) ? (t = t.reverse(), t.forEach(function(n) {
    return e.prepend(n);
  })) : e.prepend(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.prepend = void 0;
  var t = fe;
  Object.defineProperty(e, "prepend", { enumerable: !0, get: function() {
    return t.prepend;
  } });
})(Ae);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.prepend = e.offset = e.make = e.isLineBreakTag = e.isSingleTag = e.isNodeEmpty = e.isLeaf = e.isHTMLString = e.isFragment = e.isEmpty = e.isElement = e.isContentEditable = e.isCollapsedWhitespaces = e.findAllInputs = e.isNativeInput = e.allInputsSelector = e.getDeepestNode = e.getDeepestBlockElements = e.getContentLength = e.fragmentToString = e.containsOnlyInlineElements = e.canSetCaret = e.calculateBaseline = e.blockElements = e.append = void 0;
  var t = A;
  Object.defineProperty(e, "allInputsSelector", { enumerable: !0, get: function() {
    return t.allInputsSelector;
  } });
  var n = _;
  Object.defineProperty(e, "isNativeInput", { enumerable: !0, get: function() {
    return n.isNativeInput;
  } });
  var i = ye;
  Object.defineProperty(e, "append", { enumerable: !0, get: function() {
    return i.append;
  } });
  var r = H;
  Object.defineProperty(e, "blockElements", { enumerable: !0, get: function() {
    return r.blockElements;
  } });
  var o = _e;
  Object.defineProperty(e, "calculateBaseline", { enumerable: !0, get: function() {
    return o.calculateBaseline;
  } });
  var s = Ce;
  Object.defineProperty(e, "canSetCaret", { enumerable: !0, get: function() {
    return s.canSetCaret;
  } });
  var l = k;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return l.containsOnlyInlineElements;
  } });
  var u = Pe;
  Object.defineProperty(e, "fragmentToString", { enumerable: !0, get: function() {
    return u.fragmentToString;
  } });
  var a = Te;
  Object.defineProperty(e, "getContentLength", { enumerable: !0, get: function() {
    return a.getContentLength;
  } });
  var c = X;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return c.getDeepestBlockElements;
  } });
  var h = Oe;
  Object.defineProperty(e, "getDeepestNode", { enumerable: !0, get: function() {
    return h.getDeepestNode;
  } });
  var p = ke;
  Object.defineProperty(e, "findAllInputs", { enumerable: !0, get: function() {
    return p.findAllInputs;
  } });
  var f = Me;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return f.isCollapsedWhitespaces;
  } });
  var C = x;
  Object.defineProperty(e, "isContentEditable", { enumerable: !0, get: function() {
    return C.isContentEditable;
  } });
  var E = re;
  Object.defineProperty(e, "isElement", { enumerable: !0, get: function() {
    return E.isElement;
  } });
  var P = Ie;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return P.isEmpty;
  } });
  var T = Se;
  Object.defineProperty(e, "isFragment", { enumerable: !0, get: function() {
    return T.isFragment;
  } });
  var m = Ne;
  Object.defineProperty(e, "isHTMLString", { enumerable: !0, get: function() {
    return m.isHTMLString;
  } });
  var L = ae;
  Object.defineProperty(e, "isLeaf", { enumerable: !0, get: function() {
    return L.isLeaf;
  } });
  var g = ce;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: !0, get: function() {
    return g.isNodeEmpty;
  } });
  var $e = I;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: !0, get: function() {
    return $e.isLineBreakTag;
  } });
  var Fe = S;
  Object.defineProperty(e, "isSingleTag", { enumerable: !0, get: function() {
    return Fe.isSingleTag;
  } });
  var De = M;
  Object.defineProperty(e, "make", { enumerable: !0, get: function() {
    return De.make;
  } });
  var He = Be;
  Object.defineProperty(e, "offset", { enumerable: !0, get: function() {
    return He.offset;
  } });
  var Re = Ae;
  Object.defineProperty(e, "prepend", { enumerable: !0, get: function() {
    return Re.prepend;
  } });
})(d);
function N(e) {
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
  const i = parseInt(n[1], 10), r = parseInt(n[2], 10), o = parseInt(n[3], 10);
  if (r < 1 || r > 12)
    return !1;
  const s = new Date(i, r - 1, o);
  return s.getFullYear() === i && s.getMonth() === r - 1 && s.getDate() === o;
}
function rn(e) {
  const t = (e || "").trim();
  if (!t)
    return "";
  const n = t.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!n)
    return t;
  const [, i, r, o] = n;
  return `${i}-${r}-${o}`;
}
function sn(e) {
  const t = (e || "").trim();
  if (!t)
    return "";
  const n = t.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (n) {
    const [, i, r, o] = n;
    return `${i}-${r}-${o}`;
  }
  return "";
}
function be(e) {
  const n = (e || "").trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!n)
    return null;
  const i = parseInt(n[1], 10), r = parseInt(n[2], 10), o = parseInt(n[3], 10);
  return !Number.isFinite(i) || !Number.isFinite(r) || !Number.isFinite(o) ? null : i * 1e4 + r * 100 + o;
}
class on {
  constructor({ data: t, config: n, api: i, readOnly: r, block: o }) {
    this.css = {
      wrapper: "cdx-milestone",
      item: "cdx-milestone__item",
      label: "cdx-milestone__label",
      labelIcon: "cdx-milestone__label-icon",
      subLabel: "cdx-milestone__sub-label",
      dates: "cdx-milestone__dates",
      dateRow: "cdx-milestone__date-row",
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
      hint: "cdx-milestone__hint",
      completedToggle: "cdx-milestone__completed-toggle",
      metaLeft: "cdx-milestone__meta-left",
      metaTip: "cdx-milestone__meta-tip",
      metaGroup: "cdx-milestone__meta-group",
      metaLabel: "cdx-milestone__meta-label",
      metaValue: "cdx-milestone__meta-value",
      metaValueEmpty: "is-empty"
    }, this.fieldEls = /* @__PURE__ */ new Map(), this.chooserMode = null, this.selectedPeople = /* @__PURE__ */ new Set(), this.selectedProject = null, this.selectedConfirmers = /* @__PURE__ */ new Set(), this.lastChooserQueryTs = 0, this.peopleCache = null, this.peopleLoading = !1, this.api = i, this.readOnly = r, this.block = o, this.config = n || {};
    const s = (a) => typeof a == "string" ? a : "", l = (a) => {
      const c = a && typeof a.id < "u" ? Number(a.id) : NaN, h = a && typeof a.label == "string" ? a.label.trim() : "";
      return !Number.isFinite(c) || !h ? null : { id: c, label: h };
    }, u = (a) => Array.isArray(a) ? a.map(l).filter((c) => !!c) : [];
    if (this.data = {
      content: s(t && t.content),
      startTime: s(t && t.startTime),
      time: s(t && t.time),
      people: s(t && t.people),
      projectName: s(t && t.projectName),
      completed: !!(t && t.completed),
      creator: l(t && t.creator) || void 0,
      confirmers: u(t && t.confirmers)
    }, !this.readOnly && !this.data.creator) {
      const a = this.getCurrentUser();
      a && (this.data.creator = a);
    }
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
      icon: ge
    };
  }
  static get sanitize() {
    return {
      content: { br: !0 },
      startTime: { br: !0 },
      time: { br: !0 },
      people: { br: !0 },
      projectName: { br: !0 },
      // 对象/数组字段不包含 HTML，不做 sanitize
      creator: !1,
      confirmers: !1,
      completed: !1
    };
  }
  render() {
    const t = d.make("div", [this.css.wrapper]);
    this.wrapper = t;
    const n = (s, l) => {
      const u = d.make("div", [this.css.label]), a = d.make("span", [this.css.labelIcon]);
      return a.innerHTML = l, u.appendChild(a), u.appendChild(document.createTextNode(s)), u;
    }, i = (s, l) => {
      const u = d.make("div", [this.css.value]);
      u.dataset.field = s, u.contentEditable = (!this.readOnly).toString(), u.setAttribute("data-placeholder", l), u.innerHTML = this.data[s] || "";
      const a = () => {
        if (s === "time" || s === "startTime") {
          const c = v(u);
          y(c) ? u.classList.remove(this.css.valueInvalid) : u.classList.add(this.css.valueInvalid), s === "time" && this.updateUrgency(), this.updateDateConsistency();
        }
      };
      return this.readOnly || (u.addEventListener("input", () => {
        this.data[s] = u.innerHTML, a();
      }), u.addEventListener("blur", () => {
        const c = v(u);
        this.data[s] = N(c), u.innerHTML = this.data[s] || "", a();
      })), this.fieldEls.set(s, u), a(), u;
    }, r = {
      content: this.api.i18n.t(this.config.contentPlaceholder || "节点内容"),
      startTime: this.api.i18n.t(this.config.startTimePlaceholder || "YYYY-MM-DD"),
      time: this.api.i18n.t(this.config.timePlaceholder || "YYYY-MM-DD"),
      people: this.api.i18n.t(this.config.peoplePlaceholder || "相关人员"),
      projectName: this.api.i18n.t(this.config.projectNamePlaceholder || "项目名称")
    }, o = (s, l) => {
      const u = d.make("div", [], {
        style: "position: relative; display: inline-flex; align-items: center; isolation: isolate;"
      }), a = d.make("button", [this.css.chipBtn], { type: "button" });
      a.textContent = this.api.i18n.t("选择");
      const c = document.createElement("input");
      c.type = "date", c.style.position = "absolute", c.style.top = "0", c.style.left = "0", c.style.width = "100%", c.style.height = "100%", c.style.opacity = "0", c.style.cursor = "pointer", c.style.zIndex = "2", c.setAttribute("aria-label", this.api.i18n.t("选择日期"));
      const h = () => {
        try {
          const p = v(l), f = sn(p);
          f && (c.value = f);
        } catch {
        }
      };
      return a.addEventListener("click", (p) => {
        p.preventDefault(), p.stopPropagation(), h();
        try {
          typeof c.showPicker == "function" ? c.showPicker() : c.click();
        } catch (f) {
          console.error("Failed to show picker:", f);
        }
      }), c.addEventListener("mousedown", h), c.addEventListener("touchstart", h), c.addEventListener("change", () => {
        const p = rn(c.value);
        p && this.setFieldFromText(s, p), c.value = "";
      }), u.appendChild(a), u.appendChild(c), u;
    };
    {
      const s = d.make("div", [this.css.item]);
      s.appendChild(n(this.api.i18n.t("内容"), Ve)), s.appendChild(i("content", r.content)), t.appendChild(s);
    }
    {
      const s = d.make("div", [this.css.item]);
      s.appendChild(n(this.api.i18n.t("开始时间"), me));
      const l = i("startTime", r.startTime);
      s.appendChild(l), this.readOnly || s.appendChild(o("startTime", l)), t.appendChild(s);
    }
    {
      const s = d.make("div", [this.css.item]);
      s.appendChild(n(this.api.i18n.t("人员"), Ue));
      const l = i("people", r.people);
      if (l.classList.add("cdx-milestone__value--people"), s.appendChild(l), !this.readOnly) {
        const a = d.make("button", [this.css.chipBtn], {
          type: "button"
        });
        this.peopleBtn = a, a.textContent = this.api.i18n.t("选择"), a.addEventListener("click", () => this.openPeopleChooser()), s.appendChild(a);
      }
      s.appendChild(n(this.api.i18n.t("项目"), ge));
      const u = i("projectName", r.projectName);
      if (u.classList.add("cdx-milestone__value--project"), s.appendChild(u), !this.readOnly) {
        const a = d.make("button", [this.css.chipBtn], {
          type: "button"
        });
        this.projectBtn = a, a.textContent = this.api.i18n.t("选择"), a.addEventListener("click", () => this.openProjectChooser()), s.appendChild(a);
      }
      t.appendChild(s);
    }
    {
      const s = d.make("div", [this.css.item]);
      s.appendChild(n(this.api.i18n.t("节点时间"), me));
      const l = i("time", r.time);
      s.appendChild(l), this.readOnly || s.appendChild(o("time", l)), t.appendChild(s);
    }
    if (!this.readOnly) {
      t.appendChild(this.buildChooser());
      const s = d.make("div", [this.css.hint]), l = d.make("div", [this.css.metaLeft]), u = this.getCurrentUser(), a = this.data.creator || null, c = !!(u && a && u.id === a.id), h = d.make("span", [this.css.metaTip]);
      h.textContent = this.api.i18n.t("提示：人员可多选；项目名称来自历史 milestone 块的全局查询。");
      const p = d.make("div", [this.css.metaGroup]), f = d.make("span", [this.css.metaLabel]);
      f.textContent = this.api.i18n.t("里程碑创建人");
      const C = d.make("span", [this.css.metaValue]);
      this.creatorValueEl = C, C.textContent = a && a.label ? a.label : this.api.i18n.t("未设置"), a && a.label || C.classList.add(this.css.metaValueEmpty), p.appendChild(f), p.appendChild(C);
      const E = d.make("div", [this.css.metaGroup]), P = d.make("span", [this.css.metaLabel]);
      P.textContent = this.api.i18n.t("里程碑确认人");
      const T = d.make("span", [this.css.metaValue]);
      this.confirmersValueEl = T;
      const m = d.make("button", [this.css.chipBtn], { type: "button" });
      this.confirmersBtn = m, m.textContent = this.api.i18n.t("选择"), c || (m.disabled = !0, m.title = this.api.i18n.t("仅里程碑创建人可修改确认人")), m.addEventListener("click", () => {
        c && this.openConfirmersChooser();
      }), E.appendChild(P), E.appendChild(T), E.appendChild(m), l.appendChild(h), l.appendChild(p), l.appendChild(E), s.appendChild(l);
      const L = d.make("label", [this.css.completedToggle]), g = d.make("input", [], { type: "checkbox" });
      this.completedCheckboxEl = g, g.checked = !!this.data.completed, g.addEventListener("change", () => {
        if (!this.canToggleCompleted()) {
          g.checked = !!this.data.completed;
          return;
        }
        this.data.completed = g.checked, this.updateUrgency();
      }), L.appendChild(g), L.appendChild(document.createTextNode(this.api.i18n.t("已完成"))), s.appendChild(L), t.appendChild(s), this.refreshConfirmersValueUI(), this.refreshCompletedPermissionUI();
    }
    return this.updateUrgency(), t;
  }
  save() {
    const t = (n) => {
      const i = this.fieldEls.get(n);
      if (!i)
        return this.data[n] || "";
      const r = v(i);
      return N(r);
    };
    return {
      content: t("content"),
      startTime: t("startTime"),
      time: t("time"),
      people: t("people"),
      projectName: t("projectName"),
      completed: this.data.completed,
      creator: this.data.creator,
      confirmers: Array.isArray(this.data.confirmers) ? this.data.confirmers : []
    };
  }
  validate(t) {
    if (!t || typeof t != "object")
      return !1;
    const n = (t.startTime || "").replace(/<[^>]+>/g, "").trim();
    if (n && !y(n))
      return !1;
    const i = (t.time || "").replace(/<[^>]+>/g, "").trim();
    return !(i && !y(i));
  }
  buildChooser() {
    const t = d.make("div", [this.css.chooser]);
    this.chooserEl = t;
    const n = d.make("div", [this.css.chooserHeader]), i = d.make("div", [this.css.chooserTitle]);
    i.textContent = this.api.i18n.t("选择"), this.chooserTitleEl = i;
    const r = d.make("input", [this.css.chooserInput], {
      type: "text",
      placeholder: this.api.i18n.t("搜索…")
    });
    this.chooserInputEl = r, r.addEventListener("input", () => {
      this.chooserMode === "people" ? this.renderPeopleList(this.getPeopleCache(), r.value) : this.chooserMode === "confirmers" ? this.renderConfirmersList(this.getPeopleCache(), r.value) : this.chooserMode === "project" && this.queryAndRenderProjects(r.value);
    });
    const o = d.make("div", [this.css.chooserSpacer]);
    n.appendChild(i), n.appendChild(o), n.appendChild(r), t.appendChild(n);
    const s = d.make("div", [this.css.chooserList]);
    this.chooserListEl = s, t.appendChild(s);
    const l = d.make("div", [this.css.chooserFooter]);
    return this.chooserFooterEl = l, t.appendChild(l), t;
  }
  openChooser(t) {
    if (!(!this.chooserEl || !this.chooserInputEl || !this.chooserListEl || !this.chooserTitleEl || !this.chooserFooterEl)) {
      if (this.chooserMode === t) {
        this.closeChooser();
        return;
      }
      this.chooserMode = t, this.chooserEl.dataset.mode = t, this.chooserEl.classList.add("is-open"), this.adjustChooserPosition(t), this.updateBtnStates(), this.chooserInputEl.value = "", t === "people" || t === "project" || t === "confirmers" || this.chooserInputEl.focus(), t === "people" ? (this.chooserTitleEl.textContent = this.api.i18n.t("选择相关人员"), this.selectedPeople = this.parsePeopleToSet(this.save().people), this.selectedProject = null, this.selectedConfirmers.clear(), this.renderPeopleFooter(), this.ensurePeopleLoaded()) : t === "confirmers" ? (this.chooserTitleEl.textContent = this.api.i18n.t("选择里程碑确认人"), this.selectedProject = null, this.selectedPeople.clear(), this.selectedConfirmers = new Set(
        (Array.isArray(this.data.confirmers) ? this.data.confirmers : []).map((n) => Number(n && n.id)).filter((n) => Number.isFinite(n))
      ), this.renderConfirmersFooter(), this.ensurePeopleLoadedForConfirmers()) : (this.chooserTitleEl.textContent = this.api.i18n.t("选择项目名称"), this.selectedProject = this.getTextFieldValue("projectName"), this.selectedPeople.clear(), this.selectedConfirmers.clear(), this.renderProjectFooter(), this.queryAndRenderProjects(""));
    }
  }
  adjustChooserPosition(t) {
    if (!(!this.chooserEl || !this.wrapper) && (this.chooserEl.style.top = "", t === "confirmers" && this.confirmersBtn))
      try {
        const n = this.wrapper.getBoundingClientRect(), i = this.confirmersBtn.getBoundingClientRect(), r = Math.max(0, Math.round(i.bottom - n.top + 8));
        this.chooserEl.style.top = `${r}px`;
      } catch {
        this.chooserEl.style.top = "";
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
    if (this.wrapper.classList.remove("cdx-milestone--warning", "cdx-milestone--danger", "cdx-milestone--critical", "cdx-milestone--completed"), this.data.completed) {
      this.wrapper.classList.add("cdx-milestone--completed");
      return;
    }
    const t = this.fieldEls.get("time"), n = t ? v(t) : "";
    if (!n || !y(n))
      return;
    const i = n.split("-"), r = new Date(parseInt(i[0], 10), parseInt(i[1], 10) - 1, parseInt(i[2], 10)), o = /* @__PURE__ */ new Date();
    o.setHours(0, 0, 0, 0);
    const s = r.getTime() - o.getTime(), l = Math.ceil(s / (1e3 * 60 * 60 * 24));
    l <= 3 ? this.wrapper.classList.add("cdx-milestone--critical") : l <= 7 ? this.wrapper.classList.add("cdx-milestone--danger") : l <= 14 && this.wrapper.classList.add("cdx-milestone--warning");
  }
  updateBtnStates() {
    var t, n;
    this.chooserMode ? (t = this.wrapper) == null || t.classList.add("is-active") : (n = this.wrapper) == null || n.classList.remove("is-active"), this.peopleBtn && (this.chooserMode === "people" ? this.peopleBtn.classList.add("is-active") : this.peopleBtn.classList.remove("is-active")), this.projectBtn && (this.chooserMode === "project" ? this.projectBtn.classList.add("is-active") : this.projectBtn.classList.remove("is-active")), this.confirmersBtn && (this.chooserMode === "confirmers" ? this.confirmersBtn.classList.add("is-active") : this.confirmersBtn.classList.remove("is-active"));
  }
  openPeopleChooser() {
    this.openChooser("people");
  }
  openProjectChooser() {
    this.openChooser("project");
  }
  openConfirmersChooser() {
    this.openChooser("confirmers");
  }
  getCurrentUser() {
    try {
      const t = this.config && typeof this.config.getCurrentUser == "function" ? this.config.getCurrentUser : null, n = t ? t() : null;
      if (!n)
        return null;
      const i = Number(n.id), r = typeof n.label == "string" ? String(n.label).trim() : "";
      return !Number.isFinite(i) || !r ? null : { id: i, label: r };
    } catch {
      return null;
    }
  }
  getTextFieldValue(t) {
    const n = this.fieldEls.get(t);
    return n ? v(n) : "";
  }
  setFieldFromText(t, n) {
    const i = this.fieldEls.get(t), r = N(n);
    this.data[t] = r, i && (i.innerHTML = r, (t === "time" || t === "startTime") && (y(n) ? i.classList.remove(this.css.valueInvalid) : i.classList.add(this.css.valueInvalid), t === "time" && this.updateUrgency(), this.updateDateConsistency()));
  }
  /**
   * 仅当“开始时间”和“节点时间”都填写且格式合法时，校验节点时间 >= 开始时间
   * 不满足则将节点时间标红（不影响开始时间本身的格式错误样式）
   */
  updateDateConsistency() {
    const t = this.fieldEls.get("startTime"), n = this.fieldEls.get("time");
    if (!t || !n)
      return;
    const i = "cdx-milestone__value--inconsistent";
    n.classList.remove(i);
    const r = v(t), o = v(n);
    if (!r || !o || !y(r) || !y(o))
      return;
    const s = be(r), l = be(o);
    s == null || l == null || l < s && n.classList.add(i);
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
  async ensurePeopleLoadedForConfirmers() {
    if (this.peopleCache) {
      this.renderConfirmersList(this.peopleCache, this.chooserInputEl ? this.chooserInputEl.value : "");
      return;
    }
    if (!this.peopleLoading) {
      this.peopleLoading = !0;
      try {
        if (!this.config.listPeople) {
          this.peopleCache = [], this.renderConfirmersList([], "");
          return;
        }
        const t = await this.config.listPeople(), n = t && Array.isArray(t.users) ? t.users : [];
        this.peopleCache = n.filter((i) => i && typeof i.label == "string").map((i) => ({ id: Number(i.id), label: String(i.label).trim() })).filter((i) => Number.isFinite(i.id) && i.label.length > 0), this.renderConfirmersList(this.peopleCache, this.chooserInputEl ? this.chooserInputEl.value : "");
      } catch {
        this.peopleCache = [], this.renderConfirmersList([], "");
      } finally {
        this.peopleLoading = !1;
      }
    }
  }
  renderConfirmersFooter() {
    this.chooserFooterEl && (this.chooserFooterEl.innerHTML = "");
  }
  renderPeopleList(t, n) {
    if (!this.chooserListEl)
      return;
    const i = (n || "").trim().toLowerCase(), r = t.filter((o) => i ? (o.label || "").toLowerCase().includes(i) : !0);
    if (this.chooserListEl.innerHTML = "", r.length === 0) {
      const o = d.make("div", [this.css.hint]);
      o.textContent = this.api.i18n.t("无可选人员"), this.chooserListEl.appendChild(o);
      return;
    }
    r.forEach((o) => {
      const s = d.make("div", [this.css.chooserItem]);
      s.textContent = o.label, this.selectedPeople.has(o.label) && s.classList.add("is-selected"), s.addEventListener("click", () => {
        this.selectedPeople.has(o.label) ? (this.selectedPeople.delete(o.label), s.classList.remove("is-selected")) : (this.selectedPeople.add(o.label), s.classList.add("is-selected"));
        const l = Array.from(this.selectedPeople.values()).filter(Boolean);
        this.setFieldFromText("people", l.join("、"));
      }), this.chooserListEl.appendChild(s);
    });
  }
  renderConfirmersList(t, n) {
    if (!this.chooserListEl)
      return;
    const i = (n || "").trim().toLowerCase(), r = t.filter((o) => i ? (o.label || "").toLowerCase().includes(i) : !0);
    if (this.chooserListEl.innerHTML = "", r.length === 0) {
      const o = d.make("div", [this.css.hint]);
      o.textContent = this.api.i18n.t("无可选人员"), this.chooserListEl.appendChild(o);
      return;
    }
    r.forEach((o) => {
      const s = d.make("div", [this.css.chooserItem]);
      s.textContent = o.label, this.selectedConfirmers.has(o.id) && s.classList.add("is-selected"), s.addEventListener("click", () => {
        this.selectedConfirmers.has(o.id) ? (this.selectedConfirmers.delete(o.id), s.classList.remove("is-selected")) : (this.selectedConfirmers.add(o.id), s.classList.add("is-selected"));
        const l = new Set(Array.from(this.selectedConfirmers.values()).filter((a) => Number.isFinite(a))), u = t.filter((a) => l.has(a.id)).map((a) => ({ id: a.id, label: a.label }));
        u.sort((a, c) => a.label.localeCompare(c.label, "zh-Hans-CN")), this.data.confirmers = u, this.refreshConfirmersValueUI(), this.refreshCompletedPermissionUI();
      }), this.chooserListEl.appendChild(s);
    });
  }
  parsePeopleToSet(t) {
    const r = (t || "").replace(/<br\s*\/?>/gi, `
`).replace(/&nbsp;/gi, " ").replace(/<[^>]+>/g, "").split(/[,\n、;；]+/g).map((o) => o.trim()).filter(Boolean);
    return new Set(r);
  }
  refreshConfirmersValueUI() {
    if (!this.confirmersValueEl)
      return;
    const t = (Array.isArray(this.data.confirmers) ? this.data.confirmers : []).map((n) => n && typeof n.label == "string" ? n.label.trim() : "").filter(Boolean);
    t.length === 0 ? (this.confirmersValueEl.textContent = this.api.i18n.t("未设置"), this.confirmersValueEl.classList.add(this.css.metaValueEmpty)) : (this.confirmersValueEl.textContent = t.join("、"), this.confirmersValueEl.classList.remove(this.css.metaValueEmpty));
  }
  canToggleCompleted() {
    const t = this.getCurrentUser();
    return t ? new Set(
      (Array.isArray(this.data.confirmers) ? this.data.confirmers : []).map((i) => Number(i && i.id)).filter((i) => Number.isFinite(i))
    ).has(t.id) : !1;
  }
  refreshCompletedPermissionUI() {
    if (!this.completedCheckboxEl)
      return;
    const t = this.canToggleCompleted();
    this.completedCheckboxEl.disabled = !t, this.completedCheckboxEl.title = t ? "" : this.api.i18n.t("仅里程碑确认人可勾选/取消“已完成”");
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
      const r = d.make("div", [this.css.hint]);
      r.textContent = this.api.i18n.t("未配置项目查询接口"), this.chooserListEl.appendChild(r);
      return;
    }
    const n = Date.now();
    this.lastChooserQueryTs = n;
    const i = (t || "").trim();
    try {
      const r = await this.config.queryBlocks({
        type: "milestone",
        field: "projectName",
        q: i,
        limit: 200
      });
      if (this.lastChooserQueryTs !== n)
        return;
      const o = r && Array.isArray(r.items) ? r.items : [], s = [], l = /* @__PURE__ */ new Set();
      o.forEach((u) => {
        const c = (u && u.data && typeof u.data.projectName == "string" ? u.data.projectName : "").replace(/<br\s*\/?>/gi, `
`).replace(/&nbsp;/gi, " ").replace(/<[^>]+>/g, "").trim();
        c && (l.has(c) || (l.add(c), s.push(c)));
      }), this.renderProjectList(s, i);
    } catch {
      if (this.lastChooserQueryTs !== n)
        return;
      this.renderProjectList([], i);
    }
  }
  renderProjectList(t, n) {
    if (!this.chooserListEl)
      return;
    const i = (n || "").trim().toLowerCase(), r = t.filter((o) => i ? o.toLowerCase().includes(i) : !0);
    if (this.chooserListEl.innerHTML = "", r.length === 0) {
      const o = d.make("div", [this.css.hint]);
      o.textContent = this.api.i18n.t("无可选项目名称"), this.chooserListEl.appendChild(o);
      return;
    }
    r.forEach((o) => {
      const s = d.make("div", [this.css.chooserItem]);
      s.textContent = o, this.selectedProject && this.selectedProject === o && s.classList.add("is-selected"), s.addEventListener("click", () => {
        this.setFieldFromText("projectName", o), this.closeChooser();
      }), this.chooserListEl.appendChild(s);
    });
  }
}
export {
  on as default
};
