import styles from "./News.module.scss";

export const News = () => {
    const handleJob = () => {
        window.location.href = 'https://www.dns-shop.ru/about/career/'
    }
    const handleXGIMI = () => {
        window.location.href = 'https://www.dns-shop.ru/news/09ff2bb5-b795-11ef-92b1-0050569d5825/'
    }
    return (
        <div className={styles.News}>
            <div className={styles.Buttons}>
                <button>Все</button>
                <button>Новости</button>
                <button>Блоки</button>
                <button>Обзоры</button>
            </div>
            <div className={styles.Content}>
                <div className={styles.Job} onClick={handleJob}></div>
                <div className={styles.Produ} onClick={handleXGIMI}></div>
                <div className={styles.Produ} onClick={handleXGIMI}></div>
                <div className={styles.Produ} onClick={handleXGIMI}></div>
            </div>
        </div>
    );
};
