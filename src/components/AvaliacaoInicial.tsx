import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const AvaliacaoInicial: React.FC = () => {
  const { showToast } = useToast();
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [areaInteresse, setAreaInteresse] = useState('Prevenção & Longevidade');
  const [objetivo, setObjetivo] = useState('');
  const [melhorHorario, setMelhorHorario] = useState('Manhã (08h às 12h)');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !telefone.trim() || !email.trim() || !email.includes('@')) {
      const errorMsg = 'Por favor, preencha os campos obrigatórios (Nome, Telefone e E-mail válido).';
      setError(errorMsg);
      showToast({
        type: 'warning',
        category: 'ATENÇÃO',
        title: 'Campos Obrigatórios Pendentes',
        description: errorMsg,
        duration: 4000
      });
      return;
    }
    setError('');
    setSubmitted(true);
    showToast({
      type: 'success',
      category: 'AVALIAÇÃO INICIAL · VITRAE',
      title: 'Mensagem Enviada com Sucesso',
      description: `Obrigado, ${nome}. Nosso concierge entrará em contato pelo WhatsApp no período indicado (${melhorHorario}).`,
      duration: 6000
    });
  };

  return (
    <section className="py-24 md:py-32 bg-[#F5F3EF]/60 border-t border-[#1E2229]/6">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs tracking-wider uppercase font-semibold text-[#0D9488] mb-3">
            Primeiro Passo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F1B29] font-display">
            Comece pelo que importa.
          </h2>
          <p className="text-base text-[#475569] mt-3 font-normal leading-relaxed">
            Compartilhe brevemente seus objetivos de saúde e nosso concierge desenhará o ponto de partida ideal para sua jornada médica.
          </p>
        </div>

        {/* Elegant Form Card */}
        <div className="bg-white border border-[#1E2229]/10 rounded-2xl p-8 sm:p-12 shadow-sm">
          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-[#0D9488]/15 text-[#0D9488] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-display text-[#0F1B29]">
                Recebemos sua mensagem
              </h3>
              <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                Obrigado, <strong className="text-[#0F1B29]">{nome}</strong>. Nosso concierge de saúde entrará em contato pelo WhatsApp no período indicado (<span className="text-[#0D9488] font-medium">{melhorHorario}</span>) para orientar os primeiros passos.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setNome('');
                    setTelefone('');
                    setEmail('');
                    setObjetivo('');
                  }}
                  className="px-6 py-2.5 rounded-lg border border-[#1E2229]/15 text-xs font-semibold text-[#1E2229] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Enviar outra mensagem
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {error && (
                <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-[#1E2229] mb-1.5">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-lg border border-[#1E2229]/12 bg-[#FAF8F5] text-xs text-[#1E2229] focus:outline-none focus:ring-1 focus:ring-[#0D9488]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1E2229] mb-1.5">
                    Telefone com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="(11) 98765-4321"
                    className="w-full px-4 py-3 rounded-lg border border-[#1E2229]/12 bg-[#FAF8F5] text-xs text-[#1E2229] focus:outline-none focus:ring-1 focus:ring-[#0D9488]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1E2229] mb-1.5">
                    E-mail Preferencial *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu.email@exemplo.com"
                    className="w-full px-4 py-3 rounded-lg border border-[#1E2229]/12 bg-[#FAF8F5] text-xs text-[#1E2229] focus:outline-none focus:ring-1 focus:ring-[#0D9488]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1E2229] mb-1.5">
                    Área de Interesse Principal
                  </label>
                  <select
                    value={areaInteresse}
                    onChange={(e) => setAreaInteresse(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[#1E2229]/12 bg-[#FAF8F5] text-xs text-[#1E2229] focus:outline-none focus:ring-1 focus:ring-[#0D9488]"
                  >
                    <option>Prevenção & Longevidade</option>
                    <option>Bem-estar, Sono & Vitalidade</option>
                    <option>Saúde da Mulher & Ciclos</option>
                    <option>Saúde do Homem & Vigor</option>
                    <option>Performance & Fisioterapia Biomecânica</option>
                    <option>Dermatologia de Precisão</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-[#1E2229] mb-1.5">
                    Melhor Horário para Contato do Concierge
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['Manhã (08h às 12h)', 'Tarde (13h às 17h)', 'Final do dia (17h às 19h)'].map((h) => (
                      <button
                        key={h}
                        type="button"
                        onClick={() => setMelhorHorario(h)}
                        className={`py-2.5 px-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                          melhorHorario === h
                            ? 'bg-[#0F1B29] text-white border-[#0F1B29]'
                            : 'bg-[#FAF8F5] text-[#475569] border-[#1E2229]/8 hover:border-[#1E2229]/20'
                        }`}
                      >
                        {h}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-[#1E2229] mb-1.5">
                    Objetivo Principal ou Sintomas Relevantes (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={objetivo}
                    onChange={(e) => setObjetivo(e.target.value)}
                    placeholder="Conte brevemente o que você deseja priorizar neste momento em sua saúde..."
                    className="w-full px-4 py-3 rounded-lg border border-[#1E2229]/12 bg-[#FAF8F5] text-xs text-[#1E2229] focus:outline-none focus:ring-1 focus:ring-[#0D9488]"
                  />
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-[11px] text-[#64748B]">
                  Privacidade integral garantida · Sem mensagens automáticas invasivas
                </span>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#0F1B29] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E2229] active:scale-[0.98] transition-all cursor-pointer shadow-xs whitespace-nowrap"
                >
                  <span>Enviar dados para contato</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
