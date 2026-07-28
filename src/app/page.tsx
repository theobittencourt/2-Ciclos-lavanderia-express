import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BaixeOApp } from "@/components/BaixeOApp";
import { Diferenciais } from "@/components/Diferenciais";
import { ComoFunciona } from "@/components/ComoFunciona";
import { Precos } from "@/components/Precos";
import { Ambiente } from "@/components/Ambiente";
import { Depoimentos } from "@/components/Depoimentos";
import { Localizacao } from "@/components/Localizacao";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <BaixeOApp />
        <Diferenciais />
        <ComoFunciona />
        <Precos />
        <Ambiente />
        <Depoimentos />
        <Localizacao />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
