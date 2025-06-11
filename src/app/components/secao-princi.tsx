"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Link from "next/link";
import Image from "next/image";
import Foto from "../../../assets/foto2.png";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const revealElements = useScrollReveal();

  useEffect(() => {
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".reveal");
      revealElements(elements);
    }
  }, [revealElements]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className=" gap-4 relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-orange-100 rounded-full blur-3xl opacity-20 -z-10"></div>
        <div className="absolute left-0 bottom-1/4 w-1/3 h-1/3 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      </div>

      
      <div className="relative reveal pr-5">
        
        <Image src={Foto} width={1000} height={1000} alt="" />
      </div>

      <div className="container mx-auto px-4 py-20 grid lg:grid-cols-1 gap-12 items-center">
        
        <div className="space-y-8">
          <div className="reveal">
            <div className="absolute -inset-4 bg-gradient-to-tr from-red-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-70 -z-10"></div>
            <span className="inline-block px-4 py-2 rounded-full bg-red-200 text-red-800 font-medium text-sm mb-4">
              Soluções confiáveis ​​em transporte terrestre
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Transportando sua carga{" "}
              <span className="text-red-800">com segurança</span> pelo país
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Serviços profissionais de transporte terrestre com cobertura
              nacional, agendamento confiável e gerenciamento de frota de última
              geração.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 reveal">
            <Link href={"#services"}>
              <Button
                variant="outline"
                className="border-slate-300 text-slate-700 px-6 py-6 text-lg"
              >
                Nossos serviços
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 reveal">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-red-200 flex items-center justify-center">
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
                  className="h-6 w-6 text-red-800"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div>
                <p className="font-bold text-slate-800">98%</p>
                <p className="text-sm text-slate-600">Entrega no prazo</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-red-200 flex items-center justify-center">
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
                  className="h-6 w-6 text-red-800"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <p className="font-bold text-slate-800">+25</p>
                <p className="text-sm text-slate-600">Estados cobertos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
