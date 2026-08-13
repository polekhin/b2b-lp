import type { Metadata } from "next";
import "./globals.css";
import "./assessment.css";

export const metadata: Metadata = {
  title: "Цифриум — повышение эффективности бизнеса с помощью ИИ",
  description: "ИИ Ассессмент и шесть практических программ развития AI-компетенций для сотрудников, руководителей и функциональных команд.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
