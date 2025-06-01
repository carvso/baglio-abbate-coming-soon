
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-amber-900/5 via-transparent to-orange-900/5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-amber-700/20 text-6xl transform -rotate-12">
        🍇
      </div>
      <div className="absolute top-20 right-16 text-amber-600/15 text-4xl transform rotate-45">
        🌿
      </div>
      <div className="absolute bottom-16 left-20 text-orange-700/20 text-5xl transform rotate-12">
        🫒
      </div>
      <div className="absolute bottom-20 right-12 text-amber-700/25 text-3xl">
        ✨
      </div>
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        
        {/* Logo placeholder */}
        <div className="mb-8 w-32 h-32 bg-gradient-to-br from-amber-800 to-orange-900 rounded-full flex items-center justify-center shadow-2xl border-4 border-amber-100/50">
          <div className="text-amber-100 text-3xl font-serif tracking-wider">BA</div>
        </div>
        
        {/* Main content container */}
        <div className="max-w-2xl text-center space-y-8 bg-white/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-amber-200/50">
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-700"></div>
            <div className="text-amber-700 text-2xl">🏛</div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-700"></div>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-serif text-amber-900 mb-6 leading-tight">
            <span className="block text-2xl md:text-3xl text-amber-700 mb-2 font-light italic">
              Baglio Abbate
            </span>
            Pagina in costruzione
          </h1>
          
          {/* Decorative flourish */}
          <div className="flex justify-center items-center space-x-6 my-8">
            <div className="w-8 h-px bg-amber-700"></div>
            <div className="text-amber-700 text-xl">❦</div>
            <div className="w-8 h-px bg-amber-700"></div>
          </div>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-amber-800 mb-8 leading-relaxed font-serif">
            Stiamo restaurando la nostra dimora digitale.
          </p>
          
          {/* Decorative vine element */}
          <div className="flex justify-center items-center space-x-2 my-6 text-amber-600">
            <span className="text-lg">🍃</span>
            <span className="text-sm">~</span>
            <span className="text-lg">🍇</span>
            <span className="text-sm">~</span>
            <span className="text-lg">🍃</span>
          </div>
          
          {/* Closing message */}
          <div className="bg-gradient-to-r from-amber-100/50 to-orange-100/50 rounded-2xl p-6 border border-amber-200/30">
            <p className="text-lg md:text-xl text-amber-900 font-serif italic leading-relaxed">
              "Torna presto a visitarci tra le vigne."
            </p>
          </div>
          
          {/* Bottom decorative element */}
          <div className="pt-6">
            <div className="flex justify-center items-center space-x-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-600"></div>
              <div className="text-amber-600 text-lg">🌾</div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-600"></div>
            </div>
          </div>
          
        </div>
        
        {/* Footer note */}
        <div className="mt-8 text-amber-700/70 text-sm font-serif italic">
          Sicilia • Tradizione • Eleganza
        </div>
        
      </div>
      
      {/* Additional decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-600/30 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-orange-600/40 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-amber-700/25 rounded-full animate-pulse delay-500"></div>
      
    </div>
  );
};

export default Index;
