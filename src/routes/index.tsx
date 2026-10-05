import { createFileRoute } from "@tanstack/react-router";
import { SalesPage } from "@/components/sales/sales-page";

export const Route = createFileRoute("/")({ component: SalesPage });
