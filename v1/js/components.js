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
	}(typeof window !== "undefined" ? window : this, function(a5, av) {
		var aP = [];
		var P = aP.slice;
		var az = aP.concat;
		var x = aP.push;
		var bU = aP.indexOf;
		var ac = {};
		var y = ac.toString;
		var K = ac.hasOwnProperty;
		var D = {};
		var ai = "1.11.3"
		  , bI = function(e, b6) {
			return new bI.fn.init(e,b6)
		}
		  , E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
		  , bS = /^-ms-/
		  , aW = /-([\da-z])/gi
		  , O = function(e, b6) {
			return b6.toUpperCase()
		};
		bI.fn = bI.prototype = {
			jquery: ai,
			constructor: bI,
			selector: "",
			length: 0,
			toArray: function() {
				return P.call(this)
			},
			get: function(e) {
				return e != null ? (e < 0 ? this[e + this.length] : this[e]) : P.call(this)
			},
			pushStack: function(e) {
				var b6 = bI.merge(this.constructor(), e);
				b6.prevObject = this;
				b6.context = this.context;
				return b6
			},
			each: function(b6, e) {
				return bI.each(this, b6, e)
			},
			map: function(e) {
				return this.pushStack(bI.map(this, function(b7, b6) {
					return e.call(b7, b6, b7)
				}))
			},
			slice: function() {
				return this.pushStack(P.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(b7) {
				var e = this.length
				  , b6 = +b7 + (b7 < 0 ? e : 0);
				return this.pushStack(b6 >= 0 && b6 < e ? [this[b6]] : [])
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: x,
			sort: aP.sort,
			splice: aP.splice
		};
		bI.extend = bI.fn.extend = function() {
			var e, cb, b6, b7, ce, cc, ca = arguments[0] || {}, b9 = 1, b8 = arguments.length, cd = false;
			if (typeof ca === "boolean") {
				cd = ca;
				ca = arguments[b9] || {};
				b9++
			}
			if (typeof ca !== "object" && !bI.isFunction(ca)) {
				ca = {}
			}
			if (b9 === b8) {
				ca = this;
				b9--
			}
			for (; b9 < b8; b9++) {
				if ((ce = arguments[b9]) != null) {
					for (b7 in ce) {
						e = ca[b7];
						b6 = ce[b7];
						if (ca === b6) {
							continue
						}
						if (cd && b6 && (bI.isPlainObject(b6) || (cb = bI.isArray(b6)))) {
							if (cb) {
								cb = false;
								cc = e && bI.isArray(e) ? e : []
							} else {
								cc = e && bI.isPlainObject(e) ? e : {}
							}
							ca[b7] = bI.extend(cd, cc, b6)
						} else {
							if (b6 !== undefined) {
								ca[b7] = b6
							}
						}
					}
				}
			}
			return ca
		}
		;
		bI.extend({
			expando: "jQuery" + (ai + Math.random()).replace(/\D/g, ""),
			isReady: true,
			error: function(e) {
				throw new Error(e)
			},
			noop: function() {},
			isFunction: function(e) {
				return bI.type(e) === "function"
			},
			isArray: Array.isArray || function(e) {
				return bI.type(e) === "array"
			}
			,
			isWindow: function(e) {
				return e != null && e == e.window
			},
			isNumeric: function(e) {
				return !bI.isArray(e) && (e - parseFloat(e) + 1) >= 0
			},
			isEmptyObject: function(b6) {
				var e;
				for (e in b6) {
					return false
				}
				return true
			},
			isPlainObject: function(b8) {
				var b6;
				if (!b8 || bI.type(b8) !== "object" || b8.nodeType || bI.isWindow(b8)) {
					return false
				}
				try {
					if (b8.constructor && !K.call(b8, "constructor") && !K.call(b8.constructor.prototype, "isPrototypeOf")) {
						return false
					}
				} catch (b7) {
					return false
				}
				if (D.ownLast) {
					for (b6 in b8) {
						return K.call(b8, b6)
					}
				}
				for (b6 in b8) {}
				return b6 === undefined || K.call(b8, b6)
			},
			type: function(e) {
				if (e == null) {
					return e + ""
				}
				return typeof e === "object" || typeof e === "function" ? ac[y.call(e)] || "object" : typeof e
			},
			globalEval: function(e) {
				if (e && bI.trim(e)) {
					(a5.execScript || function(b6) {
						a5["eval"].call(a5, b6)
					}
					)(e)
				}
			},
			camelCase: function(e) {
				return e.replace(bS, "ms-").replace(aW, O)
			},
			nodeName: function(b6, e) {
				return b6.nodeName && b6.nodeName.toLowerCase() === e.toLowerCase()
			},
			each: function(ca, cb, b6) {
				var b9, b7 = 0, b8 = ca.length, e = ad(ca);
				if (b6) {
					if (e) {
						for (; b7 < b8; b7++) {
							b9 = cb.apply(ca[b7], b6);
							if (b9 === false) {
								break
							}
						}
					} else {
						for (b7 in ca) {
							b9 = cb.apply(ca[b7], b6);
							if (b9 === false) {
								break
							}
						}
					}
				} else {
					if (e) {
						for (; b7 < b8; b7++) {
							b9 = cb.call(ca[b7], b7, ca[b7]);
							if (b9 === false) {
								break
							}
						}
					} else {
						for (b7 in ca) {
							b9 = cb.call(ca[b7], b7, ca[b7]);
							if (b9 === false) {
								break
							}
						}
					}
				}
				return ca
			},
			trim: function(e) {
				return e == null ? "" : (e + "").replace(E, "")
			},
			makeArray: function(e, b7) {
				var b6 = b7 || [];
				if (e != null) {
					if (ad(Object(e))) {
						bI.merge(b6, typeof e === "string" ? [e] : e)
					} else {
						x.call(b6, e)
					}
				}
				return b6
			},
			inArray: function(b8, b6, b7) {
				var e;
				if (b6) {
					if (bU) {
						return bU.call(b6, b8, b7)
					}
					e = b6.length;
					b7 = b7 ? b7 < 0 ? Math.max(0, e + b7) : b7 : 0;
					for (; b7 < e; b7++) {
						if (b7 in b6 && b6[b7] === b8) {
							return b7
						}
					}
				}
				return -1
			},
			merge: function(b9, b7) {
				var e = +b7.length
				  , b6 = 0
				  , b8 = b9.length;
				while (b6 < e) {
					b9[b8++] = b7[b6++]
				}
				if (e !== e) {
					while (b7[b6] !== undefined) {
						b9[b8++] = b7[b6++]
					}
				}
				b9.length = b8;
				return b9
			},
			grep: function(e, cc, b9) {
				var cb, b8 = [], b6 = 0, b7 = e.length, ca = !b9;
				for (; b6 < b7; b6++) {
					cb = !cc(e[b6], b6);
					if (cb !== ca) {
						b8.push(e[b6])
					}
				}
				return b8
			},
			map: function(b7, cc, e) {
				var cb, b9 = 0, ca = b7.length, b6 = ad(b7), b8 = [];
				if (b6) {
					for (; b9 < ca; b9++) {
						cb = cc(b7[b9], b9, e);
						if (cb != null) {
							b8.push(cb)
						}
					}
				} else {
					for (b9 in b7) {
						cb = cc(b7[b9], b9, e);
						if (cb != null) {
							b8.push(cb)
						}
					}
				}
				return az.apply([], b8)
			},
			guid: 1,
			proxy: function(b9, b8) {
				var e, b7, b6;
				if (typeof b8 === "string") {
					b6 = b9[b8];
					b8 = b9;
					b9 = b6
				}
				if (!bI.isFunction(b9)) {
					return undefined
				}
				e = P.call(arguments, 2);
				b7 = function() {
					return b9.apply(b8 || this, e.concat(P.call(arguments)))
				}
				;
				b7.guid = b9.guid = b9.guid || bI.guid++;
				return b7
			},
			now: function() {
				return +(new Date())
			},
			support: D
		});
		bI.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(b6, e) {
			ac["[object " + e + "]"] = e.toLowerCase()
		});
		function ad(b7) {
			var b6 = "length"in b7 && b7.length
			  , e = bI.type(b7);
			if (e === "function" || bI.isWindow(b7)) {
				return false
			}
			if (b7.nodeType === 1 && b6) {
				return true
			}
			return e === "array" || b6 === 0 || typeof b6 === "number" && b6 > 0 && (b6 - 1)in b7
		}
		var n = /*! * Sizzle CSS Selector Engine v2.2.0-pre * http://sizzlejs.com/ * * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors * Released under the MIT license * http://jquery.org/license * * Date: 2014-12-16 */
		(function(de) {
			var cy, dh, cn, cH, cK, ci, cW, dg, dm, cI, cX, cZ, cC, co, c8, c3, df, ce, cF, da = "sizzle" + 1 * new Date(), cJ = de.document, di = 0, c4 = 0, b9 = cA(), c9 = cA(), cG = cA(), cE = function(dn, e) {
				if (dn === e) {
					cX = true
				}
				return 0
			}, cQ = 1 << 31, cO = ({}).hasOwnProperty, dc = [], dd = dc.pop, cM = dc.push, b7 = dc.push, cm = dc.slice, cd = function(dq, dp) {
				var dn = 0
				  , e = dq.length;
				for (; dn < e; dn++) {
					if (dq[dn] === dp) {
						return dn
					}
				}
				return -1
			}, b8 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", cp = "[\\x20\\t\\r\\n\\f]", b6 = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", cL = b6.replace("w", "w#"), c6 = "\\[" + cp + "*(" + b6 + ")(?:" + cp + "*([*^$|!~]?=)" + cp + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + cL + "))|)" + cp + "*\\]", ck = ":(" + b6 + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + c6 + ")*)|.*)\\)|)", cu = new RegExp(cp + "+","g"), cr = new RegExp("^" + cp + "+|((?:^|[^\\\\])(?:\\\\.)*)" + cp + "+$","g"), cv = new RegExp("^" + cp + "*," + cp + "*"), cB = new RegExp("^" + cp + "*([>+~]|" + cp + ")" + cp + "*"), ct = new RegExp("=" + cp + "*([^\\]'\"]*?)" + cp + "*\\]","g"), cS = new RegExp(ck), cU = new RegExp("^" + cL + "$"), c2 = {
				ID: new RegExp("^#(" + b6 + ")"),
				CLASS: new RegExp("^\\.(" + b6 + ")"),
				TAG: new RegExp("^(" + b6.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + c6),
				PSEUDO: new RegExp("^" + ck),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + cp + "*(even|odd|(([+-]|)(\\d*)n|)" + cp + "*(?:([+-]|)" + cp + "*(\\d+)|))" + cp + "*\\)|)","i"),
				bool: new RegExp("^(?:" + b8 + ")$","i"),
				needsContext: new RegExp("^" + cp + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + cp + "*((?:-\\d)?\\d*)" + cp + "*\\)|)(?=[^-]|$)","i")
			}, cc = /^(?:input|select|textarea|button)$/i, cl = /^h\d$/i, cP = /^[^{]+\{\s*\[native \w/, cR = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, c1 = /[+~]/, cN = /'|\\/g, cs = new RegExp("\\\\([\\da-f]{1,6}" + cp + "?|(" + cp + ")|.)","ig"), c5 = function(e, dq, dn) {
				var dp = "0x" + dq - 65536;
				return dp !== dp || dn ? dq : dp < 0 ? String.fromCharCode(dp + 65536) : String.fromCharCode(dp >> 10 | 55296, dp & 1023 | 56320)
			}, dl = function() {
				cZ()
			};
			try {
				b7.apply((dc = cm.call(cJ.childNodes)), cJ.childNodes);
				dc[cJ.childNodes.length].nodeType
			} catch (cD) {
				b7 = {
					apply: dc.length ? function(dn, e) {
						cM.apply(dn, cm.call(e))
					}
					: function(dq, dp) {
						var e = dq.length
						  , dn = 0;
						while ((dq[e++] = dp[dn++])) {}
						dq.length = e - 1
					}
				}
			}
			function cw(dv, dn, dz, dB) {
				var dA, ds, dt, dx, dy, dr, dq, e, dp, dw;
				if ((dn ? dn.ownerDocument || dn : cJ) !== cC) {
					cZ(dn)
				}
				dn = dn || cC;
				dz = dz || [];
				dx = dn.nodeType;
				if (typeof dv !== "string" || !dv || dx !== 1 && dx !== 9 && dx !== 11) {
					return dz
				}
				if (!dB && c8) {
					if (dx !== 11 && (dA = cR.exec(dv))) {
						if ((dt = dA[1])) {
							if (dx === 9) {
								ds = dn.getElementById(dt);
								if (ds && ds.parentNode) {
									if (ds.id === dt) {
										dz.push(ds);
										return dz
									}
								} else {
									return dz
								}
							} else {
								if (dn.ownerDocument && (ds = dn.ownerDocument.getElementById(dt)) && cF(dn, ds) && ds.id === dt) {
									dz.push(ds);
									return dz
								}
							}
						} else {
							if (dA[2]) {
								b7.apply(dz, dn.getElementsByTagName(dv));
								return dz
							} else {
								if ((dt = dA[3]) && dh.getElementsByClassName) {
									b7.apply(dz, dn.getElementsByClassName(dt));
									return dz
								}
							}
						}
					}
					if (dh.qsa && (!c3 || !c3.test(dv))) {
						e = dq = da;
						dp = dn;
						dw = dx !== 1 && dv;
						if (dx === 1 && dn.nodeName.toLowerCase() !== "object") {
							dr = ci(dv);
							if ((dq = dn.getAttribute("id"))) {
								e = dq.replace(cN, "\\$&")
							} else {
								dn.setAttribute("id", e)
							}
							e = "[id='" + e + "'] ";
							dy = dr.length;
							while (dy--) {
								dr[dy] = e + ch(dr[dy])
							}
							dp = c1.test(dv) && cT(dn.parentNode) || dn;
							dw = dr.join(",")
						}
						if (dw) {
							try {
								b7.apply(dz, dp.querySelectorAll(dw));
								return dz
							} catch (du) {} finally {
								if (!dq) {
									dn.removeAttribute("id")
								}
							}
						}
					}
				}
				return dg(dv.replace(cr, "$1"), dn, dz, dB)
			}
			function cA() {
				var dn = [];
				function e(dp, dq) {
					if (dn.push(dp + " ") > cn.cacheLength) {
						delete e[dn.shift()]
					}
					return (e[dp + " "] = dq)
				}
				return e
			}
			function cj(e) {
				e[da] = true;
				return e
			}
			function cf(dn) {
				var dq = cC.createElement("div");
				try {
					return !!dn(dq)
				} catch (dp) {
					return false
				} finally {
					if (dq.parentNode) {
						dq.parentNode.removeChild(dq)
					}
					dq = null
				}
			}
			function dj(dn, dq) {
				var e = dn.split("|")
				  , dp = dn.length;
				while (dp--) {
					cn.attrHandle[e[dp]] = dq
				}
			}
			function ca(dn, e) {
				var dq = e && dn
				  , dp = dq && dn.nodeType === 1 && e.nodeType === 1 && (~e.sourceIndex || cQ) - (~dn.sourceIndex || cQ);
				if (dp) {
					return dp
				}
				if (dq) {
					while ((dq = dq.nextSibling)) {
						if (dq === e) {
							return -1
						}
					}
				}
				return dn ? 1 : -1
			}
			function cx(e) {
				return function(dp) {
					var dn = dp.nodeName.toLowerCase();
					return dn === "input" && dp.type === e
				}
			}
			function cb(e) {
				return function(dp) {
					var dn = dp.nodeName.toLowerCase();
					return (dn === "input" || dn === "button") && dp.type === e
				}
			}
			function c7(e) {
				return cj(function(dn) {
					dn = +dn;
					return cj(function(dp, dt) {
						var dr, dq = e([], dp.length, dn), ds = dq.length;
						while (ds--) {
							if (dp[(dr = dq[ds])]) {
								dp[dr] = !(dt[dr] = dp[dr])
							}
						}
					})
				})
			}
			function cT(e) {
				return e && typeof e.getElementsByTagName !== "undefined" && e
			}
			dh = cw.support = {};
			cK = cw.isXML = function(e) {
				var dn = e && (e.ownerDocument || e).documentElement;
				return dn ? dn.nodeName !== "HTML" : false
			}
			;
			cZ = cw.setDocument = function(dp) {
				var e, dn, dq = dp ? dp.ownerDocument || dp : cJ;
				if (dq === cC || dq.nodeType !== 9 || !dq.documentElement) {
					return cC
				}
				cC = dq;
				co = dq.documentElement;
				dn = dq.defaultView;
				if (dn && dn !== dn.top) {
					if (dn.addEventListener) {
						dn.addEventListener("unload", dl, false)
					} else {
						if (dn.attachEvent) {
							dn.attachEvent("onunload", dl)
						}
					}
				}
				c8 = !cK(dq);
				dh.attributes = cf(function(dr) {
					dr.className = "i";
					return !dr.getAttribute("className")
				});
				dh.getElementsByTagName = cf(function(dr) {
					dr.appendChild(dq.createComment(""));
					return !dr.getElementsByTagName("*").length
				});
				dh.getElementsByClassName = cP.test(dq.getElementsByClassName);
				dh.getById = cf(function(dr) {
					co.appendChild(dr).id = da;
					return !dq.getElementsByName || !dq.getElementsByName(da).length
				});
				if (dh.getById) {
					cn.find.ID = function(dt, ds) {
						if (typeof ds.getElementById !== "undefined" && c8) {
							var dr = ds.getElementById(dt);
							return dr && dr.parentNode ? [dr] : []
						}
					}
					;
					cn.filter.ID = function(ds) {
						var dr = ds.replace(cs, c5);
						return function(dt) {
							return dt.getAttribute("id") === dr
						}
					}
				} else {
					delete cn.find.ID;
					cn.filter.ID = function(ds) {
						var dr = ds.replace(cs, c5);
						return function(du) {
							var dt = typeof du.getAttributeNode !== "undefined" && du.getAttributeNode("id");
							return dt && dt.value === dr
						}
					}
				}
				cn.find.TAG = dh.getElementsByTagName ? function(dr, ds) {
					if (typeof ds.getElementsByTagName !== "undefined") {
						return ds.getElementsByTagName(dr)
					} else {
						if (dh.qsa) {
							return ds.querySelectorAll(dr)
						}
					}
				}
				: function(dr, dv) {
					var dw, du = [], dt = 0, ds = dv.getElementsByTagName(dr);
					if (dr === "*") {
						while ((dw = ds[dt++])) {
							if (dw.nodeType === 1) {
								du.push(dw)
							}
						}
						return du
					}
					return ds
				}
				;
				cn.find.CLASS = dh.getElementsByClassName && function(ds, dr) {
					if (c8) {
						return dr.getElementsByClassName(ds)
					}
				}
				;
				df = [];
				c3 = [];
				if ((dh.qsa = cP.test(dq.querySelectorAll))) {
					cf(function(dr) {
						co.appendChild(dr).innerHTML = "<a id='" + da + "'></a><select id='" + da + "-\f]' msallowcapture=''><option selected=''></option></select>";
						if (dr.querySelectorAll("[msallowcapture^='']").length) {
							c3.push("[*^$]=" + cp + "*(?:''|\"\")")
						}
						if (!dr.querySelectorAll("[selected]").length) {
							c3.push("\\[" + cp + "*(?:value|" + b8 + ")")
						}
						if (!dr.querySelectorAll("[id~=" + da + "-]").length) {
							c3.push("~=")
						}
						if (!dr.querySelectorAll(":checked").length) {
							c3.push(":checked")
						}
						if (!dr.querySelectorAll("a#" + da + "+*").length) {
							c3.push(".#.+[+~]")
						}
					});
					cf(function(ds) {
						var dr = dq.createElement("input");
						dr.setAttribute("type", "hidden");
						ds.appendChild(dr).setAttribute("name", "D");
						if (ds.querySelectorAll("[name=d]").length) {
							c3.push("name" + cp + "*[*^$|!~]?=")
						}
						if (!ds.querySelectorAll(":enabled").length) {
							c3.push(":enabled", ":disabled")
						}
						ds.querySelectorAll("*,:x");
						c3.push(",.*:")
					})
				}
				if ((dh.matchesSelector = cP.test((ce = co.matches || co.webkitMatchesSelector || co.mozMatchesSelector || co.oMatchesSelector || co.msMatchesSelector)))) {
					cf(function(dr) {
						dh.disconnectedMatch = ce.call(dr, "div");
						ce.call(dr, "[s!='']:x");
						df.push("!=", ck)
					})
				}
				c3 = c3.length && new RegExp(c3.join("|"));
				df = df.length && new RegExp(df.join("|"));
				e = cP.test(co.compareDocumentPosition);
				cF = e || cP.test(co.contains) ? function(ds, dr) {
					var du = ds.nodeType === 9 ? ds.documentElement : ds
					  , dt = dr && dr.parentNode;
					return ds === dt || !!(dt && dt.nodeType === 1 && (du.contains ? du.contains(dt) : ds.compareDocumentPosition && ds.compareDocumentPosition(dt) & 16))
				}
				: function(ds, dr) {
					if (dr) {
						while ((dr = dr.parentNode)) {
							if (dr === ds) {
								return true
							}
						}
					}
					return false
				}
				;
				cE = e ? function(ds, dr) {
					if (ds === dr) {
						cX = true;
						return 0
					}
					var dt = !ds.compareDocumentPosition - !dr.compareDocumentPosition;
					if (dt) {
						return dt
					}
					dt = (ds.ownerDocument || ds) === (dr.ownerDocument || dr) ? ds.compareDocumentPosition(dr) : 1;
					if (dt & 1 || (!dh.sortDetached && dr.compareDocumentPosition(ds) === dt)) {
						if (ds === dq || ds.ownerDocument === cJ && cF(cJ, ds)) {
							return -1
						}
						if (dr === dq || dr.ownerDocument === cJ && cF(cJ, dr)) {
							return 1
						}
						return cI ? (cd(cI, ds) - cd(cI, dr)) : 0
					}
					return dt & 4 ? -1 : 1
				}
				: function(ds, dr) {
					if (ds === dr) {
						cX = true;
						return 0
					}
					var dy, dv = 0, dx = ds.parentNode, du = dr.parentNode, dt = [ds], dw = [dr];
					if (!dx || !du) {
						return ds === dq ? -1 : dr === dq ? 1 : dx ? -1 : du ? 1 : cI ? (cd(cI, ds) - cd(cI, dr)) : 0
					} else {
						if (dx === du) {
							return ca(ds, dr)
						}
					}
					dy = ds;
					while ((dy = dy.parentNode)) {
						dt.unshift(dy)
					}
					dy = dr;
					while ((dy = dy.parentNode)) {
						dw.unshift(dy)
					}
					while (dt[dv] === dw[dv]) {
						dv++
					}
					return dv ? ca(dt[dv], dw[dv]) : dt[dv] === cJ ? -1 : dw[dv] === cJ ? 1 : 0
				}
				;
				return dq
			}
			;
			cw.matches = function(dn, e) {
				return cw(dn, null, null, e)
			}
			;
			cw.matchesSelector = function(dp, dr) {
				if ((dp.ownerDocument || dp) !== cC) {
					cZ(dp)
				}
				dr = dr.replace(ct, "='$1']");
				if (dh.matchesSelector && c8 && (!df || !df.test(dr)) && (!c3 || !c3.test(dr))) {
					try {
						var dn = ce.call(dp, dr);
						if (dn || dh.disconnectedMatch || dp.document && dp.document.nodeType !== 11) {
							return dn
						}
					} catch (dq) {}
				}
				return cw(dr, cC, null, [dp]).length > 0
			}
			;
			cw.contains = function(e, dn) {
				if ((e.ownerDocument || e) !== cC) {
					cZ(e)
				}
				return cF(e, dn)
			}
			;
			cw.attr = function(dp, e) {
				if ((dp.ownerDocument || dp) !== cC) {
					cZ(dp)
				}
				var dn = cn.attrHandle[e.toLowerCase()]
				  , dq = dn && cO.call(cn.attrHandle, e.toLowerCase()) ? dn(dp, e, !c8) : undefined;
				return dq !== undefined ? dq : dh.attributes || !c8 ? dp.getAttribute(e) : (dq = dp.getAttributeNode(e)) && dq.specified ? dq.value : null
			}
			;
			cw.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}
			;
			cw.uniqueSort = function(dp) {
				var dq, dr = [], e = 0, dn = 0;
				cX = !dh.detectDuplicates;
				cI = !dh.sortStable && dp.slice(0);
				dp.sort(cE);
				if (cX) {
					while ((dq = dp[dn++])) {
						if (dq === dp[dn]) {
							e = dr.push(dn)
						}
					}
					while (e--) {
						dp.splice(dr[e], 1)
					}
				}
				cI = null;
				return dp
			}
			;
			cH = cw.getText = function(dr) {
				var dq, dn = "", dp = 0, e = dr.nodeType;
				if (!e) {
					while ((dq = dr[dp++])) {
						dn += cH(dq)
					}
				} else {
					if (e === 1 || e === 9 || e === 11) {
						if (typeof dr.textContent === "string") {
							return dr.textContent
						} else {
							for (dr = dr.firstChild; dr; dr = dr.nextSibling) {
								dn += cH(dr)
							}
						}
					} else {
						if (e === 3 || e === 4) {
							return dr.nodeValue
						}
					}
				}
				return dn
			}
			;
			cn = cw.selectors = {
				cacheLength: 50,
				createPseudo: cj,
				match: c2,
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
						e[1] = e[1].replace(cs, c5);
						e[3] = (e[3] || e[4] || e[5] || "").replace(cs, c5);
						if (e[2] === "~=") {
							e[3] = " " + e[3] + " "
						}
						return e.slice(0, 4)
					},
					CHILD: function(e) {
						e[1] = e[1].toLowerCase();
						if (e[1].slice(0, 3) === "nth") {
							if (!e[3]) {
								cw.error(e[0])
							}
							e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
							e[5] = +((e[7] + e[8]) || e[3] === "odd")
						} else {
							if (e[3]) {
								cw.error(e[0])
							}
						}
						return e
					},
					PSEUDO: function(dn) {
						var e, dp = !dn[6] && dn[2];
						if (c2.CHILD.test(dn[0])) {
							return null
						}
						if (dn[3]) {
							dn[2] = dn[4] || dn[5] || ""
						} else {
							if (dp && cS.test(dp) && (e = ci(dp, true)) && (e = dp.indexOf(")", dp.length - e) - dp.length)) {
								dn[0] = dn[0].slice(0, e);
								dn[2] = dp.slice(0, e)
							}
						}
						return dn.slice(0, 3)
					}
				},
				filter: {
					TAG: function(dn) {
						var e = dn.replace(cs, c5).toLowerCase();
						return dn === "*" ? function() {
							return true
						}
						: function(dp) {
							return dp.nodeName && dp.nodeName.toLowerCase() === e
						}
					},
					CLASS: function(e) {
						var dn = b9[e + " "];
						return dn || (dn = new RegExp("(^|" + cp + ")" + e + "(" + cp + "|$)")) && b9(e, function(dp) {
							return dn.test(typeof dp.className === "string" && dp.className || typeof dp.getAttribute !== "undefined" && dp.getAttribute("class") || "")
						})
					},
					ATTR: function(dp, dn, e) {
						return function(dr) {
							var dq = cw.attr(dr, dp);
							if (dq == null) {
								return dn === "!="
							}
							if (!dn) {
								return true
							}
							dq += "";
							return dn === "=" ? dq === e : dn === "!=" ? dq !== e : dn === "^=" ? e && dq.indexOf(e) === 0 : dn === "*=" ? e && dq.indexOf(e) > -1 : dn === "$=" ? e && dq.slice(-e.length) === e : dn === "~=" ? (" " + dq.replace(cu, " ") + " ").indexOf(e) > -1 : dn === "|=" ? dq === e || dq.slice(0, e.length + 1) === e + "-" : false
						}
					},
					CHILD: function(dn, dr, dq, ds, dp) {
						var du = dn.slice(0, 3) !== "nth"
						  , e = dn.slice(-4) !== "last"
						  , dt = dr === "of-type";
						return ds === 1 && dp === 0 ? function(dv) {
							return !!dv.parentNode
						}
						: function(dB, dz, dE) {
							var dv, dH, dC, dG, dD, dy, dA = du !== e ? "nextSibling" : "previousSibling", dF = dB.parentNode, dx = dt && dB.nodeName.toLowerCase(), dw = !dE && !dt;
							if (dF) {
								if (du) {
									while (dA) {
										dC = dB;
										while ((dC = dC[dA])) {
											if (dt ? dC.nodeName.toLowerCase() === dx : dC.nodeType === 1) {
												return false
											}
										}
										dy = dA = dn === "only" && !dy && "nextSibling"
									}
									return true
								}
								dy = [e ? dF.firstChild : dF.lastChild];
								if (e && dw) {
									dH = dF[da] || (dF[da] = {});
									dv = dH[dn] || [];
									dD = dv[0] === di && dv[1];
									dG = dv[0] === di && dv[2];
									dC = dD && dF.childNodes[dD];
									while ((dC = ++dD && dC && dC[dA] || (dG = dD = 0) || dy.pop())) {
										if (dC.nodeType === 1 && ++dG && dC === dB) {
											dH[dn] = [di, dD, dG];
											break
										}
									}
								} else {
									if (dw && (dv = (dB[da] || (dB[da] = {}))[dn]) && dv[0] === di) {
										dG = dv[1]
									} else {
										while ((dC = ++dD && dC && dC[dA] || (dG = dD = 0) || dy.pop())) {
											if ((dt ? dC.nodeName.toLowerCase() === dx : dC.nodeType === 1) && ++dG) {
												if (dw) {
													(dC[da] || (dC[da] = {}))[dn] = [di, dG]
												}
												if (dC === dB) {
													break
												}
											}
										}
									}
								}
								dG -= dp;
								return dG === ds || (dG % ds === 0 && dG / ds >= 0)
							}
						}
					},
					PSEUDO: function(dq, dp) {
						var e, dn = cn.pseudos[dq] || cn.setFilters[dq.toLowerCase()] || cw.error("unsupported pseudo: " + dq);
						if (dn[da]) {
							return dn(dp)
						}
						if (dn.length > 1) {
							e = [dq, dq, "", dp];
							return cn.setFilters.hasOwnProperty(dq.toLowerCase()) ? cj(function(dt, dv) {
								var ds, dr = dn(dt, dp), du = dr.length;
								while (du--) {
									ds = cd(dt, dr[du]);
									dt[ds] = !(dv[ds] = dr[du])
								}
							}) : function(dr) {
								return dn(dr, 0, e)
							}
						}
						return dn
					}
				},
				pseudos: {
					not: cj(function(e) {
						var dn = []
						  , dp = []
						  , dq = cW(e.replace(cr, "$1"));
						return dq[da] ? cj(function(ds, dx, dv, dt) {
							var dw, dr = dq(ds, null, dt, []), du = ds.length;
							while (du--) {
								if ((dw = dr[du])) {
									ds[du] = !(dx[du] = dw)
								}
							}
						}) : function(dt, ds, dr) {
							dn[0] = dt;
							dq(dn, null, dr, dp);
							dn[0] = null;
							return !dp.pop()
						}
					}),
					has: cj(function(e) {
						return function(dn) {
							return cw(e, dn).length > 0
						}
					}),
					contains: cj(function(e) {
						e = e.replace(cs, c5);
						return function(dn) {
							return (dn.textContent || dn.innerText || cH(dn)).indexOf(e) > -1
						}
					}),
					lang: cj(function(e) {
						if (!cU.test(e || "")) {
							cw.error("unsupported lang: " + e)
						}
						e = e.replace(cs, c5).toLowerCase();
						return function(dp) {
							var dn;
							do {
								if ((dn = c8 ? dp.lang : dp.getAttribute("xml:lang") || dp.getAttribute("lang"))) {
									dn = dn.toLowerCase();
									return dn === e || dn.indexOf(e + "-") === 0
								}
							} while ((dp = dp.parentNode) && dp.nodeType === 1);return false
						}
					}),
					target: function(e) {
						var dn = de.location && de.location.hash;
						return dn && dn.slice(1) === e.id
					},
					root: function(e) {
						return e === co
					},
					focus: function(e) {
						return e === cC.activeElement && (!cC.hasFocus || cC.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return e.disabled === false
					},
					disabled: function(e) {
						return e.disabled === true
					},
					checked: function(e) {
						var dn = e.nodeName.toLowerCase();
						return (dn === "input" && !!e.checked) || (dn === "option" && !!e.selected)
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
						return !cn.pseudos.empty(e)
					},
					header: function(e) {
						return cl.test(e.nodeName)
					},
					input: function(e) {
						return cc.test(e.nodeName)
					},
					button: function(dn) {
						var e = dn.nodeName.toLowerCase();
						return e === "input" && dn.type === "button" || e === "button"
					},
					text: function(dn) {
						var e;
						return dn.nodeName.toLowerCase() === "input" && dn.type === "text" && ((e = dn.getAttribute("type")) == null || e.toLowerCase() === "text")
					},
					first: c7(function() {
						return [0]
					}),
					last: c7(function(e, dn) {
						return [dn - 1]
					}),
					eq: c7(function(e, dp, dn) {
						return [dn < 0 ? dn + dp : dn]
					}),
					even: c7(function(e, dp) {
						var dn = 0;
						for (; dn < dp; dn += 2) {
							e.push(dn)
						}
						return e
					}),
					odd: c7(function(e, dp) {
						var dn = 1;
						for (; dn < dp; dn += 2) {
							e.push(dn)
						}
						return e
					}),
					lt: c7(function(e, dq, dp) {
						var dn = dp < 0 ? dp + dq : dp;
						for (; --dn >= 0; ) {
							e.push(dn)
						}
						return e
					}),
					gt: c7(function(e, dq, dp) {
						var dn = dp < 0 ? dp + dq : dp;
						for (; ++dn < dq; ) {
							e.push(dn)
						}
						return e
					})
				}
			};
			cn.pseudos.nth = cn.pseudos.eq;
			for (cy in {
				radio: true,
				checkbox: true,
				file: true,
				password: true,
				image: true
			}) {
				cn.pseudos[cy] = cx(cy)
			}
			for (cy in {
				submit: true,
				reset: true
			}) {
				cn.pseudos[cy] = cb(cy)
			}
			function cV() {}
			cV.prototype = cn.filters = cn.pseudos;
			cn.setFilters = new cV();
			ci = cw.tokenize = function(dr, dw) {
				var dn, ds, du, dv, dt, dp, e, dq = c9[dr + " "];
				if (dq) {
					return dw ? 0 : dq.slice(0)
				}
				dt = dr;
				dp = [];
				e = cn.preFilter;
				while (dt) {
					if (!dn || (ds = cv.exec(dt))) {
						if (ds) {
							dt = dt.slice(ds[0].length) || dt
						}
						dp.push((du = []))
					}
					dn = false;
					if ((ds = cB.exec(dt))) {
						dn = ds.shift();
						du.push({
							value: dn,
							type: ds[0].replace(cr, " ")
						});
						dt = dt.slice(dn.length)
					}
					for (dv in cn.filter) {
						if ((ds = c2[dv].exec(dt)) && (!e[dv] || (ds = e[dv](ds)))) {
							dn = ds.shift();
							du.push({
								value: dn,
								type: dv,
								matches: ds
							});
							dt = dt.slice(dn.length)
						}
					}
					if (!dn) {
						break
					}
				}
				return dw ? dt.length : dt ? cw.error(dr) : c9(dr, dp).slice(0)
			}
			;
			function ch(dq) {
				var dp = 0
				  , dn = dq.length
				  , e = "";
				for (; dp < dn; dp++) {
					e += dq[dp].value
				}
				return e
			}
			function cq(dr, dp, dq) {
				var e = dp.dir
				  , ds = dq && e === "parentNode"
				  , dn = c4++;
				return dp.first ? function(dv, du, dt) {
					while ((dv = dv[e])) {
						if (dv.nodeType === 1 || ds) {
							return dr(dv, du, dt)
						}
					}
				}
				: function(dx, dv, du) {
					var dy, dw, dt = [di, dn];
					if (du) {
						while ((dx = dx[e])) {
							if (dx.nodeType === 1 || ds) {
								if (dr(dx, dv, du)) {
									return true
								}
							}
						}
					} else {
						while ((dx = dx[e])) {
							if (dx.nodeType === 1 || ds) {
								dw = dx[da] || (dx[da] = {});
								if ((dy = dw[e]) && dy[0] === di && dy[1] === dn) {
									return (dt[2] = dy[2])
								} else {
									dw[e] = dt;
									if ((dt[2] = dr(dx, dv, du))) {
										return true
									}
								}
							}
						}
					}
				}
			}
			function dk(e) {
				return e.length > 1 ? function(dr, dq, dn) {
					var dp = e.length;
					while (dp--) {
						if (!e[dp](dr, dq, dn)) {
							return false
						}
					}
					return true
				}
				: e[0]
			}
			function cz(dn, dr, dq) {
				var dp = 0
				  , e = dr.length;
				for (; dp < e; dp++) {
					cw(dn, dr[dp], dq)
				}
				return dq
			}
			function c0(e, dn, dp, dq, dt) {
				var dr, dw = [], ds = 0, du = e.length, dv = dn != null;
				for (; ds < du; ds++) {
					if ((dr = e[ds])) {
						if (!dp || dp(dr, dq, dt)) {
							dw.push(dr);
							if (dv) {
								dn.push(ds)
							}
						}
					}
				}
				return dw
			}
			function cg(dp, dn, dr, dq, ds, e) {
				if (dq && !dq[da]) {
					dq = cg(dq)
				}
				if (ds && !ds[da]) {
					ds = cg(ds, e)
				}
				return cj(function(dD, dA, dv, dC) {
					var dF, dB, dx, dw = [], dE = [], du = dA.length, dt = dD || cz(dn || "*", dv.nodeType ? [dv] : dv, []), dy = dp && (dD || !dn) ? c0(dt, dw, dp, dv, dC) : dt, dz = dr ? ds || (dD ? dp : du || dq) ? [] : dA : dy;
					if (dr) {
						dr(dy, dz, dv, dC)
					}
					if (dq) {
						dF = c0(dz, dE);
						dq(dF, [], dv, dC);
						dB = dF.length;
						while (dB--) {
							if ((dx = dF[dB])) {
								dz[dE[dB]] = !(dy[dE[dB]] = dx)
							}
						}
					}
					if (dD) {
						if (ds || dp) {
							if (ds) {
								dF = [];
								dB = dz.length;
								while (dB--) {
									if ((dx = dz[dB])) {
										dF.push((dy[dB] = dx))
									}
								}
								ds(null, (dz = []), dF, dC)
							}
							dB = dz.length;
							while (dB--) {
								if ((dx = dz[dB]) && (dF = ds ? cd(dD, dx) : dw[dB]) > -1) {
									dD[dF] = !(dA[dF] = dx)
								}
							}
						}
					} else {
						dz = c0(dz === dA ? dz.splice(du, dz.length) : dz);
						if (ds) {
							ds(null, dA, dz, dC)
						} else {
							b7.apply(dA, dz)
						}
					}
				})
			}
			function db(dt) {
				var dn, dr, dp, ds = dt.length, dw = cn.relative[dt[0].type], dx = dw || cn.relative[" "], dq = dw ? 1 : 0, du = cq(function(dy) {
					return dy === dn
				}, dx, true), dv = cq(function(dy) {
					return cd(dn, dy) > -1
				}, dx, true), e = [function(dB, dA, dz) {
					var dy = (!dw && (dz || dA !== dm)) || ((dn = dA).nodeType ? du(dB, dA, dz) : dv(dB, dA, dz));
					dn = null;
					return dy
				}
				];
				for (; dq < ds; dq++) {
					if ((dr = cn.relative[dt[dq].type])) {
						e = [cq(dk(e), dr)]
					} else {
						dr = cn.filter[dt[dq].type].apply(null, dt[dq].matches);
						if (dr[da]) {
							dp = ++dq;
							for (; dp < ds; dp++) {
								if (cn.relative[dt[dp].type]) {
									break
								}
							}
							return cg(dq > 1 && dk(e), dq > 1 && ch(dt.slice(0, dq - 1).concat({
								value: dt[dq - 2].type === " " ? "*" : ""
							})).replace(cr, "$1"), dr, dq < dp && db(dt.slice(dq, dp)), dp < ds && db((dt = dt.slice(dp))), dp < ds && ch(dt))
						}
						e.push(dr)
					}
				}
				return dk(e)
			}
			function cY(dq, dp) {
				var e = dp.length > 0
				  , dr = dq.length > 0
				  , dn = function(dB, dv, dA, dz, dE) {
					var dw, dx, dC, dG = 0, dy = "0", ds = dB && [], dH = [], dF = dm, du = dB || dr && cn.find.TAG("*", dE), dt = (di += dF == null ? 1 : Math.random() || 0.1), dD = du.length;
					if (dE) {
						dm = dv !== cC && dv
					}
					for (; dy !== dD && (dw = du[dy]) != null; dy++) {
						if (dr && dw) {
							dx = 0;
							while ((dC = dq[dx++])) {
								if (dC(dw, dv, dA)) {
									dz.push(dw);
									break
								}
							}
							if (dE) {
								di = dt
							}
						}
						if (e) {
							if ((dw = !dC && dw)) {
								dG--
							}
							if (dB) {
								ds.push(dw)
							}
						}
					}
					dG += dy;
					if (e && dy !== dG) {
						dx = 0;
						while ((dC = dp[dx++])) {
							dC(ds, dH, dv, dA)
						}
						if (dB) {
							if (dG > 0) {
								while (dy--) {
									if (!(ds[dy] || dH[dy])) {
										dH[dy] = dd.call(dz)
									}
								}
							}
							dH = c0(dH)
						}
						b7.apply(dz, dH);
						if (dE && !dB && dH.length > 0 && (dG + dp.length) > 1) {
							cw.uniqueSort(dz)
						}
					}
					if (dE) {
						di = dt;
						dm = dF
					}
					return ds
				};
				return e ? cj(dn) : dn
			}
			cW = cw.compile = function(e, dp) {
				var dq, dn = [], ds = [], dr = cG[e + " "];
				if (!dr) {
					if (!dp) {
						dp = ci(e)
					}
					dq = dp.length;
					while (dq--) {
						dr = db(dp[dq]);
						if (dr[da]) {
							dn.push(dr)
						} else {
							ds.push(dr)
						}
					}
					dr = cG(e, cY(ds, dn));
					dr.selector = e
				}
				return dr
			}
			;
			dg = cw.select = function(dp, e, dq, dt) {
				var dr, dw, dn, dx, du, dv = typeof dp === "function" && dp, ds = !dt && ci((dp = dv.selector || dp));
				dq = dq || [];
				if (ds.length === 1) {
					dw = ds[0] = ds[0].slice(0);
					if (dw.length > 2 && (dn = dw[0]).type === "ID" && dh.getById && e.nodeType === 9 && c8 && cn.relative[dw[1].type]) {
						e = (cn.find.ID(dn.matches[0].replace(cs, c5), e) || [])[0];
						if (!e) {
							return dq
						} else {
							if (dv) {
								e = e.parentNode
							}
						}
						dp = dp.slice(dw.shift().value.length)
					}
					dr = c2.needsContext.test(dp) ? 0 : dw.length;
					while (dr--) {
						dn = dw[dr];
						if (cn.relative[(dx = dn.type)]) {
							break
						}
						if ((du = cn.find[dx])) {
							if ((dt = du(dn.matches[0].replace(cs, c5), c1.test(dw[0].type) && cT(e.parentNode) || e))) {
								dw.splice(dr, 1);
								dp = dt.length && ch(dw);
								if (!dp) {
									b7.apply(dq, dt);
									return dq
								}
								break
							}
						}
					}
				}
				(dv || cW(dp, ds))(dt, e, !c8, dq, c1.test(dp) && cT(e.parentNode) || e);
				return dq
			}
			;
			dh.sortStable = da.split("").sort(cE).join("") === da;
			dh.detectDuplicates = !!cX;
			cZ();
			dh.sortDetached = cf(function(e) {
				return e.compareDocumentPosition(cC.createElement("div")) & 1
			});
			if (!cf(function(e) {
				e.innerHTML = "<a href='#'></a>";
				return e.firstChild.getAttribute("href") === "#"
			})) {
				dj("type|href|height|width", function(dn, e, dp) {
					if (!dp) {
						return dn.getAttribute(e, e.toLowerCase() === "type" ? 1 : 2)
					}
				})
			}
			if (!dh.attributes || !cf(function(e) {
				e.innerHTML = "<input/>";
				e.firstChild.setAttribute("value", "");
				return e.firstChild.getAttribute("value") === ""
			})) {
				dj("value", function(dn, e, dp) {
					if (!dp && dn.nodeName.toLowerCase() === "input") {
						return dn.defaultValue
					}
				})
			}
			if (!cf(function(e) {
				return e.getAttribute("disabled") == null
			})) {
				dj(b8, function(dn, e, dq) {
					var dp;
					if (!dq) {
						return dn[e] === true ? e.toLowerCase() : (dp = dn.getAttributeNode(e)) && dp.specified ? dp.value : null
					}
				})
			}
			return cw
		}
		)(a5);
		bI.find = n;
		bI.expr = n.selectors;
		bI.expr[":"] = bI.expr.pseudos;
		bI.unique = n.uniqueSort;
		bI.text = n.getText;
		bI.isXMLDoc = n.isXML;
		bI.contains = n.contains;
		var A = bI.expr.match.needsContext;
		var a = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
		var aL = /^.[^:#\[\.,]*$/;
		function aR(b7, e, b6) {
			if (bI.isFunction(e)) {
				return bI.grep(b7, function(b9, b8) {
					return !!e.call(b9, b8, b9) !== b6
				})
			}
			if (e.nodeType) {
				return bI.grep(b7, function(b8) {
					return (b8 === e) !== b6
				})
			}
			if (typeof e === "string") {
				if (aL.test(e)) {
					return bI.filter(e, b7, b6)
				}
				e = bI.filter(e, b7)
			}
			return bI.grep(b7, function(b8) {
				return (bI.inArray(b8, e) >= 0) !== b6
			})
		}
		bI.filter = function(b8, e, b7) {
			var b6 = e[0];
			if (b7) {
				b8 = ":not(" + b8 + ")"
			}
			return e.length === 1 && b6.nodeType === 1 ? bI.find.matchesSelector(b6, b8) ? [b6] : [] : bI.find.matches(b8, bI.grep(e, function(b9) {
				return b9.nodeType === 1
			}))
		}
		;
		bI.fn.extend({
			find: function(b6) {
				var b9, b8 = [], b7 = this, e = b7.length;
				if (typeof b6 !== "string") {
					return this.pushStack(bI(b6).filter(function() {
						for (b9 = 0; b9 < e; b9++) {
							if (bI.contains(b7[b9], this)) {
								return true
							}
						}
					}))
				}
				for (b9 = 0; b9 < e; b9++) {
					bI.find(b6, b7[b9], b8)
				}
				b8 = this.pushStack(e > 1 ? bI.unique(b8) : b8);
				b8.selector = this.selector ? this.selector + " " + b6 : b6;
				return b8
			},
			filter: function(e) {
				return this.pushStack(aR(this, e || [], false))
			},
			not: function(e) {
				return this.pushStack(aR(this, e || [], true))
			},
			is: function(e) {
				return !!aR(this, typeof e === "string" && A.test(e) ? bI(e) : e || [], false).length
			}
		});
		var z, o = a5.document, bt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, bV = bI.fn.init = function(e, b7) {
			var b6, b8;
			if (!e) {
				return this
			}
			if (typeof e === "string") {
				if (e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3) {
					b6 = [null, e, null]
				} else {
					b6 = bt.exec(e)
				}
				if (b6 && (b6[1] || !b7)) {
					if (b6[1]) {
						b7 = b7 instanceof bI ? b7[0] : b7;
						bI.merge(this, bI.parseHTML(b6[1], b7 && b7.nodeType ? b7.ownerDocument || b7 : o, true));
						if (a.test(b6[1]) && bI.isPlainObject(b7)) {
							for (b6 in b7) {
								if (bI.isFunction(this[b6])) {
									this[b6](b7[b6])
								} else {
									this.attr(b6, b7[b6])
								}
							}
						}
						return this
					} else {
						b8 = o.getElementById(b6[2]);
						if (b8 && b8.parentNode) {
							if (b8.id !== b6[2]) {
								return z.find(e)
							}
							this.length = 1;
							this[0] = b8
						}
						this.context = o;
						this.selector = e;
						return this
					}
				} else {
					if (!b7 || b7.jquery) {
						return (b7 || z).find(e)
					} else {
						return this.constructor(b7).find(e)
					}
				}
			} else {
				if (e.nodeType) {
					this.context = this[0] = e;
					this.length = 1;
					return this
				} else {
					if (bI.isFunction(e)) {
						return typeof z.ready !== "undefined" ? z.ready(e) : e(bI)
					}
				}
			}
			if (e.selector !== undefined) {
				this.selector = e.selector;
				this.context = e.context
			}
			return bI.makeArray(e, this)
		}
		;
		bV.prototype = bI.fn;
		z = bI(o);
		var bv = /^(?:parents|prev(?:Until|All))/
		  , bz = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
		bI.extend({
			dir: function(b7, b6, b9) {
				var e = []
				  , b8 = b7[b6];
				while (b8 && b8.nodeType !== 9 && (b9 === undefined || b8.nodeType !== 1 || !bI(b8).is(b9))) {
					if (b8.nodeType === 1) {
						e.push(b8)
					}
					b8 = b8[b6]
				}
				return e
			},
			sibling: function(b7, b6) {
				var e = [];
				for (; b7; b7 = b7.nextSibling) {
					if (b7.nodeType === 1 && b7 !== b6) {
						e.push(b7)
					}
				}
				return e
			}
		});
		bI.fn.extend({
			has: function(b8) {
				var b7, b6 = bI(b8, this), e = b6.length;
				return this.filter(function() {
					for (b7 = 0; b7 < e; b7++) {
						if (bI.contains(this, b6[b7])) {
							return true
						}
					}
				})
			},
			closest: function(b9, b8) {
				var ca, b7 = 0, b6 = this.length, e = [], cb = A.test(b9) || typeof b9 !== "string" ? bI(b9, b8 || this.context) : 0;
				for (; b7 < b6; b7++) {
					for (ca = this[b7]; ca && ca !== b8; ca = ca.parentNode) {
						if (ca.nodeType < 11 && (cb ? cb.index(ca) > -1 : ca.nodeType === 1 && bI.find.matchesSelector(ca, b9))) {
							e.push(ca);
							break
						}
					}
				}
				return this.pushStack(e.length > 1 ? bI.unique(e) : e)
			},
			index: function(e) {
				if (!e) {
					return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1
				}
				if (typeof e === "string") {
					return bI.inArray(this[0], bI(e))
				}
				return bI.inArray(e.jquery ? e[0] : e, this)
			},
			add: function(e, b6) {
				return this.pushStack(bI.unique(bI.merge(this.get(), bI(e, b6))))
			},
			addBack: function(e) {
				return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
			}
		});
		function aY(b6, e) {
			do {
				b6 = b6[e]
			} while (b6 && b6.nodeType !== 1);return b6
		}
		bI.each({
			parent: function(b6) {
				var e = b6.parentNode;
				return e && e.nodeType !== 11 ? e : null
			},
			parents: function(e) {
				return bI.dir(e, "parentNode")
			},
			parentsUntil: function(b6, e, b7) {
				return bI.dir(b6, "parentNode", b7)
			},
			next: function(e) {
				return aY(e, "nextSibling")
			},
			prev: function(e) {
				return aY(e, "previousSibling")
			},
			nextAll: function(e) {
				return bI.dir(e, "nextSibling")
			},
			prevAll: function(e) {
				return bI.dir(e, "previousSibling")
			},
			nextUntil: function(b6, e, b7) {
				return bI.dir(b6, "nextSibling", b7)
			},
			prevUntil: function(b6, e, b7) {
				return bI.dir(b6, "previousSibling", b7)
			},
			siblings: function(e) {
				return bI.sibling((e.parentNode || {}).firstChild, e)
			},
			children: function(e) {
				return bI.sibling(e.firstChild)
			},
			contents: function(e) {
				return bI.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : bI.merge([], e.childNodes)
			}
		}, function(e, b6) {
			bI.fn[e] = function(b9, b7) {
				var b8 = bI.map(this, b6, b9);
				if (e.slice(-5) !== "Until") {
					b7 = b9
				}
				if (b7 && typeof b7 === "string") {
					b8 = bI.filter(b7, b8)
				}
				if (this.length > 1) {
					if (!bz[e]) {
						b8 = bI.unique(b8)
					}
					if (bv.test(e)) {
						b8 = b8.reverse()
					}
				}
				return this.pushStack(b8)
			}
		});
		var aF = (/\S+/g);
		var b2 = {};
		function af(b6) {
			var e = b2[b6] = {};
			bI.each(b6.match(aF) || [], function(b8, b7) {
				e[b7] = true
			});
			return e
		}
		bI.Callbacks = function(cf) {
			cf = typeof cf === "string" ? (b2[cf] || af(cf)) : bI.extend({}, cf);
			var b9, b8, e, ca, cb, b7, cc = [], cd = !cf.once && [], b6 = function(cg) {
				b8 = cf.memory && cg;
				e = true;
				cb = b7 || 0;
				b7 = 0;
				ca = cc.length;
				b9 = true;
				for (; cc && cb < ca; cb++) {
					if (cc[cb].apply(cg[0], cg[1]) === false && cf.stopOnFalse) {
						b8 = false;
						break
					}
				}
				b9 = false;
				if (cc) {
					if (cd) {
						if (cd.length) {
							b6(cd.shift())
						}
					} else {
						if (b8) {
							cc = []
						} else {
							ce.disable()
						}
					}
				}
			}, ce = {
				add: function() {
					if (cc) {
						var ch = cc.length;
						(function cg(ci) {
							bI.each(ci, function(ck, cj) {
								var cl = bI.type(cj);
								if (cl === "function") {
									if (!cf.unique || !ce.has(cj)) {
										cc.push(cj)
									}
								} else {
									if (cj && cj.length && cl !== "string") {
										cg(cj)
									}
								}
							})
						}
						)(arguments);
						if (b9) {
							ca = cc.length
						} else {
							if (b8) {
								b7 = ch;
								b6(b8)
							}
						}
					}
					return this
				},
				remove: function() {
					if (cc) {
						bI.each(arguments, function(ci, cg) {
							var ch;
							while ((ch = bI.inArray(cg, cc, ch)) > -1) {
								cc.splice(ch, 1);
								if (b9) {
									if (ch <= ca) {
										ca--
									}
									if (ch <= cb) {
										cb--
									}
								}
							}
						})
					}
					return this
				},
				has: function(cg) {
					return cg ? bI.inArray(cg, cc) > -1 : !!(cc && cc.length)
				},
				empty: function() {
					cc = [];
					ca = 0;
					return this
				},
				disable: function() {
					cc = cd = b8 = undefined;
					return this
				},
				disabled: function() {
					return !cc
				},
				lock: function() {
					cd = undefined;
					if (!b8) {
						ce.disable()
					}
					return this
				},
				locked: function() {
					return !cd
				},
				fireWith: function(ch, cg) {
					if (cc && (!e || cd)) {
						cg = cg || [];
						cg = [ch, cg.slice ? cg.slice() : cg];
						if (b9) {
							cd.push(cg)
						} else {
							b6(cg)
						}
					}
					return this
				},
				fire: function() {
					ce.fireWith(this, arguments);
					return this
				},
				fired: function() {
					return !!e
				}
			};
			return ce
		}
		;
		bI.extend({
			Deferred: function(b7) {
				var b6 = [["resolve", "done", bI.Callbacks("once memory"), "resolved"], ["reject", "fail", bI.Callbacks("once memory"), "rejected"], ["notify", "progress", bI.Callbacks("memory")]]
				  , b8 = "pending"
				  , b9 = {
					state: function() {
						return b8
					},
					always: function() {
						e.done(arguments).fail(arguments);
						return this
					},
					then: function() {
						var ca = arguments;
						return bI.Deferred(function(cb) {
							bI.each(b6, function(cd, cc) {
								var ce = bI.isFunction(ca[cd]) && ca[cd];
								e[cc[1]](function() {
									var cf = ce && ce.apply(this, arguments);
									if (cf && bI.isFunction(cf.promise)) {
										cf.promise().done(cb.resolve).fail(cb.reject).progress(cb.notify)
									} else {
										cb[cc[0] + "With"](this === b9 ? cb.promise() : this, ce ? [cf] : arguments)
									}
								})
							});
							ca = null
						}).promise()
					},
					promise: function(ca) {
						return ca != null ? bI.extend(ca, b9) : b9
					}
				}
				  , e = {};
				b9.pipe = b9.then;
				bI.each(b6, function(cb, ca) {
					var cd = ca[2]
					  , cc = ca[3];
					b9[ca[1]] = cd.add;
					if (cc) {
						cd.add(function() {
							b8 = cc
						}, b6[cb ^ 1][2].disable, b6[2][2].lock)
					}
					e[ca[0]] = function() {
						e[ca[0] + "With"](this === e ? b9 : this, arguments);
						return this
					}
					;
					e[ca[0] + "With"] = cd.fireWith
				});
				b9.promise(e);
				if (b7) {
					b7.call(e, e)
				}
				return e
			},
			when: function(b9) {
				var b7 = 0, cb = P.call(arguments), e = cb.length, b6 = e !== 1 || (b9 && bI.isFunction(b9.promise)) ? e : 0, ce = b6 === 1 ? b9 : bI.Deferred(), b8 = function(cg, ch, cf) {
					return function(ci) {
						ch[cg] = this;
						cf[cg] = arguments.length > 1 ? P.call(arguments) : ci;
						if (cf === cd) {
							ce.notifyWith(ch, cf)
						} else {
							if (!(--b6)) {
								ce.resolveWith(ch, cf)
							}
						}
					}
				}, cd, ca, cc;
				if (e > 1) {
					cd = new Array(e);
					ca = new Array(e);
					cc = new Array(e);
					for (; b7 < e; b7++) {
						if (cb[b7] && bI.isFunction(cb[b7].promise)) {
							cb[b7].promise().done(b8(b7, cc, cb)).fail(ce.reject).progress(b8(b7, ca, cd))
						} else {
							--b6
						}
					}
				}
				if (!b6) {
					ce.resolveWith(cc, cb)
				}
				return ce.promise()
			}
		});
		var ak;
		bI.fn.ready = function(e) {
			bI.ready.promise().done(e);
			return this
		}
		;
		bI.extend({
			isReady: false,
			readyWait: 1,
			holdReady: function(e) {
				if (e) {
					bI.readyWait++
				} else {
					bI.ready(true)
				}
			},
			ready: function(e) {
				if (e === true ? --bI.readyWait : bI.isReady) {
					return
				}
				if (!o.body) {
					return setTimeout(bI.ready)
				}
				bI.isReady = true;
				if (e !== true && --bI.readyWait > 0) {
					return
				}
				ak.resolveWith(o, [bI]);
				if (bI.fn.triggerHandler) {
					bI(o).triggerHandler("ready");
					bI(o).off("ready")
				}
			}
		});
		function bm() {
			if (o.addEventListener) {
				o.removeEventListener("DOMContentLoaded", bZ, false);
				a5.removeEventListener("load", bZ, false)
			} else {
				o.detachEvent("onreadystatechange", bZ);
				a5.detachEvent("onload", bZ)
			}
		}
		function bZ() {
			if (o.addEventListener || event.type === "load" || o.readyState === "complete") {
				bm();
				bI.ready()
			}
		}
		bI.ready.promise = function(b9) {
			if (!ak) {
				ak = bI.Deferred();
				if (o.readyState === "complete") {
					setTimeout(bI.ready)
				} else {
					if (o.addEventListener) {
						o.addEventListener("DOMContentLoaded", bZ, false);
						a5.addEventListener("load", bZ, false)
					} else {
						o.attachEvent("onreadystatechange", bZ);
						a5.attachEvent("onload", bZ);
						var b8 = false;
						try {
							b8 = a5.frameElement == null && o.documentElement
						} catch (b7) {}
						if (b8 && b8.doScroll) {
							(function b6() {
								if (!bI.isReady) {
									try {
										b8.doScroll("left")
									} catch (ca) {
										return setTimeout(b6, 50)
									}
									bm();
									bI.ready()
								}
							}
							)()
						}
					}
				}
			}
			return ak.promise(b9)
		}
		;
		var aC = typeof undefined;
		var bh;
		for (bh in bI(D)) {
			break
		}
		D.ownLast = bh !== "0";
		D.inlineBlockNeedsLayout = false;
		bI(function() {
			var b7, b8, e, b6;
			e = o.getElementsByTagName("body")[0];
			if (!e || !e.style) {
				return
			}
			b8 = o.createElement("div");
			b6 = o.createElement("div");
			b6.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			e.appendChild(b6).appendChild(b8);
			if (typeof b8.style.zoom !== aC) {
				b8.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
				D.inlineBlockNeedsLayout = b7 = b8.offsetWidth === 3;
				if (b7) {
					e.style.zoom = 1
				}
			}
			e.removeChild(b6)
		});
		(function() {
			var b7 = o.createElement("div");
			if (D.deleteExpando == null) {
				D.deleteExpando = true;
				try {
					delete b7.test
				} catch (b6) {
					D.deleteExpando = false
				}
			}
			b7 = null
		}
		)();
		bI.acceptData = function(b7) {
			var b6 = bI.noData[(b7.nodeName + " ").toLowerCase()]
			  , e = +b7.nodeType || 1;
			return e !== 1 && e !== 9 ? false : !b6 || b6 !== true && b7.getAttribute("classid") === b6
		}
		;
		var by = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
		  , aQ = /([A-Z])/g;
		function bA(b8, b7, b9) {
			if (b9 === undefined && b8.nodeType === 1) {
				var b6 = "data-" + b7.replace(aQ, "-$1").toLowerCase();
				b9 = b8.getAttribute(b6);
				if (typeof b9 === "string") {
					try {
						b9 = b9 === "true" ? true : b9 === "false" ? false : b9 === "null" ? null : +b9 + "" === b9 ? +b9 : by.test(b9) ? bI.parseJSON(b9) : b9
					} catch (ca) {}
					bI.data(b8, b7, b9)
				} else {
					b9 = undefined
				}
			}
			return b9
		}
		function Q(b6) {
			var e;
			for (e in b6) {
				if (e === "data" && bI.isEmptyObject(b6[e])) {
					continue
				}
				if (e !== "toJSON") {
					return false
				}
			}
			return true
		}
		function bc(b8, b6, ca, b9) {
			if (!bI.acceptData(b8)) {
				return
			}
			var cc, cb, cd = bI.expando, ce = b8.nodeType, e = ce ? bI.cache : b8, b7 = ce ? b8[cd] : b8[cd] && cd;
			if ((!b7 || !e[b7] || (!b9 && !e[b7].data)) && ca === undefined && typeof b6 === "string") {
				return
			}
			if (!b7) {
				if (ce) {
					b7 = b8[cd] = aP.pop() || bI.guid++
				} else {
					b7 = cd
				}
			}
			if (!e[b7]) {
				e[b7] = ce ? {} : {
					toJSON: bI.noop
				}
			}
			if (typeof b6 === "object" || typeof b6 === "function") {
				if (b9) {
					e[b7] = bI.extend(e[b7], b6)
				} else {
					e[b7].data = bI.extend(e[b7].data, b6)
				}
			}
			cb = e[b7];
			if (!b9) {
				if (!cb.data) {
					cb.data = {}
				}
				cb = cb.data
			}
			if (ca !== undefined) {
				cb[bI.camelCase(b6)] = ca
			}
			if (typeof b6 === "string") {
				cc = cb[b6];
				if (cc == null) {
					cc = cb[bI.camelCase(b6)]
				}
			} else {
				cc = cb
			}
			return cc
		}
		function ab(b9, b7, e) {
			if (!bI.acceptData(b9)) {
				return
			}
			var cb, b8, ca = b9.nodeType, b6 = ca ? bI.cache : b9, cc = ca ? b9[bI.expando] : bI.expando;
			if (!b6[cc]) {
				return
			}
			if (b7) {
				cb = e ? b6[cc] : b6[cc].data;
				if (cb) {
					if (!bI.isArray(b7)) {
						if (b7 in cb) {
							b7 = [b7]
						} else {
							b7 = bI.camelCase(b7);
							if (b7 in cb) {
								b7 = [b7]
							} else {
								b7 = b7.split(" ")
							}
						}
					} else {
						b7 = b7.concat(bI.map(b7, bI.camelCase))
					}
					b8 = b7.length;
					while (b8--) {
						delete cb[b7[b8]]
					}
					if (e ? !Q(cb) : !bI.isEmptyObject(cb)) {
						return
					}
				}
			}
			if (!e) {
				delete b6[cc].data;
				if (!Q(b6[cc])) {
					return
				}
			}
			if (ca) {
				bI.cleanData([b9], true)
			} else {
				if (D.deleteExpando || b6 != b6.window) {
					delete b6[cc]
				} else {
					b6[cc] = null
				}
			}
		}
		bI.extend({
			cache: {},
			noData: {
				"applet ": true,
				"embed ": true,
				"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			},
			hasData: function(e) {
				e = e.nodeType ? bI.cache[e[bI.expando]] : e[bI.expando];
				return !!e && !Q(e)
			},
			data: function(b6, e, b7) {
				return bc(b6, e, b7)
			},
			removeData: function(b6, e) {
				return ab(b6, e)
			},
			_data: function(b6, e, b7) {
				return bc(b6, e, b7, true)
			},
			_removeData: function(b6, e) {
				return ab(b6, e, true)
			}
		});
		bI.fn.extend({
			data: function(b8, cb) {
				var b7, b6, ca, b9 = this[0], e = b9 && b9.attributes;
				if (b8 === undefined) {
					if (this.length) {
						ca = bI.data(b9);
						if (b9.nodeType === 1 && !bI._data(b9, "parsedAttrs")) {
							b7 = e.length;
							while (b7--) {
								if (e[b7]) {
									b6 = e[b7].name;
									if (b6.indexOf("data-") === 0) {
										b6 = bI.camelCase(b6.slice(5));
										bA(b9, b6, ca[b6])
									}
								}
							}
							bI._data(b9, "parsedAttrs", true)
						}
					}
					return ca
				}
				if (typeof b8 === "object") {
					return this.each(function() {
						bI.data(this, b8)
					})
				}
				return arguments.length > 1 ? this.each(function() {
					bI.data(this, b8, cb)
				}) : b9 ? bA(b9, b8, bI.data(b9, b8)) : undefined
			},
			removeData: function(e) {
				return this.each(function() {
					bI.removeData(this, e)
				})
			}
		});
		bI.extend({
			queue: function(b7, b6, b8) {
				var e;
				if (b7) {
					b6 = (b6 || "fx") + "queue";
					e = bI._data(b7, b6);
					if (b8) {
						if (!e || bI.isArray(b8)) {
							e = bI._data(b7, b6, bI.makeArray(b8))
						} else {
							e.push(b8)
						}
					}
					return e || []
				}
			},
			dequeue: function(ca, b9) {
				b9 = b9 || "fx";
				var b6 = bI.queue(ca, b9)
				  , cb = b6.length
				  , b8 = b6.shift()
				  , e = bI._queueHooks(ca, b9)
				  , b7 = function() {
					bI.dequeue(ca, b9)
				};
				if (b8 === "inprogress") {
					b8 = b6.shift();
					cb--
				}
				if (b8) {
					if (b9 === "fx") {
						b6.unshift("inprogress")
					}
					delete e.stop;
					b8.call(ca, b7, e)
				}
				if (!cb && e) {
					e.empty.fire()
				}
			},
			_queueHooks: function(b7, b6) {
				var e = b6 + "queueHooks";
				return bI._data(b7, e) || bI._data(b7, e, {
					empty: bI.Callbacks("once memory").add(function() {
						bI._removeData(b7, b6 + "queue");
						bI._removeData(b7, e)
					})
				})
			}
		});
		bI.fn.extend({
			queue: function(e, b6) {
				var b7 = 2;
				if (typeof e !== "string") {
					b6 = e;
					e = "fx";
					b7--
				}
				if (arguments.length < b7) {
					return bI.queue(this[0], e)
				}
				return b6 === undefined ? this : this.each(function() {
					var b8 = bI.queue(this, e, b6);
					bI._queueHooks(this, e);
					if (e === "fx" && b8[0] !== "inprogress") {
						bI.dequeue(this, e)
					}
				})
			},
			dequeue: function(e) {
				return this.each(function() {
					bI.dequeue(this, e)
				})
			},
			clearQueue: function(e) {
				return this.queue(e || "fx", [])
			},
			promise: function(b7, cb) {
				var b6, b8 = 1, cc = bI.Deferred(), ca = this, e = this.length, b9 = function() {
					if (!(--b8)) {
						cc.resolveWith(ca, [ca])
					}
				};
				if (typeof b7 !== "string") {
					cb = b7;
					b7 = undefined
				}
				b7 = b7 || "fx";
				while (e--) {
					b6 = bI._data(ca[e], b7 + "queueHooks");
					if (b6 && b6.empty) {
						b8++;
						b6.empty.add(b9)
					}
				}
				b9();
				return cc.promise(cb)
			}
		});
		var aE = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
		var bT = ["Top", "Right", "Bottom", "Left"];
		var S = function(b6, e) {
			b6 = e || b6;
			return bI.css(b6, "display") === "none" || !bI.contains(b6.ownerDocument, b6)
		};
		var aB = bI.access = function(e, ca, cc, cb, b8, ce, cd) {
			var b7 = 0
			  , b6 = e.length
			  , b9 = cc == null;
			if (bI.type(cc) === "object") {
				b8 = true;
				for (b7 in cc) {
					bI.access(e, ca, b7, cc[b7], true, ce, cd)
				}
			} else {
				if (cb !== undefined) {
					b8 = true;
					if (!bI.isFunction(cb)) {
						cd = true
					}
					if (b9) {
						if (cd) {
							ca.call(e, cb);
							ca = null
						} else {
							b9 = ca;
							ca = function(cg, cf, ch) {
								return b9.call(bI(cg), ch)
							}
						}
					}
					if (ca) {
						for (; b7 < b6; b7++) {
							ca(e[b7], cc, cd ? cb : cb.call(e[b7], b7, ca(e[b7], cc)))
						}
					}
				}
			}
			return b8 ? e : b9 ? ca.call(e) : b6 ? ca(e[0], cc) : ce
		}
		;
		var aM = (/^(?:checkbox|radio)$/i);
		(function() {
			var b6 = o.createElement("input")
			  , b9 = o.createElement("div")
			  , b7 = o.createDocumentFragment();
			b9.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
			D.leadingWhitespace = b9.firstChild.nodeType === 3;
			D.tbody = !b9.getElementsByTagName("tbody").length;
			D.htmlSerialize = !!b9.getElementsByTagName("link").length;
			D.html5Clone = o.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
			b6.type = "checkbox";
			b6.checked = true;
			b7.appendChild(b6);
			D.appendChecked = b6.checked;
			b9.innerHTML = "<textarea>x</textarea>";
			D.noCloneChecked = !!b9.cloneNode(true).lastChild.defaultValue;
			b7.appendChild(b9);
			b9.innerHTML = "<input type='radio' checked='checked' name='t'/>";
			D.checkClone = b9.cloneNode(true).cloneNode(true).lastChild.checked;
			D.noCloneEvent = true;
			if (b9.attachEvent) {
				b9.attachEvent("onclick", function() {
					D.noCloneEvent = false
				});
				b9.cloneNode(true).click()
			}
			if (D.deleteExpando == null) {
				D.deleteExpando = true;
				try {
					delete b9.test
				} catch (b8) {
					D.deleteExpando = false
				}
			}
		}
		)();
		(function() {
			var b6, e, b7 = o.createElement("div");
			for (b6 in {
				submit: true,
				change: true,
				focusin: true
			}) {
				e = "on" + b6;
				if (!(D[b6 + "Bubbles"] = e in a5)) {
					b7.setAttribute(e, "t");
					D[b6 + "Bubbles"] = b7.attributes[e].expando === false
				}
			}
			b7 = null
		}
		)();
		var bG = /^(?:input|select|textarea)$/i
		  , a6 = /^key/
		  , bM = /^(?:mouse|pointer|contextmenu)|click/
		  , bC = /^(?:focusinfocus|focusoutblur)$/
		  , bx = /^([^.]*)(?:\.(.+)|)$/;
		function U() {
			return true
		}
		function Z() {
			return false
		}
		function am() {
			try {
				return o.activeElement
			} catch (e) {}
		}
		bI.event = {
			global: {},
			add: function(b9, ce, cj, cb, ca) {
				var cc, ck, cl, b7, cg, cd, ci, b8, ch, e, b6, cf = bI._data(b9);
				if (!cf) {
					return
				}
				if (cj.handler) {
					b7 = cj;
					cj = b7.handler;
					ca = b7.selector
				}
				if (!cj.guid) {
					cj.guid = bI.guid++
				}
				if (!(ck = cf.events)) {
					ck = cf.events = {}
				}
				if (!(cd = cf.handle)) {
					cd = cf.handle = function(cm) {
						return typeof bI !== aC && (!cm || bI.event.triggered !== cm.type) ? bI.event.dispatch.apply(cd.elem, arguments) : undefined
					}
					;
					cd.elem = b9
				}
				ce = (ce || "").match(aF) || [""];
				cl = ce.length;
				while (cl--) {
					cc = bx.exec(ce[cl]) || [];
					ch = b6 = cc[1];
					e = (cc[2] || "").split(".").sort();
					if (!ch) {
						continue
					}
					cg = bI.event.special[ch] || {};
					ch = (ca ? cg.delegateType : cg.bindType) || ch;
					cg = bI.event.special[ch] || {};
					ci = bI.extend({
						type: ch,
						origType: b6,
						data: cb,
						handler: cj,
						guid: cj.guid,
						selector: ca,
						needsContext: ca && bI.expr.match.needsContext.test(ca),
						namespace: e.join(".")
					}, b7);
					if (!(b8 = ck[ch])) {
						b8 = ck[ch] = [];
						b8.delegateCount = 0;
						if (!cg.setup || cg.setup.call(b9, cb, e, cd) === false) {
							if (b9.addEventListener) {
								b9.addEventListener(ch, cd, false)
							} else {
								if (b9.attachEvent) {
									b9.attachEvent("on" + ch, cd)
								}
							}
						}
					}
					if (cg.add) {
						cg.add.call(b9, ci);
						if (!ci.handler.guid) {
							ci.handler.guid = cj.guid
						}
					}
					if (ca) {
						b8.splice(b8.delegateCount++, 0, ci)
					} else {
						b8.push(ci)
					}
					bI.event.global[ch] = true
				}
				b9 = null
			},
			remove: function(b8, ce, cl, b9, cd) {
				var cb, ci, cc, ca, ck, cj, cg, b7, ch, e, b6, cf = bI.hasData(b8) && bI._data(b8);
				if (!cf || !(cj = cf.events)) {
					return
				}
				ce = (ce || "").match(aF) || [""];
				ck = ce.length;
				while (ck--) {
					cc = bx.exec(ce[ck]) || [];
					ch = b6 = cc[1];
					e = (cc[2] || "").split(".").sort();
					if (!ch) {
						for (ch in cj) {
							bI.event.remove(b8, ch + ce[ck], cl, b9, true)
						}
						continue
					}
					cg = bI.event.special[ch] || {};
					ch = (b9 ? cg.delegateType : cg.bindType) || ch;
					b7 = cj[ch] || [];
					cc = cc[2] && new RegExp("(^|\\.)" + e.join("\\.(?:.*\\.|)") + "(\\.|$)");
					ca = cb = b7.length;
					while (cb--) {
						ci = b7[cb];
						if ((cd || b6 === ci.origType) && (!cl || cl.guid === ci.guid) && (!cc || cc.test(ci.namespace)) && (!b9 || b9 === ci.selector || b9 === "**" && ci.selector)) {
							b7.splice(cb, 1);
							if (ci.selector) {
								b7.delegateCount--
							}
							if (cg.remove) {
								cg.remove.call(b8, ci)
							}
						}
					}
					if (ca && !b7.length) {
						if (!cg.teardown || cg.teardown.call(b8, e, cf.handle) === false) {
							bI.removeEvent(b8, ch, cf.handle)
						}
						delete cj[ch]
					}
				}
				if (bI.isEmptyObject(cj)) {
					delete cf.handle;
					bI._removeData(b8, "events")
				}
			},
			trigger: function(b6, cd, b9, ck) {
				var ce, b8, ci, cj, cg, cc, cb, ca = [b9 || o], ch = K.call(b6, "type") ? b6.type : b6, b7 = K.call(b6, "namespace") ? b6.namespace.split(".") : [];
				ci = cc = b9 = b9 || o;
				if (b9.nodeType === 3 || b9.nodeType === 8) {
					return
				}
				if (bC.test(ch + bI.event.triggered)) {
					return
				}
				if (ch.indexOf(".") >= 0) {
					b7 = ch.split(".");
					ch = b7.shift();
					b7.sort()
				}
				b8 = ch.indexOf(":") < 0 && "on" + ch;
				b6 = b6[bI.expando] ? b6 : new bI.Event(ch,typeof b6 === "object" && b6);
				b6.isTrigger = ck ? 2 : 3;
				b6.namespace = b7.join(".");
				b6.namespace_re = b6.namespace ? new RegExp("(^|\\.)" + b7.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
				b6.result = undefined;
				if (!b6.target) {
					b6.target = b9
				}
				cd = cd == null ? [b6] : bI.makeArray(cd, [b6]);
				cg = bI.event.special[ch] || {};
				if (!ck && cg.trigger && cg.trigger.apply(b9, cd) === false) {
					return
				}
				if (!ck && !cg.noBubble && !bI.isWindow(b9)) {
					cj = cg.delegateType || ch;
					if (!bC.test(cj + ch)) {
						ci = ci.parentNode
					}
					for (; ci; ci = ci.parentNode) {
						ca.push(ci);
						cc = ci
					}
					if (cc === (b9.ownerDocument || o)) {
						ca.push(cc.defaultView || cc.parentWindow || a5)
					}
				}
				cb = 0;
				while ((ci = ca[cb++]) && !b6.isPropagationStopped()) {
					b6.type = cb > 1 ? cj : cg.bindType || ch;
					ce = (bI._data(ci, "events") || {})[b6.type] && bI._data(ci, "handle");
					if (ce) {
						ce.apply(ci, cd)
					}
					ce = b8 && ci[b8];
					if (ce && ce.apply && bI.acceptData(ci)) {
						b6.result = ce.apply(ci, cd);
						if (b6.result === false) {
							b6.preventDefault()
						}
					}
				}
				b6.type = ch;
				if (!ck && !b6.isDefaultPrevented()) {
					if ((!cg._default || cg._default.apply(ca.pop(), cd) === false) && bI.acceptData(b9)) {
						if (b8 && b9[ch] && !bI.isWindow(b9)) {
							cc = b9[b8];
							if (cc) {
								b9[b8] = null
							}
							bI.event.triggered = ch;
							try {
								b9[ch]()
							} catch (cf) {}
							bI.event.triggered = undefined;
							if (cc) {
								b9[b8] = cc
							}
						}
					}
				}
				return b6.result
			},
			dispatch: function(e) {
				e = bI.event.fix(e);
				var b9, ca, ce, b6, b8, cd = [], cc = P.call(arguments), b7 = (bI._data(this, "events") || {})[e.type] || [], cb = bI.event.special[e.type] || {};
				cc[0] = e;
				e.delegateTarget = this;
				if (cb.preDispatch && cb.preDispatch.call(this, e) === false) {
					return
				}
				cd = bI.event.handlers.call(this, e, b7);
				b9 = 0;
				while ((b6 = cd[b9++]) && !e.isPropagationStopped()) {
					e.currentTarget = b6.elem;
					b8 = 0;
					while ((ce = b6.handlers[b8++]) && !e.isImmediatePropagationStopped()) {
						if (!e.namespace_re || e.namespace_re.test(ce.namespace)) {
							e.handleObj = ce;
							e.data = ce.data;
							ca = ((bI.event.special[ce.origType] || {}).handle || ce.handler).apply(b6.elem, cc);
							if (ca !== undefined) {
								if ((e.result = ca) === false) {
									e.preventDefault();
									e.stopPropagation()
								}
							}
						}
					}
				}
				if (cb.postDispatch) {
					cb.postDispatch.call(this, e)
				}
				return e.result
			},
			handlers: function(e, b7) {
				var b6, cc, ca, b9, cb = [], b8 = b7.delegateCount, cd = e.target;
				if (b8 && cd.nodeType && (!e.button || e.type !== "click")) {
					for (; cd != this; cd = cd.parentNode || this) {
						if (cd.nodeType === 1 && (cd.disabled !== true || e.type !== "click")) {
							ca = [];
							for (b9 = 0; b9 < b8; b9++) {
								cc = b7[b9];
								b6 = cc.selector + " ";
								if (ca[b6] === undefined) {
									ca[b6] = cc.needsContext ? bI(b6, this).index(cd) >= 0 : bI.find(b6, this, null, [cd]).length
								}
								if (ca[b6]) {
									ca.push(cc)
								}
							}
							if (ca.length) {
								cb.push({
									elem: cd,
									handlers: ca
								})
							}
						}
					}
				}
				if (b8 < b7.length) {
					cb.push({
						elem: this,
						handlers: b7.slice(b8)
					})
				}
				return cb
			},
			fix: function(b8) {
				if (b8[bI.expando]) {
					return b8
				}
				var b6, cb, ca, b7 = b8.type, e = b8, b9 = this.fixHooks[b7];
				if (!b9) {
					this.fixHooks[b7] = b9 = bM.test(b7) ? this.mouseHooks : a6.test(b7) ? this.keyHooks : {}
				}
				ca = b9.props ? this.props.concat(b9.props) : this.props;
				b8 = new bI.Event(e);
				b6 = ca.length;
				while (b6--) {
					cb = ca[b6];
					b8[cb] = e[cb]
				}
				if (!b8.target) {
					b8.target = e.srcElement || o
				}
				if (b8.target.nodeType === 3) {
					b8.target = b8.target.parentNode
				}
				b8.metaKey = !!b8.metaKey;
				return b9.filter ? b9.filter(b8, e) : b8
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function(b6, e) {
					if (b6.which == null) {
						b6.which = e.charCode != null ? e.charCode : e.keyCode
					}
					return b6
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function(b8, b7) {
					var e, b9, ca, b6 = b7.button, cb = b7.fromElement;
					if (b8.pageX == null && b7.clientX != null) {
						b9 = b8.target.ownerDocument || o;
						ca = b9.documentElement;
						e = b9.body;
						b8.pageX = b7.clientX + (ca && ca.scrollLeft || e && e.scrollLeft || 0) - (ca && ca.clientLeft || e && e.clientLeft || 0);
						b8.pageY = b7.clientY + (ca && ca.scrollTop || e && e.scrollTop || 0) - (ca && ca.clientTop || e && e.clientTop || 0)
					}
					if (!b8.relatedTarget && cb) {
						b8.relatedTarget = cb === b8.target ? b7.toElement : cb
					}
					if (!b8.which && b6 !== undefined) {
						b8.which = (b6 & 1 ? 1 : (b6 & 2 ? 3 : (b6 & 4 ? 2 : 0)))
					}
					return b8
				}
			},
			special: {
				load: {
					noBubble: true
				},
				focus: {
					trigger: function() {
						if (this !== am() && this.focus) {
							try {
								this.focus();
								return false
							} catch (b6) {}
						}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function() {
						if (this === am() && this.blur) {
							this.blur();
							return false
						}
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function() {
						if (bI.nodeName(this, "input") && this.type === "checkbox" && this.click) {
							this.click();
							return false
						}
					},
					_default: function(e) {
						return bI.nodeName(e.target, "a")
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
			simulate: function(b7, b9, b8, b6) {
				var ca = bI.extend(new bI.Event(), b8, {
					type: b7,
					isSimulated: true,
					originalEvent: {}
				});
				if (b6) {
					bI.event.trigger(ca, null, b9)
				} else {
					bI.event.dispatch.call(b9, ca)
				}
				if (ca.isDefaultPrevented()) {
					b8.preventDefault()
				}
			}
		};
		bI.removeEvent = o.removeEventListener ? function(b6, e, b7) {
			if (b6.removeEventListener) {
				b6.removeEventListener(e, b7, false)
			}
		}
		: function(b7, b6, b8) {
			var e = "on" + b6;
			if (b7.detachEvent) {
				if (typeof b7[e] === aC) {
					b7[e] = null
				}
				b7.detachEvent(e, b8)
			}
		}
		;
		bI.Event = function(b6, e) {
			if (!(this instanceof bI.Event)) {
				return new bI.Event(b6,e)
			}
			if (b6 && b6.type) {
				this.originalEvent = b6;
				this.type = b6.type;
				this.isDefaultPrevented = b6.defaultPrevented || b6.defaultPrevented === undefined && b6.returnValue === false ? U : Z
			} else {
				this.type = b6
			}
			if (e) {
				bI.extend(this, e)
			}
			this.timeStamp = b6 && b6.timeStamp || bI.now();
			this[bI.expando] = true
		}
		;
		bI.Event.prototype = {
			isDefaultPrevented: Z,
			isPropagationStopped: Z,
			isImmediatePropagationStopped: Z,
			preventDefault: function() {
				var b6 = this.originalEvent;
				this.isDefaultPrevented = U;
				if (!b6) {
					return
				}
				if (b6.preventDefault) {
					b6.preventDefault()
				} else {
					b6.returnValue = false
				}
			},
			stopPropagation: function() {
				var b6 = this.originalEvent;
				this.isPropagationStopped = U;
				if (!b6) {
					return
				}
				if (b6.stopPropagation) {
					b6.stopPropagation()
				}
				b6.cancelBubble = true
			},
			stopImmediatePropagation: function() {
				var b6 = this.originalEvent;
				this.isImmediatePropagationStopped = U;
				if (b6 && b6.stopImmediatePropagation) {
					b6.stopImmediatePropagation()
				}
				this.stopPropagation()
			}
		};
		bI.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function(b6, e) {
			bI.event.special[b6] = {
				delegateType: e,
				bindType: e,
				handle: function(b9) {
					var b7, cb = this, ca = b9.relatedTarget, b8 = b9.handleObj;
					if (!ca || (ca !== cb && !bI.contains(cb, ca))) {
						b9.type = b8.origType;
						b7 = b8.handler.apply(this, arguments);
						b9.type = e
					}
					return b7
				}
			}
		});
		if (!D.submitBubbles) {
			bI.event.special.submit = {
				setup: function() {
					if (bI.nodeName(this, "form")) {
						return false
					}
					bI.event.add(this, "click._submit keypress._submit", function(b8) {
						var b7 = b8.target
						  , b6 = bI.nodeName(b7, "input") || bI.nodeName(b7, "button") ? b7.form : undefined;
						if (b6 && !bI._data(b6, "submitBubbles")) {
							bI.event.add(b6, "submit._submit", function(e) {
								e._submit_bubble = true
							});
							bI._data(b6, "submitBubbles", true)
						}
					})
				},
				postDispatch: function(e) {
					if (e._submit_bubble) {
						delete e._submit_bubble;
						if (this.parentNode && !e.isTrigger) {
							bI.event.simulate("submit", this.parentNode, e, true)
						}
					}
				},
				teardown: function() {
					if (bI.nodeName(this, "form")) {
						return false
					}
					bI.event.remove(this, "._submit")
				}
			}
		}
		if (!D.changeBubbles) {
			bI.event.special.change = {
				setup: function() {
					if (bG.test(this.nodeName)) {
						if (this.type === "checkbox" || this.type === "radio") {
							bI.event.add(this, "propertychange._change", function(e) {
								if (e.originalEvent.propertyName === "checked") {
									this._just_changed = true
								}
							});
							bI.event.add(this, "click._change", function(e) {
								if (this._just_changed && !e.isTrigger) {
									this._just_changed = false
								}
								bI.event.simulate("change", this, e, true)
							})
						}
						return false
					}
					bI.event.add(this, "beforeactivate._change", function(b7) {
						var b6 = b7.target;
						if (bG.test(b6.nodeName) && !bI._data(b6, "changeBubbles")) {
							bI.event.add(b6, "change._change", function(e) {
								if (this.parentNode && !e.isSimulated && !e.isTrigger) {
									bI.event.simulate("change", this.parentNode, e, true)
								}
							});
							bI._data(b6, "changeBubbles", true)
						}
					})
				},
				handle: function(b6) {
					var e = b6.target;
					if (this !== e || b6.isSimulated || b6.isTrigger || (e.type !== "radio" && e.type !== "checkbox")) {
						return b6.handleObj.handler.apply(this, arguments)
					}
				},
				teardown: function() {
					bI.event.remove(this, "._change");
					return !bG.test(this.nodeName)
				}
			}
		}
		if (!D.focusinBubbles) {
			bI.each({
				focus: "focusin",
				blur: "focusout"
			}, function(b7, e) {
				var b6 = function(b8) {
					bI.event.simulate(e, b8.target, bI.event.fix(b8), true)
				};
				bI.event.special[e] = {
					setup: function() {
						var b9 = this.ownerDocument || this
						  , b8 = bI._data(b9, e);
						if (!b8) {
							b9.addEventListener(b7, b6, true)
						}
						bI._data(b9, e, (b8 || 0) + 1)
					},
					teardown: function() {
						var b9 = this.ownerDocument || this
						  , b8 = bI._data(b9, e) - 1;
						if (!b8) {
							b9.removeEventListener(b7, b6, true);
							bI._removeData(b9, e)
						} else {
							bI._data(b9, e, b8)
						}
					}
				}
			})
		}
		bI.fn.extend({
			on: function(b7, e, ca, b9, b6) {
				var b8, cb;
				if (typeof b7 === "object") {
					if (typeof e !== "string") {
						ca = ca || e;
						e = undefined
					}
					for (b8 in b7) {
						this.on(b8, e, ca, b7[b8], b6)
					}
					return this
				}
				if (ca == null && b9 == null) {
					b9 = e;
					ca = e = undefined
				} else {
					if (b9 == null) {
						if (typeof e === "string") {
							b9 = ca;
							ca = undefined
						} else {
							b9 = ca;
							ca = e;
							e = undefined
						}
					}
				}
				if (b9 === false) {
					b9 = Z
				} else {
					if (!b9) {
						return this
					}
				}
				if (b6 === 1) {
					cb = b9;
					b9 = function(cc) {
						bI().off(cc);
						return cb.apply(this, arguments)
					}
					;
					b9.guid = cb.guid || (cb.guid = bI.guid++)
				}
				return this.each(function() {
					bI.event.add(this, b7, b9, ca, e)
				})
			},
			one: function(b6, e, b8, b7) {
				return this.on(b6, e, b8, b7, 1)
			},
			off: function(b7, e, b9) {
				var b6, b8;
				if (b7 && b7.preventDefault && b7.handleObj) {
					b6 = b7.handleObj;
					bI(b7.delegateTarget).off(b6.namespace ? b6.origType + "." + b6.namespace : b6.origType, b6.selector, b6.handler);
					return this
				}
				if (typeof b7 === "object") {
					for (b8 in b7) {
						this.off(b8, e, b7[b8])
					}
					return this
				}
				if (e === false || typeof e === "function") {
					b9 = e;
					e = undefined
				}
				if (b9 === false) {
					b9 = Z
				}
				return this.each(function() {
					bI.event.remove(this, b7, b9, e)
				})
			},
			trigger: function(e, b6) {
				return this.each(function() {
					bI.event.trigger(e, b6, this)
				})
			},
			triggerHandler: function(e, b7) {
				var b6 = this[0];
				if (b6) {
					return bI.event.trigger(e, b7, b6, true)
				}
			}
		});
		function B(e) {
			var b7 = d.split("|")
			  , b6 = e.createDocumentFragment();
			if (b6.createElement) {
				while (b7.length) {
					b6.createElement(b7.pop())
				}
			}
			return b6
		}
		var d = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
		  , aD = / jQuery\d+="(?:null|\d+)"/g
		  , M = new RegExp("<(?:" + d + ")[\\s/>]","i")
		  , b5 = /^\s+/
		  , aH = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
		  , p = /<([\w:]+)/
		  , b0 = /<tbody/i
		  , L = /<|&#?\w+;/
		  , an = /<(?:script|style|link)/i
		  , bW = /checked\s*(?:[^=]|=\s*.checked.)/i
		  , bB = /^$|\/(?:java|ecma)script/i
		  , ar = /^true\/(.*)/
		  , aO = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
		  , W = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: D.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		}
		  , aT = B(o)
		  , l = aT.appendChild(o.createElement("div"));
		W.optgroup = W.option;
		W.tbody = W.tfoot = W.colgroup = W.caption = W.thead;
		W.th = W.td;
		function m(b8, e) {
			var b6, b9, b7 = 0, ca = typeof b8.getElementsByTagName !== aC ? b8.getElementsByTagName(e || "*") : typeof b8.querySelectorAll !== aC ? b8.querySelectorAll(e || "*") : undefined;
			if (!ca) {
				for (ca = [],
				b6 = b8.childNodes || b8; (b9 = b6[b7]) != null; b7++) {
					if (!e || bI.nodeName(b9, e)) {
						ca.push(b9)
					} else {
						bI.merge(ca, m(b9, e))
					}
				}
			}
			return e === undefined || e && bI.nodeName(b8, e) ? bI.merge([b8], ca) : ca
		}
		function bY(e) {
			if (aM.test(e.type)) {
				e.defaultChecked = e.checked
			}
		}
		function a3(b6, e) {
			return bI.nodeName(b6, "table") && bI.nodeName(e.nodeType !== 11 ? e : e.firstChild, "tr") ? b6.getElementsByTagName("tbody")[0] || b6.appendChild(b6.ownerDocument.createElement("tbody")) : b6
		}
		function u(e) {
			e.type = (bI.find.attr(e, "type") !== null) + "/" + e.type;
			return e
		}
		function bf(b6) {
			var e = ar.exec(b6.type);
			if (e) {
				b6.type = e[1]
			} else {
				b6.removeAttribute("type")
			}
			return b6
		}
		function bu(e, b7) {
			var b8, b6 = 0;
			for (; (b8 = e[b6]) != null; b6++) {
				bI._data(b8, "globalEval", !b7 || bI._data(b7[b6], "globalEval"))
			}
		}
		function at(cc, b6) {
			if (b6.nodeType !== 1 || !bI.hasData(cc)) {
				return
			}
			var b9, b8, e, cb = bI._data(cc), ca = bI._data(b6, cb), b7 = cb.events;
			if (b7) {
				delete ca.handle;
				ca.events = {};
				for (b9 in b7) {
					for (b8 = 0,
					e = b7[b9].length; b8 < e; b8++) {
						bI.event.add(b6, b9, b7[b9][b8])
					}
				}
			}
			if (ca.data) {
				ca.data = bI.extend({}, ca.data)
			}
		}
		function T(b9, b6) {
			var ca, b8, b7;
			if (b6.nodeType !== 1) {
				return
			}
			ca = b6.nodeName.toLowerCase();
			if (!D.noCloneEvent && b6[bI.expando]) {
				b7 = bI._data(b6);
				for (b8 in b7.events) {
					bI.removeEvent(b6, b8, b7.handle)
				}
				b6.removeAttribute(bI.expando)
			}
			if (ca === "script" && b6.text !== b9.text) {
				u(b6).text = b9.text;
				bf(b6)
			} else {
				if (ca === "object") {
					if (b6.parentNode) {
						b6.outerHTML = b9.outerHTML
					}
					if (D.html5Clone && (b9.innerHTML && !bI.trim(b6.innerHTML))) {
						b6.innerHTML = b9.innerHTML
					}
				} else {
					if (ca === "input" && aM.test(b9.type)) {
						b6.defaultChecked = b6.checked = b9.checked;
						if (b6.value !== b9.value) {
							b6.value = b9.value
						}
					} else {
						if (ca === "option") {
							b6.defaultSelected = b6.selected = b9.defaultSelected
						} else {
							if (ca === "input" || ca === "textarea") {
								b6.defaultValue = b9.defaultValue
							}
						}
					}
				}
			}
		}
		bI.extend({
			clone: function(b6, b8, e) {
				var ca, b7, cd, b9, cb, cc = bI.contains(b6.ownerDocument, b6);
				if (D.html5Clone || bI.isXMLDoc(b6) || !M.test("<" + b6.nodeName + ">")) {
					cd = b6.cloneNode(true)
				} else {
					l.innerHTML = b6.outerHTML;
					l.removeChild(cd = l.firstChild)
				}
				if ((!D.noCloneEvent || !D.noCloneChecked) && (b6.nodeType === 1 || b6.nodeType === 11) && !bI.isXMLDoc(b6)) {
					ca = m(cd);
					cb = m(b6);
					for (b9 = 0; (b7 = cb[b9]) != null; ++b9) {
						if (ca[b9]) {
							T(b7, ca[b9])
						}
					}
				}
				if (b8) {
					if (e) {
						cb = cb || m(b6);
						ca = ca || m(cd);
						for (b9 = 0; (b7 = cb[b9]) != null; b9++) {
							at(b7, ca[b9])
						}
					} else {
						at(b6, cd)
					}
				}
				ca = m(cd, "script");
				if (ca.length > 0) {
					bu(ca, !cc && m(b6, "script"))
				}
				ca = cb = b7 = null;
				return cd
			},
			buildFragment: function(b6, b8, cd, ci) {
				var ce, ca, cc, ch, cj, cg, b7, cb = b6.length, b9 = B(b8), e = [], cf = 0;
				for (; cf < cb; cf++) {
					ca = b6[cf];
					if (ca || ca === 0) {
						if (bI.type(ca) === "object") {
							bI.merge(e, ca.nodeType ? [ca] : ca)
						} else {
							if (!L.test(ca)) {
								e.push(b8.createTextNode(ca))
							} else {
								ch = ch || b9.appendChild(b8.createElement("div"));
								cj = (p.exec(ca) || ["", ""])[1].toLowerCase();
								b7 = W[cj] || W._default;
								ch.innerHTML = b7[1] + ca.replace(aH, "<$1></$2>") + b7[2];
								ce = b7[0];
								while (ce--) {
									ch = ch.lastChild
								}
								if (!D.leadingWhitespace && b5.test(ca)) {
									e.push(b8.createTextNode(b5.exec(ca)[0]))
								}
								if (!D.tbody) {
									ca = cj === "table" && !b0.test(ca) ? ch.firstChild : b7[1] === "<table>" && !b0.test(ca) ? ch : 0;
									ce = ca && ca.childNodes.length;
									while (ce--) {
										if (bI.nodeName((cg = ca.childNodes[ce]), "tbody") && !cg.childNodes.length) {
											ca.removeChild(cg)
										}
									}
								}
								bI.merge(e, ch.childNodes);
								ch.textContent = "";
								while (ch.firstChild) {
									ch.removeChild(ch.firstChild)
								}
								ch = b9.lastChild
							}
						}
					}
				}
				if (ch) {
					b9.removeChild(ch)
				}
				if (!D.appendChecked) {
					bI.grep(m(e, "input"), bY)
				}
				cf = 0;
				while ((ca = e[cf++])) {
					if (ci && bI.inArray(ca, ci) !== -1) {
						continue
					}
					cc = bI.contains(ca.ownerDocument, ca);
					ch = m(b9.appendChild(ca), "script");
					if (cc) {
						bu(ch)
					}
					if (cd) {
						ce = 0;
						while ((ca = ch[ce++])) {
							if (bB.test(ca.type || "")) {
								cd.push(ca)
							}
						}
					}
				}
				ch = null;
				return b9
			},
			cleanData: function(b6, ce) {
				var b8, cd, b7, b9, ca = 0, cf = bI.expando, e = bI.cache, cb = D.deleteExpando, cc = bI.event.special;
				for (; (b8 = b6[ca]) != null; ca++) {
					if (ce || bI.acceptData(b8)) {
						b7 = b8[cf];
						b9 = b7 && e[b7];
						if (b9) {
							if (b9.events) {
								for (cd in b9.events) {
									if (cc[cd]) {
										bI.event.remove(b8, cd)
									} else {
										bI.removeEvent(b8, cd, b9.handle)
									}
								}
							}
							if (e[b7]) {
								delete e[b7];
								if (cb) {
									delete b8[cf]
								} else {
									if (typeof b8.removeAttribute !== aC) {
										b8.removeAttribute(cf)
									} else {
										b8[cf] = null
									}
								}
								aP.push(b7)
							}
						}
					}
				}
			}
		});
		bI.fn.extend({
			text: function(e) {
				return aB(this, function(b6) {
					return b6 === undefined ? bI.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(b6))
				}, null, e, arguments.length)
			},
			append: function() {
				return this.domManip(arguments, function(e) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var b6 = a3(this, e);
						b6.appendChild(e)
					}
				})
			},
			prepend: function() {
				return this.domManip(arguments, function(e) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var b6 = a3(this, e);
						b6.insertBefore(e, b6.firstChild)
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
			remove: function(e, b9) {
				var b8, b6 = e ? bI.filter(e, this) : this, b7 = 0;
				for (; (b8 = b6[b7]) != null; b7++) {
					if (!b9 && b8.nodeType === 1) {
						bI.cleanData(m(b8))
					}
					if (b8.parentNode) {
						if (b9 && bI.contains(b8.ownerDocument, b8)) {
							bu(m(b8, "script"))
						}
						b8.parentNode.removeChild(b8)
					}
				}
				return this
			},
			empty: function() {
				var b6, e = 0;
				for (; (b6 = this[e]) != null; e++) {
					if (b6.nodeType === 1) {
						bI.cleanData(m(b6, false))
					}
					while (b6.firstChild) {
						b6.removeChild(b6.firstChild)
					}
					if (b6.options && bI.nodeName(b6, "select")) {
						b6.options.length = 0
					}
				}
				return this
			},
			clone: function(b6, e) {
				b6 = b6 == null ? false : b6;
				e = e == null ? b6 : e;
				return this.map(function() {
					return bI.clone(this, b6, e)
				})
			},
			html: function(e) {
				return aB(this, function(b9) {
					var b8 = this[0] || {}
					  , b7 = 0
					  , b6 = this.length;
					if (b9 === undefined) {
						return b8.nodeType === 1 ? b8.innerHTML.replace(aD, "") : undefined
					}
					if (typeof b9 === "string" && !an.test(b9) && (D.htmlSerialize || !M.test(b9)) && (D.leadingWhitespace || !b5.test(b9)) && !W[(p.exec(b9) || ["", ""])[1].toLowerCase()]) {
						b9 = b9.replace(aH, "<$1></$2>");
						try {
							for (; b7 < b6; b7++) {
								b8 = this[b7] || {};
								if (b8.nodeType === 1) {
									bI.cleanData(m(b8, false));
									b8.innerHTML = b9
								}
							}
							b8 = 0
						} catch (ca) {}
					}
					if (b8) {
						this.empty().append(b9)
					}
				}, null, e, arguments.length)
			},
			replaceWith: function() {
				var e = arguments[0];
				this.domManip(arguments, function(b6) {
					e = this.parentNode;
					bI.cleanData(m(this));
					if (e) {
						e.replaceChild(b6, this)
					}
				});
				return e && (e.length || e.nodeType) ? this : this.remove()
			},
			detach: function(e) {
				return this.remove(e, true)
			},
			domManip: function(cd, ci) {
				cd = az.apply([], cd);
				var cb, b7, e, b9, cg, cc, ca = 0, b8 = this.length, cf = this, ch = b8 - 1, ce = cd[0], b6 = bI.isFunction(ce);
				if (b6 || (b8 > 1 && typeof ce === "string" && !D.checkClone && bW.test(ce))) {
					return this.each(function(ck) {
						var cj = cf.eq(ck);
						if (b6) {
							cd[0] = ce.call(this, ck, cj.html())
						}
						cj.domManip(cd, ci)
					})
				}
				if (b8) {
					cc = bI.buildFragment(cd, this[0].ownerDocument, false, this);
					cb = cc.firstChild;
					if (cc.childNodes.length === 1) {
						cc = cb
					}
					if (cb) {
						b9 = bI.map(m(cc, "script"), u);
						e = b9.length;
						for (; ca < b8; ca++) {
							b7 = cc;
							if (ca !== ch) {
								b7 = bI.clone(b7, true, true);
								if (e) {
									bI.merge(b9, m(b7, "script"))
								}
							}
							ci.call(this[ca], b7, ca)
						}
						if (e) {
							cg = b9[b9.length - 1].ownerDocument;
							bI.map(b9, bf);
							for (ca = 0; ca < e; ca++) {
								b7 = b9[ca];
								if (bB.test(b7.type || "") && !bI._data(b7, "globalEval") && bI.contains(cg, b7)) {
									if (b7.src) {
										if (bI._evalUrl) {
											bI._evalUrl(b7.src)
										}
									} else {
										bI.globalEval((b7.text || b7.textContent || b7.innerHTML || "").replace(aO, ""))
									}
								}
							}
						}
						cc = cb = null
					}
				}
				return this
			}
		});
		bI.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(e, b6) {
			bI.fn[e] = function(b7) {
				var b8, ca = 0, b9 = [], cc = bI(b7), cb = cc.length - 1;
				for (; ca <= cb; ca++) {
					b8 = ca === cb ? this : this.clone(true);
					bI(cc[ca])[b6](b8);
					x.apply(b9, b8.get())
				}
				return this.pushStack(b9)
			}
		});
		var aI, bl = {};
		function a4(e, b9) {
			var b6, b7 = bI(b9.createElement(e)).appendTo(b9.body), b8 = a5.getDefaultComputedStyle && (b6 = a5.getDefaultComputedStyle(b7[0])) ? b6.display : bI.css(b7[0], "display");
			b7.detach();
			return b8
		}
		function a0(b7) {
			var b6 = o
			  , e = bl[b7];
			if (!e) {
				e = a4(b7, b6);
				if (e === "none" || !e) {
					aI = (aI || bI("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b6.documentElement);
					b6 = (aI[0].contentWindow || aI[0].contentDocument).document;
					b6.write();
					b6.close();
					e = a4(b7, b6);
					aI.detach()
				}
				bl[b7] = e
			}
			return e
		}
		(function() {
			var e;
			D.shrinkWrapBlocks = function() {
				if (e != null) {
					return e
				}
				e = false;
				var b8, b6, b7;
				b6 = o.getElementsByTagName("body")[0];
				if (!b6 || !b6.style) {
					return
				}
				b8 = o.createElement("div");
				b7 = o.createElement("div");
				b7.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
				b6.appendChild(b7).appendChild(b8);
				if (typeof b8.style.zoom !== aC) {
					b8.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1";
					b8.appendChild(o.createElement("div")).style.width = "5px";
					e = b8.offsetWidth !== 3
				}
				b6.removeChild(b7);
				return e
			}
		}
		)();
		var aZ = (/^margin/);
		var Y = new RegExp("^(" + aE + ")(?!px)[a-z%]+$","i");
		var bq, G, bo = /^(top|right|bottom|left)$/;
		if (a5.getComputedStyle) {
			bq = function(e) {
				if (e.ownerDocument.defaultView.opener) {
					return e.ownerDocument.defaultView.getComputedStyle(e, null)
				}
				return a5.getComputedStyle(e, null)
			}
			;
			G = function(cc, b6, cb) {
				var b9, b8, ca, e, b7 = cc.style;
				cb = cb || bq(cc);
				e = cb ? cb.getPropertyValue(b6) || cb[b6] : undefined;
				if (cb) {
					if (e === "" && !bI.contains(cc.ownerDocument, cc)) {
						e = bI.style(cc, b6)
					}
					if (Y.test(e) && aZ.test(b6)) {
						b9 = b7.width;
						b8 = b7.minWidth;
						ca = b7.maxWidth;
						b7.minWidth = b7.maxWidth = b7.width = e;
						e = cb.width;
						b7.width = b9;
						b7.minWidth = b8;
						b7.maxWidth = ca
					}
				}
				return e === undefined ? e : e + ""
			}
		} else {
			if (o.documentElement.currentStyle) {
				bq = function(e) {
					return e.currentStyle
				}
				;
				G = function(cb, b8, ca) {
					var cc, b6, e, b7, b9 = cb.style;
					ca = ca || bq(cb);
					b7 = ca ? ca[b8] : undefined;
					if (b7 == null && b9 && b9[b8]) {
						b7 = b9[b8]
					}
					if (Y.test(b7) && !bo.test(b8)) {
						cc = b9.left;
						b6 = cb.runtimeStyle;
						e = b6 && b6.left;
						if (e) {
							b6.left = cb.currentStyle.left
						}
						b9.left = b8 === "fontSize" ? "1em" : b7;
						b7 = b9.pixelLeft + "px";
						b9.left = cc;
						if (e) {
							b6.left = e
						}
					}
					return b7 === undefined ? b7 : b7 + "" || "auto"
				}
			}
		}
		function a7(e, b6) {
			return {
				get: function() {
					var b7 = e();
					if (b7 == null) {
						return
					}
					if (b7) {
						delete this.get;
						return
					}
					return (this.get = b6).apply(this, arguments)
				}
			}
		}
		(function() {
			var cc, ca, b8, cb, b7, b9, b6;
			cc = o.createElement("div");
			cc.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
			b8 = cc.getElementsByTagName("a")[0];
			ca = b8 && b8.style;
			if (!ca) {
				return
			}
			ca.cssText = "float:left;opacity:.5";
			D.opacity = ca.opacity === "0.5";
			D.cssFloat = !!ca.cssFloat;
			cc.style.backgroundClip = "content-box";
			cc.cloneNode(true).style.backgroundClip = "";
			D.clearCloneStyle = cc.style.backgroundClip === "content-box";
			D.boxSizing = ca.boxSizing === "" || ca.MozBoxSizing === "" || ca.WebkitBoxSizing === "";
			bI.extend(D, {
				reliableHiddenOffsets: function() {
					if (b9 == null) {
						e()
					}
					return b9
				},
				boxSizingReliable: function() {
					if (b7 == null) {
						e()
					}
					return b7
				},
				pixelPosition: function() {
					if (cb == null) {
						e()
					}
					return cb
				},
				reliableMarginRight: function() {
					if (b6 == null) {
						e()
					}
					return b6
				}
			});
			function e() {
				var cg, cd, ce, cf;
				cd = o.getElementsByTagName("body")[0];
				if (!cd || !cd.style) {
					return
				}
				cg = o.createElement("div");
				ce = o.createElement("div");
				ce.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
				cd.appendChild(ce).appendChild(cg);
				cg.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
				cb = b7 = false;
				b6 = true;
				if (a5.getComputedStyle) {
					cb = (a5.getComputedStyle(cg, null) || {}).top !== "1%";
					b7 = (a5.getComputedStyle(cg, null) || {
						width: "4px"
					}).width === "4px";
					cf = cg.appendChild(o.createElement("div"));
					cf.style.cssText = cg.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
					cf.style.marginRight = cf.style.width = "0";
					cg.style.width = "1px";
					b6 = !parseFloat((a5.getComputedStyle(cf, null) || {}).marginRight);
					cg.removeChild(cf)
				}
				cg.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
				cf = cg.getElementsByTagName("td");
				cf[0].style.cssText = "margin:0;border:0;padding:0;display:none";
				b9 = cf[0].offsetHeight === 0;
				if (b9) {
					cf[0].style.display = "";
					cf[1].style.display = "none";
					b9 = cf[0].offsetHeight === 0
				}
				cd.removeChild(ce)
			}
		}
		)();
		bI.swap = function(ca, b9, cb, b8) {
			var b7, b6, e = {};
			for (b6 in b9) {
				e[b6] = ca.style[b6];
				ca.style[b6] = b9[b6]
			}
			b7 = cb.apply(ca, b8 || []);
			for (b6 in b9) {
				ca.style[b6] = e[b6]
			}
			return b7
		}
		;
		var bj = /alpha\([^)]*\)/i
		  , aU = /opacity\s*=\s*([^)]*)/
		  , H = /^(none|table(?!-c[ea]).+)/
		  , bb = new RegExp("^(" + aE + ")(.*)$","i")
		  , V = new RegExp("^([+-])=(" + aE + ")","i")
		  , be = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		}
		  , bD = {
			letterSpacing: "0",
			fontWeight: "400"
		}
		  , aw = ["Webkit", "O", "Moz", "ms"];
		function c(b8, b6) {
			if (b6 in b8) {
				return b6
			}
			var b9 = b6.charAt(0).toUpperCase() + b6.slice(1)
			  , e = b6
			  , b7 = aw.length;
			while (b7--) {
				b6 = aw[b7] + b9;
				if (b6 in b8) {
					return b6
				}
			}
			return e
		}
		function s(cb, e) {
			var cc, b9, ca, b6 = [], b7 = 0, b8 = cb.length;
			for (; b7 < b8; b7++) {
				b9 = cb[b7];
				if (!b9.style) {
					continue
				}
				b6[b7] = bI._data(b9, "olddisplay");
				cc = b9.style.display;
				if (e) {
					if (!b6[b7] && cc === "none") {
						b9.style.display = ""
					}
					if (b9.style.display === "" && S(b9)) {
						b6[b7] = bI._data(b9, "olddisplay", a0(b9.nodeName))
					}
				} else {
					ca = S(b9);
					if (cc && cc !== "none" || !ca) {
						bI._data(b9, "olddisplay", ca ? cc : bI.css(b9, "display"))
					}
				}
			}
			for (b7 = 0; b7 < b8; b7++) {
				b9 = cb[b7];
				if (!b9.style) {
					continue
				}
				if (!e || b9.style.display === "none" || b9.style.display === "") {
					b9.style.display = e ? b6[b7] || "" : "none"
				}
			}
			return cb
		}
		function aN(e, b7, b8) {
			var b6 = bb.exec(b7);
			return b6 ? Math.max(0, b6[1] - (b8 || 0)) + (b6[2] || "px") : b7
		}
		function ax(b9, b6, e, cb, b8) {
			var b7 = e === (cb ? "border" : "content") ? 4 : b6 === "width" ? 1 : 0
			  , ca = 0;
			for (; b7 < 4; b7 += 2) {
				if (e === "margin") {
					ca += bI.css(b9, e + bT[b7], true, b8)
				}
				if (cb) {
					if (e === "content") {
						ca -= bI.css(b9, "padding" + bT[b7], true, b8)
					}
					if (e !== "margin") {
						ca -= bI.css(b9, "border" + bT[b7] + "Width", true, b8)
					}
				} else {
					ca += bI.css(b9, "padding" + bT[b7], true, b8);
					if (e !== "padding") {
						ca += bI.css(b9, "border" + bT[b7] + "Width", true, b8)
					}
				}
			}
			return ca
		}
		function v(b9, b6, e) {
			var b8 = true
			  , ca = b6 === "width" ? b9.offsetWidth : b9.offsetHeight
			  , b7 = bq(b9)
			  , cb = D.boxSizing && bI.css(b9, "boxSizing", false, b7) === "border-box";
			if (ca <= 0 || ca == null) {
				ca = G(b9, b6, b7);
				if (ca < 0 || ca == null) {
					ca = b9.style[b6]
				}
				if (Y.test(ca)) {
					return ca
				}
				b8 = cb && (D.boxSizingReliable() || ca === b9.style[b6]);
				ca = parseFloat(ca) || 0
			}
			return (ca + ax(b9, b6, e || (cb ? "border" : "content"), b8, b7)) + "px"
		}
		bI.extend({
			cssHooks: {
				opacity: {
					get: function(b7, b6) {
						if (b6) {
							var e = G(b7, "opacity");
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
				"float": D.cssFloat ? "cssFloat" : "styleFloat"
			},
			style: function(b8, b7, ce, b9) {
				if (!b8 || b8.nodeType === 3 || b8.nodeType === 8 || !b8.style) {
					return
				}
				var cc, cd, cf, ca = bI.camelCase(b7), b6 = b8.style;
				b7 = bI.cssProps[ca] || (bI.cssProps[ca] = c(b6, ca));
				cf = bI.cssHooks[b7] || bI.cssHooks[ca];
				if (ce !== undefined) {
					cd = typeof ce;
					if (cd === "string" && (cc = V.exec(ce))) {
						ce = (cc[1] + 1) * cc[2] + parseFloat(bI.css(b8, b7));
						cd = "number"
					}
					if (ce == null || ce !== ce) {
						return
					}
					if (cd === "number" && !bI.cssNumber[ca]) {
						ce += "px"
					}
					if (!D.clearCloneStyle && ce === "" && b7.indexOf("background") === 0) {
						b6[b7] = "inherit"
					}
					if (!cf || !("set"in cf) || (ce = cf.set(b8, ce, b9)) !== undefined) {
						try {
							b6[b7] = ce
						} catch (cb) {}
					}
				} else {
					if (cf && "get"in cf && (cc = cf.get(b8, false, b9)) !== undefined) {
						return cc
					}
					return b6[b7]
				}
			},
			css: function(cb, b9, b6, ca) {
				var b8, cc, e, b7 = bI.camelCase(b9);
				b9 = bI.cssProps[b7] || (bI.cssProps[b7] = c(cb.style, b7));
				e = bI.cssHooks[b9] || bI.cssHooks[b7];
				if (e && "get"in e) {
					cc = e.get(cb, true, b6)
				}
				if (cc === undefined) {
					cc = G(cb, b9, ca)
				}
				if (cc === "normal" && b9 in bD) {
					cc = bD[b9]
				}
				if (b6 === "" || b6) {
					b8 = parseFloat(cc);
					return b6 === true || bI.isNumeric(b8) ? b8 || 0 : cc
				}
				return cc
			}
		});
		bI.each(["height", "width"], function(b6, e) {
			bI.cssHooks[e] = {
				get: function(b9, b8, b7) {
					if (b8) {
						return H.test(bI.css(b9, "display")) && b9.offsetWidth === 0 ? bI.swap(b9, be, function() {
							return v(b9, e, b7)
						}) : v(b9, e, b7)
					}
				},
				set: function(b9, ca, b7) {
					var b8 = b7 && bq(b9);
					return aN(b9, ca, b7 ? ax(b9, e, b7, D.boxSizing && bI.css(b9, "boxSizing", false, b8) === "border-box", b8) : 0)
				}
			}
		});
		if (!D.opacity) {
			bI.cssHooks.opacity = {
				get: function(b6, e) {
					return aU.test((e && b6.currentStyle ? b6.currentStyle.filter : b6.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : e ? "1" : ""
				},
				set: function(b9, ca) {
					var b8 = b9.style
					  , b6 = b9.currentStyle
					  , e = bI.isNumeric(ca) ? "alpha(opacity=" + ca * 100 + ")" : ""
					  , b7 = b6 && b6.filter || b8.filter || "";
					b8.zoom = 1;
					if ((ca >= 1 || ca === "") && bI.trim(b7.replace(bj, "")) === "" && b8.removeAttribute) {
						b8.removeAttribute("filter");
						if (ca === "" || b6 && !b6.filter) {
							return
						}
					}
					b8.filter = bj.test(b7) ? b7.replace(bj, e) : b7 + " " + e
				}
			}
		}
		bI.cssHooks.marginRight = a7(D.reliableMarginRight, function(b6, e) {
			if (e) {
				return bI.swap(b6, {
					display: "inline-block"
				}, G, [b6, "marginRight"])
			}
		});
		bI.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(e, b6) {
			bI.cssHooks[e + b6] = {
				expand: function(b9) {
					var b8 = 0
					  , b7 = {}
					  , ca = typeof b9 === "string" ? b9.split(" ") : [b9];
					for (; b8 < 4; b8++) {
						b7[e + bT[b8] + b6] = ca[b8] || ca[b8 - 2] || ca[0]
					}
					return b7
				}
			};
			if (!aZ.test(e)) {
				bI.cssHooks[e + b6].set = aN
			}
		});
		bI.fn.extend({
			css: function(e, b6) {
				return aB(this, function(cb, b8, cc) {
					var ca, b7, cd = {}, b9 = 0;
					if (bI.isArray(b8)) {
						ca = bq(cb);
						b7 = b8.length;
						for (; b9 < b7; b9++) {
							cd[b8[b9]] = bI.css(cb, b8[b9], false, ca)
						}
						return cd
					}
					return cc !== undefined ? bI.style(cb, b8, cc) : bI.css(cb, b8)
				}, e, b6, arguments.length > 1)
			},
			show: function() {
				return s(this, true)
			},
			hide: function() {
				return s(this)
			},
			toggle: function(e) {
				if (typeof e === "boolean") {
					return e ? this.show() : this.hide()
				}
				return this.each(function() {
					if (S(this)) {
						bI(this).show()
					} else {
						bI(this).hide()
					}
				})
			}
		});
		function J(b7, b6, b9, e, b8) {
			return new J.prototype.init(b7,b6,b9,e,b8)
		}
		bI.Tween = J;
		J.prototype = {
			constructor: J,
			init: function(b8, b6, ca, e, b9, b7) {
				this.elem = b8;
				this.prop = ca;
				this.easing = b9 || "swing";
				this.options = b6;
				this.start = this.now = this.cur();
				this.end = e;
				this.unit = b7 || (bI.cssNumber[ca] ? "" : "px")
			},
			cur: function() {
				var e = J.propHooks[this.prop];
				return e && e.get ? e.get(this) : J.propHooks._default.get(this)
			},
			run: function(b7) {
				var b6, e = J.propHooks[this.prop];
				if (this.options.duration) {
					this.pos = b6 = bI.easing[this.easing](b7, this.options.duration * b7, 0, 1, this.options.duration)
				} else {
					this.pos = b6 = b7
				}
				this.now = (this.end - this.start) * b6 + this.start;
				if (this.options.step) {
					this.options.step.call(this.elem, this.now, this)
				}
				if (e && e.set) {
					e.set(this)
				} else {
					J.propHooks._default.set(this)
				}
				return this
			}
		};
		J.prototype.init.prototype = J.prototype;
		J.propHooks = {
			_default: {
				get: function(b6) {
					var e;
					if (b6.elem[b6.prop] != null && (!b6.elem.style || b6.elem.style[b6.prop] == null)) {
						return b6.elem[b6.prop]
					}
					e = bI.css(b6.elem, b6.prop, "");
					return !e || e === "auto" ? 0 : e
				},
				set: function(e) {
					if (bI.fx.step[e.prop]) {
						bI.fx.step[e.prop](e)
					} else {
						if (e.elem.style && (e.elem.style[bI.cssProps[e.prop]] != null || bI.cssHooks[e.prop])) {
							bI.style(e.elem, e.prop, e.now + e.unit)
						} else {
							e.elem[e.prop] = e.now
						}
					}
				}
			}
		};
		J.propHooks.scrollTop = J.propHooks.scrollLeft = {
			set: function(e) {
				if (e.elem.nodeType && e.elem.parentNode) {
					e.elem[e.prop] = e.now
				}
			}
		};
		bI.easing = {
			linear: function(e) {
				return e
			},
			swing: function(e) {
				return 0.5 - Math.cos(e * Math.PI) / 2
			}
		};
		bI.fx = J.prototype.init;
		bI.fx.step = {};
		var N, ae, bR = /^(?:toggle|show|hide)$/, bJ = new RegExp("^(?:([+-])=|)(" + aE + ")([a-z%]*)$","i"), bP = /queueHooks$/, aG = [h], a2 = {
			"*": [function(e, cb) {
				var cd = this.createTween(e, cb)
				  , b9 = cd.cur()
				  , b8 = bJ.exec(cb)
				  , cc = b8 && b8[3] || (bI.cssNumber[e] ? "" : "px")
				  , b6 = (bI.cssNumber[e] || cc !== "px" && +b9) && bJ.exec(bI.css(cd.elem, e))
				  , b7 = 1
				  , ca = 20;
				if (b6 && b6[3] !== cc) {
					cc = cc || b6[3];
					b8 = b8 || [];
					b6 = +b9 || 1;
					do {
						b7 = b7 || ".5";
						b6 = b6 / b7;
						bI.style(cd.elem, e, b6 + cc)
					} while (b7 !== (b7 = cd.cur() / b9) && b7 !== 1 && --ca)
				}
				if (b8) {
					b6 = cd.start = +b6 || +b9 || 0;
					cd.unit = cc;
					cd.end = b8[1] ? b6 + (b8[1] + 1) * b8[2] : +b8[2]
				}
				return cd
			}
			]
		};
		function bn() {
			setTimeout(function() {
				N = undefined
			});
			return (N = bI.now())
		}
		function bH(b7, b9) {
			var b8, e = {
				height: b7
			}, b6 = 0;
			b9 = b9 ? 1 : 0;
			for (; b6 < 4; b6 += 2 - b9) {
				b8 = bT[b6];
				e["margin" + b8] = e["padding" + b8] = b7
			}
			if (b9) {
				e.opacity = e.width = b7
			}
			return e
		}
		function bd(b9, cb, b8) {
			var b6, ca = (a2[cb] || []).concat(a2["*"]), e = 0, b7 = ca.length;
			for (; e < b7; e++) {
				if ((b6 = ca[e].call(b8, cb, b9))) {
					return b6
				}
			}
		}
		function h(b8, cd, e) {
			var b7, cg, ca, cj, ck, ch, cc, cf, b9 = this, ce = {}, b6 = b8.style, cb = b8.nodeType && S(b8), ci = bI._data(b8, "fxshow");
			if (!e.queue) {
				ck = bI._queueHooks(b8, "fx");
				if (ck.unqueued == null) {
					ck.unqueued = 0;
					ch = ck.empty.fire;
					ck.empty.fire = function() {
						if (!ck.unqueued) {
							ch()
						}
					}
				}
				ck.unqueued++;
				b9.always(function() {
					b9.always(function() {
						ck.unqueued--;
						if (!bI.queue(b8, "fx").length) {
							ck.empty.fire()
						}
					})
				})
			}
			if (b8.nodeType === 1 && ("height"in cd || "width"in cd)) {
				e.overflow = [b6.overflow, b6.overflowX, b6.overflowY];
				cc = bI.css(b8, "display");
				cf = cc === "none" ? bI._data(b8, "olddisplay") || a0(b8.nodeName) : cc;
				if (cf === "inline" && bI.css(b8, "float") === "none") {
					if (!D.inlineBlockNeedsLayout || a0(b8.nodeName) === "inline") {
						b6.display = "inline-block"
					} else {
						b6.zoom = 1
					}
				}
			}
			if (e.overflow) {
				b6.overflow = "hidden";
				if (!D.shrinkWrapBlocks()) {
					b9.always(function() {
						b6.overflow = e.overflow[0];
						b6.overflowX = e.overflow[1];
						b6.overflowY = e.overflow[2]
					})
				}
			}
			for (b7 in cd) {
				cg = cd[b7];
				if (bR.exec(cg)) {
					delete cd[b7];
					ca = ca || cg === "toggle";
					if (cg === (cb ? "hide" : "show")) {
						if (cg === "show" && ci && ci[b7] !== undefined) {
							cb = true
						} else {
							continue
						}
					}
					ce[b7] = ci && ci[b7] || bI.style(b8, b7)
				} else {
					cc = undefined
				}
			}
			if (!bI.isEmptyObject(ce)) {
				if (ci) {
					if ("hidden"in ci) {
						cb = ci.hidden
					}
				} else {
					ci = bI._data(b8, "fxshow", {})
				}
				if (ca) {
					ci.hidden = !cb
				}
				if (cb) {
					bI(b8).show()
				} else {
					b9.done(function() {
						bI(b8).hide()
					})
				}
				b9.done(function() {
					var cl;
					bI._removeData(b8, "fxshow");
					for (cl in ce) {
						bI.style(b8, cl, ce[cl])
					}
				});
				for (b7 in ce) {
					cj = bd(cb ? ci[b7] : 0, b7, b9);
					if (!(b7 in ci)) {
						ci[b7] = cj.start;
						if (cb) {
							cj.end = cj.start;
							cj.start = b7 === "width" || b7 === "height" ? 1 : 0
						}
					}
				}
			} else {
				if ((cc === "none" ? a0(b8.nodeName) : cc) === "inline") {
					b6.display = cc
				}
			}
		}
		function ao(b8, ca) {
			var b7, b6, cb, b9, e;
			for (b7 in b8) {
				b6 = bI.camelCase(b7);
				cb = ca[b6];
				b9 = b8[b7];
				if (bI.isArray(b9)) {
					cb = b9[1];
					b9 = b8[b7] = b9[0]
				}
				if (b7 !== b6) {
					b8[b6] = b9;
					delete b8[b7]
				}
				e = bI.cssHooks[b6];
				if (e && "expand"in e) {
					b9 = e.expand(b9);
					delete b8[b6];
					for (b7 in b9) {
						if (!(b7 in b8)) {
							b8[b7] = b9[b7];
							ca[b7] = cb
						}
					}
				} else {
					ca[b6] = cb
				}
			}
		}
		function f(b7, cb, ce) {
			var cf, e, ca = 0, b6 = aG.length, cd = bI.Deferred().always(function() {
				delete b9.elem
			}), b9 = function() {
				if (e) {
					return false
				}
				var cl = N || bn()
				  , ci = Math.max(0, b8.startTime + b8.duration - cl)
				  , cg = ci / b8.duration || 0
				  , ck = 1 - cg
				  , ch = 0
				  , cj = b8.tweens.length;
				for (; ch < cj; ch++) {
					b8.tweens[ch].run(ck)
				}
				cd.notifyWith(b7, [b8, ck, ci]);
				if (ck < 1 && cj) {
					return ci
				} else {
					cd.resolveWith(b7, [b8]);
					return false
				}
			}, b8 = cd.promise({
				elem: b7,
				props: bI.extend({}, cb),
				opts: bI.extend(true, {
					specialEasing: {}
				}, ce),
				originalProperties: cb,
				originalOptions: ce,
				startTime: N || bn(),
				duration: ce.duration,
				tweens: [],
				createTween: function(ci, cg) {
					var ch = bI.Tween(b7, b8.opts, ci, cg, b8.opts.specialEasing[ci] || b8.opts.easing);
					b8.tweens.push(ch);
					return ch
				},
				stop: function(ch) {
					var cg = 0
					  , ci = ch ? b8.tweens.length : 0;
					if (e) {
						return this
					}
					e = true;
					for (; cg < ci; cg++) {
						b8.tweens[cg].run(1)
					}
					if (ch) {
						cd.resolveWith(b7, [b8, ch])
					} else {
						cd.rejectWith(b7, [b8, ch])
					}
					return this
				}
			}), cc = b8.props;
			ao(cc, b8.opts.specialEasing);
			for (; ca < b6; ca++) {
				cf = aG[ca].call(b8, b7, cc, b8.opts);
				if (cf) {
					return cf
				}
			}
			bI.map(cc, bd, b8);
			if (bI.isFunction(b8.opts.start)) {
				b8.opts.start.call(b7, b8)
			}
			bI.fx.timer(bI.extend(b9, {
				elem: b7,
				anim: b8,
				queue: b8.opts.queue
			}));
			return b8.progress(b8.opts.progress).done(b8.opts.done, b8.opts.complete).fail(b8.opts.fail).always(b8.opts.always)
		}
		bI.Animation = bI.extend(f, {
			tweener: function(b6, b9) {
				if (bI.isFunction(b6)) {
					b9 = b6;
					b6 = ["*"]
				} else {
					b6 = b6.split(" ")
				}
				var b8, e = 0, b7 = b6.length;
				for (; e < b7; e++) {
					b8 = b6[e];
					a2[b8] = a2[b8] || [];
					a2[b8].unshift(b9)
				}
			},
			prefilter: function(b6, e) {
				if (e) {
					aG.unshift(b6)
				} else {
					aG.push(b6)
				}
			}
		});
		bI.speed = function(b7, b8, b6) {
			var e = b7 && typeof b7 === "object" ? bI.extend({}, b7) : {
				complete: b6 || !b6 && b8 || bI.isFunction(b7) && b7,
				duration: b7,
				easing: b6 && b8 || b8 && !bI.isFunction(b8) && b8
			};
			e.duration = bI.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in bI.fx.speeds ? bI.fx.speeds[e.duration] : bI.fx.speeds._default;
			if (e.queue == null || e.queue === true) {
				e.queue = "fx"
			}
			e.old = e.complete;
			e.complete = function() {
				if (bI.isFunction(e.old)) {
					e.old.call(this)
				}
				if (e.queue) {
					bI.dequeue(this, e.queue)
				}
			}
			;
			return e
		}
		;
		bI.fn.extend({
			fadeTo: function(e, b8, b7, b6) {
				return this.filter(S).css("opacity", 0).show().end().animate({
					opacity: b8
				}, e, b7, b6)
			},
			animate: function(cb, b8, ca, b9) {
				var b7 = bI.isEmptyObject(cb)
				  , e = bI.speed(b8, ca, b9)
				  , b6 = function() {
					var cc = f(this, bI.extend({}, cb), e);
					if (b7 || bI._data(this, "finish")) {
						cc.stop(true)
					}
				};
				b6.finish = b6;
				return b7 || e.queue === false ? this.each(b6) : this.queue(e.queue, b6)
			},
			stop: function(b7, b6, e) {
				var b8 = function(b9) {
					var ca = b9.stop;
					delete b9.stop;
					ca(e)
				};
				if (typeof b7 !== "string") {
					e = b6;
					b6 = b7;
					b7 = undefined
				}
				if (b6 && b7 !== false) {
					this.queue(b7 || "fx", [])
				}
				return this.each(function() {
					var cc = true
					  , b9 = b7 != null && b7 + "queueHooks"
					  , cb = bI.timers
					  , ca = bI._data(this);
					if (b9) {
						if (ca[b9] && ca[b9].stop) {
							b8(ca[b9])
						}
					} else {
						for (b9 in ca) {
							if (ca[b9] && ca[b9].stop && bP.test(b9)) {
								b8(ca[b9])
							}
						}
					}
					for (b9 = cb.length; b9--; ) {
						if (cb[b9].elem === this && (b7 == null || cb[b9].queue === b7)) {
							cb[b9].anim.stop(e);
							cc = false;
							cb.splice(b9, 1)
						}
					}
					if (cc || !e) {
						bI.dequeue(this, b7)
					}
				})
			},
			finish: function(e) {
				if (e !== false) {
					e = e || "fx"
				}
				return this.each(function() {
					var b8, cb = bI._data(this), b7 = cb[e + "queue"], b6 = cb[e + "queueHooks"], ca = bI.timers, b9 = b7 ? b7.length : 0;
					cb.finish = true;
					bI.queue(this, e, []);
					if (b6 && b6.stop) {
						b6.stop.call(this, true)
					}
					for (b8 = ca.length; b8--; ) {
						if (ca[b8].elem === this && ca[b8].queue === e) {
							ca[b8].anim.stop(true);
							ca.splice(b8, 1)
						}
					}
					for (b8 = 0; b8 < b9; b8++) {
						if (b7[b8] && b7[b8].finish) {
							b7[b8].finish.call(this)
						}
					}
					delete cb.finish
				})
			}
		});
		bI.each(["toggle", "show", "hide"], function(b6, e) {
			var b7 = bI.fn[e];
			bI.fn[e] = function(b8, ca, b9) {
				return b8 == null || typeof b8 === "boolean" ? b7.apply(this, arguments) : this.animate(bH(e, true), b8, ca, b9)
			}
		});
		bI.each({
			slideDown: bH("show"),
			slideUp: bH("hide"),
			slideToggle: bH("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, b6) {
			bI.fn[e] = function(b7, b9, b8) {
				return this.animate(b6, b7, b9, b8)
			}
		});
		bI.timers = [];
		bI.fx.tick = function() {
			var b7, b6 = bI.timers, e = 0;
			N = bI.now();
			for (; e < b6.length; e++) {
				b7 = b6[e];
				if (!b7() && b6[e] === b7) {
					b6.splice(e--, 1)
				}
			}
			if (!b6.length) {
				bI.fx.stop()
			}
			N = undefined
		}
		;
		bI.fx.timer = function(e) {
			bI.timers.push(e);
			if (e()) {
				bI.fx.start()
			} else {
				bI.timers.pop()
			}
		}
		;
		bI.fx.interval = 13;
		bI.fx.start = function() {
			if (!ae) {
				ae = setInterval(bI.fx.tick, bI.fx.interval)
			}
		}
		;
		bI.fx.stop = function() {
			clearInterval(ae);
			ae = null
		}
		;
		bI.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		};
		bI.fn.delay = function(b6, e) {
			b6 = bI.fx ? bI.fx.speeds[b6] || b6 : b6;
			e = e || "fx";
			return this.queue(e, function(b8, b7) {
				var b9 = setTimeout(b8, b6);
				b7.stop = function() {
					clearTimeout(b9)
				}
			})
		}
		;
		(function() {
			var b7, b9, e, b6, b8;
			b9 = o.createElement("div");
			b9.setAttribute("className", "t");
			b9.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
			b6 = b9.getElementsByTagName("a")[0];
			e = o.createElement("select");
			b8 = e.appendChild(o.createElement("option"));
			b7 = b9.getElementsByTagName("input")[0];
			b6.style.cssText = "top:1px";
			D.getSetAttribute = b9.className !== "t";
			D.style = /top/.test(b6.getAttribute("style"));
			D.hrefNormalized = b6.getAttribute("href") === "/a";
			D.checkOn = !!b7.value;
			D.optSelected = b8.selected;
			D.enctype = !!o.createElement("form").enctype;
			e.disabled = true;
			D.optDisabled = !b8.disabled;
			b7 = o.createElement("input");
			b7.setAttribute("value", "");
			D.input = b7.getAttribute("value") === "";
			b7.value = "t";
			b7.setAttribute("type", "radio");
			D.radioValue = b7.value === "t"
		}
		)();
		var al = /\r/g;
		bI.fn.extend({
			val: function(b8) {
				var e, b6, b9, b7 = this[0];
				if (!arguments.length) {
					if (b7) {
						e = bI.valHooks[b7.type] || bI.valHooks[b7.nodeName.toLowerCase()];
						if (e && "get"in e && (b6 = e.get(b7, "value")) !== undefined) {
							return b6
						}
						b6 = b7.value;
						return typeof b6 === "string" ? b6.replace(al, "") : b6 == null ? "" : b6
					}
					return
				}
				b9 = bI.isFunction(b8);
				return this.each(function(ca) {
					var cb;
					if (this.nodeType !== 1) {
						return
					}
					if (b9) {
						cb = b8.call(this, ca, bI(this).val())
					} else {
						cb = b8
					}
					if (cb == null) {
						cb = ""
					} else {
						if (typeof cb === "number") {
							cb += ""
						} else {
							if (bI.isArray(cb)) {
								cb = bI.map(cb, function(cc) {
									return cc == null ? "" : cc + ""
								})
							}
						}
					}
					e = bI.valHooks[this.type] || bI.valHooks[this.nodeName.toLowerCase()];
					if (!e || !("set"in e) || e.set(this, cb, "value") === undefined) {
						this.value = cb
					}
				})
			}
		});
		bI.extend({
			valHooks: {
				option: {
					get: function(e) {
						var b6 = bI.find.attr(e, "value");
						return b6 != null ? b6 : bI.trim(bI.text(e))
					}
				},
				select: {
					get: function(e) {
						var cb, b7, cd = e.options, b9 = e.selectedIndex, b8 = e.type === "select-one" || b9 < 0, cc = b8 ? null : [], ca = b8 ? b9 + 1 : cd.length, b6 = b9 < 0 ? ca : b8 ? b9 : 0;
						for (; b6 < ca; b6++) {
							b7 = cd[b6];
							if ((b7.selected || b6 === b9) && (D.optDisabled ? !b7.disabled : b7.getAttribute("disabled") === null) && (!b7.parentNode.disabled || !bI.nodeName(b7.parentNode, "optgroup"))) {
								cb = bI(b7).val();
								if (b8) {
									return cb
								}
								cc.push(cb)
							}
						}
						return cc
					},
					set: function(ca, cb) {
						var cc, b9, b7 = ca.options, e = bI.makeArray(cb), b8 = b7.length;
						while (b8--) {
							b9 = b7[b8];
							if (bI.inArray(bI.valHooks.option.get(b9), e) >= 0) {
								try {
									b9.selected = cc = true
								} catch (b6) {
									b9.scrollHeight
								}
							} else {
								b9.selected = false
							}
						}
						if (!cc) {
							ca.selectedIndex = -1
						}
						return b7
					}
				}
			}
		});
		bI.each(["radio", "checkbox"], function() {
			bI.valHooks[this] = {
				set: function(e, b6) {
					if (bI.isArray(b6)) {
						return (e.checked = bI.inArray(bI(e).val(), b6) >= 0)
					}
				}
			};
			if (!D.checkOn) {
				bI.valHooks[this].get = function(e) {
					return e.getAttribute("value") === null ? "on" : e.value
				}
			}
		});
		var ba, b3, bO = bI.expr.attrHandle, aq = /^(?:checked|selected)$/i, bN = D.getSetAttribute, bF = D.input;
		bI.fn.extend({
			attr: function(e, b6) {
				return aB(this, bI.attr, e, b6, arguments.length > 1)
			},
			removeAttr: function(e) {
				return this.each(function() {
					bI.removeAttr(this, e)
				})
			}
		});
		bI.extend({
			attr: function(b9, b8, ca) {
				var e, b7, b6 = b9.nodeType;
				if (!b9 || b6 === 3 || b6 === 8 || b6 === 2) {
					return
				}
				if (typeof b9.getAttribute === aC) {
					return bI.prop(b9, b8, ca)
				}
				if (b6 !== 1 || !bI.isXMLDoc(b9)) {
					b8 = b8.toLowerCase();
					e = bI.attrHooks[b8] || (bI.expr.match.bool.test(b8) ? b3 : ba)
				}
				if (ca !== undefined) {
					if (ca === null) {
						bI.removeAttr(b9, b8)
					} else {
						if (e && "set"in e && (b7 = e.set(b9, ca, b8)) !== undefined) {
							return b7
						} else {
							b9.setAttribute(b8, ca + "");
							return ca
						}
					}
				} else {
					if (e && "get"in e && (b7 = e.get(b9, b8)) !== null) {
						return b7
					} else {
						b7 = bI.find.attr(b9, b8);
						return b7 == null ? undefined : b7
					}
				}
			},
			removeAttr: function(b7, b9) {
				var e, b8, b6 = 0, ca = b9 && b9.match(aF);
				if (ca && b7.nodeType === 1) {
					while ((e = ca[b6++])) {
						b8 = bI.propFix[e] || e;
						if (bI.expr.match.bool.test(e)) {
							if (bF && bN || !aq.test(e)) {
								b7[b8] = false
							} else {
								b7[bI.camelCase("default-" + e)] = b7[b8] = false
							}
						} else {
							bI.attr(b7, e, "")
						}
						b7.removeAttribute(bN ? e : b8)
					}
				}
			},
			attrHooks: {
				type: {
					set: function(e, b6) {
						if (!D.radioValue && b6 === "radio" && bI.nodeName(e, "input")) {
							var b7 = e.value;
							e.setAttribute("type", b6);
							if (b7) {
								e.value = b7
							}
							return b6
						}
					}
				}
			}
		});
		b3 = {
			set: function(b6, b7, e) {
				if (b7 === false) {
					bI.removeAttr(b6, e)
				} else {
					if (bF && bN || !aq.test(e)) {
						b6.setAttribute(!bN && bI.propFix[e] || e, e)
					} else {
						b6[bI.camelCase("default-" + e)] = b6[e] = true
					}
				}
				return e
			}
		};
		bI.each(bI.expr.match.bool.source.match(/\w+/g), function(b7, b6) {
			var e = bO[b6] || bI.find.attr;
			bO[b6] = bF && bN || !aq.test(b6) ? function(ca, b9, cc) {
				var b8, cb;
				if (!cc) {
					cb = bO[b9];
					bO[b9] = b8;
					b8 = e(ca, b9, cc) != null ? b9.toLowerCase() : null;
					bO[b9] = cb
				}
				return b8
			}
			: function(b9, b8, ca) {
				if (!ca) {
					return b9[bI.camelCase("default-" + b8)] ? b8.toLowerCase() : null
				}
			}
		});
		if (!bF || !bN) {
			bI.attrHooks.value = {
				set: function(b6, b7, e) {
					if (bI.nodeName(b6, "input")) {
						b6.defaultValue = b7
					} else {
						return ba && ba.set(b6, b7, e)
					}
				}
			}
		}
		if (!bN) {
			ba = {
				set: function(b7, b8, b6) {
					var e = b7.getAttributeNode(b6);
					if (!e) {
						b7.setAttributeNode((e = b7.ownerDocument.createAttribute(b6)))
					}
					e.value = b8 += "";
					if (b6 === "value" || b8 === b7.getAttribute(b6)) {
						return b8
					}
				}
			};
			bO.id = bO.name = bO.coords = function(b7, b6, b8) {
				var e;
				if (!b8) {
					return (e = b7.getAttributeNode(b6)) && e.value !== "" ? e.value : null
				}
			}
			;
			bI.valHooks.button = {
				get: function(b7, b6) {
					var e = b7.getAttributeNode(b6);
					if (e && e.specified) {
						return e.value
					}
				},
				set: ba.set
			};
			bI.attrHooks.contenteditable = {
				set: function(b6, b7, e) {
					ba.set(b6, b7 === "" ? false : b7, e)
				}
			};
			bI.each(["width", "height"], function(b6, e) {
				bI.attrHooks[e] = {
					set: function(b7, b8) {
						if (b8 === "") {
							b7.setAttribute(e, "auto");
							return b8
						}
					}
				}
			})
		}
		if (!D.style) {
			bI.attrHooks.style = {
				get: function(e) {
					return e.style.cssText || undefined
				},
				set: function(e, b6) {
					return (e.style.cssText = b6 + "")
				}
			}
		}
		var aJ = /^(?:input|select|textarea|button|object)$/i
		  , F = /^(?:a|area)$/i;
		bI.fn.extend({
			prop: function(e, b6) {
				return aB(this, bI.prop, e, b6, arguments.length > 1)
			},
			removeProp: function(e) {
				e = bI.propFix[e] || e;
				return this.each(function() {
					try {
						this[e] = undefined;
						delete this[e]
					} catch (b6) {}
				})
			}
		});
		bI.extend({
			propFix: {
				"for": "htmlFor",
				"class": "className"
			},
			prop: function(ca, b8, cb) {
				var b7, e, b9, b6 = ca.nodeType;
				if (!ca || b6 === 3 || b6 === 8 || b6 === 2) {
					return
				}
				b9 = b6 !== 1 || !bI.isXMLDoc(ca);
				if (b9) {
					b8 = bI.propFix[b8] || b8;
					e = bI.propHooks[b8]
				}
				if (cb !== undefined) {
					return e && "set"in e && (b7 = e.set(ca, cb, b8)) !== undefined ? b7 : (ca[b8] = cb)
				} else {
					return e && "get"in e && (b7 = e.get(ca, b8)) !== null ? b7 : ca[b8]
				}
			},
			propHooks: {
				tabIndex: {
					get: function(b6) {
						var e = bI.find.attr(b6, "tabindex");
						return e ? parseInt(e, 10) : aJ.test(b6.nodeName) || F.test(b6.nodeName) && b6.href ? 0 : -1
					}
				}
			}
		});
		if (!D.hrefNormalized) {
			bI.each(["href", "src"], function(b6, e) {
				bI.propHooks[e] = {
					get: function(b7) {
						return b7.getAttribute(e, 4)
					}
				}
			})
		}
		if (!D.optSelected) {
			bI.propHooks.selected = {
				get: function(b6) {
					var e = b6.parentNode;
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
		bI.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
			bI.propFix[this.toLowerCase()] = this
		});
		if (!D.enctype) {
			bI.propFix.enctype = "encoding"
		}
		var bL = /[\t\r\n\f]/g;
		bI.fn.extend({
			addClass: function(cd) {
				var b7, b6, ce, cb, b8, e, b9 = 0, ca = this.length, cc = typeof cd === "string" && cd;
				if (bI.isFunction(cd)) {
					return this.each(function(cf) {
						bI(this).addClass(cd.call(this, cf, this.className))
					})
				}
				if (cc) {
					b7 = (cd || "").match(aF) || [];
					for (; b9 < ca; b9++) {
						b6 = this[b9];
						ce = b6.nodeType === 1 && (b6.className ? (" " + b6.className + " ").replace(bL, " ") : " ");
						if (ce) {
							b8 = 0;
							while ((cb = b7[b8++])) {
								if (ce.indexOf(" " + cb + " ") < 0) {
									ce += cb + " "
								}
							}
							e = bI.trim(ce);
							if (b6.className !== e) {
								b6.className = e
							}
						}
					}
				}
				return this
			},
			removeClass: function(cd) {
				var b7, b6, ce, cb, b8, e, b9 = 0, ca = this.length, cc = arguments.length === 0 || typeof cd === "string" && cd;
				if (bI.isFunction(cd)) {
					return this.each(function(cf) {
						bI(this).removeClass(cd.call(this, cf, this.className))
					})
				}
				if (cc) {
					b7 = (cd || "").match(aF) || [];
					for (; b9 < ca; b9++) {
						b6 = this[b9];
						ce = b6.nodeType === 1 && (b6.className ? (" " + b6.className + " ").replace(bL, " ") : "");
						if (ce) {
							b8 = 0;
							while ((cb = b7[b8++])) {
								while (ce.indexOf(" " + cb + " ") >= 0) {
									ce = ce.replace(" " + cb + " ", " ")
								}
							}
							e = cd ? bI.trim(ce) : "";
							if (b6.className !== e) {
								b6.className = e
							}
						}
					}
				}
				return this
			},
			toggleClass: function(b7, e) {
				var b6 = typeof b7;
				if (typeof e === "boolean" && b6 === "string") {
					return e ? this.addClass(b7) : this.removeClass(b7)
				}
				if (bI.isFunction(b7)) {
					return this.each(function(b8) {
						bI(this).toggleClass(b7.call(this, b8, this.className, e), e)
					})
				}
				return this.each(function() {
					if (b6 === "string") {
						var ca, b9 = 0, b8 = bI(this), cb = b7.match(aF) || [];
						while ((ca = cb[b9++])) {
							if (b8.hasClass(ca)) {
								b8.removeClass(ca)
							} else {
								b8.addClass(ca)
							}
						}
					} else {
						if (b6 === aC || b6 === "boolean") {
							if (this.className) {
								bI._data(this, "__className__", this.className)
							}
							this.className = this.className || b7 === false ? "" : bI._data(this, "__className__") || ""
						}
					}
				})
			},
			hasClass: function(e) {
				var b8 = " " + e + " "
				  , b7 = 0
				  , b6 = this.length;
				for (; b7 < b6; b7++) {
					if (this[b7].nodeType === 1 && (" " + this[b7].className + " ").replace(bL, " ").indexOf(b8) >= 0) {
						return true
					}
				}
				return false
			}
		});
		bI.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function(b6, e) {
			bI.fn[e] = function(b8, b7) {
				return arguments.length > 0 ? this.on(e, null, b8, b7) : this.trigger(e)
			}
		});
		bI.fn.extend({
			hover: function(e, b6) {
				return this.mouseenter(e).mouseleave(b6 || e)
			},
			bind: function(e, b7, b6) {
				return this.on(e, null, b7, b6)
			},
			unbind: function(e, b6) {
				return this.off(e, null, b6)
			},
			delegate: function(e, b6, b8, b7) {
				return this.on(b6, e, b8, b7)
			},
			undelegate: function(e, b6, b7) {
				return arguments.length === 1 ? this.off(e, "**") : this.off(b6, e || "**", b7)
			}
		});
		var bp = bI.now();
		var bQ = (/\?/);
		var a1 = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
		bI.parseJSON = function(e) {
			if (a5.JSON && a5.JSON.parse) {
				return a5.JSON.parse(e + "")
			}
			var b8, b7 = null, b6 = bI.trim(e + "");
			return b6 && !bI.trim(b6.replace(a1, function(cb, b9, ca, cc) {
				if (b8 && b9) {
					b7 = 0
				}
				if (b7 === 0) {
					return cb
				}
				b8 = ca || b9;
				b7 += !cc - !ca;
				return ""
			})) ? (Function("return " + b6))() : bI.error("Invalid JSON: " + e)
		}
		;
		bI.parseXML = function(b8) {
			var b6, b7;
			if (!b8 || typeof b8 !== "string") {
				return null
			}
			try {
				if (a5.DOMParser) {
					b7 = new DOMParser();
					b6 = b7.parseFromString(b8, "text/xml")
				} else {
					b6 = new ActiveXObject("Microsoft.XMLDOM");
					b6.async = "false";
					b6.loadXML(b8)
				}
			} catch (b9) {
				b6 = undefined
			}
			if (!b6 || !b6.documentElement || b6.getElementsByTagName("parsererror").length) {
				bI.error("Invalid XML: " + b8)
			}
			return b6
		}
		;
		var b4, aa, ap = /#.*$/, R = /([?&])_=[^&]*/, ah = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, C = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, r = /^(?:GET|HEAD)$/, aK = /^\/\//, aV = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, w = {}, a9 = {}, aX = "*/".concat("*");
		try {
			aa = location.href
		} catch (bi) {
			aa = o.createElement("a");
			aa.href = "";
			aa = aa.href
		}
		b4 = aV.exec(aa.toLowerCase()) || [];
		function bK(e) {
			return function(b9, ca) {
				if (typeof b9 !== "string") {
					ca = b9;
					b9 = "*"
				}
				var b6, b7 = 0, b8 = b9.toLowerCase().match(aF) || [];
				if (bI.isFunction(ca)) {
					while ((b6 = b8[b7++])) {
						if (b6.charAt(0) === "+") {
							b6 = b6.slice(1) || "*";
							(e[b6] = e[b6] || []).unshift(ca)
						} else {
							(e[b6] = e[b6] || []).push(ca)
						}
					}
				}
			}
		}
		function q(e, b7, cb, b8) {
			var b6 = {}
			  , b9 = (e === a9);
			function ca(cc) {
				var cd;
				b6[cc] = true;
				bI.each(e[cc] || [], function(cf, ce) {
					var cg = ce(b7, cb, b8);
					if (typeof cg === "string" && !b9 && !b6[cg]) {
						b7.dataTypes.unshift(cg);
						ca(cg);
						return false
					} else {
						if (b9) {
							return !(cd = cg)
						}
					}
				});
				return cd
			}
			return ca(b7.dataTypes[0]) || !b6["*"] && ca("*")
		}
		function t(b7, b8) {
			var e, b6, b9 = bI.ajaxSettings.flatOptions || {};
			for (b6 in b8) {
				if (b8[b6] !== undefined) {
					(b9[b6] ? b7 : (e || (e = {})))[b6] = b8[b6]
				}
			}
			if (e) {
				bI.extend(true, b7, e)
			}
			return b7
		}
		function g(cd, cc, b9) {
			var e, b8, b7, ca, b6 = cd.contents, cb = cd.dataTypes;
			while (cb[0] === "*") {
				cb.shift();
				if (b8 === undefined) {
					b8 = cd.mimeType || cc.getResponseHeader("Content-Type")
				}
			}
			if (b8) {
				for (ca in b6) {
					if (b6[ca] && b6[ca].test(b8)) {
						cb.unshift(ca);
						break
					}
				}
			}
			if (cb[0]in b9) {
				b7 = cb[0]
			} else {
				for (ca in b9) {
					if (!cb[0] || cd.converters[ca + " " + cb[0]]) {
						b7 = ca;
						break
					}
					if (!e) {
						e = ca
					}
				}
				b7 = b7 || e
			}
			if (b7) {
				if (b7 !== cb[0]) {
					cb.unshift(b7)
				}
				return b9[b7]
			}
		}
		function ag(ch, b9, ce, b7) {
			var b6, cc, cf, ca, b8, cg = {}, cd = ch.dataTypes.slice();
			if (cd[1]) {
				for (cf in ch.converters) {
					cg[cf.toLowerCase()] = ch.converters[cf]
				}
			}
			cc = cd.shift();
			while (cc) {
				if (ch.responseFields[cc]) {
					ce[ch.responseFields[cc]] = b9
				}
				if (!b8 && b7 && ch.dataFilter) {
					b9 = ch.dataFilter(b9, ch.dataType)
				}
				b8 = cc;
				cc = cd.shift();
				if (cc) {
					if (cc === "*") {
						cc = b8
					} else {
						if (b8 !== "*" && b8 !== cc) {
							cf = cg[b8 + " " + cc] || cg["* " + cc];
							if (!cf) {
								for (b6 in cg) {
									ca = b6.split(" ");
									if (ca[1] === cc) {
										cf = cg[b8 + " " + ca[0]] || cg["* " + ca[0]];
										if (cf) {
											if (cf === true) {
												cf = cg[b6]
											} else {
												if (cg[b6] !== true) {
													cc = ca[0];
													cd.unshift(ca[1])
												}
											}
											break
										}
									}
								}
							}
							if (cf !== true) {
								if (cf && ch["throws"]) {
									b9 = cf(b9)
								} else {
									try {
										b9 = cf(b9)
									} catch (cb) {
										return {
											state: "parsererror",
											error: cf ? cb : "No conversion from " + b8 + " to " + cc
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
				data: b9
			}
		}
		bI.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: aa,
				type: "GET",
				isLocal: C.test(b4[1]),
				global: true,
				processData: true,
				async: true,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": aX,
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
					"text json": bI.parseJSON,
					"text xml": bI.parseXML
				},
				flatOptions: {
					url: true,
					context: true
				}
			},
			ajaxSetup: function(b6, e) {
				return e ? t(t(b6, bI.ajaxSettings), e) : t(bI.ajaxSettings, b6)
			},
			ajaxPrefilter: bK(w),
			ajaxTransport: bK(a9),
			ajax: function(ca, b7) {
				if (typeof ca === "object") {
					b7 = ca;
					ca = undefined
				}
				b7 = b7 || {};
				var cj, cl, cb, cq, cf, b6, cm, b8, ce = bI.ajaxSetup({}, b7), cs = ce.context || ce, ch = ce.context && (cs.nodeType || cs.jquery) ? bI(cs) : bI.event, cr = bI.Deferred(), co = bI.Callbacks("once memory"), cc = ce.statusCode || {}, ci = {}, cp = {}, b9 = 0, cd = "canceled", ck = {
					readyState: 0,
					getResponseHeader: function(ct) {
						var e;
						if (b9 === 2) {
							if (!b8) {
								b8 = {};
								while ((e = ah.exec(cq))) {
									b8[e[1].toLowerCase()] = e[2]
								}
							}
							e = b8[ct.toLowerCase()]
						}
						return e == null ? null : e
					},
					getAllResponseHeaders: function() {
						return b9 === 2 ? cq : null
					},
					setRequestHeader: function(ct, cu) {
						var e = ct.toLowerCase();
						if (!b9) {
							ct = cp[e] = cp[e] || ct;
							ci[ct] = cu
						}
						return this
					},
					overrideMimeType: function(e) {
						if (!b9) {
							ce.mimeType = e
						}
						return this
					},
					statusCode: function(ct) {
						var e;
						if (ct) {
							if (b9 < 2) {
								for (e in ct) {
									cc[e] = [cc[e], ct[e]]
								}
							} else {
								ck.always(ct[ck.status])
							}
						}
						return this
					},
					abort: function(ct) {
						var e = ct || cd;
						if (cm) {
							cm.abort(e)
						}
						cg(0, e);
						return this
					}
				};
				cr.promise(ck).complete = co.add;
				ck.success = ck.done;
				ck.error = ck.fail;
				ce.url = ((ca || ce.url || aa) + "").replace(ap, "").replace(aK, b4[1] + "//");
				ce.type = b7.method || b7.type || ce.method || ce.type;
				ce.dataTypes = bI.trim(ce.dataType || "*").toLowerCase().match(aF) || [""];
				if (ce.crossDomain == null) {
					cj = aV.exec(ce.url.toLowerCase());
					ce.crossDomain = !!(cj && (cj[1] !== b4[1] || cj[2] !== b4[2] || (cj[3] || (cj[1] === "http:" ? "80" : "443")) !== (b4[3] || (b4[1] === "http:" ? "80" : "443"))))
				}
				if (ce.data && ce.processData && typeof ce.data !== "string") {
					ce.data = bI.param(ce.data, ce.traditional)
				}
				q(w, ce, b7, ck);
				if (b9 === 2) {
					return ck
				}
				b6 = bI.event && ce.global;
				if (b6 && bI.active++ === 0) {
					bI.event.trigger("ajaxStart")
				}
				ce.type = ce.type.toUpperCase();
				ce.hasContent = !r.test(ce.type);
				cb = ce.url;
				if (!ce.hasContent) {
					if (ce.data) {
						cb = (ce.url += (bQ.test(cb) ? "&" : "?") + ce.data);
						delete ce.data
					}
					if (ce.cache === false) {
						ce.url = R.test(cb) ? cb.replace(R, "$1_=" + bp++) : cb + (bQ.test(cb) ? "&" : "?") + "_=" + bp++
					}
				}
				if (ce.ifModified) {
					if (bI.lastModified[cb]) {
						ck.setRequestHeader("If-Modified-Since", bI.lastModified[cb])
					}
					if (bI.etag[cb]) {
						ck.setRequestHeader("If-None-Match", bI.etag[cb])
					}
				}
				if (ce.data && ce.hasContent && ce.contentType !== false || b7.contentType) {
					ck.setRequestHeader("Content-Type", ce.contentType)
				}
				ck.setRequestHeader("Accept", ce.dataTypes[0] && ce.accepts[ce.dataTypes[0]] ? ce.accepts[ce.dataTypes[0]] + (ce.dataTypes[0] !== "*" ? ", " + aX + "; q=0.01" : "") : ce.accepts["*"]);
				for (cl in ce.headers) {
					ck.setRequestHeader(cl, ce.headers[cl])
				}
				if (ce.beforeSend && (ce.beforeSend.call(cs, ck, ce) === false || b9 === 2)) {
					return ck.abort()
				}
				cd = "abort";
				for (cl in {
					success: 1,
					error: 1,
					complete: 1
				}) {
					ck[cl](ce[cl])
				}
				cm = q(a9, ce, b7, ck);
				if (!cm) {
					cg(-1, "No Transport")
				} else {
					ck.readyState = 1;
					if (b6) {
						ch.trigger("ajaxSend", [ck, ce])
					}
					if (ce.async && ce.timeout > 0) {
						cf = setTimeout(function() {
							ck.abort("timeout")
						}, ce.timeout)
					}
					try {
						b9 = 1;
						cm.send(ci, cg)
					} catch (cn) {
						if (b9 < 2) {
							cg(-1, cn)
						} else {
							throw cn
						}
					}
				}
				function cg(cx, ct, cy, cv) {
					var e, cB, cz, cw, cA, cu = ct;
					if (b9 === 2) {
						return
					}
					b9 = 2;
					if (cf) {
						clearTimeout(cf)
					}
					cm = undefined;
					cq = cv || "";
					ck.readyState = cx > 0 ? 4 : 0;
					e = cx >= 200 && cx < 300 || cx === 304;
					if (cy) {
						cw = g(ce, ck, cy)
					}
					cw = ag(ce, cw, ck, e);
					if (e) {
						if (ce.ifModified) {
							cA = ck.getResponseHeader("Last-Modified");
							if (cA) {
								bI.lastModified[cb] = cA
							}
							cA = ck.getResponseHeader("etag");
							if (cA) {
								bI.etag[cb] = cA
							}
						}
						if (cx === 204 || ce.type === "HEAD") {
							cu = "nocontent"
						} else {
							if (cx === 304) {
								cu = "notmodified"
							} else {
								cu = cw.state;
								cB = cw.data;
								cz = cw.error;
								e = !cz
							}
						}
					} else {
						cz = cu;
						if (cx || !cu) {
							cu = "error";
							if (cx < 0) {
								cx = 0
							}
						}
					}
					ck.status = cx;
					ck.statusText = (ct || cu) + "";
					if (e) {
						cr.resolveWith(cs, [cB, cu, ck])
					} else {
						cr.rejectWith(cs, [ck, cu, cz])
					}
					ck.statusCode(cc);
					cc = undefined;
					if (b6) {
						ch.trigger(e ? "ajaxSuccess" : "ajaxError", [ck, ce, e ? cB : cz])
					}
					co.fireWith(cs, [ck, cu]);
					if (b6) {
						ch.trigger("ajaxComplete", [ck, ce]);
						if (!(--bI.active)) {
							bI.event.trigger("ajaxStop")
						}
					}
				}
				return ck
			},
			getJSON: function(e, b6, b7) {
				return bI.get(e, b6, b7, "json")
			},
			getScript: function(e, b6) {
				return bI.get(e, undefined, b6, "script")
			}
		});
		bI.each(["get", "post"], function(e, b6) {
			bI[b6] = function(b7, b9, ca, b8) {
				if (bI.isFunction(b9)) {
					b8 = b8 || ca;
					ca = b9;
					b9 = undefined
				}
				return bI.ajax({
					url: b7,
					type: b6,
					dataType: b8,
					data: b9,
					success: ca
				})
			}
		});
		bI._evalUrl = function(e) {
			return bI.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: false,
				global: false,
				"throws": true
			})
		}
		;
		bI.fn.extend({
			wrapAll: function(e) {
				if (bI.isFunction(e)) {
					return this.each(function(b7) {
						bI(this).wrapAll(e.call(this, b7))
					})
				}
				if (this[0]) {
					var b6 = bI(e, this[0].ownerDocument).eq(0).clone(true);
					if (this[0].parentNode) {
						b6.insertBefore(this[0])
					}
					b6.map(function() {
						var b7 = this;
						while (b7.firstChild && b7.firstChild.nodeType === 1) {
							b7 = b7.firstChild
						}
						return b7
					}).append(this)
				}
				return this
			},
			wrapInner: function(e) {
				if (bI.isFunction(e)) {
					return this.each(function(b6) {
						bI(this).wrapInner(e.call(this, b6))
					})
				}
				return this.each(function() {
					var b6 = bI(this)
					  , b7 = b6.contents();
					if (b7.length) {
						b7.wrapAll(e)
					} else {
						b6.append(e)
					}
				})
			},
			wrap: function(e) {
				var b6 = bI.isFunction(e);
				return this.each(function(b7) {
					bI(this).wrapAll(b6 ? e.call(this, b7) : e)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					if (!bI.nodeName(this, "body")) {
						bI(this).replaceWith(this.childNodes)
					}
				}).end()
			}
		});
		bI.expr.filters.hidden = function(e) {
			return e.offsetWidth <= 0 && e.offsetHeight <= 0 || (!D.reliableHiddenOffsets() && ((e.style && e.style.display) || bI.css(e, "display")) === "none")
		}
		;
		bI.expr.filters.visible = function(e) {
			return !bI.expr.filters.hidden(e)
		}
		;
		var bw = /%20/g
		  , aS = /\[\]$/
		  , X = /\r?\n/g
		  , b = /^(?:submit|button|image|reset|file)$/i
		  , au = /^(?:input|select|textarea|keygen)/i;
		function k(b7, b9, b6, b8) {
			var e;
			if (bI.isArray(b9)) {
				bI.each(b9, function(cb, ca) {
					if (b6 || aS.test(b7)) {
						b8(b7, ca)
					} else {
						k(b7 + "[" + (typeof ca === "object" ? cb : "") + "]", ca, b6, b8)
					}
				})
			} else {
				if (!b6 && bI.type(b9) === "object") {
					for (e in b9) {
						k(b7 + "[" + e + "]", b9[e], b6, b8)
					}
				} else {
					b8(b7, b9)
				}
			}
		}
		bI.param = function(e, b7) {
			var b8, b6 = [], b9 = function(ca, cb) {
				cb = bI.isFunction(cb) ? cb() : (cb == null ? "" : cb);
				b6[b6.length] = encodeURIComponent(ca) + "=" + encodeURIComponent(cb)
			};
			if (b7 === undefined) {
				b7 = bI.ajaxSettings && bI.ajaxSettings.traditional
			}
			if (bI.isArray(e) || (e.jquery && !bI.isPlainObject(e))) {
				bI.each(e, function() {
					b9(this.name, this.value)
				})
			} else {
				for (b8 in e) {
					k(b8, e[b8], b7, b9)
				}
			}
			return b6.join("&").replace(bw, "+")
		}
		;
		bI.fn.extend({
			serialize: function() {
				return bI.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					var e = bI.prop(this, "elements");
					return e ? bI.makeArray(e) : this
				}).filter(function() {
					var e = this.type;
					return this.name && !bI(this).is(":disabled") && au.test(this.nodeName) && !b.test(e) && (this.checked || !aM.test(e))
				}).map(function(e, b6) {
					var b7 = bI(this).val();
					return b7 == null ? null : bI.isArray(b7) ? bI.map(b7, function(b8) {
						return {
							name: b6.name,
							value: b8.replace(X, "\r\n")
						}
					}) : {
						name: b6.name,
						value: b7.replace(X, "\r\n")
					}
				}).get()
			}
		});
		bI.ajaxSettings.xhr = a5.ActiveXObject !== undefined ? function() {
			return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && bE() || bg()
		}
		: bE;
		var aA = 0
		  , aj = {}
		  , ay = bI.ajaxSettings.xhr();
		if (a5.attachEvent) {
			a5.attachEvent("onunload", function() {
				for (var e in aj) {
					aj[e](undefined, true)
				}
			})
		}
		D.cors = !!ay && ("withCredentials"in ay);
		ay = D.ajax = !!ay;
		if (ay) {
			bI.ajaxTransport(function(e) {
				if (!e.crossDomain || D.cors) {
					var b6;
					return {
						send: function(ca, b7) {
							var b8, b9 = e.xhr(), cb = ++aA;
							b9.open(e.type, e.url, e.async, e.username, e.password);
							if (e.xhrFields) {
								for (b8 in e.xhrFields) {
									b9[b8] = e.xhrFields[b8]
								}
							}
							if (e.mimeType && b9.overrideMimeType) {
								b9.overrideMimeType(e.mimeType)
							}
							if (!e.crossDomain && !ca["X-Requested-With"]) {
								ca["X-Requested-With"] = "XMLHttpRequest"
							}
							for (b8 in ca) {
								if (ca[b8] !== undefined) {
									b9.setRequestHeader(b8, ca[b8] + "")
								}
							}
							b9.send((e.hasContent && e.data) || null);
							b6 = function(ce, cd) {
								var cc, ch, cf;
								if (b6 && (cd || b9.readyState === 4)) {
									delete aj[cb];
									b6 = undefined;
									b9.onreadystatechange = bI.noop;
									if (cd) {
										if (b9.readyState !== 4) {
											b9.abort()
										}
									} else {
										cf = {};
										cc = b9.status;
										if (typeof b9.responseText === "string") {
											cf.text = b9.responseText
										}
										try {
											ch = b9.statusText
										} catch (cg) {
											ch = ""
										}
										if (!cc && e.isLocal && !e.crossDomain) {
											cc = cf.text ? 200 : 404
										} else {
											if (cc === 1223) {
												cc = 204
											}
										}
									}
								}
								if (cf) {
									b7(cc, ch, cf, b9.getAllResponseHeaders())
								}
							}
							;
							if (!e.async) {
								b6()
							} else {
								if (b9.readyState === 4) {
									setTimeout(b6)
								} else {
									b9.onreadystatechange = aj[cb] = b6
								}
							}
						},
						abort: function() {
							if (b6) {
								b6(undefined, true)
							}
						}
					}
				}
			})
		}
		function bE() {
			try {
				return new a5.XMLHttpRequest()
			} catch (b6) {}
		}
		function bg() {
			try {
				return new a5.ActiveXObject("Microsoft.XMLHTTP")
			} catch (b6) {}
		}
		bI.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function(e) {
					bI.globalEval(e);
					return e
				}
			}
		});
		bI.ajaxPrefilter("script", function(e) {
			if (e.cache === undefined) {
				e.cache = false
			}
			if (e.crossDomain) {
				e.type = "GET";
				e.global = false
			}
		});
		bI.ajaxTransport("script", function(b7) {
			if (b7.crossDomain) {
				var e, b6 = o.head || bI("head")[0] || o.documentElement;
				return {
					send: function(b8, b9) {
						e = o.createElement("script");
						e.async = true;
						if (b7.scriptCharset) {
							e.charset = b7.scriptCharset
						}
						e.src = b7.url;
						e.onload = e.onreadystatechange = function(cb, ca) {
							if (ca || !e.readyState || /loaded|complete/.test(e.readyState)) {
								e.onload = e.onreadystatechange = null;
								if (e.parentNode) {
									e.parentNode.removeChild(e)
								}
								e = null;
								if (!ca) {
									b9(200, "success")
								}
							}
						}
						;
						b6.insertBefore(e, b6.firstChild)
					},
					abort: function() {
						if (e) {
							e.onload(undefined, true)
						}
					}
				}
			}
		});
		var bs = []
		  , a8 = /(=)\?(?=&|$)|\?\?/;
		bI.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var e = bs.pop() || (bI.expando + "_" + (bp++));
				this[e] = true;
				return e
			}
		});
		bI.ajaxPrefilter("json jsonp", function(b8, e, b9) {
			var cb, b6, b7, ca = b8.jsonp !== false && (a8.test(b8.url) ? "url" : typeof b8.data === "string" && !(b8.contentType || "").indexOf("application/x-www-form-urlencoded") && a8.test(b8.data) && "data");
			if (ca || b8.dataTypes[0] === "jsonp") {
				cb = b8.jsonpCallback = bI.isFunction(b8.jsonpCallback) ? b8.jsonpCallback() : b8.jsonpCallback;
				if (ca) {
					b8[ca] = b8[ca].replace(a8, "$1" + cb)
				} else {
					if (b8.jsonp !== false) {
						b8.url += (bQ.test(b8.url) ? "&" : "?") + b8.jsonp + "=" + cb
					}
				}
				b8.converters["script json"] = function() {
					if (!b7) {
						bI.error(cb + " was not called")
					}
					return b7[0]
				}
				;
				b8.dataTypes[0] = "json";
				b6 = a5[cb];
				a5[cb] = function() {
					b7 = arguments
				}
				;
				b9.always(function() {
					a5[cb] = b6;
					if (b8[cb]) {
						b8.jsonpCallback = e.jsonpCallback;
						bs.push(cb)
					}
					if (b7 && bI.isFunction(b6)) {
						b6(b7[0])
					}
					b7 = b6 = undefined
				});
				return "script"
			}
		});
		bI.parseHTML = function(b9, b7, b8) {
			if (!b9 || typeof b9 !== "string") {
				return null
			}
			if (typeof b7 === "boolean") {
				b8 = b7;
				b7 = false
			}
			b7 = b7 || o;
			var b6 = a.exec(b9)
			  , e = !b8 && [];
			if (b6) {
				return [b7.createElement(b6[1])]
			}
			b6 = bI.buildFragment([b9], b7, e);
			if (e && e.length) {
				bI(e).remove()
			}
			return bI.merge([], b6.childNodes)
		}
		;
		var b1 = bI.fn.load;
		bI.fn.load = function(b8, cb, cc) {
			if (typeof b8 !== "string" && b1) {
				return b1.apply(this, arguments)
			}
			var e, b7, b9, b6 = this, ca = b8.indexOf(" ");
			if (ca >= 0) {
				e = bI.trim(b8.slice(ca, b8.length));
				b8 = b8.slice(0, ca)
			}
			if (bI.isFunction(cb)) {
				cc = cb;
				cb = undefined
			} else {
				if (cb && typeof cb === "object") {
					b9 = "POST"
				}
			}
			if (b6.length > 0) {
				bI.ajax({
					url: b8,
					type: b9,
					dataType: "html",
					data: cb
				}).done(function(cd) {
					b7 = arguments;
					b6.html(e ? bI("<div>").append(bI.parseHTML(cd)).find(e) : cd)
				}).complete(cc && function(ce, cd) {
					b6.each(cc, b7 || [ce.responseText, cd, ce])
				}
				)
			}
			return this
		}
		;
		bI.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, b6) {
			bI.fn[b6] = function(b7) {
				return this.on(b6, b7)
			}
		});
		bI.expr.filters.animated = function(e) {
			return bI.grep(bI.timers, function(b6) {
				return e === b6.elem
			}).length
		}
		;
		var bX = a5.document.documentElement;
		function br(e) {
			return bI.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
		}
		bI.offset = {
			setOffset: function(b7, ch, cb) {
				var cd, ca, e, b8, b6, cf, cg, cc = bI.css(b7, "position"), b9 = bI(b7), ce = {};
				if (cc === "static") {
					b7.style.position = "relative"
				}
				b6 = b9.offset();
				e = bI.css(b7, "top");
				cf = bI.css(b7, "left");
				cg = (cc === "absolute" || cc === "fixed") && bI.inArray("auto", [e, cf]) > -1;
				if (cg) {
					cd = b9.position();
					b8 = cd.top;
					ca = cd.left
				} else {
					b8 = parseFloat(e) || 0;
					ca = parseFloat(cf) || 0
				}
				if (bI.isFunction(ch)) {
					ch = ch.call(b7, cb, b6)
				}
				if (ch.top != null) {
					ce.top = (ch.top - b6.top) + b8
				}
				if (ch.left != null) {
					ce.left = (ch.left - b6.left) + ca
				}
				if ("using"in ch) {
					ch.using.call(b7, ce)
				} else {
					b9.css(ce)
				}
			}
		};
		bI.fn.extend({
			offset: function(b6) {
				if (arguments.length) {
					return b6 === undefined ? this : this.each(function(cb) {
						bI.offset.setOffset(this, b6, cb)
					})
				}
				var e, ca, b8 = {
					top: 0,
					left: 0
				}, b7 = this[0], b9 = b7 && b7.ownerDocument;
				if (!b9) {
					return
				}
				e = b9.documentElement;
				if (!bI.contains(e, b7)) {
					return b8
				}
				if (typeof b7.getBoundingClientRect !== aC) {
					b8 = b7.getBoundingClientRect()
				}
				ca = br(b9);
				return {
					top: b8.top + (ca.pageYOffset || e.scrollTop) - (e.clientTop || 0),
					left: b8.left + (ca.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
				}
			},
			position: function() {
				if (!this[0]) {
					return
				}
				var b7, b8, e = {
					top: 0,
					left: 0
				}, b6 = this[0];
				if (bI.css(b6, "position") === "fixed") {
					b8 = b6.getBoundingClientRect()
				} else {
					b7 = this.offsetParent();
					b8 = this.offset();
					if (!bI.nodeName(b7[0], "html")) {
						e = b7.offset()
					}
					e.top += bI.css(b7[0], "borderTopWidth", true);
					e.left += bI.css(b7[0], "borderLeftWidth", true)
				}
				return {
					top: b8.top - e.top - bI.css(b6, "marginTop", true),
					left: b8.left - e.left - bI.css(b6, "marginLeft", true)
				}
			},
			offsetParent: function() {
				return this.map(function() {
					var e = this.offsetParent || bX;
					while (e && (!bI.nodeName(e, "html") && bI.css(e, "position") === "static")) {
						e = e.offsetParent
					}
					return e || bX
				})
			}
		});
		bI.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(b7, b6) {
			var e = /Y/.test(b6);
			bI.fn[b7] = function(b8) {
				return aB(this, function(b9, cc, cb) {
					var ca = br(b9);
					if (cb === undefined) {
						return ca ? (b6 in ca) ? ca[b6] : ca.document.documentElement[cc] : b9[cc]
					}
					if (ca) {
						ca.scrollTo(!e ? cb : bI(ca).scrollLeft(), e ? cb : bI(ca).scrollTop())
					} else {
						b9[cc] = cb
					}
				}, b7, b8, arguments.length, null)
			}
		});
		bI.each(["top", "left"], function(e, b6) {
			bI.cssHooks[b6] = a7(D.pixelPosition, function(b8, b7) {
				if (b7) {
					b7 = G(b8, b6);
					return Y.test(b7) ? bI(b8).position()[b6] + "px" : b7
				}
			})
		});
		bI.each({
			Height: "height",
			Width: "width"
		}, function(e, b6) {
			bI.each({
				padding: "inner" + e,
				content: b6,
				"": "outer" + e
			}, function(b7, b8) {
				bI.fn[b8] = function(cc, cb) {
					var ca = arguments.length && (b7 || typeof cc !== "boolean")
					  , b9 = b7 || (cc === true || cb === true ? "margin" : "border");
					return aB(this, function(ce, cd, cf) {
						var cg;
						if (bI.isWindow(ce)) {
							return ce.document.documentElement["client" + e]
						}
						if (ce.nodeType === 9) {
							cg = ce.documentElement;
							return Math.max(ce.body["scroll" + e], cg["scroll" + e], ce.body["offset" + e], cg["offset" + e], cg["client" + e])
						}
						return cf === undefined ? bI.css(ce, cd, b9) : bI.style(ce, cd, cf, b9)
					}, b6, ca ? cc : undefined, ca, null)
				}
			})
		});
		bI.fn.size = function() {
			return this.length
		}
		;
		bI.fn.andSelf = bI.fn.addBack;
		if (typeof define === "function" && define.amd) {
			define("jquery", [], function() {
				return bI
			})
		}
		var bk = a5.jQuery
		  , I = a5.$;
		bI.noConflict = function(e) {
			if (a5.$ === bI) {
				a5.$ = I
			}
			if (e && a5.jQuery === bI) {
				a5.jQuery = bk
			}
			return bI
		}
		;
		if (typeof av === aC) {
			a5.jQuery = a5.$ = bI
		}
		return bI
	}));
	/*! * Bootstrap v3.3.7 (http://getbootstrap.com) * Copyright 2011-2016 Twitter, Inc. * Licensed under the MIT license */
	;if (typeof jQuery === "undefined") {
		throw new Error("Bootstrap's JavaScript requires jQuery")
	}
	+function(b) {
		var a = b.fn.jquery.split(" ")[0].split(".");
		if ((a[0] < 2 && a[1] < 9) || (a[0] == 1 && a[1] == 9 && a[2] < 1) || (a[0] > 3)) {
			throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
		}
	}(jQuery);
	+function(b) {
		function a() {
			var e = document.createElement("bootstrap");
			var d = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
			for (var c in d) {
				if (e.style[c] !== undefined) {
					return {
						end: d[c]
					}
				}
			}
			return false
		}
		b.fn.emulateTransitionEnd = function(e) {
			var d = false;
			var c = this;
			b(this).one("bsTransitionEnd", function() {
				d = true
			});
			var f = function() {
				if (!d) {
					b(c).trigger(b.support.transition.end)
				}
			};
			setTimeout(f, e);
			return this
		}
		;
		b(function() {
			b.support.transition = a();
			if (!b.support.transition) {
				return
			}
			b.event.special.bsTransitionEnd = {
				bindType: b.support.transition.end,
				delegateType: b.support.transition.end,
				handle: function(c) {
					if (b(c.target).is(this)) {
						return c.handleObj.handler.apply(this, arguments)
					}
				}
			}
		})
	}(jQuery);
	+function(e) {
		var d = '[data-dismiss="alert"]';
		var b = function(f) {
			e(f).on("click", d, this.close)
		};
		b.VERSION = "3.3.7";
		b.TRANSITION_DURATION = 150;
		b.prototype.close = function(l) {
			var k = e(this);
			var g = k.attr("data-target");
			if (!g) {
				g = k.attr("href");
				g = g && g.replace(/.*(?=#[^\s]*$)/, "")
			}
			var h = e(g === "#" ? [] : g);
			if (l) {
				l.preventDefault()
			}
			if (!h.length) {
				h = k.closest(".alert")
			}
			h.trigger(l = e.Event("close.bs.alert"));
			if (l.isDefaultPrevented()) {
				return
			}
			h.removeClass("in");
			function f() {
				h.detach().trigger("closed.bs.alert").remove()
			}
			e.support.transition && h.hasClass("fade") ? h.one("bsTransitionEnd", f).emulateTransitionEnd(b.TRANSITION_DURATION) : f()
		}
		;
		function c(f) {
			return this.each(function() {
				var h = e(this);
				var g = h.data("bs.alert");
				if (!g) {
					h.data("bs.alert", (g = new b(this)))
				}
				if (typeof f == "string") {
					g[f].call(h)
				}
			})
		}
		var a = e.fn.alert;
		e.fn.alert = c;
		e.fn.alert.Constructor = b;
		e.fn.alert.noConflict = function() {
			e.fn.alert = a;
			return this
		}
		;
		e(document).on("click.bs.alert.data-api", d, b.prototype.close)
	}(jQuery);
	+function(d) {
		var b = function(f, e) {
			this.$element = d(f);
			this.options = d.extend({}, b.DEFAULTS, e);
			this.isLoading = false
		};
		b.VERSION = "3.3.7";
		b.DEFAULTS = {
			loadingText: "loading..."
		};
		b.prototype.setState = function(g) {
			var k = "disabled";
			var e = this.$element;
			var h = e.is("input") ? "val" : "html";
			var f = e.data();
			g += "Text";
			if (f.resetText == null) {
				e.data("resetText", e[h]())
			}
			setTimeout(d.proxy(function() {
				e[h](f[g] == null ? this.options[g] : f[g]);
				if (g == "loadingText") {
					this.isLoading = true;
					e.addClass(k).attr(k, k).prop(k, true)
				} else {
					if (this.isLoading) {
						this.isLoading = false;
						e.removeClass(k).removeAttr(k).prop(k, false)
					}
				}
			}, this), 0)
		}
		;
		b.prototype.toggle = function() {
			var f = true;
			var e = this.$element.closest('[data-toggle="buttons"]');
			if (e.length) {
				var g = this.$element.find("input");
				if (g.prop("type") == "radio") {
					if (g.prop("checked")) {
						f = false
					}
					e.find(".active").removeClass("active");
					this.$element.addClass("active")
				} else {
					if (g.prop("type") == "checkbox") {
						if ((g.prop("checked")) !== this.$element.hasClass("active")) {
							f = false
						}
						this.$element.toggleClass("active")
					}
				}
				g.prop("checked", this.$element.hasClass("active"));
				if (f) {
					g.trigger("change")
				}
			} else {
				this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
				this.$element.toggleClass("active")
			}
		}
		;
		function c(e) {
			return this.each(function() {
				var h = d(this);
				var g = h.data("bs.button");
				var f = typeof e == "object" && e;
				if (!g) {
					h.data("bs.button", (g = new b(this,f)))
				}
				if (e == "toggle") {
					g.toggle()
				} else {
					if (e) {
						g.setState(e)
					}
				}
			})
		}
		var a = d.fn.button;
		d.fn.button = c;
		d.fn.button.Constructor = b;
		d.fn.button.noConflict = function() {
			d.fn.button = a;
			return this
		}
		;
		d(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(g) {
			var f = d(g.target).closest(".btn");
			c.call(f, "toggle");
			if (!(d(g.target).is('input[type="radio"], input[type="checkbox"]'))) {
				g.preventDefault();
				if (f.is("input,button")) {
					f.trigger("focus")
				} else {
					f.find("input:visible,button:visible").first().trigger("focus")
				}
			}
		}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(f) {
			d(f.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(f.type))
		})
	}(jQuery);
	+function(c) {
		var d = function(g, f) {
			this.$element = c(g);
			this.$indicators = this.$element.find(".carousel-indicators");
			this.options = f;
			this.paused = null;
			this.sliding = null;
			this.interval = null;
			this.$active = null;
			this.$items = null;
			this.options.keyboard && this.$element.on("keydown.bs.carousel", c.proxy(this.keydown, this));
			this.options.pause == "hover" && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", c.proxy(this.pause, this)).on("mouseleave.bs.carousel", c.proxy(this.cycle, this))
		};
		d.VERSION = "3.3.7";
		d.TRANSITION_DURATION = 600;
		d.DEFAULTS = {
			interval: 5000,
			pause: "hover",
			wrap: true,
			keyboard: true
		};
		d.prototype.keydown = function(f) {
			if (/input|textarea/i.test(f.target.tagName)) {
				return
			}
			switch (f.which) {
			case 37:
				this.prev();
				break;
			case 39:
				this.next();
				break;
			default:
				return
			}
			f.preventDefault()
		}
		;
		d.prototype.cycle = function(f) {
			f || (this.paused = false);
			this.interval && clearInterval(this.interval);
			this.options.interval && !this.paused && (this.interval = setInterval(c.proxy(this.next, this), this.options.interval));
			return this
		}
		;
		d.prototype.getItemIndex = function(f) {
			this.$items = f.parent().children(".item");
			return this.$items.index(f || this.$active)
		}
		;
		d.prototype.getItemForDirection = function(l, k) {
			var f = this.getItemIndex(k);
			var g = (l == "prev" && f === 0) || (l == "next" && f == (this.$items.length - 1));
			if (g && !this.options.wrap) {
				return k
			}
			var m = l == "prev" ? -1 : 1;
			var h = (f + m) % this.$items.length;
			return this.$items.eq(h)
		}
		;
		d.prototype.to = function(h) {
			var g = this;
			var f = this.getItemIndex(this.$active = this.$element.find(".item.active"));
			if (h > (this.$items.length - 1) || h < 0) {
				return
			}
			if (this.sliding) {
				return this.$element.one("slid.bs.carousel", function() {
					g.to(h)
				})
			}
			if (f == h) {
				return this.pause().cycle()
			}
			return this.slide(h > f ? "next" : "prev", this.$items.eq(h))
		}
		;
		d.prototype.pause = function(f) {
			f || (this.paused = true);
			if (this.$element.find(".next, .prev").length && c.support.transition) {
				this.$element.trigger(c.support.transition.end);
				this.cycle(true)
			}
			this.interval = clearInterval(this.interval);
			return this
		}
		;
		d.prototype.next = function() {
			if (this.sliding) {
				return
			}
			return this.slide("next")
		}
		;
		d.prototype.prev = function() {
			if (this.sliding) {
				return
			}
			return this.slide("prev")
		}
		;
		d.prototype.slide = function(o, k) {
			var r = this.$element.find(".item.active");
			var g = k || this.getItemForDirection(o, r);
			var m = this.interval;
			var p = o == "next" ? "left" : "right";
			var l = this;
			if (g.hasClass("active")) {
				return (this.sliding = false)
			}
			var n = g[0];
			var f = c.Event("slide.bs.carousel", {
				relatedTarget: n,
				direction: p
			});
			this.$element.trigger(f);
			if (f.isDefaultPrevented()) {
				return
			}
			this.sliding = true;
			m && this.pause();
			if (this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var h = c(this.$indicators.children()[this.getItemIndex(g)]);
				h && h.addClass("active")
			}
			var q = c.Event("slid.bs.carousel", {
				relatedTarget: n,
				direction: p
			});
			if (c.support.transition && this.$element.hasClass("slide")) {
				g.addClass(o);
				g[0].offsetWidth;
				r.addClass(p);
				g.addClass(p);
				r.one("bsTransitionEnd", function() {
					g.removeClass([o, p].join(" ")).addClass("active");
					r.removeClass(["active", p].join(" "));
					l.sliding = false;
					setTimeout(function() {
						l.$element.trigger(q)
					}, 0)
				}).emulateTransitionEnd(d.TRANSITION_DURATION)
			} else {
				r.removeClass("active");
				g.addClass("active");
				this.sliding = false;
				this.$element.trigger(q)
			}
			m && this.cycle();
			return this
		}
		;
		function b(f) {
			return this.each(function() {
				var l = c(this);
				var k = l.data("bs.carousel");
				var g = c.extend({}, d.DEFAULTS, l.data(), typeof f == "object" && f);
				var h = typeof f == "string" ? f : g.slide;
				if (!k) {
					l.data("bs.carousel", (k = new d(this,g)))
				}
				if (typeof f == "number") {
					k.to(f)
				} else {
					if (h) {
						k[h]()
					} else {
						if (g.interval) {
							k.pause().cycle()
						}
					}
				}
			})
		}
		var a = c.fn.carousel;
		c.fn.carousel = b;
		c.fn.carousel.Constructor = d;
		c.fn.carousel.noConflict = function() {
			c.fn.carousel = a;
			return this
		}
		;
		var e = function(m) {
			var g;
			var l = c(this);
			var f = c(l.attr("data-target") || (g = l.attr("href")) && g.replace(/.*(?=#[^\s]+$)/, ""));
			if (!f.hasClass("carousel")) {
				return
			}
			var h = c.extend({}, f.data(), l.data());
			var k = l.attr("data-slide-to");
			if (k) {
				h.interval = false
			}
			b.call(f, h);
			if (k) {
				f.data("bs.carousel").to(k)
			}
			m.preventDefault()
		};
		c(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e);
		c(window).on("load", function() {
			c('[data-ride="carousel"]').each(function() {
				var f = c(this);
				b.call(f, f.data())
			})
		})
	}(jQuery);
	+function(d) {
		var e = function(g, f) {
			this.$element = d(g);
			this.options = d.extend({}, e.DEFAULTS, f);
			this.$trigger = d('[data-toggle="collapse"][href="#' + g.id + '"],[data-toggle="collapse"][data-target="#' + g.id + '"]');
			this.transitioning = null;
			if (this.options.parent) {
				this.$parent = this.getParent()
			} else {
				this.addAriaAndCollapsedClass(this.$element, this.$trigger)
			}
			if (this.options.toggle) {
				this.toggle()
			}
		};
		e.VERSION = "3.3.7";
		e.TRANSITION_DURATION = 350;
		e.DEFAULTS = {
			toggle: true
		};
		e.prototype.dimension = function() {
			var f = this.$element.hasClass("width");
			return f ? "width" : "height"
		}
		;
		e.prototype.show = function() {
			if (this.transitioning || this.$element.hasClass("in")) {
				return
			}
			var h;
			var l = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (l && l.length) {
				h = l.data("bs.collapse");
				if (h && h.transitioning) {
					return
				}
			}
			var g = d.Event("show.bs.collapse");
			this.$element.trigger(g);
			if (g.isDefaultPrevented()) {
				return
			}
			if (l && l.length) {
				b.call(l, "hide");
				h || l.data("bs.collapse", null)
			}
			var m = this.dimension();
			this.$element.removeClass("collapse").addClass("collapsing")[m](0).attr("aria-expanded", true);
			this.$trigger.removeClass("collapsed").attr("aria-expanded", true);
			this.transitioning = 1;
			var f = function() {
				this.$element.removeClass("collapsing").addClass("collapse in")[m]("");
				this.transitioning = 0;
				this.$element.trigger("shown.bs.collapse")
			};
			if (!d.support.transition) {
				return f.call(this)
			}
			var k = d.camelCase(["scroll", m].join("-"));
			this.$element.one("bsTransitionEnd", d.proxy(f, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[m](this.$element[0][k])
		}
		;
		e.prototype.hide = function() {
			if (this.transitioning || !this.$element.hasClass("in")) {
				return
			}
			var g = d.Event("hide.bs.collapse");
			this.$element.trigger(g);
			if (g.isDefaultPrevented()) {
				return
			}
			var h = this.dimension();
			this.$element[h](this.$element[h]())[0].offsetHeight;
			this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", false);
			this.$trigger.addClass("collapsed").attr("aria-expanded", false);
			this.transitioning = 1;
			var f = function() {
				this.transitioning = 0;
				this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
			};
			if (!d.support.transition) {
				return f.call(this)
			}
			this.$element[h](0).one("bsTransitionEnd", d.proxy(f, this)).emulateTransitionEnd(e.TRANSITION_DURATION)
		}
		;
		e.prototype.toggle = function() {
			this[this.$element.hasClass("in") ? "hide" : "show"]()
		}
		;
		e.prototype.getParent = function() {
			return d(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(d.proxy(function(h, g) {
				var f = d(g);
				this.addAriaAndCollapsedClass(c(f), f)
			}, this)).end()
		}
		;
		e.prototype.addAriaAndCollapsedClass = function(g, f) {
			var h = g.hasClass("in");
			g.attr("aria-expanded", h);
			f.toggleClass("collapsed", !h).attr("aria-expanded", h)
		}
		;
		function c(f) {
			var g;
			var h = f.attr("data-target") || (g = f.attr("href")) && g.replace(/.*(?=#[^\s]+$)/, "");
			return d(h)
		}
		function b(f) {
			return this.each(function() {
				var k = d(this);
				var h = k.data("bs.collapse");
				var g = d.extend({}, e.DEFAULTS, k.data(), typeof f == "object" && f);
				if (!h && g.toggle && /show|hide/.test(f)) {
					g.toggle = false
				}
				if (!h) {
					k.data("bs.collapse", (h = new e(this,g)))
				}
				if (typeof f == "string") {
					h[f]()
				}
			})
		}
		var a = d.fn.collapse;
		d.fn.collapse = b;
		d.fn.collapse.Constructor = e;
		d.fn.collapse.noConflict = function() {
			d.fn.collapse = a;
			return this
		}
		;
		d(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(l) {
			var k = d(this);
			if (!k.attr("data-target")) {
				l.preventDefault()
			}
			var f = c(k);
			var h = f.data("bs.collapse");
			var g = h ? "toggle" : k.data();
			b.call(f, g)
		})
	}(jQuery);
	+function(h) {
		var e = ".dropdown-backdrop";
		var b = '[data-toggle="dropdown"]';
		var a = function(k) {
			h(k).on("click.bs.dropdown", this.toggle)
		};
		a.VERSION = "3.3.7";
		function f(m) {
			var k = m.attr("data-target");
			if (!k) {
				k = m.attr("href");
				k = k && /#[A-Za-z]/.test(k) && k.replace(/.*(?=#[^\s]*$)/, "")
			}
			var l = k && h(k);
			return l && l.length ? l : m.parent()
		}
		function d(k) {
			if (k && k.which === 3) {
				return
			}
			h(e).remove();
			h(b).each(function() {
				var n = h(this);
				var m = f(n);
				var l = {
					relatedTarget: this
				};
				if (!m.hasClass("open")) {
					return
				}
				if (k && k.type == "click" && /input|textarea/i.test(k.target.tagName) && h.contains(m[0], k.target)) {
					return
				}
				m.trigger(k = h.Event("hide.bs.dropdown", l));
				if (k.isDefaultPrevented()) {
					return
				}
				n.attr("aria-expanded", "false");
				m.removeClass("open").trigger(h.Event("hidden.bs.dropdown", l))
			})
		}
		a.prototype.toggle = function(o) {
			var n = h(this);
			if (n.is(".disabled, :disabled")) {
				return
			}
			var m = f(n);
			var l = m.hasClass("open");
			d();
			if (!l) {
				if ("ontouchstart"in document.documentElement && !m.closest(".navbar-nav").length) {
					h(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(h(this)).on("click", d)
				}
				var k = {
					relatedTarget: this
				};
				m.trigger(o = h.Event("show.bs.dropdown", k));
				if (o.isDefaultPrevented()) {
					return
				}
				n.trigger("focus").attr("aria-expanded", "true");
				m.toggleClass("open").trigger(h.Event("shown.bs.dropdown", k))
			}
			return false
		}
		;
		a.prototype.keydown = function(o) {
			if (!/(38|40|27|32)/.test(o.which) || /input|textarea/i.test(o.target.tagName)) {
				return
			}
			var n = h(this);
			o.preventDefault();
			o.stopPropagation();
			if (n.is(".disabled, :disabled")) {
				return
			}
			var m = f(n);
			var l = m.hasClass("open");
			if (!l && o.which != 27 || l && o.which == 27) {
				if (o.which == 27) {
					m.find(b).trigger("focus")
				}
				return n.trigger("click")
			}
			var p = " li:not(.disabled):visible a";
			var q = m.find(".dropdown-menu" + p);
			if (!q.length) {
				return
			}
			var k = q.index(o.target);
			if (o.which == 38 && k > 0) {
				k--
			}
			if (o.which == 40 && k < q.length - 1) {
				k++
			}
			if (!~k) {
				k = 0
			}
			q.eq(k).trigger("focus")
		}
		;
		function g(k) {
			return this.each(function() {
				var m = h(this);
				var l = m.data("bs.dropdown");
				if (!l) {
					m.data("bs.dropdown", (l = new a(this)))
				}
				if (typeof k == "string") {
					l[k].call(m)
				}
			})
		}
		var c = h.fn.dropdown;
		h.fn.dropdown = g;
		h.fn.dropdown.Constructor = a;
		h.fn.dropdown.noConflict = function() {
			h.fn.dropdown = c;
			return this
		}
		;
		h(document).on("click.bs.dropdown.data-api", d).on("click.bs.dropdown.data-api", ".dropdown form", function(k) {
			k.stopPropagation()
		}).on("click.bs.dropdown.data-api", b, a.prototype.toggle).on("keydown.bs.dropdown.data-api", b, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
	}(jQuery);
	+function(d) {
		var b = function(f, e) {
			this.options = e;
			this.$body = d(document.body);
			this.$element = d(f);
			this.$dialog = this.$element.find(".modal-dialog");
			this.$backdrop = null;
			this.isShown = null;
			this.originalBodyPad = null;
			this.scrollbarWidth = 0;
			this.ignoreBackdropClick = false;
			if (this.options.remote) {
				this.$element.find(".modal-content").load(this.options.remote, d.proxy(function() {
					this.$element.trigger("loaded.bs.modal")
				}, this))
			}
		};
		b.VERSION = "3.3.7";
		b.TRANSITION_DURATION = 300;
		b.BACKDROP_TRANSITION_DURATION = 150;
		b.DEFAULTS = {
			backdrop: true,
			keyboard: true,
			show: true
		};
		b.prototype.toggle = function(e) {
			return this.isShown ? this.hide() : this.show(e)
		}
		;
		b.prototype.show = function(h) {
			var f = this;
			var g = d.Event("show.bs.modal", {
				relatedTarget: h
			});
			this.$element.trigger(g);
			if (this.isShown || g.isDefaultPrevented()) {
				return
			}
			this.isShown = true;
			this.checkScrollbar();
			this.setScrollbar();
			this.$body.addClass("modal-open");
			this.escape();
			this.resize();
			this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', d.proxy(this.hide, this));
			this.$dialog.on("mousedown.dismiss.bs.modal", function() {
				f.$element.one("mouseup.dismiss.bs.modal", function(k) {
					if (d(k.target).is(f.$element)) {
						f.ignoreBackdropClick = true
					}
				})
			});
			this.backdrop(function() {
				var l = d.support.transition && f.$element.hasClass("fade");
				if (!f.$element.parent().length) {
					f.$element.appendTo(f.$body)
				}
				f.$element.show().scrollTop(0);
				f.adjustDialog();
				if (l) {
					f.$element[0].offsetWidth
				}
				f.$element.addClass("in");
				f.enforceFocus();
				var k = d.Event("shown.bs.modal", {
					relatedTarget: h
				});
				l ? f.$dialog.one("bsTransitionEnd", function() {
					f.$element.trigger("focus").trigger(k)
				}).emulateTransitionEnd(b.TRANSITION_DURATION) : f.$element.trigger("focus").trigger(k)
			})
		}
		;
		b.prototype.hide = function(f) {
			if (f) {
				f.preventDefault()
			}
			f = d.Event("hide.bs.modal");
			this.$element.trigger(f);
			if (!this.isShown || f.isDefaultPrevented()) {
				return
			}
			this.isShown = false;
			this.escape();
			this.resize();
			d(document).off("focusin.bs.modal");
			this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal");
			this.$dialog.off("mousedown.dismiss.bs.modal");
			d.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", d.proxy(this.hideModal, this)).emulateTransitionEnd(b.TRANSITION_DURATION) : this.hideModal()
		}
		;
		b.prototype.enforceFocus = function() {
			d(document).off("focusin.bs.modal").on("focusin.bs.modal", d.proxy(function(f) {
				if (document !== f.target && this.$element[0] !== f.target && !this.$element.has(f.target).length) {
					this.$element.trigger("focus")
				}
			}, this))
		}
		;
		b.prototype.escape = function() {
			if (this.isShown && this.options.keyboard) {
				this.$element.on("keydown.dismiss.bs.modal", d.proxy(function(f) {
					f.which == 27 && this.hide()
				}, this))
			} else {
				if (!this.isShown) {
					this.$element.off("keydown.dismiss.bs.modal")
				}
			}
		}
		;
		b.prototype.resize = function() {
			if (this.isShown) {
				d(window).on("resize.bs.modal", d.proxy(this.handleUpdate, this))
			} else {
				d(window).off("resize.bs.modal")
			}
		}
		;
		b.prototype.hideModal = function() {
			var e = this;
			this.$element.hide();
			this.backdrop(function() {
				e.$body.removeClass("modal-open");
				e.resetAdjustments();
				e.resetScrollbar();
				e.$element.trigger("hidden.bs.modal")
			})
		}
		;
		b.prototype.removeBackdrop = function() {
			this.$backdrop && this.$backdrop.remove();
			this.$backdrop = null
		}
		;
		b.prototype.backdrop = function(k) {
			var h = this;
			var f = this.$element.hasClass("fade") ? "fade" : "";
			if (this.isShown && this.options.backdrop) {
				var e = d.support.transition && f;
				this.$backdrop = d(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body);
				this.$element.on("click.dismiss.bs.modal", d.proxy(function(l) {
					if (this.ignoreBackdropClick) {
						this.ignoreBackdropClick = false;
						return
					}
					if (l.target !== l.currentTarget) {
						return
					}
					this.options.backdrop == "static" ? this.$element[0].focus() : this.hide()
				}, this));
				if (e) {
					this.$backdrop[0].offsetWidth
				}
				this.$backdrop.addClass("in");
				if (!k) {
					return
				}
				e ? this.$backdrop.one("bsTransitionEnd", k).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION) : k()
			} else {
				if (!this.isShown && this.$backdrop) {
					this.$backdrop.removeClass("in");
					var g = function() {
						h.removeBackdrop();
						k && k()
					};
					d.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION) : g()
				} else {
					if (k) {
						k()
					}
				}
			}
		}
		;
		b.prototype.handleUpdate = function() {
			this.adjustDialog()
		}
		;
		b.prototype.adjustDialog = function() {
			var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
			this.$element.css({
				paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
				paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
			})
		}
		;
		b.prototype.resetAdjustments = function() {
			this.$element.css({
				paddingLeft: "",
				paddingRight: ""
			})
		}
		;
		b.prototype.checkScrollbar = function() {
			var f = window.innerWidth;
			if (!f) {
				var e = document.documentElement.getBoundingClientRect();
				f = e.right - Math.abs(e.left)
			}
			this.bodyIsOverflowing = document.body.clientWidth < f;
			this.scrollbarWidth = this.measureScrollbar()
		}
		;
		b.prototype.setScrollbar = function() {
			var e = parseInt((this.$body.css("padding-right") || 0), 10);
			this.originalBodyPad = document.body.style.paddingRight || "";
			if (this.bodyIsOverflowing) {
				this.$body.css("padding-right", e + this.scrollbarWidth)
			}
		}
		;
		b.prototype.resetScrollbar = function() {
			this.$body.css("padding-right", this.originalBodyPad)
		}
		;
		b.prototype.measureScrollbar = function() {
			var f = document.createElement("div");
			f.className = "modal-scrollbar-measure";
			this.$body.append(f);
			var e = f.offsetWidth - f.clientWidth;
			this.$body[0].removeChild(f);
			return e
		}
		;
		function c(e, f) {
			return this.each(function() {
				var k = d(this);
				var h = k.data("bs.modal");
				var g = d.extend({}, b.DEFAULTS, k.data(), typeof e == "object" && e);
				if (!h) {
					k.data("bs.modal", (h = new b(this,g)))
				}
				if (typeof e == "string") {
					h[e](f)
				} else {
					if (g.show) {
						h.show(f)
					}
				}
			})
		}
		var a = d.fn.modal;
		d.fn.modal = c;
		d.fn.modal.Constructor = b;
		d.fn.modal.noConflict = function() {
			d.fn.modal = a;
			return this
		}
		;
		d(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(l) {
			var k = d(this);
			var g = k.attr("href");
			var f = d(k.attr("data-target") || (g && g.replace(/.*(?=#[^\s]+$)/, "")));
			var h = f.data("bs.modal") ? "toggle" : d.extend({
				remote: !/#/.test(g) && g
			}, f.data(), k.data());
			if (k.is("a")) {
				l.preventDefault()
			}
			f.one("show.bs.modal", function(e) {
				if (e.isDefaultPrevented()) {
					return
				}
				f.one("hidden.bs.modal", function() {
					k.is(":visible") && k.trigger("focus")
				})
			});
			c.call(f, h, this)
		})
	}(jQuery);
	+function(d) {
		var c = function(f, e) {
			this.type = null;
			this.options = null;
			this.enabled = null;
			this.timeout = null;
			this.hoverState = null;
			this.$element = null;
			this.inState = null;
			this.init("tooltip", f, e)
		};
		c.VERSION = "3.3.7";
		c.TRANSITION_DURATION = 150;
		c.DEFAULTS = {
			animation: true,
			placement: "top",
			selector: false,
			template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
			trigger: "hover focus",
			title: "",
			delay: 0,
			html: false,
			container: false,
			viewport: {
				selector: "body",
				padding: 0
			}
		};
		c.prototype.init = function(m, k, g) {
			this.enabled = true;
			this.type = m;
			this.$element = d(k);
			this.options = this.getOptions(g);
			this.$viewport = this.options.viewport && d(d.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport));
			this.inState = {
				click: false,
				hover: false,
				focus: false
			};
			if (this.$element[0]instanceof document.constructor && !this.options.selector) {
				throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!")
			}
			var l = this.options.trigger.split(" ");
			for (var h = l.length; h--; ) {
				var f = l[h];
				if (f == "click") {
					this.$element.on("click." + this.type, this.options.selector, d.proxy(this.toggle, this))
				} else {
					if (f != "manual") {
						var n = f == "hover" ? "mouseenter" : "focusin";
						var e = f == "hover" ? "mouseleave" : "focusout";
						this.$element.on(n + "." + this.type, this.options.selector, d.proxy(this.enter, this));
						this.$element.on(e + "." + this.type, this.options.selector, d.proxy(this.leave, this))
					}
				}
			}
			this.options.selector ? (this._options = d.extend({}, this.options, {
				trigger: "manual",
				selector: ""
			})) : this.fixTitle()
		}
		;
		c.prototype.getDefaults = function() {
			return c.DEFAULTS
		}
		;
		c.prototype.getOptions = function(e) {
			e = d.extend({}, this.getDefaults(), this.$element.data(), e);
			if (e.delay && typeof e.delay == "number") {
				e.delay = {
					show: e.delay,
					hide: e.delay
				}
			}
			return e
		}
		;
		c.prototype.getDelegateOptions = function() {
			var e = {};
			var f = this.getDefaults();
			this._options && d.each(this._options, function(g, h) {
				if (f[g] != h) {
					e[g] = h
				}
			});
			return e
		}
		;
		c.prototype.enter = function(f) {
			var e = f instanceof this.constructor ? f : d(f.currentTarget).data("bs." + this.type);
			if (!e) {
				e = new this.constructor(f.currentTarget,this.getDelegateOptions());
				d(f.currentTarget).data("bs." + this.type, e)
			}
			if (f instanceof d.Event) {
				e.inState[f.type == "focusin" ? "focus" : "hover"] = true
			}
			if (e.tip().hasClass("in") || e.hoverState == "in") {
				e.hoverState = "in";
				return
			}
			clearTimeout(e.timeout);
			e.hoverState = "in";
			if (!e.options.delay || !e.options.delay.show) {
				return e.show()
			}
			e.timeout = setTimeout(function() {
				if (e.hoverState == "in") {
					e.show()
				}
			}, e.options.delay.show)
		}
		;
		c.prototype.isInStateTrue = function() {
			for (var e in this.inState) {
				if (this.inState[e]) {
					return true
				}
			}
			return false
		}
		;
		c.prototype.leave = function(f) {
			var e = f instanceof this.constructor ? f : d(f.currentTarget).data("bs." + this.type);
			if (!e) {
				e = new this.constructor(f.currentTarget,this.getDelegateOptions());
				d(f.currentTarget).data("bs." + this.type, e)
			}
			if (f instanceof d.Event) {
				e.inState[f.type == "focusout" ? "focus" : "hover"] = false
			}
			if (e.isInStateTrue()) {
				return
			}
			clearTimeout(e.timeout);
			e.hoverState = "out";
			if (!e.options.delay || !e.options.delay.hide) {
				return e.hide()
			}
			e.timeout = setTimeout(function() {
				if (e.hoverState == "out") {
					e.hide()
				}
			}, e.options.delay.hide)
		}
		;
		c.prototype.show = function() {
			var q = d.Event("show.bs." + this.type);
			if (this.hasContent() && this.enabled) {
				this.$element.trigger(q);
				var r = d.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
				if (q.isDefaultPrevented() || !r) {
					return
				}
				var p = this;
				var n = this.tip();
				var h = this.getUID(this.type);
				this.setContent();
				n.attr("id", h);
				this.$element.attr("aria-describedby", h);
				if (this.options.animation) {
					n.addClass("fade")
				}
				var m = typeof this.options.placement == "function" ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement;
				var u = /\s?auto?\s?/i;
				var v = u.test(m);
				if (v) {
					m = m.replace(u, "") || "top"
				}
				n.detach().css({
					top: 0,
					left: 0,
					display: "block"
				}).addClass(m).data("bs." + this.type, this);
				this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
				this.$element.trigger("inserted.bs." + this.type);
				var s = this.getPosition();
				var f = n[0].offsetWidth;
				var o = n[0].offsetHeight;
				if (v) {
					var l = m;
					var t = this.getPosition(this.$viewport);
					m = m == "bottom" && s.bottom + o > t.bottom ? "top" : m == "top" && s.top - o < t.top ? "bottom" : m == "right" && s.right + f > t.width ? "left" : m == "left" && s.left - f < t.left ? "right" : m;
					n.removeClass(l).addClass(m)
				}
				var k = this.getCalculatedOffset(m, s, f, o);
				this.applyPlacement(k, m);
				var g = function() {
					var e = p.hoverState;
					p.$element.trigger("shown.bs." + p.type);
					p.hoverState = null;
					if (e == "out") {
						p.leave(p)
					}
				};
				d.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", g).emulateTransitionEnd(c.TRANSITION_DURATION) : g()
			}
		}
		;
		c.prototype.applyPlacement = function(l, m) {
			var n = this.tip();
			var g = n[0].offsetWidth;
			var s = n[0].offsetHeight;
			var f = parseInt(n.css("margin-top"), 10);
			var k = parseInt(n.css("margin-left"), 10);
			if (isNaN(f)) {
				f = 0
			}
			if (isNaN(k)) {
				k = 0
			}
			l.top += f;
			l.left += k;
			d.offset.setOffset(n[0], d.extend({
				using: function(t) {
					n.css({
						top: Math.round(t.top),
						left: Math.round(t.left)
					})
				}
			}, l), 0);
			n.addClass("in");
			var e = n[0].offsetWidth;
			var o = n[0].offsetHeight;
			if (m == "top" && o != s) {
				l.top = l.top + s - o
			}
			var r = this.getViewportAdjustedDelta(m, l, e, o);
			if (r.left) {
				l.left += r.left
			} else {
				l.top += r.top
			}
			var p = /top|bottom/.test(m);
			var h = p ? r.left * 2 - g + e : r.top * 2 - s + o;
			var q = p ? "offsetWidth" : "offsetHeight";
			n.offset(l);
			this.replaceArrow(h, n[0][q], p)
		}
		;
		c.prototype.replaceArrow = function(g, e, f) {
			this.arrow().css(f ? "left" : "top", 50 * (1 - g / e) + "%").css(f ? "top" : "left", "")
		}
		;
		c.prototype.setContent = function() {
			var f = this.tip();
			var e = this.getTitle();
			f.find(".tooltip-inner")[this.options.html ? "html" : "text"](e);
			f.removeClass("fade in top bottom left right")
		}
		;
		c.prototype.hide = function(l) {
			var g = this;
			var k = d(this.$tip);
			var h = d.Event("hide.bs." + this.type);
			function f() {
				if (g.hoverState != "in") {
					k.detach()
				}
				if (g.$element) {
					g.$element.removeAttr("aria-describedby").trigger("hidden.bs." + g.type)
				}
				l && l()
			}
			this.$element.trigger(h);
			if (h.isDefaultPrevented()) {
				return
			}
			k.removeClass("in");
			d.support.transition && k.hasClass("fade") ? k.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f();
			this.hoverState = null;
			return this
		}
		;
		c.prototype.fixTitle = function() {
			var e = this.$element;
			if (e.attr("title") || typeof e.attr("data-original-title") != "string") {
				e.attr("data-original-title", e.attr("title") || "").attr("title", "")
			}
		}
		;
		c.prototype.hasContent = function() {
			return this.getTitle()
		}
		;
		c.prototype.getPosition = function(g) {
			g = g || this.$element;
			var k = g[0];
			var f = k.tagName == "BODY";
			var h = k.getBoundingClientRect();
			if (h.width == null) {
				h = d.extend({}, h, {
					width: h.right - h.left,
					height: h.bottom - h.top
				})
			}
			var m = window.SVGElement && k instanceof window.SVGElement;
			var n = f ? {
				top: 0,
				left: 0
			} : (m ? null : g.offset());
			var e = {
				scroll: f ? document.documentElement.scrollTop || document.body.scrollTop : g.scrollTop()
			};
			var l = f ? {
				width: d(window).width(),
				height: d(window).height()
			} : null;
			return d.extend({}, h, e, l, n)
		}
		;
		c.prototype.getCalculatedOffset = function(e, h, f, g) {
			return e == "bottom" ? {
				top: h.top + h.height,
				left: h.left + h.width / 2 - f / 2
			} : e == "top" ? {
				top: h.top - g,
				left: h.left + h.width / 2 - f / 2
			} : e == "left" ? {
				top: h.top + h.height / 2 - g / 2,
				left: h.left - f
			} : {
				top: h.top + h.height / 2 - g / 2,
				left: h.left + h.width
			}
		}
		;
		c.prototype.getViewportAdjustedDelta = function(h, m, e, l) {
			var o = {
				top: 0,
				left: 0
			};
			if (!this.$viewport) {
				return o
			}
			var g = this.options.viewport && this.options.viewport.padding || 0;
			var n = this.getPosition(this.$viewport);
			if (/right|left/.test(h)) {
				var p = m.top - g - n.scroll;
				var k = m.top + g - n.scroll + l;
				if (p < n.top) {
					o.top = n.top - p
				} else {
					if (k > n.top + n.height) {
						o.top = n.top + n.height - k
					}
				}
			} else {
				var q = m.left - g;
				var f = m.left + g + e;
				if (q < n.left) {
					o.left = n.left - q
				} else {
					if (f > n.right) {
						o.left = n.left + n.width - f
					}
				}
			}
			return o
		}
		;
		c.prototype.getTitle = function() {
			var g;
			var e = this.$element;
			var f = this.options;
			g = e.attr("data-original-title") || (typeof f.title == "function" ? f.title.call(e[0]) : f.title);
			return g
		}
		;
		c.prototype.getUID = function(e) {
			do {
				e += ~~(Math.random() * 1000000)
			} while (document.getElementById(e));return e
		}
		;
		c.prototype.tip = function() {
			if (!this.$tip) {
				this.$tip = d(this.options.template);
				if (this.$tip.length != 1) {
					throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!")
				}
			}
			return this.$tip
		}
		;
		c.prototype.arrow = function() {
			return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"))
		}
		;
		c.prototype.enable = function() {
			this.enabled = true
		}
		;
		c.prototype.disable = function() {
			this.enabled = false
		}
		;
		c.prototype.toggleEnabled = function() {
			this.enabled = !this.enabled
		}
		;
		c.prototype.toggle = function(g) {
			var f = this;
			if (g) {
				f = d(g.currentTarget).data("bs." + this.type);
				if (!f) {
					f = new this.constructor(g.currentTarget,this.getDelegateOptions());
					d(g.currentTarget).data("bs." + this.type, f)
				}
			}
			if (g) {
				f.inState.click = !f.inState.click;
				if (f.isInStateTrue()) {
					f.enter(f)
				} else {
					f.leave(f)
				}
			} else {
				f.tip().hasClass("in") ? f.leave(f) : f.enter(f)
			}
		}
		;
		c.prototype.destroy = function() {
			var e = this;
			clearTimeout(this.timeout);
			this.hide(function() {
				e.$element.off("." + e.type).removeData("bs." + e.type);
				if (e.$tip) {
					e.$tip.detach()
				}
				e.$tip = null;
				e.$arrow = null;
				e.$viewport = null;
				e.$element = null
			})
		}
		;
		function b(e) {
			return this.each(function() {
				var h = d(this);
				var g = h.data("bs.tooltip");
				var f = typeof e == "object" && e;
				if (!g && /destroy|hide/.test(e)) {
					return
				}
				if (!g) {
					h.data("bs.tooltip", (g = new c(this,f)))
				}
				if (typeof e == "string") {
					g[e]()
				}
			})
		}
		var a = d.fn.tooltip;
		d.fn.tooltip = b;
		d.fn.tooltip.Constructor = c;
		d.fn.tooltip.noConflict = function() {
			d.fn.tooltip = a;
			return this
		}
	}(jQuery);
	+function(d) {
		var c = function(f, e) {
			this.init("popover", f, e)
		};
		if (!d.fn.tooltip) {
			throw new Error("Popover requires tooltip.js")
		}
		c.VERSION = "3.3.7";
		c.DEFAULTS = d.extend({}, d.fn.tooltip.Constructor.DEFAULTS, {
			placement: "right",
			trigger: "click",
			content: "",
			template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
		});
		c.prototype = d.extend({}, d.fn.tooltip.Constructor.prototype);
		c.prototype.constructor = c;
		c.prototype.getDefaults = function() {
			return c.DEFAULTS
		}
		;
		c.prototype.setContent = function() {
			var g = this.tip();
			var f = this.getTitle();
			var e = this.getContent();
			g.find(".popover-title")[this.options.html ? "html" : "text"](f);
			g.find(".popover-content").children().detach().end()[this.options.html ? (typeof e == "string" ? "html" : "append") : "text"](e);
			g.removeClass("fade top bottom left right in");
			if (!g.find(".popover-title").html()) {
				g.find(".popover-title").hide()
			}
		}
		;
		c.prototype.hasContent = function() {
			return this.getTitle() || this.getContent()
		}
		;
		c.prototype.getContent = function() {
			var e = this.$element;
			var f = this.options;
			return e.attr("data-content") || (typeof f.content == "function" ? f.content.call(e[0]) : f.content)
		}
		;
		c.prototype.arrow = function() {
			return (this.$arrow = this.$arrow || this.tip().find(".arrow"))
		}
		;
		function b(e) {
			return this.each(function() {
				var h = d(this);
				var g = h.data("bs.popover");
				var f = typeof e == "object" && e;
				if (!g && /destroy|hide/.test(e)) {
					return
				}
				if (!g) {
					h.data("bs.popover", (g = new c(this,f)))
				}
				if (typeof e == "string") {
					g[e]()
				}
			})
		}
		var a = d.fn.popover;
		d.fn.popover = b;
		d.fn.popover.Constructor = c;
		d.fn.popover.noConflict = function() {
			d.fn.popover = a;
			return this
		}
	}(jQuery);
	+function(d) {
		function c(f, e) {
			this.$body = d(document.body);
			this.$scrollElement = d(f).is(document.body) ? d(window) : d(f);
			this.options = d.extend({}, c.DEFAULTS, e);
			this.selector = (this.options.target || "") + " .nav li > a";
			this.offsets = [];
			this.targets = [];
			this.activeTarget = null;
			this.scrollHeight = 0;
			this.$scrollElement.on("scroll.bs.scrollspy", d.proxy(this.process, this));
			this.refresh();
			this.process()
		}
		c.VERSION = "3.3.7";
		c.DEFAULTS = {
			offset: 10
		};
		c.prototype.getScrollHeight = function() {
			return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
		}
		;
		c.prototype.refresh = function() {
			var g = this;
			var e = "offset";
			var f = 0;
			this.offsets = [];
			this.targets = [];
			this.scrollHeight = this.getScrollHeight();
			if (!d.isWindow(this.$scrollElement[0])) {
				e = "position";
				f = this.$scrollElement.scrollTop()
			}
			this.$body.find(this.selector).map(function() {
				var k = d(this);
				var h = k.data("target") || k.attr("href");
				var l = /^#./.test(h) && d(h);
				return (l && l.length && l.is(":visible") && [[l[e]().top + f, h]]) || null
			}).sort(function(k, h) {
				return k[0] - h[0]
			}).each(function() {
				g.offsets.push(this[0]);
				g.targets.push(this[1])
			})
		}
		;
		c.prototype.process = function() {
			var l = this.$scrollElement.scrollTop() + this.options.offset;
			var g = this.getScrollHeight();
			var k = this.options.offset + g - this.$scrollElement.height();
			var h = this.offsets;
			var e = this.targets;
			var m = this.activeTarget;
			var f;
			if (this.scrollHeight != g) {
				this.refresh()
			}
			if (l >= k) {
				return m != (f = e[e.length - 1]) && this.activate(f)
			}
			if (m && l < h[0]) {
				this.activeTarget = null;
				return this.clear()
			}
			for (f = h.length; f--; ) {
				m != e[f] && l >= h[f] && (h[f + 1] === undefined || l < h[f + 1]) && this.activate(e[f])
			}
		}
		;
		c.prototype.activate = function(g) {
			this.activeTarget = g;
			this.clear();
			var e = this.selector + '[data-target="' + g + '"],' + this.selector + '[href="' + g + '"]';
			var f = d(e).parents("li").addClass("active");
			if (f.parent(".dropdown-menu").length) {
				f = f.closest("li.dropdown").addClass("active")
			}
			f.trigger("activate.bs.scrollspy")
		}
		;
		c.prototype.clear = function() {
			d(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
		}
		;
		function b(e) {
			return this.each(function() {
				var h = d(this);
				var g = h.data("bs.scrollspy");
				var f = typeof e == "object" && e;
				if (!g) {
					h.data("bs.scrollspy", (g = new c(this,f)))
				}
				if (typeof e == "string") {
					g[e]()
				}
			})
		}
		var a = d.fn.scrollspy;
		d.fn.scrollspy = b;
		d.fn.scrollspy.Constructor = c;
		d.fn.scrollspy.noConflict = function() {
			d.fn.scrollspy = a;
			return this
		}
		;
		d(window).on("load.bs.scrollspy.data-api", function() {
			d('[data-spy="scroll"]').each(function() {
				var e = d(this);
				b.call(e, e.data())
			})
		})
	}(jQuery);
	+function(d) {
		var b = function(f) {
			this.element = d(f)
		};
		b.VERSION = "3.3.7";
		b.TRANSITION_DURATION = 150;
		b.prototype.show = function() {
			var n = this.element;
			var h = n.closest("ul:not(.dropdown-menu)");
			var g = n.data("target");
			if (!g) {
				g = n.attr("href");
				g = g && g.replace(/.*(?=#[^\s]*$)/, "")
			}
			if (n.parent("li").hasClass("active")) {
				return
			}
			var l = h.find(".active:last a");
			var m = d.Event("hide.bs.tab", {
				relatedTarget: n[0]
			});
			var k = d.Event("show.bs.tab", {
				relatedTarget: l[0]
			});
			l.trigger(m);
			n.trigger(k);
			if (k.isDefaultPrevented() || m.isDefaultPrevented()) {
				return
			}
			var f = d(g);
			this.activate(n.closest("li"), h);
			this.activate(f, f.parent(), function() {
				l.trigger({
					type: "hidden.bs.tab",
					relatedTarget: n[0]
				});
				n.trigger({
					type: "shown.bs.tab",
					relatedTarget: l[0]
				})
			})
		}
		;
		b.prototype.activate = function(h, g, m) {
			var f = g.find("> .active");
			var l = m && d.support.transition && (f.length && f.hasClass("fade") || !!g.find("> .fade").length);
			function k() {
				f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", false);
				h.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", true);
				if (l) {
					h[0].offsetWidth;
					h.addClass("in")
				} else {
					h.removeClass("fade")
				}
				if (h.parent(".dropdown-menu").length) {
					h.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", true)
				}
				m && m()
			}
			f.length && l ? f.one("bsTransitionEnd", k).emulateTransitionEnd(b.TRANSITION_DURATION) : k();
			f.removeClass("in")
		}
		;
		function c(f) {
			return this.each(function() {
				var h = d(this);
				var g = h.data("bs.tab");
				if (!g) {
					h.data("bs.tab", (g = new b(this)))
				}
				if (typeof f == "string") {
					g[f]()
				}
			})
		}
		var a = d.fn.tab;
		d.fn.tab = c;
		d.fn.tab.Constructor = b;
		d.fn.tab.noConflict = function() {
			d.fn.tab = a;
			return this
		}
		;
		var e = function(f) {
			f.preventDefault();
			c.call(d(this), "show")
		};
		d(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
	}(jQuery);
	+function(d) {
		var c = function(f, e) {
			this.options = d.extend({}, c.DEFAULTS, e);
			this.$target = d(this.options.target).on("scroll.bs.affix.data-api", d.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", d.proxy(this.checkPositionWithEventLoop, this));
			this.$element = d(f);
			this.affixed = null;
			this.unpin = null;
			this.pinnedOffset = null;
			this.checkPosition()
		};
		c.VERSION = "3.3.7";
		c.RESET = "affix affix-top affix-bottom";
		c.DEFAULTS = {
			offset: 0,
			target: window
		};
		c.prototype.getState = function(p, o, f, g) {
			var e = this.$target.scrollTop();
			var k = this.$element.offset();
			var l = this.$target.height();
			if (f != null && this.affixed == "top") {
				return e < f ? "top" : false
			}
			if (this.affixed == "bottom") {
				if (f != null) {
					return (e + this.unpin <= k.top) ? false : "bottom"
				}
				return (e + l <= p - g) ? false : "bottom"
			}
			var h = this.affixed == null;
			var n = h ? e : k.top;
			var m = h ? l : o;
			if (f != null && e <= f) {
				return "top"
			}
			if (g != null && (n + m >= p - g)) {
				return "bottom"
			}
			return false
		}
		;
		c.prototype.getPinnedOffset = function() {
			if (this.pinnedOffset) {
				return this.pinnedOffset
			}
			this.$element.removeClass(c.RESET).addClass("affix");
			var f = this.$target.scrollTop();
			var e = this.$element.offset();
			return (this.pinnedOffset = e.top - f)
		}
		;
		c.prototype.checkPositionWithEventLoop = function() {
			setTimeout(d.proxy(this.checkPosition, this), 1)
		}
		;
		c.prototype.checkPosition = function() {
			if (!this.$element.is(":visible")) {
				return
			}
			var f = this.$element.height();
			var n = this.options.offset;
			var l = n.top;
			var h = n.bottom;
			var k = Math.max(d(document).height(), d(document.body).height());
			if (typeof n != "object") {
				h = l = n
			}
			if (typeof l == "function") {
				l = n.top(this.$element)
			}
			if (typeof h == "function") {
				h = n.bottom(this.$element)
			}
			var g = this.getState(k, f, l, h);
			if (this.affixed != g) {
				if (this.unpin != null) {
					this.$element.css("top", "")
				}
				var o = "affix" + (g ? "-" + g : "");
				var m = d.Event(o + ".bs.affix");
				this.$element.trigger(m);
				if (m.isDefaultPrevented()) {
					return
				}
				this.affixed = g;
				this.unpin = g == "bottom" ? this.getPinnedOffset() : null;
				this.$element.removeClass(c.RESET).addClass(o).trigger(o.replace("affix", "affixed") + ".bs.affix")
			}
			if (g == "bottom") {
				this.$element.offset({
					top: k - f - h
				})
			}
		}
		;
		function b(e) {
			return this.each(function() {
				var h = d(this);
				var g = h.data("bs.affix");
				var f = typeof e == "object" && e;
				if (!g) {
					h.data("bs.affix", (g = new c(this,f)))
				}
				if (typeof e == "string") {
					g[e]()
				}
			})
		}
		var a = d.fn.affix;
		d.fn.affix = b;
		d.fn.affix.Constructor = c;
		d.fn.affix.noConflict = function() {
			d.fn.affix = a;
			return this
		}
		;
		d(window).on("load", function() {
			d('[data-spy="affix"]').each(function() {
				var f = d(this);
				var e = f.data();
				e.offset = e.offset || {};
				if (e.offsetBottom != null) {
					e.offset.bottom = e.offsetBottom
				}
				if (e.offsetTop != null) {
					e.offset.top = e.offsetTop
				}
				b.call(f, e)
			})
		})
	}(jQuery);
	jQuery.easing.jswing = jQuery.easing.swing;
	jQuery.extend(jQuery.easing, {
		def: "easeOutQuad",
		swing: function(e, f, a, h, g) {
			return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
		},
		easeInQuad: function(e, f, a, h, g) {
			return h * (f /= g) * f + a
		},
		easeOutQuad: function(e, f, a, h, g) {
			return -h * (f /= g) * (f - 2) + a
		},
		easeInOutQuad: function(e, f, a, h, g) {
			if ((f /= g / 2) < 1) {
				return h / 2 * f * f + a
			}
			return -h / 2 * ((--f) * (f - 2) - 1) + a
		},
		easeInCubic: function(e, f, a, h, g) {
			return h * (f /= g) * f * f + a
		},
		easeOutCubic: function(e, f, a, h, g) {
			return h * ((f = f / g - 1) * f * f + 1) + a
		},
		easeInOutCubic: function(e, f, a, h, g) {
			if ((f /= g / 2) < 1) {
				return h / 2 * f * f * f + a
			}
			return h / 2 * ((f -= 2) * f * f + 2) + a
		},
		easeInQuart: function(e, f, a, h, g) {
			return h * (f /= g) * f * f * f + a
		},
		easeOutQuart: function(e, f, a, h, g) {
			return -h * ((f = f / g - 1) * f * f * f - 1) + a
		},
		easeInOutQuart: function(e, f, a, h, g) {
			if ((f /= g / 2) < 1) {
				return h / 2 * f * f * f * f + a
			}
			return -h / 2 * ((f -= 2) * f * f * f - 2) + a
		},
		easeInQuint: function(e, f, a, h, g) {
			return h * (f /= g) * f * f * f * f + a
		},
		easeOutQuint: function(e, f, a, h, g) {
			return h * ((f = f / g - 1) * f * f * f * f + 1) + a
		},
		easeInOutQuint: function(e, f, a, h, g) {
			if ((f /= g / 2) < 1) {
				return h / 2 * f * f * f * f * f + a
			}
			return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
		},
		easeInSine: function(e, f, a, h, g) {
			return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
		},
		easeOutSine: function(e, f, a, h, g) {
			return h * Math.sin(f / g * (Math.PI / 2)) + a
		},
		easeInOutSine: function(e, f, a, h, g) {
			return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
		},
		easeInExpo: function(e, f, a, h, g) {
			return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
		},
		easeOutExpo: function(e, f, a, h, g) {
			return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
		},
		easeInOutExpo: function(e, f, a, h, g) {
			if (f == 0) {
				return a
			}
			if (f == g) {
				return a + h
			}
			if ((f /= g / 2) < 1) {
				return h / 2 * Math.pow(2, 10 * (f - 1)) + a
			}
			return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
		},
		easeInCirc: function(e, f, a, h, g) {
			return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
		},
		easeOutCirc: function(e, f, a, h, g) {
			return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
		},
		easeInOutCirc: function(e, f, a, h, g) {
			if ((f /= g / 2) < 1) {
				return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
			}
			return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
		},
		easeInElastic: function(f, h, e, n, m) {
			var k = 1.70158;
			var l = 0;
			var g = n;
			if (h == 0) {
				return e
			}
			if ((h /= m) == 1) {
				return e + n
			}
			if (!l) {
				l = m * 0.3
			}
			if (g < Math.abs(n)) {
				g = n;
				var k = l / 4
			} else {
				var k = l / (2 * Math.PI) * Math.asin(n / g)
			}
			return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * m - k) * (2 * Math.PI) / l)) + e
		},
		easeOutElastic: function(f, h, e, n, m) {
			var k = 1.70158;
			var l = 0;
			var g = n;
			if (h == 0) {
				return e
			}
			if ((h /= m) == 1) {
				return e + n
			}
			if (!l) {
				l = m * 0.3
			}
			if (g < Math.abs(n)) {
				g = n;
				var k = l / 4
			} else {
				var k = l / (2 * Math.PI) * Math.asin(n / g)
			}
			return g * Math.pow(2, -10 * h) * Math.sin((h * m - k) * (2 * Math.PI) / l) + n + e
		},
		easeInOutElastic: function(f, h, e, n, m) {
			var k = 1.70158;
			var l = 0;
			var g = n;
			if (h == 0) {
				return e
			}
			if ((h /= m / 2) == 2) {
				return e + n
			}
			if (!l) {
				l = m * (0.3 * 1.5)
			}
			if (g < Math.abs(n)) {
				g = n;
				var k = l / 4
			} else {
				var k = l / (2 * Math.PI) * Math.asin(n / g)
			}
			if (h < 1) {
				return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * m - k) * (2 * Math.PI) / l)) + e
			}
			return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * m - k) * (2 * Math.PI) / l) * 0.5 + n + e
		},
		easeInBack: function(e, f, a, k, h, g) {
			if (g == undefined) {
				g = 1.70158
			}
			return k * (f /= h) * f * ((g + 1) * f - g) + a
		},
		easeOutBack: function(e, f, a, k, h, g) {
			if (g == undefined) {
				g = 1.70158
			}
			return k * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
		},
		easeInOutBack: function(e, f, a, k, h, g) {
			if (g == undefined) {
				g = 1.70158
			}
			if ((f /= h / 2) < 1) {
				return k / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
			}
			return k / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
		},
		easeInBounce: function(e, f, a, h, g) {
			return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
		},
		easeOutBounce: function(e, f, a, h, g) {
			if ((f /= g) < (1 / 2.75)) {
				return h * (7.5625 * f * f) + a
			} else {
				if (f < (2 / 2.75)) {
					return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
				} else {
					if (f < (2.5 / 2.75)) {
						return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
					} else {
						return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
					}
				}
			}
		},
		easeInOutBounce: function(e, f, a, h, g) {
			if (f < g / 2) {
				return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
			}
			return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
		}
	});
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
		function d(k) {
			return b.raw ? k : encodeURIComponent(k)
		}
		function g(k) {
			return b.raw ? k : decodeURIComponent(k)
		}
		function h(k) {
			return d(b.json ? JSON.stringify(k) : String(k))
		}
		function c(k) {
			if (k.indexOf('"') === 0) {
				k = k.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
			}
			try {
				k = decodeURIComponent(k.replace(a, " "));
				return b.json ? JSON.parse(k) : k
			} catch (l) {}
		}
		function e(l, k) {
			var m = b.raw ? l : c(l);
			return f.isFunction(k) ? k(m) : m
		}
		var b = f.cookie = function(r, q, w) {
			if (q !== undefined && !f.isFunction(q)) {
				w = f.extend({}, b.defaults, w);
				if (typeof w.expires === "number") {
					var s = w.expires
					  , v = w.expires = new Date();
					v.setTime(+v + s * 86400000)
				}
				return (document.cookie = [d(r), "=", h(q), w.expires ? "; expires=" + w.expires.toUTCString() : "", w.path ? "; path=" + w.path : "", w.domain ? "; domain=" + w.domain : "", w.secure ? "; secure" : ""].join(""))
			}
			var x = r ? undefined : {};
			var u = document.cookie ? document.cookie.split("; ") : [];
			for (var p = 0, n = u.length; p < n; p++) {
				var o = u[p].split("=");
				var k = g(o.shift());
				var m = o.join("=");
				if (r && r === k) {
					x = e(m, q);
					break
				}
				if (!r && (m = e(m)) !== undefined) {
					x[k] = m
				}
			}
			return x
		}
		;
		b.defaults = {};
		f.removeCookie = function(l, k) {
			if (f.cookie(l) === undefined) {
				return false
			}
			f.cookie(l, "", f.extend({}, k, {
				expires: -1
			}));
			return !f.cookie(l)
		}
	}));
	/*! jQuery Mobile v1.4.3 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */
	(function(b, a, c) {
		typeof define == "function" && define.amd ? define(["jquery"], function(d) {
			return c(d, b, a),
			d.mobile
		}) : c(b.jQuery, b, a)
	}
	)(this, document, function(c, a, d, b) {
		(function(aC, am, at, ao) {
			function G(f) {
				while (f && typeof f.originalEvent != "undefined") {
					f = f.originalEvent
				}
				return f
			}
			function W(y, g) {
				var m = y.type, A, f, w, k, u, q, e, r, x;
				y = aC.Event(y),
				y.type = g,
				A = y.originalEvent,
				f = aC.event.props,
				m.search(/^(mouse|click)/) > -1 && (f = aB);
				if (A) {
					for (e = f.length,
					k; e; ) {
						k = f[--e],
						y[k] = A[k]
					}
				}
				m.search(/mouse(down|up)|click/) > -1 && !y.which && (y.which = 1);
				if (m.search(/^touch/) !== -1) {
					w = G(A),
					m = w.touches,
					u = w.changedTouches,
					q = m && m.length ? m[0] : u && u.length ? u[0] : ao;
					if (q) {
						for (r = 0,
						x = al.length; r < x; r++) {
							k = al[r],
							y[k] = q[k]
						}
					}
				}
				return y
			}
			function ae(e) {
				var h = {}, g, f;
				while (e) {
					g = aC.data(e, ay);
					for (f in g) {
						g[f] && (h[f] = h.hasVirtualBinding = !0)
					}
					e = e.parentNode
				}
				return h
			}
			function aw(e, g) {
				var f;
				while (e) {
					f = aC.data(e, ay);
					if (f && (!g || f[g])) {
						return e
					}
					e = e.parentNode
				}
				return null
			}
			function Y() {
				aA = !1
			}
			function ag() {
				aA = !0
			}
			function V() {
				ac = 0,
				ak.length = 0,
				au = !1,
				ag()
			}
			function X() {
				Y()
			}
			function aH() {
				ad(),
				aE = setTimeout(function() {
					aE = 0,
					V()
				}, aC.vmouse.resetTimerDuration)
			}
			function ad() {
				aE && (clearTimeout(aE),
				aE = 0)
			}
			function Q(f, h, g) {
				var e;
				if (g && g[f] || !g && aw(h.target, f)) {
					e = W(h, f),
					aC(h.target).trigger(e)
				}
				return e
			}
			function aa(e) {
				var g = aC.data(e.target, an), f;
				!au && (!ac || ac !== g) && (f = Q("v" + e.type, e),
				f && (f.isDefaultPrevented() && e.preventDefault(),
				f.isPropagationStopped() && e.stopPropagation(),
				f.isImmediatePropagationStopped() && e.stopImmediatePropagation()))
			}
			function af(f) {
				var k = G(f).touches, g, e, h;
				k && k.length === 1 && (g = f.target,
				e = ae(g),
				e.hasVirtualBinding && (ac = aj++,
				aC.data(g, an, ac),
				ad(),
				X(),
				aD = !1,
				h = G(f).touches[0],
				az = h.pageX,
				aq = h.pageY,
				Q("vmouseover", f, e),
				Q("vmousedown", f, e)))
			}
			function ax(f) {
				if (aA) {
					return
				}
				aD || Q("vmousecancel", f, ae(f.target)),
				aD = !0,
				aH()
			}
			function ab(f) {
				if (aA) {
					return
				}
				var k = G(f).touches[0]
				  , h = aD
				  , e = aC.vmouse.moveDistanceThreshold
				  , g = ae(f.target);
				aD = aD || Math.abs(k.pageX - az) > e || Math.abs(k.pageY - aq) > e,
				aD && !h && Q("vmousecancel", f, g),
				Q("vmousemove", f, g),
				aH()
			}
			function Z(h) {
				if (aA) {
					return
				}
				ag();
				var f = ae(h.target), k, g;
				Q("vmouseup", h, f),
				aD || (k = Q("vclick", h, f),
				k && k.isDefaultPrevented() && (g = G(h).changedTouches[0],
				ak.push({
					touchID: ac,
					x: g.clientX,
					y: g.clientY
				}),
				au = !0)),
				Q("vmouseout", h, f),
				aD = !1,
				aH()
			}
			function ap(e) {
				var g = aC.data(e, ay), f;
				if (g) {
					for (f in g) {
						if (g[f]) {
							return !0
						}
					}
				}
				return !1
			}
			function K() {}
			function z(e) {
				var f = e.substr(1);
				return {
					setup: function() {
						ap(this) || aC.data(this, ay, {});
						var g = aC.data(this, ay);
						g[e] = !0,
						av[e] = (av[e] || 0) + 1,
						av[e] === 1 && aF.bind(f, aa),
						aC(this).bind(f, K),
						ah && (av.touchstart = (av.touchstart || 0) + 1,
						av.touchstart === 1 && aF.bind("touchstart", af).bind("touchend", Z).bind("touchmove", ab).bind("scroll", ax))
					},
					teardown: function() {
						--av[e],
						av[e] || aF.unbind(f, aa),
						ah && (--av.touchstart,
						av.touchstart || aF.unbind("touchstart", af).unbind("touchmove", ab).unbind("touchend", Z).unbind("scroll", ax));
						var h = aC(this)
						  , g = aC.data(this, ay);
						g && (g[e] = !1),
						h.unbind(f, K),
						ap(this) || h.removeData(ay)
					}
				}
			}
			var ay = "virtualMouseBindings", an = "virtualTouchID", ar = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "), al = "clientX clientY pageX pageY screenX screenY".split(" "), aG = aC.event.mouseHooks ? aC.event.mouseHooks.props : [], aB = aC.event.props.concat(aG), av = {}, aE = 0, az = 0, aq = 0, aD = !1, ak = [], au = !1, aA = !1, ah = "addEventListener"in at, aF = aC(at), aj = 1, ac = 0, J, ai;
			aC.vmouse = {
				moveDistanceThreshold: 10,
				clickDistanceThreshold: 10,
				resetTimerDuration: 1500
			};
			for (ai = 0; ai < ar.length; ai++) {
				aC.event.special[ar[ai]] = z(ar[ai])
			}
			ah && at.addEventListener("click", function(v) {
				var h = ak.length, e = v.target, m, g, s, q, p, k;
				if (h) {
					m = v.clientX,
					g = v.clientY,
					J = aC.vmouse.clickDistanceThreshold,
					s = e;
					while (s) {
						for (q = 0; q < h; q++) {
							p = ak[q],
							k = 0;
							if (s === e && Math.abs(p.x - m) < J && Math.abs(p.y - g) < J || aC.data(s, an) === p.touchID) {
								v.preventDefault(),
								v.stopPropagation();
								return
							}
						}
						s = s.parentNode
					}
				}
			}, !0)
		}
		)(c, a, d),
		function(f) {
			f.mobile = {}
		}(c),
		function(h, f) {
			var g = {
				touch: "ontouchend"in d
			};
			h.mobile.support = h.mobile.support || {},
			h.extend(h.support, g),
			h.extend(h.mobile.support, g)
		}(c),
		function(p, w, g) {
			function k(f, u, e, l) {
				var r = e.type;
				e.type = u,
				l ? p.event.trigger(e, g, f) : p.event.dispatch.call(f, e),
				e.type = r
			}
			var m = p(d)
			  , x = p.mobile.support.touch
			  , h = "touchmove scroll"
			  , v = x ? "touchstart" : "mousedown"
			  , q = x ? "touchend" : "mouseup"
			  , n = x ? "touchmove" : "mousemove";
			p.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(e, f) {
				p.fn[f] = function(l) {
					return l ? this.bind(f, l) : this.trigger(f)
				}
				,
				p.attrFn && (p.attrFn[f] = !0)
			}),
			p.event.special.scrollstart = {
				enabled: !0,
				setup: function() {
					function l(r, s) {
						o = s,
						k(f, o ? "scrollstart" : "scrollstop", r)
					}
					var f = this, u = p(f), o, e;
					u.bind(h, function(r) {
						if (!p.event.special.scrollstart.enabled) {
							return
						}
						o || l(r, !0),
						clearTimeout(e),
						e = setTimeout(function() {
							l(r, !1)
						}, 50)
					})
				},
				teardown: function() {
					p(this).unbind(h)
				}
			},
			p.event.special.tap = {
				tapholdThreshold: 750,
				emitTapOnTaphold: !0,
				setup: function() {
					var e = this
					  , l = p(e)
					  , f = !1;
					l.bind("vmousedown", function(y) {
						function r() {
							clearTimeout(t)
						}
						function z() {
							r(),
							l.unbind("vclick", B).unbind("vmouseup", r),
							m.unbind("vmousecancel", z)
						}
						function B(o) {
							z(),
							!f && A === o.target ? k(e, "tap", o) : f && o.preventDefault()
						}
						f = !1;
						if (y.which && y.which !== 1) {
							return !1
						}
						var A = y.target, t;
						l.bind("vmouseup", r).bind("vclick", B),
						m.bind("vmousecancel", z),
						t = setTimeout(function() {
							p.event.special.tap.emitTapOnTaphold || (f = !0),
							k(e, "taphold", p.Event("taphold", {
								target: A
							}))
						}, p.event.special.tap.tapholdThreshold)
					})
				},
				teardown: function() {
					p(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),
					m.unbind("vmousecancel")
				}
			},
			p.event.special.swipe = {
				scrollSupressionThreshold: 30,
				durationThreshold: 1000,
				horizontalDistanceThreshold: 30,
				verticalDistanceThreshold: 30,
				getLocation: function(t) {
					var u = w.pageXOffset
					  , o = w.pageYOffset
					  , f = t.clientX
					  , l = t.clientY;
					if (t.pageY === 0 && Math.floor(l) > Math.floor(t.pageY) || t.pageX === 0 && Math.floor(f) > Math.floor(t.pageX)) {
						f -= u,
						l -= o
					} else {
						if (l < t.pageY - o || f < t.pageX - u) {
							f = t.pageX - u,
							l = t.pageY - o
						}
					}
					return {
						x: f,
						y: l
					}
				},
				start: function(e) {
					var l = e.originalEvent.touches ? e.originalEvent.touches[0] : e
					  , f = p.event.special.swipe.getLocation(l);
					return {
						time: (new Date).getTime(),
						coords: [f.x, f.y],
						origin: p(e.target)
					}
				},
				stop: function(e) {
					var l = e.originalEvent.touches ? e.originalEvent.touches[0] : e
					  , f = p.event.special.swipe.getLocation(l);
					return {
						time: (new Date).getTime(),
						coords: [f.x, f.y]
					}
				},
				handleSwipe: function(f, u, o, e) {
					if (u.time - f.time < p.event.special.swipe.durationThreshold && Math.abs(f.coords[0] - u.coords[0]) > p.event.special.swipe.horizontalDistanceThreshold && Math.abs(f.coords[1] - u.coords[1]) < p.event.special.swipe.verticalDistanceThreshold) {
						var l = f.coords[0] > u.coords[0] ? "swipeleft" : "swiperight";
						return k(o, "swipe", p.Event("swipe", {
							target: e,
							swipestart: f,
							swipestop: u
						}), !0),
						k(o, l, p.Event(l, {
							target: e,
							swipestart: f,
							swipestop: u
						}), !0),
						!0
					}
					return !1
				},
				eventInProgress: !1,
				setup: function() {
					var e, o = this, l = p(o), f = {};
					e = p.data(this, "mobile-events"),
					e || (e = {
						length: 0
					},
					p.data(this, "mobile-events", e)),
					e.length++,
					e.swipe = f,
					f.start = function(z) {
						if (p.event.special.swipe.eventInProgress) {
							return
						}
						p.event.special.swipe.eventInProgress = !0;
						var A, B = p.event.special.swipe.start(z), y = z.target, s = !1;
						f.move = function(r) {
							if (!B) {
								return
							}
							A = p.event.special.swipe.stop(r),
							s || (s = p.event.special.swipe.handleSwipe(B, A, o, y),
							s && (p.event.special.swipe.eventInProgress = !1)),
							Math.abs(B.coords[0] - A.coords[0]) > p.event.special.swipe.scrollSupressionThreshold && r.preventDefault()
						}
						,
						f.stop = function() {
							s = !0,
							p.event.special.swipe.eventInProgress = !1,
							m.off(n, f.move),
							f.move = null
						}
						,
						m.on(n, f.move).one(q, f.stop)
					}
					,
					l.on(v, f.start)
				},
				teardown: function() {
					var e, f;
					e = p.data(this, "mobile-events"),
					e && (f = e.swipe,
					delete e.swipe,
					e.length--,
					e.length === 0 && p.removeData(this, "mobile-events")),
					f && (f.start && p(this).off(v, f.start),
					f.move && m.off(n, f.move),
					f.stop && m.off(q, f.stop))
				}
			},
			p.each({
				scrollstop: "scrollstart",
				taphold: "tap",
				swipeleft: "swipe.left",
				swiperight: "swipe.right"
			}, function(e, f) {
				p.event.special[e] = {
					setup: function() {
						p(this).bind(f, p.noop)
					},
					teardown: function() {
						p(this).unbind(f)
					}
				}
			})
		}(c, this),
		function(g, f, h) {
			g.extend(g.mobile, {
				version: "1.4.3",
				subPageUrlKey: "ui-page",
				hideUrlBar: !0,
				keepNative: ":jqmData(role='none'), :jqmData(role='nojs')",
				activePageClass: "ui-page-active",
				activeBtnClass: "ui-btn-active",
				focusClass: "ui-focus",
				ajaxEnabled: !0,
				hashListeningEnabled: !0,
				linkBindingEnabled: !0,
				defaultPageTransition: "fade",
				maxTransitionWidth: !1,
				minScrollBack: 0,
				defaultDialogTransition: "pop",
				pageLoadErrorMessage: "Error Loading Page",
				pageLoadErrorMessageTheme: "a",
				phonegapNavigationEnabled: !1,
				autoInitializePage: !0,
				pushStateEnabled: !0,
				ignoreContentEnabled: !1,
				buttonMarkup: {
					hoverDelay: 200
				},
				dynamicBaseEnabled: !0,
				pageContainer: g(),
				allowCrossDomainPages: !1,
				dialogHashKey: "&ui-state=dialog"
			})
		}(c, this),
		function(l, g, p) {
			var k = {}
			  , f = l.find
			  , h = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
			  , m = /:jqmData\(([^)]*)\)/g;
			l.extend(l.mobile, {
				ns: "",
				getAttribute: function(o, s) {
					var q;
					o = o.jquery ? o[0] : o,
					o && o.getAttribute && (q = o.getAttribute("data-" + l.mobile.ns + s));
					try {
						q = q === "true" ? !0 : q === "false" ? !1 : q === "null" ? null : +q + "" === q ? +q : h.test(q) ? JSON.parse(q) : q
					} catch (e) {}
					return q
				},
				nsNormalizeDict: k,
				nsNormalize: function(e) {
					return k[e] || (k[e] = l.camelCase(l.mobile.ns + e))
				},
				closestPageData: function(n) {
					return n.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page")
				}
			}),
			l.fn.jqmData = function(n, o) {
				var e;
				return typeof n != "undefined" && (n && (n = l.mobile.nsNormalize(n)),
				arguments.length < 2 || o === p ? e = this.data(n) : e = this.data(n, o)),
				e
			}
			,
			l.jqmData = function(o, s, q) {
				var e;
				return typeof s != "undefined" && (e = l.data(o, s ? l.mobile.nsNormalize(s) : s, q)),
				e
			}
			,
			l.fn.jqmRemoveData = function(e) {
				return this.removeData(l.mobile.nsNormalize(e))
			}
			,
			l.jqmRemoveData = function(e, o) {
				return l.removeData(e, l.mobile.nsNormalize(o))
			}
			,
			l.find = function(e, u, q, o) {
				return e.indexOf(":jqmData") > -1 && (e = e.replace(m, "[data-" + (l.mobile.ns || "") + "$1]")),
				f.call(this, e, u, q, o)
			}
			,
			l.extend(l.find, f)
		}(c, this),
		function(l, g) {
			function h(p, w) {
				var v, o, q, e = p.nodeName.toLowerCase();
				return "area" === e ? (v = p.parentNode,
				o = v.name,
				!p.href || !o || v.nodeName.toLowerCase() !== "map" ? !1 : (q = l("img[usemap=#" + o + "]")[0],
				!!q && m(q))) : (/input|select|textarea|button|object/.test(e) ? !p.disabled : "a" === e ? p.href || w : w) && m(p)
			}
			function m(e) {
				return l.expr.filters.visible(e) && !l(e).parents().addBack().filter(function() {
					return l.css(this, "visibility") === "hidden"
				}).length
			}
			var k = 0
			  , f = /^ui-id-\d+$/;
			l.ui = l.ui || {},
			l.extend(l.ui, {
				version: "c0ab71056b936627e8a7821f03c044aec6280a40",
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
					PAGE_DOWN: 34,
					PAGE_UP: 33,
					PERIOD: 190,
					RIGHT: 39,
					SPACE: 32,
					TAB: 9,
					UP: 38
				}
			}),
			l.fn.extend({
				focus: function(e) {
					return function(p, o) {
						return typeof p == "number" ? this.each(function() {
							var n = this;
							setTimeout(function() {
								l(n).focus(),
								o && o.call(n)
							}, p)
						}) : e.apply(this, arguments)
					}
				}(l.fn.focus),
				scrollParent: function() {
					var e;
					return l.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? e = this.parents().filter(function() {
						return /(relative|absolute|fixed)/.test(l.css(this, "position")) && /(auto|scroll)/.test(l.css(this, "overflow") + l.css(this, "overflow-y") + l.css(this, "overflow-x"))
					}).eq(0) : e = this.parents().filter(function() {
						return /(auto|scroll)/.test(l.css(this, "overflow") + l.css(this, "overflow-y") + l.css(this, "overflow-x"))
					}).eq(0),
					/fixed/.test(this.css("position")) || !e.length ? l(this[0].ownerDocument || d) : e
				},
				uniqueId: function() {
					return this.each(function() {
						this.id || (this.id = "ui-id-" + ++k)
					})
				},
				removeUniqueId: function() {
					return this.each(function() {
						f.test(this.id) && l(this).removeAttr("id")
					})
				}
			}),
			l.extend(l.expr[":"], {
				data: l.expr.createPseudo ? l.expr.createPseudo(function(e) {
					return function(o) {
						return !!l.data(o, e)
					}
				}) : function(e, p, o) {
					return !!l.data(e, o[3])
				}
				,
				focusable: function(e) {
					return h(e, !isNaN(l.attr(e, "tabindex")))
				},
				tabbable: function(e) {
					var p = l.attr(e, "tabindex")
					  , o = isNaN(p);
					return (o || p >= 0) && h(e, !o)
				}
			}),
			l("<a>").outerWidth(1).jquery || l.each(["Width", "Height"], function(w, t) {
				function e(o, y, x, u) {
					return l.each(p, function() {
						y -= parseFloat(l.css(o, "padding" + this)) || 0,
						x && (y -= parseFloat(l.css(o, "border" + this + "Width")) || 0),
						u && (y -= parseFloat(l.css(o, "margin" + this)) || 0)
					}),
					y
				}
				var p = t === "Width" ? ["Left", "Right"] : ["Top", "Bottom"]
				  , q = t.toLowerCase()
				  , v = {
					innerWidth: l.fn.innerWidth,
					innerHeight: l.fn.innerHeight,
					outerWidth: l.fn.outerWidth,
					outerHeight: l.fn.outerHeight
				};
				l.fn["inner" + t] = function(o) {
					return o === g ? v["inner" + t].call(this) : this.each(function() {
						l(this).css(q, e(this, o) + "px")
					})
				}
				,
				l.fn["outer" + t] = function(o, r) {
					return typeof o != "number" ? v["outer" + t].call(this, o) : this.each(function() {
						l(this).css(q, e(this, o, !0, r) + "px")
					})
				}
			}),
			l.fn.addBack || (l.fn.addBack = function(n) {
				return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
			}
			),
			l("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (l.fn.removeData = function(e) {
				return function(o) {
					return arguments.length ? e.call(this, l.camelCase(o)) : e.call(this)
				}
			}(l.fn.removeData)),
			l.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
			l.support.selectstart = "onselectstart"in d.createElement("div"),
			l.fn.extend({
				disableSelection: function() {
					return this.bind((l.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(n) {
						n.preventDefault()
					})
				},
				enableSelection: function() {
					return this.unbind(".ui-disableSelection")
				},
				zIndex: function(p) {
					if (p !== g) {
						return this.css("zIndex", p)
					}
					if (this.length) {
						var e = l(this[0]), n, q;
						while (e.length && e[0] !== d) {
							n = e.css("position");
							if (n === "absolute" || n === "relative" || n === "fixed") {
								q = parseInt(e.css("zIndex"), 10);
								if (!isNaN(q) && q !== 0) {
									return q
								}
							}
							e = e.parent()
						}
					}
					return 0
				}
			}),
			l.ui.plugin = {
				add: function(o, u, q) {
					var e, p = l.ui[o].prototype;
					for (e in q) {
						p.plugins[e] = p.plugins[e] || [],
						p.plugins[e].push([u, q[e]])
					}
				},
				call: function(v, p, w, u) {
					var o, q = v.plugins[p];
					if (!q) {
						return
					}
					if (!u && (!v.element[0].parentNode || v.element[0].parentNode.nodeType === 11)) {
						return
					}
					for (o = 0; o < q.length; o++) {
						v.options[q[o][0]] && q[o][1].apply(v.element, w)
					}
				}
			}
		}(c),
		function(k, g, h) {
			var f = function(p, x) {
				var v = p.parent()
				  , m = []
				  , q = v.children(":jqmData(role='header')")
				  , w = p.children(":jqmData(role='header')")
				  , l = v.children(":jqmData(role='footer')")
				  , e = p.children(":jqmData(role='footer')");
				return w.length === 0 && q.length > 0 && (m = m.concat(q.toArray())),
				e.length === 0 && l.length > 0 && (m = m.concat(l.toArray())),
				k.each(m, function(n, o) {
					x -= k(o).outerHeight()
				}),
				Math.max(0, x)
			};
			k.extend(k.mobile, {
				window: k(g),
				document: k(d),
				keyCode: k.ui.keyCode,
				behaviors: {},
				silentScroll: function(e) {
					k.type(e) !== "number" && (e = k.mobile.defaultHomeScroll),
					k.event.special.scrollstart.enabled = !1,
					setTimeout(function() {
						g.scrollTo(0, e),
						k.mobile.document.trigger("silentscroll", {
							x: 0,
							y: e
						})
					}, 20),
					setTimeout(function() {
						k.event.special.scrollstart.enabled = !0
					}, 150)
				},
				getClosestBaseUrl: function(e) {
					var m = k(e).closest(".ui-page").jqmData("url")
					  , l = k.mobile.path.documentBase.hrefNoHash;
					if (!k.mobile.dynamicBaseEnabled || !m || !k.mobile.path.isPath(m)) {
						m = l
					}
					return k.mobile.path.makeUrlAbsolute(m, l)
				},
				removeActiveLinkClass: function(e) {
					!!k.mobile.activeClickedLink && (!k.mobile.activeClickedLink.closest("." + k.mobile.activePageClass).length || e) && k.mobile.activeClickedLink.removeClass(k.mobile.activeBtnClass),
					k.mobile.activeClickedLink = null
				},
				getInheritedTheme: function(u, m) {
					var w = u[0], q = "", l = /ui-(bar|body|overlay)-([a-z])\b/, p, v;
					while (w) {
						p = w.className || "";
						if (p && (v = l.exec(p)) && (q = v[2])) {
							break
						}
						w = w.parentNode
					}
					return q || m || "a"
				},
				enhanceable: function(l) {
					return this.haveParents(l, "enhance")
				},
				hijackable: function(l) {
					return this.haveParents(l, "ajax")
				},
				haveParents: function(x, m) {
					if (!k.mobile.ignoreContentEnabled) {
						return x
					}
					var e = x.length, p = k(), y, l, w, v, q;
					for (v = 0; v < e; v++) {
						l = x.eq(v),
						w = !1,
						y = x[v];
						while (y) {
							q = y.getAttribute ? y.getAttribute("data-" + k.mobile.ns + m) : "";
							if (q === "false") {
								w = !0;
								break
							}
							y = y.parentNode
						}
						w || (p = p.add(l))
					}
					return p
				},
				getScreenHeight: function() {
					return g.innerHeight || k.mobile.window.height()
				},
				resetActivePageHeight: function(e) {
					var o = k("." + k.mobile.activePageClass)
					  , m = o.height()
					  , l = o.outerHeight(!0);
					e = f(o, typeof e == "number" ? e : k.mobile.getScreenHeight()),
					o.css("min-height", ""),
					o.height() < e && o.css("min-height", e - (l - m))
				},
				loading: function() {
					var e = this.loading._widget || k(k.mobile.loader.prototype.defaultHtml).loader()
					  , l = e.loader.apply(e, arguments);
					return this.loading._widget = e,
					l
				}
			}),
			k.addDependents = function(l, o) {
				var m = k(l)
				  , e = m.jqmData("dependents") || k();
				m.jqmData("dependents", k(e).add(o))
			}
			,
			k.fn.extend({
				removeWithDependents: function() {
					k.removeWithDependents(this)
				},
				enhanceWithin: function() {
					var l, o = {}, m = k.mobile.page.prototype.keepNativeSelector(), e = this;
					k.mobile.nojs && k.mobile.nojs(this),
					k.mobile.links && k.mobile.links(this),
					k.mobile.degradeInputsWithin && k.mobile.degradeInputsWithin(this),
					k.fn.buttonMarkup && this.find(k.fn.buttonMarkup.initSelector).not(m).jqmEnhanceable().buttonMarkup(),
					k.fn.fieldcontain && this.find(":jqmData(role='fieldcontain')").not(m).jqmEnhanceable().fieldcontain(),
					k.each(k.mobile.widgets, function(n, p) {
						if (p.initSelector) {
							var q = k.mobile.enhanceable(e.find(p.initSelector));
							q.length > 0 && (q = q.not(m)),
							q.length > 0 && (o[p.prototype.widgetName] = q)
						}
					});
					for (l in o) {
						o[l][l]()
					}
					return this
				},
				addDependents: function(e) {
					k.addDependents(this, e)
				},
				getEncodedText: function() {
					return k("<a>").text(this.text()).html()
				},
				jqmEnhanceable: function() {
					return k.mobile.enhanceable(this)
				},
				jqmHijackable: function() {
					return k.mobile.hijackable(this)
				}
			}),
			k.removeWithDependents = function(e) {
				var l = k(e);
				(l.jqmData("dependents") || k()).remove(),
				l.remove()
			}
			,
			k.addDependents = function(l, o) {
				var m = k(l)
				  , e = m.jqmData("dependents") || k();
				m.jqmData("dependents", k(e).add(o))
			}
			,
			k.find.matches = function(e, l) {
				return k.find(e, null, null, l)
			}
			,
			k.find.matchesSelector = function(e, l) {
				return k.find(l, null, null, [e]).length > 0
			}
		}(c, this),
		function(g, f) {
			a.matchMedia = a.matchMedia || function(p, k) {
				var u, m = p.documentElement, h = m.firstElementChild || m.firstChild, l = p.createElement("body"), q = p.createElement("div");
				return q.id = "mq-test-1",
				q.style.cssText = "position:absolute;top:-100em",
				l.style.background = "none",
				l.appendChild(q),
				function(n) {
					return q.innerHTML = '&shy;<style media="' + n + '"> #mq-test-1 { width: 42px; }</style>',
					m.insertBefore(l, h),
					u = q.offsetWidth === 42,
					m.removeChild(l),
					{
						matches: u,
						media: n
					}
				}
			}(d),
			g.mobile.media = function(h) {
				return a.matchMedia(h).matches
			}
		}(c),
		function(f, g) {
			f.extend(f.support, {
				orientation: "orientation"in a && "onorientationchange"in a
			})
		}(c),
		function(B, k) {
			function x(h) {
				var g = h.charAt(0).toUpperCase() + h.substr(1), l = (h + " " + G.join(g + " ") + g).split(" "), f;
				for (f in l) {
					if (q[l[f]] !== k) {
						return !0
					}
				}
			}
			function y() {
				var h = a
				  , g = !!h.document.createElementNS && !!h.document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect && (!h.opera || navigator.userAgent.indexOf("Chrome") !== -1)
				  , e = function(l) {
					(!l || !g) && B("html").addClass("ui-nosvg")
				}
				  , f = new h.Image;
				f.onerror = function() {
					e(!1)
				}
				,
				f.onload = function() {
					e(f.width === 1 && f.height === 1)
				}
				,
				f.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
			}
			function n() {
				var h = "transform-3d", p = B.mobile.media("(-" + G.join("-" + h + "),(-") + "-" + h + "),(" + h + ")"), g, m, e;
				if (p) {
					return !!p
				}
				g = d.createElement("div"),
				m = {
					MozTransform: "-moz-transform",
					transform: "transform"
				},
				H.append(g);
				for (e in m) {
					g.style[e] !== k && (g.style[e] = "translate3d( 100px, 1px, 1px )",
					p = a.getComputedStyle(g).getPropertyValue(m[e]))
				}
				return !!p && p !== "none"
			}
			function C() {
				var g = location.protocol + "//" + location.host + location.pathname + "ui-dir/", m = B("head base"), h = null, f = "", l, e;
				return m.length ? f = m.attr("href") : m = h = B("<base>", {
					href: g
				}).appendTo("head"),
				l = B("<a href='testurl' />").prependTo(H),
				e = l[0].href,
				m[0].href = f || location.pathname,
				h && h.remove(),
				e.indexOf(g) === 0
			}
			function F() {
				var l = d.createElement("x"), h = d.documentElement, f = a.getComputedStyle, g;
				return "pointerEvents"in l.style ? (l.style.pointerEvents = "auto",
				l.style.pointerEvents = "x",
				h.appendChild(l),
				g = f && f(l, "").pointerEvents === "auto",
				h.removeChild(l),
				!!g) : !1
			}
			function t() {
				var f = d.createElement("div");
				return typeof f.getBoundingClientRect != "undefined"
			}
			function z() {
				var v = a
				  , l = navigator.userAgent
				  , g = navigator.platform
				  , m = l.match(/AppleWebKit\/([0-9]+)/)
				  , K = !!m && m[1]
				  , h = l.match(/Fennec\/([0-9]+)/)
				  , J = !!h && h[1]
				  , I = l.match(/Opera Mobi\/([0-9]+)/)
				  , p = !!I && I[1];
				return (g.indexOf("iPhone") > -1 || g.indexOf("iPad") > -1 || g.indexOf("iPod") > -1) && K && K < 534 || v.operamini && {}.toString.call(v.operamini) === "[object OperaMini]" || I && p < 7458 || l.indexOf("Android") > -1 && K && K < 533 || J && J < 6 || "palmGetResource"in a && K && K < 534 || l.indexOf("MeeGo") > -1 && l.indexOf("NokiaBrowser/8.5.0") > -1 ? !1 : !0
			}
			var H = B("<body>").prependTo("html"), q = H[0].style, G = ["Webkit", "Moz", "O"], E = "palmGetResource"in a, A = a.operamini && {}.toString.call(a.operamini) === "[object OperaMini]", w = a.blackberry && !x("-webkit-transform"), D;
			B.extend(B.mobile, {
				browser: {}
			}),
			B.mobile.browser.oldIE = function() {
				var h = 3
				  , f = d.createElement("div")
				  , g = f.all || [];
				do {
					f.innerHTML = "<!--[if gt IE " + ++h + "]><br><![endif]-->"
				} while (g[0]);return h > 4 ? h : !h
			}(),
			B.extend(B.support, {
				pushState: "pushState"in history && "replaceState"in history && !(a.navigator.userAgent.indexOf("Firefox") >= 0 && a.top !== a) && a.navigator.userAgent.search(/CriOS/) === -1,
				mediaquery: B.mobile.media("only all"),
				cssPseudoElement: !!x("content"),
				touchOverflow: !!x("overflowScrolling"),
				cssTransform3d: n(),
				boxShadow: !!x("boxShadow") && !w,
				fixedPosition: z(),
				scrollTop: ("pageXOffset"in a || "scrollTop"in d.documentElement || "scrollTop"in H[0]) && !E && !A,
				dynamicBaseTag: C(),
				cssPointerEvents: F(),
				boundingRect: t(),
				inlineSVG: y
			}),
			H.remove(),
			D = function() {
				var f = a.navigator.userAgent;
				return f.indexOf("Nokia") > -1 && (f.indexOf("Symbian/3") > -1 || f.indexOf("Series60/5") > -1) && f.indexOf("AppleWebKit") > -1 && f.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)
			}(),
			B.mobile.gradeA = function() {
				return (B.support.mediaquery && B.support.cssPseudoElement || B.mobile.browser.oldIE && B.mobile.browser.oldIE >= 8) && (B.support.boundingRect || B.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/) !== null)
			}
			,
			B.mobile.ajaxBlacklist = a.blackberry && !a.WebKitPoint || A || D,
			D && B(function() {
				B("head link[rel='stylesheet']").attr("rel", "alternate stylesheet").attr("rel", "stylesheet")
			}),
			B.support.boxShadow || B("html").addClass("ui-noboxshadow")
		}(c)
	});
	/*! * Modernizr v2.8.3 * www.modernizr.com * * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton * Available under the BSD and MIT licenses: www.modernizr.com/license/ */
	;window.Modernizr = (function(C, c, g) {
		var L = "2.8.3", y = {}, A = true, O = c.documentElement, a = "modernizr", K = c.createElement(a), G = K.style, N = c.createElement("input"), E = ":)", b = {}.toString, l = " -webkit- -moz- -o- -ms- ".split(" "), h = "Webkit Moz O ms", H = h.split(" "), M = h.toLowerCase().split(" "), J = {
			svg: "http://www.w3.org/2000/svg"
		}, n = {}, r = {}, f = {}, e = [], m = e.slice, u, p = function(X, Z, R, Y) {
			var Q, W, T, U, P = c.createElement("div"), V = c.body, S = V || c.createElement("body");
			if (parseInt(R, 10)) {
				while (R--) {
					T = c.createElement("div");
					T.id = Y ? Y[R] : a + (R + 1);
					P.appendChild(T)
				}
			}
			Q = ["&#173;", '<style id="s', a, '">', X, "</style>"].join("");
			P.id = a;
			(V ? P : S).innerHTML += Q;
			S.appendChild(P);
			if (!V) {
				S.style.background = "";
				S.style.overflow = "hidden";
				U = O.style.overflow;
				O.style.overflow = "hidden";
				O.appendChild(S)
			}
			W = Z(P, X);
			if (!V) {
				S.parentNode.removeChild(S);
				O.style.overflow = U
			} else {
				P.parentNode.removeChild(P)
			}
			return !!W
		}, I = function(R) {
			var Q = C.matchMedia || C.msMatchMedia;
			if (Q) {
				return Q(R) && Q(R).matches || false
			}
			var P;
			p("@media " + R + " { #" + a + " { position: absolute; } }", function(S) {
				P = (C.getComputedStyle ? getComputedStyle(S, null) : S.currentStyle)["position"] == "absolute"
			});
			return P
		}, q = (function() {
			var Q = {
				select: "input",
				change: "input",
				submit: "form",
				reset: "form",
				error: "img",
				load: "img",
				abort: "img"
			};
			function P(R, T) {
				T = T || c.createElement(Q[R] || "div");
				R = "on" + R;
				var S = R in T;
				if (!S) {
					if (!T.setAttribute) {
						T = c.createElement("div")
					}
					if (T.setAttribute && T.removeAttribute) {
						T.setAttribute(R, "");
						S = t(T[R], "function");
						if (!t(T[R], "undefined")) {
							T[R] = g
						}
						T.removeAttribute(R)
					}
				}
				T = null;
				return S
			}
			return P
		}
		)(), k = ({}).hasOwnProperty, z;
		if (!t(k, "undefined") && !t(k.call, "undefined")) {
			z = function(P, Q) {
				return k.call(P, Q)
			}
		} else {
			z = function(P, Q) {
				return ((Q in P) && t(P.constructor.prototype[Q], "undefined"))
			}
		}
		if (!Function.prototype.bind) {
			Function.prototype.bind = function d(R) {
				var S = this;
				if (typeof S != "function") {
					throw new TypeError()
				}
				var P = m.call(arguments, 1)
				  , Q = function() {
					if (this instanceof Q) {
						var V = function() {};
						V.prototype = S.prototype;
						var U = new V();
						var T = S.apply(U, P.concat(m.call(arguments)));
						if (Object(T) === T) {
							return T
						}
						return U
					} else {
						return S.apply(R, P.concat(m.call(arguments)))
					}
				};
				return Q
			}
		}
		function F(P) {
			G.cssText = P
		}
		function w(Q, P) {
			return F(l.join(Q + ";") + (P || ""))
		}
		function t(Q, P) {
			return typeof Q === P
		}
		function v(Q, P) {
			return !!~("" + Q).indexOf(P)
		}
		function B(R, P) {
			for (var Q in R) {
				var S = R[Q];
				if (!v(S, "-") && G[S] !== g) {
					return P == "pfx" ? S : true
				}
			}
			return false
		}
		function s(Q, T, S) {
			for (var P in Q) {
				var R = T[Q[P]];
				if (R !== g) {
					if (S === false) {
						return Q[P]
					}
					if (t(R, "function")) {
						return R.bind(S || T)
					}
					return R
				}
			}
			return false
		}
		function o(T, P, S) {
			var Q = T.charAt(0).toUpperCase() + T.slice(1)
			  , R = (T + " " + H.join(Q + " ") + Q).split(" ");
			if (t(P, "string") || t(P, "undefined")) {
				return B(R, P)
			} else {
				R = (T + " " + (M).join(Q + " ") + Q).split(" ");
				return s(R, P, S)
			}
		}
		n.flexbox = function() {
			return o("flexWrap")
		}
		;
		n.flexboxlegacy = function() {
			return o("boxDirection")
		}
		;
		n.canvas = function() {
			var P = c.createElement("canvas");
			return !!(P.getContext && P.getContext("2d"))
		}
		;
		n.canvastext = function() {
			return !!(y.canvas && t(c.createElement("canvas").getContext("2d").fillText, "function"))
		}
		;
		n.webgl = function() {
			return !!C.WebGLRenderingContext
		}
		;
		n.touch = function() {
			var P;
			if (("ontouchstart"in C) || C.DocumentTouch && c instanceof DocumentTouch) {
				P = true
			} else {
				p(["@media (", l.join("touch-enabled),("), a, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(Q) {
					P = Q.offsetTop === 9
				})
			}
			return P
		}
		;
		n.geolocation = function() {
			return "geolocation"in navigator
		}
		;
		n.postmessage = function() {
			return !!C.postMessage
		}
		;
		n.websqldatabase = function() {
			return !!C.openDatabase
		}
		;
		n.indexedDB = function() {
			return !!o("indexedDB", C)
		}
		;
		n.hashchange = function() {
			return q("hashchange", C) && (c.documentMode === g || c.documentMode > 7)
		}
		;
		n.history = function() {
			return !!(C.history && history.pushState)
		}
		;
		n.draganddrop = function() {
			var P = c.createElement("div");
			return ("draggable"in P) || ("ondragstart"in P && "ondrop"in P)
		}
		;
		n.websockets = function() {
			return "WebSocket"in C || "MozWebSocket"in C
		}
		;
		n.rgba = function() {
			F("background-color:rgba(150,255,150,.5)");
			return v(G.backgroundColor, "rgba")
		}
		;
		n.hsla = function() {
			F("background-color:hsla(120,40%,100%,.5)");
			return v(G.backgroundColor, "rgba") || v(G.backgroundColor, "hsla")
		}
		;
		n.multiplebgs = function() {
			F("background:url(https://),url(https://),red url(https://)");
			return (/(url\s*\(.*?){3}/).test(G.background)
		}
		;
		n.backgroundsize = function() {
			return o("backgroundSize")
		}
		;
		n.borderimage = function() {
			return o("borderImage")
		}
		;
		n.borderradius = function() {
			return o("borderRadius")
		}
		;
		n.boxshadow = function() {
			return o("boxShadow")
		}
		;
		n.textshadow = function() {
			return c.createElement("div").style.textShadow === ""
		}
		;
		n.opacity = function() {
			w("opacity:.55");
			return (/^0.55$/).test(G.opacity)
		}
		;
		n.cssanimations = function() {
			return o("animationName")
		}
		;
		n.csscolumns = function() {
			return o("columnCount")
		}
		;
		n.cssgradients = function() {
			var R = "background-image:"
			  , Q = "gradient(linear,left top,right bottom,from(#9f9),to(white));"
			  , P = "linear-gradient(left top,#9f9, white);";
			F((R + "-webkit- ".split(" ").join(Q + R) + l.join(P + R)).slice(0, -R.length));
			return v(G.backgroundImage, "gradient")
		}
		;
		n.cssreflections = function() {
			return o("boxReflect")
		}
		;
		n.csstransforms = function() {
			return !!o("transform")
		}
		;
		n.csstransforms3d = function() {
			var P = !!o("perspective");
			if (P && "webkitPerspective"in O.style) {
				p("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(Q, R) {
					P = Q.offsetLeft === 9 && Q.offsetHeight === 3
				})
			}
			return P
		}
		;
		n.csstransitions = function() {
			return o("transition")
		}
		;
		n.fontface = function() {
			var P;
			p('@font-face {font-family:"font";src:url("https://")}', function(T, U) {
				var S = c.getElementById("smodernizr")
				  , Q = S.sheet || S.styleSheet
				  , R = Q ? (Q.cssRules && Q.cssRules[0] ? Q.cssRules[0].cssText : Q.cssText || "") : "";
				P = /src/i.test(R) && R.indexOf(U.split(" ")[0]) === 0
			});
			return P
		}
		;
		n.generatedcontent = function() {
			var P;
			p(["#", a, "{font:0/0 a}#", a, ':after{content:"', E, '";visibility:hidden;font:3px/1 a}'].join(""), function(Q) {
				P = Q.offsetHeight >= 3
			});
			return P
		}
		;
		n.video = function() {
			var Q = c.createElement("video")
			  , P = false;
			try {
				if (P = !!Q.canPlayType) {
					P = new Boolean(P);
					P.ogg = Q.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, "");
					P.h264 = Q.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, "");
					P.webm = Q.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
				}
			} catch (R) {}
			return P
		}
		;
		n.audio = function() {
			var Q = c.createElement("audio")
			  , P = false;
			try {
				if (P = !!Q.canPlayType) {
					P = new Boolean(P);
					P.ogg = Q.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "");
					P.mp3 = Q.canPlayType("audio/mpeg;").replace(/^no$/, "");
					P.wav = Q.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "");
					P.m4a = (Q.canPlayType("audio/x-m4a;") || Q.canPlayType("audio/aac;")).replace(/^no$/, "")
				}
			} catch (R) {}
			return P
		}
		;
		n.localstorage = function() {
			try {
				localStorage.setItem(a, a);
				localStorage.removeItem(a);
				return true
			} catch (P) {
				return false
			}
		}
		;
		n.sessionstorage = function() {
			try {
				sessionStorage.setItem(a, a);
				sessionStorage.removeItem(a);
				return true
			} catch (P) {
				return false
			}
		}
		;
		n.webworkers = function() {
			return !!C.Worker
		}
		;
		n.applicationcache = function() {
			return !!C.applicationCache
		}
		;
		n.svg = function() {
			return !!c.createElementNS && !!c.createElementNS(J.svg, "svg").createSVGRect
		}
		;
		n.inlinesvg = function() {
			var P = c.createElement("div");
			P.innerHTML = "<svg/>";
			return (P.firstChild && P.firstChild.namespaceURI) == J.svg
		}
		;
		n.smil = function() {
			return !!c.createElementNS && /SVGAnimate/.test(b.call(c.createElementNS(J.svg, "animate")))
		}
		;
		n.svgclippaths = function() {
			return !!c.createElementNS && /SVGClipPath/.test(b.call(c.createElementNS(J.svg, "clipPath")))
		}
		;
		function D() {
			y.input = (function(R) {
				for (var Q = 0, P = R.length; Q < P; Q++) {
					f[R[Q]] = !!(R[Q]in N)
				}
				if (f.list) {
					f.list = !!(c.createElement("datalist") && C.HTMLDataListElement)
				}
				return f
			}
			)("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
			y.inputtypes = (function(S) {
				for (var R = 0, Q, U, T, P = S.length; R < P; R++) {
					N.setAttribute("type", U = S[R]);
					Q = N.type !== "text";
					if (Q) {
						N.value = E;
						N.style.cssText = "position:absolute;visibility:hidden;";
						if (/^range$/.test(U) && N.style.WebkitAppearance !== g) {
							O.appendChild(N);
							T = c.defaultView;
							Q = T.getComputedStyle && T.getComputedStyle(N, null).WebkitAppearance !== "textfield" && (N.offsetHeight !== 0);
							O.removeChild(N)
						} else {
							if (/^(search|tel)$/.test(U)) {} else {
								if (/^(url|email)$/.test(U)) {
									Q = N.checkValidity && N.checkValidity() === false
								} else {
									Q = N.value != E
								}
							}
						}
					}
					r[S[R]] = !!Q
				}
				return r
			}
			)("search tel url email datetime date month week time datetime-local number range color".split(" "))
		}
		for (var x in n) {
			if (z(n, x)) {
				u = x.toLowerCase();
				y[u] = n[x]();
				e.push((y[u] ? "" : "no-") + u)
			}
		}
		y.input || D();
		y.addTest = function(Q, R) {
			if (typeof Q == "object") {
				for (var P in Q) {
					if (z(Q, P)) {
						y.addTest(P, Q[P])
					}
				}
			} else {
				Q = Q.toLowerCase();
				if (y[Q] !== g) {
					return y
				}
				R = typeof R == "function" ? R() : R;
				if (typeof A !== "undefined" && A) {
					O.className += " " + (R ? "" : "no-") + Q
				}
				y[Q] = R
			}
			return y
		}
		;
		F("");
		K = N = null;
		(function(Z, ab) {
			var V = "3.7.0";
			var S = Z.html5 || {};
			var W = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
			var R = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
			var af;
			var X = "_html5shiv";
			var P = 0;
			var ad = {};
			var T;
			(function() {
				try {
					var ai = ab.createElement("a");
					ai.innerHTML = "<xyz></xyz>";
					af = ("hidden"in ai);
					T = ai.childNodes.length == 1 || (function() {
						(ab.createElement)("a");
						var ak = ab.createDocumentFragment();
						return (typeof ak.cloneNode == "undefined" || typeof ak.createDocumentFragment == "undefined" || typeof ak.createElement == "undefined")
					}())
				} catch (aj) {
					af = true;
					T = true
				}
			}());
			function U(ai, ak) {
				var al = ai.createElement("p")
				  , aj = ai.getElementsByTagName("head")[0] || ai.documentElement;
				al.innerHTML = "x<style>" + ak + "</style>";
				return aj.insertBefore(al.lastChild, aj.firstChild)
			}
			function aa() {
				var ai = Y.elements;
				return typeof ai == "string" ? ai.split(" ") : ai
			}
			function ae(ai) {
				var aj = ad[ai[X]];
				if (!aj) {
					aj = {};
					P++;
					ai[X] = P;
					ad[P] = aj
				}
				return aj
			}
			function ac(al, ai, ak) {
				if (!ai) {
					ai = ab
				}
				if (T) {
					return ai.createElement(al)
				}
				if (!ak) {
					ak = ae(ai)
				}
				var aj;
				if (ak.cache[al]) {
					aj = ak.cache[al].cloneNode()
				} else {
					if (R.test(al)) {
						aj = (ak.cache[al] = ak.createElem(al)).cloneNode()
					} else {
						aj = ak.createElem(al)
					}
				}
				return aj.canHaveChildren && !W.test(al) && !aj.tagUrn ? ak.frag.appendChild(aj) : aj
			}
			function ag(ak, am) {
				if (!ak) {
					ak = ab
				}
				if (T) {
					return ak.createDocumentFragment()
				}
				am = am || ae(ak);
				var an = am.frag.cloneNode()
				  , al = 0
				  , aj = aa()
				  , ai = aj.length;
				for (; al < ai; al++) {
					an.createElement(aj[al])
				}
				return an
			}
			function ah(ai, aj) {
				if (!aj.cache) {
					aj.cache = {};
					aj.createElem = ai.createElement;
					aj.createFrag = ai.createDocumentFragment;
					aj.frag = aj.createFrag()
				}
				ai.createElement = function(ak) {
					if (!Y.shivMethods) {
						return aj.createElem(ak)
					}
					return ac(ak, ai, aj)
				}
				;
				ai.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + aa().join().replace(/[\w\-]+/g, function(ak) {
					aj.createElem(ak);
					aj.frag.createElement(ak);
					return 'c("' + ak + '")'
				}) + ");return n}")(Y, aj.frag)
			}
			function Q(ai) {
				if (!ai) {
					ai = ab
				}
				var aj = ae(ai);
				if (Y.shivCSS && !af && !aj.hasCSS) {
					aj.hasCSS = !!U(ai, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")
				}
				if (!T) {
					ah(ai, aj)
				}
				return ai
			}
			var Y = {
				elements: S.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
				version: V,
				shivCSS: (S.shivCSS !== false),
				supportsUnknownElements: T,
				shivMethods: (S.shivMethods !== false),
				type: "default",
				shivDocument: Q,
				createElement: ac,
				createDocumentFragment: ag
			};
			Z.html5 = Y;
			Q(ab)
		}(this, c));
		y._version = L;
		y._prefixes = l;
		y._domPrefixes = M;
		y._cssomPrefixes = H;
		y.mq = I;
		y.hasEvent = q;
		y.testProp = function(P) {
			return B([P])
		}
		;
		y.testAllProps = o;
		y.testStyles = p;
		y.prefixed = function(R, Q, P) {
			if (!Q) {
				return o(R, "pfx")
			} else {
				return o(R, Q, P)
			}
		}
		;
		O.className = O.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (A ? " js " + e.join(" ") : "");
		return y
	}
	)(this, this.document);
	/*! jQuery UI - v1.10.3 - 2013-05-03* http://jqueryui.com* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
	(function(b, f) {
		var a = 0
		  , e = /^ui-id-\d+$/;
		b.ui = b.ui || {};
		b.extend(b.ui, {
			version: "1.10.3",
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
			focus: (function(g) {
				return function(h, k) {
					return typeof h === "number" ? this.each(function() {
						var l = this;
						setTimeout(function() {
							b(l).focus();
							if (k) {
								k.call(l)
							}
						}, h)
					}) : g.apply(this, arguments)
				}
			}
			)(b.fn.focus),
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
			zIndex: function(l) {
				if (l !== f) {
					return this.css("zIndex", l)
				}
				if (this.length) {
					var h = b(this[0]), g, k;
					while (h.length && h[0] !== document) {
						g = h.css("position");
						if (g === "absolute" || g === "relative" || g === "fixed") {
							k = parseInt(h.css("zIndex"), 10);
							if (!isNaN(k) && k !== 0) {
								return k
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
		function d(k, g) {
			var m, l, h, n = k.nodeName.toLowerCase();
			if ("area" === n) {
				m = k.parentNode;
				l = m.name;
				if (!k.href || !l || m.nodeName.toLowerCase() !== "map") {
					return false
				}
				h = b("img[usemap=#" + l + "]")[0];
				return !!h && c(h)
			}
			return (/input|select|textarea|button|object/.test(n) ? !k.disabled : "a" === n ? k.href || g : g) && c(k)
		}
		function c(g) {
			return b.expr.filters.visible(g) && !b(g).parents().addBack().filter(function() {
				return b.css(this, "visibility") === "hidden"
			}).length
		}
		b.extend(b.expr[":"], {
			data: b.expr.createPseudo ? b.expr.createPseudo(function(g) {
				return function(h) {
					return !!b.data(h, g)
				}
			}) : function(k, h, g) {
				return !!b.data(k, g[3])
			}
			,
			focusable: function(g) {
				return d(g, !isNaN(b.attr(g, "tabindex")))
			},
			tabbable: function(k) {
				var g = b.attr(k, "tabindex")
				  , h = isNaN(g);
				return (h || g >= 0) && d(k, !h)
			}
		});
		if (!b("<a>").outerWidth(1).jquery) {
			b.each(["Width", "Height"], function(k, g) {
				var h = g === "Width" ? ["Left", "Right"] : ["Top", "Bottom"]
				  , l = g.toLowerCase()
				  , n = {
					innerWidth: b.fn.innerWidth,
					innerHeight: b.fn.innerHeight,
					outerWidth: b.fn.outerWidth,
					outerHeight: b.fn.outerHeight
				};
				function m(q, p, o, r) {
					b.each(h, function() {
						p -= parseFloat(b.css(q, "padding" + this)) || 0;
						if (o) {
							p -= parseFloat(b.css(q, "border" + this + "Width")) || 0
						}
						if (r) {
							p -= parseFloat(b.css(q, "margin" + this)) || 0
						}
					});
					return p
				}
				b.fn["inner" + g] = function(o) {
					if (o === f) {
						return n["inner" + g].call(this)
					}
					return this.each(function() {
						b(this).css(l, m(this, o) + "px")
					})
				}
				;
				b.fn["outer" + g] = function(o, p) {
					if (typeof o !== "number") {
						return n["outer" + g].call(this, o)
					}
					return this.each(function() {
						b(this).css(l, m(this, o, true, p) + "px")
					})
				}
			})
		}
		if (!b.fn.addBack) {
			b.fn.addBack = function(g) {
				return this.add(g == null ? this.prevObject : this.prevObject.filter(g))
			}
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
		b.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
		b.support.selectstart = "onselectstart"in document.createElement("div");
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
				add: function(h, k, m) {
					var g, l = b.ui[h].prototype;
					for (g in m) {
						l.plugins[g] = l.plugins[g] || [];
						l.plugins[g].push([k, m[g]])
					}
				},
				call: function(g, k, h) {
					var l, m = g.plugins[k];
					if (!m || !g.element[0].parentNode || g.element[0].parentNode.nodeType === 11) {
						return
					}
					for (l = 0; l < m.length; l++) {
						if (g.options[m[l][0]]) {
							m[l][1].apply(g.element, h)
						}
					}
				}
			},
			hasScroll: function(l, h) {
				if (b(l).css("overflow") === "hidden") {
					return false
				}
				var g = (h && h === "left") ? "scrollLeft" : "scrollTop"
				  , k = false;
				if (l[g] > 0) {
					return true
				}
				l[g] = 1;
				k = (l[g] > 0);
				l[g] = 0;
				return k
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
				} catch (k) {}
			}
			c(f)
		}
		;
		b.widget = function(f, g, p) {
			var m, n, k, o, h = {}, l = f.split(".")[0];
			f = f.split(".")[1];
			m = l + "-" + f;
			if (!p) {
				p = g;
				g = b.Widget
			}
			b.expr[":"][m.toLowerCase()] = function(q) {
				return !!b.data(q, m)
			}
			;
			b[l] = b[l] || {};
			n = b[l][f];
			k = b[l][f] = function(q, r) {
				if (!this._createWidget) {
					return new k(q,r)
				}
				if (arguments.length) {
					this._createWidget(q, r)
				}
			}
			;
			b.extend(k, n, {
				version: p.version,
				_proto: b.extend({}, p),
				_childConstructors: []
			});
			o = new g();
			o.options = b.widget.extend({}, o.options);
			b.each(p, function(r, q) {
				if (!b.isFunction(q)) {
					h[r] = q;
					return
				}
				h[r] = (function() {
					var s = function() {
						return g.prototype[r].apply(this, arguments)
					}
					  , t = function(u) {
						return g.prototype[r].apply(this, u)
					};
					return function() {
						var w = this._super, u = this._superApply, v;
						this._super = s;
						this._superApply = t;
						v = q.apply(this, arguments);
						this._super = w;
						this._superApply = u;
						return v
					}
				}
				)()
			});
			k.prototype = b.widget.extend(o, {
				widgetEventPrefix: n ? o.widgetEventPrefix : f
			}, h, {
				constructor: k,
				namespace: l,
				widgetName: f,
				widgetFullName: m
			});
			if (n) {
				b.each(n._childConstructors, function(r, s) {
					var q = s.prototype;
					b.widget(q.namespace + "." + q.widgetName, k, s._proto)
				});
				delete n._childConstructors
			} else {
				g._childConstructors.push(k)
			}
			b.widget.bridge(f, k)
		}
		;
		b.widget.extend = function(m) {
			var g = d.call(arguments, 1), l = 0, f = g.length, h, k;
			for (; l < f; l++) {
				for (h in g[l]) {
					k = g[l][h];
					if (g[l].hasOwnProperty(h) && k !== e) {
						if (b.isPlainObject(k)) {
							m[h] = b.isPlainObject(m[h]) ? b.widget.extend({}, m[h], k) : b.widget.extend({}, k)
						} else {
							m[h] = k
						}
					}
				}
			}
			return m
		}
		;
		b.widget.bridge = function(g, f) {
			var h = f.prototype.widgetFullName || g;
			b.fn[g] = function(m) {
				var k = typeof m === "string"
				  , l = d.call(arguments, 1)
				  , n = this;
				m = !k && l.length ? b.widget.extend.apply(null, [m].concat(l)) : m;
				if (k) {
					this.each(function() {
						var p, o = b.data(this, h);
						if (!o) {
							return b.error("cannot call methods on " + g + " prior to initialization; attempted to call method '" + m + "'")
						}
						if (!b.isFunction(o[m]) || m.charAt(0) === "_") {
							return b.error("no such method '" + m + "' for " + g + " widget instance")
						}
						p = o[m].apply(o, l);
						if (p !== o && p !== e) {
							n = p && p.jquery ? n.pushStack(p.get()) : p;
							return false
						}
					})
				} else {
					this.each(function() {
						var o = b.data(this, h);
						if (o) {
							o.option(m || {})._init()
						} else {
							b.data(this, h, new f(m,this))
						}
					})
				}
				return n
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
			option: function(k, l) {
				var f = k, m, h, g;
				if (arguments.length === 0) {
					return b.widget.extend({}, this.options)
				}
				if (typeof k === "string") {
					f = {};
					m = k.split(".");
					k = m.shift();
					if (m.length) {
						h = f[k] = b.widget.extend({}, this.options[k]);
						for (g = 0; g < m.length - 1; g++) {
							h[m[g]] = h[m[g]] || {};
							h = h[m[g]]
						}
						k = m.pop();
						if (l === e) {
							return h[k] === e ? null : h[k]
						}
						h[k] = l
					} else {
						if (l === e) {
							return this.options[k] === e ? null : this.options[k]
						}
						f[k] = l
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
			_on: function(k, h, g) {
				var l, f = this;
				if (typeof k !== "boolean") {
					g = h;
					h = k;
					k = false
				}
				if (!g) {
					g = h;
					h = this.element;
					l = this.widget()
				} else {
					h = l = b(h);
					this.bindings = this.bindings.add(h)
				}
				b.each(g, function(r, q) {
					function o() {
						if (!k && (f.options.disabled === true || b(this).hasClass("ui-state-disabled"))) {
							return
						}
						return (typeof q === "string" ? f[q] : q).apply(f, arguments)
					}
					if (typeof q !== "string") {
						o.guid = q.guid = q.guid || o.guid || b.guid++
					}
					var p = r.match(/^(\w+)\s*(.*)$/)
					  , n = p[1] + f.eventNamespace
					  , m = p[2];
					if (m) {
						l.delegate(m, n, o)
					} else {
						h.bind(n, o)
					}
				})
			},
			_off: function(g, f) {
				f = (f || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
				g.unbind(f).undelegate(f)
			},
			_delay: function(k, h) {
				function g() {
					return (typeof k === "string" ? f[k] : k).apply(f, arguments)
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
				var m, l, k = this.options[f];
				h = h || {};
				g = b.Event(g);
				g.type = (f === this.widgetEventPrefix ? f : this.widgetEventPrefix + f).toLowerCase();
				g.target = this.element[0];
				l = g.originalEvent;
				if (l) {
					for (m in l) {
						if (!(m in g)) {
							g[m] = l[m]
						}
					}
				}
				this.element.trigger(g, h);
				return !(b.isFunction(k) && k.apply(this.element[0], [g].concat(h)) === false || g.isDefaultPrevented())
			}
		};
		b.each({
			show: "fadeIn",
			hide: "fadeOut"
		}, function(g, f) {
			b.Widget.prototype["_" + g] = function(l, k, n) {
				if (typeof k === "string") {
					k = {
						effect: k
					}
				}
				var m, h = !k ? g : k === true || typeof k === "number" ? f : k.effect || f;
				k = k || {};
				if (typeof k === "number") {
					k = {
						duration: k
					}
				}
				m = !b.isEmptyObject(k);
				k.complete = n;
				if (k.delay) {
					l.delay(k.delay)
				}
				if (m && b.effects && b.effects.effect[h]) {
					l[g](k)
				} else {
					if (h !== g && l[h]) {
						l[h](k.duration, k.easing, n)
					} else {
						l.queue(function(o) {
							b(this)[g]();
							if (n) {
								n.call(l[0])
							}
							o()
						})
					}
				}
			}
		})
	}
	)(jQuery);
	(function(b, c) {
		var a = false;
		b(document).mouseup(function() {
			a = false
		});
		b.widget("ui.mouse", {
			version: "1.10.3",
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
				if (b.ui.ie && (!document.documentMode || document.documentMode < 9) && !d.button) {
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
			_mouseDelayMet: function() {
				return this.mouseDelayMet
			},
			_mouseStart: function() {},
			_mouseDrag: function() {},
			_mouseStop: function() {},
			_mouseCapture: function() {
				return true
			}
		})
	}
	)(jQuery);
	(function(a, b) {
		a.widget("ui.draggable", a.ui.mouse, {
			version: "1.10.3",
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
				zIndex: false,
				drag: null,
				start: null,
				stop: null
			},
			_create: function() {
				if (this.options.helper === "original" && !(/^(?:r|a|f)/).test(this.element.css("position"))) {
					this.element[0].style.position = "relative"
				}
				if (this.options.addClasses) {
					this.element.addClass("ui-draggable")
				}
				if (this.options.disabled) {
					this.element.addClass("ui-draggable-disabled")
				}
				this._mouseInit()
			},
			_destroy: function() {
				this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
				this._mouseDestroy()
			},
			_mouseCapture: function(c) {
				var d = this.options;
				if (this.helper || d.disabled || a(c.target).closest(".ui-resizable-handle").length > 0) {
					return false
				}
				this.handle = this._getHandle(c);
				if (!this.handle) {
					return false
				}
				a(d.iframeFix === true ? "iframe" : d.iframeFix).each(function() {
					a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
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
				this.offsetParent = this.helper.offsetParent();
				this.offsetParentCssPosition = this.offsetParent.css("position");
				this.offset = this.positionAbs = this.element.offset();
				this.offset = {
					top: this.offset.top - this.margins.top,
					left: this.offset.left - this.margins.left
				};
				this.offset.scroll = false;
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
				this._setContainment();
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
				if (this.offsetParentCssPosition === "fixed") {
					this.offset.parent = this._getParentOffset()
				}
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
				if (!this.options.axis || this.options.axis !== "y") {
					this.helper[0].style.left = this.position.left + "px"
				}
				if (!this.options.axis || this.options.axis !== "x") {
					this.helper[0].style.top = this.position.top + "px"
				}
				if (a.ui.ddmanager) {
					a.ui.ddmanager.drag(this, c)
				}
				return false
			},
			_mouseStop: function(d) {
				var c = this
				  , e = false;
				if (a.ui.ddmanager && !this.options.dropBehaviour) {
					e = a.ui.ddmanager.drop(this, d)
				}
				if (this.dropped) {
					e = this.dropped;
					this.dropped = false
				}
				if (this.options.helper === "original" && !a.contains(this.element[0].ownerDocument, this.element[0])) {
					return false
				}
				if ((this.options.revert === "invalid" && !e) || (this.options.revert === "valid" && e) || this.options.revert === true || (a.isFunction(this.options.revert) && this.options.revert.call(this.element, e))) {
					a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
						if (c._trigger("stop", d) !== false) {
							c._clear()
						}
					})
				} else {
					if (this._trigger("stop", d) !== false) {
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
				return this.options.handle ? !!a(c.target).closest(this.element.find(this.options.handle)).length : true
			},
			_createHelper: function(d) {
				var e = this.options
				  , c = a.isFunction(e.helper) ? a(e.helper.apply(this.element[0], [d])) : (e.helper === "clone" ? this.element.clone().removeAttr("id") : this.element);
				if (!c.parents("body").length) {
					c.appendTo((e.appendTo === "parent" ? this.element[0].parentNode : e.appendTo))
				}
				if (c[0] !== this.element[0] && !(/(fixed|absolute)/).test(c.css("position"))) {
					c.css("position", "absolute")
				}
				return c
			},
			_adjustOffsetFromHelper: function(c) {
				if (typeof c === "string") {
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
				var c = this.offsetParent.offset();
				if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) {
					c.left += this.scrollParent.scrollLeft();
					c.top += this.scrollParent.scrollTop()
				}
				if ((this.offsetParent[0] === document.body) || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && a.ui.ie)) {
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
				if (this.cssPosition === "relative") {
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
				var e, g, d, f = this.options;
				if (!f.containment) {
					this.containment = null;
					return
				}
				if (f.containment === "window") {
					this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
					return
				}
				if (f.containment === "document") {
					this.containment = [0, 0, a(document).width() - this.helperProportions.width - this.margins.left, (a(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
					return
				}
				if (f.containment.constructor === Array) {
					this.containment = f.containment;
					return
				}
				if (f.containment === "parent") {
					f.containment = this.helper[0].parentNode
				}
				g = a(f.containment);
				d = g[0];
				if (!d) {
					return
				}
				e = g.css("overflow") !== "hidden";
				this.containment = [(parseInt(g.css("borderLeftWidth"), 10) || 0) + (parseInt(g.css("paddingLeft"), 10) || 0), (parseInt(g.css("borderTopWidth"), 10) || 0) + (parseInt(g.css("paddingTop"), 10) || 0), (e ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(g.css("borderRightWidth"), 10) || 0) - (parseInt(g.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(g.css("borderBottomWidth"), 10) || 0) - (parseInt(g.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
				this.relative_container = g
			},
			_convertPositionTo: function(f, g) {
				if (!g) {
					g = this.position
				}
				var e = f === "absolute" ? 1 : -1
				  , c = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent;
				if (!this.offset.scroll) {
					this.offset.scroll = {
						top: c.scrollTop(),
						left: c.scrollLeft()
					}
				}
				return {
					top: (g.top + this.offset.relative.top * e + this.offset.parent.top * e - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * e)),
					left: (g.left + this.offset.relative.left * e + this.offset.parent.left * e - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * e))
				}
			},
			_generatePosition: function(d) {
				var c, k, l, f, e = this.options, m = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, h = d.pageX, g = d.pageY;
				if (!this.offset.scroll) {
					this.offset.scroll = {
						top: m.scrollTop(),
						left: m.scrollLeft()
					}
				}
				if (this.originalPosition) {
					if (this.containment) {
						if (this.relative_container) {
							k = this.relative_container.offset();
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
						l = e.grid[1] ? this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1] : this.originalPageY;
						g = c ? ((l - this.offset.click.top >= c[1] || l - this.offset.click.top > c[3]) ? l : ((l - this.offset.click.top >= c[1]) ? l - e.grid[1] : l + e.grid[1])) : l;
						f = e.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / e.grid[0]) * e.grid[0] : this.originalPageX;
						h = c ? ((f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2]) ? f : ((f - this.offset.click.left >= c[0]) ? f - e.grid[0] : f + e.grid[0])) : f
					}
				}
				return {
					top: (g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top)),
					left: (h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left))
				}
			},
			_clear: function() {
				this.helper.removeClass("ui-draggable-dragging");
				if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
					this.helper.remove()
				}
				this.helper = null;
				this.cancelHelperRemoval = false
			},
			_trigger: function(c, d, e) {
				e = e || this._uiHash();
				a.ui.plugin.call(this, c, [d, e]);
				if (c === "drag") {
					this.positionAbs = this._convertPositionTo("absolute")
				}
				return a.Widget.prototype._trigger.call(this, c, d, e)
			},
			plugins: {},
			_uiHash: function() {
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
				var e = a(this).data("ui-draggable")
				  , g = e.options
				  , c = a.extend({}, f, {
					item: e.element
				});
				e.sortables = [];
				a(g.connectToSortable).each(function() {
					var h = a.data(this, "ui-sortable");
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
				var e = a(this).data("ui-draggable")
				  , c = a.extend({}, f, {
					item: e.element
				});
				a.each(e.sortables, function() {
					if (this.instance.isOver) {
						this.instance.isOver = 0;
						e.cancelHelperRemoval = true;
						this.instance.cancelHelperRemoval = false;
						if (this.shouldRevert) {
							this.instance.options.revert = this.shouldRevert
						}
						this.instance._mouseStop(d);
						this.instance.options.helper = this.instance.options._helper;
						if (e.options.helper === "original") {
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
			drag: function(d, f) {
				var e = a(this).data("ui-draggable")
				  , c = this;
				a.each(e.sortables, function() {
					var g = false
					  , h = this;
					this.instance.positionAbs = e.positionAbs;
					this.instance.helperProportions = e.helperProportions;
					this.instance.offset.click = e.offset.click;
					if (this.instance._intersectsWith(this.instance.containerCache)) {
						g = true;
						a.each(e.sortables, function() {
							this.instance.positionAbs = e.positionAbs;
							this.instance.helperProportions = e.helperProportions;
							this.instance.offset.click = e.offset.click;
							if (this !== h && this.instance._intersectsWith(this.instance.containerCache) && a.contains(h.instance.element[0], this.instance.element[0])) {
								g = false
							}
							return g
						})
					}
					if (g) {
						if (!this.instance.isOver) {
							this.instance.isOver = 1;
							this.instance.currentItem = a(c).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", true);
							this.instance.options._helper = this.instance.options.helper;
							this.instance.options.helper = function() {
								return f.helper[0]
							}
							;
							d.target = this.instance.currentItem[0];
							this.instance._mouseCapture(d, true);
							this.instance._mouseStart(d, true, true);
							this.instance.offset.click.top = e.offset.click.top;
							this.instance.offset.click.left = e.offset.click.left;
							this.instance.offset.parent.left -= e.offset.parent.left - this.instance.offset.parent.left;
							this.instance.offset.parent.top -= e.offset.parent.top - this.instance.offset.parent.top;
							e._trigger("toSortable", d);
							e.dropped = this.instance.element;
							e.currentItem = e.element;
							this.instance.fromOutside = e
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
							e._trigger("fromSortable", d);
							e.dropped = false
						}
					}
				})
			}
		});
		a.ui.plugin.add("draggable", "cursor", {
			start: function() {
				var c = a("body")
				  , d = a(this).data("ui-draggable").options;
				if (c.css("cursor")) {
					d._cursor = c.css("cursor")
				}
				c.css("cursor", d.cursor)
			},
			stop: function() {
				var c = a(this).data("ui-draggable").options;
				if (c._cursor) {
					a("body").css("cursor", c._cursor)
				}
			}
		});
		a.ui.plugin.add("draggable", "opacity", {
			start: function(d, e) {
				var c = a(e.helper)
				  , f = a(this).data("ui-draggable").options;
				if (c.css("opacity")) {
					f._opacity = c.css("opacity")
				}
				c.css("opacity", f.opacity)
			},
			stop: function(c, d) {
				var e = a(this).data("ui-draggable").options;
				if (e._opacity) {
					a(d.helper).css("opacity", e._opacity)
				}
			}
		});
		a.ui.plugin.add("draggable", "scroll", {
			start: function() {
				var c = a(this).data("ui-draggable");
				if (c.scrollParent[0] !== document && c.scrollParent[0].tagName !== "HTML") {
					c.overflowOffset = c.scrollParent.offset()
				}
			},
			drag: function(e) {
				var d = a(this).data("ui-draggable")
				  , f = d.options
				  , c = false;
				if (d.scrollParent[0] !== document && d.scrollParent[0].tagName !== "HTML") {
					if (!f.axis || f.axis !== "x") {
						if ((d.overflowOffset.top + d.scrollParent[0].offsetHeight) - e.pageY < f.scrollSensitivity) {
							d.scrollParent[0].scrollTop = c = d.scrollParent[0].scrollTop + f.scrollSpeed
						} else {
							if (e.pageY - d.overflowOffset.top < f.scrollSensitivity) {
								d.scrollParent[0].scrollTop = c = d.scrollParent[0].scrollTop - f.scrollSpeed
							}
						}
					}
					if (!f.axis || f.axis !== "y") {
						if ((d.overflowOffset.left + d.scrollParent[0].offsetWidth) - e.pageX < f.scrollSensitivity) {
							d.scrollParent[0].scrollLeft = c = d.scrollParent[0].scrollLeft + f.scrollSpeed
						} else {
							if (e.pageX - d.overflowOffset.left < f.scrollSensitivity) {
								d.scrollParent[0].scrollLeft = c = d.scrollParent[0].scrollLeft - f.scrollSpeed
							}
						}
					}
				} else {
					if (!f.axis || f.axis !== "x") {
						if (e.pageY - a(document).scrollTop() < f.scrollSensitivity) {
							c = a(document).scrollTop(a(document).scrollTop() - f.scrollSpeed)
						} else {
							if (a(window).height() - (e.pageY - a(document).scrollTop()) < f.scrollSensitivity) {
								c = a(document).scrollTop(a(document).scrollTop() + f.scrollSpeed)
							}
						}
					}
					if (!f.axis || f.axis !== "y") {
						if (e.pageX - a(document).scrollLeft() < f.scrollSensitivity) {
							c = a(document).scrollLeft(a(document).scrollLeft() - f.scrollSpeed)
						} else {
							if (a(window).width() - (e.pageX - a(document).scrollLeft()) < f.scrollSensitivity) {
								c = a(document).scrollLeft(a(document).scrollLeft() + f.scrollSpeed)
							}
						}
					}
				}
				if (c !== false && a.ui.ddmanager && !f.dropBehaviour) {
					a.ui.ddmanager.prepareOffsets(d, e)
				}
			}
		});
		a.ui.plugin.add("draggable", "snap", {
			start: function() {
				var c = a(this).data("ui-draggable")
				  , d = c.options;
				c.snapElements = [];
				a(d.snap.constructor !== String ? (d.snap.items || ":data(ui-draggable)") : d.snap).each(function() {
					var f = a(this)
					  , e = f.offset();
					if (this !== c.element[0]) {
						c.snapElements.push({
							item: this,
							width: f.outerWidth(),
							height: f.outerHeight(),
							top: e.top,
							left: e.left
						})
					}
				})
			},
			drag: function(v, q) {
				var c, A, k, m, u, p, n, B, w, h, g = a(this).data("ui-draggable"), s = g.options, z = s.snapTolerance, y = q.offset.left, x = y + g.helperProportions.width, f = q.offset.top, e = f + g.helperProportions.height;
				for (w = g.snapElements.length - 1; w >= 0; w--) {
					u = g.snapElements[w].left;
					p = u + g.snapElements[w].width;
					n = g.snapElements[w].top;
					B = n + g.snapElements[w].height;
					if (x < u - z || y > p + z || e < n - z || f > B + z || !a.contains(g.snapElements[w].item.ownerDocument, g.snapElements[w].item)) {
						if (g.snapElements[w].snapping) {
							(g.options.snap.release && g.options.snap.release.call(g.element, v, a.extend(g._uiHash(), {
								snapItem: g.snapElements[w].item
							})))
						}
						g.snapElements[w].snapping = false;
						continue
					}
					if (s.snapMode !== "inner") {
						c = Math.abs(n - e) <= z;
						A = Math.abs(B - f) <= z;
						k = Math.abs(u - x) <= z;
						m = Math.abs(p - y) <= z;
						if (c) {
							q.position.top = g._convertPositionTo("relative", {
								top: n - g.helperProportions.height,
								left: 0
							}).top - g.margins.top
						}
						if (A) {
							q.position.top = g._convertPositionTo("relative", {
								top: B,
								left: 0
							}).top - g.margins.top
						}
						if (k) {
							q.position.left = g._convertPositionTo("relative", {
								top: 0,
								left: u - g.helperProportions.width
							}).left - g.margins.left
						}
						if (m) {
							q.position.left = g._convertPositionTo("relative", {
								top: 0,
								left: p
							}).left - g.margins.left
						}
					}
					h = (c || A || k || m);
					if (s.snapMode !== "outer") {
						c = Math.abs(n - f) <= z;
						A = Math.abs(B - e) <= z;
						k = Math.abs(u - y) <= z;
						m = Math.abs(p - x) <= z;
						if (c) {
							q.position.top = g._convertPositionTo("relative", {
								top: n,
								left: 0
							}).top - g.margins.top
						}
						if (A) {
							q.position.top = g._convertPositionTo("relative", {
								top: B - g.helperProportions.height,
								left: 0
							}).top - g.margins.top
						}
						if (k) {
							q.position.left = g._convertPositionTo("relative", {
								top: 0,
								left: u
							}).left - g.margins.left
						}
						if (m) {
							q.position.left = g._convertPositionTo("relative", {
								top: 0,
								left: p - g.helperProportions.width
							}).left - g.margins.left
						}
					}
					if (!g.snapElements[w].snapping && (c || A || k || m || h)) {
						(g.options.snap.snap && g.options.snap.snap.call(g.element, v, a.extend(g._uiHash(), {
							snapItem: g.snapElements[w].item
						})))
					}
					g.snapElements[w].snapping = (c || A || k || m || h)
				}
			}
		});
		a.ui.plugin.add("draggable", "stack", {
			start: function() {
				var c, e = this.data("ui-draggable").options, d = a.makeArray(a(e.stack)).sort(function(g, f) {
					return (parseInt(a(g).css("zIndex"), 10) || 0) - (parseInt(a(f).css("zIndex"), 10) || 0)
				});
				if (!d.length) {
					return
				}
				c = parseInt(a(d[0]).css("zIndex"), 10) || 0;
				a(d).each(function(f) {
					a(this).css("zIndex", c + f)
				});
				this.css("zIndex", (c + d.length))
			}
		});
		a.ui.plugin.add("draggable", "zIndex", {
			start: function(d, e) {
				var c = a(e.helper)
				  , f = a(this).data("ui-draggable").options;
				if (c.css("zIndex")) {
					f._zIndex = c.css("zIndex")
				}
				c.css("zIndex", f.zIndex)
			},
			stop: function(c, d) {
				var e = a(this).data("ui-draggable").options;
				if (e._zIndex) {
					a(d.helper).css("zIndex", e._zIndex)
				}
			}
		})
	}
	)(jQuery);
	(function(b, c) {
		function a(e, d, f) {
			return (e > d) && (e < (d + f))
		}
		b.widget("ui.droppable", {
			version: "1.10.3",
			widgetEventPrefix: "drop",
			options: {
				accept: "*",
				activeClass: false,
				addClasses: true,
				greedy: false,
				hoverClass: false,
				scope: "default",
				tolerance: "intersect",
				activate: null,
				deactivate: null,
				drop: null,
				out: null,
				over: null
			},
			_create: function() {
				var e = this.options
				  , d = e.accept;
				this.isover = false;
				this.isout = true;
				this.accept = b.isFunction(d) ? d : function(f) {
					return f.is(d)
				}
				;
				this.proportions = {
					width: this.element[0].offsetWidth,
					height: this.element[0].offsetHeight
				};
				b.ui.ddmanager.droppables[e.scope] = b.ui.ddmanager.droppables[e.scope] || [];
				b.ui.ddmanager.droppables[e.scope].push(this);
				(e.addClasses && this.element.addClass("ui-droppable"))
			},
			_destroy: function() {
				var e = 0
				  , d = b.ui.ddmanager.droppables[this.options.scope];
				for (; e < d.length; e++) {
					if (d[e] === this) {
						d.splice(e, 1)
					}
				}
				this.element.removeClass("ui-droppable ui-droppable-disabled")
			},
			_setOption: function(d, e) {
				if (d === "accept") {
					this.accept = b.isFunction(e) ? e : function(f) {
						return f.is(e)
					}
				}
				b.Widget.prototype._setOption.apply(this, arguments)
			},
			_activate: function(e) {
				var d = b.ui.ddmanager.current;
				if (this.options.activeClass) {
					this.element.addClass(this.options.activeClass)
				}
				if (d) {
					this._trigger("activate", e, this.ui(d))
				}
			},
			_deactivate: function(e) {
				var d = b.ui.ddmanager.current;
				if (this.options.activeClass) {
					this.element.removeClass(this.options.activeClass)
				}
				if (d) {
					this._trigger("deactivate", e, this.ui(d))
				}
			},
			_over: function(e) {
				var d = b.ui.ddmanager.current;
				if (!d || (d.currentItem || d.element)[0] === this.element[0]) {
					return
				}
				if (this.accept.call(this.element[0], (d.currentItem || d.element))) {
					if (this.options.hoverClass) {
						this.element.addClass(this.options.hoverClass)
					}
					this._trigger("over", e, this.ui(d))
				}
			},
			_out: function(e) {
				var d = b.ui.ddmanager.current;
				if (!d || (d.currentItem || d.element)[0] === this.element[0]) {
					return
				}
				if (this.accept.call(this.element[0], (d.currentItem || d.element))) {
					if (this.options.hoverClass) {
						this.element.removeClass(this.options.hoverClass)
					}
					this._trigger("out", e, this.ui(d))
				}
			},
			_drop: function(e, f) {
				var d = f || b.ui.ddmanager.current
				  , g = false;
				if (!d || (d.currentItem || d.element)[0] === this.element[0]) {
					return false
				}
				this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
					var h = b.data(this, "ui-droppable");
					if (h.options.greedy && !h.options.disabled && h.options.scope === d.options.scope && h.accept.call(h.element[0], (d.currentItem || d.element)) && b.ui.intersect(d, b.extend(h, {
						offset: h.element.offset()
					}), h.options.tolerance)) {
						g = true;
						return false
					}
				});
				if (g) {
					return false
				}
				if (this.accept.call(this.element[0], (d.currentItem || d.element))) {
					if (this.options.activeClass) {
						this.element.removeClass(this.options.activeClass)
					}
					if (this.options.hoverClass) {
						this.element.removeClass(this.options.hoverClass)
					}
					this._trigger("drop", e, this.ui(d));
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
		b.ui.intersect = function(u, m, q) {
			if (!m.offset) {
				return false
			}
			var h, k, f = (u.positionAbs || u.position.absolute).left, e = f + u.helperProportions.width, p = (u.positionAbs || u.position.absolute).top, o = p + u.helperProportions.height, g = m.offset.left, d = g + m.proportions.width, s = m.offset.top, n = s + m.proportions.height;
			switch (q) {
			case "fit":
				return (g <= f && e <= d && s <= p && o <= n);
			case "intersect":
				return (g < f + (u.helperProportions.width / 2) && e - (u.helperProportions.width / 2) < d && s < p + (u.helperProportions.height / 2) && o - (u.helperProportions.height / 2) < n);
			case "pointer":
				h = ((u.positionAbs || u.position.absolute).left + (u.clickOffset || u.offset.click).left);
				k = ((u.positionAbs || u.position.absolute).top + (u.clickOffset || u.offset.click).top);
				return a(k, s, m.proportions.height) && a(h, g, m.proportions.width);
			case "touch":
				return ((p >= s && p <= n) || (o >= s && o <= n) || (p < s && o > n)) && ((f >= g && f <= d) || (e >= g && e <= d) || (f < g && e > d));
			default:
				return false
			}
		}
		;
		b.ui.ddmanager = {
			current: null,
			droppables: {
				"default": []
			},
			prepareOffsets: function(g, k) {
				var f, e, d = b.ui.ddmanager.droppables[g.options.scope] || [], h = k ? k.type : null, l = (g.currentItem || g.element).find(":data(ui-droppable)").addBack();
				droppablesLoop: for (f = 0; f < d.length; f++) {
					if (d[f].options.disabled || (g && !d[f].accept.call(d[f].element[0], (g.currentItem || g.element)))) {
						continue
					}
					for (e = 0; e < l.length; e++) {
						if (l[e] === d[f].element[0]) {
							d[f].proportions.height = 0;
							continue droppablesLoop
						}
					}
					d[f].visible = d[f].element.css("display") !== "none";
					if (!d[f].visible) {
						continue
					}
					if (h === "mousedown") {
						d[f]._activate.call(d[f], k)
					}
					d[f].offset = d[f].element.offset();
					d[f].proportions = {
						width: d[f].element[0].offsetWidth,
						height: d[f].element[0].offsetHeight
					}
				}
			},
			drop: function(d, e) {
				var f = false;
				b.each((b.ui.ddmanager.droppables[d.options.scope] || []).slice(), function() {
					if (!this.options) {
						return
					}
					if (!this.options.disabled && this.visible && b.ui.intersect(d, this, this.options.tolerance)) {
						f = this._drop.call(this, e) || f
					}
					if (!this.options.disabled && this.visible && this.accept.call(this.element[0], (d.currentItem || d.element))) {
						this.isout = true;
						this.isover = false;
						this._deactivate.call(this, e)
					}
				});
				return f
			},
			dragStart: function(d, e) {
				d.element.parentsUntil("body").bind("scroll.droppable", function() {
					if (!d.options.refreshPositions) {
						b.ui.ddmanager.prepareOffsets(d, e)
					}
				})
			},
			drag: function(d, e) {
				if (d.options.refreshPositions) {
					b.ui.ddmanager.prepareOffsets(d, e)
				}
				b.each(b.ui.ddmanager.droppables[d.options.scope] || [], function() {
					if (this.options.disabled || this.greedyChild || !this.visible) {
						return
					}
					var k, g, f, h = b.ui.intersect(d, this, this.options.tolerance), l = !h && this.isover ? "isout" : (h && !this.isover ? "isover" : null);
					if (!l) {
						return
					}
					if (this.options.greedy) {
						g = this.options.scope;
						f = this.element.parents(":data(ui-droppable)").filter(function() {
							return b.data(this, "ui-droppable").options.scope === g
						});
						if (f.length) {
							k = b.data(f[0], "ui-droppable");
							k.greedyChild = (l === "isover")
						}
					}
					if (k && l === "isover") {
						k.isover = false;
						k.isout = true;
						k._out.call(k, e)
					}
					this[l] = true;
					this[l === "isout" ? "isover" : "isout"] = false;
					this[l === "isover" ? "_over" : "_out"].call(this, e);
					if (k && l === "isout") {
						k.isout = false;
						k.isover = true;
						k._over.call(k, e)
					}
				})
			},
			dragStop: function(d, e) {
				d.element.parentsUntil("body").unbind("scroll.droppable");
				if (!d.options.refreshPositions) {
					b.ui.ddmanager.prepareOffsets(d, e)
				}
			}
		}
	}
	)(jQuery);
	(function(c, d) {
		function b(e) {
			return parseInt(e, 10) || 0
		}
		function a(e) {
			return !isNaN(parseInt(e, 10))
		}
		c.widget("ui.resizable", c.ui.mouse, {
			version: "1.10.3",
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
				zIndex: 90,
				resize: null,
				start: null,
				stop: null
			},
			_create: function() {
				var m, f, k, g, e, h = this, l = this.options;
				this.element.addClass("ui-resizable");
				c.extend(this, {
					_aspectRatio: !!(l.aspectRatio),
					aspectRatio: l.aspectRatio,
					originalElement: this.element,
					_proportionallyResizeElements: [],
					_helper: l.helper || l.ghost || l.animate ? l.helper || "ui-resizable-helper" : null
				});
				if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
					this.element.wrap(c("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
						position: this.element.css("position"),
						width: this.element.outerWidth(),
						height: this.element.outerHeight(),
						top: this.element.css("top"),
						left: this.element.css("left")
					}));
					this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable"));
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
				this.handles = l.handles || (!c(".ui-resizable-handle", this.element).length ? "e,s,se" : {
					n: ".ui-resizable-n",
					e: ".ui-resizable-e",
					s: ".ui-resizable-s",
					w: ".ui-resizable-w",
					se: ".ui-resizable-se",
					sw: ".ui-resizable-sw",
					ne: ".ui-resizable-ne",
					nw: ".ui-resizable-nw"
				});
				if (this.handles.constructor === String) {
					if (this.handles === "all") {
						this.handles = "n,e,s,w,se,sw,ne,nw"
					}
					m = this.handles.split(",");
					this.handles = {};
					for (f = 0; f < m.length; f++) {
						k = c.trim(m[f]);
						e = "ui-resizable-" + k;
						g = c("<div class='ui-resizable-handle " + e + "'></div>");
						g.css({
							zIndex: l.zIndex
						});
						if ("se" === k) {
							g.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
						}
						this.handles[k] = ".ui-resizable-" + k;
						this.element.append(g)
					}
				}
				this._renderAxis = function(r) {
					var o, p, n, q;
					r = r || this.element;
					for (o in this.handles) {
						if (this.handles[o].constructor === String) {
							this.handles[o] = c(this.handles[o], this.element).show()
						}
						if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
							p = c(this.handles[o], this.element);
							q = /sw|ne|nw|se|n|s/.test(o) ? p.outerHeight() : p.outerWidth();
							n = ["padding", /ne|nw|n/.test(o) ? "Top" : /se|sw|s/.test(o) ? "Bottom" : /^e$/.test(o) ? "Right" : "Left"].join("");
							r.css(n, q);
							this._proportionallyResize()
						}
						if (!c(this.handles[o]).length) {
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
							g = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
						}
						h.axis = g && g[1] ? g[1] : "se"
					}
				});
				if (l.autoHide) {
					this._handles.hide();
					c(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
						if (l.disabled) {
							return
						}
						c(this).removeClass("ui-resizable-autohide");
						h._handles.show()
					}).mouseleave(function() {
						if (l.disabled) {
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
				var f, e = function(g) {
					c(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
				};
				if (this.elementIsWrapper) {
					e(this.element);
					f = this.element;
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
			_mouseCapture: function(g) {
				var f, h, e = false;
				for (f in this.handles) {
					h = c(this.handles[f])[0];
					if (h === g.target || c.contains(h, g.target)) {
						e = true
					}
				}
				return !this.options.disabled && e
			},
			_mouseStart: function(g) {
				var m, h, l, k = this.options, f = this.element.position(), e = this.element;
				this.resizing = true;
				if ((/absolute/).test(e.css("position"))) {
					e.css({
						position: "absolute",
						top: e.css("top"),
						left: e.css("left")
					})
				} else {
					if (e.is(".ui-draggable")) {
						e.css({
							position: "absolute",
							top: f.top,
							left: f.left
						})
					}
				}
				this._renderProxy();
				m = b(this.helper.css("left"));
				h = b(this.helper.css("top"));
				if (k.containment) {
					m += c(k.containment).scrollLeft() || 0;
					h += c(k.containment).scrollTop() || 0
				}
				this.offset = this.helper.offset();
				this.position = {
					left: m,
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
					left: m,
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
				this.aspectRatio = (typeof k.aspectRatio === "number") ? k.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);
				l = c(".ui-resizable-" + this.axis).css("cursor");
				c("body").css("cursor", l === "auto" ? this.axis + "-resize" : l);
				e.addClass("ui-resizable-resizing");
				this._propagate("start", g);
				return true
			},
			_mouseDrag: function(e) {
				var m, g = this.helper, n = {}, k = this.originalMousePosition, o = this.axis, q = this.position.top, f = this.position.left, p = this.size.width, l = this.size.height, s = (e.pageX - k.left) || 0, r = (e.pageY - k.top) || 0, h = this._change[o];
				if (!h) {
					return false
				}
				m = h.apply(this, [e, s, r]);
				this._updateVirtualBoundaries(e.shiftKey);
				if (this._aspectRatio || e.shiftKey) {
					m = this._updateRatio(m, e)
				}
				m = this._respectSize(m, e);
				this._updateCache(m);
				this._propagate("resize", e);
				if (this.position.top !== q) {
					n.top = this.position.top + "px"
				}
				if (this.position.left !== f) {
					n.left = this.position.left + "px"
				}
				if (this.size.width !== p) {
					n.width = this.size.width + "px"
				}
				if (this.size.height !== l) {
					n.height = this.size.height + "px"
				}
				g.css(n);
				if (!this._helper && this._proportionallyResizeElements.length) {
					this._proportionallyResize()
				}
				if (!c.isEmptyObject(n)) {
					this._trigger("resize", e, this.ui())
				}
				return false
			},
			_mouseStop: function(h) {
				this.resizing = false;
				var g, e, f, m, q, l, p, k = this.options, n = this;
				if (this._helper) {
					g = this._proportionallyResizeElements;
					e = g.length && (/textarea/i).test(g[0].nodeName);
					f = e && c.ui.hasScroll(g[0], "left") ? 0 : n.sizeDiff.height;
					m = e ? 0 : n.sizeDiff.width;
					q = {
						width: (n.helper.width() - m),
						height: (n.helper.height() - f)
					};
					l = (parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left)) || null;
					p = (parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top)) || null;
					if (!k.animate) {
						this.element.css(c.extend(q, {
							top: p,
							left: l
						}))
					}
					n.helper.height(n.size.height);
					n.helper.width(n.size.width);
					if (this._helper && !k.animate) {
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
				var k, h, f, m, e, l = this.options;
				e = {
					minWidth: a(l.minWidth) ? l.minWidth : 0,
					maxWidth: a(l.maxWidth) ? l.maxWidth : Infinity,
					minHeight: a(l.minHeight) ? l.minHeight : 0,
					maxHeight: a(l.maxHeight) ? l.maxHeight : Infinity
				};
				if (this._aspectRatio || g) {
					k = e.minHeight * this.aspectRatio;
					f = e.minWidth / this.aspectRatio;
					h = e.maxHeight * this.aspectRatio;
					m = e.maxWidth / this.aspectRatio;
					if (k > e.minWidth) {
						e.minWidth = k
					}
					if (f > e.minHeight) {
						e.minHeight = f
					}
					if (h < e.maxWidth) {
						e.maxWidth = h
					}
					if (m < e.maxHeight) {
						e.maxHeight = m
					}
				}
				this._vBoundaries = e
			},
			_updateCache: function(e) {
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
			_updateRatio: function(g) {
				var h = this.position
				  , f = this.size
				  , e = this.axis;
				if (a(g.height)) {
					g.width = (g.height * this.aspectRatio)
				} else {
					if (a(g.width)) {
						g.height = (g.width / this.aspectRatio)
					}
				}
				if (e === "sw") {
					g.left = h.left + (f.width - g.width);
					g.top = null
				}
				if (e === "nw") {
					g.top = h.top + (f.height - g.height);
					g.left = h.left + (f.width - g.width)
				}
				return g
			},
			_respectSize: function(l) {
				var g = this._vBoundaries
				  , p = this.axis
				  , r = a(l.width) && g.maxWidth && (g.maxWidth < l.width)
				  , m = a(l.height) && g.maxHeight && (g.maxHeight < l.height)
				  , h = a(l.width) && g.minWidth && (g.minWidth > l.width)
				  , q = a(l.height) && g.minHeight && (g.minHeight > l.height)
				  , f = this.originalPosition.left + this.originalSize.width
				  , n = this.position.top + this.size.height
				  , k = /sw|nw|w/.test(p)
				  , e = /nw|ne|n/.test(p);
				if (h) {
					l.width = g.minWidth
				}
				if (q) {
					l.height = g.minHeight
				}
				if (r) {
					l.width = g.maxWidth
				}
				if (m) {
					l.height = g.maxHeight
				}
				if (h && k) {
					l.left = f - g.minWidth
				}
				if (r && k) {
					l.left = f - g.maxWidth
				}
				if (q && e) {
					l.top = n - g.minHeight
				}
				if (m && e) {
					l.top = n - g.maxHeight
				}
				if (!l.width && !l.height && !l.left && l.top) {
					l.top = null
				} else {
					if (!l.width && !l.height && !l.top && l.left) {
						l.left = null
					}
				}
				return l
			},
			_proportionallyResize: function() {
				if (!this._proportionallyResizeElements.length) {
					return
				}
				var h, f, l, e, k, g = this.helper || this.element;
				for (h = 0; h < this._proportionallyResizeElements.length; h++) {
					k = this._proportionallyResizeElements[h];
					if (!this.borderDif) {
						this.borderDif = [];
						l = [k.css("borderTopWidth"), k.css("borderRightWidth"), k.css("borderBottomWidth"), k.css("borderLeftWidth")];
						e = [k.css("paddingTop"), k.css("paddingRight"), k.css("paddingBottom"), k.css("paddingLeft")];
						for (f = 0; f < l.length; f++) {
							this.borderDif[f] = (parseInt(l[f], 10) || 0) + (parseInt(e[f], 10) || 0)
						}
					}
					k.css({
						height: (g.height() - this.borderDif[0] - this.borderDif[2]) || 0,
						width: (g.width() - this.borderDif[1] - this.borderDif[3]) || 0
					})
				}
			},
			_renderProxy: function() {
				var e = this.element
				  , f = this.options;
				this.elementOffset = e.offset();
				if (this._helper) {
					this.helper = this.helper || c("<div style='overflow:hidden;'></div>");
					this.helper.addClass(this._helper).css({
						width: this.element.outerWidth() - 1,
						height: this.element.outerHeight() - 1,
						position: "absolute",
						left: this.elementOffset.left + "px",
						top: this.elementOffset.top + "px",
						zIndex: ++f.zIndex
					});
					this.helper.appendTo("body").disableSelection()
				} else {
					this.helper = this.element
				}
			},
			_change: {
				e: function(f, e) {
					return {
						width: this.originalSize.width + e
					}
				},
				w: function(g, e) {
					var f = this.originalSize
					  , h = this.originalPosition;
					return {
						left: h.left + e,
						width: f.width - e
					}
				},
				n: function(h, f, e) {
					var g = this.originalSize
					  , k = this.originalPosition;
					return {
						top: k.top + e,
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
				(f !== "resize" && this._trigger(f, e, this.ui()))
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
		c.ui.plugin.add("resizable", "animate", {
			stop: function(h) {
				var p = c(this).data("ui-resizable")
				  , l = p.options
				  , g = p._proportionallyResizeElements
				  , e = g.length && (/textarea/i).test(g[0].nodeName)
				  , f = e && c.ui.hasScroll(g[0], "left") ? 0 : p.sizeDiff.height
				  , n = e ? 0 : p.sizeDiff.width
				  , k = {
					width: (p.size.width - n),
					height: (p.size.height - f)
				}
				  , m = (parseInt(p.element.css("left"), 10) + (p.position.left - p.originalPosition.left)) || null
				  , q = (parseInt(p.element.css("top"), 10) + (p.position.top - p.originalPosition.top)) || null;
				p.element.animate(c.extend(k, q && m ? {
					top: q,
					left: m
				} : {}), {
					duration: l.animateDuration,
					easing: l.animateEasing,
					step: function() {
						var o = {
							width: parseInt(p.element.css("width"), 10),
							height: parseInt(p.element.css("height"), 10),
							top: parseInt(p.element.css("top"), 10),
							left: parseInt(p.element.css("left"), 10)
						};
						if (g && g.length) {
							c(g[0]).css({
								width: o.width,
								height: o.height
							})
						}
						p._updateCache(o);
						p._propagate("resize", h)
					}
				})
			}
		});
		c.ui.plugin.add("resizable", "containment", {
			start: function() {
				var q, g, s, e, n, h, t, r = c(this).data("ui-resizable"), m = r.options, l = r.element, f = m.containment, k = (f instanceof c) ? f.get(0) : (/parent/.test(f)) ? l.parent().get(0) : f;
				if (!k) {
					return
				}
				r.containerElement = c(k);
				if (/document/.test(f) || f === document) {
					r.containerOffset = {
						left: 0,
						top: 0
					};
					r.containerPosition = {
						left: 0,
						top: 0
					};
					r.parentData = {
						element: c(document),
						left: 0,
						top: 0,
						width: c(document).width(),
						height: c(document).height() || document.body.parentNode.scrollHeight
					}
				} else {
					q = c(k);
					g = [];
					c(["Top", "Right", "Left", "Bottom"]).each(function(p, o) {
						g[p] = b(q.css("padding" + o))
					});
					r.containerOffset = q.offset();
					r.containerPosition = q.position();
					r.containerSize = {
						height: (q.innerHeight() - g[3]),
						width: (q.innerWidth() - g[1])
					};
					s = r.containerOffset;
					e = r.containerSize.height;
					n = r.containerSize.width;
					h = (c.ui.hasScroll(k, "left") ? k.scrollWidth : n);
					t = (c.ui.hasScroll(k) ? k.scrollHeight : e);
					r.parentData = {
						element: k,
						left: s.left,
						top: s.top,
						width: h,
						height: t
					}
				}
			},
			resize: function(f) {
				var m, s, l, k, n = c(this).data("ui-resizable"), h = n.options, q = n.containerOffset, p = n.position, r = n._aspectRatio || f.shiftKey, e = {
					top: 0,
					left: 0
				}, g = n.containerElement;
				if (g[0] !== document && (/static/).test(g.css("position"))) {
					e = q
				}
				if (p.left < (n._helper ? q.left : 0)) {
					n.size.width = n.size.width + (n._helper ? (n.position.left - q.left) : (n.position.left - e.left));
					if (r) {
						n.size.height = n.size.width / n.aspectRatio
					}
					n.position.left = h.helper ? q.left : 0
				}
				if (p.top < (n._helper ? q.top : 0)) {
					n.size.height = n.size.height + (n._helper ? (n.position.top - q.top) : n.position.top);
					if (r) {
						n.size.width = n.size.height * n.aspectRatio
					}
					n.position.top = n._helper ? q.top : 0
				}
				n.offset.left = n.parentData.left + n.position.left;
				n.offset.top = n.parentData.top + n.position.top;
				m = Math.abs((n._helper ? n.offset.left - e.left : (n.offset.left - e.left)) + n.sizeDiff.width);
				s = Math.abs((n._helper ? n.offset.top - e.top : (n.offset.top - q.top)) + n.sizeDiff.height);
				l = n.containerElement.get(0) === n.element.parent().get(0);
				k = /relative|absolute/.test(n.containerElement.css("position"));
				if (l && k) {
					m -= n.parentData.left
				}
				if (m + n.size.width >= n.parentData.width) {
					n.size.width = n.parentData.width - m;
					if (r) {
						n.size.height = n.size.width / n.aspectRatio
					}
				}
				if (s + n.size.height >= n.parentData.height) {
					n.size.height = n.parentData.height - s;
					if (r) {
						n.size.width = n.size.height * n.aspectRatio
					}
				}
			},
			stop: function() {
				var m = c(this).data("ui-resizable")
				  , f = m.options
				  , n = m.containerOffset
				  , e = m.containerPosition
				  , g = m.containerElement
				  , k = c(m.helper)
				  , q = k.offset()
				  , p = k.outerWidth() - m.sizeDiff.width
				  , l = k.outerHeight() - m.sizeDiff.height;
				if (m._helper && !f.animate && (/relative/).test(g.css("position"))) {
					c(this).css({
						left: q.left - e.left - n.left,
						width: p,
						height: l
					})
				}
				if (m._helper && !f.animate && (/static/).test(g.css("position"))) {
					c(this).css({
						left: q.left - e.left - n.left,
						width: p,
						height: l
					})
				}
			}
		});
		c.ui.plugin.add("resizable", "alsoResize", {
			start: function() {
				var e = c(this).data("ui-resizable")
				  , g = e.options
				  , f = function(h) {
					c(h).each(function() {
						var k = c(this);
						k.data("ui-resizable-alsoresize", {
							width: parseInt(k.width(), 10),
							height: parseInt(k.height(), 10),
							left: parseInt(k.css("left"), 10),
							top: parseInt(k.css("top"), 10)
						})
					})
				};
				if (typeof (g.alsoResize) === "object" && !g.alsoResize.parentNode) {
					if (g.alsoResize.length) {
						g.alsoResize = g.alsoResize[0];
						f(g.alsoResize)
					} else {
						c.each(g.alsoResize, function(h) {
							f(h)
						})
					}
				} else {
					f(g.alsoResize)
				}
			},
			resize: function(g, k) {
				var f = c(this).data("ui-resizable")
				  , l = f.options
				  , h = f.originalSize
				  , n = f.originalPosition
				  , m = {
					height: (f.size.height - h.height) || 0,
					width: (f.size.width - h.width) || 0,
					top: (f.position.top - n.top) || 0,
					left: (f.position.left - n.left) || 0
				}
				  , e = function(o, p) {
					c(o).each(function() {
						var s = c(this)
						  , t = c(this).data("ui-resizable-alsoresize")
						  , r = {}
						  , q = p && p.length ? p : s.parents(k.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
						c.each(q, function(u, w) {
							var v = (t[w] || 0) + (m[w] || 0);
							if (v && v >= 0) {
								r[w] = v || null
							}
						});
						s.css(r)
					})
				};
				if (typeof (l.alsoResize) === "object" && !l.alsoResize.nodeType) {
					c.each(l.alsoResize, function(o, p) {
						e(o, p)
					})
				} else {
					e(l.alsoResize)
				}
			},
			stop: function() {
				c(this).removeData("resizable-alsoresize")
			}
		});
		c.ui.plugin.add("resizable", "ghost", {
			start: function() {
				var f = c(this).data("ui-resizable")
				  , g = f.options
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
				}).addClass("ui-resizable-ghost").addClass(typeof g.ghost === "string" ? g.ghost : "");
				f.ghost.appendTo(f.helper)
			},
			resize: function() {
				var e = c(this).data("ui-resizable");
				if (e.ghost) {
					e.ghost.css({
						position: "relative",
						height: e.size.height,
						width: e.size.width
					})
				}
			},
			stop: function() {
				var e = c(this).data("ui-resizable");
				if (e.ghost && e.helper) {
					e.helper.get(0).removeChild(e.ghost.get(0))
				}
			}
		});
		c.ui.plugin.add("resizable", "grid", {
			resize: function() {
				var t = c(this).data("ui-resizable")
				  , k = t.options
				  , u = t.size
				  , m = t.originalSize
				  , q = t.originalPosition
				  , v = t.axis
				  , f = typeof k.grid === "number" ? [k.grid, k.grid] : k.grid
				  , r = (f[0] || 1)
				  , p = (f[1] || 1)
				  , h = Math.round((u.width - m.width) / r) * r
				  , g = Math.round((u.height - m.height) / p) * p
				  , n = m.width + h
				  , e = m.height + g
				  , l = k.maxWidth && (k.maxWidth < n)
				  , w = k.maxHeight && (k.maxHeight < e)
				  , s = k.minWidth && (k.minWidth > n)
				  , x = k.minHeight && (k.minHeight > e);
				k.grid = f;
				if (s) {
					n = n + r
				}
				if (x) {
					e = e + p
				}
				if (l) {
					n = n - r
				}
				if (w) {
					e = e - p
				}
				if (/^(se|s|e)$/.test(v)) {
					t.size.width = n;
					t.size.height = e
				} else {
					if (/^(ne)$/.test(v)) {
						t.size.width = n;
						t.size.height = e;
						t.position.top = q.top - g
					} else {
						if (/^(sw)$/.test(v)) {
							t.size.width = n;
							t.size.height = e;
							t.position.left = q.left - h
						} else {
							t.size.width = n;
							t.size.height = e;
							t.position.top = q.top - g;
							t.position.left = q.left - h
						}
					}
				}
			}
		})
	}
	)(jQuery);
	(function(a, b) {
		a.widget("ui.selectable", a.ui.mouse, {
			version: "1.10.3",
			options: {
				appendTo: "body",
				autoRefresh: true,
				distance: 0,
				filter: "*",
				tolerance: "touch",
				selected: null,
				selecting: null,
				start: null,
				stop: null,
				unselected: null,
				unselecting: null
			},
			_create: function() {
				var d, c = this;
				this.element.addClass("ui-selectable");
				this.dragged = false;
				this.refresh = function() {
					d = a(c.options.filter, c.element[0]);
					d.addClass("ui-selectee");
					d.each(function() {
						var e = a(this)
						  , f = e.offset();
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
				var d = this
				  , c = this.options;
				this.opos = [e.pageX, e.pageY];
				if (this.options.disabled) {
					return
				}
				this.selectees = a(c.filter, this.element[0]);
				this._trigger("start", e);
				a(c.appendTo).append(this.helper);
				this.helper.css({
					left: e.pageX,
					top: e.pageY,
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
				a(e.target).parents().addBack().each(function() {
					var f, g = a.data(this, "selectable-item");
					if (g) {
						f = (!e.metaKey && !e.ctrlKey) || !g.$element.hasClass("ui-selected");
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
			_mouseDrag: function(l) {
				this.dragged = true;
				if (this.options.disabled) {
					return
				}
				var g, k = this, e = this.options, d = this.opos[0], h = this.opos[1], c = l.pageX, f = l.pageY;
				if (d > c) {
					g = c;
					c = d;
					d = g
				}
				if (h > f) {
					g = f;
					f = h;
					h = g
				}
				this.helper.css({
					left: d,
					top: h,
					width: c - d,
					height: f - h
				});
				this.selectees.each(function() {
					var m = a.data(this, "selectable-item")
					  , n = false;
					if (!m || m.element === k.element[0]) {
						return
					}
					if (e.tolerance === "touch") {
						n = (!(m.left > c || m.right < d || m.top > f || m.bottom < h))
					} else {
						if (e.tolerance === "fit") {
							n = (m.left > d && m.right < c && m.top > h && m.bottom < f)
						}
					}
					if (n) {
						if (m.selected) {
							m.$element.removeClass("ui-selected");
							m.selected = false
						}
						if (m.unselecting) {
							m.$element.removeClass("ui-unselecting");
							m.unselecting = false
						}
						if (!m.selecting) {
							m.$element.addClass("ui-selecting");
							m.selecting = true;
							k._trigger("selecting", l, {
								selecting: m.element
							})
						}
					} else {
						if (m.selecting) {
							if ((l.metaKey || l.ctrlKey) && m.startselected) {
								m.$element.removeClass("ui-selecting");
								m.selecting = false;
								m.$element.addClass("ui-selected");
								m.selected = true
							} else {
								m.$element.removeClass("ui-selecting");
								m.selecting = false;
								if (m.startselected) {
									m.$element.addClass("ui-unselecting");
									m.unselecting = true
								}
								k._trigger("unselecting", l, {
									unselecting: m.element
								})
							}
						}
						if (m.selected) {
							if (!l.metaKey && !l.ctrlKey && !m.startselected) {
								m.$element.removeClass("ui-selected");
								m.selected = false;
								m.$element.addClass("ui-unselecting");
								m.unselecting = true;
								k._trigger("unselecting", l, {
									unselecting: m.element
								})
							}
						}
					}
				});
				return false
			},
			_mouseStop: function(d) {
				var c = this;
				this.dragged = false;
				a(".ui-unselecting", this.element[0]).each(function() {
					var e = a.data(this, "selectable-item");
					e.$element.removeClass("ui-unselecting");
					e.unselecting = false;
					e.startselected = false;
					c._trigger("unselected", d, {
						unselected: e.element
					})
				});
				a(".ui-selecting", this.element[0]).each(function() {
					var e = a.data(this, "selectable-item");
					e.$element.removeClass("ui-selecting").addClass("ui-selected");
					e.selecting = false;
					e.selected = true;
					e.startselected = true;
					c._trigger("selected", d, {
						selected: e.element
					})
				});
				this._trigger("stop", d);
				this.helper.remove();
				return false
			}
		})
	}
	)(jQuery);
	(function(b, d) {
		function a(f, e, g) {
			return (f > e) && (f < (e + g))
		}
		function c(e) {
			return (/left|right/).test(e.css("float")) || (/inline|table-cell/).test(e.css("display"))
		}
		b.widget("ui.sortable", b.ui.mouse, {
			version: "1.10.3",
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
				zIndex: 1000,
				activate: null,
				beforeStop: null,
				change: null,
				deactivate: null,
				out: null,
				over: null,
				receive: null,
				remove: null,
				sort: null,
				start: null,
				stop: null,
				update: null
			},
			_create: function() {
				var e = this.options;
				this.containerCache = {};
				this.element.addClass("ui-sortable");
				this.refresh();
				this.floating = this.items.length ? e.axis === "x" || c(this.items[0].item) : false;
				this.offset = this.element.offset();
				this._mouseInit();
				this.ready = true
			},
			_destroy: function() {
				this.element.removeClass("ui-sortable ui-sortable-disabled");
				this._mouseDestroy();
				for (var e = this.items.length - 1; e >= 0; e--) {
					this.items[e].item.removeData(this.widgetName + "-item")
				}
				return this
			},
			_setOption: function(e, f) {
				if (e === "disabled") {
					this.options[e] = f;
					this.widget().toggleClass("ui-sortable-disabled", !!f)
				} else {
					b.Widget.prototype._setOption.apply(this, arguments)
				}
			},
			_mouseCapture: function(g, h) {
				var e = null
				  , k = false
				  , f = this;
				if (this.reverting) {
					return false
				}
				if (this.options.disabled || this.options.type === "static") {
					return false
				}
				this._refreshItems(g);
				b(g.target).parents().each(function() {
					if (b.data(this, f.widgetName + "-item") === f) {
						e = b(this);
						return false
					}
				});
				if (b.data(g.target, f.widgetName + "-item") === f) {
					e = b(g.target)
				}
				if (!e) {
					return false
				}
				if (this.options.handle && !h) {
					b(this.options.handle, e).find("*").addBack().each(function() {
						if (this === g.target) {
							k = true
						}
					});
					if (!k) {
						return false
					}
				}
				this.currentItem = e;
				this._removeCurrentsFromItems();
				return true
			},
			_mouseStart: function(h, k, f) {
				var g, e, l = this.options;
				this.currentContainer = this;
				this.refreshPositions();
				this.helper = this._createHelper(h);
				this._cacheHelperProportions();
				this._cacheMargins();
				this.scrollParent = this.helper.scrollParent();
				this.offset = this.currentItem.offset();
				this.offset = {
					top: this.offset.top - this.margins.top,
					left: this.offset.left - this.margins.left
				};
				b.extend(this.offset, {
					click: {
						left: h.pageX - this.offset.left,
						top: h.pageY - this.offset.top
					},
					parent: this._getParentOffset(),
					relative: this._getRelativeOffset()
				});
				this.helper.css("position", "absolute");
				this.cssPosition = this.helper.css("position");
				this.originalPosition = this._generatePosition(h);
				this.originalPageX = h.pageX;
				this.originalPageY = h.pageY;
				(l.cursorAt && this._adjustOffsetFromHelper(l.cursorAt));
				this.domPosition = {
					prev: this.currentItem.prev()[0],
					parent: this.currentItem.parent()[0]
				};
				if (this.helper[0] !== this.currentItem[0]) {
					this.currentItem.hide()
				}
				this._createPlaceholder();
				if (l.containment) {
					this._setContainment()
				}
				if (l.cursor && l.cursor !== "auto") {
					e = this.document.find("body");
					this.storedCursor = e.css("cursor");
					e.css("cursor", l.cursor);
					this.storedStylesheet = b("<style>*{ cursor: " + l.cursor + " !important; }</style>").appendTo(e)
				}
				if (l.opacity) {
					if (this.helper.css("opacity")) {
						this._storedOpacity = this.helper.css("opacity")
					}
					this.helper.css("opacity", l.opacity)
				}
				if (l.zIndex) {
					if (this.helper.css("zIndex")) {
						this._storedZIndex = this.helper.css("zIndex")
					}
					this.helper.css("zIndex", l.zIndex)
				}
				if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
					this.overflowOffset = this.scrollParent.offset()
				}
				this._trigger("start", h, this._uiHash());
				if (!this._preserveHelperProportions) {
					this._cacheHelperProportions()
				}
				if (!f) {
					for (g = this.containers.length - 1; g >= 0; g--) {
						this.containers[g]._trigger("activate", h, this._uiHash(this))
					}
				}
				if (b.ui.ddmanager) {
					b.ui.ddmanager.current = this
				}
				if (b.ui.ddmanager && !l.dropBehaviour) {
					b.ui.ddmanager.prepareOffsets(this, h)
				}
				this.dragging = true;
				this.helper.addClass("ui-sortable-helper");
				this._mouseDrag(h);
				return true
			},
			_mouseDrag: function(k) {
				var g, h, f, m, l = this.options, e = false;
				this.position = this._generatePosition(k);
				this.positionAbs = this._convertPositionTo("absolute");
				if (!this.lastPositionAbs) {
					this.lastPositionAbs = this.positionAbs
				}
				if (this.options.scroll) {
					if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
						if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - k.pageY < l.scrollSensitivity) {
							this.scrollParent[0].scrollTop = e = this.scrollParent[0].scrollTop + l.scrollSpeed
						} else {
							if (k.pageY - this.overflowOffset.top < l.scrollSensitivity) {
								this.scrollParent[0].scrollTop = e = this.scrollParent[0].scrollTop - l.scrollSpeed
							}
						}
						if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - k.pageX < l.scrollSensitivity) {
							this.scrollParent[0].scrollLeft = e = this.scrollParent[0].scrollLeft + l.scrollSpeed
						} else {
							if (k.pageX - this.overflowOffset.left < l.scrollSensitivity) {
								this.scrollParent[0].scrollLeft = e = this.scrollParent[0].scrollLeft - l.scrollSpeed
							}
						}
					} else {
						if (k.pageY - b(document).scrollTop() < l.scrollSensitivity) {
							e = b(document).scrollTop(b(document).scrollTop() - l.scrollSpeed)
						} else {
							if (b(window).height() - (k.pageY - b(document).scrollTop()) < l.scrollSensitivity) {
								e = b(document).scrollTop(b(document).scrollTop() + l.scrollSpeed)
							}
						}
						if (k.pageX - b(document).scrollLeft() < l.scrollSensitivity) {
							e = b(document).scrollLeft(b(document).scrollLeft() - l.scrollSpeed)
						} else {
							if (b(window).width() - (k.pageX - b(document).scrollLeft()) < l.scrollSensitivity) {
								e = b(document).scrollLeft(b(document).scrollLeft() + l.scrollSpeed)
							}
						}
					}
					if (e !== false && b.ui.ddmanager && !l.dropBehaviour) {
						b.ui.ddmanager.prepareOffsets(this, k)
					}
				}
				this.positionAbs = this._convertPositionTo("absolute");
				if (!this.options.axis || this.options.axis !== "y") {
					this.helper[0].style.left = this.position.left + "px"
				}
				if (!this.options.axis || this.options.axis !== "x") {
					this.helper[0].style.top = this.position.top + "px"
				}
				for (g = this.items.length - 1; g >= 0; g--) {
					h = this.items[g];
					f = h.item[0];
					m = this._intersectsWithPointer(h);
					if (!m) {
						continue
					}
					if (h.instance !== this.currentContainer) {
						continue
					}
					if (f !== this.currentItem[0] && this.placeholder[m === 1 ? "next" : "prev"]()[0] !== f && !b.contains(this.placeholder[0], f) && (this.options.type === "semi-dynamic" ? !b.contains(this.element[0], f) : true)) {
						this.direction = m === 1 ? "down" : "up";
						if (this.options.tolerance === "pointer" || this._intersectsWithSides(h)) {
							this._rearrange(k, h)
						} else {
							break
						}
						this._trigger("change", k, this._uiHash());
						break
					}
				}
				this._contactContainers(k);
				if (b.ui.ddmanager) {
					b.ui.ddmanager.drag(this, k)
				}
				this._trigger("sort", k, this._uiHash());
				this.lastPositionAbs = this.positionAbs;
				return false
			},
			_mouseStop: function(g, k) {
				if (!g) {
					return
				}
				if (b.ui.ddmanager && !this.options.dropBehaviour) {
					b.ui.ddmanager.drop(this, g)
				}
				if (this.options.revert) {
					var f = this
					  , l = this.placeholder.offset()
					  , e = this.options.axis
					  , h = {};
					if (!e || e === "x") {
						h.left = l.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)
					}
					if (!e || e === "y") {
						h.top = l.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)
					}
					this.reverting = true;
					b(this.helper).animate(h, parseInt(this.options.revert, 10) || 500, function() {
						f._clear(g)
					})
				} else {
					this._clear(g, k)
				}
				return false
			},
			cancel: function() {
				if (this.dragging) {
					this._mouseUp({
						target: null
					});
					if (this.options.helper === "original") {
						this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
					} else {
						this.currentItem.show()
					}
					for (var e = this.containers.length - 1; e >= 0; e--) {
						this.containers[e]._trigger("deactivate", null, this._uiHash(this));
						if (this.containers[e].containerCache.over) {
							this.containers[e]._trigger("out", null, this._uiHash(this));
							this.containers[e].containerCache.over = 0
						}
					}
				}
				if (this.placeholder) {
					if (this.placeholder[0].parentNode) {
						this.placeholder[0].parentNode.removeChild(this.placeholder[0])
					}
					if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
						this.helper.remove()
					}
					b.extend(this, {
						helper: null,
						dragging: false,
						reverting: false,
						_noFinalSort: null
					});
					if (this.domPosition.prev) {
						b(this.domPosition.prev).after(this.currentItem)
					} else {
						b(this.domPosition.parent).prepend(this.currentItem)
					}
				}
				return this
			},
			serialize: function(g) {
				var e = this._getItemsAsjQuery(g && g.connected)
				  , f = [];
				g = g || {};
				b(e).each(function() {
					var h = (b(g.item || this).attr(g.attribute || "id") || "").match(g.expression || (/(.+)[\-=_](.+)/));
					if (h) {
						f.push((g.key || h[1] + "[]") + "=" + (g.key && g.expression ? h[1] : h[2]))
					}
				});
				if (!f.length && g.key) {
					f.push(g.key + "=")
				}
				return f.join("&")
			},
			toArray: function(g) {
				var e = this._getItemsAsjQuery(g && g.connected)
				  , f = [];
				g = g || {};
				e.each(function() {
					f.push(b(g.item || this).attr(g.attribute || "id") || "")
				});
				return f
			},
			_intersectsWith: function(u) {
				var g = this.positionAbs.left
				  , f = g + this.helperProportions.width
				  , q = this.positionAbs.top
				  , p = q + this.helperProportions.height
				  , h = u.left
				  , e = h + u.width
				  , v = u.top
				  , o = v + u.height
				  , w = this.offset.click.top
				  , n = this.offset.click.left
				  , m = (this.options.axis === "x") || ((q + w) > v && (q + w) < o)
				  , s = (this.options.axis === "y") || ((g + n) > h && (g + n) < e)
				  , k = m && s;
				if (this.options.tolerance === "pointer" || this.options.forcePointerForContainers || (this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > u[this.floating ? "width" : "height"])) {
					return k
				} else {
					return (h < g + (this.helperProportions.width / 2) && f - (this.helperProportions.width / 2) < e && v < q + (this.helperProportions.height / 2) && p - (this.helperProportions.height / 2) < o)
				}
			},
			_intersectsWithPointer: function(g) {
				var h = (this.options.axis === "x") || a(this.positionAbs.top + this.offset.click.top, g.top, g.height)
				  , f = (this.options.axis === "y") || a(this.positionAbs.left + this.offset.click.left, g.left, g.width)
				  , l = h && f
				  , e = this._getDragVerticalDirection()
				  , k = this._getDragHorizontalDirection();
				if (!l) {
					return false
				}
				return this.floating ? (((k && k === "right") || e === "down") ? 2 : 1) : (e && (e === "down" ? 2 : 1))
			},
			_intersectsWithSides: function(h) {
				var f = a(this.positionAbs.top + this.offset.click.top, h.top + (h.height / 2), h.height)
				  , g = a(this.positionAbs.left + this.offset.click.left, h.left + (h.width / 2), h.width)
				  , e = this._getDragVerticalDirection()
				  , k = this._getDragHorizontalDirection();
				if (this.floating && k) {
					return ((k === "right" && g) || (k === "left" && !g))
				} else {
					return e && ((e === "down" && f) || (e === "up" && !f))
				}
			},
			_getDragVerticalDirection: function() {
				var e = this.positionAbs.top - this.lastPositionAbs.top;
				return e !== 0 && (e > 0 ? "down" : "up")
			},
			_getDragHorizontalDirection: function() {
				var e = this.positionAbs.left - this.lastPositionAbs.left;
				return e !== 0 && (e > 0 ? "right" : "left")
			},
			refresh: function(e) {
				this._refreshItems(e);
				this.refreshPositions();
				return this
			},
			_connectWith: function() {
				var e = this.options;
				return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
			},
			_getItemsAsjQuery: function(l) {
				var h, g, n, m, e = [], f = [], k = this._connectWith();
				if (k && l) {
					for (h = k.length - 1; h >= 0; h--) {
						n = b(k[h]);
						for (g = n.length - 1; g >= 0; g--) {
							m = b.data(n[g], this.widgetFullName);
							if (m && m !== this && !m.options.disabled) {
								f.push([b.isFunction(m.options.items) ? m.options.items.call(m.element) : b(m.options.items, m.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), m])
							}
						}
					}
				}
				f.push([b.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
					options: this.options,
					item: this.currentItem
				}) : b(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
				for (h = f.length - 1; h >= 0; h--) {
					f[h][0].each(function() {
						e.push(this)
					})
				}
				return b(e)
			},
			_removeCurrentsFromItems: function() {
				var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
				this.items = b.grep(this.items, function(g) {
					for (var f = 0; f < e.length; f++) {
						if (e[f] === g.item[0]) {
							return false
						}
					}
					return true
				})
			},
			_refreshItems: function(e) {
				this.items = [];
				this.containers = [this];
				var k, g, p, l, o, f, r, q, m = this.items, h = [[b.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
					item: this.currentItem
				}) : b(this.options.items, this.element), this]], n = this._connectWith();
				if (n && this.ready) {
					for (k = n.length - 1; k >= 0; k--) {
						p = b(n[k]);
						for (g = p.length - 1; g >= 0; g--) {
							l = b.data(p[g], this.widgetFullName);
							if (l && l !== this && !l.options.disabled) {
								h.push([b.isFunction(l.options.items) ? l.options.items.call(l.element[0], e, {
									item: this.currentItem
								}) : b(l.options.items, l.element), l]);
								this.containers.push(l)
							}
						}
					}
				}
				for (k = h.length - 1; k >= 0; k--) {
					o = h[k][1];
					f = h[k][0];
					for (g = 0,
					q = f.length; g < q; g++) {
						r = b(f[g]);
						r.data(this.widgetName + "-item", o);
						m.push({
							item: r,
							instance: o,
							width: 0,
							height: 0,
							left: 0,
							top: 0
						})
					}
				}
			},
			refreshPositions: function(e) {
				if (this.offsetParent && this.helper) {
					this.offset.parent = this._getParentOffset()
				}
				var g, h, f, k;
				for (g = this.items.length - 1; g >= 0; g--) {
					h = this.items[g];
					if (h.instance !== this.currentContainer && this.currentContainer && h.item[0] !== this.currentItem[0]) {
						continue
					}
					f = this.options.toleranceElement ? b(this.options.toleranceElement, h.item) : h.item;
					if (!e) {
						h.width = f.outerWidth();
						h.height = f.outerHeight()
					}
					k = f.offset();
					h.left = k.left;
					h.top = k.top
				}
				if (this.options.custom && this.options.custom.refreshContainers) {
					this.options.custom.refreshContainers.call(this)
				} else {
					for (g = this.containers.length - 1; g >= 0; g--) {
						k = this.containers[g].element.offset();
						this.containers[g].containerCache.left = k.left;
						this.containers[g].containerCache.top = k.top;
						this.containers[g].containerCache.width = this.containers[g].element.outerWidth();
						this.containers[g].containerCache.height = this.containers[g].element.outerHeight()
					}
				}
				return this
			},
			_createPlaceholder: function(f) {
				f = f || this;
				var e, g = f.options;
				if (!g.placeholder || g.placeholder.constructor === String) {
					e = g.placeholder;
					g.placeholder = {
						element: function() {
							var k = f.currentItem[0].nodeName.toLowerCase()
							  , h = b("<" + k + ">", f.document[0]).addClass(e || f.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
							if (k === "tr") {
								f.currentItem.children().each(function() {
									b("<td>&#160;</td>", f.document[0]).attr("colspan", b(this).attr("colspan") || 1).appendTo(h)
								})
							} else {
								if (k === "img") {
									h.attr("src", f.currentItem.attr("src"))
								}
							}
							if (!e) {
								h.css("visibility", "hidden")
							}
							return h
						},
						update: function(h, k) {
							if (e && !g.forcePlaceholderSize) {
								return
							}
							if (!k.height()) {
								k.height(f.currentItem.innerHeight() - parseInt(f.currentItem.css("paddingTop") || 0, 10) - parseInt(f.currentItem.css("paddingBottom") || 0, 10))
							}
							if (!k.width()) {
								k.width(f.currentItem.innerWidth() - parseInt(f.currentItem.css("paddingLeft") || 0, 10) - parseInt(f.currentItem.css("paddingRight") || 0, 10))
							}
						}
					}
				}
				f.placeholder = b(g.placeholder.element.call(f.element, f.currentItem));
				f.currentItem.after(f.placeholder);
				g.placeholder.update(f, f.placeholder)
			},
			_contactContainers: function(e) {
				var l, h, p, m, n, r, f, s, k, o, g = null, q = null;
				for (l = this.containers.length - 1; l >= 0; l--) {
					if (b.contains(this.currentItem[0], this.containers[l].element[0])) {
						continue
					}
					if (this._intersectsWith(this.containers[l].containerCache)) {
						if (g && b.contains(this.containers[l].element[0], g.element[0])) {
							continue
						}
						g = this.containers[l];
						q = l
					} else {
						if (this.containers[l].containerCache.over) {
							this.containers[l]._trigger("out", e, this._uiHash(this));
							this.containers[l].containerCache.over = 0
						}
					}
				}
				if (!g) {
					return
				}
				if (this.containers.length === 1) {
					if (!this.containers[q].containerCache.over) {
						this.containers[q]._trigger("over", e, this._uiHash(this));
						this.containers[q].containerCache.over = 1
					}
				} else {
					p = 10000;
					m = null;
					o = g.floating || c(this.currentItem);
					n = o ? "left" : "top";
					r = o ? "width" : "height";
					f = this.positionAbs[n] + this.offset.click[n];
					for (h = this.items.length - 1; h >= 0; h--) {
						if (!b.contains(this.containers[q].element[0], this.items[h].item[0])) {
							continue
						}
						if (this.items[h].item[0] === this.currentItem[0]) {
							continue
						}
						if (o && !a(this.positionAbs.top + this.offset.click.top, this.items[h].top, this.items[h].height)) {
							continue
						}
						s = this.items[h].item.offset()[n];
						k = false;
						if (Math.abs(s - f) > Math.abs(s + this.items[h][r] - f)) {
							k = true;
							s += this.items[h][r]
						}
						if (Math.abs(s - f) < p) {
							p = Math.abs(s - f);
							m = this.items[h];
							this.direction = k ? "up" : "down"
						}
					}
					if (!m && !this.options.dropOnEmpty) {
						return
					}
					if (this.currentContainer === this.containers[q]) {
						return
					}
					m ? this._rearrange(e, m, null, true) : this._rearrange(e, null, this.containers[q].element, true);
					this._trigger("change", e, this._uiHash());
					this.containers[q]._trigger("change", e, this._uiHash(this));
					this.currentContainer = this.containers[q];
					this.options.placeholder.update(this.currentContainer, this.placeholder);
					this.containers[q]._trigger("over", e, this._uiHash(this));
					this.containers[q].containerCache.over = 1
				}
			},
			_createHelper: function(f) {
				var g = this.options
				  , e = b.isFunction(g.helper) ? b(g.helper.apply(this.element[0], [f, this.currentItem])) : (g.helper === "clone" ? this.currentItem.clone() : this.currentItem);
				if (!e.parents("body").length) {
					b(g.appendTo !== "parent" ? g.appendTo : this.currentItem[0].parentNode)[0].appendChild(e[0])
				}
				if (e[0] === this.currentItem[0]) {
					this._storedCSS = {
						width: this.currentItem[0].style.width,
						height: this.currentItem[0].style.height,
						position: this.currentItem.css("position"),
						top: this.currentItem.css("top"),
						left: this.currentItem.css("left")
					}
				}
				if (!e[0].style.width || g.forceHelperSize) {
					e.width(this.currentItem.width())
				}
				if (!e[0].style.height || g.forceHelperSize) {
					e.height(this.currentItem.height())
				}
				return e
			},
			_adjustOffsetFromHelper: function(e) {
				if (typeof e === "string") {
					e = e.split(" ")
				}
				if (b.isArray(e)) {
					e = {
						left: +e[0],
						top: +e[1] || 0
					}
				}
				if ("left"in e) {
					this.offset.click.left = e.left + this.margins.left
				}
				if ("right"in e) {
					this.offset.click.left = this.helperProportions.width - e.right + this.margins.left
				}
				if ("top"in e) {
					this.offset.click.top = e.top + this.margins.top
				}
				if ("bottom"in e) {
					this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top
				}
			},
			_getParentOffset: function() {
				this.offsetParent = this.helper.offsetParent();
				var e = this.offsetParent.offset();
				if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0])) {
					e.left += this.scrollParent.scrollLeft();
					e.top += this.scrollParent.scrollTop()
				}
				if (this.offsetParent[0] === document.body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && b.ui.ie)) {
					e = {
						top: 0,
						left: 0
					}
				}
				return {
					top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
					left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
				}
			},
			_getRelativeOffset: function() {
				if (this.cssPosition === "relative") {
					var e = this.currentItem.position();
					return {
						top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
						left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
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
				var f, h, e, g = this.options;
				if (g.containment === "parent") {
					g.containment = this.helper[0].parentNode
				}
				if (g.containment === "document" || g.containment === "window") {
					this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, b(g.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (b(g.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
				}
				if (!(/^(document|window|parent)$/).test(g.containment)) {
					f = b(g.containment)[0];
					h = b(g.containment).offset();
					e = (b(f).css("overflow") !== "hidden");
					this.containment = [h.left + (parseInt(b(f).css("borderLeftWidth"), 10) || 0) + (parseInt(b(f).css("paddingLeft"), 10) || 0) - this.margins.left, h.top + (parseInt(b(f).css("borderTopWidth"), 10) || 0) + (parseInt(b(f).css("paddingTop"), 10) || 0) - this.margins.top, h.left + (e ? Math.max(f.scrollWidth, f.offsetWidth) : f.offsetWidth) - (parseInt(b(f).css("borderLeftWidth"), 10) || 0) - (parseInt(b(f).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, h.top + (e ? Math.max(f.scrollHeight, f.offsetHeight) : f.offsetHeight) - (parseInt(b(f).css("borderTopWidth"), 10) || 0) - (parseInt(b(f).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
				}
			},
			_convertPositionTo: function(g, k) {
				if (!k) {
					k = this.position
				}
				var f = g === "absolute" ? 1 : -1
				  , e = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent
				  , h = (/(html|body)/i).test(e[0].tagName);
				return {
					top: (k.top + this.offset.relative.top * f + this.offset.parent.top * f - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (h ? 0 : e.scrollTop())) * f)),
					left: (k.left + this.offset.relative.left * f + this.offset.parent.left * f - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : h ? 0 : e.scrollLeft()) * f))
				}
			},
			_generatePosition: function(h) {
				var l, k, m = this.options, g = h.pageX, f = h.pageY, e = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, n = (/(html|body)/i).test(e[0].tagName);
				if (this.cssPosition === "relative" && !(this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0])) {
					this.offset.relative = this._getRelativeOffset()
				}
				if (this.originalPosition) {
					if (this.containment) {
						if (h.pageX - this.offset.click.left < this.containment[0]) {
							g = this.containment[0] + this.offset.click.left
						}
						if (h.pageY - this.offset.click.top < this.containment[1]) {
							f = this.containment[1] + this.offset.click.top
						}
						if (h.pageX - this.offset.click.left > this.containment[2]) {
							g = this.containment[2] + this.offset.click.left
						}
						if (h.pageY - this.offset.click.top > this.containment[3]) {
							f = this.containment[3] + this.offset.click.top
						}
					}
					if (m.grid) {
						l = this.originalPageY + Math.round((f - this.originalPageY) / m.grid[1]) * m.grid[1];
						f = this.containment ? ((l - this.offset.click.top >= this.containment[1] && l - this.offset.click.top <= this.containment[3]) ? l : ((l - this.offset.click.top >= this.containment[1]) ? l - m.grid[1] : l + m.grid[1])) : l;
						k = this.originalPageX + Math.round((g - this.originalPageX) / m.grid[0]) * m.grid[0];
						g = this.containment ? ((k - this.offset.click.left >= this.containment[0] && k - this.offset.click.left <= this.containment[2]) ? k : ((k - this.offset.click.left >= this.containment[0]) ? k - m.grid[0] : k + m.grid[0])) : k
					}
				}
				return {
					top: (f - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (n ? 0 : e.scrollTop())))),
					left: (g - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : n ? 0 : e.scrollLeft())))
				}
			},
			_rearrange: function(k, h, f, g) {
				f ? f[0].appendChild(this.placeholder[0]) : h.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? h.item[0] : h.item[0].nextSibling));
				this.counter = this.counter ? ++this.counter : 1;
				var e = this.counter;
				this._delay(function() {
					if (e === this.counter) {
						this.refreshPositions(!g)
					}
				})
			},
			_clear: function(f, g) {
				this.reverting = false;
				var e, h = [];
				if (!this._noFinalSort && this.currentItem.parent().length) {
					this.placeholder.before(this.currentItem)
				}
				this._noFinalSort = null;
				if (this.helper[0] === this.currentItem[0]) {
					for (e in this._storedCSS) {
						if (this._storedCSS[e] === "auto" || this._storedCSS[e] === "static") {
							this._storedCSS[e] = ""
						}
					}
					this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
				} else {
					this.currentItem.show()
				}
				if (this.fromOutside && !g) {
					h.push(function(k) {
						this._trigger("receive", k, this._uiHash(this.fromOutside))
					})
				}
				if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !g) {
					h.push(function(k) {
						this._trigger("update", k, this._uiHash())
					})
				}
				if (this !== this.currentContainer) {
					if (!g) {
						h.push(function(k) {
							this._trigger("remove", k, this._uiHash())
						});
						h.push((function(k) {
							return function(l) {
								k._trigger("receive", l, this._uiHash(this))
							}
						}
						).call(this, this.currentContainer));
						h.push((function(k) {
							return function(l) {
								k._trigger("update", l, this._uiHash(this))
							}
						}
						).call(this, this.currentContainer))
					}
				}
				for (e = this.containers.length - 1; e >= 0; e--) {
					if (!g) {
						h.push((function(k) {
							return function(l) {
								k._trigger("deactivate", l, this._uiHash(this))
							}
						}
						).call(this, this.containers[e]))
					}
					if (this.containers[e].containerCache.over) {
						h.push((function(k) {
							return function(l) {
								k._trigger("out", l, this._uiHash(this))
							}
						}
						).call(this, this.containers[e]));
						this.containers[e].containerCache.over = 0
					}
				}
				if (this.storedCursor) {
					this.document.find("body").css("cursor", this.storedCursor);
					this.storedStylesheet.remove()
				}
				if (this._storedOpacity) {
					this.helper.css("opacity", this._storedOpacity)
				}
				if (this._storedZIndex) {
					this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex)
				}
				this.dragging = false;
				if (this.cancelHelperRemoval) {
					if (!g) {
						this._trigger("beforeStop", f, this._uiHash());
						for (e = 0; e < h.length; e++) {
							h[e].call(this, f)
						}
						this._trigger("stop", f, this._uiHash())
					}
					this.fromOutside = false;
					return false
				}
				if (!g) {
					this._trigger("beforeStop", f, this._uiHash())
				}
				this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
				if (this.helper[0] !== this.currentItem[0]) {
					this.helper.remove()
				}
				this.helper = null;
				if (!g) {
					for (e = 0; e < h.length; e++) {
						h[e].call(this, f)
					}
					this._trigger("stop", f, this._uiHash())
				}
				this.fromOutside = false;
				return true
			},
			_trigger: function() {
				if (b.Widget.prototype._trigger.apply(this, arguments) === false) {
					this.cancel()
				}
			},
			_uiHash: function(e) {
				var f = e || this;
				return {
					helper: f.helper,
					placeholder: f.placeholder || b([]),
					position: f.position,
					originalPosition: f.originalPosition,
					offset: f.positionAbs,
					item: f.currentItem,
					sender: e ? e.element : null
				}
			}
		})
	}
	)(jQuery);
	(function(a, c) {
		var b = "ui-effects-";
		a.effects = {
			effect: {}
		};
		/*! * jQuery Color Animations v2.1.2 * https://github.com/jquery/jquery-color * * Copyright 2013 jQuery Foundation and other contributors * Released under the MIT license. * http://jquery.org/license * * Date: Wed Jan 16 08:47:09 2013 -0600 */
		(function(t, g) {
			var p = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", m = /^([\-+])=\s*(\d+\.?\d*)/, l = [{
				re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				parse: function(u) {
					return [u[1], u[2], u[3], u[4]]
				}
			}, {
				re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				parse: function(u) {
					return [u[1] * 2.55, u[2] * 2.55, u[3] * 2.55, u[4]]
				}
			}, {
				re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
				parse: function(u) {
					return [parseInt(u[1], 16), parseInt(u[2], 16), parseInt(u[3], 16)]
				}
			}, {
				re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
				parse: function(u) {
					return [parseInt(u[1] + u[1], 16), parseInt(u[2] + u[2], 16), parseInt(u[3] + u[3], 16)]
				}
			}, {
				re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				space: "hsla",
				parse: function(u) {
					return [u[1], u[2] / 100, u[3] / 100, u[4]]
				}
			}], h = t.Color = function(v, w, u, x) {
				return new t.Color.fn.parse(v,w,u,x)
			}
			, o = {
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
			}, s = {
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
			}, r = h.support = {}, e = t("<p>")[0], d, q = t.each;
			e.style.cssText = "background-color:rgba(1,1,1,.5)";
			r.rgba = e.style.backgroundColor.indexOf("rgba") > -1;
			q(o, function(u, v) {
				v.cache = "_" + u;
				v.props.alpha = {
					idx: 3,
					type: "percent",
					def: 1
				}
			});
			function n(v, x, w) {
				var u = s[x.type] || {};
				if (v == null) {
					return (w || !x.def) ? null : x.def
				}
				v = u.floor ? ~~v : parseFloat(v);
				if (isNaN(v)) {
					return x.def
				}
				if (u.mod) {
					return (v + u.mod) % u.mod
				}
				return 0 > v ? 0 : u.max < v ? u.max : v
			}
			function k(u) {
				var w = h()
				  , v = w._rgba = [];
				u = u.toLowerCase();
				q(l, function(B, C) {
					var z, A = C.re.exec(u), y = A && C.parse(A), x = C.space || "rgba";
					if (y) {
						z = w[x](y);
						w[o[x].cache] = z[o[x].cache];
						v = w._rgba = z._rgba;
						return false
					}
				});
				if (v.length) {
					if (v.join() === "0,0,0,0") {
						t.extend(v, d.transparent)
					}
					return w
				}
				return d[u]
			}
			h.fn = t.extend(h.prototype, {
				parse: function(A, y, u, z) {
					if (A === g) {
						this._rgba = [null, null, null, null];
						return this
					}
					if (A.jquery || A.nodeType) {
						A = t(A).css(y);
						y = g
					}
					var x = this
					  , w = t.type(A)
					  , v = this._rgba = [];
					if (y !== g) {
						A = [A, y, u, z];
						w = "array"
					}
					if (w === "string") {
						return this.parse(k(A) || d._default)
					}
					if (w === "array") {
						q(o.rgba.props, function(B, C) {
							v[C.idx] = n(A[C.idx], C)
						});
						return this
					}
					if (w === "object") {
						if (A instanceof h) {
							q(o, function(B, C) {
								if (A[C.cache]) {
									x[C.cache] = A[C.cache].slice()
								}
							})
						} else {
							q(o, function(C, D) {
								var B = D.cache;
								q(D.props, function(E, F) {
									if (!x[B] && D.to) {
										if (E === "alpha" || A[E] == null) {
											return
										}
										x[B] = D.to(x._rgba)
									}
									x[B][F.idx] = n(A[E], F, true)
								});
								if (x[B] && t.inArray(null, x[B].slice(0, 3)) < 0) {
									x[B][3] = 1;
									if (D.from) {
										x._rgba = D.from(x[B])
									}
								}
							})
						}
						return this
					}
				},
				is: function(w) {
					var u = h(w)
					  , x = true
					  , v = this;
					q(o, function(y, A) {
						var B, z = u[A.cache];
						if (z) {
							B = v[A.cache] || A.to && A.to(v._rgba) || [];
							q(A.props, function(C, D) {
								if (z[D.idx] != null) {
									x = (z[D.idx] === B[D.idx]);
									return x
								}
							})
						}
						return x
					});
					return x
				},
				_space: function() {
					var u = []
					  , v = this;
					q(o, function(w, x) {
						if (v[x.cache]) {
							u.push(w)
						}
					});
					return u.pop()
				},
				transition: function(v, B) {
					var w = h(v)
					  , x = w._space()
					  , y = o[x]
					  , z = this.alpha() === 0 ? h("transparent") : this
					  , A = z[y.cache] || y.to(z._rgba)
					  , u = A.slice();
					w = w[y.cache];
					q(y.props, function(F, H) {
						var E = H.idx
						  , D = A[E]
						  , C = w[E]
						  , G = s[H.type] || {};
						if (C === null) {
							return
						}
						if (D === null) {
							u[E] = C
						} else {
							if (G.mod) {
								if (C - D > G.mod / 2) {
									D += G.mod
								} else {
									if (D - C > G.mod / 2) {
										D -= G.mod
									}
								}
							}
							u[E] = n((C - D) * B + D, H)
						}
					});
					return this[x](u)
				},
				blend: function(x) {
					if (this._rgba[3] === 1) {
						return this
					}
					var w = this._rgba.slice()
					  , v = w.pop()
					  , u = h(x)._rgba;
					return h(t.map(w, function(y, z) {
						return (1 - v) * u[z] + v * y
					}))
				},
				toRgbaString: function() {
					var v = "rgba("
					  , u = t.map(this._rgba, function(w, x) {
						return w == null ? (x > 2 ? 1 : 0) : w
					});
					if (u[3] === 1) {
						u.pop();
						v = "rgb("
					}
					return v + u.join() + ")"
				},
				toHslaString: function() {
					var v = "hsla("
					  , u = t.map(this.hsla(), function(w, x) {
						if (w == null) {
							w = x > 2 ? 1 : 0
						}
						if (x && x < 3) {
							w = Math.round(w * 100) + "%"
						}
						return w
					});
					if (u[3] === 1) {
						u.pop();
						v = "hsl("
					}
					return v + u.join() + ")"
				},
				toHexString: function(u) {
					var v = this._rgba.slice()
					  , w = v.pop();
					if (u) {
						v.push(~~(w * 255))
					}
					return "#" + t.map(v, function(x) {
						x = (x || 0).toString(16);
						return x.length === 1 ? "0" + x : x
					}).join("")
				},
				toString: function() {
					return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
				}
			});
			h.fn.parse.prototype = h.fn;
			function f(w, v, u) {
				u = (u + 1) % 1;
				if (u * 6 < 1) {
					return w + (v - w) * u * 6
				}
				if (u * 2 < 1) {
					return v
				}
				if (u * 3 < 2) {
					return w + (v - w) * ((2 / 3) - u) * 6
				}
				return w
			}
			o.hsla.to = function(w) {
				if (w[0] == null || w[1] == null || w[2] == null) {
					return [null, null, null, w[3]]
				}
				var u = w[0] / 255, z = w[1] / 255, A = w[2] / 255, C = w[3], B = Math.max(u, z, A), x = Math.min(u, z, A), D = B - x, E = B + x, v = E * 0.5, y, F;
				if (x === B) {
					y = 0
				} else {
					if (u === B) {
						y = (60 * (z - A) / D) + 360
					} else {
						if (z === B) {
							y = (60 * (A - u) / D) + 120
						} else {
							y = (60 * (u - z) / D) + 240
						}
					}
				}
				if (D === 0) {
					F = 0
				} else {
					if (v <= 0.5) {
						F = D / E
					} else {
						F = D / (2 - E)
					}
				}
				return [Math.round(y) % 360, F, v, C == null ? 1 : C]
			}
			;
			o.hsla.from = function(y) {
				if (y[0] == null || y[1] == null || y[2] == null) {
					return [null, null, null, y[3]]
				}
				var x = y[0] / 360
				  , w = y[1]
				  , v = y[2]
				  , u = y[3]
				  , z = v <= 0.5 ? v * (1 + w) : v + w - v * w
				  , A = 2 * v - z;
				return [Math.round(f(A, z, x + (1 / 3)) * 255), Math.round(f(A, z, x) * 255), Math.round(f(A, z, x - (1 / 3)) * 255), u]
			}
			;
			q(o, function(v, x) {
				var w = x.props
				  , u = x.cache
				  , z = x.to
				  , y = x.from;
				h.fn[v] = function(E) {
					if (z && !this[u]) {
						this[u] = z(this._rgba)
					}
					if (E === g) {
						return this[u].slice()
					}
					var B, D = t.type(E), A = (D === "array" || D === "object") ? E : arguments, C = this[u].slice();
					q(w, function(F, H) {
						var G = A[D === "object" ? F : H.idx];
						if (G == null) {
							G = C[H.idx]
						}
						C[H.idx] = n(G, H)
					});
					if (y) {
						B = h(y(C));
						B[u] = C;
						return B
					} else {
						return h(C)
					}
				}
				;
				q(w, function(A, B) {
					if (h.fn[A]) {
						return
					}
					h.fn[A] = function(F) {
						var H = t.type(F), E = (A === "alpha" ? (this._hsla ? "hsla" : "rgba") : v), D = this[E](), G = D[B.idx], C;
						if (H === "undefined") {
							return G
						}
						if (H === "function") {
							F = F.call(this, G);
							H = t.type(F)
						}
						if (F == null && B.empty) {
							return this
						}
						if (H === "string") {
							C = m.exec(F);
							if (C) {
								F = G + parseFloat(C[2]) * (C[1] === "+" ? 1 : -1)
							}
						}
						D[B.idx] = F;
						return this[E](D)
					}
				})
			});
			h.hook = function(v) {
				var u = v.split(" ");
				q(u, function(w, x) {
					t.cssHooks[x] = {
						set: function(B, C) {
							var z, A, y = "";
							if (C !== "transparent" && (t.type(C) !== "string" || (z = k(C)))) {
								C = h(z || C);
								if (!r.rgba && C._rgba[3] !== 1) {
									A = x === "backgroundColor" ? B.parentNode : B;
									while ((y === "" || y === "transparent") && A && A.style) {
										try {
											y = t.css(A, "backgroundColor");
											A = A.parentNode
										} catch (D) {}
									}
									C = C.blend(y && y !== "transparent" ? y : "_default")
								}
								C = C.toRgbaString()
							}
							try {
								B.style[x] = C
							} catch (D) {}
						}
					};
					t.fx.step[x] = function(y) {
						if (!y.colorInit) {
							y.start = h(y.elem, x);
							y.end = h(y.end);
							y.colorInit = true
						}
						t.cssHooks[x].set(y.elem, y.start.transition(y.end, y.pos))
					}
				})
			}
			;
			h.hook(p);
			t.cssHooks.borderColor = {
				expand: function(v) {
					var u = {};
					q(["Top", "Right", "Bottom", "Left"], function(x, w) {
						u["border" + w + "Color"] = v
					});
					return u
				}
			};
			d = t.Color.names = {
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
			var e = ["add", "remove", "toggle"]
			  , f = {
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
			a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(h, k) {
				a.fx.step[k] = function(l) {
					if (l.end !== "none" && !l.setAttr || l.pos === 1 && !l.setAttr) {
						jQuery.style(l.elem, k, l.end);
						l.setAttr = true
					}
				}
			});
			function g(n) {
				var k, h, l = n.ownerDocument.defaultView ? n.ownerDocument.defaultView.getComputedStyle(n, null) : n.currentStyle, m = {};
				if (l && l.length && l[0] && l[l[0]]) {
					h = l.length;
					while (h--) {
						k = l[h];
						if (typeof l[k] === "string") {
							m[a.camelCase(k)] = l[k]
						}
					}
				} else {
					for (k in l) {
						if (typeof l[k] === "string") {
							m[k] = l[k]
						}
					}
				}
				return m
			}
			function d(h, l) {
				var n = {}, k, m;
				for (k in l) {
					m = l[k];
					if (h[k] !== m) {
						if (!f[k]) {
							if (a.fx.step[k] || !isNaN(parseFloat(m))) {
								n[k] = m
							}
						}
					}
				}
				return n
			}
			if (!a.fn.addBack) {
				a.fn.addBack = function(h) {
					return this.add(h == null ? this.prevObject : this.prevObject.filter(h))
				}
			}
			a.effects.animateClass = function(h, k, n, m) {
				var l = a.speed(k, n, m);
				return this.queue(function() {
					var q = a(this), o = q.attr("class") || "", p, r = l.children ? q.find("*").addBack() : q;
					r = r.map(function() {
						var s = a(this);
						return {
							el: s,
							start: g(this)
						}
					});
					p = function() {
						a.each(e, function(s, t) {
							if (h[t]) {
								q[t + "Class"](h[t])
							}
						})
					}
					;
					p();
					r = r.map(function() {
						this.end = g(this.el[0]);
						this.diff = d(this.start, this.end);
						return this
					});
					q.attr("class", o);
					r = r.map(function() {
						var u = this
						  , s = a.Deferred()
						  , t = a.extend({}, l, {
							queue: false,
							complete: function() {
								s.resolve(u)
							}
						});
						this.el.animate(this.diff, t);
						return s.promise()
					});
					a.when.apply(a, r.get()).done(function() {
						p();
						a.each(arguments, function() {
							var s = this.el;
							a.each(this.diff, function(t) {
								s.css(t, "")
							})
						});
						l.complete.call(q[0])
					})
				})
			}
			;
			a.fn.extend({
				addClass: (function(h) {
					return function(l, k, n, m) {
						return k ? a.effects.animateClass.call(this, {
							add: l
						}, k, n, m) : h.apply(this, arguments)
					}
				}
				)(a.fn.addClass),
				removeClass: (function(h) {
					return function(l, k, n, m) {
						return arguments.length > 1 ? a.effects.animateClass.call(this, {
							remove: l
						}, k, n, m) : h.apply(this, arguments)
					}
				}
				)(a.fn.removeClass),
				toggleClass: (function(h) {
					return function(m, l, k, o, n) {
						if (typeof l === "boolean" || l === c) {
							if (!k) {
								return h.apply(this, arguments)
							} else {
								return a.effects.animateClass.call(this, (l ? {
									add: m
								} : {
									remove: m
								}), k, o, n)
							}
						} else {
							return a.effects.animateClass.call(this, {
								toggle: m
							}, l, k, o)
						}
					}
				}
				)(a.fn.toggleClass),
				switchClass: function(h, l, k, n, m) {
					return a.effects.animateClass.call(this, {
						add: l,
						remove: h
					}, k, n, m)
				}
			})
		}
		)();
		(function() {
			a.extend(a.effects, {
				version: "1.10.3",
				save: function(g, h) {
					for (var f = 0; f < h.length; f++) {
						if (h[f] !== null) {
							g.data(b + h[f], g[0].style[h[f]])
						}
					}
				},
				restore: function(g, k) {
					var h, f;
					for (f = 0; f < k.length; f++) {
						if (k[f] !== null) {
							h = g.data(b + k[f]);
							if (h === c) {
								h = ""
							}
							g.css(k[f], h)
						}
					}
				},
				setMode: function(f, g) {
					if (g === "toggle") {
						g = f.is(":hidden") ? "show" : "hide"
					}
					return g
				},
				getBaseline: function(g, h) {
					var k, f;
					switch (g[0]) {
					case "top":
						k = 0;
						break;
					case "middle":
						k = 0.5;
						break;
					case "bottom":
						k = 1;
						break;
					default:
						k = g[0] / h.height
					}
					switch (g[1]) {
					case "left":
						f = 0;
						break;
					case "center":
						f = 0.5;
						break;
					case "right":
						f = 1;
						break;
					default:
						f = g[1] / h.width
					}
					return {
						x: f,
						y: k
					}
				},
				createWrapper: function(g) {
					if (g.parent().is(".ui-effects-wrapper")) {
						return g.parent()
					}
					var h = {
						width: g.outerWidth(true),
						height: g.outerHeight(true),
						"float": g.css("float")
					}
					  , m = a("<div></div>").addClass("ui-effects-wrapper").css({
						fontSize: "100%",
						background: "transparent",
						border: "none",
						margin: 0,
						padding: 0
					})
					  , f = {
						width: g.width(),
						height: g.height()
					}
					  , l = document.activeElement;
					try {
						l.id
					} catch (k) {
						l = document.body
					}
					g.wrap(m);
					if (g[0] === l || a.contains(g[0], l)) {
						a(l).focus()
					}
					m = g.parent();
					if (g.css("position") === "static") {
						m.css({
							position: "relative"
						});
						g.css({
							position: "relative"
						})
					} else {
						a.extend(h, {
							position: g.css("position"),
							zIndex: g.css("z-index")
						});
						a.each(["top", "left", "bottom", "right"], function(n, o) {
							h[o] = g.css(o);
							if (isNaN(parseInt(h[o], 10))) {
								h[o] = "auto"
							}
						});
						g.css({
							position: "relative",
							top: 0,
							left: 0,
							right: "auto",
							bottom: "auto"
						})
					}
					g.css(f);
					return m.css(h).show()
				},
				removeWrapper: function(f) {
					var g = document.activeElement;
					if (f.parent().is(".ui-effects-wrapper")) {
						f.parent().replaceWith(f);
						if (f[0] === g || a.contains(f[0], g)) {
							a(g).focus()
						}
					}
					return f
				},
				setTransition: function(g, k, f, h) {
					h = h || {};
					a.each(k, function(m, l) {
						var n = g.cssUnit(l);
						if (n[0] > 0) {
							h[l] = n[0] * f + n[1]
						}
					});
					return h
				}
			});
			function d(g, f, h, k) {
				if (a.isPlainObject(g)) {
					f = g;
					g = g.effect
				}
				g = {
					effect: g
				};
				if (f == null) {
					f = {}
				}
				if (a.isFunction(f)) {
					k = f;
					h = null;
					f = {}
				}
				if (typeof f === "number" || a.fx.speeds[f]) {
					k = h;
					h = f;
					f = {}
				}
				if (a.isFunction(h)) {
					k = h;
					h = null
				}
				if (f) {
					a.extend(g, f)
				}
				h = h || f.duration;
				g.duration = a.fx.off ? 0 : typeof h === "number" ? h : h in a.fx.speeds ? a.fx.speeds[h] : a.fx.speeds._default;
				g.complete = k || f.complete;
				return g
			}
			function e(f) {
				if (!f || typeof f === "number" || a.fx.speeds[f]) {
					return true
				}
				if (typeof f === "string" && !a.effects.effect[f]) {
					return true
				}
				if (a.isFunction(f)) {
					return true
				}
				if (typeof f === "object" && !f.effect) {
					return true
				}
				return false
			}
			a.fn.extend({
				effect: function() {
					var h = d.apply(this, arguments)
					  , l = h.mode
					  , f = h.queue
					  , g = a.effects.effect[h.effect];
					if (a.fx.off || !g) {
						if (l) {
							return this[l](h.duration, h.complete)
						} else {
							return this.each(function() {
								if (h.complete) {
									h.complete.call(this)
								}
							})
						}
					}
					function k(o) {
						var p = a(this)
						  , n = h.complete
						  , q = h.mode;
						function m() {
							if (a.isFunction(n)) {
								n.call(p[0])
							}
							if (a.isFunction(o)) {
								o()
							}
						}
						if (p.is(":hidden") ? q === "hide" : q === "show") {
							p[q]();
							m()
						} else {
							g.call(p[0], h, m)
						}
					}
					return f === false ? this.each(k) : this.queue(f || "fx", k)
				},
				show: (function(f) {
					return function(h) {
						if (e(h)) {
							return f.apply(this, arguments)
						} else {
							var g = d.apply(this, arguments);
							g.mode = "show";
							return this.effect.call(this, g)
						}
					}
				}
				)(a.fn.show),
				hide: (function(f) {
					return function(h) {
						if (e(h)) {
							return f.apply(this, arguments)
						} else {
							var g = d.apply(this, arguments);
							g.mode = "hide";
							return this.effect.call(this, g)
						}
					}
				}
				)(a.fn.hide),
				toggle: (function(f) {
					return function(h) {
						if (e(h) || typeof h === "boolean") {
							return f.apply(this, arguments)
						} else {
							var g = d.apply(this, arguments);
							g.mode = "toggle";
							return this.effect.call(this, g)
						}
					}
				}
				)(a.fn.toggle),
				cssUnit: function(f) {
					var g = this.css(f)
					  , h = [];
					a.each(["em", "px", "%", "pt"], function(k, l) {
						if (g.indexOf(l) > 0) {
							h = [parseFloat(g), l]
						}
					});
					return h
				}
			})
		}
		)();
		(function() {
			var d = {};
			a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(f, e) {
				d[e] = function(g) {
					return Math.pow(g, f + 2)
				}
			});
			a.extend(d, {
				Sine: function(e) {
					return 1 - Math.cos(e * Math.PI / 2)
				},
				Circ: function(e) {
					return 1 - Math.sqrt(1 - e * e)
				},
				Elastic: function(e) {
					return e === 0 || e === 1 ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin(((e - 1) * 80 - 7.5) * Math.PI / 15)
				},
				Back: function(e) {
					return e * e * (3 * e - 2)
				},
				Bounce: function(g) {
					var e, f = 4;
					while (g < ((e = Math.pow(2, --f)) - 1) / 11) {}
					return 1 / Math.pow(4, 3 - f) - 7.5625 * Math.pow((e * 3 - 2) / 22 - g, 2)
				}
			});
			a.each(d, function(f, e) {
				a.easing["easeIn" + f] = e;
				a.easing["easeOut" + f] = function(g) {
					return 1 - e(1 - g)
				}
				;
				a.easing["easeInOut" + f] = function(g) {
					return g < 0.5 ? e(g * 2) / 2 : 1 - e(g * -2 + 2) / 2
				}
			})
		}
		)()
	}
	)(jQuery);
	(function(d, e) {
		var b = 0
		  , c = {}
		  , a = {};
		c.height = c.paddingTop = c.paddingBottom = c.borderTopWidth = c.borderBottomWidth = "hide";
		a.height = a.paddingTop = a.paddingBottom = a.borderTopWidth = a.borderBottomWidth = "show";
		d.widget("ui.accordion", {
			version: "1.10.3",
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
				var f = this.options;
				this.prevShow = this.prevHide = d();
				this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
				if (!f.collapsible && (f.active === false || f.active == null)) {
					f.active = 0
				}
				this._processPanels();
				if (f.active < 0) {
					f.active += this.headers.length
				}
				this._refresh()
			},
			_getCreateEventData: function() {
				return {
					header: this.active,
					panel: !this.active.length ? d() : this.active.next(),
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
			_keydown: function(k) {
				if (k.altKey || k.ctrlKey) {
					return
				}
				var l = d.ui.keyCode
				  , h = this.headers.length
				  , f = this.headers.index(k.target)
				  , g = false;
				switch (k.keyCode) {
				case l.RIGHT:
				case l.DOWN:
					g = this.headers[(f + 1) % h];
					break;
				case l.LEFT:
				case l.UP:
					g = this.headers[(f - 1 + h) % h];
					break;
				case l.SPACE:
				case l.ENTER:
					this._eventHandler(k);
					break;
				case l.HOME:
					g = this.headers[0];
					break;
				case l.END:
					g = this.headers[h - 1];
					break
				}
				if (g) {
					d(k.target).attr("tabIndex", -1);
					d(g).attr("tabIndex", 0);
					g.focus();
					k.preventDefault()
				}
			},
			_panelKeyDown: function(f) {
				if (f.keyCode === d.ui.keyCode.UP && f.ctrlKey) {
					d(f.currentTarget).prev().focus()
				}
			},
			refresh: function() {
				var f = this.options;
				this._processPanels();
				if ((f.active === false && f.collapsible === true) || !this.headers.length) {
					f.active = false;
					this.active = d()
				} else {
					if (f.active === false) {
						this._activate(0)
					} else {
						if (this.active.length && !d.contains(this.element[0], this.active[0])) {
							if (this.headers.length === this.headers.find(".ui-state-disabled").length) {
								f.active = false;
								this.active = d()
							} else {
								this._activate(Math.max(0, f.active - 1))
							}
						} else {
							f.active = this.headers.index(this.active)
						}
					}
				}
				this._destroyIcons();
				this._refresh()
			},
			_processPanels: function() {
				this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
				this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
			},
			_refresh: function() {
				var l, h = this.options, g = h.heightStyle, k = this.element.parent(), f = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++b);
				this.active = this._findActive(h.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
				this.active.next().addClass("ui-accordion-content-active").show();
				this.headers.attr("role", "tab").each(function(p) {
					var q = d(this)
					  , o = q.attr("id")
					  , m = q.next()
					  , n = m.attr("id");
					if (!o) {
						o = f + "-header-" + p;
						q.attr("id", o)
					}
					if (!n) {
						n = f + "-panel-" + p;
						m.attr("id", n)
					}
					q.attr("aria-controls", n);
					m.attr("aria-labelledby", o)
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
				this._createIcons();
				this._setupEvents(h.event);
				if (g === "fill") {
					l = k.height();
					this.element.siblings(":visible").each(function() {
						var n = d(this)
						  , m = n.css("position");
						if (m === "absolute" || m === "fixed") {
							return
						}
						l -= n.outerHeight(true)
					});
					this.headers.each(function() {
						l -= d(this).outerHeight(true)
					});
					this.headers.next().each(function() {
						d(this).height(Math.max(0, l - d(this).innerHeight() + d(this).height()))
					}).css("overflow", "auto")
				} else {
					if (g === "auto") {
						l = 0;
						this.headers.next().each(function() {
							l = Math.max(l, d(this).css("height", "").height())
						}).height(l)
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
				var f = {
					keydown: "_keydown"
				};
				if (g) {
					d.each(g.split(" "), function(k, h) {
						f[h] = "_eventHandler"
					})
				}
				this._off(this.headers.add(this.headers.next()));
				this._on(this.headers, f);
				this._on(this.headers.next(), {
					keydown: "_panelKeyDown"
				});
				this._hoverable(this.headers);
				this._focusable(this.headers)
			},
			_eventHandler: function(f) {
				var p = this.options
				  , k = this.active
				  , l = d(f.currentTarget)
				  , n = l[0] === k[0]
				  , g = n && p.collapsible
				  , h = g ? d() : l.next()
				  , m = k.next()
				  , o = {
					oldHeader: k,
					oldPanel: m,
					newHeader: g ? d() : l,
					newPanel: h
				};
				f.preventDefault();
				if ((n && !p.collapsible) || (this._trigger("beforeActivate", f, o) === false)) {
					return
				}
				p.active = g ? false : this.headers.index(l);
				this.active = n ? d() : l;
				this._toggle(o);
				k.removeClass("ui-accordion-header-active ui-state-active");
				if (p.icons) {
					k.children(".ui-accordion-header-icon").removeClass(p.icons.activeHeader).addClass(p.icons.header)
				}
				if (!n) {
					l.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
					if (p.icons) {
						l.children(".ui-accordion-header-icon").removeClass(p.icons.header).addClass(p.icons.activeHeader)
					}
					l.next().addClass("ui-accordion-content-active")
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
			_animate: function(f, p, l) {
				var o, n, k, m = this, q = 0, r = f.length && (!p.length || (f.index() < p.index())), h = this.options.animate || {}, s = r && h.down || h, g = function() {
					m._toggleComplete(l)
				};
				if (typeof s === "number") {
					k = s
				}
				if (typeof s === "string") {
					n = s
				}
				n = n || s.easing || h.easing;
				k = k || s.duration || h.duration;
				if (!p.length) {
					return f.animate(a, k, n, g)
				}
				if (!f.length) {
					return p.animate(c, k, n, g)
				}
				o = f.show().outerHeight();
				p.animate(c, {
					duration: k,
					easing: n,
					step: function(t, u) {
						u.now = Math.round(t)
					}
				});
				f.hide().animate(a, {
					duration: k,
					easing: n,
					complete: g,
					step: function(t, u) {
						u.now = Math.round(t);
						if (u.prop !== "height") {
							q += u.now
						} else {
							if (m.options.heightStyle !== "content") {
								u.now = Math.round(o - p.outerHeight() - q);
								q = 0
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
		})
	}
	)(jQuery);
	(function(a, b) {
		var c = 0;
		a.widget("ui.autocomplete", {
			version: "1.10.3",
			defaultElement: "<input>",
			options: {
				appendTo: null,
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
				var f, d, g, k = this.element[0].nodeName.toLowerCase(), h = k === "textarea", e = k === "input";
				this.isMultiLine = h ? true : e ? false : this.element.prop("isContentEditable");
				this.valueMethod = this.element[h || e ? "val" : "text"];
				this.isNewMenu = true;
				this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
				this._on(this.element, {
					keydown: function(l) {
						if (this.element.prop("readOnly")) {
							f = true;
							g = true;
							d = true;
							return
						}
						f = false;
						g = false;
						d = false;
						var m = a.ui.keyCode;
						switch (l.keyCode) {
						case m.PAGE_UP:
							f = true;
							this._move("previousPage", l);
							break;
						case m.PAGE_DOWN:
							f = true;
							this._move("nextPage", l);
							break;
						case m.UP:
							f = true;
							this._keyEvent("previous", l);
							break;
						case m.DOWN:
							f = true;
							this._keyEvent("next", l);
							break;
						case m.ENTER:
						case m.NUMPAD_ENTER:
							if (this.menu.active) {
								f = true;
								l.preventDefault();
								this.menu.select(l)
							}
							break;
						case m.TAB:
							if (this.menu.active) {
								this.menu.select(l)
							}
							break;
						case m.ESCAPE:
							if (this.menu.element.is(":visible")) {
								this._value(this.term);
								this.close(l);
								l.preventDefault()
							}
							break;
						default:
							d = true;
							this._searchTimeout(l);
							break
						}
					},
					keypress: function(l) {
						if (f) {
							f = false;
							if (!this.isMultiLine || this.menu.element.is(":visible")) {
								l.preventDefault()
							}
							return
						}
						if (d) {
							return
						}
						var m = a.ui.keyCode;
						switch (l.keyCode) {
						case m.PAGE_UP:
							this._move("previousPage", l);
							break;
						case m.PAGE_DOWN:
							this._move("nextPage", l);
							break;
						case m.UP:
							this._keyEvent("previous", l);
							break;
						case m.DOWN:
							this._keyEvent("next", l);
							break
						}
					},
					input: function(l) {
						if (g) {
							g = false;
							l.preventDefault();
							return
						}
						this._searchTimeout(l)
					},
					focus: function() {
						this.selectedItem = null;
						this.previous = this._value()
					},
					blur: function(l) {
						if (this.cancelBlur) {
							delete this.cancelBlur;
							return
						}
						clearTimeout(this.searching);
						this.close(l);
						this._change(l)
					}
				});
				this._initSource();
				this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
					role: null
				}).hide().data("ui-menu");
				this._on(this.menu.element, {
					mousedown: function(l) {
						l.preventDefault();
						this.cancelBlur = true;
						this._delay(function() {
							delete this.cancelBlur
						});
						var m = this.menu.element[0];
						if (!a(l.target).closest(".ui-menu-item").length) {
							this._delay(function() {
								var n = this;
								this.document.one("mousedown", function(o) {
									if (o.target !== n.element[0] && o.target !== m && !a.contains(m, o.target)) {
										n.close()
									}
								})
							})
						}
					},
					menufocus: function(m, n) {
						if (this.isNewMenu) {
							this.isNewMenu = false;
							if (m.originalEvent && /^mouse/.test(m.originalEvent.type)) {
								this.menu.blur();
								this.document.one("mousemove", function() {
									a(m.target).trigger(m.originalEvent)
								});
								return
							}
						}
						var l = n.item.data("ui-autocomplete-item");
						if (false !== this._trigger("focus", m, {
							item: l
						})) {
							if (m.originalEvent && /^key/.test(m.originalEvent.type)) {
								this._value(l.value)
							}
						} else {
							this.liveRegion.text(l.value)
						}
					},
					menuselect: function(n, o) {
						var m = o.item.data("ui-autocomplete-item")
						  , l = this.previous;
						if (this.element[0] !== this.document[0].activeElement) {
							this.element.focus();
							this.previous = l;
							this._delay(function() {
								this.previous = l;
								this.selectedItem = m
							})
						}
						if (false !== this._trigger("select", n, {
							item: m
						})) {
							this._value(m.value)
						}
						this.term = this._value();
						this.close(n);
						this.selectedItem = m
					}
				});
				this.liveRegion = a("<span>", {
					role: "status",
					"aria-live": "polite"
				}).addClass("ui-helper-hidden-accessible").insertBefore(this.element);
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
					this.menu.element.appendTo(this._appendTo())
				}
				if (d === "disabled" && e && this.xhr) {
					this.xhr.abort()
				}
			},
			_appendTo: function() {
				var d = this.options.appendTo;
				if (d) {
					d = d.jquery || d.nodeType ? a(d) : this.document.find(d).eq(0)
				}
				if (!d) {
					d = this.element.closest(".ui-front")
				}
				if (!d.length) {
					d = this.document[0].body
				}
				return d
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
								success: function(k) {
									g(k)
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
				var e = this.menu.element.empty();
				this._renderMenu(e, d);
				this.isNewMenu = true;
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
		var m, e, a, h, k = "ui-button ui-widget ui-state-default ui-corner-all", c = "ui-state-hover ui-state-active ", g = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", l = function() {
			var n = f(this);
			setTimeout(function() {
				n.find(":ui-button").button("refresh")
			}, 1)
		}, d = function(o) {
			var n = o.name
			  , p = o.form
			  , q = f([]);
			if (n) {
				n = n.replace(/'/g, "\\'");
				if (p) {
					q = f(p).find("[name='" + n + "']")
				} else {
					q = f("[name='" + n + "']", o.ownerDocument).filter(function() {
						return !this.form
					})
				}
			}
			return q
		};
		f.widget("ui.button", {
			version: "1.10.3",
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
				this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, l);
				if (typeof this.options.disabled !== "boolean") {
					this.options.disabled = !!this.element.prop("disabled")
				} else {
					this.element.prop("disabled", this.options.disabled)
				}
				this._determineButtonType();
				this.hasTitle = !!this.buttonElement.attr("title");
				var q = this
				  , o = this.options
				  , r = this.type === "checkbox" || this.type === "radio"
				  , p = !r ? "ui-state-active" : ""
				  , n = "ui-state-focus";
				if (o.label === null) {
					o.label = (this.type === "input" ? this.buttonElement.val() : this.buttonElement.html())
				}
				this._hoverable(this.buttonElement);
				this.buttonElement.addClass(k).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
					if (o.disabled) {
						return
					}
					if (this === m) {
						f(this).addClass("ui-state-active")
					}
				}).bind("mouseleave" + this.eventNamespace, function() {
					if (o.disabled) {
						return
					}
					f(this).removeClass(p)
				}).bind("click" + this.eventNamespace, function(s) {
					if (o.disabled) {
						s.preventDefault();
						s.stopImmediatePropagation()
					}
				});
				this.element.bind("focus" + this.eventNamespace, function() {
					q.buttonElement.addClass(n)
				}).bind("blur" + this.eventNamespace, function() {
					q.buttonElement.removeClass(n)
				});
				if (r) {
					this.element.bind("change" + this.eventNamespace, function() {
						if (h) {
							return
						}
						q.refresh()
					});
					this.buttonElement.bind("mousedown" + this.eventNamespace, function(s) {
						if (o.disabled) {
							return
						}
						h = false;
						e = s.pageX;
						a = s.pageY
					}).bind("mouseup" + this.eventNamespace, function(s) {
						if (o.disabled) {
							return
						}
						if (e !== s.pageX || a !== s.pageY) {
							h = true
						}
					})
				}
				if (this.type === "checkbox") {
					this.buttonElement.bind("click" + this.eventNamespace, function() {
						if (o.disabled || h) {
							return false
						}
					})
				} else {
					if (this.type === "radio") {
						this.buttonElement.bind("click" + this.eventNamespace, function() {
							if (o.disabled || h) {
								return false
							}
							f(this).addClass("ui-state-active");
							q.buttonElement.attr("aria-pressed", "true");
							var s = q.element[0];
							d(s).not(s).map(function() {
								return f(this).button("widget")[0]
							}).removeClass("ui-state-active").attr("aria-pressed", "false")
						})
					} else {
						this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
							if (o.disabled) {
								return false
							}
							f(this).addClass("ui-state-active");
							m = this;
							q.document.one("mouseup", function() {
								m = null
							})
						}).bind("mouseup" + this.eventNamespace, function() {
							if (o.disabled) {
								return false
							}
							f(this).removeClass("ui-state-active")
						}).bind("keydown" + this.eventNamespace, function(s) {
							if (o.disabled) {
								return false
							}
							if (s.keyCode === f.ui.keyCode.SPACE || s.keyCode === f.ui.keyCode.ENTER) {
								f(this).addClass("ui-state-active")
							}
						}).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
							f(this).removeClass("ui-state-active")
						});
						if (this.buttonElement.is("a")) {
							this.buttonElement.keyup(function(s) {
								if (s.keyCode === f.ui.keyCode.SPACE) {
									f(this).click()
								}
							})
						}
					}
				}
				this._setOption("disabled", o.disabled);
				this._resetButton()
			},
			_determineButtonType: function() {
				var n, p, o;
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
					n = this.element.parents().last();
					p = "label[for='" + this.element.attr("id") + "']";
					this.buttonElement = n.find(p);
					if (!this.buttonElement.length) {
						n = n.length ? n.siblings() : this.element.siblings();
						this.buttonElement = n.filter(p);
						if (!this.buttonElement.length) {
							this.buttonElement = n.find(p)
						}
					}
					this.element.addClass("ui-helper-hidden-accessible");
					o = this.element.is(":checked");
					if (o) {
						this.buttonElement.addClass("ui-state-active")
					}
					this.buttonElement.prop("aria-pressed", o)
				} else {
					this.buttonElement = this.element
				}
			},
			widget: function() {
				return this.buttonElement
			},
			_destroy: function() {
				this.element.removeClass("ui-helper-hidden-accessible");
				this.buttonElement.removeClass(k + " " + c + " " + g).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
				if (!this.hasTitle) {
					this.buttonElement.removeAttr("title")
				}
			},
			_setOption: function(n, o) {
				this._super(n, o);
				if (n === "disabled") {
					if (o) {
						this.element.prop("disabled", true)
					} else {
						this.element.prop("disabled", false)
					}
					return
				}
				this._resetButton()
			},
			refresh: function() {
				var n = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
				if (n !== this.options.disabled) {
					this._setOption("disabled", n)
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
				var r = this.buttonElement.removeClass(g)
				  , p = f("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(r.empty()).text()
				  , o = this.options.icons
				  , n = o.primary && o.secondary
				  , q = [];
				if (o.primary || o.secondary) {
					if (this.options.text) {
						q.push("ui-button-text-icon" + (n ? "s" : (o.primary ? "-primary" : "-secondary")))
					}
					if (o.primary) {
						r.prepend("<span class='ui-button-icon-primary ui-icon " + o.primary + "'></span>")
					}
					if (o.secondary) {
						r.append("<span class='ui-button-icon-secondary ui-icon " + o.secondary + "'></span>")
					}
					if (!this.options.text) {
						q.push(n ? "ui-button-icons-only" : "ui-button-icon-only");
						if (!this.hasTitle) {
							r.attr("title", f.trim(p))
						}
					}
				} else {
					q.push("ui-button-text-only")
				}
				r.addClass(q.join(" "))
			}
		});
		f.widget("ui.buttonset", {
			version: "1.10.3",
			options: {
				items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
			},
			_create: function() {
				this.element.addClass("ui-buttonset")
			},
			_init: function() {
				this.refresh()
			},
			_setOption: function(n, o) {
				if (n === "disabled") {
					this.buttons.button("option", n, o)
				}
				this._super(n, o)
			},
			refresh: function() {
				var n = this.element.css("direction") === "rtl";
				this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
					return f(this).button("widget")[0]
				}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(n ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(n ? "ui-corner-left" : "ui-corner-right").end().end()
			},
			_destroy: function() {
				this.element.removeClass("ui-buttonset");
				this.buttons.map(function() {
					return f(this).button("widget")[0]
				}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
			}
		})
	}(jQuery));
	(function(e, g) {
		e.extend(e.ui, {
			datepicker: {
				version: "1.10.3"
			}
		});
		var f = "datepicker", c;
		function b() {
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
			e.extend(this._defaults, this.regional[""]);
			this.dpDiv = d(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
		}
		e.extend(b.prototype, {
			markerClassName: "hasDatepicker",
			maxRows: 4,
			_widgetDatepicker: function() {
				return this.dpDiv
			},
			setDefaults: function(h) {
				a(this._defaults, h || {});
				return this
			},
			_attachDatepicker: function(m, h) {
				var n, l, k;
				n = m.nodeName.toLowerCase();
				l = (n === "div" || n === "span");
				if (!m.id) {
					this.uuid += 1;
					m.id = "dp" + this.uuid
				}
				k = this._newInst(e(m), l);
				k.settings = e.extend({}, h || {});
				if (n === "input") {
					this._connectDatepicker(m, k)
				} else {
					if (l) {
						this._inlineDatepicker(m, k)
					}
				}
			},
			_newInst: function(k, h) {
				var l = k[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
				return {
					id: l,
					input: k,
					selectedDay: 0,
					selectedMonth: 0,
					selectedYear: 0,
					drawMonth: 0,
					drawYear: 0,
					inline: h,
					dpDiv: (!h ? this.dpDiv : d(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))
				}
			},
			_connectDatepicker: function(l, k) {
				var h = e(l);
				k.append = e([]);
				k.trigger = e([]);
				if (h.hasClass(this.markerClassName)) {
					return
				}
				this._attachments(h, k);
				h.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
				this._autoSize(k);
				e.data(l, f, k);
				if (k.settings.disabled) {
					this._disableDatepicker(l)
				}
			},
			_attachments: function(l, o) {
				var k, n, h, p = this._get(o, "appendText"), m = this._get(o, "isRTL");
				if (o.append) {
					o.append.remove()
				}
				if (p) {
					o.append = e("<span class='" + this._appendClass + "'>" + p + "</span>");
					l[m ? "before" : "after"](o.append)
				}
				l.unbind("focus", this._showDatepicker);
				if (o.trigger) {
					o.trigger.remove()
				}
				k = this._get(o, "showOn");
				if (k === "focus" || k === "both") {
					l.focus(this._showDatepicker)
				}
				if (k === "button" || k === "both") {
					n = this._get(o, "buttonText");
					h = this._get(o, "buttonImage");
					o.trigger = e(this._get(o, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
						src: h,
						alt: n,
						title: n
					}) : e("<button type='button'></button>").addClass(this._triggerClass).html(!h ? n : e("<img/>").attr({
						src: h,
						alt: n,
						title: n
					})));
					l[m ? "before" : "after"](o.trigger);
					o.trigger.click(function() {
						if (e.datepicker._datepickerShowing && e.datepicker._lastInput === l[0]) {
							e.datepicker._hideDatepicker()
						} else {
							if (e.datepicker._datepickerShowing && e.datepicker._lastInput !== l[0]) {
								e.datepicker._hideDatepicker();
								e.datepicker._showDatepicker(l[0])
							} else {
								e.datepicker._showDatepicker(l[0])
							}
						}
						return false
					})
				}
			},
			_autoSize: function(p) {
				if (this._get(p, "autoSize") && !p.inline) {
					var m, k, l, o, n = new Date(2009,12 - 1,20), h = this._get(p, "dateFormat");
					if (h.match(/[DM]/)) {
						m = function(q) {
							k = 0;
							l = 0;
							for (o = 0; o < q.length; o++) {
								if (q[o].length > k) {
									k = q[o].length;
									l = o
								}
							}
							return l
						}
						;
						n.setMonth(m(this._get(p, (h.match(/MM/) ? "monthNames" : "monthNamesShort"))));
						n.setDate(m(this._get(p, (h.match(/DD/) ? "dayNames" : "dayNamesShort"))) + 20 - n.getDay())
					}
					p.input.attr("size", this._formatDate(p, n).length)
				}
			},
			_inlineDatepicker: function(k, h) {
				var l = e(k);
				if (l.hasClass(this.markerClassName)) {
					return
				}
				l.addClass(this.markerClassName).append(h.dpDiv);
				e.data(k, f, h);
				this._setDate(h, this._getDefaultDate(h), true);
				this._updateDatepicker(h);
				this._updateAlternate(h);
				if (h.settings.disabled) {
					this._disableDatepicker(k)
				}
				h.dpDiv.css("display", "block")
			},
			_dialogDatepicker: function(q, k, o, l, p) {
				var h, t, n, s, r, m = this._dialogInst;
				if (!m) {
					this.uuid += 1;
					h = "dp" + this.uuid;
					this._dialogInput = e("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>");
					this._dialogInput.keydown(this._doKeyDown);
					e("body").append(this._dialogInput);
					m = this._dialogInst = this._newInst(this._dialogInput, false);
					m.settings = {};
					e.data(this._dialogInput[0], f, m)
				}
				a(m.settings, l || {});
				k = (k && k.constructor === Date ? this._formatDate(m, k) : k);
				this._dialogInput.val(k);
				this._pos = (p ? (p.length ? p : [p.pageX, p.pageY]) : null);
				if (!this._pos) {
					t = document.documentElement.clientWidth;
					n = document.documentElement.clientHeight;
					s = document.documentElement.scrollLeft || document.body.scrollLeft;
					r = document.documentElement.scrollTop || document.body.scrollTop;
					this._pos = [(t / 2) - 100 + s, (n / 2) - 150 + r]
				}
				this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
				m.settings.onSelect = o;
				this._inDialog = true;
				this.dpDiv.addClass(this._dialogClass);
				this._showDatepicker(this._dialogInput[0]);
				if (e.blockUI) {
					e.blockUI(this.dpDiv)
				}
				e.data(this._dialogInput[0], f, m);
				return this
			},
			_destroyDatepicker: function(l) {
				var m, h = e(l), k = e.data(l, f);
				if (!h.hasClass(this.markerClassName)) {
					return
				}
				m = l.nodeName.toLowerCase();
				e.removeData(l, f);
				if (m === "input") {
					k.append.remove();
					k.trigger.remove();
					h.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)
				} else {
					if (m === "div" || m === "span") {
						h.removeClass(this.markerClassName).empty()
					}
				}
			},
			_enableDatepicker: function(m) {
				var n, l, h = e(m), k = e.data(m, f);
				if (!h.hasClass(this.markerClassName)) {
					return
				}
				n = m.nodeName.toLowerCase();
				if (n === "input") {
					m.disabled = false;
					k.trigger.filter("button").each(function() {
						this.disabled = false
					}).end().filter("img").css({
						opacity: "1.0",
						cursor: ""
					})
				} else {
					if (n === "div" || n === "span") {
						l = h.children("." + this._inlineClass);
						l.children().removeClass("ui-state-disabled");
						l.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false)
					}
				}
				this._disabledInputs = e.map(this._disabledInputs, function(o) {
					return (o === m ? null : o)
				})
			},
			_disableDatepicker: function(m) {
				var n, l, h = e(m), k = e.data(m, f);
				if (!h.hasClass(this.markerClassName)) {
					return
				}
				n = m.nodeName.toLowerCase();
				if (n === "input") {
					m.disabled = true;
					k.trigger.filter("button").each(function() {
						this.disabled = true
					}).end().filter("img").css({
						opacity: "0.5",
						cursor: "default"
					})
				} else {
					if (n === "div" || n === "span") {
						l = h.children("." + this._inlineClass);
						l.children().addClass("ui-state-disabled");
						l.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true)
					}
				}
				this._disabledInputs = e.map(this._disabledInputs, function(o) {
					return (o === m ? null : o)
				});
				this._disabledInputs[this._disabledInputs.length] = m
			},
			_isDisabledDatepicker: function(k) {
				if (!k) {
					return false
				}
				for (var h = 0; h < this._disabledInputs.length; h++) {
					if (this._disabledInputs[h] === k) {
						return true
					}
				}
				return false
			},
			_getInst: function(k) {
				try {
					return e.data(k, f)
				} catch (h) {
					throw "Missing instance data for this datepicker"
				}
			},
			_optionDatepicker: function(p, k, o) {
				var l, h, n, q, m = this._getInst(p);
				if (arguments.length === 2 && typeof k === "string") {
					return (k === "defaults" ? e.extend({}, e.datepicker._defaults) : (m ? (k === "all" ? e.extend({}, m.settings) : this._get(m, k)) : null))
				}
				l = k || {};
				if (typeof k === "string") {
					l = {};
					l[k] = o
				}
				if (m) {
					if (this._curInst === m) {
						this._hideDatepicker()
					}
					h = this._getDateDatepicker(p, true);
					n = this._getMinMaxDate(m, "min");
					q = this._getMinMaxDate(m, "max");
					a(m.settings, l);
					if (n !== null && l.dateFormat !== g && l.minDate === g) {
						m.settings.minDate = this._formatDate(m, n)
					}
					if (q !== null && l.dateFormat !== g && l.maxDate === g) {
						m.settings.maxDate = this._formatDate(m, q)
					}
					if ("disabled"in l) {
						if (l.disabled) {
							this._disableDatepicker(p)
						} else {
							this._enableDatepicker(p)
						}
					}
					this._attachments(e(p), m);
					this._autoSize(m);
					this._setDate(m, h);
					this._updateAlternate(m);
					this._updateDatepicker(m)
				}
			},
			_changeDatepicker: function(l, h, k) {
				this._optionDatepicker(l, h, k)
			},
			_refreshDatepicker: function(k) {
				var h = this._getInst(k);
				if (h) {
					this._updateDatepicker(h)
				}
			},
			_setDateDatepicker: function(l, h) {
				var k = this._getInst(l);
				if (k) {
					this._setDate(k, h);
					this._updateDatepicker(k);
					this._updateAlternate(k)
				}
			},
			_getDateDatepicker: function(l, h) {
				var k = this._getInst(l);
				if (k && !k.inline) {
					this._setDateFromField(k, h)
				}
				return (k ? this._getDate(k) : null)
			},
			_doKeyDown: function(m) {
				var k, h, o, n = e.datepicker._getInst(m.target), p = true, l = n.dpDiv.is(".ui-datepicker-rtl");
				n._keyEvent = true;
				if (e.datepicker._datepickerShowing) {
					switch (m.keyCode) {
					case 9:
						e.datepicker._hideDatepicker();
						p = false;
						break;
					case 13:
						o = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", n.dpDiv);
						if (o[0]) {
							e.datepicker._selectDay(m.target, n.selectedMonth, n.selectedYear, o[0])
						}
						k = e.datepicker._get(n, "onSelect");
						if (k) {
							h = e.datepicker._formatDate(n);
							k.apply((n.input ? n.input[0] : null), [h, n])
						} else {
							e.datepicker._hideDatepicker()
						}
						return false;
					case 27:
						e.datepicker._hideDatepicker();
						break;
					case 33:
						e.datepicker._adjustDate(m.target, (m.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths")), "M");
						break;
					case 34:
						e.datepicker._adjustDate(m.target, (m.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths")), "M");
						break;
					case 35:
						if (m.ctrlKey || m.metaKey) {
							e.datepicker._clearDate(m.target)
						}
						p = m.ctrlKey || m.metaKey;
						break;
					case 36:
						if (m.ctrlKey || m.metaKey) {
							e.datepicker._gotoToday(m.target)
						}
						p = m.ctrlKey || m.metaKey;
						break;
					case 37:
						if (m.ctrlKey || m.metaKey) {
							e.datepicker._adjustDate(m.target, (l ? +1 : -1), "D")
						}
						p = m.ctrlKey || m.metaKey;
						if (m.originalEvent.altKey) {
							e.datepicker._adjustDate(m.target, (m.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths")), "M")
						}
						break;
					case 38:
						if (m.ctrlKey || m.metaKey) {
							e.datepicker._adjustDate(m.target, -7, "D")
						}
						p = m.ctrlKey || m.metaKey;
						break;
					case 39:
						if (m.ctrlKey || m.metaKey) {
							e.datepicker._adjustDate(m.target, (l ? -1 : +1), "D")
						}
						p = m.ctrlKey || m.metaKey;
						if (m.originalEvent.altKey) {
							e.datepicker._adjustDate(m.target, (m.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths")), "M")
						}
						break;
					case 40:
						if (m.ctrlKey || m.metaKey) {
							e.datepicker._adjustDate(m.target, +7, "D")
						}
						p = m.ctrlKey || m.metaKey;
						break;
					default:
						p = false
					}
				} else {
					if (m.keyCode === 36 && m.ctrlKey) {
						e.datepicker._showDatepicker(this)
					} else {
						p = false
					}
				}
				if (p) {
					m.preventDefault();
					m.stopPropagation()
				}
			},
			_doKeyPress: function(l) {
				var k, h, m = e.datepicker._getInst(l.target);
				if (e.datepicker._get(m, "constrainInput")) {
					k = e.datepicker._possibleChars(e.datepicker._get(m, "dateFormat"));
					h = String.fromCharCode(l.charCode == null ? l.keyCode : l.charCode);
					return l.ctrlKey || l.metaKey || (h < " " || !k || k.indexOf(h) > -1)
				}
			},
			_doKeyUp: function(l) {
				var h, m = e.datepicker._getInst(l.target);
				if (m.input.val() !== m.lastVal) {
					try {
						h = e.datepicker.parseDate(e.datepicker._get(m, "dateFormat"), (m.input ? m.input.val() : null), e.datepicker._getFormatConfig(m));
						if (h) {
							e.datepicker._setDateFromField(m);
							e.datepicker._updateAlternate(m);
							e.datepicker._updateDatepicker(m)
						}
					} catch (k) {}
				}
				return true
			},
			_showDatepicker: function(k) {
				k = k.target || k;
				if (k.nodeName.toLowerCase() !== "input") {
					k = e("input", k.parentNode)[0]
				}
				if (e.datepicker._isDisabledDatepicker(k) || e.datepicker._lastInput === k) {
					return
				}
				var m, q, l, o, p, h, n;
				m = e.datepicker._getInst(k);
				if (e.datepicker._curInst && e.datepicker._curInst !== m) {
					e.datepicker._curInst.dpDiv.stop(true, true);
					if (m && e.datepicker._datepickerShowing) {
						e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])
					}
				}
				q = e.datepicker._get(m, "beforeShow");
				l = q ? q.apply(k, [k, m]) : {};
				if (l === false) {
					return
				}
				a(m.settings, l);
				m.lastVal = null;
				e.datepicker._lastInput = k;
				e.datepicker._setDateFromField(m);
				if (e.datepicker._inDialog) {
					k.value = ""
				}
				if (!e.datepicker._pos) {
					e.datepicker._pos = e.datepicker._findPos(k);
					e.datepicker._pos[1] += k.offsetHeight
				}
				o = false;
				e(k).parents().each(function() {
					o |= e(this).css("position") === "fixed";
					return !o
				});
				p = {
					left: e.datepicker._pos[0],
					top: e.datepicker._pos[1]
				};
				e.datepicker._pos = null;
				m.dpDiv.empty();
				m.dpDiv.css({
					position: "absolute",
					display: "block",
					top: "-1000px"
				});
				e.datepicker._updateDatepicker(m);
				p = e.datepicker._checkOffset(m, p, o);
				m.dpDiv.css({
					position: (e.datepicker._inDialog && e.blockUI ? "static" : (o ? "fixed" : "absolute")),
					display: "none",
					left: p.left + "px",
					top: p.top + "px"
				});
				if (!m.inline) {
					h = e.datepicker._get(m, "showAnim");
					n = e.datepicker._get(m, "duration");
					m.dpDiv.zIndex(e(k).zIndex() + 1);
					e.datepicker._datepickerShowing = true;
					if (e.effects && e.effects.effect[h]) {
						m.dpDiv.show(h, e.datepicker._get(m, "showOptions"), n)
					} else {
						m.dpDiv[h || "show"](h ? n : null)
					}
					if (e.datepicker._shouldFocusInput(m)) {
						m.input.focus()
					}
					e.datepicker._curInst = m
				}
			},
			_updateDatepicker: function(l) {
				this.maxRows = 4;
				c = l;
				l.dpDiv.empty().append(this._generateHTML(l));
				this._attachHandlers(l);
				l.dpDiv.find("." + this._dayOverClass + " a").mouseover();
				var n, h = this._getNumberOfMonths(l), m = h[1], k = 17;
				l.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
				if (m > 1) {
					l.dpDiv.addClass("ui-datepicker-multi-" + m).css("width", (k * m) + "em")
				}
				l.dpDiv[(h[0] !== 1 || h[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
				l.dpDiv[(this._get(l, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
				if (l === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(l)) {
					l.input.focus()
				}
				if (l.yearshtml) {
					n = l.yearshtml;
					setTimeout(function() {
						if (n === l.yearshtml && l.yearshtml) {
							l.dpDiv.find("select.ui-datepicker-year:first").replaceWith(l.yearshtml)
						}
						n = l.yearshtml = null
					}, 0)
				}
			},
			_shouldFocusInput: function(h) {
				return h.input && h.input.is(":visible") && !h.input.is(":disabled") && !h.input.is(":focus")
			},
			_checkOffset: function(o, m, l) {
				var n = o.dpDiv.outerWidth()
				  , r = o.dpDiv.outerHeight()
				  , q = o.input ? o.input.outerWidth() : 0
				  , h = o.input ? o.input.outerHeight() : 0
				  , p = document.documentElement.clientWidth + (l ? 0 : e(document).scrollLeft())
				  , k = document.documentElement.clientHeight + (l ? 0 : e(document).scrollTop());
				m.left -= (this._get(o, "isRTL") ? (n - q) : 0);
				m.left -= (l && m.left === o.input.offset().left) ? e(document).scrollLeft() : 0;
				m.top -= (l && m.top === (o.input.offset().top + h)) ? e(document).scrollTop() : 0;
				m.left -= Math.min(m.left, (m.left + n > p && p > n) ? Math.abs(m.left + n - p) : 0);
				m.top -= Math.min(m.top, (m.top + r > k && k > r) ? Math.abs(r + h) : 0);
				return m
			},
			_findPos: function(m) {
				var h, l = this._getInst(m), k = this._get(l, "isRTL");
				while (m && (m.type === "hidden" || m.nodeType !== 1 || e.expr.filters.hidden(m))) {
					m = m[k ? "previousSibling" : "nextSibling"]
				}
				h = e(m).offset();
				return [h.left, h.top]
			},
			_hideDatepicker: function(l) {
				var k, o, n, h, m = this._curInst;
				if (!m || (l && m !== e.data(l, f))) {
					return
				}
				if (this._datepickerShowing) {
					k = this._get(m, "showAnim");
					o = this._get(m, "duration");
					n = function() {
						e.datepicker._tidyDialog(m)
					}
					;
					if (e.effects && (e.effects.effect[k] || e.effects[k])) {
						m.dpDiv.hide(k, e.datepicker._get(m, "showOptions"), o, n)
					} else {
						m.dpDiv[(k === "slideDown" ? "slideUp" : (k === "fadeIn" ? "fadeOut" : "hide"))]((k ? o : null), n)
					}
					if (!k) {
						n()
					}
					this._datepickerShowing = false;
					h = this._get(m, "onClose");
					if (h) {
						h.apply((m.input ? m.input[0] : null), [(m.input ? m.input.val() : ""), m])
					}
					this._lastInput = null;
					if (this._inDialog) {
						this._dialogInput.css({
							position: "absolute",
							left: "0",
							top: "-100px"
						});
						if (e.blockUI) {
							e.unblockUI();
							e("body").append(this.dpDiv)
						}
					}
					this._inDialog = false
				}
			},
			_tidyDialog: function(h) {
				h.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
			},
			_checkExternalClick: function(k) {
				if (!e.datepicker._curInst) {
					return
				}
				var h = e(k.target)
				  , l = e.datepicker._getInst(h[0]);
				if (((h[0].id !== e.datepicker._mainDivId && h.parents("#" + e.datepicker._mainDivId).length === 0 && !h.hasClass(e.datepicker.markerClassName) && !h.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && !(e.datepicker._inDialog && e.blockUI))) || (h.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== l)) {
					e.datepicker._hideDatepicker()
				}
			},
			_adjustDate: function(n, m, l) {
				var k = e(n)
				  , h = this._getInst(k[0]);
				if (this._isDisabledDatepicker(k[0])) {
					return
				}
				this._adjustInstDate(h, m + (l === "M" ? this._get(h, "showCurrentAtPos") : 0), l);
				this._updateDatepicker(h)
			},
			_gotoToday: function(m) {
				var h, l = e(m), k = this._getInst(l[0]);
				if (this._get(k, "gotoCurrent") && k.currentDay) {
					k.selectedDay = k.currentDay;
					k.drawMonth = k.selectedMonth = k.currentMonth;
					k.drawYear = k.selectedYear = k.currentYear
				} else {
					h = new Date();
					k.selectedDay = h.getDate();
					k.drawMonth = k.selectedMonth = h.getMonth();
					k.drawYear = k.selectedYear = h.getFullYear()
				}
				this._notifyChange(k);
				this._adjustDate(l)
			},
			_selectMonthYear: function(n, h, m) {
				var l = e(n)
				  , k = this._getInst(l[0]);
				k["selected" + (m === "M" ? "Month" : "Year")] = k["draw" + (m === "M" ? "Month" : "Year")] = parseInt(h.options[h.selectedIndex].value, 10);
				this._notifyChange(k);
				this._adjustDate(l)
			},
			_selectDay: function(o, m, h, n) {
				var k, l = e(o);
				if (e(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(l[0])) {
					return
				}
				k = this._getInst(l[0]);
				k.selectedDay = k.currentDay = e("a", n).html();
				k.selectedMonth = k.currentMonth = m;
				k.selectedYear = k.currentYear = h;
				this._selectDate(o, this._formatDate(k, k.currentDay, k.currentMonth, k.currentYear))
			},
			_clearDate: function(k) {
				var h = e(k);
				this._selectDate(h, "")
			},
			_selectDate: function(n, h) {
				var k, m = e(n), l = this._getInst(m[0]);
				h = (h != null ? h : this._formatDate(l));
				if (l.input) {
					l.input.val(h)
				}
				this._updateAlternate(l);
				k = this._get(l, "onSelect");
				if (k) {
					k.apply((l.input ? l.input[0] : null), [h, l])
				} else {
					if (l.input) {
						l.input.trigger("change")
					}
				}
				if (l.inline) {
					this._updateDatepicker(l)
				} else {
					this._hideDatepicker();
					this._lastInput = l.input[0];
					if (typeof (l.input[0]) !== "object") {
						l.input.focus()
					}
					this._lastInput = null
				}
			},
			_updateAlternate: function(n) {
				var m, l, h, k = this._get(n, "altField");
				if (k) {
					m = this._get(n, "altFormat") || this._get(n, "dateFormat");
					l = this._getDate(n);
					h = this.formatDate(m, l, this._getFormatConfig(n));
					e(k).each(function() {
						e(this).val(h)
					})
				}
			},
			noWeekends: function(k) {
				var h = k.getDay();
				return [(h > 0 && h < 6), ""]
			},
			iso8601Week: function(h) {
				var k, l = new Date(h.getTime());
				l.setDate(l.getDate() + 4 - (l.getDay() || 7));
				k = l.getTime();
				l.setMonth(0);
				l.setDate(1);
				return Math.floor(Math.round((k - l) / 86400000) / 7) + 1
			},
			parseDate: function(z, u, B) {
				if (z == null || u == null) {
					throw "Invalid arguments"
				}
				u = (typeof u === "object" ? u.toString() : u + "");
				if (u === "") {
					return null
				}
				var m, w, k, A = 0, p = (B ? B.shortYearCutoff : null) || this._defaults.shortYearCutoff, l = (typeof p !== "string" ? p : new Date().getFullYear() % 100 + parseInt(p, 10)), s = (B ? B.dayNamesShort : null) || this._defaults.dayNamesShort, D = (B ? B.dayNames : null) || this._defaults.dayNames, h = (B ? B.monthNamesShort : null) || this._defaults.monthNamesShort, n = (B ? B.monthNames : null) || this._defaults.monthNames, o = -1, E = -1, y = -1, r = -1, x = false, C, t = function(G) {
					var H = (m + 1 < z.length && z.charAt(m + 1) === G);
					if (H) {
						m++
					}
					return H
				}, F = function(I) {
					var G = t(I)
					  , J = (I === "@" ? 14 : (I === "!" ? 20 : (I === "y" && G ? 4 : (I === "o" ? 3 : 2))))
					  , K = new RegExp("^\\d{1," + J + "}")
					  , H = u.substring(A).match(K);
					if (!H) {
						throw "Missing number at position " + A
					}
					A += H[0].length;
					return parseInt(H[0], 10)
				}, q = function(H, I, K) {
					var G = -1
					  , J = e.map(t(H) ? K : I, function(M, L) {
						return [[L, M]]
					}).sort(function(M, L) {
						return -(M[1].length - L[1].length)
					});
					e.each(J, function(M, N) {
						var L = N[1];
						if (u.substr(A, L.length).toLowerCase() === L.toLowerCase()) {
							G = N[0];
							A += L.length;
							return false
						}
					});
					if (G !== -1) {
						return G + 1
					} else {
						throw "Unknown name at position " + A
					}
				}, v = function() {
					if (u.charAt(A) !== z.charAt(m)) {
						throw "Unexpected literal at position " + A
					}
					A++
				};
				for (m = 0; m < z.length; m++) {
					if (x) {
						if (z.charAt(m) === "'" && !t("'")) {
							x = false
						} else {
							v()
						}
					} else {
						switch (z.charAt(m)) {
						case "d":
							y = F("d");
							break;
						case "D":
							q("D", s, D);
							break;
						case "o":
							r = F("o");
							break;
						case "m":
							E = F("m");
							break;
						case "M":
							E = q("M", h, n);
							break;
						case "y":
							o = F("y");
							break;
						case "@":
							C = new Date(F("@"));
							o = C.getFullYear();
							E = C.getMonth() + 1;
							y = C.getDate();
							break;
						case "!":
							C = new Date((F("!") - this._ticksTo1970) / 10000);
							o = C.getFullYear();
							E = C.getMonth() + 1;
							y = C.getDate();
							break;
						case "'":
							if (t("'")) {
								v()
							} else {
								x = true
							}
							break;
						default:
							v()
						}
					}
				}
				if (A < u.length) {
					k = u.substr(A);
					if (!/^\s+/.test(k)) {
						throw "Extra/unparsed characters found in date: " + k
					}
				}
				if (o === -1) {
					o = new Date().getFullYear()
				} else {
					if (o < 100) {
						o += new Date().getFullYear() - new Date().getFullYear() % 100 + (o <= l ? 0 : -100)
					}
				}
				if (r > -1) {
					E = 1;
					y = r;
					do {
						w = this._getDaysInMonth(o, E - 1);
						if (y <= w) {
							break
						}
						E++;
						y -= w
					} while (true)
				}
				C = this._daylightSavingAdjust(new Date(o,E - 1,y));
				if (C.getFullYear() !== o || C.getMonth() + 1 !== E || C.getDate() !== y) {
					throw "Invalid date"
				}
				return C
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
			formatDate: function(s, m, n) {
				if (!m) {
					return ""
				}
				var u, v = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, k = (n ? n.dayNames : null) || this._defaults.dayNames, q = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, o = (n ? n.monthNames : null) || this._defaults.monthNames, t = function(w) {
					var x = (u + 1 < s.length && s.charAt(u + 1) === w);
					if (x) {
						u++
					}
					return x
				}, h = function(y, z, w) {
					var x = "" + z;
					if (t(y)) {
						while (x.length < w) {
							x = "0" + x
						}
					}
					return x
				}, p = function(w, y, x, z) {
					return (t(w) ? z[y] : x[y])
				}, l = "", r = false;
				if (m) {
					for (u = 0; u < s.length; u++) {
						if (r) {
							if (s.charAt(u) === "'" && !t("'")) {
								r = false
							} else {
								l += s.charAt(u)
							}
						} else {
							switch (s.charAt(u)) {
							case "d":
								l += h("d", m.getDate(), 2);
								break;
							case "D":
								l += p("D", m.getDay(), v, k);
								break;
							case "o":
								l += h("o", Math.round((new Date(m.getFullYear(),m.getMonth(),m.getDate()).getTime() - new Date(m.getFullYear(),0,0).getTime()) / 86400000), 3);
								break;
							case "m":
								l += h("m", m.getMonth() + 1, 2);
								break;
							case "M":
								l += p("M", m.getMonth(), q, o);
								break;
							case "y":
								l += (t("y") ? m.getFullYear() : (m.getYear() % 100 < 10 ? "0" : "") + m.getYear() % 100);
								break;
							case "@":
								l += m.getTime();
								break;
							case "!":
								l += m.getTime() * 10000 + this._ticksTo1970;
								break;
							case "'":
								if (t("'")) {
									l += "'"
								} else {
									r = true
								}
								break;
							default:
								l += s.charAt(u)
							}
						}
					}
				}
				return l
			},
			_possibleChars: function(n) {
				var m, l = "", k = false, h = function(o) {
					var p = (m + 1 < n.length && n.charAt(m + 1) === o);
					if (p) {
						m++
					}
					return p
				};
				for (m = 0; m < n.length; m++) {
					if (k) {
						if (n.charAt(m) === "'" && !h("'")) {
							k = false
						} else {
							l += n.charAt(m)
						}
					} else {
						switch (n.charAt(m)) {
						case "d":
						case "m":
						case "y":
						case "@":
							l += "0123456789";
							break;
						case "D":
						case "M":
							return null;
						case "'":
							if (h("'")) {
								l += "'"
							} else {
								k = true
							}
							break;
						default:
							l += n.charAt(m)
						}
					}
				}
				return l
			},
			_get: function(k, h) {
				return k.settings[h] !== g ? k.settings[h] : this._defaults[h]
			},
			_setDateFromField: function(o, l) {
				if (o.input.val() === o.lastVal) {
					return
				}
				var h = this._get(o, "dateFormat")
				  , q = o.lastVal = o.input ? o.input.val() : null
				  , p = this._getDefaultDate(o)
				  , k = p
				  , m = this._getFormatConfig(o);
				try {
					k = this.parseDate(h, q, m) || p
				} catch (n) {
					q = (l ? "" : q)
				}
				o.selectedDay = k.getDate();
				o.drawMonth = o.selectedMonth = k.getMonth();
				o.drawYear = o.selectedYear = k.getFullYear();
				o.currentDay = (q ? k.getDate() : 0);
				o.currentMonth = (q ? k.getMonth() : 0);
				o.currentYear = (q ? k.getFullYear() : 0);
				this._adjustInstDate(o)
			},
			_getDefaultDate: function(h) {
				return this._restrictMinMax(h, this._determineDate(h, this._get(h, "defaultDate"), new Date()))
			},
			_determineDate: function(n, k, o) {
				var m = function(q) {
					var p = new Date();
					p.setDate(p.getDate() + q);
					return p
				}
				  , l = function(w) {
					try {
						return e.datepicker.parseDate(e.datepicker._get(n, "dateFormat"), w, e.datepicker._getFormatConfig(n))
					} catch (v) {}
					var q = (w.toLowerCase().match(/^c/) ? e.datepicker._getDate(n) : null) || new Date()
					  , r = q.getFullYear()
					  , u = q.getMonth()
					  , p = q.getDate()
					  , t = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g
					  , s = t.exec(w);
					while (s) {
						switch (s[2] || "d") {
						case "d":
						case "D":
							p += parseInt(s[1], 10);
							break;
						case "w":
						case "W":
							p += parseInt(s[1], 10) * 7;
							break;
						case "m":
						case "M":
							u += parseInt(s[1], 10);
							p = Math.min(p, e.datepicker._getDaysInMonth(r, u));
							break;
						case "y":
						case "Y":
							r += parseInt(s[1], 10);
							p = Math.min(p, e.datepicker._getDaysInMonth(r, u));
							break
						}
						s = t.exec(w)
					}
					return new Date(r,u,p)
				}
				  , h = (k == null || k === "" ? o : (typeof k === "string" ? l(k) : (typeof k === "number" ? (isNaN(k) ? o : m(k)) : new Date(k.getTime()))));
				h = (h && h.toString() === "Invalid Date" ? o : h);
				if (h) {
					h.setHours(0);
					h.setMinutes(0);
					h.setSeconds(0);
					h.setMilliseconds(0)
				}
				return this._daylightSavingAdjust(h)
			},
			_daylightSavingAdjust: function(h) {
				if (!h) {
					return null
				}
				h.setHours(h.getHours() > 12 ? h.getHours() + 2 : 0);
				return h
			},
			_setDate: function(p, m, o) {
				var h = !m
				  , l = p.selectedMonth
				  , n = p.selectedYear
				  , k = this._restrictMinMax(p, this._determineDate(p, m, new Date()));
				p.selectedDay = p.currentDay = k.getDate();
				p.drawMonth = p.selectedMonth = p.currentMonth = k.getMonth();
				p.drawYear = p.selectedYear = p.currentYear = k.getFullYear();
				if ((l !== p.selectedMonth || n !== p.selectedYear) && !o) {
					this._notifyChange(p)
				}
				this._adjustInstDate(p);
				if (p.input) {
					p.input.val(h ? "" : this._formatDate(p))
				}
			},
			_getDate: function(k) {
				var h = (!k.currentYear || (k.input && k.input.val() === "") ? null : this._daylightSavingAdjust(new Date(k.currentYear,k.currentMonth,k.currentDay)));
				return h
			},
			_attachHandlers: function(k) {
				var h = this._get(k, "stepMonths")
				  , l = "#" + k.id.replace(/\\\\/g, "\\");
				k.dpDiv.find("[data-handler]").map(function() {
					var m = {
						prev: function() {
							e.datepicker._adjustDate(l, -h, "M")
						},
						next: function() {
							e.datepicker._adjustDate(l, +h, "M")
						},
						hide: function() {
							e.datepicker._hideDatepicker()
						},
						today: function() {
							e.datepicker._gotoToday(l)
						},
						selectDay: function() {
							e.datepicker._selectDay(l, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
							return false
						},
						selectMonth: function() {
							e.datepicker._selectMonthYear(l, this, "M");
							return false
						},
						selectYear: function() {
							e.datepicker._selectMonthYear(l, this, "Y");
							return false
						}
					};
					e(this).bind(this.getAttribute("data-event"), m[this.getAttribute("data-handler")])
				})
			},
			_generateHTML: function(Z) {
				var C, B, U, M, n, ad, X, Q, ag, K, ak, u, w, v, k, ac, s, F, af, S, al, E, J, t, o, V, O, R, P, r, H, x, Y, ab, m, ae, ai, N, y, aa = new Date(), D = this._daylightSavingAdjust(new Date(aa.getFullYear(),aa.getMonth(),aa.getDate())), ah = this._get(Z, "isRTL"), aj = this._get(Z, "showButtonPanel"), T = this._get(Z, "hideIfNoPrevNext"), I = this._get(Z, "navigationAsDateFormat"), z = this._getNumberOfMonths(Z), q = this._get(Z, "showCurrentAtPos"), L = this._get(Z, "stepMonths"), G = (z[0] !== 1 || z[1] !== 1), l = this._daylightSavingAdjust((!Z.currentDay ? new Date(9999,9,9) : new Date(Z.currentYear,Z.currentMonth,Z.currentDay))), p = this._getMinMaxDate(Z, "min"), A = this._getMinMaxDate(Z, "max"), h = Z.drawMonth - q, W = Z.drawYear;
				if (h < 0) {
					h += 12;
					W--
				}
				if (A) {
					C = this._daylightSavingAdjust(new Date(A.getFullYear(),A.getMonth() - (z[0] * z[1]) + 1,A.getDate()));
					C = (p && C < p ? p : C);
					while (this._daylightSavingAdjust(new Date(W,h,1)) > C) {
						h--;
						if (h < 0) {
							h = 11;
							W--
						}
					}
				}
				Z.drawMonth = h;
				Z.drawYear = W;
				B = this._get(Z, "prevText");
				B = (!I ? B : this.formatDate(B, this._daylightSavingAdjust(new Date(W,h - L,1)), this._getFormatConfig(Z)));
				U = (this._canAdjustMonth(Z, -1, W, h) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + B + "'><span class='ui-icon ui-icon-circle-triangle-" + (ah ? "e" : "w") + "'>" + B + "</span></a>" : (T ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + B + "'><span class='ui-icon ui-icon-circle-triangle-" + (ah ? "e" : "w") + "'>" + B + "</span></a>"));
				M = this._get(Z, "nextText");
				M = (!I ? M : this.formatDate(M, this._daylightSavingAdjust(new Date(W,h + L,1)), this._getFormatConfig(Z)));
				n = (this._canAdjustMonth(Z, +1, W, h) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + M + "'><span class='ui-icon ui-icon-circle-triangle-" + (ah ? "w" : "e") + "'>" + M + "</span></a>" : (T ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + M + "'><span class='ui-icon ui-icon-circle-triangle-" + (ah ? "w" : "e") + "'>" + M + "</span></a>"));
				ad = this._get(Z, "currentText");
				X = (this._get(Z, "gotoCurrent") && Z.currentDay ? l : D);
				ad = (!I ? ad : this.formatDate(ad, X, this._getFormatConfig(Z)));
				Q = (!Z.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(Z, "closeText") + "</button>" : "");
				ag = (aj) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (ah ? Q : "") + (this._isInRange(Z, X) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + ad + "</button>" : "") + (ah ? "" : Q) + "</div>" : "";
				K = parseInt(this._get(Z, "firstDay"), 10);
				K = (isNaN(K) ? 0 : K);
				ak = this._get(Z, "showWeek");
				u = this._get(Z, "dayNames");
				w = this._get(Z, "dayNamesMin");
				v = this._get(Z, "monthNames");
				k = this._get(Z, "monthNamesShort");
				ac = this._get(Z, "beforeShowDay");
				s = this._get(Z, "showOtherMonths");
				F = this._get(Z, "selectOtherMonths");
				af = this._getDefaultDate(Z);
				S = "";
				al;
				for (E = 0; E < z[0]; E++) {
					J = "";
					this.maxRows = 4;
					for (t = 0; t < z[1]; t++) {
						o = this._daylightSavingAdjust(new Date(W,h,Z.selectedDay));
						V = " ui-corner-all";
						O = "";
						if (G) {
							O += "<div class='ui-datepicker-group";
							if (z[1] > 1) {
								switch (t) {
								case 0:
									O += " ui-datepicker-group-first";
									V = " ui-corner-" + (ah ? "right" : "left");
									break;
								case z[1] - 1:
									O += " ui-datepicker-group-last";
									V = " ui-corner-" + (ah ? "left" : "right");
									break;
								default:
									O += " ui-datepicker-group-middle";
									V = "";
									break
								}
							}
							O += "'>"
						}
						O += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + V + "'>" + (/all|left/.test(V) && E === 0 ? (ah ? n : U) : "") + (/all|right/.test(V) && E === 0 ? (ah ? U : n) : "") + this._generateMonthYearHeader(Z, h, W, p, A, E > 0 || t > 0, v, k) + "</div><table class='ui-datepicker-calendar'><thead><tr>";
						R = (ak ? "<th class='ui-datepicker-week-col'>" + this._get(Z, "weekHeader") + "</th>" : "");
						for (al = 0; al < 7; al++) {
							P = (al + K) % 7;
							R += "<th" + ((al + K + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + u[P] + "'>" + w[P] + "</span></th>"
						}
						O += R + "</tr></thead><tbody>";
						r = this._getDaysInMonth(W, h);
						if (W === Z.selectedYear && h === Z.selectedMonth) {
							Z.selectedDay = Math.min(Z.selectedDay, r)
						}
						H = (this._getFirstDayOfMonth(W, h) - K + 7) % 7;
						x = Math.ceil((H + r) / 7);
						Y = (G ? this.maxRows > x ? this.maxRows : x : x);
						this.maxRows = Y;
						ab = this._daylightSavingAdjust(new Date(W,h,1 - H));
						for (m = 0; m < Y; m++) {
							O += "<tr>";
							ae = (!ak ? "" : "<td class='ui-datepicker-week-col'>" + this._get(Z, "calculateWeek")(ab) + "</td>");
							for (al = 0; al < 7; al++) {
								ai = (ac ? ac.apply((Z.input ? Z.input[0] : null), [ab]) : [true, ""]);
								N = (ab.getMonth() !== h);
								y = (N && !F) || !ai[0] || (p && ab < p) || (A && ab > A);
								ae += "<td class='" + ((al + K + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (N ? " ui-datepicker-other-month" : "") + ((ab.getTime() === o.getTime() && h === Z.selectedMonth && Z._keyEvent) || (af.getTime() === ab.getTime() && af.getTime() === o.getTime()) ? " " + this._dayOverClass : "") + (y ? " " + this._unselectableClass + " ui-state-disabled" : "") + (N && !s ? "" : " " + ai[1] + (ab.getTime() === l.getTime() ? " " + this._currentClass : "") + (ab.getTime() === D.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!N || s) && ai[2] ? " title='" + ai[2].replace(/'/g, "&#39;") + "'" : "") + (y ? "" : " data-handler='selectDay' data-event='click' data-month='" + ab.getMonth() + "' data-year='" + ab.getFullYear() + "'") + ">" + (N && !s ? "&#xa0;" : (y ? "<span class='ui-state-default'>" + ab.getDate() + "</span>" : "<a class='ui-state-default" + (ab.getTime() === D.getTime() ? " ui-state-highlight" : "") + (ab.getTime() === l.getTime() ? " ui-state-active" : "") + (N ? " ui-priority-secondary" : "") + "' href='#'>" + ab.getDate() + "</a>")) + "</td>";
								ab.setDate(ab.getDate() + 1);
								ab = this._daylightSavingAdjust(ab)
							}
							O += ae + "</tr>"
						}
						h++;
						if (h > 11) {
							h = 0;
							W++
						}
						O += "</tbody></table>" + (G ? "</div>" + ((z[0] > 0 && t === z[1] - 1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
						J += O
					}
					S += J
				}
				S += ag;
				Z._keyEvent = false;
				return S
			},
			_generateMonthYearHeader: function(n, l, v, p, t, w, r, h) {
				var A, k, B, y, o, x, u, q, m = this._get(n, "changeMonth"), C = this._get(n, "changeYear"), D = this._get(n, "showMonthAfterYear"), s = "<div class='ui-datepicker-title'>", z = "";
				if (w || !m) {
					z += "<span class='ui-datepicker-month'>" + r[l] + "</span>"
				} else {
					A = (p && p.getFullYear() === v);
					k = (t && t.getFullYear() === v);
					z += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
					for (B = 0; B < 12; B++) {
						if ((!A || B >= p.getMonth()) && (!k || B <= t.getMonth())) {
							z += "<option value='" + B + "'" + (B === l ? " selected='selected'" : "") + ">" + h[B] + "</option>"
						}
					}
					z += "</select>"
				}
				if (!D) {
					s += z + (w || !(m && C) ? "&#xa0;" : "")
				}
				if (!n.yearshtml) {
					n.yearshtml = "";
					if (w || !C) {
						s += "<span class='ui-datepicker-year'>" + v + "</span>"
					} else {
						y = this._get(n, "yearRange").split(":");
						o = new Date().getFullYear();
						x = function(F) {
							var E = (F.match(/c[+\-].*/) ? v + parseInt(F.substring(1), 10) : (F.match(/[+\-].*/) ? o + parseInt(F, 10) : parseInt(F, 10)));
							return (isNaN(E) ? o : E)
						}
						;
						u = x(y[0]);
						q = Math.max(u, x(y[1] || ""));
						u = (p ? Math.max(u, p.getFullYear()) : u);
						q = (t ? Math.min(q, t.getFullYear()) : q);
						n.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
						for (; u <= q; u++) {
							n.yearshtml += "<option value='" + u + "'" + (u === v ? " selected='selected'" : "") + ">" + u + "</option>"
						}
						n.yearshtml += "</select>";
						s += n.yearshtml;
						n.yearshtml = null
					}
				}
				s += this._get(n, "yearSuffix");
				if (D) {
					s += (w || !(m && C) ? "&#xa0;" : "") + z
				}
				s += "</div>";
				return s
			},
			_adjustInstDate: function(m, p, o) {
				var l = m.drawYear + (o === "Y" ? p : 0)
				  , n = m.drawMonth + (o === "M" ? p : 0)
				  , h = Math.min(m.selectedDay, this._getDaysInMonth(l, n)) + (o === "D" ? p : 0)
				  , k = this._restrictMinMax(m, this._daylightSavingAdjust(new Date(l,n,h)));
				m.selectedDay = k.getDate();
				m.drawMonth = m.selectedMonth = k.getMonth();
				m.drawYear = m.selectedYear = k.getFullYear();
				if (o === "M" || o === "Y") {
					this._notifyChange(m)
				}
			},
			_restrictMinMax: function(m, k) {
				var l = this._getMinMaxDate(m, "min")
				  , n = this._getMinMaxDate(m, "max")
				  , h = (l && k < l ? l : k);
				return (n && h > n ? n : h)
			},
			_notifyChange: function(k) {
				var h = this._get(k, "onChangeMonthYear");
				if (h) {
					h.apply((k.input ? k.input[0] : null), [k.selectedYear, k.selectedMonth + 1, k])
				}
			},
			_getNumberOfMonths: function(k) {
				var h = this._get(k, "numberOfMonths");
				return (h == null ? [1, 1] : (typeof h === "number" ? [1, h] : h))
			},
			_getMinMaxDate: function(k, h) {
				return this._determineDate(k, this._get(k, h + "Date"), null)
			},
			_getDaysInMonth: function(h, k) {
				return 32 - this._daylightSavingAdjust(new Date(h,k,32)).getDate()
			},
			_getFirstDayOfMonth: function(h, k) {
				return new Date(h,k,1).getDay()
			},
			_canAdjustMonth: function(m, o, l, n) {
				var h = this._getNumberOfMonths(m)
				  , k = this._daylightSavingAdjust(new Date(l,n + (o < 0 ? o : h[0] * h[1]),1));
				if (o < 0) {
					k.setDate(this._getDaysInMonth(k.getFullYear(), k.getMonth()))
				}
				return this._isInRange(m, k)
			},
			_isInRange: function(n, l) {
				var k, q, m = this._getMinMaxDate(n, "min"), h = this._getMinMaxDate(n, "max"), r = null, o = null, p = this._get(n, "yearRange");
				if (p) {
					k = p.split(":");
					q = new Date().getFullYear();
					r = parseInt(k[0], 10);
					o = parseInt(k[1], 10);
					if (k[0].match(/[+\-].*/)) {
						r += q
					}
					if (k[1].match(/[+\-].*/)) {
						o += q
					}
				}
				return ((!m || l.getTime() >= m.getTime()) && (!h || l.getTime() <= h.getTime()) && (!r || l.getFullYear() >= r) && (!o || l.getFullYear() <= o))
			},
			_getFormatConfig: function(h) {
				var k = this._get(h, "shortYearCutoff");
				k = (typeof k !== "string" ? k : new Date().getFullYear() % 100 + parseInt(k, 10));
				return {
					shortYearCutoff: k,
					dayNamesShort: this._get(h, "dayNamesShort"),
					dayNames: this._get(h, "dayNames"),
					monthNamesShort: this._get(h, "monthNamesShort"),
					monthNames: this._get(h, "monthNames")
				}
			},
			_formatDate: function(m, h, n, l) {
				if (!h) {
					m.currentDay = m.selectedDay;
					m.currentMonth = m.selectedMonth;
					m.currentYear = m.selectedYear
				}
				var k = (h ? (typeof h === "object" ? h : this._daylightSavingAdjust(new Date(l,n,h))) : this._daylightSavingAdjust(new Date(m.currentYear,m.currentMonth,m.currentDay)));
				return this.formatDate(this._get(m, "dateFormat"), k, this._getFormatConfig(m))
			}
		});
		function d(k) {
			var h = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
			return k.delegate(h, "mouseout", function() {
				e(this).removeClass("ui-state-hover");
				if (this.className.indexOf("ui-datepicker-prev") !== -1) {
					e(this).removeClass("ui-datepicker-prev-hover")
				}
				if (this.className.indexOf("ui-datepicker-next") !== -1) {
					e(this).removeClass("ui-datepicker-next-hover")
				}
			}).delegate(h, "mouseover", function() {
				if (!e.datepicker._isDisabledDatepicker(c.inline ? k.parent()[0] : c.input[0])) {
					e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
					e(this).addClass("ui-state-hover");
					if (this.className.indexOf("ui-datepicker-prev") !== -1) {
						e(this).addClass("ui-datepicker-prev-hover")
					}
					if (this.className.indexOf("ui-datepicker-next") !== -1) {
						e(this).addClass("ui-datepicker-next-hover")
					}
				}
			})
		}
		function a(l, k) {
			e.extend(l, k);
			for (var h in k) {
				if (k[h] == null) {
					l[h] = k[h]
				}
			}
			return l
		}
		e.fn.datepicker = function(k) {
			if (!this.length) {
				return this
			}
			if (!e.datepicker.initialized) {
				e(document).mousedown(e.datepicker._checkExternalClick);
				e.datepicker.initialized = true
			}
			if (e("#" + e.datepicker._mainDivId).length === 0) {
				e("body").append(e.datepicker.dpDiv)
			}
			var h = Array.prototype.slice.call(arguments, 1);
			if (typeof k === "string" && (k === "isDisabled" || k === "getDate" || k === "widget")) {
				return e.datepicker["_" + k + "Datepicker"].apply(e.datepicker, [this[0]].concat(h))
			}
			if (k === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
				return e.datepicker["_" + k + "Datepicker"].apply(e.datepicker, [this[0]].concat(h))
			}
			return this.each(function() {
				typeof k === "string" ? e.datepicker["_" + k + "Datepicker"].apply(e.datepicker, [this].concat(h)) : e.datepicker._attachDatepicker(this, k)
			})
		}
		;
		e.datepicker = new b();
		e.datepicker.initialized = false;
		e.datepicker.uuid = new Date().getTime();
		e.datepicker.version = "1.10.3"
	}
	)(jQuery);
	(function(c, d) {
		var a = {
			buttons: true,
			height: true,
			maxHeight: true,
			maxWidth: true,
			minHeight: true,
			minWidth: true,
			width: true
		}
		  , b = {
			maxHeight: true,
			maxWidth: true,
			minHeight: true,
			minWidth: true
		};
		c.widget("ui.dialog", {
			version: "1.10.3",
			options: {
				appendTo: "body",
				autoOpen: true,
				buttons: [],
				closeOnEscape: true,
				closeText: "close",
				dialogClass: "",
				draggable: true,
				hide: null,
				height: "auto",
				maxHeight: null,
				maxWidth: null,
				minHeight: 150,
				minWidth: 150,
				modal: false,
				position: {
					my: "center",
					at: "center",
					of: window,
					collision: "fit",
					using: function(f) {
						var e = c(this).css(f).offset().top;
						if (e < 0) {
							c(this).css("top", f.top - e)
						}
					}
				},
				resizable: true,
				show: null,
				title: null,
				width: 300,
				beforeClose: null,
				close: null,
				drag: null,
				dragStart: null,
				dragStop: null,
				focus: null,
				open: null,
				resize: null,
				resizeStart: null,
				resizeStop: null
			},
			_create: function() {
				this.originalCss = {
					display: this.element[0].style.display,
					width: this.element[0].style.width,
					minHeight: this.element[0].style.minHeight,
					maxHeight: this.element[0].style.maxHeight,
					height: this.element[0].style.height
				};
				this.originalPosition = {
					parent: this.element.parent(),
					index: this.element.parent().children().index(this.element)
				};
				this.originalTitle = this.element.attr("title");
				this.options.title = this.options.title || this.originalTitle;
				this._createWrapper();
				this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
				this._createTitlebar();
				this._createButtonPane();
				if (this.options.draggable && c.fn.draggable) {
					this._makeDraggable()
				}
				if (this.options.resizable && c.fn.resizable) {
					this._makeResizable()
				}
				this._isOpen = false
			},
			_init: function() {
				if (this.options.autoOpen) {
					this.open()
				}
			},
			_appendTo: function() {
				var e = this.options.appendTo;
				if (e && (e.jquery || e.nodeType)) {
					return c(e)
				}
				return this.document.find(e || "body").eq(0)
			},
			_destroy: function() {
				var f, e = this.originalPosition;
				this._destroyOverlay();
				this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
				this.uiDialog.stop(true, true).remove();
				if (this.originalTitle) {
					this.element.attr("title", this.originalTitle)
				}
				f = e.parent.children().eq(e.index);
				if (f.length && f[0] !== this.element[0]) {
					f.before(this.element)
				} else {
					e.parent.append(this.element)
				}
			},
			widget: function() {
				return this.uiDialog
			},
			disable: c.noop,
			enable: c.noop,
			close: function(f) {
				var e = this;
				if (!this._isOpen || this._trigger("beforeClose", f) === false) {
					return
				}
				this._isOpen = false;
				this._destroyOverlay();
				if (!this.opener.filter(":focusable").focus().length) {
					c(this.document[0].activeElement).blur()
				}
				this._hide(this.uiDialog, this.options.hide, function() {
					e._trigger("close", f)
				})
			},
			isOpen: function() {
				return this._isOpen
			},
			moveToTop: function() {
				this._moveToTop()
			},
			_moveToTop: function(g, e) {
				var f = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
				if (f && !e) {
					this._trigger("focus", g)
				}
				return f
			},
			open: function() {
				var e = this;
				if (this._isOpen) {
					if (this._moveToTop()) {
						this._focusTabbable()
					}
					return
				}
				this._isOpen = true;
				this.opener = c(this.document[0].activeElement);
				this._size();
				this._position();
				this._createOverlay();
				this._moveToTop(null, true);
				this._show(this.uiDialog, this.options.show, function() {
					e._focusTabbable();
					e._trigger("focus")
				});
				this._trigger("open")
			},
			_focusTabbable: function() {
				var e = this.element.find("[autofocus]");
				if (!e.length) {
					e = this.element.find(":tabbable")
				}
				if (!e.length) {
					e = this.uiDialogButtonPane.find(":tabbable")
				}
				if (!e.length) {
					e = this.uiDialogTitlebarClose.filter(":tabbable")
				}
				if (!e.length) {
					e = this.uiDialog
				}
				e.eq(0).focus()
			},
			_keepFocus: function(e) {
				function f() {
					var h = this.document[0].activeElement
					  , g = this.uiDialog[0] === h || c.contains(this.uiDialog[0], h);
					if (!g) {
						this._focusTabbable()
					}
				}
				e.preventDefault();
				f.call(this);
				this._delay(f)
			},
			_createWrapper: function() {
				this.uiDialog = c("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
					tabIndex: -1,
					role: "dialog"
				}).appendTo(this._appendTo());
				this._on(this.uiDialog, {
					keydown: function(g) {
						if (this.options.closeOnEscape && !g.isDefaultPrevented() && g.keyCode && g.keyCode === c.ui.keyCode.ESCAPE) {
							g.preventDefault();
							this.close(g);
							return
						}
						if (g.keyCode !== c.ui.keyCode.TAB) {
							return
						}
						var f = this.uiDialog.find(":tabbable")
						  , h = f.filter(":first")
						  , e = f.filter(":last");
						if ((g.target === e[0] || g.target === this.uiDialog[0]) && !g.shiftKey) {
							h.focus(1);
							g.preventDefault()
						} else {
							if ((g.target === h[0] || g.target === this.uiDialog[0]) && g.shiftKey) {
								e.focus(1);
								g.preventDefault()
							}
						}
					},
					mousedown: function(e) {
						if (this._moveToTop(e)) {
							this._focusTabbable()
						}
					}
				});
				if (!this.element.find("[aria-describedby]").length) {
					this.uiDialog.attr({
						"aria-describedby": this.element.uniqueId().attr("id")
					})
				}
			},
			_createTitlebar: function() {
				var e;
				this.uiDialogTitlebar = c("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
				this._on(this.uiDialogTitlebar, {
					mousedown: function(f) {
						if (!c(f.target).closest(".ui-dialog-titlebar-close")) {
							this.uiDialog.focus()
						}
					}
				});
				this.uiDialogTitlebarClose = c("<button></button>").button({
					label: this.options.closeText,
					icons: {
						primary: "ui-icon-closethick"
					},
					text: false
				}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
				this._on(this.uiDialogTitlebarClose, {
					click: function(f) {
						f.preventDefault();
						this.close(f)
					}
				});
				e = c("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
				this._title(e);
				this.uiDialog.attr({
					"aria-labelledby": e.attr("id")
				})
			},
			_title: function(e) {
				if (!this.options.title) {
					e.html("&#160;")
				}
				e.text(this.options.title)
			},
			_createButtonPane: function() {
				this.uiDialogButtonPane = c("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
				this.uiButtonSet = c("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
				this._createButtons()
			},
			_createButtons: function() {
				var f = this
				  , e = this.options.buttons;
				this.uiDialogButtonPane.remove();
				this.uiButtonSet.empty();
				if (c.isEmptyObject(e) || (c.isArray(e) && !e.length)) {
					this.uiDialog.removeClass("ui-dialog-buttons");
					return
				}
				c.each(e, function(g, h) {
					var k, l;
					h = c.isFunction(h) ? {
						click: h,
						text: g
					} : h;
					h = c.extend({
						type: "button"
					}, h);
					k = h.click;
					h.click = function() {
						k.apply(f.element[0], arguments)
					}
					;
					l = {
						icons: h.icons,
						text: h.showText
					};
					delete h.icons;
					delete h.showText;
					c("<button></button>", h).button(l).appendTo(f.uiButtonSet)
				});
				this.uiDialog.addClass("ui-dialog-buttons");
				this.uiDialogButtonPane.appendTo(this.uiDialog)
			},
			_makeDraggable: function() {
				var g = this
				  , f = this.options;
				function e(h) {
					return {
						position: h.position,
						offset: h.offset
					}
				}
				this.uiDialog.draggable({
					cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
					handle: ".ui-dialog-titlebar",
					containment: "document",
					start: function(h, k) {
						c(this).addClass("ui-dialog-dragging");
						g._blockFrames();
						g._trigger("dragStart", h, e(k))
					},
					drag: function(h, k) {
						g._trigger("drag", h, e(k))
					},
					stop: function(h, k) {
						f.position = [k.position.left - g.document.scrollLeft(), k.position.top - g.document.scrollTop()];
						c(this).removeClass("ui-dialog-dragging");
						g._unblockFrames();
						g._trigger("dragStop", h, e(k))
					}
				})
			},
			_makeResizable: function() {
				var l = this
				  , h = this.options
				  , k = h.resizable
				  , e = this.uiDialog.css("position")
				  , g = typeof k === "string" ? k : "n,e,s,w,se,sw,ne,nw";
				function f(m) {
					return {
						originalPosition: m.originalPosition,
						originalSize: m.originalSize,
						position: m.position,
						size: m.size
					}
				}
				this.uiDialog.resizable({
					cancel: ".ui-dialog-content",
					containment: "document",
					alsoResize: this.element,
					maxWidth: h.maxWidth,
					maxHeight: h.maxHeight,
					minWidth: h.minWidth,
					minHeight: this._minHeight(),
					handles: g,
					start: function(m, n) {
						c(this).addClass("ui-dialog-resizing");
						l._blockFrames();
						l._trigger("resizeStart", m, f(n))
					},
					resize: function(m, n) {
						l._trigger("resize", m, f(n))
					},
					stop: function(m, n) {
						h.height = c(this).height();
						h.width = c(this).width();
						c(this).removeClass("ui-dialog-resizing");
						l._unblockFrames();
						l._trigger("resizeStop", m, f(n))
					}
				}).css("position", e)
			},
			_minHeight: function() {
				var e = this.options;
				return e.height === "auto" ? e.minHeight : Math.min(e.minHeight, e.height)
			},
			_position: function() {
				var e = this.uiDialog.is(":visible");
				if (!e) {
					this.uiDialog.show()
				}
				this.uiDialog.position(this.options.position);
				if (!e) {
					this.uiDialog.hide()
				}
			},
			_setOptions: function(g) {
				var h = this
				  , f = false
				  , e = {};
				c.each(g, function(k, l) {
					h._setOption(k, l);
					if (k in a) {
						f = true
					}
					if (k in b) {
						e[k] = l
					}
				});
				if (f) {
					this._size();
					this._position()
				}
				if (this.uiDialog.is(":data(ui-resizable)")) {
					this.uiDialog.resizable("option", e)
				}
			},
			_setOption: function(g, h) {
				var f, k, e = this.uiDialog;
				if (g === "dialogClass") {
					e.removeClass(this.options.dialogClass).addClass(h)
				}
				if (g === "disabled") {
					return
				}
				this._super(g, h);
				if (g === "appendTo") {
					this.uiDialog.appendTo(this._appendTo())
				}
				if (g === "buttons") {
					this._createButtons()
				}
				if (g === "closeText") {
					this.uiDialogTitlebarClose.button({
						label: "" + h
					})
				}
				if (g === "draggable") {
					f = e.is(":data(ui-draggable)");
					if (f && !h) {
						e.draggable("destroy")
					}
					if (!f && h) {
						this._makeDraggable()
					}
				}
				if (g === "position") {
					this._position()
				}
				if (g === "resizable") {
					k = e.is(":data(ui-resizable)");
					if (k && !h) {
						e.resizable("destroy")
					}
					if (k && typeof h === "string") {
						e.resizable("option", "handles", h)
					}
					if (!k && h !== false) {
						this._makeResizable()
					}
				}
				if (g === "title") {
					this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
				}
			},
			_size: function() {
				var e, g, h, f = this.options;
				this.element.show().css({
					width: "auto",
					minHeight: 0,
					maxHeight: "none",
					height: 0
				});
				if (f.minWidth > f.width) {
					f.width = f.minWidth
				}
				e = this.uiDialog.css({
					height: "auto",
					width: f.width
				}).outerHeight();
				g = Math.max(0, f.minHeight - e);
				h = typeof f.maxHeight === "number" ? Math.max(0, f.maxHeight - e) : "none";
				if (f.height === "auto") {
					this.element.css({
						minHeight: g,
						maxHeight: h,
						height: "auto"
					})
				} else {
					this.element.height(Math.max(0, f.height - e))
				}
				if (this.uiDialog.is(":data(ui-resizable)")) {
					this.uiDialog.resizable("option", "minHeight", this._minHeight())
				}
			},
			_blockFrames: function() {
				this.iframeBlocks = this.document.find("iframe").map(function() {
					var e = c(this);
					return c("<div>").css({
						position: "absolute",
						width: e.outerWidth(),
						height: e.outerHeight()
					}).appendTo(e.parent()).offset(e.offset())[0]
				})
			},
			_unblockFrames: function() {
				if (this.iframeBlocks) {
					this.iframeBlocks.remove();
					delete this.iframeBlocks
				}
			},
			_allowInteraction: function(e) {
				if (c(e.target).closest(".ui-dialog").length) {
					return true
				}
				return !!c(e.target).closest(".ui-datepicker").length
			},
			_createOverlay: function() {
				if (!this.options.modal) {
					return
				}
				var f = this
				  , e = this.widgetFullName;
				if (!c.ui.dialog.overlayInstances) {
					this._delay(function() {
						if (c.ui.dialog.overlayInstances) {
							this.document.bind("focusin.dialog", function(g) {
								if (!f._allowInteraction(g)) {
									g.preventDefault();
									c(".ui-dialog:visible:last .ui-dialog-content").data(e)._focusTabbable()
								}
							})
						}
					})
				}
				this.overlay = c("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
				this._on(this.overlay, {
					mousedown: "_keepFocus"
				});
				c.ui.dialog.overlayInstances++
			},
			_destroyOverlay: function() {
				if (!this.options.modal) {
					return
				}
				if (this.overlay) {
					c.ui.dialog.overlayInstances--;
					if (!c.ui.dialog.overlayInstances) {
						this.document.unbind("focusin.dialog")
					}
					this.overlay.remove();
					this.overlay = null
				}
			}
		});
		c.ui.dialog.overlayInstances = 0;
		if (c.uiBackCompat !== false) {
			c.widget("ui.dialog", c.ui.dialog, {
				_position: function() {
					var f = this.options.position, g = [], h = [0, 0], e;
					if (f) {
						if (typeof f === "string" || (typeof f === "object" && "0"in f)) {
							g = f.split ? f.split(" ") : [f[0], f[1]];
							if (g.length === 1) {
								g[1] = g[0]
							}
							c.each(["left", "top"], function(l, k) {
								if (+g[l] === g[l]) {
									h[l] = g[l];
									g[l] = k
								}
							});
							f = {
								my: g[0] + (h[0] < 0 ? h[0] : "+" + h[0]) + " " + g[1] + (h[1] < 0 ? h[1] : "+" + h[1]),
								at: g.join(" ")
							}
						}
						f = c.extend({}, c.ui.dialog.prototype.options.position, f)
					} else {
						f = c.ui.dialog.prototype.options.position
					}
					e = this.uiDialog.is(":visible");
					if (!e) {
						this.uiDialog.show()
					}
					this.uiDialog.position(f);
					if (!e) {
						this.uiDialog.hide()
					}
				}
			})
		}
	}(jQuery));
	(function(b, d) {
		var a = /up|down|vertical/
		  , c = /up|left|vertical|horizontal/;
		b.effects.effect.blind = function(g, p) {
			var h = b(this), s = ["position", "top", "bottom", "left", "right", "height", "width"], q = b.effects.setMode(h, g.mode || "hide"), t = g.direction || "up", l = a.test(t), k = l ? "height" : "width", r = l ? "top" : "left", v = c.test(t), n = {}, u = q === "show", f, e, m;
			if (h.parent().is(".ui-effects-wrapper")) {
				b.effects.save(h.parent(), s)
			} else {
				b.effects.save(h, s)
			}
			h.show();
			f = b.effects.createWrapper(h).css({
				overflow: "hidden"
			});
			e = f[k]();
			m = parseFloat(f.css(r)) || 0;
			n[k] = u ? e : 0;
			if (!v) {
				h.css(l ? "bottom" : "right", 0).css(l ? "top" : "left", "auto").css({
					position: "absolute"
				});
				n[r] = u ? m : e + m
			}
			if (u) {
				f.css(k, 0);
				if (!v) {
					f.css(r, m + e)
				}
			}
			f.animate(n, {
				duration: g.duration,
				easing: g.easing,
				queue: false,
				complete: function() {
					if (q === "hide") {
						h.hide()
					}
					b.effects.restore(h, s);
					b.effects.removeWrapper(h);
					p()
				}
			})
		}
	}
	)(jQuery);
	(function(a, b) {
		a.effects.effect.bounce = function(n, m) {
			var c = a(this), d = ["position", "top", "bottom", "left", "right", "height", "width"], l = a.effects.setMode(c, n.mode || "effect"), k = l === "hide", w = l === "show", x = n.direction || "up", e = n.distance, h = n.times || 5, y = h * 2 + (w || k ? 1 : 0), v = n.duration / y, q = n.easing, f = (x === "up" || x === "down") ? "top" : "left", p = (x === "up" || x === "left"), u, g, t, r = c.queue(), s = r.length;
			if (w || k) {
				d.push("opacity")
			}
			a.effects.save(c, d);
			c.show();
			a.effects.createWrapper(c);
			if (!e) {
				e = c[f === "top" ? "outerHeight" : "outerWidth"]() / 3
			}
			if (w) {
				t = {
					opacity: 1
				};
				t[f] = 0;
				c.css("opacity", 0).css(f, p ? -e * 2 : e * 2).animate(t, v, q)
			}
			if (k) {
				e = e / Math.pow(2, h - 1)
			}
			t = {};
			t[f] = 0;
			for (u = 0; u < h; u++) {
				g = {};
				g[f] = (p ? "-=" : "+=") + e;
				c.animate(g, v, q).animate(t, v, q);
				e = k ? e * 2 : e / 2
			}
			if (k) {
				g = {
					opacity: 0
				};
				g[f] = (p ? "-=" : "+=") + e;
				c.animate(g, v, q)
			}
			c.queue(function() {
				if (k) {
					c.hide()
				}
				a.effects.restore(c, d);
				a.effects.removeWrapper(c);
				m()
			});
			if (s > 1) {
				r.splice.apply(r, [1, 0].concat(r.splice(s, y + 1)))
			}
			c.dequeue()
		}
	}
	)(jQuery);
	(function(a, b) {
		a.effects.effect.clip = function(f, k) {
			var g = a(this), p = ["position", "top", "bottom", "left", "right", "height", "width"], n = a.effects.setMode(g, f.mode || "hide"), r = n === "show", q = f.direction || "vertical", m = q === "vertical", s = m ? "height" : "width", l = m ? "top" : "left", h = {}, d, e, c;
			a.effects.save(g, p);
			g.show();
			d = a.effects.createWrapper(g).css({
				overflow: "hidden"
			});
			e = (g[0].tagName === "IMG") ? d : g;
			c = e[s]();
			if (r) {
				e.css(s, 0);
				e.css(l, c / 2)
			}
			h[s] = r ? c : 0;
			h[l] = r ? 0 : c / 2;
			e.animate(h, {
				queue: false,
				duration: f.duration,
				easing: f.easing,
				complete: function() {
					if (!r) {
						g.hide()
					}
					a.effects.restore(g, p);
					a.effects.removeWrapper(g);
					k()
				}
			})
		}
	}
	)(jQuery);
	(function(a, b) {
		a.effects.effect.drop = function(d, h) {
			var e = a(this), l = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], k = a.effects.setMode(e, d.mode || "hide"), n = k === "show", m = d.direction || "left", f = (m === "up" || m === "down") ? "top" : "left", p = (m === "up" || m === "left") ? "pos" : "neg", g = {
				opacity: n ? 1 : 0
			}, c;
			a.effects.save(e, l);
			e.show();
			a.effects.createWrapper(e);
			c = d.distance || e[f === "top" ? "outerHeight" : "outerWidth"](true) / 2;
			if (n) {
				e.css("opacity", 0).css(f, p === "pos" ? -c : c)
			}
			g[f] = (n ? (p === "pos" ? "+=" : "-=") : (p === "pos" ? "-=" : "+=")) + c;
			e.animate(g, {
				queue: false,
				duration: d.duration,
				easing: d.easing,
				complete: function() {
					if (k === "hide") {
						e.hide()
					}
					a.effects.restore(e, l);
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
		a.effects.effect.fold = function(e, k) {
			var f = a(this), q = ["position", "top", "bottom", "left", "right", "height", "width"], m = a.effects.setMode(f, e.mode || "hide"), t = m === "show", n = m === "hide", v = e.size || 15, p = /([0-9]+)%/.exec(v), u = !!e.horizFirst, l = t !== u, g = l ? ["width", "height"] : ["height", "width"], h = e.duration / 2, d, c, s = {}, r = {};
			a.effects.save(f, q);
			f.show();
			d = a.effects.createWrapper(f).css({
				overflow: "hidden"
			});
			c = l ? [d.width(), d.height()] : [d.height(), d.width()];
			if (p) {
				v = parseInt(p[1], 10) / 100 * c[n ? 0 : 1]
			}
			if (t) {
				d.css(u ? {
					height: 0,
					width: v
				} : {
					height: v,
					width: 0
				})
			}
			s[g[0]] = t ? c[0] : v;
			r[g[1]] = t ? c[1] : 0;
			d.animate(s, h, e.easing).animate(r, h, e.easing, function() {
				if (n) {
					f.hide()
				}
				a.effects.restore(f, q);
				a.effects.removeWrapper(f);
				k()
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
			var e = a(this), l = a.effects.setMode(e, c.mode || "show"), q = l === "show", m = l === "hide", r = (q || l === "hide"), n = ((c.times || 5) * 2) + (r ? 1 : 0), f = c.duration / n, p = 0, k = e.queue(), d = k.length, h;
			if (q || !e.is(":visible")) {
				e.css("opacity", 0).show();
				p = 1
			}
			for (h = 1; h < n; h++) {
				e.animate({
					opacity: p
				}, f, c.easing);
				p = 1 - p
			}
			e.animate({
				opacity: p
			}, f, c.easing);
			e.queue(function() {
				if (m) {
					e.hide()
				}
				g()
			});
			if (d > 1) {
				k.splice.apply(k, [1, 0].concat(k.splice(d, n + 1)))
			}
			e.dequeue()
		}
	}
	)(jQuery);
	(function(a, b) {
		a.effects.effect.puff = function(l, c) {
			var h = a(this)
			  , k = a.effects.setMode(h, l.mode || "hide")
			  , f = k === "hide"
			  , g = parseInt(l.percent, 10) || 150
			  , e = g / 100
			  , d = {
				height: h.height(),
				width: h.width(),
				outerHeight: h.outerHeight(),
				outerWidth: h.outerWidth()
			};
			a.extend(l, {
				effect: "scale",
				queue: false,
				fade: true,
				mode: k,
				complete: c,
				percent: f ? g : 100,
				from: f ? d : {
					height: d.height * e,
					width: d.width * e,
					outerHeight: d.outerHeight * e,
					outerWidth: d.outerWidth * e
				}
			});
			h.effect(l)
		}
		;
		a.effects.effect.scale = function(c, f) {
			var d = a(this)
			  , n = a.extend(true, {}, c)
			  , g = a.effects.setMode(d, c.mode || "effect")
			  , h = parseInt(c.percent, 10) || (parseInt(c.percent, 10) === 0 ? 0 : (g === "hide" ? 0 : 100))
			  , l = c.direction || "both"
			  , m = c.origin
			  , e = {
				height: d.height(),
				width: d.width(),
				outerHeight: d.outerHeight(),
				outerWidth: d.outerWidth()
			}
			  , k = {
				y: l !== "horizontal" ? (h / 100) : 1,
				x: l !== "vertical" ? (h / 100) : 1
			};
			n.effect = "size";
			n.queue = false;
			n.complete = f;
			if (g !== "effect") {
				n.origin = m || ["middle", "center"];
				n.restore = true
			}
			n.from = c.from || (g === "show" ? {
				height: 0,
				width: 0,
				outerHeight: 0,
				outerWidth: 0
			} : e);
			n.to = {
				height: e.height * k.y,
				width: e.width * k.x,
				outerHeight: e.outerHeight * k.y,
				outerWidth: e.outerWidth * k.x
			};
			if (n.fade) {
				if (g === "show") {
					n.from.opacity = 0;
					n.to.opacity = 1
				}
				if (g === "hide") {
					n.from.opacity = 1;
					n.to.opacity = 0
				}
			}
			d.effect(n)
		}
		;
		a.effects.effect.size = function(n, m) {
			var s, k, l, c = a(this), r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], q = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], p = ["width", "height", "overflow"], g = ["fontSize"], u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], h = a.effects.setMode(c, n.mode || "effect"), t = n.restore || h !== "effect", x = n.scale || "both", v = n.origin || ["middle", "center"], w = c.css("position"), e = t ? r : q, f = {
				height: 0,
				width: 0,
				outerHeight: 0,
				outerWidth: 0
			};
			if (h === "show") {
				c.show()
			}
			s = {
				height: c.height(),
				width: c.width(),
				outerHeight: c.outerHeight(),
				outerWidth: c.outerWidth()
			};
			if (n.mode === "toggle" && h === "show") {
				c.from = n.to || f;
				c.to = n.from || s
			} else {
				c.from = n.from || (h === "show" ? f : s);
				c.to = n.to || (h === "hide" ? f : s)
			}
			l = {
				from: {
					y: c.from.height / s.height,
					x: c.from.width / s.width
				},
				to: {
					y: c.to.height / s.height,
					x: c.to.width / s.width
				}
			};
			if (x === "box" || x === "both") {
				if (l.from.y !== l.to.y) {
					e = e.concat(u);
					c.from = a.effects.setTransition(c, u, l.from.y, c.from);
					c.to = a.effects.setTransition(c, u, l.to.y, c.to)
				}
				if (l.from.x !== l.to.x) {
					e = e.concat(d);
					c.from = a.effects.setTransition(c, d, l.from.x, c.from);
					c.to = a.effects.setTransition(c, d, l.to.x, c.to)
				}
			}
			if (x === "content" || x === "both") {
				if (l.from.y !== l.to.y) {
					e = e.concat(g).concat(p);
					c.from = a.effects.setTransition(c, g, l.from.y, c.from);
					c.to = a.effects.setTransition(c, g, l.to.y, c.to)
				}
			}
			a.effects.save(c, e);
			c.show();
			a.effects.createWrapper(c);
			c.css("overflow", "hidden").css(c.from);
			if (v) {
				k = a.effects.getBaseline(v, s);
				c.from.top = (s.outerHeight - c.outerHeight()) * k.y;
				c.from.left = (s.outerWidth - c.outerWidth()) * k.x;
				c.to.top = (s.outerHeight - c.to.outerHeight) * k.y;
				c.to.left = (s.outerWidth - c.to.outerWidth) * k.x
			}
			c.css(c.from);
			if (x === "content" || x === "both") {
				u = u.concat(["marginTop", "marginBottom"]).concat(g);
				d = d.concat(["marginLeft", "marginRight"]);
				p = r.concat(u).concat(d);
				c.find("*[width]").each(function() {
					var y = a(this)
					  , o = {
						height: y.height(),
						width: y.width(),
						outerHeight: y.outerHeight(),
						outerWidth: y.outerWidth()
					};
					if (t) {
						a.effects.save(y, p)
					}
					y.from = {
						height: o.height * l.from.y,
						width: o.width * l.from.x,
						outerHeight: o.outerHeight * l.from.y,
						outerWidth: o.outerWidth * l.from.x
					};
					y.to = {
						height: o.height * l.to.y,
						width: o.width * l.to.x,
						outerHeight: o.height * l.to.y,
						outerWidth: o.width * l.to.x
					};
					if (l.from.y !== l.to.y) {
						y.from = a.effects.setTransition(y, u, l.from.y, y.from);
						y.to = a.effects.setTransition(y, u, l.to.y, y.to)
					}
					if (l.from.x !== l.to.x) {
						y.from = a.effects.setTransition(y, d, l.from.x, y.from);
						y.to = a.effects.setTransition(y, d, l.to.x, y.to)
					}
					y.css(y.from);
					y.animate(y.to, n.duration, n.easing, function() {
						if (t) {
							a.effects.restore(y, p)
						}
					})
				})
			}
			c.animate(c.to, {
				queue: false,
				duration: n.duration,
				easing: n.easing,
				complete: function() {
					if (c.to.opacity === 0) {
						c.css("opacity", c.from.opacity)
					}
					if (h === "hide") {
						c.hide()
					}
					a.effects.restore(c, e);
					if (!t) {
						if (w === "static") {
							c.css({
								position: "relative",
								top: c.to.top,
								left: c.to.left
							})
						} else {
							a.each(["top", "left"], function(o, y) {
								c.css(y, function(A, C) {
									var B = parseInt(C, 10)
									  , z = o ? c.to.left : c.to.top;
									if (C === "auto") {
										return z + "px"
									}
									return B + z + "px"
								})
							})
						}
					}
					a.effects.removeWrapper(c);
					m()
				}
			})
		}
	}
	)(jQuery);
	(function(a, b) {
		a.effects.effect.shake = function(m, l) {
			var c = a(this), d = ["position", "top", "bottom", "left", "right", "height", "width"], k = a.effects.setMode(c, m.mode || "effect"), v = m.direction || "left", e = m.distance || 20, h = m.times || 3, w = h * 2 + 1, r = Math.round(m.duration / w), g = (v === "up" || v === "down") ? "top" : "left", f = (v === "up" || v === "left"), u = {}, t = {}, s = {}, q, n = c.queue(), p = n.length;
			a.effects.save(c, d);
			c.show();
			a.effects.createWrapper(c);
			u[g] = (f ? "-=" : "+=") + e;
			t[g] = (f ? "+=" : "-=") + e * 2;
			s[g] = (f ? "-=" : "+=") + e * 2;
			c.animate(u, r, m.easing);
			for (q = 1; q < h; q++) {
				c.animate(t, r, m.easing).animate(s, r, m.easing)
			}
			c.animate(t, r, m.easing).animate(u, r / 2, m.easing).queue(function() {
				if (k === "hide") {
					c.hide()
				}
				a.effects.restore(c, d);
				a.effects.removeWrapper(c);
				l()
			});
			if (p > 1) {
				n.splice.apply(n, [1, 0].concat(n.splice(p, w + 1)))
			}
			c.dequeue()
		}
	}
	)(jQuery);
	(function(a, b) {
		a.effects.effect.slide = function(e, k) {
			var f = a(this), m = ["position", "top", "bottom", "left", "right", "width", "height"], l = a.effects.setMode(f, e.mode || "show"), p = l === "show", n = e.direction || "left", g = (n === "up" || n === "down") ? "top" : "left", d = (n === "up" || n === "left"), c, h = {};
			a.effects.save(f, m);
			f.show();
			c = e.distance || f[g === "top" ? "outerHeight" : "outerWidth"](true);
			a.effects.createWrapper(f).css({
				overflow: "hidden"
			});
			if (p) {
				f.css(g, d ? (isNaN(c) ? "-" + c : -c) : c)
			}
			h[g] = (p ? (d ? "+=" : "-=") : (d ? "-=" : "+=")) + c;
			f.animate(h, {
				queue: false,
				duration: e.duration,
				easing: e.easing,
				complete: function() {
					if (l === "hide") {
						f.hide()
					}
					a.effects.restore(f, m);
					a.effects.removeWrapper(f);
					k()
				}
			})
		}
	}
	)(jQuery);
	(function(a, b) {
		a.effects.effect.transfer = function(d, h) {
			var f = a(this)
			  , m = a(d.to)
			  , q = m.css("position") === "fixed"
			  , l = a("body")
			  , n = q ? l.scrollTop() : 0
			  , p = q ? l.scrollLeft() : 0
			  , c = m.offset()
			  , g = {
				top: c.top - n,
				left: c.left - p,
				height: m.innerHeight(),
				width: m.innerWidth()
			}
			  , k = f.offset()
			  , e = a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(d.className).css({
				top: k.top - n,
				left: k.left - p,
				height: f.innerHeight(),
				width: f.innerWidth(),
				position: q ? "fixed" : "absolute"
			}).animate(g, d.duration, d.easing, function() {
				e.remove();
				h()
			})
		}
	}
	)(jQuery);
	(function(a, b) {
		a.widget("ui.menu", {
			version: "1.10.3",
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
				this.mouseHandled = false;
				this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
					role: this.options.role,
					tabIndex: 0
				}).bind("click" + this.eventNamespace, a.proxy(function(c) {
					if (this.options.disabled) {
						c.preventDefault()
					}
				}, this));
				if (this.options.disabled) {
					this.element.addClass("ui-state-disabled").attr("aria-disabled", "true")
				}
				this._on({
					"mousedown .ui-menu-item > a": function(c) {
						c.preventDefault()
					},
					"click .ui-state-disabled > a": function(c) {
						c.preventDefault()
					},
					"click .ui-menu-item:has(a)": function(c) {
						var d = a(c.target).closest(".ui-menu-item");
						if (!this.mouseHandled && d.not(".ui-state-disabled").length) {
							this.mouseHandled = true;
							this.select(c);
							if (d.has(".ui-menu").length) {
								this.expand(c)
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
					"mouseenter .ui-menu-item": function(c) {
						var d = a(c.currentTarget);
						d.siblings().children(".ui-state-active").removeClass("ui-state-active");
						this.focus(c, d)
					},
					mouseleave: "collapseAll",
					"mouseleave .ui-menu": "collapseAll",
					focus: function(e, c) {
						var d = this.active || this.element.children(".ui-menu-item").eq(0);
						if (!c) {
							this.focus(e, d)
						}
					},
					blur: function(c) {
						this._delay(function() {
							if (!a.contains(this.element[0], this.document[0].activeElement)) {
								this.collapseAll(c)
							}
						})
					},
					keydown: "_keydown"
				});
				this.refresh();
				this._on(this.document, {
					click: function(c) {
						if (!a(c.target).closest(".ui-menu").length) {
							this.collapseAll(c)
						}
						this.mouseHandled = false
					}
				})
			},
			_destroy: function() {
				this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
				this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
					var c = a(this);
					if (c.data("ui-menu-submenu-carat")) {
						c.remove()
					}
				});
				this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
			},
			_keydown: function(k) {
				var d, h, l, g, f, c = true;
				function e(m) {
					return m.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
				}
				switch (k.keyCode) {
				case a.ui.keyCode.PAGE_UP:
					this.previousPage(k);
					break;
				case a.ui.keyCode.PAGE_DOWN:
					this.nextPage(k);
					break;
				case a.ui.keyCode.HOME:
					this._move("first", "first", k);
					break;
				case a.ui.keyCode.END:
					this._move("last", "last", k);
					break;
				case a.ui.keyCode.UP:
					this.previous(k);
					break;
				case a.ui.keyCode.DOWN:
					this.next(k);
					break;
				case a.ui.keyCode.LEFT:
					this.collapse(k);
					break;
				case a.ui.keyCode.RIGHT:
					if (this.active && !this.active.is(".ui-state-disabled")) {
						this.expand(k)
					}
					break;
				case a.ui.keyCode.ENTER:
				case a.ui.keyCode.SPACE:
					this._activate(k);
					break;
				case a.ui.keyCode.ESCAPE:
					this.collapse(k);
					break;
				default:
					c = false;
					h = this.previousFilter || "";
					l = String.fromCharCode(k.keyCode);
					g = false;
					clearTimeout(this.filterTimer);
					if (l === h) {
						g = true
					} else {
						l = h + l
					}
					f = new RegExp("^" + e(l),"i");
					d = this.activeMenu.children(".ui-menu-item").filter(function() {
						return f.test(a(this).children("a").text())
					});
					d = g && d.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : d;
					if (!d.length) {
						l = String.fromCharCode(k.keyCode);
						f = new RegExp("^" + e(l),"i");
						d = this.activeMenu.children(".ui-menu-item").filter(function() {
							return f.test(a(this).children("a").text())
						})
					}
					if (d.length) {
						this.focus(k, d);
						if (d.length > 1) {
							this.previousFilter = l;
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
				if (c) {
					k.preventDefault()
				}
			},
			_activate: function(c) {
				if (!this.active.is(".ui-state-disabled")) {
					if (this.active.children("a[aria-haspopup='true']").length) {
						this.expand(c)
					} else {
						this.select(c)
					}
				}
			},
			refresh: function() {
				var e, d = this.options.icons.submenu, c = this.element.find(this.options.menus);
				c.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
					role: this.options.role,
					"aria-hidden": "true",
					"aria-expanded": "false"
				}).each(function() {
					var h = a(this)
					  , g = h.prev("a")
					  , f = a("<span>").addClass("ui-menu-icon ui-icon " + d).data("ui-menu-submenu-carat", true);
					g.attr("aria-haspopup", "true").prepend(f);
					h.attr("aria-labelledby", g.attr("id"))
				});
				e = c.add(this.element);
				e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
					tabIndex: -1,
					role: this._itemRole()
				});
				e.children(":not(.ui-menu-item)").each(function() {
					var f = a(this);
					if (!/[^\-\u2014\u2013\s]/.test(f.text())) {
						f.addClass("ui-widget-content ui-menu-divider")
					}
				});
				e.children(".ui-state-disabled").attr("aria-disabled", "true");
				if (this.active && !a.contains(this.element[0], this.active[0])) {
					this.blur()
				}
			},
			_itemRole: function() {
				return {
					menu: "menuitem",
					listbox: "option"
				}[this.options.role]
			},
			_setOption: function(c, d) {
				if (c === "icons") {
					this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(d.submenu)
				}
				this._super(c, d)
			},
			focus: function(d, c) {
				var f, e;
				this.blur(d, d && d.type === "focus");
				this._scrollIntoView(c);
				this.active = c.first();
				e = this.active.children("a").addClass("ui-state-focus");
				if (this.options.role) {
					this.element.attr("aria-activedescendant", e.attr("id"))
				}
				this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
				if (d && d.type === "keydown") {
					this._close()
				} else {
					this.timer = this._delay(function() {
						this._close()
					}, this.delay)
				}
				f = c.children(".ui-menu");
				if (f.length && (/^mouse/.test(d.type))) {
					this._startOpening(f)
				}
				this.activeMenu = c.parent();
				this._trigger("focus", d, {
					item: c
				})
			},
			_scrollIntoView: function(f) {
				var k, e, g, c, d, h;
				if (this._hasScroll()) {
					k = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0;
					e = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0;
					g = f.offset().top - this.activeMenu.offset().top - k - e;
					c = this.activeMenu.scrollTop();
					d = this.activeMenu.height();
					h = f.height();
					if (g < 0) {
						this.activeMenu.scrollTop(c + g)
					} else {
						if (g + h > d) {
							this.activeMenu.scrollTop(c + g - d + h)
						}
					}
				}
			},
			blur: function(d, c) {
				if (!c) {
					clearTimeout(this.timer)
				}
				if (!this.active) {
					return
				}
				this.active.children("a").removeClass("ui-state-focus");
				this.active = null;
				this._trigger("blur", d, {
					item: this.active
				})
			},
			_startOpening: function(c) {
				clearTimeout(this.timer);
				if (c.attr("aria-hidden") !== "true") {
					return
				}
				this.timer = this._delay(function() {
					this._close();
					this._open(c)
				}, this.delay)
			},
			_open: function(d) {
				var c = a.extend({
					of: this.active
				}, this.options.position);
				clearTimeout(this.timer);
				this.element.find(".ui-menu").not(d.parents(".ui-menu")).hide().attr("aria-hidden", "true");
				d.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
			},
			collapseAll: function(d, c) {
				clearTimeout(this.timer);
				this.timer = this._delay(function() {
					var e = c ? this.element : a(d && d.target).closest(this.element.find(".ui-menu"));
					if (!e.length) {
						e = this.element
					}
					this._close(e);
					this.blur(d);
					this.activeMenu = e
				}, this.delay)
			},
			_close: function(c) {
				if (!c) {
					c = this.active ? this.active.parent() : this.element
				}
				c.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
			},
			collapse: function(d) {
				var c = this.active && this.active.parent().closest(".ui-menu-item", this.element);
				if (c && c.length) {
					this._close();
					this.focus(d, c)
				}
			},
			expand: function(d) {
				var c = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
				if (c && c.length) {
					this._open(c.parent());
					this._delay(function() {
						this.focus(d, c)
					})
				}
			},
			next: function(c) {
				this._move("next", "first", c)
			},
			previous: function(c) {
				this._move("prev", "last", c)
			},
			isFirstItem: function() {
				return this.active && !this.active.prevAll(".ui-menu-item").length
			},
			isLastItem: function() {
				return this.active && !this.active.nextAll(".ui-menu-item").length
			},
			_move: function(f, d, e) {
				var c;
				if (this.active) {
					if (f === "first" || f === "last") {
						c = this.active[f === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1)
					} else {
						c = this.active[f + "All"](".ui-menu-item").eq(0)
					}
				}
				if (!c || !c.length || !this.active) {
					c = this.activeMenu.children(".ui-menu-item")[d]()
				}
				this.focus(e, c)
			},
			nextPage: function(e) {
				var d, f, c;
				if (!this.active) {
					this.next(e);
					return
				}
				if (this.isLastItem()) {
					return
				}
				if (this._hasScroll()) {
					f = this.active.offset().top;
					c = this.element.height();
					this.active.nextAll(".ui-menu-item").each(function() {
						d = a(this);
						return d.offset().top - f - c < 0
					});
					this.focus(e, d)
				} else {
					this.focus(e, this.activeMenu.children(".ui-menu-item")[!this.active ? "first" : "last"]())
				}
			},
			previousPage: function(e) {
				var d, f, c;
				if (!this.active) {
					this.next(e);
					return
				}
				if (this.isFirstItem()) {
					return
				}
				if (this._hasScroll()) {
					f = this.active.offset().top;
					c = this.element.height();
					this.active.prevAll(".ui-menu-item").each(function() {
						d = a(this);
						return d.offset().top - f + c > 0
					});
					this.focus(e, d)
				} else {
					this.focus(e, this.activeMenu.children(".ui-menu-item").first())
				}
			},
			_hasScroll: function() {
				return this.element.outerHeight() < this.element.prop("scrollHeight")
			},
			select: function(c) {
				this.active = this.active || a(c.target).closest(".ui-menu-item");
				var d = {
					item: this.active
				};
				if (!this.active.has(".ui-menu").length) {
					this.collapseAll(c, true)
				}
				this._trigger("select", c, d)
			}
		})
	}(jQuery));
	(function(e, c) {
		e.ui = e.ui || {};
		var l, m = Math.max, q = Math.abs, o = Math.round, d = /left|center|right/, h = /top|center|bottom/, a = /[\+\-]\d+(\.[\d]+)?%?/, n = /^\w+/, b = /%$/, g = e.fn.position;
		function p(t, s, r) {
			return [parseFloat(t[0]) * (b.test(t[0]) ? s / 100 : 1), parseFloat(t[1]) * (b.test(t[1]) ? r / 100 : 1)]
		}
		function k(r, s) {
			return parseInt(e.css(r, s), 10) || 0
		}
		function f(s) {
			var r = s[0];
			if (r.nodeType === 9) {
				return {
					width: s.width(),
					height: s.height(),
					offset: {
						top: 0,
						left: 0
					}
				}
			}
			if (e.isWindow(r)) {
				return {
					width: s.width(),
					height: s.height(),
					offset: {
						top: s.scrollTop(),
						left: s.scrollLeft()
					}
				}
			}
			if (r.preventDefault) {
				return {
					width: 0,
					height: 0,
					offset: {
						top: r.pageY,
						left: r.pageX
					}
				}
			}
			return {
				width: s.outerWidth(),
				height: s.outerHeight(),
				offset: s.offset()
			}
		}
		e.position = {
			scrollbarWidth: function() {
				if (l !== c) {
					return l
				}
				var s, r, u = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), t = u.children()[0];
				e("body").append(u);
				s = t.offsetWidth;
				u.css("overflow", "scroll");
				r = t.offsetWidth;
				if (s === r) {
					r = u[0].clientWidth
				}
				u.remove();
				return (l = s - r)
			},
			getScrollInfo: function(v) {
				var u = v.isWindow ? "" : v.element.css("overflow-x")
				  , t = v.isWindow ? "" : v.element.css("overflow-y")
				  , s = u === "scroll" || (u === "auto" && v.width < v.element[0].scrollWidth)
				  , r = t === "scroll" || (t === "auto" && v.height < v.element[0].scrollHeight);
				return {
					width: r ? e.position.scrollbarWidth() : 0,
					height: s ? e.position.scrollbarWidth() : 0
				}
			},
			getWithinInfo: function(s) {
				var t = e(s || window)
				  , r = e.isWindow(t[0]);
				return {
					element: t,
					isWindow: r,
					offset: t.offset() || {
						left: 0,
						top: 0
					},
					scrollLeft: t.scrollLeft(),
					scrollTop: t.scrollTop(),
					width: r ? t.width() : t.outerWidth(),
					height: r ? t.height() : t.outerHeight()
				}
			}
		};
		e.fn.position = function(B) {
			if (!B || !B.of) {
				return g.apply(this, arguments)
			}
			B = e.extend({}, B);
			var C, y, w, A, v, r, x = e(B.of), u = e.position.getWithinInfo(B.within), s = e.position.getScrollInfo(u), z = (B.collision || "flip").split(" "), t = {};
			r = f(x);
			if (x[0].preventDefault) {
				B.at = "left top"
			}
			y = r.width;
			w = r.height;
			A = r.offset;
			v = e.extend({}, A);
			e.each(["my", "at"], function() {
				var F = (B[this] || "").split(" "), E, D;
				if (F.length === 1) {
					F = d.test(F[0]) ? F.concat(["center"]) : h.test(F[0]) ? ["center"].concat(F) : ["center", "center"]
				}
				F[0] = d.test(F[0]) ? F[0] : "center";
				F[1] = h.test(F[1]) ? F[1] : "center";
				E = a.exec(F[0]);
				D = a.exec(F[1]);
				t[this] = [E ? E[0] : 0, D ? D[0] : 0];
				B[this] = [n.exec(F[0])[0], n.exec(F[1])[0]]
			});
			if (z.length === 1) {
				z[1] = z[0]
			}
			if (B.at[0] === "right") {
				v.left += y
			} else {
				if (B.at[0] === "center") {
					v.left += y / 2
				}
			}
			if (B.at[1] === "bottom") {
				v.top += w
			} else {
				if (B.at[1] === "center") {
					v.top += w / 2
				}
			}
			C = p(t.at, y, w);
			v.left += C[0];
			v.top += C[1];
			return this.each(function() {
				var E, N, G = e(this), I = G.outerWidth(), F = G.outerHeight(), H = k(this, "marginLeft"), D = k(this, "marginTop"), M = I + H + k(this, "marginRight") + s.width, L = F + D + k(this, "marginBottom") + s.height, J = e.extend({}, v), K = p(t.my, G.outerWidth(), G.outerHeight());
				if (B.my[0] === "right") {
					J.left -= I
				} else {
					if (B.my[0] === "center") {
						J.left -= I / 2
					}
				}
				if (B.my[1] === "bottom") {
					J.top -= F
				} else {
					if (B.my[1] === "center") {
						J.top -= F / 2
					}
				}
				J.left += K[0];
				J.top += K[1];
				if (!e.support.offsetFractions) {
					J.left = o(J.left);
					J.top = o(J.top)
				}
				E = {
					marginLeft: H,
					marginTop: D
				};
				e.each(["left", "top"], function(P, O) {
					if (e.ui.position[z[P]]) {
						e.ui.position[z[P]][O](J, {
							targetWidth: y,
							targetHeight: w,
							elemWidth: I,
							elemHeight: F,
							collisionPosition: E,
							collisionWidth: M,
							collisionHeight: L,
							offset: [C[0] + K[0], C[1] + K[1]],
							my: B.my,
							at: B.at,
							within: u,
							elem: G
						})
					}
				});
				if (B.using) {
					N = function(R) {
						var T = A.left - J.left
						  , Q = T + y - I
						  , S = A.top - J.top
						  , P = S + w - F
						  , O = {
							target: {
								element: x,
								left: A.left,
								top: A.top,
								width: y,
								height: w
							},
							element: {
								element: G,
								left: J.left,
								top: J.top,
								width: I,
								height: F
							},
							horizontal: Q < 0 ? "left" : T > 0 ? "right" : "center",
							vertical: P < 0 ? "top" : S > 0 ? "bottom" : "middle"
						};
						if (y < I && q(T + Q) < y) {
							O.horizontal = "center"
						}
						if (w < F && q(S + P) < w) {
							O.vertical = "middle"
						}
						if (m(q(T), q(Q)) > m(q(S), q(P))) {
							O.important = "horizontal"
						} else {
							O.important = "vertical"
						}
						B.using.call(this, R, O)
					}
				}
				G.offset(e.extend(J, {
					using: N
				}))
			})
		}
		;
		e.ui.position = {
			fit: {
				left: function(v, u) {
					var t = u.within, x = t.isWindow ? t.scrollLeft : t.offset.left, z = t.width, w = v.left - u.collisionPosition.marginLeft, y = x - w, s = w + u.collisionWidth - z - x, r;
					if (u.collisionWidth > z) {
						if (y > 0 && s <= 0) {
							r = v.left + y + u.collisionWidth - z - x;
							v.left += y - r
						} else {
							if (s > 0 && y <= 0) {
								v.left = x
							} else {
								if (y > s) {
									v.left = x + z - u.collisionWidth
								} else {
									v.left = x
								}
							}
						}
					} else {
						if (y > 0) {
							v.left += y
						} else {
							if (s > 0) {
								v.left -= s
							} else {
								v.left = m(v.left - w, v.left)
							}
						}
					}
				},
				top: function(u, t) {
					var s = t.within, y = s.isWindow ? s.scrollTop : s.offset.top, z = t.within.height, w = u.top - t.collisionPosition.marginTop, x = y - w, v = w + t.collisionHeight - z - y, r;
					if (t.collisionHeight > z) {
						if (x > 0 && v <= 0) {
							r = u.top + x + t.collisionHeight - z - y;
							u.top += x - r
						} else {
							if (v > 0 && x <= 0) {
								u.top = y
							} else {
								if (x > v) {
									u.top = y + z - t.collisionHeight
								} else {
									u.top = y
								}
							}
						}
					} else {
						if (x > 0) {
							u.top += x
						} else {
							if (v > 0) {
								u.top -= v
							} else {
								u.top = m(u.top - w, u.top)
							}
						}
					}
				}
			},
			flip: {
				left: function(x, w) {
					var v = w.within, B = v.offset.left + v.scrollLeft, E = v.width, t = v.isWindow ? v.scrollLeft : v.offset.left, y = x.left - w.collisionPosition.marginLeft, C = y - t, s = y + w.collisionWidth - E - t, A = w.my[0] === "left" ? -w.elemWidth : w.my[0] === "right" ? w.elemWidth : 0, D = w.at[0] === "left" ? w.targetWidth : w.at[0] === "right" ? -w.targetWidth : 0, u = -2 * w.offset[0], r, z;
					if (C < 0) {
						r = x.left + A + D + u + w.collisionWidth - E - B;
						if (r < 0 || r < q(C)) {
							x.left += A + D + u
						}
					} else {
						if (s > 0) {
							z = x.left - w.collisionPosition.marginLeft + A + D + u - t;
							if (z > 0 || q(z) < s) {
								x.left += A + D + u
							}
						}
					}
				},
				top: function(w, v) {
					var u = v.within, D = u.offset.top + u.scrollTop, E = u.height, r = u.isWindow ? u.scrollTop : u.offset.top, y = w.top - v.collisionPosition.marginTop, A = y - r, x = y + v.collisionHeight - E - r, B = v.my[1] === "top", z = B ? -v.elemHeight : v.my[1] === "bottom" ? v.elemHeight : 0, F = v.at[1] === "top" ? v.targetHeight : v.at[1] === "bottom" ? -v.targetHeight : 0, t = -2 * v.offset[1], C, s;
					if (A < 0) {
						s = w.top + z + F + t + v.collisionHeight - E - D;
						if ((w.top + z + F + t) > A && (s < 0 || s < q(A))) {
							w.top += z + F + t
						}
					} else {
						if (x > 0) {
							C = w.top - v.collisionPosition.marginTop + z + F + t - r;
							if ((w.top + z + F + t) > x && (C > 0 || q(C) < x)) {
								w.top += z + F + t
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
			var v, x, s, u, t, r = document.getElementsByTagName("body")[0], w = document.createElement("div");
			v = document.createElement(r ? "div" : "body");
			s = {
				visibility: "hidden",
				width: 0,
				height: 0,
				border: 0,
				margin: 0,
				background: "none"
			};
			if (r) {
				e.extend(s, {
					position: "absolute",
					left: "-1000px",
					top: "-1000px"
				})
			}
			for (t in s) {
				v.style[t] = s[t]
			}
			v.appendChild(w);
			x = r || document.documentElement;
			x.insertBefore(v, x.firstChild);
			w.style.cssText = "position: absolute; left: 10.7432222px;";
			u = e(w).offset().left;
			e.support.offsetFractions = u > 10 && u < 11;
			v.innerHTML = "";
			x.removeChild(v)
		}
		)()
	}(jQuery));
	(function(a, b) {
		a.widget("ui.progressbar", {
			version: "1.10.3",
			options: {
				max: 100,
				value: 0,
				change: null,
				complete: null
			},
			min: 0,
			_create: function() {
				this.oldValue = this.options.value = this._constrainedValue();
				this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
					role: "progressbar",
					"aria-valuemin": this.min
				});
				this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
				this._refreshValue()
			},
			_destroy: function() {
				this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
				this.valueDiv.remove()
			},
			value: function(c) {
				if (c === b) {
					return this.options.value
				}
				this.options.value = this._constrainedValue(c);
				this._refreshValue()
			},
			_constrainedValue: function(c) {
				if (c === b) {
					c = this.options.value
				}
				this.indeterminate = c === false;
				if (typeof c !== "number") {
					c = 0
				}
				return this.indeterminate ? false : Math.min(this.options.max, Math.max(this.min, c))
			},
			_setOptions: function(c) {
				var d = c.value;
				delete c.value;
				this._super(c);
				this.options.value = this._constrainedValue(d);
				this._refreshValue()
			},
			_setOption: function(c, d) {
				if (c === "max") {
					d = Math.max(this.min, d)
				}
				this._super(c, d)
			},
			_percentage: function() {
				return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
			},
			_refreshValue: function() {
				var d = this.options.value
				  , c = this._percentage();
				this.valueDiv.toggle(this.indeterminate || d > this.min).toggleClass("ui-corner-right", d === this.options.max).width(c.toFixed(0) + "%");
				this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate);
				if (this.indeterminate) {
					this.element.removeAttr("aria-valuenow");
					if (!this.overlayDiv) {
						this.overlayDiv = a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)
					}
				} else {
					this.element.attr({
						"aria-valuemax": this.options.max,
						"aria-valuenow": d
					});
					if (this.overlayDiv) {
						this.overlayDiv.remove();
						this.overlayDiv = null
					}
				}
				if (this.oldValue !== d) {
					this.oldValue = d;
					this._trigger("change")
				}
				if (d === this.options.max) {
					this._trigger("complete")
				}
			}
		})
	}
	)(jQuery);
	(function(b, c) {
		var a = 5;
		b.widget("ui.slider", b.ui.mouse, {
			version: "1.10.3",
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
				values: null,
				change: null,
				slide: null,
				start: null,
				stop: null
			},
			_create: function() {
				this._keySliding = false;
				this._mouseSliding = false;
				this._animateOff = true;
				this._handleIndex = null;
				this._detectOrientation();
				this._mouseInit();
				this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
				this._refresh();
				this._setOption("disabled", this.options.disabled);
				this._animateOff = false
			},
			_refresh: function() {
				this._createRange();
				this._createHandles();
				this._setupEvents();
				this._refreshValue()
			},
			_createHandles: function() {
				var g, d, e = this.options, k = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), h = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", f = [];
				d = (e.values && e.values.length) || 1;
				if (k.length > d) {
					k.slice(d).remove();
					k = k.slice(0, d)
				}
				for (g = k.length; g < d; g++) {
					f.push(h)
				}
				this.handles = k.add(b(f.join("")).appendTo(this.element));
				this.handle = this.handles.eq(0);
				this.handles.each(function(l) {
					b(this).data("ui-slider-handle-index", l)
				})
			},
			_createRange: function() {
				var d = this.options
				  , e = "";
				if (d.range) {
					if (d.range === true) {
						if (!d.values) {
							d.values = [this._valueMin(), this._valueMin()]
						} else {
							if (d.values.length && d.values.length !== 2) {
								d.values = [d.values[0], d.values[0]]
							} else {
								if (b.isArray(d.values)) {
									d.values = d.values.slice(0)
								}
							}
						}
					}
					if (!this.range || !this.range.length) {
						this.range = b("<div></div>").appendTo(this.element);
						e = "ui-slider-range ui-widget-header ui-corner-all"
					} else {
						this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
							left: "",
							bottom: ""
						})
					}
					this.range.addClass(e + ((d.range === "min" || d.range === "max") ? " ui-slider-range-" + d.range : ""))
				} else {
					this.range = b([])
				}
			},
			_setupEvents: function() {
				var d = this.handles.add(this.range).filter("a");
				this._off(d);
				this._on(d, this._handleEvents);
				this._hoverable(d);
				this._focusable(d)
			},
			_destroy: function() {
				this.handles.remove();
				this.range.remove();
				this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
				this._mouseDestroy()
			},
			_mouseCapture: function(f) {
				var l, p, e, h, n, q, k, d, m = this, g = this.options;
				if (g.disabled) {
					return false
				}
				this.elementSize = {
					width: this.element.outerWidth(),
					height: this.element.outerHeight()
				};
				this.elementOffset = this.element.offset();
				l = {
					x: f.pageX,
					y: f.pageY
				};
				p = this._normValueFromMouse(l);
				e = this._valueMax() - this._valueMin() + 1;
				this.handles.each(function(o) {
					var r = Math.abs(p - m.values(o));
					if ((e > r) || (e === r && (o === m._lastChangedValue || m.values(o) === g.min))) {
						e = r;
						h = b(this);
						n = o
					}
				});
				q = this._start(f, n);
				if (q === false) {
					return false
				}
				this._mouseSliding = true;
				this._handleIndex = n;
				h.addClass("ui-state-active").focus();
				k = h.offset();
				d = !b(f.target).parents().addBack().is(".ui-slider-handle");
				this._clickOffset = d ? {
					left: 0,
					top: 0
				} : {
					left: f.pageX - k.left - (h.width() / 2),
					top: f.pageY - k.top - (h.height() / 2) - (parseInt(h.css("borderTopWidth"), 10) || 0) - (parseInt(h.css("borderBottomWidth"), 10) || 0) + (parseInt(h.css("marginTop"), 10) || 0)
				};
				if (!this.handles.hasClass("ui-state-hover")) {
					this._slide(f, n, p)
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
				var d, h, g, f, k;
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
				k = this._valueMin() + g * f;
				return this._trimAlignValue(k)
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
				var d, e, k;
				if (this.options.values && this.options.values.length) {
					d = this.values(g ? 0 : 1);
					if ((this.options.values.length === 2 && this.options.range === true) && ((g === 0 && f > d) || (g === 1 && f < d))) {
						f = d
					}
					if (f !== this.values(g)) {
						e = this.values();
						e[g] = f;
						k = this._trigger("slide", h, {
							handle: this.handles[g],
							value: f,
							values: e
						});
						d = this.values(g ? 0 : 1);
						if (k !== false) {
							this.values(g, f, true)
						}
					}
				} else {
					if (f !== this.value()) {
						k = this._trigger("slide", h, {
							handle: this.handles[g],
							value: f
						});
						if (k !== false) {
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
					this._lastChangedValue = e;
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
				if (e === "range" && this.options.range === true) {
					if (f === "min") {
						this.options.value = this._values(0);
						this.options.values = null
					} else {
						if (f === "max") {
							this.options.value = this._values(this.options.values.length - 1);
							this.options.values = null
						}
					}
				}
				if (b.isArray(this.options.values)) {
					g = this.options.values.length
				}
				b.Widget.prototype._setOption.apply(this, arguments);
				switch (e) {
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
					break;
				case "range":
					this._animateOff = true;
					this._refresh();
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
					if (this.options.values && this.options.values.length) {
						f = this.options.values.slice();
						for (e = 0; e < f.length; e += 1) {
							f[e] = this._trimAlignValue(f[e])
						}
						return f
					} else {
						return []
					}
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
				var k, h, n, l, p, g = this.options.range, f = this.options, m = this, e = (!this._animateOff) ? f.animate : false, d = {};
				if (this.options.values && this.options.values.length) {
					this.handles.each(function(o) {
						h = (m.values(o) - m._valueMin()) / (m._valueMax() - m._valueMin()) * 100;
						d[m.orientation === "horizontal" ? "left" : "bottom"] = h + "%";
						b(this).stop(1, 1)[e ? "animate" : "css"](d, f.animate);
						if (m.options.range === true) {
							if (m.orientation === "horizontal") {
								if (o === 0) {
									m.range.stop(1, 1)[e ? "animate" : "css"]({
										left: h + "%"
									}, f.animate)
								}
								if (o === 1) {
									m.range[e ? "animate" : "css"]({
										width: (h - k) + "%"
									}, {
										queue: false,
										duration: f.animate
									})
								}
							} else {
								if (o === 0) {
									m.range.stop(1, 1)[e ? "animate" : "css"]({
										bottom: (h) + "%"
									}, f.animate)
								}
								if (o === 1) {
									m.range[e ? "animate" : "css"]({
										height: (h - k) + "%"
									}, {
										queue: false,
										duration: f.animate
									})
								}
							}
						}
						k = h
					})
				} else {
					n = this.value();
					l = this._valueMin();
					p = this._valueMax();
					h = (p !== l) ? (n - l) / (p - l) * 100 : 0;
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
			},
			_handleEvents: {
				keydown: function(h) {
					var k, f, e, g, d = b(h.target).data("ui-slider-handle-index");
					switch (h.keyCode) {
					case b.ui.keyCode.HOME:
					case b.ui.keyCode.END:
					case b.ui.keyCode.PAGE_UP:
					case b.ui.keyCode.PAGE_DOWN:
					case b.ui.keyCode.UP:
					case b.ui.keyCode.RIGHT:
					case b.ui.keyCode.DOWN:
					case b.ui.keyCode.LEFT:
						h.preventDefault();
						if (!this._keySliding) {
							this._keySliding = true;
							b(h.target).addClass("ui-state-active");
							k = this._start(h, d);
							if (k === false) {
								return
							}
						}
						break
					}
					g = this.options.step;
					if (this.options.values && this.options.values.length) {
						f = e = this.values(d)
					} else {
						f = e = this.value()
					}
					switch (h.keyCode) {
					case b.ui.keyCode.HOME:
						e = this._valueMin();
						break;
					case b.ui.keyCode.END:
						e = this._valueMax();
						break;
					case b.ui.keyCode.PAGE_UP:
						e = this._trimAlignValue(f + ((this._valueMax() - this._valueMin()) / a));
						break;
					case b.ui.keyCode.PAGE_DOWN:
						e = this._trimAlignValue(f - ((this._valueMax() - this._valueMin()) / a));
						break;
					case b.ui.keyCode.UP:
					case b.ui.keyCode.RIGHT:
						if (f === this._valueMax()) {
							return
						}
						e = this._trimAlignValue(f + g);
						break;
					case b.ui.keyCode.DOWN:
					case b.ui.keyCode.LEFT:
						if (f === this._valueMin()) {
							return
						}
						e = this._trimAlignValue(f - g);
						break
					}
					this._slide(h, d, e)
				},
				click: function(d) {
					d.preventDefault()
				},
				keyup: function(e) {
					var d = b(e.target).data("ui-slider-handle-index");
					if (this._keySliding) {
						this._keySliding = false;
						this._stop(e, d);
						this._change(e, d);
						b(e.target).removeClass("ui-state-active")
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
			version: "1.10.3",
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
					this._stop();
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
				if (c === "icons") {
					this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(d.up);
					this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(d.down)
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
				if (this._start()) {
					this._spin((c || 1) * this.options.step);
					this._stop()
				}
			},
			stepDown: a(function(c) {
				this._stepDown(c)
			}),
			_stepDown: function(c) {
				if (this._start()) {
					this._spin((c || 1) * -this.options.step);
					this._stop()
				}
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
			return g.hash.length > 1 && decodeURIComponent(g.href.replace(f, "")) === decodeURIComponent(location.href.replace(f, ""))
		}
		c.widget("ui.tabs", {
			version: "1.10.3",
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
				  , g = this.options;
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
				g.active = this._initialActive();
				if (c.isArray(g.disabled)) {
					g.disabled = c.unique(g.disabled.concat(c.map(this.tabs.filter(".ui-state-disabled"), function(k) {
						return h.tabs.index(k)
					}))).sort()
				}
				if (this.options.active !== false && this.anchors.length) {
					this.active = this._findActive(g.active)
				} else {
					this.active = c()
				}
				this._refresh();
				if (this.active.length) {
					this.load(g.active)
				}
			},
			_initialActive: function() {
				var h = this.options.active
				  , g = this.options.collapsible
				  , k = location.hash.substring(1);
				if (h === null) {
					if (k) {
						this.tabs.each(function(l, m) {
							if (c(m).attr("aria-controls") === k) {
								h = l;
								return false
							}
						})
					}
					if (h === null) {
						h = this.tabs.index(this.tabs.filter(".ui-tabs-active"))
					}
					if (h === null || h === -1) {
						h = this.tabs.length ? 0 : false
					}
				}
				if (h !== false) {
					h = this.tabs.index(this.tabs.eq(h));
					if (h === -1) {
						h = g ? false : 0
					}
				}
				if (!g && h === false && this.anchors.length) {
					h = 0
				}
				return h
			},
			_getCreateEventData: function() {
				return {
					tab: this.active,
					panel: !this.active.length ? c() : this._getPanelForTab(this.active)
				}
			},
			_tabKeydown: function(k) {
				var h = c(this.document[0].activeElement).closest("li")
				  , g = this.tabs.index(h)
				  , l = true;
				if (this._handlePageNav(k)) {
					return
				}
				switch (k.keyCode) {
				case c.ui.keyCode.RIGHT:
				case c.ui.keyCode.DOWN:
					g++;
					break;
				case c.ui.keyCode.UP:
				case c.ui.keyCode.LEFT:
					l = false;
					g--;
					break;
				case c.ui.keyCode.END:
					g = this.anchors.length - 1;
					break;
				case c.ui.keyCode.HOME:
					g = 0;
					break;
				case c.ui.keyCode.SPACE:
					k.preventDefault();
					clearTimeout(this.activating);
					this._activate(g);
					return;
				case c.ui.keyCode.ENTER:
					k.preventDefault();
					clearTimeout(this.activating);
					this._activate(g === this.options.active ? false : g);
					return;
				default:
					return
				}
				k.preventDefault();
				clearTimeout(this.activating);
				g = this._focusNextTab(g, l);
				if (!k.ctrlKey) {
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
			_findNextTab: function(h, k) {
				var g = this.tabs.length - 1;
				function l() {
					if (h > g) {
						h = 0
					}
					if (h < 0) {
						h = g
					}
					return h
				}
				while (c.inArray(l(), this.options.disabled) !== -1) {
					h = k ? h + 1 : h - 1
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
				h.disabled = c.map(g.filter(".ui-state-disabled"), function(k) {
					return g.index(k)
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
				this.anchors.each(function(o, m) {
					var h, k, n, l = c(m).uniqueId().attr("id"), p = c(m).closest("li"), q = p.attr("aria-controls");
					if (b(m)) {
						h = m.hash;
						k = g.element.find(g._sanitizeSelector(h))
					} else {
						n = g._tabId(p);
						h = "#" + n;
						k = g.element.find(h);
						if (!k.length) {
							k = g._createPanel(n);
							k.insertAfter(g.panels[o - 1] || g.tablist)
						}
						k.attr("aria-live", "polite")
					}
					if (k.length) {
						g.panels = g.panels.add(k)
					}
					if (q) {
						p.data("ui-tabs-aria-controls", q)
					}
					p.attr({
						"aria-controls": h.substring(1),
						"aria-labelledby": l
					});
					k.attr("aria-labelledby", l)
				});
				this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
			},
			_getList: function() {
				return this.element.find("ol,ul").eq(0)
			},
			_createPanel: function(g) {
				return c("<div>").attr("id", g).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", true)
			},
			_setupDisabled: function(k) {
				if (c.isArray(k)) {
					if (!k.length) {
						k = false
					} else {
						if (k.length === this.anchors.length) {
							k = true
						}
					}
				}
				for (var h = 0, g; (g = this.tabs[h]); h++) {
					if (k === true || c.inArray(h, k) !== -1) {
						c(g).addClass("ui-state-disabled").attr("aria-disabled", "true")
					} else {
						c(g).removeClass("ui-state-disabled").removeAttr("aria-disabled")
					}
				}
				this.options.disabled = k
			},
			_setupEvents: function(h) {
				var g = {
					click: function(k) {
						k.preventDefault()
					}
				};
				if (h) {
					c.each(h.split(" "), function(l, k) {
						g[k] = "_eventHandler"
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
				var k, h = this.element.parent();
				if (g === "fill") {
					k = h.height();
					k -= this.element.outerHeight() - this.element.height();
					this.element.siblings(":visible").each(function() {
						var m = c(this)
						  , l = m.css("position");
						if (l === "absolute" || l === "fixed") {
							return
						}
						k -= m.outerHeight(true)
					});
					this.element.children().not(this.panels).each(function() {
						k -= c(this).outerHeight(true)
					});
					this.panels.each(function() {
						c(this).height(Math.max(0, k - c(this).innerHeight() + c(this).height()))
					}).css("overflow", "auto")
				} else {
					if (g === "auto") {
						k = 0;
						this.panels.each(function() {
							k = Math.max(k, c(this).height("").height())
						}).height(k)
					}
				}
			},
			_eventHandler: function(g) {
				var r = this.options
				  , m = this.active
				  , n = c(g.currentTarget)
				  , l = n.closest("li")
				  , p = l[0] === m[0]
				  , h = p && r.collapsible
				  , k = h ? c() : this._getPanelForTab(l)
				  , o = !m.length ? c() : this._getPanelForTab(m)
				  , q = {
					oldTab: m,
					oldPanel: o,
					newTab: h ? c() : l,
					newPanel: k
				};
				g.preventDefault();
				if (l.hasClass("ui-state-disabled") || l.hasClass("ui-tabs-loading") || this.running || (p && !r.collapsible) || (this._trigger("beforeActivate", g, q) === false)) {
					return
				}
				r.active = h ? false : this.tabs.index(l);
				this.active = p ? c() : l;
				if (this.xhr) {
					this.xhr.abort()
				}
				if (!o.length && !k.length) {
					c.error("jQuery UI Tabs: Mismatching fragment identifier.")
				}
				if (k.length) {
					this.load(this.tabs.index(l), g)
				}
				this._toggle(g, q)
			},
			_toggle: function(o, n) {
				var m = this
				  , g = n.newPanel
				  , l = n.oldPanel;
				this.running = true;
				function k() {
					m.running = false;
					m._trigger("activate", o, n)
				}
				function h() {
					n.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
					if (g.length && m.options.show) {
						m._show(g, m.options.show, k)
					} else {
						g.show();
						k()
					}
				}
				if (l.length && this.options.hide) {
					this._hide(l, this.options.hide, function() {
						n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
						h()
					})
				} else {
					n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
					l.hide();
					h()
				}
				l.attr({
					"aria-expanded": "false",
					"aria-hidden": "true"
				});
				n.oldTab.attr("aria-selected", "false");
				if (g.length && l.length) {
					n.oldTab.attr("tabIndex", -1)
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
				n.newTab.attr({
					"aria-selected": "true",
					tabIndex: 0
				})
			},
			_activate: function(h) {
				var g, k = this._findActive(h);
				if (k[0] === this.active[0]) {
					return
				}
				if (!k.length) {
					k = this.active
				}
				g = k.find(".ui-tabs-anchor")[0];
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
				this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
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
						g.attr("aria-controls", h).removeData("ui-tabs-aria-controls")
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
						h = c.map(h, function(k) {
							return k !== g ? k : null
						})
					} else {
						h = c.map(this.tabs, function(k, l) {
							return l !== g ? l : null
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
			load: function(k, o) {
				k = this._getIndex(k);
				var n = this
				  , l = this.tabs.eq(k)
				  , h = l.find(".ui-tabs-anchor")
				  , g = this._getPanelForTab(l)
				  , m = {
					tab: l,
					panel: g
				};
				if (b(h[0])) {
					return
				}
				this.xhr = c.ajax(this._ajaxSettings(h, o, m));
				if (this.xhr && this.xhr.statusText !== "canceled") {
					l.addClass("ui-tabs-loading");
					g.attr("aria-busy", "true");
					this.xhr.success(function(p) {
						setTimeout(function() {
							g.html(p);
							n._trigger("load", o, m)
						}, 1)
					}).complete(function(q, p) {
						setTimeout(function() {
							if (p === "abort") {
								n.panels.stop(false, true)
							}
							l.removeClass("ui-tabs-loading");
							g.removeAttr("aria-busy");
							if (q === n.xhr) {
								delete n.xhr
							}
						}, 1)
					})
				}
			},
			_ajaxSettings: function(g, l, k) {
				var h = this;
				return {
					url: g.attr("href"),
					beforeSend: function(n, m) {
						return h._trigger("beforeLoad", l, c.extend({
							jqXHR: n,
							ajaxSettings: m
						}, k))
					}
				}
			},
			_getPanelForTab: function(g) {
				var h = c(g).attr("aria-controls");
				return this.element.find(this._sanitizeSelector("#" + h))
			}
		})
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
			version: "1.10.3",
			options: {
				content: function() {
					var e = d(this).attr("title") || "";
					return d("<a>").text(e).html()
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
					d.each(this.tooltips, function(k, h) {
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
				this.element.find(this.options.items).addBack().each(function() {
					var f = d(this);
					if (f.is("[title]")) {
						f.data("ui-tooltip-title", f.attr("title")).attr("title", "")
					}
				})
			},
			_enable: function() {
				this.element.find(this.options.items).addBack().each(function() {
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
						var k = d(this), h;
						if (k.data("ui-tooltip-open")) {
							h = d.Event("blur");
							h.target = h.currentTarget = this;
							e.close(h, true)
						}
						if (k.attr("title")) {
							k.uniqueId();
							e.parents[this.id] = {
								element: this,
								title: k.attr("title")
							};
							k.attr("title", "")
						}
					})
				}
				this._updateContent(g, f)
			},
			_updateContent: function(l, k) {
				var h, e = this.options.content, g = this, f = k ? k.type : null;
				if (typeof e === "string") {
					return this._open(k, l, e)
				}
				h = e.call(l[0], function(m) {
					if (!l.data("ui-tooltip-open")) {
						return
					}
					g._delay(function() {
						if (k) {
							k.type = f
						}
						this._open(k, l, m)
					})
				});
				if (h) {
					this._open(k, l, h)
				}
			},
			_open: function(k, m, h) {
				var l, g, f, n = d.extend({}, this.options.position);
				if (!h) {
					return
				}
				l = this._find(m);
				if (l.length) {
					l.find(".ui-tooltip-content").html(h);
					return
				}
				if (m.is("[title]")) {
					if (k && k.type === "mouseover") {
						m.attr("title", "")
					} else {
						m.removeAttr("title")
					}
				}
				l = this._tooltip(m);
				c(m, l.attr("id"));
				l.find(".ui-tooltip-content").html(h);
				function e(o) {
					n.of = o;
					if (l.is(":hidden")) {
						return
					}
					l.position(n)
				}
				if (this.options.track && k && /^mouse/.test(k.type)) {
					this._on(this.document, {
						mousemove: e
					});
					e(k)
				} else {
					l.position(d.extend({
						of: m
					}, this.options.position))
				}
				l.hide();
				this._show(l, this.options.show);
				if (this.options.show && this.options.show.delay) {
					f = this.delayedShow = setInterval(function() {
						if (l.is(":visible")) {
							e(n.of);
							clearInterval(f)
						}
					}, d.fx.interval)
				}
				this._trigger("open", k, {
					tooltip: l
				});
				g = {
					keyup: function(o) {
						if (o.keyCode === d.ui.keyCode.ESCAPE) {
							var p = d.Event(o);
							p.currentTarget = m[0];
							this.close(p, true)
						}
					},
					remove: function() {
						this._removeTooltip(l)
					}
				};
				if (!k || k.type === "mouseover") {
					g.mouseleave = "close"
				}
				if (!k || k.type === "focusin") {
					g.focusout = "close"
				}
				this._on(true, m, g)
			},
			close: function(f) {
				var e = this
				  , h = d(f ? f.currentTarget : this.element)
				  , g = this._find(h);
				if (this.closing) {
					return
				}
				clearInterval(this.delayedShow);
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
					d.each(this.parents, function(l, k) {
						d(k.element).attr("title", k.title);
						delete e.parents[l]
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
	(function(c) {
		function b() {
			this._settings = [];
			this._extensions = [];
			this.regional = [];
			this.regional[""] = {
				errorLoadingText: "Error loading"
			};
			this.local = this.regional[""];
			this._uuid = new Date().getTime();
			this._ie = !!window.ActiveXObject
		}
		c.extend(b.prototype, {
			markerClassName: "hasSVG",
			propertyName: "svgwrapper",
			svgNS: "http://www.w3.org/2000/svg",
			xlinkNS: "http://www.w3.org/1999/xlink",
			_wrapperClass: a,
			_attrNames: {
				class_: "class",
				in_: "in",
				alignmentBaseline: "alignment-baseline",
				baselineShift: "baseline-shift",
				clipPath: "clip-path",
				clipRule: "clip-rule",
				colorInterpolation: "color-interpolation",
				colorInterpolationFilters: "color-interpolation-filters",
				colorRendering: "color-rendering",
				dominantBaseline: "dominant-baseline",
				enableBackground: "enable-background",
				fillOpacity: "fill-opacity",
				fillRule: "fill-rule",
				floodColor: "flood-color",
				floodOpacity: "flood-opacity",
				fontFamily: "font-family",
				fontSize: "font-size",
				fontSizeAdjust: "font-size-adjust",
				fontStretch: "font-stretch",
				fontStyle: "font-style",
				fontVariant: "font-variant",
				fontWeight: "font-weight",
				glyphOrientationHorizontal: "glyph-orientation-horizontal",
				glyphOrientationVertical: "glyph-orientation-vertical",
				horizAdvX: "horiz-adv-x",
				horizOriginX: "horiz-origin-x",
				imageRendering: "image-rendering",
				letterSpacing: "letter-spacing",
				lightingColor: "lighting-color",
				markerEnd: "marker-end",
				markerMid: "marker-mid",
				markerStart: "marker-start",
				stopColor: "stop-color",
				stopOpacity: "stop-opacity",
				strikethroughPosition: "strikethrough-position",
				strikethroughThickness: "strikethrough-thickness",
				strokeDashArray: "stroke-dasharray",
				strokeDashOffset: "stroke-dashoffset",
				strokeLineCap: "stroke-linecap",
				strokeLineJoin: "stroke-linejoin",
				strokeMiterLimit: "stroke-miterlimit",
				strokeOpacity: "stroke-opacity",
				strokeWidth: "stroke-width",
				textAnchor: "text-anchor",
				textDecoration: "text-decoration",
				textRendering: "text-rendering",
				underlinePosition: "underline-position",
				underlineThickness: "underline-thickness",
				vertAdvY: "vert-adv-y",
				vertOriginY: "vert-origin-y",
				wordSpacing: "word-spacing",
				writingMode: "writing-mode"
			},
			_attachSVG: function(f, h) {
				var g = (f.namespaceURI === this.svgNS ? f : null);
				var f = (g ? null : f);
				if (c(f || g).hasClass(this.markerClassName)) {
					return
				}
				if (typeof h === "string") {
					h = {
						loadURL: h
					}
				} else {
					if (typeof h === "function") {
						h = {
							onLoad: h
						}
					}
				}
				c(f || g).addClass(this.markerClassName);
				try {
					if (!g) {
						g = document.createElementNS(this.svgNS, "svg");
						g.setAttribute("version", "1.1");
						if (f.clientWidth > 0) {
							g.setAttribute("width", f.clientWidth)
						}
						if (f.clientHeight > 0) {
							g.setAttribute("height", f.clientHeight)
						}
						f.appendChild(g)
					}
					this._afterLoad(f, g, h || {})
				} catch (k) {
					c(f).html("<p>SVG is not supported natively on this browser</p>")
				}
			},
			_afterLoad: function(f, g, h) {
				var h = h || this._settings[f.id];
				this._settings[f ? f.id : ""] = null;
				var l = new this._wrapperClass(g,f);
				c.data(f || g, c.svg.propertyName, l);
				try {
					if (h.loadURL) {
						l.load(h.loadURL, h)
					}
					if (h.settings) {
						l.configure(h.settings)
					}
					if (h.onLoad && !h.loadURL) {
						h.onLoad.apply(f || g, [l])
					}
				} catch (k) {
					alert(k)
				}
			},
			_getSVG: function(f) {
				return c(f).data(this.propertyName)
			},
			_destroySVG: function(f) {
				f = c(f);
				if (!f.hasClass(this.markerClassName)) {
					return
				}
				f.removeClass(this.markerClassName).removeData(this.propertyName);
				if (f[0].namespaceURI !== this.svgNS) {
					f.empty()
				}
			},
			addExtension: function(g, f) {
				this._extensions.push([g, f])
			},
			isSVGElem: function(f) {
				return (f.nodeType === 1 && f.namespaceURI === c.svg.svgNS)
			}
		});
		function a(g, f) {
			this._svg = g;
			this._container = f;
			for (var h = 0; h < c.svg._extensions.length; h++) {
				var k = c.svg._extensions[h];
				this[k[0]] = new k[1](this)
			}
		}
		c.extend(a.prototype, {
			width: function() {
				return (this._container ? this._container.clientWidth : this._svg.width)
			},
			height: function() {
				return (this._container ? this._container.clientHeight : this._svg.height)
			},
			root: function() {
				return this._svg
			},
			configure: function(m, l, g) {
				if (!m.nodeName) {
					g = l;
					l = m;
					m = this._svg
				}
				if (g) {
					for (var k = m.attributes.length - 1; k >= 0; k--) {
						var f = m.attributes.item(k);
						if (!(f.nodeName === "onload" || f.nodeName === "version" || f.nodeName.substring(0, 5) === "xmlns")) {
							m.attributes.removeNamedItem(f.nodeName)
						}
					}
				}
				for (var h in l) {
					m.setAttribute(c.svg._attrNames[h] || h, l[h])
				}
				return this
			},
			getElementById: function(f) {
				return this._svg.ownerDocument.getElementById(f)
			},
			change: function(g, h) {
				if (g) {
					for (var f in h) {
						if (h[f] == null) {
							g.removeAttribute(c.svg._attrNames[f] || f)
						} else {
							g.setAttribute(c.svg._attrNames[f] || f, h[f])
						}
					}
				}
				return this
			},
			_args: function(g, l, f) {
				l.splice(0, 0, "parent");
				l.splice(l.length, 0, "settings");
				var h = {};
				var m = 0;
				if (g[0] != null && g[0].jquery) {
					g[0] = g[0][0]
				}
				if (g[0] != null && !(typeof g[0] === "object" && g[0].nodeName)) {
					h.parent = null;
					m = 1
				}
				for (var k = 0; k < g.length; k++) {
					h[l[k + m]] = g[k]
				}
				if (f) {
					c.each(f, function(n, o) {
						if (typeof h[o] === "object") {
							h.settings = h[o];
							h[o] = null
						}
					})
				}
				return h
			},
			title: function(h, l, g) {
				var f = this._args(arguments, ["text"]);
				var k = this._makeNode(f.parent, "title", f.settings || {});
				k.appendChild(this._svg.ownerDocument.createTextNode(f.text));
				return k
			},
			describe: function(h, l, g) {
				var f = this._args(arguments, ["text"]);
				var k = this._makeNode(f.parent, "desc", f.settings || {});
				k.appendChild(this._svg.ownerDocument.createTextNode(f.text));
				return k
			},
			defs: function(h, k, g) {
				var f = this._args(arguments, ["id"], ["id"]);
				return this._makeNode(f.parent, "defs", c.extend((f.id ? {
					id: f.id
				} : {}), f.settings || {}))
			},
			symbol: function(n, o, h, m, l, f, k) {
				var g = this._args(arguments, ["id", "x1", "y1", "width", "height"]);
				return this._makeNode(g.parent, "symbol", c.extend({
					id: g.id,
					viewBox: g.x1 + " " + g.y1 + " " + g.width + " " + g.height
				}, g.settings || {}))
			},
			marker: function(n, f, p, o, k, g, l, h) {
				var m = this._args(arguments, ["id", "refX", "refY", "mWidth", "mHeight", "orient"], ["orient"]);
				return this._makeNode(m.parent, "marker", c.extend({
					id: m.id,
					refX: m.refX,
					refY: m.refY,
					markerWidth: m.mWidth,
					markerHeight: m.mHeight,
					orient: m.orient || "auto"
				}, m.settings || {}))
			},
			style: function(h, l, g) {
				var f = this._args(arguments, ["styles"]);
				var k = this._makeNode(f.parent, "style", c.extend({
					type: "text/css"
				}, f.settings || {}));
				k.appendChild(this._svg.ownerDocument.createTextNode(f.styles));
				return k
			},
			script: function(l, f, k, h) {
				var g = this._args(arguments, ["script", "type"], ["type"]);
				var m = this._makeNode(g.parent, "script", c.extend({
					type: g.type || "text/javascript"
				}, g.settings || {}));
				m.appendChild(this._svg.ownerDocument.createTextNode(g.script));
				if (c.svg._ie) {
					c.globalEval(g.script)
				}
				return m
			},
			linearGradient: function(p, g, q, h, o, f, n, k) {
				var m = this._args(arguments, ["id", "stops", "x1", "y1", "x2", "y2"], ["x1"]);
				var l = c.extend({
					id: m.id
				}, (m.x1 != null ? {
					x1: m.x1,
					y1: m.y1,
					x2: m.x2,
					y2: m.y2
				} : {}));
				return this._gradient(m.parent, "linearGradient", c.extend(l, m.settings || {}), m.stops)
			},
			radialGradient: function(q, g, s, n, l, f, m, h, k) {
				var p = this._args(arguments, ["id", "stops", "cx", "cy", "r", "fx", "fy"], ["cx"]);
				var o = c.extend({
					id: p.id
				}, (p.cx != null ? {
					cx: p.cx,
					cy: p.cy,
					r: p.r,
					fx: p.fx,
					fy: p.fy
				} : {}));
				return this._gradient(p.parent, "radialGradient", c.extend(o, p.settings || {}), p.stops)
			},
			_gradient: function(l, f, k, n) {
				var m = this._makeNode(l, f, k);
				for (var h = 0; h < n.length; h++) {
					var g = n[h];
					this._makeNode(m, "stop", c.extend({
						offset: g[0],
						stopColor: g[1]
					}, (g[2] != null ? {
						stopOpacity: g[2]
					} : {})))
				}
				return m
			},
			pattern: function(r, f, q, o, g, s, p, n, k, t, h) {
				var m = this._args(arguments, ["id", "x", "y", "width", "height", "vx", "vy", "vwidth", "vheight"], ["vx"]);
				var l = c.extend({
					id: m.id,
					x: m.x,
					y: m.y,
					width: m.width,
					height: m.height
				}, (m.vx != null ? {
					viewBox: m.vx + " " + m.vy + " " + m.vwidth + " " + m.vheight
				} : {}));
				return this._makeNode(m.parent, "pattern", c.extend(l, m.settings || {}))
			},
			clipPath: function(k, l, f, h) {
				var g = this._args(arguments, ["id", "units"]);
				g.units = g.units || "userSpaceOnUse";
				return this._makeNode(g.parent, "clipPath", c.extend({
					id: g.id,
					clipPathUnits: g.units
				}, g.settings || {}))
			},
			mask: function(m, o, g, n, l, f, k) {
				var h = this._args(arguments, ["id", "x", "y", "width", "height"]);
				return this._makeNode(h.parent, "mask", c.extend({
					id: h.id,
					x: h.x,
					y: h.y,
					width: h.width,
					height: h.height
				}, h.settings || {}))
			},
			createPath: function() {
				return new d()
			},
			createText: function() {
				return new e()
			},
			svg: function(q, p, n, f, r, o, m, h, s, g) {
				var l = this._args(arguments, ["x", "y", "width", "height", "vx", "vy", "vwidth", "vheight"], ["vx"]);
				var k = c.extend({
					x: l.x,
					y: l.y,
					width: l.width,
					height: l.height
				}, (l.vx != null ? {
					viewBox: l.vx + " " + l.vy + " " + l.vwidth + " " + l.vheight
				} : {}));
				return this._makeNode(l.parent, "svg", c.extend(k, l.settings || {}))
			},
			group: function(h, k, g) {
				var f = this._args(arguments, ["id"], ["id"]);
				return this._makeNode(f.parent, "g", c.extend({
					id: f.id
				}, f.settings || {}))
			},
			use: function(o, n, m, f, p, g, k) {
				var l = this._args(arguments, ["x", "y", "width", "height", "ref"]);
				if (typeof l.x === "string") {
					l.ref = l.x;
					l.settings = l.y;
					l.x = l.y = l.width = l.height = null
				}
				var h = this._makeNode(l.parent, "use", c.extend({
					x: l.x,
					y: l.y,
					width: l.width,
					height: l.height
				}, l.settings || {}));
				h.setAttributeNS(c.svg.xlinkNS, "href", l.ref);
				return h
			},
			link: function(h, l, g) {
				var f = this._args(arguments, ["ref"]);
				var k = this._makeNode(f.parent, "a", f.settings);
				k.setAttributeNS(c.svg.xlinkNS, "href", f.ref);
				return k
			},
			image: function(o, n, m, f, p, g, k) {
				var l = this._args(arguments, ["x", "y", "width", "height", "ref"]);
				var h = this._makeNode(l.parent, "image", c.extend({
					x: l.x,
					y: l.y,
					width: l.width,
					height: l.height
				}, l.settings || {}));
				h.setAttributeNS(c.svg.xlinkNS, "href", l.ref);
				return h
			},
			path: function(h, k, g) {
				var f = this._args(arguments, ["path"]);
				return this._makeNode(f.parent, "path", c.extend({
					d: (f.path.path ? f.path.path() : f.path)
				}, f.settings || {}))
			},
			rect: function(o, n, m, h, p, g, f, k) {
				var l = this._args(arguments, ["x", "y", "width", "height", "rx", "ry"], ["rx"]);
				return this._makeNode(l.parent, "rect", c.extend({
					x: l.x,
					y: l.y,
					width: l.width,
					height: l.height
				}, (l.rx ? {
					rx: l.rx,
					ry: l.ry
				} : {}), l.settings || {}))
			},
			circle: function(k, f, m, l, h) {
				var g = this._args(arguments, ["cx", "cy", "r"]);
				return this._makeNode(g.parent, "circle", c.extend({
					cx: g.cx,
					cy: g.cy,
					r: g.r
				}, g.settings || {}))
			},
			ellipse: function(k, f, n, m, l, h) {
				var g = this._args(arguments, ["cx", "cy", "rx", "ry"]);
				return this._makeNode(g.parent, "ellipse", c.extend({
					cx: g.cx,
					cy: g.cy,
					rx: g.rx,
					ry: g.ry
				}, g.settings || {}))
			},
			line: function(n, h, m, f, k, l) {
				var g = this._args(arguments, ["x1", "y1", "x2", "y2"]);
				return this._makeNode(g.parent, "line", c.extend({
					x1: g.x1,
					y1: g.y1,
					x2: g.x2,
					y2: g.y2
				}, g.settings || {}))
			},
			polyline: function(k, h, g) {
				var f = this._args(arguments, ["points"]);
				return this._poly(f.parent, "polyline", f.points, f.settings)
			},
			polygon: function(k, h, g) {
				var f = this._args(arguments, ["points"]);
				return this._poly(f.parent, "polygon", f.points, f.settings)
			},
			_poly: function(l, f, k, h) {
				var m = "";
				for (var g = 0; g < k.length; g++) {
					m += k[g].join() + " "
				}
				return this._makeNode(l, f, c.extend({
					points: c.trim(m)
				}, h || {}))
			},
			text: function(k, f, m, l, h) {
				var g = this._args(arguments, ["x", "y", "value"]);
				if (typeof g.x === "string" && arguments.length < 4) {
					g.value = g.x;
					g.settings = g.y;
					g.x = g.y = null
				}
				return this._text(g.parent, "text", g.value, c.extend({
					x: (g.x && c.isArray(g.x) ? g.x.join(" ") : g.x),
					y: (g.y && c.isArray(g.y) ? g.y.join(" ") : g.y)
				}, g.settings || {}))
			},
			textpath: function(h, m, l, g) {
				var f = this._args(arguments, ["path", "value"]);
				var k = this._text(f.parent, "textPath", f.value, f.settings || {});
				k.setAttributeNS(c.svg.xlinkNS, "href", f.path);
				return k
			},
			_text: function(p, f, o, l) {
				var k = this._makeNode(p, f, l);
				if (typeof o === "string") {
					k.appendChild(k.ownerDocument.createTextNode(o))
				} else {
					for (var m = 0; m < o._parts.length; m++) {
						var h = o._parts[m];
						if (h[0] === "tspan") {
							var g = this._makeNode(k, h[0], h[2]);
							g.appendChild(k.ownerDocument.createTextNode(h[1]));
							k.appendChild(g)
						} else {
							if (h[0] === "tref") {
								var g = this._makeNode(k, h[0], h[2]);
								g.setAttributeNS(c.svg.xlinkNS, "href", h[1]);
								k.appendChild(g)
							} else {
								if (h[0] === "textpath") {
									var n = c.extend({}, h[2]);
									n.href = null;
									var g = this._makeNode(k, h[0], n);
									g.setAttributeNS(c.svg.xlinkNS, "href", h[2].href);
									g.appendChild(k.ownerDocument.createTextNode(h[1]));
									k.appendChild(g)
								} else {
									k.appendChild(k.ownerDocument.createTextNode(h[1]))
								}
							}
						}
					}
				}
				return k
			},
			other: function(k, g, h) {
				var f = this._args(arguments, ["name"]);
				return this._makeNode(f.parent, f.name, f.settings || {})
			},
			_makeNode: function(h, f, g) {
				h = h || this._svg;
				var k = this._svg.ownerDocument.createElementNS(c.svg.svgNS, f);
				for (var f in g) {
					var l = g[f];
					if (l != null && (typeof l !== "string" || l !== "")) {
						k.setAttribute(c.svg._attrNames[f] || f, l)
					}
				}
				h.appendChild(k);
				return k
			},
			add: function(h, k) {
				var g = this._args((arguments.length === 1 ? [null, h] : arguments), ["node"]);
				var f = this;
				g.parent = g.parent || this._svg;
				g.node = (g.node.jquery ? g.node : c(g.node));
				try {
					g.parent.appendChild(g.node.cloneNode(true))
				} catch (l) {
					g.node.each(function() {
						var m = f._cloneAsSVG(this);
						if (m) {
							g.parent.appendChild(m)
						}
					})
				}
				return this
			},
			clone: function(k, l) {
				var f = this;
				var h = this._args((arguments.length === 1 ? [null, k] : arguments), ["node"]);
				h.parent = h.parent || this._svg;
				h.node = (h.node.jquery ? h.node : c(h.node));
				var g = [];
				h.node.each(function() {
					var m = f._cloneAsSVG(this);
					if (m) {
						m.id = "";
						h.parent.appendChild(m);
						g.push(m)
					}
				});
				return g
			},
			_cloneAsSVG: function(k) {
				var h = null;
				if (k.nodeType === 1) {
					h = this._svg.ownerDocument.createElementNS(c.svg.svgNS, this._checkName(k.nodeName));
					for (var g = 0; g < k.attributes.length; g++) {
						var f = k.attributes.item(g);
						if (f.nodeName !== "xmlns" && f.nodeValue) {
							if (f.prefix === "xlink") {
								h.setAttributeNS(c.svg.xlinkNS, f.localName || f.baseName, f.nodeValue)
							} else {
								h.setAttribute(this._checkName(f.nodeName), f.nodeValue)
							}
						}
					}
					for (var g = 0; g < k.childNodes.length; g++) {
						var m = this._cloneAsSVG(k.childNodes[g]);
						if (m) {
							h.appendChild(m)
						}
					}
				} else {
					if (k.nodeType === 3) {
						if (c.trim(k.nodeValue)) {
							h = this._svg.ownerDocument.createTextNode(k.nodeValue)
						}
					} else {
						if (k.nodeType === 4) {
							if (c.trim(k.nodeValue)) {
								try {
									h = this._svg.ownerDocument.createCDATASection(k.nodeValue)
								} catch (l) {
									h = this._svg.ownerDocument.createTextNode(k.nodeValue.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"))
								}
							}
						}
					}
				}
				return h
			},
			_checkName: function(f) {
				f = (f.substring(0, 1) >= "A" && f.substring(0, 1) <= "Z" ? f.toLowerCase() : f);
				return (f.substring(0, 4) === "svg:" ? f.substring(4) : f)
			},
			load: function(f, k) {
				k = (typeof k === "boolean" ? {
					addTo: k
				} : (typeof k === "function" ? {
					onLoad: k
				} : (typeof k === "string" ? {
					parent: k
				} : (typeof k === "object" && k.nodeName ? {
					parent: k
				} : (typeof k === "object" && k.jquery ? {
					parent: k
				} : k || {})))));
				if (!k.parent && !k.addTo) {
					this.clear(false)
				}
				var g = [this._svg.getAttribute("width"), this._svg.getAttribute("height")];
				var o = this;
				var n = function(p) {
					p = c.svg.local.errorLoadingText + ": " + p;
					if (k.onLoad) {
						k.onLoad.apply(o._container || o._svg, [o, p])
					} else {
						o.text(null, 10, 20, p)
					}
				};
				var m = function(q) {
					var p = new ActiveXObject("Microsoft.XMLDOM");
					p.validateOnParse = false;
					p.resolveExternals = false;
					p.async = false;
					p.loadXML(q);
					if (p.parseError.errorCode !== 0) {
						n(p.parseError.reason);
						return null
					}
					return p
				};
				var h = function(s) {
					if (!s) {
						return
					}
					if (s.documentElement.nodeName !== "svg") {
						var w = s.getElementsByTagName("parsererror");
						var r = (w.length ? w[0].getElementsByTagName("div") : []);
						n(!w.length ? "???" : (r.length ? r[0] : w[0]).firstChild.nodeValue);
						return
					}
					var x = (k.parent ? c(k.parent)[0] : o._svg);
					var y = {};
					for (var t = 0; t < s.documentElement.attributes.length; t++) {
						var v = s.documentElement.attributes.item(t);
						if (!(v.nodeName === "version" || v.nodeName.substring(0, 5) === "xmlns")) {
							y[v.nodeName] = v.nodeValue
						}
					}
					o.configure(x, y, !k.parent);
					var p = s.documentElement.childNodes;
					for (var t = 0; t < p.length; t++) {
						try {
							x.appendChild(o._svg.ownerDocument.importNode(p[t], true));
							if (p[t].nodeName === "script") {
								c.globalEval(p[t].textContent)
							}
						} catch (u) {
							o.add(x, p[t])
						}
					}
					if (!k.keepRelativeLinks && f.match("/")) {
						var q = f.replace(/\/[^\/]*$/, "/");
						c("*", x).each(function() {
							var z = c(this).attr("xlink:href");
							if (z && !z.match(/(^[a-z][-a-z0-9+.]*:.*$)|(^\/.*$)|(^#.*$)/i)) {
								c(this).attr("xlink:href", q + z)
							}
						})
					}
					if (!k.changeSize) {
						o.configure(x, {
							width: g[0],
							height: g[1]
						})
					}
					if (k.onLoad) {
						k.onLoad.apply(o._container || o._svg, [o])
					}
				};
				if (f.match("<svg")) {
					try {
						h(new DOMParser().parseFromString(f, "text/xml"))
					} catch (l) {
						n(l)
					}
				} else {
					c.ajax({
						url: f,
						dataType: "xml",
						success: function(p) {
							h(p)
						},
						error: function(q, r, p) {
							n(r + (p ? " " + p.message : ""))
						}
					})
				}
				return this
			},
			remove: function(f) {
				f = (f.jquery ? f[0] : f);
				f.parentNode.removeChild(f);
				return this
			},
			clear: function(f) {
				if (f) {
					this.configure({}, true)
				}
				while (this._svg.firstChild) {
					this._svg.removeChild(this._svg.firstChild)
				}
				return this
			},
			toSVG: function(f) {
				f = f || this._svg;
				return (typeof XMLSerializer === "undefined" ? this._toSVG(f) : new XMLSerializer().serializeToString(f))
			},
			_toSVG: function(k) {
				var h = "";
				if (!k) {
					return h
				}
				if (k.nodeType === 3) {
					h = k.nodeValue
				} else {
					if (k.nodeType === 4) {
						h = "<![CDATA[" + k.nodeValue + "]]>"
					} else {
						h = "<" + k.nodeName;
						if (k.attributes) {
							for (var g = 0; g < k.attributes.length; g++) {
								var f = k.attributes.item(g);
								if (!(c.trim(f.nodeValue) === "" || f.nodeValue.match(/^\[object/) || f.nodeValue.match(/^function/))) {
									h += " " + (f.namespaceURI === c.svg.xlinkNS ? "xlink:" : "") + f.nodeName + '="' + f.nodeValue + '"'
								}
							}
						}
						if (k.firstChild) {
							h += ">";
							var l = k.firstChild;
							while (l) {
								h += this._toSVG(l);
								l = l.nextSibling
							}
							h += "</" + k.nodeName + ">"
						} else {
							h += "/>"
						}
					}
				}
				return h
			}
		});
		function d() {
			this._path = ""
		}
		c.extend(d.prototype, {
			reset: function() {
				this._path = "";
				return this
			},
			move: function(f, h, g) {
				g = (c.isArray(f) ? h : g);
				return this._coords((g ? "m" : "M"), f, h)
			},
			line: function(f, h, g) {
				g = (c.isArray(f) ? h : g);
				return this._coords((g ? "l" : "L"), f, h)
			},
			horiz: function(f, g) {
				this._path += (g ? "h" : "H") + (c.isArray(f) ? f.join(" ") : f);
				return this
			},
			vert: function(g, f) {
				this._path += (f ? "v" : "V") + (c.isArray(g) ? g.join(" ") : g);
				return this
			},
			curveC: function(h, l, g, k, f, n, m) {
				m = (c.isArray(h) ? l : m);
				return this._coords((m ? "c" : "C"), h, l, g, k, f, n)
			},
			smoothC: function(g, h, f, l, k) {
				k = (c.isArray(g) ? h : k);
				return this._coords((k ? "s" : "S"), g, h, f, l)
			},
			curveQ: function(g, h, f, l, k) {
				k = (c.isArray(g) ? h : k);
				return this._coords((k ? "q" : "Q"), g, h, f, l)
			},
			smoothQ: function(f, h, g) {
				g = (c.isArray(f) ? h : g);
				return this._coords((g ? "t" : "T"), f, h)
			},
			_coords: function(k, h, p, g, o, f, n) {
				if (c.isArray(h)) {
					for (var l = 0; l < h.length; l++) {
						var m = h[l];
						this._path += (l === 0 ? k : " ") + m[0] + "," + m[1] + (m.length < 4 ? "" : " " + m[2] + "," + m[3] + (m.length < 6 ? "" : " " + m[4] + "," + m[5]))
					}
				} else {
					this._path += k + h + "," + p + (g == null ? "" : " " + g + "," + o + (f == null ? "" : " " + f + "," + n))
				}
				return this
			},
			arc: function(k, f, n, q, h, p, o, g) {
				g = (c.isArray(k) ? f : g);
				this._path += (g ? "a" : "A");
				if (c.isArray(k)) {
					for (var l = 0; l < k.length; l++) {
						var m = k[l];
						this._path += (l === 0 ? "" : " ") + m[0] + "," + m[1] + " " + m[2] + " " + (m[3] ? "1" : "0") + "," + (m[4] ? "1" : "0") + " " + m[5] + "," + m[6]
					}
				} else {
					this._path += k + "," + f + " " + n + " " + (q ? "1" : "0") + "," + (h ? "1" : "0") + " " + p + "," + o
				}
				return this
			},
			close: function() {
				this._path += "z";
				return this
			},
			path: function() {
				return this._path
			}
		});
		d.prototype.moveTo = d.prototype.move;
		d.prototype.lineTo = d.prototype.line;
		d.prototype.horizTo = d.prototype.horiz;
		d.prototype.vertTo = d.prototype.vert;
		d.prototype.curveCTo = d.prototype.curveC;
		d.prototype.smoothCTo = d.prototype.smoothC;
		d.prototype.curveQTo = d.prototype.curveQ;
		d.prototype.smoothQTo = d.prototype.smoothQ;
		d.prototype.arcTo = d.prototype.arc;
		function e() {
			this._parts = []
		}
		c.extend(e.prototype, {
			reset: function() {
				this._parts = [];
				return this
			},
			string: function(f) {
				this._parts.push(["text", f]);
				return this
			},
			span: function(g, f) {
				this._parts.push(["tspan", g, f]);
				return this
			},
			ref: function(g, f) {
				this._parts.push(["tref", g, f]);
				return this
			},
			path: function(h, g, f) {
				this._parts.push(["textpath", g, c.extend({
					href: h
				}, f || {})]);
				return this
			}
		});
		c.fn.svg = function(g) {
			var f = Array.prototype.slice.call(arguments, 1);
			if (typeof g === "string" && g === "get") {
				return c.svg["_" + g + "SVG"].apply(c.svg, [this[0]].concat(f))
			}
			return this.each(function() {
				if (typeof g === "string") {
					c.svg["_" + g + "SVG"].apply(c.svg, [this].concat(f))
				} else {
					c.svg._attachSVG(this, g || {})
				}
			})
		}
		;
		c.svg = new b()
	}
	)(jQuery);
	(function() {
		function a(d, c) {
			return [].slice.call((c || document).querySelectorAll(d))
		}
		if (!window.addEventListener) {
			return
		}
		var b = window.StyleFix = {
			link: function(e) {
				try {
					if (e.rel !== "stylesheet" || e.hasAttribute("data-noprefix")) {
						return
					}
				} catch (k) {
					return
				}
				var g = e.href || e.getAttribute("data-href"), d = g.replace(/[^\/]+$/, ""), f = e.parentNode, h = new XMLHttpRequest, c;
				h.onreadystatechange = function() {
					h.readyState === 4 && c()
				}
				;
				c = function() {
					var o = h.responseText;
					if (o && e.parentNode && (!h.status || h.status < 400 || h.status > 600)) {
						o = b.fix(o, !0, e);
						if (d) {
							o = o.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi, function(q, p, r) {
								return /^([a-z]{3,10}:|\/|#)/i.test(r) ? q : 'url("' + d + r + '")'
							});
							var m = d.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g, "\\$1");
							o = o.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)" + m, "gi"), "$1")
						}
						var l = document.createElement("style");
						l.textContent = o;
						l.media = e.media;
						l.disabled = e.disabled;
						l.setAttribute("data-href", e.getAttribute("href"));
						f.insertBefore(l, e);
						f.removeChild(e);
						l.media = e.media
					}
				}
				;
				try {
					h.open("GET", g);
					h.send(null)
				} catch (k) {
					if (typeof XDomainRequest != "undefined") {
						h = new XDomainRequest;
						h.onerror = h.onprogress = function() {}
						;
						h.onload = c;
						h.open("GET", g);
						h.send(null)
					}
				}
				e.setAttribute("data-inprogress", "")
			},
			styleElement: function(c) {
				if (c.hasAttribute("data-noprefix")) {
					return
				}
				var d = c.disabled;
				c.textContent = b.fix(c.textContent, !0, c);
				c.disabled = d
			},
			styleAttribute: function(c) {
				var d = c.getAttribute("style");
				d = b.fix(d, !1, c);
				c.setAttribute("style", d)
			},
			process: function() {
				a('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link);
				a("style").forEach(StyleFix.styleElement);
				a("[style]").forEach(StyleFix.styleAttribute)
			},
			register: function(c, d) {
				(b.fixers = b.fixers || []).splice(d === undefined ? b.fixers.length : d, 0, c)
			},
			fix: function(d, f, e) {
				for (var c = 0; c < b.fixers.length; c++) {
					d = b.fixers[c](d, f, e) || d
				}
				return d
			},
			camelCase: function(c) {
				return c.replace(/-([a-z])/g, function(f, d) {
					return d.toUpperCase()
				}).replace("-", "")
			},
			deCamelCase: function(c) {
				return c.replace(/[A-Z]/g, function(d) {
					return "-" + d.toLowerCase()
				})
			}
		};
		(function() {
			setTimeout(function() {
				a('link[rel="stylesheet"]').forEach(StyleFix.link)
			}, 10);
			document.addEventListener("DOMContentLoaded", StyleFix.process, !1)
		}
		)()
	}
	)();
	(function(b) {
		function a(k, f, h, d, g) {
			k = c[k];
			if (k.length) {
				var l = RegExp(f + "(" + k.join("|") + ")" + h, "gi");
				g = g.replace(l, d)
			}
			return g
		}
		if (!window.StyleFix || !window.getComputedStyle) {
			return
		}
		var c = window.PrefixFree = {
			prefixCSS: function(h, g, d) {
				var f = c.prefix;
				c.functions.indexOf("linear-gradient") > -1 && (h = h.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/ig, function(o, l, p, m) {
					return l + (p || "") + "linear-gradient(" + (90 - m) + "deg"
				}));
				h = a("functions", "(\\s|:|,)", "\\s*\\(", "$1" + f + "$2(", h);
				h = a("keywords", "(\\s|:)", "(\\s|;|\\}|$)", "$1" + f + "$2$3", h);
				h = a("properties", "(^|\\{|\\s|;)", "\\s*:", "$1" + f + "$2:", h);
				if (c.properties.length) {
					var k = RegExp("\\b(" + c.properties.join("|") + ")(?!:)", "gi");
					h = a("valueProperties", "\\b", ":(.+?);", function(l) {
						return l.replace(k, f + "$1")
					}, h)
				}
				if (g) {
					h = a("selectors", "", "\\b", c.prefixSelector, h);
					h = a("atrules", "@", "\\b", "@" + f + "$1", h)
				}
				h = h.replace(RegExp("-" + f, "g"), "-");
				h = h.replace(/-\*-(?=[a-z]+)/gi, c.prefix);
				return h
			},
			property: function(d) {
				return (c.properties.indexOf(d) ? c.prefix : "") + d
			},
			value: function(f, d) {
				f = a("functions", "(^|\\s|,)", "\\s*\\(", "$1" + c.prefix + "$2(", f);
				f = a("keywords", "(^|\\s)", "(\\s|$)", "$1" + c.prefix + "$2$3", f);
				return f
			},
			prefixSelector: function(d) {
				return d.replace(/^:{1,2}/, function(f) {
					return f + c.prefix
				})
			},
			prefixProperty: function(g, d) {
				var f = c.prefix + g;
				return d ? StyleFix.camelCase(f) : f
			}
		};
		(function() {
			var w = {}
			  , A = []
			  , d = {}
			  , n = getComputedStyle(document.documentElement, null)
			  , B = document.createElement("div").style
			  , k = function(l) {
				if (l.charAt(0) === "-") {
					A.push(l);
					var h = l.split("-")
					  , e = h[1];
					w[e] = ++w[e] || 1;
					while (h.length > 3) {
						h.pop();
						var f = h.join("-");
						z(f) && A.indexOf(f) === -1 && A.push(f)
					}
				}
			}
			  , z = function(f) {
				return StyleFix.camelCase(f)in B
			};
			if (n.length > 0) {
				for (var y = 0; y < n.length; y++) {
					k(n[y])
				}
			} else {
				for (var v in n) {
					k(StyleFix.deCamelCase(v))
				}
			}
			var m = {
				uses: 0
			};
			for (var x in w) {
				var q = w[x];
				m.uses < q && (m = {
					prefix: x,
					uses: q
				})
			}
			c.prefix = "-" + m.prefix + "-";
			c.Prefix = StyleFix.camelCase(c.prefix);
			c.properties = [];
			for (var y = 0; y < A.length; y++) {
				var v = A[y];
				if (v.indexOf(c.prefix) === 0) {
					var g = v.slice(c.prefix.length);
					z(g) || c.properties.push(g)
				}
			}
			c.Prefix == "Ms" && !("transform"in B) && !("MsTransform"in B) && "msTransform"in B && c.properties.push("transform", "transform-origin");
			c.properties.sort()
		}
		)();
		(function() {
			function h(o, f) {
				d[f] = "";
				d[f] = o;
				return !!d[f]
			}
			var l = {
				"linear-gradient": {
					property: "backgroundImage",
					params: "red, teal"
				},
				calc: {
					property: "width",
					params: "1px + 5%"
				},
				element: {
					property: "backgroundImage",
					params: "#foo"
				},
				"cross-fade": {
					property: "backgroundImage",
					params: "url(a.png), url(b.png), 50%"
				}
			};
			l["repeating-linear-gradient"] = l["repeating-radial-gradient"] = l["radial-gradient"] = l["linear-gradient"];
			var p = {
				initial: "color",
				"zoom-in": "cursor",
				"zoom-out": "cursor",
				box: "display",
				flexbox: "display",
				"inline-flexbox": "display",
				flex: "display",
				"inline-flex": "display"
			};
			c.functions = [];
			c.keywords = [];
			var d = document.createElement("div").style;
			for (var q in l) {
				var g = l[q]
				  , n = g.property
				  , m = q + "(" + g.params + ")";
				!h(m, n) && h(c.prefix + m, n) && c.functions.push(q)
			}
			for (var k in p) {
				var n = p[k];
				!h(k, n) && h(c.prefix + k, n) && c.keywords.push(k)
			}
		}
		)();
		(function() {
			function h(m) {
				f.textContent = m + "{}";
				return !!f.sheet.cssRules.length
			}
			var g = {
				":read-only": null,
				":read-write": null,
				":any-link": null,
				"::selection": null
			}
			  , k = {
				keyframes: "name",
				viewport: null,
				document: 'regexp(".")'
			};
			c.selectors = [];
			c.atrules = [];
			var f = b.appendChild(document.createElement("style"));
			for (var l in g) {
				var e = l + (g[l] ? "(" + g[l] + ")" : "");
				!h(e) && h(c.prefixSelector(e)) && c.selectors.push(l)
			}
			for (var d in k) {
				var e = d + " " + (k[d] || "");
				!h("@" + e) && h("@" + c.prefix + e) && c.atrules.push(d)
			}
			b.removeChild(f)
		}
		)();
		c.valueProperties = ["transition", "transition-property"];
		b.className += " " + c.prefix;
		StyleFix.register(c.prefixCSS)
	}
	)(document.documentElement);
	(function(a) {
		if (typeof define === "function" && define.amd) {
			define(["jquery"], a)
		} else {
			if (typeof exports !== "undefined") {
				module.exports = a(require("jquery"))
			} else {
				a(jQuery)
			}
		}
	}(function(a) {
		var b = window.Slick || {};
		b = (function() {
			var c = 0;
			function d(g, h) {
				var f = this, e;
				f.defaults = {
					accessibility: true,
					adaptiveHeight: false,
					appendArrows: a(g),
					appendDots: a(g),
					arrows: true,
					asNavFor: null,
					prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
					nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
					autoplay: false,
					autoplaySpeed: 3000,
					centerMode: false,
					centerPadding: "50px",
					cssEase: "ease",
					customPaging: function(l, k) {
						return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(k + 1)
					},
					dots: false,
					dotsClass: "slick-dots",
					draggable: true,
					easing: "linear",
					edgeFriction: 0.35,
					fade: false,
					focusOnSelect: false,
					infinite: true,
					initialSlide: 0,
					lazyLoad: "ondemand",
					mobileFirst: false,
					pauseOnHover: true,
					pauseOnFocus: true,
					pauseOnDotsHover: false,
					respondTo: "window",
					responsive: null,
					rows: 1,
					rtl: false,
					slide: "",
					slidesPerRow: 1,
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 500,
					swipe: true,
					swipeToSlide: false,
					touchMove: true,
					touchThreshold: 5,
					useCSS: true,
					useTransform: true,
					variableWidth: false,
					vertical: false,
					verticalSwiping: false,
					waitForAnimate: true,
					zIndex: 1000
				};
				f.initials = {
					animating: false,
					dragging: false,
					autoPlayTimer: null,
					currentDirection: 0,
					currentLeft: null,
					currentSlide: 0,
					direction: 1,
					$dots: null,
					listWidth: null,
					listHeight: null,
					loadIndex: 0,
					$nextArrow: null,
					$prevArrow: null,
					slideCount: null,
					slideWidth: null,
					$slideTrack: null,
					$slides: null,
					sliding: false,
					slideOffset: 0,
					swipeLeft: null,
					$list: null,
					touchObject: {},
					transformsEnabled: false,
					unslicked: false
				};
				a.extend(f, f.initials);
				f.activeBreakpoint = null;
				f.animType = null;
				f.animProp = null;
				f.breakpoints = [];
				f.breakpointSettings = [];
				f.cssTransitions = false;
				f.focussed = false;
				f.interrupted = false;
				f.hidden = "hidden";
				f.paused = true;
				f.positionProp = null;
				f.respondTo = null;
				f.rowCount = 1;
				f.shouldClick = true;
				f.$slider = a(g);
				f.$slidesCache = null;
				f.transformType = null;
				f.transitionType = null;
				f.visibilityChange = "visibilitychange";
				f.windowWidth = 0;
				f.windowTimer = null;
				e = a(g).data("slick") || {};
				f.options = a.extend({}, f.defaults, h, e);
				f.currentSlide = f.options.initialSlide;
				f.originalSettings = f.options;
				if (typeof document.mozHidden !== "undefined") {
					f.hidden = "mozHidden";
					f.visibilityChange = "mozvisibilitychange"
				} else {
					if (typeof document.webkitHidden !== "undefined") {
						f.hidden = "webkitHidden";
						f.visibilityChange = "webkitvisibilitychange"
					}
				}
				f.autoPlay = a.proxy(f.autoPlay, f);
				f.autoPlayClear = a.proxy(f.autoPlayClear, f);
				f.autoPlayIterator = a.proxy(f.autoPlayIterator, f);
				f.changeSlide = a.proxy(f.changeSlide, f);
				f.clickHandler = a.proxy(f.clickHandler, f);
				f.selectHandler = a.proxy(f.selectHandler, f);
				f.setPosition = a.proxy(f.setPosition, f);
				f.swipeHandler = a.proxy(f.swipeHandler, f);
				f.dragHandler = a.proxy(f.dragHandler, f);
				f.keyHandler = a.proxy(f.keyHandler, f);
				f.instanceUid = c++;
				f.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
				f.registerBreakpoints();
				f.init(true)
			}
			return d
		}());
		b.prototype.activateADA = function() {
			var c = this;
			c.$slideTrack.find(".slick-active").attr({
				"aria-hidden": "false"
			}).find("a, input, button, select").attr({
				tabindex: "0"
			})
		}
		;
		b.prototype.addSlide = b.prototype.slickAdd = function(c, e, f) {
			var d = this;
			if (typeof (e) === "boolean") {
				f = e;
				e = null
			} else {
				if (e < 0 || (e >= d.slideCount)) {
					return false
				}
			}
			d.unload();
			if (typeof (e) === "number") {
				if (e === 0 && d.$slides.length === 0) {
					a(c).appendTo(d.$slideTrack)
				} else {
					if (f) {
						a(c).insertBefore(d.$slides.eq(e))
					} else {
						a(c).insertAfter(d.$slides.eq(e))
					}
				}
			} else {
				if (f === true) {
					a(c).prependTo(d.$slideTrack)
				} else {
					a(c).appendTo(d.$slideTrack)
				}
			}
			d.$slides = d.$slideTrack.children(this.options.slide);
			d.$slideTrack.children(this.options.slide).detach();
			d.$slideTrack.append(d.$slides);
			d.$slides.each(function(g, h) {
				a(h).attr("data-slick-index", g)
			});
			d.$slidesCache = d.$slides;
			d.reinit()
		}
		;
		b.prototype.animateHeight = function() {
			var d = this;
			if (d.options.slidesToShow === 1 && d.options.adaptiveHeight === true && d.options.vertical === false) {
				var c = d.$slides.eq(d.currentSlide).outerHeight(true);
				d.$list.animate({
					height: c
				}, d.options.speed)
			}
		}
		;
		b.prototype.animateSlide = function(f, e) {
			var d = {}
			  , c = this;
			c.animateHeight();
			if (c.options.rtl === true && c.options.vertical === false) {
				f = -f
			}
			if (c.transformsEnabled === false) {
				if (c.options.vertical === false) {
					c.$slideTrack.animate({
						left: f
					}, c.options.speed, c.options.easing, e)
				} else {
					c.$slideTrack.animate({
						top: f
					}, c.options.speed, c.options.easing, e)
				}
			} else {
				if (c.cssTransitions === false) {
					if (c.options.rtl === true) {
						c.currentLeft = -(c.currentLeft)
					}
					a({
						animStart: c.currentLeft
					}).animate({
						animStart: f
					}, {
						duration: c.options.speed,
						easing: c.options.easing,
						step: function(g) {
							g = Math.ceil(g);
							if (c.options.vertical === false) {
								d[c.animType] = "translate(" + g + "px, 0px)";
								c.$slideTrack.css(d)
							} else {
								d[c.animType] = "translate(0px," + g + "px)";
								c.$slideTrack.css(d)
							}
						},
						complete: function() {
							if (e) {
								e.call()
							}
						}
					})
				} else {
					c.applyTransition();
					f = Math.ceil(f);
					if (c.options.vertical === false) {
						d[c.animType] = "translate3d(" + f + "px, 0px, 0px)"
					} else {
						d[c.animType] = "translate3d(0px," + f + "px, 0px)"
					}
					c.$slideTrack.css(d);
					if (e) {
						setTimeout(function() {
							c.disableTransition();
							e.call()
						}, c.options.speed)
					}
				}
			}
		}
		;
		b.prototype.getNavTarget = function() {
			var d = this
			  , c = d.options.asNavFor;
			if (c && c !== null) {
				c = a(c).not(d.$slider)
			}
			return c
		}
		;
		b.prototype.asNavFor = function(e) {
			var d = this
			  , c = d.getNavTarget();
			if (c !== null && typeof c === "object") {
				c.each(function() {
					var f = a(this).slick("getSlick");
					if (!f.unslicked) {
						f.slideHandler(e, true)
					}
				})
			}
		}
		;
		b.prototype.applyTransition = function(c) {
			var d = this
			  , e = {};
			if (d.options.fade === false) {
				e[d.transitionType] = d.transformType + " " + d.options.speed + "ms " + d.options.cssEase
			} else {
				e[d.transitionType] = "opacity " + d.options.speed + "ms " + d.options.cssEase
			}
			if (d.options.fade === false) {
				d.$slideTrack.css(e)
			} else {
				d.$slides.eq(c).css(e)
			}
		}
		;
		b.prototype.autoPlay = function() {
			var c = this;
			c.autoPlayClear();
			if (c.slideCount > c.options.slidesToShow) {
				c.autoPlayTimer = setInterval(c.autoPlayIterator, c.options.autoplaySpeed)
			}
		}
		;
		b.prototype.autoPlayClear = function() {
			var c = this;
			if (c.autoPlayTimer) {
				clearInterval(c.autoPlayTimer)
			}
		}
		;
		b.prototype.autoPlayIterator = function() {
			var c = this
			  , d = c.currentSlide + c.options.slidesToScroll;
			if (!c.paused && !c.interrupted && !c.focussed) {
				if (c.options.infinite === false) {
					if (c.direction === 1 && (c.currentSlide + 1) === (c.slideCount - 1)) {
						c.direction = 0
					} else {
						if (c.direction === 0) {
							d = c.currentSlide - c.options.slidesToScroll;
							if (c.currentSlide - 1 === 0) {
								c.direction = 1
							}
						}
					}
				}
				c.slideHandler(d)
			}
		}
		;
		b.prototype.buildArrows = function() {
			var c = this;
			if (c.options.arrows === true) {
				c.$prevArrow = a(c.options.prevArrow).addClass("slick-arrow");
				c.$nextArrow = a(c.options.nextArrow).addClass("slick-arrow");
				if (c.slideCount > c.options.slidesToShow) {
					c.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
					c.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
					if (c.htmlExpr.test(c.options.prevArrow)) {
						c.$prevArrow.prependTo(c.options.appendArrows)
					}
					if (c.htmlExpr.test(c.options.nextArrow)) {
						c.$nextArrow.appendTo(c.options.appendArrows)
					}
					if (c.options.infinite !== true) {
						c.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")
					}
				} else {
					c.$prevArrow.add(c.$nextArrow).addClass("slick-hidden").attr({
						"aria-disabled": "true",
						tabindex: "-1"
					})
				}
			}
		}
		;
		b.prototype.buildDots = function() {
			var d = this, e, c;
			if (d.options.dots === true && d.slideCount > d.options.slidesToShow) {
				d.$slider.addClass("slick-dotted");
				c = a("<ul />").addClass(d.options.dotsClass);
				for (e = 0; e <= d.getDotCount(); e += 1) {
					c.append(a("<li />").append(d.options.customPaging.call(this, d, e)))
				}
				d.$dots = c.appendTo(d.options.appendDots);
				d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
			}
		}
		;
		b.prototype.buildOut = function() {
			var c = this;
			c.$slides = c.$slider.children(c.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
			c.slideCount = c.$slides.length;
			c.$slides.each(function(d, e) {
				a(e).attr("data-slick-index", d).data("originalStyling", a(e).attr("style") || "")
			});
			c.$slider.addClass("slick-slider");
			c.$slideTrack = (c.slideCount === 0) ? a('<div class="slick-track"/>').appendTo(c.$slider) : c.$slides.wrapAll('<div class="slick-track"/>').parent();
			c.$list = c.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
			c.$slideTrack.css("opacity", 0);
			if (c.options.centerMode === true || c.options.swipeToSlide === true) {
				c.options.slidesToScroll = 1
			}
			a("img[data-lazy]", c.$slider).not("[src]").addClass("slick-loading");
			c.setupInfinite();
			c.buildArrows();
			c.buildDots();
			c.updateDots();
			c.setSlideClasses(typeof c.currentSlide === "number" ? c.currentSlide : 0);
			if (c.options.draggable === true) {
				c.$list.addClass("draggable")
			}
		}
		;
		b.prototype.buildRows = function() {
			var o = this, n, m, k, d, l, h, e;
			d = document.createDocumentFragment();
			h = o.$slider.children();
			if (o.options.rows > 1) {
				e = o.options.slidesPerRow * o.options.rows;
				l = Math.ceil(h.length / e);
				for (n = 0; n < l; n++) {
					var f = document.createElement("div");
					for (m = 0; m < o.options.rows; m++) {
						var p = document.createElement("div");
						for (k = 0; k < o.options.slidesPerRow; k++) {
							var g = (n * e + ((m * o.options.slidesPerRow) + k));
							if (h.get(g)) {
								p.appendChild(h.get(g))
							}
						}
						f.appendChild(p)
					}
					d.appendChild(f)
				}
				o.$slider.empty().append(d);
				o.$slider.children().children().children().css({
					width: (100 / o.options.slidesPerRow) + "%",
					display: "inline-block"
				})
			}
		}
		;
		b.prototype.checkResponsive = function(h, l) {
			var m = this, k, c, e, f = false;
			var g = m.$slider.width();
			var d = window.innerWidth || a(window).width();
			if (m.respondTo === "window") {
				e = d
			} else {
				if (m.respondTo === "slider") {
					e = g
				} else {
					if (m.respondTo === "min") {
						e = Math.min(d, g)
					}
				}
			}
			if (m.options.responsive && m.options.responsive.length && m.options.responsive !== null) {
				c = null;
				for (k in m.breakpoints) {
					if (m.breakpoints.hasOwnProperty(k)) {
						if (m.originalSettings.mobileFirst === false) {
							if (e < m.breakpoints[k]) {
								c = m.breakpoints[k]
							}
						} else {
							if (e > m.breakpoints[k]) {
								c = m.breakpoints[k]
							}
						}
					}
				}
				if (c !== null) {
					if (m.activeBreakpoint !== null) {
						if (c !== m.activeBreakpoint || l) {
							m.activeBreakpoint = c;
							if (m.breakpointSettings[c] === "unslick") {
								m.unslick(c)
							} else {
								m.options = a.extend({}, m.originalSettings, m.breakpointSettings[c]);
								if (h === true) {
									m.currentSlide = m.options.initialSlide
								}
								m.refresh(h)
							}
							f = c
						}
					} else {
						m.activeBreakpoint = c;
						if (m.breakpointSettings[c] === "unslick") {
							m.unslick(c)
						} else {
							m.options = a.extend({}, m.originalSettings, m.breakpointSettings[c]);
							if (h === true) {
								m.currentSlide = m.options.initialSlide
							}
							m.refresh(h)
						}
						f = c
					}
				} else {
					if (m.activeBreakpoint !== null) {
						m.activeBreakpoint = null;
						m.options = m.originalSettings;
						if (h === true) {
							m.currentSlide = m.options.initialSlide
						}
						m.refresh(h);
						f = c
					}
				}
				if (!h && f !== false) {
					m.$slider.trigger("breakpoint", [m, f])
				}
			}
		}
		;
		b.prototype.changeSlide = function(g, l) {
			var e = this, c = a(g.currentTarget), k, f, h;
			if (c.is("a")) {
				g.preventDefault()
			}
			if (!c.is("li")) {
				c = c.closest("li")
			}
			h = (e.slideCount % e.options.slidesToScroll !== 0);
			k = h ? 0 : (e.slideCount - e.currentSlide) % e.options.slidesToScroll;
			switch (g.data.message) {
			case "previous":
				f = k === 0 ? e.options.slidesToScroll : e.options.slidesToShow - k;
				if (e.slideCount > e.options.slidesToShow) {
					e.slideHandler(e.currentSlide - f, false, l)
				}
				break;
			case "next":
				f = k === 0 ? e.options.slidesToScroll : k;
				if (e.slideCount > e.options.slidesToShow) {
					e.slideHandler(e.currentSlide + f, false, l)
				}
				break;
			case "index":
				var d = g.data.index === 0 ? 0 : g.data.index || c.index() * e.options.slidesToScroll;
				e.slideHandler(e.checkNavigable(d), false, l);
				c.children().trigger("focus");
				break;
			default:
				return
			}
		}
		;
		b.prototype.checkNavigable = function(d) {
			var c = this, e, f;
			e = c.getNavigableIndexes();
			f = 0;
			if (d > e[e.length - 1]) {
				d = e[e.length - 1]
			} else {
				for (var g in e) {
					if (d < e[g]) {
						d = f;
						break
					}
					f = e[g]
				}
			}
			return d
		}
		;
		b.prototype.cleanUpEvents = function() {
			var c = this;
			if (c.options.dots && c.$dots !== null) {
				a("li", c.$dots).off("click.slick", c.changeSlide).off("mouseenter.slick", a.proxy(c.interrupt, c, true)).off("mouseleave.slick", a.proxy(c.interrupt, c, false))
			}
			c.$slider.off("focus.slick blur.slick");
			if (c.options.arrows === true && c.slideCount > c.options.slidesToShow) {
				c.$prevArrow && c.$prevArrow.off("click.slick", c.changeSlide);
				c.$nextArrow && c.$nextArrow.off("click.slick", c.changeSlide)
			}
			c.$list.off("touchstart.slick mousedown.slick", c.swipeHandler);
			c.$list.off("touchmove.slick mousemove.slick", c.swipeHandler);
			c.$list.off("touchend.slick mouseup.slick", c.swipeHandler);
			c.$list.off("touchcancel.slick mouseleave.slick", c.swipeHandler);
			c.$list.off("click.slick", c.clickHandler);
			a(document).off(c.visibilityChange, c.visibility);
			c.cleanUpSlideEvents();
			if (c.options.accessibility === true) {
				c.$list.off("keydown.slick", c.keyHandler)
			}
			if (c.options.focusOnSelect === true) {
				a(c.$slideTrack).children().off("click.slick", c.selectHandler)
			}
			a(window).off("orientationchange.slick.slick-" + c.instanceUid, c.orientationChange);
			a(window).off("resize.slick.slick-" + c.instanceUid, c.resize);
			a("[draggable!=true]", c.$slideTrack).off("dragstart", c.preventDefault);
			a(window).off("load.slick.slick-" + c.instanceUid, c.setPosition);
			a(document).off("ready.slick.slick-" + c.instanceUid, c.setPosition)
		}
		;
		b.prototype.cleanUpSlideEvents = function() {
			var c = this;
			c.$list.off("mouseenter.slick", a.proxy(c.interrupt, c, true));
			c.$list.off("mouseleave.slick", a.proxy(c.interrupt, c, false))
		}
		;
		b.prototype.cleanUpRows = function() {
			var d = this, c;
			if (d.options.rows > 1) {
				c = d.$slides.children().children();
				c.removeAttr("style");
				d.$slider.empty().append(c)
			}
		}
		;
		b.prototype.clickHandler = function(d) {
			var c = this;
			if (c.shouldClick === false) {
				d.stopImmediatePropagation();
				d.stopPropagation();
				d.preventDefault()
			}
		}
		;
		b.prototype.destroy = function(d) {
			var c = this;
			c.autoPlayClear();
			c.touchObject = {};
			c.cleanUpEvents();
			a(".slick-cloned", c.$slider).detach();
			if (c.$dots) {
				c.$dots.remove()
			}
			if (c.$prevArrow && c.$prevArrow.length) {
				c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
				if (c.htmlExpr.test(c.options.prevArrow)) {
					c.$prevArrow.remove()
				}
			}
			if (c.$nextArrow && c.$nextArrow.length) {
				c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
				if (c.htmlExpr.test(c.options.nextArrow)) {
					c.$nextArrow.remove()
				}
			}
			if (c.$slides) {
				c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
					a(this).attr("style", a(this).data("originalStyling"))
				});
				c.$slideTrack.children(this.options.slide).detach();
				c.$slideTrack.detach();
				c.$list.detach();
				c.$slider.append(c.$slides)
			}
			c.cleanUpRows();
			c.$slider.removeClass("slick-slider");
			c.$slider.removeClass("slick-initialized");
			c.$slider.removeClass("slick-dotted");
			c.unslicked = true;
			if (!d) {
				c.$slider.trigger("destroy", [c])
			}
		}
		;
		b.prototype.disableTransition = function(c) {
			var d = this
			  , e = {};
			e[d.transitionType] = "";
			if (d.options.fade === false) {
				d.$slideTrack.css(e)
			} else {
				d.$slides.eq(c).css(e)
			}
		}
		;
		b.prototype.fadeSlide = function(d, e) {
			var c = this;
			if (c.cssTransitions === false) {
				c.$slides.eq(d).css({
					zIndex: c.options.zIndex
				});
				c.$slides.eq(d).animate({
					opacity: 1
				}, c.options.speed, c.options.easing, e)
			} else {
				c.applyTransition(d);
				c.$slides.eq(d).css({
					opacity: 1,
					zIndex: c.options.zIndex
				});
				if (e) {
					setTimeout(function() {
						c.disableTransition(d);
						e.call()
					}, c.options.speed)
				}
			}
		}
		;
		b.prototype.fadeSlideOut = function(d) {
			var c = this;
			if (c.cssTransitions === false) {
				c.$slides.eq(d).animate({
					opacity: 0,
					zIndex: c.options.zIndex - 2
				}, c.options.speed, c.options.easing)
			} else {
				c.applyTransition(d);
				c.$slides.eq(d).css({
					opacity: 0,
					zIndex: c.options.zIndex - 2
				})
			}
		}
		;
		b.prototype.filterSlides = b.prototype.slickFilter = function(d) {
			var c = this;
			if (d !== null) {
				c.$slidesCache = c.$slides;
				c.unload();
				c.$slideTrack.children(this.options.slide).detach();
				c.$slidesCache.filter(d).appendTo(c.$slideTrack);
				c.reinit()
			}
		}
		;
		b.prototype.focusHandler = function() {
			var c = this;
			c.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(e) {
				e.stopImmediatePropagation();
				var d = a(this);
				setTimeout(function() {
					if (c.options.pauseOnFocus) {
						c.focussed = d.is(":focus");
						c.autoPlay()
					}
				}, 0)
			})
		}
		;
		b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
			var c = this;
			return c.currentSlide
		}
		;
		b.prototype.getDotCount = function() {
			var d = this;
			var f = 0;
			var c = 0;
			var e = 0;
			if (d.options.infinite === true) {
				while (f < d.slideCount) {
					++e;
					f = c + d.options.slidesToScroll;
					c += d.options.slidesToScroll <= d.options.slidesToShow ? d.options.slidesToScroll : d.options.slidesToShow
				}
			} else {
				if (d.options.centerMode === true) {
					e = d.slideCount
				} else {
					if (!d.options.asNavFor) {
						e = 1 + Math.ceil((d.slideCount - d.options.slidesToShow) / d.options.slidesToScroll)
					} else {
						while (f < d.slideCount) {
							++e;
							f = c + d.options.slidesToScroll;
							c += d.options.slidesToScroll <= d.options.slidesToShow ? d.options.slidesToScroll : d.options.slidesToShow
						}
					}
				}
			}
			return e - 1
		}
		;
		b.prototype.getLeft = function(f) {
			var d = this, h, e, c = 0, g;
			d.slideOffset = 0;
			e = d.$slides.first().outerHeight(true);
			if (d.options.infinite === true) {
				if (d.slideCount > d.options.slidesToShow) {
					d.slideOffset = (d.slideWidth * d.options.slidesToShow) * -1;
					c = (e * d.options.slidesToShow) * -1
				}
				if (d.slideCount % d.options.slidesToScroll !== 0) {
					if (f + d.options.slidesToScroll > d.slideCount && d.slideCount > d.options.slidesToShow) {
						if (f > d.slideCount) {
							d.slideOffset = ((d.options.slidesToShow - (f - d.slideCount)) * d.slideWidth) * -1;
							c = ((d.options.slidesToShow - (f - d.slideCount)) * e) * -1
						} else {
							d.slideOffset = ((d.slideCount % d.options.slidesToScroll) * d.slideWidth) * -1;
							c = ((d.slideCount % d.options.slidesToScroll) * e) * -1
						}
					}
				}
			} else {
				if (f + d.options.slidesToShow > d.slideCount) {
					d.slideOffset = ((f + d.options.slidesToShow) - d.slideCount) * d.slideWidth;
					c = ((f + d.options.slidesToShow) - d.slideCount) * e
				}
			}
			if (d.slideCount <= d.options.slidesToShow) {
				d.slideOffset = 0;
				c = 0
			}
			if (d.options.centerMode === true && d.options.infinite === true) {
				d.slideOffset += d.slideWidth * Math.floor(d.options.slidesToShow / 2) - d.slideWidth
			} else {
				if (d.options.centerMode === true) {
					d.slideOffset = 0;
					d.slideOffset += d.slideWidth * Math.floor(d.options.slidesToShow / 2)
				}
			}
			if (d.options.vertical === false) {
				h = ((f * d.slideWidth) * -1) + d.slideOffset
			} else {
				h = ((f * e) * -1) + c
			}
			if (d.options.variableWidth === true) {
				if (d.slideCount <= d.options.slidesToShow || d.options.infinite === false) {
					g = d.$slideTrack.children(".slick-slide").eq(f)
				} else {
					g = d.$slideTrack.children(".slick-slide").eq(f + d.options.slidesToShow)
				}
				if (d.options.rtl === true) {
					if (g[0]) {
						h = (d.$slideTrack.width() - g[0].offsetLeft - g.width()) * -1
					} else {
						h = 0
					}
				} else {
					h = g[0] ? g[0].offsetLeft * -1 : 0
				}
				if (d.options.centerMode === true) {
					if (d.slideCount <= d.options.slidesToShow || d.options.infinite === false) {
						g = d.$slideTrack.children(".slick-slide").eq(f)
					} else {
						g = d.$slideTrack.children(".slick-slide").eq(f + d.options.slidesToShow + 1)
					}
					if (d.options.rtl === true) {
						if (g[0]) {
							h = (d.$slideTrack.width() - g[0].offsetLeft - g.width()) * -1
						} else {
							h = 0
						}
					} else {
						h = g[0] ? g[0].offsetLeft * -1 : 0
					}
					h += (d.$list.width() - g.outerWidth()) / 2
				}
			}
			return h
		}
		;
		b.prototype.getOption = b.prototype.slickGetOption = function(d) {
			var c = this;
			return c.options[d]
		}
		;
		b.prototype.getNavigableIndexes = function() {
			var f = this, g = 0, d = 0, e = [], c;
			if (f.options.infinite === false) {
				c = f.slideCount
			} else {
				g = f.options.slidesToScroll * -1;
				d = f.options.slidesToScroll * -1;
				c = f.slideCount * 2
			}
			while (g < c) {
				e.push(g);
				g = d + f.options.slidesToScroll;
				d += f.options.slidesToScroll <= f.options.slidesToShow ? f.options.slidesToScroll : f.options.slidesToShow
			}
			return e
		}
		;
		b.prototype.getSlick = function() {
			return this
		}
		;
		b.prototype.getSlideCount = function() {
			var e = this, d, f, c;
			c = e.options.centerMode === true ? e.slideWidth * Math.floor(e.options.slidesToShow / 2) : 0;
			if (e.options.swipeToSlide === true) {
				e.$slideTrack.find(".slick-slide").each(function(h, g) {
					if (g.offsetLeft - c + (a(g).outerWidth() / 2) > (e.swipeLeft * -1)) {
						f = g;
						return false
					}
				});
				d = Math.abs(a(f).attr("data-slick-index") - e.currentSlide) || 1;
				return d
			} else {
				return e.options.slidesToScroll
			}
		}
		;
		b.prototype.goTo = b.prototype.slickGoTo = function(c, e) {
			var d = this;
			d.changeSlide({
				data: {
					message: "index",
					index: parseInt(c)
				}
			}, e)
		}
		;
		b.prototype.init = function(c) {
			var d = this;
			if (!a(d.$slider).hasClass("slick-initialized")) {
				a(d.$slider).addClass("slick-initialized");
				d.buildRows();
				d.buildOut();
				d.setProps();
				d.startLoad();
				d.loadSlider();
				d.initializeEvents();
				d.updateArrows();
				d.updateDots();
				d.checkResponsive(true);
				d.focusHandler()
			}
			if (c) {
				d.$slider.trigger("init", [d])
			}
			if (d.options.accessibility === true) {
				d.initADA()
			}
			if (d.options.autoplay) {
				d.paused = false;
				d.autoPlay()
			}
		}
		;
		b.prototype.initADA = function() {
			var c = this;
			c.$slides.add(c.$slideTrack.find(".slick-cloned")).attr({
				"aria-hidden": "true",
				tabindex: "-1"
			}).find("a, input, button, select").attr({
				tabindex: "-1"
			});
			c.$slideTrack.attr("role", "listbox");
			c.$slides.not(c.$slideTrack.find(".slick-cloned")).each(function(d) {
				a(this).attr({
					role: "option",
					"aria-describedby": "slick-slide" + c.instanceUid + d + ""
				})
			});
			if (c.$dots !== null) {
				c.$dots.attr("role", "tablist").find("li").each(function(d) {
					a(this).attr({
						role: "presentation",
						"aria-selected": "false",
						"aria-controls": "navigation" + c.instanceUid + d + "",
						id: "slick-slide" + c.instanceUid + d + ""
					})
				}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar")
			}
			c.activateADA()
		}
		;
		b.prototype.initArrowEvents = function() {
			var c = this;
			if (c.options.arrows === true && c.slideCount > c.options.slidesToShow) {
				c.$prevArrow.off("click.slick").on("click.slick", {
					message: "previous"
				}, c.changeSlide);
				c.$nextArrow.off("click.slick").on("click.slick", {
					message: "next"
				}, c.changeSlide)
			}
		}
		;
		b.prototype.initDotEvents = function() {
			var c = this;
			if (c.options.dots === true && c.slideCount > c.options.slidesToShow) {
				a("li", c.$dots).on("click.slick", {
					message: "index"
				}, c.changeSlide)
			}
			if (c.options.dots === true && c.options.pauseOnDotsHover === true) {
				a("li", c.$dots).on("mouseenter.slick", a.proxy(c.interrupt, c, true)).on("mouseleave.slick", a.proxy(c.interrupt, c, false))
			}
		}
		;
		b.prototype.initSlideEvents = function() {
			var c = this;
			if (c.options.pauseOnHover) {
				c.$list.on("mouseenter.slick", a.proxy(c.interrupt, c, true));
				c.$list.on("mouseleave.slick", a.proxy(c.interrupt, c, false))
			}
		}
		;
		b.prototype.initializeEvents = function() {
			var c = this;
			c.initArrowEvents();
			c.initDotEvents();
			c.initSlideEvents();
			c.$list.on("touchstart.slick mousedown.slick", {
				action: "start"
			}, c.swipeHandler);
			c.$list.on("touchmove.slick mousemove.slick", {
				action: "move"
			}, c.swipeHandler);
			c.$list.on("touchend.slick mouseup.slick", {
				action: "end"
			}, c.swipeHandler);
			c.$list.on("touchcancel.slick mouseleave.slick", {
				action: "end"
			}, c.swipeHandler);
			c.$list.on("click.slick", c.clickHandler);
			a(document).on(c.visibilityChange, a.proxy(c.visibility, c));
			if (c.options.accessibility === true) {
				c.$list.on("keydown.slick", c.keyHandler)
			}
			if (c.options.focusOnSelect === true) {
				a(c.$slideTrack).children().on("click.slick", c.selectHandler)
			}
			a(window).on("orientationchange.slick.slick-" + c.instanceUid, a.proxy(c.orientationChange, c));
			a(window).on("resize.slick.slick-" + c.instanceUid, a.proxy(c.resize, c));
			a("[draggable!=true]", c.$slideTrack).on("dragstart", c.preventDefault);
			a(window).on("load.slick.slick-" + c.instanceUid, c.setPosition);
			a(document).on("ready.slick.slick-" + c.instanceUid, c.setPosition)
		}
		;
		b.prototype.initUI = function() {
			var c = this;
			if (c.options.arrows === true && c.slideCount > c.options.slidesToShow) {
				c.$prevArrow.show();
				c.$nextArrow.show()
			}
			if (c.options.dots === true && c.slideCount > c.options.slidesToShow) {
				c.$dots.show()
			}
		}
		;
		b.prototype.keyHandler = function(d) {
			var c = this;
			if (!d.target.tagName.match("TEXTAREA|INPUT|SELECT")) {
				if (d.keyCode === 37 && c.options.accessibility === true) {
					c.changeSlide({
						data: {
							message: c.options.rtl === true ? "next" : "previous"
						}
					})
				} else {
					if (d.keyCode === 39 && c.options.accessibility === true) {
						c.changeSlide({
							data: {
								message: c.options.rtl === true ? "previous" : "next"
							}
						})
					}
				}
			}
		}
		;
		b.prototype.lazyLoad = function() {
			var e = this, c, h, g, f;
			function d(k) {
				a("img[data-lazy]", k).each(function() {
					var m = a(this)
					  , n = a(this).attr("data-lazy")
					  , l = document.createElement("img");
					l.onload = function() {
						m.animate({
							opacity: 0
						}, 100, function() {
							m.attr("src", n).animate({
								opacity: 1
							}, 200, function() {
								m.removeAttr("data-lazy").removeClass("slick-loading")
							});
							e.$slider.trigger("lazyLoaded", [e, m, n])
						})
					}
					;
					l.onerror = function() {
						m.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
						e.$slider.trigger("lazyLoadError", [e, m, n])
					}
					;
					l.src = n
				})
			}
			if (e.options.centerMode === true) {
				if (e.options.infinite === true) {
					g = e.currentSlide + (e.options.slidesToShow / 2 + 1);
					f = g + e.options.slidesToShow + 2
				} else {
					g = Math.max(0, e.currentSlide - (e.options.slidesToShow / 2 + 1));
					f = 2 + (e.options.slidesToShow / 2 + 1) + e.currentSlide
				}
			} else {
				g = e.options.infinite ? e.options.slidesToShow + e.currentSlide : e.currentSlide;
				f = Math.ceil(g + e.options.slidesToShow);
				if (e.options.fade === true) {
					if (g > 0) {
						g--
					}
					if (f <= e.slideCount) {
						f++
					}
				}
			}
			c = e.$slider.find(".slick-slide").slice(g, f);
			d(c);
			if (e.slideCount <= e.options.slidesToShow) {
				h = e.$slider.find(".slick-slide");
				d(h)
			} else {
				if (e.currentSlide >= e.slideCount - e.options.slidesToShow) {
					h = e.$slider.find(".slick-cloned").slice(0, e.options.slidesToShow);
					d(h)
				} else {
					if (e.currentSlide === 0) {
						h = e.$slider.find(".slick-cloned").slice(e.options.slidesToShow * -1);
						d(h)
					}
				}
			}
		}
		;
		b.prototype.loadSlider = function() {
			var c = this;
			c.setPosition();
			c.$slideTrack.css({
				opacity: 1
			});
			c.$slider.removeClass("slick-loading");
			c.initUI();
			if (c.options.lazyLoad === "progressive") {
				c.progressiveLazyLoad()
			}
		}
		;
		b.prototype.next = b.prototype.slickNext = function() {
			var c = this;
			c.changeSlide({
				data: {
					message: "next"
				}
			})
		}
		;
		b.prototype.orientationChange = function() {
			var c = this;
			c.checkResponsive();
			c.setPosition()
		}
		;
		b.prototype.pause = b.prototype.slickPause = function() {
			var c = this;
			c.autoPlayClear();
			c.paused = true
		}
		;
		b.prototype.play = b.prototype.slickPlay = function() {
			var c = this;
			c.autoPlay();
			c.options.autoplay = true;
			c.paused = false;
			c.focussed = false;
			c.interrupted = false
		}
		;
		b.prototype.postSlide = function(d) {
			var c = this;
			if (!c.unslicked) {
				c.$slider.trigger("afterChange", [c, d]);
				c.animating = false;
				c.setPosition();
				c.swipeLeft = null;
				if (c.options.autoplay) {
					c.autoPlay()
				}
				if (c.options.accessibility === true) {
					c.initADA()
				}
			}
		}
		;
		b.prototype.prev = b.prototype.slickPrev = function() {
			var c = this;
			c.changeSlide({
				data: {
					message: "previous"
				}
			})
		}
		;
		b.prototype.preventDefault = function(c) {
			c.preventDefault()
		}
		;
		b.prototype.progressiveLazyLoad = function(e) {
			e = e || 1;
			var d = this, c = a("img[data-lazy]", d.$slider), g, h, f;
			if (c.length) {
				g = c.first();
				h = g.attr("data-lazy");
				f = document.createElement("img");
				f.onload = function() {
					g.attr("src", h).removeAttr("data-lazy").removeClass("slick-loading");
					if (d.options.adaptiveHeight === true) {
						d.setPosition()
					}
					d.$slider.trigger("lazyLoaded", [d, g, h]);
					d.progressiveLazyLoad()
				}
				;
				f.onerror = function() {
					if (e < 3) {
						setTimeout(function() {
							d.progressiveLazyLoad(e + 1)
						}, 500)
					} else {
						g.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
						d.$slider.trigger("lazyLoadError", [d, g, h]);
						d.progressiveLazyLoad()
					}
				}
				;
				f.src = h
			} else {
				d.$slider.trigger("allImagesLoaded", [d])
			}
		}
		;
		b.prototype.refresh = function(d) {
			var e = this, f, c;
			c = e.slideCount - e.options.slidesToShow;
			if (!e.options.infinite && (e.currentSlide > c)) {
				e.currentSlide = c
			}
			if (e.slideCount <= e.options.slidesToShow) {
				e.currentSlide = 0
			}
			f = e.currentSlide;
			e.destroy(true);
			a.extend(e, e.initials, {
				currentSlide: f
			});
			e.init();
			if (!d) {
				e.changeSlide({
					data: {
						message: "index",
						index: f
					}
				}, false)
			}
		}
		;
		b.prototype.registerBreakpoints = function() {
			var e = this, d, f, c, g = e.options.responsive || null;
			if (a.type(g) === "array" && g.length) {
				e.respondTo = e.options.respondTo || "window";
				for (d in g) {
					c = e.breakpoints.length - 1;
					f = g[d].breakpoint;
					if (g.hasOwnProperty(d)) {
						while (c >= 0) {
							if (e.breakpoints[c] && e.breakpoints[c] === f) {
								e.breakpoints.splice(c, 1)
							}
							c--
						}
						e.breakpoints.push(f);
						e.breakpointSettings[f] = g[d].settings
					}
				}
				e.breakpoints.sort(function(k, h) {
					return (e.options.mobileFirst) ? k - h : h - k
				})
			}
		}
		;
		b.prototype.reinit = function() {
			var c = this;
			c.$slides = c.$slideTrack.children(c.options.slide).addClass("slick-slide");
			c.slideCount = c.$slides.length;
			if (c.currentSlide >= c.slideCount && c.currentSlide !== 0) {
				c.currentSlide = c.currentSlide - c.options.slidesToScroll
			}
			if (c.slideCount <= c.options.slidesToShow) {
				c.currentSlide = 0
			}
			c.registerBreakpoints();
			c.setProps();
			c.setupInfinite();
			c.buildArrows();
			c.updateArrows();
			c.initArrowEvents();
			c.buildDots();
			c.updateDots();
			c.initDotEvents();
			c.cleanUpSlideEvents();
			c.initSlideEvents();
			c.checkResponsive(false, true);
			if (c.options.focusOnSelect === true) {
				a(c.$slideTrack).children().on("click.slick", c.selectHandler)
			}
			c.setSlideClasses(typeof c.currentSlide === "number" ? c.currentSlide : 0);
			c.setPosition();
			c.focusHandler();
			c.paused = !c.options.autoplay;
			c.autoPlay();
			c.$slider.trigger("reInit", [c])
		}
		;
		b.prototype.resize = function() {
			var c = this;
			if (a(window).width() !== c.windowWidth) {
				clearTimeout(c.windowDelay);
				c.windowDelay = window.setTimeout(function() {
					c.windowWidth = a(window).width();
					c.checkResponsive();
					if (!c.unslicked) {
						c.setPosition()
					}
				}, 50)
			}
		}
		;
		b.prototype.removeSlide = b.prototype.slickRemove = function(d, f, e) {
			var c = this;
			if (typeof (d) === "boolean") {
				f = d;
				d = f === true ? 0 : c.slideCount - 1
			} else {
				d = f === true ? --d : d
			}
			if (c.slideCount < 1 || d < 0 || d > c.slideCount - 1) {
				return false
			}
			c.unload();
			if (e === true) {
				c.$slideTrack.children().remove()
			} else {
				c.$slideTrack.children(this.options.slide).eq(d).remove()
			}
			c.$slides = c.$slideTrack.children(this.options.slide);
			c.$slideTrack.children(this.options.slide).detach();
			c.$slideTrack.append(c.$slides);
			c.$slidesCache = c.$slides;
			c.reinit()
		}
		;
		b.prototype.setCSS = function(d) {
			var e = this, f = {}, c, g;
			if (e.options.rtl === true) {
				d = -d
			}
			c = e.positionProp == "left" ? Math.ceil(d) + "px" : "0px";
			g = e.positionProp == "top" ? Math.ceil(d) + "px" : "0px";
			f[e.positionProp] = d;
			if (e.transformsEnabled === false) {
				e.$slideTrack.css(f)
			} else {
				f = {};
				if (e.cssTransitions === false) {
					f[e.animType] = "translate(" + c + ", " + g + ")";
					e.$slideTrack.css(f)
				} else {
					f[e.animType] = "translate3d(" + c + ", " + g + ", 0px)";
					e.$slideTrack.css(f)
				}
			}
		}
		;
		b.prototype.setDimensions = function() {
			var c = this;
			if (c.options.vertical === false) {
				if (c.options.centerMode === true) {
					c.$list.css({
						padding: ("0px " + c.options.centerPadding)
					})
				}
			} else {
				c.$list.height(c.$slides.first().outerHeight(true) * c.options.slidesToShow);
				if (c.options.centerMode === true) {
					c.$list.css({
						padding: (c.options.centerPadding + " 0px")
					})
				}
			}
			c.listWidth = c.$list.width();
			c.listHeight = c.$list.height();
			if (c.options.vertical === false && c.options.variableWidth === false) {
				c.slideWidth = Math.ceil(c.listWidth / c.options.slidesToShow);
				c.$slideTrack.width(Math.ceil((c.slideWidth * c.$slideTrack.children(".slick-slide").length)))
			} else {
				if (c.options.variableWidth === true) {
					c.$slideTrack.width(5000 * c.slideCount)
				} else {
					c.slideWidth = Math.ceil(c.listWidth);
					c.$slideTrack.height(Math.ceil((c.$slides.first().outerHeight(true) * c.$slideTrack.children(".slick-slide").length)))
				}
			}
			var d = c.$slides.first().outerWidth(true) - c.$slides.first().width();
			if (c.options.variableWidth === false) {
				c.$slideTrack.children(".slick-slide").width(c.slideWidth - d)
			}
		}
		;
		b.prototype.setFade = function() {
			var c = this, d;
			c.$slides.each(function(e, f) {
				d = (c.slideWidth * e) * -1;
				if (c.options.rtl === true) {
					a(f).css({
						position: "relative",
						right: d,
						top: 0,
						zIndex: c.options.zIndex - 2,
						opacity: 0
					})
				} else {
					a(f).css({
						position: "relative",
						left: d,
						top: 0,
						zIndex: c.options.zIndex - 2,
						opacity: 0
					})
				}
			});
			c.$slides.eq(c.currentSlide).css({
				zIndex: c.options.zIndex - 1,
				opacity: 1
			})
		}
		;
		b.prototype.setHeight = function() {
			var d = this;
			if (d.options.slidesToShow === 1 && d.options.adaptiveHeight === true && d.options.vertical === false) {
				var c = d.$slides.eq(d.currentSlide).outerHeight(true);
				d.$list.css("height", c)
			}
		}
		;
		b.prototype.setOption = b.prototype.slickSetOption = function() {
			var d = this, c, h, g, k, f = false, e;
			if (a.type(arguments[0]) === "object") {
				g = arguments[0];
				f = arguments[1];
				e = "multiple"
			} else {
				if (a.type(arguments[0]) === "string") {
					g = arguments[0];
					k = arguments[1];
					f = arguments[2];
					if (arguments[0] === "responsive" && a.type(arguments[1]) === "array") {
						e = "responsive"
					} else {
						if (typeof arguments[1] !== "undefined") {
							e = "single"
						}
					}
				}
			}
			if (e === "single") {
				d.options[g] = k
			} else {
				if (e === "multiple") {
					a.each(g, function(l, m) {
						d.options[l] = m
					})
				} else {
					if (e === "responsive") {
						for (h in k) {
							if (a.type(d.options.responsive) !== "array") {
								d.options.responsive = [k[h]]
							} else {
								c = d.options.responsive.length - 1;
								while (c >= 0) {
									if (d.options.responsive[c].breakpoint === k[h].breakpoint) {
										d.options.responsive.splice(c, 1)
									}
									c--
								}
								d.options.responsive.push(k[h])
							}
						}
					}
				}
			}
			if (f) {
				d.unload();
				d.reinit()
			}
		}
		;
		b.prototype.setPosition = function() {
			var c = this;
			c.setDimensions();
			c.setHeight();
			if (c.options.fade === false) {
				c.setCSS(c.getLeft(c.currentSlide))
			} else {
				c.setFade()
			}
			c.$slider.trigger("setPosition", [c])
		}
		;
		b.prototype.setProps = function() {
			var d = this
			  , c = document.body.style;
			d.positionProp = d.options.vertical === true ? "top" : "left";
			if (d.positionProp === "top") {
				d.$slider.addClass("slick-vertical")
			} else {
				d.$slider.removeClass("slick-vertical")
			}
			if (c.WebkitTransition !== undefined || c.MozTransition !== undefined || c.msTransition !== undefined) {
				if (d.options.useCSS === true) {
					d.cssTransitions = true
				}
			}
			if (d.options.fade) {
				if (typeof d.options.zIndex === "number") {
					if (d.options.zIndex < 3) {
						d.options.zIndex = 3
					}
				} else {
					d.options.zIndex = d.defaults.zIndex
				}
			}
			if (c.OTransform !== undefined) {
				d.animType = "OTransform";
				d.transformType = "-o-transform";
				d.transitionType = "OTransition";
				if (c.perspectiveProperty === undefined && c.webkitPerspective === undefined) {
					d.animType = false
				}
			}
			if (c.MozTransform !== undefined) {
				d.animType = "MozTransform";
				d.transformType = "-moz-transform";
				d.transitionType = "MozTransition";
				if (c.perspectiveProperty === undefined && c.MozPerspective === undefined) {
					d.animType = false
				}
			}
			if (c.webkitTransform !== undefined) {
				d.animType = "webkitTransform";
				d.transformType = "-webkit-transform";
				d.transitionType = "webkitTransition";
				if (c.perspectiveProperty === undefined && c.webkitPerspective === undefined) {
					d.animType = false
				}
			}
			if (c.msTransform !== undefined) {
				d.animType = "msTransform";
				d.transformType = "-ms-transform";
				d.transitionType = "msTransition";
				if (c.msTransform === undefined) {
					d.animType = false
				}
			}
			if (c.transform !== undefined && d.animType !== false) {
				d.animType = "transform";
				d.transformType = "transform";
				d.transitionType = "transition"
			}
			d.transformsEnabled = d.options.useTransform && (d.animType !== null && d.animType !== false)
		}
		;
		b.prototype.setSlideClasses = function(f) {
			var e = this, c, d, h, g;
			d = e.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
			e.$slides.eq(f).addClass("slick-current");
			if (e.options.centerMode === true) {
				c = Math.floor(e.options.slidesToShow / 2);
				if (e.options.infinite === true) {
					if (f >= c && f <= (e.slideCount - 1) - c) {
						e.$slides.slice(f - c, f + c + 1).addClass("slick-active").attr("aria-hidden", "false")
					} else {
						h = e.options.slidesToShow + f;
						d.slice(h - c + 1, h + c + 2).addClass("slick-active").attr("aria-hidden", "false")
					}
					if (f === 0) {
						d.eq(d.length - 1 - e.options.slidesToShow).addClass("slick-center")
					} else {
						if (f === e.slideCount - 1) {
							d.eq(e.options.slidesToShow).addClass("slick-center")
						}
					}
				}
				e.$slides.eq(f).addClass("slick-center")
			} else {
				if (f >= 0 && f <= (e.slideCount - e.options.slidesToShow)) {
					e.$slides.slice(f, f + e.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")
				} else {
					if (d.length <= e.options.slidesToShow) {
						d.addClass("slick-active").attr("aria-hidden", "false")
					} else {
						g = e.slideCount % e.options.slidesToShow;
						h = e.options.infinite === true ? e.options.slidesToShow + f : f;
						if (e.options.slidesToShow == e.options.slidesToScroll && (e.slideCount - f) < e.options.slidesToShow) {
							d.slice(h - (e.options.slidesToShow - g), h + g).addClass("slick-active").attr("aria-hidden", "false")
						} else {
							d.slice(h, h + e.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")
						}
					}
				}
			}
			if (e.options.lazyLoad === "ondemand") {
				e.lazyLoad()
			}
		}
		;
		b.prototype.setupInfinite = function() {
			var c = this, d, f, e;
			if (c.options.fade === true) {
				c.options.centerMode = false
			}
			if (c.options.infinite === true && c.options.fade === false) {
				f = null;
				if (c.slideCount > c.options.slidesToShow) {
					if (c.options.centerMode === true) {
						e = c.options.slidesToShow + 1
					} else {
						e = c.options.slidesToShow
					}
					for (d = c.slideCount; d > (c.slideCount - e); d -= 1) {
						f = d - 1;
						a(c.$slides[f]).clone(true).attr("id", "").attr("data-slick-index", f - c.slideCount).prependTo(c.$slideTrack).addClass("slick-cloned")
					}
					for (d = 0; d < e; d += 1) {
						f = d;
						a(c.$slides[f]).clone(true).attr("id", "").attr("data-slick-index", f + c.slideCount).appendTo(c.$slideTrack).addClass("slick-cloned")
					}
					c.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
						a(this).attr("id", "")
					})
				}
			}
		}
		;
		b.prototype.interrupt = function(c) {
			var d = this;
			if (!c) {
				d.autoPlay()
			}
			d.interrupted = c
		}
		;
		b.prototype.selectHandler = function(f) {
			var e = this;
			var d = a(f.target).is(".slick-slide") ? a(f.target) : a(f.target).parents(".slick-slide");
			var c = parseInt(d.attr("data-slick-index"));
			if (!c) {
				c = 0
			}
			if (e.slideCount <= e.options.slidesToShow) {
				e.setSlideClasses(c);
				e.asNavFor(c);
				return
			}
			e.slideHandler(c)
		}
		;
		b.prototype.slideHandler = function(f, k, e) {
			var d, n, h, l, g = null, m = this, c;
			k = k || false;
			if (m.animating === true && m.options.waitForAnimate === true) {
				return
			}
			if (m.options.fade === true && m.currentSlide === f) {
				return
			}
			if (m.slideCount <= m.options.slidesToShow) {
				return
			}
			if (k === false) {
				m.asNavFor(f)
			}
			d = f;
			g = m.getLeft(d);
			l = m.getLeft(m.currentSlide);
			m.currentLeft = m.swipeLeft === null ? l : m.swipeLeft;
			if (m.options.infinite === false && m.options.centerMode === false && (f < 0 || f > m.getDotCount() * m.options.slidesToScroll)) {
				if (m.options.fade === false) {
					d = m.currentSlide;
					if (e !== true) {
						m.animateSlide(l, function() {
							m.postSlide(d)
						})
					} else {
						m.postSlide(d)
					}
				}
				return
			} else {
				if (m.options.infinite === false && m.options.centerMode === true && (f < 0 || f > (m.slideCount - m.options.slidesToScroll))) {
					if (m.options.fade === false) {
						d = m.currentSlide;
						if (e !== true) {
							m.animateSlide(l, function() {
								m.postSlide(d)
							})
						} else {
							m.postSlide(d)
						}
					}
					return
				}
			}
			if (m.options.autoplay) {
				clearInterval(m.autoPlayTimer)
			}
			if (d < 0) {
				if (m.slideCount % m.options.slidesToScroll !== 0) {
					n = m.slideCount - (m.slideCount % m.options.slidesToScroll)
				} else {
					n = m.slideCount + d
				}
			} else {
				if (d >= m.slideCount) {
					if (m.slideCount % m.options.slidesToScroll !== 0) {
						n = 0
					} else {
						n = d - m.slideCount
					}
				} else {
					n = d
				}
			}
			m.animating = true;
			m.$slider.trigger("beforeChange", [m, m.currentSlide, n]);
			h = m.currentSlide;
			m.currentSlide = n;
			m.setSlideClasses(m.currentSlide);
			if (m.options.asNavFor) {
				c = m.getNavTarget();
				c = c.slick("getSlick");
				if (c.slideCount <= c.options.slidesToShow) {
					c.setSlideClasses(m.currentSlide)
				}
			}
			m.updateDots();
			m.updateArrows();
			if (m.options.fade === true) {
				if (e !== true) {
					m.fadeSlideOut(h);
					m.fadeSlide(n, function() {
						m.postSlide(n)
					})
				} else {
					m.postSlide(n)
				}
				m.animateHeight();
				return
			}
			if (e !== true) {
				m.animateSlide(g, function() {
					m.postSlide(n)
				})
			} else {
				m.postSlide(n)
			}
		}
		;
		b.prototype.startLoad = function() {
			var c = this;
			if (c.options.arrows === true && c.slideCount > c.options.slidesToShow) {
				c.$prevArrow.hide();
				c.$nextArrow.hide()
			}
			if (c.options.dots === true && c.slideCount > c.options.slidesToShow) {
				c.$dots.hide()
			}
			c.$slider.addClass("slick-loading")
		}
		;
		b.prototype.swipeDirection = function() {
			var c, f, e, g, d = this;
			c = d.touchObject.startX - d.touchObject.curX;
			f = d.touchObject.startY - d.touchObject.curY;
			e = Math.atan2(f, c);
			g = Math.round(e * 180 / Math.PI);
			if (g < 0) {
				g = 360 - Math.abs(g)
			}
			if ((g <= 45) && (g >= 0)) {
				return (d.options.rtl === false ? "left" : "right")
			}
			if ((g <= 360) && (g >= 315)) {
				return (d.options.rtl === false ? "left" : "right")
			}
			if ((g >= 135) && (g <= 225)) {
				return (d.options.rtl === false ? "right" : "left")
			}
			if (d.options.verticalSwiping === true) {
				if ((g >= 35) && (g <= 135)) {
					return "down"
				} else {
					return "up"
				}
			}
			return "vertical"
		}
		;
		b.prototype.swipeEnd = function(e) {
			var d = this, c, f;
			d.dragging = false;
			d.interrupted = false;
			d.shouldClick = (d.touchObject.swipeLength > 10) ? false : true;
			if (d.touchObject.curX === undefined) {
				return false
			}
			if (d.touchObject.edgeHit === true) {
				d.$slider.trigger("edge", [d, d.swipeDirection()])
			}
			if (d.touchObject.swipeLength >= d.touchObject.minSwipe) {
				f = d.swipeDirection();
				switch (f) {
				case "left":
				case "down":
					c = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide + d.getSlideCount()) : d.currentSlide + d.getSlideCount();
					d.currentDirection = 0;
					break;
				case "right":
				case "up":
					c = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide - d.getSlideCount()) : d.currentSlide - d.getSlideCount();
					d.currentDirection = 1;
					break;
				default:
				}
				if (f != "vertical") {
					d.slideHandler(c);
					d.touchObject = {};
					d.$slider.trigger("swipe", [d, f])
				}
			} else {
				if (d.touchObject.startX !== d.touchObject.curX) {
					d.slideHandler(d.currentSlide);
					d.touchObject = {}
				}
			}
		}
		;
		b.prototype.swipeHandler = function(d) {
			var c = this;
			if ((c.options.swipe === false) || ("ontouchend"in document && c.options.swipe === false)) {
				return
			} else {
				if (c.options.draggable === false && d.type.indexOf("mouse") !== -1) {
					return
				}
			}
			c.touchObject.fingerCount = d.originalEvent && d.originalEvent.touches !== undefined ? d.originalEvent.touches.length : 1;
			c.touchObject.minSwipe = c.listWidth / c.options.touchThreshold;
			if (c.options.verticalSwiping === true) {
				c.touchObject.minSwipe = c.listHeight / c.options.touchThreshold
			}
			switch (d.data.action) {
			case "start":
				c.swipeStart(d);
				break;
			case "move":
				c.swipeMove(d);
				break;
			case "end":
				c.swipeEnd(d);
				break
			}
		}
		;
		b.prototype.swipeMove = function(f) {
			var e = this, l = false, h, d, g, c, k;
			k = f.originalEvent !== undefined ? f.originalEvent.touches : null;
			if (!e.dragging || k && k.length !== 1) {
				return false
			}
			h = e.getLeft(e.currentSlide);
			e.touchObject.curX = k !== undefined ? k[0].pageX : f.clientX;
			e.touchObject.curY = k !== undefined ? k[0].pageY : f.clientY;
			e.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(e.touchObject.curX - e.touchObject.startX, 2)));
			if (e.options.verticalSwiping === true) {
				e.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(e.touchObject.curY - e.touchObject.startY, 2)))
			}
			d = e.swipeDirection();
			if (d === "vertical") {
				return
			}
			if (f.originalEvent !== undefined && e.touchObject.swipeLength > 4) {
				f.preventDefault()
			}
			c = (e.options.rtl === false ? 1 : -1) * (e.touchObject.curX > e.touchObject.startX ? 1 : -1);
			if (e.options.verticalSwiping === true) {
				c = e.touchObject.curY > e.touchObject.startY ? 1 : -1
			}
			g = e.touchObject.swipeLength;
			e.touchObject.edgeHit = false;
			if (e.options.infinite === false) {
				if ((e.currentSlide === 0 && d === "right") || (e.currentSlide >= e.getDotCount() && d === "left")) {
					g = e.touchObject.swipeLength * e.options.edgeFriction;
					e.touchObject.edgeHit = true
				}
			}
			if (e.options.vertical === false) {
				e.swipeLeft = h + g * c
			} else {
				e.swipeLeft = h + (g * (e.$list.height() / e.listWidth)) * c
			}
			if (e.options.verticalSwiping === true) {
				e.swipeLeft = h + g * c
			}
			if (e.options.fade === true || e.options.touchMove === false) {
				return false
			}
			if (e.animating === true) {
				e.swipeLeft = null;
				return false
			}
			e.setCSS(e.swipeLeft)
		}
		;
		b.prototype.swipeStart = function(d) {
			var c = this, e;
			c.interrupted = true;
			if (c.touchObject.fingerCount !== 1 || c.slideCount <= c.options.slidesToShow) {
				c.touchObject = {};
				return false
			}
			if (d.originalEvent !== undefined && d.originalEvent.touches !== undefined) {
				e = d.originalEvent.touches[0]
			}
			c.touchObject.startX = c.touchObject.curX = e !== undefined ? e.pageX : d.clientX;
			c.touchObject.startY = c.touchObject.curY = e !== undefined ? e.pageY : d.clientY;
			c.dragging = true
		}
		;
		b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
			var c = this;
			if (c.$slidesCache !== null) {
				c.unload();
				c.$slideTrack.children(this.options.slide).detach();
				c.$slidesCache.appendTo(c.$slideTrack);
				c.reinit()
			}
		}
		;
		b.prototype.unload = function() {
			var c = this;
			a(".slick-cloned", c.$slider).remove();
			if (c.$dots) {
				c.$dots.remove()
			}
			if (c.$prevArrow && c.htmlExpr.test(c.options.prevArrow)) {
				c.$prevArrow.remove()
			}
			if (c.$nextArrow && c.htmlExpr.test(c.options.nextArrow)) {
				c.$nextArrow.remove()
			}
			c.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
		}
		;
		b.prototype.unslick = function(d) {
			var c = this;
			c.$slider.trigger("unslick", [c, d]);
			c.destroy()
		}
		;
		b.prototype.updateArrows = function() {
			var d = this, c;
			c = Math.floor(d.options.slidesToShow / 2);
			if (d.options.arrows === true && d.slideCount > d.options.slidesToShow && !d.options.infinite) {
				d.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
				d.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
				if (d.currentSlide === 0) {
					d.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
					d.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")
				} else {
					if (d.currentSlide >= d.slideCount - d.options.slidesToShow && d.options.centerMode === false) {
						d.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
						d.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")
					} else {
						if (d.currentSlide >= d.slideCount - 1 && d.options.centerMode === true) {
							d.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
							d.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")
						}
					}
				}
			}
		}
		;
		b.prototype.updateDots = function() {
			var c = this;
			if (c.$dots !== null) {
				c.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true");
				c.$dots.find("li").eq(Math.floor(c.currentSlide / c.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false")
			}
		}
		;
		b.prototype.visibility = function() {
			var c = this;
			if (c.options.autoplay) {
				if (document[c.hidden]) {
					c.interrupted = true
				} else {
					c.interrupted = false
				}
			}
		}
		;
		a.fn.slick = function() {
			var f = this, h = arguments[0], e = Array.prototype.slice.call(arguments, 1), c = f.length, g, d;
			for (g = 0; g < c; g++) {
				if (typeof h == "object" || typeof h == "undefined") {
					f[g].slick = new b(f[g],h)
				} else {
					d = f[g].slick[h].apply(f[g].slick, e)
				}
				if (typeof d != "undefined") {
					return d
				}
			}
			return f
		}
	}));
	var $jq = jQuery.noConflict();
	$jq(document).ready(function() {
		var a = 0;
		$jq(".display-ad-container span").each(function(b) {
			$(this).closest(".display-ad-section").attr("id", "click" + a);
			a++;
			$jq(".display-ad-container span").click(function() {
				var c = $jq(this);
				c.closest(".display-ad-section").hide();
				sessionStorage.setItem("advertOnce" + c.closest(".display-ad-section").attr("id"), "true")
			})
		});
		$jq(".display-ad-container span").each(function(b) {
			if (sessionStorage.getItem("advertOnceclick" + b) == "true") {
				$jq(".display-ad-section#click" + b).hide()
			} else {}
		});
		$jq(".display-ad").slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			adaptiveHeight: true,
			arrows: true
		})
	});
	$(document).ready(function() {
		$(".accordion .accordion-icon-style .accordion-img-minus").hide();
		$(".accordion .accordion-icon-style").click(function() {
			var b = $(this).closest(".accordion").attr("id");
			var a = $(this).attr("data-target");
			$("#" + b).find('.accordion-icon-style[data-target="' + a + '"]').find("img.accordion-img-minus, img.accordion-img-plus").hide();
			if ($("#" + b).find('.accordion-icon-style[data-target="' + a + '"]').hasClass("yellowbg-color")) {
				$("#" + b).find('.accordion-icon-style[data-target="' + a + '"]').removeClass("yellowbg-color");
				$("#" + b).find('.accordion-icon-style[data-target="' + a + '"]').find(".accordion-img-minus").hide();
				$("#" + b).find('.accordion-icon-style[data-target="' + a + '"]').find(".accordion-img-plus").show();
				$("#" + b).find('.accordion-icon-style[data-target="' + a + '"]').closest(".accordion-icon-style").next().hide();
				$("#" + b).find(".accordion-icon-style").find("img.accordion-img-minus, img.accordion-img-plus").hide()
			} else {
				$("#" + b).find(".panel-collapse.collapse").hide();
				$("#" + b).find(".accordion-icon-style").removeClass("yellowbg-color");
				$("#" + b).find(".accordion-icon-style").find(".accordion-img-minus").hide();
				$("#" + b).find(".accordion-icon-style").find(".accordion-img-plus").show();
				$("#" + b).find('.accordion-icon-style[data-target="' + a + '"]').addClass("yellowbg-color");
				$("#" + b).find('.accordion-icon-style[data-target="' + a + '"]').find(".accordion-img-plus").hide();
				$("#" + b).find('.accordion-icon-style[data-target="' + a + '"]').find(".accordion-img-minus").show();
				$("#" + b).find('.accordion-icon-style[data-target="' + a + '"]').closest(".accordion-icon-style").next().show();
				$("#" + b).find(".accordion-icon-style").find("img.accordion-img-minus, img.accordion-img-plus").hide()
			}
		});
		$(".accordion .accordion-icon-style").each(function() {
			$(this).find("h4").after("<div class='accordion-img-plus'></div> <div class='accordion-img-minus'></div>");
			$(this).find("img.accordion-img-minus, img.accordion-img-plus").hide()
		})
	});