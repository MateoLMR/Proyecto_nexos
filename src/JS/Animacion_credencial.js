const CREATORS = [
  {
    name: "Andres Parra",
    role: "Experto en eSports",
    handle: "@BrujoDev",
    avatar: "/src/Avatars/Parra.png",
    avatarFallback: "AP",
    color: "#ed4f3a",
    accent: "#ed4f3a",
    badge: "eSports",
    stat1: { label: "Torneos vistos", value: "1000+" },
    stat2: { label: "Estudios eSports", value: "12" },
  },
  {
    name: "Mateo Leal",
    role: "Creador de Nexos",
    handle: "@Matengo",
    avatar: "/src/Avatars/Mateo.jpg",
    avatarFallback: "ML",
    color: "#0EA5E9",
    accent: "#38BDF8",
    badge: "Founder",
    stat1: { label: "Horas de trabajo", value: "100+" },
    stat2: { label: "Avance del proyecto", value: "50%" },
  },
  {
    name: "Nicolas Foglea",
    role: "Bases de datos",
    handle: "@SRPalomita",
    avatar: "/src/Avatars/Paloma.jpeg",
    avatarFallback: "NF",
    color: "#10B981",
    accent: "#34D399",
    badge: "Backend",
    stat1: { label: "Bases de datos", value: "2" },
    stat2: { label: "Estudios Bases", value: "10" },
  },
];

function preloadImages(creators, callback) {
  var total = creators.length;
  var loaded = 0;
  creators.forEach(function (cr) {
    if (!cr.avatar || cr.avatar.length <= 3) {
      cr._img = null; loaded++;
      if (loaded === total) callback();
      return;
    }
    var img = new Image();
    img.onload = function () { cr._img = img; loaded++; if (loaded === total) callback(); };
    img.onerror = function () { cr._img = null; loaded++; if (loaded === total) callback(); };
    img.src = cr.avatar;
  });
}

class Rope {
  constructor(anchorX, anchorY, segments) {
    segments = segments || 23;
    this.pts = []; this.prev = [];
    this.n = segments; this.seg = 46;
    for (var i = 0; i <= segments; i++) {
      this.pts.push({ x: anchorX, y: anchorY + i * this.seg });
      this.prev.push({ x: anchorX, y: anchorY + i * this.seg });
    }
    this.ax = anchorX; this.ay = anchorY;
  }
  update(tx, ty) {
    var g = 900, d = 0.987, it = 8, dt = 0.016;
    for (var i = 1; i < this.pts.length; i++) {
      var p = this.pts[i], pv = this.prev[i];
      var vx = (p.x - pv.x) * d, vy = (p.y - pv.y) * d;
      this.prev[i] = { x: p.x, y: p.y };
      p.x += vx; p.y += vy + g * dt * dt;
    }
    this.pts[0].x = this.ax; this.pts[0].y = this.ay;
    var L = this.pts.length - 1;
    this.pts[L].x += (tx - this.pts[L].x) * 0.32;
    this.pts[L].y += (ty - this.pts[L].y) * 0.32;
    for (var k = 0; k < it; k++) {
      this.pts[0].x = this.ax; this.pts[0].y = this.ay;
      for (var i = 1; i < this.pts.length; i++) {
        var a = this.pts[i - 1], b = this.pts[i];
        var dx = b.x - a.x, dy = b.y - a.y;
        var dist = Math.sqrt(dx * dx + dy * dy) || 0.001;
        var diff = (this.seg - dist) / dist * 0.5;
        if (i > 1) { a.x -= dx * diff; a.y -= dy * diff; }
        b.x += dx * diff; b.y += dy * diff;
      }
    }
  }
  draw(ctx) {
    var n = this.pts.length - 1;
    ctx.save();
    ctx.beginPath(); ctx.moveTo(this.pts[0].x, this.pts[0].y);
    for (var i = 1; i < n - 1; i++) { var mx = (this.pts[i].x + this.pts[i + 1].x) / 2, my = (this.pts[i].y + this.pts[i + 1].y) / 2; ctx.quadraticCurveTo(this.pts[i].x, this.pts[i].y, mx, my); }
    ctx.quadraticCurveTo(this.pts[n - 1].x, this.pts[n - 1].y, this.pts[n].x, this.pts[n].y);
    ctx.strokeStyle = "rgba(255,255,255,0.07)"; ctx.lineWidth = 8; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(this.pts[0].x, this.pts[0].y);
    for (var i = 1; i < n - 1; i++) { var mx = (this.pts[i].x + this.pts[i + 1].x) / 2, my = (this.pts[i].y + this.pts[i + 1].y) / 2; ctx.quadraticCurveTo(this.pts[i].x, this.pts[i].y, mx, my); }
    ctx.quadraticCurveTo(this.pts[n - 1].x, this.pts[n - 1].y, this.pts[n].x, this.pts[n].y);
    ctx.strokeStyle = "rgba(200,9,248,0.22)"; ctx.lineWidth = 4; ctx.stroke();
    ctx.restore();
  }
}

class Card {
  constructor(canvas, cr, idx, total) {
    this.canvas = canvas; this.cr = cr; this.idx = idx; this.total = total;
    this.W = 300; this.H = 360;
    this.drag = false; this.ox = 0; this.oy = 0; this.rot = 0; this.trot = 0; this.vx = 0; this.vy = 0;
    this._init(); this.rope = new Rope(this.ax, 0, 13);
  }
  _init() {
    var cw = this.canvas.width / (window.devicePixelRatio || 1);
    var ch = this.canvas.height / (window.devicePixelRatio || 1);
    var sw = cw / this.total;
    this.ax = sw * this.idx + sw / 2;
    this.x = this.ax - this.W / 2;
    this.y = ch * 0.32;
  }
  get cx() { return this.x + this.W / 2; }
  get cy() { return this.y + this.H / 2; }
  rr(ctx, x, y, w, h, r) {
    ctx.beginPath(); ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y); ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.lineTo(x + w, y + h - r); ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h); ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r); ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
  }
  _drawAvatar(ctx, avX, avY, radius, cr) {
    ctx.beginPath(); ctx.arc(avX, avY, radius + 6, 0, Math.PI * 2);
    ctx.fillStyle = cr.color + "30"; ctx.fill();
    ctx.beginPath(); ctx.arc(avX, avY, radius + 2, 0, Math.PI * 2);
    ctx.strokeStyle = cr.color + "cc"; ctx.lineWidth = 2; ctx.stroke();
    ctx.save();
    ctx.beginPath(); ctx.arc(avX, avY, radius, 0, Math.PI * 2); ctx.clip();
    if (cr._img) {
      ctx.fillStyle = cr.color; ctx.fillRect(avX - radius, avY - radius, radius * 2, radius * 2);
      var iw = cr._img.naturalWidth, ih = cr._img.naturalHeight;
      var sc = (radius * 2) / Math.min(iw, ih);
      var dw = iw * sc, dh = ih * sc;
      ctx.drawImage(cr._img, avX - dw / 2, avY - dh / 2, dw, dh);
      var ov = ctx.createLinearGradient(avX - radius, avY - radius, avX + radius, avY + radius);
      ov.addColorStop(0, "rgba(0,0,0,0.15)"); ov.addColorStop(1, "rgba(0,0,0,0.35)");
      ctx.fillStyle = ov; ctx.fillRect(avX - radius, avY - radius, radius * 2, radius * 2);
    } else {
      ctx.fillStyle = cr.color; ctx.fillRect(avX - radius, avY - radius, radius * 2, radius * 2);
      var ag = ctx.createLinearGradient(avX - radius, avY - radius, avX + radius, avY + radius);
      ag.addColorStop(0, "rgba(255,255,255,0.25)"); ag.addColorStop(1, "rgba(0,0,0,0.2)");
      ctx.fillStyle = ag; ctx.fillRect(avX - radius, avY - radius, radius * 2, radius * 2);
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold " + Math.round(radius * 0.72) + "px Arial,sans-serif";
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(cr.avatarFallback || "?", avX, avY);
      ctx.textBaseline = "alphabetic";
    }
    ctx.restore();
  }
  update() {
    this.rope.ax = this.ax; this.rope.update(this.cx, this.y - 4);
    if (!this.drag) {
      this.vx *= 0.80; this.vy *= 0.80; this.x += this.vx; this.y += this.vy;
      var ch = this.canvas.height / (window.devicePixelRatio || 1);
      this.x += (this.ax - this.W / 2 - this.x) * 0.045;
      this.y += (ch * 0.32 - this.y) * 0.045;
      this.trot += (0 - this.trot) * 0.07;
    }
    this.rot += (this.trot - this.rot) * 0.13;
  }
  draw(ctx) {
    this.rope.draw(ctx);
    var cx = this.cx, cy = this.cy, W = this.W, H = this.H, cr = this.cr;
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(this.rot * Math.PI / 180); ctx.translate(-W / 2, -H / 2);
    ctx.save(); ctx.shadowColor = cr.color + "66"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 12;
    this.rr(ctx, 0, 0, W, H, 15); ctx.fillStyle = "rgba(0,0,0,0.01)"; ctx.fill(); ctx.restore();
    this.rr(ctx, 0, 0, W, H, 15);
    var bg = ctx.createLinearGradient(0, 0, W, H); bg.addColorStop(0, "#18182e"); bg.addColorStop(1, "#10102a");
    ctx.fillStyle = bg; ctx.fill(); ctx.strokeStyle = cr.color + "50"; ctx.lineWidth = 1.4; ctx.stroke();
    this.rr(ctx, 0, 0, W, 64, 15, 15, 0, 0);
    var hd = ctx.createLinearGradient(0, 0, W, 64); hd.addColorStop(0, cr.color + "ee"); hd.addColorStop(1, cr.accent + "99");
    ctx.fillStyle = hd; ctx.fill();
    this.rr(ctx, 0, 0, W, 34, 15, 15, 0, 0);
    var shine = ctx.createLinearGradient(0, 0, 0, 34); shine.addColorStop(0, "rgba(255,255,255,0.18)"); shine.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = shine; ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.92)"; ctx.font = "bold 12px 'Courier New',monospace"; ctx.fillText(cr.badge, 20, 20);
    ctx.fillStyle = "rgba(255,255,255,1)"; ctx.font = "12px 'Courier New',monospace"; ctx.textAlign = "right"; ctx.fillText("NEXOS ID", W - 12, 20); ctx.textAlign = "left";
    this._drawAvatar(ctx, W / 2, 96, 30, cr);
    ctx.fillStyle = "#dde4f0"; ctx.font = "bold 18px Arial,sans-serif"; ctx.textAlign = "center"; ctx.fillText(cr.name, W / 2, 144); ctx.textAlign = "left";
    ctx.fillStyle = cr.accent; ctx.font = "14px Arial,sans-serif"; ctx.textAlign = "center"; ctx.fillText(cr.role, W / 2, 162); ctx.textAlign = "left";
    ctx.fillStyle = "rgb(223,147,247)"; ctx.font = "15px 'Courier New',monospace"; ctx.textAlign = "center"; ctx.fillText(cr.handle, W / 2, 179); ctx.textAlign = "left";
    ctx.strokeStyle = "rgba(191,144,212,0.50)"; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(12, 189); ctx.lineTo(W - 12, 189); ctx.stroke();
    var hw = (W - 36) / 2;
    ctx.fillStyle = "rgba(114,0,245,0.24)"; this.rr(ctx, 12, 196, hw, 44, 7); ctx.fill(); this.rr(ctx, 12 + hw + 12, 196, hw, 44, 7); ctx.fill();
    ctx.fillStyle = "#dde4f0"; ctx.font = "bold 16px Arial,sans-serif"; ctx.textAlign = "center";
    ctx.fillText(cr.stat1.value, 12 + hw / 2, 216);
    ctx.fillStyle = "rgba(255,255,255,0.42)"; ctx.font = "12px Arial,sans-serif"; ctx.fillText(cr.stat1.label, 12 + hw / 2, 232);
    ctx.fillStyle = "#dde4f0"; ctx.font = "bold 16px Arial,sans-serif"; ctx.fillText(cr.stat2.value, 12 + hw + 12 + hw / 2, 216);
    ctx.fillStyle = "rgba(255,255,255,0.42)"; ctx.font = "12px Arial,sans-serif"; ctx.fillText(cr.stat2.label, 12 + hw + 12 + hw / 2, 232);
    ctx.textAlign = "left";
    var bc = [3, 1, 2, 1, 3, 1, 1, 2, 2, 1, 3, 1, 2, 1, 8, 1, 2, 1, 3, 1, 1, 2, 2, 1, 3, 1, 2, 1]; var bx = 12;
    bc.forEach(function (w, i) { if (i % 2 === 0) { ctx.fillStyle = "rgba(255,255,255,0.2)"; ctx.fillRect(bx, 256, w * 5, 12); } bx += w * 5 + 1; });
    ctx.restore();
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(this.rot * Math.PI / 180);
    ctx.beginPath(); ctx.arc(0, -H / 2 + 7, 5.5, 0, Math.PI * 2); ctx.fillStyle = "#0c0c20"; ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.28)"; ctx.lineWidth = 1.5; ctx.stroke(); ctx.restore();
  }
}

class NexosLanyards {
  constructor(canvasId) {
    var self = this;
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) { console.warn("NexosLanyards: canvas #" + canvasId + " no encontrado."); return; }
    this.ctx = this.canvas.getContext("2d");
    this.cards = []; this.activeCard = null; this.animId = null;
    preloadImages(CREATORS, function () {
      self._waitForLayout(function () { self._resize(); self._initCards(); self._bindEvents(); self._loop(); });
    });
    window.addEventListener("resize", function () { self._resize(); self.cards.forEach(function (c) { c._init(); }); });
  }
  _waitForLayout(cb) { var self = this; if (this.canvas.offsetWidth > 0) { cb(); } else { requestAnimationFrame(function () { self._waitForLayout(cb); }); } }
  _resize() { var dpr = window.devicePixelRatio || 1; var w = this.canvas.offsetWidth; var h = this.canvas.offsetHeight; this.canvas.width = w * dpr; this.canvas.height = h * dpr; this.ctx.setTransform(1, 0, 0, 1, 0, 0); this.ctx.scale(dpr, dpr); }
  _initCards() { var self = this; this.cards = CREATORS.map(function (cr, i) { return new Card(self.canvas, cr, i, CREATORS.length); }); }
  _bindEvents() {
    var self = this, canvas = this.canvas;
    function getCSSCoords(cx, cy) { var r = canvas.getBoundingClientRect(); return { x: cx - r.left, y: cy - r.top }; }
    function getCard(x, y) { for (var i = self.cards.length - 1; i >= 0; i--) { var c = self.cards[i]; if (x >= c.x && x <= c.x + c.W && y >= c.y && y <= c.y + c.H) return c; } return null; }
    function startDrag(x, y) { var c = getCard(x, y); if (c) { self.activeCard = c; c.drag = true; c.ox = x - c.x - c.W / 2; c.oy = y - c.y - c.H / 2; var idx = self.cards.indexOf(c); self.cards.splice(idx, 1); self.cards.push(c); } }
    function moveDrag(x, y) { if (!self.activeCard || !self.activeCard.drag) return; var c = self.activeCard; var nx = x - c.ox - c.W / 2, ny = y - c.oy - c.H / 2; c.vx = nx - c.x; c.vy = ny - c.y; c.x = nx; c.y = ny; c.trot = c.vx * 0.22; }
    function endDrag() { if (self.activeCard) { self.activeCard.drag = false; self.activeCard = null; } }
    canvas.addEventListener("mousedown", function (e) { var p = getCSSCoords(e.clientX, e.clientY); startDrag(p.x, p.y); });
    canvas.addEventListener("mousemove", function (e) { var p = getCSSCoords(e.clientX, e.clientY); moveDrag(p.x, p.y); canvas.style.cursor = getCard(p.x, p.y) ? "grab" : "default"; });
    canvas.addEventListener("mouseup", endDrag); canvas.addEventListener("mouseleave", endDrag);
    canvas.addEventListener("touchstart", function (e) { e.preventDefault(); var p = getCSSCoords(e.touches[0].clientX, e.touches[0].clientY); startDrag(p.x, p.y); }, { passive: false });
    canvas.addEventListener("touchmove", function (e) { e.preventDefault(); var p = getCSSCoords(e.touches[0].clientX, e.touches[0].clientY); moveDrag(p.x, p.y); }, { passive: false });
    canvas.addEventListener("touchend", endDrag);
  }
  _drawBg() {
    var ctx = this.ctx, w = this.canvas.width / (window.devicePixelRatio || 1), h = this.canvas.height / (window.devicePixelRatio || 1);
    ctx.clearRect(0, 0, w, h);
    var colors = ["#ed4f3a", "#0EA5E9", "#10B981"];
    for (var i = 0; i < 3; i++) { var gx = w * (0.18 + i * 0.32); var g = ctx.createRadialGradient(gx, h * 0.08, 0, gx, h * 0.08, h * 0.55); g.addColorStop(0, colors[i] + "18"); g.addColorStop(1, "rgba(0,0,0,0)"); ctx.fillStyle = g; ctx.fillRect(0, 0, w, h); }
    ctx.strokeStyle = "rgba(255,255,255,0.025)"; ctx.lineWidth = 1;
    for (var x = 0; x < w; x += 55) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
  }
  _loop() { var self = this; this._drawBg(); this.cards.forEach(function (c) { c.update(); c.draw(self.ctx); }); this.animId = requestAnimationFrame(function () { self._loop(); }); }
}
window.NexosLanyards = NexosLanyards;