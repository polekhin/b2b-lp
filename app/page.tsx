"use client";

import { FormEvent, useState } from "react";

const Arrow = () => <span aria-hidden="true">↗</span>;
const Check = () => <span className="check" aria-hidden="true">✓</span>;

const audiences = [
  ["Студентам", "Поймите, как ИИ поможет в учебе и будущей профессии."],
  ["Родителям", "Разберитесь, как безопасно использовать ИИ в семье."],
  ["Педагогам", "Оцените возможности и ограничения ИИ в образовании."],
  ["Специалистам", "Найдите точки роста в ежедневной работе с ИИ."],
  ["Руководителям", "Проверьте готовность применять ИИ в задачах команды."],
  ["Организациям", "Увидьте общую картину ИИ-грамотности сотрудников."],
];

const faqs = [
  ["Что такое ИИ Чекап?", "Это онлайн-диагностика для человека или организации. По итогам вы получите ИИ Индекс и понятные рекомендации по развитию."],
  ["Кто может пройти ИИ Чекап?", "Любой человек с минимальным опытом работы с ИИ. Для представителей организаций доступен отдельный корпоративный формат."],
  ["Нужно ли платить за участие?", "Нет. Участие в ИИ Чекапе полностью бесплатное."],
  ["Сколько времени занимает прохождение?", "В среднем 10 минут. Специально готовиться не нужно."],
  ["Можно пройти оба варианта?", "Да. При регистрации можно выбрать персональный, корпоративный или оба варианта."],
  ["Что я получу после прохождения?", "ИИ Индекс, оценки по направлениям, разбор сильных сторон, зоны роста и рекомендации. Организации дополнительно получают аналитический отчет."],
];

export default function Home() {
  const [sent, setSent] = useState(false);
  const [personal, setPersonal] = useState(true);
  const [corporate, setCorporate] = useState(false);

  function scrollToForm(kind?: "personal" | "corporate") {
    if (kind === "personal") setPersonal(true);
    if (kind === "corporate") setCorporate(true);
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="ИИ Чекап — на главную">
          <span className="brand-mark">ИИ</span>
          <span>ЧЕКАП</span>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#about">О чекапе</a>
          <a href="#formats">Форматы</a>
          <a href="#how">Как проходит</a>
          <a href="#faq">Вопросы</a>
        </nav>
        <button className="button button-small" onClick={() => scrollToForm()}>
          Записаться <Arrow />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-main">
          <div className="hero-copy">
            <div className="eyebrow"><span>●</span> В рамках «ИИ недели»</div>
            <h1>ИИ<br /><em>Чекап</em></h1>
            <p className="hero-subtitle">Узнайте, насколько вы готовы к работе и жизни в эпоху искусственного интеллекта</p>
            <p className="hero-text">Пройдите диагностику для себя или своей организации. Тест занимает в среднем 10 минут. Вы увидите свои сильные стороны и получите базовые рекомендации по развитию.</p>
            <button className="button hero-cta" onClick={() => scrollToForm()}>
              Записаться на ИИ Чекап <Arrow />
            </button>
          </div>

          <div className="hero-choices">
            <article className="hero-choice hero-choice-personal">
              <div className="hero-choice-top"><span>01 — ДЛЯ СЕБЯ</span><i>↗</i></div>
              <h2>Персональный<br />ИИ Чекап</h2>
              <p>Оцените, каких знаний вам не хватает, и получите рекомендации, как увереннее использовать ИИ в работе и жизни.</p>
              <button onClick={() => scrollToForm("personal")}>Хочу пройти <Arrow /></button>
            </article>
            <article className="hero-choice hero-choice-corporate">
              <div className="hero-choice-top"><span>02 — ДЛЯ ОРГАНИЗАЦИИ</span><i>↗</i></div>
              <h2>Корпоративный<br />ИИ Чекап</h2>
              <p>Узнайте, как ИИ может повысить эффективность организации, усилить команду и помочь быстрее конкурентов внедрять новые подходы.</p>
              <button onClick={() => scrollToForm("corporate")}>Хочу пройти <Arrow /></button>
            </article>
            <p className="hero-disclaimer">Это не экзамен и не проверка знания сервисов. ИИ Чекап поможет определить, куда двигаться дальше, чтобы увереннее использовать ИИ в современном мире.</p>
          </div>
        </div>

        <div className="hero-benefits" aria-label="Преимущества ИИ Чекапа">
          <div className="hero-free"><strong>Бесплатно</strong><span>для всех участников</span></div>
          <div><strong>10 минут</strong><span>занимает тест</span></div>
          <div><strong>Без подготовки</strong><span>можно начать сразу</span></div>
          <div><strong>Проверен</strong><span>экспертами рынка</span></div>
          <div><strong>Сразу</strong><span>доступны результаты</span></div>
        </div>
      </section>

      <section className="partners" aria-label="Партнеры проекта">
        <div className="partner-organizer"><small>Организатор</small><strong>ЦИФРИУМ</strong></div>
        <span>Партнеры</span>
        {[1,2,3,4,5].map((n) => <div className="logo-placeholder" key={n}>ПАРТНЕР {n}</div>)}
      </section>

      <section className="section intro" id="about">
        <div className="section-number">01 — О ЧЕКАПЕ</div>
        <div className="intro-grid">
          <h2>Это не экзамен.<br />Это ваша <em>точка старта.</em></h2>
          <div>
            <p className="big-copy">ИИ Чекап помогает понять, что уже получается хорошо, а какие навыки стоит развивать дальше.</p>
            <p>Вопросы и практические ситуации покажут, насколько уверенно вы используете ИИ, понимаете его возможности, ограничения и риски.</p>
          </div>
        </div>
        <div className="benefit-row">
          {[["10 мин","в среднем занимает чекап"],["0 ₽","участие бесплатное"],["Сразу","доступны результаты"],["Без подготовки","можно начать сейчас"]].map(([a,b]) =>
            <div className="metric" key={a}><strong>{a}</strong><span>{b}</span></div>
          )}
        </div>
      </section>

      <section className="section audience">
        <div className="section-heading">
          <div className="section-number">02 — ДЛЯ КОГО</div>
          <h2>ИИ касается <em>каждого</em></h2>
          <p>Выберите свою роль — чекап покажет пользу именно для вас.</p>
        </div>
        <div className="audience-grid">
          {audiences.map(([title, text], i) => (
            <article className="audience-card" key={title}>
              <span>0{i + 1}</span><h3>{title}</h3><p>{text}</p><i>↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="section formats" id="formats">
        <div className="section-heading light">
          <div className="section-number">03 — ДВА ФОРМАТА</div>
          <h2>Один простой процесс.<br /><em>Два понятных результата.</em></h2>
        </div>
        <div className="format-grid">
          <article className="format-card personal">
            <div className="format-top"><span>Для себя</span><b>01</b></div>
            <h3>Персональный<br />ИИ Чекап</h3>
            <p>Поймите, как продуктивнее использовать ИИ в работе, учебе и повседневной жизни.</p>
            <ul>
              <li><Check /> Персональный ИИ Индекс</li>
              <li><Check /> Сильные стороны и зоны роста</li>
              <li><Check /> Рекомендации по развитию</li>
              <li><Check /> Сертификат участника</li>
            </ul>
            <button onClick={() => scrollToForm("personal")}>Пройти для себя <Arrow /></button>
          </article>
          <article className="format-card corporate">
            <div className="format-top"><span>Для организации</span><b>02</b></div>
            <h3>Корпоративный<br />ИИ Чекап</h3>
            <p>Оцените готовность команды и найдите приоритеты для системного внедрения ИИ.</p>
            <ul>
              <li><Check /> Корпоративный ИИ Индекс</li>
              <li><Check /> Профиль результатов сотрудников</li>
              <li><Check /> Приоритеты внедрения ИИ</li>
              <li><Check /> Аналитический отчет</li>
            </ul>
            <button onClick={() => scrollToForm("corporate")}>Пройти для организации <Arrow /></button>
          </article>
        </div>
        <div className="trust-strip">Методики учитывают российские и международные подходы и проверены экспертами рынка.</div>
      </section>

      <section className="section business">
        <div className="section-number">04 — ДЛЯ ОРГАНИЗАЦИЙ</div>
        <div className="business-grid">
          <div>
            <h2>ИИ становится новой основой <em>конкурентоспособности</em></h2>
            <p className="big-copy">Чекап поможет определить стартовую точку и выбрать приоритеты развития.</p>
          </div>
          <div className="business-list">
            {[
              ["Повышайте эффективность", "Находите задачи, где ИИ экономит время и снижает затраты."],
              ["Усиливайте команду", "Развивайте навыки для уверенной ежедневной работы с ИИ."],
              ["Снижайте риски", "Внедряйте ИИ последовательно, без хаотичных экспериментов."],
            ].map(([t,d], i) => <div key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section process" id="how">
        <div className="section-heading">
          <div className="section-number">05 — КАК ЭТО РАБОТАЕТ</div>
          <h2>Всего несколько шагов<br />до <em>результата</em></h2>
        </div>
        <div className="steps">
          {[
            ["01","Выберите формат","Для себя, организации или оба сразу."],
            ["02","Зарегистрируйтесь","Оставьте контакты и получите доступ."],
            ["03","Пройдите онлайн","Ответьте на вопросы. Это займет около 10 минут."],
            ["04","Получите ИИ Индекс","Увидьте сильные стороны и следующие шаги."],
          ].map(([n,t,d]) => <article key={n}><span>{n}</span><div className="step-dot" /><h3>{t}</h3><p>{d}</p></article>)}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <span>ВАША ТОЧКА СТАРТА</span>
          <h2>Поймите свой уровень<br /><em>уже сейчас</em></h2>
        </div>
        <div>
          <p>ИИ уже меняет работу, учебу и повседневную жизнь. Чекап подскажет, куда двигаться дальше.</p>
          <button className="button dark" onClick={() => scrollToForm()}>Получить ИИ Индекс <Arrow /></button>
        </div>
      </section>

      <section className="section project">
        <div className="section-number">06 — О ПРОЕКТЕ</div>
        <div className="project-grid">
          <h2>Часть программы<br /><em>«ИИ неделя»</em></h2>
          <div>
            <p className="big-copy">Ежегодная диагностика ИИ-грамотности людей и организаций по всей России.</p>
            <p>Проект помогает увидеть текущий уровень и выбрать направления дальнейшего роста.</p>
            <div className="project-facts">
              <span><Check /> Единая методика</span>
              <span><Check /> Экспертная проверка</span>
              <span><Check /> Организатор — Цифриум</span>
            </div>
          </div>
        </div>
      </section>

      <section className="register" id="register">
        <div className="register-copy">
          <div className="section-number">07 — РЕГИСТРАЦИЯ</div>
          <h2>Запишитесь<br />на <em>ИИ Чекап</em></h2>
          <p>Оставьте контакты. Мы пришлем приглашение, результаты и полезные материалы.</p>
          <div className="gift"><span>✦</span><div><b>Подарок после регистрации</b><small>От партнера проекта</small></div></div>
        </div>
        <form onSubmit={submit}>
          {sent ? (
            <div className="success" role="status">
              <span>✓</span><h3>Заявка принята</h3>
              <p>Спасибо! Мы свяжемся с вами и пришлем доступ к ИИ Чекапу.</p>
              <button type="button" onClick={() => setSent(false)}>Отправить еще одну</button>
            </div>
          ) : (
            <>
              <label>Имя<input required name="name" placeholder="Как к вам обращаться" /></label>
              <label>Электронная почта<input required type="email" name="email" placeholder="mail@example.ru" /></label>
              <label>Телефон<input required type="tel" name="phone" placeholder="+7 900 000-00-00" /></label>
              <fieldset>
                <legend>Выберите формат</legend>
                <label className="choice"><input type="checkbox" checked={personal} onChange={(e) => setPersonal(e.target.checked)} /><span><Check /></span> Персональный</label>
                <label className="choice"><input type="checkbox" checked={corporate} onChange={(e) => setCorporate(e.target.checked)} /><span><Check /></span> Корпоративный</label>
              </fieldset>
              <button className="button form-button" type="submit" disabled={!personal && !corporate}>Записаться на ИИ Чекап <Arrow /></button>
              <small className="privacy">Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.</small>
            </>
          )}
        </form>
      </section>

      <section className="section faq" id="faq">
        <div className="section-heading">
          <div className="section-number">08 — FAQ</div>
          <h2>Остались <em>вопросы?</em></h2>
          <p>Собрали главное об ИИ Чекапе.</p>
        </div>
        <div className="faq-list">
          {faqs.map(([q,a], i) => (
            <details key={q}>
              <summary><span>0{i+1}</span>{q}<i>+</i></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">ИИ</span><span>ЧЕКАП</span></a>
        <p>Диагностика готовности к работе и жизни в эпоху ИИ.</p>
        <div><a href="#about">О проекте</a><a href="#register">Регистрация</a><a href="#faq">FAQ</a></div>
        <span>© 2026 Цифриум</span>
      </footer>
    </main>
  );
}
