import { useCallback } from "react"
import { useQuizContext } from "../contexts/quiz.context"
import { useSectionContext } from "../contexts/section.context"
import useTimer from "../hooks/use-timer"

function Timer() {
  const {
    state: { maxTime },
    dispatch: quizDispatch,
  } = useQuizContext()
  const { dispatch: sectionDispatch } = useSectionContext()

  const onTimeUp = useCallback(() => {
    quizDispatch({ type: "reset/timer" })
    sectionDispatch({ type: "update/phase", payload: "completed" })
  }, [quizDispatch, sectionDispatch])

  const { min, sec } = useTimer(maxTime, onTimeUp)

  return (
    <span className="block font-medium">
      Time left: {min}:{sec}
    </span>
  )
}

export default Timer
