// Not originally from Aceternity, but uses the styles from the input component
import * as React from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { cn } from '@/components/utils/cn'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const radius = 100 // change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      const { left, top } = currentTarget.getBoundingClientRect()

      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }

    return (
    // <textarea
    //   className={cn(
    //     'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    //     className,
    //   )}
    //   ref={ref}
    //   {...props}
    // />

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
        <textarea
          className={cn(
            `flex min-h-[80px] w-full border bg-background text-black dark:text-white shadow-primary rounded-sm px-3 py-2 text-sm  file:border-0 file:bg-transparent
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-primary dark:focus-visible:ring-primary
          disabled:cursor-not-allowed disabled:opacity-50
          dark:shadow-[0px_0px_1px_1px_var(--sky-950)]
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

Textarea.displayName = 'Textarea'

export { Textarea }
