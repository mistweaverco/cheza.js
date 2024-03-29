var Ot = Object.defineProperty, Rt = (e, t, r) => t in e ? Ot(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, T = (e, t, r) => (Rt(e, typeof t != "symbol" ? t + "" : t, r), r);
const It = "@mistweaverco/cheza.js", Dt = "1.0.3", Nt = "types/index.d.ts", Tt = "dist/cheza.mjs", Bt = [
  "dist",
  "types"
], $t = {
  dev: "vite",
  build: "tsc && vite build",
  release: "tsc && vite build && npm publish --access public"
}, Ft = {
  vite: "3.2.5"
}, Ht = {
  "@mistweaverco/vite-svg-loader": "1.0.0",
  "svg-sprite": "2.0.2"
}, Vt = {
  name: It,
  version: Dt,
  types: Nt,
  main: Tt,
  files: Bt,
  scripts: $t,
  dependencies: Ft,
  devDependencies: Ht
};
var vt = /* @__PURE__ */ ((e) => (e.MP4 = "video/mp4", e.OGG = "video/ogg", e.WEBM = "video/webm", e.DASH = "application/dash+xml", e.HLS = "application/x-mpegURL", e))(vt || {});
const Ut = (e) => {
  const t = document.createElement("video");
  return t.canPlayType(e) === "probably" || t.canPlayType(e) === "maybe";
}, jt = '<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><symbol viewBox="0 0 18 18" id="cheza-airplay" xmlns="http://www.w3.org/2000/svg"><path d="M16 1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v-2H3V3h12v8h-2v2h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/><path d="M4 17h10l-5-6z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-captions-off" xmlns="http://www.w3.org/2000/svg"><path d="M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1Zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69Zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69Z" fill-rule="evenodd" fill-opacity=".5"/></symbol><symbol viewBox="0 0 18 18" id="cheza-captions-on" xmlns="http://www.w3.org/2000/svg"><path d="M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1Zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69Zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69Z" fill-rule="evenodd"/></symbol><symbol viewBox="0 0 18 18" id="cheza-download" xmlns="http://www.w3.org/2000/svg"><path d="M9 13c.3 0 .5-.1.7-.3L15.4 7 14 5.6l-4 4V1H8v8.6l-4-4L2.6 7l5.7 5.7c.2.2.4.3.7.3ZM2 15h14v2H2z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-enter-fullscreen" xmlns="http://www.w3.org/2000/svg"><path d="M10 3h3.6l-4 4L11 8.4l4-4V8h2V1h-7zM7 9.6l-4 4V10H1v7h7v-2H4.4l4-4z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-exit-fullscreen" xmlns="http://www.w3.org/2000/svg"><path d="M1 12h3.6l-4 4L2 17.4l4-4V17h2v-7H1zM16 .6l-4 4V1h-2v7h7V6h-3.6l4-4z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-fast-forward" xmlns="http://www.w3.org/2000/svg"><path d="M7.875 7.171 0 1v16l7.875-6.171V17L18 9 7.875 1z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-logo-vimeo" xmlns="http://www.w3.org/2000/svg"><path d="M17 5.3c-.1 1.6-1.2 3.7-3.3 6.4-2.2 2.8-4 4.2-5.5 4.2-.9 0-1.7-.9-2.4-2.6C5 10.9 4.4 6 3 6c-.1 0-.5.3-1.2.8l-.8-1c.8-.7 3.5-3.4 4.7-3.5 1.2-.1 2 .7 2.3 2.5.3 2 .8 6.1 1.8 6.1.9 0 2.5-3.4 2.6-4 .1-.9-.3-1.9-2.3-1.1.8-2.6 2.3-3.8 4.5-3.8 1.7.1 2.5 1.2 2.4 3.3Z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-logo-youtube" xmlns="http://www.w3.org/2000/svg"><path d="M16.8 5.8c-.2-1.3-.8-2.2-2.2-2.4C12.4 3 9 3 9 3s-3.4 0-5.6.4C2 3.6 1.3 4.5 1.2 5.8 1 7.1 1 9 1 9s0 1.9.2 3.2c.2 1.3.8 2.2 2.2 2.4C5.6 15 9 15 9 15s3.4 0 5.6-.4c1.4-.3 2-1.1 2.2-2.4.2-1.3.2-3.2.2-3.2s0-1.9-.2-3.2ZM7 12V6l5 3-5 3Z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-muted" xmlns="http://www.w3.org/2000/svg"><path d="m12.4 12.5 2.1-2.1 2.1 2.1 1.4-1.4L15.9 9 18 6.9l-1.4-1.4-2.1 2.1-2.1-2.1L11 6.9 13.1 9 11 11.1zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008Z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-pause" xmlns="http://www.w3.org/2000/svg"><path d="M6 1H3c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1ZM12 1c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1h-3Z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-pip" xmlns="http://www.w3.org/2000/svg"><path d="M13.293 3.293 7.022 9.564l1.414 1.414 6.271-6.271L17 7V1h-6z"/><path d="M13 15H3V5h5V3H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6h-2v5Z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-play" xmlns="http://www.w3.org/2000/svg"><path d="M15.562 8.1 3.87.225C3.052-.337 2 .225 2 1.125v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8Z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-restart" xmlns="http://www.w3.org/2000/svg"><path d="m9.7 1.2.7 6.4 2.1-2.1c1.9 1.9 1.9 5.1 0 7-.9 1-2.2 1.5-3.5 1.5-1.3 0-2.6-.5-3.5-1.5-1.9-1.9-1.9-5.1 0-7 .6-.6 1.4-1.1 2.3-1.3l-.6-1.9C6 2.6 4.9 3.2 4 4.1 1.3 6.8 1.3 11.2 4 14c1.3 1.3 3.1 2 4.9 2 1.9 0 3.6-.7 4.9-2 2.7-2.7 2.7-7.1 0-9.9L16 1.9l-6.3-.7Z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-rewind" xmlns="http://www.w3.org/2000/svg"><path d="M10.125 1 0 9l10.125 8v-6.171L18 17V1l-7.875 6.171z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-settings" xmlns="http://www.w3.org/2000/svg"><path d="M16.135 7.784a2 2 0 0 1-1.23-2.969c.322-.536.225-.998-.094-1.316l-.31-.31c-.318-.318-.78-.415-1.316-.094a2 2 0 0 1-2.969-1.23C10.065 1.258 9.669 1 9.219 1h-.438c-.45 0-.845.258-.997.865a2 2 0 0 1-2.969 1.23c-.536-.322-.999-.225-1.317.093l-.31.31c-.318.318-.415.781-.093 1.317a2 2 0 0 1-1.23 2.969C1.26 7.935 1 8.33 1 8.781v.438c0 .45.258.845.865.997a2 2 0 0 1 1.23 2.969c-.322.536-.225.998.094 1.316l.31.31c.319.319.782.415 1.316.094a2 2 0 0 1 2.969 1.23c.151.607.547.865.997.865h.438c.45 0 .845-.258.997-.865a2 2 0 0 1 2.969-1.23c.535.321.997.225 1.316-.094l.31-.31c.318-.318.415-.781.094-1.316a2 2 0 0 1 1.23-2.969c.607-.151.865-.547.865-.997v-.438c0-.451-.26-.846-.865-.997ZM9 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></symbol><symbol viewBox="0 0 18 18" id="cheza-volume" xmlns="http://www.w3.org/2000/svg"><path d="M15.6 3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4C15.4 5.9 16 7.4 16 9c0 1.6-.6 3.1-1.8 4.3-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3C17.1 13.2 18 11.2 18 9s-.9-4.2-2.4-5.7Z"/><path d="M11.282 5.282a.909.909 0 0 0 0 1.316c.735.735.995 1.458.995 2.402 0 .936-.425 1.917-.995 2.487a.909.909 0 0 0 0 1.316c.145.145.636.262 1.018.156a.725.725 0 0 0 .298-.156C13.773 11.733 14.13 10.16 14.13 9c0-.17-.002-.34-.011-.51-.053-.992-.319-2.005-1.522-3.208a.909.909 0 0 0-1.316 0ZM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008Z"/></symbol></svg>', zt = (e) => {
  const t = document.createElement("button");
  return t.classList.add("button", "button-" + e.name), t.setAttribute("aria-label", e.ariaLabel), t.setAttribute("title", e.title), t.setAttribute("type", "button"), t.appendChild(e.svg), e.disabled !== void 0 && e.disabled && t.setAttribute("disabled", "disabled"), e.on !== void 0 && e.on.length > 0 && e.on.forEach((r) => {
    t.addEventListener(r.name, r.callback);
  }), e.hidden !== void 0 && e.hidden && t.classList.add("hidden"), t;
}, Gt = (e, t) => {
  var r, c, h, p, s, i, u, a, d, o, l;
  const n = (s = (p = (h = (c = (r = e.requestFullscreen) != null ? r : e.webkitRequestFullscreen) != null ? c : e.webkitEnterFullscreen) != null ? h : e.mozRequestFullScreen) != null ? p : e.msRequestFullscreen) != null ? s : null, m = (l = (o = (d = (a = (u = (i = t.requestFullscreen) != null ? i : t.webkitRequestFullscreen) != null ? u : t.webkitEnterFullscreen) != null ? a : t.requestFullscreen) != null ? d : t.mozRequestFullScreen) != null ? o : t.msRequestFullscreen) != null ? l : null;
  n !== null ? n.apply(e) : m !== null && m.apply(t);
}, qt = (e) => {
  var t, r, c, h, p;
  const s = document, i = (h = (c = (r = (t = s.exitFullscreen) != null ? t : s.webkitExitFullscreen) != null ? r : s.mozCancelFullScreen) != null ? c : s.msExitFullscreen) != null ? h : null, u = (p = e.webkitExitFullscreen) != null ? p : null;
  i !== null ? i.apply(s) : u !== null && u.apply(e);
}, q = (e) => {
  const t = [];
  t.push(["role", "presentation"]), t.push(["focusable", "false"]);
  const r = "http://www.w3.org/2000/svg", c = "#cheza-", h = document.createElementNS(r, "svg");
  t.forEach((i) => {
    h.setAttribute(i[0], i[1]);
  });
  const p = document.createElementNS(r, "use"), s = c + e;
  return p.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s), h.appendChild(p), h;
}, Kt = (e) => [
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
          Gt(e.rootElement, e.videoElement);
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
          qt(e.videoElement);
        }
      }
    ]
  }
], I = (e, t) => t.controlsBottom.querySelector(`.button-${e}`), Wt = (e) => {
  const { videoElement: t } = e, r = e.progress;
  ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].forEach((c) => {
    document.addEventListener(c, () => {
      document.fullscreenElement === e.rootElement ? (I("enter-fullscreen", e).classList.add("hidden"), I("exit-fullscreen", e).classList.remove("hidden")) : (I("enter-fullscreen", e).classList.remove("hidden"), I("exit-fullscreen", e).classList.add("hidden"));
    });
  }), t.addEventListener("click", () => {
    t.paused ? t.play() : t.pause();
  }), t.addEventListener("waiting", () => {
    e.loadingSpinner.classList.remove("hidden");
  }), t.addEventListener("canplay", () => {
    e.loadingSpinner.classList.add("hidden");
  }), t.addEventListener("playing", () => {
    e.loadingSpinner.classList.add("hidden");
  }), t.addEventListener("timeupdate", () => {
    r.style.width = `${t.currentTime / t.duration * 100}%`;
  }), t.addEventListener("play", () => {
    I("play", e).classList.add("hidden"), I("pause", e).classList.remove("hidden");
  }), t.addEventListener("pause", () => {
    I("play", e).classList.remove("hidden"), I("pause", e).classList.add("hidden");
  }), t.addEventListener("volumechange", () => {
    t.muted ? (I("volume", e).classList.add("hidden"), I("muted", e).classList.remove("hidden")) : (I("volume", e).classList.remove("hidden"), I("muted", e).classList.add("hidden"));
  });
}, Zt = () => {
  if (document.getElementById("cheza-default-ui-icons") === null) {
    const e = document.createElement("div");
    e.id = "cheza-default-ui-icons", e.innerHTML = jt, document.body.appendChild(e);
  }
}, Jt = (e, t) => {
  const { videoElement: r } = t, { offsetX: c } = e, { offsetWidth: h } = t.progressContainer, p = c / h;
  t.progress.style.width = `${p * 100}%`, r.currentTime = r.duration * p;
}, Qt = (e) => {
  Zt();
  const t = e.videoElement.parentElement, r = e.rootElement, c = e.uiRoot;
  r.classList.add("cheza"), c.classList.add("default-ui"), t.insertBefore(r, e.videoElement), r.appendChild(e.videoElement);
  const h = document.createElement("div");
  h.classList.add("animation"), e.loadingSpinner.classList.add("loading-spinner", "hidden"), e.loadingSpinner.appendChild(h), c.appendChild(e.loadingSpinner), e.controlsTop.classList.add("controls-top"), e.controlsBottom.classList.add("controls-bottom"), e.progressContainer.classList.add("progress-container"), c.appendChild(e.controlsTop), c.appendChild(e.progressContainer), c.appendChild(e.controlsBottom);
  const p = e.progressContainer, s = document.createElement("div");
  return s.classList.add("progress-inline"), e.progress.classList.add("progress"), p.addEventListener("click", (i) => {
    Jt(i, e);
  }), s.appendChild(e.progress), p.appendChild(s), Kt(e).forEach((i) => {
    const u = zt(i);
    e.controlsBottom.appendChild(u);
  }), r.appendChild(e.uiRoot), Wt(e), r;
}, Yt = (e) => {
  const t = document.createElement("div"), r = document.createElement("div"), c = document.createElement("div"), h = document.createElement("div"), p = document.createElement("div"), s = document.createElement("div"), i = document.createElement("div");
  return {
    rootElement: t,
    uiRoot: r,
    videoElement: e,
    progressContainer: c,
    progress: h,
    controlsTop: p,
    controlsBottom: s,
    loadingSpinner: i,
    activePlugins: /* @__PURE__ */ new Map()
  };
}, j = /* @__PURE__ */ new Map();
class U {
  constructor(t) {
    T(this, "_dataStore"), T(this, "getDataStore", () => this._dataStore), T(this, "addPlugin", (r, c) => {
      if (j.has(r) && !this._dataStore.activePlugins.has(r)) {
        const h = j.get(r), p = new h();
        return p.add(this._dataStore, c), this._dataStore.activePlugins.set(r, p), !0;
      }
      return !1;
    }), T(this, "removePlugin", (r, c) => j.has(r) && this._dataStore.activePlugins.has(r) ? (this._dataStore.activePlugins.get(r).remove(this._dataStore, c), this._dataStore.activePlugins.delete(r), !0) : !1), T(this, "getPlugin", (r) => {
      if (this._dataStore.activePlugins.has(r))
        return this._dataStore.activePlugins.get(r);
    }), this._dataStore = Yt(t), t.removeAttribute("controls"), Qt(this._dataStore);
  }
}
T(U, "Version", Vt.version), T(U, "canPlayType", Ut), T(U, "CanPlayTypes", vt), T(U, "registerPlugin", (e) => j.has(e.Name) ? !1 : (j.set(e.Name, e), !0)), T(U, "unregisterPlugin", (e) => j.has(e) ? (j.delete(e), !0) : !1);
var Xt = Object.defineProperty, er = (e, t, r) => t in e ? Xt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, M = (e, t, r) => (er(e, typeof t != "symbol" ? t + "" : t, r), r);
const tr = async (e) => {
  let t = "https://imasdk.googleapis.com/js/sdkloader/ima3.js";
  return e === !0 && (t = "https://imasdk.googleapis.com/js/sdkloader/ima3_debug.js"), await new Promise((r, c) => {
    if (document.getElementById("ima3-sdk") !== null) {
      r(window.google);
      return;
    }
    const h = document.createElement("script");
    h.id = "ima3-sdk", h.async = !0, h.addEventListener("load", function() {
      r(window.google);
    }), h.addEventListener("error", function() {
      this.remove(), c(new Error(`${t} could not be loaded`));
    }), h.src = t, document.head.appendChild(h);
  });
}, rr = "@mistweaverco/cheza.js-ima-plugin", nr = "1.0.8", ir = "types/index.d.ts", or = [
  "dist",
  "types"
], sr = "dist/cheza.js-ima-plugin.mjs", ar = {
  dev: "vite",
  build: "tsc && vite build",
  release: "tsc && vite build && npm publish --access public"
}, lr = {
  handlebars: "4.7.7"
}, ur = {
  name: rr,
  version: nr,
  types: ir,
  files: or,
  main: sr,
  scripts: ar,
  dependencies: lr
}, cr = (e) => ({
  dispatch: (t, r) => {
    let c;
    r !== void 0 && (c = { detail: r });
    const h = new CustomEvent(`cheza:ima:${t}`, c);
    e.dispatchEvent(h);
  }
});
var P = /* @__PURE__ */ ((e) => (e.AD_ERROR = "adError", e.AD_CAN_PLAY = "adCanPlay", e.AD_BUFFERING = "adBuffering", e.AD_METADATA = "adMetadata", e.AD_PROGRESS = "adProgress", e.AD_CLICK = "adClick", e.AD_COMPLETE = "adComplete", e.AD_SKIPPED = "adSkipped", e.AD_FIRST_QUARTILE = "adFirstQuartile", e.AD_MIDPOINT = "adMidpoint", e.AD_THIRD_QUARTILE = "adThirdQuartile", e.AD_LOADED = "adLoaded", e.AD_STARTED = "adStarted", e.AD_PAUSED = "adPaused", e.AD_RESUMED = "adResumed", e.AD_VOLUME_CHANGED = "adVolumeChanged", e.AD_VOLUME_MUTED = "adVolumeMuted", e))(P || {}), Q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Le = { exports: {} }, xe = { exports: {} }, D = {}, x = {};
x.__esModule = !0;
x.extend = yt;
x.indexOf = gr;
x.escapeExpression = vr;
x.isEmpty = yr;
x.createFrame = _r;
x.blockParams = Sr;
x.appendContextPath = br;
var hr = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;",
  "=": "&#x3D;"
}, dr = /[&<>"'`=]/g, mr = /[&<>"'`=]/;
function fr(e) {
  return hr[e];
}
function yt(e) {
  for (var t = 1; t < arguments.length; t++)
    for (var r in arguments[t])
      Object.prototype.hasOwnProperty.call(arguments[t], r) && (e[r] = arguments[t][r]);
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
function gr(e, t) {
  for (var r = 0, c = e.length; r < c; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function vr(e) {
  if (typeof e != "string") {
    if (e && e.toHTML)
      return e.toHTML();
    if (e == null)
      return "";
    if (!e)
      return e + "";
    e = "" + e;
  }
  return mr.test(e) ? e.replace(dr, fr) : e;
}
function yr(e) {
  return !e && e !== 0 ? !0 : !!(_t(e) && e.length === 0);
}
function _r(e) {
  var t = yt({}, e);
  return t._parent = e, t;
}
function Sr(e, t) {
  return e.path = t, e;
}
function br(e, t) {
  return (e ? e + "." : "") + t;
}
var R = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  var r = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
  function c(h, p) {
    var s = p && p.loc, i = void 0, u = void 0, a = void 0, d = void 0;
    s && (i = s.start.line, u = s.end.line, a = s.start.column, d = s.end.column, h += " - " + i + ":" + a);
    for (var o = Error.prototype.constructor.call(this, h), l = 0; l < r.length; l++)
      this[r[l]] = o[r[l]];
    Error.captureStackTrace && Error.captureStackTrace(this, c);
    try {
      s && (this.lineNumber = i, this.endLineNumber = u, Object.defineProperty ? (Object.defineProperty(this, "column", {
        value: a,
        enumerable: !0
      }), Object.defineProperty(this, "endColumn", {
        value: d,
        enumerable: !0
      })) : (this.column = a, this.endColumn = d));
    } catch {
    }
  }
  c.prototype = new Error(), t.default = c, e.exports = t.default;
})(R, R.exports);
var te = {}, Ae = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  var r = x;
  t.default = function(c) {
    c.registerHelper("blockHelperMissing", function(h, p) {
      var s = p.inverse, i = p.fn;
      if (h === !0)
        return i(this);
      if (h === !1 || h == null)
        return s(this);
      if (r.isArray(h))
        return h.length > 0 ? (p.ids && (p.ids = [p.name]), c.helpers.each(h, p)) : s(this);
      if (p.data && p.ids) {
        var u = r.createFrame(p.data);
        u.contextPath = r.appendContextPath(p.data.contextPath, p.name), p = { data: u };
      }
      return i(h, p);
    });
  }, e.exports = t.default;
})(Ae, Ae.exports);
var Pe = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  function r(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var c = x, h = R.exports, p = r(h);
  t.default = function(s) {
    s.registerHelper("each", function(i, u) {
      if (!u)
        throw new p.default("Must pass iterator to #each");
      var a = u.fn, d = u.inverse, o = 0, l = "", n = void 0, m = void 0;
      u.data && u.ids && (m = c.appendContextPath(u.data.contextPath, u.ids[0]) + "."), c.isFunction(i) && (i = i.call(this)), u.data && (n = c.createFrame(u.data));
      function f(g, S, E) {
        n && (n.key = g, n.index = S, n.first = S === 0, n.last = !!E, m && (n.contextPath = m + g)), l = l + a(i[g], {
          data: n,
          blockParams: c.blockParams([i[g], g], [m + g, null])
        });
      }
      if (i && typeof i == "object")
        if (c.isArray(i))
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
})(Pe, Pe.exports);
var Me = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  function r(p) {
    return p && p.__esModule ? p : { default: p };
  }
  var c = R.exports, h = r(c);
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
  function r(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var c = x, h = R.exports, p = r(h);
  t.default = function(s) {
    s.registerHelper("if", function(i, u) {
      if (arguments.length != 2)
        throw new p.default("#if requires exactly one argument");
      return c.isFunction(i) && (i = i.call(this)), !u.hash.includeZero && !i || c.isEmpty(i) ? u.inverse(this) : u.fn(this);
    }), s.registerHelper("unless", function(i, u) {
      if (arguments.length != 2)
        throw new p.default("#unless requires exactly one argument");
      return s.helpers.if.call(this, i, {
        fn: u.inverse,
        inverse: u.fn,
        hash: u.hash
      });
    });
  }, e.exports = t.default;
})(Oe, Oe.exports);
var Re = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = function(r) {
    r.registerHelper("log", function() {
      for (var c = [void 0], h = arguments[arguments.length - 1], p = 0; p < arguments.length - 1; p++)
        c.push(arguments[p]);
      var s = 1;
      h.hash.level != null ? s = h.hash.level : h.data && h.data.level != null && (s = h.data.level), c[0] = s, r.log.apply(r, c);
    });
  }, e.exports = t.default;
})(Re, Re.exports);
var Ie = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = function(r) {
    r.registerHelper("lookup", function(c, h, p) {
      return c && p.lookupProperty(c, h);
    });
  }, e.exports = t.default;
})(Ie, Ie.exports);
var De = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  function r(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var c = x, h = R.exports, p = r(h);
  t.default = function(s) {
    s.registerHelper("with", function(i, u) {
      if (arguments.length != 2)
        throw new p.default("#with requires exactly one argument");
      c.isFunction(i) && (i = i.call(this));
      var a = u.fn;
      if (c.isEmpty(i))
        return u.inverse(this);
      var d = u.data;
      return u.data && u.ids && (d = c.createFrame(u.data), d.contextPath = c.appendContextPath(u.data.contextPath, u.ids[0])), a(i, {
        data: d,
        blockParams: c.blockParams([i], [d && d.contextPath])
      });
    });
  }, e.exports = t.default;
})(De, De.exports);
te.__esModule = !0;
te.registerDefaultHelpers = Tr;
te.moveHelperToHooks = Br;
function z(e) {
  return e && e.__esModule ? e : { default: e };
}
var Er = Ae.exports, kr = z(Er), wr = Pe.exports, Lr = z(wr), xr = Me.exports, Cr = z(xr), Ar = Oe.exports, Pr = z(Ar), Mr = Re.exports, Or = z(Mr), Rr = Ie.exports, Ir = z(Rr), Dr = De.exports, Nr = z(Dr);
function Tr(e) {
  kr.default(e), Lr.default(e), Cr.default(e), Pr.default(e), Or.default(e), Ir.default(e), Nr.default(e);
}
function Br(e, t, r) {
  e.helpers[t] && (e.hooks[t] = e.helpers[t], r || delete e.helpers[t]);
}
var qe = {}, Ne = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  var r = x;
  t.default = function(c) {
    c.registerDecorator("inline", function(h, p, s, i) {
      var u = h;
      return p.partials || (p.partials = {}, u = function(a, d) {
        var o = s.partials;
        s.partials = r.extend({}, o, p.partials);
        var l = h(a, d);
        return s.partials = o, l;
      }), p.partials[i.args[0]] = i.fn, u;
    });
  }, e.exports = t.default;
})(Ne, Ne.exports);
qe.__esModule = !0;
qe.registerDefaultDecorators = Vr;
function $r(e) {
  return e && e.__esModule ? e : { default: e };
}
var Fr = Ne.exports, Hr = $r(Fr);
function Vr(e) {
  Hr.default(e);
}
var ce = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  var r = x, c = {
    methodMap: ["debug", "info", "warn", "error"],
    level: "info",
    lookupLevel: function(h) {
      if (typeof h == "string") {
        var p = r.indexOf(c.methodMap, h.toLowerCase());
        p >= 0 ? h = p : h = parseInt(h, 10);
      }
      return h;
    },
    log: function(h) {
      if (h = c.lookupLevel(h), typeof console < "u" && c.lookupLevel(c.level) <= h) {
        var p = c.methodMap[h];
        console[p] || (p = "log");
        for (var s = arguments.length, i = Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++)
          i[u - 1] = arguments[u];
        console[p].apply(console, i);
      }
    }
  };
  t.default = c, e.exports = t.default;
})(ce, ce.exports);
var W = {}, Ke = {};
Ke.__esModule = !0;
Ke.createNewLookupObject = jr;
var Ur = x;
function jr() {
  for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Ur.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(t));
}
W.__esModule = !0;
W.createProtoAccessControl = Kr;
W.resultIsAllowed = Wr;
W.resetLoggedProperties = Qr;
function zr(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t.default = e, t;
}
var Qe = Ke, Gr = ce.exports, qr = zr(Gr), pe = /* @__PURE__ */ Object.create(null);
function Kr(e) {
  var t = /* @__PURE__ */ Object.create(null);
  t.constructor = !1, t.__defineGetter__ = !1, t.__defineSetter__ = !1, t.__lookupGetter__ = !1;
  var r = /* @__PURE__ */ Object.create(null);
  return r.__proto__ = !1, {
    properties: {
      whitelist: Qe.createNewLookupObject(r, e.allowedProtoProperties),
      defaultValue: e.allowProtoPropertiesByDefault
    },
    methods: {
      whitelist: Qe.createNewLookupObject(t, e.allowedProtoMethods),
      defaultValue: e.allowProtoMethodsByDefault
    }
  };
}
function Wr(e, t, r) {
  return Zr(typeof e == "function" ? t.methods : t.properties, r);
}
function Zr(e, t) {
  return e.whitelist[t] !== void 0 ? e.whitelist[t] === !0 : e.defaultValue !== void 0 ? e.defaultValue : (Jr(t), !1);
}
function Jr(e) {
  pe[e] !== !0 && (pe[e] = !0, qr.log("error", 'Handlebars: Access has been denied to resolve the property "' + e + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
}
function Qr() {
  Object.keys(pe).forEach(function(e) {
    delete pe[e];
  });
}
D.__esModule = !0;
D.HandlebarsEnvironment = Te;
function St(e) {
  return e && e.__esModule ? e : { default: e };
}
var V = x, Yr = R.exports, ge = St(Yr), Xr = te, en = qe, tn = ce.exports, he = St(tn), rn = W, nn = "4.7.7";
D.VERSION = nn;
var on = 8;
D.COMPILER_REVISION = on;
var sn = 7;
D.LAST_COMPATIBLE_COMPILER_REVISION = sn;
var an = {
  1: "<= 1.0.rc.2",
  2: "== 1.0.0-rc.3",
  3: "== 1.0.0-rc.4",
  4: "== 1.x.x",
  5: "== 2.0.0-alpha.x",
  6: ">= 2.0.0-beta.1",
  7: ">= 4.0.0 <4.3.0",
  8: ">= 4.3.0"
};
D.REVISION_CHANGES = an;
var ve = "[object Object]";
function Te(e, t, r) {
  this.helpers = e || {}, this.partials = t || {}, this.decorators = r || {}, Xr.registerDefaultHelpers(this), en.registerDefaultDecorators(this);
}
Te.prototype = {
  constructor: Te,
  logger: he.default,
  log: he.default.log,
  registerHelper: function(e, t) {
    if (V.toString.call(e) === ve) {
      if (t)
        throw new ge.default("Arg not supported with multiple helpers");
      V.extend(this.helpers, e);
    } else
      this.helpers[e] = t;
  },
  unregisterHelper: function(e) {
    delete this.helpers[e];
  },
  registerPartial: function(e, t) {
    if (V.toString.call(e) === ve)
      V.extend(this.partials, e);
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
    if (V.toString.call(e) === ve) {
      if (t)
        throw new ge.default("Arg not supported with multiple decorators");
      V.extend(this.decorators, e);
    } else
      this.decorators[e] = t;
  },
  unregisterDecorator: function(e) {
    delete this.decorators[e];
  },
  resetLoggedPropertyAccesses: function() {
    rn.resetLoggedProperties();
  }
};
var ln = he.default.log;
D.log = ln;
D.createFrame = V.createFrame;
D.logger = he.default;
var Be = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  function r(c) {
    this.string = c;
  }
  r.prototype.toString = r.prototype.toHTML = function() {
    return "" + this.string;
  }, t.default = r, e.exports = t.default;
})(Be, Be.exports);
var H = {}, We = {};
We.__esModule = !0;
We.wrapHelper = un;
function un(e, t) {
  if (typeof e != "function")
    return e;
  var r = function() {
    var c = arguments[arguments.length - 1];
    return arguments[arguments.length - 1] = t(c), e.apply(this, arguments);
  };
  return r;
}
H.__esModule = !0;
H.checkRevision = fn;
H.template = gn;
H.wrapProgram = le;
H.resolvePartial = vn;
H.invokePartial = yn;
H.noop = bt;
function cn(e) {
  return e && e.__esModule ? e : { default: e };
}
function pn(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t.default = e, t;
}
var hn = x, B = pn(hn), dn = R.exports, $ = cn(dn), F = D, Ye = te, mn = We, Xe = W;
function fn(e) {
  var t = e && e[0] || 1, r = F.COMPILER_REVISION;
  if (!(t >= F.LAST_COMPATIBLE_COMPILER_REVISION && t <= F.COMPILER_REVISION))
    if (t < F.LAST_COMPATIBLE_COMPILER_REVISION) {
      var c = F.REVISION_CHANGES[r], h = F.REVISION_CHANGES[t];
      throw new $.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + c + ") or downgrade your runtime to an older version (" + h + ").");
    } else
      throw new $.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").");
}
function gn(e, t) {
  if (!t)
    throw new $.default("No environment passed to template");
  if (!e || !e.main)
    throw new $.default("Unknown template object: " + typeof e);
  e.main.decorator = e.main_d, t.VM.checkRevision(e.compiler);
  var r = e.compiler && e.compiler[0] === 7;
  function c(s, i, u) {
    u.hash && (i = B.extend({}, i, u.hash), u.ids && (u.ids[0] = !0)), s = t.VM.resolvePartial.call(this, s, i, u);
    var a = B.extend({}, u, {
      hooks: this.hooks,
      protoAccessControl: this.protoAccessControl
    }), d = t.VM.invokePartial.call(this, s, i, a);
    if (d == null && t.compile && (u.partials[u.name] = t.compile(s, e.compilerOptions, t), d = u.partials[u.name](i, a)), d != null) {
      if (u.indent) {
        for (var o = d.split(`
`), l = 0, n = o.length; l < n && !(!o[l] && l + 1 === n); l++)
          o[l] = u.indent + o[l];
        d = o.join(`
`);
      }
      return d;
    } else
      throw new $.default("The partial " + u.name + " could not be compiled when running in runtime-only mode");
  }
  var h = {
    strict: function(s, i, u) {
      if (!s || !(i in s))
        throw new $.default('"' + i + '" not defined in ' + s, {
          loc: u
        });
      return h.lookupProperty(s, i);
    },
    lookupProperty: function(s, i) {
      var u = s[i];
      if (u == null || Object.prototype.hasOwnProperty.call(s, i) || Xe.resultIsAllowed(u, h.protoAccessControl, i))
        return u;
    },
    lookup: function(s, i) {
      for (var u = s.length, a = 0; a < u; a++) {
        var d = s[a] && h.lookupProperty(s[a], i);
        if (d != null)
          return s[a][i];
      }
    },
    lambda: function(s, i) {
      return typeof s == "function" ? s.call(i) : s;
    },
    escapeExpression: B.escapeExpression,
    invokePartial: c,
    fn: function(s) {
      var i = e[s];
      return i.decorator = e[s + "_d"], i;
    },
    programs: [],
    program: function(s, i, u, a, d) {
      var o = this.programs[s], l = this.fn(s);
      return i || d || a || u ? o = le(this, s, l, i, u, a, d) : o || (o = this.programs[s] = le(this, s, l)), o;
    },
    data: function(s, i) {
      for (; s && i--; )
        s = s._parent;
      return s;
    },
    mergeIfNeeded: function(s, i) {
      var u = s || i;
      return s && i && s !== i && (u = B.extend({}, i, s)), u;
    },
    nullContext: Object.seal({}),
    noop: t.VM.noop,
    compilerInfo: e.compiler
  };
  function p(s) {
    var i = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], u = i.data;
    p._setup(i), !i.partial && e.useData && (u = _n(s, u));
    var a = void 0, d = e.useBlockParams ? [] : void 0;
    e.useDepths && (i.depths ? a = s != i.depths[0] ? [s].concat(i.depths) : i.depths : a = [s]);
    function o(l) {
      return "" + e.main(h, l, h.helpers, h.partials, u, d, a);
    }
    return o = Et(e.main, o, h, i.depths || [], u, d), o(s, i);
  }
  return p.isTop = !0, p._setup = function(s) {
    if (s.partial)
      h.protoAccessControl = s.protoAccessControl, h.helpers = s.helpers, h.partials = s.partials, h.decorators = s.decorators, h.hooks = s.hooks;
    else {
      var i = B.extend({}, t.helpers, s.helpers);
      Sn(i, h), h.helpers = i, e.usePartial && (h.partials = h.mergeIfNeeded(s.partials, t.partials)), (e.usePartial || e.useDecorators) && (h.decorators = B.extend({}, t.decorators, s.decorators)), h.hooks = {}, h.protoAccessControl = Xe.createProtoAccessControl(s);
      var u = s.allowCallsToHelperMissing || r;
      Ye.moveHelperToHooks(h, "helperMissing", u), Ye.moveHelperToHooks(h, "blockHelperMissing", u);
    }
  }, p._child = function(s, i, u, a) {
    if (e.useBlockParams && !u)
      throw new $.default("must pass block params");
    if (e.useDepths && !a)
      throw new $.default("must pass parent depths");
    return le(h, s, e[s], i, 0, u, a);
  }, p;
}
function le(e, t, r, c, h, p, s) {
  function i(u) {
    var a = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], d = s;
    return s && u != s[0] && !(u === e.nullContext && s[0] === null) && (d = [u].concat(s)), r(e, u, e.helpers, e.partials, a.data || c, p && [a.blockParams].concat(p), d);
  }
  return i = Et(r, i, e, s, c, p), i.program = t, i.depth = s ? s.length : 0, i.blockParams = h || 0, i;
}
function vn(e, t, r) {
  return e ? !e.call && !r.name && (r.name = e, e = r.partials[e]) : r.name === "@partial-block" ? e = r.data["partial-block"] : e = r.partials[r.name], e;
}
function yn(e, t, r) {
  var c = r.data && r.data["partial-block"];
  r.partial = !0, r.ids && (r.data.contextPath = r.ids[0] || r.data.contextPath);
  var h = void 0;
  if (r.fn && r.fn !== bt && function() {
    r.data = F.createFrame(r.data);
    var p = r.fn;
    h = r.data["partial-block"] = function(s) {
      var i = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
      return i.data = F.createFrame(i.data), i.data["partial-block"] = c, p(s, i);
    }, p.partials && (r.partials = B.extend({}, r.partials, p.partials));
  }(), e === void 0 && h && (e = h), e === void 0)
    throw new $.default("The partial " + r.name + " could not be found");
  if (e instanceof Function)
    return e(t, r);
}
function bt() {
  return "";
}
function _n(e, t) {
  return (!t || !("root" in t)) && (t = t ? F.createFrame(t) : {}, t.root = e), t;
}
function Et(e, t, r, c, h, p) {
  if (e.decorator) {
    var s = {};
    t = e.decorator(t, s, r, c && c[0], h, p, c), B.extend(t, s);
  }
  return t;
}
function Sn(e, t) {
  Object.keys(e).forEach(function(r) {
    var c = e[r];
    e[r] = bn(c, t);
  });
}
function bn(e, t) {
  var r = t.lookupProperty;
  return mn.wrapHelper(e, function(c) {
    return B.extend({ lookupProperty: r }, c);
  });
}
var de = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = function(r) {
    var c = typeof Q < "u" ? Q : window, h = c.Handlebars;
    r.noConflict = function() {
      return c.Handlebars === r && (c.Handlebars = h), r;
    };
  }, e.exports = t.default;
})(de, de.exports);
(function(e, t) {
  t.__esModule = !0;
  function r(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  function c(_) {
    if (_ && _.__esModule)
      return _;
    var b = {};
    if (_ != null)
      for (var g in _)
        Object.prototype.hasOwnProperty.call(_, g) && (b[g] = _[g]);
    return b.default = _, b;
  }
  var h = D, p = c(h), s = Be.exports, i = r(s), u = R.exports, a = r(u), d = x, o = c(d), l = H, n = c(l), m = de.exports, f = r(m);
  function y() {
    var _ = new p.HandlebarsEnvironment();
    return o.extend(_, p), _.SafeString = i.default, _.Exception = a.default, _.Utils = o, _.escapeExpression = o.escapeExpression, _.VM = n, _.template = function(b) {
      return n.template(b, _);
    }, _;
  }
  var v = y();
  v.create = y, f.default(v), v.default = v, t.default = v, e.exports = t.default;
})(xe, xe.exports);
var me = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  var r = {
    helpers: {
      helperExpression: function(c) {
        return c.type === "SubExpression" || (c.type === "MustacheStatement" || c.type === "BlockStatement") && !!(c.params && c.params.length || c.hash);
      },
      scopedId: function(c) {
        return /^\.|this\b/.test(c.original);
      },
      simpleId: function(c) {
        return c.parts.length === 1 && !r.helpers.scopedId(c) && !c.depth;
      }
    }
  };
  t.default = r, e.exports = t.default;
})(me, me.exports);
var re = {}, $e = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  var r = function() {
    var c = {
      trace: function() {
      },
      yy: {},
      symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
      terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
      productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
      performAction: function(s, i, u, a, d, o, l) {
        var n = o.length - 1;
        switch (d) {
          case 1:
            return o[n - 1];
          case 2:
            this.$ = a.prepareProgram(o[n]);
            break;
          case 3:
            this.$ = o[n];
            break;
          case 4:
            this.$ = o[n];
            break;
          case 5:
            this.$ = o[n];
            break;
          case 6:
            this.$ = o[n];
            break;
          case 7:
            this.$ = o[n];
            break;
          case 8:
            this.$ = o[n];
            break;
          case 9:
            this.$ = {
              type: "CommentStatement",
              value: a.stripComment(o[n]),
              strip: a.stripFlags(o[n], o[n]),
              loc: a.locInfo(this._$)
            };
            break;
          case 10:
            this.$ = {
              type: "ContentStatement",
              original: o[n],
              value: o[n],
              loc: a.locInfo(this._$)
            };
            break;
          case 11:
            this.$ = a.prepareRawBlock(o[n - 2], o[n - 1], o[n], this._$);
            break;
          case 12:
            this.$ = { path: o[n - 3], params: o[n - 2], hash: o[n - 1] };
            break;
          case 13:
            this.$ = a.prepareBlock(o[n - 3], o[n - 2], o[n - 1], o[n], !1, this._$);
            break;
          case 14:
            this.$ = a.prepareBlock(o[n - 3], o[n - 2], o[n - 1], o[n], !0, this._$);
            break;
          case 15:
            this.$ = { open: o[n - 5], path: o[n - 4], params: o[n - 3], hash: o[n - 2], blockParams: o[n - 1], strip: a.stripFlags(o[n - 5], o[n]) };
            break;
          case 16:
            this.$ = { path: o[n - 4], params: o[n - 3], hash: o[n - 2], blockParams: o[n - 1], strip: a.stripFlags(o[n - 5], o[n]) };
            break;
          case 17:
            this.$ = { path: o[n - 4], params: o[n - 3], hash: o[n - 2], blockParams: o[n - 1], strip: a.stripFlags(o[n - 5], o[n]) };
            break;
          case 18:
            this.$ = { strip: a.stripFlags(o[n - 1], o[n - 1]), program: o[n] };
            break;
          case 19:
            var m = a.prepareBlock(o[n - 2], o[n - 1], o[n], o[n], !1, this._$), f = a.prepareProgram([m], o[n - 1].loc);
            f.chained = !0, this.$ = { strip: o[n - 2].strip, program: f, chain: !0 };
            break;
          case 20:
            this.$ = o[n];
            break;
          case 21:
            this.$ = { path: o[n - 1], strip: a.stripFlags(o[n - 2], o[n]) };
            break;
          case 22:
            this.$ = a.prepareMustache(o[n - 3], o[n - 2], o[n - 1], o[n - 4], a.stripFlags(o[n - 4], o[n]), this._$);
            break;
          case 23:
            this.$ = a.prepareMustache(o[n - 3], o[n - 2], o[n - 1], o[n - 4], a.stripFlags(o[n - 4], o[n]), this._$);
            break;
          case 24:
            this.$ = {
              type: "PartialStatement",
              name: o[n - 3],
              params: o[n - 2],
              hash: o[n - 1],
              indent: "",
              strip: a.stripFlags(o[n - 4], o[n]),
              loc: a.locInfo(this._$)
            };
            break;
          case 25:
            this.$ = a.preparePartialBlock(o[n - 2], o[n - 1], o[n], this._$);
            break;
          case 26:
            this.$ = { path: o[n - 3], params: o[n - 2], hash: o[n - 1], strip: a.stripFlags(o[n - 4], o[n]) };
            break;
          case 27:
            this.$ = o[n];
            break;
          case 28:
            this.$ = o[n];
            break;
          case 29:
            this.$ = {
              type: "SubExpression",
              path: o[n - 3],
              params: o[n - 2],
              hash: o[n - 1],
              loc: a.locInfo(this._$)
            };
            break;
          case 30:
            this.$ = { type: "Hash", pairs: o[n], loc: a.locInfo(this._$) };
            break;
          case 31:
            this.$ = { type: "HashPair", key: a.id(o[n - 2]), value: o[n], loc: a.locInfo(this._$) };
            break;
          case 32:
            this.$ = a.id(o[n - 1]);
            break;
          case 33:
            this.$ = o[n];
            break;
          case 34:
            this.$ = o[n];
            break;
          case 35:
            this.$ = { type: "StringLiteral", value: o[n], original: o[n], loc: a.locInfo(this._$) };
            break;
          case 36:
            this.$ = { type: "NumberLiteral", value: Number(o[n]), original: Number(o[n]), loc: a.locInfo(this._$) };
            break;
          case 37:
            this.$ = { type: "BooleanLiteral", value: o[n] === "true", original: o[n] === "true", loc: a.locInfo(this._$) };
            break;
          case 38:
            this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: a.locInfo(this._$) };
            break;
          case 39:
            this.$ = { type: "NullLiteral", original: null, value: null, loc: a.locInfo(this._$) };
            break;
          case 40:
            this.$ = o[n];
            break;
          case 41:
            this.$ = o[n];
            break;
          case 42:
            this.$ = a.preparePath(!0, o[n], this._$);
            break;
          case 43:
            this.$ = a.preparePath(!1, o[n], this._$);
            break;
          case 44:
            o[n - 2].push({ part: a.id(o[n]), original: o[n], separator: o[n - 1] }), this.$ = o[n - 2];
            break;
          case 45:
            this.$ = [{ part: a.id(o[n]), original: o[n] }];
            break;
          case 46:
            this.$ = [];
            break;
          case 47:
            o[n - 1].push(o[n]);
            break;
          case 48:
            this.$ = [];
            break;
          case 49:
            o[n - 1].push(o[n]);
            break;
          case 50:
            this.$ = [];
            break;
          case 51:
            o[n - 1].push(o[n]);
            break;
          case 58:
            this.$ = [];
            break;
          case 59:
            o[n - 1].push(o[n]);
            break;
          case 64:
            this.$ = [];
            break;
          case 65:
            o[n - 1].push(o[n]);
            break;
          case 70:
            this.$ = [];
            break;
          case 71:
            o[n - 1].push(o[n]);
            break;
          case 78:
            this.$ = [];
            break;
          case 79:
            o[n - 1].push(o[n]);
            break;
          case 82:
            this.$ = [];
            break;
          case 83:
            o[n - 1].push(o[n]);
            break;
          case 86:
            this.$ = [];
            break;
          case 87:
            o[n - 1].push(o[n]);
            break;
          case 90:
            this.$ = [];
            break;
          case 91:
            o[n - 1].push(o[n]);
            break;
          case 94:
            this.$ = [];
            break;
          case 95:
            o[n - 1].push(o[n]);
            break;
          case 98:
            this.$ = [o[n]];
            break;
          case 99:
            o[n - 1].push(o[n]);
            break;
          case 100:
            this.$ = [o[n]];
            break;
          case 101:
            o[n - 1].push(o[n]);
            break;
        }
      },
      table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
      defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
      parseError: function(s, i) {
        throw new Error(s);
      },
      parse: function(s) {
        var i = this, u = [0], a = [null], d = [], o = this.table, l = "", n = 0, m = 0;
        this.lexer.setInput(s), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
        var f = this.lexer.yylloc;
        d.push(f);
        var y = this.lexer.options && this.lexer.options.ranges;
        typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
        function v() {
          var G;
          return G = i.lexer.lex() || 1, typeof G != "number" && (G = i.symbols_[G] || G), G;
        }
        for (var _, b, g, S, E = {}, k, w, L, A; ; ) {
          if (b = u[u.length - 1], this.defaultActions[b] ? g = this.defaultActions[b] : ((_ === null || typeof _ > "u") && (_ = v()), g = o[b] && o[b][_]), typeof g > "u" || !g.length || !g[0]) {
            var O = "";
            {
              A = [];
              for (k in o[b])
                this.terminals_[k] && k > 2 && A.push("'" + this.terminals_[k] + "'");
              this.lexer.showPosition ? O = "Parse error on line " + (n + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + A.join(", ") + ", got '" + (this.terminals_[_] || _) + "'" : O = "Parse error on line " + (n + 1) + ": Unexpected " + (_ == 1 ? "end of input" : "'" + (this.terminals_[_] || _) + "'"), this.parseError(O, { text: this.lexer.match, token: this.terminals_[_] || _, line: this.lexer.yylineno, loc: f, expected: A });
            }
          }
          if (g[0] instanceof Array && g.length > 1)
            throw new Error("Parse Error: multiple actions possible at state: " + b + ", token: " + _);
          switch (g[0]) {
            case 1:
              u.push(_), a.push(this.lexer.yytext), d.push(this.lexer.yylloc), u.push(g[1]), _ = null, m = this.lexer.yyleng, l = this.lexer.yytext, n = this.lexer.yylineno, f = this.lexer.yylloc;
              break;
            case 2:
              if (w = this.productions_[g[1]][1], E.$ = a[a.length - w], E._$ = { first_line: d[d.length - (w || 1)].first_line, last_line: d[d.length - 1].last_line, first_column: d[d.length - (w || 1)].first_column, last_column: d[d.length - 1].last_column }, y && (E._$.range = [d[d.length - (w || 1)].range[0], d[d.length - 1].range[1]]), S = this.performAction.call(E, l, m, n, this.yy, g[1], a, d), typeof S < "u")
                return S;
              w && (u = u.slice(0, -1 * w * 2), a = a.slice(0, -1 * w), d = d.slice(0, -1 * w)), u.push(this.productions_[g[1]][0]), a.push(E.$), d.push(E._$), L = o[u[u.length - 2]][u[u.length - 1]], u.push(L);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }
    }, h = function() {
      var s = {
        EOF: 1,
        parseError: function(i, u) {
          if (this.yy.parser)
            this.yy.parser.parseError(i, u);
          else
            throw new Error(i);
        },
        setInput: function(i) {
          return this._input = i, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
        },
        input: function() {
          var i = this._input[0];
          this.yytext += i, this.yyleng++, this.offset++, this.match += i, this.matched += i;
          var u = i.match(/(?:\r\n?|\n).*/g);
          return u ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), i;
        },
        unput: function(i) {
          var u = i.length, a = i.split(/(?:\r\n?|\n)/g);
          this._input = i + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - u - 1), this.offset -= u;
          var d = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), a.length - 1 && (this.yylineno -= a.length - 1);
          var o = this.yylloc.range;
          return this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: a ? (a.length === d.length ? this.yylloc.first_column : 0) + d[d.length - a.length].length - a[0].length : this.yylloc.first_column - u
          }, this.options.ranges && (this.yylloc.range = [o[0], o[0] + this.yyleng - u]), this;
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
          var i = this.pastInput(), u = new Array(i.length + 1).join("-");
          return i + this.upcomingInput() + `
` + u + "^";
        },
        next: function() {
          if (this.done)
            return this.EOF;
          this._input || (this.done = !0);
          var i, u, a, d, o;
          this._more || (this.yytext = "", this.match = "");
          for (var l = this._currentRules(), n = 0; n < l.length && (a = this._input.match(this.rules[l[n]]), !(a && (!u || a[0].length > u[0].length) && (u = a, d = n, !this.options.flex))); n++)
            ;
          return u ? (o = u[0].match(/(?:\r\n?|\n).*/g), o && (this.yylineno += o.length), this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: o ? o[o.length - 1].length - o[o.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + u[0].length
          }, this.yytext += u[0], this.match += u[0], this.matches = u, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(u[0].length), this.matched += u[0], i = this.performAction.call(this, this.yy, this, l[d], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), i || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
      return s.options = {}, s.performAction = function(i, u, a, d) {
        function o(l, n) {
          return u.yytext = u.yytext.substring(l, u.yyleng - n + l);
        }
        switch (a) {
          case 0:
            if (u.yytext.slice(-2) === "\\\\" ? (o(0, 1), this.begin("mu")) : u.yytext.slice(-1) === "\\" ? (o(0, 1), this.begin("emu")) : this.begin("mu"), u.yytext)
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
            this.unput(u.yytext), this.popState(), this.begin("com");
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
            return u.yytext = o(1, 2).replace(/\\"/g, '"'), 80;
          case 32:
            return u.yytext = o(1, 2).replace(/\\'/g, "'"), 80;
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
            return u.yytext = u.yytext.replace(/\\([\\\]])/g, "$1"), 72;
          case 43:
            return "INVALID";
          case 44:
            return 5;
        }
      }, s.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], s.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, s;
    }();
    c.lexer = h;
    function p() {
      this.yy = {};
    }
    return p.prototype = c, c.Parser = p, new p();
  }();
  t.default = r, e.exports = t.default;
})($e, $e.exports);
var Fe = { exports: {} }, fe = { exports: {} };
(function(e, t) {
  t.__esModule = !0;
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var c = R.exports, h = r(c);
  function p() {
    this.parents = [];
  }
  p.prototype = {
    constructor: p,
    mutating: !1,
    acceptKey: function(a, d) {
      var o = this.accept(a[d]);
      if (this.mutating) {
        if (o && !p.prototype[o.type])
          throw new h.default('Unexpected node type "' + o.type + '" found when accepting ' + d + " on " + a.type);
        a[d] = o;
      }
    },
    acceptRequired: function(a, d) {
      if (this.acceptKey(a, d), !a[d])
        throw new h.default(a.type + " requires " + d);
    },
    acceptArray: function(a) {
      for (var d = 0, o = a.length; d < o; d++)
        this.acceptKey(a, d), a[d] || (a.splice(d, 1), d--, o--);
    },
    accept: function(a) {
      if (a) {
        if (!this[a.type])
          throw new h.default("Unknown type: " + a.type, a);
        this.current && this.parents.unshift(this.current), this.current = a;
        var d = this[a.type](a);
        if (this.current = this.parents.shift(), !this.mutating || d)
          return d;
        if (d !== !1)
          return a;
      }
    },
    Program: function(a) {
      this.acceptArray(a.body);
    },
    MustacheStatement: s,
    Decorator: s,
    BlockStatement: i,
    DecoratorBlock: i,
    PartialStatement: u,
    PartialBlockStatement: function(a) {
      u.call(this, a), this.acceptKey(a, "program");
    },
    ContentStatement: function() {
    },
    CommentStatement: function() {
    },
    SubExpression: s,
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
    Hash: function(a) {
      this.acceptArray(a.pairs);
    },
    HashPair: function(a) {
      this.acceptRequired(a, "value");
    }
  };
  function s(a) {
    this.acceptRequired(a, "path"), this.acceptArray(a.params), this.acceptKey(a, "hash");
  }
  function i(a) {
    s.call(this, a), this.acceptKey(a, "program"), this.acceptKey(a, "inverse");
  }
  function u(a) {
    this.acceptRequired(a, "name"), this.acceptArray(a.params), this.acceptKey(a, "hash");
  }
  t.default = p, e.exports = t.default;
})(fe, fe.exports);
(function(e, t) {
  t.__esModule = !0;
  function r(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var c = fe.exports, h = r(c);
  function p() {
    var d = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
    this.options = d;
  }
  p.prototype = new h.default(), p.prototype.Program = function(d) {
    var o = !this.options.ignoreStandalone, l = !this.isRootSeen;
    this.isRootSeen = !0;
    for (var n = d.body, m = 0, f = n.length; m < f; m++) {
      var y = n[m], v = this.accept(y);
      if (v) {
        var _ = s(n, m, l), b = i(n, m, l), g = v.openStandalone && _, S = v.closeStandalone && b, E = v.inlineStandalone && _ && b;
        v.close && u(n, m, !0), v.open && a(n, m, !0), o && E && (u(n, m), a(n, m) && y.type === "PartialStatement" && (y.indent = /([ \t]+$)/.exec(n[m - 1].original)[1])), o && g && (u((y.program || y.inverse).body), a(n, m)), o && S && (u(n, m), a((y.inverse || y.program).body));
      }
    }
    return d;
  }, p.prototype.BlockStatement = p.prototype.DecoratorBlock = p.prototype.PartialBlockStatement = function(d) {
    this.accept(d.program), this.accept(d.inverse);
    var o = d.program || d.inverse, l = d.program && d.inverse, n = l, m = l;
    if (l && l.chained)
      for (n = l.body[0].program; m.chained; )
        m = m.body[m.body.length - 1].program;
    var f = {
      open: d.openStrip.open,
      close: d.closeStrip.close,
      openStandalone: i(o.body),
      closeStandalone: s((n || o).body)
    };
    if (d.openStrip.close && u(o.body, null, !0), l) {
      var y = d.inverseStrip;
      y.open && a(o.body, null, !0), y.close && u(n.body, null, !0), d.closeStrip.open && a(m.body, null, !0), !this.options.ignoreStandalone && s(o.body) && i(n.body) && (a(o.body), u(n.body));
    } else
      d.closeStrip.open && a(o.body, null, !0);
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
  function s(d, o, l) {
    o === void 0 && (o = d.length);
    var n = d[o - 1], m = d[o - 2];
    if (!n)
      return l;
    if (n.type === "ContentStatement")
      return (m || !l ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(n.original);
  }
  function i(d, o, l) {
    o === void 0 && (o = -1);
    var n = d[o + 1], m = d[o + 2];
    if (!n)
      return l;
    if (n.type === "ContentStatement")
      return (m || !l ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(n.original);
  }
  function u(d, o, l) {
    var n = d[o == null ? 0 : o + 1];
    if (!(!n || n.type !== "ContentStatement" || !l && n.rightStripped)) {
      var m = n.value;
      n.value = n.value.replace(l ? /^\s+/ : /^[ \t]*\r?\n?/, ""), n.rightStripped = n.value !== m;
    }
  }
  function a(d, o, l) {
    var n = d[o == null ? d.length - 1 : o - 1];
    if (!(!n || n.type !== "ContentStatement" || !l && n.leftStripped)) {
      var m = n.value;
      return n.value = n.value.replace(l ? /\s+$/ : /[ \t]+$/, ""), n.leftStripped = n.value !== m, n.leftStripped;
    }
  }
  t.default = p, e.exports = t.default;
})(Fe, Fe.exports);
var N = {};
N.__esModule = !0;
N.SourceLocation = wn;
N.id = Ln;
N.stripFlags = xn;
N.stripComment = Cn;
N.preparePath = An;
N.prepareMustache = Pn;
N.prepareRawBlock = Mn;
N.prepareBlock = On;
N.prepareProgram = Rn;
N.preparePartialBlock = In;
function En(e) {
  return e && e.__esModule ? e : { default: e };
}
var kn = R.exports, Ze = En(kn);
function Je(e, t) {
  if (t = t.path ? t.path.original : t, e.path.original !== t) {
    var r = { loc: e.path.loc };
    throw new Ze.default(e.path.original + " doesn't match " + t, r);
  }
}
function wn(e, t) {
  this.source = e, this.start = {
    line: t.first_line,
    column: t.first_column
  }, this.end = {
    line: t.last_line,
    column: t.last_column
  };
}
function Ln(e) {
  return /^\[.*\]$/.test(e) ? e.substring(1, e.length - 1) : e;
}
function xn(e, t) {
  return {
    open: e.charAt(2) === "~",
    close: t.charAt(t.length - 3) === "~"
  };
}
function Cn(e) {
  return e.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
}
function An(e, t, r) {
  r = this.locInfo(r);
  for (var c = e ? "@" : "", h = [], p = 0, s = 0, i = t.length; s < i; s++) {
    var u = t[s].part, a = t[s].original !== u;
    if (c += (t[s].separator || "") + u, !a && (u === ".." || u === "." || u === "this")) {
      if (h.length > 0)
        throw new Ze.default("Invalid path: " + c, { loc: r });
      u === ".." && p++;
    } else
      h.push(u);
  }
  return {
    type: "PathExpression",
    data: e,
    depth: p,
    parts: h,
    original: c,
    loc: r
  };
}
function Pn(e, t, r, c, h, p) {
  var s = c.charAt(3) || c.charAt(2), i = s !== "{" && s !== "&", u = /\*/.test(c);
  return {
    type: u ? "Decorator" : "MustacheStatement",
    path: e,
    params: t,
    hash: r,
    escaped: i,
    strip: h,
    loc: this.locInfo(p)
  };
}
function Mn(e, t, r, c) {
  Je(e, r), c = this.locInfo(c);
  var h = {
    type: "Program",
    body: t,
    strip: {},
    loc: c
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
    loc: c
  };
}
function On(e, t, r, c, h, p) {
  c && c.path && Je(e, c);
  var s = /\*/.test(e.open);
  t.blockParams = e.blockParams;
  var i = void 0, u = void 0;
  if (r) {
    if (s)
      throw new Ze.default("Unexpected inverse block on decorator", r);
    r.chain && (r.program.body[0].closeStrip = c.strip), u = r.strip, i = r.program;
  }
  return h && (h = i, i = t, t = h), {
    type: s ? "DecoratorBlock" : "BlockStatement",
    path: e.path,
    params: e.params,
    hash: e.hash,
    program: t,
    inverse: i,
    openStrip: e.strip,
    inverseStrip: u,
    closeStrip: c && c.strip,
    loc: this.locInfo(p)
  };
}
function Rn(e, t) {
  if (!t && e.length) {
    var r = e[0].loc, c = e[e.length - 1].loc;
    r && c && (t = {
      source: r.source,
      start: {
        line: r.start.line,
        column: r.start.column
      },
      end: {
        line: c.end.line,
        column: c.end.column
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
function In(e, t, r, c) {
  return Je(e, r), {
    type: "PartialBlockStatement",
    name: e.path,
    params: e.params,
    hash: e.hash,
    program: t,
    openStrip: e.strip,
    closeStrip: r && r.strip,
    loc: this.locInfo(c)
  };
}
re.__esModule = !0;
re.parseWithoutProcessing = wt;
re.parse = Vn;
function Dn(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t.default = e, t;
}
function kt(e) {
  return e && e.__esModule ? e : { default: e };
}
var Nn = $e.exports, He = kt(Nn), Tn = Fe.exports, Bn = kt(Tn), $n = N, Fn = Dn($n), Hn = x;
re.parser = He.default;
var ue = {};
Hn.extend(ue, Fn);
function wt(e, t) {
  if (e.type === "Program")
    return e;
  He.default.yy = ue, ue.locInfo = function(c) {
    return new ue.SourceLocation(t && t.srcName, c);
  };
  var r = He.default.parse(e);
  return r;
}
function Vn(e, t) {
  var r = wt(e, t), c = new Bn.default(t);
  return c.accept(r);
}
var ne = {};
ne.__esModule = !0;
ne.Compiler = Ve;
ne.precompile = Gn;
ne.compile = qn;
function Lt(e) {
  return e && e.__esModule ? e : { default: e };
}
var Un = R.exports, Y = Lt(Un), ee = x, jn = me.exports, Z = Lt(jn), zn = [].slice;
function Ve() {
}
Ve.prototype = {
  compiler: Ve,
  equals: function(e) {
    var t = this.opcodes.length;
    if (e.opcodes.length !== t)
      return !1;
    for (var r = 0; r < t; r++) {
      var c = this.opcodes[r], h = e.opcodes[r];
      if (c.opcode !== h.opcode || !xt(c.args, h.args))
        return !1;
    }
    t = this.children.length;
    for (var r = 0; r < t; r++)
      if (!this.children[r].equals(e.children[r]))
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
    var t = new this.compiler(), r = t.compile(e, this.options), c = this.guid++;
    return this.usePartial = this.usePartial || r.usePartial, this.children[c] = r, this.useDepths = this.useDepths || r.useDepths, c;
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
    for (var t = e.body, r = t.length, c = 0; c < r; c++)
      this.accept(t[c]);
    return this.options.blockParams.shift(), this.isSimple = r === 1, this.blockParams = e.blockParams ? e.blockParams.length : 0, this;
  },
  BlockStatement: function(e) {
    et(e);
    var t = e.program, r = e.inverse;
    t = t && this.compileProgram(t), r = r && this.compileProgram(r);
    var c = this.classifySexpr(e);
    c === "helper" ? this.helperSexpr(e, t, r) : c === "simple" ? (this.simpleSexpr(e), this.opcode("pushProgram", t), this.opcode("pushProgram", r), this.opcode("emptyHash"), this.opcode("blockValue", e.path.original)) : (this.ambiguousSexpr(e, t, r), this.opcode("pushProgram", t), this.opcode("pushProgram", r), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
  },
  DecoratorBlock: function(e) {
    var t = e.program && this.compileProgram(e.program), r = this.setupFullMustacheParams(e, t, void 0), c = e.path;
    this.useDecorators = !0, this.opcode("registerDecorator", r.length, c.original);
  },
  PartialStatement: function(e) {
    this.usePartial = !0;
    var t = e.program;
    t && (t = this.compileProgram(e.program));
    var r = e.params;
    if (r.length > 1)
      throw new Y.default("Unsupported number of partial arguments: " + r.length, e);
    r.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : r.push({ type: "PathExpression", parts: [], depth: 0 }));
    var c = e.name.original, h = e.name.type === "SubExpression";
    h && this.accept(e.name), this.setupFullMustacheParams(e, t, void 0, !0);
    var p = e.indent || "";
    this.options.preventIndent && p && (this.opcode("appendContent", p), p = ""), this.opcode("invokePartial", h, c, p), this.opcode("append");
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
  ambiguousSexpr: function(e, t, r) {
    var c = e.path, h = c.parts[0], p = t != null || r != null;
    this.opcode("getContext", c.depth), this.opcode("pushProgram", t), this.opcode("pushProgram", r), c.strict = !0, this.accept(c), this.opcode("invokeAmbiguous", h, p);
  },
  simpleSexpr: function(e) {
    var t = e.path;
    t.strict = !0, this.accept(t), this.opcode("resolvePossibleLambda");
  },
  helperSexpr: function(e, t, r) {
    var c = this.setupFullMustacheParams(e, t, r), h = e.path, p = h.parts[0];
    if (this.options.knownHelpers[p])
      this.opcode("invokeKnownHelper", c.length, p);
    else {
      if (this.options.knownHelpersOnly)
        throw new Y.default("You specified knownHelpersOnly, but used the unknown helper " + p, e);
      h.strict = !0, h.falsy = !0, this.accept(h), this.opcode("invokeHelper", c.length, h.original, Z.default.helpers.simpleId(h));
    }
  },
  PathExpression: function(e) {
    this.addDepth(e.depth), this.opcode("getContext", e.depth);
    var t = e.parts[0], r = Z.default.helpers.scopedId(e), c = !e.depth && !r && this.blockParamIndex(t);
    c ? this.opcode("lookupBlockParam", c, e.parts) : t ? e.data ? (this.options.data = !0, this.opcode("lookupData", e.depth, e.parts, e.strict)) : this.opcode("lookupOnContext", e.parts, e.falsy, e.strict, r) : this.opcode("pushContext");
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
    var t = e.pairs, r = 0, c = t.length;
    for (this.opcode("pushHash"); r < c; r++)
      this.pushParam(t[r].value);
    for (; r--; )
      this.opcode("assignToHash", t[r].key);
    this.opcode("popHash");
  },
  opcode: function(e) {
    this.opcodes.push({
      opcode: e,
      args: zn.call(arguments, 1),
      loc: this.sourceNode[0].loc
    });
  },
  addDepth: function(e) {
    !e || (this.useDepths = !0);
  },
  classifySexpr: function(e) {
    var t = Z.default.helpers.simpleId(e.path), r = t && !!this.blockParamIndex(e.path.parts[0]), c = !r && Z.default.helpers.helperExpression(e), h = !r && (c || t);
    if (h && !c) {
      var p = e.path.parts[0], s = this.options;
      s.knownHelpers[p] ? c = !0 : s.knownHelpersOnly && (h = !1);
    }
    return c ? "helper" : h ? "ambiguous" : "simple";
  },
  pushParams: function(e) {
    for (var t = 0, r = e.length; t < r; t++)
      this.pushParam(e[t]);
  },
  pushParam: function(e) {
    var t = e.value != null ? e.value : e.original || "";
    if (this.stringParams)
      t.replace && (t = t.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), e.depth && this.addDepth(e.depth), this.opcode("getContext", e.depth || 0), this.opcode("pushStringParam", t, e.type), e.type === "SubExpression" && this.accept(e);
    else {
      if (this.trackIds) {
        var r = void 0;
        if (e.parts && !Z.default.helpers.scopedId(e) && !e.depth && (r = this.blockParamIndex(e.parts[0])), r) {
          var c = e.parts.slice(1).join(".");
          this.opcode("pushId", "BlockParam", r, c);
        } else
          t = e.original || t, t.replace && (t = t.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", e.type, t);
      }
      this.accept(e);
    }
  },
  setupFullMustacheParams: function(e, t, r, c) {
    var h = e.params;
    return this.pushParams(h), this.opcode("pushProgram", t), this.opcode("pushProgram", r), e.hash ? this.accept(e.hash) : this.opcode("emptyHash", c), h;
  },
  blockParamIndex: function(e) {
    for (var t = 0, r = this.options.blockParams.length; t < r; t++) {
      var c = this.options.blockParams[t], h = c && ee.indexOf(c, e);
      if (c && h >= 0)
        return [t, h];
    }
  }
};
function Gn(e, t, r) {
  if (e == null || typeof e != "string" && e.type !== "Program")
    throw new Y.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + e);
  t = t || {}, "data" in t || (t.data = !0), t.compat && (t.useDepths = !0);
  var c = r.parse(e, t), h = new r.Compiler().compile(c, t);
  return new r.JavaScriptCompiler().compile(h, t);
}
function qn(e, t, r) {
  if (t === void 0 && (t = {}), e == null || typeof e != "string" && e.type !== "Program")
    throw new Y.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + e);
  t = ee.extend({}, t), "data" in t || (t.data = !0), t.compat && (t.useDepths = !0);
  var c = void 0;
  function h() {
    var s = r.parse(e, t), i = new r.Compiler().compile(s, t), u = new r.JavaScriptCompiler().compile(i, t, void 0, !0);
    return r.template(u);
  }
  function p(s, i) {
    return c || (c = h()), c.call(this, s, i);
  }
  return p._setup = function(s) {
    return c || (c = h()), c._setup(s);
  }, p._child = function(s, i, u, a) {
    return c || (c = h()), c._child(s, i, u, a);
  }, p;
}
function xt(e, t) {
  if (e === t)
    return !0;
  if (ee.isArray(e) && ee.isArray(t) && e.length === t.length) {
    for (var r = 0; r < e.length; r++)
      if (!xt(e[r], t[r]))
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
var Ue = { exports: {} }, je = { exports: {} }, oe = {}, ye = {}, se = {}, ae = {}, tt;
function Kn() {
  if (tt)
    return ae;
  tt = 1;
  var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return ae.encode = function(t) {
    if (0 <= t && t < e.length)
      return e[t];
    throw new TypeError("Must be between 0 and 63: " + t);
  }, ae.decode = function(t) {
    var r = 65, c = 90, h = 97, p = 122, s = 48, i = 57, u = 43, a = 47, d = 26, o = 52;
    return r <= t && t <= c ? t - r : h <= t && t <= p ? t - h + d : s <= t && t <= i ? t - s + o : t == u ? 62 : t == a ? 63 : -1;
  }, ae;
}
var rt;
function Ct() {
  if (rt)
    return se;
  rt = 1;
  var e = Kn(), t = 5, r = 1 << t, c = r - 1, h = r;
  function p(i) {
    return i < 0 ? (-i << 1) + 1 : (i << 1) + 0;
  }
  function s(i) {
    var u = (i & 1) === 1, a = i >> 1;
    return u ? -a : a;
  }
  return se.encode = function(i) {
    var u = "", a, d = p(i);
    do
      a = d & c, d >>>= t, d > 0 && (a |= h), u += e.encode(a);
    while (d > 0);
    return u;
  }, se.decode = function(i, u, a) {
    var d = i.length, o = 0, l = 0, n, m;
    do {
      if (u >= d)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (m = e.decode(i.charCodeAt(u++)), m === -1)
        throw new Error("Invalid base64 digit: " + i.charAt(u - 1));
      n = !!(m & h), m &= c, o = o + (m << l), l += t;
    } while (n);
    a.value = s(o), a.rest = u;
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
    var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, c = /^data:.+\,.+$/;
    function h(g) {
      var S = g.match(r);
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
    function s(g) {
      var S = g, E = h(g);
      if (E) {
        if (!E.path)
          return g;
        S = E.path;
      }
      for (var k = e.isAbsolute(S), w = S.split(/\/+/), L, A = 0, O = w.length - 1; O >= 0; O--)
        L = w[O], L === "." ? w.splice(O, 1) : L === ".." ? A++ : A > 0 && (L === "" ? (w.splice(O + 1, A), A = 0) : (w.splice(O, 2), A--));
      return S = w.join("/"), S === "" && (S = k ? "/" : "."), E ? (E.path = S, p(E)) : S;
    }
    e.normalize = s;
    function i(g, S) {
      g === "" && (g = "."), S === "" && (S = ".");
      var E = h(S), k = h(g);
      if (k && (g = k.path || "/"), E && !E.scheme)
        return k && (E.scheme = k.scheme), p(E);
      if (E || S.match(c))
        return S;
      if (k && !k.host && !k.path)
        return k.host = S, p(k);
      var w = S.charAt(0) === "/" ? S : s(g.replace(/\/+$/, "") + "/" + S);
      return k ? (k.path = w, p(k)) : w;
    }
    e.join = i, e.isAbsolute = function(g) {
      return g.charAt(0) === "/" || r.test(g);
    };
    function u(g, S) {
      g === "" && (g = "."), g = g.replace(/\/$/, "");
      for (var E = 0; S.indexOf(g + "/") !== 0; ) {
        var k = g.lastIndexOf("/");
        if (k < 0 || (g = g.slice(0, k), g.match(/^([^\/]+:\/)?\/*$/)))
          return S;
        ++E;
      }
      return Array(E + 1).join("../") + S.substr(g.length + 1);
    }
    e.relative = u;
    var a = function() {
      var g = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in g);
    }();
    function d(g) {
      return g;
    }
    function o(g) {
      return n(g) ? "$" + g : g;
    }
    e.toSetString = a ? d : o;
    function l(g) {
      return n(g) ? g.slice(1) : g;
    }
    e.fromSetString = a ? d : l;
    function n(g) {
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
          var w = k.path.lastIndexOf("/");
          w >= 0 && (k.path = k.path.substring(0, w + 1));
        }
        S = i(p(k), S);
      }
      return s(S);
    }
    e.computeSourceURL = b;
  }(nt)), nt;
}
var _e = {}, ot;
function At() {
  if (ot)
    return _e;
  ot = 1;
  var e = ie(), t = Object.prototype.hasOwnProperty, r = typeof Map < "u";
  function c() {
    this._array = [], this._set = r ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return c.fromArray = function(h, p) {
    for (var s = new c(), i = 0, u = h.length; i < u; i++)
      s.add(h[i], p);
    return s;
  }, c.prototype.size = function() {
    return r ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, c.prototype.add = function(h, p) {
    var s = r ? h : e.toSetString(h), i = r ? this.has(h) : t.call(this._set, s), u = this._array.length;
    (!i || p) && this._array.push(h), i || (r ? this._set.set(h, u) : this._set[s] = u);
  }, c.prototype.has = function(h) {
    if (r)
      return this._set.has(h);
    var p = e.toSetString(h);
    return t.call(this._set, p);
  }, c.prototype.indexOf = function(h) {
    if (r) {
      var p = this._set.get(h);
      if (p >= 0)
        return p;
    } else {
      var s = e.toSetString(h);
      if (t.call(this._set, s))
        return this._set[s];
    }
    throw new Error('"' + h + '" is not in the set.');
  }, c.prototype.at = function(h) {
    if (h >= 0 && h < this._array.length)
      return this._array[h];
    throw new Error("No element indexed by " + h);
  }, c.prototype.toArray = function() {
    return this._array.slice();
  }, _e.ArraySet = c, _e;
}
var Se = {}, st;
function Wn() {
  if (st)
    return Se;
  st = 1;
  var e = ie();
  function t(c, h) {
    var p = c.generatedLine, s = h.generatedLine, i = c.generatedColumn, u = h.generatedColumn;
    return s > p || s == p && u >= i || e.compareByGeneratedPositionsInflated(c, h) <= 0;
  }
  function r() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return r.prototype.unsortedForEach = function(c, h) {
    this._array.forEach(c, h);
  }, r.prototype.add = function(c) {
    t(this._last, c) ? (this._last = c, this._array.push(c)) : (this._sorted = !1, this._array.push(c));
  }, r.prototype.toArray = function() {
    return this._sorted || (this._array.sort(e.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, Se.MappingList = r, Se;
}
var at;
function Pt() {
  if (at)
    return ye;
  at = 1;
  var e = Ct(), t = ie(), r = At().ArraySet, c = Wn().MappingList;
  function h(p) {
    p || (p = {}), this._file = t.getArg(p, "file", null), this._sourceRoot = t.getArg(p, "sourceRoot", null), this._skipValidation = t.getArg(p, "skipValidation", !1), this._sources = new r(), this._names = new r(), this._mappings = new c(), this._sourcesContents = null;
  }
  return h.prototype._version = 3, h.fromSourceMap = function(p) {
    var s = p.sourceRoot, i = new h({
      file: p.file,
      sourceRoot: s
    });
    return p.eachMapping(function(u) {
      var a = {
        generated: {
          line: u.generatedLine,
          column: u.generatedColumn
        }
      };
      u.source != null && (a.source = u.source, s != null && (a.source = t.relative(s, a.source)), a.original = {
        line: u.originalLine,
        column: u.originalColumn
      }, u.name != null && (a.name = u.name)), i.addMapping(a);
    }), p.sources.forEach(function(u) {
      var a = u;
      s !== null && (a = t.relative(s, u)), i._sources.has(a) || i._sources.add(a);
      var d = p.sourceContentFor(u);
      d != null && i.setSourceContent(u, d);
    }), i;
  }, h.prototype.addMapping = function(p) {
    var s = t.getArg(p, "generated"), i = t.getArg(p, "original", null), u = t.getArg(p, "source", null), a = t.getArg(p, "name", null);
    this._skipValidation || this._validateMapping(s, i, u, a), u != null && (u = String(u), this._sources.has(u) || this._sources.add(u)), a != null && (a = String(a), this._names.has(a) || this._names.add(a)), this._mappings.add({
      generatedLine: s.line,
      generatedColumn: s.column,
      originalLine: i != null && i.line,
      originalColumn: i != null && i.column,
      source: u,
      name: a
    });
  }, h.prototype.setSourceContent = function(p, s) {
    var i = p;
    this._sourceRoot != null && (i = t.relative(this._sourceRoot, i)), s != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[t.toSetString(i)] = s) : this._sourcesContents && (delete this._sourcesContents[t.toSetString(i)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, h.prototype.applySourceMap = function(p, s, i) {
    var u = s;
    if (s == null) {
      if (p.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      u = p.file;
    }
    var a = this._sourceRoot;
    a != null && (u = t.relative(a, u));
    var d = new r(), o = new r();
    this._mappings.unsortedForEach(function(l) {
      if (l.source === u && l.originalLine != null) {
        var n = p.originalPositionFor({
          line: l.originalLine,
          column: l.originalColumn
        });
        n.source != null && (l.source = n.source, i != null && (l.source = t.join(i, l.source)), a != null && (l.source = t.relative(a, l.source)), l.originalLine = n.line, l.originalColumn = n.column, n.name != null && (l.name = n.name));
      }
      var m = l.source;
      m != null && !d.has(m) && d.add(m);
      var f = l.name;
      f != null && !o.has(f) && o.add(f);
    }, this), this._sources = d, this._names = o, p.sources.forEach(function(l) {
      var n = p.sourceContentFor(l);
      n != null && (i != null && (l = t.join(i, l)), a != null && (l = t.relative(a, l)), this.setSourceContent(l, n));
    }, this);
  }, h.prototype._validateMapping = function(p, s, i, u) {
    if (s && typeof s.line != "number" && typeof s.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(p && "line" in p && "column" in p && p.line > 0 && p.column >= 0 && !s && !i && !u)) {
      if (p && "line" in p && "column" in p && s && "line" in s && "column" in s && p.line > 0 && p.column >= 0 && s.line > 0 && s.column >= 0 && i)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: p,
        source: i,
        original: s,
        name: u
      }));
    }
  }, h.prototype._serializeMappings = function() {
    for (var p = 0, s = 1, i = 0, u = 0, a = 0, d = 0, o = "", l, n, m, f, y = this._mappings.toArray(), v = 0, _ = y.length; v < _; v++) {
      if (n = y[v], l = "", n.generatedLine !== s)
        for (p = 0; n.generatedLine !== s; )
          l += ";", s++;
      else if (v > 0) {
        if (!t.compareByGeneratedPositionsInflated(n, y[v - 1]))
          continue;
        l += ",";
      }
      l += e.encode(n.generatedColumn - p), p = n.generatedColumn, n.source != null && (f = this._sources.indexOf(n.source), l += e.encode(f - d), d = f, l += e.encode(n.originalLine - 1 - u), u = n.originalLine - 1, l += e.encode(n.originalColumn - i), i = n.originalColumn, n.name != null && (m = this._names.indexOf(n.name), l += e.encode(m - a), a = m)), o += l;
    }
    return o;
  }, h.prototype._generateSourcesContent = function(p, s) {
    return p.map(function(i) {
      if (!this._sourcesContents)
        return null;
      s != null && (i = t.relative(s, i));
      var u = t.toSetString(i);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, u) ? this._sourcesContents[u] : null;
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
function Zn() {
  return ut || (ut = 1, function(e) {
    e.GREATEST_LOWER_BOUND = 1, e.LEAST_UPPER_BOUND = 2;
    function t(r, c, h, p, s, i) {
      var u = Math.floor((c - r) / 2) + r, a = s(h, p[u], !0);
      return a === 0 ? u : a > 0 ? c - u > 1 ? t(u, c, h, p, s, i) : i == e.LEAST_UPPER_BOUND ? c < p.length ? c : -1 : u : u - r > 1 ? t(r, u, h, p, s, i) : i == e.LEAST_UPPER_BOUND ? u : r < 0 ? -1 : r;
    }
    e.search = function(r, c, h, p) {
      if (c.length === 0)
        return -1;
      var s = t(
        -1,
        c.length,
        r,
        c,
        h,
        p || e.GREATEST_LOWER_BOUND
      );
      if (s < 0)
        return -1;
      for (; s - 1 >= 0 && h(c[s], c[s - 1], !0) === 0; )
        --s;
      return s;
    };
  }(lt)), lt;
}
var be = {}, ct;
function Jn() {
  if (ct)
    return be;
  ct = 1;
  function e(c, h, p) {
    var s = c[h];
    c[h] = c[p], c[p] = s;
  }
  function t(c, h) {
    return Math.round(c + Math.random() * (h - c));
  }
  function r(c, h, p, s) {
    if (p < s) {
      var i = t(p, s), u = p - 1;
      e(c, i, s);
      for (var a = c[s], d = p; d < s; d++)
        h(c[d], a) <= 0 && (u += 1, e(c, u, d));
      e(c, u + 1, d);
      var o = u + 1;
      r(c, h, p, o - 1), r(c, h, o + 1, s);
    }
  }
  return be.quickSort = function(c, h) {
    r(c, h, 0, c.length - 1);
  }, be;
}
var pt;
function Qn() {
  if (pt)
    return J;
  pt = 1;
  var e = ie(), t = Zn(), r = At().ArraySet, c = Ct(), h = Jn().quickSort;
  function p(a, d) {
    var o = a;
    return typeof a == "string" && (o = e.parseSourceMapInput(a)), o.sections != null ? new u(o, d) : new s(o, d);
  }
  p.fromSourceMap = function(a, d) {
    return s.fromSourceMap(a, d);
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
  }), p.prototype._charIsMappingSeparator = function(a, d) {
    var o = a.charAt(d);
    return o === ";" || o === ",";
  }, p.prototype._parseMappings = function(a, d) {
    throw new Error("Subclasses must implement _parseMappings");
  }, p.GENERATED_ORDER = 1, p.ORIGINAL_ORDER = 2, p.GREATEST_LOWER_BOUND = 1, p.LEAST_UPPER_BOUND = 2, p.prototype.eachMapping = function(a, d, o) {
    var l = d || null, n = o || p.GENERATED_ORDER, m;
    switch (n) {
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
    }, this).forEach(a, l);
  }, p.prototype.allGeneratedPositionsFor = function(a) {
    var d = e.getArg(a, "line"), o = {
      source: e.getArg(a, "source"),
      originalLine: d,
      originalColumn: e.getArg(a, "column", 0)
    };
    if (o.source = this._findSourceIndex(o.source), o.source < 0)
      return [];
    var l = [], n = this._findMapping(
      o,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      e.compareByOriginalPositions,
      t.LEAST_UPPER_BOUND
    );
    if (n >= 0) {
      var m = this._originalMappings[n];
      if (a.column === void 0)
        for (var f = m.originalLine; m && m.originalLine === f; )
          l.push({
            line: e.getArg(m, "generatedLine", null),
            column: e.getArg(m, "generatedColumn", null),
            lastColumn: e.getArg(m, "lastGeneratedColumn", null)
          }), m = this._originalMappings[++n];
      else
        for (var y = m.originalColumn; m && m.originalLine === d && m.originalColumn == y; )
          l.push({
            line: e.getArg(m, "generatedLine", null),
            column: e.getArg(m, "generatedColumn", null),
            lastColumn: e.getArg(m, "lastGeneratedColumn", null)
          }), m = this._originalMappings[++n];
    }
    return l;
  }, J.SourceMapConsumer = p;
  function s(a, d) {
    var o = a;
    typeof a == "string" && (o = e.parseSourceMapInput(a));
    var l = e.getArg(o, "version"), n = e.getArg(o, "sources"), m = e.getArg(o, "names", []), f = e.getArg(o, "sourceRoot", null), y = e.getArg(o, "sourcesContent", null), v = e.getArg(o, "mappings"), _ = e.getArg(o, "file", null);
    if (l != this._version)
      throw new Error("Unsupported version: " + l);
    f && (f = e.normalize(f)), n = n.map(String).map(e.normalize).map(function(b) {
      return f && e.isAbsolute(f) && e.isAbsolute(b) ? e.relative(f, b) : b;
    }), this._names = r.fromArray(m.map(String), !0), this._sources = r.fromArray(n, !0), this._absoluteSources = this._sources.toArray().map(function(b) {
      return e.computeSourceURL(f, b, d);
    }), this.sourceRoot = f, this.sourcesContent = y, this._mappings = v, this._sourceMapURL = d, this.file = _;
  }
  s.prototype = Object.create(p.prototype), s.prototype.consumer = p, s.prototype._findSourceIndex = function(a) {
    var d = a;
    if (this.sourceRoot != null && (d = e.relative(this.sourceRoot, d)), this._sources.has(d))
      return this._sources.indexOf(d);
    var o;
    for (o = 0; o < this._absoluteSources.length; ++o)
      if (this._absoluteSources[o] == a)
        return o;
    return -1;
  }, s.fromSourceMap = function(a, d) {
    var o = Object.create(s.prototype), l = o._names = r.fromArray(a._names.toArray(), !0), n = o._sources = r.fromArray(a._sources.toArray(), !0);
    o.sourceRoot = a._sourceRoot, o.sourcesContent = a._generateSourcesContent(
      o._sources.toArray(),
      o.sourceRoot
    ), o.file = a._file, o._sourceMapURL = d, o._absoluteSources = o._sources.toArray().map(function(S) {
      return e.computeSourceURL(o.sourceRoot, S, d);
    });
    for (var m = a._mappings.toArray().slice(), f = o.__generatedMappings = [], y = o.__originalMappings = [], v = 0, _ = m.length; v < _; v++) {
      var b = m[v], g = new i();
      g.generatedLine = b.generatedLine, g.generatedColumn = b.generatedColumn, b.source && (g.source = n.indexOf(b.source), g.originalLine = b.originalLine, g.originalColumn = b.originalColumn, b.name && (g.name = l.indexOf(b.name)), y.push(g)), f.push(g);
    }
    return h(o.__originalMappings, e.compareByOriginalPositions), o;
  }, s.prototype._version = 3, Object.defineProperty(s.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function i() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  s.prototype._parseMappings = function(a, d) {
    for (var o = 1, l = 0, n = 0, m = 0, f = 0, y = 0, v = a.length, _ = 0, b = {}, g = {}, S = [], E = [], k, w, L, A, O; _ < v; )
      if (a.charAt(_) === ";")
        o++, _++, l = 0;
      else if (a.charAt(_) === ",")
        _++;
      else {
        for (k = new i(), k.generatedLine = o, A = _; A < v && !this._charIsMappingSeparator(a, A); A++)
          ;
        if (w = a.slice(_, A), L = b[w], L)
          _ += w.length;
        else {
          for (L = []; _ < A; )
            c.decode(a, _, g), O = g.value, _ = g.rest, L.push(O);
          if (L.length === 2)
            throw new Error("Found a source, but no line and column");
          if (L.length === 3)
            throw new Error("Found a source and line, but no column");
          b[w] = L;
        }
        k.generatedColumn = l + L[0], l = k.generatedColumn, L.length > 1 && (k.source = f + L[1], f += L[1], k.originalLine = n + L[2], n = k.originalLine, k.originalLine += 1, k.originalColumn = m + L[3], m = k.originalColumn, L.length > 4 && (k.name = y + L[4], y += L[4])), E.push(k), typeof k.originalLine == "number" && S.push(k);
      }
    h(E, e.compareByGeneratedPositionsDeflated), this.__generatedMappings = E, h(S, e.compareByOriginalPositions), this.__originalMappings = S;
  }, s.prototype._findMapping = function(a, d, o, l, n, m) {
    if (a[o] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + a[o]);
    if (a[l] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + a[l]);
    return t.search(a, d, n, m);
  }, s.prototype.computeColumnSpans = function() {
    for (var a = 0; a < this._generatedMappings.length; ++a) {
      var d = this._generatedMappings[a];
      if (a + 1 < this._generatedMappings.length) {
        var o = this._generatedMappings[a + 1];
        if (d.generatedLine === o.generatedLine) {
          d.lastGeneratedColumn = o.generatedColumn - 1;
          continue;
        }
      }
      d.lastGeneratedColumn = 1 / 0;
    }
  }, s.prototype.originalPositionFor = function(a) {
    var d = {
      generatedLine: e.getArg(a, "line"),
      generatedColumn: e.getArg(a, "column")
    }, o = this._findMapping(
      d,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      e.compareByGeneratedPositionsDeflated,
      e.getArg(a, "bias", p.GREATEST_LOWER_BOUND)
    );
    if (o >= 0) {
      var l = this._generatedMappings[o];
      if (l.generatedLine === d.generatedLine) {
        var n = e.getArg(l, "source", null);
        n !== null && (n = this._sources.at(n), n = e.computeSourceURL(this.sourceRoot, n, this._sourceMapURL));
        var m = e.getArg(l, "name", null);
        return m !== null && (m = this._names.at(m)), {
          source: n,
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
  }, s.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(a) {
      return a == null;
    }) : !1;
  }, s.prototype.sourceContentFor = function(a, d) {
    if (!this.sourcesContent)
      return null;
    var o = this._findSourceIndex(a);
    if (o >= 0)
      return this.sourcesContent[o];
    var l = a;
    this.sourceRoot != null && (l = e.relative(this.sourceRoot, l));
    var n;
    if (this.sourceRoot != null && (n = e.urlParse(this.sourceRoot))) {
      var m = l.replace(/^file:\/\//, "");
      if (n.scheme == "file" && this._sources.has(m))
        return this.sourcesContent[this._sources.indexOf(m)];
      if ((!n.path || n.path == "/") && this._sources.has("/" + l))
        return this.sourcesContent[this._sources.indexOf("/" + l)];
    }
    if (d)
      return null;
    throw new Error('"' + l + '" is not in the SourceMap.');
  }, s.prototype.generatedPositionFor = function(a) {
    var d = e.getArg(a, "source");
    if (d = this._findSourceIndex(d), d < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var o = {
      source: d,
      originalLine: e.getArg(a, "line"),
      originalColumn: e.getArg(a, "column")
    }, l = this._findMapping(
      o,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      e.compareByOriginalPositions,
      e.getArg(a, "bias", p.GREATEST_LOWER_BOUND)
    );
    if (l >= 0) {
      var n = this._originalMappings[l];
      if (n.source === o.source)
        return {
          line: e.getArg(n, "generatedLine", null),
          column: e.getArg(n, "generatedColumn", null),
          lastColumn: e.getArg(n, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, J.BasicSourceMapConsumer = s;
  function u(a, d) {
    var o = a;
    typeof a == "string" && (o = e.parseSourceMapInput(a));
    var l = e.getArg(o, "version"), n = e.getArg(o, "sections");
    if (l != this._version)
      throw new Error("Unsupported version: " + l);
    this._sources = new r(), this._names = new r();
    var m = {
      line: -1,
      column: 0
    };
    this._sections = n.map(function(f) {
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
  return u.prototype = Object.create(p.prototype), u.prototype.constructor = p, u.prototype._version = 3, Object.defineProperty(u.prototype, "sources", {
    get: function() {
      for (var a = [], d = 0; d < this._sections.length; d++)
        for (var o = 0; o < this._sections[d].consumer.sources.length; o++)
          a.push(this._sections[d].consumer.sources[o]);
      return a;
    }
  }), u.prototype.originalPositionFor = function(a) {
    var d = {
      generatedLine: e.getArg(a, "line"),
      generatedColumn: e.getArg(a, "column")
    }, o = t.search(
      d,
      this._sections,
      function(n, m) {
        var f = n.generatedLine - m.generatedOffset.generatedLine;
        return f || n.generatedColumn - m.generatedOffset.generatedColumn;
      }
    ), l = this._sections[o];
    return l ? l.consumer.originalPositionFor({
      line: d.generatedLine - (l.generatedOffset.generatedLine - 1),
      column: d.generatedColumn - (l.generatedOffset.generatedLine === d.generatedLine ? l.generatedOffset.generatedColumn - 1 : 0),
      bias: a.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, u.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(a) {
      return a.consumer.hasContentsOfAllSources();
    });
  }, u.prototype.sourceContentFor = function(a, d) {
    for (var o = 0; o < this._sections.length; o++) {
      var l = this._sections[o], n = l.consumer.sourceContentFor(a, !0);
      if (n)
        return n;
    }
    if (d)
      return null;
    throw new Error('"' + a + '" is not in the SourceMap.');
  }, u.prototype.generatedPositionFor = function(a) {
    for (var d = 0; d < this._sections.length; d++) {
      var o = this._sections[d];
      if (o.consumer._findSourceIndex(e.getArg(a, "source")) !== -1) {
        var l = o.consumer.generatedPositionFor(a);
        if (l) {
          var n = {
            line: l.line + (o.generatedOffset.generatedLine - 1),
            column: l.column + (o.generatedOffset.generatedLine === l.line ? o.generatedOffset.generatedColumn - 1 : 0)
          };
          return n;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, u.prototype._parseMappings = function(a, d) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var o = 0; o < this._sections.length; o++)
      for (var l = this._sections[o], n = l.consumer._generatedMappings, m = 0; m < n.length; m++) {
        var f = n[m], y = l.consumer._sources.at(f.source);
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
  }, J.IndexedSourceMapConsumer = u, J;
}
var Ee = {}, ht;
function Yn() {
  if (ht)
    return Ee;
  ht = 1;
  var e = Pt().SourceMapGenerator, t = ie(), r = /(\r?\n)/, c = 10, h = "$$$isSourceNode$$$";
  function p(s, i, u, a, d) {
    this.children = [], this.sourceContents = {}, this.line = s == null ? null : s, this.column = i == null ? null : i, this.source = u == null ? null : u, this.name = d == null ? null : d, this[h] = !0, a != null && this.add(a);
  }
  return p.fromStringWithSourceMap = function(s, i, u) {
    var a = new p(), d = s.split(r), o = 0, l = function() {
      var v = b(), _ = b() || "";
      return v + _;
      function b() {
        return o < d.length ? d[o++] : void 0;
      }
    }, n = 1, m = 0, f = null;
    return i.eachMapping(function(v) {
      if (f !== null)
        if (n < v.generatedLine)
          y(f, l()), n++, m = 0;
        else {
          var _ = d[o] || "", b = _.substr(0, v.generatedColumn - m);
          d[o] = _.substr(v.generatedColumn - m), m = v.generatedColumn, y(f, b), f = v;
          return;
        }
      for (; n < v.generatedLine; )
        a.add(l()), n++;
      if (m < v.generatedColumn) {
        var _ = d[o] || "";
        a.add(_.substr(0, v.generatedColumn)), d[o] = _.substr(v.generatedColumn), m = v.generatedColumn;
      }
      f = v;
    }, this), o < d.length && (f && y(f, l()), a.add(d.splice(o).join(""))), i.sources.forEach(function(v) {
      var _ = i.sourceContentFor(v);
      _ != null && (u != null && (v = t.join(u, v)), a.setSourceContent(v, _));
    }), a;
    function y(v, _) {
      if (v === null || v.source === void 0)
        a.add(_);
      else {
        var b = u ? t.join(u, v.source) : v.source;
        a.add(new p(
          v.originalLine,
          v.originalColumn,
          b,
          _,
          v.name
        ));
      }
    }
  }, p.prototype.add = function(s) {
    if (Array.isArray(s))
      s.forEach(function(i) {
        this.add(i);
      }, this);
    else if (s[h] || typeof s == "string")
      s && this.children.push(s);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + s
      );
    return this;
  }, p.prototype.prepend = function(s) {
    if (Array.isArray(s))
      for (var i = s.length - 1; i >= 0; i--)
        this.prepend(s[i]);
    else if (s[h] || typeof s == "string")
      this.children.unshift(s);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + s
      );
    return this;
  }, p.prototype.walk = function(s) {
    for (var i, u = 0, a = this.children.length; u < a; u++)
      i = this.children[u], i[h] ? i.walk(s) : i !== "" && s(i, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, p.prototype.join = function(s) {
    var i, u, a = this.children.length;
    if (a > 0) {
      for (i = [], u = 0; u < a - 1; u++)
        i.push(this.children[u]), i.push(s);
      i.push(this.children[u]), this.children = i;
    }
    return this;
  }, p.prototype.replaceRight = function(s, i) {
    var u = this.children[this.children.length - 1];
    return u[h] ? u.replaceRight(s, i) : typeof u == "string" ? this.children[this.children.length - 1] = u.replace(s, i) : this.children.push("".replace(s, i)), this;
  }, p.prototype.setSourceContent = function(s, i) {
    this.sourceContents[t.toSetString(s)] = i;
  }, p.prototype.walkSourceContents = function(s) {
    for (var i = 0, u = this.children.length; i < u; i++)
      this.children[i][h] && this.children[i].walkSourceContents(s);
    for (var a = Object.keys(this.sourceContents), i = 0, u = a.length; i < u; i++)
      s(t.fromSetString(a[i]), this.sourceContents[a[i]]);
  }, p.prototype.toString = function() {
    var s = "";
    return this.walk(function(i) {
      s += i;
    }), s;
  }, p.prototype.toStringWithSourceMap = function(s) {
    var i = {
      code: "",
      line: 1,
      column: 0
    }, u = new e(s), a = !1, d = null, o = null, l = null, n = null;
    return this.walk(function(m, f) {
      i.code += m, f.source !== null && f.line !== null && f.column !== null ? ((d !== f.source || o !== f.line || l !== f.column || n !== f.name) && u.addMapping({
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
      }), d = f.source, o = f.line, l = f.column, n = f.name, a = !0) : a && (u.addMapping({
        generated: {
          line: i.line,
          column: i.column
        }
      }), d = null, a = !1);
      for (var y = 0, v = m.length; y < v; y++)
        m.charCodeAt(y) === c ? (i.line++, i.column = 0, y + 1 === v ? (d = null, a = !1) : a && u.addMapping({
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
      u.setSourceContent(m, f);
    }), { code: i.code, map: u };
  }, Ee.SourceNode = p, Ee;
}
var dt;
function Xn() {
  return dt || (dt = 1, oe.SourceMapGenerator = Pt().SourceMapGenerator, oe.SourceMapConsumer = Qn().SourceMapConsumer, oe.SourceNode = Yn().SourceNode), oe;
}
(function(e, t) {
  t.__esModule = !0;
  var r = x, c = void 0;
  try {
    var h = Xn();
    c = h.SourceNode;
  } catch {
  }
  c || (c = function(i, u, a, d) {
    this.src = "", d && this.add(d);
  }, c.prototype = {
    add: function(i) {
      r.isArray(i) && (i = i.join("")), this.src += i;
    },
    prepend: function(i) {
      r.isArray(i) && (i = i.join("")), this.src = i + this.src;
    },
    toStringWithSourceMap: function() {
      return { code: this.toString() };
    },
    toString: function() {
      return this.src;
    }
  });
  function p(i, u, a) {
    if (r.isArray(i)) {
      for (var d = [], o = 0, l = i.length; o < l; o++)
        d.push(u.wrap(i[o], a));
      return d;
    } else if (typeof i == "boolean" || typeof i == "number")
      return i + "";
    return i;
  }
  function s(i) {
    this.srcFile = i, this.source = [];
  }
  s.prototype = {
    isEmpty: function() {
      return !this.source.length;
    },
    prepend: function(i, u) {
      this.source.unshift(this.wrap(i, u));
    },
    push: function(i, u) {
      this.source.push(this.wrap(i, u));
    },
    merge: function() {
      var i = this.empty();
      return this.each(function(u) {
        i.add(["  ", u, `
`]);
      }), i;
    },
    each: function(i) {
      for (var u = 0, a = this.source.length; u < a; u++)
        i(this.source[u]);
    },
    empty: function() {
      var i = this.currentLocation || { start: {} };
      return new c(i.start.line, i.start.column, this.srcFile);
    },
    wrap: function(i) {
      var u = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
      return i instanceof c ? i : (i = p(i, this, u), new c(u.start.line, u.start.column, this.srcFile, i));
    },
    functionCall: function(i, u, a) {
      return a = this.generateList(a), this.wrap([i, u ? "." + u + "(" : "(", a, ")"]);
    },
    quotedString: function(i) {
      return '"' + (i + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
    },
    objectLiteral: function(i) {
      var u = this, a = [];
      Object.keys(i).forEach(function(o) {
        var l = p(i[o], u);
        l !== "undefined" && a.push([u.quotedString(o), ":", l]);
      });
      var d = this.generateList(a);
      return d.prepend("{"), d.add("}"), d;
    },
    generateList: function(i) {
      for (var u = this.empty(), a = 0, d = i.length; a < d; a++)
        a && u.add(","), u.add(p(i[a], this));
      return u;
    },
    generateArray: function(i) {
      var u = this.generateList(i);
      return u.prepend("["), u.add("]"), u;
    }
  }, t.default = s, e.exports = t.default;
})(je, je.exports);
(function(e, t) {
  t.__esModule = !0;
  function r(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var c = D, h = R.exports, p = r(h), s = x, i = je.exports, u = r(i);
  function a(l) {
    this.value = l;
  }
  function d() {
  }
  d.prototype = {
    nameLookup: function(l, n) {
      return this.internalNameLookup(l, n);
    },
    depthedLookup: function(l) {
      return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(l), ")"];
    },
    compilerInfo: function() {
      var l = c.COMPILER_REVISION, n = c.REVISION_CHANGES[l];
      return [l, n];
    },
    appendToBuffer: function(l, n, m) {
      return s.isArray(l) || (l = [l]), l = this.source.wrap(l, n), this.environment.isSimple ? ["return ", l, ";"] : m ? ["buffer += ", l, ";"] : (l.appendToBuffer = !0, l);
    },
    initializeBuffer: function() {
      return this.quotedString("");
    },
    internalNameLookup: function(l, n) {
      return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", l, ",", JSON.stringify(n), ")"];
    },
    lookupPropertyFunctionIsUsed: !1,
    compile: function(l, n, m, f) {
      this.environment = l, this.options = n, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !f, this.name = this.environment.name, this.isChild = !!m, this.context = m || {
        decorators: [],
        programs: [],
        environments: []
      }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(l, n), this.useDepths = this.useDepths || l.useDepths || l.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || l.useBlockParams;
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
      var k = this.context, w = k.programs, L = k.decorators;
      for (b = 0, g = w.length; b < g; b++)
        w[b] && (E[b] = w[b], L[b] && (E[b + "_d"] = L[b], E.useDecorators = !0));
      return this.environment.usePartial && (E.usePartial = !0), this.options.data && (E.useData = !0), this.useDepths && (E.useDepths = !0), this.useBlockParams && (E.useBlockParams = !0), this.options.compat && (E.compat = !0), f ? E.compilerOptions = this.options : (E.compiler = JSON.stringify(E.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, E = this.objectLiteral(E), n.srcName ? (E = E.toStringWithSourceMap({ file: n.destName }), E.map = E.map && E.map.toString()) : E = E.toString()), E;
    },
    preamble: function() {
      this.lastContext = 0, this.source = new u.default(this.options.srcName), this.decorators = new u.default(this.options.srcName);
    },
    createFunctionContext: function(l) {
      var n = this, m = "", f = this.stackVars.concat(this.registers.list);
      f.length > 0 && (m += ", " + f.join(", "));
      var y = 0;
      Object.keys(this.aliases).forEach(function(b) {
        var g = n.aliases[b];
        g.children && g.referenceCount > 1 && (m += ", alias" + ++y + "=" + b, g.children[0] = "alias" + y);
      }), this.lookupPropertyFunctionIsUsed && (m += ", " + this.lookupPropertyFunctionVarDeclaration());
      var v = ["container", "depth0", "helpers", "partials", "data"];
      (this.useBlockParams || this.useDepths) && v.push("blockParams"), this.useDepths && v.push("depths");
      var _ = this.mergeSource(m);
      return l ? (v.push(_), Function.apply(this, v)) : this.source.wrap(["function(", v.join(","), `) {
  `, _, "}"]);
    },
    mergeSource: function(l) {
      var n = this.environment.isSimple, m = !this.forceBuffer, f = void 0, y = void 0, v = void 0, _ = void 0;
      return this.source.each(function(b) {
        b.appendToBuffer ? (v ? b.prepend("  + ") : v = b, _ = b) : (v && (y ? v.prepend("buffer += ") : f = !0, _.add(";"), v = _ = void 0), y = !0, n || (m = !1));
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
      var n = this.aliasable("container.hooks.blockHelperMissing"), m = [this.contextName(0)];
      this.setupHelperArgs(l, 0, m);
      var f = this.popStack();
      m.splice(1, 0, f), this.push(this.source.functionCall(n, "call", m));
    },
    ambiguousBlockValue: function() {
      var l = this.aliasable("container.hooks.blockHelperMissing"), n = [this.contextName(0)];
      this.setupHelperArgs("", 0, n, !0), this.flushInline();
      var m = this.topStack();
      n.splice(1, 0, m), this.pushSource(["if (!", this.lastHelper, ") { ", m, " = ", this.source.functionCall(l, "call", n), "}"]);
    },
    appendContent: function(l) {
      this.pendingContent ? l = this.pendingContent + l : this.pendingLocation = this.source.currentLocation, this.pendingContent = l;
    },
    append: function() {
      if (this.isInline())
        this.replaceStack(function(n) {
          return [" != null ? ", n, ' : ""'];
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
    lookupOnContext: function(l, n, m, f) {
      var y = 0;
      !f && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(l[y++])) : this.pushContext(), this.resolvePath("context", l, y, n, m);
    },
    lookupBlockParam: function(l, n) {
      this.useBlockParams = !0, this.push(["blockParams[", l[0], "][", l[1], "]"]), this.resolvePath("context", n, 1);
    },
    lookupData: function(l, n, m) {
      l ? this.pushStackLiteral("container.data(data, " + l + ")") : this.pushStackLiteral("data"), this.resolvePath("data", n, 0, !0, m);
    },
    resolvePath: function(l, n, m, f, y) {
      var v = this;
      if (this.options.strict || this.options.assumeObjects) {
        this.push(o(this.options.strict && y, this, n, l));
        return;
      }
      for (var _ = n.length; m < _; m++)
        this.replaceStack(function(b) {
          var g = v.nameLookup(b, n[m], l);
          return f ? [" && ", g] : [" != null ? ", g, " : ", b];
        });
    },
    resolvePossibleLambda: function() {
      this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
    },
    pushStringParam: function(l, n) {
      this.pushContext(), this.pushString(n), n !== "SubExpression" && (typeof l == "string" ? this.pushString(l) : this.pushStackLiteral(l));
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
    registerDecorator: function(l, n) {
      var m = this.nameLookup("decorators", n, "decorator"), f = this.setupHelperArgs(n, l);
      this.decorators.push(["fn = ", this.decorators.functionCall(m, "", ["fn", "props", "container", f]), " || fn;"]);
    },
    invokeHelper: function(l, n, m) {
      var f = this.popStack(), y = this.setupHelper(l, n), v = [];
      m && v.push(y.name), v.push(f), this.options.strict || v.push(this.aliasable("container.hooks.helperMissing"));
      var _ = ["(", this.itemsSeparatedBy(v, "||"), ")"], b = this.source.functionCall(_, "call", y.callParams);
      this.push(b);
    },
    itemsSeparatedBy: function(l, n) {
      var m = [];
      m.push(l[0]);
      for (var f = 1; f < l.length; f++)
        m.push(n, l[f]);
      return m;
    },
    invokeKnownHelper: function(l, n) {
      var m = this.setupHelper(l, n);
      this.push(this.source.functionCall(m.name, "call", m.callParams));
    },
    invokeAmbiguous: function(l, n) {
      this.useRegister("helper");
      var m = this.popStack();
      this.emptyHash();
      var f = this.setupHelper(0, l, n), y = this.lastHelper = this.nameLookup("helpers", l, "helper"), v = ["(", "(helper = ", y, " || ", m, ")"];
      this.options.strict || (v[0] = "(helper = ", v.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", v, f.paramsInit ? ["),(", f.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", f.callParams), " : helper))"]);
    },
    invokePartial: function(l, n, m) {
      var f = [], y = this.setupParams(n, 1, f);
      l && (n = this.popStack(), delete y.name), m && (y.indent = JSON.stringify(m)), y.helpers = "helpers", y.partials = "partials", y.decorators = "container.decorators", l ? f.unshift(n) : f.unshift(this.nameLookup("partials", n, "partial")), this.options.compat && (y.depths = "depths"), y = this.objectLiteral(y), f.push(y), this.push(this.source.functionCall("container.invokePartial", "", f));
    },
    assignToHash: function(l) {
      var n = this.popStack(), m = void 0, f = void 0, y = void 0;
      this.trackIds && (y = this.popStack()), this.stringParams && (f = this.popStack(), m = this.popStack());
      var v = this.hash;
      m && (v.contexts[l] = m), f && (v.types[l] = f), y && (v.ids[l] = y), v.values[l] = n;
    },
    pushId: function(l, n, m) {
      l === "BlockParam" ? this.pushStackLiteral("blockParams[" + n[0] + "].path[" + n[1] + "]" + (m ? " + " + JSON.stringify("." + m) : "")) : l === "PathExpression" ? this.pushString(n) : l === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
    },
    compiler: d,
    compileChildren: function(l, n) {
      for (var m = l.children, f = void 0, y = void 0, v = 0, _ = m.length; v < _; v++) {
        f = m[v], y = new this.compiler();
        var b = this.matchExistingProgram(f);
        if (b == null) {
          this.context.programs.push("");
          var g = this.context.programs.length;
          f.index = g, f.name = "program" + g, this.context.programs[g] = y.compile(f, n, this.context, !this.precompile), this.context.decorators[g] = y.decorators, this.context.environments[g] = f, this.useDepths = this.useDepths || y.useDepths, this.useBlockParams = this.useBlockParams || y.useBlockParams, f.useDepths = this.useDepths, f.useBlockParams = this.useBlockParams;
        } else
          f.index = b.index, f.name = "program" + b.index, this.useDepths = this.useDepths || b.useDepths, this.useBlockParams = this.useBlockParams || b.useBlockParams;
      }
    },
    matchExistingProgram: function(l) {
      for (var n = 0, m = this.context.environments.length; n < m; n++) {
        var f = this.context.environments[n];
        if (f && f.equals(l))
          return f;
      }
    },
    programExpression: function(l) {
      var n = this.environment.children[l], m = [n.index, "data", n.blockParams];
      return (this.useBlockParams || this.useDepths) && m.push("blockParams"), this.useDepths && m.push("depths"), "container.program(" + m.join(", ") + ")";
    },
    useRegister: function(l) {
      this.registers[l] || (this.registers[l] = !0, this.registers.list.push(l));
    },
    push: function(l) {
      return l instanceof a || (l = this.source.wrap(l)), this.inlineStack.push(l), l;
    },
    pushStackLiteral: function(l) {
      this.push(new a(l));
    },
    pushSource: function(l) {
      this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), l && this.source.push(l);
    },
    replaceStack: function(l) {
      var n = ["("], m = void 0, f = void 0, y = void 0;
      if (!this.isInline())
        throw new p.default("replaceStack on non-inline");
      var v = this.popStack(!0);
      if (v instanceof a)
        m = [v.value], n = ["(", m], y = !0;
      else {
        f = !0;
        var _ = this.incrStack();
        n = ["((", this.push(_), " = ", v, ")"], m = this.topStack();
      }
      var b = l.call(this, m);
      y || this.popStack(), f && this.stackSlot--, this.push(n.concat(b, ")"));
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
      for (var n = 0, m = l.length; n < m; n++) {
        var f = l[n];
        if (f instanceof a)
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
      var n = this.isInline(), m = (n ? this.inlineStack : this.compileStack).pop();
      if (!l && m instanceof a)
        return m.value;
      if (!n) {
        if (!this.stackSlot)
          throw new p.default("Invalid stack pop");
        this.stackSlot--;
      }
      return m;
    },
    topStack: function() {
      var l = this.isInline() ? this.inlineStack : this.compileStack, n = l[l.length - 1];
      return n instanceof a ? n.value : n;
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
      var n = this.aliases[l];
      return n ? (n.referenceCount++, n) : (n = this.aliases[l] = this.source.wrap(l), n.aliasable = !0, n.referenceCount = 1, n);
    },
    setupHelper: function(l, n, m) {
      var f = [], y = this.setupHelperArgs(n, l, f, m), v = this.nameLookup("helpers", n, "helper"), _ = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
      return {
        params: f,
        paramsInit: y,
        name: v,
        callParams: [_].concat(f)
      };
    },
    setupParams: function(l, n, m) {
      var f = {}, y = [], v = [], _ = [], b = !m, g = void 0;
      b && (m = []), f.name = this.quotedString(l), f.hash = this.popStack(), this.trackIds && (f.hashIds = this.popStack()), this.stringParams && (f.hashTypes = this.popStack(), f.hashContexts = this.popStack());
      var S = this.popStack(), E = this.popStack();
      (E || S) && (f.fn = E || "container.noop", f.inverse = S || "container.noop");
      for (var k = n; k--; )
        g = this.popStack(), m[k] = g, this.trackIds && (_[k] = this.popStack()), this.stringParams && (v[k] = this.popStack(), y[k] = this.popStack());
      return b && (f.args = this.source.generateArray(m)), this.trackIds && (f.ids = this.source.generateArray(_)), this.stringParams && (f.types = this.source.generateArray(v), f.contexts = this.source.generateArray(y)), this.options.data && (f.data = "data"), this.useBlockParams && (f.blockParams = "blockParams"), f;
    },
    setupHelperArgs: function(l, n, m, f) {
      var y = this.setupParams(l, n, m);
      return y.loc = JSON.stringify(this.source.currentLocation), y = this.objectLiteral(y), f ? (this.useRegister("options"), m.push("options"), ["options=", y]) : m ? (m.push(y), "") : y;
    }
  }, function() {
    for (var l = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), n = d.RESERVED_WORDS = {}, m = 0, f = l.length; m < f; m++)
      n[l[m]] = !0;
  }(), d.isValidJavaScriptVariableName = function(l) {
    return !d.RESERVED_WORDS[l] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(l);
  };
  function o(l, n, m, f) {
    var y = n.popStack(), v = 0, _ = m.length;
    for (l && _--; v < _; v++)
      y = n.nameLookup(y, m[v], f);
    return l ? [n.aliasable("container.strict"), "(", y, ", ", n.quotedString(m[v]), ", ", JSON.stringify(n.source.currentLocation), " )"] : y;
  }
  t.default = d, e.exports = t.default;
})(Ue, Ue.exports);
(function(e, t) {
  t.__esModule = !0;
  function r(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var c = xe.exports, h = r(c), p = me.exports, s = r(p), i = re, u = ne, a = Ue.exports, d = r(a), o = fe.exports, l = r(o), n = de.exports, m = r(n), f = h.default.create;
  function y() {
    var _ = f();
    return _.compile = function(b, g) {
      return u.compile(b, g, _);
    }, _.precompile = function(b, g) {
      return u.precompile(b, g, _);
    }, _.AST = s.default, _.Compiler = u.Compiler, _.JavaScriptCompiler = d.default, _.Parser = i.parser, _.parse = i.parse, _.parseWithoutProcessing = i.parseWithoutProcessing, _;
  }
  var v = y();
  v.create = y, m.default(v), v.Visitor = l.default, v.default = v, t.default = v, e.exports = t.default;
})(Le, Le.exports);
const Mt = /* @__PURE__ */ pr(Le.exports);
let ke, we;
const ei = (e) => {
  var t;
  const r = e.opts;
  let c = "Ad {{adPosition}} of {{totalAds}} ends in {{secondsRemaining}}";
  r.adLabelNTime !== void 0 && (c = r.adLabelNTime), we === void 0 && (we = Mt.compile(c));
  const h = (t = e.adsManager) == null ? void 0 : t.getRemainingTime(), p = h !== void 0 ? Math.round(h) : 0, { adPosition: s, totalAds: i } = e;
  return we({
    secondsRemaining: p,
    adPosition: s,
    totalAds: i
  });
}, ti = (e) => {
  var t;
  const r = e.opts;
  let c = "Ad ends in {{secondsRemaining}} seconds";
  r.adLabelTime !== void 0 && (c = r.adLabelTime), ke === void 0 && (ke = Mt.compile(c));
  const h = (t = e.adsManager) == null ? void 0 : t.getRemainingTime(), p = h !== void 0 ? Math.round(h) : 0;
  return ke({ secondsRemaining: p });
}, C = (e, t) => t.ui.controlsBottom.querySelector(`.button-${e}`), ri = (e) => {
  const t = e.google, r = e.adsManager, c = e.videoElement, h = cr(c);
  document.addEventListener("fullscreenchange", () => {
    document.fullscreenElement === e.rootElement ? (C("enter-fullscreen", e).classList.add("hidden"), C("exit-fullscreen", e).classList.remove("hidden"), r.resize(c.clientWidth, c.clientHeight, t.ima.ViewMode.FULLSCREEN)) : (C("enter-fullscreen", e).classList.remove("hidden"), C("exit-fullscreen", e).classList.add("hidden"), r.resize(c.clientWidth, c.clientHeight, t.ima.ViewMode.NORMAL));
  }), r.addEventListener(t.ima.AdErrorEvent.Type.AD_ERROR, (p) => {
    const s = p.getError();
    console.error("Ad error: ", s.getMessage()), h.dispatch(P.AD_ERROR, s.getMessage());
  }), r.addEventListener(t.ima.AdEvent.Type.AD_CAN_PLAY, () => {
    e.ui.loadingSpinner.classList.add("hidden");
  }), r.addEventListener(t.ima.AdEvent.Type.AD_BUFFERING, () => {
    e.ui.loadingSpinner.classList.remove("hidden");
  }), r.addEventListener(t.ima.AdEvent.Type.AD_METADATA, () => {
    h.dispatch(P.AD_METADATA);
  }), r.addEventListener(t.ima.AdEvent.Type.AD_PROGRESS, () => {
    const p = e.ui.controlsBottom.querySelector(".time-label");
    let s = "";
    e.totalAds > 1 ? s = ei(e) : s = ti(e), p.innerHTML = s, h.dispatch(P.AD_PROGRESS);
  }), r.addEventListener(t.ima.AdEvent.Type.CLICK, () => {
    h.dispatch(P.AD_CLICK);
  }), r.addEventListener(t.ima.AdEvent.Type.COMPLETE, () => {
    e.ui.root.classList.add("hidden"), h.dispatch(P.AD_COMPLETE);
  }), r.addEventListener(t.ima.AdEvent.Type.SKIPPED, () => {
    e.ui.root.classList.add("hidden"), h.dispatch(P.AD_SKIPPED);
  }), r.addEventListener(t.ima.AdEvent.Type.FIRST_QUARTILE, () => {
    h.dispatch(P.AD_FIRST_QUARTILE);
  }), r.addEventListener(t.ima.AdEvent.Type.MIDPOINT, () => {
    h.dispatch(P.AD_MIDPOINT);
  }), r.addEventListener(t.ima.AdEvent.Type.PAUSED, () => {
    C("play", e).classList.remove("hidden"), C("pause", e).classList.add("hidden"), h.dispatch(P.AD_PAUSED, r.getRemainingTime());
  }), r.addEventListener(t.ima.AdEvent.Type.RESUMED, () => {
    C("play", e).classList.add("hidden"), C("pause", e).classList.remove("hidden"), h.dispatch(P.AD_RESUMED, r.getRemainingTime());
  }), r.addEventListener(t.ima.AdEvent.Type.STARTED, (p) => {
    var s, i;
    e.ui.root.classList.remove("hidden"), C("play", e).classList.add("hidden"), C("pause", e).classList.remove("hidden"), e.videoElement.muted ? ((s = e.adsManager) == null || s.setVolume(0), C("volume", e).classList.add("hidden"), C("muted", e).classList.remove("hidden")) : ((i = e.adsManager) == null || i.setVolume(1), C("volume", e).classList.remove("hidden"), C("muted", e).classList.add("hidden"));
    const u = p.getAd().getAdPodInfo();
    e.adPosition = u.getAdPosition(), e.totalAds = u.getTotalAds(), h.dispatch(P.AD_STARTED, r.getRemainingTime());
  }), r.addEventListener(t.ima.AdEvent.Type.THIRD_QUARTILE, () => {
    h.dispatch(P.AD_THIRD_QUARTILE);
  }), r.addEventListener(t.ima.AdEvent.Type.VOLUME_CHANGED, () => {
    e.imaVideoElement.muted ? (C("volume", e).classList.add("hidden"), C("muted", e).classList.remove("hidden")) : (C("volume", e).classList.remove("hidden"), C("muted", e).classList.add("hidden")), h.dispatch(P.AD_VOLUME_CHANGED, r.getVolume());
  }), r.addEventListener(t.ima.AdEvent.Type.VOLUME_MUTED, () => {
    C("volume", e).classList.add("hidden"), C("muted", e).classList.remove("hidden"), h.dispatch(P.AD_VOLUME_MUTED);
  }), r.addEventListener(t.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, () => {
    var p;
    (p = e.videoElement) == null || p.pause();
  }), r.addEventListener(t.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, () => {
    var p;
    (p = e.videoElement) == null || p.play();
  });
}, ni = () => {
  const e = document.createElement("div"), t = document.createElement("div"), r = document.createElement("div"), c = document.createElement("div"), h = document.createElement("div");
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
      controlsTop: r,
      controlsBottom: c,
      loadingSpinner: h
    }
  };
}, mt = (e) => {
  const t = document.createElement("button");
  return t.classList.add("button", "button-" + e.name), t.setAttribute("aria-label", e.ariaLabel), t.setAttribute("title", e.title), t.setAttribute("type", "button"), t.appendChild(e.svg), e.disabled !== void 0 && e.disabled && t.setAttribute("disabled", "disabled"), e.on !== void 0 && e.on.length > 0 && e.on.forEach((r) => {
    t.addEventListener(r.name, r.callback);
  }), e.hidden !== void 0 && e.hidden && t.classList.add("hidden"), t;
}, K = (e) => {
  const t = [];
  t.push(["role", "presentation"]), t.push(["focusable", "false"]);
  const r = "http://www.w3.org/2000/svg", c = "#cheza-", h = document.createElementNS(r, "svg");
  t.forEach((i) => {
    h.setAttribute(i[0], i[1]);
  });
  const p = document.createElementNS(r, "use"), s = c + e;
  return p.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s), h.appendChild(p), h;
}, ii = (e, t) => {
  var r, c, h, p, s, i, u, a, d, o, l;
  const n = (s = (p = (h = (c = (r = e.requestFullscreen) != null ? r : e.webkitRequestFullscreen) != null ? c : e.webkitEnterFullscreen) != null ? h : e.mozRequestFullScreen) != null ? p : e.msRequestFullscreen) != null ? s : null, m = (l = (o = (d = (a = (u = (i = t.requestFullscreen) != null ? i : t.webkitRequestFullscreen) != null ? u : t.webkitEnterFullscreen) != null ? a : t.requestFullscreen) != null ? d : t.mozRequestFullScreen) != null ? o : t.msRequestFullscreen) != null ? l : null;
  n !== null ? n.apply(e) : m !== null && m.apply(t);
}, oi = (e) => {
  var t, r, c, h, p;
  const s = document, i = (h = (c = (r = (t = s.exitFullscreen) != null ? t : s.webkitExitFullscreen) != null ? r : s.mozCancelFullScreen) != null ? c : s.msExitFullscreen) != null ? h : null, u = (p = e.webkitExitFullscreen) != null ? p : null;
  i !== null ? i.apply(s) : u !== null && u.apply(e);
};
var ze = /* @__PURE__ */ ((e) => (e.LEFT = "left", e.RIGHT = "right", e))(ze || {});
const ft = (e, t) => {
  const r = {
    left: [],
    right: []
  };
  return r.left = [
    {
      name: "play",
      ariaLabel: "Play",
      title: "Play",
      svg: K("play"),
      on: [
        {
          name: "click",
          callback: () => {
            e.adsManager.resume();
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
            e.adsManager.pause();
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
            e.adsManager.setVolume(0);
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
            e.adsManager.setVolume(1);
          }
        }
      ]
    }
  ], r.right = [
    {
      name: "enter-fullscreen",
      ariaLabel: "Enter Fullscreen",
      title: "Enter Fullscreen",
      svg: K("enter-fullscreen"),
      on: [
        {
          name: "click",
          callback: () => {
            ii(e.rootElement, e.imaVideoElement);
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
            oi(e.imaVideoElement);
          }
        }
      ]
    }
  ], r[t];
}, si = (e) => {
  const t = e.defaultUIElement, r = e.ui.root, c = e.ui.overlay;
  c.classList.add("overlay"), r.classList.add("ima-ui", "hidden"), t.after(r), e.ui.adContainer.classList.add("ad-container"), r.appendChild(e.ui.adContainer);
  const h = document.createElement("div");
  h.classList.add("animation"), e.ui.loadingSpinner.classList.add("loading-spinner", "hidden"), e.ui.loadingSpinner.appendChild(h), c.appendChild(e.ui.loadingSpinner), e.ui.controlsTop.classList.add("controls-top"), e.ui.controlsBottom.classList.add("controls-bottom"), c.appendChild(e.ui.controlsTop), c.appendChild(e.ui.controlsBottom), r.appendChild(c), ft(e, ze.LEFT).forEach((s) => {
    e.ui.controlsBottom.appendChild(mt(s));
  });
  const p = document.createElement("div");
  p.classList.add("time-label"), p.innerText = "Ad", e.ui.controlsBottom.appendChild(p), ft(e, ze.RIGHT).forEach((s) => {
    e.ui.controlsBottom.appendChild(mt(s));
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
      var r, c, h, p;
      const s = this._getGoogle(), i = (r = this._chezaDataStore) == null ? void 0 : r.videoElement, u = (c = this._dataStore.google) == null ? void 0 : c.ima.ViewMode.NORMAL, a = new s.ima.AdsRenderingSettings();
      a.loadVideoTimeout = (p = (h = this._dataStore.opts) == null ? void 0 : h.loadVideoTimeout) != null ? p : -1, a.uiElements = [], this._dataStore.adsManager = t.getAdsManager(i, a), window.addEventListener("resize", () => {
        var d;
        document.fullscreenElement === null && ((d = this._dataStore.adsManager) == null || d.resize(i.clientWidth, i.clientHeight, u));
      }), ri(this._dataStore);
    }), M(this, "_onAdError", (t) => {
      this.logger.error("_onAdError", t.getError()), this._dataStore.adsManager !== void 0 && this._dataStore.adsManager.destroy();
    }), M(this, "_startAds", (t) => {
      var r, c, h, p, s, i, u, a;
      if (this._dataStore.adsLoaded)
        return;
      this._dataStore.adsLoaded = !0, t.preventDefault(), (r = this._dataStore.adDisplayContainer) == null || r.initialize();
      const d = (h = (c = this._chezaDataStore) == null ? void 0 : c.videoElement.offsetWidth) != null ? h : 0, o = (s = (p = this._chezaDataStore) == null ? void 0 : p.videoElement.offsetHeight) != null ? s : 0;
      try {
        const y = this._getViewMode();
        (i = this._dataStore.adsManager) == null || i.init(d, o, y), (u = this._dataStore.adsManager) == null || u.start();
      } catch {
        this.logger.error("AdsManager could not be started"), (a = this._chezaDataStore) == null || a.videoElement.play();
      }
      const l = this._chezaDataStore, n = l.videoElement, m = l.controlsBottom.querySelector(".button-play"), f = l.progressContainer;
      n.removeEventListener("play", this._startAds), n.removeEventListener("click", this._startAds), m.removeEventListener("click", this._startAds), f.removeEventListener("click", this._startAds);
    }), M(this, "_requestAds", () => {
      var t, r, c;
      const h = this._getGoogle(), p = this._chezaDataStore.videoElement, s = new h.ima.AdsRequest(), i = (t = p.getAttribute("data-ima-ad-tag-url")) != null ? t : "";
      s.adTagUrl = i, ((r = this._dataStore.opts) == null ? void 0 : r.omidAccessModeRules) !== void 0 && (s.omidAccessModeRules = this._dataStore.opts.omidAccessModeRules), s.linearAdSlotWidth = p.clientWidth, s.linearAdSlotHeight = p.clientHeight, s.nonLinearAdSlotWidth = p.clientWidth, s.nonLinearAdSlotHeight = p.clientHeight / 3, (c = this._dataStore.adsLoader) == null || c.requestAds(s);
    }), M(this, "_bindIMAVideoElementToDataStore", () => {
      var t;
      const r = this._dataStore.ui.adContainer, c = (t = r.querySelector("video")) != null ? t : r.querySelector("lima-video");
      this._dataStore.imaVideoElement = c;
    }), M(this, "_onVideoEnded", () => {
      var t;
      (t = this._dataStore.adsLoader) == null || t.contentComplete(), this._dataStore.adsLoaded = !1, this._requestAds(), this._chezaDataStore.videoElement.addEventListener("play", this._startAds);
    }), M(this, "_loadIMAScriptCallback", () => {
      var t, r, c, h;
      const p = this._getGoogle(), s = this._chezaDataStore, i = s.videoElement, u = s.controlsBottom.querySelector(".button-play"), a = s.progressContainer;
      p.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0), p.ima.settings.setNumRedirects((r = (t = this._dataStore.opts) == null ? void 0 : t.maxRedirects) != null ? r : 5), ((c = this._dataStore.opts) == null ? void 0 : c.locale) !== void 0 && p.ima.settings.setLocale(this._dataStore.opts.locale), ((h = this._dataStore.opts) == null ? void 0 : h.ppid) !== void 0 && p.ima.settings.setPpid(this._dataStore.opts.ppid), this._dataStore.adDisplayContainer = new p.ima.AdDisplayContainer(this._dataStore.ui.adContainer, i), this._dataStore.adsLoader = new p.ima.AdsLoader(this._dataStore.adDisplayContainer), this._bindIMAVideoElementToDataStore(), this._dataStore.adsLoader.addEventListener(p.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this._onAdsManagerLoaded, !1), this._dataStore.adsLoader.addEventListener(p.ima.AdErrorEvent.Type.AD_ERROR, this._onAdError, !1), i.addEventListener("ended", this._onVideoEnded, !1), this._requestAds(), i.addEventListener("click", this._startAds, !1), u.addEventListener("click", this._startAds, !1), a.addEventListener("click", this._startAds, !1);
    }), this._chezaDataStore = void 0, this._dataStore = ni(), this.logger = gt(!1);
  }
  _getGoogle() {
    if (this._dataStore.google === void 0)
      throw new Error("Google IMA SDK not loaded");
    return this._dataStore.google;
  }
  _getViewMode() {
    var t, r, c;
    return document.fullscreenElement === ((t = this._chezaDataStore) == null ? void 0 : t.rootElement) ? (r = this._dataStore.google) == null ? void 0 : r.ima.ViewMode.FULLSCREEN : (c = this._dataStore.google) == null ? void 0 : c.ima.ViewMode.NORMAL;
  }
  getDataStore() {
    return this._dataStore;
  }
  add(t, r) {
    this._dataStore.opts = r, this.logger = gt(r == null ? void 0 : r.debug), this._dataStore.videoElement = t.videoElement, this._chezaDataStore = t, this._dataStore.rootElement = t.rootElement, this._dataStore.defaultUIElement = t.uiRoot, si(this._dataStore), tr(r == null ? void 0 : r.debug).then((c) => {
      this._dataStore.google = c, this._loadIMAScriptCallback();
    }).catch((c) => {
      this.logger.error(c);
    });
  }
  remove(t) {
    this._dataStore.ui.root.remove();
  }
}
M(X, "Version", ur.version), M(X, "Name", "ChezaIMAPlugin"), M(X, "Opts", {});
U.registerPlugin(X);
const ai = document.querySelector("video"), li = new U(ai), ui = {
  locale: "de",
  maxRedirects: 10,
  loadVideoTimeout: -1,
  adLabelTime: "Werbung endet in {{secondsRemaining}} Sekunden",
  adLabelNTime: "Werbung {{adPosition}} von {{totalAds}} endet in {{secondsRemaining}}s"
};
li.addPlugin(X.Name, ui);
export {
  U as Cheza,
  X as ChezaIMAPlugin
};
