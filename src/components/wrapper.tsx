import { type PropsWithChildren } from "react"

type PropsType = {
  className?: string
} & PropsWithChildren

function Wrapper({ children, className }: PropsType) {
  return (
    <section
      className={`rounded-lg bg-moderateDark p-10 shadow-xl ${className}`}
    >
      {children}
    </section>
  )
}

export default Wrapper
