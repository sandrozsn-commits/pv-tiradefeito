import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { SalesPage } from "@/components/sales/sales-page";
import { SALES_CONFIG } from "@/lib/sales-config";

afterEach(cleanup);

describe("Sales page", () => {
  it("uses one main heading and routes every internal CTA to an existing section", () => {
    const { container } = render(<SalesPage />);
    expect(container.querySelectorAll("h1")).toHaveLength(1);
    for (const link of container.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
      expect(container.querySelector(link.getAttribute("href")!)).not.toBeNull();
    }
    expect(screen.getByText("6 meses de acesso")).toBeInTheDocument();
    expect(screen.getByText("12 meses de acesso")).toBeInTheDocument();
    expect(SALES_CONFIG.plans.map((plan) => plan.price)).toEqual([37, 67]);
  });

  it("does not send the visitor to a fake checkout while payment links are missing", () => {
    render(<SalesPage />);
    const buttons = screen.getAllByRole("button", { name: "Abertura de vendas em breve" });
    expect(buttons).toHaveLength(2);
    buttons.forEach((button) => expect(button).toBeDisabled());
    expect(screen.getByRole("link", { name: /Já sou aluno/ })).toHaveAttribute(
      "href",
      SALES_CONFIG.appUrl,
    );
  });

  it("changes the illustrative preview by click and keyboard", () => {
    render(<SalesPage />);
    const investigation = screen.getByRole("tab", { name: "Investigação" });
    fireEvent.click(investigation);
    expect(investigation).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Cada decisão traz uma nova evidência.");
    fireEvent.keyDown(investigation, { key: "ArrowRight" });
    const learning = screen.getByRole("tab", { name: "Aprendizagem" });
    expect(learning).toHaveAttribute("aria-selected", "true");
    expect(learning).toHaveFocus();
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Imprimir ou salvar em PDF");
  });

  it("opens a FAQ answer", () => {
    render(<SalesPage />);
    fireEvent.click(
      screen.getByRole("button", { name: "Tem mensalidade ou renovação automática?" }),
    );
    expect(screen.getByText(/O valor apresentado corresponde a um pagamento único/)).toBeVisible();
  });
});
