"use client";
import React from 'react';
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        // easeOutQuart interpolation
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setValue(Math.floor(easeOut * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{value}</span>;
}
