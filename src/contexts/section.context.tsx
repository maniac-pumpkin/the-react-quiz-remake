import {
  useContext,
  useReducer,
  createContext,
  PropsWithChildren,
  type Dispatch,
} from "react"
import {
  sectionReducer,
  type SectionType,
  type SectionActionType,
} from "./reducers/section.reducer"

type ContextType = {
  state: SectionType
  dispatch: Dispatch<SectionActionType>
}

const Context = createContext<ContextType | null>(null)
export function SectionProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(sectionReducer, {
    phase: "ready",
    selectedTopic: "react",
    selectedDifficulty: "beginner",
  })

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export const useSectionContext = () => {
  const context = useContext(Context)
  if (context === null) throw "Must be used within the provider!"
  return context
}
