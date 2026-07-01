export default function MeetLeonidas() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-300 dark:bg-slate-800 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <p className="text-6xl mb-4">🚵</p>
              <p className="text-slate-600 dark:text-slate-400">
                Upload your riding photo here
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Meet Leonidas</h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Hi! I'm Leonidas, a passionate mountain bike coach dedicated to helping riders of all levels reach their full potential. With years of competitive racing experience and hundreds of successful coaching sessions, I've developed the FTC Method to ensure every rider improves systematically.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              I believe that great riding comes from building confidence through solid fundamentals and proven technique. Whether you're just starting out or pushing for your next level, I'm here to guide you on every step of the journey.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="font-semibold">Race Experience</p>
                  <p className="text-slate-600 dark:text-slate-400">Competitive MTB racing background with podium finishes</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">👥</span>
                <div>
                  <p className="font-semibold">100+ Students</p>
                  <p className="text-slate-600 dark:text-slate-400">Proven track record of helping riders improve</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold">Local Expert</p>
                  <p className="text-slate-600 dark:text-slate-400">Deep knowledge of local trail systems and conditions</p>
                </div>
              </div>
            </div>

            <a
              href="https://instagram.com/bloodlineracingmtb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-brand text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Follow @bloodlineracingmtb
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}