import Link from "next/link"
import {Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-white">
                Transportes<span className="text-red-800">Sandori</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-6">
              Serviços profissionais de transporte terrestre com cobertura nacional, agendamento confiável e gestão de frotas de última geração.
            </p>
            <div className="flex gap-4">
              
              <a
                href="https://www.instagram.com/sandoritransportes/"  target="_blank"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-800 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/sandori-transportes/" target="_blank"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-800 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Links rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-slate-400 hover:text-red-800 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-slate-400 hover:text-red-800 transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-400 hover:text-red-800 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-400 hover:text-red-800 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-red-800 transition-colors">
                  Carga completa
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-red-800 transition-colors">
                  Carga fracionada
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-red-800 transition-colors">
                  Gestão logística
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-red-800 transition-colors">
                  Transporte especializado
                </a>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Informações de contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-red-800 mt-0.5" />
                <span className="text-slate-400">sandori@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-red-800 mt-0.5" />
                <span className="text-slate-400">(11) 9 4443-6435</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-red-800 mt-0.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-slate-400">
                  Rua Paulo Eduardo do Valle Pereira, 700<br />
                  Jd Cambuci - Mogi das Cruzes/SP
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} TransportesSandori. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 text-sm hover:text-red-800 transition-colors">
                Politica de privacidade
              </a>
              <a href="#" className="text-slate-400 text-sm hover:text-red-800 transition-colors">
                Termos de servico
              </a>
              <a href="#" className="text-slate-400 text-sm hover:text-red-800 transition-colors">
                Politica de cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
