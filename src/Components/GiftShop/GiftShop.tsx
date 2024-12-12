import { useEffect, useState } from "react";
import styles from "./GiftShop.module.scss";

export const GiftShop = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
    });

    useEffect(() => {
        const targetDate = new Date(Date.now() + 60 * 1000); // Устанавливаем цель на 60 секунд вперед

        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime(); // Используем getTime()

            if (difference <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0 });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

            setTimeLeft({ days, hours, minutes });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.Gift}>
            <h1 className={styles.GiftText}>Новогодний магазин</h1>
            <div className={styles.TimerBox}>
                <div className={styles.Timer}>
                    {timeLeft.days} дн. {timeLeft.hours} ч.
                </div>
            </div>
            <div className={styles.Blocks}>
                <div className={styles.Block5}>
                    <span className={styles.Price}>Цена: 5000₽</span>
                </div>
                <div className={styles.Block4}>
                    <span className={styles.Price}>Цена: 4000₽</span>
                </div>
                <div className={styles.Block3}>
                    <span className={styles.Price}>Цена: 3000₽</span>
                </div>
                <div className={styles.Block2}>
                    <span className={styles.Price}>Цена: 2000₽</span>
                </div>
                <div className={styles.Block}>
                    <span className={styles.Price}>Цена: 1000₽</span>
                    
                </div>
            </div>
        </div>
    );
};
