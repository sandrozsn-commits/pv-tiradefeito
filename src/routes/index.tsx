import { createFileRoute } from "@tanstack/react-router";

const APP_URL = "https://diagnosticosexpert.lovable.app";
const TITLE = "TiraDefeito Expert — Diagnóstico em Comandos Elétricos";
const DESC =
  "Aprenda a encontrar falhas em comandos elétricos pelo raciocínio técnico, não por tentativa e erro. Ocorrências práticas, relatório de aprendizagem e evolução acompanhada.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Cta({ children, size = "md" }: { children: React.ReactNode; size?: "md" | "lg" }) {
  return (
    <a
      href={APP_URL}
      className={`inline-flex items-center justify-center rounded-md bg-primary font-mono font-semibold uppercase tracking-[0.1em] text-primary-foreground glow-primary transition-transform hover:-translate-y-0.5 ${
        size === "lg" ? "px-8 py-4 text-sm" : "px-6 py-3 text-xs"
      }`}
    >
      {children}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="leading-tight">
            <div className="text-lg font-extrabold">
              TiraDefeito <span className="text-primary">Expert</span>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Academia do Eletricista
            </div>
          </div>
          <Cta>Quero acesso</Cta>
        </div>
      </header>

      {/* HERO */}
      <section className="schematic border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
          <div>
            <span className="eyebrow">Diagnóstico em comandos elétricos</span>
            <h1 className="mt-5 text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">
              Encontre a falha pelo <span className="text-primary">raciocínio</span>, não no chute.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Treine com ocorrências de manutenção, analise evidências, tome decisões e revise seu
              caminho de diagnóstico ao final de cada atividade.
            </p>
            <div className="mt-9">
              <Cta size="lg">Começar a treinar</Cta>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-border pb-3 font-mono text-xs uppercase tracking-[0.15em]">
              <span className="text-muted-foreground">Ocorrência #042 · Partida direta</span>
              <span className="flex items-center gap-2 text-success">
                <span className="size-1.5 rounded-full bg-success animate-blink" /> em análise
              </span>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              {[
                ["Sintoma", "Motor não parte. Botoeira acionada, contator K1 não fecha."],
                ["Evidência", "220 V entre L1 e N. 0 V na bobina A1–A2."],
                ["Sua decisão", "Medir continuidade do contato NF do relé térmico."],
              ].map(([k, v]) => (
                <div key={k} className="rounded-md bg-secondary p-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{k}</div>
                  <div className="mt-1">{v}</div>
                </div>
              ))}
              <div className="rounded-md border border-primary/40 bg-accent p-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent-foreground">Diagnóstico</div>
                <div className="mt-1">Relé térmico desarmado — causa: sobrecarga no eixo.</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {[
                ["92%", "precisão"],
                ["+120", "xp"],
                ["18", "concluídas"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-md bg-secondary p-3">
                  <div className="font-mono text-lg font-semibold text-primary">{n}</div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <span className="eyebrow">O problema</span>
        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold sm:text-5xl">Trocar peça não é diagnosticar.</h2>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Sem método, cada parada vira adivinhação: contator, relé, botoeira... Cada tentativa custa
          tempo, material e a confiança do cliente.
        </p>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {[
            ["Máquina parada", "Cada componente testado no chute aumenta o tempo de parada."],
            ["Peça desperdiçada", "Material trocado sem necessidade corrói o lucro do serviço."],
            ["Defeito que volta", "Sem achar a causa raiz, o chamado retorna."],
          ].map(([t, d], i) => (
            <div key={t} className="bg-background p-7">
              <div className="font-mono text-xs text-destructive">0{i + 1}</div>
              <h3 className="mt-3 text-xl font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <span className="eyebrow">Como funciona</span>
          <h2 className="mt-4 max-w-2xl text-4xl font-extrabold sm:text-5xl">
            Raciocínio técnico treinado em três etapas.
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              ["Investigue", "Receba uma ocorrência com sintomas reais de manutenção e escolha o que medir."],
              ["Decida", "Teste hipóteses com base nas evidências, como faria diante do painel."],
              ["Revise", "Ao final, compare seu caminho com o procedimento técnico recomendado."],
            ].map(([t, d], i) => (
              <li key={t} className="border-t-2 border-primary pt-6">
                <div className="font-mono text-5xl font-semibold text-primary/40">0{i + 1}</div>
                <h3 className="mt-3 text-2xl font-bold">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RECURSOS */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <span className="eyebrow">O que você recebe</span>
        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold sm:text-5xl">
          Ferramentas de quem resolve, não de quem adivinha.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["Ocorrências práticas", "Investigue sintomas e teste hipóteses como em uma situação real de manutenção."],
            ["Relatório de aprendizagem", "Reveja decisões, evidências, erros e o procedimento técnico recomendado."],
            ["Evolução acompanhada", "Seu progresso, XP, precisão e ocorrências concluídas ficam registrados."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-lg border border-border bg-card p-7 transition-colors hover:border-primary/50">
              <div className="mb-5 h-1 w-10 bg-primary" />
              <h3 className="text-xl font-bold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Para quem é</span>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">Feito para quem põe a mão no painel.</h2>
          </div>
          <ul className="space-y-4 text-lg">
            {[
              "Eletricistas que querem diagnosticar com método",
              "Técnicos de manutenção industrial e predial",
              "Estudantes que querem prática antes do campo",
              "Quem quer parar de depender do “troca até funcionar”",
            ].map((t) => (
              <li key={t} className="flex gap-4 border-b border-border pb-4">
                <span className="font-mono text-primary">→</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="schematic">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center">
          <h2 className="text-4xl font-black sm:text-6xl">
            Pare de trocar peça. <span className="text-primary">Comece a diagnosticar.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Entre no TiraDefeito Expert e treine seu raciocínio técnico em ocorrências práticas.
          </p>
          <div className="mt-10">
            <Cta size="lg">Quero meu acesso</Cta>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          © 2026 Academia do Eletricista · Instituto Brasileiro de Qualificação Profissional Ltda - ME ·
          CNPJ 10.984.548/0001-77
        </div>
      </footer>
    </div>
  );
}
