import type { Metadata } from "next";
import "./globals.css";
import "./unified.css";

export const metadata: Metadata = {
  title: "Корпоративный ИИ Чекап — внутренняя диагностика",
  description: "Единая интерактивная диагностика ИИ-зрелости. 40 заданий и один общий ИИ Индекс.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
