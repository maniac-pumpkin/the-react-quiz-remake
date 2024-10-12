import {
  useContext,
  useReducer,
  createContext,
  PropsWithChildren,
  type Dispatch,
} from "react"
import {
  quizReducer,
  type QuizType,
  type QuizActionType,
} from "./reducers/quiz.reducer"
import { useSectionContext } from "./section.context"
import useInitializeQuiz from "../hooks/use-initialize-quiz"
import useEndQuiz from "../hooks/use-end-quiz"

type ContextType = {
  state: QuizType
  dispatch: Dispatch<QuizActionType>
}

const Context = createContext<ContextType | null>(null)
export function QuizProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(quizReducer, {
    questions: null,
    currentIndex: 0,
    correctAnswersCount: 0,
    totalScore: 0,
    maxTime: 0,
  })
  const {
    state: { selectedTopic, selectedDifficulty },
    dispatch: sectionDispatch,
  } = useSectionContext()

  useInitializeQuiz(selectedTopic, selectedDifficulty, dispatch)
  useEndQuiz(state, sectionDispatch)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export const useQuizContext = () => {
  const context = useContext(Context)
  if (context === null) throw "Must be used within the provider!"
  return context
}
