export function Hero() {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 text-center z-10">
        <div className="fade-in-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-dancing font-bold gradient-text mb-8">
            Feliz Cumpleaños
          </h1>
          <h2 className="text-4xl md:text-6xl font-dancing text-primary mb-12">
            Angie 🎉
          </h2>
        </div>

        <div className="flex justify-center mb-12 scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="polaroid">
            <img 
              src="/images/hero.jpeg" 
              alt="Birthday person" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg"
            />
            <div className="text-center mt-2 font-dancing text-xl text-gray-700">
              Por otro año lleno de aventuras ✨
            </div>
            <div className="text-center mt-2 font-dancing text-xl text-gray-700">
              25 Diciembre 2025 🎈🎇
            </div>
          </div>
        </div>

        <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
Hoy celebro a mi persona favorita. Gracias por tanta alegría. Por otro año de aventuras, risas y recuerdos inolvidables. Feliz cumpleaños
          </p>
        </div>
      </div>
    </section>
  )
}
