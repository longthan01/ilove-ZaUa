(this.webpackJsonp = this.webpackJsonp || []).push([
  [8],
  {
    FX2a: function (e, t, i) {
      "use strict";
      i("0rWR"),
        i("Lq8m"),
        i("nUpV"),
        i("5yGw"),
        i("hRcX"),
        i("gpNb"),
        i("rhBN"),
        i("cF85"),
        i("ejhj");
      var n,
        r = i("rePB"),
        s = i("8/YW"),
        o = i("UK4g"),
        a = i("PmZf"),
        c = i("tHMN"),
        d = i("1UUk"),
        l = i("jDHv"),
        u = i("fsN4"),
        h = i("Mgpg");
      let g =
        l.ModuleContainer.injectable()(
          (n =
            (function (e, t) {
              return l.ModuleContainer.inject(c.b)(e, void 0, 0);
            })(
              (n =
                (function (e, t) {
                  return l.ModuleContainer.inject(h.ZLoggerFactory)(
                    e,
                    void 0,
                    1
                  );
                })(
                  (n =
                    Reflect.metadata(
                      "design:type",
                      Function
                    )(
                      (n =
                        Reflect.metadata("design:paramtypes", [
                          void 0 === c.a ? Object : c.a,
                          void 0 === h.ZLoggerFactory
                            ? Object
                            : h.ZLoggerFactory,
                        ])(
                          (n = class extends d.a {
                            constructor(e, t) {
                              super(),
                                (this.engine = e),
                                Object(r.a)(this, "ipcRenderer", void 0),
                                Object(r.a)(this, "logger", void 0),
                                (this.logger = t.createZLogger("db", ["host"])),
                                (this.ipcRenderer = null),
                                this.engine.addEventListener(
                                  a.a.UnexpectedError,
                                  (e) => {
                                    this.dispatchEvent(new a.d(e.error));
                                  }
                                ),
                                this.engine.addEventListener(
                                  a.a.QueryError,
                                  (e) => {
                                    this.dispatchEvent(new a.b(e.error));
                                  }
                                );
                            }
                            install() {
                              (this.ipcRenderer = i("NLsH").ipcRenderer),
                                this.ipcRenderer.on(o.f, async (e, t) => {
                                  this.logger.zsymb(
                                    0,
                                    11032,
                                    3e4,
                                    "closing requested databases ..."
                                  ),
                                    await this._closeDBs(t),
                                    this.ipcRenderer &&
                                      this.ipcRenderer.send(
                                        o.e,
                                        __ZaBUNDLENAME__
                                      );
                                }),
                                this.ipcRenderer.send(o.d, __ZaBUNDLENAME__);
                              const e = l.ModuleContainer.resolve(s.a);
                              e.addEventListener(s.b.Authenticated, (e) => {
                                this.authenticate(e.getSession());
                              }),
                                e.currentSession &&
                                  this.authenticate(e.currentSession);
                            }
                            areYouOk() {
                              return !0;
                            }
                            authenticate(e) {
                              e &&
                                ((this.session = e),
                                this.dispatchEvent(new a.c(e)),
                                this.logger.zsymb(0, 11032, 30001, () => [
                                  "authenticated",
                                  `id: ${e.userId}`,
                                ]),
                                this.ipcRenderer &&
                                  this.ipcRenderer.send(o.c, e));
                            }
                            async _closeDBs(e) {
                              const t = u.a.getInstance();
                              let i = [];
                              e
                                ? e.length &&
                                  (i = e.map((e) => t[e].closeThisDatabase()))
                                : (i = [t.closeAllDatabases()]),
                                await Promise.all(i);
                            }
                            async closeDBs(e) {
                              if (
                                (this.logger.zsymb(
                                  0,
                                  11032,
                                  30002,
                                  "send closing requested databases signal"
                                ),
                                this.ipcRenderer)
                              )
                                return (
                                  this.ipcRenderer.send(
                                    o.f,
                                    e,
                                    __ZaBUNDLENAME__
                                  ),
                                  new Promise((e) => {
                                    var t;
                                    const i = () => {
                                      var t;
                                      this.logger.zsymb(
                                        0,
                                        11032,
                                        30003,
                                        "All clients have finished closing the requested DBs"
                                      ),
                                        e(),
                                        null === (t = this.ipcRenderer) ||
                                          void 0 === t ||
                                          t.removeListener(o.e, i);
                                    };
                                    null === (t = this.ipcRenderer) ||
                                      void 0 === t ||
                                      t.on(o.e, i);
                                  })
                                );
                            }
                          })
                        ) || n)
                    ) || n)
                ) || n)
            ) || n)
        ) || n;
      l.ModuleContainer.registerSingleton(d.b, g);
      const m = Object(l.define)("database-monitor");
      class v {
        constructor(e, t) {
          Object(r.a)(this, "name", void 0),
            Object(r.a)(this, "description", void 0),
            Object(r.a)(this, "count", void 0),
            Object(r.a)(this, "info", void 0),
            (this.name = e),
            (this.description = t),
            (this.count = 0),
            (this.info = {});
        }
        report(e) {
          this.count++,
            "string" != typeof e
              ? e.reduce(
                  (e, t) => (this.handleIssue(e, t), e[t].child),
                  this.info
                )
              : this.handleIssue(this.info, e);
        }
        handleIssue(e, t) {
          e[t] || (e[t] = { count: 0, child: {} }), e[t].count++;
        }
      }
      var p;
      let b =
        l.ModuleContainer.injectable()(
          (p =
            (function (e, t) {
              return l.ModuleContainer.inject(h.ZLoggerFactory)(e, void 0, 0);
            })(
              (p =
                (function (e, t) {
                  return l.ModuleContainer.inject(d.b)(e, void 0, 1);
                })(
                  (p =
                    Reflect.metadata(
                      "design:type",
                      Function
                    )(
                      (p =
                        Reflect.metadata("design:paramtypes", [
                          void 0 === h.ZLoggerFactory
                            ? Object
                            : h.ZLoggerFactory,
                          void 0 === d.a ? Object : d.a,
                        ])(
                          (p = class {
                            constructor(e, t) {
                              (this.loggerFactory = e),
                                (this.databaseManager = t),
                                Object(r.a)(this, "queryErrorReport", void 0),
                                Object(r.a)(this, "renderCallback", void 0),
                                Object(r.a)(this, "logger", void 0),
                                (this.queryErrorReport = new v(
                                  "QueryError",
                                  "Exception when execute query"
                                )),
                                (this.renderCallback = []),
                                (this.logger = this.loggerFactory.createZLogger(
                                  "db",
                                  ["monitor"]
                                ));
                            }
                            install() {
                              this.databaseManager.addEventListener(
                                a.a.QueryError,
                                (e) => this.onQueryError(e.error)
                              );
                            }
                            listen(e) {
                              return (
                                this.renderCallback.push(e),
                                () => {
                                  this.renderCallback =
                                    this.renderCallback.filter((t) => t !== e);
                                }
                              );
                            }
                            onQueryError(e) {
                              this.logger.zsymb(18, 8322, 3e4, () => [
                                "query-error",
                                e.name,
                                e.message,
                              ]),
                                this.queryErrorReport.report([e.name]),
                                this.renderCallback.forEach((e) => e());
                            }
                          })
                        ) || p)
                    ) || p)
                ) || p)
            ) || p)
        ) || p;
      l.ModuleContainer.registerSingleton(m, b);
    },
    TGaw: function (e, t, i) {
      "use strict";
      var n = i("jDHv"),
        r = i("8/YW"),
        s = (i("jw3m"), i("Y58e")),
        o = i("UGJm");
      let a;
      !(function (e) {
        (e.Idle = "Idle"), (e.Active = "Active");
      })(a || (a = {}));
      var c = i("rePB"),
        d = i("AH6j");
      let l;
      !(function (e) {
        (e[(e.idle = 0)] = "idle"), (e[(e.active = 1)] = "active");
      })(l || (l = {}));
      class u extends d.b {
        constructor(e) {
          super(),
            Object(c.a)(this, "status", l.active),
            Object(c.a)(this, "window", void 0),
            Object(c.a)(this, "idleDelay", void 0),
            Object(c.a)(this, "minimumIdlePeriod", void 0),
            Object(c.a)(this, "lastIdleTime", void 0),
            Object(c.a)(this, "focusStateChangeDebounceTimer", void 0),
            Object(c.a)(this, "handleDocumentBlur", () => {
              this.resetFocusStateChangeDebounceTimer(),
                (this.focusStateChangeDebounceTimer = setTimeout(() => {
                  this.setStateToIdle();
                }, this.idleDelay));
            }),
            Object(c.a)(this, "handleDocumentFocus", () => {
              this.resetFocusStateChangeDebounceTimer(),
                this.setStateToActive();
            }),
            (this.idleDelay = e.idleDelay),
            (this.minimumIdlePeriod = e.minimumIdlePeriod),
            (this.window = e.window || window),
            (this.lastIdleTime = 0),
            (this.focusStateChangeDebounceTimer = null);
        }
        start() {
          this.window.addEventListener("blur", this.handleDocumentBlur),
            this.window.addEventListener("focus", this.handleDocumentFocus);
        }
        stop() {
          this.window.removeEventListener("blur", this.handleDocumentBlur),
            this.window.removeEventListener("focus", this.handleDocumentFocus);
        }
        onIdle(e) {
          return this.addEventListener(a.Idle, e);
        }
        setStateToActive() {
          this.status !== l.idle ||
            ((this.status = l.active), this.dispatchEvent(new Event(a.Active)));
        }
        setStateToIdle() {
          if (this.status !== l.active) return;
          this.isThrottlingIdleState() ||
            ((this.lastIdleTime = Date.now()),
            (this.status = l.idle),
            this.dispatchEvent(new Event(a.Idle)));
        }
        isThrottlingIdleState() {
          return Date.now() - this.lastIdleTime < this.minimumIdlePeriod;
        }
        resetFocusStateChangeDebounceTimer() {
          this.focusStateChangeDebounceTimer &&
            (clearTimeout(this.focusStateChangeDebounceTimer),
            (this.focusStateChangeDebounceTimer = null));
        }
      }
      var h = i("q1tI"),
        g = i.n(h),
        m = i("Vg22"),
        v = i("FK2X"),
        p = i("emRR"),
        b = i("xrk1"),
        E = i("ZBGy"),
        f = i("9Ht6"),
        O = i("uzdi");
      const D = Object(O.a)();
      function I() {
        const e = D.useRecoilSnapshot();
        return D.setSnapShot(e), null;
      }
      var T = i("QVmZ"),
        _ = i("72hn"),
        j = i("ZlRg"),
        R = i("VaDh"),
        w = i("CzFt"),
        S = i("hI9i");
      const A = Object(m.connect)(
          function (e) {
            return {
              user: e.user,
              popup: e.popup,
              status: e.status,
              profile: e.profile,
              zaviState: e.zaviState,
              chatview: e.chatview,
            };
          },
          function (e) {
            const t = Object(E.d)(e);
            return { emitter: Object(E.c)(), dispatch: t };
          }
        )(v.c),
        y = () =>
          g.a.createElement(
            m.Provider,
            { store: w.a, context: w.b },
            g.a.createElement(
              b.d,
              null,
              g.a.createElement(
                m.Provider,
                { store: T.a, context: _.a },
                g.a.createElement(
                  m.Provider,
                  { store: p.default },
                  g.a.createElement(
                    m.Provider,
                    { store: S.b, context: S.a },
                    g.a.createElement(
                      E.b,
                      null,
                      g.a.createElement(
                        f.RecoilRoot,
                        null,
                        g.a.createElement(
                          m.Provider,
                          { context: R.a, store: j.a },
                          g.a.createElement(I, null),
                          g.a.createElement(A, null)
                        )
                      )
                    )
                  )
                )
              )
            )
          );
      var C,
        L = i("Mgpg");
      let P =
        Object(n.injectable)()(
          (C =
            (function (e, t) {
              return Object(n.inject)(s.a)(e, void 0, 0);
            })(
              (C =
                (function (e, t) {
                  return Object(n.inject)(L.ZLoggerFactory)(e, void 0, 1);
                })(
                  (C =
                    Reflect.metadata(
                      "design:type",
                      Function
                    )(
                      (C =
                        Reflect.metadata("design:paramtypes", [
                          void 0 === s.a ? Object : s.a,
                          void 0 === L.ZLoggerFactory
                            ? Object
                            : L.ZLoggerFactory,
                        ])(
                          (C = class extends o.a {
                            constructor(e, t) {
                              super("zalo", e, t, {
                                component: y,
                                container: document.getElementById("app"),
                              });
                            }
                            async start() {
                              this.setupIdleDetector(), await super.start();
                            }
                            setupIdleDetector() {
                              const e = this.config.get("idle_detector"),
                                t = new u(e);
                              t.addEventListener(a.Idle, () => {
                                this.setStateToIdle();
                              }),
                                t.addEventListener(a.Active, () =>
                                  this.setStateToActive()
                                ),
                                t.start(),
                                this.disposables.add(() => t.stop()),
                                document.hasFocus()
                                  ? this.setStateToActive()
                                  : this.setStateToIdle();
                            }
                          })
                        ) || C)
                    ) || C)
                ) || C)
            ) || C)
        ) || C;
      n.ModuleContainer.registerSingleton(r.a, P);
    },
    UGJm: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return d;
      });
      var n = i("rePB"),
        r = i("q1tI"),
        s = i.n(r),
        o = i("i8i4"),
        a = i.n(o),
        c = i("Jcee");
      class d extends c.b {
        constructor(e, t, i, r) {
          super(e, t, i),
            Object(n.a)(this, "container", void 0),
            Object(n.a)(this, "component", void 0),
            (this.container = r.container),
            (this.component = r.component);
        }
        async start() {
          await super.start(), this.render();
        }
        render() {
          a.a.render(s.a.createElement(this.component), this.container);
        }
      }
    },
    WrSY: function (e, t, i) {
      "use strict";
      i("EmOc"),
        i("ezdo"),
        i("KdAX"),
        i("mzek"),
        i("v/rv"),
        i("nAZb"),
        i("c0KM"),
        i("zheM"),
        i("CXIs"),
        i("cZjg");
      var n = i("YrRS");
      Object(n.a)();
    },
    jw3m: function (e, t, i) {},
    o0oJ: function (e, t, i) {
      const n = {};
      function r(e) {
        return n[e] || (n[e] = 0), (n[e] += 1), 100 * e + n[e];
      }
      if (!global.perf) {
        let e;
        e = () => i("89t2").performance.now();
        const t = {
          STARTUP: r(1),
          MIGRATION_DONE: r(2),
          MAIN_SCRIPT: r(2),
          LOADED_MAIN_SCRIPT: r(3),
          MAIN_APP_READY: r(3),
          LOADED_STARTUP_SCRIPT: r(2),
          STARTUP_BEFORE_HEAVY: r(3),
          CREATE_MAIN_WINDOW: r(3),
          SHOW_MAIN_WINDOW: r(3),
          MAIN_WINDOW_LOADING: r(3),
          MAIN_WINDOW_LOADED: r(3),
          APP_STARTUP: r(2),
          LOAD_APP_SCRIPT: r(3),
          APP_DID_MOUNT: r(3),
          CHATBOX_DID_MOUNT: r(3),
          SELECT_CONVERSATION: r(1),
          SELECTED_CONVERSATION: r(2),
        };
        global.perf = {
          ...t,
          perfRecords: [],
          record: (t) => {
            t || (t = 0);
            const i = [t, e()];
            global.perf.perfRecords.push(i);
          },
        };
      }
    },
    tPRg: function (e, t, i) {
      "use strict";
      i("o0oJ"), i("dThN"), i("z0WU"), i("vSga"), i("XS0u");
      perf.record(perf.LOAD_APP_SCRIPT),
        (function () {
          window.__loadTimer && clearTimeout(window.__loadTimer);
          window.__startTime &&
            i("NLsH").ipcRenderer.send(
              "load-shell-qos",
              Date.now() - window.__startTime
            );
        })();
    },
  },
]);
//# sourceMappingURL=../sourcemaps/lazy/default-login-startup-main-startup.60a1ced139294f16d64a.js.map
