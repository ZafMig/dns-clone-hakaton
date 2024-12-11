import styles from "./Search.module.scss";

export const Search = () => {
    return (
        <div className={styles.Search}>
            <div className={styles.Catalog}>
                <h1 className={styles.h1Search}>DNS</h1>
                <p className={styles.Name}>Каталог &#9660;</p>
            </div>
            <div className={styles.Input}>
                <input type="text" placeholder="Поиск по сайту" />
            </div>
            <div className={styles.Menu}>
                <p className={styles.MenuItem}>Сравнение</p>
                <p className={styles.MenuItem}>Избранное</p>
                <p className={styles.MenuItem}>Корзина</p>
                <div className={styles.Login}>
                    <p className={styles.LoginText}>Войти</p>
                    <div className={styles.LoginMenu}>
                    <h1 className={styles.LoginText}>Получайте бонусы, сохраняйте и отслеживайте заказы</h1>
                        <form>
                            <button type="submit">Войти</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
