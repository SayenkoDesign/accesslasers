(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/modernizr-custom"],{

/***/ "./assets/js/modernizr-custom.js":
/*!***************************************!*\
  !*** ./assets/js/modernizr-custom.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssvhunit-cssvwunit-touchevents-setclasses !*/


!function (e, n, t) {
  function o(e, n) {
    return _typeof(e) === n;
  }

  function s() {
    var e, n, t, s, r, i, a;

    for (var l in d) {
      if (d.hasOwnProperty(l)) {
        if (e = [], n = d[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) {
          e.push(n.options.aliases[t].toLowerCase());
        }

        for (s = o(n.fn, "function") ? n.fn() : n.fn, r = 0; r < e.length; r++) {
          i = e[r], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = s : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = s), c.push((s ? "" : "no-") + a.join("-"));
        }
      }
    }
  }

  function r(e) {
    var n = h.className,
        t = Modernizr._config.classPrefix || "";

    if (m && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(o, "$1" + t + "js$2");
    }

    Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), m ? h.className.baseVal = n : h.className = n);
  }

  function i(n, t, o) {
    var s;

    if ("getComputedStyle" in e) {
      s = getComputedStyle.call(e, n, t);
      var r = e.console;
      if (null !== s) o && (s = s.getPropertyValue(o));else if (r) {
        var i = r.error ? "error" : "log";
        r[i].call(r, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
      }
    } else s = !t && n.currentStyle && n.currentStyle[o];

    return s;
  }

  function a(e, n) {
    return e - 1 === n || e === n || e + 1 === n;
  }

  function l() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : m ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
  }

  function f() {
    var e = n.body;
    return e || (e = l(m ? "svg" : "body"), e.fake = !0), e;
  }

  function u(e, t, o, s) {
    var r,
        i,
        a,
        u,
        c = "modernizr",
        d = l("div"),
        p = f();
    if (parseInt(o, 10)) for (; o--;) {
      a = l("div"), a.id = s ? s[o] : c + (o + 1), d.appendChild(a);
    }
    return r = l("style"), r.type = "text/css", r.id = "s" + c, (p.fake ? p : d).appendChild(r), p.appendChild(d), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(n.createTextNode(e)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = h.style.overflow, h.style.overflow = "hidden", h.appendChild(p)), i = t(d, e), p.fake ? (p.parentNode.removeChild(p), h.style.overflow = u, h.offsetHeight) : d.parentNode.removeChild(d), !!i;
  }

  var c = [],
      d = [],
      p = {
    _version: "3.6.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, n) {
      var t = this;
      setTimeout(function () {
        n(t[e]);
      }, 0);
    },
    addTest: function addTest(e, n, t) {
      d.push({
        name: e,
        fn: n,
        options: t
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      d.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = p, Modernizr = new Modernizr();
  var h = n.documentElement,
      m = "svg" === h.nodeName.toLowerCase(),
      v = p._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  p._prefixes = v;
  var g = p.testStyles = u;
  Modernizr.addTest("touchevents", function () {
    var t;
    if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;else {
      var o = ["@media (", v.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
      g(o, function (e) {
        t = 9 === e.offsetTop;
      });
    }
    return t;
  }), g("#modernizr { height: 50vh; }", function (n) {
    var t = parseInt(e.innerHeight / 2, 10),
        o = parseInt(i(n, null, "height"), 10);
    Modernizr.addTest("cssvhunit", a(o, t));
  }), g("#modernizr { width: 50vw; }", function (n) {
    var t = parseInt(e.innerWidth / 2, 10),
        o = parseInt(i(n, null, "width"), 10);
    Modernizr.addTest("cssvwunit", a(o, t));
  }), s(), r(c), delete p.addTest, delete p.addAsyncTest;

  for (var y = 0; y < Modernizr._q.length; y++) {
    Modernizr._q[y]();
  }

  e.Modernizr = Modernizr;
}(window, document);

/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi ./assets/js/modernizr-custom.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/accesslasers/wp-content/themes/sd-accesslasers/assets/js/modernizr-custom.js */"./assets/js/modernizr-custom.js");


/***/ })

},[[1,"/js/manifest"]]]);
//# sourceMappingURL=modernizr-custom.js.map