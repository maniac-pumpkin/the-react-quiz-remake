import WelcomeSection from "./components/sections/welcome"
import TopicSelectionSection from "./components/sections/topic-selection"
import DifficultySelectionSection from "./components/sections/difficulty-selection"
import QuestionSection from "./components/sections/question"
import ScoresSection from "./components/sections/scores"
import { useSectionContext } from "./contexts/section.context"

export default function App() {
  const { state } = useSectionContext()

  switch (state.phase) {
    case "ready":
      return <WelcomeSection />
    case "topic_selection":
      return <TopicSelectionSection />
    case "difficulty_selection":
      return <DifficultySelectionSection />
    case "started":
      return <QuestionSection />
    case "completed":
      return <ScoresSection />
  }
}
