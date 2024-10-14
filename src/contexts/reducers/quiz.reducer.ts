type QuestionType = {
  question: string
  options: string[]
  correctAnswer: number
  score: number
}

export type QuizType = {
  questions: QuestionType[] | null
  correctAnswersCount: number
  totalScore: number
  currentIndex: number
  maxTime: number
}

export type QuizActionType =
  | {
      type: "assign/questions"
      payload: QuestionType[]
    }
  | {
      type: "inc/currentIndex"
    }
  | {
      type: "inc/correctAnswers"
    }
  | {
      type: "sum/totalScore"
      payload: number
    }
  | {
      type: "update/maxTime"
      payload: number
    }
  | {
      type: "reset/timer"
    }
  | {
      type: "reset/everything"
    }

export const quizReducer = (
  state: QuizType,
  action: QuizActionType,
): QuizType => {
  switch (action.type) {
    case "assign/questions":
      return { ...state, questions: action.payload }
    case "inc/currentIndex":
      return { ...state, currentIndex: state.currentIndex + 1 }
    case "inc/correctAnswers":
      return { ...state, correctAnswersCount: state.correctAnswersCount + 1 }
    case "sum/totalScore":
      return { ...state, totalScore: state.totalScore + action.payload }
    case "update/maxTime":
      return { ...state, maxTime: action.payload }
    case "reset/timer":
      return { ...state, maxTime: 0 }
    case "reset/everything":
      return {
        ...state,
        correctAnswersCount: 0,
        totalScore: 0,
        currentIndex: 0,
        maxTime: 0,
      }
    default:
      return state
  }
}
