'use client';

import React from 'react';

interface EdishLogoProps {
  className?: string;
  size?: number;
  barColor?: string;
  accentColor?: string;
}

export function EdishLogoMark({
  size = 28,
  barColor = '#FFFFFF',
  accentColor = '#C89B3C',
  className = '',
}: EdishLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 3 horizontal bars representing 'E' */}
      <rect x="18" y="20" width="34" height="9" rx="1.5" fill={barColor} />
      <rect x="18" y="45" width="26" height="9" rx="1.5" fill={barColor} />
      <rect x="18" y="70" width="34" height="9" rx="1.5" fill={barColor} />
      {/* Vertical signature gold bar */}
      <rect x="62" y="20" width="10" height="59" rx="1.5" fill={accentColor} />
    </svg>
  );
}

export function EdishBrand({
  size = 28,
  showTagline = true,
  className = '',
}: {
  size?: number;
  showTagline?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <EdishLogoMark size={size} />
      <div className="flex flex-col whitespace-nowrap">
        <span className="font-['Space_Grotesk'] font-extrabold text-[0.92rem] tracking-[0.06em] text-white leading-tight">
          EDISH <span className="text-[#C89B3C]">CONNECT</span>
        </span>
        {showTagline && (
          <span className="hidden sm:inline font-['Space_Grotesk'] text-[0.48rem] tracking-[0.18em] uppercase text-[#dfb15b] font-bold">
            ENGINEERING MEETS INSPIRATION
          </span>
        )}
      </div>
    </div>
  );
}
