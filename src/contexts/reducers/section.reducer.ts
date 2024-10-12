export type SectionType = {
  phase:
    | "ready"
    | "topic_selection"
    | "difficulty_selection"
    | "started"
    | "completed"
  selectedTopic: "react" | "vue" | "angular" | "svelte"
  selectedDifficulty: "beginner" | "intermediate" | "professional"
}

export type SectionActionType =
  | {
      type: "update/phase"
      payload: SectionType["phase"]
    }
  | {
      type: "update/topic"
      payload: SectionType["selectedTopic"]
    }
  | {
      type: "update/difficulty"
      payload: SectionType["selectedDifficulty"]
    }

export const sectionReducer = (
  state: SectionType,
  action: SectionActionType,
): SectionType => {
  switch (action.type) {
    case "update/phase":
      return { ...state, phase: action.payload }
    case "update/topic":
      return { ...state, selectedTopic: action.payload }
    case "update/difficulty":
      return { ...state, selectedDifficulty: action.payload }
    default:
      return state
  }
}
