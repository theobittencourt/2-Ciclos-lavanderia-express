import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://ciclos-lavanderia.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ciclos Lavanderia Express | Lavanderia Self-Service Premium",
  description:
    "Seu tempo vale mais do que dobrar roupa. Máquinas Speed Queen e Wash&Dry Now, sabão e amaciante inclusos, ambiente climatizado com café e Wi-Fi. Aberto todos os dias das 6h às 22h.",
  keywords: [
    "lavanderia self service",
    "lavanderia express",
    "ciclos lavanderia",
    "lavanderia premium",
    "lavar e secar roupa",
  ],
  openGraph: {
    title: "Ciclos Lavanderia Express | Lavar roupa nunca pareceu tão bom",
    description:
      "Uma experiência premium de lavanderia self-service. Máquinas industriais, sabão e amaciante inclusos, ambiente climatizado com café e Wi-Fi.",
    url: siteUrl,
    siteName: "Ciclos Lavanderia Express",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ciclos Lavanderia Express",
    description: "Seu tempo vale mais que isso. Lavanderia self-service premium.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "xtr4wq4t3h");`}
        </Script>
      </body>
    </html>
  );
}
