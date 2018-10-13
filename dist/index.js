! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("vue-clock", [], e) : "object" == typeof exports ? exports["vue-clock"] = e() : t["vue-clock"] = e() }("undefined" != typeof self ? self : this, function() {
	return function(t) {
		var e = {};

		function i(n) { if (e[n]) return e[n].exports; var o = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports }
		return i.m = t, i.c = e, i.d = function(t, e, n) { i.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: n }) }, i.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return i.d(e, "a", e), e }, i.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, i.p = "/", i(i.s = 1)
	}([function(t, e, i) {
		"use strict";
		e.a = {
			name: "vueClock",
			data: function() { return { clockBoxStyle: {}, canvas: {}, context: {}, timeAngle: {}, timeInterval: {}, transitionOption: {} } },
			props: { width: { default: "" }, height: { default: "" }, timezone: { default: "" }, time: { type: Object, default: function() { return { isStatic: !1, timestamp: 0 } } }, border: { type: Object, default: function() { return { type: "circle", width: 300, height: 300, lineWidth: 2, color: "#bbb" } } }, background: { type: Object, default: function() { return { color: "", image: "" } } }, dial: { type: Object, default: function() { return { isDial: !0, distance: 0, maxLength: 8, minLength: 5, maxWidth: 3, minWidth: 2, color: "#888" } } }, number: { type: Object, default: function() { return { isNumber: !0, type: "arabic", color: "#777", fontSize: "19px", fontWeight: "normal", fontFamily: "微软雅黑", radius: 125 } } }, needle: { type: Object, default: function() { return { second: { length: 100, color: "#aaa", lineWidth: 3, longOut: 5 }, minute: { length: 110, color: "#999", lineWidth: 4, longOut: 5 }, hour: { length: 70, color: "#888", lineWidth: 4, longOut: 5 } } } } },
			computed: { drawOption: function() { return { time: { isStatic: this.time.isStatic || !1, timestamp: this.time.isStatic }, border: { type: this.border.type || "circle", width: this.border.width || 300, height: this.border.height || this.border.width || 300, color: this.border.color || "#bbb", lineWidth: this.border.lineWidth || 2 }, background: { color: this.background.color || "", image: this.background.image || "" }, dial: { isDial: this.dial.isDial || !0, distance: this.dial.distance || 0, maxLength: this.dial.maxLength || 8, minLength: this.dial.minLength || 5, maxWidth: this.dial.maxWidth || 3, minWidth: this.dial.minWidth || 2, color: this.dial.color || "#888" }, number: { isNumber: this.number.isNumber || !0, type: this.number.type || "arabic", color: this.number.color || "#777", fontSize: this.number.fontSize || "19px", fontWeight: this.number.fontWeight || "normal", fontFamily: this.number.fontFamily || "微软雅黑", radius: this.number.radius || 125 }, needle: { second: { length: this.needle.second && this.needle.second.length || 100, color: this.needle.second && this.needle.second.color || "#aaa", lineWidth: this.needle.second && this.needle.second.lineWidth || 3, longOut: this.needle.second && this.needle.second.longOut || 0 }, minute: { length: this.needle.minute && this.needle.minute.length || 110, color: this.needle.minute && this.needle.minute.color || "#999", lineWidth: this.needle.minute && this.needle.minute.lineWidth || 4, longOut: this.needle.minute && this.needle.minute.longOut || 0 }, hour: { length: this.needle.hour && this.needle.hour.length || 70, color: this.needle.hour && this.needle.hour.color || "#888", lineWidth: this.needle.hour && this.needle.hour.lineWidth || 4, longOut: this.needle.hour && this.needle.hour.longOut || 0 } } } } },
			watch: { drawOption: { handler: function(t) { t.time.isStatic && clearInterval(this.timeInterval), this.draw() }, deep: !0 }, timeAngle: function() { this.draw() } },
			created: function() {
				var t = this;
				this.$nextTick(function() { t.canvas = t.$el.querySelector("canvas"), t.context = t.canvas.getContext("2d"), t.setClockBoxStyle(), t.newData(), t.time.isStatic || (t.timeInterval = setInterval(t.newData, 1e3)), t.draw() })
			},
			methods: {
				draw: function() { this.clear(), this.drawBackground(), this.drawBorder(), this.drawDial(), this.drawNumber(), this.drawNeedle() },
				clear: function() { this.context.clearRect(0, 0, this.canvas.width, this.canvas.width) },
				setClockBoxStyle: function() { var t = {}; "" === this.width || /%$/.test(this.width) ? t.width = this.width : t.width = Number(this.width) + "px", "" === this.height && ("" === this.width || /%$/.test(this.width) ? (t.height = this.$el.clientWidth + "px", this.clockBoxStyle = t) : t.height = this.width), this.canvas.width = this.$el.clientWidth, this.canvas.height = Number(t.height.split("px")[0]) },
				drawBorder: function() { this.context.save(), this.context.translate(this.canvas.width / 2, this.canvas.height / 2), this.context.beginPath(), "rectangle" == this.drawOption.border.type ? this.context.rect(-this.drawOption.border.width / 2, -this.drawOption.border.height / 2, this.drawOption.border.width, this.drawOption.border.height) : this.context.arc(0, 0, this.drawOption.border.width / 2, 0, 2 * Math.PI, !0), this.context.closePath(), this.context.strokeStyle = this.drawOption.border.color, this.context.lineWidth = this.drawOption.border.lineWidth, this.context.stroke(), this.context.restore() },
				drawBackground: function() {
					var t, e;
					if (this.context.save(), this.context.beginPath(), this.context.translate(this.canvas.width / 2, this.canvas.height / 2), "rectangle" == this.drawOption.border.type ? (this.context.rect(-this.drawOption.border.width / 2, -this.drawOption.border.height / 2, this.drawOption.border.width, this.drawOption.border.height), t = -this.drawOption.border.width / 2, e = -this.drawOption.border.height / 2) : (this.context.arc(0, 0, this.drawOption.border.width / 2, 0, 2 * Math.PI, !0), t = -this.drawOption.border.width / 2, e = -this.drawOption.border.width / 2), this.drawOption.background.color && (this.context.fillStyle = this.drawOption.background.color, this.context.fill()), this.drawOption.background.image) {
						var i, n, o, r = new Image;
						if (this.transitionOption.bgImg) r = this.transitionOption.bgImg;
						else {
							var s = this;
							r.src = this.drawOption.background.image, r.onload = function() { s.$set(s.transitionOption, "bgImg", r) }
						}
						r.width >= r.height ? (i = (r.width - r.height) / 2, n = 0, o = r.height) : (i = 0, n = (r.height - r.width) / 2, o = r.width), this.context.clip(), this.context.drawImage(r, i, n, o, o, t, e, 2 * -t, 2 * -e)
					}
					this.context.closePath(), this.context.restore()
				},
				drawDial: function() {
					if (this.drawOption.dial.isDial) {
						var t = 2 * Math.PI / 60,
							e = 0,
							i = this.drawOption.dial.distance ? this.drawOption.dial.distance + this.drawOption.border.lineWidth / 2 : this.drawOption.border.lineWidth / 2;
						0 == this.drawOption.dial.distance && (i = this.drawOption.border.lineWidth / 2);
						for (var n = { x: 0, y: this.drawOption.border.width / 2 - i }, o = 0; o < 60; o++) e = t * o, this.context.save(), this.context.translate(this.canvas.width / 2, this.canvas.height / 2), o % 5 == 0 ? this.line(n, e, this.drawOption.dial.maxLength - n.y, this.drawOption.dial.color, this.drawOption.dial.maxWidth) : this.line(n, e, this.drawOption.dial.minLength - n.y, this.drawOption.dial.color, this.drawOption.dial.minWidth), this.context.restore()
					}
				},
				drawNumber: function() {
					if (this.drawOption.number.isNumber) {
						for (var t = [], e = 1; e < 13; e++) t[e - 1] = e + 3, e + 3 > 12 && (t[e - 1] = 3 - (12 - e));
						if ("roman" == this.drawOption.number.type)
							for (var i = 0; i < 12; i++) t[i] = this.intToRoman(t[i]);
						var n = Math.PI / 6;
						this.context.save(), this.context.fillStyle = this.drawOption.number.color, this.context.font = this.drawOption.number.fontWeight + " " + this.drawOption.number.fontSize + " " + this.drawOption.number.fontFamily, this.context.textBaseline = "middle", this.context.textAlign = "center", this.context.translate(this.canvas.width / 2, this.canvas.height / 2);
						for (var o = 0; o < t.length; o++) this.context.fillText(t[o], this.drawOption.number.radius * Math.cos(n * (o + 1)), this.drawOption.number.radius * Math.sin(n * (o + 1)));
						this.context.restore()
					}
				},
				intToRoman: function(t) {
					for (var e = ["I", "V", "X", "L", "C", "D", "M"], i = t.toString().split(""), n = 0; n < i.length; n++) {
						var o = Number(i[i.length - 1 - n]);
						if (i[i.length - 1 - n] = "", o >= 5 && o < 9) { i[i.length - 1 - n] = e[2 * n + 1]; for (var r = 0; r < o - 5; r++) i[i.length - 1 - n] += e[2 * n] } else if (9 == o) i[i.length - 1 - n] = e[2 * n] + e[2 * n + 2];
						else if (4 == o) i[i.length - 1 - n] = e[2 * n] + e[2 * n + 1];
						else
							for (var s = 0; s < o; s++) i[i.length - 1 - n] += e[2 * n]
					}
					return i.join("")
				},
				drawNeedle: function() {
					var t = this.timeAngle.hAngle,
						e = this.timeAngle.mAngle,
						i = this.timeAngle.sAngle;
					this.context.save(), this.context.translate(this.canvas.width / 2, this.canvas.height / 2), this.line({ x: 0, y: this.drawOption.needle.hour.longOut }, t, this.drawOption.needle.hour.length, this.drawOption.needle.hour.color, this.drawOption.needle.hour.lineWidth), this.line({ x: 0, y: this.drawOption.needle.minute.longOut }, e, this.drawOption.needle.minute.length, this.drawOption.needle.minute.color, this.drawOption.needle.minute.lineWidth), this.line({ x: 0, y: this.drawOption.needle.second.longOut }, i, this.drawOption.needle.second.length, this.drawOption.needle.second.color, this.drawOption.needle.second.lineWidth), this.context.restore()
				},
				selectTimezone: function() {
					var t, e = this.drawOption.time.isStatic ? new Data(this.drawOption.time.timestamp) : new Date,
						i = e.getTime();
					t = "" === this.timezone ? e.getTimezoneOffset() / 60 : Number(this.timezone);
					var n = 6e4 * e.getTimezoneOffset();
					return new Date(i + n + 36e5 * t)
				},
				newData: function() {
					var t = this.selectTimezone(),
						e = t.getHours(),
						i = t.getMinutes(),
						n = t.getSeconds(),
						o = 2 * Math.PI * (n % 60) / 60,
						r = 2 * Math.PI * (i % 60) / 60 + o / 60,
						s = 2 * Math.PI * (e % 12) / 12 + r / 12;
					this.timeAngle = { sAngle: o, mAngle: r, hAngle: s }
				},
				line: function(t, e, i, n, o) { this.context.save(), this.context.beginPath(), this.context.rotate(e), this.context.moveTo(t.x, t.y), this.context.lineTo(0, -i), this.context.strokeStyle = n, this.context.lineWidth = o, this.context.stroke(), this.context.restore() }
			}
		}
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), i.d(e, "install", function() { return r });
		var n = i(2);
		i.d(e, "vueClock", function() { return n.a });
		var o = [n.a],
			r = function(t, e) { o.map(function(e) { t.component(e.name, e) }) };
		"undefined" != typeof window && window.Vue && r(window.Vue), e.default = { install: r }
	}, function(t, e, i) {
		"use strict";
		var n = i(3);
		n.a.install = function(t) { return t.component(n.a.name, n.a) }, e.a = n.a
	}, function(t, e, i) {
		"use strict";
		var n = i(0),
			o = i(10),
			r = !1;
		var s = function(t) { r || i(4) },
			a = i(9)(n.a, o.a, !1, s, "data-v-23bee700", null);
		a.options.__file = "src\\components\\clock\\clock.vue", e.a = a.exports
	}, function(t, e, i) {
		var n = i(5);
		"string" == typeof n && (n = [
			[t.i, n, ""]
		]), n.locals && (t.exports = n.locals);
		i(7)("d8ee4eda", n, !1, {})
	}, function(t, e, i) {
		(t.exports = i(6)(!0)).push([t.i, "\n#clock[data-v-23bee700] {\n  width: 100%;\n}\n", "", { version: 3, sources: ["D:/github/vue-clock/src/components/clock/clock.vue"], names: [], mappings: ";AACA;EACE,YAAY;CACb", file: "clock.vue", sourcesContent: ["\n#clock[data-v-23bee700] {\n  width: 100%;\n}\n"], sourceRoot: "" }])
	}, function(t, e) {
		t.exports = function(t) {
			var e = [];
			return e.toString = function() {
				return this.map(function(e) {
					var i = function(t, e) {
						var i = t[1] || "",
							n = t[3];
						if (!n) return i;
						if (e && "function" == typeof btoa) {
							var o = (s = n, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"),
								r = n.sources.map(function(t) { return "/*# sourceURL=" + n.sourceRoot + t + " */" });
							return [i].concat(r).concat([o]).join("\n")
						}
						var s;
						return [i].join("\n")
					}(e, t);
					return e[2] ? "@media " + e[2] + "{" + i + "}" : i
				}).join("")
			}, e.i = function(t, i) {
				"string" == typeof t && (t = [
					[null, t, ""]
				]);
				for (var n = {}, o = 0; o < this.length; o++) { var r = this[o][0]; "number" == typeof r && (n[r] = !0) }
				for (o = 0; o < t.length; o++) { var s = t[o]; "number" == typeof s[0] && n[s[0]] || (i && !s[2] ? s[2] = i : i && (s[2] = "(" + s[2] + ") and (" + i + ")"), e.push(s)) }
			}, e
		}
	}, function(t, e, i) {
		var n = "undefined" != typeof document;
		if ("undefined" != typeof DEBUG && DEBUG && !n) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
		var o = i(8),
			r = {},
			s = n && (document.head || document.getElementsByTagName("head")[0]),
			a = null,
			h = 0,
			d = !1,
			c = function() {},
			l = null,
			u = "data-vue-ssr-id",
			p = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

		function f(t) {
			for (var e = 0; e < t.length; e++) {
				var i = t[e],
					n = r[i.id];
				if (n) {
					n.refs++;
					for (var o = 0; o < n.parts.length; o++) n.parts[o](i.parts[o]);
					for (; o < i.parts.length; o++) n.parts.push(g(i.parts[o]));
					n.parts.length > i.parts.length && (n.parts.length = i.parts.length)
				} else {
					var s = [];
					for (o = 0; o < i.parts.length; o++) s.push(g(i.parts[o]));
					r[i.id] = { id: i.id, refs: 1, parts: s }
				}
			}
		}

		function m() { var t = document.createElement("style"); return t.type = "text/css", s.appendChild(t), t }

		function g(t) {
			var e, i, n = document.querySelector("style[" + u + '~="' + t.id + '"]');
			if (n) {
				if (d) return c;
				n.parentNode.removeChild(n)
			}
			if (p) {
				var o = h++;
				n = a || (a = m()), e = b.bind(null, n, o, !1), i = b.bind(null, n, o, !0)
			} else n = m(), e = function(t, e) {
				var i = e.css,
					n = e.media,
					o = e.sourceMap;
				n && t.setAttribute("media", n);
				l.ssrId && t.setAttribute(u, e.id);
				o && (i += "\n/*# sourceURL=" + o.sources[0] + " */", i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
				if (t.styleSheet) t.styleSheet.cssText = i;
				else {
					for (; t.firstChild;) t.removeChild(t.firstChild);
					t.appendChild(document.createTextNode(i))
				}
			}.bind(null, n), i = function() { n.parentNode.removeChild(n) };
			return e(t),
				function(n) {
					if (n) {
						if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap) return;
						e(t = n)
					} else i()
				}
		}
		t.exports = function(t, e, i, n) {
			d = i, l = n || {};
			var s = o(t, e);
			return f(s),
				function(e) {
					for (var i = [], n = 0; n < s.length; n++) {
						var a = s[n];
						(h = r[a.id]).refs--, i.push(h)
					}
					e ? f(s = o(t, e)) : s = [];
					for (n = 0; n < i.length; n++) {
						var h;
						if (0 === (h = i[n]).refs) {
							for (var d = 0; d < h.parts.length; d++) h.parts[d]();
							delete r[h.id]
						}
					}
				}
		};
		var w, v = (w = [], function(t, e) { return w[t] = e, w.filter(Boolean).join("\n") });

		function b(t, e, i, n) {
			var o = i ? "" : n.css;
			if (t.styleSheet) t.styleSheet.cssText = v(e, o);
			else {
				var r = document.createTextNode(o),
					s = t.childNodes;
				s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(r, s[e]) : t.appendChild(r)
			}
		}
	}, function(t, e) {
		t.exports = function(t, e) {
			for (var i = [], n = {}, o = 0; o < e.length; o++) {
				var r = e[o],
					s = r[0],
					a = { id: t + ":" + o, css: r[1], media: r[2], sourceMap: r[3] };
				n[s] ? n[s].parts.push(a) : i.push(n[s] = { id: s, parts: [a] })
			}
			return i
		}
	}, function(t, e) {
		t.exports = function(t, e, i, n, o, r) {
			var s, a = t = t || {},
				h = typeof t.default;
			"object" !== h && "function" !== h || (s = t, a = t.default);
			var d, c = "function" == typeof a ? a.options : a;
			if (e && (c.render = e.render, c.staticRenderFns = e.staticRenderFns, c._compiled = !0), i && (c.functional = !0), o && (c._scopeId = o), r ? (d = function(t) {
					(t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), n && n.call(this, t), t && t._registeredComponents && t._registeredComponents.add(r)
				}, c._ssrRegister = d) : n && (d = n), d) {
				var l = c.functional,
					u = l ? c.render : c.beforeCreate;
				l ? (c._injectStyles = d, c.render = function(t, e) { return d.call(e), u(t, e) }) : c.beforeCreate = u ? [].concat(u, d) : [d]
			}
			return { esModule: s, exports: a, options: c }
		}
	}, function(t, e, i) {
		"use strict";
		var n = function() {
			var t = this.$createElement,
				e = this._self._c || t;
			return e("div", { style: this.clockBoxStyle, attrs: { id: "clock" } }, [e("canvas")])
		};
		n._withStripped = !0;
		var o = { render: n, staticRenderFns: [] };
		e.a = o
	}])
});
