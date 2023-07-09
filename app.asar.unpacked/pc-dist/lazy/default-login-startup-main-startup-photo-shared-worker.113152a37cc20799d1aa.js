(this.webpackJsonp = this.webpackJsonp || []).push([
  [5],
  {
    "+eUS": function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return O;
      });
      var r = s("jDHv"),
        n = s("+ExH"),
        i = s("YEoC"),
        a = s("oRsZ"),
        o = s("IpiK"),
        c = s("d04y"),
        l = s("pRxM"),
        d = s("b3Jv"),
        u = s("4IGy"),
        h = s("xS/Y"),
        p = s("rdC+"),
        g = s("pP8i"),
        m = s("75G/");
      const b = (e, t) => {
        if (t === i.a.IDB)
          switch (e) {
            case "Core":
              return a.a.useIdb;
            case "MsgInfo":
              return o.a.useIdb;
            case "Qos":
              return c.a.useIdb;
            case "Reaction":
              return l.a.useIdb;
            case "Search":
              return d.a.useIdb;
            case "Storage":
              return u.a.useIdb;
            case "Res":
              return h.a.useIdb;
            case "SecureLocalstorage":
              return p.a.useIdb;
            case "ZLog":
              return g.a.useIdb;
            case "Media":
              return m.a.useIdb;
            default:
              return;
          }
        if (t === i.a.SQLite)
          switch (e) {
            case "Core":
              return a.a.useSqlite;
            case "MsgInfo":
              return o.a.useSqlite;
            case "Qos":
              return c.a.useSqlite;
            case "Reaction":
              return l.a.useSqlite;
            case "Search":
              return d.a.useSqlite;
            case "Storage":
              return u.a.useSqlite;
            case "Res":
              return h.a.useSqlite;
            case "SecureLocalstorage":
              return p.a.useSqlite;
            case "ZLog":
              return g.a.useSqlite;
            case "Media":
              return m.a.useSqlite;
            default:
              return;
          }
      };
      var f = s("kFM4"),
        y = s("teaq"),
        v = s("PhBv"),
        j = s("1UUk");
      function O(e) {
        Object(f.a)("RunMode", e),
          e !== i.e.Unknown &&
            (r.ModuleContainer.resolve(j.b).install(),
            e !== i.e.Background &&
              (setTimeout(() => {
                const e = r.ModuleContainer.resolve(v.b);
                e.install(n.a), e.start();
              }, 1),
              r.ModuleContainer.resolve(y.b).install(b)));
      }
    },
    "0rWR": function (e, t, s) {
      "use strict";
      var r,
        n = s("rePB"),
        i = s("jDHv"),
        a = s("Mgpg"),
        o = s("YEoC"),
        c = s("PmZf"),
        l = s("x9oK"),
        d = s("UJ0r");
      let u =
        i.ModuleContainer.injectable()(
          (r =
            (function (e, t) {
              return i.ModuleContainer.inject(a.ZLoggerFactory)(e, void 0, 0);
            })(
              (r =
                Reflect.metadata(
                  "design:type",
                  Function
                )(
                  (r =
                    Reflect.metadata("design:paramtypes", [
                      void 0 === a.ZLoggerFactory ? Object : a.ZLoggerFactory,
                    ])(
                      (r = class extends d.a {
                        constructor(e) {
                          super(),
                            Object(n.a)(this, "logger", void 0),
                            Object(n.a)(this, "dbSchema", null),
                            (this.logger = e.createZLogger("db", [
                              "adapter-manager",
                            ]));
                        }
                        async getDatabaseAdapter(e, t) {
                          const s = {
                            database: e,
                            version: t.version,
                            type: t.type,
                          };
                          this.logger.zsymb(0, 10662, 3e4, () => [
                            "creating",
                            s,
                          ]);
                          const r = this.getAdapterFactoryToken(t.type),
                            n = i.ModuleContainer.resolve(r),
                            a = await n.createAdapter(e, t);
                          return (
                            this.logger.zsymb(0, 10662, 30001, () => [
                              "create success",
                              s,
                            ]),
                            a.addEventListener(c.a.UnexpectedError, (e) => {
                              this.dispatchEvent(new c.d(e.error));
                            }),
                            a
                          );
                        }
                        canUse(e) {
                          return e !== o.a.SQLite || this.canIUseSQLite();
                        }
                        canIUseSQLite() {
                          try {
                            return !!s("upkw").getSqlite();
                          } catch (e) {
                            this.logger.zsymb(18, 10662, 30002, () => [
                              "can not use sqlite adapter",
                              e,
                            ]);
                          }
                          return !1;
                        }
                        getAdapterFactoryToken(e) {
                          return e === o.a.IDB ? l.b : l.c;
                        }
                        getExistedPartitionKeys(e, t) {
                          const s = this.getAdapterFactoryToken(t);
                          return i.ModuleContainer.resolve(
                            s
                          ).getExistedPartitionKeys(e);
                        }
                      })
                    ) || r)
                ) || r)
            ) || r)
        ) || r;
      i.ModuleContainer.registerSingleton(d.b, u);
    },
    "5l/R": function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return n;
      });
      var r = s("jDHv");
      const n = Object(r.define)("zlog-writer-manager");
    },
    "5yGw": function (e, t, s) {
      "use strict";
      var r,
        n = s("rePB"),
        i = s("jDHv"),
        a = s("Mgpg"),
        o = s("DI/x"),
        c = s("PmZf"),
        l = s("1UUk"),
        d = s("d/or"),
        u = s("teaq");
      let h =
        i.ModuleContainer.injectable()(
          (r =
            (function (e, t) {
              return i.ModuleContainer.inject(d.a)(e, void 0, 0);
            })(
              (r =
                (function (e, t) {
                  return i.ModuleContainer.inject(a.ZLoggerFactory)(
                    e,
                    void 0,
                    1
                  );
                })(
                  (r =
                    Reflect.metadata(
                      "design:type",
                      Function
                    )(
                      (r =
                        Reflect.metadata("design:paramtypes", [
                          void 0 === d.a ? Object : d.a,
                          void 0 === a.ZLoggerFactory
                            ? Object
                            : a.ZLoggerFactory,
                        ])(
                          (r = class {
                            constructor(e, t) {
                              (this.settingsManager = e),
                                Object(n.a)(this, "configFactory", void 0),
                                Object(n.a)(this, "configCache", void 0),
                                Object(n.a)(this, "logger", void 0),
                                (this.logger = t.createZLogger("db", [
                                  "config",
                                ])),
                                (this.configCache = new Map());
                            }
                            install(e) {
                              this.configFactory = e;
                              i.ModuleContainer.resolve(l.b).addEventListener(
                                c.a.SessionChange,
                                () => {
                                  this.clearCache();
                                }
                              );
                            }
                            getDatabaseConfigs(e) {
                              const t = this.configCache.get(e);
                              return t || this.createConfigCache(e);
                            }
                            clearCache() {
                              const e = this.configCache.values();
                              let t = e.next();
                              for (; !t.done; ) {
                                t.value.forEach((e) => e.clearCache()),
                                  (t = e.next());
                              }
                              this.configCache.clear();
                            }
                            createConfigCache(e) {
                              const t = [],
                                s = this.getCurrentConfig(e);
                              if (s) {
                                t.push(s);
                                const r = this.getConfigForMigrate(e, s.type);
                                r && t.push(r);
                              }
                              return this.configCache.set(e, t), t;
                            }
                            getConfigForMigrate(e, t) {
                              const s = this.settingsManager;
                              let r,
                                n = s.getPreferredAdapter(e);
                              if (n !== t) {
                                if (
                                  (n && (r = this.configFactory(e, n)),
                                  !n || !r)
                                ) {
                                  const t = s.preferAdapters;
                                  for (
                                    let s = 0;
                                    s < t.length &&
                                    ((n = t[s]),
                                    (r = this.configFactory(e, n)),
                                    !r);
                                    s++
                                  );
                                }
                                return r && t !== n ? r : void 0;
                              }
                            }
                            getCurrentConfig(e) {
                              const t =
                                this.settingsManager.getCurrentAdapterType(e);
                              if ("number" != typeof t)
                                throw new o.g(
                                  `${t} is not a valid AdapterType value!`
                                );
                              return this.configFactory(e, t);
                            }
                          })
                        ) || r)
                    ) || r)
                ) || r)
            ) || r)
        ) || r;
      i.ModuleContainer.registerSingleton(u.b, h);
    },
    "6rD8": function (e, t, s) {
      "use strict";
      let r, n;
      s.d(t, "b", function () {
        return r;
      }),
        s.d(t, "a", function () {
          return n;
        }),
        (function (e) {
          (e.PhysicalTextWriter = "PhysicalTextWriter"),
            (e.PhysicalBinaryWriter = "PhysicalBinaryWriter"),
            (e.PhysicalMeta = "PhysicalMeta");
        })(r || (r = {})),
        (function (e) {
          (e.Init = "Init"),
            (e.Idle = "Idle"),
            (e.Busy = "Busy"),
            (e.Paused = "Paused"),
            (e.Disabled = "Disabled");
        })(n || (n = {}));
    },
    CXIs: function (e, t, s) {
      "use strict";
      var r,
        n = s("jDHv"),
        i = s("W8fB"),
        a = s("rePB"),
        o = s("AH6j"),
        c = s("Yl80"),
        l = s("DWs9"),
        d = s("eVLP"),
        u = s("HPcM"),
        h = s("fsQs"),
        p = s("6rD8"),
        g = s("7FSS"),
        m = s("TMLr");
      let b =
        Object(n.injectable)()(
          (r =
            (function (e, t) {
              return Object(n.inject)(u.a)(e, void 0, 0);
            })(
              (r =
                Reflect.metadata(
                  "design:type",
                  Function
                )(
                  (r =
                    Reflect.metadata("design:paramtypes", [
                      void 0 === u.a ? Object : u.a,
                    ])(
                      (r = class extends o.b {
                        constructor(e) {
                          super(),
                            (this.bucket = e),
                            Object(a.a)(this, "_mode", void 0),
                            Object(a.a)(this, "logWriter", void 0),
                            Object(a.a)(this, "metaWriter", void 0),
                            Object(a.a)(this, "status", p.a.Idle),
                            (this._mode = c.b.Text),
                            (this.metaWriter = n.ModuleContainer.resolve(d.a)),
                            this._mode === c.b.Binary
                              ? ((this.logWriter = n.ModuleContainer.resolve(
                                  l.a
                                )),
                                n.ModuleContainer.resolve(m.a).init())
                              : (this.logWriter = n.ModuleContainer.resolve(
                                  l.b
                                ));
                        }
                        async flush() {
                          if (this.status !== p.a.Idle) return;
                          if (this.logWriter.writer_status() !== p.a.Idle)
                            return;
                          let e = Date.now();
                          if (0 === this.bucket.size()) return;
                          h.m &&
                            g.a.log(
                              `FLUSHING: ${this.bucket.size()} logs => ${this.logWriter.getPath()}...`
                            ),
                            (this.status = p.a.Busy);
                          const t = this.bucket.get(h.i),
                            s = t.length;
                          (await this.logWriter.write(
                            t,
                            this.metaWriter.metas,
                            this.metaWriter.getSessionLineId
                          ))
                            ? (await this.metaWriter.flush(),
                              this.bucket.removeFirst(s - t.length))
                            : g.a.error(
                                `[ZLL]: flush failed: ${t.length}/${s}`
                              ),
                            (this.status = p.a.Idle),
                            h.m &&
                              g.a.log(
                                `FLUSHED: ${
                                  s - t.length
                                }/${s} logs => ${this.logWriter.getPath()}. TOOK: ${
                                  Date.now() - e
                                }ms`
                              );
                        }
                        async init() {
                          const e = await this.metaWriter.init();
                          await this.logWriter.init(e);
                        }
                      })
                    ) || r)
                ) || r)
            ) || r)
        ) || r;
      n.ModuleContainer.registerSingleton(i.c, b);
    },
    DWs9: function (e, t, s) {
      "use strict";
      s.d(t, "b", function () {
        return n;
      }),
        s.d(t, "a", function () {
          return i;
        });
      var r = s("jDHv");
      const n = Object(r.define)("physical-text-writer"),
        i = Object(r.define)("physical-bin-writer");
    },
    EmOc: function (e, t, s) {
      "use strict";
      var r,
        n = s("jDHv"),
        i = s("jGDt"),
        a = s("igA5"),
        o = s("PLj1"),
        c = s("KRcn"),
        l = s("7FSS"),
        d = s("i15Q"),
        u = s("1pet");
      let h =
        Object(n.injectable)()(
          (r =
            Reflect.metadata(
              "design:type",
              Function
            )(
              (r =
                Reflect.metadata(
                  "design:paramtypes",
                  []
                )(
                  (r = class extends d.a {
                    constructor() {
                      super();
                      const e = Object(c.a)();
                      if (o.a.includes(e)) this._enableConsole = !1;
                      else {
                        var t;
                        const e =
                          null === (t = a.a.getInstance()) || void 0 === t
                            ? void 0
                            : t.getItem(
                                u.ZLoggerLocalStorageKeys.RENDERER_CONSOLE_MODE
                              );
                        this._enableConsole = "true" === e || !1;
                      }
                      l.a.log(
                        "[ZLL]: Console logging",
                        this._enableConsole ? "enabled" : "disabled"
                      );
                    }
                    enableConsole() {
                      l.a.log("[ZLL]: Console logging enabled"),
                        (this._enableConsole = !0);
                      const e = Object(c.a)();
                      var t;
                      o.a.includes(e) ||
                        null === (t = a.a.getInstance()) ||
                        void 0 === t ||
                        t.setItem(
                          u.ZLoggerLocalStorageKeys.RENDERER_CONSOLE_MODE,
                          "true"
                        );
                    }
                    disableConsole() {
                      l.a.log("[ZLL]: Console logging disabled"),
                        (this._enableConsole = !1);
                      const e = Object(c.a)();
                      var t;
                      o.a.includes(e) ||
                        null === (t = a.a.getInstance()) ||
                        void 0 === t ||
                        t.setItem(
                          u.ZLoggerLocalStorageKeys.RENDERER_CONSOLE_MODE,
                          "false"
                        );
                    }
                  })
                ) || r)
            ) || r)
        ) || r;
      n.ModuleContainer.registerSingleton(i.a, h);
    },
    HPcM: function (e, t, s) {
      "use strict";
      s.d(t, "b", function () {
        return n;
      }),
        s.d(t, "a", function () {
          return i;
        });
      var r = s("jDHv");
      const n = Object(r.define)("zlog-sentry-bucket"),
        i = Object(r.define)("zlog-regular-bucket");
    },
    K8kB: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return n;
      });
      var r = s("jDHv");
      const n = Object(r.define)("zlog-write-scheduler");
    },
    KdAX: function (e, t, s) {
      "use strict";
      var r = s("jDHv"),
        n = s("W8fB"),
        i = s("UJDs"),
        a = s("7FSS"),
        o = (s("j6JD"), s("VTBJ"));
      const c = s("4JQ2"),
        l = {
          intro: (e) => l.eol(e),
          info: (e) => e,
          debug: (e) => e,
          warning: (e) => e,
          error: (e) => e,
          placeholder: (e) => e,
          tick: (e) => e,
          header: (e) => c.green(e),
          sourcemap: (e) => c.gray(e),
          level: (e) => e,
          bold: (e) => c.bold(e),
          eol: (e) => e + "\n\n",
        },
        d =
          (Object(o.a)(
            Object(o.a)({}, l),
            {},
            {
              intro: (e) => l.eol(c.bgWhite.black(e)),
              info: (e) => c.white(e),
              debug: (e) => c.blue(e),
              warning: (e) => c.yellow(e),
              error: (e) => c.red(e),
              tick: (e) => c.black.bgWhite.bold(` ${e} `),
              header: (e) => e,
            }
          ),
          l);
      s("CDcE");
      const u = { display: !0, style: "font-size: 11px; color: gray" },
        h = {
          display: !1,
          style: "font-size: 11px; color: gray; margin-bottom: 8px",
        };
      function p({ lineMeta: e, template: t, args: s }) {
        if ("number" == typeof t)
          return (
            "Error: expected template as string. Got number?! [" +
            e.id1 +
            ":" +
            e.id2 +
            "]"
          );
        const r = [e.module, e.features.join("/")]
          .map((e) => e || "?")
          .join("|");
        let n = s.map((e) =>
          (function (e) {
            let t = e;
            if ("function" == typeof e)
              try {
                t = e();
              } catch (s) {
                a.a.error(
                  "ZLogSanitizer: failed to exec func. Please make sure your func executable" +
                    s
                ),
                  (t = e.toString());
              }
            return t;
          })(e)
        );
        1 === n.length &&
          1 === s.length &&
          "function" == typeof s[0] &&
          Array.isArray(n[0]) &&
          (n = n[0]);
        const i = (function (e, t) {
            if (null === e) return "";
            const s = "{}";
            let r = 0;
            for (; -1 !== e.search(s) && r < t.length; )
              switch (typeof t[r++]) {
                case "number":
                  e = e.replace(s, "%d");
                  break;
                case "string":
                default:
                  e = e.replace(s, "%s");
                  break;
                case "object":
                  e = e.replace(s, "%o");
              }
            return e;
          })(t, n).trim(),
          o =
            (e.id1.toString().substring(e.id1.toString().indexOf("src")),
            e.id2,
            ""),
          c = [];
        return (
          u.display && r.trim() && c.push(d.sourcemap(r.trim()) + "\n"),
          h.display && o.trim() && c.push(d.sourcemap(o) + "\n"),
          i.trim() && c.push(i.trim()),
          n.length > 0 ? (n.unshift(c.join(" ")), n) : [c.join(" ")]
        );
      }
      var g;
      let m =
        Object(r.injectable)()(
          (g = class {
            write(e) {
              const t = p(e);
              switch (e.lineMeta.level) {
                case i.b.info:
                  a.a.log.apply(null, t);
                  break;
                case i.b.warn:
                  a.a.warn.apply(null, t);
                  break;
                case i.b.debug:
                  a.a.debug.apply(null, t);
                  break;
                case i.b.error:
                  a.a.error.apply(null, t);
                  break;
                default:
                  a.a.log.apply(null, t);
              }
            }
          })
        ) || g;
      r.ModuleContainer.registerSingleton(n.a, m);
    },
    Lq8m: function (e, t, s) {
      "use strict";
      var r = s("rePB"),
        n = s("jDHv"),
        i = s("Uzj0"),
        a = s("Mgpg"),
        o = s("wH4e");
      function c(e) {
        let t = {};
        return async (...s) => {
          const r = s.length ? s.join("-") : "";
          if (!t[r]) return (t[r] = !0), e(...s);
        };
      }
      class l {
        constructor(e) {
          (this.executor = e),
            Object(r.a)(this, "resolve", () => {}),
            Object(r.a)(this, "reject", () => {});
        }
        execute() {
          this.executor().then(this.resolve).catch(this.reject);
        }
        getResult() {
          return new Promise((e, t) => {
            (this.resolve = e), (this.reject = t);
          });
        }
      }
      var d = s("TTNl"),
        u = s("JMlY"),
        h = s("ipeT");
      class p {
        constructor(e, t, s) {
          (this.databaseName = e),
            (this.databaseSchema = t),
            Object(r.a)(this, "numOfActiveQueries", 0),
            Object(r.a)(this, "pendingQueries", []),
            Object(r.a)(this, "pending", !1),
            Object(r.a)(this, "idleListeners", []),
            Object(r.a)(this, "_engine", null);
          const n = i.c.map(
            t,
            (t, r) =>
              new h.a(e, r, o.NO_TRANSACTION_ID, this.doQuery.bind(this), s)
          );
          Object.entries(n).forEach(([e, t]) => {
            Object.defineProperty(this, e, { value: t, writable: !1 });
          }),
            Object.defineProperty(this, "runTransaction", {
              value: this.runTransaction.bind(
                this,
                this.databaseName,
                this.databaseSchema
              ),
            }),
            (this.closeThisDatabase = c(this.closeThisDatabase.bind(this))),
            (this.deleteThisDatabase = c(this.deleteThisDatabase.bind(this)));
        }
        get engine() {
          return (
            this._engine || (this._engine = n.ModuleContainer.resolve(d.a)),
            this._engine
          );
        }
        get isIdle() {
          return 0 === this.numOfActiveQueries;
        }
        dispatchIdleEvent() {
          this.idleListeners.forEach((e) => e()), (this.idleListeners = []);
        }
        addIdleListenerOnce(e) {
          this.isIdle ? e() : this.idleListeners.push(e);
        }
        stop() {
          this.pending = !0;
        }
        resume() {
          this.pendingQueries.forEach((e) => {
            e.execute();
          }),
            (this.pendingQueries = []),
            (this.pending = !1);
        }
        waitUntilIdle() {
          return new Promise((e) => {
            this.addIdleListenerOnce(() => e());
          });
        }
        trapIdleTracking(e) {
          return (
            (this.numOfActiveQueries += 1),
            e.finally(() => {
              (this.numOfActiveQueries -= 1),
                this.isIdle && this.dispatchIdleEvent();
            })
          );
        }
        doQuery(e) {
          const t = () => this.trapIdleTracking(this.engine.do(e));
          if (this.pending) {
            const e = new l(() => t());
            return this.pendingQueries.push(e), e.getResult();
          }
          return t();
        }
        async closeThisDatabase() {
          this.stop(), await this.waitUntilIdle();
          const e = n.ModuleContainer.resolve(d.a);
          await e.closeDatabase(this.databaseName), this.resume();
        }
        async deleteThisDatabase() {
          this.stop(), await this.waitUntilIdle();
          const e = n.ModuleContainer.resolve(d.a);
          await e.deleteDatabase(this.databaseName), this.resume();
        }
        runTransaction(e, t, s, r, i = o.TransactionMode.READWRITE) {
          const a = n.ModuleContainer.resolve(u.a),
            c = this.doQuery.bind(this);
          return new Promise((n, l) => {
            try {
              !(async function (n, l) {
                const d = s.map((e) => ("string" == typeof e ? e : e.name)),
                  u = await a.beginTransaction(e, d, i),
                  p = d.map((s) => {
                    if (!t[s]) throw new o.MissingTableConfigError(s);
                    const r = t[s];
                    return new h.a(e, r, u.id, c);
                  });
                await r(p),
                  setImmediate(() => {
                    a.commitTransaction(u.id).then(n).catch(l);
                  });
              })(n, l);
            } catch (d) {
              l(d);
            }
          });
        }
      }
      var g,
        m = s("pjo1");
      let b =
        n.ModuleContainer.injectable()(
          (g =
            (function (e, t) {
              return n.ModuleContainer.inject(a.ZLoggerFactory)(e, void 0, 0);
            })(
              (g =
                Reflect.metadata(
                  "design:type",
                  Function
                )(
                  (g =
                    Reflect.metadata("design:paramtypes", [
                      void 0 === a.ZLoggerFactory ? Object : a.ZLoggerFactory,
                    ])(
                      (g = class {
                        constructor(e) {
                          (this.loggerFactory = e),
                            Object(r.a)(this, "logger", void 0),
                            (this.logger = this.loggerFactory.createZLogger(
                              "db",
                              ["client"]
                            ));
                        }
                        createQueryBuilder(e) {
                          const t = i.c.map(e, (e, t) =>
                              this.createBuilder(e, t)
                            ),
                            s = Object.keys(e);
                          return (
                            (t.deleteAllDatabases = c(async () => {
                              const e = s.map((e) => t[e].deleteThisDatabase());
                              await Promise.all(e);
                            })),
                            (t.closeAllDatabases = c(async () => {
                              const e = s.map((e) => t[e].closeThisDatabase());
                              await Promise.all(e);
                            })),
                            t
                          );
                        }
                        createBuilder(e, t, s) {
                          return new p(e, t, s);
                        }
                      })
                    ) || g)
                ) || g)
            ) || g)
        ) || g;
      n.ModuleContainer.registerSingleton(m.a, b);
    },
    TMLr: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return n;
      });
      var r = s("jDHv");
      const n = Object(r.define)("physical-module-writer");
    },
    UJDs: function (e, t, s) {
      "use strict";
      let r;
      s.d(t, "b", function () {
        return r;
      }),
        s.d(t, "a", function () {
          return n;
        }),
        (function (e) {
          (e[(e.info = 0)] = "info"),
            (e[(e.error = 1)] = "error"),
            (e[(e.warn = 2)] = "warn"),
            (e[(e.debug = 3)] = "debug"),
            (e[(e.critical = 4)] = "critical");
        })(r || (r = {}));
      const n = {
        [r.info]: "info",
        [r.error]: "error",
        [r.warn]: "warn",
        [r.debug]: "debug",
        [r.critical]: "critical",
      };
    },
    W8fB: function (e, t, s) {
      "use strict";
      s.d(t, "b", function () {
        return n;
      }),
        s.d(t, "a", function () {
          return i;
        }),
        s.d(t, "c", function () {
          return a;
        });
      var r = s("jDHv");
      const n = Object(r.define)("sen-log-writer"),
        i = Object(r.define)("console-log-writer"),
        a = Object(r.define)("zlog-writer");
    },
    XuBa: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return n;
      });
      const r = s("NFKh");
      class n {
        static encrypt(e) {
          return (
            r.AES.encrypt(e, "5dbe084b7eedNWjRref04e2rDxs01lwH", {
              iv: "7eb5dbe084b7eedeef04e2622d46ba00",
              mode: r.mode.ECB,
              padding: r.pad.Pkcs7,
            }) + ""
          );
        }
        static decrypt(e) {
          return r.AES.decrypt(e, "5dbe084b7eedNWjRref04e2rDxs01lwH", {
            keySize: 16,
            iv: "7eb5dbe084b7eedeef04e2622d46ba00",
            mode: r.mode.ECB,
            padding: r.pad.Pkcs7,
          }).toString(r.enc.Utf8);
        }
      }
    },
    Y41u: function (e, t, s) {
      "use strict";
      let r;
      s.d(t, "d", function () {
        return r;
      }),
        s.d(t, "c", function () {
          return n;
        }),
        s.d(t, "a", function () {
          return i;
        }),
        s.d(t, "b", function () {
          return a;
        }),
        (function (e) {
          (e.RegLogBucketStatus = "RegLogBucketStatus"),
            (e.SentryLogBucketStatus = "SentryLogBucketStatus"),
            (e.WriteSchedulerRequestFlush = "WriteSchedulerRequestFlush"),
            (e.WriterStatus = "WriterStatus"),
            (e.LogBucketRequestFlush = "LogBucketRequestFlush");
        })(r || (r = {}));
      class n {
        constructor(e, t) {
          (this.type = e), (this.payload = t);
        }
      }
      class i {
        constructor(e) {
          this.type = e;
        }
      }
      class a {
        constructor(e, t) {
          (this.type = e), (this.payload = t);
        }
      }
    },
    Yl80: function (e, t, s) {
      "use strict";
      let r;
      s.d(t, "b", function () {
        return r;
      }),
        s.d(t, "a", function () {
          return n;
        }),
        (function (e) {
          (e.Binary = "zlog"), (e.Text = "log");
        })(r || (r = {}));
      const n = {
        [r.Binary]: { logExt: ".zlog", metaExt: ".meta", moduleExt: ".module" },
        [r.Text]: { logExt: ".log", metaExt: ".dmeta", moduleExt: ".module" },
      };
    },
    YrRS: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return o;
      });
      var r = s("jDHv"),
        n = s("PLj1"),
        i = s("KRcn"),
        a = s("5l/R");
      function o() {
        const e = Object(i.a)();
        n.a.includes(e) || r.ModuleContainer.resolve(a.a).setupWriters();
      }
    },
    c0KM: function (e, t, s) {
      "use strict";
      var r = s("jDHv"),
        n = s("TMLr"),
        i = s("rePB"),
        a = s("kMf4"),
        o = s("6rD8"),
        c = s("7FSS"),
        l = s("XuBa"),
        d = s("75pU"),
        u = s.n(d),
        h = s("mw/K"),
        p = s.n(h);
      class g extends a.a {
        constructor(...e) {
          super(...e),
            Object(i.a)(this, "modules", { size: 0 }),
            Object(i.a)(this, "_computedMap", new Map()),
            Object(i.a)(this, "_updateRequired", !0),
            Object(i.a)(
              this,
              "get",
              u()((e) => {
                const t = "object" == typeof e ? JSON.stringify(e) : e;
                if (this._computedMap.has(t)) return this._computedMap.get(t);
                let s;
                const r = l.a.encrypt(t);
                return this.modules &&
                  Object.prototype.hasOwnProperty.call(this.modules, r)
                  ? ((s = this.modules[r]), this._computedMap.set(t, s), s)
                  : ((s =
                      (null === (n = this.modules) || void 0 === n
                        ? void 0
                        : n.size) || 0),
                    s++,
                    (this.modules.size = s),
                    (this.modules[r] = s),
                    this._computedMap.set(t, s),
                    (this._updateRequired = !0),
                    s);
                var n;
              })
            );
        }
        async init() {
          (this.status = o.a.Init),
            await this.loadData(),
            (this.status = o.a.Idle);
        }
        async flush() {
          if (this.status === o.a.Idle && this._updateRequired) {
            this.status = o.a.Busy;
            try {
              await this.writeData(
                this.modulePath,
                Buffer.from(JSON.stringify(this.modules))
              ),
                (this._updateRequired = !1);
            } catch (e) {
              c.a.error("failed to record module data", e);
            }
            this.status = o.a.Idle;
          }
        }
        loadData() {
          return new Promise((e, t) => {
            p.a.existsSync(this.modulePath)
              ? p.a.readFile(this.modulePath, (s, r) => {
                  if (s) return t(s);
                  try {
                    const e = JSON.parse(r.toString());
                    this.modules = e || { size: 0 };
                  } catch {
                    this.modules = { size: 0 };
                  }
                  e();
                })
              : ((this.modules = { size: 0 }), e());
          });
        }
      }
      r.ModuleContainer.registerSingleton(n.a, g);
    },
    cF85: function (e, t, s) {
      "use strict";
      var r = s("jDHv"),
        n = s("x9oK"),
        i = s("rkiK"),
        a = s("YEoC"),
        o = s("PmZf"),
        c = s("LzQZ"),
        l = s("rvru"),
        d = s("AH6j");
      let u;
      !(function (e) {
        e.AbnormallyClose = "abnormally-closed";
      })(u || (u = {}));
      class h extends d.a {
        constructor() {
          super(u.AbnormallyClose);
        }
      }
      var p = s("0EaC"),
        g = s("DI/x");
      function m(e) {
        return new Promise((t, s) => {
          (e.onerror = () => s(e.error)), (e.onsuccess = () => t(e.result));
        });
      }
      function b(e, t, s) {
        return `Invalid filter value for this method: '${e}' - Expected type: '${t}' - Actual type: '${s}'`;
      }
      function f(e, t) {
        const s = Object(p.createQueryTester)(t, {
          operations: {
            AND: p.$and,
            OR: p.$or,
            NOT: p.$not,
            gt: p.$gt,
            gte: p.$gte,
            lt: p.$lt,
            lte: p.$lte,
            in: p.$in,
            notIn: p.$nin,
            eq: p.$eq,
            notEq: p.$ne,
            contains(e, t, s) {
              if ("string" != typeof e) {
                const t = b("contains", "string", typeof e);
                throw new g.l(t);
              }
              return Object(p.createEqualsOperation)(
                (t) => "string" == typeof t && t.includes(e),
                t,
                s
              );
            },
            startsWith(e, t, s) {
              if ("string" != typeof e) {
                const t = b("startsWith", "string", typeof e);
                throw new g.l(t);
              }
              return Object(p.createEqualsOperation)(
                (t) => "string" == typeof t && t.startsWith(e),
                t,
                s
              );
            },
            endsWith(e, t, s) {
              if ("string" != typeof e) {
                const t = b("endsWith", "string", typeof e);
                throw new g.l(t);
              }
              return Object(p.createEqualsOperation)(
                (t) => "string" == typeof t && t.endsWith(e),
                t,
                s
              );
            },
          },
        });
        return s(e);
      }
      var y = s("rePB");
      class v extends d.b {
        constructor(e) {
          super(),
            (this.connectionFactory = e),
            Object(y.a)(this, "connection", null),
            Object(y.a)(this, "isManuallyClose", !1),
            Object(y.a)(this, "onAbnormallyCloseListeners", []);
        }
        get hasActiveConnection() {
          return null !== this.connection;
        }
        async getName() {
          return (await this.getConnection()).name;
        }
        async getObjectStoreNames() {
          return (await this.getConnection()).objectStoreNames;
        }
        async getVersion() {
          return (await this.getConnection()).version;
        }
        async getConnection(e = !1) {
          const t = async () => {
            let e = null;
            try {
              e = await this.connectionFactory();
            } catch (t) {
              let e = t;
              throw (
                ("VersionError" === t.name && (e = new g.k(t.message)),
                this.dispatchEvent(new o.d(e)),
                t)
              );
            }
            return (
              (e.onclose = () => {
                this.dispatchEvent(new h());
              }),
              e
            );
          };
          if (this.connection) {
            if (e) {
              if (this.isManuallyClose)
                throw new g.d(
                  "The database connection has manually been closed!",
                  ["idb"]
                );
              const e = this.connection;
              this.onAbnormallyCloseListeners.forEach((t) => {
                e.removeEventListener("close", t);
              }),
                (this.connection = await t());
            }
          } else this.connection = await t();
          return this.connection;
        }
        async getTransaction(e, t) {
          let s = await this.getConnection(),
            r = null;
          try {
            r = s.transaction(e, t);
          } catch (n) {
            if (!n || ("InvalidStateError" !== n.name && 11 !== n.code))
              throw n;
            (s = await this.getConnection(!0)), (r = s.transaction(e, t));
          }
          return r;
        }
        close() {
          this.connection &&
            !this.isManuallyClose &&
            (this.connection.close(),
            (this.connection = null),
            (this.isManuallyClose = !0));
        }
      }
      var j = s("bSii"),
        O = s("3wcW");
      class w extends O.a {
        constructor(e, t, s) {
          super(e, t, !1),
            (this._transaction = s),
            Object(y.a)(this, "allowMissingTable", !1);
        }
        async delete() {}
        async close() {
          this.instance && this.instance.close();
        }
        async _getTables() {
          return Array.from(this.instance.objectStoreNames);
        }
        async _createTable(e) {
          const t = this.instance;
          let s = {};
          if (e.isNonFieldlikeEntity) s = { autoIncrement: !0 };
          else {
            const t = e.primaryIndex;
            s = {
              keyPath: Object(j.a)(t.getRealFields()),
              autoIncrement: t.autoIncrement,
            };
          }
          if (t.objectStoreNames.contains(e.tableName)) return;
          const r = t.createObjectStore(e.tableName, s);
          Object.values(e.indices).map((e) => {
            if ("primary" === e.name) return;
            const t = e.fields.map((e) =>
              "object" != typeof e
                ? e
                : "length" === e.type
                ? `${e.field.toString()}.length`
                : e.field
            );
            r.createIndex(e.name, Object(j.a)(t), { unique: e.unique });
          });
        }
        async _createIndex(e, t) {
          const s = this._transaction;
          if (!s)
            throw new g.u(
              `Can't create '${t}' due to unavailable IDBTransaction transaction!`
            );
          const r = s.objectStore(e.tableName),
            n = e.getIndex(t),
            i = n.fields.map((e) =>
              "object" != typeof e
                ? e
                : "length" === e.type
                ? `${e.field.toString()}.length`
                : e.field
            );
          var a;
          r.createIndex(t, 1 === (a = i).length ? a[0] : a, {
            unique: n.unique,
          });
        }
        _addColumns(e, t) {
          return Promise.resolve();
        }
      }
      var E = s("VTBJ"),
        _ = s("X2RP");
      class D extends _.a {
        constructor(e, t) {
          super(), (this.instance = e), (this.transactionManager = t);
        }
        getExecutorName() {
          return "idb";
        }
        async clear({ transaction: e, meta: t }) {
          const s = t.tableConfig;
          return m((await this.getStore(e, s, a.f.READWRITE)).clear());
        }
        async get({ transaction: e, meta: t, params: s }) {
          const r = s.index,
            n = s.key,
            i = t.tableConfig,
            a = await this.getStoreOrIndex(e, i, r),
            o = this.validateKey(i, r, n),
            c = a.get(o);
          return this.getResult(i, c);
        }
        async getMulti({ transaction: e, meta: t, params: s }) {
          const r = s.index,
            n = s.keys,
            i = t.tableConfig,
            a = await this.getStoreOrIndex(e, i, r),
            o = n.map((e) => {
              const t = this.validateKey(i, r, e),
                s = a.get(t);
              return this.getResult(i, s);
            });
          return Promise.all(o);
        }
        getAll(e) {
          return e.params.direction === a.b.PREV ||
            e.params.direction === a.b.PREV_UNIQUE ||
            e.params.filter ||
            e.params.predicate ||
            e.params.aborted ||
            e.params.onProgress ||
            e.params.onValue
            ? this.getAllByCursor(e)
            : this.getAllWithoutFilter(e);
        }
        async getAllKeyByCursor({ meta: e, params: t, transaction: s }) {
          const r = e.tableConfig,
            n = t.range && this.toIDBKeyRange(t.range),
            i = (await this.getStoreOrIndex(s, r, t.index)).openKeyCursor(
              n,
              t.direction
            );
          return null === i
            ? []
            : new Promise((e, s) => {
                const r = [];
                (i.onsuccess = () => {
                  const s = i.result;
                  if (null === s || null === s.primaryKey) return void e(r);
                  const n = s.primaryKey;
                  r.push(n);
                  r.length >= t.limit ? e(r) : s.continue();
                }),
                  (i.onerror = () => {
                    s(i.error);
                  });
              });
        }
        async getAllKey(e) {
          if (
            e.params.direction === a.b.PREV ||
            e.params.direction === a.b.PREV_UNIQUE
          )
            return this.getAllKeyByCursor(e);
          {
            const { meta: t, params: s, transaction: r } = e,
              n = t.tableConfig,
              i = s.range && this.toIDBKeyRange(s.range);
            return m(
              (await this.getStoreOrIndex(r, n, s.index)).getAllKeys(i, s.limit)
            );
          }
        }
        async getAndUpdate(e) {
          const { transaction: t, params: s, meta: r } = e,
            n = s.index,
            i = s.updater,
            o = s.key,
            c = r.tableConfig,
            l = await this.getStoreOrIndex(t, c, n),
            d = this.validateKey(c, n, o),
            u = l.get(d),
            h = await this.getResult(c, u);
          if (void 0 === h) return;
          const p = await this.getStore(t, c, a.f.READWRITE),
            b = await i(h || {});
          if (!b && !1 !== s.ignoreNotFound)
            throw new g.f("Update undefined document");
          const f = this.toDB(c, b),
            y = p.put(f);
          return await m(y), b;
        }
        insert(e) {
          return e.params.replace
            ? this._insertOrReplace(e)
            : this._insertIfNotExist(e);
        }
        insertMulti(e) {
          return e.params.replace
            ? this.insertOrReplaceMulti(e)
            : this.insertIfNotExistMulti(e);
        }
        async update(e) {
          const { transaction: t, meta: s, params: r } = e,
            n = s.tableConfig,
            i = await this.getStore(t, n, a.f.READWRITE);
          return this._update(
            i,
            this.validateKey(n, "primary", r.key),
            r.attributes,
            this.toDB(n, r.value, !1),
            r.ignoreNotFound
          ).then((t) => (t ? this.fromDB(e.meta.tableConfig, t) : t));
        }
        async updateMulti(e) {
          const { transaction: t, meta: s, params: r } = e,
            n = s.tableConfig,
            i = await this.getStore(t, n, a.f.READWRITE),
            o = [],
            c = [],
            l = r.patches.map((t) =>
              this._update(
                i,
                this.validateKey(n, "primary", t.key),
                t.attributes,
                this.toDB(n, t.value, !1),
                r.ignoreNotFound
              )
                .then((t) => (t ? this.fromDB(e.meta.tableConfig, t) : t))
                .then((e) => {
                  e ? o.push(e) : c.push(e);
                })
            );
          return Promise.all(l).then(() => ({ success: o, fail: c }));
        }
        async delete({ transaction: e, meta: t, params: s }) {
          const r = t.tableConfig,
            n = (await this.getStore(e, r, a.f.READWRITE)).delete(
              this.validateKey(r, "primary", s.key)
            );
          return this.checkReqSuccessOrFail(n);
        }
        async deleteMulti({ transaction: e, meta: t, params: s }) {
          const r = t.tableConfig,
            n = await this.getStore(e, r, a.f.READWRITE),
            i = { success: [], fail: [] },
            o = s.keys.map((e) =>
              this.checkReqSuccessOrFail(n.delete(e)).then((t) => {
                t ? i.success.push(e) : i.fail.push(e);
              })
            );
          return await Promise.all(o), i;
        }
        async count({ transaction: e, meta: t, params: s }) {
          const r = t.tableConfig,
            n = this.toIDBKeyRange(s.range);
          return m((await this.getStoreOrIndex(e, r, s.index)).count(n));
        }
        async findAndDelete({ transaction: e, meta: t, params: s }) {
          const r = t.tableConfig,
            { filter: n } = s,
            i = n ? (e) => f(e, n) : null,
            o = this.toIDBKeyRange(s.range),
            c = (await this.getStore(e, r, a.f.READWRITE)).openCursor(o);
          return null === c
            ? 0
            : new Promise((e, t) => {
                let s = 0,
                  n = !1;
                (c.onsuccess = () => {
                  if (n) return;
                  const t = c.result;
                  if (null === t || null === t.value)
                    return (n = !0), void e(s);
                  const a = this.fromDB(r, t.value);
                  (i && !i(a)) || (t.delete(), (s += 1), !n)
                    ? t.continue()
                    : e(s);
                }),
                  (c.onerror = () => {
                    t(c.error);
                  });
              });
        }
        async getAllByCursor({
          transaction: e,
          meta: t,
          params: s,
          deferrer: r,
        }) {
          const n = t.tableConfig,
            {
              onProgress: i,
              advance: a,
              stepCount: o,
              onValue: c,
              predicate: l,
              filter: d,
            } = s;
          if (l && d) {
            const e = new g.l(
              "Query using both 'filter' and 'predicate' is not allowed!"
            );
            return void (null == r || r.reject(e));
          }
          let u = null;
          (l || d) && (u = l || ((e) => f(e, d)));
          const h = await this.getStoreOrIndex(e, n, s.index),
            p = this.toIDBKeyRange(s.range),
            m = h.openCursor(p, s.direction);
          return null === m
            ? []
            : new Promise((e, t) => {
                const r = [];
                let l = !1,
                  d = !!a;
                (m.onsuccess = () => {
                  if (l) return;
                  const t = m.result;
                  if (null === t || null === t.value)
                    return (l = !0), void e(r);
                  if (d && a) return (d = !1), void t.advance(a);
                  const h = this.fromDB(n, t.value);
                  c && c(h),
                    (u && !u(h)) ||
                    (r.push(h),
                    i && i(r, h),
                    (l = r.length >= s.limit),
                    l || (l = !!s.aborted && s.aborted(r, h)),
                    !l)
                      ? (o && t.advance(o), t.continue())
                      : e(r);
                }),
                  (m.onerror = () => {
                    t(m.error);
                  });
              });
        }
        async getAllWithoutFilter({ transaction: e, meta: t, params: s }) {
          const r = t.tableConfig,
            n = this.toIDBKeyRange(s.range),
            i = (await this.getStoreOrIndex(e, r, s.index)).getAll(n, s.limit);
          return this.getResult(r, i);
        }
        async getStoreOrIndex(e, t, s) {
          const r = await this.getStore(e, t, a.f.READONLY);
          if ("primary" === s) return r;
          const n = t.getIndex(s);
          if (!n) throw new g.o(s);
          return r.index(n.name);
        }
        async _insertIfNotExist(e) {
          const { transaction: t, meta: s, params: r } = e,
            n = s.tableConfig,
            i = await this.getTransaction(t, n, a.f.READWRITE),
            o = i.objectStore(n.tableName);
          let c = null;
          if (!n.isNonFieldlikeEntity) {
            const e = n.primaryIndex;
            if (!e.autoIncrement) {
              const t = Object(j.a)(e.createKey(r.value)),
                s = o.get(t);
              c = await new Promise((e) => {
                (s.onsuccess = () => {
                  const t = this.fromDB(n, s.result);
                  e(t);
                }),
                  (s.onerror = () => {
                    e(null);
                  });
              });
            }
          }
          if (c) return Promise.resolve(c);
          {
            const e = o.add(this.toDB(n, r.value));
            return t
              ? m(e).then(() => r.value)
              : new Promise((t, s) => {
                  (i.oncomplete = () => {
                    t(r.value);
                  }),
                    (i.onerror = () => {
                      var n;
                      0 ===
                      (null === (n = e.error) || void 0 === n ? void 0 : n.code)
                        ? t(r.value)
                        : s(e.error);
                    });
                });
          }
        }
        async _insertOrReplace(e) {
          const { transaction: t, meta: s, params: r } = e,
            n = s.tableConfig,
            i = await this.getTransaction(t, n, a.f.READWRITE),
            o = i.objectStore(n.tableName).put(this.toDB(n, r.value));
          return t
            ? m(o).then(() => r.value)
            : new Promise((e, t) => {
                (i.oncomplete = () => {
                  e(r.value);
                }),
                  (i.onerror = () => {
                    t(o.error);
                  });
              });
        }
        async insertIfNotExistMulti(e) {
          const { transaction: t, meta: s, params: r } = e,
            n = s.tableConfig,
            i = await this.getTransaction(t, n, a.f.READWRITE),
            o = i.objectStore(n.tableName),
            c = [],
            l = [],
            d = r.values.map(async (e) => {
              let t = !1;
              if (!n.isNonFieldlikeEntity) {
                const s = n.primaryIndex;
                if (!s.autoIncrement) {
                  const r = Object(j.a)(s.createKey(e)),
                    i = o.get(r);
                  t = await new Promise((e) => {
                    (i.onsuccess = () => {
                      const t = this.fromDB(n, i.result);
                      let s = !1;
                      void 0 !== t && (c.push(t), (s = !0)), e(s);
                    }),
                      (i.onerror = () => {
                        e(!1);
                      });
                  });
                }
              }
              if (t) return;
              const s = o.add(this.toDB(n, e));
              return this.checkReqSuccessOrFail(s)
                .then((t) => {
                  if (t) {
                    let t = e;
                    if (!n.isNonFieldlikeEntity) {
                      const { primaryIndex: e } = n,
                        r = e.fields[0].field;
                      Object.prototype.hasOwnProperty.call(t, r) ||
                        (t[r] = s.result);
                    }
                    c.push(t);
                  } else l.push(e);
                })
                .catch(() => {
                  l.push(e);
                });
            });
          return t
            ? Promise.all(d).then(() => ({ success: c, fail: l }))
            : new Promise((e) => {
                (i.oncomplete = () => {
                  e({ success: c, fail: l });
                }),
                  (i.onerror = () => {
                    e({ success: c, fail: l });
                  });
              });
        }
        async insertOrReplaceMulti(e) {
          const { transaction: t, meta: s, params: r } = e,
            n = s.tableConfig,
            i = await this.getTransaction(t, n, a.f.READWRITE),
            o = i.objectStore(n.tableName),
            c = [],
            l = [],
            d = r.values.map((e) => {
              const t = o.put(this.toDB(n, e));
              return this.checkReqSuccessOrFail(t)
                .then(() => {
                  let s = e;
                  if (!n.isNonFieldlikeEntity) {
                    const { primaryIndex: e } = n,
                      r = e.fields[0].field;
                    Object.prototype.hasOwnProperty.call(s, r) ||
                      (s[r] = t.result);
                  }
                  c.push(s);
                })
                .catch(() => {
                  l.push(e);
                });
            });
          return t
            ? Promise.all(d).then(() => ({ success: c, fail: l }))
            : new Promise((e, t) => {
                (i.oncomplete = () => e({ success: c, fail: l })),
                  (i.onerror = () => e({ success: c, fail: l }));
              });
        }
        async _update(e, t, s, r, n) {
          const i = await m(e.get(t));
          if (!i) {
            if (n) return;
            throw new g.f("Update undefined document!");
          }
          return await m(e.put(s.reduce((e, t) => ((e[t] = r[t]), e), i))), i;
        }
        checkReqSuccessOrFail(e) {
          return m(e)
            .then(() => !0)
            .catch(() => !1);
        }
        getTransaction(e, t, s) {
          const r = t.tableName;
          if (e > 0) {
            const t = this.transactionManager.get(e);
            return Promise.resolve(t.instance);
          }
          return this.instance.getTransaction([r], s);
        }
        async getStore(e, t, s) {
          return (await this.getTransaction(e, t, s)).objectStore(t.tableName);
        }
        toIDBKeyRange(e) {
          if (e) {
            if (e.from && e.to)
              try {
                return IDBKeyRange.bound(
                  e.from,
                  e.to,
                  e.excludeFrom,
                  e.excludeTo
                );
              } catch (t) {
                throw t;
              }
            return e.from
              ? IDBKeyRange.lowerBound(e.from, e.excludeFrom)
              : e.to
              ? IDBKeyRange.upperBound(e.to, e.excludeTo)
              : void 0;
          }
        }
        getResult(e, t) {
          return m(t).then((t) => this.fromDB(e, t));
        }
        toDB(e, t, s = !0) {
          try {
            e.validate(t, s);
          } catch (i) {
            this.logger.zsymb(
              21,
              11062,
              3e4,
              "{}: {} (database={}, table={})",
              i.name,
              i.message,
              e.dbName,
              e.name
            );
          }
          const { isNonFieldlikeEntity: r } = e,
            n = e.getTransformConfigs(a.a.IDB);
          return (function (e) {
            if (0 === n.length) return e;
            const t = (e) => {
              if (r) return n.reduce((e, t) => t.toDB(e), e);
              {
                const t = Object(E.a)({}, e);
                return (
                  n.forEach((e) => {
                    e.toDB(t);
                  }),
                  t
                );
              }
            };
            return Array.isArray(e) ? e.map(t) : t(e);
          })((t = e.prepareValue(t, s, r)));
        }
        fromDB(e, t) {
          const s = e.getTransformConfigs(a.a.IDB);
          if (0 === s.length) return t;
          const r = (e) => (
            s.forEach((t) => {
              t.fromDB(e);
            }),
            e
          );
          return Array.isArray(t) ? t.map(r) : r(t);
        }
        validateKey(e, t, s) {
          if (!e.getIndex(t).validateKey(s))
            throw new g.l("The query key is invalid!");
          return s;
        }
      }
      class C {
        constructor(e, t) {
          (this.partition = e), (this.instance = t);
        }
        async beginTransaction(e) {
          try {
            const t = e.params.tables.map(
                (e) => this.partition.getTableConfig(e).tableName
              ),
              s = e.params.mode,
              r = await this.instance.getTransaction(t, s),
              n = e.transaction;
            e.deferrer.resolve(new L(n, r));
          } catch (t) {
            e.deferrer.reject(t);
          }
        }
      }
      class L {
        constructor(e, t) {
          (this.id = e),
            (this.instance = t),
            Object(y.a)(this, "error", null),
            Object(y.a)(this, "closed", void 0),
            Object(y.a)(this, "onCloseListeners", []),
            (this.closed = !1);
          const s = (e) => {
            (this.closed = !0),
              (this.error = e),
              this.onCloseListeners.forEach((t) => t(e));
          };
          t.addEventListener("complete", () => s(t.error)),
            t.addEventListener("abort", () => s(t.error)),
            t.addEventListener("error", () => s(t.error));
        }
        execute(e) {
          return e().catch((e) => {
            throw (this.instance.abort(), e);
          });
        }
        onClose(e) {
          this.onCloseListeners.push(e), this.closed && e(this.error);
        }
      }
      class P extends n.a {
        constructor(e, t, s, r, n, i) {
          super(e, t, s, r, n, i, {}),
            this.instance.addEventListener(o.a.UnexpectedError, (e) => {
              this.dispatchEvent(new o.d(e.error));
            }),
            this.instance.addEventListener(u.AbnormallyClose, () => {
              this.logger.zsymb(
                6,
                11056,
                3e4,
                "The database connection has abnormally closed!"
              );
            });
        }
        async doesDatabaseExist(e) {
          try {
            return (
              (
                await (function (e) {
                  const t = globalThis.indexedDB.open(e);
                  return new Promise((s, r) => {
                    (t.onupgradeneeded = function () {
                      var s;
                      null === (s = t.transaction) || void 0 === s || s.abort(),
                        r(new N(`No database whose name is ${e} exists`));
                    }),
                      (t.onsuccess = function () {
                        s(t.result);
                      }),
                      (t.onerror = function () {
                        r(t.error);
                      });
                  });
                })(e)
              ).close(),
              !0
            );
          } catch (t) {
            if (t.name === S) return !1;
            throw t;
          }
        }
        async deleteThisDatabase() {
          if (!(await this.doesDatabaseExist(this.fullName)))
            return void this.logger.zsymb(
              6,
              11056,
              30001,
              `Skip db deletion due to non-existence: '${this.fullName}'`
            );
          this.instance.close();
          const e = indexedDB.deleteDatabase(this.fullName),
            t = this.instance,
            s = this.fullName,
            r = this.logger;
          return (
            r.zsymb(
              6,
              11056,
              30002,
              `The database connection is manually closed due to database deletion: '${s}'`
            ),
            new Promise((n, i) => {
              (e.onsuccess = function () {
                r.zsymb(0, 11056, 30003, `Delete database sucessfully: '${s}'`),
                  n();
              }),
                (e.onblocked = function () {
                  t.close();
                }),
                (e.onerror = function () {
                  const t = e.error;
                  r.zsymb(
                    0,
                    11056,
                    30004,
                    `Failed to delete database: '${s}' - Error: ${t}`
                  ),
                    i(t);
                });
            })
          );
        }
        closeThisDatabase() {
          return this.instance.hasActiveConnection
            ? (this.instance.close(),
              this.logger.zsymb(
                6,
                11056,
                30005,
                `The database connection is manually closed due to manual database closing: '${this.fullName}'`
              ),
              new Promise((e) => {
                setTimeout(() => {
                  e();
                }, 1e4);
              }))
            : Promise.resolve();
        }
        static async factory(e, t) {
          const s = new v(async function () {
              const s = indexedDB.open(e, t.version);
              s.onupgradeneeded = async (e) => {
                if (null !== e.newVersion)
                  try {
                    const r = new w(t, s.result, s.transaction);
                    await r.upgrade(e.oldVersion, e.newVersion),
                      await r.validate();
                  } catch (r) {
                    throw (s.transaction.abort(), r);
                  }
              };
              const n = i.default.start(i.MetricName.db_ready),
                a = Date.now(),
                o = r.ModuleContainer.resolve(l.a),
                c = setTimeout(() => {
                  o.sendLongOpenRequestQos(e);
                }, 2e4),
                d = await m(s).catch((e) => {
                  throw (clearTimeout(c), e);
                }),
                u = Date.now();
              clearTimeout(c);
              const h = u - a;
              return (
                o.sendSuccessOpenDBDurationQos(e, a, h),
                n.end({ dbName: e }),
                (d.onversionchange = function (e) {
                  if (null === e.newVersion) {
                    e.target.close();
                  }
                }),
                d
              );
            }),
            n = r.ModuleContainer.resolve(c.a),
            o = new C(t, s),
            d = new D(s, n);
          return (
            t.tables.forEach((e) =>
              e.getTransformConfigs(a.a.IDB).forEach((e) => e.init(t.cipherKey))
            ),
            new P(t, e, n, s, d, o)
          );
        }
      }
      const S = "NonExistedDBError";
      class N extends Error {
        constructor(e) {
          super(e), (this.name = S);
        }
      }
      var B;
      let I =
        r.ModuleContainer.injectable()(
          (B = class {
            async createAdapter(e, t) {
              return P.factory(e, t);
            }
            async getExistedPartitionKeys(e) {
              return [];
            }
          })
        ) || B;
      r.ModuleContainer.registerSingleton(n.b, I);
    },
    cZjg: function (e, t, s) {
      "use strict";
      var r,
        n = s("jDHv"),
        i = s("5l/R"),
        a = s("rePB"),
        o = s("Y41u"),
        c = s("K8kB"),
        l = s("W8fB");
      let d =
        Object(n.injectable)()(
          (r =
            (function (e, t) {
              return Object(n.inject)(c.a)(e, void 0, 0);
            })(
              (r =
                (function (e, t) {
                  return Object(n.inject)(l.c)(e, void 0, 1);
                })(
                  (r =
                    (function (e, t) {
                      return Object(n.inject)(l.b)(e, void 0, 2);
                    })(
                      (r =
                        Reflect.metadata(
                          "design:type",
                          Function
                        )(
                          (r =
                            Reflect.metadata("design:paramtypes", [
                              void 0 === c.a ? Object : c.a,
                              void 0 === l.c ? Object : l.c,
                              void 0 === l.b ? Object : l.b,
                            ])(
                              (r = class {
                                constructor(e, t, s) {
                                  (this._writeScheduler = e),
                                    (this.zlogWriter = t),
                                    (this.senWriter = s),
                                    Object(a.a)(
                                      this,
                                      "_handleFlushRequest",
                                      () => {
                                        this.zlogWriter.flush();
                                      }
                                    ),
                                    Object(a.a)(
                                      this,
                                      "_handleWriterStatus",
                                      (e) => {}
                                    );
                                }
                                setupWriters() {
                                  this.zlogWriter.init(),
                                    this._writeScheduler.start(),
                                    this._listenEvents();
                                }
                                _listenEvents() {
                                  this._writeScheduler.addEventListener(
                                    o.d.WriteSchedulerRequestFlush,
                                    this._handleFlushRequest
                                  ),
                                    this.zlogWriter.addEventListener(
                                      o.d.WriterStatus,
                                      this._handleWriterStatus
                                    );
                                }
                              })
                            ) || r)
                        ) || r)
                    ) || r)
                ) || r)
            ) || r)
        ) || r;
      n.ModuleContainer.registerSingleton(i.a, d);
    },
    eVLP: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return n;
      });
      var r = s("jDHv");
      const n = Object(r.define)("physical-meta-writer");
    },
    ebA4: function (e, t, s) {
      "use strict";
      s.d(t, "f", function () {
        return l;
      }),
        s.d(t, "a", function () {
          return d;
        }),
        s.d(t, "d", function () {
          return u;
        }),
        s.d(t, "c", function () {
          return h;
        }),
        s.d(t, "b", function () {
          return p;
        }),
        s.d(t, "e", function () {
          return g;
        });
      var r = s("UJDs"),
        n = s("j6JD"),
        i = s("CDcE"),
        a = s("fsQs"),
        o = s("XuBa");
      const c = new TextEncoder();
      function l(e) {
        let t = e;
        if (Object(i.c)(t)) return (t.asset = o.a.encrypt(t.asset)), t;
        if (Object(i.b)(t)) return t.args;
        if ("function" == typeof t)
          try {
            t = e();
          } catch (s) {
            t = t.toString();
          }
        return (
          "object" == typeof t && (t = JSON.stringify(t, Object(i.a)())),
          "string" == typeof t &&
            (t = t.replace(/\r\n|\n|\t|\r/g, "").toString()),
          t
        );
      }
      function d(e, t, s) {
        const r = new DataView(s);
        for (let n = 0; n < s.byteLength; n++) e.setUint8(t + n, r.getUint8(n));
        return t + s.byteLength;
      }
      function u({ lineMeta: e, template: t, args: s }, o) {
        if ("number" == typeof t)
          throw new Error(
            "Error: expected template as string. Got number?! [" +
              e.id1 +
              ":" +
              e.id2 +
              "]"
          );
        const d = Object(n.a)(e.tick),
          u = [e.module, e.features.join("/")].filter((e) => e).join("|"),
          h = (function (e, t) {
            let s = [],
              r = -1;
            if (
              (t.forEach((e, t) => {
                (Object(i.b)(e) || Object(i.c)(e)) && (r = t), s.push(l(e));
              }),
              1 === s.length &&
                1 === t.length &&
                "function" == typeof t[0] &&
                Array.isArray(s[0]) &&
                (s = [...s[0]]),
              !e)
            )
              return s.join(" ");
            const n = "{}";
            let a = e;
            const o = [];
            for (
              s.forEach((e) => {
                -1 !== a.search(n) ? (a = a.replace(n, e)) : o.push(e);
              });
              -1 !== a.search(n);

            )
              a = a.replace(n, "");
            return a.concat(" ").concat(o.join(" "));
          })(t, s),
          p = "[" + [e.id1, e.id2].join(":") + "]",
          g = r.a[e.level].toUpperCase(),
          m = [`${d}__${o ? `${o.ss}.${o.ss_ln}` : "?.?"}`, g, u, h, p].join(
            "\t"
          ),
          b = c.encode(m.concat("\n"));
        return b.byteLength > a.j.file_lim ? b.slice(0, a.j.file_lim) : b;
      }
      function h(e) {
        const t = new ArrayBuffer(8),
          s = new DataView(t),
          r = 4294967295,
          n = ~~(e / r),
          i = (e % r) - n;
        return s.setUint32(0, n), s.setUint32(4, i), t;
      }
      function p(e) {
        if (e.byteLength < 8)
          throw "INVALID BIGUINT BUFFER. MUST BE AN 8-BYTE BUFFER";
        const t = new DataView(e),
          s = t.getUint32(0);
        return 4294967295 * s + s + t.getUint32(4);
      }
      function g(e, t) {
        return new DataView(e).getUint16(t);
      }
    },
    ejhj: function (e, t, s) {
      "use strict";
      var r = s("jDHv"),
        n = s("4prX"),
        i = s("12Ui");
      r.ModuleContainer.registerSingleton(
        i.a,
        class {
          increaseSuccess(e, t, s, r, i) {
            n.default.increaseSuccess(e, t, s, r, i);
          }
          increaseFailed(e, t, s, r, i, a, o) {
            n.default.increaseFailed(e, t, s, r, i, a, o);
          }
        }
      );
    },
    eqHM: function (e, t, s) {
      null == window.Promise && (window.Promise = s("E2g8").Promise);
    },
    ez9R: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return n;
      });
      var r = s("jDHv");
      const n = Object(r.define)("zlog-bin-encoder");
    },
    ezdo: function (e, t, s) {
      "use strict";
      var r,
        n,
        i = s("jDHv"),
        a = s("HPcM"),
        o = s("rePB"),
        c = s("Y58e"),
        l = s("AH6j"),
        d = s("fsQs"),
        u = s("Y41u"),
        h = s("UJDs"),
        p = s("PLj1"),
        g = s("jGDt"),
        m = s("KRcn"),
        b = s("7FSS");
      const f =
        null === (r = s("89t2")) || void 0 === r ? void 0 : r.performance;
      let y =
        Object(i.injectable)()(
          (n =
            (function (e, t) {
              return Object(i.inject)(g.a)(e, void 0, 0);
            })(
              (n =
                Reflect.metadata(
                  "design:type",
                  Function
                )(
                  (n =
                    Reflect.metadata("design:paramtypes", [
                      void 0 === g.a ? Object : g.a,
                    ])(
                      (n = class extends l.b {
                        constructor(e) {
                          super(),
                            (this._session = e),
                            Object(o.a)(this, "_data", []),
                            Object(o.a)(this, "_lastPing", 0),
                            Object(o.a)(this, "_isSessionLineReady", !1),
                            Object(o.a)(this, "add", (e) => {
                              this._data.push(e),
                                f.now() - this._lastPing >= d.k &&
                                  ((this._lastPing = f.now()),
                                  this._broadcastEvent(
                                    u.d.LogBucketRequestFlush
                                  )),
                                this._data.length > 5e4 &&
                                  b.a.error(
                                    `[ZLL]: bucket size high: ${this._data.length}`
                                  );
                            }),
                            Object(o.a)(this, "_broadcastEvent", (e, t) => {
                              switch (e) {
                                case u.d.LogBucketRequestFlush:
                                case u.d.RegLogBucketStatus:
                                  this.dispatchEvent(new u.c(e, t));
                              }
                            }),
                            this.recordSession();
                        }
                        get(e = d.i) {
                          return (
                            this._isSessionLineReady ||
                              b.a.error(
                                "[ZLL]: session line not ready. get() returns 0 untils it is ready"
                              ),
                            this._isSessionLineReady
                              ? this._data.slice(0, e)
                              : []
                          );
                        }
                        removeFirst(e = 1) {
                          this._data.splice(0, e);
                        }
                        getAll() {
                          return this._isSessionLineReady ? this._data : [];
                        }
                        size() {
                          return this._data.length;
                        }
                        recordSession() {
                          const e = this._session.getSession();
                          let t;
                          var r, n, a, o;
                          (t =
                            null === (r = i.ModuleContainer.resolve(c.a)) ||
                            void 0 === r
                              ? void 0
                              : r.get("about_version")),
                            t ||
                              (t =
                                Object(m.a)() === p.b.Main
                                  ? null === (n = s("NLsH")) || void 0 === n
                                    ? void 0
                                    : n.app.getVersion()
                                  : null === (a = s("NLsH")) ||
                                    void 0 === a ||
                                    null === (o = a.remote) ||
                                    void 0 === o
                                  ? void 0
                                  : o.app.getVersion());
                          const l = `zlgvers:${e.zlgv} ps:${e.process} build:${e.env}-${e.buildType} pversion:${e.pversion} avers:${t} bhash:${e.build}`,
                            d = {
                              lineMeta: {
                                type: "info",
                                module: "Session".toUpperCase(),
                                features: [""],
                                level: h.b.info,
                                id1: 0,
                                id2: 0,
                                tick: this._session.getProcessStartTime(),
                              },
                              template: "",
                              args: [l],
                            };
                          this._data.unshift(d),
                            (this._isSessionLineReady = !0);
                        }
                      })
                    ) || n)
                ) || n)
            ) || n)
        ) || n;
      var v;
      i.ModuleContainer.registerSingleton(a.a, y);
      let j =
        Object(i.injectable)()(
          (v = class extends l.b {
            constructor(...e) {
              super(...e), Object(o.a)(this, "_data", []);
            }
            removeFirst(e = 1) {
              this._data.splice(0, e);
            }
            add(e) {
              this._data.push(e),
                this._broadcastEvent(u.d.LogBucketRequestFlush);
            }
            get(e) {
              const t = this._data.slice(0, e);
              return (this._data = this._data.slice(e)), t;
            }
            getAll() {
              return this._data;
            }
            size() {
              return this._data.length;
            }
            _broadcastEvent(e, t) {
              switch (e) {
                case u.d.LogBucketRequestFlush:
                case u.d.SentryLogBucketStatus:
                  this.dispatchEvent(new u.c(e, t));
              }
            }
          })
        ) || v;
      i.ModuleContainer.registerSingleton(a.b, j);
      const O = Object(i.define)("zlogger-validator");
      var w;
      let E =
        Object(i.injectable)()(
          (w =
            (function (e, t) {
              return Object(i.inject)(c.a)(e, void 0, 0);
            })(
              (w =
                Reflect.metadata(
                  "design:type",
                  Function
                )(
                  (w =
                    Reflect.metadata("design:paramtypes", [
                      void 0 === c.a ? Object : c.a,
                    ])(
                      (w = class {
                        constructor(e) {
                          (this.config = e),
                            Object(o.a)(this, "DevOrStagingLevelConfig", {
                              [h.b.info]: !0,
                              [h.b.error]: !0,
                              [h.b.warn]: !0,
                              [h.b.debug]: !0,
                              [h.b.critical]: !0,
                            }),
                            Object(o.a)(this, "ProdLevelConfig", {
                              [h.b.info]: !0,
                              [h.b.error]: !0,
                              [h.b.warn]: !0,
                              [h.b.debug]: !1,
                              [h.b.critical]: !0,
                            }),
                            Object(o.a)(this, "DevOrStagingTransConfig", {
                              [h.b.info]: { toFile: !0, toConsole: !0 },
                              [h.b.error]: { toFile: !0, toConsole: !0 },
                              [h.b.warn]: { toFile: !0, toConsole: !0 },
                              [h.b.debug]: { toFile: !0, toConsole: !0 },
                              [h.b.critical]: { toFile: !0, toConsole: !0 },
                            }),
                            Object(o.a)(this, "ProdTransConfig", {
                              [h.b.info]: { toFile: !0, toConsole: !0 },
                              [h.b.error]: { toFile: !0, toConsole: !0 },
                              [h.b.warn]: { toFile: !1, toConsole: !1 },
                              [h.b.debug]: { toFile: !1, toConsole: !1 },
                              [h.b.critical]: { toFile: !0, toConsole: !0 },
                            }),
                            Object(o.a)(this, "_ProcessBlacklist", []),
                            d.m && b.a.log("zlogger validator init");
                        }
                        validateLog(e, t, s, r) {
                          if (this._isBlackedlisted(e)) return !1;
                          switch (e) {
                            case p.b.Main:
                              return this._validateNoConfig(t, s, r);
                            case p.b.Web:
                            case p.b.Login:
                            case p.b.Photo:
                            case p.b.SharedWorker:
                            case p.b.Render:
                              return this._validateUsingConfig(t, s, r);
                            default:
                              return this._validateNoConfig(t, s, r);
                          }
                        }
                        _validateUsingConfig(e, t, s) {
                          const r =
                              !!this.config &&
                              this.config.get("stagingAccount"),
                            n = !!this.config && this.config.get("adminMode");
                          return (
                            (!0 !== (null == s ? void 0 : s.stagingOnly) ||
                              !1 !== r ||
                              !1 != !n) &&
                            (n || r
                              ? this.DevOrStagingLevelConfig[e] &&
                                this.DevOrStagingTransConfig[e][t]
                              : this.ProdLevelConfig[e] &&
                                this.ProdTransConfig[e][t])
                          );
                        }
                        _validateNoConfig(e, t, s) {
                          return (
                            this.ProdLevelConfig[e] &&
                            this.ProdTransConfig[e][t]
                          );
                        }
                        _isBlackedlisted(e) {
                          var t;
                          return !!(
                            e === p.b.Embed ||
                            (this.config &&
                              !0 ===
                                (null === (t = this.config) || void 0 === t
                                  ? void 0
                                  : t.get("adminConfig.offLog"))) ||
                            this._ProcessBlacklist.includes(e)
                          );
                        }
                      })
                    ) || w)
                ) || w)
            ) || w)
        ) || w;
      i.ModuleContainer.register(O, E);
      const _ = Object(i.define)("zsentry-log-trans"),
        D = Object(i.define)("zfile-log-trans"),
        C = Object(i.define)("zconsole-log-trans");
      var L,
        P,
        S,
        N = s("W8fB");
      let B =
          Object(i.injectable)()(
            (L =
              (function (e, t) {
                return Object(i.inject)(a.b)(e, void 0, 0);
              })(
                (L =
                  Reflect.metadata(
                    "design:type",
                    Function
                  )(
                    (L =
                      Reflect.metadata("design:paramtypes", [
                        void 0 === a.b ? Object : a.b,
                      ])(
                        (L = class {
                          constructor(e) {
                            this.sentryBucket = e;
                          }
                          transport(e) {
                            throw new Error("Method not implemented.");
                          }
                        })
                      ) || L)
                  ) || L)
              ) || L)
          ) || L,
        I =
          Object(i.injectable)()(
            (P =
              (function (e, t) {
                return Object(i.inject)(a.a)(e, void 0, 0);
              })(
                (P =
                  (function (e, t) {
                    return Object(i.inject)(O)(e, void 0, 1);
                  })(
                    (P =
                      Reflect.metadata(
                        "design:type",
                        Function
                      )(
                        (P =
                          Reflect.metadata("design:paramtypes", [
                            void 0 === a.a ? Object : a.a,
                            void 0 === O ? Object : O,
                          ])(
                            (P = class {
                              constructor(e, t) {
                                (this.regularBucket = e),
                                  (this.validator = t),
                                  Object(o.a)(this, "_currentProcess", void 0),
                                  (this._currentProcess = Object(m.a)());
                              }
                              transport(e) {
                                this.validator.validateLog(
                                  this._currentProcess,
                                  e.lineMeta.level,
                                  "toFile",
                                  e.extras
                                ) && this.regularBucket.add(e);
                              }
                            })
                          ) || P)
                      ) || P)
                  ) || P)
              ) || P)
          ) || P,
        T =
          Object(i.injectable)()(
            (S =
              (function (e, t) {
                return Object(i.inject)(O)(e, void 0, 0);
              })(
                (S =
                  (function (e, t) {
                    return Object(i.inject)(N.a)(e, void 0, 1);
                  })(
                    (S =
                      Reflect.metadata(
                        "design:type",
                        Function
                      )(
                        (S =
                          Reflect.metadata("design:paramtypes", [
                            void 0 === O ? Object : O,
                            void 0 === N.a ? Object : N.a,
                          ])(
                            (S = class {
                              constructor(e, t) {
                                (this.validator = e),
                                  (this.consoleWriter = t),
                                  Object(o.a)(this, "_currentProcess", void 0),
                                  (this._currentProcess = Object(m.a)());
                              }
                              transport(e) {
                                this.validator.validateLog(
                                  this._currentProcess,
                                  e.lineMeta.level,
                                  "toConsole",
                                  e.extras
                                ) && this.consoleWriter.write(e);
                              }
                            })
                          ) || S)
                      ) || S)
                  ) || S)
              ) || S)
          ) || S;
      i.ModuleContainer.registerSingleton(D, I),
        i.ModuleContainer.registerSingleton(_, B),
        i.ModuleContainer.registerSingleton(C, T);
      var k = s("XB6V");
      const R = ["info", "warn", "debug", "error", "critical"],
        z = ["", "F", "C", "T", "FT", "CT"];
      function F() {
        let e = 0;
        const t = {},
          s = {};
        return (
          R.forEach((r) => {
            z.forEach((n) => {
              "" === n
                ? ((t[e] = `z${r}A`), (s[`z${r}A`] = e), (e += 1))
                : "T" === n
                ? ((t[e] = `z${r}AT`), (s[`z${r}AT`] = e), (e += 1))
                : ((t[e] = `z${r}${n}`), (s[`z${r}${n}`] = e), (e += 1));
            });
          }),
          { EnumeratedLevels: t, ReversedEnumeratedLevels: s }
        );
      }
      Object.freeze(z), Object.freeze(R);
      const x = F().EnumeratedLevels,
        M = F().ReversedEnumeratedLevels;
      Object.freeze(x), Object.freeze(M);
      var A,
        U = s("h0S/");
      let W =
        Object(i.injectable)()(
          (A =
            (function (e, t) {
              return Object(i.inject)(D)(e, void 0, 0);
            })(
              (A =
                (function (e, t) {
                  return Object(i.inject)(_)(e, void 0, 1);
                })(
                  (A =
                    (function (e, t) {
                      return Object(i.inject)(C)(e, void 0, 2);
                    })(
                      (A =
                        Reflect.metadata(
                          "design:type",
                          Function
                        )(
                          (A =
                            Reflect.metadata("design:paramtypes", [
                              void 0 === D ? Object : D,
                              void 0 === _ ? Object : _,
                              void 0 === C ? Object : C,
                            ])(
                              (A = class extends class {} {
                                constructor(e, t, s) {
                                  super(),
                                    (this.fileTransporter = e),
                                    (this.sentryTransporter = t),
                                    (this.consoleTransporter = s),
                                    Object(o.a)(
                                      this,
                                      "_instanceMap",
                                      new Map()
                                    );
                                }
                                createZLogger(e, t = [], r) {
                                  const n = `${e}:${t.join(":")}`,
                                    a = this._instanceMap.get(n);
                                  var c, l, d, u, p, m, f, y, v, j, O;
                                  if (
                                    a &&
                                    (null == r ? void 0 : r.trans) ===
                                      (null === (c = a.config) || void 0 === c
                                        ? void 0
                                        : c.trans) &&
                                    (null == r ||
                                    null === (l = r.trans) ||
                                    void 0 === l
                                      ? void 0
                                      : l.file) ===
                                      (null === (d = a.config) ||
                                      void 0 === d ||
                                      null === (u = d.trans) ||
                                      void 0 === u
                                        ? void 0
                                        : u.file) &&
                                    (null == r ||
                                    null === (p = r.trans) ||
                                    void 0 === p
                                      ? void 0
                                      : p.console) ===
                                      (null === (m = a.config) ||
                                      void 0 === m ||
                                      null === (f = m.trans) ||
                                      void 0 === f
                                        ? void 0
                                        : f.console) &&
                                    (null == r ||
                                    null === (y = r.trans) ||
                                    void 0 === y
                                      ? void 0
                                      : y.sentry) ===
                                      (null === (v = a.config) ||
                                      void 0 === v ||
                                      null === (j = v.trans) ||
                                      void 0 === j
                                        ? void 0
                                        : j.sentry) &&
                                    (null == r ? void 0 : r.stagingOnly) ===
                                      (null === (O = a.config) || void 0 === O
                                        ? void 0
                                        : O.stagingOnly)
                                  )
                                    return a.logger;
                                  let w, E, _;
                                  (void 0 === (null == r ? void 0 : r.trans) ||
                                    (null != r && r.trans.file)) &&
                                    (w = this.fileTransporter),
                                    (void 0 ===
                                      (null == r ? void 0 : r.trans) ||
                                      (null != r && r.trans.console)) &&
                                      (E = this.consoleTransporter),
                                    (void 0 ===
                                      (null == r ? void 0 : r.trans) ||
                                      (null != r && r.trans.sentry)) &&
                                      (_ = this.sentryTransporter);
                                  const D = class {
                                    constructor(e, t, r) {
                                      (this.module = e),
                                        (this.features = t),
                                        (this.config = r),
                                        Object(o.a)(this, "enabled", !0),
                                        Object(o.a)(this, "Sentry", null),
                                        Object(o.a)(this, "tempOffConfig", {
                                          toConsole: !1,
                                          toFile: !1,
                                          toSentry: !1,
                                        }),
                                        Object(o.a)(this, "zsentry", (...e) => {
                                          this.Sentry &&
                                            this.Sentry.captureException(
                                              new Error(e.join(" "))
                                            );
                                        }),
                                        Object(o.a)(
                                          this,
                                          "zfatal",
                                          (...e) => {}
                                        ),
                                        Object(o.a)(
                                          this,
                                          "zsymb",
                                          (e, t, s, ...r) => {
                                            if (!1 === this.enabled) return;
                                            const n = x[e];
                                            if (n.includes("zcritical"))
                                              return void (
                                                this.Sentry &&
                                                this.Sentry.captureException(
                                                  new Error(r.join(" "))
                                                )
                                              );
                                            const i = this._getLevel(n);
                                            if (n.endsWith("A"))
                                              this._transport({
                                                tick: Date.now(),
                                                level: i,
                                                id1: t,
                                                id2: s,
                                                templ: null,
                                                args: r,
                                                target: "ConsoleFile",
                                              });
                                            else if (n.endsWith("AT")) {
                                              const [e, ...n] = r;
                                              this._transport({
                                                tick: Date.now(),
                                                level: i,
                                                id1: t,
                                                id2: s,
                                                templ: e,
                                                args: n,
                                                target: "ConsoleFile",
                                              });
                                            } else if (
                                              n.endsWith("C") ||
                                              n.endsWith("F")
                                            )
                                              this._transport({
                                                tick: Date.now(),
                                                level: i,
                                                id1: t,
                                                id2: s,
                                                templ: null,
                                                args: r,
                                                target: n.endsWith("C")
                                                  ? "toConsole"
                                                  : "toFile",
                                              });
                                            else if (
                                              n.endsWith("CT") ||
                                              n.endsWith("FT")
                                            ) {
                                              const [e, ...a] = r;
                                              this._transport({
                                                tick: Date.now(),
                                                level: i,
                                                id1: t,
                                                id2: s,
                                                templ: e,
                                                args: a,
                                                target: n.endsWith("CT")
                                                  ? "toConsole"
                                                  : "toFile",
                                              });
                                            }
                                          }
                                        ),
                                        Object(o.a)(
                                          this,
                                          "_transport",
                                          ({
                                            tick: e,
                                            level: t,
                                            id1: s,
                                            id2: r,
                                            templ: n,
                                            args: a,
                                            target: o,
                                          }) => {
                                            const c = () => ({
                                                lineMeta: {
                                                  type: "normal",
                                                  module: this.module,
                                                  features: this.features,
                                                  id1: s,
                                                  id2: r,
                                                  level: t,
                                                  tick: e,
                                                },
                                                template: n,
                                                args: a,
                                                extras: {
                                                  stagingOnly:
                                                    this.config.stagingOnly,
                                                },
                                              }),
                                              l = i.ModuleContainer.resolve(
                                                g.a
                                              );
                                            var d, u;
                                            if ("ConsoleFile" === o)
                                              !1 ===
                                                this.tempOffConfig.toConsole &&
                                                l.isEnabledConsole() &&
                                                (null ===
                                                  (d = this.config.toConsole) ||
                                                  void 0 === d ||
                                                  d.transport(c())),
                                                !1 ===
                                                  this.tempOffConfig.toFile &&
                                                  (null ===
                                                    (u = this.config.toFile) ||
                                                    void 0 === u ||
                                                    u.transport(c()));
                                            else if (
                                              !1 === this.tempOffConfig[o]
                                            ) {
                                              var h;
                                              if (
                                                "toConsole" === o &&
                                                !l.isEnabledConsole()
                                              )
                                                return;
                                              null === (h = this.config[o]) ||
                                                void 0 === h ||
                                                h.transport(c());
                                            }
                                          }
                                        ),
                                        Object(o.a)(this, "_getLevel", (e) => {
                                          let t = e;
                                          e.endsWith("A")
                                            ? (t = e.replace("A", ""))
                                            : e.endsWith("AT")
                                            ? (t = e.replace("AT", ""))
                                            : e.endsWith("C")
                                            ? (t = e.replace("C", ""))
                                            : e.endsWith("CT")
                                            ? (t = e.replace("CT", ""))
                                            : e.endsWith("F")
                                            ? (t = e.replace("F", ""))
                                            : e.endsWith("FT") &&
                                              (t = e.replace("FT", ""));
                                          let s = h.b.info;
                                          switch (t) {
                                            case "zinfo":
                                              s = h.b.info;
                                              break;
                                            case "zwarn":
                                              s = h.b.warn;
                                              break;
                                            case "zerror":
                                              s = h.b.error;
                                              break;
                                            case "zdebug":
                                              s = h.b.debug;
                                          }
                                          return s;
                                        }),
                                        Object(o.a)(this, "zinfo", (...e) => {
                                          throw new Error(
                                            "babel-plugin-transform-zlog failed: zlog malfunction"
                                          );
                                        }),
                                        Object(o.a)(this, "zinfoC", (...e) => {
                                          throw new Error(
                                            "babel-plugin-transform-zlog failed: zlog malfunction"
                                          );
                                        }),
                                        Object(o.a)(this, "zinfoF", (...e) => {
                                          throw new Error(
                                            "babel-plugin-transform-zlog failed: zlog malfunction"
                                          );
                                        }),
                                        Object(o.a)(this, "zwarn", (...e) => {
                                          throw new Error(
                                            "babel-plugin-transform-zlog failed: zlog malfunction"
                                          );
                                        }),
                                        Object(o.a)(this, "zwarnC", (...e) => {
                                          throw new Error(
                                            "babel-plugin-transform-zlog failed: zlog malfunction"
                                          );
                                        }),
                                        Object(o.a)(this, "zwarnF", (...e) => {
                                          throw new Error(
                                            "babel-plugin-transform-zlog failed: zlog malfunction"
                                          );
                                        }),
                                        Object(o.a)(this, "zerror", (...e) => {
                                          throw new Error(
                                            "babel-plugin-transform-zlog failed: zlog malfunction"
                                          );
                                        }),
                                        Object(o.a)(this, "zerrorC", (...e) => {
                                          throw new Error(
                                            "babel-plugin-transform-zlog failed: zlog malfunction"
                                          );
                                        }),
                                        Object(o.a)(this, "zerrorF", (...e) => {
                                          throw new Error(
                                            "babel-plugin-transform-zlog failed: zlog malfunction"
                                          );
                                        }),
                                        Object(o.a)(this, "zdebug", (...e) => {
                                          throw new Error(
                                            "babel-plugin-transform-zlog failed: zlog malfunction"
                                          );
                                        }),
                                        Object(o.a)(this, "zdebugC", (...e) => {
                                          throw new Error(
                                            "babel-plugin-transform-zlog failed: zlog malfunction"
                                          );
                                        }),
                                        Object(o.a)(this, "zdebugF", (...e) => {
                                          throw new Error(
                                            "babel-plugin-transform-zlog failed: zlog malfunction"
                                          );
                                        }),
                                        (this.enabled =
                                          !0 ===
                                          (function (e, t, s = !1) {
                                            if (
                                              !U.a.includes(e) &&
                                              !1 === U.c[e]
                                            )
                                              return (
                                                b.a.error(
                                                  "LogModeController:",
                                                  [e, t],
                                                  `module ${e} is not whitelisted`
                                                ),
                                                !1
                                              );
                                            let r = !1;
                                            for (const n of t) {
                                              const i =
                                                U.a.includes(n) ||
                                                !(!1 === U.c[e]);
                                              if ((s && !i) || (!i && !r))
                                                return !1;
                                              if (i) {
                                                if (((r = !0), !s)) return !0;
                                              } else if (!r)
                                                return (
                                                  b.a.error(
                                                    "LogModeController:",
                                                    [e, t],
                                                    `feat ${n} is not whitelisted and requireAllFeatOn:${s}`
                                                  ),
                                                  !1
                                                );
                                            }
                                            return !0;
                                          })(this.module, this.features)),
                                        (this.Sentry = s("m/zo"));
                                    }
                                    disableFile() {
                                      this.tempOffConfig.toFile = !0;
                                    }
                                    enableFile() {
                                      this.tempOffConfig.toFile = !1;
                                    }
                                    disableConsole() {
                                      this.tempOffConfig.toConsole = !0;
                                    }
                                    enableConsole() {
                                      this.tempOffConfig.toConsole = !1;
                                    }
                                    static create(e, t, s) {
                                      return new this(e, t, s);
                                    }
                                    pause() {
                                      this.enabled = !0;
                                    }
                                    resume() {
                                      this.enabled = !1;
                                    }
                                    specialTransport(e) {
                                      this._transport(e);
                                    }
                                  }.create(e, t, {
                                    toFile: w,
                                    toConsole: E,
                                    toSentry: _,
                                    stagingOnly:
                                      null == r ? void 0 : r.stagingOnly,
                                  });
                                  return (
                                    this._instanceMap.set(n, {
                                      logger: D,
                                      config: r,
                                    }),
                                    D
                                  );
                                }
                                createZLoggerStaging(e, t, s) {
                                  return (
                                    t.push(U.b.staging),
                                    this.createZLogger(e, t, {
                                      trans: s,
                                      stagingOnly: !0,
                                    })
                                  );
                                }
                              })
                            ) || A)
                        ) || A)
                    ) || A)
                ) || A)
            ) || A)
        ) || A;
      i.ModuleContainer.register(k.a, W);
      var K = s("yBqK"),
        Q = s("ebA4");
      var $,
        q = s("CDcE");
      let V =
        Object(i.injectable)()(
          ($ =
            Reflect.metadata(
              "design:type",
              Function
            )(
              ($ =
                Reflect.metadata(
                  "design:paramtypes",
                  []
                )(
                  ($ = class extends (
                    class {
                      constructor() {
                        Object(o.a)(this, "_TextEncoder", new TextEncoder());
                      }
                      encodeUi8(e, t, s) {
                        return e.setUint8(t, s), t + d.b.ui8;
                      }
                      encodeUi16(e, t, s) {
                        return e.setUint16(t, s), t + d.b.ui16;
                      }
                      encodeUi32(e, t, s) {
                        return e.setUint32(t, s), t + d.b.ui32;
                      }
                      encodeFloat32(e, t, s) {
                        return e.setFloat32(t, s), t + d.b.float32;
                      }
                      encodeFloat64(e, t, s) {
                        return e.setFloat64(t, s), t + d.b.float64;
                      }
                      encodeBigInt64(e, t, s) {
                        const r = Object(Q.c)(s),
                          n = new Uint8Array(r);
                        for (let i = 0; i < n.byteLength; i++)
                          t = this.encodeUi8(e, t, n[i]);
                        return t;
                      }
                      encodeTotalSize(e, t, s) {
                        return this.encodeUi16(e, t, s);
                      }
                      encodeTotalSizeEnd(e, t) {
                        return this.encodeUi16(e, t, t + d.b.ui16);
                      }
                      encodeTick(e, t, s) {
                        const r = Object(Q.c)(s),
                          n = new Uint8Array(r);
                        return this.copyCache(e, t, n);
                      }
                      encodeVers(e, t, s) {
                        if (s > 32767)
                          throw new Error(
                            "[BinEncoder] error: encoding verion is TOO BIG!"
                          );
                        return this.encodeUi16(e, t, s);
                      }
                      encodeEncoderVers(e, t, s) {
                        if (s > 255)
                          throw new Error(
                            "[BinEncoder] error: encoding level is TOO BIG!"
                          );
                        return this.encodeUi8(e, t, s);
                      }
                      encodeLevel(e, t, s) {
                        if (s > 255)
                          throw new Error(
                            "[BinEncoder] error: encoding level is TOO BIG!"
                          );
                        return this.encodeUi8(e, t, s);
                      }
                      encodeHeaderNum(e, t, s) {
                        if (s > 255)
                          throw new Error(
                            "[BinEncoder] error: encoding numOfHeader is TOO BIG!"
                          );
                        return this.encodeUi8(e, t, s);
                      }
                      encodeStringOnly(e, t, s) {
                        const r = this._TextEncoder.encode(s),
                          n = r.byteLength;
                        return (
                          (t = this.encodeUi8(e, t, n)), this.copyCache(e, t, r)
                        );
                      }
                      copyCache(e, t, s) {
                        for (let r = 0; r < s.byteLength; r++)
                          t = this.encodeUi8(e, t, s[r]);
                        return t;
                      }
                    }
                  ) {
                    constructor() {
                      super(),
                        Object(o.a)(this, "MemoryLogBatch", void 0),
                        Object(o.a)(this, "dv", void 0),
                        Object(o.a)(this, "_lastOffset", 0),
                        Object(o.a)(this, "_lastTs", 0),
                        (this.MemoryLogBatch = new ArrayBuffer(
                          d.d.mem_batch_lim
                        )),
                        (this.dv = new DataView(this.MemoryLogBatch));
                    }
                    getLastBuffer() {
                      return this.MemoryLogBatch.slice(0, this._lastOffset);
                    }
                    encode(e, t, s) {
                      try {
                        const { lineMeta: r, args: n } = e;
                        let i = 0;
                        i += d.b.ui16;
                        let a = r.tick;
                        a <= this._lastTs && (a = this._lastTs + 1),
                          (this._lastTs = a),
                          (i = this.encodeTick(this.dv, i, a)),
                          (i = this.encodeEncoderVers(this.dv, i, d.n)),
                          (i = this.encodeLevel(this.dv, i, r.level)),
                          (i = this.encodeUi16(this.dv, i, s.ss)),
                          (i = this.encodeUi32(this.dv, i, s.ss_ln)),
                          (i = this.encodeStringOnly(this.dv, i, "nam7I0LB")),
                          (i = this.encodeUi32(this.dv, i, t)),
                          (i = this.encodeUi16(this.dv, i, r.id1)),
                          (i = this.encodeUi16(this.dv, i, r.id2)),
                          (i = this._encodeArgs(i, this.dv, n));
                        const o = i + d.b.ui16;
                        return (
                          this.encodeTotalSize(this.dv, 0, o),
                          (i = this.encodeTotalSize(this.dv, i, o)),
                          (this._lastOffset = i),
                          this.MemoryLogBatch.slice(0, o)
                        );
                      } catch (r) {
                        throw (
                          (b.a.error("BinEncoderImpl.encode error:", r),
                          new Error("BinEncoderImpl.encode error"))
                        );
                      }
                    }
                    _allowTruncate() {
                      const e = i.ModuleContainer.resolve(c.a),
                        t = (null == e ? void 0 : e.get("adminMode")) || !1,
                        s = e.get("stagingAccount") || !1;
                      return !(t || s);
                    }
                    _encodeArgs(e, t, s) {
                      let r = !1;
                      const n = [];
                      if (s.length)
                        for (let a of s)
                          "object" == typeof a &&
                            (r = Object(q.b)(a) || Object(q.c)(a)),
                            n.push(Object(Q.f)(a));
                      let i;
                      if (
                        ((i =
                          1 === n.length &&
                          1 === s.length &&
                          Array.isArray(n[0]) &&
                          "function" == typeof s[0]
                            ? K.encode([...n[0]])
                            : K.encode(n)),
                        i.byteLength > d.d.line_hard_lim)
                      ) {
                        const e = JSON.stringify(n, Object(q.a)()).slice(
                          0,
                          d.d.line_hard_lim
                        );
                        i = K.encode(e);
                      } else if (
                        !r &&
                        i.byteLength > d.d.line_soft_lim &&
                        this._allowTruncate()
                      ) {
                        const e = JSON.stringify(n, Object(q.a)()).slice(
                          0,
                          d.d.line_soft_lim
                        );
                        i = K.encode(e);
                      }
                      for (let a = 0; a < i.byteLength; a++)
                        e = this.encodeUi8(t, e, i[a]);
                      return e;
                    }
                  })
                ) || $)
            ) || $)
        ) || $;
      var H = s("ez9R");
      i.ModuleContainer.registerSingleton(H.a, V);
      var Z = s("K8kB");
      var G,
        Y = class {
          constructor(e = [], t = !0) {
            (this.tasks = e), (this.alive = t);
          }
          do(...e) {
            return this.add(...e);
          }
          add(...e) {
            return (this.tasks = this.tasks.concat(e)), this;
          }
          once(e = !1) {
            return (
              (this.alive = !1),
              (e && (async (e) => this.async())()) || this.sync(),
              this
            );
          }
          every(e) {
            return (
              this.add(() => new Promise((t) => setTimeout(t, e))),
              this.forever(!0)
            );
          }
          forever(e = !1) {
            return (
              (this.alive = !0),
              (e && (async (e) => this.async())()) || this.sync(),
              this
            );
          }
          cancel() {
            return (this.alive = !1), this;
          }
          async async() {
            for (let e of this.tasks) await e();
            this.alive && this.async();
          }
          sync() {
            for (let e of this.tasks) e();
            this.alive && this.sync();
          }
        };
      let J =
        Object(i.injectable)()(
          (G =
            (function (e, t) {
              return Object(i.inject)(a.a)(e, void 0, 0);
            })(
              (G =
                Reflect.metadata(
                  "design:type",
                  Function
                )(
                  (G =
                    Reflect.metadata("design:paramtypes", [
                      void 0 === a.a ? Object : a.a,
                    ])(
                      (G = class extends l.b {
                        constructor(e) {
                          super(),
                            (this.bucket = e),
                            Object(o.a)(this, "task", void 0),
                            Object(o.a)(this, "start", () => {
                              var e;
                              if (
                                null !== (e = this.task) &&
                                void 0 !== e &&
                                e.alive
                              )
                                return;
                              this.task || (this.task = new Y());
                              const t = p.c[Object(m.a)()] || d.e;
                              this.task
                                .add(() =>
                                  this._broadcastEvent(
                                    u.d.WriteSchedulerRequestFlush
                                  )
                                )
                                .every(t),
                                this._listenEvents();
                            }),
                            Object(o.a)(this, "stop", () => {
                              this.task && this.task.cancel(),
                                (this.task = void 0);
                            }),
                            Object(o.a)(this, "_listenEvents", () => {
                              this.bucket.addEventListener(
                                u.d.LogBucketRequestFlush,
                                this._handleFlushRequestFromBucket
                              );
                            }),
                            Object(o.a)(
                              this,
                              "_handleFlushRequestFromBucket",
                              () => {
                                var e;
                                (this.task && this.task.alive) ||
                                  (d.m &&
                                    b.a.log(
                                      "Oopsie! Scheduler is somehow not running. Restarting..."
                                    ),
                                  null === (e = this.task) ||
                                    void 0 === e ||
                                    e.cancel(),
                                  (this.task = void 0),
                                  this.start());
                              }
                            );
                        }
                        _broadcastEvent(e) {
                          if (e === u.d.WriteSchedulerRequestFlush)
                            this.dispatchEvent(new u.a(e));
                        }
                      })
                    ) || G)
                ) || G)
            ) || G)
        ) || G;
      i.ModuleContainer.registerSingleton(Z.a, J);
    },
    gpNb: function (e, t, s) {
      "use strict";
      var r,
        n = s("jDHv"),
        i = s("UK4g"),
        a = s("YEoC"),
        o = s("PmZf"),
        c = s("rvru"),
        l = s("PhBv"),
        d = s("tHMN");
      let u =
        n.ModuleContainer.injectable()(
          (r =
            (function (e, t) {
              return n.ModuleContainer.inject(l.b)(e, void 0, 0);
            })(
              (r =
                (function (e, t) {
                  return n.ModuleContainer.inject(c.a)(e, void 0, 1);
                })(
                  (r =
                    Reflect.metadata(
                      "design:type",
                      Function
                    )(
                      (r =
                        Reflect.metadata("design:paramtypes", [
                          void 0 === l.a ? Object : l.a,
                          void 0 === c.a ? Object : c.a,
                        ])(
                          (r = class extends d.a {
                            constructor(e, t) {
                              super(),
                                (this.queryPlanner = e),
                                (this.dbQos = t),
                                this.queryPlanner.addEventListener(
                                  o.a.QueryError,
                                  (e) => {
                                    this.dispatchEvent(new o.b(e.error)),
                                      this.dbQos.sendDBErrorQos(e.error);
                                  }
                                ),
                                this.queryPlanner.addEventListener(
                                  o.a.UnexpectedError,
                                  (e) => {
                                    this.dispatchEvent(new o.d(e.error)),
                                      this.dbQos.sendDBErrorQos(e.error);
                                  }
                                );
                            }
                            do(e) {
                              return this.queryPlanner.do(e);
                            }
                            doImmediately(e) {
                              return (
                                "Qos" === e.database && e.trace(),
                                this.queryPlanner.doImmediately(e)
                              );
                            }
                            deleteDatabase(e) {
                              return this.doImmediately({
                                trace: (...e) => {},
                                type: a.d.DeleteDB,
                                database: e,
                                table: "",
                                transaction: 0,
                                priority: a.c.BLOCKING,
                                retry: i.i,
                                timing: {},
                                meta: {
                                  error: new Error(),
                                  dead: !1,
                                  step: -1,
                                },
                              });
                            }
                            deleteAllDatabases() {
                              return this.doImmediately({
                                trace: (...e) => {},
                                type: a.d.DeleteAllDBs,
                                database: "",
                                table: "",
                                transaction: 0,
                                priority: a.c.BLOCKING,
                                retry: i.i,
                                timing: {},
                                meta: {
                                  error: new Error(),
                                  dead: !1,
                                  step: -1,
                                },
                              });
                            }
                            closeDatabase(e) {
                              return this.doImmediately({
                                trace: (...e) => {},
                                type: a.d.CloseDB,
                                database: e,
                                table: "",
                                transaction: 0,
                                priority: a.c.BLOCKING,
                                retry: i.i,
                                timing: {},
                                meta: {
                                  error: new Error(),
                                  dead: !1,
                                  step: -1,
                                },
                              });
                            }
                            closeAllDatabases() {
                              return this.doImmediately({
                                trace: (...e) => {},
                                type: a.d.CloseAllDBs,
                                database: "",
                                table: "",
                                transaction: 0,
                                priority: a.c.BLOCKING,
                                retry: i.i,
                                timing: {},
                                meta: {
                                  error: new Error(),
                                  dead: !1,
                                  step: -1,
                                },
                              });
                            }
                          })
                        ) || r)
                    ) || r)
                ) || r)
            ) || r)
        ) || r;
      n.ModuleContainer.registerSingleton(d.b, u);
    },
    hRcX: function (e, t, s) {
      "use strict";
      var r = s("VTBJ"),
        n = s("rePB"),
        i = s("jDHv"),
        a = s("Uzj0");
      const o = () => {},
        c = (() => {
          let e = 0;
          return () => ++e;
        })(),
        l = { id: 0, retry: 0, success: o, error: o, execute: o };
      function d(e, t) {
        const s = e.length;
        e.push(t),
          (function (e, t, s) {
            let r = s;
            for (;;) {
              const s = (r - 1) >>> 1,
                n = e[s];
              if (!(void 0 !== n && h(n, t) > 0)) return;
              (e[s] = t), (e[r] = n), (r = s);
            }
          })(e, t, s);
      }
      function u(e) {
        const t = e[0];
        if (void 0 !== t) {
          const s = e.pop();
          return (
            s !== t &&
              ((e[0] = s),
              (function (e, t, s) {
                let r = s;
                const n = e.length;
                for (; r < n; ) {
                  const s = 2 * (r + 1) - 1,
                    n = e[s],
                    i = s + 1,
                    a = e[i];
                  if (void 0 !== n && h(n, t) < 0)
                    void 0 !== a && h(a, n) < 0
                      ? ((e[r] = a), (e[i] = t), (r = i))
                      : ((e[r] = n), (e[s] = t), (r = s));
                  else {
                    if (!(void 0 !== a && h(a, t) < 0)) return;
                    (e[r] = a), (e[i] = t), (r = i);
                  }
                }
              })(e, s, 0)),
            t
          );
        }
        return null;
      }
      function h(e, t) {
        const s = e.sortIndex - t.sortIndex;
        return 0 !== s ? s : e.id - t.id;
      }
      let p;
      !(function (e) {
        (e[(e.BLOCKING = 50)] = "BLOCKING"),
          (e[(e.NON_BLOCKING = 250)] = "NON_BLOCKING"),
          (e[(e.IDLE = 500)] = "IDLE"),
          (e[(e.NEVER_TIMEOUT = 1e3)] = "NEVER_TIMEOUT");
      })(p || (p = {}));
      const g = new (class {
          push(e, t) {
            const s = Object(r.a)(
              Object(r.a)(Object(r.a)({}, l), t),
              {},
              { id: c() }
            );
            e.push(s);
          }
          getCandidate(e) {
            return e.shift();
          }
        })(),
        m = new (class {
          push(e, t) {
            d(
              e,
              Object(r.a)(
                Object(r.a)(Object(r.a)({}, l), t),
                {},
                {
                  sortIndex: Date.now() + (t.deadline || p.NON_BLOCKING),
                  id: c(),
                }
              )
            );
          }
          getCandidate(e) {
            return u(e);
          }
        })();
      class b {
        constructor(e = g, t = !0) {
          Object(n.a)(this, "_queue", void 0),
            Object(n.a)(this, "_strategy", void 0),
            Object(n.a)(this, "_stopped", void 0),
            Object(n.a)(this, "_inactive", void 0),
            (this._queue = []),
            (this._strategy = e),
            (this._stopped = !t),
            (this._inactive = !0);
        }
        run(e) {
          this._strategy.push(this._queue, e), this._inactive && this._run();
        }
        start() {
          (this._stopped = !1),
            setTimeout(() => {
              this._run();
            });
        }
        stop() {
          (this._stopped = !0), (this._inactive = !0);
        }
        async _run() {
          if (this._stopped) return void (this._inactive = !0);
          const e = this._strategy.getCandidate(this._queue);
          if (e)
            try {
              const s = await e.execute();
              try {
                null == e || e.success(s);
              } catch (t) {}
              setTimeout(() => {
                this._run();
              });
            } catch (t) {
              e.retry > 0 ? (e.retry--, this.run(e)) : null == e || e.error(t),
                setTimeout(() => {
                  this._run();
                });
            }
          else this._inactive = !0;
        }
      }
      new b(m);
      var f = s("Mgpg"),
        y = s("YEoC"),
        v = s("DI/x"),
        j = s("PmZf"),
        O = s("YZti"),
        w = s("1UUk"),
        E = s("MRjZ"),
        _ = s("UJ0r"),
        D = s("teaq"),
        C = s("Abbu"),
        L = s("PhBv"),
        P = s("rkiK"),
        S = s("wH4e");
      const N = new Set(["Qos"]);
      var B;
      let I =
        i.ModuleContainer.injectable()(
          (B =
            (function (e, t) {
              return i.ModuleContainer.inject(_.b)(e, void 0, 0);
            })(
              (B =
                (function (e, t) {
                  return i.ModuleContainer.inject(D.b)(e, void 0, 1);
                })(
                  (B =
                    (function (e, t) {
                      return i.ModuleContainer.inject(f.ZLoggerFactory)(
                        e,
                        void 0,
                        2
                      );
                    })(
                      (B =
                        Reflect.metadata(
                          "design:type",
                          Function
                        )(
                          (B =
                            Reflect.metadata("design:paramtypes", [
                              void 0 === _.a ? Object : _.a,
                              void 0 === D.b ? Object : D.b,
                              void 0 === f.ZLoggerFactory
                                ? Object
                                : f.ZLoggerFactory,
                            ])(
                              (B = class extends L.a {
                                constructor(e, t, s) {
                                  super(),
                                    (this.adapterManager = e),
                                    (this.configManager = t),
                                    Object(n.a)(this, "scheduler", void 0),
                                    Object(n.a)(this, "pendingQueries", []),
                                    Object(n.a)(this, "session", void 0),
                                    Object(n.a)(this, "logger", void 0),
                                    Object(n.a)(
                                      this,
                                      "adapterContainers",
                                      new Map()
                                    ),
                                    Object(n.a)(this, "idCounter", 0),
                                    Object(n.a)(this, "dbSchema", void 0),
                                    (this.scheduler = new b(g, !1)),
                                    (this.logger = s.createZLogger("db", [
                                      "host",
                                      "planner",
                                    ])),
                                    this.adapterManager.addEventListener(
                                      j.a.UnexpectedError,
                                      (e) => {
                                        this.dispatchEvent(new j.d(e.error));
                                      }
                                    );
                                }
                                install(e) {
                                  this.dbSchema = e;
                                }
                                start() {
                                  this.scheduler.start();
                                  const e = i.ModuleContainer.resolve(w.b),
                                    t = (e) => {
                                      this.session = e;
                                      const t = this.pendingQueries;
                                      (this.pendingQueries = []),
                                        t.forEach((e) => {
                                          this.enqueue(e, { immediately: !1 });
                                        });
                                    };
                                  e.session && t(e.session),
                                    e.addEventListener(
                                      j.a.SessionChange,
                                      (e) => {
                                        t(e.session),
                                          this.adapterContainers.clear();
                                      }
                                    );
                                }
                                stop() {
                                  this.scheduler.stop(),
                                    this.logger.zsymb(6, 11034, 3e4, "Stop!");
                                }
                                do(e) {
                                  const t = (function (e) {
                                    if (N.has(e.database)) return;
                                    const t = P.default.start(
                                        P.MetricName.query_resolution_time
                                      ),
                                      s = {
                                        method: S.QueryUtils.getTypeName(
                                          e.type
                                        ),
                                        database: e.database,
                                        table: e.table,
                                        transaction: e.transaction,
                                      };
                                    return t.pushInfo(s), t;
                                  })(e);
                                  return new Promise((t, s) => {
                                    this.enqueue(
                                      Object(r.a)(
                                        Object(r.a)({}, e),
                                        {},
                                        { deferrer: { resolve: t, reject: s } }
                                      ),
                                      { immediately: C.a.isInTransaction(e) }
                                    );
                                  }).finally(() => {
                                    null == t || t.end();
                                  });
                                }
                                doImmediately(e) {
                                  return new Promise((t, s) => {
                                    this.enqueue(
                                      Object(r.a)(
                                        Object(r.a)({}, e),
                                        {},
                                        { deferrer: { resolve: t, reject: s } }
                                      ),
                                      { immediately: !0 }
                                    );
                                  });
                                }
                                enqueue(e, t) {
                                  (e.meta.step = 0),
                                    (e.meta.id = this.idCounter++),
                                    this.scheduler.run({
                                      immediately: t.immediately,
                                      execute: () => {
                                        try {
                                          return this.execute(e);
                                        } catch (t) {
                                          if (0 !== e.retry)
                                            throw ((e.retry -= 1), t);
                                          {
                                            const s = this.createErrorForQuery(
                                              e,
                                              t
                                            );
                                            this.logger.zsymb(
                                              18,
                                              11034,
                                              30001,
                                              () => [s]
                                            ),
                                              this.dispatchEvent(
                                                new j.d(new v.i(s.message))
                                              );
                                          }
                                        }
                                      },
                                      retry: e.retry,
                                    });
                                }
                                trapQueryError(e) {
                                  let t = null,
                                    s = () => {};
                                  this.shouldTrapTimeoutQuery(e) &&
                                    ((t = setTimeout(() => {
                                      var t, s;
                                      const r =
                                          (null === (t = e.params) ||
                                          void 0 === t ||
                                          null === (s = t.values) ||
                                          void 0 === s
                                            ? void 0
                                            : s.length) || void 0,
                                        n = void 0 !== r ? [r] : [];
                                      e.deferrer.reject(new v.t(n));
                                    }, e.meta.timeout)),
                                    (e.meta.timer = t),
                                    (s = () => {
                                      clearTimeout(t);
                                    }));
                                  const r = e.deferrer;
                                  e.deferrer = {
                                    resolve: (e) => {
                                      s(), r.resolve(e);
                                    },
                                    reject: (t) => {
                                      s();
                                      const n = this.createErrorForQuery(e, t);
                                      this.dispatchEvent(new j.b(n)),
                                        r.reject(n);
                                    },
                                  };
                                }
                                createErrorForQuery(e, t) {
                                  const s = {
                                      method: O.b.getTypeName(e.type),
                                      database: e.database,
                                      table: e.table,
                                      step: e.meta.step,
                                      partition: e.meta.partitionKey,
                                      trans: e.transaction,
                                      deadline: e.meta.timeout,
                                    },
                                    r = Object(E.a)(s);
                                  let n = null;
                                  const i = ((e) => {
                                    const t = e.stack;
                                    if (!t) return "";
                                    const s =
                                      `${e.name}` +
                                      (e.message ? `: ${e.message}` : "") +
                                      "\n";
                                    return t.startsWith(s)
                                      ? t.slice(s.length)
                                      : t;
                                  })(e.meta.error);
                                  if (t)
                                    if (t instanceof Error) {
                                      const s = t.message + ` (${r})`;
                                      t instanceof DOMException
                                        ? ((n = new v.c(s, t.name, t.code)),
                                          n.setStack(i))
                                        : t instanceof v.e
                                        ? ((n = t),
                                          (n.message = s),
                                          n.setStack(i))
                                        : ((n = e.meta.error),
                                          (n.message = s),
                                          (n.name = t.name),
                                          (n.stack = `${n.name}: ${n.message} ${i}`));
                                    } else {
                                      let e = t ? `${t}` : "Unknown reason";
                                      (e += ` (${r})`),
                                        (n = new v.i(e)),
                                        n.setStack(i);
                                    }
                                  else {
                                    let e = `Unknown reason (${r})`;
                                    (n = new v.i(e)), n.setStack(i);
                                  }
                                  return n;
                                }
                                shouldTrapTimeoutQuery(e) {
                                  return !1;
                                }
                                execute(e) {
                                  (e.meta.step = 1),
                                    (e.meta.dead = !1),
                                    (e.meta.step = 2),
                                    (!e.meta.databaseConfig &&
                                      (this.computeDatabaseConfig(e),
                                      e.meta.dead)) ||
                                      ((e.meta.step = 3),
                                      this.isReadyForExecute(e) &&
                                        (e.meta.shouldNotTrapQuery ||
                                          this.trapQueryError(e),
                                        (e.meta.step = 4),
                                        (!e.meta.databaseName &&
                                          (this.computeDatabaseName(e),
                                          e.meta.dead)) ||
                                          ((e.meta.step = 5),
                                          (e.meta.step = 6),
                                          (!e.meta.partitionConfig &&
                                            (this.computePartitionConfig(e),
                                            e.meta.dead)) ||
                                            ((e.meta.step = 7),
                                            (!e.meta.tableConfig &&
                                              (this.computeTableConfig(e),
                                              e.meta.dead)) ||
                                              ((e.meta.step = 8),
                                              ("string" !=
                                                typeof e.meta.partitionKey &&
                                                (this.computePartitionKey(e),
                                                e.meta.dead)) ||
                                                ((e.meta.step = 9),
                                                (!e.meta.executor &&
                                                  (this.computeDatabaseAdapter(
                                                    e
                                                  ),
                                                  e.meta.dead)) ||
                                                  ((e.meta.step = 10),
                                                  e.meta.executor())))))));
                                }
                                computeDatabaseAdapter(e) {
                                  const {
                                    databaseName: t,
                                    partitionConfig: s,
                                    partitionKey: r,
                                    databaseConfig: n,
                                    tableConfig: i,
                                  } = e.meta;
                                  let o = t;
                                  if (
                                    !C.a.isPartitionlessQuery(e) &&
                                    n.supportPartitionByField &&
                                    i.doesHavePartitionByField(s.type)
                                  ) {
                                    if ("" === r)
                                      return void this.rejectQuery(
                                        e,
                                        new v.q()
                                      );
                                    o = `${t}/${r}`;
                                  }
                                  const c = `${o}_${s.type}`;
                                  let l = this.adapterContainers.get(c);
                                  l ||
                                    ((l = new a.b.Container()),
                                    this.adapterContainers.set(c, l),
                                    this.adapterManager
                                      .getDatabaseAdapter(o, s)
                                      .then(l.resolve)
                                      .catch(l.reject)),
                                    l.value ||
                                      l.promise
                                        .then(
                                          () => (
                                            (e.meta.shouldNotTrapQuery = !0),
                                            this.execute(e)
                                          )
                                        )
                                        .catch((e) => {
                                          const t = new v.b(c, e.message);
                                          this.logger.zsymb(
                                            18,
                                            11034,
                                            30003,
                                            () => [t]
                                          ),
                                            this.dispatchEvent(new j.d(t));
                                        });
                                  const d = l.value;
                                  d
                                    ? ((e.meta.adapterName =
                                        d.type === y.a.IDB ? "idb" : "sqlite"),
                                      (e.meta.executor = () => {
                                        (e.meta.databaseName = o), d.execute(e);
                                      }))
                                    : (e.meta.dead = !0);
                                }
                                replicate(e, t) {
                                  this.do(
                                    Object(r.a)(
                                      Object(r.a)({}, e),
                                      {},
                                      {
                                        transaction: 0,
                                        meta: Object(r.a)(
                                          Object(r.a)({}, e.meta),
                                          {},
                                          {
                                            databaseConfig: t,
                                            error: new Error(),
                                          }
                                        ),
                                        deferrer: void 0,
                                      }
                                    )
                                  );
                                }
                                isReadyForExecute(e) {
                                  return (
                                    !(
                                      e.meta.databaseConfig.session &&
                                      !this.session
                                    ) || (this.pendingQueries.push(e), !1)
                                  );
                                }
                                computeDatabaseConfig(e) {
                                  if (
                                    "" === e.database &&
                                    (C.a.isCloseAllDBsQuery(e) ||
                                      C.a.isDeleteAllDBsQuery(e))
                                  ) {
                                    e.meta.dead = !0;
                                    const t = this.getAllDBNames().map((t) =>
                                      this.doImmediately(
                                        Object(r.a)(
                                          Object(r.a)({}, e),
                                          {},
                                          {
                                            type: C.a.isCloseAllDBsQuery(e)
                                              ? y.d.CloseDB
                                              : y.d.DeleteDB,
                                            database: t,
                                            meta: Object(r.a)(
                                              Object(r.a)({}, e.meta),
                                              {},
                                              { error: new Error() }
                                            ),
                                            deferrer: void 0,
                                          }
                                        )
                                      )
                                    );
                                    return void Promise.all(t)
                                      .then(() => e.deferrer.resolve())
                                      .catch(e.deferrer.reject);
                                  }
                                  const t =
                                    this.configManager.getDatabaseConfigs(
                                      e.database
                                    );
                                  if (0 !== t.length) {
                                    if (t.length > 1 && this.shouldReplicate(e))
                                      for (let s = 1; s < t.length; s++)
                                        this.replicate(e, t[s]);
                                    e.meta.databaseConfig = t[0];
                                  } else
                                    this.rejectQuery(e, new v.m(e.database));
                                }
                                getAllDBNames() {
                                  return Object.keys(this.dbSchema);
                                }
                                getTablesNameOfDB(e) {
                                  const t = this.dbSchema[e];
                                  if (!t) throw new v.n(e);
                                  return Object.values(t).map((e) => e.name);
                                }
                                computeDatabaseName(e) {
                                  var t, s;
                                  const { meta: n, table: i, database: a } = e;
                                  if (
                                    "" === i &&
                                    (C.a.isCloseDBQuery(e) ||
                                      C.a.isCloseAllDBsQuery(e) ||
                                      C.a.isDeleteDBQuery(e) ||
                                      C.a.isDeleteAllDBsQuery(e))
                                  ) {
                                    e.meta.dead = !0;
                                    const t = this.getTablesNameOfDB(a).map(
                                      (t) =>
                                        this.doImmediately(
                                          Object(r.a)(
                                            Object(r.a)({}, e),
                                            {},
                                            {
                                              table: t,
                                              meta: Object(r.a)(
                                                Object(r.a)({}, e.meta),
                                                {},
                                                { error: new Error() }
                                              ),
                                              deferrer: void 0,
                                            }
                                          )
                                        )
                                    );
                                    return void Promise.all(t)
                                      .then(() => e.deferrer.resolve())
                                      .catch(e.deferrer.reject);
                                  }
                                  const o =
                                      null !=
                                      (t =
                                        null === (s = this.session) ||
                                        void 0 === s
                                          ? void 0
                                          : s.userId)
                                        ? t
                                        : "",
                                    c = n.databaseConfig.computeDatabaseName(
                                      o,
                                      i
                                    );
                                  n.databaseName = c;
                                }
                                computePartitionConfig(e) {
                                  const t = e.meta.databaseConfig.getPartition(
                                    e.table,
                                    this.session
                                  );
                                  t
                                    ? (e.meta.partitionConfig = t)
                                    : this.rejectQuery(
                                        e,
                                        new v.p(e.table, this.session)
                                      );
                                }
                                computeTableConfig(e) {
                                  const t =
                                    e.meta.partitionConfig.getTableConfig(
                                      e.table
                                    );
                                  t
                                    ? ((t.dbName = e.database),
                                      (e.meta.tableConfig = t))
                                    : this.rejectQuery(e, new v.r(e.table));
                                }
                                computePartitionKey(e) {
                                  const {
                                    databaseConfig: t,
                                    tableConfig: s,
                                    partitionConfig: r,
                                  } = e.meta;
                                  if (
                                    t.supportPartitionByField &&
                                    s.doesHavePartitionByField(r.type)
                                  )
                                    switch (e.type) {
                                      case y.d.BeginTransaction:
                                        return void (e.meta.partitionKey = "");
                                      case y.d.Clear:
                                        return;
                                      case y.d.Insert:
                                        return void this.computePartitionForInsertQuery(
                                          e
                                        );
                                      case y.d.InsertMulti:
                                        return void this.computePartitionForInsertMultiQuery(
                                          e
                                        );
                                      case y.d.Get:
                                      case y.d.GetAndUpdate:
                                      case y.d.Update:
                                      case y.d.Delete:
                                        return void this.computePartitionForIndexedQuery(
                                          e
                                        );
                                      case y.d.FindAndDelete:
                                      case y.d.GetAllKey:
                                      case y.d.GetAll:
                                      case y.d.Count:
                                        return void this.computePartitionForRangedQuery(
                                          e
                                        );
                                      case y.d.DeleteMulti:
                                      case y.d.GetMulti:
                                        return void this.computePartitionForGetMultiAndDeleteMultiQuery(
                                          e
                                        );
                                      case y.d.UpdateMulti:
                                        return void this.computePartitionForUpdateMultiQuery(
                                          e
                                        );
                                      case y.d.CloseDB:
                                      case y.d.DeleteDB:
                                        return void this.computePartitionForCloseDBAndDeleteDBQuery(
                                          e
                                        );
                                    }
                                  else e.meta.partitionKey = "";
                                }
                                computePartitionForInsertQuery(e) {
                                  const t =
                                    this.computePartitionKeyFromEntityValue(
                                      e.meta.tableConfig,
                                      e.params.value
                                    );
                                  void 0 !== t
                                    ? (e.meta.partitionKey = `${t}`)
                                    : this.rejectQuery(e, new v.q());
                                }
                                computePartitionForInsertMultiQuery(e) {
                                  const t = { groupByPartitions: {} };
                                  for (const r of e.params.values) {
                                    const s =
                                      this.computePartitionKeyFromEntityValue(
                                        e.meta.tableConfig,
                                        r
                                      );
                                    if (void 0 === s)
                                      return void this.rejectQuery(
                                        e,
                                        new v.q()
                                      );
                                    t.groupByPartitions[s] ||
                                      (t.groupByPartitions[s] = []),
                                      t.groupByPartitions[s].push(r);
                                  }
                                  let s;
                                  const n = Object.entries(t.groupByPartitions);
                                  if (1 === n.length)
                                    (s = n[0][0]),
                                      void 0 !== s
                                        ? (e.meta.partitionKey = s)
                                        : this.rejectQuery(e, new v.q());
                                  else {
                                    e.meta.dead = !0;
                                    const t = n.map(([t, s]) => {
                                      const n = t;
                                      return this.doImmediately(
                                        Object(r.a)(
                                          Object(r.a)({}, e),
                                          {},
                                          {
                                            meta: Object(r.a)(
                                              Object(r.a)({}, e.meta),
                                              {},
                                              {
                                                partitionKey: n,
                                                error: new Error(),
                                              }
                                            ),
                                            params: Object(r.a)(
                                              Object(r.a)({}, e.params),
                                              {},
                                              { values: s }
                                            ),
                                            deferrer: void 0,
                                          }
                                        )
                                      );
                                    });
                                    Promise.all(t)
                                      .then((t) => e.deferrer.resolve(t.flat()))
                                      .catch(e.deferrer.reject);
                                  }
                                }
                                computePartitionForIndexedQuery(e) {
                                  const t =
                                    this.computePartitionKeyFromEntityKey(
                                      e.meta.tableConfig,
                                      e.params.key,
                                      e.params.index
                                    );
                                  void 0 !== t
                                    ? (e.meta.partitionKey = `${t}`)
                                    : this.rejectQuery(e, new v.q());
                                }
                                computePartitionForRangedQuery(e) {
                                  var t, s;
                                  if (!e.params.range) {
                                    const t = new v.s(
                                      "Get all data in partitioned table"
                                    );
                                    return void this.rejectQuery(e, t);
                                  }
                                  let r = "";
                                  r =
                                    e.type === y.d.FindAndDelete ||
                                    e.type === y.d.Count
                                      ? "primary"
                                      : e.params.index;
                                  const { partitionConfig: n, tableConfig: i } =
                                    e.meta;
                                  if (
                                    -1 === i.getIndexPartitionField(n.type, r)
                                  ) {
                                    if (i.usePartitionTable) {
                                      const t = new v.s(
                                        "Lookup partition from query range"
                                      );
                                      this.rejectQuery(e, t);
                                    } else {
                                      const t = new v.s(
                                        "Get all data by index in partitioned table"
                                      );
                                      this.rejectQuery(e, t);
                                    }
                                    return;
                                  }
                                  if (
                                    null === (t = e.params.range) ||
                                    void 0 === t ||
                                    !t.from ||
                                    null === (s = e.params.range) ||
                                    void 0 === s ||
                                    !s.to
                                  ) {
                                    const t = new v.s(
                                      "Get data with open boundary in partition table"
                                    );
                                    return void this.rejectQuery(e, t);
                                  }
                                  const a = e.params.range.from,
                                    o = e.params.range.to,
                                    c = this.computePartitionKeyFromEntityKey(
                                      e.meta.tableConfig,
                                      a,
                                      r
                                    );
                                  if (
                                    c !==
                                    this.computePartitionKeyFromEntityKey(
                                      e.meta.tableConfig,
                                      o,
                                      r
                                    )
                                  ) {
                                    const t = new v.s(
                                      "Get data from multiple partition"
                                    );
                                    return void this.rejectQuery(e, t);
                                  }
                                  let l = c;
                                  void 0 !== l
                                    ? (e.meta.partitionKey = `${l}`)
                                    : this.rejectQuery(e, new v.q());
                                }
                                computePartitionForGetMultiAndDeleteMultiQuery(
                                  e
                                ) {
                                  let t = "";
                                  t =
                                    e.type === y.d.DeleteMulti
                                      ? "primary"
                                      : e.params.index;
                                  const s = {};
                                  for (const r of e.params.keys) {
                                    const n =
                                      this.computePartitionKeyFromEntityKey(
                                        e.meta.tableConfig,
                                        r,
                                        t
                                      );
                                    if (void 0 === n)
                                      return void this.rejectQuery(
                                        e,
                                        new v.q()
                                      );
                                    s[n] || (s[n] = []), s[n].push(r);
                                  }
                                  const n = Object.entries(s);
                                  let i;
                                  if (1 === n.length)
                                    (i = n[0][0]),
                                      void 0 !== i
                                        ? (e.meta.partitionKey = `${i}`)
                                        : this.rejectQuery(e, new v.q());
                                  else {
                                    e.meta.dead = !0;
                                    const t = n.map(([t, s]) => {
                                      const n = t;
                                      return this.doImmediately(
                                        Object(r.a)(
                                          Object(r.a)({}, e),
                                          {},
                                          {
                                            meta: Object(r.a)(
                                              Object(r.a)({}, e.meta),
                                              {},
                                              {
                                                partitionKey: n,
                                                error: new Error(),
                                              }
                                            ),
                                            params: Object(r.a)(
                                              Object(r.a)({}, e.params),
                                              {},
                                              { keys: s }
                                            ),
                                            deferrer: void 0,
                                          }
                                        )
                                      );
                                    });
                                    Promise.all(t)
                                      .then((t) => e.deferrer.resolve(t.flat()))
                                      .catch(e.deferrer.reject);
                                  }
                                }
                                computePartitionForUpdateMultiQuery(e) {
                                  const { patches: t } = e.params,
                                    s = {};
                                  for (const r of t) {
                                    const { key: t } = r,
                                      n = this.computePartitionKeyFromEntityKey(
                                        e.meta.tableConfig,
                                        t
                                      );
                                    if (void 0 === n)
                                      return void this.rejectQuery(
                                        e,
                                        new v.q()
                                      );
                                    s[n] || (s[n] = []), s[n].push(r);
                                  }
                                  let n;
                                  const i = Object.entries(s);
                                  if (1 === i.length)
                                    (n = i[0][0]),
                                      void 0 !== n
                                        ? (e.meta.partitionKey = n)
                                        : this.rejectQuery(e, new v.q());
                                  else {
                                    const t = i.map(([t, s]) => {
                                      const n = t;
                                      return this.doImmediately(
                                        Object(r.a)(
                                          Object(r.a)({}, e),
                                          {},
                                          {
                                            meta: Object(r.a)(
                                              Object(r.a)({}, e.meta),
                                              {},
                                              {
                                                partitionKey: n,
                                                error: new Error(),
                                              }
                                            ),
                                            params: Object(r.a)(
                                              Object(r.a)({}, e.params),
                                              {},
                                              { patches: s }
                                            ),
                                            deferrer: void 0,
                                          }
                                        )
                                      );
                                    });
                                    Promise.all(t)
                                      .then((t) => e.deferrer.resolve(t.flat()))
                                      .catch(e.deferrer.reject);
                                  }
                                }
                                async computePartitionForCloseDBAndDeleteDBQuery(
                                  e
                                ) {
                                  e.meta.dead = !0;
                                  const { meta: t } = e,
                                    s = (
                                      await this.adapterManager.getExistedPartitionKeys(
                                        t.databaseName,
                                        t.databaseConfig.type
                                      )
                                    ).map((t) =>
                                      this.doImmediately(
                                        Object(r.a)(
                                          Object(r.a)({}, e),
                                          {},
                                          {
                                            meta: Object(r.a)(
                                              Object(r.a)({}, e.meta),
                                              {},
                                              {
                                                partitionKey: t,
                                                error: new Error(),
                                              }
                                            ),
                                            deferrer: void 0,
                                          }
                                        )
                                      )
                                    );
                                  Promise.all(s)
                                    .then(() => e.deferrer.resolve())
                                    .catch(e.deferrer.reject);
                                }
                                computePartitionKeyFromEntityValue(e, t) {
                                  const s = e.partitionField;
                                  if (void 0 !== s) return t[s];
                                }
                                computePartitionKeyFromEntityKey(
                                  e,
                                  t,
                                  s = "primary"
                                ) {
                                  const r = e.partitionField;
                                  if (void 0 !== r)
                                    return e.getIndex(s).getValue(t, r);
                                }
                                shouldReplicate(e) {
                                  switch (e.type) {
                                    case y.d.Clear:
                                    case y.d.Delete:
                                    case y.d.DeleteMulti:
                                    case y.d.FindAndDelete:
                                    case y.d.Insert:
                                    case y.d.InsertMulti:
                                    case y.d.Update:
                                    case y.d.UpdateMulti:
                                    case y.d.GetAndUpdate:
                                    case y.d.CloseDB:
                                    case y.d.CloseAllDBs:
                                    case y.d.DeleteDB:
                                    case y.d.DeleteAllDBs:
                                      return !0;
                                    default:
                                      return !1;
                                  }
                                }
                                logQueryInfo(e) {
                                  C.a.isBeginTransaction(e)
                                    ? this.logger.zsymb(
                                        12,
                                        11034,
                                        30004,
                                        () => [
                                          O.b.getTypeName(e.type),
                                          {
                                            database: e.meta.databaseName,
                                            table: e.params.tables.join(","),
                                            transaction: e.transaction,
                                            adapter:
                                              e.meta.databaseConfig.typeName,
                                          },
                                        ]
                                      )
                                    : this.logger.zsymb(
                                        12,
                                        11034,
                                        30005,
                                        () => [
                                          O.b.getTypeName(e.type),
                                          {
                                            database: e.meta.databaseName,
                                            table: e.table,
                                            transaction: e.transaction,
                                            adapter:
                                              e.meta.databaseConfig.typeName,
                                          },
                                        ]
                                      );
                                }
                                rejectQuery(e, t) {
                                  (e.meta.dead = !0), e.deferrer.reject(t);
                                }
                              })
                            ) || B)
                        ) || B)
                    ) || B)
                ) || B)
            ) || B)
        ) || B;
      i.ModuleContainer.registerSingleton(L.b, I);
    },
    i15Q: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return i;
      });
      var r = s("rePB"),
        n = s("KRcn");
      class i {
        constructor() {
          Object(r.a)(this, "_session", null),
            Object(r.a)(this, "_processStart", void 0),
            Object(r.a)(this, "_enableConsole", void 0),
            Object(r.a)(this, "isReady", () => !!this._session),
            Object(r.a)(this, "getSession", () => {
              if (!this._session) throw new Error("session is not ready");
              return this._session;
            }),
            Object(r.a)(this, "getProcessStartTime", () => this._processStart),
            Object(r.a)(this, "setSession", (e) => {
              this._session = e;
            }),
            (this._processStart = Date.now()),
            (this._session = {
              build: "0a3259aaae220fb07a3f001b08cc6f86c6850dc7",
              zlgv: "nam7I0LB",
              env: "prod",
              buildType: "release",
              pversion: s("kiQV").version,
              process: Object(n.a)(),
            }),
            (this._enableConsole = !1);
        }
        enableConsole() {}
        disableConsole() {}
        isEnabledConsole() {
          return this._enableConsole;
        }
      }
    },
    iGh7: function (e, t, s) {
      "use strict";
      s("cOPa"), s("mNvP");
    },
    j6JD: function (e, t, s) {
      "use strict";
      function r(e, t) {
        "string" == typeof e && (e = parseInt(e));
        const s = new Date(e),
          r = s.getDate(),
          i = s.getMonth() + 1,
          a = (s.getFullYear(), s.getHours()),
          o = s.getMinutes(),
          c = s.getSeconds();
        return null != t && t.dayOnly
          ? `${r}.${i}`
          : null != t && t.timeOnly
          ? `${n(a, 2)}:${n(o, 2)}:${n(c, 2)}`
          : `${r}.${i} ${n(a, 2)}:${n(o, 2)}:${n(c, 2)}`;
      }
      function n(e, t) {
        const s = e.toString();
        return s.length < t ? "0".repeat(t - s.length) + s : s;
      }
      s.d(t, "a", function () {
        return r;
      });
    },
    kMf4: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return f;
      });
      var r = s("rePB"),
        n = s("NLsH"),
        i = s.n(n),
        a = s("mw/K"),
        o = s.n(a),
        c = s("oyvS"),
        l = s.n(c),
        d = s("AH6j"),
        u = s("Y41u"),
        h = s("PLj1"),
        p = s("KRcn"),
        g = s("Yl80"),
        m = s("6rD8"),
        b = s("7FSS");
      class f extends d.b {
        constructor() {
          if (
            (super(),
            Object(r.a)(this, "_appFolder", void 0),
            Object(r.a)(this, "_process", void 0),
            Object(r.a)(this, "_mode", void 0),
            Object(r.a)(this, "_logPath", ""),
            Object(r.a)(this, "_metaPath", ""),
            Object(r.a)(this, "_modulePath", ""),
            Object(r.a)(this, "status", void 0),
            (this.status = m.a.Init),
            (this._process = Object(p.a)()),
            this._process === h.b.Main
              ? (this._appFolder = i.a.app.getPath("userData"))
              : (this._appFolder = window.electronAPI.getPath("userData")),
            (this._mode = g.b.Text),
            this._appFolder)
          ) {
            const e = l.a.join(this._appFolder, "logs");
            o.a.existsSync(e) || o.a.mkdirSync(e),
              (this._logPath = l.a.join(
                e,
                this._process + g.a[this._mode].logExt
              )),
              (this._metaPath = l.a.join(
                e,
                this._process + g.a[this._mode].metaExt
              )),
              (this._modulePath = l.a.join(
                e,
                this._process + g.a[this._mode].moduleExt
              ));
          }
        }
        get logPath() {
          return this._logPath;
        }
        get metaPath() {
          return this._metaPath;
        }
        get appFolder() {
          return this._appFolder;
        }
        get modulePath() {
          return this._modulePath;
        }
        read(e) {
          return e
            ? new Promise((t, s) => {
                o.a.access(e, o.a.constants.F_OK, (r) => {
                  if (r)
                    b.a.error("[ZLL]: unknown file data"), t(Buffer.alloc(0));
                  else {
                    const r = o.a.createReadStream(e),
                      n = [];
                    r.on("data", (e) => {
                      n.push(e);
                    }),
                      r.on("end", () => {
                        t(Buffer.concat(n)), r.destroy();
                      }),
                      r.on("error", (e) => {
                        b.a.error("[ZLL]: failed to read"), s(e);
                      });
                  }
                });
              })
            : (b.a.error("[ZLL]: invalid file path"),
              Promise.reject(new Error("file path is empty")));
        }
        writeDataAt(e, t, s) {
          return e
            ? new Promise((r, n) => {
                o.a.open(e, "r+", (i, a) => {
                  i
                    ? o.a.writeFile(e, t, (e) => {
                        e ? n(e) : r();
                      })
                    : o.a.write(a, t, 0, t.length, s, (t) => {
                        t
                          ? (b.a.error(`[ZLL]: failed to write ${e} at ${s}`),
                            n(t))
                          : o.a.close(a, (e) => {
                              e ? n(e) : r();
                            });
                      });
                });
              })
            : (b.a.error("[ZLL]: invalid file path"),
              Promise.reject(new Error("file path is empty")));
        }
        writeData(e, t, s) {
          return e
            ? new Promise((r, n) => {
                o.a.access(e, o.a.constants.F_OK, (i) => {
                  i
                    ? o.a.writeFile(e, t, (e) => {
                        e ? n(e) : r();
                      })
                    : s
                    ? this.writeDataAt(e, t, s).then(r).catch(n)
                    : o.a.writeFile(e, t, (e) => {
                        e ? n(e) : r();
                      });
                });
              })
            : Promise.reject(new Error("file path is empty"));
        }
        initFile(e) {
          return e
            ? new Promise((t, s) => {
                o.a.access(e, o.a.constants.F_OK, (r) => {
                  r
                    ? o.a.writeFile(e, "", (r) => {
                        r
                          ? (b.a.error(`[ZLL]: failed to init ${e}`), s(r))
                          : t();
                      })
                    : t();
                });
              })
            : (b.a.error(`[ZLL]: invalid file path ${e}`),
              Promise.reject(new Error("file path is empty")));
        }
        writeBetween(e, t, s, r) {
          return new Promise((n, i) => {
            o.a.open(e, "r+", (a, c) => {
              a
                ? (o.a.writeFile(e, t, (t) => {
                    t
                      ? (b.a.error(
                          `[ZLL]: failed to write between ${e} at ${s}`
                        ),
                        i(t))
                      : n();
                  }),
                  r && r(0))
                : o.a.write(c, t, 0, t.length, s, (e) => {
                    e
                      ? i(e)
                      : o.a.close(c, (e) => {
                          e ? i(e) : n();
                        });
                  });
            });
          });
        }
        truncateFileUpto(e, t) {
          return new Promise((s, r) => {
            o.a.truncate(e, t, (e) => {
              e ? (b.a.error("[ZLL]: truncate file error", e), r(e)) : s();
            });
          });
        }
        broadcastEvent(e, t) {
          if (e === u.d.WriterStatus) this.dispatchEvent(new u.b(e, t));
        }
      }
    },
    kiQV: function (e) {
      e.exports = JSON.parse(
        '{"name":"Zalo","homepage":"https://zalo.me/","version":"23.6.2","description":"Zalo - Nhắn gửi yêu thương","engines":{"npm":">=3"},"lint-staged":{"*.{js}":["node ./tools/prettier-include/index.js","eslint --quiet"],"*.{jsx,tsx,ts,scss,md,json,html,yml}":["node ./tools/prettier-include/index.js"]},"pre-commit":"check","main":"bootstrap.js","scripts":{"check":"lint-staged","preinstall":"node tools/nodeVersionCheck.js && git submodule init && git submodule update","postinstall":"npm run update-bundle-files-list && git config core.hooksPath .githooks","setup":"node tools/setup/setupMessage.js && npm install && node tools/setup/setup.js","remove-demo":"babel-node tools/removeDemo.js","start":"npm run init-zlog-vers && cross-env NODE_OPTIONS=\'--max-old-space-size=8192\' zpc-cli run dev:web","start-zaloapp":"npm run init-zlog-vers && cross-env NODE_OPTIONS=\'--max-old-space-size=8192\' WEB_DOMAIN=zaloapp zpc-cli run dev:web","open:src":"cross-env NODE_OPTIONS=\'--max-old-space-size=8192\' zpc-cli run dev:web","open:dist":"cross-env BABEL_ENV=web babel-node tools/distServer.js","update-about":"babel-node tools/updateAbout.js","distwname":"babel-node tools/dist-with-name.js","send-zlog":"node ./tools/zlog/collect-zlog-templates.js","send-zlog-web":"node ./tools/zlog/collect-zlog-templates-web.js","init-zlog-vers":"node ./tools/init-zlog-vers.js","prep":"rimraf ./node_modules/.cache ./zlog-dist && npm run sass && npm run lang","update-call-hash":"babel-node tools/update-call-hash.js","update-zavi-hash":"babel-node tools/update-zavi-hash.js","lint":"esw src --color --parser babel-eslint","lint-strict":"eslint main/*.js","m-lint":"eslint src/utils/meta-info-msg/*.js src/database/base-db.js","lint:watch":"npm run lint -- --watch","clean-dist":"npm run remove-dist && mkdir dist","remove-dist":"rimraf ./dist","prebuild":"npm run clean-dist && npm run sass && npm run lang","prebuild-pc":"npm run lint-strict && rimraf ./pc-dist && mkdir pc-dist && npm run sass && npm run lang","build-dev":"cross-env WEB_ENV=dev npm run build","build-prod":"cross-env WEB_ENV=prod npm run build","build-zaloapp-prod":"cross-env WEB_ENV=prod WEB_DOMAIN=zaloapp npm run build","build-zalome-prod":"cross-env WEB_ENV=prod WEB_DOMAIN=zalome npm run build","build:local":"npm run init-zlog-vers && npm run cross-env NODE_OPTIONS=\'--max-old-space-size=8192\' BUILD_TYPE=release zpc-cli run compile:web","build":"npm run init-zlog-vers && cross-env NODE_OPTIONS=\'--max-old-space-size=8192\' BUILD_TYPE=release node ./tools/zpc-cli.js run compile:web","compile:main":"npm run init-zlog-vers && cross-env NODE_OPTIONS=\'--max-old-space-size=8192\' zpc-cli run compile:main","build-pc":"npm run init-zlog-vers && cross-env NODE_OPTIONS=\'--max-old-space-size=8192\' zpc-cli run compile:renderer","build-pc-appX":"npm run init-zlog-vers && cross-env NODE_OPTIONS=\'--max-old-space-size=8192\' zpc-cli run compile:renderer:appx","test:cover":"babel-node node_modules/isparta/bin/isparta cover --root src --report html node_modules/mocha/bin/_mocha -- --require ./tools/testSetup.js \\"src/**/*.spec.js\\" --reporter progress","test:cover:travis":"babel-node node_modules/isparta/bin/isparta cover --root src --report lcovonly _mocha -- --require ./tools/testSetup.js \\"src/**/*.spec.js\\" && cat ./coverage/lcov.info | node_modules/coveralls/bin/coveralls.js","test:watch":"npm run test -- --watch","open:cover":"npm run test:cover && open coverage/index.html","test:electron":"electron ./test/main/download.js","test":"for f in $(find src -name *.spec.js); do NODE_PATH=./src mocha tools/testSetup.js \\"$f\\" --reporter progress; done;","wintest":"for %f in (src/utils/*.spec.js) do mocha tools/testSetup.js \\"src/utils/%f\\" done;","jest:test":"cross-env NODE_PATH=./src __PLATFORM__=WEB NODE_ENV=development jest --forceExit","jest:emoji":"cross-env NODE_PATH=./src __PLATFORM__=WEB jest test/core/parse-emoji.test.js --forceExit","jest:conversation":"cross-env NODE_PATH=./src __PLATFORM__=WEB jest --watch --testPathPattern=src/logic/conversation --forceExit","jest:log:test":"cross-env NODE_PATH=./src jest --runInBand --forceExit","jest:update":"cross-env NODE_PATH=./src jest -u","test:single":"cross-env NODE_PATH=./src mocha tools/testSetup.js src/utils/message.spec.js","test:file":"node ./test/file/test.js","test:ibparser":"cross-env NODE_PATH=./src mocha tools/testSetup.js  src/utils/inputbox-parser.spec.js","test:compare":"cross-env NODE_PATH=./src mocha tools/testSetup.js  src/utils/third-party/compare.spec.js","test:zstructures":"cross-env NODE_PATH=./src mocha tools/testSetup.js  src/utils/third-party/zstructures.spec.js","test:common":"cross-env NODE_PATH=./src mocha tools/testSetup.js src/utils/common.spec.js","test:schema":"cross-env NODE_PATH=./src jest --config= database/zdb/row-items/schema/data-validator.test.js --forceExit --detectOpenHandles","presass":"mkdirp src/static/css && mkdirp pc/static/fonts/zalo && ncp src/static/fonts/zalo/ pc/static/fonts/zalo/ && mkdirp pc/static/fonts/main  && ncp src/static/fonts/main/ pc/static/fonts/main/ ","sass":"sass src/static/scss/layout.scss src/static/css/layout.css && sass pc/static/scss/login.scss pc/static/css/login.css  && sass pc/static/scss/photo.scss pc/static/css/photo.css  && sass pc/static/scss/videocall.scss pc/static/css/videocall.css && sass src/static/scss/base/color-v1.scss src/static/css/color-v1.css && sass src/static/scss/base/darkmode.scss src/static/css/darkmode.css && sass src/static/scss/base/color-vtest.scss src/static/css/color-vtest.css","preelectron-start-dev":"npm run init-zlog-vers && cross-env NODE_OPTIONS=\'--max-old-space-size=8192\' zpc-cli run dev:main","electron-start-dev":"npm run init-zlog-vers && cross-env PC=1 BABEL_ENV=pc NODE_ENV=development electron .","predebug-main":"npm run init-zlog-vers && npm run init-zlog-vers && cross-env NODE_OPTIONS=\'--max-old-space-size=8192\' zpc-cli run dev:main","debug-main":"npm run init-zlog-vers && cross-env PC=1 BABEL_ENV=pc NODE_ENV=development electron . --inspect=9230","pc-compile":"cross-env FORCE_COLOR=1 PC=1 BABEL_ENV=pc NODE_ENV=development npm run electron-start-dev","pc-compile-2":"cross-env PC=1 BABEL_ENV=pc CLONE=1 NODE_ENV=development npm run electron-start-dev","v1-start-dev":"npm run init-zlog-vers && cross-env NODE_OPTIONS=\'--max-old-space-size=8192\' zpc-cli run dev:renderer","pc-start-dev":"npm run init-zlog-vers && cross-env NODE_OPTIONS=\'--max-old-space-size=8192\' zpc-cli run dev:renderer","start-pc":"npm run init-zlog-vers && npm-run-all -p pc-compile pc-start-dev","prepack":"npm run build-pc && npm run compile:main","prepack:win32":"npm run build-pc && npm run compile:main","prepack:winstaller":"npm run build-pc && npm run signtool && npm run compile:main","prewinstaller":"git submodule init && git submodule update","pack":"electron-builder --dir --config electron-builder.config.js","pack:win32":"cross-env BUILD_TYPE=release npm run pack:winstaller && node ./tools/afterpack.js ia32 && babel-node tools/genPartialUpdate.js ia32 -- ","pack:winstaller:no-build":"cross-env BUILD_TYPE=release ELECTRON_BUILDER_ALLOW_UNRESOLVED_DEPENDENCIES=true electron-builder --dir --ia32 --config electron-builder.config.js","pack:winstaller":"electron-builder --dir --ia32 --config electron-builder.config.js","pack:winstaller64":"electron-builder --dir --x64 --config electron-builder.config.js","postpack":"babel-node tools/genPartialUpdate.js","postpack:win32":"babel-node tools/genPartialUpdate.js ia32","predodist":"npm run build-pc && npm run signtool && npm run compile:main","predodist:win64":"npm run predodist","predodist:win32":"npm run predodist","predodist:mac":"node ./tools/predodistmac.js && npm run predodist","dodist":"electron-builder --config electron-builder.config.js","predodist:dir":"npm run build-pc && npm run signtool && npm run compile:main","dodist:mac":"electron-builder --mac --config electron-builder.config.js","dodist:dir":"electron-builder --dir --mac --config electron-builder.config.js","dodist:win":"electron-builder --win --config electron-builder.config.js","dodist:win32":"electron-builder --ia32 --config electron-builder.config.js","dodist:win64":"electron-builder --arch x64 --config electron-builder.config.js","pack:installer":"node ./tools/prebuild.js && npm run pack:winstaller && node ./tools/afterpack.js ia32 && electron-builder --prepackaged ./dist/win-ia32-unpacked/ --ia32 --config electron-builder.config.js && babel-node tools/genPartialUpdate.js ia32 -- ","pack:installer64":"node ./tools/prebuild.js && npm run pack:winstaller && node ./tools/afterpack.js x64 && electron-builder --prepackaged ./dist/win-unpacked/ --arch x64 --config electron-builder.config.js && babel-node tools/genPartialUpdate.js x64 -- ","pack:full":"node ./tools/prebuild.js && npm run pack:winstaller && node ./tools/afterpack.js ia32 && electron-builder --prepackaged ./dist/win-ia32-unpacked/ --ia32 --config electron-builder.config.js && babel-node tools/diffModule.js","dist:win32":"cross-env ELECTRON_BUILDER_ALLOW_UNRESOLVED_DEPENDENCIES=true NODE_OPTIONS=\'--max-old-space-size=4096\' BUILD_ENV=test npm run pack:installer","dist:win64":"cross-env ELECTRON_BUILDER_ALLOW_UNRESOLVED_DEPENDENCIES=true NODE_OPTIONS=\'--max-old-space-size=4096\' BUILD_ENV=test npm run pack:installer64","dist:win32release":"cross-env ELECTRON_BUILDER_ALLOW_UNRESOLVED_DEPENDENCIES=true NODE_OPTIONS=\'--max-old-space-size=4096\' BUILD_TYPE=release BUILD_ENV=test NEED_SIGN=1 npm run pack:installer","dist:win32fullpack":"cross-env ELECTRON_BUILDER_ALLOW_UNRESOLVED_DEPENDENCIES=true NODE_OPTIONS=\'--max-old-space-size=8096\' BUILD_TYPE=release BUILD_ENV=production NEED_SIGN=1 npm run pack:full","postpack:full":"","uploadsourcemapwin":"cross-env ZLOG_TYPE=PC sentry-cli releases files Zalo%npm_package_version% upload-sourcemaps pc-dist/ --url-prefix app:///pc-dist/ && sentry-cli releases files Zalo%npm_package_version% upload-sourcemaps main-dist/ --url-prefix app:///main-dist/ && npm run send-zlog","uploadsourcemapmac":"cross-env ZLOG_TYPE=PC sentry-cli releases files Zalo$npm_package_version upload-sourcemaps pc-dist/ --url-prefix app:///pc-dist/ && sentry-cli releases files Zalo$npm_package_version upload-sourcemaps main-dist/ --url-prefix app:///main-dist/ && npm run send-zlog","uploadsourcemapweb":"cross-env ZLOG_TYPE=WEB sentry-cli releases files Zalo$npm_package_version upload-sourcemaps dist/ --url-prefix ~/ && rm -r ./dist/sourcemaps && npm run send-zlog-web","dist:win32nobuild":"electron-builder --prepackaged ./dist/win-ia32-unpacked/ --ia32 --config electron-builder.config.js&& babel-node tools/genPartialUpdate.js ia32 -- ","dist:win":"cross-env ELECTRON_BUILDER_ALLOW_UNRESOLVED_DEPENDENCIES=true npm run dodist:win","dist:appX":"(npm run dodist:appX || true) && babel-node tools/rename-appx-64.js &&  npm run dodist:appX32","dist:mac":"cross-env ARCH=x64 ELECTRON_BUILDER_ALLOW_UNRESOLVED_DEPENDENCIES=true BUILD_ENV=test npm run dodist:mac","dist:macrelease":"cross-env ARCH=x64 NODE_OPTIONS=\'--max-old-space-size=4096\' ELECTRON_BUILDER_ALLOW_UNRESOLVED_DEPENDENCIES=true BUILD_TYPE=release NEED_SIGN=1 npm run dodist:mac","dist:mac:m1":"cross-env ARCH=arm64 ELECTRON_BUILDER_ALLOW_UNRESOLVED_DEPENDENCIES=true BUILD_ENV=test npm run dodist:mac","dist:macrelease:m1":"cross-env ARCH=arm64 NODE_OPTIONS=\'--max-old-space-size=4096\' ELECTRON_BUILDER_ALLOW_UNRESOLVED_DEPENDENCIES=true BUILD_TYPE=release NEED_SIGN=1 npm run dodist:mac","dist:macnobuild":"cross-env ELECTRON_BUILDER_ALLOW_UNRESOLVED_DEPENDENCIES=true electron-builder --mac --config electron-builder.config.js","dist":"cross-env NODE_OPTIONS=\'--max-old-space-size=2048\' ELECTRON_BUILDER_ALLOW_UNRESOLVED_DEPENDENCIES=true npm run dodist","predist:appX":"npm run build-pc-appX && npm run signtool && npm run compile:main","dodist:appX":"cross-env ELECTRON_BUILDER_ALLOW_UNRESOLVED_DEPENDENCIES=true electron-builder --win AppX --config electron-builder.config.js","dodist:appX32":"cross-env ELECTRON_BUILDER_ALLOW_UNRESOLVED_DEPENDENCIES=true electron-builder --win AppX --ia32  --config electron-builder.config.js","zip-pc":"babel-node tools/zipResource.js","db:clear":"babel-node tools/clearDb.js","icon:gen":"gulp icon","icon:check":"babel-node icon/checkIconsCli.js","icon":"babel-node icon/buildIcons.js && babel-node icon/createSVGFont.js && npm run sass","icon:full":"npm run icon:check && npm run icon && npm run sass ","lang":"mkdirp src/static/lang &&  cd ./InitLang && node ./run.js","signtool":"cross-env BABEL_ENV=node babel-node tools/sign-tool-win.js","install-native":"electron-builder install-app-deps","install-native-32":"electron-builder install-app-deps --arch=ia32","pack-module":"babel-node tools/genPartialUpdate.js ia32 -- ","update-bundle-files-list":"node ./tools/get-node-modules-glob.js","upload-native-symbol":"sentry-cli upload-dif -o vng -p zalopc --wait ./.symbols"},"author":{"name":"VNG Corp.","email":"feddback@zalo.me","url":"https://zalo.me/"},"license":"MIT","dependencies":{"@babel/plugin-transform-runtime":"7.11.0","@babel/preset-env":"7.11.0","@babel/preset-react":"7.10.4","@babel/runtime-corejs3":"7.11.2","@google-cloud/secret-manager":"4.0.0","@google-cloud/storage":"6.1.0","@reduxjs/toolkit":"1.5.1","@sentry/electron":"1.1.0","@sentry/react":"6.2.4","@tensorflow/tfjs":"0.15.3","@types/generic-pool":"3.1.9","adm-zip":"0.4.13","ajv":"5.2.2","archiver":"2.0.3","auto-launch":"^5.0.1","babel-plugin-module-resolver":"4.0.0","babel-plugin-transform-zlog":"1.17.1","big-integer":"1.6.23","bloom-filters":"1.3.8","broadcast-channel":"~4.10.0","cborg":"1.9.5","change-case":"4.1.2","chart.js":"2.7.2","check-disk-space":"2.1.0","clsx":"1.0.4","codemirror":"^5.59.0","core-js":"3.6.5","cron":"2.1.0","crypto-js":"3.1.8","decompress":"4.2.0","dompurify":"2.3.6","dropbox":"2.5.9","electron-log":"4.2.2","electron-store":"8.1.0","electron-updater":"4.0.0","es6-promise":"3.2.1","fast-memoize":"^2.5.2","file-saver":"1.3.3","file-type":"10.11.0","flatted":"3.2.5","fs-extra":"6.0.1","generic-pool":"3.7.2","glob":"7.1.2","google-libphonenumber":"3.1.15","immer":"7.0.5","jpeg-js":"0.4.1","js-yaml":"^3.8.4","jszip":"3.10.1","libphonenumber-js":"1.6.6","lodash.debounce":"4.0.8","lodash.toarray":"4.4.0","lottie-web":"^5.1.7","lowdb":"2.1.0","lz-string":"1.4.4","mediatr-ts":"0.3.0","microm":"0.2.4","mkdirp":"^0.5.1","moment":"^2.29.1","nanoid":"3.3.3","network":"0.5.0","node-fetch":"2.6.0","node-stream-zip":"1.8.0","node-wifi":"2.0.13","p-defer":"4.0.0","p-queue":"6.6.2","p-tap":"4.0.0","pako":"2.0.3","pdfjs-dist":"2.5.207","percentile":"1.6.0","progress-stream":"1.2.0","prop-types":"15.5.10","protobufjs":"6.11.2","quick-lru":"6.0.2","react":"16.14.0","react-codemirror2":"^7.2.1","react-custom-scrollbars":"^4.2.1","react-datetime":"file:native/zdate-time-picker","react-dom":"16.14.0","react-draggable":"^4.4.3","react-error-overlay":"6.0.7","react-input-range":"^1.3.0","react-intersection-observer":"8.25.2","react-measure":"2.0.2","react-motion":"0.5.2","react-redux":"7.2.4","react-refresh":"0.8.3","react-resizable":"^1.11.0","react-router-redux":"^4.0.8","react-simple-timefield":"3.2.5","react-transition-group":"4.4.1","react-virtualized":"9.9.0","recoil":"0.1.3","recompose":"0.30.0","redux":"4.0.5","redux-batched-subscribe":"0.1.6","redux-thunk":"2.3.0","reflect-metadata":"0.1.13","request":"2.88.0","reselect":"4.0.0","resize-observer-polyfill":"1.5.1","sift":"16.0.0","source-map-support":"0.5.19","spark-md5":"3.0.0","stackblur-canvas":"1.4.0","systeminformation":"5.6.12","tar-fs":"2.0.0","tmp":"0.0.31","tough-cookie":"^2.3.2","tsyringe":"4.6.0","unload":"git+https://zalogit2.zing.vn/zalo-pc/unload.git","unused-filename":"0.1.0","uuid":"3.1.0","workerpool":"6.1.0","xstate":"4.23.1"},"devDependencies":{"@babel/cli":"^7.0.0","@babel/core":"^7.0.0","@babel/eslint-parser":"7.12.1","@babel/node":"^7.0.0","@babel/plugin-proposal-class-properties":"7.12.1","@babel/preset-typescript":"7.12.7","@babel/register":"^7.0.0","@sentry/cli":"1.51.1","@types/async":"3.2.3","@types/codemirror":"0.0.98","@types/core-js":"2.5.4","@types/dompurify":"2.3.3","@types/gulp":"4.0.6","@types/jest":"26.0.23","@types/lodash.debounce":"4.0.6","@types/lodash.toarray":"4.4.6","@types/node":"17.0.35","@types/react":"^16.8.25","@types/react-custom-scrollbars":"4.0.8","@types/react-dom":"17.0.9","@types/react-resizable":"1.7.3","@types/react-transition-group":"4.4.0","@types/react-virtualized":"9.21.12","@types/rimraf":"3.0.2","@types/sqlite3":"3.1.8","@types/workerpool":"6.1.0","@typescript-eslint/parser":"4.22.0","babel-core":"^7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-jest":"^23.4.2","babel-plugin-encrypt-src":"^1.0.3","capitalize":"2.0.4","chai":"3.5.0","chalk":"1.1.3","connect":"3.6.6","consola":"2.15.0","coveralls":"2.11.12","cross-env":"^2.0.0-beta","debug":"4.1.1","devtron":"1.4.0","electron":"20.3.12","electron-builder":"20.44.4","electron-devtools-installer":"3.1.1","electron-download":"4.1.1","electron-notarize":"0.2.1","electron-publish":"19.53.3","enzyme":"3.3.0","eslint":"5.4.0","eslint-import-resolver-babel-module":"5.1.0","eslint-import-resolver-webpack":"0.6.0","eslint-plugin-babel":"3.3.0","eslint-plugin-import":"2.16.0","eslint-plugin-jest":"21.22.0","eslint-plugin-jsx-a11y":"2.1.0","eslint-plugin-react":"7.11.1","eslint-plugin-react-hooks":"2.4.0","eslint-watch":"2.1.14","faker":"5.5.3","globby":"11.0.1","gulp":"4.0.2","gulp-consolidate":"0.2.0","gulp-iconfont":"11.0.0","isparta":"4.0.0","jest":"23.6.0","jsftp":"1.5.5","lint-staged":"10.5.4","md5":"2.2.1","md5-file":"4.0.0","micromatch":"4.0.2","mocha":"4.1.0","ncp":"^2.0.0","node-abi":"^2.0.2","node-pre-gyp":"^0.6.37","node-sass":"4.12.0","nodemon":"1.11.0","npm":"6.14.2","npm-run-all":"2.3.0","open":"0.0.5","pre-commit":"1.2.2","prettier":"2.4.1","prompt":"1.0.0","react-hook-form":"7.31.3","react-hook-form-auto":"1.3.13","react-test-renderer":"16.5.1","recoilize":"2.0.1","redux-logger":"3.0.6","redux-perf-middleware":"1.1.0","regenerator-runtime":"0.13.7","replace":"0.3.0","rimraf":"2.5.4","serve-static":"1.13.2","shelving-mock-indexeddb":"1.0.8","sinon":"1.17.5","sinon-chai":"2.8.0","terser-webpack-plugin-legacy":"1.2.3","ts-jest":"26.5.6","ts-node":"8.10.2","typescript":"3.9.6","uglify-es":"3.3.7","uglifyjs-webpack-plugin":"1.1.6","utility-types":"3.10.0","walkdir":"0.0.12","webpack":"3.10.0","webpack-chain":"6.5.1","webpack-dev-middleware":"^2.0.4","webpack-hot-middleware":"^2.21.0","webpack-md5-hash":"0.0.5","webpack-strip":"0.1.0","webpack-virtual-modules":"0.4.3","yargs":"15.4.1"},"externals":[]}'
      );
    },
    mzek: function (e, t, s) {
      "use strict";
      var r,
        n = s("jDHv"),
        i = s("W8fB");
      let a = Object(n.injectable)()((r = class {})) || r;
      n.ModuleContainer.registerSingleton(i.b, a);
    },
    nAZb: function (e, t, s) {
      "use strict";
      var r = s("jDHv"),
        n = s("eVLP"),
        i = s("rePB"),
        a = s("fsQs"),
        o = s("j6JD"),
        c = s("7FSS"),
        l = s("kMf4");
      const d = { current: 0, ss: -1, ss_ln: -1, startups: [] };
      class u extends l.a {
        constructor() {
          super(),
            Object(i.a)(this, "_metas", void 0),
            Object(i.a)(this, "startupTime", void 0),
            Object(i.a)(this, "getSessionLineId", () => {
              let e = this._metas.ss;
              const t = (this._metas.ss_ln + 1) % a.l.SESSION_LINE_MAX;
              return (
                0 === t && (e = (e + 1) % a.l.SESSION_MAX),
                (this._metas.ss = e),
                (this._metas.ss_ln = t),
                { ss: e, ss_ln: t }
              );
            }),
            (this.startupTime = Object(o.a)(Date.now())),
            (this._metas = {
              current: d.current,
              ss: d.ss,
              ss_ln: d.ss_ln,
              startups: [this.startupTime, ...d.startups],
            });
        }
        get metas() {
          return this._metas;
        }
        init() {
          return this.loadMeta();
        }
        flush() {
          return this.write(this.metas);
        }
        write(e) {
          return this.writeData(this.metaPath, Buffer.from(JSON.stringify(e)));
        }
        getPath() {
          return this.metaPath;
        }
        _safeParse(e) {
          let t = {};
          try {
            t = JSON.parse(e);
          } catch {
            c.a.error("Failed to parse meta", this.metaPath);
          }
          return t;
        }
        async loadMeta() {
          let e = !1;
          try {
            const t = await this.read(this.metaPath),
              s = this._safeParse(null == t ? void 0 : t.toString());
            s &&
              (s.startups || (s.startups = []),
              s.startups.length >= a.a && s.startups.pop(),
              s.startups.unshift(this.startupTime),
              (this.metas.startups = s.startups),
              (this.metas.current = s.current || 0),
              (this.metas.ss =
                void 0 !== (null == s ? void 0 : s.ss) ? s.ss : -1),
              (this.metas.ss_ln = -1)),
              (e = !0);
          } catch (t) {
            c.a.error("Failed to load meta => Writing new", t);
          }
          if (!e)
            try {
              await this.write(this.metas);
            } catch (s) {
              c.a.error("Failed to write meta", s);
            }
          return this.metas;
        }
      }
      r.ModuleContainer.registerSingleton(n.a, u);
    },
    nUpV: function (e, t, s) {
      "use strict";
      var r = s("rePB"),
        n = s("jDHv"),
        i = s("YEoC"),
        a = (s("bSii"), s("UJ0r")),
        o = s("teaq");
      const c = i.a.IDB;
      var l,
        d = s("d/or");
      let u =
        n.ModuleContainer.injectable()(
          (l =
            Reflect.metadata(
              "design:type",
              Function
            )(
              (l =
                Reflect.metadata(
                  "design:paramtypes",
                  []
                )(
                  (l = class e {
                    constructor() {
                      Object(r.a)(this, "_preferAdapters", void 0),
                        Object(r.a)(this, "_settings", void 0),
                        (this._preferAdapters = []),
                        (this._settings = new Map());
                    }
                    get preferAdapters() {
                      return this._preferAdapters;
                    }
                    set preferAdapters(e) {
                      (this._preferAdapters = e),
                        this._settings.clear(),
                        this.save();
                      n.ModuleContainer.resolve(o.b).clearCache();
                    }
                    async load() {
                      n.ModuleContainer.resolve(a.b);
                      throw new Error(
                        "'zdb_setting' localStorage key is no longer in-use! Please remove it usage!"
                      );
                    }
                    async save() {
                      e.deserializePreferAdapter(this._preferAdapters),
                        e.deserializeDatabaseSettings(this._settings);
                      throw new Error(
                        "'zdb_setting' localStorage key is no longer in-use! Please remove it usage!"
                      );
                    }
                    getPreferredAdapter(e) {
                      var t;
                      return null === (t = this._settings.get(e)) ||
                        void 0 === t
                        ? void 0
                        : t.preferAdapter;
                    }
                    setPreferAdapter(e, t) {
                      let s = this._settings.get(e);
                      s
                        ? (s.preferAdapter = t)
                        : (s = { currentAdapter: t, preferAdapter: t }),
                        this._settings.set(e, s),
                        this.save();
                    }
                    getCurrentAdapterType(e) {
                      let t = this._settings.get(e);
                      return (
                        t ||
                          ((t = { currentAdapter: c }),
                          this._settings.set(e, t)),
                        t.currentAdapter
                      );
                    }
                    setCurrentAdapter(e, t) {
                      let s = this._settings.get(e);
                      s
                        ? (s.currentAdapter = t)
                        : (s = { currentAdapter: t, preferAdapter: t }),
                        this._settings.set(e, s);
                    }
                    getDatabaseState(e) {
                      return this._settings.get(e);
                    }
                    static deserializePreferAdapter(e) {
                      return e.map((e) => (e === i.a.IDB ? "IDB" : "SQLite"));
                    }
                    static serializePreferAdapter(e) {
                      return e.adapter.map((e) =>
                        "IDB" === e ? i.a.IDB : i.a.SQLite
                      );
                    }
                    static deserializeDatabaseSettings(e) {
                      return Array.from(e.entries());
                    }
                    static serializeDatabaseSettings(e) {
                      return new Map(e.databases);
                    }
                  })
                ) || l)
            ) || l)
        ) || l;
      n.ModuleContainer.registerSingleton(d.a, u);
    },
    rhBN: function (e, t, s) {
      "use strict";
      var r,
        n = s("rePB"),
        i = s("jDHv"),
        a = s("UK4g"),
        o = s("YEoC"),
        c = s("DI/x"),
        l = s("tHMN"),
        d = s("LzQZ");
      let u =
        i.ModuleContainer.injectable()(
          (r =
            (function (e, t) {
              return i.ModuleContainer.inject(l.b)(e, void 0, 0);
            })(
              (r =
                Reflect.metadata(
                  "design:type",
                  Function
                )(
                  (r =
                    Reflect.metadata("design:paramtypes", [
                      void 0 === l.b ? Object : l.b,
                    ])(
                      (r = class {
                        constructor(e) {
                          (this.engine = e),
                            Object(n.a)(this, "currentId", 1),
                            Object(n.a)(this, "transactions", void 0),
                            (this.transactions = new Map());
                        }
                        get(e) {
                          const t = this.transactions.get(e);
                          if (!t)
                            throw new c.h(
                              "The transaction has already committed!"
                            );
                          return t;
                        }
                        async beginTransaction(e, t, s) {
                          const r = this.currentId++,
                            n = new Error(),
                            i = await this.engine.do({
                              type: o.d.BeginTransaction,
                              database: e,
                              table: t[0],
                              transaction: r,
                              priority: o.c.BLOCKING,
                              retry: a.i,
                              timing: {},
                              meta: { step: -1, timeout: a.k, error: n },
                              params: { tables: t, mode: s },
                              trace: () => {},
                            });
                          return this.transactions.set(r, i), i;
                        }
                        commitTransaction(e) {
                          const t = this.transactions.get(e);
                          return !t || t.closed
                            ? (t && this.transactions.delete(e),
                              Promise.resolve())
                            : new Promise((s, r) => {
                                t.onClose(() => {
                                  this.transactions.delete(e),
                                    t.error ? r(t.error) : s();
                                });
                              });
                        }
                      })
                    ) || r)
                ) || r)
            ) || r)
        ) || r;
      i.ModuleContainer.registerSingleton(d.a, u);
    },
    upkw: function (e, t, s) {
      "use strict";
      function r() {
        return s("EXGp").sqlite3();
      }
      let n;
      s.r(t),
        s.d(t, "getSqlite", function () {
          return r;
        }),
        s.d(t, "SQLiteLib", function () {
          return n;
        }),
        n || (n = {});
    },
    "v/rv": function (e, t, s) {
      "use strict";
      var r,
        n = s("jDHv"),
        i = s("DWs9"),
        a = s("fsQs"),
        o = s("Y41u"),
        c = s("6rD8"),
        l = s("ebA4"),
        d = s("kMf4");
      let u =
        Object(n.injectable)()(
          (r = class extends d.a {
            writer_status() {
              return this.status;
            }
            getPath() {
              return this.logPath;
            }
            async init(e) {
              (this.status = c.a.Init),
                await this.initFile(this.logPath),
                (this.status = c.a.Idle),
                this.broadcastEvent(o.d.WriterStatus, {
                  type: c.b.PhysicalTextWriter,
                  status: c.a.Idle,
                });
            }
            async write(e, t, s) {
              if (this.status !== c.a.Idle) return !1;
              if (0 === e.length) return !0;
              let r = t.current;
              for (; e.length; ) {
                const [n, i] = this.encodeLogsFit(e, r, a.d.file_lim, s);
                if (
                  (n.length &&
                    (await this.writeLines(n, r, (e) => {
                      r = e;
                    })),
                  0 === e.length)
                )
                  return (r = (r + i) % a.d.file_lim), (t.current = r), !0;
                (r = (r + i) % a.d.file_lim),
                  r < a.d.file_lim &&
                    (await this.truncateFileUpto(this.logPath, r), (r = 0));
              }
              return (t.current = r), !0;
            }
            encodeLogsFit(e, t, s, r) {
              const n = [];
              let i = 0;
              const a = s - t;
              for (; e.length; ) {
                const t = r(),
                  s = Object(l.d)(e[0], t);
                if (i + s.length > a) break;
                n.push(s), (i += s.length), e.shift();
              }
              return [n, i];
            }
            async writeLines(e, t, s) {
              const r = Buffer.concat(e);
              await this.writeBetween(this.logPath, r, t, s);
            }
          })
        ) || r;
      n.ModuleContainer.registerSingleton(i.b, u);
    },
    xDXR: function (e, t, s) {
      "use strict";
      var r = s("VTBJ"),
        n = s("mwIZ"),
        i = s.n(n),
        a = s("D1y2"),
        o = s.n(a),
        c = s("jDHv"),
        l = s("Y58e");
      c.ModuleContainer.registerSingleton(
        l.a,
        class {
          get(e) {
            const t = s("NDmK").default;
            return i()(t, e);
          }
          set(e, t) {
            const n = s("NDmK").default,
              a = Object(r.a)(Object(r.a)({}, i()(n, e)), t);
            return o()(n, e, a);
          }
        }
      );
    },
    zheM: function (e, t, s) {
      "use strict";
      var r,
        n = s("jDHv"),
        i = s("DWs9"),
        a = s("rePB"),
        o = s("6rD8"),
        c = s("ebA4"),
        l = s("kMf4"),
        d = s("7FSS"),
        u = s("TMLr"),
        h = s("ez9R"),
        p = s("fsQs"),
        g = s("mw/K"),
        m = s.n(g);
      let b =
        Object(n.injectable)()(
          (r =
            (function (e, t) {
              return Object(n.inject)(u.a)(e, void 0, 0);
            })(
              (r =
                (function (e, t) {
                  return Object(n.inject)(h.a)(e, void 0, 1);
                })(
                  (r =
                    Reflect.metadata(
                      "design:type",
                      Function
                    )(
                      (r =
                        Reflect.metadata("design:paramtypes", [
                          void 0 === u.a ? Object : u.a,
                          void 0 === h.a ? Object : h.a,
                        ])(
                          (r = class extends l.a {
                            constructor(e, t) {
                              super(),
                                (this.ModuleWriter = e),
                                (this.Encoder = t),
                                Object(a.a)(
                                  this,
                                  "LogBatch",
                                  new ArrayBuffer(p.j.mem_batch_lim)
                                ),
                                Object(a.a)(this, "LogBatchDataview", void 0),
                                Object(a.a)(this, "isTopLogEncoded", !1),
                                Object(a.a)(this, "batchOffset", 0),
                                (this.LogBatchDataview = new DataView(
                                  this.LogBatch
                                ));
                            }
                            writer_status() {
                              return this.status;
                            }
                            getPath() {
                              return this.logPath;
                            }
                            async init(e) {
                              if (
                                ((this.status = o.a.Init),
                                m.a.existsSync(this.logPath))
                              )
                                try {
                                  const t = await this.readFileAsArrayBuffer(
                                    this.logPath
                                  );
                                  e.current = this._validateMetas(t);
                                } catch (t) {
                                  d.a.error(
                                    "Error while chceking log file",
                                    this.logPath,
                                    t
                                  );
                                }
                              else await this.initFile(this.logPath);
                              this.status = o.a.Idle;
                            }
                            async write(e, t, s) {
                              if (this.status !== o.a.Idle) return !1;
                              if (0 === e.length) return !0;
                              const r = p.d.file_lim - t.current;
                              r <= 0 &&
                                (r < 0 &&
                                  (await this.truncateFileUpto(
                                    this.logPath,
                                    p.d.file_lim
                                  )),
                                (t.current = 0));
                              let n = p.c.OK;
                              for (
                                ;
                                this.batchOffset + p.j.line_hard_lim <=
                                  p.j.mem_batch_lim &&
                                e.length > 0 &&
                                this.batchOffset < r;

                              ) {
                                let t;
                                if (this.isTopLogEncoded)
                                  t = this.Encoder.getLastBuffer();
                                else {
                                  const r = e[0],
                                    n = this.ModuleWriter.get([
                                      r.lineMeta.module,
                                      r.lineMeta.features,
                                    ]),
                                    i = s();
                                  t = this.Encoder.encode(r, n, i);
                                }
                                if (t.byteLength + this.batchOffset > r) {
                                  n = p.c.REWIND;
                                  break;
                                }
                                (this.batchOffset = Object(c.a)(
                                  this.LogBatchDataview,
                                  this.batchOffset,
                                  t
                                )),
                                  e.shift(),
                                  (this.isTopLogEncoded = !1);
                              }
                              const i = (e) => (t.current = e);
                              return (
                                this.batchOffset > 0 &&
                                  (await this.writeBatch(t.current, i),
                                  (this.batchOffset = 0),
                                  await this.ModuleWriter.flush()),
                                n === p.c.REWIND &&
                                  (this.truncateFileUpto(
                                    this.logPath,
                                    t.current
                                  ),
                                  i(0),
                                  (n = p.c.OK)),
                                !0
                              );
                            }
                            async writeBatch(e, t) {
                              const s = Buffer.from(
                                this.LogBatch.slice(0, this.batchOffset)
                              );
                              await this.writeBetween(this.logPath, s, e, (e) =>
                                t(e)
                              ),
                                t(e + s.byteLength);
                            }
                            readFileAsArrayBuffer(e) {
                              return new Promise((t, s) => {
                                const r = m.a.createReadStream(e),
                                  n = [];
                                r.on("data", (e) => {
                                  n.push(e);
                                }),
                                  r.on("end", () => {
                                    t(Buffer.concat(n).buffer), r.destroy();
                                  }),
                                  r.on("error", (e) => {
                                    s(e), r.destroy();
                                  });
                              });
                            }
                            _validateMetas(e) {
                              let t = 0,
                                s = { ts: 0, start: 0 };
                              try {
                                for (; t < e.byteLength; ) {
                                  if (t >= e.byteLength - 1) return s.start;
                                  const r = Object(c.e)(e, t);
                                  if (r <= 2 || t + r > e.byteLength) {
                                    t++;
                                    continue;
                                  }
                                  const n = Object(c.e)(e, t + r - 2);
                                  if (
                                    t + n > e.byteLength ||
                                    r !== n ||
                                    -1 === r ||
                                    -1 === n
                                  ) {
                                    t++;
                                    continue;
                                  }
                                  const i = Object(c.b)(e.slice(t + 2, t + 10));
                                  i > s.ts && ((s.ts = i), (s.start = t)),
                                    (t += r);
                                }
                              } catch (r) {
                                d.a.error(
                                  "error while validating metas",
                                  r,
                                  `${t}/${e.byteLength}`
                                );
                              }
                              return s.start;
                            }
                          })
                        ) || r)
                    ) || r)
                ) || r)
            ) || r)
        ) || r;
      n.ModuleContainer.registerSingleton(i.a, b);
    },
  },
]);
//# sourceMappingURL=../sourcemaps/lazy/default-login-startup-main-startup-photo-shared-worker.113152a37cc20799d1aa.js.map
