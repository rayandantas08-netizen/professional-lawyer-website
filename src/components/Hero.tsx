export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/34817075/pexels-photo-34817075.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920"
          alt="Justiça"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="animate-fadeInUp inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-slow" />
          <span className="text-white/90 text-sm font-medium tracking-wide">Excelência em Assessoria Jurídica</span>
        </div>

        {/* Title */}
        <h1 className="animate-fadeInUp delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 font-[family-name:var(--font-heading)]">
          Santana <span className="text-secondary">&</span> Dantas
          <span className="block text-2xl sm:text-3xl md:text-4xl font-light mt-2 tracking-wider text-white/90">ADVOCACIA</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fadeInUp delay-200 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
          Oferecendo soluções jurídicas estratégicas com foco em resultados e na máxima satisfação dos nossos clientes.
        </p>

        {/* CTAs */}
        <div className="animate-fadeInUp delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="group inline-flex items-center gap-3 bg-secondary text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-secondary-light hover:shadow-2xl hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.624-1.467A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.17 0-4.207-.69-5.87-1.868l-.42-.281-2.744.87.912-2.665-.308-.461A9.708 9.708 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12s-4.365 9.75-9.75 9.75z" />
            </svg>
            Fale Conosco
          </a>
          <a
            href="#areas"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#areas')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50"
          >
            Nossas Áreas
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fadeInUp delay-500 mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { number: '+8', label: 'Anos de Experiência' },
            { number: '50+', label: 'Clientes Atendidos' },
            { number: '3', label: 'Estados Atendidos' },
            { number: '4', label: 'Áreas de Atuação' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-secondary font-[family-name:var(--font-heading)]">{stat.number}</div>
              <div className="text-sm text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
