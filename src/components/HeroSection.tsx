import { Leaf } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative">
      {/* BACKGROUND COLOR */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900" />
      <div className="absolute inset-0 bg-black/20" />

      {/* DECORATIONS */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm py-2 px-4 rounded-full mb-6">
              <Leaf className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">
                Premium Plant Collection
              </span>
            </div>
            <h2 className="font-bold text-6xl mb-6">
              Transform Your Space Into a
              <span className="block bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                Green Paradise
              </span>
            </h2>
            <p className="text-xl mb-8 text-green-100 leading-relaxed">
              Discover our curated collection of premium houseplants, carefully
              selected for beauty, health benefits, and ease of care. From
              beginners to experts, find your perfect green companion.
            </p>
            <div className="flex gap-4 flex-col sm:flex-row">
              <button className="py-4 px-8 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl font-semibold hover:scale-105 transform shadow-xl transition-all duration-300">
                Shop Collection
              </button>
              <button className="py-4 px-8 border-2 border-white-30 text-white rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Plant Care Guide
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/50 to-amber-400/50 rounded-3xl blur-[100px] brightness-125" />
            <img
              src="/images/hero-plants.jpg"
              alt="Picture of a plant"
              className="relative rounded-3xl w-full h-[500px] object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
