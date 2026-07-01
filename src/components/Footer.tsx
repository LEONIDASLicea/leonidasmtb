import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-brand mb-4">LeonidasMTB</h3>
            <p className="text-sm text-slate-400">
              Expert mountain bike coaching powered by the FTC Method.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#ftc" className="text-slate-400 hover:text-brand transition-colors">
                  FTC Method
                </a>
              </li>
              <li>
                <a href="#coaching" className="text-slate-400 hover:text-brand transition-colors">
                  Coaching
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-slate-400 hover:text-brand transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://instagram.com/bloodlineracingmtb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-brand transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:leonidas@leonidasmtb.com"
                  className="text-slate-400 hover:text-brand transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Book Now</h4>
            <a
              href="https://calendly.com/leonidasml/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
            >
              Schedule Session
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400 mb-4 md:mb-0">
              © {currentYear} LeonidasMTB. All rights reserved.
            </p>
            <p className="text-xs text-slate-500">
              Powered by the FTC Method — Fundamentals → Technique → Confidence
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}