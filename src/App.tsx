import {
  ArrowUpRight,
  CalendarCheck,
  Clock3,
  Download,
  Instagram,
  MapPin,
  MessageCircle,
  Navigation,
  Scissors,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";

const appLink =
  "https://play.google.com/store/apps/details?id=com.jftechno.JPCBarbearia";
const instagramLink = "https://www.instagram.com/jacksonpreparacaodecabelo/";
const whatsappLink = "https://wa.me/5562994967153";
const address =
  "Rua Gumercindo Nascimento, esquina com rua Ary Valadão Qd.2-i Lt.13 Sala 3";
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  address,
)}`;

const services = [
  { name: "Corte Degradê", category: "Cabelo", price: "R$40,00" },
  { name: "Corte com desenho", category: "Cabelo", price: "R$45,00" },
  { name: "Corte navalhado", category: "Cabelo", price: "R$40,00" },
  { name: "Barba", category: "Barba", price: "R$35,00" },
  { name: "Sobrancelha", category: "Acabamento", price: "R$20,00" },
  { name: "Corte, Barba", category: "Combo", price: "R$70,00" },
  {
    name: "Corte, Barba, Sobrancelha, Penteado",
    category: "Combo completo",
    price: "R$80,00",
  },
  { name: "Corte e Progressiva", category: "Tratamento", price: "R$100,00" },
];

const appSteps = [
  {
    icon: CalendarCheck,
    title: "Escolha o horário",
    text: "Abra o app, confira os horários disponíveis e marque sem depender de ida até a loja.",
  },
  {
    icon: Users,
    title: "Selecione o barbeiro",
    text: "Agende com Jackson ou Samuel e chegue sabendo quem vai cuidar do seu visual.",
  },
  {
    icon: ShieldCheck,
    title: "Chegue no grau",
    text: "Corte, barba, sobrancelha e tratamento com atendimento direto, local e caprichado.",
  },
];

const barbers = [
  {
    name: "Jackson",
    role: "Preparação, corte e acabamento",
    text: "A mão da casa: visual alinhado, atendimento próximo e identidade forte sem perder o cuidado.",
  },
  {
    name: "Samuel",
    role: "Degradê, barba e detalhe",
    text: "Precisão no acabamento e leitura do estilo de cada cliente, do social ao mais marcado.",
  },
];

function ExternalLink({
  href,
  children,
  className = "",
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

export function App() {
  return (
    <main>
      <header className="site-header" aria-label="Navegacao principal">
        <a className="brand" href="#inicio" aria-label="Jackson Preparações">
          <img src="/assets/jackson-logo.jpg" alt="" />
          <span>
            <strong>Jackson</strong>
            <small>Preparações</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Seções">
          <a href="#app">App</a>
          <a href="#servicos">Serviços</a>
          <a href="#barbeiros">Barbeiros</a>
          <a href="#contato">Contato</a>
        </nav>

        <ExternalLink className="header-cta" href={appLink}>
          <Download size={18} aria-hidden="true" />
          Baixar app
        </ExternalLink>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Barbearia de bairro • identidade street</p>
          <h1>Jackson Preparações</h1>
          <p className="hero-copy">
            Corte no capricho, agenda na palma da mão e uma casa com postura
            de quebrada sem pesar a mão no personagem.
          </p>
          <div className="hero-actions" aria-label="Acoes principais">
            <ExternalLink className="button button-primary" href={appLink}>
              <Smartphone size={20} aria-hidden="true" />
              Agendar pelo app
            </ExternalLink>
            <ExternalLink className="button button-ghost" href={whatsappLink}>
              <MessageCircle size={20} aria-hidden="true" />
              Chamar no WhatsApp
            </ExternalLink>
          </div>
        </div>
        <div className="hero-meta" aria-label="Resumo da barbearia">
          <span>09:00 - 21:00</span>
          <span>Jackson e Samuel</span>
          <span>Rua Gumercindo Nascimento</span>
        </div>
      </section>

      <section id="app" className="section section-app">
        <div className="section-inner app-layout">
          <div>
            <p className="eyebrow">Agendamento direto</p>
            <h2>Baixe o app e marque seu horário sem enrolação</h2>
            <p className="section-copy">
              O app Jackson Preparações de Cabelo concentra a agenda da casa:
              escolha profissional, data e horário com rapidez para chegar no
              atendimento já encaminhado.
            </p>
            <div className="inline-actions">
              <ExternalLink className="button button-primary" href={appLink}>
                <Download size={20} aria-hidden="true" />
                Abrir na Play Store
              </ExternalLink>
              <ExternalLink className="text-link" href={instagramLink}>
                Ver Instagram
                <ArrowUpRight size={18} aria-hidden="true" />
              </ExternalLink>
            </div>
          </div>

          <div className="app-steps" aria-label="Como funciona">
            {appSteps.map(({ icon: Icon, title, text }) => (
              <article className="step-card" key={title}>
                <Icon size={24} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-visual">
        <div className="section-inner visual-grid">
          <figure className="image-panel image-panel-large">
            <img
              src="/assets/barbearia-detalhe.png"
              alt="Bancada de barbearia com máquinas, tesouras e pentes."
            />
          </figure>
          <div className="visual-copy">
            <p className="eyebrow">Casa, ferramenta e postura</p>
            <h2>Rua no detalhe, atendimento na disciplina</h2>
            <p>
              O visual mistura parede escura, metal, dourado, vermelho fechado
              e textura urbana para carregar a identidade da barbearia sem
              virar fantasia.
            </p>
          </div>
          <figure className="image-panel">
            <img
              src="/assets/barbearia-corte.png"
              alt="Barbeiro usando máquina em um corte degradê."
            />
          </figure>
        </div>
      </section>

      <section id="servicos" className="section section-services">
        <div className="section-inner">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Serviços selecionados</p>
              <h2>Os pedidos que mais movimentam a cadeira</h2>
            </div>
            <p>
              Uma curadoria enxuta com opções de cabelo, barba, acabamento,
              combo e tratamento. A agenda completa fica no app.
            </p>
          </div>

          <div className="services-grid" aria-label="Lista de serviços">
            {services.map((service) => (
              <article className="service-card" key={service.name}>
                <span>{service.category}</span>
                <h3>{service.name}</h3>
                <strong>{service.price}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="barbeiros" className="section section-barbers">
        <div className="section-inner barber-layout">
          <div>
            <p className="eyebrow">Os profissionais</p>
            <h2>Dois nomes para manter o corte em dia</h2>
          </div>
          <div className="barber-cards">
            {barbers.map((barber) => (
              <article className="barber-card" key={barber.name}>
                <Scissors size={28} aria-hidden="true" />
                <div>
                  <h3>{barber.name}</h3>
                  <strong>{barber.role}</strong>
                  <p>{barber.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="section section-contact">
        <div className="section-inner contact-layout">
          <div>
            <p className="eyebrow">Chega junto</p>
            <h2>Endereço, horário e caminhos rápidos</h2>
            <p className="section-copy">
              Sala 3 na esquina da Rua Gumercindo Nascimento com a Rua Ary
              Valadão. Para garantir horário, o caminho mais rápido continua
              sendo o app.
            </p>
          </div>

          <div className="contact-list">
            <ExternalLink className="contact-row" href={mapsLink}>
              <MapPin size={22} aria-hidden="true" />
              <span>
                <strong>Endereço</strong>
                {address}
              </span>
              <Navigation size={18} aria-hidden="true" />
            </ExternalLink>
            <div className="contact-row">
              <Clock3 size={22} aria-hidden="true" />
              <span>
                <strong>Horário</strong>
                09:00 - 21:00
              </span>
            </div>
            <ExternalLink className="contact-row" href={instagramLink}>
              <Instagram size={22} aria-hidden="true" />
              <span>
                <strong>Instagram</strong>
                @jacksonpreparacaodecabelo
              </span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </ExternalLink>
            <ExternalLink className="contact-row" href={whatsappLink}>
              <MessageCircle size={22} aria-hidden="true" />
              <span>
                <strong>WhatsApp</strong>
                +55 62 99496-7153
              </span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </ExternalLink>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-bg" aria-hidden="true" />
        <div className="final-content">
          <Sparkles size={26} aria-hidden="true" />
          <blockquote>
            "Forjem espadas das suas relhas de arado e lanças das suas
            podadeiras. Diga o fraco: 'Eu sou um guerreiro'"
          </blockquote>
          <p>Joel 3:10</p>
          <ExternalLink className="button button-primary" href={appLink}>
            <Star size={20} aria-hidden="true" />
            Baixar app e agendar
          </ExternalLink>
        </div>
      </section>
    </main>
  );
}
