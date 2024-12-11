import styles from "./MoreProduct.module.scss";

export const MoreProduct = () => {
    return (
        <div className={styles.MoreProduct}>
            <div className={styles.One}>
                <h1>Персональный подбор</h1>
                <div className={styles.Content}>
                    <div className={styles.Product}></div>
                    <div className={styles.Categories}>
                        <ul>
                            <li>Смартфоны</li>
                            <li>Телевизоры</li>
                            <li>Мониторы</li>
                            <li>Холодильники</li>
                            <li>Стиральные машины</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.One}>
                <h1>Сезонные товары</h1>
                <div className={styles.Content}>
                    <div className={styles.Product}></div>
                    <div className={styles.Categories}>
                        <ul>
                            <li>Электрические тепловые пушки</li>
                            <li>Тепловые завесы</li>
                            <li>Компактные фотопринтеры</li>
                            <li>Снегоуборщики электрические</li>
                            <li>Снегоуборщики бензиновые</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.One}>
                <h1>Акции и скидки</h1>
                <div className={styles.Content}>
                    <div className={styles.Product}></div>
                    <div className={styles.Categories}>
                        <ul>
                            <li>Холодильники автомобильные</li>
                            <li>Ноутбуки</li>
                            <li>Электрогитары</li>
                            <li>Телевизоры</li>
                            <li>Wi-Fi роутеры 3G/4G/5G</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
