export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Rider Gallery</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Real riding, real progress, real riders
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-slate-300 dark:bg-slate-800 aspect-square rounded-lg flex items-center justify-center overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="text-center group-hover:scale-110 transition-transform">
                <p className="text-5xl mb-2">🚵</p>
                <p className="text-slate-600 dark:text-slate-400">
                  Photo {i}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            📸 No AI. Only real riding photos from real sessions with real riders.
          </p>
          <a
            href="https://instagram.com/bloodlineracingmtb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
          >
            See More on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}