import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Schedule Delayed Tasks in Next.js Without Cron — Posthook Starter",
  description:
    "Open-source Next.js starter for scheduling delayed tasks with Posthook. " +
    "Reminders, expirations, and snooze with durable per-event timers. No cron, no queues. Try the live demo.",
  metadataBase: new URL("https://nextjs-starter.posthook.io"),
  openGraph: {
    title: "Schedule Delayed Tasks in Next.js Without Cron",
    description:
      "Open-source starter showing how to add reminders, expirations, and snooze to any Next.js app with Posthook. No cron, no queues.",
    url: "https://nextjs-starter.posthook.io",
    siteName: "Posthook Next.js Starter",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schedule Delayed Tasks in Next.js Without Cron",
    description:
      "Open-source starter for durable per-event scheduling with Posthook. Reminders, expirations, and snooze. Try the live demo.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <footer className="mt-auto py-4 text-center text-xs text-muted-foreground">
          <a
            href="https://posthook.io?utm_source=nextjs-starter-live&utm_medium=demo&utm_campaign=starter"
            className="hover:text-foreground"
          >
            © 2026 Posthook, Inc.
          </a>
        </footer>
      </body>
    </html>
  );
}
