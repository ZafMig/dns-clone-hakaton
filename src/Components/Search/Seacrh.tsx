import styles from "./Search.module.scss"

export const Search = () => {
    return(
        <div className={styles.Search}>
            <div className={styles.Catalog}>
                <h1 className={styles.h1Search}>DNS</h1>
                <p className={styles.Name}>Каталог &#9660;</p>
            </div>
            <div className={styles.Input}>
            <input type="text" placeholder="Поиск по сайту" />
            </div>
                <p>Сравнение</p>
                <p>Избранное</p>
                <p>Корзина</p>
                <p>Войти</p>
            
        </div>
    )
}