export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Master Mountain Biking
          <span className="text-brand"> With Confidence</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          Expert 1-on-1 and group coaching using the proven FTC Method.
          <br />
          <span className="font-semibold text-brand">Fundamentals → Technique → Confidence</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://calendly.com/leonidasml/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg"
          >
            Book Your Session
          </a>
          <a
            href="#coaching"
            className="border-2 border-brand text-brand px-8 py-4 rounded-lg hover:bg-brand hover:text-white transition-colors font-semibold text-lg"
          >
            View Packages
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-brand">100+</p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Sessions Coached</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-brand">50+</p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Happy Riders</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-brand">95%</p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}