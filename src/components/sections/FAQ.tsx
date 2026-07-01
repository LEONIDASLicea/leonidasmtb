'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What skill level do you coach?',
      answer:
        'I work with riders of all levels — from complete beginners to advanced riders. The FTC Method scales to your level. We always start with fundamentals and build from there.',
    },
    {
      question: 'Do I need my own bike?',
      answer:
        'Yes, bring your own bike that\'s in good working condition. Make sure brakes work, tires are properly inflated, and the bike feels comfortable for you.',
    },
    {
      question: 'What should I wear?',
      answer:
        'Wear comfortable clothing that lets you move freely. A helmet is essential — no exceptions. Protective gear (knee/elbow pads) is recommended. Bring water and wear sunscreen.',
    },
    {
      question: 'How much progress will I see?',
      answer:
        'Most riders notice improvements in their first session. After 2-3 sessions, you\'ll feel significantly more confident. The more you practice between sessions, the faster you progress.',
    },
    {
      question: 'Can you coach group lessons?',
      answer:
        'Yes! Group lessons are available with custom pricing. They\'re great for friends riding together. Email for details: leonidas@leonidasmtb.com',
    },
    {
      question: 'What if I\'m nervous?',
      answer:
        'That\'s completely normal. We go at your pace. I\'ll never push you beyond your comfort zone without your permission. Building confidence is the whole point.',
    },
    {
      question: 'How do I book a session?',
      answer:
        'Click "Book Your Session" or visit calendly.com/leonidasml/30min to see available times and schedule.',
    },
    {
      question: 'What\'s your cancellation policy?',
      answer:
        'Cancel up to 24 hours before your session for a full refund. Cancellations within 24 hours may be charged. Reschedules are free if done with notice.',
    },
  ]

  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Everything you need to know about coaching
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <span>{faq.question}</span>
                <span className="text-brand text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-slate-900 rounded-lg p-8 text-center border border-slate-200 dark:border-slate-800">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Reach out directly — I love answering questions!
          </p>
          <a
            href="mailto:leonidas@leonidasmtb.com"
            className="inline-block bg-brand text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
          >
            Send an Email
          </a>
        </div>
      </div>
    </section>
  )
}