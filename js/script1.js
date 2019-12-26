! function e(n, o, t) {
    function i(a, l) {
        if (!o[a]) {
            if (!n[a]) {
                var s = "function" == typeof require && require;
                if (!l && s) return s(a, !0);
                if (r) return r(a, !0);
                var u = new Error("Cannot find module '" + a + "'");
                throw u.code = "MODULE_NOT_FOUND",
                    u
            }
            var p = o[a] = {
                exports: {}
            };
            n[a][0].call(p.exports, function(e) {
                var o = n[a][1][e];
                return i(o ? o : e)
            }, p, p.exports, e, n, o, t)
        }
        return o[a].exports
    }
    for (var r = "function" == typeof require && require, a = 0; a < t.length; a++) i(t[a]);
    return i
}({
    1: [function(e, n, o) {
        var t = e("jquery"),
            i = e("swiper");
        t(function() {
            new i("#home-slider .swiper-container", {
                loop: !0,
                simulateTouch: !1,
                autoplay: 5e3,
                autoplayDisableOnInteraction: !1,
                speed: 750,
                effect: "fade",
                pagination: ".swiper-pagination",
                paginationClickable: !0,
                prevButton: ".button-prev",
                nextButton: ".button-next"
            }), new i("#new-home-slider .swiper-container", {
                loop: !0,
                simulateTouch: !1,
                autoplay: 5e3,
                autoplayDisableOnInteraction: !1,
                speed: 750,
                effect: "fade",
                pagination: ".swiper-pagination",
                paginationClickable: !0,
                prevButton: ".button-prev",
                nextButton: ".button-next"
            }), new i("#integrations .swiper-container", {
                loop: !0,
                simulateTouch: !1,
                autoplay: 2e3,
                autoplayDisableOnInteraction: !1,
                speed: 750,
                effect: "fade",
                paginationClickable: !0
            }), new i("#products-slide-menu .swiper-container", {
                simulateTouch: !0,
                loop: !1,
                mousewheelControl: !0,
                keyboardControl: !0,
                scrollbar: "#products-slide-menu .swiper-scrollbar",
                scrollbarDraggable: !0,
                scrollbarHide: !1,
                scrollbarSnapOnRelease: !1,
                longSwipesRatio: .25,
                slidesPerView: 8,
                breakpoints: {
                    543: {
                        slidesPerView: 2
                    },
                    767: {
                        slidesPerView: 3
                    },
                    991: {
                        slidesPerView: 4
                    },
                    1099: {
                        slidesPerView: 6
                    }
                }
            }), t("#two-installers .container-fluid").clone().appendTo("#two-installers-cloned")
        })
    }, {
        undefined: void 0
    }]
}, {}, [1]);