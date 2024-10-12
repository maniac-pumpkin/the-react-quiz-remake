import {
  useContext,
  useReducer,
  useEffect,
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
import { type SectionType } from "./reducers/section.reducer"
import reactQuiz from "../questions/react-quiz"
import vueQuiz from "../questions/vue-quiz"
import angularQuiz from "../questions/angular-quiz"
import svelteQuiz from "../questions/svelte-quiz"

type DiffType = SectionType["selectedDifficulty"]

type TopicType = SectionType["selectedTopic"]

type ContextType = {
  state: QuizType
  dispatch: Dispatch<QuizActionType>
}

const determineTopic = (topic: TopicType) => {
  switch (topic) {
    case "react":
      return reactQuiz
    case "vue":
      return vueQuiz
    case "angular":
      return angularQuiz
    case "svelte":
      return svelteQuiz
  }
}

const determineDiff = (difficulty: DiffType) => {
  switch (difficulty) {
    case "beginner":
      return { maxQues: 15, maxTime: 8 }
    case "intermediate":
      return { maxQues: 20, maxTime: 6 }
    case "professional":
      return { maxQues: 25, maxTime: 4 }
  }
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

  useEffect(() => {
    dispatch({
      type: "assign/questions",
      payload: determineTopic(selectedTopic).slice(
        0,
        determineDiff(selectedDifficulty).maxQues,
      ),
    })
    dispatch({
      type: "update/maxTime",
      payload: determineDiff(selectedDifficulty).maxTime,
    })
  }, [selectedTopic, selectedDifficulty])

  useEffect(() => {
    if (state.questions === null) return
    if (state.currentIndex === state.questions.length - 1) {
      dispatch({ type: "reset/timer" })
      sectionDispatch({ type: "update/phase", payload: "completed" })
    }
  }, [sectionDispatch, state.currentIndex, state.questions])

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export const useQuizContext = () => {
  const context = useContext(Context)
  if (context === null) throw "Must be used within the provider!"
  return context
}
