import type { ReactNode } from "react";
import { ArrowUpRight, Check, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="TiraDefeito Expert, início">
      <img className="brand-logo" src="/product-logo.svg" alt="TiraDefeito Expert — Diagnóstico em Comandos Elétricos" width="350" height="68" style={{ width: "min(350px, 70vw)", height: "auto", maxHeight: 56, objectFit: "contain" }} />
    </a>
  );
}

export function Section({
  id,
  children,
  tone = "light",
  className,
}: {
  id?: string;
  children: ReactNode;
  tone?: "light" | "muted" | "dark";
  className?: string;
}) {
  return (
    <section id={id} className={cn("sales-section", `surface-${tone}`, className)}>
      <div className="sales-container">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  center = false,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={cn("section-heading", center && "centered")}>
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {children && <p className="section-description">{children}</p>}
    </div>
  );
}

export function ActionLink({
  href = "#planos",
  children = "Quero aprender a diagnosticar",
  secondary = false,
}: {
  href?: string;
  children?: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Button
      asChild
      size="lg"
      variant={secondary ? "outline" : "default"}
      className={cn("sales-button", secondary && "sales-button-outline")}
    >
      <a href={href}>
        {children}
        <ArrowUpRight aria-hidden="true" />
      </a>
    </Button>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <Check aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FeatureCard({
  icon: Icon,
  title,
  children,
  number,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  number?: string;
}) {
  return (
    <Card className="feature-card">
      <CardContent className="feature-card-content">
        <div className="feature-top">
          <Icon aria-hidden="true" />
          {number && <span>{number}</span>}
        </div>
        <h3>{title}</h3>
        <p>{children}</p>
      </CardContent>
    </Card>
  );
}
