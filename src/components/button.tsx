import { type ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type PropsType = ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, className, ...props }: PropsType) {
  return (
    <button
      className={twMerge(
        "rounded bg-purpleGrad px-5 py-3 font-medium",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
