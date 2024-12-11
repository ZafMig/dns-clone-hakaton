import styles from "./News.module.scss";

export const News = () => {
    return (
        <div className={styles.News}>
            <div className={styles.Buttons}>
                <button>Все</button>
                <button>Новости</button>
                <button>Блоки</button>
                <button>Обзоры</button>
            </div>
            <div className={styles.Content}>
                <div className={styles.Job}></div>
                <div className={styles.Produ}></div>
            </div>
        </div>
    );
};
