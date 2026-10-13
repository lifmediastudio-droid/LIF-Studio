import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  active: boolean;
}

export const StarUniverseBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    // Natural clean celestial star colors (subtle white, slight silver blue)
    const STAR_COLORS = ['#FFFFFF', '#FFFFFF', '#F1F5F9', '#E2E8F0', '#CBD5E1'];

    let stars: Star[] = [];
    const shootingStars: ShootingStar[] = [];

    const initStars = () => {
      const starCount = Math.floor((width * height) / 8500);
      stars = [];

      for (let i = 0; i < starCount; i++) {
        const baseAlpha = Math.random() * 0.6 + 0.2;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.9 + 0.4, // Delicate pin-point stars, not large glitter blobs
          alpha: baseAlpha,
          baseAlpha,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
          color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
        });
      }
    };

    const spawnShootingStar = () => {
      if (Math.random() < 0.008 && shootingStars.length < 2) {
        shootingStars.push({
          x: Math.random() * (width * 0.8),
          y: Math.random() * (height * 0.35),
          length: Math.random() * 80 + 50,
          speed: Math.random() * 7 + 6,
          angle: (Math.PI / 4) + (Math.random() * 0.15 - 0.075),
          alpha: 0.8,
          active: true,
        });
      }
    };

    initStars();

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle mouse parallax
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;
      const offsetX = (mouseX - width / 2) * 0.012;
      const offsetY = (mouseY - height / 2) * 0.012;

      // Draw and twinkle delicate stars (no glitter crosses or halos)
      for (const star of stars) {
        star.twinklePhase += star.twinkleSpeed;
        const currentAlpha = Math.max(0.1, star.baseAlpha + Math.sin(star.twinklePhase) * 0.3);

        const px = star.x + offsetX * (star.radius * 0.6);
        const py = star.y + offsetY * (star.radius * 0.6);

        ctx.save();
        ctx.globalAlpha = Math.min(0.9, Math.max(0.08, currentAlpha));
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(px, py, star.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Draw graceful shooting stars
      spawnShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const meteor = shootingStars[i];
        if (!meteor.active) continue;

        meteor.x += Math.cos(meteor.angle) * meteor.speed;
        meteor.y += Math.sin(meteor.angle) * meteor.speed;
        meteor.alpha -= 0.012;

        if (meteor.alpha <= 0 || meteor.x > width || meteor.y > height) {
          shootingStars.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, meteor.alpha);

        const tailX = meteor.x - Math.cos(meteor.angle) * meteor.length;
        const tailY = meteor.y - Math.sin(meteor.angle) * meteor.length;

        const grad = ctx.createLinearGradient(tailX, tailY, meteor.x, meteor.y);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 0.7)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(meteor.x, meteor.y);
        ctx.stroke();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep cosmic backdrop */}
      <div 
        className="absolute inset-0 bg-[#06070B]" 
      />

      {/* Star Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      />
    </div>
  );
};
