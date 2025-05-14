import React from "react";

const AboutPage = () => {
  return (
    <div className="page">
      <h1 className="centered-title">Про мене</h1>

      <div className="section animate-section">
        <h2>Ім'я та спеціальність</h2>
        <p>
          Мене звати Білошицька Марина Ігорівна, я студентка 2 курсу НУБіП України за спеціальністю «Комп'ютерні науки».
        </p>
      </div>

      <div className="section animate-section">
        <h2>Коротко про мене як розробника</h2>
        <p>
          Я початківець розробник, вивчаю різні мови програмування, зокрема C++, C#, JavaScript, а також основи баз даних
          та SQL. Мене цікавить як теоретична, так і практична частина програмування, і я прагну вдосконалювати свої навички
          в цих напрямках.
        </p>
      </div>

      <div className="section animate-section">
        <h2>Цінності та захоплення</h2>
        <p>
          Моїми цінностями є креативність, планування та ефективна робота в команді. Я захоплююсь відеоіграми, web-розробкою,
          дизайном, малюванням та подорожами.
        </p>
      </div>

      <div className="section animate-section">
        <h2>Досвід навчання</h2>
        <p>
          За час навчання в НУБіП я отримала базові знання з програмування, роботи з базами даних та основ веб-розробки.
          Я також самостійно вивчаю React та JavaScript через онлайн-курси та практичні проєкти.
        </p>
      </div>

      <div className="section animate-section">
        <h2>Мої проєкти</h2>
        <h3>HTML + CSS</h3>
        <div className="project-buttons">
          <a href="https://github.com/username/lab3-website" target="_blank" rel="noopener noreferrer" className="project-button">
            Lab3 Website
          </a>
          <a href="https://github.com/username/css-practice" target="_blank" rel="noopener noreferrer" className="project-button">
            CSS Practice
          </a>
        </div>

        <h3>JavaScript</h3>
        <div className="project-buttons">
          <a href="https://github.com/username/js-dom" target="_blank" rel="noopener noreferrer" className="project-button">
            JS DOM Manipulation
          </a>
          <a href="https://github.com/username/js-arrays" target="_blank" rel="noopener noreferrer" className="project-button">
            JS Array Methods
          </a>
        </div>

        <h3>React</h3>
        <div className="project-buttons">
          <a href="https://github.com/username/react-router-project" target="_blank" rel="noopener noreferrer" className="project-button">
            React Router Project
          </a>
          <a href="https://github.com/username/gallery-app" target="_blank" rel="noopener noreferrer" className="project-button">
            Gallery App
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;