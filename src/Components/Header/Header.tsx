import styles from "./Header.module.scss"

export const Header = () =>{
    return(
        <div className={styles.Header}> 
            <p className={styles.name}>Владивосток</p>
                
            <p>Акции</p>
            <p>Магазины</p>
            <p>Доставка</p>
            <p>Покупателям</p>
            <p>Юридическим лицам</p>
            <p>Клуб DNS</p>
            <p>Вакансии</p>

            <p className={styles.number}>8-800-77-07-999</p>
        </div>
    )
}