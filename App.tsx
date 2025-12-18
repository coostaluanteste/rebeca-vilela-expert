
import React from 'react';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Gallery } from './components/Gallery';
import { BENEFITS, STEPS, INSTAGRAM_URL } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <header className="relative overflow-hidden bg-[#faf9f6]">
        <div className="max-w-md mx-auto relative z-10 pt-10 pb-16 px-6 flex flex-col items-center text-center">
          {/* Badge */}
          <div className="bg-premium-gold/10 text-premium-gold text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 inline-block">
             CRO/RN 7194
          </div>
          
          <h1 className="font-serif text-4xl leading-tight mb-4">
            Eu sou <span className="text-premium-gold italic">Rebeca Vilela</span>, sua dentista em Natal.
          </h1>
          
          <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-xs">
            Te ajudo a alcançar a autoestima através do sorriso com um atendimento humano e moderno.
          </p>

          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl mb-8 border-4 border-white">
            <img 
              src="https://i.imgur.com/TqDeQM2.png" 
              alt="Dra. Rebeca Vilela" 
              className="w-full h-full object-cover"
            />
          </div>

          <WhatsAppButton />
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50/50 rounded-full blur-3xl -ml-20 -mb-20"></div>
      </header>

      {/* 2. QUEM SOU EU */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-md mx-auto">
          <h2 className="font-serif text-3xl mb-8 text-slate-800">
            Muito além do consultório, <span className="text-premium-gold italic">cuidado real.</span>
          </h2>
          
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              Acredito que um sorriso bonito vai além da estética: é sobre como você se sente ao se olhar no espelho e ao conversar com as pessoas.
            </p>
            <p>
              Meu trabalho é unir a ciência da odontologia com a sensibilidade de entender as suas dores e desejos. Aqui, você não é apenas um paciente, é alguém que merece o melhor atendimento.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {['Ortodontia', 'Clínica Geral', 'Botox', 'Kids'].map(tag => (
                <div key={tag} className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-premium-gold"></div>
                  <span className="text-sm font-semibold text-slate-700">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-md mx-auto text-center mb-10 px-6">
          <h2 className="font-serif text-3xl mb-4">Transformações & Feedbacks</h2>
          <p className="text-slate-500">Resultados reais de quem confiou no meu trabalho.</p>
        </div>
        <Gallery />
      </section>

      {/* 4. POR QUE CONFIAR */}
      <section className="py-20 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="font-serif text-3xl mb-12 text-center leading-tight">
            Por que escolher meu <br/><span className="text-premium-gold italic">atendimento?</span>
          </h2>
          
          <div className="grid grid-cols-1 gap-6">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-5 items-start">
                <div className="bg-amber-50 p-3 rounded-lg text-premium-gold">
                   {/* Fallback Icon logic simplified for React */}
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                   </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{benefit.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-16 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-serif mb-6 leading-snug italic">
            "Sua autoestima não pode esperar o 'momento perfeito'. O momento é agora."
          </h2>
          <WhatsAppButton className="!max-w-full" pulse={false} />
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-24 px-6 bg-[#faf9f6]">
        <div className="max-w-md mx-auto">
          <h2 className="font-serif text-3xl mb-12 text-center">
            Simples, fácil e <br/><span className="text-premium-gold">sem burocracia.</span>
          </h2>
          
          <div className="space-y-12">
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center">
                <div className="text-5xl font-serif text-slate-100 absolute -top-8 z-0 select-none">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-slate-500">{step.description}</p>
                </div>
                {idx < STEPS.length - 1 && (
                  <div className="h-8 w-px bg-slate-200 mt-8"></div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-premium-gold font-bold mb-6 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-premium-gold"></span>
              Apenas 3 vagas por semana para avaliações gratuitas
              <span className="w-8 h-px bg-premium-gold"></span>
            </p>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-serif text-4xl mb-6">
            Vamos conquistar o seu <br/> <span className="text-premium-gold italic">sorriso dos sonhos?</span>
          </h2>
          <p className="text-slate-600 mb-10 text-lg">
            Estou pronta para te receber e mostrar como a odontologia pode ser leve e transformadora.
          </p>
          <WhatsAppButton text="Sim! Quero minha avaliação gratuita" />
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-12 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-md mx-auto flex flex-col items-center text-center">
          <div className="font-serif text-2xl mb-2 text-premium-gold">Rebeca Vilela</div>
          <div className="text-xs text-slate-400 mb-6 tracking-widest uppercase">CRO/RN 7194</div>
          
          <address className="not-italic text-sm text-slate-500 mb-8 space-y-1">
            <p>Avenida Campos Sales, 901</p>
            <p>Tirol, Natal - RN, 59020-300</p>
          </address>

          <div className="flex gap-4 mb-8">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="p-3 bg-white rounded-full shadow-sm text-slate-600 hover:text-premium-gold transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.848 0-3.204.012-3.584.07-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          <p className="text-[10px] text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} Rebeca Vilela • Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
