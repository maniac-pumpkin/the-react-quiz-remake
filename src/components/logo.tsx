type PropsType = {
  size: "sm" | "lg"
  className?: string
}

function Logo({ size, className }: PropsType) {
  const text = "⚛️ The React Quiz"
  if (size === "lg")
    return <h1 className={`text-6xl font-bold ${className}`}>{text}</h1>
  if (size === "sm")
    return <h2 className={`text-3xl font-bold ${className}`}>{text}</h2>
}

export default Logo
