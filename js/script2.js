! function e(t, i, n) {
    function o(r, a) {
        if (!i[r]) {
            if (!t[r]) {
                var d = "function" == typeof require && require;
                if (!a && d) return d(r, !0);
                if (s) return s(r, !0);
                var h = new Error("Cannot find module '" + r + "'");
                throw h.code = "MODULE_NOT_FOUND", h
            }
            var p = i[r] = {
                exports: {}
            };
            t[r][0].call(p.exports, function(e) {
                var i = t[r][1][e];
                return o(i ? i : e)
            }, p, p.exports, e, t, i, n)
        }
        return i[r].exports
    }
    for (var s = "function" == typeof require && require, r = 0; r < n.length; r++) o(n[r]);
    return o
}({
    1: [function(e, t, i) {
        (function(e) {
            ! function(e, i) {
                "use strict";
                var n = {},
                    o = e.document,
                    s = e.GreenSockGlobals = e.GreenSockGlobals || e;
                if (!s.TweenLite) {
                    var r, a, d, h, p, l = function(e) {
                            var t, i = e.split("."),
                                n = s;
                            for (t = 0; t < i.length; t++) n[i[t]] = n = n[i[t]] || {};
                            return n
                        },
                        c = l("com.greensock"),
                        u = 1e-10,
                        z = function(e) {
                            var t, i = [],
                                n = e.length;
                            for (t = 0; t !== n; i.push(e[t++]));
                            return i
                        },
                        f = function() {},
                        m = function() {
                            var e = Object.prototype.toString,
                                t = e.call([]);
                            return function(i) {
                                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && e.call(i) === t)
                            }
                        }(),
                        w = {},
                        g = function(o, r, a, d) {
                            this.sc = w[o] ? w[o].sc : [], w[o] = this, this.gsClass = null, this.func = a;
                            var h = [];
                            this.check = function(p) {
                                for (var c, u, z, f, m = r.length, v = m; --m > -1;)(c = w[r[m]] || new g(r[m], [])).gsClass ? (h[m] = c.gsClass, v--) : p && c.sc.push(this);
                                if (0 === v && a) {
                                    if (u = ("com.greensock." + o).split("."), z = u.pop(), f = l(u.join("."))[z] = this.gsClass = a.apply(a, h), d)
                                        if (s[z] = n[z] = f, "undefined" != typeof t && t.exports)
                                            if (o === i) {
                                                t.exports = n[i] = f;
                                                for (m in n) f[m] = n[m]
                                            } else n[i] && (n[i][z] = f);
                                    else "function" == typeof define && define.amd && define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + o.split(".").pop(), [], function() {
                                        return f
                                    });
                                    for (m = 0; m < this.sc.length; m++) this.sc[m].check()
                                }
                            }, this.check(!0)
                        },
                        v = e._gsDefine = function(e, t, i, n) {
                            return new g(e, t, i, n)
                        },
                        b = c._class = function(e, t, i) {
                            return t = t || function() {}, v(e, [], function() {
                                return t
                            }, i), t
                        };
                    v.globals = s;
                    var _ = [0, 0, 1, 1],
                        y = b("easing.Ease", function(e, t, i, n) {
                            this._func = e, this._type = i || 0, this._power = n || 0, this._params = t ? _.concat(t) : _
                        }, !0),
                        k = y.map = {},
                        j = y.register = function(e, t, i, n) {
                            for (var o, s, r, a, d = t.split(","), h = d.length, p = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                                for (s = d[h], o = n ? b("easing." + s, null, !0) : c.easing[s] || {}, r = p.length; --r > -1;) a = p[r], k[s + "." + a] = k[a + s] = o[a] = e.getRatio ? e : e[a] || new e
                        };
                    for (d = y.prototype, d._calcEnd = !1, d.getRatio = function(e) {
                            if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                            var t = this._type,
                                i = this._power,
                                n = 1 === t ? 1 - e : 2 === t ? e : e < .5 ? 2 * e : 2 * (1 - e);
                            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === t ? 1 - n : 2 === t ? n : e < .5 ? n / 2 : 1 - n / 2
                        }, r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], a = r.length; --a > -1;) d = r[a] + ",Power" + a, j(new y(null, null, 1, a), d, "easeOut", !0), j(new y(null, null, 2, a), d, "easeIn" + (0 === a ? ",easeNone" : "")), j(new y(null, null, 3, a), d, "easeInOut");
                    k.linear = c.easing.Linear.easeIn, k.swing = c.easing.Quad.easeInOut;
                    var x = b("events.EventDispatcher", function(e) {
                        this._listeners = {}, this._eventTarget = e || this
                    });
                    d = x.prototype, d.addEventListener = function(e, t, i, n, o) {
                        o = o || 0;
                        var s, r, a = this._listeners[e],
                            d = 0;
                        for (this !== h || p || h.wake(), null == a && (this._listeners[e] = a = []), r = a.length; --r > -1;) s = a[r], s.c === t && s.s === i ? a.splice(r, 1) : 0 === d && s.pr < o && (d = r + 1);
                        a.splice(d, 0, {
                            c: t,
                            s: i,
                            up: n,
                            pr: o
                        })
                    }, d.removeEventListener = function(e, t) {
                        var i, n = this._listeners[e];
                        if (n)
                            for (i = n.length; --i > -1;)
                                if (n[i].c === t) return void n.splice(i, 1)
                    }, d.dispatchEvent = function(e) {
                        var t, i, n, o = this._listeners[e];
                        if (o)
                            for (t = o.length, t > 1 && (o = o.slice(0)), i = this._eventTarget; --t > -1;) n = o[t], n && (n.up ? n.c.call(n.s || i, {
                                type: e,
                                target: i
                            }) : n.c.call(n.s || i))
                    };
                    var T = e.requestAnimationFrame,
                        P = e.cancelAnimationFrame,
                        C = Date.now || function() {
                            return (new Date).getTime()
                        },
                        S = C();
                    for (r = ["ms", "moz", "webkit", "o"], a = r.length; --a > -1 && !T;) T = e[r[a] + "RequestAnimationFrame"], P = e[r[a] + "CancelAnimationFrame"] || e[r[a] + "CancelRequestAnimationFrame"];
                    b("Ticker", function(e, t) {
                        var i, n, s, r, a, d = this,
                            l = C(),
                            c = !(t === !1 || !T) && "auto",
                            z = 500,
                            m = 33,
                            w = "tick",
                            g = function(e) {
                                var t, o, h = C() - S;
                                h > z && (l += h - m), S += h, d.time = (S - l) / 1e3, t = d.time - a, (!i || t > 0 || e === !0) && (d.frame++, a += t + (t >= r ? .004 : r - t), o = !0), e !== !0 && (s = n(g)), o && d.dispatchEvent(w)
                            };
                        x.call(d), d.time = d.frame = 0, d.tick = function() {
                            g(!0)
                        }, d.lagSmoothing = function(e, t) {
                            return arguments.length ? (z = e || 1 / u, void(m = Math.min(t, z, 0))) : z < 1 / u
                        }, d.sleep = function() {
                            null != s && (c && P ? P(s) : clearTimeout(s), n = f, s = null, d === h && (p = !1))
                        }, d.wake = function(e) {
                            null !== s ? d.sleep() : e ? l += -S + (S = C()) : d.frame > 10 && (S = C() - z + 5), n = 0 === i ? f : c && T ? T : function(e) {
                                return setTimeout(e, 1e3 * (a - d.time) + 1 | 0)
                            }, d === h && (p = !0), g(2)
                        }, d.fps = function(e) {
                            return arguments.length ? (i = e, r = 1 / (i || 60), a = this.time + r, void d.wake()) : i
                        }, d.useRAF = function(e) {
                            return arguments.length ? (d.sleep(), c = e, void d.fps(i)) : c
                        }, d.fps(e), setTimeout(function() {
                            "auto" === c && d.frame < 5 && "hidden" !== o.visibilityState && d.useRAF(!1)
                        }, 1500)
                    }), d = c.Ticker.prototype = new c.events.EventDispatcher, d.constructor = c.Ticker;
                    var N = b("core.Animation", function(e, t) {
                        if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, K) {
                            p || h.wake();
                            var i = this.vars.useFrames ? Q : K;
                            i.add(this, i._time), this.vars.paused && this.paused(!0)
                        }
                    });
                    h = N.ticker = new c.Ticker, d = N.prototype, d._dirty = d._gc = d._initted = d._paused = !1, d._totalTime = d._time = 0, d._rawPrevTime = -1, d._next = d._last = d._onUpdate = d._timeline = d.timeline = null, d._paused = !1;
                    var A = function() {
                        p && C() - S > 2e3 && ("hidden" !== o.visibilityState || !h.lagSmoothing()) && h.wake();
                        var e = setTimeout(A, 2e3);
                        e.unref && e.unref()
                    };
                    A(), d.play = function(e, t) {
                        return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
                    }, d.pause = function(e, t) {
                        return null != e && this.seek(e, t), this.paused(!0)
                    }, d.resume = function(e, t) {
                        return null != e && this.seek(e, t), this.paused(!1)
                    }, d.seek = function(e, t) {
                        return this.totalTime(Number(e), t !== !1)
                    }, d.restart = function(e, t) {
                        return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
                    }, d.reverse = function(e, t) {
                        return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
                    }, d.render = function(e, t, i) {}, d.invalidate = function() {
                        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                    }, d.isActive = function() {
                        var e, t = this._timeline,
                            i = this._startTime;
                        return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime(!0)) >= i && e < i + this.totalDuration() / this._timeScale - 1e-7
                    }, d._enabled = function(e, t) {
                        return p || h.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
                    }, d._kill = function(e, t) {
                        return this._enabled(!1, !1)
                    }, d.kill = function(e, t) {
                        return this._kill(e, t), this
                    }, d._uncache = function(e) {
                        for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                        return this
                    }, d._swapSelfInParams = function(e) {
                        for (var t = e.length, i = e.concat(); --t > -1;) "{self}" === e[t] && (i[t] = this);
                        return i
                    }, d._callback = function(e) {
                        var t = this.vars,
                            i = t[e],
                            n = t[e + "Params"],
                            o = t[e + "Scope"] || t.callbackScope || this,
                            s = n ? n.length : 0;
                        switch (s) {
                            case 0:
                                i.call(o);
                                break;
                            case 1:
                                i.call(o, n[0]);
                                break;
                            case 2:
                                i.call(o, n[0], n[1]);
                                break;
                            default:
                                i.apply(o, n)
                        }
                    }, d.eventCallback = function(e, t, i, n) {
                        if ("on" === (e || "").substr(0, 2)) {
                            var o = this.vars;
                            if (1 === arguments.length) return o[e];
                            null == t ? delete o[e] : (o[e] = t, o[e + "Params"] = m(i) && i.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(i) : i, o[e + "Scope"] = n), "onUpdate" === e && (this._onUpdate = t)
                        }
                        return this
                    }, d.delay = function(e) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
                    }, d.duration = function(e) {
                        return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
                    }, d.totalDuration = function(e) {
                        return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
                    }, d.time = function(e, t) {
                        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
                    }, d.totalTime = function(e, t, i) {
                        if (p || h.wake(), !arguments.length) return this._totalTime;
                        if (this._timeline) {
                            if (e < 0 && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var n = this._totalDuration,
                                    o = this._timeline;
                                if (e > n && !i && (e = n), this._startTime = (this._paused ? this._pauseTime : o._time) - (this._reversed ? n - e : e) / this._timeScale, o._dirty || this._uncache(!1), o._timeline)
                                    for (; o._timeline;) o._timeline._time !== (o._startTime + o._totalTime) / o._timeScale && o.totalTime(o._totalTime, !0), o = o._timeline
                            }
                            this._gc && this._enabled(!0, !1), this._totalTime === e && 0 !== this._duration || (E.length && J(), this.render(e, t, !1), E.length && J())
                        }
                        return this
                    }, d.progress = d.totalProgress = function(e, t) {
                        var i = this.duration();
                        return arguments.length ? this.totalTime(i * e, t) : i ? this._time / i : this.ratio
                    }, d.startTime = function(e) {
                        return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
                    }, d.endTime = function(e) {
                        return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
                    }, d.timeScale = function(e) {
                        if (!arguments.length) return this._timeScale;
                        var t, i;
                        for (e = e || u, this._timeline && this._timeline.smoothChildTiming && (t = this._pauseTime, i = t || 0 === t ? t : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / e), this._timeScale = e, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
                        return this
                    }, d.reversed = function(e) {
                        return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                    }, d.paused = function(e) {
                        if (!arguments.length) return this._paused;
                        var t, i, n = this._timeline;
                        return e != this._paused && n && (p || e || h.wake(), t = n.rawTime(), i = t - this._pauseTime, !e && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== i && this._initted && this.duration() && (t = n.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
                    };
                    var R = b("core.SimpleTimeline", function(e) {
                        N.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    d = R.prototype = new N, d.constructor = R, d.kill()._gc = !1, d._first = d._last = d._recent = null, d._sortChildren = !1, d.add = d.insert = function(e, t, i, n) {
                        var o, s;
                        if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), o = this._last, this._sortChildren)
                            for (s = e._startTime; o && o._startTime > s;) o = o._prev;
                        return o ? (e._next = o._next, o._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = o, this._recent = e, this._timeline && this._uncache(!0), this
                    }, d._remove = function(e, t) {
                        return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                    }, d.render = function(e, t, i) {
                        var n, o = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = e; o;) n = o._next, (o._active || e >= o._startTime && !o._paused && !o._gc) && (o._reversed ? o.render((o._dirty ? o.totalDuration() : o._totalDuration) - (e - o._startTime) * o._timeScale, t, i) : o.render((e - o._startTime) * o._timeScale, t, i)), o = n
                    }, d.rawTime = function() {
                        return p || h.wake(), this._totalTime
                    };
                    var M = b("TweenLite", function(t, i, n) {
                            if (N.call(this, i, n), this.render = M.prototype.render, null == t) throw "Cannot tween a null target.";
                            this.target = t = "string" != typeof t ? t : M.selector(t) || t;
                            var o, s, r, a = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                                d = this.vars.overwrite;
                            if (this._overwrite = d = null == d ? B[M.defaultOverwrite] : "number" == typeof d ? d >> 0 : B[d], (a || t instanceof Array || t.push && m(t)) && "number" != typeof t[0])
                                for (this._targets = r = z(t), this._propLookup = [], this._siblings = [], o = 0; o < r.length; o++) s = r[o], s ? "string" != typeof s ? s.length && s !== e && s[0] && (s[0] === e || s[0].nodeType && s[0].style && !s.nodeType) ? (r.splice(o--, 1), this._targets = r = r.concat(z(s))) : (this._siblings[o] = Z(s, this, !1), 1 === d && this._siblings[o].length > 1 && te(s, this, null, 1, this._siblings[o])) : (s = r[o--] = M.selector(s), "string" == typeof s && r.splice(o + 1, 1)) : r.splice(o--, 1);
                            else this._propLookup = {}, this._siblings = Z(t, this, !1), 1 === d && this._siblings.length > 1 && te(t, this, null, 1, this._siblings);
                            (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -u, this.render(Math.min(0, -this._delay)))
                        }, !0),
                        O = function(t) {
                            return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
                        },
                        D = function(e, t) {
                            var i, n = {};
                            for (i in e) $[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!G[i] || G[i] && G[i]._autoCSS) || (n[i] = e[i], delete e[i]);
                            e.css = n
                        };
                    d = M.prototype = new N, d.constructor = M, d.kill()._gc = !1, d.ratio = 0, d._firstPT = d._targets = d._overwrittenProps = d._startAt = null, d._notifyPluginsOfEnabled = d._lazy = !1, M.version = "1.20.3", M.defaultEase = d._ease = new y(null, null, 1, 1), M.defaultOverwrite = "auto", M.ticker = h, M.autoSleep = 120, M.lagSmoothing = function(e, t) {
                        h.lagSmoothing(e, t)
                    }, M.selector = e.$ || e.jQuery || function(t) {
                        var i = e.$ || e.jQuery;
                        return i ? (M.selector = i, i(t)) : "undefined" == typeof o ? t : o.querySelectorAll ? o.querySelectorAll(t) : o.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
                    };
                    var E = [],
                        I = {},
                        F = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        L = /[\+-]=-?[\.\d]/,
                        H = function(e) {
                            for (var t, i = this._firstPT, n = 1e-6; i;) t = i.blob ? 1 === e && null != this.end ? this.end : e ? this.join("") : this.start : i.c * e + i.s, i.m ? t = i.m(t, this._target || i.t) : t < n && t > -n && !i.blob && (t = 0), i.f ? i.fp ? i.t[i.p](i.fp, t) : i.t[i.p](t) : i.t[i.p] = t, i = i._next
                        },
                        X = function(e, t, i, n) {
                            var o, s, r, a, d, h, p, l = [],
                                c = 0,
                                u = "",
                                z = 0;
                            for (l.start = e, l.end = t, e = l[0] = e + "", t = l[1] = t + "", i && (i(l), e = l[0], t = l[1]), l.length = 0, o = e.match(F) || [], s = t.match(F) || [], n && (n._next = null, n.blob = 1, l._firstPT = l._applyPT = n), d = s.length, a = 0; a < d; a++) p = s[a], h = t.substr(c, t.indexOf(p, c) - c), u += h || !a ? h : ",", c += h.length, z ? z = (z + 1) % 5 : "rgba(" === h.substr(-5) && (z = 1), p === o[a] || o.length <= a ? u += p : (u && (l.push(u), u = ""), r = parseFloat(o[a]), l.push(r), l._firstPT = {
                                _next: l._firstPT,
                                t: l,
                                p: l.length - 1,
                                s: r,
                                c: ("=" === p.charAt(1) ? parseInt(p.charAt(0) + "1", 10) * parseFloat(p.substr(2)) : parseFloat(p) - r) || 0,
                                f: 0,
                                m: z && z < 4 ? Math.round : 0
                            }), c += p.length;
                            return u += t.substr(c), u && l.push(u), l.setRatio = H, L.test(t) && (l.end = null), l
                        },
                        q = function(e, t, i, n, o, s, r, a, d) {
                            "function" == typeof n && (n = n(d || 0, e));
                            var h, p = typeof e[t],
                                l = "function" !== p ? "" : t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3),
                                c = "get" !== i ? i : l ? r ? e[l](r) : e[l]() : e[t],
                                u = "string" == typeof n && "=" === n.charAt(1),
                                z = {
                                    t: e,
                                    p: t,
                                    s: c,
                                    f: "function" === p,
                                    pg: 0,
                                    n: o || t,
                                    m: s ? "function" == typeof s ? s : Math.round : 0,
                                    pr: 0,
                                    c: u ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - c || 0
                                };
                            if (("number" != typeof c || "number" != typeof n && !u) && (r || isNaN(c) || !u && isNaN(n) || "boolean" == typeof c || "boolean" == typeof n ? (z.fp = r, h = X(c, u ? parseFloat(z.s) + z.c : n, a || M.defaultStringFilter, z), z = {
                                    t: h,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 2,
                                    pg: 0,
                                    n: o || t,
                                    pr: 0,
                                    m: 0
                                }) : (z.s = parseFloat(c), u || (z.c = parseFloat(n) - z.s || 0))), z.c) return (z._next = this._firstPT) && (z._next._prev = z), this._firstPT = z, z
                        },
                        Y = M._internals = {
                            isArray: m,
                            isSelector: O,
                            lazyTweens: E,
                            blobDif: X
                        },
                        G = M._plugins = {},
                        U = Y.tweenLookup = {},
                        W = 0,
                        $ = Y.reservedProps = {
                            ease: 1,
                            delay: 1,
                            overwrite: 1,
                            onComplete: 1,
                            onCompleteParams: 1,
                            onCompleteScope: 1,
                            useFrames: 1,
                            runBackwards: 1,
                            startAt: 1,
                            onUpdate: 1,
                            onUpdateParams: 1,
                            onUpdateScope: 1,
                            onStart: 1,
                            onStartParams: 1,
                            onStartScope: 1,
                            onReverseComplete: 1,
                            onReverseCompleteParams: 1,
                            onReverseCompleteScope: 1,
                            onRepeat: 1,
                            onRepeatParams: 1,
                            onRepeatScope: 1,
                            easeParams: 1,
                            yoyo: 1,
                            immediateRender: 1,
                            repeat: 1,
                            repeatDelay: 1,
                            data: 1,
                            paused: 1,
                            reversed: 1,
                            autoCSS: 1,
                            lazy: 1,
                            onOverwrite: 1,
                            callbackScope: 1,
                            stringFilter: 1,
                            id: 1,
                            yoyoEase: 1
                        },
                        B = {
                            none: 0,
                            all: 1,
                            auto: 2,
                            concurrent: 3,
                            allOnStart: 4,
                            preexisting: 5,
                            "true": 1,
                            "false": 0
                        },
                        Q = N._rootFramesTimeline = new R,
                        K = N._rootTimeline = new R,
                        V = 30,
                        J = Y.lazyRender = function() {
                            var e, t = E.length;
                            for (I = {}; --t > -1;) e = E[t], e && e._lazy !== !1 && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                            E.length = 0
                        };
                    K._startTime = h.time, Q._startTime = h.frame, K._active = Q._active = !0, setTimeout(J, 1), N._updateRoot = M.render = function() {
                        var e, t, i;
                        if (E.length && J(), K.render((h.time - K._startTime) * K._timeScale, !1, !1), Q.render((h.frame - Q._startTime) * Q._timeScale, !1, !1), E.length && J(), h.frame >= V) {
                            V = h.frame + (parseInt(M.autoSleep, 10) || 120);
                            for (i in U) {
                                for (t = U[i].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
                                0 === t.length && delete U[i]
                            }
                            if (i = K._first, (!i || i._paused) && M.autoSleep && !Q._first && 1 === h._listeners.tick.length) {
                                for (; i && i._paused;) i = i._next;
                                i || h.sleep()
                            }
                        }
                    }, h.addEventListener("tick", N._updateRoot);
                    var Z = function(e, t, i) {
                            var n, o, s = e._gsTweenID;
                            if (U[s || (e._gsTweenID = s = "t" + W++)] || (U[s] = {
                                    target: e,
                                    tweens: []
                                }), t && (n = U[s].tweens, n[o = n.length] = t, i))
                                for (; --o > -1;) n[o] === t && n.splice(o, 1);
                            return U[s].tweens
                        },
                        ee = function(e, t, i, n) {
                            var o, s, r = e.vars.onOverwrite;
                            return r && (o = r(e, t, i, n)), r = M.onOverwrite, r && (s = r(e, t, i, n)), o !== !1 && s !== !1
                        },
                        te = function(e, t, i, n, o) {
                            var s, r, a, d;
                            if (1 === n || n >= 4) {
                                for (d = o.length, s = 0; s < d; s++)
                                    if ((a = o[s]) !== t) a._gc || a._kill(null, e, t) && (r = !0);
                                    else if (5 === n) break;
                                return r
                            }
                            var h, p = t._startTime + u,
                                l = [],
                                c = 0,
                                z = 0 === t._duration;
                            for (s = o.length; --s > -1;)(a = o[s]) === t || a._gc || a._paused || (a._timeline !== t._timeline ? (h = h || ie(t, 0, z), 0 === ie(a, h, z) && (l[c++] = a)) : a._startTime <= p && a._startTime + a.totalDuration() / a._timeScale > p && ((z || !a._initted) && p - a._startTime <= 2e-10 || (l[c++] = a)));
                            for (s = c; --s > -1;)
                                if (a = l[s], 2 === n && a._kill(i, e, t) && (r = !0), 2 !== n || !a._firstPT && a._initted) {
                                    if (2 !== n && !ee(a, t)) continue;
                                    a._enabled(!1, !1) && (r = !0)
                                }
                            return r
                        },
                        ie = function(e, t, i) {
                            for (var n = e._timeline, o = n._timeScale, s = e._startTime; n._timeline;) {
                                if (s += n._startTime, o *= n._timeScale, n._paused) return -100;
                                n = n._timeline
                            }
                            return s /= o, s > t ? s - t : i && s === t || !e._initted && s - t < 2 * u ? u : (s += e.totalDuration() / e._timeScale / o) > t + u ? 0 : s - t - u
                        };
                    d._init = function() {
                        var e, t, i, n, o, s, r = this.vars,
                            a = this._overwrittenProps,
                            d = this._duration,
                            h = !!r.immediateRender,
                            p = r.ease;
                        if (r.startAt) {
                            this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), o = {};
                            for (n in r.startAt) o[n] = r.startAt[n];
                            if (o.data = "isStart", o.overwrite = !1, o.immediateRender = !0, o.lazy = h && r.lazy !== !1, o.startAt = o.delay = null, o.onUpdate = r.onUpdate, o.onUpdateParams = r.onUpdateParams, o.onUpdateScope = r.onUpdateScope || r.callbackScope || this, this._startAt = M.to(this.target, 0, o), h)
                                if (this._time > 0) this._startAt = null;
                                else if (0 !== d) return
                        } else if (r.runBackwards && 0 !== d)
                            if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                            else {
                                0 !== this._time && (h = !1), i = {};
                                for (n in r) $[n] && "autoCSS" !== n || (i[n] = r[n]);
                                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && r.lazy !== !1, i.immediateRender = h, this._startAt = M.to(this.target, 0, i), h) {
                                    if (0 === this._time) return
                                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                            }
                        if (this._ease = p = p ? p instanceof y ? p : "function" == typeof p ? new y(p, r.easeParams) : k[p] || M.defaultEase : M.defaultEase, r.easeParams instanceof Array && p.config && (this._ease = p.config.apply(p, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                            for (s = this._targets.length, e = 0; e < s; e++) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], a ? a[e] : null, e) && (t = !0);
                        else t = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                        if (t && M._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                            for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                        this._onUpdate = r.onUpdate, this._initted = !0
                    }, d._initProps = function(t, i, n, o, s) {
                        var r, a, d, h, p, l;
                        if (null == t) return !1;
                        I[t._gsTweenID] && J(), this.vars.css || t.style && t !== e && t.nodeType && G.css && this.vars.autoCSS !== !1 && D(this.vars, t);
                        for (r in this.vars)
                            if (l = this.vars[r], $[r]) l && (l instanceof Array || l.push && m(l)) && l.join("").indexOf("{self}") !== -1 && (this.vars[r] = l = this._swapSelfInParams(l, this));
                            else if (G[r] && (h = new G[r])._onInitTween(t, this.vars[r], this, s)) {
                            for (this._firstPT = p = {
                                    _next: this._firstPT,
                                    t: h,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 1,
                                    n: r,
                                    pg: 1,
                                    pr: h._priority,
                                    m: 0
                                }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                            (h._priority || h._onInitAllProps) && (d = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), p._next && (p._next._prev = p)
                        } else i[r] = q.call(this, t, r, "get", l, r, 0, null, this.vars.stringFilter, s);
                        return o && this._kill(o, t) ? this._initProps(t, i, n, o, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && te(t, this, i, this._overwrite, n) ? (this._kill(i, t), this._initProps(t, i, n, o, s)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (I[t._gsTweenID] = !0), d)
                    }, d.render = function(e, t, i) {
                        var n, o, s, r, a = this._time,
                            d = this._duration,
                            h = this._rawPrevTime;
                        if (e >= d - 1e-7 && e >= 0) this._totalTime = this._time = d, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, o = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === d && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (h < 0 || e <= 0 && e >= -1e-7 || h === u && "isPause" !== this.data) && h !== e && (i = !0, h > u && (o = "onReverseComplete")), this._rawPrevTime = r = !t || e || h === e ? e : u);
                        else if (e < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === d && h > 0) && (o = "onReverseComplete", n = this._reversed), e < 0 && (this._active = !1, 0 === d && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== u || "isPause" !== this.data) && (i = !0), this._rawPrevTime = r = !t || e || h === e ? e : u)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                        else if (this._totalTime = this._time = e, this._easeType) {
                            var p = e / d,
                                l = this._easeType,
                                c = this._easePower;
                            (1 === l || 3 === l && p >= .5) && (p = 1 - p), 3 === l && (p *= 2), 1 === c ? p *= p : 2 === c ? p *= p * p : 3 === c ? p *= p * p * p : 4 === c && (p *= p * p * p * p), 1 === l ? this.ratio = 1 - p : 2 === l ? this.ratio = p : e / d < .5 ? this.ratio = p / 2 : this.ratio = 1 - p / 2
                        } else this.ratio = this._ease.getRatio(e / d);
                        if (this._time !== a || i) {
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) return;
                                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, E.push(this), void(this._lazy = [e, t]);
                                this._time && !n ? this.ratio = this._ease.getRatio(this._time / d) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && e >= 0 && (this._active = !0), 0 === a && (this._startAt && (e >= 0 ? this._startAt.render(e, !0, i) : o || (o = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== d || t || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                            this._onUpdate && (e < 0 && this._startAt && e !== -1e-4 && this._startAt.render(e, !0, i), t || (this._time !== a || n || i) && this._callback("onUpdate")), o && (this._gc && !i || (e < 0 && this._startAt && !this._onUpdate && e !== -1e-4 && this._startAt.render(e, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[o] && this._callback(o), 0 === d && this._rawPrevTime === u && r !== u && (this._rawPrevTime = 0)))
                        }
                    }, d._kill = function(e, t, i) {
                        if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                        t = "string" != typeof t ? t || this._targets || this.target : M.selector(t) || t;
                        var n, o, s, r, a, d, h, p, l, c = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                        if ((m(t) || O(t)) && "number" != typeof t[0])
                            for (n = t.length; --n > -1;) this._kill(e, t[n], i) && (d = !0);
                        else {
                            if (this._targets) {
                                for (n = this._targets.length; --n > -1;)
                                    if (t === this._targets[n]) {
                                        a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], o = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                                        break
                                    }
                            } else {
                                if (t !== this.target) return !1;
                                a = this._propLookup, o = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                            }
                            if (a) {
                                if (h = e || a, p = e !== o && "all" !== o && e !== a && ("object" != typeof e || !e._tempKill), i && (M.onOverwrite || this.vars.onOverwrite)) {
                                    for (s in h) a[s] && (l || (l = []), l.push(s));
                                    if ((l || !e) && !ee(this, i, t, l)) return !1
                                }
                                for (s in h)(r = a[s]) && (c && (r.f ? r.t[r.p](r.s) : r.t[r.p] = r.s, d = !0), r.pg && r.t._kill(h) && (d = !0), r.pg && 0 !== r.t._overwriteProps.length || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next), r._next && (r._next._prev = r._prev), r._next = r._prev = null), delete a[s]), p && (o[s] = 1);
                                !this._firstPT && this._initted && this._enabled(!1, !1)
                            }
                        }
                        return d
                    }, d.invalidate = function() {
                        return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], N.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -u, this.render(Math.min(0, -this._delay))), this
                    }, d._enabled = function(e, t) {
                        if (p || h.wake(), e && this._gc) {
                            var i, n = this._targets;
                            if (n)
                                for (i = n.length; --i > -1;) this._siblings[i] = Z(n[i], this, !0);
                            else this._siblings = Z(this.target, this, !0)
                        }
                        return N.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && M._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
                    }, M.to = function(e, t, i) {
                        return new M(e, t, i)
                    }, M.from = function(e, t, i) {
                        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new M(e, t, i)
                    }, M.fromTo = function(e, t, i, n) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new M(e, t, n)
                    }, M.delayedCall = function(e, t, i, n, o) {
                        return new M(t, 0, {
                            delay: e,
                            onComplete: t,
                            onCompleteParams: i,
                            callbackScope: n,
                            onReverseComplete: t,
                            onReverseCompleteParams: i,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: o,
                            overwrite: 0
                        })
                    }, M.set = function(e, t) {
                        return new M(e, 0, t)
                    }, M.getTweensOf = function(e, t) {
                        if (null == e) return [];
                        e = "string" != typeof e ? e : M.selector(e) || e;
                        var i, n, o, s;
                        if ((m(e) || O(e)) && "number" != typeof e[0]) {
                            for (i = e.length, n = []; --i > -1;) n = n.concat(M.getTweensOf(e[i], t));
                            for (i = n.length; --i > -1;)
                                for (s = n[i], o = i; --o > -1;) s === n[o] && n.splice(i, 1)
                        } else if (e._gsTweenID)
                            for (n = Z(e).concat(), i = n.length; --i > -1;)(n[i]._gc || t && !n[i].isActive()) && n.splice(i, 1);
                        return n || []
                    }, M.killTweensOf = M.killDelayedCallsTo = function(e, t, i) {
                        "object" == typeof t && (i = t, t = !1);
                        for (var n = M.getTweensOf(e, t), o = n.length; --o > -1;) n[o]._kill(i, e)
                    };
                    var ne = b("plugins.TweenPlugin", function(e, t) {
                        this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = ne.prototype
                    }, !0);
                    if (d = ne.prototype, ne.version = "1.19.0", ne.API = 2, d._firstPT = null, d._addTween = q, d.setRatio = H, d._kill = function(e) {
                            var t, i = this._overwriteProps,
                                n = this._firstPT;
                            if (null != e[this._propName]) this._overwriteProps = [];
                            else
                                for (t = i.length; --t > -1;) null != e[i[t]] && i.splice(t, 1);
                            for (; n;) null != e[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                            return !1
                        }, d._mod = d._roundProps = function(e) {
                            for (var t, i = this._firstPT; i;) t = e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")], t && "function" == typeof t && (2 === i.f ? i.t._applyPT.m = t : i.m = t), i = i._next
                        }, M._onPluginEvent = function(e, t) {
                            var i, n, o, s, r, a = t._firstPT;
                            if ("_onInitAllProps" === e) {
                                for (; a;) {
                                    for (r = a._next, n = o; n && n.pr > a.pr;) n = n._next;
                                    (a._prev = n ? n._prev : s) ? a._prev._next = a: o = a, (a._next = n) ? n._prev = a : s = a, a = r
                                }
                                a = t._firstPT = o
                            }
                            for (; a;) a.pg && "function" == typeof a.t[e] && a.t[e]() && (i = !0), a = a._next;
                            return i
                        }, ne.activate = function(e) {
                            for (var t = e.length; --t > -1;) e[t].API === ne.API && (G[(new e[t])._propName] = e[t]);
                            return !0
                        }, v.plugin = function(e) {
                            if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                            var t, i = e.propName,
                                n = e.priority || 0,
                                o = e.overwriteProps,
                                s = {
                                    init: "_onInitTween",
                                    set: "setRatio",
                                    kill: "_kill",
                                    round: "_mod",
                                    mod: "_mod",
                                    initAll: "_onInitAllProps"
                                },
                                r = b("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                                    ne.call(this, i, n), this._overwriteProps = o || []
                                }, e.global === !0),
                                a = r.prototype = new ne(i);
                            a.constructor = r, r.API = e.API;
                            for (t in s) "function" == typeof e[t] && (a[s[t]] = e[t]);
                            return r.version = e.version, ne.activate([r]), r
                        }, r = e._gsQueue) {
                        for (a = 0; a < r.length; a++) r[a]();
                        for (d in w) w[d].func || e.console.log("GSAP encountered missing dependency: " + d)
                    }
                    p = !1
                }
            }("undefined" != typeof t && t.exports && "undefined" != typeof e ? e : this || window, "TweenLite")
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    2: [function(e, t, i) {
        (function(i) {
            var n = "undefined" != typeof t && t.exports && "undefined" != typeof i ? i : this || window;
            (n._gsQueue || (n._gsQueue = [])).push(function() {
                    "use strict";
                    n._gsDefine.plugin({
                        propName: "attr",
                        API: 2,
                        version: "0.6.1",
                        init: function(e, t, i, n) {
                            var o, s;
                            if ("function" != typeof e.setAttribute) return !1;
                            for (o in t) s = t[o], "function" == typeof s && (s = s(n, e)), this._addTween(e, "setAttribute", e.getAttribute(o) + "", s + "", o, !1, o), this._overwriteProps.push(o);
                            return !0
                        }
                    })
                }), n._gsDefine && n._gsQueue.pop()(),
                function(i) {
                    "use strict";
                    var o = function() {
                        return (n.GreenSockGlobals || n)[i]
                    };
                    "undefined" != typeof t && t.exports ? (e(1), t.exports = o()) : "function" == typeof define && define.amd && define(["TweenLite"], o)
                }("AttrPlugin")
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        1: 1
    }],
    3: [function(e, t, i) {
        (function(i) {
            var n = "undefined" != typeof t && t.exports && "undefined" != typeof i ? i : this || window;
            (n._gsQueue || (n._gsQueue = [])).push(function() {
                    "use strict";
                    var e = (n.document || {}).documentElement,
                        t = n,
                        i = function(i, n) {
                            var o = "x" === n ? "Width" : "Height",
                                s = "scroll" + o,
                                r = "client" + o,
                                a = document.body;
                            return i === t || i === e || i === a ? Math.max(e[s], a[s]) - (t["inner" + o] || e[r] || a[r]) : i[s] - i["offset" + o]
                        },
                        o = function(e) {
                            return "string" == typeof e && (e = TweenLite.selector(e)), e.length && e !== t && e[0] && e[0].style && !e.nodeType && (e = e[0]), e === t || e.nodeType && e.style ? e : null
                        },
                        s = function(i, n) {
                            var o = "scroll" + ("x" === n ? "Left" : "Top");
                            return i === t && (null != i.pageXOffset ? o = "page" + n.toUpperCase() + "Offset" : i = null != e[o] ? e : document.body),
                                function() {
                                    return i[o]
                                }
                        },
                        r = function(i, n) {
                            var r = o(i).getBoundingClientRect(),
                                a = !n || n === t || n === document.body,
                                d = (a ? e : n).getBoundingClientRect(),
                                h = {
                                    x: r.left - d.left,
                                    y: r.top - d.top
                                };
                            return !a && n && (h.x += s(n, "x")(), h.y += s(n, "y")()), h
                        },
                        a = function(e, t, n) {
                            var o = typeof e;
                            return isNaN(e) ? "number" === o || "string" === o && "=" === e.charAt(1) ? e : "max" === e ? i(t, n) : Math.min(i(t, n), r(e, t)[n]) : parseFloat(e)
                        },
                        d = n._gsDefine.plugin({
                            propName: "scrollTo",
                            API: 2,
                            global: !0,
                            version: "1.9.0",
                            init: function(e, i, n) {
                                return this._wdw = e === t, this._target = e, this._tween = n, "object" != typeof i ? (i = {
                                    y: i
                                }, "string" == typeof i.y && "max" !== i.y && "=" !== i.y.charAt(1) && (i.x = i.y)) : i.nodeType && (i = {
                                    y: i,
                                    x: i
                                }), this.vars = i, this._autoKill = i.autoKill !== !1, this.getX = s(e, "x"), this.getY = s(e, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != i.x ? (this._addTween(this, "x", this.x, a(i.x, e, "x") - (i.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != i.y ? (this._addTween(this, "y", this.y, a(i.y, e, "y") - (i.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
                            },
                            set: function(e) {
                                this._super.setRatio.call(this, e);
                                var n = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                                    o = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                                    s = o - this.yPrev,
                                    r = n - this.xPrev,
                                    a = d.autoKillThreshold;
                                this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (r > a || r < -a) && n < i(this._target, "x") && (this.skipX = !0), !this.skipY && (s > a || s < -a) && o < i(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? t.scrollTo(this.skipX ? n : this.x, this.skipY ? o : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                            }
                        }),
                        h = d.prototype;
                    d.max = i, d.getOffset = r, d.buildGetter = s, d.autoKillThreshold = 7, h._kill = function(e) {
                        return e.scrollTo_x && (this.skipX = !0), e.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, e)
                    }
                }), n._gsDefine && n._gsQueue.pop()(),
                function(i) {
                    "use strict";
                    var o = function() {
                        return (n.GreenSockGlobals || n)[i]
                    };
                    "undefined" != typeof t && t.exports ? (e(1), t.exports = o()) : "function" == typeof define && define.amd && define(["TweenLite"], o);
                }("ScrollToPlugin")
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        1: 1
    }],
    4: [function(e, t, i) {
        ! function(t, n) {
            "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], n) : "object" == typeof i ? (e("gsap"), n(e("scrollmagic"), TweenMax, TimelineMax)) : n(t.ScrollMagic || t.jQuery && t.jQuery.ScrollMagic, t.TweenMax || t.TweenLite, t.TimelineMax || t.TimelineLite)
        }(this, function(e, t, i) {
            "use strict";
            var n = "animation.gsap",
                o = window.console || {},
                s = Function.prototype.bind.call(o.error || o.log || function() {}, o);
            e || s("(" + n + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."), t || s("(" + n + ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."), e.Scene.addOption("tweenChanges", !1, function(e) {
                return !!e
            }), e.Scene.extend(function() {
                var e, o = this,
                    s = function() {
                        o._log && (Array.prototype.splice.call(arguments, 1, 0, "(" + n + ")", "->"), o._log.apply(this, arguments))
                    };
                o.on("progress.plugin_gsap", function() {
                    r()
                }), o.on("destroy.plugin_gsap", function(e) {
                    o.removeTween(e.reset)
                });
                var r = function() {
                    if (e) {
                        var t = o.progress(),
                            i = o.state();
                        e.repeat && e.repeat() === -1 ? "DURING" === i && e.paused() ? e.play() : "DURING" === i || e.paused() || e.pause() : t != e.progress() && (0 === o.duration() ? t > 0 ? e.play() : e.reverse() : o.tweenChanges() && e.tweenTo ? e.tweenTo(t * e.duration()) : e.progress(t).pause())
                    }
                };
                o.setTween = function(n, a, d) {
                    var h;
                    arguments.length > 1 && (arguments.length < 3 && (d = a, a = 1), n = t.to(n, a, d));
                    try {
                        h = i ? new i({
                            smoothChildTiming: !0
                        }).add(n) : n, h.pause()
                    } catch (p) {
                        return s(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"), o
                    }
                    if (e && o.removeTween(), e = h, n.repeat && n.repeat() === -1 && (e.repeat(-1), e.yoyo(n.yoyo())), o.tweenChanges() && !e.tweenTo && s(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."), e && o.controller() && o.triggerElement() && o.loglevel() >= 2) {
                        var l = t.getTweensOf(o.triggerElement()),
                            c = o.controller().info("vertical");
                        l.forEach(function(e, t) {
                            var i = e.vars.css || e.vars,
                                n = c ? void 0 !== i.top || void 0 !== i.bottom : void 0 !== i.left || void 0 !== i.right;
                            if (n) return s(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"), !1
                        })
                    }
                    if (parseFloat(TweenLite.version) >= 1.14)
                        for (var u, z, f = e.getChildren ? e.getChildren(!0, !0, !1) : [e], m = function() {
                                s(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")
                            }, w = 0; w < f.length; w++) u = f[w], z !== m && (z = u.vars.onOverwrite, u.vars.onOverwrite = function() {
                            z && z.apply(this, arguments), m.apply(this, arguments)
                        });
                    return s(3, "added tween"), r(), o
                }, o.removeTween = function(t) {
                    return e && (t && e.progress(0).pause(), e.kill(), e = void 0, s(3, "removed tween (reset: " + (t ? "true" : "false") + ")")), o
                }
            })
        })
    }, {
        undefined: void 0
    }],
    5: [function(e, t, i) {
        var n = {
            create: function(e, t, i) {
                var n;
                if (i) {
                    var o = new Date;
                    o.setTime(o.getTime() + 24 * i * 60 * 60 * 1e3), n = "; expires=" + o.toGMTString()
                } else n = "";
                document.cookie = e + "=" + t + n + "; path=/"
            },
            read: function(e) {
                for (var t = e + "=", i = document.cookie.split(";"), n = 0; n < i.length; n++) {
                    for (var o = i[n];
                        " " === o.charAt(0);) o = o.substring(1, o.length);
                    if (0 === o.indexOf(t)) return o.substring(t.length, o.length)
                }
                return null
            }
        };
        t.exports = n
    }, {}],
    6: [function(e, t, i) {
        var n = {
            degToRad: Math.PI / 180,
            radToDeg: 180 / Math.PI,
            clamp: function(e, t, i) {
                return e < t ? t : e > i ? i : e
            },
            lerp: function(e, t, i) {
                return (i - t) * e + t
            },
            norm: function(e, t, i) {
                return (e - t) / (i - t)
            },
            map: function(e, t, i, o, s) {
                return n.lerp(n.norm(e, t, i), o, s)
            }
        };
        t.exports = n
    }, {}],
    7: [function(e, t, i) {
        "function" != typeof Object.assign && ! function() {
            Object.assign = function(e) {
                "use strict";
                if (void 0 === e || null === e) throw new TypeError("Cannot convert undefined or null to object");
                for (var t = Object(e), i = 1; i < arguments.length; i++) {
                    var n = arguments[i];
                    if (void 0 !== n && null !== n)
                        for (var o in n) n.hasOwnProperty(o) && (t[o] = n[o])
                }
                return t
            }
        }()
    }, {}],
    8: [function(e, t, i) {
        t.exports = function() {
            function e() {
                return {
                    PHONE_S: Modernizr.mq("screen and (max-width: 543px)"),
                    PHONE_L: Modernizr.mq("screen and (min-width: 544px) and (max-width: 767px)"),
                    TABLET_P: Modernizr.mq("screen and (min-width: 768px) and (max-width: 991px)"),
                    TABLET_L: Modernizr.mq("screen and (min-width: 992px) and (max-width: 1199px)"),
                    DESKTOP_S: Modernizr.mq("screen and (min-width: 1200px) and (max-width: 1599px)"),
                    DESKTOP_M: Modernizr.mq("screen and (min-width: 1600px) and (max-width: 2099px)"),
                    DESKTOP_L: Modernizr.mq("screen and (min-width: 2100px)")
                }
            }

            function t() {
                var t = "";
                $.each(e(), function(e, i) {
                    i === !0 && (t = e)
                });
                var i = {
                    width: $(window).width(),
                    height: $(window).height()
                };
                window.fibScreenInfo = {
                    currentBreakpoint: t,
                    screenSize: i
                }
            }
            t(), $(window).on("resize orientationchange", t)
        }
    }, {}],
    9: [function(e, t, i) {
        function n() {
            this.isDesktop = Modernizr.mq(d), this.header = a("header"), this.header.on("click", this.headerClickHandler.bind(this)), this.nav = a("nav"), this.navSwitch = a("#menu-toggle"), this.navSwitch.on("click", this.toggleHandler.bind(this)), this.topNavContainerHeight = this.header.find("> .container").height(), this.subNavs = {}, this.nav.find(".menu-item-has-children").each(this.createSubNavItem.bind(this)), this.subNavOpen = !1, this.nav.on("subnav:open", this.subNavOpenHandler.bind(this)), this.nav.on("subnav:close", this.subNavCloseHandler.bind(this)), this.langsel = new r(this.nav), this.nav.on("langsel:open", this.langSelOpenHandler.bind(this)), this.nav.on("langsel:close", this.langSelCloseHandler.bind(this)), this.showFirstSubNav(), a(".site-wrapper").hasClass("has-secondary-nav") && (this.scrollPosition = a(window).scrollTop(), this.userScrolled = !1, this.secNav = new s(this.nav)), a(window).one("wheel mousewheel touchmove", this.windowWheelHandler.bind(this)).on("scroll", this.windowScrollHandler.bind(this)).on("keyup", this.windowKeyupHandler.bind(this)).on("resize", this.windowResizeHandler.bind(this))
        }

        function o(e, t, i, n) {
            this.nav = a("nav"), this.subid = e, this.level = t, this.subtoggle = i, this.subelement = n, this.subtoggle.on("click", this.toggleHandler.bind(this))
        }

        function s(e) {
            this.isDesktop = Modernizr.mq(d), this.header = a("header"), this.element = this.header.find("#secondary-nav"), this.links = this.element.find(".links"), this.linksVisible = !1, this.isDesktop || this.links.css({
                display: "flex"
            }).hide(), this.toggleButton = this.element.find(".link-toggle"), this.toggleButton.on("click", this.toggleSecNav.bind(this)), this.nav = e, this.nav.on("subnav:open", this.subNavOpenHandler.bind(this)), this.nav.on("subnav:close", this.subNavCloseHandler.bind(this)), a(window).on("resize", this.windowResizeHandler.bind(this))
        }

        function r(e) {
            this.toggle = a("#lang-toggle"), this.langlist = a("#lang-choices"), this.nav = e, this.open = !1, this.toggle.on("click", this.toggleHandler.bind(this))
        }
        var a = e("jquery"),
            d = "screen and (min-width: 1200px)";
        a.extend(n.prototype, {
            createSubNavItem: function(e, t) {
                var i = a(t),
                    n = parseInt(i.attr("data-level")),
                    s = i.find("> a"),
                    r = i.find("> ul");
                this.subNavs["level" + n] || (this.subNavs["level" + n] = []), this.subNavs["level" + n].push(new o(e, n, s, r))
            },
            show: function() {
                this.nav.fadeIn(100), this.nav.css({
                    "overflow-y": "scroll"
                }), a("body").css({
                    overflow: "hidden"
                }), this.secNav && this.secNav.toggleSecNav()
            },
            hide: function() {
                this.nav.fadeOut(100, function() {
                    this.isDesktop || (this.hideSub(), this.langsel.hide())
                }.bind(this)), this.nav.css({
                    "overflow-y": "auto"
                }), a("body").css({
                    overflow: "auto"
                })
            },
            reset: function() {
                this.navSwitch.removeClass("active"), this.nav.removeAttr("style"), this.subNavs && this.hideSub(), a("body").css({
                    overflow: "auto"
                })
            },
            hideSub: function() {
                a.each(this.subNavs, function() {
                    a.each(a(this), function() {
                        this.hide()
                    })
                })
            },
            toggleHandler: function() {
                this.header.toggleClass("mobnav-active"), this.header.hasClass("mobnav-active") ? this.show() : this.hide()
            },
            headerClickHandler: function(e) {
                this.isDesktop && e.offsetY > this.header.get(0).offsetHeight && (this.nav.find(".menu-top-item.open > a").trigger("click"), this.langsel.hide())
            },
            subNavOpenHandler: function(e, t, i) {
                this.langsel.hide(), this.subNavs["level" + i].forEach(function(e) {
                    e.subid !== t && e.hide()
                }), this.isDesktop && (this.header.addClass("subnav-active"), this.subNavOpen = !0)
            },
            subNavCloseHandler: function(e, t, i) {
                0 !== i || this.isDesktop || this.hideSub(), this.isDesktop && (this.header.removeClass("subnav-active"), this.subNavOpen = !1)
            },
            langSelOpenHandler: function() {
                this.isDesktop || this.hideSub(), this.isDesktop && (this.nav.find(".menu-top-item.open > a").trigger("click"), this.header.addClass("lang-active"))
            },
            langSelCloseHandler: function() {
                this.isDesktop && this.header.removeClass("lang-active")
            },
            showFirstSubNav: function() {
                this.isDesktop && 0 !== Object.keys(this.subNavs).length && this.subNavs.level1[0].show()
            },
            windowScrollHandler: function() {
                clearTimeout(window.fibScrollTimeout), window.fibScrollTimeout = setTimeout(function() {
                    var e = a(window).scrollTop();
                    !this.userScrolled || this.subNavOpen || this.langsel.open || (!this.isDesktop && this.secNav && this.secNav.linksVisible && this.secNav.toggleSecNav(), e > this.scrollPosition && e > this.topNavContainerHeight && this.header.addClass("fold-active"), e < this.scrollPosition && this.header.removeClass("fold-active"), this.scrollPosition = e)
                }.bind(this), 200)
            },
            windowWheelHandler: function() {
                this.userScrolled = !0
            },
            windowResizeHandler: function() {
                this.topNavContainerHeight = this.header.find("> .container").height(), this.isDesktop && (this.header.removeClass("subnav-active mobnav-active"), this.reset(), this.showFirstSubNav()), this.isDesktop = Modernizr.mq(d)
            },
            windowKeyupHandler: function(e) {
                27 === e.keyCode && (this.nav.find(".menu-top-item.open > a").trigger("click"), this.langsel.hide())
            }
        }), a.extend(o.prototype, {
            show: function() {
                this.subtoggle.parent().addClass("open"), this.subelement.fadeIn(100)
            },
            hide: function() {
                this.subtoggle.parent().removeClass("open"), this.subelement.fadeOut(100)
            },
            toggleHandler: function(e) {
                if (e.preventDefault(), this.subtoggle.parent().hasClass("open")) {
                    if (1 === this.level && Modernizr.mq(d)) return;
                    this.hide(), this.nav.trigger("subnav:close", [this.subid, this.level])
                } else this.show(), this.nav.trigger("subnav:open", [this.subid, this.level])
            }
        }), a.extend(s.prototype, {
            toggleSecNav: function() {
                this.linksVisible = !this.linksVisible, this.element.toggleClass("mobile-sub-open"), this.toggleButton.toggleClass("active"), this.links.slideToggle(125)
            },
            subNavOpenHandler: function() {
                this.isDesktop && (this.subNavOpen = !0)
            },
            subNavCloseHandler: function() {
                this.isDesktop && (this.subNavOpen = !1)
            },
            windowResizeHandler: function() {
                this.isDesktop = Modernizr.mq(d), this.isDesktop ? this.links.show() : this.links.css({
                    display: "flex"
                }).hide()
            }
        }), a.extend(r.prototype, {
            show: function() {
                this.open = !0, this.toggle.addClass("open"), this.langlist.fadeIn(50).addClass("open"), this.nav.trigger("langsel:open", [null, 0])
            },
            hide: function() {
                this.open = !1, this.toggle.removeClass("open"), this.langlist.fadeOut(50).removeClass("open"), this.nav.trigger("langsel:close", [null, 0])
            },
            toggleHandler: function(e) {
                e.preventDefault(), this.open ? this.hide() : this.show()
            }
        }), t.exports = n
    }, {
        undefined: void 0
    }],
    10: [function(e, t, i) {
        e(4), e(3), e(2)
    }, {
        2: 2,
        3: 3,
        4: 4
    }],
    11: [function(e, t, i) {
        var n = e("jquery");
        ! function(e, t, i, n) {
            "use strict";

            function o(t, i) {
                this.context = t, this.$context = e(t), this.options = e.extend({}, e.fn[r.name].defaults, i), this.init()
            }

            function s(e) {
                var t = o.getModuleFn(e);
                return t !== n && "function" == typeof t
            }
            var r = {
                name: "typographer"
            };
            o.prototype.init = function() {
                this.$context.addClass(this.options.contextClass), this.execute()
            }, o.prototype.execute = function() {
                var t = this;
                e.each(t.options.modules, function(i, n) {
                    if (s(n)) {
                        var r = o.getModuleFullName(n);
                        t.$context[r].call(t.$context, t.options[n])
                    } else e.error("Module " + n + " does not exist!")
                })
            }, o.getModuleFn = function(t) {
                var i = o.getModuleFullName(t);
                return e.fn[i]
            }, o.getModuleFullName = function(e) {
                return r.name + "_" + e
            }, e.fn[r.name] = function(t) {
                return this.each(function() {
                    e.data(this, r.name) || e.data(this, r.name, new o(this, t))
                })
            }, e.fn[r.name].defaults = {
                contextClass: "jquery-" + r.name,
                modules: []
            }
        }(n, window, document),
        function(e, t, i, n) {
            "use strict";
            var o = {
                    ns: "typographer",
                    name: "common"
                },
                s = /([.?*+^$[\]\\(){}|-])/g;
            o.fullName = o.ns + "_" + o.name, e[o.fullName] = e[o.fullName] || {}, e[o.fullName].normalizeTagNames = function(t) {
                return e.map(t, function(e) {
                    return e.toLowerCase()
                })
            }, e[o.fullName].getTextNodesIn = function(e, t) {
                function i(e) {
                    if (e.nodeType == s) !t && o.test(e.nodeValue) || n.push(e);
                    else
                        for (var r = 0, a = e.childNodes.length; r < a; ++r) i(e.childNodes[r])
                }
                var n = [],
                    o = /^\s*$/,
                    s = 3;
                return i(e), n
            }, e[o.fullName].shouldIgnore = function(t, i, n) {
                for (; t !== i;) {
                    if (t.tagName && e.inArray(t.tagName.toLowerCase(), n.ignoreTags) > -1) return !0;
                    if (e(t).hasClass(n.ignoreClass)) return !0;
                    t = t.parentNode
                }
                return !1
            }, e[o.fullName].quoteRegex = function(e) {
                return (e + "").replace(s, "\\$1")
            }
        }(n, window, document),
        function(e, t, i, n) {
            "use strict";

            function o(t, i) {
                this.context = t, this.$context = e(t), this.options = e.extend({}, e.fn[p.fullName].defaults, i), this.init()
            }

            function s(t) {
                return e.fn[p.fullName].patterns[t]
            }

            function r(e) {
                for (var t, i = {}, n = 0; n < e.length; n++) {
                    var o = e[n],
                        s = o.replace(/\d/g, ""),
                        r = a(o);
                    t = i;
                    for (var d = 0; d < s.length; d++) {
                        var h = s.charAt(d),
                            p = t[h];
                        t = null == p ? t[h] = d === s.length - 1 ? {
                            $: r
                        } : {} : 0 === p ? t[h] = {
                            $: r
                        } : t[h]
                    }
                }
                return i
            }

            function a(e) {
                var t = [];
                if (1 == "ze4p".split(/\D/).length) {
                    for (var i, n = e.split(""), o = 0, s = !1; o < n.length;) i = n[o], ~~i ? (t.push(i), o += 2, s = !0) : (t.push(0), o += 1, s = !1);
                    s || t.push(0)
                } else {
                    t = e.split(/\D/);
                    for (var r = 0; r < t.length; ++r) t[r] = t[r] || "0"
                }
                return t
            }

            function d(e, t) {
                for (var i = "." + t + ".", n = i.length, o = new Array(n); --n >= 0;) o[n] = 0;
                for (var s = 0; s < i.length; s++)
                    for (var r = e, a = i.slice(s), d = 0; d < a.length; d++) {
                        var h = a.charAt(d);
                        if (null == r[h]) break;
                        if (r = r[h], r.hasOwnProperty("$"))
                            for (var p = r.$, l = 0, c = o.length; l < p.length; l++) s + l > c - 1 || (o[s + l] = Math.max(o[s + l], p[l]))
                    }
                return o
            }

            function h(t, i) {
                var n = e.grep(t.split(/\s+|[.?!,;:"'-()]+/), function(e) {
                    return e.length >= i.minWordLength
                });
                return e.unique(n)
            }
            var p = {
                ns: "typographer",
                name: "hyphen"
            };
            p.fullName = p.ns + "_" + p.name, o.prototype.init = function() {
                this.options.ignoreTags = l.normalizeTagNames(this.options.ignoreTags), this.$context.addClass(this.options.contextClass), o.trie = o.trie || [], o.trie[this.options.lang] || this.rebuildTrie(this.options.lang), this.execute()
            }, o.prototype.execute = function() {
                var t = l.getTextNodesIn(this.context, !1),
                    i = this;
                e.each(t, function() {
                    if (l.shouldIgnore(this, i.context, i.options)) return !0;
                    var e = this.nodeValue;
                    this.nodeValue = i.hyphenate(e)
                })
            }, o.prototype.splitWord = function(e) {
                return o.splitWord(e, this.options)
            }, o.prototype.hyphenate = function(e) {
                return o.hyphenate(e, this.options)
            }, o.prototype.rebuildTrie = function(t) {
                var i = s(t);
                i ? o.trie[t] = r(i) : e.error('Hyphenation patterns for language "' + t + '" are undefined')
            }, o.splitWord = function(t, i) {
                if (i = e.extend({}, e.fn[p.fullName].defaults, i), t.length < i.minWordLength) return [t];
                if (e.fn.typographer_hyphen.patterns.exceptions[i.lang][t]) return e.fn.typographer_hyphen.patterns.exceptions[i.lang][t];
                for (var n = d(o.trie[i.lang], t), s = 0; s <= i.minLeft; s++) n[s] = 0;
                for (var r = 1, a = n.length; r <= i.minRight; r++) n[a - r] = 0;
                for (var h = [], l = "", c = t.split(""), u = 0; u < t.length; u++) {
                    var z = c[u],
                        f = n[u + 2];
                    l += z, f % 2 == 1 && (h.push(l), l = "")
                }
                return h.push(l), h
            }, o.hyphenate = function(t, i) {
                i = e.extend({}, e.fn[p.fullName].defaults, i);
                var n = h(t, i);
                return e.each(n, function(n, o) {
                    var s = e[p.fullName].splitWord(o, i),
                        r = s.join(c.shy),
                        a = new RegExp(l.quoteRegex(o), "g");
                    t = t.replace(a, r)
                }), t
            }, e.fn[p.fullName] = function(t) {
                return this.each(function() {
                    e.data(this, p.fullName) || e.data(this, p.fullName, new o(this, t))
                })
            }, e.fn[p.fullName].entities = {
                shy: "­"
            }, e.fn[p.fullName].defaults = {
                contextClass: "jquery-" + p.ns + "-" + p.name,
                lang: "pl",
                minWordLength: 3,
                minLeft: 2,
                minRight: 2,
                ignoreTags: ["pre", "code"],
                ignoreClass: "ignore-" + p.name
            }, e[p.fullName] = {
                splitWord: o.splitWord,
                hyphenate: o.hyphenate
            };
            var l = e.typographer_common,
                c = e.fn[p.fullName].entities
        }(n, window, document),
        function(e, t, i, n) {
            "use strict";

            function o(t, i) {
                this.context = t, this.$context = e(t), this.options = e.extend({}, e.fn[r.fullName].defaults, i), this.init()
            }

            function s(e) {
                var t = e.forbidden.join("|"),
                    i = "(" + t + ")(?:\\n|\\s)+";
                o.findOrphanRegex = new RegExp(i, "gi");
                var n = "\\s+(" + t + ")$";
                o.orphanAtTheEndRegex = new RegExp(n, "i")
            }
            var r = {
                ns: "typographer",
                name: "orphan"
            };
            r.fullName = r.ns + "_" + r.name, o.prototype.init = function() {
                this.options.ignoreTags = a.normalizeTagNames(this.options.ignoreTags), this.$context.addClass(this.options.contextClass), s(this.options), this.execute()
            }, o.prototype.execute = function() {
                var t = !1,
                    i = a.getTextNodesIn(this.context, !1),
                    n = this;
                e.each(i, function() {
                    if (a.shouldIgnore(this, n.context, n.options)) return !0;
                    var e = this.nodeValue;
                    e = o.deorphanize(e, this.options), t && (e = e.replace(/^\s+/, d.nbsp), t = !1), o.orphanAtTheEndRegex.test(e) && (t = !0), this.nodeValue = e
                })
            }, o.deorphanize = function(t, i) {
                return i = e.extend({}, e.fn[r.fullName].defaults, i), o.findOrphanRegex || s(i), t = t.replace(o.findOrphanRegex, function(e, i, n) {
                    var o = t.substring(n - 1, n);
                    return " " !== o && "" !== o ? e : i + d.nbsp
                })
            }, e.fn[r.fullName] = function(t) {
                return this.each(function() {
                    e.data(this, r.fullName) || e.data(this, r.fullName, new o(this, t))
                })
            }, e.fn[r.fullName].entities = {
                nbsp: " "
            }, e.fn[r.fullName].defaults = {
                contextClass: "jquery-" + r.ns + "-" + r.name,
                forbidden: ["a", "i", "o", "u", "w", "z"],
                ignoreTags: ["pre", "code"],
                ignoreClass: "ignore-" + r.name
            }, e[r.fullName] = {
                deorphanize: o.deorphanize
            };
            var a = e.typographer_common,
                d = e.fn[r.fullName].entities
        }(n, window, document),
        function(e) {
            e.fn.typographer_hyphen.patterns = e.fn.typographer_hyphen.patterns || {}, e.fn.typographer_hyphen.patterns.pl = [".ćć8", ".ćł8", ".ćń8", ".ćś8", ".ćź8", ".ćż8", ".ć8", ".ćb8", ".ćc8", ".ćd8", ".ćf8", ".ćg8", ".ćh8", ".ćj8", ".ćk8", ".ćl8", ".ćm8", ".ćn8", ".ćp8", ".ćr8", ".ćs8", ".ćt8", ".ćv8", ".ćw8", ".ćwier2ć3", ".ćx8", ".ćz8", ".łć8", ".łł8", ".łń8", ".łś8", ".łź8", ".łż8", ".ł8", ".łb8", ".łc8", ".łd8", ".łf8", ".łg8", ".łh8", ".łj8", ".łk8", ".łl8", ".łm8", ".łn8", ".łp8", ".łr8", ".łs8", ".łt8", ".łv8", ".łw8", ".łx8", ".łz8", ".ńć8", ".ńł8", ".ńń8", ".ńś8", ".ńź8", ".ńż8", ".ń8", ".ńb8", ".ńc8", ".ńd8", ".ńf8", ".ńg8", ".ńh8", ".ńj8", ".ńk8", ".ńl8", ".ńm8", ".ńn8", ".ńp8", ".ńr8", ".ńs8", ".ńt8", ".ńv8", ".ńw8", ".ńx8", ".ńz8", ".ść8", ".śł8", ".śń8", ".śś8", ".śź8", ".śż8", ".ś8", ".śb8", ".śc8", ".śd8", ".śf8", ".śg8", ".śh8", ".śj8", ".śk8", ".śl8", ".śm8", ".śn8", ".śp8", ".śró2d5", ".śródr2", ".śr8", ".śs8", ".śt8", ".śv8", ".św8", ".światło3w2", ".śx8", ".śz8", ".źć8", ".źł8", ".źń8", ".źś8", ".źź8", ".źż8", ".ź8", ".źb8", ".źc8", ".źdź8", ".źd8", ".źf8", ".źg8", ".źh8", ".źj8", ".źk8", ".źl8", ".źm8", ".źn8", ".źp8", ".źr8", ".źs8", ".źt8", ".źv8", ".źw8", ".źx8", ".źz8", ".żć8", ".żł8", ".żń8", ".żś8", ".żź8", ".żż8", ".ż8", ".żb8", ".żc8", ".żd8", ".żf8", ".żg8", ".żh8", ".żj8", ".żk8", ".żl8", ".żm8", ".żn8", ".żp8", ".żr8", ".żs8", ".żt8", ".żv8", ".żw8", ".żx8", ".żz8", ".a2b2s3t", ".a2d3", ".ad4a", ".ad4e", ".ad4i", ".ad4o", ".ad4u", ".ad4y", ".ad5apt", ".ad5iu", ".ad5op", ".ad5or", ".ae3ro", ".aeroa2", ".aeroe2", ".aeroi2", ".aeroo2", ".aerou2", ".antya2", ".antye2", ".antyi2", ".antyo2", ".antyu2", ".arcy3ł2", ".arcy3b2", ".arcy3bz2", ".arcy3k2", ".arcy3m2", ".arcya2", ".arcye2", ".arcyi2", ".arcyo2", ".arcyu2", ".au3g2", ".au3k2", ".au3t2", ".auto3ch2", ".autoa2", ".autoe2", ".autoi2", ".autoo2", ".autotran2s3", ".autou2", ".bć8", ".bł8", ".bń8", ".bś8", ".bź8", ".bż8", ".b8", ".bb8", ".bc8", ".bd8", ".be2z3", ".be3z4an", ".be3z4ec", ".be3z4ik", ".bezch2", ".bezm2", ".bezo2", ".bezo2b1j", ".bezw2", ".bezzw2", ".bf8", ".bg8", ".bh8", ".bj8", ".bk8", ".bl8", ".bm8", ".bn8", ".bp8", ".br8", ".brz8", ".bs8", ".bt8", ".bv8", ".bw8", ".bx8", ".bz8", ".cć8", ".cł8", ".cń8", ".cś8", ".cź8", ".cż8", ".c8", ".cało3ś2", ".cało3k2", ".cb8", ".cc8", ".cd8", ".cf8", ".cg8", ".ch8", ".chrz8", ".cienko3w2", ".ciepło3kr2", ".cj8", ".ck8", ".cl8", ".cm8", ".cn8", ".cp8", ".cr8", ".cs8", ".ct8", ".cv8", ".cw8", ".cx8", ".cz8", ".czarno3k2", ".czk8", ".cztere2ch3", ".czterechse2t3", ".cztero3ś2", ".czwó2r3", ".czwó3r4ą", ".czwó3r4ę", ".czwó3r4a", ".czwó3r4e", ".czwó3r4o", ".dć8", ".dł8", ".długo3tr2", ".długo3w2", ".dń8", ".dś8", ".dź8", ".dż8", ".d8", ".daleko3w2", ".db8", ".dc8", ".dd8", ".de2z3", ".de3z4a3bil", ".de3z4a3wu", ".de3z4el", ".de3z4er", ".de3z4y", ".deza2", ".dezo2", ".df8", ".dg8", ".dh8", ".dj8", ".dk8", ".dl8", ".dm8", ".dn8", ".do3ć2", ".do3ł2", ".do3ś2", ".do3ź2", ".do3ż2", ".do3b2", ".do3c2", ".do3d2", ".do3f2", ".do3g2", ".do3h2", ".do3k2", ".do3l2", ".do3m2", ".do3p2", ".do3r2", ".do3s2", ".do3t2", ".do3w2", ".do3z2", ".do4ł3k", ".do4k3t", ".do4l3n", ".do4m3k", ".do4r3s", ".do4w3c", ".do5m4k2n", ".dobr2", ".dobrz2", ".doch2", ".docz2", ".dodź2", ".dodż2", ".dodz2", ".dogrz2", ".dopch2", ".doprz2", ".dorż2", ".dorz2", ".dosch2", ".dosm2", ".dosz2", ".dotk2", ".dotr2", ".dp8", ".dr8", ".drogo3w2", ".drz8", ".ds8", ".dt8", ".dv8", ".dwó2j3", ".dwó3j4ą", ".dwó3j4ę", ".dwó3j4a", ".dwó3j4e", ".dwó3j4o", ".dw8", ".dx8", ".dy2s3", ".dy2z3", ".dy3s4e", ".dy3s4o", ".dy3s4ta", ".dy3s4y", ".dy3sz", ".dy3z4e", ".dyzu2", ".dz8", ".dziesięcio3ś2", ".dziewięćse2t3", ".dziewię2ć3", ".dziewięcio3ś2", ".e2k2s3", ".e2m3e2s5ze2t", ".e2s1e2s1ma", ".e2s1ha", ".e2s1t", ".egoa2", ".egoe2", ".egoi2", ".egoo2", ".egou2", ".eks4y", ".elektroa2", ".elektroe2", ".elektroi2", ".elektroo2", ".elektrou2", ".fć8", ".fł8", ".fń8", ".fś8", ".fź8", ".fż8", ".f8", ".fb8", ".fc8", ".fd8", ".ff8", ".fg8", ".fh8", ".fj8", ".fk8", ".fl8", ".fm8", ".fn8", ".fp8", ".fr8", ".fs8", ".ft8", ".fv8", ".fw8", ".fx8", ".fz8", ".gć8", ".gł8", ".gń8", ".gś8", ".gź8", ".gż8", ".g8", ".gb8", ".gc8", ".gd8", ".ge2o3", ".gf8", ".gg8", ".gh8", ".gj8", ".gk8", ".gl8", ".gm8", ".gn8", ".go2u3", ".gp8", ".gr8", ".grubo3w2", ".grz8", ".gs8", ".gt8", ".gv8", ".gw8", ".gx8", ".gz8", ".hć8", ".hł8", ".hń8", ".hś8", ".hź8", ".hż8", ".h8", ".hb8", ".hc8", ".hd8", ".hf8", ".hg8", ".hh8", ".hipe2r3", ".hipe3r4o", ".hipera2", ".hipere2", ".hj8", ".hk8", ".hl8", ".hm8", ".hn8", ".hp8", ".hr8", ".hs8", ".ht8", ".hv8", ".hw8", ".hx8", ".hz8", ".i2n3", ".i2s3l", ".i3n4ic", ".i3n4o", ".i3n4u", ".i4n5o2k", ".in4f3lan", ".ino3w2", ".izoa2", ".izoe2", ".izoi2", ".izoo2", ".izou2", ".jć8", ".jł8", ".jń8", ".jś8", ".jź8", ".jż8", ".j8", ".jadło3w2", ".jb8", ".jc8", ".jd8", ".jf8", ".jg8", ".jh8", ".jj8", ".jk8", ".jl8", ".jm8", ".jn8", ".jp8", ".jr8", ".js8", ".jt8", ".jv8", ".jw8", ".jx8", ".jz8", ".kć8", ".kł8", ".kń8", ".kś8", ".kź8", ".kż8", ".k8", ".kb8", ".kc8", ".kd8", ".kf8", ".kg8", ".kh8", ".kilkuse2t3", ".kilkuseto2", ".kj8", ".kk8", ".kl8", ".km8", ".kn8", ".koło3w2", ".kon2t2r3", ".kon3tr4a", ".kon3tr4e", ".kon3tr4o3l", ".kon3tr4o3w", ".kon3tr4y", ".kon4tr5a2gi", ".kon4tr5a2se", ".kon4tr5a2sy", ".kon4tr5a2ta", ".kon4tr5adm", ".kon4tr5akc", ".kon4tr5alt", ".kon4tr5arg", ".kontro2", ".kontru2", ".kp8", ".krótko3tr2", ".krótko3w2", ".kr8", ".kro2ć3", ".krz8", ".ks8", ".kt8", ".kv8", ".kw8", ".kx8", ".kz8", ".lć8", ".lł8", ".lń8", ".lś8", ".lź8", ".lż8", ".l8", ".lb8", ".lc8", ".ld8", ".lf8", ".lg8", ".lh8", ".lj8", ".lk8", ".ll8", ".lm8", ".ln8", ".lp8", ".lr8", ".ls8", ".lt8", ".ludo3w2", ".lv8", ".lw8", ".lx8", ".lz8", ".mć8", ".mł8", ".mń8", ".mś8", ".mź8", ".mż8", ".m8", ".mb8", ".mc8", ".md8", ".mf8", ".mg8", ".mh8", ".mili3amp", ".mj8", ".mk8", ".ml8", ".mm8", ".mn8", ".możno3w2", ".mp8", ".mr8", ".ms8", ".mt8", ".mv8", ".mw8", ".mx8", ".mz8", ".nć8", ".nł8", ".nń8", ".nś8", ".nź8", ".nż8", ".n8", ".na2d2", ".na2j", ".na3ć2", ".na3ł2", ".na3ś2", ".na3ź2", ".na3ż2", ".na3b2", ".na3c2", ".na3dą", ".na3dę", ".na3dź2", ".na3d4łub", ".na3d4ir", ".na3d4much", ".na3d4ręcz", ".na3d4r2w", ".na3d4repcz", ".na3d4rept", ".na3d4ruk", ".na3d4rz", ".na3d4worn", ".na3daj", ".na3de", ".na3do", ".na3dy", ".na3dzi", ".na3f2", ".na3g2", ".na3h2", ".na3ją", ".na3ję", ".na3jazd", ".na3je", ".na3k2", ".na3l2", ".na3m2", ".na3p2", ".na3r2", ".na3s2", ".na3t2", ".na3u2", ".na3w2", ".na3z2", ".na4d3o2b2ł", ".na4d3o2bojcz", ".na4d3o2bowi", ".na4d3o2brot", ".na4d3o2drz", ".na4d3o2kien", ".na4d3olbrz", ".na4d5rzą", ".na4d5rzę", ".na4d5rzecz", ".na4d5rzy", ".na4d5ziem", ".na4f3c", ".na4f3t", ".na4j3e2f", ".na4j3e2g", ".na4j3e2k2s", ".na4j3e2ko", ".na4j3e2n", ".na4j3e2r", ".na4j3e2s", ".na4j3e2w", ".na4j3emf", ".na4j3eu", ".na4r3c", ".na4r3d", ".na4r3k", ".na4r3r", ".na4r3t", ".nabrz2", ".nach2", ".nacz2", ".nadśrod5ziem", ".nad3ć2", ".nad3ł2", ".nad3ś2", ".nad3b2", ".nad3c2", ".nad3d2", ".nad3e2tat", ".nad3f2", ".nad3g2", ".nad3h2", ".nad3i2", ".nad3j2", ".nad3k2", ".nad3l2", ".nad3m2", ".nad3n2", ".nad3p2", ".nad3r2", ".nad3s2", ".nad3t2", ".nad3u2", ".nad3w2", ".nad5ż2", ".nad5zó", ".nad5z2mys", ".nad5zo", ".nad5zwycz", ".nadch2", ".nadcz2", ".naddź2", ".nade3ć2", ".nade3ł2", ".nade3ś2", ".nade3ź2", ".nade3ż2", ".nade3b2", ".nade3c2", ".nade3d2", ".nade3f2", ".nade3g2", ".nade3h2", ".nade3k2", ".nade3l2", ".nade3m2", ".nade3p2", ".nade3r2", ".nade3s2", ".nade3t2", ".nade3w2", ".nade3z2", ".nade4p3c", ".nade4p3n", ".nade4p3t", ".nadech2", ".nadecz2", ".nadedź2", ".nadedż2", ".nadedz2", ".naderż2", ".naderz2", ".nadesz2", ".nadsz2", ".nadtr2", ".nadz2", ".nagrz2", ".naj3ć2", ".naj3ł2", ".naj3ś2", ".naj3ź2", ".naj3ż2", ".naj3akt", ".naj3au", ".naj3b2", ".naj3c2", ".naj3d2", ".naj3f2", ".naj3g2", ".naj3h2", ".naj3i2", ".naj3k2", ".naj3l2", ".naj3m2", ".naj3o2", ".naj3o2ć2", ".naj3o2ł2", ".naj3o2ś2", ".naj3o2ź2", ".naj3o2ż2", ".naj3o2b2", ".naj3o2c2", ".naj3o2d2", ".naj3o2f2", ".naj3o2g2", ".naj3o2h2", ".naj3o2k2", ".naj3o2l2", ".naj3o2m2", ".naj3o2p2", ".naj3o2r2", ".naj3o2s2", ".naj3o2t2", ".naj3o2w2", ".naj3o2z2", ".naj3p2", ".naj3r2", ".naj3ro2z3", ".naj3s2", ".naj3t2", ".naj3u2", ".naj3w2", ".naj3z2", ".najbe2z3", ".najbezw2", ".najch2", ".najcz2", ".najdź2", ".najdż2", ".najdo3ć2", ".najdo3ł2", ".najdo3ś2", ".najdo3ź2", ".najdo3ż2", ".najdo3b2", ".najdo3c2", ".najdo3d2", ".najdo3f2", ".najdo3g2", ".najdo3h2", ".najdo3k2", ".najdo3l2", ".najdo3m2", ".najdo3p2", ".najdo3r2", ".najdo3s2", ".najdo3t2", ".najdo3w2", ".najdo3z2", ".najdoch2", ".najdocz2", ".najdodź2", ".najdodż2", ".najdodz2", ".najdorz2", ".najdosz2", ".najdotk2", ".najdz2", ".najkr2", ".najob3ć2", ".najob3ł2", ".najob3ś2", ".najob3ź2", ".najob3ż2", ".najob3c2", ".najob3d2", ".najob3f2", ".najob3g2", ".najob3h2", ".najob3j2", ".najob3k2", ".najob3l2", ".najob3m2", ".najob3n2", ".najob3p2", ".najob3s2", ".najob3t2", ".najob3w2", ".najobch2", ".najobcz2", ".najobdź2", ".najobdż2", ".najobdz2", ".najobrz2", ".najobsz2", ".najoch2", ".najocz2", ".najodź2", ".najod3ć2", ".najod3ś2", ".najod3c2", ".najod3d2", ".najod3f2", ".najod3g2", ".najod3h2", ".najod3j2", ".najod3k2", ".najod3l2", ".najod3m2", ".najod3n2", ".najod3p2", ".najod3s2", ".najod3t2", ".najod3w2", ".najod5ż2", ".najodch2", ".najodcz2", ".najoddź2", ".najoddż2", ".najoddz2", ".najodsz2", ".najodz2", ".najorz2", ".najosz2", ".najro3z4u", ".najrz2", ".najsm2", ".najsz2", ".najtk2", ".najtr2", ".najucz2", ".najzw2", ".nakr2", ".napo2d2", ".napo3ć2", ".napo3ł2", ".napo3ś2", ".napo3ź2", ".napo3ż2", ".napo3b2", ".napo3c2", ".napo3f2", ".napo3g2", ".napo3h2", ".napo3k2", ".napo3l2", ".napo3m2", ".napo3p2", ".napo3r2", ".napo3s2", ".napo3t2", ".napo3w2", ".napo3z2", ".napo4m3p", ".napoch2", ".napocz2", ".napodź2", ".napodż2", ".napod3d", ".napomk2", ".naporz2", ".naposz2", ".naprz2", ".narż2", ".naro2z3", ".narz2", ".nasm2", ".nasz2", ".natch2", ".natk2", ".naz3m2", ".nazw2", ".nb8", ".nc8", ".nd8", ".ne2o3", ".nf8", ".ng8", ".nh8", ".nie3ć2", ".nie3ł2", ".nie3ś2", ".nie3ź2", ".nie3ż2", ".nie3b2", ".nie3c2", ".nie3d2", ".nie3f2", ".nie3g2", ".nie3h2", ".nie3k2", ".nie3l2", ".nie3m2", ".nie3p2", ".nie3r2", ".nie3s2", ".nie3t2", ".nie3u2", ".nie3w2", ".nie3z2", ".nie4c3c", ".nie4c3k", ".nie4dź3", ".nie4m3c", ".nie4m3k", ".niech2", ".niecz2", ".niedż2", ".niedo3ć2", ".niedo3ł2", ".niedo3ś2", ".niedo3ź2", ".niedo3ż2", ".niedo3b2", ".niedo3c2", ".niedo3d2", ".niedo3f2", ".niedo3g2", ".niedo3h2", ".niedo3k2", ".niedo3l2", ".niedo3m2", ".niedo3p2", ".niedo3r2", ".niedo3s2", ".niedo3t2", ".niedo3w2", ".niedo3z2", ".niedobrz2", ".niedoch2", ".niedocz2", ".niedodź2", ".niedodż2", ".niedodz2", ".niedokr2", ".niedomk2", ".niedopch2", ".niedorz2", ".niedosz2", ".niedotk2", ".niedz2", ".nieoć2", ".nieoł2", ".nieoś2", ".nieoź2", ".nieoż2", ".nieo2", ".nieob2", ".nieob3ć2", ".nieob3ś2", ".nieob3ź2", ".nieob3ż2", ".nieob3c2", ".nieob3d2", ".nieob3f2", ".nieob3g2", ".nieob3h2", ".nieob3j2", ".nieob3k2", ".nieob3m2", ".nieob3p2", ".nieob3s2", ".nieob3w2", ".nieobch2", ".nieobcz2", ".nieobdź2", ".nieobdż2", ".nieobdz2", ".nieobsz2", ".nieoc2", ".nieoch2", ".nieocz2", ".nieodź2", ".nieod2", ".nieod3ć2", ".nieod3ł2", ".nieod3ś2", ".nieod3c2", ".nieod3d2", ".nieod3f2", ".nieod3g2", ".nieod3h2", ".nieod3j2", ".nieod3k2", ".nieod3l2", ".nieod3n2", ".nieod3p2", ".nieod3s2", ".nieod3t2", ".nieod3wr", ".nieod5ż2", ".nieodch2", ".nieodcz2", ".nieoddź2", ".nieoddż2", ".nieoddz2", ".nieodsz2", ".nieodw2", ".nieodz2", ".nieof2", ".nieog2", ".nieoh2", ".nieok2", ".nieol2", ".nieom2", ".nieop2", ".nieor2", ".nieorz2", ".nieos2", ".nieosz2", ".nieot2", ".nieow2", ".nieoz2", ".niepo2d2", ".niepo3ć2", ".niepo3ł2", ".niepo3ś2", ".niepo3ź2", ".niepo3ż2", ".niepo3b2", ".niepo3c2", ".niepo3dź2", ".niepo3d4łu", ".niepo3d4much", ".niepo3d4ręcz", ".niepo3d4raż", ".niepo3d4rap", ".niepo3d4repcz", ".niepo3d4rept", ".niepo3d4waj", ".niepo3d4woj", ".niepo3do", ".niepo3du", ".niepo3dz2", ".niepo3f2", ".niepo3g2", ".niepo3h2", ".niepo3k2", ".niepo3l2", ".niepo3m2", ".niepo3p2", ".niepo3r2", ".niepo3s2", ".niepo3t2", ".niepo3w2", ".niepo3z2", ".niepo4d3o2choc", ".niepo4d3o2strz", ".niepoch2", ".niepocz2", ".niepod3ć2", ".niepod3ł2", ".niepod3ś2", ".niepod3b2", ".niepod3c2", ".niepod3d2", ".niepod3f2", ".niepod3g2", ".niepod3h2", ".niepod3j2", ".niepod3k2", ".niepod3l2", ".niepod3m2", ".niepod3n2", ".niepod3p2", ".niepod3r2", ".niepod3s2", ".niepod3t2", ".niepod3w2", ".niepod5ż", ".niepodch2", ".niepodcz2", ".niepoddź2", ".niepoddż2", ".niepodsm2", ".niepodsz2", ".nieporz2", ".nieposm2", ".nieposz2", ".nieprzełk2", ".nieprze2d2", ".nieprze3ć2", ".nieprze3ł2", ".nieprze3ś2", ".nieprze3ź2", ".nieprze3ż2", ".nieprze3b2", ".nieprze3brz2", ".nieprze3c2", ".nieprze3dź2", ".nieprze3d4łuż", ".nieprze3d4much", ".nieprze3d4ramat", ".nieprze3d4ruk", ".nieprze3d4ryl", ".nieprze3d4rz2", ".nieprze3d4um", ".nieprze3dy", ".nieprze3dz2", ".nieprze3e2k2s3", ".nieprze3f2", ".nieprze3g2", ".nieprze3h2", ".nieprze3k2", ".nieprze3l2", ".nieprze3m2", ".nieprze3n2", ".nieprze3p2", ".nieprze3r2", ".nieprze3s2", ".nieprze3t2", ".nieprze3w2", ".nieprze3z2", ".nieprze4d5łużyc", ".nieprze4d5ż2", ".nieprze4d5z2a", ".nieprze4d5zg2", ".nieprze4d5zim", ".nieprze4d5zj", ".nieprze4d5zl", ".nieprze4d5zw2r", ".nieprze4d5zwoj", ".nieprzech2", ".nieprzecz2", ".nieprzed3ć2", ".nieprzed3ł2", ".nieprzed3ś2", ".nieprzed3c2", ".nieprzed3d2", ".nieprzed3f2", ".nieprzed3g2", ".nieprzed3h2", ".nieprzed3i2", ".nieprzed3j2", ".nieprzed3k2", ".nieprzed3l2", ".nieprzed3m2", ".nieprzed3n2", ".nieprzed3p2", ".nieprzed3r2", ".nieprzed3s2", ".nieprzed3sz2", ".nieprzed3t2", ".nieprzed3u2", ".nieprzed3w2", ".nieprzedch2", ".nieprzedcz2", ".nieprzeddź2", ".nieprzeddż2", ".nieprzeddz2", ".nieprzegrz2", ".nieprzekl2", ".nieprzekr2", ".nieprzepch2", ".nieprzerż2", ".nieprzerz2", ".nieprzesch2", ".nieprzesm2", ".nieprzesz2", ".nieprzetk2", ".nieprzetr2", ".niero2z3", ".niero3z4e", ".niero3z4u", ".nierozś2", ".nierozbrz2", ".nieroze3r2", ".nierozm2", ".nieroztr2", ".nierz2", ".niesu2b3", ".niesu3b4ie", ".niesz2", ".nietk2", ".nietr2", ".nieucz2", ".nieuw2", ".niewy3ć2", ".niewy3ł2", ".niewy3ś2", ".niewy3ź2", ".niewy3ż2", ".niewy3b2", ".niewy3c2", ".niewy3d2", ".niewy3f2", ".niewy3g2", ".niewy3h2", ".niewy3k2", ".niewy3l2", ".niewy3m2", ".niewy3p2", ".niewy3r2", ".niewy3s2", ".niewy3t2", ".niewy3w2", ".niewy3z2", ".niewybrz2", ".niewych2", ".niewycz2", ".niewydź2", ".niewydż2", ".niewydz2", ".niewyrz2", ".niewysz2", ".niewytk2", ".niewytr2", ".niezw2", ".nj8", ".nk8", ".nl8", ".nm8", ".nn8", ".np8", ".nr8", ".ns8", ".nt8", ".nv8", ".nw8", ".nx8", ".nz8", ".oć2", ".oś2", ".ośmio3ś2", ".oź2", ".oż2", ".o2b2", ".o2d2", ".o2t3chł", ".o3b4łą", ".o3b4łę", ".o3b4łoc", ".o3b4luzg", ".o3b4rać", ".o3b4raso", ".o3b4roń", ".o3b4ron", ".o3b4ryź", ".o3b4ryz", ".o3b4rz2", ".o3be", ".o3bi", ".o3d4iu", ".o3d4ręt", ".o3d4rap", ".o3d4robin", ".o3d4rut", ".o3d4rwi", ".o3d4rzeć", ".o3d4rzw", ".o3d6zia", ".o3d6zie", ".o3de", ".o3l2śn", ".o4b5łocz", ".o4b5rzą", ".o4b5rzęd", ".o4b5rzez", ".o4b5rzuc", ".o4b5rzut", ".o4b5rzyn", ".o4d7ziar", ".o4d7ziem", ".oa3z", ".ob3ć2", ".ob3ł2", ".ob3ś2", ".ob3ź2", ".ob3ż2", ".ob3c2", ".ob3d2", ".ob3f2", ".ob3g2", ".ob3h2", ".ob3j2", ".ob3k2", ".ob3l2", ".ob3m2", ".ob3n2", ".ob3o2strz", ".ob3p2", ".ob3r", ".ob3s2", ".ob3t2", ".ob3u2m2", ".ob3w2", ".obch2", ".obcz2", ".obdź2", ".obdż2", ".obdz2", ".obe3ć2", ".obe3ł2", ".obe3ś2", ".obe3ź2", ".obe3ż2", ".obe3b2", ".obe3c2", ".obe3d2", ".obe3f2", ".obe3g2", ".obe3h2", ".obe3k2", ".obe3l2", ".obe3m2", ".obe3p2", ".obe3r2", ".obe3r3t", ".obe3s2", ".obe3t2", ".obe3w2", ".obe3z2", ".obe4c3n", ".obe4z3w", ".obech2", ".obecz2", ".obedź2", ".obedż2", ".obedz2", ".oberż2", ".ober3m", ".oberz2", ".obesch2", ".obesz2", ".obetk2", ".obi3b2", ".obsz2", ".oc2", ".och2", ".ochrz2", ".ocz2", ".odź2", ".od3ć2", ".od3ś2", ".od3au", ".od3b2", ".od3c2", ".od3d2", ".od3f2", ".od3g2", ".od3h2", ".od3i2", ".od3i2zo", ".od3j2", ".od3k2", ".od3l2", ".od3m2", ".od3n2", ".od3o2s", ".od3p2", ".od3r2", ".od3s2", ".od3t2", ".od3u2cz", ".od3u2m2", ".od3w2", ".od5ż2", ".od5z2", ".odbe2z3", ".odch2", ".odcz2", ".oddź2", ".oddż2", ".oddz2", ".ode3ć2", ".ode3ł2", ".ode3ś2", ".ode3ź2", ".ode3ż2", ".ode3b2", ".ode3c2", ".ode3d2", ".ode3f2", ".ode3g2", ".ode3h2", ".ode3k2", ".ode3l2", ".ode3m2", ".ode3mk2", ".ode3p2", ".ode3r2", ".ode3s2", ".ode3t2", ".ode3w2", ".ode3z2", ".odech2", ".odecz2", ".odedź2", ".odedż2", ".odedz2", ".odepch2", ".oderż2", ".oderz2", ".odesz2", ".odetch2", ".odetk2", ".odkrz2", ".odrz2", ".odsz2", ".of2", ".ogólno3k2", ".og2", ".ognio3tr2", ".oh2", ".ok2", ".oka3m2", ".okr2", ".ole2o3", ".om2", ".op2", ".opch2", ".or2ż2", ".or2tę", ".or2z2", ".os2", ".osie2m3", ".osiemse2t3", ".osz2", ".ot2", ".ow2", ".oz2", ".pć8", ".pł8", ".płasko3w2", ".pń8", ".półk2", ".półkr2", ".półm2", ".póło2", ".półob3r", ".półom2d", ".półprzy3m2k", ".pó2ł3", ".pó3ł4ą", ".pó3ł4ę", ".pó3ł4ecz", ".pó3ł4y", ".pś8", ".pź8", ".pż8", ".p8", ".pb8", ".pc8", ".pch8", ".pd8", ".pełno3kr2", ".pe2r3", ".pe3c2k", ".pe3r4e", ".pe3r4i", ".pe3r4o", ".pe3r4u", ".pe3r4y", ".pe4r5i2n", ".pee2se2l", ".pepee2r", ".pepee2s", ".peze2t1pee2r", ".pf8", ".pg8", ".ph8", ".pięćse2t3", ".pię2ć3", ".pięcio3ś2", ".pierwo3w2", ".piono3w2", ".pj8", ".pk8", ".pl8", ".pm8", ".pn8", ".połk2", ".po2d2", ".po3ć2", ".po3ł2", ".po3ś2", ".po3ź2", ".po3ż2", ".po3b2", ".po3c2", ".po3dą", ".po3dę", ".po3dź2", ".po3d4łu", ".po3d4much", ".po3d4naw", ".po3d4ręcz", ".po3d4rętw", ".po3d4róż", ".po3d4r2wi", ".po3d4raż", ".po3d4rap", ".po3d4repcz", ".po3d4rept", ".po3d4roż", ".po3d4robó", ".po3d4roba", ".po3d4robo", ".po3d4roby", ".po3d4rocz", ".po3d4ruzg", ".po3d4ryg", ".po3d4rze", ".po3d4wójn", ".po3d4wór", ".po3d4waj", ".po3d4woi", ".po3d4woj", ".po3d4worz", ".po3da", ".po3de", ".po3dej", ".po3diu", ".po3do", ".po3du", ".po3dy", ".po3dz2", ".po3e2k2s3", ".po3f2", ".po3g2", ".po3h2", ".po3k2", ".po3l2", ".po3m2", ".po3p2", ".po3rż", ".po3r2", ".po3s2", ".po3t2", ".po3w2", ".po3z2", ".po4ń3c", ".po4cz3d", ".po4cz3t", ".po4d3ów", ".po4d3e4k2s3", ".po4d3o2bóz", ".po4d3o2biad", ".po4d3o2bojcz", ".po4d3o2braz", ".po4d3o2choc", ".po4d3o2dm", ".po4d3o2f", ".po4d3o2g", ".po4d3o2kien", ".po4d3o2kn", ".po4d3o2kręg", ".po4d3o2kres", ".po4d3o2piecz", ".po4d3o2ryw", ".po4d3o2siniak", ".po4d3o2strz", ".po4d3obsz", ".po4d3odd", ".po4d3olbrz", ".po4d3u2cz", ".po4d3u2dz", ".po4d3u2pa", ".po4d3u2ral", ".po4d3u2sta", ".po4d3u2szcz", ".po4d5ręczn", ".po4d5zakr", ".po4d5zam", ".po4d5zast", ".po4d5zbi", ".po4d5ze", ".po4d5zielenią", ".po4d5zielenić", ".po4d5zielenię", ".po4d5zielenił", ".po4d5zielenic", ".po4d5zielenien", ".po4d5zielenil", ".po4d5zielenim", ".po4d5zielenio", ".po4d5zielenis", ".po4d5ziem", ".po4d5ziom", ".po4d5zw2r", ".po4l3s", ".po4m3p", ".po4r3c", ".po4r3f", ".po4r3n", ".po4r3t", ".po4st3d", ".po4st3f", ".po4st3g", ".po4st3h", ".po4st3i2", ".po4st3k", ".po4st3l", ".po4st3m", ".po4st3p", ".po4st3rom", ".po4st3s", ".po5d4uszczyn", ".po5r4tę", ".pobr2", ".pobrz2", ".poch2", ".pochrz2", ".pocz2", ".pod3ć2", ".pod3ł2", ".pod3ś2", ".pod3śró2d5", ".pod3alp", ".pod3b2", ".pod3c2", ".pod3d2", ".pod3f2", ".pod3g2", ".pod3h2", ".pod3i2n", ".pod3j2", ".pod3k2", ".pod3l2", ".pod3m2", ".pod3n2", ".pod3p2", ".pod3r2", ".pod3s2", ".pod3t2", ".pod3w2", ".pod5ż2", ".podch2", ".podcz2", ".poddź2", ".poddż2", ".pode3ć2", ".pode3ł2", ".pode3ś2", ".pode3ź2", ".pode3ż2", ".pode3b2", ".pode3c2", ".pode3d2", ".pode3f2", ".pode3g2", ".pode3h2", ".pode3k2", ".pode3l2", ".pode3m2", ".pode3p2", ".pode3r2", ".pode3s2", ".pode3t2", ".pode3tk2", ".pode3w2", ".pode3z2", ".podech2", ".podecz2", ".podedź2", ".podedż2", ".podedz2", ".podepch2", ".poderż2", ".poderz2", ".podesch2", ".podesz2", ".podro2z3", ".podsm2", ".podsz2", ".pogrz2", ".pokl2", ".pokr2", ".pom4pk", ".pomk2", ".pona2d2", ".pona3ć2", ".pona3ł2", ".pona3ś2", ".pona3ź2", ".pona3ż2", ".pona3b2", ".pona3c2", ".pona3cz2", ".pona3dź2", ".pona3do", ".pona3f2", ".pona3g2", ".pona3h2", ".pona3k2", ".pona3l2", ".pona3m2", ".pona3p2", ".pona3r2", ".pona3s2", ".pona3t2", ".pona3w2", ".pona3z2", ".pona4f3t", ".ponabrz2", ".ponach2", ".ponad3ć2", ".ponad3ś2", ".ponad3c2", ".ponad3ch2", ".ponad3cz2", ".ponad3dź2", ".ponad3f2", ".ponad3g2", ".ponad3h2", ".ponad3j2", ".ponad3k2", ".ponad3l2", ".ponad3p2", ".ponad3s2", ".ponad3t2", ".ponadz2", ".ponarz2", ".ponasm2", ".ponasz2", ".ponaz3m2", ".ponazw2", ".ponie3k2", ".ponie3w2", ".popch2", ".popo3w2", ".poprz2", ".por4t1w", ".por4tf", ".por4tm", ".poro2z3", ".poro3z4u", ".porz2", ".posch2", ".posm2", ".posz2", ".potk2", ".potr2", ".poz4m2", ".poza3u2", ".pozw2", ".pp8", ".pr8", ".pra3s2", ".pra3w2nu", ".pra3w2z", ".prapra3w2nu", ".predy2s3po", ".prz8", ".przełk2", ".prze2d2", ".prze3ć2", ".prze3ł2", ".prze3ś2", ".prze3ź2", ".prze3ż2", ".prze3b2", ".prze3c2", ".prze3dą", ".prze3dę", ".prze3dź2", ".prze3d4łuż", ".prze3d4much", ".prze3d4o3br", ".prze3d4o3st", ".prze3d4o3zo", ".prze3d4ramat", ".prze3d4ruk", ".prze3d4ryl", ".prze3d4rz2", ".prze3d4um", ".prze3dy", ".prze3dz2", ".prze3e2k2s3", ".prze3f2", ".prze3g2", ".prze3h2", ".prze3k2", ".prze3l2", ".prze3m2", ".prze3n2", ".prze3p2", ".prze3r2", ".prze3s2", ".prze3t2", ".prze3u2", ".prze3w2", ".prze3z2", ".prze4d5łużyc", ".prze4d5ż2", ".prze4d5o4stat", ".prze4d5za", ".prze4d5zg2", ".prze4d5zim", ".prze4d5zj", ".prze4d5zl", ".prze4d5zw2r", ".prze4d5zwoj", ".przebr2", ".przebrz2", ".przech2", ".przechrz2", ".przeci2w3", ".przeci3w4ie", ".przeciwa2", ".przeciww2", ".przecz2", ".przed3ć2", ".przed3ł2", ".przed3ś2", ".przed3a2gon", ".przed3a2kc", ".przed3alp", ".przed3b2", ".przed3c2", ".przed3d2", ".przed3e2gz", ".przed3e2mer", ".przed3f2", ".przed3g2", ".przed3h2", ".przed3i2", ".przed3j2", ".przed3k2", ".przed3l2", ".przed3m2", ".przed3n2", ".przed3o2", ".przed3p2", ".przed3r2", ".przed3s2", ".przed3się3w2", ".przed3sz2", ".przed3t2", ".przed3u2", ".przed3w2", ".przedch2", ".przedcz2", ".przeddź2", ".przeddż2", ".przeddz2", ".przedgrz2", ".przedy2s3ku", ".przegrz2", ".przekl2", ".przekr2", ".przemk2", ".przepch2", ".przerż2", ".przerz2", ".przesch2", ".przesm2", ".przesz2", ".przetk2", ".przetr2", ".przetran2s3", ".przy3ć2", ".przy3ł2", ".przy3ś2", ".przy3ź2", ".przy3ż2", ".przy3b2", ".przy3c2", ".przy3d2", ".przy3f2", ".przy3g2", ".przy3h2", ".przy3k2", ".przy3l2", ".przy3m2", ".przy3p2", ".przy3r2", ".przy3s2", ".przy3t2", ".przy3w2", ".przy3z2", ".przybr2", ".przych2", ".przycz2", ".przydź2", ".przydż2", ".przydz2", ".przygrz2", ".przymk2", ".przyoz2", ".przypch2", ".przyrż2", ".przyrz2", ".przysch2", ".przysz2", ".przytk2", ".ps8", ".pt8", ".pv8", ".pw8", ".px8", ".pz8", ".rć8", ".rł8", ".rń8", ".rś8", ".rź8", ".rż8", ".r8", ".rb8", ".rc8", ".rd8", ".retran2s3", ".rf8", ".rg8", ".rh8", ".rj8", ".rk8", ".rl8", ".rm8", ".rn8", ".ro2z3", ".ro3z4a", ".ro3z4e", ".ro3z4e3ć2", ".ro3z4e3ł2", ".ro3z4e3ś2", ".ro3z4e3ź2", ".ro3z4e3ż2", ".ro3z4e3b2", ".ro3z4e3c2", ".ro3z4e3d2", ".ro3z4e3f2", ".ro3z4e3g2", ".ro3z4e3h2", ".ro3z4e3k2", ".ro3z4e3l2", ".ro3z4e3m2", ".ro3z4e3p2", ".ro3z4e3r2", ".ro3z4e3s2", ".ro3z4e3t2", ".ro3z4e3w2", ".ro3z4e3z2", ".ro3z4ej", ".ro3z4u", ".ro4z5a2gi", ".ro4z5a2nie", ".ro4z5e2mo", ".ro4z5e4g3z", ".ro4z5e4n3t", ".rozś2", ".rozbrz2", ".rozd2", ".rozech2", ".rozecz2", ".rozedź2", ".rozedż2", ".rozedz2", ".rozepch2", ".rozerż2", ".rozerz2", ".rozesch2", ".rozesz2", ".rozi2", ".rozm2", ".rozo2", ".rozpo3w2", ".rozt2", ".roztr2", ".rozw2", ".rp8", ".rr8", ".rs8", ".rt8", ".rv8", ".rw8", ".rx8", ".rz8", ".sć8", ".sł8", ".sń8", ".sś8", ".sź8", ".sż8", ".s8", ".samo3ch2", ".samo3k2", ".samo3p2", ".samo3w2", ".samoro2z3", ".sb8", ".sc8", ".sch8", ".sd8", ".sf8", ".sg8", ".sh8", ".siede2m3", ".siedemse2t3", ".siedmio3ś2", ".sj8", ".ską2d5że", ".sk8", ".skl8", ".skr8", ".sl8", ".sm8", ".sn8", ".sobo3w2", ".spó2ł3", ".sp8", ".spo2d2", ".spo3ć2", ".spo3ł2", ".spo3ś2", ".spo3ź2", ".spo3ż2", ".spo3b2", ".spo3c2", ".spo3dz2", ".spo3f2", ".spo3g2", ".spo3h2", ".spo3k2", ".spo3l2", ".spo3m2", ".spo3p2", ".spo3r2", ".spo3s2", ".spo3t2", ".spo3w2", ".spo3z2", ".spo4r3n", ".spo4r3t", ".spoch2", ".spocz2", ".spodź2", ".spodż2", ".spod3d", ".sporz2", ".sposz2", ".sr8", ".ss8", ".st8", ".stere2o3", ".stereoa2", ".stereoe2", ".stereoi2", ".stereoo2", ".stereou2", ".su2b3", ".su3b4ie", ".su3b4otn", ".supe2r3", ".supe3r4at", ".supe3r4io", ".supe4r5a2tr", ".super5z2b", ".supere2", ".supero2d1rzut", ".sv8", ".sw8", ".sx8", ".sz8", ".sześćse2t3", ".sześcio3ś2", ".sze2ś2ć3", ".sze2s3", ".tć8", ".tł8", ".tń8", ".tś8", ".tź8", ".tż8", ".t8", ".ta2o3", ".ta2r7zan", ".tb8", ".tc8", ".tch8", ".td8", ".te2o3", ".tf8", ".tg8", ".th8", ".tj8", ".tk8", ".tl8", ".tm8", ".tn8", ".toa3", ".tp8", ".tró2j3", ".tró3j4ą", ".tró3j4ę", ".tró3j4ecz", ".tr8", ".tran2s3", ".tran3s4e", ".tran3s4ie", ".tran3s4y", ".tran3sz", ".tran4s5eu", ".transa2", ".transo2", ".trz8", ".trze2ch3", ".trzechse2t3", ".ts8", ".tt8", ".tv8", ".tw8", ".tx8", ".tysią2c3", ".tysią3c4a", ".tysią3c4e", ".tysią3cz", ".tysią4c5zł", ".tz8", ".uć2", ".uś2", ".u3ł2", ".u3ź2", ".u3ż2", ".u3b2", ".u3c2", ".u3d2", ".u3f2", ".u3g2", ".u3h2", ".u3k2", ".u3l2", ".u3m2", ".u3n2", ".u3p2", ".u3r2", ".u3s2", ".u3t2", ".u3w2", ".u3z2", ".u4d3k", ".u4f3n", ".u4k3lej", ".u4l3s", ".u4l3t", ".u4m3br", ".u4n3c", ".u4n3d", ".u4p3p2s", ".u4r3s", ".u4st3n", ".u4stc", ".u4stk", ".u4z3be", ".ube2z3", ".ubezw2", ".ubr2", ".uch2", ".ucz2", ".udź2", ".udż2", ".udz2", ".ukr2", ".umk2", ".upch2", ".upo2d2", ".upo3ć2", ".upo3ł2", ".upo3ś2", ".upo3ź2", ".upo3ż2", ".upo3b2", ".upo3c2", ".upo3da", ".upo3f2", ".upo3g2", ".upo3h2", ".upo3k2", ".upo3l2", ".upo3m2", ".upo3p2", ".upo3r2", ".upo3s2", ".upo3t2", ".upo3w2", ".upo3z2", ".upoch2", ".upocz2", ".upodź2", ".upodż2", ".upod3d", ".uporz2", ".uposz2", ".urż2", ".uro2z3", ".urz2", ".usch2", ".usz2", ".utk2", ".utr2", ".uze3w2", ".vć8", ".vł8", ".vń8", ".vś8", ".vź8", ".vż8", ".v8", ".vb8", ".vc8", ".vd8", ".vf8", ".vg8", ".vh8", ".vj8", ".vk8", ".vl8", ".vm8", ".vn8", ".vp8", ".vr8", ".vs8", ".vt8", ".vv8", ".vw8", ".vx8", ".vz8", ".wć8", ".wł8", ".wń8", ".wś8", ".wź8", ".wż8", ".w8", ".wb8", ".wc8", ".wd8", ".we3ć2", ".we3ł2", ".we3ś2", ".we3ż2", ".we3b2", ".we3c2", ".we3d2", ".we3f2", ".we3g2", ".we3h2", ".we3k2", ".we3l2", ".we3m2", ".we3n2", ".we3p2", ".we3r2", ".we3s2", ".we3t2", ".we3w2", ".we3z2", ".we4ł3n", ".we4k3t", ".we4l3w", ".we4n3d", ".we4n3t", ".we4r3b", ".we4r3d", ".we4r3n", ".we4r3s", ".we4r3t", ".we4s3prz", ".we4s3tch2", ".we4z3br", ".we4z3gł", ".wech2", ".wecz2", ".wedź2", ".wedż2", ".wedz2", ".wemk2", ".wepch2", ".werz2", ".wesz2", ".wetk2", ".wewną2trz3", ".wf8", ".wg8", ".wh8", ".wielo3ś2", ".wielo3d2", ".wielo3k2", ".wieluse2t3", ".wilczo3m2", ".wj8", ".wk8", ".wl8", ".wm8", ".wn8", ".wniebo3w2", ".wodo3w2", ".wp8", ".wr8", ".ws8", ".współi2", ".współo2b3w", ".współu2", ".współw2", ".wspó2ł3", ".wsze2ch3", ".wszecho2", ".wszechw2", ".wt8", ".wv8", ".ww8", ".wx8", ".wy3ć2", ".wy3ł2", ".wy3ś2", ".wy3ź2", ".wy3ż2", ".wy3b2", ".wy3c2", ".wy3d2", ".wy3f2", ".wy3g2", ".wy3h2", ".wy3k2", ".wy3l2", ".wy3m2", ".wy3o2d3r", ".wy3p2", ".wy3r2", ".wy3s2", ".wy3t2", ".wy3w2", ".wy3z2", ".wy4ż3sz", ".wy4cz3ha", ".wybr2", ".wybrz2", ".wych2", ".wycz2", ".wydź2", ".wydż2", ".wydr2", ".wydz2", ".wye2k2s3", ".wygrz2", ".wyi2zo", ".wykl2", ".wykr2", ".wykrz2", ".wymk2", ".wypch2", ".wyprz2", ".wyrż2", ".wyrz2", ".wysch2", ".wysm2", ".wysz2", ".wytch2", ".wytk2", ".wytr2", ".wz8", ".xć8", ".xł8", ".xń8", ".xś8", ".xź8", ".xż8", ".x8", ".xb8", ".xc8", ".xd8", ".xf8", ".xg8", ".xh8", ".xj8", ".xk8", ".xl8", ".xm8", ".xn8", ".xp8", ".xr8", ".xs8", ".xt8", ".xv8", ".xw8", ".xx8", ".xz8", ".zć8", ".zł8", ".zło3w2", ".zń8", ".zś8", ".zź8", ".zż8", ".z8", ".za3ć2", ".za3ł2", ".za3ś2", ".za3ź2", ".za3ż2", ".za3b2", ".za3c2", ".za3d2", ".za3f2", ".za3g2", ".za3h2", ".za3k2", ".za3l2", ".za3m2", ".za3o2b3r", ".za3o2b3s", ".za3p2", ".za3r2", ".za3s2", ".za3t2", ".za3u2", ".za3w2", ".za3z2", ".za4k3t", ".za4l3g", ".za4l3k", ".za4l3t", ".za4m3k", ".za4r3ch", ".za4uto", ".za5m4k2n", ".zabr2", ".zabrz2", ".zach2", ".zacz2", ".zadź2", ".zadż2", ".zadośću4", ".zado2ść3", ".zadr2", ".zady2s3po", ".zadz2", ".zagrz2", ".zai2n3", ".zai2zo", ".zain4ic", ".zakl2", ".zakr2", ".zakrz2", ".zanie3d2", ".zarż2", ".zarz2", ".zasch2", ".zasm2", ".zasz2", ".zatk2", ".zatr2", ".zb8", ".zc8", ".zd8", ".zde2z3", ".zde3z4awu", ".zde3z4el", ".zde3z4er", ".zde3z4y", ".zdy2s3kont", ".zdy2s3kred", ".zdy2s3kwal", ".ze3ć2", ".ze3ł2", ".ze3ś2", ".ze3ź2", ".ze3ż2", ".ze3b2", ".ze3c2", ".ze3d2", ".ze3f2", ".ze3g2", ".ze3h2", ".ze3k2", ".ze3l2", ".ze3m2", ".ze3p2", ".ze3r2", ".ze3s2", ".ze3t2", ".ze3tk2", ".ze3w2", ".ze3z2", ".ze4r3k", ".ze4t3e2m1e2s", ".ze4t3e2s1e2l", ".ze4t3emp", ".ze4t3hap", ".zech2", ".zecz2", ".zedź2", ".zedż2", ".zedz2", ".zekl2", ".zepch2", ".zerż2", ".zerz2", ".zesch2", ".zesm4", ".zesz2", ".zf8", ".zg8", ".zh8", ".zimno3kr2", ".zj8", ".zk8", ".zl8", ".zm8", ".zmartwy2ch3", ".zmartwychw2", ".zn8", ".znie3ć2", ".znie3ł2", ".znie3ń2", ".znie3ś2", ".znie3ź2", ".znie3ż2", ".znie3b2", ".znie3c2", ".znie3d2", ".znie3f2", ".znie3g2", ".znie3h2", ".znie3k2", ".znie3l2", ".znie3m2", ".znie3n2", ".znie3p2", ".znie3r2", ".znie3s2", ".znie3t2", ".znie3w2", ".znie3z2", ".znie4dź3", ".znie4m3c", ".zniech2", ".zniecz2", ".zniedż2", ".zniedz2", ".znierz2", ".zniesz2", ".zo2o3", ".zp8", ".zr8", ".zro2z3", ".zro3z4u", ".zs8", ".zt8", ".zv8", ".zw8", ".zx8", ".zz8", "ą1", "ę1", "ó1", "ó4w3cz", "ś1c", "ź2dź", "1ś2ci", "2ć1ń", "2ć1ś", "2ć1ź", "2ć1ż", "2ć1b", "2ć1c", "2ć1d", "2ć1f", "2ć1g", "2ć1k", "2ć1m", "2ć1n", "2ć1p", "2ć1s", "2ć1t", "2ć1z", "2ł1ć", "2ł1ń", "2ł1ś", "2ł1ź", "2ł1ż", "2ł1b", "2ł1c", "2ł1d", "2ł1f", "2ł1g", "2ł1h", "2ł1j", "2ł1k", "2ł1l", "2ł1m", "2ł1n", "2ł1p", "2ł1r", "2ł1s", "2ł1t", "2ł1w", "2ł1z", "2ń1ć", "2ń1ł", "2ń1ń", "2ń1ś", "2ń1ź", "2ń1ż", "2ń1b", "2ń1c", "2ń1d", "2ń1f", "2ń1g", "2ń1h", "2ń1j", "2ń1k", "2ń1l", "2ń1m", "2ń1n", "2ń1p", "2ń1r", "2ń1s", "2ń1t", "2ń1w", "2ń1z", "2śćc", "2ś1ś", "2ś1ź", "2ś1ż", "2ś1b", "2ś1d", "2ś1f", "2ś1g", "2ś1k", "2ś1p", "2ś1s", "2ś1t", "2ś1z", "2ślm", "2śln", "2ź1ć", "2ź1ś", "2ź1ż", "2ź1b", "2ź1c", "2ź1d", "2ź1f", "2ź1g", "2ź1k", "2ź1l", "2ź1m", "2ź1n", "2ź1p", "2ź1s", "2ź1t", "2ź1w", "2ź1z", "2ż1ć", "2ż1ł", "2ż1ń", "2ż1ś", "2ż1ź", "2ż1b", "2ż1c", "2ż1d", "2ż1f", "2ż1g", "2ż1j", "2ż1k", "2ż1l", "2ż1m", "2ż1n", "2ż1p", "2ż1r", "2ż1s", "2ż1t", "2ż1w", "2ż1z", "2błk", "2b1ć", "2b1ń", "2b1ś", "2b1ź", "2b1ż", "2b1c", "2b1d", "2b1f", "2b1g", "2b1k", "2b1m", "2b1n", "2b1p", "2b1s", "2b1t", "2b1z", "2brn", "2c1ć", "2c1ń", "2c1ś", "2c1ź", "2c1ż", "2c1b", "2c1d", "2c1f", "2c1g", "2c1k", "2c1l", "2c1m", "2c1n", "2c1p", "2c1s", "2c1t", "2ch1ć", "2ch1ń", "2ch1ś", "2ch1ź", "2ch1ż", "2ch1b", "2ch1c", "2ch1d", "2ch1f", "2ch1g", "2ch1k", "2ch1m", "2ch1n", "2ch1p", "2ch1s", "2ch1t", "2ch1z", "2cz1ć", "2cz1ń", "2cz1ś", "2cz1ź", "2cz1ż", "2cz1b", "2cz1c", "2cz1d", "2cz1f", "2cz1g", "2cz1k", "2cz1l", "2cz1m", "2cz1n", "2cz1p", "2cz1s", "2cz1t", "2cz1z", "2dłb", "2dłsz", "2dź1ć", "2dź1ń", "2dź1ś", "2dź1ź", "2dź1ż", "2dź1b", "2dź1c", "2dź1d", "2dź1f", "2dź1g", "2dź1k", "2dź1m", "2dź1n", "2dź1p", "2dź1s", "2dź1t", "2dź1z", "2dż1ć", "2dż1ń", "2dż1ś", "2dż1ź", "2dż1ż", "2dż1b", "2dż1c", "2dż1d", "2dż1f", "2dż1g", "2dż1k", "2dż1m", "2dż1n", "2dż1p", "2dż1s", "2dż1t", "2dż1z", "2d1ć", "2d1ń", "2d1ś", "2d1b", "2d1c", "2d1f", "2d1g", "2d1k", "2d1m", "2d1n", "2d1p", "2d1s", "2d1t", "2drn", "2dz1ć", "2dz1ń", "2dz1ś", "2dz1ź", "2dz1ż", "2dz1b", "2dz1c", "2dz1d", "2dz1f", "2dz1g", "2dz1k", "2dz1l", "2dz1m", "2dz1n", "2dz1p", "2dz1s", "2dz1t", "2dz1z", "2f1c", "2f1k", "2f1m", "2f1n", "2głb", "2g1ć", "2g1ń", "2g1ś", "2g1ź", "2g1ż", "2g1b", "2g1c", "2g1d", "2g1f", "2g1k", "2g1m", "2g1p", "2g1s", "2g1t", "2g1z", "2h1ć", "2h1ł", "2h1ń", "2h1ś", "2h1ź", "2h1ż", "2h1b", "2h1c", "2h1d", "2h1f", "2h1g", "2h1j", "2h1k", "2h1l", "2h1m", "2h1n", "2h1p", "2h1r", "2h1s", "2h1t", "2h1w", "2h1z", "2j1ć", "2j1ł", "2j1ń", "2j1ś", "2j1ź", "2j1ż", "2j1b", "2j1c", "2j1d", "2j1f", "2j1g", "2j1h", "2j1k", "2j1l", "2j1m", "2j1n", "2j1p", "2j1r", "2j1s", "2j1t", "2j1w", "2j1z", "2kłb", "2k1ć", "2k1ń", "2k1ś", "2k1ź", "2k1ż", "2k1b", "2k1c", "2k1d", "2k1f", "2k1g", "2k1m", "2k1n", "2k1p", "2k1s", "2k1sz", "2k1t", "2k1z", "2l1ć", "2l1ł", "2l1ń", "2l1ś", "2l1ź", "2l1ż", "2l1b", "2l1c", "2l1d", "2l1f", "2l1g", "2l1h", "2l1j", "2l1k", "2l1m", "2l1n", "2l1p", "2l1r", "2l1s", "2l1t", "2l1w", "2l1z", "2m1ć", "2m1ł", "2m1ń", "2m1ś", "2m1ź", "2m1ż", "2m1b", "2m1c", "2m1d", "2m1f", "2m1g", "2m1h", "2m1j", "2m1k", "2m1l", "2m1n", "2m1p", "2m1r", "2m1s", "2m1t", "2m1w", "2m1z", "2n1ć", "2n1ł", "2n1ń", "2n1ś", "2n1ź", "2n1ż", "2n1b", "2n1c", "2n1d", "2n1f", "2n1g", "2n1h", "2n1j", "2n1k", "2n1l", "2n1m", "2n1p", "2n1r", "2n1s", "2n1t", "2n1w", "2n1z", "2ntn", "2p1ć", "2p1ń", "2p1ś", "2p1ź", "2p1ż", "2p1b", "2p1c", "2p1d", "2p1f", "2p1g", "2p1k", "2p1m", "2p1n", "2p1s", "2p1sz", "2p1t", "2p1z", "2pln", "2r1ć", "2r1ł", "2r1ń", "2r1ś", "2r1ź", "2r1ż", "2r1b", "2r1c", "2r1d", "2r1f", "2r1g", "2r1h", "2r1j", "2r1k", "2r1l", "2r1m", "2r1n", "2r1p", "2r1s", "2r1t", "2r1w", "2rz1ć", "2rz1ł", "2rz1ń", "2rz1ś", "2rz1ź", "2rz1ż", "2rz1b", "2rz1c", "2rz1d", "2rz1f", "2rz1g", "2rz1h", "2rz1j", "2rz1k", "2rz1l", "2rz1m", "2rz1n", "2rz1p", "2rz1r", "2rz1s", "2rz1t", "2rz1w", "2słb", "2s1ź", "2s1ż", "2s1b", "2s1d", "2s1f", "2s1g", "2s1s", "2snk", "2stk", "2stn", "2stsz", "2sz1ć", "2sz1ś", "2sz1c", "2sz1f", "2sz1k", "2sz1l", "2sz1m", "2sz1n", "2sz1p", "2sz1s", "2sz1t", "2sz1w", "2sz1z", "2szln", "2t1ć", "2t1ń", "2t1ś", "2t1ź", "2t1ż", "2t1b", "2t1c", "2t1d", "2t1f", "2t1g", "2t1k", "2t1m", "2t1n", "2t1p", "2t1s", "2t1z", "2tln", "2trk", "2trzn", "2w1ć", "2w1ł", "2w1ń", "2w1ś", "2w1ź", "2w1ż", "2w1b", "2w1c", "2w1d", "2w1f", "2w1g", "2w1j", "2w1k", "2w1l", "2w1m", "2w1n", "2w1p", "2w1r", "2w1s", "2w1t", "2w1z", "2z1ć", "2z1ś", "2z1c", "2z1d", "2z1f", "2z1k", "2z1p", "2z1s", "2z1t", "2zdk", "2zdn", "3d2niow", "3k2sz2t", "3m2k2n", "3m2nest", "3m2nezj", "3m2sk2n", "3p2neu", "3w2ład", "3w2łos", "3w2czas", "4ć3ć", "4ł3ł", "4ź3ź", "4ż3ż", "4b3b", "4c3c", "4d3d", "4f3f", "4g3g", "4h3h", "4j3j", "4k3k", "4l3l", "4m3m", "4n3n", "4p3p", "4r3r", "4t3t", "4w3w", "4z3z", "8ć.", "8ćć.", "8ćł.", "8ćń.", "8ćś.", "8ćź.", "8ćż.", "8ćb.", "8ćc.", "8ćd.", "8ćf.", "8ćg.", "8ćh.", "8ćj.", "8ćk.", "8ćl.", "8ćm.", "8ćn.", "8ćp.", "8ćr.", "8ćs.", "8ćt.", "8ćv.", "8ćw.", "8ćx.", "8ćz.", "8ł.", "8łć.", "8łł.", "8łń.", "8łś.", "8łź.", "8łż.", "8łb.", "8łc.", "8łd.", "8łf.", "8łg.", "8łh.", "8łj.", "8łk.", "8łl.", "8łm.", "8łn.", "8łp.", "8łr.", "8łs.", "8łt.", "8łv.", "8łw.", "8łx.", "8łz.", "8ń.", "8ńć.", "8ńł.", "8ńń.", "8ńś.", "8ńź.", "8ńż.", "8ńb.", "8ńc.", "8ńd.", "8ńf.", "8ńg.", "8ńh.", "8ńj.", "8ńk.", "8ńl.", "8ńm.", "8ńn.", "8ńp.", "8ńr.", "8ńs.", "8ńt.", "8ńv.", "8ńw.", "8ńx.", "8ńz.", "8ś.", "8ść.", "8śł.", "8śń.", "8śś.", "8śź.", "8śż.", "8śb.", "8śc.", "8śd.", "8śf.", "8śg.", "8śh.", "8śj.", "8śk.", "8śl.", "8śm.", "8śn.", "8śp.", "8śr.", "8śs.", "8śt.", "8śv.", "8św.", "8śx.", "8śz.", "8ź.", "8źć.", "8źł.", "8źń.", "8źś.", "8źź.", "8źż.", "8źb.", "8źc.", "8źd.", "8źf.", "8źg.", "8źh.", "8źj.", "8źk.", "8źl.", "8źm.", "8źn.", "8źp.", "8źr.", "8źs.", "8źt.", "8źv.", "8źw.", "8źx.", "8źz.", "8ż.", "8żć.", "8żł.", "8żń.", "8żś.", "8żź.", "8żż.", "8żb.", "8żc.", "8żd.", "8żf.", "8żg.", "8żh.", "8żj.", "8żk.", "8żl.", "8żm.", "8żn.", "8żp.", "8żr.", "8żs.", "8żt.", "8żv.", "8żw.", "8żx.", "8żz.", "8b.", "8bć.", "8bł.", "8bń.", "8bś.", "8bź.", "8bż.", "8bb.", "8bc.", "8bd.", "8bf.", "8bg.", "8bh.", "8bj.", "8bk.", "8bl.", "8bm.", "8bn.", "8bp.", "8br.", "8brz.", "8bs.", "8bt.", "8bv.", "8bw.", "8bx.", "8bz.", "8c.", "8cć.", "8cł.", "8cń.", "8cś.", "8cź.", "8cż.", "8cb.", "8cc.", "8cd.", "8cf.", "8cg.", "8ch.", "8chł.", "8chrz.", "8chw.", "8cj.", "8ck.", "8cl.", "8cm.", "8cn.", "8cp.", "8cr.", "8cs.", "8ct.", "8cv.", "8cw.", "8cx.", "8cz.", "8czt.", "8d.", "8dć.", "8dł.", "8dń.", "8dś.", "8dź.", "8dż.", "8db.", "8dc.", "8dd.", "8df.", "8dg.", "8dh.", "8dj.", "8dk.", "8dl.", "8dm.", "8dn.", "8dp.", "8dr.", "8drz.", "8ds.", "8dt.", "8dv.", "8dw.", "8dx.", "8dz.", "8f.", "8fć.", "8fł.", "8fń.", "8fś.", "8fź.", "8fż.", "8fb.", "8fc.", "8fd.", "8ff.", "8fg.", "8fh.", "8fj.", "8fk.", "8fl.", "8fm.", "8fn.", "8fp.", "8fr.", "8fs.", "8ft.", "8fv.", "8fw.", "8fx.", "8fz.", "8g.", "8gć.", "8gł.", "8gń.", "8gś.", "8gź.", "8gż.", "8gb.", "8gc.", "8gd.", "8gf.", "8gg.", "8gh.", "8gj.", "8gk.", "8gl.", "8gm.", "8gn.", "8gp.", "8gr.", "8gs.", "8gt.", "8gv.", "8gw.", "8gx.", "8gz.", "8h.", "8hć.", "8hł.", "8hń.", "8hś.", "8hź.", "8hż.", "8hb.", "8hc.", "8hd.", "8hf.", "8hg.", "8hh.", "8hj.", "8hk.", "8hl.", "8hm.", "8hn.", "8hp.", "8hr.", "8hs.", "8ht.", "8hv.", "8hw.", "8hx.", "8hz.", "8j.", "8jć.", "8jł.", "8jń.", "8jś.", "8jź.", "8jż.", "8jb.", "8jc.", "8jd.", "8jf.", "8jg.", "8jh.", "8jj.", "8jk.", "8jl.", "8jm.", "8jn.", "8jp.", "8jr.", "8js.", "8jt.", "8jv.", "8jw.", "8jx.", "8jz.", "8k.", "8kć.", "8kł.", "8kń.", "8kś.", "8kź.", "8kż.", "8kb.", "8kc.", "8kd.", "8kf.", "8kg.", "8kh.", "8kj.", "8kk.", "8kl.", "8km.", "8kn.", "8kp.", "8kr.", "8ks.", "8kst.", "8kt.", "8kv.", "8kw.", "8kx.", "8kz.", "8l.", "8lć.", "8lł.", "8lń.", "8lś.", "8lź.", "8lż.", "8lb.", "8lc.", "8ld.", "8lf.", "8lg.", "8lh.", "8lj.", "8lk.", "8ll.", "8lm.", "8ln.", "8lp.", "8lr.", "8ls.", "8lt.", "8lv.", "8lw.", "8lx.", "8lz.", "8m.", "8mć.", "8mł.", "8mń.", "8mś.", "8mź.", "8mż.", "8mb.", "8mc.", "8md.", "8mf.", "8mg.", "8mh.", "8mj.", "8mk.", "8ml.", "8mm.", "8mn.", "8mp.", "8mr.", "8ms.", "8mst.", "8mt.", "8mv.", "8mw.", "8mx.", "8mz.", "8n.", "8nć.", "8nł.", "8nń.", "8nś.", "8nź.", "8nż.", "8nb.", "8nc.", "8nd.", "8nf.", "8ng.", "8nh.", "8nj.", "8nk.", "8nl.", "8nm.", "8nn.", "8np.", "8nr.", "8ns.", "8nt.", "8nv.", "8nw.", "8nx.", "8nz.", "8p.", "8pć.", "8pł.", "8pń.", "8pś.", "8pź.", "8pż.", "8pb.", "8pc.", "8pd.", "8pf.", "8pg.", "8ph.", "8pj.", "8pk.", "8pl.", "8pm.", "8pn.", "8pp.", "8pr.", "8prz.", "8ps.", "8pt.", "8pv.", "8pw.", "8px.", "8pz.", "8r.", "8rć.", "8rł.", "8rń.", "8rś.", "8rź.", "8rż.", "8rb.", "8rc.", "8rd.", "8rf.", "8rg.", "8rh.", "8rj.", "8rk.", "8rl.", "8rm.", "8rn.", "8rp.", "8rr.", "8rs.", "8rsz.", "8rt.", "8rv.", "8rw.", "8rx.", "8rz.", "8rzł.", "8s.", "8sć.", "8sł.", "8sń.", "8sś.", "8sź.", "8sż.", "8sb.", "8sc.", "8sch.", "8sd.", "8sf.", "8sg.", "8sh.", "8sj.", "8sk.", "8skrz.", "8sl.", "8sm.", "8sn.", "8sp.", "8sr.", "8ss.", "8st.", "8str.", "8strz.", "8stw.", "8sv.", "8sw.", "8sx.", "8sz.", "8szcz.", "8szczb.", "8szk.", "8szn.", "8szt.", "8sztr.", "8t.", "8tć.", "8tł.", "8tń.", "8tś.", "8tź.", "8tż.", "8tb.", "8tc.", "8td.", "8tf.", "8tg.", "8th.", "8tj.", "8tk.", "8tl.", "8tm.", "8tn.", "8tp.", "8tr.", "8trz.", "8ts.", "8tt.", "8tv.", "8tw.", "8tx.", "8tz.", "8v.", "8vć.", "8vł.", "8vń.", "8vś.", "8vź.", "8vż.", "8vb.", "8vc.", "8vd.", "8vf.", "8vg.", "8vh.", "8vj.", "8vk.", "8vl.", "8vm.", "8vn.", "8vp.", "8vr.", "8vs.", "8vt.", "8vv.", "8vw.", "8vx.", "8vz.", "8w.", "8wć.", "8wł.", "8wń.", "8wś.", "8wź.", "8wż.", "8wb.", "8wc.", "8wd.", "8wf.", "8wg.", "8wh.", "8wj.", "8wk.", "8wl.", "8wm.", "8wn.", "8wp.", "8wr.", "8ws.", "8wt.", "8wv.", "8ww.", "8wx.", "8wz.", "8x.", "8xć.", "8xł.", "8xń.", "8xś.", "8xź.", "8xż.", "8xb.", "8xc.", "8xd.", "8xf.", "8xg.", "8xh.", "8xj.", "8xk.", "8xl.", "8xm.", "8xn.", "8xp.", "8xr.", "8xs.", "8xt.", "8xv.", "8xw.", "8xx.", "8xz.", "8z.", "8zć.", "8zł.", "8zń.", "8zś.", "8zź.", "8zż.", "8zb.", "8zc.", "8zd.", "8zdr.", "8zdrz.", "8zf.", "8zg.", "8zh.", "8zj.", "8zk.", "8zl.", "8zm.", "8zn.", "8zp.", "8zr.", "8zs.", "8zt.", "8zv.", "8zw.", "8zx.", "8zz.", "a1", "a2u", "a2y", "aa2", "ae2", "ai2", "ao2", "be2eth", "be2f3sz2", "be2k1hend", "bi2n3o2ku", "bi2sz3kop", "bi2z3ne2s3m", "bi2z3nes", "birmin2g1ham", "blo2k1hauz", "bo2s3ma", "br2d", "bro2a2d3way", "bu2sz3me", "buk2sz3pan", "busine2ss3m", "busines2s", "c4h", "c4z", "cal2d1well", "ch2ł", "ch2j", "ch2l", "ch2r", "ch2w", "chus1t", "cu2r7zon", "dż2ł", "dż2j", "dż2l", "dż2r", "dż2w", "dże4z3b", "dże4z3m", "d4ź", "d4ż", "d4z", "deut4sch3land", "drz2w", "du2sz3past", "e1", "e2r5zac", "e2u", "e2y", "e3u2sz", "ea2", "ee2", "ei2", "eo2", "fi2s3harm", "fi2sz3bin", "fo2k2s3t", "fo2r5zac", "fol2k1lor", "fos2f1a2zot", "ga3d2get", "gado3p2ta", "gol2f3s", "golfsz2", "gran2d1ilo", "gro4t3r", "hi2sz3p", "hu2cz1w", "hu2x3ley", "i1", "i2ą", "i2ę", "i2ó", "i2a", "i2e", "i2i", "i2o", "i2u", "i2y", "in4nsbruck", "in4sbruc", "j2t1ł", "j2t1r", "ja4z4z3b", "ja4z4z3m", "karl2s1kron", "karl2s1ruhe", "kir2chhoff", "kongre2s3m", "led1w", "lu2ft3waffe", "lu2ks1fer", "ly2o", "ma2r5zł", "ma2r5zl", "ma2r5zn", "mi2sz1masz", "mie2r5zł", "mie2r5zi", "mon2t3real", "moza2i3k", "mu2r7zasich3l", "na4ł3kows", "na4r3v", "o1", "o2y", "oa2", "och3mistrz", "oe2", "of2f3set", "oi2", "oo2", "ou2", "pa2n3a2mer", "pa2s3cal", "pa2s3ch", "połu3d2ni", "po3d4nieprz", "po3m2ną", "po3m2nę", "po3m2ni", "po4rt2s3mo2uth", "po4rt3land", "poli3e2t", "poli3u2re", "powsze3d2ni", "pr2chal", "pre2sz3pa", "r4z", "ro2e3nt2gen", "ro2k3rocz", "ro2s3to3c2k", "s4z", "se2t3le", "sko2r5zoner", "sm2r", "sowi3z2", "sy2n3opt", "sy2s1tem", "sza2sz1ły", "sze2z1long", "sze4ść", "szto2k1holm", "szyn2k1was", "to3y2o3t", "turboo2d3rzut", "tygo3d2ni", "u1", "u2y", "ua2", "ue2", "ui2", "uo2", "uu2", "vo2lk2s3", "we2e2k1end", "we4st3f", "we4st3m", "y1", "ya2", "ye2", "yi2", "yo2", "yu2", "ze4p3p"],
                e.fn.typographer_hyphen.patterns.exceptions = e.fn.typographer_hyphen.patterns.exceptions || {}, e.fn.typographer_hyphen.patterns.exceptions.pl = {
                    bezach: ["be", "zach"],
                    bezami: ["be", "zami"],
                    bynajmniej: ["by", "naj", "mniej"],
                    gdzieniegdzie: ["gdzie", "nie", "gdzie"],
                    inaczej: ["ina", "czej"],
                    nadal: ["na", "dal"],
                    nigdy: ["ni", "gdy"],
                    nigdzie: ["ni", "gdzie"],
                    "niechże": ["niech", "że"],
                    niechby: ["niech", "by"],
                    owszem: ["ow", "szem"],
                    "półach": ["pó", "łach"],
                    "półami": ["pó", "łami"],
                    "półek": ["pó", "łek"],
                    "podówczas": ["pod", "ów", "czas"],
                    przynajmniej: ["przy", "naj", "mniej"],
                    "skądinąd": ["skąd", "inąd"],
                    "trójach": ["tró", "jach"],
                    "trójami": ["tró", "jami"],
                    "trójek": ["tró", "jek"]
                }
        }(n)
    }, {
        undefined: void 0
    }],
    12: [function(e, t, i) {
        function n(e) {
            e = e || {}, this.controller = e.controller, this.color = e.color, this.tick = 0, this.respawn()
        }

        function o(e) {
            e = e || {}, this.tick = 0, this.run = !1, this.ratio = e.ratio || window.devicePixelRatio || 1, this.width = this.ratio * (e.width || 320), this.height = this.ratio * (e.height || 100), this.MAX = this.height / 2, this.speed = e.speed || .1, this.amplitude = e.amplitude || 1, this.canvas = document.createElement("canvas"), this.canvas.width = this.width, this.canvas.height = this.height, e.cover ? this.canvas.style.width = this.canvas.style.height = "100%" : (this.canvas.style.width = this.cache.width / this.ratio + "px", this.canvas.style.height = this.cache.height / this.ratio + "px"), this.container = e.container || document.body, this.container.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.curves = [];
            for (var t = 0; t < o.prototype.COLORS.length; t++)
                for (var i = o.prototype.COLORS[t], s = 0; s < 3 * Math.random() | 0; s++) this.curves.push(new n({
                    controller: this,
                    color: i
                }));
            e.autostart && this.start()
        }
        n.prototype.respawn = function() {
            this.amplitude = .3 + .7 * Math.random(), this.seed = Math.random(), this.open_class = 2 + 3 * Math.random() | 0
        }, n.prototype.equation = function(e) {
            var t = this.tick,
                i = -1 * Math.abs(Math.sin(t)) * this.controller.amplitude * this.amplitude * this.controller.MAX * Math.pow(1 / (1 + Math.pow(this.open_class * e, 2)), 2);
            return Math.abs(i) < .001 && this.respawn(), i
        }, n.prototype._draw = function(e) {
            this.tick += this.controller.speed * (1 - .5 * Math.sin(this.seed * Math.PI));
            var t = this.controller.ctx;
            t.beginPath();
            for (var i, n, o, s = this.controller.width / 2 + (-this.controller.width / 4 + this.seed * (this.controller.width / 2)), r = this.controller.height / 2, a = -3; a <= 3;) i = s + a * this.controller.width / 4, n = r + e * this.equation(a), o = o || i, t.lineTo(i, n), a += .01;
            var d = Math.abs(this.equation(0)),
                h = t.createRadialGradient(s, r, 1.15 * d, s, r, .3 * d);
            h.addColorStop(0, "rgba(" + this.color.join(",") + ",0.4)"), h.addColorStop(1, "rgba(" + this.color.join(",") + ",0.2)"), t.fillStyle = h, t.lineTo(o, r), t.closePath(), t.fill()
        }, n.prototype.draw = function() {
            this._draw(-1), this._draw(1)
        }, o.prototype._clear = function() {
            this.ctx.globalCompositeOperation = "destination-out", this.ctx.fillRect(0, 0, this.width, this.height), this.ctx.globalCompositeOperation = "lighter"
        }, o.prototype._draw = function() {
            if (this.run !== !1) {
                this._clear();
                for (var e = 0, t = this.curves.length; e < t; e++) this.curves[e].draw();
                requestAnimationFrame(this._draw.bind(this))
            }
        }, o.prototype.start = function() {
            this.tick = 0, this.run = !0, this._draw()
        }, o.prototype.stop = function() {
            this.tick = 0, this.run = !1
        }, o.prototype.COLORS = [
            [32, 133, 252],
            [94, 252, 169],
            [253, 71, 103]
        ], t.exports = o
    }, {}],
    13: [function(e, t, i) {
        function n(e, t) {
            this.element = e, this.layers = e.getElementsByClassName("layer");
            var i = {
                invertX: this.data(e, "invert-x"),
                invertY: this.data(e, "invert-y"),
                limitX: this.data(e, "limit-x"),
                limitY: this.data(e, "limit-y"),
                scalarX: this.data(e, "scalar-x"),
                scalarY: this.data(e, "scalar-y"),
                frictionX: this.data(e, "friction-x"),
                frictionY: this.data(e, "friction-y"),
                originX: this.data(e, "origin-x"),
                originY: this.data(e, "origin-y")
            };
            for (var n in i) null === i[n] && delete i[n];
            Object.assign(this, s, t, i), this.transformProperty = void 0 === e.style.transform ? "webkitTransform" : "transform", this.depths = [], this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.updateLayers(), this.onWindowResize(), this.enable()
        }
        e(7);
        var o = e(6),
            s = {
                relativeInput: !1,
                clipRelativeInput: !1,
                invertX: !0,
                invertY: !0,
                limitX: !1,
                limitY: !1,
                scalarX: 10,
                scalarY: 10,
                frictionX: .1,
                frictionY: .1,
                originX: .5,
                originY: .5
            },
            r = n.prototype;
        r.data = function(e, t) {
            var i = e.getAttribute("data-" + t);
            return "true" === i || "false" !== i && ("null" === i ? null : !isNaN(parseFloat(i)) && isFinite(i) ? parseFloat(i) : i)
        }, r.updateLayers = function() {
            this.layers = this.element.getElementsByClassName("layer"), this.depths = [];
            for (var e = 0, t = this.layers.length; e < t; e++) {
                var i = this.layers[e];
                i.style.position = "absolute", i.style.display = "block", i.style.left = 0, i.style.top = 0, this.depths.push(this.data(i, "depth") || 0)
            }
        }, r.updateBounds = function() {
            var e = this.element.getBoundingClientRect();
            this.ex = e.left, this.ey = e.top, this.ew = e.width, this.eh = e.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
        }, r.enable = function() {
            this.enabled || (this.enabled = !0, window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("resize", this.onWindowResize), this.onAnimationFrame())
        }, r.disable = function() {
            this.enabled && (this.enabled = !1, window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
        }, r.invert = function(e, t) {
            this.invertX = void 0 === e ? this.invertX : e, this.invertY = void 0 === t ? this.invertY : t
        }, r.friction = function(e, t) {
            this.frictionX = void 0 === e ? this.frictionX : e, this.frictionY = void 0 === t ? this.frictionY : t
        }, r.scalar = function(e, t) {
            this.scalarX = void 0 === e ? this.scalarX : e, this.scalarY = void 0 === t ? this.scalarY : t
        }, r.limit = function(e, t) {
            this.limitX = void 0 === e ? this.limitX : e, this.limitY = void 0 === t ? this.limitY : t
        }, r.origin = function(e, t) {
            this.originX = void 0 === e ? this.originX : e, this.originY = void 0 === t ? this.originY : t
        }, r.setPosition = function(e, t, i) {
            e.style[this.transformProperty] = "translate3d(" + t + "px," + i + "px,0)"
        }, r.onWindowResize = function() {
            this.ww = window.innerWidth, this.wh = window.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
        }, r.onAnimationFrame = function() {
            this.updateBounds(), this.mx = this.ix, this.my = this.iy, this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = o.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = o.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
            for (var e = 0, t = this.layers.length; e < t; e++) {
                var i = this.layers[e],
                    n = this.depths[e],
                    s = this.vx * n * (this.invertX ? -1 : 1),
                    r = this.vy * n * (this.invertY ? -1 : 1);
                i.style[this.transformProperty] = "translate3d(" + s + "px," + r + "px,0)"
            }
            this.raf = requestAnimationFrame(this.onAnimationFrame)
        }, r.onMouseMove = function(e) {
            var t = e.clientX,
                i = e.clientY;
            this.relativeInput ? (this.clipRelativeInput && (t = Math.max(t, this.ex), t = Math.min(t, this.ex + this.ew), i = Math.max(i, this.ey), i = Math.min(i, this.ey + this.eh)), this.ix = (t - this.ex - this.ecx) / this.erx, this.iy = (i - this.ey - this.ecy) / this.ery) : (this.ix = (t - this.wcx) / this.wrx, this.iy = (i - this.wcy) / this.wry)
        }, t.exports = n
    }, {
        6: 6,
        7: 7
    }],
    14: [function(e, t, i) {
        var n = window.$ = window.jQuery = e("jquery"),
            o = e("scrollmagic"),
            s = e("swiper"),
            r = e("detectizr"),
            a = e("gsap"),
            d = e(12),
            h = e(13),
            p = e(9),
            l = e(8),
            c = e(5),
            u = e(5);
        e(10), e(11);
        var z = "screen and (min-width: 768px)",
            f = "screen and (min-width: 1200px)";
        n(function() {
            function e() {
                var e = n(".lazy-video");
                e.length > 0 && n.each(e, function(e, t) {
                    var i = n(t).find(".lazy-preview"),
                        s = i.attr("data-lazy-video"),
                        r = i.attr("data-autoplay"),
                        a = i.attr("data-target-breakpoint"),
                        d = i.attr("data-loop"),
                        h = i.attr("data-reverse") || !1,
                        p = parseInt(i.attr("data-offset")) || 200,
                        l = n('<video src="' + s + '" preload="auto" muted playsinline></video>');
                    return !(!a || Modernizr.mq("screen and (min-width: " + a + "px)")) || ("true" === d && l.prop("loop", !0), i.replaceWith(l), n(t).find("video")[0].load(), n(t).trigger("lazyvideo.loaded"), void(r && new o.Scene({
                        triggerHook: "onCenter",
                        offset: p,
                        triggerElement: l[0],
                        reverse: h
                    }).on("start", function() {
                        l[0].pause(), l[0].currentTime = 0, l[0].play(), n(t).trigger("lazyvideo.playing"), n(t).trigger("lazyvideo.smstart")
                    }).on("leave", function() {
                        n(t).trigger("lazyvideo.smleaving")
                    }).addTo(new o.Controller)))
                })
            }
            r.detect(), l(), new p;
            var t = {},
                i = function() {
                    t.width = n(window).width(), t.height = n(window).height()
                };
            n(window).on("resize", i), i();
            for (var m = n(".parallax").find(".bg"), w = 0, g = m.length; w < g; w++) new h(m[w]);
            var v = n(".section-video-player").not(".inter-play").find("video");
            v.length > 0 && Modernizr.desktop && document.hasFocus() && n.each(v, function() {
                this.play()
            }), n(window).on("blur", function() {
                n.each(v, function() {
                    this.pause()
                })
            }).on("focus", function() {
                n.each(v, function() {
                    this.play()
                })
            }), n("video[data-loop]").each(function() {
                var e = this,
                    t = n(this);
                new o.Scene({
                    triggerHook: "onCenter",
                    triggerElement: "[data-loop]",
                    reverse: !1
                }).on("start", function() {
                    e.play(), t.on("ended", function(i) {
                        e.currentTime = parseFloat(t.attr("data-loop")), e.play()
                    })
                }).addTo(new o.Controller)
            });
            var b = n(".section-video-reveal");
            b.length > 0 && new o.Scene({
                triggerHook: "onCenter",
                triggerElement: ".section-video-reveal video",
                reverse: !1
            }).on("start", function(e) {
                var t = n(e.currentTarget.triggerElement()),
                    i = t.parent().find(".button-replay");
                t[0].play(), t.on("ended", function() {
                    i.length > 0 && i.fadeIn(250).on("click", function() {
                        t[0].pause(), t[0].currentTime = 0, t[0].play(), n(this).fadeOut(250)
                    })
                })
            }).addTo(new o.Controller);
            var _ = n(".section-scroll-slide");
            if (_.length > 0 && Modernizr.desktop && Modernizr.mq(z)) {
                var y = new o.Controller({
                    globalSceneOptions: {
                        triggerHook: "onEnter",
                        duration: "200%"
                    }
                });
                _.each(function() {
                    new o.Scene({
                        triggerElement: this
                    }).setTween(n(this).find(".bg").get(0), {
                        y: "50%",
                        ease: Power0.easeNone
                    }).addTo(y)
                })
            }
            var k = n(".section-short-scroll > .bg");
            if (k.length > 0) {
                var j = new o.Controller,
                    x = Modernizr.mq(f) ? "250" : "0";
                k.each(function() {
                    new o.Scene({
                        triggerElement: this,
                        offset: x,
                        triggerHook: "onCenter"
                    }).setTween(n(this).find(".bg-second").get(0), .3, {
                        opacity: "0",
                        ease: Power0.easeNone
                    }).setClassToggle(n(this).parent().get(0), "changed").addTo(j)
                })
            }
            var T = n(".section-feature-slider"),
                P = T.find(".swiper-button-prev, .swiper-button-next"),
                C = 2 === P.length;
            T.length > 0 && new s(".section-feature-slider .swiper-container", {
                simulateTouch: !1,
                loop: !0,
                autoplay: 3e3,
                effect: "fade",
                speed: 1e3,
                autoHeight: !0,
                nextButton: C ? ".swiper-button-next" : null,
                prevButton: C ? ".swiper-button-prev" : null,
                autoplayDisableOnInteraction: !1
            });
            var S = n(".icon-slider");
            S.length > 0 && new s(".icon-slider", {
                simulateTouch: !1,
                loop: !0,
                autoplay: 1e3,
                speed: 500,
                slidesPerView: 6
            }).disableTouchControl(), n(".section-swap").each(function() {
                var e = n(this),
                    t = e.attr("data-swap-class") ? e : e.find("[data-swap-class]"),
                    i = t.map(function() {
                        return n(this).attr("data-swap-class")
                    }).get().join(" "),
                    o = 1 == t.length;
                t.click(function(t) {
                    t.preventDefault(), o ? e.hasClass(i) ? e.removeClass(i) : e.addClass(n(this).attr("data-swap-class")) : (e.removeClass(i), e.addClass(n(this).attr("data-swap-class")))
                })
            });
            var N = n(".desktop .anim-textcontent, .desktop .anim-textcontent-l2r");
            if (N.length > 0) {
                var A = new o.Controller;
                N.each(function() {
                    new o.Scene({
                        triggerElement: this
                    }).setClassToggle(this, "active").addTo(A)
                })
            }
            var R = n(".siriwave");
            R.length > 0 && R.each(function() {
                var e = window.navigator.userAgent,
                    t = e.indexOf("MSIE ");
                return t > 0 || navigator.userAgent.match(/Trident.*rv\:11\./) ? (n(".siriwave").html(""), n(".siriwave").html('<img src="https://www.fibaro.com/en/wp-content/uploads/sites/3/2017/02/siriwave_ie.png" alt="Sirivawe" style="width: 100%; height: auto;">')) : new d({
                    speed: .07,
                    amplitude: .8,
                    container: this,
                    autostart: !0,
                    cover: !0
                }), !1
            });
            var M = n(".section-packshot-slider .swiper-container, .packshot-slider .swiper-container");
            M.length > 0 && n.each(M, function() {
                var e = n(".section-packshot-slider .swiper-button"),
                    t = new s(this, {
                        simulateTouch: !1,
                        effect: "fade",
                        fade: {
                            crossFade: !0
                        },
                        speed: 500,
                        onSlideChangeStart: function(t) {
                            e.removeClass("active"), e.eq(t.realIndex).addClass("active")
                        }
                    });
                e.click(function(e) {
                    e.preventDefault(), t.slideTo(n(this).index()), n(".section-packshot-slider .swiper-button").removeClass("active"), n(this).addClass("active")
                })
            }), n("[data-video-id], [data-playlist-id]").on("click", function(e) {
                function t(e) {
                    e.preventDefault(), a.fadeOut(250, function() {
                        a.remove(), s.each(function() {
                            n(this)[0].play()
                        })
                    })
                }
                e.preventDefault();
                var i = n(this).is("[data-video-id]"),
                    o = i ? n(this).attr("data-video-id") : n(this).attr("data-playlist-id"),
                    s = n("video"),
                    r = i ? '<iframe class="embed-responsive-item" src="//www.youtube.com/embed/' + o + '?rel=0&autoplay=1" allowfullscreen></iframe>' : '<iframe class="embed-responsive-item" src="//www.youtube.com/embed/videoseries?list=' + o + '&rel=0&autoplay=1" allowfullscreen></iframe>';
                s.each(function() {
                    n(this)[0].pause()
                }), n("body").append('<div class="popup-overlay popup-video"><div class="container"><div class="row"><div class="col-phoneS-12"><div class="embed-responsive embed-responsive-16by9">' + r + '</div></div></div></div><a href="#" class="close"><span class="sr-only">Close</span></a></div>');
                var a = n(".popup-video");
                a.fadeIn(250), a.on("click", t), a.find("> a").on("click", t)
            });
            var O = c.read("fibaro-cookie-info-closed-2018"),
                D = n("#cookie-info");
            O || D.show(), D.find(".close").on("click", function(e) {
                e.preventDefault(), c.create("fibaro-cookie-info-closed-2018", 1, 100), D.hide()
            });
            var E = u.read("hkf-cookie-info-closed-2018"),
                I = n("#cookie-info");
            E || I.show(), I.find(".close").on("click", function(e) {
                e.preventDefault(), u.create("hkf-cookie-info-closed-2018", 1, 100), I.hide()
            });
            var F = function(e) {
                document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            };
            F("fibaro-cookie-info-closed");
            var L = function(e) {
                document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            };
            L("hkf-cookie-info-closed"), n(".footnotes-link").on("click", function(e) {
                e.preventDefault(), a.to(window, 0, {
                    scrollTo: {
                        y: "#footnotes",
                        offsetY: 90
                    }
                })
            }), ("pl" === n("html").attr("lang") || "pl-PL" === n("html").attr("lang") || n(".site-wrapper").hasClass("lang-pl")) && n("h1, h2, h3, p, li, span, .textcontent p, .typography-fix, .content").typographer({
                modules: ["orphan"]
            }), n(window).one("scroll", function() {
                e()
            });
            var H = n("footer").find(".custom-footer-menu");
            if (H && Modernizr.mq("screen and (max-width: 767px)")) {
                var X = H.find("h3");
                X.on("click", function() {
                    n(this).hasClass("active") ? n(this).removeClass("active") : (X.removeClass("active"), n(this).addClass("active"))
                })
            }
        })
    }, {
        10: 10,
        11: 11,
        12: 12,
        13: 13,
        5: 5,
        8: 8,
        9: 9,
        undefined: void 0
    }]
}, {}, [14]);