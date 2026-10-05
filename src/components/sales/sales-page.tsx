import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Check,
  ClipboardList,
  FileText,
  GraduationCap,
  HardHat,
  ListChecks,
  Monitor,
  Search,
  ShieldCheck,
  Target,
  Wrench,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { ActionLink, Brand, CheckList, FeatureCard, Section, SectionHeading } from "./primitives";
import { ProductPreview } from "./product-preview";
import { SALES_CONFIG } from "@/lib/sales-config";

const benefits = [
  {
    icon: Search,
    title: "Treine o raciocínio, não a memorização",
    text: "Analise sintomas e escolha ações para avançar na investigação. Você participa do diagnóstico.",
  },
  {
    icon: ListChecks,
    title: "Entenda suas decisões",
    text: "Receba feedback para reconhecer o que ajudou, o que desviou a investigação e o que precisa ser revisto.",
  },
  {
    icon: Target,
    title: "Acompanhe sua evolução",
    text: "Consulte seu progresso, ocorrências concluídas, precisão e pontuação ao longo do treinamento.",
  },
  {
    icon: FileText,
    title: "Leve o aprendizado para a revisão",
    text: "Veja o relatório da ocorrência, releia seu caminho de investigação e imprima ou salve em PDF.",
  },
];
const faq = [
  [
    "O que é o TiraDefeito Expert?",
    "É uma ferramenta de treinamento em diagnóstico de defeitos em comandos elétricos. Você investiga ocorrências simuladas, escolhe ações e recebe feedback para desenvolver seu raciocínio técnico.",
  ],
  [
    "Preciso ter experiência para usar?",
    "A ferramenta organiza as ocorrências em níveis iniciante, intermediário e avançado. Conhecimentos básicos de comandos elétricos ajudam a aproveitar os desafios. Você pode começar pelo nível mais adequado à sua experiência.",
  ],
  [
    "É um curso em vídeo?",
    "O foco é a prática interativa: ler o chamado, analisar as informações e tomar decisões. A ferramenta complementa o estudo de comandos elétricos com exercícios de diagnóstico.",
  ],
  [
    "Posso acessar pelo celular?",
    "O acesso é pelo navegador, com conexão à internet, em celular, tablet ou computador. Não é necessário instalar um programa para começar a usar.",
  ],
  [
    "Qual é a diferença entre os dois planos?",
    "Os recursos são os mesmos. O plano de R$ 37 oferece 6 meses de acesso; o de R$ 67 oferece 12 meses. O plano anual dá mais tempo para praticar e custa R$ 7 a menos que dois acessos de 6 meses.",
  ],
  [
    "Tem mensalidade ou renovação automática?",
    "Não. O valor apresentado corresponde a um pagamento único pelo período escolhido. O acesso é por prazo determinado, sem renovação automática.",
  ],
  [
    "Posso salvar os relatórios em PDF?",
    "Sim. Ao concluir uma ocorrência, você pode consultar o relatório de aprendizagem e usar a opção de impressão do navegador para imprimir ou salvar em PDF.",
  ],
  [
    "A ferramenta identifica o defeito de um equipamento real?",
    "A ferramenta é um ambiente de aprendizagem com ocorrências simuladas. As decisões e evidências são apresentadas dentro do exercício. Ela não faz medições em equipamentos reais nem substitui procedimentos de segurança e avaliação profissional.",
  ],
];

export function SalesPage() {
  return (
    <div className="sales-page" id="inicio">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <div className="sales-container header-inner">
          <Brand />
          <nav aria-label="Menu principal">
            <a href="#como-funciona">Como funciona</a>
            <a href="#recursos">O que você recebe</a>
            <a href={SALES_CONFIG.appUrl}>
              Já sou aluno
              <ArrowUpRight aria-hidden="true" />
            </a>
          </nav>
          <ActionLink>Ver planos</ActionLink>
        </div>
      </header>
      <main id="conteudo">
        <Section tone="light" className="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span />
                PRÁTICA EM DIAGNÓSTICO ELÉTRICO
              </p>
              <h1>Não sabe como identificar a causa de um defeito em comandos elétricos?</h1>
              <p className="hero-subheadline">
                Treine o diagnóstico passo a passo e entenda o que testar, como interpretar as
                evidências e por que cada decisão importa.
              </p>
              <p className="hero-description">
                O TiraDefeito Expert apresenta ocorrências simuladas para você investigar. Escolha
                as ações, receba feedback e revise o aprendizado no relatório de cada ocorrência.
              </p>
              <div className="hero-actions">
                <ActionLink />
                <a className="text-link" href="#como-funciona">
                  Veja como funciona
                  <ArrowDown aria-hidden="true" />
                </a>
              </div>
              <p className="hero-price">
                Acesso a partir de <strong>R$ 37 por 6 meses</strong>
                <span>Pagamento único · Sem renovação automática</span>
              </p>
            </div>
            <ProductPreview />
          </div>
          <div className="hero-proof">
            <div>
              <ClipboardList aria-hidden="true" />
              <span>Investigação por etapas</span>
            </div>
            <div>
              <Target aria-hidden="true" />
              <span>Do iniciante ao avançado</span>
            </div>
            <div>
              <FileText aria-hidden="true" />
              <span>Relatório de aprendizagem</span>
            </div>
          </div>
        </Section>

        <Section id="problema">
          <div className="problem-grid">
            <SectionHeading
              eyebrow="O DESAFIO DA MANUTENÇÃO"
              title="Conhecer os componentes é só o começo."
            >
              Diante de uma falha, é preciso decidir o que verificar primeiro, interpretar o
              resultado e escolher o próximo passo.
            </SectionHeading>
            <div className="problem-copy">
              <p>
                O contator não aciona. O motor não parte. A proteção desarma. Você conhece os
                dispositivos, mas ainda fica em dúvida sobre como organizar a investigação?
              </p>
              <p>
                Sem um raciocínio claro, a busca pode virar uma sequência de tentativas e trocas de
                componentes que não esclarecem a causa.
              </p>
              <p className="highlight">
                É esse raciocínio que você vai praticar no TiraDefeito Expert.
              </p>
            </div>
          </div>
          <div className="comparison-grid">
            <Card className="comparison-card">
              <CardContent>
                <p className="comparison-label">
                  <X aria-hidden="true" />
                  Na tentativa e erro
                </p>
                <CheckList
                  items={[
                    "Escolher testes sem uma sequência clara",
                    "Confundir o sintoma com a causa da falha",
                    "Trocar uma peça antes de confirmar o defeito",
                  ]}
                />
              </CardContent>
            </Card>
            <Card className="comparison-card comparison-positive">
              <CardContent>
                <p className="comparison-label">
                  <Check aria-hidden="true" />
                  Com uma investigação organizada
                </p>
                <CheckList
                  items={[
                    "Analisar o chamado e levantar hipóteses",
                    "Usar evidências para orientar o próximo passo",
                    "Confirmar o diagnóstico e revisar o raciocínio",
                  ]}
                />
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section id="como-funciona" tone="muted">
          <SectionHeading
            eyebrow="COMO FUNCIONA"
            title="Você aprende assumindo a investigação."
            center
          >
            A cada ocorrência, você sai da leitura passiva e participa das decisões de diagnóstico.
          </SectionHeading>
          <div className="steps-grid">
            {[
              [
                "01",
                "Assuma uma ocorrência",
                "Escolha um nível e conheça o equipamento, o contexto e o sintoma relatado.",
              ],
              [
                "02",
                "Decida o que testar",
                "Analise a situação e selecione a próxima ação. As evidências conduzem a investigação.",
              ],
              [
                "03",
                "Entenda o diagnóstico",
                "Receba feedback, revise suas escolhas e consulte o relatório do que aprendeu.",
              ],
            ].map(([n, title, text]) => (
              <article className="step-card" key={n}>
                <span className="step-number">{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="section-action">
            <ActionLink />
          </div>
        </Section>

        <Section id="recursos">
          <SectionHeading
            eyebrow="O QUE VOCÊ RECEBE"
            title="Uma ferramenta para praticar, entender e evoluir."
          />
          <div className="benefit-grid">
            {benefits.map((b, i) => (
              <FeatureCard key={b.title} icon={b.icon} title={b.title} number={`0${i + 1}`}>
                {b.text}
              </FeatureCard>
            ))}
          </div>
          <div className="resource-strip">
            <Monitor aria-hidden="true" />
            <p>
              <strong>Seu treinamento, no seu ritmo.</strong> Acesse pelo navegador e escolha as
              ocorrências de acordo com seu nível e sua disponibilidade.
            </p>
          </div>
        </Section>

        <Section id="para-quem" tone="muted">
          <SectionHeading
            eyebrow="PARA QUEM É"
            title="Para quem quer saber o que fazer diante de uma falha."
            center
          />
          <div className="audience-grid">
            <FeatureCard icon={Wrench} title="Eletricistas e técnicos">
              Pratique a sequência de testes e a interpretação das evidências em comandos elétricos.
            </FeatureCard>
            <FeatureCard icon={HardHat} title="Profissionais de manutenção">
              Exercite o raciocínio aplicado à investigação de falhas em sistemas de comando.
            </FeatureCard>
            <FeatureCard icon={GraduationCap} title="Estudantes e engenheiros">
              Conecte o conhecimento dos componentes às decisões de uma investigação técnica.
            </FeatureCard>
          </div>
          <p className="audience-note">
            <BookOpen aria-hidden="true" />
            Conhecimentos básicos de comandos elétricos ajudam a aproveitar melhor o treinamento.
          </p>
        </Section>

        <Section id="autoridade" tone="dark">
          <div className="authority-grid">
            <div className="authority-seal">
              <img
                src="/academia-eletricista-logo.svg"
                alt="Logomarca Academia do Eletricista"
                width="154"
                height="80"
                loading="lazy"
              />
              <p>
                ACADEMIA
                <br />
                <strong>DO ELETRICISTA</strong>
              </p>
            </div>
            <div>
              <SectionHeading
                eyebrow="QUEM ESTÁ POR TRÁS"
                title="Experiência de ensino aplicada à prática."
              />
              <p className="authority-description">
                O TiraDefeito Expert é uma ferramenta da Academia do Eletricista, criada por{" "}
                <strong>Sandro Nogueira</strong>, engenheiro eletricista e professor com mais de 26
                anos de experiência.
              </p>
              <p className="authority-description">
                A proposta é ajudar você a compreender o diagnóstico: observar, testar, interpretar
                e justificar cada decisão.
              </p>
              <div className="authority-signature">
                <span>Sandro Nogueira</span>
                <small>Engenheiro eletricista · Professor</small>
              </div>
            </div>
          </div>
        </Section>

        <Section id="planos">
          <SectionHeading
            eyebrow="ESCOLHA SEU ACESSO"
            title="Mais prática para o seu próximo diagnóstico."
            center
          >
            Os mesmos recursos nos dois planos. Você escolhe por quanto tempo quer treinar.
          </SectionHeading>
          <div className="pricing-grid">
            {SALES_CONFIG.plans.map((plan) => (
              <Card
                className={`plan-card ${plan.recommended ? "plan-recommended" : ""}`}
                key={plan.months}
              >
                {plan.recommended && <p className="plan-badge">MELHOR CUSTO POR MÊS</p>}
                <CardContent className="plan-content">
                  <p className="plan-label">
                    {plan.months === 6 ? "Para começar a praticar" : "Mais tempo para evoluir"}
                  </p>
                  <h3>{plan.months} meses de acesso</h3>
                  <div className="plan-price">
                    <span>R$</span>
                    <strong>{plan.price}</strong>
                    <span>,00</span>
                  </div>
                  <p className="plan-payment">Pagamento único pelo período completo</p>
                  <p className="plan-equivalent">
                    Equivale a R$ {(plan.price / plan.months).toFixed(2).replace(".", ",")} por mês
                    <span>Referência de custo. Não é cobrança mensal.</span>
                  </p>
                  <CheckList
                    items={[
                      "Ocorrências de diagnóstico",
                      "Níveis iniciante, intermediário e avançado",
                      "Feedback durante a investigação",
                      "Progresso e pontuação",
                      "Relatórios para imprimir ou salvar em PDF",
                    ]}
                  />
                  <div className="plan-action">
                    {plan.checkoutUrl ? (
                      <ActionLink href={plan.checkoutUrl}>
                        Quero {plan.months} meses de acesso
                      </ActionLink>
                    ) : (
                      <>
                        <button
                          className="sales-button checkout-pending"
                          type="button"
                          disabled
                          aria-describedby={`checkout-${plan.months}`}
                        >
                          Abertura de vendas em breve
                        </button>
                        <p id={`checkout-${plan.months}`} className="plan-availability">
                          A compra deste plano ainda não está disponível.
                        </p>
                      </>
                    )}
                  </div>
                  {plan.recommended && (
                    <p className="plan-saving">
                      R$ 7 de economia em relação a dois planos de 6 meses.
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="offer-note">
            <ShieldCheck aria-hidden="true" />
            Acesso por prazo determinado · Sem mensalidade · Sem renovação automática
          </p>
        </Section>

        <Section id="duvidas" tone="muted">
          <div className="faq-grid">
            <SectionHeading
              eyebrow="PERGUNTAS FREQUENTES"
              title="Tire suas dúvidas antes de começar."
            >
              Entenda o acesso, os recursos e a proposta do treinamento.
            </SectionHeading>
            <Accordion type="single" collapsible className="sales-faq">
              {faq.map(([question, answer], i) => (
                <AccordionItem key={question} value={`faq-${i}`}>
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>

        <Section tone="dark" className="closing">
          <div className="closing-inner">
            <p className="eyebrow">
              <span />
              SEU PRÓXIMO PASSO
            </p>
            <h2>Treine hoje o raciocínio que você quer usar na prática.</h2>
            <p>
              Comece por uma ocorrência. Analise, decida e aprenda com o caminho até o diagnóstico.
            </p>
            <ActionLink>Escolher meu plano</ActionLink>
          </div>
        </Section>
      </main>
      <footer className="site-footer">
        <div className="sales-container footer-inner">
          <Brand />
          <div className="footer-legal">
            <p>© {new Date().getFullYear()} Academia do Eletricista</p>
            <p>Instituto Brasileiro de Qualificação Profissional Ltda - ME</p>
            <p>CNPJ: 10.984.548/0001-77 · Todos os direitos reservados.</p>
          </div>
          <a className="text-link" href={SALES_CONFIG.appUrl}>
            Acessar minha conta
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </footer>
      <div className="mobile-cta">
        <span>
          A partir de <strong>R$ 37</strong>
        </span>
        <ActionLink>Ver planos</ActionLink>
      </div>
    </div>
  );
}
