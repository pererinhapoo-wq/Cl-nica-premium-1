import React, { useState } from 'react';
import { EDITORIAL_ARTICLES, EditorialArticle } from '../data/clinicData';
import { ArrowRight, BookOpen, X, Clock } from 'lucide-react';

export const ConteudoEditorial: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<EditorialArticle | null>(null);

  return (
    <section className="py-24 md:py-32 bg-[#FAF8F5] border-t border-[#1E2229]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs tracking-wider uppercase font-semibold text-[#0D9488] mb-3">
            Publicações & Ensaios Clínicos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F1B29] font-display">
            Informação para escolhas melhores
          </h2>
          <p className="text-base sm:text-lg text-[#475569] mt-3 font-normal leading-relaxed">
            Reflexões editoriais redigidas por nosso corpo clínico sobre biologia aplicada, sono, inflamação e práticas sustentáveis de longevidade.
          </p>
        </div>

        {/* Editorial Essays Layout (3 distinct essays with high typographic discipline) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDITORIAL_ARTICLES.map((article, index) => (
            <article
              key={article.id}
              className="bg-white border border-[#1E2229]/8 rounded-2xl p-7 flex flex-col justify-between hover:border-[#1E2229]/20 transition-all group"
            >
              <div>
                {/* Zero-Pill Unboxed Metadata */}
                <div className="flex items-center gap-2 text-xs text-[#64748B] mb-3">
                  <span className="font-mono text-[#0D9488] uppercase tracking-wider">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold font-display text-[#0F1B29] leading-snug group-hover:text-[#0D9488] transition-colors mb-4">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 font-normal">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-[#1E2229]/6 flex items-center justify-between">
                <span className="text-xs text-[#64748B] truncate max-w-[180px]">
                  {article.author}
                </span>

                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F1B29] hover:text-[#0D9488] transition-colors cursor-pointer"
                >
                  <span>Ler ensaio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            className="bg-[#FAF8F5] border border-[#1E2229]/20 rounded-2xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 text-[#475569] hover:text-[#0F1B29] rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-[#64748B] font-mono mb-2">
              <span className="text-[#0D9488] uppercase tracking-wider">{selectedArticle.category}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedArticle.readTime}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedArticle.date}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0F1B29] leading-snug mb-4">
              {selectedArticle.title}
            </h3>

            <div className="text-xs text-[#64748B] mb-8 pb-4 border-b border-[#1E2229]/8">
              Por <strong className="text-[#0F1B29]">{selectedArticle.author}</strong>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#1E2229] leading-relaxed font-normal">
              {selectedArticle.fullText.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#1E2229]/8 text-right">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-lg bg-[#0F1B29] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E2229] transition-colors cursor-pointer"
              >
                Fechar Artigo
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
