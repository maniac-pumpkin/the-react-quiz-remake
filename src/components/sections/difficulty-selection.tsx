import Wrapper from "../wrapper"
import List from "../list"
import Button from "../button"
import { useSectionContext } from "../../contexts/section.context"
import { type SectionType } from "../../contexts/reducers/section.reducer"

type DiffType = SectionType["selectedDifficulty"]

const difficulties = [
  { diff: "beginner", value: "🟢 Beginner" },
  { diff: "intermediate", value: "🟡 Intermediate" },
  { diff: "professional", value: "🔴 Professional" },
]

export default function DifficultySelectionSection() {
  const { dispatch } = useSectionContext()

  const handleDiffSelection = (diff: DiffType) => {
    dispatch({ type: "update/difficulty", payload: diff })
    dispatch({ type: "update/phase", payload: "started" })
  }

  const goBackToTopics = () =>
    dispatch({ type: "update/phase", payload: "topic_selection" })

  return (
    <Wrapper>
      <h2 className="mb-10 text-3xl font-bold">Choose difficulty</h2>
      <ul className="mb-10 space-y-5">
        {difficulties.map(({ diff, value }) => (
          <List
            className="w-96"
            onClick={() => handleDiffSelection(diff as DiffType)}
            key={crypto.randomUUID()}
          >
            {value}
          </List>
        ))}
      </ul>
      <div className="text-center">
        <Button onClick={goBackToTopics}>Back to topics</Button>
      </div>
    </Wrapper>
  )
}
