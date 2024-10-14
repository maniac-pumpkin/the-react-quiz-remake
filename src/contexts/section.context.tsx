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
  sectionState: SectionType
  sectionDispatch: Dispatch<SectionActionType>
}

const Context = createContext<ContextType | null>(null)
export function SectionProvider({ children }: PropsWithChildren) {
  const [sectionState, sectionDispatch] = useReducer(sectionReducer, {
    phase: "ready",
    selectedTopic: "react",
    selectedDifficulty: "beginner",
  })

  return (
    <Context.Provider value={{ sectionState, sectionDispatch }}>
      {children}
    </Context.Provider>
  )
}

export const useSectionContext = () => {
  const context = useContext(Context)
  if (context === null) throw "Must be used within the provider!"
  return context
}
