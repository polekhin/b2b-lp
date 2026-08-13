"use client";

import { FormEvent, useState } from "react";

type Expert = { name: string; initials: string; role: string };
type Bundle = {
  id: string;
  index: string;
  name: string;
  subtitle: string;
  audience: string;
  task: string;
  result: string;
  accent: string;
  modules: string[];
  experts: Expert[];
};

const experts: Record<string, Expert> = {
  vostrov: { name: "Никита Востров", initials: "НВ", role: "Наставничество и развитие экспертов" },
  vostrikov: { name: "Никита Востриков", initials: "НВ", role: "Прикладные инструменты ИИ" },
  prihoda: { name: "Артем Прихода", initials: "АП", role: "Вайбкодинг и цифровые решения" },
  sidoryuk: { name: "Алексей Сидорюк", initials: "АС", role: "ИИ- и цифровая трансформация" },
  volkova: { name: "Мария Волкова", initials: "МВ", role: "AI-маркетинг и автоматизация контента" },
  nesterov: { name: "Илья Нестеров", initials: "ИН", role: "Генеративная графика и видео" },
};

const bundles: Bundle[] = [
  {
    id: "start", index: "01", name: "AI Start", subtitle: "ИИ для каждого сотрудника", accent: "mint",
    audience: "Все сотрудники и офисные специалисты",
    task: "Быстро внедрить ИИ в ежедневную работу и повысить личную производительность.",
    result: "Сотрудники уверенно применяют ИИ и экономят до 1–2 часов в день.",
    modules: ["Мастерство промпт-инжиниринга", "ИИ для деловой переписки", "ИИ для презентаций", "ИИ-агенты для личного применения"],
    experts: [experts.vostrikov, experts.sidoryuk],
  },
  {
    id: "office", index: "02", name: "AI Office", subtitle: "Цифровой офис без рутины", accent: "violet",
    audience: "Back-office, бухгалтерия, юристы, HR и административные службы",
    task: "Автоматизировать рутинные операции и документооборот без разработки собственного ПО.",
    result: "Быстрее обрабатываются документы, снижается количество ошибок и ручной работы.",
    modules: ["ИИ для документооборота", "ИИ для обработки аудио", "ИИ для финансового анализа", "ИИ для языкового перевода", "Анализ юридических документов"],
    experts: [experts.vostrikov],
  },
  {
    id: "hr", index: "03", name: "AI HR", subtitle: "Современный HR на базе ИИ", accent: "orange",
    audience: "HRD, HRBP, L&D и корпоративные университеты",
    task: "Ускорить адаптацию и развитие сотрудников, сохранить знания внутри компании.",
    result: "Современная система обучения и развития при меньшей операционной нагрузке на HR.",
    modules: ["Наставничество 2.0", "ИИ в создании обучающих материалов", "Корпоративные чат-боты", "ИИ-агенты для HR", "Мастерство промпт-инжиниринга"],
    experts: [experts.vostrov, experts.vostrikov, experts.sidoryuk],
  },
  {
    id: "leadership", index: "04", name: "AI Leadership", subtitle: "ИИ для руководителей", accent: "blue",
    audience: "CEO, директора и руководители подразделений",
    task: "Повысить эффективность управления и скорость принятия решений.",
    result: "Руководители используют ИИ как инструмент управления бизнесом и поиска точек роста.",
    modules: ["Вайбкодинг для управленцев", "ИИ-трансформация организации", "Цифровая трансформация", "Кибербезопасность", "ИИ-агенты для руководителя"],
    experts: [experts.prihoda, experts.sidoryuk],
  },
  {
    id: "knowledge", index: "05", name: "AI Knowledge", subtitle: "Управление знаниями и развитие экспертов", accent: "yellow",
    audience: "Производственные и инженерные компании, корпоративные университеты",
    task: "Сохранить критически важные знания и ускорить развитие новых специалистов.",
    result: "Система передачи экспертизы, которая не зависит от отдельных сотрудников.",
    modules: ["Наставничество 2.0", "Создание интеллектуальных чат-ботов", "ИИ в создании обучающих материалов"],
    experts: [experts.vostrov, experts.vostrikov],
  },
  {
    id: "marketing", index: "06", name: "AI Marketing", subtitle: "Маркетинг на базе ИИ", accent: "pink",
    audience: "Директора по маркетингу, бренд-менеджеры, контент- и SMM-команды, PR и digital-маркетологи",
    task: "Ускорить производство маркетингового контента, повысить эффективность кампаний и автоматизировать рутинные операции.",
    result: "Команда выстраивает сквозной AI-процесс: от идеи и текста до готовых графических, аудио- и видеоматериалов.",
    modules: ["Мастерство промпт-инжиниринга", "ИИ для маркетинговых текстов и деловой переписки", "ИИ для презентаций и визуального контента", "ИИ в обработке аудио", "ИИ-агенты для автоматизации маркетинга", "Практикум по созданию графики и видео с помощью ИИ"],
    experts: [experts.vostrikov, experts.volkova, experts.nesterov],
  },
];

const paths = [
  ["Всем сотрудникам", "AI Start", "start"],
  ["Офисным функциям", "AI Office", "office"],
  ["HR и L&D", "AI HR", "hr"],
  ["Руководителям", "AI Leadership", "leadership"],
  ["Экспертным командам", "AI Knowledge", "knowledge"],
  ["Маркетингу и PR", "AI Marketing", "marketing"],
];

export default function Landing() {
  const [selected, setSelected] = useState("");
  const [sent, setSent] = useState(false);

  function choose(name: string) {
    setSelected(name);
    document.getElementById("request")?.scrollIntoView({ behavior: "smooth" });
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Цифриум — на главную"><span>Цифриум</span><b>Корпоративное обучение</b></a>
        <nav><a href="#assessment">ИИ Ассессмент</a><a href="#programs">Программы</a><a href="#process">Как проходит</a><a href="#request">Оставить заявку</a></nav>
        <a className="top-cta" href="#request">Обсудить задачу <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker"><i /> Корпоративные программы · 2026</p>
          <h1>Повышайте эффективность бизнеса<br/><em>с помощью ИИ</em></h1>
          <p className="hero-lead">Диагностируем текущее состояние бизнеса, обучаем команды и меняем процессы. Доводим внедрение ИИ до измеримого бизнес-результата и отвечаем за его достижение.</p>
          <div className="hero-actions"><a className="button dark" href="#assessment">Начать с диагностики <span>↓</span></a><a className="text-link" href="#programs">Выбрать программу <span>→</span></a></div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="core"><span>AI</span><small>WORK<br/>SKILLS</small></div>
          <div className="float-card card-a"><b className="card-title">Полноценный<br/>ИИ Ассессмент</b></div>
          <div className="float-card card-b"><b className="card-title">6 готовых траекторий<br/>развития команд</b></div>
          <div className="float-card card-c"><b className="card-title">Измеримый результат<br/>для бизнеса</b></div>
          <div className="spark s1">✦</div><div className="spark s2">✦</div>
        </div>
        <div className="hero-foot"><span>ИИ Ассессмент для всей организации</span><span>6 программ для конкретных задач</span><span>Решения на основе фактов и практики</span></div>
      </section>

      <section className="assessment section-pad" id="assessment">
        <div className="assessment-intro">
          <p className="kicker light"><i /> Если пока нет ясной картины</p>
          <span className="assessment-tag">Отдельный продукт</span>
          <h2>ИИ<br/><em>Ассессмент</em></h2>
          <p className="assessment-lead">Комплексная диагностика способности компании получать измеримую пользу от ИИ и управлять связанными рисками.</p>
          <button className="assessment-cta" onClick={()=>choose("ИИ Ассессмент — комплексная диагностика организации")}>Обсудить ассессмент <span>↗</span></button>
        </div>
        <div className="assessment-body">
          <div className="assessment-question"><span>Главный результат</span><h3>Где мы находимся, куда двигаться и что сделать первым?</h3><p>Не формальный рейтинг зрелости, а доказательная картина текущего состояния и приоритизированная программа развития ИИ на 6–12 месяцев.</p></div>
          <div className="assessment-sources"><span>Диагностика объединяет</span><ul><li>ИИ Чекап и практические задания сотрудников</li><li>Интервью с руководителями и владельцами процессов</li><li>Анализ процессов, ИИ-кейсов и внутренних документов</li><li>Верификацию выводов с рабочей группой</li></ul></div>
          <div className="assessment-results"><article><b>01</b><span>ИИ Индекс и профиль зрелости</span></article><article><b>02</b><span>Карта разрывов и возможностей</span></article><article><b>03</b><span>Карта рисков</span></article><article><b>04</b><span>Дорожная карта на 6–12 месяцев</span></article></div>
          <div className="assessment-meta"><span><b>7</b> направлений оценки</span><span><b>4–8</b> недель полного цикла</span><span><b>3</b> этапа реализации</span></div>
        </div>
      </section>

      <section className="navigator section-pad">
        <div className="section-head"><p className="kicker"><i /> Если задача уже понятна</p><h2>Выберите программу<br/>под конкретную цель</h2><p>Шесть практических маршрутов для сотрудников, руководителей и функциональных команд.</p></div>
        <div className="path-list">{paths.map(([label, program, id], i)=><a href={`#${id}`} key={id}><span>{String(i+1).padStart(2,"0")}</span><b>{label}</b><em>{program}</em><i>↘</i></a>)}</div>
      </section>

      <section className="programs section-pad" id="programs">
        <div className="section-head inverse"><p className="kicker"><i /> Каталог</p><h2>Шесть маршрутов<br/>к прикладному ИИ</h2><p>Каждая программа адаптируется под процессы, отрасль и уровень подготовки вашей команды.</p></div>
        <div className="bundle-grid">
          {bundles.map(bundle=><article className={`bundle ${bundle.accent}`} id={bundle.id} key={bundle.id}>
            <div className="bundle-top"><span>{bundle.index}</span><small>{bundle.audience}</small></div>
            <h3>{bundle.name}</h3><h4>{bundle.subtitle}</h4>
            <p className="task">{bundle.task}</p>
            <div className="result"><span>Результат</span><p>{bundle.result}</p></div>
            <details><summary>Состав программы <span>+</span></summary><ul>{bundle.modules.map(module=><li key={module}>{module}</li>)}</ul></details>
            <div className="experts"><span className="experts-label">Эксперты программы</span><div>{bundle.experts.map((expert, i)=><div className="expert" key={expert.name}><span className={`avatar avatar-${i}`}>{expert.initials}</span><p><b>{expert.name}</b><small>{expert.role}</small></p></div>)}</div></div>
            <button className="bundle-cta" onClick={()=>choose(`${bundle.name} — ${bundle.subtitle}`)}>Обсудить программу <span>→</span></button>
          </article>)}
        </div>
      </section>

      <section className="process section-pad" id="process">
        <div className="section-head"><p className="kicker"><i /> Подход</p><h2>От задачи —<br/>к рабочему решению</h2></div>
        <div className="steps">{[
          ["01","Диагностика","Определяем задачи команды и текущий уровень использования ИИ."],
          ["02","Адаптация","Настраиваем программу и практику под материалы компании."],
          ["03","Обучение","Участники осваивают инструменты на реальных рабочих кейсах."],
          ["04","Внедрение","Фиксируем готовые сценарии и рекомендации по масштабированию."],
        ].map(step=><article key={step[0]}><span>{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></article>)}</div>
      </section>

      <section className="outcomes section-pad">
        <div><p className="kicker light"><i /> Для компании</p><h2>Не обзорные лекции.<br/><em>Конкретные изменения.</em></h2></div>
        <ul><li>Готовые рабочие сценарии применения ИИ</li><li>Сокращение времени на регулярные операции</li><li>Повышение качества документов и коммуникаций</li><li>Возможность масштабировать обучение на подразделения</li></ul>
      </section>

      <section className="request section-pad" id="request">
        <div className="request-copy"><p className="kicker"><i /> Следующий шаг</p><h2>Подберем программу<br/>под вашу компанию</h2><p>Расскажите о задаче и составе команды. Мы предложим формат обучения и подготовим программу.</p><div className="reply"><b>1 рабочий день</b><span>срок ответа<br/>на заявку</span></div></div>
        {sent ? <div className="success"><span>✓</span><h3>Заявка принята</h3><p>Спасибо! Данные сохранены в текущей сессии. Для рабочего запуска форму можно подключить к CRM или корпоративной почте.</p><button onClick={()=>setSent(false)}>Отправить еще одну</button></div> :
        <form onSubmit={submit}>
          <label><span>Ваше имя *</span><input name="name" required placeholder="Как к вам обращаться" /></label>
          <div className="form-row"><label><span>Компания *</span><input name="company" required placeholder="Название компании" /></label><label><span>Должность</span><input name="position" placeholder="Ваша роль" /></label></div>
          <div className="form-row"><label><span>Телефон *</span><input name="phone" type="tel" required placeholder="+7 999 000-00-00" /></label><label><span>Корпоративная почта *</span><input name="email" type="email" required placeholder="name@company.ru" /></label></div>
          <label><span>Интересующий продукт</span><select value={selected} onChange={e=>setSelected(e.target.value)}><option value="">Помогите подобрать</option><option>ИИ Ассессмент — комплексная диагностика организации</option>{bundles.map(b=><option key={b.id}>{b.name} — {b.subtitle}</option>)}</select></label>
          <div className="form-row"><label><span>Количество участников</span><select><option>До 10</option><option>До 20</option><option>До 50</option><option>Более 50</option></select></label><label><span>Задача</span><input placeholder="Коротко о задаче" /></label></div>
          <label className="agree"><input type="checkbox" required/><span>Согласен на обработку персональных данных</span></label>
          <button className="submit" type="submit">Получить предложение <span>↗</span></button>
        </form>}
      </section>

      <footer><div className="brand"><span>Цифриум</span><b>Корпоративное обучение</b></div><p>Практические программы развития AI-компетенций</p><a href="#top">Наверх ↑</a></footer>
    </main>
  );
}
