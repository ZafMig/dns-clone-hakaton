import styles from "./Home.module.scss"

export const Home = () => {
    const handleCatalog = () => {
        window.location.href = "https://www.dns-shop.ru/catalog/";
    };
    const handleActions = () => {
        window.location.href = "https://www.dns-shop.ru/actions/";
    }
    const handleConfugurator = () => {
        window.location.href = "https://www.dns-shop.ru/configurator/";
    }
    const handleGiftCard = () => {
        window.location.href = "https://www.dns-shop.ru/gift-card/";
    }
    return(
        <div className={styles.Home}>
            <div className={styles.Cab}>
                <h1>Личный кабинет</h1>
                <p>Получайте бонусы, отслеживайте заказы и делитесь мнением</p>
                <button className={styles.but1}>Войти</button>
                <button className={styles.but2}>Мои заказы</button>
            </div>

            <div className={styles.blocks}>
                <div className={styles.block} onClick={handleCatalog}>
                <h1>Каталог</h1>
                <p>Большой выбор техники для дома и для вас</p>
                </div>
                
                <div className={styles.block} onClick={handleActions}>
                <h1>Акции</h1>
                <p>Скидки, расрочки, выгодные комплекты </p>
                </div>
                <div className={styles.block} onClick={handleConfugurator}>
                <h1>Собрать ПК</h1>
                <p>Без проблем с совместимостью</p>
                </div>
                <div className={styles.block} onClick={handleGiftCard}>
                <h1>Подарочные карты</h1>
                <p>Дарите любимым</p>
                </div>
                
            </div>

        </div>
    )
}