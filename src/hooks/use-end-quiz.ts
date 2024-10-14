import { useEffect, type Dispatch } from "react"
import { type QuizType } from "../contexts/reducers/quiz.reducer"
import { type SectionActionType } from "../contexts/reducers/section.reducer"

const useEndQuiz = (
  state: QuizType,
  sectionDispatch: Dispatch<SectionActionType>,
) => {
  useEffect(() => {
    if (state.questions === null) return
    if (state.currentIndex === state.questions.length - 1)
      sectionDispatch({ type: "update/phase", payload: "completed" })
  }, [sectionDispatch, state.currentIndex, state.questions])
}

export default useEndQuiz
