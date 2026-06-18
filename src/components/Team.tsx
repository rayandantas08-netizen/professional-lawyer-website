import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const teamMembers = [
  {
    id: 'fernanda',
    name: 'Dra. Fernanda Dantas',
    role: 'Sócia Fundadora',
    areas: 'Direito Trabalhista | Previdenciário | Saúde',
    photo: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663111964572/PadLDsXGCrEICQpO.jpeg',
    bio: 'Especialista em Direito Trabalhista e Previdenciário. Formação em Direito FACIMP WYDEN. Mais de 9 anos de experiência defendendo os direitos dos trabalhadores e segurados.',
    formation: [
      'Graduação em Direito - FACIMP WYDEN',
      'Pós-Graduação em Direito Processual Integrado: Trabalhista, Civil e Penal',
      'Pós-Graduação em Direito Previdenciário - Universidade Federal do Maranhão (UFMA)',
    ],
    experience: [
      { period: '2017 - 2025', desc: 'Advogada Trabalhista e Previdenciária' },
      { period: '2025 - Presente', desc: 'Fundadora e Sócia do Escritório Santana & Dantas Advocacia' },
    ],
    specializations: [
      'Direito Trabalhista', 'Direito Previdenciário', 'Direito da Saúde',
      'Benefícios por Incapacidade', 'Aposentadorias', 'Revisões de Benefícios',
      'Ações contra Planos de Saúde', 'Direitos do Trabalhador',
    ],
    awards: [
      'Prêmio "Mulheres na Advocacia" - OAB/MA (2022)',
      'Listada no Anuário dos Melhores Advogados do Maranhão (2018-2023)',
    ],
    highlights: [
      'Concessão de aposentadoria especial para trabalhador exposto a agentes nocivos por mais de 25 anos',
      'Representação de mais de 50 clientes em ações previdenciárias com taxa de sucesso superior a 95%',
      'Ação bem-sucedida contra plano de saúde para fornecimento de medicamento de alto custo',
    ],
  },
  {
    id: 'thiago',
    name: 'Dr. Thiago Santana',
    role: 'Sócio Fundador',
    areas: 'Direito Tributário | Empresarial | Contábil',
    photo: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663161078594/DHYzMvISArFVYEFg.jpg',
    bio: 'Especialista em Direito Tributário e Empresarial. Formação em Direito pelo FEST. Mais de 13 anos de experiência em planejamento tributário e consultoria empresarial.',
    formation: [
      'Graduação em Direito - FEST (2013)',
      'Pós-Graduação em Direito Processual Integrado Trabalhista, Civil e Penal',
    ],
    experience: [
      { period: '2013 - Presente', desc: 'Escritorio de Contabilidade: FeedBack Associados' },
      { period: '2025 - Presente', desc: 'Fundador e Sócio do Escritório Santana & Dantas Advocacia' },
    ],
    specializations: [
      'Direito Tributário', 'Direito Empresarial', 'Planejamento Tributário',
      'Recuperação de Créditos', 'Regularização Fiscal', 'Consultoria Contábil',
      'Defesa Administrativa', 'Compliance Tributário','Direito das Sucessões',
    ],
    awards: [
      'Reconhecido pela excelência em Planejamento Tributário - OAB/MA',
      'Consultor tributário de referência no Maranhão',
    ],
    highlights: [
      'Recuperação de créditos tributários superiores a R$ 2 milhões para empresas',
      'Planejamento tributário com economia fiscal média de 30% para seus clientes',
      'Defesa em mais de 100 processos administrativos fiscais com alto índice de êxito',
    ],
  },
];

export default function Team() {
  const { ref, isInView } = useInView(0.05);
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const selectedMember = teamMembers.find(m => m.id === selectedProfile);

  return (
    <section id="equipe" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="text-secondary font-semibold text-sm uppercase tracking-[4px]">Profissionais</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 font-[family-name:var(--font-heading)]">
            Nossa Equipe
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4" />
          <p className="text-gray mt-6 max-w-2xl mx-auto">
            Conheça os profissionais que estão prontos para defender seus direitos com dedicação e competência.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${
                isInView ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Photo */}
              <div className="relative overflow-hidden h-[450px]">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-heading)]">{member.name}</h3>
                  <p className="text-secondary font-semibold text-sm">{member.role}</p>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="inline-flex items-center gap-2 bg-primary/5 rounded-full px-4 py-1.5 mb-4">
                  <span className="text-xs font-semibold text-primary">{member.areas}</span>
                </div>
                <p className="text-gray text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                <button
                  onClick={() => setSelectedProfile(member.id)}
                  className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:text-primary transition-colors group/btn"
                >
                  Ver Perfil Completo
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Modal */}
      {selectedProfile && selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedProfile(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fadeInUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative bg-primary p-8 rounded-t-2xl">
              <button
                onClick={() => setSelectedProfile(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex items-center gap-5">
                <img
                  src={selectedMember.photo}
                  alt={selectedMember.name}
                  className="w-20 h-20 rounded-full object-cover object-center border-3 border-secondary"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-heading)]">{selectedMember.name}</h3>
                  <p className="text-secondary font-semibold">{selectedMember.role}</p>
                  <p className="text-white/70 text-sm">{selectedMember.areas}</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              {/* Formação */}
              <div>
                <h4 className="text-lg font-bold text-primary mb-4 flex items-center gap-2 font-[family-name:var(--font-heading)]">
                  <span className="text-xl">🎓</span> Formação Acadêmica
                </h4>
                <ul className="space-y-2">
                  {selectedMember.formation.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experiência */}
              <div>
                <h4 className="text-lg font-bold text-primary mb-4 flex items-center gap-2 font-[family-name:var(--font-heading)]">
                  <span className="text-xl">💼</span> Experiência Profissional
                </h4>
                <ul className="space-y-3">
                  {selectedMember.experience.map((item) => (
                    <li key={item.period} className="flex items-start gap-3 text-sm">
                      <span className="font-bold text-primary whitespace-nowrap">{item.period}:</span>
                      <span className="text-gray">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Especializações */}
              <div>
                <h4 className="text-lg font-bold text-primary mb-4 flex items-center gap-2 font-[family-name:var(--font-heading)]">
                  <span className="text-xl">⚡</span> Especializações
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.specializations.map((spec) => (
                    <span key={spec} className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Prêmios */}
              <div>
                <h4 className="text-lg font-bold text-primary mb-4 flex items-center gap-2 font-[family-name:var(--font-heading)]">
                  <span className="text-xl">🏆</span> Destaques e Prêmios
                </h4>
                <ul className="space-y-2">
                  {selectedMember.awards.map((award) => (
                    <li key={award} className="flex items-start gap-3 text-sm text-gray">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                      {award}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Atuações Marcantes */}
              <div>
                <h4 className="text-lg font-bold text-primary mb-4 flex items-center gap-2 font-[family-name:var(--font-heading)]">
                  <span className="text-xl">⭐</span> Atuações Marcantes
                </h4>
                <ul className="space-y-2">
                  {selectedMember.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-sm text-gray">
                      <svg className="w-4 h-4 text-secondary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
