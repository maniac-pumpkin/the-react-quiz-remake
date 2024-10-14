import { useState } from "react"
import Logo from "../logo"
import Wrapper from "../wrapper"
import Button from "../button"
import Timer from "../timer"
import List from "../list"
import { useQuizContext } from "../../contexts/quiz.context"
import { useSectionContext } from "../../contexts/section.context"

export default function QuestionSection() {
  const [option, setOption] = useState<number | null>(null)
  const { sectionDispatch } = useSectionContext()
  const {
    quizState: { questions, currentIndex },
    quizDispatch: quizDispatch,
  } = useQuizContext()

  const isOptionCorrect = option === questions?.[currentIndex].correctAnswer
  const listColor = isOptionCorrect ? "green" : "red"

  const handleNextQuestion = () => {
    setOption(null)
    quizDispatch({ type: "inc/currentIndex" })
    if (isOptionCorrect) {
      quizDispatch({ type: "inc/correctAnswers" })
      quizDispatch({
        type: "sum/totalScore",
        payload: questions[currentIndex].score,
      })
    }
  }

  const handleQuit = () => {
    sectionDispatch({ type: "update/phase", payload: "completed" })
    quizDispatch({ type: "reset/timer" })
  }

  return (
    <Wrapper className="w-[550px]">
      <Logo size="sm" className="mb-10" />
      <div className="mb-10">
        <progress
          className="w-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-softDark [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-purpleGrad"
          max={questions?.length}
          value={currentIndex + 1}
        ></progress>
        <p className="mt-3 text-sm">
          Question {currentIndex + 1}/{questions?.length}
        </p>
      </div>
      <h2 className="mb-5 text-xl font-bold">
        {questions?.[currentIndex].question}
      </h2>
      <ul
        className={`mb-10 space-y-5 ${option !== null && "pointer-events-none"}`}
      >
        {questions?.[currentIndex].options.map((name, i) => (
          <List
            onClick={() => setOption(i)}
            className="py-3"
            color={option === i ? listColor : "default"}
            key={crypto.randomUUID()}
          >
            {name}
          </List>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <Timer />
        {option === null ? (
          <Button onClick={handleQuit}>Quit the quiz</Button>
        ) : (
          <Button onClick={handleNextQuestion}>Next question</Button>
        )}
      </div>
    </Wrapper>
  )
}
