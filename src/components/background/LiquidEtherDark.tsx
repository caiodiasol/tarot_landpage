'use client';

import LiquidEther, { LiquidEtherProps } from './LiquidEther';

const darkDefaultColors = ['#3D1FFF', '#6123FF', '#FF9FFC', '#B19EEF'];

export function LiquidEtherDark({
  colors = darkDefaultColors,
  autoIntensity = 2.0,
  autoSpeed = 0.4,
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
