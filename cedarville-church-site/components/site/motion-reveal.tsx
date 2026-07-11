"use client";

import { motion, type MotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

type MotionRevealProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
};

export function MotionReveal({ children, className, ...props }: MotionRevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
