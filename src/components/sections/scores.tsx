import Wrapper from "../wrapper"
import Button from "../button"
import { useQuizContext } from "../../contexts/quiz.context"
import { useSectionContext } from "../../contexts/section.context"

export default function ScoresSection() {
  const {
    state: { questions, totalScore, correctAnswersCount },
    dispatch: quizDispatch,
  } = useQuizContext()
  const { dispatch: sectionDispatch } = useSectionContext()

  const resetFn = () => {
    sectionDispatch({ type: "update/phase", payload: "topic_selection" })
    quizDispatch({ type: "reset/everything" })
  }

  return (
    <Wrapper className="text-center">
      <h2 className="mb-10 text-3xl font-bold">Quiz completed!</h2>
      <p className="mb-5 text-lg font-medium">
        Correct answers: {correctAnswersCount}/{questions?.length}
      </p>
      <p className="mb-10">Your score: {totalScore}</p>
      <Button onClick={resetFn}>Try again</Button>
    </Wrapper>
  )
}
