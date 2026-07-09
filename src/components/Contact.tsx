import { useInView } from '../hooks/useInView';

export default function Contact() {
  const { ref, isInView } = useInView(0.1);

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      label: 'Telefone / WhatsApp - Dra. Fernanda Dantas',
      value: '(99) 98488-1281',
      link: 'https://wa.me/5599984881281',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      label: 'Telefone / WhatsApp - Dr. Thiago Santana',
      value: '(99) 98404-2123',
      link: 'https://wa.me/5599984042123',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: 'E-mail - Dra. Fernanda Dantas',
      value: 'nandahadv@hotmail.com',
      link: 'mailto:nandahadv@hotmail.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: 'E-mail - Dr. Thiago Santana',
      value: 'advthiagosantana@hotmail.com',
      link: 'mailto:advthiagosantana@hotmail.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      label: 'Localização',
      value: 'Imperatriz - Maranhão',
      link: 'https://maps.app.goo.gl/38dutXrDLisUJtnS9',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Horário de Atendimento',
      value: 'Seg - Sex: 8h às 18h',
      link: '#',
    },
  ];

  return (
    <section id="contato" className="py-20 lg:py-28 bg-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="text-secondary font-semibold text-sm uppercase tracking-[4px]">Fale Conosco</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 font-[family-name:var(--font-heading)]">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4" />
          <p className="text-gray mt-6 max-w-2xl mx-auto">
            Estamos prontos para atendê-lo. Entre em contato e agende uma consulta para discutir o seu caso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className={`${isInView ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <div className="bg-primary rounded-2xl p-8 lg:p-10 text-white">
              <h3 className="text-2xl font-bold mb-2 font-[family-name:var(--font-heading)]">Informações de Contato</h3>
              <p className="text-white/70 text-sm mb-8">
                Escolha a forma mais conveniente para entrar em contato conosco.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 group hover:bg-white/5 p-3 rounded-xl transition-colors -mx-3"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wider">{info.label}</p>
                      <p className="text-white font-semibold mt-0.5">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

             {/* Social */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-white/60 text-xs uppercase tracking-wider mb-4">Redes Sociais</p>
                <div className="flex gap-3">
                  {/* Instagram - COM LINK */}
                  <a
                    href="https://www.instagram.com/santanaedantasadvocacia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-secondary/30 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
              
                  {/* Facebook - SEM LINK (placeholder) */}
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-secondary/30 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
              
                  {/* LinkedIn - SEM LINK (placeholder) */}
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-secondary/30 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form / WhatsApp CTA */}
          <div className={`${isInView ? 'animate-slideInRight' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-2 font-[family-name:var(--font-heading)]">
                Agende sua Consulta
              </h3>
              <p className="text-gray text-sm mb-8">
                Envie uma mensagem diretamente pelo WhatsApp e nossa equipe retornará o mais breve possível.
              </p>

              {/* Quick Contact Options - Cada um com seu número */}
              <div className="space-y-4 mb-8">
                {[
                  { 
                    label: 'Quero agendar uma consulta sobre Direito Previdenciário',
                    numero: '5599984881281',
                    especialista: 'Dra. Fernanda Dantas'
                  },
                  { 
                    label: 'Preciso de assessoria em Direito Trabalhista',
                    numero: '5599984881281',
                    especialista: 'Dra. Fernanda Dantas'
                  },
                  { 
                    label: 'Gostaria de consultoria em Direito Tributário',
                    numero: '5599984042123',
                    especialista: 'Dr. Thiago Santana'
                  },
                  { 
                    label: 'Tenho uma questão sobre Direito da Saúde',
                    numero: '5599984881281',
                    especialista: 'Dra. Fernanda Dantas'
                  },
                  { 
                    label: 'Outra questão jurídica',
                    numero: '5599984881281',
                    especialista: 'equipe Santana & Dantas'
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={`https://wa.me/${item.numero}?text=${encodeURIComponent(`Olá! ${item.label}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-secondary hover:bg-secondary/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-green-50 group-hover:bg-green-100 rounded-full flex items-center justify-center shrink-0 transition-colors">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.624-1.467A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.17 0-4.207-.69-5.87-1.868l-.42-.281-2.744.87.912-2.665-.308-.461A9.708 9.708 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12s-4.365 9.75-9.75 9.75z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-dark group-hover:text-primary transition-colors">
                        {item.label}
                      </span>
                      <span className="block text-xs text-gray-400">
                        Falar com {item.especialista}
                      </span>
                    </div>
                    <svg className="w-4 h-4 text-gray ml-auto shrink-0 group-hover:text-secondary group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Main WhatsApp CTA */}
              <a
                href="https://wa.me/5599984881281?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.624-1.467A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.17 0-4.207-.69-5.87-1.868l-.42-.281-2.744.87.912-2.665-.308-.461A9.708 9.708 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12s-4.365 9.75-9.75 9.75z" />
                </svg>
                Abrir WhatsApp
              </a>

              <p className="text-center text-xs text-gray mt-4">
                Atendimento de segunda a sexta, das 8h às 18h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
