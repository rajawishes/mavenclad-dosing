	/*! * jQuery JavaScript Library v1.11.3 * http://jquery.com/ * * Includes Sizzle.js * http://sizzlejs.com/ * * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors * Released under the MIT license * http://jquery.org/license * * Date: 2015-04-28T16:19Z */
	(function(b, a) {
		if (typeof module === "object" && typeof module.exports === "object") {
			module.exports = b.document ? a(b, true) : function(c) {
				if (!c.document) {
					throw new Error("jQuery requires a window with a document")
				}
				return a(c)
			}
		} else {
			a(b)
		}
	}(typeof window !== "undefined" ? window : this, function(a4, au) {
		var aO = [];
		var O = aO.slice;
		var ay = aO.concat;
		var w = aO.push;
		var bT = aO.indexOf;
		var ab = {};
		var x = ab.toString;
		var J = ab.hasOwnProperty;
		var C = {};
		var ah = "1.11.3"
		  , bH = function(e, i) {
			return new bH.fn.init(e,i)
		}
		  , D = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
		  , bR = /^-ms-/
		  , aV = /-([\da-z])/gi
		  , N = function(e, i) {
			return i.toUpperCase()
		};
		bH.fn = bH.prototype = {
			jquery: ah,
			constructor: bH,
			selector: "",
			length: 0,
			toArray: function() {
				return O.call(this)
			},
			get: function(e) {
				return e != null ? (e < 0 ? this[e + this.length] : this[e]) : O.call(this)
			},
			pushStack: function(e) {
				var i = bH.merge(this.constructor(), e);
				i.prevObject = this;
				i.context = this.context;
				return i
			},
			each: function(i, e) {
				return bH.each(this, i, e)
			},
			map: function(e) {
				return this.pushStack(bH.map(this, function(b6, b5) {
					return e.call(b6, b5, b6)
				}))
			},
			slice: function() {
				return this.pushStack(O.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(b6) {
				var e = this.length
				  , b5 = +b6 + (b6 < 0 ? e : 0);
				return this.pushStack(b5 >= 0 && b5 < e ? [this[b5]] : [])
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: w,
			sort: aO.sort,
			splice: aO.splice
		};
		bH.extend = bH.fn.extend = function() {
			var e, ca, b5, b6, cd, cb, b9 = arguments[0] || {}, b8 = 1, b7 = arguments.length, cc = false;
			if (typeof b9 === "boolean") {
				cc = b9;
				b9 = arguments[b8] || {};
				b8++
			}
			if (typeof b9 !== "object" && !bH.isFunction(b9)) {
				b9 = {}
			}
			if (b8 === b7) {
				b9 = this;
				b8--
			}
			for (; b8 < b7; b8++) {
				if ((cd = arguments[b8]) != null) {
					for (b6 in cd) {
						e = b9[b6];
						b5 = cd[b6];
						if (b9 === b5) {
							continue
						}
						if (cc && b5 && (bH.isPlainObject(b5) || (ca = bH.isArray(b5)))) {
							if (ca) {
								ca = false;
								cb = e && bH.isArray(e) ? e : []
							} else {
								cb = e && bH.isPlainObject(e) ? e : {}
							}
							b9[b6] = bH.extend(cc, cb, b5)
						} else {
							if (b5 !== undefined) {
								b9[b6] = b5
							}
						}
					}
				}
			}
			return b9
		}
		;
		bH.extend({
			expando: "jQuery" + (ah + Math.random()).replace(/\D/g, ""),
			isReady: true,
			error: function(e) {
				throw new Error(e)
			},
			noop: function() {},
			isFunction: function(e) {
				return bH.type(e) === "function"
			},
			isArray: Array.isArray || function(e) {
				return bH.type(e) === "array"
			}
			,
			isWindow: function(e) {
				return e != null && e == e.window
			},
			isNumeric: function(e) {
				return !bH.isArray(e) && (e - parseFloat(e) + 1) >= 0
			},
			isEmptyObject: function(i) {
				var e;
				for (e in i) {
					return false
				}
				return true
			},
			isPlainObject: function(b6) {
				var i;
				if (!b6 || bH.type(b6) !== "object" || b6.nodeType || bH.isWindow(b6)) {
					return false
				}
				try {
					if (b6.constructor && !J.call(b6, "constructor") && !J.call(b6.constructor.prototype, "isPrototypeOf")) {
						return false
					}
				} catch (b5) {
					return false
				}
				if (C.ownLast) {
					for (i in b6) {
						return J.call(b6, i)
					}
				}
				for (i in b6) {}
				return i === undefined || J.call(b6, i)
			},
			type: function(e) {
				if (e == null) {
					return e + ""
				}
				return typeof e === "object" || typeof e === "function" ? ab[x.call(e)] || "object" : typeof e
			},
			globalEval: function(e) {
				if (e && bH.trim(e)) {
					(a4.execScript || function(i) {
						a4["eval"].call(a4, i)
					}
					)(e)
				}
			},
			camelCase: function(e) {
				return e.replace(bR, "ms-").replace(aV, N)
			},
			nodeName: function(i, e) {
				return i.nodeName && i.nodeName.toLowerCase() === e.toLowerCase()
			},
			each: function(b9, ca, b5) {
				var b8, b6 = 0, b7 = b9.length, e = ac(b9);
				if (b5) {
					if (e) {
						for (; b6 < b7; b6++) {
							b8 = ca.apply(b9[b6], b5);
							if (b8 === false) {
								break
							}
						}
					} else {
						for (b6 in b9) {
							b8 = ca.apply(b9[b6], b5);
							if (b8 === false) {
								break
							}
						}
					}
				} else {
					if (e) {
						for (; b6 < b7; b6++) {
							b8 = ca.call(b9[b6], b6, b9[b6]);
							if (b8 === false) {
								break
							}
						}
					} else {
						for (b6 in b9) {
							b8 = ca.call(b9[b6], b6, b9[b6]);
							if (b8 === false) {
								break
							}
						}
					}
				}
				return b9
			},
			trim: function(e) {
				return e == null ? "" : (e + "").replace(D, "")
			},
			makeArray: function(e, b5) {
				var i = b5 || [];
				if (e != null) {
					if (ac(Object(e))) {
						bH.merge(i, typeof e === "string" ? [e] : e)
					} else {
						w.call(i, e)
					}
				}
				return i
			},
			inArray: function(b7, b5, b6) {
				var e;
				if (b5) {
					if (bT) {
						return bT.call(b5, b7, b6)
					}
					e = b5.length;
					b6 = b6 ? b6 < 0 ? Math.max(0, e + b6) : b6 : 0;
					for (; b6 < e; b6++) {
						if (b6 in b5 && b5[b6] === b7) {
							return b6
						}
					}
				}
				return -1
			},
			merge: function(b8, b6) {
				var e = +b6.length
				  , b5 = 0
				  , b7 = b8.length;
				while (b5 < e) {
					b8[b7++] = b6[b5++]
				}
				if (e !== e) {
					while (b6[b5] !== undefined) {
						b8[b7++] = b6[b5++]
					}
				}
				b8.length = b7;
				return b8
			},
			grep: function(e, cb, b8) {
				var ca, b7 = [], b5 = 0, b6 = e.length, b9 = !b8;
				for (; b5 < b6; b5++) {
					ca = !cb(e[b5], b5);
					if (ca !== b9) {
						b7.push(e[b5])
					}
				}
				return b7
			},
			map: function(b6, cb, e) {
				var ca, b8 = 0, b9 = b6.length, b5 = ac(b6), b7 = [];
				if (b5) {
					for (; b8 < b9; b8++) {
						ca = cb(b6[b8], b8, e);
						if (ca != null) {
							b7.push(ca)
						}
					}
				} else {
					for (b8 in b6) {
						ca = cb(b6[b8], b8, e);
						if (ca != null) {
							b7.push(ca)
						}
					}
				}
				return ay.apply([], b7)
			},
			guid: 1,
			proxy: function(b7, b6) {
				var e, b5, i;
				if (typeof b6 === "string") {
					i = b7[b6];
					b6 = b7;
					b7 = i
				}
				if (!bH.isFunction(b7)) {
					return undefined
				}
				e = O.call(arguments, 2);
				b5 = function() {
					return b7.apply(b6 || this, e.concat(O.call(arguments)))
				}
				;
				b5.guid = b7.guid = b7.guid || bH.guid++;
				return b5
			},
			now: function() {
				return +(new Date())
			},
			support: C
		});
		bH.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(b5, e) {
			ab["[object " + e + "]"] = e.toLowerCase()
		});
		function ac(b5) {
			var i = "length"in b5 && b5.length
			  , e = bH.type(b5);
			if (e === "function" || bH.isWindow(b5)) {
				return false
			}
			if (b5.nodeType === 1 && i) {
				return true
			}
			return e === "array" || i === 0 || typeof i === "number" && i > 0 && (i - 1)in b5
		}
		var m = /*! * Sizzle CSS Selector Engine v2.2.0-pre * http://sizzlejs.com/ * * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors * Released under the MIT license * http://jquery.org/license * * Date: 2014-12-16 */
		(function(dd) {
			var cx, dg, cm, cG, cJ, ch, cV, df, dl, cH, cW, cY, cB, cn, c7, c2, de, cd, cE, c9 = "sizzle" + 1 * new Date(), cI = dd.document, dh = 0, c3 = 0, b8 = cz(), c8 = cz(), cF = cz(), cD = function(i, e) {
				if (i === e) {
					cW = true
				}
				return 0
			}, cP = 1 << 31, cN = ({}).hasOwnProperty, db = [], dc = db.pop, cL = db.push, b6 = db.push, cl = db.slice, cc = function(dp, dn) {
				var dm = 0
				  , e = dp.length;
				for (; dm < e; dm++) {
					if (dp[dm] === dn) {
						return dm
					}
				}
				return -1
			}, b7 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", co = "[\\x20\\t\\r\\n\\f]", b5 = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", cK = b5.replace("w", "w#"), c5 = "\\[" + co + "*(" + b5 + ")(?:" + co + "*([*^$|!~]?=)" + co + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + cK + "))|)" + co + "*\\]", cj = ":(" + b5 + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + c5 + ")*)|.*)\\)|)", ct = new RegExp(co + "+","g"), cq = new RegExp("^" + co + "+|((?:^|[^\\\\])(?:\\\\.)*)" + co + "+$","g"), cu = new RegExp("^" + co + "*," + co + "*"), cA = new RegExp("^" + co + "*([>+~]|" + co + ")" + co + "*"), cs = new RegExp("=" + co + "*([^\\]'\"]*?)" + co + "*\\]","g"), cR = new RegExp(cj), cT = new RegExp("^" + cK + "$"), c1 = {
				ID: new RegExp("^#(" + b5 + ")"),
				CLASS: new RegExp("^\\.(" + b5 + ")"),
				TAG: new RegExp("^(" + b5.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + c5),
				PSEUDO: new RegExp("^" + cj),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + co + "*(even|odd|(([+-]|)(\\d*)n|)" + co + "*(?:([+-]|)" + co + "*(\\d+)|))" + co + "*\\)|)","i"),
				bool: new RegExp("^(?:" + b7 + ")$","i"),
				needsContext: new RegExp("^" + co + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + co + "*((?:-\\d)?\\d*)" + co + "*\\)|)(?=[^-]|$)","i")
			}, cb = /^(?:input|select|textarea|button)$/i, ck = /^h\d$/i, cO = /^[^{]+\{\s*\[native \w/, cQ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, c0 = /[+~]/, cM = /'|\\/g, cr = new RegExp("\\\\([\\da-f]{1,6}" + co + "?|(" + co + ")|.)","ig"), c4 = function(e, dn, i) {
				var dm = "0x" + dn - 65536;
				return dm !== dm || i ? dn : dm < 0 ? String.fromCharCode(dm + 65536) : String.fromCharCode(dm >> 10 | 55296, dm & 1023 | 56320)
			}, dk = function() {
				cY()
			};
			try {
				b6.apply((db = cl.call(cI.childNodes)), cI.childNodes);
				db[cI.childNodes.length].nodeType
			} catch (cC) {
				b6 = {
					apply: db.length ? function(i, e) {
						cL.apply(i, cl.call(e))
					}
					: function(dp, dn) {
						var e = dp.length
						  , dm = 0;
						while ((dp[e++] = dn[dm++])) {}
						dp.length = e - 1
					}
				}
			}
			function cv(du, dm, dy, dA) {
				var dz, dr, ds, dw, dx, dq, dp, e, dn, dv;
				if ((dm ? dm.ownerDocument || dm : cI) !== cB) {
					cY(dm)
				}
				dm = dm || cB;
				dy = dy || [];
				dw = dm.nodeType;
				if (typeof du !== "string" || !du || dw !== 1 && dw !== 9 && dw !== 11) {
					return dy
				}
				if (!dA && c7) {
					if (dw !== 11 && (dz = cQ.exec(du))) {
						if ((ds = dz[1])) {
							if (dw === 9) {
								dr = dm.getElementById(ds);
								if (dr && dr.parentNode) {
									if (dr.id === ds) {
										dy.push(dr);
										return dy
									}
								} else {
									return dy
								}
							} else {
								if (dm.ownerDocument && (dr = dm.ownerDocument.getElementById(ds)) && cE(dm, dr) && dr.id === ds) {
									dy.push(dr);
									return dy
								}
							}
						} else {
							if (dz[2]) {
								b6.apply(dy, dm.getElementsByTagName(du));
								return dy
							} else {
								if ((ds = dz[3]) && dg.getElementsByClassName) {
									b6.apply(dy, dm.getElementsByClassName(ds));
									return dy
								}
							}
						}
					}
					if (dg.qsa && (!c2 || !c2.test(du))) {
						e = dp = c9;
						dn = dm;
						dv = dw !== 1 && du;
						if (dw === 1 && dm.nodeName.toLowerCase() !== "object") {
							dq = ch(du);
							if ((dp = dm.getAttribute("id"))) {
								e = dp.replace(cM, "\\$&")
							} else {
								dm.setAttribute("id", e)
							}
							e = "[id='" + e + "'] ";
							dx = dq.length;
							while (dx--) {
								dq[dx] = e + cg(dq[dx])
							}
							dn = c0.test(du) && cS(dm.parentNode) || dm;
							dv = dq.join(",")
						}
						if (dv) {
							try {
								b6.apply(dy, dn.querySelectorAll(dv));
								return dy
							} catch (dt) {} finally {
								if (!dp) {
									dm.removeAttribute("id")
								}
							}
						}
					}
				}
				return df(du.replace(cq, "$1"), dm, dy, dA)
			}
			function cz() {
				var i = [];
				function e(dm, dn) {
					if (i.push(dm + " ") > cm.cacheLength) {
						delete e[i.shift()]
					}
					return (e[dm + " "] = dn)
				}
				return e
			}
			function ci(e) {
				e[c9] = true;
				return e
			}
			function ce(i) {
				var dn = cB.createElement("div");
				try {
					return !!i(dn)
				} catch (dm) {
					return false
				} finally {
					if (dn.parentNode) {
						dn.parentNode.removeChild(dn)
					}
					dn = null
				}
			}
			function di(dm, dp) {
				var e = dm.split("|")
				  , dn = dm.length;
				while (dn--) {
					cm.attrHandle[e[dn]] = dp
				}
			}
			function b9(i, e) {
				var dn = e && i
				  , dm = dn && i.nodeType === 1 && e.nodeType === 1 && (~e.sourceIndex || cP) - (~i.sourceIndex || cP);
				if (dm) {
					return dm
				}
				if (dn) {
					while ((dn = dn.nextSibling)) {
						if (dn === e) {
							return -1
						}
					}
				}
				return i ? 1 : -1
			}
			function cw(e) {
				return function(dm) {
					var i = dm.nodeName.toLowerCase();
					return i === "input" && dm.type === e
				}
			}
			function ca(e) {
				return function(dm) {
					var i = dm.nodeName.toLowerCase();
					return (i === "input" || i === "button") && dm.type === e
				}
			}
			function c6(e) {
				return ci(function(i) {
					i = +i;
					return ci(function(dm, dr) {
						var dp, dn = e([], dm.length, i), dq = dn.length;
						while (dq--) {
							if (dm[(dp = dn[dq])]) {
								dm[dp] = !(dr[dp] = dm[dp])
							}
						}
					})
				})
			}
			function cS(e) {
				return e && typeof e.getElementsByTagName !== "undefined" && e
			}
			dg = cv.support = {};
			cJ = cv.isXML = function(e) {
				var i = e && (e.ownerDocument || e).documentElement;
				return i ? i.nodeName !== "HTML" : false
			}
			;
			cY = cv.setDocument = function(dm) {
				var e, i, dn = dm ? dm.ownerDocument || dm : cI;
				if (dn === cB || dn.nodeType !== 9 || !dn.documentElement) {
					return cB
				}
				cB = dn;
				cn = dn.documentElement;
				i = dn.defaultView;
				if (i && i !== i.top) {
					if (i.addEventListener) {
						i.addEventListener("unload", dk, false)
					} else {
						if (i.attachEvent) {
							i.attachEvent("onunload", dk)
						}
					}
				}
				c7 = !cJ(dn);
				dg.attributes = ce(function(dp) {
					dp.className = "i";
					return !dp.getAttribute("className")
				});
				dg.getElementsByTagName = ce(function(dp) {
					dp.appendChild(dn.createComment(""));
					return !dp.getElementsByTagName("*").length
				});
				dg.getElementsByClassName = cO.test(dn.getElementsByClassName);
				dg.getById = ce(function(dp) {
					cn.appendChild(dp).id = c9;
					return !dn.getElementsByName || !dn.getElementsByName(c9).length
				});
				if (dg.getById) {
					cm.find.ID = function(dr, dq) {
						if (typeof dq.getElementById !== "undefined" && c7) {
							var dp = dq.getElementById(dr);
							return dp && dp.parentNode ? [dp] : []
						}
					}
					;
					cm.filter.ID = function(dq) {
						var dp = dq.replace(cr, c4);
						return function(dr) {
							return dr.getAttribute("id") === dp
						}
					}
				} else {
					delete cm.find.ID;
					cm.filter.ID = function(dq) {
						var dp = dq.replace(cr, c4);
						return function(ds) {
							var dr = typeof ds.getAttributeNode !== "undefined" && ds.getAttributeNode("id");
							return dr && dr.value === dp
						}
					}
				}
				cm.find.TAG = dg.getElementsByTagName ? function(dp, dq) {
					if (typeof dq.getElementsByTagName !== "undefined") {
						return dq.getElementsByTagName(dp)
					} else {
						if (dg.qsa) {
							return dq.querySelectorAll(dp)
						}
					}
				}
				: function(dp, dt) {
					var du, ds = [], dr = 0, dq = dt.getElementsByTagName(dp);
					if (dp === "*") {
						while ((du = dq[dr++])) {
							if (du.nodeType === 1) {
								ds.push(du)
							}
						}
						return ds
					}
					return dq
				}
				;
				cm.find.CLASS = dg.getElementsByClassName && function(dq, dp) {
					if (c7) {
						return dp.getElementsByClassName(dq)
					}
				}
				;
				de = [];
				c2 = [];
				if ((dg.qsa = cO.test(dn.querySelectorAll))) {
					ce(function(dp) {
						cn.appendChild(dp).innerHTML = "<a id='" + c9 + "'></a><select id='" + c9 + "-\f]' msallowcapture=''><option selected=''></option></select>";
						if (dp.querySelectorAll("[msallowcapture^='']").length) {
							c2.push("[*^$]=" + co + "*(?:''|\"\")")
						}
						if (!dp.querySelectorAll("[selected]").length) {
							c2.push("\\[" + co + "*(?:value|" + b7 + ")")
						}
						if (!dp.querySelectorAll("[id~=" + c9 + "-]").length) {
							c2.push("~=")
						}
						if (!dp.querySelectorAll(":checked").length) {
							c2.push(":checked")
						}
						if (!dp.querySelectorAll("a#" + c9 + "+*").length) {
							c2.push(".#.+[+~]")
						}
					});
					ce(function(dq) {
						var dp = dn.createElement("input");
						dp.setAttribute("type", "hidden");
						dq.appendChild(dp).setAttribute("name", "D");
						if (dq.querySelectorAll("[name=d]").length) {
							c2.push("name" + co + "*[*^$|!~]?=")
						}
						if (!dq.querySelectorAll(":enabled").length) {
							c2.push(":enabled", ":disabled")
						}
						dq.querySelectorAll("*,:x");
						c2.push(",.*:")
					})
				}
				if ((dg.matchesSelector = cO.test((cd = cn.matches || cn.webkitMatchesSelector || cn.mozMatchesSelector || cn.oMatchesSelector || cn.msMatchesSelector)))) {
					ce(function(dp) {
						dg.disconnectedMatch = cd.call(dp, "div");
						cd.call(dp, "[s!='']:x");
						de.push("!=", cj)
					})
				}
				c2 = c2.length && new RegExp(c2.join("|"));
				de = de.length && new RegExp(de.join("|"));
				e = cO.test(cn.compareDocumentPosition);
				cE = e || cO.test(cn.contains) ? function(dq, dp) {
					var ds = dq.nodeType === 9 ? dq.documentElement : dq
					  , dr = dp && dp.parentNode;
					return dq === dr || !!(dr && dr.nodeType === 1 && (ds.contains ? ds.contains(dr) : dq.compareDocumentPosition && dq.compareDocumentPosition(dr) & 16))
				}
				: function(dq, dp) {
					if (dp) {
						while ((dp = dp.parentNode)) {
							if (dp === dq) {
								return true
							}
						}
					}
					return false
				}
				;
				cD = e ? function(dq, dp) {
					if (dq === dp) {
						cW = true;
						return 0
					}
					var dr = !dq.compareDocumentPosition - !dp.compareDocumentPosition;
					if (dr) {
						return dr
					}
					dr = (dq.ownerDocument || dq) === (dp.ownerDocument || dp) ? dq.compareDocumentPosition(dp) : 1;
					if (dr & 1 || (!dg.sortDetached && dp.compareDocumentPosition(dq) === dr)) {
						if (dq === dn || dq.ownerDocument === cI && cE(cI, dq)) {
							return -1
						}
						if (dp === dn || dp.ownerDocument === cI && cE(cI, dp)) {
							return 1
						}
						return cH ? (cc(cH, dq) - cc(cH, dp)) : 0
					}
					return dr & 4 ? -1 : 1
				}
				: function(dq, dp) {
					if (dq === dp) {
						cW = true;
						return 0
					}
					var dw, dt = 0, dv = dq.parentNode, ds = dp.parentNode, dr = [dq], du = [dp];
					if (!dv || !ds) {
						return dq === dn ? -1 : dp === dn ? 1 : dv ? -1 : ds ? 1 : cH ? (cc(cH, dq) - cc(cH, dp)) : 0
					} else {
						if (dv === ds) {
							return b9(dq, dp)
						}
					}
					dw = dq;
					while ((dw = dw.parentNode)) {
						dr.unshift(dw)
					}
					dw = dp;
					while ((dw = dw.parentNode)) {
						du.unshift(dw)
					}
					while (dr[dt] === du[dt]) {
						dt++
					}
					return dt ? b9(dr[dt], du[dt]) : dr[dt] === cI ? -1 : du[dt] === cI ? 1 : 0
				}
				;
				return dn
			}
			;
			cv.matches = function(i, e) {
				return cv(i, null, null, e)
			}
			;
			cv.matchesSelector = function(dm, dp) {
				if ((dm.ownerDocument || dm) !== cB) {
					cY(dm)
				}
				dp = dp.replace(cs, "='$1']");
				if (dg.matchesSelector && c7 && (!de || !de.test(dp)) && (!c2 || !c2.test(dp))) {
					try {
						var i = cd.call(dm, dp);
						if (i || dg.disconnectedMatch || dm.document && dm.document.nodeType !== 11) {
							return i
						}
					} catch (dn) {}
				}
				return cv(dp, cB, null, [dm]).length > 0
			}
			;
			cv.contains = function(e, i) {
				if ((e.ownerDocument || e) !== cB) {
					cY(e)
				}
				return cE(e, i)
			}
			;
			cv.attr = function(dm, e) {
				if ((dm.ownerDocument || dm) !== cB) {
					cY(dm)
				}
				var i = cm.attrHandle[e.toLowerCase()]
				  , dn = i && cN.call(cm.attrHandle, e.toLowerCase()) ? i(dm, e, !c7) : undefined;
				return dn !== undefined ? dn : dg.attributes || !c7 ? dm.getAttribute(e) : (dn = dm.getAttributeNode(e)) && dn.specified ? dn.value : null
			}
			;
			cv.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}
			;
			cv.uniqueSort = function(dn) {
				var dp, dq = [], e = 0, dm = 0;
				cW = !dg.detectDuplicates;
				cH = !dg.sortStable && dn.slice(0);
				dn.sort(cD);
				if (cW) {
					while ((dp = dn[dm++])) {
						if (dp === dn[dm]) {
							e = dq.push(dm)
						}
					}
					while (e--) {
						dn.splice(dq[e], 1)
					}
				}
				cH = null;
				return dn
			}
			;
			cG = cv.getText = function(dq) {
				var dp, dm = "", dn = 0, e = dq.nodeType;
				if (!e) {
					while ((dp = dq[dn++])) {
						dm += cG(dp)
					}
				} else {
					if (e === 1 || e === 9 || e === 11) {
						if (typeof dq.textContent === "string") {
							return dq.textContent
						} else {
							for (dq = dq.firstChild; dq; dq = dq.nextSibling) {
								dm += cG(dq)
							}
						}
					} else {
						if (e === 3 || e === 4) {
							return dq.nodeValue
						}
					}
				}
				return dm
			}
			;
			cm = cv.selectors = {
				cacheLength: 50,
				createPseudo: ci,
				match: c1,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: true
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: true
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						e[1] = e[1].replace(cr, c4);
						e[3] = (e[3] || e[4] || e[5] || "").replace(cr, c4);
						if (e[2] === "~=") {
							e[3] = " " + e[3] + " "
						}
						return e.slice(0, 4)
					},
					CHILD: function(e) {
						e[1] = e[1].toLowerCase();
						if (e[1].slice(0, 3) === "nth") {
							if (!e[3]) {
								cv.error(e[0])
							}
							e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
							e[5] = +((e[7] + e[8]) || e[3] === "odd")
						} else {
							if (e[3]) {
								cv.error(e[0])
							}
						}
						return e
					},
					PSEUDO: function(i) {
						var e, dm = !i[6] && i[2];
						if (c1.CHILD.test(i[0])) {
							return null
						}
						if (i[3]) {
							i[2] = i[4] || i[5] || ""
						} else {
							if (dm && cR.test(dm) && (e = ch(dm, true)) && (e = dm.indexOf(")", dm.length - e) - dm.length)) {
								i[0] = i[0].slice(0, e);
								i[2] = dm.slice(0, e)
							}
						}
						return i.slice(0, 3)
					}
				},
				filter: {
					TAG: function(i) {
						var e = i.replace(cr, c4).toLowerCase();
						return i === "*" ? function() {
							return true
						}
						: function(dm) {
							return dm.nodeName && dm.nodeName.toLowerCase() === e
						}
					},
					CLASS: function(e) {
						var i = b8[e + " "];
						return i || (i = new RegExp("(^|" + co + ")" + e + "(" + co + "|$)")) && b8(e, function(dm) {
							return i.test(typeof dm.className === "string" && dm.className || typeof dm.getAttribute !== "undefined" && dm.getAttribute("class") || "")
						})
					},
					ATTR: function(dm, i, e) {
						return function(dp) {
							var dn = cv.attr(dp, dm);
							if (dn == null) {
								return i === "!="
							}
							if (!i) {
								return true
							}
							dn += "";
							return i === "=" ? dn === e : i === "!=" ? dn !== e : i === "^=" ? e && dn.indexOf(e) === 0 : i === "*=" ? e && dn.indexOf(e) > -1 : i === "$=" ? e && dn.slice(-e.length) === e : i === "~=" ? (" " + dn.replace(ct, " ") + " ").indexOf(e) > -1 : i === "|=" ? dn === e || dn.slice(0, e.length + 1) === e + "-" : false
						}
					},
					CHILD: function(i, dp, dn, dq, dm) {
						var ds = i.slice(0, 3) !== "nth"
						  , e = i.slice(-4) !== "last"
						  , dr = dp === "of-type";
						return dq === 1 && dm === 0 ? function(dt) {
							return !!dt.parentNode
						}
						: function(dz, dx, dC) {
							var dt, dF, dA, dE, dB, dw, dy = ds !== e ? "nextSibling" : "previousSibling", dD = dz.parentNode, dv = dr && dz.nodeName.toLowerCase(), du = !dC && !dr;
							if (dD) {
								if (ds) {
									while (dy) {
										dA = dz;
										while ((dA = dA[dy])) {
											if (dr ? dA.nodeName.toLowerCase() === dv : dA.nodeType === 1) {
												return false
											}
										}
										dw = dy = i === "only" && !dw && "nextSibling"
									}
									return true
								}
								dw = [e ? dD.firstChild : dD.lastChild];
								if (e && du) {
									dF = dD[c9] || (dD[c9] = {});
									dt = dF[i] || [];
									dB = dt[0] === dh && dt[1];
									dE = dt[0] === dh && dt[2];
									dA = dB && dD.childNodes[dB];
									while ((dA = ++dB && dA && dA[dy] || (dE = dB = 0) || dw.pop())) {
										if (dA.nodeType === 1 && ++dE && dA === dz) {
											dF[i] = [dh, dB, dE];
											break
										}
									}
								} else {
									if (du && (dt = (dz[c9] || (dz[c9] = {}))[i]) && dt[0] === dh) {
										dE = dt[1]
									} else {
										while ((dA = ++dB && dA && dA[dy] || (dE = dB = 0) || dw.pop())) {
											if ((dr ? dA.nodeName.toLowerCase() === dv : dA.nodeType === 1) && ++dE) {
												if (du) {
													(dA[c9] || (dA[c9] = {}))[i] = [dh, dE]
												}
												if (dA === dz) {
													break
												}
											}
										}
									}
								}
								dE -= dm;
								return dE === dq || (dE % dq === 0 && dE / dq >= 0)
							}
						}
					},
					PSEUDO: function(dn, dm) {
						var e, i = cm.pseudos[dn] || cm.setFilters[dn.toLowerCase()] || cv.error("unsupported pseudo: " + dn);
						if (i[c9]) {
							return i(dm)
						}
						if (i.length > 1) {
							e = [dn, dn, "", dm];
							return cm.setFilters.hasOwnProperty(dn.toLowerCase()) ? ci(function(dr, dt) {
								var dq, dp = i(dr, dm), ds = dp.length;
								while (ds--) {
									dq = cc(dr, dp[ds]);
									dr[dq] = !(dt[dq] = dp[ds])
								}
							}) : function(dp) {
								return i(dp, 0, e)
							}
						}
						return i
					}
				},
				pseudos: {
					not: ci(function(e) {
						var i = []
						  , dm = []
						  , dn = cV(e.replace(cq, "$1"));
						return dn[c9] ? ci(function(dq, dv, dt, dr) {
							var du, dp = dn(dq, null, dr, []), ds = dq.length;
							while (ds--) {
								if ((du = dp[ds])) {
									dq[ds] = !(dv[ds] = du)
								}
							}
						}) : function(dr, dq, dp) {
							i[0] = dr;
							dn(i, null, dp, dm);
							i[0] = null;
							return !dm.pop()
						}
					}),
					has: ci(function(e) {
						return function(i) {
							return cv(e, i).length > 0
						}
					}),
					contains: ci(function(e) {
						e = e.replace(cr, c4);
						return function(i) {
							return (i.textContent || i.innerText || cG(i)).indexOf(e) > -1
						}
					}),
					lang: ci(function(e) {
						if (!cT.test(e || "")) {
							cv.error("unsupported lang: " + e)
						}
						e = e.replace(cr, c4).toLowerCase();
						return function(dm) {
							var i;
							do {
								if ((i = c7 ? dm.lang : dm.getAttribute("xml:lang") || dm.getAttribute("lang"))) {
									i = i.toLowerCase();
									return i === e || i.indexOf(e + "-") === 0
								}
							} while ((dm = dm.parentNode) && dm.nodeType === 1);return false
						}
					}),
					target: function(e) {
						var i = dd.location && dd.location.hash;
						return i && i.slice(1) === e.id
					},
					root: function(e) {
						return e === cn
					},
					focus: function(e) {
						return e === cB.activeElement && (!cB.hasFocus || cB.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return e.disabled === false
					},
					disabled: function(e) {
						return e.disabled === true
					},
					checked: function(e) {
						var i = e.nodeName.toLowerCase();
						return (i === "input" && !!e.checked) || (i === "option" && !!e.selected)
					},
					selected: function(e) {
						if (e.parentNode) {
							e.parentNode.selectedIndex
						}
						return e.selected === true
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling) {
							if (e.nodeType < 6) {
								return false
							}
						}
						return true
					},
					parent: function(e) {
						return !cm.pseudos.empty(e)
					},
					header: function(e) {
						return ck.test(e.nodeName)
					},
					input: function(e) {
						return cb.test(e.nodeName)
					},
					button: function(i) {
						var e = i.nodeName.toLowerCase();
						return e === "input" && i.type === "button" || e === "button"
					},
					text: function(i) {
						var e;
						return i.nodeName.toLowerCase() === "input" && i.type === "text" && ((e = i.getAttribute("type")) == null || e.toLowerCase() === "text")
					},
					first: c6(function() {
						return [0]
					}),
					last: c6(function(e, i) {
						return [i - 1]
					}),
					eq: c6(function(e, dm, i) {
						return [i < 0 ? i + dm : i]
					}),
					even: c6(function(e, dn) {
						var dm = 0;
						for (; dm < dn; dm += 2) {
							e.push(dm)
						}
						return e
					}),
					odd: c6(function(e, dn) {
						var dm = 1;
						for (; dm < dn; dm += 2) {
							e.push(dm)
						}
						return e
					}),
					lt: c6(function(e, dp, dn) {
						var dm = dn < 0 ? dn + dp : dn;
						for (; --dm >= 0; ) {
							e.push(dm)
						}
						return e
					}),
					gt: c6(function(e, dp, dn) {
						var dm = dn < 0 ? dn + dp : dn;
						for (; ++dm < dp; ) {
							e.push(dm)
						}
						return e
					})
				}
			};
			cm.pseudos.nth = cm.pseudos.eq;
			for (cx in {
				radio: true,
				checkbox: true,
				file: true,
				password: true,
				image: true
			}) {
				cm.pseudos[cx] = cw(cx)
			}
			for (cx in {
				submit: true,
				reset: true
			}) {
				cm.pseudos[cx] = ca(cx)
			}
			function cU() {}
			cU.prototype = cm.filters = cm.pseudos;
			cm.setFilters = new cU();
			ch = cv.tokenize = function(dp, du) {
				var i, dq, ds, dt, dr, dm, e, dn = c8[dp + " "];
				if (dn) {
					return du ? 0 : dn.slice(0)
				}
				dr = dp;
				dm = [];
				e = cm.preFilter;
				while (dr) {
					if (!i || (dq = cu.exec(dr))) {
						if (dq) {
							dr = dr.slice(dq[0].length) || dr
						}
						dm.push((ds = []))
					}
					i = false;
					if ((dq = cA.exec(dr))) {
						i = dq.shift();
						ds.push({
							value: i,
							type: dq[0].replace(cq, " ")
						});
						dr = dr.slice(i.length)
					}
					for (dt in cm.filter) {
						if ((dq = c1[dt].exec(dr)) && (!e[dt] || (dq = e[dt](dq)))) {
							i = dq.shift();
							ds.push({
								value: i,
								type: dt,
								matches: dq
							});
							dr = dr.slice(i.length)
						}
					}
					if (!i) {
						break
					}
				}
				return du ? dr.length : dr ? cv.error(dp) : c8(dp, dm).slice(0)
			}
			;
			function cg(dp) {
				var dn = 0
				  , dm = dp.length
				  , e = "";
				for (; dn < dm; dn++) {
					e += dp[dn].value
				}
				return e
			}
			function cp(dp, dm, dn) {
				var e = dm.dir
				  , dq = dn && e === "parentNode"
				  , i = c3++;
				return dm.first ? function(dt, ds, dr) {
					while ((dt = dt[e])) {
						if (dt.nodeType === 1 || dq) {
							return dp(dt, ds, dr)
						}
					}
				}
				: function(dv, dt, ds) {
					var dw, du, dr = [dh, i];
					if (ds) {
						while ((dv = dv[e])) {
							if (dv.nodeType === 1 || dq) {
								if (dp(dv, dt, ds)) {
									return true
								}
							}
						}
					} else {
						while ((dv = dv[e])) {
							if (dv.nodeType === 1 || dq) {
								du = dv[c9] || (dv[c9] = {});
								if ((dw = du[e]) && dw[0] === dh && dw[1] === i) {
									return (dr[2] = dw[2])
								} else {
									du[e] = dr;
									if ((dr[2] = dp(dv, dt, ds))) {
										return true
									}
								}
							}
						}
					}
				}
			}
			function dj(e) {
				return e.length > 1 ? function(dq, dp, dm) {
					var dn = e.length;
					while (dn--) {
						if (!e[dn](dq, dp, dm)) {
							return false
						}
					}
					return true
				}
				: e[0]
			}
			function cy(dm, dq, dp) {
				var dn = 0
				  , e = dq.length;
				for (; dn < e; dn++) {
					cv(dm, dq[dn], dp)
				}
				return dp
			}
			function cZ(e, dm, dn, dp, ds) {
				var dq, dv = [], dr = 0, dt = e.length, du = dm != null;
				for (; dr < dt; dr++) {
					if ((dq = e[dr])) {
						if (!dn || dn(dq, dp, ds)) {
							dv.push(dq);
							if (du) {
								dm.push(dr)
							}
						}
					}
				}
				return dv
			}
			function cf(dm, i, dp, dn, dq, e) {
				if (dn && !dn[c9]) {
					dn = cf(dn)
				}
				if (dq && !dq[c9]) {
					dq = cf(dq, e)
				}
				return ci(function(dB, dy, dt, dA) {
					var dD, dz, dv, du = [], dC = [], ds = dy.length, dr = dB || cy(i || "*", dt.nodeType ? [dt] : dt, []), dw = dm && (dB || !i) ? cZ(dr, du, dm, dt, dA) : dr, dx = dp ? dq || (dB ? dm : ds || dn) ? [] : dy : dw;
					if (dp) {
						dp(dw, dx, dt, dA)
					}
					if (dn) {
						dD = cZ(dx, dC);
						dn(dD, [], dt, dA);
						dz = dD.length;
						while (dz--) {
							if ((dv = dD[dz])) {
								dx[dC[dz]] = !(dw[dC[dz]] = dv)
							}
						}
					}
					if (dB) {
						if (dq || dm) {
							if (dq) {
								dD = [];
								dz = dx.length;
								while (dz--) {
									if ((dv = dx[dz])) {
										dD.push((dw[dz] = dv))
									}
								}
								dq(null, (dx = []), dD, dA)
							}
							dz = dx.length;
							while (dz--) {
								if ((dv = dx[dz]) && (dD = dq ? cc(dB, dv) : du[dz]) > -1) {
									dB[dD] = !(dy[dD] = dv)
								}
							}
						}
					} else {
						dx = cZ(dx === dy ? dx.splice(ds, dx.length) : dx);
						if (dq) {
							dq(null, dy, dx, dA)
						} else {
							b6.apply(dy, dx)
						}
					}
				})
			}
			function da(ds) {
				var dm, dq, dn, dr = ds.length, dv = cm.relative[ds[0].type], dw = dv || cm.relative[" "], dp = dv ? 1 : 0, dt = cp(function(i) {
					return i === dm
				}, dw, true), du = cp(function(i) {
					return cc(dm, i) > -1
				}, dw, true), e = [function(dz, dy, dx) {
					var i = (!dv && (dx || dy !== dl)) || ((dm = dy).nodeType ? dt(dz, dy, dx) : du(dz, dy, dx));
					dm = null;
					return i
				}
				];
				for (; dp < dr; dp++) {
					if ((dq = cm.relative[ds[dp].type])) {
						e = [cp(dj(e), dq)]
					} else {
						dq = cm.filter[ds[dp].type].apply(null, ds[dp].matches);
						if (dq[c9]) {
							dn = ++dp;
							for (; dn < dr; dn++) {
								if (cm.relative[ds[dn].type]) {
									break
								}
							}
							return cf(dp > 1 && dj(e), dp > 1 && cg(ds.slice(0, dp - 1).concat({
								value: ds[dp - 2].type === " " ? "*" : ""
							})).replace(cq, "$1"), dq, dp < dn && da(ds.slice(dp, dn)), dn < dr && da((ds = ds.slice(dn))), dn < dr && cg(ds))
						}
						e.push(dq)
					}
				}
				return dj(e)
			}
			function cX(dn, dm) {
				var e = dm.length > 0
				  , dp = dn.length > 0
				  , i = function(dz, dt, dy, dx, dC) {
					var du, dv, dA, dE = 0, dw = "0", dq = dz && [], dF = [], dD = dl, ds = dz || dp && cm.find.TAG("*", dC), dr = (dh += dD == null ? 1 : Math.random() || 0.1), dB = ds.length;
					if (dC) {
						dl = dt !== cB && dt
					}
					for (; dw !== dB && (du = ds[dw]) != null; dw++) {
						if (dp && du) {
							dv = 0;
							while ((dA = dn[dv++])) {
								if (dA(du, dt, dy)) {
									dx.push(du);
									break
								}
							}
							if (dC) {
								dh = dr
							}
						}
						if (e) {
							if ((du = !dA && du)) {
								dE--
							}
							if (dz) {
								dq.push(du)
							}
						}
					}
					dE += dw;
					if (e && dw !== dE) {
						dv = 0;
						while ((dA = dm[dv++])) {
							dA(dq, dF, dt, dy)
						}
						if (dz) {
							if (dE > 0) {
								while (dw--) {
									if (!(dq[dw] || dF[dw])) {
										dF[dw] = dc.call(dx)
									}
								}
							}
							dF = cZ(dF)
						}
						b6.apply(dx, dF);
						if (dC && !dz && dF.length > 0 && (dE + dm.length) > 1) {
							cv.uniqueSort(dx)
						}
					}
					if (dC) {
						dh = dr;
						dl = dD
					}
					return dq
				};
				return e ? ci(i) : i
			}
			cV = cv.compile = function(e, dn) {
				var dp, dm = [], dr = [], dq = cF[e + " "];
				if (!dq) {
					if (!dn) {
						dn = ch(e)
					}
					dp = dn.length;
					while (dp--) {
						dq = da(dn[dp]);
						if (dq[c9]) {
							dm.push(dq)
						} else {
							dr.push(dq)
						}
					}
					dq = cF(e, cX(dr, dm));
					dq.selector = e
				}
				return dq
			}
			;
			df = cv.select = function(dn, e, dp, ds) {
				var dq, dv, dm, dw, dt, du = typeof dn === "function" && dn, dr = !ds && ch((dn = du.selector || dn));
				dp = dp || [];
				if (dr.length === 1) {
					dv = dr[0] = dr[0].slice(0);
					if (dv.length > 2 && (dm = dv[0]).type === "ID" && dg.getById && e.nodeType === 9 && c7 && cm.relative[dv[1].type]) {
						e = (cm.find.ID(dm.matches[0].replace(cr, c4), e) || [])[0];
						if (!e) {
							return dp
						} else {
							if (du) {
								e = e.parentNode
							}
						}
						dn = dn.slice(dv.shift().value.length)
					}
					dq = c1.needsContext.test(dn) ? 0 : dv.length;
					while (dq--) {
						dm = dv[dq];
						if (cm.relative[(dw = dm.type)]) {
							break
						}
						if ((dt = cm.find[dw])) {
							if ((ds = dt(dm.matches[0].replace(cr, c4), c0.test(dv[0].type) && cS(e.parentNode) || e))) {
								dv.splice(dq, 1);
								dn = ds.length && cg(dv);
								if (!dn) {
									b6.apply(dp, ds);
									return dp
								}
								break
							}
						}
					}
				}
				(du || cV(dn, dr))(ds, e, !c7, dp, c0.test(dn) && cS(e.parentNode) || e);
				return dp
			}
			;
			dg.sortStable = c9.split("").sort(cD).join("") === c9;
			dg.detectDuplicates = !!cW;
			cY();
			dg.sortDetached = ce(function(e) {
				return e.compareDocumentPosition(cB.createElement("div")) & 1
			});
			if (!ce(function(e) {
				e.innerHTML = "<a href='#'></a>";
				return e.firstChild.getAttribute("href") === "#"
			})) {
				di("type|href|height|width", function(i, e, dm) {
					if (!dm) {
						return i.getAttribute(e, e.toLowerCase() === "type" ? 1 : 2)
					}
				})
			}
			if (!dg.attributes || !ce(function(e) {
				e.innerHTML = "<input/>";
				e.firstChild.setAttribute("value", "");
				return e.firstChild.getAttribute("value") === ""
			})) {
				di("value", function(i, e, dm) {
					if (!dm && i.nodeName.toLowerCase() === "input") {
						return i.defaultValue
					}
				})
			}
			if (!ce(function(e) {
				return e.getAttribute("disabled") == null
			})) {
				di(b7, function(i, e, dn) {
					var dm;
					if (!dn) {
						return i[e] === true ? e.toLowerCase() : (dm = i.getAttributeNode(e)) && dm.specified ? dm.value : null
					}
				})
			}
			return cv
		}
		)(a4);
		bH.find = m;
		bH.expr = m.selectors;
		bH.expr[":"] = bH.expr.pseudos;
		bH.unique = m.uniqueSort;
		bH.text = m.getText;
		bH.isXMLDoc = m.isXML;
		bH.contains = m.contains;
		var z = bH.expr.match.needsContext;
		var a = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
		var aK = /^.[^:#\[\.,]*$/;
		function aQ(b5, e, i) {
			if (bH.isFunction(e)) {
				return bH.grep(b5, function(b7, b6) {
					return !!e.call(b7, b6, b7) !== i
				})
			}
			if (e.nodeType) {
				return bH.grep(b5, function(b6) {
					return (b6 === e) !== i
				})
			}
			if (typeof e === "string") {
				if (aK.test(e)) {
					return bH.filter(e, b5, i)
				}
				e = bH.filter(e, b5)
			}
			return bH.grep(b5, function(b6) {
				return (bH.inArray(b6, e) >= 0) !== i
			})
		}
		bH.filter = function(b6, e, b5) {
			var i = e[0];
			if (b5) {
				b6 = ":not(" + b6 + ")"
			}
			return e.length === 1 && i.nodeType === 1 ? bH.find.matchesSelector(i, b6) ? [i] : [] : bH.find.matches(b6, bH.grep(e, function(b7) {
				return b7.nodeType === 1
			}))
		}
		;
		bH.fn.extend({
			find: function(b5) {
				var b8, b7 = [], b6 = this, e = b6.length;
				if (typeof b5 !== "string") {
					return this.pushStack(bH(b5).filter(function() {
						for (b8 = 0; b8 < e; b8++) {
							if (bH.contains(b6[b8], this)) {
								return true
							}
						}
					}))
				}
				for (b8 = 0; b8 < e; b8++) {
					bH.find(b5, b6[b8], b7)
				}
				b7 = this.pushStack(e > 1 ? bH.unique(b7) : b7);
				b7.selector = this.selector ? this.selector + " " + b5 : b5;
				return b7
			},
			filter: function(e) {
				return this.pushStack(aQ(this, e || [], false))
			},
			not: function(e) {
				return this.pushStack(aQ(this, e || [], true))
			},
			is: function(e) {
				return !!aQ(this, typeof e === "string" && z.test(e) ? bH(e) : e || [], false).length
			}
		});
		var y, n = a4.document, bs = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, bU = bH.fn.init = function(e, b5) {
			var i, b6;
			if (!e) {
				return this
			}
			if (typeof e === "string") {
				if (e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3) {
					i = [null, e, null]
				} else {
					i = bs.exec(e)
				}
				if (i && (i[1] || !b5)) {
					if (i[1]) {
						b5 = b5 instanceof bH ? b5[0] : b5;
						bH.merge(this, bH.parseHTML(i[1], b5 && b5.nodeType ? b5.ownerDocument || b5 : n, true));
						if (a.test(i[1]) && bH.isPlainObject(b5)) {
							for (i in b5) {
								if (bH.isFunction(this[i])) {
									this[i](b5[i])
								} else {
									this.attr(i, b5[i])
								}
							}
						}
						return this
					} else {
						b6 = n.getElementById(i[2]);
						if (b6 && b6.parentNode) {
							if (b6.id !== i[2]) {
								return y.find(e)
							}
							this.length = 1;
							this[0] = b6
						}
						this.context = n;
						this.selector = e;
						return this
					}
				} else {
					if (!b5 || b5.jquery) {
						return (b5 || y).find(e)
					} else {
						return this.constructor(b5).find(e)
					}
				}
			} else {
				if (e.nodeType) {
					this.context = this[0] = e;
					this.length = 1;
					return this
				} else {
					if (bH.isFunction(e)) {
						return typeof y.ready !== "undefined" ? y.ready(e) : e(bH)
					}
				}
			}
			if (e.selector !== undefined) {
				this.selector = e.selector;
				this.context = e.context
			}
			return bH.makeArray(e, this)
		}
		;
		bU.prototype = bH.fn;
		y = bH(n);
		var bu = /^(?:parents|prev(?:Until|All))/
		  , by = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
		bH.extend({
			dir: function(b5, i, b7) {
				var e = []
				  , b6 = b5[i];
				while (b6 && b6.nodeType !== 9 && (b7 === undefined || b6.nodeType !== 1 || !bH(b6).is(b7))) {
					if (b6.nodeType === 1) {
						e.push(b6)
					}
					b6 = b6[i]
				}
				return e
			},
			sibling: function(b5, i) {
				var e = [];
				for (; b5; b5 = b5.nextSibling) {
					if (b5.nodeType === 1 && b5 !== i) {
						e.push(b5)
					}
				}
				return e
			}
		});
		bH.fn.extend({
			has: function(b7) {
				var b6, b5 = bH(b7, this), e = b5.length;
				return this.filter(function() {
					for (b6 = 0; b6 < e; b6++) {
						if (bH.contains(this, b5[b6])) {
							return true
						}
					}
				})
			},
			closest: function(b8, b7) {
				var b9, b6 = 0, b5 = this.length, e = [], ca = z.test(b8) || typeof b8 !== "string" ? bH(b8, b7 || this.context) : 0;
				for (; b6 < b5; b6++) {
					for (b9 = this[b6]; b9 && b9 !== b7; b9 = b9.parentNode) {
						if (b9.nodeType < 11 && (ca ? ca.index(b9) > -1 : b9.nodeType === 1 && bH.find.matchesSelector(b9, b8))) {
							e.push(b9);
							break
						}
					}
				}
				return this.pushStack(e.length > 1 ? bH.unique(e) : e)
			},
			index: function(e) {
				if (!e) {
					return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1
				}
				if (typeof e === "string") {
					return bH.inArray(this[0], bH(e))
				}
				return bH.inArray(e.jquery ? e[0] : e, this)
			},
			add: function(e, i) {
				return this.pushStack(bH.unique(bH.merge(this.get(), bH(e, i))))
			},
			addBack: function(e) {
				return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
			}
		});
		function aX(i, e) {
			do {
				i = i[e]
			} while (i && i.nodeType !== 1);return i
		}
		bH.each({
			parent: function(i) {
				var e = i.parentNode;
				return e && e.nodeType !== 11 ? e : null
			},
			parents: function(e) {
				return bH.dir(e, "parentNode")
			},
			parentsUntil: function(b5, e, b6) {
				return bH.dir(b5, "parentNode", b6)
			},
			next: function(e) {
				return aX(e, "nextSibling")
			},
			prev: function(e) {
				return aX(e, "previousSibling")
			},
			nextAll: function(e) {
				return bH.dir(e, "nextSibling")
			},
			prevAll: function(e) {
				return bH.dir(e, "previousSibling")
			},
			nextUntil: function(b5, e, b6) {
				return bH.dir(b5, "nextSibling", b6)
			},
			prevUntil: function(b5, e, b6) {
				return bH.dir(b5, "previousSibling", b6)
			},
			siblings: function(e) {
				return bH.sibling((e.parentNode || {}).firstChild, e)
			},
			children: function(e) {
				return bH.sibling(e.firstChild)
			},
			contents: function(e) {
				return bH.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : bH.merge([], e.childNodes)
			}
		}, function(e, i) {
			bH.fn[e] = function(b7, b5) {
				var b6 = bH.map(this, i, b7);
				if (e.slice(-5) !== "Until") {
					b5 = b7
				}
				if (b5 && typeof b5 === "string") {
					b6 = bH.filter(b5, b6)
				}
				if (this.length > 1) {
					if (!by[e]) {
						b6 = bH.unique(b6)
					}
					if (bu.test(e)) {
						b6 = b6.reverse()
					}
				}
				return this.pushStack(b6)
			}
		});
		var aE = (/\S+/g);
		var b1 = {};
		function ae(i) {
			var e = b1[i] = {};
			bH.each(i.match(aE) || [], function(b6, b5) {
				e[b5] = true
			});
			return e
		}
		bH.Callbacks = function(cd) {
			cd = typeof cd === "string" ? (b1[cd] || ae(cd)) : bH.extend({}, cd);
			var b7, b6, e, b8, b9, b5, ca = [], cb = !cd.once && [], i = function(ce) {
				b6 = cd.memory && ce;
				e = true;
				b9 = b5 || 0;
				b5 = 0;
				b8 = ca.length;
				b7 = true;
				for (; ca && b9 < b8; b9++) {
					if (ca[b9].apply(ce[0], ce[1]) === false && cd.stopOnFalse) {
						b6 = false;
						break
					}
				}
				b7 = false;
				if (ca) {
					if (cb) {
						if (cb.length) {
							i(cb.shift())
						}
					} else {
						if (b6) {
							ca = []
						} else {
							cc.disable()
						}
					}
				}
			}, cc = {
				add: function() {
					if (ca) {
						var cf = ca.length;
						(function ce(cg) {
							bH.each(cg, function(ci, ch) {
								var cj = bH.type(ch);
								if (cj === "function") {
									if (!cd.unique || !cc.has(ch)) {
										ca.push(ch)
									}
								} else {
									if (ch && ch.length && cj !== "string") {
										ce(ch)
									}
								}
							})
						}
						)(arguments);
						if (b7) {
							b8 = ca.length
						} else {
							if (b6) {
								b5 = cf;
								i(b6)
							}
						}
					}
					return this
				},
				remove: function() {
					if (ca) {
						bH.each(arguments, function(cg, ce) {
							var cf;
							while ((cf = bH.inArray(ce, ca, cf)) > -1) {
								ca.splice(cf, 1);
								if (b7) {
									if (cf <= b8) {
										b8--
									}
									if (cf <= b9) {
										b9--
									}
								}
							}
						})
					}
					return this
				},
				has: function(ce) {
					return ce ? bH.inArray(ce, ca) > -1 : !!(ca && ca.length)
				},
				empty: function() {
					ca = [];
					b8 = 0;
					return this
				},
				disable: function() {
					ca = cb = b6 = undefined;
					return this
				},
				disabled: function() {
					return !ca
				},
				lock: function() {
					cb = undefined;
					if (!b6) {
						cc.disable()
					}
					return this
				},
				locked: function() {
					return !cb
				},
				fireWith: function(cf, ce) {
					if (ca && (!e || cb)) {
						ce = ce || [];
						ce = [cf, ce.slice ? ce.slice() : ce];
						if (b7) {
							cb.push(ce)
						} else {
							i(ce)
						}
					}
					return this
				},
				fire: function() {
					cc.fireWith(this, arguments);
					return this
				},
				fired: function() {
					return !!e
				}
			};
			return cc
		}
		;
		bH.extend({
			Deferred: function(b5) {
				var i = [["resolve", "done", bH.Callbacks("once memory"), "resolved"], ["reject", "fail", bH.Callbacks("once memory"), "rejected"], ["notify", "progress", bH.Callbacks("memory")]]
				  , b6 = "pending"
				  , b7 = {
					state: function() {
						return b6
					},
					always: function() {
						e.done(arguments).fail(arguments);
						return this
					},
					then: function() {
						var b8 = arguments;
						return bH.Deferred(function(b9) {
							bH.each(i, function(cb, ca) {
								var cc = bH.isFunction(b8[cb]) && b8[cb];
								e[ca[1]](function() {
									var cd = cc && cc.apply(this, arguments);
									if (cd && bH.isFunction(cd.promise)) {
										cd.promise().done(b9.resolve).fail(b9.reject).progress(b9.notify)
									} else {
										b9[ca[0] + "With"](this === b7 ? b9.promise() : this, cc ? [cd] : arguments)
									}
								})
							});
							b8 = null
						}).promise()
					},
					promise: function(b8) {
						return b8 != null ? bH.extend(b8, b7) : b7
					}
				}
				  , e = {};
				b7.pipe = b7.then;
				bH.each(i, function(b9, b8) {
					var cb = b8[2]
					  , ca = b8[3];
					b7[b8[1]] = cb.add;
					if (ca) {
						cb.add(function() {
							b6 = ca
						}, i[b9 ^ 1][2].disable, i[2][2].lock)
					}
					e[b8[0]] = function() {
						e[b8[0] + "With"](this === e ? b7 : this, arguments);
						return this
					}
					;
					e[b8[0] + "With"] = cb.fireWith
				});
				b7.promise(e);
				if (b5) {
					b5.call(e, e)
				}
				return e
			},
			when: function(b8) {
				var b6 = 0, ca = O.call(arguments), e = ca.length, b5 = e !== 1 || (b8 && bH.isFunction(b8.promise)) ? e : 0, cd = b5 === 1 ? b8 : bH.Deferred(), b7 = function(cf, cg, ce) {
					return function(i) {
						cg[cf] = this;
						ce[cf] = arguments.length > 1 ? O.call(arguments) : i;
						if (ce === cc) {
							cd.notifyWith(cg, ce)
						} else {
							if (!(--b5)) {
								cd.resolveWith(cg, ce)
							}
						}
					}
				}, cc, b9, cb;
				if (e > 1) {
					cc = new Array(e);
					b9 = new Array(e);
					cb = new Array(e);
					for (; b6 < e; b6++) {
						if (ca[b6] && bH.isFunction(ca[b6].promise)) {
							ca[b6].promise().done(b7(b6, cb, ca)).fail(cd.reject).progress(b7(b6, b9, cc))
						} else {
							--b5
						}
					}
				}
				if (!b5) {
					cd.resolveWith(cb, ca)
				}
				return cd.promise()
			}
		});
		var aj;
		bH.fn.ready = function(e) {
			bH.ready.promise().done(e);
			return this
		}
		;
		bH.extend({
			isReady: false,
			readyWait: 1,
			holdReady: function(e) {
				if (e) {
					bH.readyWait++
				} else {
					bH.ready(true)
				}
			},
			ready: function(e) {
				if (e === true ? --bH.readyWait : bH.isReady) {
					return
				}
				if (!n.body) {
					return setTimeout(bH.ready)
				}
				bH.isReady = true;
				if (e !== true && --bH.readyWait > 0) {
					return
				}
				aj.resolveWith(n, [bH]);
				if (bH.fn.triggerHandler) {
					bH(n).triggerHandler("ready");
					bH(n).off("ready")
				}
			}
		});
		function bl() {
			if (n.addEventListener) {
				n.removeEventListener("DOMContentLoaded", bY, false);
				a4.removeEventListener("load", bY, false)
			} else {
				n.detachEvent("onreadystatechange", bY);
				a4.detachEvent("onload", bY)
			}
		}
		function bY() {
			if (n.addEventListener || event.type === "load" || n.readyState === "complete") {
				bl();
				bH.ready()
			}
		}
		bH.ready.promise = function(b7) {
			if (!aj) {
				aj = bH.Deferred();
				if (n.readyState === "complete") {
					setTimeout(bH.ready)
				} else {
					if (n.addEventListener) {
						n.addEventListener("DOMContentLoaded", bY, false);
						a4.addEventListener("load", bY, false)
					} else {
						n.attachEvent("onreadystatechange", bY);
						a4.attachEvent("onload", bY);
						var b6 = false;
						try {
							b6 = a4.frameElement == null && n.documentElement
						} catch (b5) {}
						if (b6 && b6.doScroll) {
							(function i() {
								if (!bH.isReady) {
									try {
										b6.doScroll("left")
									} catch (b8) {
										return setTimeout(i, 50)
									}
									bl();
									bH.ready()
								}
							}
							)()
						}
					}
				}
			}
			return aj.promise(b7)
		}
		;
		var aB = typeof undefined;
		var bg;
		for (bg in bH(C)) {
			break
		}
		C.ownLast = bg !== "0";
		C.inlineBlockNeedsLayout = false;
		bH(function() {
			var b5, b6, e, i;
			e = n.getElementsByTagName("body")[0];
			if (!e || !e.style) {
				return
			}
			b6 = n.createElement("div");
			i = n.createElement("div");
			i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			e.appendChild(i).appendChild(b6);
			if (typeof b6.style.zoom !== aB) {
				b6.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
				C.inlineBlockNeedsLayout = b5 = b6.offsetWidth === 3;
				if (b5) {
					e.style.zoom = 1
				}
			}
			e.removeChild(i)
		});
		(function() {
			var b5 = n.createElement("div");
			if (C.deleteExpando == null) {
				C.deleteExpando = true;
				try {
					delete b5.test
				} catch (i) {
					C.deleteExpando = false
				}
			}
			b5 = null
		}
		)();
		bH.acceptData = function(b5) {
			var i = bH.noData[(b5.nodeName + " ").toLowerCase()]
			  , e = +b5.nodeType || 1;
			return e !== 1 && e !== 9 ? false : !i || i !== true && b5.getAttribute("classid") === i
		}
		;
		var bx = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
		  , aP = /([A-Z])/g;
		function bz(b6, b5, b7) {
			if (b7 === undefined && b6.nodeType === 1) {
				var i = "data-" + b5.replace(aP, "-$1").toLowerCase();
				b7 = b6.getAttribute(i);
				if (typeof b7 === "string") {
					try {
						b7 = b7 === "true" ? true : b7 === "false" ? false : b7 === "null" ? null : +b7 + "" === b7 ? +b7 : bx.test(b7) ? bH.parseJSON(b7) : b7
					} catch (b8) {}
					bH.data(b6, b5, b7)
				} else {
					b7 = undefined
				}
			}
			return b7
		}
		function P(i) {
			var e;
			for (e in i) {
				if (e === "data" && bH.isEmptyObject(i[e])) {
					continue
				}
				if (e !== "toJSON") {
					return false
				}
			}
			return true
		}
		function bb(b6, i, b8, b7) {
			if (!bH.acceptData(b6)) {
				return
			}
			var ca, b9, cb = bH.expando, cc = b6.nodeType, e = cc ? bH.cache : b6, b5 = cc ? b6[cb] : b6[cb] && cb;
			if ((!b5 || !e[b5] || (!b7 && !e[b5].data)) && b8 === undefined && typeof i === "string") {
				return
			}
			if (!b5) {
				if (cc) {
					b5 = b6[cb] = aO.pop() || bH.guid++
				} else {
					b5 = cb
				}
			}
			if (!e[b5]) {
				e[b5] = cc ? {} : {
					toJSON: bH.noop
				}
			}
			if (typeof i === "object" || typeof i === "function") {
				if (b7) {
					e[b5] = bH.extend(e[b5], i)
				} else {
					e[b5].data = bH.extend(e[b5].data, i)
				}
			}
			b9 = e[b5];
			if (!b7) {
				if (!b9.data) {
					b9.data = {}
				}
				b9 = b9.data
			}
			if (b8 !== undefined) {
				b9[bH.camelCase(i)] = b8
			}
			if (typeof i === "string") {
				ca = b9[i];
				if (ca == null) {
					ca = b9[bH.camelCase(i)]
				}
			} else {
				ca = b9
			}
			return ca
		}
		function aa(b8, b6, e) {
			if (!bH.acceptData(b8)) {
				return
			}
			var ca, b7, b9 = b8.nodeType, b5 = b9 ? bH.cache : b8, cb = b9 ? b8[bH.expando] : bH.expando;
			if (!b5[cb]) {
				return
			}
			if (b6) {
				ca = e ? b5[cb] : b5[cb].data;
				if (ca) {
					if (!bH.isArray(b6)) {
						if (b6 in ca) {
							b6 = [b6]
						} else {
							b6 = bH.camelCase(b6);
							if (b6 in ca) {
								b6 = [b6]
							} else {
								b6 = b6.split(" ")
							}
						}
					} else {
						b6 = b6.concat(bH.map(b6, bH.camelCase))
					}
					b7 = b6.length;
					while (b7--) {
						delete ca[b6[b7]]
					}
					if (e ? !P(ca) : !bH.isEmptyObject(ca)) {
						return
					}
				}
			}
			if (!e) {
				delete b5[cb].data;
				if (!P(b5[cb])) {
					return
				}
			}
			if (b9) {
				bH.cleanData([b8], true)
			} else {
				if (C.deleteExpando || b5 != b5.window) {
					delete b5[cb]
				} else {
					b5[cb] = null
				}
			}
		}
		bH.extend({
			cache: {},
			noData: {
				"applet ": true,
				"embed ": true,
				"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			},
			hasData: function(e) {
				e = e.nodeType ? bH.cache[e[bH.expando]] : e[bH.expando];
				return !!e && !P(e)
			},
			data: function(i, e, b5) {
				return bb(i, e, b5)
			},
			removeData: function(i, e) {
				return aa(i, e)
			},
			_data: function(i, e, b5) {
				return bb(i, e, b5, true)
			},
			_removeData: function(i, e) {
				return aa(i, e, true)
			}
		});
		bH.fn.extend({
			data: function(b7, ca) {
				var b6, b5, b9, b8 = this[0], e = b8 && b8.attributes;
				if (b7 === undefined) {
					if (this.length) {
						b9 = bH.data(b8);
						if (b8.nodeType === 1 && !bH._data(b8, "parsedAttrs")) {
							b6 = e.length;
							while (b6--) {
								if (e[b6]) {
									b5 = e[b6].name;
									if (b5.indexOf("data-") === 0) {
										b5 = bH.camelCase(b5.slice(5));
										bz(b8, b5, b9[b5])
									}
								}
							}
							bH._data(b8, "parsedAttrs", true)
						}
					}
					return b9
				}
				if (typeof b7 === "object") {
					return this.each(function() {
						bH.data(this, b7)
					})
				}
				return arguments.length > 1 ? this.each(function() {
					bH.data(this, b7, ca)
				}) : b8 ? bz(b8, b7, bH.data(b8, b7)) : undefined
			},
			removeData: function(e) {
				return this.each(function() {
					bH.removeData(this, e)
				})
			}
		});
		bH.extend({
			queue: function(b5, i, b6) {
				var e;
				if (b5) {
					i = (i || "fx") + "queue";
					e = bH._data(b5, i);
					if (b6) {
						if (!e || bH.isArray(b6)) {
							e = bH._data(b5, i, bH.makeArray(b6))
						} else {
							e.push(b6)
						}
					}
					return e || []
				}
			},
			dequeue: function(b8, b7) {
				b7 = b7 || "fx";
				var i = bH.queue(b8, b7)
				  , b9 = i.length
				  , b6 = i.shift()
				  , e = bH._queueHooks(b8, b7)
				  , b5 = function() {
					bH.dequeue(b8, b7)
				};
				if (b6 === "inprogress") {
					b6 = i.shift();
					b9--
				}
				if (b6) {
					if (b7 === "fx") {
						i.unshift("inprogress")
					}
					delete e.stop;
					b6.call(b8, b5, e)
				}
				if (!b9 && e) {
					e.empty.fire()
				}
			},
			_queueHooks: function(b5, i) {
				var e = i + "queueHooks";
				return bH._data(b5, e) || bH._data(b5, e, {
					empty: bH.Callbacks("once memory").add(function() {
						bH._removeData(b5, i + "queue");
						bH._removeData(b5, e)
					})
				})
			}
		});
		bH.fn.extend({
			queue: function(e, i) {
				var b5 = 2;
				if (typeof e !== "string") {
					i = e;
					e = "fx";
					b5--
				}
				if (arguments.length < b5) {
					return bH.queue(this[0], e)
				}
				return i === undefined ? this : this.each(function() {
					var b6 = bH.queue(this, e, i);
					bH._queueHooks(this, e);
					if (e === "fx" && b6[0] !== "inprogress") {
						bH.dequeue(this, e)
					}
				})
			},
			dequeue: function(e) {
				return this.each(function() {
					bH.dequeue(this, e)
				})
			},
			clearQueue: function(e) {
				return this.queue(e || "fx", [])
			},
			promise: function(b6, ca) {
				var b5, b7 = 1, cb = bH.Deferred(), b9 = this, e = this.length, b8 = function() {
					if (!(--b7)) {
						cb.resolveWith(b9, [b9])
					}
				};
				if (typeof b6 !== "string") {
					ca = b6;
					b6 = undefined
				}
				b6 = b6 || "fx";
				while (e--) {
					b5 = bH._data(b9[e], b6 + "queueHooks");
					if (b5 && b5.empty) {
						b7++;
						b5.empty.add(b8)
					}
				}
				b8();
				return cb.promise(ca)
			}
		});
		var aD = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
		var bS = ["Top", "Right", "Bottom", "Left"];
		var R = function(i, e) {
			i = e || i;
			return bH.css(i, "display") === "none" || !bH.contains(i.ownerDocument, i)
		};
		var aA = bH.access = function(e, b9, cb, ca, b7, cd, cc) {
			var b6 = 0
			  , b5 = e.length
			  , b8 = cb == null;
			if (bH.type(cb) === "object") {
				b7 = true;
				for (b6 in cb) {
					bH.access(e, b9, b6, cb[b6], true, cd, cc)
				}
			} else {
				if (ca !== undefined) {
					b7 = true;
					if (!bH.isFunction(ca)) {
						cc = true
					}
					if (b8) {
						if (cc) {
							b9.call(e, ca);
							b9 = null
						} else {
							b8 = b9;
							b9 = function(ce, i, cf) {
								return b8.call(bH(ce), cf)
							}
						}
					}
					if (b9) {
						for (; b6 < b5; b6++) {
							b9(e[b6], cb, cc ? ca : ca.call(e[b6], b6, b9(e[b6], cb)))
						}
					}
				}
			}
			return b7 ? e : b8 ? b9.call(e) : b5 ? b9(e[0], cb) : cd
		}
		;
		var aL = (/^(?:checkbox|radio)$/i);
		(function() {
			var i = n.createElement("input")
			  , b7 = n.createElement("div")
			  , b5 = n.createDocumentFragment();
			b7.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
			C.leadingWhitespace = b7.firstChild.nodeType === 3;
			C.tbody = !b7.getElementsByTagName("tbody").length;
			C.htmlSerialize = !!b7.getElementsByTagName("link").length;
			C.html5Clone = n.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
			i.type = "checkbox";
			i.checked = true;
			b5.appendChild(i);
			C.appendChecked = i.checked;
			b7.innerHTML = "<textarea>x</textarea>";
			C.noCloneChecked = !!b7.cloneNode(true).lastChild.defaultValue;
			b5.appendChild(b7);
			b7.innerHTML = "<input type='radio' checked='checked' name='t'/>";
			C.checkClone = b7.cloneNode(true).cloneNode(true).lastChild.checked;
			C.noCloneEvent = true;
			if (b7.attachEvent) {
				b7.attachEvent("onclick", function() {
					C.noCloneEvent = false
				});
				b7.cloneNode(true).click()
			}
			if (C.deleteExpando == null) {
				C.deleteExpando = true;
				try {
					delete b7.test
				} catch (b6) {
					C.deleteExpando = false
				}
			}
		}
		)();
		(function() {
			var b5, e, b6 = n.createElement("div");
			for (b5 in {
				submit: true,
				change: true,
				focusin: true
			}) {
				e = "on" + b5;
				if (!(C[b5 + "Bubbles"] = e in a4)) {
					b6.setAttribute(e, "t");
					C[b5 + "Bubbles"] = b6.attributes[e].expando === false
				}
			}
			b6 = null
		}
		)();
		var bF = /^(?:input|select|textarea)$/i
		  , a5 = /^key/
		  , bL = /^(?:mouse|pointer|contextmenu)|click/
		  , bB = /^(?:focusinfocus|focusoutblur)$/
		  , bw = /^([^.]*)(?:\.(.+)|)$/;
		function T() {
			return true
		}
		function Y() {
			return false
		}
		function al() {
			try {
				return n.activeElement
			} catch (e) {}
		}
		bH.event = {
			global: {},
			add: function(b7, cc, ch, b9, b8) {
				var ca, ci, cj, b5, ce, cb, cg, b6, cf, e, i, cd = bH._data(b7);
				if (!cd) {
					return
				}
				if (ch.handler) {
					b5 = ch;
					ch = b5.handler;
					b8 = b5.selector
				}
				if (!ch.guid) {
					ch.guid = bH.guid++
				}
				if (!(ci = cd.events)) {
					ci = cd.events = {}
				}
				if (!(cb = cd.handle)) {
					cb = cd.handle = function(ck) {
						return typeof bH !== aB && (!ck || bH.event.triggered !== ck.type) ? bH.event.dispatch.apply(cb.elem, arguments) : undefined
					}
					;
					cb.elem = b7
				}
				cc = (cc || "").match(aE) || [""];
				cj = cc.length;
				while (cj--) {
					ca = bw.exec(cc[cj]) || [];
					cf = i = ca[1];
					e = (ca[2] || "").split(".").sort();
					if (!cf) {
						continue
					}
					ce = bH.event.special[cf] || {};
					cf = (b8 ? ce.delegateType : ce.bindType) || cf;
					ce = bH.event.special[cf] || {};
					cg = bH.extend({
						type: cf,
						origType: i,
						data: b9,
						handler: ch,
						guid: ch.guid,
						selector: b8,
						needsContext: b8 && bH.expr.match.needsContext.test(b8),
						namespace: e.join(".")
					}, b5);
					if (!(b6 = ci[cf])) {
						b6 = ci[cf] = [];
						b6.delegateCount = 0;
						if (!ce.setup || ce.setup.call(b7, b9, e, cb) === false) {
							if (b7.addEventListener) {
								b7.addEventListener(cf, cb, false)
							} else {
								if (b7.attachEvent) {
									b7.attachEvent("on" + cf, cb)
								}
							}
						}
					}
					if (ce.add) {
						ce.add.call(b7, cg);
						if (!cg.handler.guid) {
							cg.handler.guid = ch.guid
						}
					}
					if (b8) {
						b6.splice(b6.delegateCount++, 0, cg)
					} else {
						b6.push(cg)
					}
					bH.event.global[cf] = true
				}
				b7 = null
			},
			remove: function(b6, cc, cj, b7, cb) {
				var b9, cg, ca, b8, ci, ch, ce, b5, cf, e, i, cd = bH.hasData(b6) && bH._data(b6);
				if (!cd || !(ch = cd.events)) {
					return
				}
				cc = (cc || "").match(aE) || [""];
				ci = cc.length;
				while (ci--) {
					ca = bw.exec(cc[ci]) || [];
					cf = i = ca[1];
					e = (ca[2] || "").split(".").sort();
					if (!cf) {
						for (cf in ch) {
							bH.event.remove(b6, cf + cc[ci], cj, b7, true)
						}
						continue
					}
					ce = bH.event.special[cf] || {};
					cf = (b7 ? ce.delegateType : ce.bindType) || cf;
					b5 = ch[cf] || [];
					ca = ca[2] && new RegExp("(^|\\.)" + e.join("\\.(?:.*\\.|)") + "(\\.|$)");
					b8 = b9 = b5.length;
					while (b9--) {
						cg = b5[b9];
						if ((cb || i === cg.origType) && (!cj || cj.guid === cg.guid) && (!ca || ca.test(cg.namespace)) && (!b7 || b7 === cg.selector || b7 === "**" && cg.selector)) {
							b5.splice(b9, 1);
							if (cg.selector) {
								b5.delegateCount--
							}
							if (ce.remove) {
								ce.remove.call(b6, cg)
							}
						}
					}
					if (b8 && !b5.length) {
						if (!ce.teardown || ce.teardown.call(b6, e, cd.handle) === false) {
							bH.removeEvent(b6, cf, cd.handle)
						}
						delete ch[cf]
					}
				}
				if (bH.isEmptyObject(ch)) {
					delete cd.handle;
					bH._removeData(b6, "events")
				}
			},
			trigger: function(b5, cc, b8, cj) {
				var cd, b7, ch, ci, cf, cb, ca, b9 = [b8 || n], cg = J.call(b5, "type") ? b5.type : b5, b6 = J.call(b5, "namespace") ? b5.namespace.split(".") : [];
				ch = cb = b8 = b8 || n;
				if (b8.nodeType === 3 || b8.nodeType === 8) {
					return
				}
				if (bB.test(cg + bH.event.triggered)) {
					return
				}
				if (cg.indexOf(".") >= 0) {
					b6 = cg.split(".");
					cg = b6.shift();
					b6.sort()
				}
				b7 = cg.indexOf(":") < 0 && "on" + cg;
				b5 = b5[bH.expando] ? b5 : new bH.Event(cg,typeof b5 === "object" && b5);
				b5.isTrigger = cj ? 2 : 3;
				b5.namespace = b6.join(".");
				b5.namespace_re = b5.namespace ? new RegExp("(^|\\.)" + b6.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
				b5.result = undefined;
				if (!b5.target) {
					b5.target = b8
				}
				cc = cc == null ? [b5] : bH.makeArray(cc, [b5]);
				cf = bH.event.special[cg] || {};
				if (!cj && cf.trigger && cf.trigger.apply(b8, cc) === false) {
					return
				}
				if (!cj && !cf.noBubble && !bH.isWindow(b8)) {
					ci = cf.delegateType || cg;
					if (!bB.test(ci + cg)) {
						ch = ch.parentNode
					}
					for (; ch; ch = ch.parentNode) {
						b9.push(ch);
						cb = ch
					}
					if (cb === (b8.ownerDocument || n)) {
						b9.push(cb.defaultView || cb.parentWindow || a4)
					}
				}
				ca = 0;
				while ((ch = b9[ca++]) && !b5.isPropagationStopped()) {
					b5.type = ca > 1 ? ci : cf.bindType || cg;
					cd = (bH._data(ch, "events") || {})[b5.type] && bH._data(ch, "handle");
					if (cd) {
						cd.apply(ch, cc)
					}
					cd = b7 && ch[b7];
					if (cd && cd.apply && bH.acceptData(ch)) {
						b5.result = cd.apply(ch, cc);
						if (b5.result === false) {
							b5.preventDefault()
						}
					}
				}
				b5.type = cg;
				if (!cj && !b5.isDefaultPrevented()) {
					if ((!cf._default || cf._default.apply(b9.pop(), cc) === false) && bH.acceptData(b8)) {
						if (b7 && b8[cg] && !bH.isWindow(b8)) {
							cb = b8[b7];
							if (cb) {
								b8[b7] = null
							}
							bH.event.triggered = cg;
							try {
								b8[cg]()
							} catch (ce) {}
							bH.event.triggered = undefined;
							if (cb) {
								b8[b7] = cb
							}
						}
					}
				}
				return b5.result
			},
			dispatch: function(e) {
				e = bH.event.fix(e);
				var b8, b9, cd, b5, b7, cc = [], cb = O.call(arguments), b6 = (bH._data(this, "events") || {})[e.type] || [], ca = bH.event.special[e.type] || {};
				cb[0] = e;
				e.delegateTarget = this;
				if (ca.preDispatch && ca.preDispatch.call(this, e) === false) {
					return
				}
				cc = bH.event.handlers.call(this, e, b6);
				b8 = 0;
				while ((b5 = cc[b8++]) && !e.isPropagationStopped()) {
					e.currentTarget = b5.elem;
					b7 = 0;
					while ((cd = b5.handlers[b7++]) && !e.isImmediatePropagationStopped()) {
						if (!e.namespace_re || e.namespace_re.test(cd.namespace)) {
							e.handleObj = cd;
							e.data = cd.data;
							b9 = ((bH.event.special[cd.origType] || {}).handle || cd.handler).apply(b5.elem, cb);
							if (b9 !== undefined) {
								if ((e.result = b9) === false) {
									e.preventDefault();
									e.stopPropagation()
								}
							}
						}
					}
				}
				if (ca.postDispatch) {
					ca.postDispatch.call(this, e)
				}
				return e.result
			},
			handlers: function(e, b6) {
				var b5, cb, b9, b8, ca = [], b7 = b6.delegateCount, cc = e.target;
				if (b7 && cc.nodeType && (!e.button || e.type !== "click")) {
					for (; cc != this; cc = cc.parentNode || this) {
						if (cc.nodeType === 1 && (cc.disabled !== true || e.type !== "click")) {
							b9 = [];
							for (b8 = 0; b8 < b7; b8++) {
								cb = b6[b8];
								b5 = cb.selector + " ";
								if (b9[b5] === undefined) {
									b9[b5] = cb.needsContext ? bH(b5, this).index(cc) >= 0 : bH.find(b5, this, null, [cc]).length
								}
								if (b9[b5]) {
									b9.push(cb)
								}
							}
							if (b9.length) {
								ca.push({
									elem: cc,
									handlers: b9
								})
							}
						}
					}
				}
				if (b7 < b6.length) {
					ca.push({
						elem: this,
						handlers: b6.slice(b7)
					})
				}
				return ca
			},
			fix: function(b7) {
				if (b7[bH.expando]) {
					return b7
				}
				var b5, ca, b9, b6 = b7.type, e = b7, b8 = this.fixHooks[b6];
				if (!b8) {
					this.fixHooks[b6] = b8 = bL.test(b6) ? this.mouseHooks : a5.test(b6) ? this.keyHooks : {}
				}
				b9 = b8.props ? this.props.concat(b8.props) : this.props;
				b7 = new bH.Event(e);
				b5 = b9.length;
				while (b5--) {
					ca = b9[b5];
					b7[ca] = e[ca]
				}
				if (!b7.target) {
					b7.target = e.srcElement || n
				}
				if (b7.target.nodeType === 3) {
					b7.target = b7.target.parentNode
				}
				b7.metaKey = !!b7.metaKey;
				return b8.filter ? b8.filter(b7, e) : b7
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function(i, e) {
					if (i.which == null) {
						i.which = e.charCode != null ? e.charCode : e.keyCode
					}
					return i
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function(b6, b5) {
					var e, b7, b8, i = b5.button, b9 = b5.fromElement;
					if (b6.pageX == null && b5.clientX != null) {
						b7 = b6.target.ownerDocument || n;
						b8 = b7.documentElement;
						e = b7.body;
						b6.pageX = b5.clientX + (b8 && b8.scrollLeft || e && e.scrollLeft || 0) - (b8 && b8.clientLeft || e && e.clientLeft || 0);
						b6.pageY = b5.clientY + (b8 && b8.scrollTop || e && e.scrollTop || 0) - (b8 && b8.clientTop || e && e.clientTop || 0)
					}
					if (!b6.relatedTarget && b9) {
						b6.relatedTarget = b9 === b6.target ? b5.toElement : b9
					}
					if (!b6.which && i !== undefined) {
						b6.which = (i & 1 ? 1 : (i & 2 ? 3 : (i & 4 ? 2 : 0)))
					}
					return b6
				}
			},
			special: {
				load: {
					noBubble: true
				},
				focus: {
					trigger: function() {
						if (this !== al() && this.focus) {
							try {
								this.focus();
								return false
							} catch (i) {}
						}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function() {
						if (this === al() && this.blur) {
							this.blur();
							return false
						}
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function() {
						if (bH.nodeName(this, "input") && this.type === "checkbox" && this.click) {
							this.click();
							return false
						}
					},
					_default: function(e) {
						return bH.nodeName(e.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function(e) {
						if (e.result !== undefined && e.originalEvent) {
							e.originalEvent.returnValue = e.result
						}
					}
				}
			},
			simulate: function(b5, b7, b6, i) {
				var b8 = bH.extend(new bH.Event(), b6, {
					type: b5,
					isSimulated: true,
					originalEvent: {}
				});
				if (i) {
					bH.event.trigger(b8, null, b7)
				} else {
					bH.event.dispatch.call(b7, b8)
				}
				if (b8.isDefaultPrevented()) {
					b6.preventDefault()
				}
			}
		};
		bH.removeEvent = n.removeEventListener ? function(i, e, b5) {
			if (i.removeEventListener) {
				i.removeEventListener(e, b5, false)
			}
		}
		: function(b5, i, b6) {
			var e = "on" + i;
			if (b5.detachEvent) {
				if (typeof b5[e] === aB) {
					b5[e] = null
				}
				b5.detachEvent(e, b6)
			}
		}
		;
		bH.Event = function(i, e) {
			if (!(this instanceof bH.Event)) {
				return new bH.Event(i,e)
			}
			if (i && i.type) {
				this.originalEvent = i;
				this.type = i.type;
				this.isDefaultPrevented = i.defaultPrevented || i.defaultPrevented === undefined && i.returnValue === false ? T : Y
			} else {
				this.type = i
			}
			if (e) {
				bH.extend(this, e)
			}
			this.timeStamp = i && i.timeStamp || bH.now();
			this[bH.expando] = true
		}
		;
		bH.Event.prototype = {
			isDefaultPrevented: Y,
			isPropagationStopped: Y,
			isImmediatePropagationStopped: Y,
			preventDefault: function() {
				var i = this.originalEvent;
				this.isDefaultPrevented = T;
				if (!i) {
					return
				}
				if (i.preventDefault) {
					i.preventDefault()
				} else {
					i.returnValue = false
				}
			},
			stopPropagation: function() {
				var i = this.originalEvent;
				this.isPropagationStopped = T;
				if (!i) {
					return
				}
				if (i.stopPropagation) {
					i.stopPropagation()
				}
				i.cancelBubble = true
			},
			stopImmediatePropagation: function() {
				var i = this.originalEvent;
				this.isImmediatePropagationStopped = T;
				if (i && i.stopImmediatePropagation) {
					i.stopImmediatePropagation()
				}
				this.stopPropagation()
			}
		};
		bH.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function(i, e) {
			bH.event.special[i] = {
				delegateType: e,
				bindType: e,
				handle: function(b7) {
					var b5, b9 = this, b8 = b7.relatedTarget, b6 = b7.handleObj;
					if (!b8 || (b8 !== b9 && !bH.contains(b9, b8))) {
						b7.type = b6.origType;
						b5 = b6.handler.apply(this, arguments);
						b7.type = e
					}
					return b5
				}
			}
		});
		if (!C.submitBubbles) {
			bH.event.special.submit = {
				setup: function() {
					if (bH.nodeName(this, "form")) {
						return false
					}
					bH.event.add(this, "click._submit keypress._submit", function(b6) {
						var b5 = b6.target
						  , i = bH.nodeName(b5, "input") || bH.nodeName(b5, "button") ? b5.form : undefined;
						if (i && !bH._data(i, "submitBubbles")) {
							bH.event.add(i, "submit._submit", function(e) {
								e._submit_bubble = true
							});
							bH._data(i, "submitBubbles", true)
						}
					})
				},
				postDispatch: function(e) {
					if (e._submit_bubble) {
						delete e._submit_bubble;
						if (this.parentNode && !e.isTrigger) {
							bH.event.simulate("submit", this.parentNode, e, true)
						}
					}
				},
				teardown: function() {
					if (bH.nodeName(this, "form")) {
						return false
					}
					bH.event.remove(this, "._submit")
				}
			}
		}
		if (!C.changeBubbles) {
			bH.event.special.change = {
				setup: function() {
					if (bF.test(this.nodeName)) {
						if (this.type === "checkbox" || this.type === "radio") {
							bH.event.add(this, "propertychange._change", function(e) {
								if (e.originalEvent.propertyName === "checked") {
									this._just_changed = true
								}
							});
							bH.event.add(this, "click._change", function(e) {
								if (this._just_changed && !e.isTrigger) {
									this._just_changed = false
								}
								bH.event.simulate("change", this, e, true)
							})
						}
						return false
					}
					bH.event.add(this, "beforeactivate._change", function(b5) {
						var i = b5.target;
						if (bF.test(i.nodeName) && !bH._data(i, "changeBubbles")) {
							bH.event.add(i, "change._change", function(e) {
								if (this.parentNode && !e.isSimulated && !e.isTrigger) {
									bH.event.simulate("change", this.parentNode, e, true)
								}
							});
							bH._data(i, "changeBubbles", true)
						}
					})
				},
				handle: function(i) {
					var e = i.target;
					if (this !== e || i.isSimulated || i.isTrigger || (e.type !== "radio" && e.type !== "checkbox")) {
						return i.handleObj.handler.apply(this, arguments)
					}
				},
				teardown: function() {
					bH.event.remove(this, "._change");
					return !bF.test(this.nodeName)
				}
			}
		}
		if (!C.focusinBubbles) {
			bH.each({
				focus: "focusin",
				blur: "focusout"
			}, function(b5, e) {
				var i = function(b6) {
					bH.event.simulate(e, b6.target, bH.event.fix(b6), true)
				};
				bH.event.special[e] = {
					setup: function() {
						var b7 = this.ownerDocument || this
						  , b6 = bH._data(b7, e);
						if (!b6) {
							b7.addEventListener(b5, i, true)
						}
						bH._data(b7, e, (b6 || 0) + 1)
					},
					teardown: function() {
						var b7 = this.ownerDocument || this
						  , b6 = bH._data(b7, e) - 1;
						if (!b6) {
							b7.removeEventListener(b5, i, true);
							bH._removeData(b7, e)
						} else {
							bH._data(b7, e, b6)
						}
					}
				}
			})
		}
		bH.fn.extend({
			on: function(b5, e, b8, b7, i) {
				var b6, b9;
				if (typeof b5 === "object") {
					if (typeof e !== "string") {
						b8 = b8 || e;
						e = undefined
					}
					for (b6 in b5) {
						this.on(b6, e, b8, b5[b6], i)
					}
					return this
				}
				if (b8 == null && b7 == null) {
					b7 = e;
					b8 = e = undefined
				} else {
					if (b7 == null) {
						if (typeof e === "string") {
							b7 = b8;
							b8 = undefined
						} else {
							b7 = b8;
							b8 = e;
							e = undefined
						}
					}
				}
				if (b7 === false) {
					b7 = Y
				} else {
					if (!b7) {
						return this
					}
				}
				if (i === 1) {
					b9 = b7;
					b7 = function(ca) {
						bH().off(ca);
						return b9.apply(this, arguments)
					}
					;
					b7.guid = b9.guid || (b9.guid = bH.guid++)
				}
				return this.each(function() {
					bH.event.add(this, b5, b7, b8, e)
				})
			},
			one: function(i, e, b6, b5) {
				return this.on(i, e, b6, b5, 1)
			},
			off: function(b5, e, b7) {
				var i, b6;
				if (b5 && b5.preventDefault && b5.handleObj) {
					i = b5.handleObj;
					bH(b5.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler);
					return this
				}
				if (typeof b5 === "object") {
					for (b6 in b5) {
						this.off(b6, e, b5[b6])
					}
					return this
				}
				if (e === false || typeof e === "function") {
					b7 = e;
					e = undefined
				}
				if (b7 === false) {
					b7 = Y
				}
				return this.each(function() {
					bH.event.remove(this, b5, b7, e)
				})
			},
			trigger: function(e, i) {
				return this.each(function() {
					bH.event.trigger(e, i, this)
				})
			},
			triggerHandler: function(e, b5) {
				var i = this[0];
				if (i) {
					return bH.event.trigger(e, b5, i, true)
				}
			}
		});
		function A(e) {
			var b5 = d.split("|")
			  , i = e.createDocumentFragment();
			if (i.createElement) {
				while (b5.length) {
					i.createElement(b5.pop())
				}
			}
			return i
		}
		var d = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
		  , aC = / jQuery\d+="(?:null|\d+)"/g
		  , L = new RegExp("<(?:" + d + ")[\\s/>]","i")
		  , b4 = /^\s+/
		  , aG = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
		  , o = /<([\w:]+)/
		  , bZ = /<tbody/i
		  , K = /<|&#?\w+;/
		  , am = /<(?:script|style|link)/i
		  , bV = /checked\s*(?:[^=]|=\s*.checked.)/i
		  , bA = /^$|\/(?:java|ecma)script/i
		  , aq = /^true\/(.*)/
		  , aN = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
		  , V = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: C.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		}
		  , aS = A(n)
		  , k = aS.appendChild(n.createElement("div"));
		V.optgroup = V.option;
		V.tbody = V.tfoot = V.colgroup = V.caption = V.thead;
		V.th = V.td;
		function l(b7, e) {
			var b5, b8, b6 = 0, b9 = typeof b7.getElementsByTagName !== aB ? b7.getElementsByTagName(e || "*") : typeof b7.querySelectorAll !== aB ? b7.querySelectorAll(e || "*") : undefined;
			if (!b9) {
				for (b9 = [],
				b5 = b7.childNodes || b7; (b8 = b5[b6]) != null; b6++) {
					if (!e || bH.nodeName(b8, e)) {
						b9.push(b8)
					} else {
						bH.merge(b9, l(b8, e))
					}
				}
			}
			return e === undefined || e && bH.nodeName(b7, e) ? bH.merge([b7], b9) : b9
		}
		function bX(e) {
			if (aL.test(e.type)) {
				e.defaultChecked = e.checked
			}
		}
		function a2(i, e) {
			return bH.nodeName(i, "table") && bH.nodeName(e.nodeType !== 11 ? e : e.firstChild, "tr") ? i.getElementsByTagName("tbody")[0] || i.appendChild(i.ownerDocument.createElement("tbody")) : i
		}
		function t(e) {
			e.type = (bH.find.attr(e, "type") !== null) + "/" + e.type;
			return e
		}
		function be(i) {
			var e = aq.exec(i.type);
			if (e) {
				i.type = e[1]
			} else {
				i.removeAttribute("type")
			}
			return i
		}
		function bt(e, b6) {
			var b7, b5 = 0;
			for (; (b7 = e[b5]) != null; b5++) {
				bH._data(b7, "globalEval", !b6 || bH._data(b6[b5], "globalEval"))
			}
		}
		function ar(cb, b5) {
			if (b5.nodeType !== 1 || !bH.hasData(cb)) {
				return
			}
			var b8, b7, e, ca = bH._data(cb), b9 = bH._data(b5, ca), b6 = ca.events;
			if (b6) {
				delete b9.handle;
				b9.events = {};
				for (b8 in b6) {
					for (b7 = 0,
					e = b6[b8].length; b7 < e; b7++) {
						bH.event.add(b5, b8, b6[b8][b7])
					}
				}
			}
			if (b9.data) {
				b9.data = bH.extend({}, b9.data)
			}
		}
		function S(b7, i) {
			var b8, b6, b5;
			if (i.nodeType !== 1) {
				return
			}
			b8 = i.nodeName.toLowerCase();
			if (!C.noCloneEvent && i[bH.expando]) {
				b5 = bH._data(i);
				for (b6 in b5.events) {
					bH.removeEvent(i, b6, b5.handle)
				}
				i.removeAttribute(bH.expando)
			}
			if (b8 === "script" && i.text !== b7.text) {
				t(i).text = b7.text;
				be(i)
			} else {
				if (b8 === "object") {
					if (i.parentNode) {
						i.outerHTML = b7.outerHTML
					}
					if (C.html5Clone && (b7.innerHTML && !bH.trim(i.innerHTML))) {
						i.innerHTML = b7.innerHTML
					}
				} else {
					if (b8 === "input" && aL.test(b7.type)) {
						i.defaultChecked = i.checked = b7.checked;
						if (i.value !== b7.value) {
							i.value = b7.value
						}
					} else {
						if (b8 === "option") {
							i.defaultSelected = i.selected = b7.defaultSelected
						} else {
							if (b8 === "input" || b8 === "textarea") {
								i.defaultValue = b7.defaultValue
							}
						}
					}
				}
			}
		}
		bH.extend({
			clone: function(b5, b7, e) {
				var b9, b6, cc, b8, ca, cb = bH.contains(b5.ownerDocument, b5);
				if (C.html5Clone || bH.isXMLDoc(b5) || !L.test("<" + b5.nodeName + ">")) {
					cc = b5.cloneNode(true)
				} else {
					k.innerHTML = b5.outerHTML;
					k.removeChild(cc = k.firstChild)
				}
				if ((!C.noCloneEvent || !C.noCloneChecked) && (b5.nodeType === 1 || b5.nodeType === 11) && !bH.isXMLDoc(b5)) {
					b9 = l(cc);
					ca = l(b5);
					for (b8 = 0; (b6 = ca[b8]) != null; ++b8) {
						if (b9[b8]) {
							S(b6, b9[b8])
						}
					}
				}
				if (b7) {
					if (e) {
						ca = ca || l(b5);
						b9 = b9 || l(cc);
						for (b8 = 0; (b6 = ca[b8]) != null; b8++) {
							ar(b6, b9[b8])
						}
					} else {
						ar(b5, cc)
					}
				}
				b9 = l(cc, "script");
				if (b9.length > 0) {
					bt(b9, !cb && l(b5, "script"))
				}
				b9 = ca = b6 = null;
				return cc
			},
			buildFragment: function(b5, b7, cc, ch) {
				var cd, b9, cb, cg, ci, cf, b6, ca = b5.length, b8 = A(b7), e = [], ce = 0;
				for (; ce < ca; ce++) {
					b9 = b5[ce];
					if (b9 || b9 === 0) {
						if (bH.type(b9) === "object") {
							bH.merge(e, b9.nodeType ? [b9] : b9)
						} else {
							if (!K.test(b9)) {
								e.push(b7.createTextNode(b9))
							} else {
								cg = cg || b8.appendChild(b7.createElement("div"));
								ci = (o.exec(b9) || ["", ""])[1].toLowerCase();
								b6 = V[ci] || V._default;
								cg.innerHTML = b6[1] + b9.replace(aG, "<$1></$2>") + b6[2];
								cd = b6[0];
								while (cd--) {
									cg = cg.lastChild
								}
								if (!C.leadingWhitespace && b4.test(b9)) {
									e.push(b7.createTextNode(b4.exec(b9)[0]))
								}
								if (!C.tbody) {
									b9 = ci === "table" && !bZ.test(b9) ? cg.firstChild : b6[1] === "<table>" && !bZ.test(b9) ? cg : 0;
									cd = b9 && b9.childNodes.length;
									while (cd--) {
										if (bH.nodeName((cf = b9.childNodes[cd]), "tbody") && !cf.childNodes.length) {
											b9.removeChild(cf)
										}
									}
								}
								bH.merge(e, cg.childNodes);
								cg.textContent = "";
								while (cg.firstChild) {
									cg.removeChild(cg.firstChild)
								}
								cg = b8.lastChild
							}
						}
					}
				}
				if (cg) {
					b8.removeChild(cg)
				}
				if (!C.appendChecked) {
					bH.grep(l(e, "input"), bX)
				}
				ce = 0;
				while ((b9 = e[ce++])) {
					if (ch && bH.inArray(b9, ch) !== -1) {
						continue
					}
					cb = bH.contains(b9.ownerDocument, b9);
					cg = l(b8.appendChild(b9), "script");
					if (cb) {
						bt(cg)
					}
					if (cc) {
						cd = 0;
						while ((b9 = cg[cd++])) {
							if (bA.test(b9.type || "")) {
								cc.push(b9)
							}
						}
					}
				}
				cg = null;
				return b8
			},
			cleanData: function(b5, cd) {
				var b7, cc, b6, b8, b9 = 0, ce = bH.expando, e = bH.cache, ca = C.deleteExpando, cb = bH.event.special;
				for (; (b7 = b5[b9]) != null; b9++) {
					if (cd || bH.acceptData(b7)) {
						b6 = b7[ce];
						b8 = b6 && e[b6];
						if (b8) {
							if (b8.events) {
								for (cc in b8.events) {
									if (cb[cc]) {
										bH.event.remove(b7, cc)
									} else {
										bH.removeEvent(b7, cc, b8.handle)
									}
								}
							}
							if (e[b6]) {
								delete e[b6];
								if (ca) {
									delete b7[ce]
								} else {
									if (typeof b7.removeAttribute !== aB) {
										b7.removeAttribute(ce)
									} else {
										b7[ce] = null
									}
								}
								aO.push(b6)
							}
						}
					}
				}
			}
		});
		bH.fn.extend({
			text: function(e) {
				return aA(this, function(i) {
					return i === undefined ? bH.text(this) : this.empty().append((this[0] && this[0].ownerDocument || n).createTextNode(i))
				}, null, e, arguments.length)
			},
			append: function() {
				return this.domManip(arguments, function(e) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var i = a2(this, e);
						i.appendChild(e)
					}
				})
			},
			prepend: function() {
				return this.domManip(arguments, function(e) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var i = a2(this, e);
						i.insertBefore(e, i.firstChild)
					}
				})
			},
			before: function() {
				return this.domManip(arguments, function(e) {
					if (this.parentNode) {
						this.parentNode.insertBefore(e, this)
					}
				})
			},
			after: function() {
				return this.domManip(arguments, function(e) {
					if (this.parentNode) {
						this.parentNode.insertBefore(e, this.nextSibling)
					}
				})
			},
			remove: function(e, b8) {
				var b7, b5 = e ? bH.filter(e, this) : this, b6 = 0;
				for (; (b7 = b5[b6]) != null; b6++) {
					if (!b8 && b7.nodeType === 1) {
						bH.cleanData(l(b7))
					}
					if (b7.parentNode) {
						if (b8 && bH.contains(b7.ownerDocument, b7)) {
							bt(l(b7, "script"))
						}
						b7.parentNode.removeChild(b7)
					}
				}
				return this
			},
			empty: function() {
				var b5, e = 0;
				for (; (b5 = this[e]) != null; e++) {
					if (b5.nodeType === 1) {
						bH.cleanData(l(b5, false))
					}
					while (b5.firstChild) {
						b5.removeChild(b5.firstChild)
					}
					if (b5.options && bH.nodeName(b5, "select")) {
						b5.options.length = 0
					}
				}
				return this
			},
			clone: function(i, e) {
				i = i == null ? false : i;
				e = e == null ? i : e;
				return this.map(function() {
					return bH.clone(this, i, e)
				})
			},
			html: function(e) {
				return aA(this, function(b8) {
					var b7 = this[0] || {}
					  , b6 = 0
					  , b5 = this.length;
					if (b8 === undefined) {
						return b7.nodeType === 1 ? b7.innerHTML.replace(aC, "") : undefined
					}
					if (typeof b8 === "string" && !am.test(b8) && (C.htmlSerialize || !L.test(b8)) && (C.leadingWhitespace || !b4.test(b8)) && !V[(o.exec(b8) || ["", ""])[1].toLowerCase()]) {
						b8 = b8.replace(aG, "<$1></$2>");
						try {
							for (; b6 < b5; b6++) {
								b7 = this[b6] || {};
								if (b7.nodeType === 1) {
									bH.cleanData(l(b7, false));
									b7.innerHTML = b8
								}
							}
							b7 = 0
						} catch (b9) {}
					}
					if (b7) {
						this.empty().append(b8)
					}
				}, null, e, arguments.length)
			},
			replaceWith: function() {
				var e = arguments[0];
				this.domManip(arguments, function(i) {
					e = this.parentNode;
					bH.cleanData(l(this));
					if (e) {
						e.replaceChild(i, this)
					}
				});
				return e && (e.length || e.nodeType) ? this : this.remove()
			},
			detach: function(e) {
				return this.remove(e, true)
			},
			domManip: function(cc, ch) {
				cc = ay.apply([], cc);
				var ca, b6, e, b8, cf, cb, b9 = 0, b7 = this.length, ce = this, cg = b7 - 1, cd = cc[0], b5 = bH.isFunction(cd);
				if (b5 || (b7 > 1 && typeof cd === "string" && !C.checkClone && bV.test(cd))) {
					return this.each(function(ci) {
						var i = ce.eq(ci);
						if (b5) {
							cc[0] = cd.call(this, ci, i.html())
						}
						i.domManip(cc, ch)
					})
				}
				if (b7) {
					cb = bH.buildFragment(cc, this[0].ownerDocument, false, this);
					ca = cb.firstChild;
					if (cb.childNodes.length === 1) {
						cb = ca
					}
					if (ca) {
						b8 = bH.map(l(cb, "script"), t);
						e = b8.length;
						for (; b9 < b7; b9++) {
							b6 = cb;
							if (b9 !== cg) {
								b6 = bH.clone(b6, true, true);
								if (e) {
									bH.merge(b8, l(b6, "script"))
								}
							}
							ch.call(this[b9], b6, b9)
						}
						if (e) {
							cf = b8[b8.length - 1].ownerDocument;
							bH.map(b8, be);
							for (b9 = 0; b9 < e; b9++) {
								b6 = b8[b9];
								if (bA.test(b6.type || "") && !bH._data(b6, "globalEval") && bH.contains(cf, b6)) {
									if (b6.src) {
										if (bH._evalUrl) {
											bH._evalUrl(b6.src)
										}
									} else {
										bH.globalEval((b6.text || b6.textContent || b6.innerHTML || "").replace(aN, ""))
									}
								}
							}
						}
						cb = ca = null
					}
				}
				return this
			}
		});
		bH.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(e, i) {
			bH.fn[e] = function(b5) {
				var b6, b8 = 0, b7 = [], ca = bH(b5), b9 = ca.length - 1;
				for (; b8 <= b9; b8++) {
					b6 = b8 === b9 ? this : this.clone(true);
					bH(ca[b8])[i](b6);
					w.apply(b7, b6.get())
				}
				return this.pushStack(b7)
			}
		});
		var aH, bk = {};
		function a3(e, b7) {
			var i, b5 = bH(b7.createElement(e)).appendTo(b7.body), b6 = a4.getDefaultComputedStyle && (i = a4.getDefaultComputedStyle(b5[0])) ? i.display : bH.css(b5[0], "display");
			b5.detach();
			return b6
		}
		function aZ(b5) {
			var i = n
			  , e = bk[b5];
			if (!e) {
				e = a3(b5, i);
				if (e === "none" || !e) {
					aH = (aH || bH("<iframe frameborder='0' width='0' height='0'/>")).appendTo(i.documentElement);
					i = (aH[0].contentWindow || aH[0].contentDocument).document;
					i.write();
					i.close();
					e = a3(b5, i);
					aH.detach()
				}
				bk[b5] = e
			}
			return e
		}
		(function() {
			var e;
			C.shrinkWrapBlocks = function() {
				if (e != null) {
					return e
				}
				e = false;
				var b6, i, b5;
				i = n.getElementsByTagName("body")[0];
				if (!i || !i.style) {
					return
				}
				b6 = n.createElement("div");
				b5 = n.createElement("div");
				b5.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
				i.appendChild(b5).appendChild(b6);
				if (typeof b6.style.zoom !== aB) {
					b6.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1";
					b6.appendChild(n.createElement("div")).style.width = "5px";
					e = b6.offsetWidth !== 3
				}
				i.removeChild(b5);
				return e
			}
		}
		)();
		var aY = (/^margin/);
		var X = new RegExp("^(" + aD + ")(?!px)[a-z%]+$","i");
		var bp, F, bn = /^(top|right|bottom|left)$/;
		if (a4.getComputedStyle) {
			bp = function(e) {
				if (e.ownerDocument.defaultView.opener) {
					return e.ownerDocument.defaultView.getComputedStyle(e, null)
				}
				return a4.getComputedStyle(e, null)
			}
			;
			F = function(ca, i, b9) {
				var b7, b6, b8, e, b5 = ca.style;
				b9 = b9 || bp(ca);
				e = b9 ? b9.getPropertyValue(i) || b9[i] : undefined;
				if (b9) {
					if (e === "" && !bH.contains(ca.ownerDocument, ca)) {
						e = bH.style(ca, i)
					}
					if (X.test(e) && aY.test(i)) {
						b7 = b5.width;
						b6 = b5.minWidth;
						b8 = b5.maxWidth;
						b5.minWidth = b5.maxWidth = b5.width = e;
						e = b9.width;
						b5.width = b7;
						b5.minWidth = b6;
						b5.maxWidth = b8
					}
				}
				return e === undefined ? e : e + ""
			}
		} else {
			if (n.documentElement.currentStyle) {
				bp = function(e) {
					return e.currentStyle
				}
				;
				F = function(b9, b6, b8) {
					var ca, i, e, b5, b7 = b9.style;
					b8 = b8 || bp(b9);
					b5 = b8 ? b8[b6] : undefined;
					if (b5 == null && b7 && b7[b6]) {
						b5 = b7[b6]
					}
					if (X.test(b5) && !bn.test(b6)) {
						ca = b7.left;
						i = b9.runtimeStyle;
						e = i && i.left;
						if (e) {
							i.left = b9.currentStyle.left
						}
						b7.left = b6 === "fontSize" ? "1em" : b5;
						b5 = b7.pixelLeft + "px";
						b7.left = ca;
						if (e) {
							i.left = e
						}
					}
					return b5 === undefined ? b5 : b5 + "" || "auto"
				}
			}
		}
		function a6(e, i) {
			return {
				get: function() {
					var b5 = e();
					if (b5 == null) {
						return
					}
					if (b5) {
						delete this.get;
						return
					}
					return (this.get = i).apply(this, arguments)
				}
			}
		}
		(function() {
			var ca, b8, b6, b9, b5, b7, i;
			ca = n.createElement("div");
			ca.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
			b6 = ca.getElementsByTagName("a")[0];
			b8 = b6 && b6.style;
			if (!b8) {
				return
			}
			b8.cssText = "float:left;opacity:.5";
			C.opacity = b8.opacity === "0.5";
			C.cssFloat = !!b8.cssFloat;
			ca.style.backgroundClip = "content-box";
			ca.cloneNode(true).style.backgroundClip = "";
			C.clearCloneStyle = ca.style.backgroundClip === "content-box";
			C.boxSizing = b8.boxSizing === "" || b8.MozBoxSizing === "" || b8.WebkitBoxSizing === "";
			bH.extend(C, {
				reliableHiddenOffsets: function() {
					if (b7 == null) {
						e()
					}
					return b7
				},
				boxSizingReliable: function() {
					if (b5 == null) {
						e()
					}
					return b5
				},
				pixelPosition: function() {
					if (b9 == null) {
						e()
					}
					return b9
				},
				reliableMarginRight: function() {
					if (i == null) {
						e()
					}
					return i
				}
			});
			function e() {
				var ce, cb, cc, cd;
				cb = n.getElementsByTagName("body")[0];
				if (!cb || !cb.style) {
					return
				}
				ce = n.createElement("div");
				cc = n.createElement("div");
				cc.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
				cb.appendChild(cc).appendChild(ce);
				ce.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
				b9 = b5 = false;
				i = true;
				if (a4.getComputedStyle) {
					b9 = (a4.getComputedStyle(ce, null) || {}).top !== "1%";
					b5 = (a4.getComputedStyle(ce, null) || {
						width: "4px"
					}).width === "4px";
					cd = ce.appendChild(n.createElement("div"));
					cd.style.cssText = ce.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
					cd.style.marginRight = cd.style.width = "0";
					ce.style.width = "1px";
					i = !parseFloat((a4.getComputedStyle(cd, null) || {}).marginRight);
					ce.removeChild(cd)
				}
				ce.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
				cd = ce.getElementsByTagName("td");
				cd[0].style.cssText = "margin:0;border:0;padding:0;display:none";
				b7 = cd[0].offsetHeight === 0;
				if (b7) {
					cd[0].style.display = "";
					cd[1].style.display = "none";
					b7 = cd[0].offsetHeight === 0
				}
				cb.removeChild(cc)
			}
		}
		)();
		bH.swap = function(b8, b7, b9, b6) {
			var b5, i, e = {};
			for (i in b7) {
				e[i] = b8.style[i];
				b8.style[i] = b7[i]
			}
			b5 = b9.apply(b8, b6 || []);
			for (i in b7) {
				b8.style[i] = e[i]
			}
			return b5
		}
		;
		var bi = /alpha\([^)]*\)/i
		  , aT = /opacity\s*=\s*([^)]*)/
		  , G = /^(none|table(?!-c[ea]).+)/
		  , ba = new RegExp("^(" + aD + ")(.*)$","i")
		  , U = new RegExp("^([+-])=(" + aD + ")","i")
		  , bd = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		}
		  , bC = {
			letterSpacing: "0",
			fontWeight: "400"
		}
		  , av = ["Webkit", "O", "Moz", "ms"];
		function c(b7, b5) {
			if (b5 in b7) {
				return b5
			}
			var b8 = b5.charAt(0).toUpperCase() + b5.slice(1)
			  , e = b5
			  , b6 = av.length;
			while (b6--) {
				b5 = av[b6] + b8;
				if (b5 in b7) {
					return b5
				}
			}
			return e
		}
		function r(b9, e) {
			var ca, b7, b8, i = [], b5 = 0, b6 = b9.length;
			for (; b5 < b6; b5++) {
				b7 = b9[b5];
				if (!b7.style) {
					continue
				}
				i[b5] = bH._data(b7, "olddisplay");
				ca = b7.style.display;
				if (e) {
					if (!i[b5] && ca === "none") {
						b7.style.display = ""
					}
					if (b7.style.display === "" && R(b7)) {
						i[b5] = bH._data(b7, "olddisplay", aZ(b7.nodeName))
					}
				} else {
					b8 = R(b7);
					if (ca && ca !== "none" || !b8) {
						bH._data(b7, "olddisplay", b8 ? ca : bH.css(b7, "display"))
					}
				}
			}
			for (b5 = 0; b5 < b6; b5++) {
				b7 = b9[b5];
				if (!b7.style) {
					continue
				}
				if (!e || b7.style.display === "none" || b7.style.display === "") {
					b7.style.display = e ? i[b5] || "" : "none"
				}
			}
			return b9
		}
		function aM(e, b5, b6) {
			var i = ba.exec(b5);
			return i ? Math.max(0, i[1] - (b6 || 0)) + (i[2] || "px") : b5
		}
		function aw(b8, b5, e, ca, b7) {
			var b6 = e === (ca ? "border" : "content") ? 4 : b5 === "width" ? 1 : 0
			  , b9 = 0;
			for (; b6 < 4; b6 += 2) {
				if (e === "margin") {
					b9 += bH.css(b8, e + bS[b6], true, b7)
				}
				if (ca) {
					if (e === "content") {
						b9 -= bH.css(b8, "padding" + bS[b6], true, b7)
					}
					if (e !== "margin") {
						b9 -= bH.css(b8, "border" + bS[b6] + "Width", true, b7)
					}
				} else {
					b9 += bH.css(b8, "padding" + bS[b6], true, b7);
					if (e !== "padding") {
						b9 += bH.css(b8, "border" + bS[b6] + "Width", true, b7)
					}
				}
			}
			return b9
		}
		function u(b7, i, e) {
			var b6 = true
			  , b8 = i === "width" ? b7.offsetWidth : b7.offsetHeight
			  , b5 = bp(b7)
			  , b9 = C.boxSizing && bH.css(b7, "boxSizing", false, b5) === "border-box";
			if (b8 <= 0 || b8 == null) {
				b8 = F(b7, i, b5);
				if (b8 < 0 || b8 == null) {
					b8 = b7.style[i]
				}
				if (X.test(b8)) {
					return b8
				}
				b6 = b9 && (C.boxSizingReliable() || b8 === b7.style[i]);
				b8 = parseFloat(b8) || 0
			}
			return (b8 + aw(b7, i, e || (b9 ? "border" : "content"), b6, b5)) + "px"
		}
		bH.extend({
			cssHooks: {
				opacity: {
					get: function(b5, i) {
						if (i) {
							var e = F(b5, "opacity");
							return e === "" ? "1" : e
						}
					}
				}
			},
			cssNumber: {
				columnCount: true,
				fillOpacity: true,
				flexGrow: true,
				flexShrink: true,
				fontWeight: true,
				lineHeight: true,
				opacity: true,
				order: true,
				orphans: true,
				widows: true,
				zIndex: true,
				zoom: true
			},
			cssProps: {
				"float": C.cssFloat ? "cssFloat" : "styleFloat"
			},
			style: function(b6, b5, cc, b7) {
				if (!b6 || b6.nodeType === 3 || b6.nodeType === 8 || !b6.style) {
					return
				}
				var ca, cb, cd, b8 = bH.camelCase(b5), i = b6.style;
				b5 = bH.cssProps[b8] || (bH.cssProps[b8] = c(i, b8));
				cd = bH.cssHooks[b5] || bH.cssHooks[b8];
				if (cc !== undefined) {
					cb = typeof cc;
					if (cb === "string" && (ca = U.exec(cc))) {
						cc = (ca[1] + 1) * ca[2] + parseFloat(bH.css(b6, b5));
						cb = "number"
					}
					if (cc == null || cc !== cc) {
						return
					}
					if (cb === "number" && !bH.cssNumber[b8]) {
						cc += "px"
					}
					if (!C.clearCloneStyle && cc === "" && b5.indexOf("background") === 0) {
						i[b5] = "inherit"
					}
					if (!cd || !("set"in cd) || (cc = cd.set(b6, cc, b7)) !== undefined) {
						try {
							i[b5] = cc
						} catch (b9) {}
					}
				} else {
					if (cd && "get"in cd && (ca = cd.get(b6, false, b7)) !== undefined) {
						return ca
					}
					return i[b5]
				}
			},
			css: function(b9, b7, i, b8) {
				var b6, ca, e, b5 = bH.camelCase(b7);
				b7 = bH.cssProps[b5] || (bH.cssProps[b5] = c(b9.style, b5));
				e = bH.cssHooks[b7] || bH.cssHooks[b5];
				if (e && "get"in e) {
					ca = e.get(b9, true, i)
				}
				if (ca === undefined) {
					ca = F(b9, b7, b8)
				}
				if (ca === "normal" && b7 in bC) {
					ca = bC[b7]
				}
				if (i === "" || i) {
					b6 = parseFloat(ca);
					return i === true || bH.isNumeric(b6) ? b6 || 0 : ca
				}
				return ca
			}
		});
		bH.each(["height", "width"], function(b5, e) {
			bH.cssHooks[e] = {
				get: function(b7, b6, i) {
					if (b6) {
						return G.test(bH.css(b7, "display")) && b7.offsetWidth === 0 ? bH.swap(b7, bd, function() {
							return u(b7, e, i)
						}) : u(b7, e, i)
					}
				},
				set: function(b7, b8, i) {
					var b6 = i && bp(b7);
					return aM(b7, b8, i ? aw(b7, e, i, C.boxSizing && bH.css(b7, "boxSizing", false, b6) === "border-box", b6) : 0)
				}
			}
		});
		if (!C.opacity) {
			bH.cssHooks.opacity = {
				get: function(i, e) {
					return aT.test((e && i.currentStyle ? i.currentStyle.filter : i.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : e ? "1" : ""
				},
				set: function(b7, b8) {
					var b6 = b7.style
					  , i = b7.currentStyle
					  , e = bH.isNumeric(b8) ? "alpha(opacity=" + b8 * 100 + ")" : ""
					  , b5 = i && i.filter || b6.filter || "";
					b6.zoom = 1;
					if ((b8 >= 1 || b8 === "") && bH.trim(b5.replace(bi, "")) === "" && b6.removeAttribute) {
						b6.removeAttribute("filter");
						if (b8 === "" || i && !i.filter) {
							return
						}
					}
					b6.filter = bi.test(b5) ? b5.replace(bi, e) : b5 + " " + e
				}
			}
		}
		bH.cssHooks.marginRight = a6(C.reliableMarginRight, function(i, e) {
			if (e) {
				return bH.swap(i, {
					display: "inline-block"
				}, F, [i, "marginRight"])
			}
		});
		bH.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(e, i) {
			bH.cssHooks[e + i] = {
				expand: function(b7) {
					var b6 = 0
					  , b5 = {}
					  , b8 = typeof b7 === "string" ? b7.split(" ") : [b7];
					for (; b6 < 4; b6++) {
						b5[e + bS[b6] + i] = b8[b6] || b8[b6 - 2] || b8[0]
					}
					return b5
				}
			};
			if (!aY.test(e)) {
				bH.cssHooks[e + i].set = aM
			}
		});
		bH.fn.extend({
			css: function(e, i) {
				return aA(this, function(b9, b6, ca) {
					var b8, b5, cb = {}, b7 = 0;
					if (bH.isArray(b6)) {
						b8 = bp(b9);
						b5 = b6.length;
						for (; b7 < b5; b7++) {
							cb[b6[b7]] = bH.css(b9, b6[b7], false, b8)
						}
						return cb
					}
					return ca !== undefined ? bH.style(b9, b6, ca) : bH.css(b9, b6)
				}, e, i, arguments.length > 1)
			},
			show: function() {
				return r(this, true)
			},
			hide: function() {
				return r(this)
			},
			toggle: function(e) {
				if (typeof e === "boolean") {
					return e ? this.show() : this.hide()
				}
				return this.each(function() {
					if (R(this)) {
						bH(this).show()
					} else {
						bH(this).hide()
					}
				})
			}
		});
		function I(b5, i, b7, e, b6) {
			return new I.prototype.init(b5,i,b7,e,b6)
		}
		bH.Tween = I;
		I.prototype = {
			constructor: I,
			init: function(b6, i, b8, e, b7, b5) {
				this.elem = b6;
				this.prop = b8;
				this.easing = b7 || "swing";
				this.options = i;
				this.start = this.now = this.cur();
				this.end = e;
				this.unit = b5 || (bH.cssNumber[b8] ? "" : "px")
			},
			cur: function() {
				var e = I.propHooks[this.prop];
				return e && e.get ? e.get(this) : I.propHooks._default.get(this)
			},
			run: function(b5) {
				var i, e = I.propHooks[this.prop];
				if (this.options.duration) {
					this.pos = i = bH.easing[this.easing](b5, this.options.duration * b5, 0, 1, this.options.duration)
				} else {
					this.pos = i = b5
				}
				this.now = (this.end - this.start) * i + this.start;
				if (this.options.step) {
					this.options.step.call(this.elem, this.now, this)
				}
				if (e && e.set) {
					e.set(this)
				} else {
					I.propHooks._default.set(this)
				}
				return this
			}
		};
		I.prototype.init.prototype = I.prototype;
		I.propHooks = {
			_default: {
				get: function(i) {
					var e;
					if (i.elem[i.prop] != null && (!i.elem.style || i.elem.style[i.prop] == null)) {
						return i.elem[i.prop]
					}
					e = bH.css(i.elem, i.prop, "");
					return !e || e === "auto" ? 0 : e
				},
				set: function(e) {
					if (bH.fx.step[e.prop]) {
						bH.fx.step[e.prop](e)
					} else {
						if (e.elem.style && (e.elem.style[bH.cssProps[e.prop]] != null || bH.cssHooks[e.prop])) {
							bH.style(e.elem, e.prop, e.now + e.unit)
						} else {
							e.elem[e.prop] = e.now
						}
					}
				}
			}
		};
		I.propHooks.scrollTop = I.propHooks.scrollLeft = {
			set: function(e) {
				if (e.elem.nodeType && e.elem.parentNode) {
					e.elem[e.prop] = e.now
				}
			}
		};
		bH.easing = {
			linear: function(e) {
				return e
			},
			swing: function(e) {
				return 0.5 - Math.cos(e * Math.PI) / 2
			}
		};
		bH.fx = I.prototype.init;
		bH.fx.step = {};
		var M, ad, bQ = /^(?:toggle|show|hide)$/, bI = new RegExp("^(?:([+-])=|)(" + aD + ")([a-z%]*)$","i"), bO = /queueHooks$/, aF = [h], a1 = {
			"*": [function(e, b9) {
				var cb = this.createTween(e, b9)
				  , b7 = cb.cur()
				  , b6 = bI.exec(b9)
				  , ca = b6 && b6[3] || (bH.cssNumber[e] ? "" : "px")
				  , i = (bH.cssNumber[e] || ca !== "px" && +b7) && bI.exec(bH.css(cb.elem, e))
				  , b5 = 1
				  , b8 = 20;
				if (i && i[3] !== ca) {
					ca = ca || i[3];
					b6 = b6 || [];
					i = +b7 || 1;
					do {
						b5 = b5 || ".5";
						i = i / b5;
						bH.style(cb.elem, e, i + ca)
					} while (b5 !== (b5 = cb.cur() / b7) && b5 !== 1 && --b8)
				}
				if (b6) {
					i = cb.start = +i || +b7 || 0;
					cb.unit = ca;
					cb.end = b6[1] ? i + (b6[1] + 1) * b6[2] : +b6[2]
				}
				return cb
			}
			]
		};
		function bm() {
			setTimeout(function() {
				M = undefined
			});
			return (M = bH.now())
		}
		function bG(b6, b8) {
			var b7, e = {
				height: b6
			}, b5 = 0;
			b8 = b8 ? 1 : 0;
			for (; b5 < 4; b5 += 2 - b8) {
				b7 = bS[b5];
				e["margin" + b7] = e["padding" + b7] = b6
			}
			if (b8) {
				e.opacity = e.width = b6
			}
			return e
		}
		function bc(b7, b9, b6) {
			var i, b8 = (a1[b9] || []).concat(a1["*"]), e = 0, b5 = b8.length;
			for (; e < b5; e++) {
				if ((i = b8[e].call(b6, b9, b7))) {
					return i
				}
			}
		}
		function h(b6, cb, e) {
			var b5, ce, b8, ch, ci, cf, ca, cd, b7 = this, cc = {}, i = b6.style, b9 = b6.nodeType && R(b6), cg = bH._data(b6, "fxshow");
			if (!e.queue) {
				ci = bH._queueHooks(b6, "fx");
				if (ci.unqueued == null) {
					ci.unqueued = 0;
					cf = ci.empty.fire;
					ci.empty.fire = function() {
						if (!ci.unqueued) {
							cf()
						}
					}
				}
				ci.unqueued++;
				b7.always(function() {
					b7.always(function() {
						ci.unqueued--;
						if (!bH.queue(b6, "fx").length) {
							ci.empty.fire()
						}
					})
				})
			}
			if (b6.nodeType === 1 && ("height"in cb || "width"in cb)) {
				e.overflow = [i.overflow, i.overflowX, i.overflowY];
				ca = bH.css(b6, "display");
				cd = ca === "none" ? bH._data(b6, "olddisplay") || aZ(b6.nodeName) : ca;
				if (cd === "inline" && bH.css(b6, "float") === "none") {
					if (!C.inlineBlockNeedsLayout || aZ(b6.nodeName) === "inline") {
						i.display = "inline-block"
					} else {
						i.zoom = 1
					}
				}
			}
			if (e.overflow) {
				i.overflow = "hidden";
				if (!C.shrinkWrapBlocks()) {
					b7.always(function() {
						i.overflow = e.overflow[0];
						i.overflowX = e.overflow[1];
						i.overflowY = e.overflow[2]
					})
				}
			}
			for (b5 in cb) {
				ce = cb[b5];
				if (bQ.exec(ce)) {
					delete cb[b5];
					b8 = b8 || ce === "toggle";
					if (ce === (b9 ? "hide" : "show")) {
						if (ce === "show" && cg && cg[b5] !== undefined) {
							b9 = true
						} else {
							continue
						}
					}
					cc[b5] = cg && cg[b5] || bH.style(b6, b5)
				} else {
					ca = undefined
				}
			}
			if (!bH.isEmptyObject(cc)) {
				if (cg) {
					if ("hidden"in cg) {
						b9 = cg.hidden
					}
				} else {
					cg = bH._data(b6, "fxshow", {})
				}
				if (b8) {
					cg.hidden = !b9
				}
				if (b9) {
					bH(b6).show()
				} else {
					b7.done(function() {
						bH(b6).hide()
					})
				}
				b7.done(function() {
					var cj;
					bH._removeData(b6, "fxshow");
					for (cj in cc) {
						bH.style(b6, cj, cc[cj])
					}
				});
				for (b5 in cc) {
					ch = bc(b9 ? cg[b5] : 0, b5, b7);
					if (!(b5 in cg)) {
						cg[b5] = ch.start;
						if (b9) {
							ch.end = ch.start;
							ch.start = b5 === "width" || b5 === "height" ? 1 : 0
						}
					}
				}
			} else {
				if ((ca === "none" ? aZ(b6.nodeName) : ca) === "inline") {
					i.display = ca
				}
			}
		}
		function an(b6, b8) {
			var b5, i, b9, b7, e;
			for (b5 in b6) {
				i = bH.camelCase(b5);
				b9 = b8[i];
				b7 = b6[b5];
				if (bH.isArray(b7)) {
					b9 = b7[1];
					b7 = b6[b5] = b7[0]
				}
				if (b5 !== i) {
					b6[i] = b7;
					delete b6[b5]
				}
				e = bH.cssHooks[i];
				if (e && "expand"in e) {
					b7 = e.expand(b7);
					delete b6[i];
					for (b5 in b7) {
						if (!(b5 in b6)) {
							b6[b5] = b7[b5];
							b8[b5] = b9
						}
					}
				} else {
					b8[i] = b9
				}
			}
		}
		function f(b5, b9, cc) {
			var cd, e, b8 = 0, i = aF.length, cb = bH.Deferred().always(function() {
				delete b7.elem
			}), b7 = function() {
				if (e) {
					return false
				}
				var cj = M || bm()
				  , cg = Math.max(0, b6.startTime + b6.duration - cj)
				  , ce = cg / b6.duration || 0
				  , ci = 1 - ce
				  , cf = 0
				  , ch = b6.tweens.length;
				for (; cf < ch; cf++) {
					b6.tweens[cf].run(ci)
				}
				cb.notifyWith(b5, [b6, ci, cg]);
				if (ci < 1 && ch) {
					return cg
				} else {
					cb.resolveWith(b5, [b6]);
					return false
				}
			}, b6 = cb.promise({
				elem: b5,
				props: bH.extend({}, b9),
				opts: bH.extend(true, {
					specialEasing: {}
				}, cc),
				originalProperties: b9,
				originalOptions: cc,
				startTime: M || bm(),
				duration: cc.duration,
				tweens: [],
				createTween: function(cg, ce) {
					var cf = bH.Tween(b5, b6.opts, cg, ce, b6.opts.specialEasing[cg] || b6.opts.easing);
					b6.tweens.push(cf);
					return cf
				},
				stop: function(cf) {
					var ce = 0
					  , cg = cf ? b6.tweens.length : 0;
					if (e) {
						return this
					}
					e = true;
					for (; ce < cg; ce++) {
						b6.tweens[ce].run(1)
					}
					if (cf) {
						cb.resolveWith(b5, [b6, cf])
					} else {
						cb.rejectWith(b5, [b6, cf])
					}
					return this
				}
			}), ca = b6.props;
			an(ca, b6.opts.specialEasing);
			for (; b8 < i; b8++) {
				cd = aF[b8].call(b6, b5, ca, b6.opts);
				if (cd) {
					return cd
				}
			}
			bH.map(ca, bc, b6);
			if (bH.isFunction(b6.opts.start)) {
				b6.opts.start.call(b5, b6)
			}
			bH.fx.timer(bH.extend(b7, {
				elem: b5,
				anim: b6,
				queue: b6.opts.queue
			}));
			return b6.progress(b6.opts.progress).done(b6.opts.done, b6.opts.complete).fail(b6.opts.fail).always(b6.opts.always)
		}
		bH.Animation = bH.extend(f, {
			tweener: function(i, b7) {
				if (bH.isFunction(i)) {
					b7 = i;
					i = ["*"]
				} else {
					i = i.split(" ")
				}
				var b6, e = 0, b5 = i.length;
				for (; e < b5; e++) {
					b6 = i[e];
					a1[b6] = a1[b6] || [];
					a1[b6].unshift(b7)
				}
			},
			prefilter: function(i, e) {
				if (e) {
					aF.unshift(i)
				} else {
					aF.push(i)
				}
			}
		});
		bH.speed = function(b5, b6, i) {
			var e = b5 && typeof b5 === "object" ? bH.extend({}, b5) : {
				complete: i || !i && b6 || bH.isFunction(b5) && b5,
				duration: b5,
				easing: i && b6 || b6 && !bH.isFunction(b6) && b6
			};
			e.duration = bH.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in bH.fx.speeds ? bH.fx.speeds[e.duration] : bH.fx.speeds._default;
			if (e.queue == null || e.queue === true) {
				e.queue = "fx"
			}
			e.old = e.complete;
			e.complete = function() {
				if (bH.isFunction(e.old)) {
					e.old.call(this)
				}
				if (e.queue) {
					bH.dequeue(this, e.queue)
				}
			}
			;
			return e
		}
		;
		bH.fn.extend({
			fadeTo: function(e, b6, b5, i) {
				return this.filter(R).css("opacity", 0).show().end().animate({
					opacity: b6
				}, e, b5, i)
			},
			animate: function(b9, b6, b8, b7) {
				var b5 = bH.isEmptyObject(b9)
				  , e = bH.speed(b6, b8, b7)
				  , i = function() {
					var ca = f(this, bH.extend({}, b9), e);
					if (b5 || bH._data(this, "finish")) {
						ca.stop(true)
					}
				};
				i.finish = i;
				return b5 || e.queue === false ? this.each(i) : this.queue(e.queue, i)
			},
			stop: function(b5, i, e) {
				var b6 = function(b7) {
					var b8 = b7.stop;
					delete b7.stop;
					b8(e)
				};
				if (typeof b5 !== "string") {
					e = i;
					i = b5;
					b5 = undefined
				}
				if (i && b5 !== false) {
					this.queue(b5 || "fx", [])
				}
				return this.each(function() {
					var ca = true
					  , b7 = b5 != null && b5 + "queueHooks"
					  , b9 = bH.timers
					  , b8 = bH._data(this);
					if (b7) {
						if (b8[b7] && b8[b7].stop) {
							b6(b8[b7])
						}
					} else {
						for (b7 in b8) {
							if (b8[b7] && b8[b7].stop && bO.test(b7)) {
								b6(b8[b7])
							}
						}
					}
					for (b7 = b9.length; b7--; ) {
						if (b9[b7].elem === this && (b5 == null || b9[b7].queue === b5)) {
							b9[b7].anim.stop(e);
							ca = false;
							b9.splice(b7, 1)
						}
					}
					if (ca || !e) {
						bH.dequeue(this, b5)
					}
				})
			},
			finish: function(e) {
				if (e !== false) {
					e = e || "fx"
				}
				return this.each(function() {
					var b6, b9 = bH._data(this), b5 = b9[e + "queue"], i = b9[e + "queueHooks"], b8 = bH.timers, b7 = b5 ? b5.length : 0;
					b9.finish = true;
					bH.queue(this, e, []);
					if (i && i.stop) {
						i.stop.call(this, true)
					}
					for (b6 = b8.length; b6--; ) {
						if (b8[b6].elem === this && b8[b6].queue === e) {
							b8[b6].anim.stop(true);
							b8.splice(b6, 1)
						}
					}
					for (b6 = 0; b6 < b7; b6++) {
						if (b5[b6] && b5[b6].finish) {
							b5[b6].finish.call(this)
						}
					}
					delete b9.finish
				})
			}
		});
		bH.each(["toggle", "show", "hide"], function(b5, e) {
			var b6 = bH.fn[e];
			bH.fn[e] = function(i, b8, b7) {
				return i == null || typeof i === "boolean" ? b6.apply(this, arguments) : this.animate(bG(e, true), i, b8, b7)
			}
		});
		bH.each({
			slideDown: bG("show"),
			slideUp: bG("hide"),
			slideToggle: bG("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, i) {
			bH.fn[e] = function(b5, b7, b6) {
				return this.animate(i, b5, b7, b6)
			}
		});
		bH.timers = [];
		bH.fx.tick = function() {
			var b6, b5 = bH.timers, e = 0;
			M = bH.now();
			for (; e < b5.length; e++) {
				b6 = b5[e];
				if (!b6() && b5[e] === b6) {
					b5.splice(e--, 1)
				}
			}
			if (!b5.length) {
				bH.fx.stop()
			}
			M = undefined
		}
		;
		bH.fx.timer = function(e) {
			bH.timers.push(e);
			if (e()) {
				bH.fx.start()
			} else {
				bH.timers.pop()
			}
		}
		;
		bH.fx.interval = 13;
		bH.fx.start = function() {
			if (!ad) {
				ad = setInterval(bH.fx.tick, bH.fx.interval)
			}
		}
		;
		bH.fx.stop = function() {
			clearInterval(ad);
			ad = null
		}
		;
		bH.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		};
		bH.fn.delay = function(i, e) {
			i = bH.fx ? bH.fx.speeds[i] || i : i;
			e = e || "fx";
			return this.queue(e, function(b6, b5) {
				var b7 = setTimeout(b6, i);
				b5.stop = function() {
					clearTimeout(b7)
				}
			})
		}
		;
		(function() {
			var b5, b7, e, i, b6;
			b7 = n.createElement("div");
			b7.setAttribute("className", "t");
			b7.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
			i = b7.getElementsByTagName("a")[0];
			e = n.createElement("select");
			b6 = e.appendChild(n.createElement("option"));
			b5 = b7.getElementsByTagName("input")[0];
			i.style.cssText = "top:1px";
			C.getSetAttribute = b7.className !== "t";
			C.style = /top/.test(i.getAttribute("style"));
			C.hrefNormalized = i.getAttribute("href") === "/a";
			C.checkOn = !!b5.value;
			C.optSelected = b6.selected;
			C.enctype = !!n.createElement("form").enctype;
			e.disabled = true;
			C.optDisabled = !b6.disabled;
			b5 = n.createElement("input");
			b5.setAttribute("value", "");
			C.input = b5.getAttribute("value") === "";
			b5.value = "t";
			b5.setAttribute("type", "radio");
			C.radioValue = b5.value === "t"
		}
		)();
		var ak = /\r/g;
		bH.fn.extend({
			val: function(b6) {
				var e, i, b7, b5 = this[0];
				if (!arguments.length) {
					if (b5) {
						e = bH.valHooks[b5.type] || bH.valHooks[b5.nodeName.toLowerCase()];
						if (e && "get"in e && (i = e.get(b5, "value")) !== undefined) {
							return i
						}
						i = b5.value;
						return typeof i === "string" ? i.replace(ak, "") : i == null ? "" : i
					}
					return
				}
				b7 = bH.isFunction(b6);
				return this.each(function(b8) {
					var b9;
					if (this.nodeType !== 1) {
						return
					}
					if (b7) {
						b9 = b6.call(this, b8, bH(this).val())
					} else {
						b9 = b6
					}
					if (b9 == null) {
						b9 = ""
					} else {
						if (typeof b9 === "number") {
							b9 += ""
						} else {
							if (bH.isArray(b9)) {
								b9 = bH.map(b9, function(ca) {
									return ca == null ? "" : ca + ""
								})
							}
						}
					}
					e = bH.valHooks[this.type] || bH.valHooks[this.nodeName.toLowerCase()];
					if (!e || !("set"in e) || e.set(this, b9, "value") === undefined) {
						this.value = b9
					}
				})
			}
		});
		bH.extend({
			valHooks: {
				option: {
					get: function(e) {
						var i = bH.find.attr(e, "value");
						return i != null ? i : bH.trim(bH.text(e))
					}
				},
				select: {
					get: function(e) {
						var ca, b6, cc = e.options, b8 = e.selectedIndex, b7 = e.type === "select-one" || b8 < 0, cb = b7 ? null : [], b9 = b7 ? b8 + 1 : cc.length, b5 = b8 < 0 ? b9 : b7 ? b8 : 0;
						for (; b5 < b9; b5++) {
							b6 = cc[b5];
							if ((b6.selected || b5 === b8) && (C.optDisabled ? !b6.disabled : b6.getAttribute("disabled") === null) && (!b6.parentNode.disabled || !bH.nodeName(b6.parentNode, "optgroup"))) {
								ca = bH(b6).val();
								if (b7) {
									return ca
								}
								cb.push(ca)
							}
						}
						return cb
					},
					set: function(b9, ca) {
						var cb, b8, b6 = b9.options, e = bH.makeArray(ca), b7 = b6.length;
						while (b7--) {
							b8 = b6[b7];
							if (bH.inArray(bH.valHooks.option.get(b8), e) >= 0) {
								try {
									b8.selected = cb = true
								} catch (b5) {
									b8.scrollHeight
								}
							} else {
								b8.selected = false
							}
						}
						if (!cb) {
							b9.selectedIndex = -1
						}
						return b6
					}
				}
			}
		});
		bH.each(["radio", "checkbox"], function() {
			bH.valHooks[this] = {
				set: function(e, i) {
					if (bH.isArray(i)) {
						return (e.checked = bH.inArray(bH(e).val(), i) >= 0)
					}
				}
			};
			if (!C.checkOn) {
				bH.valHooks[this].get = function(e) {
					return e.getAttribute("value") === null ? "on" : e.value
				}
			}
		});
		var a9, b2, bN = bH.expr.attrHandle, ap = /^(?:checked|selected)$/i, bM = C.getSetAttribute, bE = C.input;
		bH.fn.extend({
			attr: function(e, i) {
				return aA(this, bH.attr, e, i, arguments.length > 1)
			},
			removeAttr: function(e) {
				return this.each(function() {
					bH.removeAttr(this, e)
				})
			}
		});
		bH.extend({
			attr: function(b7, b6, b8) {
				var e, b5, i = b7.nodeType;
				if (!b7 || i === 3 || i === 8 || i === 2) {
					return
				}
				if (typeof b7.getAttribute === aB) {
					return bH.prop(b7, b6, b8)
				}
				if (i !== 1 || !bH.isXMLDoc(b7)) {
					b6 = b6.toLowerCase();
					e = bH.attrHooks[b6] || (bH.expr.match.bool.test(b6) ? b2 : a9)
				}
				if (b8 !== undefined) {
					if (b8 === null) {
						bH.removeAttr(b7, b6)
					} else {
						if (e && "set"in e && (b5 = e.set(b7, b8, b6)) !== undefined) {
							return b5
						} else {
							b7.setAttribute(b6, b8 + "");
							return b8
						}
					}
				} else {
					if (e && "get"in e && (b5 = e.get(b7, b6)) !== null) {
						return b5
					} else {
						b5 = bH.find.attr(b7, b6);
						return b5 == null ? undefined : b5
					}
				}
			},
			removeAttr: function(b6, b8) {
				var e, b7, b5 = 0, b9 = b8 && b8.match(aE);
				if (b9 && b6.nodeType === 1) {
					while ((e = b9[b5++])) {
						b7 = bH.propFix[e] || e;
						if (bH.expr.match.bool.test(e)) {
							if (bE && bM || !ap.test(e)) {
								b6[b7] = false
							} else {
								b6[bH.camelCase("default-" + e)] = b6[b7] = false
							}
						} else {
							bH.attr(b6, e, "")
						}
						b6.removeAttribute(bM ? e : b7)
					}
				}
			},
			attrHooks: {
				type: {
					set: function(e, i) {
						if (!C.radioValue && i === "radio" && bH.nodeName(e, "input")) {
							var b5 = e.value;
							e.setAttribute("type", i);
							if (b5) {
								e.value = b5
							}
							return i
						}
					}
				}
			}
		});
		b2 = {
			set: function(i, b5, e) {
				if (b5 === false) {
					bH.removeAttr(i, e)
				} else {
					if (bE && bM || !ap.test(e)) {
						i.setAttribute(!bM && bH.propFix[e] || e, e)
					} else {
						i[bH.camelCase("default-" + e)] = i[e] = true
					}
				}
				return e
			}
		};
		bH.each(bH.expr.match.bool.source.match(/\w+/g), function(b6, b5) {
			var e = bN[b5] || bH.find.attr;
			bN[b5] = bE && bM || !ap.test(b5) ? function(b8, b7, ca) {
				var i, b9;
				if (!ca) {
					b9 = bN[b7];
					bN[b7] = i;
					i = e(b8, b7, ca) != null ? b7.toLowerCase() : null;
					bN[b7] = b9
				}
				return i
			}
			: function(b7, i, b8) {
				if (!b8) {
					return b7[bH.camelCase("default-" + i)] ? i.toLowerCase() : null
				}
			}
		});
		if (!bE || !bM) {
			bH.attrHooks.value = {
				set: function(i, b5, e) {
					if (bH.nodeName(i, "input")) {
						i.defaultValue = b5
					} else {
						return a9 && a9.set(i, b5, e)
					}
				}
			}
		}
		if (!bM) {
			a9 = {
				set: function(b5, b6, i) {
					var e = b5.getAttributeNode(i);
					if (!e) {
						b5.setAttributeNode((e = b5.ownerDocument.createAttribute(i)))
					}
					e.value = b6 += "";
					if (i === "value" || b6 === b5.getAttribute(i)) {
						return b6
					}
				}
			};
			bN.id = bN.name = bN.coords = function(b5, i, b6) {
				var e;
				if (!b6) {
					return (e = b5.getAttributeNode(i)) && e.value !== "" ? e.value : null
				}
			}
			;
			bH.valHooks.button = {
				get: function(b5, i) {
					var e = b5.getAttributeNode(i);
					if (e && e.specified) {
						return e.value
					}
				},
				set: a9.set
			};
			bH.attrHooks.contenteditable = {
				set: function(i, b5, e) {
					a9.set(i, b5 === "" ? false : b5, e)
				}
			};
			bH.each(["width", "height"], function(b5, e) {
				bH.attrHooks[e] = {
					set: function(i, b6) {
						if (b6 === "") {
							i.setAttribute(e, "auto");
							return b6
						}
					}
				}
			})
		}
		if (!C.style) {
			bH.attrHooks.style = {
				get: function(e) {
					return e.style.cssText || undefined
				},
				set: function(e, i) {
					return (e.style.cssText = i + "")
				}
			}
		}
		var aI = /^(?:input|select|textarea|button|object)$/i
		  , E = /^(?:a|area)$/i;
		bH.fn.extend({
			prop: function(e, i) {
				return aA(this, bH.prop, e, i, arguments.length > 1)
			},
			removeProp: function(e) {
				e = bH.propFix[e] || e;
				return this.each(function() {
					try {
						this[e] = undefined;
						delete this[e]
					} catch (i) {}
				})
			}
		});
		bH.extend({
			propFix: {
				"for": "htmlFor",
				"class": "className"
			},
			prop: function(b8, b6, b9) {
				var b5, e, b7, i = b8.nodeType;
				if (!b8 || i === 3 || i === 8 || i === 2) {
					return
				}
				b7 = i !== 1 || !bH.isXMLDoc(b8);
				if (b7) {
					b6 = bH.propFix[b6] || b6;
					e = bH.propHooks[b6]
				}
				if (b9 !== undefined) {
					return e && "set"in e && (b5 = e.set(b8, b9, b6)) !== undefined ? b5 : (b8[b6] = b9)
				} else {
					return e && "get"in e && (b5 = e.get(b8, b6)) !== null ? b5 : b8[b6]
				}
			},
			propHooks: {
				tabIndex: {
					get: function(i) {
						var e = bH.find.attr(i, "tabindex");
						return e ? parseInt(e, 10) : aI.test(i.nodeName) || E.test(i.nodeName) && i.href ? 0 : -1
					}
				}
			}
		});
		if (!C.hrefNormalized) {
			bH.each(["href", "src"], function(b5, e) {
				bH.propHooks[e] = {
					get: function(i) {
						return i.getAttribute(e, 4)
					}
				}
			})
		}
		if (!C.optSelected) {
			bH.propHooks.selected = {
				get: function(i) {
					var e = i.parentNode;
					if (e) {
						e.selectedIndex;
						if (e.parentNode) {
							e.parentNode.selectedIndex
						}
					}
					return null
				}
			}
		}
		bH.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
			bH.propFix[this.toLowerCase()] = this
		});
		if (!C.enctype) {
			bH.propFix.enctype = "encoding"
		}
		var bK = /[\t\r\n\f]/g;
		bH.fn.extend({
			addClass: function(cc) {
				var b6, b5, cd, ca, b7, e, b8 = 0, b9 = this.length, cb = typeof cc === "string" && cc;
				if (bH.isFunction(cc)) {
					return this.each(function(i) {
						bH(this).addClass(cc.call(this, i, this.className))
					})
				}
				if (cb) {
					b6 = (cc || "").match(aE) || [];
					for (; b8 < b9; b8++) {
						b5 = this[b8];
						cd = b5.nodeType === 1 && (b5.className ? (" " + b5.className + " ").replace(bK, " ") : " ");
						if (cd) {
							b7 = 0;
							while ((ca = b6[b7++])) {
								if (cd.indexOf(" " + ca + " ") < 0) {
									cd += ca + " "
								}
							}
							e = bH.trim(cd);
							if (b5.className !== e) {
								b5.className = e
							}
						}
					}
				}
				return this
			},
			removeClass: function(cc) {
				var b6, b5, cd, ca, b7, e, b8 = 0, b9 = this.length, cb = arguments.length === 0 || typeof cc === "string" && cc;
				if (bH.isFunction(cc)) {
					return this.each(function(i) {
						bH(this).removeClass(cc.call(this, i, this.className))
					})
				}
				if (cb) {
					b6 = (cc || "").match(aE) || [];
					for (; b8 < b9; b8++) {
						b5 = this[b8];
						cd = b5.nodeType === 1 && (b5.className ? (" " + b5.className + " ").replace(bK, " ") : "");
						if (cd) {
							b7 = 0;
							while ((ca = b6[b7++])) {
								while (cd.indexOf(" " + ca + " ") >= 0) {
									cd = cd.replace(" " + ca + " ", " ")
								}
							}
							e = cc ? bH.trim(cd) : "";
							if (b5.className !== e) {
								b5.className = e
							}
						}
					}
				}
				return this
			},
			toggleClass: function(b5, e) {
				var i = typeof b5;
				if (typeof e === "boolean" && i === "string") {
					return e ? this.addClass(b5) : this.removeClass(b5)
				}
				if (bH.isFunction(b5)) {
					return this.each(function(b6) {
						bH(this).toggleClass(b5.call(this, b6, this.className, e), e)
					})
				}
				return this.each(function() {
					if (i === "string") {
						var b8, b7 = 0, b6 = bH(this), b9 = b5.match(aE) || [];
						while ((b8 = b9[b7++])) {
							if (b6.hasClass(b8)) {
								b6.removeClass(b8)
							} else {
								b6.addClass(b8)
							}
						}
					} else {
						if (i === aB || i === "boolean") {
							if (this.className) {
								bH._data(this, "__className__", this.className)
							}
							this.className = this.className || b5 === false ? "" : bH._data(this, "__className__") || ""
						}
					}
				})
			},
			hasClass: function(e) {
				var b7 = " " + e + " "
				  , b6 = 0
				  , b5 = this.length;
				for (; b6 < b5; b6++) {
					if (this[b6].nodeType === 1 && (" " + this[b6].className + " ").replace(bK, " ").indexOf(b7) >= 0) {
						return true
					}
				}
				return false
			}
		});
		bH.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function(b5, e) {
			bH.fn[e] = function(b6, i) {
				return arguments.length > 0 ? this.on(e, null, b6, i) : this.trigger(e)
			}
		});
		bH.fn.extend({
			hover: function(e, i) {
				return this.mouseenter(e).mouseleave(i || e)
			},
			bind: function(e, b5, i) {
				return this.on(e, null, b5, i)
			},
			unbind: function(e, i) {
				return this.off(e, null, i)
			},
			delegate: function(e, i, b6, b5) {
				return this.on(i, e, b6, b5)
			},
			undelegate: function(e, i, b5) {
				return arguments.length === 1 ? this.off(e, "**") : this.off(i, e || "**", b5)
			}
		});
		var bo = bH.now();
		var bP = (/\?/);
		var a0 = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
		bH.parseJSON = function(e) {
			if (a4.JSON && a4.JSON.parse) {
				return a4.JSON.parse(e + "")
			}
			var b6, b5 = null, i = bH.trim(e + "");
			return i && !bH.trim(i.replace(a0, function(b9, b7, b8, ca) {
				if (b6 && b7) {
					b5 = 0
				}
				if (b5 === 0) {
					return b9
				}
				b6 = b8 || b7;
				b5 += !ca - !b8;
				return ""
			})) ? (Function("return " + i))() : bH.error("Invalid JSON: " + e)
		}
		;
		bH.parseXML = function(b6) {
			var i, b5;
			if (!b6 || typeof b6 !== "string") {
				return null
			}
			try {
				if (a4.DOMParser) {
					b5 = new DOMParser();
					i = b5.parseFromString(b6, "text/xml")
				} else {
					i = new ActiveXObject("Microsoft.XMLDOM");
					i.async = "false";
					i.loadXML(b6)
				}
			} catch (b7) {
				i = undefined
			}
			if (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) {
				bH.error("Invalid XML: " + b6)
			}
			return i
		}
		;
		var b3, Z, ao = /#.*$/, Q = /([?&])_=[^&]*/, ag = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, B = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, q = /^(?:GET|HEAD)$/, aJ = /^\/\//, aU = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, v = {}, a8 = {}, aW = "*/".concat("*");
		try {
			Z = location.href
		} catch (bh) {
			Z = n.createElement("a");
			Z.href = "";
			Z = Z.href
		}
		b3 = aU.exec(Z.toLowerCase()) || [];
		function bJ(e) {
			return function(b8, b9) {
				if (typeof b8 !== "string") {
					b9 = b8;
					b8 = "*"
				}
				var b5, b6 = 0, b7 = b8.toLowerCase().match(aE) || [];
				if (bH.isFunction(b9)) {
					while ((b5 = b7[b6++])) {
						if (b5.charAt(0) === "+") {
							b5 = b5.slice(1) || "*";
							(e[b5] = e[b5] || []).unshift(b9)
						} else {
							(e[b5] = e[b5] || []).push(b9)
						}
					}
				}
			}
		}
		function p(e, b5, b9, b6) {
			var i = {}
			  , b7 = (e === a8);
			function b8(ca) {
				var cb;
				i[ca] = true;
				bH.each(e[ca] || [], function(cd, cc) {
					var ce = cc(b5, b9, b6);
					if (typeof ce === "string" && !b7 && !i[ce]) {
						b5.dataTypes.unshift(ce);
						b8(ce);
						return false
					} else {
						if (b7) {
							return !(cb = ce)
						}
					}
				});
				return cb
			}
			return b8(b5.dataTypes[0]) || !i["*"] && b8("*")
		}
		function s(b5, b6) {
			var e, i, b7 = bH.ajaxSettings.flatOptions || {};
			for (i in b6) {
				if (b6[i] !== undefined) {
					(b7[i] ? b5 : (e || (e = {})))[i] = b6[i]
				}
			}
			if (e) {
				bH.extend(true, b5, e)
			}
			return b5
		}
		function g(cb, ca, b7) {
			var e, b6, b5, b8, i = cb.contents, b9 = cb.dataTypes;
			while (b9[0] === "*") {
				b9.shift();
				if (b6 === undefined) {
					b6 = cb.mimeType || ca.getResponseHeader("Content-Type")
				}
			}
			if (b6) {
				for (b8 in i) {
					if (i[b8] && i[b8].test(b6)) {
						b9.unshift(b8);
						break
					}
				}
			}
			if (b9[0]in b7) {
				b5 = b9[0]
			} else {
				for (b8 in b7) {
					if (!b9[0] || cb.converters[b8 + " " + b9[0]]) {
						b5 = b8;
						break
					}
					if (!e) {
						e = b8
					}
				}
				b5 = b5 || e
			}
			if (b5) {
				if (b5 !== b9[0]) {
					b9.unshift(b5)
				}
				return b7[b5]
			}
		}
		function af(cf, b7, cc, b5) {
			var i, ca, cd, b8, b6, ce = {}, cb = cf.dataTypes.slice();
			if (cb[1]) {
				for (cd in cf.converters) {
					ce[cd.toLowerCase()] = cf.converters[cd]
				}
			}
			ca = cb.shift();
			while (ca) {
				if (cf.responseFields[ca]) {
					cc[cf.responseFields[ca]] = b7
				}
				if (!b6 && b5 && cf.dataFilter) {
					b7 = cf.dataFilter(b7, cf.dataType)
				}
				b6 = ca;
				ca = cb.shift();
				if (ca) {
					if (ca === "*") {
						ca = b6
					} else {
						if (b6 !== "*" && b6 !== ca) {
							cd = ce[b6 + " " + ca] || ce["* " + ca];
							if (!cd) {
								for (i in ce) {
									b8 = i.split(" ");
									if (b8[1] === ca) {
										cd = ce[b6 + " " + b8[0]] || ce["* " + b8[0]];
										if (cd) {
											if (cd === true) {
												cd = ce[i]
											} else {
												if (ce[i] !== true) {
													ca = b8[0];
													cb.unshift(b8[1])
												}
											}
											break
										}
									}
								}
							}
							if (cd !== true) {
								if (cd && cf["throws"]) {
									b7 = cd(b7)
								} else {
									try {
										b7 = cd(b7)
									} catch (b9) {
										return {
											state: "parsererror",
											error: cd ? b9 : "No conversion from " + b6 + " to " + ca
										}
									}
								}
							}
						}
					}
				}
			}
			return {
				state: "success",
				data: b7
			}
		}
		bH.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: Z,
				type: "GET",
				isLocal: B.test(b3[1]),
				global: true,
				processData: true,
				async: true,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": aW,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": true,
					"text json": bH.parseJSON,
					"text xml": bH.parseXML
				},
				flatOptions: {
					url: true,
					context: true
				}
			},
			ajaxSetup: function(i, e) {
				return e ? s(s(i, bH.ajaxSettings), e) : s(bH.ajaxSettings, i)
			},
			ajaxPrefilter: bJ(v),
			ajaxTransport: bJ(a8),
			ajax: function(b9, b6) {
				if (typeof b9 === "object") {
					b6 = b9;
					b9 = undefined
				}
				b6 = b6 || {};
				var ci, ck, ca, cp, ce, b5, cl, b7, cd = bH.ajaxSetup({}, b6), cr = cd.context || cd, cg = cd.context && (cr.nodeType || cr.jquery) ? bH(cr) : bH.event, cq = bH.Deferred(), cn = bH.Callbacks("once memory"), cb = cd.statusCode || {}, ch = {}, co = {}, b8 = 0, cc = "canceled", cj = {
					readyState: 0,
					getResponseHeader: function(i) {
						var e;
						if (b8 === 2) {
							if (!b7) {
								b7 = {};
								while ((e = ag.exec(cp))) {
									b7[e[1].toLowerCase()] = e[2]
								}
							}
							e = b7[i.toLowerCase()]
						}
						return e == null ? null : e
					},
					getAllResponseHeaders: function() {
						return b8 === 2 ? cp : null
					},
					setRequestHeader: function(i, cs) {
						var e = i.toLowerCase();
						if (!b8) {
							i = co[e] = co[e] || i;
							ch[i] = cs
						}
						return this
					},
					overrideMimeType: function(e) {
						if (!b8) {
							cd.mimeType = e
						}
						return this
					},
					statusCode: function(i) {
						var e;
						if (i) {
							if (b8 < 2) {
								for (e in i) {
									cb[e] = [cb[e], i[e]]
								}
							} else {
								cj.always(i[cj.status])
							}
						}
						return this
					},
					abort: function(i) {
						var e = i || cc;
						if (cl) {
							cl.abort(e)
						}
						cf(0, e);
						return this
					}
				};
				cq.promise(cj).complete = cn.add;
				cj.success = cj.done;
				cj.error = cj.fail;
				cd.url = ((b9 || cd.url || Z) + "").replace(ao, "").replace(aJ, b3[1] + "//");
				cd.type = b6.method || b6.type || cd.method || cd.type;
				cd.dataTypes = bH.trim(cd.dataType || "*").toLowerCase().match(aE) || [""];
				if (cd.crossDomain == null) {
					ci = aU.exec(cd.url.toLowerCase());
					cd.crossDomain = !!(ci && (ci[1] !== b3[1] || ci[2] !== b3[2] || (ci[3] || (ci[1] === "http:" ? "80" : "443")) !== (b3[3] || (b3[1] === "http:" ? "80" : "443"))))
				}
				if (cd.data && cd.processData && typeof cd.data !== "string") {
					cd.data = bH.param(cd.data, cd.traditional)
				}
				p(v, cd, b6, cj);
				if (b8 === 2) {
					return cj
				}
				b5 = bH.event && cd.global;
				if (b5 && bH.active++ === 0) {
					bH.event.trigger("ajaxStart")
				}
				cd.type = cd.type.toUpperCase();
				cd.hasContent = !q.test(cd.type);
				ca = cd.url;
				if (!cd.hasContent) {
					if (cd.data) {
						ca = (cd.url += (bP.test(ca) ? "&" : "?") + cd.data);
						delete cd.data
					}
					if (cd.cache === false) {
						cd.url = Q.test(ca) ? ca.replace(Q, "$1_=" + bo++) : ca + (bP.test(ca) ? "&" : "?") + "_=" + bo++
					}
				}
				if (cd.ifModified) {
					if (bH.lastModified[ca]) {
						cj.setRequestHeader("If-Modified-Since", bH.lastModified[ca])
					}
					if (bH.etag[ca]) {
						cj.setRequestHeader("If-None-Match", bH.etag[ca])
					}
				}
				if (cd.data && cd.hasContent && cd.contentType !== false || b6.contentType) {
					cj.setRequestHeader("Content-Type", cd.contentType)
				}
				cj.setRequestHeader("Accept", cd.dataTypes[0] && cd.accepts[cd.dataTypes[0]] ? cd.accepts[cd.dataTypes[0]] + (cd.dataTypes[0] !== "*" ? ", " + aW + "; q=0.01" : "") : cd.accepts["*"]);
				for (ck in cd.headers) {
					cj.setRequestHeader(ck, cd.headers[ck])
				}
				if (cd.beforeSend && (cd.beforeSend.call(cr, cj, cd) === false || b8 === 2)) {
					return cj.abort()
				}
				cc = "abort";
				for (ck in {
					success: 1,
					error: 1,
					complete: 1
				}) {
					cj[ck](cd[ck])
				}
				cl = p(a8, cd, b6, cj);
				if (!cl) {
					cf(-1, "No Transport")
				} else {
					cj.readyState = 1;
					if (b5) {
						cg.trigger("ajaxSend", [cj, cd])
					}
					if (cd.async && cd.timeout > 0) {
						ce = setTimeout(function() {
							cj.abort("timeout")
						}, cd.timeout)
					}
					try {
						b8 = 1;
						cl.send(ch, cf)
					} catch (cm) {
						if (b8 < 2) {
							cf(-1, cm)
						} else {
							throw cm
						}
					}
				}
				function cf(cv, i, cw, ct) {
					var e, cz, cx, cu, cy, cs = i;
					if (b8 === 2) {
						return
					}
					b8 = 2;
					if (ce) {
						clearTimeout(ce)
					}
					cl = undefined;
					cp = ct || "";
					cj.readyState = cv > 0 ? 4 : 0;
					e = cv >= 200 && cv < 300 || cv === 304;
					if (cw) {
						cu = g(cd, cj, cw)
					}
					cu = af(cd, cu, cj, e);
					if (e) {
						if (cd.ifModified) {
							cy = cj.getResponseHeader("Last-Modified");
							if (cy) {
								bH.lastModified[ca] = cy
							}
							cy = cj.getResponseHeader("etag");
							if (cy) {
								bH.etag[ca] = cy
							}
						}
						if (cv === 204 || cd.type === "HEAD") {
							cs = "nocontent"
						} else {
							if (cv === 304) {
								cs = "notmodified"
							} else {
								cs = cu.state;
								cz = cu.data;
								cx = cu.error;
								e = !cx
							}
						}
					} else {
						cx = cs;
						if (cv || !cs) {
							cs = "error";
							if (cv < 0) {
								cv = 0
							}
						}
					}
					cj.status = cv;
					cj.statusText = (i || cs) + "";
					if (e) {
						cq.resolveWith(cr, [cz, cs, cj])
					} else {
						cq.rejectWith(cr, [cj, cs, cx])
					}
					cj.statusCode(cb);
					cb = undefined;
					if (b5) {
						cg.trigger(e ? "ajaxSuccess" : "ajaxError", [cj, cd, e ? cz : cx])
					}
					cn.fireWith(cr, [cj, cs]);
					if (b5) {
						cg.trigger("ajaxComplete", [cj, cd]);
						if (!(--bH.active)) {
							bH.event.trigger("ajaxStop")
						}
					}
				}
				return cj
			},
			getJSON: function(e, i, b5) {
				return bH.get(e, i, b5, "json")
			},
			getScript: function(e, i) {
				return bH.get(e, undefined, i, "script")
			}
		});
		bH.each(["get", "post"], function(e, b5) {
			bH[b5] = function(i, b7, b8, b6) {
				if (bH.isFunction(b7)) {
					b6 = b6 || b8;
					b8 = b7;
					b7 = undefined
				}
				return bH.ajax({
					url: i,
					type: b5,
					dataType: b6,
					data: b7,
					success: b8
				})
			}
		});
		bH._evalUrl = function(e) {
			return bH.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: false,
				global: false,
				"throws": true
			})
		}
		;
		bH.fn.extend({
			wrapAll: function(e) {
				if (bH.isFunction(e)) {
					return this.each(function(b5) {
						bH(this).wrapAll(e.call(this, b5))
					})
				}
				if (this[0]) {
					var i = bH(e, this[0].ownerDocument).eq(0).clone(true);
					if (this[0].parentNode) {
						i.insertBefore(this[0])
					}
					i.map(function() {
						var b5 = this;
						while (b5.firstChild && b5.firstChild.nodeType === 1) {
							b5 = b5.firstChild
						}
						return b5
					}).append(this)
				}
				return this
			},
			wrapInner: function(e) {
				if (bH.isFunction(e)) {
					return this.each(function(b5) {
						bH(this).wrapInner(e.call(this, b5))
					})
				}
				return this.each(function() {
					var i = bH(this)
					  , b5 = i.contents();
					if (b5.length) {
						b5.wrapAll(e)
					} else {
						i.append(e)
					}
				})
			},
			wrap: function(e) {
				var i = bH.isFunction(e);
				return this.each(function(b5) {
					bH(this).wrapAll(i ? e.call(this, b5) : e)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					if (!bH.nodeName(this, "body")) {
						bH(this).replaceWith(this.childNodes)
					}
				}).end()
			}
		});
		bH.expr.filters.hidden = function(e) {
			return e.offsetWidth <= 0 && e.offsetHeight <= 0 || (!C.reliableHiddenOffsets() && ((e.style && e.style.display) || bH.css(e, "display")) === "none")
		}
		;
		bH.expr.filters.visible = function(e) {
			return !bH.expr.filters.hidden(e)
		}
		;
		var bv = /%20/g
		  , aR = /\[\]$/
		  , W = /\r?\n/g
		  , b = /^(?:submit|button|image|reset|file)$/i
		  , at = /^(?:input|select|textarea|keygen)/i;
		function j(b5, b7, i, b6) {
			var e;
			if (bH.isArray(b7)) {
				bH.each(b7, function(b9, b8) {
					if (i || aR.test(b5)) {
						b6(b5, b8)
					} else {
						j(b5 + "[" + (typeof b8 === "object" ? b9 : "") + "]", b8, i, b6)
					}
				})
			} else {
				if (!i && bH.type(b7) === "object") {
					for (e in b7) {
						j(b5 + "[" + e + "]", b7[e], i, b6)
					}
				} else {
					b6(b5, b7)
				}
			}
		}
		bH.param = function(e, b5) {
			var b6, i = [], b7 = function(b8, b9) {
				b9 = bH.isFunction(b9) ? b9() : (b9 == null ? "" : b9);
				i[i.length] = encodeURIComponent(b8) + "=" + encodeURIComponent(b9)
			};
			if (b5 === undefined) {
				b5 = bH.ajaxSettings && bH.ajaxSettings.traditional
			}
			if (bH.isArray(e) || (e.jquery && !bH.isPlainObject(e))) {
				bH.each(e, function() {
					b7(this.name, this.value)
				})
			} else {
				for (b6 in e) {
					j(b6, e[b6], b5, b7)
				}
			}
			return i.join("&").replace(bv, "+")
		}
		;
		bH.fn.extend({
			serialize: function() {
				return bH.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					var e = bH.prop(this, "elements");
					return e ? bH.makeArray(e) : this
				}).filter(function() {
					var e = this.type;
					return this.name && !bH(this).is(":disabled") && at.test(this.nodeName) && !b.test(e) && (this.checked || !aL.test(e))
				}).map(function(e, b5) {
					var b6 = bH(this).val();
					return b6 == null ? null : bH.isArray(b6) ? bH.map(b6, function(i) {
						return {
							name: b5.name,
							value: i.replace(W, "\r\n")
						}
					}) : {
						name: b5.name,
						value: b6.replace(W, "\r\n")
					}
				}).get()
			}
		});
		bH.ajaxSettings.xhr = a4.ActiveXObject !== undefined ? function() {
			return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && bD() || bf()
		}
		: bD;
		var az = 0
		  , ai = {}
		  , ax = bH.ajaxSettings.xhr();
		if (a4.attachEvent) {
			a4.attachEvent("onunload", function() {
				for (var e in ai) {
					ai[e](undefined, true)
				}
			})
		}
		C.cors = !!ax && ("withCredentials"in ax);
		ax = C.ajax = !!ax;
		if (ax) {
			bH.ajaxTransport(function(e) {
				if (!e.crossDomain || C.cors) {
					var i;
					return {
						send: function(b8, b5) {
							var b6, b7 = e.xhr(), b9 = ++az;
							b7.open(e.type, e.url, e.async, e.username, e.password);
							if (e.xhrFields) {
								for (b6 in e.xhrFields) {
									b7[b6] = e.xhrFields[b6]
								}
							}
							if (e.mimeType && b7.overrideMimeType) {
								b7.overrideMimeType(e.mimeType)
							}
							if (!e.crossDomain && !b8["X-Requested-With"]) {
								b8["X-Requested-With"] = "XMLHttpRequest"
							}
							for (b6 in b8) {
								if (b8[b6] !== undefined) {
									b7.setRequestHeader(b6, b8[b6] + "")
								}
							}
							b7.send((e.hasContent && e.data) || null);
							i = function(cc, cb) {
								var ca, cf, cd;
								if (i && (cb || b7.readyState === 4)) {
									delete ai[b9];
									i = undefined;
									b7.onreadystatechange = bH.noop;
									if (cb) {
										if (b7.readyState !== 4) {
											b7.abort()
										}
									} else {
										cd = {};
										ca = b7.status;
										if (typeof b7.responseText === "string") {
											cd.text = b7.responseText
										}
										try {
											cf = b7.statusText
										} catch (ce) {
											cf = ""
										}
										if (!ca && e.isLocal && !e.crossDomain) {
											ca = cd.text ? 200 : 404
										} else {
											if (ca === 1223) {
												ca = 204
											}
										}
									}
								}
								if (cd) {
									b5(ca, cf, cd, b7.getAllResponseHeaders())
								}
							}
							;
							if (!e.async) {
								i()
							} else {
								if (b7.readyState === 4) {
									setTimeout(i)
								} else {
									b7.onreadystatechange = ai[b9] = i
								}
							}
						},
						abort: function() {
							if (i) {
								i(undefined, true)
							}
						}
					}
				}
			})
		}
		function bD() {
			try {
				return new a4.XMLHttpRequest()
			} catch (i) {}
		}
		function bf() {
			try {
				return new a4.ActiveXObject("Microsoft.XMLHTTP")
			} catch (i) {}
		}
		bH.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function(e) {
					bH.globalEval(e);
					return e
				}
			}
		});
		bH.ajaxPrefilter("script", function(e) {
			if (e.cache === undefined) {
				e.cache = false
			}
			if (e.crossDomain) {
				e.type = "GET";
				e.global = false
			}
		});
		bH.ajaxTransport("script", function(b5) {
			if (b5.crossDomain) {
				var e, i = n.head || bH("head")[0] || n.documentElement;
				return {
					send: function(b6, b7) {
						e = n.createElement("script");
						e.async = true;
						if (b5.scriptCharset) {
							e.charset = b5.scriptCharset
						}
						e.src = b5.url;
						e.onload = e.onreadystatechange = function(b9, b8) {
							if (b8 || !e.readyState || /loaded|complete/.test(e.readyState)) {
								e.onload = e.onreadystatechange = null;
								if (e.parentNode) {
									e.parentNode.removeChild(e)
								}
								e = null;
								if (!b8) {
									b7(200, "success")
								}
							}
						}
						;
						i.insertBefore(e, i.firstChild)
					},
					abort: function() {
						if (e) {
							e.onload(undefined, true)
						}
					}
				}
			}
		});
		var br = []
		  , a7 = /(=)\?(?=&|$)|\?\?/;
		bH.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var e = br.pop() || (bH.expando + "_" + (bo++));
				this[e] = true;
				return e
			}
		});
		bH.ajaxPrefilter("json jsonp", function(b6, e, b7) {
			var b9, i, b5, b8 = b6.jsonp !== false && (a7.test(b6.url) ? "url" : typeof b6.data === "string" && !(b6.contentType || "").indexOf("application/x-www-form-urlencoded") && a7.test(b6.data) && "data");
			if (b8 || b6.dataTypes[0] === "jsonp") {
				b9 = b6.jsonpCallback = bH.isFunction(b6.jsonpCallback) ? b6.jsonpCallback() : b6.jsonpCallback;
				if (b8) {
					b6[b8] = b6[b8].replace(a7, "$1" + b9)
				} else {
					if (b6.jsonp !== false) {
						b6.url += (bP.test(b6.url) ? "&" : "?") + b6.jsonp + "=" + b9
					}
				}
				b6.converters["script json"] = function() {
					if (!b5) {
						bH.error(b9 + " was not called")
					}
					return b5[0]
				}
				;
				b6.dataTypes[0] = "json";
				i = a4[b9];
				a4[b9] = function() {
					b5 = arguments
				}
				;
				b7.always(function() {
					a4[b9] = i;
					if (b6[b9]) {
						b6.jsonpCallback = e.jsonpCallback;
						br.push(b9)
					}
					if (b5 && bH.isFunction(i)) {
						i(b5[0])
					}
					b5 = i = undefined
				});
				return "script"
			}
		});
		bH.parseHTML = function(b7, b5, b6) {
			if (!b7 || typeof b7 !== "string") {
				return null
			}
			if (typeof b5 === "boolean") {
				b6 = b5;
				b5 = false
			}
			b5 = b5 || n;
			var i = a.exec(b7)
			  , e = !b6 && [];
			if (i) {
				return [b5.createElement(i[1])]
			}
			i = bH.buildFragment([b7], b5, e);
			if (e && e.length) {
				bH(e).remove()
			}
			return bH.merge([], i.childNodes)
		}
		;
		var b0 = bH.fn.load;
		bH.fn.load = function(b6, b9, ca) {
			if (typeof b6 !== "string" && b0) {
				return b0.apply(this, arguments)
			}
			var e, b5, b7, i = this, b8 = b6.indexOf(" ");
			if (b8 >= 0) {
				e = bH.trim(b6.slice(b8, b6.length));
				b6 = b6.slice(0, b8)
			}
			if (bH.isFunction(b9)) {
				ca = b9;
				b9 = undefined
			} else {
				if (b9 && typeof b9 === "object") {
					b7 = "POST"
				}
			}
			if (i.length > 0) {
				bH.ajax({
					url: b6,
					type: b7,
					dataType: "html",
					data: b9
				}).done(function(cb) {
					b5 = arguments;
					i.html(e ? bH("<div>").append(bH.parseHTML(cb)).find(e) : cb)
				}).complete(ca && function(cc, cb) {
					i.each(ca, b5 || [cc.responseText, cb, cc])
				}
				)
			}
			return this
		}
		;
		bH.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, b5) {
			bH.fn[b5] = function(i) {
				return this.on(b5, i)
			}
		});
		bH.expr.filters.animated = function(e) {
			return bH.grep(bH.timers, function(i) {
				return e === i.elem
			}).length
		}
		;
		var bW = a4.document.documentElement;
		function bq(e) {
			return bH.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
		}
		bH.offset = {
			setOffset: function(b6, cg, ca) {
				var cc, b9, e, b7, b5, ce, cf, cb = bH.css(b6, "position"), b8 = bH(b6), cd = {};
				if (cb === "static") {
					b6.style.position = "relative"
				}
				b5 = b8.offset();
				e = bH.css(b6, "top");
				ce = bH.css(b6, "left");
				cf = (cb === "absolute" || cb === "fixed") && bH.inArray("auto", [e, ce]) > -1;
				if (cf) {
					cc = b8.position();
					b7 = cc.top;
					b9 = cc.left
				} else {
					b7 = parseFloat(e) || 0;
					b9 = parseFloat(ce) || 0
				}
				if (bH.isFunction(cg)) {
					cg = cg.call(b6, ca, b5)
				}
				if (cg.top != null) {
					cd.top = (cg.top - b5.top) + b7
				}
				if (cg.left != null) {
					cd.left = (cg.left - b5.left) + b9
				}
				if ("using"in cg) {
					cg.using.call(b6, cd)
				} else {
					b8.css(cd)
				}
			}
		};
		bH.fn.extend({
			offset: function(i) {
				if (arguments.length) {
					return i === undefined ? this : this.each(function(b9) {
						bH.offset.setOffset(this, i, b9)
					})
				}
				var e, b8, b6 = {
					top: 0,
					left: 0
				}, b5 = this[0], b7 = b5 && b5.ownerDocument;
				if (!b7) {
					return
				}
				e = b7.documentElement;
				if (!bH.contains(e, b5)) {
					return b6
				}
				if (typeof b5.getBoundingClientRect !== aB) {
					b6 = b5.getBoundingClientRect()
				}
				b8 = bq(b7);
				return {
					top: b6.top + (b8.pageYOffset || e.scrollTop) - (e.clientTop || 0),
					left: b6.left + (b8.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
				}
			},
			position: function() {
				if (!this[0]) {
					return
				}
				var b5, b6, e = {
					top: 0,
					left: 0
				}, i = this[0];
				if (bH.css(i, "position") === "fixed") {
					b6 = i.getBoundingClientRect()
				} else {
					b5 = this.offsetParent();
					b6 = this.offset();
					if (!bH.nodeName(b5[0], "html")) {
						e = b5.offset()
					}
					e.top += bH.css(b5[0], "borderTopWidth", true);
					e.left += bH.css(b5[0], "borderLeftWidth", true)
				}
				return {
					top: b6.top - e.top - bH.css(i, "marginTop", true),
					left: b6.left - e.left - bH.css(i, "marginLeft", true)
				}
			},
			offsetParent: function() {
				return this.map(function() {
					var e = this.offsetParent || bW;
					while (e && (!bH.nodeName(e, "html") && bH.css(e, "position") === "static")) {
						e = e.offsetParent
					}
					return e || bW
				})
			}
		});
		bH.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(b5, i) {
			var e = /Y/.test(i);
			bH.fn[b5] = function(b6) {
				return aA(this, function(b7, ca, b9) {
					var b8 = bq(b7);
					if (b9 === undefined) {
						return b8 ? (i in b8) ? b8[i] : b8.document.documentElement[ca] : b7[ca]
					}
					if (b8) {
						b8.scrollTo(!e ? b9 : bH(b8).scrollLeft(), e ? b9 : bH(b8).scrollTop())
					} else {
						b7[ca] = b9
					}
				}, b5, b6, arguments.length, null)
			}
		});
		bH.each(["top", "left"], function(e, b5) {
			bH.cssHooks[b5] = a6(C.pixelPosition, function(b6, i) {
				if (i) {
					i = F(b6, b5);
					return X.test(i) ? bH(b6).position()[b5] + "px" : i
				}
			})
		});
		bH.each({
			Height: "height",
			Width: "width"
		}, function(e, i) {
			bH.each({
				padding: "inner" + e,
				content: i,
				"": "outer" + e
			}, function(b5, b6) {
				bH.fn[b6] = function(ca, b9) {
					var b8 = arguments.length && (b5 || typeof ca !== "boolean")
					  , b7 = b5 || (ca === true || b9 === true ? "margin" : "border");
					return aA(this, function(cc, cb, cd) {
						var ce;
						if (bH.isWindow(cc)) {
							return cc.document.documentElement["client" + e]
						}
						if (cc.nodeType === 9) {
							ce = cc.documentElement;
							return Math.max(cc.body["scroll" + e], ce["scroll" + e], cc.body["offset" + e], ce["offset" + e], ce["client" + e])
						}
						return cd === undefined ? bH.css(cc, cb, b7) : bH.style(cc, cb, cd, b7)
					}, i, b8 ? ca : undefined, b8, null)
				}
			})
		});
		bH.fn.size = function() {
			return this.length
		}
		;
		bH.fn.andSelf = bH.fn.addBack;
		if (typeof define === "function" && define.amd) {
			define("jquery", [], function() {
				return bH
			})
		}
		var bj = a4.jQuery
		  , H = a4.$;
		bH.noConflict = function(e) {
			if (a4.$ === bH) {
				a4.$ = H
			}
			if (e && a4.jQuery === bH) {
				a4.jQuery = bj
			}
			return bH
		}
		;
		if (typeof au === aB) {
			a4.jQuery = a4.$ = bH
		}
		return bH
	}));
	/*! * jQuery Cookie Plugin v1.4.1 * https://github.com/carhartl/jquery-cookie * * Copyright 2013 Klaus Hartl * Released under the MIT license */
	(function(a) {
		if (typeof define === "function" && define.amd) {
			define(["jquery"], a)
		} else {
			if (typeof exports === "object") {
				a(require("jquery"))
			} else {
				a(jQuery)
			}
		}
	}(function(f) {
		var a = /\+/g;
		function d(i) {
			return b.raw ? i : encodeURIComponent(i)
		}
		function g(i) {
			return b.raw ? i : decodeURIComponent(i)
		}
		function h(i) {
			return d(b.json ? JSON.stringify(i) : String(i))
		}
		function c(i) {
			if (i.indexOf('"') === 0) {
				i = i.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
			}
			try {
				i = decodeURIComponent(i.replace(a, " "));
				return b.json ? JSON.parse(i) : i
			} catch (j) {}
		}
		function e(j, i) {
			var k = b.raw ? j : c(j);
			return f.isFunction(i) ? i(k) : k
		}
		var b = f.cookie = function(q, p, v) {
			if (p !== undefined && !f.isFunction(p)) {
				v = f.extend({}, b.defaults, v);
				if (typeof v.expires === "number") {
					var r = v.expires
					  , u = v.expires = new Date();
					u.setTime(+u + r * 86400000)
				}
				return (document.cookie = [d(q), "=", h(p), v.expires ? "; expires=" + v.expires.toUTCString() : "", v.path ? "; path=" + v.path : "", v.domain ? "; domain=" + v.domain : "", v.secure ? "; secure" : ""].join(""))
			}
			var w = q ? undefined : {};
			var s = document.cookie ? document.cookie.split("; ") : [];
			for (var o = 0, m = s.length; o < m; o++) {
				var n = s[o].split("=");
				var j = g(n.shift());
				var k = n.join("=");
				if (q && q === j) {
					w = e(k, p);
					break
				}
				if (!q && (k = e(k)) !== undefined) {
					w[j] = k
				}
			}
			return w
		}
		;
		b.defaults = {};
		f.removeCookie = function(j, i) {
			if (f.cookie(j) === undefined) {
				return false
			}
			f.cookie(j, "", f.extend({}, i, {
				expires: -1
			}));
			return !f.cookie(j)
		}
	}));
	/*! jQuery UI - v1.9.2 - 2012-11-23* http://jqueryui.com* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
	(function(b, f) {
		var a = 0
		  , e = /^ui-id-\d+$/;
		b.ui = b.ui || {};
		if (b.ui.version) {
			return
		}
		b.extend(b.ui, {
			version: "1.9.2",
			keyCode: {
				BACKSPACE: 8,
				COMMA: 188,
				DELETE: 46,
				DOWN: 40,
				END: 35,
				ENTER: 13,
				ESCAPE: 27,
				HOME: 36,
				LEFT: 37,
				NUMPAD_ADD: 107,
				NUMPAD_DECIMAL: 110,
				NUMPAD_DIVIDE: 111,
				NUMPAD_ENTER: 108,
				NUMPAD_MULTIPLY: 106,
				NUMPAD_SUBTRACT: 109,
				PAGE_DOWN: 34,
				PAGE_UP: 33,
				PERIOD: 190,
				RIGHT: 39,
				SPACE: 32,
				TAB: 9,
				UP: 38
			}
		});
		b.fn.extend({
			_focus: b.fn.focus,
			focus: function(g, h) {
				return typeof g === "number" ? this.each(function() {
					var i = this;
					setTimeout(function() {
						b(i).focus();
						if (h) {
							h.call(i)
						}
					}, g)
				}) : this._focus.apply(this, arguments)
			},
			scrollParent: function() {
				var g;
				if ((b.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
					g = this.parents().filter(function() {
						return (/(relative|absolute|fixed)/).test(b.css(this, "position")) && (/(auto|scroll)/).test(b.css(this, "overflow") + b.css(this, "overflow-y") + b.css(this, "overflow-x"))
					}).eq(0)
				} else {
					g = this.parents().filter(function() {
						return (/(auto|scroll)/).test(b.css(this, "overflow") + b.css(this, "overflow-y") + b.css(this, "overflow-x"))
					}).eq(0)
				}
				return (/fixed/).test(this.css("position")) || !g.length ? b(document) : g
			},
			zIndex: function(j) {
				if (j !== f) {
					return this.css("zIndex", j)
				}
				if (this.length) {
					var h = b(this[0]), g, i;
					while (h.length && h[0] !== document) {
						g = h.css("position");
						if (g === "absolute" || g === "relative" || g === "fixed") {
							i = parseInt(h.css("zIndex"), 10);
							if (!isNaN(i) && i !== 0) {
								return i
							}
						}
						h = h.parent()
					}
				}
				return 0
			},
			uniqueId: function() {
				return this.each(function() {
					if (!this.id) {
						this.id = "ui-id-" + (++a)
					}
				})
			},
			removeUniqueId: function() {
				return this.each(function() {
					if (e.test(this.id)) {
						b(this).removeAttr("id")
					}
				})
			}
		});
		function d(i, g) {
			var k, j, h, l = i.nodeName.toLowerCase();
			if ("area" === l) {
				k = i.parentNode;
				j = k.name;
				if (!i.href || !j || k.nodeName.toLowerCase() !== "map") {
					return false
				}
				h = b("img[usemap=#" + j + "]")[0];
				return !!h && c(h)
			}
			return (/input|select|textarea|button|object/.test(l) ? !i.disabled : "a" === l ? i.href || g : g) && c(i)
		}
		function c(g) {
			return b.expr.filters.visible(g) && !b(g).parents().andSelf().filter(function() {
				return b.css(this, "visibility") === "hidden"
			}).length
		}
		b.extend(b.expr[":"], {
			data: b.expr.createPseudo ? b.expr.createPseudo(function(g) {
				return function(h) {
					return !!b.data(h, g)
				}
			}) : function(j, h, g) {
				return !!b.data(j, g[3])
			}
			,
			focusable: function(g) {
				return d(g, !isNaN(b.attr(g, "tabindex")))
			},
			tabbable: function(i) {
				var g = b.attr(i, "tabindex")
				  , h = isNaN(g);
				return (h || g >= 0) && d(i, !h)
			}
		});
		b(function() {
			var g = document.body
			  , h = g.appendChild(h = document.createElement("div"));
			h.offsetHeight;
			b.extend(h.style, {
				minHeight: "100px",
				height: "auto",
				padding: 0,
				borderWidth: 0
			});
			b.support.minHeight = h.offsetHeight === 100;
			b.support.selectstart = "onselectstart"in h;
			g.removeChild(h).style.display = "none"
		});
		if (!b("<a>").outerWidth(1).jquery) {
			b.each(["Width", "Height"], function(j, g) {
				var h = g === "Width" ? ["Left", "Right"] : ["Top", "Bottom"]
				  , k = g.toLowerCase()
				  , m = {
					innerWidth: b.fn.innerWidth,
					innerHeight: b.fn.innerHeight,
					outerWidth: b.fn.outerWidth,
					outerHeight: b.fn.outerHeight
				};
				function l(o, n, i, p) {
					b.each(h, function() {
						n -= parseFloat(b.css(o, "padding" + this)) || 0;
						if (i) {
							n -= parseFloat(b.css(o, "border" + this + "Width")) || 0
						}
						if (p) {
							n -= parseFloat(b.css(o, "margin" + this)) || 0
						}
					});
					return n
				}
				b.fn["inner" + g] = function(i) {
					if (i === f) {
						return m["inner" + g].call(this)
					}
					return this.each(function() {
						b(this).css(k, l(this, i) + "px")
					})
				}
				;
				b.fn["outer" + g] = function(i, n) {
					if (typeof i !== "number") {
						return m["outer" + g].call(this, i)
					}
					return this.each(function() {
						b(this).css(k, l(this, i, true, n) + "px")
					})
				}
			})
		}
		if (b("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
			b.fn.removeData = (function(g) {
				return function(h) {
					if (arguments.length) {
						return g.call(this, b.camelCase(h))
					} else {
						return g.call(this)
					}
				}
			}
			)(b.fn.removeData)
		}
		(function() {
			var g = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
			b.ui.ie = g.length ? true : false;
			b.ui.ie6 = parseFloat(g[1], 10) === 6
		}
		)();
		b.fn.extend({
			disableSelection: function() {
				return this.bind((b.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(g) {
					g.preventDefault()
				})
			},
			enableSelection: function() {
				return this.unbind(".ui-disableSelection")
			}
		});
		b.extend(b.ui, {
			plugin: {
				add: function(h, j, l) {
					var g, k = b.ui[h].prototype;
					for (g in l) {
						k.plugins[g] = k.plugins[g] || [];
						k.plugins[g].push([j, l[g]])
					}
				},
				call: function(g, j, h) {
					var k, l = g.plugins[j];
					if (!l || !g.element[0].parentNode || g.element[0].parentNode.nodeType === 11) {
						return
					}
					for (k = 0; k < l.length; k++) {
						if (g.options[l[k][0]]) {
							l[k][1].apply(g.element, h)
						}
					}
				}
			},
			contains: b.contains,
			hasScroll: function(j, h) {
				if (b(j).css("overflow") === "hidden") {
					return false
				}
				var g = (h && h === "left") ? "scrollLeft" : "scrollTop"
				  , i = false;
				if (j[g] > 0) {
					return true
				}
				j[g] = 1;
				i = (j[g] > 0);
				j[g] = 0;
				return i
			},
			isOverAxis: function(h, g, i) {
				return (h > g) && (h < (g + i))
			},
			isOver: function(l, h, k, j, g, i) {
				return b.ui.isOverAxis(l, k, g) && b.ui.isOverAxis(h, j, i)
			}
		})
	}
	)(jQuery);
	(function(b, e) {
		var a = 0
		  , d = Array.prototype.slice
		  , c = b.cleanData;
		b.cleanData = function(f) {
			for (var g = 0, h; (h = f[g]) != null; g++) {
				try {
					b(h).triggerHandler("remove")
				} catch (j) {}
			}
			c(f)
		}
		;
		b.widget = function(g, j, f) {
			var m, l, i, k, h = g.split(".")[0];
			g = g.split(".")[1];
			m = h + "-" + g;
			if (!f) {
				f = j;
				j = b.Widget
			}
			b.expr[":"][m.toLowerCase()] = function(n) {
				return !!b.data(n, m)
			}
			;
			b[h] = b[h] || {};
			l = b[h][g];
			i = b[h][g] = function(n, o) {
				if (!this._createWidget) {
					return new i(n,o)
				}
				if (arguments.length) {
					this._createWidget(n, o)
				}
			}
			;
			b.extend(i, l, {
				version: f.version,
				_proto: b.extend({}, f),
				_childConstructors: []
			});
			k = new j();
			k.options = b.widget.extend({}, k.options);
			b.each(f, function(o, n) {
				if (b.isFunction(n)) {
					f[o] = (function() {
						var p = function() {
							return j.prototype[o].apply(this, arguments)
						}
						  , q = function(r) {
							return j.prototype[o].apply(this, r)
						};
						return function() {
							var t = this._super, r = this._superApply, s;
							this._super = p;
							this._superApply = q;
							s = n.apply(this, arguments);
							this._super = t;
							this._superApply = r;
							return s
						}
					}
					)()
				}
			});
			i.prototype = b.widget.extend(k, {
				widgetEventPrefix: l ? k.widgetEventPrefix : g
			}, f, {
				constructor: i,
				namespace: h,
				widgetName: g,
				widgetBaseClass: m,
				widgetFullName: m
			});
			if (l) {
				b.each(l._childConstructors, function(o, p) {
					var n = p.prototype;
					b.widget(n.namespace + "." + n.widgetName, i, p._proto)
				});
				delete l._childConstructors
			} else {
				j._childConstructors.push(i)
			}
			b.widget.bridge(g, i)
		}
		;
		b.widget.extend = function(k) {
			var g = d.call(arguments, 1), j = 0, f = g.length, h, i;
			for (; j < f; j++) {
				for (h in g[j]) {
					i = g[j][h];
					if (g[j].hasOwnProperty(h) && i !== e) {
						if (b.isPlainObject(i)) {
							k[h] = b.isPlainObject(k[h]) ? b.widget.extend({}, k[h], i) : b.widget.extend({}, i)
						} else {
							k[h] = i
						}
					}
				}
			}
			return k
		}
		;
		b.widget.bridge = function(g, f) {
			var h = f.prototype.widgetFullName || g;
			b.fn[g] = function(k) {
				var i = typeof k === "string"
				  , j = d.call(arguments, 1)
				  , l = this;
				k = !i && j.length ? b.widget.extend.apply(null, [k].concat(j)) : k;
				if (i) {
					this.each(function() {
						var n, m = b.data(this, h);
						if (!m) {
							return b.error("cannot call methods on " + g + " prior to initialization; attempted to call method '" + k + "'")
						}
						if (!b.isFunction(m[k]) || k.charAt(0) === "_") {
							return b.error("no such method '" + k + "' for " + g + " widget instance")
						}
						n = m[k].apply(m, j);
						if (n !== m && n !== e) {
							l = n && n.jquery ? l.pushStack(n.get()) : n;
							return false
						}
					})
				} else {
					this.each(function() {
						var m = b.data(this, h);
						if (m) {
							m.option(k || {})._init()
						} else {
							b.data(this, h, new f(k,this))
						}
					})
				}
				return l
			}
		}
		;
		b.Widget = function() {}
		;
		b.Widget._childConstructors = [];
		b.Widget.prototype = {
			widgetName: "widget",
			widgetEventPrefix: "",
			defaultElement: "<div>",
			options: {
				disabled: false,
				create: null
			},
			_createWidget: function(f, g) {
				g = b(g || this.defaultElement || this)[0];
				this.element = b(g);
				this.uuid = a++;
				this.eventNamespace = "." + this.widgetName + this.uuid;
				this.options = b.widget.extend({}, this.options, this._getCreateOptions(), f);
				this.bindings = b();
				this.hoverable = b();
				this.focusable = b();
				if (g !== this) {
					b.data(g, this.widgetName, this);
					b.data(g, this.widgetFullName, this);
					this._on(true, this.element, {
						remove: function(h) {
							if (h.target === g) {
								this.destroy()
							}
						}
					});
					this.document = b(g.style ? g.ownerDocument : g.document || g);
					this.window = b(this.document[0].defaultView || this.document[0].parentWindow)
				}
				this._create();
				this._trigger("create", null, this._getCreateEventData());
				this._init()
			},
			_getCreateOptions: b.noop,
			_getCreateEventData: b.noop,
			_create: b.noop,
			_init: b.noop,
			destroy: function() {
				this._destroy();
				this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));
				this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
				this.bindings.unbind(this.eventNamespace);
				this.hoverable.removeClass("ui-state-hover");
				this.focusable.removeClass("ui-state-focus")
			},
			_destroy: b.noop,
			widget: function() {
				return this.element
			},
			option: function(j, k) {
				var f = j, l, h, g;
				if (arguments.length === 0) {
					return b.widget.extend({}, this.options)
				}
				if (typeof j === "string") {
					f = {};
					l = j.split(".");
					j = l.shift();
					if (l.length) {
						h = f[j] = b.widget.extend({}, this.options[j]);
						for (g = 0; g < l.length - 1; g++) {
							h[l[g]] = h[l[g]] || {};
							h = h[l[g]]
						}
						j = l.pop();
						if (k === e) {
							return h[j] === e ? null : h[j]
						}
						h[j] = k
					} else {
						if (k === e) {
							return this.options[j] === e ? null : this.options[j]
						}
						f[j] = k
					}
				}
				this._setOptions(f);
				return this
			},
			_setOptions: function(f) {
				var g;
				for (g in f) {
					this._setOption(g, f[g])
				}
				return this
			},
			_setOption: function(f, g) {
				this.options[f] = g;
				if (f === "disabled") {
					this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!g).attr("aria-disabled", g);
					this.hoverable.removeClass("ui-state-hover");
					this.focusable.removeClass("ui-state-focus")
				}
				return this
			},
			enable: function() {
				return this._setOption("disabled", false)
			},
			disable: function() {
				return this._setOption("disabled", true)
			},
			_on: function(i, h, g) {
				var j, f = this;
				if (typeof i !== "boolean") {
					g = h;
					h = i;
					i = false
				}
				if (!g) {
					g = h;
					h = this.element;
					j = this.widget()
				} else {
					h = j = b(h);
					this.bindings = this.bindings.add(h)
				}
				b.each(g, function(p, o) {
					function m() {
						if (!i && (f.options.disabled === true || b(this).hasClass("ui-state-disabled"))) {
							return
						}
						return (typeof o === "string" ? f[o] : o).apply(f, arguments)
					}
					if (typeof o !== "string") {
						m.guid = o.guid = o.guid || m.guid || b.guid++
					}
					var n = p.match(/^(\w+)\s*(.*)$/)
					  , l = n[1] + f.eventNamespace
					  , k = n[2];
					if (k) {
						j.delegate(k, l, m)
					} else {
						h.bind(l, m)
					}
				})
			},
			_off: function(g, f) {
				f = (f || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
				g.unbind(f).undelegate(f)
			},
			_delay: function(i, h) {
				function g() {
					return (typeof i === "string" ? f[i] : i).apply(f, arguments)
				}
				var f = this;
				return setTimeout(g, h || 0)
			},
			_hoverable: function(f) {
				this.hoverable = this.hoverable.add(f);
				this._on(f, {
					mouseenter: function(g) {
						b(g.currentTarget).addClass("ui-state-hover")
					},
					mouseleave: function(g) {
						b(g.currentTarget).removeClass("ui-state-hover")
					}
				})
			},
			_focusable: function(f) {
				this.focusable = this.focusable.add(f);
				this._on(f, {
					focusin: function(g) {
						b(g.currentTarget).addClass("ui-state-focus")
					},
					focusout: function(g) {
						b(g.currentTarget).removeClass("ui-state-focus")
					}
				})
			},
			_trigger: function(f, g, h) {
				var k, j, i = this.options[f];
				h = h || {};
				g = b.Event(g);
				g.type = (f === this.widgetEventPrefix ? f : this.widgetEventPrefix + f).toLowerCase();
				g.target = this.element[0];
				j = g.originalEvent;
				if (j) {
					for (k in j) {
						if (!(k in g)) {
							g[k] = j[k]
						}
					}
				}
				this.element.trigger(g, h);
				return !(b.isFunction(i) && i.apply(this.element[0], [g].concat(h)) === false || g.isDefaultPrevented())
			}
		};
		b.each({
			show: "fadeIn",
			hide: "fadeOut"
		}, function(g, f) {
			b.Widget.prototype["_" + g] = function(j, i, l) {
				if (typeof i === "string") {
					i = {
						effect: i
					}
				}
				var k, h = !i ? g : i === true || typeof i === "number" ? f : i.effect || f;
				i = i || {};
				if (typeof i === "number") {
					i = {
						duration: i
					}
				}
				k = !b.isEmptyObject(i);
				i.complete = l;
				if (i.delay) {
					j.delay(i.delay)
				}
				if (k && b.effects && (b.effects.effect[h] || b.uiBackCompat !== false && b.effects[h])) {
					j[g](i)
				} else {
					if (h !== g && j[h]) {
						j[h](i.duration, i.easing, l)
					} else {
						j.queue(function(m) {
							b(this)[g]();
							if (l) {
								l.call(j[0])
							}
							m()
						})
					}
				}
			}
		});
		if (b.uiBackCompat !== false) {
			b.Widget.prototype._getCreateOptions = function() {
				return b.metadata && b.metadata.get(this.element[0])[this.widgetName]
			}
		}
	}
	)(jQuery);
	(function(b, c) {
		var a = false;
		b(document).mouseup(function(d) {
			a = false
		});
		b.widget("ui.mouse", {
			version: "1.9.2",
			options: {
				cancel: "input,textarea,button,select,option",
				distance: 1,
				delay: 0
			},
			_mouseInit: function() {
				var d = this;
				this.element.bind("mousedown." + this.widgetName, function(e) {
					return d._mouseDown(e)
				}).bind("click." + this.widgetName, function(e) {
					if (true === b.data(e.target, d.widgetName + ".preventClickEvent")) {
						b.removeData(e.target, d.widgetName + ".preventClickEvent");
						e.stopImmediatePropagation();
						return false
					}
				});
				this.started = false
			},
			_mouseDestroy: function() {
				this.element.unbind("." + this.widgetName);
				if (this._mouseMoveDelegate) {
					b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
				}
			},
			_mouseDown: function(f) {
				if (a) {
					return
				}
				(this._mouseStarted && this._mouseUp(f));
				this._mouseDownEvent = f;
				var e = this
				  , g = (f.which === 1)
				  , d = (typeof this.options.cancel === "string" && f.target.nodeName ? b(f.target).closest(this.options.cancel).length : false);
				if (!g || d || !this._mouseCapture(f)) {
					return true
				}
				this.mouseDelayMet = !this.options.delay;
				if (!this.mouseDelayMet) {
					this._mouseDelayTimer = setTimeout(function() {
						e.mouseDelayMet = true
					}, this.options.delay)
				}
				if (this._mouseDistanceMet(f) && this._mouseDelayMet(f)) {
					this._mouseStarted = (this._mouseStart(f) !== false);
					if (!this._mouseStarted) {
						f.preventDefault();
						return true
					}
				}
				if (true === b.data(f.target, this.widgetName + ".preventClickEvent")) {
					b.removeData(f.target, this.widgetName + ".preventClickEvent")
				}
				this._mouseMoveDelegate = function(h) {
					return e._mouseMove(h)
				}
				;
				this._mouseUpDelegate = function(h) {
					return e._mouseUp(h)
				}
				;
				b(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
				f.preventDefault();
				a = true;
				return true
			},
			_mouseMove: function(d) {
				if (b.ui.ie && !(document.documentMode >= 9) && !d.button) {
					return this._mouseUp(d)
				}
				if (this._mouseStarted) {
					this._mouseDrag(d);
					return d.preventDefault()
				}
				if (this._mouseDistanceMet(d) && this._mouseDelayMet(d)) {
					this._mouseStarted = (this._mouseStart(this._mouseDownEvent, d) !== false);
					(this._mouseStarted ? this._mouseDrag(d) : this._mouseUp(d))
				}
				return !this._mouseStarted
			},
			_mouseUp: function(d) {
				b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
				if (this._mouseStarted) {
					this._mouseStarted = false;
					if (d.target === this._mouseDownEvent.target) {
						b.data(d.target, this.widgetName + ".preventClickEvent", true)
					}
					this._mouseStop(d)
				}
				return false
			},
			_mouseDistanceMet: function(d) {
				return (Math.max(Math.abs(this._mouseDownEvent.pageX - d.pageX), Math.abs(this._mouseDownEvent.pageY - d.pageY)) >= this.options.distance)
			},
			_mouseDelayMet: function(d) {
				return this.mouseDelayMet
			},
			_mouseStart: function(d) {},
			_mouseDrag: function(d) {},
			_mouseStop: function(d) {},
			_mouseCapture: function(d) {
				return true
			}
		})
	}
	)(jQuery);
	(function(a, b) {
		a.widget("ui.draggable", a.ui.mouse, {
			version: "1.9.2",
			widgetEventPrefix: "drag",
			options: {
				addClasses: true,
				appendTo: "parent",
				axis: false,
				connectToSortable: false,
				containment: false,
				cursor: "auto",
				cursorAt: false,
				grid: false,
				handle: false,
				helper: "original",
				iframeFix: false,
				opacity: false,
				refreshPositions: false,
				revert: false,
				revertDuration: 500,
				scope: "default",
				scroll: true,
				scrollSensitivity: 20,
				scrollSpeed: 20,
				snap: false,
				snapMode: "both",
				snapTolerance: 20,
				stack: false,
				zIndex: false
			},
			_create: function() {
				if (this.options.helper == "original" && !(/^(?:r|a|f)/).test(this.element.css("position"))) {
					this.element[0].style.position = "relative"
				}
				(this.options.addClasses && this.element.addClass("ui-draggable"));
				(this.options.disabled && this.element.addClass("ui-draggable-disabled"));
				this._mouseInit()
			},
			_destroy: function() {
				this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
				this._mouseDestroy()
			},
			_mouseCapture: function(c) {
				var d = this.options;
				if (this.helper || d.disabled || a(c.target).is(".ui-resizable-handle")) {
					return false
				}
				this.handle = this._getHandle(c);
				if (!this.handle) {
					return false
				}
				a(d.iframeFix === true ? "iframe" : d.iframeFix).each(function() {
					a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
						width: this.offsetWidth + "px",
						height: this.offsetHeight + "px",
						position: "absolute",
						opacity: "0.001",
						zIndex: 1000
					}).css(a(this).offset()).appendTo("body")
				});
				return true
			},
			_mouseStart: function(c) {
				var d = this.options;
				this.helper = this._createHelper(c);
				this.helper.addClass("ui-draggable-dragging");
				this._cacheHelperProportions();
				if (a.ui.ddmanager) {
					a.ui.ddmanager.current = this
				}
				this._cacheMargins();
				this.cssPosition = this.helper.css("position");
				this.scrollParent = this.helper.scrollParent();
				this.offset = this.positionAbs = this.element.offset();
				this.offset = {
					top: this.offset.top - this.margins.top,
					left: this.offset.left - this.margins.left
				};
				a.extend(this.offset, {
					click: {
						left: c.pageX - this.offset.left,
						top: c.pageY - this.offset.top
					},
					parent: this._getParentOffset(),
					relative: this._getRelativeOffset()
				});
				this.originalPosition = this.position = this._generatePosition(c);
				this.originalPageX = c.pageX;
				this.originalPageY = c.pageY;
				(d.cursorAt && this._adjustOffsetFromHelper(d.cursorAt));
				if (d.containment) {
					this._setContainment()
				}
				if (this._trigger("start", c) === false) {
					this._clear();
					return false
				}
				this._cacheHelperProportions();
				if (a.ui.ddmanager && !d.dropBehaviour) {
					a.ui.ddmanager.prepareOffsets(this, c)
				}
				this._mouseDrag(c, true);
				if (a.ui.ddmanager) {
					a.ui.ddmanager.dragStart(this, c)
				}
				return true
			},
			_mouseDrag: function(c, e) {
				this.position = this._generatePosition(c);
				this.positionAbs = this._convertPositionTo("absolute");
				if (!e) {
					var d = this._uiHash();
					if (this._trigger("drag", c, d) === false) {
						this._mouseUp({});
						return false
					}
					this.position = d.position
				}
				if (!this.options.axis || this.options.axis != "y") {
					this.helper[0].style.left = this.position.left + "px"
				}
				if (!this.options.axis || this.options.axis != "x") {
					this.helper[0].style.top = this.position.top + "px"
				}
				if (a.ui.ddmanager) {
					a.ui.ddmanager.drag(this, c)
				}
				return false
			},
			_mouseStop: function(e) {
				var g = false;
				if (a.ui.ddmanager && !this.options.dropBehaviour) {
					g = a.ui.ddmanager.drop(this, e)
				}
				if (this.dropped) {
					g = this.dropped;
					this.dropped = false
				}
				var c = this.element[0]
				  , f = false;
				while (c && (c = c.parentNode)) {
					if (c == document) {
						f = true
					}
				}
				if (!f && this.options.helper === "original") {
					return false
				}
				if ((this.options.revert == "invalid" && !g) || (this.options.revert == "valid" && g) || this.options.revert === true || (a.isFunction(this.options.revert) && this.options.revert.call(this.element, g))) {
					var d = this;
					a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
						if (d._trigger("stop", e) !== false) {
							d._clear()
						}
					})
				} else {
					if (this._trigger("stop", e) !== false) {
						this._clear()
					}
				}
				return false
			},
			_mouseUp: function(c) {
				a("div.ui-draggable-iframeFix").each(function() {
					this.parentNode.removeChild(this)
				});
				if (a.ui.ddmanager) {
					a.ui.ddmanager.dragStop(this, c)
				}
				return a.ui.mouse.prototype._mouseUp.call(this, c)
			},
			cancel: function() {
				if (this.helper.is(".ui-draggable-dragging")) {
					this._mouseUp({})
				} else {
					this._clear()
				}
				return this
			},
			_getHandle: function(c) {
				var d = !this.options.handle || !a(this.options.handle, this.element).length ? true : false;
				a(this.options.handle, this.element).find("*").andSelf().each(function() {
					if (this == c.target) {
						d = true
					}
				});
				return d
			},
			_createHelper: function(d) {
				var e = this.options;
				var c = a.isFunction(e.helper) ? a(e.helper.apply(this.element[0], [d])) : (e.helper == "clone" ? this.element.clone().removeAttr("id") : this.element);
				if (!c.parents("body").length) {
					c.appendTo((e.appendTo == "parent" ? this.element[0].parentNode : e.appendTo))
				}
				if (c[0] != this.element[0] && !(/(fixed|absolute)/).test(c.css("position"))) {
					c.css("position", "absolute")
				}
				return c
			},
			_adjustOffsetFromHelper: function(c) {
				if (typeof c == "string") {
					c = c.split(" ")
				}
				if (a.isArray(c)) {
					c = {
						left: +c[0],
						top: +c[1] || 0
					}
				}
				if ("left"in c) {
					this.offset.click.left = c.left + this.margins.left
				}
				if ("right"in c) {
					this.offset.click.left = this.helperProportions.width - c.right + this.margins.left
				}
				if ("top"in c) {
					this.offset.click.top = c.top + this.margins.top
				}
				if ("bottom"in c) {
					this.offset.click.top = this.helperProportions.height - c.bottom + this.margins.top
				}
			},
			_getParentOffset: function() {
				this.offsetParent = this.helper.offsetParent();
				var c = this.offsetParent.offset();
				if (this.cssPosition == "absolute" && this.scrollParent[0] != document && a.contains(this.scrollParent[0], this.offsetParent[0])) {
					c.left += this.scrollParent.scrollLeft();
					c.top += this.scrollParent.scrollTop()
				}
				if ((this.offsetParent[0] == document.body) || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.ui.ie)) {
					c = {
						top: 0,
						left: 0
					}
				}
				return {
					top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
					left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
				}
			},
			_getRelativeOffset: function() {
				if (this.cssPosition == "relative") {
					var c = this.element.position();
					return {
						top: c.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
						left: c.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
					}
				} else {
					return {
						top: 0,
						left: 0
					}
				}
			},
			_cacheMargins: function() {
				this.margins = {
					left: (parseInt(this.element.css("marginLeft"), 10) || 0),
					top: (parseInt(this.element.css("marginTop"), 10) || 0),
					right: (parseInt(this.element.css("marginRight"), 10) || 0),
					bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)
				}
			},
			_cacheHelperProportions: function() {
				this.helperProportions = {
					width: this.helper.outerWidth(),
					height: this.helper.outerHeight()
				}
			},
			_setContainment: function() {
				var g = this.options;
				if (g.containment == "parent") {
					g.containment = this.helper[0].parentNode
				}
				if (g.containment == "document" || g.containment == "window") {
					this.containment = [g.containment == "document" ? 0 : a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, g.containment == "document" ? 0 : a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (g.containment == "document" ? 0 : a(window).scrollLeft()) + a(g.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (g.containment == "document" ? 0 : a(window).scrollTop()) + (a(g.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
				}
				if (!(/^(document|window|parent)$/).test(g.containment) && g.containment.constructor != Array) {
					var h = a(g.containment);
					var e = h[0];
					if (!e) {
						return
					}
					var f = h.offset();
					var d = (a(e).css("overflow") != "hidden");
					this.containment = [(parseInt(a(e).css("borderLeftWidth"), 10) || 0) + (parseInt(a(e).css("paddingLeft"), 10) || 0), (parseInt(a(e).css("borderTopWidth"), 10) || 0) + (parseInt(a(e).css("paddingTop"), 10) || 0), (d ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(a(e).css("borderLeftWidth"), 10) || 0) - (parseInt(a(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (d ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(a(e).css("borderTopWidth"), 10) || 0) - (parseInt(a(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
					this.relative_container = h
				} else {
					if (g.containment.constructor == Array) {
						this.containment = g.containment
					}
				}
			},
			_convertPositionTo: function(g, i) {
				if (!i) {
					i = this.position
				}
				var e = g == "absolute" ? 1 : -1;
				var f = this.options
				  , c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent
				  , h = (/(html|body)/i).test(c[0].tagName);
				return {
					top: (i.top + this.offset.relative.top * e + this.offset.parent.top * e - ((this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : (h ? 0 : c.scrollTop())) * e)),
					left: (i.left + this.offset.relative.left * e + this.offset.parent.left * e - ((this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : h ? 0 : c.scrollLeft()) * e))
				}
			},
			_generatePosition: function(d) {
				var e = this.options
				  , l = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent
				  , i = (/(html|body)/i).test(l[0].tagName);
				var h = d.pageX;
				var g = d.pageY;
				if (this.originalPosition) {
					var c;
					if (this.containment) {
						if (this.relative_container) {
							var k = this.relative_container.offset();
							c = [this.containment[0] + k.left, this.containment[1] + k.top, this.containment[2] + k.left, this.containment[3] + k.top]
						} else {
							c = this.containment
						}
						if (d.pageX - this.offset.click.left < c[0]) {
							h = c[0] + this.offset.click.left
						}
						if (d.pageY - this.offset.click.top < c[1]) {
							g = c[1] + this.offset.click.top
						}
						if (d.pageX - this.offset.click.left > c[2]) {
							h = c[2] + this.offset.click.left
						}
						if (d.pageY - this.offset.click.top > c[3]) {
							g = c[3] + this.offset.click.top
						}
					}
					if (e.grid) {
						var j = e.grid[1] ? this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1] : this.originalPageY;
						g = c ? (!(j - this.offset.click.top < c[1] || j - this.offset.click.top > c[3]) ? j : (!(j - this.offset.click.top < c[1]) ? j - e.grid[1] : j + e.grid[1])) : j;
						var f = e.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / e.grid[0]) * e.grid[0] : this.originalPageX;
						h = c ? (!(f - this.offset.click.left < c[0] || f - this.offset.click.left > c[2]) ? f : (!(f - this.offset.click.left < c[0]) ? f - e.grid[0] : f + e.grid[0])) : f
					}
				}
				return {
					top: (g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : (i ? 0 : l.scrollTop())))),
					left: (h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : l.scrollLeft())))
				}
			},
			_clear: function() {
				this.helper.removeClass("ui-draggable-dragging");
				if (this.helper[0] != this.element[0] && !this.cancelHelperRemoval) {
					this.helper.remove()
				}
				this.helper = null;
				this.cancelHelperRemoval = false
			},
			_trigger: function(c, d, e) {
				e = e || this._uiHash();
				a.ui.plugin.call(this, c, [d, e]);
				if (c == "drag") {
					this.positionAbs = this._convertPositionTo("absolute")
				}
				return a.Widget.prototype._trigger.call(this, c, d, e)
			},
			plugins: {},
			_uiHash: function(c) {
				return {
					helper: this.helper,
					position: this.position,
					originalPosition: this.originalPosition,
					offset: this.positionAbs
				}
			}
		});
		a.ui.plugin.add("draggable", "connectToSortable", {
			start: function(d, f) {
				var e = a(this).data("draggable")
				  , g = e.options
				  , c = a.extend({}, f, {
					item: e.element
				});
				e.sortables = [];
				a(g.connectToSortable).each(function() {
					var h = a.data(this, "sortable");
					if (h && !h.options.disabled) {
						e.sortables.push({
							instance: h,
							shouldRevert: h.options.revert
						});
						h.refreshPositions();
						h._trigger("activate", d, c)
					}
				})
			},
			stop: function(d, f) {
				var e = a(this).data("draggable")
				  , c = a.extend({}, f, {
					item: e.element
				});
				a.each(e.sortables, function() {
					if (this.instance.isOver) {
						this.instance.isOver = 0;
						e.cancelHelperRemoval = true;
						this.instance.cancelHelperRemoval = false;
						if (this.shouldRevert) {
							this.instance.options.revert = true
						}
						this.instance._mouseStop(d);
						this.instance.options.helper = this.instance.options._helper;
						if (e.options.helper == "original") {
							this.instance.currentItem.css({
								top: "auto",
								left: "auto"
							})
						}
					} else {
						this.instance.cancelHelperRemoval = false;
						this.instance._trigger("deactivate", d, c)
					}
				})
			},
			drag: function(d, g) {
				var f = a(this).data("draggable")
				  , c = this;
				var e = function(j) {
					var p = this.offset.click.top
					  , n = this.offset.click.left;
					var h = this.positionAbs.top
					  , l = this.positionAbs.left;
					var k = j.height
					  , m = j.width;
					var q = j.top
					  , i = j.left;
					return a.ui.isOver(h + p, l + n, q, i, k, m)
				};
				a.each(f.sortables, function(j) {
					var h = false;
					var k = this;
					this.instance.positionAbs = f.positionAbs;
					this.instance.helperProportions = f.helperProportions;
					this.instance.offset.click = f.offset.click;
					if (this.instance._intersectsWith(this.instance.containerCache)) {
						h = true;
						a.each(f.sortables, function() {
							this.instance.positionAbs = f.positionAbs;
							this.instance.helperProportions = f.helperProportions;
							this.instance.offset.click = f.offset.click;
							if (this != k && this.instance._intersectsWith(this.instance.containerCache) && a.ui.contains(k.instance.element[0], this.instance.element[0])) {
								h = false
							}
							return h
						})
					}
					if (h) {
						if (!this.instance.isOver) {
							this.instance.isOver = 1;
							this.instance.currentItem = a(c).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", true);
							this.instance.options._helper = this.instance.options.helper;
							this.instance.options.helper = function() {
								return g.helper[0]
							}
							;
							d.target = this.instance.currentItem[0];
							this.instance._mouseCapture(d, true);
							this.instance._mouseStart(d, true, true);
							this.instance.offset.click.top = f.offset.click.top;
							this.instance.offset.click.left = f.offset.click.left;
							this.instance.offset.parent.left -= f.offset.parent.left - this.instance.offset.parent.left;
							this.instance.offset.parent.top -= f.offset.parent.top - this.instance.offset.parent.top;
							f._trigger("toSortable", d);
							f.dropped = this.instance.element;
							f.currentItem = f.element;
							this.instance.fromOutside = f
						}
						if (this.instance.currentItem) {
							this.instance._mouseDrag(d)
						}
					} else {
						if (this.instance.isOver) {
							this.instance.isOver = 0;
							this.instance.cancelHelperRemoval = true;
							this.instance.options.revert = false;
							this.instance._trigger("out", d, this.instance._uiHash(this.instance));
							this.instance._mouseStop(d, true);
							this.instance.options.helper = this.instance.options._helper;
							this.instance.currentItem.remove();
							if (this.instance.placeholder) {
								this.instance.placeholder.remove()
							}
							f._trigger("fromSortable", d);
							f.dropped = false
						}
					}
				})
			}
		});
		a.ui.plugin.add("draggable", "cursor", {
			start: function(d, e) {
				var c = a("body")
				  , f = a(this).data("draggable").options;
				if (c.css("cursor")) {
					f._cursor = c.css("cursor")
				}
				c.css("cursor", f.cursor)
			},
			stop: function(c, d) {
				var e = a(this).data("draggable").options;
				if (e._cursor) {
					a("body").css("cursor", e._cursor)
				}
			}
		});
		a.ui.plugin.add("draggable", "opacity", {
			start: function(d, e) {
				var c = a(e.helper)
				  , f = a(this).data("draggable").options;
				if (c.css("opacity")) {
					f._opacity = c.css("opacity")
				}
				c.css("opacity", f.opacity)
			},
			stop: function(c, d) {
				var e = a(this).data("draggable").options;
				if (e._opacity) {
					a(d.helper).css("opacity", e._opacity)
				}
			}
		});
		a.ui.plugin.add("draggable", "scroll", {
			start: function(d, e) {
				var c = a(this).data("draggable");
				if (c.scrollParent[0] != document && c.scrollParent[0].tagName != "HTML") {
					c.overflowOffset = c.scrollParent.offset()
				}
			},
			drag: function(e, f) {
				var d = a(this).data("draggable")
				  , g = d.options
				  , c = false;
				if (d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML") {
					if (!g.axis || g.axis != "x") {
						if ((d.overflowOffset.top + d.scrollParent[0].offsetHeight) - e.pageY < g.scrollSensitivity) {
							d.scrollParent[0].scrollTop = c = d.scrollParent[0].scrollTop + g.scrollSpeed
						} else {
							if (e.pageY - d.overflowOffset.top < g.scrollSensitivity) {
								d.scrollParent[0].scrollTop = c = d.scrollParent[0].scrollTop - g.scrollSpeed
							}
						}
					}
					if (!g.axis || g.axis != "y") {
						if ((d.overflowOffset.left + d.scrollParent[0].offsetWidth) - e.pageX < g.scrollSensitivity) {
							d.scrollParent[0].scrollLeft = c = d.scrollParent[0].scrollLeft + g.scrollSpeed
						} else {
							if (e.pageX - d.overflowOffset.left < g.scrollSensitivity) {
								d.scrollParent[0].scrollLeft = c = d.scrollParent[0].scrollLeft - g.scrollSpeed
							}
						}
					}
				} else {
					if (!g.axis || g.axis != "x") {
						if (e.pageY - a(document).scrollTop() < g.scrollSensitivity) {
							c = a(document).scrollTop(a(document).scrollTop() - g.scrollSpeed)
						} else {
							if (a(window).height() - (e.pageY - a(document).scrollTop()) < g.scrollSensitivity) {
								c = a(document).scrollTop(a(document).scrollTop() + g.scrollSpeed)
							}
						}
					}
					if (!g.axis || g.axis != "y") {
						if (e.pageX - a(document).scrollLeft() < g.scrollSensitivity) {
							c = a(document).scrollLeft(a(document).scrollLeft() - g.scrollSpeed)
						} else {
							if (a(window).width() - (e.pageX - a(document).scrollLeft()) < g.scrollSensitivity) {
								c = a(document).scrollLeft(a(document).scrollLeft() + g.scrollSpeed)
							}
						}
					}
				}
				if (c !== false && a.ui.ddmanager && !g.dropBehaviour) {
					a.ui.ddmanager.prepareOffsets(d, e)
				}
			}
		});
		a.ui.plugin.add("draggable", "snap", {
			start: function(d, e) {
				var c = a(this).data("draggable")
				  , f = c.options;
				c.snapElements = [];
				a(f.snap.constructor != String ? (f.snap.items || ":data(draggable)") : f.snap).each(function() {
					var h = a(this);
					var g = h.offset();
					if (this != c.element[0]) {
						c.snapElements.push({
							item: this,
							width: h.outerWidth(),
							height: h.outerHeight(),
							top: g.top,
							left: g.left
						})
					}
				})
			},
			drag: function(u, p) {
				var g = a(this).data("draggable")
				  , q = g.options;
				var y = q.snapTolerance;
				var x = p.offset.left
				  , w = x + g.helperProportions.width
				  , f = p.offset.top
				  , e = f + g.helperProportions.height;
				for (var v = g.snapElements.length - 1; v >= 0; v--) {
					var s = g.snapElements[v].left
					  , n = s + g.snapElements[v].width
					  , m = g.snapElements[v].top
					  , A = m + g.snapElements[v].height;
					if (!((s - y < x && x < n + y && m - y < f && f < A + y) || (s - y < x && x < n + y && m - y < e && e < A + y) || (s - y < w && w < n + y && m - y < f && f < A + y) || (s - y < w && w < n + y && m - y < e && e < A + y))) {
						if (g.snapElements[v].snapping) {
							(g.options.snap.release && g.options.snap.release.call(g.element, u, a.extend(g._uiHash(), {
								snapItem: g.snapElements[v].item
							})))
						}
						g.snapElements[v].snapping = false;
						continue
					}
					if (q.snapMode != "inner") {
						var c = Math.abs(m - e) <= y;
						var z = Math.abs(A - f) <= y;
						var j = Math.abs(s - w) <= y;
						var k = Math.abs(n - x) <= y;
						if (c) {
							p.position.top = g._convertPositionTo("relative", {
								top: m - g.helperProportions.height,
								left: 0
							}).top - g.margins.top
						}
						if (z) {
							p.position.top = g._convertPositionTo("relative", {
								top: A,
								left: 0
							}).top - g.margins.top
						}
						if (j) {
							p.position.left = g._convertPositionTo("relative", {
								top: 0,
								left: s - g.helperProportions.width
							}).left - g.margins.left
						}
						if (k) {
							p.position.left = g._convertPositionTo("relative", {
								top: 0,
								left: n
							}).left - g.margins.left
						}
					}
					var h = (c || z || j || k);
					if (q.snapMode != "outer") {
						var c = Math.abs(m - f) <= y;
						var z = Math.abs(A - e) <= y;
						var j = Math.abs(s - x) <= y;
						var k = Math.abs(n - w) <= y;
						if (c) {
							p.position.top = g._convertPositionTo("relative", {
								top: m,
								left: 0
							}).top - g.margins.top
						}
						if (z) {
							p.position.top = g._convertPositionTo("relative", {
								top: A - g.helperProportions.height,
								left: 0
							}).top - g.margins.top
						}
						if (j) {
							p.position.left = g._convertPositionTo("relative", {
								top: 0,
								left: s
							}).left - g.margins.left
						}
						if (k) {
							p.position.left = g._convertPositionTo("relative", {
								top: 0,
								left: n - g.helperProportions.width
							}).left - g.margins.left
						}
					}
					if (!g.snapElements[v].snapping && (c || z || j || k || h)) {
						(g.options.snap.snap && g.options.snap.snap.call(g.element, u, a.extend(g._uiHash(), {
							snapItem: g.snapElements[v].item
						})))
					}
					g.snapElements[v].snapping = (c || z || j || k || h)
				}
			}
		});
		a.ui.plugin.add("draggable", "stack", {
			start: function(d, e) {
				var g = a(this).data("draggable").options;
				var f = a.makeArray(a(g.stack)).sort(function(i, h) {
					return (parseInt(a(i).css("zIndex"), 10) || 0) - (parseInt(a(h).css("zIndex"), 10) || 0)
				});
				if (!f.length) {
					return
				}
				var c = parseInt(f[0].style.zIndex) || 0;
				a(f).each(function(h) {
					this.style.zIndex = c + h
				});
				this[0].style.zIndex = c + f.length
			}
		});
		a.ui.plugin.add("draggable", "zIndex", {
			start: function(d, e) {
				var c = a(e.helper)
				  , f = a(this).data("draggable").options;
				if (c.css("zIndex")) {
					f._zIndex = c.css("zIndex")
				}
				c.css("zIndex", f.zIndex)
			},
			stop: function(c, d) {
				var e = a(this).data("draggable").options;
				if (e._zIndex) {
					a(d.helper).css("zIndex", e._zIndex)
				}
			}
		})
	}
	)(jQuery);
	(function(a, b) {
		a.widget("ui.droppable", {
			version: "1.9.2",
			widgetEventPrefix: "drop",
			options: {
				accept: "*",
				activeClass: false,
				addClasses: true,
				greedy: false,
				hoverClass: false,
				scope: "default",
				tolerance: "intersect"
			},
			_create: function() {
				var d = this.options
				  , c = d.accept;
				this.isover = 0;
				this.isout = 1;
				this.accept = a.isFunction(c) ? c : function(e) {
					return e.is(c)
				}
				;
				this.proportions = {
					width: this.element[0].offsetWidth,
					height: this.element[0].offsetHeight
				};
				a.ui.ddmanager.droppables[d.scope] = a.ui.ddmanager.droppables[d.scope] || [];
				a.ui.ddmanager.droppables[d.scope].push(this);
				(d.addClasses && this.element.addClass("ui-droppable"))
			},
			_destroy: function() {
				var c = a.ui.ddmanager.droppables[this.options.scope];
				for (var d = 0; d < c.length; d++) {
					if (c[d] == this) {
						c.splice(d, 1)
					}
				}
				this.element.removeClass("ui-droppable ui-droppable-disabled")
			},
			_setOption: function(c, d) {
				if (c == "accept") {
					this.accept = a.isFunction(d) ? d : function(e) {
						return e.is(d)
					}
				}
				a.Widget.prototype._setOption.apply(this, arguments)
			},
			_activate: function(d) {
				var c = a.ui.ddmanager.current;
				if (this.options.activeClass) {
					this.element.addClass(this.options.activeClass)
				}
				(c && this._trigger("activate", d, this.ui(c)))
			},
			_deactivate: function(d) {
				var c = a.ui.ddmanager.current;
				if (this.options.activeClass) {
					this.element.removeClass(this.options.activeClass)
				}
				(c && this._trigger("deactivate", d, this.ui(c)))
			},
			_over: function(d) {
				var c = a.ui.ddmanager.current;
				if (!c || (c.currentItem || c.element)[0] == this.element[0]) {
					return
				}
				if (this.accept.call(this.element[0], (c.currentItem || c.element))) {
					if (this.options.hoverClass) {
						this.element.addClass(this.options.hoverClass)
					}
					this._trigger("over", d, this.ui(c))
				}
			},
			_out: function(d) {
				var c = a.ui.ddmanager.current;
				if (!c || (c.currentItem || c.element)[0] == this.element[0]) {
					return
				}
				if (this.accept.call(this.element[0], (c.currentItem || c.element))) {
					if (this.options.hoverClass) {
						this.element.removeClass(this.options.hoverClass)
					}
					this._trigger("out", d, this.ui(c))
				}
			},
			_drop: function(d, e) {
				var c = e || a.ui.ddmanager.current;
				if (!c || (c.currentItem || c.element)[0] == this.element[0]) {
					return false
				}
				var f = false;
				this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
					var g = a.data(this, "droppable");
					if (g.options.greedy && !g.options.disabled && g.options.scope == c.options.scope && g.accept.call(g.element[0], (c.currentItem || c.element)) && a.ui.intersect(c, a.extend(g, {
						offset: g.element.offset()
					}), g.options.tolerance)) {
						f = true;
						return false
					}
				});
				if (f) {
					return false
				}
				if (this.accept.call(this.element[0], (c.currentItem || c.element))) {
					if (this.options.activeClass) {
						this.element.removeClass(this.options.activeClass)
					}
					if (this.options.hoverClass) {
						this.element.removeClass(this.options.hoverClass)
					}
					this._trigger("drop", d, this.ui(c));
					return this.element
				}
				return false
			},
			ui: function(d) {
				return {
					draggable: (d.currentItem || d.element),
					helper: d.helper,
					position: d.position,
					offset: d.positionAbs
				}
			}
		});
		a.ui.intersect = function(q, j, o) {
			if (!j.offset) {
				return false
			}
			var e = (q.positionAbs || q.position.absolute).left
			  , d = e + q.helperProportions.width
			  , n = (q.positionAbs || q.position.absolute).top
			  , m = n + q.helperProportions.height;
			var g = j.offset.left
			  , c = g + j.proportions.width
			  , p = j.offset.top
			  , k = p + j.proportions.height;
			switch (o) {
			case "fit":
				return (g <= e && d <= c && p <= n && m <= k);
				break;
			case "intersect":
				return (g < e + (q.helperProportions.width / 2) && d - (q.helperProportions.width / 2) < c && p < n + (q.helperProportions.height / 2) && m - (q.helperProportions.height / 2) < k);
				break;
			case "pointer":
				var h = ((q.positionAbs || q.position.absolute).left + (q.clickOffset || q.offset.click).left)
				  , i = ((q.positionAbs || q.position.absolute).top + (q.clickOffset || q.offset.click).top)
				  , f = a.ui.isOver(i, h, p, g, j.proportions.height, j.proportions.width);
				return f;
				break;
			case "touch":
				return ((n >= p && n <= k) || (m >= p && m <= k) || (n < p && m > k)) && ((e >= g && e <= c) || (d >= g && d <= c) || (e < g && d > c));
				break;
			default:
				return false;
				break
			}
		}
		;
		a.ui.ddmanager = {
			current: null,
			droppables: {
				"default": []
			},
			prepareOffsets: function(f, h) {
				var c = a.ui.ddmanager.droppables[f.options.scope] || [];
				var g = h ? h.type : null;
				var k = (f.currentItem || f.element).find(":data(droppable)").andSelf();
				droppablesLoop: for (var e = 0; e < c.length; e++) {
					if (c[e].options.disabled || (f && !c[e].accept.call(c[e].element[0], (f.currentItem || f.element)))) {
						continue
					}
					for (var d = 0; d < k.length; d++) {
						if (k[d] == c[e].element[0]) {
							c[e].proportions.height = 0;
							continue droppablesLoop
						}
					}
					c[e].visible = c[e].element.css("display") != "none";
					if (!c[e].visible) {
						continue
					}
					if (g == "mousedown") {
						c[e]._activate.call(c[e], h)
					}
					c[e].offset = c[e].element.offset();
					c[e].proportions = {
						width: c[e].element[0].offsetWidth,
						height: c[e].element[0].offsetHeight
					}
				}
			},
			drop: function(c, d) {
				var e = false;
				a.each(a.ui.ddmanager.droppables[c.options.scope] || [], function() {
					if (!this.options) {
						return
					}
					if (!this.options.disabled && this.visible && a.ui.intersect(c, this, this.options.tolerance)) {
						e = this._drop.call(this, d) || e
					}
					if (!this.options.disabled && this.visible && this.accept.call(this.element[0], (c.currentItem || c.element))) {
						this.isout = 1;
						this.isover = 0;
						this._deactivate.call(this, d)
					}
				});
				return e
			},
			dragStart: function(c, d) {
				c.element.parentsUntil("body").bind("scroll.droppable", function() {
					if (!c.options.refreshPositions) {
						a.ui.ddmanager.prepareOffsets(c, d)
					}
				})
			},
			drag: function(c, d) {
				if (c.options.refreshPositions) {
					a.ui.ddmanager.prepareOffsets(c, d)
				}
				a.each(a.ui.ddmanager.droppables[c.options.scope] || [], function() {
					if (this.options.disabled || this.greedyChild || !this.visible) {
						return
					}
					var g = a.ui.intersect(c, this, this.options.tolerance);
					var i = !g && this.isover == 1 ? "isout" : (g && this.isover == 0 ? "isover" : null);
					if (!i) {
						return
					}
					var h;
					if (this.options.greedy) {
						var f = this.options.scope;
						var e = this.element.parents(":data(droppable)").filter(function() {
							return a.data(this, "droppable").options.scope === f
						});
						if (e.length) {
							h = a.data(e[0], "droppable");
							h.greedyChild = (i == "isover" ? 1 : 0)
						}
					}
					if (h && i == "isover") {
						h.isover = 0;
						h.isout = 1;
						h._out.call(h, d)
					}
					this[i] = 1;
					this[i == "isout" ? "isover" : "isout"] = 0;
					this[i == "isover" ? "_over" : "_out"].call(this, d);
					if (h && i == "isout") {
						h.isout = 0;
						h.isover = 1;
						h._over.call(h, d)
					}
				})
			},
			dragStop: function(c, d) {
				c.element.parentsUntil("body").unbind("scroll.droppable");
				if (!c.options.refreshPositions) {
					a.ui.ddmanager.prepareOffsets(c, d)
				}
			}
		}
	}
	)(jQuery);
	(function(c, d) {
		c.widget("ui.resizable", c.ui.mouse, {
			version: "1.9.2",
			widgetEventPrefix: "resize",
			options: {
				alsoResize: false,
				animate: false,
				animateDuration: "slow",
				animateEasing: "swing",
				aspectRatio: false,
				autoHide: false,
				containment: false,
				ghost: false,
				grid: false,
				handles: "e,s,se",
				helper: false,
				maxHeight: null,
				maxWidth: null,
				minHeight: 10,
				minWidth: 10,
				zIndex: 1000
			},
			_create: function() {
				var h = this
				  , k = this.options;
				this.element.addClass("ui-resizable");
				c.extend(this, {
					_aspectRatio: !!(k.aspectRatio),
					aspectRatio: k.aspectRatio,
					originalElement: this.element,
					_proportionallyResizeElements: [],
					_helper: k.helper || k.ghost || k.animate ? k.helper || "ui-resizable-helper" : null
				});
				if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
					this.element.wrap(c('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
						position: this.element.css("position"),
						width: this.element.outerWidth(),
						height: this.element.outerHeight(),
						top: this.element.css("top"),
						left: this.element.css("left")
					}));
					this.element = this.element.parent().data("resizable", this.element.data("resizable"));
					this.elementIsWrapper = true;
					this.element.css({
						marginLeft: this.originalElement.css("marginLeft"),
						marginTop: this.originalElement.css("marginTop"),
						marginRight: this.originalElement.css("marginRight"),
						marginBottom: this.originalElement.css("marginBottom")
					});
					this.originalElement.css({
						marginLeft: 0,
						marginTop: 0,
						marginRight: 0,
						marginBottom: 0
					});
					this.originalResizeStyle = this.originalElement.css("resize");
					this.originalElement.css("resize", "none");
					this._proportionallyResizeElements.push(this.originalElement.css({
						position: "static",
						zoom: 1,
						display: "block"
					}));
					this.originalElement.css({
						margin: this.originalElement.css("margin")
					});
					this._proportionallyResize()
				}
				this.handles = k.handles || (!c(".ui-resizable-handle", this.element).length ? "e,s,se" : {
					n: ".ui-resizable-n",
					e: ".ui-resizable-e",
					s: ".ui-resizable-s",
					w: ".ui-resizable-w",
					se: ".ui-resizable-se",
					sw: ".ui-resizable-sw",
					ne: ".ui-resizable-ne",
					nw: ".ui-resizable-nw"
				});
				if (this.handles.constructor == String) {
					if (this.handles == "all") {
						this.handles = "n,e,s,w,se,sw,ne,nw"
					}
					var l = this.handles.split(",");
					this.handles = {};
					for (var f = 0; f < l.length; f++) {
						var j = c.trim(l[f])
						  , e = "ui-resizable-" + j;
						var g = c('<div class="ui-resizable-handle ' + e + '"></div>');
						g.css({
							zIndex: k.zIndex
						});
						if ("se" == j) {
							g.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
						}
						this.handles[j] = ".ui-resizable-" + j;
						this.element.append(g)
					}
				}
				this._renderAxis = function(q) {
					q = q || this.element;
					for (var n in this.handles) {
						if (this.handles[n].constructor == String) {
							this.handles[n] = c(this.handles[n], this.element).show()
						}
						if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
							var o = c(this.handles[n], this.element)
							  , p = 0;
							p = /sw|ne|nw|se|n|s/.test(n) ? o.outerHeight() : o.outerWidth();
							var m = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join("");
							q.css(m, p);
							this._proportionallyResize()
						}
						if (!c(this.handles[n]).length) {
							continue
						}
					}
				}
				;
				this._renderAxis(this.element);
				this._handles = c(".ui-resizable-handle", this.element).disableSelection();
				this._handles.mouseover(function() {
					if (!h.resizing) {
						if (this.className) {
							var i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
						}
						h.axis = i && i[1] ? i[1] : "se"
					}
				});
				if (k.autoHide) {
					this._handles.hide();
					c(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
						if (k.disabled) {
							return
						}
						c(this).removeClass("ui-resizable-autohide");
						h._handles.show()
					}).mouseleave(function() {
						if (k.disabled) {
							return
						}
						if (!h.resizing) {
							c(this).addClass("ui-resizable-autohide");
							h._handles.hide()
						}
					})
				}
				this._mouseInit()
			},
			_destroy: function() {
				this._mouseDestroy();
				var e = function(g) {
					c(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
				};
				if (this.elementIsWrapper) {
					e(this.element);
					var f = this.element;
					this.originalElement.css({
						position: f.css("position"),
						width: f.outerWidth(),
						height: f.outerHeight(),
						top: f.css("top"),
						left: f.css("left")
					}).insertAfter(f);
					f.remove()
				}
				this.originalElement.css("resize", this.originalResizeStyle);
				e(this.originalElement);
				return this
			},
			_mouseCapture: function(f) {
				var g = false;
				for (var e in this.handles) {
					if (c(this.handles[e])[0] == f.target) {
						g = true
					}
				}
				return !this.options.disabled && g
			},
			_mouseStart: function(g) {
				var j = this.options
				  , f = this.element.position()
				  , e = this.element;
				this.resizing = true;
				this.documentScroll = {
					top: c(document).scrollTop(),
					left: c(document).scrollLeft()
				};
				if (e.is(".ui-draggable") || (/absolute/).test(e.css("position"))) {
					e.css({
						position: "absolute",
						top: f.top,
						left: f.left
					})
				}
				this._renderProxy();
				var k = b(this.helper.css("left"))
				  , h = b(this.helper.css("top"));
				if (j.containment) {
					k += c(j.containment).scrollLeft() || 0;
					h += c(j.containment).scrollTop() || 0
				}
				this.offset = this.helper.offset();
				this.position = {
					left: k,
					top: h
				};
				this.size = this._helper ? {
					width: e.outerWidth(),
					height: e.outerHeight()
				} : {
					width: e.width(),
					height: e.height()
				};
				this.originalSize = this._helper ? {
					width: e.outerWidth(),
					height: e.outerHeight()
				} : {
					width: e.width(),
					height: e.height()
				};
				this.originalPosition = {
					left: k,
					top: h
				};
				this.sizeDiff = {
					width: e.outerWidth() - e.width(),
					height: e.outerHeight() - e.height()
				};
				this.originalMousePosition = {
					left: g.pageX,
					top: g.pageY
				};
				this.aspectRatio = (typeof j.aspectRatio == "number") ? j.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);
				var i = c(".ui-resizable-" + this.axis).css("cursor");
				c("body").css("cursor", i == "auto" ? this.axis + "-resize" : i);
				e.addClass("ui-resizable-resizing");
				this._propagate("start", g);
				return true
			},
			_mouseDrag: function(e) {
				var g = this.helper
				  , f = this.options
				  , l = {}
				  , k = this
				  , i = this.originalMousePosition
				  , m = this.axis;
				var p = (e.pageX - i.left) || 0
				  , n = (e.pageY - i.top) || 0;
				var h = this._change[m];
				if (!h) {
					return false
				}
				var j = h.apply(this, [e, p, n]);
				this._updateVirtualBoundaries(e.shiftKey);
				if (this._aspectRatio || e.shiftKey) {
					j = this._updateRatio(j, e)
				}
				j = this._respectSize(j, e);
				this._propagate("resize", e);
				g.css({
					top: this.position.top + "px",
					left: this.position.left + "px",
					width: this.size.width + "px",
					height: this.size.height + "px"
				});
				if (!this._helper && this._proportionallyResizeElements.length) {
					this._proportionallyResize()
				}
				this._updateCache(j);
				this._trigger("resize", e, this.ui());
				return false
			},
			_mouseStop: function(h) {
				this.resizing = false;
				var i = this.options
				  , l = this;
				if (this._helper) {
					var g = this._proportionallyResizeElements
					  , e = g.length && (/textarea/i).test(g[0].nodeName)
					  , f = e && c.ui.hasScroll(g[0], "left") ? 0 : l.sizeDiff.height
					  , k = e ? 0 : l.sizeDiff.width;
					var n = {
						width: (l.helper.width() - k),
						height: (l.helper.height() - f)
					}
					  , j = (parseInt(l.element.css("left"), 10) + (l.position.left - l.originalPosition.left)) || null
					  , m = (parseInt(l.element.css("top"), 10) + (l.position.top - l.originalPosition.top)) || null;
					if (!i.animate) {
						this.element.css(c.extend(n, {
							top: m,
							left: j
						}))
					}
					l.helper.height(l.size.height);
					l.helper.width(l.size.width);
					if (this._helper && !i.animate) {
						this._proportionallyResize()
					}
				}
				c("body").css("cursor", "auto");
				this.element.removeClass("ui-resizable-resizing");
				this._propagate("stop", h);
				if (this._helper) {
					this.helper.remove()
				}
				return false
			},
			_updateVirtualBoundaries: function(g) {
				var j = this.options, i, h, f, k, e;
				e = {
					minWidth: a(j.minWidth) ? j.minWidth : 0,
					maxWidth: a(j.maxWidth) ? j.maxWidth : Infinity,
					minHeight: a(j.minHeight) ? j.minHeight : 0,
					maxHeight: a(j.maxHeight) ? j.maxHeight : Infinity
				};
				if (this._aspectRatio || g) {
					i = e.minHeight * this.aspectRatio;
					f = e.minWidth / this.aspectRatio;
					h = e.maxHeight * this.aspectRatio;
					k = e.maxWidth / this.aspectRatio;
					if (i > e.minWidth) {
						e.minWidth = i
					}
					if (f > e.minHeight) {
						e.minHeight = f
					}
					if (h < e.maxWidth) {
						e.maxWidth = h
					}
					if (k < e.maxHeight) {
						e.maxHeight = k
					}
				}
				this._vBoundaries = e
			},
			_updateCache: function(e) {
				var f = this.options;
				this.offset = this.helper.offset();
				if (a(e.left)) {
					this.position.left = e.left
				}
				if (a(e.top)) {
					this.position.top = e.top
				}
				if (a(e.height)) {
					this.size.height = e.height
				}
				if (a(e.width)) {
					this.size.width = e.width
				}
			},
			_updateRatio: function(h, g) {
				var i = this.options
				  , j = this.position
				  , f = this.size
				  , e = this.axis;
				if (a(h.height)) {
					h.width = (h.height * this.aspectRatio)
				} else {
					if (a(h.width)) {
						h.height = (h.width / this.aspectRatio)
					}
				}
				if (e == "sw") {
					h.left = j.left + (f.width - h.width);
					h.top = null
				}
				if (e == "nw") {
					h.top = j.top + (f.height - h.height);
					h.left = j.left + (f.width - h.width)
				}
				return h
			},
			_respectSize: function(l, g) {
				var j = this.helper
				  , i = this._vBoundaries
				  , r = this._aspectRatio || g.shiftKey
				  , q = this.axis
				  , t = a(l.width) && i.maxWidth && (i.maxWidth < l.width)
				  , m = a(l.height) && i.maxHeight && (i.maxHeight < l.height)
				  , h = a(l.width) && i.minWidth && (i.minWidth > l.width)
				  , s = a(l.height) && i.minHeight && (i.minHeight > l.height);
				if (h) {
					l.width = i.minWidth
				}
				if (s) {
					l.height = i.minHeight
				}
				if (t) {
					l.width = i.maxWidth
				}
				if (m) {
					l.height = i.maxHeight
				}
				var f = this.originalPosition.left + this.originalSize.width
				  , p = this.position.top + this.size.height;
				var k = /sw|nw|w/.test(q)
				  , e = /nw|ne|n/.test(q);
				if (h && k) {
					l.left = f - i.minWidth
				}
				if (t && k) {
					l.left = f - i.maxWidth
				}
				if (s && e) {
					l.top = p - i.minHeight
				}
				if (m && e) {
					l.top = p - i.maxHeight
				}
				var n = !l.width && !l.height;
				if (n && !l.left && l.top) {
					l.top = null
				} else {
					if (n && !l.top && l.left) {
						l.left = null
					}
				}
				return l
			},
			_proportionallyResize: function() {
				var k = this.options;
				if (!this._proportionallyResizeElements.length) {
					return
				}
				var g = this.helper || this.element;
				for (var f = 0; f < this._proportionallyResizeElements.length; f++) {
					var h = this._proportionallyResizeElements[f];
					if (!this.borderDif) {
						var e = [h.css("borderTopWidth"), h.css("borderRightWidth"), h.css("borderBottomWidth"), h.css("borderLeftWidth")]
						  , j = [h.css("paddingTop"), h.css("paddingRight"), h.css("paddingBottom"), h.css("paddingLeft")];
						this.borderDif = c.map(e, function(l, n) {
							var m = parseInt(l, 10) || 0
							  , o = parseInt(j[n], 10) || 0;
							return m + o
						})
					}
					h.css({
						height: (g.height() - this.borderDif[0] - this.borderDif[2]) || 0,
						width: (g.width() - this.borderDif[1] - this.borderDif[3]) || 0
					})
				}
			},
			_renderProxy: function() {
				var e = this.element
				  , h = this.options;
				this.elementOffset = e.offset();
				if (this._helper) {
					this.helper = this.helper || c('<div style="overflow:hidden;"></div>');
					var f = (c.ui.ie6 ? 1 : 0)
					  , g = (c.ui.ie6 ? 2 : -1);
					this.helper.addClass(this._helper).css({
						width: this.element.outerWidth() + g,
						height: this.element.outerHeight() + g,
						position: "absolute",
						left: this.elementOffset.left - f + "px",
						top: this.elementOffset.top - f + "px",
						zIndex: ++h.zIndex
					});
					this.helper.appendTo("body").disableSelection()
				} else {
					this.helper = this.element
				}
			},
			_change: {
				e: function(g, f, e) {
					return {
						width: this.originalSize.width + f
					}
				},
				w: function(h, f, e) {
					var j = this.options
					  , g = this.originalSize
					  , i = this.originalPosition;
					return {
						left: i.left + f,
						width: g.width - f
					}
				},
				n: function(h, f, e) {
					var j = this.options
					  , g = this.originalSize
					  , i = this.originalPosition;
					return {
						top: i.top + e,
						height: g.height - e
					}
				},
				s: function(g, f, e) {
					return {
						height: this.originalSize.height + e
					}
				},
				se: function(g, f, e) {
					return c.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [g, f, e]))
				},
				sw: function(g, f, e) {
					return c.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [g, f, e]))
				},
				ne: function(g, f, e) {
					return c.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [g, f, e]))
				},
				nw: function(g, f, e) {
					return c.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [g, f, e]))
				}
			},
			_propagate: function(f, e) {
				c.ui.plugin.call(this, f, [e, this.ui()]);
				(f != "resize" && this._trigger(f, e, this.ui()))
			},
			plugins: {},
			ui: function() {
				return {
					originalElement: this.originalElement,
					element: this.element,
					helper: this.helper,
					position: this.position,
					size: this.size,
					originalSize: this.originalSize,
					originalPosition: this.originalPosition
				}
			}
		});
		c.ui.plugin.add("resizable", "alsoResize", {
			start: function(f, g) {
				var e = c(this).data("resizable")
				  , i = e.options;
				var h = function(j) {
					c(j).each(function() {
						var k = c(this);
						k.data("resizable-alsoresize", {
							width: parseInt(k.width(), 10),
							height: parseInt(k.height(), 10),
							left: parseInt(k.css("left"), 10),
							top: parseInt(k.css("top"), 10)
						})
					})
				};
				if (typeof (i.alsoResize) == "object" && !i.alsoResize.parentNode) {
					if (i.alsoResize.length) {
						i.alsoResize = i.alsoResize[0];
						h(i.alsoResize)
					} else {
						c.each(i.alsoResize, function(j) {
							h(j)
						})
					}
				} else {
					h(i.alsoResize)
				}
			},
			resize: function(g, i) {
				var f = c(this).data("resizable")
				  , j = f.options
				  , h = f.originalSize
				  , l = f.originalPosition;
				var k = {
					height: (f.size.height - h.height) || 0,
					width: (f.size.width - h.width) || 0,
					top: (f.position.top - l.top) || 0,
					left: (f.position.left - l.left) || 0
				}
				  , e = function(m, n) {
					c(m).each(function() {
						var q = c(this)
						  , r = c(this).data("resizable-alsoresize")
						  , p = {}
						  , o = n && n.length ? n : q.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
						c.each(o, function(s, u) {
							var t = (r[u] || 0) + (k[u] || 0);
							if (t && t >= 0) {
								p[u] = t || null
							}
						});
						q.css(p)
					})
				};
				if (typeof (j.alsoResize) == "object" && !j.alsoResize.nodeType) {
					c.each(j.alsoResize, function(m, n) {
						e(m, n)
					})
				} else {
					e(j.alsoResize)
				}
			},
			stop: function(e, f) {
				c(this).removeData("resizable-alsoresize")
			}
		});
		c.ui.plugin.add("resizable", "animate", {
			stop: function(i, p) {
				var m = c(this).data("resizable")
				  , j = m.options;
				var h = m._proportionallyResizeElements
				  , e = h.length && (/textarea/i).test(h[0].nodeName)
				  , f = e && c.ui.hasScroll(h[0], "left") ? 0 : m.sizeDiff.height
				  , l = e ? 0 : m.sizeDiff.width;
				var g = {
					width: (m.size.width - l),
					height: (m.size.height - f)
				}
				  , k = (parseInt(m.element.css("left"), 10) + (m.position.left - m.originalPosition.left)) || null
				  , n = (parseInt(m.element.css("top"), 10) + (m.position.top - m.originalPosition.top)) || null;
				m.element.animate(c.extend(g, n && k ? {
					top: n,
					left: k
				} : {}), {
					duration: j.animateDuration,
					easing: j.animateEasing,
					step: function() {
						var o = {
							width: parseInt(m.element.css("width"), 10),
							height: parseInt(m.element.css("height"), 10),
							top: parseInt(m.element.css("top"), 10),
							left: parseInt(m.element.css("left"), 10)
						};
						if (h && h.length) {
							c(h[0]).css({
								width: o.width,
								height: o.height
							})
						}
						m._updateCache(o);
						m._propagate("resize", i)
					}
				})
			}
		});
		c.ui.plugin.add("resizable", "containment", {
			start: function(f, s) {
				var q = c(this).data("resizable")
				  , j = q.options
				  , l = q.element;
				var g = j.containment
				  , k = (g instanceof c) ? g.get(0) : (/parent/.test(g)) ? l.parent().get(0) : g;
				if (!k) {
					return
				}
				q.containerElement = c(k);
				if (/document/.test(g) || g == document) {
					q.containerOffset = {
						left: 0,
						top: 0
					};
					q.containerPosition = {
						left: 0,
						top: 0
					};
					q.parentData = {
						element: c(document),
						left: 0,
						top: 0,
						width: c(document).width(),
						height: c(document).height() || document.body.parentNode.scrollHeight
					}
				} else {
					var n = c(k)
					  , i = [];
					c(["Top", "Right", "Left", "Bottom"]).each(function(p, o) {
						i[p] = b(n.css("padding" + o))
					});
					q.containerOffset = n.offset();
					q.containerPosition = n.position();
					q.containerSize = {
						height: (n.innerHeight() - i[3]),
						width: (n.innerWidth() - i[1])
					};
					var r = q.containerOffset
					  , e = q.containerSize.height
					  , m = q.containerSize.width
					  , h = (c.ui.hasScroll(k, "left") ? k.scrollWidth : m)
					  , t = (c.ui.hasScroll(k) ? k.scrollHeight : e);
					q.parentData = {
						element: k,
						left: r.left,
						top: r.top,
						width: h,
						height: t
					}
				}
			},
			resize: function(g, r) {
				var m = c(this).data("resizable")
				  , i = m.options
				  , f = m.containerSize
				  , q = m.containerOffset
				  , n = m.size
				  , p = m.position
				  , s = m._aspectRatio || g.shiftKey
				  , e = {
					top: 0,
					left: 0
				}
				  , h = m.containerElement;
				if (h[0] != document && (/static/).test(h.css("position"))) {
					e = q
				}
				if (p.left < (m._helper ? q.left : 0)) {
					m.size.width = m.size.width + (m._helper ? (m.position.left - q.left) : (m.position.left - e.left));
					if (s) {
						m.size.height = m.size.width / m.aspectRatio
					}
					m.position.left = i.helper ? q.left : 0
				}
				if (p.top < (m._helper ? q.top : 0)) {
					m.size.height = m.size.height + (m._helper ? (m.position.top - q.top) : m.position.top);
					if (s) {
						m.size.width = m.size.height * m.aspectRatio
					}
					m.position.top = m._helper ? q.top : 0
				}
				m.offset.left = m.parentData.left + m.position.left;
				m.offset.top = m.parentData.top + m.position.top;
				var l = Math.abs((m._helper ? m.offset.left - e.left : (m.offset.left - e.left)) + m.sizeDiff.width)
				  , t = Math.abs((m._helper ? m.offset.top - e.top : (m.offset.top - q.top)) + m.sizeDiff.height);
				var k = m.containerElement.get(0) == m.element.parent().get(0)
				  , j = /relative|absolute/.test(m.containerElement.css("position"));
				if (k && j) {
					l -= m.parentData.left
				}
				if (l + m.size.width >= m.parentData.width) {
					m.size.width = m.parentData.width - l;
					if (s) {
						m.size.height = m.size.width / m.aspectRatio
					}
				}
				if (t + m.size.height >= m.parentData.height) {
					m.size.height = m.parentData.height - t;
					if (s) {
						m.size.width = m.size.height * m.aspectRatio
					}
				}
			},
			stop: function(f, p) {
				var l = c(this).data("resizable")
				  , g = l.options
				  , m = l.position
				  , n = l.containerOffset
				  , e = l.containerPosition
				  , i = l.containerElement;
				var j = c(l.helper)
				  , r = j.offset()
				  , q = j.outerWidth() - l.sizeDiff.width
				  , k = j.outerHeight() - l.sizeDiff.height;
				if (l._helper && !g.animate && (/relative/).test(i.css("position"))) {
					c(this).css({
						left: r.left - e.left - n.left,
						width: q,
						height: k
					})
				}
				if (l._helper && !g.animate && (/static/).test(i.css("position"))) {
					c(this).css({
						left: r.left - e.left - n.left,
						width: q,
						height: k
					})
				}
			}
		});
		c.ui.plugin.add("resizable", "ghost", {
			start: function(g, h) {
				var f = c(this).data("resizable")
				  , i = f.options
				  , e = f.size;
				f.ghost = f.originalElement.clone();
				f.ghost.css({
					opacity: 0.25,
					display: "block",
					position: "relative",
					height: e.height,
					width: e.width,
					margin: 0,
					left: 0,
					top: 0
				}).addClass("ui-resizable-ghost").addClass(typeof i.ghost == "string" ? i.ghost : "");
				f.ghost.appendTo(f.helper)
			},
			resize: function(f, g) {
				var e = c(this).data("resizable")
				  , h = e.options;
				if (e.ghost) {
					e.ghost.css({
						position: "relative",
						height: e.size.height,
						width: e.size.width
					})
				}
			},
			stop: function(f, g) {
				var e = c(this).data("resizable")
				  , h = e.options;
				if (e.ghost && e.helper) {
					e.helper.get(0).removeChild(e.ghost.get(0))
				}
			}
		});
		c.ui.plugin.add("resizable", "grid", {
			resize: function(e, n) {
				var k = c(this).data("resizable")
				  , h = k.options
				  , l = k.size
				  , i = k.originalSize
				  , j = k.originalPosition
				  , p = k.axis
				  , m = h._aspectRatio || e.shiftKey;
				h.grid = typeof h.grid == "number" ? [h.grid, h.grid] : h.grid;
				var g = Math.round((l.width - i.width) / (h.grid[0] || 1)) * (h.grid[0] || 1)
				  , f = Math.round((l.height - i.height) / (h.grid[1] || 1)) * (h.grid[1] || 1);
				if (/^(se|s|e)$/.test(p)) {
					k.size.width = i.width + g;
					k.size.height = i.height + f
				} else {
					if (/^(ne)$/.test(p)) {
						k.size.width = i.width + g;
						k.size.height = i.height + f;
						k.position.top = j.top - f
					} else {
						if (/^(sw)$/.test(p)) {
							k.size.width = i.width + g;
							k.size.height = i.height + f;
							k.position.left = j.left - g
						} else {
							k.size.width = i.width + g;
							k.size.height = i.height + f;
							k.position.top = j.top - f;
							k.position.left = j.left - g
						}
					}
				}
			}
		});
		var b = function(e) {
			return parseInt(e, 10) || 0
		};
		var a = function(e) {
			return !isNaN(parseInt(e, 10))
		}
	}
	)(jQuery);
	(function(a, b) {
		a.widget("ui.selectable", a.ui.mouse, {
			version: "1.9.2",
			options: {
				appendTo: "body",
				autoRefresh: true,
				distance: 0,
				filter: "*",
				tolerance: "touch"
			},
			_create: function() {
				var c = this;
				this.element.addClass("ui-selectable");
				this.dragged = false;
				var d;
				this.refresh = function() {
					d = a(c.options.filter, c.element[0]);
					d.addClass("ui-selectee");
					d.each(function() {
						var e = a(this);
						var f = e.offset();
						a.data(this, "selectable-item", {
							element: this,
							$element: e,
							left: f.left,
							top: f.top,
							right: f.left + e.outerWidth(),
							bottom: f.top + e.outerHeight(),
							startselected: false,
							selected: e.hasClass("ui-selected"),
							selecting: e.hasClass("ui-selecting"),
							unselecting: e.hasClass("ui-unselecting")
						})
					})
				}
				;
				this.refresh();
				this.selectees = d.addClass("ui-selectee");
				this._mouseInit();
				this.helper = a("<div class='ui-selectable-helper'></div>")
			},
			_destroy: function() {
				this.selectees.removeClass("ui-selectee").removeData("selectable-item");
				this.element.removeClass("ui-selectable ui-selectable-disabled");
				this._mouseDestroy()
			},
			_mouseStart: function(e) {
				var d = this;
				this.opos = [e.pageX, e.pageY];
				if (this.options.disabled) {
					return
				}
				var c = this.options;
				this.selectees = a(c.filter, this.element[0]);
				this._trigger("start", e);
				a(c.appendTo).append(this.helper);
				this.helper.css({
					left: e.clientX,
					top: e.clientY,
					width: 0,
					height: 0
				});
				if (c.autoRefresh) {
					this.refresh()
				}
				this.selectees.filter(".ui-selected").each(function() {
					var f = a.data(this, "selectable-item");
					f.startselected = true;
					if (!e.metaKey && !e.ctrlKey) {
						f.$element.removeClass("ui-selected");
						f.selected = false;
						f.$element.addClass("ui-unselecting");
						f.unselecting = true;
						d._trigger("unselecting", e, {
							unselecting: f.element
						})
					}
				});
				a(e.target).parents().andSelf().each(function() {
					var g = a.data(this, "selectable-item");
					if (g) {
						var f = (!e.metaKey && !e.ctrlKey) || !g.$element.hasClass("ui-selected");
						g.$element.removeClass(f ? "ui-unselecting" : "ui-selected").addClass(f ? "ui-selecting" : "ui-unselecting");
						g.unselecting = !f;
						g.selecting = f;
						g.selected = f;
						if (f) {
							d._trigger("selecting", e, {
								selecting: g.element
							})
						} else {
							d._trigger("unselecting", e, {
								unselecting: g.element
							})
						}
						return false
					}
				})
			},
			_mouseDrag: function(j) {
				var i = this;
				this.dragged = true;
				if (this.options.disabled) {
					return
				}
				var e = this.options;
				var d = this.opos[0]
				  , h = this.opos[1]
				  , c = j.pageX
				  , g = j.pageY;
				if (d > c) {
					var f = c;
					c = d;
					d = f
				}
				if (h > g) {
					var f = g;
					g = h;
					h = f
				}
				this.helper.css({
					left: d,
					top: h,
					width: c - d,
					height: g - h
				});
				this.selectees.each(function() {
					var k = a.data(this, "selectable-item");
					if (!k || k.element == i.element[0]) {
						return
					}
					var l = false;
					if (e.tolerance == "touch") {
						l = (!(k.left > c || k.right < d || k.top > g || k.bottom < h))
					} else {
						if (e.tolerance == "fit") {
							l = (k.left > d && k.right < c && k.top > h && k.bottom < g)
						}
					}
					if (l) {
						if (k.selected) {
							k.$element.removeClass("ui-selected");
							k.selected = false
						}
						if (k.unselecting) {
							k.$element.removeClass("ui-unselecting");
							k.unselecting = false
						}
						if (!k.selecting) {
							k.$element.addClass("ui-selecting");
							k.selecting = true;
							i._trigger("selecting", j, {
								selecting: k.element
							})
						}
					} else {
						if (k.selecting) {
							if ((j.metaKey || j.ctrlKey) && k.startselected) {
								k.$element.removeClass("ui-selecting");
								k.selecting = false;
								k.$element.addClass("ui-selected");
								k.selected = true
							} else {
								k.$element.removeClass("ui-selecting");
								k.selecting = false;
								if (k.startselected) {
									k.$element.addClass("ui-unselecting");
									k.unselecting = true
								}
								i._trigger("unselecting", j, {
									unselecting: k.element
								})
							}
						}
						if (k.selected) {
							if (!j.metaKey && !j.ctrlKey && !k.startselected) {
								k.$element.removeClass("ui-selected");
								k.selected = false;
								k.$element.addClass("ui-unselecting");
								k.unselecting = true;
								i._trigger("unselecting", j, {
									unselecting: k.element
								})
							}
						}
					}
				});
				return false
			},
			_mouseStop: function(e) {
				var d = this;
				this.dragged = false;
				var c = this.options;
				a(".ui-unselecting", this.element[0]).each(function() {
					var f = a.data(this, "selectable-item");
					f.$element.removeClass("ui-unselecting");
					f.unselecting = false;
					f.startselected = false;
					d._trigger("unselected", e, {
						unselected: f.element
					})
				});
				a(".ui-selecting", this.element[0]).each(function() {
					var f = a.data(this, "selectable-item");
					f.$element.removeClass("ui-selecting").addClass("ui-selected");
					f.selecting = false;
					f.selected = true;
					f.startselected = true;
					d._trigger("selected", e, {
						selected: f.element
					})
				});
				this._trigger("stop", e);
				this.helper.remove();
				return false
			}
		})
	}
	)(jQuery);
	(function(a, b) {
		a.widget("ui.sortable", a.ui.mouse, {
			version: "1.9.2",
			widgetEventPrefix: "sort",
			ready: false,
			options: {
				appendTo: "parent",
				axis: false,
				connectWith: false,
				containment: false,
				cursor: "auto",
				cursorAt: false,
				dropOnEmpty: true,
				forcePlaceholderSize: false,
				forceHelperSize: false,
				grid: false,
				handle: false,
				helper: "original",
				items: "> *",
				opacity: false,
				placeholder: false,
				revert: false,
				scroll: true,
				scrollSensitivity: 20,
				scrollSpeed: 20,
				scope: "default",
				tolerance: "intersect",
				zIndex: 1000
			},
			_create: function() {
				var c = this.options;
				this.containerCache = {};
				this.element.addClass("ui-sortable");
				this.refresh();
				this.floating = this.items.length ? c.axis === "x" || (/left|right/).test(this.items[0].item.css("float")) || (/inline|table-cell/).test(this.items[0].item.css("display")) : false;
				this.offset = this.element.offset();
				this._mouseInit();
				this.ready = true
			},
			_destroy: function() {
				this.element.removeClass("ui-sortable ui-sortable-disabled");
				this._mouseDestroy();
				for (var c = this.items.length - 1; c >= 0; c--) {
					this.items[c].item.removeData(this.widgetName + "-item")
				}
				return this
			},
			_setOption: function(c, d) {
				if (c === "disabled") {
					this.options[c] = d;
					this.widget().toggleClass("ui-sortable-disabled", !!d)
				} else {
					a.Widget.prototype._setOption.apply(this, arguments)
				}
			},
			_mouseCapture: function(f, g) {
				var e = this;
				if (this.reverting) {
					return false
				}
				if (this.options.disabled || this.options.type == "static") {
					return false
				}
				this._refreshItems(f);
				var d = null
				  , c = a(f.target).parents().each(function() {
					if (a.data(this, e.widgetName + "-item") == e) {
						d = a(this);
						return false
					}
				});
				if (a.data(f.target, e.widgetName + "-item") == e) {
					d = a(f.target)
				}
				if (!d) {
					return false
				}
				if (this.options.handle && !g) {
					var h = false;
					a(this.options.handle, d).find("*").andSelf().each(function() {
						if (this == f.target) {
							h = true
						}
					});
					if (!h) {
						return false
					}
				}
				this.currentItem = d;
				this._removeCurrentsFromItems();
				return true
			},
			_mouseStart: function(e, f, c) {
				var g = this.options;
				this.currentContainer = this;
				this.refreshPositions();
				this.helper = this._createHelper(e);
				this._cacheHelperProportions();
				this._cacheMargins();
				this.scrollParent = this.helper.scrollParent();
				this.offset = this.currentItem.offset();
				this.offset = {
					top: this.offset.top - this.margins.top,
					left: this.offset.left - this.margins.left
				};
				a.extend(this.offset, {
					click: {
						left: e.pageX - this.offset.left,
						top: e.pageY - this.offset.top
					},
					parent: this._getParentOffset(),
					relative: this._getRelativeOffset()
				});
				this.helper.css("position", "absolute");
				this.cssPosition = this.helper.css("position");
				this.originalPosition = this._generatePosition(e);
				this.originalPageX = e.pageX;
				this.originalPageY = e.pageY;
				(g.cursorAt && this._adjustOffsetFromHelper(g.cursorAt));
				this.domPosition = {
					prev: this.currentItem.prev()[0],
					parent: this.currentItem.parent()[0]
				};
				if (this.helper[0] != this.currentItem[0]) {
					this.currentItem.hide()
				}
				this._createPlaceholder();
				if (g.containment) {
					this._setContainment()
				}
				if (g.cursor) {
					if (a("body").css("cursor")) {
						this._storedCursor = a("body").css("cursor")
					}
					a("body").css("cursor", g.cursor)
				}
				if (g.opacity) {
					if (this.helper.css("opacity")) {
						this._storedOpacity = this.helper.css("opacity")
					}
					this.helper.css("opacity", g.opacity)
				}
				if (g.zIndex) {
					if (this.helper.css("zIndex")) {
						this._storedZIndex = this.helper.css("zIndex")
					}
					this.helper.css("zIndex", g.zIndex)
				}
				if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") {
					this.overflowOffset = this.scrollParent.offset()
				}
				this._trigger("start", e, this._uiHash());
				if (!this._preserveHelperProportions) {
					this._cacheHelperProportions()
				}
				if (!c) {
					for (var d = this.containers.length - 1; d >= 0; d--) {
						this.containers[d]._trigger("activate", e, this._uiHash(this))
					}
				}
				if (a.ui.ddmanager) {
					a.ui.ddmanager.current = this
				}
				if (a.ui.ddmanager && !g.dropBehaviour) {
					a.ui.ddmanager.prepareOffsets(this, e)
				}
				this.dragging = true;
				this.helper.addClass("ui-sortable-helper");
				this._mouseDrag(e);
				return true
			},
			_mouseDrag: function(g) {
				this.position = this._generatePosition(g);
				this.positionAbs = this._convertPositionTo("absolute");
				if (!this.lastPositionAbs) {
					this.lastPositionAbs = this.positionAbs
				}
				if (this.options.scroll) {
					var h = this.options
					  , c = false;
					if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") {
						if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - g.pageY < h.scrollSensitivity) {
							this.scrollParent[0].scrollTop = c = this.scrollParent[0].scrollTop + h.scrollSpeed
						} else {
							if (g.pageY - this.overflowOffset.top < h.scrollSensitivity) {
								this.scrollParent[0].scrollTop = c = this.scrollParent[0].scrollTop - h.scrollSpeed
							}
						}
						if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - g.pageX < h.scrollSensitivity) {
							this.scrollParent[0].scrollLeft = c = this.scrollParent[0].scrollLeft + h.scrollSpeed
						} else {
							if (g.pageX - this.overflowOffset.left < h.scrollSensitivity) {
								this.scrollParent[0].scrollLeft = c = this.scrollParent[0].scrollLeft - h.scrollSpeed
							}
						}
					} else {
						if (g.pageY - a(document).scrollTop() < h.scrollSensitivity) {
							c = a(document).scrollTop(a(document).scrollTop() - h.scrollSpeed)
						} else {
							if (a(window).height() - (g.pageY - a(document).scrollTop()) < h.scrollSensitivity) {
								c = a(document).scrollTop(a(document).scrollTop() + h.scrollSpeed)
							}
						}
						if (g.pageX - a(document).scrollLeft() < h.scrollSensitivity) {
							c = a(document).scrollLeft(a(document).scrollLeft() - h.scrollSpeed)
						} else {
							if (a(window).width() - (g.pageX - a(document).scrollLeft()) < h.scrollSensitivity) {
								c = a(document).scrollLeft(a(document).scrollLeft() + h.scrollSpeed)
							}
						}
					}
					if (c !== false && a.ui.ddmanager && !h.dropBehaviour) {
						a.ui.ddmanager.prepareOffsets(this, g)
					}
				}
				this.positionAbs = this._convertPositionTo("absolute");
				if (!this.options.axis || this.options.axis != "y") {
					this.helper[0].style.left = this.position.left + "px"
				}
				if (!this.options.axis || this.options.axis != "x") {
					this.helper[0].style.top = this.position.top + "px"
				}
				for (var e = this.items.length - 1; e >= 0; e--) {
					var f = this.items[e]
					  , d = f.item[0]
					  , j = this._intersectsWithPointer(f);
					if (!j) {
						continue
					}
					if (f.instance !== this.currentContainer) {
						continue
					}
					if (d != this.currentItem[0] && this.placeholder[j == 1 ? "next" : "prev"]()[0] != d && !a.contains(this.placeholder[0], d) && (this.options.type == "semi-dynamic" ? !a.contains(this.element[0], d) : true)) {
						this.direction = j == 1 ? "down" : "up";
						if (this.options.tolerance == "pointer" || this._intersectsWithSides(f)) {
							this._rearrange(g, f)
						} else {
							break
						}
						this._trigger("change", g, this._uiHash());
						break
					}
				}
				this._contactContainers(g);
				if (a.ui.ddmanager) {
					a.ui.ddmanager.drag(this, g)
				}
				this._trigger("sort", g, this._uiHash());
				this.lastPositionAbs = this.positionAbs;
				return false
			},
			_mouseStop: function(d, e) {
				if (!d) {
					return
				}
				if (a.ui.ddmanager && !this.options.dropBehaviour) {
					a.ui.ddmanager.drop(this, d)
				}
				if (this.options.revert) {
					var c = this;
					var f = this.placeholder.offset();
					this.reverting = true;
					a(this.helper).animate({
						left: f.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
						top: f.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
					}, parseInt(this.options.revert, 10) || 500, function() {
						c._clear(d)
					})
				} else {
					this._clear(d, e)
				}
				return false
			},
			cancel: function() {
				if (this.dragging) {
					this._mouseUp({
						target: null
					});
					if (this.options.helper == "original") {
						this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
					} else {
						this.currentItem.show()
					}
					for (var c = this.containers.length - 1; c >= 0; c--) {
						this.containers[c]._trigger("deactivate", null, this._uiHash(this));
						if (this.containers[c].containerCache.over) {
							this.containers[c]._trigger("out", null, this._uiHash(this));
							this.containers[c].containerCache.over = 0
						}
					}
				}
				if (this.placeholder) {
					if (this.placeholder[0].parentNode) {
						this.placeholder[0].parentNode.removeChild(this.placeholder[0])
					}
					if (this.options.helper != "original" && this.helper && this.helper[0].parentNode) {
						this.helper.remove()
					}
					a.extend(this, {
						helper: null,
						dragging: false,
						reverting: false,
						_noFinalSort: null
					});
					if (this.domPosition.prev) {
						a(this.domPosition.prev).after(this.currentItem)
					} else {
						a(this.domPosition.parent).prepend(this.currentItem)
					}
				}
				return this
			},
			serialize: function(e) {
				var c = this._getItemsAsjQuery(e && e.connected);
				var d = [];
				e = e || {};
				a(c).each(function() {
					var f = (a(e.item || this).attr(e.attribute || "id") || "").match(e.expression || (/(.+)[-=_](.+)/));
					if (f) {
						d.push((e.key || f[1] + "[]") + "=" + (e.key && e.expression ? f[1] : f[2]))
					}
				});
				if (!d.length && e.key) {
					d.push(e.key + "=")
				}
				return d.join("&")
			},
			toArray: function(e) {
				var c = this._getItemsAsjQuery(e && e.connected);
				var d = [];
				e = e || {};
				c.each(function() {
					d.push(a(e.item || this).attr(e.attribute || "id") || "")
				});
				return d
			},
			_intersectsWith: function(m) {
				var e = this.positionAbs.left
				  , d = e + this.helperProportions.width
				  , k = this.positionAbs.top
				  , j = k + this.helperProportions.height;
				var f = m.left
				  , c = f + m.width
				  , n = m.top
				  , i = n + m.height;
				var o = this.offset.click.top
				  , h = this.offset.click.left;
				var g = (k + o) > n && (k + o) < i && (e + h) > f && (e + h) < c;
				if (this.options.tolerance == "pointer" || this.options.forcePointerForContainers || (this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > m[this.floating ? "width" : "height"])) {
					return g
				} else {
					return (f < e + (this.helperProportions.width / 2) && d - (this.helperProportions.width / 2) < c && n < k + (this.helperProportions.height / 2) && j - (this.helperProportions.height / 2) < i)
				}
			},
			_intersectsWithPointer: function(e) {
				var f = (this.options.axis === "x") || a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height)
				  , d = (this.options.axis === "y") || a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width)
				  , h = f && d
				  , c = this._getDragVerticalDirection()
				  , g = this._getDragHorizontalDirection();
				if (!h) {
					return false
				}
				return this.floating ? (((g && g == "right") || c == "down") ? 2 : 1) : (c && (c == "down" ? 2 : 1))
			},
			_intersectsWithSides: function(f) {
				var d = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, f.top + (f.height / 2), f.height)
				  , e = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, f.left + (f.width / 2), f.width)
				  , c = this._getDragVerticalDirection()
				  , g = this._getDragHorizontalDirection();
				if (this.floating && g) {
					return ((g == "right" && e) || (g == "left" && !e))
				} else {
					return c && ((c == "down" && d) || (c == "up" && !d))
				}
			},
			_getDragVerticalDirection: function() {
				var c = this.positionAbs.top - this.lastPositionAbs.top;
				return c != 0 && (c > 0 ? "down" : "up")
			},
			_getDragHorizontalDirection: function() {
				var c = this.positionAbs.left - this.lastPositionAbs.left;
				return c != 0 && (c > 0 ? "right" : "left")
			},
			refresh: function(c) {
				this._refreshItems(c);
				this.refreshPositions();
				return this
			},
			_connectWith: function() {
				var c = this.options;
				return c.connectWith.constructor == String ? [c.connectWith] : c.connectWith
			},
			_getItemsAsjQuery: function(h) {
				var c = [];
				var e = [];
				var g = this._connectWith();
				if (g && h) {
					for (var f = g.length - 1; f >= 0; f--) {
						var l = a(g[f]);
						for (var d = l.length - 1; d >= 0; d--) {
							var k = a.data(l[d], this.widgetName);
							if (k && k != this && !k.options.disabled) {
								e.push([a.isFunction(k.options.items) ? k.options.items.call(k.element) : a(k.options.items, k.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), k])
							}
						}
					}
				}
				e.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
					options: this.options,
					item: this.currentItem
				}) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
				for (var f = e.length - 1; f >= 0; f--) {
					e[f][0].each(function() {
						c.push(this)
					})
				}
				return a(c)
			},
			_removeCurrentsFromItems: function() {
				var c = this.currentItem.find(":data(" + this.widgetName + "-item)");
				this.items = a.grep(this.items, function(e) {
					for (var d = 0; d < c.length; d++) {
						if (c[d] == e.item[0]) {
							return false
						}
					}
					return true
				})
			},
			_refreshItems: function(c) {
				this.items = [];
				this.containers = [this];
				var k = this.items;
				var g = [[a.isFunction(this.options.items) ? this.options.items.call(this.element[0], c, {
					item: this.currentItem
				}) : a(this.options.items, this.element), this]];
				var m = this._connectWith();
				if (m && this.ready) {
					for (var f = m.length - 1; f >= 0; f--) {
						var n = a(m[f]);
						for (var e = n.length - 1; e >= 0; e--) {
							var h = a.data(n[e], this.widgetName);
							if (h && h != this && !h.options.disabled) {
								g.push([a.isFunction(h.options.items) ? h.options.items.call(h.element[0], c, {
									item: this.currentItem
								}) : a(h.options.items, h.element), h]);
								this.containers.push(h)
							}
						}
					}
				}
				for (var f = g.length - 1; f >= 0; f--) {
					var l = g[f][1];
					var d = g[f][0];
					for (var e = 0, o = d.length; e < o; e++) {
						var p = a(d[e]);
						p.data(this.widgetName + "-item", l);
						k.push({
							item: p,
							instance: l,
							width: 0,
							height: 0,
							left: 0,
							top: 0
						})
					}
				}
			},
			refreshPositions: function(c) {
				if (this.offsetParent && this.helper) {
					this.offset.parent = this._getParentOffset()
				}
				for (var e = this.items.length - 1; e >= 0; e--) {
					var f = this.items[e];
					if (f.instance != this.currentContainer && this.currentContainer && f.item[0] != this.currentItem[0]) {
						continue
					}
					var d = this.options.toleranceElement ? a(this.options.toleranceElement, f.item) : f.item;
					if (!c) {
						f.width = d.outerWidth();
						f.height = d.outerHeight()
					}
					var g = d.offset();
					f.left = g.left;
					f.top = g.top
				}
				if (this.options.custom && this.options.custom.refreshContainers) {
					this.options.custom.refreshContainers.call(this)
				} else {
					for (var e = this.containers.length - 1; e >= 0; e--) {
						var g = this.containers[e].element.offset();
						this.containers[e].containerCache.left = g.left;
						this.containers[e].containerCache.top = g.top;
						this.containers[e].containerCache.width = this.containers[e].element.outerWidth();
						this.containers[e].containerCache.height = this.containers[e].element.outerHeight()
					}
				}
				return this
			},
			_createPlaceholder: function(d) {
				d = d || this;
				var e = d.options;
				if (!e.placeholder || e.placeholder.constructor == String) {
					var c = e.placeholder;
					e.placeholder = {
						element: function() {
							var f = a(document.createElement(d.currentItem[0].nodeName)).addClass(c || d.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
							if (!c) {
								f.style.visibility = "hidden"
							}
							return f
						},
						update: function(f, g) {
							if (c && !e.forcePlaceholderSize) {
								return
							}
							if (!g.height()) {
								g.height(d.currentItem.innerHeight() - parseInt(d.currentItem.css("paddingTop") || 0, 10) - parseInt(d.currentItem.css("paddingBottom") || 0, 10))
							}
							if (!g.width()) {
								g.width(d.currentItem.innerWidth() - parseInt(d.currentItem.css("paddingLeft") || 0, 10) - parseInt(d.currentItem.css("paddingRight") || 0, 10))
							}
						}
					}
				}
				d.placeholder = a(e.placeholder.element.call(d.element, d.currentItem));
				d.currentItem.after(d.placeholder);
				e.placeholder.update(d, d.placeholder)
			},
			_contactContainers: function(c) {
				var e = null
				  , n = null;
				for (var h = this.containers.length - 1; h >= 0; h--) {
					if (a.contains(this.currentItem[0], this.containers[h].element[0])) {
						continue
					}
					if (this._intersectsWith(this.containers[h].containerCache)) {
						if (e && a.contains(this.containers[h].element[0], e.element[0])) {
							continue
						}
						e = this.containers[h];
						n = h
					} else {
						if (this.containers[h].containerCache.over) {
							this.containers[h]._trigger("out", c, this._uiHash(this));
							this.containers[h].containerCache.over = 0
						}
					}
				}
				if (!e) {
					return
				}
				if (this.containers.length === 1) {
					this.containers[n]._trigger("over", c, this._uiHash(this));
					this.containers[n].containerCache.over = 1
				} else {
					var m = 10000;
					var k = null;
					var l = this.containers[n].floating ? "left" : "top";
					var o = this.containers[n].floating ? "width" : "height";
					var d = this.positionAbs[l] + this.offset.click[l];
					for (var f = this.items.length - 1; f >= 0; f--) {
						if (!a.contains(this.containers[n].element[0], this.items[f].item[0])) {
							continue
						}
						if (this.items[f].item[0] == this.currentItem[0]) {
							continue
						}
						var p = this.items[f].item.offset()[l];
						var g = false;
						if (Math.abs(p - d) > Math.abs(p + this.items[f][o] - d)) {
							g = true;
							p += this.items[f][o]
						}
						if (Math.abs(p - d) < m) {
							m = Math.abs(p - d);
							k = this.items[f];
							this.direction = g ? "up" : "down"
						}
					}
					if (!k && !this.options.dropOnEmpty) {
						return
					}
					this.currentContainer = this.containers[n];
					k ? this._rearrange(c, k, null, true) : this._rearrange(c, null, this.containers[n].element, true);
					this._trigger("change", c, this._uiHash());
					this.containers[n]._trigger("change", c, this._uiHash(this));
					this.options.placeholder.update(this.currentContainer, this.placeholder);
					this.containers[n]._trigger("over", c, this._uiHash(this));
					this.containers[n].containerCache.over = 1
				}
			},
			_createHelper: function(d) {
				var e = this.options;
				var c = a.isFunction(e.helper) ? a(e.helper.apply(this.element[0], [d, this.currentItem])) : (e.helper == "clone" ? this.currentItem.clone() : this.currentItem);
				if (!c.parents("body").length) {
					a(e.appendTo != "parent" ? e.appendTo : this.currentItem[0].parentNode)[0].appendChild(c[0])
				}
				if (c[0] == this.currentItem[0]) {
					this._storedCSS = {
						width: this.currentItem[0].style.width,
						height: this.currentItem[0].style.height,
						position: this.currentItem.css("position"),
						top: this.currentItem.css("top"),
						left: this.currentItem.css("left")
					}
				}
				if (c[0].style.width == "" || e.forceHelperSize) {
					c.width(this.currentItem.width())
				}
				if (c[0].style.height == "" || e.forceHelperSize) {
					c.height(this.currentItem.height())
				}
				return c
			},
			_adjustOffsetFromHelper: function(c) {
				if (typeof c == "string") {
					c = c.split(" ")
				}
				if (a.isArray(c)) {
					c = {
						left: +c[0],
						top: +c[1] || 0
					}
				}
				if ("left"in c) {
					this.offset.click.left = c.left + this.margins.left
				}
				if ("right"in c) {
					this.offset.click.left = this.helperProportions.width - c.right + this.margins.left
				}
				if ("top"in c) {
					this.offset.click.top = c.top + this.margins.top
				}
				if ("bottom"in c) {
					this.offset.click.top = this.helperProportions.height - c.bottom + this.margins.top
				}
			},
			_getParentOffset: function() {
				this.offsetParent = this.helper.offsetParent();
				var c = this.offsetParent.offset();
				if (this.cssPosition == "absolute" && this.scrollParent[0] != document && a.contains(this.scrollParent[0], this.offsetParent[0])) {
					c.left += this.scrollParent.scrollLeft();
					c.top += this.scrollParent.scrollTop()
				}
				if ((this.offsetParent[0] == document.body) || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.ui.ie)) {
					c = {
						top: 0,
						left: 0
					}
				}
				return {
					top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
					left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
				}
			},
			_getRelativeOffset: function() {
				if (this.cssPosition == "relative") {
					var c = this.currentItem.position();
					return {
						top: c.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
						left: c.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
					}
				} else {
					return {
						top: 0,
						left: 0
					}
				}
			},
			_cacheMargins: function() {
				this.margins = {
					left: (parseInt(this.currentItem.css("marginLeft"), 10) || 0),
					top: (parseInt(this.currentItem.css("marginTop"), 10) || 0)
				}
			},
			_cacheHelperProportions: function() {
				this.helperProportions = {
					width: this.helper.outerWidth(),
					height: this.helper.outerHeight()
				}
			},
			_setContainment: function() {
				var f = this.options;
				if (f.containment == "parent") {
					f.containment = this.helper[0].parentNode
				}
				if (f.containment == "document" || f.containment == "window") {
					this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a(f.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (a(f.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
				}
				if (!(/^(document|window|parent)$/).test(f.containment)) {
					var d = a(f.containment)[0];
					var e = a(f.containment).offset();
					var c = (a(d).css("overflow") != "hidden");
					this.containment = [e.left + (parseInt(a(d).css("borderLeftWidth"), 10) || 0) + (parseInt(a(d).css("paddingLeft"), 10) || 0) - this.margins.left, e.top + (parseInt(a(d).css("borderTopWidth"), 10) || 0) + (parseInt(a(d).css("paddingTop"), 10) || 0) - this.margins.top, e.left + (c ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(a(d).css("borderLeftWidth"), 10) || 0) - (parseInt(a(d).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, e.top + (c ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(a(d).css("borderTopWidth"), 10) || 0) - (parseInt(a(d).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
				}
			},
			_convertPositionTo: function(g, i) {
				if (!i) {
					i = this.position
				}
				var e = g == "absolute" ? 1 : -1;
				var f = this.options
				  , c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent
				  , h = (/(html|body)/i).test(c[0].tagName);
				return {
					top: (i.top + this.offset.relative.top * e + this.offset.parent.top * e - ((this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : (h ? 0 : c.scrollTop())) * e)),
					left: (i.left + this.offset.relative.left * e + this.offset.parent.left * e - ((this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : h ? 0 : c.scrollLeft()) * e))
				}
			},
			_generatePosition: function(f) {
				var i = this.options
				  , c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent
				  , j = (/(html|body)/i).test(c[0].tagName);
				if (this.cssPosition == "relative" && !(this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0])) {
					this.offset.relative = this._getRelativeOffset()
				}
				var e = f.pageX;
				var d = f.pageY;
				if (this.originalPosition) {
					if (this.containment) {
						if (f.pageX - this.offset.click.left < this.containment[0]) {
							e = this.containment[0] + this.offset.click.left
						}
						if (f.pageY - this.offset.click.top < this.containment[1]) {
							d = this.containment[1] + this.offset.click.top
						}
						if (f.pageX - this.offset.click.left > this.containment[2]) {
							e = this.containment[2] + this.offset.click.left
						}
						if (f.pageY - this.offset.click.top > this.containment[3]) {
							d = this.containment[3] + this.offset.click.top
						}
					}
					if (i.grid) {
						var h = this.originalPageY + Math.round((d - this.originalPageY) / i.grid[1]) * i.grid[1];
						d = this.containment ? (!(h - this.offset.click.top < this.containment[1] || h - this.offset.click.top > this.containment[3]) ? h : (!(h - this.offset.click.top < this.containment[1]) ? h - i.grid[1] : h + i.grid[1])) : h;
						var g = this.originalPageX + Math.round((e - this.originalPageX) / i.grid[0]) * i.grid[0];
						e = this.containment ? (!(g - this.offset.click.left < this.containment[0] || g - this.offset.click.left > this.containment[2]) ? g : (!(g - this.offset.click.left < this.containment[0]) ? g - i.grid[0] : g + i.grid[0])) : g
					}
				}
				return {
					top: (d - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : (j ? 0 : c.scrollTop())))),
					left: (e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : j ? 0 : c.scrollLeft())))
				}
			},
			_rearrange: function(g, f, d, e) {
				d ? d[0].appendChild(this.placeholder[0]) : f.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction == "down" ? f.item[0] : f.item[0].nextSibling));
				this.counter = this.counter ? ++this.counter : 1;
				var c = this.counter;
				this._delay(function() {
					if (c == this.counter) {
						this.refreshPositions(!e)
					}
				})
			},
			_clear: function(d, e) {
				this.reverting = false;
				var f = [];
				if (!this._noFinalSort && this.currentItem.parent().length) {
					this.placeholder.before(this.currentItem)
				}
				this._noFinalSort = null;
				if (this.helper[0] == this.currentItem[0]) {
					for (var c in this._storedCSS) {
						if (this._storedCSS[c] == "auto" || this._storedCSS[c] == "static") {
							this._storedCSS[c] = ""
						}
					}
					this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
				} else {
					this.currentItem.show()
				}
				if (this.fromOutside && !e) {
					f.push(function(g) {
						this._trigger("receive", g, this._uiHash(this.fromOutside))
					})
				}
				if ((this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !e) {
					f.push(function(g) {
						this._trigger("update", g, this._uiHash())
					})
				}
				if (this !== this.currentContainer) {
					if (!e) {
						f.push(function(g) {
							this._trigger("remove", g, this._uiHash())
						});
						f.push((function(g) {
							return function(h) {
								g._trigger("receive", h, this._uiHash(this))
							}
						}
						).call(this, this.currentContainer));
						f.push((function(g) {
							return function(h) {
								g._trigger("update", h, this._uiHash(this))
							}
						}
						).call(this, this.currentContainer))
					}
				}
				for (var c = this.containers.length - 1; c >= 0; c--) {
					if (!e) {
						f.push((function(g) {
							return function(h) {
								g._trigger("deactivate", h, this._uiHash(this))
							}
						}
						).call(this, this.containers[c]))
					}
					if (this.containers[c].containerCache.over) {
						f.push((function(g) {
							return function(h) {
								g._trigger("out", h, this._uiHash(this))
							}
						}
						).call(this, this.containers[c]));
						this.containers[c].containerCache.over = 0
					}
				}
				if (this._storedCursor) {
					a("body").css("cursor", this._storedCursor)
				}
				if (this._storedOpacity) {
					this.helper.css("opacity", this._storedOpacity)
				}
				if (this._storedZIndex) {
					this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex)
				}
				this.dragging = false;
				if (this.cancelHelperRemoval) {
					if (!e) {
						this._trigger("beforeStop", d, this._uiHash());
						for (var c = 0; c < f.length; c++) {
							f[c].call(this, d)
						}
						this._trigger("stop", d, this._uiHash())
					}
					this.fromOutside = false;
					return false
				}
				if (!e) {
					this._trigger("beforeStop", d, this._uiHash())
				}
				this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
				if (this.helper[0] != this.currentItem[0]) {
					this.helper.remove()
				}
				this.helper = null;
				if (!e) {
					for (var c = 0; c < f.length; c++) {
						f[c].call(this, d)
					}
					this._trigger("stop", d, this._uiHash())
				}
				this.fromOutside = false;
				return true
			},
			_trigger: function() {
				if (a.Widget.prototype._trigger.apply(this, arguments) === false) {
					this.cancel()
				}
			},
			_uiHash: function(c) {
				var d = c || this;
				return {
					helper: d.helper,
					placeholder: d.placeholder || a([]),
					position: d.position,
					originalPosition: d.originalPosition,
					offset: d.positionAbs,
					item: d.currentItem,
					sender: c ? c.element : null
				}
			}
		})
	}
	)(jQuery);
	(jQuery.effects || (function(b, d) {
		var a = b.uiBackCompat !== false
		  , c = "ui-effects-";
		b.effects = {
			effect: {}
		};
		/*! * jQuery Color Animations v2.0.0 * http://jquery.com/ * * Copyright 2012 jQuery Foundation and other contributors * Released under the MIT license. * http://jquery.org/license * * Date: Mon Aug 13 13:41:02 2012 -0500 */
		(function(s, h) {
			var o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "), l = /^([\-+])=\s*(\d+\.?\d*)/, k = [{
				re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				parse: function(t) {
					return [t[1], t[2], t[3], t[4]]
				}
			}, {
				re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				parse: function(t) {
					return [t[1] * 2.55, t[2] * 2.55, t[3] * 2.55, t[4]]
				}
			}, {
				re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
				parse: function(t) {
					return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
				}
			}, {
				re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
				parse: function(t) {
					return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
				}
			}, {
				re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				space: "hsla",
				parse: function(t) {
					return [t[1], t[2] / 100, t[3] / 100, t[4]]
				}
			}], i = s.Color = function(u, v, t, w) {
				return new s.Color.fn.parse(u,v,t,w)
			}
			, n = {
				rgba: {
					props: {
						red: {
							idx: 0,
							type: "byte"
						},
						green: {
							idx: 1,
							type: "byte"
						},
						blue: {
							idx: 2,
							type: "byte"
						}
					}
				},
				hsla: {
					props: {
						hue: {
							idx: 0,
							type: "degrees"
						},
						saturation: {
							idx: 1,
							type: "percent"
						},
						lightness: {
							idx: 2,
							type: "percent"
						}
					}
				}
			}, r = {
				"byte": {
					floor: true,
					max: 255
				},
				percent: {
					max: 1
				},
				degrees: {
					mod: 360,
					floor: true
				}
			}, q = i.support = {}, f = s("<p>")[0], e, p = s.each;
			f.style.cssText = "background-color:rgba(1,1,1,.5)";
			q.rgba = f.style.backgroundColor.indexOf("rgba") > -1;
			p(n, function(t, u) {
				u.cache = "_" + t;
				u.props.alpha = {
					idx: 3,
					type: "percent",
					def: 1
				}
			});
			function m(u, w, v) {
				var t = r[w.type] || {};
				if (u == null) {
					return (v || !w.def) ? null : w.def
				}
				u = t.floor ? ~~u : parseFloat(u);
				if (isNaN(u)) {
					return w.def
				}
				if (t.mod) {
					return (u + t.mod) % t.mod
				}
				return 0 > u ? 0 : t.max < u ? t.max : u
			}
			function j(t) {
				var v = i()
				  , u = v._rgba = [];
				t = t.toLowerCase();
				p(k, function(A, B) {
					var y, z = B.re.exec(t), x = z && B.parse(z), w = B.space || "rgba";
					if (x) {
						y = v[w](x);
						v[n[w].cache] = y[n[w].cache];
						u = v._rgba = y._rgba;
						return false
					}
				});
				if (u.length) {
					if (u.join() === "0,0,0,0") {
						s.extend(u, e.transparent)
					}
					return v
				}
				return e[t]
			}
			i.fn = s.extend(i.prototype, {
				parse: function(z, x, t, y) {
					if (z === h) {
						this._rgba = [null, null, null, null];
						return this
					}
					if (z.jquery || z.nodeType) {
						z = s(z).css(x);
						x = h
					}
					var w = this
					  , v = s.type(z)
					  , u = this._rgba = [];
					if (x !== h) {
						z = [z, x, t, y];
						v = "array"
					}
					if (v === "string") {
						return this.parse(j(z) || e._default)
					}
					if (v === "array") {
						p(n.rgba.props, function(A, B) {
							u[B.idx] = m(z[B.idx], B)
						});
						return this
					}
					if (v === "object") {
						if (z instanceof i) {
							p(n, function(A, B) {
								if (z[B.cache]) {
									w[B.cache] = z[B.cache].slice()
								}
							})
						} else {
							p(n, function(B, C) {
								var A = C.cache;
								p(C.props, function(D, E) {
									if (!w[A] && C.to) {
										if (D === "alpha" || z[D] == null) {
											return
										}
										w[A] = C.to(w._rgba)
									}
									w[A][E.idx] = m(z[D], E, true)
								});
								if (w[A] && b.inArray(null, w[A].slice(0, 3)) < 0) {
									w[A][3] = 1;
									if (C.from) {
										w._rgba = C.from(w[A])
									}
								}
							})
						}
						return this
					}
				},
				is: function(v) {
					var t = i(v)
					  , w = true
					  , u = this;
					p(n, function(x, z) {
						var A, y = t[z.cache];
						if (y) {
							A = u[z.cache] || z.to && z.to(u._rgba) || [];
							p(z.props, function(B, C) {
								if (y[C.idx] != null) {
									w = (y[C.idx] === A[C.idx]);
									return w
								}
							})
						}
						return w
					});
					return w
				},
				_space: function() {
					var t = []
					  , u = this;
					p(n, function(v, w) {
						if (u[w.cache]) {
							t.push(v)
						}
					});
					return t.pop()
				},
				transition: function(u, A) {
					var v = i(u)
					  , w = v._space()
					  , x = n[w]
					  , y = this.alpha() === 0 ? i("transparent") : this
					  , z = y[x.cache] || x.to(y._rgba)
					  , t = z.slice();
					v = v[x.cache];
					p(x.props, function(E, G) {
						var D = G.idx
						  , C = z[D]
						  , B = v[D]
						  , F = r[G.type] || {};
						if (B === null) {
							return
						}
						if (C === null) {
							t[D] = B
						} else {
							if (F.mod) {
								if (B - C > F.mod / 2) {
									C += F.mod
								} else {
									if (C - B > F.mod / 2) {
										C -= F.mod
									}
								}
							}
							t[D] = m((B - C) * A + C, G)
						}
					});
					return this[w](t)
				},
				blend: function(w) {
					if (this._rgba[3] === 1) {
						return this
					}
					var v = this._rgba.slice()
					  , u = v.pop()
					  , t = i(w)._rgba;
					return i(s.map(v, function(x, y) {
						return (1 - u) * t[y] + u * x
					}))
				},
				toRgbaString: function() {
					var u = "rgba("
					  , t = s.map(this._rgba, function(w, x) {
						return w == null ? (x > 2 ? 1 : 0) : w
					});
					if (t[3] === 1) {
						t.pop();
						u = "rgb("
					}
					return u + t.join() + ")"
				},
				toHslaString: function() {
					var u = "hsla("
					  , t = s.map(this.hsla(), function(w, x) {
						if (w == null) {
							w = x > 2 ? 1 : 0
						}
						if (x && x < 3) {
							w = Math.round(w * 100) + "%"
						}
						return w
					});
					if (t[3] === 1) {
						t.pop();
						u = "hsl("
					}
					return u + t.join() + ")"
				},
				toHexString: function(t) {
					var u = this._rgba.slice()
					  , v = u.pop();
					if (t) {
						u.push(~~(v * 255))
					}
					return "#" + s.map(u, function(w) {
						w = (w || 0).toString(16);
						return w.length === 1 ? "0" + w : w
					}).join("")
				},
				toString: function() {
					return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
				}
			});
			i.fn.parse.prototype = i.fn;
			function g(v, u, t) {
				t = (t + 1) % 1;
				if (t * 6 < 1) {
					return v + (u - v) * t * 6
				}
				if (t * 2 < 1) {
					return u
				}
				if (t * 3 < 2) {
					return v + (u - v) * ((2 / 3) - t) * 6
				}
				return v
			}
			n.hsla.to = function(v) {
				if (v[0] == null || v[1] == null || v[2] == null) {
					return [null, null, null, v[3]]
				}
				var t = v[0] / 255, y = v[1] / 255, z = v[2] / 255, B = v[3], A = Math.max(t, y, z), w = Math.min(t, y, z), C = A - w, D = A + w, u = D * 0.5, x, E;
				if (w === A) {
					x = 0
				} else {
					if (t === A) {
						x = (60 * (y - z) / C) + 360
					} else {
						if (y === A) {
							x = (60 * (z - t) / C) + 120
						} else {
							x = (60 * (t - y) / C) + 240
						}
					}
				}
				if (u === 0 || u === 1) {
					E = u
				} else {
					if (u <= 0.5) {
						E = C / D
					} else {
						E = C / (2 - D)
					}
				}
				return [Math.round(x) % 360, E, u, B == null ? 1 : B]
			}
			;
			n.hsla.from = function(x) {
				if (x[0] == null || x[1] == null || x[2] == null) {
					return [null, null, null, x[3]]
				}
				var w = x[0] / 360
				  , v = x[1]
				  , u = x[2]
				  , t = x[3]
				  , y = u <= 0.5 ? u * (1 + v) : u + v - u * v
				  , z = 2 * u - y;
				return [Math.round(g(z, y, w + (1 / 3)) * 255), Math.round(g(z, y, w) * 255), Math.round(g(z, y, w - (1 / 3)) * 255), t]
			}
			;
			p(n, function(u, w) {
				var v = w.props
				  , t = w.cache
				  , y = w.to
				  , x = w.from;
				i.fn[u] = function(D) {
					if (y && !this[t]) {
						this[t] = y(this._rgba)
					}
					if (D === h) {
						return this[t].slice()
					}
					var A, C = s.type(D), z = (C === "array" || C === "object") ? D : arguments, B = this[t].slice();
					p(v, function(E, G) {
						var F = z[C === "object" ? E : G.idx];
						if (F == null) {
							F = B[G.idx]
						}
						B[G.idx] = m(F, G)
					});
					if (x) {
						A = i(x(B));
						A[t] = B;
						return A
					} else {
						return i(B)
					}
				}
				;
				p(v, function(z, A) {
					if (i.fn[z]) {
						return
					}
					i.fn[z] = function(E) {
						var G = s.type(E), D = (z === "alpha" ? (this._hsla ? "hsla" : "rgba") : u), C = this[D](), F = C[A.idx], B;
						if (G === "undefined") {
							return F
						}
						if (G === "function") {
							E = E.call(this, F);
							G = s.type(E)
						}
						if (E == null && A.empty) {
							return this
						}
						if (G === "string") {
							B = l.exec(E);
							if (B) {
								E = F + parseFloat(B[2]) * (B[1] === "+" ? 1 : -1)
							}
						}
						C[A.idx] = E;
						return this[D](C)
					}
				})
			});
			p(o, function(t, u) {
				s.cssHooks[u] = {
					set: function(z, A) {
						var w, y, v = "";
						if (s.type(A) !== "string" || (w = j(A))) {
							A = i(w || A);
							if (!q.rgba && A._rgba[3] !== 1) {
								y = u === "backgroundColor" ? z.parentNode : z;
								while ((v === "" || v === "transparent") && y && y.style) {
									try {
										v = s.css(y, "backgroundColor");
										y = y.parentNode
									} catch (B) {}
								}
								A = A.blend(v && v !== "transparent" ? v : "_default")
							}
							A = A.toRgbaString()
						}
						try {
							z.style[u] = A
						} catch (x) {}
					}
				};
				s.fx.step[u] = function(v) {
					if (!v.colorInit) {
						v.start = i(v.elem, u);
						v.end = i(v.end);
						v.colorInit = true
					}
					s.cssHooks[u].set(v.elem, v.start.transition(v.end, v.pos))
				}
			});
			s.cssHooks.borderColor = {
				expand: function(u) {
					var t = {};
					p(["Top", "Right", "Bottom", "Left"], function(w, v) {
						t["border" + v + "Color"] = u
					});
					return t
				}
			};
			e = s.Color.names = {
				aqua: "#00ffff",
				black: "#000000",
				blue: "#0000ff",
				fuchsia: "#ff00ff",
				gray: "#808080",
				green: "#008000",
				lime: "#00ff00",
				maroon: "#800000",
				navy: "#000080",
				olive: "#808000",
				purple: "#800080",
				red: "#ff0000",
				silver: "#c0c0c0",
				teal: "#008080",
				white: "#ffffff",
				yellow: "#ffff00",
				transparent: [null, null, null, 0],
				_default: "#ffffff"
			}
		}
		)(jQuery);
		(function() {
			var f = ["add", "remove", "toggle"]
			  , g = {
				border: 1,
				borderBottom: 1,
				borderColor: 1,
				borderLeft: 1,
				borderRight: 1,
				borderTop: 1,
				borderWidth: 1,
				margin: 1,
				padding: 1
			};
			b.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(i, j) {
				b.fx.step[j] = function(k) {
					if (k.end !== "none" && !k.setAttr || k.pos === 1 && !k.setAttr) {
						jQuery.style(k.elem, j, k.end);
						k.setAttr = true
					}
				}
			});
			function h() {
				var k = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle, l = {}, j, i;
				if (k && k.length && k[0] && k[k[0]]) {
					i = k.length;
					while (i--) {
						j = k[i];
						if (typeof k[j] === "string") {
							l[b.camelCase(j)] = k[j]
						}
					}
				} else {
					for (j in k) {
						if (typeof k[j] === "string") {
							l[j] = k[j]
						}
					}
				}
				return l
			}
			function e(i, k) {
				var m = {}, j, l;
				for (j in k) {
					l = k[j];
					if (i[j] !== l) {
						if (!g[j]) {
							if (b.fx.step[j] || !isNaN(parseFloat(l))) {
								m[j] = l
							}
						}
					}
				}
				return m
			}
			b.effects.animateClass = function(i, j, m, l) {
				var k = b.speed(j, m, l);
				return this.queue(function() {
					var p = b(this), n = p.attr("class") || "", o, q = k.children ? p.find("*").andSelf() : p;
					q = q.map(function() {
						var r = b(this);
						return {
							el: r,
							start: h.call(this)
						}
					});
					o = function() {
						b.each(f, function(r, s) {
							if (i[s]) {
								p[s + "Class"](i[s])
							}
						})
					}
					;
					o();
					q = q.map(function() {
						this.end = h.call(this.el[0]);
						this.diff = e(this.start, this.end);
						return this
					});
					p.attr("class", n);
					q = q.map(function() {
						var t = this
						  , r = b.Deferred()
						  , s = jQuery.extend({}, k, {
							queue: false,
							complete: function() {
								r.resolve(t)
							}
						});
						this.el.animate(this.diff, s);
						return r.promise()
					});
					b.when.apply(b, q.get()).done(function() {
						o();
						b.each(arguments, function() {
							var r = this.el;
							b.each(this.diff, function(s) {
								r.css(s, "")
							})
						});
						k.complete.call(p[0])
					})
				})
			}
			;
			b.fn.extend({
				_addClass: b.fn.addClass,
				addClass: function(j, i, l, k) {
					return i ? b.effects.animateClass.call(this, {
						add: j
					}, i, l, k) : this._addClass(j)
				},
				_removeClass: b.fn.removeClass,
				removeClass: function(j, i, l, k) {
					return i ? b.effects.animateClass.call(this, {
						remove: j
					}, i, l, k) : this._removeClass(j)
				},
				_toggleClass: b.fn.toggleClass,
				toggleClass: function(k, j, i, m, l) {
					if (typeof j === "boolean" || j === d) {
						if (!i) {
							return this._toggleClass(k, j)
						} else {
							return b.effects.animateClass.call(this, (j ? {
								add: k
							} : {
								remove: k
							}), i, m, l)
						}
					} else {
						return b.effects.animateClass.call(this, {
							toggle: k
						}, j, i, m)
					}
				},
				switchClass: function(i, k, j, m, l) {
					return b.effects.animateClass.call(this, {
						add: k,
						remove: i
					}, j, m, l)
				}
			})
		}
		)();
		(function() {
			b.extend(b.effects, {
				version: "1.9.2",
				save: function(h, j) {
					for (var g = 0; g < j.length; g++) {
						if (j[g] !== null) {
							h.data(c + j[g], h[0].style[j[g]])
						}
					}
				},
				restore: function(h, k) {
					var j, g;
					for (g = 0; g < k.length; g++) {
						if (k[g] !== null) {
							j = h.data(c + k[g]);
							if (j === d) {
								j = ""
							}
							h.css(k[g], j)
						}
					}
				},
				setMode: function(g, h) {
					if (h === "toggle") {
						h = g.is(":hidden") ? "show" : "hide"
					}
					return h
				},
				getBaseline: function(h, i) {
					var j, g;
					switch (h[0]) {
					case "top":
						j = 0;
						break;
					case "middle":
						j = 0.5;
						break;
					case "bottom":
						j = 1;
						break;
					default:
						j = h[0] / i.height
					}
					switch (h[1]) {
					case "left":
						g = 0;
						break;
					case "center":
						g = 0.5;
						break;
					case "right":
						g = 1;
						break;
					default:
						g = h[1] / i.width
					}
					return {
						x: g,
						y: j
					}
				},
				createWrapper: function(h) {
					if (h.parent().is(".ui-effects-wrapper")) {
						return h.parent()
					}
					var i = {
						width: h.outerWidth(true),
						height: h.outerHeight(true),
						"float": h.css("float")
					}
					  , l = b("<div></div>").addClass("ui-effects-wrapper").css({
						fontSize: "100%",
						background: "transparent",
						border: "none",
						margin: 0,
						padding: 0
					})
					  , g = {
						width: h.width(),
						height: h.height()
					}
					  , k = document.activeElement;
					try {
						k.id
					} catch (j) {
						k = document.body
					}
					h.wrap(l);
					if (h[0] === k || b.contains(h[0], k)) {
						b(k).focus()
					}
					l = h.parent();
					if (h.css("position") === "static") {
						l.css({
							position: "relative"
						});
						h.css({
							position: "relative"
						})
					} else {
						b.extend(i, {
							position: h.css("position"),
							zIndex: h.css("z-index")
						});
						b.each(["top", "left", "bottom", "right"], function(m, n) {
							i[n] = h.css(n);
							if (isNaN(parseInt(i[n], 10))) {
								i[n] = "auto"
							}
						});
						h.css({
							position: "relative",
							top: 0,
							left: 0,
							right: "auto",
							bottom: "auto"
						})
					}
					h.css(g);
					return l.css(i).show()
				},
				removeWrapper: function(g) {
					var h = document.activeElement;
					if (g.parent().is(".ui-effects-wrapper")) {
						g.parent().replaceWith(g);
						if (g[0] === h || b.contains(g[0], h)) {
							b(h).focus()
						}
					}
					return g
				},
				setTransition: function(h, j, g, i) {
					i = i || {};
					b.each(j, function(l, k) {
						var m = h.cssUnit(k);
						if (m[0] > 0) {
							i[k] = m[0] * g + m[1]
						}
					});
					return i
				}
			});
			function e(h, g, i, j) {
				if (b.isPlainObject(h)) {
					g = h;
					h = h.effect
				}
				h = {
					effect: h
				};
				if (g == null) {
					g = {}
				}
				if (b.isFunction(g)) {
					j = g;
					i = null;
					g = {}
				}
				if (typeof g === "number" || b.fx.speeds[g]) {
					j = i;
					i = g;
					g = {}
				}
				if (b.isFunction(i)) {
					j = i;
					i = null
				}
				if (g) {
					b.extend(h, g)
				}
				i = i || g.duration;
				h.duration = b.fx.off ? 0 : typeof i === "number" ? i : i in b.fx.speeds ? b.fx.speeds[i] : b.fx.speeds._default;
				h.complete = j || g.complete;
				return h
			}
			function f(g) {
				if (!g || typeof g === "number" || b.fx.speeds[g]) {
					return true
				}
				if (typeof g === "string" && !b.effects.effect[g]) {
					if (a && b.effects[g]) {
						return false
					}
					return true
				}
				return false
			}
			b.fn.extend({
				effect: function() {
					var i = e.apply(this, arguments)
					  , l = i.mode
					  , g = i.queue
					  , h = b.effects.effect[i.effect]
					  , j = !h && a && b.effects[i.effect];
					if (b.fx.off || !(h || j)) {
						if (l) {
							return this[l](i.duration, i.complete)
						} else {
							return this.each(function() {
								if (i.complete) {
									i.complete.call(this)
								}
							})
						}
					}
					function k(o) {
						var p = b(this)
						  , n = i.complete
						  , q = i.mode;
						function m() {
							if (b.isFunction(n)) {
								n.call(p[0])
							}
							if (b.isFunction(o)) {
								o()
							}
						}
						if (p.is(":hidden") ? q === "hide" : q === "show") {
							m()
						} else {
							h.call(p[0], i, m)
						}
					}
					if (h) {
						return g === false ? this.each(k) : this.queue(g || "fx", k)
					} else {
						return j.call(this, {
							options: i,
							duration: i.duration,
							callback: i.complete,
							mode: i.mode
						})
					}
				},
				_show: b.fn.show,
				show: function(h) {
					if (f(h)) {
						return this._show.apply(this, arguments)
					} else {
						var g = e.apply(this, arguments);
						g.mode = "show";
						return this.effect.call(this, g)
					}
				},
				_hide: b.fn.hide,
				hide: function(h) {
					if (f(h)) {
						return this._hide.apply(this, arguments)
					} else {
						var g = e.apply(this, arguments);
						g.mode = "hide";
						return this.effect.call(this, g)
					}
				},
				__toggle: b.fn.toggle,
				toggle: function(h) {
					if (f(h) || typeof h === "boolean" || b.isFunction(h)) {
						return this.__toggle.apply(this, arguments)
					} else {
						var g = e.apply(this, arguments);
						g.mode = "toggle";
						return this.effect.call(this, g)
					}
				},
				cssUnit: function(g) {
					var h = this.css(g)
					  , i = [];
					b.each(["em", "px", "%", "pt"], function(j, k) {
						if (h.indexOf(k) > 0) {
							i = [parseFloat(h), k]
						}
					});
					return i
				}
			})
		}
		)();
		(function() {
			var e = {};
			b.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(g, f) {
				e[f] = function(h) {
					return Math.pow(h, g + 2)
				}
			});
			b.extend(e, {
				Sine: function(f) {
					return 1 - Math.cos(f * Math.PI / 2)
				},
				Circ: function(f) {
					return 1 - Math.sqrt(1 - f * f)
				},
				Elastic: function(f) {
					return f === 0 || f === 1 ? f : -Math.pow(2, 8 * (f - 1)) * Math.sin(((f - 1) * 80 - 7.5) * Math.PI / 15)
				},
				Back: function(f) {
					return f * f * (3 * f - 2)
				},
				Bounce: function(h) {
					var f, g = 4;
					while (h < ((f = Math.pow(2, --g)) - 1) / 11) {}
					return 1 / Math.pow(4, 3 - g) - 7.5625 * Math.pow((f * 3 - 2) / 22 - h, 2)
				}
			});
			b.each(e, function(g, f) {
				b.easing["easeIn" + g] = f;
				b.easing["easeOut" + g] = function(h) {
					return 1 - f(1 - h)
				}
				;
				b.easing["easeInOut" + g] = function(h) {
					return h < 0.5 ? f(h * 2) / 2 : 1 - f(h * -2 + 2) / 2
				}
			})
		}
		)()
	}
	)(jQuery));
	(function(d, e) {
		var b = 0
		  , c = {}
		  , a = {};
		c.height = c.paddingTop = c.paddingBottom = c.borderTopWidth = c.borderBottomWidth = "hide";
		a.height = a.paddingTop = a.paddingBottom = a.borderTopWidth = a.borderBottomWidth = "show";
		d.widget("ui.accordion", {
			version: "1.9.2",
			options: {
				active: 0,
				animate: {},
				collapsible: false,
				event: "click",
				header: "> li > :first-child,> :not(li):even",
				heightStyle: "auto",
				icons: {
					activeHeader: "ui-icon-triangle-1-s",
					header: "ui-icon-triangle-1-e"
				},
				activate: null,
				beforeActivate: null
			},
			_create: function() {
				var g = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++b)
				  , f = this.options;
				this.prevShow = this.prevHide = d();
				this.element.addClass("ui-accordion ui-widget ui-helper-reset");
				this.headers = this.element.find(f.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
				this._hoverable(this.headers);
				this._focusable(this.headers);
				this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide();
				if (!f.collapsible && (f.active === false || f.active == null)) {
					f.active = 0
				}
				if (f.active < 0) {
					f.active += this.headers.length
				}
				this.active = this._findActive(f.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top");
				this.active.next().addClass("ui-accordion-content-active").show();
				this._createIcons();
				this.refresh();
				this.element.attr("role", "tablist");
				this.headers.attr("role", "tab").each(function(l) {
					var m = d(this)
					  , k = m.attr("id")
					  , h = m.next()
					  , j = h.attr("id");
					if (!k) {
						k = g + "-header-" + l;
						m.attr("id", k)
					}
					if (!j) {
						j = g + "-panel-" + l;
						h.attr("id", j)
					}
					m.attr("aria-controls", j);
					h.attr("aria-labelledby", k)
				}).next().attr("role", "tabpanel");
				this.headers.not(this.active).attr({
					"aria-selected": "false",
					tabIndex: -1
				}).next().attr({
					"aria-expanded": "false",
					"aria-hidden": "true"
				}).hide();
				if (!this.active.length) {
					this.headers.eq(0).attr("tabIndex", 0)
				} else {
					this.active.attr({
						"aria-selected": "true",
						tabIndex: 0
					}).next().attr({
						"aria-expanded": "true",
						"aria-hidden": "false"
					})
				}
				this._on(this.headers, {
					keydown: "_keydown"
				});
				this._on(this.headers.next(), {
					keydown: "_panelKeyDown"
				});
				this._setupEvents(f.event)
			},
			_getCreateEventData: function() {
				return {
					header: this.active,
					content: !this.active.length ? d() : this.active.next()
				}
			},
			_createIcons: function() {
				var f = this.options.icons;
				if (f) {
					d("<span>").addClass("ui-accordion-header-icon ui-icon " + f.header).prependTo(this.headers);
					this.active.children(".ui-accordion-header-icon").removeClass(f.header).addClass(f.activeHeader);
					this.headers.addClass("ui-accordion-icons")
				}
			},
			_destroyIcons: function() {
				this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
			},
			_destroy: function() {
				var f;
				this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
				this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
					if (/^ui-accordion/.test(this.id)) {
						this.removeAttribute("id")
					}
				});
				this._destroyIcons();
				f = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
					if (/^ui-accordion/.test(this.id)) {
						this.removeAttribute("id")
					}
				});
				if (this.options.heightStyle !== "content") {
					f.css("height", "")
				}
			},
			_setOption: function(f, g) {
				if (f === "active") {
					this._activate(g);
					return
				}
				if (f === "event") {
					if (this.options.event) {
						this._off(this.headers, this.options.event)
					}
					this._setupEvents(g)
				}
				this._super(f, g);
				if (f === "collapsible" && !g && this.options.active === false) {
					this._activate(0)
				}
				if (f === "icons") {
					this._destroyIcons();
					if (g) {
						this._createIcons()
					}
				}
				if (f === "disabled") {
					this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!g)
				}
			},
			_keydown: function(i) {
				if (i.altKey || i.ctrlKey) {
					return
				}
				var j = d.ui.keyCode
				  , h = this.headers.length
				  , f = this.headers.index(i.target)
				  , g = false;
				switch (i.keyCode) {
				case j.RIGHT:
				case j.DOWN:
					g = this.headers[(f + 1) % h];
					break;
				case j.LEFT:
				case j.UP:
					g = this.headers[(f - 1 + h) % h];
					break;
				case j.SPACE:
				case j.ENTER:
					this._eventHandler(i);
					break;
				case j.HOME:
					g = this.headers[0];
					break;
				case j.END:
					g = this.headers[h - 1];
					break
				}
				if (g) {
					d(i.target).attr("tabIndex", -1);
					d(g).attr("tabIndex", 0);
					g.focus();
					i.preventDefault()
				}
			},
			_panelKeyDown: function(f) {
				if (f.keyCode === d.ui.keyCode.UP && f.ctrlKey) {
					d(f.currentTarget).prev().focus()
				}
			},
			refresh: function() {
				var h, i, f = this.options.heightStyle, g = this.element.parent();
				if (f === "fill") {
					if (!d.support.minHeight) {
						i = g.css("overflow");
						g.css("overflow", "hidden")
					}
					h = g.height();
					this.element.siblings(":visible").each(function() {
						var k = d(this)
						  , j = k.css("position");
						if (j === "absolute" || j === "fixed") {
							return
						}
						h -= k.outerHeight(true)
					});
					if (i) {
						g.css("overflow", i)
					}
					this.headers.each(function() {
						h -= d(this).outerHeight(true)
					});
					this.headers.next().each(function() {
						d(this).height(Math.max(0, h - d(this).innerHeight() + d(this).height()))
					}).css("overflow", "auto")
				} else {
					if (f === "auto") {
						h = 0;
						this.headers.next().each(function() {
							h = Math.max(h, d(this).css("height", "").height())
						}).height(h)
					}
				}
			},
			_activate: function(f) {
				var g = this._findActive(f)[0];
				if (g === this.active[0]) {
					return
				}
				g = g || this.active[0];
				this._eventHandler({
					target: g,
					currentTarget: g,
					preventDefault: d.noop
				})
			},
			_findActive: function(f) {
				return typeof f === "number" ? this.headers.eq(f) : d()
			},
			_setupEvents: function(g) {
				var f = {};
				if (!g) {
					return
				}
				d.each(g.split(" "), function(i, h) {
					f[h] = "_eventHandler"
				});
				this._on(this.headers, f)
			},
			_eventHandler: function(f) {
				var n = this.options
				  , i = this.active
				  , j = d(f.currentTarget)
				  , l = j[0] === i[0]
				  , g = l && n.collapsible
				  , h = g ? d() : j.next()
				  , k = i.next()
				  , m = {
					oldHeader: i,
					oldPanel: k,
					newHeader: g ? d() : j,
					newPanel: h
				};
				f.preventDefault();
				if ((l && !n.collapsible) || (this._trigger("beforeActivate", f, m) === false)) {
					return
				}
				n.active = g ? false : this.headers.index(j);
				this.active = l ? d() : j;
				this._toggle(m);
				i.removeClass("ui-accordion-header-active ui-state-active");
				if (n.icons) {
					i.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header)
				}
				if (!l) {
					j.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
					if (n.icons) {
						j.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader)
					}
					j.next().addClass("ui-accordion-content-active")
				}
			},
			_toggle: function(h) {
				var f = h.newPanel
				  , g = this.prevShow.length ? this.prevShow : h.oldPanel;
				this.prevShow.add(this.prevHide).stop(true, true);
				this.prevShow = f;
				this.prevHide = g;
				if (this.options.animate) {
					this._animate(f, g, h)
				} else {
					g.hide();
					f.show();
					this._toggleComplete(h)
				}
				g.attr({
					"aria-expanded": "false",
					"aria-hidden": "true"
				});
				g.prev().attr("aria-selected", "false");
				if (f.length && g.length) {
					g.prev().attr("tabIndex", -1)
				} else {
					if (f.length) {
						this.headers.filter(function() {
							return d(this).attr("tabIndex") === 0
						}).attr("tabIndex", -1)
					}
				}
				f.attr({
					"aria-expanded": "true",
					"aria-hidden": "false"
				}).prev().attr({
					"aria-selected": "true",
					tabIndex: 0
				})
			},
			_animate: function(f, n, j) {
				var m, l, i, k = this, o = 0, p = f.length && (!n.length || (f.index() < n.index())), h = this.options.animate || {}, q = p && h.down || h, g = function() {
					k._toggleComplete(j)
				};
				if (typeof q === "number") {
					i = q
				}
				if (typeof q === "string") {
					l = q
				}
				l = l || q.easing || h.easing;
				i = i || q.duration || h.duration;
				if (!n.length) {
					return f.animate(a, i, l, g)
				}
				if (!f.length) {
					return n.animate(c, i, l, g)
				}
				m = f.show().outerHeight();
				n.animate(c, {
					duration: i,
					easing: l,
					step: function(r, s) {
						s.now = Math.round(r)
					}
				});
				f.hide().animate(a, {
					duration: i,
					easing: l,
					complete: g,
					step: function(r, s) {
						s.now = Math.round(r);
						if (s.prop !== "height") {
							o += s.now
						} else {
							if (k.options.heightStyle !== "content") {
								s.now = Math.round(m - n.outerHeight() - o);
								o = 0
							}
						}
					}
				})
			},
			_toggleComplete: function(g) {
				var f = g.oldPanel;
				f.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
				if (f.length) {
					f.parent()[0].className = f.parent()[0].className
				}
				this._trigger("activate", null, g)
			}
		});
		if (d.uiBackCompat !== false) {
			(function(g, f) {
				g.extend(f.options, {
					navigation: false,
					navigationFilter: function() {
						return this.href.toLowerCase() === location.href.toLowerCase()
					}
				});
				var h = f._create;
				f._create = function() {
					if (this.options.navigation) {
						var j = this
						  , l = this.element.find(this.options.header)
						  , i = l.next()
						  , k = l.add(i).find("a").filter(this.options.navigationFilter)[0];
						if (k) {
							l.add(i).each(function(m) {
								if (g.contains(this, k)) {
									j.options.active = Math.floor(m / 2);
									return false
								}
							})
						}
					}
					h.call(this)
				}
			}(jQuery, jQuery.ui.accordion.prototype));
			(function(h, f) {
				h.extend(f.options, {
					heightStyle: null,
					autoHeight: true,
					clearStyle: false,
					fillSpace: false
				});
				var i = f._create
				  , g = f._setOption;
				h.extend(f, {
					_create: function() {
						this.options.heightStyle = this.options.heightStyle || this._mergeHeightStyle();
						i.call(this)
					},
					_setOption: function(j) {
						if (j === "autoHeight" || j === "clearStyle" || j === "fillSpace") {
							this.options.heightStyle = this._mergeHeightStyle()
						}
						g.apply(this, arguments)
					},
					_mergeHeightStyle: function() {
						var j = this.options;
						if (j.fillSpace) {
							return "fill"
						}
						if (j.clearStyle) {
							return "content"
						}
						if (j.autoHeight) {
							return "auto"
						}
					}
				})
			}(jQuery, jQuery.ui.accordion.prototype));
			(function(h, g) {
				h.extend(g.options.icons, {
					activeHeader: null,
					headerSelected: "ui-icon-triangle-1-s"
				});
				var f = g._createIcons;
				g._createIcons = function() {
					if (this.options.icons) {
						this.options.icons.activeHeader = this.options.icons.activeHeader || this.options.icons.headerSelected
					}
					f.call(this)
				}
			}(jQuery, jQuery.ui.accordion.prototype));
			(function(h, g) {
				g.activate = g._activate;
				var f = g._findActive;
				g._findActive = function(i) {
					if (i === -1) {
						i = false
					}
					if (i && typeof i !== "number") {
						i = this.headers.index(this.headers.filter(i));
						if (i === -1) {
							i = false
						}
					}
					return f.call(this, i)
				}
			}(jQuery, jQuery.ui.accordion.prototype));
			jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh;
			(function(h, g) {
				h.extend(g.options, {
					change: null,
					changestart: null
				});
				var f = g._trigger;
				g._trigger = function(j, k, l) {
					var i = f.apply(this, arguments);
					if (!i) {
						return false
					}
					if (j === "beforeActivate") {
						i = f.call(this, "changestart", k, {
							oldHeader: l.oldHeader,
							oldContent: l.oldPanel,
							newHeader: l.newHeader,
							newContent: l.newPanel
						})
					} else {
						if (j === "activate") {
							i = f.call(this, "change", k, {
								oldHeader: l.oldHeader,
								oldContent: l.oldPanel,
								newHeader: l.newHeader,
								newContent: l.newPanel
							})
						}
					}
					return i
				}
			}(jQuery, jQuery.ui.accordion.prototype));
			(function(g, f) {
				g.extend(f.options, {
					animate: null,
					animated: "slide"
				});
				var h = f._create;
				f._create = function() {
					var i = this.options;
					if (i.animate === null) {
						if (!i.animated) {
							i.animate = false
						} else {
							if (i.animated === "slide") {
								i.animate = 300
							} else {
								if (i.animated === "bounceslide") {
									i.animate = {
										duration: 200,
										down: {
											easing: "easeOutBounce",
											duration: 1000
										}
									}
								} else {
									i.animate = i.animated
								}
							}
						}
					}
					h.call(this)
				}
			}(jQuery, jQuery.ui.accordion.prototype))
		}
	}
	)(jQuery);
	(function(a, b) {
		var c = 0;
		a.widget("ui.autocomplete", {
			version: "1.9.2",
			defaultElement: "<input>",
			options: {
				appendTo: "body",
				autoFocus: false,
				delay: 300,
				minLength: 1,
				position: {
					my: "left top",
					at: "left bottom",
					collision: "none"
				},
				source: null,
				change: null,
				close: null,
				focus: null,
				open: null,
				response: null,
				search: null,
				select: null
			},
			pending: 0,
			_create: function() {
				var e, d, f;
				this.isMultiLine = this._isMultiLine();
				this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"];
				this.isNewMenu = true;
				this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
				this._on(this.element, {
					keydown: function(g) {
						if (this.element.prop("readOnly")) {
							e = true;
							f = true;
							d = true;
							return
						}
						e = false;
						f = false;
						d = false;
						var h = a.ui.keyCode;
						switch (g.keyCode) {
						case h.PAGE_UP:
							e = true;
							this._move("previousPage", g);
							break;
						case h.PAGE_DOWN:
							e = true;
							this._move("nextPage", g);
							break;
						case h.UP:
							e = true;
							this._keyEvent("previous", g);
							break;
						case h.DOWN:
							e = true;
							this._keyEvent("next", g);
							break;
						case h.ENTER:
						case h.NUMPAD_ENTER:
							if (this.menu.active) {
								e = true;
								g.preventDefault();
								this.menu.select(g)
							}
							break;
						case h.TAB:
							if (this.menu.active) {
								this.menu.select(g)
							}
							break;
						case h.ESCAPE:
							if (this.menu.element.is(":visible")) {
								this._value(this.term);
								this.close(g);
								g.preventDefault()
							}
							break;
						default:
							d = true;
							this._searchTimeout(g);
							break
						}
					},
					keypress: function(g) {
						if (e) {
							e = false;
							g.preventDefault();
							return
						}
						if (d) {
							return
						}
						var h = a.ui.keyCode;
						switch (g.keyCode) {
						case h.PAGE_UP:
							this._move("previousPage", g);
							break;
						case h.PAGE_DOWN:
							this._move("nextPage", g);
							break;
						case h.UP:
							this._keyEvent("previous", g);
							break;
						case h.DOWN:
							this._keyEvent("next", g);
							break
						}
					},
					input: function(g) {
						if (f) {
							f = false;
							g.preventDefault();
							return
						}
						this._searchTimeout(g)
					},
					focus: function() {
						this.selectedItem = null;
						this.previous = this._value()
					},
					blur: function(g) {
						if (this.cancelBlur) {
							delete this.cancelBlur;
							return
						}
						clearTimeout(this.searching);
						this.close(g);
						this._change(g)
					}
				});
				this._initSource();
				this.menu = a("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
					input: a(),
					role: null
				}).zIndex(this.element.zIndex() + 1).hide().data("menu");
				this._on(this.menu.element, {
					mousedown: function(g) {
						g.preventDefault();
						this.cancelBlur = true;
						this._delay(function() {
							delete this.cancelBlur
						});
						var h = this.menu.element[0];
						if (!a(g.target).closest(".ui-menu-item").length) {
							this._delay(function() {
								var i = this;
								this.document.one("mousedown", function(j) {
									if (j.target !== i.element[0] && j.target !== h && !a.contains(h, j.target)) {
										i.close()
									}
								})
							})
						}
					},
					menufocus: function(h, i) {
						if (this.isNewMenu) {
							this.isNewMenu = false;
							if (h.originalEvent && /^mouse/.test(h.originalEvent.type)) {
								this.menu.blur();
								this.document.one("mousemove", function() {
									a(h.target).trigger(h.originalEvent)
								});
								return
							}
						}
						var g = i.item.data("ui-autocomplete-item") || i.item.data("item.autocomplete");
						if (false !== this._trigger("focus", h, {
							item: g
						})) {
							if (h.originalEvent && /^key/.test(h.originalEvent.type)) {
								this._value(g.value)
							}
						} else {
							this.liveRegion.text(g.value)
						}
					},
					menuselect: function(i, j) {
						var h = j.item.data("ui-autocomplete-item") || j.item.data("item.autocomplete")
						  , g = this.previous;
						if (this.element[0] !== this.document[0].activeElement) {
							this.element.focus();
							this.previous = g;
							this._delay(function() {
								this.previous = g;
								this.selectedItem = h
							})
						}
						if (false !== this._trigger("select", i, {
							item: h
						})) {
							this._value(h.value)
						}
						this.term = this._value();
						this.close(i);
						this.selectedItem = h
					}
				});
				this.liveRegion = a("<span>", {
					role: "status",
					"aria-live": "polite"
				}).addClass("ui-helper-hidden-accessible").insertAfter(this.element);
				if (a.fn.bgiframe) {
					this.menu.element.bgiframe()
				}
				this._on(this.window, {
					beforeunload: function() {
						this.element.removeAttr("autocomplete")
					}
				})
			},
			_destroy: function() {
				clearTimeout(this.searching);
				this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
				this.menu.element.remove();
				this.liveRegion.remove()
			},
			_setOption: function(d, e) {
				this._super(d, e);
				if (d === "source") {
					this._initSource()
				}
				if (d === "appendTo") {
					this.menu.element.appendTo(this.document.find(e || "body")[0])
				}
				if (d === "disabled" && e && this.xhr) {
					this.xhr.abort()
				}
			},
			_isMultiLine: function() {
				if (this.element.is("textarea")) {
					return true
				}
				if (this.element.is("input")) {
					return false
				}
				return this.element.prop("isContentEditable")
			},
			_initSource: function() {
				var f, d, e = this;
				if (a.isArray(this.options.source)) {
					f = this.options.source;
					this.source = function(h, g) {
						g(a.ui.autocomplete.filter(f, h.term))
					}
				} else {
					if (typeof this.options.source === "string") {
						d = this.options.source;
						this.source = function(h, g) {
							if (e.xhr) {
								e.xhr.abort()
							}
							e.xhr = a.ajax({
								url: d,
								data: h,
								dataType: "json",
								success: function(i) {
									g(i)
								},
								error: function() {
									g([])
								}
							})
						}
					} else {
						this.source = this.options.source
					}
				}
			},
			_searchTimeout: function(d) {
				clearTimeout(this.searching);
				this.searching = this._delay(function() {
					if (this.term !== this._value()) {
						this.selectedItem = null;
						this.search(null, d)
					}
				}, this.options.delay)
			},
			search: function(e, d) {
				e = e != null ? e : this._value();
				this.term = this._value();
				if (e.length < this.options.minLength) {
					return this.close(d)
				}
				if (this._trigger("search", d) === false) {
					return
				}
				return this._search(e)
			},
			_search: function(d) {
				this.pending++;
				this.element.addClass("ui-autocomplete-loading");
				this.cancelSearch = false;
				this.source({
					term: d
				}, this._response())
			},
			_response: function() {
				var e = this
				  , d = ++c;
				return function(f) {
					if (d === c) {
						e.__response(f)
					}
					e.pending--;
					if (!e.pending) {
						e.element.removeClass("ui-autocomplete-loading")
					}
				}
			},
			__response: function(d) {
				if (d) {
					d = this._normalize(d)
				}
				this._trigger("response", null, {
					content: d
				});
				if (!this.options.disabled && d && d.length && !this.cancelSearch) {
					this._suggest(d);
					this._trigger("open")
				} else {
					this._close()
				}
			},
			close: function(d) {
				this.cancelSearch = true;
				this._close(d)
			},
			_close: function(d) {
				if (this.menu.element.is(":visible")) {
					this.menu.element.hide();
					this.menu.blur();
					this.isNewMenu = true;
					this._trigger("close", d)
				}
			},
			_change: function(d) {
				if (this.previous !== this._value()) {
					this._trigger("change", d, {
						item: this.selectedItem
					})
				}
			},
			_normalize: function(d) {
				if (d.length && d[0].label && d[0].value) {
					return d
				}
				return a.map(d, function(e) {
					if (typeof e === "string") {
						return {
							label: e,
							value: e
						}
					}
					return a.extend({
						label: e.label || e.value,
						value: e.value || e.label
					}, e)
				})
			},
			_suggest: function(d) {
				var e = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
				this._renderMenu(e, d);
				this.menu.refresh();
				e.show();
				this._resizeMenu();
				e.position(a.extend({
					of: this.element
				}, this.options.position));
				if (this.options.autoFocus) {
					this.menu.next()
				}
			},
			_resizeMenu: function() {
				var d = this.menu.element;
				d.outerWidth(Math.max(d.width("").outerWidth() + 1, this.element.outerWidth()))
			},
			_renderMenu: function(e, d) {
				var f = this;
				a.each(d, function(g, h) {
					f._renderItemData(e, h)
				})
			},
			_renderItemData: function(d, e) {
				return this._renderItem(d, e).data("ui-autocomplete-item", e)
			},
			_renderItem: function(d, e) {
				return a("<li>").append(a("<a>").text(e.label)).appendTo(d)
			},
			_move: function(e, d) {
				if (!this.menu.element.is(":visible")) {
					this.search(null, d);
					return
				}
				if (this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e)) {
					this._value(this.term);
					this.menu.blur();
					return
				}
				this.menu[e](d)
			},
			widget: function() {
				return this.menu.element
			},
			_value: function() {
				return this.valueMethod.apply(this.element, arguments)
			},
			_keyEvent: function(e, d) {
				if (!this.isMultiLine || this.menu.element.is(":visible")) {
					this._move(e, d);
					d.preventDefault()
				}
			}
		});
		a.extend(a.ui.autocomplete, {
			escapeRegex: function(d) {
				return d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
			},
			filter: function(f, d) {
				var e = new RegExp(a.ui.autocomplete.escapeRegex(d),"i");
				return a.grep(f, function(g) {
					return e.test(g.label || g.value || g)
				})
			}
		});
		a.widget("ui.autocomplete", a.ui.autocomplete, {
			options: {
				messages: {
					noResults: "No search results.",
					results: function(d) {
						return d + (d > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
					}
				}
			},
			__response: function(e) {
				var d;
				this._superApply(arguments);
				if (this.options.disabled || this.cancelSearch) {
					return
				}
				if (e && e.length) {
					d = this.options.messages.results(e.length)
				} else {
					d = this.options.messages.noResults
				}
				this.liveRegion.text(d)
			}
		})
	}(jQuery));
	(function(f, b) {
		var k, e, a, h, i = "ui-button ui-widget ui-state-default ui-corner-all", c = "ui-state-hover ui-state-active ", g = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", j = function() {
			var l = f(this).find(":ui-button");
			setTimeout(function() {
				l.button("refresh")
			}, 1)
		}, d = function(m) {
			var l = m.name
			  , n = m.form
			  , o = f([]);
			if (l) {
				if (n) {
					o = f(n).find("[name='" + l + "']")
				} else {
					o = f("[name='" + l + "']", m.ownerDocument).filter(function() {
						return !this.form
					})
				}
			}
			return o
		};
		f.widget("ui.button", {
			version: "1.9.2",
			defaultElement: "<button>",
			options: {
				disabled: null,
				text: true,
				label: null,
				icons: {
					primary: null,
					secondary: null
				}
			},
			_create: function() {
				this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, j);
				if (typeof this.options.disabled !== "boolean") {
					this.options.disabled = !!this.element.prop("disabled")
				} else {
					this.element.prop("disabled", this.options.disabled)
				}
				this._determineButtonType();
				this.hasTitle = !!this.buttonElement.attr("title");
				var o = this
				  , m = this.options
				  , p = this.type === "checkbox" || this.type === "radio"
				  , n = !p ? "ui-state-active" : ""
				  , l = "ui-state-focus";
				if (m.label === null) {
					m.label = (this.type === "input" ? this.buttonElement.val() : this.buttonElement.html())
				}
				this._hoverable(this.buttonElement);
				this.buttonElement.addClass(i).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
					if (m.disabled) {
						return
					}
					if (this === k) {
						f(this).addClass("ui-state-active")
					}
				}).bind("mouseleave" + this.eventNamespace, function() {
					if (m.disabled) {
						return
					}
					f(this).removeClass(n)
				}).bind("click" + this.eventNamespace, function(q) {
					if (m.disabled) {
						q.preventDefault();
						q.stopImmediatePropagation()
					}
				});
				this.element.bind("focus" + this.eventNamespace, function() {
					o.buttonElement.addClass(l)
				}).bind("blur" + this.eventNamespace, function() {
					o.buttonElement.removeClass(l)
				});
				if (p) {
					this.element.bind("change" + this.eventNamespace, function() {
						if (h) {
							return
						}
						o.refresh()
					});
					this.buttonElement.bind("mousedown" + this.eventNamespace, function(q) {
						if (m.disabled) {
							return
						}
						h = false;
						e = q.pageX;
						a = q.pageY
					}).bind("mouseup" + this.eventNamespace, function(q) {
						if (m.disabled) {
							return
						}
						if (e !== q.pageX || a !== q.pageY) {
							h = true
						}
					})
				}
				if (this.type === "checkbox") {
					this.buttonElement.bind("click" + this.eventNamespace, function() {
						if (m.disabled || h) {
							return false
						}
						f(this).toggleClass("ui-state-active");
						o.buttonElement.attr("aria-pressed", o.element[0].checked)
					})
				} else {
					if (this.type === "radio") {
						this.buttonElement.bind("click" + this.eventNamespace, function() {
							if (m.disabled || h) {
								return false
							}
							f(this).addClass("ui-state-active");
							o.buttonElement.attr("aria-pressed", "true");
							var q = o.element[0];
							d(q).not(q).map(function() {
								return f(this).button("widget")[0]
							}).removeClass("ui-state-active").attr("aria-pressed", "false")
						})
					} else {
						this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
							if (m.disabled) {
								return false
							}
							f(this).addClass("ui-state-active");
							k = this;
							o.document.one("mouseup", function() {
								k = null
							})
						}).bind("mouseup" + this.eventNamespace, function() {
							if (m.disabled) {
								return false
							}
							f(this).removeClass("ui-state-active")
						}).bind("keydown" + this.eventNamespace, function(q) {
							if (m.disabled) {
								return false
							}
							if (q.keyCode === f.ui.keyCode.SPACE || q.keyCode === f.ui.keyCode.ENTER) {
								f(this).addClass("ui-state-active")
							}
						}).bind("keyup" + this.eventNamespace, function() {
							f(this).removeClass("ui-state-active")
						});
						if (this.buttonElement.is("a")) {
							this.buttonElement.keyup(function(q) {
								if (q.keyCode === f.ui.keyCode.SPACE) {
									f(this).click()
								}
							})
						}
					}
				}
				this._setOption("disabled", m.disabled);
				this._resetButton()
			},
			_determineButtonType: function() {
				var l, n, m;
				if (this.element.is("[type=checkbox]")) {
					this.type = "checkbox"
				} else {
					if (this.element.is("[type=radio]")) {
						this.type = "radio"
					} else {
						if (this.element.is("input")) {
							this.type = "input"
						} else {
							this.type = "button"
						}
					}
				}
				if (this.type === "checkbox" || this.type === "radio") {
					l = this.element.parents().last();
					n = "label[for='" + this.element.attr("id") + "']";
					this.buttonElement = l.find(n);
					if (!this.buttonElement.length) {
						l = l.length ? l.siblings() : this.element.siblings();
						this.buttonElement = l.filter(n);
						if (!this.buttonElement.length) {
							this.buttonElement = l.find(n)
						}
					}
					this.element.addClass("ui-helper-hidden-accessible");
					m = this.element.is(":checked");
					if (m) {
						this.buttonElement.addClass("ui-state-active")
					}
					this.buttonElement.prop("aria-pressed", m)
				} else {
					this.buttonElement = this.element
				}
			},
			widget: function() {
				return this.buttonElement
			},
			_destroy: function() {
				this.element.removeClass("ui-helper-hidden-accessible");
				this.buttonElement.removeClass(i + " " + c + " " + g).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
				if (!this.hasTitle) {
					this.buttonElement.removeAttr("title")
				}
			},
			_setOption: function(l, m) {
				this._super(l, m);
				if (l === "disabled") {
					if (m) {
						this.element.prop("disabled", true)
					} else {
						this.element.prop("disabled", false)
					}
					return
				}
				this._resetButton()
			},
			refresh: function() {
				var l = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
				if (l !== this.options.disabled) {
					this._setOption("disabled", l)
				}
				if (this.type === "radio") {
					d(this.element[0]).each(function() {
						if (f(this).is(":checked")) {
							f(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true")
						} else {
							f(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
						}
					})
				} else {
					if (this.type === "checkbox") {
						if (this.element.is(":checked")) {
							this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true")
						} else {
							this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false")
						}
					}
				}
			},
			_resetButton: function() {
				if (this.type === "input") {
					if (this.options.label) {
						this.element.val(this.options.label)
					}
					return
				}
				var p = this.buttonElement.removeClass(g)
				  , n = f("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(p.empty()).text()
				  , m = this.options.icons
				  , l = m.primary && m.secondary
				  , o = [];
				if (m.primary || m.secondary) {
					if (this.options.text) {
						o.push("ui-button-text-icon" + (l ? "s" : (m.primary ? "-primary" : "-secondary")))
					}
					if (m.primary) {
						p.prepend("<span class='ui-button-icon-primary ui-icon " + m.primary + "'></span>")
					}
					if (m.secondary) {
						p.append("<span class='ui-button-icon-secondary ui-icon " + m.secondary + "'></span>")
					}
					if (!this.options.text) {
						o.push(l ? "ui-button-icons-only" : "ui-button-icon-only");
						if (!this.hasTitle) {
							p.attr("title", f.trim(n))
						}
					}
				} else {
					o.push("ui-button-text-only")
				}
				p.addClass(o.join(" "))
			}
		});
		f.widget("ui.buttonset", {
			version: "1.9.2",
			options: {
				items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"
			},
			_create: function() {
				this.element.addClass("ui-buttonset")
			},
			_init: function() {
				this.refresh()
			},
			_setOption: function(l, m) {
				if (l === "disabled") {
					this.buttons.button("option", l, m)
				}
				this._super(l, m)
			},
			refresh: function() {
				var l = this.element.css("direction") === "rtl";
				this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
					return f(this).button("widget")[0]
				}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(l ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(l ? "ui-corner-left" : "ui-corner-right").end().end()
			},
			_destroy: function() {
				this.element.removeClass("ui-buttonset");
				this.buttons.map(function() {
					return f(this).button("widget")[0]
				}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
			}
		})
	}(jQuery));
	(function($, undefined) {
		$.extend($.ui, {
			datepicker: {
				version: "1.9.2"
			}
		});
		var PROP_NAME = "datepicker";
		var dpuuid = new Date().getTime();
		var instActive;
		function Datepicker() {
			this.debug = false;
			this._curInst = null;
			this._keyEvent = false;
			this._disabledInputs = [];
			this._datepickerShowing = false;
			this._inDialog = false;
			this._mainDivId = "ui-datepicker-div";
			this._inlineClass = "ui-datepicker-inline";
			this._appendClass = "ui-datepicker-append";
			this._triggerClass = "ui-datepicker-trigger";
			this._dialogClass = "ui-datepicker-dialog";
			this._disableClass = "ui-datepicker-disabled";
			this._unselectableClass = "ui-datepicker-unselectable";
			this._currentClass = "ui-datepicker-current-day";
			this._dayOverClass = "ui-datepicker-days-cell-over";
			this.regional = [];
			this.regional[""] = {
				closeText: "Done",
				prevText: "Prev",
				nextText: "Next",
				currentText: "Today",
				monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
				weekHeader: "Wk",
				dateFormat: "mm/dd/yy",
				firstDay: 0,
				isRTL: false,
				showMonthAfterYear: false,
				yearSuffix: ""
			};
			this._defaults = {
				showOn: "focus",
				showAnim: "fadeIn",
				showOptions: {},
				defaultDate: null,
				appendText: "",
				buttonText: "...",
				buttonImage: "",
				buttonImageOnly: false,
				hideIfNoPrevNext: false,
				navigationAsDateFormat: false,
				gotoCurrent: false,
				changeMonth: false,
				changeYear: false,
				yearRange: "c-10:c+10",
				showOtherMonths: false,
				selectOtherMonths: false,
				showWeek: false,
				calculateWeek: this.iso8601Week,
				shortYearCutoff: "+10",
				minDate: null,
				maxDate: null,
				duration: "fast",
				beforeShowDay: null,
				beforeShow: null,
				onSelect: null,
				onChangeMonthYear: null,
				onClose: null,
				numberOfMonths: 1,
				showCurrentAtPos: 0,
				stepMonths: 1,
				stepBigMonths: 12,
				altField: "",
				altFormat: "",
				constrainInput: true,
				showButtonPanel: false,
				autoSize: false,
				disabled: false
			};
			$.extend(this._defaults, this.regional[""]);
			this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
		}
		$.extend(Datepicker.prototype, {
			markerClassName: "hasDatepicker",
			maxRows: 4,
			log: function() {
				if (this.debug) {
					console.log.apply("", arguments)
				}
			},
			_widgetDatepicker: function() {
				return this.dpDiv
			},
			setDefaults: function(settings) {
				extendRemove(this._defaults, settings || {});
				return this
			},
			_attachDatepicker: function(target, settings) {
				var inlineSettings = null;
				for (var attrName in this._defaults) {
					var attrValue = target.getAttribute("date:" + attrName);
					if (attrValue) {
						inlineSettings = inlineSettings || {};
						try {
							inlineSettings[attrName] = eval(attrValue)
						} catch (err) {
							inlineSettings[attrName] = attrValue
						}
					}
				}
				var nodeName = target.nodeName.toLowerCase();
				var inline = (nodeName == "div" || nodeName == "span");
				if (!target.id) {
					this.uuid += 1;
					target.id = "dp" + this.uuid
				}
				var inst = this._newInst($(target), inline);
				inst.settings = $.extend({}, settings || {}, inlineSettings || {});
				if (nodeName == "input") {
					this._connectDatepicker(target, inst)
				} else {
					if (inline) {
						this._inlineDatepicker(target, inst)
					}
				}
			},
			_newInst: function(target, inline) {
				var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
				return {
					id: id,
					input: target,
					selectedDay: 0,
					selectedMonth: 0,
					selectedYear: 0,
					drawMonth: 0,
					drawYear: 0,
					inline: inline,
					dpDiv: (!inline ? this.dpDiv : bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))
				}
			},
			_connectDatepicker: function(target, inst) {
				var input = $(target);
				inst.append = $([]);
				inst.trigger = $([]);
				if (input.hasClass(this.markerClassName)) {
					return
				}
				this._attachments(input, inst);
				input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(event, key, value) {
					inst.settings[key] = value
				}).bind("getData.datepicker", function(event, key) {
					return this._get(inst, key)
				});
				this._autoSize(inst);
				$.data(target, PROP_NAME, inst);
				if (inst.settings.disabled) {
					this._disableDatepicker(target)
				}
			},
			_attachments: function(input, inst) {
				var appendText = this._get(inst, "appendText");
				var isRTL = this._get(inst, "isRTL");
				if (inst.append) {
					inst.append.remove()
				}
				if (appendText) {
					inst.append = $('<span class="' + this._appendClass + '">' + appendText + "</span>");
					input[isRTL ? "before" : "after"](inst.append)
				}
				input.unbind("focus", this._showDatepicker);
				if (inst.trigger) {
					inst.trigger.remove()
				}
				var showOn = this._get(inst, "showOn");
				if (showOn == "focus" || showOn == "both") {
					input.focus(this._showDatepicker)
				}
				if (showOn == "button" || showOn == "both") {
					var buttonText = this._get(inst, "buttonText");
					var buttonImage = this._get(inst, "buttonImage");
					inst.trigger = $(this._get(inst, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
						src: buttonImage,
						alt: buttonText,
						title: buttonText
					}) : $('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage == "" ? buttonText : $("<img/>").attr({
						src: buttonImage,
						alt: buttonText,
						title: buttonText
					})));
					input[isRTL ? "before" : "after"](inst.trigger);
					inst.trigger.click(function() {
						if ($.datepicker._datepickerShowing && $.datepicker._lastInput == input[0]) {
							$.datepicker._hideDatepicker()
						} else {
							if ($.datepicker._datepickerShowing && $.datepicker._lastInput != input[0]) {
								$.datepicker._hideDatepicker();
								$.datepicker._showDatepicker(input[0])
							} else {
								$.datepicker._showDatepicker(input[0])
							}
						}
						return false
					})
				}
			},
			_autoSize: function(inst) {
				if (this._get(inst, "autoSize") && !inst.inline) {
					var date = new Date(2009,12 - 1,20);
					var dateFormat = this._get(inst, "dateFormat");
					if (dateFormat.match(/[DM]/)) {
						var findMax = function(names) {
							var max = 0;
							var maxI = 0;
							for (var i = 0; i < names.length; i++) {
								if (names[i].length > max) {
									max = names[i].length;
									maxI = i
								}
							}
							return maxI
						};
						date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ? "monthNames" : "monthNamesShort"))));
						date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ? "dayNames" : "dayNamesShort"))) + 20 - date.getDay())
					}
					inst.input.attr("size", this._formatDate(inst, date).length)
				}
			},
			_inlineDatepicker: function(target, inst) {
				var divSpan = $(target);
				if (divSpan.hasClass(this.markerClassName)) {
					return
				}
				divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker", function(event, key, value) {
					inst.settings[key] = value
				}).bind("getData.datepicker", function(event, key) {
					return this._get(inst, key)
				});
				$.data(target, PROP_NAME, inst);
				this._setDate(inst, this._getDefaultDate(inst), true);
				this._updateDatepicker(inst);
				this._updateAlternate(inst);
				if (inst.settings.disabled) {
					this._disableDatepicker(target)
				}
				inst.dpDiv.css("display", "block")
			},
			_dialogDatepicker: function(input, date, onSelect, settings, pos) {
				var inst = this._dialogInst;
				if (!inst) {
					this.uuid += 1;
					var id = "dp" + this.uuid;
					this._dialogInput = $('<input type="text" id="' + id + '" style="position: absolute; top: -100px; width: 0px;"/>');
					this._dialogInput.keydown(this._doKeyDown);
					$("body").append(this._dialogInput);
					inst = this._dialogInst = this._newInst(this._dialogInput, false);
					inst.settings = {};
					$.data(this._dialogInput[0], PROP_NAME, inst)
				}
				extendRemove(inst.settings, settings || {});
				date = (date && date.constructor == Date ? this._formatDate(inst, date) : date);
				this._dialogInput.val(date);
				this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
				if (!this._pos) {
					var browserWidth = document.documentElement.clientWidth;
					var browserHeight = document.documentElement.clientHeight;
					var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
					var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
					this._pos = [(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY]
				}
				this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
				inst.settings.onSelect = onSelect;
				this._inDialog = true;
				this.dpDiv.addClass(this._dialogClass);
				this._showDatepicker(this._dialogInput[0]);
				if ($.blockUI) {
					$.blockUI(this.dpDiv)
				}
				$.data(this._dialogInput[0], PROP_NAME, inst);
				return this
			},
			_destroyDatepicker: function(target) {
				var $target = $(target);
				var inst = $.data(target, PROP_NAME);
				if (!$target.hasClass(this.markerClassName)) {
					return
				}
				var nodeName = target.nodeName.toLowerCase();
				$.removeData(target, PROP_NAME);
				if (nodeName == "input") {
					inst.append.remove();
					inst.trigger.remove();
					$target.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)
				} else {
					if (nodeName == "div" || nodeName == "span") {
						$target.removeClass(this.markerClassName).empty()
					}
				}
			},
			_enableDatepicker: function(target) {
				var $target = $(target);
				var inst = $.data(target, PROP_NAME);
				if (!$target.hasClass(this.markerClassName)) {
					return
				}
				var nodeName = target.nodeName.toLowerCase();
				if (nodeName == "input") {
					target.disabled = false;
					inst.trigger.filter("button").each(function() {
						this.disabled = false
					}).end().filter("img").css({
						opacity: "1.0",
						cursor: ""
					})
				} else {
					if (nodeName == "div" || nodeName == "span") {
						var inline = $target.children("." + this._inlineClass);
						inline.children().removeClass("ui-state-disabled");
						inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false)
					}
				}
				this._disabledInputs = $.map(this._disabledInputs, function(value) {
					return (value == target ? null : value)
				})
			},
			_disableDatepicker: function(target) {
				var $target = $(target);
				var inst = $.data(target, PROP_NAME);
				if (!$target.hasClass(this.markerClassName)) {
					return
				}
				var nodeName = target.nodeName.toLowerCase();
				if (nodeName == "input") {
					target.disabled = true;
					inst.trigger.filter("button").each(function() {
						this.disabled = true
					}).end().filter("img").css({
						opacity: "0.5",
						cursor: "default"
					})
				} else {
					if (nodeName == "div" || nodeName == "span") {
						var inline = $target.children("." + this._inlineClass);
						inline.children().addClass("ui-state-disabled");
						inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true)
					}
				}
				this._disabledInputs = $.map(this._disabledInputs, function(value) {
					return (value == target ? null : value)
				});
				this._disabledInputs[this._disabledInputs.length] = target
			},
			_isDisabledDatepicker: function(target) {
				if (!target) {
					return false
				}
				for (var i = 0; i < this._disabledInputs.length; i++) {
					if (this._disabledInputs[i] == target) {
						return true
					}
				}
				return false
			},
			_getInst: function(target) {
				try {
					return $.data(target, PROP_NAME)
				} catch (err) {
					throw "Missing instance data for this datepicker"
				}
			},
			_optionDatepicker: function(target, name, value) {
				var inst = this._getInst(target);
				if (arguments.length == 2 && typeof name == "string") {
					return (name == "defaults" ? $.extend({}, $.datepicker._defaults) : (inst ? (name == "all" ? $.extend({}, inst.settings) : this._get(inst, name)) : null))
				}
				var settings = name || {};
				if (typeof name == "string") {
					settings = {};
					settings[name] = value
				}
				if (inst) {
					if (this._curInst == inst) {
						this._hideDatepicker()
					}
					var date = this._getDateDatepicker(target, true);
					var minDate = this._getMinMaxDate(inst, "min");
					var maxDate = this._getMinMaxDate(inst, "max");
					extendRemove(inst.settings, settings);
					if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) {
						inst.settings.minDate = this._formatDate(inst, minDate)
					}
					if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) {
						inst.settings.maxDate = this._formatDate(inst, maxDate)
					}
					this._attachments($(target), inst);
					this._autoSize(inst);
					this._setDate(inst, date);
					this._updateAlternate(inst);
					this._updateDatepicker(inst)
				}
			},
			_changeDatepicker: function(target, name, value) {
				this._optionDatepicker(target, name, value)
			},
			_refreshDatepicker: function(target) {
				var inst = this._getInst(target);
				if (inst) {
					this._updateDatepicker(inst)
				}
			},
			_setDateDatepicker: function(target, date) {
				var inst = this._getInst(target);
				if (inst) {
					this._setDate(inst, date);
					this._updateDatepicker(inst);
					this._updateAlternate(inst)
				}
			},
			_getDateDatepicker: function(target, noDefault) {
				var inst = this._getInst(target);
				if (inst && !inst.inline) {
					this._setDateFromField(inst, noDefault)
				}
				return (inst ? this._getDate(inst) : null)
			},
			_doKeyDown: function(event) {
				var inst = $.datepicker._getInst(event.target);
				var handled = true;
				var isRTL = inst.dpDiv.is(".ui-datepicker-rtl");
				inst._keyEvent = true;
				if ($.datepicker._datepickerShowing) {
					switch (event.keyCode) {
					case 9:
						$.datepicker._hideDatepicker();
						handled = false;
						break;
					case 13:
						var sel = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", inst.dpDiv);
						if (sel[0]) {
							$.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0])
						}
						var onSelect = $.datepicker._get(inst, "onSelect");
						if (onSelect) {
							var dateStr = $.datepicker._formatDate(inst);
							onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst])
						} else {
							$.datepicker._hideDatepicker()
						}
						return false;
						break;
					case 27:
						$.datepicker._hideDatepicker();
						break;
					case 33:
						$.datepicker._adjustDate(event.target, (event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths")), "M");
						break;
					case 34:
						$.datepicker._adjustDate(event.target, (event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths")), "M");
						break;
					case 35:
						if (event.ctrlKey || event.metaKey) {
							$.datepicker._clearDate(event.target)
						}
						handled = event.ctrlKey || event.metaKey;
						break;
					case 36:
						if (event.ctrlKey || event.metaKey) {
							$.datepicker._gotoToday(event.target)
						}
						handled = event.ctrlKey || event.metaKey;
						break;
					case 37:
						if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), "D")
						}
						handled = event.ctrlKey || event.metaKey;
						if (event.originalEvent.altKey) {
							$.datepicker._adjustDate(event.target, (event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths")), "M")
						}
						break;
					case 38:
						if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, -7, "D")
						}
						handled = event.ctrlKey || event.metaKey;
						break;
					case 39:
						if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), "D")
						}
						handled = event.ctrlKey || event.metaKey;
						if (event.originalEvent.altKey) {
							$.datepicker._adjustDate(event.target, (event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths")), "M")
						}
						break;
					case 40:
						if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, +7, "D")
						}
						handled = event.ctrlKey || event.metaKey;
						break;
					default:
						handled = false
					}
				} else {
					if (event.keyCode == 36 && event.ctrlKey) {
						$.datepicker._showDatepicker(this)
					} else {
						handled = false
					}
				}
				if (handled) {
					event.preventDefault();
					event.stopPropagation()
				}
			},
			_doKeyPress: function(event) {
				var inst = $.datepicker._getInst(event.target);
				if ($.datepicker._get(inst, "constrainInput")) {
					var chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
					var chr = String.fromCharCode(event.charCode == undefined ? event.keyCode : event.charCode);
					return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > -1)
				}
			},
			_doKeyUp: function(event) {
				var inst = $.datepicker._getInst(event.target);
				if (inst.input.val() != inst.lastVal) {
					try {
						var date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), (inst.input ? inst.input.val() : null), $.datepicker._getFormatConfig(inst));
						if (date) {
							$.datepicker._setDateFromField(inst);
							$.datepicker._updateAlternate(inst);
							$.datepicker._updateDatepicker(inst)
						}
					} catch (err) {
						$.datepicker.log(err)
					}
				}
				return true
			},
			_showDatepicker: function(input) {
				input = input.target || input;
				if (input.nodeName.toLowerCase() != "input") {
					input = $("input", input.parentNode)[0]
				}
				if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput == input) {
					return
				}
				var inst = $.datepicker._getInst(input);
				if ($.datepicker._curInst && $.datepicker._curInst != inst) {
					$.datepicker._curInst.dpDiv.stop(true, true);
					if (inst && $.datepicker._datepickerShowing) {
						$.datepicker._hideDatepicker($.datepicker._curInst.input[0])
					}
				}
				var beforeShow = $.datepicker._get(inst, "beforeShow");
				var beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
				if (beforeShowSettings === false) {
					return
				}
				extendRemove(inst.settings, beforeShowSettings);
				inst.lastVal = null;
				$.datepicker._lastInput = input;
				$.datepicker._setDateFromField(inst);
				if ($.datepicker._inDialog) {
					input.value = ""
				}
				if (!$.datepicker._pos) {
					$.datepicker._pos = $.datepicker._findPos(input);
					$.datepicker._pos[1] += input.offsetHeight
				}
				var isFixed = false;
				$(input).parents().each(function() {
					isFixed |= $(this).css("position") == "fixed";
					return !isFixed
				});
				var offset = {
					left: $.datepicker._pos[0],
					top: $.datepicker._pos[1]
				};
				$.datepicker._pos = null;
				inst.dpDiv.empty();
				inst.dpDiv.css({
					position: "absolute",
					display: "block",
					top: "-1000px"
				});
				$.datepicker._updateDatepicker(inst);
				offset = $.datepicker._checkOffset(inst, offset, isFixed);
				inst.dpDiv.css({
					position: ($.datepicker._inDialog && $.blockUI ? "static" : (isFixed ? "fixed" : "absolute")),
					display: "none",
					left: offset.left + "px",
					top: offset.top + "px"
				});
				if (!inst.inline) {
					var showAnim = $.datepicker._get(inst, "showAnim");
					var duration = $.datepicker._get(inst, "duration");
					var postProcess = function() {
						var cover = inst.dpDiv.find("iframe.ui-datepicker-cover");
						if (!!cover.length) {
							var borders = $.datepicker._getBorders(inst.dpDiv);
							cover.css({
								left: -borders[0],
								top: -borders[1],
								width: inst.dpDiv.outerWidth(),
								height: inst.dpDiv.outerHeight()
							})
						}
					};
					inst.dpDiv.zIndex($(input).zIndex() + 1);
					$.datepicker._datepickerShowing = true;
					if ($.effects && ($.effects.effect[showAnim] || $.effects[showAnim])) {
						inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess)
					} else {
						inst.dpDiv[showAnim || "show"]((showAnim ? duration : null), postProcess)
					}
					if (!showAnim || !duration) {
						postProcess()
					}
					if (inst.input.is(":visible") && !inst.input.is(":disabled")) {
						inst.input.focus()
					}
					$.datepicker._curInst = inst
				}
			},
			_updateDatepicker: function(inst) {
				this.maxRows = 4;
				var borders = $.datepicker._getBorders(inst.dpDiv);
				instActive = inst;
				inst.dpDiv.empty().append(this._generateHTML(inst));
				this._attachHandlers(inst);
				var cover = inst.dpDiv.find("iframe.ui-datepicker-cover");
				if (!!cover.length) {
					cover.css({
						left: -borders[0],
						top: -borders[1],
						width: inst.dpDiv.outerWidth(),
						height: inst.dpDiv.outerHeight()
					})
				}
				inst.dpDiv.find("." + this._dayOverClass + " a").mouseover();
				var numMonths = this._getNumberOfMonths(inst);
				var cols = numMonths[1];
				var width = 17;
				inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
				if (cols > 1) {
					inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", (width * cols) + "em")
				}
				inst.dpDiv[(numMonths[0] != 1 || numMonths[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
				inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
				if (inst == $.datepicker._curInst && $.datepicker._datepickerShowing && inst.input && inst.input.is(":visible") && !inst.input.is(":disabled") && inst.input[0] != document.activeElement) {
					inst.input.focus()
				}
				if (inst.yearshtml) {
					var origyearshtml = inst.yearshtml;
					setTimeout(function() {
						if (origyearshtml === inst.yearshtml && inst.yearshtml) {
							inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml)
						}
						origyearshtml = inst.yearshtml = null
					}, 0)
				}
			},
			_getBorders: function(elem) {
				var convert = function(value) {
					return {
						thin: 1,
						medium: 2,
						thick: 3
					}[value] || value
				};
				return [parseFloat(convert(elem.css("border-left-width"))), parseFloat(convert(elem.css("border-top-width")))]
			},
			_checkOffset: function(inst, offset, isFixed) {
				var dpWidth = inst.dpDiv.outerWidth();
				var dpHeight = inst.dpDiv.outerHeight();
				var inputWidth = inst.input ? inst.input.outerWidth() : 0;
				var inputHeight = inst.input ? inst.input.outerHeight() : 0;
				var viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft());
				var viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());
				offset.left -= (this._get(inst, "isRTL") ? (dpWidth - inputWidth) : 0);
				offset.left -= (isFixed && offset.left == inst.input.offset().left) ? $(document).scrollLeft() : 0;
				offset.top -= (isFixed && offset.top == (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;
				offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ? Math.abs(offset.left + dpWidth - viewWidth) : 0);
				offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ? Math.abs(dpHeight + inputHeight) : 0);
				return offset
			},
			_findPos: function(obj) {
				var inst = this._getInst(obj);
				var isRTL = this._get(inst, "isRTL");
				while (obj && (obj.type == "hidden" || obj.nodeType != 1 || $.expr.filters.hidden(obj))) {
					obj = obj[isRTL ? "previousSibling" : "nextSibling"]
				}
				var position = $(obj).offset();
				return [position.left, position.top]
			},
			_hideDatepicker: function(input) {
				var inst = this._curInst;
				if (!inst || (input && inst != $.data(input, PROP_NAME))) {
					return
				}
				if (this._datepickerShowing) {
					var showAnim = this._get(inst, "showAnim");
					var duration = this._get(inst, "duration");
					var postProcess = function() {
						$.datepicker._tidyDialog(inst)
					};
					if ($.effects && ($.effects.effect[showAnim] || $.effects[showAnim])) {
						inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess)
					} else {
						inst.dpDiv[(showAnim == "slideDown" ? "slideUp" : (showAnim == "fadeIn" ? "fadeOut" : "hide"))]((showAnim ? duration : null), postProcess)
					}
					if (!showAnim) {
						postProcess()
					}
					this._datepickerShowing = false;
					var onClose = this._get(inst, "onClose");
					if (onClose) {
						onClose.apply((inst.input ? inst.input[0] : null), [(inst.input ? inst.input.val() : ""), inst])
					}
					this._lastInput = null;
					if (this._inDialog) {
						this._dialogInput.css({
							position: "absolute",
							left: "0",
							top: "-100px"
						});
						if ($.blockUI) {
							$.unblockUI();
							$("body").append(this.dpDiv)
						}
					}
					this._inDialog = false
				}
			},
			_tidyDialog: function(inst) {
				inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
			},
			_checkExternalClick: function(event) {
				if (!$.datepicker._curInst) {
					return
				}
				var $target = $(event.target)
				  , inst = $.datepicker._getInst($target[0]);
				if ((($target[0].id != $.datepicker._mainDivId && $target.parents("#" + $.datepicker._mainDivId).length == 0 && !$target.hasClass($.datepicker.markerClassName) && !$target.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI))) || ($target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != inst)) {
					$.datepicker._hideDatepicker()
				}
			},
			_adjustDate: function(id, offset, period) {
				var target = $(id);
				var inst = this._getInst(target[0]);
				if (this._isDisabledDatepicker(target[0])) {
					return
				}
				this._adjustInstDate(inst, offset + (period == "M" ? this._get(inst, "showCurrentAtPos") : 0), period);
				this._updateDatepicker(inst)
			},
			_gotoToday: function(id) {
				var target = $(id);
				var inst = this._getInst(target[0]);
				if (this._get(inst, "gotoCurrent") && inst.currentDay) {
					inst.selectedDay = inst.currentDay;
					inst.drawMonth = inst.selectedMonth = inst.currentMonth;
					inst.drawYear = inst.selectedYear = inst.currentYear
				} else {
					var date = new Date();
					inst.selectedDay = date.getDate();
					inst.drawMonth = inst.selectedMonth = date.getMonth();
					inst.drawYear = inst.selectedYear = date.getFullYear()
				}
				this._notifyChange(inst);
				this._adjustDate(target)
			},
			_selectMonthYear: function(id, select, period) {
				var target = $(id);
				var inst = this._getInst(target[0]);
				inst["selected" + (period == "M" ? "Month" : "Year")] = inst["draw" + (period == "M" ? "Month" : "Year")] = parseInt(select.options[select.selectedIndex].value, 10);
				this._notifyChange(inst);
				this._adjustDate(target)
			},
			_selectDay: function(id, month, year, td) {
				var target = $(id);
				if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
					return
				}
				var inst = this._getInst(target[0]);
				inst.selectedDay = inst.currentDay = $("a", td).html();
				inst.selectedMonth = inst.currentMonth = month;
				inst.selectedYear = inst.currentYear = year;
				this._selectDate(id, this._formatDate(inst, inst.currentDay, inst.currentMonth, inst.currentYear))
			},
			_clearDate: function(id) {
				var target = $(id);
				var inst = this._getInst(target[0]);
				this._selectDate(target, "")
			},
			_selectDate: function(id, dateStr) {
				var target = $(id);
				var inst = this._getInst(target[0]);
				dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
				if (inst.input) {
					inst.input.val(dateStr)
				}
				this._updateAlternate(inst);
				var onSelect = this._get(inst, "onSelect");
				if (onSelect) {
					onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst])
				} else {
					if (inst.input) {
						inst.input.trigger("change")
					}
				}
				if (inst.inline) {
					this._updateDatepicker(inst)
				} else {
					this._hideDatepicker();
					this._lastInput = inst.input[0];
					if (typeof (inst.input[0]) != "object") {
						inst.input.focus()
					}
					this._lastInput = null
				}
			},
			_updateAlternate: function(inst) {
				var altField = this._get(inst, "altField");
				if (altField) {
					var altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
					var date = this._getDate(inst);
					var dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
					$(altField).each(function() {
						$(this).val(dateStr)
					})
				}
			},
			noWeekends: function(date) {
				var day = date.getDay();
				return [(day > 0 && day < 6), ""]
			},
			iso8601Week: function(date) {
				var checkDate = new Date(date.getTime());
				checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
				var time = checkDate.getTime();
				checkDate.setMonth(0);
				checkDate.setDate(1);
				return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1
			},
			parseDate: function(format, value, settings) {
				if (format == null || value == null) {
					throw "Invalid arguments"
				}
				value = (typeof value == "object" ? value.toString() : value + "");
				if (value == "") {
					return null
				}
				var shortYearCutoff = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff;
				shortYearCutoff = (typeof shortYearCutoff != "string" ? shortYearCutoff : new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
				var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
				var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
				var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
				var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
				var year = -1;
				var month = -1;
				var day = -1;
				var doy = -1;
				var literal = false;
				var lookAhead = function(match) {
					var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
					if (matches) {
						iFormat++
					}
					return matches
				};
				var getNumber = function(match) {
					var isDoubled = lookAhead(match);
					var size = (match == "@" ? 14 : (match == "!" ? 20 : (match == "y" && isDoubled ? 4 : (match == "o" ? 3 : 2))));
					var digits = new RegExp("^\\d{1," + size + "}");
					var num = value.substring(iValue).match(digits);
					if (!num) {
						throw "Missing number at position " + iValue
					}
					iValue += num[0].length;
					return parseInt(num[0], 10)
				};
				var getName = function(match, shortNames, longNames) {
					var names = $.map(lookAhead(match) ? longNames : shortNames, function(v, k) {
						return [[k, v]]
					}).sort(function(a, b) {
						return -(a[1].length - b[1].length)
					});
					var index = -1;
					$.each(names, function(i, pair) {
						var name = pair[1];
						if (value.substr(iValue, name.length).toLowerCase() == name.toLowerCase()) {
							index = pair[0];
							iValue += name.length;
							return false
						}
					});
					if (index != -1) {
						return index + 1
					} else {
						throw "Unknown name at position " + iValue
					}
				};
				var checkLiteral = function() {
					if (value.charAt(iValue) != format.charAt(iFormat)) {
						throw "Unexpected literal at position " + iValue
					}
					iValue++
				};
				var iValue = 0;
				for (var iFormat = 0; iFormat < format.length; iFormat++) {
					if (literal) {
						if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
							literal = false
						} else {
							checkLiteral()
						}
					} else {
						switch (format.charAt(iFormat)) {
						case "d":
							day = getNumber("d");
							break;
						case "D":
							getName("D", dayNamesShort, dayNames);
							break;
						case "o":
							doy = getNumber("o");
							break;
						case "m":
							month = getNumber("m");
							break;
						case "M":
							month = getName("M", monthNamesShort, monthNames);
							break;
						case "y":
							year = getNumber("y");
							break;
						case "@":
							var date = new Date(getNumber("@"));
							year = date.getFullYear();
							month = date.getMonth() + 1;
							day = date.getDate();
							break;
						case "!":
							var date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
							year = date.getFullYear();
							month = date.getMonth() + 1;
							day = date.getDate();
							break;
						case "'":
							if (lookAhead("'")) {
								checkLiteral()
							} else {
								literal = true
							}
							break;
						default:
							checkLiteral()
						}
					}
				}
				if (iValue < value.length) {
					var extra = value.substr(iValue);
					if (!/^\s+/.test(extra)) {
						throw "Extra/unparsed characters found in date: " + extra
					}
				}
				if (year == -1) {
					year = new Date().getFullYear()
				} else {
					if (year < 100) {
						year += new Date().getFullYear() - new Date().getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100)
					}
				}
				if (doy > -1) {
					month = 1;
					day = doy;
					do {
						var dim = this._getDaysInMonth(year, month - 1);
						if (day <= dim) {
							break
						}
						month++;
						day -= dim
					} while (true)
				}
				var date = this._daylightSavingAdjust(new Date(year,month - 1,day));
				if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day) {
					throw "Invalid date"
				}
				return date
			},
			ATOM: "yy-mm-dd",
			COOKIE: "D, dd M yy",
			ISO_8601: "yy-mm-dd",
			RFC_822: "D, d M y",
			RFC_850: "DD, dd-M-y",
			RFC_1036: "D, d M y",
			RFC_1123: "D, d M yy",
			RFC_2822: "D, d M yy",
			RSS: "D, d M y",
			TICKS: "!",
			TIMESTAMP: "@",
			W3C: "yy-mm-dd",
			_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),
			formatDate: function(format, date, settings) {
				if (!date) {
					return ""
				}
				var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
				var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
				var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
				var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
				var lookAhead = function(match) {
					var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
					if (matches) {
						iFormat++
					}
					return matches
				};
				var formatNumber = function(match, value, len) {
					var num = "" + value;
					if (lookAhead(match)) {
						while (num.length < len) {
							num = "0" + num
						}
					}
					return num
				};
				var formatName = function(match, value, shortNames, longNames) {
					return (lookAhead(match) ? longNames[value] : shortNames[value])
				};
				var output = "";
				var literal = false;
				if (date) {
					for (var iFormat = 0; iFormat < format.length; iFormat++) {
						if (literal) {
							if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
								literal = false
							} else {
								output += format.charAt(iFormat)
							}
						} else {
							switch (format.charAt(iFormat)) {
							case "d":
								output += formatNumber("d", date.getDate(), 2);
								break;
							case "D":
								output += formatName("D", date.getDay(), dayNamesShort, dayNames);
								break;
							case "o":
								output += formatNumber("o", Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime() - new Date(date.getFullYear(),0,0).getTime()) / 86400000), 3);
								break;
							case "m":
								output += formatNumber("m", date.getMonth() + 1, 2);
								break;
							case "M":
								output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
								break;
							case "y":
								output += (lookAhead("y") ? date.getFullYear() : (date.getYear() % 100 < 10 ? "0" : "") + date.getYear() % 100);
								break;
							case "@":
								output += date.getTime();
								break;
							case "!":
								output += date.getTime() * 10000 + this._ticksTo1970;
								break;
							case "'":
								if (lookAhead("'")) {
									output += "'"
								} else {
									literal = true
								}
								break;
							default:
								output += format.charAt(iFormat)
							}
						}
					}
				}
				return output
			},
			_possibleChars: function(format) {
				var chars = "";
				var literal = false;
				var lookAhead = function(match) {
					var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
					if (matches) {
						iFormat++
					}
					return matches
				};
				for (var iFormat = 0; iFormat < format.length; iFormat++) {
					if (literal) {
						if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
							literal = false
						} else {
							chars += format.charAt(iFormat)
						}
					} else {
						switch (format.charAt(iFormat)) {
						case "d":
						case "m":
						case "y":
						case "@":
							chars += "0123456789";
							break;
						case "D":
						case "M":
							return null;
						case "'":
							if (lookAhead("'")) {
								chars += "'"
							} else {
								literal = true
							}
							break;
						default:
							chars += format.charAt(iFormat)
						}
					}
				}
				return chars
			},
			_get: function(inst, name) {
				return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name]
			},
			_setDateFromField: function(inst, noDefault) {
				if (inst.input.val() == inst.lastVal) {
					return
				}
				var dateFormat = this._get(inst, "dateFormat");
				var dates = inst.lastVal = inst.input ? inst.input.val() : null;
				var date, defaultDate;
				date = defaultDate = this._getDefaultDate(inst);
				var settings = this._getFormatConfig(inst);
				try {
					date = this.parseDate(dateFormat, dates, settings) || defaultDate
				} catch (event) {
					this.log(event);
					dates = (noDefault ? "" : dates)
				}
				inst.selectedDay = date.getDate();
				inst.drawMonth = inst.selectedMonth = date.getMonth();
				inst.drawYear = inst.selectedYear = date.getFullYear();
				inst.currentDay = (dates ? date.getDate() : 0);
				inst.currentMonth = (dates ? date.getMonth() : 0);
				inst.currentYear = (dates ? date.getFullYear() : 0);
				this._adjustInstDate(inst)
			},
			_getDefaultDate: function(inst) {
				return this._restrictMinMax(inst, this._determineDate(inst, this._get(inst, "defaultDate"), new Date()))
			},
			_determineDate: function(inst, date, defaultDate) {
				var offsetNumeric = function(offset) {
					var date = new Date();
					date.setDate(date.getDate() + offset);
					return date
				};
				var offsetString = function(offset) {
					try {
						return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), offset, $.datepicker._getFormatConfig(inst))
					} catch (e) {}
					var date = (offset.toLowerCase().match(/^c/) ? $.datepicker._getDate(inst) : null) || new Date();
					var year = date.getFullYear();
					var month = date.getMonth();
					var day = date.getDate();
					var pattern = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
					var matches = pattern.exec(offset);
					while (matches) {
						switch (matches[2] || "d") {
						case "d":
						case "D":
							day += parseInt(matches[1], 10);
							break;
						case "w":
						case "W":
							day += parseInt(matches[1], 10) * 7;
							break;
						case "m":
						case "M":
							month += parseInt(matches[1], 10);
							day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
							break;
						case "y":
						case "Y":
							year += parseInt(matches[1], 10);
							day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
							break
						}
						matches = pattern.exec(offset)
					}
					return new Date(year,month,day)
				};
				var newDate = (date == null || date === "" ? defaultDate : (typeof date == "string" ? offsetString(date) : (typeof date == "number" ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));
				newDate = (newDate && newDate.toString() == "Invalid Date" ? defaultDate : newDate);
				if (newDate) {
					newDate.setHours(0);
					newDate.setMinutes(0);
					newDate.setSeconds(0);
					newDate.setMilliseconds(0)
				}
				return this._daylightSavingAdjust(newDate)
			},
			_daylightSavingAdjust: function(date) {
				if (!date) {
					return null
				}
				date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
				return date
			},
			_setDate: function(inst, date, noChange) {
				var clear = !date;
				var origMonth = inst.selectedMonth;
				var origYear = inst.selectedYear;
				var newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
				inst.selectedDay = inst.currentDay = newDate.getDate();
				inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
				inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
				if ((origMonth != inst.selectedMonth || origYear != inst.selectedYear) && !noChange) {
					this._notifyChange(inst)
				}
				this._adjustInstDate(inst);
				if (inst.input) {
					inst.input.val(clear ? "" : this._formatDate(inst))
				}
			},
			_getDate: function(inst) {
				var startDate = (!inst.currentYear || (inst.input && inst.input.val() == "") ? null : this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
				return startDate
			},
			_attachHandlers: function(inst) {
				var stepMonths = this._get(inst, "stepMonths");
				var id = "#" + inst.id.replace(/\\\\/g, "\\");
				inst.dpDiv.find("[data-handler]").map(function() {
					var handler = {
						prev: function() {
							window["DP_jQuery_" + dpuuid].datepicker._adjustDate(id, -stepMonths, "M")
						},
						next: function() {
							window["DP_jQuery_" + dpuuid].datepicker._adjustDate(id, +stepMonths, "M")
						},
						hide: function() {
							window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
						},
						today: function() {
							window["DP_jQuery_" + dpuuid].datepicker._gotoToday(id)
						},
						selectDay: function() {
							window["DP_jQuery_" + dpuuid].datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
							return false
						},
						selectMonth: function() {
							window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(id, this, "M");
							return false
						},
						selectYear: function() {
							window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(id, this, "Y");
							return false
						}
					};
					$(this).bind(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")])
				})
			},
			_generateHTML: function(inst) {
				var today = new Date();
				today = this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));
				var isRTL = this._get(inst, "isRTL");
				var showButtonPanel = this._get(inst, "showButtonPanel");
				var hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext");
				var navigationAsDateFormat = this._get(inst, "navigationAsDateFormat");
				var numMonths = this._getNumberOfMonths(inst);
				var showCurrentAtPos = this._get(inst, "showCurrentAtPos");
				var stepMonths = this._get(inst, "stepMonths");
				var isMultiMonth = (numMonths[0] != 1 || numMonths[1] != 1);
				var currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999,9,9) : new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
				var minDate = this._getMinMaxDate(inst, "min");
				var maxDate = this._getMinMaxDate(inst, "max");
				var drawMonth = inst.drawMonth - showCurrentAtPos;
				var drawYear = inst.drawYear;
				if (drawMonth < 0) {
					drawMonth += 12;
					drawYear--
				}
				if (maxDate) {
					var maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1,maxDate.getDate()));
					maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
					while (this._daylightSavingAdjust(new Date(drawYear,drawMonth,1)) > maxDraw) {
						drawMonth--;
						if (drawMonth < 0) {
							drawMonth = 11;
							drawYear--
						}
					}
				}
				inst.drawMonth = drawMonth;
				inst.drawYear = drawYear;
				var prevText = this._get(inst, "prevText");
				prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText, this._daylightSavingAdjust(new Date(drawYear,drawMonth - stepMonths,1)), this._getFormatConfig(inst)));
				var prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "e" : "w") + '">' + prevText + "</span></a>" : (hideIfNoPrevNext ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "e" : "w") + '">' + prevText + "</span></a>"));
				var nextText = this._get(inst, "nextText");
				nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText, this._daylightSavingAdjust(new Date(drawYear,drawMonth + stepMonths,1)), this._getFormatConfig(inst)));
				var next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "w" : "e") + '">' + nextText + "</span></a>" : (hideIfNoPrevNext ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "w" : "e") + '">' + nextText + "</span></a>"));
				var currentText = this._get(inst, "currentText");
				var gotoDate = (this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today);
				currentText = (!navigationAsDateFormat ? currentText : this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));
				var controls = (!inst.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(inst, "closeText") + "</button>" : "");
				var buttonPanel = (showButtonPanel) ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (isRTL ? controls : "") + (this._isInRange(inst, gotoDate) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";
				var firstDay = parseInt(this._get(inst, "firstDay"), 10);
				firstDay = (isNaN(firstDay) ? 0 : firstDay);
				var showWeek = this._get(inst, "showWeek");
				var dayNames = this._get(inst, "dayNames");
				var dayNamesShort = this._get(inst, "dayNamesShort");
				var dayNamesMin = this._get(inst, "dayNamesMin");
				var monthNames = this._get(inst, "monthNames");
				var monthNamesShort = this._get(inst, "monthNamesShort");
				var beforeShowDay = this._get(inst, "beforeShowDay");
				var showOtherMonths = this._get(inst, "showOtherMonths");
				var selectOtherMonths = this._get(inst, "selectOtherMonths");
				var calculateWeek = this._get(inst, "calculateWeek") || this.iso8601Week;
				var defaultDate = this._getDefaultDate(inst);
				var html = "";
				for (var row = 0; row < numMonths[0]; row++) {
					var group = "";
					this.maxRows = 4;
					for (var col = 0; col < numMonths[1]; col++) {
						var selectedDate = this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));
						var cornerClass = " ui-corner-all";
						var calender = "";
						if (isMultiMonth) {
							calender += '<div class="ui-datepicker-group';
							if (numMonths[1] > 1) {
								switch (col) {
								case 0:
									calender += " ui-datepicker-group-first";
									cornerClass = " ui-corner-" + (isRTL ? "right" : "left");
									break;
								case numMonths[1] - 1:
									calender += " ui-datepicker-group-last";
									cornerClass = " ui-corner-" + (isRTL ? "left" : "right");
									break;
								default:
									calender += " ui-datepicker-group-middle";
									cornerClass = "";
									break
								}
							}
							calender += '">'
						}
						calender += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + cornerClass + '">' + (/all|left/.test(cornerClass) && row == 0 ? (isRTL ? next : prev) : "") + (/all|right/.test(cornerClass) && row == 0 ? (isRTL ? prev : next) : "") + this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, row > 0 || col > 0, monthNames, monthNamesShort) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
						var thead = (showWeek ? '<th class="ui-datepicker-week-col">' + this._get(inst, "weekHeader") + "</th>" : "");
						for (var dow = 0; dow < 7; dow++) {
							var day = (dow + firstDay) % 7;
							thead += "<th" + ((dow + firstDay + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + dayNames[day] + '">' + dayNamesMin[day] + "</span></th>"
						}
						calender += thead + "</tr></thead><tbody>";
						var daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
						if (drawYear == inst.selectedYear && drawMonth == inst.selectedMonth) {
							inst.selectedDay = Math.min(inst.selectedDay, daysInMonth)
						}
						var leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
						var curRows = Math.ceil((leadDays + daysInMonth) / 7);
						var numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows);
						this.maxRows = numRows;
						var printDate = this._daylightSavingAdjust(new Date(drawYear,drawMonth,1 - leadDays));
						for (var dRow = 0; dRow < numRows; dRow++) {
							calender += "<tr>";
							var tbody = (!showWeek ? "" : '<td class="ui-datepicker-week-col">' + this._get(inst, "calculateWeek")(printDate) + "</td>");
							for (var dow = 0; dow < 7; dow++) {
								var daySettings = (beforeShowDay ? beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, ""]);
								var otherMonth = (printDate.getMonth() != drawMonth);
								var unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] || (minDate && printDate < minDate) || (maxDate && printDate > maxDate);
								tbody += '<td class="' + ((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (otherMonth ? " ui-datepicker-other-month" : "") + ((printDate.getTime() == selectedDate.getTime() && drawMonth == inst.selectedMonth && inst._keyEvent) || (defaultDate.getTime() == printDate.getTime() && defaultDate.getTime() == selectedDate.getTime()) ? " " + this._dayOverClass : "") + (unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "") + (otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + (printDate.getTime() == currentDate.getTime() ? " " + this._currentClass : "") + (printDate.getTime() == today.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!otherMonth || showOtherMonths) && daySettings[2] ? ' title="' + daySettings[2] + '"' : "") + (unselectable ? "" : ' data-handler="selectDay" data-event="click" data-month="' + printDate.getMonth() + '" data-year="' + printDate.getFullYear() + '"') + ">" + (otherMonth && !showOtherMonths ? "&#xa0;" : (unselectable ? '<span class="ui-state-default">' + printDate.getDate() + "</span>" : '<a class="ui-state-default' + (printDate.getTime() == today.getTime() ? " ui-state-highlight" : "") + (printDate.getTime() == currentDate.getTime() ? " ui-state-active" : "") + (otherMonth ? " ui-priority-secondary" : "") + '" href="#">' + printDate.getDate() + "</a>")) + "</td>";
								printDate.setDate(printDate.getDate() + 1);
								printDate = this._daylightSavingAdjust(printDate)
							}
							calender += tbody + "</tr>"
						}
						drawMonth++;
						if (drawMonth > 11) {
							drawMonth = 0;
							drawYear++
						}
						calender += "</tbody></table>" + (isMultiMonth ? "</div>" + ((numMonths[0] > 0 && col == numMonths[1] - 1) ? '<div class="ui-datepicker-row-break"></div>' : "") : "");
						group += calender
					}
					html += group
				}
				html += buttonPanel + ($.ui.ie6 && !inst.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : "");
				inst._keyEvent = false;
				return html
			},
			_generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {
				var changeMonth = this._get(inst, "changeMonth");
				var changeYear = this._get(inst, "changeYear");
				var showMonthAfterYear = this._get(inst, "showMonthAfterYear");
				var html = '<div class="ui-datepicker-title">';
				var monthHtml = "";
				if (secondary || !changeMonth) {
					monthHtml += '<span class="ui-datepicker-month">' + monthNames[drawMonth] + "</span>"
				} else {
					var inMinYear = (minDate && minDate.getFullYear() == drawYear);
					var inMaxYear = (maxDate && maxDate.getFullYear() == drawYear);
					monthHtml += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
					for (var month = 0; month < 12; month++) {
						if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
							monthHtml += '<option value="' + month + '"' + (month == drawMonth ? ' selected="selected"' : "") + ">" + monthNamesShort[month] + "</option>"
						}
					}
					monthHtml += "</select>"
				}
				if (!showMonthAfterYear) {
					html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "")
				}
				if (!inst.yearshtml) {
					inst.yearshtml = "";
					if (secondary || !changeYear) {
						html += '<span class="ui-datepicker-year">' + drawYear + "</span>"
					} else {
						var years = this._get(inst, "yearRange").split(":");
						var thisYear = new Date().getFullYear();
						var determineYear = function(value) {
							var year = (value.match(/c[+-].*/) ? drawYear + parseInt(value.substring(1), 10) : (value.match(/[+-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10)));
							return (isNaN(year) ? thisYear : year)
						};
						var year = determineYear(years[0]);
						var endYear = Math.max(year, determineYear(years[1] || ""));
						year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
						endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
						inst.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
						for (; year <= endYear; year++) {
							inst.yearshtml += '<option value="' + year + '"' + (year == drawYear ? ' selected="selected"' : "") + ">" + year + "</option>"
						}
						inst.yearshtml += "</select>";
						html += inst.yearshtml;
						inst.yearshtml = null
					}
				}
				html += this._get(inst, "yearSuffix");
				if (showMonthAfterYear) {
					html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml
				}
				html += "</div>";
				return html
			},
			_adjustInstDate: function(inst, offset, period) {
				var year = inst.drawYear + (period == "Y" ? offset : 0);
				var month = inst.drawMonth + (period == "M" ? offset : 0);
				var day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period == "D" ? offset : 0);
				var date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year,month,day)));
				inst.selectedDay = date.getDate();
				inst.drawMonth = inst.selectedMonth = date.getMonth();
				inst.drawYear = inst.selectedYear = date.getFullYear();
				if (period == "M" || period == "Y") {
					this._notifyChange(inst)
				}
			},
			_restrictMinMax: function(inst, date) {
				var minDate = this._getMinMaxDate(inst, "min");
				var maxDate = this._getMinMaxDate(inst, "max");
				var newDate = (minDate && date < minDate ? minDate : date);
				newDate = (maxDate && newDate > maxDate ? maxDate : newDate);
				return newDate
			},
			_notifyChange: function(inst) {
				var onChange = this._get(inst, "onChangeMonthYear");
				if (onChange) {
					onChange.apply((inst.input ? inst.input[0] : null), [inst.selectedYear, inst.selectedMonth + 1, inst])
				}
			},
			_getNumberOfMonths: function(inst) {
				var numMonths = this._get(inst, "numberOfMonths");
				return (numMonths == null ? [1, 1] : (typeof numMonths == "number" ? [1, numMonths] : numMonths))
			},
			_getMinMaxDate: function(inst, minMax) {
				return this._determineDate(inst, this._get(inst, minMax + "Date"), null)
			},
			_getDaysInMonth: function(year, month) {
				return 32 - this._daylightSavingAdjust(new Date(year,month,32)).getDate()
			},
			_getFirstDayOfMonth: function(year, month) {
				return new Date(year,month,1).getDay()
			},
			_canAdjustMonth: function(inst, offset, curYear, curMonth) {
				var numMonths = this._getNumberOfMonths(inst);
				var date = this._daylightSavingAdjust(new Date(curYear,curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]),1));
				if (offset < 0) {
					date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()))
				}
				return this._isInRange(inst, date)
			},
			_isInRange: function(inst, date) {
				var minDate = this._getMinMaxDate(inst, "min");
				var maxDate = this._getMinMaxDate(inst, "max");
				return ((!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime()))
			},
			_getFormatConfig: function(inst) {
				var shortYearCutoff = this._get(inst, "shortYearCutoff");
				shortYearCutoff = (typeof shortYearCutoff != "string" ? shortYearCutoff : new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
				return {
					shortYearCutoff: shortYearCutoff,
					dayNamesShort: this._get(inst, "dayNamesShort"),
					dayNames: this._get(inst, "dayNames"),
					monthNamesShort: this._get(inst, "monthNamesShort"),
					monthNames: this._get(inst, "monthNames")
				}
			},
			_formatDate: function(inst, day, month, year) {
				if (!day) {
					inst.currentDay = inst.selectedDay;
					inst.currentMonth = inst.selectedMonth;
					inst.currentYear = inst.selectedYear
				}
				var date = (day ? (typeof day == "object" ? day : this._daylightSavingAdjust(new Date(year,month,day))) : this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
				return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst))
			}
		});
		function bindHover(dpDiv) {
			var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
			return dpDiv.delegate(selector, "mouseout", function() {
				$(this).removeClass("ui-state-hover");
				if (this.className.indexOf("ui-datepicker-prev") != -1) {
					$(this).removeClass("ui-datepicker-prev-hover")
				}
				if (this.className.indexOf("ui-datepicker-next") != -1) {
					$(this).removeClass("ui-datepicker-next-hover")
				}
			}).delegate(selector, "mouseover", function() {
				if (!$.datepicker._isDisabledDatepicker(instActive.inline ? dpDiv.parent()[0] : instActive.input[0])) {
					$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
					$(this).addClass("ui-state-hover");
					if (this.className.indexOf("ui-datepicker-prev") != -1) {
						$(this).addClass("ui-datepicker-prev-hover")
					}
					if (this.className.indexOf("ui-datepicker-next") != -1) {
						$(this).addClass("ui-datepicker-next-hover")
					}
				}
			})
		}
		function extendRemove(target, props) {
			$.extend(target, props);
			for (var name in props) {
				if (props[name] == null || props[name] == undefined) {
					target[name] = props[name]
				}
			}
			return target
		}
		$.fn.datepicker = function(options) {
			if (!this.length) {
				return this
			}
			if (!$.datepicker.initialized) {
				$(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv);
				$.datepicker.initialized = true
			}
			var otherArgs = Array.prototype.slice.call(arguments, 1);
			if (typeof options == "string" && (options == "isDisabled" || options == "getDate" || options == "widget")) {
				return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs))
			}
			if (options == "option" && arguments.length == 2 && typeof arguments[1] == "string") {
				return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs))
			}
			return this.each(function() {
				typeof options == "string" ? $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this].concat(otherArgs)) : $.datepicker._attachDatepicker(this, options)
			})
		}
		;
		$.datepicker = new Datepicker();
		$.datepicker.initialized = false;
		$.datepicker.uuid = new Date().getTime();
		$.datepicker.version = "1.9.2";
		window["DP_jQuery_" + dpuuid] = $
	}
	)(jQuery);
	(function(d, e) {
		var b = "ui-dialog ui-widget ui-widget-content ui-corner-all "
		  , a = {
			buttons: true,
			height: true,
			maxHeight: true,
			maxWidth: true,
			minHeight: true,
			minWidth: true,
			width: true
		}
		  , c = {
			maxHeight: true,
			maxWidth: true,
			minHeight: true,
			minWidth: true
		};
		d.widget("ui.dialog", {
			version: "1.9.2",
			options: {
				autoOpen: true,
				buttons: {},
				closeOnEscape: true,
				closeText: "close",
				dialogClass: "",
				draggable: true,
				hide: null,
				height: "auto",
				maxHeight: false,
				maxWidth: false,
				minHeight: 150,
				minWidth: 150,
				modal: false,
				position: {
					my: "center",
					at: "center",
					of: window,
					collision: "fit",
					using: function(g) {
						var f = d(this).css(g).offset().top;
						if (f < 0) {
							d(this).css("top", g.top - f)
						}
					}
				},
				resizable: true,
				show: null,
				stack: true,
				title: "",
				width: 300,
				zIndex: 1000
			},
			_create: function() {
				this.originalTitle = this.element.attr("title");
				if (typeof this.originalTitle !== "string") {
					this.originalTitle = ""
				}
				this.oldPosition = {
					parent: this.element.parent(),
					index: this.element.parent().children().index(this.element)
				};
				this.options.title = this.options.title || this.originalTitle;
				var k = this, j = this.options, m = j.title || "&#160;", h, l, f, i, g;
				h = (this.uiDialog = d("<div>")).addClass(b + j.dialogClass).css({
					display: "none",
					outline: 0,
					zIndex: j.zIndex
				}).attr("tabIndex", -1).keydown(function(n) {
					if (j.closeOnEscape && !n.isDefaultPrevented() && n.keyCode && n.keyCode === d.ui.keyCode.ESCAPE) {
						k.close(n);
						n.preventDefault()
					}
				}).mousedown(function(n) {
					k.moveToTop(false, n)
				}).appendTo("body");
				this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(h);
				l = (this.uiDialogTitlebar = d("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown", function() {
					h.focus()
				}).prependTo(h);
				f = d("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function(n) {
					n.preventDefault();
					k.close(n)
				}).appendTo(l);
				(this.uiDialogTitlebarCloseText = d("<span>")).addClass("ui-icon ui-icon-closethick").text(j.closeText).appendTo(f);
				i = d("<span>").uniqueId().addClass("ui-dialog-title").html(m).prependTo(l);
				g = (this.uiDialogButtonPane = d("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
				(this.uiButtonSet = d("<div>")).addClass("ui-dialog-buttonset").appendTo(g);
				h.attr({
					role: "dialog",
					"aria-labelledby": i.attr("id")
				});
				l.find("*").add(l).disableSelection();
				this._hoverable(f);
				this._focusable(f);
				if (j.draggable && d.fn.draggable) {
					this._makeDraggable()
				}
				if (j.resizable && d.fn.resizable) {
					this._makeResizable()
				}
				this._createButtons(j.buttons);
				this._isOpen = false;
				if (d.fn.bgiframe) {
					h.bgiframe()
				}
				this._on(h, {
					keydown: function(p) {
						if (!j.modal || p.keyCode !== d.ui.keyCode.TAB) {
							return
						}
						var o = d(":tabbable", h)
						  , q = o.filter(":first")
						  , n = o.filter(":last");
						if (p.target === n[0] && !p.shiftKey) {
							q.focus(1);
							return false
						} else {
							if (p.target === q[0] && p.shiftKey) {
								n.focus(1);
								return false
							}
						}
					}
				})
			},
			_init: function() {
				if (this.options.autoOpen) {
					this.open()
				}
			},
			_destroy: function() {
				var g, f = this.oldPosition;
				if (this.overlay) {
					this.overlay.destroy()
				}
				this.uiDialog.hide();
				this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
				this.uiDialog.remove();
				if (this.originalTitle) {
					this.element.attr("title", this.originalTitle)
				}
				g = f.parent.children().eq(f.index);
				if (g.length && g[0] !== this.element[0]) {
					g.before(this.element)
				} else {
					f.parent.append(this.element)
				}
			},
			widget: function() {
				return this.uiDialog
			},
			close: function(i) {
				var h = this, g, f;
				if (!this._isOpen) {
					return
				}
				if (false === this._trigger("beforeClose", i)) {
					return
				}
				this._isOpen = false;
				if (this.overlay) {
					this.overlay.destroy()
				}
				if (this.options.hide) {
					this._hide(this.uiDialog, this.options.hide, function() {
						h._trigger("close", i)
					})
				} else {
					this.uiDialog.hide();
					this._trigger("close", i)
				}
				d.ui.dialog.overlay.resize();
				if (this.options.modal) {
					g = 0;
					d(".ui-dialog").each(function() {
						if (this !== h.uiDialog[0]) {
							f = d(this).css("z-index");
							if (!isNaN(f)) {
								g = Math.max(g, f)
							}
						}
					});
					d.ui.dialog.maxZ = g
				}
				return this
			},
			isOpen: function() {
				return this._isOpen
			},
			moveToTop: function(i, h) {
				var g = this.options, f;
				if ((g.modal && !i) || (!g.stack && !g.modal)) {
					return this._trigger("focus", h)
				}
				if (g.zIndex > d.ui.dialog.maxZ) {
					d.ui.dialog.maxZ = g.zIndex
				}
				if (this.overlay) {
					d.ui.dialog.maxZ += 1;
					d.ui.dialog.overlay.maxZ = d.ui.dialog.maxZ;
					this.overlay.$el.css("z-index", d.ui.dialog.overlay.maxZ)
				}
				f = {
					scrollTop: this.element.scrollTop(),
					scrollLeft: this.element.scrollLeft()
				};
				d.ui.dialog.maxZ += 1;
				this.uiDialog.css("z-index", d.ui.dialog.maxZ);
				this.element.attr(f);
				this._trigger("focus", h);
				return this
			},
			open: function() {
				if (this._isOpen) {
					return
				}
				var h, g = this.options, f = this.uiDialog;
				this._size();
				this._position(g.position);
				f.show(g.show);
				this.overlay = g.modal ? new d.ui.dialog.overlay(this) : null;
				this.moveToTop(true);
				h = this.element.find(":tabbable");
				if (!h.length) {
					h = this.uiDialogButtonPane.find(":tabbable");
					if (!h.length) {
						h = f
					}
				}
				h.eq(0).focus();
				this._isOpen = true;
				this._trigger("open");
				return this
			},
			_createButtons: function(h) {
				var g = this
				  , f = false;
				this.uiDialogButtonPane.remove();
				this.uiButtonSet.empty();
				if (typeof h === "object" && h !== null) {
					d.each(h, function() {
						return !(f = true)
					})
				}
				if (f) {
					d.each(h, function(i, k) {
						var j, l;
						k = d.isFunction(k) ? {
							click: k,
							text: i
						} : k;
						k = d.extend({
							type: "button"
						}, k);
						l = k.click;
						k.click = function() {
							l.apply(g.element[0], arguments)
						}
						;
						j = d("<button></button>", k).appendTo(g.uiButtonSet);
						if (d.fn.button) {
							j.button()
						}
					});
					this.uiDialog.addClass("ui-dialog-buttons");
					this.uiDialogButtonPane.appendTo(this.uiDialog)
				} else {
					this.uiDialog.removeClass("ui-dialog-buttons")
				}
			},
			_makeDraggable: function() {
				var h = this
				  , g = this.options;
				function f(i) {
					return {
						position: i.position,
						offset: i.offset
					}
				}
				this.uiDialog.draggable({
					cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
					handle: ".ui-dialog-titlebar",
					containment: "document",
					start: function(i, j) {
						d(this).addClass("ui-dialog-dragging");
						h._trigger("dragStart", i, f(j))
					},
					drag: function(i, j) {
						h._trigger("drag", i, f(j))
					},
					stop: function(i, j) {
						g.position = [j.position.left - h.document.scrollLeft(), j.position.top - h.document.scrollTop()];
						d(this).removeClass("ui-dialog-dragging");
						h._trigger("dragStop", i, f(j));
						d.ui.dialog.overlay.resize()
					}
				})
			},
			_makeResizable: function(j) {
				j = (j === e ? this.options.resizable : j);
				var k = this
				  , i = this.options
				  , f = this.uiDialog.css("position")
				  , h = typeof j === "string" ? j : "n,e,s,w,se,sw,ne,nw";
				function g(l) {
					return {
						originalPosition: l.originalPosition,
						originalSize: l.originalSize,
						position: l.position,
						size: l.size
					}
				}
				this.uiDialog.resizable({
					cancel: ".ui-dialog-content",
					containment: "document",
					alsoResize: this.element,
					maxWidth: i.maxWidth,
					maxHeight: i.maxHeight,
					minWidth: i.minWidth,
					minHeight: this._minHeight(),
					handles: h,
					start: function(l, m) {
						d(this).addClass("ui-dialog-resizing");
						k._trigger("resizeStart", l, g(m))
					},
					resize: function(l, m) {
						k._trigger("resize", l, g(m))
					},
					stop: function(l, m) {
						d(this).removeClass("ui-dialog-resizing");
						i.height = d(this).height();
						i.width = d(this).width();
						k._trigger("resizeStop", l, g(m));
						d.ui.dialog.overlay.resize()
					}
				}).css("position", f).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
			},
			_minHeight: function() {
				var f = this.options;
				if (f.height === "auto") {
					return f.minHeight
				} else {
					return Math.min(f.minHeight, f.height)
				}
			},
			_position: function(g) {
				var h = [], i = [0, 0], f;
				if (g) {
					if (typeof g === "string" || (typeof g === "object" && "0"in g)) {
						h = g.split ? g.split(" ") : [g[0], g[1]];
						if (h.length === 1) {
							h[1] = h[0]
						}
						d.each(["left", "top"], function(k, j) {
							if (+h[k] === h[k]) {
								i[k] = h[k];
								h[k] = j
							}
						});
						g = {
							my: h[0] + (i[0] < 0 ? i[0] : "+" + i[0]) + " " + h[1] + (i[1] < 0 ? i[1] : "+" + i[1]),
							at: h.join(" ")
						}
					}
					g = d.extend({}, d.ui.dialog.prototype.options.position, g)
				} else {
					g = d.ui.dialog.prototype.options.position
				}
				f = this.uiDialog.is(":visible");
				if (!f) {
					this.uiDialog.show()
				}
				this.uiDialog.position(g);
				if (!f) {
					this.uiDialog.hide()
				}
			},
			_setOptions: function(h) {
				var i = this
				  , f = {}
				  , g = false;
				d.each(h, function(j, k) {
					i._setOption(j, k);
					if (j in a) {
						g = true
					}
					if (j in c) {
						f[j] = k
					}
				});
				if (g) {
					this._size()
				}
				if (this.uiDialog.is(":data(resizable)")) {
					this.uiDialog.resizable("option", f)
				}
			},
			_setOption: function(h, i) {
				var g, j, f = this.uiDialog;
				switch (h) {
				case "buttons":
					this._createButtons(i);
					break;
				case "closeText":
					this.uiDialogTitlebarCloseText.text("" + i);
					break;
				case "dialogClass":
					f.removeClass(this.options.dialogClass).addClass(b + i);
					break;
				case "disabled":
					if (i) {
						f.addClass("ui-dialog-disabled")
					} else {
						f.removeClass("ui-dialog-disabled")
					}
					break;
				case "draggable":
					g = f.is(":data(draggable)");
					if (g && !i) {
						f.draggable("destroy")
					}
					if (!g && i) {
						this._makeDraggable()
					}
					break;
				case "position":
					this._position(i);
					break;
				case "resizable":
					j = f.is(":data(resizable)");
					if (j && !i) {
						f.resizable("destroy")
					}
					if (j && typeof i === "string") {
						f.resizable("option", "handles", i)
					}
					if (!j && i !== false) {
						this._makeResizable(i)
					}
					break;
				case "title":
					d(".ui-dialog-title", this.uiDialogTitlebar).html("" + (i || "&#160;"));
					break
				}
				this._super(h, i)
			},
			_size: function() {
				var g, j, i, h = this.options, f = this.uiDialog.is(":visible");
				this.element.show().css({
					width: "auto",
					minHeight: 0,
					height: 0
				});
				if (h.minWidth > h.width) {
					h.width = h.minWidth
				}
				g = this.uiDialog.css({
					height: "auto",
					width: h.width
				}).outerHeight();
				j = Math.max(0, h.minHeight - g);
				if (h.height === "auto") {
					if (d.support.minHeight) {
						this.element.css({
							minHeight: j,
							height: "auto"
						})
					} else {
						this.uiDialog.show();
						i = this.element.css("height", "auto").height();
						if (!f) {
							this.uiDialog.hide()
						}
						this.element.height(Math.max(i, j))
					}
				} else {
					this.element.height(Math.max(h.height - g, 0))
				}
				if (this.uiDialog.is(":data(resizable)")) {
					this.uiDialog.resizable("option", "minHeight", this._minHeight())
				}
			}
		});
		d.extend(d.ui.dialog, {
			uuid: 0,
			maxZ: 0,
			getTitleId: function(f) {
				var g = f.attr("id");
				if (!g) {
					this.uuid += 1;
					g = this.uuid
				}
				return "ui-dialog-title-" + g
			},
			overlay: function(f) {
				this.$el = d.ui.dialog.overlay.create(f)
			}
		});
		d.extend(d.ui.dialog.overlay, {
			instances: [],
			oldInstances: [],
			maxZ: 0,
			events: d.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(f) {
				return f + ".dialog-overlay"
			}).join(" "),
			create: function(g) {
				if (this.instances.length === 0) {
					setTimeout(function() {
						if (d.ui.dialog.overlay.instances.length) {
							d(document).bind(d.ui.dialog.overlay.events, function(h) {
								if (d(h.target).zIndex() < d.ui.dialog.overlay.maxZ) {
									return false
								}
							})
						}
					}, 1);
					d(window).bind("resize.dialog-overlay", d.ui.dialog.overlay.resize)
				}
				var f = (this.oldInstances.pop() || d("<div>").addClass("ui-widget-overlay"));
				d(document).bind("keydown.dialog-overlay", function(h) {
					var i = d.ui.dialog.overlay.instances;
					if (i.length !== 0 && i[i.length - 1] === f && g.options.closeOnEscape && !h.isDefaultPrevented() && h.keyCode && h.keyCode === d.ui.keyCode.ESCAPE) {
						g.close(h);
						h.preventDefault()
					}
				});
				f.appendTo(document.body).css({
					width: this.width(),
					height: this.height()
				});
				if (d.fn.bgiframe) {
					f.bgiframe()
				}
				this.instances.push(f);
				return f
			},
			destroy: function(f) {
				var g = d.inArray(f, this.instances)
				  , h = 0;
				if (g !== -1) {
					this.oldInstances.push(this.instances.splice(g, 1)[0])
				}
				if (this.instances.length === 0) {
					d([document, window]).unbind(".dialog-overlay")
				}
				f.height(0).width(0).remove();
				d.each(this.instances, function() {
					h = Math.max(h, this.css("z-index"))
				});
				this.maxZ = h
			},
			height: function() {
				var g, f;
				if (d.ui.ie) {
					g = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
					f = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight);
					if (g < f) {
						return d(window).height() + "px"
					} else {
						return g + "px"
					}
				} else {
					return d(document).height() + "px"
				}
			},
			width: function() {
				var f, g;
				if (d.ui.ie) {
					f = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
					g = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
					if (f < g) {
						return d(window).width() + "px"
					} else {
						return f + "px"
					}
				} else {
					return d(document).width() + "px"
				}
			},
			resize: function() {
				var f = d([]);
				d.each(d.ui.dialog.overlay.instances, function() {
					f = f.add(this)
				});
				f.css({
					width: 0,
					height: 0
				}).css({
					width: d.ui.dialog.overlay.width(),
					height: d.ui.dialog.overlay.height()
				})
			}
		});
		d.extend(d.ui.dialog.overlay.prototype, {
			destroy: function() {
				d.ui.dialog.overlay.destroy(this.$el)
			}
		})
	}(jQuery));
	(function(b, d) {
		var a = /up|down|vertical/
		  , c = /up|left|vertical|horizontal/;
		b.effects.effect.blind = function(g, m) {
			var h = b(this), q = ["position", "top", "bottom", "left", "right", "height", "width"], n = b.effects.setMode(h, g.mode || "hide"), r = g.direction || "up", j = a.test(r), i = j ? "height" : "width", p = j ? "top" : "left", t = c.test(r), l = {}, s = n === "show", f, e, k;
			if (h.parent().is(".ui-effects-wrapper")) {
				b.effects.save(h.parent(), q)
			} else {
				b.effects.save(h, q)
			}
			h.show();
			f = b.effects.createWrapper(h).css({
				overflow: "hidden"
			});
			e = f[i]();
			k = parseFloat(f.css(p)) || 0;
			l[i] = s ? e : 0;
			if (!t) {
				h.css(j ? "bottom" : "right", 0).css(j ? "top" : "left", "auto").css({
					position: "absolute"
				});
				l[p] = s ? k : e + k
			}
			if (s) {
				f.css(i, 0);
				if (!t) {
					f.css(p, k + e)
				}
			}
			f.animate(l, {
				duration: g.duration,
				easing: g.easing,
				queue: false,
				complete: function() {
					if (n === "hide") {
						h.hide()
					}
					b.effects.restore(h, q);
					b.effects.removeWrapper(h);
					m()
				}
			})
		}
	}
	)(jQuery);
	(function(a, b) {
		a.effects.effect.bounce = function(m, l) {
			var c = a(this), d = ["position", "top", "bottom", "left", "right", "height", "width"], k = a.effects.setMode(c, m.mode || "effect"), j = k === "hide", v = k === "show", w = m.direction || "up", e = m.distance, h = m.times || 5, x = h * 2 + (v || j ? 1 : 0), u = m.duration / x, p = m.easing, f = (w === "up" || w === "down") ? "top" : "left", n = (w === "up" || w === "left"), t, g, s, q = c.queue(), r = q.length;
			if (v || j) {
				d.push("opacity")
			}
			a.effects.save(c, d);
			c.show();
			a.effects.createWrapper(c);
			if (!e) {
				e = c[f === "top" ? "outerHeight" : "outerWidth"]() / 3
			}
			if (v) {
				s = {
					opacity: 1
				};
				s[f] = 0;
				c.css("opacity", 0).css(f, n ? -e * 2 : e * 2).animate(s, u, p)
			}
			if (j) {
				e = e / Math.pow(2, h - 1)
			}
			s = {};
			s[f] = 0;
			for (t = 0; t < h; t++) {
				g = {};
				g[f] = (n ? "-=" : "+=") + e;
				c.animate(g, u, p).animate(s, u, p);
				e = j ? e * 2 : e / 2
			}
			if (j) {
				g = {
					opacity: 0
				};
				g[f] = (n ? "-=" : "+=") + e;
				c.animate(g, u, p)
			}
			c.queue(function() {
				if (j) {
					c.hide()
				}
				a.effects.restore(c, d);
				a.effects.removeWrapper(c);
				l()
			});
			if (r > 1) {
				q.splice.apply(q, [1, 0].concat(q.splice(r, x + 1)))
			}
			c.dequeue()
		}
	}
	)(jQuery);
	(function(a, b) {
		a.effects.effect.clip = function(f, i) {
			var g = a(this), m = ["position", "top", "bottom", "left", "right", "height", "width"], l = a.effects.setMode(g, f.mode || "hide"), p = l === "show", n = f.direction || "vertical", k = n === "vertical", q = k ? "height" : "width", j = k ? "top" : "left", h = {}, d, e, c;
			a.effects.save(g, m);
			g.show();
			d = a.effects.createWrapper(g).css({
				overflow: "hidden"
			});
			e = (g[0].tagName === "IMG") ? d : g;
			c = e[q]();
			if (p) {
				e.css(q, 0);
				e.css(j, c / 2)
			}
			h[q] = p ? c : 0;
			h[j] = p ? 0 : c / 2;
			e.animate(h, {
				queue: false,
				duration: f.duration,
				easing: f.easing,
				complete: function() {
					if (!p) {
						g.hide()
					}
					a.effects.restore(g, m);
					a.effects.removeWrapper(g);
					i()
				}
			})
		}
	}
	)(jQuery);
	(function(a, b) {
		a.effects.effect.drop = function(d, h) {
			var e = a(this), j = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], i = a.effects.setMode(e, d.mode || "hide"), l = i === "show", k = d.direction || "left", f = (k === "up" || k === "down") ? "top" : "left", m = (k === "up" || k === "left") ? "pos" : "neg", g = {
				opacity: l ? 1 : 0
			}, c;
			a.effects.save(e, j);
			e.show();
			a.effects.createWrapper(e);
			c = d.distance || e[f === "top" ? "outerHeight" : "outerWidth"](true) / 2;
			if (l) {
				e.css("opacity", 0).css(f, m === "pos" ? -c : c)
			}
			g[f] = (l ? (m === "pos" ? "+=" : "-=") : (m === "pos" ? "-=" : "+=")) + c;
			e.animate(g, {
				queue: false,
				duration: d.duration,
				easing: d.easing,
				complete: function() {
					if (i === "hide") {
						e.hide()
					}
					a.effects.restore(e, j);
					a.effects.removeWrapper(e);
					h()
				}
			})
		}
	}
	)(jQuery);
	(function(a, b) {
		a.effects.effect.explode = function(s, r) {
			var k = s.pieces ? Math.round(Math.sqrt(s.pieces)) : 3, d = k, c = a(this), m = a.effects.setMode(c, s.mode || "hide"), w = m === "show", g = c.show().css("visibility", "hidden").offset(), t = Math.ceil(c.outerWidth() / d), q = Math.ceil(c.outerHeight() / k), h = [], v, u, e, p, n, l;
			function x() {
				h.push(this);
				if (h.length === k * d) {
					f()
				}
			}
			for (v = 0; v < k; v++) {
				p = g.top + v * q;
				l = v - (k - 1) / 2;
				for (u = 0; u < d; u++) {
					e = g.left + u * t;
					n = u - (d - 1) / 2;
					c.clone().appendTo("body").wrap("<div></div>").css({
						position: "absolute",
						visibility: "visible",
						left: -u * t,
						top: -v * q
					}).parent().addClass("ui-effects-explode").css({
						position: "absolute",
						overflow: "hidden",
						width: t,
						height: q,
						left: e + (w ? n * t : 0),
						top: p + (w ? l * q : 0),
						opacity: w ? 0 : 1
					}).animate({
						left: e + (w ? 0 : n * t),
						top: p + (w ? 0 : l * q),
						opacity: w ? 1 : 0
					}, s.duration || 500, s.easing, x)
				}
			}
			function f() {
				c.css({
					visibility: "visible"
				});
				a(h).remove();
				if (!w) {
					c.hide()
				}
				r()
			}
		}
	}
	)(jQuery);
	(function(a, b) {
		a.effects.effect.fade = function(f, c) {
			var d = a(this)
			  , e = a.effects.setMode(d, f.mode || "toggle");
			d.animate({
				opacity: e
			}, {
				queue: false,
				duration: f.duration,
				easing: f.easing,
				complete: c
			})
		}
	}
	)(jQuery);
	(function(a, b) {
		a.effects.effect.fold = function(e, i) {
			var f = a(this), n = ["position", "top", "bottom", "left", "right", "height", "width"], k = a.effects.setMode(f, e.mode || "hide"), r = k === "show", l = k === "hide", t = e.size || 15, m = /([0-9]+)%/.exec(t), s = !!e.horizFirst, j = r !== s, g = j ? ["width", "height"] : ["height", "width"], h = e.duration / 2, d, c, q = {}, p = {};
			a.effects.save(f, n);
			f.show();
			d = a.effects.createWrapper(f).css({
				overflow: "hidden"
			});
			c = j ? [d.width(), d.height()] : [d.height(), d.width()];
			if (m) {
				t = parseInt(m[1], 10) / 100 * c[l ? 0 : 1]
			}
			if (r) {
				d.css(s ? {
					height: 0,
					width: t
				} : {
					height: t,
					width: 0
				})
			}
			q[g[0]] = r ? c[0] : t;
			p[g[1]] = r ? c[1] : 0;
			d.animate(q, h, e.easing).animate(p, h, e.easing, function() {
				if (l) {
					f.hide()
				}
				a.effects.restore(f, n);
				a.effects.removeWrapper(f);
				i()
			})
		}
	}
	)(jQuery);
	(function(a, b) {
		a.effects.effect.highlight = function(h, c) {
			var e = a(this)
			  , d = ["backgroundImage", "backgroundColor", "opacity"]
			  , g = a.effects.setMode(e, h.mode || "show")
			  , f = {
				backgroundColor: e.css("backgroundColor")
			};
			if (g === "hide") {
				f.opacity = 0
			}
			a.effects.save(e, d);
			e.show().css({
				backgroundImage: "none",
				backgroundColor: h.color || "#ffff99"
			}).animate(f, {
				queue: false,
				duration: h.duration,
				easing: h.easing,
				complete: function() {
					if (g === "hide") {
						e.hide()
					}
					a.effects.restore(e, d);
					c()
				}
			})
		}
	}
	)(jQuery);
	(function(a, b) {
		a.effects.effect.pulsate = function(c, g) {
			var e = a(this), k = a.effects.setMode(e, c.mode || "show"), p = k === "show", l = k === "hide", q = (p || k === "hide"), m = ((c.times || 5) * 2) + (q ? 1 : 0), f = c.duration / m, n = 0, j = e.queue(), d = j.length, h;
			if (p || !e.is(":visible")) {
				e.css("opacity", 0).show();
				n = 1
			}
			for (h = 1; h < m; h++) {
				e.animate({
					opacity: n
				}, f, c.easing);
				n = 1 - n
			}
			e.animate({
				opacity: n
			}, f, c.easing);
			e.queue(function() {
				if (l) {
					e.hide()
				}
				g()
			});
			if (d > 1) {
				j.splice.apply(j, [1, 0].concat(j.splice(d, m + 1)))
			}
			e.dequeue()
		}
	}
	)(jQuery);
	(function(a, b) {
		a.effects.effect.puff = function(j, c) {
			var h = a(this)
			  , i = a.effects.setMode(h, j.mode || "hide")
			  , f = i === "hide"
			  , g = parseInt(j.percent, 10) || 150
			  , e = g / 100
			  , d = {
				height: h.height(),
				width: h.width(),
				outerHeight: h.outerHeight(),
				outerWidth: h.outerWidth()
			};
			a.extend(j, {
				effect: "scale",
				queue: false,
				fade: true,
				mode: i,
				complete: c,
				percent: f ? g : 100,
				from: f ? d : {
					height: d.height * e,
					width: d.width * e,
					outerHeight: d.outerHeight * e,
					outerWidth: d.outerWidth * e
				}
			});
			h.effect(j)
		}
		;
		a.effects.effect.scale = function(c, f) {
			var d = a(this)
			  , l = a.extend(true, {}, c)
			  , g = a.effects.setMode(d, c.mode || "effect")
			  , h = parseInt(c.percent, 10) || (parseInt(c.percent, 10) === 0 ? 0 : (g === "hide" ? 0 : 100))
			  , j = c.direction || "both"
			  , k = c.origin
			  , e = {
				height: d.height(),
				width: d.width(),
				outerHeight: d.outerHeight(),
				outerWidth: d.outerWidth()
			}
			  , i = {
				y: j !== "horizontal" ? (h / 100) : 1,
				x: j !== "vertical" ? (h / 100) : 1
			};
			l.effect = "size";
			l.queue = false;
			l.complete = f;
			if (g !== "effect") {
				l.origin = k || ["middle", "center"];
				l.restore = true
			}
			l.from = c.from || (g === "show" ? {
				height: 0,
				width: 0,
				outerHeight: 0,
				outerWidth: 0
			} : e);
			l.to = {
				height: e.height * i.y,
				width: e.width * i.x,
				outerHeight: e.outerHeight * i.y,
				outerWidth: e.outerWidth * i.x
			};
			if (l.fade) {
				if (g === "show") {
					l.from.opacity = 0;
					l.to.opacity = 1
				}
				if (g === "hide") {
					l.from.opacity = 1;
					l.to.opacity = 0
				}
			}
			d.effect(l)
		}
		;
		a.effects.effect.size = function(l, k) {
			var q, i, j, c = a(this), p = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], n = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], m = ["width", "height", "overflow"], g = ["fontSize"], s = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], h = a.effects.setMode(c, l.mode || "effect"), r = l.restore || h !== "effect", v = l.scale || "both", t = l.origin || ["middle", "center"], u = c.css("position"), e = r ? p : n, f = {
				height: 0,
				width: 0,
				outerHeight: 0,
				outerWidth: 0
			};
			if (h === "show") {
				c.show()
			}
			q = {
				height: c.height(),
				width: c.width(),
				outerHeight: c.outerHeight(),
				outerWidth: c.outerWidth()
			};
			if (l.mode === "toggle" && h === "show") {
				c.from = l.to || f;
				c.to = l.from || q
			} else {
				c.from = l.from || (h === "show" ? f : q);
				c.to = l.to || (h === "hide" ? f : q)
			}
			j = {
				from: {
					y: c.from.height / q.height,
					x: c.from.width / q.width
				},
				to: {
					y: c.to.height / q.height,
					x: c.to.width / q.width
				}
			};
			if (v === "box" || v === "both") {
				if (j.from.y !== j.to.y) {
					e = e.concat(s);
					c.from = a.effects.setTransition(c, s, j.from.y, c.from);
					c.to = a.effects.setTransition(c, s, j.to.y, c.to)
				}
				if (j.from.x !== j.to.x) {
					e = e.concat(d);
					c.from = a.effects.setTransition(c, d, j.from.x, c.from);
					c.to = a.effects.setTransition(c, d, j.to.x, c.to)
				}
			}
			if (v === "content" || v === "both") {
				if (j.from.y !== j.to.y) {
					e = e.concat(g).concat(m);
					c.from = a.effects.setTransition(c, g, j.from.y, c.from);
					c.to = a.effects.setTransition(c, g, j.to.y, c.to)
				}
			}
			a.effects.save(c, e);
			c.show();
			a.effects.createWrapper(c);
			c.css("overflow", "hidden").css(c.from);
			if (t) {
				i = a.effects.getBaseline(t, q);
				c.from.top = (q.outerHeight - c.outerHeight()) * i.y;
				c.from.left = (q.outerWidth - c.outerWidth()) * i.x;
				c.to.top = (q.outerHeight - c.to.outerHeight) * i.y;
				c.to.left = (q.outerWidth - c.to.outerWidth) * i.x
			}
			c.css(c.from);
			if (v === "content" || v === "both") {
				s = s.concat(["marginTop", "marginBottom"]).concat(g);
				d = d.concat(["marginLeft", "marginRight"]);
				m = p.concat(s).concat(d);
				c.find("*[width]").each(function() {
					var w = a(this)
					  , o = {
						height: w.height(),
						width: w.width(),
						outerHeight: w.outerHeight(),
						outerWidth: w.outerWidth()
					};
					if (r) {
						a.effects.save(w, m)
					}
					w.from = {
						height: o.height * j.from.y,
						width: o.width * j.from.x,
						outerHeight: o.outerHeight * j.from.y,
						outerWidth: o.outerWidth * j.from.x
					};
					w.to = {
						height: o.height * j.to.y,
						width: o.width * j.to.x,
						outerHeight: o.height * j.to.y,
						outerWidth: o.width * j.to.x
					};
					if (j.from.y !== j.to.y) {
						w.from = a.effects.setTransition(w, s, j.from.y, w.from);
						w.to = a.effects.setTransition(w, s, j.to.y, w.to)
					}
					if (j.from.x !== j.to.x) {
						w.from = a.effects.setTransition(w, d, j.from.x, w.from);
						w.to = a.effects.setTransition(w, d, j.to.x, w.to)
					}
					w.css(w.from);
					w.animate(w.to, l.duration, l.easing, function() {
						if (r) {
							a.effects.restore(w, m)
						}
					})
				})
			}
			c.animate(c.to, {
				queue: false,
				duration: l.duration,
				easing: l.easing,
				complete: function() {
					if (c.to.opacity === 0) {
						c.css("opacity", c.from.opacity)
					}
					if (h === "hide") {
						c.hide()
					}
					a.effects.restore(c, e);
					if (!r) {
						if (u === "static") {
							c.css({
								position: "relative",
								top: c.to.top,
								left: c.to.left
							})
						} else {
							a.each(["top", "left"], function(o, w) {
								c.css(w, function(y, A) {
									var z = parseInt(A, 10)
									  , x = o ? c.to.left : c.to.top;
									if (A === "auto") {
										return x + "px"
									}
									return z + x + "px"
								})
							})
						}
					}
					a.effects.removeWrapper(c);
					k()
				}
			})
		}
	}
	)(jQuery);
	(function(a, b) {
		a.effects.effect.shake = function(l, k) {
			var c = a(this), d = ["position", "top", "bottom", "left", "right", "height", "width"], j = a.effects.setMode(c, l.mode || "effect"), u = l.direction || "left", e = l.distance || 20, h = l.times || 3, v = h * 2 + 1, q = Math.round(l.duration / v), g = (u === "up" || u === "down") ? "top" : "left", f = (u === "up" || u === "left"), t = {}, s = {}, r = {}, p, m = c.queue(), n = m.length;
			a.effects.save(c, d);
			c.show();
			a.effects.createWrapper(c);
			t[g] = (f ? "-=" : "+=") + e;
			s[g] = (f ? "+=" : "-=") + e * 2;
			r[g] = (f ? "-=" : "+=") + e * 2;
			c.animate(t, q, l.easing);
			for (p = 1; p < h; p++) {
				c.animate(s, q, l.easing).animate(r, q, l.easing)
			}
			c.animate(s, q, l.easing).animate(t, q / 2, l.easing).queue(function() {
				if (j === "hide") {
					c.hide()
				}
				a.effects.restore(c, d);
				a.effects.removeWrapper(c);
				k()
			});
			if (n > 1) {
				m.splice.apply(m, [1, 0].concat(m.splice(n, v + 1)))
			}
			c.dequeue()
		}
	}
	)(jQuery);
	(function(a, b) {
		a.effects.effect.slide = function(e, i) {
			var f = a(this), k = ["position", "top", "bottom", "left", "right", "width", "height"], j = a.effects.setMode(f, e.mode || "show"), m = j === "show", l = e.direction || "left", g = (l === "up" || l === "down") ? "top" : "left", d = (l === "up" || l === "left"), c, h = {};
			a.effects.save(f, k);
			f.show();
			c = e.distance || f[g === "top" ? "outerHeight" : "outerWidth"](true);
			a.effects.createWrapper(f).css({
				overflow: "hidden"
			});
			if (m) {
				f.css(g, d ? (isNaN(c) ? "-" + c : -c) : c)
			}
			h[g] = (m ? (d ? "+=" : "-=") : (d ? "-=" : "+=")) + c;
			f.animate(h, {
				queue: false,
				duration: e.duration,
				easing: e.easing,
				complete: function() {
					if (j === "hide") {
						f.hide()
					}
					a.effects.restore(f, k);
					a.effects.removeWrapper(f);
					i()
				}
			})
		}
	}
	)(jQuery);
	(function(a, b) {
		a.effects.effect.transfer = function(d, h) {
			var f = a(this)
			  , k = a(d.to)
			  , n = k.css("position") === "fixed"
			  , j = a("body")
			  , l = n ? j.scrollTop() : 0
			  , m = n ? j.scrollLeft() : 0
			  , c = k.offset()
			  , g = {
				top: c.top - l,
				left: c.left - m,
				height: k.innerHeight(),
				width: k.innerWidth()
			}
			  , i = f.offset()
			  , e = a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(d.className).css({
				top: i.top - l,
				left: i.left - m,
				height: f.innerHeight(),
				width: f.innerWidth(),
				position: n ? "fixed" : "absolute"
			}).animate(g, d.duration, d.easing, function() {
				e.remove();
				h()
			})
		}
	}
	)(jQuery);
	(function(b, c) {
		var a = false;
		b.widget("ui.menu", {
			version: "1.9.2",
			defaultElement: "<ul>",
			delay: 300,
			options: {
				icons: {
					submenu: "ui-icon-carat-1-e"
				},
				menus: "ul",
				position: {
					my: "left top",
					at: "right top"
				},
				role: "menu",
				blur: null,
				focus: null,
				select: null
			},
			_create: function() {
				this.activeMenu = this.element;
				this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
					role: this.options.role,
					tabIndex: 0
				}).bind("click" + this.eventNamespace, b.proxy(function(d) {
					if (this.options.disabled) {
						d.preventDefault()
					}
				}, this));
				if (this.options.disabled) {
					this.element.addClass("ui-state-disabled").attr("aria-disabled", "true")
				}
				this._on({
					"mousedown .ui-menu-item > a": function(d) {
						d.preventDefault()
					},
					"click .ui-state-disabled > a": function(d) {
						d.preventDefault()
					},
					"click .ui-menu-item:has(a)": function(d) {
						var e = b(d.target).closest(".ui-menu-item");
						if (!a && e.not(".ui-state-disabled").length) {
							a = true;
							this.select(d);
							if (e.has(".ui-menu").length) {
								this.expand(d)
							} else {
								if (!this.element.is(":focus")) {
									this.element.trigger("focus", [true]);
									if (this.active && this.active.parents(".ui-menu").length === 1) {
										clearTimeout(this.timer)
									}
								}
							}
						}
					},
					"mouseenter .ui-menu-item": function(d) {
						var e = b(d.currentTarget);
						e.siblings().children(".ui-state-active").removeClass("ui-state-active");
						this.focus(d, e)
					},
					mouseleave: "collapseAll",
					"mouseleave .ui-menu": "collapseAll",
					focus: function(f, d) {
						var e = this.active || this.element.children(".ui-menu-item").eq(0);
						if (!d) {
							this.focus(f, e)
						}
					},
					blur: function(d) {
						this._delay(function() {
							if (!b.contains(this.element[0], this.document[0].activeElement)) {
								this.collapseAll(d)
							}
						})
					},
					keydown: "_keydown"
				});
				this.refresh();
				this._on(this.document, {
					click: function(d) {
						if (!b(d.target).closest(".ui-menu").length) {
							this.collapseAll(d)
						}
						a = false
					}
				})
			},
			_destroy: function() {
				this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
				this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
					var d = b(this);
					if (d.data("ui-menu-submenu-carat")) {
						d.remove()
					}
				});
				this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
			},
			_keydown: function(j) {
				var e, i, k, h, g, d = true;
				function f(l) {
					return l.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
				}
				switch (j.keyCode) {
				case b.ui.keyCode.PAGE_UP:
					this.previousPage(j);
					break;
				case b.ui.keyCode.PAGE_DOWN:
					this.nextPage(j);
					break;
				case b.ui.keyCode.HOME:
					this._move("first", "first", j);
					break;
				case b.ui.keyCode.END:
					this._move("last", "last", j);
					break;
				case b.ui.keyCode.UP:
					this.previous(j);
					break;
				case b.ui.keyCode.DOWN:
					this.next(j);
					break;
				case b.ui.keyCode.LEFT:
					this.collapse(j);
					break;
				case b.ui.keyCode.RIGHT:
					if (this.active && !this.active.is(".ui-state-disabled")) {
						this.expand(j)
					}
					break;
				case b.ui.keyCode.ENTER:
				case b.ui.keyCode.SPACE:
					this._activate(j);
					break;
				case b.ui.keyCode.ESCAPE:
					this.collapse(j);
					break;
				default:
					d = false;
					i = this.previousFilter || "";
					k = String.fromCharCode(j.keyCode);
					h = false;
					clearTimeout(this.filterTimer);
					if (k === i) {
						h = true
					} else {
						k = i + k
					}
					g = new RegExp("^" + f(k),"i");
					e = this.activeMenu.children(".ui-menu-item").filter(function() {
						return g.test(b(this).children("a").text())
					});
					e = h && e.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : e;
					if (!e.length) {
						k = String.fromCharCode(j.keyCode);
						g = new RegExp("^" + f(k),"i");
						e = this.activeMenu.children(".ui-menu-item").filter(function() {
							return g.test(b(this).children("a").text())
						})
					}
					if (e.length) {
						this.focus(j, e);
						if (e.length > 1) {
							this.previousFilter = k;
							this.filterTimer = this._delay(function() {
								delete this.previousFilter
							}, 1000)
						} else {
							delete this.previousFilter
						}
					} else {
						delete this.previousFilter
					}
				}
				if (d) {
					j.preventDefault()
				}
			},
			_activate: function(d) {
				if (!this.active.is(".ui-state-disabled")) {
					if (this.active.children("a[aria-haspopup='true']").length) {
						this.expand(d)
					} else {
						this.select(d)
					}
				}
			},
			refresh: function() {
				var f, e = this.options.icons.submenu, d = this.element.find(this.options.menus);
				d.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
					role: this.options.role,
					"aria-hidden": "true",
					"aria-expanded": "false"
				}).each(function() {
					var i = b(this)
					  , h = i.prev("a")
					  , g = b("<span>").addClass("ui-menu-icon ui-icon " + e).data("ui-menu-submenu-carat", true);
					h.attr("aria-haspopup", "true").prepend(g);
					i.attr("aria-labelledby", h.attr("id"))
				});
				f = d.add(this.element);
				f.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
					tabIndex: -1,
					role: this._itemRole()
				});
				f.children(":not(.ui-menu-item)").each(function() {
					var g = b(this);
					if (!/[^\-Ã¢â‚¬â€Ã¢â‚¬â€œ\s]/.test(g.text())) {
						g.addClass("ui-widget-content ui-menu-divider")
					}
				});
				f.children(".ui-state-disabled").attr("aria-disabled", "true");
				if (this.active && !b.contains(this.element[0], this.active[0])) {
					this.blur()
				}
			},
			_itemRole: function() {
				return {
					menu: "menuitem",
					listbox: "option"
				}[this.options.role]
			},
			focus: function(e, d) {
				var g, f;
				this.blur(e, e && e.type === "focus");
				this._scrollIntoView(d);
				this.active = d.first();
				f = this.active.children("a").addClass("ui-state-focus");
				if (this.options.role) {
					this.element.attr("aria-activedescendant", f.attr("id"))
				}
				this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
				if (e && e.type === "keydown") {
					this._close()
				} else {
					this.timer = this._delay(function() {
						this._close()
					}, this.delay)
				}
				g = d.children(".ui-menu");
				if (g.length && (/^mouse/.test(e.type))) {
					this._startOpening(g)
				}
				this.activeMenu = d.parent();
				this._trigger("focus", e, {
					item: d
				})
			},
			_scrollIntoView: function(g) {
				var j, f, h, d, e, i;
				if (this._hasScroll()) {
					j = parseFloat(b.css(this.activeMenu[0], "borderTopWidth")) || 0;
					f = parseFloat(b.css(this.activeMenu[0], "paddingTop")) || 0;
					h = g.offset().top - this.activeMenu.offset().top - j - f;
					d = this.activeMenu.scrollTop();
					e = this.activeMenu.height();
					i = g.height();
					if (h < 0) {
						this.activeMenu.scrollTop(d + h)
					} else {
						if (h + i > e) {
							this.activeMenu.scrollTop(d + h - e + i)
						}
					}
				}
			},
			blur: function(e, d) {
				if (!d) {
					clearTimeout(this.timer)
				}
				if (!this.active) {
					return
				}
				this.active.children("a").removeClass("ui-state-focus");
				this.active = null;
				this._trigger("blur", e, {
					item: this.active
				})
			},
			_startOpening: function(d) {
				clearTimeout(this.timer);
				if (d.attr("aria-hidden") !== "true") {
					return
				}
				this.timer = this._delay(function() {
					this._close();
					this._open(d)
				}, this.delay)
			},
			_open: function(e) {
				var d = b.extend({
					of: this.active
				}, this.options.position);
				clearTimeout(this.timer);
				this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true");
				e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(d)
			},
			collapseAll: function(e, d) {
				clearTimeout(this.timer);
				this.timer = this._delay(function() {
					var f = d ? this.element : b(e && e.target).closest(this.element.find(".ui-menu"));
					if (!f.length) {
						f = this.element
					}
					this._close(f);
					this.blur(e);
					this.activeMenu = f
				}, this.delay)
			},
			_close: function(d) {
				if (!d) {
					d = this.active ? this.active.parent() : this.element
				}
				d.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
			},
			collapse: function(e) {
				var d = this.active && this.active.parent().closest(".ui-menu-item", this.element);
				if (d && d.length) {
					this._close();
					this.focus(e, d)
				}
			},
			expand: function(e) {
				var d = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
				if (d && d.length) {
					this._open(d.parent());
					this._delay(function() {
						this.focus(e, d)
					})
				}
			},
			next: function(d) {
				this._move("next", "first", d)
			},
			previous: function(d) {
				this._move("prev", "last", d)
			},
			isFirstItem: function() {
				return this.active && !this.active.prevAll(".ui-menu-item").length
			},
			isLastItem: function() {
				return this.active && !this.active.nextAll(".ui-menu-item").length
			},
			_move: function(g, e, f) {
				var d;
				if (this.active) {
					if (g === "first" || g === "last") {
						d = this.active[g === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1)
					} else {
						d = this.active[g + "All"](".ui-menu-item").eq(0)
					}
				}
				if (!d || !d.length || !this.active) {
					d = this.activeMenu.children(".ui-menu-item")[e]()
				}
				this.focus(f, d)
			},
			nextPage: function(f) {
				var e, g, d;
				if (!this.active) {
					this.next(f);
					return
				}
				if (this.isLastItem()) {
					return
				}
				if (this._hasScroll()) {
					g = this.active.offset().top;
					d = this.element.height();
					this.active.nextAll(".ui-menu-item").each(function() {
						e = b(this);
						return e.offset().top - g - d < 0
					});
					this.focus(f, e)
				} else {
					this.focus(f, this.activeMenu.children(".ui-menu-item")[!this.active ? "first" : "last"]())
				}
			},
			previousPage: function(f) {
				var e, g, d;
				if (!this.active) {
					this.next(f);
					return
				}
				if (this.isFirstItem()) {
					return
				}
				if (this._hasScroll()) {
					g = this.active.offset().top;
					d = this.element.height();
					this.active.prevAll(".ui-menu-item").each(function() {
						e = b(this);
						return e.offset().top - g + d > 0
					});
					this.focus(f, e)
				} else {
					this.focus(f, this.activeMenu.children(".ui-menu-item").first())
				}
			},
			_hasScroll: function() {
				return this.element.outerHeight() < this.element.prop("scrollHeight")
			},
			select: function(d) {
				this.active = this.active || b(d.target).closest(".ui-menu-item");
				var e = {
					item: this.active
				};
				if (!this.active.has(".ui-menu").length) {
					this.collapseAll(d, true)
				}
				this._trigger("select", d, e)
			}
		})
	}(jQuery));
	(function(e, c) {
		e.ui = e.ui || {};
		var i, j = Math.max, n = Math.abs, l = Math.round, d = /left|center|right/, g = /top|center|bottom/, a = /[\+\-]\d+%?/, k = /^\w+/, b = /%$/, f = e.fn.position;
		function m(q, p, o) {
			return [parseInt(q[0], 10) * (b.test(q[0]) ? p / 100 : 1), parseInt(q[1], 10) * (b.test(q[1]) ? o / 100 : 1)]
		}
		function h(o, p) {
			return parseInt(e.css(o, p), 10) || 0
		}
		e.position = {
			scrollbarWidth: function() {
				if (i !== c) {
					return i
				}
				var p, o, r = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), q = r.children()[0];
				e("body").append(r);
				p = q.offsetWidth;
				r.css("overflow", "scroll");
				o = q.offsetWidth;
				if (p === o) {
					o = r[0].clientWidth
				}
				r.remove();
				return (i = p - o)
			},
			getScrollInfo: function(s) {
				var r = s.isWindow ? "" : s.element.css("overflow-x")
				  , q = s.isWindow ? "" : s.element.css("overflow-y")
				  , p = r === "scroll" || (r === "auto" && s.width < s.element[0].scrollWidth)
				  , o = q === "scroll" || (q === "auto" && s.height < s.element[0].scrollHeight);
				return {
					width: p ? e.position.scrollbarWidth() : 0,
					height: o ? e.position.scrollbarWidth() : 0
				}
			},
			getWithinInfo: function(p) {
				var q = e(p || window)
				  , o = e.isWindow(q[0]);
				return {
					element: q,
					isWindow: o,
					offset: q.offset() || {
						left: 0,
						top: 0
					},
					scrollLeft: q.scrollLeft(),
					scrollTop: q.scrollTop(),
					width: o ? q.width() : q.outerWidth(),
					height: o ? q.height() : q.outerHeight()
				}
			}
		};
		e.fn.position = function(y) {
			if (!y || !y.of) {
				return f.apply(this, arguments)
			}
			y = e.extend({}, y);
			var z, v, s, x, r, u = e(y.of), q = e.position.getWithinInfo(y.within), o = e.position.getScrollInfo(q), t = u[0], w = (y.collision || "flip").split(" "), p = {};
			if (t.nodeType === 9) {
				v = u.width();
				s = u.height();
				x = {
					top: 0,
					left: 0
				}
			} else {
				if (e.isWindow(t)) {
					v = u.width();
					s = u.height();
					x = {
						top: u.scrollTop(),
						left: u.scrollLeft()
					}
				} else {
					if (t.preventDefault) {
						y.at = "left top";
						v = s = 0;
						x = {
							top: t.pageY,
							left: t.pageX
						}
					} else {
						v = u.outerWidth();
						s = u.outerHeight();
						x = u.offset()
					}
				}
			}
			r = e.extend({}, x);
			e.each(["my", "at"], function() {
				var C = (y[this] || "").split(" "), B, A;
				if (C.length === 1) {
					C = d.test(C[0]) ? C.concat(["center"]) : g.test(C[0]) ? ["center"].concat(C) : ["center", "center"]
				}
				C[0] = d.test(C[0]) ? C[0] : "center";
				C[1] = g.test(C[1]) ? C[1] : "center";
				B = a.exec(C[0]);
				A = a.exec(C[1]);
				p[this] = [B ? B[0] : 0, A ? A[0] : 0];
				y[this] = [k.exec(C[0])[0], k.exec(C[1])[0]]
			});
			if (w.length === 1) {
				w[1] = w[0]
			}
			if (y.at[0] === "right") {
				r.left += v
			} else {
				if (y.at[0] === "center") {
					r.left += v / 2
				}
			}
			if (y.at[1] === "bottom") {
				r.top += s
			} else {
				if (y.at[1] === "center") {
					r.top += s / 2
				}
			}
			z = m(p.at, v, s);
			r.left += z[0];
			r.top += z[1];
			return this.each(function() {
				var B, K, D = e(this), F = D.outerWidth(), C = D.outerHeight(), E = h(this, "marginLeft"), A = h(this, "marginTop"), J = F + E + h(this, "marginRight") + o.width, I = C + A + h(this, "marginBottom") + o.height, G = e.extend({}, r), H = m(p.my, D.outerWidth(), D.outerHeight());
				if (y.my[0] === "right") {
					G.left -= F
				} else {
					if (y.my[0] === "center") {
						G.left -= F / 2
					}
				}
				if (y.my[1] === "bottom") {
					G.top -= C
				} else {
					if (y.my[1] === "center") {
						G.top -= C / 2
					}
				}
				G.left += H[0];
				G.top += H[1];
				if (!e.support.offsetFractions) {
					G.left = l(G.left);
					G.top = l(G.top)
				}
				B = {
					marginLeft: E,
					marginTop: A
				};
				e.each(["left", "top"], function(M, L) {
					if (e.ui.position[w[M]]) {
						e.ui.position[w[M]][L](G, {
							targetWidth: v,
							targetHeight: s,
							elemWidth: F,
							elemHeight: C,
							collisionPosition: B,
							collisionWidth: J,
							collisionHeight: I,
							offset: [z[0] + H[0], z[1] + H[1]],
							my: y.my,
							at: y.at,
							within: q,
							elem: D
						})
					}
				});
				if (e.fn.bgiframe) {
					D.bgiframe()
				}
				if (y.using) {
					K = function(O) {
						var Q = x.left - G.left
						  , N = Q + v - F
						  , P = x.top - G.top
						  , M = P + s - C
						  , L = {
							target: {
								element: u,
								left: x.left,
								top: x.top,
								width: v,
								height: s
							},
							element: {
								element: D,
								left: G.left,
								top: G.top,
								width: F,
								height: C
							},
							horizontal: N < 0 ? "left" : Q > 0 ? "right" : "center",
							vertical: M < 0 ? "top" : P > 0 ? "bottom" : "middle"
						};
						if (v < F && n(Q + N) < v) {
							L.horizontal = "center"
						}
						if (s < C && n(P + M) < s) {
							L.vertical = "middle"
						}
						if (j(n(Q), n(N)) > j(n(P), n(M))) {
							L.important = "horizontal"
						} else {
							L.important = "vertical"
						}
						y.using.call(this, O, L)
					}
				}
				D.offset(e.extend(G, {
					using: K
				}))
			})
		}
		;
		e.ui.position = {
			fit: {
				left: function(s, r) {
					var q = r.within, u = q.isWindow ? q.scrollLeft : q.offset.left, w = q.width, t = s.left - r.collisionPosition.marginLeft, v = u - t, p = t + r.collisionWidth - w - u, o;
					if (r.collisionWidth > w) {
						if (v > 0 && p <= 0) {
							o = s.left + v + r.collisionWidth - w - u;
							s.left += v - o
						} else {
							if (p > 0 && v <= 0) {
								s.left = u
							} else {
								if (v > p) {
									s.left = u + w - r.collisionWidth
								} else {
									s.left = u
								}
							}
						}
					} else {
						if (v > 0) {
							s.left += v
						} else {
							if (p > 0) {
								s.left -= p
							} else {
								s.left = j(s.left - t, s.left)
							}
						}
					}
				},
				top: function(r, q) {
					var p = q.within, v = p.isWindow ? p.scrollTop : p.offset.top, w = q.within.height, t = r.top - q.collisionPosition.marginTop, u = v - t, s = t + q.collisionHeight - w - v, o;
					if (q.collisionHeight > w) {
						if (u > 0 && s <= 0) {
							o = r.top + u + q.collisionHeight - w - v;
							r.top += u - o
						} else {
							if (s > 0 && u <= 0) {
								r.top = v
							} else {
								if (u > s) {
									r.top = v + w - q.collisionHeight
								} else {
									r.top = v
								}
							}
						}
					} else {
						if (u > 0) {
							r.top += u
						} else {
							if (s > 0) {
								r.top -= s
							} else {
								r.top = j(r.top - t, r.top)
							}
						}
					}
				}
			},
			flip: {
				left: function(u, t) {
					var s = t.within, y = s.offset.left + s.scrollLeft, B = s.width, q = s.isWindow ? s.scrollLeft : s.offset.left, v = u.left - t.collisionPosition.marginLeft, z = v - q, p = v + t.collisionWidth - B - q, x = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0, A = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right" ? -t.targetWidth : 0, r = -2 * t.offset[0], o, w;
					if (z < 0) {
						o = u.left + x + A + r + t.collisionWidth - B - y;
						if (o < 0 || o < n(z)) {
							u.left += x + A + r
						}
					} else {
						if (p > 0) {
							w = u.left - t.collisionPosition.marginLeft + x + A + r - q;
							if (w > 0 || n(w) < p) {
								u.left += x + A + r
							}
						}
					}
				},
				top: function(t, s) {
					var r = s.within, A = r.offset.top + r.scrollTop, B = r.height, o = r.isWindow ? r.scrollTop : r.offset.top, v = t.top - s.collisionPosition.marginTop, x = v - o, u = v + s.collisionHeight - B - o, y = s.my[1] === "top", w = y ? -s.elemHeight : s.my[1] === "bottom" ? s.elemHeight : 0, C = s.at[1] === "top" ? s.targetHeight : s.at[1] === "bottom" ? -s.targetHeight : 0, q = -2 * s.offset[1], z, p;
					if (x < 0) {
						p = t.top + w + C + q + s.collisionHeight - B - A;
						if ((t.top + w + C + q) > x && (p < 0 || p < n(x))) {
							t.top += w + C + q
						}
					} else {
						if (u > 0) {
							z = t.top - s.collisionPosition.marginTop + w + C + q - o;
							if ((t.top + w + C + q) > u && (z > 0 || n(z) < u)) {
								t.top += w + C + q
							}
						}
					}
				}
			},
			flipfit: {
				left: function() {
					e.ui.position.flip.left.apply(this, arguments);
					e.ui.position.fit.left.apply(this, arguments)
				},
				top: function() {
					e.ui.position.flip.top.apply(this, arguments);
					e.ui.position.fit.top.apply(this, arguments)
				}
			}
		};
		(function() {
			var s, u, p, r, q, o = document.getElementsByTagName("body")[0], t = document.createElement("div");
			s = document.createElement(o ? "div" : "body");
			p = {
				visibility: "hidden",
				width: 0,
				height: 0,
				border: 0,
				margin: 0,
				background: "none"
			};
			if (o) {
				e.extend(p, {
					position: "absolute",
					left: "-1000px",
					top: "-1000px"
				})
			}
			for (q in p) {
				s.style[q] = p[q]
			}
			s.appendChild(t);
			u = o || document.documentElement;
			u.insertBefore(s, u.firstChild);
			t.style.cssText = "position: absolute; left: 10.7432222px;";
			r = e(t).offset().left;
			e.support.offsetFractions = r > 10 && r < 11;
			s.innerHTML = "";
			u.removeChild(s)
		}
		)();
		if (e.uiBackCompat !== false) {
			(function(p) {
				var o = p.fn.position;
				p.fn.position = function(r) {
					if (!r || !r.offset) {
						return o.call(this, r)
					}
					var s = r.offset.split(" ")
					  , q = r.at.split(" ");
					if (s.length === 1) {
						s[1] = s[0]
					}
					if (/^\d/.test(s[0])) {
						s[0] = "+" + s[0]
					}
					if (/^\d/.test(s[1])) {
						s[1] = "+" + s[1]
					}
					if (q.length === 1) {
						if (/left|center|right/.test(q[0])) {
							q[1] = "center"
						} else {
							q[1] = q[0];
							q[0] = "center"
						}
					}
					return o.call(this, p.extend(r, {
						at: q[0] + s[0] + " " + q[1] + s[1],
						offset: c
					}))
				}
			}(jQuery))
		}
	}(jQuery));
	(function(a, b) {
		a.widget("ui.progressbar", {
			version: "1.9.2",
			options: {
				value: 0,
				max: 100
			},
			min: 0,
			_create: function() {
				this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
					role: "progressbar",
					"aria-valuemin": this.min,
					"aria-valuemax": this.options.max,
					"aria-valuenow": this._value()
				});
				this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
				this.oldValue = this._value();
				this._refreshValue()
			},
			_destroy: function() {
				this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
				this.valueDiv.remove()
			},
			value: function(c) {
				if (c === b) {
					return this._value()
				}
				this._setOption("value", c);
				return this
			},
			_setOption: function(c, d) {
				if (c === "value") {
					this.options.value = d;
					this._refreshValue();
					if (this._value() === this.options.max) {
						this._trigger("complete")
					}
				}
				this._super(c, d)
			},
			_value: function() {
				var c = this.options.value;
				if (typeof c !== "number") {
					c = 0
				}
				return Math.min(this.options.max, Math.max(this.min, c))
			},
			_percentage: function() {
				return 100 * this._value() / this.options.max
			},
			_refreshValue: function() {
				var d = this.value()
				  , c = this._percentage();
				if (this.oldValue !== d) {
					this.oldValue = d;
					this._trigger("change")
				}
				this.valueDiv.toggle(d > this.min).toggleClass("ui-corner-right", d === this.options.max).width(c.toFixed(0) + "%");
				this.element.attr("aria-valuenow", d)
			}
		})
	}
	)(jQuery);
	(function(b, c) {
		var a = 5;
		b.widget("ui.slider", b.ui.mouse, {
			version: "1.9.2",
			widgetEventPrefix: "slide",
			options: {
				animate: false,
				distance: 0,
				max: 100,
				min: 0,
				orientation: "horizontal",
				range: false,
				step: 1,
				value: 0,
				values: null
			},
			_create: function() {
				var f, d, j = this.options, h = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), g = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", e = [];
				this._keySliding = false;
				this._mouseSliding = false;
				this._animateOff = true;
				this._handleIndex = null;
				this._detectOrientation();
				this._mouseInit();
				this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (j.disabled ? " ui-slider-disabled ui-disabled" : ""));
				this.range = b([]);
				if (j.range) {
					if (j.range === true) {
						if (!j.values) {
							j.values = [this._valueMin(), this._valueMin()]
						}
						if (j.values.length && j.values.length !== 2) {
							j.values = [j.values[0], j.values[0]]
						}
					}
					this.range = b("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ((j.range === "min" || j.range === "max") ? " ui-slider-range-" + j.range : ""))
				}
				d = (j.values && j.values.length) || 1;
				for (f = h.length; f < d; f++) {
					e.push(g)
				}
				this.handles = h.add(b(e.join("")).appendTo(this.element));
				this.handle = this.handles.eq(0);
				this.handles.add(this.range).filter("a").click(function(i) {
					i.preventDefault()
				}).mouseenter(function() {
					if (!j.disabled) {
						b(this).addClass("ui-state-hover")
					}
				}).mouseleave(function() {
					b(this).removeClass("ui-state-hover")
				}).focus(function() {
					if (!j.disabled) {
						b(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
						b(this).addClass("ui-state-focus")
					} else {
						b(this).blur()
					}
				}).blur(function() {
					b(this).removeClass("ui-state-focus")
				});
				this.handles.each(function(k) {
					b(this).data("ui-slider-handle-index", k)
				});
				this._on(this.handles, {
					keydown: function(n) {
						var o, l, k, m, i = b(n.target).data("ui-slider-handle-index");
						switch (n.keyCode) {
						case b.ui.keyCode.HOME:
						case b.ui.keyCode.END:
						case b.ui.keyCode.PAGE_UP:
						case b.ui.keyCode.PAGE_DOWN:
						case b.ui.keyCode.UP:
						case b.ui.keyCode.RIGHT:
						case b.ui.keyCode.DOWN:
						case b.ui.keyCode.LEFT:
							n.preventDefault();
							if (!this._keySliding) {
								this._keySliding = true;
								b(n.target).addClass("ui-state-active");
								o = this._start(n, i);
								if (o === false) {
									return
								}
							}
							break
						}
						m = this.options.step;
						if (this.options.values && this.options.values.length) {
							l = k = this.values(i)
						} else {
							l = k = this.value()
						}
						switch (n.keyCode) {
						case b.ui.keyCode.HOME:
							k = this._valueMin();
							break;
						case b.ui.keyCode.END:
							k = this._valueMax();
							break;
						case b.ui.keyCode.PAGE_UP:
							k = this._trimAlignValue(l + ((this._valueMax() - this._valueMin()) / a));
							break;
						case b.ui.keyCode.PAGE_DOWN:
							k = this._trimAlignValue(l - ((this._valueMax() - this._valueMin()) / a));
							break;
						case b.ui.keyCode.UP:
						case b.ui.keyCode.RIGHT:
							if (l === this._valueMax()) {
								return
							}
							k = this._trimAlignValue(l + m);
							break;
						case b.ui.keyCode.DOWN:
						case b.ui.keyCode.LEFT:
							if (l === this._valueMin()) {
								return
							}
							k = this._trimAlignValue(l - m);
							break
						}
						this._slide(n, i, k)
					},
					keyup: function(k) {
						var i = b(k.target).data("ui-slider-handle-index");
						if (this._keySliding) {
							this._keySliding = false;
							this._stop(k, i);
							this._change(k, i);
							b(k.target).removeClass("ui-state-active")
						}
					}
				});
				this._refreshValue();
				this._animateOff = false
			},
			_destroy: function() {
				this.handles.remove();
				this.range.remove();
				this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all");
				this._mouseDestroy()
			},
			_mouseCapture: function(f) {
				var j, m, e, h, l, n, i, d, k = this, g = this.options;
				if (g.disabled) {
					return false
				}
				this.elementSize = {
					width: this.element.outerWidth(),
					height: this.element.outerHeight()
				};
				this.elementOffset = this.element.offset();
				j = {
					x: f.pageX,
					y: f.pageY
				};
				m = this._normValueFromMouse(j);
				e = this._valueMax() - this._valueMin() + 1;
				this.handles.each(function(o) {
					var p = Math.abs(m - k.values(o));
					if (e > p) {
						e = p;
						h = b(this);
						l = o
					}
				});
				if (g.range === true && this.values(1) === g.min) {
					l += 1;
					h = b(this.handles[l])
				}
				n = this._start(f, l);
				if (n === false) {
					return false
				}
				this._mouseSliding = true;
				this._handleIndex = l;
				h.addClass("ui-state-active").focus();
				i = h.offset();
				d = !b(f.target).parents().andSelf().is(".ui-slider-handle");
				this._clickOffset = d ? {
					left: 0,
					top: 0
				} : {
					left: f.pageX - i.left - (h.width() / 2),
					top: f.pageY - i.top - (h.height() / 2) - (parseInt(h.css("borderTopWidth"), 10) || 0) - (parseInt(h.css("borderBottomWidth"), 10) || 0) + (parseInt(h.css("marginTop"), 10) || 0)
				};
				if (!this.handles.hasClass("ui-state-hover")) {
					this._slide(f, l, m)
				}
				this._animateOff = true;
				return true
			},
			_mouseStart: function() {
				return true
			},
			_mouseDrag: function(f) {
				var d = {
					x: f.pageX,
					y: f.pageY
				}
				  , e = this._normValueFromMouse(d);
				this._slide(f, this._handleIndex, e);
				return false
			},
			_mouseStop: function(d) {
				this.handles.removeClass("ui-state-active");
				this._mouseSliding = false;
				this._stop(d, this._handleIndex);
				this._change(d, this._handleIndex);
				this._handleIndex = null;
				this._clickOffset = null;
				this._animateOff = false;
				return false
			},
			_detectOrientation: function() {
				this.orientation = (this.options.orientation === "vertical") ? "vertical" : "horizontal"
			},
			_normValueFromMouse: function(e) {
				var d, h, g, f, i;
				if (this.orientation === "horizontal") {
					d = this.elementSize.width;
					h = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
				} else {
					d = this.elementSize.height;
					h = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)
				}
				g = (h / d);
				if (g > 1) {
					g = 1
				}
				if (g < 0) {
					g = 0
				}
				if (this.orientation === "vertical") {
					g = 1 - g
				}
				f = this._valueMax() - this._valueMin();
				i = this._valueMin() + g * f;
				return this._trimAlignValue(i)
			},
			_start: function(f, e) {
				var d = {
					handle: this.handles[e],
					value: this.value()
				};
				if (this.options.values && this.options.values.length) {
					d.value = this.values(e);
					d.values = this.values()
				}
				return this._trigger("start", f, d)
			},
			_slide: function(h, g, f) {
				var d, e, i;
				if (this.options.values && this.options.values.length) {
					d = this.values(g ? 0 : 1);
					if ((this.options.values.length === 2 && this.options.range === true) && ((g === 0 && f > d) || (g === 1 && f < d))) {
						f = d
					}
					if (f !== this.values(g)) {
						e = this.values();
						e[g] = f;
						i = this._trigger("slide", h, {
							handle: this.handles[g],
							value: f,
							values: e
						});
						d = this.values(g ? 0 : 1);
						if (i !== false) {
							this.values(g, f, true)
						}
					}
				} else {
					if (f !== this.value()) {
						i = this._trigger("slide", h, {
							handle: this.handles[g],
							value: f
						});
						if (i !== false) {
							this.value(f)
						}
					}
				}
			},
			_stop: function(f, e) {
				var d = {
					handle: this.handles[e],
					value: this.value()
				};
				if (this.options.values && this.options.values.length) {
					d.value = this.values(e);
					d.values = this.values()
				}
				this._trigger("stop", f, d)
			},
			_change: function(f, e) {
				if (!this._keySliding && !this._mouseSliding) {
					var d = {
						handle: this.handles[e],
						value: this.value()
					};
					if (this.options.values && this.options.values.length) {
						d.value = this.values(e);
						d.values = this.values()
					}
					this._trigger("change", f, d)
				}
			},
			value: function(d) {
				if (arguments.length) {
					this.options.value = this._trimAlignValue(d);
					this._refreshValue();
					this._change(null, 0);
					return
				}
				return this._value()
			},
			values: function(e, h) {
				var g, d, f;
				if (arguments.length > 1) {
					this.options.values[e] = this._trimAlignValue(h);
					this._refreshValue();
					this._change(null, e);
					return
				}
				if (arguments.length) {
					if (b.isArray(arguments[0])) {
						g = this.options.values;
						d = arguments[0];
						for (f = 0; f < g.length; f += 1) {
							g[f] = this._trimAlignValue(d[f]);
							this._change(null, f)
						}
						this._refreshValue()
					} else {
						if (this.options.values && this.options.values.length) {
							return this._values(e)
						} else {
							return this.value()
						}
					}
				} else {
					return this._values()
				}
			},
			_setOption: function(e, f) {
				var d, g = 0;
				if (b.isArray(this.options.values)) {
					g = this.options.values.length
				}
				b.Widget.prototype._setOption.apply(this, arguments);
				switch (e) {
				case "disabled":
					if (f) {
						this.handles.filter(".ui-state-focus").blur();
						this.handles.removeClass("ui-state-hover");
						this.handles.prop("disabled", true);
						this.element.addClass("ui-disabled")
					} else {
						this.handles.prop("disabled", false);
						this.element.removeClass("ui-disabled")
					}
					break;
				case "orientation":
					this._detectOrientation();
					this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
					this._refreshValue();
					break;
				case "value":
					this._animateOff = true;
					this._refreshValue();
					this._change(null, 0);
					this._animateOff = false;
					break;
				case "values":
					this._animateOff = true;
					this._refreshValue();
					for (d = 0; d < g; d += 1) {
						this._change(null, d)
					}
					this._animateOff = false;
					break;
				case "min":
				case "max":
					this._animateOff = true;
					this._refreshValue();
					this._animateOff = false;
					break
				}
			},
			_value: function() {
				var d = this.options.value;
				d = this._trimAlignValue(d);
				return d
			},
			_values: function(d) {
				var g, f, e;
				if (arguments.length) {
					g = this.options.values[d];
					g = this._trimAlignValue(g);
					return g
				} else {
					f = this.options.values.slice();
					for (e = 0; e < f.length; e += 1) {
						f[e] = this._trimAlignValue(f[e])
					}
					return f
				}
			},
			_trimAlignValue: function(g) {
				if (g <= this._valueMin()) {
					return this._valueMin()
				}
				if (g >= this._valueMax()) {
					return this._valueMax()
				}
				var d = (this.options.step > 0) ? this.options.step : 1
				  , f = (g - this._valueMin()) % d
				  , e = g - f;
				if (Math.abs(f) * 2 >= d) {
					e += (f > 0) ? d : (-d)
				}
				return parseFloat(e.toFixed(5))
			},
			_valueMin: function() {
				return this.options.min
			},
			_valueMax: function() {
				return this.options.max
			},
			_refreshValue: function() {
				var i, h, l, j, m, g = this.options.range, f = this.options, k = this, e = (!this._animateOff) ? f.animate : false, d = {};
				if (this.options.values && this.options.values.length) {
					this.handles.each(function(n) {
						h = (k.values(n) - k._valueMin()) / (k._valueMax() - k._valueMin()) * 100;
						d[k.orientation === "horizontal" ? "left" : "bottom"] = h + "%";
						b(this).stop(1, 1)[e ? "animate" : "css"](d, f.animate);
						if (k.options.range === true) {
							if (k.orientation === "horizontal") {
								if (n === 0) {
									k.range.stop(1, 1)[e ? "animate" : "css"]({
										left: h + "%"
									}, f.animate)
								}
								if (n === 1) {
									k.range[e ? "animate" : "css"]({
										width: (h - i) + "%"
									}, {
										queue: false,
										duration: f.animate
									})
								}
							} else {
								if (n === 0) {
									k.range.stop(1, 1)[e ? "animate" : "css"]({
										bottom: (h) + "%"
									}, f.animate)
								}
								if (n === 1) {
									k.range[e ? "animate" : "css"]({
										height: (h - i) + "%"
									}, {
										queue: false,
										duration: f.animate
									})
								}
							}
						}
						i = h
					})
				} else {
					l = this.value();
					j = this._valueMin();
					m = this._valueMax();
					h = (m !== j) ? (l - j) / (m - j) * 100 : 0;
					d[this.orientation === "horizontal" ? "left" : "bottom"] = h + "%";
					this.handle.stop(1, 1)[e ? "animate" : "css"](d, f.animate);
					if (g === "min" && this.orientation === "horizontal") {
						this.range.stop(1, 1)[e ? "animate" : "css"]({
							width: h + "%"
						}, f.animate)
					}
					if (g === "max" && this.orientation === "horizontal") {
						this.range[e ? "animate" : "css"]({
							width: (100 - h) + "%"
						}, {
							queue: false,
							duration: f.animate
						})
					}
					if (g === "min" && this.orientation === "vertical") {
						this.range.stop(1, 1)[e ? "animate" : "css"]({
							height: h + "%"
						}, f.animate)
					}
					if (g === "max" && this.orientation === "vertical") {
						this.range[e ? "animate" : "css"]({
							height: (100 - h) + "%"
						}, {
							queue: false,
							duration: f.animate
						})
					}
				}
			}
		})
	}(jQuery));
	(function(b) {
		function a(c) {
			return function() {
				var d = this.element.val();
				c.apply(this, arguments);
				this._refresh();
				if (d !== this.element.val()) {
					this._trigger("change")
				}
			}
		}
		b.widget("ui.spinner", {
			version: "1.9.2",
			defaultElement: "<input>",
			widgetEventPrefix: "spin",
			options: {
				culture: null,
				icons: {
					down: "ui-icon-triangle-1-s",
					up: "ui-icon-triangle-1-n"
				},
				incremental: true,
				max: null,
				min: null,
				numberFormat: null,
				page: 10,
				step: 1,
				change: null,
				spin: null,
				start: null,
				stop: null
			},
			_create: function() {
				this._setOption("max", this.options.max);
				this._setOption("min", this.options.min);
				this._setOption("step", this.options.step);
				this._value(this.element.val(), true);
				this._draw();
				this._on(this._events);
				this._refresh();
				this._on(this.window, {
					beforeunload: function() {
						this.element.removeAttr("autocomplete")
					}
				})
			},
			_getCreateOptions: function() {
				var c = {}
				  , d = this.element;
				b.each(["min", "max", "step"], function(e, f) {
					var g = d.attr(f);
					if (g !== undefined && g.length) {
						c[f] = g
					}
				});
				return c
			},
			_events: {
				keydown: function(c) {
					if (this._start(c) && this._keydown(c)) {
						c.preventDefault()
					}
				},
				keyup: "_stop",
				focus: function() {
					this.previous = this.element.val()
				},
				blur: function(c) {
					if (this.cancelBlur) {
						delete this.cancelBlur;
						return
					}
					this._refresh();
					if (this.previous !== this.element.val()) {
						this._trigger("change", c)
					}
				},
				mousewheel: function(c, d) {
					if (!d) {
						return
					}
					if (!this.spinning && !this._start(c)) {
						return false
					}
					this._spin((d > 0 ? 1 : -1) * this.options.step, c);
					clearTimeout(this.mousewheelTimer);
					this.mousewheelTimer = this._delay(function() {
						if (this.spinning) {
							this._stop(c)
						}
					}, 100);
					c.preventDefault()
				},
				"mousedown .ui-spinner-button": function(d) {
					var c;
					c = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();
					function e() {
						var f = this.element[0] === this.document[0].activeElement;
						if (!f) {
							this.element.focus();
							this.previous = c;
							this._delay(function() {
								this.previous = c
							})
						}
					}
					d.preventDefault();
					e.call(this);
					this.cancelBlur = true;
					this._delay(function() {
						delete this.cancelBlur;
						e.call(this)
					});
					if (this._start(d) === false) {
						return
					}
					this._repeat(null, b(d.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, d)
				},
				"mouseup .ui-spinner-button": "_stop",
				"mouseenter .ui-spinner-button": function(c) {
					if (!b(c.currentTarget).hasClass("ui-state-active")) {
						return
					}
					if (this._start(c) === false) {
						return false
					}
					this._repeat(null, b(c.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, c)
				},
				"mouseleave .ui-spinner-button": "_stop"
			},
			_draw: function() {
				var c = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
				this.element.attr("role", "spinbutton");
				this.buttons = c.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
				if (this.buttons.height() > Math.ceil(c.height() * 0.5) && c.height() > 0) {
					c.height(c.height())
				}
				if (this.options.disabled) {
					this.disable()
				}
			},
			_keydown: function(d) {
				var c = this.options
				  , e = b.ui.keyCode;
				switch (d.keyCode) {
				case e.UP:
					this._repeat(null, 1, d);
					return true;
				case e.DOWN:
					this._repeat(null, -1, d);
					return true;
				case e.PAGE_UP:
					this._repeat(null, c.page, d);
					return true;
				case e.PAGE_DOWN:
					this._repeat(null, -c.page, d);
					return true
				}
				return false
			},
			_uiSpinnerHtml: function() {
				return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
			},
			_buttonHtml: function() {
				return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
			},
			_start: function(c) {
				if (!this.spinning && this._trigger("start", c) === false) {
					return false
				}
				if (!this.counter) {
					this.counter = 1
				}
				this.spinning = true;
				return true
			},
			_repeat: function(d, c, e) {
				d = d || 500;
				clearTimeout(this.timer);
				this.timer = this._delay(function() {
					this._repeat(40, c, e)
				}, d);
				this._spin(c * this.options.step, e)
			},
			_spin: function(d, c) {
				var e = this.value() || 0;
				if (!this.counter) {
					this.counter = 1
				}
				e = this._adjustValue(e + d * this._increment(this.counter));
				if (!this.spinning || this._trigger("spin", c, {
					value: e
				}) !== false) {
					this._value(e);
					this.counter++
				}
			},
			_increment: function(c) {
				var d = this.options.incremental;
				if (d) {
					return b.isFunction(d) ? d(c) : Math.floor(c * c * c / 50000 - c * c / 500 + 17 * c / 200 + 1)
				}
				return 1
			},
			_precision: function() {
				var c = this._precisionOf(this.options.step);
				if (this.options.min !== null) {
					c = Math.max(c, this._precisionOf(this.options.min))
				}
				return c
			},
			_precisionOf: function(d) {
				var e = d.toString()
				  , c = e.indexOf(".");
				return c === -1 ? 0 : e.length - c - 1
			},
			_adjustValue: function(e) {
				var d, f, c = this.options;
				d = c.min !== null ? c.min : 0;
				f = e - d;
				f = Math.round(f / c.step) * c.step;
				e = d + f;
				e = parseFloat(e.toFixed(this._precision()));
				if (c.max !== null && e > c.max) {
					return c.max
				}
				if (c.min !== null && e < c.min) {
					return c.min
				}
				return e
			},
			_stop: function(c) {
				if (!this.spinning) {
					return
				}
				clearTimeout(this.timer);
				clearTimeout(this.mousewheelTimer);
				this.counter = 0;
				this.spinning = false;
				this._trigger("stop", c)
			},
			_setOption: function(c, d) {
				if (c === "culture" || c === "numberFormat") {
					var e = this._parse(this.element.val());
					this.options[c] = d;
					this.element.val(this._format(e));
					return
				}
				if (c === "max" || c === "min" || c === "step") {
					if (typeof d === "string") {
						d = this._parse(d)
					}
				}
				this._super(c, d);
				if (c === "disabled") {
					if (d) {
						this.element.prop("disabled", true);
						this.buttons.button("disable")
					} else {
						this.element.prop("disabled", false);
						this.buttons.button("enable")
					}
				}
			},
			_setOptions: a(function(c) {
				this._super(c);
				this._value(this.element.val())
			}),
			_parse: function(c) {
				if (typeof c === "string" && c !== "") {
					c = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(c, 10, this.options.culture) : +c
				}
				return c === "" || isNaN(c) ? null : c
			},
			_format: function(c) {
				if (c === "") {
					return ""
				}
				return window.Globalize && this.options.numberFormat ? Globalize.format(c, this.options.numberFormat, this.options.culture) : c
			},
			_refresh: function() {
				this.element.attr({
					"aria-valuemin": this.options.min,
					"aria-valuemax": this.options.max,
					"aria-valuenow": this._parse(this.element.val())
				})
			},
			_value: function(e, c) {
				var d;
				if (e !== "") {
					d = this._parse(e);
					if (d !== null) {
						if (!c) {
							d = this._adjustValue(d)
						}
						e = this._format(d)
					}
				}
				this.element.val(e);
				this._refresh()
			},
			_destroy: function() {
				this.element.removeClass("ui-spinner-input").prop("disabled", false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
				this.uiSpinner.replaceWith(this.element)
			},
			stepUp: a(function(c) {
				this._stepUp(c)
			}),
			_stepUp: function(c) {
				this._spin((c || 1) * this.options.step)
			},
			stepDown: a(function(c) {
				this._stepDown(c)
			}),
			_stepDown: function(c) {
				this._spin((c || 1) * -this.options.step)
			},
			pageUp: a(function(c) {
				this._stepUp((c || 1) * this.options.page)
			}),
			pageDown: a(function(c) {
				this._stepDown((c || 1) * this.options.page)
			}),
			value: function(c) {
				if (!arguments.length) {
					return this._parse(this.element.val())
				}
				a(this._value).call(this, c)
			},
			widget: function() {
				return this.uiSpinner
			}
		})
	}(jQuery));
	(function(c, e) {
		var a = 0
		  , f = /#.*$/;
		function d() {
			return ++a
		}
		function b(g) {
			return g.hash.length > 1 && g.href.replace(f, "") === location.href.replace(f, "").replace(/\s/g, "%20")
		}
		c.widget("ui.tabs", {
			version: "1.9.2",
			delay: 300,
			options: {
				active: null,
				collapsible: false,
				event: "click",
				heightStyle: "content",
				hide: null,
				show: null,
				activate: null,
				beforeActivate: null,
				beforeLoad: null,
				load: null
			},
			_create: function() {
				var h = this
				  , g = this.options
				  , i = g.active
				  , j = location.hash.substring(1);
				this.running = false;
				this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", g.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(k) {
					if (c(this).is(".ui-state-disabled")) {
						k.preventDefault()
					}
				}).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
					if (c(this).closest("li").is(".ui-state-disabled")) {
						this.blur()
					}
				});
				this._processTabs();
				if (i === null) {
					if (j) {
						this.tabs.each(function(k, l) {
							if (c(l).attr("aria-controls") === j) {
								i = k;
								return false
							}
						})
					}
					if (i === null) {
						i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))
					}
					if (i === null || i === -1) {
						i = this.tabs.length ? 0 : false
					}
				}
				if (i !== false) {
					i = this.tabs.index(this.tabs.eq(i));
					if (i === -1) {
						i = g.collapsible ? false : 0
					}
				}
				g.active = i;
				if (!g.collapsible && g.active === false && this.anchors.length) {
					g.active = 0
				}
				if (c.isArray(g.disabled)) {
					g.disabled = c.unique(g.disabled.concat(c.map(this.tabs.filter(".ui-state-disabled"), function(k) {
						return h.tabs.index(k)
					}))).sort()
				}
				if (this.options.active !== false && this.anchors.length) {
					this.active = this._findActive(this.options.active)
				} else {
					this.active = c()
				}
				this._refresh();
				if (this.active.length) {
					this.load(g.active)
				}
			},
			_getCreateEventData: function() {
				return {
					tab: this.active,
					panel: !this.active.length ? c() : this._getPanelForTab(this.active)
				}
			},
			_tabKeydown: function(i) {
				var h = c(this.document[0].activeElement).closest("li")
				  , g = this.tabs.index(h)
				  , j = true;
				if (this._handlePageNav(i)) {
					return
				}
				switch (i.keyCode) {
				case c.ui.keyCode.RIGHT:
				case c.ui.keyCode.DOWN:
					g++;
					break;
				case c.ui.keyCode.UP:
				case c.ui.keyCode.LEFT:
					j = false;
					g--;
					break;
				case c.ui.keyCode.END:
					g = this.anchors.length - 1;
					break;
				case c.ui.keyCode.HOME:
					g = 0;
					break;
				case c.ui.keyCode.SPACE:
					i.preventDefault();
					clearTimeout(this.activating);
					this._activate(g);
					return;
				case c.ui.keyCode.ENTER:
					i.preventDefault();
					clearTimeout(this.activating);
					this._activate(g === this.options.active ? false : g);
					return;
				default:
					return
				}
				i.preventDefault();
				clearTimeout(this.activating);
				g = this._focusNextTab(g, j);
				if (!i.ctrlKey) {
					h.attr("aria-selected", "false");
					this.tabs.eq(g).attr("aria-selected", "true");
					this.activating = this._delay(function() {
						this.option("active", g)
					}, this.delay)
				}
			},
			_panelKeydown: function(g) {
				if (this._handlePageNav(g)) {
					return
				}
				if (g.ctrlKey && g.keyCode === c.ui.keyCode.UP) {
					g.preventDefault();
					this.active.focus()
				}
			},
			_handlePageNav: function(g) {
				if (g.altKey && g.keyCode === c.ui.keyCode.PAGE_UP) {
					this._activate(this._focusNextTab(this.options.active - 1, false));
					return true
				}
				if (g.altKey && g.keyCode === c.ui.keyCode.PAGE_DOWN) {
					this._activate(this._focusNextTab(this.options.active + 1, true));
					return true
				}
			},
			_findNextTab: function(h, i) {
				var g = this.tabs.length - 1;
				function j() {
					if (h > g) {
						h = 0
					}
					if (h < 0) {
						h = g
					}
					return h
				}
				while (c.inArray(j(), this.options.disabled) !== -1) {
					h = i ? h + 1 : h - 1
				}
				return h
			},
			_focusNextTab: function(g, h) {
				g = this._findNextTab(g, h);
				this.tabs.eq(g).focus();
				return g
			},
			_setOption: function(g, h) {
				if (g === "active") {
					this._activate(h);
					return
				}
				if (g === "disabled") {
					this._setupDisabled(h);
					return
				}
				this._super(g, h);
				if (g === "collapsible") {
					this.element.toggleClass("ui-tabs-collapsible", h);
					if (!h && this.options.active === false) {
						this._activate(0)
					}
				}
				if (g === "event") {
					this._setupEvents(h)
				}
				if (g === "heightStyle") {
					this._setupHeightStyle(h)
				}
			},
			_tabId: function(g) {
				return g.attr("aria-controls") || "ui-tabs-" + d()
			},
			_sanitizeSelector: function(g) {
				return g ? g.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
			},
			refresh: function() {
				var h = this.options
				  , g = this.tablist.children(":has(a[href])");
				h.disabled = c.map(g.filter(".ui-state-disabled"), function(i) {
					return g.index(i)
				});
				this._processTabs();
				if (h.active === false || !this.anchors.length) {
					h.active = false;
					this.active = c()
				} else {
					if (this.active.length && !c.contains(this.tablist[0], this.active[0])) {
						if (this.tabs.length === h.disabled.length) {
							h.active = false;
							this.active = c()
						} else {
							this._activate(this._findNextTab(Math.max(0, h.active - 1), false))
						}
					} else {
						h.active = this.tabs.index(this.active)
					}
				}
				this._refresh()
			},
			_refresh: function() {
				this._setupDisabled(this.options.disabled);
				this._setupEvents(this.options.event);
				this._setupHeightStyle(this.options.heightStyle);
				this.tabs.not(this.active).attr({
					"aria-selected": "false",
					tabIndex: -1
				});
				this.panels.not(this._getPanelForTab(this.active)).hide().attr({
					"aria-expanded": "false",
					"aria-hidden": "true"
				});
				if (!this.active.length) {
					this.tabs.eq(0).attr("tabIndex", 0)
				} else {
					this.active.addClass("ui-tabs-active ui-state-active").attr({
						"aria-selected": "true",
						tabIndex: 0
					});
					this._getPanelForTab(this.active).show().attr({
						"aria-expanded": "true",
						"aria-hidden": "false"
					})
				}
			},
			_processTabs: function() {
				var g = this;
				this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist");
				this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
					role: "tab",
					tabIndex: -1
				});
				this.anchors = this.tabs.map(function() {
					return c("a", this)[0]
				}).addClass("ui-tabs-anchor").attr({
					role: "presentation",
					tabIndex: -1
				});
				this.panels = c();
				this.anchors.each(function(n, l) {
					var h, j, m, k = c(l).uniqueId().attr("id"), o = c(l).closest("li"), p = o.attr("aria-controls");
					if (b(l)) {
						h = l.hash;
						j = g.element.find(g._sanitizeSelector(h))
					} else {
						m = g._tabId(o);
						h = "#" + m;
						j = g.element.find(h);
						if (!j.length) {
							j = g._createPanel(m);
							j.insertAfter(g.panels[n - 1] || g.tablist)
						}
						j.attr("aria-live", "polite")
					}
					if (j.length) {
						g.panels = g.panels.add(j)
					}
					if (p) {
						o.data("ui-tabs-aria-controls", p)
					}
					o.attr({
						"aria-controls": h.substring(1),
						"aria-labelledby": k
					});
					j.attr("aria-labelledby", k)
				});
				this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
			},
			_getList: function() {
				return this.element.find("ol,ul").eq(0)
			},
			_createPanel: function(g) {
				return c("<div>").attr("id", g).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", true)
			},
			_setupDisabled: function(j) {
				if (c.isArray(j)) {
					if (!j.length) {
						j = false
					} else {
						if (j.length === this.anchors.length) {
							j = true
						}
					}
				}
				for (var h = 0, g; (g = this.tabs[h]); h++) {
					if (j === true || c.inArray(h, j) !== -1) {
						c(g).addClass("ui-state-disabled").attr("aria-disabled", "true")
					} else {
						c(g).removeClass("ui-state-disabled").removeAttr("aria-disabled")
					}
				}
				this.options.disabled = j
			},
			_setupEvents: function(h) {
				var g = {
					click: function(i) {
						i.preventDefault()
					}
				};
				if (h) {
					c.each(h.split(" "), function(j, i) {
						g[i] = "_eventHandler"
					})
				}
				this._off(this.anchors.add(this.tabs).add(this.panels));
				this._on(this.anchors, g);
				this._on(this.tabs, {
					keydown: "_tabKeydown"
				});
				this._on(this.panels, {
					keydown: "_panelKeydown"
				});
				this._focusable(this.tabs);
				this._hoverable(this.tabs)
			},
			_setupHeightStyle: function(g) {
				var i, j, h = this.element.parent();
				if (g === "fill") {
					if (!c.support.minHeight) {
						j = h.css("overflow");
						h.css("overflow", "hidden")
					}
					i = h.height();
					this.element.siblings(":visible").each(function() {
						var l = c(this)
						  , k = l.css("position");
						if (k === "absolute" || k === "fixed") {
							return
						}
						i -= l.outerHeight(true)
					});
					if (j) {
						h.css("overflow", j)
					}
					this.element.children().not(this.panels).each(function() {
						i -= c(this).outerHeight(true)
					});
					this.panels.each(function() {
						c(this).height(Math.max(0, i - c(this).innerHeight() + c(this).height()))
					}).css("overflow", "auto")
				} else {
					if (g === "auto") {
						i = 0;
						this.panels.each(function() {
							i = Math.max(i, c(this).height("").height())
						}).height(i)
					}
				}
			},
			_eventHandler: function(g) {
				var p = this.options
				  , k = this.active
				  , l = c(g.currentTarget)
				  , j = l.closest("li")
				  , n = j[0] === k[0]
				  , h = n && p.collapsible
				  , i = h ? c() : this._getPanelForTab(j)
				  , m = !k.length ? c() : this._getPanelForTab(k)
				  , o = {
					oldTab: k,
					oldPanel: m,
					newTab: h ? c() : j,
					newPanel: i
				};
				g.preventDefault();
				if (j.hasClass("ui-state-disabled") || j.hasClass("ui-tabs-loading") || this.running || (n && !p.collapsible) || (this._trigger("beforeActivate", g, o) === false)) {
					return
				}
				p.active = h ? false : this.tabs.index(j);
				this.active = n ? c() : j;
				if (this.xhr) {
					this.xhr.abort()
				}
				if (!m.length && !i.length) {
					c.error("jQuery UI Tabs: Mismatching fragment identifier.")
				}
				if (i.length) {
					this.load(this.tabs.index(j), g)
				}
				this._toggle(g, o)
			},
			_toggle: function(m, l) {
				var k = this
				  , g = l.newPanel
				  , j = l.oldPanel;
				this.running = true;
				function i() {
					k.running = false;
					k._trigger("activate", m, l)
				}
				function h() {
					l.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
					if (g.length && k.options.show) {
						k._show(g, k.options.show, i)
					} else {
						g.show();
						i()
					}
				}
				if (j.length && this.options.hide) {
					this._hide(j, this.options.hide, function() {
						l.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
						h()
					})
				} else {
					l.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
					j.hide();
					h()
				}
				j.attr({
					"aria-expanded": "false",
					"aria-hidden": "true"
				});
				l.oldTab.attr("aria-selected", "false");
				if (g.length && j.length) {
					l.oldTab.attr("tabIndex", -1)
				} else {
					if (g.length) {
						this.tabs.filter(function() {
							return c(this).attr("tabIndex") === 0
						}).attr("tabIndex", -1)
					}
				}
				g.attr({
					"aria-expanded": "true",
					"aria-hidden": "false"
				});
				l.newTab.attr({
					"aria-selected": "true",
					tabIndex: 0
				})
			},
			_activate: function(h) {
				var g, i = this._findActive(h);
				if (i[0] === this.active[0]) {
					return
				}
				if (!i.length) {
					i = this.active
				}
				g = i.find(".ui-tabs-anchor")[0];
				this._eventHandler({
					target: g,
					currentTarget: g,
					preventDefault: c.noop
				})
			},
			_findActive: function(g) {
				return g === false ? c() : this.tabs.eq(g)
			},
			_getIndex: function(g) {
				if (typeof g === "string") {
					g = this.anchors.index(this.anchors.filter("[href$='" + g + "']"))
				}
				return g
			},
			_destroy: function() {
				if (this.xhr) {
					this.xhr.abort()
				}
				this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
				this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
				this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId();
				this.tabs.add(this.panels).each(function() {
					if (c.data(this, "ui-tabs-destroy")) {
						c(this).remove()
					} else {
						c(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
					}
				});
				this.tabs.each(function() {
					var g = c(this)
					  , h = g.data("ui-tabs-aria-controls");
					if (h) {
						g.attr("aria-controls", h)
					} else {
						g.removeAttr("aria-controls")
					}
				});
				this.panels.show();
				if (this.options.heightStyle !== "content") {
					this.panels.css("height", "")
				}
			},
			enable: function(g) {
				var h = this.options.disabled;
				if (h === false) {
					return
				}
				if (g === e) {
					h = false
				} else {
					g = this._getIndex(g);
					if (c.isArray(h)) {
						h = c.map(h, function(i) {
							return i !== g ? i : null
						})
					} else {
						h = c.map(this.tabs, function(i, j) {
							return j !== g ? j : null
						})
					}
				}
				this._setupDisabled(h)
			},
			disable: function(g) {
				var h = this.options.disabled;
				if (h === true) {
					return
				}
				if (g === e) {
					h = true
				} else {
					g = this._getIndex(g);
					if (c.inArray(g, h) !== -1) {
						return
					}
					if (c.isArray(h)) {
						h = c.merge([g], h).sort()
					} else {
						h = [g]
					}
				}
				this._setupDisabled(h)
			},
			load: function(i, m) {
				i = this._getIndex(i);
				var l = this
				  , j = this.tabs.eq(i)
				  , h = j.find(".ui-tabs-anchor")
				  , g = this._getPanelForTab(j)
				  , k = {
					tab: j,
					panel: g
				};
				if (b(h[0])) {
					return
				}
				this.xhr = c.ajax(this._ajaxSettings(h, m, k));
				if (this.xhr && this.xhr.statusText !== "canceled") {
					j.addClass("ui-tabs-loading");
					g.attr("aria-busy", "true");
					this.xhr.success(function(n) {
						setTimeout(function() {
							g.html(n);
							l._trigger("load", m, k)
						}, 1)
					}).complete(function(o, n) {
						setTimeout(function() {
							if (n === "abort") {
								l.panels.stop(false, true)
							}
							j.removeClass("ui-tabs-loading");
							g.removeAttr("aria-busy");
							if (o === l.xhr) {
								delete l.xhr
							}
						}, 1)
					})
				}
			},
			_ajaxSettings: function(g, j, i) {
				var h = this;
				return {
					url: g.attr("href"),
					beforeSend: function(l, k) {
						return h._trigger("beforeLoad", j, c.extend({
							jqXHR: l,
							ajaxSettings: k
						}, i))
					}
				}
			},
			_getPanelForTab: function(g) {
				var h = c(g).attr("aria-controls");
				return this.element.find(this._sanitizeSelector("#" + h))
			}
		});
		if (c.uiBackCompat !== false) {
			c.ui.tabs.prototype._ui = function(h, g) {
				return {
					tab: h,
					panel: g,
					index: this.anchors.index(h)
				}
			}
			;
			c.widget("ui.tabs", c.ui.tabs, {
				url: function(h, g) {
					this.anchors.eq(h).attr("href", g)
				}
			});
			c.widget("ui.tabs", c.ui.tabs, {
				options: {
					ajaxOptions: null,
					cache: false
				},
				_create: function() {
					this._super();
					var g = this;
					this._on({
						tabsbeforeload: function(h, i) {
							if (c.data(i.tab[0], "cache.tabs")) {
								h.preventDefault();
								return
							}
							i.jqXHR.success(function() {
								if (g.options.cache) {
									c.data(i.tab[0], "cache.tabs", true)
								}
							})
						}
					})
				},
				_ajaxSettings: function(h, i, j) {
					var g = this.options.ajaxOptions;
					return c.extend({}, g, {
						error: function(m, k) {
							try {
								g.error(m, k, j.tab.closest("li").index(), j.tab[0])
							} catch (l) {}
						}
					}, this._superApply(arguments))
				},
				_setOption: function(g, h) {
					if (g === "cache" && h === false) {
						this.anchors.removeData("cache.tabs")
					}
					this._super(g, h)
				},
				_destroy: function() {
					this.anchors.removeData("cache.tabs");
					this._super()
				},
				url: function(g) {
					this.anchors.eq(g).removeData("cache.tabs");
					this._superApply(arguments)
				}
			});
			c.widget("ui.tabs", c.ui.tabs, {
				abort: function() {
					if (this.xhr) {
						this.xhr.abort()
					}
				}
			});
			c.widget("ui.tabs", c.ui.tabs, {
				options: {
					spinner: "<em>Loading&#8230;</em>"
				},
				_create: function() {
					this._super();
					this._on({
						tabsbeforeload: function(i, j) {
							if (i.target !== this.element[0] || !this.options.spinner) {
								return
							}
							var h = j.tab.find("span")
							  , g = h.html();
							h.html(this.options.spinner);
							j.jqXHR.complete(function() {
								h.html(g)
							})
						}
					})
				}
			});
			c.widget("ui.tabs", c.ui.tabs, {
				options: {
					enable: null,
					disable: null
				},
				enable: function(i) {
					var h = this.options, g;
					if (i && h.disabled === true || (c.isArray(h.disabled) && c.inArray(i, h.disabled) !== -1)) {
						g = true
					}
					this._superApply(arguments);
					if (g) {
						this._trigger("enable", null, this._ui(this.anchors[i], this.panels[i]))
					}
				},
				disable: function(i) {
					var h = this.options, g;
					if (i && h.disabled === false || (c.isArray(h.disabled) && c.inArray(i, h.disabled) === -1)) {
						g = true
					}
					this._superApply(arguments);
					if (g) {
						this._trigger("disable", null, this._ui(this.anchors[i], this.panels[i]))
					}
				}
			});
			c.widget("ui.tabs", c.ui.tabs, {
				options: {
					add: null,
					remove: null,
					tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
				},
				add: function(l, k, j) {
					if (j === e) {
						j = this.anchors.length
					}
					var m, h, i = this.options, g = c(i.tabTemplate.replace(/#\{href\}/g, l).replace(/#\{label\}/g, k)), n = !l.indexOf("#") ? l.replace("#", "") : this._tabId(g);
					g.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy", true);
					g.attr("aria-controls", n);
					m = j >= this.tabs.length;
					h = this.element.find("#" + n);
					if (!h.length) {
						h = this._createPanel(n);
						if (m) {
							if (j > 0) {
								h.insertAfter(this.panels.eq(-1))
							} else {
								h.appendTo(this.element)
							}
						} else {
							h.insertBefore(this.panels[j])
						}
					}
					h.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide();
					if (m) {
						g.appendTo(this.tablist)
					} else {
						g.insertBefore(this.tabs[j])
					}
					i.disabled = c.map(i.disabled, function(o) {
						return o >= j ? ++o : o
					});
					this.refresh();
					if (this.tabs.length === 1 && i.active === false) {
						this.option("active", 0)
					}
					this._trigger("add", null, this._ui(this.anchors[j], this.panels[j]));
					return this
				},
				remove: function(i) {
					i = this._getIndex(i);
					var h = this.options
					  , j = this.tabs.eq(i).remove()
					  , g = this._getPanelForTab(j).remove();
					if (j.hasClass("ui-tabs-active") && this.anchors.length > 2) {
						this._activate(i + (i + 1 < this.anchors.length ? 1 : -1))
					}
					h.disabled = c.map(c.grep(h.disabled, function(k) {
						return k !== i
					}), function(k) {
						return k >= i ? --k : k
					});
					this.refresh();
					this._trigger("remove", null, this._ui(j.find("a")[0], g[0]));
					return this
				}
			});
			c.widget("ui.tabs", c.ui.tabs, {
				length: function() {
					return this.anchors.length
				}
			});
			c.widget("ui.tabs", c.ui.tabs, {
				options: {
					idPrefix: "ui-tabs-"
				},
				_tabId: function(h) {
					var g = h.is("li") ? h.find("a[href]") : h;
					g = g[0];
					return c(g).closest("li").attr("aria-controls") || g.title && g.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF\-]/g, "") || this.options.idPrefix + d()
				}
			});
			c.widget("ui.tabs", c.ui.tabs, {
				options: {
					panelTemplate: "<div></div>"
				},
				_createPanel: function(g) {
					return c(this.options.panelTemplate).attr("id", g).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", true)
				}
			});
			c.widget("ui.tabs", c.ui.tabs, {
				_create: function() {
					var g = this.options;
					if (g.active === null && g.selected !== e) {
						g.active = g.selected === -1 ? false : g.selected
					}
					this._super();
					g.selected = g.active;
					if (g.selected === false) {
						g.selected = -1
					}
				},
				_setOption: function(h, i) {
					if (h !== "selected") {
						return this._super(h, i)
					}
					var g = this.options;
					this._super("active", i === -1 ? false : i);
					g.selected = g.active;
					if (g.selected === false) {
						g.selected = -1
					}
				},
				_eventHandler: function() {
					this._superApply(arguments);
					this.options.selected = this.options.active;
					if (this.options.selected === false) {
						this.options.selected = -1
					}
				}
			});
			c.widget("ui.tabs", c.ui.tabs, {
				options: {
					show: null,
					select: null
				},
				_create: function() {
					this._super();
					if (this.options.active !== false) {
						this._trigger("show", null, this._ui(this.active.find(".ui-tabs-anchor")[0], this._getPanelForTab(this.active)[0]))
					}
				},
				_trigger: function(j, k, l) {
					var i, g, h = this._superApply(arguments);
					if (!h) {
						return false
					}
					if (j === "beforeActivate") {
						i = l.newTab.length ? l.newTab : l.oldTab;
						g = l.newPanel.length ? l.newPanel : l.oldPanel;
						h = this._super("select", k, {
							tab: i.find(".ui-tabs-anchor")[0],
							panel: g[0],
							index: i.closest("li").index()
						})
					} else {
						if (j === "activate" && l.newTab.length) {
							h = this._super("show", k, {
								tab: l.newTab.find(".ui-tabs-anchor")[0],
								panel: l.newPanel[0],
								index: l.newTab.closest("li").index()
							})
						}
					}
					return h
				}
			});
			c.widget("ui.tabs", c.ui.tabs, {
				select: function(g) {
					g = this._getIndex(g);
					if (g === -1) {
						if (this.options.collapsible && this.options.selected !== -1) {
							g = this.options.selected
						} else {
							return
						}
					}
					this.anchors.eq(g).trigger(this.options.event + this.eventNamespace)
				}
			});
			(function() {
				var g = 0;
				c.widget("ui.tabs", c.ui.tabs, {
					options: {
						cookie: null
					},
					_create: function() {
						var h = this.options, i;
						if (h.active == null && h.cookie) {
							i = parseInt(this._cookie(), 10);
							if (i === -1) {
								i = false
							}
							h.active = i
						}
						this._super()
					},
					_cookie: function(i) {
						var h = [this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + (++g))];
						if (arguments.length) {
							h.push(i === false ? -1 : i);
							h.push(this.options.cookie)
						}
						return c.cookie.apply(null, h)
					},
					_refresh: function() {
						this._super();
						if (this.options.cookie) {
							this._cookie(this.options.active, this.options.cookie)
						}
					},
					_eventHandler: function() {
						this._superApply(arguments);
						if (this.options.cookie) {
							this._cookie(this.options.active, this.options.cookie)
						}
					},
					_destroy: function() {
						this._super();
						if (this.options.cookie) {
							this._cookie(null, this.options.cookie)
						}
					}
				})
			}
			)();
			c.widget("ui.tabs", c.ui.tabs, {
				_trigger: function(h, i, j) {
					var g = c.extend({}, j);
					if (h === "load") {
						g.panel = g.panel[0];
						g.tab = g.tab.find(".ui-tabs-anchor")[0]
					}
					return this._super(h, i, g)
				}
			});
			c.widget("ui.tabs", c.ui.tabs, {
				options: {
					fx: null
				},
				_getFx: function() {
					var h, g, i = this.options.fx;
					if (i) {
						if (c.isArray(i)) {
							h = i[0];
							g = i[1]
						} else {
							h = g = i
						}
					}
					return i ? {
						show: g,
						hide: h
					} : null
				},
				_toggle: function(n, m) {
					var l = this
					  , g = m.newPanel
					  , j = m.oldPanel
					  , k = this._getFx();
					if (!k) {
						return this._super(n, m)
					}
					l.running = true;
					function i() {
						l.running = false;
						l._trigger("activate", n, m)
					}
					function h() {
						m.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
						if (g.length && k.show) {
							g.animate(k.show, k.show.duration, function() {
								i()
							})
						} else {
							g.show();
							i()
						}
					}
					if (j.length && k.hide) {
						j.animate(k.hide, k.hide.duration, function() {
							m.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
							h()
						})
					} else {
						m.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
						j.hide();
						h()
					}
				}
			})
		}
	}
	)(jQuery);
	(function(d) {
		var b = 0;
		function c(f, g) {
			var e = (f.attr("aria-describedby") || "").split(/\s+/);
			e.push(g);
			f.data("ui-tooltip-id", g).attr("aria-describedby", d.trim(e.join(" ")))
		}
		function a(g) {
			var h = g.data("ui-tooltip-id")
			  , f = (g.attr("aria-describedby") || "").split(/\s+/)
			  , e = d.inArray(h, f);
			if (e !== -1) {
				f.splice(e, 1)
			}
			g.removeData("ui-tooltip-id");
			f = d.trim(f.join(" "));
			if (f) {
				g.attr("aria-describedby", f)
			} else {
				g.removeAttr("aria-describedby")
			}
		}
		d.widget("ui.tooltip", {
			version: "1.9.2",
			options: {
				content: function() {
					return d(this).attr("title")
				},
				hide: true,
				items: "[title]:not([disabled])",
				position: {
					my: "left top+15",
					at: "left bottom",
					collision: "flipfit flip"
				},
				show: true,
				tooltipClass: null,
				track: false,
				close: null,
				open: null
			},
			_create: function() {
				this._on({
					mouseover: "open",
					focusin: "open"
				});
				this.tooltips = {};
				this.parents = {};
				if (this.options.disabled) {
					this._disable()
				}
			},
			_setOption: function(e, g) {
				var f = this;
				if (e === "disabled") {
					this[g ? "_disable" : "_enable"]();
					this.options[e] = g;
					return
				}
				this._super(e, g);
				if (e === "content") {
					d.each(this.tooltips, function(i, h) {
						f._updateContent(h)
					})
				}
			},
			_disable: function() {
				var e = this;
				d.each(this.tooltips, function(h, f) {
					var g = d.Event("blur");
					g.target = g.currentTarget = f[0];
					e.close(g, true)
				});
				this.element.find(this.options.items).andSelf().each(function() {
					var f = d(this);
					if (f.is("[title]")) {
						f.data("ui-tooltip-title", f.attr("title")).attr("title", "")
					}
				})
			},
			_enable: function() {
				this.element.find(this.options.items).andSelf().each(function() {
					var e = d(this);
					if (e.data("ui-tooltip-title")) {
						e.attr("title", e.data("ui-tooltip-title"))
					}
				})
			},
			open: function(f) {
				var e = this
				  , g = d(f ? f.target : this.element).closest(this.options.items);
				if (!g.length || g.data("ui-tooltip-id")) {
					return
				}
				if (g.attr("title")) {
					g.data("ui-tooltip-title", g.attr("title"))
				}
				g.data("ui-tooltip-open", true);
				if (f && f.type === "mouseover") {
					g.parents().each(function() {
						var i = d(this), h;
						if (i.data("ui-tooltip-open")) {
							h = d.Event("blur");
							h.target = h.currentTarget = this;
							e.close(h, true)
						}
						if (i.attr("title")) {
							i.uniqueId();
							e.parents[this.id] = {
								element: this,
								title: i.attr("title")
							};
							i.attr("title", "")
						}
					})
				}
				this._updateContent(g, f)
			},
			_updateContent: function(j, i) {
				var h, e = this.options.content, g = this, f = i ? i.type : null;
				if (typeof e === "string") {
					return this._open(i, j, e)
				}
				h = e.call(j[0], function(k) {
					if (!j.data("ui-tooltip-open")) {
						return
					}
					g._delay(function() {
						if (i) {
							i.type = f
						}
						this._open(i, j, k)
					})
				});
				if (h) {
					this._open(i, j, h)
				}
			},
			_open: function(i, k, h) {
				var j, g, f, l = d.extend({}, this.options.position);
				if (!h) {
					return
				}
				j = this._find(k);
				if (j.length) {
					j.find(".ui-tooltip-content").html(h);
					return
				}
				if (k.is("[title]")) {
					if (i && i.type === "mouseover") {
						k.attr("title", "")
					} else {
						k.removeAttr("title")
					}
				}
				j = this._tooltip(k);
				c(k, j.attr("id"));
				j.find(".ui-tooltip-content").html(h);
				function e(m) {
					l.of = m;
					if (j.is(":hidden")) {
						return
					}
					j.position(l)
				}
				if (this.options.track && i && /^mouse/.test(i.type)) {
					this._on(this.document, {
						mousemove: e
					});
					e(i)
				} else {
					j.position(d.extend({
						of: k
					}, this.options.position))
				}
				j.hide();
				this._show(j, this.options.show);
				if (this.options.show && this.options.show.delay) {
					f = setInterval(function() {
						if (j.is(":visible")) {
							e(l.of);
							clearInterval(f)
						}
					}, d.fx.interval)
				}
				this._trigger("open", i, {
					tooltip: j
				});
				g = {
					keyup: function(m) {
						if (m.keyCode === d.ui.keyCode.ESCAPE) {
							var n = d.Event(m);
							n.currentTarget = k[0];
							this.close(n, true)
						}
					},
					remove: function() {
						this._removeTooltip(j)
					}
				};
				if (!i || i.type === "mouseover") {
					g.mouseleave = "close"
				}
				if (!i || i.type === "focusin") {
					g.focusout = "close"
				}
				this._on(true, k, g)
			},
			close: function(f) {
				var e = this
				  , h = d(f ? f.currentTarget : this.element)
				  , g = this._find(h);
				if (this.closing) {
					return
				}
				if (h.data("ui-tooltip-title")) {
					h.attr("title", h.data("ui-tooltip-title"))
				}
				a(h);
				g.stop(true);
				this._hide(g, this.options.hide, function() {
					e._removeTooltip(d(this))
				});
				h.removeData("ui-tooltip-open");
				this._off(h, "mouseleave focusout keyup");
				if (h[0] !== this.element[0]) {
					this._off(h, "remove")
				}
				this._off(this.document, "mousemove");
				if (f && f.type === "mouseleave") {
					d.each(this.parents, function(j, i) {
						d(i.element).attr("title", i.title);
						delete e.parents[j]
					})
				}
				this.closing = true;
				this._trigger("close", f, {
					tooltip: g
				});
				this.closing = false
			},
			_tooltip: function(e) {
				var g = "ui-tooltip-" + b++
				  , f = d("<div>").attr({
					id: g,
					role: "tooltip"
				}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
				d("<div>").addClass("ui-tooltip-content").appendTo(f);
				f.appendTo(this.document[0].body);
				if (d.fn.bgiframe) {
					f.bgiframe()
				}
				this.tooltips[g] = e;
				return f
			},
			_find: function(e) {
				var f = e.data("ui-tooltip-id");
				return f ? d("#" + f) : d()
			},
			_removeTooltip: function(e) {
				e.remove();
				delete this.tooltips[e.attr("id")]
			},
			_destroy: function() {
				var e = this;
				d.each(this.tooltips, function(h, f) {
					var g = d.Event("blur");
					g.target = g.currentTarget = f[0];
					e.close(g, true);
					d("#" + h).remove();
					if (f.data("ui-tooltip-title")) {
						f.attr("title", f.data("ui-tooltip-title"));
						f.removeData("ui-tooltip-title")
					}
				})
			}
		})
	}(jQuery));
	/*!	Zoom 1.7.20	license: MIT	http://www.jacklmoore.com/zoom*/
	(function(a) {
		var b = {
			url: false,
			callback: false,
			target: false,
			duration: 120,
			on: "mouseover",
			touch: true,
			onZoomIn: false,
			onZoomOut: false,
			magnify: 1.2
		};
		a.zoom = function(o, c, j, h) {
			var m, p, g, d, f, l, i, e = a(o), k = e.css("position"), n = a(c);
			o.style.position = /(absolute|fixed)/.test(k) ? k : "relative";
			o.style.overflow = "hidden";
			j.style.width = j.style.height = "";
			a(j).addClass("zoomImg").css({
				position: "absolute",
				top: 0,
				left: 0,
				opacity: 0,
				width: j.width * h,
				height: j.height * h,
				border: "none",
				maxWidth: "none",
				maxHeight: "none",
				background: "white"
			}).appendTo(o);
			return {
				init: function() {
					p = e.outerWidth();
					m = e.outerHeight();
					if (c === o) {
						d = p;
						g = m
					} else {
						d = n.outerWidth();
						g = n.outerHeight()
					}
					f = (j.width - p) / d;
					l = (j.height - m) / g;
					i = n.offset()
				},
				move: function(s) {
					var r = (s.pageX - i.left)
					  , q = (s.pageY - i.top);
					q = Math.max(Math.min(q, g), 0);
					r = Math.max(Math.min(r, d), 0);
					j.style.left = (r * -f) + "px";
					j.style.top = (q * -l) + "px"
				}
			}
		}
		;
		a.fn.zoom = function(c) {
			return this.each(function() {
				var g = a.extend({}, b, c || {})
				  , k = g.target && a(g.target)[0] || this
				  , d = this
				  , j = a(d)
				  , h = document.createElement("img")
				  , e = a(h)
				  , i = "mousemove.zoom"
				  , m = false
				  , f = false;
				if (!g.url) {
					var l = d.querySelector("img");
					if (l) {
						g.url = l.getAttribute("data-src") || l.currentSrc || l.src
					}
					if (!g.url) {
						return
					}
				}
				j.one("zoom.destroy", function(n, o) {
					j.off(".zoom");
					k.style.position = n;
					k.style.overflow = o;
					h.onload = null;
					e.remove()
				}
				.bind(this, k.style.position, k.style.overflow));
				h.onload = function() {
					var o = a.zoom(k, d, h, g.magnify);
					function p(q) {
						o.init();
						o.move(q);
						e.stop().fadeTo(a.support.opacity ? g.duration : 0, 1, a.isFunction(g.onZoomIn) ? g.onZoomIn.call(h) : false)
					}
					function n() {
						e.stop().fadeTo(g.duration, 0, a.isFunction(g.onZoomOut) ? g.onZoomOut.call(h) : false)
					}
					if (g.on === "grab") {
						j.on("mousedown.zoom", function(q) {
							if (q.which === 1) {
								a(document).one("mouseup.zoom", function() {
									n();
									a(document).off(i, o.move)
								});
								p(q);
								a(document).on(i, o.move);
								q.preventDefault()
							}
						})
					} else {
						if (g.on === "click") {
							j.on("click.zoom", function(q) {
								if (m) {
									return
								} else {
									m = true;
									p(q);
									a(document).on(i, o.move);
									a(document).one("click.zoom", function() {
										n();
										m = false;
										a(document).off(i, o.move)
									});
									return false
								}
							})
						} else {
							if (g.on === "toggle") {
								j.on("click.zoom", function(q) {
									if (m) {
										n()
									} else {
										p(q)
									}
									m = !m
								})
							} else {
								if (g.on === "mouseover") {
									o.init();
									j.on("mouseenter.zoom", p).on("mouseleave.zoom", n).on(i, o.move)
								}
							}
						}
					}
					if (g.touch) {
						j.on("touchstart.zoom", function(q) {
							q.preventDefault();
							if (f) {
								f = false;
								n()
							} else {
								f = true;
								p(q.originalEvent.touches[0] || q.originalEvent.changedTouches[0])
							}
						}).on("touchmove.zoom", function(q) {
							q.preventDefault();
							o.move(q.originalEvent.touches[0] || q.originalEvent.changedTouches[0])
						}).on("touchend.zoom", function(q) {
							q.preventDefault();
							if (f) {
								f = false;
								n()
							}
						})
					}
					if (a.isFunction(g.callback)) {
						g.callback.call(h)
					}
				}
				;
				h.setAttribute("role", "presentation");
				h.src = g.url
			})
		}
		;
		a.fn.zoom.defaults = b
	}(window.jQuery));
	(function(a) {
		if (typeof define === "function" && define.amd) {
			define(["../widgets/datepicker"], a)
		} else {
			a(jQuery.datepicker)
		}
	}(function(a) {
		a.regional.fr = {
			closeText: "Fermer",
			prevText: "PrÃƒÂ©cÃƒÂ©dent",
			nextText: "Suivant",
			currentText: "Aujourd'hui",
			monthNames: ["janvier", "fÃƒÂ©vrier", "mars", "avril", "mai", "juin", "juillet", "aoÃƒÂ»t", "septembre", "octobre", "novembre", "dÃƒÂ©cembre"],
			monthNamesShort: ["janv.", "fÃƒÂ©vr.", "mars", "avr.", "mai", "juin", "juil.", "aoÃƒÂ»t", "sept.", "oct.", "nov.", "dÃƒÂ©c."],
			dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
			dayNamesShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
			dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
			weekHeader: "Sem.",
			dateFormat: "dd/mm/yy",
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ""
		};
		a.setDefaults(a.regional.fr);
		return a.regional.fr
	}));
