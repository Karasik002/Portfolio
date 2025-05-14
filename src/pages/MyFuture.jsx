import React from "react";

const MyFuture = () => {
  return (
    <div className="page">
      <h1 className="centered-title">Мій розвиток</h1>

      <div className="section animate-section">
        <h2>Мої цілі на майбутнє</h2>
        <p>
          Я хочу стати Full-Stack розробником, працювати в команді над цікавими проєктами та вивчати хмарні технології.
        </p>
      </div>

      <div className="section animate-section">
        <h2>Три кроки до мети</h2>
        <ul>
          <li>Опанувати React та Node.js для створення повноцінних веб-додатків.</li>
          <li>Пройти стажування в IT-компанії для набуття практичного досвіду.</li>
          <li>Вивчити хмарні сервіси, такі як AWS або Azure.</li>
        </ul>
      </div>

      <div className="section animate-section">
        <h2>Робота мрії</h2>
        <p>
          Моя мрія — працювати Full-Stack розробником у технологічній компанії, де я зможу створювати інноваційні продукти та
          розвивати свої навички.
        </p>
      </div>

      <div className="section animate-section">
        <h2>Мотиваційна фраза</h2>
        <p>"Ніколи не здаватися — ось моя магія."</p>
      </div>

      <div className="city-image animate-section">
        <img src="https://images.prom.ua/5323855406_w640_h640_5323855406.jpg" alt="Asta" />
      </div>
    </div>
  );
};

export default MyFuture;