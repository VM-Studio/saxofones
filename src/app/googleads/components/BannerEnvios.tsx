export function BannerEnvios() {
  return (
    <section className="relative pt-12 pb-6 bg-gradient-to-br from-gold-light/30 via-gold/15 to-brown-light/20 overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,111,71,0.08),transparent_50%)]"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold/8 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brown/6 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-gold/40 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-brown/30 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-gold/50 rounded-full animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center space-y-4">
          {/* Main title with enhanced styling */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent blur-xl"></div>
            <h2 className="relative text-2xl md:text-3xl lg:text-4xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-brown-dark via-gold to-brown-dark tracking-tight leading-tight">
              Envíos a Todo el País
            </h2>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>

          {/* Premium benefits badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-gold/10 rounded-lg blur-md group-hover:blur-lg transition-all duration-500"></div>
              <div className="relative flex items-center justify-center bg-white/90 backdrop-blur-xl px-4 py-2 rounded-lg shadow-lg border border-brown-dark hover:shadow-gold transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
                <span className="text-sm font-bold text-brown-dark group-hover:text-gold transition-colors duration-300 whitespace-nowrap">Garantía Total</span>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brown/15 to-brown-light/10 rounded-lg blur-md group-hover:blur-lg transition-all duration-500"></div>
              <div className="relative flex items-center justify-center bg-white/90 backdrop-blur-xl px-4 py-2 rounded-lg shadow-lg border border-brown-dark hover:shadow-brown transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
                <span className="text-sm font-bold text-brown-dark group-hover:text-brown transition-colors duration-300 whitespace-nowrap">Atención Personalizada</span>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-ivory/60 to-cream/40 rounded-lg blur-md group-hover:blur-lg transition-all duration-500"></div>
              <div className="relative flex items-center justify-center bg-white/95 backdrop-blur-xl px-4 py-2 rounded-lg shadow-lg border border-brown-dark hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
                <span className="text-sm font-bold text-charcoal group-hover:text-brown-dark transition-colors duration-300 whitespace-nowrap">Stock Inmediato</span>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-gold/10 rounded-lg blur-md group-hover:blur-lg transition-all duration-500"></div>
              <div className="relative flex items-center justify-center bg-white/90 backdrop-blur-xl px-4 py-2 rounded-lg shadow-lg border border-brown-dark hover:shadow-gold transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
                <span className="text-sm font-bold text-brown-dark group-hover:text-gold transition-colors duration-300 whitespace-nowrap">Envío Nacional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}