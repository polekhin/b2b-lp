"use client";

import { FormEvent, useState } from "react";

const Arrow = () => <span aria-hidden="true">↗</span>;
const Check = () => <span className="check" aria-hidden="true">✓</span>;

const audiences = [
  ["Старшеклассникам", "Узнайте, насколько уверенно вы используете ИИ в учебе и повседневных задачах."],
  ["Родителям", "Разберитесь, какие возможности и риски ИИ важно учитывать в семье и при воспитании детей."],
  ["Педагогам", "Оцените, насколько хорошо вы понимаете возможности, ограничения и принципы безопасного использования ИИ."],
  ["Специалистам", "Определите свои сильные стороны и зоны развития в работе с искусственным интеллектом."],
  ["Руководителям", "Оцените свою готовность использовать ИИ в рабочих задачах и управлении командой."],
  ["Организациям", "Получите общую картину уровня ИИ-грамотности сотрудников."],
];

const experts = [
  ["Анна Морозова", "Эксперт по ИИ-грамотности", "Чекап — понятная стартовая точка. Он показывает, какие навыки уже есть и куда двигаться дальше."],
  ["Михаил Соколов", "Директор по цифровой трансформации", "Я пройду тест сам и предложу его команде. Такой срез помогает говорить о развитии предметно."],
  ["Елена Воронцова", "Руководитель образовательных программ", "Методика помогает оценить не знание сервисов, а понимание возможностей, рисков и ответственности."],
  ["Алексей Громов", "Эксперт по внедрению ИИ", "Организациям важно сначала увидеть точку старта. Тогда внедрение становится последовательным и управляемым."],
  ["Дарья Белова", "Специалист по оценке компетенций", "Здесь нет плохого результата. Есть честная картина, которая помогает выбрать следующий шаг."],
];

const faqs = [
  ["Что такое ИИ Чекап?", "ИИ Чекап — это онлайн-диагностика, которая позволяет оценить уровень использования искусственного интеллекта человеком или организацией. По результатам прохождения участник получает ИИ Индекс и рекомендации по дальнейшему развитию."],
  ["Кто может пройти ИИ Чекап?", "Пройти ИИ Чекап может любой человек, который уже имеет минимальный опыт использования сервисов искусственного интеллекта или слышал про него. Также доступен корпоративный ИИ Чекап для представителей организаций."],
  ["Нужно ли платить за участие?", "Нет. Участие в ИИ Чекапе полностью бесплатное."],
  ["Сколько времени занимает прохождение?", "Прохождение ИИ Чекапа занимает в среднем 10 минут."],
  ["Когда можно пройти ИИ Чекап?", "ИИ Чекап доступен после регистрации. Пройти его можно онлайн в удобное время."],
  ["Можно ли пройти и персональный, и корпоративный ИИ Чекап?", "Да. При регистрации можно выбрать один или оба варианта участия. Если вы не успеете пройти второй чекап сразу, сможете вернуться к нему позже."],
  ["Что делать, если я почти не пользовался искусственным интеллектом?", "Ничего страшного, специальная подготовка не требуется. ИИ Чекап поможет понять ваш текущий уровень и подскажет, с каких тем лучше начать знакомство с искусственным интеллектом."],
];

export default function Home() {
  const [sent, setSent] = useState(false);
  const [personal, setPersonal] = useState(true);
  const [corporate, setCorporate] = useState(false);
  const [dataConsent, setDataConsent] = useState(false);
  const [mailConsent, setMailConsent] = useState(false);

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
        <a className="brand" href="#top" aria-label="ИИ Чекап — на главную"><span className="brand-mark">ИИ</span><span>ЧЕКАП</span></a>
        <nav aria-label="Основная навигация"><a href="#about">О чекапе</a><a href="#audience">Для кого</a><a href="#method">Как проходит</a><a href="#faq">Вопросы</a></nav>
        <button className="button button-small" onClick={() => scrollToForm()}>Записаться <Arrow /></button>
      </header>

      <section className="hero" id="top">
        <div className="hero-main">
          <div className="hero-copy">
            <div className="eyebrow"><span>●</span> Тестирование проходит в рамках ИИ недели</div>
            <h1>ИИ<br /><em>Чекап</em></h1>
            <p className="hero-subtitle">Узнайте, насколько вы готовы к работе и жизни в эпоху искусственного интеллекта</p>
            <p className="hero-text">Пройдите диагностику для себя или своей организации. Тест занимает в среднем за 10 минут. Вы увидите свои сильные стороны и получите базовые рекомендации по развитию.</p>
            <button className="button hero-cta" onClick={() => scrollToForm()}>Записаться на ИИ Чекап <Arrow /></button>
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
        <div className="hero-benefits">
          <div className="hero-free"><strong>Бесплатно</strong><span>для всех участников</span></div>
          <div><strong>10 минут</strong><span>занимает прохождение теста</span></div>
          <div><strong>Без подготовки</strong><span>Можно начать сразу</span></div>
          <div><strong>Результат сразу</strong><span>Ваш ИИ индекс в конце теста</span></div>
        </div>
      </section>

      <section className="partners">
        <div className="partner-organizer"><small>Организатор</small><strong>ЦИФРИУМ</strong></div><span>Партнеры</span>
        {[1,2,3,4,5].map(n => <div className="logo-placeholder" key={n}>ПАРТНЕР {n}</div>)}
      </section>

      <section className="section intro" id="about">
        <div className="section-number">01 — ПОЧЕМУ НУЖНО ПРОЙТИ</div>
        <h2 className="intro-title">ИИ Чекап — это не экзамен,<br />а <em>точка вашего старта</em></h2>
        <div className="intro-audiences">
          <article><span>Для каждого</span><p>ИИ Чекап позволяет определить текущий уровень ИИ-грамотности, понять свои сильные стороны и получить базовые рекомендации по дальнейшему развитию.</p></article>
          <article><span>Для компаний</span><p>Корпоративный ИИ Чекап помогает организациям оценить общий уровень ИИ-грамотности сотрудников и выявить основные зоны развития.</p></article>
          <p className="intro-method">Тест оценивает понимание возможностей, ограничений и принципов ответственного использования ИИ в учебе, работе и повседневной жизни.</p>
        </div>
        <div className="no-fail"><strong>Здесь нельзя<br />провалиться</strong><p>У ИИ Чекапа нет проходного балла. Результат нужен не для оценки или сравнения с другими, а чтобы лучше понять свой текущий уровень и направления развития.</p></div>
        <div className="intro-benefits">
          <article><span>01</span><h3>Узнайте свой уровень</h3><p>Получите объективную оценку текущего уровня без проходного балла и публичного рейтинга.</p></article>
          <article><span>02</span><h3>Поймите, что развивать</h3><p>После прохождения вы получите персональный отчет, итоговый индекс и рекомендации именно для вашего уровня.</p></article>
          <article><span>03</span><h3>Получите подарки от партнеров</h3><p>Получите месяц бесплатного пользования агрегатором нейронок.</p></article>
        </div>
        <div className="section-cta"><button className="button" onClick={() => scrollToForm()}>Хочу пройти ИИ Чекап <Arrow /></button></div>
      </section>

      <section className="section literacy">
        <div className="section-number">02 — ИИ-ГРАМОТНОСТЬ</div>
        <div className="literacy-head"><h2>Чтобы пользоваться ИИ,<br /><em>не нужно разбираться в технологиях</em></h2><p>ИИ уже помогает искать информацию, писать тексты, учиться, планировать и решать рабочие задачи. ИИ-грамотность помогает делать это осознанно, безопасно и с пользой.</p></div>
        <div className="literacy-orbit">
          <div className="literacy-core">ИИ — ваш<br /><strong>помощник</strong></div>
          {[
            ["Новый базовый навык","Сначала мы учились работать с компьютером и искать информацию в интернете. Теперь важно уметь взаимодействовать с искусственным интеллектом."],
            ["Помощник в работе","ИИ может ускорять поиск информации, подготовку текстов, анализ данных и решение повседневных задач."],
            ["Помощник в жизни","ИИ помогает учиться, планировать, сравнивать варианты, разбираться в новых темах и экономить время."],
            ["Не заменяет ваше мышление","ИИ — это помощник и источник информации. Он помогает быстрее находить идеи и разбираться в новых темах, но осмысливать полученное и принимать решения по-прежнему нужно самостоятельно."],
          ].map(([t,d],i)=><article key={t} className={`literacy-card lc-${i+1}`}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}
        </div>
        <div className="section-cta"><button className="button" onClick={() => scrollToForm()}>Начать тестирование <Arrow /></button></div>
      </section>

      <section className="section audience" id="audience">
        <div className="section-heading"><div className="section-number">03 — ДЛЯ КОГО</div><h2>ИИ Чекап подходит<br /><em>и людям, и организациям</em></h2><p>Можно выбрать один или оба варианта участия.</p></div>
        <div className="audience-grid">{audiences.map(([t,d],i)=><article className="audience-card" key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p><i>↗</i></article>)}</div>
        <div className="audience-choice"><label><input type="checkbox" checked={personal} onChange={e=>setPersonal(e.target.checked)} /> Пройти персональный ИИ Чекап</label><label><input type="checkbox" checked={corporate} onChange={e=>setCorporate(e.target.checked)} /> Пройти корпоративный ИИ Чекап корпоративный</label></div>
        <div className="section-cta"><button className="button" onClick={() => scrollToForm()}>Пройти ИИ Чекап <Arrow /></button></div>
      </section>

      <section className="section business">
        <div className="section-number">04 — ДЛЯ ОРГАНИЗАЦИЙ</div>
        <div className="business-grid">
          <div><h2>ИИ становится новой основой <em>конкурентоспособности</em></h2><p className="big-copy">Искусственный интеллект меняет не отдельные инструменты, а способы работы организаций.</p></div>
          <div className="business-list">
            {[
              ["Повышайте эффективность бизнеса","Используйте ИИ там, где он помогает быстрее решать задачи, снижать затраты и улучшать результаты."],
              ["Усиливайте команду","Развивайте у сотрудников навыки, которые помогут увереннее применять ИИ в повседневной работе."],
              ["Снижайте риски внедрения","Выстраивайте работу с ИИ последовательно, чтобы избежать хаотичных экспериментов и лишних затрат."],
            ].map(([t,d],i)=><div key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
        <p className="business-summary">ИИ Чекап поможет определить стартовую точку и выбрать приоритетные направления развития вашей компании.</p>
        <div className="section-cta"><button className="button" onClick={() => scrollToForm("corporate")}>Узнай готовность твоей компании к ИИ трансформации <Arrow /></button></div>
      </section>

      <section className="section methodology" id="method">
        <div className="section-number">05 — МЕТОДОЛОГИЯ И ПРОЦЕСС</div>
        <h2>Результатам ИИ чекапа<br /><em>можно доверять</em></h2>
        <div className="method-grid">
          <article><span>01</span><h3>Тест разработан с учетом подходов ЮНЕСКО</h3><p>При разработке ИИ Чекапа учитывались международные подходы ЮНЕСКО к оценке понимания, практического применения и ответственного использования искусственного интеллекта.</p></article>
          <article><span>02</span><h3>Тест разработан ведущими экспертами российского рынка</h3><p>Методику и вопросы ИИ Чекапа создали эксперты в области искусственного интеллекта, образования и оценки компетенций с учетом российского контекста и реальных сценариев использования ИИ.</p></article>
        </div>
        <div className="expert-slider">{experts.map(([n,r,q])=><article key={n}><p>«{q}»</p><div><strong>{n}</strong><span>{r}</span></div></article>)}</div>
        <h3 className="process-title">Один простой процесс. <em>Два понятных результата</em></h3>
        <div className="process-steps">{["Зарегистрируйтесь","Ответьте на несколько вопросов о себе","Пройдите ИИ Чекап","Получите результат","Получить подарок от нашего партнера"].map((t,i)=><div key={t}><span>0{i+1}</span><p>{t}</p></div>)}</div>
        <div className="result-paths">
          <article className="path-personal"><span>Для каждого</span><h3>Вы увидите, насколько уверенно используете ИИ сегодня, какие навыки уже развиты и что стоит улучшить.</h3><p>Результат поможет:</p><ul><li>понять, куда развиваться дальше;</li><li>эффективнее решать рабочие и повседневные задачи;</li><li>экономить время на рутинных процессах;</li><li>увереннее использовать ИИ в работе и жизни;</li><li>повышать свою конкурентоспособность на рынке труда.</li></ul><button onClick={()=>scrollToForm("personal")}>Пройти персональный ИИ Чекап <Arrow /></button></article>
          <article className="path-corporate"><span>Для компаний</span><h3>Вы получите общую картину готовности компании к использованию ИИ, увидите сильные стороны и основные зоны развития.</h3><p>Результат поможет:</p><ul><li>определить, какие ИИ-компетенции важно развивать у сотрудников;</li><li>найти процессы, где ИИ может быстрее всего повысить эффективность;</li><li>выбрать приоритетные направления внедрения;</li><li>снизить риск разрозненных и неэффективных инициатив;</li><li>подготовить команду к изменениям и усилить конкурентоспособность бизнеса.</li></ul><button onClick={()=>scrollToForm("corporate")}>Пройти корпоративный ИИ Чекап <Arrow /></button></article>
        </div>
      </section>

      <section className="section outcomes">
        <div className="section-number">06 — ЧТО ВЫ ПОЛУЧИТЕ</div>
        <h2>После прохождения<br /><em>ИИ Чекапа вы получите</em></h2>
        <div className="outcome-grid">
          <article><span>Персональный ИИ Чекап</span><strong>ИИ Индекс</strong><ul><li><Check /> Персональный ИИ Индекс</li><li><Check /> оценку по каждому направлению</li><li><Check /> профиль сильных сторон и зон развития</li><li><Check /> базовые рекомендации</li><li><Check /> сертификат участника</li></ul></article>
          <article><span>Корпоративный ИИ Чекап</span><strong>ИИ Индекс</strong><ul><li><Check /> Корпоративный ИИ Индекс</li><li><Check /> оценку по каждому направлению</li><li><Check /> базовые рекомендации для организации</li><li><Check /> возможность получить подробный аналитический отчет с планом развития</li></ul></article>
        </div>
        <div className="section-cta"><button className="button" onClick={() => scrollToForm()}>Получить свой ИИ Индекс <Arrow /></button></div>
      </section>

      <section className="cta-band">
        <div><span>07 — ПОЧЕМУ СЕЙЧАС</span><h2>Поймите свою точку старта <em>уже сейчас</em></h2></div>
        <div><p>ИИ уже меняет учебу, работу и повседневную жизнь. Пройдите диагностику, чтобы определить направления дальнейшего развития.</p><p>Диагностика доступна после регистрации, а результаты можно получить сразу после прохождения.</p><ul><li>участие бесплатное;</li><li>доступ получают только зарегистрированные участники;</li><li>полезные материалы для дальнейшего знакомства с ИИ;</li><li>не требуется специальная подготовка.</li></ul><button className="button dark" onClick={() => scrollToForm()}>Зарегистрироваться <Arrow /></button></div>
      </section>

      <section className="section project">
        <div className="section-number">08 — О ПРОЕКТЕ</div>
        <div className="project-grid"><h2>Развиваем готовность к использованию <em>ИИ в России</em></h2><div><p className="big-copy">ИИ Чекап помогает людям и организациям оценить готовность к работе с искусственным интеллектом и определить направления развития.</p><h3>В контексте государственных приоритетов</h3></div></div>
        <div className="priority-grid">
          <article><h3>Развитие ИИ-компетенций</h3><p>Помогаем лучше понимать возможности, ограничения и правила безопасного использования ИИ.</p></article>
          <article><h3>Повышение эффективности</h3><p>Показываем, как ИИ может экономить время, улучшать процессы и повышать качество результатов.</p></article>
          <article><h3>Готовность к внедрению</h3><p>Помогаем организациям определить стартовую точку и приоритеты системного внедрения ИИ.</p></article>
        </div>
        <div className="project-bottom">
          <div><strong>Проект соответствует ключевым направлениям развития ИИ в России:</strong><ul><li>развитие компетенций;</li><li>повышение готовности к внедрению ИИ;</li><li>рост эффективности людей и организаций;</li><li>ответственное использование технологий.</li></ul></div>
          <div className="organizer-card"><span>Организатор</span><h3>Образовательная платформа «Цифриум»</h3><p>«Цифриум» разрабатывает корпоративные программы по искусственному интеллекту и помогает компаниям не только обучать сотрудников, но и внедрять ИИ в реальные рабочие процессы.</p></div>
        </div>
        <div className="section-cta"><button className="button" onClick={() => scrollToForm()}>Пройти ИИ Чекап <Arrow /></button></div>
      </section>

      <section className="register" id="register">
        <div className="register-copy"><div className="section-number">09 — РЕГИСТРАЦИЯ</div><h2>Регистрация</h2><p>Выберите один или оба варианта участия.</p><div className="gift"><span>✦</span><div><b>Все участники тестирования получают подарок от нашего партнера!</b></div></div></div>
        <form onSubmit={submit}>
          {sent ? <div className="success"><span>✓</span><h3>Заявка принята</h3><p>Спасибо! Мы свяжемся с вами и пришлем доступ к ИИ Чекапу.</p><button type="button" onClick={()=>setSent(false)}>Отправить еще одну</button></div> : <>
            <label>Имя<input required name="name" placeholder="Как к вам обращаться" /></label>
            <label>Электронная почта<input required type="email" name="email" placeholder="mail@example.ru" /></label>
            <label>Телефон<input required type="tel" name="phone" placeholder="+7 900 000-00-00" /></label>
            <fieldset><legend>Выбор участия</legend><label className="choice"><input type="checkbox" checked={personal} onChange={e=>setPersonal(e.target.checked)} /><span><Check /></span> ИИ Чекап персональный</label><label className="choice"><input type="checkbox" checked={corporate} onChange={e=>setCorporate(e.target.checked)} /><span><Check /></span> ИИ Чекап корпоративный</label><small>(можно выбрать оба варианта)</small></fieldset>
            <div className="consents"><label><input type="checkbox" checked={dataConsent} onChange={e=>setDataConsent(e.target.checked)} required /> Я согласен на обработку персональных данных</label><label><input type="checkbox" checked={mailConsent} onChange={e=>setMailConsent(e.target.checked)} required /> Я согласен получать письма, рассылки и специальные предложения</label></div>
            <button className="button form-button" type="submit" disabled={(!personal&&!corporate)||!dataConsent||!mailConsent}>Записаться на ИИ Чекап <Arrow /></button>
          </>}
        </form>
      </section>

      <section className="section faq" id="faq">
        <div className="section-heading"><div className="section-number">10 — ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</div><h2>Остались <em>вопросы?</em></h2><p>Собрали ответы на самые популярные вопросы об ИИ Чекапе.</p></div>
        <div className="faq-list">{faqs.map(([q,a],i)=><details key={q}><summary><span>0{i+1}</span>{q}<i>+</i></summary><p>{a}</p></details>)}</div>
        <div className="section-cta"><button className="button" onClick={() => scrollToForm()}>Записаться на ИИ Чекап <Arrow /></button></div>
      </section>

      <footer><a className="brand" href="#top"><span className="brand-mark">ИИ</span><span>ЧЕКАП</span></a><p>Диагностика готовности к работе и жизни в эпоху ИИ.</p><div><a href="#about">О проекте</a><a href="#register">Регистрация</a><a href="#faq">Вопросы</a></div><span>© 2026 Цифриум</span></footer>
    </main>
  );
}
