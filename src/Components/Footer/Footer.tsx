import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.Section}>
                <div className={styles.DNS}>
                    DNS
                </div>
                <ul className={styles.List}>
                    <li>Компания</li>
                    <li>О компании</li>
                    <li>Новости</li>
                    <li>Партнерам</li>
                    <li>Вакансии</li>
                    <li>Политика конфиденциальности</li>
                    <li>Персональные данные</li>
                    <li>Правила продаж</li>
                    <li>Правила пользования сайта</li>
                    <li>На информационном ресурсе применяются рекомендательные технологии</li>
                    <li>Сервисные центры</li>
                </ul>
            </div>

            <div className={styles.Section}>
                <div className={styles.DNSClub}>
                    <div className={styles.DNS}>DNS</div>
                    <div className={styles.Club}>Клуб</div>
                </div>
                <ul className={styles.List}>
                    <li>Покупателям</li>
                    <li>Как оформить заказ</li>
                    <li>Способы оплаты</li>
                    <li>Кредиты</li>
                    <li>Доставка</li>
                    <li>Статус заказа</li>
                    <li>Обмен, возврат, гарантия</li>
                    <li>Проверка статуса ремонта</li>
                </ul>
            </div>

            <div className={styles.Section}>
                <div className={styles.DNSTechnologies}>
                    <div className={styles.DNS}>DNS</div>
                    <div className={styles.Technologies}>Технологии</div>
                </div>
                <ul className={styles.List}>
                    <li>Юридическим лицам</li>
                    <li>Проверка счета</li>
                    <li>Корпоративные отделы</li>
                    <li>Подарочные карты</li>
                    <li>Бонусная программа</li>
                    <li>Помощь</li>
                    <li>Обратная связь</li>
                </ul>
            </div>
        </div>
    );
};
