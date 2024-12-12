import { useState } from "react";
import styles from "./Search.module.scss";
import Registration from "../Reg/Register";

export const Search = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault(); // Предотвращаем отправку формы
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <div className={styles.Login}>
      <p className={styles.MenuItem}>Сравнение</p>
        <p className={styles.MenuItem}>Избранное</p>
        <p className={styles.MenuItem}>Корзина</p>
          <p className={styles.LoginText}>Войти</p>
          <div className={styles.LoginMenu}>
            <h1 className={styles.LoginText}>
              Получайте бонусы, сохраняйте и отслеживайте заказы
            </h1>
            <form>
              <button
                type="submit"
                onClick={openModal}> 
                Войти
              </button>
            </form>
          </div>

          {/* Модальное окно регистрации */}
          {isModalOpen && (
            <div
              className={styles.ModalOverlay}
              onClick={closeModal} // Закрытие модального окна при клике на фон
            >
              <div
                className={styles.Modal}
                onClick={(e) => e.stopPropagation()} // Остановка всплытия события при клике внутри модального окна
              >
                <Registration />
                <button onClick={closeModal} className={styles.CloseButton}>
                  Закрыть
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
