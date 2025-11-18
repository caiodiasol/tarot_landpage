'use client';

import LiquidEther, { LiquidEtherProps } from './LiquidEther';

const lightDefaultColors = ['#EAE4FF', '#F8F5FF', '#FFE6FF', '#C7B8FF'];

export function LiquidEtherLight({
  colors = lightDefaultColors,
  autoIntensity = 1.4,
  autoSpeed = 0.35,
  resolution = 0.4,
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
      style={{ position: 'fixed', inset: 0, zIndex: -1, width: '100vw', height: '100vh', ...style }}
      className={`pointer-events-none touch-none ${className ?? ''}`}
      {...rest}
    />
  );
}
