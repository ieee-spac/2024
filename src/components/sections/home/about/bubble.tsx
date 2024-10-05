import React from 'react'

interface BubbleProps {
  className: string
  number: number
  label: string
  color: [string, string]
  size: string
}

export function Bubble({ className, number, label, color, size }: BubbleProps) {
  return (
    <div className={`flex justify-center items-center ${className}`} style={{ width: size, height: size }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        fill="none"
        shapeRendering="geometricPrecision"
      >
        <defs>
          {/* Define the gradient */}
          <linearGradient id={`gradient-${number}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color[0]} />
            <stop offset="100%" stopColor={color[1]} />
          </linearGradient>

          {/* Define the mask for knockout effect */}
          <mask id={`text-mask-${number}`} x="0" y="0" width="200" height="200">
            <rect width="100%" height="100%" fill="white" />
            <text
              x="50%"
              y="45%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="90"
              fontWeight="bold"
              fill="black"
            >
              {number}
            </text>
            <text
              x="50%"
              y="70%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="24"
              fontWeight="bold"
              fill="black"
            >
              {label}
            </text>
          </mask>

          {/* Define the shadow filter */}
          <filter id="inset-shadow" x="-2" y="-2" width="204" height="204" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
            <feBlend mode="normal" in2="SourceGraphic" result="whiteInset" />
            <feOffset dx="-2" dy="-2" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="whiteInset" result="finalInset" />
          </filter>
        </defs>

        {/* Apply the shadow and mask to the circle */}
        <g filter="url(#inset-shadow)">
          <circle cx="100" cy="100" r="99" fill={`url(#gradient-${number})`} mask={`url(#text-mask-${number})`} />
        </g>
      </svg>
    </div>
  )
}
