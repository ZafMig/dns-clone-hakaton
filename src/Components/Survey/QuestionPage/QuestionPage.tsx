// components/Survey/QuestionPage.tsx
import styles from "./QuestionPage.module.scss"
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'  // Используем useNavigate вместо useHistory

const questions = [
  {
    question: 'Для кого вы ищете подарок?',
    options: ['для детей', 'для родителей', 'для себя', 'для друзей/коллег']
  },
  {
    question: 'Возраст получателя подарка?',
    options: ['до 3-х лет', '3-6 лет', '13-17 лет', '18+ лет']
  },
  {
    question: 'Какие категории подарков вас интересуют?',
    options: ['Игрушки', 'Книги', 'Электроника', 'Одежда', 'Сувениры']
  },
  {
    question: 'Какая сумма подарков вам подходит?',
    options: ['до 1000 рублей', '1000-3000 рублей', '3000-5000 рублей', 'более 5000 рублей']
  },
  {
    question: 'Планируете получить товар до определенной даты?',
    options: ['до 24 декабря', 'до 31 декабря', 'в ближайшие 7 дней']
  }
]

const QuestionPage = () => {
  const { questionId } = useParams<{ questionId: string }>()
  const navigate = useNavigate()  // Используем useNavigate вместо useHistory
  const [selectedOption, setSelectedOption] = useState<string>('')

  // Убедимся, что questionId существует и конвертируем его в число, если это возможно
  const currentQuestionIndex = questionId ? parseInt(questionId) - 1 : 0
  const currentQuestion = questions[currentQuestionIndex]

  const handleNext = () => {
    if (questionId && parseInt(questionId) < questions.length) {
      navigate(`/survey/question/${parseInt(questionId) + 1}`)
    } else {
      navigate('/survey/results')
    }
  }

  return (
    <div className={styles.QuestionPage}>
      <h2>{currentQuestion.question}</h2>
      <div className={styles.options}>
        {currentQuestion.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name="question"
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <button onClick={handleNext} disabled={!selectedOption}>
        Продолжить
      </button>
    </div>
  )
}

export default QuestionPage
