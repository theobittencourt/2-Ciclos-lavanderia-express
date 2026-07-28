import { InstagramIcon } from "./icons/InstagramIcon";

export function Footer() {
  return (
    <footer className="bg-roxo-500 px-6 py-12 text-roxo-100/70 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div>
          <p className="font-serif text-xl text-white">Ciclos Lavanderia Express</p>
          {/* TODO: confirmar razão social e CNPJ definitivos */}
          <p className="mt-2 text-xs">Patrícia Carvalho dos Santos</p>
          <p className="text-xs">CNPJ 65.021.618/0001-83</p>
        </div>

        <nav className="flex flex-col gap-2 text-sm sm:items-end">
          <a href="#localizacao" className="hover:text-champagne-300">
            Localização
          </a>
          <a
            href="https://www.instagram.com/2cicloslavanderia.oficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-champagne-300 sm:justify-end"
          >
            <InstagramIcon className="h-4 w-4" />
            @2cicloslavanderia.oficial
          </a>
        </nav>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="text-xs text-roxo-100/40">
          © {new Date().getFullYear()} Ciclos Lavanderia Express. Todos os direitos reservados.
        </p>
        <a
          href="https://www.landing48.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-roxo-100/40 hover:text-champagne-300"
        >
          Desenvolvido por Landing48
        </a>
      </div>
    </footer>
  );
}
