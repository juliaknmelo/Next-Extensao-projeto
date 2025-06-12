"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Package } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

type ConversationStep =
  | "initial"
  | "service-selected"
  | "origin-provided"
  | "destination-provided"
  | "completed";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState<ConversationStep>("initial");
  const [originZip, setOriginZip] = useState("");
  const [destinationZip, setDestinationZip] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    console.log(destinationZip)
    // Send initial message
    const initialMessage: Message = {
      id: "1",
      content:
        "Olá! Bem-vindo ao nosso sistema de atendimento. 🚚\n\nQual serviço você gostaria de utilizar?\n\n1️⃣ Simular frete \n\nDigite o número da opção desejada:",
      role: "assistant",
      timestamp: new Date(),
    };
    setMessages([initialMessage]);
  }, []);

  const calculateShippingCost = (
    origin: string,
    destination: string
  ): number => {
    // Simple shipping cost calculation based on zip codes
    const originNum = Number.parseInt(origin.replace(/\D/g, ""));
    const destNum = Number.parseInt(destination.replace(/\D/g, ""));
    const distance = Math.abs(originNum - destNum);
    const baseCost = 15.0;
    const distanceCost = (distance / 10000) * 5;
    return Math.max(baseCost, baseCost + distanceCost);
  };

  const formatZipCode = (zip: string): string => {
    const numbers = zip.replace(/\D/g, "");
    if (numbers.length <= 5) {
      return numbers;
    }
    return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`;
  };

  const addMessage = (content: string, role: "user" | "assistant") => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      role,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const simulateTyping = (callback: () => void, delay = 1500) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userInput = input.trim();
    addMessage(userInput, "user");
    setInput("");

    simulateTyping(() => {
      switch (step) {
        case "initial":
          if (userInput === "1") {
            addMessage(
              "Perfeito! Vamos simular o frete para você. 📦\n\nPor favor, digite o CEP de origem (de onde será enviado o produto):",
              "assistant"
            );
            setStep("service-selected");
          } else {
            addMessage(
              "Opção inválida. Por favor, digite:\n\n1️⃣ Para simular frete",
              "assistant"
            );
          }
          break;

        case "service-selected":
          const zipPattern = /^\d{5}-?\d{3}$/;
          if (
            zipPattern.test(
              userInput.replace(/\D/g, "").replace(/(\d{5})(\d{3})/, "$1-$2")
            )
          ) {
            setOriginZip(userInput);
            addMessage(
              `CEP de origem registrado: ${formatZipCode(
                userInput
              )} ✅\n\nAgora digite o CEP de destino (para onde será enviado o produto):`,
              "assistant"
            );
            setStep("origin-provided");
          } else {
            addMessage(
              "CEP inválido. Por favor, digite um CEP válido no formato 12345-678 ou 12345678:",
              "assistant"
            );
          }
          break;

        case "origin-provided":
          const destZipPattern = /^\d{5}-?\d{3}$/;
          if (
            destZipPattern.test(
              userInput.replace(/\D/g, "").replace(/(\d{5})(\d{3})/, "$1-$2")
            )
          ) {
            setDestinationZip(userInput);
            const cost = calculateShippingCost(originZip, userInput);
            const formattedOrigin = formatZipCode(originZip);
            const formattedDest = formatZipCode(userInput);

            addMessage(
              `🎉 Simulação de frete concluída!\n\n` +
                `📍 Origem: ${formattedOrigin}\n` +
                `📍 Destino: ${formattedDest}\n` +
                `💰 Valor do frete: R$ ${cost.toFixed(2)}\n` +
                `⏱️ Prazo estimado: 3-5 dias úteis\n\n` +
                `Gostaria de fazer uma nova simulação? Digite 1 para começar novamente.`,
              "assistant"
            );
            setStep("completed");
          } else {
            addMessage(
              "CEP inválido. Por favor, digite um CEP válido no formato 12345-678 ou 12345678:",
              "assistant"
            );
          }
          break;

        case "completed":
          if (userInput === "1") {
            setOriginZip("");
            setDestinationZip("");
            addMessage(
              "Nova simulação iniciada! 🚚\n\nPor favor, digite o CEP de origem (de onde será enviado o produto):",
              "assistant"
            );
            setStep("service-selected");
          } else {
            addMessage(
              "Obrigado por usar nosso serviço! 😊\n\nPara fazer uma nova simulação, digite 1.",
              "assistant"
            );
          }
          break;
      }
    });
  };

  return (
    <Card className="w-full max-w-2xl shadow-xl">
      <CardHeader>
        <CardTitle>Chat Bot</CardTitle>
        <CardDescription>
          Faça a sua simulação simples para sua entrega.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[50vh] overflow-y-auto p-4">
        <ScrollArea>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                } space-x-2`}
              >
                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>ST</AvatarFallback>
                    <AvatarImage src="https://media.licdn.com/dms/image/v2/C4E0BAQHoHKiRU3uWHg/company-logo_200_200/company-logo_200_200/0/1646920427869?e=1754524800&v=beta&t=mb6kgif4sURecOl9YZkLQvFUdpvcrwbfpOBLo-jWjmA" />
                  </Avatar>
                )}

                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>US</AvatarFallback>
                    <AvatarImage src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" />
                  </Avatar>
                )}

                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 shadow-md rounded-bl-none border"
                  }`}
                >
                  <div className="whitespace-pre-line text-sm">
                    {message.content}
                  </div>
                  <div
                    className={`text-xs mt-1 ${
                      message.role === "user"
                        ? "text-blue-100"
                        : "text-gray-500"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString("pt-BR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 shadow-md rounded-lg rounded-bl-none border p-3 max-w-[80%]">
                  <div className="flex items-center space-x-1">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2  rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      Digitando...
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </ScrollArea>
      </CardContent>
      <CardFooter className="bg-white border-t p-4">
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <div className="relative flex-grow">
            <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua resposta..."
              className="pl-10 pr-4 py-2 border-2 border-gray-200 focus:border-blue-500 rounded-lg"
              disabled={isTyping}
            />
          </div>
          <Button
            type="submit"
            disabled={isTyping || !input.trim()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Enviar
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
