import { Link } from 'react-router-dom'
import styles from "./ResultPage.module.scss"

const ResultsPage = () => {
  return (
    <div className={styles.ResultsPage}>
      <h1>Готово!</h1>
      <h2>Мы подобрали для вас лучшие подарки.</h2>
      <Link to="/">
        <button>Посмотреть подарки</button>
      </Link>
    </div>
  )
}

export default ResultsPage
