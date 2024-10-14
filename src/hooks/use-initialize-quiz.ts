import { type Dispatch, useEffect } from "react"
import { type SectionType } from "../contexts/reducers/section.reducer"
import { type QuizActionType } from "../contexts/reducers/quiz.reducer"
import reactQuiz from "../questions/react-quiz"
import vueQuiz from "../questions/vue-quiz"
import angularQuiz from "../questions/angular-quiz"
import svelteQuiz from "../questions/svelte-quiz"

type DiffType = SectionType["selectedDifficulty"]

type TopicType = SectionType["selectedTopic"]

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

const useInitializeQuiz = (
  topic: TopicType,
  difficulty: DiffType,
  quizDispatch: Dispatch<QuizActionType>,
) => {
  useEffect(() => {
    quizDispatch({
      type: "assign/questions",
      payload: determineTopic(topic).slice(
        0,
        determineDiff(difficulty).maxQues,
      ),
    })
    quizDispatch({
      type: "update/maxTime",
      payload: determineDiff(difficulty).maxTime,
    })
  }, [difficulty, topic, quizDispatch])
}

export default useInitializeQuiz
