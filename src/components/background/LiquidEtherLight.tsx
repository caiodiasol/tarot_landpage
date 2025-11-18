'use client';

import { useEffect, useState } from 'react';
import LiquidEther, { LiquidEtherProps } from './LiquidEther';

const lightDefaultColors = ['#EAE4FF', '#F8F5FF', '#FFE6FF', '#C7B8FF'];

export function LiquidEtherLight({
  colors = lightDefaultColors,
  autoIntensity = 1.2,
  autoSpeed = 0.3,
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
