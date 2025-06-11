"use client"

import { useEffect, useRef } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Truck, Package, BarChart3, ShieldCheck } from "lucide-react"
import Foto from "../../../assets/foto (3).png";
import Image from "next/image";
import { Button } from "@/components/ui/button";


export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const revealElements = useScrollReveal()

  useEffect(() => {
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".reveal")
      revealElements(elements)
    }
  }, [revealElements])

  const services = [
    {
      icon: <Truck className="h-10 w-10 text-red-800" />,
      title: "Carga completa",
      description:
        "Caminhões dedicados para suas remessas, oferecendo máxima eficiência e segurança para grandes volumes de carga.",
    },
    {
      icon: <Package className="h-10 w-10 text-red-800" />,
      title: "Carga fracionada",
      description: "Soluções econômicas para remessas menores, compartilhando o espaço do caminhão com outras cargas compatíveis.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-red-800" />,
      title: "Gestão Logística",
      description:
        "Soluções logísticas completas, incluindo planejamento, execução e otimização da sua cadeia de suprimentos.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-red-800" />,
      title: "Transporte Especializado",
      description: "Soluções personalizadas para cargas superdimensionadas, de alto valor ou sensíveis que exigem manuseio especial.",
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block px-4 py-2 rounded-full bg-red-200 text-red-800 font-medium text-sm mb-4">
            Nossos serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Soluções abrangentes de transporte</h2>
          <p className="text-slate-600 text-lg">
            Oferecemos uma ampla gama de serviços de transporte terrestre adaptados para atender às suas necessidades específicas, garantindo que sua carga chegue ao seu destino com segurança e no prazo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 reveal"
            >
              <div className="w-16 h-16 rounded-lg bg-red-200 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-800 to-red-600 rounded-2xl p-8 md:p-12 reveal">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-5xl  font-bold text-white mb-4">Precisa de uma solução de transporte personalizada?</h3>
              <p className="text-orange-50 mb-6 text-2xl">
                Estamos prontos para projetar uma solução personalizada que atenda às suas necessidades específicas.
              </p>
              <Button className="bg-white text-red-800 hover:bg-orange-50">Solicitar uma consulta</Button>
            </div>
            <div className="hidden md:block">
              <Image src={Foto} width={600} height={400} alt="" className=" rounded-2xl "/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
