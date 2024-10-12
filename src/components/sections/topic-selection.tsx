import Wrapper from "../wrapper"
import List from "../list"
import { useSectionContext } from "../../contexts/section.context"
import { type SectionType } from "../../contexts/reducers/section.reducer"

type TopicType = SectionType["selectedTopic"]

const topics = [
  { topic: "react", value: "⚛️ React" },
  { topic: "vue", value: "✌️ Vue" },
  { topic: "angular", value: "🅰️ Angular" },
  { topic: "svelte", value: "🔥 Svelte" },
]

export default function TopicSelectionSection() {
  const { dispatch } = useSectionContext()

  const handleTopicSelection = (topic: TopicType) => {
    dispatch({ type: "update/topic", payload: topic })
    dispatch({ type: "update/phase", payload: "difficulty_selection" })
  }

  return (
    <Wrapper>
      <h2 className="mb-10 text-3xl font-bold">Choose your quiz topic</h2>
      <ul className="grid grid-cols-2 gap-5">
        {topics.map(({ topic, value }) => (
          <List
            className="flex h-28 w-60 items-center justify-center text-2xl"
            onClick={() => handleTopicSelection(topic as TopicType)}
            key={crypto.randomUUID()}
          >
            {value}
          </List>
        ))}
      </ul>
    </Wrapper>
  )
}
