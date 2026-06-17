import { useInView } from '../hooks/useInView';

export default function About() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="text-secondary font-semibold text-sm uppercase tracking-[4px]">Quem Somos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 font-[family-name:var(--font-heading)]">
            Sobre o Escritório
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side - REMOVIDO o relative */}
          <div className={`${isInView ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <div className="relative">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663161078594/ZUMkEfcLhaKblkBV.png"
                alt="Escritório Santana & Dantas Advocacia"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-secondary/30 rounded-2xl -z-10" />
            </div>

            {/* Floating card - AGORA FORA DO POSICIONAMENTO ABSOLUTO */}
            <div className="mt-4 -ml-4 sm:ml-4 bg-white rounded-xl shadow-xl p-5 border-l-4 border-secondary max-w-[240px]">
              <div className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">2025</div>
              <p className="text-sm text-gray-600 mt-1">Fundado com o propósito de excelência jurídica</p>
            </div>
          </div>

          {/* Content Side - mantido igual */}
          <div className={`${isInView ? 'animate-slideInRight' : 'opacity-0'}`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-[family-name:var(--font-heading)]">
              Compromisso com a Excelência Jurídica
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                O escritório <strong className="text-primary">Santana & Dantas</strong> foi fundado em 2025 com o propósito de oferecer assessoria jurídica completa e especializada nas áreas de Direito Previdenciário, Trabalhista, Tributário e da Saúde.
              </p>
              <p>
                Desde a sua origem, nossa atuação é pautada pela excelência, ética profissional e pelo compromisso com a qualidade dos serviços prestados.
              </p>
              <p>
                Contamos com a expertise de nossos dois sócio-fundadores, <strong className="text-primary">Dra. Fernanda Dantas</strong> e <strong className="text-primary">Dr. Thiago Lopes</strong>, profissionais altamente qualificados e em constante atualização com as mais recentes mudanças na legislação.
              </p>
            </div>

            {/* Mission Box */}
            <div className="mt-8 bg-gray-50 rounded-xl p-6 border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-primary font-[family-name:var(--font-heading)]">Missão do Escritório</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Proporcionar segurança jurídica e soluções eficientes para nossos clientes, através de uma advocacia ética, moderna e orientada para resultados.
              </p>
            </div>

            {/* Key Features */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: '⚖️', text: 'Ética Profissional' },
                { icon: '🎯', text: 'Foco em Resultados' },
                { icon: '🤝', text: 'Atendimento Personalizado' },
                { icon: '📚', text: 'Atualização Constante' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
