"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";

const frameCount = 120;
const currentFrame = (index: number) =>
  `/sequence/frame_${index.toString().padStart(3, "0")}_delay-0.066s.png`;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  // Opacity transforms for the overlay text
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -50]);

  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.5], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.35, 0.5], [50, 0, -50]);

  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.85], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.6, 0.85], [50, 0, -50]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < frameCount; i++) {
        const img = new window.Image();
        img.src = currentFrame(i);
        img.onload = () => {
          loadedCount++;
          if (loadedCount === frameCount) {
             setImages(loadedImages);
          }
        };
        // fallback in case of cache/immediate load
        if (img.complete) {
           loadedCount++;
        }
        loadedImages.push(img);
    }
    // We can also set them immediately to start rendering while preloading finishes in background
    setImages(loadedImages);
  }, []);

  const renderCanvas = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const img = images[index];
    if (!img || !img.complete) return;
    
    // Object fit cover
    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;
    let renderWidth = width;
    let renderHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      renderHeight = width / imgRatio;
      offsetY = (height - renderHeight) / 2;
    } else {
      renderWidth = height * imgRatio;
      offsetX = (width - renderWidth) / 2;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  };

  useMotionValueEvent(frameIndex, "change", (latest: number) => {
    const frame = Math.round(latest);
    if (images[frame]) {
      requestAnimationFrame(() => renderCanvas(frame));
    }
  });

  useEffect(() => {
    if (images.length > 0) {
      renderCanvas(Math.round(frameIndex.get()));
    }

    const handleResize = () => {
      renderCanvas(Math.round(frameIndex.get()));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#121212]" style={{ height: "500vh" }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-[#121212]" />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
            {/* Section 1 */}
            <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute flex flex-col items-center justify-center">
                <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight mb-4 drop-shadow-2xl text-white">
                    Supreeth B R
                </h1>
                <p className="text-lg md:text-xl text-gray-300 font-sans tracking-wide drop-shadow-lg">
                    Computer Science & AI Student <span className="opacity-50 mx-2">•</span> Developer <span className="opacity-50 mx-2">•</span> AI & Web Enthusiast
                </p>
                <div className="mt-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                   <p className="text-sm text-gray-400">Open to internships in Software Development, AI/ML, Web Development & Product Engineering</p>
                </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute flex items-center justify-center px-4 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight drop-shadow-2xl text-gray-200 leading-tight">
                    I build practical digital products across web development, AI, machine learning, and problem solving — with a strong interest in creating useful, modern, and performance-driven experiences.
                </h2>
            </motion.div>

            {/* Section 3 */}
            <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute flex flex-col items-center justify-center pointer-events-auto">
                <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight drop-shadow-2xl mb-8">
                    Ready to collaborate?
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-4">
                   <a href="#projects" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 hover:scale-105 transition-all">
                      View Projects
                   </a>
                   <a href="/SUPREETH%20B%20R.pdf" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full border border-white/20 bg-black/50 text-white font-semibold backdrop-blur-md hover:bg-white/10 hover:scale-105 transition-all">
                      Resume
                   </a>
                   <a href="#contact" className="px-8 py-3 rounded-full border border-white/20 bg-black/50 text-white font-semibold backdrop-blur-md hover:bg-white/10 hover:scale-105 transition-all">
                      Contact Me
                   </a>
                </div>
            </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
            style={{ opacity: opacity1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
            <span className="text-sm uppercase tracking-widest text-gray-400">Scroll Down</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
