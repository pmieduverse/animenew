import { useEffect, useRef } from "react";

export function Atmosphere({ accent = "#c45c4a" }: { accent?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let t = 0;
    const motes = Array.from({ length: 70 }, () => ({
      x: Math.random(),
      y: Math.random(),
      s: 0.6 + Math.random() * 1.8,
      v: 0.02 + Math.random() * 0.05,
      a: 0.15 + Math.random() * 0.4,
    }));
    const clouds = Array.from({ length: 5 }, (_, i) => ({
      x: i * 0.28,
      y: 0.12 + i * 0.04,
      w: 0.28,
      v: 0.004 + i * 0.001,
    }));

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.floor(canvas.clientWidth * dpr);
      canvas.height = Math.floor(canvas.clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const loop = () => {
      t += 0.016;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "#16141c");
      g.addColorStop(0.4, "#0c0b10");
      g.addColorStop(1, "#08070b");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = "rgba(28,26,36,0.9)";
      ctx.beginPath();
      ctx.moveTo(0, h * 0.42);
      ctx.lineTo(w * 0.2, h * 0.3);
      ctx.lineTo(w * 0.38, h * 0.38);
      ctx.lineTo(w * 0.58, h * 0.24);
      ctx.lineTo(w * 0.8, h * 0.36);
      ctx.lineTo(w, h * 0.28);
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.fill();

      ctx.fillStyle = "rgba(18,16,24,0.95)";
      ctx.beginPath();
      ctx.moveTo(0, h * 0.62);
      ctx.lineTo(w * 0.25, h * 0.52);
      ctx.lineTo(w * 0.5, h * 0.6);
      ctx.lineTo(w * 0.78, h * 0.5);
      ctx.lineTo(w, h * 0.58);
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.fill();

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = 0.18;
      ctx.fillStyle = accent;
      ctx.beginPath();
      ctx.arc(w * 0.74, h * 0.22, 70, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.fillStyle = "rgba(232,228,220,0.04)";
      for (const c of clouds) {
        c.x += c.v * 0.002;
        if (c.x > 1.2) c.x = -0.3;
        ctx.beginPath();
        ctx.ellipse(c.x * w, c.y * h, c.w * w * 0.4, 18, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const m of motes) {
        m.y -= m.v * 0.004;
        if (m.y < -0.02) m.y = 1.02;
        ctx.globalAlpha = m.a * (0.5 + Math.sin(t + m.x * 8) * 0.5);
        ctx.fillStyle = "#e8e4dc";
        ctx.beginPath();
        ctx.arc(m.x * w, m.y * h, m.s, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      const v = ctx.createRadialGradient(w / 2, h / 2, w * 0.15, w / 2, h / 2, w * 0.7);
      v.addColorStop(0, "rgba(0,0,0,0)");
      v.addColorStop(1, "rgba(8,7,11,0.55)");
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, w, h);

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [accent]);

  return <canvas ref={ref} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden />;
}
