import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const areas = [
  {
    id: 'previdenciario',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Direito Previdenciário',
    description: 'Assessoria jurídica especializada em Direito Previdenciário para indivíduos, atuando na concessão e revisão de aposentadorias, pensões, benefícios por incapacidade, BPC-LOAS e demais benefícios previdenciários e assistenciais junto ao INSS.',
    services: [
      { name: 'Aposentadorias', desc: 'Cálculo, planejamento e requerimento de aposentadorias por idade, tempo de contribuição, especial, híbrida e da pessoa com deficiência.' },
      { name: 'Benefícios por Incapacidade', desc: 'Auxílio-doença, aposentadoria por invalidez e auxílio-acidente, incluindo prorrogações e recursos em caso de negativa.' },
      { name: 'Pensão por Morte', desc: 'Requerimento de pensão para dependentes, divisão de cotas e regularização de dependência econômica.' },
      { name: 'BPC-LOAS', desc: 'Benefício Assistencial ao Idoso e à Pessoa com Deficiência de baixa renda.' },
      { name: 'Revisões de Benefícios', desc: 'Análise e cálculo de revisões para aumento do valor do benefício.' },
      { name: 'Planejamento Previdenciário', desc: 'Estudo personalizado para identificar o melhor momento e a modalidade mais vantajosa de aposentadoria.' },
    ],
  },
  {
    id: 'trabalhista',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
    title: 'Direito Trabalhista',
    description: 'Assessoria preventiva e contenciosa trabalhista para empresas e trabalhadores, elaboração de contratos, negociações coletivas e defesa em processos trabalhistas.',
    services: [
      { name: 'Reclamatórias Trabalhistas', desc: 'Ações judiciais para garantir os direitos dos trabalhadores.' },
      { name: 'Consultoria Preventiva', desc: 'Orientação empresarial para evitar litígios trabalhistas.' },
      { name: 'Rescisões e Acordos', desc: 'Análise e acompanhamento de rescisões contratuais.' },
      { name: 'Horas Extras e Adicionais', desc: 'Cálculo e cobrança de verbas trabalhistas devidas.' },
    ],
  },
  {
    id: 'tributario',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'Direito Tributário',
    description: 'Assessoria em planejamento tributário, defesa em processos administrativos e judiciais, recuperação de créditos fiscais, regularização fiscal de empresas e pessoas físicas, e consultoria preventiva.',
    services: [
      { name: 'Planejamento Tributário', desc: 'Estratégias legais para redução da carga tributária.' },
      { name: 'Defesa Fiscal', desc: 'Representação em processos administrativos e judiciais.' },
      { name: 'Recuperação de Créditos', desc: 'Identificação e recuperação de créditos tributários.' },
      { name: 'Regularização Fiscal', desc: 'Regularização de pendências junto aos órgãos fiscais.' },
    ],
  },
  {
    id: 'saude',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Direito da Saúde',
    description: 'Ações contra planos de saúde, fornecimento de medicamentos e tratamentos, internações, erro médico, acesso ao SUS e defesa dos direitos dos pacientes.',
    services: [
      { name: 'Planos de Saúde', desc: 'Ações contra negativas indevidas de cobertura.' },
      { name: 'Medicamentos', desc: 'Fornecimento de medicamentos de alto custo via judicial.' },
      { name: 'Erro Médico', desc: 'Responsabilização e indenização por erro médico.' },
      { name: 'Acesso ao SUS', desc: 'Garantia de acesso a tratamentos pelo sistema público.' },
    ],
  },
  {
    id: 'sucessorio',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
      </svg>
    ),
    title: 'Direito Sucessório',
    description: 'Atuação especializada em planejamento sucessório, inventários, partilhas de bens, testamentos, doações e regularização de heranças, garantindo a proteção do patrimônio e a vontade do falecido.',
    services: [
      { name: 'Inventário Judicial e Extrajudicial', desc: 'Acompanhamento completo do processo de inventário, seja judicial ou extrajudicial, com agilidade e segurança.' },
      { name: 'Planejamento Sucessório', desc: 'Elaboração de estratégias para proteção do patrimônio e redução de impostos na transmissão de bens.' },
      { name: 'Testamento e Doações', desc: 'Elaboração de testamentos, codicilos e doações em vida, com orientação sobre as melhores alternativas.' },
      { name: 'Partilha de Bens', desc: 'Atuação na divisão de bens entre herdeiros, resolvendo conflitos e garantindo a justa distribuição.' },
      { name: 'Inventário Negativo', desc: 'Declaração de inexistência de bens para encerramento do espólio.' },
      { name: 'Regularização de Heranças', desc: 'Regularização de bens herdados, incluindo imóveis, veículos e contas bancárias.' },
    ],
  },
];

export default function Areas() {
  const { ref, isInView } = useInView(0.05);
  const [expandedArea, setExpandedArea] = useState<string | null>(null);

  return (
    <section id="areas" className="py-20 lg:py-28 bg-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="text-secondary font-semibold text-sm uppercase tracking-[4px]">Especialidades</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 font-[family-name:var(--font-heading)]">
            Áreas de Atuação
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4" />
          <p className="text-gray mt-6 max-w-2xl mx-auto">
            Atuamos com excelência em diversas áreas do Direito, oferecendo soluções jurídicas completas e personalizadas.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {areas.map((area, index) => (
            <div
              key={area.id}
              className={`group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-secondary/30 ${
                isInView ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/5 group-hover:bg-primary rounded-xl flex items-center justify-center mb-6 transition-all duration-500 text-primary group-hover:text-white">
                {area.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary mb-3 font-[family-name:var(--font-heading)]">
                {area.title}
              </h3>
              <p className="text-gray text-sm leading-relaxed mb-6">
                {area.description}
              </p>

              {/* Toggle Services */}
              <button
                onClick={() => setExpandedArea(expandedArea === area.id ? null : area.id)}
                className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:text-primary transition-colors"
              >
                {expandedArea === area.id ? 'Recolher' : 'Ver Serviços'}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${expandedArea === area.id ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Expanded Services */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedArea === area.id ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="border-t border-light-gray pt-6 space-y-4">
                  {area.services.map((service) => (
                    <div key={service.name} className="flex gap-3">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                      <div>
                        <h5 className="font-semibold text-dark text-sm">{service.name}</h5>
                        <p className="text-gray text-xs mt-1">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 ${isInView ? 'animate-fadeInUp delay-600' : 'opacity-0'}`}>
          <a
            href="#contato"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-primary-light hover:shadow-xl hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Consulte um Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
