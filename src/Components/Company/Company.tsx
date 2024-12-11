import styles from "./Company.module.scss";

export const Company = () => {
    const handleClick = () => {
        window.location.href = "https://www.dns-shop.ru/brand/ardorgaming/?utm_referrer=https://www.dns-shop.ru/?utm_medium=organic%26utm_source=google%26utm_referrer=https%253A%252F%252Fwww.google.com%252F";
    };

    return (
        <div className={styles.Company}>
            <div className={styles.CompanyImg} onClick={handleClick}></div>
            <div className={styles.CompanyImg} onClick={handleClick}></div>
            <div className={styles.CompanyImg} onClick={handleClick}></div>
            <div className={styles.CompanyImg} onClick={handleClick}></div>
            <div className={styles.CompanyImg} onClick={handleClick}></div>
            <div className={styles.CompanyImg} onClick={handleClick}></div>
            <div className={styles.CompanyImg} onClick={handleClick}></div>
            <div className={styles.CompanyImg} onClick={handleClick}></div>
            <div className={styles.CompanyImg} onClick={handleClick}></div>
            <div className={styles.CompanyImg} onClick={handleClick}></div>
           
        </div>
    );
};
