!(function (e) {
  function t(t) {
    for (
      var r, n, a = t[0], c = t[1], u = t[2], l = 0, h = [];
      l < a.length;
      l++
    )
      (n = a[l]),
        Object.prototype.hasOwnProperty.call(o, n) && o[n] && h.push(o[n][0]),
        (o[n] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    for (d && d(t); h.length; ) h.shift()();
    return i.push.apply(i, u || []), s();
  }
  function s() {
    for (var e, t = 0; t < i.length; t++) {
      for (var s = i[t], r = !0, n = 1; n < s.length; n++) {
        var c = s[n];
        0 !== o[c] && (r = !1);
      }
      r && (i.splice(t--, 1), (e = a((a.s = s[0]))));
    }
    return e;
  }
  var r = {},
    n = { 28: 0 },
    o = { 28: 0 },
    i = [];
  function a(t) {
    if (r[t]) return r[t].exports;
    var s = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(s.exports, s, s.exports, a), (s.l = !0), s.exports;
  }
  (a.e = function (e) {
    var t = [];
    n[e]
      ? t.push(n[e])
      : 0 !== n[e] &&
        { 38: 1, 39: 1, 40: 1 }[e] &&
        t.push(
          (n[e] = new Promise(function (t, s) {
            for (
              var r =
                  ({ 7: "countries", 16: "lang-en", 17: "lang-vi" }[e] || e) +
                  ".1c41c23311c8b15682aa.css",
                o = a.p + r,
                i = document.getElementsByTagName("link"),
                c = 0;
              c < i.length;
              c++
            ) {
              var u =
                (d = i[c]).getAttribute("data-href") || d.getAttribute("href");
              if ("stylesheet" === d.rel && (u === r || u === o)) return t();
            }
            var l = document.getElementsByTagName("style");
            for (c = 0; c < l.length; c++) {
              var d;
              if ((u = (d = l[c]).getAttribute("data-href")) === r || u === o)
                return t();
            }
            var h = document.createElement("link");
            (h.rel = "stylesheet"),
              (h.type = "text/css"),
              (h.onload = t),
              (h.onerror = function (t) {
                var r = (t && t.target && t.target.src) || o,
                  i = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + r + ")"
                  );
                (i.code = "CSS_CHUNK_LOAD_FAILED"),
                  (i.request = r),
                  delete n[e],
                  h.parentNode.removeChild(h),
                  s(i);
              }),
              (h.href = o),
              document.getElementsByTagName("head")[0].appendChild(h);
          }).then(function () {
            n[e] = 0;
          }))
        );
    var s = o[e];
    if (0 !== s)
      if (s) t.push(s[2]);
      else {
        var r = new Promise(function (t, r) {
          s = o[e] = [t, r];
        });
        t.push((s[2] = r));
        var i,
          c = document.createElement("script");
        (c.charset = "utf-8"),
          (c.timeout = 120),
          a.nc && c.setAttribute("nonce", a.nc),
          (c.src = (function (e) {
            return (
              a.p +
              "lazy/" +
              ({ 7: "countries", 16: "lang-en", 17: "lang-vi" }[e] || e) +
              "." +
              {
                7: "f3154653b05be0ae842e",
                16: "b5f2f7c446df81f918ad",
                17: "c18e31f25a079898d6ac",
                35: "c9caca38b90da9f3e280",
                36: "6eb555b501a69498ab63",
                37: "c5e940a22d3b4b27100a",
                38: "ee9965cdefe5234346af",
                39: "28ea051c980c2bb3673d",
                40: "aeeb1b90de034ceceae1",
                41: "ed020c7dde7db1e7a63d",
                42: "4279ee5095da4aa3492e",
                43: "f6ab9df9fce6c73995a6",
              }[e] +
              ".js"
            );
          })(e));
        var u = new Error();
        i = function (t) {
          (c.onerror = c.onload = null), clearTimeout(l);
          var s = o[e];
          if (0 !== s) {
            if (s) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                n = t && t.target && t.target.src;
              (u.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + n + ")"),
                (u.name = "ChunkLoadError"),
                (u.type = r),
                (u.request = n),
                s[1](u);
            }
            o[e] = void 0;
          }
        };
        var l = setTimeout(function () {
          i({ type: "timeout", target: c });
        }, 12e4);
        (c.onerror = c.onload = i), document.head.appendChild(c);
      }
    return Promise.all(t);
  }),
    (a.m = e),
    (a.c = r),
    (a.d = function (e, t, s) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var s = Object.create(null);
      if (
        (a.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          a.d(
            s,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return s;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = ""),
    (a.oe = function (e) {
      throw e;
    });
  var c = (this.webpackJsonp = this.webpackJsonp || []),
    u = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var l = 0; l < c.length; l++) t(c[l]);
  var d = u;
  i.push([4, 0, 4, 3, 6, 2, 1, 5, 10, 11]), s();
})({
  "/0p4": function (e, t) {
    e.exports = require("events");
  },
  "14cR": function (e, t) {
    e.exports = require("punycode");
  },
  4: function (e, t, s) {
    e.exports = s("CdmT");
  },
  "7WL4": function (e, t) {
    e.exports = require("https");
  },
  "89t2": function (e, t) {
    e.exports = require("perf_hooks");
  },
  "8xkj": function (e, t) {
    e.exports = require("querystring");
  },
  CdmT: function (e, t, s) {
    "use strict";
    s.r(t);
    s("iGh7"),
      s("eqHM"),
      s("xDXR"),
      s("EmOc"),
      s("ezdo"),
      s("KdAX"),
      s("mzek"),
      s("v/rv"),
      s("nAZb"),
      s("c0KM"),
      s("zheM"),
      s("CXIs"),
      s("cZjg");
    var r = s("YrRS");
    Object(r.a)();
    s("8ogj"), s("HpD8");
    var n,
      o = s("jDHv"),
      i = s("8/YW"),
      a = s("UGJm"),
      c = s("Y58e"),
      u = s("Mgpg"),
      l = s("hI9i"),
      d = s("q1tI"),
      h = s.n(d),
      g = s("Vg22"),
      p = s("ClHk");
    function m() {
      const { data: e } = Object(l.k)(p.a, "all");
      return 0 === e.length
        ? h.a.createElement("div", null, "No Tasks")
        : h.a.createElement(
            "table",
            null,
            h.a.createElement(
              "thead",
              null,
              h.a.createElement(
                "tr",
                null,
                h.a.createElement("th", null, "ID"),
                h.a.createElement("th", null, "Type"),
                h.a.createElement("th", null, "Status"),
                h.a.createElement("th", null, "Process"),
                h.a.createElement("th", null)
              )
            ),
            h.a.createElement(
              "tbody",
              null,
              e.map((e) => h.a.createElement(f, { key: e, id: e }))
            )
          );
    }
    function f(e) {
      const t = Object(l.j)(p.a, e.id);
      return t
        ? h.a.createElement(
            "tr",
            null,
            h.a.createElement("td", null, t.id),
            h.a.createElement("td", null, t.type),
            h.a.createElement("td", null, t.status),
            h.a.createElement("td", null, t.progress),
            h.a.createElement(
              "td",
              null,
              new Date(t.startTime).toLocaleString()
            )
          )
        : null;
    }
    function I() {
      return h.a.createElement(
        g.Provider,
        { store: l.b, context: l.a },
        h.a.createElement(m, null)
      );
    }
    Object(o.injectable)()(
      (n =
        Object(o.singleton)(i.a)(
          (n =
            (function (e, t) {
              return Object(o.inject)(c.a)(e, void 0, 0);
            })(
              (n =
                (function (e, t) {
                  return Object(o.inject)(u.ZLoggerFactory)(e, void 0, 1);
                })(
                  (n =
                    Reflect.metadata(
                      "design:type",
                      Function
                    )(
                      (n =
                        Reflect.metadata("design:paramtypes", [
                          void 0 === c.a ? Object : c.a,
                          void 0 === u.ZLoggerFactory
                            ? Object
                            : u.ZLoggerFactory,
                        ])(
                          (n = class extends a.a {
                            constructor(e, t) {
                              super("zalo", e, t, {
                                component: I,
                                container: document.getElementById("app"),
                              });
                            }
                          })
                        ) || n)
                    ) || n)
                ) || n)
            ) || n)
        ) || n)
    );
    s("KszJ"), s("Hbak"), s("O6t0");
    var b = s("3jnX"),
      y = s("rePB"),
      w = s("qUG6");
    function M(e) {
      return new Promise(async (t, r) => {
        let n = s("EXGp").sqlite3();
        const o = new n.Database(e, n.OPEN_READWRITE | n.OPEN_CREATE, (e) => {
          e ? r(e) : t(o);
        });
      });
    }
    class E {
      constructor(e) {
        (this.path = e),
          Object(y.a)(this, "connection", void 0),
          Object(y.a)(this, "statementCache", {});
      }
      async open() {
        this.connection ||
          ((this.connection = await M(this.path)), await this.prepare());
      }
      async close() {
        var e;
        this.connection &&
          (await Promise.all(
            Object.keys(this.statementCache).map((e) => {
              return (
                (t = this.statementCache[e]),
                new Promise((e, s) => {
                  t.finalize((t) => {
                    t ? s(t) : e();
                  });
                })
              );
              var t;
            })
          ),
          (this.statementCache = {}),
          await ((e = this.connection),
          new Promise((t, s) => {
            e.close((e) => {
              e ? s(e) : t();
            });
          })),
          (this.connection = void 0));
      }
      async getStatement(e) {
        return (
          this.statementCache[e] ||
            (this.statementCache[e] = await (function (e, t) {
              return new Promise((s, r) => {
                const n = e.prepare(t, (e) => {
                  e ? r(e) : s(n);
                });
              });
            })(this.connection, e)),
          this.statementCache[e]
        );
      }
      runQuery(e) {
        return (function (e, t) {
          return new Promise((s, r) => {
            e.run(t, (e) => {
              e ? r(e) : s();
            });
          });
        })(this.connection, e);
      }
      getAllQuery(e) {
        return (function (e, t) {
          return new Promise((s, r) => {
            e.all(t, (e, t) => {
              e ? r(e) : s(t);
            });
          });
        })(this.connection, e);
      }
      getQuery(e) {
        return (function (e, t) {
          return new Promise((s, r) => {
            e.get(t, (e, t) => {
              e ? r(e) : s(t);
            });
          });
        })(this.connection, e);
      }
      async getAllStatementResult(e, t = []) {
        return (function (e, t) {
          return new Promise((s, r) => {
            e.all(t, (e, t) => {
              e ? r(e) : s(t);
            });
          });
        })(await this.getStatement(e), t);
      }
      async getStatementResult(e, t = []) {
        return (function (e, t = []) {
          return new Promise((s, r) => {
            e.get(t, (e, t) => {
              e ? r(e) : s(t);
            });
          });
        })(await this.getStatement(e), t);
      }
      async prepare() {}
    }
    var S,
      v = s("19h1"),
      _ = s("R5gT"),
      T = s("4prX"),
      O = s("KP/S");
    class D extends b.b {
      constructor(e) {
        super({ type: "REQUEST_NOISE_ID", params: e });
      }
    }
    class N extends b.b {
      constructor() {
        super({ type: "REQUEST_ALL_NOISE_ID", params: {} });
      }
    }
    let C =
      Object(o.singleton)()(
        (S =
          Object(o.injectable)()(
            (S = class {
              constructor() {
                Object(y.a)(this, "userId", ""),
                  Object(y.a)(this, "cache", new Map());
              }
              async init(e) {
                this.userId !== e &&
                  ((this.userId = e),
                  (this.cache = new Map()),
                  await this.tryToFetchCachedNoiseId());
              }
              async tryToFetchCachedNoiseId() {
                try {
                  const e = new N(),
                    t = await e.run();
                  t.length > 0 && (this.cache = new Map(t));
                } catch (e) {}
              }
              get(e) {
                if (e) return this.cache.get(e.toString());
              }
              async import(e) {
                return this._getNoiseId(e.uids || [], e.gids || []);
              }
              async _getNoiseId(e, t) {
                const s = e.filter(
                    (e) =>
                      !this.cache.has(e) && Number.parseInt(e).toString() === e
                  ),
                  r = t.filter(
                    (e) =>
                      !this.cache.has(e) && Number.parseInt(e).toString() === e
                  );
                if (s.length !== e.length || r.length !== t.length) {
                  const n = e.length - s.length + t.length - r.length;
                  T.default.increaseFailed(
                    O.e.REQ_NOISE_ID,
                    1,
                    n,
                    O.d.INVALID_NOISE_ID,
                    Date.now()
                  );
                }
                await this._requestNoiseId(s, r);
              }
              _requestNoiseId(e, t) {
                return new Promise((s, r) => {
                  setTimeout(() => {
                    r("_requestNoiseId timeout");
                  }, 1e4);
                  new D({ uids: e, gids: t })
                    .run()
                    .then((e) => {
                      e.forEach(([e, t]) => {
                        this.cache.set(e, t);
                      }),
                        s(!0);
                    })
                    .catch(r);
                });
              }
            })
          ) || S)
      ) || S;
    var A = s("fsN4"),
      R = s("1pet"),
      L = s("z0WU"),
      j = s("/Bne"),
      q = s("1qqm");
    let k = new q.b(q.a);
    var F = s("jIg3"),
      U = s("fqRP"),
      P = s("s2Ee"),
      x = s("PoHQ"),
      G = s("EYv5"),
      B = s("v6qY");
    const Q = { shouldUseNewMediaDBConfig: 0 };
    var $;
    let z =
      Object(o.injectable)()(
        ($ =
          (function (e, t) {
            return Object(o.inject)(u.ZLoggerFactory)(e, void 0, 0);
          })(
            ($ =
              (function (e, t) {
                return Object(o.inject)(U.a)(e, void 0, 1);
              })(
                ($ =
                  Reflect.metadata(
                    "design:type",
                    Function
                  )(
                    ($ =
                      Reflect.metadata("design:paramtypes", [
                        void 0 === u.ZLoggerFactory ? Object : u.ZLoggerFactory,
                        void 0 === U.a ? Object : U.a,
                      ])(
                        ($ = class {
                          constructor(e, t) {
                            Object(y.a)(this, "readyToInsertMsgsQueue", []),
                              Object(y.a)(this, "idStore", void 0),
                              Object(y.a)(this, "coreDB", null),
                              Object(y.a)(this, "resDB", null),
                              Object(y.a)(this, "ttl", void 0),
                              Object(y.a)(this, "logger", void 0),
                              Object(y.a)(this, "checkSum", new Set()),
                              Object(y.a)(this, "checkSum2", new Set()),
                              Object(y.a)(this, "waitForNoiseId", []),
                              Object(y.a)(this, "noiseIdQueue", []),
                              Object(y.a)(this, "waitForGlobalId", []),
                              Object(y.a)(
                                this,
                                "lastInsertedMsgId",
                                Date.now()
                              ),
                              Object(y.a)(this, "uid", ""),
                              (this.idStore =
                                o.ModuleContainer.resolveToken(C)),
                              (this.logger = e.createZLogger("sync-message", [
                                "msg-cross-importer",
                              ])),
                              (this.ttl = t);
                          }
                          async open(e, t) {
                            await this.close(),
                              (this.uid = e),
                              x.p.setSessionUserId(e),
                              o.ModuleContainer.resolve(F.b).authenticate({
                                userId: e,
                                UIN: t,
                              }),
                              (this.checkSum = new Set()),
                              (this.checkSum2 = new Set());
                            const s = A.a.getInstance();
                            (this.coreDB = s.Core),
                              (this.resDB = s.Res),
                              (this.waitForGlobalId = []);
                          }
                          close() {
                            this.coreDB && (this.coreDB = null),
                              this.resDB && (this.resDB = null);
                          }
                          queueNewMessages(e) {
                            let t = this.verifyCrossMsg(e);
                            (this.readyToInsertMsgsQueue =
                              this.readyToInsertMsgsQueue.concat(
                                t.readyToInsert
                              )),
                              (this.waitForNoiseId = this.waitForNoiseId.concat(
                                t.waitForNoiseId
                              )),
                              (this.noiseIdQueue = this.noiseIdQueue.concat(
                                t.idsToGetNoise
                              ));
                          }
                          resetLastGlobalMsgId() {
                            this.lastInsertedMsgId = Date.now();
                          }
                          async processImportQueue(e) {
                            if (
                              ((e ||
                                this.shouldProcessMsgsInWaitForNoiseQueue()) &&
                                (await this.processWaitForNoiseIdQueue()),
                              ((e &&
                                0 === this.readyToInsertMsgsQueue.length) ||
                                this.waitForGlobalId.length > 99) &&
                                this.waitForGlobalId.length > 0)
                            ) {
                              const e = [];
                              this.processWaitForGlobalIdQueue(e),
                                e.length > 0 &&
                                  (this.queueNewMessages(e),
                                  await this.processWaitForNoiseIdQueue());
                            }
                            if (this.readyToInsertMsgsQueue.length) {
                              const e = this.readyToInsertMsgsQueue.splice(
                                0,
                                100
                              );
                              let s = Math.min(...e.map((e) => e.sequenseId));
                              s = Math.max(
                                s,
                                this.waitForGlobalId.length
                                  ? this.waitForGlobalId[0].sequenseId
                                  : 0,
                                this.waitForNoiseId.length
                                  ? this.waitForNoiseId[0].sequenseId
                                  : 0
                              );
                              try {
                                const t = [];
                                this.crossMsgsToNormalMsgs(e, t);
                                return {
                                  inserted: (await this.insertToDb(t)).success,
                                  minSeqId: s,
                                  queued: e,
                                  validMsgCount: t.length,
                                  hasMore:
                                    this.waitForNoiseId.length > 0 ||
                                    this.waitForGlobalId.length > 0,
                                };
                              } catch (t) {
                                this.logger.zsymb(18, 11542, 3e4, () => [
                                  "processImportQueue error",
                                  { error: t },
                                ]);
                              }
                              return {
                                inserted: [],
                                minSeqId: s,
                                queued: e,
                                validMsgCount: e.length,
                                hasMore:
                                  this.waitForNoiseId.length > 0 ||
                                  this.waitForGlobalId.length > 0,
                              };
                            }
                            return {
                              inserted: [],
                              minSeqId: -1,
                              queued: [],
                              validMsgCount: 0,
                              hasMore:
                                this.waitForNoiseId.length > 0 ||
                                this.waitForGlobalId.length > 0,
                            };
                          }
                          printChecksum() {
                            this.logger.zsymb(12, 11542, 30001, () => [
                              "size",
                              {
                                waitNoise: this.waitForNoiseId,
                                waitGlobal: this.waitForGlobalId,
                                ready: this.readyToInsertMsgsQueue,
                              },
                            ]),
                              this.checkSum.size > 0
                                ? this.logger.zsymb(18, 11542, 30002, () => [
                                    "checkSum.size > 0",
                                    { miss: this.checkSum.values() },
                                  ])
                                : this.logger.zsymb(
                                    3,
                                    11542,
                                    30003,
                                    "checkSum.size == 0"
                                  );
                          }
                          processWaitForGlobalIdQueue(e) {
                            const t = this.waitForGlobalId;
                            (this.waitForGlobalId = []),
                              (this.lastInsertedMsgId = t[0].cliMsgId);
                            for (let s = t.length - 1; s >= 0; s--) {
                              const r = t[s];
                              (r.globalMsgId = `${this.lastInsertedMsgId}_${s
                                .toString()
                                .padStart(3, "0")}`),
                                e.push(r);
                            }
                          }
                          async insertMsgs(e) {
                            e = e.filter((e) => !!e.globalMsgId);
                            let t = this.verifyCrossMsg(e).idsToGetNoise;
                            t.length &&
                              (await this.idStore.import({ uids: t }));
                            let s = [];
                            return (
                              this.crossMsgsToNormalMsgs(e, s),
                              this.insertToDb(s)
                            );
                          }
                          async processWaitForNoiseIdQueue() {
                            if (0 === this.noiseIdQueue.length) return;
                            const e = this.noiseIdQueue,
                              t = this.waitForNoiseId;
                            (this.waitForNoiseId = []),
                              (this.noiseIdQueue = []),
                              await this.idStore.import({ uids: e }),
                              this.readyToInsertMsgsQueue.push(...t);
                          }
                          shouldProcessMsgsInWaitForNoiseQueue() {
                            return (
                              this.noiseIdQueue.length >= 1e3 ||
                              this.waitForNoiseId.length > 150
                            );
                          }
                          crossMsgsToNormalMsgs(e, t) {
                            for (let r = 0; r < e.length; r++) {
                              const n = e[r];
                              try {
                                if (
                                  "number" == typeof n.globalMsgId &&
                                  n.globalMsgId > 0 &&
                                  ((this.lastInsertedMsgId = n.globalMsgId),
                                  this.waitForGlobalId.length > 0)
                                ) {
                                  const e = this.waitForGlobalId;
                                  this.waitForGlobalId = [];
                                  for (let s = e.length - 1; s >= 0; s--) {
                                    const r = e[s];
                                    (r.globalMsgId = `${n.globalMsgId}_${s
                                      .toString()
                                      .padStart(3, "0")}`),
                                      this.crossMsgToNormalMsg(r, t);
                                  }
                                }
                                this.crossMsgToNormalMsg(n, t);
                              } catch (s) {}
                            }
                          }
                          crossMsgToNormalMsg(e, t) {
                            if (!e.globalMsgId)
                              return void this.waitForGlobalId.push(e);
                            const s =
                              e.parsedType ||
                              L.default.normalizeMessageType(e.type);
                            if (s === R.MSG_UNKNOWN) return void 0;
                            let r = e.parsedIdTo || this.idStore.get(e.ownerId),
                              n =
                                e.parsedUidFrom || e.fromId == e.userId
                                  ? "0"
                                  : this.idStore.get(e.fromId);
                            if (!n || !r) return void 0;
                            let o = e.msg,
                              i = e.attachData;
                            switch (
                              (i.mentions &&
                                Array.isArray(i.mentions) &&
                                i.mentions.forEach((e) => {
                                  e.uid =
                                    "-1" === e.uid
                                      ? "-1"
                                      : this.idStore.get(e.uid);
                                }),
                              i.quote &&
                                (i.quote.ownerId = this.idStore.get(
                                  i.quote.ownerId
                                )),
                              s)
                            ) {
                              case R.MSG_TEXT:
                                i &&
                                  i.attach &&
                                  i.attach.action &&
                                  "rtf" == i.attach.action &&
                                  (i.attach.title || (i.attach.title = e.msg),
                                  (o = i.attach));
                                break;
                              case R.MSG_PHOTO:
                                (o = i.attach || {}),
                                  (o.childnumber = u(o.childnumber, 0)),
                                  (o.action = u(o.action)),
                                  (o.description = u(o.description)),
                                  (o.title = u(o.title)),
                                  (o.type = u(o.type));
                                break;
                              case R.MSG_STICKER:
                                o = i.attach || {};
                                break;
                              case R.MSG_GIF:
                                (o = i.attach || {}),
                                  (o.childnumber = u(o.childnumber, 0)),
                                  (o.action = u(o.action)),
                                  (o.description = u(o.description)),
                                  (o.title = u(o.title)),
                                  (o.type = u(o.type));
                                break;
                              case R.MSG_VOICE:
                                (o = i.attach || {}),
                                  (o.childnumber = u(o.childnumber, 0)),
                                  (o.action = u(o.action)),
                                  (o.description = u(o.description)),
                                  (o.params = u(o.params)),
                                  (o.thumb = u(o.thumb)),
                                  (o.title = u(o.title)),
                                  (o.type = u(o.type));
                                break;
                              case R.MSG_VIDEO:
                                (o = i.attach || {}),
                                  (o.childnumber = u(o.childnumber, 0)),
                                  (o.action = u(o.action)),
                                  (o.description = u(o.description)),
                                  (o.type = u(o.type));
                                break;
                              case R.MSG_LOCATION:
                                (o = i.attach || {}),
                                  (o.childnumber = u(o.childnumber, 0)),
                                  (o.action = u(o.action)),
                                  (o.href = u(o.href)),
                                  (o.thumb = u(o.thumb)),
                                  (o.type = u(o.type));
                                break;
                              case R.MSG_DOODLE:
                                (o = i.attach || {}),
                                  (o.childnumber = u(o.childnumber, 0)),
                                  (o.action = u(o.action)),
                                  (o.description = u(o.description)),
                                  (o.thumb = u(o.thumb)),
                                  (o.title = u(o.title));
                                break;
                              case R.MSG_CONTACT:
                                (o = i.attach || {}),
                                  (o.description = u(o.description)),
                                  (o.thumb = u(o.thumb));
                                const t = o.action;
                                ("recommened.user" !== t &&
                                  "recommened.vip" !== t) ||
                                  (o.params = this.idStore.get(o.params));
                                break;
                              case R.MSG_FILE:
                                (o = i.attach || {}),
                                  (o.childnumber = u(o.childnumber, 0)),
                                  (o.action = u(o.action)),
                                  (o.description = u(o.description)),
                                  (o.thumb = u(o.thumb)),
                                  (o.type = u(o.type));
                                break;
                              case R.MSG_UNDO:
                                o = "";
                                break;
                              case R.MSG_OA:
                              case R.MSG_ECARD:
                              case R.MSG_POLL:
                                o = i.attach;
                            }
                            let a = null;
                            if ("chat.undo" == e.type && e.attach)
                              try {
                                if (i.attach && i.attach.params) {
                                  let t = JSON.parse(
                                    i.attach.params
                                  ).custom_message;
                                  if (t) {
                                    t = JSON.parse(t);
                                    const s = t.highLightsV2;
                                    s.length &&
                                      ((a = s[0] && s[0].uid),
                                      (a = this.idStore.get(a)),
                                      (a = a == this.uid ? "0" : a),
                                      (e.type = "chat.delete.everyone"));
                                  }
                                }
                              } catch (l) {
                                this.logger.zsymb(18, 11542, 30006, () => [
                                  "parseParams error:",
                                  { error: l },
                                ]);
                              }
                            const c = j.a.transformMessageFromServer(
                              {
                                actionId: -1,
                                msgId: e.globalMsgId,
                                zglobalMsgId: -1,
                                cliMsgId: e.cliMsgId,
                                msgType: e.type,
                                status: "0" == n ? R.MSG_DELIVERED : R.MSG_READ,
                                notify: "1",
                                mentions: i.mentions,
                                quote: i.quote,
                                content: o,
                                ts: e.ts.toString(),
                                uidFrom: n,
                                dName: e.fromName,
                                propertyExt: i.property,
                                ttl: e.ttl,
                              },
                              r
                            );
                            function u(e, t = "") {
                              return e instanceof Object &&
                                Object.keys(e).length
                                ? t
                                : e || t;
                            }
                            (c.localDttm = Date.now()),
                              (c.src = R.MSG_SRC.SYNC_MOBILE_DB),
                              (c.sequenceId = e.sequenseId),
                              (c.uidSenderDel = a),
                              c.msgType !== R.MSG_UNKNOWN
                                ? t.push(c)
                                : this.logger.zsymb(0, 11542, 30007, () => [
                                    "skip message: unknown type",
                                    { id: c.cliMsgId, type: e.type },
                                  ]);
                          }
                          verifyCrossMsg(e) {
                            const t = [],
                              s = [],
                              r = new Set();
                            for (let a = 0; a < e.length; a++) {
                              var n, o;
                              const c = e[a];
                              if (!c) continue;
                              let u = !1;
                              const l = (e) => {
                                e &&
                                  "-1" !== (e = e.toString()) &&
                                  (this.idStore.get(e) ||
                                    (u || ((u = !0), t.push(c)), r.add(e)));
                              };
                              if ((l(c.ownerId), l(c.fromId), !c.attachData)) {
                                let e = {};
                                if (c.attach)
                                  try {
                                    e = JSON.parse(c.attach);
                                  } catch (i) {}
                                c.attachData = e;
                              }
                              const d = c.attachData,
                                h =
                                  null === (n = d.attach) || void 0 === n
                                    ? void 0
                                    : n.action;
                              ("recommened.user" !== h &&
                                "recommened.vip" !== h) ||
                                null === (o = d.attach) ||
                                void 0 === o ||
                                !o.params ||
                                l(d.attach.params),
                                d.mentions &&
                                  Array.isArray(d.mentions) &&
                                  d.mentions.forEach((e) => {
                                    l(e.uid);
                                  }),
                                d.quote && l(d.quote.ownerId),
                                u || s.push(c);
                            }
                            return {
                              waitForNoiseId: t,
                              readyToInsert: s,
                              idsToGetNoise: Array.from(r),
                            };
                          }
                          async insertToDb(e) {
                            e = await this._filterDeletedMessages(e);
                            const t = await this._insertMessage(e);
                            return (
                              await this._insertMedia(t.success),
                              await this._insertFilesToResDB(t.success),
                              await this._insertTTL(t.success),
                              this._sendMediaMsgToMain(t.success),
                              t
                            );
                          }
                          _insertMedia(e) {
                            const t = `${B.c.TRANSFER_MOBILE}${B.d.FROM_MSG}`;
                            return o.ModuleContainer.resolve(
                              G.a
                            ).addMediasWhenTransferMessage(
                              e,
                              t,
                              Q.shouldUseNewMediaDBConfig
                            );
                          }
                          _insertFilesToResDB(e) {
                            const t = e.reduce(
                              (e, t) => (
                                t.msgType === R.MSG_FILE &&
                                  e.push({
                                    msgId: t.msgId,
                                    userId: t.toUid,
                                    message: t.message,
                                    sendDttm: t.sendDttm,
                                    fromUid: t.fromUid,
                                    type: "file",
                                    cliMsgId: t.cliMsgId,
                                  }),
                                e
                              ),
                              []
                            );
                            return (async (e, t) => {
                              try {
                                let s = [],
                                  r = [];
                                for (let e of t) {
                                  const {
                                    res: t,
                                    ref: n,
                                    error: o,
                                  } = k.toDb(e);
                                  o || (s.push(t), r.push(n));
                                }
                                s.length > 0 && (await e.Res.insertMulti(s)),
                                  r.length > 0 && (await e.Ref.insertMulti(r));
                              } catch {}
                            })(this.resDB, t);
                          }
                          async _insertTTL(e) {
                            this.logger.zsymb(
                              15,
                              11542,
                              30008,
                              "ttl start insert"
                            ),
                              this.logger.zsymb(
                                15,
                                11542,
                                30009,
                                "ttl ids: {}",
                                e.map((e) => e.msgId)
                              );
                            const t = e.filter((e) => e.ttl && e.ttl > 0);
                            this.logger.zsymb(
                              15,
                              11542,
                              30010,
                              "ttl ttlMessages: {}",
                              t.length
                            );
                            const s = P.b
                              .createFromUid(this.uid)
                              .deriveTTLItems(t);
                            if (t.length <= 0) return;
                            const r = await this.ttl.putMsgs(s);
                            r.ok
                              ? this.logger.zsymb(
                                  3,
                                  11542,
                                  30011,
                                  "ttl insert success"
                                )
                              : (this.logger.zsymb(
                                  21,
                                  11542,
                                  30012,
                                  "ttl insert fail"
                                ),
                                this.logger.zsymb(
                                  3,
                                  11542,
                                  30013,
                                  "ttl invalid {}, error {}",
                                  r.error.invalidItems.length,
                                  r.error.errorItems.length
                                ));
                          }
                          async _insertMessage(e) {
                            const t = await this._filterExistsMessages(e);
                            return this.coreDB.Message.insertMulti(t, {
                              replace: !0,
                            });
                          }
                          async _filterExistsMessages(e) {
                            if (!e || !e.length) return [];
                            const t = await this.coreDB.Message.getMulti(
                                e.map((e) => e.msgId)
                              ),
                              s = new Set(t.map((e) => e && e.msgId));
                            return e.filter((e) => !s.has(e.msgId));
                          }
                          _sendMediaMsgToMain(e) {
                            if (!L.default.isWeb()) {
                              const { ipcRenderer: t } = s("NLsH"),
                                r = e.filter((e) => this._isMediaMsg(e));
                              Array.isArray(r) &&
                                r.length > 0 &&
                                t.send("transfer-msg-from-shared-worker", r);
                            }
                          }
                          _isMediaMsg(e) {
                            const t = e.msgType;
                            return [
                              R.MSG_PHOTO,
                              R.MSG_PHOTO_2,
                              R.MSG_FILE,
                              R.MSG_VOICE,
                              R.MSG_VIDEO,
                            ].some((e) => t == e);
                          }
                          async _filterDeletedMessages(e) {
                            let t = {},
                              s = [];
                            for (let o = 0; o < e.length; o++) {
                              const r = e[o];
                              r.msgType == R.MSG_UNDO
                                ? s.push(r)
                                : (t[r.toUid] || (t[r.toUid] = []),
                                  t[r.toUid].push(r));
                            }
                            await this._sendUndo(s);
                            let r = Object.keys(t);
                            const n = [];
                            for (let o = 0; o < r.length; o++) {
                              const e = r[o];
                              n.push(...t[e]);
                            }
                            return n;
                          }
                          async _sendUndo(e) {}
                        })
                      ) || $)
                  ) || $)
              ) || $)
          ) || $)
      ) || $;
    class V {
      constructor(e) {
        Object(y.a)(this, "noiseIdStore", void 0),
          Object(y.a)(this, "importer", void 0),
          Object(y.a)(this, "session", null),
          Object(y.a)(this, "logger", void 0),
          Object(y.a)(this, "_searchIndexQueue", null),
          (this.noiseIdStore = o.ModuleContainer.resolveToken(C)),
          (this.importer = o.ModuleContainer.resolveToken(z));
        const t = o.ModuleContainer.resolve(u.ZLoggerFactory);
        this.logger = t.createZLogger("msg-sync", ["importer", e]);
      }
      async restoreConversations(e) {
        const t = e.params.noiseUserId,
          s = e.params.password,
          r = this.doRestoreConversations.bind(this, e);
        return this.usingDatabase(t, s, r);
      }
      async restoreMessages(e) {
        const t = e.params.noiseUserId,
          s = e.params.password,
          r = this.doRestoreMessages.bind(this, e);
        return this.usingDatabase(t, s, r);
      }
      async usingDatabase(e, t, s) {
        let r, n;
        await this.noiseIdStore.init(e), await this.open(e, t);
        try {
          r = await s();
        } catch (o) {
          n = o;
        }
        if ((await this.close(), n)) throw n;
        return r;
      }
      async open(e, t) {
        await this.importer.close(),
          (this.session = { userId: e, UIN: t }),
          await this.importer.open(e, t);
      }
      async close() {
        await this.importer.close();
      }
      indexSearch(e, t) {
        return t.queueIndexSearch
          ? this.searchIndexQueue.push(e)
          : _.a.executeMessageDbData(e);
      }
      get searchIndexQueue() {
        var e, t, s, r;
        this._searchIndexQueue ||
          (null !== (e = this.session) &&
            void 0 !== e &&
            e.userId &&
            null !== (t = this.session) &&
            void 0 !== t &&
            t.UIN &&
            o.ModuleContainer.resolve(F.b).authenticate({
              userId:
                null === (s = this.session) || void 0 === s ? void 0 : s.userId,
              UIN: null === (r = this.session) || void 0 === r ? void 0 : r.UIN,
            }),
          (this._searchIndexQueue = new v.a()));
        return this._searchIndexQueue;
      }
    }
    class W extends V {
      constructor() {
        super("format-0"),
          Object(y.a)(this, "_backup", null),
          Object(y.a)(this, "_Logger", void 0);
      }
      get Logger() {
        return (
          this._Logger ||
            (this._Logger = o.ModuleContainer.resolve(
              u.ZLoggerFactory
            ).createZLogger("sync-msg", ["import-format1"])),
          this._Logger
        );
      }
      async doRestoreConversations(e) {
        const { params: t, abort: s } = e,
          r = await this.getBackup(t.backupPath),
          n = await r.getAllConversations(),
          o = await r.getRespondedConversations(),
          i = new Set(o.map((e) => e.ownerId)),
          a = [],
          c = [];
        if (
          (n.forEach((e) => {
            1 === e.ownerType ? a.push(e.ownerId) : c.push(e.ownerId);
          }),
          await this.noiseIdStore.import({ gids: a, uids: c }),
          s.aborted)
        )
          throw new Error("aborted");
        const u = await r.getLastMsgForEachConversations();
        if (s.aborted) throw new Error("aborted");
        let l = await this.importer.insertMsgs(u);
        const d = {},
          h = [],
          g = [];
        return (
          n.forEach((e) => {
            const t = this.noiseIdStore.get(e.ownerId);
            if (t) {
              const s = 1 === e.ownerType,
                r = {
                  plainId: e.ownerId,
                  noisedId: t,
                  isGroup: s,
                  respondedByMe: i.has(e.ownerId),
                  backupPath: "",
                };
              h.push(r), (d[t] = r);
            } else g.push(e.ownerId);
          }),
          l.success.forEach((e) => {
            d[e.toUid] && (d[e.toUid].lastMessage = e);
          }),
          l.fail.forEach((e) => {
            d[e.toUid] && (d[e.toUid].lastMessage = e);
          }),
          h
        );
      }
      async doRestoreMessages(e) {
        const { params: t, checkpoint: s, abort: r, report: n } = e;
        if (!s || 0 !== s.format) throw new Error("invalid checkpoint");
        const o = new Map(
            t.conversations
              .filter((e) => !e.hasPreviewMsg)
              .map((e) => [e.noiseId, void 0])
          ),
          i = t.conversations
            .filter((e) => e.shouldIgnore)
            .map((e) => e.plainId);
        let a = s.currentSeq,
          c = s.maxSeq,
          u = s.minSeq,
          l = s.syncedConversations,
          d = 0,
          h = s.syncedMessages || 0;
        const g = await this.getBackup(t.backupPath),
          p = await g.countMessageFrom(u, i);
        let m = await g.countMessageFrom(a, i),
          f = p,
          I = !1;
        for (;;) {
          if (r.aborted) return;
          let e = await g.getMessages(a, u, i, 100);
          if (0 === e.length) f = 0;
          else {
            e[0].sequenseId > c && (c = e[0].sequenseId);
            for (let t = e.length - 1; t >= 0; t--) {
              const s = e[t].sequenseId;
              if (s < a) {
                a = s;
                break;
              }
            }
            this.importer.queueNewMessages(e), (f -= e.length);
          }
          let s = await this.importer.processImportQueue(I);
          if (0 === s.queued.length) {
            if (s.hasMore) {
              I = !0;
              continue;
            }
          } else I = !1;
          if (0 === s.queued.length && 0 === f) {
            (0 === u || u > a) && (u = a);
            return void n(100, {
              format: 0,
              minSeq: u,
              maxSeq: c,
              currentSeq: a,
              syncedMessages: h,
              syncedConversations: l,
            });
          }
          let b = new Map();
          for (let t = 0; t < s.inserted.length; t++) {
            const e = s.inserted[t];
            if (o.has(e.toUid)) {
              const t = o.get(e.toUid);
              (!t || t < e.sequenceId) &&
                (b.set(e.toUid, e), o.set(e.toUid, e.sequenceId));
            }
          }
          if (b.size > 0) {
            h += b.size;
            const e = new w.a(Array.from(b.values()));
            await e.run();
          }
          m += s.validMsgCount;
          const y = m / p,
            M = Math.round(95 * y);
          M !== d &&
            ((d = M),
            s.minSeqId > 0 &&
              (this.Logger.zsymb(
                3,
                8438,
                30001,
                "checkpoint: {} {}/{} ({}%)",
                s.minSeqId,
                m,
                p,
                M
              ),
              n(M, {
                format: 0,
                minSeq: u,
                maxSeq: c,
                currentSeq: a,
                syncedMessages: h,
                syncedConversations: l,
              }))),
            await this.indexSearch(s.inserted, {
              queueIndexSearch: t.meta.queueIndexSearch,
            }),
            await new Promise((e) => setTimeout(e, 50));
        }
      }
      async close() {
        return this._backup && (await this._backup.close()), super.close();
      }
      async getBackup(e) {
        return (
          this._backup ||
            ((this._backup = new H(e)), await this._backup.open()),
          this._backup
        );
      }
    }
    class H extends E {
      async prepare() {
        await this.runQuery(Y), await this.runQuery(X);
      }
      async getLastMsgForEachConversations() {
        return this.getAllStatementResult(Z);
      }
      async getAllConversations() {
        return (await this.getAllQuery(te)).filter((e) =>
          /^\d+$/.test(e.ownerId)
        );
      }
      async getRespondedConversations() {
        return this.getAllQuery(se);
      }
      async getMessages(e, t, s, r) {
        return this.getAllStatementResult(J, [e, t, s.join(","), r]);
      }
      async countMessageFrom(e, t) {
        const s = await this.getStatementResult(ee, [e, t.join(",")]);
        return s ? s.count : 0;
      }
    }
    const K =
        'type != "chat.webcontent" AND type != "chat.livelocation" AND type != "chat.video.live.msg"',
      Y =
        'CREATE INDEX IF NOT EXISTS "sequenseId" ON "chats" ("sequenseId" DESC)',
      X = 'CREATE INDEX IF NOT EXISTS "ts" ON "chats" ("ts" DESC)',
      Z = `SELECT chats.* FROM chats INNER JOIN (SELECT ownerId, MAX(ts) as maxTs from chats WHERE ${K} GROUP BY ownerId) AS latest ON chats.ts = latest.maxTs ORDER BY chats.ts DESC`,
      J = `SELECT * FROM chats WHERE sequenseId < (?) AND sequenseId > (?) AND cliMsgId NOT NULL AND ownerId NOT IN (?) AND ${K} ORDER BY sequenseId DESC LIMIT (?)`,
      ee = `SELECT count(*) as count FROM chats WHERE sequenseId > (?) AND cliMsgId NOT NULL AND ownerId NOT IN (?) AND ${K} ORDER BY sequenseId DESC`,
      te = "SELECT ownerId, ownerType, ts  FROM threads",
      se = "SELECT DISTINCT ownerId from chats WHERE userId = fromId";
    var re = s("EXGp"),
      ne = s.n(re),
      oe = s("oyvS"),
      ie = s.n(oe),
      ae = s("nhJq");
    class ce extends b.b {
      constructor(e) {
        super({ type: "RELOAD_MESSAGE", params: e });
      }
    }
    let ue;
    !(function (e) {
      (e[(e.Text = 0)] = "Text"),
        (e[(e.Doodle = 2)] = "Doodle"),
        (e[(e.Photo = 3)] = "Photo"),
        (e[(e.Photo_V2 = 4)] = "Photo_V2"),
        (e[(e.Voice = 6)] = "Voice"),
        (e[(e.Sticker = 10)] = "Sticker"),
        (e[(e.Contact = 12)] = "Contact"),
        (e[(e.OA = 15)] = "OA"),
        (e[(e.Location = 18)] = "Location"),
        (e[(e.Video = 19)] = "Video"),
        (e[(e.ECard = 21)] = "ECard"),
        (e[(e.File = 22)] = "File"),
        (e[(e.Gift = 23)] = "Gift"),
        (e[(e.Webcontent = 24)] = "Webcontent"),
        (e[(e.VideoLive = 25)] = "VideoLive"),
        (e[(e.PhotoV2 = 31)] = "PhotoV2"),
        (e[(e.ChatDelete = 33)] = "ChatDelete"),
        (e[(e.Undo = 36)] = "Undo");
    })(ue || (ue = {}));
    const le = {
      0: "webchat",
      2: "chat.doodle",
      3: "chat.photo",
      4: "chat.photo",
      6: "chat.voice",
      10: "chat.sticker",
      12: "chat.recommended",
      15: "chat.list.action",
      18: "chat.location.new",
      19: "chat.video.msg",
      20: "webchat",
      22: "share.file",
      23: "chat.gif",
      24: "chat.webcontent",
      25: "chat.video.live.msg",
      26: "group.poll",
      31: "chat.photo",
      33: "chat.delete",
      36: "chat.undo",
    };
    class de extends b.b {
      constructor(e) {
        super({ type: "RELOAD_MEDIA", params: e });
      }
    }
    const he = ne.a.dbUtils();
    class ge extends V {
      constructor() {
        super("format-1"), Object(y.a)(this, "_backup", null);
      }
      async doRestoreConversations(e) {
        const { params: t, abort: s } = e,
          r = await this._getBackup(t.backupPath, t.plainUserId, t.noiseUserId);
        let n = await r.getAllConversations();
        const o = [],
          i = [];
        if (
          (n.forEach((e) => {
            1 === e.ownerType ? o.push(e.ownerId) : i.push(e.ownerId);
          }),
          await this.noiseIdStore.import({ gids: o, uids: i }),
          s.aborted)
        )
          throw new Error("aborted");
        const a = await r.getMetaDataConversations(n),
          c = r.getRespondedByMeSet();
        if (s.aborted) throw new Error("aborted");
        n = n.filter((e) => a[e.ownerId] && a[e.ownerId].numOfMsg > 0);
        const u = n.map((e) => a[e.ownerId].msg),
          l = await this.importer.insertMsgs(u),
          d = {},
          h = [],
          g = [];
        return (
          n.forEach((e) => {
            const t = this.noiseIdStore.get(e.ownerId);
            if (t) {
              const s = 1 === e.ownerType,
                r = {
                  plainId: e.ownerId,
                  noisedId: t,
                  isGroup: s,
                  respondedByMe: c.has(e.ownerId),
                };
              h.push(r), (d[t] = r);
            } else g.push(e.ownerId);
          }),
          l.success.forEach((e) => {
            d[e.toUid] && (d[e.toUid].lastMessage = e);
          }),
          l.fail.forEach((e) => {
            d[e.toUid] && (d[e.toUid].lastMessage = e);
          }),
          h
        );
      }
      async doRestoreMessages(e) {
        const { params: t, checkpoint: s, abort: r, report: n } = e;
        if (!s || 1 !== s.format) throw new Error("invalid checkpoint");
        let o = t.conversations.filter((e) => !e.shouldIgnore),
          i = t.meta.viewingConversation;
        const a = () => {
          if (i) {
            const t = ((e = i), o.find((t) => t.noiseId === e));
            if (t) return t;
          }
          var e;
          return null;
        };
        let c,
          u = s.priorities;
        function l() {
          if (u.length > 0) {
            let e = u[0];
            const t = a();
            return t ? ((i = null), t) : o.find((t) => t.plainId === e);
          }
          return o[0];
        }
        function d(e) {
          return (
            (u = u.filter((t) => t !== e.plainId)),
            (o = o.filter((t) => t.noiseId !== e.noiseId)),
            u
          );
        }
        e.onParamsChange((e) => {
          e &&
            e.meta &&
            e.meta.viewingConversation &&
            (this.logger.zsymb(
              12,
              11131,
              3e4,
              `viewing conversation changed to ${e.meta.viewingConversation}`
            ),
            (i = e.meta.viewingConversation));
        });
        const h = await this._getBackup(
          t.backupPath,
          t.plainUserId,
          t.noiseUserId
        );
        function g(e) {
          return Math.floor((e / t.meta.numberOfMessages) * 95);
        }
        let p = g(s.syncedMessages);
        do {
          if (((c = l()), c)) {
            let e = g(s.syncedMessages),
              o = !1;
            (s.syncingConversation = c.noiseId), n(e, s);
            const i = { ownerId: c.plainId, ownerType: c.isGroup ? 1 : 0 };
            this.logger.zsymb(
              0,
              11131,
              30001,
              `restoring ${c.plainId}, ${c.noiseId}`
            );
            try {
              o = await this.restoreMessagesOfConversation(
                i,
                s,
                h,
                t.meta.queueIndexSearch,
                !c.hasPreviewMsg,
                r,
                () => {
                  const e = g(s.syncedMessages);
                  p !== e && ((p = e), n(e, s));
                }
              );
            } catch (m) {
              this.logger.zsymb(18, 11131, 30002, () => [
                `restore error: ${c.plainId}`,
                { error: m.message || m },
              ]);
            }
            if (((s.priorities = d(c)), o)) {
              s.updatedConversation++;
              new ce({ convId: c.noiseId, fromTs: 0, toTs: 0 }).run();
              new de({ convId: c.noiseId, abc: "abc" }).run();
            }
            (e = g(s.syncedMessages)), n(e, s);
          } else if (u.length > o.length) {
            this.logger.zsymb(
              0,
              11131,
              30003,
              "detect invalid priority conv " + (o.length - u.length)
            );
            const e = new Set(o.map((e) => e.plainId)),
              t = [];
            for (let s = 0; s < u.length; s++) e.has(u[s]) && t.push(u[s]);
            (u = t), (s.priorities = t);
          }
        } while (u.length > 0 && !r.aborted);
        (s.syncedConversations = t.meta.numberOfConversations), n(100, s);
      }
      async restoreMessagesOfConversation(e, t, s, r, n, o, i) {
        if (!t || 1 !== t.format) throw new Error("invalid checkpoint");
        let a = t.maxSeq,
          c = !1,
          u = 0,
          l = t.currentSeq[e.ownerId] || Number.MAX_SAFE_INTEGER,
          d = !1,
          h = await s.getRemainingMessages(e, l);
        for (this.importer.resetLastGlobalMsgId(); ; ) {
          if (o.aborted) return d;
          if (h > 0) {
            let r = await s.getMessages(e, l, t.minSeq, u, 500);
            if (0 === r.length) h = 0;
            else {
              (u = r[r.length - 1].cliMsgId),
                (0 === a || r[0].ts > a) && (a = r[0].ts);
              for (let e = r.length - 1; e >= 0; e--) {
                const t = r[e].ts;
                if (t < l) {
                  l = t;
                  break;
                }
              }
              (t.currentSeq[e.ownerId] = l),
                this.importer.queueNewMessages(r),
                (h -= r.length);
            }
          }
          let g = await this.importer.processImportQueue(c);
          if (0 === g.queued.length) {
            if (g.hasMore) {
              c = !0;
              continue;
            }
          } else c = !1;
          if (
            ((t.syncedMessages += g.validMsgCount),
            (t.importedMessages += g.inserted.length),
            (d = d || g.inserted.length > 0),
            0 === g.queued.length && h <= 0)
          ) {
            delete t.currentSeq[e.ownerId],
              0 === t.maxSeq
                ? (t.maxSeq = a)
                : (t.maxSeq = Math.max(t.maxSeq, a));
            let r = await s.getFirstMessageTimeStamp(e);
            return (
              0 === t.minSeq
                ? (t.minSeq = r)
                : (t.minSeq = Math.min(t.minSeq, r)),
              d
            );
          }
          if (n && g.inserted.length > 0) {
            let e = g.inserted[0];
            for (let s = 1; s < g.inserted.length; s++) {
              const t = g.inserted[s];
              t.sendDttm > e.sendDttm && (e = t);
            }
            const t = new w.a([e]);
            await t.run(), (n = !1);
          }
          await this.indexSearch(g.inserted, { queueIndexSearch: r }),
            i(),
            await new Promise((e) => setTimeout(e, 10));
        }
      }
      async close() {
        return this._backup && (await this._backup.close()), super.close();
      }
      async _getBackup(e, t, s) {
        return (
          this._backup ||
            ((this._backup = new pe(e, t, s, this.logger)),
            await this._backup.open()),
          this._backup
        );
      }
    }
    class pe {
      constructor(e, t, s, r) {
        (this.path = e),
          (this.plainUserId = t),
          (this.noiseUserId = s),
          (this.logger = r),
          Object(y.a)(this, "_currentBackup", null),
          Object(y.a)(this, "_responsedByMe", new Set());
      }
      async open() {}
      async close() {
        this._currentBackup &&
          (await this._currentBackup.close(), (this._currentBackup = null));
      }
      async getFirstMessageTimeStamp(e) {
        const t = await this._getBackupOfConversation(e);
        return t ? t.getFirstMessageTimeStamp() : 0;
      }
      async getRemainingMessages(e, t) {
        const s = await this._getBackupOfConversation(e);
        return s ? s.countMessages(t) : 0;
      }
      async getMessages(e, t, s, r, n) {
        const o = await this._getBackupOfConversation(e);
        return o ? o.getMessages(t, s, r, n, e.ownerId) : [];
      }
      async getAllConversations() {
        const e = [],
          t = await ae.c(this.path);
        for (const s of t)
          if (s.endsWith(".db")) {
            const t = "g" === s[0] ? 1 : 0,
              r = t ? 6 : 0,
              n = s.length - 3,
              o = s.substring(r, n);
            e.push({ ownerId: o, ownerType: t });
          }
        return e;
      }
      async getMetaDataConversations(e) {
        const t = {},
          s = Date.now();
        for (const n of e) {
          const e = await this._getBackupOfConversation(n);
          if (e)
            try {
              const r = await e.getMessages(s, 1, 0, 1, n.ownerId),
                o = await e.countMessages(s);
              if (r.length > 0) {
                t[n.ownerId] = { msg: r[0], numOfMsg: o };
                (await e.hasResponsedByUser(this.plainUserId)) &&
                  this._responsedByMe.add(n.ownerId);
              }
            } catch (r) {
              if (
                (this.logger.zsymb(
                  18,
                  11131,
                  30004,
                  `read conv failure: ${r.message}`
                ),
                11 !== r.errno)
              )
                throw r;
            }
        }
        return t;
      }
      getRespondedByMeSet() {
        return this._responsedByMe;
      }
      async _getBackupOfConversation(e) {
        return (
          (this._currentBackup && this._currentBackup.noiseId === e.ownerId) ||
            (this._currentBackup && (await this._currentBackup.close()),
            (this._currentBackup = await this._getNewBackupOfConversation(e))),
          this._currentBackup
        );
      }
      async _getNewBackupOfConversation(e) {
        const t = e.ownerId,
          s = 1 === e.ownerType ? `group_${t}` : t,
          r = ie.a.join(this.path, `${s}.db`),
          n = new me({
            path: r,
            noiseId: t,
            noiseUserId: this.noiseUserId,
            plainUserId: this.plainUserId,
            logger: this.logger,
          });
        return await n.open(), n;
      }
    }
    class me extends E {
      constructor(e) {
        super(e.path),
          Object(y.a)(this, "noiseUserId", void 0),
          Object(y.a)(this, "plainUserId", void 0),
          Object(y.a)(this, "logger", void 0),
          Object(y.a)(this, "noiseId", void 0),
          (this.logger = e.logger),
          (this.noiseUserId = e.noiseUserId),
          (this.plainUserId = e.plainUserId),
          (this.noiseId = e.noiseId);
      }
      async prepare() {}
      async getFirstMessageTimeStamp() {
        const e = await this.getAllQuery(Ie);
        return 0 === e.length ? 0 : e[0].TimeStamp;
      }
      async countMessages(e) {
        const t = [e],
          s = await this.getStatementResult(ye, t);
        return s ? s.count : 0;
      }
      async getMessages(e, t, s, r, n) {
        const o = [e, s, r],
          i = await this.getAllStatementResult(be, o),
          a = [];
        return (
          i.forEach((e) => {
            const t = this.convertCrossV2ToCrossV1(e);
            t && a.push(t);
          }),
          this.logger.zsymb(
            0,
            11131,
            30005,
            `getMessages: ${n}, old:${i.length}, new:${a.length}`
          ),
          a
        );
      }
      async hasResponsedByUser(e) {
        const t = await this.getQuery(we(e));
        return !!t && t.count > 0;
      }
      convertCrossV2ToCrossV1(e) {
        const t = le[e.MsgType];
        if (!t) return null;
        this.logger.zsymb(
          3,
          11131,
          30006,
          "parsing message: {}, type:{}, size:{}",
          e.CliMsgId,
          e.MsgType,
          e.BinNet.size
        );
        const s = he.parseBinNet(e.BinNet) || {};
        if (s.result > 0)
          return (
            this.logger.zsymb(21, 11131, 30007, "ParseBinNetFail", {
              message: s.error_message,
              result: s.result,
              innerError: s.inner_error,
            }),
            null
          );
        const r = s.data;
        return (
          r.attachs &&
            r.attachs.length > 0 &&
            r.attachs[0] &&
            (e.MsgType === ue.OA
              ? (r.attach = r.attachs)
              : ((r.attach = r.attachs[0]),
                e.MsgType !== ue.Sticker && r.attach && delete r.attach.catId)),
          {
            fromId: e.SenderId.toString(),
            fromName: "",
            attach: "{}",
            attachData: r,
            globalMsgId: e.GlbMsgId,
            cliMsgId: e.CliMsgId,
            msg: e.MsgContent,
            ownerId: this.noiseId,
            ownerType: 0,
            sequenseId: e.TimeStamp,
            ts: e.TimeStamp,
            ttl: e.TTL,
            type: t,
            userId: this.plainUserId,
          }
        );
      }
    }
    const fe = [20, 21, 24, 25, 26, 29, 34, 35, 45, 51, 52]
        .map((e) => `MsgType != ${e}`)
        .join(" AND "),
      Ie = `SELECT TimeStamp FROM ChatContent WHERE ${fe} AND MsgStatus > 0 ORDER BY TimeStamp ASC LIMIT 1`,
      be = `SELECT * FROM ChatContent WHERE TimeStamp <= (?) AND MsgStatus > 0 AND CliMsgId NOT NULL AND CliMsgId != (?) AND ${fe} ORDER BY TimeStamp DESC LIMIT (?)`,
      ye = `SELECT count(*) as count FROM ChatContent WHERE TimeStamp <= (?) AND MsgStatus > 0 AND cliMsgId NOT NULL AND ${fe}`,
      we = (e) =>
        `SELECT count(*) as count FROM ChatContent WHERE SenderId = ${e} AND MsgStatus > 0 AND ${fe}`;
    function Me(e) {
      try {
        if (0 === e) return new W();
        if (1 === e) return new ge();
      } catch (t) {
        throw t;
      }
      throw new Error(`Unsupported format: ${e}`);
    }
    var Ee;
    Object(i.h)()(
      (Ee =
        Object(o.injectable)()(
          (Ee = class extends b.a {
            getType() {
              return "RESTORE_CONVERSATIONS";
            }
            async execute(e) {
              if (e.abort.aborted) return Promise.reject(new Error("Aborted"));
              const t = Me(e.params.format);
              var s;
              return (
                (s = e.params.shouldUseNewMediaDBFlowConfig),
                (Q.shouldUseNewMediaDBConfig = s),
                t.restoreConversations(e)
              );
            }
          })
        ) || Ee)
    );
    var Se;
    Object(i.h)()(
      (Se =
        Object(o.injectable)()(
          (Se = class extends b.a {
            getType() {
              return "RESTORE_MESSAGES";
            }
            async execute(e) {
              if (e.abort.aborted) return Promise.reject(new Error("Aborted"));
              return Me(e.params.format).restoreMessages(e);
            }
          })
        ) || Se)
    );
    var ve;
    const _e = ne.a.dbUtils();
    Object(i.h)()(
      (ve =
        Object(o.injectable)()(
          (ve = class extends b.a {
            getType() {
              return "DECRYPT_BACKUP";
            }
            async execute(e) {
              return e.abort.aborted
                ? Promise.reject(new Error("Aborted"))
                : this._decyptBackup(e);
            }
            async _decyptBackup(e) {
              const { params: t, report: s } = e;
              return (
                await Object(ae.b)(t.outputPath),
                0 === t.format
                  ? this._decryptBackupFormat0(
                      t.inputPath,
                      t.outputPath,
                      t.privateKey
                    )
                  : this._decryptBackupFormat1(
                      t.inputPath,
                      t.outputPath,
                      t.privateKey,
                      t.numberOfConversationsCount,
                      s
                    )
              );
            }
            async _decryptBackupFormat0(e, t, s) {
              const { result: r, err_message: n } = _e.decompressAndDecryptDb(
                e,
                t,
                s
              );
              return 0 === r ? t : Promise.reject({ error: r, message: n });
            }
            async _decryptBackupFormat1(e, t, s, r, n) {
              t = await Object(ae.a)(t);
              let o = 0;
              const {
                result: i,
                inner_error: a,
                error_message: c,
              } = _e.decompressAndDecryptDb_V2(e, t, s.toUpperCase(), () => {
                o++;
                const e = Math.floor(Math.round((o / r) * 100));
                n(e);
              });
              return 0 === i
                ? t
                : Promise.reject({ error: i, inner_error: a, message: c });
            }
          })
        ) || ve)
    );
    s("Ceyj"), s("Q/Ir"), s("Ljqs"), s("rBRb");
    var Te,
      Oe = s("jbAT"),
      De = s("zLd2"),
      Ne = s("5txd");
    Object(o.injectable)()(
      (Te =
        Object(o.singleton)(De.c)(
          (Te =
            (function (e, t) {
              return Object(o.inject)(Oe.b)(e, void 0, 0);
            })(
              (Te =
                (function (e, t) {
                  return Object(o.inject)(u.ZLoggerFactory)(e, void 0, 1);
                })(
                  (Te =
                    Reflect.metadata(
                      "design:type",
                      Function
                    )(
                      (Te =
                        Reflect.metadata("design:paramtypes", [
                          void 0 === Oe.a ? Object : Oe.a,
                          void 0 === u.ZLoggerFactory
                            ? Object
                            : u.ZLoggerFactory,
                        ])(
                          (Te = class {
                            constructor(e, t) {
                              Object(y.a)(
                                this,
                                "_utilsMediaAppService",
                                void 0
                              ),
                                Object(y.a)(this, "_logger", void 0),
                                Object(y.a)(this, "_log", void 0),
                                (this._utilsMediaAppService = e),
                                (this._logger = t.createZLogger(De.b, [
                                  "manage-utils-media-in-ui",
                                ])),
                                (this._log = Object(Ne.a)(this._logger));
                            }
                            create(e) {
                              return this._utilsMediaAppService.create(e);
                            }
                            createOrUpdate(e) {
                              return this._utilsMediaAppService.createOrUpdate(
                                e
                              );
                            }
                            async createOrUpdateFromMedias(e) {
                              return this._utilsMediaAppService.createOrUpdateFromMedias(
                                e
                              );
                            }
                          })
                        ) || Te)
                    ) || Te)
                ) || Te)
            ) || Te)
        ) || Te)
    );
    s("37f1");
  },
  CgVK: function (e, t) {
    e.exports = require("constants");
  },
  EXGp: function (e, t) {
    e.exports = require("..\\native\\nativelibs");
  },
  FMKJ: function (e, t) {
    e.exports = require("zlib");
  },
  KEll: function (e, t) {
    e.exports = require("http");
  },
  NLsH: function (e, t) {
    e.exports = require("electron");
  },
  NkYg: function (e, t) {
    e.exports = require("buffer");
  },
  O6t0: function (e, t, s) {
    process && process.env;
    var r = s("NLsH").ipcRenderer,
      n = s("c8uc").default;
    n.bindSendEventFunc(l), s("xXR1").default();
    const o = "shared-worker-req-events",
      i = "shared-worker-resp-events",
      a = "cross_OS_LOG_QOS";
    let c = 0;
    function u() {
      return new Promise((e, t) => {
        let s = n.isLoadedLib();
        s && s.ok
          ? (h("load lib success!!"),
            l(i, { act: 12 }),
            l("SUCCESS_LOAD_LIB_SQLITE3"),
            d(!0, 91002, 0, 0, 3 == c ? 0 : 3, Date.now()),
            e(s))
          : c > 0
          ? (c--,
            h(
              "load lib fail go retry " +
                c +
                " " +
                (s ? s.error : " _resp = null")
            ),
            d(!1, 91002, 0, 0, 2, Date.now()),
            setTimeout(() => {
              u();
            }, 15e3))
          : (h("load lib fail " + (s ? s.error : " _resp = null")),
            l("FAIL_LOAD_LIB_SQLITE3"),
            d(!1, 91002, 0, 0, 1, Date.now()),
            t(s));
      });
    }
    function l() {
      r.send(...arguments);
    }
    function d(e, t, s = 0, r, n, o) {
      l(a, {
        success: e,
        commandId: t,
        subCommandId: s,
        duration: r,
        errorCode: n,
        startTime: o,
      });
    }
    function h(e) {
      r.send("log", "info", "shared-worker: " + e);
    }
    !(function () {
      try {
        const e = {
            increaseSuccess: (e, t, s, r = [], n = {}) => {
              l(a, {
                success: !0,
                commandId: e,
                subCommandId: t,
                duration: s,
                params: r,
                options: n,
              });
            },
            increaseFailed: (e, t, s, r, n, o = [], i = {}) => {
              l(a, {
                success: !1,
                commandId: e,
                subCommandId: t,
                duration: s,
                errorCode: r,
                startTime: n,
                params: o,
                options: i,
              });
            },
          },
          { MetriczDriver: t } = s("rkiK");
        t.registerQosControl(e);
      } catch (e) {}
    })(),
      r.on(o, (e, t) => {
        !(function (e) {
          e &&
            (e.constructor === Array
              ? e.forEach((e) => {
                  n.receiverEvent(e);
                })
              : n.receiverEvent(e));
        })(t);
      }),
      r.on("zping", (e, t) => {
        l(`zpong-${t}`, Date.now());
      }),
      r.on("receive-viewerkey", (e, t) => {
        const r = s("m/zo"),
          { crashReporter: n } = s("NLsH");
        r.setTag("viewer_key", t),
          n.addExtraParameter("sentry[tags][viewer_key]", t);
      }),
      document.addEventListener("load", () => {
        u();
      }),
      h("[pid][shared-worker]" + process.pid),
      l("zmain_register_process", "dbtask", process.pid);
  },
  PJMN: function (e, t) {
    e.exports = require("crypto");
  },
  QduZ: function (e, t) {
    e.exports = require("child_process");
  },
  Qs2e: function (e, t) {
    e.exports = require("net");
  },
  Qs3B: function (e, t) {
    e.exports = require("assert");
  },
  UGJm: function (e, t, s) {
    "use strict";
    s.d(t, "a", function () {
      return u;
    });
    var r = s("rePB"),
      n = s("q1tI"),
      o = s.n(n),
      i = s("i8i4"),
      a = s.n(i),
      c = s("Jcee");
    class u extends c.b {
      constructor(e, t, s, n) {
        super(e, t, s),
          Object(r.a)(this, "container", void 0),
          Object(r.a)(this, "component", void 0),
          (this.container = n.container),
          (this.component = n.component);
      }
      async start() {
        await super.start(), this.render();
      }
      render() {
        a.a.render(o.a.createElement(this.component), this.container);
      }
    }
  },
  Y6ta: function (e, t, s) {
    "use strict";
    s.r(t);
    var r = s("z0WU"),
      n = s("4prX"),
      o = s("AtyM"),
      i = s("NDmK"),
      a = s("Mgpg"),
      c = s("jDHv");
    const u = process && process.env && !1,
      l = c.ModuleContainer.resolve(a.ZLoggerFactory).createZLogger("dbtask", [
        "dbsqlite",
      ]);
    let d, h;
    const g = s("m/zo"),
      p = s("oyvS"),
      m = u ? "devftsmsg_" : "ftsm_",
      f = ["msgId", "content", "msgKey", "msgType", "ts", "fromUid"],
      I = (e) => f.map((t) => e + t).join(","),
      b = I(""),
      y = (I("NEW."), I("$")),
      w = (e) => `(${f.map((t) => `'${e[t]}'`).join(",")})`,
      M = `INSERT INTO searchIndex (${b}) VALUES (${f
        .map(() => "?")
        .join(",")})`,
      E = ["pragma journal_mode=WAL;", "pragma mmap_size=268435456;"],
      S = `CREATE VIRTUAL TABLE IF NOT EXISTS searchIndex USING FTS5(${b})`;
    const v = new (class {
      constructor() {
        (this.db = null),
          (window.flushDb = this.flushDb.bind(this)),
          (window.flushDbBatch = this.flushDbBatch.bind(this)),
          (this._cacheInsert = void 0),
          (this.userId = void 0),
          (this.removeDuplicate = r.default.throttle(() => {
            this._removeDuplicate();
          }, 1e3));
      }
      isLoadedLib() {
        if (!h)
          try {
            l.zsymb(21, 10645, 3e4, "call load lib"), (h = s("EXGp").sqlite3());
          } catch (e) {
            (d = e), l.zsymb(21, 10645, 30001, "load lib lazy fail", e);
          }
        return h ? { ok: !0 } : { ok: !1, error: d };
      }
      logErr() {
        0;
      }
      initDebug() {}
      createKey(e, t) {
        if (!t || !e) return "";
        (t = String(t)), (e = String(e));
        let s = [];
        for (let r = 0; r < t.length; r++)
          r < e.length
            ? s.push(
                String.fromCharCode(Math.min(t.charCodeAt(r), e.charCodeAt(r)))
              )
            : s.push(t[r]);
        return s.join("");
      }
      doListSqls(e) {
        return new Promise((t, s) => {
          if (!e || e.constructor !== Array || 0 == e.length)
            return s("doListSqls: not valid lists");
          const r = () => {
            if (0 == e.length) return t();
            let n = e.shift();
            this.db.run(n, (e) => {
              if (e) return s("doListSqls: err " + n + " " + e);
              r();
            });
          };
          r();
        });
      }
      finalizeInsertStatement() {
        if (this._cacheInsert)
          try {
            this._cacheInsert.finalize(function (e) {
              e && l.zsymb(21, 10645, 30002, "db sqlite init error", e);
            }),
              (this._cacheInsert = void 0);
          } catch (e) {}
      }
      closeDb(e, t) {
        return new Promise((e, t) => {
          if (!this.db) return t("no db to close ???");
          this.finalizeInsertStatement(),
            this.db.close((s) => {
              if (s) return t("close db fail " + s);
              e();
            });
        });
      }
      openDb(e, t, r) {
        return new Promise((i, a) => {
          const c = this.isLoadedLib();
          if (!0 !== c.ok) return a(c.error);
          s("NLsH");
          let u = p.join(window.electronAPI.getPath("userData"), `${m}${e}.db`);
          this.logErr("create db ", e, t, u);
          const d = Date.now(),
            f = o.a.now();
          this.finalizeInsertStatement(),
            (this.db = new h.Database(
              u,
              h.OPEN_READWRITE | h.OPEN_CREATE,
              async (s) => {
                if (s)
                  return (
                    g &&
                      r &&
                      g.withScope(function (e) {
                        e.setTag("db-error", "open"),
                          e.setLevel("error"),
                          g.captureException(s);
                      }),
                    n.default.increaseFailed(91002, 0, o.a.now() - f, 4, d),
                    s.errno &&
                      n.default.increaseFailed(
                        91002,
                        0,
                        o.a.now() - f,
                        1e4 * s.errno + 4,
                        d
                      ),
                    a("open db fail " + s)
                  );
                this.initDebug();
                let c = this.createKey(e, t);
                this.logErr("using key", c);
                let u = [...E];
                u.unshift(`PRAGMA key='${c}'`);
                try {
                  await this.doListSqls(u);
                  const e = await this.doListSqls([S]);
                  await this.prepareInsertSearch(), i(e);
                } catch (h) {
                  l.zsymb(21, 10645, 30003, "db sqlite init error {}", h),
                    a("config fail " + s);
                }
              }
            ));
        });
      }
      flushDbBatch(e) {
        return new Promise((t, s) => {
          const r = () => {
            let e = Math.floor(100 * Math.random() + 20),
              t = [];
            for (let s = 0; s < e; s++)
              t.push(
                Math.random()
                  .toString(36)
                  .slice(Math.floor(5 * Math.random() + 5))
              );
            return t.join(" ");
          };
          let n = [];
          for (let c = 0; c < e; c++) n.push(r());
          let o = Date.now(),
            i = [];
          for (let c = 0; c < e; c++)
            i.push(
              w({
                content: n[c],
                msgId: "936014572798",
                msgKey: "g1711728256407641189",
                msgType: 1,
                ts: Date.now(),
                fromUid: "936014572798",
              })
            );
          let a = `INSERT INTO searchIndex VALUES ${i.join(",")}`;
          this.db.run(a, (r) => {
            if (r) return s(r);
            this.logErr("success add ", e, " items"),
              this.logErr("cost: ", Date.now() - o),
              t();
          });
        });
      }
      flushDbBatchv2(e) {
        return new Promise((t, s) => {
          const n = () => {
            let e = Math.floor(100 * Math.random() + 20),
              t = [];
            for (let s = 0; s < e; s++)
              t.push(
                Math.random()
                  .toString(36)
                  .slice(Math.floor(5 * Math.random() + 5))
              );
            return t.join(" ");
          };
          let o = [];
          for (let r = 0; r < e; r++) o.push(n());
          Date.now();
          let i = [];
          for (let r = 0; r < e; r++)
            i.push({
              content: o[r],
              msgId: "936014572798_" + r,
              msgKey: "g1711728256407641189",
              msgType: 1,
              ts: Date.now(),
              fromUid: "936014572798",
            });
          r.default.chunkArray(i, 50).forEach((e) => this.write(e));
        });
      }
      flushDb(e) {
        return new Promise((t, s) => {
          const r = () => {
            let e = Math.floor(100 * Math.random() + 20),
              t = [];
            for (let s = 0; s < e; s++)
              t.push(
                Math.random()
                  .toString(36)
                  .slice(Math.floor(5 * Math.random() + 5))
              );
            return t.join(" ");
          };
          let n = [];
          for (let a = 0; a < e; a++) n.push(r());
          let o = Date.now();
          var i = this.db.prepare(
            `INSERT INTO searchIndexView (${b}) VALUES (${y})`,
            (r) => {
              if (r) return s(r);
              let a = e,
                c = () => {
                  if ((a--, a <= 0))
                    return (
                      this.logErr("success add ", e, " items"),
                      this.logErr("cost: ", Date.now() - o),
                      t()
                    );
                };
              for (let t = 0; t < e; t++)
                i.run(
                  {
                    $content: n[t],
                    $msgId: "936014572798",
                    $msgKey: "g1711728256407641189",
                    $msgType: 1,
                    $ts: Date.now(),
                    $fromUid: "936014572798",
                  },
                  (e) => {
                    e && this.logErr(e), c();
                  }
                );
            }
          );
        });
      }
      write(e) {
        return new Promise((t, s) => {
          if (!e.length) return t();
          let r = [];
          for (let n = 0; n < e.length; n++) {
            let t = e[n];
            r.push(w(t));
          }
          let i = `INSERT INTO searchIndex (${b}) VALUES ` + r.join(","),
            a = Date.now(),
            c = o.a.now();
          this.db.run(i, (e) => {
            if (e)
              return (
                e.errno &&
                  n.default.increaseFailed(
                    91002,
                    0,
                    o.a.now() - c,
                    1e4 * e.errno + 5,
                    a
                  ),
                s(e)
              );
            this.removeDuplicate(), t();
          });
        });
      }
      _removeDuplicate() {
        Date.now();
        this.db.run(
          "delete from searchIndex where rowid not in (select min(rowid) from searchIndex group by msgId)",
          (e) => {
            if (e)
              return l.zsymb(
                21,
                10645,
                30007,
                "cross-index-search remove err {}",
                e
              );
          }
        );
      }
      _reformat(e) {
        e &&
          e.constructor === Object &&
          e.convId &&
          ((e.msgKey = e.convId), delete e.convId);
      }
      _getKeywordCondition(e) {
        if (i.default.search_in_conv.new_rule_prefix_match)
          return `(content : ${e.join(" ")}*)`;
        e.constructor == String && (e = [e]);
        {
          let t = [];
          return (
            e.forEach((e) => {
              e && t.push(`${e}*`);
            }),
            t.length <= 0 ? "" : ((t = t.join(" AND ")), `(content : ${t})`)
          );
        }
      }
      _buildQuerySql(e, t, s) {
        this._reformat(t);
        let r = [];
        if (e) {
          let t = this._getKeywordCondition(e);
          "" !== t && (r = [t]);
        }
        if (t && t.constructor === Object)
          for (let i in t)
            if (t.hasOwnProperty(i)) {
              if ("searchForEmpty" === i) continue;
              let e = t[i];
              if (
                null == e ||
                (e.constructor !== String && e.constructor !== Number)
              )
                continue;
              r.push(`(${i} : ${e})`);
            }
        t &&
          !t.msgType &&
          r.push(
            "(msgType: 1 OR msgType: 2 OR msgType: 6 OR msgType: 19 OR msgType: 18)"
          );
        let n = "";
        if (t && t.timeRange) {
          let e = t.timeRange;
          if (e && e.constructor === Array && e.length > 1) {
            let t = e[0],
              s = e[1];
            (t || s) &&
              (n = t
                ? s
                  ? `ts < '${s}' AND ts > '${t}'`
                  : `ts > '${t}'`
                : `ts < '${s}'`);
          }
        }
        let o = ["ORDER BY ts DESC"];
        return (
          s &&
            s.constructor === Object &&
            (s.limit && !isNaN(s.limit) && o.push(`LIMIT ${s.limit} `),
            s.offset && !isNaN(s.offset) && o.push(`OFFSET ${s.offset}`)),
          `SELECT DISTINCT ${f.join(",")} FROM searchIndex WHERE ${
            n ? n + " AND " : ""
          } searchIndex MATCH '${r.join("AND")}' ${o.join(" ")}`
        );
      }
      query(e, t, s, r) {
        return new Promise((n, o) => {
          if (!(e || (t && !0 == !t.searchForEmpty))) return o("kw null");
          let i = this._buildQuerySql(e, t, s);
          n(this._query(i, r));
        });
      }
      queryGlobalMessage(e, t, s, r) {
        return new Promise((t, n) => {
          let o = 5e3,
            i = 0;
          s.limit && (o = s.limit), s.offset && (i = s.offset);
          Date.now();
          let a = [
              `SELECT DISTINCT ${f.join(
                ","
              )} FROM searchIndex WHERE searchIndex MATCH '${this._getKeywordCondition(
                e
              )}' GROUP BY msgKey ORDER BY MAX(ts) DESC LIMIT ${o} OFFSET ${i}`,
            ],
            c = [];
          const u = () => {
            if (r && r()) return n("aborted");
            if (0 == a.length) return t(c);
            let e = a.pop();
            this._query(e, r)
              .then((e) => {
                e &&
                  (e.constructor == Object
                    ? c.push(e)
                    : e.constructor == Array && c.push.apply(c, e)),
                  u();
              })
              .catch((e) => {
                this.logErr(e), u();
              });
          };
          u();
        });
      }
      _query(e, t) {
        return new Promise((s, r) => {
          let n = [];
          Date.now();
          this.db.each(
            e,
            (e, s) => {
              if (t && t()) return r("aborted");
              e
                ? this.logErr("query error", e)
                : n.push({ msgId: s.msgId, convId: s.msgKey });
            },
            () => {
              this.logErr("query completed"), s(n);
            }
          );
        });
      }
      deleteRow(e) {
        return new Promise((t, s) => {
          let r = `DELETE FROM searchIndex WHERE msgId='${e}'`;
          this.db.run(r, (e) => {
            if (e) return s(e);
            t();
          });
        });
      }
      queryGlobalMessageV2(e, t, s, r) {
        return new Promise((n, o) => {
          if (!t || 0 == t.length) return o("listConvs = 0");
          ((s = s || {}).limit = s.limitPerConv ? s.limitPerConv : 1),
            s.offset || (s.offset = 0);
          let i = t.map((t) => this._buildQuerySql(e, { msgKey: t }, s)),
            a = [];
          Date.now();
          const c = () => {
            if (r && r()) return o("aborted");
            if (0 == i.length) return n(a);
            let e = i.shift();
            this._queryV2(e, r)
              .then((e) => {
                e &&
                  (e.constructor == Object
                    ? a.push(e)
                    : e.constructor == Array && a.push.apply(a, e)),
                  c();
              })
              .catch((e) => {
                this.logErr(e), c();
              });
          };
          c();
        });
      }
      queryGlobalMessageV3(e, t, s) {
        return new Promise((r, n) => {
          let o = [];
          if (t && t()) return n("aborted");
          let a = null,
            c = Date.now(),
            u = c - 864e5;
          null != s &&
            s.sender &&
            "string" == typeof s.sender &&
            (a = s.sender),
            null != s && s.timeFrom && (u = s.timeFrom),
            null != s && s.timeTo && (c = s.timeTo);
          let l =
            "SELECT DISTINCT msgId,content,msgKey,msgType,ts,fromUid FROM searchIndex WHERE searchIndex MATCH '(content : " +
            e +
            "*)AND(msgType: 1 OR msgType: 2 OR msgType: 6 OR msgType: 19 OR msgType: 18)' " +
            (i.default.enable_global_search_phase_2 && a
              ? "AND msgKey = '" + a + "' "
              : "") +
            (!i.default.enable_global_search_phase_2 && a
              ? "AND fromUid = '" + a + "' "
              : "") +
            "AND ts BETWEEN '" +
            u +
            "' AND '" +
            c +
            "' ORDER BY ts DESC";
          this._queryV2(l, t)
            .then((e) => {
              if (e)
                return (
                  e.constructor == Object
                    ? o.push(e)
                    : e.constructor == Array && o.push.apply(o, e),
                  r(o)
                );
            })
            .catch((e) => (this.logErr(e), r(o)));
        });
      }
      getConversationMatch(e, t) {
        return new Promise((s, r) => {
          let n = `SELECT DISTINCT ${f.join(
              ","
            )} FROM searchIndex WHERE searchIndex MATCH '(content : ${e}* AND (${[
              1, 2, 6, 18,
            ]
              .map((e) => `msgType: ${e}`)
              .join(" OR ")}))' group by msgKey ORDER BY ts DESC`,
            o = [];
          Date.now();
          this._queryV2(n, t)
            .then((e) => {
              e &&
                (e.constructor == Object
                  ? o.push(e)
                  : e.constructor == Array && o.push.apply(o, e),
                s(o));
            })
            .catch((e) => {
              r(e);
            });
        });
      }
      _queryV2(e, t) {
        return new Promise((s, r) => {
          let n = [];
          this.db.each(
            e,
            (e, s) => {
              if (t && t()) return r("aborted");
              e
                ? this.logErr("query error", e)
                : n.push({ msgId: s.msgId, convId: s.msgKey, ts: s.ts });
            },
            () => {
              this.logErr("query completed"), s(n);
            }
          );
        });
      }
      pureQuery(e) {
        return new Promise((t, s) => {
          this._queryV2(e)
            .then((e) => {
              e && t(e), s();
            })
            .catch((e) => {
              s(e);
            });
        });
      }
      async prepareInsertSearch() {
        if (this._cacheInsert) return this._cacheInsert;
        const e = this;
        return new Promise((t, s) => {
          this.db.prepare(M, function (r) {
            r
              ? (l.zsymb(21, 10645, 30013, "db sqlite prepare err {}", r), s(r))
              : (t(this), (e._cacheInsert = this));
          });
        });
      }
      writev2(e) {
        return new Promise(async (t, s) => {
          const r = this.db;
          let n = this._cacheInsert
            ? this._cacheInsert
            : await this.db.prepare(M);
          const o = (e) => {
            e && s(e);
          };
          r.serialize(function () {
            r.run("BEGIN TRANSACTION", o),
              e.forEach((e) => {
                var t;
                (t = e), (e = f.map((e) => t[e])), n.bind(e).run();
              }),
              r.run("COMMIT", (e) => {
                e ? s(e) : t();
              });
          });
        });
      }
    })();
    u && (window.sqlite3dbInstance = v), (t.default = v);
  },
  bzos: function (e, t) {
    e.exports = require("url");
  },
  c8uc: function (e, t, s) {
    "use strict";
    s.r(t);
    var r = s("VTBJ"),
      n = s("ES/k"),
      o = s("Mgpg"),
      i = s("jDHv");
    process && process.env;
    let a = s("Y6ta").default;
    i.ModuleContainer.resolve(o.ZLoggerFactory).createZLogger("dbtask", [
      "manager",
    ]);
    const c = {
        QUERY: 1,
        ADD_DATA: 2,
        PRE_DATA: 3,
        INIT: 4,
        GET_INDEX: 5,
        ABORTED_SEARCH: 6,
        MIGRATE: 7,
        DEL_OLDDATA: 8,
        DELETE_ALL: 9,
        PRE_TAGGING: 10,
        INIT_TAGGING: 11,
        PROCESS_READY: 12,
        QUERY_GLOBAL_MSG: 13,
        CLOSE_DB: 14,
        DELETE_DATA: 15,
        PURE_QUERY: 18,
        QUERY_GLOBAL_MSG_V3: 19,
      },
      u = {
        [c.QUERY]: function (e, t, s, o) {
          return new Promise((i, c) => {
            let u;
            m(e, o), (u = t ? () => w(s, o) : () => !1);
            let l = n.a.formatTextSearch(e);
            if (((l = l.trim()), !l)) {
              let e = o.filter;
              if (!e || !0 !== e.searchForEmpty) return c("text is null");
            }
            let d = l.split(" ");
            if ((o = o || {}).progress) {
              let e,
                t = !0,
                n = 0,
                l = o.configs && o.configs.limit ? o.configs.limit : T,
                h =
                  o.configs && void 0 !== o.configs.offset
                    ? o.configs.offset
                    : 0,
                g = o.configs ? Object(r.a)({}, o.configs) : {},
                p = [];
              const f = () => {
                  clearTimeout(e), (e = null), i(p);
                },
                I = (i, h) => {
                  if (u && u()) return c("aborted");
                  a.query(
                    d,
                    o.filter,
                    Object(r.a)(
                      Object(r.a)({}, g),
                      {},
                      { limit: h, offset: i }
                    ),
                    u
                  )
                    .then((r) => {
                      if (u && u()) return c("aborted");
                      (l -= h),
                        r && r.constructor == Array
                          ? (p.push.apply(p, r),
                            r.length >= h && l > 0
                              ? (t
                                  ? ((t = !1), (n = p.length), b(p, s))
                                  : e ||
                                    (e = setTimeout(() => {
                                      (e = null),
                                        n < p.length &&
                                          ((n = p.length), b(p, s));
                                    }, 2e3)),
                                I(i + r.length, Math.min(100, l)))
                              : f())
                          : f();
                    })
                    .catch((e) => {
                      m("_doQuery", e), f();
                    });
                };
              I(h, Math.min(100, l));
            } else
              (o.configs && o.configs.limit) ||
                ((o.configs = o.configs ? o.configs : {}),
                (o.configs.limit = T),
                (o.configs.offset = o.configs.offset || 0)),
                i(a.query(d, o.filter, o.configs, u));
          });
        },
        [c.ADD_DATA]: function (e) {
          return Promise.reject("not impl");
        },
        [c.INIT]: function (e) {
          return new Promise(
            (t, s) => (
              m(e),
              a.isLoadedLib(),
              e.userId && e.UIN
                ? v
                  ? v.userId != e.userId || v.UIN != e.UIN
                    ? (y("open new db last" + e.userId),
                      (v = { userId: e.userId, UIN: e.UIN }),
                      y("new Session!!"),
                      l.length > 0 &&
                        (y("promote last task priority"),
                        l.forEach((e) => {
                          e.priority = 100;
                        })),
                      l.unshift({
                        act: c.CLOSE_DB,
                        taskId: d.next(),
                        isAbort: !1,
                        additions: null,
                        priority: 100,
                        isMicro: !0,
                      }),
                      l.unshift({
                        act: c.INIT,
                        data: e,
                        taskId: d.next(),
                        isAbort: !1,
                        additions: null,
                        priority: 100,
                        isMicro: !0,
                      }),
                      t())
                    : _
                    ? (y("reopen the same with last" + e.userId), t())
                    : (y("open new db now!!!" + e.userId),
                      (_ = { userId: e.userId, UIN: e.UIN }),
                      t(a.openDb(e.userId, e.UIN, e.onSentry)))
                  : ((v = { userId: e.userId, UIN: e.UIN }),
                    y("open db first time now!!!" + e.userId),
                    (_ = { userId: e.userId, UIN: e.UIN }),
                    void t(a.openDb(e.userId, e.UIN, e.onSentry)))
                : s("invalid init data " + e.userId + " " + e.UIN)
            )
          );
        },
        [c.PRE_DATA]: function (e, t = !1, s, o, i) {
          return (
            m(e),
            new Promise((t, s) => {
              if (!e || 0 == e.length) return t();
              if (e.length > 300) {
                let t = e.slice(300, e.length);
                M({
                  act: c.PRE_DATA,
                  data: t,
                  taskId: d.next(),
                  isAbort: !1,
                  additions: o,
                  priority: i,
                }),
                  (e = e.slice(0, 300));
              }
              let u = [];
              e.forEach((e) => {
                if (!e || e.constructor !== Object) return;
                let t = n.a.getTextFromMessage(e.content);
                u.push(Object(r.a)(Object(r.a)({}, e), {}, { content: t }));
              });
              Date.now();
              a.writev2(u)
                .then(() => {
                  t();
                })
                .catch((e) => {
                  s(e);
                });
            })
          );
        },
        [c.GET_INDEX]: function (e) {
          return Promise.reject("not impl");
        },
        [c.MIGRATE]: function (e) {
          return Promise.reject("not impl");
        },
        [c.DEL_OLDDATA]: function () {
          return Promise.reject("not impl");
        },
        [c.DELETE_ALL]: function () {
          return Promise.reject("not impl");
        },
        [c.QUERY_GLOBAL_MSG]: function (e, t, s, r) {
          return new Promise((o, i) => {
            let c;
            c = t ? () => w(s, r) : () => !1;
            let u = n.a.formatTextSearch(e);
            if (((u = u.trim()), !u)) return i("text is null");
            if ((r || (r = {}), r.progress)) {
              let e = 0;
              const t = [10, 20, 50],
                n = (e, t) => ({ data: e, page: t }),
                l = (u, d, h, g = 30) => {
                  if (c()) i("aborted");
                  else if (h >= d.length) o(n(null, e));
                  else {
                    const p = Math.min(h + g, d.length);
                    a.queryGlobalMessageV2(u, d.slice(h, p), r.configs, c)
                      .then((r) => {
                        r
                          ? (b(n(r, e), s),
                            e >= 1
                              ? setTimeout(() => {
                                  l(
                                    u,
                                    d,
                                    h + g,
                                    t[Math.min(++e, t.length - 1)]
                                  );
                                }, 100)
                              : l(u, d, h + g, t[Math.min(++e, t.length - 1)]))
                          : o(n(null, e));
                      })
                      .catch((e) => {
                        i(e);
                      });
                  }
                };
              (() => {
                a.getConversationMatch(u, c)
                  .then((s) => {
                    if (s && s.length > 0) {
                      s.sort((e, t) => t.ts - e.ts);
                      let e = [];
                      s.forEach((t) => {
                        e.push(t.convId);
                      }),
                        e.length > 0 && l(u, e, 0, t[0]);
                    } else o(n(null, e));
                  })
                  .catch((e) => {
                    i(e);
                  });
              })();
            } else o(a.queryGlobalMessageV2(u, r.listConvs, r.configs, c));
          });
        },
        [c.CLOSE_DB]: function () {
          return new Promise((e, t) => {
            _
              ? (y("go close db " + _.userId), e(a.closeDb(_.userId, _.UIN)))
              : t("close what?? curr: " + JSON.stringify(_)),
              (_ = null);
          });
        },
        [c.DELETE_DATA]: function (e) {
          return a.deleteRow(e.msgId);
        },
        [c.PURE_QUERY]: function (e) {
          return new Promise((t, s) => {
            a.pureQuery(e)
              .then((e) => {
                e ? t(e) : s(null);
              })
              .catch((e) => {
                s(e);
              });
          });
        },
        [c.QUERY_GLOBAL_MSG_V3]: function (e, t, s, r) {
          return new Promise((o, i) => {
            let c;
            c = t ? () => w(s, r) : () => !1;
            let u = n.a.formatTextSearch(e);
            if (((u = u.trim()), !u)) return i("text is null");
            const l = (e, t) => ({ data: e, page: t });
            let d = r.configs.filter;
            a.queryGlobalMessageV3(u, c, d)
              .then((e) => {
                e ? (b(l(e, 0), s), o(l(e, 0))) : o(l(null, 0));
              })
              .catch((e) => {
                i(e);
              });
          });
        },
      };
    let l = [];
    const d = new (class {
      constructor() {
        this.value = 1;
      }
      next() {
        return this.value++, this.value;
      }
    })();
    let h = new Map();
    let g = 2;
    let p = null;
    function m() {}
    var f = (e, t) => {},
      I = (e) => {
        f("shared-worker-resp-events", e);
      };
    function b(e, t) {
      I({ progress: !0, taskId: t, data: e });
    }
    function y(e) {
      I({ logErr: !0, data: e });
    }
    function w(e, t) {
      return t && t.filter ? e != h.get("with-filter") : e != h.get("_");
    }
    function M(e) {
      let t = !1;
      [c.QUERY, c.QUERY_GLOBAL_MSG, c.QUERY_GLOBAL_MSG_V3].indexOf(e.act) >=
        0 &&
        (e.additions && e.additions.filter
          ? h.set("with-filter", e.taskId)
          : h.set("_", e.taskId));
      for (let n = 0; n < l.length; ++n)
        if (((s = l[n]), (r = e), s.priority >= r.priority)) {
          l.splice(n, 0, e), (t = !0);
          break;
        }
      var s, r;
      t || l.push(e),
        (function () {
          if (1 == g) return;
          (g = 1), S();
        })();
    }
    function E(e, t, s) {
      try {
        e.callback && I({ success: s, data: t, taskId: e.taskId }),
          s || y(" err " + e.act + " " + t);
      } catch (r) {
        y(" _afterAction " + e.act + ": " + r);
      }
      S();
    }
    function S() {
      if (0 == l.length)
        return (
          (g = 2),
          p && clearTimeout(p),
          void (p = setTimeout(() => {
            y("FLAG_SLEEP_TOO_LONG"), (p = null);
          }, 6e4))
        );
      p && (clearTimeout(p), (p = null));
      let e = l.pop();
      if (!e || "object" != typeof e) return y("ev is not Object"), void S();
      let t = u && e.act && u.hasOwnProperty(e.act) ? u[e.act] : null;
      if ("function" == typeof t) {
        let r = !1,
          n = setTimeout(() => {
            (n = null),
              (r = !0),
              y("timeout event " + e.act),
              E(e, "timeout!!", !1);
          }, 6e4);
        const o = () => (n && (clearTimeout(n), (n = null)), r);
        try {
          t(e.data, e.isAbort, e.taskId, e.additions, e.priority)
            .then((t) => {
              o() || E(e, t, !0);
            })
            .catch((t) => {
              o() || E(e, t, !1);
            });
        } catch (s) {
          E(e, s, !1);
        }
      } else E(e, "not support this function " + e.act, !1);
    }
    let v, _;
    const T = 1e4;
    t.default = {
      bindSendEventFunc: function (e) {
        f = e;
      },
      receiverEvent: function (e) {
        switch ((e.act, e.act)) {
          case c.ABORTED_SEARCH:
            (h = new Map()), (l = l.filter((e) => e.act != c.QUERY));
            break;
          case c.DELETE_ALL:
            (l = []), M(e);
            break;
          default:
            M(e);
        }
      },
      isLoadedLib: () => a.isLoadedLib(),
    };
  },
  jK02: function (e, t) {
    e.exports = require("util");
  },
  "jle/": function (e, t) {
    e.exports = require("os");
  },
  msIP: function (e, t) {
    e.exports = require("stream");
  },
  "mw/K": function (e, t) {
    e.exports = require("fs");
  },
  oyvS: function (e, t) {
    e.exports = require("path");
  },
  tW87: function (e, t) {
    e.exports = require("original-fs");
  },
  tlh6: function (e, t) {
    e.exports = require("string_decoder");
  },
  ugmf: function (e, t) {
    e.exports = require("tls");
  },
});
//# sourceMappingURL=sourcemaps/shared-worker.1c41c23311c8b15682aa.js.map
