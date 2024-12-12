// components/Survey/StartPage.tsx
import { Link } from 'react-router-dom'
import styles from "./SteartSurvey.module.scss"

export const StartPage = () => {
  return (
    <div className={styles.StartPage}>
      <h1>Сделаем ваш праздник еще лучше!</h1>
      <p>Ответьту на несколько вопросов, и мы подберем для вас лучшие подарки!</p>
      <Link to="/survey/question/1">
        <button>Начать опрос</button>
      </Link>
    </div>
  )
}

