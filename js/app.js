    }, e.prototype.connect = function(t, n, r, i) {
                    var o, a, l;
                    return me(this, void 0, void 0, function() {
                        var u, s, c, f, p, h, d, m, _, g, S, E, w = this;
                        return ge(this, function(O) {
                            switch (O.label) {
                                case 0:
                                    return u = Date.now(), s = this.connectArgsToConfig(t, n, r, i), f = function(v) {
                                        c == null || c.addEvent(v.name)
                                    }, this.connectionState.onConnectionStateUpdated.addListener(f), this._underRuntime    Host ? (this._session = new dm(this._videoElement, this._logger), [3, 8]) : [3, 1];
                                case 1:
                                    if (p = s.tokenServerUri || s.tokenServerAccessToken, this._apiKey && p && this._lo    gger.log("warn", "You are trying to connect via an API key and a token server. Please use one or the other"), !(thi    s._apiKey && !p)) return [3, 6];
                                    O.label = 2;
                                case 2:
                                    return O.trys.push([2, 5, , 6]), [4, this.fetchAuthConfig(this._apiKey)];
                                case 3:
                                    return h = O.sent(), [4, h.json()];
                                case 4:
                                    return d = O.sent(), m = xc().server, s.tokenServerUri = d.url, s.tokenServerAccess    Token = d.jwt, m && (s.tokenServerUri = yu(d.url) + "server/" + m), [3, 6];
                                case 5:
                                    throw _ = O.sent(), _ instanceof Error && _.message === "Broken API key" ? this._lo    gger.log("error", "Broken API key. Please check your key or re copy the key from DDNA Studio.") : this._logger.log(    "error", "Invalid API key: Please check your key configuration in DDNA Studio. For more information click here http    s://soulmachines-support.atlassian.net/wiki/spaces/SSAS/pages/1320058919/Connecting+Using+API+Keys#Troubleshooting"    ), ce("Invalid API key", "serverConnectionFailed");
                                case 6:
                                    if (!s.tokenServerUri || !s.tokenServerAccessToken) throw ce("Please authenticate v    ia an API key or with a serverUri and accessToken", "serverConnectionFailed");
                                    return [4, this.initializeTracer(s.tokenServerUri, s.tokenServerAccessToken)];
                              ┌─case 7:
                              └────>g = O.sent(), S = g.initTracerStartTime, E = g.initTracerEndTime, c = (l = (a = (o     = hr.getTracer()) === null || o === void 0 ? void 0 : o.startSpan("createSessionAndConnect")) === null || a === voi    d 0 ? void 0 : a.setAttribute("sm.websdk.connection.pretraceinitduration.milliseconds", S - u)) === null || l === v    oid 0 ? void 0 : l.setAttribute("sm.websdk.connection.traceinitduration.milliseconds", E - S), this._isWebSocketOnl    y ? this._session = new mm(s.tokenServerUri, s.tokenServerAccessToken, this._logger) : this._session = new pm(this.    _videoElement, s.tokenServerUri, s.userText, s.tokenServerAccessToken, this._audioOnly, this._requestedUserMedia, t    his._requiredUserMedia, this._echoCancellationEnabled, this._logger, this.connectionState), O.label = 8;
                                case 8:
                                    if (!this._session) throw ce("Failed to create session", "unknown");
                                    return this._session.onConnected = this.sessionConnected.bind(this), this._session.    onMessage = this.onMessage.bind(this), this._session.onClose = this.sessionClosed.bind(this), this._session.onUserT    ext = this.rtcUserText.bind(this), "microphoneActiveCallbacks" in this._session && (this._session.microphoneActiveC    allbacks = this._onMicrophoneActive), "cameraActiveCallbacks" in this._session && (this._session.cameraActiveCallba    cks = this._onCameraActive), this._session.features.isIos && document.addEventListener("visibilitychange", this.ios    VisibilityChange), [4, vb(function() {