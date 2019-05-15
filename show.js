! function($) {
    var e = $("body"),
        n = $(window),
        i = $("html, body"),
        a = $("#banner"),
        s = "a25dd8e11057acdf066c52da2f6dbdbb",
        t = $("#main"),
        o = e.hasClass("single-work") || e.hasClass("page-approach"),
        r = parseInt(e.css("padding-top"), 10),
        d = e.find("#page-about"),
        l = $("#main").find(".type-work.teaser"),
        c = $("#burger"),
        h = $("#nav-main"),
        f = 0,
        p = 0,
        m = !1,

        var k = t.find(".archive-header"),
            S = k.find("h1.archive-title"),
            H = k.find("nav"),
            T = k.find(".terms-wrapper"),
            _ = k.find(".terms"),
            L = S.find(".statement"),
            x = 0,
            A = L.length,
            D = 0,
            B = 0,
            q = function() {
                var e = 0;
                L.each(function() {
                    $(this).height() > e && (e = $(this).height()), S.css("height", e)
                })
            },
            z = function() {
                x >= A && (x = 0);
                var e = L.eq(x),
                    n = e.find(".word"),
                    i = n.length;
                D >= i ? (D = 0, x++, A > 1 && z()) : (0 === D && L.find(".show").removeClass("show"), n.eq(D).addClass("show"), D++, D >= i ? setTimeout(z, 833) : setTimeout(z, 500))
            };
