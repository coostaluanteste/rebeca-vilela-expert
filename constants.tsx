
import React from 'react';
import { ImageData, Benefit, Step } from './types';

export const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5584987929026&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+Dra.+Rebeca+Vilela+%EF%BF%BD&type=phone_number&app_absent=0";
export const INSTAGRAM_URL = "https://www.instagram.com/dra.rebecavilela/";

export const GALLERY_IMAGES: ImageData[] = [
  // Antes e Depois
  { url: "https://i.imgur.com/e120jgV.jpeg", category: 'antes-depois' },
  { url: "https://i.imgur.com/8BujxB8.jpeg", category: 'antes-depois' },
  { url: "https://i.imgur.com/s7qRpDm.jpeg", category: 'antes-depois' },
  { url: "https://i.imgur.com/gChDlNt.jpeg", category: 'antes-depois' },
  { url: "https://i.imgur.com/6qNpjCr.jpeg", category: 'antes-depois' },
  { url: "https://i.imgur.com/vlaAY5n.jpeg", category: 'antes-depois' },
  { url: "https://i.imgur.com/lA2niTH.png", category: 'antes-depois' },
  
  // Feedback
  { url: "https://i.imgur.com/GU2VE8g.png", category: 'feedback' },
  { url: "https://i.imgur.com/qxZ4BsV.png", category: 'feedback' },
  { url: "https://i.imgur.com/zs14y9f.png", category: 'feedback' },
  { url: "https://i.imgur.com/5Rza0v9.png", category: 'feedback' },
  { url: "https://i.imgur.com/gI98zfo.png", category: 'feedback' },
  
  // Botox
  { url: "https://i.imgur.com/hc5uNC3.png", category: 'botox' },
  { url: "https://i.imgur.com/8QxVnpV.png", category: 'botox' },
  { url: "https://i.imgur.com/iyqqhUM.png", category: 'botox' },
  { url: "https://i.imgur.com/138iAtx.png", category: 'botox' },
  { url: "https://i.imgur.com/OhpINWx.png", category: 'botox' },
  { url: "https://i.imgur.com/5Dx2mSY.png", category: 'botox' },
  
  // Crianças
  { url: "https://i.imgur.com/jiwJByR.png", category: 'criancas' },
  { url: "https://i.imgur.com/qifY7yg.png", category: 'criancas' },
  { url: "https://i.imgur.com/IDIBdcX.png", category: 'criancas' },
  { url: "https://i.imgur.com/lBPvjBR.png", category: 'criancas' },
  { url: "https://i.imgur.com/KhkHwlp.png", category: 'criancas' },
  { url: "https://i.imgur.com/YXsCujM.png", category: 'criancas' },
  { url: "https://i.imgur.com/LbLqkIL.png", category: 'criancas' },
];

export const BENEFITS: Benefit[] = [
  {
    title: "Avaliação Honestidade",
    description: "Sem tratamentos desnecessários. Foco total no que você realmente precisa.",
    icon: "sparkles"
  },
  {
    title: "Atendimento Personalizado",
    description: "Você não é apenas um número. Eu acompanho cada etapa do seu processo.",
    icon: "user"
  },
  {
    title: "Modernidade & Conforto",
    description: "As técnicas mais atuais para garantir que sua experiência seja indolor e eficaz.",
    icon: "heart"
  },
  {
    title: "Clareza Total",
    description: "Explico cada procedimento em detalhes para que você se sinta seguro(a).",
    icon: "shield-check"
  }
];

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Conversa no WhatsApp",
    description: "Clique no botão e fale diretamente com minha equipe para tirar dúvidas básicas."
  },
  {
    number: "02",
    title: "Agendamento Simples",
    description: "Escolhemos o melhor horário para você vir ao consultório em Natal."
  },
  {
    number: "03",
    title: "Sua Avaliação Gratuita",
    description: "Faço um diagnóstico completo e montamos seu plano de tratamento sem custo."
  }
];
