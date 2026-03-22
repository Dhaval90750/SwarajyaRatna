"use client";
import { motion, HTMLMotionProps } from 'framer-motion';
import React from 'react';

export const MotionDiv = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  (props, ref) => <motion.div ref={ref} {...props} />
);
MotionDiv.displayName = "MotionDiv";

export const MotionSection = React.forwardRef<HTMLElement, HTMLMotionProps<"section">>(
  (props, ref) => <motion.section ref={ref} {...props} />
);
MotionSection.displayName = "MotionSection";

export const MotionH1 = React.forwardRef<HTMLHeadingElement, HTMLMotionProps<"h1">>(
  (props, ref) => <motion.h1 ref={ref} {...props} />
);
MotionH1.displayName = "MotionH1";

export const MotionP = React.forwardRef<HTMLParagraphElement, HTMLMotionProps<"p">>(
  (props, ref) => <motion.p ref={ref} {...props} />
);
MotionP.displayName = "MotionP";
