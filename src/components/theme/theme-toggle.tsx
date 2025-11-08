"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/theme-provider";

const iconVariants = {
  initial: { rotate: -10, scale: 0.65, opacity: 0 },
  animate: { rotate: 0, scale: 1, opacity: 1 },
  exit: { rotate: 10, scale: 0.65, opacity: 0 },
};

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={iconVariants}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="absolute"
        >
          {isDark ? (
            <Moon className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Sun className="h-5 w-5" aria-hidden="true" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
