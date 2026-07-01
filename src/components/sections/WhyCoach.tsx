export default function WhyCoach() {
  const reasons = [
    {
      title: 'Proven Method',
      description: 'The FTC Method works. Fundamentals first, then technique, then confidence. Hundreds of riders have followed this path to success.',
      icon: '✓',
    },
    {
      title: 'Personal Attention',
      description: 'Every session is 1-on-1. I focus entirely on you — your goals, your challenges, your progress. No group confusion.',
      icon: '👁️',
    },
    {
      title: 'Real Riding',
      description: 'We practice on real trails with real obstacles. You\'ll apply what you learn immediately, not in a controlled setting.',
      icon: '🏔️',
    },
    {
      title: 'Safety First',
      description: 'I prioritize your safety above all else. You\'ll build confidence at the right pace, pushing just enough to grow.',
      icon: '🛡️',
    },
    {
      title: 'Video Feedback',
      description: 'Form matters. I provide detailed video reviews so you see exactly what to improve and how to fix it.',
      icon: '📹',
    },
    {
      title: 'Long-term Support',
      description: 'This isn\'t a one-off. I\'ll guide you through your progression journey with follow-up coaching and ongoing support.',
      icon: '🤝',
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Work With Me</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Six reasons riders choose LeonidasMTB coaching
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <p className="text-4xl mb-4">{reason.icon}</p>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-brand text-white p-8 sm:p-12 rounded-lg text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Improve?</h3>
          <p className="text-lg mb-8 opacity-95">
            Schedule a free 30-minute consultation to discuss your goals
          </p>
          <a
            href="https://calendly.com/leonidasml/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-brand px-8 py-3 rounded-lg hover:bg-slate-100 transition-colors font-semibold text-lg"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </section>
  )
}