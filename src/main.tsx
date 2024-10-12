import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./app"
import "./index.css"

import { SectionProvider } from "./contexts/section.context"
import { QuizProvider } from "./contexts/quiz.context"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SectionProvider>
      <QuizProvider>
        <App />
      </QuizProvider>
    </SectionProvider>
  </StrictMode>,
)
