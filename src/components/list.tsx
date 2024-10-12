import { type LiHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type PropsType = {
  color?: "default" | "red" | "green"
} & LiHTMLAttributes<HTMLLIElement>

const applyStyle = (mode: PropsType["color"]) => {
  switch (mode) {
    case "default":
      return "bg-softDark"
    case "red":
      return "bg-redGrad"
    case "green":
      return "bg-greenGrad"
  }
}

function List({ children, className, color = "default", ...props }: PropsType) {
  return (
    <li
      className={twMerge(
        "cursor-pointer list-none rounded p-5 font-normal",
        applyStyle(color),
        className,
      )}
      {...props}
    >
      {children}
    </li>
  )
}

export default List
