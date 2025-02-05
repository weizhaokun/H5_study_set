(window.webpackJsonp = window.webpackJsonp || []).push([
    [14], {
        "3U24": function (e, t, r) {},
        "6LXm": function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = void 0, r("rE2o"), r("ioFf"), r("/SS/");
            var n = _interopRequireDefault(r("aP5i")),
                i = _interopRequireDefault(r("aP5i")),
                o = _interopRequireDefault(r("oP/V"));

            function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function _typeof(e) {
                return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                } : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function _defineProperties(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function _getPrototypeOf(e) {
                return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function _setPrototypeOf(e, t) {
                return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function _assertThisInitialized(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function _defineProperty(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            r("gHYS");
            var a = function (e) {
                function Lazyimg() {
                    var e;
                    return function _classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, Lazyimg), _defineProperty(_assertThisInitialized(_assertThisInitialized(e = function _possibleConstructorReturn(e, t) {
                        return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
                    }(this, _getPrototypeOf(Lazyimg).apply(this, arguments)))), "loaded", !1), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "retryCount", 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "getCtnRef", function (t) {
                        var r = i["default"].findDOMNode(t);
                        r && (e.ctnDom = r)
                    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "getImgRef", function (t) {
                        var r = i["default"].findDOMNode(t);
                        r && (e.imgDom = r)
                    }), e.load = e.load.bind(_assertThisInitialized(_assertThisInitialized(e))), e
                }
                return function _inherits(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && _setPrototypeOf(e, t)
                    }(Lazyimg, n["default"].Component),
                    function _createClass(e, t, r) {
                        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
                    }(Lazyimg, [{
                        key: "done",
                        value: function done() {
                            var e = this.props.src,
                                t = this.props.className;
                            this.imgDom && (this.imgDom.src = e), this.ctnDom && (this.ctnDom.className = (0, o["default"])("lazyimg", "lazyimg_loaded", t))
                        }
                    }, {
                        key: "error",
                        value: function error() {
                            var e = this.props.errSrc,
                                t = this.props.className;
                            this.imgDom && (this.imgDom.src = e, "dataset" in this.imgDom && (this.imgDom.dataset.src = this.props.src)), this.ctnDom && (this.ctnDom.className = (0, o["default"])("lazyimg", "lazyimg_loaded", "lazyimg_error", t))
                        }
                    }, {
                        key: "load",
                        value: function load(e) {
                            var t = this;
                            clearTimeout(this.retryTimer);
                            var r = new Image,
                                n = !1,
                                i = r.onload = function () {
                                    n ? r.onload = null : (t.done(), n = !0, r.onload = null)
                                };
                            r.onerror = function () {
                                r.onerror = null, t.retryCount < (t.props.retryTimes || 2) ? t.retryTimer = setTimeout(function () {
                                    t.retryCount++, t.load(e)
                                }, 10) : t.error()
                            }, r.src = e, r.complete && i()
                        }
                    }, {
                        key: "componentDidMount",
                        value: function componentDidMount() {
                            this.load(this.props.src)
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function componentWillReceiveProps(e) {
                            e.src !== this.props.src && (this.retryCount = 0, this.load(e.src))
                        }
                    }, {
                        key: "render",
                        value: function render() {
                            var e = this.props,
                                t = e.lazySrc,
                                r = e.className,
                                i = e.alt;
                            return n["default"].createElement("div", {
                                ref: this.getCtnRef,
                                className: (0, o["default"])("lazyimg", r)
                            }, n["default"].createElement("img", {
                                src: t,
                                ref: this.getImgRef,
                                className: "lazyimg_img",
                                alt: i
                            }))
                        }
                    }]), Lazyimg
            }();
            _defineProperty(a, "defaultProps", {
                lazySrc: "//misc.360buyimg.com/mtd/pc/common/img/blank.png",
                src: "//misc.360buyimg.com/mtd/pc/common/img/blank.png",
                errSrc: "//misc.360buyimg.com/mtd/pc/common/img/blank.png"
            });
            var l = a;
            t["default"] = l
        },
        FmuK: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = void 0, r("rE2o"), r("ioFf"), r("91GP"), r("/SS/");
            var n = _interopRequireDefault(r("aP5i")),
                i = _interopRequireDefault(r("MViV")),
                o = _interopRequireDefault(r("6LXm")),
                a = function _interopRequireWildcard(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            if (Object.prototype.hasOwnProperty.call(e, r)) {
                                var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                                n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r]
                            } return t["default"] = e, t
                }(r("kew/")),
                l = r("szSY"),
                s = r("0a0O"),
                c = r("lDKC");

            function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function _typeof(e) {
                return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                } : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function _extends() {
                return (_extends = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function _defineProperties(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }

            function _getPrototypeOf(e) {
                return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function _setPrototypeOf(e, t) {
                return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function _assertThisInitialized(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            r("WpTA"), r("cyB9");
            var u = {
                    lazyLoad: !1,
                    indicators: !0,
                    indicatorHoverToSlide: !0,
                    autoPlay: !(0, s.isIE)(8),
                    infinite: !0,
                    easeType: "ease-in-out",
                    speed: 500,
                    zIndex: 1
                },
                f = function (e) {
                    function SeckillSideSlider() {
                        var e, t, r;
                        ! function _classCallCheck(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, SeckillSideSlider);
                        for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                        return _possibleConstructorReturn(r, (t = r = _possibleConstructorReturn(this, (e = _getPrototypeOf(SeckillSideSlider)).call.apply(e, [this].concat(i))), function _defineProperty(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r, e
                        }(_assertThisInitialized(_assertThisInitialized(r)), "handleChange", function (e) {
                            var t = r.props.list;
                            a.exposeSideSlider(e, {
                                url: t[e].href
                            })
                        }), t))
                    }
                    return function _inherits(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && _setPrototypeOf(e, t)
                        }(SeckillSideSlider, n["default"].PureComponent),
                        function _createClass(e, t, r) {
                            return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
                        }(SeckillSideSlider, [{
                            key: "customIndicator",
                            value: function customIndicator(e) {
                                return n["default"].createElement("i", {
                                    clstag: (0, l.generateClstag)("core|seckill_cs", e),
                                    onClick: a.handleClickSideSliderIndicator.bind(this, e)
                                })
                            }
                        }, {
                            key: "componentDidMount",
                            value: function componentDidMount() {
                                var e = this.props.list;
                                a.exposeSideSlider(0, {
                                    url: e[0].href
                                })
                            }
                        }, {
                            key: "render",
                            value: function render() {
                                var e = this,
                                    t = this.props.list,
                                    r = t.map(function (t, r) {
                                        var i = t.title,
                                            s = t.operateWord,
                                            u = t.image,
                                            f = t.type === c.SECKILL_BRAND_VALUE ? "澶х墝闂喘" : "鍝佺被绉掓潃";
                                        return n["default"].createElement("a", {
                                            key: r,
                                            className: "brand-item",
                                            href: t.href,
                                            target: "_blank",
                                            clstag: (0, l.generateClstag)("core|seckill_c", r),
                                            onClick: a.handleClickSideItem.bind(e, r),
                                            "aria-label": "".concat(f, " ").concat(i, " ").concat(s)
                                        }, n["default"].createElement("div", {
                                            className: "item-image"
                                        }, n["default"].createElement(o["default"], {
                                            src: u
                                        })), n["default"].createElement("div", {
                                            className: "item-info"
                                        }, n["default"].createElement("p", {
                                            className: "item-info-title"
                                        }, i), n["default"].createElement("p", {
                                            className: "item-info-promo"
                                        }, s), n["default"].createElement("div", {
                                            className: "item-info-action"
                                        }, f, n["default"].createElement("i", {
                                            className: "iconfont"
                                        }, "顦�"))))
                                    });
                                return n["default"].createElement("div", {
                                    className: "seckill-brand"
                                }, 1 === t.length ? r : n["default"].createElement(i["default"], _extends({}, u, {
                                    className: "seckill-brand__slider",
                                    afterChange: this.handleChange,
                                    customIndicator: this.customIndicator
                                }), r))
                            }
                        }]), SeckillSideSlider
                }();
            t["default"] = f
        },
        Jmeg: function (e, t, r) {},
        SBeh: function (e, t, r) {},
        STom: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = void 0, r("rE2o"), r("ioFf"), r("/SS/"), r("SRfc"), r("f3/d");
            var n = _interopRequireDefault(r("aP5i")),
                i = function _interopRequireWildcard(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            if (Object.prototype.hasOwnProperty.call(e, r)) {
                                var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                                n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r]
                            } return t["default"] = e, t
                }(r("kew/")),
                o = _interopRequireDefault(r("gBpr")),
                a = r("Vn4U"),
                l = r("szSY");

            function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function _typeof(e) {
                return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                } : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function _defineProperties(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? function _assertThisInitialized(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _getPrototypeOf(e) {
                return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function _setPrototypeOf(e, t) {
                return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            r("SBeh");
            var s = function (e) {
                function SeckillCountDown() {
                    return function _classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, SeckillCountDown), _possibleConstructorReturn(this, _getPrototypeOf(SeckillCountDown).apply(this, arguments))
                }
                return function _inherits(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && _setPrototypeOf(e, t)
                    }(SeckillCountDown, n["default"].PureComponent),
                    function _createClass(e, t, r) {
                        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
                    }(SeckillCountDown, [{
                        key: "render",
                        value: function render() {
                            var e, t = this.props,
                                r = t.timeRemain,
                                s = t.onTick,
                                c = t.onTimesup,
                                u = t.name.match(/\d+/);
                            u && (e = "".concat((0, l.padding)(u[0], 2), ":00"));
                            var f = e && r && r > 0,
                                p = n["default"].createElement("div", null, e && n["default"].createElement("div", {
                                    className: "countdown-desc"
                                }, n["default"].createElement("strong", null, e), "鐐瑰満 璺濈粨鏉�"), n["default"].createElement(o["default"], {
                                    type: "second",
                                    className: "countdown-main",
                                    date: r,
                                    onTick: s,
                                    onTimesup: c
                                }));
                            return n["default"].createElement("a", {
                                className: "seckill-countdown",
                                href: a.SECKILL,
                                target: "_blank",
                                clstag: (0, l.generateClstag)("core|seckill_a"),
                                onClick: i.handleClickTimmer.bind(this, a.SECKILL)
                            }, n["default"].createElement("div", {
                                className: "countdown-title"
                            }, "浜笢绉掓潃"), f ? p : n["default"].createElement("div", {
                                className: "countdown-fallback"
                            }, "鎶� 璐� 涓�"))
                        }
                    }]), SeckillCountDown
            }();
            t["default"] = s
        },
        cyB9: function (e, t, r) {},
        farz: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = void 0, r("rE2o"), r("ioFf"), r("91GP"), r("/SS/");
            var n = _interopRequireDefault(r("aP5i")),
                i = _interopRequireDefault(r("MViV")),
                o = _interopRequireDefault(r("6LXm")),
                a = r("szSY"),
                l = r("Vn4U"),
                s = function _interopRequireWildcard(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            if (Object.prototype.hasOwnProperty.call(e, r)) {
                                var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                                n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r]
                            } return t["default"] = e, t
                }(r("kew/"));

            function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function _typeof(e) {
                return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                } : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function _extends() {
                return (_extends = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function _defineProperties(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }

            function _getPrototypeOf(e) {
                return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function _setPrototypeOf(e, t) {
                return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function _assertThisInitialized(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function _defineProperty(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            r("snbi"), r("Jmeg");
            var c = {
                    arrows: !0,
                    lazyLoad: !0,
                    indicators: !1,
                    infinite: !0,
                    fade: !1,
                    easeType: "ease-in-out",
                    speed: 500,
                    zIndex: 1,
                    slidesToShow: 4,
                    slidesToScroll: 4
                },
                u = function (e) {
                    function SeckillMainSlider() {
                        var e, t, r;
                        ! function _classCallCheck(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, SeckillMainSlider);
                        for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                        return _possibleConstructorReturn(r, (t = r = _possibleConstructorReturn(this, (e = _getPrototypeOf(SeckillMainSlider)).call.apply(e, [this].concat(o))), _defineProperty(_assertThisInitialized(_assertThisInitialized(r)), "handleChange", function (e) {
                            var t = r.getSlidesCount(),
                                n = Math.ceil(e / t) * t,
                                i = n + t;
                            s.exposeSkuSlider(n, i)
                        }), _defineProperty(_assertThisInitialized(_assertThisInitialized(r)), "prevArrow", n["default"].createElement("i", {
                            className: "iconfont",
                            clstag: "core|seckill_sl",
                            onClick: s.handleClickPreSkuSlider
                        }, "顦�")), _defineProperty(_assertThisInitialized(_assertThisInitialized(r)), "nextArrow", n["default"].createElement("i", {
                            className: "iconfont",
                            clstag: "core|seckill_sr",
                            onClick: s.handleClickNextSkuSlider
                        }, "顦�")), t))
                    }
                    return function _inherits(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && _setPrototypeOf(e, t)
                        }(SeckillMainSlider, n["default"].PureComponent),
                        function _createClass(e, t, r) {
                            return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
                        }(SeckillMainSlider, [{
                            key: "getSlidesCount",
                            value: function getSlidesCount() {
                                return this.props.isWide ? c.slidesToShow : c.slidesToShow - 1
                            }
                        }, {
                            key: "componentDidMount",
                            value: function componentDidMount() {
                                var e = this.getSlidesCount();
                                s.exposeSkuSlider(0, e)
                            }
                        }, {
                            key: "render",
                            value: function render() {
                                var e = this,
                                    t = this.props.list,
                                    r = this.props.isWide ? c.slidesToShow : c.slidesToShow - 1;
                                return n["default"].createElement("div", {
                                    className: "seckill-list"
                                }, n["default"].createElement(i["default"], _extends({}, c, {
                                    slidesToShow: r,
                                    slidesToScroll: r,
                                    prevArrowText: this.prevArrow,
                                    nextArrowText: this.nextArrow,
                                    afterChange: this.handleChange
                                }), t.map(function (t, r) {
                                    var i = t.wareId,
                                        c = t.wname,
                                        u = t.imageurl,
                                        f = t.miaoShaPrice,
                                        p = t.jdPrice;
                                    return n["default"].createElement("a", {
                                        key: r,
                                        target: "_blank",
                                        className: "seckill-item",
                                        href: "".concat(l.SECKILL_PREFIX).concat(i),
                                        title: c,
                                        clstag: (0, a.generateClstag)("core|seckill_b", r),
                                        onClick: s.handleClickSkuItem.bind(e, t, r),
                                        "aria-label": c
                                    }, n["default"].createElement(o["default"], {
                                        className: "seckill-item__image",
                                        src: u
                                    }), n["default"].createElement("h6", {
                                        className: "seckill-item__name"
                                    }, c), n["default"].createElement("div", {
                                        className: "seckill-item__price"
                                    }, n["default"].createElement("span", {
                                        className: "price-miaosha"
                                    }, n["default"].createElement("i", null, "楼"), n["default"].createElement("span", null, f)), n["default"].createElement("span", {
                                        className: "price-origin"
                                    }, n["default"].createElement("i", null, "楼"), n["default"].createElement("span", null, p))))
                                })))
                            }
                        }]), SeckillMainSlider
                }();
            t["default"] = u
        },
        gBpr: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = void 0, r("rE2o"), r("ioFf"), r("rGqo"), r("/SS/");
            var n = function _interopRequireDefault(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }(r("aP5i")),
                i = r("szSY");

            function _typeof(e) {
                return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                } : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function _slicedToArray(e, t) {
                return function _arrayWithHoles(e) {
                    if (Array.isArray(e)) return e
                }(e) || function _iterableToArrayLimit(e, t) {
                    var r = [],
                        n = !0,
                        i = !1,
                        o = undefined;
                    try {
                        for (var a, l = e[Symbol.iterator](); !(n = (a = l.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
                    } catch (s) {
                        i = !0, o = s
                    } finally {
                        try {
                            n || null == l["return"] || l["return"]()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return r
                }(e, t) || function _nonIterableRest() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }

            function _defineProperties(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }

            function _getPrototypeOf(e) {
                return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function _setPrototypeOf(e, t) {
                return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function _assertThisInitialized(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function _defineProperty(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            r("oi/N");
            var o = function (e) {
                function Timmer(e) {
                    var t;
                    ! function _classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, Timmer), _defineProperty(_assertThisInitialized(_assertThisInitialized(t = _possibleConstructorReturn(this, _getPrototypeOf(Timmer).call(this, e)))), "timmerId", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "lastTickTime", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "tickAfter", function () {
                        var e = t.state.time,
                            r = t.props,
                            n = r.onTick,
                            i = r.onTimesup;
                        if (n && n(t.state.time), e <= 0) return i && i();
                        t.start()
                    });
                    var r = t.props.onTimesup,
                        n = t.getInitialTime(t.props);
                    return n <= 0 ? (r && r(), _possibleConstructorReturn(t)) : (t.state = {
                        time: n
                    }, t)
                }
                return function _inherits(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && _setPrototypeOf(e, t)
                    }(Timmer, n["default"].PureComponent),
                    function _createClass(e, t, r) {
                        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
                    }(Timmer, [{
                        key: "getInitialTime",
                        value: function getInitialTime(e) {
                            var t = e.date,
                                r = e.type;
                            return this.lastTickTime = Date.now(), "second" === r ? t : Math.ceil((t - Date.now()) / 1e3)
                        }
                    }, {
                        key: "start",
                        value: function start() {
                            var e = this,
                                t = this.state.time;
                            this.lastTickTime = this.lastTickTime + 1e3, !t || t <= 0 || (this.timmerId = window.setTimeout(function () {
                                e.setState({
                                    time: t - 1
                                }, e.tickAfter)
                            }, this.lastTickTime - Date.now()))
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function componentWillReceiveProps(e) {
                            var t = e.onTimesup,
                                r = this.getInitialTime(e);
                            this.timmerId && clearTimeout(this.timmerId), r <= 0 ? t && t() : this.setState({
                                time: r
                            }, this.start)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function componentDidMount() {
                            this.start()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function componentWillUnmount() {
                            clearTimeout(this.timmerId)
                        }
                    }, {
                        key: "getDate",
                        value: function getDate(e) {
                            if (!e || e < 0) return ["00", "00", "00"];
                            var t = Math.floor(e / 3600);
                            e -= 3600 * t;
                            var r = Math.floor(e / 60),
                                n = Math.floor(e - 60 * r);
                            return [(0, i.padding)(t, 2), (0, i.padding)(r, 2), (0, i.padding)(n, 2)]
                        }
                    }, {
                        key: "render",
                        value: function render() {
                            var e = this.props.className,
                                t = this.state.time,
                                r = _slicedToArray(this.getDate(t), 3),
                                i = r[0],
                                o = r[1],
                                a = r[2];
                            return n["default"].createElement("span", {
                                className: "timmer ".concat(e)
                            }, n["default"].createElement("span", {
                                className: "timmer__unit timmer__unit--hour"
                            }, i), n["default"].createElement("span", {
                                className: "timmer__unit timmer__unit--minute"
                            }, o), n["default"].createElement("span", {
                                className: "timmer__unit timmer__unit--second"
                            }, a))
                        }
                    }]), Timmer
            }();
            t["default"] = o
        },
        gHYS: function (e, t, r) {},
        "kew/": function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleClickTimmer = function handleClickTimmer(e) {
                n.reportClick({
                    poi: "core|seckill|a",
                    url: e
                })
            }, t.expose = function expose() {
                n.reportExpose({
                    poi: "core|seckill|null"
                })
            }, t.exposeSkuSlider = function exposeSkuSlider(e, t) {
                (0, i.times)(t - e, function (t) {
                    var r = (0, i.padding)(e + t + 1, 2);
                    a[r] || (a[r] = !0, n.reportExpose({
                        poi: "core|seckill|b".concat(r)
                    }))
                })
            }, t.exposeSideSlider = function exposeSideSlider(e, t) {
                if (l[e]) return;
                l[e] = !0;
                var r = (0, i.padding)(e + 1, 2);
                n.reportExpose({
                    poi: "core|seckill|c".concat(r),
                    url: t.url
                })
            }, t.handleClickSkuItem = function handleClickSkuItem(e, t) {
                var r = (0, i.padding)(t + 1, 2),
                    a = e.wareId,
                    l = "".concat(o.SECKILL_PREFIX).concat(a);
                n.reportClick({
                    url: l,
                    text: a,
                    poi: "core|seckill|b".concat(r)
                })
            }, t.handleClickPreSkuSlider = function handleClickPreSkuSlider() {
                n.reportClick({
                    poi: "core|seckill|sl"
                })
            }, t.handleClickNextSkuSlider = function handleClickNextSkuSlider() {
                n.reportClick({
                    poi: "core|seckill|sr"
                })
            }, t.handleClickSideItem = function handleClickSideItem(e) {
                var t = (0, i.padding)(e + 1, 2);
                n.reportClick({
                    poi: "core|seckill|c".concat(t)
                })
            }, t.handleClickSideSliderIndicator = function handleClickSideSliderIndicator(e) {
                var t = (0, i.padding)(e + 1, 2);
                n.reportClick({
                    poi: "core|seckill|cs".concat(t)
                })
            };
            var n = function _interopRequireWildcard(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            if (Object.prototype.hasOwnProperty.call(e, r)) {
                                var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                                n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r]
                            } return t["default"] = e, t
                }(r("n5if")),
                i = r("szSY"),
                o = r("Vn4U");
            var a = {};
            var l = {}
        },
        lDKC: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SECKILL_CATEGORY_VALUE = t.SECKILL_BRAND_VALUE = void 0;
            t.SECKILL_BRAND_VALUE = 1;
            t.SECKILL_CATEGORY_VALUE = 2
        },
        "mG+v": function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = void 0, r("rE2o"), r("ioFf"), r("rGqo"), r("yt8O"), r("RW0V"), r("/SS/"), r("f3/d"), r("xfY5");
            var n = _interopRequireDefault(r("aP5i")),
                i = _interopRequireDefault(r("vZHt")),
                o = _interopRequireDefault(r("7xuk")),
                a = _interopRequireDefault(r("S+ax")),
                l = function _interopRequireWildcard(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            if (Object.prototype.hasOwnProperty.call(e, r)) {
                                var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                                n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r]
                            } return t["default"] = e, t
                }(r("kew/")),
                s = r("6OU5"),
                c = r("Vn4U"),
                u = r("8T6v"),
                f = _interopRequireDefault(r("STom")),
                p = _interopRequireDefault(r("farz")),
                d = _interopRequireDefault(r("FmuK")),
                m = _interopRequireDefault(r("L6Ds")),
                y = _interopRequireDefault(r("vb/e")),
                _ = r("lDKC");

            function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function _typeof(e) {
                return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                } : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function _defineProperties(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function _getPrototypeOf(e) {
                return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function _setPrototypeOf(e, t) {
                return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function _assertThisInitialized(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function _defineProperty(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            r("jgbM"), r("3U24");
            var h = function (e) {
                    function Seckill(e) {
                        var t;
                        return function _classCallCheck(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, Seckill), _defineProperty(_assertThisInitialized(_assertThisInitialized(t = function _possibleConstructorReturn(e, t) {
                            return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
                        }(this, _getPrototypeOf(Seckill).call(this, e)))), "isPreLoading", !1), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "preloadedData", null), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "state", {
                            list: [],
                            name: "",
                            brandList: [],
                            timeRemain: 1,
                            isLoading: !0,
                            miaoshaAdvance: 100
                        }), t.handleTick = t.handleTick.bind(_assertThisInitialized(_assertThisInitialized(t))), t.handleTimesup = t.handleTimesup.bind(_assertThisInitialized(_assertThisInitialized(t))), t
                    }
                    return function _inherits(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && _setPrototypeOf(e, t)
                        }(Seckill, n["default"].PureComponent),
                        function _createClass(e, t, r) {
                            return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
                        }(Seckill, [{
                            key: "componentDidMount",
                            value: function componentDidMount() {
                                this.requestData()
                            }
                        }, {
                            key: "dataCheck",
                            value: function dataCheck(e) {
                                var t = e.indexMiaoSha,
                                    r = e.brandInfo,
                                    n = Number(e.code),
                                    i = Array.isArray(t) && t.length > 8;
                                return 0 === n && i && !!r
                            }
                        }, {
                            key: "processData",
                            value: function processData(e) {
                                var t = e.indexMiaoSha,
                                    r = e.brandInfo,
                                    n = ["imageurl", "tagText", "wname", "miaoShaPrice", "jdPrice", "isNewGoods", "wareId"];
                                return {
                                    list: t.map(function (e) {
                                        var t = (0, s.pick)(e, n);
                                        return t.imageurl = (0, a["default"])(t.imageurl, {
                                            resize: ["280x280", "140x140"]
                                        }), t
                                    }),
                                    brandList: [function _objectSpread(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(r);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                                            }))), n.forEach(function (t) {
                                                _defineProperty(e, t, r[t])
                                            })
                                        }
                                        return e
                                    }({}, r, {
                                        type: _.SECKILL_CATEGORY_VALUE
                                    })].map(function (e) {
                                        var t = e.title,
                                            r = e.operateWord,
                                            n = e.goodsInfo,
                                            i = e.brandId,
                                            o = e.type,
                                            l = e.logoImg,
                                            s = e.brandName,
                                            u = (e.newBrandId, {
                                                type: o,
                                                title: t,
                                                href: "",
                                                brandName: s,
                                                operateWord: r,
                                                skuId: n.wareId,
                                                image: (0, a["default"])(n.imageurl, {
                                                    resize: ["260x260", "130x130"]
                                                })
                                            });
                                        return l && (u.logoImg = (0, a["default"])(l, {
                                            clip: "40x20",
                                            resize: ["80x40", "40x20"]
                                        })), u.href = "".concat(c.SECKILL_TYPE, "?brand_id=").concat(i, "&sku_id=").concat(u.skuId), u
                                    })
                                }
                            }
                        }, {
                            key: "requestData",
                            value: function requestData() {
                                var e = this,
                                    t = this.preloadedData,
                                    r = this.props,
                                    n = r.onLoad,
                                    a = r.onError;
                                if (t) {
                                    var s = t.name,
                                        c = t.list,
                                        f = t.brandList,
                                        p = t.timeRemain,
                                        d = t.miaoshaAdvance;
                                    return this.setState({
                                        list: c,
                                        name: s,
                                        brandList: f,
                                        timeRemain: p,
                                        miaoshaAdvance: d
                                    }, function () {
                                        l.expose(), n && n()
                                    }), void(this.preloadedData = null)
                                }(0, o["default"])(u.SECKILL, {
                                    name: "jsonpSeckill",
                                    umpID: 19,
                                    speedID: 17,
                                    params: {
                                        pin: i["default"].pin,
                                        uuid: i["default"].uuid,
                                        isAdvance: 0
                                    },
                                    backup: [u.SECKILL_BACKUP, u.SECKILL_STORE_BACKUP],
                                    dataCheck: this.dataCheck
                                }).then(function (t) {
                                    var r = t.timeRemain,
                                        i = t.miaoshaAdvance,
                                        o = void 0 === i ? 6 : i,
                                        a = t.name,
                                        s = e.processData(t),
                                        c = s.list,
                                        u = s.brandList;
                                    e.setState({
                                        list: c,
                                        name: a,
                                        brandList: u,
                                        isLoading: !1,
                                        timeRemain: r,
                                        miaoshaAdvance: o
                                    }, function () {
                                        l.expose(), n && n()
                                    })
                                })["catch"](function () {
                                    a && a()
                                })
                            }
                        }, {
                            key: "handleTick",
                            value: function handleTick(e) {
                                var t = this,
                                    r = this.preloadedData,
                                    n = this.isPreLoading,
                                    a = this.state,
                                    l = a.isLoading,
                                    s = a.miaoshaAdvance;
                                l || n || r || e >= s || (this.isPreLoading = !0, (0, o["default"])(u.SECKILL, {
                                    name: "jsonpSeckillPreload",
                                    umpID: 19,
                                    params: {
                                        pin: i["default"].pin,
                                        uuid: i["default"].uuid,
                                        isAdvance: 1
                                    },
                                    dataCheck: this.dataCheck
                                }).then(function (e) {
                                    var r = e.timeRemain,
                                        n = e.miaoshaAdvance,
                                        i = void 0 === n ? 6 : n,
                                        o = e.name,
                                        a = t.processData(e),
                                        l = a.list,
                                        s = a.brandList;
                                    t.preloadedData = {
                                        list: l,
                                        name: o,
                                        brandList: s,
                                        timeRemain: r,
                                        miaoshaAdvance: i
                                    }, t.isPreLoading = !1
                                })["catch"](function () {
                                    t.isPreLoading = !1
                                }))
                            }
                        }, {
                            key: "handleTimesup",
                            value: function handleTimesup() {
                                this.requestData()
                            }
                        }, {
                            key: "render",
                            value: function render() {
                                var e = this.state,
                                    t = e.list,
                                    r = e.timeRemain,
                                    i = e.brandList,
                                    o = e.isLoading,
                                    a = e.name;
                                return o ? n["default"].createElement(y["default"], null) : n["default"].createElement("div", {
                                    className: "seckill",
                                    "aria-label": "浜笢绉掓潃"
                                }, n["default"].createElement("div", {
                                    className: "jd_container seckill__inner"
                                }, n["default"].createElement(f["default"], {
                                    name: a,
                                    timeRemain: r,
                                    onTick: this.handleTick,
                                    onTimesup: this.handleTimesup
                                }), n["default"].createElement(p["default"], {
                                    list: t,
                                    isWide: this.props.isWide
                                }), n["default"].createElement(d["default"], {
                                    list: i
                                })))
                            }
                        }]), Seckill
                }(),
                b = (0, m["default"])(h);
            t["default"] = b
        },
        "oi/N": function (e, t, r) {}
    }
]);