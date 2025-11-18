'use client';

import { useEffect, useState } from 'react';
import LiquidEther, { LiquidEtherProps } from './LiquidEther';

const darkDefaultColors = ['#3D1FFF', '#6123FF', '#FF9FFC', '#B19EEF'];

export function LiquidEtherDark({
  colors = darkDefaultColors,
  autoIntensity = 2.0,
  autoSpeed = 0.4,
  resolution,
  iterationsPoisson = 20,
  iterationsViscous = 20,
  dt = 0.016,
  style,
  className,
  ...rest
}: LiquidEtherProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reduz resolução no mobile para melhor performance
  const finalResolution = resolution ?? (isMobile ? 0.35 : 0.5);

  return (
    <LiquidEther
      colors={colors}
      autoIntensity={autoIntensity}
      autoSpeed={autoSpeed}
      resolution={finalResolution}
      iterationsPoisson={iterationsPoisson}
      iterationsViscous={iterationsViscous}
      dt={dt}
      style={{ position: 'fixed', inset: 0, zIndex: -1, width: '100vw', height: '100vh', ...style }}
      className={`pointer-events-none touch-none ${className ?? ''}`}
      {...rest}
    />
  );
}
