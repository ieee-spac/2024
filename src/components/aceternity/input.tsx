// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
'use client'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { forwardRef, useState } from 'react'
import { cn } from '@/components/utils/cn'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 100 // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = useState(false)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      const { left, top } = currentTarget.getBoundingClientRect()

      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? `${radius}px` : '0px'} circle at ${mouseX}px ${mouseY}px,
          var(--sky-700),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-sm transition duration-300 group/input"
      >
        <input
          type={type}
          className={cn(
            `flex h-10 w-full px-3 py-2 text-sm text-black dark:text-white
             border bg-background shadow-primary dark:shadow-[0px_0px_1px_1px_var(--sky-950)] rounded-sm
             file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600
             focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-primary dark:focus-visible:ring-info
             disabled:cursor-not-allowed disabled:opacity-50
             group-hover/input:shadow-none transition duration-400
           `,
            className,
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
