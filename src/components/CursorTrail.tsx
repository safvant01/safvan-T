import { useEffect, useRef } from "react";

/**
 * Elastic cursor trail, matching the reference site's "Cursor Trail":
 * a thin blue-gray line that stretches from a lagging tail to the cursor,
 * snaps back when the cursor stops, and leaves the native cursor visible.
 * Desktop (fine pointer) only; disabled for reduced motion.
 */
const POINTS = 24;
const EASE = 0.35;
const COLOR = "148, 163, 184"; // slate blue-gray, as measured on the reference

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const pts = Array.from({ length: POINTS }, () => ({ x: -100, y: -100 }));
    let mouse = { x: -100, y: -100 };
    let active = false;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
      if (!active) {
        active = true;
        pts.forEach((p) => {
          p.x = mouse.x;
          p.y = mouse.y;
        });
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const tick = () => {
      raf = requestAnimationFrame(tick);
      ctx.clearRect(0, 0, width, height);
      if (!active) return;

      // Chain: head follows the cursor, each point eases toward the previous.
      const head = pts[0]!;
      head.x += (mouse.x - head.x) * EASE;
      head.y += (mouse.y - head.y) * EASE;
      for (let i = 1; i < POINTS; i++) {
        const prev = pts[i - 1]!;
        const p = pts[i]!;
        p.x += (prev.x - p.x) * EASE;
        p.y += (prev.y - p.y) * EASE;
      }

      // Total stretch — when the tail catches up, the line disappears.
      const tail = pts[POINTS - 1]!;
      const dx = tail.x - head.x;
      const dy = tail.y - head.y;
      const stretch = Math.hypot(dx, dy);
      if (stretch < 0.5) return;

      const opacity = Math.min(1, stretch / 60) * 0.9;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // Draw tapering segments: thicker at the head, vanishing at the tail.
      for (let i = 0; i < POINTS - 1; i++) {
        const t = 1 - i / (POINTS - 1);
        const a = pts[i]!;
        const b = pts[i + 1]!;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(${COLOR}, ${opacity})`;
        ctx.lineWidth = 0.5 + t * 2;
        ctx.stroke();
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60]"
    />
  );
}
