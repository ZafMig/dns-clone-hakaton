import styles from "./Discount.module.scss";
import productImage from "../../../public/d90873c869a4bcbc3d976acaaf833109ed5b5c2fda3e162b4fdd56cb7d923cb3.jpg"; // Путь к изображению товара

export const Discount = () => {
    const originalPrice = 29999;
    const discountPrice = 19999;

    return (
        <div className={styles.DiscountContainer}>
            {/* Первая карточка */}
            <div className={styles.DiscountBlock}>
                <h1>Еще 16 часов скидка</h1>
                <p className={styles.productName}>15.6" Ноутбук MAIBENBEN M%$% серебристый</p>
                <div className={styles.priceBlock}>
                    <span className={styles.discountPrice}>₽{discountPrice}</span>
                    <span className={styles.originalPrice}>₽{originalPrice}</span>
                </div>
                <button className={styles.moreInfoButton}>Подробнее</button>
                <img src={productImage} alt="Ноутбук MAIBENBEN" className={styles.productImage} />
            </div>

            {/* Вторая карточка */}
            <div className={styles.DiscountBlock}>
                <h1>Еще 16 часов скидка</h1>
                <p className={styles.productName}>15.6" Ноутбук MAIBENBEN M%$% серебристый</p>
                <div className={styles.priceBlock}>
                    <span className={styles.discountPrice}>₽{discountPrice}</span>
                    <span className={styles.originalPrice}>₽{originalPrice}</span>
                </div>
                <button className={styles.moreInfoButton}>Подробнее</button>
                <img src={productImage} alt="Ноутбук MAIBENBEN" className={styles.productImage} />
            </div>

            <div className={styles.DiscountBlock}>
                <h1>Еще 16 часов скидка</h1>
                <p className={styles.productName}>15.6" Ноутбук MAIBENBEN M%$% серебристый</p>
                <div className={styles.priceBlock}>
                    <span className={styles.discountPrice}>₽{discountPrice}</span>
                    <span className={styles.originalPrice}>₽{originalPrice}</span>
                </div>
                <button className={styles.moreInfoButton}>Подробнее</button>
                <img src={productImage} alt="Ноутбук MAIBENBEN" className={styles.productImage} />
            </div>
        </div>
    );
};
