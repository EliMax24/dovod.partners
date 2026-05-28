import { ArrowLeft } from 'lucide-react';
import { Logo } from './Logo';
import { useLang } from '../context/LangContext';

function Layout({ titleRu, titleEn, date, children }: {
  titleRu: string;
  titleEn: string;
  date: string;
  children: React.ReactNode;
}) {
  const { lang } = useLang();

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
            <h1 className="font-display font-medium text-display-md mb-4 lg:sticky lg:top-28">
              {lang === 'ru' ? titleRu : titleEn}
            </h1>
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
      <div className="text-ink/80 leading-relaxed space-y-4">{answer}</div>
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

export function EthicsPage() {
  const { lang } = useLang();
  if (lang === 'en') return <EthicsEn />;
  return <EthicsRu />;
}

function EthicsRu() {
  return (
    <Layout titleRu="Кодекс деловой этики" titleEn="Code of Ethics" date="Вступил в силу 9 апреля 2025 г.">
      <div className="py-8 border-b border-line-strong">
        <p className="text-ink/80 leading-relaxed">
          Это не формальный документ ради галочки. Здесь описано то, как мы на самом деле работаем
          — и чего вы вправе от нас ожидать.
        </p>
      </div>

      <Block question="Чьи интересы на первом месте?" answer={<>
        <p>Ваши. Мы действуем добросовестно, предлагаем решения, которые реально работают, а не те,
        что удобны нам. Если задача выходит за пределы нашей компетенции или взяться за неё без
        конфликта интересов не получится — скажем об этом прямо, до начала работы.</p>
        <p>Мы не беремся за проекты, где не можем обеспечить нужный уровень качества и вовлечённости.
        Лучше отказаться на старте, чем подвести в процессе.</p>
      </>} />

      <Block question="Вы говорите то, что думаете?" answer={<>
        <p>Да — даже если это не то, что хочется услышать. Реалистичная оценка рисков и перспектив
        важнее комфортного ответа. Вы всегда получаете полную картину, включая ограничения и
        неопределённости.</p>
        <p>Стоимость услуг обсуждается открыто до начала работы. Никаких скрытых платежей и
        неожиданных счётов.</p>
      </>} />

      <Block question="Что происходит с тем, что я вам рассказываю?" answer={<>
        <p>Всё, что вы сообщаете нам в рамках переговоров или работы над проектом, остаётся строго
        конфиденциальным. Это обязательство не имеет срока давности — оно сохраняется и после
        завершения сотрудничества.</p>
        <p>Мы не используем информацию одного клиента в интересах другого или третьих лиц. Если для
        работы над задачей потребуется привлечь внешнего советника — это согласовывается с вами
        заранее и только в необходимом объёме.</p>
        <p>Подробнее — в нашей <Link href="/confidentiality">Политике конфиденциальности</Link>.</p>
      </>} />

      <Block question="Как вы избегаете конфликта интересов?" answer={<>
        <p>Мы не беремся за дело, если наши интересы или интересы другого клиента могут противоречить
        вашим. Если потенциальный конфликт обнаружится в процессе — сообщим немедленно и либо
        устраним его, либо выйдем из проекта.</p>
        <p>Наши рекомендации независимы. Если в конкретном проекте возникает ситуация, где наш
        финансовый интерес может влиять на совет, — раскрываем это заранее.</p>
      </>} />

      <Block question="Что если вопрос выходит за вашу экспертизу?" answer={<>
        <p>Скажем об этом честно. Если задача требует узкоспециализированной экспертизы в конкретной
        юрисдикции — привлечём проверенных локальных советников и возьмём на себя координацию,
        сохраняя ответственность за итог.</p>
        <p>Партнёр лично участвует в каждом проекте на всех ключевых этапах — от диагностики до
        закрытия. Вы работаете с тем, с кем начали.</p>
      </>} />

      <Block question="Как вы работаете с законодательными ограничениями?" answer={<>
        <p>Строго в рамках применимого права. Мы не оказываем содействия в действиях, нарушающих
        закон, — независимо от юрисдикции и коммерческой привлекательности задачи.</p>
        <p>В вопросах санкционного комплаенса придерживаемся консервативного подхода: не беремся за
        проекты, где санкционный риск нельзя структурно митигировать.</p>
      </>} />

      <Block question="Что если что-то пошло не так?" answer={<>
        <p>Напишите нам напрямую: <Link href="mailto:info@dovod.partners">info@dovod.partners</Link>.
        Если ситуация, по вашему мнению, противоречит принципам этого Кодекса — хотим об этом знать
        и разобраться.</p>
        <p>Кодекс может обновляться. Актуальная версия доступна по адресу{' '}
        <Link href="/ethics">dovod.partners/ethics</Link>.</p>
      </>} />
    </Layout>
  );
}

function EthicsEn() {
  return (
    <Layout titleRu="Кодекс деловой этики" titleEn="Code of Ethics" date="In force from 9 April 2025">
      <div className="py-8 border-b border-line-strong">
        <p className="text-ink/80 leading-relaxed">
          This is not a box-ticking document. It describes how we actually work — and what you
          are entitled to expect from us.
        </p>
      </div>

      <Block question="Whose interests come first?" answer={<>
        <p>Yours. We act in good faith and recommend solutions that genuinely work — not solutions
        that are convenient for us. If a matter falls outside our competence, or if we cannot take
        it on without a conflict of interest, we will say so clearly before we start.</p>
        <p>We do not take on projects where we cannot deliver the quality and engagement required.
        It is better to decline at the outset than to let a client down in the process.</p>
      </>} />

      <Block question="Do you say what you actually think?" answer={<>
        <p>Yes — even when it is not what the client wants to hear. A realistic assessment of risks
        and prospects matters more than a comfortable answer. You always get the full picture,
        including limitations and uncertainties.</p>
        <p>Fees are discussed openly before work begins. No hidden charges, no surprise invoices.</p>
      </>} />

      <Block question="What happens to what I tell you?" answer={<>
        <p>Everything you share in the course of negotiations or project work remains strictly
        confidential. This obligation has no expiry — it continues after the engagement ends.</p>
        <p>We do not use one client's information in the interests of another client or third
        parties. If work on a matter requires involving external counsel, this is agreed with you
        in advance and only to the necessary extent.</p>
        <p>More detail in our <Link href="/confidentiality">Privacy Policy</Link>.</p>
      </>} />

      <Block question="How do you handle conflicts of interest?" answer={<>
        <p>We do not take on a matter if our interests or another client's interests may conflict
        with yours. If a potential conflict emerges during the engagement, we will flag it
        immediately and either resolve it or step back from the project.</p>
        <p>Our advice is independent. If a situation arises in a specific project where a financial
        interest of ours could influence our recommendation, we disclose this upfront.</p>
      </>} />

      <Block question="What if the matter is outside your expertise?" answer={<>
        <p>We will say so. If a matter requires specialist expertise in a particular jurisdiction,
        we bring in trusted local counsel and take responsibility for coordinating their work and
        the overall outcome.</p>
        <p>The partner is personally involved at every key stage of every engagement — from
        diagnosis to closing. You work with who you started with.</p>
      </>} />

      <Block question="How do you approach legal and regulatory constraints?" answer={<>
        <p>Strictly within the bounds of applicable law. We do not assist with actions that violate
        the law — regardless of jurisdiction or commercial attractiveness.</p>
        <p>On sanctions compliance, we take a conservative approach: we do not take on projects
        where sanctions risk cannot be structurally mitigated.</p>
      </>} />

      <Block question="What if something goes wrong?" answer={<>
        <p>Write to us directly: <Link href="mailto:info@dovod.partners">info@dovod.partners</Link>.
        If you believe a situation is inconsistent with the principles in this Code, we want to
        know and we will address it.</p>
        <p>This Code may be updated. The current version is always at{' '}
        <Link href="/ethics">dovod.partners/ethics</Link>.</p>
      </>} />
    </Layout>
  );
}
