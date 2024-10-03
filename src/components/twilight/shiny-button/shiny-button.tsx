'use client'

import { type AnimationProps, motion } from 'framer-motion'

const animationProps = {
  initial: { '--x': '100%', 'scale': 0.8 },
  animate: { '--x': '-100%', 'scale': 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: 'loop',
    repeatDelay: 1,
    type: 'spring',
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: 'spring',
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps

export function ShinyButton(
  {
    text = 'shiny-button',
    onClick,
  }: { text?: string, onClick?: () => void },
) {
  return (
    <motion.button
      {...animationProps}
      className="relative rounded-sm px-8 py-3 font-medium backdrop-blur-2xl transition-[box-shadow] duration-700 ease-in-out group-hover:shadow-[0_0px_15px_hsl(var(--tertiary))] bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)]"
      onClick={onClick}
    >
      <span
        className="relative block h-full w-full text-lg uppercase tracking-wide dark:text-tertiary text-neutral"
        style={{
          maskImage:
            'linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))',
        }}
      >
        {text}
      </span>
      <span
        style={{
          mask: 'linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))',
          maskComposite: 'exclude',
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
      >
      </span>
    </motion.button>
  )
}
