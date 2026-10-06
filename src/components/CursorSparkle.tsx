"use client";

import { useEffect, useRef } from "react";

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  life: number;
  maxLife: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1;
    this.speedX = (Math.random() - 0.5) * 2;
    this.speedY = (Math.random() - 0.5) * 2 - 0.5; // Slight upward bias
    
    // Gold/Yellow color variations
    const r = 255;
    const g = Math.floor(Math.random() * 50) + 200; // 200-250
    const b = Math.floor(Math.random() * 50); // 0-50
    this.color = `rgba(${r}, ${g}, ${b}, 1)`;
    
    this.maxLife = Math.random() * 30 + 30; // 30-60 frames
    this.life = this.maxLife;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life--;
    this.size = Math.max(0, this.size - 0.05);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.life / this.maxLife);
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

export function CursorSparkle() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouse = { x: -100, y: -100 };
    let isMoving = false;
    let timeoutId: NodeJS.Timeout;

    const spawnParticles = (x: number, y: number) => {
      mouse.x = x;
      mouse.y = y;
      isMoving = true;
      
      // Add particles at touch/mouse position
      for (let i = 0; i < 2; i++) {
        particles.push(new Particle(mouse.x, mouse.y));
      }

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        isMoving = false;
      }, 100);
    };

    const handleMouseMove = (e: MouseEvent) => {
      spawnParticles(e.clientX, e.clientY);
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        spawnParticles(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouch, { passive: true });
    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);
      }

      // Remove dead particles
      particles = particles.filter((p) => p.life > 0);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  );
}
