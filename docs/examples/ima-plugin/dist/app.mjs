var Ot = Object.defineProperty, Rt = (e, t, n) => t in e ? Ot(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, T = (e, t, n) => (Rt(e, typeof t != "symbol" ? t + "" : t, n), n);
const It = "@mistweaverco/cheza.js", Dt = "1.0.1", Nt = "types/index.d.ts", Tt = "dist/cheza.mjs", Bt = [
  "dist",
  "types"
], $t = {
  dev: "vite",
  build: "tsc && vite build",
  release: "tsc && vite build && npm publish --access public"
}, Ht = {
  vite: "3.2.5"
}, Vt = {
  "@mistweaverco/vite-svg-loader": "1.0.0",
  "svg-sprite": "2.0.2"
}, Ut = {
  name: It,
  version: Dt,
  types: Nt,
  main: Tt,
  files: Bt,
  scripts: $t,
  dependencies: Ht,
  devDependencies: Vt
};
var vt = /* @__PURE__ */ ((e) => (e.MP4 = "video/mp4", e.OGG = "video/ogg", e.WEBM = "video/webm", e.DASH = "application/dash+xml", e.HLS = "application/x-mpegURL", e))(vt || {});
const jt = (e) => {
  const t = document.createElement("video");
  return t.canPlayType(e) === "probably" || t.canPlayType(e) === "maybe";
}, Ft = '<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><symbol viewBox="0 0 18 18" id="cheza-airplay" xmlns="http://www.w3.org/2000/svg"><path d="M16 1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v-2H3V3h12v8h-2v2h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/><path d="M4 17h10l-5-6z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-captions-off" xmlns="http://www.w3.org/2000/svg"><path d="M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1Zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69Zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69Z" fill-rule="evenodd" fill-opacity=".5"/></symbol><symbol viewBox="0 0 18 18" id="cheza-captions-on" xmlns="http://www.w3.org/2000/svg"><path d="M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1Zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69Zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69Z" fill-rule="evenodd"/></symbol><symbol viewBox="0 0 18 18" id="cheza-download" xmlns="http://www.w3.org/2000/svg"><path d="M9 13c.3 0 .5-.1.7-.3L15.4 7 14 5.6l-4 4V1H8v8.6l-4-4L2.6 7l5.7 5.7c.2.2.4.3.7.3ZM2 15h14v2H2z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-enter-fullscreen" xmlns="http://www.w3.org/2000/svg"><path d="M10 3h3.6l-4 4L11 8.4l4-4V8h2V1h-7zM7 9.6l-4 4V10H1v7h7v-2H4.4l4-4z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-exit-fullscreen" xmlns="http://www.w3.org/2000/svg"><path d="M1 12h3.6l-4 4L2 17.4l4-4V17h2v-7H1zM16 .6l-4 4V1h-2v7h7V6h-3.6l4-4z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-fast-forward" xmlns="http://www.w3.org/2000/svg"><path d="M7.875 7.171 0 1v16l7.875-6.171V17L18 9 7.875 1z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-logo-vimeo" xmlns="http://www.w3.org/2000/svg"><path d="M17 5.3c-.1 1.6-1.2 3.7-3.3 6.4-2.2 2.8-4 4.2-5.5 4.2-.9 0-1.7-.9-2.4-2.6C5 10.9 4.4 6 3 6c-.1 0-.5.3-1.2.8l-.8-1c.8-.7 3.5-3.4 4.7-3.5 1.2-.1 2 .7 2.3 2.5.3 2 .8 6.1 1.8 6.1.9 0 2.5-3.4 2.6-4 .1-.9-.3-1.9-2.3-1.1.8-2.6 2.3-3.8 4.5-3.8 1.7.1 2.5 1.2 2.4 3.3Z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-logo-youtube" xmlns="http://www.w3.org/2000/svg"><path d="M16.8 5.8c-.2-1.3-.8-2.2-2.2-2.4C12.4 3 9 3 9 3s-3.4 0-5.6.4C2 3.6 1.3 4.5 1.2 5.8 1 7.1 1 9 1 9s0 1.9.2 3.2c.2 1.3.8 2.2 2.2 2.4C5.6 15 9 15 9 15s3.4 0 5.6-.4c1.4-.3 2-1.1 2.2-2.4.2-1.3.2-3.2.2-3.2s0-1.9-.2-3.2ZM7 12V6l5 3-5 3Z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-muted" xmlns="http://www.w3.org/2000/svg"><path d="m12.4 12.5 2.1-2.1 2.1 2.1 1.4-1.4L15.9 9 18 6.9l-1.4-1.4-2.1 2.1-2.1-2.1L11 6.9 13.1 9 11 11.1zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008Z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-pause" xmlns="http://www.w3.org/2000/svg"><path d="M6 1H3c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1ZM12 1c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1h-3Z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-pip" xmlns="http://www.w3.org/2000/svg"><path d="M13.293 3.293 7.022 9.564l1.414 1.414 6.271-6.271L17 7V1h-6z"/><path d="M13 15H3V5h5V3H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6h-2v5Z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-play" xmlns="http://www.w3.org/2000/svg"><path d="M15.562 8.1 3.87.225C3.052-.337 2 .225 2 1.125v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8Z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-restart" xmlns="http://www.w3.org/2000/svg"><path d="m9.7 1.2.7 6.4 2.1-2.1c1.9 1.9 1.9 5.1 0 7-.9 1-2.2 1.5-3.5 1.5-1.3 0-2.6-.5-3.5-1.5-1.9-1.9-1.9-5.1 0-7 .6-.6 1.4-1.1 2.3-1.3l-.6-1.9C6 2.6 4.9 3.2 4 4.1 1.3 6.8 1.3 11.2 4 14c1.3 1.3 3.1 2 4.9 2 1.9 0 3.6-.7 4.9-2 2.7-2.7 2.7-7.1 0-9.9L16 1.9l-6.3-.7Z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-rewind" xmlns="http://www.w3.org/2000/svg"><path d="M10.125 1 0 9l10.125 8v-6.171L18 17V1l-7.875 6.171z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-settings" xmlns="http://www.w3.org/2000/svg"><path d="M16.135 7.784a2 2 0 0 1-1.23-2.969c.322-.536.225-.998-.094-1.316l-.31-.31c-.318-.318-.78-.415-1.316-.094a2 2 0 0 1-2.969-1.23C10.065 1.258 9.669 1 9.219 1h-.438c-.45 0-.845.258-.997.865a2 2 0 0 1-2.969 1.23c-.536-.322-.999-.225-1.317.093l-.31.31c-.318.318-.415.781-.093 1.317a2 2 0 0 1-1.23 2.969C1.26 7.935 1 8.33 1 8.781v.438c0 .45.258.845.865.997a2 2 0 0 1 1.23 2.969c-.322.536-.225.998.094 1.316l.31.31c.319.319.782.415 1.316.094a2 2 0 0 1 2.969 1.23c.151.607.547.865.997.865h.438c.45 0 .845-.258.997-.865a2 2 0 0 1 2.969-1.23c.535.321.997.225 1.316-.094l.31-.31c.318-.318.415-.781.094-1.316a2 2 0 0 1 1.23-2.969c.607-.151.865-.547.865-.997v-.438c0-.451-.26-.846-.865-.997ZM9 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-volume" xmlns="http://www.w3.org/2000/svg"><path d="M15.6 3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4C15.4 5.9 16 7.4 16 9c0 1.6-.6 3.1-1.8 4.3-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3C17.1 13.2 18 11.2 18 9s-.9-4.2-2.4-5.7Z"/><path d="M11.282 5.282a.909.909 0 0 0 0 1.316c.735.735.995 1.458.995 2.402 0 .936-.425 1.917-.995 2.487a.909.909 0 0 0 0 1.316c.145.145.636.262 1.018.156a.725.725 0 0 0 .298-.156C13.773 11.733 14.13 10.16 14.13 9c0-.17-.002-.34-.011-.51-.053-.992-.319-2.005-1.522-3.208a.909.909 0 0 0-1.316 0ZM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008Z"/></symbol></svg>', zt = (e) => {
  const t = document.createElement("button");
  return t.classList.add("button", "button-" + e.name), t.setAttribute("aria-label", e.ariaLabel), t.setAttribute("title", e.title), t.setAttribute("type", "button"), t.appendChild(e.svg), e.disabled !== void 0 && e.disabled && t.setAttribute("disabled", "disabled"), e.on !== void 0 && e.on.length > 0 && e.on.forEach((n) => {
    t.addEventListener(n.name, n.callback);
  }), e.hidden !== void 0 && e.hidden && t.classList.add("hidden"), t;
}, q = (e) => {
  const t = [];
  t.push(["role", "presentation"]), t.push(["focusable", "false"]);
  const n = "http://www.w3.org/2000/svg", u = "#cheza-", h = document.createElementNS(n, "svg");
  t.forEach((i) => {
    h.setAttribute(i[0], i[1]);
  });
  const p = document.createElementNS(n, "use"), a = u + e;
  return p.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), h.appendChild(p), h;
}, Gt = (e) => [
  {
    name: "play",
    ariaLabel: "Play",
    title: "Play",
    svg: q("play"),
    on: [
      {
        name: "click",
        callback: () => {
          e.videoElement.play();
        }
      }
    ]
  },
  {
    name: "pause",
    ariaLabel: "Pause",
    title: "Pause",
    svg: q("pause"),
    hidden: !0,
    on: [
      {
        name: "click",
        callback: () => {
          e.videoElement.pause();
        }
      }
    ]
  },
  {
    name: "volume",
    ariaLabel: "Mute",
    title: "Mute",
    svg: q("volume"),
    on: [
      {
        name: "click",
        callback: () => {
          e.videoElement.muted = !0;
        }
      }
    ]
  },
  {
    name: "muted",
    ariaLabel: "Unmute",
    title: "Unmute",
    svg: q("muted"),
    hidden: !0,
    on: [
      {
        name: "click",
        callback: () => {
          e.videoElement.muted = !1;
        }
      }
    ]
  },
  {
    name: "enter-fullscreen",
    ariaLabel: "Enter Fullscreen",
    title: "Enter Fullscreen",
    svg: q("enter-fullscreen"),
    on: [
      {
        name: "click",
        callback: () => {
          e.rootElement.requestFullscreen();
        }
      }
    ]
  },
  {
    name: "exit-fullscreen",
    ariaLabel: "Exit Fullscreen",
    title: "Exit Fullscreen",
    svg: q("exit-fullscreen"),
    hidden: !0,
    on: [
      {
        name: "click",
        callback: () => {
          document.fullscreenElement === e.rootElement && document.exitFullscreen();
        }
      }
    ]
  }
], I = (e, t) => t.controlsBottom.querySelector(`.button-${e}`), qt = (e) => {
  const { videoElement: t } = e, n = e.progress;
  document.addEventListener("fullscreenchange", () => {
    document.fullscreenElement === e.rootElement ? (I("enter-fullscreen", e).classList.add("hidden"), I("exit-fullscreen", e).classList.remove("hidden")) : (I("enter-fullscreen", e).classList.remove("hidden"), I("exit-fullscreen", e).classList.add("hidden"));
  }), t.addEventListener("click", () => {
    t.paused ? t.play() : t.pause();
  }), t.addEventListener("waiting", () => {
    e.loadingSpinner.classList.remove("hidden");
  }), t.addEventListener("canplay", () => {
    e.loadingSpinner.classList.add("hidden");
  }), t.addEventListener("playing", () => {
    e.loadingSpinner.classList.add("hidden");
  }), t.addEventListener("timeupdate", () => {
    n.style.width = `${t.currentTime / t.duration * 100}%`;
  }), t.addEventListener("play", () => {
    I("play", e).classList.add("hidden"), I("pause", e).classList.remove("hidden");
  }), t.addEventListener("pause", () => {
    I("play", e).classList.remove("hidden"), I("pause", e).classList.add("hidden");
  }), t.addEventListener("volumechange", () => {
    t.muted ? (I("volume", e).classList.add("hidden"), I("muted", e).classList.remove("hidden")) : (I("volume", e).classList.remove("hidden"), I("muted", e).classList.add("hidden"));
  });
}, Kt = () => {
  if (document.getElementById("cheza-default-ui-icons") === null) {
    const e = document.createElement("div");
    e.id = "cheza-default-ui-icons", e.innerHTML = Ft, document.body.appendChild(e);
  }
}, Wt = (e, t) => {
  const { videoElement: n } = t, { offsetX: u } = e, { offsetWidth: h } = t.progressContainer, p = u / h;
  t.progress.style.width = `${p * 100}%`, n.currentTime = n.duration * p;
}, Zt = (e) => {
  Kt();
  const t = e.videoElement.parentElement, n = e.rootElement, u = e.uiRoot;
  n.classList.add("cheza"), u.classList.add("default-ui"), t.insertBefore(n, e.videoElement), n.appendChild(e.videoElement);
  const h = document.createElement("div");
  h.classList.add("animation"), e.loadingSpinner.classList.add("loading-spinner", "hidden"), e.loadingSpinner.appendChild(h), u.appendChild(e.loadingSpinner), e.controlsTop.classList.add("controls-top"), e.controlsBottom.classList.add("controls-bottom"), e.progressContainer.classList.add("progress-container"), u.appendChild(e.controlsTop), u.appendChild(e.progressContainer), u.appendChild(e.controlsBottom);
  const p = e.progressContainer, a = document.createElement("div");
  return a.classList.add("progress-inline"), e.progress.classList.add("progress"), p.addEventListener("click", (i) => {
    Wt(i, e);
  }), a.appendChild(e.progress), p.appendChild(a), Gt(e).forEach((i) => {
    const c = zt(i);
    e.controlsBottom.appendChild(c);
  }), n.appendChild(e.uiRoot), qt(e), n;
}, Jt = (e) => {
  const t = document.createElement("div"), n = document.createElement("div"), u = document.createElement("div"), h = document.createElement("div"), p = document.createElement("div"), a = document.createElement("div"), i = document.createElement("div");
  return {
    rootElement: t,
    uiRoot: n,
    videoElement: e,
    progressContainer: u,
    progress: h,
    controlsTop: p,
    controlsBottom: a,
    loadingSpinner: i,
    activePlugins: /* @__PURE__ */ new Map()
  };
}, F = /* @__PURE__ */ new Map();
class j {
  constructor(t) {
    T(this, "_dataStore"), T(this, "getDataStore", () => this._dataStore), T(this, "addPlugin", (n, u) => {
      if (F.has(n) && !this._dataStore.activePlugins.has(n)) {
        const h = F.get(n), p = new h();
        return p.add(this._dataStore, u), this._dataStore.activePlugins.set(n, p), !0;
      }
      return !1;
    }), T(this, "removePlugin", (n, u) => F.has(n) && this._dataStore.activePlugins.has(n) ? (this._dataStore.activePlugins.get(n).remove(this._dataStore, u), this._dataStore.activePlugins.delete(n), !0) : !1), T(this, "getPlugin", (n) => {
      if (this._dataStore.activePlugins.has(n))
        return this._dataStore.activePlugins.get(n);
    }), this._dataStore = Jt(t), t.removeAttribute("controls"), Zt(this._dataStore);
  }
}
T(j, "Version", Ut.version), T(j, "canPlayType", jt), T(j, "CanPlayTypes", vt), T(j, "registerPlugin", (e) => F.has(e.Name) ? !1 : (F.set(e.Name, e), !0)), T(j, "unregisterPlugin", (e) => F.has(e) ? (F.delete(e), !0) : !1);
var Qt = Object.defineProperty, Yt = (e, t, n) => t in e ? Qt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, M = (e, t, n) => (Yt(e, typeof t != "symbol" ? t + "" : t, n), n);
const Xt = async (e) => {
  let t = "https://imasdk.googleapis.com/js/sdkloader/ima3.js";
  return e === !0 && (t = "https://imasdk.googleapis.com/js/sdkloader/ima3_debug.js"), await new Promise((n, u) => {
    if (document.getElementById("ima3-sdk") !== null) {
      n(window.google);
      return;
    }
    const h = document.createElement("script");
    h.id = "ima3-sdk", h.async = !0, h.addEventListener("load", function() {
      n(window.google);
    }), h.addEventListener("error", function() {
      this.remove(), u(new Error(`${t} could not be loaded`));
    }), h.src = t, document.head.appendChild(h);
  });
}, er = "@mistweaverco/cheza.js-ima-plugin", tr = "1.0.5", rr = "types/index.d.ts", nr = [
  "dist",
  "types"
], ir = "dist/cheza.js-ima-plugin.mjs", or = {
  dev: "vite",
  build: "tsc && vite build",
  release: "tsc && vite build && npm publish --access public"
}, sr = {
  handlebars: "4.7.7"
}, ar = {
  name: er,
  version: tr,
  types: rr,
  files: nr,
  main: ir,
  scripts: or,
  dependencies: sr
}, lr = (e) => ({
  dispatch: (t, n) => {
    let u;
    n !== void 0 && (u = { detail: n });
    const h = new CustomEvent(`cheza:ima:${t}`, u);
    e.dispatchEvent(h);
  }
});
var A = /* @__PURE__ */ ((e) => (e.AD_ERROR = "adError", e.AD_CAN_PLAY = "adCanPlay", e.AD_BUFFERING = "adBuffering", e.AD_METADATA = "adMetadata", e.AD_PROGRESS = "adProgress", e.AD_CLICK = "adClick", e.AD_COMPLETE = "adComplete", e.AD_SKIPPED = "adSkipped", e.AD_FIRST_QUARTILE = "adFirstQuartile", e.AD_MIDPOINT = "adMidpoint", e.AD_THIRD_QUARTILE = "adThirdQuartile", e.AD_LOADED = "adLoaded", e.AD_STARTED = "adStarted", e.AD_PAUSED = "adPaused", e.AD_RESUMED = "adResumed", e.AD_VOLUME_CHANGED = "adVolumeChanged", e.AD_VOLUME_MUTED = "adVolumeMuted", e))(A || {}), Q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ur(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var we = { exports: {} }, xe = { exports: {} }, D = {}, x = {};
x.__esModule = !0;
x.extend = yt;
x.indexOf = mr;
x.escapeExpression = fr;
x.isEmpty = gr;
x.createFrame = vr;
x.blockParams = yr;
x.appendContextPath = _r;
var cr = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;",
  "=": "&#x3D;"
}, pr = /[&<>"'`=]/g, hr = /[&<>"'`=]/;
function dr(e) {
  return cr[e];
}
function yt(e) {
  for (var t = 1; t < arguments.length; t++)
    for (var n in arguments[t])
      Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
  return e;
}
var Ge = Object.prototype.toString;
x.toString = Ge;
var Ce = function(e) {
  return typeof e == "function";
};
Ce(/x/) && (x.isFunction = Ce = function(e) {
  return typeof e == "function" && Ge.call(e) === "[object Function]";
});
x.isFunction = Ce;
var _t = Array.isArray || function(e) {
  return e && typeof e == "object" ? Ge.call(e) === "[object Array]" : !1;
};
x.isArray = _t;
function mr(e, t) {
  for (var n = 0, u = e.length; n < u; n++)
    if (e[n] === t)
      return n;
  return -1;
}
function fr(e) {
  if (typeof e != "string") {
    if (e && e.toHTML)
      return e.toHTML();
    if (e == null)
      return "";
    if (!e)
      return e + "";
    e = "" + e;
  }
  return hr.test(e) ? e.replace(pr, dr) : e;
}
function gr(e) {
  return !e && e !== 0 ? !0 : !!(_t(e) && e.length === 0);
}
function vr(e) {
  var t = yt({}, e);
  return t._parent = e, t;
}
function yr(e, t) {
  return e.path = t, e;
}
function _r(e, t) {
  return (e ? e + "." : "") + t;
}
var R = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  var n = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
  function u(h, p) {
    var a = p && p.loc, i = void 0, c = void 0, s = void 0, d = void 0;
    a && (i = a.start.line, c = a.end.line, s = a.start.column, d = a.end.column, h += " - " + i + ":" + s);
    for (var o = Error.prototype.constructor.call(this, h), l = 0; l < n.length; l++)
      this[n[l]] = o[n[l]];
    Error.captureStackTrace && Error.captureStackTrace(this, u);
    try {
      a && (this.lineNumber = i, this.endLineNumber = c, Object.defineProperty ? (Object.defineProperty(this, "column", {
        value: s,
        enumerable: !0
      }), Object.defineProperty(this, "endColumn", {
        value: d,
        enumerable: !0
      })) : (this.column = s, this.endColumn = d));
    } catch {
    }
  }
  u.prototype = new Error(), t.default = u, e.exports = t.default;
})(R, R.exports);
var te = {}, Pe = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  var n = x;
  t.default = function(u) {
    u.registerHelper("blockHelperMissing", function(h, p) {
      var a = p.inverse, i = p.fn;
      if (h === !0)
        return i(this);
      if (h === !1 || h == null)
        return a(this);
      if (n.isArray(h))
        return h.length > 0 ? (p.ids && (p.ids = [p.name]), u.helpers.each(h, p)) : a(this);
      if (p.data && p.ids) {
        var c = n.createFrame(p.data);
        c.contextPath = n.appendContextPath(p.data.contextPath, p.name), p = { data: c };
      }
      return i(h, p);
    });
  }, e.exports = t.default;
})(Pe, Pe.exports);
var Ae = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var u = x, h = R.exports, p = n(h);
  t.default = function(a) {
    a.registerHelper("each", function(i, c) {
      if (!c)
        throw new p.default("Must pass iterator to #each");
      var s = c.fn, d = c.inverse, o = 0, l = "", r = void 0, m = void 0;
      c.data && c.ids && (m = u.appendContextPath(c.data.contextPath, c.ids[0]) + "."), u.isFunction(i) && (i = i.call(this)), c.data && (r = u.createFrame(c.data));
      function f(g, S, E) {
        r && (r.key = g, r.index = S, r.first = S === 0, r.last = !!E, m && (r.contextPath = m + g)), l = l + s(i[g], {
          data: r,
          blockParams: u.blockParams([i[g], g], [m + g, null])
        });
      }
      if (i && typeof i == "object")
        if (u.isArray(i))
          for (var y = i.length; o < y; o++)
            o in i && f(o, o, o === i.length - 1);
        else if (Q.Symbol && i[Q.Symbol.iterator]) {
          for (var v = [], _ = i[Q.Symbol.iterator](), b = _.next(); !b.done; b = _.next())
            v.push(b.value);
          i = v;
          for (var y = i.length; o < y; o++)
            f(o, o, o === i.length - 1);
        } else
          (function() {
            var g = void 0;
            Object.keys(i).forEach(function(S) {
              g !== void 0 && f(g, o - 1), g = S, o++;
            }), g !== void 0 && f(g, o - 1, !0);
          })();
      return o === 0 && (l = d(this)), l;
    });
  }, e.exports = t.default;
})(Ae, Ae.exports);
var Me = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  function n(p) {
    return p && p.__esModule ? p : { default: p };
  }
  var u = R.exports, h = n(u);
  t.default = function(p) {
    p.registerHelper("helperMissing", function() {
      if (arguments.length !== 1)
        throw new h.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    });
  }, e.exports = t.default;
})(Me, Me.exports);
var Oe = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var u = x, h = R.exports, p = n(h);
  t.default = function(a) {
    a.registerHelper("if", function(i, c) {
      if (arguments.length != 2)
        throw new p.default("#if requires exactly one argument");
      return u.isFunction(i) && (i = i.call(this)), !c.hash.includeZero && !i || u.isEmpty(i) ? c.inverse(this) : c.fn(this);
    }), a.registerHelper("unless", function(i, c) {
      if (arguments.length != 2)
        throw new p.default("#unless requires exactly one argument");
      return a.helpers.if.call(this, i, {
        fn: c.inverse,
        inverse: c.fn,
        hash: c.hash
      });
    });
  }, e.exports = t.default;
})(Oe, Oe.exports);
var Re = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = function(n) {
    n.registerHelper("log", function() {
      for (var u = [void 0], h = arguments[arguments.length - 1], p = 0; p < arguments.length - 1; p++)
        u.push(arguments[p]);
      var a = 1;
      h.hash.level != null ? a = h.hash.level : h.data && h.data.level != null && (a = h.data.level), u[0] = a, n.log.apply(n, u);
    });
  }, e.exports = t.default;
})(Re, Re.exports);
var Ie = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = function(n) {
    n.registerHelper("lookup", function(u, h, p) {
      return u && p.lookupProperty(u, h);
    });
  }, e.exports = t.default;
})(Ie, Ie.exports);
var De = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var u = x, h = R.exports, p = n(h);
  t.default = function(a) {
    a.registerHelper("with", function(i, c) {
      if (arguments.length != 2)
        throw new p.default("#with requires exactly one argument");
      u.isFunction(i) && (i = i.call(this));
      var s = c.fn;
      if (u.isEmpty(i))
        return c.inverse(this);
      var d = c.data;
      return c.data && c.ids && (d = u.createFrame(c.data), d.contextPath = u.appendContextPath(c.data.contextPath, c.ids[0])), s(i, {
        data: d,
        blockParams: u.blockParams([i], [d && d.contextPath])
      });
    });
  }, e.exports = t.default;
})(De, De.exports);
te.__esModule = !0;
te.registerDefaultHelpers = Dr;
te.moveHelperToHooks = Nr;
function z(e) {
  return e && e.__esModule ? e : { default: e };
}
var Sr = Pe.exports, br = z(Sr), Er = Ae.exports, kr = z(Er), Lr = Me.exports, wr = z(Lr), xr = Oe.exports, Cr = z(xr), Pr = Re.exports, Ar = z(Pr), Mr = Ie.exports, Or = z(Mr), Rr = De.exports, Ir = z(Rr);
function Dr(e) {
  br.default(e), kr.default(e), wr.default(e), Cr.default(e), Ar.default(e), Or.default(e), Ir.default(e);
}
function Nr(e, t, n) {
  e.helpers[t] && (e.hooks[t] = e.helpers[t], n || delete e.helpers[t]);
}
var qe = {}, Ne = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  var n = x;
  t.default = function(u) {
    u.registerDecorator("inline", function(h, p, a, i) {
      var c = h;
      return p.partials || (p.partials = {}, c = function(s, d) {
        var o = a.partials;
        a.partials = n.extend({}, o, p.partials);
        var l = h(s, d);
        return a.partials = o, l;
      }), p.partials[i.args[0]] = i.fn, c;
    });
  }, e.exports = t.default;
})(Ne, Ne.exports);
qe.__esModule = !0;
qe.registerDefaultDecorators = Hr;
function Tr(e) {
  return e && e.__esModule ? e : { default: e };
}
var Br = Ne.exports, $r = Tr(Br);
function Hr(e) {
  $r.default(e);
}
var ce = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  var n = x, u = {
    methodMap: ["debug", "info", "warn", "error"],
    level: "info",
    lookupLevel: function(h) {
      if (typeof h == "string") {
        var p = n.indexOf(u.methodMap, h.toLowerCase());
        p >= 0 ? h = p : h = parseInt(h, 10);
      }
      return h;
    },
    log: function(h) {
      if (h = u.lookupLevel(h), typeof console < "u" && u.lookupLevel(u.level) <= h) {
        var p = u.methodMap[h];
        console[p] || (p = "log");
        for (var a = arguments.length, i = Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
          i[c - 1] = arguments[c];
        console[p].apply(console, i);
      }
    }
  };
  t.default = u, e.exports = t.default;
})(ce, ce.exports);
var W = {}, Ke = {};
Ke.__esModule = !0;
Ke.createNewLookupObject = Ur;
var Vr = x;
function Ur() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Vr.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(t));
}
W.__esModule = !0;
W.createProtoAccessControl = Gr;
W.resultIsAllowed = qr;
W.resetLoggedProperties = Zr;
function jr(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  return t.default = e, t;
}
var Qe = Ke, Fr = ce.exports, zr = jr(Fr), pe = /* @__PURE__ */ Object.create(null);
function Gr(e) {
  var t = /* @__PURE__ */ Object.create(null);
  t.constructor = !1, t.__defineGetter__ = !1, t.__defineSetter__ = !1, t.__lookupGetter__ = !1;
  var n = /* @__PURE__ */ Object.create(null);
  return n.__proto__ = !1, {
    properties: {
      whitelist: Qe.createNewLookupObject(n, e.allowedProtoProperties),
      defaultValue: e.allowProtoPropertiesByDefault
    },
    methods: {
      whitelist: Qe.createNewLookupObject(t, e.allowedProtoMethods),
      defaultValue: e.allowProtoMethodsByDefault
    }
  };
}
function qr(e, t, n) {
  return Kr(typeof e == "function" ? t.methods : t.properties, n);
}
function Kr(e, t) {
  return e.whitelist[t] !== void 0 ? e.whitelist[t] === !0 : e.defaultValue !== void 0 ? e.defaultValue : (Wr(t), !1);
}
function Wr(e) {
  pe[e] !== !0 && (pe[e] = !0, zr.log("error", 'Handlebars: Access has been denied to resolve the property "' + e + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
}
function Zr() {
  Object.keys(pe).forEach(function(e) {
    delete pe[e];
  });
}
D.__esModule = !0;
D.HandlebarsEnvironment = Te;
function St(e) {
  return e && e.__esModule ? e : { default: e };
}
var U = x, Jr = R.exports, ge = St(Jr), Qr = te, Yr = qe, Xr = ce.exports, he = St(Xr), en = W, tn = "4.7.7";
D.VERSION = tn;
var rn = 8;
D.COMPILER_REVISION = rn;
var nn = 7;
D.LAST_COMPATIBLE_COMPILER_REVISION = nn;
var on = {
  1: "<= 1.0.rc.2",
  2: "== 1.0.0-rc.3",
  3: "== 1.0.0-rc.4",
  4: "== 1.x.x",
  5: "== 2.0.0-alpha.x",
  6: ">= 2.0.0-beta.1",
  7: ">= 4.0.0 <4.3.0",
  8: ">= 4.3.0"
};
D.REVISION_CHANGES = on;
var ve = "[object Object]";
function Te(e, t, n) {
  this.helpers = e || {}, this.partials = t || {}, this.decorators = n || {}, Qr.registerDefaultHelpers(this), Yr.registerDefaultDecorators(this);
}
Te.prototype = {
  constructor: Te,
  logger: he.default,
  log: he.default.log,
  registerHelper: function(e, t) {
    if (U.toString.call(e) === ve) {
      if (t)
        throw new ge.default("Arg not supported with multiple helpers");
      U.extend(this.helpers, e);
    } else
      this.helpers[e] = t;
  },
  unregisterHelper: function(e) {
    delete this.helpers[e];
  },
  registerPartial: function(e, t) {
    if (U.toString.call(e) === ve)
      U.extend(this.partials, e);
    else {
      if (typeof t > "u")
        throw new ge.default('Attempting to register a partial called "' + e + '" as undefined');
      this.partials[e] = t;
    }
  },
  unregisterPartial: function(e) {
    delete this.partials[e];
  },
  registerDecorator: function(e, t) {
    if (U.toString.call(e) === ve) {
      if (t)
        throw new ge.default("Arg not supported with multiple decorators");
      U.extend(this.decorators, e);
    } else
      this.decorators[e] = t;
  },
  unregisterDecorator: function(e) {
    delete this.decorators[e];
  },
  resetLoggedPropertyAccesses: function() {
    en.resetLoggedProperties();
  }
};
var sn = he.default.log;
D.log = sn;
D.createFrame = U.createFrame;
D.logger = he.default;
var Be = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  function n(u) {
    this.string = u;
  }
  n.prototype.toString = n.prototype.toHTML = function() {
    return "" + this.string;
  }, t.default = n, e.exports = t.default;
})(Be, Be.exports);
var V = {}, We = {};
We.__esModule = !0;
We.wrapHelper = an;
function an(e, t) {
  if (typeof e != "function")
    return e;
  var n = function() {
    var u = arguments[arguments.length - 1];
    return arguments[arguments.length - 1] = t(u), e.apply(this, arguments);
  };
  return n;
}
V.__esModule = !0;
V.checkRevision = dn;
V.template = mn;
V.wrapProgram = le;
V.resolvePartial = fn;
V.invokePartial = gn;
V.noop = bt;
function ln(e) {
  return e && e.__esModule ? e : { default: e };
}
function un(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  return t.default = e, t;
}
var cn = x, B = un(cn), pn = R.exports, $ = ln(pn), H = D, Ye = te, hn = We, Xe = W;
function dn(e) {
  var t = e && e[0] || 1, n = H.COMPILER_REVISION;
  if (!(t >= H.LAST_COMPATIBLE_COMPILER_REVISION && t <= H.COMPILER_REVISION))
    if (t < H.LAST_COMPATIBLE_COMPILER_REVISION) {
      var u = H.REVISION_CHANGES[n], h = H.REVISION_CHANGES[t];
      throw new $.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + u + ") or downgrade your runtime to an older version (" + h + ").");
    } else
      throw new $.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").");
}
function mn(e, t) {
  if (!t)
    throw new $.default("No environment passed to template");
  if (!e || !e.main)
    throw new $.default("Unknown template object: " + typeof e);
  e.main.decorator = e.main_d, t.VM.checkRevision(e.compiler);
  var n = e.compiler && e.compiler[0] === 7;
  function u(a, i, c) {
    c.hash && (i = B.extend({}, i, c.hash), c.ids && (c.ids[0] = !0)), a = t.VM.resolvePartial.call(this, a, i, c);
    var s = B.extend({}, c, {
      hooks: this.hooks,
      protoAccessControl: this.protoAccessControl
    }), d = t.VM.invokePartial.call(this, a, i, s);
    if (d == null && t.compile && (c.partials[c.name] = t.compile(a, e.compilerOptions, t), d = c.partials[c.name](i, s)), d != null) {
      if (c.indent) {
        for (var o = d.split(`
`), l = 0, r = o.length; l < r && !(!o[l] && l + 1 === r); l++)
          o[l] = c.indent + o[l];
        d = o.join(`
`);
      }
      return d;
    } else
      throw new $.default("The partial " + c.name + " could not be compiled when running in runtime-only mode");
  }
  var h = {
    strict: function(a, i, c) {
      if (!a || !(i in a))
        throw new $.default('"' + i + '" not defined in ' + a, {
          loc: c
        });
      return h.lookupProperty(a, i);
    },
    lookupProperty: function(a, i) {
      var c = a[i];
      if (c == null || Object.prototype.hasOwnProperty.call(a, i) || Xe.resultIsAllowed(c, h.protoAccessControl, i))
        return c;
    },
    lookup: function(a, i) {
      for (var c = a.length, s = 0; s < c; s++) {
        var d = a[s] && h.lookupProperty(a[s], i);
        if (d != null)
          return a[s][i];
      }
    },
    lambda: function(a, i) {
      return typeof a == "function" ? a.call(i) : a;
    },
    escapeExpression: B.escapeExpression,
    invokePartial: u,
    fn: function(a) {
      var i = e[a];
      return i.decorator = e[a + "_d"], i;
    },
    programs: [],
    program: function(a, i, c, s, d) {
      var o = this.programs[a], l = this.fn(a);
      return i || d || s || c ? o = le(this, a, l, i, c, s, d) : o || (o = this.programs[a] = le(this, a, l)), o;
    },
    data: function(a, i) {
      for (; a && i--; )
        a = a._parent;
      return a;
    },
    mergeIfNeeded: function(a, i) {
      var c = a || i;
      return a && i && a !== i && (c = B.extend({}, i, a)), c;
    },
    nullContext: Object.seal({}),
    noop: t.VM.noop,
    compilerInfo: e.compiler
  };
  function p(a) {
    var i = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], c = i.data;
    p._setup(i), !i.partial && e.useData && (c = vn(a, c));
    var s = void 0, d = e.useBlockParams ? [] : void 0;
    e.useDepths && (i.depths ? s = a != i.depths[0] ? [a].concat(i.depths) : i.depths : s = [a]);
    function o(l) {
      return "" + e.main(h, l, h.helpers, h.partials, c, d, s);
    }
    return o = Et(e.main, o, h, i.depths || [], c, d), o(a, i);
  }
  return p.isTop = !0, p._setup = function(a) {
    if (a.partial)
      h.protoAccessControl = a.protoAccessControl, h.helpers = a.helpers, h.partials = a.partials, h.decorators = a.decorators, h.hooks = a.hooks;
    else {
      var i = B.extend({}, t.helpers, a.helpers);
      yn(i, h), h.helpers = i, e.usePartial && (h.partials = h.mergeIfNeeded(a.partials, t.partials)), (e.usePartial || e.useDecorators) && (h.decorators = B.extend({}, t.decorators, a.decorators)), h.hooks = {}, h.protoAccessControl = Xe.createProtoAccessControl(a);
      var c = a.allowCallsToHelperMissing || n;
      Ye.moveHelperToHooks(h, "helperMissing", c), Ye.moveHelperToHooks(h, "blockHelperMissing", c);
    }
  }, p._child = function(a, i, c, s) {
    if (e.useBlockParams && !c)
      throw new $.default("must pass block params");
    if (e.useDepths && !s)
      throw new $.default("must pass parent depths");
    return le(h, a, e[a], i, 0, c, s);
  }, p;
}
function le(e, t, n, u, h, p, a) {
  function i(c) {
    var s = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], d = a;
    return a && c != a[0] && !(c === e.nullContext && a[0] === null) && (d = [c].concat(a)), n(e, c, e.helpers, e.partials, s.data || u, p && [s.blockParams].concat(p), d);
  }
  return i = Et(n, i, e, a, u, p), i.program = t, i.depth = a ? a.length : 0, i.blockParams = h || 0, i;
}
function fn(e, t, n) {
  return e ? !e.call && !n.name && (n.name = e, e = n.partials[e]) : n.name === "@partial-block" ? e = n.data["partial-block"] : e = n.partials[n.name], e;
}
function gn(e, t, n) {
  var u = n.data && n.data["partial-block"];
  n.partial = !0, n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
  var h = void 0;
  if (n.fn && n.fn !== bt && function() {
    n.data = H.createFrame(n.data);
    var p = n.fn;
    h = n.data["partial-block"] = function(a) {
      var i = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
      return i.data = H.createFrame(i.data), i.data["partial-block"] = u, p(a, i);
    }, p.partials && (n.partials = B.extend({}, n.partials, p.partials));
  }(), e === void 0 && h && (e = h), e === void 0)
    throw new $.default("The partial " + n.name + " could not be found");
  if (e instanceof Function)
    return e(t, n);
}
function bt() {
  return "";
}
function vn(e, t) {
  return (!t || !("root" in t)) && (t = t ? H.createFrame(t) : {}, t.root = e), t;
}
function Et(e, t, n, u, h, p) {
  if (e.decorator) {
    var a = {};
    t = e.decorator(t, a, n, u && u[0], h, p, u), B.extend(t, a);
  }
  return t;
}
function yn(e, t) {
  Object.keys(e).forEach(function(n) {
    var u = e[n];
    e[n] = _n(u, t);
  });
}
function _n(e, t) {
  var n = t.lookupProperty;
  return hn.wrapHelper(e, function(u) {
    return B.extend({ lookupProperty: n }, u);
  });
}
var de = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = function(n) {
    var u = typeof Q < "u" ? Q : window, h = u.Handlebars;
    n.noConflict = function() {
      return u.Handlebars === n && (u.Handlebars = h), n;
    };
  }, e.exports = t.default;
})(de, de.exports);
(function(e, t) {
  t.__esModule = !0;
  function n(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  function u(_) {
    if (_ && _.__esModule)
      return _;
    var b = {};
    if (_ != null)
      for (var g in _)
        Object.prototype.hasOwnProperty.call(_, g) && (b[g] = _[g]);
    return b.default = _, b;
  }
  var h = D, p = u(h), a = Be.exports, i = n(a), c = R.exports, s = n(c), d = x, o = u(d), l = V, r = u(l), m = de.exports, f = n(m);
  function y() {
    var _ = new p.HandlebarsEnvironment();
    return o.extend(_, p), _.SafeString = i.default, _.Exception = s.default, _.Utils = o, _.escapeExpression = o.escapeExpression, _.VM = r, _.template = function(b) {
      return r.template(b, _);
    }, _;
  }
  var v = y();
  v.create = y, f.default(v), v.default = v, t.default = v, e.exports = t.default;
})(xe, xe.exports);
var me = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  var n = {
    helpers: {
      helperExpression: function(u) {
        return u.type === "SubExpression" || (u.type === "MustacheStatement" || u.type === "BlockStatement") && !!(u.params && u.params.length || u.hash);
      },
      scopedId: function(u) {
        return /^\.|this\b/.test(u.original);
      },
      simpleId: function(u) {
        return u.parts.length === 1 && !n.helpers.scopedId(u) && !u.depth;
      }
    }
  };
  t.default = n, e.exports = t.default;
})(me, me.exports);
var re = {}, $e = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  var n = function() {
    var u = {
      trace: function() {
      },
      yy: {},
      symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
      terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
      productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
      performAction: function(a, i, c, s, d, o, l) {
        var r = o.length - 1;
        switch (d) {
          case 1:
            return o[r - 1];
          case 2:
            this.$ = s.prepareProgram(o[r]);
            break;
          case 3:
            this.$ = o[r];
            break;
          case 4:
            this.$ = o[r];
            break;
          case 5:
            this.$ = o[r];
            break;
          case 6:
            this.$ = o[r];
            break;
          case 7:
            this.$ = o[r];
            break;
          case 8:
            this.$ = o[r];
            break;
          case 9:
            this.$ = {
              type: "CommentStatement",
              value: s.stripComment(o[r]),
              strip: s.stripFlags(o[r], o[r]),
              loc: s.locInfo(this._$)
            };
            break;
          case 10:
            this.$ = {
              type: "ContentStatement",
              original: o[r],
              value: o[r],
              loc: s.locInfo(this._$)
            };
            break;
          case 11:
            this.$ = s.prepareRawBlock(o[r - 2], o[r - 1], o[r], this._$);
            break;
          case 12:
            this.$ = { path: o[r - 3], params: o[r - 2], hash: o[r - 1] };
            break;
          case 13:
            this.$ = s.prepareBlock(o[r - 3], o[r - 2], o[r - 1], o[r], !1, this._$);
            break;
          case 14:
            this.$ = s.prepareBlock(o[r - 3], o[r - 2], o[r - 1], o[r], !0, this._$);
            break;
          case 15:
            this.$ = { open: o[r - 5], path: o[r - 4], params: o[r - 3], hash: o[r - 2], blockParams: o[r - 1], strip: s.stripFlags(o[r - 5], o[r]) };
            break;
          case 16:
            this.$ = { path: o[r - 4], params: o[r - 3], hash: o[r - 2], blockParams: o[r - 1], strip: s.stripFlags(o[r - 5], o[r]) };
            break;
          case 17:
            this.$ = { path: o[r - 4], params: o[r - 3], hash: o[r - 2], blockParams: o[r - 1], strip: s.stripFlags(o[r - 5], o[r]) };
            break;
          case 18:
            this.$ = { strip: s.stripFlags(o[r - 1], o[r - 1]), program: o[r] };
            break;
          case 19:
            var m = s.prepareBlock(o[r - 2], o[r - 1], o[r], o[r], !1, this._$), f = s.prepareProgram([m], o[r - 1].loc);
            f.chained = !0, this.$ = { strip: o[r - 2].strip, program: f, chain: !0 };
            break;
          case 20:
            this.$ = o[r];
            break;
          case 21:
            this.$ = { path: o[r - 1], strip: s.stripFlags(o[r - 2], o[r]) };
            break;
          case 22:
            this.$ = s.prepareMustache(o[r - 3], o[r - 2], o[r - 1], o[r - 4], s.stripFlags(o[r - 4], o[r]), this._$);
            break;
          case 23:
            this.$ = s.prepareMustache(o[r - 3], o[r - 2], o[r - 1], o[r - 4], s.stripFlags(o[r - 4], o[r]), this._$);
            break;
          case 24:
            this.$ = {
              type: "PartialStatement",
              name: o[r - 3],
              params: o[r - 2],
              hash: o[r - 1],
              indent: "",
              strip: s.stripFlags(o[r - 4], o[r]),
              loc: s.locInfo(this._$)
            };
            break;
          case 25:
            this.$ = s.preparePartialBlock(o[r - 2], o[r - 1], o[r], this._$);
            break;
          case 26:
            this.$ = { path: o[r - 3], params: o[r - 2], hash: o[r - 1], strip: s.stripFlags(o[r - 4], o[r]) };
            break;
          case 27:
            this.$ = o[r];
            break;
          case 28:
            this.$ = o[r];
            break;
          case 29:
            this.$ = {
              type: "SubExpression",
              path: o[r - 3],
              params: o[r - 2],
              hash: o[r - 1],
              loc: s.locInfo(this._$)
            };
            break;
          case 30:
            this.$ = { type: "Hash", pairs: o[r], loc: s.locInfo(this._$) };
            break;
          case 31:
            this.$ = { type: "HashPair", key: s.id(o[r - 2]), value: o[r], loc: s.locInfo(this._$) };
            break;
          case 32:
            this.$ = s.id(o[r - 1]);
            break;
          case 33:
            this.$ = o[r];
            break;
          case 34:
            this.$ = o[r];
            break;
          case 35:
            this.$ = { type: "StringLiteral", value: o[r], original: o[r], loc: s.locInfo(this._$) };
            break;
          case 36:
            this.$ = { type: "NumberLiteral", value: Number(o[r]), original: Number(o[r]), loc: s.locInfo(this._$) };
            break;
          case 37:
            this.$ = { type: "BooleanLiteral", value: o[r] === "true", original: o[r] === "true", loc: s.locInfo(this._$) };
            break;
          case 38:
            this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: s.locInfo(this._$) };
            break;
          case 39:
            this.$ = { type: "NullLiteral", original: null, value: null, loc: s.locInfo(this._$) };
            break;
          case 40:
            this.$ = o[r];
            break;
          case 41:
            this.$ = o[r];
            break;
          case 42:
            this.$ = s.preparePath(!0, o[r], this._$);
            break;
          case 43:
            this.$ = s.preparePath(!1, o[r], this._$);
            break;
          case 44:
            o[r - 2].push({ part: s.id(o[r]), original: o[r], separator: o[r - 1] }), this.$ = o[r - 2];
            break;
          case 45:
            this.$ = [{ part: s.id(o[r]), original: o[r] }];
            break;
          case 46:
            this.$ = [];
            break;
          case 47:
            o[r - 1].push(o[r]);
            break;
          case 48:
            this.$ = [];
            break;
          case 49:
            o[r - 1].push(o[r]);
            break;
          case 50:
            this.$ = [];
            break;
          case 51:
            o[r - 1].push(o[r]);
            break;
          case 58:
            this.$ = [];
            break;
          case 59:
            o[r - 1].push(o[r]);
            break;
          case 64:
            this.$ = [];
            break;
          case 65:
            o[r - 1].push(o[r]);
            break;
          case 70:
            this.$ = [];
            break;
          case 71:
            o[r - 1].push(o[r]);
            break;
          case 78:
            this.$ = [];
            break;
          case 79:
            o[r - 1].push(o[r]);
            break;
          case 82:
            this.$ = [];
            break;
          case 83:
            o[r - 1].push(o[r]);
            break;
          case 86:
            this.$ = [];
            break;
          case 87:
            o[r - 1].push(o[r]);
            break;
          case 90:
            this.$ = [];
            break;
          case 91:
            o[r - 1].push(o[r]);
            break;
          case 94:
            this.$ = [];
            break;
          case 95:
            o[r - 1].push(o[r]);
            break;
          case 98:
            this.$ = [o[r]];
            break;
          case 99:
            o[r - 1].push(o[r]);
            break;
          case 100:
            this.$ = [o[r]];
            break;
          case 101:
            o[r - 1].push(o[r]);
            break;
        }
      },
      table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
      defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
      parseError: function(a, i) {
        throw new Error(a);
      },
      parse: function(a) {
        var i = this, c = [0], s = [null], d = [], o = this.table, l = "", r = 0, m = 0;
        this.lexer.setInput(a), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
        var f = this.lexer.yylloc;
        d.push(f);
        var y = this.lexer.options && this.lexer.options.ranges;
        typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
        function v() {
          var G;
          return G = i.lexer.lex() || 1, typeof G != "number" && (G = i.symbols_[G] || G), G;
        }
        for (var _, b, g, S, E = {}, k, L, w, P; ; ) {
          if (b = c[c.length - 1], this.defaultActions[b] ? g = this.defaultActions[b] : ((_ === null || typeof _ > "u") && (_ = v()), g = o[b] && o[b][_]), typeof g > "u" || !g.length || !g[0]) {
            var O = "";
            {
              P = [];
              for (k in o[b])
                this.terminals_[k] && k > 2 && P.push("'" + this.terminals_[k] + "'");
              this.lexer.showPosition ? O = "Parse error on line " + (r + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + P.join(", ") + ", got '" + (this.terminals_[_] || _) + "'" : O = "Parse error on line " + (r + 1) + ": Unexpected " + (_ == 1 ? "end of input" : "'" + (this.terminals_[_] || _) + "'"), this.parseError(O, { text: this.lexer.match, token: this.terminals_[_] || _, line: this.lexer.yylineno, loc: f, expected: P });
            }
          }
          if (g[0] instanceof Array && g.length > 1)
            throw new Error("Parse Error: multiple actions possible at state: " + b + ", token: " + _);
          switch (g[0]) {
            case 1:
              c.push(_), s.push(this.lexer.yytext), d.push(this.lexer.yylloc), c.push(g[1]), _ = null, m = this.lexer.yyleng, l = this.lexer.yytext, r = this.lexer.yylineno, f = this.lexer.yylloc;
              break;
            case 2:
              if (L = this.productions_[g[1]][1], E.$ = s[s.length - L], E._$ = { first_line: d[d.length - (L || 1)].first_line, last_line: d[d.length - 1].last_line, first_column: d[d.length - (L || 1)].first_column, last_column: d[d.length - 1].last_column }, y && (E._$.range = [d[d.length - (L || 1)].range[0], d[d.length - 1].range[1]]), S = this.performAction.call(E, l, m, r, this.yy, g[1], s, d), typeof S < "u")
                return S;
              L && (c = c.slice(0, -1 * L * 2), s = s.slice(0, -1 * L), d = d.slice(0, -1 * L)), c.push(this.productions_[g[1]][0]), s.push(E.$), d.push(E._$), w = o[c[c.length - 2]][c[c.length - 1]], c.push(w);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }
    }, h = function() {
      var a = {
        EOF: 1,
        parseError: function(i, c) {
          if (this.yy.parser)
            this.yy.parser.parseError(i, c);
          else
            throw new Error(i);
        },
        setInput: function(i) {
          return this._input = i, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
        },
        input: function() {
          var i = this._input[0];
          this.yytext += i, this.yyleng++, this.offset++, this.match += i, this.matched += i;
          var c = i.match(/(?:\r\n?|\n).*/g);
          return c ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), i;
        },
        unput: function(i) {
          var c = i.length, s = i.split(/(?:\r\n?|\n)/g);
          this._input = i + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - c - 1), this.offset -= c;
          var d = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), s.length - 1 && (this.yylineno -= s.length - 1);
          var o = this.yylloc.range;
          return this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: s ? (s.length === d.length ? this.yylloc.first_column : 0) + d[d.length - s.length].length - s[0].length : this.yylloc.first_column - c
          }, this.options.ranges && (this.yylloc.range = [o[0], o[0] + this.yyleng - c]), this;
        },
        more: function() {
          return this._more = !0, this;
        },
        less: function(i) {
          this.unput(this.match.slice(i));
        },
        pastInput: function() {
          var i = this.matched.substr(0, this.matched.length - this.match.length);
          return (i.length > 20 ? "..." : "") + i.substr(-20).replace(/\n/g, "");
        },
        upcomingInput: function() {
          var i = this.match;
          return i.length < 20 && (i += this._input.substr(0, 20 - i.length)), (i.substr(0, 20) + (i.length > 20 ? "..." : "")).replace(/\n/g, "");
        },
        showPosition: function() {
          var i = this.pastInput(), c = new Array(i.length + 1).join("-");
          return i + this.upcomingInput() + `
` + c + "^";
        },
        next: function() {
          if (this.done)
            return this.EOF;
          this._input || (this.done = !0);
          var i, c, s, d, o;
          this._more || (this.yytext = "", this.match = "");
          for (var l = this._currentRules(), r = 0; r < l.length && (s = this._input.match(this.rules[l[r]]), !(s && (!c || s[0].length > c[0].length) && (c = s, d = r, !this.options.flex))); r++)
            ;
          return c ? (o = c[0].match(/(?:\r\n?|\n).*/g), o && (this.yylineno += o.length), this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: o ? o[o.length - 1].length - o[o.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + c[0].length
          }, this.yytext += c[0], this.match += c[0], this.matches = c, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(c[0].length), this.matched += c[0], i = this.performAction.call(this, this.yy, this, l[d], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), i || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
        },
        lex: function() {
          var i = this.next();
          return typeof i < "u" ? i : this.lex();
        },
        begin: function(i) {
          this.conditionStack.push(i);
        },
        popState: function() {
          return this.conditionStack.pop();
        },
        _currentRules: function() {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        },
        topState: function() {
          return this.conditionStack[this.conditionStack.length - 2];
        },
        pushState: function(i) {
          this.begin(i);
        }
      };
      return a.options = {}, a.performAction = function(i, c, s, d) {
        function o(l, r) {
          return c.yytext = c.yytext.substring(l, c.yyleng - r + l);
        }
        switch (s) {
          case 0:
            if (c.yytext.slice(-2) === "\\\\" ? (o(0, 1), this.begin("mu")) : c.yytext.slice(-1) === "\\" ? (o(0, 1), this.begin("emu")) : this.begin("mu"), c.yytext)
              return 15;
            break;
          case 1:
            return 15;
          case 2:
            return this.popState(), 15;
          case 3:
            return this.begin("raw"), 15;
          case 4:
            return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (o(5, 9), "END_RAW_BLOCK");
          case 5:
            return 15;
          case 6:
            return this.popState(), 14;
          case 7:
            return 65;
          case 8:
            return 68;
          case 9:
            return 19;
          case 10:
            return this.popState(), this.begin("raw"), 23;
          case 11:
            return 55;
          case 12:
            return 60;
          case 13:
            return 29;
          case 14:
            return 47;
          case 15:
            return this.popState(), 44;
          case 16:
            return this.popState(), 44;
          case 17:
            return 34;
          case 18:
            return 39;
          case 19:
            return 51;
          case 20:
            return 48;
          case 21:
            this.unput(c.yytext), this.popState(), this.begin("com");
            break;
          case 22:
            return this.popState(), 14;
          case 23:
            return 48;
          case 24:
            return 73;
          case 25:
            return 72;
          case 26:
            return 72;
          case 27:
            return 87;
          case 28:
            break;
          case 29:
            return this.popState(), 54;
          case 30:
            return this.popState(), 33;
          case 31:
            return c.yytext = o(1, 2).replace(/\\"/g, '"'), 80;
          case 32:
            return c.yytext = o(1, 2).replace(/\\'/g, "'"), 80;
          case 33:
            return 85;
          case 34:
            return 82;
          case 35:
            return 82;
          case 36:
            return 83;
          case 37:
            return 84;
          case 38:
            return 81;
          case 39:
            return 75;
          case 40:
            return 77;
          case 41:
            return 72;
          case 42:
            return c.yytext = c.yytext.replace(/\\([\\\]])/g, "$1"), 72;
          case 43:
            return "INVALID";
          case 44:
            return 5;
        }
      }, a.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], a.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, a;
    }();
    u.lexer = h;
    function p() {
      this.yy = {};
    }
    return p.prototype = u, u.Parser = p, new p();
  }();
  t.default = n, e.exports = t.default;
})($e, $e.exports);
var He = { exports: {} }, fe = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var u = R.exports, h = n(u);
  function p() {
    this.parents = [];
  }
  p.prototype = {
    constructor: p,
    mutating: !1,
    acceptKey: function(s, d) {
      var o = this.accept(s[d]);
      if (this.mutating) {
        if (o && !p.prototype[o.type])
          throw new h.default('Unexpected node type "' + o.type + '" found when accepting ' + d + " on " + s.type);
        s[d] = o;
      }
    },
    acceptRequired: function(s, d) {
      if (this.acceptKey(s, d), !s[d])
        throw new h.default(s.type + " requires " + d);
    },
    acceptArray: function(s) {
      for (var d = 0, o = s.length; d < o; d++)
        this.acceptKey(s, d), s[d] || (s.splice(d, 1), d--, o--);
    },
    accept: function(s) {
      if (s) {
        if (!this[s.type])
          throw new h.default("Unknown type: " + s.type, s);
        this.current && this.parents.unshift(this.current), this.current = s;
        var d = this[s.type](s);
        if (this.current = this.parents.shift(), !this.mutating || d)
          return d;
        if (d !== !1)
          return s;
      }
    },
    Program: function(s) {
      this.acceptArray(s.body);
    },
    MustacheStatement: a,
    Decorator: a,
    BlockStatement: i,
    DecoratorBlock: i,
    PartialStatement: c,
    PartialBlockStatement: function(s) {
      c.call(this, s), this.acceptKey(s, "program");
    },
    ContentStatement: function() {
    },
    CommentStatement: function() {
    },
    SubExpression: a,
    PathExpression: function() {
    },
    StringLiteral: function() {
    },
    NumberLiteral: function() {
    },
    BooleanLiteral: function() {
    },
    UndefinedLiteral: function() {
    },
    NullLiteral: function() {
    },
    Hash: function(s) {
      this.acceptArray(s.pairs);
    },
    HashPair: function(s) {
      this.acceptRequired(s, "value");
    }
  };
  function a(s) {
    this.acceptRequired(s, "path"), this.acceptArray(s.params), this.acceptKey(s, "hash");
  }
  function i(s) {
    a.call(this, s), this.acceptKey(s, "program"), this.acceptKey(s, "inverse");
  }
  function c(s) {
    this.acceptRequired(s, "name"), this.acceptArray(s.params), this.acceptKey(s, "hash");
  }
  t.default = p, e.exports = t.default;
})(fe, fe.exports);
(function(e, t) {
  t.__esModule = !0;
  function n(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var u = fe.exports, h = n(u);
  function p() {
    var d = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
    this.options = d;
  }
  p.prototype = new h.default(), p.prototype.Program = function(d) {
    var o = !this.options.ignoreStandalone, l = !this.isRootSeen;
    this.isRootSeen = !0;
    for (var r = d.body, m = 0, f = r.length; m < f; m++) {
      var y = r[m], v = this.accept(y);
      if (v) {
        var _ = a(r, m, l), b = i(r, m, l), g = v.openStandalone && _, S = v.closeStandalone && b, E = v.inlineStandalone && _ && b;
        v.close && c(r, m, !0), v.open && s(r, m, !0), o && E && (c(r, m), s(r, m) && y.type === "PartialStatement" && (y.indent = /([ \t]+$)/.exec(r[m - 1].original)[1])), o && g && (c((y.program || y.inverse).body), s(r, m)), o && S && (c(r, m), s((y.inverse || y.program).body));
      }
    }
    return d;
  }, p.prototype.BlockStatement = p.prototype.DecoratorBlock = p.prototype.PartialBlockStatement = function(d) {
    this.accept(d.program), this.accept(d.inverse);
    var o = d.program || d.inverse, l = d.program && d.inverse, r = l, m = l;
    if (l && l.chained)
      for (r = l.body[0].program; m.chained; )
        m = m.body[m.body.length - 1].program;
    var f = {
      open: d.openStrip.open,
      close: d.closeStrip.close,
      openStandalone: i(o.body),
      closeStandalone: a((r || o).body)
    };
    if (d.openStrip.close && c(o.body, null, !0), l) {
      var y = d.inverseStrip;
      y.open && s(o.body, null, !0), y.close && c(r.body, null, !0), d.closeStrip.open && s(m.body, null, !0), !this.options.ignoreStandalone && a(o.body) && i(r.body) && (s(o.body), c(r.body));
    } else
      d.closeStrip.open && s(o.body, null, !0);
    return f;
  }, p.prototype.Decorator = p.prototype.MustacheStatement = function(d) {
    return d.strip;
  }, p.prototype.PartialStatement = p.prototype.CommentStatement = function(d) {
    var o = d.strip || {};
    return {
      inlineStandalone: !0,
      open: o.open,
      close: o.close
    };
  };
  function a(d, o, l) {
    o === void 0 && (o = d.length);
    var r = d[o - 1], m = d[o - 2];
    if (!r)
      return l;
    if (r.type === "ContentStatement")
      return (m || !l ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(r.original);
  }
  function i(d, o, l) {
    o === void 0 && (o = -1);
    var r = d[o + 1], m = d[o + 2];
    if (!r)
      return l;
    if (r.type === "ContentStatement")
      return (m || !l ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(r.original);
  }
  function c(d, o, l) {
    var r = d[o == null ? 0 : o + 1];
    if (!(!r || r.type !== "ContentStatement" || !l && r.rightStripped)) {
      var m = r.value;
      r.value = r.value.replace(l ? /^\s+/ : /^[ \t]*\r?\n?/, ""), r.rightStripped = r.value !== m;
    }
  }
  function s(d, o, l) {
    var r = d[o == null ? d.length - 1 : o - 1];
    if (!(!r || r.type !== "ContentStatement" || !l && r.leftStripped)) {
      var m = r.value;
      return r.value = r.value.replace(l ? /\s+$/ : /[ \t]+$/, ""), r.leftStripped = r.value !== m, r.leftStripped;
    }
  }
  t.default = p, e.exports = t.default;
})(He, He.exports);
var N = {};
N.__esModule = !0;
N.SourceLocation = En;
N.id = kn;
N.stripFlags = Ln;
N.stripComment = wn;
N.preparePath = xn;
N.prepareMustache = Cn;
N.prepareRawBlock = Pn;
N.prepareBlock = An;
N.prepareProgram = Mn;
N.preparePartialBlock = On;
function Sn(e) {
  return e && e.__esModule ? e : { default: e };
}
var bn = R.exports, Ze = Sn(bn);
function Je(e, t) {
  if (t = t.path ? t.path.original : t, e.path.original !== t) {
    var n = { loc: e.path.loc };
    throw new Ze.default(e.path.original + " doesn't match " + t, n);
  }
}
function En(e, t) {
  this.source = e, this.start = {
    line: t.first_line,
    column: t.first_column
  }, this.end = {
    line: t.last_line,
    column: t.last_column
  };
}
function kn(e) {
  return /^\[.*\]$/.test(e) ? e.substring(1, e.length - 1) : e;
}
function Ln(e, t) {
  return {
    open: e.charAt(2) === "~",
    close: t.charAt(t.length - 3) === "~"
  };
}
function wn(e) {
  return e.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
}
function xn(e, t, n) {
  n = this.locInfo(n);
  for (var u = e ? "@" : "", h = [], p = 0, a = 0, i = t.length; a < i; a++) {
    var c = t[a].part, s = t[a].original !== c;
    if (u += (t[a].separator || "") + c, !s && (c === ".." || c === "." || c === "this")) {
      if (h.length > 0)
        throw new Ze.default("Invalid path: " + u, { loc: n });
      c === ".." && p++;
    } else
      h.push(c);
  }
  return {
    type: "PathExpression",
    data: e,
    depth: p,
    parts: h,
    original: u,
    loc: n
  };
}
function Cn(e, t, n, u, h, p) {
  var a = u.charAt(3) || u.charAt(2), i = a !== "{" && a !== "&", c = /\*/.test(u);
  return {
    type: c ? "Decorator" : "MustacheStatement",
    path: e,
    params: t,
    hash: n,
    escaped: i,
    strip: h,
    loc: this.locInfo(p)
  };
}
function Pn(e, t, n, u) {
  Je(e, n), u = this.locInfo(u);
  var h = {
    type: "Program",
    body: t,
    strip: {},
    loc: u
  };
  return {
    type: "BlockStatement",
    path: e.path,
    params: e.params,
    hash: e.hash,
    program: h,
    openStrip: {},
    inverseStrip: {},
    closeStrip: {},
    loc: u
  };
}
function An(e, t, n, u, h, p) {
  u && u.path && Je(e, u);
  var a = /\*/.test(e.open);
  t.blockParams = e.blockParams;
  var i = void 0, c = void 0;
  if (n) {
    if (a)
      throw new Ze.default("Unexpected inverse block on decorator", n);
    n.chain && (n.program.body[0].closeStrip = u.strip), c = n.strip, i = n.program;
  }
  return h && (h = i, i = t, t = h), {
    type: a ? "DecoratorBlock" : "BlockStatement",
    path: e.path,
    params: e.params,
    hash: e.hash,
    program: t,
    inverse: i,
    openStrip: e.strip,
    inverseStrip: c,
    closeStrip: u && u.strip,
    loc: this.locInfo(p)
  };
}
function Mn(e, t) {
  if (!t && e.length) {
    var n = e[0].loc, u = e[e.length - 1].loc;
    n && u && (t = {
      source: n.source,
      start: {
        line: n.start.line,
        column: n.start.column
      },
      end: {
        line: u.end.line,
        column: u.end.column
      }
    });
  }
  return {
    type: "Program",
    body: e,
    strip: {},
    loc: t
  };
}
function On(e, t, n, u) {
  return Je(e, n), {
    type: "PartialBlockStatement",
    name: e.path,
    params: e.params,
    hash: e.hash,
    program: t,
    openStrip: e.strip,
    closeStrip: n && n.strip,
    loc: this.locInfo(u)
  };
}
re.__esModule = !0;
re.parseWithoutProcessing = Lt;
re.parse = Hn;
function Rn(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  return t.default = e, t;
}
function kt(e) {
  return e && e.__esModule ? e : { default: e };
}
var In = $e.exports, Ve = kt(In), Dn = He.exports, Nn = kt(Dn), Tn = N, Bn = Rn(Tn), $n = x;
re.parser = Ve.default;
var ue = {};
$n.extend(ue, Bn);
function Lt(e, t) {
  if (e.type === "Program")
    return e;
  Ve.default.yy = ue, ue.locInfo = function(u) {
    return new ue.SourceLocation(t && t.srcName, u);
  };
  var n = Ve.default.parse(e);
  return n;
}
function Hn(e, t) {
  var n = Lt(e, t), u = new Nn.default(t);
  return u.accept(n);
}
var ne = {};
ne.__esModule = !0;
ne.Compiler = Ue;
ne.precompile = Fn;
ne.compile = zn;
function wt(e) {
  return e && e.__esModule ? e : { default: e };
}
var Vn = R.exports, Y = wt(Vn), ee = x, Un = me.exports, Z = wt(Un), jn = [].slice;
function Ue() {
}
Ue.prototype = {
  compiler: Ue,
  equals: function(e) {
    var t = this.opcodes.length;
    if (e.opcodes.length !== t)
      return !1;
    for (var n = 0; n < t; n++) {
      var u = this.opcodes[n], h = e.opcodes[n];
      if (u.opcode !== h.opcode || !xt(u.args, h.args))
        return !1;
    }
    t = this.children.length;
    for (var n = 0; n < t; n++)
      if (!this.children[n].equals(e.children[n]))
        return !1;
    return !0;
  },
  guid: 0,
  compile: function(e, t) {
    return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = t, this.stringParams = t.stringParams, this.trackIds = t.trackIds, t.blockParams = t.blockParams || [], t.knownHelpers = ee.extend(/* @__PURE__ */ Object.create(null), {
      helperMissing: !0,
      blockHelperMissing: !0,
      each: !0,
      if: !0,
      unless: !0,
      with: !0,
      log: !0,
      lookup: !0
    }, t.knownHelpers), this.accept(e);
  },
  compileProgram: function(e) {
    var t = new this.compiler(), n = t.compile(e, this.options), u = this.guid++;
    return this.usePartial = this.usePartial || n.usePartial, this.children[u] = n, this.useDepths = this.useDepths || n.useDepths, u;
  },
  accept: function(e) {
    if (!this[e.type])
      throw new Y.default("Unknown type: " + e.type, e);
    this.sourceNode.unshift(e);
    var t = this[e.type](e);
    return this.sourceNode.shift(), t;
  },
  Program: function(e) {
    this.options.blockParams.unshift(e.blockParams);
    for (var t = e.body, n = t.length, u = 0; u < n; u++)
      this.accept(t[u]);
    return this.options.blockParams.shift(), this.isSimple = n === 1, this.blockParams = e.blockParams ? e.blockParams.length : 0, this;
  },
  BlockStatement: function(e) {
    et(e);
    var t = e.program, n = e.inverse;
    t = t && this.compileProgram(t), n = n && this.compileProgram(n);
    var u = this.classifySexpr(e);
    u === "helper" ? this.helperSexpr(e, t, n) : u === "simple" ? (this.simpleSexpr(e), this.opcode("pushProgram", t), this.opcode("pushProgram", n), this.opcode("emptyHash"), this.opcode("blockValue", e.path.original)) : (this.ambiguousSexpr(e, t, n), this.opcode("pushProgram", t), this.opcode("pushProgram", n), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
  },
  DecoratorBlock: function(e) {
    var t = e.program && this.compileProgram(e.program), n = this.setupFullMustacheParams(e, t, void 0), u = e.path;
    this.useDecorators = !0, this.opcode("registerDecorator", n.length, u.original);
  },
  PartialStatement: function(e) {
    this.usePartial = !0;
    var t = e.program;
    t && (t = this.compileProgram(e.program));
    var n = e.params;
    if (n.length > 1)
      throw new Y.default("Unsupported number of partial arguments: " + n.length, e);
    n.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : n.push({ type: "PathExpression", parts: [], depth: 0 }));
    var u = e.name.original, h = e.name.type === "SubExpression";
    h && this.accept(e.name), this.setupFullMustacheParams(e, t, void 0, !0);
    var p = e.indent || "";
    this.options.preventIndent && p && (this.opcode("appendContent", p), p = ""), this.opcode("invokePartial", h, u, p), this.opcode("append");
  },
  PartialBlockStatement: function(e) {
    this.PartialStatement(e);
  },
  MustacheStatement: function(e) {
    this.SubExpression(e), e.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
  },
  Decorator: function(e) {
    this.DecoratorBlock(e);
  },
  ContentStatement: function(e) {
    e.value && this.opcode("appendContent", e.value);
  },
  CommentStatement: function() {
  },
  SubExpression: function(e) {
    et(e);
    var t = this.classifySexpr(e);
    t === "simple" ? this.simpleSexpr(e) : t === "helper" ? this.helperSexpr(e) : this.ambiguousSexpr(e);
  },
  ambiguousSexpr: function(e, t, n) {
    var u = e.path, h = u.parts[0], p = t != null || n != null;
    this.opcode("getContext", u.depth), this.opcode("pushProgram", t), this.opcode("pushProgram", n), u.strict = !0, this.accept(u), this.opcode("invokeAmbiguous", h, p);
  },
  simpleSexpr: function(e) {
    var t = e.path;
    t.strict = !0, this.accept(t), this.opcode("resolvePossibleLambda");
  },
  helperSexpr: function(e, t, n) {
    var u = this.setupFullMustacheParams(e, t, n), h = e.path, p = h.parts[0];
    if (this.options.knownHelpers[p])
      this.opcode("invokeKnownHelper", u.length, p);
    else {
      if (this.options.knownHelpersOnly)
        throw new Y.default("You specified knownHelpersOnly, but used the unknown helper " + p, e);
      h.strict = !0, h.falsy = !0, this.accept(h), this.opcode("invokeHelper", u.length, h.original, Z.default.helpers.simpleId(h));
    }
  },
  PathExpression: function(e) {
    this.addDepth(e.depth), this.opcode("getContext", e.depth);
    var t = e.parts[0], n = Z.default.helpers.scopedId(e), u = !e.depth && !n && this.blockParamIndex(t);
    u ? this.opcode("lookupBlockParam", u, e.parts) : t ? e.data ? (this.options.data = !0, this.opcode("lookupData", e.depth, e.parts, e.strict)) : this.opcode("lookupOnContext", e.parts, e.falsy, e.strict, n) : this.opcode("pushContext");
  },
  StringLiteral: function(e) {
    this.opcode("pushString", e.value);
  },
  NumberLiteral: function(e) {
    this.opcode("pushLiteral", e.value);
  },
  BooleanLiteral: function(e) {
    this.opcode("pushLiteral", e.value);
  },
  UndefinedLiteral: function() {
    this.opcode("pushLiteral", "undefined");
  },
  NullLiteral: function() {
    this.opcode("pushLiteral", "null");
  },
  Hash: function(e) {
    var t = e.pairs, n = 0, u = t.length;
    for (this.opcode("pushHash"); n < u; n++)
      this.pushParam(t[n].value);
    for (; n--; )
      this.opcode("assignToHash", t[n].key);
    this.opcode("popHash");
  },
  opcode: function(e) {
    this.opcodes.push({
      opcode: e,
      args: jn.call(arguments, 1),
      loc: this.sourceNode[0].loc
    });
  },
  addDepth: function(e) {
    !e || (this.useDepths = !0);
  },
  classifySexpr: function(e) {
    var t = Z.default.helpers.simpleId(e.path), n = t && !!this.blockParamIndex(e.path.parts[0]), u = !n && Z.default.helpers.helperExpression(e), h = !n && (u || t);
    if (h && !u) {
      var p = e.path.parts[0], a = this.options;
      a.knownHelpers[p] ? u = !0 : a.knownHelpersOnly && (h = !1);
    }
    return u ? "helper" : h ? "ambiguous" : "simple";
  },
  pushParams: function(e) {
    for (var t = 0, n = e.length; t < n; t++)
      this.pushParam(e[t]);
  },
  pushParam: function(e) {
    var t = e.value != null ? e.value : e.original || "";
    if (this.stringParams)
      t.replace && (t = t.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), e.depth && this.addDepth(e.depth), this.opcode("getContext", e.depth || 0), this.opcode("pushStringParam", t, e.type), e.type === "SubExpression" && this.accept(e);
    else {
      if (this.trackIds) {
        var n = void 0;
        if (e.parts && !Z.default.helpers.scopedId(e) && !e.depth && (n = this.blockParamIndex(e.parts[0])), n) {
          var u = e.parts.slice(1).join(".");
          this.opcode("pushId", "BlockParam", n, u);
        } else
          t = e.original || t, t.replace && (t = t.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", e.type, t);
      }
      this.accept(e);
    }
  },
  setupFullMustacheParams: function(e, t, n, u) {
    var h = e.params;
    return this.pushParams(h), this.opcode("pushProgram", t), this.opcode("pushProgram", n), e.hash ? this.accept(e.hash) : this.opcode("emptyHash", u), h;
  },
  blockParamIndex: function(e) {
    for (var t = 0, n = this.options.blockParams.length; t < n; t++) {
      var u = this.options.blockParams[t], h = u && ee.indexOf(u, e);
      if (u && h >= 0)
        return [t, h];
    }
  }
};
function Fn(e, t, n) {
  if (e == null || typeof e != "string" && e.type !== "Program")
    throw new Y.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + e);
  t = t || {}, "data" in t || (t.data = !0), t.compat && (t.useDepths = !0);
  var u = n.parse(e, t), h = new n.Compiler().compile(u, t);
  return new n.JavaScriptCompiler().compile(h, t);
}
function zn(e, t, n) {
  if (t === void 0 && (t = {}), e == null || typeof e != "string" && e.type !== "Program")
    throw new Y.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + e);
  t = ee.extend({}, t), "data" in t || (t.data = !0), t.compat && (t.useDepths = !0);
  var u = void 0;
  function h() {
    var a = n.parse(e, t), i = new n.Compiler().compile(a, t), c = new n.JavaScriptCompiler().compile(i, t, void 0, !0);
    return n.template(c);
  }
  function p(a, i) {
    return u || (u = h()), u.call(this, a, i);
  }
  return p._setup = function(a) {
    return u || (u = h()), u._setup(a);
  }, p._child = function(a, i, c, s) {
    return u || (u = h()), u._child(a, i, c, s);
  }, p;
}
function xt(e, t) {
  if (e === t)
    return !0;
  if (ee.isArray(e) && ee.isArray(t) && e.length === t.length) {
    for (var n = 0; n < e.length; n++)
      if (!xt(e[n], t[n]))
        return !1;
    return !0;
  }
}
function et(e) {
  if (!e.path.parts) {
    var t = e.path;
    e.path = {
      type: "PathExpression",
      data: !1,
      depth: 0,
      parts: [t.original + ""],
      original: t.original + "",
      loc: t.loc
    };
  }
}
var je = { exports: {} }, Fe = { exports: {} }, oe = {}, ye = {}, se = {}, ae = {}, tt;
function Gn() {
  if (tt)
    return ae;
  tt = 1;
  var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return ae.encode = function(t) {
    if (0 <= t && t < e.length)
      return e[t];
    throw new TypeError("Must be between 0 and 63: " + t);
  }, ae.decode = function(t) {
    var n = 65, u = 90, h = 97, p = 122, a = 48, i = 57, c = 43, s = 47, d = 26, o = 52;
    return n <= t && t <= u ? t - n : h <= t && t <= p ? t - h + d : a <= t && t <= i ? t - a + o : t == c ? 62 : t == s ? 63 : -1;
  }, ae;
}
var rt;
function Ct() {
  if (rt)
    return se;
  rt = 1;
  var e = Gn(), t = 5, n = 1 << t, u = n - 1, h = n;
  function p(i) {
    return i < 0 ? (-i << 1) + 1 : (i << 1) + 0;
  }
  function a(i) {
    var c = (i & 1) === 1, s = i >> 1;
    return c ? -s : s;
  }
  return se.encode = function(i) {
    var c = "", s, d = p(i);
    do
      s = d & u, d >>>= t, d > 0 && (s |= h), c += e.encode(s);
    while (d > 0);
    return c;
  }, se.decode = function(i, c, s) {
    var d = i.length, o = 0, l = 0, r, m;
    do {
      if (c >= d)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (m = e.decode(i.charCodeAt(c++)), m === -1)
        throw new Error("Invalid base64 digit: " + i.charAt(c - 1));
      r = !!(m & h), m &= u, o = o + (m << l), l += t;
    } while (r);
    s.value = a(o), s.rest = c;
  }, se;
}
var nt = {}, it;
function ie() {
  return it || (it = 1, function(e) {
    function t(g, S, E) {
      if (S in g)
        return g[S];
      if (arguments.length === 3)
        return E;
      throw new Error('"' + S + '" is a required argument.');
    }
    e.getArg = t;
    var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, u = /^data:.+\,.+$/;
    function h(g) {
      var S = g.match(n);
      return S ? {
        scheme: S[1],
        auth: S[2],
        host: S[3],
        port: S[4],
        path: S[5]
      } : null;
    }
    e.urlParse = h;
    function p(g) {
      var S = "";
      return g.scheme && (S += g.scheme + ":"), S += "//", g.auth && (S += g.auth + "@"), g.host && (S += g.host), g.port && (S += ":" + g.port), g.path && (S += g.path), S;
    }
    e.urlGenerate = p;
    function a(g) {
      var S = g, E = h(g);
      if (E) {
        if (!E.path)
          return g;
        S = E.path;
      }
      for (var k = e.isAbsolute(S), L = S.split(/\/+/), w, P = 0, O = L.length - 1; O >= 0; O--)
        w = L[O], w === "." ? L.splice(O, 1) : w === ".." ? P++ : P > 0 && (w === "" ? (L.splice(O + 1, P), P = 0) : (L.splice(O, 2), P--));
      return S = L.join("/"), S === "" && (S = k ? "/" : "."), E ? (E.path = S, p(E)) : S;
    }
    e.normalize = a;
    function i(g, S) {
      g === "" && (g = "."), S === "" && (S = ".");
      var E = h(S), k = h(g);
      if (k && (g = k.path || "/"), E && !E.scheme)
        return k && (E.scheme = k.scheme), p(E);
      if (E || S.match(u))
        return S;
      if (k && !k.host && !k.path)
        return k.host = S, p(k);
      var L = S.charAt(0) === "/" ? S : a(g.replace(/\/+$/, "") + "/" + S);
      return k ? (k.path = L, p(k)) : L;
    }
    e.join = i, e.isAbsolute = function(g) {
      return g.charAt(0) === "/" || n.test(g);
    };
    function c(g, S) {
      g === "" && (g = "."), g = g.replace(/\/$/, "");
      for (var E = 0; S.indexOf(g + "/") !== 0; ) {
        var k = g.lastIndexOf("/");
        if (k < 0 || (g = g.slice(0, k), g.match(/^([^\/]+:\/)?\/*$/)))
          return S;
        ++E;
      }
      return Array(E + 1).join("../") + S.substr(g.length + 1);
    }
    e.relative = c;
    var s = function() {
      var g = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in g);
    }();
    function d(g) {
      return g;
    }
    function o(g) {
      return r(g) ? "$" + g : g;
    }
    e.toSetString = s ? d : o;
    function l(g) {
      return r(g) ? g.slice(1) : g;
    }
    e.fromSetString = s ? d : l;
    function r(g) {
      if (!g)
        return !1;
      var S = g.length;
      if (S < 9 || g.charCodeAt(S - 1) !== 95 || g.charCodeAt(S - 2) !== 95 || g.charCodeAt(S - 3) !== 111 || g.charCodeAt(S - 4) !== 116 || g.charCodeAt(S - 5) !== 111 || g.charCodeAt(S - 6) !== 114 || g.charCodeAt(S - 7) !== 112 || g.charCodeAt(S - 8) !== 95 || g.charCodeAt(S - 9) !== 95)
        return !1;
      for (var E = S - 10; E >= 0; E--)
        if (g.charCodeAt(E) !== 36)
          return !1;
      return !0;
    }
    function m(g, S, E) {
      var k = y(g.source, S.source);
      return k !== 0 || (k = g.originalLine - S.originalLine, k !== 0) || (k = g.originalColumn - S.originalColumn, k !== 0 || E) || (k = g.generatedColumn - S.generatedColumn, k !== 0) || (k = g.generatedLine - S.generatedLine, k !== 0) ? k : y(g.name, S.name);
    }
    e.compareByOriginalPositions = m;
    function f(g, S, E) {
      var k = g.generatedLine - S.generatedLine;
      return k !== 0 || (k = g.generatedColumn - S.generatedColumn, k !== 0 || E) || (k = y(g.source, S.source), k !== 0) || (k = g.originalLine - S.originalLine, k !== 0) || (k = g.originalColumn - S.originalColumn, k !== 0) ? k : y(g.name, S.name);
    }
    e.compareByGeneratedPositionsDeflated = f;
    function y(g, S) {
      return g === S ? 0 : g === null ? 1 : S === null ? -1 : g > S ? 1 : -1;
    }
    function v(g, S) {
      var E = g.generatedLine - S.generatedLine;
      return E !== 0 || (E = g.generatedColumn - S.generatedColumn, E !== 0) || (E = y(g.source, S.source), E !== 0) || (E = g.originalLine - S.originalLine, E !== 0) || (E = g.originalColumn - S.originalColumn, E !== 0) ? E : y(g.name, S.name);
    }
    e.compareByGeneratedPositionsInflated = v;
    function _(g) {
      return JSON.parse(g.replace(/^\)]}'[^\n]*\n/, ""));
    }
    e.parseSourceMapInput = _;
    function b(g, S, E) {
      if (S = S || "", g && (g[g.length - 1] !== "/" && S[0] !== "/" && (g += "/"), S = g + S), E) {
        var k = h(E);
        if (!k)
          throw new Error("sourceMapURL could not be parsed");
        if (k.path) {
          var L = k.path.lastIndexOf("/");
          L >= 0 && (k.path = k.path.substring(0, L + 1));
        }
        S = i(p(k), S);
      }
      return a(S);
    }
    e.computeSourceURL = b;
  }(nt)), nt;
}
var _e = {}, ot;
function Pt() {
  if (ot)
    return _e;
  ot = 1;
  var e = ie(), t = Object.prototype.hasOwnProperty, n = typeof Map < "u";
  function u() {
    this._array = [], this._set = n ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return u.fromArray = function(h, p) {
    for (var a = new u(), i = 0, c = h.length; i < c; i++)
      a.add(h[i], p);
    return a;
  }, u.prototype.size = function() {
    return n ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, u.prototype.add = function(h, p) {
    var a = n ? h : e.toSetString(h), i = n ? this.has(h) : t.call(this._set, a), c = this._array.length;
    (!i || p) && this._array.push(h), i || (n ? this._set.set(h, c) : this._set[a] = c);
  }, u.prototype.has = function(h) {
    if (n)
      return this._set.has(h);
    var p = e.toSetString(h);
    return t.call(this._set, p);
  }, u.prototype.indexOf = function(h) {
    if (n) {
      var p = this._set.get(h);
      if (p >= 0)
        return p;
    } else {
      var a = e.toSetString(h);
      if (t.call(this._set, a))
        return this._set[a];
    }
    throw new Error('"' + h + '" is not in the set.');
  }, u.prototype.at = function(h) {
    if (h >= 0 && h < this._array.length)
      return this._array[h];
    throw new Error("No element indexed by " + h);
  }, u.prototype.toArray = function() {
    return this._array.slice();
  }, _e.ArraySet = u, _e;
}
var Se = {}, st;
function qn() {
  if (st)
    return Se;
  st = 1;
  var e = ie();
  function t(u, h) {
    var p = u.generatedLine, a = h.generatedLine, i = u.generatedColumn, c = h.generatedColumn;
    return a > p || a == p && c >= i || e.compareByGeneratedPositionsInflated(u, h) <= 0;
  }
  function n() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return n.prototype.unsortedForEach = function(u, h) {
    this._array.forEach(u, h);
  }, n.prototype.add = function(u) {
    t(this._last, u) ? (this._last = u, this._array.push(u)) : (this._sorted = !1, this._array.push(u));
  }, n.prototype.toArray = function() {
    return this._sorted || (this._array.sort(e.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, Se.MappingList = n, Se;
}
var at;
function At() {
  if (at)
    return ye;
  at = 1;
  var e = Ct(), t = ie(), n = Pt().ArraySet, u = qn().MappingList;
  function h(p) {
    p || (p = {}), this._file = t.getArg(p, "file", null), this._sourceRoot = t.getArg(p, "sourceRoot", null), this._skipValidation = t.getArg(p, "skipValidation", !1), this._sources = new n(), this._names = new n(), this._mappings = new u(), this._sourcesContents = null;
  }
  return h.prototype._version = 3, h.fromSourceMap = function(p) {
    var a = p.sourceRoot, i = new h({
      file: p.file,
      sourceRoot: a
    });
    return p.eachMapping(function(c) {
      var s = {
        generated: {
          line: c.generatedLine,
          column: c.generatedColumn
        }
      };
      c.source != null && (s.source = c.source, a != null && (s.source = t.relative(a, s.source)), s.original = {
        line: c.originalLine,
        column: c.originalColumn
      }, c.name != null && (s.name = c.name)), i.addMapping(s);
    }), p.sources.forEach(function(c) {
      var s = c;
      a !== null && (s = t.relative(a, c)), i._sources.has(s) || i._sources.add(s);
      var d = p.sourceContentFor(c);
      d != null && i.setSourceContent(c, d);
    }), i;
  }, h.prototype.addMapping = function(p) {
    var a = t.getArg(p, "generated"), i = t.getArg(p, "original", null), c = t.getArg(p, "source", null), s = t.getArg(p, "name", null);
    this._skipValidation || this._validateMapping(a, i, c, s), c != null && (c = String(c), this._sources.has(c) || this._sources.add(c)), s != null && (s = String(s), this._names.has(s) || this._names.add(s)), this._mappings.add({
      generatedLine: a.line,
      generatedColumn: a.column,
      originalLine: i != null && i.line,
      originalColumn: i != null && i.column,
      source: c,
      name: s
    });
  }, h.prototype.setSourceContent = function(p, a) {
    var i = p;
    this._sourceRoot != null && (i = t.relative(this._sourceRoot, i)), a != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[t.toSetString(i)] = a) : this._sourcesContents && (delete this._sourcesContents[t.toSetString(i)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, h.prototype.applySourceMap = function(p, a, i) {
    var c = a;
    if (a == null) {
      if (p.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      c = p.file;
    }
    var s = this._sourceRoot;
    s != null && (c = t.relative(s, c));
    var d = new n(), o = new n();
    this._mappings.unsortedForEach(function(l) {
      if (l.source === c && l.originalLine != null) {
        var r = p.originalPositionFor({
          line: l.originalLine,
          column: l.originalColumn
        });
        r.source != null && (l.source = r.source, i != null && (l.source = t.join(i, l.source)), s != null && (l.source = t.relative(s, l.source)), l.originalLine = r.line, l.originalColumn = r.column, r.name != null && (l.name = r.name));
      }
      var m = l.source;
      m != null && !d.has(m) && d.add(m);
      var f = l.name;
      f != null && !o.has(f) && o.add(f);
    }, this), this._sources = d, this._names = o, p.sources.forEach(function(l) {
      var r = p.sourceContentFor(l);
      r != null && (i != null && (l = t.join(i, l)), s != null && (l = t.relative(s, l)), this.setSourceContent(l, r));
    }, this);
  }, h.prototype._validateMapping = function(p, a, i, c) {
    if (a && typeof a.line != "number" && typeof a.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(p && "line" in p && "column" in p && p.line > 0 && p.column >= 0 && !a && !i && !c)) {
      if (p && "line" in p && "column" in p && a && "line" in a && "column" in a && p.line > 0 && p.column >= 0 && a.line > 0 && a.column >= 0 && i)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: p,
        source: i,
        original: a,
        name: c
      }));
    }
  }, h.prototype._serializeMappings = function() {
    for (var p = 0, a = 1, i = 0, c = 0, s = 0, d = 0, o = "", l, r, m, f, y = this._mappings.toArray(), v = 0, _ = y.length; v < _; v++) {
      if (r = y[v], l = "", r.generatedLine !== a)
        for (p = 0; r.generatedLine !== a; )
          l += ";", a++;
      else if (v > 0) {
        if (!t.compareByGeneratedPositionsInflated(r, y[v - 1]))
          continue;
        l += ",";
      }
      l += e.encode(r.generatedColumn - p), p = r.generatedColumn, r.source != null && (f = this._sources.indexOf(r.source), l += e.encode(f - d), d = f, l += e.encode(r.originalLine - 1 - c), c = r.originalLine - 1, l += e.encode(r.originalColumn - i), i = r.originalColumn, r.name != null && (m = this._names.indexOf(r.name), l += e.encode(m - s), s = m)), o += l;
    }
    return o;
  }, h.prototype._generateSourcesContent = function(p, a) {
    return p.map(function(i) {
      if (!this._sourcesContents)
        return null;
      a != null && (i = t.relative(a, i));
      var c = t.toSetString(i);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, c) ? this._sourcesContents[c] : null;
    }, this);
  }, h.prototype.toJSON = function() {
    var p = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (p.file = this._file), this._sourceRoot != null && (p.sourceRoot = this._sourceRoot), this._sourcesContents && (p.sourcesContent = this._generateSourcesContent(p.sources, p.sourceRoot)), p;
  }, h.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, ye.SourceMapGenerator = h, ye;
}
var J = {}, lt = {}, ut;
function Kn() {
  return ut || (ut = 1, function(e) {
    e.GREATEST_LOWER_BOUND = 1, e.LEAST_UPPER_BOUND = 2;
    function t(n, u, h, p, a, i) {
      var c = Math.floor((u - n) / 2) + n, s = a(h, p[c], !0);
      return s === 0 ? c : s > 0 ? u - c > 1 ? t(c, u, h, p, a, i) : i == e.LEAST_UPPER_BOUND ? u < p.length ? u : -1 : c : c - n > 1 ? t(n, c, h, p, a, i) : i == e.LEAST_UPPER_BOUND ? c : n < 0 ? -1 : n;
    }
    e.search = function(n, u, h, p) {
      if (u.length === 0)
        return -1;
      var a = t(
        -1,
        u.length,
        n,
        u,
        h,
        p || e.GREATEST_LOWER_BOUND
      );
      if (a < 0)
        return -1;
      for (; a - 1 >= 0 && h(u[a], u[a - 1], !0) === 0; )
        --a;
      return a;
    };
  }(lt)), lt;
}
var be = {}, ct;
function Wn() {
  if (ct)
    return be;
  ct = 1;
  function e(u, h, p) {
    var a = u[h];
    u[h] = u[p], u[p] = a;
  }
  function t(u, h) {
    return Math.round(u + Math.random() * (h - u));
  }
  function n(u, h, p, a) {
    if (p < a) {
      var i = t(p, a), c = p - 1;
      e(u, i, a);
      for (var s = u[a], d = p; d < a; d++)
        h(u[d], s) <= 0 && (c += 1, e(u, c, d));
      e(u, c + 1, d);
      var o = c + 1;
      n(u, h, p, o - 1), n(u, h, o + 1, a);
    }
  }
  return be.quickSort = function(u, h) {
    n(u, h, 0, u.length - 1);
  }, be;
}
var pt;
function Zn() {
  if (pt)
    return J;
  pt = 1;
  var e = ie(), t = Kn(), n = Pt().ArraySet, u = Ct(), h = Wn().quickSort;
  function p(s, d) {
    var o = s;
    return typeof s == "string" && (o = e.parseSourceMapInput(s)), o.sections != null ? new c(o, d) : new a(o, d);
  }
  p.fromSourceMap = function(s, d) {
    return a.fromSourceMap(s, d);
  }, p.prototype._version = 3, p.prototype.__generatedMappings = null, Object.defineProperty(p.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), p.prototype.__originalMappings = null, Object.defineProperty(p.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), p.prototype._charIsMappingSeparator = function(s, d) {
    var o = s.charAt(d);
    return o === ";" || o === ",";
  }, p.prototype._parseMappings = function(s, d) {
    throw new Error("Subclasses must implement _parseMappings");
  }, p.GENERATED_ORDER = 1, p.ORIGINAL_ORDER = 2, p.GREATEST_LOWER_BOUND = 1, p.LEAST_UPPER_BOUND = 2, p.prototype.eachMapping = function(s, d, o) {
    var l = d || null, r = o || p.GENERATED_ORDER, m;
    switch (r) {
      case p.GENERATED_ORDER:
        m = this._generatedMappings;
        break;
      case p.ORIGINAL_ORDER:
        m = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var f = this.sourceRoot;
    m.map(function(y) {
      var v = y.source === null ? null : this._sources.at(y.source);
      return v = e.computeSourceURL(f, v, this._sourceMapURL), {
        source: v,
        generatedLine: y.generatedLine,
        generatedColumn: y.generatedColumn,
        originalLine: y.originalLine,
        originalColumn: y.originalColumn,
        name: y.name === null ? null : this._names.at(y.name)
      };
    }, this).forEach(s, l);
  }, p.prototype.allGeneratedPositionsFor = function(s) {
    var d = e.getArg(s, "line"), o = {
      source: e.getArg(s, "source"),
      originalLine: d,
      originalColumn: e.getArg(s, "column", 0)
    };
    if (o.source = this._findSourceIndex(o.source), o.source < 0)
      return [];
    var l = [], r = this._findMapping(
      o,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      e.compareByOriginalPositions,
      t.LEAST_UPPER_BOUND
    );
    if (r >= 0) {
      var m = this._originalMappings[r];
      if (s.column === void 0)
        for (var f = m.originalLine; m && m.originalLine === f; )
          l.push({
            line: e.getArg(m, "generatedLine", null),
            column: e.getArg(m, "generatedColumn", null),
            lastColumn: e.getArg(m, "lastGeneratedColumn", null)
          }), m = this._originalMappings[++r];
      else
        for (var y = m.originalColumn; m && m.originalLine === d && m.originalColumn == y; )
          l.push({
            line: e.getArg(m, "generatedLine", null),
            column: e.getArg(m, "generatedColumn", null),
            lastColumn: e.getArg(m, "lastGeneratedColumn", null)
          }), m = this._originalMappings[++r];
    }
    return l;
  }, J.SourceMapConsumer = p;
  function a(s, d) {
    var o = s;
    typeof s == "string" && (o = e.parseSourceMapInput(s));
    var l = e.getArg(o, "version"), r = e.getArg(o, "sources"), m = e.getArg(o, "names", []), f = e.getArg(o, "sourceRoot", null), y = e.getArg(o, "sourcesContent", null), v = e.getArg(o, "mappings"), _ = e.getArg(o, "file", null);
    if (l != this._version)
      throw new Error("Unsupported version: " + l);
    f && (f = e.normalize(f)), r = r.map(String).map(e.normalize).map(function(b) {
      return f && e.isAbsolute(f) && e.isAbsolute(b) ? e.relative(f, b) : b;
    }), this._names = n.fromArray(m.map(String), !0), this._sources = n.fromArray(r, !0), this._absoluteSources = this._sources.toArray().map(function(b) {
      return e.computeSourceURL(f, b, d);
    }), this.sourceRoot = f, this.sourcesContent = y, this._mappings = v, this._sourceMapURL = d, this.file = _;
  }
  a.prototype = Object.create(p.prototype), a.prototype.consumer = p, a.prototype._findSourceIndex = function(s) {
    var d = s;
    if (this.sourceRoot != null && (d = e.relative(this.sourceRoot, d)), this._sources.has(d))
      return this._sources.indexOf(d);
    var o;
    for (o = 0; o < this._absoluteSources.length; ++o)
      if (this._absoluteSources[o] == s)
        return o;
    return -1;
  }, a.fromSourceMap = function(s, d) {
    var o = Object.create(a.prototype), l = o._names = n.fromArray(s._names.toArray(), !0), r = o._sources = n.fromArray(s._sources.toArray(), !0);
    o.sourceRoot = s._sourceRoot, o.sourcesContent = s._generateSourcesContent(
      o._sources.toArray(),
      o.sourceRoot
    ), o.file = s._file, o._sourceMapURL = d, o._absoluteSources = o._sources.toArray().map(function(S) {
      return e.computeSourceURL(o.sourceRoot, S, d);
    });
    for (var m = s._mappings.toArray().slice(), f = o.__generatedMappings = [], y = o.__originalMappings = [], v = 0, _ = m.length; v < _; v++) {
      var b = m[v], g = new i();
      g.generatedLine = b.generatedLine, g.generatedColumn = b.generatedColumn, b.source && (g.source = r.indexOf(b.source), g.originalLine = b.originalLine, g.originalColumn = b.originalColumn, b.name && (g.name = l.indexOf(b.name)), y.push(g)), f.push(g);
    }
    return h(o.__originalMappings, e.compareByOriginalPositions), o;
  }, a.prototype._version = 3, Object.defineProperty(a.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function i() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  a.prototype._parseMappings = function(s, d) {
    for (var o = 1, l = 0, r = 0, m = 0, f = 0, y = 0, v = s.length, _ = 0, b = {}, g = {}, S = [], E = [], k, L, w, P, O; _ < v; )
      if (s.charAt(_) === ";")
        o++, _++, l = 0;
      else if (s.charAt(_) === ",")
        _++;
      else {
        for (k = new i(), k.generatedLine = o, P = _; P < v && !this._charIsMappingSeparator(s, P); P++)
          ;
        if (L = s.slice(_, P), w = b[L], w)
          _ += L.length;
        else {
          for (w = []; _ < P; )
            u.decode(s, _, g), O = g.value, _ = g.rest, w.push(O);
          if (w.length === 2)
            throw new Error("Found a source, but no line and column");
          if (w.length === 3)
            throw new Error("Found a source and line, but no column");
          b[L] = w;
        }
        k.generatedColumn = l + w[0], l = k.generatedColumn, w.length > 1 && (k.source = f + w[1], f += w[1], k.originalLine = r + w[2], r = k.originalLine, k.originalLine += 1, k.originalColumn = m + w[3], m = k.originalColumn, w.length > 4 && (k.name = y + w[4], y += w[4])), E.push(k), typeof k.originalLine == "number" && S.push(k);
      }
    h(E, e.compareByGeneratedPositionsDeflated), this.__generatedMappings = E, h(S, e.compareByOriginalPositions), this.__originalMappings = S;
  }, a.prototype._findMapping = function(s, d, o, l, r, m) {
    if (s[o] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + s[o]);
    if (s[l] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + s[l]);
    return t.search(s, d, r, m);
  }, a.prototype.computeColumnSpans = function() {
    for (var s = 0; s < this._generatedMappings.length; ++s) {
      var d = this._generatedMappings[s];
      if (s + 1 < this._generatedMappings.length) {
        var o = this._generatedMappings[s + 1];
        if (d.generatedLine === o.generatedLine) {
          d.lastGeneratedColumn = o.generatedColumn - 1;
          continue;
        }
      }
      d.lastGeneratedColumn = 1 / 0;
    }
  }, a.prototype.originalPositionFor = function(s) {
    var d = {
      generatedLine: e.getArg(s, "line"),
      generatedColumn: e.getArg(s, "column")
    }, o = this._findMapping(
      d,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      e.compareByGeneratedPositionsDeflated,
      e.getArg(s, "bias", p.GREATEST_LOWER_BOUND)
    );
    if (o >= 0) {
      var l = this._generatedMappings[o];
      if (l.generatedLine === d.generatedLine) {
        var r = e.getArg(l, "source", null);
        r !== null && (r = this._sources.at(r), r = e.computeSourceURL(this.sourceRoot, r, this._sourceMapURL));
        var m = e.getArg(l, "name", null);
        return m !== null && (m = this._names.at(m)), {
          source: r,
          line: e.getArg(l, "originalLine", null),
          column: e.getArg(l, "originalColumn", null),
          name: m
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, a.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(s) {
      return s == null;
    }) : !1;
  }, a.prototype.sourceContentFor = function(s, d) {
    if (!this.sourcesContent)
      return null;
    var o = this._findSourceIndex(s);
    if (o >= 0)
      return this.sourcesContent[o];
    var l = s;
    this.sourceRoot != null && (l = e.relative(this.sourceRoot, l));
    var r;
    if (this.sourceRoot != null && (r = e.urlParse(this.sourceRoot))) {
      var m = l.replace(/^file:\/\//, "");
      if (r.scheme == "file" && this._sources.has(m))
        return this.sourcesContent[this._sources.indexOf(m)];
      if ((!r.path || r.path == "/") && this._sources.has("/" + l))
        return this.sourcesContent[this._sources.indexOf("/" + l)];
    }
    if (d)
      return null;
    throw new Error('"' + l + '" is not in the SourceMap.');
  }, a.prototype.generatedPositionFor = function(s) {
    var d = e.getArg(s, "source");
    if (d = this._findSourceIndex(d), d < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var o = {
      source: d,
      originalLine: e.getArg(s, "line"),
      originalColumn: e.getArg(s, "column")
    }, l = this._findMapping(
      o,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      e.compareByOriginalPositions,
      e.getArg(s, "bias", p.GREATEST_LOWER_BOUND)
    );
    if (l >= 0) {
      var r = this._originalMappings[l];
      if (r.source === o.source)
        return {
          line: e.getArg(r, "generatedLine", null),
          column: e.getArg(r, "generatedColumn", null),
          lastColumn: e.getArg(r, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, J.BasicSourceMapConsumer = a;
  function c(s, d) {
    var o = s;
    typeof s == "string" && (o = e.parseSourceMapInput(s));
    var l = e.getArg(o, "version"), r = e.getArg(o, "sections");
    if (l != this._version)
      throw new Error("Unsupported version: " + l);
    this._sources = new n(), this._names = new n();
    var m = {
      line: -1,
      column: 0
    };
    this._sections = r.map(function(f) {
      if (f.url)
        throw new Error("Support for url field in sections not implemented.");
      var y = e.getArg(f, "offset"), v = e.getArg(y, "line"), _ = e.getArg(y, "column");
      if (v < m.line || v === m.line && _ < m.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return m = y, {
        generatedOffset: {
          generatedLine: v + 1,
          generatedColumn: _ + 1
        },
        consumer: new p(e.getArg(f, "map"), d)
      };
    });
  }
  return c.prototype = Object.create(p.prototype), c.prototype.constructor = p, c.prototype._version = 3, Object.defineProperty(c.prototype, "sources", {
    get: function() {
      for (var s = [], d = 0; d < this._sections.length; d++)
        for (var o = 0; o < this._sections[d].consumer.sources.length; o++)
          s.push(this._sections[d].consumer.sources[o]);
      return s;
    }
  }), c.prototype.originalPositionFor = function(s) {
    var d = {
      generatedLine: e.getArg(s, "line"),
      generatedColumn: e.getArg(s, "column")
    }, o = t.search(
      d,
      this._sections,
      function(r, m) {
        var f = r.generatedLine - m.generatedOffset.generatedLine;
        return f || r.generatedColumn - m.generatedOffset.generatedColumn;
      }
    ), l = this._sections[o];
    return l ? l.consumer.originalPositionFor({
      line: d.generatedLine - (l.generatedOffset.generatedLine - 1),
      column: d.generatedColumn - (l.generatedOffset.generatedLine === d.generatedLine ? l.generatedOffset.generatedColumn - 1 : 0),
      bias: s.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, c.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(s) {
      return s.consumer.hasContentsOfAllSources();
    });
  }, c.prototype.sourceContentFor = function(s, d) {
    for (var o = 0; o < this._sections.length; o++) {
      var l = this._sections[o], r = l.consumer.sourceContentFor(s, !0);
      if (r)
        return r;
    }
    if (d)
      return null;
    throw new Error('"' + s + '" is not in the SourceMap.');
  }, c.prototype.generatedPositionFor = function(s) {
    for (var d = 0; d < this._sections.length; d++) {
      var o = this._sections[d];
      if (o.consumer._findSourceIndex(e.getArg(s, "source")) !== -1) {
        var l = o.consumer.generatedPositionFor(s);
        if (l) {
          var r = {
            line: l.line + (o.generatedOffset.generatedLine - 1),
            column: l.column + (o.generatedOffset.generatedLine === l.line ? o.generatedOffset.generatedColumn - 1 : 0)
          };
          return r;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, c.prototype._parseMappings = function(s, d) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var o = 0; o < this._sections.length; o++)
      for (var l = this._sections[o], r = l.consumer._generatedMappings, m = 0; m < r.length; m++) {
        var f = r[m], y = l.consumer._sources.at(f.source);
        y = e.computeSourceURL(l.consumer.sourceRoot, y, this._sourceMapURL), this._sources.add(y), y = this._sources.indexOf(y);
        var v = null;
        f.name && (v = l.consumer._names.at(f.name), this._names.add(v), v = this._names.indexOf(v));
        var _ = {
          source: y,
          generatedLine: f.generatedLine + (l.generatedOffset.generatedLine - 1),
          generatedColumn: f.generatedColumn + (l.generatedOffset.generatedLine === f.generatedLine ? l.generatedOffset.generatedColumn - 1 : 0),
          originalLine: f.originalLine,
          originalColumn: f.originalColumn,
          name: v
        };
        this.__generatedMappings.push(_), typeof _.originalLine == "number" && this.__originalMappings.push(_);
      }
    h(this.__generatedMappings, e.compareByGeneratedPositionsDeflated), h(this.__originalMappings, e.compareByOriginalPositions);
  }, J.IndexedSourceMapConsumer = c, J;
}
var Ee = {}, ht;
function Jn() {
  if (ht)
    return Ee;
  ht = 1;
  var e = At().SourceMapGenerator, t = ie(), n = /(\r?\n)/, u = 10, h = "$$$isSourceNode$$$";
  function p(a, i, c, s, d) {
    this.children = [], this.sourceContents = {}, this.line = a == null ? null : a, this.column = i == null ? null : i, this.source = c == null ? null : c, this.name = d == null ? null : d, this[h] = !0, s != null && this.add(s);
  }
  return p.fromStringWithSourceMap = function(a, i, c) {
    var s = new p(), d = a.split(n), o = 0, l = function() {
      var v = b(), _ = b() || "";
      return v + _;
      function b() {
        return o < d.length ? d[o++] : void 0;
      }
    }, r = 1, m = 0, f = null;
    return i.eachMapping(function(v) {
      if (f !== null)
        if (r < v.generatedLine)
          y(f, l()), r++, m = 0;
        else {
          var _ = d[o] || "", b = _.substr(0, v.generatedColumn - m);
          d[o] = _.substr(v.generatedColumn - m), m = v.generatedColumn, y(f, b), f = v;
          return;
        }
      for (; r < v.generatedLine; )
        s.add(l()), r++;
      if (m < v.generatedColumn) {
        var _ = d[o] || "";
        s.add(_.substr(0, v.generatedColumn)), d[o] = _.substr(v.generatedColumn), m = v.generatedColumn;
      }
      f = v;
    }, this), o < d.length && (f && y(f, l()), s.add(d.splice(o).join(""))), i.sources.forEach(function(v) {
      var _ = i.sourceContentFor(v);
      _ != null && (c != null && (v = t.join(c, v)), s.setSourceContent(v, _));
    }), s;
    function y(v, _) {
      if (v === null || v.source === void 0)
        s.add(_);
      else {
        var b = c ? t.join(c, v.source) : v.source;
        s.add(new p(
          v.originalLine,
          v.originalColumn,
          b,
          _,
          v.name
        ));
      }
    }
  }, p.prototype.add = function(a) {
    if (Array.isArray(a))
      a.forEach(function(i) {
        this.add(i);
      }, this);
    else if (a[h] || typeof a == "string")
      a && this.children.push(a);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + a
      );
    return this;
  }, p.prototype.prepend = function(a) {
    if (Array.isArray(a))
      for (var i = a.length - 1; i >= 0; i--)
        this.prepend(a[i]);
    else if (a[h] || typeof a == "string")
      this.children.unshift(a);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + a
      );
    return this;
  }, p.prototype.walk = function(a) {
    for (var i, c = 0, s = this.children.length; c < s; c++)
      i = this.children[c], i[h] ? i.walk(a) : i !== "" && a(i, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, p.prototype.join = function(a) {
    var i, c, s = this.children.length;
    if (s > 0) {
      for (i = [], c = 0; c < s - 1; c++)
        i.push(this.children[c]), i.push(a);
      i.push(this.children[c]), this.children = i;
    }
    return this;
  }, p.prototype.replaceRight = function(a, i) {
    var c = this.children[this.children.length - 1];
    return c[h] ? c.replaceRight(a, i) : typeof c == "string" ? this.children[this.children.length - 1] = c.replace(a, i) : this.children.push("".replace(a, i)), this;
  }, p.prototype.setSourceContent = function(a, i) {
    this.sourceContents[t.toSetString(a)] = i;
  }, p.prototype.walkSourceContents = function(a) {
    for (var i = 0, c = this.children.length; i < c; i++)
      this.children[i][h] && this.children[i].walkSourceContents(a);
    for (var s = Object.keys(this.sourceContents), i = 0, c = s.length; i < c; i++)
      a(t.fromSetString(s[i]), this.sourceContents[s[i]]);
  }, p.prototype.toString = function() {
    var a = "";
    return this.walk(function(i) {
      a += i;
    }), a;
  }, p.prototype.toStringWithSourceMap = function(a) {
    var i = {
      code: "",
      line: 1,
      column: 0
    }, c = new e(a), s = !1, d = null, o = null, l = null, r = null;
    return this.walk(function(m, f) {
      i.code += m, f.source !== null && f.line !== null && f.column !== null ? ((d !== f.source || o !== f.line || l !== f.column || r !== f.name) && c.addMapping({
        source: f.source,
        original: {
          line: f.line,
          column: f.column
        },
        generated: {
          line: i.line,
          column: i.column
        },
        name: f.name
      }), d = f.source, o = f.line, l = f.column, r = f.name, s = !0) : s && (c.addMapping({
        generated: {
          line: i.line,
          column: i.column
        }
      }), d = null, s = !1);
      for (var y = 0, v = m.length; y < v; y++)
        m.charCodeAt(y) === u ? (i.line++, i.column = 0, y + 1 === v ? (d = null, s = !1) : s && c.addMapping({
          source: f.source,
          original: {
            line: f.line,
            column: f.column
          },
          generated: {
            line: i.line,
            column: i.column
          },
          name: f.name
        })) : i.column++;
    }), this.walkSourceContents(function(m, f) {
      c.setSourceContent(m, f);
    }), { code: i.code, map: c };
  }, Ee.SourceNode = p, Ee;
}
var dt;
function Qn() {
  return dt || (dt = 1, oe.SourceMapGenerator = At().SourceMapGenerator, oe.SourceMapConsumer = Zn().SourceMapConsumer, oe.SourceNode = Jn().SourceNode), oe;
}
(function(e, t) {
  t.__esModule = !0;
  var n = x, u = void 0;
  try {
    var h = Qn();
    u = h.SourceNode;
  } catch {
  }
  u || (u = function(i, c, s, d) {
    this.src = "", d && this.add(d);
  }, u.prototype = {
    add: function(i) {
      n.isArray(i) && (i = i.join("")), this.src += i;
    },
    prepend: function(i) {
      n.isArray(i) && (i = i.join("")), this.src = i + this.src;
    },
    toStringWithSourceMap: function() {
      return { code: this.toString() };
    },
    toString: function() {
      return this.src;
    }
  });
  function p(i, c, s) {
    if (n.isArray(i)) {
      for (var d = [], o = 0, l = i.length; o < l; o++)
        d.push(c.wrap(i[o], s));
      return d;
    } else if (typeof i == "boolean" || typeof i == "number")
      return i + "";
    return i;
  }
  function a(i) {
    this.srcFile = i, this.source = [];
  }
  a.prototype = {
    isEmpty: function() {
      return !this.source.length;
    },
    prepend: function(i, c) {
      this.source.unshift(this.wrap(i, c));
    },
    push: function(i, c) {
      this.source.push(this.wrap(i, c));
    },
    merge: function() {
      var i = this.empty();
      return this.each(function(c) {
        i.add(["  ", c, `
`]);
      }), i;
    },
    each: function(i) {
      for (var c = 0, s = this.source.length; c < s; c++)
        i(this.source[c]);
    },
    empty: function() {
      var i = this.currentLocation || { start: {} };
      return new u(i.start.line, i.start.column, this.srcFile);
    },
    wrap: function(i) {
      var c = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
      return i instanceof u ? i : (i = p(i, this, c), new u(c.start.line, c.start.column, this.srcFile, i));
    },
    functionCall: function(i, c, s) {
      return s = this.generateList(s), this.wrap([i, c ? "." + c + "(" : "(", s, ")"]);
    },
    quotedString: function(i) {
      return '"' + (i + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
    },
    objectLiteral: function(i) {
      var c = this, s = [];
      Object.keys(i).forEach(function(o) {
        var l = p(i[o], c);
        l !== "undefined" && s.push([c.quotedString(o), ":", l]);
      });
      var d = this.generateList(s);
      return d.prepend("{"), d.add("}"), d;
    },
    generateList: function(i) {
      for (var c = this.empty(), s = 0, d = i.length; s < d; s++)
        s && c.add(","), c.add(p(i[s], this));
      return c;
    },
    generateArray: function(i) {
      var c = this.generateList(i);
      return c.prepend("["), c.add("]"), c;
    }
  }, t.default = a, e.exports = t.default;
})(Fe, Fe.exports);
(function(e, t) {
  t.__esModule = !0;
  function n(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var u = D, h = R.exports, p = n(h), a = x, i = Fe.exports, c = n(i);
  function s(l) {
    this.value = l;
  }
  function d() {
  }
  d.prototype = {
    nameLookup: function(l, r) {
      return this.internalNameLookup(l, r);
    },
    depthedLookup: function(l) {
      return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(l), ")"];
    },
    compilerInfo: function() {
      var l = u.COMPILER_REVISION, r = u.REVISION_CHANGES[l];
      return [l, r];
    },
    appendToBuffer: function(l, r, m) {
      return a.isArray(l) || (l = [l]), l = this.source.wrap(l, r), this.environment.isSimple ? ["return ", l, ";"] : m ? ["buffer += ", l, ";"] : (l.appendToBuffer = !0, l);
    },
    initializeBuffer: function() {
      return this.quotedString("");
    },
    internalNameLookup: function(l, r) {
      return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", l, ",", JSON.stringify(r), ")"];
    },
    lookupPropertyFunctionIsUsed: !1,
    compile: function(l, r, m, f) {
      this.environment = l, this.options = r, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !f, this.name = this.environment.name, this.isChild = !!m, this.context = m || {
        decorators: [],
        programs: [],
        environments: []
      }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(l, r), this.useDepths = this.useDepths || l.useDepths || l.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || l.useBlockParams;
      var y = l.opcodes, v = void 0, _ = void 0, b = void 0, g = void 0;
      for (b = 0, g = y.length; b < g; b++)
        v = y[b], this.source.currentLocation = v.loc, _ = _ || v.loc, this[v.opcode].apply(this, v.args);
      if (this.source.currentLocation = _, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
        throw new p.default("Compile completed with content left on stack");
      this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), f ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
      var S = this.createFunctionContext(f);
      if (this.isChild)
        return S;
      var E = {
        compiler: this.compilerInfo(),
        main: S
      };
      this.decorators && (E.main_d = this.decorators, E.useDecorators = !0);
      var k = this.context, L = k.programs, w = k.decorators;
      for (b = 0, g = L.length; b < g; b++)
        L[b] && (E[b] = L[b], w[b] && (E[b + "_d"] = w[b], E.useDecorators = !0));
      return this.environment.usePartial && (E.usePartial = !0), this.options.data && (E.useData = !0), this.useDepths && (E.useDepths = !0), this.useBlockParams && (E.useBlockParams = !0), this.options.compat && (E.compat = !0), f ? E.compilerOptions = this.options : (E.compiler = JSON.stringify(E.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, E = this.objectLiteral(E), r.srcName ? (E = E.toStringWithSourceMap({ file: r.destName }), E.map = E.map && E.map.toString()) : E = E.toString()), E;
    },
    preamble: function() {
      this.lastContext = 0, this.source = new c.default(this.options.srcName), this.decorators = new c.default(this.options.srcName);
    },
    createFunctionContext: function(l) {
      var r = this, m = "", f = this.stackVars.concat(this.registers.list);
      f.length > 0 && (m += ", " + f.join(", "));
      var y = 0;
      Object.keys(this.aliases).forEach(function(b) {
        var g = r.aliases[b];
        g.children && g.referenceCount > 1 && (m += ", alias" + ++y + "=" + b, g.children[0] = "alias" + y);
      }), this.lookupPropertyFunctionIsUsed && (m += ", " + this.lookupPropertyFunctionVarDeclaration());
      var v = ["container", "depth0", "helpers", "partials", "data"];
      (this.useBlockParams || this.useDepths) && v.push("blockParams"), this.useDepths && v.push("depths");
      var _ = this.mergeSource(m);
      return l ? (v.push(_), Function.apply(this, v)) : this.source.wrap(["function(", v.join(","), `) {
  `, _, "}"]);
    },
    mergeSource: function(l) {
      var r = this.environment.isSimple, m = !this.forceBuffer, f = void 0, y = void 0, v = void 0, _ = void 0;
      return this.source.each(function(b) {
        b.appendToBuffer ? (v ? b.prepend("  + ") : v = b, _ = b) : (v && (y ? v.prepend("buffer += ") : f = !0, _.add(";"), v = _ = void 0), y = !0, r || (m = !1));
      }), m ? v ? (v.prepend("return "), _.add(";")) : y || this.source.push('return "";') : (l += ", buffer = " + (f ? "" : this.initializeBuffer()), v ? (v.prepend("return buffer + "), _.add(";")) : this.source.push("return buffer;")), l && this.source.prepend("var " + l.substring(2) + (f ? "" : `;
`)), this.source.merge();
    },
    lookupPropertyFunctionVarDeclaration: function() {
      return `
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim();
    },
    blockValue: function(l) {
      var r = this.aliasable("container.hooks.blockHelperMissing"), m = [this.contextName(0)];
      this.setupHelperArgs(l, 0, m);
      var f = this.popStack();
      m.splice(1, 0, f), this.push(this.source.functionCall(r, "call", m));
    },
    ambiguousBlockValue: function() {
      var l = this.aliasable("container.hooks.blockHelperMissing"), r = [this.contextName(0)];
      this.setupHelperArgs("", 0, r, !0), this.flushInline();
      var m = this.topStack();
      r.splice(1, 0, m), this.pushSource(["if (!", this.lastHelper, ") { ", m, " = ", this.source.functionCall(l, "call", r), "}"]);
    },
    appendContent: function(l) {
      this.pendingContent ? l = this.pendingContent + l : this.pendingLocation = this.source.currentLocation, this.pendingContent = l;
    },
    append: function() {
      if (this.isInline())
        this.replaceStack(function(r) {
          return [" != null ? ", r, ' : ""'];
        }), this.pushSource(this.appendToBuffer(this.popStack()));
      else {
        var l = this.popStack();
        this.pushSource(["if (", l, " != null) { ", this.appendToBuffer(l, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
      }
    },
    appendEscaped: function() {
      this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]));
    },
    getContext: function(l) {
      this.lastContext = l;
    },
    pushContext: function() {
      this.pushStackLiteral(this.contextName(this.lastContext));
    },
    lookupOnContext: function(l, r, m, f) {
      var y = 0;
      !f && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(l[y++])) : this.pushContext(), this.resolvePath("context", l, y, r, m);
    },
    lookupBlockParam: function(l, r) {
      this.useBlockParams = !0, this.push(["blockParams[", l[0], "][", l[1], "]"]), this.resolvePath("context", r, 1);
    },
    lookupData: function(l, r, m) {
      l ? this.pushStackLiteral("container.data(data, " + l + ")") : this.pushStackLiteral("data"), this.resolvePath("data", r, 0, !0, m);
    },
    resolvePath: function(l, r, m, f, y) {
      var v = this;
      if (this.options.strict || this.options.assumeObjects) {
        this.push(o(this.options.strict && y, this, r, l));
        return;
      }
      for (var _ = r.length; m < _; m++)
        this.replaceStack(function(b) {
          var g = v.nameLookup(b, r[m], l);
          return f ? [" && ", g] : [" != null ? ", g, " : ", b];
        });
    },
    resolvePossibleLambda: function() {
      this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
    },
    pushStringParam: function(l, r) {
      this.pushContext(), this.pushString(r), r !== "SubExpression" && (typeof l == "string" ? this.pushString(l) : this.pushStackLiteral(l));
    },
    emptyHash: function(l) {
      this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(l ? "undefined" : "{}");
    },
    pushHash: function() {
      this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
    },
    popHash: function() {
      var l = this.hash;
      this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(l.ids)), this.stringParams && (this.push(this.objectLiteral(l.contexts)), this.push(this.objectLiteral(l.types))), this.push(this.objectLiteral(l.values));
    },
    pushString: function(l) {
      this.pushStackLiteral(this.quotedString(l));
    },
    pushLiteral: function(l) {
      this.pushStackLiteral(l);
    },
    pushProgram: function(l) {
      l != null ? this.pushStackLiteral(this.programExpression(l)) : this.pushStackLiteral(null);
    },
    registerDecorator: function(l, r) {
      var m = this.nameLookup("decorators", r, "decorator"), f = this.setupHelperArgs(r, l);
      this.decorators.push(["fn = ", this.decorators.functionCall(m, "", ["fn", "props", "container", f]), " || fn;"]);
    },
    invokeHelper: function(l, r, m) {
      var f = this.popStack(), y = this.setupHelper(l, r), v = [];
      m && v.push(y.name), v.push(f), this.options.strict || v.push(this.aliasable("container.hooks.helperMissing"));
      var _ = ["(", this.itemsSeparatedBy(v, "||"), ")"], b = this.source.functionCall(_, "call", y.callParams);
      this.push(b);
    },
    itemsSeparatedBy: function(l, r) {
      var m = [];
      m.push(l[0]);
      for (var f = 1; f < l.length; f++)
        m.push(r, l[f]);
      return m;
    },
    invokeKnownHelper: function(l, r) {
      var m = this.setupHelper(l, r);
      this.push(this.source.functionCall(m.name, "call", m.callParams));
    },
    invokeAmbiguous: function(l, r) {
      this.useRegister("helper");
      var m = this.popStack();
      this.emptyHash();
      var f = this.setupHelper(0, l, r), y = this.lastHelper = this.nameLookup("helpers", l, "helper"), v = ["(", "(helper = ", y, " || ", m, ")"];
      this.options.strict || (v[0] = "(helper = ", v.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", v, f.paramsInit ? ["),(", f.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", f.callParams), " : helper))"]);
    },
    invokePartial: function(l, r, m) {
      var f = [], y = this.setupParams(r, 1, f);
      l && (r = this.popStack(), delete y.name), m && (y.indent = JSON.stringify(m)), y.helpers = "helpers", y.partials = "partials", y.decorators = "container.decorators", l ? f.unshift(r) : f.unshift(this.nameLookup("partials", r, "partial")), this.options.compat && (y.depths = "depths"), y = this.objectLiteral(y), f.push(y), this.push(this.source.functionCall("container.invokePartial", "", f));
    },
    assignToHash: function(l) {
      var r = this.popStack(), m = void 0, f = void 0, y = void 0;
      this.trackIds && (y = this.popStack()), this.stringParams && (f = this.popStack(), m = this.popStack());
      var v = this.hash;
      m && (v.contexts[l] = m), f && (v.types[l] = f), y && (v.ids[l] = y), v.values[l] = r;
    },
    pushId: function(l, r, m) {
      l === "BlockParam" ? this.pushStackLiteral("blockParams[" + r[0] + "].path[" + r[1] + "]" + (m ? " + " + JSON.stringify("." + m) : "")) : l === "PathExpression" ? this.pushString(r) : l === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
    },
    compiler: d,
    compileChildren: function(l, r) {
      for (var m = l.children, f = void 0, y = void 0, v = 0, _ = m.length; v < _; v++) {
        f = m[v], y = new this.compiler();
        var b = this.matchExistingProgram(f);
        if (b == null) {
          this.context.programs.push("");
          var g = this.context.programs.length;
          f.index = g, f.name = "program" + g, this.context.programs[g] = y.compile(f, r, this.context, !this.precompile), this.context.decorators[g] = y.decorators, this.context.environments[g] = f, this.useDepths = this.useDepths || y.useDepths, this.useBlockParams = this.useBlockParams || y.useBlockParams, f.useDepths = this.useDepths, f.useBlockParams = this.useBlockParams;
        } else
          f.index = b.index, f.name = "program" + b.index, this.useDepths = this.useDepths || b.useDepths, this.useBlockParams = this.useBlockParams || b.useBlockParams;
      }
    },
    matchExistingProgram: function(l) {
      for (var r = 0, m = this.context.environments.length; r < m; r++) {
        var f = this.context.environments[r];
        if (f && f.equals(l))
          return f;
      }
    },
    programExpression: function(l) {
      var r = this.environment.children[l], m = [r.index, "data", r.blockParams];
      return (this.useBlockParams || this.useDepths) && m.push("blockParams"), this.useDepths && m.push("depths"), "container.program(" + m.join(", ") + ")";
    },
    useRegister: function(l) {
      this.registers[l] || (this.registers[l] = !0, this.registers.list.push(l));
    },
    push: function(l) {
      return l instanceof s || (l = this.source.wrap(l)), this.inlineStack.push(l), l;
    },
    pushStackLiteral: function(l) {
      this.push(new s(l));
    },
    pushSource: function(l) {
      this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), l && this.source.push(l);
    },
    replaceStack: function(l) {
      var r = ["("], m = void 0, f = void 0, y = void 0;
      if (!this.isInline())
        throw new p.default("replaceStack on non-inline");
      var v = this.popStack(!0);
      if (v instanceof s)
        m = [v.value], r = ["(", m], y = !0;
      else {
        f = !0;
        var _ = this.incrStack();
        r = ["((", this.push(_), " = ", v, ")"], m = this.topStack();
      }
      var b = l.call(this, m);
      y || this.popStack(), f && this.stackSlot--, this.push(r.concat(b, ")"));
    },
    incrStack: function() {
      return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
    },
    topStackName: function() {
      return "stack" + this.stackSlot;
    },
    flushInline: function() {
      var l = this.inlineStack;
      this.inlineStack = [];
      for (var r = 0, m = l.length; r < m; r++) {
        var f = l[r];
        if (f instanceof s)
          this.compileStack.push(f);
        else {
          var y = this.incrStack();
          this.pushSource([y, " = ", f, ";"]), this.compileStack.push(y);
        }
      }
    },
    isInline: function() {
      return this.inlineStack.length;
    },
    popStack: function(l) {
      var r = this.isInline(), m = (r ? this.inlineStack : this.compileStack).pop();
      if (!l && m instanceof s)
        return m.value;
      if (!r) {
        if (!this.stackSlot)
          throw new p.default("Invalid stack pop");
        this.stackSlot--;
      }
      return m;
    },
    topStack: function() {
      var l = this.isInline() ? this.inlineStack : this.compileStack, r = l[l.length - 1];
      return r instanceof s ? r.value : r;
    },
    contextName: function(l) {
      return this.useDepths && l ? "depths[" + l + "]" : "depth" + l;
    },
    quotedString: function(l) {
      return this.source.quotedString(l);
    },
    objectLiteral: function(l) {
      return this.source.objectLiteral(l);
    },
    aliasable: function(l) {
      var r = this.aliases[l];
      return r ? (r.referenceCount++, r) : (r = this.aliases[l] = this.source.wrap(l), r.aliasable = !0, r.referenceCount = 1, r);
    },
    setupHelper: function(l, r, m) {
      var f = [], y = this.setupHelperArgs(r, l, f, m), v = this.nameLookup("helpers", r, "helper"), _ = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
      return {
        params: f,
        paramsInit: y,
        name: v,
        callParams: [_].concat(f)
      };
    },
    setupParams: function(l, r, m) {
      var f = {}, y = [], v = [], _ = [], b = !m, g = void 0;
      b && (m = []), f.name = this.quotedString(l), f.hash = this.popStack(), this.trackIds && (f.hashIds = this.popStack()), this.stringParams && (f.hashTypes = this.popStack(), f.hashContexts = this.popStack());
      var S = this.popStack(), E = this.popStack();
      (E || S) && (f.fn = E || "container.noop", f.inverse = S || "container.noop");
      for (var k = r; k--; )
        g = this.popStack(), m[k] = g, this.trackIds && (_[k] = this.popStack()), this.stringParams && (v[k] = this.popStack(), y[k] = this.popStack());
      return b && (f.args = this.source.generateArray(m)), this.trackIds && (f.ids = this.source.generateArray(_)), this.stringParams && (f.types = this.source.generateArray(v), f.contexts = this.source.generateArray(y)), this.options.data && (f.data = "data"), this.useBlockParams && (f.blockParams = "blockParams"), f;
    },
    setupHelperArgs: function(l, r, m, f) {
      var y = this.setupParams(l, r, m);
      return y.loc = JSON.stringify(this.source.currentLocation), y = this.objectLiteral(y), f ? (this.useRegister("options"), m.push("options"), ["options=", y]) : m ? (m.push(y), "") : y;
    }
  }, function() {
    for (var l = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), r = d.RESERVED_WORDS = {}, m = 0, f = l.length; m < f; m++)
      r[l[m]] = !0;
  }(), d.isValidJavaScriptVariableName = function(l) {
    return !d.RESERVED_WORDS[l] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(l);
  };
  function o(l, r, m, f) {
    var y = r.popStack(), v = 0, _ = m.length;
    for (l && _--; v < _; v++)
      y = r.nameLookup(y, m[v], f);
    return l ? [r.aliasable("container.strict"), "(", y, ", ", r.quotedString(m[v]), ", ", JSON.stringify(r.source.currentLocation), " )"] : y;
  }
  t.default = d, e.exports = t.default;
})(je, je.exports);
(function(e, t) {
  t.__esModule = !0;
  function n(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var u = xe.exports, h = n(u), p = me.exports, a = n(p), i = re, c = ne, s = je.exports, d = n(s), o = fe.exports, l = n(o), r = de.exports, m = n(r), f = h.default.create;
  function y() {
    var _ = f();
    return _.compile = function(b, g) {
      return c.compile(b, g, _);
    }, _.precompile = function(b, g) {
      return c.precompile(b, g, _);
    }, _.AST = a.default, _.Compiler = c.Compiler, _.JavaScriptCompiler = d.default, _.Parser = i.parser, _.parse = i.parse, _.parseWithoutProcessing = i.parseWithoutProcessing, _;
  }
  var v = y();
  v.create = y, m.default(v), v.Visitor = l.default, v.default = v, t.default = v, e.exports = t.default;
})(we, we.exports);
const Mt = /* @__PURE__ */ ur(we.exports);
let ke, Le;
const Yn = (e) => {
  var t;
  const n = e.opts;
  let u = "Ad {{adPosition}} of {{totalAds}} ends in {{secondsRemaining}}";
  n.adLabelNTime !== void 0 && (u = n.adLabelNTime), Le === void 0 && (Le = Mt.compile(u));
  const h = (t = e.adsManager) == null ? void 0 : t.getRemainingTime(), p = h !== void 0 ? Math.round(h) : 0, { adPosition: a, totalAds: i } = e;
  return Le({
    secondsRemaining: p,
    adPosition: a,
    totalAds: i
  });
}, Xn = (e) => {
  var t;
  const n = e.opts;
  let u = "Ad ends in {{secondsRemaining}} seconds";
  n.adLabelTime !== void 0 && (u = n.adLabelTime), ke === void 0 && (ke = Mt.compile(u));
  const h = (t = e.adsManager) == null ? void 0 : t.getRemainingTime(), p = h !== void 0 ? Math.round(h) : 0;
  return ke({ secondsRemaining: p });
}, C = (e, t) => t.ui.controlsBottom.querySelector(`.button-${e}`), ei = (e) => {
  const t = e.google, n = e.adsManager, u = lr(e.videoElement), h = e.videoElement;
  document.addEventListener("fullscreenchange", () => {
    document.fullscreenElement === e.rootElement ? (C("enter-fullscreen", e).classList.add("hidden"), C("exit-fullscreen", e).classList.remove("hidden"), n.resize(h.clientWidth, h.clientHeight, t.ima.ViewMode.FULLSCREEN)) : (C("enter-fullscreen", e).classList.remove("hidden"), C("exit-fullscreen", e).classList.add("hidden"), n.resize(h.clientWidth, h.clientHeight, t.ima.ViewMode.NORMAL));
  }), n.addEventListener(t.ima.AdEvent.Type.AD_CAN_PLAY, () => {
    e.ui.loadingSpinner.classList.add("hidden");
  }), n.addEventListener(t.ima.AdEvent.Type.AD_BUFFERING, () => {
    e.ui.loadingSpinner.classList.remove("hidden");
  }), n.addEventListener(t.ima.AdEvent.Type.AD_METADATA, () => {
    u.dispatch(A.AD_METADATA);
  }), n.addEventListener(t.ima.AdEvent.Type.AD_PROGRESS, () => {
    const p = e.ui.controlsBottom.querySelector(".time-label");
    let a = "";
    e.totalAds > 1 ? a = Yn(e) : a = Xn(e), p.innerHTML = a, u.dispatch(A.AD_PROGRESS);
  }), n.addEventListener(t.ima.AdEvent.Type.CLICK, () => {
    u.dispatch(A.AD_CLICK);
  }), n.addEventListener(t.ima.AdEvent.Type.COMPLETE, () => {
    e.ui.root.classList.add("hidden"), u.dispatch(A.AD_COMPLETE);
  }), n.addEventListener(t.ima.AdEvent.Type.SKIPPED, () => {
    e.ui.root.classList.add("hidden"), u.dispatch(A.AD_SKIPPED);
  }), n.addEventListener(t.ima.AdEvent.Type.FIRST_QUARTILE, () => {
    u.dispatch(A.AD_FIRST_QUARTILE);
  }), n.addEventListener(t.ima.AdEvent.Type.MIDPOINT, () => {
    u.dispatch(A.AD_MIDPOINT);
  }), n.addEventListener(t.ima.AdEvent.Type.PAUSED, () => {
    C("play", e).classList.remove("hidden"), C("pause", e).classList.add("hidden"), u.dispatch(A.AD_PAUSED, n.getRemainingTime());
  }), n.addEventListener(t.ima.AdEvent.Type.RESUMED, () => {
    C("play", e).classList.add("hidden"), C("pause", e).classList.remove("hidden"), u.dispatch(A.AD_RESUMED, n.getRemainingTime());
  }), n.addEventListener(t.ima.AdEvent.Type.STARTED, (p) => {
    e.ui.root.classList.remove("hidden"), C("play", e).classList.add("hidden"), C("pause", e).classList.remove("hidden");
    const a = e.videoElement, i = e.imaVideoElement;
    a.muted ? (i.muted = !0, C("volume", e).classList.add("hidden"), C("muted", e).classList.remove("hidden")) : (i.muted = !1, C("volume", e).classList.remove("hidden"), C("muted", e).classList.add("hidden"));
    const c = p.getAd().getAdPodInfo();
    e.adPosition = c.getAdPosition(), e.totalAds = c.getTotalAds(), u.dispatch(A.AD_STARTED, n.getRemainingTime());
  }), n.addEventListener(t.ima.AdEvent.Type.THIRD_QUARTILE, () => {
    u.dispatch(A.AD_THIRD_QUARTILE);
  }), n.addEventListener(t.ima.AdEvent.Type.VOLUME_CHANGED, () => {
    e.imaVideoElement.muted ? (C("volume", e).classList.add("hidden"), C("muted", e).classList.remove("hidden")) : (C("volume", e).classList.remove("hidden"), C("muted", e).classList.add("hidden")), u.dispatch(A.AD_VOLUME_CHANGED, n.getVolume());
  }), n.addEventListener(t.ima.AdEvent.Type.VOLUME_MUTED, () => {
    C("volume", e).classList.add("hidden"), C("muted", e).classList.remove("hidden"), u.dispatch(A.AD_VOLUME_MUTED);
  }), n.addEventListener(t.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, () => {
    var p;
    (p = e.videoElement) == null || p.pause();
  }), n.addEventListener(t.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, () => {
    const p = e.videoElement;
    p.currentTime !== p.duration && p.play();
  });
}, ti = () => {
  const e = document.createElement("div"), t = document.createElement("div"), n = document.createElement("div"), u = document.createElement("div"), h = document.createElement("div");
  return {
    defaultUIElement: void 0,
    videoElement: void 0,
    imaVideoElement: void 0,
    totalAds: 0,
    adPosition: 0,
    adsManager: void 0,
    adsLoader: void 0,
    adDisplayContainer: void 0,
    rootElement: void 0,
    adsInitialized: !1,
    google: void 0,
    adsLoaded: !1,
    opts: {},
    ui: {
      root: e,
      overlay: document.createElement("div"),
      adContainer: t,
      controlsTop: n,
      controlsBottom: u,
      loadingSpinner: h
    }
  };
}, mt = (e) => {
  const t = document.createElement("button");
  return t.classList.add("button", "button-" + e.name), t.setAttribute("aria-label", e.ariaLabel), t.setAttribute("title", e.title), t.setAttribute("type", "button"), t.appendChild(e.svg), e.disabled !== void 0 && e.disabled && t.setAttribute("disabled", "disabled"), e.on !== void 0 && e.on.length > 0 && e.on.forEach((n) => {
    t.addEventListener(n.name, n.callback);
  }), e.hidden !== void 0 && e.hidden && t.classList.add("hidden"), t;
}, K = (e) => {
  const t = [];
  t.push(["role", "presentation"]), t.push(["focusable", "false"]);
  const n = "http://www.w3.org/2000/svg", u = "#cheza-", h = document.createElementNS(n, "svg");
  t.forEach((i) => {
    h.setAttribute(i[0], i[1]);
  });
  const p = document.createElementNS(n, "use"), a = u + e;
  return p.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), h.appendChild(p), h;
};
var ze = /* @__PURE__ */ ((e) => (e.LEFT = "left", e.RIGHT = "right", e))(ze || {});
const ft = (e, t) => {
  const n = {
    left: [],
    right: []
  };
  return n.left = [
    {
      name: "play",
      ariaLabel: "Play",
      title: "Play",
      svg: K("play"),
      on: [
        {
          name: "click",
          callback: () => {
            e.imaVideoElement.play();
          }
        }
      ]
    },
    {
      name: "pause",
      ariaLabel: "Pause",
      title: "Pause",
      svg: K("pause"),
      hidden: !0,
      on: [
        {
          name: "click",
          callback: () => {
            e.imaVideoElement.pause();
          }
        }
      ]
    },
    {
      name: "volume",
      ariaLabel: "Mute",
      title: "Mute",
      svg: K("volume"),
      on: [
        {
          name: "click",
          callback: () => {
            const u = e.imaVideoElement;
            u.muted = !0;
          }
        }
      ]
    },
    {
      name: "muted",
      ariaLabel: "Unmute",
      title: "Unmute",
      svg: K("muted"),
      hidden: !0,
      on: [
        {
          name: "click",
          callback: () => {
            const u = e.imaVideoElement;
            u.muted = !1;
          }
        }
      ]
    }
  ], n.right = [
    {
      name: "enter-fullscreen",
      ariaLabel: "Enter Fullscreen",
      title: "Enter Fullscreen",
      svg: K("enter-fullscreen"),
      on: [
        {
          name: "click",
          callback: () => {
            e.rootElement.requestFullscreen();
          }
        }
      ]
    },
    {
      name: "exit-fullscreen",
      ariaLabel: "Exit Fullscreen",
      title: "Exit Fullscreen",
      svg: K("exit-fullscreen"),
      hidden: !0,
      on: [
        {
          name: "click",
          callback: () => {
            document.fullscreenElement === e.rootElement && document.exitFullscreen();
          }
        }
      ]
    }
  ], n[t];
}, ri = (e) => {
  const t = e.defaultUIElement, n = e.ui.root, u = e.ui.overlay;
  u.classList.add("overlay"), n.classList.add("ima-ui", "hidden"), t.after(n), e.ui.adContainer.classList.add("ad-container"), n.appendChild(e.ui.adContainer);
  const h = document.createElement("div");
  h.classList.add("animation"), e.ui.loadingSpinner.classList.add("loading-spinner", "hidden"), e.ui.loadingSpinner.appendChild(h), u.appendChild(e.ui.loadingSpinner), e.ui.controlsTop.classList.add("controls-top"), e.ui.controlsBottom.classList.add("controls-bottom"), u.appendChild(e.ui.controlsTop), u.appendChild(e.ui.controlsBottom), n.appendChild(u), ft(e, ze.LEFT).forEach((a) => {
    e.ui.controlsBottom.appendChild(mt(a));
  });
  const p = document.createElement("div");
  p.classList.add("time-label"), p.innerText = "Ad", e.ui.controlsBottom.appendChild(p), ft(e, ze.RIGHT).forEach((a) => {
    e.ui.controlsBottom.appendChild(mt(a));
  });
}, gt = (e) => e !== !0 ? {
  log: () => {
  },
  warn: () => {
  },
  error: () => {
  }
} : {
  log: (...t) => {
    console.log(t);
  },
  warn: (...t) => {
    console.warn(t);
  },
  error: (...t) => {
    console.error(t);
  }
};
class X {
  constructor() {
    M(this, "google"), M(this, "_dataStore"), M(this, "_chezaDataStore"), M(this, "logger"), M(this, "_onAdsManagerLoaded", (t) => {
      var n, u, h, p;
      const a = this._getGoogle(), i = (n = this._chezaDataStore) == null ? void 0 : n.videoElement, c = (u = this._dataStore.google) == null ? void 0 : u.ima.ViewMode.NORMAL, s = new a.ima.AdsRenderingSettings();
      s.loadVideoTimeout = (p = (h = this._dataStore.opts) == null ? void 0 : h.loadVideoTimeout) != null ? p : -1, s.uiElements = [], this._dataStore.adsManager = t.getAdsManager(i, s), window.addEventListener("resize", () => {
        var d;
        document.fullscreenElement === null && ((d = this._dataStore.adsManager) == null || d.resize(i.clientWidth, i.clientHeight, c));
      }), ei(this._dataStore);
    }), M(this, "_onAdError", (t) => {
      this.logger.error("_onAdError", t.getError()), this._dataStore.adsManager !== void 0 && this._dataStore.adsManager.destroy();
    }), M(this, "_startAds", (t) => {
      var n, u, h, p, a, i, c, s;
      if (this._dataStore.adsLoaded)
        return;
      this._dataStore.adsLoaded = !0, t.preventDefault(), (n = this._dataStore.adDisplayContainer) == null || n.initialize();
      const d = (h = (u = this._chezaDataStore) == null ? void 0 : u.videoElement.offsetWidth) != null ? h : 0, o = (a = (p = this._chezaDataStore) == null ? void 0 : p.videoElement.offsetHeight) != null ? a : 0;
      try {
        const y = this._getViewMode();
        (i = this._dataStore.adsManager) == null || i.init(d, o, y), (c = this._dataStore.adsManager) == null || c.start();
      } catch {
        this.logger.error("AdsManager could not be started"), (s = this._chezaDataStore) == null || s.videoElement.play();
      }
      const l = this._chezaDataStore, r = l.videoElement, m = l.controlsBottom.querySelector(".button-play"), f = l.progressContainer;
      r.removeEventListener("play", this._startAds), r.removeEventListener("click", this._startAds), m.removeEventListener("click", this._startAds), f.removeEventListener("click", this._startAds);
    }), M(this, "_requestAds", () => {
      var t, n, u;
      const h = this._getGoogle(), p = this._chezaDataStore.videoElement, a = new h.ima.AdsRequest(), i = (t = p.getAttribute("data-ima-ad-tag-url")) != null ? t : "";
      a.adTagUrl = i, ((n = this._dataStore.opts) == null ? void 0 : n.omidAccessModeRules) !== void 0 && (a.omidAccessModeRules = this._dataStore.opts.omidAccessModeRules), a.linearAdSlotWidth = p.clientWidth, a.linearAdSlotHeight = p.clientHeight, a.nonLinearAdSlotWidth = p.clientWidth, a.nonLinearAdSlotHeight = p.clientHeight / 3, (u = this._dataStore.adsLoader) == null || u.requestAds(a);
    }), M(this, "_bindIMAVideoElementToDataStore", () => {
      var t;
      const n = this._dataStore.ui.adContainer, u = (t = n.querySelector("video")) != null ? t : n.querySelector("lima-video");
      this._dataStore.imaVideoElement = u;
    }), M(this, "_onVideoEnded", () => {
      var t;
      (t = this._dataStore.adsLoader) == null || t.contentComplete(), this._dataStore.adsLoaded = !1, this._requestAds(), this._chezaDataStore.videoElement.addEventListener("play", this._startAds);
    }), M(this, "_loadIMAScriptCallback", () => {
      var t, n, u, h;
      const p = this._getGoogle(), a = this._chezaDataStore, i = a.videoElement, c = a.controlsBottom.querySelector(".button-play"), s = a.progressContainer;
      p.ima.settings.setNumRedirects((n = (t = this._dataStore.opts) == null ? void 0 : t.maxRedirects) != null ? n : 5), ((u = this._dataStore.opts) == null ? void 0 : u.locale) !== void 0 && p.ima.settings.setLocale(this._dataStore.opts.locale), ((h = this._dataStore.opts) == null ? void 0 : h.ppid) !== void 0 && p.ima.settings.setPpid(this._dataStore.opts.ppid), this._dataStore.adDisplayContainer = new p.ima.AdDisplayContainer(this._dataStore.ui.adContainer, i), this._dataStore.adsLoader = new p.ima.AdsLoader(this._dataStore.adDisplayContainer), this._bindIMAVideoElementToDataStore(), this._dataStore.adsLoader.addEventListener(p.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this._onAdsManagerLoaded, !1), this._dataStore.adsLoader.addEventListener(p.ima.AdErrorEvent.Type.AD_ERROR, this._onAdError, !1), i.addEventListener("ended", this._onVideoEnded, !1), this._requestAds(), i.addEventListener("click", this._startAds, !1), c.addEventListener("click", this._startAds, !1), s.addEventListener("click", this._startAds, !1);
    }), this._chezaDataStore = void 0, this._dataStore = ti(), this.logger = gt(!1);
  }
  _getGoogle() {
    if (this._dataStore.google === void 0)
      throw new Error("Google IMA SDK not loaded");
    return this._dataStore.google;
  }
  _getViewMode() {
    var t, n, u;
    return document.fullscreenElement === ((t = this._chezaDataStore) == null ? void 0 : t.rootElement) ? (n = this._dataStore.google) == null ? void 0 : n.ima.ViewMode.FULLSCREEN : (u = this._dataStore.google) == null ? void 0 : u.ima.ViewMode.NORMAL;
  }
  getDataStore() {
    return this._dataStore;
  }
  add(t, n) {
    this._dataStore.opts = n, this.logger = gt(n == null ? void 0 : n.debug), this._dataStore.videoElement = t.videoElement, this._chezaDataStore = t, this._dataStore.rootElement = t.rootElement, this._dataStore.defaultUIElement = t.uiRoot, ri(this._dataStore), Xt(n == null ? void 0 : n.debug).then((u) => {
      this._dataStore.google = u, this._loadIMAScriptCallback();
    }).catch((u) => {
      this.logger.error(u);
    });
  }
  remove(t) {
    this._dataStore.ui.root.remove();
  }
}
M(X, "Version", ar.version), M(X, "Name", "ChezaIMAPlugin"), M(X, "Opts", {});
j.registerPlugin(X);
const ni = document.querySelector("video"), ii = new j(ni), oi = {
  locale: "de",
  maxRedirects: 10,
  loadVideoTimeout: -1,
  adLabelTime: "Werbung endet in {{secondsRemaining}} Sekunden",
  adLabelNTime: "Werbung {{adPosition}} von {{totalAds}} endet in {{secondsRemaining}}s"
};
ii.addPlugin(X.Name, oi);
export {
  j as Cheza,
  X as ChezaIMAPlugin
};
