import { ArrowLeft } from 'lucide-react';
import { Logo } from './Logo';
import { useLang } from '../context/LangContext';

function PolicyLayout({ titleRu, titleEn, date, children }: {
  titleRu: string;
  titleEn: string;
  date: string;
  children: React.ReactNode;
}) {
  const { lang } = useLang();
  const title = lang === 'ru' ? titleRu : titleEn;

  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-line">
        <div className="container-pp py-6 flex items-center justify-between">
          <a href="/">
            <Logo width={180} />
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors"
          >
            <ArrowLeft size={14} />
            {lang === 'ru' ? 'На главную' : 'Back'}
          </a>
        </div>
      </header>

      <main className="container-pp py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <div>
            <h1 className="font-display font-medium text-display-md mb-4 lg:sticky lg:top-28">{title}</h1>
            <div className="text-sm text-muted lg:sticky lg:top-56">{date}</div>
          </div>
          <div>{children}</div>
        </div>
      </main>

      <footer className="border-t border-line">
        <div className="container-pp py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted">
          <div>© {new Date().getFullYear()} DOVOD Partners. {lang === 'ru' ? 'Все права защищены.' : 'All rights reserved.'}</div>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <a href="/confidentiality" className="hover:text-ink transition-colors">
              {lang === 'ru' ? 'Политика конфиденциальности' : 'Privacy policy'}
            </a>
            <a href="/term-of-use" className="hover:text-ink transition-colors">
              {lang === 'ru' ? 'Пользовательское соглашение' : 'Terms of use'}
            </a>
            <a href="/ethics" className="hover:text-ink transition-colors">
              {lang === 'ru' ? 'Кодекс деловой этики' : 'Code of ethics'}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Block({ question, answer }: { question: string; answer: React.ReactNode }) {
  return (
    <div className="py-8 border-b border-line-strong">
      <div className="text-xs uppercase tracking-[0.18em] text-accent mb-3">{question}</div>
      <div className="text-ink/80 leading-relaxed">{answer}</div>
    </div>
  );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="underline underline-offset-2 hover:text-accent transition-colors">
      {children}
    </a>
  );
}

export function ConfidentialityPage() {
  const { lang } = useLang();

  if (lang === 'en') return <ConfidentialityEn />;
  return <ConfidentialityRu />;
}

function ConfidentialityRu() {
  return (
    <PolicyLayout titleRu="Политика конфиденциальности" titleEn="Privacy Policy" date="Редакция от 27 мая 2025 г.">
      <div className="py-8 border-b border-line-strong">
        <p className="text-ink/80 leading-relaxed">
          Даже там, где формальных обязательств нет, мы придерживаемся высоких стандартов
          обращения с данными. Сайт спроектирован так, чтобы не собирать персональные данные
          в принципе — это осознанный выбор, а не упущение. Наш подход соответствует требованиям
          Федерального закона № 152-ФЗ (Россия), General Data Protection Regulation (GDPR, ЕС),
          Data Protection Act (Великобритания) и UAE Personal Data Protection Law
          (Federal Decree-Law No. 45 of 2021). Конфиденциальность для нас — не юридическая
          формальность, а часть того, как мы работаем.
        </p>
      </div>

      <Block question="Коротко — что здесь происходит с моими данными?" answer={<>
        <p>Ничего намеренного. Сайт не собирает персональные данные: здесь нет форм регистрации,
        нет аналитических трекеров, нет рекламных пикселей и нет куки-файлов, которые следят
        за вашим поведением. Единственное, что технически фиксируется — стандартные серверные
        логи хостинг-провайдера: IP-адрес, дата и время обращения, тип браузера и запрошенный
        URL. Это происходит автоматически на уровне инфраструктуры. Мы к этим логам доступа не имеем.</p>
      </>} />

      <Block question="А если я напишу вам на почту или в Telegram?" answer={<>
        <p>Тогда мы будем знать ровно то, что вы сами сообщите: имя, контакт и содержание вашего
        запроса. Эти данные используются исключительно для ответа на обращение. Мы не вносим их
        в CRM, не добавляем в рассылки и не передаём третьим лицам. Содержание переписки, связанной
        с юридической задачей, защищено нашим кодексом деловой этики.</p>
      </>} />

      <Block question="На каком основании вы обрабатываете данные?" answer={<>
        <p>Серверное логирование осуществляется на основании законного интереса оператора
        инфраструктуры — ст. 6(1)(f) GDPR, ст. 6 Федерального закона № 152-ФЗ и ст. 8 PDPL ОАЭ.
        Прямая переписка обрабатывается на основании ваших собственных действий. Мы не запрашиваем
        данные сверх необходимого.</p>
      </>} />

      <Block question="Вы передаёте данные кому-то ещё?" answer={<>
        <p>Нет. Мы не продаём, не передаём и не раскрываем персональные данные третьим лицам.
        Если для работы над задачей потребуется привлечь внешнего советника — это согласовывается
        с вами заранее и только в необходимом объёме.</p>
      </>} />

      <Block question="Есть ли на сайте куки?" answer={<>
        <p>Собственных куки-файлов сайт не устанавливает. Мы не используем инструменты
        веб-аналитики, пиксели социальных сетей или любые другие скрипты отслеживания поведения.</p>
      </>} />

      <Block question="Как долго хранятся данные?" answer={<>
        <p>Серверные логи хранятся провайдером, как правило, от нескольких недель до нескольких
        месяцев. Переписку с нашей стороны удалим по вашему запросу в разумные сроки, если это
        не противоречит профессиональным обязательствам.</p>
      </>} />

      <Block question="Какие у меня права?" answer={<>
        <p>Вы вправе запросить доступ к данным, их исправление или удаление, ограничить или
        возразить против обработки. В ЕС/ЕЭЗ — GDPR (ст. 15–22), в России — 152-ФЗ (ст. 14–17),
        в ОАЭ — PDPL (ст. 13–16).</p>
        <p className="mt-3">Напишите нам: <Link href="mailto:info@dovod.partners">info@dovod.partners</Link>.
        Ответим в течение 30 дней.</p>
      </>} />

      <Block question="Где физически хранятся данные?" answer={<>
        <p>Серверные логи могут обрабатываться в дата-центрах за пределами вашей страны — мы не
        контролируем географию инфраструктуры провайдера. Если для вас это принципиально —
        уточните у провайдера напрямую.</p>
      </>} />

      <Block question="Как вы защищаете данные в переписке?" answer={<>
        <p>Мы готовы общаться через любой удобный вам канал. Если у вас есть требования к уровню
        защиты коммуникации — скажите об этом при первом обращении, мы подстроимся. Доступ к
        переписке имеет ограниченный круг лиц.</p>
      </>} />

      <Block question="Политика может меняться?" answer={<>
        <p>Да, если изменится характер обработки данных. Актуальная версия всегда доступна по
        адресу <Link href="/confidentiality">dovod.partners/confidentiality</Link>.</p>
      </>} />
    </PolicyLayout>
  );
}

function ConfidentialityEn() {
  return (
    <PolicyLayout titleRu="Политика конфиденциальности" titleEn="Privacy Policy" date="Last updated: 27 May 2025">
      <div className="py-8 border-b border-line-strong">
        <p className="text-ink/80 leading-relaxed">
          Even where no formal obligations apply, we maintain high standards in how we handle data.
          This site was deliberately designed not to collect personal data — by choice, not by
          oversight. Our approach is consistent with the General Data Protection Regulation (GDPR,
          EU/EEA), the Data Protection Act (UK) and the UAE Personal Data Protection Law
          (Federal Decree-Law No. 45 of 2021). Privacy is not a legal formality for us — it is
          part of how we operate.
        </p>
      </div>

      <Block question="In plain terms — what happens to my data here?" answer={<>
        <p>Nothing intentional. The site does not collect personal data: no registration forms,
        no analytics trackers, no advertising pixels, no behavioural tracking cookies. The only
        data technically recorded are standard server logs kept by the hosting provider — IP
        address, timestamp, browser type and requested URL. This happens automatically at the
        infrastructure level. We do not have access to these logs.</p>
      </>} />

      <Block question="What if I email you or write on Telegram?" answer={<>
        <p>Then we will know exactly what you choose to share: your name, contact details and the
        content of your message. This information is used solely to respond to your enquiry. We do
        not enter it into a CRM, add you to mailing lists or pass it to third parties. The content
        of any legally-related communication is additionally protected by our code of ethics.</p>
      </>} />

      <Block question="What is the legal basis for processing?" answer={<>
        <p>Server logging is carried out on the basis of the hosting provider's legitimate interest
        in infrastructure security — Art. 6(1)(f) GDPR and Art. 8 UAE PDPL. Direct correspondence
        is processed on the basis of your own actions in initiating contact. We do not request data
        beyond what is needed.</p>
      </>} />

      <Block question="Do you share data with anyone?" answer={<>
        <p>No. We do not sell, transfer or disclose personal data to third parties. If work on a
        specific matter requires involving external counsel, this will be agreed with you in advance
        and only to the extent necessary.</p>
      </>} />

      <Block question="Does the site use cookies?" answer={<>
        <p>No proprietary cookies are set. We do not use web analytics tools, social media pixels
        or any other behavioural tracking scripts.</p>
      </>} />

      <Block question="How long is data retained?" answer={<>
        <p>Server logs are retained by the provider, typically for a few weeks to a few months.
        Correspondence on our side will be deleted on request within a reasonable timeframe,
        unless professional obligations require otherwise.</p>
      </>} />

      <Block question="What are my rights?" answer={<>
        <p>You have the right to access, correct or delete data we hold about you, and to restrict
        or object to its processing. In the EU/EEA — GDPR (Arts. 15–22); in the UAE — PDPL
        (Arts. 13–16); in the UK — UK GDPR / DPA 2018.</p>
        <p className="mt-3">Write to us: <Link href="mailto:info@dovod.partners">info@dovod.partners</Link>.
        We will respond within 30 days.</p>
      </>} />

      <Block question="Where is data physically stored?" answer={<>
        <p>Server logs may be processed in data centres outside your country — we do not control
        the provider's infrastructure geography. If this is important to you, please check with the
        provider directly.</p>
      </>} />

      <Block question="How do you protect communications?" answer={<>
        <p>We are happy to communicate via any channel you prefer. If you have specific security
        requirements, let us know at first contact and we will accommodate. Access to correspondence
        is limited to a small number of people.</p>
      </>} />

      <Block question="Can this policy change?" answer={<>
        <p>Yes, if the nature of data processing changes. The current version is always available
        at <Link href="/confidentiality">dovod.partners/confidentiality</Link>.</p>
      </>} />
    </PolicyLayout>
  );
}

export function TermsPage() {
  const { lang } = useLang();
  if (lang === 'en') return <TermsEn />;
  return <TermsRu />;
}

function TermsRu() {
  return (
    <PolicyLayout titleRu="Пользовательское соглашение" titleEn="Terms of Use" date="Редакция от 27 мая 2025 г.">
      <Block question="Что это за документ?" answer="Базовые условия использования сайта dovod.partners. Ничего неожиданного — просто фиксируем очевидное." />
      <Block question="Сайт — это консультация?" answer="Нет. Тексты на сайте носят информационный характер и не являются юридической консультацией. Правовые отношения возникают только после подписания отдельного соглашения об оказании услуг." />
      <Block question="Можно ли использовать материалы сайта?" answer="Тексты, логотип и дизайн принадлежат DOVOD Partners. Если хотите что-то процитировать или использовать — напишите нам, обычно мы не против при указании источника." />
      <Block question="Что если сайт недоступен или что-то пошло не так?" answer="Мы не несём ответственности за технические сбои, действия третьих лиц и решения, принятые на основании материалов сайта без заключения соглашения об услугах." />
      <Block question="По какому праву и где решаются споры?" answer="Споры решаются переговорами. Если не договорились — в компетентном суде или арбитраже по соглашению сторон. Применимое право — юрисдикции регистрации DOVOD Partners." />
      <Block question="Соглашение может меняться?" answer={<>Да, актуальная версия всегда по адресу <Link href="/term-of-use">dovod.partners/term-of-use</Link> с датой последней редакции.</>} />
    </PolicyLayout>
  );
}

function TermsEn() {
  return (
    <PolicyLayout titleRu="Пользовательское соглашение" titleEn="Terms of Use" date="Last updated: 27 May 2025">
      <Block question="What is this document?" answer="The basic terms for using dovod.partners. Nothing unexpected — just setting out the obvious." />
      <Block question="Is the site a legal consultation?" answer="No. The content on this site is informational only and does not constitute legal advice. A legal relationship arises only upon execution of a separate engagement agreement." />
      <Block question="Can I use materials from the site?" answer="Texts, logo and design belong to DOVOD Partners. If you wish to quote or use something — write to us; we are generally fine with it when the source is credited." />
      <Block question="What if the site is unavailable or something goes wrong?" answer="We are not liable for technical failures, third-party actions or decisions made on the basis of site content without an engagement agreement in place." />
      <Block question="Which law governs disputes?" answer="Disputes are resolved by negotiation first. If that fails — before a competent court or arbitral tribunal by agreement of the parties. Governing law is the jurisdiction of DOVOD Partners' registration." />
      <Block question="Can these terms change?" answer={<>Yes, the current version is always at <Link href="/term-of-use">dovod.partners/term-of-use</Link> with the date of the last update.</>} />
    </PolicyLayout>
  );
}
