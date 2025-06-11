"use client";

import { useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const revealElements = useScrollReveal();

  useEffect(() => {
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".reveal");
      revealElements(elements);
    }
  }, [revealElements]);

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-red-800" />,
      title: "Nossa sede",
      details:
        "Rua Paulo Eduardo do Valle Pereira, 700 - Jd Cambuci - Mogi das Cruzes/SP",
    },
    {
      icon: <Phone className="h-6 w-6 text-red-800" />,
      title: "Telefones",
      details: "(11) 94443-6435 (11) 97310-3190",
    },
    {
      icon: <Mail className="h-6 w-6 text-red-800" />,
      title: "E-mail",
      details: "sandori@gmail.com",
    },
    {
      icon: <Clock className="h-6 w-6 text-red-800" />,
      title: "Horários",
      details: "Segunda - Sexta das 8:00 - 17:00",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block px-4 py-2 rounded-full bg-red-200 text-red-800 font-medium text-sm mb-4">
            Contate-nos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-slate-600 text-lg">
            Tem dúvidas ou está pronto para começar a enviar? Nossa equipe está
            aqui para ajudar você com todas as suas necessidades de transporte
            terrestre.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 reveal">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600">{item.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Our Coverage Area
              </h3>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31798932.826549258!2d-73.17918746946867!3d-13.368568915705076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1spt-BR!2sbr!4v1748379968611!5m2!1spt-BR!2sbr"
                  width="600"
                  height="450"
                  // allowfullscreen=""
                  loading="lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Map of our service area"
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl shadow-lg reveal">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Nos envie uma mensagem
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-700"
                  >
                    Nome
                  </label>
                  <Input
                    id="name"
                    placeholder="João Silva"
                    className="border-slate-300 focus:border-red-600 focus:ring-red-600"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700"
                  >
                    Endereço de e-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="joao@exemplo.com"
                    className="border-slate-300 focus:border-red-600 focus:ring-red-600"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-slate-700"
                >
                  Assunto
                </label>
                <Input
                  id="subject"
                  placeholder="Como podemos te ajudar?"
                  className="border-slate-300 focus:border-red-600 focus:ring-red-600"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-700"
                >
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Forneça detalhes sobre sua necessidade..."
                  className="min-h-[150px] border-slate-300 focus:border-red-600 focus:ring-red-600"
                />
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
