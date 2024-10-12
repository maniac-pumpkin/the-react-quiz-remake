import Logo from "../logo"
import Button from "../button"
import { useSectionContext } from "../../contexts/section.context"

export default function WelcomeSection() {
  const { dispatch } = useSectionContext()

  const goToTopics = () =>
    dispatch({ type: "update/phase", payload: "topic_selection" })

  return (
    <section className="contents text-center">
      <Logo size="lg" className="mb-10" />
      <h2 className="mb-5 text-4xl font-bold">Welcome to the react quiz!</h2>
      <p className="mb-10 max-w-md">
        Questions about various frameworks to test your knowledge. Let's see how
        much of a pro you are.
      </p>
      <Button onClick={goToTopics}>Let's get started</Button>
    </section>
  )
}
