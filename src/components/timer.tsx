import { useState, useEffect, useCallback } from "react"
import { useQuizContext } from "../contexts/quiz.context"
import { useSectionContext } from "../contexts/section.context"

let intervalId: number

function Timer() {
  const {
    state: { maxTime },
    dispatch: quizDispatch,
  } = useQuizContext()
  const { dispatch: sectionDispatch } = useSectionContext()
  const [time, setTime] = useState(maxTime * 60)

  const onTimeUp = useCallback(() => {
    clearInterval(intervalId)
    quizDispatch({ type: "reset/timer" })
    sectionDispatch({ type: "update/phase", payload: "completed" })
  }, [quizDispatch, sectionDispatch])

  useEffect(() => {
    intervalId = setInterval(() => {
      setTime((prev) => {
        if (prev === 1) {
          onTimeUp()
          return 0
        } else return prev - 1
      })
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [onTimeUp])

  const min = String(Math.trunc(time / 60)).padStart(2, "0")
  const sec = String(Math.trunc(time % 60)).padStart(2, "0")

  return (
    <span className="block font-medium">
      Time left: {min}:{sec}
    </span>
  )
}

export default Timer
