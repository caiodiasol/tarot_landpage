'use client';

import LiquidEther, { LiquidEtherProps } from './LiquidEther';

const lightDefaultColors = ['#EAE4FF', '#F8F5FF', '#FFE6FF', '#C7B8FF'];

export function LiquidEtherLight({
  colors = lightDefaultColors,
  autoIntensity = 1.2,
  autoSpeed = 0.3,
  resolution = 0.5,
  iterationsPoisson = 20,
  iterationsViscous = 20,
  dt = 0.016,
  style,
  className,
  ...rest
}: LiquidEtherProps) {
  return (
    <LiquidEther
      colors={colors}
      autoIntensity={autoIntensity}
      autoSpeed={autoSpeed}
      resolution={resolution}
      iterationsPoisson={iterationsPoisson}
      iterationsViscous={iterationsViscous}
      dt={dt}
      style={{ position: 'fixed', inset: 0, zIndex: -1, width: '100vw', height: '100vh', ...style }}
      className={`pointer-events-none touch-none ${className ?? ''}`}
      {...rest}
    />
  );
}
