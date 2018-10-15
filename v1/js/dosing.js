/* start of dosing-lookup js */
$(document).ready(function() {
                        var d = $("#agelyDosingMapContainer").text();
                        try {
                            d = JSON.parse(d)
                        } catch (g) {
                            return
                        }
                        function c(p, m) {
                            if (!isNaN(m)) {
                                m = parseInt(m)
                            }
                            var n = false;
                            var e = false;
                            if (p == "kg") {
                                n = true
                            } else {
                                if (p == "lbs") {
                                    e = true
                                }
                            }
                            var o = "invalid input";
                            if (n) {
                                if (m < 40) {} else {
                                    if (m < 50) {
                                        o = "40x"
                                    } else {
                                        if (m < 60) {
                                            o = "50x"
                                        } else {
                                            if (m < 70) {
                                                o = "60x"
                                            } else {
                                                if (m < 80) {
                                                    o = "70x"
                                                } else {
                                                    if (m < 90) {
                                                        o = "80x"
                                                    } else {
                                                        if (m < 100) {
                                                            o = "90x"
                                                        } else {
                                                            if (m < 110) {
                                                                o = "100x"
                                                            } else {
                                                                if (m >= 110) {
                                                                    o = "110plus"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } else {
                                if (e) {
                                    if (m < 88) {} else {
                                        if (m < 98) {
                                            o = "40x"
                                        } else {
                                            if (m < 108) {
                                                o = "50x"
                                            } else {
                                                if (m < 118) {
                                                    o = "60x"
                                                } else {
                                                    if (m < 128) {
                                                        o = "70x"
                                                    } else {
                                                        if (m < 138) {
                                                            o = "80x"
                                                        } else {
                                                            if (m < 148) {
                                                                o = "90x"
                                                            } else {
                                                                if (m < 158) {
                                                                    o = "100x"
                                                                } else {
                                                                    if (m >= 168) {
                                                                        o = "110plus"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return o
                        }
                        function h() {
                            $(".dosing-lookup-comp #outputDiv").empty();
                            var o = $.trim($(".dosing-lookup-comp .dosing-wt-unit").val());
                            var s = $.trim($(".dosing-lookup-comp .dosing-wt-value").val());
                            var m = c(o, s);
                            var r = m === "invalid input";
                            var q = $(".dosing-lookup-comp .template .dosing-outer-wrapper").clone();
                            $(q).empty();
                            var p = $(".dosing-lookup-comp .template .invalid-err-msg").clone();
                            var n = $(".dosing-lookup-comp .template .no-dosing-msg").clone();
                            if (r) {
                                $(q).append(p);
                                $(".dosing-lookup-comp #outputDiv").append(q)
                            } else {
                                var e = d[m];
                                if (e === undefined) {
                                    $(q).append(n);
                                    $(".dosing-lookup-comp #outputDiv").append(q);
                                    return
                                }
                                e = JSON.parse(e);
                                l(e)
                            }
                        }
                        $(".dosing-lookup-comp #doDosingLookup").on("click", h);
                        function a(q, p, o) {
                            if (q && q.length > 0) {
                                q = q[0];
                                var m = "right";
                                if (o) {
                                    m = "left"
                                }
                                var e = $(q).find("." + m);
                                $.each(e, function(s, r) {
                                    $(r).switchClass(m, "week-" + p)
                                })
                            }
                            var n = $(q).find(".week-number .week-" + p);
                            if (n && n.length > 0) {
                                n = n[0];
                                $(n).text("Week " + p)
                            }
                            return q
                        }
                        function i(m, q, n, o) {
                            var t = ".daily-dose-d" + n;
                            var r = t + " .day-count.week-" + q;
                            var s = t + " .tblt-count.week-" + q;
                            var p = $(m).find(r);
                            var e = $(m).find(s);
                            if (p && p.length > 0) {
                                p = p[0];
                                $(p).text("Day " + n)
                            }
                            if (e && e.length > 0) {
                                e = e[0];
                                $(e).text(o)
                            }
                            return m
                        }
                        function b(m, o, p) {
                            var e = "right";
                            if (p) {
                                e = "left"
                            }
                            var n = 0;
                            $.each(o, function(v, r) {
                                var s = ".pack-row-" + v;
                                var A = $(m).find(s);
                                if (A && A.length > 0) {
                                    A = A[0];
                                    $(A).switchClass("hide", "show");
                                    r = r.split("=");
                                    var z = r[0];
                                    var q = $(".img-" + z).clone();
                                    z = z.replace("p", "");
                                    var x = r[1];
                                    var t = ".pack-image-" + e;
                                    var w = ".pack-count-" + e;
                                    var u = $(A).find(t);
                                    var y = $(A).find(w);
                                    if (u && u.length > 0) {
                                        u = u[0];
                                        $(u).addClass("p-" + z);
                                        $(u).append(q)
                                    }
                                    if (y && y.length > 0) {
                                        y = y[0];
                                        $(y).addClass("p-" + z + "-count");
                                        $(y).addClass("count-filled");
                                        $(y).text(x)
                                    }
                                }
                            });
                            return m
                        }
                        function l(q) {
                            $(".dosing-lookup-comp #outputDiv").empty();
                            var o = $(".dosing-lookup-comp .template .tablet-dosing-wrapper").clone();
                            var u = $(".dosing-lookup-comp .template .pack-dosing-wrapper").clone();
                            var r = $(".dosing-lookup-comp .template .dosing-outer-wrapper").clone();
                            $(r).empty();
                            var m = "";
                            var n = true;
                            var t = 0;
                            var s = 0;
                            var p = 0;
                            var e = {};
                            $.each(q, function(z, y) {
                                var w = y.weekNo;
                                var C = y.dayWiseTabletCount;
                                var x = y.sizeWisePackCount;
                                m = a(o, w, n);
                                var A = C.split(",");
                                $.each(A, function(E, F) {
                                    F = F.split("=");
                                    var v = F[0];
                                    v = v.replace("d", "");
                                    var D = F[1];
                                    m = i(m, w, v, D)
                                });
                                var B = x.split(",");
                                u = b(u, B, n);
                                n = !n
                            });
                            $(r).append(m);
                            $(r).append(u);
                            $(".dosing-lookup-comp #outputDiv").append(r);
                            $("#outputDiv").css("display", "none");
                            $("#outputDiv").fadeIn(1500)
                        }
                        $(".dosing-lookup-comp #doDosingLookup").click();
                        var f = false;
                        var j = $.trim($(".dosing-lookup-comp #wgt-txtbox").val());
                        function k(e) {
                            var m = e.key;
                            var n = $(this).val();
                            if (m == "Enter" && !("" == $.trim(n))) {
                                h()
                            }
                            if ((e.which != 46 || (n && n.indexOf(".") != -1)) && ((e.which < 48 || e.which > 57) && (e.which != 0 && e.which != 8))) {
                                e.preventDefault()
                            }
                            if ((e.which == 46) && (n && n.indexOf(".") == -1)) {
                                setTimeout(function() {
                                    if (n && n.substring(n.indexOf(".")).length > 3) {
                                        $(this).val(n.substring(0, n.indexOf(".") + 3))
                                    }
                                }, 1)
                            }
                            if ((n && n.indexOf(".") != -1) && (n.substring(n.indexOf(".")).length > 1) && (e.which != 0 && e.which != 8) && ($(this)[0].selectionStart >= n.length - 1)) {
                                e.preventDefault()
                            }
                        }
                        $(".dosing-lookup-comp #wgt-txtbox").on("keypress", k)
                    });

/* end of dosing-lookup js */