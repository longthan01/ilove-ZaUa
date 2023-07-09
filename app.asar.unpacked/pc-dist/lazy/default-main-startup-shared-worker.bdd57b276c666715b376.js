(this.webpackJsonp = this.webpackJsonp || []).push([
  [10],
  {
    "37f1": function (e, t, i) {
      "use strict";
      var s,
        r = i("VTBJ"),
        a = i("rePB"),
        n = i("v6qY"),
        o = i("bUXd"),
        d = i("1pet"),
        l = i("NDmK"),
        c = i("AjFa"),
        m = i("W13p"),
        g = i("5R0e"),
        u = i("jDHv"),
        h = i("EYv5"),
        p = i("Mlp7"),
        M = i("Mgpg"),
        f = i("3dEI"),
        b = i("fhp4"),
        y = i("7WMW"),
        I = i("K4Ns"),
        _ = i("fsN4"),
        O = i("XS0u"),
        D = i("z0WU"),
        v = i("1erv"),
        T = i("wH4e"),
        w = i("zLd2"),
        E = i("KPNQ"),
        j = i("H8Z7"),
        F = i("8tev");
      Object(u.injectable)()(
        (s =
          Object(u.singleton)(h.a)(
            (s =
              (function (e, t) {
                return Object(u.inject)(w.c)(e, void 0, 0);
              })(
                (s =
                  (function (e, t) {
                    return Object(u.inject)(f.b)(e, void 0, 1);
                  })(
                    (s =
                      (function (e, t) {
                        return Object(u.inject)(b.e)(e, void 0, 2);
                      })(
                        (s =
                          (function (e, t) {
                            return Object(u.inject)(E.b)(e, void 0, 3);
                          })(
                            (s =
                              (function (e, t) {
                                return Object(u.inject)(M.ZLoggerFactory)(
                                  e,
                                  void 0,
                                  4
                                );
                              })(
                                (s =
                                  Reflect.metadata(
                                    "design:type",
                                    Function
                                  )(
                                    (s =
                                      Reflect.metadata("design:paramtypes", [
                                        void 0 === w.IUtilsMediaManager
                                          ? Object
                                          : w.IUtilsMediaManager,
                                        void 0 === f.IMediaRepositoryFactory
                                          ? Object
                                          : f.IMediaRepositoryFactory,
                                        void 0 === b.b ? Object : b.b,
                                        void 0 === E.IMediaPrimaryKeyConvertor
                                          ? Object
                                          : E.IMediaPrimaryKeyConvertor,
                                        void 0 === M.ZLoggerFactory
                                          ? Object
                                          : M.ZLoggerFactory,
                                      ])(
                                        (s = class {
                                          constructor(e, t, i, s, r) {
                                            Object(a.a)(
                                              this,
                                              "_utilsMediaManager",
                                              void 0
                                            ),
                                              Object(a.a)(
                                                this,
                                                "_mediaMapperFactory",
                                                void 0
                                              ),
                                              Object(a.a)(
                                                this,
                                                "_mediaRepositoryFactory",
                                                void 0
                                              ),
                                              Object(a.a)(
                                                this,
                                                "_mediaPrimaryKeyConvertor",
                                                void 0
                                              ),
                                              Object(a.a)(
                                                this,
                                                "_logger",
                                                void 0
                                              ),
                                              (this._utilsMediaManager = e),
                                              (this._mediaRepositoryFactory =
                                                t),
                                              (this._mediaMapperFactory = i),
                                              (this._mediaPrimaryKeyConvertor =
                                                s),
                                              (this._logger = r.createZLogger(
                                                "media-manager",
                                                [""]
                                              ));
                                          }
                                          filter(e, t) {
                                            return Object(v.a)()
                                              ? y.a.filterMedia(e, t)
                                              : p.a.filter(e, t);
                                          }
                                          getMediaRepository(e, t = !0) {
                                            const i =
                                              this._mediaRepositoryFactory.getMediaRepository(
                                                e
                                              );
                                            if (!i && t)
                                              throw Error(
                                                `[getMediaRepository]: can't get mediaRepository has mediaType: ${e}!`
                                              );
                                            return i;
                                          }
                                          getMediaMapper(e, t = !0) {
                                            const i =
                                              this._mediaMapperFactory.getMediaMapper(
                                                e
                                              );
                                            if (!i && t)
                                              throw Error(
                                                `[getMediaMapper]: can't get mediaMapper has mediaType: ${e}!`
                                              );
                                            return i;
                                          }
                                          async _isMigrationDone() {
                                            return (
                                              (
                                                await u.ModuleContainer.resolve(
                                                  j.c
                                                ).getMediaMigrationState()
                                              ).stateName === F.b.DONE
                                            );
                                          }
                                          async isExistedMedia(e, t) {
                                            try {
                                              if (!e)
                                                throw Error(
                                                  "mediaType is invalid!"
                                                );
                                              if (!t)
                                                throw Error(
                                                  "mediaIdObj is invalid!"
                                                );
                                              const i =
                                                this.getMediaRepository(e);
                                              return await i.isExistedMedia({
                                                newId: t.newId || "",
                                                oldId: t.oldId || "",
                                              });
                                            } catch (i) {
                                              return (
                                                this._logger.zsymb(
                                                  18,
                                                  11103,
                                                  3e4,
                                                  `[isExistedMedia]: error: ${i.message}`
                                                ),
                                                !1
                                              );
                                            }
                                          }
                                          async addMedias(
                                            e,
                                            t,
                                            i = `${n.c.UNKNOWN}${n.d.UNKNOWN}`
                                          ) {
                                            try {
                                              if (!e)
                                                throw Error(
                                                  "mediaType is undefined!"
                                                );
                                              if (!t || !t.length) return;
                                              const s =
                                                  this.getMediaRepository(e),
                                                r = this.getMediaMapper(e),
                                                a = t.map(
                                                  (t) => (
                                                    (t.src = i),
                                                    "image" === e &&
                                                      (t.subType =
                                                        d.MSG_SUBTYPE_MEDIA_DOODLE),
                                                    r.toDomainFromDTO(t)
                                                  )
                                                ),
                                                n = (
                                                  await s.insertMulti(a)
                                                ).success.map((t) =>
                                                  this.getMediaMapper(
                                                    e
                                                  ).toMediaToCreateOrUpdateUtilsMediaDTOFromDomain(
                                                    t
                                                  )
                                                );
                                              await this._utilsMediaManager.createOrUpdateFromMedias(
                                                n
                                              );
                                            } catch (s) {
                                              this._logger.zsymb(
                                                21,
                                                11103,
                                                30001,
                                                "[addMedias] - err: {}",
                                                s.message
                                              );
                                            }
                                          }
                                          addMediaToConvOnly(
                                            e,
                                            t = `${n.c.UNKNOWN}${n.d.UNKNOWN}`
                                          ) {
                                            var i, s, r;
                                            if (!Object(v.a)())
                                              return p.a.addMediaToConversationOnly(
                                                e
                                              );
                                            let a = [];
                                            if (
                                              null != e &&
                                              null !== (i = e.image) &&
                                              void 0 !== i &&
                                              i.length
                                            ) {
                                              const i =
                                                  this.getMediaRepository(
                                                    "image"
                                                  ),
                                                s =
                                                  this.getMediaMapper("image");
                                              a.push(
                                                null == i
                                                  ? void 0
                                                  : i
                                                      .insertMulti(
                                                        e.image.map(
                                                          (e) => (
                                                            (e.src = t),
                                                            s.toDomainFromDTO(e)
                                                          )
                                                        )
                                                      )
                                                      .then((e) => {
                                                        if (e.success.length) {
                                                          const t =
                                                            e.success.map((e) =>
                                                              this.getMediaMapper(
                                                                "image"
                                                              ).toMediaToCreateOrUpdateUtilsMediaDTOFromDomain(
                                                                e
                                                              )
                                                            );
                                                          this._utilsMediaManager.createOrUpdateFromMedias(
                                                            t
                                                          );
                                                        }
                                                      })
                                              );
                                            }
                                            if (
                                              null != e &&
                                              null !== (s = e.link) &&
                                              void 0 !== s &&
                                              s.length
                                            ) {
                                              const i =
                                                  this.getMediaRepository(
                                                    "link"
                                                  ),
                                                s = this.getMediaMapper("link");
                                              a.push(
                                                null == i
                                                  ? void 0
                                                  : i
                                                      .insertMulti(
                                                        e.link.map((e) => {
                                                          e.src = t;
                                                          return s.toDomainFromDTO(
                                                            e
                                                          );
                                                        })
                                                      )
                                                      .then((e) => {
                                                        if (e.success.length) {
                                                          const t =
                                                            e.success.map((e) =>
                                                              this.getMediaMapper(
                                                                "link"
                                                              ).toMediaToCreateOrUpdateUtilsMediaDTOFromDomain(
                                                                e
                                                              )
                                                            );
                                                          this._utilsMediaManager.createOrUpdateFromMedias(
                                                            t
                                                          );
                                                        }
                                                      })
                                              );
                                            }
                                            if (
                                              null != e &&
                                              null !== (r = e.file) &&
                                              void 0 !== r &&
                                              r.length
                                            ) {
                                              const i =
                                                  this.getMediaRepository(
                                                    "file"
                                                  ),
                                                s = this.getMediaMapper("file");
                                              a.push(
                                                i
                                                  .insertMulti(
                                                    e.file.map(
                                                      (e) => (
                                                        (e.src = t),
                                                        s.toDomainFromDTO(e)
                                                      )
                                                    )
                                                  )
                                                  .then((e) => {
                                                    if (e.success.length) {
                                                      const t = e.success.map(
                                                        (e) =>
                                                          this.getMediaMapper(
                                                            "file"
                                                          ).toMediaToCreateOrUpdateUtilsMediaDTOFromDomain(
                                                            e
                                                          )
                                                      );
                                                      this._utilsMediaManager.createOrUpdateFromMedias(
                                                        t
                                                      );
                                                    }
                                                  })
                                              );
                                            }
                                            return Promise.all(a);
                                          }
                                          async deleteMediasById(e, t) {
                                            try {
                                              if (!t)
                                                throw Error(
                                                  "mediaIdObjs is undefined!"
                                                );
                                              const n = Array.isArray(t)
                                                ? [...t]
                                                : [t];
                                              for (const e of n) {
                                                const { newId: t, oldId: i } =
                                                  e;
                                                if (!t && i) {
                                                  const t =
                                                    await this.getMediaFieldsByMsgId(
                                                      i
                                                    );
                                                  e.newId = t
                                                    ? `${t.cliMsgId}_${t.fromUid}_${t.toUid}`
                                                    : "";
                                                }
                                              }
                                              const o = this.getMediaRepository(
                                                  e,
                                                  !1
                                                ),
                                                d = [];
                                              for (const e of n)
                                                d.push(
                                                  Object(r.a)(
                                                    Object(r.a)({}, e),
                                                    {},
                                                    {
                                                      deleteTo:
                                                        (await this._isMigrationDone())
                                                          ? I.a.NEW
                                                          : I.a.UNKNOWN,
                                                    }
                                                  )
                                                );
                                              if (o)
                                                await o.deleteMultiMedias(d);
                                              else {
                                                var i, s, a;
                                                const e = [];
                                                e.push(
                                                  null ===
                                                    (i =
                                                      u.ModuleContainer.resolve(
                                                        c.b
                                                      )) || void 0 === i
                                                    ? void 0
                                                    : i.deleteMultiMedias(d),
                                                  null ===
                                                    (s =
                                                      u.ModuleContainer.resolve(
                                                        m.b
                                                      )) || void 0 === s
                                                    ? void 0
                                                    : s.deleteMultiMedias(d),
                                                  null ===
                                                    (a =
                                                      u.ModuleContainer.resolve(
                                                        g.b
                                                      )) || void 0 === a
                                                    ? void 0
                                                    : a.deleteMultiMedias(d)
                                                ),
                                                  await Promise.all(e);
                                              }
                                            } catch (n) {
                                              this._logger.zsymb(
                                                18,
                                                11103,
                                                30002,
                                                n
                                              );
                                            }
                                          }
                                          async getValidMediasOfConv(
                                            e,
                                            t,
                                            i,
                                            s,
                                            a
                                          ) {
                                            try {
                                              if (!t)
                                                return Promise.resolve([]);
                                              const n = {
                                                cliMsgId:
                                                  d.MessageConstants.MAX_MSG_ID,
                                                sendDttm: parseInt(
                                                  d.MessageConstants
                                                    .MAX_SENDDTTM
                                                ),
                                                msgId:
                                                  s ||
                                                  d.MessageConstants.MAX_MSG_ID,
                                              };
                                              if (s) {
                                                const e =
                                                  await this.getMediaFieldsByMsgId(
                                                    s
                                                  );
                                                e &&
                                                  ((n.cliMsgId = e.cliMsgId),
                                                  (n.sendDttm = e.sendDttm));
                                              }
                                              const o = p.a.getLastDeleteConv(
                                                  t,
                                                  e
                                                ),
                                                l = this.getMediaRepository(e),
                                                c = await l.getMediasOfConv(
                                                  t,
                                                  n,
                                                  i,
                                                  Object(r.a)(
                                                    Object(r.a)({}, a),
                                                    {},
                                                    { deletePointOfConv: o }
                                                  )
                                                );
                                              if (!c.length) return [];
                                              const m = this.getMediaMapper(e);
                                              return await Promise.all(
                                                c.map((e) => m.toDTO(e))
                                              );
                                            } catch (n) {
                                              return (
                                                this._logger.zsymb(
                                                  18,
                                                  11103,
                                                  30003,
                                                  n
                                                ),
                                                Promise.resolve([])
                                              );
                                            }
                                          }
                                          async getLastMediasOfConvWithoutCorrectData(
                                            e,
                                            t,
                                            i,
                                            s = 100,
                                            r
                                          ) {
                                            if (!Object(v.a)())
                                              return p.a.getLastMediaFromConversation(
                                                t,
                                                e,
                                                s,
                                                i
                                              );
                                            try {
                                              if (!t)
                                                return Promise.resolve([
                                                  null,
                                                  Error("convId is undefined!"),
                                                ]);
                                              const a = {
                                                cliMsgId:
                                                  d.MessageConstants.MAX_MSG_ID,
                                                sendDttm: parseInt(
                                                  d.MessageConstants
                                                    .MAX_SENDDTTM
                                                ),
                                                msgId:
                                                  i ||
                                                  l.default.load_media
                                                    .use_max_id ||
                                                  d.MessageConstants.MAX_MSG_ID,
                                              };
                                              if (null != r && r.lastItemOpts)
                                                (a.cliMsgId =
                                                  r.lastItemOpts.cliMsgId),
                                                  (a.sendDttm =
                                                    r.lastItemOpts.sendDttm);
                                              else if (i) {
                                                const e =
                                                  await this.getMediaFieldsByMsgId(
                                                    i
                                                  );
                                                e &&
                                                  ((a.cliMsgId = e.cliMsgId),
                                                  (a.sendDttm = e.sendDttm));
                                              }
                                              const n =
                                                  this.getMediaRepository(e),
                                                o = await n.getLastMediasOfConv(
                                                  t,
                                                  a,
                                                  s
                                                );
                                              return [
                                                await Promise.all(
                                                  o.map((t) =>
                                                    this.getMediaMapper(
                                                      e
                                                    ).toDTO(t)
                                                  )
                                                ),
                                                null,
                                              ];
                                            } catch (a) {
                                              return (
                                                this._logger.zsymb(
                                                  18,
                                                  11103,
                                                  30004,
                                                  a
                                                ),
                                                [null, a]
                                              );
                                            }
                                          }
                                          async updateMedia(e, t, i, s) {
                                            if (!Object(v.a)()) {
                                              const a = Object(r.a)(
                                                Object(r.a)({}, i),
                                                {},
                                                { msgId: t }
                                              );
                                              return p.a.updateMedia(a, e, s);
                                            }
                                            return this._updateMedia(
                                              e,
                                              t,
                                              i,
                                              s
                                            );
                                          }
                                          loadingPendingMedias() {
                                            return Object(v.a)()
                                              ? new Promise((e, t) => {
                                                  let i =
                                                    O.default.getAllPendingMediaIds();
                                                  if (
                                                    (this._logger.zsymb(
                                                      3,
                                                      11103,
                                                      30005,
                                                      "[loadingPendingMedias]: {}",
                                                      JSON.stringify(i)
                                                    ),
                                                    i &&
                                                      D.default.mapHasItem(i))
                                                  ) {
                                                    let t = {};
                                                    for (let e in i)
                                                      t[e] =
                                                        this.getMultiMedias(
                                                          e,
                                                          i[e]
                                                        );
                                                    D.default
                                                      .join(t)
                                                      .then(e)
                                                      .catch((t) => {
                                                        e(null);
                                                      });
                                                  } else e(null);
                                                })
                                              : p.a.loadAllPendingMedia();
                                          }
                                          async countMediaOfConv(e, t, i) {
                                            try {
                                              t ||
                                                Promise.resolve({
                                                  ok: !0,
                                                  result: 0,
                                                  error: null,
                                                });
                                              const { from: s, to: a } = i;
                                              (s.cliMsgId = s.cliMsgId
                                                ? s.cliMsgId
                                                : ""),
                                                (s.sendDttm = s.sendDttm
                                                  ? s.sendDttm
                                                  : 0),
                                                (s.msgId = s.msgId
                                                  ? s.msgId
                                                  : ""),
                                                (a.cliMsgId = a.cliMsgId
                                                  ? a.cliMsgId
                                                  : d.MessageConstants
                                                      .MAX_MSG_ID),
                                                (a.sendDttm = a.sendDttm
                                                  ? a.sendDttm
                                                  : parseInt(
                                                      d.MessageConstants
                                                        .MAX_SENDDTTM
                                                    )),
                                                (a.msgId = a.msgId
                                                  ? a.msgId
                                                  : d.MessageConstants
                                                      .MAX_MSG_ID);
                                              const n =
                                                this.getMediaRepository(e);
                                              return {
                                                ok: !0,
                                                result:
                                                  await n.countMediaOfConv(t, {
                                                    from: Object(r.a)({}, s),
                                                    to: Object(r.a)({}, a),
                                                  }),
                                                error: null,
                                              };
                                            } catch (s) {
                                              return (
                                                this._logger.zsymb(
                                                  18,
                                                  11103,
                                                  30006,
                                                  s
                                                ),
                                                { ok: !1, result: 0, error: s }
                                              );
                                            }
                                          }
                                          async getMediaFieldsByMsgId(e) {
                                            if (!e)
                                              return Promise.resolve(void 0);
                                            const t = await _.a
                                              .getInstance()
                                              .Core.Message.get(e);
                                            return t
                                              ? {
                                                  cliMsgId:
                                                    "number" ==
                                                    typeof t.cliMsgId
                                                      ? t.cliMsgId.toString()
                                                      : t.cliMsgId,
                                                  fromUid: t.fromUid,
                                                  toUid: t.toUid,
                                                  sendDttm:
                                                    "string" ==
                                                    typeof t.sendDttm
                                                      ? parseInt(t.sendDttm)
                                                      : t.sendDttm,
                                                }
                                              : Promise.resolve(void 0);
                                          }
                                          async getAllValidPhotoAndVideosOfConv(
                                            e
                                          ) {
                                            if (!Object(v.a)())
                                              return p.a.getAllMediaFromConv(e);
                                            let t = !0,
                                              i = {
                                                cliMsgId:
                                                  d.MessageConstants.MAX_MSG_ID,
                                                sendDttm: parseInt(
                                                  d.MessageConstants
                                                    .MAX_SENDDTTM
                                                ),
                                                msgId:
                                                  d.MessageConstants.MAX_MSG_ID,
                                              },
                                              s = [],
                                              r = [];
                                            for (; t; ) {
                                              const a =
                                                await this.getValidMediasOfConv(
                                                  "image",
                                                  e,
                                                  50,
                                                  i.msgId
                                                );
                                              t = a.length >= 50;
                                              let n = i;
                                              if (a.length) {
                                                if (
                                                  (a.forEach((e) => {
                                                    e &&
                                                    e.subType ==
                                                      d.MSG_SUBTYPE_MEDIA_VIDEO
                                                      ? s.push(e)
                                                      : !e ||
                                                        (e.subType !=
                                                          d.MSG_SUBTYPE_PHOTO &&
                                                          e.subType !==
                                                            d.MSG_SUBTYPE_MEDIA_DOODLE) ||
                                                        r.push(e);
                                                  }),
                                                  (n = {
                                                    cliMsgId:
                                                      a[a.length - 1].cliMsgId,
                                                    sendDttm:
                                                      a[a.length - 1].sendDttm,
                                                    msgId:
                                                      a[a.length - 1].msgId,
                                                  }),
                                                  n.msgId == i.msgId)
                                                )
                                                  break;
                                                i = n;
                                              }
                                            }
                                            return { photos: r, videos: s };
                                          }
                                          async getImageMessagesForPhotoViewer(
                                            e,
                                            t,
                                            i,
                                            s,
                                            r,
                                            a
                                          ) {
                                            if (!Object(v.a)())
                                              return O.default.getImagesForPhotoViewer(
                                                { userId: e },
                                                t,
                                                i,
                                                s,
                                                r,
                                                a
                                              );
                                            try {
                                              var n;
                                              if (!e || !t)
                                                throw Error(
                                                  "convId or lastMsgId is undefined!"
                                                );
                                              const o =
                                                await this.getMediaFieldsByMsgId(
                                                  t
                                                );
                                              return await (null ===
                                                (n = u.ModuleContainer.resolve(
                                                  c.b
                                                )) || void 0 === n
                                                ? void 0
                                                : n.getImageMessagesForPhotoViewer(
                                                    e,
                                                    i,
                                                    {
                                                      sendDttm:
                                                        (null == o
                                                          ? void 0
                                                          : o.sendDttm) ||
                                                        parseInt(
                                                          d.MessageConstants
                                                            .MAX_SENDDTTM
                                                        ),
                                                      cliMsgId:
                                                        (null == o
                                                          ? void 0
                                                          : o.cliMsgId) ||
                                                        d.MessageConstants
                                                          .MAX_MSG_ID,
                                                      msgId: t,
                                                    },
                                                    s,
                                                    r,
                                                    a
                                                  ));
                                            } catch (o) {
                                              return (
                                                this._logger.zsymb(
                                                  18,
                                                  11103,
                                                  30007,
                                                  o
                                                ),
                                                []
                                              );
                                            }
                                          }
                                          async getLastestAddedFiles(
                                            e,
                                            t = 40
                                          ) {
                                            if (!Object(v.a)())
                                              return O.default.getLatestFiles(
                                                e,
                                                t
                                              );
                                            try {
                                              if (!e) {
                                                e = Date.now();
                                                let t = o.a.getTimeNow();
                                                e = e > t ? e : t;
                                              }
                                              const i =
                                                  d.MessageConstants
                                                    .MAX_CONVERSATION_ID,
                                                s = parseInt(
                                                  d.MessageConstants.MAX_MSG_ID
                                                ),
                                                r = u.ModuleContainer.resolve(
                                                  m.b
                                                ),
                                                a =
                                                  await r.getLastestAddedFiles(
                                                    {
                                                      convId: i,
                                                      sendDttm: e,
                                                      cliMsgId: s,
                                                    },
                                                    t
                                                  );
                                              if (a.length > 0) {
                                                const e =
                                                  this.getMediaMapper("file");
                                                return await Promise.all(
                                                  a.map((t) => e.toDTO(t))
                                                );
                                              }
                                              return [];
                                            } catch (i) {
                                              return (
                                                this._logger.zsymb(
                                                  18,
                                                  11103,
                                                  30008,
                                                  "[getLastestAddedFiles] - err: ",
                                                  i
                                                ),
                                                Promise.resolve([])
                                              );
                                            }
                                          }
                                          async getMultiMedias(e, t) {
                                            if (!Object(v.a)())
                                              return O.default.getMediaByIds(
                                                e,
                                                t
                                              );
                                            try {
                                              if (!t || t.length < 0)
                                                throw Error(
                                                  "msgIds is undefined or empty!"
                                                );
                                              const i = [],
                                                s = t.map((e) =>
                                                  this.getMediaFieldsByMsgId(
                                                    e
                                                  ).then(async (t) => {
                                                    i.push({
                                                      newId: t
                                                        ? `${t.cliMsgId}_${t.fromUid}_${t.toUid}`
                                                        : "",
                                                      oldId: e,
                                                      getFrom:
                                                        (await this._isMigrationDone())
                                                          ? I.b.NEW
                                                          : I.b.UNKNOWN,
                                                    });
                                                  })
                                                );
                                              if (
                                                (await Promise.all(s),
                                                !i.length)
                                              )
                                                return [];
                                              const r = (
                                                await this.getMediaRepository(
                                                  e
                                                ).getMultiMedias(i)
                                              ).filter(Boolean);
                                              return r.length > 0
                                                ? await Promise.all(
                                                    r.map((t) =>
                                                      this.getMediaMapper(
                                                        e
                                                      ).toDTO(t)
                                                    )
                                                  )
                                                : [];
                                            } catch (i) {
                                              return (
                                                this._logger.zsymb(
                                                  18,
                                                  11103,
                                                  30009,
                                                  "[getMultiMedias] - err: ",
                                                  i
                                                ),
                                                []
                                              );
                                            }
                                          }
                                          async getMediaById(e, t) {
                                            try {
                                              if (!t)
                                                throw Error(
                                                  "mediaId is undefined!"
                                                );
                                              const i =
                                                  await this.getMediaFieldsByMsgId(
                                                    t
                                                  ),
                                                s = this.getMediaRepository(e),
                                                r = await s.getMedia(
                                                  {
                                                    newId: i
                                                      ? `${i.cliMsgId}_${i.fromUid}_${i.toUid}`
                                                      : "",
                                                    oldId: t,
                                                  },
                                                  void 0,
                                                  (await this._isMigrationDone())
                                                    ? I.b.NEW
                                                    : I.b.UNKNOWN
                                                );
                                              return r
                                                ? await this.getMediaMapper(
                                                    e
                                                  ).toDTO(r)
                                                : void 0;
                                            } catch (i) {
                                              return (
                                                this._logger.zsymb(
                                                  18,
                                                  11103,
                                                  30010,
                                                  "[getMediaById] - err: ",
                                                  i
                                                ),
                                                Promise.resolve(void 0)
                                              );
                                            }
                                          }
                                          async _updateMedia(e, t, i, s) {
                                            try {
                                              if (!t)
                                                throw Error(
                                                  "mediaId isn't valid!"
                                                );
                                              if (!i)
                                                throw Error(
                                                  "mediaValue isn't valid!"
                                                );
                                              const s =
                                                  this.getMediaRepository(e),
                                                r =
                                                  await this._mediaPrimaryKeyConvertor.toMediaPKFromMessagePK(
                                                    t
                                                  ),
                                                a =
                                                  this.getMediaMapper(
                                                    e
                                                  ).toNewEAttsFromDTOAtts(i);
                                              return await s.updateMedia(
                                                { newId: r, oldId: t },
                                                {
                                                  attributes: Object.keys(a),
                                                  value: a,
                                                  ignoreNotFound: !0,
                                                },
                                                (await this._isMigrationDone())
                                                  ? I.c.NEW
                                                  : I.c.UNKNOWN
                                              );
                                            } catch (r) {
                                              return (
                                                this._logger.zsymb(
                                                  21,
                                                  11103,
                                                  30011,
                                                  "[_updateMedia] - err: {}",
                                                  r.message
                                                ),
                                                !1
                                              );
                                            }
                                          }
                                          async _addMediasWhenTransferMessageOldFlow(
                                            e
                                          ) {
                                            try {
                                              const t = [],
                                                i = [],
                                                s = [];
                                              for (
                                                let a = 0;
                                                a < e.length;
                                                a++
                                              ) {
                                                const r = e[a],
                                                  n = r.msgType;
                                                switch (n) {
                                                  case d.MSG_PHOTO:
                                                  case d.MSG_PHOTO_2:
                                                  case d.MSG_DOODLE:
                                                    n == d.MSG_DOODLE &&
                                                      r.message &&
                                                      (r.message.thumbUrl =
                                                        r.message.oriUrl),
                                                      D.default.isPhotoStickerMessage(
                                                        r
                                                      ) ||
                                                        i.push({
                                                          msgId: r.msgId,
                                                          userId: r.toUid,
                                                          message: r.message,
                                                          sendDttm: r.sendDttm,
                                                          fromUid: r.fromUid,
                                                          subType:
                                                            d.MSG_SUBTYPE_PHOTO,
                                                          type: "image",
                                                          ttl: r.ttl,
                                                          cliMsgId: r.cliMsgId,
                                                        });
                                                    break;
                                                  case d.MSG_FILE:
                                                    t.push({
                                                      msgId: r.msgId,
                                                      userId: r.toUid,
                                                      message: r.message,
                                                      sendDttm: r.sendDttm,
                                                      fromUid: r.fromUid,
                                                      type: "file",
                                                      ttl: r.ttl,
                                                      cliMsgId: r.cliMsgId,
                                                    });
                                                    break;
                                                  case d.MSG_CONTACT:
                                                    "recommened.link" ===
                                                      r.message.action &&
                                                      s.push({
                                                        msgId: r.msgId,
                                                        userId: r.toUid,
                                                        message: r.message,
                                                        sendDttm: r.sendDttm,
                                                        fromUid: r.fromUid,
                                                        type: "link",
                                                        ttl: r.ttl,
                                                        cliMsgId: r.cliMsgId,
                                                      });
                                                    break;
                                                  case d.MSG_VIDEO:
                                                    i.push({
                                                      msgId: r.msgId,
                                                      userId: r.toUid,
                                                      message: r.message,
                                                      sendDttm: r.sendDttm,
                                                      fromUid: r.fromUid,
                                                      subType:
                                                        d.MSG_SUBTYPE_MEDIA_VIDEO,
                                                      type: "image",
                                                      ttl: r.ttl,
                                                      cliMsgId: r.cliMsgId,
                                                    });
                                                }
                                              }
                                              let r = [];
                                              return (
                                                i.length > 0 &&
                                                  r.push(
                                                    _.a
                                                      .getInstance()
                                                      .Core.Image.insertMulti(i)
                                                  ),
                                                s.length > 0 &&
                                                  r.push(
                                                    _.a
                                                      .getInstance()
                                                      .Core.Link.insertMulti(s)
                                                  ),
                                                t.length > 0 &&
                                                  r.push(
                                                    _.a
                                                      .getInstance()
                                                      .Core.File.insertMulti(t)
                                                  ),
                                                await Promise.all(r)
                                              );
                                            } catch (t) {
                                              this._logger.zsymb(
                                                18,
                                                11103,
                                                30012,
                                                "[_addMediasWhenTransferMessageOldFlow] - err: ",
                                                t.message
                                              );
                                            }
                                          }
                                          async _addMediasFromMessages(e, t) {
                                            try {
                                              if (!e || !e.length) return;
                                              t =
                                                t ||
                                                `${n.c.UNKNOWN}${n.d.FROM_MSG}`;
                                              const i = [],
                                                s = [],
                                                r = [],
                                                a =
                                                  this.getMediaMapper("image"),
                                                o = this.getMediaMapper("file"),
                                                l = this.getMediaMapper("link");
                                              e.forEach((e) => {
                                                const n = e.msgType;
                                                switch (n) {
                                                  case d.MSG_PHOTO:
                                                  case d.MSG_PHOTO_2:
                                                  case d.MSG_DOODLE:
                                                    n === d.MSG_DOODLE
                                                      ? (e.message &&
                                                          (e.message.thumbUrl =
                                                            e.message.oriUrl),
                                                        i.push(
                                                          a.toDomainFromTMessage(
                                                            e,
                                                            d.MSG_SUBTYPE_MEDIA_DOODLE,
                                                            t
                                                          )
                                                        ))
                                                      : D.default.isPhotoStickerMessage(
                                                          e
                                                        ) ||
                                                        i.push(
                                                          a.toDomainFromTMessage(
                                                            e,
                                                            d.MSG_SUBTYPE_PHOTO,
                                                            t
                                                          )
                                                        );
                                                    break;
                                                  case d.MSG_FILE:
                                                    s.push(
                                                      o.toDomainFromMessage(
                                                        e,
                                                        t
                                                      )
                                                    );
                                                    break;
                                                  case d.MSG_CONTACT:
                                                    "recommened.link" ===
                                                      e.message.action &&
                                                      r.push(
                                                        l.toDomainFromMessage(
                                                          e,
                                                          t
                                                        )
                                                      );
                                                    break;
                                                  case d.MSG_VIDEO:
                                                    i.push(
                                                      a.toDomainFromTMessage(
                                                        e,
                                                        d.MSG_SUBTYPE_MEDIA_VIDEO,
                                                        t
                                                      )
                                                    );
                                                }
                                              });
                                              let c = [];
                                              return (
                                                i.length > 0 &&
                                                  c.push(
                                                    this.getMediaRepository(
                                                      "image"
                                                    )
                                                      .insertMulti(i)
                                                      .then((e) => {
                                                        if (e.success.length) {
                                                          const t =
                                                            e.success.map((e) =>
                                                              this.getMediaMapper(
                                                                "image"
                                                              ).toMediaToCreateOrUpdateUtilsMediaDTOFromDomain(
                                                                e
                                                              )
                                                            );
                                                          this._utilsMediaManager.createOrUpdateFromMedias(
                                                            t
                                                          );
                                                        }
                                                      })
                                                  ),
                                                s.length > 0 &&
                                                  c.push(
                                                    this.getMediaRepository(
                                                      "file"
                                                    )
                                                      .insertMulti(s)
                                                      .then((e) => {
                                                        if (e.success.length) {
                                                          const t =
                                                            e.success.map((e) =>
                                                              this.getMediaMapper(
                                                                "file"
                                                              ).toMediaToCreateOrUpdateUtilsMediaDTOFromDomain(
                                                                e
                                                              )
                                                            );
                                                          this._utilsMediaManager.createOrUpdateFromMedias(
                                                            t
                                                          );
                                                        }
                                                      })
                                                  ),
                                                r.length > 0 &&
                                                  c.push(
                                                    this.getMediaRepository(
                                                      "link"
                                                    )
                                                      .insertMulti(r)
                                                      .then((e) => {
                                                        if (e.success.length) {
                                                          const t =
                                                            e.success.map((e) =>
                                                              this.getMediaMapper(
                                                                "link"
                                                              ).toMediaToCreateOrUpdateUtilsMediaDTOFromDomain(
                                                                e
                                                              )
                                                            );
                                                          this._utilsMediaManager.createOrUpdateFromMedias(
                                                            t
                                                          );
                                                        }
                                                      })
                                                  ),
                                                await Promise.all(c)
                                              );
                                            } catch (i) {
                                              this._logger.zsymb(
                                                21,
                                                11103,
                                                30013,
                                                "[addMediasFromMessages] - err: {}",
                                                JSON.stringify(i)
                                              );
                                            }
                                          }
                                          async _addMediasAtExportImportFlowOldFlow(
                                            e
                                          ) {
                                            if (!e || !e.length) return;
                                            const t = [],
                                              i = [],
                                              s = [];
                                            e.forEach((e) => {
                                              if (e.msgType === d.MSG_FILE)
                                                i.push({
                                                  msgId: e.msgId,
                                                  userId: e.toUid,
                                                  message: e.message,
                                                  sendDttm: e.sendDttm,
                                                  localPath: e.localPath,
                                                  fromUid: e.fromUid,
                                                  type: "file",
                                                  ttl: e.ttl,
                                                });
                                              else if (
                                                e.msgType === d.MSG_CONTACT
                                              )
                                                "recommened.link" ===
                                                  e.message.action &&
                                                  s.push({
                                                    msgId: e.msgId,
                                                    userId: e.toUid,
                                                    message: e.message,
                                                    sendDttm: e.sendDttm,
                                                    fromUid: e.fromUid,
                                                    type: "link",
                                                    ttl: e.ttl,
                                                  });
                                              else if (
                                                (e.msgType !== d.MSG_PHOTO &&
                                                  e.msgType !== d.MSG_PHOTO_2 &&
                                                  e.msgType !== d.MSG_DOODLE) ||
                                                D.default.isPhotoStickerMessage(
                                                  e
                                                )
                                              )
                                                e.msgType === d.MSG_VIDEO &&
                                                  t.push({
                                                    msgId: e.msgId,
                                                    userId: e.toUid,
                                                    message: e.message,
                                                    sendDttm: e.sendDttm,
                                                    fromUid: e.fromUid,
                                                    type: "image",
                                                    subType:
                                                      d.MSG_SUBTYPE_MEDIA_VIDEO,
                                                    ttl: e.ttl,
                                                  });
                                              else {
                                                const i = {
                                                  msgId: e.msgId,
                                                  userId: e.toUid,
                                                  message: e.message,
                                                  sendDttm: e.sendDttm,
                                                  fromUid: e.fromUid,
                                                  type: "image",
                                                  subType: d.MSG_SUBTYPE_PHOTO,
                                                  ttl: e.ttl,
                                                };
                                                e.msgType === d.MSG_DOODLE &&
                                                  ((i.subType =
                                                    d.MSG_SUBTYPE_MEDIA_DOODLE),
                                                  (i.message.thumbUrl =
                                                    i.message.oriUrl)),
                                                  t.push(i);
                                              }
                                            }),
                                              i.length &&
                                                O.default.addFilesToConversation(
                                                  i
                                                ),
                                              s.length &&
                                                O.default.addLinksToConversation(
                                                  s
                                                ),
                                              t.length &&
                                                O.default.addOrUpdateImagesToConversation(
                                                  t
                                                );
                                          }
                                          async _addMediasFromMessagesWhenBackupOldFlow(
                                            e
                                          ) {
                                            if (!e || !e.length) return;
                                            const t = [],
                                              i = [],
                                              s = [];
                                            e.forEach((e) => {
                                              e.msgType === d.MSG_FILE
                                                ? i.push({
                                                    msgId: e.msgId,
                                                    userId: e.toUid,
                                                    message: e.message,
                                                    sendDttm: e.sendDttm,
                                                    localPath: e.localPath,
                                                    fromUid: e.fromUid,
                                                    ttl: e.ttl,
                                                  })
                                                : e.msgType === d.MSG_CONTACT &&
                                                  "recommened.link" ===
                                                    e.message.action
                                                ? s.push({
                                                    msgId: e.msgId,
                                                    userId: e.toUid,
                                                    message: e.message,
                                                    sendDttm: e.sendDttm,
                                                    fromUid: e.fromUid,
                                                    ttl: e.ttl,
                                                  })
                                                : (e.msgType !== d.MSG_PHOTO &&
                                                    e.msgType !==
                                                      d.MSG_PHOTO_2 &&
                                                    e.msgType !==
                                                      d.MSG_DOODLE) ||
                                                  D.default.isPhotoStickerMessage(
                                                    e
                                                  ) ||
                                                  t.push({
                                                    msgId: e.msgId,
                                                    userId: e.toUid,
                                                    message: e.message,
                                                    sendDttm: e.sendDttm,
                                                    fromUid: e.fromUid,
                                                    ttl: e.ttl,
                                                  });
                                            }),
                                              i.length &&
                                                O.default.addFilesToConversation(
                                                  i
                                                ),
                                              s.length &&
                                                O.default.addLinksToConversation(
                                                  s
                                                ),
                                              t.length &&
                                                O.default.addOrUpdateImagesToConversation(
                                                  t
                                                );
                                          }
                                          async _emptyOldMediaStore(e, t) {
                                            const i = {
                                                from: [t, 0, ""],
                                                to: [
                                                  t,
                                                  d.MessageConstants.MAX_MSG_ID
                                                    .length,
                                                  d.MessageConstants.MAX_MSG_ID,
                                                ],
                                                excludeFrom: !1,
                                                excludeTo: !1,
                                              },
                                              s = {
                                                index: "userId_sendDttm_msgId",
                                                direction:
                                                  T.CursorDirection.PREV,
                                              },
                                              r = await e.getAllKey(i, s);
                                            null != r &&
                                              r.length &&
                                              (await e.deleteMulti(r));
                                          }
                                          async _emptyNewMediaStore(e, t) {
                                            const i = {
                                                from: [t, 0, ""],
                                                to: [
                                                  t,
                                                  parseInt(
                                                    d.MessageConstants
                                                      .MAX_SENDDTTM
                                                  ),
                                                  d.MessageConstants.MAX_MSG_ID,
                                                ],
                                                excludeFrom: !1,
                                                excludeTo: !1,
                                              },
                                              s = {
                                                index:
                                                  "convId_sendDttm_cliMsgId",
                                                direction:
                                                  T.CursorDirection.PREV,
                                              },
                                              r = await e.getAllKey(i, s);
                                            null != r &&
                                              r.length &&
                                              (await e.deleteMulti(r));
                                          }
                                          async updateFile(e, t, i) {
                                            return Object(v.a)()
                                              ? this._updateMedia(
                                                  "file",
                                                  e,
                                                  t,
                                                  i
                                                )
                                              : !!(await O.default.updateFile(
                                                  e,
                                                  t,
                                                  i
                                                ));
                                          }
                                          async getMediaFromConversationWhenDownloadOldMedia(
                                            e,
                                            t,
                                            i,
                                            s
                                          ) {
                                            if (!Object(v.a)())
                                              return p.a.getMediaFromConversation(
                                                { userId: e },
                                                s,
                                                t,
                                                i
                                              );
                                            const r = s.substring(
                                                0,
                                                s.length - 1
                                              ),
                                              a =
                                                await this.getValidMediasOfConv(
                                                  r,
                                                  e,
                                                  t,
                                                  i,
                                                  null
                                                );
                                            return a.length > 0
                                              ? a.map((e) => ({
                                                  userId: e.userId,
                                                  sendDttm: e.sendDttm,
                                                  msgId: e.msgId,
                                                  message: {
                                                    href: e.message.href,
                                                    params:
                                                      e.message.params || "",
                                                  },
                                                  type: e.type,
                                                  subType:
                                                    "image" === e.type
                                                      ? e.subType
                                                      : -1,
                                                }))
                                              : [];
                                          }
                                          getMediaFromConversation(
                                            e,
                                            t,
                                            i,
                                            s,
                                            r
                                          ) {
                                            if (!Object(v.a)())
                                              return p.a.getMediaFromConversation(
                                                { userId: t },
                                                e,
                                                i,
                                                s,
                                                r
                                              );
                                            const a = e.substring(
                                              0,
                                              e.length - 1
                                            );
                                            return this.getValidMediasOfConv(
                                              a,
                                              t,
                                              i,
                                              s,
                                              r
                                            );
                                          }
                                          async deleteMediaWhenDeleteMsg(e, t) {
                                            if (!Object(v.a)())
                                              return void O.default.deleteMediaItem(
                                                e
                                              );
                                            let i = "";
                                            if (null != t && t.mediaIdKeys) {
                                              const {
                                                cliMsgId: e,
                                                fromUid: s,
                                                convId: r,
                                              } = t.mediaIdKeys;
                                              i = `${e}_${s}_${r}`;
                                            } else
                                              i =
                                                await this._mediaPrimaryKeyConvertor.toMediaPKFromMessagePK(
                                                  e
                                                );
                                            this.deleteMediasById("", {
                                              newId: i,
                                              oldId: e,
                                            });
                                          }
                                          async deleteMediaItems(e, t, i) {
                                            if (!t) return [];
                                            if (!Object(v.a)())
                                              return p.a.deleteMediaItem(t, e);
                                            let s = [];
                                            s =
                                              null != i &&
                                              i.mediaIdKeysArr &&
                                              i.mediaIdKeysArr.length
                                                ? i.mediaIdKeysArr.map(
                                                    (e) =>
                                                      `${e.cliMsgId}_${e.fromUid}_${e.convId}`
                                                  )
                                                : await Promise.all(
                                                    t.map((e) =>
                                                      this._mediaPrimaryKeyConvertor.toMediaPKFromMessagePK(
                                                        e
                                                      )
                                                    )
                                                  );
                                            const r = t.map((e, t) => ({
                                              oldId: e,
                                              newId: s[t],
                                            }));
                                            return this.deleteMediasById(e, r);
                                          }
                                          async addLinksToConversation(e) {
                                            Object(v.a)()
                                              ? this.addMedias("link", e)
                                              : O.default.addLinksToConversation(
                                                  e
                                                );
                                          }
                                          async getFilesFromConversation(
                                            e,
                                            t,
                                            i
                                          ) {
                                            return Object(v.a)()
                                              ? this.getValidMediasOfConv(
                                                  "file",
                                                  e,
                                                  t,
                                                  i,
                                                  null
                                                )
                                              : O.default.getFilesFromConversation(
                                                  { userId: e },
                                                  t,
                                                  i
                                                );
                                          }
                                          async addMediasWhenTransferMessage(
                                            e,
                                            t,
                                            i
                                          ) {
                                            return i
                                              ? this._addMediasFromMessages(
                                                  e,
                                                  t
                                                )
                                              : this._addMediasWhenTransferMessageOldFlow(
                                                  e
                                                );
                                          }
                                          async addMediasAtExportImportFlow(
                                            e,
                                            t
                                          ) {
                                            return Object(v.a)()
                                              ? this._addMediasFromMessages(
                                                  e,
                                                  t
                                                )
                                              : this._addMediasAtExportImportFlowOldFlow(
                                                  e
                                                );
                                          }
                                          async addMediasFromMessagesWhenBackup(
                                            e,
                                            t
                                          ) {
                                            return Object(v.a)()
                                              ? this._addMediasFromMessages(
                                                  e,
                                                  t
                                                )
                                              : this._addMediasFromMessagesWhenBackupOldFlow(
                                                  e
                                                );
                                          }
                                          async deleteImageByMsgId(e, t) {
                                            if (!Object(v.a)())
                                              return O.default.deleteImageByMsgId(
                                                e
                                              );
                                            let i = "";
                                            return (
                                              (i =
                                                null != t && t.mediaIdKeys
                                                  ? `${t.mediaIdKeys.cliMsgId}_${t.mediaIdKeys.fromUid}_${t.mediaIdKeys.convId}`
                                                  : await this._mediaPrimaryKeyConvertor.toMediaPKFromMessagePK(
                                                      e
                                                    )),
                                              await this.deleteMediasById(
                                                "image",
                                                { newId: i, oldId: e }
                                              ),
                                              !0
                                            );
                                          }
                                          async doAddMediaToConversation(e, t) {
                                            return Object(v.a)()
                                              ? this.addMedias(e, t)
                                              : p.a.doAddMediaToConversation(
                                                  t,
                                                  e
                                                );
                                          }
                                          async updateMsgIdForRelativeMedia(
                                            e,
                                            t,
                                            i
                                          ) {
                                            const {
                                              imageStore: s,
                                              fileStore: r,
                                              linkStore: a,
                                            } = e;
                                            if (Object(v.a)()) {
                                              const e = (e, t, i) => {
                                                this.getMediaById(e, i).then(
                                                  (s) => {
                                                    s &&
                                                      ((s.msgId = t),
                                                      this.deleteMediasById(e, {
                                                        newId: void 0,
                                                        oldId: i,
                                                      }).then(() => {
                                                        this.addMedias(e, [s]);
                                                      }));
                                                  }
                                                );
                                              };
                                              e("file", t, i),
                                                e("image", t, i),
                                                e("link", t, i);
                                            } else {
                                              const e = (e, t, i) => {
                                                e.get(i).then((s) => {
                                                  s &&
                                                    ((s.msgId = t),
                                                    e.delete(i).then(() => {
                                                      e.insert(s);
                                                    }));
                                                });
                                              };
                                              r && e(r, t, i),
                                                s && e(s, t, i),
                                                a && e(a, t, i);
                                            }
                                          }
                                          async emptyMediaStores(e, t) {
                                            e &&
                                              t &&
                                              t.length &&
                                              (Object(v.a)()
                                                ? t.forEach((t) => {
                                                    "file" === t
                                                      ? this._emptyNewMediaStore(
                                                          _.a.getInstance()
                                                            .Media.File,
                                                          e
                                                        )
                                                      : "image" === t
                                                      ? this._emptyNewMediaStore(
                                                          _.a.getInstance()
                                                            .Media.Image,
                                                          e
                                                        )
                                                      : "link" === t &&
                                                        this._emptyNewMediaStore(
                                                          _.a.getInstance()
                                                            .Media.Link,
                                                          e
                                                        );
                                                  })
                                                : t.forEach((t) => {
                                                    "file" === t
                                                      ? this._emptyOldMediaStore(
                                                          _.a.getInstance().Core
                                                            .File,
                                                          e
                                                        )
                                                      : "image" === t
                                                      ? this._emptyOldMediaStore(
                                                          _.a.getInstance().Core
                                                            .Image,
                                                          e
                                                        )
                                                      : "link" === t &&
                                                        this._emptyOldMediaStore(
                                                          _.a.getInstance().Core
                                                            .Link,
                                                          e
                                                        );
                                                  }));
                                          }
                                          async addMediasFromOldDB(e, t) {
                                            if (!t || !t.length) return [];
                                            const i =
                                                this.getMediaRepository(e),
                                              s = p.a.getAllDeleteConv();
                                            let r = t,
                                              a = t.map((e) => e.msgId);
                                            if (s) {
                                              const i = t.reduce(
                                                (t, i) => {
                                                  var r;
                                                  const { userId: a } = i;
                                                  if (
                                                    null !== (r = s[a]) &&
                                                    void 0 !== r &&
                                                    r[e]
                                                  ) {
                                                    const r = i.msgId,
                                                      n = s[a][e].lastId;
                                                    n &&
                                                      r &&
                                                      n < r &&
                                                      t.oldMediaEntitiesShouldAddToNewDB.push(
                                                        i
                                                      );
                                                  } else
                                                    t.oldMediaEntitiesShouldAddToNewDB.push(
                                                      i
                                                    );
                                                  return (
                                                    t.oldMediaIdsShouldDeleteFromOldDB.push(
                                                      i.msgId
                                                    ),
                                                    t
                                                  );
                                                },
                                                {
                                                  oldMediaEntitiesShouldAddToNewDB:
                                                    [],
                                                  oldMediaIdsShouldDeleteFromOldDB:
                                                    [],
                                                }
                                              );
                                              (r =
                                                i.oldMediaEntitiesShouldAddToNewDB),
                                                (a =
                                                  i.oldMediaIdsShouldDeleteFromOldDB);
                                            }
                                            const n =
                                                await i.correctMediasInOldDB(
                                                  r,
                                                  { saveBack: !1 }
                                                ),
                                              o = this.getMediaMapper(e),
                                              d = n.map((e) =>
                                                o.toDomainFromOldDomain(e)
                                              ),
                                              l = await i.insertMulti(d);
                                            if (l.success.length) {
                                              const e = l.success.map((e) =>
                                                o.toMediaToCreateOrUpdateUtilsMediaDTOFromDomain(
                                                  e
                                                )
                                              );
                                              return (
                                                this._utilsMediaManager.createOrUpdateFromMedias(
                                                  e
                                                ),
                                                a
                                              );
                                            }
                                            return [];
                                          }
                                          async getMediasFromOldDB(e, t, i) {
                                            if (await this._isMigrationDone())
                                              return [];
                                            const s = {
                                                from: "",
                                                to: i,
                                                excludeFrom: !0,
                                                excludeTo: !0,
                                              },
                                              r = {
                                                index: "primary",
                                                direction:
                                                  T.CursorDirection.PREV,
                                                limit: t,
                                              };
                                            return this.getMediaRepository(e)
                                              .getOldDBTable()
                                              .getAll(s, r);
                                          }
                                          async deleteMediasFromOldDB(e, t) {
                                            const i =
                                              this.getMediaRepository(e);
                                            return (
                                              await i
                                                .getOldDBTable()
                                                .deleteMulti(t)
                                            ).success;
                                          }
                                          async deleteMediasFromOldDBByRange(
                                            e,
                                            t,
                                            i
                                          ) {
                                            const s = {
                                                from: "",
                                                to: i,
                                                excludeFrom: !0,
                                                excludeTo: !0,
                                              },
                                              r = {
                                                index: "primary",
                                                direction:
                                                  T.CursorDirection.PREV,
                                                limit: t,
                                              },
                                              a = this.getMediaRepository(e),
                                              n = await a
                                                .getOldDBTable()
                                                .getAllKey(s, r);
                                            return (
                                              await a
                                                .getOldDBTable()
                                                .deleteMulti(n)
                                            ).success;
                                          }
                                          async countTotalMediaInOldDB(e) {
                                            try {
                                              return this.getMediaRepository(e)
                                                .getOldDBTable()
                                                .count();
                                            } catch (t) {
                                              return (
                                                this._logger.zsymb(
                                                  18,
                                                  11103,
                                                  30014,
                                                  "[countTotalMediaInOldDB] - err: ",
                                                  t
                                                ),
                                                0
                                              );
                                            }
                                          }
                                          async _testAddMedias(e, t = 50) {
                                            let i = [];
                                            const s =
                                                2 * Date.now() +
                                                Math.round(
                                                  1e5 * Math.random()
                                                ) +
                                                1e3,
                                              r =
                                                5 * Date.now() +
                                                Math.round(
                                                  1e7 * Math.random()
                                                ) +
                                                1e3,
                                              a = [
                                                "0",
                                                "123456123111111456",
                                                "12345111111345",
                                                "111111111111111",
                                                "12345111111167890",
                                                "2121212121112222121",
                                                "1231231231232222123",
                                                "22222222222222222",
                                                "2111111111111222111",
                                                "322222222222222222",
                                                "12341234212341123",
                                                "9753434346787646",
                                                "1234123412341234",
                                                "987651235545454545",
                                                "123123455432123432",
                                                "21212123443434545",
                                                "5454544531321323",
                                                "98909087567564545645",
                                              ],
                                              n = [
                                                "4037840159631073270",
                                                ...JSON.parse(
                                                  '["101598415","124139871","147333052","169079931","194945127","200868372","225822710","276214855","355712826","361879215","910825795994501468","g100588026","g112969450","g1149397433596350988","g1352476194718464059","g147262698","g149205131","g158719108","g158754949","g160924468","g164283274","g175572981","g194334627","g230291933","g2426404535463764819","g245533229","g25193586","g257364624","g263690118","g285979907","g285992315","g28757702","g288999008","g289367881","g293290840","g301757910","g302249930","g302577276","g309222362","g312505929","g317894641","g318028102","g320951866","g321466298","g322706780","g325920125","g325933426","g328827910","g331912501","g34509241","g47431271","g5355130437069108654","g55402697","g6911969691454201107","g85951308"]'
                                                ),
                                              ];
                                            switch (e) {
                                              case "image":
                                                for (let e = 0; e < t; e++) {
                                                  const t =
                                                      a[
                                                        Math.round(
                                                          Math.random() *
                                                            (a.length - 1)
                                                        )
                                                      ],
                                                    o =
                                                      n[
                                                        Math.round(
                                                          Math.random() *
                                                            (n.length - 1)
                                                        )
                                                      ],
                                                    l = s + e,
                                                    c = r + e;
                                                  i.push({
                                                    userId: o,
                                                    cliMsgId: l,
                                                    fromUid: t,
                                                    msgId: c.toString(),
                                                    message: {
                                                      hdUrl:
                                                        "https://b-f62-zpg-r.zdn.vn/8236607293085145247/0d5e94a8fc3726697f26.jpg?e2esession=QIqxr2vdpiBkZh0yizDjKzJIO2LACOAaSb+KBDlUkbwlil6lySe5/p1RncUJJLfTJj1Co/AkPZAOh6ln",
                                                      oriUrl:
                                                        "https://b-f62-zpg-r.zdn.vn/8236607293085145247/0d5e94a8fc3726697f26.jpg?e2esession=QIqxr2vdpiBkZh0yizDjKzJIO2LACOAaSb+KBDlUkbwlil6lySe5/p1RncUJJLfTJj1Co/AkPZAOh6ln",
                                                      params:
                                                        '{"width":800,"height":800,"hd":"https://b-f62-zpg-r.zdn.vn/8236607293085145247/0d5e94a8fc3726697f26.jpg?e2esession=QIqxr2vdpiBkZh0yizDjKzJIO2LACOAaSb+KBDlUkbwlil6lySe5/p1RncUJJLfTJj1Co/AkPZAOh6ln","rawThumbUrl":"https://b-f62-zpg-r.zdn.vn/8236607293085145247/0d5e94a8fc3726697f26.jpg"}',
                                                      thumbUrl:
                                                        "https://f62-zpg-r.zdn.vn/1518777612491889561/5571c987a1187b462209.jpg?e2esession=YBl+XgC1U90bnMk4yPcU519rhnRW4KoItoeNXLpRsl/secNpaT3Nxkal57Nj3UZhy2rUFgxhf8Pcjwah",
                                                      title: void 0,
                                                    },
                                                    type: "image",
                                                    isExpired: !1,
                                                    isExpiredAll: !1,
                                                    subType: Math.round(
                                                      Math.random()
                                                    )
                                                      ? d.MSG_SUBTYPE_PHOTO
                                                      : d.MSG_SUBTYPE_MEDIA_VIDEO,
                                                    sendDttm: Date.now() + e,
                                                    ttl: 0,
                                                    localPath: null,
                                                    previewThumb: void 0,
                                                    updateTime: Date.now(),
                                                    width: 0,
                                                    height: 0,
                                                  });
                                                }
                                                break;
                                              case "file":
                                                for (let e = 0; e < t; e++) {
                                                  const t =
                                                      a[
                                                        Math.round(
                                                          Math.random() *
                                                            (a.length - 1)
                                                        )
                                                      ],
                                                    o =
                                                      n[
                                                        Math.round(
                                                          Math.random() *
                                                            (n.length - 1)
                                                        )
                                                      ],
                                                    d = s + e,
                                                    l = r + e;
                                                  i.push({
                                                    userId: o,
                                                    cliMsgId: d,
                                                    fromUid: t,
                                                    msgId: l.toString(),
                                                    message: {
                                                      href: "https://f27-group-zfr.zdn.vn/7f8b522a54e0babee3f1/117090926800068678?e2esession=RSHmz0Kj28vN9gMz6oFilBjFxVFqisUPnj3XpjlolXXpTo3bwJ0hqlUl5uR6Sr/wtHrtcyXqXj/mLYl3",
                                                      params:
                                                        '{"fileSize":8178,"checksum":"78c2c03eeab27abbdf28b0fe25088e30","checksumSha":"","fileExt":"xlsx","fdata":"{}","fType":1}',
                                                      title:
                                                        "program_matrix_laP5chSikftFYc_LmERud.xlsx",
                                                    },
                                                    type: "file",
                                                    fileType: -1,
                                                    extType: "",
                                                    sendDttm: Date.now() + e,
                                                    ttl: 0,
                                                    updateTime: Date.now(),
                                                    localPath: null,
                                                    folderPath: null,
                                                    previewThumb: "",
                                                    dimension: null,
                                                    downloadError: !1,
                                                    isExpired: !1,
                                                    isExpiredAll: !1,
                                                  });
                                                }
                                                break;
                                              case "link":
                                                for (let e = 0; e < t; e++) {
                                                  const t =
                                                      a[
                                                        Math.round(
                                                          Math.random() *
                                                            (a.length - 1)
                                                        )
                                                      ],
                                                    o =
                                                      n[
                                                        Math.round(
                                                          Math.random() *
                                                            (n.length - 1)
                                                        )
                                                      ],
                                                    d = s + e,
                                                    l = r + e;
                                                  i.push({
                                                    userId: o,
                                                    cliMsgId: d,
                                                    fromUid: t,
                                                    msgId: l.toString(),
                                                    message: {
                                                      action: "recommened.link",
                                                      childnumber: 0,
                                                      description:
                                                        "http://tinhte.vn",
                                                      href: "http://tinhte.vn",
                                                      oriUrl:
                                                        "http://tinhte.vn",
                                                      params:
                                                        '{"mediaTitle":"http://tinhte.vn","artist":"","src":"tinhte.vn","stream_icon":"","streamUrl":"","type":0,"subType":3}',
                                                      thumb: "",
                                                      thumbUrl: "",
                                                      title: "tinhte.vn",
                                                      type: "",
                                                    },
                                                    type: "link",
                                                    sendDttm: Date.now() + e,
                                                    ttl: 0,
                                                    updateTime: Date.now(),
                                                    previewThumb: "",
                                                  });
                                                }
                                            }
                                            const o = this._getMediaDB(e, !1);
                                            await (null == o
                                              ? void 0
                                              : o.insertMulti(i));
                                          }
                                          _getMediaDB(e, t) {
                                            const i = _.a.getInstance();
                                            switch (e) {
                                              case "image":
                                                return t
                                                  ? i.Media.Image
                                                  : i.Core.Image;
                                              case "file":
                                                return t
                                                  ? i.Media.File
                                                  : i.Core.File;
                                              case "link":
                                                return t
                                                  ? i.Media.Link
                                                  : i.Core.Link;
                                            }
                                          }
                                        })
                                      ) || s)
                                  ) || s)
                              ) || s)
                          ) || s)
                      ) || s)
                  ) || s)
              ) || s)
          ) || s)
      );
    },
    "3dEI": function (e, t, i) {
      "use strict";
      i.d(t, "b", function () {
        return r;
      });
      var s = i("jDHv");
      const r = Object(s.define)("media-repository-factory");
    },
    "3jnX": function (e, t, i) {
      "use strict";
      i.d(t, "b", function () {
        return d;
      }),
        i.d(t, "a", function () {
          return l;
        }),
        i.d(t, "c", function () {
          return c;
        });
      var s = i("rePB"),
        r = i("jDHv"),
        a = i("AH6j"),
        n = i("Xy/4"),
        o = i("dOPt");
      class d extends a.b {
        constructor(e) {
          super(),
            Object(s.a)(this, "id", "-1"),
            Object(s.a)(this, "type", void 0),
            Object(s.a)(this, "params", void 0),
            Object(s.a)(this, "result", void 0),
            Object(s.a)(this, "error", void 0),
            Object(s.a)(this, "checkpoint", void 0),
            Object(s.a)(this, "abortController", new AbortController()),
            (this.type = e.type),
            (this.params = e.params),
            (this.result = e.result),
            (this.checkpoint = e.checkpoint);
        }
        notifyProgressChange(e, t) {
          this.abortController.signal.aborted ||
            ((this.checkpoint = t), this.dispatchEvent(new g(e, t)));
        }
        notifyResult(e, t) {
          this.abortController.signal.aborted ||
            ((this.result = e),
            this.dispatchEvent(new u(e, t)),
            this.dispatchEvent(new Event(c.Finalized)));
        }
        notifyError(e) {
          this.abortController.signal.aborted ||
            (this.dispatchEvent(new m(e)),
            this.dispatchEvent(new Event(c.Finalized)));
        }
        abort(e) {
          if (!this.abortController.signal.aborted)
            return new Promise((t) => {
              this.abortController.abort(e),
                r.ModuleContainer.resolve(n.a).abort(this.id),
                setTimeout(() => {
                  t();
                }, 500);
            });
        }
        notifyStarted() {
          this.abortController.signal.aborted || this.dispatchEvent(new h());
        }
        run() {
          return this.result
            ? Promise.resolve(this.result)
            : this.error
            ? Promise.reject(this.error)
            : new Promise((e, t) => {
                this.addEventListener(c.Completed, (t) => {
                  e(t.result);
                }),
                  this.addEventListener(c.Error, (e) => {
                    t(e.error);
                  }),
                  r.ModuleContainer.resolve(n.a).run(this);
              });
        }
        changeParams(e) {
          this.result ||
            this.error ||
            ("function" == typeof e && (e = e(this.params)),
            r.ModuleContainer.resolve(n.a).notifyChangeParams(this.id, e));
        }
        reset() {
          (this.result = void 0), (this.error = void 0);
        }
        toDescriptor() {
          return {
            id: this.id.toString(),
            type: this.type,
            params: this.params,
            checkpoint: this.checkpoint,
          };
        }
      }
      class l {
        onStart() {
          r.ModuleContainer.resolve(o.a).registerHandler(this.getType(), this);
        }
      }
      let c;
      !(function (e) {
        (e.Error = "error"),
          (e.Progress = "progress"),
          (e.Completed = "completed"),
          (e.Aborted = "aborted"),
          (e.Started = "started"),
          (e.ParamChanged = "changed"),
          (e.Finalized = "finalized");
      })(c || (c = {}));
      class m extends a.a {
        constructor(e) {
          super(c.Error), (this.error = e);
        }
      }
      class g extends a.a {
        constructor(e, t) {
          super(c.Progress), (this.progress = e), (this.checkpoint = t);
        }
      }
      class u extends a.a {
        constructor(e, t) {
          super(c.Completed), (this.result = e), (this.checkpoint = t);
        }
      }
      a.a;
      class h extends a.a {
        constructor() {
          super(c.Started);
        }
      }
      a.a;
    },
    "4ePI": function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return p;
      });
      var s = i("VTBJ"),
        r = i("rePB"),
        a = i("NDmK"),
        n = i("fsN4"),
        o = i("GbHB"),
        d = i("1pet"),
        l = i("K4Ns"),
        c = i("wH4e"),
        m = i("8Nax"),
        g = i("z0WU"),
        u = i("XS0u"),
        h = i("8tev");
      class p {
        constructor(e, t, i, s, a, o) {
          Object(r.a)(this, "_dbInstance", void 0),
            Object(r.a)(this, "_mediaMigrationManager", void 0),
            Object(r.a)(this, "_dalInstance", n.a.getInstance()),
            Object(r.a)(this, "dbTable", void 0),
            Object(r.a)(this, "logger", void 0),
            Object(r.a)(this, "mediaType", void 0),
            (this.dbTable = this._dalInstance[e][t]),
            (this._dbInstance = this._dalInstance[e]),
            (this.mediaType = i),
            (this._mediaMigrationManager = a),
            (this.logger = o.createZLogger(`${e}-${t}-repository`, [s]));
        }
        async insert(e, t) {
          if (!e) throw Error("[insert]: item is undefined!");
          if (!e.cliMsgId || !e.fromUid || !e.convId)
            throw Error(
              `[insert]: item doesn't have valid key_from_to: ${e.cliMsgId}_${e.fromUid}_${e.convId}`
            );
          return (
            (e.mediaId = `${e.cliMsgId}_${e.fromUid}_${e.convId}`),
            !!(await this.dbTable.insert(e, t))
          );
        }
        insertMulti(e, t) {
          if (!e || !e.length)
            throw Error("[insertMulti]: items is undefined or empty!");
          const i = [];
          return (
            e.forEach((e) => {
              e.cliMsgId && e.fromUid && e.convId
                ? ((e.mediaId = `${e.cliMsgId}_${e.fromUid}_${e.convId}`),
                  i.push(e))
                : this.logger.zsymb(
                    21,
                    11437,
                    3e4,
                    "[insertMulti]: media doesn't have valid key_from_to: {}_{}_{}",
                    e.cliMsgId,
                    e.fromUid,
                    e.convId
                  );
            }),
            this.dbTable.insertMulti(i, t)
          );
        }
        async update(e, t) {
          if (!p.isNewMediaIdFormat(e))
            throw Error("[update]: mediaId doesn't have new media id format!");
          return !!(await this.dbTable.update(e, t));
        }
        async updateMedia(e, t, i = l.c.UNKNOWN) {
          if (!e) throw Error("[updateMedia]: mediaIdObj is undefined!");
          const { newId: r, oldId: a } = e;
          if ((i === l.c.NEW || (await this._isMigrationDone())) && r)
            return !!(await this.dbTable.update(r, t));
          if (i === l.c.OLD && a) {
            let e;
            if (t) {
              const i = this.getMediaMapper().toOldEAttsFromNewEAtts(
                t.value || {}
              );
              return (
                (e = Object(s.a)(
                  Object(s.a)({}, t),
                  {},
                  { attributes: Object.keys(i), value: i }
                )),
                !!(await this.getOldDBTable().update(a, e))
              );
            }
            throw Error("options is undefined!");
          }
          try {
            if (r) {
              if (await this.dbTable.get(r))
                return !!(await this.dbTable.update(r, t));
            }
            if (a) {
              let e;
              if (t) {
                const i = this.getMediaMapper().toOldEAttsFromNewEAtts(
                  t.value || {}
                );
                return (
                  (e = Object(s.a)(
                    Object(s.a)({}, t),
                    {},
                    { attributes: Object.keys(i), value: i }
                  )),
                  !!(await this.getOldDBTable().update(a, e))
                );
              }
              throw Error("options is undefined!");
            }
            throw Error(`${r} or ${a} isn't valid!`);
          } catch (n) {
            throw Error(`[updateMedia] - err: ${n.message}`);
          }
        }
        async updateMulti(e) {
          const t = await this.dbTable.updateMulti(e);
          return {
            success: t.success.map((e) => e.mediaId),
            fail: t.fail.map((e) => e.mediaId),
          };
        }
        async updateMultiMedias(e) {
          throw Error("This updateMultiMedias isn't implemented!");
        }
        delete(e, t) {
          if (!p.isNewMediaIdFormat(e))
            throw Error("[delete]: mediaId doesn't have new media id format!");
          return this.dbTable.delete(e, t);
        }
        deleteMulti(e, t) {
          if (!e || !e.length)
            throw Error("[deleteMulti]: mediaIds is undefined or empty!");
          if (e.some((e) => !p.isNewMediaIdFormat(e)))
            throw Error(
              "[deleteMulti]: mediaIds contains an id which doesn't have new media id format!"
            );
          return this.dbTable.deleteMulti(e, t);
        }
        async deleteMedia(e, t, i = l.a.UNKNOWN) {
          if (!e) throw Error("[deleteMedia]: mediaObj is undefined!");
          const { newId: s, oldId: r } = e;
          if ((i === l.a.NEW || (await this._isMigrationDone())) && s)
            return this.dbTable.delete(s);
          if (i === l.a.OLD && r) return this.getOldDBTable().delete(r, t);
          {
            const e = [];
            s && e.push(this.dbTable.delete(s, t)),
              r && e.push(this.getOldDBTable().delete(r, t));
            return (await Promise.allSettled(e)).every(
              (e) => "fulfilled" === e.status && e.value
            );
          }
        }
        async deleteMultiMedias(e, t) {
          if (!e || !e.length)
            throw Error(
              "[deleteMultiMedias]: mediaIdObjs is undefined or empty!"
            );
          const i = { success: [], fail: [] },
            s = [];
          for (const { newId: r, oldId: a, deleteTo: n } of e) {
            const e =
                (n === l.a.NEW ? r : n === l.a.OLD ? a : r || a || "") || "",
              o = async () => {
                try {
                  (await this.deleteMedia({ newId: r, oldId: a }, t, n)) &&
                    i.success.push(e);
                } catch (s) {
                  this.logger.zsymb(18, 11437, 30001, s), i.fail.push(e);
                }
              };
            s.push(o);
          }
          return await Promise.allSettled(s.map((e) => e())), i;
        }
        async get(e, t) {
          if (!p.isNewMediaIdFormat(e))
            throw Error("[get]: mediaId doesn't have new media id format!");
          return this.dbTable.get(e, t);
        }
        async getMulti(e, t) {
          const { newIdFormats: i, oldIdFormats: s } = e.reduce(
            (e, t) => (p.isNewMediaIdFormat(t) && e.newIdFormats.push(t), e),
            { newIdFormats: [], oldIdFormats: [] }
          );
          let r = [];
          if (i.length) {
            const e = await this.dbTable.getMulti(i, t);
            e.length && r.push(...e);
          }
          return r;
        }
        async getMedia(e, t, i = l.b.UNKNOWN) {
          if (!e) throw Error("[getMedia]: mediaIdObj params is undefined!");
          const { newId: s, oldId: r } = e;
          if ((i === l.b.NEW || (await this._isMigrationDone())) && s)
            return this.dbTable.get(s, t);
          if (i === l.b.NEW && r) {
            const e = await this.getOldDBTable().get(r, t);
            if (e) return this.getMediaMapper().toDomainFromOldDomain(e);
          } else {
            if (s) {
              const e = await this.dbTable.get(s, t);
              if (e) return e;
            }
            if (r) {
              const e = await this.getOldDBTable().get(r, t);
              if (e) return this.getMediaMapper().toDomainFromOldDomain(e);
            }
          }
        }
        async getMultiMedias(e, t) {
          if (!e || !e.length)
            throw Error("[getMultiMedias]: mediaIdObjs is undefined or empty!");
          let i = [];
          const s = [];
          for (const { newId: r, oldId: a, getFrom: n } of e)
            s.push(
              this.getMedia(
                { newId: r, oldId: a },
                t,
                "number" == typeof n ? n : l.b.UNKNOWN
              )
            );
          return (
            (i = (await Promise.allSettled(s)).map((e) =>
              "fulfilled" === e.status ? e.value : void 0
            )),
            i
          );
        }
        getAll(e, t) {
          if (!e) throw Error("[getAll]: keyRange is undefined!");
          return this.dbTable.getAll(e, t);
        }
        async getAllInOldDB(e, t) {
          if (await this._isMigrationDone()) return [];
          if (!e) throw Error("[getAllInOldDB]: keyRange is undefined!");
          const i = await this.getOldDBTable().getAll(e, t);
          return null != i && i.length
            ? i.map((e) => this.getMediaMapper().toDomainFromOldDomain(e))
            : [];
        }
        static isNewMediaIdFormat(e) {
          if (!e) return !1;
          return 3 === e.split("_").length;
        }
        static filterMedia(e, t) {
          if (
            !(
              t &&
              (t.member ||
                (t.date && (t.date.start || t.date.end)) ||
                t.name ||
                t.ext)
            )
          )
            return !0;
          if (!t.member || (e.fromUid && e.fromUid === t.member)) {
            let s, r, a;
            if (t.name) {
              if (e.message.params && e.message.href)
                try {
                  let t = JSON.parse(e.message.params);
                  (s = t.mediaTitle
                    ? g.default.simpleStripVietnamese(t.mediaTitle)
                    : g.default.simpleStripVietnamese(e.message.title)),
                    (r = t.src);
                } catch (i) {
                  return g.default.logCoreError(i), !1;
                }
              a = g.default.simpleStripVietnamese(t.name);
            }
            if (
              !t.name ||
              (a.length <= s.length && g.default.searchContent(s, a))
            ) {
              let s = !1;
              if (
                (t.ext &&
                  (s = d.fileExt[t.ext].some((t) => {
                    if (!e.message.title) {
                      const t = o.a.decrypt(e.message, u.default.UIN, !1);
                      try {
                        e.message = JSON.parse(t);
                      } catch (i) {
                        e.message = { title: "" };
                      }
                    }
                    return e.message.title.endsWith(t);
                  })),
                !t.ext || s)
              )
                return (
                  (null == t.date.start && null == t.date.end) ||
                  (e.sendDttm >= t.date.start ? e.sendDttm <= t.date.end : 0)
                );
            }
          }
          return !1;
        }
        async isExistedMedia(e) {
          let t = !1;
          if (e) {
            const { newId: i, oldId: s } = e;
            i && (t = !!(await this.dbTable.get(i))),
              s && !t && (t = !!(await this.getOldDBTable().get(s)));
          }
          return t;
        }
        async getLastMediasOfConv(e, t, i = 100) {
          if (!e || !t)
            throw Error(
              `[getLastMediasOfConv]: convId: ${e}, lastItemOptions:${JSON.stringify(
                t
              )} isn't valid!`
            );
          const { sendDttm: s, cliMsgId: r, msgId: a } = t,
            n = await this.getLastMediasOfConvInNewDB(
              e,
              { sendDttm: s, cliMsgId: r },
              i
            );
          return (
            n.length < i &&
              !(await this._isMigrationDone()) &&
              n.push(
                ...(await this.getLastMediasOfConvInOldDB(
                  e,
                  { msgId: a },
                  i - n.length
                ))
              ),
            n
          );
        }
        async countMediaOfConv(e, t) {
          let i = 0;
          if (!(e && t && t.from && t.to))
            throw Error(
              `[countMediaOfConv]: convId: ${e}, options: ${JSON.stringify(
                t
              )} isn't valid!`
            );
          const { from: s, to: r } = t;
          return (
            (i = await this.countMediaOfConvInNewDB(e, {
              from: { sendDttm: s.sendDttm, cliMsgId: s.cliMsgId },
              to: { sendDttm: r.sendDttm, cliMsgId: r.cliMsgId },
            })),
            (await this._isMigrationDone()) ||
              (i += await this.countMediaOfConvInOldDB(e, {
                from: { msgId: s.msgId },
                to: { msgId: r.msgId },
              })),
            i
          );
        }
        countMediaOfConvInNewDB(e, t) {
          const { from: i, to: s } = t,
            r = {
              from: [e, i.sendDttm, i.cliMsgId],
              to: [e, s.sendDttm, s.cliMsgId],
              excludeFrom: !1,
              excludeTo: !1,
            };
          return this.dbTable.count(r, { index: "convId_sendDttm_cliMsgId" });
        }
        async countMediaOfConvInOldDB(e, t) {
          if (await this._isMigrationDone()) return 0;
          const { from: i, to: s } = t,
            r = {
              from: [e, i.msgId.length, i.msgId],
              to: [e, s.msgId.length, s.msgId],
              excludeFrom: !1,
              excludeTo: !1,
            };
          return this.getOldDBTable().count(r, {
            index: "userId_sendDttm_msgId",
          });
        }
        async getMediasOfConv(e, t, i, s) {
          if (!e || !t || !i) return Promise.resolve([]);
          let r = [];
          if (
            (a.default.load_media.optimize_mode &&
              (r = (await this._isMigrationDone())
                ? await this.getMediasOfConvOptimizeMode(e, t, i, s)
                : await this.getMediasOfConvOptimizeModeInMixedDB(e, t, i, s)),
            null != s && s.deletePointOfConv)
          ) {
            const {
              lastId: e,
              lastSendDttm: t,
              lastCliMsgId: i,
            } = s.deletePointOfConv;
            return r.filter(
              (s) =>
                !(e && s.msgId && s.msgId <= e) &&
                !(t && s.sendDttm <= t) &&
                !(i && s.cliMsgId <= i)
            );
          }
          return r;
        }
        async getMediasOfConvOptimizeModeInMixedDB(e, t, i, s) {
          let r = !1,
            a = !1;
          s &&
            s.date &&
            (null !== s.date.start || null !== s.date.end) &&
            (r = !0);
          const n = [],
            { sendDttm: o, cliMsgId: d } =
              await this.getSendDttmOfLatestMediaInOldDB(e),
            { sendDttm: l, cliMsgId: u, msgId: h } = t,
            M = {
              from: [e, 0, ""],
              to: [e, l, u],
              excludeFrom: !0,
              excludeTo: !0,
            },
            f = {
              index: "convId_sendDttm_cliMsgId",
              limit: i,
              direction: c.CursorDirection.PREV,
              predicate: (e) => {
                if (!e) return !1;
                if (!g.default.mapHasItem(e.content)) return !1;
                if (!m.a.instance.filterDBMessage(e)) return !1;
                let t = p.filterMedia(
                  {
                    message: e.content,
                    fromUid: e.fromUid,
                    sendDttm: e.sendDttm,
                  },
                  s
                );
                return (
                  0 === t && (a = !0),
                  !!t && ((e.sendDttm > o && e.cliMsgId > d) || (n.push(e), !1))
                );
              },
              aborted: r ? () => a : void 0,
            };
          try {
            let t = await this.dbTable.getAll(M, f);
            if (t.length < i) {
              const r = await this.getMediasOfConvOptimizeModeInOldDB(
                  e,
                  { msgId: h },
                  i - t.length,
                  s
                ),
                a = [];
              r.length > 0
                ? n.length > 0
                  ? (r.forEach((e) => {
                      const t = n[0];
                      t && e.sendDttm <= t.sendDttm && e.cliMsgId <= t.cliMsgId
                        ? (a.push(t), n.shift())
                        : a.push(e);
                    }),
                    n.length > 0 && a.push(...n),
                    t.push(...a.slice(0, i - t.length)))
                  : t.push(...r)
                : n.length > 0 && t.push(...n);
            }
            return t;
          } catch (b) {
            const t = [e, this.mediaType, i, l, u, !!s].join("_");
            throw (this.logger.zsymb(18, 11437, 30002, t, b), b);
          }
        }
        async getSendDttmOfLatestMediaInOldDB(e) {
          const t = {
              from: [e, 0, ""],
              to: [
                e,
                d.MessageConstants.MAX_SENDDTTM,
                d.MessageConstants.MAX_MSG_ID,
              ],
              excludeFrom: !1,
              excludeTo: !1,
            },
            i = {
              index: "userId_sendDttm_msgId",
              limit: 1,
              direction: c.CursorDirection.PREV,
            },
            s = await this.getOldDBTable().getAll(t, i);
          if (!s || !s[0]) return { sendDttm: 0, cliMsgId: "0" };
          return {
            sendDttm:
              "string" == typeof s[0].sendDttm
                ? parseInt(s[0].sendDttm)
                : s[0].sendDttm,
            cliMsgId: "" + (s[0].cliMsgId || 0),
          };
        }
        async getMediasOfConvOptimizeMode(e, t, i, s) {
          if (!e || !t || !i)
            throw Error(
              `[getMediasOfConvOptimizeMode]: convId: ${e}, lastItemOptions: ${JSON.stringify(
                t
              )}, limit: ${i} isn't valid!`
            );
          const { sendDttm: r, cliMsgId: a, msgId: n } = t,
            o = await this.getMediasOfConvOptimizeModeInNewDB(
              e,
              { sendDttm: r, cliMsgId: a },
              i,
              s
            );
          return (
            o.length < i &&
              !(await this._isMigrationDone()) &&
              o.push(
                ...(await this.getMediasOfConvOptimizeModeInOldDB(
                  e,
                  { msgId: n },
                  i - o.length,
                  s
                ))
              ),
            o
          );
        }
        getMediasOfConvOptimizeModeInNewDB(e, t, i, s) {
          let r = !1,
            a = !1;
          s &&
            s.date &&
            (null !== s.date.start || null !== s.date.end) &&
            (r = !0);
          const { sendDttm: n, cliMsgId: o } = t,
            d = {
              from: [e, 0, ""],
              to: [e, n, o],
              excludeFrom: !0,
              excludeTo: !0,
            },
            l = {
              index: "convId_sendDttm_cliMsgId",
              limit: i,
              direction: c.CursorDirection.PREV,
              predicate: (e) => {
                if (!e) return !1;
                if (!g.default.mapHasItem(e.content)) return !1;
                if (!m.a.instance.filterDBMessage(e)) return !1;
                let t = p.filterMedia(
                  {
                    message: e.content,
                    fromUid: e.fromUid,
                    sendDttm: e.sendDttm,
                  },
                  s
                );
                return 0 === t && (a = !0), !!t;
              },
              aborted: r ? () => a : void 0,
            };
          try {
            return this.dbTable.getAll(d, l);
          } catch (u) {
            const t = [e, this.mediaType, i, n, o, !!s].join("_");
            throw (this.logger.zsymb(18, 11437, 30003, t, u), u);
          }
        }
        async getMediasOfConvOptimizeModeInOldDB(e, t, i, s) {
          if (await this._isMigrationDone()) return [];
          let r = !1,
            a = !1;
          s &&
            s.date &&
            (null != s.date.start || null != s.date.end) &&
            (r = !0);
          const { msgId: n } = t,
            o = {
              from: [e, 0, ""],
              to: [e, n.length, n],
              excludeFrom: !0,
              excludeTo: !0,
            },
            d = {
              index: "userId_sendDttm_msgId",
              limit: i,
              direction: c.CursorDirection.PREV,
              predicate: (e) => {
                if (e) {
                  if (e.msgId && e.msgId.includes("_")) return !1;
                  if (!g.default.mapHasItem(e.message)) return !1;
                }
                if (!m.a.instance.filterDBMessage(e)) return !1;
                let t = p.filterMedia(e, s);
                return 0 === t && (a = !0), !!t;
              },
              aborted: r ? () => a : void 0,
            };
          try {
            const e = await this.getOldDBTable().getAll(o, d);
            return (await this.correctMediasInOldDB(e)).map((e) =>
              this.getMediaMapper().toDomainFromOldDomain(e)
            );
          } catch (l) {
            const t = [e, this.mediaType, i, n, !!s].join("_");
            throw (this.logger.zsymb(18, 11437, 30004, t, l), l);
          }
        }
        getLastMediasOfConvInNewDB(e, t, i) {
          const { sendDttm: s, cliMsgId: r } = t,
            a = {
              from: [e, 0, ""],
              to: [e, s, r],
              excludeFrom: !1,
              excludeTo: !1,
            },
            n = {
              index: "convId_sendDttm_cliMsgId",
              limit: i,
              direction: c.CursorDirection.PREV,
            };
          return this.dbTable.getAll(a, n);
        }
        async getLastMediasOfConvInOldDB(e, t, i) {
          if (await this._isMigrationDone()) return [];
          const { msgId: r } = t,
            a = {
              from: [e, 0, ""],
              to: [e, r.length, r],
              excludeFrom: !1,
              excludeTo: !1,
            },
            n = {
              index: "userId_sendDttm_msgId",
              limit: i,
              direction: c.CursorDirection.PREV,
            },
            o = await this.getOldDBTable().getAll(a, n);
          return o.length > 0
            ? o.map((e) =>
                Object(s.a)(
                  Object(s.a)(
                    {},
                    this.getMediaMapper().toDomainFromOldDomain(e)
                  ),
                  {},
                  { msgId: e.msgId }
                )
              )
            : [];
        }
        correctMediasInOldDB(e, t = { saveBack: !0 }) {
          return e && e.length
            ? new Promise((i) => {
                let s = [],
                  r = {},
                  a = [];
                if (
                  (e.forEach((e) => {
                    e &&
                      e.msgId &&
                      e.sendDttm &&
                      (e.type && e.cliMsgId
                        ? a.push(e)
                        : (s.push(e.msgId), (r[e.msgId] = e)));
                  }),
                  !s.length)
                )
                  return i(a);
                {
                  let e = "";
                  const n = (t, i) => {
                    switch (i.msgType) {
                      case d.MSG_PHOTO:
                      case d.MSG_PHOTO_2:
                        (e = "image"), (t.subType = d.MSG_SUBTYPE_PHOTO);
                        break;
                      case d.MSG_VIDEO:
                        (e = "image"), (t.subType = d.MSG_SUBTYPE_MEDIA_VIDEO);
                        break;
                      case d.MSG_FILE:
                        e = "file";
                        break;
                      case d.MSG_CONTACT:
                        "object" == typeof i.message &&
                          "recommened.link" === i.message.action &&
                          (e = "link");
                    }
                    return (t.cliMsgId = i.cliMsgId), (t.type = e), t;
                  };
                  u.default
                    .getMessagesByIdsInQueue(s)
                    .then((e) => {
                      const s = [];
                      if (e) for (let t in e) e[t] && s.push(n(r[t], e[t]));
                      let o = a.concat(s);
                      return (
                        o.sort(
                          (e, t) => parseInt(t.sendDttm) - parseInt(e.sendDttm)
                        ),
                        s.length &&
                          t.saveBack &&
                          this.deleteAndInsertInOldDB(s),
                        i(o)
                      );
                    })
                    .catch((e) => i(a));
                }
              })
            : Promise.resolve([]);
        }
        async deleteAndInsertInOldDB(e) {
          if (!e || !e.length)
            throw Error(
              `[deleteAndInsertInOldDB]: oldItems: ${JSON.stringify(
                e
              )} isn't valid!`
            );
          return this.getOldDBTable().insertMulti(e, { replace: !0 });
        }
        async _isMigrationDone() {
          return (
            (await this._mediaMigrationManager.getMediaMigrationState())
              .stateName === h.b.DONE
          );
        }
      }
    },
    "5R0e": function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return n;
        });
      var s = i("4ePI"),
        r = i("jDHv");
      class a extends s.a {
        constructor(e, t, i, s, r, a) {
          super(e, t, i, s, r, a);
        }
      }
      const n = Object(r.define)("link-media-repository");
    },
    "5txd": function (e, t, i) {
      "use strict";
      function s(e) {
        const t = e;
        return function (e, i, s = "error") {
          const r = `${e} ${s}: ${i}`;
          switch (s) {
            case "error":
              t.zsymb(18, 11443, 3e4, r);
              break;
            case "debug":
              t.zsymb(12, 11443, 30001, r);
              break;
            case "info":
              t.zsymb(0, 11443, 30002, r);
          }
        };
      }
      i.d(t, "a", function () {
        return s;
      });
    },
    "7WMW": function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return s.a;
      }),
        i.d(t, "b", function () {}),
        i.d(t, "c", function () {
          return a;
        });
      i("AjFa"), i("W13p"), i("5R0e");
      var s = i("4ePI"),
        r = i("jDHv");
      const a = Object(r.define)("utils-media-repository");
    },
    "8tev": function (e, t, i) {
      "use strict";
      i.d(t, "b", function () {
        return s;
      }),
        i.d(t, "d", function () {
          return r;
        }),
        i.d(t, "e", function () {
          return a;
        }),
        i.d(t, "a", function () {
          return n;
        }),
        i.d(t, "c", function () {
          return o;
        });
      const s = { DONE: "DONE", NOT_DONE: "NOT_DONE", UNKNOWN: "UNKNOWN" },
        r = {
          GET_FROM_OLD_DB: "GET_FROM_OLD_DB",
          ADD_TO_NEW_DB: "ADD_TO_NEW_DB",
          DELETE_FROM_OLD_DB: "DELETE_FROM_OLD_DB",
        },
        a = { DONE: "DONE", FAILED: "FAILED" },
        n = {
          NEW: "NEW",
          LOAD_FROM_LOCAL: "LOAD_FROM_LOCAL",
          RUNNING: "RUNNING",
          DONE: "DONE",
          FAILED: "FAILED",
        },
        o = {
          PERSISTED_JOB_DESC_SUMMARIES_KEY: "persisted_job_desc_summaries",
          MSG_ID_CURSOR_KEY: "msg_id_cursor",
          MIGRATION_STATE_KEY: "migration_state",
        };
    },
    AjFa: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return m;
      }),
        i.d(t, "b", function () {
          return g;
        });
      var s = i("VTBJ"),
        r = i("4ePI"),
        a = i("jDHv"),
        n = i("wH4e"),
        o = i("fsN4"),
        d = i("z0WU"),
        l = i("1pet"),
        c = i("XS0u");
      class m extends r.a {
        constructor(e, t, i, s, r, a) {
          super(e, t, i, s, r, a);
        }
        async getImageMessagesForPhotoViewer(e, t, i, r, a, n) {
          const d = await this.getMsgIdsOfImageMediaForPhotoViewer(
            e,
            i,
            t,
            r,
            a,
            n
          );
          if (null == d || !d.length) return [];
          const l = await Promise.all(
              d.map((e) => this.getMediaMapper().toDTO(e))
            ),
            m = [];
          let g = [];
          for (const c of l)
            m.push(
              o.a
                .getInstance()
                .Core.Message.get(c.msgId, { partition: e })
                .then((e) => {
                  e
                    ? g.push(Object(s.a)(Object(s.a)({}, c), e))
                    : c.message && g.push(c);
                })
            );
          return (
            await Promise.all(m),
            g.reverse(),
            c.default._fillExifBeforeShow(g),
            g
          );
        }
        async getMsgIdsOfImageMediaForPhotoViewer(e, t, i, s, r, a) {
          const { cliMsgId: o, sendDttm: c, msgId: m } = t,
            g = !s && !r;
          let u = !1;
          const h = () => u,
            p = (e) => {
              if (
                !(
                  a &&
                  (a.member ||
                    (a.date && (a.date.start || a.date.end)) ||
                    a.name ||
                    a.ext)
                )
              )
                return !0;
              if (!a.member || (e.fromUid && e.fromUid === a.member)) {
                let i, s, r;
                if (a.name) {
                  if (e.message.params && e.message.href)
                    try {
                      let t = JSON.parse(e.message.params);
                      (i = t.mediaTitle
                        ? d.default.simpleStripVietnamese(t.mediaTitle)
                        : d.default.simpleStripVietnamese(e.message.title)),
                        (s = t.src);
                    } catch (t) {
                      return this.logger.zsymb(18, 11412, 3e4, t), !1;
                    }
                  r = d.default.simpleStripVietnamese(a.name);
                }
                if (
                  !a.name ||
                  d.default.searchContent(i, r) ||
                  d.default.searchContent(s, r)
                ) {
                  let t = !1;
                  if (
                    (a.ext &&
                      (t = l.fileExt[a.ext].some((t) =>
                        e.message.title.endsWith(t)
                      )),
                    !a.ext || t)
                  )
                    return (
                      !a.date.start ||
                      !a.date.end ||
                      (a.date.end < e.sendDttm
                        ? e.sendDttm < a.date.start + 864e5
                        : ((u = !0), !1))
                    );
                }
              }
              return !1;
            };
          let M = [];
          if (s) {
            const t = async () => {
              let t = [];
              if (!(await this._isMigrationDone())) {
                const s = {
                    from: [e, m.length, m],
                    to: [
                      e,
                      l.MessageConstants.MAX_MSG_ID.length,
                      l.MessageConstants.MAX_MSG_ID,
                    ],
                    excludeFrom: !g,
                    excludeTo: !g,
                  },
                  r = {
                    limit: i,
                    index: "userId_sendDttm_msgId",
                    direction: n.CursorDirection.NEXT,
                    predicate: (e) =>
                      p({
                        fromUid: e.fromUid,
                        message: e.message,
                        sendDttm:
                          "string" == typeof e.sendDttm
                            ? parseInt(e.sendDttm)
                            : e.sendDttm,
                      }),
                    aborted: h,
                  };
                t = await this.getAllInOldDB(s, r);
              }
              if (t.length < i) {
                const s = {
                    from: [e, c, o],
                    to: [
                      e,
                      parseInt(l.MessageConstants.MAX_SENDDTTM),
                      l.MessageConstants.MAX_MSG_ID,
                    ],
                    excludeFrom: !g,
                    excludeTo: !g,
                  },
                  r = {
                    limit: i - t.length,
                    index: "convId_sendDttm_cliMsgId",
                    direction: n.CursorDirection.NEXT,
                    predicate: (e) =>
                      p({
                        fromUid: e.fromUid,
                        message: e.content,
                        sendDttm: e.sendDttm,
                      }),
                    aborted: h,
                  };
                t.push(...(await this.getAll(s, r)));
              }
              return t;
            };
            M.push(t());
          }
          if (r) {
            const t = async () => {
              let t = [];
              const s = {
                  from: [e, 0, ""],
                  to: [e, c, o],
                  excludeFrom: !g,
                  excludeTo: !g,
                },
                r = {
                  limit: i,
                  index: "convId_sendDttm_cliMsgId",
                  direction: n.CursorDirection.PREV,
                  predicate: (e) =>
                    p({
                      fromUid: e.fromUid,
                      message: e.content,
                      sendDttm: e.sendDttm,
                    }),
                  aborted: h,
                };
              if (
                ((t = await this.getAll(s, r)),
                t.length < i && !(await this._isMigrationDone()))
              ) {
                const s = {
                    from: [e, 0, ""],
                    to: [e, m.length, m],
                    excludeFrom: !g,
                    excludeTo: !g,
                  },
                  r = {
                    limit: t ? i - t.length : i,
                    index: "userId_sendDttm_msgId",
                    direction: n.CursorDirection.PREV,
                    predicate: (e) =>
                      p({
                        fromUid: e.fromUid,
                        message: e.message,
                        sendDttm:
                          "string" == typeof e.sendDttm
                            ? parseInt(e.sendDttm)
                            : e.sendDttm,
                      }),
                    aborted: h,
                  };
                t.push(...(await this.getAllInOldDB(s, r)));
              }
              return t;
            };
            M.push(t());
          }
          try {
            const e = await Promise.all(M);
            if (2 === e.length) {
              let t = e[0].reverse();
              return t.pop(), (t = t.concat(e[1])), t;
            }
            return r ? e[0] : e[0].reverse();
          } catch (f) {
            return this.logger.zsymb(18, 11412, 30001, f), [];
          }
        }
      }
      const g = Object(a.define)("image-media-repository");
    },
    Ceyj: function (e, t, i) {
      "use strict";
      var s = i("VTBJ"),
        r = i("rePB"),
        a = i("fsN4");
      function n(e, t) {
        return e.reduce(
          (e, i, s, r) => (e[t(i, s, r) ? 0 : 1].push(i), e),
          [[], []]
        );
      }
      var o,
        d = i("D8f9"),
        l = i("1pet"),
        c = i("jDHv"),
        m = i("fqRP"),
        g = i("Mgpg"),
        u = i("MPLC");
      const h = l.MessageConstants.MAX_MSG_ID;
      Object(c.singleton)(m.a)(
        (o =
          Reflect.metadata(
            "design:type",
            Function
          )(
            (o =
              Reflect.metadata(
                "design:paramtypes",
                []
              )(
                (o = class {
                  constructor() {
                    Object(r.a)(this, "_logger", void 0),
                      Object(r.a)(this, "dispose", () => {}),
                      Object(r.a)(this, "_safePut", async (e) => {
                        const t = [],
                          i = [],
                          s = a.a.getInstance();
                        for (const a of e)
                          try {
                            await s.MsgInfo.TTLItem.insert(a, { replace: !0 }),
                              t.push(a);
                          } catch (r) {
                            i.push([a, r]);
                          }
                        return [t, i];
                      }),
                      Object(r.a)(this, "putMsgs", async (e) => {
                        let t = e.map((e) => f(e));
                        const [i, s] = n(t, (e) => e.ok),
                          r = i.map((e) => e.value);
                        let a = [],
                          o = [];
                        [o, a] = await this._safePut(r);
                        const d = s.map((e) => e.error);
                        return a.lastItem || d.length
                          ? {
                              ok: !1,
                              error: { invalidItems: d, errorItems: a },
                            }
                          : { ok: !0, value: o };
                      }),
                      Object(r.a)(this, "deletes", (e) =>
                        a.a.getInstance().MsgInfo.TTLItem.deleteMulti(e)
                      ),
                      Object(r.a)(
                        this,
                        "getExpireItemsBefore",
                        async (e, t) => {
                          const i = t
                              ? {
                                  from: [
                                    t.expireOn,
                                    t.toUid,
                                    t.msgId,
                                    t.ttlType,
                                  ],
                                  to: [e, h, h, Number.MAX_VALUE],
                                  excludeFrom: !1,
                                  excludeTo: !0,
                                }
                              : { to: [e, h, Number.MAX_VALUE], excludeTo: !1 },
                            s = { limit: 50, index: "expireOn_toUid_pk" },
                            r = a.a.getInstance();
                          return await r.MsgInfo.TTLItem.getAll(i, s);
                        }
                      ),
                      Object(r.a)(this, "getYoungestExpiredItem", async () => {
                        const e = {
                            to: [Number.MAX_VALUE, h, h, Number.MAX_VALUE],
                            excludeTo: !0,
                          },
                          t = a.a.getInstance();
                        return (
                          await t.MsgInfo.TTLItem.getAll(e, {
                            limit: 1,
                            index: "expireOn_toUid_pk",
                          })
                        )[0];
                      }),
                      Object(r.a)(
                        this,
                        "getMappedMsgsByConvIdFromTTLItems",
                        async (e) => {
                          const t = u.b.messageCache;
                          let i;
                          return (
                            t &&
                              (i = await t.getMappedMessagesByConvIdAsync(e)),
                            i
                          );
                        }
                      ),
                      (this._logger = c.ModuleContainer.resolve(
                        g.ZLoggerFactory
                      ).createZLogger("utils", ["ttl", "destructor", "ttl"]));
                  }
                })
              ) || o)
          ) || o)
      );
      const p = (e) => ("number" == typeof e ? String(e) : e),
        M = [d.a.Message, d.a.Quote],
        f = (e = {}) => {
          const t = Object(s.a)({}, e);
          return (
            (t.cliMsgId = p(t.cliMsgId)),
            t.cliMsgId
              ? ((t.fromUid = p(t.fromUid)),
                t.fromUid
                  ? ((t.toUid = p(t.toUid)),
                    t.toUid
                      ? ((t.msgId = p(t.msgId)),
                        (i = t.ttlType),
                        M.includes(i)
                          ? ((t.expireOn = +t.expireOn),
                            "number" != typeof t.expireOn
                              ? { ok: !1, error: e }
                              : { ok: !0, value: t })
                          : { ok: !1, error: e })
                      : { ok: !1, error: e })
                  : { ok: !1, error: e })
              : { ok: !1, error: e }
          );
          var i;
        };
    },
    ClHk: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return l;
      });
      var s,
        r = i("VTBJ"),
        a = i("rePB"),
        n = i("jDHv"),
        o = i("hI9i"),
        d = i("rCQs");
      const l = Object(n.define)("shared-tasks-monitor");
      Object(d.b)(l)(
        (s = class {
          constructor() {
            Object(a.a)(this, "tasks", new Map()),
              Object(a.a)(this, "taskIds", []),
              Object(a.a)(this, "name", "shared-tasks-monitor"),
              Object(a.a)(this, "key", "id");
          }
          insertTask(e, t) {
            this.taskIds.length > 20 && (this.taskIds = this.taskIds.slice(1)),
              (this.taskIds = [...this.taskIds, e]),
              this.tasks.set(e, {
                id: e,
                type: t,
                startTime: Date.now(),
                endTime: 0,
                progress: 0,
                status: "running",
              }),
              Object(o.h)(this.name, "all");
          }
          updateTaskProgress(e, t) {
            const i = this.tasks.get(e);
            i &&
              (this.tasks.set(
                e,
                Object(r.a)(Object(r.a)({}, i), {}, { progress: t })
              ),
              Object(o.g)(this.name, e));
          }
          updateTaskStatus(e, t) {
            const i = this.tasks.get(e);
            i &&
              (this.tasks.set(
                e,
                Object(r.a)(Object(r.a)({}, i), {}, { status: t })
              ),
              Object(o.g)(this.name, e));
          }
          init() {}
          getItem(e, t) {
            return this.tasks.get(e.key);
          }
          getList() {
            return this.taskIds;
          }
          onGetItemFailure() {}
          onGetListFailure() {}
        })
      );
    },
    Hbak: function (e, t, i) {
      "use strict";
      var s,
        r = i("rePB"),
        a = i("NLsH"),
        n = i("jDHv"),
        o = i("8/YW"),
        d = i("dOPt"),
        l = i("ClHk"),
        c = i("Mgpg");
      Object(o.h)()(
        (s =
          Object(n.singleton)(d.a)(
            (s =
              Object(n.injectable)()(
                (s =
                  (function (e, t) {
                    return Object(n.inject)(c.ZLoggerFactory)(e, void 0, 0);
                  })(
                    (s =
                      Reflect.metadata(
                        "design:type",
                        Function
                      )(
                        (s =
                          Reflect.metadata("design:paramtypes", [
                            void 0 === c.ZLoggerFactory
                              ? Object
                              : c.ZLoggerFactory,
                          ])(
                            (s = class {
                              constructor(e) {
                                Object(r.a)(this, "handlers", new Map()),
                                  Object(r.a)(this, "runningMap", new Map()),
                                  Object(r.a)(this, "logger", void 0),
                                  Object(r.a)(this, "monitor", void 0),
                                  (this.logger = e.createZLogger("core", [
                                    "shared-worker-runner",
                                  ])),
                                  (this.monitor =
                                    n.ModuleContainer.resolveIfExist(l.a));
                              }
                              onStart() {
                                this.logger.zsymb(3, 11095, 3e4, "start"),
                                  a.ipcRenderer.send("shared-worker-start"),
                                  a.ipcRenderer.on(
                                    "shared-worker-run",
                                    async (e, t) => {
                                      var i;
                                      const s = this.handlers.get(t.type);
                                      if (!s) return;
                                      null === (i = this.monitor) ||
                                        void 0 === i ||
                                        i.insertTask(t.id, t.type),
                                        this.logger.zsymb(
                                          3,
                                          11095,
                                          30001,
                                          "{} id: {}",
                                          t.type,
                                          t.id
                                        );
                                      const r = new AbortController(),
                                        n = t.id,
                                        o = {
                                          abort: r,
                                          updateParams: () => {},
                                        };
                                      this.runningMap.set(n, o);
                                      try {
                                        const e = (e, i) => {
                                          var s;
                                          a.ipcRenderer.send(
                                            "shared-worker-progress",
                                            {
                                              id: n,
                                              progress: e,
                                              checkpoint: i,
                                            }
                                          ),
                                            null === (s = this.monitor) ||
                                              void 0 === s ||
                                              s.updateTaskProgress(t.id, e);
                                        };
                                        await s
                                          .execute({
                                            abort: r.signal,
                                            params: t.params,
                                            checkpoint: t.checkpoint,
                                            onParamsChange: (e) => {
                                              o.updateParams = e;
                                            },
                                            report: e,
                                          })
                                          .then((e) => {
                                            var i;
                                            r.signal.aborted ||
                                              (null === (i = this.monitor) ||
                                                void 0 === i ||
                                                i.updateTaskStatus(
                                                  t.id,
                                                  "finished"
                                                ),
                                              a.ipcRenderer.send(
                                                "shared-worker-resp",
                                                { id: n, result: e }
                                              ),
                                              this.logger.zsymb(
                                                3,
                                                11095,
                                                30002,
                                                "{} id: {} finished",
                                                t.type,
                                                t.id
                                              ));
                                          })
                                          .catch((e) => {
                                            var i;
                                            if (r.signal.aborted) return;
                                            null === (i = this.monitor) ||
                                              void 0 === i ||
                                              i.updateTaskStatus(t.id, "error");
                                            const s =
                                              "number" == typeof e.error
                                                ? e.error
                                                : -999;
                                            a.ipcRenderer.send(
                                              "shared-worker-resp",
                                              {
                                                id: n,
                                                error: {
                                                  message: e.message,
                                                  error_code: s,
                                                },
                                              }
                                            ),
                                              this.logger.zsymb(
                                                0,
                                                11095,
                                                30003,
                                                () => [
                                                  `task ${t.type} id: ${t.id} failed`,
                                                  { error: e },
                                                ]
                                              );
                                          });
                                      } catch (l) {
                                        var d;
                                        null === (d = this.monitor) ||
                                          void 0 === d ||
                                          d.updateTaskStatus(t.id, "error"),
                                          a.ipcRenderer.send(
                                            "shared-worker-resp",
                                            {
                                              id: n,
                                              error: { message: l.message },
                                            }
                                          ),
                                          this.logger.zsymb(
                                            0,
                                            11095,
                                            30004,
                                            () => [
                                              `task ${t.type} id: ${t.id} failed`,
                                              { error: l },
                                            ]
                                          );
                                      }
                                      this.runningMap.delete(n);
                                    }
                                  ),
                                  a.ipcRenderer.on(
                                    "shared-worker-abort",
                                    (e, t) => {
                                      const i = this.runningMap.get(t.id);
                                      var s;
                                      i &&
                                        (null === (s = this.monitor) ||
                                          void 0 === s ||
                                          s.updateTaskStatus(t.id, "error"),
                                        i.abort.abort());
                                      this.logger.zsymb(
                                        3,
                                        11095,
                                        30005,
                                        "abort task {} id: {}",
                                        t.type,
                                        t.id
                                      );
                                    }
                                  ),
                                  a.ipcRenderer.on(
                                    "shared-worker-update-params",
                                    (e, t) => {
                                      const i = this.runningMap.get(t.id);
                                      if (i)
                                        return (
                                          i.updateParams(t.params),
                                          void this.logger.zsymb(
                                            3,
                                            11095,
                                            30006,
                                            "{} id: {} - updated params",
                                            t.type,
                                            t.id
                                          )
                                        );
                                      this.logger.zsymb(
                                        18,
                                        11095,
                                        30007,
                                        `${t.type} id: ${t.id} - update params failed. task not found`
                                      );
                                    }
                                  ),
                                  "shared-worker" === __ZaBUNDLENAME__ &&
                                    this.startCheckAlive();
                              }
                              registerHandler(e, t) {
                                this.logger.zsymb(
                                  3,
                                  11095,
                                  30008,
                                  "register handler: {}",
                                  e
                                ),
                                  this.handlers.set(e, t),
                                  a.ipcRenderer.send("shared-worker-handle", e);
                              }
                              startCheckAlive() {
                                this.logger.zsymb(
                                  3,
                                  11095,
                                  30009,
                                  "start check alive"
                                ),
                                  setInterval(() => {
                                    this.logger.zsymb(
                                      3,
                                      11095,
                                      30010,
                                      "sending ping"
                                    ),
                                      a.ipcRenderer.send("shared-worker-ping");
                                  }, 6e4);
                              }
                            })
                          ) || s)
                      ) || s)
                  ) || s)
              ) || s)
          ) || s)
      );
    },
    K4Ns: function (e, t, i) {
      "use strict";
      let s, r, a;
      i.d(t, "c", function () {
        return s;
      }),
        i.d(t, "b", function () {
          return r;
        }),
        i.d(t, "a", function () {
          return a;
        }),
        (function (e) {
          (e[(e.OLD = 0)] = "OLD"),
            (e[(e.NEW = 1)] = "NEW"),
            (e[(e.UNKNOWN = 2)] = "UNKNOWN");
        })(s || (s = {})),
        (function (e) {
          (e[(e.OLD = 0)] = "OLD"),
            (e[(e.NEW = 1)] = "NEW"),
            (e[(e.UNKNOWN = 2)] = "UNKNOWN");
        })(r || (r = {})),
        (function (e) {
          (e[(e.OLD = 0)] = "OLD"),
            (e[(e.NEW = 1)] = "NEW"),
            (e[(e.UNKNOWN = 2)] = "UNKNOWN");
        })(a || (a = {}));
    },
    KPNQ: function (e, t, i) {
      "use strict";
      i.d(t, "b", function () {
        return r;
      });
      var s = i("jDHv");
      const r = Object(s.define)("media-primary-key-convertor");
    },
    KszJ: function (e, t, i) {
      "use strict";
      var s,
        r = i("rePB"),
        a = i("NLsH"),
        n = i("jDHv"),
        o = i("8/YW"),
        d = i("Xy/4"),
        l = i("Mgpg");
      Object(o.h)()(
        (s =
          Object(o.g)()(
            (s =
              Object(n.injectable)()(
                (s =
                  Object(n.singleton)(d.a)(
                    (s =
                      (function (e, t) {
                        return Object(n.inject)(l.ZLoggerFactory)(e, void 0, 0);
                      })(
                        (s =
                          Reflect.metadata(
                            "design:type",
                            Function
                          )(
                            (s =
                              Reflect.metadata("design:paramtypes", [
                                void 0 === l.ZLoggerFactory
                                  ? Object
                                  : l.ZLoggerFactory,
                              ])(
                                (s = class {
                                  constructor(e) {
                                    Object(r.a)(this, "idCounter", 0),
                                      Object(r.a)(
                                        this,
                                        "runningTasks",
                                        new Map()
                                      ),
                                      Object(r.a)(this, "logger", void 0),
                                      (this.logger = e.createZLogger(
                                        "shared-worker",
                                        ["client"]
                                      ));
                                  }
                                  onStart() {
                                    a.ipcRenderer.on(
                                      "shared-worker-progress",
                                      (e, t) => {
                                        const i = this.runningTasks.get(t.id);
                                        i
                                          ? i.notifyProgressChange(
                                              t.progress,
                                              t.checkpoint
                                            )
                                          : a.ipcRenderer.send(
                                              "shared-worker-abort",
                                              { id: t.id }
                                            );
                                      }
                                    ),
                                      a.ipcRenderer.on(
                                        "shared-worker-resp",
                                        (e, t) => {
                                          const i = this.runningTasks.get(t.id);
                                          i
                                            ? (this.logger.zsymb(
                                                3,
                                                8233,
                                                30001,
                                                "resolve:{} id: {} success:{}",
                                                i.type,
                                                t.id,
                                                !t.error
                                              ),
                                              t.error
                                                ? i.notifyError(t.error)
                                                : i.notifyResult(
                                                    t.result,
                                                    t.checkpoint
                                                  ),
                                              this.runningTasks.delete(t.id))
                                            : this.logger.zsymb(
                                                18,
                                                8233,
                                                3e4,
                                                () => [
                                                  "not found resolver for task",
                                                  { id: t.id },
                                                ]
                                              );
                                        }
                                      );
                                  }
                                  onDispose() {
                                    a.ipcRenderer.send("shared-worker-dispose");
                                  }
                                  run(e) {
                                    const t = (this.idCounter++).toString();
                                    (e.id = t),
                                      this.runningTasks.set(t, e),
                                      this.logger.zsymb(
                                        3,
                                        8233,
                                        30002,
                                        "run:{} id: {}",
                                        e.type,
                                        t
                                      ),
                                      a.ipcRenderer.send(
                                        "shared-worker-run",
                                        e.toDescriptor()
                                      );
                                  }
                                  abort(e) {
                                    this.runningTasks.get(e) &&
                                      (this.runningTasks.delete(e),
                                      a.ipcRenderer.send(
                                        "shared-worker-abort",
                                        { id: e }
                                      ));
                                  }
                                  notifyChangeParams(e, t) {
                                    const i = this.runningTasks.get(e);
                                    if (!i)
                                      throw new Error(
                                        `not found task with id: ${e}`
                                      );
                                    const s = {
                                      id: e,
                                      type: i.type,
                                      params: t,
                                    };
                                    a.ipcRenderer.send(
                                      "shared-worker-update-params",
                                      s
                                    );
                                  }
                                })
                              ) || s)
                          ) || s)
                      ) || s)
                  ) || s)
              ) || s)
          ) || s)
      );
    },
    Ljqs: function (e, t, i) {
      "use strict";
      var s = i("jDHv"),
        r = i("Mgpg");
      let a = null;
      function n() {
        if (null === a) {
          const e = s.ModuleContainer.resolve(r.ZLoggerFactory);
          a = e.createZLogger("common", ["PROCESS UNLOAD OVERRIDE"]);
        }
        return a;
      }
      !(function () {
        const e = n();
        try {
          e.zsymb(0, 8220, 3e4, "start unload override"),
            process.removeAllListeners("uncaughtException"),
            process.on("uncaughtException", function (t) {
              e.zsymb(18, 8220, 30001, "node: uncaughtException"),
                e.zsymb(18, 8220, 30002, null == t ? void 0 : t.name),
                e.zsymb(18, 8220, 30003, t.message),
                t.stack && e.zsymb(18, 8220, 30004, t.stack);
            }),
            e.zsymb(0, 8220, 30005, "unload override success");
        } catch (t) {
          e.zsymb(21, 8220, 30006, "unload override fail {}", t);
        }
      })();
    },
    "Q/Ir": function (e, t, i) {
      "use strict";
      var s = i("jDHv"),
        r = i("8/YW"),
        a = i("Mgpg"),
        n = i("+eUS"),
        o = i("wH4e"),
        d = i("YrRS");
      const l =
        "render" !== __ZaBUNDLENAME__ &&
        "WEB" !== __ZaBUNDLENAME__ &&
        "shared-worker" !== __ZaBUNDLENAME__ &&
        "main" !== __ZaBUNDLENAME__;
      setTimeout(async function () {
        if (l) return;
        const e = s.ModuleContainer.resolve(a.ZLoggerFactory).createZLogger(
          "bootstrap",
          ["shared"]
        );
        e.zsymb(3, 8223, 3e4, "running application bootstrap");
        try {
          const t = s.ModuleContainer.resolve(r.a);
          await t.start();
          let i = (() => {
            switch (__ZaBUNDLENAME__) {
              case "WEB":
                return o.RunMode.Browser;
              case "render":
                return o.RunMode.Host;
              case "shared-worker":
                return o.RunMode.Client;
              case "main":
                return o.RunMode.Background;
              default:
                return o.RunMode.Unknown;
            }
          })();
          Object(n.a)(i),
            i === o.RunMode.Browser && Object(d.a)(),
            "shared-worker" === __ZaBUNDLENAME__ && (await t.init()),
            e.zsymb(3, 8223, 30001, "application bootstrap success");
        } catch (t) {
          e.zsymb(0, 8223, 30002, () => [
            "application bootstrap fail",
            { reason: t },
          ]);
        }
      }, 0);
    },
    W13p: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return n;
      }),
        i.d(t, "b", function () {
          return o;
        });
      var s = i("4ePI"),
        r = i("jDHv"),
        a = i("wH4e");
      class n extends s.a {
        constructor(e, t, i, s, r, a) {
          super(e, t, i, s, r, a);
        }
        async getLastestAddedFiles(e, t) {
          if (!e || "number" != typeof t)
            throw Error(
              `[getLastestAddedFiles]: ${JSON.stringify(
                e
              )} or ${t} isn't valid!`
            );
          const i = await this.getLastestAddedFilesInNewDB(e, t);
          return (
            i.length < t &&
              !(await this._isMigrationDone()) &&
              i.push(
                ...(await this.getLastestAddedFilesInOldDB(
                  { sendDttm: e.sendDttm },
                  t - i.length
                ))
              ),
            i
          );
        }
        async getLastestAddedFilesInNewDB(e, t) {
          const { convId: i, sendDttm: s, cliMsgId: r } = e;
          return this.dbTable.getAll(
            { from: ["", 0, 0], to: [i, s, r], excludeFrom: !0, excludeTo: !0 },
            {
              index: "convId_sendDttm_cliMsgId",
              limit: t,
              direction: a.CursorDirection.PREV,
            }
          );
        }
        async getLastestAddedFilesInOldDB(e, t) {
          if (await this._isMigrationDone()) return [];
          const i = await this.getOldDBTable().getAll(
            { from: 0, to: e.sendDttm, excludeFrom: !0, excludeTo: !0 },
            { index: "sendDttm", limit: t, direction: a.CursorDirection.PREV }
          );
          return i.length > 0
            ? i.map((e) => this.getMediaMapper().toDomainFromOldDomain(e))
            : [];
        }
      }
      const o = Object(r.define)("file-media-repository");
    },
    "Xy/4": function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return r;
      });
      var s = i("jDHv");
      const r = Object(s.define)("shared-worker-client");
    },
    dOPt: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return r;
      });
      var s = i("jDHv");
      const r = Object(s.define)("shared-worker-runner");
    },
    jbAT: function (e, t, i) {
      "use strict";
      var s = i("mvkY");
      i.d(t, "a", function () {
        return s.IUtilsMediaAppService;
      }),
        i.d(t, "b", function () {
          return s.c;
        });
    },
    mvkY: function (e, t, i) {
      "use strict";
      i.d(t, "b", function () {
        return r;
      }),
        i.d(t, "c", function () {
          return a;
        });
      var s = i("jDHv");
      const r = "utils-media-app-service",
        a = Object(s.define)(r);
    },
    nhJq: function (e, t, i) {
      "use strict";
      i.d(t, "b", function () {
        return o;
      }),
        i.d(t, "a", function () {
          return d;
        }),
        i.d(t, "c", function () {
          return c;
        });
      var s = i("5wAm"),
        r = i.n(s),
        a = i("mw/K"),
        n = i.n(a);
      async function o(e) {
        if (await l(e))
          return new Promise((t, i) => {
            r()(e, (e) => {
              e ? i(e) : t();
            });
          });
      }
      async function d(e) {
        return (
          e.endsWith("/") || (e += "/"),
          (await l(e))
            ? e
            : new Promise((t, i) => {
                n.a.mkdir(e, (s) => {
                  s ? i(s) : t(e);
                });
              })
        );
      }
      function l(e) {
        return new Promise((t) => {
          n.a.stat(e, (e) => {
            t(!e);
          });
        });
      }
      function c(e) {
        return new Promise((t, i) => {
          n.a.readdir(e, (e, s) => {
            e ? i(e) : t(s);
          });
        });
      }
    },
    qUG6: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return r;
      });
      var s = i("3jnX");
      class r extends s.b {
        constructor(e) {
          super({ type: "UPDATE_CONVERSATION_PREVIEW", params: e });
        }
      }
    },
    rBRb: function (e, t, i) {
      "use strict";
      var s,
        r = i("jDHv"),
        a = i("fsN4"),
        n = i("KPNQ");
      let o =
        Object(r.injectable)()(
          (s = class {
            async toMediaPKFromMessagePK(e) {
              if (!e) return "";
              const t = await a.a.getInstance().Core.Message.get(e);
              return t && (t.cliMsgId || t.fromUid || t.toUid)
                ? `${t.cliMsgId}_${t.fromUid}_${t.toUid}`
                : "";
            }
            async toMessagePKFromMediaPK(e) {
              const [t, i, s] = this._getThreePartsFromMediaPK(e);
              if (!t || !i || !s) return "";
              const r = await this._getMessagesByCliMsgIdRange(t, s);
              let a = "";
              return (
                r.forEach((e) => {
                  e.fromUid === i && e.toUid === s && (a = e.msgId);
                }),
                a
              );
            }
            _getMessagesByCliMsgIdRange(e, t) {
              const i = { from: e, to: e, excludeFrom: !1, excludeTo: !1 },
                s = { index: "cliMsgIdIndex", partition: t };
              return a.a.getInstance().Core.Message.getAll(i, s);
            }
            _getThreePartsFromMediaPK(e) {
              if ("string" != typeof e || !e) return [];
              const [t, i, s] = e.split("_");
              return [t, i, s];
            }
          })
        ) || s;
      r.ModuleContainer.register(n.b, o);
      const d = Object(r.define)("utils-media-mapper");
      var l,
        c = i("RgQf"),
        m = i("MLPV"),
        g = i("J/8C");
      let u =
        Object(r.injectable)()(
          (l = class {
            toUtilsMediaDTOFromDomain(e) {
              return {
                id: e.id,
                convId: e.convId,
                mediaType: e.mediaType,
                senderIds: e.senderIds,
                fileTypes: e.fileTypes,
              };
            }
          })
        ) || l;
      r.ModuleContainer.register(d, u);
      var h,
        p = i("VTBJ"),
        M = i("v6qY"),
        f = i("IZCB");
      function b(e) {
        try {
          const t = JSON.parse(e),
            { fileExt: i, fType: s } = t;
          return "zip" === i && 2 === s;
        } catch (t) {
          return !1;
        }
      }
      function y(e) {
        try {
          if (b(e)) return "folder";
          const t = JSON.parse(e);
          if (!t) return "";
          const { fileExt: i } = t;
          return i.toLowerCase();
        } catch (t) {
          return "";
        }
      }
      function I(e) {
        try {
          const t = JSON.parse(e);
          if (!t) return { width: null, height: null };
          const { width: i, height: s } = t;
          return { width: i, height: s };
        } catch (t) {
          return { width: null, height: null };
        }
      }
      let _ =
        Object(r.injectable)()(
          (h = class {
            toDomainFromOldDomain(e, t = `${M.c.UNKNOWN}${M.d.FROM_OLD_DB}`) {
              if (!e || !e.message)
                throw Error("This oldImageEntity isn't valid!");
              if (!(e.cliMsgId && e.fromUid && e.userId))
                throw Error(
                  "This oldImageEntity doesn't have key_from_to valid!"
                );
              const i =
                "string" == typeof e.sendDttm
                  ? parseInt(e.sendDttm)
                  : e.sendDttm;
              return {
                mediaId: `${e.cliMsgId}_${e.fromUid}_${e.userId}`,
                convId: e.userId,
                cliMsgId:
                  "number" == typeof e.cliMsgId
                    ? e.cliMsgId.toString()
                    : e.cliMsgId,
                fromUid: e.fromUid,
                content: {
                  title: e.message.title || null,
                  thumbUrl: e.message.thumbUrl || "",
                  hdUrl: e.message.hdUrl || "",
                  normalUrl: e.message.normalUrl || "",
                  oriUrl: e.message.oriUrl,
                  params: e.message.params,
                  duration: e.message.duration || null,
                },
                type: "number" == typeof e.subType ? e.subType : -1,
                src: t,
                sendDttm: i,
                ttl: e.ttl,
                localPath: e.localPath || "",
                previewThumb: e.previewThumb || "",
                modifiedTime: e.updateTime || i,
                metadata: Object(p.a)(
                  Object(p.a)({}, I(e.message.params)),
                  {},
                  { vOrient: f.a.None }
                ),
              };
            }
            toDomainFromDTO(e) {
              if (!e || !e.message) throw Error("This imageDTO isn't valid!");
              if (!(e.cliMsgId && e.fromUid && e.userId))
                throw Error("This imageDTO doesn't have key_from_to valid!");
              const t =
                "string" == typeof e.sendDttm
                  ? parseInt(e.sendDttm)
                  : e.sendDttm;
              return {
                mediaId: e.mediaId,
                convId: e.userId,
                cliMsgId:
                  "number" == typeof e.cliMsgId
                    ? e.cliMsgId.toString()
                    : e.cliMsgId,
                fromUid: e.fromUid,
                content: {
                  title: e.message.title || null,
                  thumbUrl: e.message.thumbUrl || "",
                  hdUrl: e.message.hdUrl || "",
                  normalUrl: e.message.normalUrl || "",
                  oriUrl: e.message.oriUrl,
                  params: e.message.params,
                  duration: e.message.duration || null,
                },
                type: "number" == typeof e.subType ? e.subType : -1,
                sendDttm: t,
                src: e.src,
                ttl: "number" == typeof e.ttl ? e.ttl : 0,
                localPath: e.localPath || "",
                previewThumb: e.previewThumb || "",
                modifiedTime:
                  "number" == typeof e.updateTime ? e.updateTime : t,
                metadata: Object(p.a)(
                  Object(p.a)({}, I(e.message.params)),
                  {},
                  { vOrient: e.vOrient || f.a.None }
                ),
              };
            }
            toDomainFromTMessage(e, t, i = `${M.c.UNKNOWN}${M.d.FROM_MSG}`) {
              if (!e || !e.message)
                throw Error("This messageEntity isn't valid!");
              if (!(e.cliMsgId && e.fromUid && e.toUid))
                throw Error(
                  "This messageEntity doesn't have key_from_to valid!"
                );
              const s =
                "string" == typeof e.sendDttm
                  ? parseInt(e.sendDttm)
                  : e.sendDttm;
              return {
                mediaId: `${e.cliMsgId}_${e.fromUid}_${e.toUid}`,
                convId: e.toUid,
                cliMsgId:
                  "number" == typeof e.cliMsgId
                    ? e.cliMsgId.toString()
                    : e.cliMsgId,
                fromUid: e.fromUid,
                content: {
                  title: e.message.title || null,
                  thumbUrl: e.message.thumbUrl || "",
                  hdUrl: e.message.hdUrl || "",
                  normalUrl: e.message.normalUrl || "",
                  oriUrl: e.message.oriUrl,
                  params: e.message.params,
                  duration: e.message.duration || null,
                },
                src: i,
                type: t,
                sendDttm: s,
                ttl: e.ttl || 0,
                localPath: e.localPath || "",
                previewThumb: e.previewThumb || "",
                modifiedTime: s,
                metadata: Object(p.a)(
                  Object(p.a)({}, I(e.message.params)),
                  {},
                  { vOrient: f.a.None }
                ),
              };
            }
            async toDTO(e) {
              if (!e || !e.mediaId)
                throw Error("This imageEntity isn't valid!");
              const t = e.msgId
                ? e.msgId
                : await r.ModuleContainer.resolve(n.b).toMessagePKFromMediaPK(
                    e.mediaId
                  );
              return {
                mediaId: e.mediaId,
                msgId: t,
                cliMsgId: e.cliMsgId,
                fromUid: e.fromUid,
                userId: e.convId,
                message: {
                  title: e.content.title,
                  description: "",
                  childnumber: 0,
                  action: "",
                  params: e.content.params,
                  type: "",
                  thumbUrl: e.content.thumbUrl,
                  oriUrl: e.content.oriUrl,
                  hdUrl: e.content.hdUrl,
                  normalUrl: e.content.normalUrl,
                  duration: e.content.duration || null,
                  thumb: "",
                  href: "",
                },
                sendDttm: e.sendDttm,
                src: e.src,
                ttl: e.ttl,
                type: "image",
                subType: e.type,
                id: 0,
                localPath: e.localPath,
                previewThumb: e.previewThumb,
                updateTime: e.modifiedTime,
                width: e.metadata.width,
                height: e.metadata.height,
                vOrient: e.metadata.vOrient,
              };
            }
            toMediaToCreateOrUpdateUtilsMediaDTOFromDomain(e) {
              return {
                convId: e.convId,
                fromUid: e.fromUid,
                mediaType: "image",
                content: { params: e.content.params },
              };
            }
            toOldEAttsFromNewEAtts(e) {
              if (!e || "object" != typeof e)
                throw Error("newEAtts is undefined or not valid!");
              const t = {};
              var i, s;
              (e.hasOwnProperty("message") &&
                "object" == typeof e.content &&
                (t.message = {
                  title: e.content.title,
                  description: "",
                  childnumber: 0,
                  action: "",
                  params: e.content.params,
                  type: "",
                  thumbUrl: e.content.thumbUrl,
                  oriUrl: e.content.oriUrl,
                  hdUrl: e.content.hdUrl,
                  normalUrl: e.content.normalUrl,
                  duration: e.content.duration || null,
                  thumb: "",
                  href: "",
                }),
              e.hasOwnProperty("subType") && (t.subType = e.type),
              e.hasOwnProperty("sendDttm") &&
                (t.sendDttm =
                  "string" == typeof e.sendDttm ? +e.sendDttm : e.sendDttm),
              e.hasOwnProperty("ttl") && (t.ttl = e.ttl || 0),
              e.hasOwnProperty("localPath") &&
                (t.localPath = e.localPath || ""),
              e.hasOwnProperty("previewThumb") &&
                (t.previewThumb = e.previewThumb || ""),
              e.hasOwnProperty("updateTime") &&
                (t.updateTime = e.modifiedTime || Date.now()),
              e.hasOwnProperty("metadata")) &&
                ((t.width =
                  null === (i = e.metadata) || void 0 === i ? void 0 : i.width),
                (t.height =
                  null === (s = e.metadata) || void 0 === s
                    ? void 0
                    : s.height));
              return t;
            }
            toNewEAttsFromDTOAtts(e) {
              if (!e || "object" != typeof e)
                throw Error("dtoAtts is undefined or not valid!");
              const t = {};
              return (
                e.hasOwnProperty("message") &&
                  "object" == typeof e.message &&
                  (t.content = {
                    title: e.message.title || null,
                    thumbUrl: e.message.thumbUrl || "",
                    hdUrl: e.message.hdUrl || "",
                    normalUrl: e.message.normalUrl || "",
                    oriUrl: e.message.oriUrl,
                    params: e.message.params,
                    duration: e.message.duration || null,
                  }),
                e.hasOwnProperty("subType") && (t.type = e.subType),
                e.hasOwnProperty("sendDttm") &&
                  (t.sendDttm =
                    "string" == typeof e.sendDttm ? +e.sendDttm : e.sendDttm),
                e.hasOwnProperty("ttl") && (t.ttl = e.ttl || 0),
                e.hasOwnProperty("localPath") &&
                  (t.localPath = e.localPath || ""),
                e.hasOwnProperty("previewThumb") &&
                  (t.previewThumb = e.previewThumb || ""),
                e.hasOwnProperty("updateTime") &&
                  (t.modifiedTime = e.updateTime || Date.now()),
                e.hasOwnProperty("width") &&
                  e.hasOwnProperty("height") &&
                  e.hasOwnProperty("vOrient") &&
                  (t.metadata = {
                    width: e.width,
                    height: e.height,
                    vOrient: e.vOrient || 0,
                  }),
                t
              );
            }
          })
        ) || h;
      var O;
      r.ModuleContainer.register(m.b, _);
      let D =
        Object(r.injectable)()(
          (O = class {
            toDomainFromOldDomain(e, t = `${M.c.UNKNOWN}${M.d.FROM_OLD_DB}`) {
              if (!e || !e.message)
                throw Error("This oldFileEntity isn't valid!");
              if (!(e.cliMsgId && e.fromUid && e.userId))
                throw Error(
                  "This oldFileEntity doesn't have key_from_to valid!"
                );
              const i =
                "string" == typeof e.sendDttm
                  ? parseInt(e.sendDttm)
                  : e.sendDttm;
              return {
                mediaId: `${e.cliMsgId}_${e.fromUid}_${e.userId}`,
                convId: e.userId,
                cliMsgId:
                  "number" == typeof e.cliMsgId
                    ? e.cliMsgId.toString()
                    : e.cliMsgId,
                fromUid: e.fromUid,
                content: {
                  title: e.message.title,
                  href: e.message.href,
                  params: e.message.params,
                  thumb: e.message.thumb || "",
                },
                type: b(e.message.params) ? M.a.FOLDER : M.a.FILE,
                src: t,
                extType: y(e.message.params),
                sendDttm: i,
                ttl: "number" == typeof e.ttl ? e.ttl : 0,
                modifiedTime: e.updateTime || i,
                localPath: e.localPath || "",
                folderPath: e.folderPath || "",
                thumbMetadata: e.dimension
                  ? {
                      width: e.dimension.width,
                      height: e.dimension.height,
                      type: e.dimension.type,
                      orientation: Object(p.a)({}, e.dimension.orientation),
                      bigRes: e.dimension.bigRes,
                    }
                  : null,
              };
            }
            toDomainFromDTO(e) {
              if (!e || !e.message) throw Error("This fileDTO isn't valid!");
              if (!(e.cliMsgId && e.fromUid && e.userId))
                throw Error("This fileDTO doesn't have key_from_to valid!");
              const t =
                "string" == typeof e.sendDttm
                  ? parseInt(e.sendDttm)
                  : e.sendDttm;
              return {
                mediaId: e.mediaId,
                convId: e.userId,
                cliMsgId:
                  "number" == typeof e.cliMsgId
                    ? e.cliMsgId.toString()
                    : e.cliMsgId,
                fromUid: e.fromUid,
                msgId: e.msgId,
                content: {
                  title: e.message.title,
                  href: e.message.href,
                  params: e.message.params,
                  thumb: e.message.thumb || "",
                },
                type: e.fileType || b(e.message.params) ? M.a.FOLDER : M.a.FILE,
                src: e.src,
                extType: e.extType || y(e.message.params),
                sendDttm: t,
                ttl: "number" == typeof e.ttl ? e.ttl : 0,
                modifiedTime: e.updateTime || t,
                localPath: e.localPath || "",
                folderPath: e.folderPath || "",
                thumbMetadata: e.dimension
                  ? {
                      width: e.dimension.width,
                      height: e.dimension.height,
                      type: e.dimension.type,
                      orientation: Object(p.a)({}, e.dimension.orientation),
                      bigRes: e.dimension.bigRes,
                    }
                  : null,
              };
            }
            async toDTO(e) {
              if (!e || !e.mediaId || !e.content)
                throw Error("This fileEntity isn't valid!");
              const t = e.msgId
                ? e.msgId
                : await r.ModuleContainer.resolve(n.b).toMessagePKFromMediaPK(
                    e.mediaId
                  );
              return {
                mediaId: e.mediaId,
                msgId: t,
                cliMsgId: e.cliMsgId,
                fromUid: e.fromUid,
                userId: e.convId,
                message: {
                  title: e.content.title,
                  href: e.content.href,
                  params: e.content.params,
                  thumb: e.content.thumb,
                  childnumber: 0,
                  action: "",
                  description: "",
                  type: "",
                  thumbUrl: "",
                  oriUrl: "",
                },
                sendDttm: e.sendDttm,
                ttl: e.ttl,
                src: e.src,
                type: "file",
                fileType: e.type,
                extType: e.extType,
                id: 0,
                updateTime: e.modifiedTime,
                localPath: e.localPath || "",
                folderPath: e.folderPath || "",
                downloadError: !1,
                dimension:
                  "object" == typeof e.thumbMetadata ? e.thumbMetadata : null,
                previewThumb: "",
              };
            }
            toDomainFromMessage(e, t = `${M.c.UNKNOWN}${M.d.FROM_MSG}`) {
              if (!e || !e.msgId || !e.message)
                throw Error("This messageEntity isn't valid!");
              if (!(e.cliMsgId && e.fromUid && e.toUid))
                throw Error(
                  "This messageEntity doesn't have key_from_to valid!"
                );
              const i =
                "string" == typeof e.sendDttm
                  ? parseInt(e.sendDttm)
                  : e.sendDttm;
              return {
                mediaId: `${e.cliMsgId}_${e.fromUid}_${e.toUid}`,
                convId: e.toUid,
                cliMsgId:
                  "number" == typeof e.cliMsgId
                    ? e.cliMsgId.toString()
                    : e.cliMsgId,
                fromUid: e.fromUid,
                content: {
                  title: e.message.title,
                  href: e.message.href,
                  params: e.message.params,
                  thumb: e.message.thumb || "",
                },
                type: b(e.message.params) ? M.a.FOLDER : M.a.FILE,
                src: t,
                extType: y(e.message.params),
                sendDttm: i,
                ttl: e.ttl || 0,
                modifiedTime: i,
                localPath: e.localPath || "",
                folderPath: e.folderPath || "",
                thumbMetadata: null,
              };
            }
            toMediaToCreateOrUpdateUtilsMediaDTOFromDomain(e) {
              return {
                convId: e.convId,
                fromUid: e.fromUid,
                mediaType: "file",
                content: { params: e.content.params },
              };
            }
            toOldEAttsFromNewEAtts(e) {
              if (!e || "object" != typeof e)
                throw Error("newEAtts isn't valid!");
              const t = {};
              return (
                e.hasOwnProperty("message") &&
                  "object" == typeof e.content &&
                  (t.message = {
                    title: e.content.title,
                    href: e.content.href,
                    params: e.content.params,
                    thumb: e.content.thumb,
                    childnumber: 0,
                    action: "",
                    description: "",
                    type: "",
                    thumbUrl: "",
                    oriUrl: "",
                  }),
                e.hasOwnProperty("sendDttm") && (t.sendDttm = e.sendDttm),
                e.hasOwnProperty("ttl") && (t.ttl = e.ttl || 0),
                e.hasOwnProperty("localPath") &&
                  (t.localPath = e.localPath || ""),
                e.hasOwnProperty("folderPath") &&
                  (t.folderPath = e.folderPath || ""),
                e.hasOwnProperty("updateTime") &&
                  (t.updateTime = e.modifiedTime || Date.now()),
                e.hasOwnProperty("dimension") &&
                  (t.dimension = e.thumbMetadata
                    ? {
                        width: e.thumbMetadata.width,
                        height: e.thumbMetadata.height,
                        type: e.thumbMetadata.type,
                        orientation: e.thumbMetadata.orientation,
                        bigRes: e.thumbMetadata.bigRes,
                      }
                    : null),
                t
              );
            }
            toNewEAttsFromDTOAtts(e) {
              if (!e || "object" != typeof e)
                throw Error("dtoAtts isn't valid!");
              const t = {};
              return (
                e.hasOwnProperty("message") &&
                  "object" == typeof e.message &&
                  (t.content = {
                    title: e.message.title,
                    href: e.message.href,
                    params: e.message.params,
                    thumb: e.message.thumb || "",
                  }),
                e.hasOwnProperty("fileType") && (t.type = e.fileType),
                e.hasOwnProperty("extType") && (t.extType = e.extType || ""),
                e.hasOwnProperty("sendDttm") &&
                  (t.sendDttm =
                    "string" == typeof e.sendDttm ? +e.sendDttm : e.sendDttm),
                e.hasOwnProperty("ttl") && (t.ttl = e.ttl || 0),
                e.hasOwnProperty("localPath") &&
                  (t.localPath = e.localPath || ""),
                e.hasOwnProperty("folderPath") &&
                  (t.folderPath = e.folderPath || ""),
                e.hasOwnProperty("updateTime") &&
                  (t.modifiedTime = e.updateTime || Date.now()),
                e.hasOwnProperty("dimension") &&
                  (t.thumbMetadata = e.dimension
                    ? {
                        width: e.dimension.width,
                        height: e.dimension.height,
                        type: e.dimension.type,
                        orientation: e.dimension.orientation,
                        bigRes: e.dimension.bigRes,
                      }
                    : null),
                t
              );
            }
          })
        ) || O;
      var v;
      r.ModuleContainer.register(c.a, D);
      let T =
        Object(r.injectable)()(
          (v = class {
            toDomainFromOldDomain(e, t = `${M.c.UNKNOWN}${M.d.FROM_OLD_DB}`) {
              if (!e || !e.message)
                throw Error("This oldLinkEntity isn't valid!");
              if (!(e.cliMsgId && e.fromUid && e.userId))
                throw Error(
                  "This oldLinkEntity doesn't have key_from_to valid!"
                );
              const i =
                "string" == typeof e.sendDttm
                  ? parseInt(e.sendDttm)
                  : e.sendDttm;
              return {
                mediaId: `${e.cliMsgId}_${e.fromUid}_${e.userId}`,
                convId: e.userId,
                cliMsgId:
                  "number" == typeof e.cliMsgId
                    ? e.cliMsgId.toString()
                    : e.cliMsgId,
                fromUid: e.fromUid,
                content: {
                  title:
                    "object" == typeof e.message.title
                      ? e.message.title.title || ""
                      : e.message.title,
                  params: e.message.params || "",
                  href: e.message.href || "",
                  thumb: e.message.thumb || "",
                  description: e.message.description || "",
                  type: e.message.type || "",
                },
                type: -1,
                src: t,
                sendDttm: i,
                ttl: e.ttl,
                modifiedTime: e.updateTime || i,
                parsedInfo: null,
              };
            }
            toDomainFromDTO(e) {
              if (!e || !e.message) throw Error("This linkDTO isn't valid!");
              if (!(e.cliMsgId && e.fromUid && e.userId))
                throw Error("This linkDTO doesn't have key_from_to valid!");
              const t =
                "string" == typeof e.sendDttm
                  ? parseInt(e.sendDttm)
                  : e.sendDttm;
              return {
                mediaId: e.mediaId,
                convId: e.userId,
                cliMsgId:
                  "number" == typeof e.cliMsgId
                    ? e.cliMsgId.toString()
                    : e.cliMsgId,
                fromUid: e.fromUid,
                content: {
                  title:
                    "object" == typeof e.message.title
                      ? e.message.title.title
                      : e.message.title || "",
                  params: e.message.params || "",
                  href: e.message.href || "",
                  thumb: e.message.thumb || "",
                  description: e.message.description || "",
                  type: e.message.type,
                },
                src: e.src,
                type: "number" == typeof e.linkType ? e.linkType : -1,
                sendDttm: t,
                ttl: "number" == typeof e.ttl ? e.ttl : 0,
                modifiedTime: e.updateTime || t,
                parsedInfo: null,
              };
            }
            async toDTO(e) {
              if (!e || !e.mediaId) throw Error("This linkEntity isn't valid!");
              const t = e.msgId
                ? e.msgId
                : await r.ModuleContainer.resolve(n.b).toMessagePKFromMediaPK(
                    e.mediaId
                  );
              return {
                mediaId: e.mediaId,
                msgId: t,
                cliMsgId: parseInt(e.cliMsgId),
                fromUid: e.fromUid,
                userId: e.convId,
                message: {
                  title: e.content.title,
                  params: e.content.params,
                  href: e.content.href,
                  thumb: e.content.thumb,
                  description: e.content.description,
                  type: e.content.type,
                  action: "",
                  childnumber: 0,
                  oriUrl: "",
                  thumbUrl: "",
                },
                sendDttm: e.sendDttm,
                type: "link",
                ttl: e.ttl,
                src: e.src,
                linkType: e.type,
                id: 0,
                updateTime: e.modifiedTime,
                previewThumb: "",
                parsedInfo:
                  "object" == typeof e.parsedInfo
                    ? Object(p.a)({}, e.parsedInfo)
                    : null,
              };
            }
            toDomainFromMessage(e, t = `${M.c.UNKNOWN}${M.d.FROM_MSG}`) {
              if (!e) throw Error("This messageEntity isn't valid!");
              if (!(e.cliMsgId && e.fromUid && e.toUid))
                throw Error(
                  "This messageEntity doesn't have key_from_to valid!"
                );
              const i =
                "string" == typeof e.sendDttm
                  ? parseInt(e.sendDttm)
                  : e.sendDttm;
              return {
                mediaId: `${e.cliMsgId}_${e.fromUid}_${e.toUid}`,
                convId: e.toUid,
                cliMsgId:
                  "number" == typeof e.cliMsgId
                    ? e.cliMsgId.toString()
                    : e.cliMsgId,
                fromUid: e.fromUid,
                content: {
                  title:
                    "object" === e.message.title
                      ? e.message.title.title
                      : e.message.title || "",
                  params: e.message.params || "",
                  href: e.message.href || "",
                  thumb: e.message.thumb || "",
                  description: e.message.description || "",
                  type: e.message.type,
                },
                type: -1,
                src: t,
                sendDttm: i,
                ttl: e.ttl || 0,
                modifiedTime: i,
                parsedInfo: null,
              };
            }
            toMediaToCreateOrUpdateUtilsMediaDTOFromDomain(e) {
              return {
                convId: e.convId,
                fromUid: e.fromUid,
                mediaType: "link",
                content: { params: e.content.params },
              };
            }
            toOldEAttsFromNewEAtts(e) {
              if (!e || "object" != typeof e)
                throw Error("newEAtts isn't valid!");
              const t = {};
              return (
                e.hasOwnProperty("content") &&
                  "object" == typeof e.content &&
                  (t.message = {
                    title: e.content.title,
                    params: e.content.params,
                    href: e.content.href,
                    thumb: e.content.thumb,
                    description: e.content.description,
                    type: e.content.type,
                    action: "",
                    childnumber: 0,
                    oriUrl: "",
                    thumbUrl: "",
                  }),
                e.hasOwnProperty("sendDttm") && (t.sendDttm = e.sendDttm),
                e.hasOwnProperty("ttl") && (t.ttl = e.ttl || 0),
                e.hasOwnProperty("updateTime") &&
                  (t.updateTime = e.modifiedTime || Date.now()),
                t
              );
            }
            toNewEAttsFromDTOAtts(e) {
              if (!e || "object" != typeof e)
                throw Error("dtoAtts isn't valid!");
              const t = {};
              var i;
              e.hasOwnProperty("message") &&
                "object" == typeof e.message &&
                (t.content = {
                  title:
                    "object" == typeof e.message.title
                      ? (null === (i = e.message.title) || void 0 === i
                          ? void 0
                          : i.title) || ""
                      : e.message.title || "",
                  params: e.message.params || "",
                  href: e.message.href || "",
                  thumb: e.message.thumb || "",
                  description: e.message.description || "",
                  type: e.message.type || "",
                });
              return (
                e.hasOwnProperty("sendDttm") &&
                  (t.sendDttm =
                    "string" == typeof e.sendDttm ? +e.sendDttm : e.sendDttm),
                e.hasOwnProperty("ttl") && (t.ttl = e.ttl || 0),
                e.hasOwnProperty("linkType") && (t.type = e.linkType),
                e.hasOwnProperty("updateTime") &&
                  (t.modifiedTime = e.updateTime || Date.now()),
                e.hasOwnProperty("parsedInfo") &&
                  (t.parsedInfo = e.parsedInfo
                    ? {
                        protocol: e.parsedInfo.protocol || "",
                        host: e.parsedInfo.domain || "",
                      }
                    : null),
                t
              );
            }
          })
        ) || v;
      r.ModuleContainer.register(g.b, T);
      var w,
        E = i("rePB"),
        j = i("AjFa"),
        F = i("Mgpg"),
        U = i("H8Z7");
      Object(r.injectable)()(
        (w =
          Object(r.singleton)(j.b)(
            (w =
              (function (e, t) {
                return Object(r.inject)(m.b)(e, void 0, 0);
              })(
                (w =
                  (function (e, t) {
                    return Object(r.inject)(U.c)(e, void 0, 1);
                  })(
                    (w =
                      (function (e, t) {
                        return Object(r.inject)(F.ZLoggerFactory)(e, void 0, 2);
                      })(
                        (w =
                          Reflect.metadata(
                            "design:type",
                            Function
                          )(
                            (w =
                              Reflect.metadata("design:paramtypes", [
                                void 0 === m.IImageMediaMapper
                                  ? Object
                                  : m.IImageMediaMapper,
                                void 0 === U.IMediaMigrationManager
                                  ? Object
                                  : U.IMediaMigrationManager,
                                void 0 === F.ZLoggerFactory
                                  ? Object
                                  : F.ZLoggerFactory,
                              ])(
                                (w = class extends j.a {
                                  constructor(e, t, i) {
                                    super(
                                      "Media",
                                      "Image",
                                      "image",
                                      "crud-image-media",
                                      t,
                                      i
                                    ),
                                      Object(E.a)(
                                        this,
                                        "imageMediaMapper",
                                        void 0
                                      ),
                                      Object(E.a)(this, "oldDBTable", void 0),
                                      (this.imageMediaMapper = e),
                                      (this.oldDBTable =
                                        this._dalInstance.Core.Image);
                                  }
                                  getOldDBTable() {
                                    return (
                                      this.oldDBTable ||
                                        (this.oldDBTable =
                                          a.a.getInstance().Core.Image),
                                      this.oldDBTable
                                    );
                                  }
                                  getMediaMapper() {
                                    return this.imageMediaMapper;
                                  }
                                  deleteMatch(e, t) {
                                    throw Error(
                                      "Currently, this method isn't supported!"
                                    );
                                  }
                                  getAllKey(e, t) {
                                    throw Error(
                                      "Currently, this method isn't supported!"
                                    );
                                  }
                                  put(e, t) {
                                    throw Error(
                                      "Currently, this method isn't supported!"
                                    );
                                  }
                                  runTransaction(e, t, i) {
                                    throw Error(
                                      "Currently, this method isn't supported!"
                                    );
                                  }
                                })
                              ) || w)
                          ) || w)
                      ) || w)
                  ) || w)
              ) || w)
          ) || w)
      );
      var S,
        N = i("W13p");
      Object(r.injectable)()(
        (S =
          Object(r.singleton)(N.b)(
            (S =
              (function (e, t) {
                return Object(r.inject)(c.a)(e, void 0, 0);
              })(
                (S =
                  (function (e, t) {
                    return Object(r.inject)(U.c)(e, void 0, 1);
                  })(
                    (S =
                      (function (e, t) {
                        return Object(r.inject)(F.ZLoggerFactory)(e, void 0, 2);
                      })(
                        (S =
                          Reflect.metadata(
                            "design:type",
                            Function
                          )(
                            (S =
                              Reflect.metadata("design:paramtypes", [
                                void 0 === c.IFileMediaMapper
                                  ? Object
                                  : c.IFileMediaMapper,
                                void 0 === U.IMediaMigrationManager
                                  ? Object
                                  : U.IMediaMigrationManager,
                                void 0 === F.ZLoggerFactory
                                  ? Object
                                  : F.ZLoggerFactory,
                              ])(
                                (S = class extends N.a {
                                  constructor(e, t, i) {
                                    super(
                                      "Media",
                                      "File",
                                      "file",
                                      "crud-file-media",
                                      t,
                                      i
                                    ),
                                      Object(E.a)(
                                        this,
                                        "fileMediaMapper",
                                        void 0
                                      ),
                                      Object(E.a)(this, "oldDBTable", void 0),
                                      (this.fileMediaMapper = e),
                                      (this.oldDBTable =
                                        this._dalInstance.Core.File);
                                  }
                                  getOldDBTable() {
                                    return (
                                      this.oldDBTable ||
                                        (this.oldDBTable =
                                          a.a.getInstance().Core.File),
                                      this.oldDBTable
                                    );
                                  }
                                  getMediaMapper() {
                                    return this.fileMediaMapper;
                                  }
                                  deleteMatch(e, t) {
                                    throw Error(
                                      "Currently, this method isn't supported!"
                                    );
                                  }
                                  getAllKey(e, t) {
                                    throw Error(
                                      "Currently, this method isn't supported!"
                                    );
                                  }
                                  put(e, t) {
                                    throw Error(
                                      "Currently, this method isn't supported!"
                                    );
                                  }
                                  runTransaction(e, t, i) {
                                    throw Error(
                                      "Currently, this method isn't supported!"
                                    );
                                  }
                                })
                              ) || S)
                          ) || S)
                      ) || S)
                  ) || S)
              ) || S)
          ) || S)
      );
      var P,
        C = i("5R0e");
      Object(r.injectable)()(
        (P =
          Object(r.singleton)(C.b)(
            (P =
              (function (e, t) {
                return Object(r.inject)(g.b)(e, void 0, 0);
              })(
                (P =
                  (function (e, t) {
                    return Object(r.inject)(U.c)(e, void 0, 1);
                  })(
                    (P =
                      (function (e, t) {
                        return Object(r.inject)(F.ZLoggerFactory)(e, void 0, 2);
                      })(
                        (P =
                          Reflect.metadata(
                            "design:type",
                            Function
                          )(
                            (P =
                              Reflect.metadata("design:paramtypes", [
                                void 0 === g.ILinkMediaMapper
                                  ? Object
                                  : g.ILinkMediaMapper,
                                void 0 === U.IMediaMigrationManager
                                  ? Object
                                  : U.IMediaMigrationManager,
                                void 0 === F.ZLoggerFactory
                                  ? Object
                                  : F.ZLoggerFactory,
                              ])(
                                (P = class extends C.a {
                                  constructor(e, t, i) {
                                    super(
                                      "Media",
                                      "Link",
                                      "link",
                                      "crud-link-media",
                                      t,
                                      i
                                    ),
                                      Object(E.a)(
                                        this,
                                        "linkMediaMapper",
                                        void 0
                                      ),
                                      Object(E.a)(this, "oldDBTable", void 0),
                                      (this.linkMediaMapper = e),
                                      (this.oldDBTable =
                                        this._dalInstance.Core.Link);
                                  }
                                  getOldDBTable() {
                                    return (
                                      this.oldDBTable ||
                                        (this.oldDBTable =
                                          a.a.getInstance().Core.Link),
                                      this.oldDBTable
                                    );
                                  }
                                  getMediaMapper() {
                                    return this.linkMediaMapper;
                                  }
                                  deleteMatch(e, t) {
                                    throw Error(
                                      "Currently, this method isn't supported!"
                                    );
                                  }
                                  getAllKey(e, t) {
                                    throw Error(
                                      "Currently, this method isn't supported!"
                                    );
                                  }
                                  put(e, t) {
                                    throw Error(
                                      "Currently, this method isn't supported!"
                                    );
                                  }
                                  runTransaction(e, t, i) {
                                    throw Error(
                                      "Currently, this method isn't supported!"
                                    );
                                  }
                                })
                              ) || P)
                          ) || P)
                      ) || P)
                  ) || P)
              ) || P)
          ) || P)
      );
      var A,
        B = i("hWjG"),
        k = i("7WMW"),
        R = i("ndDP");
      class L {
        constructor(e) {
          Object(E.a)(this, "_lruCache", void 0),
            (this._lruCache = new R.default(e));
        }
        get(e) {
          return this._lruCache.get(e);
        }
        getAll(e = "ASC") {
          const t =
            "ASC" === e
              ? this._lruCache.entriesAscending()
              : this._lruCache.entriesDescending();
          return Object.values(t);
        }
        getAllKey(e = "ASC") {
          const t =
            "ASC" === e
              ? this._lruCache.entriesAscending()
              : this._lruCache.entriesDescending();
          return Object.keys(t);
        }
        set(e, t) {
          this._lruCache.set(e, t);
        }
        delete(e) {
          return this._lruCache.delete(e);
        }
        clear() {
          this._lruCache.clear();
        }
      }
      Object(r.injectable)()(
        (A =
          Object(r.singleton)(k.c)(
            (A =
              (function (e, t) {
                return Object(r.inject)(F.ZLoggerFactory)(e, void 0, 0);
              })(
                (A =
                  Reflect.metadata(
                    "design:type",
                    Function
                  )(
                    (A =
                      Reflect.metadata("design:paramtypes", [
                        void 0 === F.ZLoggerFactory ? Object : F.ZLoggerFactory,
                      ])(
                        (A = class extends B.a {
                          constructor(e) {
                            super(
                              "Media",
                              "UtilsMedia",
                              "utils-media-repo",
                              e,
                              "id",
                              M.b
                            ),
                              (this._cache = new L({ maxSize: M.b }));
                          }
                          async isExisted(e) {
                            if (!e) return !1;
                            const t = this._cache.get(e);
                            if (!t) {
                              const t = await this._dbCollection.get(e);
                              return t && this._cache.set(e, t), !!t;
                            }
                            return !!t;
                          }
                          async update(e, t) {
                            const i = await this._dbCollection.update(e, t);
                            return i && this._cache.set(e, i), i;
                          }
                          async updateMulti(e) {
                            const t = await this._dbCollection.updateMulti(e);
                            return (
                              t.success.forEach((e) =>
                                this._cache.set(e.id, e)
                              ),
                              t
                            );
                          }
                          getAllSenderIds(e, t = !0) {
                            if (!e)
                              throw Error(
                                `[getAllSenderIds]: id: ${e} isn't valid!`
                              );
                            return this._getItemListByField(e, "senderIds", t);
                          }
                          getAllFileTypes(e, t) {
                            if (!e)
                              throw Error(
                                `[getAllFileTypes]: id: ${e} isn't valid!`
                              );
                            return this._getItemListByField(e, "fileTypes", t);
                          }
                          saveSender(e, t) {
                            if (!e)
                              throw Error(
                                `[saveSender]: id: ${e} isn't valid!`
                              );
                            return this._saveValueOnField(e, "senderIds", t);
                          }
                          saveFileType(e, t) {
                            if (!e)
                              throw Error(
                                `[saveFileType]: id: ${e} isn't valid!`
                              );
                            return this._saveValueOnField(e, "fileTypes", t);
                          }
                          saveSenders(e, t) {
                            if (!e)
                              throw Error(
                                `[saveSenders]: id: ${e} isn't valid!`
                              );
                            return this._saveValuesOnField(e, "senderIds", t);
                          }
                          saveFileTypes(e, t) {
                            if (!e)
                              throw Error(
                                `[saveSenders]: id: ${e} isn't valid!`
                              );
                            return this._saveValuesOnField(e, "fileTypes", t);
                          }
                          deleteSender(e, t) {
                            if (!e)
                              throw Error(
                                `[deleteSender]: id: ${e} isn't valid!`
                              );
                            return this._deleteValueOnField(e, "senderIds", t);
                          }
                          deleteFileType(e, t) {
                            if (!e)
                              throw Error(
                                `[deleteFileType]: id: ${e} isn't valid!`
                              );
                            return this._deleteValueOnField(e, "fileTypes", t);
                          }
                          deleteSenders(e, t) {
                            if (!e)
                              throw Error(
                                `[deleteSenders]: id: ${e} isn't valid!`
                              );
                            return this._deleteValuesByField(e, "senderIds", t);
                          }
                          deleteFileTypes(e, t) {
                            if (!e)
                              throw Error(
                                `[deleteFileTypes]: id: ${e} isn't valid!`
                              );
                            return this._deleteValuesByField(e, "fileTypes", t);
                          }
                          async _saveValueOnField(e, t, i) {
                            const s =
                              this._cache.get(e) ||
                              (await this._dbCollection.get(e));
                            if (s) {
                              s[t].some((e) => e === i) ||
                                (s[t].push(i),
                                await this.update(e, {
                                  value: { [t]: s[t] },
                                  attributes: [t],
                                }));
                            }
                            return !0;
                          }
                          async _saveValuesOnField(e, t, i) {
                            const s =
                              this._cache.get(e) ||
                              (await this._dbCollection.get(e));
                            if (s) {
                              const r = i.filter((e) => !s[t].includes(e));
                              r.length &&
                                (s[t].push(...r),
                                await this.update(e, {
                                  value: { [t]: s[t] },
                                  attributes: [t],
                                }));
                            }
                            return !0;
                          }
                          async _deleteValueOnField(e, t, i) {
                            const s =
                              this._cache.get(e) ||
                              (await this._dbCollection.get(e));
                            if (s) {
                              const r = s[t].indexOf(i);
                              -1 !== r &&
                                (s[t].splice(r, 1),
                                await this.update(e, {
                                  value: { [t]: s[t] },
                                  attributes: [t],
                                }));
                            }
                            return !0;
                          }
                          async _deleteValuesByField(e, t, i) {
                            const s =
                              this._cache.get(e) ||
                              (await this._dbCollection.get(e));
                            if (s) {
                              const r = s[t].filter((e) => !i.includes(e));
                              r.length < s[t].length &&
                                ((s[t] = r),
                                await this.update(e, {
                                  value: { [t]: r },
                                  attributes: [t],
                                }));
                            }
                            return !0;
                          }
                          async _getItemListByField(e, t, i = !0) {
                            var s;
                            const r = this._cache.get(e);
                            var a;
                            if (i)
                              return r &&
                                null !== (a = r[t]) &&
                                void 0 !== a &&
                                a.length
                                ? r[t].slice()
                                : [];
                            const n = await this._dbCollection.get(e);
                            return (
                              n && !r && this._cache.set(e, Object(p.a)({}, n)),
                              n &&
                              null !== (s = n[t]) &&
                              void 0 !== s &&
                              s.length
                                ? n[t].slice()
                                : []
                            );
                          }
                        })
                      ) || A)
                  ) || A)
              ) || A)
          ) || A)
      );
      var x,
        J = i("SrDO"),
        z = i("fhp4");
      Object(r.injectable)()(
        (x =
          Object(r.singleton)(J.b)(
            (x = class {
              getMediaMapper(e) {
                switch (e) {
                  case "image":
                    return r.ModuleContainer.resolve(z.c);
                  case "file":
                    return r.ModuleContainer.resolve(z.a);
                  case "link":
                    return r.ModuleContainer.resolve(z.d);
                  default:
                    return;
                }
              }
            })
          ) || x)
      );
      var $,
        K = i("3dEI");
      Object(r.injectable)()(
        ($ =
          Object(r.singleton)(K.b)(
            ($ = class {
              getMediaRepository(e) {
                switch (e) {
                  case "image":
                    return r.ModuleContainer.resolve(j.b);
                  case "link":
                    return r.ModuleContainer.resolve(C.b);
                  case "file":
                    return r.ModuleContainer.resolve(N.b);
                  default:
                    return;
                }
              }
            })
          ) || $)
      );
      const G = "utils-media-domain-service",
        W = Object(r.define)(G);
      var V,
        H = i("5txd");
      Object(r.injectable)()(
        (V =
          Object(r.singleton)(W)(
            (V =
              (function (e, t) {
                return Object(r.inject)(k.c)(e, void 0, 0);
              })(
                (V =
                  (function (e, t) {
                    return Object(r.inject)(F.ZLoggerFactory)(e, void 0, 1);
                  })(
                    (V =
                      Reflect.metadata(
                        "design:type",
                        Function
                      )(
                        (V =
                          Reflect.metadata("design:paramtypes", [
                            void 0 === k.b ? Object : k.b,
                            void 0 === F.ZLoggerFactory
                              ? Object
                              : F.ZLoggerFactory,
                          ])(
                            (V = class {
                              constructor(e, t) {
                                Object(E.a)(this, "_log", void 0),
                                  Object(E.a)(this, "_logger", void 0),
                                  Object(E.a)(
                                    this,
                                    "_utilsMediaRepository",
                                    void 0
                                  ),
                                  (this._utilsMediaRepository = e),
                                  (this._logger = t.createZLogger(
                                    "utils-media-domain-service",
                                    ["mn-utils-media-de"]
                                  )),
                                  (this._log = Object(H.a)(this._logger));
                              }
                              async create(e) {
                                if (!e)
                                  throw Error(
                                    `utilsMedia(${e}) isn't existed!`
                                  );
                                if (!e.convId || !e.mediaType)
                                  throw Error(
                                    `cannot create utilsMedia with convId(${e.convId}) and mediaType(${e.mediaType})`
                                  );
                                if (
                                  await this._utilsMediaRepository.isExisted(
                                    `${e.convId}_${e.mediaType}`
                                  )
                                )
                                  throw (
                                    (this._log(
                                      "[create]",
                                      `existed utilsMedia have convId(${e.convId}) and mediaType(${e.mediaType})`,
                                      "info"
                                    ),
                                    Error(
                                      `existed utilsMedia have convId(${e.convId}) and mediaType(${e.mediaType})`
                                    ))
                                  );
                                return {
                                  id: `${e.convId}_${e.mediaType}`,
                                  convId: e.convId,
                                  mediaType: e.mediaType,
                                  senderIds: e.senderIds || [],
                                  fileTypes: e.fileTypes || [],
                                };
                              }
                              addSenders(e, t) {
                                if (!e)
                                  throw Error(
                                    "[addFileTypes] utilsMediaEntity isn't existed!"
                                  );
                                if (!t || !t.length) return Object(p.a)({}, e);
                                return Object(p.a)(
                                  Object(p.a)({}, e),
                                  {},
                                  {
                                    senderIds: t.reduce(
                                      (e, t) => (e.includes(t) || e.push(t), e),
                                      [...e.senderIds] || !1
                                    ),
                                  }
                                );
                              }
                              addFileTypes(e, t) {
                                if (!e)
                                  throw Error(
                                    "[addFileTypes] utilsMediaEntity isn't existed!"
                                  );
                                if (!t || !t.length) return Object(p.a)({}, e);
                                const i = Object(p.a)(
                                  Object(p.a)({}, e),
                                  {},
                                  {
                                    fileTypes: t.reduce(
                                      (e, t) => (e.includes(t) || e.push(t), e),
                                      [...e.fileTypes] || !1
                                    ),
                                  }
                                );
                                return i;
                              }
                            })
                          ) || V)
                      ) || V)
                  ) || V)
              ) || V)
          ) || V)
      );
      var Z,
        X = i("mvkY"),
        Y = i("jbAT");
      Object(r.injectable)()(
        (Z =
          Object(r.singleton)(Y.b)(
            (Z =
              (function (e, t) {
                return Object(r.inject)(W)(e, void 0, 0);
              })(
                (Z =
                  (function (e, t) {
                    return Object(r.inject)(k.c)(e, void 0, 1);
                  })(
                    (Z =
                      (function (e, t) {
                        return Object(r.inject)(d)(e, void 0, 2);
                      })(
                        (Z =
                          (function (e, t) {
                            return Object(r.inject)(F.ZLoggerFactory)(
                              e,
                              void 0,
                              3
                            );
                          })(
                            (Z =
                              Reflect.metadata(
                                "design:type",
                                Function
                              )(
                                (Z =
                                  Reflect.metadata("design:paramtypes", [
                                    Object,
                                    void 0 === k.b ? Object : k.b,
                                    Object,
                                    void 0 === F.ZLoggerFactory
                                      ? Object
                                      : F.ZLoggerFactory,
                                  ])(
                                    (Z = class {
                                      constructor(e, t, i, s) {
                                        Object(E.a)(
                                          this,
                                          "_utilsMediaDomainService",
                                          void 0
                                        ),
                                          Object(E.a)(
                                            this,
                                            "_utilsMediaRepository",
                                            void 0
                                          ),
                                          Object(E.a)(this, "_mapper", void 0),
                                          Object(E.a)(this, "_logger", void 0),
                                          Object(E.a)(this, "_log", void 0),
                                          (this._utilsMediaDomainService = e),
                                          (this._utilsMediaRepository = t),
                                          (this._mapper = i),
                                          (this._logger = s.createZLogger(X.b, [
                                            "manage-utils-media-in-app",
                                          ])),
                                          (this._log = Object(H.a)(
                                            this._logger
                                          ));
                                      }
                                      async create(e) {
                                        try {
                                          const t =
                                            await this._utilsMediaDomainService.create(
                                              e
                                            );
                                          return this._mapper.toUtilsMediaDTOFromDomain(
                                            await this._utilsMediaRepository.insert(
                                              t
                                            )
                                          );
                                        } catch (t) {
                                          return void this._log(
                                            "[create]",
                                            t.message
                                          );
                                        }
                                      }
                                      async createOrUpdate(e) {
                                        try {
                                          const t = `${e.convId}_${e.mediaType}`;
                                          let i =
                                            await this._utilsMediaRepository.get(
                                              t
                                            );
                                          if (i) {
                                            const {
                                              senderIds: s,
                                              fileTypes: r,
                                            } = e;
                                            let a = i.senderIds,
                                              n = i.fileTypes;
                                            if (
                                              (s &&
                                                s.length &&
                                                (a =
                                                  this._utilsMediaDomainService.addSenders(
                                                    i,
                                                    s
                                                  ).senderIds),
                                              r &&
                                                r.length &&
                                                (n =
                                                  this._utilsMediaDomainService.addFileTypes(
                                                    i,
                                                    r
                                                  ).fileTypes),
                                              a.length !== i.senderIds.length ||
                                                n.length !== i.fileTypes.length)
                                            ) {
                                              const e =
                                                await this._utilsMediaRepository.update(
                                                  t,
                                                  {
                                                    value: {
                                                      senderIds: a,
                                                      fileTypes: n,
                                                    },
                                                    attributes: [
                                                      "senderIds",
                                                      "fileTypes",
                                                    ],
                                                  }
                                                );
                                              return this._mapper.toUtilsMediaDTOFromDomain(
                                                e
                                              );
                                            }
                                            return this._mapper.toUtilsMediaDTOFromDomain(
                                              i
                                            );
                                          }
                                          return this.create(e);
                                        } catch (t) {
                                          return void this._log(
                                            "[createOrUpdate]",
                                            t.message
                                          );
                                        }
                                      }
                                      async deleteUtilsMediasByConvId(e) {
                                        try {
                                          if (!e) return [];
                                          const t = Object.values(M.e).map(
                                            (t) => `${e}_${t}`
                                          );
                                          return (
                                            await this._utilsMediaRepository.deleteMulti(
                                              t
                                            )
                                          ).success;
                                        } catch (t) {
                                          return (
                                            this._log(
                                              "[deleteUtilsMediasByConvId]",
                                              t.message
                                            ),
                                            []
                                          );
                                        }
                                      }
                                      async createOrUpdateFromMedias(e) {
                                        try {
                                          if (!e || !e.length) return [];
                                          const t = new Map();
                                          e.forEach((e) => {
                                            let i = t.get(e.convId);
                                            if (
                                              "image" === e.mediaType ||
                                              "link" === e.mediaType
                                            )
                                              if (i) {
                                                -1 ===
                                                  i.senderIds.indexOf(
                                                    e.fromUid
                                                  ) &&
                                                  (i.senderIds.push(e.fromUid),
                                                  t.set(e.convId, i));
                                              } else
                                                (i = {
                                                  convId: e.convId,
                                                  mediaType: e.mediaType,
                                                  senderIds: [e.fromUid],
                                                  fileTypes: [],
                                                }),
                                                  t.set(e.convId, i);
                                            else if ("file" === e.mediaType) {
                                              const s = this._getFileType(
                                                e.content.params
                                              );
                                              if (i) {
                                                -1 === i.fileTypes.indexOf(s) &&
                                                  (i.fileTypes.push(s),
                                                  t.set(e.convId, i));
                                              } else
                                                (i = {
                                                  convId: e.convId,
                                                  mediaType: e.mediaType,
                                                  senderIds: [e.fromUid],
                                                  fileTypes: [s],
                                                }),
                                                  t.set(e.convId, i);
                                            }
                                          });
                                          const i = Array.from(t.values());
                                          return (
                                            await Promise.all(
                                              i.map((e) =>
                                                this.createOrUpdate(e)
                                              )
                                            )
                                          ).filter(Boolean);
                                        } catch (t) {
                                          return (
                                            this._log(
                                              "[createOrUpdateFromMedias]",
                                              t.message
                                            ),
                                            []
                                          );
                                        }
                                      }
                                      _getFileType(e) {
                                        try {
                                          const t = JSON.parse(e);
                                          if (!t)
                                            throw Error(`paramsObj is ${t}!`);
                                          const { fileExt: i, fType: s } = t;
                                          return "zip" === i && 2 === s
                                            ? "folder"
                                            : i.toLowerCase();
                                        } catch (t) {
                                          return (
                                            this._log(
                                              "[_getFileType]",
                                              t.message
                                            ),
                                            ""
                                          );
                                        }
                                      }
                                    })
                                  ) || Z)
                              ) || Z)
                          ) || Z)
                      ) || Z)
                  ) || Z)
              ) || Z)
          ) || Z)
      );
      var q = i("igA5");
      const Q = Object(r.define)("media-migration-state-persist");
      var ee,
        te = i("8tev");
      Object(r.injectable)()(
        (ee =
          Object(r.singleton)(Q)(
            (ee = class {
              constructor() {
                Object(E.a)(this, "_localStorage", q.a.getInstance());
              }
              async saveMigrationState(e) {
                e &&
                  (await this._localStorage.setItemForCurrentUserAsync(
                    te.c.MIGRATION_STATE_KEY,
                    JSON.stringify(e)
                  ));
              }
              async getMigrationState() {
                try {
                  const e = await this._localStorage.getItemForCurrentUserAsync(
                    te.c.MIGRATION_STATE_KEY
                  );
                  return e
                    ? JSON.parse(e)
                    : { stateName: te.b.UNKNOWN, mediaTableNamesToMigrate: [] };
                } catch (e) {
                  return {
                    stateName: te.b.UNKNOWN,
                    mediaTableNamesToMigrate: [],
                  };
                }
              }
              async saveJobDescSummaries(e) {
                Array.isArray(e) &&
                  (await this._localStorage.setItemForCurrentUserAsync(
                    te.c.PERSISTED_JOB_DESC_SUMMARIES_KEY,
                    JSON.stringify(e)
                  ));
              }
              async getSavedJobDescSummaries() {
                try {
                  const e = await this._localStorage.getItemForCurrentUserAsync(
                    te.c.PERSISTED_JOB_DESC_SUMMARIES_KEY
                  );
                  if (!e) return [];
                  return JSON.parse(e);
                } catch (e) {
                  return [];
                }
              }
              async clearPersistedJobDescSummaries() {
                await this._localStorage.removeItemForCurrentUserAsync(
                  te.c.PERSISTED_JOB_DESC_SUMMARIES_KEY
                );
              }
            })
          ) || ee)
      );
      var ie = i("8/YW"),
        se = i("mH7l"),
        re = i.n(se);
      const ae = (e) => "GET_FROM_OLD_DB" === e.name,
        ne = (e) => "ADD_TO_NEW_DB" === e.name,
        oe = (e) => "DELETE_FROM_OLD_DB" === e.name;
      var de = i("1pet"),
        le = i("ZsEe"),
        ce = i("EYv5"),
        me = i("NDmK");
      function ge() {
        return me.default.media_migration_db.should_stop_migration;
      }
      function ue() {
        return me.default.media_migration_db.max_running_concurrency_job;
      }
      function he() {
        return me.default.media_migration_db.delay_time_per_job;
      }
      function pe() {
        return me.default.media_migration_db.delay_time_each_k_jobs;
      }
      function Me() {
        return me.default.media_migration_db.media_limit_per_job;
      }
      function fe() {
        return me.default.media_migration_db.min_retry_after;
      }
      function be() {
        return me.default.media_migration_db.max_retry_after;
      }
      var ye = i("1erv");
      const Ie = 0,
        _e = 1,
        Oe = 2,
        De = 4;
      class ve extends Error {
        constructor(e) {
          super(`ExpBackoff error:${e}`), (this.code = e);
        }
      }
      function Te({ step: e, nTry: t, jitter: i, min: s, max: r }) {
        let a = s * Math.pow(e, t);
        if (i) {
          const e = Math.random(),
            t = Math.floor(e * i * a);
          a = 0 == (1 & Math.floor(10 * e)) ? a - t : a + t;
        }
        return 0 | Math.min(a, r);
      }
      function we(e, t) {
        return async function (...i) {
          for await (const { sleep: r, duration: a, nTry: n } of (function* (
            e
          ) {
            var t, i, s, r, a;
            const n = null != (t = null == e ? void 0 : e.retries) ? t : 3,
              o = null != (i = null == e ? void 0 : e.min) ? i : 100,
              d = null != (s = null == e ? void 0 : e.max) ? s : 1e4,
              l = null != (r = null == e ? void 0 : e.step) ? r : 2,
              c = null != (a = null == e ? void 0 : e.jitter) ? a : 0;
            if (o <= 0) throw new ve(Oe);
            if (c < 0 || c > 1) throw new ve(_e);
            let m = 0;
            for (; m <= n; ) {
              const e = Te({ nTry: m, step: l, jitter: c, min: o, max: d });
              yield {
                nTry: m,
                duration: e,
                sleep: () =>
                  new Promise((t) => {
                    setTimeout(t, e);
                  }),
              },
                m++;
            }
          })(t))
            try {
              const s = await e(...i);
              return (
                null != t &&
                  t.afterRetry &&
                  (null == t ||
                    t.afterRetry({
                      nTry: n,
                      duration: a,
                      sleep: r,
                      success: !0,
                      shouldRetry: !1,
                    })),
                s
              );
            } catch (s) {
              const e =
                  null != t && t.shouldRetryOnError
                    ? null == t
                      ? void 0
                      : t.shouldRetryOnError
                    : () => Promise.resolve(!0),
                o = await e({
                  error: s,
                  currentState: { nTry: n, duration: a, sleep: r },
                  input: i,
                });
              if (
                (null != t &&
                  t.afterRetry &&
                  (null == t ||
                    t.afterRetry({
                      nTry: n,
                      duration: a,
                      sleep: r,
                      shouldRetry: o,
                      success: !1,
                    })),
                !o)
              )
                throw new ve(De);
              await r();
            }
          throw new ve(Ie);
        };
      }
      var Ee;
      const je = new le.a(),
        Fe = 999999;
      Object(ie.d)()(
        (Ee =
          Object(r.injectable)()(
            (Ee =
              Object(r.singleton)(U.c)(
                (Ee =
                  (function (e, t) {
                    return Object(r.inject)(Q)(e, void 0, 0);
                  })(
                    (Ee =
                      (function (e, t) {
                        return Object(r.inject)(ie.a)(e, void 0, 1);
                      })(
                        (Ee =
                          (function (e, t) {
                            return Object(r.inject)(F.ZLoggerFactory)(
                              e,
                              void 0,
                              2
                            );
                          })(
                            (Ee =
                              Reflect.metadata(
                                "design:type",
                                Function
                              )(
                                (Ee =
                                  Reflect.metadata("design:paramtypes", [
                                    Object,
                                    void 0 === ie.a ? Object : ie.a,
                                    void 0 === F.ZLoggerFactory
                                      ? Object
                                      : F.ZLoggerFactory,
                                  ])(
                                    (Ee = class {
                                      constructor(e, t, i) {
                                        Object(E.a)(this, "_isLoadData", !1),
                                          Object(E.a)(this, "_forceStop", !1),
                                          Object(E.a)(
                                            this,
                                            "_mediaMigrationStatePersist",
                                            void 0
                                          ),
                                          Object(E.a)(
                                            this,
                                            "_maxWorkerPoolNum",
                                            ue()
                                          ),
                                          Object(E.a)(
                                            this,
                                            "_worker",
                                            new re.a({
                                              concurrency:
                                                this._maxWorkerPoolNum,
                                              autoStart: !1,
                                            })
                                          ),
                                          Object(E.a)(
                                            this,
                                            "_delayTimePerJob",
                                            he()
                                          ),
                                          Object(E.a)(
                                            this,
                                            "_delayTimeEachKJobs",
                                            pe()
                                          ),
                                          Object(E.a)(
                                            this,
                                            "_mediaNumLimitPerJob",
                                            Me()
                                          ),
                                          Object(E.a)(
                                            this,
                                            "_minRetryAfter",
                                            fe()
                                          ),
                                          Object(E.a)(
                                            this,
                                            "_maxRetryAfter",
                                            be()
                                          ),
                                          Object(E.a)(
                                            this,
                                            "_currentJobDescs",
                                            []
                                          ),
                                          Object(E.a)(
                                            this,
                                            "_currentJobHolders",
                                            []
                                          ),
                                          Object(E.a)(
                                            this,
                                            "_currentMsgIdCursor",
                                            de.MessageConstants.MAX_MSG_ID
                                          ),
                                          Object(E.a)(
                                            this,
                                            "_mediaMigrationState",
                                            void 0
                                          ),
                                          Object(E.a)(
                                            this,
                                            "_failedGetJob",
                                            !1
                                          ),
                                          Object(E.a)(
                                            this,
                                            "_failedAddJob",
                                            !1
                                          ),
                                          Object(E.a)(
                                            this,
                                            "_failedDeleteJob",
                                            !1
                                          ),
                                          Object(E.a)(this, "_hasDBError", !1),
                                          Object(E.a)(this, "_logger", void 0),
                                          Object(E.a)(
                                            this,
                                            "_application",
                                            void 0
                                          ),
                                          (this._mediaMigrationStatePersist =
                                            e),
                                          (this._onApplicationIdle =
                                            this._onApplicationIdle.bind(this)),
                                          (this._onApplicationActive =
                                            this._onApplicationActive.bind(
                                              this
                                            )),
                                          (this._onApplicationExit =
                                            this._onApplicationExit.bind(this)),
                                          (this._application = t),
                                          (this._logger = i.createZLogger(U.b, [
                                            "manage-media-migration",
                                          ]));
                                      }
                                      onApplicationReady(e) {
                                        this._listenEvents(),
                                          this._isLoadData ||
                                            this._loadData().then(() => {
                                              this._runMigration();
                                            }),
                                          this.toggleDBError(
                                            this._getTestMediaMigrationFlag(
                                              "[mm]:db_error"
                                            )
                                          ),
                                          this.toggleGetJobFailed(
                                            this._getTestMediaMigrationFlag(
                                              "[mm]:get_failed"
                                            )
                                          ),
                                          this.toggleAddJobFailed(
                                            this._getTestMediaMigrationFlag(
                                              "[mm]:add_failed"
                                            )
                                          ),
                                          this.toggleDeleteJobFailed(
                                            this._getTestMediaMigrationFlag(
                                              "[mm]:delete_failed"
                                            )
                                          );
                                      }
                                      async getMediaMigrationState() {
                                        if (!Object(ye.a)() || ge())
                                          return {
                                            stateName: te.b.UNKNOWN,
                                            mediaTableNamesToMigrate: [],
                                          };
                                        if (!this._mediaMigrationState) {
                                          const {
                                            stateName: e,
                                            remainingTableNames: t,
                                          } = await this._statsMediaMigration();
                                          this._mediaMigrationState = {
                                            stateName: e,
                                            mediaTableNamesToMigrate: t,
                                          };
                                        }
                                        return this._mediaMigrationState;
                                      }
                                      pauseMigration(e) {
                                        this._logger.zsymb(
                                          3,
                                          11424,
                                          3e4,
                                          "[mm] pause migration - reason: {}",
                                          e
                                        ),
                                          this.flushHoldingJobs(),
                                          (this._forceStop = !0),
                                          this._worker.pause();
                                      }
                                      async resumeMigration(e) {
                                        this._logger.zsymb(
                                          3,
                                          11424,
                                          30001,
                                          "[mm] resume migration - reason: {}",
                                          e
                                        ),
                                          (this._forceStop = !1),
                                          Object(ye.a)() &&
                                            !ge() &&
                                            (this._isLoadData ||
                                              (await this._loadData()),
                                            this._currentJobDescs.forEach(
                                              (e) => {
                                                if (e.state === te.a.FAILED) {
                                                  e.state = te.a.NEW;
                                                  const t = this._createJob(e);
                                                  if (t) {
                                                    const i = this._scheduleJob(
                                                      e.id,
                                                      t
                                                    );
                                                    this._worker.add(i, {
                                                      priority: Fe,
                                                    });
                                                  }
                                                }
                                              }
                                            ),
                                            this._worker.size > 0
                                              ? this._worker.isPaused &&
                                                this._worker.start()
                                              : this._runMigration());
                                      }
                                      flushHoldingJobs() {
                                        this._currentJobHolders.forEach((e) => {
                                          clearTimeout(e.timeoutId),
                                            e.resolver();
                                        }),
                                          (this._currentJobHolders = []);
                                      }
                                      toggleGetJobFailed(e) {
                                        this._failedGetJob = e;
                                      }
                                      toggleAddJobFailed(e) {
                                        this._failedAddJob = e;
                                      }
                                      toggleDeleteJobFailed(e) {
                                        this._failedDeleteJob = e;
                                      }
                                      toggleDBError(e) {
                                        this._hasDBError = e;
                                      }
                                      _createJob(e) {
                                        const { id: t, currentStep: i } = e;
                                        return (
                                          this._updateStateOfCurrentJobByJobId(
                                            t,
                                            te.a.RUNNING
                                          ),
                                          ae(i)
                                            ? this._createJobFromGetFromOldDBCurrentStep(
                                                t,
                                                i
                                              )
                                            : ne(i)
                                            ? this._createJobFromAddToNewDBCurrentStep(
                                                t,
                                                i
                                              )
                                            : oe(i)
                                            ? this._createJobFromDeleteFromOldDBCurrentStep(
                                                t,
                                                i
                                              )
                                            : void 0
                                        );
                                      }
                                      _createJobFromGetFromOldDBCurrentStep(
                                        e,
                                        t
                                      ) {
                                        const i = Object(p.a)({}, t),
                                          {
                                            mediaTableName: s,
                                            amount: r,
                                            lastMsgId: a,
                                          } = i.dataToRun;
                                        return async () => {
                                          try {
                                            await this._withRetry(async () => {
                                              const t = this._createStep(i);
                                              if (!t)
                                                return void this._logger.zsymb(
                                                  21,
                                                  11424,
                                                  30002,
                                                  "[mm] getFromOldDBStep is undefined!"
                                                );
                                              let n = await t();
                                              if (n.state === te.e.FAILED)
                                                throw (
                                                  ((n.data.jobId = e),
                                                  (n.data.jobType =
                                                    "GET_FROM_OLD_DB"),
                                                  n.data)
                                                );
                                              const { data: o } = n;
                                              if (
                                                (this._logger.zsymb(
                                                  3,
                                                  11424,
                                                  30003,
                                                  "[mm] getFromOldDBStep - DONE - jobId: {}, {}",
                                                  e,
                                                  o.length
                                                ),
                                                o.length >= r
                                                  ? (this._currentMsgIdCursor =
                                                      o[o.length - 1].msgId)
                                                  : this._mediaMigrationState &&
                                                    this._mediaMigrationState
                                                      .mediaTableNamesToMigrate
                                                      .length &&
                                                    (this._mediaMigrationState.mediaTableNamesToMigrate.shift(),
                                                    (this._currentMsgIdCursor =
                                                      de.MessageConstants.MAX_MSG_ID)),
                                                this._runMigration(),
                                                o.length)
                                              ) {
                                                const t = {
                                                  name: te.d.ADD_TO_NEW_DB,
                                                  dataToRun: {
                                                    mediaTableName: s,
                                                    amount: r,
                                                    lastMsgId: a,
                                                    data: o,
                                                  },
                                                };
                                                this._updateCurrentStepByJobId(
                                                  e,
                                                  t
                                                );
                                                const i =
                                                  this._createJobFromAddToNewDBCurrentStep(
                                                    e,
                                                    t
                                                  );
                                                await i();
                                              }
                                            })();
                                          } catch (t) {
                                            this._logger.zsymb(
                                              3,
                                              11424,
                                              30004,
                                              "[mm] throw error from get from old DB step - jobId: {}, {}",
                                              e,
                                              null == t ? void 0 : t.message
                                            );
                                          }
                                        };
                                      }
                                      _createJobFromAddToNewDBCurrentStep(
                                        e,
                                        t
                                      ) {
                                        const i = Object(p.a)({}, t),
                                          {
                                            mediaTableName: s,
                                            amount: r,
                                            lastMsgId: a,
                                          } = i.dataToRun;
                                        return async () => {
                                          try {
                                            await this._withRetry(async () => {
                                              await this._persistCurrentJobDescs();
                                              const i = this._createStep(t);
                                              if (!i)
                                                return void this._logger.zsymb(
                                                  18,
                                                  11424,
                                                  30005,
                                                  "[mm] addToNewDBStep is undefined!"
                                                );
                                              const n = await i();
                                              if (n.state === te.e.FAILED)
                                                throw (
                                                  ((n.data.jobId = e),
                                                  (n.data.jobType =
                                                    "ADD_TO_NEW_DB"),
                                                  n.data)
                                                );
                                              const { data: o } = n;
                                              if (
                                                (this._logger.zsymb(
                                                  3,
                                                  11424,
                                                  30006,
                                                  "[mm] addToNewDBStep - jobId: {}, {}",
                                                  e,
                                                  o.length
                                                ),
                                                o.length)
                                              ) {
                                                const t = {
                                                  name: te.d.DELETE_FROM_OLD_DB,
                                                  dataToRun: {
                                                    mediaTableName: s,
                                                    amount: r,
                                                    lastMsgId: a,
                                                    data: o,
                                                  },
                                                };
                                                this._updateCurrentStepByJobId(
                                                  e,
                                                  t
                                                );
                                                const i =
                                                  this._createJobFromDeleteFromOldDBCurrentStep(
                                                    e,
                                                    t
                                                  );
                                                await i();
                                              }
                                            })();
                                          } catch (i) {
                                            this._logger.zsymb(
                                              3,
                                              11424,
                                              30007,
                                              "[mm] throw error from add to new DB step - jobId: {}, {}",
                                              e,
                                              null == i ? void 0 : i.message
                                            );
                                          }
                                        };
                                      }
                                      _createJobFromDeleteFromOldDBCurrentStep(
                                        e,
                                        t
                                      ) {
                                        const i = Object(p.a)({}, t);
                                        return async () => {
                                          try {
                                            await this._withRetry(async () => {
                                              await this._persistCurrentJobDescs();
                                              const t = this._createStep(i);
                                              if (!t)
                                                return void this._logger.zsymb(
                                                  21,
                                                  11424,
                                                  30008,
                                                  "[mm] deleteFromOldDBStep is undefined!"
                                                );
                                              const s = await t();
                                              if (s.state === te.e.FAILED)
                                                throw (
                                                  ((s.data.jobId = e),
                                                  (s.data.jobType =
                                                    "DELETE_FROM_OLD_DB"),
                                                  s.data)
                                                );
                                              this._logger.zsymb(
                                                3,
                                                11424,
                                                30009,
                                                "[mm] deleteFromOldDBStep - DONE - jobId: {}",
                                                e
                                              ),
                                                (this._currentJobDescs =
                                                  this._currentJobDescs.filter(
                                                    (t) => t.id !== e
                                                  )),
                                                (this._currentJobHolders =
                                                  this._currentJobHolders.filter(
                                                    (t) => t.jobId !== e
                                                  )),
                                                this._persistCurrentJobDescs();
                                            })();
                                          } catch (t) {
                                            this._logger.zsymb(
                                              3,
                                              11424,
                                              30010,
                                              "[mm] throw error from delete from old DB step - jobId: {} - err: {}",
                                              e,
                                              null == t ? void 0 : t.message
                                            );
                                          }
                                        };
                                      }
                                      _updateCurrentStepByJobId(e, t) {
                                        const i = this._currentJobDescs.find(
                                          (t) => t.id === e
                                        );
                                        i && (i.currentStep = t);
                                      }
                                      _updateStateOfCurrentJobByJobId(e, t) {
                                        const i = this._currentJobDescs.find(
                                          (t) => t.id === e
                                        );
                                        i && (i.state = t);
                                      }
                                      async _persistCurrentJobDescs() {
                                        await this._mediaMigrationStatePersist.saveJobDescSummaries(
                                          this._currentJobDescs.reduce(
                                            (e, t) => (
                                              t.currentStep.name !==
                                                te.d.GET_FROM_OLD_DB &&
                                                e.push(
                                                  this._toJobDescSummary(t)
                                                ),
                                              e
                                            ),
                                            []
                                          )
                                        );
                                      }
                                      _createStep(e) {
                                        return ae(e)
                                          ? async () => {
                                              try {
                                                if (this._hasDBError)
                                                  this._throwDBError();
                                                else if (this._failedGetJob)
                                                  throw Error(
                                                    "[SIMULATE]: Failed to get job from old DB!"
                                                  );
                                                const {
                                                    mediaTableName: t,
                                                    amount: i,
                                                    lastMsgId: s,
                                                  } = e.dataToRun,
                                                  a = t,
                                                  n = r.ModuleContainer.resolve(
                                                    ce.a
                                                  ),
                                                  o =
                                                    await n.getMediasFromOldDB(
                                                      a,
                                                      i,
                                                      s
                                                    );
                                                return {
                                                  state: te.e.DONE,
                                                  data: o,
                                                };
                                              } catch (t) {
                                                return (
                                                  this._logger.zsymb(
                                                    21,
                                                    11424,
                                                    30011,
                                                    "[mm] get from old db step err: {}",
                                                    null == t
                                                      ? void 0
                                                      : t.message
                                                  ),
                                                  {
                                                    state: te.e.FAILED,
                                                    data: t,
                                                  }
                                                );
                                              }
                                            }
                                          : ne(e)
                                          ? async () => {
                                              try {
                                                if (this._hasDBError)
                                                  this._throwDBError();
                                                else if (this._failedAddJob)
                                                  throw Error(
                                                    "[SIMULATE]: Failed to add job to new DB!"
                                                  );
                                                let {
                                                  mediaTableName: t,
                                                  data: i,
                                                  lastMsgId: s,
                                                  amount: a,
                                                } = e.dataToRun;
                                                const n = t,
                                                  o = r.ModuleContainer.resolve(
                                                    ce.a
                                                  );
                                                let d = i;
                                                d ||
                                                  (d =
                                                    await o.getMediasFromOldDB(
                                                      n,
                                                      a,
                                                      s
                                                    ));
                                                const l =
                                                  await o.addMediasFromOldDB(
                                                    n,
                                                    d
                                                  );
                                                return {
                                                  state: te.e.DONE,
                                                  data: l,
                                                };
                                              } catch (t) {
                                                return (
                                                  this._logger.zsymb(
                                                    21,
                                                    11424,
                                                    30012,
                                                    "[mm] add to new db step err: {}",
                                                    null == t
                                                      ? void 0
                                                      : t.message
                                                  ),
                                                  {
                                                    state: te.e.FAILED,
                                                    data: t,
                                                  }
                                                );
                                              }
                                            }
                                          : oe(e)
                                          ? async () => {
                                              try {
                                                if (this._hasDBError)
                                                  this._throwDBError();
                                                else if (this._failedDeleteJob)
                                                  throw Error(
                                                    "[SIMULATE]: Failed to delete job from old DB!"
                                                  );
                                                const {
                                                    mediaTableName: t,
                                                    data: i,
                                                    lastMsgId: s,
                                                    amount: a,
                                                  } = e.dataToRun,
                                                  n = t,
                                                  o = r.ModuleContainer.resolve(
                                                    ce.a
                                                  );
                                                return i
                                                  ? {
                                                      state: te.e.DONE,
                                                      data: await o.deleteMediasFromOldDB(
                                                        n,
                                                        i
                                                      ),
                                                    }
                                                  : {
                                                      state: te.e.DONE,
                                                      data: await o.deleteMediasFromOldDBByRange(
                                                        n,
                                                        a,
                                                        s
                                                      ),
                                                    };
                                              } catch (t) {
                                                return (
                                                  this._logger.zsymb(
                                                    21,
                                                    11424,
                                                    30013,
                                                    "[mm] delete from old db step err: {}",
                                                    null == t
                                                      ? void 0
                                                      : t.message
                                                  ),
                                                  {
                                                    state: te.e.FAILED,
                                                    data: t,
                                                  }
                                                );
                                              }
                                            }
                                          : void 0;
                                      }
                                      async _loadData() {
                                        if (ge() || !Object(ye.a)()) return;
                                        const e =
                                          await this.getMediaMigrationState();
                                        this._logger.zsymb(
                                          3,
                                          11424,
                                          30014,
                                          "[mm] MEDIA MIGRATION STATE after load data: {}",
                                          e.stateName
                                        ),
                                          (this._mediaMigrationState = e);
                                        const t =
                                          await this._mediaMigrationStatePersist.getSavedJobDescSummaries();
                                        t.length > 0 &&
                                          t.forEach((e) => {
                                            const t = this._toJobDesc(e);
                                            this._currentJobDescs.push(t);
                                            const i = this._createJob(t);
                                            if (i) {
                                              const e = this._scheduleJob(
                                                t.id,
                                                i
                                              );
                                              this._worker.add(e, {
                                                priority: Fe,
                                              });
                                            }
                                          }),
                                          (this._isLoadData = !0);
                                      }
                                      async _statsMediaMigration() {
                                        const e = r.ModuleContainer.resolve(
                                            ce.a
                                          ),
                                          t = await Promise.all([
                                            e.countTotalMediaInOldDB("image"),
                                            e.countTotalMediaInOldDB("file"),
                                            e.countTotalMediaInOldDB("link"),
                                          ]);
                                        let i = te.b.NOT_DONE,
                                          s = [];
                                        return (
                                          (i =
                                            t.reduce(
                                              (e, t, i) => (
                                                0 === i && t > 0
                                                  ? s.push("image")
                                                  : 1 === i && t > 0
                                                  ? s.push("file")
                                                  : 2 === i &&
                                                    t > 0 &&
                                                    s.push("link"),
                                                e + t
                                              ),
                                              0
                                            ) > 0
                                              ? te.b.NOT_DONE
                                              : te.b.DONE),
                                          {
                                            stateName: i,
                                            remainingTableNames: s,
                                          }
                                        );
                                      }
                                      async _runMigration() {
                                        if (
                                          (this._logger.zsymb(
                                            0,
                                            11424,
                                            30015,
                                            "[mm] ====================RUN MIGRATION===================="
                                          ),
                                          !Object(ye.a)())
                                        )
                                          return void this._logger.zsymb(
                                            0,
                                            11424,
                                            30016,
                                            "[mm] ==========STOP MIGRATION: not use new media DB flow (cfsv)=========="
                                          );
                                        if (ge())
                                          return void this._logger.zsymb(
                                            0,
                                            11424,
                                            30017,
                                            "[mm] ==========STOP MIGRATION: stop migration (cfsv)=========="
                                          );
                                        if (this._forceStop)
                                          return void this._logger.zsymb(
                                            0,
                                            11424,
                                            30018,
                                            "[mm] ==========STOP MIGRATION: force stop (in app)=========="
                                          );
                                        if (
                                          !this._isLoadData &&
                                          (await this._loadData(),
                                          !this._isLoadData)
                                        )
                                          return;
                                        if (
                                          this._mediaMigrationState
                                            .stateName === te.b.DONE
                                        )
                                          return void this._logger.zsymb(
                                            0,
                                            11424,
                                            30019,
                                            "[mm] ==========STOP MIGRATION: migration done=========="
                                          );
                                        const e =
                                          this._mediaMigrationState
                                            .mediaTableNamesToMigrate.length > 0
                                            ? this._mediaMigrationState
                                                .mediaTableNamesToMigrate[0]
                                            : "";
                                        if (!e) {
                                          if (!this._currentJobDescs.length)
                                            return (
                                              this._logger.zsymb(
                                                0,
                                                11424,
                                                30020,
                                                "[mm] ==========STOP MIGRATION: no media table to migrate=========="
                                              ),
                                              this._stopListenEvents(),
                                              void (await this._mediaMigrationStatePersist.clearPersistedJobDescSummaries())
                                            );
                                          this._logger.zsymb(
                                            0,
                                            11424,
                                            30021,
                                            "[mm] ==========STOP MIGRATION: no media table to migrate, but still have running jobs=========="
                                          );
                                        }
                                        if (
                                          (this._logger.zsymb(
                                            3,
                                            11424,
                                            30022,
                                            "[mm] worker pending: ",
                                            this._worker.pending
                                          ),
                                          this._logger.zsymb(
                                            3,
                                            11424,
                                            30023,
                                            "[mm] worker size: ",
                                            this._worker.size
                                          ),
                                          e)
                                        ) {
                                          if (
                                            je.value % this._maxWorkerPoolNum ==
                                              0 &&
                                            (await this._waitIn(
                                              this._delayTimeEachKJobs
                                            ),
                                            this._forceStop ||
                                              !Object(ye.a)() ||
                                              ge())
                                          )
                                            return;
                                          const t = {
                                              id: je.next(),
                                              state: te.a.NEW,
                                              currentStep: {
                                                name: te.d.GET_FROM_OLD_DB,
                                                dataToRun: {
                                                  mediaTableName: e,
                                                  amount:
                                                    this._mediaNumLimitPerJob,
                                                  lastMsgId:
                                                    this._currentMsgIdCursor,
                                                },
                                              },
                                            },
                                            i = this._createJob(t);
                                          if (i) {
                                            this._currentJobDescs.push(t);
                                            const e = this._scheduleJob(
                                              t.id,
                                              i
                                            );
                                            this._worker.add(e);
                                          }
                                        } else if (
                                          !this._currentJobDescs.length
                                        )
                                          return;
                                        this._worker.isPaused &&
                                          this._worker.start();
                                      }
                                      _listenEvents() {
                                        this._application.addEventListener(
                                          ie.b.Idle,
                                          this._onApplicationIdle
                                        ),
                                          this._application.addEventListener(
                                            ie.b.Active,
                                            this._onApplicationActive
                                          ),
                                          this._application.addEventListener(
                                            ie.b.Exit,
                                            this._onApplicationExit
                                          );
                                      }
                                      _stopListenEvents() {
                                        this._application.removeEventListener(
                                          ie.b.Idle,
                                          this._onApplicationIdle
                                        ),
                                          this._application.removeEventListener(
                                            ie.b.Active,
                                            this._onApplicationActive
                                          ),
                                          this._application.removeEventListener(
                                            ie.b.Exit,
                                            this._onApplicationExit
                                          );
                                      }
                                      _onApplicationIdle() {
                                        this._setupMigrationConfig({
                                          maxWorkerPoolNum: ue(),
                                          mediaNumLimitPerJob: Me(),
                                          delayTimePerJob: he(),
                                          delayTimeEachKJobs: pe(),
                                          minRetryAfter: fe(),
                                          maxRetryAfter: be(),
                                        });
                                      }
                                      _onApplicationActive() {
                                        this._setupMigrationConfig({
                                          maxWorkerPoolNum: ue(),
                                          mediaNumLimitPerJob: Me(),
                                          delayTimePerJob: he(),
                                          delayTimeEachKJobs: pe(),
                                          minRetryAfter: fe(),
                                          maxRetryAfter: be(),
                                        });
                                      }
                                      _onApplicationExit() {
                                        this.pauseMigration("EXIT_APP");
                                      }
                                      _toJobDescSummary(e) {
                                        const { currentStep: t } = e;
                                        return {
                                          currentStep: {
                                            name: t.name,
                                            summaryData: {
                                              mediaTableName:
                                                t.dataToRun.mediaTableName,
                                              amount: t.dataToRun.amount,
                                              lastMsgId: t.dataToRun.lastMsgId,
                                            },
                                          },
                                        };
                                      }
                                      _toJobDesc(e) {
                                        let { currentStep: t } = e;
                                        return {
                                          id: je.next(),
                                          state: te.a.NEW,
                                          currentStep: {
                                            name: t.name,
                                            dataToRun: Object(p.a)(
                                              Object(p.a)({}, t.summaryData),
                                              {},
                                              { data: void 0 }
                                            ),
                                          },
                                        };
                                      }
                                      _setupMigrationConfig(e) {
                                        "number" == typeof e.maxWorkerPoolNum &&
                                          (this._worker.concurrency =
                                            e.maxWorkerPoolNum),
                                          "number" ==
                                            typeof e.mediaNumLimitPerJob &&
                                            (this._mediaNumLimitPerJob =
                                              e.mediaNumLimitPerJob),
                                          "number" ==
                                            typeof e.delayTimePerJob &&
                                            (this._delayTimePerJob =
                                              e.delayTimePerJob),
                                          "number" ==
                                            typeof e.delayTimeEachKJobs &&
                                            (this._delayTimeEachKJobs =
                                              e.delayTimeEachKJobs),
                                          "number" == typeof e.minRetryAfter &&
                                            (this._minRetryAfter =
                                              e.minRetryAfter),
                                          "number" == typeof e.maxRetryAfter &&
                                            (this._maxRetryAfter =
                                              e.maxRetryAfter);
                                      }
                                      _scheduleJob(e, t) {
                                        return async () =>
                                          new Promise((t) => {
                                            const i = setTimeout(() => {
                                              (this._currentJobHolders =
                                                this._currentJobHolders.filter(
                                                  (t) => t.jobId !== e
                                                )),
                                                t();
                                            }, 1e3 * this._delayTimePerJob);
                                            this._currentJobHolders.push({
                                              jobId: e,
                                              timeoutId: i,
                                              resolver: t,
                                            });
                                          }).then(() => t());
                                      }
                                      _withRetry(e) {
                                        return we(e, {
                                          retries: Infinity,
                                          min: 1e3 * this._minRetryAfter,
                                          max: 1e3 * this._maxRetryAfter,
                                          shouldRetryOnError: async ({
                                            error: e,
                                            currentState: t,
                                          }) =>
                                            this._forceStop ||
                                            ge() ||
                                            !Object(ye.a)()
                                              ? (this._updateStateOfCurrentJobByJobId(
                                                  e.jobId,
                                                  te.a.FAILED
                                                ),
                                                !1)
                                              : "UnknownError" === e.name ||
                                                "QuotaExceededError" ===
                                                  e.name ||
                                                22 === e.code
                                              ? (this._updateStateOfCurrentJobByJobId(
                                                  e.jobId,
                                                  te.a.FAILED
                                                ),
                                                this.pauseMigration("DB_ERROR"),
                                                !1)
                                              : (this._logger.zsymb(
                                                  21,
                                                  11424,
                                                  30024,
                                                  "[mm]: Retry - jobId: {} - jobType: {} - error: {}",
                                                  e.jobId,
                                                  e.jobType,
                                                  e.message
                                                ),
                                                !0),
                                        });
                                      }
                                      async _waitIn(e) {
                                        return (
                                          this._logger.zsymb(
                                            3,
                                            11424,
                                            30025,
                                            "[mm]: waiting in {} seconds",
                                            e
                                          ),
                                          new Promise((t) => {
                                            setTimeout(t, 1e3 * e);
                                          })
                                        );
                                      }
                                      _getTestMediaMigrationFlag(e) {
                                        const t = q.a
                                          .getInstance()
                                          .getItemForCurrentUser(e);
                                        try {
                                          return !!t && JSON.parse(t);
                                        } catch (i) {
                                          return !1;
                                        }
                                      }
                                      _throwDBError() {
                                        const e = new Error(
                                          "[SIMULATE]: DB is corrupted or quota is exceeded!"
                                        );
                                        throw (
                                          ((e.name = "UnknownError"),
                                          (e.code = 22),
                                          e)
                                        );
                                      }
                                    })
                                  ) || Ee)
                              ) || Ee)
                          ) || Ee)
                      ) || Ee)
                  ) || Ee)
              ) || Ee)
          ) || Ee)
      );
    },
  },
]);
//# sourceMappingURL=../sourcemaps/lazy/default-main-startup-shared-worker.bdd57b276c666715b376.js.map
