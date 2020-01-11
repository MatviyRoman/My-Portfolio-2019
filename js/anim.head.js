var resizeId;
$(window).resize(function() {
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 500);
});

function doneResizing(){
    //whatever we want to do
}


$(document).ready(function(g) {
            function h(a) {
                var b = k(a);
                if (a.parents(".tt-headline").hasClass("type")) {
                    var c = a.parent(".tt-words-wrapper");
                    c.addClass("selected").removeClass("waiting");
                    setTimeout(function() {
                        c.removeClass("selected");
                        a.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")
                    }, 500);
                    setTimeout(function() {
                        l(b, 150)
                    }, 1300)
                } else if (a.parents(".tt-headline").hasClass("letters")) {
                    var d = a.children("i").length >= b.children("i").length ? !0 : !1;
                    m(a.find("i").eq(0),
                        a, d, 50);
                    f(b.find("i").eq(0), b, d, 50)
                } else a.parents(".tt-headline").hasClass("clip") ? a.parents(".tt-words-wrapper").animate({
                    width: "2px"
                }, 600, function() {
                    e(a, b);
                    l(b)
                }) : a.parents(".tt-headline").hasClass("loading-bar") ? (a.parents(".tt-words-wrapper").removeClass("is-loading"), e(a, b), setTimeout(function() {
                    h(b)
                }, 3800), setTimeout(function() {
                    a.parents(".tt-words-wrapper").addClass("is-loading")
                }, 800)) : (e(a, b), setTimeout(function() {
                    h(b)
                }, 2500))
            }

            function l(a, b) {
                a.parents(".tt-headline").hasClass("type") ? (f(a.find("i").eq(0),
                    a, !1, b), a.addClass("is-visible").removeClass("is-hidden")) : a.parents(".tt-headline").hasClass("clip") && a.parents(".tt-words-wrapper").animate({
                    width: a.width() + 10
                }, 600, function() {
                    setTimeout(function() {
                        h(a)
                    }, 1500)
                })
            }

            function m(a, b, c, d) {
                a.removeClass("in").addClass("out");
                a.is(":last-child") ? c && setTimeout(function() {
                    h(k(b))
                }, 2500) : setTimeout(function() {
                    m(a.next(), b, c, d)
                }, d);
                if (a.is(":last-child") && g("html").hasClass("no-csstransitions")) {
                    var f = k(b);
                    e(b, f)
                }
            }

            function f(a, b, c, d) {
                a.addClass("in").removeClass("out");
                a.is(":last-child") ? (b.parents(".tt-headline").hasClass("type") && setTimeout(function() {
                    b.parents(".tt-words-wrapper").addClass("waiting")
                }, 200), c || setTimeout(function() {
                    h(b)
                }, 2500)) : setTimeout(function() {
                    f(a.next(), b, c, d)
                }, d)
            }

            function k(a) {
                return a.is(":last-child") ? a.parent().children().eq(0) : a.next()
            }

            function e(a, b) {
                a.removeClass("is-visible").addClass("is-hidden");
                b.removeClass("is-hidden").addClass("is-visible")
            }(function(a) {
                a.each(function() {
                    var a = g(this),
                        c = a.text().split(""),
                        d = a.hasClass("is-visible");
                    for (i in c) 0 < a.parents(".rotate-2").length && (c[i] = "<em>" + c[i] + "</em>"), c[i] = d ? '<i class="in">' + c[i] + "</i>" : "<i>" + c[i] + "</i>";
                    c = c.join("");
                    a.html(c).css("opacity", 1)
                })
            })(g(".tt-headline.letters").find("b"));
            (function(a) {
                var b = 2500;
                a.each(function() {
                    var a = g(this);
                    if (a.hasClass("loading-bar")) b = 3800, setTimeout(function() {
                        a.find(".tt-words-wrapper").addClass("is-loading")
                    }, 800);
                    else if (a.hasClass("clip")) {
                        var d = a.find(".tt-words-wrapper"),
                            f = d.width() + 10;
                        d.css("width", f)
                    } else if (!a.hasClass("type")) {
                        var e =
                            0;
                        a.find(".tt-words-wrapper b").each(function() {
                            var a = g(this).width();
                            a > e && (e = a)
                        });
                        a.find(".tt-words-wrapper").css("width", e)
                    }
                    setTimeout(function() {
                        h(a.find(".is-visible").eq(0))
                    }, b)
                })
            })(g(".tt-headline"))
        });
    }, 1000);
} 