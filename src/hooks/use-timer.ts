import { useState, useEffect } from "react"

let intervalId: number

const useTimer = (timeInMin: number, onTimeUp: () => void) => {
  const [timer, setTimer] = useState(timeInMin * 60)

  useEffect(() => {
    intervalId = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(intervalId)
          onTimeUp()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [onTimeUp])

  const min = String(Math.trunc(timer / 60)).padStart(2, "0")
  const sec = String(Math.trunc(timer % 60)).padStart(2, "0")

  return { min, sec }
}

export default useTimer
