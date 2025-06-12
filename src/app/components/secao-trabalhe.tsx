"use client";

import { useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
// import { Button } from "@/components/ui/button"
import { CheckCircle, MapPin } from "lucide-react";
import Image from "next/image";

export default function WorkWithUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const revealElements = useScrollReveal();

  useEffect(() => {
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".reveal");
      revealElements(elements);
    }
  }, [revealElements]);

  const benefits = [
    "Competitive compensation packages",
    "Health, dental, and vision insurance",
    "401(k) retirement plan with company match",
    "Paid time off and holidays",
    "Career advancement opportunities",
    "Modern fleet with latest technology",
    "Ongoing professional training",
    "Team-oriented work environment",
  ];

  const positions = [
    {
      title: "CDL Truck Driver",
      location: "Nationwide",
      type: "Full-time",
    },
    {
      title: "Logistics Coordinator",
      location: "Logistics City, LC",
      type: "Full-time",
    },
    {
      title: "Fleet Maintenance Technician",
      location: "Multiple Locations",
      type: "Full-time",
    },
    {
      title: "Dispatch Manager",
      location: "Headquarters",
      type: "Full-time",
    },
  ];

  return (
    <section id="work-with-us" ref={sectionRef} className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium text-sm mb-4">
            Trabalhe conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Junte-se à nossa equipe
          </h2>
          <p className="text-slate-600 text-lg">
            Estamos sempre procurando pessoas talentosas para se juntar à nossa
            equipe. Descubra oportunidades de carreira e cresça conosco.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 reveal">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Why Work With Us?
              </h3>
              <p className="text-slate-600 mb-6">
                At LandCarrier, we value our employees and provide a supportive
                environment where you can thrive professionally and personally.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Employee Testimonial
              </h3>
              <blockquote className="text-slate-600 italic">
                &quot;Ive been driving for LandCarrier for over 5 years now. The
                company truly cares about its drivers, providing us with
                excellent equipment, support, and benefits. Its the best company
                Ive worked for in my 15 years in the.&quot;
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Employee portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">
                    Michael Johnson
                  </p>
                  <p className="text-sm text-slate-500">CDL Driver, 5 years</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 reveal">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Vagas abertas
              </h3>
              <div className="space-y-4">
                {positions.map((position, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-semibold text-slate-800">
                          {position.title}
                        </h4>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-slate-500 flex items-center gap-1">
                            <MapPin className="h-4 w-4" /> {position.location}
                          </span>
                          <span className="text-sm text-slate-500">
                            {position.type}
                          </span>
                        </div>
                      </div>
                      {/* <Button variant="ghost" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50">
                        <ArrowRight className="h-5 w-5" />
                      </Button> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Dont See a Matching Position?
              </h3>
              <p className="mb-6">
                Were always interested in meeting talented individuals. Send us
                your resume, and well keep it on file for future opportunities.
              </p>
              {/* <Button className="bg-white text-orange-600 hover:bg-orange-50">Submit Your Resume</Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
