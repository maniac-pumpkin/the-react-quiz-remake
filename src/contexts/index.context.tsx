import { type PropsWithChildren } from "react"

import { SectionProvider } from "./section.context"
import { QuizProvider } from "./quiz.context"

export default function GlobalContextProvider({ children }: PropsWithChildren) {
  return (
    <SectionProvider>
      <QuizProvider>{children}</QuizProvider>
    </SectionProvider>
  )
}
