import React, { useState } from "react"
import { questions } from "../../data/questions.json"

const Questions = () => {
  const [questionsArray] = useState(questions)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [conceded, setConceded] = useState(0)
  const [showGoal, setShowGoal] = useState(false)
  const [showConceded, setShowConceded] = useState(false)

  const shootAnswer = e => {
    e.preventDefault()
    const submittedAnswer = e.target.answer.value

    const correct = questionsArray[currentQuestion].answers.filter(
      possibleAnswer => submittedAnswer === possibleAnswer
    )

    if (correct.length > 0) {
      setScore(score + 1)
      setShowGoal(true)
      setTimeout(() => setShowGoal(false), 2000)
      return setCurrentQuestion(currentQuestion + 1)
    }

    setShowConceded(true)
    setTimeout(() => setShowConceded(false), 2000)
    setConceded(conceded + 1)
    return setCurrentQuestion(currentQuestion)
  }

  if (!questionsArray[currentQuestion]) {
    return (
      <>
        <h2>NO MORE QUESTIONS TODAY</h2>
        <p className="text-4xl font-bold">{`Final score ${score} - ${conceded}`}</p>
      </>
    )
  }

  if (showGoal) {
    return <h2>{`GOAL!!! On to Question ${currentQuestion + 1}...`}</h2>
  }

  if (showConceded) {
    return <h2>{`Wrong!!! Try Question ${currentQuestion + 1} again ...`}</h2>
  }

  return (
    <>
      <h2>{`Question ${questionsArray[currentQuestion].id}`}</h2>
      <ul className="ml-0">
        {questionsArray[currentQuestion].clubs.map(club => (
          <li className="underline">{club}</li>
        ))}
      </ul>
      <div className="text-4xl mb-4">{`${score} - ${conceded}`}</div>
      <form onSubmit={e => shootAnswer(e)}>
        <label className="block" htmlFor="answer">
          Player name:
        </label>
        <input
          className="border-2 border-black"
          id="answer"
          type="text"
          required
        ></input>
        <button
          type="submit"
          className="w-full left-0 right-0 absolute bottom-0 block md:w-1/2 font-bold mx-auto mt-8 bg-primary w-full text-white p-4"
        >
          SHOOT
        </button>
      </form>
    </>
  )
}

export default Questions
