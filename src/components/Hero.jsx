import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height, points, animationId;
    const POINT_COUNT = 60;
    const CONNECTION_DIST = 180;
    const GOLD = [203, 124, 82];

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function createPoints() {
      points = [];
      for (let i = 0; i < POINT_COUNT; i++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Update positions
      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      // Draw connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.15;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw points
      for (const p of points) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},0.3)`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    const handleResize = () => {
      resize();
      createPoints();
    };

    window.addEventListener('resize', handleResize);
    resize();
    createPoints();
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <canvas className="hero-canvas" ref={canvasRef}></canvas>
      <div className="hero-grain"></div>
      <div className="hero-line-accent"></div>
      <div className="hero-line-accent"></div>
      <div className="hero-content">
        <p className="hero-eyebrow">Expertise comptable · Audit · Conseil</p>
        <h1 className="hero-title">
          L&rsquo;excellence du conseil financier, <em>réinventée.</em>
        </h1>
        <p className="hero-subtitle">
          Ensemble, créons des stratégies qui ouvrent la voie à un succès durable.
        </p>
        <div className="hero-actions">
          <a href="https://calendly.com/amele-faulat" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span>Prendre rendez-vous</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#about" className="btn-ghost">
            Découvrir le cabinet
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span className="scroll-text">Défiler</span>
      </div>
    </section>
  );
}
