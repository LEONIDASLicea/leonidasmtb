'use client'

export default function Coaching() {
  const packages = [
    {
      title: '2 Hour Session',
      price: '$100',
      description: 'Perfect for trying out coaching or quick technique tune-ups',
      features: ['Focused skill work', 'Trail assessment', 'Feedback & form check'],
    },
    {
      title: '4 Hour Session',
      price: '$200',
      description: 'Most popular - deep dive into skills with real trail application',
      features: ['Comprehensive coaching', 'Multiple skills covered', 'Confidence building', 'Trail ride included'],
      popular: true,
    },
    {
      title: '6 Hour Session',
      price: '$450',
      description: 'Full day intensive - master multiple skills in one session',
      features: ['Complete day coaching', '3+ skills covered', 'Trail exploration', 'Form video review'],
    },
  ]

  return (
    <section id="coaching" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">1-on-1 Coaching</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Personalized sessions tailored to your level and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`rounded-lg overflow-hidden transition-all ${
                pkg.popular
                  ? 'ring-2 ring-brand shadow-lg scale-105 md:scale-110'
                  : 'border border-slate-200 dark:border-slate-700'
              } ${pkg.popular ? 'bg-slate-50 dark:bg-slate-800' : 'bg-white dark:bg-slate-900'}`}
            >
              {pkg.popular && (
                <div className="bg-brand text-white text-center py-2 text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-4xl font-bold text-brand mb-4">{pkg.price}</p>
                <p className="text-slate-600 dark:text-slate-400 mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="text-brand font-bold">✓</span>
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://calendly.com/leonidasml/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-brand text-white hover:bg-red-700'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  Book Session
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Group Coaching */}
        <div className="bg-gradient-to-r from-brand to-red-600 text-white rounded-lg p-8 sm:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Group Coaching</h3>
          <p className="text-lg mb-6 opacity-95">
            Build confidence alongside other riders with custom group sessions
          </p>
          <p className="text-xl font-semibold mb-8">Custom Quote — Contact for Details</p>
          <a
            href="mailto:leonidas@leonidasmtb.com"
            className="inline-block bg-white text-brand px-8 py-3 rounded-lg hover:bg-slate-100 transition-colors font-semibold"
          >
            Email for Group Options
          </a>
        </div>
      </div>
    </section>
  )
}