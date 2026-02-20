"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Parent container is 500vh, so scrollYProgress goes from 0 to 1 over that distance
    const { scrollYProgress } = useScroll();

    // Smooth out the scroll progress for a cinematic feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Map progress to image index
    const frameIndex = useTransform(smoothProgress, [0, 1], [0, images.length > 0 ? images.length - 1 : 0]);

    useEffect(() => {
        const loadImages = async () => {
            try {
                const response = await fetch("/sequence.json");
                const filenames: string[] = await response.json();

                const loadedImages = await Promise.all(
                    filenames.map((filename) => {
                        return new Promise<HTMLImageElement>((resolve, reject) => {
                            const img = new Image();
                            img.src = `/sequence/${filename}`;
                            img.onload = () => resolve(img);
                            img.onerror = reject;
                        });
                    })
                );

                setImages(loadedImages);
                setIsLoaded(true);
            } catch (error) {
                console.error("Failed to load image sequence:", error);
            }
        };

        loadImages();
    }, []);

    const renderFrame = (index: number) => {
        if (!canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const image = images[index];
        if (!image) return;

        // Handle high DPI displays
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
        }

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const imageWidth = image.width;
        const imageHeight = image.height;

        const canvasRatio = canvasWidth / canvasHeight;
        const imageRatio = imageWidth / imageHeight;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (window.innerWidth < 768) {
            // Mobile: Contain scaling to prevent extreme zoom
            if (canvasRatio > imageRatio) {
                drawHeight = canvasHeight;
                drawWidth = canvasHeight * imageRatio;
                offsetX = (canvasWidth - drawWidth) / 2;
                offsetY = 0;
            } else {
                drawWidth = canvasWidth;
                drawHeight = canvasWidth / imageRatio;
                offsetX = 0;
                offsetY = (canvasHeight - drawHeight) / 2;
            }
        } else {
            // Desktop: Cover scaling
            if (canvasRatio > imageRatio) {
                drawWidth = canvasWidth;
                drawHeight = canvasWidth / imageRatio;
                offsetX = 0;
                offsetY = (canvasHeight - drawHeight) / 2;
            } else {
                drawWidth = canvasHeight * imageRatio;
                drawHeight = canvasHeight;
                offsetX = (canvasWidth - drawWidth) / 2;
                offsetY = 0;
            }
        }

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    };

    useMotionValueEvent(frameIndex, "change", (latest) => {
        renderFrame(Math.round(latest));
    });

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded && images.length > 0) {
            renderFrame(0);
        }

        const handleResize = () => {
            renderFrame(Math.round(frameIndex.get()));
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded, images]);

    return (
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-50 bg-background">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <div className="text-white/50 text-xs font-medium tracking-[0.2em] uppercase">
                            Initializing Experience
                        </div>
                    </div>
                </div>
            )}
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
                style={{ touchAction: "none" }}
            />
        </div>
    );
}
