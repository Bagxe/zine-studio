// src/lib/pagePrep.ts
var FILL_LABELS = {
  blur: "Blur fill",
  white: "White border",
  fit: "Fit",
  stretch: "Stretch fill (exact)"
};
function drawContain(ctx, img, cw, ch, scale) {
  const iw = img.width;
  const ih = img.height;
  const s = Math.min(cw / iw, ch / ih) * scale;
  const w = iw * s;
  const h = ih * s;
  ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
}
function renderPage(img, targetW, targetH, mode) {
  const canvas = document.createElement("canvas");
  canvas.width = targetW;
  canvas.height = targetH;
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  if (mode === "blur") {
    const bgScale = Math.max(targetW / img.width, targetH / img.height) * 1.15;
    const bw = img.width * bgScale;
    const bh = img.height * bgScale;
    ctx.save();
    ctx.filter = `blur(${Math.round(targetW / 40)}px) brightness(0.55)`;
    ctx.drawImage(img, (targetW - bw) / 2, (targetH - bh) / 2, bw, bh);
    ctx.restore();
    drawContain(ctx, img, targetW, targetH, 1);
  } else if (mode === "white") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, targetW, targetH);
    drawContain(ctx, img, targetW, targetH, 0.92);
  } else if (mode === "stretch") {
    ctx.drawImage(img, 0, 0, targetW, targetH);
  } else {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, targetW, targetH);
    drawContain(ctx, img, targetW, targetH, 1);
  }
  return canvas;
}
function stretchDistortion(iw, ih, cw, ch) {
  if (!(iw > 0) || !(ih > 0) || !(cw > 0) || !(ch > 0)) return null;
  const r = ch * iw / (cw * ih);
  if (!Number.isFinite(r) || Math.abs(r - 1) < 1e-9) return null;
  return r > 1 ? { axis: "vertical", amount: r - 1 } : { axis: "horizontal", amount: 1 / r - 1 };
}
function worstStretchDistortion(dims, cw, ch) {
  let worst = null;
  for (const d of dims) {
    const s = stretchDistortion(d.width, d.height, cw, ch);
    if (s && (!worst || s.amount > worst.amount)) worst = s;
  }
  return worst;
}
function canvasToJpeg(canvas, quality = 0.92) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (b) => b ? resolve(b) : reject(new Error("canvas.toBlob failed")),
      "image/jpeg",
      quality
    );
  });
}
async function preparePage(img, pageNumber, name, targetW, targetH, mode) {
  const canvas = renderPage(img, targetW, targetH, mode);
  const jpeg = await canvasToJpeg(canvas, 0.92);
  return {
    pageNumber,
    name,
    jpeg,
    dataUrl: canvas.toDataURL("image/jpeg", 0.85),
    width: targetW,
    height: targetH
  };
}
function loadImageFromBlob(blob) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error(`Could not decode image: ${blob.type || "unknown type"}`));
    };
    img.src = url;
  });
}
export {
  FILL_LABELS,
  canvasToJpeg,
  loadImageFromBlob,
  preparePage,
  renderPage,
  stretchDistortion,
  worstStretchDistortion
};
