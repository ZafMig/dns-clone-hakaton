import React, { useState } from "react";
import styles from "./Register.module.scss";

interface IFormData {
  name: string;
  email: string;
  password: string;
}

const Registration = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика регистрации (например, отправка на сервер)
    console.log("Регистрация с данными: ", formData);
  };

  return (
    <div className={styles.Registration}>
      <h2>Войти с паролем</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.InputField}>
          <input
          placeholder="Email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.InputField}>
          <input
          placeholder="Пароль"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Registration;
