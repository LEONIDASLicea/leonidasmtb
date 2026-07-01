export default function FTCMethod() {
  const steps = [
    {
      title: 'Fundamentals',
      description: 'Build a rock-solid foundation with proper body position, brake control, and line selection. Master the basics before pushing harder.',
      icon: '🏔️',
    },
    {
      title: 'Technique',
      description: 'Develop advanced skills like cornering, jumping, and descending. Refine your muscle memory with precision coaching.',
      icon: '⚡',
    },
    {
      title: 'Confidence',
      description: 'Apply your skills to real trails with growing confidence. Tackle bigger obstacles and steeper terrain safely.',
      icon: '🚀',
    },
  ]

  return (
    <section id="ftc" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">The FTC Method</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            A proven progression for developing expert-level riding skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <div className="text-sm font-bold text-brand mb-2">STEP {index + 1}</div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-brand text-white p-8 sm:p-12 rounded-lg text-center">
          <p className="text-lg sm:text-xl font-semibold">
            Every session follows the FTC Method to ensure steady, sustainable progress.
          </p>
        </div>
      </div>
    </section>
  )
}