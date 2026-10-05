import { useId, useState } from "react";
import {
  Check,
  ChevronRight,
  ClipboardList,
  Search,
  Target,
  FileText,
  Circle,
  ScanLine,
} from "lucide-react";

const stages = ["Ocorrência", "Investigação", "Aprendizagem"];
export function ProductPreview() {
  const [active, setActive] = useState(0);
  const id = useId();
  return (
    <div className="preview-wrap">
      <div className="preview-window">
        <div className="preview-topbar">
          <span className="window-dots">
            <i />
            <i />
            <i />
          </span>
          <span>TiraDefeito Expert</span>
          <ScanLine aria-hidden="true" />
        </div>
        <div className="preview-body">
          <div className="preview-sidebar" aria-hidden="true">
            <Search />
            <ClipboardList />
            <Target />
            <FileText />
            <span />
          </div>
          <div className="preview-main">
            <div className="preview-tabs" role="tablist" aria-label="Etapas do treinamento">
              {stages.map((stage, i) => (
                <button
                  key={stage}
                  id={`${id}-tab-${i}`}
                  role="tab"
                  aria-selected={active === i}
                  aria-controls={`${id}-panel-${i}`}
                  tabIndex={active === i ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(event) => {
                    let next = i;
                    if (event.key === "ArrowRight") next = (i + 1) % 3;
                    else if (event.key === "ArrowLeft") next = (i + 2) % 3;
                    else if (event.key === "Home") next = 0;
                    else if (event.key === "End") next = 2;
                    else return;
                    event.preventDefault();
                    setActive(next);
                    document.getElementById(`${id}-tab-${next}`)?.focus();
                  }}
                >
                  {stage}
                </button>
              ))}
            </div>
            <div
              className="preview-panel"
              id={`${id}-panel-${active}`}
              role="tabpanel"
              aria-labelledby={`${id}-tab-${active}`}
              tabIndex={0}
            >
              <p className="preview-label">
                {
                  [
                    "CHAMADO DE MANUTENÇÃO",
                    "RACIOCÍNIO DE DIAGNÓSTICO",
                    "RELATÓRIO DE APRENDIZAGEM",
                  ][active]
                }
              </p>
              <p className="preview-title">
                {
                  [
                    "O motor não parte. Por onde começar?",
                    "Cada decisão traz uma nova evidência.",
                    "Entenda o caminho até o diagnóstico.",
                  ][active]
                }
              </p>
              <div className="preview-brief">
                <span>
                  <Circle aria-hidden="true" />
                  Partida direta
                </span>
                <span>Treinamento guiado</span>
              </div>
              {active === 0 && (
                <>
                  <div className="preview-note">
                    <span>SINTOMA RELATADO</span>
                    <p>Ao pressionar a botoeira de partida, o motor permanece parado.</p>
                  </div>
                  <div className="preview-row">
                    <ClipboardList aria-hidden="true" />
                    <span>Analise o sintoma e o contexto</span>
                    <ChevronRight aria-hidden="true" />
                  </div>
                  <div className="preview-row">
                    <Search aria-hidden="true" />
                    <span>Escolha o próximo teste</span>
                    <ChevronRight aria-hidden="true" />
                  </div>
                </>
              )}
              {active === 1 && (
                <>
                  <div className="preview-note">
                    <span>SUA INVESTIGAÇÃO</span>
                    <p>Observe as evidências, avalie as hipóteses e escolha a próxima ação.</p>
                  </div>
                  {["Situação apresentada", "Decisão do aluno", "Feedback da decisão"].map(
                    (label) => (
                      <div className="preview-row" key={label}>
                        <Check aria-hidden="true" />
                        <span>{label}</span>
                        <ChevronRight aria-hidden="true" />
                      </div>
                    ),
                  )}
                </>
              )}
              {active === 2 && (
                <>
                  <div className="preview-note">
                    <span>REVISE O QUE APRENDEU</span>
                    <p>Veja as decisões tomadas, as evidências obtidas e os pontos para revisar.</p>
                  </div>
                  <div className="preview-metrics">
                    {["Decisões", "Evidências", "Diagnóstico"].map((label) => (
                      <div key={label}>
                        <Check aria-hidden="true" />
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="preview-row">
                    <FileText aria-hidden="true" />
                    <span>Imprimir ou salvar em PDF</span>
                    <ChevronRight aria-hidden="true" />
                  </div>
                </>
              )}
              <div className="preview-bottom">
                <span>Aprenda investigando</span>
                <span>Etapa {active + 1} de 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="preview-caption">
        Prévia ilustrativa do fluxo de aprendizagem. Clique nas etapas.
      </p>
    </div>
  );
}
