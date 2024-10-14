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
  quizState: QuizType
  quizDispatch: Dispatch<QuizActionType>
}

const Context = createContext<ContextType | null>(null)
export function QuizProvider({ children }: PropsWithChildren) {
  const [quizState, quizDispatch] = useReducer(quizReducer, {
    questions: null,
    currentIndex: 0,
    correctAnswersCount: 0,
    totalScore: 0,
    maxTime: 0,
  })
  const {
    sectionState: { selectedTopic, selectedDifficulty },
    sectionDispatch: sectionDispatch,
  } = useSectionContext()

  useInitializeQuiz(selectedTopic, selectedDifficulty, quizDispatch)
  useEndQuiz(quizState, sectionDispatch)

  return (
    <Context.Provider value={{ quizState, quizDispatch }}>
      {children}
    </Context.Provider>
  )
}

export const useQuizContext = () => {
  const context = useContext(Context)
  if (context === null) throw "Must be used within the provider!"
  return context
}
