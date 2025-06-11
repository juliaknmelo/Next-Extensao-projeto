"use client"

import { useEffect, useRef } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Shield, Clock, Award } from "lucide-react"
import Image from "next/image";
import Foto from "../../../assets/foto (5).png";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const revealElements = useScrollReveal()

  useEffect(() => {
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".reveal")
      revealElements(elements)
    }
  }, [revealElements])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block px-4 py-2 rounded-full bg-red-200 text-red-800 font-medium text-sm mb-4">
            Sobre nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
           Seu parceiro de confiança em transportes
          </h2>
          <p className="text-slate-600 text-lg">
            Com mais de 10 anos de experiência, construímos uma reputação de confiabilidade, segurança e serviço excepcional no setor de transporte terrestre.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative reveal justify-items-center ">
            <div className=""></div>
            <Image src={Foto} width={600} height={400} alt="" className=" rounded-2xl "/>
          </div>

          <div className="space-y-8">
            <div className="reveal">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Nossa história</h3>
              <p className="text-slate-600">
                Fundada em 2020 a Sandori Transportes começou com uma único objetivo: a eficiência no transporte.
 Hoje operamos com uma frota de veiculos moderna e atendemos uma vasta cartela de clientes em todo país.  
              </p>
            </div>

            <div className="space-y-6 reveal">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-200 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-red-800" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-2">Segurança primeiro</h4>
                  <p className="text-slate-600">
                    Nosso compromisso com a segurança é inabalável, com programas de treinamento rigorosos e tecnologia de ponta para garantir que sua carga chegue com segurança.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-200 flex items-center justify-center">
                  <Clock className="h-6 w-6  text-red-800" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-2">Pontualidade</h4>
                  <p className="text-slate-600">
                    Entendemos a importância de entregas pontuais em sua cadeia de suprimentos, e é por isso que mantemos um histórico de entregas pontuais de 98%.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full  bg-red-200 flex items-center justify-center">
                  <Award className="h-6 w-6  text-red-800" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-2">Excelência</h4>
                  <p className="text-slate-600">
                    Nossa dedicação à excelência nos rendeu muitas parcerias e a confiança de clientes em diversos setores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
