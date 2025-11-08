"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, type MotionProps } from "framer-motion";

export type FadeInProps = PropsWithChildren<
  MotionProps & {
    delay?: number;
    className?: string;
  }
>;

export function FadeIn({ children, delay = 0, className, ...motionProps }: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={controls}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
