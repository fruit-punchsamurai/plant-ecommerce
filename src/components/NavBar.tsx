import { Leaf, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 justify-between">
          {/* LOGO */}
          <div className="flex items-center space-x-3">
            <Leaf className="h-10 w-10 text-green-600 hover:text-green-700 transition-colors" />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                PlantParadise
              </h1>
              <p className="text-xs text-green-600 font-medium">
                Grow Your World
              </p>
            </div>
          </div>

          {/* SEARCH BAR DESKTOP */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div
              className={`relative w-full transition-all duration-300 ${
                isSearchFocused ? "scale-105" : ""
              }`}
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-500" />
              <input
                type="text"
                placeholder="Search plants, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full pl-12 pr-4 py-3 bg-green-50 border-2 border-green-200 rounded-2xl focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-300 text-gray-700 placeholder-green-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-500 hover:text-green-700"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* HOME PAGE NAVIGATION DESKTOP */}
          <nav className="hidden lg:flex space-x-8 items-center">
            <div className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Home
            </div>
            <div className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Plants
            </div>
            <div className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Care Guide
            </div>
            <div className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              About
            </div>
          </nav>

          {/* RIGHT SIDE ICONS */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-green-600 transition-colors hover:bg-green-50 rounded-full">
              <User className="h-6 w-6" />
            </button>

            <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors hover:bg-green-50 rounded-full">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-bounce">
                1
              </span>
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:bg-green-50 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {/* MOBILE SEARCH BAR */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute top-1/2 transform -translate-y-1/2 left-4 h-5 w-5 text-green-500" />
            <input
              type="text"
              placeholder="Search plants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-green-50 border-2 border-green-200 rounded-2xl focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-300"
            />
          </div>
        </div>
        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-green-100 bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              <div className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2">
                Home
              </div>
              <div className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2">
                Plants
              </div>
              <div className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2">
                Care Guide
              </div>
              <div className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2">
                About
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
