import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./app"
import "./styles/index.css"

import GlobalContextProvider from "./contexts/index.context"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </StrictMode>,
)
